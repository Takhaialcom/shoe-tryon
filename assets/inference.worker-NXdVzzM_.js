/*!
 * ONNX Runtime Web v1.20.1
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var hn$1=Object.defineProperty,gu$1=Object.getOwnPropertyDescriptor,yu$1=Object.getOwnPropertyNames,bu$1=Object.prototype.hasOwnProperty,gn$1=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),k$1=(e,t)=>()=>(e&&(t=e(e=0)),t),bt$2=(e,t)=>{for(var r in t)hn$1(e,r,{get:t[r],enumerable:!0})},wu$1=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of yu$1(t))!bu$1.call(e,s)&&s!==r&&hn$1(e,s,{get:()=>t[s],enumerable:!(o=gu$1(t,s))||o.enumerable});return e},yn$1=e=>wu$1(hn$1({},"__esModule",{value:!0}),e),wt$1,We$2,Ge$2,_u$1,_t$1,$t$2=k$1(()=>{wt$1=new Map,We$2=[],Ge$2=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let o=wt$1.get(e);if(o===void 0)wt$1.set(e,{backend:t,priority:r});else{if(o.priority>r)return;if(o.priority===r&&o.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let s=We$2.indexOf(e);s!==-1&&We$2.splice(s,1);for(let i=0;i<We$2.length;i++)if(wt$1.get(We$2[i]).priority<=r){We$2.splice(i,0,e);return}We$2.push(e)}return}throw new TypeError("not a valid backend")},_u$1=async e=>{let t=wt$1.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(o){return r||(t.error=`${o}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},_t$1=async e=>{let t=e.executionProviders||[],r=t.map(p=>typeof p=="string"?p:p.name),o=r.length===0?We$2:r,s,i=[],a=new Set;for(let p of o){let n=await _u$1(p);typeof n=="string"?i.push({name:p,err:n}):(s||(s=n),s===n&&a.add(p))}if(!s)throw new Error(`no available backend found. ERR: ${i.map(p=>`[${p.name}] ${p.err}`).join(", ")}`);for(let{name:p,err:n}of i)r.includes(p)&&console.warn(`removing requested execution provider "${p}" from session options because it is not available: ${n}`);let d=t.filter(p=>a.has(typeof p=="string"?p:p.name));return[s,new Proxy(e,{get:(p,n)=>n==="executionProviders"?d:Reflect.get(p,n)})]}}),dr$2=k$1(()=>{$t$2()}),lr$2,cr$2=k$1(()=>{lr$2="1.20.1"}),pr$2,we$1,bn$1=k$1(()=>{cr$2(),pr$2="warning",we$1={wasm:{},webgl:{},webgpu:{},versions:{common:lr$2},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);pr$2=e}},get logLevel(){return pr$2}},Object.defineProperty(we$1,"logLevel",{enumerable:!0})}),ee$2,mr$2=k$1(()=>{bn$1(),ee$2=we$1}),fr$2,hr$2,gr$1=k$1(()=>{fr$2=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let o=r.getContext("2d");if(o!=null){let s,i;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],i=e.dims[3]):(s=e.dims[3],i=e.dims[2]);let a=t?.format!==void 0?t.format:"RGB",d=t?.norm,p,n;d===void 0||d.mean===void 0?p=[255,255,255,255]:typeof d.mean=="number"?p=[d.mean,d.mean,d.mean,d.mean]:(p=[d.mean[0],d.mean[1],d.mean[2],0],d.mean[3]!==void 0&&(p[3]=d.mean[3])),d===void 0||d.bias===void 0?n=[0,0,0,0]:typeof d.bias=="number"?n=[d.bias,d.bias,d.bias,d.bias]:(n=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(n[3]=d.bias[3]));let l=i*s,u=0,c=l,h=l*2,f=-1;a==="RGBA"?(u=0,c=l,h=l*2,f=l*3):a==="RGB"?(u=0,c=l,h=l*2):a==="RBG"&&(u=0,h=l,c=l*2);for(let g=0;g<i;g++)for(let b=0;b<s;b++){let E=(e.data[u++]-n[0])*p[0],y=(e.data[c++]-n[1])*p[1],F=(e.data[h++]-n[2])*p[2],L=f===-1?255:(e.data[f++]-n[3])*p[3];o.fillStyle="rgba("+E+","+y+","+F+","+L+")",o.fillRect(b,g,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},hr$2=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),o;if(r!=null){let s,i,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],i=e.dims[1],a=e.dims[3]):(s=e.dims[3],i=e.dims[2],a=e.dims[1]);let d=t!==void 0&&t.format!==void 0?t.format:"RGB",p=t?.norm,n,l;p===void 0||p.mean===void 0?n=[255,255,255,255]:typeof p.mean=="number"?n=[p.mean,p.mean,p.mean,p.mean]:(n=[p.mean[0],p.mean[1],p.mean[2],255],p.mean[3]!==void 0&&(n[3]=p.mean[3])),p===void 0||p.bias===void 0?l=[0,0,0,0]:typeof p.bias=="number"?l=[p.bias,p.bias,p.bias,p.bias]:(l=[p.bias[0],p.bias[1],p.bias[2],0],p.bias[3]!==void 0&&(l[3]=p.bias[3]));let u=i*s;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let c=4,h=0,f=1,g=2,b=3,E=0,y=u,F=u*2,L=-1;d==="RGBA"?(E=0,y=u,F=u*2,L=u*3):d==="RGB"?(E=0,y=u,F=u*2):d==="RBG"&&(E=0,F=u,y=u*2),o=r.createImageData(s,i);for(let K=0;K<i*s;h+=c,f+=c,g+=c,b+=c,K++)o.data[h]=(e.data[E++]-l[0])*n[0],o.data[f]=(e.data[y++]-l[1])*n[1],o.data[g]=(e.data[F++]-l[2])*n[2],o.data[b]=L===-1?255:(e.data[L++]-l[3])*n[3]}else throw new Error("Can not access image data");return o}}),wn$1,yr$2,br$1,wr$1,_r$2,$r$2,vr$2=k$1(()=>{vt$2(),wn$1=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:o}=t,s=t.norm??{mean:255,bias:0},i,a;typeof s.mean=="number"?i=[s.mean,s.mean,s.mean,s.mean]:i=[s.mean[0],s.mean[1],s.mean[2],s.mean[3]??255],typeof s.bias=="number"?a=[s.bias,s.bias,s.bias,s.bias]:a=[s.bias[0],s.bias[1],s.bias[2],s.bias[3]??0];let d=t.format!==void 0?t.format:"RGBA",p=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",n=r*o,l=p==="RGBA"?new Float32Array(n*4):new Float32Array(n*3),u=4,c=0,h=1,f=2,g=3,b=0,E=n,y=n*2,F=-1;d==="RGB"&&(u=3,c=0,h=1,f=2,g=-1),p==="RGBA"?F=n*3:p==="RBG"?(b=0,y=n,E=n*2):p==="BGR"&&(y=0,E=n,b=n*2);for(let L=0;L<n;L++,c+=u,f+=u,h+=u,g+=u)l[b++]=(e[c]+a[0])/i[0],l[E++]=(e[h]+a[1])/i[1],l[y++]=(e[f]+a[2])/i[2],F!==-1&&g!==-1&&(l[F++]=(e[g]+a[3])/i[3]);return p==="RGBA"?new pe$1("float32",l,[1,4,r,o]):new pe$1("float32",l,[1,3,r,o])},yr$2=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,o=typeof ImageData<"u"&&e instanceof ImageData,s=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,i=typeof e=="string",a,d=t??{},p=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},n=l=>typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||l instanceof OffscreenCanvas?l.getContext("2d"):null;if(r){let l=p();l.width=e.width,l.height=e.height;let u=n(l);if(u!=null){let c=e.height,h=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(c=t.resizedHeight,h=t.resizedWidth),t!==void 0){if(d=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");d.tensorFormat="RGBA",d.height=c,d.width=h}else d.tensorFormat="RGBA",d.height=c,d.width=h;u.drawImage(e,0,0),a=u.getImageData(0,0,h,c).data}else throw new Error("Can not access image data")}else if(o){let l,u;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(l=t.resizedHeight,u=t.resizedWidth):(l=e.height,u=e.width),t!==void 0&&(d=t),d.format="RGBA",d.height=l,d.width=u,t!==void 0){let c=p();c.width=u,c.height=l;let h=n(c);if(h!=null)h.putImageData(e,0,0),a=h.getImageData(0,0,u,l).data;else throw new Error("Can not access image data")}else a=e.data}else if(s){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let l=p();l.width=e.width,l.height=e.height;let u=n(l);if(u!=null){let c=e.height,h=e.width;return u.drawImage(e,0,0,h,c),a=u.getImageData(0,0,h,c).data,d.height=c,d.width=h,wn$1(a,d)}else throw new Error("Can not access image data")}else{if(i)return new Promise((l,u)=>{let c=p(),h=n(c);if(!e||!h)return u();let f=new Image;f.crossOrigin="Anonymous",f.src=e,f.onload=()=>{c.width=f.width,c.height=f.height,h.drawImage(f,0,0,c.width,c.height);let g=h.getImageData(0,0,c.width,c.height);d.height=c.height,d.width=c.width,l(wn$1(g.data,d))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return wn$1(a,d);throw new Error("Input data provided is not supported - aborted tensor creation")},br$1=(e,t)=>{let{width:r,height:o,download:s,dispose:i}=t,a=[1,o,r,4];return new pe$1({location:"texture",type:"float32",texture:e,dims:a,download:s,dispose:i})},wr$1=(e,t)=>{let{dataType:r,dims:o,download:s,dispose:i}=t;return new pe$1({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:o,download:s,dispose:i})},_r$2=(e,t)=>{let{dataType:r,dims:o,download:s,dispose:i}=t;return new pe$1({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:o,download:s,dispose:i})},$r$2=(e,t,r)=>new pe$1({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),He$2,nt$2,xr$2,Sr$2,Ir$2=k$1(()=>{He$2=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),nt$2=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),xr$2=!1,Sr$2=()=>{if(!xr$2){xr$2=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=typeof Float16Array<"u"&&Float16Array.from;e&&(He$2.set("int64",BigInt64Array),nt$2.set(BigInt64Array,"int64")),t&&(He$2.set("uint64",BigUint64Array),nt$2.set(BigUint64Array,"uint64")),r?(He$2.set("float16",Float16Array),nt$2.set(Float16Array,"float16")):He$2.set("float16",Uint16Array)}}}),Tr$1,Cr$2,Ar$2=k$1(()=>{vt$2(),Tr$1=e=>{let t=1;for(let r=0;r<e.length;r++){let o=e[r];if(typeof o!="number"||!Number.isSafeInteger(o))throw new TypeError(`dims[${r}] must be an integer, got: ${o}`);if(o<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${o}`);t*=o}return t},Cr$2=(e,t)=>{switch(e.location){case"cpu":return new pe$1(e.type,e.data,t);case"cpu-pinned":return new pe$1({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new pe$1({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new pe$1({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new pe$1({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),pe$1,vt$2=k$1(()=>{gr$1(),vr$2(),Ir$2(),Ar$2(),pe$1=class{constructor(e,t,r){Sr$2();let o,s;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,o=e.type,s=e.dims,e.location){case"cpu-pinned":{let a=He$2.get(o);if(!a)throw new TypeError(`unsupported type "${o}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(o!=="float32")throw new TypeError(`unsupported type "${o}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint8"&&o!=="bool"&&o!=="uint4"&&o!=="int4")throw new TypeError(`unsupported type "${o}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint64"&&o!=="int8"&&o!=="uint8"&&o!=="bool")throw new TypeError(`unsupported type "${o}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,d;if(typeof e=="string")if(o=e,d=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let p=He$2.get(e);if(p===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&p===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${p.name} as data.`);e==="uint64"||e==="int64"?a=p.from(t,BigInt):a=p.from(t)}else if(t instanceof p)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${o} tensor's data must be type of ${p}`)}else if(d=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let p=typeof e[0];if(p==="string")o="string",a=e;else if(p==="boolean")o="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${p}.`)}else if(e instanceof Uint8ClampedArray)o="uint8",a=Uint8Array.from(e);else{let p=nt$2.get(e.constructor);if(p===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);o=p,a=e}if(d===void 0)d=[a.length];else if(!Array.isArray(d))throw new TypeError("A tensor's dims must be a number array");s=d,this.cpuData=a,this.dataLocation="cpu"}let i=Tr$1(s);if(this.cpuData&&i!==this.cpuData.length&&!((o==="uint4"||o==="int4")&&Math.ceil(i/2)===this.cpuData.length))throw new Error(`Tensor's size(${i}) does not match data length(${this.cpuData.length}).`);this.type=o,this.dims=s,this.size=i}static async fromImage(e,t){return yr$2(e,t)}static fromTexture(e,t){return br$1(e,t)}static fromGpuBuffer(e,t){return wr$1(e,t)}static fromMLTensor(e,t){return _r$2(e,t)}static fromPinnedBuffer(e,t,r){return $r$2(e,t,r)}toDataURL(e){return fr$2(this,e)}toImageData(e){return hr$2(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Cr$2(this,e)}}}),me$1,xt$2=k$1(()=>{vt$2(),me$1=pe$1}),St$2,kr$1,_e$2,ye$1,_n$1=k$1(()=>{bn$1(),St$2=(e,t)=>{(typeof we$1.trace>"u"?!we$1.wasm.trace:!we$1.trace)||console.timeStamp(`${e}::ORT::${t}`)},kr$1=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],o=!1;for(let s=0;s<r.length;s++){if(o&&!r[s].includes("TRACE_FUNC")){let i=`FUNC_${e}::${r[s].trim().split(" ")[1]}`;t&&(i+=`::${t}`),St$2("CPU",i);return}r[s].includes("TRACE_FUNC")&&(o=!0)}},_e$2=e=>{(typeof we$1.trace>"u"?!we$1.wasm.trace:!we$1.trace)||kr$1("BEGIN",e)},ye$1=e=>{(typeof we$1.trace>"u"?!we$1.wasm.trace:!we$1.trace)||kr$1("END",e)}}),It$1,Er$1=k$1(()=>{$t$2(),xt$2(),_n$1(),It$1=class zh{constructor(t){this.handler=t}async run(t,r,o){_e$2();let s={},i={};if(typeof t!="object"||t===null||t instanceof me$1||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof me$1)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let n of r){if(typeof n!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(n)===-1)throw new RangeError(`'fetches' contains invalid output name: ${n}.`);s[n]=null}if(typeof o=="object"&&o!==null)i=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else{let n=!1,l=Object.getOwnPropertyNames(r);for(let u of this.outputNames)if(l.indexOf(u)!==-1){let c=r[u];(c===null||c instanceof me$1)&&(n=!0,a=!1,s[u]=c)}if(n){if(typeof o=="object"&&o!==null)i=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else i=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let n of this.inputNames)if(typeof t[n]>"u")throw new Error(`input '${n}' is missing in 'feeds'.`);if(a)for(let n of this.outputNames)s[n]=null;let d=await this.handler.run(t,s,i),p={};for(let n in d)if(Object.hasOwnProperty.call(d,n)){let l=d[n];l instanceof me$1?p[n]=l:p[n]=new me$1(l.type,l.data,l.dims)}return ye$1(),p}async release(){return this.handler.dispose()}static async create(t,r,o,s){_e$2();let i,a={};if(typeof t=="string"){if(i=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(i=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let l=t,u=0,c=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(u=r,!Number.isSafeInteger(u))throw new RangeError("'byteOffset' must be an integer.");if(u<0||u>=l.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${l.byteLength}).`);if(c=t.byteLength-u,typeof o=="number"){if(c=o,!Number.isSafeInteger(c))throw new RangeError("'byteLength' must be an integer.");if(c<=0||u+c>l.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${l.byteLength-u}].`);if(typeof s=="object"&&s!==null)a=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else if(typeof o<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");i=new Uint8Array(l,u,c)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[d,p]=await _t$1(a),n=await d.createInferenceSessionHandler(i,p);return ye$1(),new zh(n)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),$u$1,Pr$2=k$1(()=>{Er$1(),$u$1=It$1}),zr$2=k$1(()=>{}),Br$2=k$1(()=>{}),Dr$2=k$1(()=>{}),Or$2=k$1(()=>{}),vu$1,Tt$2,Rr$2=k$1(()=>{$t$2(),xt$2(),vu$1="Training backend could not be resolved. Make sure you're using the correct configuration & WebAssembly files.",Tt$2=class Nh{constructor(t,r,o){this.handler=t,this.hasOptimizerModel=r,this.hasEvalModel=o}get trainingInputNames(){return this.handler.inputNames}get trainingOutputNames(){return this.handler.outputNames}get evalInputNames(){if(this.hasEvalModel)return this.handler.evalInputNames;throw new Error("This training session has no evalModel loaded.")}get evalOutputNames(){if(this.hasEvalModel)return this.handler.evalOutputNames;throw new Error("This training session has no evalModel loaded.")}static async create(t,r){let o=t.evalModel||"",s=t.optimizerModel||"",i=r||{},[a,d]=await _t$1(i);if(a.createTrainingSessionHandler){let p=await a.createTrainingSessionHandler(t.checkpointState,t.trainModel,o,s,d);return new Nh(p,!!t.optimizerModel,!!t.evalModel)}else throw new Error(vu$1)}typeNarrowingForRunStep(t,r,o,s,i){let a={},d={};if(typeof o!="object"||o===null||o instanceof me$1||Array.isArray(o))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let p=!0;if(typeof s=="object"){if(s===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(s instanceof me$1)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(s)){if(s.length===0)throw new TypeError("'fetches' cannot be an empty array.");p=!1;for(let n of s){if(typeof n!="string")throw new TypeError("'fetches' must be a string array or an object.");if(r.indexOf(n)===-1)throw new RangeError(`'fetches' contains invalid output name: ${n}.`);a[n]=null}if(typeof i=="object"&&i!==null)d=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let n=!1,l=Object.getOwnPropertyNames(s);for(let u of r)if(l.indexOf(u)!==-1){let c=s[u];(c===null||c instanceof me$1)&&(n=!0,p=!1,a[u]=c)}if(n){if(typeof i=="object"&&i!==null)d=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else d=s}}else if(typeof s<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let n of t)if(typeof o[n]>"u")throw new Error(`input '${n}' is missing in 'feeds'.`);if(p)for(let n of r)a[n]=null;return[a,d]}convertHandlerReturnTypeToMapOfTensors(t){let r={};for(let o in t)if(Object.hasOwnProperty.call(t,o)){let s=t[o];s instanceof me$1?r[o]=s:r[o]=new me$1(s.type,s.data,s.dims)}return r}async lazyResetGrad(){await this.handler.lazyResetGrad()}async runTrainStep(t,r,o){let[s,i]=this.typeNarrowingForRunStep(this.trainingInputNames,this.trainingOutputNames,t,r,o),a=await this.handler.runTrainStep(t,s,i);return this.convertHandlerReturnTypeToMapOfTensors(a)}async runOptimizerStep(t){if(this.hasOptimizerModel)await this.handler.runOptimizerStep(t||{});else throw new Error("This TrainingSession has no OptimizerModel loaded.")}async runEvalStep(t,r,o){if(this.hasEvalModel){let[s,i]=this.typeNarrowingForRunStep(this.evalInputNames,this.evalOutputNames,t,r,o),a=await this.handler.runEvalStep(t,s,i);return this.convertHandlerReturnTypeToMapOfTensors(a)}else throw new Error("This TrainingSession has no EvalModel loaded.")}async getParametersSize(t=!0){return this.handler.getParametersSize(t)}async loadParametersBuffer(t,r=!0){let o=await this.getParametersSize(r);if(t.length!==4*o)throw new Error("Size of the buffer passed into loadParametersBuffer must match the number of parameters in the model. Please use getParametersSize method to check.");return this.handler.loadParametersBuffer(t,r)}async getContiguousParameters(t=!0){return this.handler.getContiguousParameters(t)}async release(){return this.handler.dispose()}}}),xu$1,Mr$2=k$1(()=>{Rr$2(),xu$1=Tt$2}),$n$1={};bt$2($n$1,{InferenceSession:()=>$u$1,TRACE:()=>St$2,TRACE_FUNC_BEGIN:()=>_e$2,TRACE_FUNC_END:()=>ye$1,Tensor:()=>me$1,TrainingSession:()=>xu$1,env:()=>ee$2,registerBackend:()=>Ge$2});var Se$2=k$1(()=>{dr$2(),mr$2(),Pr$2(),xt$2(),zr$2(),Br$2(),_n$1(),Dr$2(),Or$2(),Mr$2()}),Ct$1=k$1(()=>{}),Nr$2={};bt$2(Nr$2,{default:()=>Su$1});var Vr$1,Lr$2,Su$1,Wr$1=k$1(()=>{vn$1(),Le$2(),rt$2(),Vr$1="ort-wasm-proxy-worker",Lr$2=globalThis.self?.name===Vr$1,Lr$2&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":At$1(r.wasm).then(()=>{kt$2(r).then(()=>{postMessage({type:t})},o=>{postMessage({type:t,err:o})})},o=>{postMessage({type:t,err:o})});break;case"init-ep":{let{epName:o,env:s}=r;Et$2(s,o).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})});break}case"copy-from":{let{buffer:o}=r,s=ot$1(o);postMessage({type:t,out:s});break}case"create":{let{model:o,options:s}=r;Pt$2(o,s).then(i=>{postMessage({type:t,out:i})},i=>{postMessage({type:t,err:i})});break}case"release":zt$2(r),postMessage({type:t});break;case"run":{let{sessionId:o,inputIndices:s,inputs:i,outputIndices:a,options:d}=r;Bt$2(o,s,i,a,new Array(a.length).fill(null),d).then(p=>{p.some(n=>n[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:p},Ot$1([...i,...p]))},p=>{postMessage({type:t,err:p})});break}case"end-profiling":Dt$2(r),postMessage({type:t});break;default:}}catch(o){postMessage({type:t,err:o})}}),Su$1=Lr$2?null:e=>new Worker(e??Ie$2,{type:"module",name:Vr$1})}),Ie$2,Iu$1,Hr$1,Tu$1,Cu$1,qr,Au$1,Gr$1,Fr$2,Kr,rt$2=k$1(()=>{Ct$1(),Ie$2=import.meta.url??(typeof document<"u"?document.currentScript?.src:typeof self<"u"?self.location?.href:void 0),Iu$1=typeof location>"u"?void 0:location.origin,Hr$1=(e,t)=>{try{let r=t??Ie$2;return(r?new URL(e,r):new URL(e)).origin===Iu$1}catch{return!1}},Tu$1=(e,t)=>{let r=t??Ie$2;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Cu$1=(e,t)=>`${t??"./"}${e}`,qr=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Au$1=async e=>(await import(e)).default,Gr$1=(Wr$1(),yn$1(Nr$2)).default,Fr$2=async()=>{if(!Ie$2)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Hr$1(Ie$2))return[void 0,Gr$1()];let e=await qr(Ie$2);return[e,Gr$1(e)]},Kr=async(e,t,r)=>{{let o="ort-wasm-simd-threaded.jsep.mjs",s=e??Tu$1(o,t),i=r&&s&&!Hr$1(s,t),a=i?await qr(s):s??Cu$1(o,t);return[i?a:void 0,await Au$1(a)]}}}),xn$1,Sn$1,Rt$1,jr$1,ku$1,Eu$1,At$1,se$2,Le$2=k$1(()=>{rt$2(),Sn$1=!1,Rt$1=!1,jr$1=!1,ku$1=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Eu$1=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},At$1=async e=>{if(Sn$1)return Promise.resolve();if(Rt$1)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(jr$1)throw new Error("previous call to 'initializeWebAssembly()' failed.");Rt$1=!0;let t=e.initTimeout,r=e.numThreads;if(!Eu$1())throw new Error("WebAssembly SIMD is not supported in the current environment.");let o=ku$1();r>1&&!o&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let s=e.wasmPaths,i=typeof s=="string"?s:void 0,a=s?.mjs,d=a?.href??a,p=s?.wasm,n=p?.href??p,l=e.wasmBinary,[u,c]=await Kr(d,i,r>1),h=!1,f=[];if(t>0&&f.push(new Promise(g=>{setTimeout(()=>{h=!0,g()},t)})),f.push(new Promise((g,b)=>{let E={numThreads:r};l?E.wasmBinary=l:(n||i)&&(E.locateFile=(y,F)=>n??(i??F)+y),c(E).then(y=>{Rt$1=!1,Sn$1=!0,xn$1=y,g(),u&&URL.revokeObjectURL(u)},y=>{Rt$1=!1,jr$1=!0,b(y)})})),await Promise.race(f),h)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},se$2=()=>{if(Sn$1&&xn$1)return xn$1;throw new Error("WebAssembly is not initialized yet.")}}),ue$2,it$1,oe$2,Mt$1=k$1(()=>{Le$2(),ue$2=(e,t)=>{let r=se$2(),o=r.lengthBytesUTF8(e)+1,s=r._malloc(o);return r.stringToUTF8(e,s,o),t.push(s),s},it$1=(e,t,r,o)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([s,i])=>{let a=t?t+s:s;if(typeof i=="object")it$1(i,a+".",r,o);else if(typeof i=="string"||typeof i=="number")o(a,i.toString());else if(typeof i=="boolean")o(a,i?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof i}`)})},oe$2=e=>{let t=se$2(),r=t.stackSave();try{let o=t.stackAlloc(8);t._OrtGetLastError(o,o+4);let s=t.HEAP32[o/4],i=t.HEAPU32[o/4+1],a=i?t.UTF8ToString(i):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${a}`)}finally{t.stackRestore(r)}}}),Xr,Zr=k$1(()=>{Le$2(),Mt$1(),Xr=e=>{let t=se$2(),r=0,o=[],s=e||{};try{if(e?.logSeverityLevel===void 0)s.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)s.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(s.terminate=!1);let i=0;return e?.tag!==void 0&&(i=ue$2(e.tag,o)),r=t._OrtCreateRunOptions(s.logSeverityLevel,s.logVerbosityLevel,!!s.terminate,i),r===0&&oe$2("Can't create run options."),e?.extra!==void 0&&it$1(e.extra,"",new WeakSet,(a,d)=>{let p=ue$2(a,o),n=ue$2(d,o);t._OrtAddRunConfigEntry(r,p,n)!==0&&oe$2(`Can't set a run config entry: ${a} - ${d}.`)}),[r,o]}catch(i){throw r!==0&&t._OrtReleaseRunOptions(r),o.forEach(a=>t._free(a)),i}}}),Pu$1,zu$1,Bu$1,Du$1,Qr,Yr$1=k$1(()=>{Le$2(),Mt$1(),Pu$1=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},zu$1=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Bu$1=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Du$1=(e,t,r)=>{for(let o of t){let s=typeof o=="string"?o:o.name;switch(s){case"webnn":if(s="WEBNN",typeof o!="string"){let a=o?.deviceType;if(a){let d=ue$2("deviceType",r),p=ue$2(a,r);se$2()._OrtAddSessionConfigEntry(e,d,p)!==0&&oe$2(`Can't set a session config entry: 'deviceType' - ${a}.`)}}break;case"webgpu":if(s="JS",typeof o!="string"){let a=o;if(a?.preferredLayout){if(a.preferredLayout!=="NCHW"&&a.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${a.preferredLayout}`);let d=ue$2("preferredLayout",r),p=ue$2(a.preferredLayout,r);se$2()._OrtAddSessionConfigEntry(e,d,p)!==0&&oe$2(`Can't set a session config entry: 'preferredLayout' - ${a.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let i=ue$2(s,r);se$2()._OrtAppendExecutionProvider(e,i)!==0&&oe$2(`Can't append execution provider: ${s}.`)}},Qr=e=>{let t=se$2(),r=0,o=[],s=e||{};Bu$1(s);try{let i=Pu$1(s.graphOptimizationLevel??"all"),a=zu$1(s.executionMode??"sequential"),d=typeof s.logId=="string"?ue$2(s.logId,o):0,p=s.logSeverityLevel??2;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log serverity level is not valid: ${p}`);let n=s.logVerbosityLevel??0;if(!Number.isInteger(n)||n<0||n>4)throw new Error(`log verbosity level is not valid: ${n}`);let l=typeof s.optimizedModelFilePath=="string"?ue$2(s.optimizedModelFilePath,o):0;if(r=t._OrtCreateSessionOptions(i,!!s.enableCpuMemArena,!!s.enableMemPattern,a,!!s.enableProfiling,0,d,p,n,l),r===0&&oe$2("Can't create session options."),s.executionProviders&&Du$1(r,s.executionProviders,o),s.enableGraphCapture!==void 0){if(typeof s.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${s.enableGraphCapture}`);let u=ue$2("enableGraphCapture",o),c=ue$2(s.enableGraphCapture.toString(),o);t._OrtAddSessionConfigEntry(r,u,c)!==0&&oe$2(`Can't set a session config entry: 'enableGraphCapture' - ${s.enableGraphCapture}.`)}if(s.freeDimensionOverrides)for(let[u,c]of Object.entries(s.freeDimensionOverrides)){if(typeof u!="string")throw new Error(`free dimension override name must be a string: ${u}`);if(typeof c!="number"||!Number.isInteger(c)||c<0)throw new Error(`free dimension override value must be a non-negative integer: ${c}`);let h=ue$2(u,o);t._OrtAddFreeDimensionOverride(r,h,c)!==0&&oe$2(`Can't set a free dimension override: ${u} - ${c}.`)}return s.extra!==void 0&&it$1(s.extra,"",new WeakSet,(u,c)=>{let h=ue$2(u,o),f=ue$2(c,o);t._OrtAddSessionConfigEntry(r,h,f)!==0&&oe$2(`Can't set a session config entry: ${u} - ${c}.`)}),[r,o]}catch(i){throw r!==0&&t._OrtReleaseSessionOptions(r),o.forEach(a=>t._free(a)),i}}}),st,Ne$2,Fe$2,Ut$2,at$1,Vt$2,Lt$2,In$1,U$2=k$1(()=>{st=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Ne$2=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Fe$2=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],o=typeof t=="number"?t:t.reduce((s,i)=>s*i,1);return r>0?Math.ceil(o*r):void 0},Ut$2=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},at$1=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Vt$2=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Lt$2=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool",In$1=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),ut$2,Tn$1=k$1(()=>{Ct$1(),ut$2=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),o=r?parseInt(r,10):0;if(o<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let s=t.body.getReader(),i;try{i=new ArrayBuffer(o)}catch(d){if(d instanceof RangeError){let p=Math.ceil(o/65536);i=new WebAssembly.Memory({initial:p,maximum:p}).buffer}else throw d}let a=0;for(;;){let{done:d,value:p}=await s.read();if(d)break;let n=p.byteLength;new Uint8Array(i,a,n).set(p),a+=n}return new Uint8Array(i,0,o)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Ou$1,Ru$1,Jr,eo$1,Nt$2,Mu$1,X,Ae$2=k$1(()=>{U$2(),Ou$1=["V","I","W","E","F"],Ru$1=(e,t)=>{console.log(`[${Ou$1[e]},${new Date().toISOString()}]${t}`)},Nt$2=(e,t)=>{Jr=e,eo$1=t},Mu$1=(e,t)=>{let r=at$1(e),o=at$1(Jr);r>=o&&Ru$1(r,typeof t=="function"?t():t)},X=(...e)=>{eo$1&&Mu$1(...e)}}),Wt$2,Cn$1=k$1(()=>{U$2(),Wt$2=(e,t)=>new(Ut$2(t))(e)}),Gt$2=k$1(()=>{}),to$1,An$1,kn$1,Uu$1,Vu$1,no$1,Pn$1,En$1,oo$1,io$1=k$1(()=>{Ae$2(),Gt$2(),to$1=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),An$1=[],kn$1=e=>Math.ceil(e/16)*16,Uu$1=e=>{for(let t=0;t<An$1.length;t++){let r=An$1[t];if(e<=r)return r}return Math.ceil(e/16)*16},Vu$1=1,no$1=()=>Vu$1++,Pn$1=async(e,t,r,o)=>{let s=kn$1(r),i=e.device.createBuffer({size:s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,i,0,s),e.flush(),await i.mapAsync(GPUMapMode.READ);let d=i.getMappedRange();if(o){let p=o();return p.set(new Uint8Array(d,0,r)),p}else return new Uint8Array(d.slice(0,r))}finally{i.destroy()}},En$1=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersForUploadingPending=[],this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of to$1)An$1.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[])}upload(e,t){let r=t.buffer,o=t.byteOffset,s=t.byteLength,i=kn$1(s),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(a.originalSize!==s)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${s}`);let d=this.backend.device.createBuffer({mappedAtCreation:!0,size:i,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),p=d.getMappedRange();new Uint8Array(p).set(new Uint8Array(r,o,s)),d.unmap();let n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(d,0,a.gpuData.buffer,0,i),X("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`),this.buffersForUploadingPending.push(d)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let o=this.storageCache.get(t);if(!o)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==o.originalSize)throw new Error("inconsistent source and destination gpu data size");let s=kn$1(r.originalSize),i=this.backend.getCommandEncoder();this.backend.endComputePass(),i.copyBufferToBuffer(r.gpuData.buffer,0,o.gpuData.buffer,0,s)}registerExternalBuffer(e,t,r){let o;if(r){if(o=r[0],e===r[1])return X("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${o}, buffer is the same, skip.`),o;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else o=no$1();return this.storageCache.set(o,{gpuData:{id:o,type:0,buffer:e},originalSize:t}),X("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${o}, registered.`),o}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),X("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Uu$1(e),o,s=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,i=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(s||i){let d=(s?this.freeBuffers:this.freeUniformBuffers).get(r);d?d.length>0?o=d.pop():o=this.backend.device.createBuffer({size:r,usage:t}):o=this.backend.device.createBuffer({size:r,usage:t})}else o=this.backend.device.createBuffer({size:r,usage:t});let a={id:no$1(),type:0,buffer:o};return this.storageCache.set(a.id,{gpuData:a,originalSize:e}),X("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=this.storageCache.get(e);if(!t)throw new Error("releasing data does not exist");return X("verbose",()=>`[WebGPU] GpuDataManager.release(id=${e}), gpuDataId=${t.gpuData.id}`),this.storageCache.delete(e),this.buffersPending.push(t.gpuData.buffer),t.originalSize}async download(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("data does not exist");await Pn$1(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){for(let e of this.buffersForUploadingPending)e.destroy();if(this.buffersForUploadingPending=[],this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=to$1.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e))}},oo$1=(...e)=>new En$1(...e)}),zn$1,V$2,ae$1=k$1(()=>{zn$1=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},V$2=e=>new zn$1(e)}),Bn$1,Ee$2,x$2,Ke$2,Ht$2,so$1,ao$1,N$1=k$1(()=>{Bn$1=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Ee$2=class{static calcShape(e,t,r=!1){let o=e.length,s=t.length;if(o===0)return t;if(s===0)return e;let i=Math.max(e.length,t.length),a=new Array(i);if(r){if(o<2||s<2)return;let d=Bn$1.calcMatMulShape([e[o-2],e[o-1]],[t[s-2],t[s-1]]);if(d===void 0)return;[a[i-2],a[i-1]]=d}for(let d=r?3:1;d<=i;d++){let p=o-d<0?1:e[o-d],n=s-d<0?1:t[s-d];if(p!==n&&p>1&&n>1)return;let l=Math.max(p,n);if(p&&n)a[i-d]=Math.max(p,n);else{if(l>1)return;a[i-d]=0}}return a}static isValidBroadcast(e,t){let r=e.length,o=t.length;if(r>o)return!1;for(let s=1;s<=r;s++)if(e[r-s]!==1&&e[r-s]!==t[o-s])return!1;return!0}},x$2=class kh{static size(t){return kh.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let o=t.length;if(o===0)return[];let s=new Array(o),i=o-1;for(;i>=0;){if(t[i]%r===0){s[i]=t[i]/r;break}if(r%t[i]!==0)throw new Error("cannot convert shape");s[i]=1,r/=t[i],i--}for(i--;i>=0;i--)s[i]=t[i];return s}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return kh.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return kh.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,o){let s=1;for(let i=r;i<o;i++){if(t[i]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");s*=t[i]}return s}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let o=new Array(r);o[r-1]=1,o[r-2]=t[r-1];for(let s=r-3;s>=0;--s)o[s]=o[s+1]*t[s+1];return o}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(o=>this.normalizeAxis(o,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(o=>t[o]):t.slice().reverse()}static padShape(t,r){let o=t.length;return t.map((s,i)=>s+r[i]+r[i+o])}static areEqual(t,r){return t.length!==r.length?!1:t.every((o,s)=>o===r[s])}},Ke$2=class Th{static adjustPoolAttributes(t,r,o,s,i,a){if(!t&&o.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let d=0;d<r.length-2;d++)d>=o.length?o.push(r[d+2]):o[d]=r[d+2];for(let d=0;d<o.length;d++)if(d<s.length){if(s[d]<0)throw new Error("strides should be greater than or equal to 1")}else s.push(1);for(let d=0;d<o.length;d++)if(d<i.length){if(i[d]<0)throw new Error("dilations should be greater than or equal to 1")}else i.push(1);for(let d=0;d<o.length*2;d++)if(d<a.length){if(a[d]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let d=0;d<o.length;d++){if(o[d]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[d]>=o[d]||a[d+o.length]>=o[d])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,o,s,i,a,d){if(d){if(i.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(s.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let p=0;p<t.length-2;p++)Th.adjustPadAndReturnShape(t[p+(a?1:2)],r[p],o[p],s[p],i,p,p+t.length-2,d)}}static computePoolOutputShape(t,r,o,s,i,a,d){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let p=[r[0],r[1]];return Th.computeShapeHelper(t,r,p,o,s,i,a,d),p}static computeConvOutputShape(t,r,o,s,i,a,d){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let p=[t[0],r[0]];return Th.computeShapeHelper(!1,t,p,o,s,i,a,d),p}static computeShapeHelper(t,r,o,s,i,a,d,p){if(t)for(let n=0;n<r.length-2;n++)o.push(1);else for(let n=0;n<r.length-2;n++)o.push(Th.adjustPadAndReturnShape(r[n+2],s[n],i[n],a[n],d,n,n+r.length-2,p))}static adjustPadAndReturnShape(t,r,o,s,i,a,d,p){let n=o*(s-1)+1;if(p&&p!=="NOTSET")switch(p){case"VALID":return i[a]=0,i[d]=0,Math.floor((t-n)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(o!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let l=((t+r-1)/r-1)*r+s-t;return i[a]=Math.floor(p==="SAME_LOWER"?(l+1)/2:l/2),i[d]=l-i[a],Math.floor((t+l-s)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+i[a]+i[d]-n)/r+1)}},Ht$2=class{static getShapeOfGemmResult(e,t,r,o,s){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let i,a,d;t?(i=e[1],a=e[0]):(i=e[0],a=e[1]);let p=-1;if(o?(d=r[0],p=1):(d=r[1],p=0),r[p]!==a)throw new Error("dimension mismatch");if(i<=0||d<=0||a<=0)throw new Error("invalid shape specified");if(s&&!Ee$2.isValidBroadcast(s,[i,d]))throw new Error("gemm: invalid bias shape for broadcast");return[i,d,a]}},so$1=-34028234663852886e22,ao$1=34028234663852886e22}),je$2,On$1,Y$2,de$2,A,te$1,Rn$1,Xe$2,ke$2,B$1,Mn$1,S$1,C,qt$1,Dn$1,uo$1,Ye$1,W=k$1(()=>{U$2(),N$1(),je$2=64,On$1=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(e){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Y$2=(e,t=1)=>{let r=On$1(e,t);return typeof r=="string"?r:r[0]},de$2=(e,t=1)=>{let r=On$1(e,t);return typeof r=="string"?r:r[1]},A=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:x$2.computeStrides(r)})}),t},te$1=e=>e%4===0?4:e%2===0?2:1,Rn$1=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Xe$2=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,ke$2=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,B$1=(e,t,r,o)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?o==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:o==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Mn$1=(e,t,r,o,s)=>{let i=typeof r=="number",a=i?r:r.length,d=[...new Array(a).keys()],p=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,n=On$1(t,s),l=typeof n=="string"?n:n[1],u=typeof n=="string"?n:n[0],c={indices:p,value:l,storage:u,tensor:t},h=Yp=>typeof Yp=="string"?Yp:`${Yp}u`,f={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},g=i?"uniforms.":"",b=`${g}${e}_shape`,E=`${g}${e}_strides`,y="";for(let Yp=0;Yp<a-1;Yp++)y+=`
    let dim${Yp} = current / ${B$1(E,Yp,a)};
    let rest${Yp} = current % ${B$1(E,Yp,a)};
    indices[${Yp}] = dim${Yp};
    current = rest${Yp};
    `;y+=`indices[${a-1}] = current;`;let F=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${c.indices} {
    var indices: ${c.indices};
    var current = offset;
    ${y}
    return indices;
  }`,L=Yp=>(f.offsetToIndices=!0,a<2?Yp:`o2i_${e}(${Yp})`),K=[];if(a>=2)for(let Yp=a-1;Yp>=0;Yp--)K.push(`${B$1(E,Yp,a)} * (indices[${Yp}])`);let kd=a<2?"":`
  fn i2o_${e}(indices: ${c.indices}) -> u32 {
    return ${K.join("+")};
  }`,Ii=Yp=>(f.indicesToOffset=!0,a<2?Yp:`i2o_${e}(${Yp})`),Qp=(...Yp)=>a===0?"0u":`${c.indices}(${Yp.map(h).join(",")})`,th=(Yp,eh)=>a<2?`${Yp}`:`${B$1(Yp,eh,a)}`,rh=(Yp,eh,sh)=>a<2?`${Yp}=${sh};`:`${B$1(Yp,eh,a)}=${sh};`,uh={},ph=(Yp,eh)=>{f.broadcastedIndicesToOffset=!0;let sh=`${eh.name}broadcastedIndicesTo${e}Offset`;if(sh in uh)return`${sh}(${Yp})`;let mh=[];for(let yh=a-1;yh>=0;yh--){let wh=eh.indicesGet("outputIndices",yh+eh.rank-a);mh.push(`${th(E,yh)} * (${wh} % ${th(b,yh)})`)}return uh[sh]=`fn ${sh}(outputIndices: ${eh.type.indices}) -> u32 {
             return ${mh.length>0?mh.join("+"):"0u"};
           }`,`${sh}(${Yp})`},lh=(Yp,eh)=>(()=>{if(c.storage===c.value)return`${e}[${Yp}]=${eh};`;if(c.storage==="vec2<u32>"&&c.value==="i32")return`${e}[${Yp}]=vec2<u32>(u32(${eh}), select(0u, 0xFFFFFFFFu, ${eh} < 0));`;if(c.storage==="vec2<u32>"&&c.value==="u32")return`${e}[${Yp}]=vec2<u32>(u32(${eh}), 0u);`;if(c.storage==="u32"&&c.value==="vec4<bool>")return`${e}[${Yp}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${eh}));`;throw new Error(`not supported combination of storage type ${c.storage} and value type ${c.value} yet`)})(),dh=Yp=>(()=>{if(c.storage===c.value)return`${e}[${Yp}]`;if(c.storage==="vec2<u32>"&&c.value==="i32")return`i32(${e}[${Yp}].x)`;if(c.storage==="vec2<u32>"&&c.value==="u32")return`u32(${e}[${Yp}].x)`;if(c.storage==="u32"&&c.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${Yp}] & 0xFFu), bool(${e}[${Yp}] & 0xFF00u), bool(${e}[${Yp}] & 0xFF0000u), bool(${e}[${Yp}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${c.storage} and value type ${c.value} yet`)})(),oh=a<2?"":`
  fn get_${e}ByIndices(indices: ${c.indices}) -> ${l} {
    return ${dh(`i2o_${e}(indices)`)};
  }`,nh=a<2?"":(()=>{let Yp=d.map(sh=>`d${sh}: u32`).join(", "),eh=d.map(sh=>`d${sh}`).join(", ");return`
  fn get_${e}(${Yp}) -> ${l} {
    return get_${e}ByIndices(${Qp(eh)});
  }`})(),hh=(...Yp)=>{if(Yp.length!==a)throw new Error(`indices length must be ${a}`);let eh=Yp.map(h).join(",");return a===0?dh("0u"):a===1?dh(eh[0]):(f.get=!0,f.getByIndices=!0,f.indicesToOffset=!0,`get_${e}(${eh})`)},ch=Yp=>a<2?dh(Yp):(f.getByIndices=!0,f.indicesToOffset=!0,`get_${e}ByIndices(${Yp})`),ih=a<2?"":`
  fn set_${e}ByIndices(indices: ${c.indices}, value: ${l}) {
    ${lh(`i2o_${e}(indices)`,"value")}
  }`,ah=a<2?"":(()=>{let Yp=d.map(sh=>`d${sh}: u32`).join(", "),eh=d.map(sh=>`d${sh}`).join(", ");return`
  fn set_${e}(${Yp}, value: ${l}) {
    set_${e}ByIndices(${Qp(eh)}, value);
  }`})();return{impl:()=>{let Yp=[],eh=!1;return f.offsetToIndices&&(Yp.push(F),eh=!0),f.indicesToOffset&&(Yp.push(kd),eh=!0),f.broadcastedIndicesToOffset&&(Object.values(uh).forEach(sh=>Yp.push(sh)),eh=!0),f.set&&(Yp.push(ah),eh=!0),f.setByIndices&&(Yp.push(ih),eh=!0),f.get&&(Yp.push(nh),eh=!0),f.getByIndices&&(Yp.push(oh),eh=!0),!i&&eh&&Yp.unshift(`const ${b} = ${c.indices}(${r.join(",")});`,`const ${E} = ${c.indices}(${x$2.computeStrides(r).join(",")});`),Yp.join(`
`)},type:c,offsetToIndices:L,indicesToOffset:Ii,broadcastedIndicesToOffset:ph,indices:Qp,indicesGet:th,indicesSet:rh,set:(...Yp)=>{if(Yp.length!==a+1)throw new Error(`indices length must be ${a}`);let eh=Yp[a];if(typeof eh!="string")throw new Error("value must be string");let sh=Yp.slice(0,a).map(h).join(",");return a===0?lh("0u",eh):a===1?lh(sh[0],eh):(f.set=!0,f.setByIndices=!0,f.indicesToOffset=!0,`set_${e}(${sh}, ${eh})`)},setByOffset:lh,setByIndices:(Yp,eh)=>a<2?lh(Yp,eh):(f.setByIndices=!0,f.indicesToOffset=!0,`set_${e}ByIndices(${Yp}, ${eh});`),get:hh,getByOffset:dh,getByIndices:ch,usage:o,name:e,strides:E,shape:b,rank:a}},S$1=(e,t,r,o=1)=>Mn$1(e,t,r,"input",o),C=(e,t,r,o=1)=>Mn$1(e,t,r,"output",o),qt$1=(e,t,r,o=1)=>Mn$1(e,t,r,"internal",o),Dn$1=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=je$2){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],o=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||o>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${o}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*o>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${o}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let s=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,i=s?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,a=s?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*o}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${o})
  fn main(${i}) {
    ${a}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",o=e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${o}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:o}of this.uniforms)if(o&&o>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(o/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(o/4)}>`);else{let s=o==null||o===1?r:`vec${o}<${r}>`;e.push(`${t}:${s}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},uo$1=(e,t)=>new Dn$1(e,t),Ye$1=(e,t)=>{let r=e.length,o=[];for(let s=0;s<r;s++){let i=r-1-s,a=e[i]||1;(t[t.length-1-s]||1)>1&&a===1&&o.unshift(i)}return o}}),Lu$1,lo$1,Nu$1,Wu$1,Gu$1,le$2,co$1,po$1,Me$2=k$1(()=>{U$2(),N$1(),ae$1(),W(),Lu$1=e=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.")},lo$1=(e,t)=>t&&t.length!==e?[...new Array(e).keys()].reverse():t,Nu$1=(e,t)=>x$2.sortBasedOnPerm(e,lo$1(e.length,t)),Wu$1=(e,t,r,o)=>{let s=`fn perm(i: ${o.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let i=0;i<t;++i)s+=r.indicesSet("a",e[i],`i[${i}]`);return s+="return a;}"},Gu$1=(e,t)=>{let r=[],o=[];for(let s=0;s<e.length;++s)e[s]!==1&&r.push(e[s]),e[t[s]]!==1&&o.push(t[s]);return{newShape:r,newPerm:o}},le$2=(e,t)=>{let r=e.dataType,o=e.dims.length,s=lo$1(o,t),i=Nu$1(e.dims,s),{newShape:a,newPerm:d}=Gu$1(e.dims,s),p=x$2.areEqual(d,[2,3,1]),n=x$2.areEqual(d,[3,1,2]),l=a.length===2&&d[0]>d[1]||p||n,u=l?a:e.dims,c=i;l&&(u=p?[a[0],a[1]*a[2]]:n?[a[0]*a[1],a[2]]:a,c=[u[1],u[0]]);let h=S$1("a",r,u.length),f=C("output",r,c.length),g=16,b;return l?b=E=>`
  ${E.registerUniform("output_size","u32").declareVariables(h,f)}
  var<workgroup> tile : array<array<${f.type.value}, ${g+1}>, ${g}>;
  ${E.mainStart([g,g,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${g} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${g}u + local_id.x;
    let input_row = workgroup_id_x * ${g}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${h.getByIndices(`${h.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${g}u + local_id.x;
    let output_row = workgroup_id_y * ${g}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${f.setByIndices(`${f.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`:b=E=>`
  ${E.registerUniform("output_size","u32").declareVariables(h,f)}

  ${Wu$1(s,o,h,f)}

  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${f.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${f.setByOffset("global_idx",h.getByIndices("aIndices"))}
  }`,{name:l?"TransposeShared":"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let E=x$2.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:l?{x:Math.ceil(c[1]/g),y:Math.ceil(c[0]/g)}:{x:Math.ceil(E/64)},programUniforms:[{type:12,data:E},...A(u,c)]}},getShaderSource:b}},co$1=(e,t)=>{Lu$1(e.inputs),e.compute(le$2(e.inputs[0],t.perm))},po$1=e=>V$2({perm:e.perm})}),Hu$1,qu$1,Fu$1,Ku$1,ju$1,Xu$1,Zu$1,Qu$1,Yu$1,Ju$1,Pe$2,mo$1,fo$1,ho$1,go$1,yo$1,bo$1,wo$1,_o$1,$o$1,vo$1,xo$1=k$1(()=>{U$2(),N$1(),W(),Ft$2(),Me$2(),Hu$1={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},qu$1={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Fu$1={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Ku$1={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},ju$1=(e,t)=>{let r=[];for(let o=t-e;o<t;++o)r.push(o);return r},Xu$1=(e,t)=>{let r=[],o=e.length;for(let i=0;i<o;i++)t.indexOf(i)===-1&&r.push(e[i]);let s=t.map(i=>e[i]);return[r,s]},Zu$1=(e,t)=>{let r=e.length+t.length,o=[],s=0;for(let i=0;i<r;i++)t.indexOf(i)===-1?o.push(e[s++]):o.push(1);return o},Qu$1=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Yu$1=(e,t)=>{let r=[];if(!Qu$1(e,t)){for(let o=0;o<t;++o)e.indexOf(o)===-1&&r.push(o);e.forEach(o=>r.push(o))}return r},Ju$1=(e,t,r,o,s,i,a)=>{let d=r[0].dims,p=x$2.size(i),n=x$2.size(a),l=S$1("_A",r[0].dataType,d),u=C("output",s,i),c=32,h=`
          var<workgroup> aBestValues : array<f32, ${c}>;
       `;return{name:e,shaderCache:t,getShaderSource:f=>`
        ${f.registerUniform("reduceSize","u32").declareVariables(l,u)}
        ${h}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${f.mainStart(c)}

          let outputIndex = global_idx / ${c};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Fu$1[o]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${c}) {
           let candidate = f32(${l.getByOffset("offset + k")});
           bestValue = ${Hu$1[o]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${c}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${qu$1[o]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${u.setByOffset("outputIndex",`${o==="mean"?`${u.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${u.type.storage}(${Ku$1[o]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:p},programUniforms:[{type:12,data:n}]})}},Pe$2=(e,t,r,o)=>{let s=e.inputs.length===1?r:Un$1(e.inputs,r),i=s.axes;i.length===0&&!s.noopWithEmptyAxes&&(i=e.inputs[0].dims.map((h,f)=>f));let a=x$2.normalizeAxes(i,e.inputs[0].dims.length),d=a,p=e.inputs[0],n=Yu$1(d,e.inputs[0].dims.length);n.length>0&&(p=e.compute(le$2(e.inputs[0],n),{inputs:[0],outputs:[-1]})[0],d=ju$1(d.length,p.dims.length));let[l,u]=Xu$1(p.dims,d),c=l;s.keepDims&&(c=Zu$1(l,a)),e.compute(Ju$1(t,{hint:s.cacheKey,inputDependencies:["type"]},[p],o,e.inputs[0].dataType,c,u),{inputs:[p]})},mo$1=(e,t)=>{Pe$2(e,"ReduceMeanShared",t,"mean")},fo$1=(e,t)=>{Pe$2(e,"ReduceL1Shared",t,"l1")},ho$1=(e,t)=>{Pe$2(e,"ReduceL2Shared",t,"l2")},go$1=(e,t)=>{Pe$2(e,"ReduceLogSumExpShared",t,"logSumExp")},yo$1=(e,t)=>{Pe$2(e,"ReduceMaxShared",t,"max")},bo$1=(e,t)=>{Pe$2(e,"ReduceMinShared",t,"min")},wo$1=(e,t)=>{Pe$2(e,"ReduceProdShared",t,"prod")},_o$1=(e,t)=>{Pe$2(e,"ReduceSumShared",t,"sum")},$o$1=(e,t)=>{Pe$2(e,"ReduceSumSquareShared",t,"sumSquare")},vo$1=(e,t)=>{Pe$2(e,"ReduceLogSumShared",t,"logSum")}}),ze$2,ed$1,Kt$2,Un$1,Be$2,td$1,nd$1,rd$1,od$1,id$1,sd$1,ad$1,ud$1,dd,ld,De$2,So$1,Io$1,To$1,Co$1,Ao$1,ko$1,Eo$1,Po$1,zo,Bo$1,Ft$2=k$1(()=>{U$2(),N$1(),ae$1(),W(),xo$1(),ze$2=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},ed$1=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Kt$2=(e,t,r,o,s,i,a=!1,d=!1)=>{let p=[],n=r[0].dims,l=n.length,u=x$2.normalizeAxes(s,l),c=!d&&u.length===0;n.forEach((g,b)=>{c||u.indexOf(b)>=0?a&&p.push(1):p.push(g)});let h=p.length,f=x$2.size(p);return{name:e,shaderCache:t,getShaderSource:g=>{let b=[],E=S$1("_A",r[0].dataType,l),y=C("output",i,h),F=o(E,y,u),L=F[2];for(let K=0,kd=0;K<l;K++)c||u.indexOf(K)>=0?(a&&kd++,L=`for(var j${K}: u32 = 0; j${K} < ${n[K]}; j${K}++) {
                  ${F[2].includes("last_index")?`let last_index = j${K};`:""}
                  ${E.indicesSet("input_indices",K,`j${K}`)}
                  ${L}
                }`):(b.push(`${E.indicesSet("input_indices",K,y.indicesGet("output_indices",kd))};`),kd++);return`

        ${g.registerUniform("output_size","u32").declareVariables(E,y)}

        ${g.mainStart()}
          ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${E.type.indices};
          let output_indices = ${y.offsetToIndices("global_idx")};

          ${b.join(`
`)}
          ${F[0]}       // init ops for reduce max/min
          ${F[1]}
          ${L}
          ${F[3]}
          ${F.length===4?y.setByOffset("global_idx","value"):F.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:p,dataType:i}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...A(n,p)]})}},Un$1=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(o=>r.push(Number(o))),V$2({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Be$2=(e,t,r,o)=>{let s=e.inputs,i=s.length===1?r:Un$1(s,r);e.compute(Kt$2(t,{hint:i.cacheKey,inputDependencies:["rank"]},[s[0]],i.noopWithEmptyAxes&&i.axes.length===0?ed$1:o,i.axes,s[0].dataType,i.keepDims,i.noopWithEmptyAxes),{inputs:[0]})},td$1=(e,t)=>{ze$2(e.inputs),Be$2(e,"ReduceLogSum",t,(r,o)=>[`var value = ${o.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},nd$1=(e,t)=>{ze$2(e.inputs),Be$2(e,"ReduceL1",t,(r,o)=>[`var value = ${o.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},rd$1=(e,t)=>{ze$2(e.inputs),Be$2(e,"ReduceL2",t,(r,o)=>[`var t = ${o.type.value}(0); var value = ${o.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},od$1=(e,t)=>{ze$2(e.inputs),Be$2(e,"ReduceLogSumExp",t,(r,o)=>[`var value = ${o.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},id$1=(e,t)=>{ze$2(e.inputs),Be$2(e,"ReduceMax",t,(r,o,s)=>{let i=[];for(let a=0;a<r.rank;a++)(s.indexOf(a)>=0||s.length===0)&&i.push(r.indicesSet("input_indices",a,0));return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},sd$1=(e,t)=>{ze$2(e.inputs),Be$2(e,"ReduceMean",t,(r,o,s)=>{let i=1;for(let a=0;a<r.rank;a++)(s.indexOf(a)>=0||s.length===0)&&(i*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${o.type.value}(sum / ${i});`]})},ad$1=(e,t)=>{ze$2(e.inputs),Be$2(e,"ReduceMin",t,(r,o,s)=>{let i=[];for(let a=0;a<r.rank;a++)(s.indexOf(a)>=0||s.length===0)&&i.push(`input_indices[${a}] = 0;`);return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},ud$1=(e,t)=>{ze$2(e.inputs),Be$2(e,"ReduceProd",t,(r,o)=>[`var value = ${o.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},dd=(e,t)=>{ze$2(e.inputs),Be$2(e,"ReduceSum",t,(r,o)=>[`var value = ${o.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},ld=(e,t)=>{ze$2(e.inputs),Be$2(e,"ReduceSumSquare",t,(r,o)=>[`var t = ${o.type.value}(0); var value = ${o.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},De$2=(e,t,r)=>{if(t.length===0)return r;let o=1,s=1;for(let i=0;i<t.length;i++)t.indexOf(i)===-1?o*=e[i]:s*=e[i];return s<32&&o>1024},So$1=(e,t)=>{De$2(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?sd$1(e,t):mo$1(e,t)},Io$1=(e,t)=>{De$2(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?nd$1(e,t):fo$1(e,t)},To$1=(e,t)=>{De$2(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?rd$1(e,t):ho$1(e,t)},Co$1=(e,t)=>{De$2(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?od$1(e,t):go$1(e,t)},Ao$1=(e,t)=>{De$2(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?id$1(e,t):yo$1(e,t)},ko$1=(e,t)=>{De$2(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ad$1(e,t):bo$1(e,t)},Eo$1=(e,t)=>{De$2(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ud$1(e,t):wo$1(e,t)},Po$1=(e,t)=>{De$2(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?dd(e,t):_o$1(e,t)},zo=(e,t)=>{De$2(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ld(e,t):$o$1(e,t)},Bo$1=(e,t)=>{De$2(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?td$1(e,t):vo$1(e,t)}}),Do$2,Oo$1,Ro,Vn$1,Mo=k$1(()=>{U$2(),ae$1(),Ft$2(),Do$2=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Oo$1=(e,t)=>{Do$2(e.inputs);let r=(o,s,i)=>{let a=[];for(let d=0;d<o.rank;d++)(i.indexOf(d)>=0||i.length===0)&&a.push(`input_indices[${d}] = 0;`);return[`${a.join(`
`)}`,`var value = ${o.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${o.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${o.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",s.setByOffset("global_idx","best_index")]};e.compute(Kt$2("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Ro=(e,t)=>{Do$2(e.inputs);let r=(o,s,i)=>{let a=[];for(let d=0;d<o.rank;d++)(i.indexOf(d)>=0||i.length===0)&&a.push(`input_indices[${d}] = 0;`);return[`${a.join(`
`)}`,`var value = ${o.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${o.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${o.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",s.setByOffset("global_idx","best_index")]};e.compute(Kt$2("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Vn$1=e=>V$2(e)}),cd,pd,md,fd,Je$2,hd,Uo,jt$1=k$1(()=>{U$2(),N$1(),Gt$2(),W(),cd=(e,t)=>{let r=e[0],o=e[1],s=e[2],i=e[3],a=e[4],d=e[5];if(a&&d)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let p=r.dims[0],n=r.dims[1],l=r.dims[2];if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(o.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(o.dims[0]!==l)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(s.dims[0]!==o.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let u=s.dims[0]/3,c=u,h=c;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let F of t.qkvHiddenSizes)if(F%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");u=t.qkvHiddenSizes[0],c=t.qkvHiddenSizes[1],h=t.qkvHiddenSizes[2]}let f=n;if(u!==c)throw new Error("qkv_hidden_sizes first element should be same as the second");if(s.dims[0]!==u+c+h)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let g=0;if(a){if(c!==h)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==p)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==c/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(g=a.dims[3])}let b=f+g,E=-1,y=0;if(i)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(d){if(d.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(d.dims[0]!==p||d.dims[1]!==t.numHeads||d.dims[2]!==n||d.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:n,pastSequenceLength:g,kvSequenceLength:f,totalSequenceLength:b,maxSequenceLength:E,inputHiddenSize:l,hiddenSize:u,vHiddenSize:h,headSize:Math.floor(u/t.numHeads),vHeadSize:Math.floor(h/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:y,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},pd=(e,t,r)=>{let o=te$1(r),s=64,i=r/o;i<s&&(s=32);let a=Math.ceil(r/o/s),d=[{type:1,data:1/r},{type:12,data:i},{type:12,data:a}],p=Y$2(e.dataType,o),n=de$2(1,o),l=["type"],u=c=>{let h=C("x",e.dataType,e.dims,o),f=de$2(e.dataType),g=[{name:"d_inv",type:"f32"},{name:"d_comp",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${s}>;
  var<workgroup> thread_sum: array<f32, ${s}>;
  ${c.registerUniforms(g).declareVariables(h)}
  ${c.mainStart([s,1,1])}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${s}) * uniforms.d_comp + local_offset;

    var thread_max_vector = ${n}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      thread_max_vector = max(${n}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(o){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${o}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${s}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${n}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      sum_vector += exp(${n}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(o){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${o}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${s}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        x[offset + i] = ${h.type.value}(${f}(uniforms.d_inv));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        var f32input = ${n}(x[offset + i]);
        x[offset + i] = ${h.type.value}(exp(f32input - max_value) / sum);
      }
    }
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${s};${p};${o}`,inputDependencies:l},getShaderSource:u,getRunData:()=>({outputs:[],dispatchGroup:{x:t},programUniforms:d})}},md=(e,t,r,o,s,i,a,d)=>{let p=d+i.kvSequenceLength,n=[i.batchSize,i.numHeads,i.sequenceLength,p],l=i.kvNumHeads===void 0&&e>1&&o,u=l?[i.batchSize,i.numHeads,p,i.headSize]:void 0,c=a.scale===0?1/Math.sqrt(i.headSize):a.scale,h=te$1(i.headSize),f=i.headSize/h,g=12,b={x:Math.ceil(p/g),y:Math.ceil(i.sequenceLength/g),z:i.batchSize*i.numHeads},E=[{type:12,data:i.sequenceLength},{type:12,data:f},{type:12,data:p},{type:12,data:i.numHeads},{type:1,data:c},{type:12,data:d},{type:12,data:i.kvSequenceLength}],y=l&&o&&x$2.size(o.dims)>0,F=["type","type"];y&&F.push("type"),s&&F.push("type");let L=[{dims:n,dataType:t.dataType,gpuDataType:0}];l&&L.push({dims:u,dataType:t.dataType,gpuDataType:0});let K=kd=>{let Ii=S$1("q",t.dataType,t.dims,h),Qp=S$1("key",r.dataType,r.dims,h),th=[Ii,Qp];if(y){let dh=S$1("past_key",o.dataType,o.dims,h);th.push(dh)}s&&th.push(S$1("attention_bias",s.dataType,s.dims));let rh=C("output",t.dataType,n),uh=[rh];l&&uh.push(C("present_key",t.dataType,u,h));let ph=de$2(1,h),lh=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${g}u;

  var<workgroup> tileQ: array<${Ii.type.storage}, ${g*g}>;
  var<workgroup> tileK: array<${Ii.type.storage}, ${g*g}>;
  ${kd.registerUniforms(lh).declareVariables(...th,...uh)}
  ${kd.mainStart([g,g,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let qOffset = uniforms.M * uniforms.K * headIdx + m * uniforms.K;
    ${y&&l?`
    let kOffset = uniforms.kv_sequence_length * uniforms.K * headIdx;
    let pastKeyOffset = uniforms.past_sequence_length * uniforms.K * headIdx;`:`
    let kOffset = uniforms.N * uniforms.K * headIdx + n * uniforms.K;`}
    ${l?"let presentKeyOffset = headIdx * uniforms.N * uniforms.K;":""}
    var value = ${ph}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${y&&l?`
              if (n + local_id.y < uniforms.past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else {
                tileK[idx] =
                         key[kOffset + (n + local_id.y - uniforms.past_sequence_length) * uniforms.K + w + local_id.x];
              }`:"tileK[idx] = key[kOffset + local_id.y * uniforms.K + w + local_id.x];"}
      ${l?"present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];":""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
        value += ${ph}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    let headOffset = headIdx * uniforms.M * uniforms.N;
    if (global_id.y < uniforms.M && global_id.x < uniforms.N) {
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(h){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${h}`)}})()};
        output[outputIdx] = ${rh.type.value} (sum * uniforms.alpha) + ${s?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${h};${s!==void 0};${o!==void 0};${e}`,inputDependencies:F},getRunData:()=>({outputs:L,dispatchGroup:b,programUniforms:E}),getShaderSource:K}},fd=(e,t,r,o,s,i)=>{let a=i+s.kvSequenceLength,d=s.nReps?s.nReps:1,p=s.vHiddenSize*d,n=s.kvNumHeads==null&&e>1&&o,l=n?[s.batchSize,s.numHeads,a,s.headSize]:void 0,u=[s.batchSize,s.sequenceLength,p],c=12,h={x:Math.ceil(s.vHeadSize/c),y:Math.ceil(s.sequenceLength/c),z:s.batchSize*s.numHeads},f=[{type:12,data:s.sequenceLength},{type:12,data:a},{type:12,data:s.vHeadSize},{type:12,data:s.numHeads},{type:12,data:p},{type:12,data:i},{type:12,data:s.kvSequenceLength}],g=n&&o&&x$2.size(o.dims)>0,b=["type","type"];g&&b.push("type");let E=[{dims:u,dataType:t.dataType,gpuDataType:0}];n&&E.push({dims:l,dataType:t.dataType,gpuDataType:0});let y=F=>{let L=S$1("probs",t.dataType,t.dims),K=S$1("v",r.dataType,r.dims),kd=[L,K];g&&kd.push(S$1("past_value",o.dataType,o.dims));let Ii=[C("output",t.dataType,u)];n&&Ii.push(C("present_value",t.dataType,l));let Qp=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${c}u;
  var<workgroup> tileQ: array<${L.type.value}, ${c*c}>;
  var<workgroup> tileK: array<${L.type.value}, ${c*c}>;
  ${F.registerUniforms(Qp).declareVariables(...kd,...Ii)}
  ${F.mainStart([c,c,1])}
   let headIdx = workgroup_id.z;
   let m = global_id.y;
   let n = global_id.x;

   let offsetA = headIdx * (uniforms.M * uniforms.K) + m * uniforms.K;
   ${g&&n?`
    let pastValueOffset = headIdx * uniforms.N * uniforms.past_sequence_length + n;
    let vOffset = headIdx * uniforms.N * uniforms.kv_sequence_length + n;
      `:`
   let offsetB = headIdx * uniforms.N * uniforms.K + n;
            `}
    ${n?"let presentValueOffset = headIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${L.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${g&&n?`
        if (w + local_id.y < uniforms.past_sequence_length) {
          tileK[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else {
          tileK[idx] = v[vOffset + (w + local_id.y - uniforms.past_sequence_length) * uniforms.N];
        }
      `:`
        tileK[idx] = v[offsetB + (w + local_id.y) * uniforms.N];
      `}
        ${n?"present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileK[idx];":""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let currentBatchHeadNumber = workgroup_id.z % uniforms.num_heads;
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + currentBatchHeadNumber * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${o!==void 0};${e}`,inputDependencies:b},getRunData:()=>({outputs:E,dispatchGroup:h,programUniforms:f}),getShaderSource:y}},Je$2=(e,t,r,o,s,i,a,d,p,n,l)=>{let u=Math.min(e.outputCount,1+(a?1:0)+(d?1:0)),c=n.kvNumHeads!==void 0||u>1?n.pastSequenceLength:0,h=c+n.kvSequenceLength,f=p&&x$2.size(p.dims)>0?p:void 0,g=[t,r];n.kvNumHeads===void 0&&u>1&&a&&x$2.size(a.dims)>0&&g.push(a),f&&g.push(f);let b=e.compute(md(u,t,r,a,f,n,l,c),{inputs:g,outputs:n.kvNumHeads===void 0&&u>1?[-1,1]:[-1]})[0];e.compute(pd(b,n.batchSize*n.numHeads*n.sequenceLength,h),{inputs:[b],outputs:[]});let E=[b,o];n.kvNumHeads===void 0&&u>1&&d&&x$2.size(d.dims)>0&&E.push(d),e.compute(fd(u,b,o,d,n,c),{inputs:E,outputs:n.kvNumHeads===void 0&&u>1?[0,2]:[0]})},hd=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],o=t.sequenceLength,s=t.inputHiddenSize,i=t.headSize,a=12,d={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},p=[e.inputs[0],e.inputs[1],e.inputs[2]],n=[{type:12,data:o},{type:12,data:s},{type:12,data:i},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],l=u=>{let c=C("output_q",p[0].dataType,r),h=C("output_k",p[0].dataType,r),f=C("output_v",p[0].dataType,r),g=S$1("input",p[0].dataType,p[0].dims),b=S$1("weight",p[1].dataType,p[1].dims),E=S$1("bias",p[2].dataType,p[2].dims),y=g.type.storage,F=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${y}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${y}, ${a*a}>;
  var<workgroup> tileWeightK: array<${y}, ${a*a}>;
  var<workgroup> tileWeightV: array<${y}, ${a*a}>;
  ${u.registerUniforms(F).declareVariables(g,b,E,c,h,f)}
  ${u.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${y}(0);
    var valueK = ${y}(0);
    var valueV = ${y}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:d,programUniforms:n}),getShaderSource:l},{inputs:p,outputs:[-1,-1,-1]})},Uo=(e,t)=>{let r=cd(e.inputs,t),[o,s,i]=hd(e,r);return Je$2(e,o,s,i,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r,t)}}),gd,yd,bd,Vo$1,Lo$1=k$1(()=>{Se$2(),U$2(),N$1(),ae$1(),W(),gd=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(o,s,i)=>{let a=s.length;if(a!==o.length)throw new Error(`${i}: num dimensions != ${a}`);s.forEach((d,p)=>{if(d!==o[p])throw new Error(`${i}: dim[${p}] do not match`)})};if(e[0].dims.length>1){let o=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,o,"Invalid input scale"),r(e[2].dims,o,"Invalid input B"),r(e[3].dims,o,"Invalid input mean"),r(e[4].dims,o,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},yd=(e,t)=>{let{epsilon:r,spatial:o,format:s}=t,i=e[0].dims,a=o?te$1(i[i.length-1]):1,d=s==="NHWC"&&i.length>1?a:1,p=x$2.size(i)/a,n=o,l=n?i.length:i,u=S$1("x",e[0].dataType,e[0].dims,a),c=S$1("scale",e[1].dataType,e[1].dims,d),h=S$1("bias",e[2].dataType,e[2].dims,d),f=S$1("inputMean",e[3].dataType,e[3].dims,d),g=S$1("inputVar",e[4].dataType,e[4].dims,d),b=C("y",e[0].dataType,l,a),E=()=>{let F="";if(o)F=`let cOffset = ${i.length===1?"0u":s==="NHWC"?`outputIndices[${i.length-1}] / ${a}`:"outputIndices[1]"};`;else if(s==="NCHW")F=`
            ${b.indicesSet("outputIndices","0","0")}
            let cOffset = ${b.indicesToOffset("outputIndices")};`;else{F=`var cIndices = ${c.type.indices}(0);
                       cIndices[0] = outputIndices[${i.length-1}];`;for(let L=1;L<c.rank;L++)F+=`cIndices[${L}] = outputIndices[${L}];`;F+=`let cOffset = ${c.indicesToOffset("cIndices")};`}return F},y=F=>`
  const epsilon = ${r};
  ${F.registerUniform("outputSize","u32").declareVariables(u,c,h,f,g,b)}
  ${F.mainStart()}
  ${F.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${b.offsetToIndices(`global_idx * ${a}`)};
    ${E()}
    let scale = ${c.getByOffset("cOffset")};
    let bias = ${h.getByOffset("cOffset")};
    let inputMean = ${f.getByOffset("cOffset")};
    let inputVar = ${g.getByOffset("cOffset")};
    let x = ${u.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${b.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${o}_${a}`,inputDependencies:n?["rank","type","type","type","type"]:void 0},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:n?[{type:12,data:p},...A(i)]:[{type:12,data:p}]})}},bd=e=>V$2(e),Vo$1=(e,t)=>{let{inputs:r,outputCount:o}=e,s=bd({...t,outputCount:o});if(ee$2.webgpu.validateInputContent&&gd(r,s),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(yd(r,s))}}),wd,_d,No$1,Wo$1=k$1(()=>{N$1(),W(),wd=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},_d=e=>{let t=e[0].dims,r=e[0].dims[2],o=x$2.size(t)/4,s=e[0].dataType,i=S$1("input",s,t,4),a=S$1("bias",s,[r],4),d=S$1("residual",s,t,4),p=C("output",s,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)}}),getShaderSource:n=>`
  const channels = ${r}u / 4;
  ${n.declareVariables(i,a,d,p)}

  ${n.mainStart()}
    ${n.guardAgainstOutOfBoundsWorkgroupSizes(o)}
    let value = ${i.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${d.getByOffset("global_idx")};
    ${p.setByOffset("global_idx","value")}
  }`}},No$1=e=>{wd(e.inputs),e.compute(_d(e.inputs))}}),$d,J$2,Go$1,Ho,qo$1,Fo$1,Ko,jo,Xo,Zo,Qo$1,vd,Yo,Jo,ei,ti$1,dt$2,ni,Xt$2,ri$1,oi$1,ii,si,ai$1,ui,di,li,ci,pi,mi$1,fi,hi,gi,yi,bi,wi,_i$1,Ln$1,Nn$1,$i,vi,xi,xd,Sd,Si,Zt$2=k$1(()=>{U$2(),N$1(),ae$1(),W(),$d=(e,t,r,o,s,i,a)=>{let d=Math.ceil(t/4),p="";typeof s=="string"?p=`${s}(a)`:p=s("a");let n=S$1("inputData",r,[d],4),l=C("outputData",o,[d],4),u=[{name:"vec_size",type:"u32"}];return a&&u.push(...a),`
      ${e.registerUniforms(u).declareVariables(n,l)}

  ${i??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${n.getByOffset("global_idx")};
    ${l.setByOffset("global_idx",p)}
  }`},J$2=(e,t,r,o,s,i=e.dataType,a,d)=>{let p=[{type:12,data:Math.ceil(x$2.size(e.dims)/4)}];return a&&p.push(...a),{name:t,shaderCache:{hint:s,inputDependencies:["type"]},getShaderSource:n=>$d(n,x$2.size(e.dims),e.dataType,i,r,o,d),getRunData:n=>({outputs:[{dims:e.dims,dataType:i}],dispatchGroup:{x:Math.ceil(x$2.size(n[0].dims)/64/4)},programUniforms:p})}},Go$1=e=>{e.compute(J$2(e.inputs[0],"Abs","abs"))},Ho=e=>{e.compute(J$2(e.inputs[0],"Acos","acos"))},qo$1=e=>{e.compute(J$2(e.inputs[0],"Acosh","acosh"))},Fo$1=e=>{e.compute(J$2(e.inputs[0],"Asin","asin"))},Ko=e=>{e.compute(J$2(e.inputs[0],"Asinh","asinh"))},jo=e=>{e.compute(J$2(e.inputs[0],"Atan","atan"))},Xo=e=>{e.compute(J$2(e.inputs[0],"Atanh","atanh"))},Zo=e=>V$2(e),Qo$1=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(J$2(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},vd=e=>{let t,r,o=e.length>=2&&e[1].data!==0,s=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=o?e[1].getFloat32Array()[0]:-34028234663852886e22,r=s?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=o?e[1].getUint16Array()[0]:64511,r=s?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return V$2({min:t,max:r})},Yo=(e,t)=>{let r=t||vd(e.inputs),o=de$2(e.inputs[0].dataType);e.compute(J$2(e.inputs[0],"Clip",s=>`clamp(${s}, vec4<${o}>(uniforms.min), vec4<${o}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:o},{name:"max",type:o}]),{inputs:[0]})},Jo=e=>{e.compute(J$2(e.inputs[0],"Ceil","ceil"))},ei=e=>{e.compute(J$2(e.inputs[0],"Cos","cos"))},ti$1=e=>{e.compute(J$2(e.inputs[0],"Cosh","cosh"))},dt$2=e=>V$2(e),ni=(e,t)=>{let r=de$2(e.inputs[0].dataType);e.compute(J$2(e.inputs[0],"Elu",o=>`elu_vf32(${o})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Xt$2=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,ri$1=e=>{let t=de$2(e.inputs[0].dataType);e.compute(J$2(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Xt$2(t)))},oi$1=e=>{e.compute(J$2(e.inputs[0],"Exp","exp"))},ii=e=>{e.compute(J$2(e.inputs[0],"Floor","floor"))},si=e=>{let t=de$2(e.inputs[0].dataType);e.compute(J$2(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Xt$2(t)))},ai$1=(e,t)=>{let r=de$2(e.inputs[0].dataType);e.compute(J$2(e.inputs[0],"LeakyRelu",o=>`select(leaky_relu_alpha_ * ${o}, ${o}, ${o} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},ui=e=>{e.compute(J$2(e.inputs[0],"Not",t=>`!${t}`))},di=e=>{e.compute(J$2(e.inputs[0],"Neg",t=>`-${t}`))},li=e=>{e.compute(J$2(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},ci=e=>{let t=de$2(e.inputs[0].dataType);e.compute(J$2(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},pi=e=>{e.compute(J$2(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},mi$1=e=>V$2(e),fi=(e,t)=>{let r=de$2(e.inputs[0].dataType);e.compute(J$2(e.inputs[0],"HardSigmoid",o=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${o} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},hi=e=>{e.compute(J$2(e.inputs[0],"Sin","sin"))},gi=e=>{e.compute(J$2(e.inputs[0],"Sinh","sinh"))},yi=e=>{e.compute(J$2(e.inputs[0],"Sqrt","sqrt"))},bi=e=>{e.compute(J$2(e.inputs[0],"Tan","tan"))},wi=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,_i$1=e=>{e.compute(J$2(e.inputs[0],"Tanh",wi))},Ln$1=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${wi("v")};
}
`,Nn$1=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,$i=e=>{let t=de$2(e.inputs[0].dataType);e.compute(J$2(e.inputs[0],"FastGelu",Nn$1,Ln$1(t),void 0,e.inputs[0].dataType))},vi=(e,t)=>{let r=de$2(e.inputs[0].dataType);return e.compute(J$2(e.inputs[0],"ThresholdedRelu",o=>`select(vec4<${r}>(0.0), ${o}, ${o} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},xi=e=>{e.compute(J$2(e.inputs[0],"Log","log"))},xd=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Sd=e=>`quick_gelu_impl(${e})`,Si=(e,t)=>{let r=de$2(e.inputs[0].dataType);e.compute(J$2(e.inputs[0],"QuickGelu",Sd,xd(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Id,Td,Ti,Ci$1=k$1(()=>{N$1(),W(),Zt$2(),Id=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Td=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=S$1("input",e[0].dataType,e[0].dims,4),o=S$1("bias",e[0].dataType,[e[0].dims[2]],4),s=C("output",e[0].dataType,t,4),i=x$2.size(t)/4,a=Y$2(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${d.declareVariables(r,o,s)}

  ${Xt$2(a)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${s.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Ti=e=>{Id(e.inputs),e.compute(Td(e.inputs))}}),Cd,Ad,Oe$2,Ai$1,ki$1,Ei,Pi$1,zi$1,Bi,Di$1,Oi,Ri$1,Mi$1,Ui$1=k$1(()=>{U$2(),N$1(),W(),Cd=(e,t,r,o,s,i,a,d,p,n,l,u)=>{let c,h;typeof d=="string"?c=h=(y,F)=>`${d}((${y}),(${F}))`:typeof d=="function"?c=h=d:(c=d.scalar,h=d.vector);let f=C("outputData",l,o.length,4),g=S$1("aData",p,t.length,4),b=S$1("bData",n,r.length,4),E;if(s)if(i){let y=x$2.size(t)===1,F=x$2.size(r)===1,L=t.length>0&&t[t.length-1]%4===0,K=r.length>0&&r[r.length-1]%4===0;y||F?E=f.setByOffset("global_idx",h(y?`${g.type.value}(${g.getByOffset("0")}.x)`:g.getByOffset("global_idx"),F?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"))):E=`
            let outputIndices = ${f.offsetToIndices("global_idx * 4u")};
            let offsetA = ${g.broadcastedIndicesToOffset("outputIndices",f)};
            let offsetB = ${b.broadcastedIndicesToOffset("outputIndices",f)};
            ${f.setByOffset("global_idx",h(a||L?g.getByOffset("offsetA / 4u"):`${g.type.value}(${g.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||K?b.getByOffset("offsetB / 4u"):`${b.type.value}(${b.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else E=f.setByOffset("global_idx",h(g.getByOffset("global_idx"),b.getByOffset("global_idx")));else{if(!i)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let y=(F,L,K="")=>{let kd=`aData[indexA${L}][componentA${L}]`,Ii=`bData[indexB${L}][componentB${L}]`;return`
            let outputIndices${L} = ${f.offsetToIndices(`global_idx * 4u + ${L}u`)};
            let offsetA${L} = ${g.broadcastedIndicesToOffset(`outputIndices${L}`,f)};
            let offsetB${L} = ${b.broadcastedIndicesToOffset(`outputIndices${L}`,f)};
            let indexA${L} = offsetA${L} / 4u;
            let indexB${L} = offsetB${L} / 4u;
            let componentA${L} = offsetA${L} % 4u;
            let componentB${L} = offsetB${L} % 4u;
            ${F}[${L}] = ${K}(${c(kd,Ii)});
          `};l===9?E=`
            var data = vec4<u32>(0);
            ${y("data",0,"u32")}
            ${y("data",1,"u32")}
            ${y("data",2,"u32")}
            ${y("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:E=`
            ${y("outputData[global_idx]",0)}
            ${y("outputData[global_idx]",1)}
            ${y("outputData[global_idx]",2)}
            ${y("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(g,b,f)}

        ${u??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${E}
      }`},Ad=(e,t,r,o,s,i,a=r.dataType)=>{let d=!x$2.areEqual(r.dims,o.dims),p=r.dims,n=x$2.size(r.dims),l=!1,u=!1,c=[d];if(d){let h=Ee$2.calcShape(r.dims,o.dims,!1);if(!h)throw new Error("Can't perform binary op on the given tensors");p=h,n=x$2.size(p);let f=x$2.size(r.dims)===1,g=x$2.size(o.dims)===1,b=r.dims.length>0&&r.dims[r.dims.length-1]%4===0,E=o.dims.length>0&&o.dims[o.dims.length-1]%4===0;c.push(f),c.push(g),c.push(b),c.push(E);let y=1;for(let F=1;F<p.length;F++){let L=r.dims[r.dims.length-F]??1,K=o.dims[o.dims.length-F]??1;if(L===K)y*=L;else break}y%4===0?(u=!0,l=!0):(f||g||b||E)&&(l=!0)}else l=!0;return c.push(l),{name:e,shaderCache:{hint:t+c.map(h=>h.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:h=>Cd(h,r.dims,o.dims,p,l,d,u,s,r.dataType,o.dataType,a,i),getRunData:()=>({outputs:[{dims:p,dataType:a}],dispatchGroup:{x:Math.ceil(n/64/4)},programUniforms:[{type:12,data:Math.ceil(x$2.size(p)/4)},...A(r.dims,o.dims,p)]})}},Oe$2=(e,t,r,o,s,i)=>{e.compute(Ad(t,s??"",e.inputs[0],e.inputs[1],r,o,i))},Ai$1=e=>{Oe$2(e,"Add",(t,r)=>`${t}+${r}`)},ki$1=e=>{Oe$2(e,"Div",(t,r)=>`${t}/${r}`)},Ei=e=>{Oe$2(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Pi$1=e=>{Oe$2(e,"Mul",(t,r)=>`${t}*${r}`)},zi$1=e=>{let t=S$1("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Oe$2(e,"Pow",{scalar:(r,o)=>`pow_custom(${r},${o})`,vector:(r,o)=>`pow_vector_custom(${r},${o})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Bi=e=>{Oe$2(e,"Sub",(t,r)=>`${t}-${r}`)},Di$1=e=>{Oe$2(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Oi=e=>{Oe$2(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Ri$1=e=>{Oe$2(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Mi$1=e=>{Oe$2(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Ed,Pd,zd,Bd,Vi$1,Li,Ni=k$1(()=>{U$2(),N$1(),ae$1(),W(),Ed=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,o=e[r],s=o.dataType,i=o.dims.length;e.forEach((a,d)=>{if(d!==r){if(a.dataType!==s)throw new Error("input tensors should be one type");if(a.dims.length!==i)throw new Error("input tensors should have the same shape");a.dims.forEach((p,n)=>{if(n!==t&&p!==o.dims[n])throw new Error("non concat dimensions must match")})}})},Pd=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,zd=(e,t)=>{let r=e.length,o=[];for(let s=0;s<r;++s){let i=t.setByOffset("global_idx",e[s].getByIndices("indices"));r===1?o.push(i):s===0?o.push(`if (inputIndex == ${s}u) { ${i} }`):s===r-1?o.push(`else { ${i} }`):o.push(`else if (inputIndex == ${s}) { ${i} }`)}return o.join(`
`)},Bd=(e,t,r,o)=>{let s=x$2.size(r),i=new Array(e.length),a=new Array(e.length),d=0,p=[],n=[],l=[{type:12,data:s}];for(let g=0;g<e.length;++g)d+=e[g].dims[t],i[g]=d,n.push(e[g].dims.length),a[g]=S$1(`input${g}`,o,n[g]),p.push("rank"),l.push({type:12,data:i[g]});for(let g=0;g<e.length;++g)l.push(...A(e[g].dims));l.push(...A(r));let u=C("output",o,r.length),c=u.indicesGet("indices",t),h=Array.from(Array(i.length).keys()).map(g=>`uniforms.sizeInConcatAxis${g}`).join(","),f=g=>`

  ${(()=>{g.registerUniform("outputSize","u32");for(let b=0;b<e.length;b++)g.registerUniform(`sizeInConcatAxis${b}`,"u32");return g.declareVariables(...a,u)})()}

  ${Pd(i.length,h)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${u.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${c});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${i.length}u>(${h});
      ${c} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${zd(a,u)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:r,dataType:o}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l}),getShaderSource:f}},Vi$1=(e,t)=>{let r=e.inputs,o=r[0].dims,s=x$2.normalizeAxis(t.axis,o.length);Ed(r,s);let i=o.slice();i[s]=r.reduce((d,p)=>d+(p.dims.length>s?p.dims[s]:0),0);let a=r.filter(d=>x$2.size(d.dims)>0);e.compute(Bd(a,s,i,r[0].dataType),{inputs:a})},Li=e=>V$2({axis:e.axis})}),$e$1,ve$1,xe$1,Qt$2,Ue$2=k$1(()=>{U$2(),N$1(),$e$1=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},ve$1=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},xe$1=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Qt$2=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,o]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:o}}else if(t==="Clip"){let[r,o]=e?.activation_params||[so$1,ao$1];return{activation:t,clipMax:o,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),ce$2,Yt$2,lt$1=k$1(()=>{ce$2=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Yt$2=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Jt$2,Wn$1=k$1(()=>{Jt$2=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Dd,Od,ct$2,Wi$1,Rd,pt$2,Md,en$1,mt$1=k$1(()=>{U$2(),N$1(),W(),Ue$2(),lt$1(),Dd=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Od=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,ct$2=(e,t,r="f32",o,s=!1,i=32,a=!1,d=32)=>{let p=t[1]*e[1],n=t[0]*e[0],l=s?p:i,u=s?i:p,c=l/t[0],h=i/t[1];if(!((s&&c===4&&e[1]===4||!s&&(c===3||c===4))&&l%t[0]===0&&i%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${s} is true, innerElementSize ${c} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${c} must be 3 or 4.
  tileAWidth ${l} must be divisible by workgroupSize[0]${t[0]}. tileInner ${i} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${c}<${r}>, ${l/c}>, ${u}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${n/e[0]}>, ${i}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${c};
const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${a?"0":"i32(globalId.z)"};
  ${o?`let batchIndices = ${o.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${p};

  let num_tiles = ${a?`${Math.ceil(d/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${d}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${h};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Dd(s,o)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${o?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${c===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Od(s,c)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Wi$1=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Rd=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",pt$2=(e,t,r="f32",o,s=!1,i=32,a=!1,d=32,p=!1)=>{let n=e[1]*t[1],l=e[0]*t[0],u=s?n:i,c=s?i:n;if(!(c%t[1]===0&&u%t[0]===0&&i%t[1]===0))throw new Error(`tileAHight ${c} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${u} must be divisible by workgroupSize[0]${t[0]}, tileInner ${i} must be divisible by workgroupSize[1]${t[1]}`);let h=c/t[1],f=u/t[0],g=i/t[1],b=p?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${n};
    let globalColStart = i32(workgroupId.x) * ${l};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${c}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${u}; inputCol = inputCol + ${t[0]}) {
          ${Wi$1(s,o)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${i}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${l}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${o?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${s?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${n};

let tileRowA = i32(localId.y) * ${h};
let tileColA = i32(localId.x) * ${f};
let tileRowB = i32(localId.y) * ${g};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${f}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Wi$1(s,o)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${o?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Rd(s)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${u}>, ${c}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${l}>, ${i}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${o?`let batchIndices = ${o.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(d/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${d}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${b}
  }
`},Md=(e,t,r,o,s,i=!1)=>{let[a,d,p]=s,[n,l,u,c]=o,h=Ye$1(a,p),f=Ye$1(d,p),g=Y$2(o[0].type.tensor),b=()=>{let y=l.rank,F=n.rank,L=`var aIndices: ${l.type.indices};`;for(let K=y-2-1,kd=F-1;K>=0;K--,kd--)L+=`
aIndices[${K}] = ${F>1?`batchIndices[${kd}]`:"batchIndices"};`;return h.forEach(K=>{L+=`
aIndices[${K}] = 0;`}),L+=`
aIndices[${y-2}] = u32(row);
                   aIndices[${y-1}] = u32(colIn);`,L},E=()=>{let y=u.rank,F=n.rank,L=`var bIndices: ${u.type.indices};`;for(let K=y-2-1,kd=F-1;K>=0;K--,kd--)L+=`
bIndices[${K}] = ${F>1?`batchIndices[${kd}]`:"batchIndices"};`;return f.forEach(K=>{L+=`
bIndices[${K}] = 0;`}),L+=`
bIndices[${y-2}] = u32(row);
                   bIndices[${y-1}] = u32(colIn);`,L};return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${ce$2(e,g)} {
      var value = ${ce$2(e,g)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        ${b()}
        value = ${l.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${ce$2(e,g)} {
      var value = ${ce$2(e,g)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        ${E()}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${ce$2(e,g)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${ce$2(e,g)}(bias[row])`};`:""}
        ${r}
        ${c.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},en$1=(e,t,r,o,s=!1,i)=>{let a=e[0].dims,d=e[1].dims,p=a.slice(0,-2),n=d.slice(0,-2),l=o?o.slice(0,-2):r.slice(0,-2),u=x$2.size(l),c=a[a.length-2],h=a[a.length-1],f=d[d.length-1],g=h%4===0&&f%4===0,b=c<=8?[4,1,1]:[4,4,1],E=[8,8,1],y=[Math.ceil(f/E[0]/b[0]),Math.ceil(c/E[1]/b[1]),Math.ceil(u/E[2]/b[2])],F=g?4:1,L=[...p,c,h/F],K=L.length,kd=[...n,h,f/F],Ii=kd.length,Qp=[u,c,f/F],th=[{type:6,data:c},{type:6,data:f},{type:6,data:h}];ve$1(t,th),th.push(...A(l,L,kd));let rh=["rank","rank"],uh=e.length>2;uh&&(th.push(...A(e[2].dims)),rh.push("rank")),th.push(...A(Qp));let ph=lh=>{let dh=l.length,oh=qt$1("batchDims",e[0].dataType,dh,1),nh=Y$2(e[0].dataType),hh=S$1("a",e[0].dataType,K,F),ch=S$1("b",e[1].dataType,Ii,F),ih=C("result",e[0].dataType,Qp.length,F),ah=[hh,ch];if(uh){let yh=s?F:1;ah.push(S$1("bias",e[2].dataType,e[2].dims.length,yh))}let Yp=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];xe$1(t,Yp);let eh=Y$2(ih.type.tensor),sh=$e$1(t,ih.type.value,eh),mh=Md(F,uh,sh,[oh,hh,ch,ih],[p,n,l],s);return`
  ${lh.registerUniforms(Yp).registerInternalVariables(oh).declareVariables(...ah,ih)}
  ${mh}
  ${g?ct$2(b,E,nh,oh):pt$2(b,E,nh,oh)}
                   `};return{name:"MatMul",shaderCache:{hint:`${b};${t.activation};${g};${s}`,inputDependencies:rh},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:y[0],y:y[1],z:y[2]},programUniforms:th}),getShaderSource:ph}}}),Ud,Gi$1,Hi$1=k$1(()=>{U$2(),Ae$2(),W(),Ue$2(),lt$1(),Wn$1(),mt$1(),Ud=(e,t,r,o,s=!1,i,a=4,d=4,p=4,n="f32")=>{let l=th=>{switch(th){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${n}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${th} is not supported.`)}},u=th=>{switch(th){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${th} is not supported.`)}},c=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,h=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,f=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",g=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",b=e?"row":"col",E=e?"col":"row",y=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${b} / outWidth;
    let outCol = ${b} % outWidth;

    let WRow = ${E} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${E} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${E} % inChannels;
    var resData = ${ce$2(a,n)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${f} && xCol >= 0 && xCol < ${g}) {
      ${c}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${l(a)}
    }
    return resData;`,F=e?t&&o?`
    let col = colIn * ${a};
    ${y}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${y}
    }
    return ${ce$2(a,n)}(0.0);`:o&&r?`
    let col = colIn * ${a};
    ${y}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${y}
    }
    return ${ce$2(a,n)}(0.0);`,L=`${u(d)}`,K=ce$2(p,n),kd=ce$2(e?a:d,n),Ii=ce$2(e?d:a,n),Qp=$e$1(i,K,n);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${kd} {
      ${e?F:L}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${Ii} {
      ${e?L:F}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${K}) {
      let col = colIn * ${p};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${h}
      ${Yt$2(s)}
      ${Qp}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Gi$1=(e,t,r,o,s,i,a,d,p)=>{let n=t.format==="NHWC",l=n?e[0].dims[3]:e[0].dims[1],u=r[0],c=n?r[2]:r[3],h=n?r[1]:r[2],f=n?r[3]:r[1],g=n&&(l%4===0||l%3===0)&&f%4===0,b=n?f:c*h,E=n?c*h:f,y=[8,8,1],F=o<=8?[4,1,1]:[4,4,1],L=[Math.ceil(b/y[0]/F[0]),Math.ceil(E/y[1]/F[1]),Math.ceil(u/y[2]/F[2])];X("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${L}`);let K=g?n&&l%4!==0?3:4:1,kd=y[1]*F[1],Ii=y[0]*F[0],Qp=Math.max(y[0]*K,y[1]),th=o%kd===0,rh=s%Ii===0,uh=i%Qp===0,ph=g?[K,4,4]:[1,1,1],lh=[{type:6,data:o},{type:6,data:s},{type:6,data:i},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];ve$1(t,lh),lh.push(...A(e[0].dims,e[1].dims));let dh=["rank","rank"];a&&(lh.push(...A(e[2].dims)),dh.push("rank")),lh.push(...A(r));let oh=nh=>{let hh=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];xe$1(t,hh);let ch=g?4:1,ih=Y$2(e[0].dataType),ah=`
      fn setOutputAtIndex(flatIndex : i32, value : ${g?`vec4<${ih}>`:ih}) {
        result[flatIndex] = ${g?`vec4<${ih}>`:ih}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${g?`vec4<${ih}>`:ih}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${g?"/ 4":""}, value);
      }`,Yp=S$1("x",e[0].dataType,e[0].dims.length,K===3?1:K),eh=S$1("w",e[1].dataType,e[1].dims.length,ch),sh=[Yp,eh],mh=C("result",e[0].dataType,r.length,ch);if(a){let yh=S$1("bias",e[2].dataType,e[2].dims.length,ch);sh.push(yh),ah+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${g?`vec4<${ih}>`:ih} {
          return bias[coords.${n?"w":"y"}${g?"/ 4":""}];
        }`}return`
        ${Jt$2("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${nh.registerUniforms(hh).declareVariables(...sh,mh)}
        ${ah}
        ${Ud(n,th,rh,uh,a,t,ph[0],ph[1],ph[2],ih)}
        ${g?ct$2(F,y,ih,void 0,!n,Qp):pt$2(F,y,ih,void 0,!n,Qp,!1,void 0,d)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${K};${g};${th};${rh};${uh};${kd};${Ii};${Qp}`,inputDependencies:dh},getRunData:()=>({outputs:[{dims:p?p(r):r,dataType:e[0].dataType}],dispatchGroup:{x:L[0],y:L[1],z:L[2]},programUniforms:lh}),getShaderSource:oh}}}),Vd,qi$1,tn,Ld,Fi$1,Nd,Ki$1,ji$1,Xi$1=k$1(()=>{U$2(),Ae$2(),N$1(),W(),Ue$2(),lt$1(),Vd=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},qi$1=e=>typeof e=="number"?[e,e,e]:e,tn=(e,t)=>t<=1?e:e+(e-1)*(t-1),Ld=(e,t,r,o=1)=>{let s=tn(t,o);return Math.floor((e[0]*(r-1)-r+s)/2)},Fi$1=(e,t,r,o,s)=>{s==null&&(s=Ld(e,t[0],o[0]));let i=[0,0,0,r];for(let a=0;a<3;a++)e[a]+2*s>=t[a]&&(i[a]=Math.trunc((e[a]-t[a]+2*s)/o[a]+1));return i},Nd=(e,t,r,o,s,i,a,d,p,n)=>{let l,u,c,h;if(e==="VALID"&&(e=0),typeof e=="number"){l={top:e,bottom:e,left:e,right:e,front:e,back:e};let f=Fi$1([t,r,o,1],[d,p,n],1,[s,i,a],e);u=f[0],c=f[1],h=f[2]}else if(Array.isArray(e)){if(!e.every((g,b,E)=>g===E[0]))throw Error(`Unsupported padding parameter: ${e}`);l={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let f=Fi$1([t,r,o,1],[d,p,n],1,[s,i,a],e[0]);u=f[0],c=f[1],h=f[2]}else if(e==="SAME_UPPER"){u=Math.ceil(t/s),c=Math.ceil(r/i),h=Math.ceil(o/a);let f=(u-1)*s+d-t,g=(c-1)*i+p-r,b=(h-1)*a+n-o,E=Math.floor(f/2),y=f-E,F=Math.floor(g/2),L=g-F,K=Math.floor(b/2),kd=b-K;l={top:F,bottom:L,left:K,right:kd,front:E,back:y}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:l,outDepth:u,outHeight:c,outWidth:h}},Ki$1=(e,t,r,o,s,i=!1,a="channelsLast")=>{let d,p,n,l,u;if(a==="channelsLast")[d,p,n,l,u]=e;else if(a==="channelsFirst")[d,u,p,n,l]=e;else throw new Error(`Unknown dataFormat ${a}`);let[c,,h,f,g]=t,[b,E,y]=qi$1(r),[F,L,K]=qi$1(o),kd=tn(h,F),Ii=tn(f,L),Qp=tn(g,K),{padInfo:th,outDepth:rh,outHeight:uh,outWidth:ph}=Nd(s,p,n,l,b,E,y,kd,Ii,Qp),lh=i?c*u:c,dh=[0,0,0,0,0];return a==="channelsFirst"?dh=[d,lh,rh,uh,ph]:a==="channelsLast"&&(dh=[d,rh,uh,ph,lh]),{batchSize:d,dataFormat:a,inDepth:p,inHeight:n,inWidth:l,inChannels:u,outDepth:rh,outHeight:uh,outWidth:ph,outChannels:lh,padInfo:th,strideDepth:b,strideHeight:E,strideWidth:y,filterDepth:h,filterHeight:f,filterWidth:g,effectiveFilterDepth:kd,effectiveFilterHeight:Ii,effectiveFilterWidth:Qp,dilationDepth:F,dilationHeight:L,dilationWidth:K,inShape:e,outShape:dh,filterShape:t}},ji$1=(e,t,r,o,s,i)=>{let a=i==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let d=[64,1,1],p={x:r.map((b,E)=>E)},n=[Math.ceil(Vd(p.x.map(b=>r[b]))/d[0]),1,1];X("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${n}`);let l=1,u=x$2.size(r),c=[{type:12,data:u},{type:12,data:o},{type:12,data:s},{type:12,data:t.strides},{type:12,data:t.dilations}];ve$1(t,c),c.push(...A(e[0].dims,e[1].dims));let h=["rank","rank"],f=e.length===3;f&&(c.push(...A(e[2].dims)),h.push("rank")),c.push(...A(r));let g=b=>{let E=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:o.length},{name:"pads",type:"u32",length:s.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];xe$1(t,E);let y=1,F=Y$2(e[0].dataType),L=S$1("x",e[0].dataType,e[0].dims.length,l),K=S$1("W",e[1].dataType,e[1].dims.length,y),kd=[L,K],Ii=C("result",e[0].dataType,r.length,y),Qp="";if(f){let uh=S$1("bias",e[2].dataType,e[2].dims.length,y);kd.push(uh),Qp+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${F} {
          return bias[${a?B$1("coords",4,5):B$1("coords",1,5)}];
        }`}let th=ce$2(l,F),rh=$e$1(t,th,F);return`
            ${Qp}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${L.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${K.getByIndices("aIndices")};
            }
          ${b.registerUniforms(E).declareVariables(...kd,Ii)}
          ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${Ii.offsetToIndices("global_idx")};
              let batch = ${B$1("coords",0,L.rank)};
              let d2 = ${a?B$1("coords",L.rank-1,L.rank):B$1("coords",1,L.rank)};
              let xFRCCorner = vec3<u32>(${a?B$1("coords",1,L.rank):B$1("coords",2,L.rank)},
              ${a?B$1("coords",2,L.rank):B$1("coords",3,L.rank)},
              ${a?B$1("coords",3,L.rank):B$1("coords",4,L.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?B$1("uniforms.x_shape",1,L.rank):B$1("uniforms.x_shape",2,L.rank)};
              let xShapeZ = ${a?B$1("uniforms.x_shape",2,L.rank):B$1("uniforms.x_shape",3,L.rank)};
              let xShapeW = ${a?B$1("uniforms.x_shape",3,L.rank):B$1("uniforms.x_shape",4,L.rank)};
              let xShapeU = ${a?B$1("uniforms.x_shape",4,L.rank):B$1("uniforms.x_shape",1,L.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${a?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${a?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${a?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${a?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${f?"value = value + getBiasByOutputCoords(coords)":""};
              ${rh}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${l};${f}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:n[0],y:n[1],z:n[2]},programUniforms:c}),getShaderSource:g}}}),Zi$1,Qi$1,Yi$1=k$1(()=>{U$2(),N$1(),W(),Ue$2(),Zi$1=(e,t,r,o)=>{let s=e.length>2,i=s?"value += b[output_channel];":"",a=e[0].dims,d=e[1].dims,p=t.format==="NHWC",n=p?r[3]:r[1],l=n/t.group,u=p&&l>=4?te$1(n):1,c=x$2.size(r)/u,h=[{type:12,data:c},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:l}];ve$1(t,h),h.push(...A(a,[d[0],d[1],d[2],d[3]/u]));let f=s?["rank","rank","rank"]:["rank","rank"];h.push(...A([r[0],r[1],r[2],r[3]/u]));let g=b=>{let E=C("output",e[0].dataType,r.length,u),y=Y$2(E.type.tensor),F=$e$1(t,E.type.value,y),L=S$1("x",e[0].dataType,a.length),K=S$1("w",e[1].dataType,d.length,u),kd=[L,K];s&&kd.push(S$1("b",e[2].dataType,e[2].dims,u));let Ii=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];xe$1(t,Ii);let Qp=p?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${L.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${K.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${L.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${K.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${b.registerUniforms(Ii).declareVariables(...kd,E)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${E.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${p?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${p?1:2}], outputIndices[${p?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${u} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${p?2:1}];

    var value: ${E.type.value} = ${E.type.value}(0);
    ${Qp}
    ${i}
    ${F}
    ${E.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${u}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:o?o(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:h}),getShaderSource:g}},Qi$1=(e,t,r,o)=>{let s=e.length>2,i=te$1(r[3]),a=te$1(r[2]),d=x$2.size(r)/i/a,p=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/i],n=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/i],l=[r[0],r[1],r[2],r[3]/i],u=[{type:12,data:d},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];ve$1(t,u),u.push(...A(p,n,l));let c=(a-1)*t.strides[1]+n[1],h=f=>{let g=C("output",e[0].dataType,l.length,i),b=Y$2(g.type.tensor),E=$e$1(t,g.type.value,b),y=S$1("x",e[0].dataType,p.length,i),F=S$1("w",e[1].dataType,n.length,i),L=[y,F];s&&L.push(S$1("b",e[2].dataType,e[2].dims,i));let K=s?"value += b[output_channel];":"",kd=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return xe$1(t,kd),`
  ${f.registerUniforms(kd).declareVariables(...L,g)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${a}u;
    let col = (index1 % width1) * ${a}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${y.type.value}, ${c}>;
    var values: array<${g.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${n[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${c}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${y.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${y.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${n[1]}; w_width++) {
          let w_val = ${F.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${K}
      ${E}
      ${g.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${i};${a};${c};${n[0]};${n[1]}`,inputDependencies:s?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:o?o(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:u}),getShaderSource:h}}}),Gn$1,Wd,Ji$1,Hn$1=k$1(()=>{U$2(),N$1(),mt$1(),W(),Ue$2(),Gn$1=(e,t,r,o,s=!1,i)=>{let a=e[0].dims,d=e[1].dims,p=a[a.length-2],n=d[d.length-1],l=a[a.length-1],u=te$1(n),c=te$1(l),h=te$1(p),f=x$2.size(r)/u/h,g=e.length>2,b=o?o.slice(0,-2):r.slice(0,-2),E=[x$2.size(b),p,n],y=[{type:12,data:f},{type:12,data:p},{type:12,data:n},{type:12,data:l}];ve$1(t,y),y.push(...A(b,a,d)),g&&y.push(...A(e[2].dims)),y.push(...A(E));let F=L=>{let K=qt$1("batch_dims",e[0].dataType,b.length),kd=S$1("a",e[0].dataType,a.length,c),Ii=S$1("b",e[1].dataType,d.length,u),Qp=C("output",e[0].dataType,E.length,u),th=Y$2(Qp.type.tensor),rh=$e$1(t,Qp.type.value,th),uh=[kd,Ii],ph="";if(g){let ah=s?u:1;uh.push(S$1("bias",e[2].dataType,e[2].dims.length,ah)),ph=`${s?`value += bias[col / ${ah}];`:`value += ${Qp.type.value}(bias[row + i]);`}`}let lh=a.slice(0,-2),dh=d.slice(0,-2),oh=Ye$1(lh,b),nh=Ye$1(dh,b),hh=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];xe$1(t,hh);let ch=(ah,Yp)=>{let eh=ah.rank,sh=ah.name;if(eh===2)return`var ${sh}_indices = ${ah.type.indices}(0u, 0u);`;let mh=K.rank,yh=`var ${sh}_indices: ${ah.type.indices};`;for(let wh=eh-2-1,bh=mh-1;wh>=0;wh--,bh--)yh+=`
${sh}_indices[${wh}] = ${mh>1?`batch_indices[${bh}]`:"batch_indices"};`;return Yp.forEach(wh=>{yh+=`
${sh}_indices[${wh}] = 0;`}),yh+=`${sh}_indices[${eh-2}] = 0u;
                     ${sh}_indices[${eh-1}] = 0u;`,yh},ih=()=>{let ah=`var a_data: ${kd.type.value};`;for(let Yp=0;Yp<c;Yp++)ah+=`
              let b_data${Yp} = b[(b_offset + (k + ${Yp}) * uniforms.N + col) / ${u}];`;for(let Yp=0;Yp<h;Yp++){ah+=`a_data = a[(a_offset + (row + ${Yp}) * uniforms.K + k) / ${c}];`;for(let eh=0;eh<c;eh++)ah+=`
            values[${Yp}] = fma(${Ii.type.value}(a_data${c===1?"":`[${eh}]`}), b_data${eh}, values[${Yp}]);
`}return ah};return`
  ${L.registerUniforms(hh).registerInternalVariables(K).declareVariables(...uh,Qp)}
  ${L.mainStart()}
    ${L.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${u})) * ${u};
    var index1 = global_idx / (uniforms.N / ${u});
    let stride1 = uniforms.M / ${h};
    let row = (index1 % stride1) * ${h};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${K.offsetToIndices("batch")};`}
    ${ch(kd,oh)}
    let a_offset = ${kd.indicesToOffset("a_indices")};
    ${ch(Ii,nh)}
    let b_offset = ${Ii.indicesToOffset("b_indices")};
    var values: array<${Qp.type.value}, ${h}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${c}) {
      ${ih()}
    }
    for (var i = 0u; i < ${h}u; i++) {
      var value = values[i];
      ${ph}
      ${rh}
      let cur_indices = ${Qp.type.indices}(batch, row + i, col);
      let offset = ${Qp.indicesToOffset("cur_indices")};
      ${Qp.setByOffset(`offset / ${u}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${u};${c};${h};${s}`,inputDependencies:g?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:y}),getShaderSource:F}},Wd=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Ji$1=e=>{Wd(e.inputs);let t=Ee$2.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],o=e.inputs[0].dims[e.inputs[0].dims.length-1];r<8&&o<8?e.compute(Gn$1(e.inputs,{activation:""},t)):e.compute(en$1(e.inputs,{activation:""},t))}}),Gd,qn$1,Hd,Fn$1,Kn$1,es$1,qd,Fd,jn$1,ts$1=k$1(()=>{N$1(),Hi$1(),Xi$1(),mt$1(),Yi$1(),Ue$2(),Hn$1(),Me$2(),Gd=(e,t,r,o,s,i)=>{let a=e[0],d=e.slice(i?1:2,i?3:4),p=d.length,n=t[0],l=t.slice(2).map((c,h)=>c+(c-1)*(r[h]-1)),u=d.map((c,h)=>c+o[h]+o[h+p]).map((c,h)=>Math.floor((c-l[h]+s[h])/s[h]));return u.splice(0,0,a),u.splice(i?3:1,0,n),u},qn$1=[2,3,1,0],Hd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],o=e[1].dims[1]*t.group;if(r!==o)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Fn$1=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let i=2;i<t[1].dims.length;++i)r[i-2]===0&&(r[i-2]=t[1].dims[i]);let o=e.pads.slice();Ke$2.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,o,e.format==="NHWC",e.autoPad);let s=Object.assign({},e);return Object.assign(s,{kernelShape:r,pads:o}),s},Kn$1=e=>{let t=Qt$2(e),r=e.format,o=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],s=e.dilations,i=e.group,a=e.kernel_shape,d=e.pads,p=e.strides,n=e.w_is_const();return{autoPad:o,format:r,dilations:s,group:i,kernelShape:a,pads:d,strides:p,wIsConst:n,...t,cacheKey:`${e.format};${t.activation};`}},es$1=(e,t,r,o)=>{let s=r.format==="NHWC",i=Gd(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,s);if(r.group!==1){let kd=[t[0]];if(s){let Ii=e.kernelCustomData.wT??e.compute(le$2(t[1],qn$1),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=Ii),kd.push(Ii)}else kd.push(t[1]);t.length===3&&kd.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&s&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Qi$1(kd,r,i,o),{inputs:kd}):e.compute(Zi$1(kd,r,i,o),{inputs:kd});return}let a=t.length===3,d=t[0].dims[s?1:2],p=t[0].dims[s?2:3],n=t[0].dims[s?3:1],l=t[1].dims[2],u=t[1].dims[3],c=i[s?1:2],h=i[s?2:3],f=i[s?3:1],g=s&&l===d&&u===p&&r.pads[0]===0&&r.pads[1]===0;if(g||l===1&&u===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let kd=i[0],Ii,Qp,th,rh=[];if(s){let lh=e.kernelCustomData.wT??e.compute(le$2(t[1],qn$1),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=lh),g){let dh=d*p*n;Ii=t[0].reshape([1,kd,dh]),Qp=lh.reshape([1,dh,f]),th=[1,kd,f]}else Ii=t[0].reshape([kd,d*p,n]),Qp=lh.reshape([1,n,f]),th=[kd,c*h,f];rh.push(Ii),rh.push(Qp)}else Ii=t[0].reshape([kd,n,d*p]),Qp=t[1].reshape([1,f,n]),th=[kd,f,c*h],rh.push(Qp),rh.push(Ii);a&&rh.push(t[2]);let uh=th[2],ph=rh[0].dims[rh[0].dims.length-1];uh<8&&ph<8?e.compute(Gn$1(rh,r,i,th,s,o),{inputs:rh}):e.compute(en$1(rh,r,i,th,s,o),{inputs:rh});return}let b=!0,E=e.kernelCustomData.wT??e.compute(le$2(t[1],qn$1),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=E);let y=[t[0],E];a&&y.push(t[2]);let F=s?c*h:f,L=s?f:c*h,K=l*u*n;e.compute(Gi$1(y,r,i,F,L,K,a,b,o),{inputs:y})},qd=(e,t)=>{let r=t.format==="NHWC",o=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&o.push(e.inputs[2]);let s=[0,t.pads[0],0,t.pads[1]],i=[1].concat(t.strides),a=[1].concat(t.dilations),d=[1].concat(t.kernelShape),p=Fn$1({...t,pads:s,strides:i,dilations:a,kernelShape:d},o);es$1(e,o,p,n=>r?[n[0],n[2],n[3]]:[n[0],n[1],n[3]])},Fd=(e,t,r)=>{let o=r.format==="NHWC"?"channelsLast":"channelsFirst",s=Fn$1(r,t),i=r.autoPad==="NOTSET"?r.pads:r.autoPad,a=Ki$1(t[0].dims,t[1].dims,r.strides,r.dilations,i,!1,o);e.compute(ji$1(t,s,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],o))},jn$1=(e,t)=>{if(Hd(e.inputs,t),e.inputs[0].dims.length===3)qd(e,t);else if(e.inputs[0].dims.length===5)Fd(e,e.inputs,t);else{let r=Fn$1(t,e.inputs);es$1(e,e.inputs,r)}}}),Kd,ns$1,rs$1=k$1(()=>{U$2(),Ae$2(),W(),Ue$2(),lt$1(),Wn$1(),mt$1(),Kd=(e,t=!1,r,o,s=4)=>{let i=b=>{switch(b){case 1:return"return w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];";case 4:return`
            let coord1 = vec4<i32>(coordX, coordY, col + 1, rowInner);
            let coord2 = vec4<i32>(coordX, coordY, col + 2, rowInner);
            let coord3 = vec4<i32>(coordX, coordY, col + 3, rowInner);
            let v0 = w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];
            let v1 = w[getIndexFromCoords4D(coord1, vec4<i32>(uniforms.w_shape))];
            let v2 = w[getIndexFromCoords4D(coord2, vec4<i32>(uniforms.w_shape))];
            let v3 = w[getIndexFromCoords4D(coord3, vec4<i32>(uniforms.w_shape))];
            return ${o}(v0, v1, v2, v3);
            `;default:throw new Error(`innerElementSize ${b} is not supported.`)}},a=e?`
      let coord = vec4<i32>(batch, iXR, iXC, xCh);
      `:`
      let coord = vec4<i32>(batch, xCh, iXR, iXC);
      `,d=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,p=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",n=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",l=e?"row":"col",u=e?"col":"row",c=`
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      let outRow = ${l} / outWidth;
      let outCol = ${l} % outWidth;

      let WRow = ${u} / (uniforms.filter_dims[1] * inChannels);
      let WCol = ${u} / inChannels % uniforms.filter_dims[1];
      let xR = f32(outRow - uniforms.pads[0] + uniforms.dilations[0] * WRow) / f32(uniforms.strides[0]);
      let xC = f32(outCol - uniforms.pads[1] + uniforms.dilations[1] * WCol) / f32(uniforms.strides[1]);
      if (xR < 0.0 || xR >= f32(${p}) || fract(xR) > 0.0) {
        return ${o}(0.0);
      }
      if (xC < 0.0 || xC >= f32(${n}) || fract(xC) > 0.0) {
        return ${o}(0.0);
      }
      let iXR = i32(xR);
      let iXC = i32(xC);
      let xCh = ${u} % inChannels;
      ${a}
      return x[getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape))/${s}];`,h=e?`
      let col = colIn * ${s};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
        ${c}
      }
      return ${o}(0.0);`:`
      let col = colIn * ${s};
      if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
        ${c}
      }
      return ${o}(0.0);`,f=`
      let col = colIn * ${s};
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let coordX = uniforms.filter_dims[0] - 1 - row / (uniforms.filter_dims[1] * inChannels);
      let coordY = uniforms.filter_dims[1] - 1 - (row / inChannels) % uniforms.filter_dims[1];
      if (${e?"row < uniforms.dim_inner && col < uniforms.dim_b_outer":"row < uniforms.dim_inner && col < uniforms.dim_a_outer"}  && coordX >= 0 && coordY >= 0) {
        let rowInner = row % inChannels;
        let coord = vec4<i32>(coordX, coordY, col, rowInner);
        ${i(s)}
      }
      return ${o}(0.0);
      `,g=$e$1(r,o);return`
  fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${o} {
    ${e?h:f}
  }

  fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${o} {
    ${e?f:h}
  }

  fn mm_write(batch: i32, row : i32, colIn : i32, valueInput : ${o}) {
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
      var value = valueInput;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${d}
      ${Yt$2(t)}
      ${g}
      result[getIndexFromCoords4D(coords, vec4<i32>(uniforms.result_shape))/${s}] = value;
    }
  }`},ns$1=(e,t,r,o,s,i,a,d)=>{let p=t.format==="NHWC",n=p?e[0].dims[3]:e[0].dims[1],l=r[0],u=p?r[2]:r[3],c=p?r[1]:r[2],h=p?r[3]:r[1],f=p&&n%4===0&&n%3&&h%4===0,g=p?h:u*c,b=p?u*c:h,E=[8,8,1],y=o<=8?[4,1,1]:[4,4,1],F=[Math.ceil(g/E[0]/y[0]),Math.ceil(b/E[1]/y[1]),Math.ceil(l/E[2]/y[2])];X("verbose",()=>`[conv_backprop_mm_webgpu] dispatch = ${F}`);let L=f?4:1,K=Math.max(E[0]*L,E[1]),kd=f?4:1,Ii=[t.kernelShape[p?1:2],t.kernelShape[p?2:3]],Qp=[Ii[0]+(t.dilations[0]<=1?0:(Ii[0]-1)*(t.dilations[0]-1)),Ii[1]+(t.dilations[1]<=1?0:(Ii[1]-1)*(t.dilations[1]-1))],th=[Qp[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),Qp[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],rh=[{type:6,data:o},{type:6,data:s},{type:6,data:i},{type:6,data:t.strides},{type:6,data:t.dilations},{type:6,data:Ii},{type:6,data:th}];ve$1(t,rh),rh.push(...A(e[0].dims,e[1].dims));let uh=["rank","rank"];a&&(rh.push(...A(e[2].dims)),uh.push("rank")),rh.push(...A(r));let ph=lh=>{let dh=S$1("x",e[0].dataType,e[0].dims.length,kd),oh=S$1("w",e[1].dataType,e[1].dims.length,1),nh=C("result",e[0].dataType,r.length,kd),hh=[dh,oh],ch="";if(a){let Yp=S$1("bias",e[2].dataType,e[2].dims.length,kd);hh.push(Yp),ch+=`
          fn getBiasByOutputCoords(coords : vec4<i32>) -> ${Yp.type.value} {
            return bias[coords.${p?"w":"y"}${f?"/ 4":""}];
          }`}let ih=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"strides",type:"i32",length:2},{name:"dilations",type:"i32",length:2},{name:"filter_dims",type:"i32",length:Ii.length},{name:"pads",type:"i32",length:th.length}];xe$1(t,ih);let ah=Y$2(e[0].dataType,1);if(ah!=="f16"&&ah!=="f32")throw new Error(`elemType ${ah} is not supported.`);return`
        ${Jt$2("uniforms.result_strides")}
        ${lh.registerUniforms(ih).declareVariables(...hh,nh)};
        ${ch}
        ${Kd(p,a,t,dh.type.value,L)}
        ${f?ct$2(y,E,ah,void 0,!p,K):pt$2(y,E,ah,void 0,!p,K,!1,void 0,d)}`};return{name:"Conv2DTransposeMatMul",shaderCache:{hint:`${t.cacheKey};${y};${E};${f}`,inputDependencies:uh},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:F[0],y:F[1],z:F[2]},programUniforms:rh}),getShaderSource:ph}}}),jd,Xn$1,os$1=k$1(()=>{U$2(),Ae$2(),N$1(),W(),jd=(e,t,r,o,s,i=!1,a,d,p=!1)=>{let n=p?1:2,l=p?2:3,u=p?3:1,c=i?2:1,h=`
  fn setOutputAtIndex(flatIndex : u32, value : ${i?`vec4<${a}>`:a}) {
    result[flatIndex] = ${i?`vec4<${a}>`:a}(value);
  }`;o&&(h+=`
    fn getBiasByOutputCoords(coords : vec4<u32>) -> ${i?`vec4<${a}>`:a} {
      return bias[coords.${p?"w":"y"}${i?"/ 4":""}];
    }`);let f=i?4:1,g=S$1("W",t[1].dataType,t[1].dims.length,f),b=S$1("Dy",t[0].dataType,t[0].dims.length,f),E=[b,g];o&&E.push(S$1("bias",t[2].dataType,[r[u]].length,f));let y=C("result",t[0].dataType,r.length,f),F=`{
        let batch: u32 = ${s?"global_id.z":"workgroup_id.z"} / uniforms.result_shape[1];
        let r = ${s?"global_id.z":"workgroup_id.z"} % uniforms.result_shape[1];
        let c = ${s?"global_id.y":"workgroup_id.y"} * ${c};
        let d1: u32 = ${s?"global_id.x":"workgroup_id.x"} * 4;

        let dyCorner = vec2<i32>(i32(r), i32(c)) - vec2<i32>(uniforms.pads);

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        var dotProd: array<vec4<${a}>, ${c}>;
        for (var i = 0; i < ${c}; i++) {
          dotProd[i] = vec4<${a}>(0.0);
        }
        for (var wR: u32 = 0; wR < uniforms.filter_dims[0]; wR = wR + 1) {
          var dyR = (${a}(dyCorner.x) + ${a}(wR)) / ${a}(uniforms.strides.x);
          let wRPerm = uniforms.filter_dims[0] - 1 - wR;
          if (dyR < 0.0 || dyR >= ${a}(uniforms.Dy_shape[1]) ||
              fract(dyR) > 0.0 || wRPerm < 0) {
            continue;
          }
          let idyR: u32 = u32(dyR);

          for (var wC: u32 = 0; wC < uniforms.filter_dims[1]; wC = wC + 1) {
            let dyC = (${a}(dyCorner.y) + ${a}(wC)) / ${a}(uniforms.strides.y);
            let dyC2 = (${a}(dyCorner.y) + 1.0 + ${a}(wC)) / ${a}(uniforms.strides.y);
            let wCPerm = uniforms.filter_dims[1] - 1 - wC;
            if (wCPerm < 0) {
              continue;
            }
            var bDyCVal = true;
            var bDyCVal2 = true;
            if (dyC < 0.0 || dyC >= ${a}(uniforms.Dy_shape[2]) ||
                fract(dyC) > 0.0) {
              bDyCVal = false;
            }
            if (dyC2 < 0.0 || dyC2 >= ${a}(uniforms.Dy_shape[2]) ||
                fract(dyC2) > 0.0) {
              bDyCVal2 = false;
            }

            let idyC: u32 = u32(dyC);
            let idyC2: u32 = u32(dyC2);
            if (bDyCVal && bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2 :u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${b.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${a}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;

                xValue =  ${b.get("batch","idyR","idyC2","d2")};

                dotProd[1] = dotProd[1] + vec4<${a}>(dot(xValue, wValue0),
                                                    dot(xValue, wValue1),
                                                    dot(xValue, wValue2),
                                                    dot(xValue, wValue3));
              }
            } else if (bDyCVal) {
              let d2Length = uniforms.Dy_shape[${u}];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${b.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${a}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;
              }
            } else if (bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${g.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${b.get("batch","idyR","idyC2","d2")};
                let tmpval = vec4<${a}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[1] = dotProd[1] + tmpval;
              }
            }
          }
        }

        for (var i: u32 = 0; i < ${c}; i = i + 1) {
          let value = dotProd[i] + ${o?"bias[c+i]":`vec4<${a}>(0.0)`};
          ${y.set("batch","r","c + i","d1","value")};
        }
      }`,L=`
          let outputIndices = ${y.offsetToIndices("global_idx")};
          let batch = ${y.indicesGet("outputIndices",0)};
          let d1 = ${y.indicesGet("outputIndices",u)};
          let r = ${y.indicesGet("outputIndices",n)};
          let c = ${y.indicesGet("outputIndices",l)};
          let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
          let dyRCorner = dyCorner.x;
          let dyCCorner = dyCorner.y;
          let groupId = d1 / uniforms.output_channels_per_group;
          let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
          // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
          // ? = to be determined. : = across all values in that axis.
          var dotProd = ${a}(0.0);
          for (var wR: u32 = 0; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
            if (wR % uniforms.dilations.x != 0) {
              continue;
            }
            let dyR = (${a}(dyRCorner) + ${a}(wR)) / ${a}(uniforms.strides[0]);
            let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
            if (dyR < 0.0 || dyR >= ${a}(uniforms.Dy_shape[${n}]) || fract(dyR) > 0.0 ||
                wRPerm < 0) {
              continue;
            }
            let idyR: u32 = u32(dyR);

            for (var wC: u32 = 0; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
              if (wC % uniforms.dilations.y != 0) {
                continue;
              }
              let dyC = (${a}(dyCCorner) + ${a}(wC)) / ${a}(uniforms.strides.y);
              let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
              if (dyC < 0.0 || dyC >= ${a}(uniforms.Dy_shape[${l}]) ||
                  fract(dyC) > 0.0 || wCPerm < 0) {
                continue;
              }
              let idyC: u32 = u32(dyC);
              var inputChannel = groupId * uniforms.input_channels_per_group;
              for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + 1) {
                let xValue = ${p?b.get("batch","idyR","idyC","inputChannel"):b.get("batch","inputChannel","idyR","idyC")};
                let wValue = ${g.get("inputChannel","wOutChannel","u32(wRPerm)","u32(wCPerm)")};
                dotProd = dotProd + xValue * wValue;
                inputChannel = inputChannel + 1;
              }
            }
          }
          let value = dotProd + ${o?"bias[d1]":`${a}(0.0)`};
          ${y.setByOffset("global_idx","value")};
        `;return`
  ${e.registerUniforms(d).declareVariables(...E,y)}
  ${h}

    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
  ${i?F:L}}`},Xn$1=(e,t,r)=>{let o=e.length>2,s=t.outputShape,i=x$2.size(s),a=[Math.ceil(i/64),1,1];X("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${a}`);let d=t.format==="NHWC",p=["rank","rank"],n=[t.strides[0],t.strides[1]],l=[t.kernelShape[d?1:2],t.kernelShape[d?2:3]],u=[t.dilations[0],t.dilations[1]],c=[l[0]+(t.dilations[0]<=1?0:(t.kernelShape[d?1:2]-1)*(t.dilations[0]-1)),l[1]+(t.dilations[1]<=1?0:(t.kernelShape[d?2:3]-1)*(t.dilations[1]-1))],h=[c[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),c[1]-1-Math.floor(t.pads[1]+t.pads[3])/2],f=!1,g=t.group,b=e[1].dims,E=b[0]/g,y=b[1],F=[{type:12,data:i},{type:12,data:n},{type:12,data:l},{type:12,data:u},{type:12,data:c},{type:6,data:h},{type:12,data:E},{type:12,data:y},...A(e[0].dims,e[1].dims)];o&&(F.push(...A(e[2].dims)),p.push("rank")),F.push(...A(s));let L=a[1]===1&&a[2]===1,K=kd=>{let Ii=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:n.length},{name:"filter_dims",type:"u32",length:l.length},{name:"dilations",type:"u32",length:l.length},{name:"effective_filter_dims",type:"u32",length:c.length},{name:"pads",type:"i32",length:h.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],Qp=Y$2(e[0].dataType);return`${jd(kd,e,s,o,L,f,Qp,Ii,d)}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};`,inputDependencies:p},getRunData:()=>({dispatchGroup:{x:a[0],y:a[1],z:a[2]},outputs:[{dims:r?r(s):s,dataType:e[0].dataType}],programUniforms:F}),getShaderSource:K}}}),Xd,Zd,Qd,is$1,ss$1,Yd,Jd,el$1,tl$1,as$1,us$1=k$1(()=>{rs$1(),os$1(),Ue$2(),Me$2(),Xd=(e,t,r,o,s,i)=>(e-1)*t+r+(o-1)*s+1-i,Zd=(e,t,r,o,s)=>{let i=Math.floor(e/2);t==="SAME_UPPER"?(r[o]=i,r[s]=e-i):t==="SAME_LOWER"&&(r[o]=e-i,r[s]=i)},Qd=(e,t,r,o,s,i,a,d,p,n)=>{let l=e.length-2,u=n.length===0;p.length<l&&p.push(...Array(l-p.length).fill(0));let c=e[0],h=t[d?3:1]*s;for(let f=0,g=e.length-l-(d?1:0);f<l;++f,++g){let b=e[g],E=u?b*a[f]:n[f],y=Xd(b,a[f],i[f],t[g],r[f],E);Zd(y,o,i,f,f+l),u&&n.push(a[f]*(b-1)+p[f]+(t[g]-1)*r[f]+1-i[f]-i[f+l])}n.splice(0,0,c),n.splice(d?3:1,0,h)},is$1=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((u,c)=>u*c,1)===0){r.length=0;for(let u=2;u<t[1].dims.length;++u)r.push(t[1].dims[u])}let o=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(o?3:1,0,t[1].dims[1]);let s=e.pads.slice(),i=e.outputShape.slice(),a=e.outputPadding.slice(),d=t[0].dims,p=e.dilations.slice();if(p.reduce((u,c)=>u+c,0)===0){let u=t[0].dims.length-2;p=new Array(u).fill(1)}let n=e.strides.slice();if(n.reduce((u,c)=>u+c,0)===0){let u=t[0].dims.length-2;n=new Array(u).fill(1)}Qd(d,r,p,e.autoPad,e.group,s,n,o,a,i);let l=Object.assign({},e);return Object.assign(l,{kernelShape:r,pads:s,outputPadding:a,outputShape:i,dilations:p,strides:n}),l},ss$1=e=>{let t=Qt$2(e),r=e.format,o=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],s=e.dilations,i=e.group,a=e.kernelShape,d=e.pads,p=e.strides,n=e.wIsConst(),l=e.outputPadding,u=e.outputShape;return{autoPad:o,format:r,dilations:s,group:i,kernelShape:a,outputPadding:l,outputShape:u,pads:d,strides:p,wIsConst:n,...t,cacheKey:`${e.format};${t.activation};`}},Yd=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],o=e[1].dims[0];if(r!==o)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let s=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==s))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.reduce((a,d)=>a+d,0)>0&&t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.reduce((a,d)=>a+d,0)>0&&t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.reduce((a,d)=>a+d,0)>0&&t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.outputPadding.length!==i&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${i}D`);if(t.kernelShape.reduce((a,d)=>a+d,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Jd=[2,3,1,0],el$1=(e,t,r)=>{let o=is$1(r,t),s=r.format==="NHWC",i=o.outputShape,a=i[s?3:1],d=t[0].dims[s?3:1];if(o.group!==1||a===1&&d===1){e.compute(Xn$1(t,o));return}let p=i[s?1:2],n=i[s?2:3],l=t[1].dims[2],u=t[1].dims[3],c=s?p*n:a,h=s?a:p*n,f=l*u*d,g=!0,b=e.kernelCustomData.wT??e.compute(le$2(t[1],Jd),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=b);let E=[t[0],b],y=t.length===3;y&&(!s&&t[2].dims.length===1?E.push(t[2].reshape([t[2].dims[0],1,1])):E.push(t[2])),e.compute(ns$1(E,o,i,c,h,f,y,g),{inputs:E})},tl$1=(e,t)=>{let r=t.format==="NHWC",o=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&o.push(e.inputs[2]);let s=t.kernelShape;(s.length===0||s[0]===0)&&(s=[e.inputs[1].dims[2]]);let i=t.dilations;(i.length===0||i[0]===0)&&(i=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let d=t.pads;d.length===0&&(d=[0,0]),d=[0,d[0],0,d[1]],a=[1].concat(a),i=[1].concat(i),s=[1].concat(s);let p=is$1({...t,pads:d,strides:a,dilations:i,kernelShape:s},o);e.compute(Xn$1(o,p,n=>r?[n[0],n[2],n[3]]:[n[0],n[1],n[3]]))},as$1=(e,t)=>{Yd(e.inputs,t),e.inputs[0].dims.length===3?tl$1(e,t):el$1(e,e.inputs,t)}}),nl$1,ds$1,ls$1,cs$1=k$1(()=>{U$2(),N$1(),ae$1(),W(),nl$1=(e,t,r,o)=>{let s=x$2.size(t),i=t.length,a=S$1("input",e,i),d=C("output",e,i),p=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),n=x$2.normalizeAxis(p,i),l=u=>{let c=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,h=B$1("uniforms.input_shape","uniforms.axis",i),f=o.reverse?c+(o.exclusive?" + 1":""):"0",g=o.reverse?h:c+(o.exclusive?"":" + 1");return`
                ${u.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,d)}
                ${u.mainStart()}
                  ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${d.offsetToIndices("global_idx")};
                  var sum = ${d.type.value}(0);
                  let first : i32 = ${f};
                  let last : i32 = ${g};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${d.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:o.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},{type:12,data:n},...A(t,t)]}),getShaderSource:l}},ds$1=(e,t)=>{let r=e.inputs[0].dims,o=e.inputs[0].dataType,s=e.inputs[1];e.compute(nl$1(o,r,s,t),{inputs:[0]})},ls$1=e=>{let t=e.exclusive===1,r=e.reverse===1;return V$2({exclusive:t,reverse:r})}}),rl$1,ol$1,il$1,ps$1,ms$1,fs$1=k$1(()=>{U$2(),N$1(),ae$1(),W(),rl$1=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},ol$1=(e,t,r,o)=>{let s=[];s.push(`fn perm(i: ${o.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let i=0;i<t;++i)s.push(r.indicesSet("a",e[i],`i[${i}]`));return s.push("return a;}"),s.join(`
`)},il$1=(e,t)=>{let r,o,s,i,a,d,p=t.format==="NHWC",n=t.blocksize,l=t.mode==="DCR";p?([r,o,s,i]=e.dims,a=l?[r,o,s,n,n,i/n**2]:[r,o,s,i/n**2,n,n],d=l?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,o,s,i]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=l?[r,n,n,i/n**2,o,s]:[r,i/n**2,n,n,o,s],d=l?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let u=e.reshape(a),c=u.dims.length,h=e.dataType,f=S$1("a",h,c),g=C("output",h,c),b=E=>`
  ${E.registerUniform("output_size","u32").declareVariables(f,g)}

  ${ol$1(d,c,f,g)}

  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${g.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${g.setByOffset("global_idx",f.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:E=>{let y=p?[r,o*n,s*n,i/n**2]:[r,i/n**2,o*n,s*n],F=x$2.size(y),L=u.dims,K=x$2.sortBasedOnPerm(L,d);return{outputs:[{dims:y,dataType:E[0].dataType}],dispatchGroup:{x:Math.ceil(F/64)},programUniforms:[{type:12,data:F},...A(L,K)]}},getShaderSource:b}},ps$1=(e,t)=>{rl$1(e.inputs),e.compute(il$1(e.inputs[0],t))},ms$1=e=>V$2({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Zn$1,nn$1,hs$1,sl$1,al$1,Qn$1,Yn$1,gs$1,ul$1,ys$1,bs$1,ws$1=k$1(()=>{U$2(),N$1(),ae$1(),W(),Zn$1="[a-zA-Z]|\\.\\.\\.",nn$1="("+Zn$1+")+",hs$1="^"+nn$1+"$",sl$1="("+nn$1+",)*"+nn$1,al$1="^"+sl$1+"$",Qn$1=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Yn$1=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,o]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(al$1)))throw new Error("Invalid LHS term");if(r.split(",").forEach((s,i)=>{let a=e[i].dims.slice();if(!s.match(RegExp(hs$1)))throw new Error("Invalid LHS term");let d=this.processTerm(s,!0,a,i);this.lhs.push(d)}),o==="")o+=[...this.symbolToInfo.entries()].filter(([s,i])=>i.count===1||s==="...").map(([s])=>s).join("");else if(!o.match(RegExp(nn$1)))throw new Error("Invalid RHS");o.match(RegExp(Zn$1,"g"))?.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let i=this.symbolToInfo.get(s);if(i===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(i.dimValue)}}),this.rhs=this.processTerm(o,!1,this.outputDims)}addSymbol(e,t,r){let o=this.symbolToInfo.get(e);if(o!==void 0){if(o.dimValue!==t&&o.count!==1)throw new Error("Dimension mismatch");o.count++,o.inputIndices.push(r)}else o={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,o)}processTerm(e,t,r,o=-1){let s=r.length,i=!1,a=[],d=0;if(!e.match(RegExp(hs$1))&&!t&&e!=="")throw new Error("Invalid LHS term");let p=e.match(RegExp(Zn$1,"g")),n=new Qn$1(o);return p?.forEach((l,u)=>{if(l==="..."){if(i)throw new Error("Only one ellipsis is allowed per input term");i=!0;let c=s-p.length+1;if(c<0)throw new Error("Ellipsis out of bounds");if(a=r.slice(d,d+c),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let h=0;h<a.length;h++){let f=String.fromCharCode(48+h);n.addSymbol(f,u+h),this.addSymbol(f,r[d++],o)}}else n.addSymbol(l,u+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(l,r[d++],o)}),n}},gs$1=e=>e+"_max",ul$1=(e,t,r,o)=>{let s=e.map(n=>n.length).map((n,l)=>S$1(`input${l}`,t,n)),i=x$2.size(o),a=C("output",t,o.length),d=[...r.symbolToInfo.keys()].filter(n=>!r.rhs.symbolToIndices.has(n)),p=n=>{let l=[],u="var prod = 1.0;",c="var sum = 0.0;",h="sum += prod;",f=[],g=[],b=[],E=[],y=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((L,K)=>{if(r.rhs.symbolToIndices.has(K)){let kd=r.rhs.symbolToIndices.get(K)?.[0];kd!==void 0&&r.lhs.forEach((Ii,Qp)=>{if(L.inputIndices.includes(Qp)){let th=Ii.symbolToIndices.get(K);if(th===void 0)throw new Error("Invalid symbol error");th.forEach(rh=>{l.push(`${s[Qp].indicesSet(`input${Qp}Indices`,rh,a.indicesGet("outputIndices",kd))}`)})}})}else r.lhs.forEach((kd,Ii)=>{if(L.inputIndices.includes(Ii)){let Qp=kd.symbolToIndices.get(K);if(Qp===void 0)throw new Error("Invalid symbol error");Qp.forEach(th=>{f.push(`${s[Ii].indicesSet(`input${Ii}Indices`,th,`${K}`)}`)}),E.push(`prod *= ${s[Ii].getByIndices(`input${Ii}Indices`)};`)}}),g.push(`for(var ${K}: u32 = 0; ${K} < uniforms.${gs$1(K)}; ${K}++) {`),b.push("}")});let F=y?[...l,`let sum = ${s.map((L,K)=>L.getByIndices(`input${K}Indices`)).join(" * ")};`]:[...l,c,...g,...f,u,...E,h,...b];return`
            ${n.registerUniforms(d.map(L=>({name:`${gs$1(L)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...s,a)}

            ${n.mainStart()}
            ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${s.map((L,K)=>`var input${K}Indices: ${s[K].type.indices};`).join(`
`)}
            ${F.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let n=d.filter(u=>r.symbolToInfo.has(u)).map(u=>({type:12,data:r.symbolToInfo.get(u)?.dimValue||0}));n.push({type:12,data:i});let l=e.map((u,c)=>[...A(u)]).reduce((u,c)=>u.concat(c),n);return l.push(...A(o)),{outputs:[{dims:o,dataType:t}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:l}},getShaderSource:p}},ys$1=(e,t)=>{let r=new Yn$1(e.inputs,t.equation),o=r.outputDims,s=e.inputs.map((i,a)=>i.dims);e.compute(ul$1(s,e.inputs[0].dataType,r,o))},bs$1=e=>{let t=e.equation.replace(/\s+/g,"");return V$2({equation:t})}}),dl$1,_s$1,ll$1,cl$1,$s$1,vs$1=k$1(()=>{U$2(),N$1(),W(),dl$1=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),o=r.length<t.length?0:r.length-t.length,s=t.length<r.length?0:t.length-r.length;for(;o<r.length&&s<t.length;++o,++s)if(r[o]!==t[s]&&r[o]!==1&&t[s]!==1)throw new Error("Expand requires shape to be broadcastable to input")},_s$1=(e,t)=>{let r=e.length-t.length,o=[];for(let s=0;s<r;++s)o.push(e[s]);for(let s=0;s<t.length;++s)o.push(t[s]===1?e[s+r]:t[s]);return o},ll$1=(e,t)=>e.length>t.length?_s$1(e,t):_s$1(t,e),cl$1=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),o=ll$1(t,r),s=e[0].dataType,i=s===9?4:1,a=Math.ceil(x$2.size(o)/i),d=n=>{let l=S$1("input",s,t.length,i),u=C("output",s,o.length,i),c;if(s===9){let h=(f,g,b="")=>`
          let outputIndices${g} = ${u.offsetToIndices(`outputOffset + ${g}u`)};
          let offset${g} = ${l.broadcastedIndicesToOffset(`outputIndices${g}`,u)};
          let index${g} = offset${g} / 4u;
          let component${g} = offset${g} % 4u;
          ${f}[${g}] = ${b}(${l.getByOffset(`index${g}`)}[component${g}]);
        `;c=`
        let outputOffset = global_idx * ${i};
        var data = vec4<u32>(0);
        ${h("data",0,"u32")}
        ${h("data",1,"u32")}
        ${h("data",2,"u32")}
        ${h("data",3,"u32")}
        ${u.setByOffset("global_idx","data")}
      }`}else c=`
        let outputIndices = ${u.offsetToIndices("global_idx")};
        let inputOffset = ${l.broadcastedIndicesToOffset("outputIndices",u)};
        ${u.setByOffset("global_idx",l.getByOffset("inputOffset"))}
      }`;return`
    ${n.registerUniform("vec_size","u32").declareVariables(l,u)}
    ${n.mainStart()}
    ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${c}`},p=[{type:12,data:a},...A(t,o)];return{name:"Expand",shaderCache:{hint:`${o.length}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:p})}},$s$1=e=>{dl$1(e.inputs),e.compute(cl$1(e.inputs),{inputs:[0]})}}),pl$1,xs$1,Ss$1=k$1(()=>{U$2(),N$1(),W(),Zt$2(),pl$1=e=>{let t=e[0].dataType,r=x$2.size(e[0].dims),o=x$2.size(e[1].dims),s=o%4===0,i=a=>{let d=S$1("x",t,[1],4),p=S$1("bias",t,[1],4),n=C("y",t,[1],4),l=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],u=h=>`
      let bias${h}_offset: u32 = (global_idx * 4 + ${h}) % uniforms.bias_size;
      let bias${h} = ${p.getByOffset(`bias${h}_offset / 4`)}[bias${h}_offset % 4];`,c=s?`
      let bias = ${p.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${u(0)}${u(1)}${u(2)}${u(3)}
      let bias = ${d.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(l).declareVariables(d,p,n)}

    ${Ln$1(de$2(t))}

    ${a.mainStart(je$2)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${d.getByOffset("global_idx")};
      ${c}
      let x_in = x + bias;
      ${n.setByOffset("global_idx",Nn$1("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${s}`,inputDependencies:["type","type"]},getShaderSource:i,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:o}],dispatchGroup:{x:Math.ceil(r/je$2/4)}})}},xs$1=e=>{e.inputs.length<2||x$2.size(e.inputs[1].dims)===0?$i(e):e.compute(pl$1(e.inputs))}}),ml$1,fl$1,Is$1,Ts$1,Cs$1=k$1(()=>{U$2(),N$1(),ae$1(),W(),ml$1=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},fl$1=(e,t)=>{let r=e[0].dims,o=e[1].dims,s=r.length,i=x$2.normalizeAxis(t.axis,s),a=r.slice(0);a.splice(i,1,...o);let d=r[i],p=e[0].dataType===9?4:1,n=Math.ceil(x$2.size(a)/p),l=[{type:12,data:n},{type:6,data:d},{type:12,data:i},...A(e[0].dims,e[1].dims,a)],u=c=>{let h=S$1("data",e[0].dataType,e[0].dims.length,p),f=S$1("inputIndices",e[1].dataType,e[1].dims.length),g=C("output",e[0].dataType,a.length,p),b=y=>{let F=o.length,L=`var indicesIndices${y}  = ${f.type.indices}(0);`;for(let K=0;K<F;K++)L+=`${F>1?`indicesIndices${y}[${K}]`:`indicesIndices${y}`} = ${a.length>1?`outputIndices${y}[uniforms.axis + ${K}]`:`outputIndices${y}`};`;L+=`
          var idx${y} = ${f.getByIndices(`indicesIndices${y}`)};
          if (idx${y} < 0) {
            idx${y} = idx${y} + uniforms.axisDimLimit;
          }
          var dataIndices${y} : ${h.type.indices};
        `;for(let K=0,kd=0;K<s;K++)K===i?(L+=`${s>1?`dataIndices${y}[${K}]`:`dataIndices${y}`} = u32(idx${y});`,kd+=F):(L+=`${s>1?`dataIndices${y}[${K}]`:`dataIndices${y}`} = ${a.length>1?`outputIndices${y}[${kd}]`:`outputIndices${y}`};`,kd++);return L},E;if(e[0].dataType===9){let y=(F,L,K="")=>`
          let outputIndices${L} = ${g.offsetToIndices(`outputOffset + ${L}u`)};
          ${b(L)};
          let offset${L} = ${h.indicesToOffset(`dataIndices${L}`)};
          let index${L} = offset${L} / 4u;
          let component${L} = offset${L} % 4u;
          ${F}[${L}] = ${K}(${h.getByOffset(`index${L}`)}[component${L}]);
        `;E=`
        let outputOffset = global_idx * ${p};
        var value = vec4<u32>(0);
        ${y("value",0,"u32")}
        ${y("value",1,"u32")}
        ${y("value",2,"u32")}
        ${y("value",3,"u32")}
        ${g.setByOffset("global_idx","value")}
      `}else E=`
      let outputIndices = ${g.offsetToIndices("global_idx")};
      ${b("")};
      let value = ${h.getByIndices("dataIndices")};
      ${g.setByOffset("global_idx","value")};
      `;return`
      ${c.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,f,g)}
      ${c.mainStart()}
        ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${E}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:l}),getShaderSource:u}},Is$1=e=>V$2({axis:e.axis}),Ts$1=(e,t)=>{let r=e.inputs;ml$1(r),e.compute(fl$1(e.inputs,t))}}),hl$1,gl$1,As$1,ks$1,Es$1=k$1(()=>{U$2(),N$1(),ae$1(),W(),hl$1=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=x$2.normalizeAxis(t.quantizeAxis,e[0].dims.length),o=t.blockSize,s=e[0],i=e[2],a=e.length===4?e[3]:void 0;if(i.dims.length!==s.dims.length||!s.dims.map((d,p)=>p===r?Math.ceil(d/o)===i.dims[p]:d===i.dims[p]).reduce((d,p)=>d&&p,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==s.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==i.dims.length||!a.dims.map((d,p)=>d===i.dims[p]).reduce((d,p)=>d&&p,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},gl$1=(e,t)=>{let r=e[0].dims,o=e[1].dims,s=r.length,i=x$2.normalizeAxis(t.gatherAxis,s),a=x$2.normalizeAxis(t.quantizeAxis,s),d=r.slice(0);d.splice(i,1,...o);let p=x$2.size(d),n=e[2].dataType,l=e[0].dataType===22,u=[{type:12,data:p},{type:12,data:a},{type:12,data:i},{type:12,data:t.blockSize},...A(...e.map((h,f)=>h.dims),d)],c=h=>{let f=S$1("data",e[0].dataType,e[0].dims.length),g=S$1("inputIndices",e[1].dataType,e[1].dims.length),b=S$1("scales",e[2].dataType,e[2].dims.length),E=e.length>3?S$1("zeroPoint",e[3].dataType,e[3].dims.length):void 0,y=C("output",n,d.length),F=[f,g,b];E&&F.push(E);let L=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${h.registerUniforms(L).declareVariables(...F,y)}
        ${h.mainStart()}
        let output_indices = ${y.offsetToIndices("global_idx")};
        var indices_indices = ${g.type.indices}(0);
        ${o.length>1?`
          for (var i: u32 = 0; i < ${o.length}; i++) {
            let index = ${y.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${g.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${y.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${f.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${y.indicesGet("output_indices","i")};
          ${f.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${g.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[i]};
        }
        ${f.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${d.length}; i++) {
          let index = ${y.indicesGet("output_indices",`i + ${o.length} - 1`)};
          ${f.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${f.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${f.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${l?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${b.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${b.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${b.getByIndices("scale_indices")};
        ${E?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${E.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${E.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${l?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${de$2(n)}(quantized_data - zero_point) * scale;
        ${y.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((h,f)=>f!==1).map(h=>h.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(h,f)=>"rank")},getRunData:()=>({outputs:[{dims:d,dataType:n}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:u}),getShaderSource:c}},As$1=(e,t)=>{let r=e.inputs;hl$1(r,t),e.compute(gl$1(e.inputs,t))},ks$1=e=>V$2({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),yl$1,bl$1,Ps$1,zs$1,Bs$1=k$1(()=>{U$2(),N$1(),ae$1(),W(),yl$1=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},bl$1=(e,t)=>{let r=e[0].dims,o=e[0].dataType,s=r.length,i=e[1].dims,a=e[1].dataType,d=x$2.normalizeAxis(t.axis,s),p=r[d],n=i.slice(0),l=x$2.size(n),u=S$1("input",o,s),c=S$1("indicesInput",a,i.length),h=C("output",o,n.length),f=[{type:12,data:l},{type:6,data:p},{type:12,data:d}];return f.push(...A(r,i,n)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:g=>`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(u,c,h)}
      ${g.mainStart()}
      ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${h.offsetToIndices("global_idx")};

      var idx = ${c.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${u.type.indices}(outputIndices);
      ${u.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${u.getByIndices("inputIndices")};

      ${h.setByOffset("global_idx","value")};
  }`}},Ps$1=e=>V$2({axis:e.axis}),zs$1=(e,t)=>{let r=e.inputs;yl$1(r),e.compute(bl$1(e.inputs,t))}}),wl$1,_l$1,Ds$1,Os$1,Rs$1=k$1(()=>{U$2(),N$1(),W(),wl$1=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},_l$1=(e,t)=>{let r=e[0].dims.slice(),o=e[1].dims.slice(),[s,i,a]=Ht$2.getShapeOfGemmResult(r,t.transA,o,t.transB,e.length===3?e[2].dims:void 0),d=[s,i];if(!d)throw new Error("Can't use gemm on the given tensors");let p=x$2.size(d),n=[{type:12,data:p},{type:12,data:s},{type:12,data:i},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],l=["type","type"];e.length===3&&(n.push(...A(e[2].dims)),l.push("rank")),n.push(...A(d));let u=c=>{let h="";t.transA&&t.transB?h="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?h="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?h="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(h="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let f=t.alpha===1?"":"value *= uniforms.alpha;",g=S$1("a",e[0].dataType,e[0].dims),b=S$1("b",e[1].dataType,e[1].dims),E=g.type.value,y=null,F=[g,b];e.length===3&&(y=S$1("c",e[2].dataType,e[2].dims.length),F.push(y));let L=C("output",e[0].dataType,d.length);F.push(L);let K=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${c.registerUniforms(K).declareVariables(...F)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${E}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${h}
    }

    ${f}
    ${y!=null?`let cOffset = ${y.broadcastedIndicesToOffset("vec2(m, n)",L)}; value += ${E}(uniforms.beta) * ${y.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`};return{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:n}),getShaderSource:u}},Ds$1=e=>{let t=e.transA,r=e.transB,o=e.alpha,s=e.beta;return{transA:t,transB:r,alpha:o,beta:s,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Os$1=(e,t)=>{wl$1(e.inputs),e.compute(_l$1(e.inputs,t))}}),be$2,xl$1,Us$1,Ms$1,Sl$1,ft$2,Vs$1,Jn$1=k$1(()=>{U$2(),N$1(),ae$1(),Gt$2(),jt$1(),W(),Me$2(),be$2=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,xl$1=(e,t)=>{let r=e[0],o=be$2(e,1),s=be$2(e,2),i=be$2(e,3),a=be$2(e,4),d=be$2(e,5),p=be$2(e,6),n=be$2(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let l=r.dims[0],u=r.dims[1],c=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],h=u,f=0,g=0,b=Math.floor(c/t.numHeads);if(p&&n&&x$2.size(p.dims)&&x$2.size(n.dims)){if(p.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(p.dims[0]!==l||p.dims[1]!==t.numHeads||p.dims[3]!==b)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(n.dims[0]!==l||n.dims[1]!==t.numHeads||n.dims[3]!==b)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[2]!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(n.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=p.dims[2],g=p.dims[2]}else if(p&&x$2.size(p.dims)||n&&x$2.size(n.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let E;if(o&&x$2.size(o.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(o.dims.length<3||o.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==o.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(o.dims.length===3){if(o.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');E=2,h=o.dims[1]}else if(o.dims.length===5){if(o.dims[2]!==t.numHeads||o.dims[3]!==2||o.dims[4]!==b)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw new Error('Expect "value" be none when "key" has packed kv format.');E=5,h=o.dims[1]}else{if(o.dims[1]!==t.numHeads||o.dims[3]!==b)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');E=0,h=o.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');E=3}if(i&&x$2.size(i.dims)>0){if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(o&&o.dims.length===5&&o.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let y=f+h,F=0;if(a&&x$2.size(a.dims)>0){F=8;let Ii=a.dims;throw Ii.length===1?Ii[0]===l?F=1:Ii[0]===3*l+2&&(F=3):Ii.length===2&&Ii[0]===l&&Ii[1]===y&&(F=5),F===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let L=!1,K=c;if(s&&x$2.size(s.dims)>0){if(s.dims.length!==3&&s.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==s.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(s.dims.length===3){if(h!==s.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');K=s.dims[2]}else{if(h!==s.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');K=s.dims[1]*s.dims[3],L=!0}}let kd=!1;if(a&&x$2.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(d&&x$2.size(d.dims)>0){if(d.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(d.dims[0]!==l||d.dims[1]!==t.numHeads||d.dims[2]!==u||d.dims[3]!==y)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:u,pastSequenceLength:f,kvSequenceLength:h,totalSequenceLength:y,maxSequenceLength:g,inputHiddenSize:0,hiddenSize:c,vHiddenSize:K,headSize:b,vHeadSize:Math.floor(K/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:F,scale:t.scale,broadcastResPosBias:kd,passPastInKv:L,qkvFormat:E}},Us$1=e=>V$2({...e}),Ms$1=V$2({perm:[0,2,1,3]}),Sl$1=(e,t,r,o,s,i,a)=>{let d=[o,s,i],p=x$2.size(d),n=[{type:12,data:p},{type:12,data:a},{type:12,data:i}],l=u=>{let c=C("qkv_with_bias",t.dataType,d),h=S$1("qkv",t.dataType,d),f=S$1("bias",r.dataType,d),g=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${u.registerUniforms(g).declareVariables(h,f,c)}
  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:d,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:n}),getShaderSource:l},{inputs:[t,r],outputs:[-1]})[0]},ft$2=(e,t,r,o,s,i,a,d)=>{let p=i;if(a&&x$2.size(a.dims)>0){if(o===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return p=Sl$1(e,i,a,t,o,r*s,d),p=p.reshape([t,o,r,s]),r===1||o===1?p:e.compute(le$2(p,Ms$1.perm),{inputs:[p],outputs:[-1]})[0]}else return i.dims.length===3&&(p=i.reshape([t,o,r,s])),r===1||o===1?p:e.compute(le$2(p,Ms$1.perm),{inputs:[p],outputs:[-1]})[0]},Vs$1=(e,t)=>{let r=xl$1(e.inputs,t),o=e.inputs[0],s=be$2(e.inputs,1),i=be$2(e.inputs,2),a=be$2(e.inputs,3),d=be$2(e.inputs,4),p=be$2(e.inputs,5),n=be$2(e.inputs,6),l=be$2(e.inputs,7);if(o.dims.length===5)throw new Error("Packed QKV is not implemented");if(s?.dims.length===5)throw new Error("Packed KV is not implemented");let u=s&&i&&s.dims.length===4&&i.dims.length===4,c=ft$2(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,o,a,0);if(u)return Je$2(e,c,s,i,d,void 0,n,l,p,r,t);if(!s||!i)throw new Error("key and value must be provided");let h=ft$2(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,s,a,r.hiddenSize),f=ft$2(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,i,a,2*r.hiddenSize);Je$2(e,c,h,f,d,void 0,n,l,p,r,t)}}),Ls$1,Il$1,Tl$1,er$2,Ns$1,tr$1=k$1(()=>{U$2(),N$1(),W(),Ls$1=e=>Array.from(e.getBigInt64Array(),Number),Il$1=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Ls$1(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Tl$1=(e,t)=>{let r=[];for(let o=0;o<e.length;++o)r.push(e[o]*t[o]);return r},er$2=(e,t)=>{let r=e[0].dims,o=t??Ls$1(e[1]),s=Tl$1(r,o),i=x$2.size(s),a=e[0].dataType,d=S$1("input",a,r.length),p=C("output",a,s.length),n=l=>`
      const inputShape = ${d.indices(...r)};
      ${l.registerUniform("output_size","u32").declareVariables(d,p)}
      ${l.mainStart()}
      ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${p.offsetToIndices("global_idx")};
      var input_indices: ${d.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${d.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${p.indicesGet("output_indices","i")}  % input_dim_i;

        ${d.indicesSet("input_indices","i","input_dim_value")}
      }
      ${p.setByOffset("global_idx",d.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${o}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},...A(e[0].dims,s)]}),getShaderSource:n}},Ns$1=e=>{Il$1(e.inputs),e.compute(er$2(e.inputs),{inputs:[0]})}}),Cl$1,Ws$1,Hs$1,Al$1,Gs$1,qs$1,Fs$1=k$1(()=>{U$2(),N$1(),ae$1(),jt$1(),W(),Jn$1(),tr$1(),Me$2(),Cl$1=(e,t)=>{let r=e[0],o=e[1],s=e[2],i=e[3],a=e[4];if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let d=!1,p=r.dims[0],n=r.dims[1],l=r.dims.length===3?d?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],u=n,c=0,h=0,f=Math.floor(l/t.numHeads),g=i&&i.dims.length!==0,b=a&&a.dims.length!==0,E=!0;if(g&&b){if(i.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');c=i.dims[1],h=i.dims[1]}else if(g||b)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let y;if(o){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(o.dims.length<3||o.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==o.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(o.dims.length===3){if(r.dims[2]%o.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');y=2,u=o.dims[1]}else if(o.dims.length===5){if(o.dims[2]!==t.numHeads||o.dims[3]!==2||o.dims[4]!==f)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw new Error('Expect "value" be none when "key" has packed kv format.');y=5,u=o.dims[1]}else{if(o.dims[1]!==t.numHeads||o.dims[3]!==f)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');y=0,u=o.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');y=3}let F=0,L=!1,K=l;if(s){if(s.dims.length!==3&&s.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==s.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(s.dims.length===3){if(u!==s.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');K=s.dims[2]}else{if(u!==s.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');K=s.dims[1]*s.dims[3],L=!0}}let kd=c+u;return{batchSize:p,sequenceLength:n,pastSequenceLength:c,kvSequenceLength:u,totalSequenceLength:kd,maxSequenceLength:h,inputHiddenSize:0,hiddenSize:l,vHiddenSize:K,headSize:f,vHeadSize:Math.floor(K/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:F,scale:t.scale,broadcastResPosBias:!1,passPastInKv:L,qkvFormat:y,isPastkvBSNH:E}},Ws$1=(e,t,r,o)=>{let s=[o.batchSize,o.totalSequenceLength,o.kvNumHeads,o.headSize],i=4,a=x$2.size(s)/i,d=o.totalSequenceLength,p=C("present_kv",r,s.length,i),n=S$1("new_kv",e.dataType,e.dims.length,i),l=t?S$1("past_kv",t.dataType,t.dims.length,i):void 0,u=Math.ceil(o.headSize/i),c={x:d,y:e.dims[0],z:1},h=t?["rank","rank"]:["rank"],f=[{type:12,data:a},{type:12,data:o.pastSequenceLength},{type:12,data:o.kvSequenceLength},{type:12,data:o.totalSequenceLength}],g=[n];l?(f.push(...A(e.dims),...A(t.dims),...A(s)),g.push(l)):f.push(...A(e.dims),...A(s));let b=[{name:"output_size",type:"u32"},{name:"past_seqlen",type:"u32"},{name:"new_seqlen",type:"u32"},{name:"present_seqlen",type:"u32"}],E=`      let past_batch_stride = uniforms.past_seqlen * num_heads * H;
        var past_head_stride = uniforms.past_seqlen * H;
        if (is_bsnh) {
          past_head_stride = H;
        }
        let in_offset = b * past_batch_stride + s * row_stride + n * past_head_stride + h;
        present_kv[out_offset] = past_kv[in_offset];`,y=`      let new_batch_stride = uniforms.new_seqlen * num_heads * H;
        let new_row_stride = num_heads * H;
        let new_head_stride = H;
        let in_offset = b * new_batch_stride + (s - past_seqlen) * new_row_stride + n * new_head_stride + h;
        present_kv[out_offset] = new_kv[in_offset];`,F=t?`if (s < past_seqlen) {
        ${E}
        } else if (s < past_seqlen + uniforms.new_seqlen) {
        ${y}
        }`:`if (s < past_seqlen + uniforms.new_seqlen) {
          ${y}
        }`,L=K=>`

  ${K.registerUniforms(b).declareVariables(...g,p)}
  ${K.mainStart([u,o.kvNumHeads,1])}
    ${K.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    var indices = ${p.offsetToIndices("global_idx")};
    let h = local_id.x;
    let n = local_id.y;
    let s = workgroup_id.x;
    let b = workgroup_id.y;
    let num_heads = ${o.kvNumHeads}u;
    let H = ${u}u;

    let present_seqlen = uniforms.present_seqlen;
    let present_batch_stride = present_seqlen * num_heads * H;
    var row_stride = H;
    let is_bsnh = ${o.isPastkvBSNH};

    if (is_bsnh) {
      row_stride = num_heads * H;
    }
    var present_head_stride = present_seqlen * H;
    if (is_bsnh) {
      present_head_stride = H;
    }

    let past_seqlen = uniforms.past_seqlen;

    let out_offset = b * present_batch_stride + s * row_stride + n * present_head_stride + h;
    ${F}
  }`;return{name:"ConcatPastNew",shaderCache:{hint:`${o.kvNumHeads}${u}${!!t}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:s,dataType:r}],dispatchGroup:c,programUniforms:f}),getShaderSource:L}},Hs$1=e=>V$2({...e}),Al$1=V$2({perm:[0,2,1,3]}),Gs$1=(e,t,r,o,s)=>{let i=t,a=o.kvNumHeads,d=o.nReps;return t.dims.length===3&&o.kvSequenceLength!==0&&(i=t.reshape([o.batchSize,o.kvSequenceLength,a,o.headSize])),r?i=e.compute(Ws$1(i,r,i.dataType,o),{inputs:[i,r],outputs:[o.isPastkvBSNH?s:-1]})[0]:i=e.compute(Ws$1(i,void 0,i.dataType,o),{inputs:[i],outputs:[o.isPastkvBSNH?s:-1]})[0],d!==1&&(i=e.compute(er$2([i],[1,1,1,d]),{inputs:[i],outputs:[-1]})[0],i=i.reshape([o.batchSize,o.totalSequenceLength,a*d,o.headSize])),e.compute(le$2(i,Al$1.perm),{inputs:[i],outputs:[-1]})[0]},qs$1=(e,t)=>{let r=Cl$1(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let o=ft$2(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,e.inputs[0],void 0,0),s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,i=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,a=Gs$1(e,e.inputs[1],s,r,1),d=Gs$1(e,e.inputs[2],i,r,2);Je$2(e,o,a,d,void 0,void 0,void 0,void 0,void 0,r,t)}}),Ks$1,kl$1,El$1,js$1,Xs$1=k$1(()=>{U$2(),N$1(),Me$2(),W(),Ks$1=(e,t,r,o,s,i,a,d)=>{let p=te$1(i),n=p===1?"f32":`vec${p}f`,l=p===1?"vec2f":`mat2x${p}f`,u=s*a,c=[s,a,i/p],h=[s,a,2],f=["rank","type","type"],g=[];g.push(...A(c,h));let b=E=>{let y=S$1("x",t.dataType,3,p),F=S$1("scale",r.dataType,r.dims),L=S$1("bias",o.dataType,o.dims),K=C("output",1,3,2),kd=[y,F,L,K],Ii=64;return`
  var<workgroup> workgroup_shared : array<${l}, ${Ii}>;
  const workgroup_size = ${Ii}u;
  ${E.declareVariables(...kd)}
  ${E.mainStart(Ii)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${n}(0);
    var squared_sum = ${n}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${n}(${y.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${l}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${ke$2("workgroup_shared[0][0]",p)} / f32(hight * ${p});
      let squared_sum_final = ${ke$2("workgroup_shared[0][1]",p)} / f32(hight * ${p});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${d}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${p};${d}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:h,dataType:1}],dispatchGroup:{x:u},programUniforms:g}),getShaderSource:b},{inputs:[t,r,o],outputs:[-1]})[0]},kl$1=(e,t,r)=>{let o=t[0].dims,s=o,i=2,a=o[0],d=o[1],p=x$2.sizeFromDimension(o,i),n=te$1(p),l=x$2.size(s)/n,u=Ks$1(e,t[0],t[1],t[2],a,p,d,r.epsilon),c=[a,d,p/n],h=[a,d],f=["type","none"],g=b=>{let E=S$1("x",t[0].dataType,c.length,n),y=S$1("scale_shift",1,h.length,2),F=C("output",t[0].dataType,c.length,n),L=[E,y,F];return`
  ${b.registerUniform("output_size","u32").declareVariables(...L)}
  ${b.mainStart()}
  ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${F.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${y.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${E.getByOffset("global_idx")} * ${F.type.value}(scale_shift.x) + ${F.type.value}(scale_shift.y);
      ${F.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${n}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:[{type:12,data:l},...A(c,h,c)]}),getShaderSource:g},{inputs:[t[0],u]})},El$1=(e,t,r)=>{let o=t[0].dims,s=o,i=o[0],a=o[o.length-1],d=x$2.sizeFromDimension(o,1)/a,p=te$1(a),n=x$2.size(s)/p,l=[{type:12,data:d},{type:12,data:Math.floor(a/p)}],u=["type","type"],c=[0,o.length-1];for(let b=0;b<o.length-2;b++)c.push(b+1);let h=e.compute(le$2(e.inputs[0],c),{inputs:[e.inputs[0]],outputs:[-1]})[0],f=Ks$1(e,h,t[1],t[2],i,d,a,r.epsilon),g=b=>{let E=Y$2(t[0].dataType),y=p===1?"vec2f":`mat${p}x2f`,F=kd=>{let Ii=kd===0?"x":"y",Qp=p===1?"f32":`vec${p}f`;switch(p){case 1:return`${E}(${Qp}(scale.${Ii}))`;case 2:return`vec2<${E}>(${Qp}(scale[0].${Ii}, scale[1].${Ii}))`;case 4:return`vec4<${E}>(${Qp}(scale[0].${Ii}, scale[1].${Ii}, scale[2].${Ii}, scale[3].${Ii}))`;default:throw new Error(`Not supported compoents ${p}`)}},L=S$1("input",t[0].dataType,t[0].dims,p),K=C("output",t[0].dataType,s,p);return`
  @group(0) @binding(0) var<storage, read> input : array<${L.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${y}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${K.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${b.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${F(0)}, ${F(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${p}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:l}),getShaderSource:g},{inputs:[t[0],f]})},js$1=(e,t)=>{t.format==="NHWC"?El$1(e,e.inputs,t):kl$1(e,e.inputs,t)}}),Pl$1,zl,Zs$1,Qs$1=k$1(()=>{U$2(),N$1(),W(),Pl$1=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},zl=(e,t,r)=>{let o=t.simplified,s=e[0].dims,i=e[1],a=!o&&e[2],d=s,p=x$2.normalizeAxis(t.axis,s.length),n=x$2.sizeToDimension(s,p),l=x$2.sizeFromDimension(s,p),u=x$2.size(i.dims),c=a?x$2.size(a.dims):0;if(u!==l||a&&c!==l)throw new Error(`Size of X.shape()[axis:] == ${l}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${u} and bias size of ${c}`);let h=[];for(let K=0;K<s.length;++K)K<p?h.push(s[K]):h.push(1);let f=te$1(l),g=["type","type"],b=[{type:12,data:n},{type:1,data:l},{type:12,data:Math.floor(l/f)},{type:1,data:t.epsilon}];a&&g.push("type");let E=r>1,y=r>2,F=K=>{let kd=Y$2(e[0].dataType),Ii=[S$1("x",e[0].dataType,e[0].dims,f),S$1("scale",i.dataType,i.dims,f)];a&&Ii.push(S$1("bias",a.dataType,a.dims,f)),Ii.push(C("output",e[0].dataType,d,f)),E&&Ii.push(C("mean_data_output",1,h)),y&&Ii.push(C("inv_std_output",1,h));let Qp=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${K.registerUniforms(Qp).declareVariables(...Ii)}
  ${K.mainStart()}
    ${K.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Rn$1("f32",f)};
    var mean_square_vector = ${Rn$1("f32",f)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Xe$2(kd,f,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${ke$2("mean_vector",f)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${ke$2("mean_square_vector",f)} / uniforms.norm_size ${o?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Xe$2(kd,f,"x[j + offset]")};
      let f32scale = ${Xe$2(kd,f,"scale[j]")};
      output[j + offset] = ${Ii[0].type.value}((f32input ${o?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${Xe$2(kd,f,"bias[j]")}`:""}
      );
    }

    ${E?"mean_data_output[global_idx] = mean":""};
    ${y?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},L=[{dims:d,dataType:e[0].dataType}];return E&&L.push({dims:h,dataType:1}),y&&L.push({dims:h,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${f};${r};${o}`,inputDependencies:g},getRunData:()=>({outputs:L,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:b}),getShaderSource:F}},Zs$1=(e,t)=>{Pl$1(e.inputs),e.compute(zl(e.inputs,t,e.outputCount))}}),Bl$1,Dl$1,Ol$1,Ys$1,Js$1,ea$1=k$1(()=>{U$2(),N$1(),ae$1(),W(),Bl$1=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],o=r.dims.length;if(r.dims[o-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let s=Math.floor((t.k+t.blockSize-1)/t.blockSize),i=t.blockSize/8*t.bits,a=e[1];if(!x$2.areEqual(a.dims,[t.n,s,i]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let d=e[2].dims;if(x$2.size(d)!==t.n*s)throw new Error("scales input size error.");if(e.length===4){let p=e[3].dims,n=t.bits>4?t.n*s:t.n*Math.floor((s+1)/2);if(x$2.size(p)!==n)throw new Error("zeroPoints input size error.")}},Dl$1=(e,t)=>{let r=e[0].dims,o=r.length,s=r[o-2],i=t.k,a=t.n,d=r.slice(0,o-2),p=x$2.size(d),n=e[1].dims[2]/4,l=e[0].dataType,u=te$1(t.k),c=te$1(n),h=te$1(a),f=d.concat([s,a]),g=s>1&&a/h%2===0?2:1,b=x$2.size(f)/h/g,E=64,y=[],F=[p,s,i/u],L=x$2.convertShape(e[1].dims).slice();L.splice(-1,1,n/c),y.push(...A(F)),y.push(...A(L)),y.push(...A(e[2].dims)),e.length===4&&y.push(...A(x$2.convertShape(e[3].dims)));let K=[p,s,a/h];y.push(...A(K));let kd=Ii=>{let Qp=F.length,th=S$1("a",e[0].dataType,Qp,u),rh=S$1("b",12,L.length,c),uh=S$1("scales",e[2].dataType,e[2].dims.length),ph=[th,rh,uh],lh=e.length===4?S$1("zero_points",12,e[3].dims.length):void 0;lh&&ph.push(lh);let dh=K.length,oh=C("output",e[0].dataType,dh,h),nh=Y$2(e[0].dataType),hh=(()=>{switch(u){case 1:return`array<${nh}, 8>`;case 2:return`mat4x2<${nh}>`;case 4:return`mat2x4<${nh}>`;default:throw new Error(`${u}-component is not supported.`)}})(),ch=()=>{let Yp=`
          // reuse a data
            var input_offset = ${th.indicesToOffset(`${th.type.indices}(batch, row, word_offset)`)};
            var a_data: ${hh};
            for (var j: u32 = 0; j < ${8/u}; j++) {
              a_data[j] = ${th.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let eh=0;eh<h*g;eh++)Yp+=`
            b_value = ${c===1?`b${eh}_data`:`b${eh}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${hh}(${Array.from({length:4},(sh,mh)=>`${nh}(b_value_lower[${mh}]), ${nh}(b_value_upper[${mh}])`).join(", ")});
            b_dequantized_values = ${u===1?`${hh}(${Array.from({length:8},(sh,mh)=>`(b_quantized_values[${mh}] - ${lh?`zero_point${eh}`:"zero_point"}) * scale${eh}`).join(", ")});`:`(b_quantized_values - ${hh}(${Array(8).fill(`${lh?`zero_point${eh}`:"zero_point"}`).join(",")})) * scale${eh};`};
            workgroup_shared[local_id.x * ${g} + ${Math.floor(eh/h)}]${h>1?`[${eh%h}]`:""} += ${Array.from({length:8/u},(sh,mh)=>`${u===1?`a_data[${mh}] * b_dequantized_values[${mh}]`:`dot(a_data[${mh}], b_dequantized_values[${mh}])`}`).join(" + ")};
          `;return Yp},ih=()=>{let Yp=`
            var col_index = col * ${h};
            ${lh?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${nh}(8);`}
            `;for(let eh=0;eh<h*g;eh++)Yp+=`
            let scale${eh} = ${uh.getByOffset("col_index * nBlocksPerCol + block")};
            ${lh?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${lh.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${eh} = ${nh}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return Yp},ah=()=>{let Yp=`col_index = col * ${h};`;for(let eh=0;eh<h*g;eh++)Yp+=`
            let b${eh}_data = ${rh.getByIndices(`${rh.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Yp+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${hh};
            var b_dequantized_values: ${hh};`,Yp};return`
        var<workgroup> workgroup_shared: array<${oh.type.value}, ${g*E}>;
        ${Ii.declareVariables(...ph,oh)}
        ${Ii.mainStart([E,1,1])}
          let output_indices = ${oh.offsetToIndices(`(global_idx / ${E}) * ${g}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${E}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/u};
            ${ih()}
            for (var word: u32 = 0; word < ${n}; word += ${c}) {
              ${ah()}
              for (var i: u32 = 0; i < ${c}; i++) {
                ${ch()}
                word_offset += ${8/u};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${g}) {
            var output_value: ${oh.type.value} = ${oh.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${E}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${g};
            }
            ${oh.setByIndices(`${oh.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${u};${c};${h};${g};${E}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:f,dataType:l}],dispatchGroup:{x:b},programUniforms:y}),getShaderSource:kd}},Ol$1=(e,t)=>{let r=e[0].dims,o=r.length,s=r[o-2],i=t.k,a=t.n,d=r.slice(0,o-2),p=x$2.size(d),n=e[1].dims[2]/4,l=e[0].dataType,u=te$1(t.k),c=te$1(n),h=d.concat([s,a]),f=128,g=a%8===0?8:a%4===0?4:1,b=f/g,E=b*c*8,y=E/u,F=E/t.blockSize,L=x$2.size(h)/g,K=[],kd=[p,s,i/u],Ii=x$2.convertShape(e[1].dims).slice();Ii.splice(-1,1,n/c),K.push(...A(kd)),K.push(...A(Ii)),K.push(...A(e[2].dims)),e.length===4&&K.push(...A(x$2.convertShape(e[3].dims)));let Qp=[p,s,a];K.push(...A(Qp));let th=rh=>{let uh=kd.length,ph=S$1("a",e[0].dataType,uh,u),lh=S$1("b",12,Ii.length,c),dh=S$1("scales",e[2].dataType,e[2].dims.length),oh=[ph,lh,dh],nh=e.length===4?S$1("zero_points",12,e[3].dims.length):void 0;nh&&oh.push(nh);let hh=Qp.length,ch=C("output",e[0].dataType,hh),ih=Y$2(e[0].dataType),ah=()=>{switch(u){case 1:return`
          let a_data0 = vec4<${ih}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ih}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ih}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ih}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${u}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ph.type.value}, ${y}>;
        var<workgroup> inter_results: array<array<${ch.type.value}, ${b}>, ${g}>;
        ${rh.declareVariables(...oh,ch)}
        ${rh.mainStart([b,g,1])}
          let output_indices = ${ch.offsetToIndices(`workgroup_index * ${g}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${F} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${y};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${y}; a_offset += ${f})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ph.getByIndices(`${ph.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ph.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${F} + local_id.x;
            ${nh?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${nh.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ih}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${ih}(8);`}
            let scale = ${dh.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${lh.getByIndices(`${lh.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/u};
            for (var i: u32 = 0; i < ${c}; i++) {
              ${ah()}
              let b_value = ${c===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${ih}>(${Array.from({length:4},(Yp,eh)=>`${ih}(b_value_lower[${eh}]), ${ih}(b_value_upper[${eh}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${ih}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Yp,eh)=>`${`dot(a_data${eh}, b_dequantized_values[${eh}])`}`).join(" + ")};
              word_offset += ${8/u};
            }
            workgroupBarrier();
          }

          if (local_idx < ${g}) {
            var output_value: ${ch.type.value} = ${ch.type.value}(0);
            for (var b = 0u; b < ${b}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${ch.setByIndices(`${ch.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${u};${c};${b};${g}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:h,dataType:l}],dispatchGroup:{x:L},programUniforms:K}),getShaderSource:th}},Ys$1=(e,t)=>{Bl$1(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Ol$1(e.inputs,t)):e.compute(Dl$1(e.inputs,t))},Js$1=e=>V$2(e)}),Rl$1,Ml$1,Ul,Vl$1,Ll$1,Nl$1,Wl,Gl$1,ta$1,na=k$1(()=>{U$2(),N$1(),W(),Rl$1=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Ml$1=(e,t,r)=>{let o="";for(let s=t-1;s>=0;--s)o+=`
            k = i32(${e.indicesGet("indices",s)}) - ${B$1("uniforms.pads",s,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${B$1("uniforms.x_shape",s,t)})) {
              break;
            }
            offset += k * i32(${B$1("uniforms.x_strides",s,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${o}
            value = x[offset];
          }
      `},Ul=(e,t,r)=>{let o="";for(let s=t-1;s>=0;--s)o+=`
                k = i32(${e.indicesGet("indices",s)}) - ${B$1("uniforms.pads",s,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${B$1("uniforms.x_shape",s,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${B$1("uniforms.x_shape",s,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${B$1("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${o}
              value = x[offset];
          `},Vl$1=(e,t,r)=>{let o="";for(let s=t-1;s>=0;--s)o+=`
                k = i32(${e.indicesGet("indices",s)}) - ${B$1("uniforms.pads",s,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${B$1("uniforms.x_shape",s,t)})) {
                  k = i32(${B$1("uniforms.x_shape",s,t)}) - 1;
                }
                offset += k * i32(${B$1("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${o}
              value = x[offset];
          `},Ll$1=(e,t,r)=>{let o="";for(let s=t-1;s>=0;--s)o+=`
                k = i32(${e.indicesGet("indices",s)}) - ${B$1("uniforms.pads",s,r)};
                if (k < 0)  {
                  k += i32(${B$1("uniforms.x_shape",s,t)}]);
                }
                if (k >= i32(${B$1("uniforms.x_shape",s,t)})) {
                  k -= i32(${B$1("uniforms.x_shape",s,t)});
                }
                offset += k * i32(${B$1("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${o}
              value = x[offset];
          `},Nl$1=(e,t,r)=>{switch(r.mode){case 0:return Ml$1(e,t,r.pads.length);case 1:return Ul(e,t,r.pads.length);case 2:return Vl$1(e,t,r.pads.length);case 3:return Ll$1(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Wl=(e,t)=>{let r=x$2.padShape(e[0].dims.slice(),t.pads),o=e[0].dims,s=x$2.size(r),i=[{type:12,data:s},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&i.push({type:a?e[2].dataType:1,data:t.value}),i.push(...A(e[0].dims,r));let d=["rank"],p=n=>{let l=C("output",e[0].dataType,r.length),u=S$1("x",e[0].dataType,o.length),c=u.type.value,h=Nl$1(l,o.length,t),f=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&f.push({name:"constant_value",type:a?c:"f32"}),`
            ${n.registerUniforms(f).declareVariables(u,l)}
            ${n.mainStart()}
            ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${l.offsetToIndices("global_idx")};

            var value = ${c}(0);
            ${h}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(x$2.size(r)/64)},programUniforms:i}),getShaderSource:p}},Gl$1=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),o=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,s=e[0].dims.length,i=new Int32Array(2*s).fill(0);if(e.length>=4){let d=e[3].getBigInt64Array();for(let p=0;p<d.length;p++)i[Number(d[p])]=Number(r[p]),i[Number(d[p])+s]=Number(r[p+d.length])}else r.forEach((d,p)=>i[Number(p)]=Number(d));let a=[];return i.forEach(d=>a.push(d)),{mode:t.mode,value:o,pads:a}}else return t},ta$1=(e,t)=>{Rl$1(e.inputs);let r=Gl$1(e.inputs,t);e.compute(Wl(e.inputs,r),{inputs:[0]})}}),rn,ra$1,oa$1,ia$1,sa$1,Hl,ql,aa$1,ua$1,da$1,la$1,ca$1,pa$1,ma$1,fa$1,ha$1,ga$1,ya$1,ba$1,wa$1=k$1(()=>{Se$2(),U$2(),N$1(),W(),rn=e=>{if(ee$2.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},ra$1=(e,t,r)=>{let o=t.format==="NHWC",s=e.dims.slice();o&&s.splice(1,0,s.pop());let i=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),d=t.strides.slice(),p=i?t.dilations.slice():[],n=t.pads.slice();Ke$2.adjustPoolAttributes(r,s,a,d,p,n);let l=Ke$2.computePoolOutputShape(r,s,d,p,a,n,t.autoPad),u=Object.assign({},t);i?Object.assign(u,{kernelShape:a,strides:d,pads:n,dilations:p,cacheKey:t.cacheKey}):Object.assign(u,{kernelShape:a,strides:d,pads:n,cacheKey:t.cacheKey});let c=l.slice();return c.push(c.splice(1,1)[0]),[u,o?c:l]},oa$1=(e,t)=>{let r=t.format==="NHWC",o=x$2.size(e),s=x$2.size(t.kernelShape),i=[{type:12,data:o},{type:12,data:s}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let d=t.kernelShape[t.kernelShape.length-1],p=t.strides[t.strides.length-1],n=t.pads[t.pads.length/2-1],l=t.pads[t.pads.length-1],u=!!(n+l);i.push({type:12,data:d},{type:12,data:p},{type:12,data:n},{type:12,data:l}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let c=!1;if(t.kernelShape.length===2){let h=t.kernelShape[t.kernelShape.length-2],f=t.strides[t.strides.length-2],g=t.pads[t.pads.length/2-2],b=t.pads[t.pads.length-2];c=!!(g+b),i.push({type:12,data:h},{type:12,data:f},{type:12,data:g},{type:12,data:b}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[i,a,!0,u,c]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let d=x$2.computeStrides(t.kernelShape);i.push({type:12,data:d},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:d.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let p=t.pads.reduce((n,l)=>n+l);return[i,a,!!p,!1,!1]}},ia$1=(e,t,r,o,s,i,a,d,p,n,l,u)=>{let c=s.format==="NHWC",h=t.type.value,f=C("output",t.type.tensor,o);if(s.kernelShape.length<=2){let g="",b="",E="",y=r-(c?2:1);if(l?g=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${y}] = indices[${y}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${y}] < 0 || xIndices[${y}]
                      >= uniforms.x_shape[${y}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`:g=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${y}] = indices[${y}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`,s.kernelShape.length===2){let F=r-(c?3:2);u?b=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${F}] = indices[${F}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${F}] < 0 || xIndices[${F}] >= uniforms.x_shape[${F}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:b=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${F}] = indices[${F}] * uniforms.sh - uniforms.phStart + j;
                `,E=`
              }
            `}return`
            ${e.registerUniforms(p).declareVariables(t,f)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${f.offsetToIndices("global_idx")};
              var xIndices = ${f.offsetToIndices("global_idx")};

              var value = ${h}(${d});
              var pad = 0;
              ${b}
              ${g}
              ${E}
              ${a}

              output[global_idx] = value;
            }`}else{if(c)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let g=s.kernelShape.length,b=s.pads.length,E="";return n?E=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${i}
              }`:E=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${i}
            `,`
            ${e.registerUniforms(p).declareVariables(t,f)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${f.offsetToIndices("global_idx")};
              var xIndices = ${f.offsetToIndices("global_idx")};

              var offsets: array<u32, ${g}>;

              var value = ${h}(${d});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${g-1}u; j++) {
                  offsets[j] = offset / ${B$1("uniforms.kernelStrides","j",g)};
                  offset -= offsets[j] * ${B$1("uniforms.kernelStrides","j",g)};
                }
                offsets[${g-1}] = offset;

                isPad = false;
                for (var j = ${r-g}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${B$1("uniforms.strides",`j - ${r-g}u`,g)}
                    + offsets[j - ${r-g}u] - ${B$1("uniforms.pads","j - 2u",b)};
                  ${E}
              }
              ${a}

              output[global_idx] = value;
            }`}},sa$1=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Hl=e=>`${sa$1(e)};${e.countIncludePad}`,ql=e=>`${sa$1(e)};${e.storageOrder};${e.dilations}`,aa$1=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),ua$1=(e,t,r,o)=>{let[s,i]=ra$1(t,o,r),a=S$1("x",t.dataType,t.dims.length),d=a.type.value,p="value += x_val;",n="";s.countIncludePad?n+=`value /= ${d}(uniforms.kernelSize);`:n+=`value /= ${d}(i32(uniforms.kernelSize) - pad);`;let[l,u,c,h,f]=oa$1(i,s);l.push(...A(t.dims,i));let g=["rank"];return{name:e,shaderCache:{hint:`${o.cacheKey};${c};${h};${f}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(x$2.size(i)/64)},programUniforms:l}),getShaderSource:b=>ia$1(b,a,t.dims.length,i.length,s,p,n,0,u,c,h,f)}},da$1=e=>{let t=e.count_include_pad!==0,r=aa$1(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let o={countIncludePad:t,...r,cacheKey:""};return{...o,cacheKey:Hl(o)}},la$1=(e,t)=>{rn(e.inputs),e.compute(ua$1("AveragePool",e.inputs[0],!1,t))},ca$1={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},pa$1=e=>{let t=e.format;return{format:t,...ca$1,cacheKey:t}},ma$1=(e,t)=>{rn(e.inputs),e.compute(ua$1("GlobalAveragePool",e.inputs[0],!0,t))},fa$1=(e,t,r,o)=>{let[s,i]=ra$1(t,o,r),a=`
      value = max(x_val, value);
    `,d="",p=S$1("x",t.dataType,t.dims.length),n=["rank"],[l,u,c,h,f]=oa$1(i,s);return l.push(...A(t.dims,i)),{name:e,shaderCache:{hint:`${o.cacheKey};${c};${h};${f}`,inputDependencies:n},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(x$2.size(i)/64)},programUniforms:l}),getShaderSource:g=>ia$1(g,p,t.dims.length,i.length,s,a,d,t.dataType===10?-65504:-1e5,u,c,h,f)}},ha$1=(e,t)=>{rn(e.inputs),e.compute(fa$1("MaxPool",e.inputs[0],!1,t))},ga$1=e=>{let t=e.storage_order,r=e.dilations,o=aa$1(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(o.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let s={storageOrder:t,dilations:r,...o,cacheKey:""};return{...s,cacheKey:ql(s)}},ya$1=e=>{let t=e.format;return{format:t,...ca$1,cacheKey:t}},ba$1=(e,t)=>{rn(e.inputs),e.compute(fa$1("GlobalMaxPool",e.inputs[0],!0,t))}}),Kl,jl,_a$1,$a$1,va$1=k$1(()=>{U$2(),N$1(),ae$1(),W(),Kl=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,o)=>r===e[2].dims[o]).reduce((r,o)=>r&&o,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((s,i)=>i===t.axis||s===e[0].dims[i]).reduce((s,i)=>s&&i,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],o=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/o)||t.blockSize>Math.ceil(r/(o-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},jl=(e,t)=>{let r=x$2.normalizeAxis(t.axis,e[0].dims.length),o=e[0].dataType,s=o===3,i=e[0].dims,a=e[1].dataType,d=x$2.size(i),p=o===3||o===2,n=p?[Math.ceil(x$2.size(e[0].dims)/4)]:e[0].dims,l=e[1].dims,u=e.length>2?e[2]:void 0,c=u?p?[Math.ceil(x$2.size(u.dims)/4)]:u.dims:void 0,h=l.length===0||l.length===1&&l[0]===1,f=h===!1&&l.length===1,g=te$1(d),b=h&&(!p||g===4),E=b?g:1,y=b&&!p?g:1,F=S$1("input",p?12:o,n.length,y),L=S$1("scale",a,l.length),K=u?S$1("zero_point",p?12:o,c.length):void 0,kd=C("output",a,i.length,E),Ii=[F,L];K&&Ii.push(K);let Qp=[n,l];u&&Qp.push(c);let th=[{type:12,data:d/E},{type:12,data:r},{type:12,data:t.blockSize},...A(...Qp,i)],rh=uh=>{let ph=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${uh.registerUniforms(ph).declareVariables(...Ii,kd)}
      ${uh.mainStart()}
          ${uh.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${kd.offsetToIndices("global_idx")};

          // Set input x
          ${p?`
            let input = ${F.getByOffset("global_idx / 4")};
            let x_vec = ${s?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${E===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${F.getByOffset("global_idx")};`};

          // Set scale input
          ${h?`let scale_value= ${L.getByOffset("0")}`:f?`
            let scale_index = ${kd.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${L.getByOffset("scale_index")};`:`
            var scale_indices: ${L.type.indices} = output_indices;
            let index = ${L.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${L.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${L.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${K?h?p?`
                let zero_point_input = ${K.getByOffset("0")};
                let zero_point_vec =  ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${K.getByOffset("0")}`:f?p?`
                let zero_point_index = ${kd.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${K.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${kd.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${K.getByOffset("zero_point_index")};`:p?`
                let zero_point_offset = ${L.indicesToOffset("scale_indices")};
                let zero_point_input = ${K.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${K.getByIndices("scale_indices")};`:`let zero_point_value = ${p?s?"i32":"u32":F.type.value}(0);`};
      // Compute and write output
      ${kd.setByOffset("global_idx",`${kd.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:K?["rank","rank","rank"]:["rank","rank"]},getShaderSource:rh,getRunData:()=>({outputs:[{dims:i,dataType:a}],dispatchGroup:{x:Math.ceil(d/E/64),y:1,z:1},programUniforms:th})}},_a$1=(e,t)=>{Kl(e.inputs,t),e.compute(jl(e.inputs,t))},$a$1=e=>V$2({axis:e.axis,blockSize:e.blockSize})}),Xl,Zl,xa$1,Sa$1=k$1(()=>{Se$2(),U$2(),W(),Xl=(e,t,r)=>{let o=e===t,s=e<t&&r<0,i=e>t&&r>0;if(o||s||i)throw new Error("Range these inputs' contents are invalid.")},Zl=(e,t,r,o)=>{let s=Math.abs(Math.ceil((t-e)/r)),i=[s],a=s,d=[{type:12,data:a},{type:o,data:e},{type:o,data:r},...A(i)],p=n=>{let l=C("output",o,i.length),u=l.type.value,c=[{name:"outputSize",type:"u32"},{name:"start",type:u},{name:"delta",type:u}];return`
        ${n.registerUniforms(c).declareVariables(l)}
        ${n.mainStart()}
        ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${u}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${o}`},getShaderSource:p,getRunData:()=>({outputs:[{dims:i,dataType:o}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d})}},xa$1=e=>{let t=0,r=0,o=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],o=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],o=e.inputs[2].getFloat32Array()[0]),ee$2.webgpu.validateInputContent&&Xl(t,r,o),e.compute(Zl(t,r,o,e.inputs[0].dataType),{inputs:[]})}}),Ql$1,Yl$1,Jl,ec$1,tc$1,nc$1,rc$1,oc$1,ic$1,sc$1,ac$1,Ia$1,uc$1,dc$1,lc$1,cc$1,pc$1,Ta$1,Ca$1,Aa$1=k$1(()=>{U$2(),N$1(),ae$1(),W(),Ql$1=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Yl$1=(e,t,r)=>{t.every(s=>s>=0&&s<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let o=new Array(r).fill(1);return t.forEach((s,i)=>o[s]=e[i]),o},Jl=(e,t,r,o,s,i)=>{let[a,d,p]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],n=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(l=>i.push(l));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(d>0&&e.length>d&&e[d].dims.length===1&&e[d].dims[0]>0){if(e[d].getFloat32Array().forEach(l=>o.push(l)),o.length!==0&&o.length!==n&&r>=18&&o.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Ql$1(o,t),t.axes.length>0&&Yl$1(o,t.axes,n).forEach((l,u)=>o[u]=l)}if(p>0&&e.length>p&&e[p].dims.length===1&&e[p].dims[0]>0&&(e[p].getBigInt64Array().forEach(l=>s.push(Number(l))),s.length!==0&&s.length!==n&&r>=18&&s.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(o.length!==0&&o.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(s.length!==0&&s.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof o<"u"&&typeof s<"u"&&o.length>0&&s.length>n)throw new Error("Resize requires only of scales or sizes to be specified")},ec$1=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`return ${t}(xResized) / ${t}(xScale);`;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    // The whole part and the fractional part are calculated separately due to inaccuracy of floating
                    // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
                    // offset-by-one error later in floor().
                    let whole = ${t}(xResized * (lengthOriginal - 1) / (lengthResized - 1));
                    let fract =
                        ${t}(xResized * (lengthOriginal - 1) % (lengthResized - 1)) / ${t}(lengthResized - 1);
                    return whole + fract;
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",tc$1=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",nc$1=(e,t,r)=>{let o=new Array(r).fill(0).concat(new Array(r).fill(1)),s=e.length===0?o:e.slice();return t.length>0?(t.forEach((i,a)=>{o[i]=s[a],o[a+r]=s[t.length+a]}),o):s},rc$1=(e,t,r,o)=>{let s=[];if(r.length>0)if(o.length>0){if(e.forEach(i=>s.push(i)),Math.max(...o)>e.length)throw new Error("axes is out of bound");o.forEach((i,a)=>s[i]=r[a])}else r.forEach(i=>s.push(i));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");s=e.map((i,a)=>Math.round(i*t[a]))}return s},oc$1=(e,t,r)=>{let o=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(i=>t[i]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(i=>t[i]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let s=e.slice();return r.axes.length>0?(r.axes.forEach(i=>t[i]=o),r.axes.forEach(i=>s[i]=Math.round(e[i]*t[i]))):(t.fill(o,0,t.length),s.forEach((i,a)=>s[a]=Math.round(i*t[a]))),s},ic$1=(e,t,r,o,s)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${B$1("uniforms.scales","i",o)};
        var roi_low = ${B$1("uniforms.roi","i",s)};
        var roi_hi = ${B$1("uniforms.roi",`i + ${t.length}`,s)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${B$1("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${B$1("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,sc$1=(e,t,r,o,s,i,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${o.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${B$1("uniforms.scales","i",s)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${B$1("uniforms.roi","i",i)};
          var roi_hi = ${B$1("uniforms.roi",`i + ${r.length}`,i)};
          var input_shape_i = ${B$1("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${B$1("uniforms.output_shape","i",o.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${a} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i"," input_index")}
      }
      return input_indices;
    }`,ac$1=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${B$1("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Ia$1=(e,t,r,o)=>e.rank>o?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",uc$1=(e,t,r,o,s)=>{let[i,a,d,p]=r.length===2?[-1,0,1,-1]:[0,2,3,1],n=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${n} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(col, ${r[d]} - 1))`)};
      ${Ia$1(e,p,i,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${n} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${n} = originalIndices[${a}];
      var col:${n} = originalIndices[${d}];
      ${o?`if (row < 0 || row > (${r[a]} - 1) || col < 0 || col > (${r[d]} - 1)) {
        return ${s};
      }`:""};
      row = max(0, min(row, ${r[a]} - 1));
      col = max(0, min(col, ${r[d]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${i}])`:"0"};
      var x11: ${n} = getInputValue(batch, channel, row1, col1);
      var x12: ${n} = getInputValue(batch, channel, row1, col2);
      var x21: ${n} = getInputValue(batch, channel, row2, col1);
      var x22: ${n} = getInputValue(batch, channel, row2, col2);
      var dx1: ${n} = abs(row - ${n}(row1));
      var dx2: ${n} = abs(${n}(row2) - row);
      var dy1: ${n} = abs(col - ${n}(col1));
      var dy2: ${n} = abs(${n}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},dc$1=(e,t,r,o,s,i,a,d,p,n)=>{let l=r.length===2,[u,c]=l?[0,1]:[2,3],h=e.type.value,f=g=>{let b=g===u?"row":"col";return`
      fn ${b}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${h} {
        var output_index = ${t.indicesGet("output_indices",g)};
        var originalIdx: ${h} = getOriginalCoordinateFromResizedCoordinate(output_index, ${s[g]},
        ${o[g]}, ${r[g]}, ${i[g]}, ${i[g]} + ${r.length});
        var fractOriginalIdx: ${h} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${d} && (originalIdx < 0 || originalIdx > (${r[g]} - 1))) {
          return ${p};
        }
        var data: array<${h}, 4> = array<${h}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${b}: ${h} = originalIdx + ${h}(i);
          if (${b} < 0 || ${b} >= ${r[g]}) {
            ${n?`coefs[i + 1] = 0.0;
                        continue;`:d?`return ${p};`:`${b} = max(0, min(${b}, ${r[g]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",g,`u32(${b})`)};
          data[i + 1] = ${g===u?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${f(u)};
    ${f(c)};
  fn getCubicInterpolationCoefs(s: ${h}) -> array<${h}, 4> {
    var absS = abs(s);
    var coeffs: array<${h}, 4> = array<${h}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${h} = 1.0 - absS;
    var twoMinusAbsS: ${h} = 2.0 - absS;
    var onePlusAbsS: ${h} = 1.0 + absS;
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${h}, 4>, coefs: array<${h}, 4>) -> ${h} {
    var coefsSum: ${h} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${h} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},lc$1=(e,t,r,o,s)=>{let[i,a,d,p,n]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(height, ${r[d]} - 1))`)};
      ${e.indicesSet("input_indices",p,`max(0, min(width, ${r[p]} - 1))`)};
      ${Ia$1(e,n,i,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${l} = originalIndices[${a}];
      var height:${l} = originalIndices[${d}];
      var width:${l} = originalIndices[${p}];
      ${o?`if (depth < 0 || depth > (${r[a]} - 1) || height < 0 || height > (${r[d]} - 1) || width < 0 || (width > ${r[p]} - 1)) {
      return ${s};
        }`:""};

    depth = max(0, min(depth, ${r[a]} - 1));
      height = max(0, min(height, ${r[d]} - 1));
      width = max(0, min(width, ${r[p]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${n}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${i}])`:"0"};

      var x111: ${l} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${l} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${l} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${l} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${l} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${l} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${l} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${l} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${l} = abs(depth - ${l}(depth1));
      var dx2: ${l} = abs(${l}(depth2) - depth);
      var dy1: ${l} = abs(height - ${l}(height1));
      var dy2: ${l} = abs(${l}(height2) - height);
      var dz1: ${l} = abs(width - ${l}(width1));
      var dz2: ${l} = abs(${l}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},cc$1=(e,t,r,o,s,i)=>{let a=e.dims,d=nc$1(i,t.axes,a.length),p=rc$1(a,o,s,t.axes),n=o.slice();o.length===0&&(n=a.map((y,F)=>y===0?1:p[F]/y),t.keepAspectRatioPolicy!=="stretch"&&(p=oc$1(a,n,t)));let l=C("output",e.dataType,p.length),u=S$1("input",e.dataType,a.length),c=x$2.size(p),h=a.length===p.length&&a.every((y,F)=>y===p[F]),f=t.coordinateTransformMode==="tf_crop_and_resize",g=t.extrapolationValue,b=u.type.value,E=y=>`
      ${h?"":`
      ${ec$1(t.coordinateTransformMode,b)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${ac$1(u,a)};
              ${tc$1(t.nearestMode,r,b)};
              ${sc$1(u,l,a,p,n.length,d.length,f)};
              `;case"linear":return`
              ${ic$1(l,a,p,n.length,d.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${uc$1(u,l,a,f,g)}`;if(a.length===3||a.length===5)return`${lc$1(u,l,a,f,g)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${dc$1(u,l,a,p,n,d,t.cubicCoeffA,f,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${y.registerUniform("output_size","u32").registerUniform("scales","f32",n.length).registerUniform("roi","f32",d.length).declareVariables(u,l)}
      ${y.mainStart()}
        ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${h?"output[global_idx] = input[global_idx];":`
        let output_indices = ${l.offsetToIndices("global_idx")};
        var input_indices: ${u.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${u.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${n.length>0?n:""}|${s.length>0?s:""}|${d.length>0?d:""}|${h}|${a}`,inputDependencies:["rank"]},getShaderSource:E,getRunData:()=>({outputs:[{dims:p,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},{type:1,data:n},{type:1,data:d},...A(a,p)]})}},pc$1=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Ta$1=(e,t)=>{let r=[],o=[],s=[],i=pc$1(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Jl(e.inputs,t,i,r,o,s),e.compute(cc$1(e.inputs[0],t,i,r,o,s),{inputs:[0]})},Ca$1=e=>{let t=e.antialias,r=e.axes,o=e.coordinateTransformMode,s=e.cubicCoeffA,i=e.excludeOutside!==0,a=e.extrapolationValue,d=e.keepAspectRatioPolicy,p=e.mode,n=e.nearestMode===""?"simple":e.nearestMode;return V$2({antialias:t,axes:r,coordinateTransformMode:o,cubicCoeffA:s,excludeOutside:i,extrapolationValue:a,keepAspectRatioPolicy:d,mode:p,nearestMode:n})}}),mc$1,fc,ka$1,Ea$1=k$1(()=>{U$2(),N$1(),ae$1(),W(),mc$1=(e,t)=>{let[r,o,s,i]=e,{numHeads:a,rotaryEmbeddingDim:d}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!x$2.areEqual(o.dims,[])&&!x$2.areEqual(o.dims,[1])&&o.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${o.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(!x$2.areEqual(s.dims,i.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(d>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let p=r.dims[0],n=r.dims[r.dims.length-2],l=s.dims[0],u=x$2.sizeFromDimension(r.dims,1)/n,c=d===0?s.dims[1]*2:u/a;if(d>c)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(o.dims.length===2){if(p!==o.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${o.dims[0]}`);if(n!==o.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${o.dims[1]}`)}if(c/2!==s.dims[1]&&d/2!==s.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${s.dims[1]}`);if(n>l)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},fc=(e,t)=>{let{interleaved:r,numHeads:o,rotaryEmbeddingDim:s,scale:i}=t,a=e[0].dims[0],d=x$2.sizeFromDimension(e[0].dims,1),p=e[0].dims[e[0].dims.length-2],n=d/p,l=e[2].dims[1],u=s===0?l*2:n/o,c=new Array(a,p,n/u,u-l),h=x$2.computeStrides(c),f=[{type:1,data:i},{type:12,data:c},{type:12,data:h},...e[0].dims.length===3?new Array({type:12,data:[d,n,u,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[d,u,p*u,1]}):[],...A(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],g=b=>{let E=S$1("input",e[0].dataType,e[0].dims.length),y=S$1("position_ids",e[1].dataType,e[1].dims.length),F=S$1("cos_cache",e[2].dataType,e[2].dims.length),L=S$1("sin_cache",e[3].dataType,e[3].dims.length),K=C("output",e[0].dataType,e[0].dims.length);return b.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:c.length},{name:"global_strides",type:"u32",length:h.length},{name:"input_output_strides",type:"u32",length:h.length}]),`
        ${b.declareVariables(E,y,F,L,K)}

        ${b.mainStart(je$2)}
          let half_rotary_emb_dim = uniforms.${F.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${y.broadcastedIndicesToOffset("bsnh.xy",C("",y.type.tensor,2))};
            let position_id =
                u32(${y.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${E.getByOffset("i")} * ${F.get("position_id","bsnh[3]")} -
                ${E.getByOffset("j")} * ${L.get("position_id","bsnh[3]")};
            ${K.setByOffset("i","re")}
            let im = ${E.getByOffset("i")} * ${L.get("position_id","bsnh[3]")} +
                ${E.getByOffset("j")} * ${F.get("position_id","bsnh[3]")};
            ${K.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${K.setByOffset("k",E.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:V$2({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(x$2.size(c)/je$2)},programUniforms:f})}},ka$1=(e,t)=>{mc$1(e.inputs,t),e.compute(fc(e.inputs,t))}}),hc$1,gc$1,Pa$1,za$1=k$1(()=>{U$2(),N$1(),W(),hc$1=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],o=e[2];if(t.dataType!==r.dataType||t.dataType!==o.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let s=t.dims[t.dims.length-1],i=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==s)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==i)throw new Error("Skip must have the same sequence length as input");if(o.dims.length!==1)throw new Error("Gamma must be 1D");if(o.dims[o.dims.length-1]!==s)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==s)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==s)throw new Error("Bias must have the same hidden size as input")}},gc$1=(e,t,r,o)=>{let s=t.simplified,i=e[0].dims,a=x$2.size(i),d=i,p=a,n=i.slice(-1)[0],l=o?i.slice(0,-1).concat(1):[],u=!s&&e.length>3,c=e.length>4,h=o&&r>1,f=o&&r>2,g=r>3,b=64,E=te$1(n),y=[{type:12,data:p},{type:12,data:E},{type:12,data:n},{type:1,data:t.epsilon}],F=K=>{let kd=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],Ii=[S$1("x",e[0].dataType,e[0].dims,E),S$1("skip",e[1].dataType,e[1].dims,E),S$1("gamma",e[2].dataType,e[2].dims,E)];u&&Ii.push(S$1("beta",e[3].dataType,e[3].dims,E)),c&&Ii.push(S$1("bias",e[4].dataType,e[4].dims,E)),Ii.push(C("output",e[0].dataType,d,E)),h&&Ii.push(C("mean_output",1,l)),f&&Ii.push(C("inv_std_output",1,l)),g&&Ii.push(C("input_skip_bias_sum",e[0].dataType,d,E));let Qp=Y$2(e[0].dataType),th=Y$2(1,E);return`

      ${K.registerUniforms(kd).declareVariables(...Ii)}
      var<workgroup> sum_shared : array<${th}, ${b}>;
      var<workgroup> sum_squared_shared : array<${th}, ${b}>;

      ${K.mainStart([b,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${b};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${b};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${b-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${c?"bias[offset1d + i]":Qp+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${g?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Xe$2(Qp,E,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${b};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${ke$2("sum",E)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${ke$2("square_sum",E)} / f32(uniforms.hidden_size) ${s?"":"- mean * mean"} + uniforms.epsilon);
        ${h?"mean_output[global_idx] = mean;":""}
        ${f?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${s?"":`- ${Qp}(mean)`}) *
            ${Qp}(inv_std_dev) * gamma[offset1d + i]
            ${u?"+ beta[offset1d + i]":""};
        }
      }`},L=[{dims:d,dataType:e[0].dataType}];return r>1&&L.push({dims:l,dataType:1}),r>2&&L.push({dims:l,dataType:1}),r>3&&L.push({dims:i,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${E};${h};${f};${g}`,inputDependencies:e.map((K,kd)=>"type")},getShaderSource:F,getRunData:()=>({outputs:L,dispatchGroup:{x:Math.ceil(p/n)},programUniforms:y})}},Pa$1=(e,t)=>{hc$1(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(gc$1(e.inputs,t,e.outputCount,!1),{outputs:r})}}),yc$1,on$1,bc$1,Ba$1,wc$1,_c$1,Da$1,Oa$1,Ra$1=k$1(()=>{U$2(),N$1(),ae$1(),W(),yc$1=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,o)=>{if(e[o+1].dataType!==6&&e[o+1].dataType!==7)throw new Error(`Input ${o} must be an array of int32 or int64`)})},on$1=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(o=>r.push(Number(o)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(o=>r.push(Number(o)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},bc$1=(e,t)=>{if(e.length>1){let r=on$1(e,1),o=on$1(e,2),s=on$1(e,3);return s.length===0&&(s=[...Array(e[0].dims.length).keys()]),V$2({starts:r,ends:o,axes:s})}else return t},Ba$1=(e,t,r,o,s)=>{let i=e;return e<0&&(i+=r[o[t]]),s[t]<0?Math.max(0,Math.min(i,r[o[t]]-1)):Math.max(0,Math.min(i,r[o[t]]))},wc$1=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${B$1("uniforms.input_shape","i",r.length)};
            let steps_i = ${B$1("uniforms.steps","i",r.length)};
            let signs_i = ${B$1("uniforms.signs","i",r.length)};
            let starts_i = ${B$1("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,_c$1=(e,t)=>{let r=e[0].dims,o=x$2.size(r),s=t.axes.length>0?x$2.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],i=on$1(e,4);i.forEach(E=>E!==0||(()=>{throw new Error("step cannot be 0")})),i.length===0&&(i=Array(s.length).fill(1));let a=t.starts.map((E,y)=>Ba$1(E,y,r,s,i)),d=t.ends.map((E,y)=>Ba$1(E,y,r,s,i));if(s.length!==a.length||s.length!==d.length)throw new Error("start, ends and axes should have the same number of elements");if(s.length!==r.length)for(let E=0;E<r.length;++E)s.includes(E)||(a.splice(E,0,0),d.splice(E,0,r[E]),i.splice(E,0,1));let p=i.map(E=>Math.sign(E));i.forEach((E,y,F)=>{if(E<0){let L=(d[y]-a[y])/E,K=a[y],kd=K+L*i[y];a[y]=kd,d[y]=K,F[y]=-E}});let n=r.slice(0);s.forEach((E,y)=>{n[E]=Math.ceil((d[E]-a[E])/i[E])});let l={dims:n,dataType:e[0].dataType},u=C("output",e[0].dataType,n.length),c=S$1("input",e[0].dataType,e[0].dims.length),h=x$2.size(n),f=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:p.length},{name:"steps",type:"u32",length:i.length}],g=[{type:12,data:h},{type:12,data:a},{type:6,data:p},{type:12,data:i},...A(e[0].dims,n)],b=E=>`
      ${E.registerUniforms(f).declareVariables(c,u)}
        ${wc$1(c,u,r)}
        ${E.mainStart()}
          ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${u.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${u.setByOffset("global_idx",c.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${p.length}_${a.length}_${i.length}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[l],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:g})}},Da$1=(e,t)=>{yc$1(e.inputs,t);let r=bc$1(e.inputs,t);e.compute(_c$1(e.inputs,r),{inputs:[0]})},Oa$1=e=>{let t=e.starts,r=e.ends,o=e.axes;return V$2({starts:t,ends:r,axes:o})}}),$c$1,vc$1,Ma$1,Ua$1,Va$1=k$1(()=>{U$2(),N$1(),ae$1(),Me$2(),W(),$c$1=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},vc$1=(e,t)=>{let r=e.inputs[0],o=r.dims,s=x$2.size(o),i=64,a=o.length,d=x$2.normalizeAxis(t.axis,a),p=d<o.length-1,n,l=[];p?(l=Array.from({length:a},(Ii,Qp)=>Qp),l[d]=a-1,l[a-1]=d,n=e.compute(le$2(r,l),{inputs:[r],outputs:[-1]})[0]):n=r;let u=n.dims,c=u[a-1],h=s/c,f=te$1(c),g=c/f,b=(Ii,Qp)=>Qp===4?`max(max(${Ii}.x, ${Ii}.y), max(${Ii}.z, ${Ii}.w))`:Qp===2?`max(${Ii}.x, ${Ii}.y)`:Qp===3?`max(max(${Ii}.x, ${Ii}.y), ${Ii}.z)`:Ii,E=S$1("x",n.dataType,n.dims,f),y=C("result",n.dataType,n.dims,f),F=E.type.value,L=Y$2(n.dataType)==="f32"?`var threadMax = ${F}(-3.402823e+38f);`:`var threadMax = ${F}(-65504.0h);`,K=Ii=>`
      var<workgroup> rowMaxShared : ${F};
      var<workgroup> rowSumShared : ${F};
      var<workgroup> threadShared : array<${F}, ${i}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${F} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${F}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${Ii.registerUniform("packedCols","i32").declareVariables(E,y)}
      ${Ii.mainStart()}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${i};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${L}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${F}(${b("threadShared[0]",f)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${F}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${F}(${ke$2("threadShared[0]",f)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,kd=e.compute({name:"Softmax",shaderCache:{hint:`${f}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:u,dataType:n.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:g}]}),getShaderSource:K},{inputs:[n],outputs:[p?-1:0]})[0];p&&e.compute(le$2(kd,l),{inputs:[kd]})},Ma$1=(e,t)=>{$c$1(e.inputs),vc$1(e,t)},Ua$1=e=>V$2({axis:e.axis})}),xc$1,Sc$1,Ic$1,Tc$1,Cc$1,La$1,Na$1,Wa$1=k$1(()=>{U$2(),N$1(),ae$1(),W(),xc$1=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Sc$1=(e,t)=>{let r=[],o=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(s=>r.push(Number(s))),o=r.length),V$2({numOutputs:o,axis:t.axis,splitSizes:r})},Ic$1=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${B$1("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Tc$1=e=>{let t=e.length,r=[];for(let o=0;o<t;++o){let s=e[o].setByIndices("indices","input[global_idx]");t===1?r.push(s):o===0?r.push(`if (output_number == ${o}u) { ${s} }`):o===t-1?r.push(`else { ${s} }`):r.push(`else if (output_number == ${o}) { ${s} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Cc$1=(e,t)=>{let r=e[0].dims,o=x$2.size(r),s=e[0].dataType,i=x$2.normalizeAxis(t.axis,r.length),a=new Array(t.numOutputs),d=S$1("input",s,r.length),p=new Array(t.numOutputs),n=[],l=[],u=0,c=[{type:12,data:o}];for(let f=0;f<t.numOutputs;f++){u+=t.splitSizes[f],p[f]=u;let g=r.slice();g[i]=t.splitSizes[f],l.push(g),a[f]=C(`output${f}`,s,g.length),n.push({dims:l[f],dataType:e[0].dataType})}c.push({type:12,data:p},...A(r,...l));let h=f=>`
  ${f.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",p.length).declareVariables(d,...a)}
  ${Ic$1(p.length)}
  ${Tc$1(a)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${d.offsetToIndices("global_idx")};
    var index = ${d.indicesGet("indices",i)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${B$1("uniforms.size_in_split_axis","output_number - 1u",p.length)};
      ${d.indicesSet("indices",i,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:h,getRunData:()=>({outputs:n,dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c})}},La$1=(e,t)=>{xc$1(e.inputs);let r=e.inputs.length===1?t:Sc$1(e.inputs,t);e.compute(Cc$1(e.inputs,r),{inputs:[0]})},Na$1=e=>{let t=e.axis,r=e.splitSizes,o=e.numOutputs<0?r.length:e.numOutputs;if(o!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return V$2({axis:t,numOutputs:o,splitSizes:r})}}),Ac$1,kc$1,Ga$1,Ha$1=k$1(()=>{U$2(),N$1(),W(),Ac$1=(e,t,r,o,s)=>{let i=C("output_data",s,r.length,4),a=S$1("a_data",t[1].dataType,t[1].dims.length,4),d=S$1("b_data",t[2].dataType,t[2].dims.length,4),p=S$1("c_data",t[0].dataType,t[0].dims.length,4),n,l=(u,c,h)=>`select(${c}, ${u}, ${h})`;if(!o)n=i.setByOffset("global_idx",l(a.getByOffset("global_idx"),d.getByOffset("global_idx"),p.getByOffset("global_idx")));else{let u=(c,h,f="")=>{let g=`a_data[index_a${h}][component_a${h}]`,b=`b_data[index_b${h}][component_b${h}]`,E=`bool(c_data[index_c${h}] & (0xffu << (component_c${h} * 8)))`;return`
            let output_indices${h} = ${i.offsetToIndices(`global_idx * 4u + ${h}u`)};
            let offset_a${h} = ${a.broadcastedIndicesToOffset(`output_indices${h}`,i)};
            let offset_b${h} = ${d.broadcastedIndicesToOffset(`output_indices${h}`,i)};
            let offset_c${h} = ${p.broadcastedIndicesToOffset(`output_indices${h}`,i)};
            let index_a${h} = offset_a${h} / 4u;
            let index_b${h} = offset_b${h} / 4u;
            let index_c${h} = offset_c${h} / 4u;
            let component_a${h} = offset_a${h} % 4u;
            let component_b${h} = offset_b${h} % 4u;
            let component_c${h} = offset_c${h} % 4u;
            ${c}[${h}] = ${f}(${l(g,b,E)});
          `};s===9?n=`
            var data = vec4<u32>(0);
            ${u("data",0,"u32")}
            ${u("data",1,"u32")}
            ${u("data",2,"u32")}
            ${u("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:n=`
            ${u("output_data[global_idx]",0)}
            ${u("output_data[global_idx]",1)}
            ${u("output_data[global_idx]",2)}
            ${u("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(p,a,d,i)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${n}
      }`},kc$1=e=>{let t=e[1].dims,r=e[2].dims,o=e[0].dims,s=e[1].dataType,i=!(x$2.areEqual(t,r)&&x$2.areEqual(r,o)),a=t,d=x$2.size(t);if(i){let n=Ee$2.calcShape(Ee$2.calcShape(t,r,!1),o,!1);if(!n)throw new Error("Can't perform where op on the given tensors");a=n,d=x$2.size(a)}let p=Math.ceil(d/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:n=>Ac$1(n,e,a,i,s),getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:p},...A(o,t,r,a)]})}},Ga$1=e=>{e.compute(kc$1(e.inputs))}}),qa$1,Fa$1=k$1(()=>{Mo(),jt$1(),Lo$1(),Wo$1(),Ci$1(),Ui$1(),Ni(),ts$1(),us$1(),cs$1(),fs$1(),ws$1(),vs$1(),Ss$1(),Cs$1(),Es$1(),Bs$1(),Rs$1(),Fs$1(),Xs$1(),Qs$1(),Hn$1(),ea$1(),Jn$1(),na(),wa$1(),va$1(),Sa$1(),Ft$2(),Aa$1(),Ea$1(),za$1(),Ra$1(),Va$1(),Wa$1(),tr$1(),Me$2(),Zt$2(),Ha$1(),qa$1=new Map([["Abs",[Go$1]],["Acos",[Ho]],["Acosh",[qo$1]],["Add",[Ai$1]],["ArgMax",[Ro,Vn$1]],["ArgMin",[Oo$1,Vn$1]],["Asin",[Fo$1]],["Asinh",[Ko]],["Atan",[jo]],["Atanh",[Xo]],["Attention",[Uo]],["AveragePool",[la$1,da$1]],["BatchNormalization",[Vo$1]],["BiasAdd",[No$1]],["BiasSplitGelu",[Ti]],["Cast",[Qo$1,Zo]],["Ceil",[Jo]],["Clip",[Yo]],["Concat",[Vi$1,Li]],["Conv",[jn$1,Kn$1]],["ConvTranspose",[as$1,ss$1]],["Cos",[ei]],["Cosh",[ti$1]],["CumSum",[ds$1,ls$1]],["DepthToSpace",[ps$1,ms$1]],["DequantizeLinear",[_a$1,$a$1]],["Div",[ki$1]],["Einsum",[ys$1,bs$1]],["Elu",[ni,dt$2]],["Equal",[Ei]],["Erf",[ri$1]],["Exp",[oi$1]],["Expand",[$s$1]],["FastGelu",[xs$1]],["Floor",[ii]],["FusedConv",[jn$1,Kn$1]],["Gather",[Ts$1,Is$1]],["GatherElements",[zs$1,Ps$1]],["GatherBlockQuantized",[As$1,ks$1]],["Gelu",[si]],["Gemm",[Os$1,Ds$1]],["GlobalAveragePool",[ma$1,pa$1]],["GlobalMaxPool",[ba$1,ya$1]],["Greater",[Di$1]],["GreaterOrEqual",[Ri$1]],["GroupQueryAttention",[qs$1,Hs$1]],["HardSigmoid",[fi,mi$1]],["InstanceNormalization",[js$1]],["LayerNormalization",[Zs$1]],["LeakyRelu",[ai$1,dt$2]],["Less",[Oi]],["LessOrEqual",[Mi$1]],["Log",[xi]],["MatMul",[Ji$1]],["MatMulNBits",[Ys$1,Js$1]],["MaxPool",[ha$1,ga$1]],["Mul",[Pi$1]],["MultiHeadAttention",[Vs$1,Us$1]],["Neg",[di]],["Not",[ui]],["Pad",[ta$1]],["Pow",[zi$1]],["QuickGelu",[Si,dt$2]],["Range",[xa$1]],["Reciprocal",[li]],["ReduceMin",[ko$1]],["ReduceMean",[So$1]],["ReduceMax",[Ao$1]],["ReduceSum",[Po$1]],["ReduceProd",[Eo$1]],["ReduceL1",[Io$1]],["ReduceL2",[To$1]],["ReduceLogSum",[Bo$1]],["ReduceLogSumExp",[Co$1]],["ReduceSumSquare",[zo]],["Relu",[ci]],["Resize",[Ta$1,Ca$1]],["RotaryEmbedding",[ka$1]],["Sigmoid",[pi]],["Sin",[hi]],["Sinh",[gi]],["Slice",[Da$1,Oa$1]],["SkipLayerNormalization",[Pa$1]],["Split",[La$1,Na$1]],["Sqrt",[yi]],["Softmax",[Ma$1,Ua$1]],["Sub",[Bi]],["Tan",[bi]],["Tanh",[_i$1]],["ThresholdedRelu",[vi,dt$2]],["Tile",[Ns$1]],["Transpose",[co$1,po$1]],["Where",[Ga$1]]])}),sn$1,Ka$1=k$1(()=>{Se$2(),Ae$2(),W(),sn$1=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,o,s){_e$2(e.programInfo.name);let i=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let d=[];for(let n of t)d.push({binding:d.length,resource:{buffer:n.buffer}});for(let n of r)d.push({binding:d.length,resource:{buffer:n.buffer}});s&&d.push({binding:d.length,resource:s});let p=i.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:d,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let n={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:p,dispatchGroup:o};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(n)}a.setPipeline(e.computePipeline),a.setBindGroup(0,p),a.dispatchWorkgroups(...o),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),ye$1(e.programInfo.name)}dispose(){}build(e,t){_e$2(e.name);let r=this.backend.device,o=[];r.features.has("shader-f16")&&o.push("enable f16;");let s=uo$1(t,this.backend.device.limits),i=e.getShaderSource(s),a=`${o.join(`
`)}
${s.additionalImplementations}
${i}`,d=r.createShaderModule({code:a,label:e.name});X("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let p=r.createComputePipeline({compute:{module:d,entryPoint:"main"},layout:"auto",label:e.name});return ye$1(e.name),{programInfo:e,computePipeline:p,uniformVariablesInfo:s.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,o=typeof e=="number"?1:e.z||1,s=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=s&&r<=s&&o<=s)return[t,r,o];let i=t*r*o,a=Math.ceil(Math.sqrt(i));if(a>s){if(a=Math.ceil(Math.cbrt(i)),a>s)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),Ec$1,Pc$1,nr$2,an$1,ja$1=k$1(()=>{Se$2(),U$2(),Ae$2(),Cn$1(),io$1(),Fa$1(),Ka$1(),Ec$1=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let o=0;o<e.length;++o){let s=e[o].dataType;switch(t[o]){case"none":{r.push("");break}case"type":{r.push(`${s}`);break}case"rank":{let i=e[o].dims.length;r.push(`${s};${i}`);break}case"dims":{let i=e[o].dims.join(",");r.push(`${s};${i}`);break}default:throw new Error(`unsupported input dependency: ${t[o]}`)}}return r.join("|")},Pc$1=(e,t,r)=>{let o=e.name;return e.shaderCache?.hint&&(o+="["+e.shaderCache.hint+"]"),o+=":"+r+`:${Ec$1(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,o},nr$2=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},an$1=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],o={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r};t.features.has("chromium-experimental-timestamp-query-inside-passes")?r.push("chromium-experimental-timestamp-query-inside-passes"):t.features.has("timestamp-query")&&r.push("timestamp-query"),t.features.has("shader-f16")&&r.push("shader-f16"),this.device=await t.requestDevice(o),this.adapterInfo=new nr$2(t.info||await t.requestAdapterInfo()),this.gpuDataManager=oo$1(this),this.programManager=new sn$1(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Nt$2(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;_e$2(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let o=0;o<t.length/2;o++){let s=r[o],i=s.kernelId,a=this.kernels.get(i),d=a.kernelType,p=a.kernelName,n=s.programName,l=s.inputTensorViews,u=s.outputTensorViews,c=t[o*2],h=t[o*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=c);let f=Number(c-this.queryTimeBase),g=Number(h-this.queryTimeBase);if(!Number.isSafeInteger(f)||!Number.isSafeInteger(g))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:l.map(b=>({dims:b.dims,dataType:Ne$2(b.dataType)})),outputsMetadata:u.map(b=>({dims:b.dims,dataType:Ne$2(b.dataType)})),kernelId:i,kernelType:d,kernelName:p,programName:n,startTime:f,endTime:g});else{let b="";l.forEach((y,F)=>{b+=`input[${F}]: [${y.dims}] | ${Ne$2(y.dataType)}, `});let E="";u.forEach((y,F)=>{E+=`output[${F}]: [${y.dims}] | ${Ne$2(y.dataType)}, `}),console.log(`[profiling] kernel "${i}|${d}|${p}|${n}" ${b}${E}execution time: ${g-f} ns`)}St$2("GPU",`${n}::${c}::${h}`)}e.unmap(),this.pendingQueries.delete(e)}),ye$1()}run(e,t,r,o,s,i){_e$2(e.name);let a=[];for(let y=0;y<t.length;++y){let F=t[y].data;if(F===0)continue;let L=this.gpuDataManager.get(F);if(!L)throw new Error(`no GPU data for input: ${F}`);a.push(L)}let{outputs:d,dispatchGroup:p,programUniforms:n}=e.getRunData(t),l=r.length===0?d.map((y,F)=>F):r;if(l.length!==d.length)throw new Error(`Output size ${l.length} must be equal to ${d.length}.`);let u=[],c=[];for(let y=0;y<d.length;++y){if(!Number.isInteger(l[y])||l[y]<-3||l[y]>=i)throw new Error(`Invalid output index: ${l[y]}`);if(l[y]===-3)continue;let F=l[y]===-1,L=l[y]===-2,K=F||L?s(d[y].dataType,d[y].dims):o(l[y],d[y].dataType,d[y].dims);if(u.push(K),K.data===0)continue;let kd=this.gpuDataManager.get(K.data);if(!kd)throw new Error(`no GPU data for output: ${K.data}`);if(F&&this.temporaryData.push(kd),L){let Ii=this.kernelPersistentData.get(this.currentKernelId);Ii||(Ii=[],this.kernelPersistentData.set(this.currentKernelId,Ii)),Ii.push(kd)}c.push(kd)}if(a.length!==t.length||c.length!==u.length){if(c.length===0)return ye$1(e.name),u;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let h;if(n){let y=0,F=[];n.forEach(Ii=>{let Qp=typeof Ii.data=="number"?[Ii.data]:Ii.data;if(Qp.length===0)return;let th=Ii.type===10?2:4,rh,uh;Ii.type===10?(uh=Qp.length>4?16:Qp.length>2?8:Qp.length*th,rh=Qp.length>4?16:th*Qp.length):(uh=Qp.length<=2?Qp.length*th:16,rh=16),y=Math.ceil(y/uh)*uh,F.push(y);let ph=Ii.type===10?8:4;y+=Qp.length>4?Math.ceil(Qp.length/ph)*rh:Qp.length*th});let L=16;y=Math.ceil(y/L)*L;let K=new ArrayBuffer(y);n.forEach((Ii,Qp)=>{let th=F[Qp],rh=typeof Ii.data=="number"?[Ii.data]:Ii.data;if(Ii.type===6)new Int32Array(K,th,rh.length).set(rh);else if(Ii.type===12)new Uint32Array(K,th,rh.length).set(rh);else if(Ii.type===10)new Uint16Array(K,th,rh.length).set(rh);else if(Ii.type===1)new Float32Array(K,th,rh.length).set(rh);else throw new Error(`Unsupported uniform type: ${Ne$2(Ii.type)}`)});let kd=this.gpuDataManager.create(y,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(kd.buffer,0,K,0,y),this.gpuDataManager.release(kd.id),h={offset:0,size:y,buffer:kd.buffer}}let f=this.programManager.normalizeDispatchGroupSize(p),g=f[1]===1&&f[2]===1,b=Pc$1(e,t,g),E=this.programManager.getArtifact(b);if(E||(E=this.programManager.build(e,f),this.programManager.setArtifact(b,E),X("info",()=>`[artifact] key: ${b}, programName: ${e.name}`)),n&&E.uniformVariablesInfo){if(n.length!==E.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${E.uniformVariablesInfo.length}, got ${n.length} in program "${E.programInfo.name}".`);for(let y=0;y<n.length;y++){let F=n[y],L=F.type,K=typeof F.data=="number"?1:F.data.length,[kd,Ii]=E.uniformVariablesInfo[y];if(L!==kd||K!==Ii)throw new Error(`Uniform variable ${y} mismatch: expect type ${kd} with size ${Ii}, got type ${L} with size ${K} in program "${E.programInfo.name}".`)}}if(X("info",()=>`[ProgramManager] run "${e.name}" (key=${b}) with ${f[0]}x${f[1]}x${f[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let y={kernelId:this.currentKernelId,programName:E.programInfo.name,inputTensorViews:t,outputTensorViews:u};this.pendingKernels.push(y),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(y)}return this.programManager.run(E,a,c,f,h),ye$1(e.name),u}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,o){let s=qa$1.get(e);if(!s)throw new Error(`kernel not implemented: ${e}`);let i={kernelType:e,kernelName:o,kernelEntry:s[0],attributes:[s[1],r]};this.kernels.set(t,i)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let o=this.kernels.get(e);if(!o)throw new Error(`kernel not created: ${e}`);let s=o.kernelType,i=o.kernelName,a=o.kernelEntry,d=o.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${s}] ${i}" is not allowed to be called recursively`);this.currentKernelId=e,d[0]&&(d[1]=d[0](d[1]),d[0]=void 0),X("info",()=>`[WebGPU] Start to run kernel "[${s}] ${i}"...`);let p=this.env.debug;this.temporaryData=[];try{return p&&this.device.pushErrorScope("validation"),a(t,d[1]),0}catch(n){return r.push(Promise.resolve(`[WebGPU] Kernel "[${s}] ${i}" failed. ${n}`)),1}finally{p&&r.push(this.device.popErrorScope().then(n=>n?`GPU validation error for kernel "[${s}] ${i}": ${n.message}`:null));for(let n of this.temporaryData)this.gpuDataManager.release(n.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,o){let s=this.sessionExternalDataMapping.get(e);s||(s=new Map,this.sessionExternalDataMapping.set(e,s));let i=s.get(t),a=this.gpuDataManager.registerExternalBuffer(r,o,i);return s.set(t,[a,r]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let o=await Pn$1(this,e,t);return Wt$2(o.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){X("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){X("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){X("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let o=0;o<r;o++){let s=this.getComputePassEncoder(),i=e[o];this.writeTimestamp(this.pendingDispatchNumber*2),s.setPipeline(i.computePipeline),s.setBindGroup(0,i.bindGroup),s.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[o]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),zc$1,Xa$1,un$1,rr$2,Za$1,Qa$1=k$1(()=>{Ae$2(),zc$1=1,Xa$1=()=>zc$1++,un$1=class{constructor(e,t){this.mlContext=e,this.tensorEntry=t,this.tensorCache=t?[t]:[]}get tensor(){return this.tensorEntry?.[0]}get context(){if(!this.mlContext)throw new Error("MLContext has not been set.");return this.mlContext}set context(e){if(this.mlContext&&this.mlContext!==e)throw new Error("MLTensor in use in a different MLContext.");this.mlContext=e}destroy(){for(let[e]of this.tensorCache)e.destroy();this.tensorCache=[],this.tensorEntry=void 0}trySelectTensor(e,t){for(let[r,o,s]of this.tensorCache)if(t===r){if(this.context!==e)throw new Error("MLTensor cannot be registered with a different MLContext.");return this.tensorEntry=[r,o,s],!0}return!1}async ensureTensor(e,t,r){if(this.tensorEntry){let[i,a,d]=this.tensorEntry;if(a===e&&d.every((p,n)=>p===t[n]))return i}for(let[i,a,d]of this.tensorCache)if(a===e&&d.every((p,n)=>p===t[n])){if(r&&this.tensorEntry){X("verbose",()=>`[WebNN] Slowdown may occur, having to copy existing tensor {dataType: ${e}, shape: ${t}}`);let p=await this.context.readTensor(this.tensorEntry[0]);this.context.writeTensor(i,p)}return this.tensorEntry=[i,a,d],i}X("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${e}, shape: ${t}}`);let o=MLTensorUsage.READ|MLTensorUsage.WRITE,s=await this.context.createTensor({dataType:e,shape:t,dimensions:t,usage:o});return this.tensorEntry=[s,e,t],this.tensorCache.push(this.tensorEntry),this.activeUpload&&(this.mlContext?.writeTensor(s,this.activeUpload),this.activeUpload=void 0),s}upload(e){if(!this.tensorEntry){this.activeUpload=new Uint8Array(e);return}this.mlContext?.writeTensor(this.tensorEntry[0],e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.tensorEntry)throw new Error("Tensor has not been created.");return e?this.context.readTensor(this.tensorEntry[0],e):this.context.readTensor(this.tensorEntry[0])}},rr$2=class{constructor(e){this.backend=e,this.tensorsById=new Map,this.tensorIdsByContext=new Map}reserveTensorId(){let e=Xa$1();return this.tensorsById.set(e,new un$1),e}releaseTensorId(e){let t=this.tensorsById.get(e);if(t){t.destroy(),this.tensorsById.delete(e);for(let[r,o]of this.tensorIdsByContext)if(o.has(e)){o.delete(e),o.size===0&&this.tensorIdsByContext.delete(r);break}}}async ensureTensor(e,t,r,o){X("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${e}, dataType: ${t}, shape: ${r}, copyOld: ${o}}`);let s=this.tensorsById.get(e);if(!s)throw new Error("Tensor not found.");return s.context=this.backend.currentContext,this.tensorIdsByContext.has(this.backend.currentContext)||this.tensorIdsByContext.set(this.backend.currentContext,new Set),this.tensorIdsByContext.get(this.backend.currentContext)?.add(e),s.ensureTensor(t,r,o)}upload(e,t){this.tensorsById.get(e).upload(t)}async download(e,t){return X("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`),this.tensorsById.get(e).download(t)}releaseTensorsForContext(e){let t=this.tensorIdsByContext.get(e);if(t){for(let r of t)this.tensorsById.get(r).destroy(),this.tensorsById.delete(r);this.tensorIdsByContext.delete(e)}}registerTensor(e,t,r,o){for(let[a,d]of this.tensorsById)if(d.trySelectTensor(e,t))return a;let s=Xa$1();this.tensorsById.set(s,new un$1(e,[t,r,o]));let i=this.tensorIdsByContext.get(e);return i||(i=new Set,this.tensorIdsByContext.set(e,i)),i.add(s),s}},Za$1=(...e)=>new rr$2(...e)}),Ya$1,dn$1,Ja$1=k$1(()=>{U$2(),Le$2(),Cn$1(),Qa$1(),Ae$2(),Ya$1=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),dn$1=class{constructor(e){this.tensorManager=Za$1(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,Nt$2(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){this.activeSessionId=e}get currentContext(){let e=this.getMLContext(this.currentSessionId);if(!e)throw new Error(`No MLContext found for session ${this.currentSessionId}`);return e}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e)}onReleaseSession(e){let t=this.mlContextBySessionId.get(e);if(!t)return;this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);r.delete(e),r.size===0&&(this.sessionIdsByMLContext.delete(t),this.tensorManager.releaseTensorsForContext(t))}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){X("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,o){let s=Ya$1.get(t);if(!s)throw new Error(`Unsupported ONNX data type: ${t}`);return this.tensorManager.ensureTensor(e,s,r,o)}uploadTensor(e,t){if(!se$2().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");X("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Wt$2(r,t)}}registerMLTensor(e,t,r){let o=Ya$1.get(t);if(!o)throw new Error(`Unsupported ONNX data type: ${t}`);let s=this.tensorManager.registerTensor(this.currentContext,e,o,r);return X("verbose",()=>`[WebNN] registerMLTensor {tensor: ${e}, dataType: ${o}, dimensions: ${r}} -> {tensorId: ${s}}`),s}flush(){}}}),eu$1={};bt$2(eu$1,{init:()=>Bc$1});var ht$2,or$2,Bc$1,tu$1=k$1(()=>{U$2(),ja$1(),Ae$2(),N$1(),Ja$1(),ht$2=class Bh{constructor(t,r,o,s){this.module=t,this.dataType=r,this.data=o,this.dims=s}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=x$2.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=x$2.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=x$2.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=x$2.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(x$2.size(t)!==x$2.size(this.dims))throw new Error("Invalid new shape");return new Bh(this.module,this.dataType,this.data,t)}},or$2=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let o=e.HEAPU32,s=r>>>2;this.opKernelContext=o[s++];let i=o[s++];this.outputCount=o[s++],this.customDataOffset=o[s++],this.customDataSize=o[s++];let a=[];for(let d=0;d<i;d++){let p=o[s++],n=o[s++],l=o[s++],u=[];for(let c=0;c<l;c++)u.push(o[s++]);a.push(new ht$2(e,p,n,u))}this.inputs=a}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}getMaxComputeWorkgroupSizes(){return[this.backend.device.limits.maxComputeWorkgroupSizeX,this.backend.device.limits.maxComputeWorkgroupSizeY,this.backend.device.limits.maxComputeWorkgroupSizeZ]}getMaxComputeWorkgroupStoragesize(){return this.backend.device.limits.maxComputeWorkgroupStorageSize}compute(e,t){let r=t?.inputs?.map(a=>typeof a=="number"?this.inputs[a]:a)??this.inputs,o=t?.outputs??[],s=(a,d,p)=>new ht$2(this.module,d,this.output(a,p),p),i=(a,d)=>{let p=Fe$2(a,d);if(!p)throw new Error(`Unsupported data type: ${a}`);let n=p>0?this.backend.gpuDataManager.create(p).id:0;return new ht$2(this.module,a,n,d)};return this.backend.run(e,r,o,s,i,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let o=this.module.stackAlloc((1+t.length)*4),s=o>>2;this.module.HEAPU32[s++]=t.length;for(let i=0;i<t.length;i++)this.module.HEAPU32[s++]=t[i];return this.module._JsepOutput(this.opKernelContext,e,o)}catch(o){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${o}`)}finally{this.module.stackRestore(r)}}},Bc$1=async(e,t,r,o)=>{let s=t.jsepInit;if(!s)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let i=new an$1;await i.initialize(r,o),s("webgpu",[i,a=>i.alloc(a),a=>i.free(a),(a,d,p,n=!1)=>{if(n)X("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${a}, dst=${d}, size=${p}`),i.memcpy(a,d);else{X("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${a}, gpuDataId=${d}, size=${p}`);let l=t.HEAPU8.subarray(a>>>0,(a>>>0)+p);i.upload(d,l)}},async(a,d,p)=>{X("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${a}, dataOffset=${d}, size=${p}`),await i.download(a,()=>t.HEAPU8.subarray(d>>>0,(d>>>0)+p))},(a,d,p)=>i.createKernel(a,d,p,t.UTF8ToString(t._JsepGetNodeName(d))),a=>i.releaseKernel(a),(a,d,p,n)=>{X("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${p}, kernel=${a}, contextDataOffset=${d}`);let l=new or$2(t,i,d);return i.computeKernel(a,l,n)},()=>i.captureBegin(),()=>i.captureEnd(),()=>i.replay()])}else{let i=new dn$1(r);s("webnn",[i,()=>i.reserveTensorId(),a=>i.releaseTensorId(a),async(a,d,p,n)=>i.ensureTensor(a,d,p,n),(a,d)=>{i.uploadTensor(a,d)},async(a,d)=>i.downloadTensor(a,d)])}}}),Dc$1,kt$2,Et$2,Ze$1,Oc$1,ot$1,Pt$2,zt$2,nu$1,Bt$2,Dt$2,Ot$1,vn$1=k$1(()=>{Zr(),Yr$1(),U$2(),Le$2(),Mt$1(),Tn$1(),Dc$1=(e,t)=>{se$2()._OrtInit(e,t)!==0&&oe$2("Can't initialize onnxruntime.")},kt$2=async e=>{Dc$1(e.wasm.numThreads,at$1(e.logLevel))},Et$2=async(e,t)=>{{let r=(tu$1(),yn$1(eu$1)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let o=e.webgpu.adapter;if(o){if(typeof o.limits!="object"||typeof o.features!="object"||typeof o.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let i=e.webgpu.forceFallbackAdapter;if(i!==void 0&&typeof i!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${i}"`);if(o=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:i}),!o)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",se$2(),e,o)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",se$2(),e)}}},Ze$1=new Map,Oc$1=e=>{let t=se$2(),r=t.stackSave();try{let o=t.stackAlloc(8);return t._OrtGetInputOutputCount(e,o,o+4)!==0&&oe$2("Can't get session input/output count."),[t.HEAP32[o/4],t.HEAP32[o/4+1]]}finally{t.stackRestore(r)}},ot$1=e=>{let t=se$2(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Pt$2=async(e,t)=>{let r,o,s=se$2();Array.isArray(e)?[r,o]=e:e.buffer===s.HEAPU8.buffer?[r,o]=[e.byteOffset,e.byteLength]:[r,o]=ot$1(e);let i=0,a=0,d=0,p=[],n=[],l=[];try{if([a,p]=Qr(t),t?.externalData&&s.mountExternalData){let y=[];for(let F of t.externalData){let L=typeof F=="string"?F:F.path;y.push(ut$2(typeof F=="string"?F:F.data).then(K=>{s.mountExternalData(L,K)}))}await Promise.all(y)}for(let y of t?.executionProviders??[])if((typeof y=="string"?y:y.name)==="webnn"){if(s.shouldTransferToMLTensor=!1,s.currentContext)throw new Error("WebNN execution provider is already set.");if(typeof y!="string"){let F=y,L=F?.context,K=F?.gpuDevice,kd=F?.deviceType,Ii=F?.numThreads,Qp=F?.powerPreference;L?s.currentContext=L:K?s.currentContext=await navigator.ml.createContext(K):s.currentContext=await navigator.ml.createContext({deviceType:kd,numThreads:Ii,powerPreference:Qp})}else s.currentContext=await navigator.ml.createContext();break}i=await s._OrtCreateSession(r,o,a),i===0&&oe$2("Can't create a session."),s.currentContext&&(s.jsepRegisterMLContext(i,s.currentContext),s.currentContext=void 0,s.shouldTransferToMLTensor=!0);let[u,c]=Oc$1(i),h=!!t?.enableGraphCapture,f=[],g=[],b=[];for(let y=0;y<u;y++){let F=s._OrtGetInputName(i,y);F===0&&oe$2("Can't get an input name."),n.push(F),f.push(s.UTF8ToString(F))}for(let y=0;y<c;y++){let F=s._OrtGetOutputName(i,y);F===0&&oe$2("Can't get an output name."),l.push(F);let L=s.UTF8ToString(F);g.push(L);{if(h&&t?.preferredOutputLocation===void 0){b.push("gpu-buffer");continue}let K=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[L]??"cpu";if(K!=="cpu"&&K!=="cpu-pinned"&&K!=="gpu-buffer"&&K!=="ml-tensor")throw new Error(`Not supported preferred output location: ${K}.`);if(h&&K!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${K}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);b.push(K)}}let E=null;return b.some(y=>y==="gpu-buffer"||y==="ml-tensor")&&(d=s._OrtCreateBinding(i),d===0&&oe$2("Can't create IO binding."),E={handle:d,outputPreferredLocations:b,outputPreferredLocationsEncoded:b.map(y=>In$1(y))}),Ze$1.set(i,[i,n,l,E,h,!1]),[i,f,g]}catch(u){throw n.forEach(c=>s._OrtFree(c)),l.forEach(c=>s._OrtFree(c)),d!==0&&s._OrtReleaseBinding(d),i!==0&&s._OrtReleaseSession(i),u}finally{s._free(r),a!==0&&s._OrtReleaseSessionOptions(a),p.forEach(u=>s._free(u)),s.unmountExternalData?.()}},zt$2=e=>{let t=se$2(),r=Ze$1.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[o,s,i,a,d]=r;a&&(d&&t._OrtClearBoundOutputs(a.handle),t._OrtReleaseBinding(a.handle)),t.jsepOnReleaseSession?.(e),s.forEach(p=>t._OrtFree(p)),i.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(o),Ze$1.delete(e)},nu$1=(e,t,r,o,s,i=!1)=>{if(!e){t.push(0);return}let a=se$2(),d=e[0],p=e[1],n=e[3],l,u;if(d==="string"&&(n==="gpu-buffer"||n==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(i&&n!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(n==="gpu-buffer"){let f=e[2].gpuBuffer;u=Fe$2(st(d),p);let g=a.jsepRegisterBuffer;if(!g)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');l=g(o,s,f,u)}else if(n==="ml-tensor"){let f=e[2].mlTensor;u=Fe$2(st(d),p);let g=a.jsepRegisterMLTensor;if(!g)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');l=g(f,st(d),p)}else{let f=e[2];if(Array.isArray(f)){u=4*f.length,l=a._malloc(u),r.push(l);let g=l/4;for(let b=0;b<f.length;b++){if(typeof f[b]!="string")throw new TypeError(`tensor data at index ${b} is not a string`);a.HEAPU32[g++]=ue$2(f[b],r)}}else u=f.byteLength,l=a._malloc(u),r.push(l),a.HEAPU8.set(new Uint8Array(f.buffer,f.byteOffset,u),l)}let c=a.stackSave(),h=a.stackAlloc(4*p.length);try{let f=h/4;p.forEach(b=>a.HEAP32[f++]=b);let g=a._OrtCreateTensor(st(d),l,u,h,p.length,In$1(n));g===0&&oe$2(`Can't create tensor for input/output. session=${o}, index=${s}.`),t.push(g)}finally{a.stackRestore(c)}},Bt$2=async(e,t,r,o,s,i)=>{let a=se$2(),d=Ze$1.get(e);if(!d)throw new Error(`cannot run inference. invalid session id: ${e}`);let p=d[0],n=d[1],l=d[2],u=d[3],c=d[4],h=d[5],f=t.length,g=o.length,b=0,E=[],y=[],F=[],L=[],K=a.stackSave(),kd=a.stackAlloc(f*4),Ii=a.stackAlloc(f*4),Qp=a.stackAlloc(g*4),th=a.stackAlloc(g*4);try{a.jsepOnRunStart?.(p),[b,E]=Xr(i);for(let nh=0;nh<f;nh++)nu$1(r[nh],y,L,e,t[nh],c);for(let nh=0;nh<g;nh++)nu$1(s[nh],F,L,e,f+o[nh],c);let rh=kd/4,uh=Ii/4,ph=Qp/4,lh=th/4;for(let nh=0;nh<f;nh++)a.HEAPU32[rh++]=y[nh],a.HEAPU32[uh++]=n[t[nh]];for(let nh=0;nh<g;nh++)a.HEAPU32[ph++]=F[nh],a.HEAPU32[lh++]=l[o[nh]];if(u&&!h){let{handle:nh,outputPreferredLocations:hh,outputPreferredLocationsEncoded:ch}=u;if(n.length!==f)throw new Error(`input count from feeds (${f}) is expected to be always equal to model's input count (${n.length}).`);for(let ih=0;ih<f;ih++){let ah=t[ih];await a._OrtBindInput(nh,n[ah],y[ih])!==0&&oe$2(`Can't bind input[${ih}] for session=${e}.`)}for(let ih=0;ih<g;ih++){let ah=o[ih];s[ih]?.[3]?a._OrtBindOutput(nh,l[ah],F[ih],0)!==0&&oe$2(`Can't bind pre-allocated output[${ih}] for session=${e}.`):a._OrtBindOutput(nh,l[ah],0,ch[ah])!==0&&oe$2(`Can't bind output[${ih}] to ${hh[ih]} for session=${e}.`)}Ze$1.set(e,[p,n,l,u,c,!0])}let dh;u?dh=await a._OrtRunWithBinding(p,u.handle,g,Qp,b):dh=await a._OrtRun(p,Ii,kd,f,th,g,Qp,b),dh!==0&&oe$2("failed to call OrtRun().");let oh=[];for(let nh=0;nh<g;nh++){let hh=a.HEAPU32[Qp/4+nh];if(hh===F[nh]){oh.push(s[nh]);continue}let ch=a.stackSave(),ih=a.stackAlloc(4*4),ah=!1,Yp,eh=0;try{a._OrtGetTensorData(hh,ih,ih+4,ih+8,ih+12)!==0&&oe$2(`Can't access output tensor data on index ${nh}.`);let sh=ih/4,mh=a.HEAPU32[sh++];eh=a.HEAPU32[sh++];let yh=a.HEAPU32[sh++],wh=a.HEAPU32[sh++],bh=[];for(let fh=0;fh<wh;fh++)bh.push(a.HEAPU32[yh/4+fh]);a._OrtFree(yh);let vh=bh.reduce((fh,gh)=>fh*gh,1);Yp=Ne$2(mh);let $h=u?.outputPreferredLocations[o[nh]];if(Yp==="string"){if($h==="gpu-buffer"||$h==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let fh=[],gh=eh/4;for(let xh=0;xh<vh;xh++){let Ah=a.HEAPU32[gh++],Vh=xh===vh-1?void 0:a.HEAPU32[gh]-Ah;fh.push(a.UTF8ToString(Ah,Vh))}oh.push([Yp,bh,fh,"cpu"])}else if($h==="gpu-buffer"&&vh>0){let fh=a.jsepGetBuffer;if(!fh)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let gh=fh(eh),xh=Fe$2(mh,vh);if(xh===void 0||!Vt$2(Yp))throw new Error(`Unsupported data type: ${Yp}`);ah=!0,oh.push([Yp,bh,{gpuBuffer:gh,download:a.jsepCreateDownloader(gh,xh,Yp),dispose:()=>{a._OrtReleaseTensor(hh)}},"gpu-buffer"])}else if($h==="ml-tensor"&&vh>0){let fh=a.jsepEnsureTensor;if(!fh)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Fe$2(mh,vh)===void 0||!Lt$2(Yp))throw new Error(`Unsupported data type: ${Yp}`);let gh=await fh(eh,mh,bh,!1);ah=!0,oh.push([Yp,bh,{mlTensor:gh,download:a.jsepCreateMLTensorDownloader(eh,Yp),dispose:()=>{a.jsepReleaseTensorId(eh),a._OrtReleaseTensor(hh)}},"ml-tensor"])}else{let fh=Ut$2(Yp),gh=new fh(vh);new Uint8Array(gh.buffer,gh.byteOffset,gh.byteLength).set(a.HEAPU8.subarray(eh,eh+gh.byteLength)),oh.push([Yp,bh,gh,"cpu"])}}finally{a.stackRestore(ch),Yp==="string"&&eh&&a._free(eh),ah||a._OrtReleaseTensor(hh)}}return u&&!c&&(a._OrtClearBoundOutputs(u.handle),Ze$1.set(e,[p,n,l,u,c,!1])),oh}finally{a.stackRestore(K),y.forEach(rh=>a._OrtReleaseTensor(rh)),F.forEach(rh=>a._OrtReleaseTensor(rh)),L.forEach(rh=>a._free(rh)),b!==0&&a._OrtReleaseRunOptions(b),E.forEach(rh=>a._free(rh))}},Dt$2=e=>{let t=se$2(),r=Ze$1.get(e);if(!r)throw new Error("invalid session id");let o=r[0],s=t._OrtEndProfiling(o);s===0&&oe$2("Can't get an profile file name."),t._OrtFree(s)},Ot$1=e=>{let t=[];for(let r of e){let o=r[2];!Array.isArray(o)&&"buffer"in o&&t.push(o.buffer)}return t}}),Qe$1,Te$1,gt$2,cn$1,pn$1,ln$1,ir$2,sr$2,et$2,tt$2,Mc$1,ru$1,ou$1,iu$1,su$1,au$1,uu$1,du$1,ar$2=k$1(()=>{Se$2(),vn$1(),Le$2(),rt$2(),Qe$1=()=>!!ee$2.wasm.proxy&&typeof document<"u",gt$2=!1,cn$1=!1,pn$1=!1,sr$2=new Map,et$2=(e,t)=>{let r=sr$2.get(e);r?r.push(t):sr$2.set(e,[t])},tt$2=()=>{if(gt$2||!cn$1||pn$1||!Te$1)throw new Error("worker not ready")},Mc$1=e=>{switch(e.data.type){case"init-wasm":gt$2=!1,e.data.err?(pn$1=!0,ir$2[1](e.data.err)):(cn$1=!0,ir$2[0]()),ln$1&&(URL.revokeObjectURL(ln$1),ln$1=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=sr$2.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},ru$1=async()=>{if(!cn$1){if(gt$2)throw new Error("multiple calls to 'initWasm()' detected.");if(pn$1)throw new Error("previous call to 'initWasm()' failed.");if(gt$2=!0,Qe$1())return new Promise((e,t)=>{Te$1?.terminate(),Fr$2().then(([r,o])=>{try{Te$1=o,Te$1.onerror=i=>t(i),Te$1.onmessage=Mc$1,ir$2=[e,t];let s={type:"init-wasm",in:ee$2};Te$1.postMessage(s),ln$1=r}catch(s){t(s)}},t)});try{await At$1(ee$2.wasm),await kt$2(ee$2),cn$1=!0}catch(e){throw pn$1=!0,e}finally{gt$2=!1}}},ou$1=async e=>{if(Qe$1())return tt$2(),new Promise((t,r)=>{et$2("init-ep",[t,r]);let o={type:"init-ep",in:{epName:e,env:ee$2}};Te$1.postMessage(o)});await Et$2(ee$2,e)},iu$1=async e=>Qe$1()?(tt$2(),new Promise((t,r)=>{et$2("copy-from",[t,r]);let o={type:"copy-from",in:{buffer:e}};Te$1.postMessage(o,[e.buffer])})):ot$1(e),su$1=async(e,t)=>{if(Qe$1()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return tt$2(),new Promise((r,o)=>{et$2("create",[r,o]);let s={type:"create",in:{model:e,options:{...t}}},i=[];e instanceof Uint8Array&&i.push(e.buffer),Te$1.postMessage(s,i)})}else return Pt$2(e,t)},au$1=async e=>{if(Qe$1())return tt$2(),new Promise((t,r)=>{et$2("release",[t,r]);let o={type:"release",in:e};Te$1.postMessage(o)});zt$2(e)},uu$1=async(e,t,r,o,s,i)=>{if(Qe$1()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(s.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return tt$2(),new Promise((a,d)=>{et$2("run",[a,d]);let p=r,n={type:"run",in:{sessionId:e,inputIndices:t,inputs:p,outputIndices:o,options:i}};Te$1.postMessage(n,Ot$1(p))})}else return Bt$2(e,t,r,o,s,i)},du$1=async e=>{if(Qe$1())return tt$2(),new Promise((t,r)=>{et$2("end-profiling",[t,r]);let o={type:"end-profiling",in:e};Te$1.postMessage(o)});Dt$2(e)}}),lu$1,Uc$1,mn$1,cu$1=k$1(()=>{Se$2(),ar$2(),U$2(),Ct$1(),Tn$1(),lu$1=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Uc$1=e=>{switch(e[3]){case"cpu":return new me$1(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Vt$2(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:o,dispose:s}=e[2];return me$1.fromGpuBuffer(r,{dataType:t,dims:e[1],download:o,dispose:s})}case"ml-tensor":{let t=e[0];if(!Lt$2(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:o,dispose:s}=e[2];return me$1.fromMLTensor(r,{dataType:t,dims:e[1],download:o,dispose:s})}default:throw new Error(`invalid data location: ${e[3]}`)}},mn$1=class{async fetchModelAndCopyToWasmMemory(e){return iu$1(await ut$2(e))}async loadModel(e,t){_e$2();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await su$1(r,t),ye$1()}async dispose(){return au$1(this.sessionId)}async run(e,t,r){_e$2();let o=[],s=[];Object.entries(e).forEach(u=>{let c=u[0],h=u[1],f=this.inputNames.indexOf(c);if(f===-1)throw new Error(`invalid input '${c}'`);o.push(h),s.push(f)});let i=[],a=[];Object.entries(t).forEach(u=>{let c=u[0],h=u[1],f=this.outputNames.indexOf(c);if(f===-1)throw new Error(`invalid output '${c}'`);i.push(h),a.push(f)});let d=o.map((u,c)=>lu$1(u,()=>`input "${this.inputNames[s[c]]}"`)),p=i.map((u,c)=>u?lu$1(u,()=>`output "${this.outputNames[a[c]]}"`):null),n=await uu$1(this.sessionId,s,d,a,p,r),l={};for(let u=0;u<n.length;u++)l[this.outputNames[a[u]]]=i[u]??Uc$1(n[u]);return ye$1(),l}startProfiling(){}endProfiling(){du$1(this.sessionId)}}}),mu$1={};bt$2(mu$1,{OnnxruntimeWebAssemblyBackend:()=>fn$1,initializeFlags:()=>pu$1,wasmBackend:()=>Vc$1});var pu$1,fn$1,Vc$1,fu$1=k$1(()=>{Se$2(),ar$2(),cu$1(),rt$2(),pu$1=()=>{if((typeof ee$2.wasm.initTimeout!="number"||ee$2.wasm.initTimeout<0)&&(ee$2.wasm.initTimeout=0),ee$2.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof ee$2.wasm.proxy!="boolean"&&(ee$2.wasm.proxy=!1),typeof ee$2.wasm.trace!="boolean"&&(ee$2.wasm.trace=!1),typeof ee$2.wasm.numThreads!="number"||!Number.isInteger(ee$2.wasm.numThreads)||ee$2.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ee$2.wasm.numThreads=1;else{let e=typeof navigator>"u"?gn$1("node:os").cpus().length:navigator.hardwareConcurrency;ee$2.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}ee$2.wasm.wasmPaths===void 0&&Ie$2&&Ie$2.indexOf("blob:")!==0&&(ee$2.wasm.wasmPaths=Ie$2.substring(0,Ie$2.lastIndexOf("/")+1))},fn$1=class{async init(e){pu$1(),await ru$1(),await ou$1(e)}async createInferenceSessionHandler(e,t){let r=new mn$1;return await r.loadModel(e,t),Promise.resolve(r)}},Vc$1=new fn$1});Se$2();Se$2();Se$2();var Ur$2="1.20.1",B$=$n$1;{let e=(fu$1(),yn$1(mu$1)).wasmBackend;Ge$2("webgpu",e,5),Ge$2("webnn",e,5),Ge$2("cpu",e,10),Ge$2("wasm",e,10)}Object.defineProperty(ee$2.versions,"web",{value:Ur$2,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var ortWebgpu=Object.freeze({__proto__:null,get InferenceSession(){return $u$1},get TRACE(){return St$2},get TRACE_FUNC_BEGIN(){return _e$2},get TRACE_FUNC_END(){return ye$1},get Tensor(){return me$1},get TrainingSession(){return xu$1},default:B$,get env(){return ee$2},get registerBackend(){return Ge$2}});/*!
 * ONNX Runtime Web v1.20.1
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Pl=Object.create,ke$1=Object.defineProperty,El=Object.getOwnPropertyDescriptor,Dl=Object.getOwnPropertyNames,Ll=Object.getPrototypeOf,$l=Object.prototype.hasOwnProperty,x$1=(e,t)=>()=>(e&&(t=e(e=0)),t),Z$1=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Wn=(e,t)=>{for(var r in t)ke$1(e,r,{get:t[r],enumerable:!0})},Hn=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Dl(t))!$l.call(e,s)&&s!==r&&ke$1(e,s,{get:()=>t[s],enumerable:!(o=El(t,s))||o.enumerable});return e},ne=(e,t,r)=>(r=e!=null?Pl(Ll(e)):{},Hn(!e||!e.__esModule?ke$1(r,"default",{value:e,enumerable:!0}):r,e)),kl=e=>Hn(ke$1({},"__esModule",{value:!0}),e),Be$1,Ut$1,Fe$1,Bl,Ne$1,Ce$1=x$1(()=>{Be$1=new Map,Ut$1=[],Fe$1=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let o=Be$1.get(e);if(o===void 0)Be$1.set(e,{backend:t,priority:r});else{if(o.priority>r)return;if(o.priority===r&&o.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let s=Ut$1.indexOf(e);s!==-1&&Ut$1.splice(s,1);for(let i=0;i<Ut$1.length;i++)if(Be$1.get(Ut$1[i]).priority<=r){Ut$1.splice(i,0,e);return}Ut$1.push(e)}return}throw new TypeError("not a valid backend")},Bl=async e=>{let t=Be$1.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(o){return r||(t.error=`${o}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Ne$1=async e=>{let t=e.executionProviders||[],r=t.map(p=>typeof p=="string"?p:p.name),o=r.length===0?Ut$1:r,s,i=[],a=new Set;for(let p of o){let n=await Bl(p);typeof n=="string"?i.push({name:p,err:n}):(s||(s=n),s===n&&a.add(p))}if(!s)throw new Error(`no available backend found. ERR: ${i.map(p=>`[${p.name}] ${p.err}`).join(", ")}`);for(let{name:p,err:n}of i)r.includes(p)&&console.warn(`removing requested execution provider "${p}" from session options because it is not available: ${n}`);let d=t.filter(p=>a.has(typeof p=="string"?p:p.name));return[s,new Proxy(e,{get:(p,n)=>n==="executionProviders"?d:Reflect.get(p,n)})]}}),qn=x$1(()=>{Ce$1()}),jn,Kn=x$1(()=>{jn="1.20.1"}),Xn,ct$1,Br$1=x$1(()=>{Kn(),Xn="warning",ct$1={wasm:{},webgl:{},webgpu:{},versions:{common:jn},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Xn=e}},get logLevel(){return Xn}},Object.defineProperty(ct$1,"logLevel",{enumerable:!0})}),j$1,Jn=x$1(()=>{Br$1(),j$1=ct$1}),Zn,Yn,Qn=x$1(()=>{Zn=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let o=r.getContext("2d");if(o!=null){let s,i;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],i=e.dims[3]):(s=e.dims[3],i=e.dims[2]);let a=t?.format!==void 0?t.format:"RGB",d=t?.norm,p,n;d===void 0||d.mean===void 0?p=[255,255,255,255]:typeof d.mean=="number"?p=[d.mean,d.mean,d.mean,d.mean]:(p=[d.mean[0],d.mean[1],d.mean[2],0],d.mean[3]!==void 0&&(p[3]=d.mean[3])),d===void 0||d.bias===void 0?n=[0,0,0,0]:typeof d.bias=="number"?n=[d.bias,d.bias,d.bias,d.bias]:(n=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(n[3]=d.bias[3]));let l=i*s,u=0,c=l,h=l*2,f=-1;a==="RGBA"?(u=0,c=l,h=l*2,f=l*3):a==="RGB"?(u=0,c=l,h=l*2):a==="RBG"&&(u=0,h=l,c=l*2);for(let g=0;g<i;g++)for(let b=0;b<s;b++){let E=(e.data[u++]-n[0])*p[0],y=(e.data[c++]-n[1])*p[1],F=(e.data[h++]-n[2])*p[2],L=f===-1?255:(e.data[f++]-n[3])*p[3];o.fillStyle="rgba("+E+","+y+","+F+","+L+")",o.fillRect(b,g,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Yn=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),o;if(r!=null){let s,i,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],i=e.dims[1],a=e.dims[3]):(s=e.dims[3],i=e.dims[2],a=e.dims[1]);let d=t!==void 0&&t.format!==void 0?t.format:"RGB",p=t?.norm,n,l;p===void 0||p.mean===void 0?n=[255,255,255,255]:typeof p.mean=="number"?n=[p.mean,p.mean,p.mean,p.mean]:(n=[p.mean[0],p.mean[1],p.mean[2],255],p.mean[3]!==void 0&&(n[3]=p.mean[3])),p===void 0||p.bias===void 0?l=[0,0,0,0]:typeof p.bias=="number"?l=[p.bias,p.bias,p.bias,p.bias]:(l=[p.bias[0],p.bias[1],p.bias[2],0],p.bias[3]!==void 0&&(l[3]=p.bias[3]));let u=i*s;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let c=4,h=0,f=1,g=2,b=3,E=0,y=u,F=u*2,L=-1;d==="RGBA"?(E=0,y=u,F=u*2,L=u*3):d==="RGB"?(E=0,y=u,F=u*2):d==="RBG"&&(E=0,F=u,y=u*2),o=r.createImageData(s,i);for(let K=0;K<i*s;h+=c,f+=c,g+=c,b+=c,K++)o.data[h]=(e.data[E++]-l[0])*n[0],o.data[f]=(e.data[y++]-l[1])*n[1],o.data[g]=(e.data[F++]-l[2])*n[2],o.data[b]=L===-1?255:(e.data[L++]-l[3])*n[3]}else throw new Error("Can not access image data");return o}}),Fr$1,to,eo,ro,no,oo,io=x$1(()=>{Ge$1(),Fr$1=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:o}=t,s=t.norm??{mean:255,bias:0},i,a;typeof s.mean=="number"?i=[s.mean,s.mean,s.mean,s.mean]:i=[s.mean[0],s.mean[1],s.mean[2],s.mean[3]??255],typeof s.bias=="number"?a=[s.bias,s.bias,s.bias,s.bias]:a=[s.bias[0],s.bias[1],s.bias[2],s.bias[3]??0];let d=t.format!==void 0?t.format:"RGBA",p=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",n=r*o,l=p==="RGBA"?new Float32Array(n*4):new Float32Array(n*3),u=4,c=0,h=1,f=2,g=3,b=0,E=n,y=n*2,F=-1;d==="RGB"&&(u=3,c=0,h=1,f=2,g=-1),p==="RGBA"?F=n*3:p==="RBG"?(b=0,y=n,E=n*2):p==="BGR"&&(y=0,E=n,b=n*2);for(let L=0;L<n;L++,c+=u,f+=u,h+=u,g+=u)l[b++]=(e[c]+a[0])/i[0],l[E++]=(e[h]+a[1])/i[1],l[y++]=(e[f]+a[2])/i[2],F!==-1&&g!==-1&&(l[F++]=(e[g]+a[3])/i[3]);return p==="RGBA"?new et$1("float32",l,[1,4,r,o]):new et$1("float32",l,[1,3,r,o])},to=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,o=typeof ImageData<"u"&&e instanceof ImageData,s=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,i=typeof e=="string",a,d=t??{},p=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},n=l=>typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||l instanceof OffscreenCanvas?l.getContext("2d"):null;if(r){let l=p();l.width=e.width,l.height=e.height;let u=n(l);if(u!=null){let c=e.height,h=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(c=t.resizedHeight,h=t.resizedWidth),t!==void 0){if(d=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");d.tensorFormat="RGBA",d.height=c,d.width=h}else d.tensorFormat="RGBA",d.height=c,d.width=h;u.drawImage(e,0,0),a=u.getImageData(0,0,h,c).data}else throw new Error("Can not access image data")}else if(o){let l,u;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(l=t.resizedHeight,u=t.resizedWidth):(l=e.height,u=e.width),t!==void 0&&(d=t),d.format="RGBA",d.height=l,d.width=u,t!==void 0){let c=p();c.width=u,c.height=l;let h=n(c);if(h!=null)h.putImageData(e,0,0),a=h.getImageData(0,0,u,l).data;else throw new Error("Can not access image data")}else a=e.data}else if(s){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let l=p();l.width=e.width,l.height=e.height;let u=n(l);if(u!=null){let c=e.height,h=e.width;return u.drawImage(e,0,0,h,c),a=u.getImageData(0,0,h,c).data,d.height=c,d.width=h,Fr$1(a,d)}else throw new Error("Can not access image data")}else{if(i)return new Promise((l,u)=>{let c=p(),h=n(c);if(!e||!h)return u();let f=new Image;f.crossOrigin="Anonymous",f.src=e,f.onload=()=>{c.width=f.width,c.height=f.height,h.drawImage(f,0,0,c.width,c.height);let g=h.getImageData(0,0,c.width,c.height);d.height=c.height,d.width=c.width,l(Fr$1(g.data,d))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return Fr$1(a,d);throw new Error("Input data provided is not supported - aborted tensor creation")},eo=(e,t)=>{let{width:r,height:o,download:s,dispose:i}=t,a=[1,o,r,4];return new et$1({location:"texture",type:"float32",texture:e,dims:a,download:s,dispose:i})},ro=(e,t)=>{let{dataType:r,dims:o,download:s,dispose:i}=t;return new et$1({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:o,download:s,dispose:i})},no=(e,t)=>{let{dataType:r,dims:o,download:s,dispose:i}=t;return new et$1({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:o,download:s,dispose:i})},oo=(e,t,r)=>new et$1({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Wt$1,be$1,ao,so,uo=x$1(()=>{Wt$1=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),be$1=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),ao=!1,so=()=>{if(!ao){ao=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=typeof Float16Array<"u"&&Float16Array.from;e&&(Wt$1.set("int64",BigInt64Array),be$1.set(BigInt64Array,"int64")),t&&(Wt$1.set("uint64",BigUint64Array),be$1.set(BigUint64Array,"uint64")),r?(Wt$1.set("float16",Float16Array),be$1.set(Float16Array,"float16")):Wt$1.set("float16",Uint16Array)}}}),lo,fo,co=x$1(()=>{Ge$1(),lo=e=>{let t=1;for(let r=0;r<e.length;r++){let o=e[r];if(typeof o!="number"||!Number.isSafeInteger(o))throw new TypeError(`dims[${r}] must be an integer, got: ${o}`);if(o<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${o}`);t*=o}return t},fo=(e,t)=>{switch(e.location){case"cpu":return new et$1(e.type,e.data,t);case"cpu-pinned":return new et$1({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new et$1({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new et$1({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new et$1({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),et$1,Ge$1=x$1(()=>{Qn(),io(),uo(),co(),et$1=class{constructor(e,t,r){so();let o,s;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,o=e.type,s=e.dims,e.location){case"cpu-pinned":{let a=Wt$1.get(o);if(!a)throw new TypeError(`unsupported type "${o}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(o!=="float32")throw new TypeError(`unsupported type "${o}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint8"&&o!=="bool"&&o!=="uint4"&&o!=="int4")throw new TypeError(`unsupported type "${o}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint64"&&o!=="int8"&&o!=="uint8"&&o!=="bool")throw new TypeError(`unsupported type "${o}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,d;if(typeof e=="string")if(o=e,d=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let p=Wt$1.get(e);if(p===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&p===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${p.name} as data.`);e==="uint64"||e==="int64"?a=p.from(t,BigInt):a=p.from(t)}else if(t instanceof p)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${o} tensor's data must be type of ${p}`)}else if(d=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let p=typeof e[0];if(p==="string")o="string",a=e;else if(p==="boolean")o="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${p}.`)}else if(e instanceof Uint8ClampedArray)o="uint8",a=Uint8Array.from(e);else{let p=be$1.get(e.constructor);if(p===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);o=p,a=e}if(d===void 0)d=[a.length];else if(!Array.isArray(d))throw new TypeError("A tensor's dims must be a number array");s=d,this.cpuData=a,this.dataLocation="cpu"}let i=lo(s);if(this.cpuData&&i!==this.cpuData.length&&!((o==="uint4"||o==="int4")&&Math.ceil(i/2)===this.cpuData.length))throw new Error(`Tensor's size(${i}) does not match data length(${this.cpuData.length}).`);this.type=o,this.dims=s,this.size=i}static async fromImage(e,t){return to(e,t)}static fromTexture(e,t){return eo(e,t)}static fromGpuBuffer(e,t){return ro(e,t)}static fromMLTensor(e,t){return no(e,t)}static fromPinnedBuffer(e,t,r){return oo(e,t,r)}toDataURL(e){return Zn(this,e)}toImageData(e){return Yn(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return fo(this,e)}}}),ot,Re$1=x$1(()=>{Ge$1(),ot=et$1}),po,ho,Ve$1,ze$1,Nr$1=x$1(()=>{Br$1(),po=(e,t)=>{(typeof ct$1.trace>"u"?!ct$1.wasm.trace:!ct$1.trace)||console.timeStamp(`${e}::ORT::${t}`)},ho=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],o=!1;for(let s=0;s<r.length;s++){if(o&&!r[s].includes("TRACE_FUNC")){let i=`FUNC_${e}::${r[s].trim().split(" ")[1]}`;t&&(i+=`::${t}`),po("CPU",i);return}r[s].includes("TRACE_FUNC")&&(o=!0)}},Ve$1=e=>{(typeof ct$1.trace>"u"?!ct$1.wasm.trace:!ct$1.trace)||ho("BEGIN",e)},ze$1=e=>{(typeof ct$1.trace>"u"?!ct$1.wasm.trace:!ct$1.trace)||ho("END",e)}}),Me$1,mo=x$1(()=>{Ce$1(),Re$1(),Nr$1(),Me$1=class Rh{constructor(t){this.handler=t}async run(t,r,o){Ve$1();let s={},i={};if(typeof t!="object"||t===null||t instanceof ot||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof ot)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let n of r){if(typeof n!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(n)===-1)throw new RangeError(`'fetches' contains invalid output name: ${n}.`);s[n]=null}if(typeof o=="object"&&o!==null)i=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else{let n=!1,l=Object.getOwnPropertyNames(r);for(let u of this.outputNames)if(l.indexOf(u)!==-1){let c=r[u];(c===null||c instanceof ot)&&(n=!0,a=!1,s[u]=c)}if(n){if(typeof o=="object"&&o!==null)i=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else i=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let n of this.inputNames)if(typeof t[n]>"u")throw new Error(`input '${n}' is missing in 'feeds'.`);if(a)for(let n of this.outputNames)s[n]=null;let d=await this.handler.run(t,s,i),p={};for(let n in d)if(Object.hasOwnProperty.call(d,n)){let l=d[n];l instanceof ot?p[n]=l:p[n]=new ot(l.type,l.data,l.dims)}return ze$1(),p}async release(){return this.handler.dispose()}static async create(t,r,o,s){Ve$1();let i,a={};if(typeof t=="string"){if(i=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(i=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let l=t,u=0,c=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(u=r,!Number.isSafeInteger(u))throw new RangeError("'byteOffset' must be an integer.");if(u<0||u>=l.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${l.byteLength}).`);if(c=t.byteLength-u,typeof o=="number"){if(c=o,!Number.isSafeInteger(c))throw new RangeError("'byteLength' must be an integer.");if(c<=0||u+c>l.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${l.byteLength-u}].`);if(typeof s=="object"&&s!==null)a=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else if(typeof o<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");i=new Uint8Array(l,u,c)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[d,p]=await Ne$1(a),n=await d.createInferenceSessionHandler(i,p);return ze$1(),new Rh(n)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),Fl,bo=x$1(()=>{mo(),Fl=Me$1}),yo=x$1(()=>{}),go=x$1(()=>{}),xo=x$1(()=>{}),To=x$1(()=>{}),Nl,Ue$1,vo=x$1(()=>{Ce$1(),Re$1(),Nl="Training backend could not be resolved. Make sure you're using the correct configuration & WebAssembly files.",Ue$1=class Fh{constructor(t,r,o){this.handler=t,this.hasOptimizerModel=r,this.hasEvalModel=o}get trainingInputNames(){return this.handler.inputNames}get trainingOutputNames(){return this.handler.outputNames}get evalInputNames(){if(this.hasEvalModel)return this.handler.evalInputNames;throw new Error("This training session has no evalModel loaded.")}get evalOutputNames(){if(this.hasEvalModel)return this.handler.evalOutputNames;throw new Error("This training session has no evalModel loaded.")}static async create(t,r){let o=t.evalModel||"",s=t.optimizerModel||"",i=r||{},[a,d]=await Ne$1(i);if(a.createTrainingSessionHandler){let p=await a.createTrainingSessionHandler(t.checkpointState,t.trainModel,o,s,d);return new Fh(p,!!t.optimizerModel,!!t.evalModel)}else throw new Error(Nl)}typeNarrowingForRunStep(t,r,o,s,i){let a={},d={};if(typeof o!="object"||o===null||o instanceof ot||Array.isArray(o))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let p=!0;if(typeof s=="object"){if(s===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(s instanceof ot)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(s)){if(s.length===0)throw new TypeError("'fetches' cannot be an empty array.");p=!1;for(let n of s){if(typeof n!="string")throw new TypeError("'fetches' must be a string array or an object.");if(r.indexOf(n)===-1)throw new RangeError(`'fetches' contains invalid output name: ${n}.`);a[n]=null}if(typeof i=="object"&&i!==null)d=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let n=!1,l=Object.getOwnPropertyNames(s);for(let u of r)if(l.indexOf(u)!==-1){let c=s[u];(c===null||c instanceof ot)&&(n=!0,p=!1,a[u]=c)}if(n){if(typeof i=="object"&&i!==null)d=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else d=s}}else if(typeof s<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let n of t)if(typeof o[n]>"u")throw new Error(`input '${n}' is missing in 'feeds'.`);if(p)for(let n of r)a[n]=null;return[a,d]}convertHandlerReturnTypeToMapOfTensors(t){let r={};for(let o in t)if(Object.hasOwnProperty.call(t,o)){let s=t[o];s instanceof ot?r[o]=s:r[o]=new ot(s.type,s.data,s.dims)}return r}async lazyResetGrad(){await this.handler.lazyResetGrad()}async runTrainStep(t,r,o){let[s,i]=this.typeNarrowingForRunStep(this.trainingInputNames,this.trainingOutputNames,t,r,o),a=await this.handler.runTrainStep(t,s,i);return this.convertHandlerReturnTypeToMapOfTensors(a)}async runOptimizerStep(t){if(this.hasOptimizerModel)await this.handler.runOptimizerStep(t||{});else throw new Error("This TrainingSession has no OptimizerModel loaded.")}async runEvalStep(t,r,o){if(this.hasEvalModel){let[s,i]=this.typeNarrowingForRunStep(this.evalInputNames,this.evalOutputNames,t,r,o),a=await this.handler.runEvalStep(t,s,i);return this.convertHandlerReturnTypeToMapOfTensors(a)}else throw new Error("This TrainingSession has no EvalModel loaded.")}async getParametersSize(t=!0){return this.handler.getParametersSize(t)}async loadParametersBuffer(t,r=!0){let o=await this.getParametersSize(r);if(t.length!==4*o)throw new Error("Size of the buffer passed into loadParametersBuffer must match the number of parameters in the model. Please use getParametersSize method to check.");return this.handler.loadParametersBuffer(t,r)}async getContiguousParameters(t=!0){return this.handler.getContiguousParameters(t)}async release(){return this.handler.dispose()}}}),Cl,wo=x$1(()=>{vo(),Cl=Ue$1}),Cr$1={};Wn(Cr$1,{InferenceSession:()=>Fl,TRACE:()=>po,TRACE_FUNC_BEGIN:()=>Ve$1,TRACE_FUNC_END:()=>ze$1,Tensor:()=>ot,TrainingSession:()=>Cl,env:()=>j$1,registerBackend:()=>Fe$1});var Ft$1=x$1(()=>{qn(),Jn(),bo(),Re$1(),yo(),go(),Nr$1(),xo(),To(),wo()});function Nt$1(e,t,r,o){if(t===void 0)return Rl(e);if(r===void 0)We$1(e,t);else if(typeof r=="number"&&o===void 0)We$1(e,t);else if(typeof r=="string"&&o===void 0)We$1(e,r,1,t);else if(typeof r=="string"&&typeof o=="number")We$1(e,r,o,t);else throw new TypeError("input is valid")}function Rl(e){return{verbose:Nt$1.verbose.bind(null,e),info:Nt$1.info.bind(null,e),warning:Nt$1.warning.bind(null,e),error:Nt$1.error.bind(null,e),fatal:Nt$1.fatal.bind(null,e)}}function We$1(e,t,r,o){let s=ye[o||""]||ye[""];_o[e]<_o[s.minimalSeverity]||(s.logDateTime&&(t=`${new Date().toISOString()}|${t}`),s.logSourceLocation,Gl[s.provider].log(e,t,o))}var Gr,Rr$1,_o,Gl,So,ye,M,qe$1,je$1,Ke$1,He$1,pt$1=x$1(()=>{Gr=class{log(e,t,r){}},Rr$1=class{log(e,t,r){console.log(`${this.color(e)} ${r?"\x1B[35m"+r+"\x1B[0m ":""}${t}`)}color(e){switch(e){case"verbose":return"\x1B[34;40mv\x1B[0m";case"info":return"\x1B[32mi\x1B[0m";case"warning":return"\x1B[30;43mw\x1B[0m";case"error":return"\x1B[31;40me\x1B[0m";case"fatal":return"\x1B[101mf\x1B[0m";default:throw new Error(`unsupported severity: ${e}`)}}},_o={verbose:1e3,info:2e3,warning:4e3,error:5e3,fatal:6e3},Gl={none:new Gr,console:new Rr$1},So={provider:"console",minimalSeverity:"warning",logDateTime:!0,logSourceLocation:!1},ye={"":So},(e=>{function t(n,l){e("verbose",n,l)}e.verbose=t;function r(n,l){e("info",n,l)}e.info=r;function o(n,l){e("warning",n,l)}e.warning=o;function s(n,l){e("error",n,l)}e.error=s;function i(n,l){e("fatal",n,l)}e.fatal=i;function a(n){ye={},d("",n||{})}e.reset=a;function d(n,l){if(n==="*")a(l);else{let u=ye[n]||So;ye[n]={provider:l.provider||u.provider,minimalSeverity:l.minimalSeverity||u.minimalSeverity,logDateTime:l.logDateTime===void 0?u.logDateTime:l.logDateTime,logSourceLocation:l.logSourceLocation===void 0?u.logSourceLocation:l.logSourceLocation}}}e.set=d;function p(n){let l={};n.logLevel&&(l.minimalSeverity=n.logLevel),d("",l)}e.setWithEnv=p})(Nt$1||={}),M=Nt$1,qe$1=class{constructor(e,t,r,o,s,i){this.category=e,this.name=t,this.startTime=r,this.endCallback=o,this.timer=s,this.ctx=i}async end(){return this.endCallback(this)}async checkTimer(){if(this.ctx===void 0||this.timer===void 0)throw new Error("No webgl timer found");return this.ctx.endTimer(),this.ctx.waitForQueryAndGetTime(this.timer)}},je$1=class{constructor(e,t,r,o){this.category=e,this.name=t,this.startTime=r,this.endTime=o}},Ke$1=class{constructor(e,t,r){this._started=!1,this._flushPointer=0,this._started=!1,this._maxNumberEvents=e===void 0?1e4:e,this._flushBatchSize=t===void 0?10:t,this._flushIntervalInMilliseconds=r===void 0?5e3:r}static create(e){return e===void 0?new this:new this(e.maxNumberEvents,e.flushBatchSize,e.flushIntervalInMilliseconds)}start(){this._started=!0,this._timingEvents=[],this._flushTime=He$1(),this._flushPointer=0}stop(){for(this._started=!1;this._flushPointer<this._timingEvents.length;this._flushPointer++)this.logOneEvent(this._timingEvents[this._flushPointer])}event(e,t,r,o){let s=this._started?this.begin(e,t,o):void 0,i=!1,a=r();if(a&&typeof a.then=="function")return i=!0,new Promise((d,p)=>{a.then(async n=>{s&&await s.end(),d(n)},async n=>{s&&await s.end(),p(n)})});if(!i&&s){let d=s.end();if(d&&typeof d.then=="function")return new Promise((p,n)=>{d.then(()=>{p(a)},l=>{n(l)})})}return a}begin(e,t,r){if(!this._started)throw new Error("profiler is not started yet");if(r===void 0){let o=He$1();return this.flush(o),new qe$1(e,t,o,s=>this.endSync(s))}else{let o=r.beginTimer();return new qe$1(e,t,0,async s=>this.end(s),o,r)}}async end(e){let t=await e.checkTimer();this._timingEvents.length<this._maxNumberEvents&&(this._timingEvents.push(new je$1(e.category,e.name,e.startTime,t)),this.flush(t))}endSync(e){let t=He$1();this._timingEvents.length<this._maxNumberEvents&&(this._timingEvents.push(new je$1(e.category,e.name,e.startTime,t)),this.flush(t))}logOneEvent(e){M.verbose(`Profiler.${e.category}`,`${(e.endTime-e.startTime).toFixed(2)}ms on event '${e.name}' at ${e.endTime.toFixed(2)}`)}flush(e){if(this._timingEvents.length-this._flushPointer>=this._flushBatchSize||e-this._flushTime>=this._flushIntervalInMilliseconds){for(let t=this._flushPointer;this._flushPointer<t+this._flushBatchSize&&this._flushPointer<this._timingEvents.length;this._flushPointer++)this.logOneEvent(this._timingEvents[this._flushPointer]);this._flushTime=He$1()}}get started(){return this._started}},He$1=typeof performance<"u"&&performance.now?()=>performance.now():Date.now});function Ao(e,t,r){for(let o of r){let s=o[0],i=o[1],a=o[2],d=o[3],p=o[4];if(e.opType===s){for(let n of t)if((n.domain===i||n.domain==="ai.onnx"&&i==="")&&Vl(n.version,a))return{opImpl:d,opInit:p}}}throw new TypeError(`cannot resolve operator '${e.opType}' with opsets: ${t.map(o=>`${o.domain||"ai.onnx"} v${o.version}`).join(", ")}`)}function Vl(e,t){if(t.endsWith("+")){let r=Number.parseInt(t.substring(0,t.length-1),10);return!isNaN(r)&&r<=e}else if(t.split("-").length===2){let r=t.split("-"),o=Number.parseInt(r[0],10),s=Number.parseInt(r[1],10);return!isNaN(o)&&!isNaN(s)&&o<=e&&e<=s}else return Number.parseInt(t,10)===e}var Oo=x$1(()=>{}),Po=Z$1(e=>{e.__esModule=!0;var t=function(){function r(o){if(!o)throw new TypeError("Invalid argument; `value` has no value.");this.value=r.EMPTY,o&&r.isGuid(o)&&(this.value=o)}return r.isGuid=function(o){var s=o.toString();return o&&(o instanceof r||r.validator.test(s))},r.create=function(){return new r([r.gen(2),r.gen(1),r.gen(1),r.gen(1),r.gen(3)].join("-"))},r.createEmpty=function(){return new r("emptyguid")},r.parse=function(o){return new r(o)},r.raw=function(){return[r.gen(2),r.gen(1),r.gen(1),r.gen(1),r.gen(3)].join("-")},r.gen=function(o){for(var s="",i=0;i<o;i++)s+=((1+Math.random())*65536|0).toString(16).substring(1);return s},r.prototype.equals=function(o){return r.isGuid(o)&&this.value===o.toString()},r.prototype.isEmpty=function(){return this.value===r.EMPTY},r.prototype.toString=function(){return this.value},r.prototype.toJSON=function(){return{value:this.value}},r.validator=new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$","i"),r.EMPTY="00000000-0000-0000-0000-000000000000",r}();e.Guid=t});function U$1(e,t,r){this.low=e|0,this.high=t|0,this.unsigned=!!r}function nt$1(e){return(e&&e.__isLong__)===!0}function Eo(e){var t=Math.clz32(e&-e);return e?31-t:t}function Ht$1(e,t){var r,o,s;return t?(e>>>=0,(s=0<=e&&e<256)&&(o=Lo[e],o)?o:(r=V$1(e,0,!0),s&&(Lo[e]=r),r)):(e|=0,(s=-128<=e&&e<128)&&(o=Do$1[e],o)?o:(r=V$1(e,e<0?-1:0,!1),s&&(Do$1[e]=r),r))}function ht$1(e,t){if(isNaN(e))return t?$t$1:Tt$1;if(t){if(e<0)return $t$1;if(e>=Fo)return Go}else{if(e<=-ko)return ut$1;if(e+1>=ko)return Co}return e<0?ht$1(-e,t).neg():V$1(e%ie$1|0,e/ie$1|0,t)}function V$1(e,t,r){return new U$1(e,t,r)}function Mr$1(e,t,r){if(e.length===0)throw Error("empty string");if(typeof t=="number"?(r=t,t=!1):t=!!t,e==="NaN"||e==="Infinity"||e==="+Infinity"||e==="-Infinity")return t?$t$1:Tt$1;if(r=r||10,r<2||36<r)throw RangeError("radix");var o;if((o=e.indexOf("-"))>0)throw Error("interior hyphen");if(o===0)return Mr$1(e.substring(1),t,r).neg();for(var s=ht$1(Xe$1(r,8)),i=Tt$1,a=0;a<e.length;a+=8){var d=Math.min(8,e.length-a),p=parseInt(e.substring(a,a+d),r);if(d<8){var n=ht$1(Xe$1(r,d));i=i.mul(n).add(ht$1(p))}else i=i.mul(s),i=i.add(ht$1(p))}return i.unsigned=t,i}function vt$1(e,t){return typeof e=="number"?ht$1(e,t):typeof e=="string"?Mr$1(e,t):V$1(e.low,e.high,typeof t=="boolean"?t:e.unsigned)}var dt$1,Do$1,Lo,Xe$1,$o,Ml,ie$1,Fo,ko,Bo,Tt$1,$t$1,oe$1,No,zr$1,Co,Go,ut$1,T$1,kt$1,Ur$1=x$1(()=>{dt$1=null;try{dt$1=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}U$1.prototype.__isLong__,Object.defineProperty(U$1.prototype,"__isLong__",{value:!0}),U$1.isLong=nt$1,Do$1={},Lo={},U$1.fromInt=Ht$1,U$1.fromNumber=ht$1,U$1.fromBits=V$1,Xe$1=Math.pow,U$1.fromString=Mr$1,U$1.fromValue=vt$1,$o=65536,Ml=1<<24,ie$1=$o*$o,Fo=ie$1*ie$1,ko=Fo/2,Bo=Ht$1(Ml),Tt$1=Ht$1(0),U$1.ZERO=Tt$1,$t$1=Ht$1(0,!0),U$1.UZERO=$t$1,oe$1=Ht$1(1),U$1.ONE=oe$1,No=Ht$1(1,!0),U$1.UONE=No,zr$1=Ht$1(-1),U$1.NEG_ONE=zr$1,Co=V$1(-1,2147483647,!1),U$1.MAX_VALUE=Co,Go=V$1(-1,-1,!0),U$1.MAX_UNSIGNED_VALUE=Go,ut$1=V$1(0,-2147483648,!1),U$1.MIN_VALUE=ut$1,T$1=U$1.prototype,T$1.toInt=function(){return this.unsigned?this.low>>>0:this.low},T$1.toNumber=function(){return this.unsigned?(this.high>>>0)*ie$1+(this.low>>>0):this.high*ie$1+(this.low>>>0)},T$1.toString=function(e){if(e=e||10,e<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(ut$1)){var t=ht$1(e),r=this.div(t),o=r.mul(t).sub(this);return r.toString(e)+o.toInt().toString(e)}else return"-"+this.neg().toString(e);for(var s=ht$1(Xe$1(e,6),this.unsigned),i=this,a="";;){var d=i.div(s),p=i.sub(d.mul(s)).toInt()>>>0,n=p.toString(e);if(i=d,i.isZero())return n+a;for(;n.length<6;)n="0"+n;a=""+n+a}},T$1.getHighBits=function(){return this.high},T$1.getHighBitsUnsigned=function(){return this.high>>>0},T$1.getLowBits=function(){return this.low},T$1.getLowBitsUnsigned=function(){return this.low>>>0},T$1.getNumBitsAbs=function(){if(this.isNegative())return this.eq(ut$1)?64:this.neg().getNumBitsAbs();for(var e=this.high!=0?this.high:this.low,t=31;t>0&&!(e&1<<t);t--);return this.high!=0?t+33:t+1},T$1.isZero=function(){return this.high===0&&this.low===0},T$1.eqz=T$1.isZero,T$1.isNegative=function(){return!this.unsigned&&this.high<0},T$1.isPositive=function(){return this.unsigned||this.high>=0},T$1.isOdd=function(){return(this.low&1)===1},T$1.isEven=function(){return(this.low&1)===0},T$1.equals=function(e){return nt$1(e)||(e=vt$1(e)),this.unsigned!==e.unsigned&&this.high>>>31===1&&e.high>>>31===1?!1:this.high===e.high&&this.low===e.low},T$1.eq=T$1.equals,T$1.notEquals=function(e){return!this.eq(e)},T$1.neq=T$1.notEquals,T$1.ne=T$1.notEquals,T$1.lessThan=function(e){return this.comp(e)<0},T$1.lt=T$1.lessThan,T$1.lessThanOrEqual=function(e){return this.comp(e)<=0},T$1.lte=T$1.lessThanOrEqual,T$1.le=T$1.lessThanOrEqual,T$1.greaterThan=function(e){return this.comp(e)>0},T$1.gt=T$1.greaterThan,T$1.greaterThanOrEqual=function(e){return this.comp(e)>=0},T$1.gte=T$1.greaterThanOrEqual,T$1.ge=T$1.greaterThanOrEqual,T$1.compare=function(e){if(nt$1(e)||(e=vt$1(e)),this.eq(e))return 0;var t=this.isNegative(),r=e.isNegative();return t&&!r?-1:!t&&r?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},T$1.comp=T$1.compare,T$1.negate=function(){return!this.unsigned&&this.eq(ut$1)?ut$1:this.not().add(oe$1)},T$1.neg=T$1.negate,T$1.add=function(e){nt$1(e)||(e=vt$1(e));var t=this.high>>>16,r=this.high&65535,o=this.low>>>16,s=this.low&65535,i=e.high>>>16,a=e.high&65535,d=e.low>>>16,p=e.low&65535,n=0,l=0,u=0,c=0;return c+=s+p,u+=c>>>16,c&=65535,u+=o+d,l+=u>>>16,u&=65535,l+=r+a,n+=l>>>16,l&=65535,n+=t+i,n&=65535,V$1(u<<16|c,n<<16|l,this.unsigned)},T$1.subtract=function(e){return nt$1(e)||(e=vt$1(e)),this.add(e.neg())},T$1.sub=T$1.subtract,T$1.multiply=function(e){if(this.isZero())return this;if(nt$1(e)||(e=vt$1(e)),dt$1){var t=dt$1.mul(this.low,this.high,e.low,e.high);return V$1(t,dt$1.get_high(),this.unsigned)}if(e.isZero())return this.unsigned?$t$1:Tt$1;if(this.eq(ut$1))return e.isOdd()?ut$1:Tt$1;if(e.eq(ut$1))return this.isOdd()?ut$1:Tt$1;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(Bo)&&e.lt(Bo))return ht$1(this.toNumber()*e.toNumber(),this.unsigned);var r=this.high>>>16,o=this.high&65535,s=this.low>>>16,i=this.low&65535,a=e.high>>>16,d=e.high&65535,p=e.low>>>16,n=e.low&65535,l=0,u=0,c=0,h=0;return h+=i*n,c+=h>>>16,h&=65535,c+=s*n,u+=c>>>16,c&=65535,c+=i*p,u+=c>>>16,c&=65535,u+=o*n,l+=u>>>16,u&=65535,u+=s*p,l+=u>>>16,u&=65535,u+=i*d,l+=u>>>16,u&=65535,l+=r*n+o*p+s*d+i*a,l&=65535,V$1(c<<16|h,l<<16|u,this.unsigned)},T$1.mul=T$1.multiply,T$1.divide=function(e){if(nt$1(e)||(e=vt$1(e)),e.isZero())throw Error("division by zero");if(dt$1){if(!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1)return this;var t=(this.unsigned?dt$1.div_u:dt$1.div_s)(this.low,this.high,e.low,e.high);return V$1(t,dt$1.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?$t$1:Tt$1;var r,o,s;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return $t$1;if(e.gt(this.shru(1)))return No;s=$t$1}else{if(this.eq(ut$1)){if(e.eq(oe$1)||e.eq(zr$1))return ut$1;if(e.eq(ut$1))return oe$1;var i=this.shr(1);return r=i.div(e).shl(1),r.eq(Tt$1)?e.isNegative()?oe$1:zr$1:(o=this.sub(e.mul(r)),s=r.add(o.div(e)),s)}else if(e.eq(ut$1))return this.unsigned?$t$1:Tt$1;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();s=Tt$1}for(o=this;o.gte(e);){r=Math.max(1,Math.floor(o.toNumber()/e.toNumber()));for(var a=Math.ceil(Math.log(r)/Math.LN2),d=a<=48?1:Xe$1(2,a-48),p=ht$1(r),n=p.mul(e);n.isNegative()||n.gt(o);)r-=d,p=ht$1(r,this.unsigned),n=p.mul(e);p.isZero()&&(p=oe$1),s=s.add(p),o=o.sub(n)}return s},T$1.div=T$1.divide,T$1.modulo=function(e){if(nt$1(e)||(e=vt$1(e)),dt$1){var t=(this.unsigned?dt$1.rem_u:dt$1.rem_s)(this.low,this.high,e.low,e.high);return V$1(t,dt$1.get_high(),this.unsigned)}return this.sub(this.div(e).mul(e))},T$1.mod=T$1.modulo,T$1.rem=T$1.modulo,T$1.not=function(){return V$1(~this.low,~this.high,this.unsigned)},T$1.countLeadingZeros=function(){return this.high?Math.clz32(this.high):Math.clz32(this.low)+32},T$1.clz=T$1.countLeadingZeros,T$1.countTrailingZeros=function(){return this.low?Eo(this.low):Eo(this.high)+32},T$1.ctz=T$1.countTrailingZeros,T$1.and=function(e){return nt$1(e)||(e=vt$1(e)),V$1(this.low&e.low,this.high&e.high,this.unsigned)},T$1.or=function(e){return nt$1(e)||(e=vt$1(e)),V$1(this.low|e.low,this.high|e.high,this.unsigned)},T$1.xor=function(e){return nt$1(e)||(e=vt$1(e)),V$1(this.low^e.low,this.high^e.high,this.unsigned)},T$1.shiftLeft=function(e){return nt$1(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?V$1(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):V$1(0,this.low<<e-32,this.unsigned)},T$1.shl=T$1.shiftLeft,T$1.shiftRight=function(e){return nt$1(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?V$1(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):V$1(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},T$1.shr=T$1.shiftRight,T$1.shiftRightUnsigned=function(e){return nt$1(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?V$1(this.low>>>e|this.high<<32-e,this.high>>>e,this.unsigned):e===32?V$1(this.high,0,this.unsigned):V$1(this.high>>>e-32,0,this.unsigned)},T$1.shru=T$1.shiftRightUnsigned,T$1.shr_u=T$1.shiftRightUnsigned,T$1.rotateLeft=function(e){var t;return nt$1(e)&&(e=e.toInt()),(e&=63)===0?this:e===32?V$1(this.high,this.low,this.unsigned):e<32?(t=32-e,V$1(this.low<<e|this.high>>>t,this.high<<e|this.low>>>t,this.unsigned)):(e-=32,t=32-e,V$1(this.high<<e|this.low>>>t,this.low<<e|this.high>>>t,this.unsigned))},T$1.rotl=T$1.rotateLeft,T$1.rotateRight=function(e){var t;return nt$1(e)&&(e=e.toInt()),(e&=63)===0?this:e===32?V$1(this.high,this.low,this.unsigned):e<32?(t=32-e,V$1(this.high<<t|this.low>>>e,this.low<<t|this.high>>>e,this.unsigned)):(e-=32,t=32-e,V$1(this.low<<t|this.high>>>e,this.high<<t|this.low>>>e,this.unsigned))},T$1.rotr=T$1.rotateRight,T$1.toSigned=function(){return this.unsigned?V$1(this.low,this.high,!1):this},T$1.toUnsigned=function(){return this.unsigned?this:V$1(this.low,this.high,!0)},T$1.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},T$1.toBytesLE=function(){var e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]},T$1.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,t>>>24,t>>>16&255,t>>>8&255,t&255]},U$1.fromBytes=function(e,t,r){return r?U$1.fromBytesLE(e,t):U$1.fromBytesBE(e,t)},U$1.fromBytesLE=function(e,t){return new U$1(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)},U$1.fromBytesBE=function(e,t){return new U$1(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)},kt$1=U$1}),m,Je$1=x$1(()=>{m={},m.Offset,m.Table,m.SIZEOF_SHORT=2,m.SIZEOF_INT=4,m.FILE_IDENTIFIER_LENGTH=4,m.SIZE_PREFIX_LENGTH=4,m.Encoding={UTF8_BYTES:1,UTF16_STRING:2},m.int32=new Int32Array(2),m.float32=new Float32Array(m.int32.buffer),m.float64=new Float64Array(m.int32.buffer),m.isLittleEndian=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1,m.Long=function(e,t){this.low=e|0,this.high=t|0},m.Long.create=function(e,t){return e==0&&t==0?m.Long.ZERO:new m.Long(e,t)},m.Long.prototype.toFloat64=function(){return(this.low>>>0)+this.high*4294967296},m.Long.prototype.equals=function(e){return this.low==e.low&&this.high==e.high},m.Long.ZERO=new m.Long(0,0),m.Builder=function(e){if(e)var t=e;else var t=1024;this.bb=m.ByteBuffer.allocate(t),this.space=t,this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1},m.Builder.prototype.clear=function(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1},m.Builder.prototype.forceDefaults=function(e){this.force_defaults=e},m.Builder.prototype.dataBuffer=function(){return this.bb},m.Builder.prototype.asUint8Array=function(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())},m.Builder.prototype.prep=function(e,t){e>this.minalign&&(this.minalign=e);for(var r=~(this.bb.capacity()-this.space+t)+1&e-1;this.space<r+e+t;){var o=this.bb.capacity();this.bb=m.Builder.growByteBuffer(this.bb),this.space+=this.bb.capacity()-o}this.pad(r)},m.Builder.prototype.pad=function(e){for(var t=0;t<e;t++)this.bb.writeInt8(--this.space,0)},m.Builder.prototype.writeInt8=function(e){this.bb.writeInt8(this.space-=1,e)},m.Builder.prototype.writeInt16=function(e){this.bb.writeInt16(this.space-=2,e)},m.Builder.prototype.writeInt32=function(e){this.bb.writeInt32(this.space-=4,e)},m.Builder.prototype.writeInt64=function(e){this.bb.writeInt64(this.space-=8,e)},m.Builder.prototype.writeFloat32=function(e){this.bb.writeFloat32(this.space-=4,e)},m.Builder.prototype.writeFloat64=function(e){this.bb.writeFloat64(this.space-=8,e)},m.Builder.prototype.addInt8=function(e){this.prep(1,0),this.writeInt8(e)},m.Builder.prototype.addInt16=function(e){this.prep(2,0),this.writeInt16(e)},m.Builder.prototype.addInt32=function(e){this.prep(4,0),this.writeInt32(e)},m.Builder.prototype.addInt64=function(e){this.prep(8,0),this.writeInt64(e)},m.Builder.prototype.addFloat32=function(e){this.prep(4,0),this.writeFloat32(e)},m.Builder.prototype.addFloat64=function(e){this.prep(8,0),this.writeFloat64(e)},m.Builder.prototype.addFieldInt8=function(e,t,r){(this.force_defaults||t!=r)&&(this.addInt8(t),this.slot(e))},m.Builder.prototype.addFieldInt16=function(e,t,r){(this.force_defaults||t!=r)&&(this.addInt16(t),this.slot(e))},m.Builder.prototype.addFieldInt32=function(e,t,r){(this.force_defaults||t!=r)&&(this.addInt32(t),this.slot(e))},m.Builder.prototype.addFieldInt64=function(e,t,r){(this.force_defaults||!t.equals(r))&&(this.addInt64(t),this.slot(e))},m.Builder.prototype.addFieldFloat32=function(e,t,r){(this.force_defaults||t!=r)&&(this.addFloat32(t),this.slot(e))},m.Builder.prototype.addFieldFloat64=function(e,t,r){(this.force_defaults||t!=r)&&(this.addFloat64(t),this.slot(e))},m.Builder.prototype.addFieldOffset=function(e,t,r){(this.force_defaults||t!=r)&&(this.addOffset(t),this.slot(e))},m.Builder.prototype.addFieldStruct=function(e,t,r){t!=r&&(this.nested(t),this.slot(e))},m.Builder.prototype.nested=function(e){if(e!=this.offset())throw new Error("FlatBuffers: struct must be serialized inline.")},m.Builder.prototype.notNested=function(){if(this.isNested)throw new Error("FlatBuffers: object serialization must not be nested.")},m.Builder.prototype.slot=function(e){this.vtable[e]=this.offset()},m.Builder.prototype.offset=function(){return this.bb.capacity()-this.space},m.Builder.growByteBuffer=function(e){var t=e.capacity();if(t&3221225472)throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");var r=t<<1,o=m.ByteBuffer.allocate(r);return o.setPosition(r-t),o.bytes().set(e.bytes(),r-t),o},m.Builder.prototype.addOffset=function(e){this.prep(m.SIZEOF_INT,0),this.writeInt32(this.offset()-e+m.SIZEOF_INT)},m.Builder.prototype.startObject=function(e){this.notNested(),this.vtable==null&&(this.vtable=[]),this.vtable_in_use=e;for(var t=0;t<e;t++)this.vtable[t]=0;this.isNested=!0,this.object_start=this.offset()},m.Builder.prototype.endObject=function(){if(this.vtable==null||!this.isNested)throw new Error("FlatBuffers: endObject called without startObject");this.addInt32(0);for(var e=this.offset(),t=this.vtable_in_use-1;t>=0&&this.vtable[t]==0;t--);for(var r=t+1;t>=0;t--)this.addInt16(this.vtable[t]!=0?e-this.vtable[t]:0);var o=2;this.addInt16(e-this.object_start);var s=(r+o)*m.SIZEOF_SHORT;this.addInt16(s);var i=0,a=this.space;e:for(t=0;t<this.vtables.length;t++){var d=this.bb.capacity()-this.vtables[t];if(s==this.bb.readInt16(d)){for(var p=m.SIZEOF_SHORT;p<s;p+=m.SIZEOF_SHORT)if(this.bb.readInt16(a+p)!=this.bb.readInt16(d+p))continue e;i=this.vtables[t];break}}return i?(this.space=this.bb.capacity()-e,this.bb.writeInt32(this.space,i-e)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-e,this.offset()-e)),this.isNested=!1,e},m.Builder.prototype.finish=function(e,t,r){var o=r?m.SIZE_PREFIX_LENGTH:0;if(t){var s=t;if(this.prep(this.minalign,m.SIZEOF_INT+m.FILE_IDENTIFIER_LENGTH+o),s.length!=m.FILE_IDENTIFIER_LENGTH)throw new Error("FlatBuffers: file identifier must be length "+m.FILE_IDENTIFIER_LENGTH);for(var i=m.FILE_IDENTIFIER_LENGTH-1;i>=0;i--)this.writeInt8(s.charCodeAt(i))}this.prep(this.minalign,m.SIZEOF_INT+o),this.addOffset(e),o&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)},m.Builder.prototype.finishSizePrefixed=function(e,t){this.finish(e,t,!0)},m.Builder.prototype.requiredField=function(e,t){var r=this.bb.capacity()-e,o=r-this.bb.readInt32(r),s=this.bb.readInt16(o+t)!=0;if(!s)throw new Error("FlatBuffers: field "+t+" must be set")},m.Builder.prototype.startVector=function(e,t,r){this.notNested(),this.vector_num_elems=t,this.prep(m.SIZEOF_INT,e*t),this.prep(r,e*t)},m.Builder.prototype.endVector=function(){return this.writeInt32(this.vector_num_elems),this.offset()},m.Builder.prototype.createString=function(e){if(e instanceof Uint8Array)var t=e;else for(var t=[],r=0;r<e.length;){var o,s=e.charCodeAt(r++);if(s<55296||s>=56320)o=s;else{var i=e.charCodeAt(r++);o=(s<<10)+i+-56613888}o<128?t.push(o):(o<2048?t.push(o>>6&31|192):(o<65536?t.push(o>>12&15|224):t.push(o>>18&7|240,o>>12&63|128),t.push(o>>6&63|128)),t.push(o&63|128))}this.addInt8(0),this.startVector(1,t.length,1),this.bb.setPosition(this.space-=t.length);for(var r=0,a=this.space,d=this.bb.bytes();r<t.length;r++)d[a++]=t[r];return this.endVector()},m.Builder.prototype.createLong=function(e,t){return m.Long.create(e,t)},m.ByteBuffer=function(e){this.bytes_=e,this.position_=0},m.ByteBuffer.allocate=function(e){return new m.ByteBuffer(new Uint8Array(e))},m.ByteBuffer.prototype.clear=function(){this.position_=0},m.ByteBuffer.prototype.bytes=function(){return this.bytes_},m.ByteBuffer.prototype.position=function(){return this.position_},m.ByteBuffer.prototype.setPosition=function(e){this.position_=e},m.ByteBuffer.prototype.capacity=function(){return this.bytes_.length},m.ByteBuffer.prototype.readInt8=function(e){return this.readUint8(e)<<24>>24},m.ByteBuffer.prototype.readUint8=function(e){return this.bytes_[e]},m.ByteBuffer.prototype.readInt16=function(e){return this.readUint16(e)<<16>>16},m.ByteBuffer.prototype.readUint16=function(e){return this.bytes_[e]|this.bytes_[e+1]<<8},m.ByteBuffer.prototype.readInt32=function(e){return this.bytes_[e]|this.bytes_[e+1]<<8|this.bytes_[e+2]<<16|this.bytes_[e+3]<<24},m.ByteBuffer.prototype.readUint32=function(e){return this.readInt32(e)>>>0},m.ByteBuffer.prototype.readInt64=function(e){return new m.Long(this.readInt32(e),this.readInt32(e+4))},m.ByteBuffer.prototype.readUint64=function(e){return new m.Long(this.readUint32(e),this.readUint32(e+4))},m.ByteBuffer.prototype.readFloat32=function(e){return m.int32[0]=this.readInt32(e),m.float32[0]},m.ByteBuffer.prototype.readFloat64=function(e){return m.int32[m.isLittleEndian?0:1]=this.readInt32(e),m.int32[m.isLittleEndian?1:0]=this.readInt32(e+4),m.float64[0]},m.ByteBuffer.prototype.writeInt8=function(e,t){this.bytes_[e]=t},m.ByteBuffer.prototype.writeUint8=function(e,t){this.bytes_[e]=t},m.ByteBuffer.prototype.writeInt16=function(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8},m.ByteBuffer.prototype.writeUint16=function(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8},m.ByteBuffer.prototype.writeInt32=function(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8,this.bytes_[e+2]=t>>16,this.bytes_[e+3]=t>>24},m.ByteBuffer.prototype.writeUint32=function(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8,this.bytes_[e+2]=t>>16,this.bytes_[e+3]=t>>24},m.ByteBuffer.prototype.writeInt64=function(e,t){this.writeInt32(e,t.low),this.writeInt32(e+4,t.high)},m.ByteBuffer.prototype.writeUint64=function(e,t){this.writeUint32(e,t.low),this.writeUint32(e+4,t.high)},m.ByteBuffer.prototype.writeFloat32=function(e,t){m.float32[0]=t,this.writeInt32(e,m.int32[0])},m.ByteBuffer.prototype.writeFloat64=function(e,t){m.float64[0]=t,this.writeInt32(e,m.int32[m.isLittleEndian?0:1]),this.writeInt32(e+4,m.int32[m.isLittleEndian?1:0])},m.ByteBuffer.prototype.getBufferIdentifier=function(){if(this.bytes_.length<this.position_+m.SIZEOF_INT+m.FILE_IDENTIFIER_LENGTH)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");for(var e="",t=0;t<m.FILE_IDENTIFIER_LENGTH;t++)e+=String.fromCharCode(this.readInt8(this.position_+m.SIZEOF_INT+t));return e},m.ByteBuffer.prototype.__offset=function(e,t){var r=e-this.readInt32(e);return t<this.readInt16(r)?this.readInt16(r+t):0},m.ByteBuffer.prototype.__union=function(e,t){return e.bb_pos=t+this.readInt32(t),e.bb=this,e},m.ByteBuffer.prototype.__string=function(e,t){e+=this.readInt32(e);var r=this.readInt32(e),o="",s=0;if(e+=m.SIZEOF_INT,t===m.Encoding.UTF8_BYTES)return this.bytes_.subarray(e,e+r);for(;s<r;){var i,a=this.readUint8(e+s++);if(a<192)i=a;else{var d=this.readUint8(e+s++);if(a<224)i=(a&31)<<6|d&63;else{var p=this.readUint8(e+s++);if(a<240)i=(a&15)<<12|(d&63)<<6|p&63;else{var n=this.readUint8(e+s++);i=(a&7)<<18|(d&63)<<12|(p&63)<<6|n&63}}}i<65536?o+=String.fromCharCode(i):(i-=65536,o+=String.fromCharCode((i>>10)+55296,(i&1023)+56320))}return o},m.ByteBuffer.prototype.__indirect=function(e){return e+this.readInt32(e)},m.ByteBuffer.prototype.__vector=function(e){return e+this.readInt32(e)+m.SIZEOF_INT},m.ByteBuffer.prototype.__vector_len=function(e){return this.readInt32(e+this.readInt32(e))},m.ByteBuffer.prototype.__has_identifier=function(e){if(e.length!=m.FILE_IDENTIFIER_LENGTH)throw new Error("FlatBuffers: file identifier must be length "+m.FILE_IDENTIFIER_LENGTH);for(var t=0;t<m.FILE_IDENTIFIER_LENGTH;t++)if(e.charCodeAt(t)!=this.readInt8(this.position_+m.SIZEOF_INT+t))return!1;return!0},m.ByteBuffer.prototype.createLong=function(e,t){return m.Long.create(e,t)}}),P$1,ge$1=x$1(()=>{Je$1(),(e=>{(t=>{(r=>{(o=>(o[o.UNDEFINED=0]="UNDEFINED",o[o.FLOAT=1]="FLOAT",o[o.INT=2]="INT",o[o.STRING=3]="STRING",o[o.TENSOR=4]="TENSOR",o[o.GRAPH=5]="GRAPH",o[o.FLOATS=6]="FLOATS",o[o.INTS=7]="INTS",o[o.STRINGS=8]="STRINGS",o[o.TENSORS=9]="TENSORS",o[o.GRAPHS=10]="GRAPHS",o[o.SPARSE_TENSOR=11]="SPARSE_TENSOR",o[o.SPARSE_TENSORS=12]="SPARSE_TENSORS"))(r.AttributeType||={})})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{(o=>(o[o.UNKNOWN=0]="UNKNOWN",o[o.VALUE=1]="VALUE",o[o.PARAM=2]="PARAM"))(r.DimensionValueType||={})})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{(o=>(o[o.UNDEFINED=0]="UNDEFINED",o[o.FLOAT=1]="FLOAT",o[o.UINT8=2]="UINT8",o[o.INT8=3]="INT8",o[o.UINT16=4]="UINT16",o[o.INT16=5]="INT16",o[o.INT32=6]="INT32",o[o.INT64=7]="INT64",o[o.STRING=8]="STRING",o[o.BOOL=9]="BOOL",o[o.FLOAT16=10]="FLOAT16",o[o.DOUBLE=11]="DOUBLE",o[o.UINT32=12]="UINT32",o[o.UINT64=13]="UINT64",o[o.COMPLEX64=14]="COMPLEX64",o[o.COMPLEX128=15]="COMPLEX128",o[o.BFLOAT16=16]="BFLOAT16",o[o.FLOAT8E4M3FN=17]="FLOAT8E4M3FN",o[o.FLOAT8E4M3FNUZ=18]="FLOAT8E4M3FNUZ",o[o.FLOAT8E5M2=19]="FLOAT8E5M2",o[o.FLOAT8E5M2FNUZ=20]="FLOAT8E5M2FNUZ"))(r.TensorDataType||={})})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{(o=>(o[o.Primitive=0]="Primitive",o[o.Fused=1]="Fused"))(r.NodeType||={})})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{(o=>(o[o.NONE=0]="NONE",o[o.tensor_type=1]="tensor_type",o[o.sequence_type=2]="sequence_type",o[o.map_type=3]="map_type"))(r.TypeInfoValue||={})})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsShape(i,a){return(a||new o).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsShape(i,a){return i.setPosition(i.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(i.readInt32(i.position())+i.position(),i)}dim(i,a){let d=this.bb.__offset(this.bb_pos,4);return d?(a||new e.experimental.fbs.Dimension).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+d)+i*4),this.bb):null}dimLength(){let i=this.bb.__offset(this.bb_pos,4);return i?this.bb.__vector_len(this.bb_pos+i):0}static startShape(i){i.startObject(1)}static addDim(i,a){i.addFieldOffset(0,a,0)}static createDimVector(i,a){i.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)i.addOffset(a[d]);return i.endVector()}static startDimVector(i,a){i.startVector(4,a,4)}static endShape(i){return i.endObject()}static createShape(i,a){return o.startShape(i),o.addDim(i,a),o.endShape(i)}}r.Shape=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsDimension(i,a){return(a||new o).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsDimension(i,a){return i.setPosition(i.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(i.readInt32(i.position())+i.position(),i)}value(i){let a=this.bb.__offset(this.bb_pos,4);return a?(i||new e.experimental.fbs.DimensionValue).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}denotation(i){let a=this.bb.__offset(this.bb_pos,6);return a?this.bb.__string(this.bb_pos+a,i):null}static startDimension(i){i.startObject(2)}static addValue(i,a){i.addFieldOffset(0,a,0)}static addDenotation(i,a){i.addFieldOffset(1,a,0)}static endDimension(i){return i.endObject()}static createDimension(i,a,d){return o.startDimension(i),o.addValue(i,a),o.addDenotation(i,d),o.endDimension(i)}}r.Dimension=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsDimensionValue(i,a){return(a||new o).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsDimensionValue(i,a){return i.setPosition(i.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(i.readInt32(i.position())+i.position(),i)}dimType(){let i=this.bb.__offset(this.bb_pos,4);return i?this.bb.readInt8(this.bb_pos+i):0}dimValue(){let i=this.bb.__offset(this.bb_pos,6);return i?this.bb.readInt64(this.bb_pos+i):this.bb.createLong(0,0)}dimParam(i){let a=this.bb.__offset(this.bb_pos,8);return a?this.bb.__string(this.bb_pos+a,i):null}static startDimensionValue(i){i.startObject(3)}static addDimType(i,a){i.addFieldInt8(0,a,0)}static addDimValue(i,a){i.addFieldInt64(1,a,i.createLong(0,0))}static addDimParam(i,a){i.addFieldOffset(2,a,0)}static endDimensionValue(i){return i.endObject()}static createDimensionValue(i,a,d,p){return o.startDimensionValue(i),o.addDimType(i,a),o.addDimValue(i,d),o.addDimParam(i,p),o.endDimensionValue(i)}}r.DimensionValue=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsTensorTypeAndShape(i,a){return(a||new o).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsTensorTypeAndShape(i,a){return i.setPosition(i.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(i.readInt32(i.position())+i.position(),i)}elemType(){let i=this.bb.__offset(this.bb_pos,4);return i?this.bb.readInt32(this.bb_pos+i):0}shape(i){let a=this.bb.__offset(this.bb_pos,6);return a?(i||new e.experimental.fbs.Shape).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}static startTensorTypeAndShape(i){i.startObject(2)}static addElemType(i,a){i.addFieldInt32(0,a,0)}static addShape(i,a){i.addFieldOffset(1,a,0)}static endTensorTypeAndShape(i){return i.endObject()}static createTensorTypeAndShape(i,a,d){return o.startTensorTypeAndShape(i),o.addElemType(i,a),o.addShape(i,d),o.endTensorTypeAndShape(i)}}r.TensorTypeAndShape=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsMapType(i,a){return(a||new o).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsMapType(i,a){return i.setPosition(i.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(i.readInt32(i.position())+i.position(),i)}keyType(){let i=this.bb.__offset(this.bb_pos,4);return i?this.bb.readInt32(this.bb_pos+i):0}valueType(i){let a=this.bb.__offset(this.bb_pos,6);return a?(i||new e.experimental.fbs.TypeInfo).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}static startMapType(i){i.startObject(2)}static addKeyType(i,a){i.addFieldInt32(0,a,0)}static addValueType(i,a){i.addFieldOffset(1,a,0)}static endMapType(i){return i.endObject()}static createMapType(i,a,d){return o.startMapType(i),o.addKeyType(i,a),o.addValueType(i,d),o.endMapType(i)}}r.MapType=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsSequenceType(i,a){return(a||new o).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsSequenceType(i,a){return i.setPosition(i.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(i.readInt32(i.position())+i.position(),i)}elemType(i){let a=this.bb.__offset(this.bb_pos,4);return a?(i||new e.experimental.fbs.TypeInfo).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}static startSequenceType(i){i.startObject(1)}static addElemType(i,a){i.addFieldOffset(0,a,0)}static endSequenceType(i){return i.endObject()}static createSequenceType(i,a){return o.startSequenceType(i),o.addElemType(i,a),o.endSequenceType(i)}}r.SequenceType=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}nodeIndex(){return this.bb.readUint32(this.bb_pos)}srcArgIndex(){return this.bb.readInt32(this.bb_pos+4)}dstArgIndex(){return this.bb.readInt32(this.bb_pos+8)}static createEdgeEnd(i,a,d,p){return i.prep(4,12),i.writeInt32(p),i.writeInt32(d),i.writeInt32(a),i.offset()}}r.EdgeEnd=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsNodeEdge(i,a){return(a||new o).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsNodeEdge(i,a){return i.setPosition(i.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(i.readInt32(i.position())+i.position(),i)}nodeIndex(){let i=this.bb.__offset(this.bb_pos,4);return i?this.bb.readUint32(this.bb_pos+i):0}inputEdges(i,a){let d=this.bb.__offset(this.bb_pos,6);return d?(a||new e.experimental.fbs.EdgeEnd).__init(this.bb.__vector(this.bb_pos+d)+i*12,this.bb):null}inputEdgesLength(){let i=this.bb.__offset(this.bb_pos,6);return i?this.bb.__vector_len(this.bb_pos+i):0}outputEdges(i,a){let d=this.bb.__offset(this.bb_pos,8);return d?(a||new e.experimental.fbs.EdgeEnd).__init(this.bb.__vector(this.bb_pos+d)+i*12,this.bb):null}outputEdgesLength(){let i=this.bb.__offset(this.bb_pos,8);return i?this.bb.__vector_len(this.bb_pos+i):0}static startNodeEdge(i){i.startObject(3)}static addNodeIndex(i,a){i.addFieldInt32(0,a,0)}static addInputEdges(i,a){i.addFieldOffset(1,a,0)}static startInputEdgesVector(i,a){i.startVector(12,a,4)}static addOutputEdges(i,a){i.addFieldOffset(2,a,0)}static startOutputEdgesVector(i,a){i.startVector(12,a,4)}static endNodeEdge(i){return i.endObject()}static createNodeEdge(i,a,d,p){return o.startNodeEdge(i),o.addNodeIndex(i,a),o.addInputEdges(i,d),o.addOutputEdges(i,p),o.endNodeEdge(i)}}r.NodeEdge=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsNode(i,a){return(a||new o).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsNode(i,a){return i.setPosition(i.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(i.readInt32(i.position())+i.position(),i)}name(i){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,i):null}docString(i){let a=this.bb.__offset(this.bb_pos,6);return a?this.bb.__string(this.bb_pos+a,i):null}domain(i){let a=this.bb.__offset(this.bb_pos,8);return a?this.bb.__string(this.bb_pos+a,i):null}sinceVersion(){let i=this.bb.__offset(this.bb_pos,10);return i?this.bb.readInt32(this.bb_pos+i):0}index(){let i=this.bb.__offset(this.bb_pos,12);return i?this.bb.readUint32(this.bb_pos+i):0}opType(i){let a=this.bb.__offset(this.bb_pos,14);return a?this.bb.__string(this.bb_pos+a,i):null}type(){let i=this.bb.__offset(this.bb_pos,16);return i?this.bb.readInt32(this.bb_pos+i):0}executionProviderType(i){let a=this.bb.__offset(this.bb_pos,18);return a?this.bb.__string(this.bb_pos+a,i):null}inputs(i,a){let d=this.bb.__offset(this.bb_pos,20);return d?this.bb.__string(this.bb.__vector(this.bb_pos+d)+i*4,a):null}inputsLength(){let i=this.bb.__offset(this.bb_pos,20);return i?this.bb.__vector_len(this.bb_pos+i):0}outputs(i,a){let d=this.bb.__offset(this.bb_pos,22);return d?this.bb.__string(this.bb.__vector(this.bb_pos+d)+i*4,a):null}outputsLength(){let i=this.bb.__offset(this.bb_pos,22);return i?this.bb.__vector_len(this.bb_pos+i):0}attributes(i,a){let d=this.bb.__offset(this.bb_pos,24);return d?(a||new e.experimental.fbs.Attribute).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+d)+i*4),this.bb):null}attributesLength(){let i=this.bb.__offset(this.bb_pos,24);return i?this.bb.__vector_len(this.bb_pos+i):0}inputArgCounts(i){let a=this.bb.__offset(this.bb_pos,26);return a?this.bb.readInt32(this.bb.__vector(this.bb_pos+a)+i*4):0}inputArgCountsLength(){let i=this.bb.__offset(this.bb_pos,26);return i?this.bb.__vector_len(this.bb_pos+i):0}inputArgCountsArray(){let i=this.bb.__offset(this.bb_pos,26);return i?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+i),this.bb.__vector_len(this.bb_pos+i)):null}implicitInputs(i,a){let d=this.bb.__offset(this.bb_pos,28);return d?this.bb.__string(this.bb.__vector(this.bb_pos+d)+i*4,a):null}implicitInputsLength(){let i=this.bb.__offset(this.bb_pos,28);return i?this.bb.__vector_len(this.bb_pos+i):0}static startNode(i){i.startObject(13)}static addName(i,a){i.addFieldOffset(0,a,0)}static addDocString(i,a){i.addFieldOffset(1,a,0)}static addDomain(i,a){i.addFieldOffset(2,a,0)}static addSinceVersion(i,a){i.addFieldInt32(3,a,0)}static addIndex(i,a){i.addFieldInt32(4,a,0)}static addOpType(i,a){i.addFieldOffset(5,a,0)}static addType(i,a){i.addFieldInt32(6,a,0)}static addExecutionProviderType(i,a){i.addFieldOffset(7,a,0)}static addInputs(i,a){i.addFieldOffset(8,a,0)}static createInputsVector(i,a){i.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)i.addOffset(a[d]);return i.endVector()}static startInputsVector(i,a){i.startVector(4,a,4)}static addOutputs(i,a){i.addFieldOffset(9,a,0)}static createOutputsVector(i,a){i.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)i.addOffset(a[d]);return i.endVector()}static startOutputsVector(i,a){i.startVector(4,a,4)}static addAttributes(i,a){i.addFieldOffset(10,a,0)}static createAttributesVector(i,a){i.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)i.addOffset(a[d]);return i.endVector()}static startAttributesVector(i,a){i.startVector(4,a,4)}static addInputArgCounts(i,a){i.addFieldOffset(11,a,0)}static createInputArgCountsVector(i,a){i.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)i.addInt32(a[d]);return i.endVector()}static startInputArgCountsVector(i,a){i.startVector(4,a,4)}static addImplicitInputs(i,a){i.addFieldOffset(12,a,0)}static createImplicitInputsVector(i,a){i.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)i.addOffset(a[d]);return i.endVector()}static startImplicitInputsVector(i,a){i.startVector(4,a,4)}static endNode(i){return i.endObject()}static createNode(i,a,d,p,n,l,u,c,h,f,g,b,E,y){return o.startNode(i),o.addName(i,a),o.addDocString(i,d),o.addDomain(i,p),o.addSinceVersion(i,n),o.addIndex(i,l),o.addOpType(i,u),o.addType(i,c),o.addExecutionProviderType(i,h),o.addInputs(i,f),o.addOutputs(i,g),o.addAttributes(i,b),o.addInputArgCounts(i,E),o.addImplicitInputs(i,y),o.endNode(i)}}r.Node=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsValueInfo(i,a){return(a||new o).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsValueInfo(i,a){return i.setPosition(i.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(i.readInt32(i.position())+i.position(),i)}name(i){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,i):null}docString(i){let a=this.bb.__offset(this.bb_pos,6);return a?this.bb.__string(this.bb_pos+a,i):null}type(i){let a=this.bb.__offset(this.bb_pos,8);return a?(i||new e.experimental.fbs.TypeInfo).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}static startValueInfo(i){i.startObject(3)}static addName(i,a){i.addFieldOffset(0,a,0)}static addDocString(i,a){i.addFieldOffset(1,a,0)}static addType(i,a){i.addFieldOffset(2,a,0)}static endValueInfo(i){return i.endObject()}static createValueInfo(i,a,d,p){return o.startValueInfo(i),o.addName(i,a),o.addDocString(i,d),o.addType(i,p),o.endValueInfo(i)}}r.ValueInfo=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsTypeInfo(i,a){return(a||new o).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsTypeInfo(i,a){return i.setPosition(i.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(i.readInt32(i.position())+i.position(),i)}denotation(i){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,i):null}valueType(){let i=this.bb.__offset(this.bb_pos,6);return i?this.bb.readUint8(this.bb_pos+i):0}value(i){let a=this.bb.__offset(this.bb_pos,8);return a?this.bb.__union(i,this.bb_pos+a):null}static startTypeInfo(i){i.startObject(3)}static addDenotation(i,a){i.addFieldOffset(0,a,0)}static addValueType(i,a){i.addFieldInt8(1,a,0)}static addValue(i,a){i.addFieldOffset(2,a,0)}static endTypeInfo(i){return i.endObject()}static createTypeInfo(i,a,d,p){return o.startTypeInfo(i),o.addDenotation(i,a),o.addValueType(i,d),o.addValue(i,p),o.endTypeInfo(i)}}r.TypeInfo=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsOperatorSetId(i,a){return(a||new o).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsOperatorSetId(i,a){return i.setPosition(i.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(i.readInt32(i.position())+i.position(),i)}domain(i){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,i):null}version(){let i=this.bb.__offset(this.bb_pos,6);return i?this.bb.readInt64(this.bb_pos+i):this.bb.createLong(0,0)}static startOperatorSetId(i){i.startObject(2)}static addDomain(i,a){i.addFieldOffset(0,a,0)}static addVersion(i,a){i.addFieldInt64(1,a,i.createLong(0,0))}static endOperatorSetId(i){return i.endObject()}static createOperatorSetId(i,a,d){return o.startOperatorSetId(i),o.addDomain(i,a),o.addVersion(i,d),o.endOperatorSetId(i)}}r.OperatorSetId=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsTensor(i,a){return(a||new o).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsTensor(i,a){return i.setPosition(i.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(i.readInt32(i.position())+i.position(),i)}name(i){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,i):null}docString(i){let a=this.bb.__offset(this.bb_pos,6);return a?this.bb.__string(this.bb_pos+a,i):null}dims(i){let a=this.bb.__offset(this.bb_pos,8);return a?this.bb.readInt64(this.bb.__vector(this.bb_pos+a)+i*8):this.bb.createLong(0,0)}dimsLength(){let i=this.bb.__offset(this.bb_pos,8);return i?this.bb.__vector_len(this.bb_pos+i):0}dataType(){let i=this.bb.__offset(this.bb_pos,10);return i?this.bb.readInt32(this.bb_pos+i):0}rawData(i){let a=this.bb.__offset(this.bb_pos,12);return a?this.bb.readUint8(this.bb.__vector(this.bb_pos+a)+i):0}rawDataLength(){let i=this.bb.__offset(this.bb_pos,12);return i?this.bb.__vector_len(this.bb_pos+i):0}rawDataArray(){let i=this.bb.__offset(this.bb_pos,12);return i?new Uint8Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+i),this.bb.__vector_len(this.bb_pos+i)):null}stringData(i,a){let d=this.bb.__offset(this.bb_pos,14);return d?this.bb.__string(this.bb.__vector(this.bb_pos+d)+i*4,a):null}stringDataLength(){let i=this.bb.__offset(this.bb_pos,14);return i?this.bb.__vector_len(this.bb_pos+i):0}static startTensor(i){i.startObject(6)}static addName(i,a){i.addFieldOffset(0,a,0)}static addDocString(i,a){i.addFieldOffset(1,a,0)}static addDims(i,a){i.addFieldOffset(2,a,0)}static createDimsVector(i,a){i.startVector(8,a.length,8);for(let d=a.length-1;d>=0;d--)i.addInt64(a[d]);return i.endVector()}static startDimsVector(i,a){i.startVector(8,a,8)}static addDataType(i,a){i.addFieldInt32(3,a,0)}static addRawData(i,a){i.addFieldOffset(4,a,0)}static createRawDataVector(i,a){i.startVector(1,a.length,1);for(let d=a.length-1;d>=0;d--)i.addInt8(a[d]);return i.endVector()}static startRawDataVector(i,a){i.startVector(1,a,1)}static addStringData(i,a){i.addFieldOffset(5,a,0)}static createStringDataVector(i,a){i.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)i.addOffset(a[d]);return i.endVector()}static startStringDataVector(i,a){i.startVector(4,a,4)}static endTensor(i){return i.endObject()}static createTensor(i,a,d,p,n,l,u){return o.startTensor(i),o.addName(i,a),o.addDocString(i,d),o.addDims(i,p),o.addDataType(i,n),o.addRawData(i,l),o.addStringData(i,u),o.endTensor(i)}}r.Tensor=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsSparseTensor(i,a){return(a||new o).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsSparseTensor(i,a){return i.setPosition(i.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(i.readInt32(i.position())+i.position(),i)}values(i){let a=this.bb.__offset(this.bb_pos,4);return a?(i||new e.experimental.fbs.Tensor).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}indices(i){let a=this.bb.__offset(this.bb_pos,6);return a?(i||new e.experimental.fbs.Tensor).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}dims(i){let a=this.bb.__offset(this.bb_pos,8);return a?this.bb.readInt64(this.bb.__vector(this.bb_pos+a)+i*8):this.bb.createLong(0,0)}dimsLength(){let i=this.bb.__offset(this.bb_pos,8);return i?this.bb.__vector_len(this.bb_pos+i):0}static startSparseTensor(i){i.startObject(3)}static addValues(i,a){i.addFieldOffset(0,a,0)}static addIndices(i,a){i.addFieldOffset(1,a,0)}static addDims(i,a){i.addFieldOffset(2,a,0)}static createDimsVector(i,a){i.startVector(8,a.length,8);for(let d=a.length-1;d>=0;d--)i.addInt64(a[d]);return i.endVector()}static startDimsVector(i,a){i.startVector(8,a,8)}static endSparseTensor(i){return i.endObject()}static createSparseTensor(i,a,d,p){return o.startSparseTensor(i),o.addValues(i,a),o.addIndices(i,d),o.addDims(i,p),o.endSparseTensor(i)}}r.SparseTensor=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsAttribute(i,a){return(a||new o).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsAttribute(i,a){return i.setPosition(i.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(i.readInt32(i.position())+i.position(),i)}name(i){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,i):null}docString(i){let a=this.bb.__offset(this.bb_pos,6);return a?this.bb.__string(this.bb_pos+a,i):null}type(){let i=this.bb.__offset(this.bb_pos,8);return i?this.bb.readInt32(this.bb_pos+i):0}f(){let i=this.bb.__offset(this.bb_pos,10);return i?this.bb.readFloat32(this.bb_pos+i):0}i(){let i=this.bb.__offset(this.bb_pos,12);return i?this.bb.readInt64(this.bb_pos+i):this.bb.createLong(0,0)}s(i){let a=this.bb.__offset(this.bb_pos,14);return a?this.bb.__string(this.bb_pos+a,i):null}t(i){let a=this.bb.__offset(this.bb_pos,16);return a?(i||new e.experimental.fbs.Tensor).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}g(i){let a=this.bb.__offset(this.bb_pos,18);return a?(i||new e.experimental.fbs.Graph).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}floats(i){let a=this.bb.__offset(this.bb_pos,20);return a?this.bb.readFloat32(this.bb.__vector(this.bb_pos+a)+i*4):0}floatsLength(){let i=this.bb.__offset(this.bb_pos,20);return i?this.bb.__vector_len(this.bb_pos+i):0}floatsArray(){let i=this.bb.__offset(this.bb_pos,20);return i?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+i),this.bb.__vector_len(this.bb_pos+i)):null}ints(i){let a=this.bb.__offset(this.bb_pos,22);return a?this.bb.readInt64(this.bb.__vector(this.bb_pos+a)+i*8):this.bb.createLong(0,0)}intsLength(){let i=this.bb.__offset(this.bb_pos,22);return i?this.bb.__vector_len(this.bb_pos+i):0}strings(i,a){let d=this.bb.__offset(this.bb_pos,24);return d?this.bb.__string(this.bb.__vector(this.bb_pos+d)+i*4,a):null}stringsLength(){let i=this.bb.__offset(this.bb_pos,24);return i?this.bb.__vector_len(this.bb_pos+i):0}tensors(i,a){let d=this.bb.__offset(this.bb_pos,26);return d?(a||new e.experimental.fbs.Tensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+d)+i*4),this.bb):null}tensorsLength(){let i=this.bb.__offset(this.bb_pos,26);return i?this.bb.__vector_len(this.bb_pos+i):0}graphs(i,a){let d=this.bb.__offset(this.bb_pos,28);return d?(a||new e.experimental.fbs.Graph).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+d)+i*4),this.bb):null}graphsLength(){let i=this.bb.__offset(this.bb_pos,28);return i?this.bb.__vector_len(this.bb_pos+i):0}static startAttribute(i){i.startObject(13)}static addName(i,a){i.addFieldOffset(0,a,0)}static addDocString(i,a){i.addFieldOffset(1,a,0)}static addType(i,a){i.addFieldInt32(2,a,0)}static addF(i,a){i.addFieldFloat32(3,a,0)}static addI(i,a){i.addFieldInt64(4,a,i.createLong(0,0))}static addS(i,a){i.addFieldOffset(5,a,0)}static addT(i,a){i.addFieldOffset(6,a,0)}static addG(i,a){i.addFieldOffset(7,a,0)}static addFloats(i,a){i.addFieldOffset(8,a,0)}static createFloatsVector(i,a){i.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)i.addFloat32(a[d]);return i.endVector()}static startFloatsVector(i,a){i.startVector(4,a,4)}static addInts(i,a){i.addFieldOffset(9,a,0)}static createIntsVector(i,a){i.startVector(8,a.length,8);for(let d=a.length-1;d>=0;d--)i.addInt64(a[d]);return i.endVector()}static startIntsVector(i,a){i.startVector(8,a,8)}static addStrings(i,a){i.addFieldOffset(10,a,0)}static createStringsVector(i,a){i.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)i.addOffset(a[d]);return i.endVector()}static startStringsVector(i,a){i.startVector(4,a,4)}static addTensors(i,a){i.addFieldOffset(11,a,0)}static createTensorsVector(i,a){i.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)i.addOffset(a[d]);return i.endVector()}static startTensorsVector(i,a){i.startVector(4,a,4)}static addGraphs(i,a){i.addFieldOffset(12,a,0)}static createGraphsVector(i,a){i.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)i.addOffset(a[d]);return i.endVector()}static startGraphsVector(i,a){i.startVector(4,a,4)}static endAttribute(i){return i.endObject()}static createAttribute(i,a,d,p,n,l,u,c,h,f,g,b,E,y){return o.startAttribute(i),o.addName(i,a),o.addDocString(i,d),o.addType(i,p),o.addF(i,n),o.addI(i,l),o.addS(i,u),o.addT(i,c),o.addG(i,h),o.addFloats(i,f),o.addInts(i,g),o.addStrings(i,b),o.addTensors(i,E),o.addGraphs(i,y),o.endAttribute(i)}}r.Attribute=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsGraph(i,a){return(a||new o).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsGraph(i,a){return i.setPosition(i.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(i.readInt32(i.position())+i.position(),i)}initializers(i,a){let d=this.bb.__offset(this.bb_pos,4);return d?(a||new e.experimental.fbs.Tensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+d)+i*4),this.bb):null}initializersLength(){let i=this.bb.__offset(this.bb_pos,4);return i?this.bb.__vector_len(this.bb_pos+i):0}nodeArgs(i,a){let d=this.bb.__offset(this.bb_pos,6);return d?(a||new e.experimental.fbs.ValueInfo).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+d)+i*4),this.bb):null}nodeArgsLength(){let i=this.bb.__offset(this.bb_pos,6);return i?this.bb.__vector_len(this.bb_pos+i):0}nodes(i,a){let d=this.bb.__offset(this.bb_pos,8);return d?(a||new e.experimental.fbs.Node).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+d)+i*4),this.bb):null}nodesLength(){let i=this.bb.__offset(this.bb_pos,8);return i?this.bb.__vector_len(this.bb_pos+i):0}maxNodeIndex(){let i=this.bb.__offset(this.bb_pos,10);return i?this.bb.readUint32(this.bb_pos+i):0}nodeEdges(i,a){let d=this.bb.__offset(this.bb_pos,12);return d?(a||new e.experimental.fbs.NodeEdge).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+d)+i*4),this.bb):null}nodeEdgesLength(){let i=this.bb.__offset(this.bb_pos,12);return i?this.bb.__vector_len(this.bb_pos+i):0}inputs(i,a){let d=this.bb.__offset(this.bb_pos,14);return d?this.bb.__string(this.bb.__vector(this.bb_pos+d)+i*4,a):null}inputsLength(){let i=this.bb.__offset(this.bb_pos,14);return i?this.bb.__vector_len(this.bb_pos+i):0}outputs(i,a){let d=this.bb.__offset(this.bb_pos,16);return d?this.bb.__string(this.bb.__vector(this.bb_pos+d)+i*4,a):null}outputsLength(){let i=this.bb.__offset(this.bb_pos,16);return i?this.bb.__vector_len(this.bb_pos+i):0}sparseInitializers(i,a){let d=this.bb.__offset(this.bb_pos,18);return d?(a||new e.experimental.fbs.SparseTensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+d)+i*4),this.bb):null}sparseInitializersLength(){let i=this.bb.__offset(this.bb_pos,18);return i?this.bb.__vector_len(this.bb_pos+i):0}static startGraph(i){i.startObject(8)}static addInitializers(i,a){i.addFieldOffset(0,a,0)}static createInitializersVector(i,a){i.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)i.addOffset(a[d]);return i.endVector()}static startInitializersVector(i,a){i.startVector(4,a,4)}static addNodeArgs(i,a){i.addFieldOffset(1,a,0)}static createNodeArgsVector(i,a){i.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)i.addOffset(a[d]);return i.endVector()}static startNodeArgsVector(i,a){i.startVector(4,a,4)}static addNodes(i,a){i.addFieldOffset(2,a,0)}static createNodesVector(i,a){i.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)i.addOffset(a[d]);return i.endVector()}static startNodesVector(i,a){i.startVector(4,a,4)}static addMaxNodeIndex(i,a){i.addFieldInt32(3,a,0)}static addNodeEdges(i,a){i.addFieldOffset(4,a,0)}static createNodeEdgesVector(i,a){i.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)i.addOffset(a[d]);return i.endVector()}static startNodeEdgesVector(i,a){i.startVector(4,a,4)}static addInputs(i,a){i.addFieldOffset(5,a,0)}static createInputsVector(i,a){i.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)i.addOffset(a[d]);return i.endVector()}static startInputsVector(i,a){i.startVector(4,a,4)}static addOutputs(i,a){i.addFieldOffset(6,a,0)}static createOutputsVector(i,a){i.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)i.addOffset(a[d]);return i.endVector()}static startOutputsVector(i,a){i.startVector(4,a,4)}static addSparseInitializers(i,a){i.addFieldOffset(7,a,0)}static createSparseInitializersVector(i,a){i.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)i.addOffset(a[d]);return i.endVector()}static startSparseInitializersVector(i,a){i.startVector(4,a,4)}static endGraph(i){return i.endObject()}static createGraph(i,a,d,p,n,l,u,c,h){return o.startGraph(i),o.addInitializers(i,a),o.addNodeArgs(i,d),o.addNodes(i,p),o.addMaxNodeIndex(i,n),o.addNodeEdges(i,l),o.addInputs(i,u),o.addOutputs(i,c),o.addSparseInitializers(i,h),o.endGraph(i)}}r.Graph=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsModel(i,a){return(a||new o).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsModel(i,a){return i.setPosition(i.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(i.readInt32(i.position())+i.position(),i)}irVersion(){let i=this.bb.__offset(this.bb_pos,4);return i?this.bb.readInt64(this.bb_pos+i):this.bb.createLong(0,0)}opsetImport(i,a){let d=this.bb.__offset(this.bb_pos,6);return d?(a||new e.experimental.fbs.OperatorSetId).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+d)+i*4),this.bb):null}opsetImportLength(){let i=this.bb.__offset(this.bb_pos,6);return i?this.bb.__vector_len(this.bb_pos+i):0}producerName(i){let a=this.bb.__offset(this.bb_pos,8);return a?this.bb.__string(this.bb_pos+a,i):null}producerVersion(i){let a=this.bb.__offset(this.bb_pos,10);return a?this.bb.__string(this.bb_pos+a,i):null}domain(i){let a=this.bb.__offset(this.bb_pos,12);return a?this.bb.__string(this.bb_pos+a,i):null}modelVersion(){let i=this.bb.__offset(this.bb_pos,14);return i?this.bb.readInt64(this.bb_pos+i):this.bb.createLong(0,0)}docString(i){let a=this.bb.__offset(this.bb_pos,16);return a?this.bb.__string(this.bb_pos+a,i):null}graph(i){let a=this.bb.__offset(this.bb_pos,18);return a?(i||new e.experimental.fbs.Graph).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}graphDocString(i){let a=this.bb.__offset(this.bb_pos,20);return a?this.bb.__string(this.bb_pos+a,i):null}static startModel(i){i.startObject(9)}static addIrVersion(i,a){i.addFieldInt64(0,a,i.createLong(0,0))}static addOpsetImport(i,a){i.addFieldOffset(1,a,0)}static createOpsetImportVector(i,a){i.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)i.addOffset(a[d]);return i.endVector()}static startOpsetImportVector(i,a){i.startVector(4,a,4)}static addProducerName(i,a){i.addFieldOffset(2,a,0)}static addProducerVersion(i,a){i.addFieldOffset(3,a,0)}static addDomain(i,a){i.addFieldOffset(4,a,0)}static addModelVersion(i,a){i.addFieldInt64(5,a,i.createLong(0,0))}static addDocString(i,a){i.addFieldOffset(6,a,0)}static addGraph(i,a){i.addFieldOffset(7,a,0)}static addGraphDocString(i,a){i.addFieldOffset(8,a,0)}static endModel(i){return i.endObject()}static createModel(i,a,d,p,n,l,u,c,h,f){return o.startModel(i),o.addIrVersion(i,a),o.addOpsetImport(i,d),o.addProducerName(i,p),o.addProducerVersion(i,n),o.addDomain(i,l),o.addModelVersion(i,u),o.addDocString(i,c),o.addGraph(i,h),o.addGraphDocString(i,f),o.endModel(i)}}r.Model=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsKernelCreateInfos(i,a){return(a||new o).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsKernelCreateInfos(i,a){return i.setPosition(i.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(i.readInt32(i.position())+i.position(),i)}nodeIndices(i){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.readUint32(this.bb.__vector(this.bb_pos+a)+i*4):0}nodeIndicesLength(){let i=this.bb.__offset(this.bb_pos,4);return i?this.bb.__vector_len(this.bb_pos+i):0}nodeIndicesArray(){let i=this.bb.__offset(this.bb_pos,4);return i?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+i),this.bb.__vector_len(this.bb_pos+i)):null}kernelDefHashes(i){let a=this.bb.__offset(this.bb_pos,6);return a?this.bb.readUint64(this.bb.__vector(this.bb_pos+a)+i*8):this.bb.createLong(0,0)}kernelDefHashesLength(){let i=this.bb.__offset(this.bb_pos,6);return i?this.bb.__vector_len(this.bb_pos+i):0}static startKernelCreateInfos(i){i.startObject(2)}static addNodeIndices(i,a){i.addFieldOffset(0,a,0)}static createNodeIndicesVector(i,a){i.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)i.addInt32(a[d]);return i.endVector()}static startNodeIndicesVector(i,a){i.startVector(4,a,4)}static addKernelDefHashes(i,a){i.addFieldOffset(1,a,0)}static createKernelDefHashesVector(i,a){i.startVector(8,a.length,8);for(let d=a.length-1;d>=0;d--)i.addInt64(a[d]);return i.endVector()}static startKernelDefHashesVector(i,a){i.startVector(8,a,8)}static endKernelCreateInfos(i){return i.endObject()}static createKernelCreateInfos(i,a,d){return o.startKernelCreateInfos(i),o.addNodeIndices(i,a),o.addKernelDefHashes(i,d),o.endKernelCreateInfos(i)}}r.KernelCreateInfos=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsSubGraphSessionState(i,a){return(a||new o).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsSubGraphSessionState(i,a){return i.setPosition(i.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(i.readInt32(i.position())+i.position(),i)}graphId(i){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,i):null}sessionState(i){let a=this.bb.__offset(this.bb_pos,6);return a?(i||new e.experimental.fbs.SessionState).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}static startSubGraphSessionState(i){i.startObject(2)}static addGraphId(i,a){i.addFieldOffset(0,a,0)}static addSessionState(i,a){i.addFieldOffset(1,a,0)}static endSubGraphSessionState(i){let a=i.endObject();return i.requiredField(a,4),a}static createSubGraphSessionState(i,a,d){return o.startSubGraphSessionState(i),o.addGraphId(i,a),o.addSessionState(i,d),o.endSubGraphSessionState(i)}}r.SubGraphSessionState=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsSessionState(i,a){return(a||new o).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsSessionState(i,a){return i.setPosition(i.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(i.readInt32(i.position())+i.position(),i)}kernels(i){let a=this.bb.__offset(this.bb_pos,4);return a?(i||new e.experimental.fbs.KernelCreateInfos).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}subGraphSessionStates(i,a){let d=this.bb.__offset(this.bb_pos,6);return d?(a||new e.experimental.fbs.SubGraphSessionState).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+d)+i*4),this.bb):null}subGraphSessionStatesLength(){let i=this.bb.__offset(this.bb_pos,6);return i?this.bb.__vector_len(this.bb_pos+i):0}static startSessionState(i){i.startObject(2)}static addKernels(i,a){i.addFieldOffset(0,a,0)}static addSubGraphSessionStates(i,a){i.addFieldOffset(1,a,0)}static createSubGraphSessionStatesVector(i,a){i.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)i.addOffset(a[d]);return i.endVector()}static startSubGraphSessionStatesVector(i,a){i.startVector(4,a,4)}static endSessionState(i){return i.endObject()}static createSessionState(i,a,d){return o.startSessionState(i),o.addKernels(i,a),o.addSubGraphSessionStates(i,d),o.endSessionState(i)}}r.SessionState=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(i,a){return this.bb_pos=i,this.bb=a,this}static getRootAsInferenceSession(i,a){return(a||new o).__init(i.readInt32(i.position())+i.position(),i)}static getSizePrefixedRootAsInferenceSession(i,a){return i.setPosition(i.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(i.readInt32(i.position())+i.position(),i)}static bufferHasIdentifier(i){return i.__has_identifier("ORTM")}ortVersion(i){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,i):null}model(i){let a=this.bb.__offset(this.bb_pos,6);return a?(i||new e.experimental.fbs.Model).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}sessionState(i){let a=this.bb.__offset(this.bb_pos,8);return a?(i||new e.experimental.fbs.SessionState).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}static startInferenceSession(i){i.startObject(3)}static addOrtVersion(i,a){i.addFieldOffset(0,a,0)}static addModel(i,a){i.addFieldOffset(1,a,0)}static addSessionState(i,a){i.addFieldOffset(2,a,0)}static endInferenceSession(i){return i.endObject()}static finishInferenceSessionBuffer(i,a){i.finish(a,"ORTM")}static finishSizePrefixedInferenceSessionBuffer(i,a){i.finish(a,"ORTM",!0)}static createInferenceSession(i,a,d,p){return o.startInferenceSession(i),o.addOrtVersion(i,a),o.addModel(i,d),o.addSessionState(i,p),o.endInferenceSession(i)}}r.InferenceSession=o})(t.fbs||={})})(e.experimental||={})})(P$1||={})}),Vo=Z$1((e,t)=>{t.exports=r;function r(o,s){for(var i=new Array(arguments.length-1),a=0,d=2,p=!0;d<arguments.length;)i[a++]=arguments[d++];return new Promise(function(n,l){i[a]=function(u){if(p)if(p=!1,u)l(u);else{for(var c=new Array(arguments.length-1),h=0;h<c.length;)c[h++]=arguments[h];n.apply(null,c)}};try{o.apply(s||null,i)}catch(u){p&&(p=!1,l(u))}})}}),Wo=Z$1(e=>{var t=e;t.length=function(a){var d=a.length;if(!d)return 0;for(var p=0;--d%4>1&&a.charAt(d)==="=";)++p;return Math.ceil(a.length*3)/4-p};var r=new Array(64),o=new Array(123);for(s=0;s<64;)o[r[s]=s<26?s+65:s<52?s+71:s<62?s-4:s-59|43]=s++;var s;t.encode=function(a,d,p){for(var n=null,l=[],u=0,c=0,h;d<p;){var f=a[d++];switch(c){case 0:l[u++]=r[f>>2],h=(f&3)<<4,c=1;break;case 1:l[u++]=r[h|f>>4],h=(f&15)<<2,c=2;break;case 2:l[u++]=r[h|f>>6],l[u++]=r[f&63],c=0;break}u>8191&&((n||(n=[])).push(String.fromCharCode.apply(String,l)),u=0)}return c&&(l[u++]=r[h],l[u++]=61,c===1&&(l[u++]=61)),n?(u&&n.push(String.fromCharCode.apply(String,l.slice(0,u))),n.join("")):String.fromCharCode.apply(String,l.slice(0,u))};var i="invalid encoding";t.decode=function(a,d,p){for(var n=p,l=0,u,c=0;c<a.length;){var h=a.charCodeAt(c++);if(h===61&&l>1)break;if((h=o[h])===void 0)throw Error(i);switch(l){case 0:u=h,l=1;break;case 1:d[p++]=u<<2|(h&48)>>4,u=h,l=2;break;case 2:d[p++]=(u&15)<<4|(h&60)>>2,u=h,l=3;break;case 3:d[p++]=(u&3)<<6|h,l=0;break}}if(l===1)throw Error(i);return p-n},t.test=function(a){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a)}}),qo=Z$1((e,t)=>{t.exports=r;function r(){this._listeners={}}r.prototype.on=function(o,s,i){return(this._listeners[o]||(this._listeners[o]=[])).push({fn:s,ctx:i||this}),this},r.prototype.off=function(o,s){if(o===void 0)this._listeners={};else if(s===void 0)this._listeners[o]=[];else for(var i=this._listeners[o],a=0;a<i.length;)i[a].fn===s?i.splice(a,1):++a;return this},r.prototype.emit=function(o){var s=this._listeners[o];if(s){for(var i=[],a=1;a<arguments.length;)i.push(arguments[a++]);for(a=0;a<s.length;)s[a].fn.apply(s[a++].ctx,i)}return this}}),Qo=Z$1((e,t)=>{t.exports=r(r);function r(d){return typeof Float32Array<"u"?function(){var p=new Float32Array([-0]),n=new Uint8Array(p.buffer),l=n[3]===128;function u(g,b,E){p[0]=g,b[E]=n[0],b[E+1]=n[1],b[E+2]=n[2],b[E+3]=n[3]}function c(g,b,E){p[0]=g,b[E]=n[3],b[E+1]=n[2],b[E+2]=n[1],b[E+3]=n[0]}d.writeFloatLE=l?u:c,d.writeFloatBE=l?c:u;function h(g,b){return n[0]=g[b],n[1]=g[b+1],n[2]=g[b+2],n[3]=g[b+3],p[0]}function f(g,b){return n[3]=g[b],n[2]=g[b+1],n[1]=g[b+2],n[0]=g[b+3],p[0]}d.readFloatLE=l?h:f,d.readFloatBE=l?f:h}():function(){function p(l,u,c,h){var f=u<0?1:0;if(f&&(u=-u),u===0)l(1/u>0?0:2147483648,c,h);else if(isNaN(u))l(2143289344,c,h);else if(u>34028234663852886e22)l((f<<31|2139095040)>>>0,c,h);else if(u<11754943508222875e-54)l((f<<31|Math.round(u/1401298464324817e-60))>>>0,c,h);else{var g=Math.floor(Math.log(u)/Math.LN2),b=Math.round(u*Math.pow(2,-g)*8388608)&8388607;l((f<<31|g+127<<23|b)>>>0,c,h)}}d.writeFloatLE=p.bind(null,o),d.writeFloatBE=p.bind(null,s);function n(l,u,c){var h=l(u,c),f=(h>>31)*2+1,g=h>>>23&255,b=h&8388607;return g===255?b?NaN:f*(1/0):g===0?f*1401298464324817e-60*b:f*Math.pow(2,g-150)*(b+8388608)}d.readFloatLE=n.bind(null,i),d.readFloatBE=n.bind(null,a)}(),typeof Float64Array<"u"?function(){var p=new Float64Array([-0]),n=new Uint8Array(p.buffer),l=n[7]===128;function u(g,b,E){p[0]=g,b[E]=n[0],b[E+1]=n[1],b[E+2]=n[2],b[E+3]=n[3],b[E+4]=n[4],b[E+5]=n[5],b[E+6]=n[6],b[E+7]=n[7]}function c(g,b,E){p[0]=g,b[E]=n[7],b[E+1]=n[6],b[E+2]=n[5],b[E+3]=n[4],b[E+4]=n[3],b[E+5]=n[2],b[E+6]=n[1],b[E+7]=n[0]}d.writeDoubleLE=l?u:c,d.writeDoubleBE=l?c:u;function h(g,b){return n[0]=g[b],n[1]=g[b+1],n[2]=g[b+2],n[3]=g[b+3],n[4]=g[b+4],n[5]=g[b+5],n[6]=g[b+6],n[7]=g[b+7],p[0]}function f(g,b){return n[7]=g[b],n[6]=g[b+1],n[5]=g[b+2],n[4]=g[b+3],n[3]=g[b+4],n[2]=g[b+5],n[1]=g[b+6],n[0]=g[b+7],p[0]}d.readDoubleLE=l?h:f,d.readDoubleBE=l?f:h}():function(){function p(l,u,c,h,f,g){var b=h<0?1:0;if(b&&(h=-h),h===0)l(0,f,g+u),l(1/h>0?0:2147483648,f,g+c);else if(isNaN(h))l(0,f,g+u),l(2146959360,f,g+c);else if(h>17976931348623157e292)l(0,f,g+u),l((b<<31|2146435072)>>>0,f,g+c);else{var E;if(h<22250738585072014e-324)E=h/5e-324,l(E>>>0,f,g+u),l((b<<31|E/4294967296)>>>0,f,g+c);else{var y=Math.floor(Math.log(h)/Math.LN2);y===1024&&(y=1023),E=h*Math.pow(2,-y),l(E*4503599627370496>>>0,f,g+u),l((b<<31|y+1023<<20|E*1048576&1048575)>>>0,f,g+c)}}}d.writeDoubleLE=p.bind(null,o,0,4),d.writeDoubleBE=p.bind(null,s,4,0);function n(l,u,c,h,f){var g=l(h,f+u),b=l(h,f+c),E=(b>>31)*2+1,y=b>>>20&2047,F=4294967296*(b&1048575)+g;return y===2047?F?NaN:E*(1/0):y===0?E*5e-324*F:E*Math.pow(2,y-1075)*(F+4503599627370496)}d.readDoubleLE=n.bind(null,i,0,4),d.readDoubleBE=n.bind(null,a,4,0)}(),d}function o(d,p,n){p[n]=d&255,p[n+1]=d>>>8&255,p[n+2]=d>>>16&255,p[n+3]=d>>>24}function s(d,p,n){p[n]=d>>>24,p[n+1]=d>>>16&255,p[n+2]=d>>>8&255,p[n+3]=d&255}function i(d,p){return(d[p]|d[p+1]<<8|d[p+2]<<16|d[p+3]<<24)>>>0}function a(d,p){return(d[p]<<24|d[p+1]<<16|d[p+2]<<8|d[p+3])>>>0}}),ti=Z$1((exports,module)=>{module.exports=inquire;function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(e){}return null}}),ri=Z$1(e=>{var t=e;t.length=function(r){for(var o=0,s=0,i=0;i<r.length;++i)s=r.charCodeAt(i),s<128?o+=1:s<2048?o+=2:(s&64512)===55296&&(r.charCodeAt(i+1)&64512)===56320?(++i,o+=4):o+=3;return o},t.read=function(r,o,s){var i=s-o;if(i<1)return"";for(var a=null,d=[],p=0,n;o<s;)n=r[o++],n<128?d[p++]=n:n>191&&n<224?d[p++]=(n&31)<<6|r[o++]&63:n>239&&n<365?(n=((n&7)<<18|(r[o++]&63)<<12|(r[o++]&63)<<6|r[o++]&63)-65536,d[p++]=55296+(n>>10),d[p++]=56320+(n&1023)):d[p++]=(n&15)<<12|(r[o++]&63)<<6|r[o++]&63,p>8191&&((a||(a=[])).push(String.fromCharCode.apply(String,d)),p=0);return a?(p&&a.push(String.fromCharCode.apply(String,d.slice(0,p))),a.join("")):String.fromCharCode.apply(String,d.slice(0,p))},t.write=function(r,o,s){for(var i=s,a,d,p=0;p<r.length;++p)a=r.charCodeAt(p),a<128?o[s++]=a:a<2048?(o[s++]=a>>6|192,o[s++]=a&63|128):(a&64512)===55296&&((d=r.charCodeAt(p+1))&64512)===56320?(a=65536+((a&1023)<<10)+(d&1023),++p,o[s++]=a>>18|240,o[s++]=a>>12&63|128,o[s++]=a>>6&63|128,o[s++]=a&63|128):(o[s++]=a>>12|224,o[s++]=a>>6&63|128,o[s++]=a&63|128);return s-i}}),oi=Z$1((e,t)=>{t.exports=r;function r(o,s,i){var a=i||8192,d=a>>>1,p=null,n=a;return function(l){if(l<1||l>d)return o(l);n+l>a&&(p=o(a),n=0);var u=s.call(p,n,n+=l);return n&7&&(n=(n|7)+1),u}}}),ai=Z$1((e,t)=>{t.exports=o;var r=Gt$1();function o(d,p){this.lo=d>>>0,this.hi=p>>>0}var s=o.zero=new o(0,0);s.toNumber=function(){return 0},s.zzEncode=s.zzDecode=function(){return this},s.length=function(){return 1};var i=o.zeroHash="\0\0\0\0\0\0\0\0";o.fromNumber=function(d){if(d===0)return s;var p=d<0;p&&(d=-d);var n=d>>>0,l=(d-n)/4294967296>>>0;return p&&(l=~l>>>0,n=~n>>>0,++n>4294967295&&(n=0,++l>4294967295&&(l=0))),new o(n,l)},o.from=function(d){if(typeof d=="number")return o.fromNumber(d);if(r.isString(d))if(r.Long)d=r.Long.fromString(d);else return o.fromNumber(parseInt(d,10));return d.low||d.high?new o(d.low>>>0,d.high>>>0):s},o.prototype.toNumber=function(d){if(!d&&this.hi>>>31){var p=~this.lo+1>>>0,n=~this.hi>>>0;return p||(n=n+1>>>0),-(p+n*4294967296)}return this.lo+this.hi*4294967296},o.prototype.toLong=function(d){return r.Long?new r.Long(this.lo|0,this.hi|0,!!d):{low:this.lo|0,high:this.hi|0,unsigned:!!d}};var a=String.prototype.charCodeAt;o.fromHash=function(d){return d===i?s:new o((a.call(d,0)|a.call(d,1)<<8|a.call(d,2)<<16|a.call(d,3)<<24)>>>0,(a.call(d,4)|a.call(d,5)<<8|a.call(d,6)<<16|a.call(d,7)<<24)>>>0)},o.prototype.toHash=function(){return String.fromCharCode(this.lo&255,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,this.hi&255,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},o.prototype.zzEncode=function(){var d=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^d)>>>0,this.lo=(this.lo<<1^d)>>>0,this},o.prototype.zzDecode=function(){var d=-(this.lo&1);return this.lo=((this.lo>>>1|this.hi<<31)^d)>>>0,this.hi=(this.hi>>>1^d)>>>0,this},o.prototype.length=function(){var d=this.lo,p=(this.lo>>>28|this.hi<<4)>>>0,n=this.hi>>>24;return n===0?p===0?d<16384?d<128?1:2:d<2097152?3:4:p<16384?p<128?5:6:p<2097152?7:8:n<128?9:10}}),Gt$1=Z$1(e=>{var t=e;t.asPromise=Vo(),t.base64=Wo(),t.EventEmitter=qo(),t.float=Qo(),t.inquire=ti(),t.utf8=ri(),t.pool=oi(),t.LongBits=ai(),t.isNode=!!(typeof global<"u"&&global&&global.process&&global.process.versions&&global.process.versions.node),t.global=t.isNode&&global||typeof window<"u"&&window||typeof self<"u"&&self||e,t.emptyArray=Object.freeze?Object.freeze([]):[],t.emptyObject=Object.freeze?Object.freeze({}):{},t.isInteger=Number.isInteger||function(s){return typeof s=="number"&&isFinite(s)&&Math.floor(s)===s},t.isString=function(s){return typeof s=="string"||s instanceof String},t.isObject=function(s){return s&&typeof s=="object"},t.isset=t.isSet=function(s,i){var a=s[i];return a!=null&&s.hasOwnProperty(i)?typeof a!="object"||(Array.isArray(a)?a.length:Object.keys(a).length)>0:!1},t.Buffer=function(){try{var s=t.inquire("buffer").Buffer;return s.prototype.utf8Write?s:null}catch{return null}}(),t._Buffer_from=null,t._Buffer_allocUnsafe=null,t.newBuffer=function(s){return typeof s=="number"?t.Buffer?t._Buffer_allocUnsafe(s):new t.Array(s):t.Buffer?t._Buffer_from(s):typeof Uint8Array>"u"?s:new Uint8Array(s)},t.Array=typeof Uint8Array<"u"?Uint8Array:Array,t.Long=t.global.dcodeIO&&t.global.dcodeIO.Long||t.global.Long||t.inquire("long"),t.key2Re=/^true|false|0|1$/,t.key32Re=/^-?(?:0|[1-9][0-9]*)$/,t.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,t.longToHash=function(s){return s?t.LongBits.from(s).toHash():t.LongBits.zeroHash},t.longFromHash=function(s,i){var a=t.LongBits.fromHash(s);return t.Long?t.Long.fromBits(a.lo,a.hi,i):a.toNumber(!!i)};function r(s,i,a){for(var d=Object.keys(i),p=0;p<d.length;++p)(s[d[p]]===void 0||!a)&&(s[d[p]]=i[d[p]]);return s}t.merge=r,t.lcFirst=function(s){return s.charAt(0).toLowerCase()+s.substring(1)};function o(s){function i(a,d){if(!(this instanceof i))return new i(a,d);Object.defineProperty(this,"message",{get:function(){return a}}),Error.captureStackTrace?Error.captureStackTrace(this,i):Object.defineProperty(this,"stack",{value:new Error().stack||""}),d&&r(this,d)}return i.prototype=Object.create(Error.prototype,{constructor:{value:i,writable:!0,enumerable:!1,configurable:!0},name:{get:function(){return s},set:void 0,enumerable:!1,configurable:!0},toString:{value:function(){return this.name+": "+this.message},writable:!0,enumerable:!1,configurable:!0}}),i}t.newError=o,t.ProtocolError=o("ProtocolError"),t.oneOfGetter=function(s){for(var i={},a=0;a<s.length;++a)i[s[a]]=1;return function(){for(var d=Object.keys(this),p=d.length-1;p>-1;--p)if(i[d[p]]===1&&this[d[p]]!==void 0&&this[d[p]]!==null)return d[p]}},t.oneOfSetter=function(s){return function(i){for(var a=0;a<s.length;++a)s[a]!==i&&delete this[s[a]]}},t.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},t._configure=function(){var s=t.Buffer;if(!s){t._Buffer_from=t._Buffer_allocUnsafe=null;return}t._Buffer_from=s.from!==Uint8Array.from&&s.from||function(i,a){return new s(i,a)},t._Buffer_allocUnsafe=s.allocUnsafe||function(i){return new s(i)}}}),Yr=Z$1((e,t)=>{t.exports=l;var r=Gt$1(),o,s=r.LongBits,i=r.base64,a=r.utf8;function d(y,F,L){this.fn=y,this.len=F,this.next=void 0,this.val=L}function p(){}function n(y){this.head=y.head,this.tail=y.tail,this.len=y.len,this.next=y.states}function l(){this.len=0,this.head=new d(p,0,0),this.tail=this.head,this.states=null}var u=function(){return r.Buffer?function(){return(l.create=function(){return new o})()}:function(){return new l}};l.create=u(),l.alloc=function(y){return new r.Array(y)},r.Array!==Array&&(l.alloc=r.pool(l.alloc,r.Array.prototype.subarray)),l.prototype._push=function(y,F,L){return this.tail=this.tail.next=new d(y,F,L),this.len+=F,this};function c(y,F,L){F[L]=y&255}function h(y,F,L){for(;y>127;)F[L++]=y&127|128,y>>>=7;F[L]=y}function f(y,F){this.len=y,this.next=void 0,this.val=F}f.prototype=Object.create(d.prototype),f.prototype.fn=h,l.prototype.uint32=function(y){return this.len+=(this.tail=this.tail.next=new f((y=y>>>0)<128?1:y<16384?2:y<2097152?3:y<268435456?4:5,y)).len,this},l.prototype.int32=function(y){return y<0?this._push(g,10,s.fromNumber(y)):this.uint32(y)},l.prototype.sint32=function(y){return this.uint32((y<<1^y>>31)>>>0)};function g(y,F,L){for(;y.hi;)F[L++]=y.lo&127|128,y.lo=(y.lo>>>7|y.hi<<25)>>>0,y.hi>>>=7;for(;y.lo>127;)F[L++]=y.lo&127|128,y.lo=y.lo>>>7;F[L++]=y.lo}l.prototype.uint64=function(y){var F=s.from(y);return this._push(g,F.length(),F)},l.prototype.int64=l.prototype.uint64,l.prototype.sint64=function(y){var F=s.from(y).zzEncode();return this._push(g,F.length(),F)},l.prototype.bool=function(y){return this._push(c,1,y?1:0)};function b(y,F,L){F[L]=y&255,F[L+1]=y>>>8&255,F[L+2]=y>>>16&255,F[L+3]=y>>>24}l.prototype.fixed32=function(y){return this._push(b,4,y>>>0)},l.prototype.sfixed32=l.prototype.fixed32,l.prototype.fixed64=function(y){var F=s.from(y);return this._push(b,4,F.lo)._push(b,4,F.hi)},l.prototype.sfixed64=l.prototype.fixed64,l.prototype.float=function(y){return this._push(r.float.writeFloatLE,4,y)},l.prototype.double=function(y){return this._push(r.float.writeDoubleLE,8,y)};var E=r.Array.prototype.set?function(y,F,L){F.set(y,L)}:function(y,F,L){for(var K=0;K<y.length;++K)F[L+K]=y[K]};l.prototype.bytes=function(y){var F=y.length>>>0;if(!F)return this._push(c,1,0);if(r.isString(y)){var L=l.alloc(F=i.length(y));i.decode(y,L,0),y=L}return this.uint32(F)._push(E,F,y)},l.prototype.string=function(y){var F=a.length(y);return F?this.uint32(F)._push(a.write,F,y):this._push(c,1,0)},l.prototype.fork=function(){return this.states=new n(this),this.head=this.tail=new d(p,0,0),this.len=0,this},l.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new d(p,0,0),this.len=0),this},l.prototype.ldelim=function(){var y=this.head,F=this.tail,L=this.len;return this.reset().uint32(L),L&&(this.tail.next=y.next,this.tail=F,this.len+=L),this},l.prototype.finish=function(){for(var y=this.head.next,F=this.constructor.alloc(this.len),L=0;y;)y.fn(y.val,F,L),L+=y.len,y=y.next;return F},l._configure=function(y){o=y,l.create=u(),o._configure()}}),mi=Z$1((e,t)=>{t.exports=s;var r=Yr();(s.prototype=Object.create(r.prototype)).constructor=s;var o=Gt$1();function s(){r.call(this)}s._configure=function(){s.alloc=o._Buffer_allocUnsafe,s.writeBytesBuffer=o.Buffer&&o.Buffer.prototype instanceof Uint8Array&&o.Buffer.prototype.set.name==="set"?function(a,d,p){d.set(a,p)}:function(a,d,p){if(a.copy)a.copy(d,p,0,a.length);else for(var n=0;n<a.length;)d[p++]=a[n++]}},s.prototype.bytes=function(a){o.isString(a)&&(a=o._Buffer_from(a,"base64"));var d=a.length>>>0;return this.uint32(d),d&&this._push(s.writeBytesBuffer,d,a),this};function i(a,d,p){a.length<40?o.utf8.write(a,d,p):d.utf8Write?d.utf8Write(a,p):d.write(a,p)}s.prototype.string=function(a){var d=o.Buffer.byteLength(a);return this.uint32(d),d&&this._push(i,d,a),this},s._configure()}),en=Z$1((e,t)=>{t.exports=d;var r=Gt$1(),o,s=r.LongBits,i=r.utf8;function a(h,f){return RangeError("index out of range: "+h.pos+" + "+(f||1)+" > "+h.len)}function d(h){this.buf=h,this.pos=0,this.len=h.length}var p=typeof Uint8Array<"u"?function(h){if(h instanceof Uint8Array||Array.isArray(h))return new d(h);throw Error("illegal buffer")}:function(h){if(Array.isArray(h))return new d(h);throw Error("illegal buffer")},n=function(){return r.Buffer?function(h){return(d.create=function(f){return r.Buffer.isBuffer(f)?new o(f):p(f)})(h)}:p};d.create=n(),d.prototype._slice=r.Array.prototype.subarray||r.Array.prototype.slice,d.prototype.uint32=function(){var h=4294967295;return function(){if(h=(this.buf[this.pos]&127)>>>0,this.buf[this.pos++]<128||(h=(h|(this.buf[this.pos]&127)<<7)>>>0,this.buf[this.pos++]<128)||(h=(h|(this.buf[this.pos]&127)<<14)>>>0,this.buf[this.pos++]<128)||(h=(h|(this.buf[this.pos]&127)<<21)>>>0,this.buf[this.pos++]<128)||(h=(h|(this.buf[this.pos]&15)<<28)>>>0,this.buf[this.pos++]<128))return h;if((this.pos+=5)>this.len)throw this.pos=this.len,a(this,10);return h}}(),d.prototype.int32=function(){return this.uint32()|0},d.prototype.sint32=function(){var h=this.uint32();return h>>>1^-(h&1)|0};function l(){var h=new s(0,0),f=0;if(this.len-this.pos>4){for(;f<4;++f)if(h.lo=(h.lo|(this.buf[this.pos]&127)<<f*7)>>>0,this.buf[this.pos++]<128)return h;if(h.lo=(h.lo|(this.buf[this.pos]&127)<<28)>>>0,h.hi=(h.hi|(this.buf[this.pos]&127)>>4)>>>0,this.buf[this.pos++]<128)return h;f=0}else{for(;f<3;++f){if(this.pos>=this.len)throw a(this);if(h.lo=(h.lo|(this.buf[this.pos]&127)<<f*7)>>>0,this.buf[this.pos++]<128)return h}return h.lo=(h.lo|(this.buf[this.pos++]&127)<<f*7)>>>0,h}if(this.len-this.pos>4){for(;f<5;++f)if(h.hi=(h.hi|(this.buf[this.pos]&127)<<f*7+3)>>>0,this.buf[this.pos++]<128)return h}else for(;f<5;++f){if(this.pos>=this.len)throw a(this);if(h.hi=(h.hi|(this.buf[this.pos]&127)<<f*7+3)>>>0,this.buf[this.pos++]<128)return h}throw Error("invalid varint encoding")}d.prototype.bool=function(){return this.uint32()!==0};function u(h,f){return(h[f-4]|h[f-3]<<8|h[f-2]<<16|h[f-1]<<24)>>>0}d.prototype.fixed32=function(){if(this.pos+4>this.len)throw a(this,4);return u(this.buf,this.pos+=4)},d.prototype.sfixed32=function(){if(this.pos+4>this.len)throw a(this,4);return u(this.buf,this.pos+=4)|0};function c(){if(this.pos+8>this.len)throw a(this,8);return new s(u(this.buf,this.pos+=4),u(this.buf,this.pos+=4))}d.prototype.float=function(){if(this.pos+4>this.len)throw a(this,4);var h=r.float.readFloatLE(this.buf,this.pos);return this.pos+=4,h},d.prototype.double=function(){if(this.pos+8>this.len)throw a(this,4);var h=r.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,h},d.prototype.bytes=function(){var h=this.uint32(),f=this.pos,g=this.pos+h;if(g>this.len)throw a(this,h);if(this.pos+=h,Array.isArray(this.buf))return this.buf.slice(f,g);if(f===g){var b=r.Buffer;return b?b.alloc(0):new this.buf.constructor(0)}return this._slice.call(this.buf,f,g)},d.prototype.string=function(){var h=this.bytes();return i.read(h,0,h.length)},d.prototype.skip=function(h){if(typeof h=="number"){if(this.pos+h>this.len)throw a(this,h);this.pos+=h}else do if(this.pos>=this.len)throw a(this);while(this.buf[this.pos++]&128);return this},d.prototype.skipType=function(h){switch(h){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;(h=this.uint32()&7)!==4;)this.skipType(h);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+h+" at offset "+this.pos)}return this},d._configure=function(h){o=h,d.create=n(),o._configure();var f=r.Long?"toLong":"toNumber";r.merge(d.prototype,{int64:function(){return l.call(this)[f](!1)},uint64:function(){return l.call(this)[f](!0)},sint64:function(){return l.call(this).zzDecode()[f](!1)},fixed64:function(){return c.call(this)[f](!0)},sfixed64:function(){return c.call(this)[f](!1)}})}}),_i=Z$1((e,t)=>{t.exports=s;var r=en();(s.prototype=Object.create(r.prototype)).constructor=s;var o=Gt$1();function s(i){r.call(this,i)}s._configure=function(){o.Buffer&&(s.prototype._slice=o.Buffer.prototype.slice)},s.prototype.string=function(){var i=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+i,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+i,this.len))},s._configure()}),Ai=Z$1((e,t)=>{t.exports=o;var r=Gt$1();(o.prototype=Object.create(r.EventEmitter.prototype)).constructor=o;function o(s,i,a){if(typeof s!="function")throw TypeError("rpcImpl must be a function");r.EventEmitter.call(this),this.rpcImpl=s,this.requestDelimited=!!i,this.responseDelimited=!!a}o.prototype.rpcCall=function s(i,a,d,p,n){if(!p)throw TypeError("request must be specified");var l=this;if(!n)return r.asPromise(s,l,i,a,d,p);if(!l.rpcImpl){setTimeout(function(){n(Error("already ended"))},0);return}try{return l.rpcImpl(i,a[l.requestDelimited?"encodeDelimited":"encode"](p).finish(),function(u,c){if(u)return l.emit("error",u,i),n(u);if(c===null){l.end(!0);return}if(!(c instanceof d))try{c=d[l.responseDelimited?"decodeDelimited":"decode"](c)}catch(h){return l.emit("error",h,i),n(h)}return l.emit("data",c,i),n(null,c)})}catch(u){l.emit("error",u,i),setTimeout(function(){n(u)},0);return}},o.prototype.end=function(s){return this.rpcImpl&&(s||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this}}),Pi=Z$1(e=>{var t=e;t.Service=Ai()}),Di=Z$1((e,t)=>{t.exports={}}),ki=Z$1(e=>{var t=e;t.build="minimal",t.Writer=Yr(),t.BufferWriter=mi(),t.Reader=en(),t.BufferReader=_i(),t.util=Gt$1(),t.rpc=Pi(),t.roots=Di(),t.configure=r;function r(){t.util._configure(),t.Writer._configure(t.BufferWriter),t.Reader._configure(t.BufferReader)}r()}),Fi=Z$1((e,t)=>{t.exports=ki()}),se$1=Z$1((e,t)=>{var r=Fi(),o=r.Reader,s=r.Writer,i=r.util,a=r.roots.default||(r.roots.default={});a.onnx=function(){var d={};return d.Version=function(){var p={},n=Object.create(p);return n[p[0]="_START_VERSION"]=0,n[p[1]="IR_VERSION_2017_10_10"]=1,n[p[2]="IR_VERSION_2017_10_30"]=2,n[p[3]="IR_VERSION_2017_11_3"]=3,n[p[4]="IR_VERSION_2019_1_22"]=4,n[p[5]="IR_VERSION_2019_3_18"]=5,n[p[6]="IR_VERSION_2019_9_19"]=6,n[p[7]="IR_VERSION_2020_5_8"]=7,n[p[8]="IR_VERSION_2021_7_30"]=8,n[p[9]="IR_VERSION"]=9,n}(),d.AttributeProto=function(){function p(n){if(this.floats=[],this.ints=[],this.strings=[],this.tensors=[],this.graphs=[],this.sparseTensors=[],this.typeProtos=[],n)for(var l=Object.keys(n),u=0;u<l.length;++u)n[l[u]]!=null&&(this[l[u]]=n[l[u]])}return p.prototype.name="",p.prototype.refAttrName="",p.prototype.docString="",p.prototype.type=0,p.prototype.f=0,p.prototype.i=i.Long?i.Long.fromBits(0,0,!1):0,p.prototype.s=i.newBuffer([]),p.prototype.t=null,p.prototype.g=null,p.prototype.sparseTensor=null,p.prototype.tp=null,p.prototype.floats=i.emptyArray,p.prototype.ints=i.emptyArray,p.prototype.strings=i.emptyArray,p.prototype.tensors=i.emptyArray,p.prototype.graphs=i.emptyArray,p.prototype.sparseTensors=i.emptyArray,p.prototype.typeProtos=i.emptyArray,p.create=function(n){return new p(n)},p.encode=function(n,l){if(l||(l=s.create()),n.name!=null&&Object.hasOwnProperty.call(n,"name")&&l.uint32(10).string(n.name),n.f!=null&&Object.hasOwnProperty.call(n,"f")&&l.uint32(21).float(n.f),n.i!=null&&Object.hasOwnProperty.call(n,"i")&&l.uint32(24).int64(n.i),n.s!=null&&Object.hasOwnProperty.call(n,"s")&&l.uint32(34).bytes(n.s),n.t!=null&&Object.hasOwnProperty.call(n,"t")&&a.onnx.TensorProto.encode(n.t,l.uint32(42).fork()).ldelim(),n.g!=null&&Object.hasOwnProperty.call(n,"g")&&a.onnx.GraphProto.encode(n.g,l.uint32(50).fork()).ldelim(),n.floats!=null&&n.floats.length){l.uint32(58).fork();for(var u=0;u<n.floats.length;++u)l.float(n.floats[u]);l.ldelim()}if(n.ints!=null&&n.ints.length){l.uint32(66).fork();for(var u=0;u<n.ints.length;++u)l.int64(n.ints[u]);l.ldelim()}if(n.strings!=null&&n.strings.length)for(var u=0;u<n.strings.length;++u)l.uint32(74).bytes(n.strings[u]);if(n.tensors!=null&&n.tensors.length)for(var u=0;u<n.tensors.length;++u)a.onnx.TensorProto.encode(n.tensors[u],l.uint32(82).fork()).ldelim();if(n.graphs!=null&&n.graphs.length)for(var u=0;u<n.graphs.length;++u)a.onnx.GraphProto.encode(n.graphs[u],l.uint32(90).fork()).ldelim();if(n.docString!=null&&Object.hasOwnProperty.call(n,"docString")&&l.uint32(106).string(n.docString),n.tp!=null&&Object.hasOwnProperty.call(n,"tp")&&a.onnx.TypeProto.encode(n.tp,l.uint32(114).fork()).ldelim(),n.typeProtos!=null&&n.typeProtos.length)for(var u=0;u<n.typeProtos.length;++u)a.onnx.TypeProto.encode(n.typeProtos[u],l.uint32(122).fork()).ldelim();if(n.type!=null&&Object.hasOwnProperty.call(n,"type")&&l.uint32(160).int32(n.type),n.refAttrName!=null&&Object.hasOwnProperty.call(n,"refAttrName")&&l.uint32(170).string(n.refAttrName),n.sparseTensor!=null&&Object.hasOwnProperty.call(n,"sparseTensor")&&a.onnx.SparseTensorProto.encode(n.sparseTensor,l.uint32(178).fork()).ldelim(),n.sparseTensors!=null&&n.sparseTensors.length)for(var u=0;u<n.sparseTensors.length;++u)a.onnx.SparseTensorProto.encode(n.sparseTensors[u],l.uint32(186).fork()).ldelim();return l},p.encodeDelimited=function(n,l){return this.encode(n,l).ldelim()},p.decode=function(n,l){n instanceof o||(n=o.create(n));for(var u=l===void 0?n.len:n.pos+l,c=new a.onnx.AttributeProto;n.pos<u;){var h=n.uint32();switch(h>>>3){case 1:{c.name=n.string();break}case 21:{c.refAttrName=n.string();break}case 13:{c.docString=n.string();break}case 20:{c.type=n.int32();break}case 2:{c.f=n.float();break}case 3:{c.i=n.int64();break}case 4:{c.s=n.bytes();break}case 5:{c.t=a.onnx.TensorProto.decode(n,n.uint32());break}case 6:{c.g=a.onnx.GraphProto.decode(n,n.uint32());break}case 22:{c.sparseTensor=a.onnx.SparseTensorProto.decode(n,n.uint32());break}case 14:{c.tp=a.onnx.TypeProto.decode(n,n.uint32());break}case 7:{if(c.floats&&c.floats.length||(c.floats=[]),(h&7)===2)for(var f=n.uint32()+n.pos;n.pos<f;)c.floats.push(n.float());else c.floats.push(n.float());break}case 8:{if(c.ints&&c.ints.length||(c.ints=[]),(h&7)===2)for(var f=n.uint32()+n.pos;n.pos<f;)c.ints.push(n.int64());else c.ints.push(n.int64());break}case 9:{c.strings&&c.strings.length||(c.strings=[]),c.strings.push(n.bytes());break}case 10:{c.tensors&&c.tensors.length||(c.tensors=[]),c.tensors.push(a.onnx.TensorProto.decode(n,n.uint32()));break}case 11:{c.graphs&&c.graphs.length||(c.graphs=[]),c.graphs.push(a.onnx.GraphProto.decode(n,n.uint32()));break}case 23:{c.sparseTensors&&c.sparseTensors.length||(c.sparseTensors=[]),c.sparseTensors.push(a.onnx.SparseTensorProto.decode(n,n.uint32()));break}case 15:{c.typeProtos&&c.typeProtos.length||(c.typeProtos=[]),c.typeProtos.push(a.onnx.TypeProto.decode(n,n.uint32()));break}default:n.skipType(h&7);break}}return c},p.decodeDelimited=function(n){return n instanceof o||(n=new o(n)),this.decode(n,n.uint32())},p.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.name!=null&&n.hasOwnProperty("name")&&!i.isString(n.name))return"name: string expected";if(n.refAttrName!=null&&n.hasOwnProperty("refAttrName")&&!i.isString(n.refAttrName))return"refAttrName: string expected";if(n.docString!=null&&n.hasOwnProperty("docString")&&!i.isString(n.docString))return"docString: string expected";if(n.type!=null&&n.hasOwnProperty("type"))switch(n.type){default:return"type: enum value expected";case 0:case 1:case 2:case 3:case 4:case 5:case 11:case 13:case 6:case 7:case 8:case 9:case 10:case 12:case 14:break}if(n.f!=null&&n.hasOwnProperty("f")&&typeof n.f!="number")return"f: number expected";if(n.i!=null&&n.hasOwnProperty("i")&&!i.isInteger(n.i)&&!(n.i&&i.isInteger(n.i.low)&&i.isInteger(n.i.high)))return"i: integer|Long expected";if(n.s!=null&&n.hasOwnProperty("s")&&!(n.s&&typeof n.s.length=="number"||i.isString(n.s)))return"s: buffer expected";if(n.t!=null&&n.hasOwnProperty("t")){var l=a.onnx.TensorProto.verify(n.t);if(l)return"t."+l}if(n.g!=null&&n.hasOwnProperty("g")){var l=a.onnx.GraphProto.verify(n.g);if(l)return"g."+l}if(n.sparseTensor!=null&&n.hasOwnProperty("sparseTensor")){var l=a.onnx.SparseTensorProto.verify(n.sparseTensor);if(l)return"sparseTensor."+l}if(n.tp!=null&&n.hasOwnProperty("tp")){var l=a.onnx.TypeProto.verify(n.tp);if(l)return"tp."+l}if(n.floats!=null&&n.hasOwnProperty("floats")){if(!Array.isArray(n.floats))return"floats: array expected";for(var u=0;u<n.floats.length;++u)if(typeof n.floats[u]!="number")return"floats: number[] expected"}if(n.ints!=null&&n.hasOwnProperty("ints")){if(!Array.isArray(n.ints))return"ints: array expected";for(var u=0;u<n.ints.length;++u)if(!i.isInteger(n.ints[u])&&!(n.ints[u]&&i.isInteger(n.ints[u].low)&&i.isInteger(n.ints[u].high)))return"ints: integer|Long[] expected"}if(n.strings!=null&&n.hasOwnProperty("strings")){if(!Array.isArray(n.strings))return"strings: array expected";for(var u=0;u<n.strings.length;++u)if(!(n.strings[u]&&typeof n.strings[u].length=="number"||i.isString(n.strings[u])))return"strings: buffer[] expected"}if(n.tensors!=null&&n.hasOwnProperty("tensors")){if(!Array.isArray(n.tensors))return"tensors: array expected";for(var u=0;u<n.tensors.length;++u){var l=a.onnx.TensorProto.verify(n.tensors[u]);if(l)return"tensors."+l}}if(n.graphs!=null&&n.hasOwnProperty("graphs")){if(!Array.isArray(n.graphs))return"graphs: array expected";for(var u=0;u<n.graphs.length;++u){var l=a.onnx.GraphProto.verify(n.graphs[u]);if(l)return"graphs."+l}}if(n.sparseTensors!=null&&n.hasOwnProperty("sparseTensors")){if(!Array.isArray(n.sparseTensors))return"sparseTensors: array expected";for(var u=0;u<n.sparseTensors.length;++u){var l=a.onnx.SparseTensorProto.verify(n.sparseTensors[u]);if(l)return"sparseTensors."+l}}if(n.typeProtos!=null&&n.hasOwnProperty("typeProtos")){if(!Array.isArray(n.typeProtos))return"typeProtos: array expected";for(var u=0;u<n.typeProtos.length;++u){var l=a.onnx.TypeProto.verify(n.typeProtos[u]);if(l)return"typeProtos."+l}}return null},p.fromObject=function(n){if(n instanceof a.onnx.AttributeProto)return n;var l=new a.onnx.AttributeProto;switch(n.name!=null&&(l.name=String(n.name)),n.refAttrName!=null&&(l.refAttrName=String(n.refAttrName)),n.docString!=null&&(l.docString=String(n.docString)),n.type){default:if(typeof n.type=="number"){l.type=n.type;break}break;case"UNDEFINED":case 0:l.type=0;break;case"FLOAT":case 1:l.type=1;break;case"INT":case 2:l.type=2;break;case"STRING":case 3:l.type=3;break;case"TENSOR":case 4:l.type=4;break;case"GRAPH":case 5:l.type=5;break;case"SPARSE_TENSOR":case 11:l.type=11;break;case"TYPE_PROTO":case 13:l.type=13;break;case"FLOATS":case 6:l.type=6;break;case"INTS":case 7:l.type=7;break;case"STRINGS":case 8:l.type=8;break;case"TENSORS":case 9:l.type=9;break;case"GRAPHS":case 10:l.type=10;break;case"SPARSE_TENSORS":case 12:l.type=12;break;case"TYPE_PROTOS":case 14:l.type=14;break}if(n.f!=null&&(l.f=Number(n.f)),n.i!=null&&(i.Long?(l.i=i.Long.fromValue(n.i)).unsigned=!1:typeof n.i=="string"?l.i=parseInt(n.i,10):typeof n.i=="number"?l.i=n.i:typeof n.i=="object"&&(l.i=new i.LongBits(n.i.low>>>0,n.i.high>>>0).toNumber())),n.s!=null&&(typeof n.s=="string"?i.base64.decode(n.s,l.s=i.newBuffer(i.base64.length(n.s)),0):n.s.length>=0&&(l.s=n.s)),n.t!=null){if(typeof n.t!="object")throw TypeError(".onnx.AttributeProto.t: object expected");l.t=a.onnx.TensorProto.fromObject(n.t)}if(n.g!=null){if(typeof n.g!="object")throw TypeError(".onnx.AttributeProto.g: object expected");l.g=a.onnx.GraphProto.fromObject(n.g)}if(n.sparseTensor!=null){if(typeof n.sparseTensor!="object")throw TypeError(".onnx.AttributeProto.sparseTensor: object expected");l.sparseTensor=a.onnx.SparseTensorProto.fromObject(n.sparseTensor)}if(n.tp!=null){if(typeof n.tp!="object")throw TypeError(".onnx.AttributeProto.tp: object expected");l.tp=a.onnx.TypeProto.fromObject(n.tp)}if(n.floats){if(!Array.isArray(n.floats))throw TypeError(".onnx.AttributeProto.floats: array expected");l.floats=[];for(var u=0;u<n.floats.length;++u)l.floats[u]=Number(n.floats[u])}if(n.ints){if(!Array.isArray(n.ints))throw TypeError(".onnx.AttributeProto.ints: array expected");l.ints=[];for(var u=0;u<n.ints.length;++u)i.Long?(l.ints[u]=i.Long.fromValue(n.ints[u])).unsigned=!1:typeof n.ints[u]=="string"?l.ints[u]=parseInt(n.ints[u],10):typeof n.ints[u]=="number"?l.ints[u]=n.ints[u]:typeof n.ints[u]=="object"&&(l.ints[u]=new i.LongBits(n.ints[u].low>>>0,n.ints[u].high>>>0).toNumber())}if(n.strings){if(!Array.isArray(n.strings))throw TypeError(".onnx.AttributeProto.strings: array expected");l.strings=[];for(var u=0;u<n.strings.length;++u)typeof n.strings[u]=="string"?i.base64.decode(n.strings[u],l.strings[u]=i.newBuffer(i.base64.length(n.strings[u])),0):n.strings[u].length>=0&&(l.strings[u]=n.strings[u])}if(n.tensors){if(!Array.isArray(n.tensors))throw TypeError(".onnx.AttributeProto.tensors: array expected");l.tensors=[];for(var u=0;u<n.tensors.length;++u){if(typeof n.tensors[u]!="object")throw TypeError(".onnx.AttributeProto.tensors: object expected");l.tensors[u]=a.onnx.TensorProto.fromObject(n.tensors[u])}}if(n.graphs){if(!Array.isArray(n.graphs))throw TypeError(".onnx.AttributeProto.graphs: array expected");l.graphs=[];for(var u=0;u<n.graphs.length;++u){if(typeof n.graphs[u]!="object")throw TypeError(".onnx.AttributeProto.graphs: object expected");l.graphs[u]=a.onnx.GraphProto.fromObject(n.graphs[u])}}if(n.sparseTensors){if(!Array.isArray(n.sparseTensors))throw TypeError(".onnx.AttributeProto.sparseTensors: array expected");l.sparseTensors=[];for(var u=0;u<n.sparseTensors.length;++u){if(typeof n.sparseTensors[u]!="object")throw TypeError(".onnx.AttributeProto.sparseTensors: object expected");l.sparseTensors[u]=a.onnx.SparseTensorProto.fromObject(n.sparseTensors[u])}}if(n.typeProtos){if(!Array.isArray(n.typeProtos))throw TypeError(".onnx.AttributeProto.typeProtos: array expected");l.typeProtos=[];for(var u=0;u<n.typeProtos.length;++u){if(typeof n.typeProtos[u]!="object")throw TypeError(".onnx.AttributeProto.typeProtos: object expected");l.typeProtos[u]=a.onnx.TypeProto.fromObject(n.typeProtos[u])}}return l},p.toObject=function(n,l){l||(l={});var u={};if((l.arrays||l.defaults)&&(u.floats=[],u.ints=[],u.strings=[],u.tensors=[],u.graphs=[],u.typeProtos=[],u.sparseTensors=[]),l.defaults){if(u.name="",u.f=0,i.Long){var c=new i.Long(0,0,!1);u.i=l.longs===String?c.toString():l.longs===Number?c.toNumber():c}else u.i=l.longs===String?"0":0;l.bytes===String?u.s="":(u.s=[],l.bytes!==Array&&(u.s=i.newBuffer(u.s))),u.t=null,u.g=null,u.docString="",u.tp=null,u.type=l.enums===String?"UNDEFINED":0,u.refAttrName="",u.sparseTensor=null}if(n.name!=null&&n.hasOwnProperty("name")&&(u.name=n.name),n.f!=null&&n.hasOwnProperty("f")&&(u.f=l.json&&!isFinite(n.f)?String(n.f):n.f),n.i!=null&&n.hasOwnProperty("i")&&(typeof n.i=="number"?u.i=l.longs===String?String(n.i):n.i:u.i=l.longs===String?i.Long.prototype.toString.call(n.i):l.longs===Number?new i.LongBits(n.i.low>>>0,n.i.high>>>0).toNumber():n.i),n.s!=null&&n.hasOwnProperty("s")&&(u.s=l.bytes===String?i.base64.encode(n.s,0,n.s.length):l.bytes===Array?Array.prototype.slice.call(n.s):n.s),n.t!=null&&n.hasOwnProperty("t")&&(u.t=a.onnx.TensorProto.toObject(n.t,l)),n.g!=null&&n.hasOwnProperty("g")&&(u.g=a.onnx.GraphProto.toObject(n.g,l)),n.floats&&n.floats.length){u.floats=[];for(var h=0;h<n.floats.length;++h)u.floats[h]=l.json&&!isFinite(n.floats[h])?String(n.floats[h]):n.floats[h]}if(n.ints&&n.ints.length){u.ints=[];for(var h=0;h<n.ints.length;++h)typeof n.ints[h]=="number"?u.ints[h]=l.longs===String?String(n.ints[h]):n.ints[h]:u.ints[h]=l.longs===String?i.Long.prototype.toString.call(n.ints[h]):l.longs===Number?new i.LongBits(n.ints[h].low>>>0,n.ints[h].high>>>0).toNumber():n.ints[h]}if(n.strings&&n.strings.length){u.strings=[];for(var h=0;h<n.strings.length;++h)u.strings[h]=l.bytes===String?i.base64.encode(n.strings[h],0,n.strings[h].length):l.bytes===Array?Array.prototype.slice.call(n.strings[h]):n.strings[h]}if(n.tensors&&n.tensors.length){u.tensors=[];for(var h=0;h<n.tensors.length;++h)u.tensors[h]=a.onnx.TensorProto.toObject(n.tensors[h],l)}if(n.graphs&&n.graphs.length){u.graphs=[];for(var h=0;h<n.graphs.length;++h)u.graphs[h]=a.onnx.GraphProto.toObject(n.graphs[h],l)}if(n.docString!=null&&n.hasOwnProperty("docString")&&(u.docString=n.docString),n.tp!=null&&n.hasOwnProperty("tp")&&(u.tp=a.onnx.TypeProto.toObject(n.tp,l)),n.typeProtos&&n.typeProtos.length){u.typeProtos=[];for(var h=0;h<n.typeProtos.length;++h)u.typeProtos[h]=a.onnx.TypeProto.toObject(n.typeProtos[h],l)}if(n.type!=null&&n.hasOwnProperty("type")&&(u.type=l.enums===String?a.onnx.AttributeProto.AttributeType[n.type]===void 0?n.type:a.onnx.AttributeProto.AttributeType[n.type]:n.type),n.refAttrName!=null&&n.hasOwnProperty("refAttrName")&&(u.refAttrName=n.refAttrName),n.sparseTensor!=null&&n.hasOwnProperty("sparseTensor")&&(u.sparseTensor=a.onnx.SparseTensorProto.toObject(n.sparseTensor,l)),n.sparseTensors&&n.sparseTensors.length){u.sparseTensors=[];for(var h=0;h<n.sparseTensors.length;++h)u.sparseTensors[h]=a.onnx.SparseTensorProto.toObject(n.sparseTensors[h],l)}return u},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.AttributeProto"},p.AttributeType=function(){var n={},l=Object.create(n);return l[n[0]="UNDEFINED"]=0,l[n[1]="FLOAT"]=1,l[n[2]="INT"]=2,l[n[3]="STRING"]=3,l[n[4]="TENSOR"]=4,l[n[5]="GRAPH"]=5,l[n[11]="SPARSE_TENSOR"]=11,l[n[13]="TYPE_PROTO"]=13,l[n[6]="FLOATS"]=6,l[n[7]="INTS"]=7,l[n[8]="STRINGS"]=8,l[n[9]="TENSORS"]=9,l[n[10]="GRAPHS"]=10,l[n[12]="SPARSE_TENSORS"]=12,l[n[14]="TYPE_PROTOS"]=14,l}(),p}(),d.ValueInfoProto=function(){function p(n){if(n)for(var l=Object.keys(n),u=0;u<l.length;++u)n[l[u]]!=null&&(this[l[u]]=n[l[u]])}return p.prototype.name="",p.prototype.type=null,p.prototype.docString="",p.create=function(n){return new p(n)},p.encode=function(n,l){return l||(l=s.create()),n.name!=null&&Object.hasOwnProperty.call(n,"name")&&l.uint32(10).string(n.name),n.type!=null&&Object.hasOwnProperty.call(n,"type")&&a.onnx.TypeProto.encode(n.type,l.uint32(18).fork()).ldelim(),n.docString!=null&&Object.hasOwnProperty.call(n,"docString")&&l.uint32(26).string(n.docString),l},p.encodeDelimited=function(n,l){return this.encode(n,l).ldelim()},p.decode=function(n,l){n instanceof o||(n=o.create(n));for(var u=l===void 0?n.len:n.pos+l,c=new a.onnx.ValueInfoProto;n.pos<u;){var h=n.uint32();switch(h>>>3){case 1:{c.name=n.string();break}case 2:{c.type=a.onnx.TypeProto.decode(n,n.uint32());break}case 3:{c.docString=n.string();break}default:n.skipType(h&7);break}}return c},p.decodeDelimited=function(n){return n instanceof o||(n=new o(n)),this.decode(n,n.uint32())},p.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.name!=null&&n.hasOwnProperty("name")&&!i.isString(n.name))return"name: string expected";if(n.type!=null&&n.hasOwnProperty("type")){var l=a.onnx.TypeProto.verify(n.type);if(l)return"type."+l}return n.docString!=null&&n.hasOwnProperty("docString")&&!i.isString(n.docString)?"docString: string expected":null},p.fromObject=function(n){if(n instanceof a.onnx.ValueInfoProto)return n;var l=new a.onnx.ValueInfoProto;if(n.name!=null&&(l.name=String(n.name)),n.type!=null){if(typeof n.type!="object")throw TypeError(".onnx.ValueInfoProto.type: object expected");l.type=a.onnx.TypeProto.fromObject(n.type)}return n.docString!=null&&(l.docString=String(n.docString)),l},p.toObject=function(n,l){l||(l={});var u={};return l.defaults&&(u.name="",u.type=null,u.docString=""),n.name!=null&&n.hasOwnProperty("name")&&(u.name=n.name),n.type!=null&&n.hasOwnProperty("type")&&(u.type=a.onnx.TypeProto.toObject(n.type,l)),n.docString!=null&&n.hasOwnProperty("docString")&&(u.docString=n.docString),u},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.ValueInfoProto"},p}(),d.NodeProto=function(){function p(n){if(this.input=[],this.output=[],this.attribute=[],n)for(var l=Object.keys(n),u=0;u<l.length;++u)n[l[u]]!=null&&(this[l[u]]=n[l[u]])}return p.prototype.input=i.emptyArray,p.prototype.output=i.emptyArray,p.prototype.name="",p.prototype.opType="",p.prototype.domain="",p.prototype.attribute=i.emptyArray,p.prototype.docString="",p.create=function(n){return new p(n)},p.encode=function(n,l){if(l||(l=s.create()),n.input!=null&&n.input.length)for(var u=0;u<n.input.length;++u)l.uint32(10).string(n.input[u]);if(n.output!=null&&n.output.length)for(var u=0;u<n.output.length;++u)l.uint32(18).string(n.output[u]);if(n.name!=null&&Object.hasOwnProperty.call(n,"name")&&l.uint32(26).string(n.name),n.opType!=null&&Object.hasOwnProperty.call(n,"opType")&&l.uint32(34).string(n.opType),n.attribute!=null&&n.attribute.length)for(var u=0;u<n.attribute.length;++u)a.onnx.AttributeProto.encode(n.attribute[u],l.uint32(42).fork()).ldelim();return n.docString!=null&&Object.hasOwnProperty.call(n,"docString")&&l.uint32(50).string(n.docString),n.domain!=null&&Object.hasOwnProperty.call(n,"domain")&&l.uint32(58).string(n.domain),l},p.encodeDelimited=function(n,l){return this.encode(n,l).ldelim()},p.decode=function(n,l){n instanceof o||(n=o.create(n));for(var u=l===void 0?n.len:n.pos+l,c=new a.onnx.NodeProto;n.pos<u;){var h=n.uint32();switch(h>>>3){case 1:{c.input&&c.input.length||(c.input=[]),c.input.push(n.string());break}case 2:{c.output&&c.output.length||(c.output=[]),c.output.push(n.string());break}case 3:{c.name=n.string();break}case 4:{c.opType=n.string();break}case 7:{c.domain=n.string();break}case 5:{c.attribute&&c.attribute.length||(c.attribute=[]),c.attribute.push(a.onnx.AttributeProto.decode(n,n.uint32()));break}case 6:{c.docString=n.string();break}default:n.skipType(h&7);break}}return c},p.decodeDelimited=function(n){return n instanceof o||(n=new o(n)),this.decode(n,n.uint32())},p.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.input!=null&&n.hasOwnProperty("input")){if(!Array.isArray(n.input))return"input: array expected";for(var l=0;l<n.input.length;++l)if(!i.isString(n.input[l]))return"input: string[] expected"}if(n.output!=null&&n.hasOwnProperty("output")){if(!Array.isArray(n.output))return"output: array expected";for(var l=0;l<n.output.length;++l)if(!i.isString(n.output[l]))return"output: string[] expected"}if(n.name!=null&&n.hasOwnProperty("name")&&!i.isString(n.name))return"name: string expected";if(n.opType!=null&&n.hasOwnProperty("opType")&&!i.isString(n.opType))return"opType: string expected";if(n.domain!=null&&n.hasOwnProperty("domain")&&!i.isString(n.domain))return"domain: string expected";if(n.attribute!=null&&n.hasOwnProperty("attribute")){if(!Array.isArray(n.attribute))return"attribute: array expected";for(var l=0;l<n.attribute.length;++l){var u=a.onnx.AttributeProto.verify(n.attribute[l]);if(u)return"attribute."+u}}return n.docString!=null&&n.hasOwnProperty("docString")&&!i.isString(n.docString)?"docString: string expected":null},p.fromObject=function(n){if(n instanceof a.onnx.NodeProto)return n;var l=new a.onnx.NodeProto;if(n.input){if(!Array.isArray(n.input))throw TypeError(".onnx.NodeProto.input: array expected");l.input=[];for(var u=0;u<n.input.length;++u)l.input[u]=String(n.input[u])}if(n.output){if(!Array.isArray(n.output))throw TypeError(".onnx.NodeProto.output: array expected");l.output=[];for(var u=0;u<n.output.length;++u)l.output[u]=String(n.output[u])}if(n.name!=null&&(l.name=String(n.name)),n.opType!=null&&(l.opType=String(n.opType)),n.domain!=null&&(l.domain=String(n.domain)),n.attribute){if(!Array.isArray(n.attribute))throw TypeError(".onnx.NodeProto.attribute: array expected");l.attribute=[];for(var u=0;u<n.attribute.length;++u){if(typeof n.attribute[u]!="object")throw TypeError(".onnx.NodeProto.attribute: object expected");l.attribute[u]=a.onnx.AttributeProto.fromObject(n.attribute[u])}}return n.docString!=null&&(l.docString=String(n.docString)),l},p.toObject=function(n,l){l||(l={});var u={};if((l.arrays||l.defaults)&&(u.input=[],u.output=[],u.attribute=[]),l.defaults&&(u.name="",u.opType="",u.docString="",u.domain=""),n.input&&n.input.length){u.input=[];for(var c=0;c<n.input.length;++c)u.input[c]=n.input[c]}if(n.output&&n.output.length){u.output=[];for(var c=0;c<n.output.length;++c)u.output[c]=n.output[c]}if(n.name!=null&&n.hasOwnProperty("name")&&(u.name=n.name),n.opType!=null&&n.hasOwnProperty("opType")&&(u.opType=n.opType),n.attribute&&n.attribute.length){u.attribute=[];for(var c=0;c<n.attribute.length;++c)u.attribute[c]=a.onnx.AttributeProto.toObject(n.attribute[c],l)}return n.docString!=null&&n.hasOwnProperty("docString")&&(u.docString=n.docString),n.domain!=null&&n.hasOwnProperty("domain")&&(u.domain=n.domain),u},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.NodeProto"},p}(),d.TrainingInfoProto=function(){function p(n){if(this.initializationBinding=[],this.updateBinding=[],n)for(var l=Object.keys(n),u=0;u<l.length;++u)n[l[u]]!=null&&(this[l[u]]=n[l[u]])}return p.prototype.initialization=null,p.prototype.algorithm=null,p.prototype.initializationBinding=i.emptyArray,p.prototype.updateBinding=i.emptyArray,p.create=function(n){return new p(n)},p.encode=function(n,l){if(l||(l=s.create()),n.initialization!=null&&Object.hasOwnProperty.call(n,"initialization")&&a.onnx.GraphProto.encode(n.initialization,l.uint32(10).fork()).ldelim(),n.algorithm!=null&&Object.hasOwnProperty.call(n,"algorithm")&&a.onnx.GraphProto.encode(n.algorithm,l.uint32(18).fork()).ldelim(),n.initializationBinding!=null&&n.initializationBinding.length)for(var u=0;u<n.initializationBinding.length;++u)a.onnx.StringStringEntryProto.encode(n.initializationBinding[u],l.uint32(26).fork()).ldelim();if(n.updateBinding!=null&&n.updateBinding.length)for(var u=0;u<n.updateBinding.length;++u)a.onnx.StringStringEntryProto.encode(n.updateBinding[u],l.uint32(34).fork()).ldelim();return l},p.encodeDelimited=function(n,l){return this.encode(n,l).ldelim()},p.decode=function(n,l){n instanceof o||(n=o.create(n));for(var u=l===void 0?n.len:n.pos+l,c=new a.onnx.TrainingInfoProto;n.pos<u;){var h=n.uint32();switch(h>>>3){case 1:{c.initialization=a.onnx.GraphProto.decode(n,n.uint32());break}case 2:{c.algorithm=a.onnx.GraphProto.decode(n,n.uint32());break}case 3:{c.initializationBinding&&c.initializationBinding.length||(c.initializationBinding=[]),c.initializationBinding.push(a.onnx.StringStringEntryProto.decode(n,n.uint32()));break}case 4:{c.updateBinding&&c.updateBinding.length||(c.updateBinding=[]),c.updateBinding.push(a.onnx.StringStringEntryProto.decode(n,n.uint32()));break}default:n.skipType(h&7);break}}return c},p.decodeDelimited=function(n){return n instanceof o||(n=new o(n)),this.decode(n,n.uint32())},p.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.initialization!=null&&n.hasOwnProperty("initialization")){var l=a.onnx.GraphProto.verify(n.initialization);if(l)return"initialization."+l}if(n.algorithm!=null&&n.hasOwnProperty("algorithm")){var l=a.onnx.GraphProto.verify(n.algorithm);if(l)return"algorithm."+l}if(n.initializationBinding!=null&&n.hasOwnProperty("initializationBinding")){if(!Array.isArray(n.initializationBinding))return"initializationBinding: array expected";for(var u=0;u<n.initializationBinding.length;++u){var l=a.onnx.StringStringEntryProto.verify(n.initializationBinding[u]);if(l)return"initializationBinding."+l}}if(n.updateBinding!=null&&n.hasOwnProperty("updateBinding")){if(!Array.isArray(n.updateBinding))return"updateBinding: array expected";for(var u=0;u<n.updateBinding.length;++u){var l=a.onnx.StringStringEntryProto.verify(n.updateBinding[u]);if(l)return"updateBinding."+l}}return null},p.fromObject=function(n){if(n instanceof a.onnx.TrainingInfoProto)return n;var l=new a.onnx.TrainingInfoProto;if(n.initialization!=null){if(typeof n.initialization!="object")throw TypeError(".onnx.TrainingInfoProto.initialization: object expected");l.initialization=a.onnx.GraphProto.fromObject(n.initialization)}if(n.algorithm!=null){if(typeof n.algorithm!="object")throw TypeError(".onnx.TrainingInfoProto.algorithm: object expected");l.algorithm=a.onnx.GraphProto.fromObject(n.algorithm)}if(n.initializationBinding){if(!Array.isArray(n.initializationBinding))throw TypeError(".onnx.TrainingInfoProto.initializationBinding: array expected");l.initializationBinding=[];for(var u=0;u<n.initializationBinding.length;++u){if(typeof n.initializationBinding[u]!="object")throw TypeError(".onnx.TrainingInfoProto.initializationBinding: object expected");l.initializationBinding[u]=a.onnx.StringStringEntryProto.fromObject(n.initializationBinding[u])}}if(n.updateBinding){if(!Array.isArray(n.updateBinding))throw TypeError(".onnx.TrainingInfoProto.updateBinding: array expected");l.updateBinding=[];for(var u=0;u<n.updateBinding.length;++u){if(typeof n.updateBinding[u]!="object")throw TypeError(".onnx.TrainingInfoProto.updateBinding: object expected");l.updateBinding[u]=a.onnx.StringStringEntryProto.fromObject(n.updateBinding[u])}}return l},p.toObject=function(n,l){l||(l={});var u={};if((l.arrays||l.defaults)&&(u.initializationBinding=[],u.updateBinding=[]),l.defaults&&(u.initialization=null,u.algorithm=null),n.initialization!=null&&n.hasOwnProperty("initialization")&&(u.initialization=a.onnx.GraphProto.toObject(n.initialization,l)),n.algorithm!=null&&n.hasOwnProperty("algorithm")&&(u.algorithm=a.onnx.GraphProto.toObject(n.algorithm,l)),n.initializationBinding&&n.initializationBinding.length){u.initializationBinding=[];for(var c=0;c<n.initializationBinding.length;++c)u.initializationBinding[c]=a.onnx.StringStringEntryProto.toObject(n.initializationBinding[c],l)}if(n.updateBinding&&n.updateBinding.length){u.updateBinding=[];for(var c=0;c<n.updateBinding.length;++c)u.updateBinding[c]=a.onnx.StringStringEntryProto.toObject(n.updateBinding[c],l)}return u},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.TrainingInfoProto"},p}(),d.ModelProto=function(){function p(n){if(this.opsetImport=[],this.metadataProps=[],this.trainingInfo=[],this.functions=[],n)for(var l=Object.keys(n),u=0;u<l.length;++u)n[l[u]]!=null&&(this[l[u]]=n[l[u]])}return p.prototype.irVersion=i.Long?i.Long.fromBits(0,0,!1):0,p.prototype.opsetImport=i.emptyArray,p.prototype.producerName="",p.prototype.producerVersion="",p.prototype.domain="",p.prototype.modelVersion=i.Long?i.Long.fromBits(0,0,!1):0,p.prototype.docString="",p.prototype.graph=null,p.prototype.metadataProps=i.emptyArray,p.prototype.trainingInfo=i.emptyArray,p.prototype.functions=i.emptyArray,p.create=function(n){return new p(n)},p.encode=function(n,l){if(l||(l=s.create()),n.irVersion!=null&&Object.hasOwnProperty.call(n,"irVersion")&&l.uint32(8).int64(n.irVersion),n.producerName!=null&&Object.hasOwnProperty.call(n,"producerName")&&l.uint32(18).string(n.producerName),n.producerVersion!=null&&Object.hasOwnProperty.call(n,"producerVersion")&&l.uint32(26).string(n.producerVersion),n.domain!=null&&Object.hasOwnProperty.call(n,"domain")&&l.uint32(34).string(n.domain),n.modelVersion!=null&&Object.hasOwnProperty.call(n,"modelVersion")&&l.uint32(40).int64(n.modelVersion),n.docString!=null&&Object.hasOwnProperty.call(n,"docString")&&l.uint32(50).string(n.docString),n.graph!=null&&Object.hasOwnProperty.call(n,"graph")&&a.onnx.GraphProto.encode(n.graph,l.uint32(58).fork()).ldelim(),n.opsetImport!=null&&n.opsetImport.length)for(var u=0;u<n.opsetImport.length;++u)a.onnx.OperatorSetIdProto.encode(n.opsetImport[u],l.uint32(66).fork()).ldelim();if(n.metadataProps!=null&&n.metadataProps.length)for(var u=0;u<n.metadataProps.length;++u)a.onnx.StringStringEntryProto.encode(n.metadataProps[u],l.uint32(114).fork()).ldelim();if(n.trainingInfo!=null&&n.trainingInfo.length)for(var u=0;u<n.trainingInfo.length;++u)a.onnx.TrainingInfoProto.encode(n.trainingInfo[u],l.uint32(162).fork()).ldelim();if(n.functions!=null&&n.functions.length)for(var u=0;u<n.functions.length;++u)a.onnx.FunctionProto.encode(n.functions[u],l.uint32(202).fork()).ldelim();return l},p.encodeDelimited=function(n,l){return this.encode(n,l).ldelim()},p.decode=function(n,l){n instanceof o||(n=o.create(n));for(var u=l===void 0?n.len:n.pos+l,c=new a.onnx.ModelProto;n.pos<u;){var h=n.uint32();switch(h>>>3){case 1:{c.irVersion=n.int64();break}case 8:{c.opsetImport&&c.opsetImport.length||(c.opsetImport=[]),c.opsetImport.push(a.onnx.OperatorSetIdProto.decode(n,n.uint32()));break}case 2:{c.producerName=n.string();break}case 3:{c.producerVersion=n.string();break}case 4:{c.domain=n.string();break}case 5:{c.modelVersion=n.int64();break}case 6:{c.docString=n.string();break}case 7:{c.graph=a.onnx.GraphProto.decode(n,n.uint32());break}case 14:{c.metadataProps&&c.metadataProps.length||(c.metadataProps=[]),c.metadataProps.push(a.onnx.StringStringEntryProto.decode(n,n.uint32()));break}case 20:{c.trainingInfo&&c.trainingInfo.length||(c.trainingInfo=[]),c.trainingInfo.push(a.onnx.TrainingInfoProto.decode(n,n.uint32()));break}case 25:{c.functions&&c.functions.length||(c.functions=[]),c.functions.push(a.onnx.FunctionProto.decode(n,n.uint32()));break}default:n.skipType(h&7);break}}return c},p.decodeDelimited=function(n){return n instanceof o||(n=new o(n)),this.decode(n,n.uint32())},p.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.irVersion!=null&&n.hasOwnProperty("irVersion")&&!i.isInteger(n.irVersion)&&!(n.irVersion&&i.isInteger(n.irVersion.low)&&i.isInteger(n.irVersion.high)))return"irVersion: integer|Long expected";if(n.opsetImport!=null&&n.hasOwnProperty("opsetImport")){if(!Array.isArray(n.opsetImport))return"opsetImport: array expected";for(var l=0;l<n.opsetImport.length;++l){var u=a.onnx.OperatorSetIdProto.verify(n.opsetImport[l]);if(u)return"opsetImport."+u}}if(n.producerName!=null&&n.hasOwnProperty("producerName")&&!i.isString(n.producerName))return"producerName: string expected";if(n.producerVersion!=null&&n.hasOwnProperty("producerVersion")&&!i.isString(n.producerVersion))return"producerVersion: string expected";if(n.domain!=null&&n.hasOwnProperty("domain")&&!i.isString(n.domain))return"domain: string expected";if(n.modelVersion!=null&&n.hasOwnProperty("modelVersion")&&!i.isInteger(n.modelVersion)&&!(n.modelVersion&&i.isInteger(n.modelVersion.low)&&i.isInteger(n.modelVersion.high)))return"modelVersion: integer|Long expected";if(n.docString!=null&&n.hasOwnProperty("docString")&&!i.isString(n.docString))return"docString: string expected";if(n.graph!=null&&n.hasOwnProperty("graph")){var u=a.onnx.GraphProto.verify(n.graph);if(u)return"graph."+u}if(n.metadataProps!=null&&n.hasOwnProperty("metadataProps")){if(!Array.isArray(n.metadataProps))return"metadataProps: array expected";for(var l=0;l<n.metadataProps.length;++l){var u=a.onnx.StringStringEntryProto.verify(n.metadataProps[l]);if(u)return"metadataProps."+u}}if(n.trainingInfo!=null&&n.hasOwnProperty("trainingInfo")){if(!Array.isArray(n.trainingInfo))return"trainingInfo: array expected";for(var l=0;l<n.trainingInfo.length;++l){var u=a.onnx.TrainingInfoProto.verify(n.trainingInfo[l]);if(u)return"trainingInfo."+u}}if(n.functions!=null&&n.hasOwnProperty("functions")){if(!Array.isArray(n.functions))return"functions: array expected";for(var l=0;l<n.functions.length;++l){var u=a.onnx.FunctionProto.verify(n.functions[l]);if(u)return"functions."+u}}return null},p.fromObject=function(n){if(n instanceof a.onnx.ModelProto)return n;var l=new a.onnx.ModelProto;if(n.irVersion!=null&&(i.Long?(l.irVersion=i.Long.fromValue(n.irVersion)).unsigned=!1:typeof n.irVersion=="string"?l.irVersion=parseInt(n.irVersion,10):typeof n.irVersion=="number"?l.irVersion=n.irVersion:typeof n.irVersion=="object"&&(l.irVersion=new i.LongBits(n.irVersion.low>>>0,n.irVersion.high>>>0).toNumber())),n.opsetImport){if(!Array.isArray(n.opsetImport))throw TypeError(".onnx.ModelProto.opsetImport: array expected");l.opsetImport=[];for(var u=0;u<n.opsetImport.length;++u){if(typeof n.opsetImport[u]!="object")throw TypeError(".onnx.ModelProto.opsetImport: object expected");l.opsetImport[u]=a.onnx.OperatorSetIdProto.fromObject(n.opsetImport[u])}}if(n.producerName!=null&&(l.producerName=String(n.producerName)),n.producerVersion!=null&&(l.producerVersion=String(n.producerVersion)),n.domain!=null&&(l.domain=String(n.domain)),n.modelVersion!=null&&(i.Long?(l.modelVersion=i.Long.fromValue(n.modelVersion)).unsigned=!1:typeof n.modelVersion=="string"?l.modelVersion=parseInt(n.modelVersion,10):typeof n.modelVersion=="number"?l.modelVersion=n.modelVersion:typeof n.modelVersion=="object"&&(l.modelVersion=new i.LongBits(n.modelVersion.low>>>0,n.modelVersion.high>>>0).toNumber())),n.docString!=null&&(l.docString=String(n.docString)),n.graph!=null){if(typeof n.graph!="object")throw TypeError(".onnx.ModelProto.graph: object expected");l.graph=a.onnx.GraphProto.fromObject(n.graph)}if(n.metadataProps){if(!Array.isArray(n.metadataProps))throw TypeError(".onnx.ModelProto.metadataProps: array expected");l.metadataProps=[];for(var u=0;u<n.metadataProps.length;++u){if(typeof n.metadataProps[u]!="object")throw TypeError(".onnx.ModelProto.metadataProps: object expected");l.metadataProps[u]=a.onnx.StringStringEntryProto.fromObject(n.metadataProps[u])}}if(n.trainingInfo){if(!Array.isArray(n.trainingInfo))throw TypeError(".onnx.ModelProto.trainingInfo: array expected");l.trainingInfo=[];for(var u=0;u<n.trainingInfo.length;++u){if(typeof n.trainingInfo[u]!="object")throw TypeError(".onnx.ModelProto.trainingInfo: object expected");l.trainingInfo[u]=a.onnx.TrainingInfoProto.fromObject(n.trainingInfo[u])}}if(n.functions){if(!Array.isArray(n.functions))throw TypeError(".onnx.ModelProto.functions: array expected");l.functions=[];for(var u=0;u<n.functions.length;++u){if(typeof n.functions[u]!="object")throw TypeError(".onnx.ModelProto.functions: object expected");l.functions[u]=a.onnx.FunctionProto.fromObject(n.functions[u])}}return l},p.toObject=function(n,l){l||(l={});var u={};if((l.arrays||l.defaults)&&(u.opsetImport=[],u.metadataProps=[],u.trainingInfo=[],u.functions=[]),l.defaults){if(i.Long){var c=new i.Long(0,0,!1);u.irVersion=l.longs===String?c.toString():l.longs===Number?c.toNumber():c}else u.irVersion=l.longs===String?"0":0;if(u.producerName="",u.producerVersion="",u.domain="",i.Long){var c=new i.Long(0,0,!1);u.modelVersion=l.longs===String?c.toString():l.longs===Number?c.toNumber():c}else u.modelVersion=l.longs===String?"0":0;u.docString="",u.graph=null}if(n.irVersion!=null&&n.hasOwnProperty("irVersion")&&(typeof n.irVersion=="number"?u.irVersion=l.longs===String?String(n.irVersion):n.irVersion:u.irVersion=l.longs===String?i.Long.prototype.toString.call(n.irVersion):l.longs===Number?new i.LongBits(n.irVersion.low>>>0,n.irVersion.high>>>0).toNumber():n.irVersion),n.producerName!=null&&n.hasOwnProperty("producerName")&&(u.producerName=n.producerName),n.producerVersion!=null&&n.hasOwnProperty("producerVersion")&&(u.producerVersion=n.producerVersion),n.domain!=null&&n.hasOwnProperty("domain")&&(u.domain=n.domain),n.modelVersion!=null&&n.hasOwnProperty("modelVersion")&&(typeof n.modelVersion=="number"?u.modelVersion=l.longs===String?String(n.modelVersion):n.modelVersion:u.modelVersion=l.longs===String?i.Long.prototype.toString.call(n.modelVersion):l.longs===Number?new i.LongBits(n.modelVersion.low>>>0,n.modelVersion.high>>>0).toNumber():n.modelVersion),n.docString!=null&&n.hasOwnProperty("docString")&&(u.docString=n.docString),n.graph!=null&&n.hasOwnProperty("graph")&&(u.graph=a.onnx.GraphProto.toObject(n.graph,l)),n.opsetImport&&n.opsetImport.length){u.opsetImport=[];for(var h=0;h<n.opsetImport.length;++h)u.opsetImport[h]=a.onnx.OperatorSetIdProto.toObject(n.opsetImport[h],l)}if(n.metadataProps&&n.metadataProps.length){u.metadataProps=[];for(var h=0;h<n.metadataProps.length;++h)u.metadataProps[h]=a.onnx.StringStringEntryProto.toObject(n.metadataProps[h],l)}if(n.trainingInfo&&n.trainingInfo.length){u.trainingInfo=[];for(var h=0;h<n.trainingInfo.length;++h)u.trainingInfo[h]=a.onnx.TrainingInfoProto.toObject(n.trainingInfo[h],l)}if(n.functions&&n.functions.length){u.functions=[];for(var h=0;h<n.functions.length;++h)u.functions[h]=a.onnx.FunctionProto.toObject(n.functions[h],l)}return u},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.ModelProto"},p}(),d.StringStringEntryProto=function(){function p(n){if(n)for(var l=Object.keys(n),u=0;u<l.length;++u)n[l[u]]!=null&&(this[l[u]]=n[l[u]])}return p.prototype.key="",p.prototype.value="",p.create=function(n){return new p(n)},p.encode=function(n,l){return l||(l=s.create()),n.key!=null&&Object.hasOwnProperty.call(n,"key")&&l.uint32(10).string(n.key),n.value!=null&&Object.hasOwnProperty.call(n,"value")&&l.uint32(18).string(n.value),l},p.encodeDelimited=function(n,l){return this.encode(n,l).ldelim()},p.decode=function(n,l){n instanceof o||(n=o.create(n));for(var u=l===void 0?n.len:n.pos+l,c=new a.onnx.StringStringEntryProto;n.pos<u;){var h=n.uint32();switch(h>>>3){case 1:{c.key=n.string();break}case 2:{c.value=n.string();break}default:n.skipType(h&7);break}}return c},p.decodeDelimited=function(n){return n instanceof o||(n=new o(n)),this.decode(n,n.uint32())},p.verify=function(n){return typeof n!="object"||n===null?"object expected":n.key!=null&&n.hasOwnProperty("key")&&!i.isString(n.key)?"key: string expected":n.value!=null&&n.hasOwnProperty("value")&&!i.isString(n.value)?"value: string expected":null},p.fromObject=function(n){if(n instanceof a.onnx.StringStringEntryProto)return n;var l=new a.onnx.StringStringEntryProto;return n.key!=null&&(l.key=String(n.key)),n.value!=null&&(l.value=String(n.value)),l},p.toObject=function(n,l){l||(l={});var u={};return l.defaults&&(u.key="",u.value=""),n.key!=null&&n.hasOwnProperty("key")&&(u.key=n.key),n.value!=null&&n.hasOwnProperty("value")&&(u.value=n.value),u},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.StringStringEntryProto"},p}(),d.TensorAnnotation=function(){function p(n){if(this.quantParameterTensorNames=[],n)for(var l=Object.keys(n),u=0;u<l.length;++u)n[l[u]]!=null&&(this[l[u]]=n[l[u]])}return p.prototype.tensorName="",p.prototype.quantParameterTensorNames=i.emptyArray,p.create=function(n){return new p(n)},p.encode=function(n,l){if(l||(l=s.create()),n.tensorName!=null&&Object.hasOwnProperty.call(n,"tensorName")&&l.uint32(10).string(n.tensorName),n.quantParameterTensorNames!=null&&n.quantParameterTensorNames.length)for(var u=0;u<n.quantParameterTensorNames.length;++u)a.onnx.StringStringEntryProto.encode(n.quantParameterTensorNames[u],l.uint32(18).fork()).ldelim();return l},p.encodeDelimited=function(n,l){return this.encode(n,l).ldelim()},p.decode=function(n,l){n instanceof o||(n=o.create(n));for(var u=l===void 0?n.len:n.pos+l,c=new a.onnx.TensorAnnotation;n.pos<u;){var h=n.uint32();switch(h>>>3){case 1:{c.tensorName=n.string();break}case 2:{c.quantParameterTensorNames&&c.quantParameterTensorNames.length||(c.quantParameterTensorNames=[]),c.quantParameterTensorNames.push(a.onnx.StringStringEntryProto.decode(n,n.uint32()));break}default:n.skipType(h&7);break}}return c},p.decodeDelimited=function(n){return n instanceof o||(n=new o(n)),this.decode(n,n.uint32())},p.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.tensorName!=null&&n.hasOwnProperty("tensorName")&&!i.isString(n.tensorName))return"tensorName: string expected";if(n.quantParameterTensorNames!=null&&n.hasOwnProperty("quantParameterTensorNames")){if(!Array.isArray(n.quantParameterTensorNames))return"quantParameterTensorNames: array expected";for(var l=0;l<n.quantParameterTensorNames.length;++l){var u=a.onnx.StringStringEntryProto.verify(n.quantParameterTensorNames[l]);if(u)return"quantParameterTensorNames."+u}}return null},p.fromObject=function(n){if(n instanceof a.onnx.TensorAnnotation)return n;var l=new a.onnx.TensorAnnotation;if(n.tensorName!=null&&(l.tensorName=String(n.tensorName)),n.quantParameterTensorNames){if(!Array.isArray(n.quantParameterTensorNames))throw TypeError(".onnx.TensorAnnotation.quantParameterTensorNames: array expected");l.quantParameterTensorNames=[];for(var u=0;u<n.quantParameterTensorNames.length;++u){if(typeof n.quantParameterTensorNames[u]!="object")throw TypeError(".onnx.TensorAnnotation.quantParameterTensorNames: object expected");l.quantParameterTensorNames[u]=a.onnx.StringStringEntryProto.fromObject(n.quantParameterTensorNames[u])}}return l},p.toObject=function(n,l){l||(l={});var u={};if((l.arrays||l.defaults)&&(u.quantParameterTensorNames=[]),l.defaults&&(u.tensorName=""),n.tensorName!=null&&n.hasOwnProperty("tensorName")&&(u.tensorName=n.tensorName),n.quantParameterTensorNames&&n.quantParameterTensorNames.length){u.quantParameterTensorNames=[];for(var c=0;c<n.quantParameterTensorNames.length;++c)u.quantParameterTensorNames[c]=a.onnx.StringStringEntryProto.toObject(n.quantParameterTensorNames[c],l)}return u},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.TensorAnnotation"},p}(),d.GraphProto=function(){function p(n){if(this.node=[],this.initializer=[],this.sparseInitializer=[],this.input=[],this.output=[],this.valueInfo=[],this.quantizationAnnotation=[],n)for(var l=Object.keys(n),u=0;u<l.length;++u)n[l[u]]!=null&&(this[l[u]]=n[l[u]])}return p.prototype.node=i.emptyArray,p.prototype.name="",p.prototype.initializer=i.emptyArray,p.prototype.sparseInitializer=i.emptyArray,p.prototype.docString="",p.prototype.input=i.emptyArray,p.prototype.output=i.emptyArray,p.prototype.valueInfo=i.emptyArray,p.prototype.quantizationAnnotation=i.emptyArray,p.create=function(n){return new p(n)},p.encode=function(n,l){if(l||(l=s.create()),n.node!=null&&n.node.length)for(var u=0;u<n.node.length;++u)a.onnx.NodeProto.encode(n.node[u],l.uint32(10).fork()).ldelim();if(n.name!=null&&Object.hasOwnProperty.call(n,"name")&&l.uint32(18).string(n.name),n.initializer!=null&&n.initializer.length)for(var u=0;u<n.initializer.length;++u)a.onnx.TensorProto.encode(n.initializer[u],l.uint32(42).fork()).ldelim();if(n.docString!=null&&Object.hasOwnProperty.call(n,"docString")&&l.uint32(82).string(n.docString),n.input!=null&&n.input.length)for(var u=0;u<n.input.length;++u)a.onnx.ValueInfoProto.encode(n.input[u],l.uint32(90).fork()).ldelim();if(n.output!=null&&n.output.length)for(var u=0;u<n.output.length;++u)a.onnx.ValueInfoProto.encode(n.output[u],l.uint32(98).fork()).ldelim();if(n.valueInfo!=null&&n.valueInfo.length)for(var u=0;u<n.valueInfo.length;++u)a.onnx.ValueInfoProto.encode(n.valueInfo[u],l.uint32(106).fork()).ldelim();if(n.quantizationAnnotation!=null&&n.quantizationAnnotation.length)for(var u=0;u<n.quantizationAnnotation.length;++u)a.onnx.TensorAnnotation.encode(n.quantizationAnnotation[u],l.uint32(114).fork()).ldelim();if(n.sparseInitializer!=null&&n.sparseInitializer.length)for(var u=0;u<n.sparseInitializer.length;++u)a.onnx.SparseTensorProto.encode(n.sparseInitializer[u],l.uint32(122).fork()).ldelim();return l},p.encodeDelimited=function(n,l){return this.encode(n,l).ldelim()},p.decode=function(n,l){n instanceof o||(n=o.create(n));for(var u=l===void 0?n.len:n.pos+l,c=new a.onnx.GraphProto;n.pos<u;){var h=n.uint32();switch(h>>>3){case 1:{c.node&&c.node.length||(c.node=[]),c.node.push(a.onnx.NodeProto.decode(n,n.uint32()));break}case 2:{c.name=n.string();break}case 5:{c.initializer&&c.initializer.length||(c.initializer=[]),c.initializer.push(a.onnx.TensorProto.decode(n,n.uint32()));break}case 15:{c.sparseInitializer&&c.sparseInitializer.length||(c.sparseInitializer=[]),c.sparseInitializer.push(a.onnx.SparseTensorProto.decode(n,n.uint32()));break}case 10:{c.docString=n.string();break}case 11:{c.input&&c.input.length||(c.input=[]),c.input.push(a.onnx.ValueInfoProto.decode(n,n.uint32()));break}case 12:{c.output&&c.output.length||(c.output=[]),c.output.push(a.onnx.ValueInfoProto.decode(n,n.uint32()));break}case 13:{c.valueInfo&&c.valueInfo.length||(c.valueInfo=[]),c.valueInfo.push(a.onnx.ValueInfoProto.decode(n,n.uint32()));break}case 14:{c.quantizationAnnotation&&c.quantizationAnnotation.length||(c.quantizationAnnotation=[]),c.quantizationAnnotation.push(a.onnx.TensorAnnotation.decode(n,n.uint32()));break}default:n.skipType(h&7);break}}return c},p.decodeDelimited=function(n){return n instanceof o||(n=new o(n)),this.decode(n,n.uint32())},p.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.node!=null&&n.hasOwnProperty("node")){if(!Array.isArray(n.node))return"node: array expected";for(var l=0;l<n.node.length;++l){var u=a.onnx.NodeProto.verify(n.node[l]);if(u)return"node."+u}}if(n.name!=null&&n.hasOwnProperty("name")&&!i.isString(n.name))return"name: string expected";if(n.initializer!=null&&n.hasOwnProperty("initializer")){if(!Array.isArray(n.initializer))return"initializer: array expected";for(var l=0;l<n.initializer.length;++l){var u=a.onnx.TensorProto.verify(n.initializer[l]);if(u)return"initializer."+u}}if(n.sparseInitializer!=null&&n.hasOwnProperty("sparseInitializer")){if(!Array.isArray(n.sparseInitializer))return"sparseInitializer: array expected";for(var l=0;l<n.sparseInitializer.length;++l){var u=a.onnx.SparseTensorProto.verify(n.sparseInitializer[l]);if(u)return"sparseInitializer."+u}}if(n.docString!=null&&n.hasOwnProperty("docString")&&!i.isString(n.docString))return"docString: string expected";if(n.input!=null&&n.hasOwnProperty("input")){if(!Array.isArray(n.input))return"input: array expected";for(var l=0;l<n.input.length;++l){var u=a.onnx.ValueInfoProto.verify(n.input[l]);if(u)return"input."+u}}if(n.output!=null&&n.hasOwnProperty("output")){if(!Array.isArray(n.output))return"output: array expected";for(var l=0;l<n.output.length;++l){var u=a.onnx.ValueInfoProto.verify(n.output[l]);if(u)return"output."+u}}if(n.valueInfo!=null&&n.hasOwnProperty("valueInfo")){if(!Array.isArray(n.valueInfo))return"valueInfo: array expected";for(var l=0;l<n.valueInfo.length;++l){var u=a.onnx.ValueInfoProto.verify(n.valueInfo[l]);if(u)return"valueInfo."+u}}if(n.quantizationAnnotation!=null&&n.hasOwnProperty("quantizationAnnotation")){if(!Array.isArray(n.quantizationAnnotation))return"quantizationAnnotation: array expected";for(var l=0;l<n.quantizationAnnotation.length;++l){var u=a.onnx.TensorAnnotation.verify(n.quantizationAnnotation[l]);if(u)return"quantizationAnnotation."+u}}return null},p.fromObject=function(n){if(n instanceof a.onnx.GraphProto)return n;var l=new a.onnx.GraphProto;if(n.node){if(!Array.isArray(n.node))throw TypeError(".onnx.GraphProto.node: array expected");l.node=[];for(var u=0;u<n.node.length;++u){if(typeof n.node[u]!="object")throw TypeError(".onnx.GraphProto.node: object expected");l.node[u]=a.onnx.NodeProto.fromObject(n.node[u])}}if(n.name!=null&&(l.name=String(n.name)),n.initializer){if(!Array.isArray(n.initializer))throw TypeError(".onnx.GraphProto.initializer: array expected");l.initializer=[];for(var u=0;u<n.initializer.length;++u){if(typeof n.initializer[u]!="object")throw TypeError(".onnx.GraphProto.initializer: object expected");l.initializer[u]=a.onnx.TensorProto.fromObject(n.initializer[u])}}if(n.sparseInitializer){if(!Array.isArray(n.sparseInitializer))throw TypeError(".onnx.GraphProto.sparseInitializer: array expected");l.sparseInitializer=[];for(var u=0;u<n.sparseInitializer.length;++u){if(typeof n.sparseInitializer[u]!="object")throw TypeError(".onnx.GraphProto.sparseInitializer: object expected");l.sparseInitializer[u]=a.onnx.SparseTensorProto.fromObject(n.sparseInitializer[u])}}if(n.docString!=null&&(l.docString=String(n.docString)),n.input){if(!Array.isArray(n.input))throw TypeError(".onnx.GraphProto.input: array expected");l.input=[];for(var u=0;u<n.input.length;++u){if(typeof n.input[u]!="object")throw TypeError(".onnx.GraphProto.input: object expected");l.input[u]=a.onnx.ValueInfoProto.fromObject(n.input[u])}}if(n.output){if(!Array.isArray(n.output))throw TypeError(".onnx.GraphProto.output: array expected");l.output=[];for(var u=0;u<n.output.length;++u){if(typeof n.output[u]!="object")throw TypeError(".onnx.GraphProto.output: object expected");l.output[u]=a.onnx.ValueInfoProto.fromObject(n.output[u])}}if(n.valueInfo){if(!Array.isArray(n.valueInfo))throw TypeError(".onnx.GraphProto.valueInfo: array expected");l.valueInfo=[];for(var u=0;u<n.valueInfo.length;++u){if(typeof n.valueInfo[u]!="object")throw TypeError(".onnx.GraphProto.valueInfo: object expected");l.valueInfo[u]=a.onnx.ValueInfoProto.fromObject(n.valueInfo[u])}}if(n.quantizationAnnotation){if(!Array.isArray(n.quantizationAnnotation))throw TypeError(".onnx.GraphProto.quantizationAnnotation: array expected");l.quantizationAnnotation=[];for(var u=0;u<n.quantizationAnnotation.length;++u){if(typeof n.quantizationAnnotation[u]!="object")throw TypeError(".onnx.GraphProto.quantizationAnnotation: object expected");l.quantizationAnnotation[u]=a.onnx.TensorAnnotation.fromObject(n.quantizationAnnotation[u])}}return l},p.toObject=function(n,l){l||(l={});var u={};if((l.arrays||l.defaults)&&(u.node=[],u.initializer=[],u.input=[],u.output=[],u.valueInfo=[],u.quantizationAnnotation=[],u.sparseInitializer=[]),l.defaults&&(u.name="",u.docString=""),n.node&&n.node.length){u.node=[];for(var c=0;c<n.node.length;++c)u.node[c]=a.onnx.NodeProto.toObject(n.node[c],l)}if(n.name!=null&&n.hasOwnProperty("name")&&(u.name=n.name),n.initializer&&n.initializer.length){u.initializer=[];for(var c=0;c<n.initializer.length;++c)u.initializer[c]=a.onnx.TensorProto.toObject(n.initializer[c],l)}if(n.docString!=null&&n.hasOwnProperty("docString")&&(u.docString=n.docString),n.input&&n.input.length){u.input=[];for(var c=0;c<n.input.length;++c)u.input[c]=a.onnx.ValueInfoProto.toObject(n.input[c],l)}if(n.output&&n.output.length){u.output=[];for(var c=0;c<n.output.length;++c)u.output[c]=a.onnx.ValueInfoProto.toObject(n.output[c],l)}if(n.valueInfo&&n.valueInfo.length){u.valueInfo=[];for(var c=0;c<n.valueInfo.length;++c)u.valueInfo[c]=a.onnx.ValueInfoProto.toObject(n.valueInfo[c],l)}if(n.quantizationAnnotation&&n.quantizationAnnotation.length){u.quantizationAnnotation=[];for(var c=0;c<n.quantizationAnnotation.length;++c)u.quantizationAnnotation[c]=a.onnx.TensorAnnotation.toObject(n.quantizationAnnotation[c],l)}if(n.sparseInitializer&&n.sparseInitializer.length){u.sparseInitializer=[];for(var c=0;c<n.sparseInitializer.length;++c)u.sparseInitializer[c]=a.onnx.SparseTensorProto.toObject(n.sparseInitializer[c],l)}return u},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.GraphProto"},p}(),d.TensorProto=function(){function p(n){if(this.dims=[],this.floatData=[],this.int32Data=[],this.stringData=[],this.int64Data=[],this.externalData=[],this.doubleData=[],this.uint64Data=[],n)for(var l=Object.keys(n),u=0;u<l.length;++u)n[l[u]]!=null&&(this[l[u]]=n[l[u]])}return p.prototype.dims=i.emptyArray,p.prototype.dataType=0,p.prototype.segment=null,p.prototype.floatData=i.emptyArray,p.prototype.int32Data=i.emptyArray,p.prototype.stringData=i.emptyArray,p.prototype.int64Data=i.emptyArray,p.prototype.name="",p.prototype.docString="",p.prototype.rawData=i.newBuffer([]),p.prototype.externalData=i.emptyArray,p.prototype.dataLocation=0,p.prototype.doubleData=i.emptyArray,p.prototype.uint64Data=i.emptyArray,p.create=function(n){return new p(n)},p.encode=function(n,l){if(l||(l=s.create()),n.dims!=null&&n.dims.length){l.uint32(10).fork();for(var u=0;u<n.dims.length;++u)l.int64(n.dims[u]);l.ldelim()}if(n.dataType!=null&&Object.hasOwnProperty.call(n,"dataType")&&l.uint32(16).int32(n.dataType),n.segment!=null&&Object.hasOwnProperty.call(n,"segment")&&a.onnx.TensorProto.Segment.encode(n.segment,l.uint32(26).fork()).ldelim(),n.floatData!=null&&n.floatData.length){l.uint32(34).fork();for(var u=0;u<n.floatData.length;++u)l.float(n.floatData[u]);l.ldelim()}if(n.int32Data!=null&&n.int32Data.length){l.uint32(42).fork();for(var u=0;u<n.int32Data.length;++u)l.int32(n.int32Data[u]);l.ldelim()}if(n.stringData!=null&&n.stringData.length)for(var u=0;u<n.stringData.length;++u)l.uint32(50).bytes(n.stringData[u]);if(n.int64Data!=null&&n.int64Data.length){l.uint32(58).fork();for(var u=0;u<n.int64Data.length;++u)l.int64(n.int64Data[u]);l.ldelim()}if(n.name!=null&&Object.hasOwnProperty.call(n,"name")&&l.uint32(66).string(n.name),n.rawData!=null&&Object.hasOwnProperty.call(n,"rawData")&&l.uint32(74).bytes(n.rawData),n.doubleData!=null&&n.doubleData.length){l.uint32(82).fork();for(var u=0;u<n.doubleData.length;++u)l.double(n.doubleData[u]);l.ldelim()}if(n.uint64Data!=null&&n.uint64Data.length){l.uint32(90).fork();for(var u=0;u<n.uint64Data.length;++u)l.uint64(n.uint64Data[u]);l.ldelim()}if(n.docString!=null&&Object.hasOwnProperty.call(n,"docString")&&l.uint32(98).string(n.docString),n.externalData!=null&&n.externalData.length)for(var u=0;u<n.externalData.length;++u)a.onnx.StringStringEntryProto.encode(n.externalData[u],l.uint32(106).fork()).ldelim();return n.dataLocation!=null&&Object.hasOwnProperty.call(n,"dataLocation")&&l.uint32(112).int32(n.dataLocation),l},p.encodeDelimited=function(n,l){return this.encode(n,l).ldelim()},p.decode=function(n,l){n instanceof o||(n=o.create(n));for(var u=l===void 0?n.len:n.pos+l,c=new a.onnx.TensorProto;n.pos<u;){var h=n.uint32();switch(h>>>3){case 1:{if(c.dims&&c.dims.length||(c.dims=[]),(h&7)===2)for(var f=n.uint32()+n.pos;n.pos<f;)c.dims.push(n.int64());else c.dims.push(n.int64());break}case 2:{c.dataType=n.int32();break}case 3:{c.segment=a.onnx.TensorProto.Segment.decode(n,n.uint32());break}case 4:{if(c.floatData&&c.floatData.length||(c.floatData=[]),(h&7)===2)for(var f=n.uint32()+n.pos;n.pos<f;)c.floatData.push(n.float());else c.floatData.push(n.float());break}case 5:{if(c.int32Data&&c.int32Data.length||(c.int32Data=[]),(h&7)===2)for(var f=n.uint32()+n.pos;n.pos<f;)c.int32Data.push(n.int32());else c.int32Data.push(n.int32());break}case 6:{c.stringData&&c.stringData.length||(c.stringData=[]),c.stringData.push(n.bytes());break}case 7:{if(c.int64Data&&c.int64Data.length||(c.int64Data=[]),(h&7)===2)for(var f=n.uint32()+n.pos;n.pos<f;)c.int64Data.push(n.int64());else c.int64Data.push(n.int64());break}case 8:{c.name=n.string();break}case 12:{c.docString=n.string();break}case 9:{c.rawData=n.bytes();break}case 13:{c.externalData&&c.externalData.length||(c.externalData=[]),c.externalData.push(a.onnx.StringStringEntryProto.decode(n,n.uint32()));break}case 14:{c.dataLocation=n.int32();break}case 10:{if(c.doubleData&&c.doubleData.length||(c.doubleData=[]),(h&7)===2)for(var f=n.uint32()+n.pos;n.pos<f;)c.doubleData.push(n.double());else c.doubleData.push(n.double());break}case 11:{if(c.uint64Data&&c.uint64Data.length||(c.uint64Data=[]),(h&7)===2)for(var f=n.uint32()+n.pos;n.pos<f;)c.uint64Data.push(n.uint64());else c.uint64Data.push(n.uint64());break}default:n.skipType(h&7);break}}return c},p.decodeDelimited=function(n){return n instanceof o||(n=new o(n)),this.decode(n,n.uint32())},p.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.dims!=null&&n.hasOwnProperty("dims")){if(!Array.isArray(n.dims))return"dims: array expected";for(var l=0;l<n.dims.length;++l)if(!i.isInteger(n.dims[l])&&!(n.dims[l]&&i.isInteger(n.dims[l].low)&&i.isInteger(n.dims[l].high)))return"dims: integer|Long[] expected"}if(n.dataType!=null&&n.hasOwnProperty("dataType")&&!i.isInteger(n.dataType))return"dataType: integer expected";if(n.segment!=null&&n.hasOwnProperty("segment")){var u=a.onnx.TensorProto.Segment.verify(n.segment);if(u)return"segment."+u}if(n.floatData!=null&&n.hasOwnProperty("floatData")){if(!Array.isArray(n.floatData))return"floatData: array expected";for(var l=0;l<n.floatData.length;++l)if(typeof n.floatData[l]!="number")return"floatData: number[] expected"}if(n.int32Data!=null&&n.hasOwnProperty("int32Data")){if(!Array.isArray(n.int32Data))return"int32Data: array expected";for(var l=0;l<n.int32Data.length;++l)if(!i.isInteger(n.int32Data[l]))return"int32Data: integer[] expected"}if(n.stringData!=null&&n.hasOwnProperty("stringData")){if(!Array.isArray(n.stringData))return"stringData: array expected";for(var l=0;l<n.stringData.length;++l)if(!(n.stringData[l]&&typeof n.stringData[l].length=="number"||i.isString(n.stringData[l])))return"stringData: buffer[] expected"}if(n.int64Data!=null&&n.hasOwnProperty("int64Data")){if(!Array.isArray(n.int64Data))return"int64Data: array expected";for(var l=0;l<n.int64Data.length;++l)if(!i.isInteger(n.int64Data[l])&&!(n.int64Data[l]&&i.isInteger(n.int64Data[l].low)&&i.isInteger(n.int64Data[l].high)))return"int64Data: integer|Long[] expected"}if(n.name!=null&&n.hasOwnProperty("name")&&!i.isString(n.name))return"name: string expected";if(n.docString!=null&&n.hasOwnProperty("docString")&&!i.isString(n.docString))return"docString: string expected";if(n.rawData!=null&&n.hasOwnProperty("rawData")&&!(n.rawData&&typeof n.rawData.length=="number"||i.isString(n.rawData)))return"rawData: buffer expected";if(n.externalData!=null&&n.hasOwnProperty("externalData")){if(!Array.isArray(n.externalData))return"externalData: array expected";for(var l=0;l<n.externalData.length;++l){var u=a.onnx.StringStringEntryProto.verify(n.externalData[l]);if(u)return"externalData."+u}}if(n.dataLocation!=null&&n.hasOwnProperty("dataLocation"))switch(n.dataLocation){default:return"dataLocation: enum value expected";case 0:case 1:break}if(n.doubleData!=null&&n.hasOwnProperty("doubleData")){if(!Array.isArray(n.doubleData))return"doubleData: array expected";for(var l=0;l<n.doubleData.length;++l)if(typeof n.doubleData[l]!="number")return"doubleData: number[] expected"}if(n.uint64Data!=null&&n.hasOwnProperty("uint64Data")){if(!Array.isArray(n.uint64Data))return"uint64Data: array expected";for(var l=0;l<n.uint64Data.length;++l)if(!i.isInteger(n.uint64Data[l])&&!(n.uint64Data[l]&&i.isInteger(n.uint64Data[l].low)&&i.isInteger(n.uint64Data[l].high)))return"uint64Data: integer|Long[] expected"}return null},p.fromObject=function(n){if(n instanceof a.onnx.TensorProto)return n;var l=new a.onnx.TensorProto;if(n.dims){if(!Array.isArray(n.dims))throw TypeError(".onnx.TensorProto.dims: array expected");l.dims=[];for(var u=0;u<n.dims.length;++u)i.Long?(l.dims[u]=i.Long.fromValue(n.dims[u])).unsigned=!1:typeof n.dims[u]=="string"?l.dims[u]=parseInt(n.dims[u],10):typeof n.dims[u]=="number"?l.dims[u]=n.dims[u]:typeof n.dims[u]=="object"&&(l.dims[u]=new i.LongBits(n.dims[u].low>>>0,n.dims[u].high>>>0).toNumber())}if(n.dataType!=null&&(l.dataType=n.dataType|0),n.segment!=null){if(typeof n.segment!="object")throw TypeError(".onnx.TensorProto.segment: object expected");l.segment=a.onnx.TensorProto.Segment.fromObject(n.segment)}if(n.floatData){if(!Array.isArray(n.floatData))throw TypeError(".onnx.TensorProto.floatData: array expected");l.floatData=[];for(var u=0;u<n.floatData.length;++u)l.floatData[u]=Number(n.floatData[u])}if(n.int32Data){if(!Array.isArray(n.int32Data))throw TypeError(".onnx.TensorProto.int32Data: array expected");l.int32Data=[];for(var u=0;u<n.int32Data.length;++u)l.int32Data[u]=n.int32Data[u]|0}if(n.stringData){if(!Array.isArray(n.stringData))throw TypeError(".onnx.TensorProto.stringData: array expected");l.stringData=[];for(var u=0;u<n.stringData.length;++u)typeof n.stringData[u]=="string"?i.base64.decode(n.stringData[u],l.stringData[u]=i.newBuffer(i.base64.length(n.stringData[u])),0):n.stringData[u].length>=0&&(l.stringData[u]=n.stringData[u])}if(n.int64Data){if(!Array.isArray(n.int64Data))throw TypeError(".onnx.TensorProto.int64Data: array expected");l.int64Data=[];for(var u=0;u<n.int64Data.length;++u)i.Long?(l.int64Data[u]=i.Long.fromValue(n.int64Data[u])).unsigned=!1:typeof n.int64Data[u]=="string"?l.int64Data[u]=parseInt(n.int64Data[u],10):typeof n.int64Data[u]=="number"?l.int64Data[u]=n.int64Data[u]:typeof n.int64Data[u]=="object"&&(l.int64Data[u]=new i.LongBits(n.int64Data[u].low>>>0,n.int64Data[u].high>>>0).toNumber())}if(n.name!=null&&(l.name=String(n.name)),n.docString!=null&&(l.docString=String(n.docString)),n.rawData!=null&&(typeof n.rawData=="string"?i.base64.decode(n.rawData,l.rawData=i.newBuffer(i.base64.length(n.rawData)),0):n.rawData.length>=0&&(l.rawData=n.rawData)),n.externalData){if(!Array.isArray(n.externalData))throw TypeError(".onnx.TensorProto.externalData: array expected");l.externalData=[];for(var u=0;u<n.externalData.length;++u){if(typeof n.externalData[u]!="object")throw TypeError(".onnx.TensorProto.externalData: object expected");l.externalData[u]=a.onnx.StringStringEntryProto.fromObject(n.externalData[u])}}switch(n.dataLocation){default:if(typeof n.dataLocation=="number"){l.dataLocation=n.dataLocation;break}break;case"DEFAULT":case 0:l.dataLocation=0;break;case"EXTERNAL":case 1:l.dataLocation=1;break}if(n.doubleData){if(!Array.isArray(n.doubleData))throw TypeError(".onnx.TensorProto.doubleData: array expected");l.doubleData=[];for(var u=0;u<n.doubleData.length;++u)l.doubleData[u]=Number(n.doubleData[u])}if(n.uint64Data){if(!Array.isArray(n.uint64Data))throw TypeError(".onnx.TensorProto.uint64Data: array expected");l.uint64Data=[];for(var u=0;u<n.uint64Data.length;++u)i.Long?(l.uint64Data[u]=i.Long.fromValue(n.uint64Data[u])).unsigned=!0:typeof n.uint64Data[u]=="string"?l.uint64Data[u]=parseInt(n.uint64Data[u],10):typeof n.uint64Data[u]=="number"?l.uint64Data[u]=n.uint64Data[u]:typeof n.uint64Data[u]=="object"&&(l.uint64Data[u]=new i.LongBits(n.uint64Data[u].low>>>0,n.uint64Data[u].high>>>0).toNumber(!0))}return l},p.toObject=function(n,l){l||(l={});var u={};if((l.arrays||l.defaults)&&(u.dims=[],u.floatData=[],u.int32Data=[],u.stringData=[],u.int64Data=[],u.doubleData=[],u.uint64Data=[],u.externalData=[]),l.defaults&&(u.dataType=0,u.segment=null,u.name="",l.bytes===String?u.rawData="":(u.rawData=[],l.bytes!==Array&&(u.rawData=i.newBuffer(u.rawData))),u.docString="",u.dataLocation=l.enums===String?"DEFAULT":0),n.dims&&n.dims.length){u.dims=[];for(var c=0;c<n.dims.length;++c)typeof n.dims[c]=="number"?u.dims[c]=l.longs===String?String(n.dims[c]):n.dims[c]:u.dims[c]=l.longs===String?i.Long.prototype.toString.call(n.dims[c]):l.longs===Number?new i.LongBits(n.dims[c].low>>>0,n.dims[c].high>>>0).toNumber():n.dims[c]}if(n.dataType!=null&&n.hasOwnProperty("dataType")&&(u.dataType=n.dataType),n.segment!=null&&n.hasOwnProperty("segment")&&(u.segment=a.onnx.TensorProto.Segment.toObject(n.segment,l)),n.floatData&&n.floatData.length){u.floatData=[];for(var c=0;c<n.floatData.length;++c)u.floatData[c]=l.json&&!isFinite(n.floatData[c])?String(n.floatData[c]):n.floatData[c]}if(n.int32Data&&n.int32Data.length){u.int32Data=[];for(var c=0;c<n.int32Data.length;++c)u.int32Data[c]=n.int32Data[c]}if(n.stringData&&n.stringData.length){u.stringData=[];for(var c=0;c<n.stringData.length;++c)u.stringData[c]=l.bytes===String?i.base64.encode(n.stringData[c],0,n.stringData[c].length):l.bytes===Array?Array.prototype.slice.call(n.stringData[c]):n.stringData[c]}if(n.int64Data&&n.int64Data.length){u.int64Data=[];for(var c=0;c<n.int64Data.length;++c)typeof n.int64Data[c]=="number"?u.int64Data[c]=l.longs===String?String(n.int64Data[c]):n.int64Data[c]:u.int64Data[c]=l.longs===String?i.Long.prototype.toString.call(n.int64Data[c]):l.longs===Number?new i.LongBits(n.int64Data[c].low>>>0,n.int64Data[c].high>>>0).toNumber():n.int64Data[c]}if(n.name!=null&&n.hasOwnProperty("name")&&(u.name=n.name),n.rawData!=null&&n.hasOwnProperty("rawData")&&(u.rawData=l.bytes===String?i.base64.encode(n.rawData,0,n.rawData.length):l.bytes===Array?Array.prototype.slice.call(n.rawData):n.rawData),n.doubleData&&n.doubleData.length){u.doubleData=[];for(var c=0;c<n.doubleData.length;++c)u.doubleData[c]=l.json&&!isFinite(n.doubleData[c])?String(n.doubleData[c]):n.doubleData[c]}if(n.uint64Data&&n.uint64Data.length){u.uint64Data=[];for(var c=0;c<n.uint64Data.length;++c)typeof n.uint64Data[c]=="number"?u.uint64Data[c]=l.longs===String?String(n.uint64Data[c]):n.uint64Data[c]:u.uint64Data[c]=l.longs===String?i.Long.prototype.toString.call(n.uint64Data[c]):l.longs===Number?new i.LongBits(n.uint64Data[c].low>>>0,n.uint64Data[c].high>>>0).toNumber(!0):n.uint64Data[c]}if(n.docString!=null&&n.hasOwnProperty("docString")&&(u.docString=n.docString),n.externalData&&n.externalData.length){u.externalData=[];for(var c=0;c<n.externalData.length;++c)u.externalData[c]=a.onnx.StringStringEntryProto.toObject(n.externalData[c],l)}return n.dataLocation!=null&&n.hasOwnProperty("dataLocation")&&(u.dataLocation=l.enums===String?a.onnx.TensorProto.DataLocation[n.dataLocation]===void 0?n.dataLocation:a.onnx.TensorProto.DataLocation[n.dataLocation]:n.dataLocation),u},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.TensorProto"},p.DataType=function(){var n={},l=Object.create(n);return l[n[0]="UNDEFINED"]=0,l[n[1]="FLOAT"]=1,l[n[2]="UINT8"]=2,l[n[3]="INT8"]=3,l[n[4]="UINT16"]=4,l[n[5]="INT16"]=5,l[n[6]="INT32"]=6,l[n[7]="INT64"]=7,l[n[8]="STRING"]=8,l[n[9]="BOOL"]=9,l[n[10]="FLOAT16"]=10,l[n[11]="DOUBLE"]=11,l[n[12]="UINT32"]=12,l[n[13]="UINT64"]=13,l[n[14]="COMPLEX64"]=14,l[n[15]="COMPLEX128"]=15,l[n[16]="BFLOAT16"]=16,l[n[17]="FLOAT8E4M3FN"]=17,l[n[18]="FLOAT8E4M3FNUZ"]=18,l[n[19]="FLOAT8E5M2"]=19,l[n[20]="FLOAT8E5M2FNUZ"]=20,l}(),p.Segment=function(){function n(l){if(l)for(var u=Object.keys(l),c=0;c<u.length;++c)l[u[c]]!=null&&(this[u[c]]=l[u[c]])}return n.prototype.begin=i.Long?i.Long.fromBits(0,0,!1):0,n.prototype.end=i.Long?i.Long.fromBits(0,0,!1):0,n.create=function(l){return new n(l)},n.encode=function(l,u){return u||(u=s.create()),l.begin!=null&&Object.hasOwnProperty.call(l,"begin")&&u.uint32(8).int64(l.begin),l.end!=null&&Object.hasOwnProperty.call(l,"end")&&u.uint32(16).int64(l.end),u},n.encodeDelimited=function(l,u){return this.encode(l,u).ldelim()},n.decode=function(l,u){l instanceof o||(l=o.create(l));for(var c=u===void 0?l.len:l.pos+u,h=new a.onnx.TensorProto.Segment;l.pos<c;){var f=l.uint32();switch(f>>>3){case 1:{h.begin=l.int64();break}case 2:{h.end=l.int64();break}default:l.skipType(f&7);break}}return h},n.decodeDelimited=function(l){return l instanceof o||(l=new o(l)),this.decode(l,l.uint32())},n.verify=function(l){return typeof l!="object"||l===null?"object expected":l.begin!=null&&l.hasOwnProperty("begin")&&!i.isInteger(l.begin)&&!(l.begin&&i.isInteger(l.begin.low)&&i.isInteger(l.begin.high))?"begin: integer|Long expected":l.end!=null&&l.hasOwnProperty("end")&&!i.isInteger(l.end)&&!(l.end&&i.isInteger(l.end.low)&&i.isInteger(l.end.high))?"end: integer|Long expected":null},n.fromObject=function(l){if(l instanceof a.onnx.TensorProto.Segment)return l;var u=new a.onnx.TensorProto.Segment;return l.begin!=null&&(i.Long?(u.begin=i.Long.fromValue(l.begin)).unsigned=!1:typeof l.begin=="string"?u.begin=parseInt(l.begin,10):typeof l.begin=="number"?u.begin=l.begin:typeof l.begin=="object"&&(u.begin=new i.LongBits(l.begin.low>>>0,l.begin.high>>>0).toNumber())),l.end!=null&&(i.Long?(u.end=i.Long.fromValue(l.end)).unsigned=!1:typeof l.end=="string"?u.end=parseInt(l.end,10):typeof l.end=="number"?u.end=l.end:typeof l.end=="object"&&(u.end=new i.LongBits(l.end.low>>>0,l.end.high>>>0).toNumber())),u},n.toObject=function(l,u){u||(u={});var c={};if(u.defaults){if(i.Long){var h=new i.Long(0,0,!1);c.begin=u.longs===String?h.toString():u.longs===Number?h.toNumber():h}else c.begin=u.longs===String?"0":0;if(i.Long){var h=new i.Long(0,0,!1);c.end=u.longs===String?h.toString():u.longs===Number?h.toNumber():h}else c.end=u.longs===String?"0":0}return l.begin!=null&&l.hasOwnProperty("begin")&&(typeof l.begin=="number"?c.begin=u.longs===String?String(l.begin):l.begin:c.begin=u.longs===String?i.Long.prototype.toString.call(l.begin):u.longs===Number?new i.LongBits(l.begin.low>>>0,l.begin.high>>>0).toNumber():l.begin),l.end!=null&&l.hasOwnProperty("end")&&(typeof l.end=="number"?c.end=u.longs===String?String(l.end):l.end:c.end=u.longs===String?i.Long.prototype.toString.call(l.end):u.longs===Number?new i.LongBits(l.end.low>>>0,l.end.high>>>0).toNumber():l.end),c},n.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},n.getTypeUrl=function(l){return l===void 0&&(l="type.googleapis.com"),l+"/onnx.TensorProto.Segment"},n}(),p.DataLocation=function(){var n={},l=Object.create(n);return l[n[0]="DEFAULT"]=0,l[n[1]="EXTERNAL"]=1,l}(),p}(),d.SparseTensorProto=function(){function p(n){if(this.dims=[],n)for(var l=Object.keys(n),u=0;u<l.length;++u)n[l[u]]!=null&&(this[l[u]]=n[l[u]])}return p.prototype.values=null,p.prototype.indices=null,p.prototype.dims=i.emptyArray,p.create=function(n){return new p(n)},p.encode=function(n,l){if(l||(l=s.create()),n.values!=null&&Object.hasOwnProperty.call(n,"values")&&a.onnx.TensorProto.encode(n.values,l.uint32(10).fork()).ldelim(),n.indices!=null&&Object.hasOwnProperty.call(n,"indices")&&a.onnx.TensorProto.encode(n.indices,l.uint32(18).fork()).ldelim(),n.dims!=null&&n.dims.length){l.uint32(26).fork();for(var u=0;u<n.dims.length;++u)l.int64(n.dims[u]);l.ldelim()}return l},p.encodeDelimited=function(n,l){return this.encode(n,l).ldelim()},p.decode=function(n,l){n instanceof o||(n=o.create(n));for(var u=l===void 0?n.len:n.pos+l,c=new a.onnx.SparseTensorProto;n.pos<u;){var h=n.uint32();switch(h>>>3){case 1:{c.values=a.onnx.TensorProto.decode(n,n.uint32());break}case 2:{c.indices=a.onnx.TensorProto.decode(n,n.uint32());break}case 3:{if(c.dims&&c.dims.length||(c.dims=[]),(h&7)===2)for(var f=n.uint32()+n.pos;n.pos<f;)c.dims.push(n.int64());else c.dims.push(n.int64());break}default:n.skipType(h&7);break}}return c},p.decodeDelimited=function(n){return n instanceof o||(n=new o(n)),this.decode(n,n.uint32())},p.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.values!=null&&n.hasOwnProperty("values")){var l=a.onnx.TensorProto.verify(n.values);if(l)return"values."+l}if(n.indices!=null&&n.hasOwnProperty("indices")){var l=a.onnx.TensorProto.verify(n.indices);if(l)return"indices."+l}if(n.dims!=null&&n.hasOwnProperty("dims")){if(!Array.isArray(n.dims))return"dims: array expected";for(var u=0;u<n.dims.length;++u)if(!i.isInteger(n.dims[u])&&!(n.dims[u]&&i.isInteger(n.dims[u].low)&&i.isInteger(n.dims[u].high)))return"dims: integer|Long[] expected"}return null},p.fromObject=function(n){if(n instanceof a.onnx.SparseTensorProto)return n;var l=new a.onnx.SparseTensorProto;if(n.values!=null){if(typeof n.values!="object")throw TypeError(".onnx.SparseTensorProto.values: object expected");l.values=a.onnx.TensorProto.fromObject(n.values)}if(n.indices!=null){if(typeof n.indices!="object")throw TypeError(".onnx.SparseTensorProto.indices: object expected");l.indices=a.onnx.TensorProto.fromObject(n.indices)}if(n.dims){if(!Array.isArray(n.dims))throw TypeError(".onnx.SparseTensorProto.dims: array expected");l.dims=[];for(var u=0;u<n.dims.length;++u)i.Long?(l.dims[u]=i.Long.fromValue(n.dims[u])).unsigned=!1:typeof n.dims[u]=="string"?l.dims[u]=parseInt(n.dims[u],10):typeof n.dims[u]=="number"?l.dims[u]=n.dims[u]:typeof n.dims[u]=="object"&&(l.dims[u]=new i.LongBits(n.dims[u].low>>>0,n.dims[u].high>>>0).toNumber())}return l},p.toObject=function(n,l){l||(l={});var u={};if((l.arrays||l.defaults)&&(u.dims=[]),l.defaults&&(u.values=null,u.indices=null),n.values!=null&&n.hasOwnProperty("values")&&(u.values=a.onnx.TensorProto.toObject(n.values,l)),n.indices!=null&&n.hasOwnProperty("indices")&&(u.indices=a.onnx.TensorProto.toObject(n.indices,l)),n.dims&&n.dims.length){u.dims=[];for(var c=0;c<n.dims.length;++c)typeof n.dims[c]=="number"?u.dims[c]=l.longs===String?String(n.dims[c]):n.dims[c]:u.dims[c]=l.longs===String?i.Long.prototype.toString.call(n.dims[c]):l.longs===Number?new i.LongBits(n.dims[c].low>>>0,n.dims[c].high>>>0).toNumber():n.dims[c]}return u},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.SparseTensorProto"},p}(),d.TensorShapeProto=function(){function p(n){if(this.dim=[],n)for(var l=Object.keys(n),u=0;u<l.length;++u)n[l[u]]!=null&&(this[l[u]]=n[l[u]])}return p.prototype.dim=i.emptyArray,p.create=function(n){return new p(n)},p.encode=function(n,l){if(l||(l=s.create()),n.dim!=null&&n.dim.length)for(var u=0;u<n.dim.length;++u)a.onnx.TensorShapeProto.Dimension.encode(n.dim[u],l.uint32(10).fork()).ldelim();return l},p.encodeDelimited=function(n,l){return this.encode(n,l).ldelim()},p.decode=function(n,l){n instanceof o||(n=o.create(n));for(var u=l===void 0?n.len:n.pos+l,c=new a.onnx.TensorShapeProto;n.pos<u;){var h=n.uint32();switch(h>>>3){case 1:{c.dim&&c.dim.length||(c.dim=[]),c.dim.push(a.onnx.TensorShapeProto.Dimension.decode(n,n.uint32()));break}default:n.skipType(h&7);break}}return c},p.decodeDelimited=function(n){return n instanceof o||(n=new o(n)),this.decode(n,n.uint32())},p.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.dim!=null&&n.hasOwnProperty("dim")){if(!Array.isArray(n.dim))return"dim: array expected";for(var l=0;l<n.dim.length;++l){var u=a.onnx.TensorShapeProto.Dimension.verify(n.dim[l]);if(u)return"dim."+u}}return null},p.fromObject=function(n){if(n instanceof a.onnx.TensorShapeProto)return n;var l=new a.onnx.TensorShapeProto;if(n.dim){if(!Array.isArray(n.dim))throw TypeError(".onnx.TensorShapeProto.dim: array expected");l.dim=[];for(var u=0;u<n.dim.length;++u){if(typeof n.dim[u]!="object")throw TypeError(".onnx.TensorShapeProto.dim: object expected");l.dim[u]=a.onnx.TensorShapeProto.Dimension.fromObject(n.dim[u])}}return l},p.toObject=function(n,l){l||(l={});var u={};if((l.arrays||l.defaults)&&(u.dim=[]),n.dim&&n.dim.length){u.dim=[];for(var c=0;c<n.dim.length;++c)u.dim[c]=a.onnx.TensorShapeProto.Dimension.toObject(n.dim[c],l)}return u},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.TensorShapeProto"},p.Dimension=function(){function n(u){if(u)for(var c=Object.keys(u),h=0;h<c.length;++h)u[c[h]]!=null&&(this[c[h]]=u[c[h]])}n.prototype.dimValue=null,n.prototype.dimParam=null,n.prototype.denotation="";var l;return Object.defineProperty(n.prototype,"value",{get:i.oneOfGetter(l=["dimValue","dimParam"]),set:i.oneOfSetter(l)}),n.create=function(u){return new n(u)},n.encode=function(u,c){return c||(c=s.create()),u.dimValue!=null&&Object.hasOwnProperty.call(u,"dimValue")&&c.uint32(8).int64(u.dimValue),u.dimParam!=null&&Object.hasOwnProperty.call(u,"dimParam")&&c.uint32(18).string(u.dimParam),u.denotation!=null&&Object.hasOwnProperty.call(u,"denotation")&&c.uint32(26).string(u.denotation),c},n.encodeDelimited=function(u,c){return this.encode(u,c).ldelim()},n.decode=function(u,c){u instanceof o||(u=o.create(u));for(var h=c===void 0?u.len:u.pos+c,f=new a.onnx.TensorShapeProto.Dimension;u.pos<h;){var g=u.uint32();switch(g>>>3){case 1:{f.dimValue=u.int64();break}case 2:{f.dimParam=u.string();break}case 3:{f.denotation=u.string();break}default:u.skipType(g&7);break}}return f},n.decodeDelimited=function(u){return u instanceof o||(u=new o(u)),this.decode(u,u.uint32())},n.verify=function(u){if(typeof u!="object"||u===null)return"object expected";var c={};if(u.dimValue!=null&&u.hasOwnProperty("dimValue")&&(c.value=1,!i.isInteger(u.dimValue)&&!(u.dimValue&&i.isInteger(u.dimValue.low)&&i.isInteger(u.dimValue.high))))return"dimValue: integer|Long expected";if(u.dimParam!=null&&u.hasOwnProperty("dimParam")){if(c.value===1)return"value: multiple values";if(c.value=1,!i.isString(u.dimParam))return"dimParam: string expected"}return u.denotation!=null&&u.hasOwnProperty("denotation")&&!i.isString(u.denotation)?"denotation: string expected":null},n.fromObject=function(u){if(u instanceof a.onnx.TensorShapeProto.Dimension)return u;var c=new a.onnx.TensorShapeProto.Dimension;return u.dimValue!=null&&(i.Long?(c.dimValue=i.Long.fromValue(u.dimValue)).unsigned=!1:typeof u.dimValue=="string"?c.dimValue=parseInt(u.dimValue,10):typeof u.dimValue=="number"?c.dimValue=u.dimValue:typeof u.dimValue=="object"&&(c.dimValue=new i.LongBits(u.dimValue.low>>>0,u.dimValue.high>>>0).toNumber())),u.dimParam!=null&&(c.dimParam=String(u.dimParam)),u.denotation!=null&&(c.denotation=String(u.denotation)),c},n.toObject=function(u,c){c||(c={});var h={};return c.defaults&&(h.denotation=""),u.dimValue!=null&&u.hasOwnProperty("dimValue")&&(typeof u.dimValue=="number"?h.dimValue=c.longs===String?String(u.dimValue):u.dimValue:h.dimValue=c.longs===String?i.Long.prototype.toString.call(u.dimValue):c.longs===Number?new i.LongBits(u.dimValue.low>>>0,u.dimValue.high>>>0).toNumber():u.dimValue,c.oneofs&&(h.value="dimValue")),u.dimParam!=null&&u.hasOwnProperty("dimParam")&&(h.dimParam=u.dimParam,c.oneofs&&(h.value="dimParam")),u.denotation!=null&&u.hasOwnProperty("denotation")&&(h.denotation=u.denotation),h},n.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},n.getTypeUrl=function(u){return u===void 0&&(u="type.googleapis.com"),u+"/onnx.TensorShapeProto.Dimension"},n}(),p}(),d.TypeProto=function(){function p(l){if(l)for(var u=Object.keys(l),c=0;c<u.length;++c)l[u[c]]!=null&&(this[u[c]]=l[u[c]])}p.prototype.tensorType=null,p.prototype.sequenceType=null,p.prototype.mapType=null,p.prototype.optionalType=null,p.prototype.sparseTensorType=null,p.prototype.denotation="";var n;return Object.defineProperty(p.prototype,"value",{get:i.oneOfGetter(n=["tensorType","sequenceType","mapType","optionalType","sparseTensorType"]),set:i.oneOfSetter(n)}),p.create=function(l){return new p(l)},p.encode=function(l,u){return u||(u=s.create()),l.tensorType!=null&&Object.hasOwnProperty.call(l,"tensorType")&&a.onnx.TypeProto.Tensor.encode(l.tensorType,u.uint32(10).fork()).ldelim(),l.sequenceType!=null&&Object.hasOwnProperty.call(l,"sequenceType")&&a.onnx.TypeProto.Sequence.encode(l.sequenceType,u.uint32(34).fork()).ldelim(),l.mapType!=null&&Object.hasOwnProperty.call(l,"mapType")&&a.onnx.TypeProto.Map.encode(l.mapType,u.uint32(42).fork()).ldelim(),l.denotation!=null&&Object.hasOwnProperty.call(l,"denotation")&&u.uint32(50).string(l.denotation),l.sparseTensorType!=null&&Object.hasOwnProperty.call(l,"sparseTensorType")&&a.onnx.TypeProto.SparseTensor.encode(l.sparseTensorType,u.uint32(66).fork()).ldelim(),l.optionalType!=null&&Object.hasOwnProperty.call(l,"optionalType")&&a.onnx.TypeProto.Optional.encode(l.optionalType,u.uint32(74).fork()).ldelim(),u},p.encodeDelimited=function(l,u){return this.encode(l,u).ldelim()},p.decode=function(l,u){l instanceof o||(l=o.create(l));for(var c=u===void 0?l.len:l.pos+u,h=new a.onnx.TypeProto;l.pos<c;){var f=l.uint32();switch(f>>>3){case 1:{h.tensorType=a.onnx.TypeProto.Tensor.decode(l,l.uint32());break}case 4:{h.sequenceType=a.onnx.TypeProto.Sequence.decode(l,l.uint32());break}case 5:{h.mapType=a.onnx.TypeProto.Map.decode(l,l.uint32());break}case 9:{h.optionalType=a.onnx.TypeProto.Optional.decode(l,l.uint32());break}case 8:{h.sparseTensorType=a.onnx.TypeProto.SparseTensor.decode(l,l.uint32());break}case 6:{h.denotation=l.string();break}default:l.skipType(f&7);break}}return h},p.decodeDelimited=function(l){return l instanceof o||(l=new o(l)),this.decode(l,l.uint32())},p.verify=function(l){if(typeof l!="object"||l===null)return"object expected";var u={};if(l.tensorType!=null&&l.hasOwnProperty("tensorType")){u.value=1;{var c=a.onnx.TypeProto.Tensor.verify(l.tensorType);if(c)return"tensorType."+c}}if(l.sequenceType!=null&&l.hasOwnProperty("sequenceType")){if(u.value===1)return"value: multiple values";u.value=1;{var c=a.onnx.TypeProto.Sequence.verify(l.sequenceType);if(c)return"sequenceType."+c}}if(l.mapType!=null&&l.hasOwnProperty("mapType")){if(u.value===1)return"value: multiple values";u.value=1;{var c=a.onnx.TypeProto.Map.verify(l.mapType);if(c)return"mapType."+c}}if(l.optionalType!=null&&l.hasOwnProperty("optionalType")){if(u.value===1)return"value: multiple values";u.value=1;{var c=a.onnx.TypeProto.Optional.verify(l.optionalType);if(c)return"optionalType."+c}}if(l.sparseTensorType!=null&&l.hasOwnProperty("sparseTensorType")){if(u.value===1)return"value: multiple values";u.value=1;{var c=a.onnx.TypeProto.SparseTensor.verify(l.sparseTensorType);if(c)return"sparseTensorType."+c}}return l.denotation!=null&&l.hasOwnProperty("denotation")&&!i.isString(l.denotation)?"denotation: string expected":null},p.fromObject=function(l){if(l instanceof a.onnx.TypeProto)return l;var u=new a.onnx.TypeProto;if(l.tensorType!=null){if(typeof l.tensorType!="object")throw TypeError(".onnx.TypeProto.tensorType: object expected");u.tensorType=a.onnx.TypeProto.Tensor.fromObject(l.tensorType)}if(l.sequenceType!=null){if(typeof l.sequenceType!="object")throw TypeError(".onnx.TypeProto.sequenceType: object expected");u.sequenceType=a.onnx.TypeProto.Sequence.fromObject(l.sequenceType)}if(l.mapType!=null){if(typeof l.mapType!="object")throw TypeError(".onnx.TypeProto.mapType: object expected");u.mapType=a.onnx.TypeProto.Map.fromObject(l.mapType)}if(l.optionalType!=null){if(typeof l.optionalType!="object")throw TypeError(".onnx.TypeProto.optionalType: object expected");u.optionalType=a.onnx.TypeProto.Optional.fromObject(l.optionalType)}if(l.sparseTensorType!=null){if(typeof l.sparseTensorType!="object")throw TypeError(".onnx.TypeProto.sparseTensorType: object expected");u.sparseTensorType=a.onnx.TypeProto.SparseTensor.fromObject(l.sparseTensorType)}return l.denotation!=null&&(u.denotation=String(l.denotation)),u},p.toObject=function(l,u){u||(u={});var c={};return u.defaults&&(c.denotation=""),l.tensorType!=null&&l.hasOwnProperty("tensorType")&&(c.tensorType=a.onnx.TypeProto.Tensor.toObject(l.tensorType,u),u.oneofs&&(c.value="tensorType")),l.sequenceType!=null&&l.hasOwnProperty("sequenceType")&&(c.sequenceType=a.onnx.TypeProto.Sequence.toObject(l.sequenceType,u),u.oneofs&&(c.value="sequenceType")),l.mapType!=null&&l.hasOwnProperty("mapType")&&(c.mapType=a.onnx.TypeProto.Map.toObject(l.mapType,u),u.oneofs&&(c.value="mapType")),l.denotation!=null&&l.hasOwnProperty("denotation")&&(c.denotation=l.denotation),l.sparseTensorType!=null&&l.hasOwnProperty("sparseTensorType")&&(c.sparseTensorType=a.onnx.TypeProto.SparseTensor.toObject(l.sparseTensorType,u),u.oneofs&&(c.value="sparseTensorType")),l.optionalType!=null&&l.hasOwnProperty("optionalType")&&(c.optionalType=a.onnx.TypeProto.Optional.toObject(l.optionalType,u),u.oneofs&&(c.value="optionalType")),c},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(l){return l===void 0&&(l="type.googleapis.com"),l+"/onnx.TypeProto"},p.Tensor=function(){function l(u){if(u)for(var c=Object.keys(u),h=0;h<c.length;++h)u[c[h]]!=null&&(this[c[h]]=u[c[h]])}return l.prototype.elemType=0,l.prototype.shape=null,l.create=function(u){return new l(u)},l.encode=function(u,c){return c||(c=s.create()),u.elemType!=null&&Object.hasOwnProperty.call(u,"elemType")&&c.uint32(8).int32(u.elemType),u.shape!=null&&Object.hasOwnProperty.call(u,"shape")&&a.onnx.TensorShapeProto.encode(u.shape,c.uint32(18).fork()).ldelim(),c},l.encodeDelimited=function(u,c){return this.encode(u,c).ldelim()},l.decode=function(u,c){u instanceof o||(u=o.create(u));for(var h=c===void 0?u.len:u.pos+c,f=new a.onnx.TypeProto.Tensor;u.pos<h;){var g=u.uint32();switch(g>>>3){case 1:{f.elemType=u.int32();break}case 2:{f.shape=a.onnx.TensorShapeProto.decode(u,u.uint32());break}default:u.skipType(g&7);break}}return f},l.decodeDelimited=function(u){return u instanceof o||(u=new o(u)),this.decode(u,u.uint32())},l.verify=function(u){if(typeof u!="object"||u===null)return"object expected";if(u.elemType!=null&&u.hasOwnProperty("elemType")&&!i.isInteger(u.elemType))return"elemType: integer expected";if(u.shape!=null&&u.hasOwnProperty("shape")){var c=a.onnx.TensorShapeProto.verify(u.shape);if(c)return"shape."+c}return null},l.fromObject=function(u){if(u instanceof a.onnx.TypeProto.Tensor)return u;var c=new a.onnx.TypeProto.Tensor;if(u.elemType!=null&&(c.elemType=u.elemType|0),u.shape!=null){if(typeof u.shape!="object")throw TypeError(".onnx.TypeProto.Tensor.shape: object expected");c.shape=a.onnx.TensorShapeProto.fromObject(u.shape)}return c},l.toObject=function(u,c){c||(c={});var h={};return c.defaults&&(h.elemType=0,h.shape=null),u.elemType!=null&&u.hasOwnProperty("elemType")&&(h.elemType=u.elemType),u.shape!=null&&u.hasOwnProperty("shape")&&(h.shape=a.onnx.TensorShapeProto.toObject(u.shape,c)),h},l.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},l.getTypeUrl=function(u){return u===void 0&&(u="type.googleapis.com"),u+"/onnx.TypeProto.Tensor"},l}(),p.Sequence=function(){function l(u){if(u)for(var c=Object.keys(u),h=0;h<c.length;++h)u[c[h]]!=null&&(this[c[h]]=u[c[h]])}return l.prototype.elemType=null,l.create=function(u){return new l(u)},l.encode=function(u,c){return c||(c=s.create()),u.elemType!=null&&Object.hasOwnProperty.call(u,"elemType")&&a.onnx.TypeProto.encode(u.elemType,c.uint32(10).fork()).ldelim(),c},l.encodeDelimited=function(u,c){return this.encode(u,c).ldelim()},l.decode=function(u,c){u instanceof o||(u=o.create(u));for(var h=c===void 0?u.len:u.pos+c,f=new a.onnx.TypeProto.Sequence;u.pos<h;){var g=u.uint32();switch(g>>>3){case 1:{f.elemType=a.onnx.TypeProto.decode(u,u.uint32());break}default:u.skipType(g&7);break}}return f},l.decodeDelimited=function(u){return u instanceof o||(u=new o(u)),this.decode(u,u.uint32())},l.verify=function(u){if(typeof u!="object"||u===null)return"object expected";if(u.elemType!=null&&u.hasOwnProperty("elemType")){var c=a.onnx.TypeProto.verify(u.elemType);if(c)return"elemType."+c}return null},l.fromObject=function(u){if(u instanceof a.onnx.TypeProto.Sequence)return u;var c=new a.onnx.TypeProto.Sequence;if(u.elemType!=null){if(typeof u.elemType!="object")throw TypeError(".onnx.TypeProto.Sequence.elemType: object expected");c.elemType=a.onnx.TypeProto.fromObject(u.elemType)}return c},l.toObject=function(u,c){c||(c={});var h={};return c.defaults&&(h.elemType=null),u.elemType!=null&&u.hasOwnProperty("elemType")&&(h.elemType=a.onnx.TypeProto.toObject(u.elemType,c)),h},l.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},l.getTypeUrl=function(u){return u===void 0&&(u="type.googleapis.com"),u+"/onnx.TypeProto.Sequence"},l}(),p.Map=function(){function l(u){if(u)for(var c=Object.keys(u),h=0;h<c.length;++h)u[c[h]]!=null&&(this[c[h]]=u[c[h]])}return l.prototype.keyType=0,l.prototype.valueType=null,l.create=function(u){return new l(u)},l.encode=function(u,c){return c||(c=s.create()),u.keyType!=null&&Object.hasOwnProperty.call(u,"keyType")&&c.uint32(8).int32(u.keyType),u.valueType!=null&&Object.hasOwnProperty.call(u,"valueType")&&a.onnx.TypeProto.encode(u.valueType,c.uint32(18).fork()).ldelim(),c},l.encodeDelimited=function(u,c){return this.encode(u,c).ldelim()},l.decode=function(u,c){u instanceof o||(u=o.create(u));for(var h=c===void 0?u.len:u.pos+c,f=new a.onnx.TypeProto.Map;u.pos<h;){var g=u.uint32();switch(g>>>3){case 1:{f.keyType=u.int32();break}case 2:{f.valueType=a.onnx.TypeProto.decode(u,u.uint32());break}default:u.skipType(g&7);break}}return f},l.decodeDelimited=function(u){return u instanceof o||(u=new o(u)),this.decode(u,u.uint32())},l.verify=function(u){if(typeof u!="object"||u===null)return"object expected";if(u.keyType!=null&&u.hasOwnProperty("keyType")&&!i.isInteger(u.keyType))return"keyType: integer expected";if(u.valueType!=null&&u.hasOwnProperty("valueType")){var c=a.onnx.TypeProto.verify(u.valueType);if(c)return"valueType."+c}return null},l.fromObject=function(u){if(u instanceof a.onnx.TypeProto.Map)return u;var c=new a.onnx.TypeProto.Map;if(u.keyType!=null&&(c.keyType=u.keyType|0),u.valueType!=null){if(typeof u.valueType!="object")throw TypeError(".onnx.TypeProto.Map.valueType: object expected");c.valueType=a.onnx.TypeProto.fromObject(u.valueType)}return c},l.toObject=function(u,c){c||(c={});var h={};return c.defaults&&(h.keyType=0,h.valueType=null),u.keyType!=null&&u.hasOwnProperty("keyType")&&(h.keyType=u.keyType),u.valueType!=null&&u.hasOwnProperty("valueType")&&(h.valueType=a.onnx.TypeProto.toObject(u.valueType,c)),h},l.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},l.getTypeUrl=function(u){return u===void 0&&(u="type.googleapis.com"),u+"/onnx.TypeProto.Map"},l}(),p.Optional=function(){function l(u){if(u)for(var c=Object.keys(u),h=0;h<c.length;++h)u[c[h]]!=null&&(this[c[h]]=u[c[h]])}return l.prototype.elemType=null,l.create=function(u){return new l(u)},l.encode=function(u,c){return c||(c=s.create()),u.elemType!=null&&Object.hasOwnProperty.call(u,"elemType")&&a.onnx.TypeProto.encode(u.elemType,c.uint32(10).fork()).ldelim(),c},l.encodeDelimited=function(u,c){return this.encode(u,c).ldelim()},l.decode=function(u,c){u instanceof o||(u=o.create(u));for(var h=c===void 0?u.len:u.pos+c,f=new a.onnx.TypeProto.Optional;u.pos<h;){var g=u.uint32();switch(g>>>3){case 1:{f.elemType=a.onnx.TypeProto.decode(u,u.uint32());break}default:u.skipType(g&7);break}}return f},l.decodeDelimited=function(u){return u instanceof o||(u=new o(u)),this.decode(u,u.uint32())},l.verify=function(u){if(typeof u!="object"||u===null)return"object expected";if(u.elemType!=null&&u.hasOwnProperty("elemType")){var c=a.onnx.TypeProto.verify(u.elemType);if(c)return"elemType."+c}return null},l.fromObject=function(u){if(u instanceof a.onnx.TypeProto.Optional)return u;var c=new a.onnx.TypeProto.Optional;if(u.elemType!=null){if(typeof u.elemType!="object")throw TypeError(".onnx.TypeProto.Optional.elemType: object expected");c.elemType=a.onnx.TypeProto.fromObject(u.elemType)}return c},l.toObject=function(u,c){c||(c={});var h={};return c.defaults&&(h.elemType=null),u.elemType!=null&&u.hasOwnProperty("elemType")&&(h.elemType=a.onnx.TypeProto.toObject(u.elemType,c)),h},l.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},l.getTypeUrl=function(u){return u===void 0&&(u="type.googleapis.com"),u+"/onnx.TypeProto.Optional"},l}(),p.SparseTensor=function(){function l(u){if(u)for(var c=Object.keys(u),h=0;h<c.length;++h)u[c[h]]!=null&&(this[c[h]]=u[c[h]])}return l.prototype.elemType=0,l.prototype.shape=null,l.create=function(u){return new l(u)},l.encode=function(u,c){return c||(c=s.create()),u.elemType!=null&&Object.hasOwnProperty.call(u,"elemType")&&c.uint32(8).int32(u.elemType),u.shape!=null&&Object.hasOwnProperty.call(u,"shape")&&a.onnx.TensorShapeProto.encode(u.shape,c.uint32(18).fork()).ldelim(),c},l.encodeDelimited=function(u,c){return this.encode(u,c).ldelim()},l.decode=function(u,c){u instanceof o||(u=o.create(u));for(var h=c===void 0?u.len:u.pos+c,f=new a.onnx.TypeProto.SparseTensor;u.pos<h;){var g=u.uint32();switch(g>>>3){case 1:{f.elemType=u.int32();break}case 2:{f.shape=a.onnx.TensorShapeProto.decode(u,u.uint32());break}default:u.skipType(g&7);break}}return f},l.decodeDelimited=function(u){return u instanceof o||(u=new o(u)),this.decode(u,u.uint32())},l.verify=function(u){if(typeof u!="object"||u===null)return"object expected";if(u.elemType!=null&&u.hasOwnProperty("elemType")&&!i.isInteger(u.elemType))return"elemType: integer expected";if(u.shape!=null&&u.hasOwnProperty("shape")){var c=a.onnx.TensorShapeProto.verify(u.shape);if(c)return"shape."+c}return null},l.fromObject=function(u){if(u instanceof a.onnx.TypeProto.SparseTensor)return u;var c=new a.onnx.TypeProto.SparseTensor;if(u.elemType!=null&&(c.elemType=u.elemType|0),u.shape!=null){if(typeof u.shape!="object")throw TypeError(".onnx.TypeProto.SparseTensor.shape: object expected");c.shape=a.onnx.TensorShapeProto.fromObject(u.shape)}return c},l.toObject=function(u,c){c||(c={});var h={};return c.defaults&&(h.elemType=0,h.shape=null),u.elemType!=null&&u.hasOwnProperty("elemType")&&(h.elemType=u.elemType),u.shape!=null&&u.hasOwnProperty("shape")&&(h.shape=a.onnx.TensorShapeProto.toObject(u.shape,c)),h},l.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},l.getTypeUrl=function(u){return u===void 0&&(u="type.googleapis.com"),u+"/onnx.TypeProto.SparseTensor"},l}(),p}(),d.OperatorSetIdProto=function(){function p(n){if(n)for(var l=Object.keys(n),u=0;u<l.length;++u)n[l[u]]!=null&&(this[l[u]]=n[l[u]])}return p.prototype.domain="",p.prototype.version=i.Long?i.Long.fromBits(0,0,!1):0,p.create=function(n){return new p(n)},p.encode=function(n,l){return l||(l=s.create()),n.domain!=null&&Object.hasOwnProperty.call(n,"domain")&&l.uint32(10).string(n.domain),n.version!=null&&Object.hasOwnProperty.call(n,"version")&&l.uint32(16).int64(n.version),l},p.encodeDelimited=function(n,l){return this.encode(n,l).ldelim()},p.decode=function(n,l){n instanceof o||(n=o.create(n));for(var u=l===void 0?n.len:n.pos+l,c=new a.onnx.OperatorSetIdProto;n.pos<u;){var h=n.uint32();switch(h>>>3){case 1:{c.domain=n.string();break}case 2:{c.version=n.int64();break}default:n.skipType(h&7);break}}return c},p.decodeDelimited=function(n){return n instanceof o||(n=new o(n)),this.decode(n,n.uint32())},p.verify=function(n){return typeof n!="object"||n===null?"object expected":n.domain!=null&&n.hasOwnProperty("domain")&&!i.isString(n.domain)?"domain: string expected":n.version!=null&&n.hasOwnProperty("version")&&!i.isInteger(n.version)&&!(n.version&&i.isInteger(n.version.low)&&i.isInteger(n.version.high))?"version: integer|Long expected":null},p.fromObject=function(n){if(n instanceof a.onnx.OperatorSetIdProto)return n;var l=new a.onnx.OperatorSetIdProto;return n.domain!=null&&(l.domain=String(n.domain)),n.version!=null&&(i.Long?(l.version=i.Long.fromValue(n.version)).unsigned=!1:typeof n.version=="string"?l.version=parseInt(n.version,10):typeof n.version=="number"?l.version=n.version:typeof n.version=="object"&&(l.version=new i.LongBits(n.version.low>>>0,n.version.high>>>0).toNumber())),l},p.toObject=function(n,l){l||(l={});var u={};if(l.defaults)if(u.domain="",i.Long){var c=new i.Long(0,0,!1);u.version=l.longs===String?c.toString():l.longs===Number?c.toNumber():c}else u.version=l.longs===String?"0":0;return n.domain!=null&&n.hasOwnProperty("domain")&&(u.domain=n.domain),n.version!=null&&n.hasOwnProperty("version")&&(typeof n.version=="number"?u.version=l.longs===String?String(n.version):n.version:u.version=l.longs===String?i.Long.prototype.toString.call(n.version):l.longs===Number?new i.LongBits(n.version.low>>>0,n.version.high>>>0).toNumber():n.version),u},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.OperatorSetIdProto"},p}(),d.OperatorStatus=function(){var p={},n=Object.create(p);return n[p[0]="EXPERIMENTAL"]=0,n[p[1]="STABLE"]=1,n}(),d.FunctionProto=function(){function p(n){if(this.input=[],this.output=[],this.attribute=[],this.attributeProto=[],this.node=[],this.opsetImport=[],n)for(var l=Object.keys(n),u=0;u<l.length;++u)n[l[u]]!=null&&(this[l[u]]=n[l[u]])}return p.prototype.name="",p.prototype.input=i.emptyArray,p.prototype.output=i.emptyArray,p.prototype.attribute=i.emptyArray,p.prototype.attributeProto=i.emptyArray,p.prototype.node=i.emptyArray,p.prototype.docString="",p.prototype.opsetImport=i.emptyArray,p.prototype.domain="",p.create=function(n){return new p(n)},p.encode=function(n,l){if(l||(l=s.create()),n.name!=null&&Object.hasOwnProperty.call(n,"name")&&l.uint32(10).string(n.name),n.input!=null&&n.input.length)for(var u=0;u<n.input.length;++u)l.uint32(34).string(n.input[u]);if(n.output!=null&&n.output.length)for(var u=0;u<n.output.length;++u)l.uint32(42).string(n.output[u]);if(n.attribute!=null&&n.attribute.length)for(var u=0;u<n.attribute.length;++u)l.uint32(50).string(n.attribute[u]);if(n.node!=null&&n.node.length)for(var u=0;u<n.node.length;++u)a.onnx.NodeProto.encode(n.node[u],l.uint32(58).fork()).ldelim();if(n.docString!=null&&Object.hasOwnProperty.call(n,"docString")&&l.uint32(66).string(n.docString),n.opsetImport!=null&&n.opsetImport.length)for(var u=0;u<n.opsetImport.length;++u)a.onnx.OperatorSetIdProto.encode(n.opsetImport[u],l.uint32(74).fork()).ldelim();if(n.domain!=null&&Object.hasOwnProperty.call(n,"domain")&&l.uint32(82).string(n.domain),n.attributeProto!=null&&n.attributeProto.length)for(var u=0;u<n.attributeProto.length;++u)a.onnx.AttributeProto.encode(n.attributeProto[u],l.uint32(90).fork()).ldelim();return l},p.encodeDelimited=function(n,l){return this.encode(n,l).ldelim()},p.decode=function(n,l){n instanceof o||(n=o.create(n));for(var u=l===void 0?n.len:n.pos+l,c=new a.onnx.FunctionProto;n.pos<u;){var h=n.uint32();switch(h>>>3){case 1:{c.name=n.string();break}case 4:{c.input&&c.input.length||(c.input=[]),c.input.push(n.string());break}case 5:{c.output&&c.output.length||(c.output=[]),c.output.push(n.string());break}case 6:{c.attribute&&c.attribute.length||(c.attribute=[]),c.attribute.push(n.string());break}case 11:{c.attributeProto&&c.attributeProto.length||(c.attributeProto=[]),c.attributeProto.push(a.onnx.AttributeProto.decode(n,n.uint32()));break}case 7:{c.node&&c.node.length||(c.node=[]),c.node.push(a.onnx.NodeProto.decode(n,n.uint32()));break}case 8:{c.docString=n.string();break}case 9:{c.opsetImport&&c.opsetImport.length||(c.opsetImport=[]),c.opsetImport.push(a.onnx.OperatorSetIdProto.decode(n,n.uint32()));break}case 10:{c.domain=n.string();break}default:n.skipType(h&7);break}}return c},p.decodeDelimited=function(n){return n instanceof o||(n=new o(n)),this.decode(n,n.uint32())},p.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.name!=null&&n.hasOwnProperty("name")&&!i.isString(n.name))return"name: string expected";if(n.input!=null&&n.hasOwnProperty("input")){if(!Array.isArray(n.input))return"input: array expected";for(var l=0;l<n.input.length;++l)if(!i.isString(n.input[l]))return"input: string[] expected"}if(n.output!=null&&n.hasOwnProperty("output")){if(!Array.isArray(n.output))return"output: array expected";for(var l=0;l<n.output.length;++l)if(!i.isString(n.output[l]))return"output: string[] expected"}if(n.attribute!=null&&n.hasOwnProperty("attribute")){if(!Array.isArray(n.attribute))return"attribute: array expected";for(var l=0;l<n.attribute.length;++l)if(!i.isString(n.attribute[l]))return"attribute: string[] expected"}if(n.attributeProto!=null&&n.hasOwnProperty("attributeProto")){if(!Array.isArray(n.attributeProto))return"attributeProto: array expected";for(var l=0;l<n.attributeProto.length;++l){var u=a.onnx.AttributeProto.verify(n.attributeProto[l]);if(u)return"attributeProto."+u}}if(n.node!=null&&n.hasOwnProperty("node")){if(!Array.isArray(n.node))return"node: array expected";for(var l=0;l<n.node.length;++l){var u=a.onnx.NodeProto.verify(n.node[l]);if(u)return"node."+u}}if(n.docString!=null&&n.hasOwnProperty("docString")&&!i.isString(n.docString))return"docString: string expected";if(n.opsetImport!=null&&n.hasOwnProperty("opsetImport")){if(!Array.isArray(n.opsetImport))return"opsetImport: array expected";for(var l=0;l<n.opsetImport.length;++l){var u=a.onnx.OperatorSetIdProto.verify(n.opsetImport[l]);if(u)return"opsetImport."+u}}return n.domain!=null&&n.hasOwnProperty("domain")&&!i.isString(n.domain)?"domain: string expected":null},p.fromObject=function(n){if(n instanceof a.onnx.FunctionProto)return n;var l=new a.onnx.FunctionProto;if(n.name!=null&&(l.name=String(n.name)),n.input){if(!Array.isArray(n.input))throw TypeError(".onnx.FunctionProto.input: array expected");l.input=[];for(var u=0;u<n.input.length;++u)l.input[u]=String(n.input[u])}if(n.output){if(!Array.isArray(n.output))throw TypeError(".onnx.FunctionProto.output: array expected");l.output=[];for(var u=0;u<n.output.length;++u)l.output[u]=String(n.output[u])}if(n.attribute){if(!Array.isArray(n.attribute))throw TypeError(".onnx.FunctionProto.attribute: array expected");l.attribute=[];for(var u=0;u<n.attribute.length;++u)l.attribute[u]=String(n.attribute[u])}if(n.attributeProto){if(!Array.isArray(n.attributeProto))throw TypeError(".onnx.FunctionProto.attributeProto: array expected");l.attributeProto=[];for(var u=0;u<n.attributeProto.length;++u){if(typeof n.attributeProto[u]!="object")throw TypeError(".onnx.FunctionProto.attributeProto: object expected");l.attributeProto[u]=a.onnx.AttributeProto.fromObject(n.attributeProto[u])}}if(n.node){if(!Array.isArray(n.node))throw TypeError(".onnx.FunctionProto.node: array expected");l.node=[];for(var u=0;u<n.node.length;++u){if(typeof n.node[u]!="object")throw TypeError(".onnx.FunctionProto.node: object expected");l.node[u]=a.onnx.NodeProto.fromObject(n.node[u])}}if(n.docString!=null&&(l.docString=String(n.docString)),n.opsetImport){if(!Array.isArray(n.opsetImport))throw TypeError(".onnx.FunctionProto.opsetImport: array expected");l.opsetImport=[];for(var u=0;u<n.opsetImport.length;++u){if(typeof n.opsetImport[u]!="object")throw TypeError(".onnx.FunctionProto.opsetImport: object expected");l.opsetImport[u]=a.onnx.OperatorSetIdProto.fromObject(n.opsetImport[u])}}return n.domain!=null&&(l.domain=String(n.domain)),l},p.toObject=function(n,l){l||(l={});var u={};if((l.arrays||l.defaults)&&(u.input=[],u.output=[],u.attribute=[],u.node=[],u.opsetImport=[],u.attributeProto=[]),l.defaults&&(u.name="",u.docString="",u.domain=""),n.name!=null&&n.hasOwnProperty("name")&&(u.name=n.name),n.input&&n.input.length){u.input=[];for(var c=0;c<n.input.length;++c)u.input[c]=n.input[c]}if(n.output&&n.output.length){u.output=[];for(var c=0;c<n.output.length;++c)u.output[c]=n.output[c]}if(n.attribute&&n.attribute.length){u.attribute=[];for(var c=0;c<n.attribute.length;++c)u.attribute[c]=n.attribute[c]}if(n.node&&n.node.length){u.node=[];for(var c=0;c<n.node.length;++c)u.node[c]=a.onnx.NodeProto.toObject(n.node[c],l)}if(n.docString!=null&&n.hasOwnProperty("docString")&&(u.docString=n.docString),n.opsetImport&&n.opsetImport.length){u.opsetImport=[];for(var c=0;c<n.opsetImport.length;++c)u.opsetImport[c]=a.onnx.OperatorSetIdProto.toObject(n.opsetImport[c],l)}if(n.domain!=null&&n.hasOwnProperty("domain")&&(u.domain=n.domain),n.attributeProto&&n.attributeProto.length){u.attributeProto=[];for(var c=0;c<n.attributeProto.length;++c)u.attributeProto[c]=a.onnx.AttributeProto.toObject(n.attributeProto[c],l)}return u},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.FunctionProto"},p}(),d}(),t.exports=a});function ue$1(e,t){if(!e)throw new Error(typeof t=="string"?t:t())}function Ie$1(e){return new TextDecoder().decode(e)}var H$1,Kt$1,nn,it,er$1,rt$1,ft$1,O,we,Xt$1,Jt$1,Zt$1,z$1=x$1(()=>{Je$1(),Ur$1(),H$1=ne(se$1()),Yt$1(),Kt$1=class{static arraysEqual(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}},nn=class{static preprocessInputShapes(e,t){let r=e.length===1?[1,e[0]]:e,o=t.length===1?[t[0],1]:t;return[r,o]}static postprocessOutputShape(e,t,r){t===1&&e.splice(e.length-2,1),r===1&&e.pop()}static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},it=class Sh{static calcShape(t,r,o=!1){let s=t.length,i=r.length;if(s===0)return r;if(i===0)return t;let a=Math.max(t.length,r.length),d=new Array(a);if(o){if(s<2||i<2)return;let p=nn.calcMatMulShape([t[s-2],t[s-1]],[r[i-2],r[i-1]]);if(p===void 0)return;[d[a-2],d[a-1]]=p}for(let p=o?3:1;p<=a;p++){let n=s-p<0?1:t[s-p],l=i-p<0?1:r[i-p];if(n!==l&&n>1&&l>1)return;d[a-p]=Math.max(n,l)}return d}static index(t,r){let o=new Array(r.length);return Sh.fillIndex(t,r,o),o}static fillIndex(t,r,o){let s=t.length-r.length;for(let i=0;i<r.length;i++)o[i]=t[s+i]%r[i]}static calc(t,r,o,s,i){let a=Sh.calcShape(t.dims,r.dims);if(a){if(s&&!O.areEqual(a,t.dims))return;let d=O.size(a),p=s?t:new Y$1(a,i||t.type);if(a.length===0)p.set([],o(t.get([]),r.get([])));else{let n=new Array(a.length),l=new Array(t.dims.length),u=new Array(r.dims.length),c=0,h=0,f=!1,g=!1;t.dims.length===0&&(c=t.get([]),f=!0),r.dims.length===0&&(h=r.get([]),g=!0);let b;for(let E=0;E<d;E++){b=E;for(let y=a.length-1;y>=0;y--)n[y]=b%a[y],b=Math.floor(b/a[y]);f||(Sh.fillIndex(n,t.dims,l),c=t.get(l)),g||(Sh.fillIndex(n,r.dims,u),h=r.get(u)),p.set(n,o(c,h))}}return p}}static isValidBroadcast(t,r){let o=t.length,s=r.length;if(o>s)return!1;for(let i=1;i<=o;i++)if(t[o-i]!==1&&t[o-i]!==r[s-i])return!1;return!0}static getBroadcastDims(t,r){let o=t.length,s=[];for(let i=0;i<o;i++){let a=o-1-i,d=t[a]||1;(r[r.length-1-i]||1)>1&&d===1&&s.unshift(a)}return s}},er$1=class{static getShapeOfGemmResult(e,t,r,o,s){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let i,a,d;t?(i=e[1],a=e[0]):(i=e[0],a=e[1]);let p=-1;if(o?(d=r[0],p=1):(d=r[1],p=0),r[p]!==a)throw new Error("dimension mismatch");if(i<=0||d<=0||a<=0)throw new Error("invalid shape specified");if(s&&!it.isValidBroadcast(s,[i,d]))throw new Error("gemm: invalid bias shape for broadcast");return[i,d,a]}},rt$1=class Dh{static tensorDataTypeFromProto(t){switch(t){case H$1.onnx.TensorProto.DataType.INT8:return"int8";case H$1.onnx.TensorProto.DataType.UINT8:return"uint8";case H$1.onnx.TensorProto.DataType.BOOL:return"bool";case H$1.onnx.TensorProto.DataType.INT16:return"int16";case H$1.onnx.TensorProto.DataType.UINT16:return"uint16";case H$1.onnx.TensorProto.DataType.INT32:return"int32";case H$1.onnx.TensorProto.DataType.UINT32:return"uint32";case H$1.onnx.TensorProto.DataType.FLOAT:return"float32";case H$1.onnx.TensorProto.DataType.DOUBLE:return"float64";case H$1.onnx.TensorProto.DataType.STRING:return"string";case H$1.onnx.TensorProto.DataType.INT64:return"int32";case H$1.onnx.TensorProto.DataType.UINT64:return"uint32";default:throw new Error(`unsupported data type: ${H$1.onnx.TensorProto.DataType[t]}`)}}static tensorDataTypeStringToEnum(t){switch(t){case"int8":return H$1.onnx.TensorProto.DataType.INT8;case"uint8":return H$1.onnx.TensorProto.DataType.UINT8;case"bool":return H$1.onnx.TensorProto.DataType.BOOL;case"int16":return H$1.onnx.TensorProto.DataType.INT16;case"uint16":return H$1.onnx.TensorProto.DataType.UINT16;case"int32":return H$1.onnx.TensorProto.DataType.INT32;case"uint32":return H$1.onnx.TensorProto.DataType.UINT32;case"float32":return H$1.onnx.TensorProto.DataType.FLOAT;case"float64":return H$1.onnx.TensorProto.DataType.DOUBLE;case"string":return H$1.onnx.TensorProto.DataType.STRING;case"int64":return H$1.onnx.TensorProto.DataType.INT64;case"uint64":return H$1.onnx.TensorProto.DataType.UINT64;default:throw new Error(`unsupported data type: ${t}`)}}static tensorDimsFromProto(t){return t.map(r=>kt$1.isLong(r)?r.toNumber():r)}static tensorValueTypeFromProto(t){return{tensorType:Dh.tensorDataTypeFromProto(t.elemType),shape:{dims:Dh.tensorDimsFromProto(t.shape.dim.map(r=>r.dimValue))}}}static tensorDimsFromORTFormat(t){let r=[];for(let o=0;o<t.dimsLength();o++)r.push(ft$1.longToNumber(t.dims(o)));return r}static tensorAttributesFromORTFormat(t){let r=[];for(let o=0;o<t.attributesLength();o++)r.push(t.attributes(o));return r}},ft$1=class{static longToNumber(e,t){return kt$1.isLong(e)?e.toNumber():e instanceof m.Long?kt$1.fromValue({low:e.low,high:e.high,unsigned:t??!1}).toNumber():e}static isLong(e){return kt$1.isLong(e)||e instanceof m.Long}},O=class _h{static size(t){return _h.getSizeFromDimensionRange(t,0,t.length)}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return _h.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return _h.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,o){let s=1;for(let i=r;i<o;i++){if(t[i]<=0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains 0 or negative values in them.");s*=t[i]}return s}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let o=new Array(r);o[r-1]=1,o[r-2]=t[r-1];for(let s=r-3;s>=0;--s)o[s]=o[s+1]*t[s+1];return o}static transpose(t){return t.slice().reverse()}static indicesToOffset(t,r,o){o===void 0&&(o=t.length);let s=0;for(let i=0;i<o;++i)s+=r[i]*t[i];return s}static offsetToIndices(t,r){let o=r.length;if(o===0)return[];if(o===1)return[t*r[0]];let s=new Array(r.length);for(let i=0;i<s.length-1;++i)s[i]=Math.floor(t/r[i]),t-=s[i]*r[i];return s[s.length-1]=t,s}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(o=>this.normalizeAxis(o,r))}static incrementIndex(t,r,o){if(r.length===0||t.length===0)throw new Error("Index incrementing unsupported for scalar Tensor");if(o===void 0)o=r.length;else if(o<=0||o>r.length)throw new Error("Incorrect axis to increment on");for(let s=o-1;s>=0&&(t[s]++,!(t[s]<r[s]));--s)t[s]=0}static calculateReshapedDims(t,r){if(r.length===0){if(t.length===0||_h.size(t)===1)return[];throw new Error("cannot reshape to a scalar Tensor")}let o=r.length,s=new Array(o),i=-1,a=1;for(let p=0;p<o;p++){if(r[p]<-1)throw new Error("a dimension in shape hints cannot be less than -1");if(r[p]===-1){if(i!==-1)throw new Error("at most one dimension in shape hints can be -1");i=p}else{if(r[p]===0){if(p>=t.length)throw new Error("the dimension with value zero exceeds the dimension size of the input tensor");s[p]=t[p]}else s[p]=r[p];a*=s[p]}}let d=_h.size(t);if(i!==-1){if(d%a!==0)throw new Error(`the input tensor cannot be reshaped to the requested shape. Input shape: [${t}] Output shape: [${r}]`);s[i]=d/a}else if(a!==d)throw new Error("reshapedDims and originalDims don't have matching sizes");return s}static sortBasedOnPerm(t,r){return r?r.map(o=>t[o]):t.slice().reverse()}static padShape(t,r){let o=t.length;return t.map((s,i)=>s+r[i]+r[i+o])}static areEqual(t,r){return t.length!==r.length?!1:t.every((o,s)=>o===r[s])}static validateDimsAndCalcSize(t){if(t.length>6)throw new TypeError("Only rank 0 to 6 is supported for tensor shape.");let r=1;for(let o of t){if(!Number.isInteger(o))throw new TypeError(`Invalid shape: ${o} is not an integer`);if(o<0||o>2147483647)throw new TypeError(`Invalid shape: length ${o} is not allowed`);r*=o}return r}static flattenShape(t,r){r<0&&(r+=t.length);let o=t.reduce((i,a)=>i*a,1),s=t.slice(r).reduce((i,a)=>i*a,1);return[o/s,s]}static squeezeShape(t,r){let o=new Array;r=_h.normalizeAxes(r,t.length);for(let s=0;s<t.length;s++){let i=r.indexOf(s)>=0;if(i&&t[s]!==1)throw new Error("squeeze an axis of size different than 1");(r.length===0&&t[s]>1||r.length>0&&!i)&&o.push(t[s])}return o}static unsqueezeShape(t,r){let o=new Array(t.length+r.length);o.fill(0);for(let i=0;i<r.length;i++){let a=_h.normalizeAxis(r[i],o.length);if(a>=o.length)throw new Error("'axes' has an out of range axis");if(o[a]!==0)throw new Error("'axes' has a duplicate axis");o[a]=1}let s=0;for(let i=0;i<o.length;i++)o[i]===0&&(o[i]=t[s++]);if(s!==t.length)throw new Error("the unsqueezed dimension could not be established");return o}},we=class Mh{static splitShape(t,r,o,s){if(o.length===0){if(!s)throw new Error("need to know number of outputs when the 'split' attribute is not specified");Mh.determineSplit(t[r],s,o)}let i=[],a=[0];for(let d=0;d<o.length;++d){d!==0&&a.push(a[d-1]+o[d-1]);let p=t.slice();p[r]=o[d],i.push(p)}return[i,a]}static determineSplit(t,r,o){if(t%r!==0)throw new Error("cannot split tensor to equal sized parts");for(let s=0;s<r;++s)o.push(t/r)}},Xt$1=class Ih{static adjustPoolAttributes(t,r,o,s,i,a){if(!t&&o.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let d=0;d<r.length-2;d++)d>=o.length?o.push(r[d+2]):o[d]=r[d+2];for(let d=0;d<o.length;d++)if(d<s.length){if(s[d]<0)throw new Error("strides should be greater than or equal to 1")}else s.push(1);for(let d=0;d<o.length;d++)if(d<i.length){if(i[d]<0)throw new Error("dilations should be greater than or equal to 1")}else i.push(1);for(let d=0;d<o.length*2;d++)if(d<a.length){if(a[d]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let d=0;d<o.length;d++){if(o[d]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[d]>=o[d]||a[d+o.length]>=o[d])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,o,s,i,a){if(a){if(i.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(s.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let d=0;d<t.length-2;d++)Ih.adjustPadAndReturnShape(t[d+2],r[d],o[d],s[d],i,d,d+t.length-2,a)}}static computePoolOutputShape(t,r,o,s,i,a,d){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let p=[r[0],r[1]];return Ih.computeShapeHelper(t,r,p,o,s,i,a,d),p}static computeConvOutputShape(t,r,o,s,i,a,d){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let p=[t[0],r[0]];return Ih.computeShapeHelper(!1,t,p,o,s,i,a,d),p}static computeShapeHelper(t,r,o,s,i,a,d,p){if(t)for(let n=0;n<r.length-2;n++)o.push(1);else for(let n=0;n<r.length-2;n++)o.push(Ih.adjustPadAndReturnShape(r[n+2],s[n],i[n],a[n],d,n,n+r.length-2,p))}static adjustPadAndReturnShape(t,r,o,s,i,a,d,p){let n=o*(s-1)+1;if(p&&p!=="NOTSET")switch(p){case"VALID":return i[a]=0,i[d]=0,Math.floor((t-n)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(o!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let l=((t+r-1)/r-1)*r+s-t;return i[a]=Math.floor(p==="SAME_LOWER"?(l+1)/2:l/2),i[d]=l-i[a],Math.floor((t+l-s)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+i[a]+i[d]-n)/r+1)}},Jt$1=-34028234663852886e22,Zt$1=34028234663852886e22});function Yl(e){switch(e){case"bool":case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;case"float64":return 8;default:throw new Error(`cannot calculate sizeof() on type ${e}`)}}function Ci(e){switch(e){case k.onnx.TensorProto.DataType.UINT8:case k.onnx.TensorProto.DataType.INT8:case k.onnx.TensorProto.DataType.BOOL:return 1;case k.onnx.TensorProto.DataType.UINT16:case k.onnx.TensorProto.DataType.INT16:return 2;case k.onnx.TensorProto.DataType.FLOAT:case k.onnx.TensorProto.DataType.INT32:case k.onnx.TensorProto.DataType.UINT32:return 4;case k.onnx.TensorProto.DataType.INT64:case k.onnx.TensorProto.DataType.DOUBLE:case k.onnx.TensorProto.DataType.UINT64:return 8;default:throw new Error(`cannot calculate sizeof() on type ${k.onnx.TensorProto.DataType[e]}`)}}function Ql(e,t){return new(Vi(t))(e)}function Vi(e){switch(e){case"bool":case"uint8":return Uint8Array;case"int8":return Int8Array;case"int16":return Int16Array;case"uint16":return Uint16Array;case"int32":return Int32Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"float32":return Float32Array;case"float64":return Float64Array;default:throw new Error("unspecified error")}}function an(e,t){if(t===k.onnx.TensorProto.DataType.INT64||t===on.TensorDataType.INT64){if(e.greaterThanOrEqual(2147483648)||e.lessThan(-2147483648))throw new TypeError("int64 is not supported")}else if(t===k.onnx.TensorProto.DataType.UINT32||t===on.TensorDataType.UINT32||t===k.onnx.TensorProto.DataType.UINT64||t===on.TensorDataType.UINT64){if(e.greaterThanOrEqual(4294967296)||e.lessThan(0))throw new TypeError("uint64 is not supported")}else throw new TypeError(`not a LONG type: ${k.onnx.TensorProto.DataType[t]}`);return e.toNumber()}function Gi(e,t,r){switch(t){case k.onnx.TensorProto.DataType.BOOL:case k.onnx.TensorProto.DataType.UINT8:return e.getUint8(r);case k.onnx.TensorProto.DataType.INT8:return e.getInt8(r);case k.onnx.TensorProto.DataType.UINT16:return e.getUint16(r,!0);case k.onnx.TensorProto.DataType.INT16:return e.getInt16(r,!0);case k.onnx.TensorProto.DataType.FLOAT:return e.getFloat32(r,!0);case k.onnx.TensorProto.DataType.INT32:return e.getInt32(r,!0);case k.onnx.TensorProto.DataType.UINT32:return e.getUint32(r,!0);case k.onnx.TensorProto.DataType.INT64:return an(kt$1.fromBits(e.getUint32(r,!0),e.getUint32(r+4,!0),!1),t);case k.onnx.TensorProto.DataType.DOUBLE:return e.getFloat64(r,!0);case k.onnx.TensorProto.DataType.UINT64:return an(kt$1.fromBits(e.getUint32(r,!0),e.getUint32(r+4,!0),!0),t);default:throw new Error(`cannot read from DataView for type ${k.onnx.TensorProto.DataType[t]}`)}}var Ri,k,on,Y$1,Yt$1=x$1(()=>{Ri=ne(Po()),Ur$1(),ge$1(),k=ne(se$1()),z$1(),on=P$1.experimental.fbs,Y$1=class Ph{constructor(t,r,o,s,i,a=Ri.Guid.create()){this.dims=t,this.type=r,this.dataProvider=o,this.asyncDataProvider=s,this.cache=i,this.dataId=a,this.size=O.validateDimsAndCalcSize(t);let d=this.size,p=o===void 0&&s===void 0&&i===void 0;if(i!==void 0&&i.length!==d)throw new RangeError("Input dims doesn't match data length.");if(r==="string"){if(i!==void 0&&(!Array.isArray(i)||!i.every(n=>typeof n=="string")))throw new TypeError("cache should be a string array");p&&(this.cache=new Array(d))}else{if(i!==void 0){let n=Vi(r);if(!(i instanceof n))throw new TypeError(`cache should be type ${n.name}`)}if(p){let n=new ArrayBuffer(d*Yl(r));this.cache=Ql(n,r)}}}get data(){if(this.cache===void 0){let t=this.dataProvider(this.dataId);if(t.length!==this.size)throw new Error("Length of data provided by the Data Provider is inconsistent with the dims of this Tensor.");this.cache=t}return this.cache}get stringData(){if(this.type!=="string")throw new TypeError("data type is not string");return this.data}get integerData(){switch(this.type){case"uint8":case"int8":case"uint16":case"int16":case"int32":case"uint32":case"bool":return this.data;default:throw new TypeError("data type is not integer (uint8, int8, uint16, int16, int32, uint32, bool)")}}get floatData(){switch(this.type){case"float32":case"float64":return this.data;default:throw new TypeError("data type is not float (float32, float64)")}}get numberData(){if(this.type!=="string")return this.data;throw new TypeError("type cannot be non-number (string)")}get(t){return this.data[O.indicesToOffset(t,this.strides)]}set(t,r){this.data[O.indicesToOffset(t,this.strides)]=r}async getData(){return this.cache===void 0&&(this.cache=await this.asyncDataProvider(this.dataId)),this.cache}get strides(){return this._strides||(this._strides=O.computeStrides(this.dims)),this._strides}static fromProto(t){if(!t)throw new Error("cannot construct Value from an empty tensor");let r=rt$1.tensorDataTypeFromProto(t.dataType),o=rt$1.tensorDimsFromProto(t.dims),s=new Ph(o,r);if(r==="string")t.stringData.forEach((i,a)=>{s.data[a]=Ie$1(i)});else if(t.rawData&&typeof t.rawData.byteLength=="number"&&t.rawData.byteLength>0){let i=s.data,a=new DataView(t.rawData.buffer,t.rawData.byteOffset,t.rawData.byteLength),d=Ci(t.dataType),p=t.rawData.byteLength/d;if(t.rawData.byteLength%d!==0)throw new Error("invalid buffer length");if(i.length!==p)throw new Error("buffer length mismatch");for(let n=0;n<p;n++){let l=Gi(a,t.dataType,n*d);i[n]=l}}else{let i;switch(t.dataType){case k.onnx.TensorProto.DataType.FLOAT:i=t.floatData;break;case k.onnx.TensorProto.DataType.INT32:case k.onnx.TensorProto.DataType.INT16:case k.onnx.TensorProto.DataType.UINT16:case k.onnx.TensorProto.DataType.INT8:case k.onnx.TensorProto.DataType.UINT8:case k.onnx.TensorProto.DataType.BOOL:i=t.int32Data;break;case k.onnx.TensorProto.DataType.INT64:i=t.int64Data;break;case k.onnx.TensorProto.DataType.DOUBLE:i=t.doubleData;break;case k.onnx.TensorProto.DataType.UINT32:case k.onnx.TensorProto.DataType.UINT64:i=t.uint64Data;break;default:throw new Error("unspecific error")}if(i==null)throw new Error("failed to populate data from a tensorproto value");let a=s.data;if(a.length!==i.length)throw new Error("array length mismatch");for(let d=0;d<i.length;d++){let p=i[d];kt$1.isLong(p)?a[d]=an(p,t.dataType):a[d]=p}}return s}static fromData(t,r,o){return new Ph(r,o,void 0,void 0,t)}static fromOrtTensor(t){if(!t)throw new Error("cannot construct Value from an empty tensor");let r=rt$1.tensorDimsFromORTFormat(t),o=rt$1.tensorDataTypeFromProto(t.dataType()),s=new Ph(r,o);if(o==="string")for(let i=0;i<t.stringDataLength();i++)s.data[i]=t.stringData(i);else if(t.rawDataArray()&&typeof t.rawDataLength()=="number"&&t.rawDataLength()>0){let i=s.data,a=new DataView(t.rawDataArray().buffer,t.rawDataArray().byteOffset,t.rawDataLength()),d=Ci(t.dataType()),p=t.rawDataLength()/d;if(t.rawDataLength()%d!==0)throw new Error("invalid buffer length");if(i.length!==p)throw new Error("buffer length mismatch");for(let n=0;n<p;n++){let l=Gi(a,t.dataType(),n*d);i[n]=l}}return s}}});function D(e){return e===1?tf:ef}function zi(e){let t=D(e);return`${t.version}
      precision highp float;
      ${t.attribute} vec3 position;
      ${t.attribute} vec2 textureCoord;

      ${t.varyingVertex} vec2 TexCoords;

      void main()
      {
          gl_Position = vec4(position, 1.0);
          TexCoords = textureCoord;
      }`}function Mi(e){let t=D(e);return`${t.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${t.varyingFrag} vec2 TexCoords;
    ${t.outputDeclaration}
    const vec2 halfCR = vec2(0.5, 0.5);

    // Custom vector types to handle higher dimenalities.
    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    `}function Ui(e,t){let r=D(e);return`
  void main() {
    int indices[${t}];
    toVec(TexCoords, indices);
    vec4 result = vec4(process(indices));
    ${r.output} = result;
  }
  `}var tf,ef,q=x$1(()=>{tf={version:"",attribute:"attribute",varyingVertex:"varying",varyingFrag:"varying",texture2D:"texture2D",output:"gl_FragColor",outputDeclaration:""},ef={version:"#version 300 es",attribute:"in",varyingVertex:"out",varyingFrag:"in",texture2D:"texture",output:"outputColor",outputDeclaration:"out vec4 outputColor;"}}),N=x$1(()=>{});async function sn(e,t=o=>0,r){return new Promise((o,s)=>{let i=0,a=()=>{if(e()){o();return}i++;let d=t(i);setTimeout(a,d)};a()})}function rr$1(e){return ue$1(typeof e<"u"&&e.length!==0,()=>"empty string found for sampler name"),"get"+e.charAt(0).toUpperCase()+e.slice(1)}function Wi(e){return ue$1(typeof e<"u"&&e.length!==0,()=>"empty string found for sampler name"),"get"+e.charAt(0).toUpperCase()+e.slice(1)+"AtOutCoords"}function le$1(e,t){let r=JSON.parse(JSON.stringify(e));return r=t,r}function fe$1(e,t){return t.map(r=>e[r]).join(", ")}function at(e){if(e<=1)return"int";if(e===2)return"ivec2";if(e===3)return"ivec3";if(e===4)return"ivec4";if(e===5)return"ivec5";if(e===6)return"ivec6";throw Error(`GPU for rank ${e} is not yet supported`)}function St$1(e=6){return["x","y","z","w","u","v"].slice(0,e)}var Pt$1=x$1(()=>{z$1()});function rf(e,t){return St$1(t).map(r=>`${e}.${r}`)}function ce$1(e,t){return t===1?[e]:rf(e,t)}function Et$1(){return`
    float getChannel(vec4 frag, int dim) {
      int modCoord = imod(dim, 2);
      return modCoord == 0 ? frag.r : frag.g;
    }

    float getChannel(vec4 frag, vec2 innerDims) {
      vec2 modCoord = mod(innerDims, 2.);
      return modCoord.x == 0. ?
        (modCoord.y == 0. ? frag.r : frag.g) :
        (modCoord.y == 0. ? frag.b : frag.a);
    }
  `}var Qt$1=x$1(()=>{Pt$1()});function of(e,t,r){if(e===0)return"false";if(e===1)return`rc > ${t[0]}`;let o="";for(let s=e-2;s<e;s++)o+=`${r[s]} >= ${t[s-e+2]}`,s<e-1&&(o+="||");return o}function af(e,t){let r=e.length;if(r===0)return"getA(), 0, 0, 0";if(r===1)return`getA(rc),
            rc + 1 >= ${e[0]} ? 0. : getA(rc + 1),
            0, 0`;let o="r, c",s="r, cp1",i="rp1, c",a="rp1, cp1",d="";if(r>2)for(let p=0;p<r-2;++p)d=d+`${t[p]},`;return`getA(${d}${o}),
          rEdge ? 0. : getA(${d}${i}),
          cEdge ? 0. : getA(${d}${s}),
          rEdge || cEdge ? 0. : getA(${d}${a})`}function sf(e,t,r,o){return e===0||e===1?"":`
    int r = ${t[e-2]};
    int c = ${t[e-1]};
    int rp1 = ${t[e-2]} + 1;
    int cp1 = ${t[e-1]} + 1;
    bool rEdge = rp1 >= ${o};
    bool cEdge = cp1 >= ${r};
    `}var Hi,nf,qi,ji=x$1(()=>{q(),N(),Pt$1(),Qt$1(),Hi={name:"pack",inputNames:["A"],inputTypes:[1]},nf=(e,t)=>{let r=D(e.session.backend.glContext.version),o=t.dims,s=o.length,i=t.dims.length,a=at(i),d=ce$1("rc",i),p=sf(i,d,o[o.length-2],o[o.length-1]),n;s===0?n=[1,1]:s===1?n=[o[0],1]:n=[o[i-1],o[i-2]];let l=of(i,n,d),u=af(o,d),c=`
        void main() {
          ${a} rc = getOutputCoords();

          if(${l}) {
            ${r.output} = vec4(0);
          } else {
            ${p}

            ${r.output} = vec4(${u});
          }
        }
      `;return{...Hi,hasMain:!0,output:{dims:t.dims,type:t.type,textureType:2},shaderSource:c}},qi=(e,t)=>({...Hi,get:()=>nf(e,t)})});function un(e){if(e.length===0)return[1,1,1];let t=1;for(let r=0;r<e.length-2;++r)t*=e[r];return[t,e.length>1?e[e.length-2]:1,e[e.length-1]]}function Xi(e,t){let r=!1;return e.length===0||t.length===0?r=!0:e.length<2||t.length<2?r=e[e.length-1]===t[t.length-1]:r=e[e.length-1]===t[t.length-1]&&e[e.length-2]===t[t.length-2],r}function ff(e){let t=O.computeStrides(e),r=["b","r","c"],o="index";return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t.map((s,i)=>{let a=`int ${r[i]} = ${o} / ${s}`,d=i===t.length-1?`int ${r[i+1]} = ${o} - ${r[i]} * ${s}`:`index -= ${r[i]} * ${s}`;return`${a}; ${d};`}).join("")}
      return ivec3(b, r, c);
    }
  `}function cf(e){let t=O.computeStrides(e);return`
  int getFlattenedIndex(ivec3 coords) {
    // reverse y, z order
    return coords.x * ${t[0]} + coords.z * ${t[1]} + coords.y;
  }
`}var uf,lf,Ki,Ji=x$1(()=>{z$1(),q(),N(),Qt$1(),uf=e=>({name:"Reshape (packed)",inputTypes:[2],inputNames:["A"],cacheHint:`${e}`}),lf=(e,t,r,o)=>{let s=t.dims,i=o,a="";for(let n=0;n<4;n++){let l="";switch(n){case 0:l="outputCoords = rc;";break;case 1:l="outputCoords = ivec3(rc.x, rc.y+1, rc.z);";break;case 2:l="outputCoords = ivec3(rc.x, rc.y, rc.z+1);";break;case 3:l="outputCoords = ivec3(rc.x, rc.y+1, rc.z+1);";break;default:throw new Error}a+=`
        ${l}
        ${n>0?"if(outputCoords.y < rows && outputCoords.z < cols){":""}
          int flattenedIndex = getFlattenedIndex(outputCoords);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flattenedIndex);
          vec2 innerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${n}] = getChannel(getA(inputRC.x, inputRC.y, inputRC.z), innerDims);

        ${n>0?"}":""}
      `}let d=D(e.session.backend.glContext.version),p=`
      ${ff(s)}
      ${cf(i)}
      ${Et$1()}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.0);

        ivec3 outputCoords;
        int rows = ${i[2]};
        int cols = ${i[1]};

        ${a}
        ${d.output} = result;
      }
    `;return{...r,output:{dims:i,type:t.type,textureType:2},shaderSource:p,hasMain:!0}},Ki=(e,t,r)=>{let o=uf(r);return{...o,get:()=>lf(e,t,o,r)}}}),ln,Zi=x$1(()=>{q(),N(),ln=(e,t)=>{let r=t.shape,o=D(e.session.backend.glContext.version),s=`
    const float FLOAT_MAX = 1.70141184e38;
    const float FLOAT_MIN = 1.17549435e-38;

    bool isNaN(float val) {
      return (val < 1.0 || 0.0 < val || val == 0.0) ? false : true;
    }

    highp vec4 encodeAsUint8(highp float v) {
      if (isNaN(v)) {
        return vec4(255, 255, 255, 255);
      }

      highp float av = abs(v);

      if(av < FLOAT_MIN) {
        return vec4(0.0, 0.0, 0.0, 0.0);
      } else if(v > FLOAT_MAX) {
        return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
      } else if(v < -FLOAT_MAX) {
        return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
      }

      highp vec4 c = vec4(0,0,0,0);

      highp float e = floor(log2(av));
      highp float m = exp2(fract(log2(av))) - 1.0;

      c[2] = floor(128.0 * m);
      m -= c[2] / 128.0;
      c[1] = floor(32768.0 * m);
      m -= c[1] / 32768.0;
      c[0] = floor(8388608.0 * m);

      highp float ebias = e + 127.0;
      c[3] = floor(ebias / 2.0);
      ebias -= c[3] * 2.0;
      c[2] += floor(ebias) * 128.0;

      c[3] += 128.0 * step(0.0, -v);

      return c / 255.0;
    }

    void main() {
      float value = ${o.texture2D}(X,TexCoords).r;
      ${o.output} = encodeAsUint8(value);
    }`,i={name:"Uint8Encode",inputTypes:[0],inputNames:["X"],output:{dims:r,type:t.tensor.type,textureType:3},shaderSource:s,hasMain:!0};return e.executeProgram(i,[t.tensor])}});function df(e,t){if(e===1)return"rc";let r="";for(let o=0;o<e;o++)r+=t[o],o<e-1&&(r+=",");return r}var Yi,pf,Qi,ta=x$1(()=>{q(),N(),Pt$1(),Qt$1(),Yi={name:"unpack",inputNames:["A"],inputTypes:[2]},pf=(e,t)=>{let r=t.dims.length,o=ce$1("rc",r),s=o.slice(-2),i=at(r),a=Et$1(),d=t.dims.length===0?"":df(r,o),p=r<=1?"rc":`vec2(${s.join(",")})`,n=D(e.session.backend.glContext.version),l=`
    ${a}
    void main() {
      ${i} rc = getOutputCoords();

       // Sample the texture with the coords to get the rgba channel value.
       vec4 packedInput = getA(${d});

       ${n.output} = vec4(getChannel(packedInput, ${p}), 0, 0, 0);
     }
   `;return{...Yi,hasMain:!0,output:{dims:t.dims,type:t.type,textureType:0},shaderSource:l}},Qi=(e,t)=>({...Yi,get:()=>pf(e,t)})}),nr$1,_e$1,or$1,Se$1=x$1(()=>{pt$1(),nr$1=class{constructor(e,t=1){if(t===1)this.internalFormat=e.R32F,this.format=e.RED,this.textureType=e.FLOAT,this.channelSize=t;else if(t===4)this.internalFormat=e.RGBA32F,this.format=e.RGBA,this.textureType=e.FLOAT,this.channelSize=t;else throw new Error(`Invalid number of channels: ${t}`)}encode(e,t){let r,o;return e.constructor!==Float32Array&&(M.warning("Encoder","data was not of type Float32; creating new Float32Array"),o=new Float32Array(e)),t*this.channelSize>e.length?(M.warning("Encoder","Source data too small. Allocating larger array"),o=e,r=this.allocate(t*this.channelSize),o.forEach((s,i)=>r[i]=s)):(o=e,r=o),r}allocate(e){return new Float32Array(e*4)}decode(e,t){return this.channelSize===1?e.filter((r,o)=>o%4===0).subarray(0,t):e.subarray(0,t)}},_e$1=class{constructor(e,t=1,r){if(t!==1&&t!==4)throw new Error(`Invalid number of channels: ${t}`);this.internalFormat=e.RGBA,this.format=e.RGBA,this.channelSize=t,this.textureType=r||e.FLOAT}encode(e,t){let r=e;return this.channelSize===1&&(M.verbose("Encoder","Exploding into a larger array"),r=this.allocate(t),e.forEach((o,s)=>r[s*4]=o)),r}allocate(e){return new Float32Array(e*4)}decode(e,t){return this.channelSize===1?e.filter((r,o)=>o%4===0).subarray(0,t):e.subarray(0,t)}},or$1=class{constructor(e,t=1){if(this.channelSize=4,t===1)this.internalFormat=e.ALPHA,this.format=e.ALPHA,this.textureType=e.UNSIGNED_BYTE,this.channelSize=t;else if(t===4)this.internalFormat=e.RGBA,this.format=e.RGBA,this.textureType=e.UNSIGNED_BYTE,this.channelSize=t;else throw new Error(`Invalid number of channels: ${t}`)}encode(e,t){return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}allocate(e){return new Uint8Array(e*this.channelSize)}decode(e,t){if(e instanceof Uint8Array)return e.subarray(0,t);throw new Error(`Invalid array type: ${e.constructor}`)}}}),Ae$1,ea,fn,ra=x$1(()=>{z$1(),N(),Ae$1=(e,t,r)=>{let o=r===0||r===1?1:4,s=r===2,i=r===1||r===2,a=r===4?t.length-1:void 0,d=r===4?t.map((p,n)=>n===t.length-1?p*4:p):void 0;return fn(e,t,o,d,{isPacked:s,reverseWH:i,breakAxis:a})},ea=(e,t,r)=>{let o=Ae$1(e,t,r);return[o.width,o.height]},fn=(e,t,r=1,o,s)=>{let i=!!(s&&s.isPacked),[a,d]=e.computeTextureWH(i&&o||t,s),p=t.length,n=t.slice(0);if(p===0&&(n=[1]),r===1)o=t;else if(i){if(r!==4)throw new Error("a packed texture must be 4-channel");o=t,p>0&&(n[p-1]=Math.ceil(n[p-1]/2)),p>1&&(n[p-2]=Math.ceil(n[p-2]/2))}else if(!o)throw new Error("Unpacked shape is needed when using channels > 1");return{width:a,height:d,channels:r,isPacked:i,shape:n,strides:O.computeStrides(n),unpackedShape:o,reversedWH:s&&s.reverseWH}}}),mf,ir$1,oa=x$1(()=>{pt$1(),Yt$1(),z$1(),ji(),Ji(),Zi(),ta(),Se$1(),ra(),N(),mf=(e,t)=>{let r=t.map(s=>`${s.unpackedShape.join(",")};${s.width}x${s.height}`).join("_"),o=e.name;return e.cacheHint&&(o+="["+e.cacheHint+"]"),o+=":"+r,o},ir$1=class{constructor(e){this.session=e,this.packedTextureDataCache=new Map,this.unpackedTextureDataCache=new Map}calculateTextureWidthAndHeight(e,t){return ea(this.session.layoutStrategy,e,t)}executeProgram(e,t){if(t.length<e.inputNames.length)throw new Error(`Input size mustn't be less than ${e.inputNames.length}.`);if(e.inputNames.length!==e.inputTypes.length)throw new Error("input names size does not match input types");let r=[];for(let p=0;p<e.inputNames.length;++p)r[p]=this.getOrCreateTextureData(t[p],e.inputTypes[p]);let o=mf(e,r),s=this.session.programManager.getArtifact(o),i=s?s.programInfo:typeof e.get=="function"?e.get():e,a=Ae$1(this.session.layoutStrategy,i.output.dims,i.output.textureType),d=this.createTextureData(a,i.output.type);return s||(s=this.session.programManager.build(i,r,d),this.session.programManager.setArtifact(o,s)),this.runProgram(s,r,d),d}run(e,t){return this.executeProgram(e,t).tensor}runProgram(e,t,r){for(let o=0;o<t.length;++o)if(!!t[o].isPacked!=(e.programInfo.inputTypes[o]===2))throw new Error(`input[${o}] property packed inconsistent`);if(!!r.isPacked!=(e.programInfo.output.textureType===2))throw new Error("output property packed inconsistent");this.session.programManager.run(e,t,r)}getOrCreateTextureData(e,t){let r=this.getTextureData(e.dataId,t===2);if(!r&&(r=this.getTextureData(e.dataId,t!==2),r))return t===2?this.pack(r):this.unpack(r);if(!r){let o=Ae$1(this.session.layoutStrategy,e.dims,t);if(t===4){let s=e.dims;if(s.length===4){let i=[s[0],Math.ceil(s[1]*s[2]*s[3]/4)],a=Ae$1(this.session.layoutStrategy,i,t),d=e.numberData;if(s[1]*s[2]*s[3]%4!==0){let p=s[0],n=s[1]*s[2]*s[3],l=Math.ceil(n*1/4)*4,u=p*l;d=new Float32Array(u);for(let c=0;c<p;++c){let h=c*n,f=c*l+c%1*n;d.set(e.numberData.subarray(h,h+n),f)}}return this.createTextureData(a,e.type,d,e,1)}}if(t===2){let s=fn(this.session.layoutStrategy,e.dims,1,[],{reverseWH:!0}),i=this.createTextureData(s,e.type,e.numberData,e,1);r=this.pack(i)}else r=this.createTextureData(o,e.type,e.numberData,e,1)}return r}createTextureDataFromLayoutBindTensor(e,t,r,o){return this.createTextureData(e,t,r,o,1)}createTextureData(e,t,r,o,s){M.verbose("InferenceHandler",`Creating TextureData: layout:[${JSON.stringify(e)}]`);let i=this.session.textureManager.createTextureFromLayout(t,e,r,s);return this.createTextureDataFromTexture(e,t,i,o)}reshapeUnpacked(e,t){let r=this.getOrCreateTextureData(e,0),o={channels:r.channels,height:r.height,width:r.width,shape:t.length!==0?t:[1],strides:O.computeStrides(t),unpackedShape:t};return this.createTextureDataFromTexture(o,e.type,r.texture).tensor}reshapePacked(e,t){let r=this.getOrCreateTextureData(e,2);if(Xi(e.dims,t)){let d={channels:r.channels,height:r.height,width:r.width,shape:t.length!==0?t:[1],strides:O.computeStrides(t),unpackedShape:t,isPacked:!0};return this.createTextureDataFromTexture(d,e.type,r.texture).tensor}let o=un(e.dims),s=un(t),i=this.reshapePacked(e,o),a=this.run(Ki(this,i,s),[i]);return this.reshapePacked(a,t)}cast(e,t){let r=this.getOrCreateTextureData(e,0);return this.createTextureDataFromTexture(r,t,r.texture).tensor}createTextureDataFromTexture(e,t,r,o,s){let i={...e,tensor:o||new Y$1(e.unpackedShape,t,a=>this.readTexture(i),async a=>this.readTextureAsync(i),void 0,s),texture:r};return this.setTextureData(i.tensor.dataId,i,e.isPacked),i}getTextureData(e,t=!1){return this.session.isInitializer(e)?this.session.getTextureData(e,t):t?this.packedTextureDataCache.get(e):this.unpackedTextureDataCache.get(e)}setTextureData(e,t,r=!1){this.session.isInitializer(e)?this.session.setTextureData(e,t,r):(r?this.packedTextureDataCache:this.unpackedTextureDataCache).set(e,t)}isTextureLayoutCached(e,t=!1){return!!this.getTextureData(e.dataId,t)}dispose(){this.session.textureManager.clearActiveTextures(),this.packedTextureDataCache.forEach(e=>this.session.textureManager.releaseTexture(e)),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache.forEach(e=>this.session.textureManager.releaseTexture(e)),this.unpackedTextureDataCache=new Map}readTexture(e){return e.isPacked?this.readTexture(this.unpack(e)):this.session.backend.glContext.isFloat32DownloadSupported?this.session.textureManager.readTexture(e,e.tensor.type,e.channels):this.session.textureManager.readUint8TextureAsFloat(ln(this,e))}async readTextureAsync(e){return e.isPacked?this.readTextureAsync(this.unpack(e)):this.session.backend.glContext.isFloat32DownloadSupported?this.session.textureManager.readTextureAsync(e,e.tensor.type,e.channels):this.session.textureManager.readUint8TextureAsFloat(ln(this,e))}pack(e){return this.executeProgram(qi(this,e.tensor),[e.tensor])}unpack(e){return this.executeProgram(Qi(this,e.tensor),[e.tensor])}}}),cn,$,tt$1=x$1(()=>{cn=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},$=e=>new cn(e)}),ia,aa,sa,bf,yf,ua=x$1(()=>{tt$1(),q(),N(),ia={name:"BatchNormalization",inputNames:["A","Scale","B","Mean","Variance"],inputTypes:[0,0,0,0,0]},aa=(e,t,r)=>(yf(t),[e.run({...ia,cacheHint:r.cacheKey,get:()=>bf(e,t,r)},t)]),sa=e=>{let t=e.attributes.getFloat("epsilon",1e-5),r=e.attributes.getFloat("momentum",.9),o=e.attributes.getInt("spatial",1);return $({epsilon:t,momentum:r,spatial:o})},bf=(e,t,r)=>{let o=D(e.session.backend.glContext.version),s=t[0].dims.length,[i,a]=e.calculateTextureWidthAndHeight(t[1].dims,0),d=`
  float process(int[${s}] indices) {
    vec2 position = offsetToCoords(indices[1], ${i}, ${a});
    float scale = getColorAsFloat(${o.texture2D}(Scale, position));
    float mean = getColorAsFloat(${o.texture2D}(Mean, position));
    float variance = getColorAsFloat(${o.texture2D}(Variance, position));
    float b = getColorAsFloat(${o.texture2D}(B, position));

    return scale * ( (_A(indices) - mean) / sqrt(variance + float(${r.epsilon})) ) + b;
  }`;return{...ia,output:{dims:t[0].dims,type:t[0].type,textureType:0},shaderSource:d}},yf=e=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs.");let t=e[0],r=e[1],o=e[2],s=e[3],i=e[4];if(t.dims.length<3||r.dims.length!==1||o.dims.length!==1||s.dims.length!==1||i.dims.length!==1)throw new Error("invalid input shape.");if(r.dims[0]!==t.dims[1]||o.dims[0]!==t.dims[1]||s.dims[0]!==t.dims[1]||i.dims[0]!==t.dims[1])throw new Error("invalid input shape.");if(t.type!=="float32"&&t.type!=="float64"||r.type!=="float32"&&r.type!=="float64"||o.type!=="float32"&&o.type!=="float64"||s.type!=="float32"&&s.type!=="float64"||i.type!=="float32"&&i.type!=="float64")throw new Error("invalid input tensor types.")}}),ar$1,bt$1,I$1,Oe$1,sr$1,Bt$1=x$1(()=>{ar$1=class{constructor(e,t,r,o){this.glContext=e,this.programInfo=t,this.inputTextureLayouts=r,this.outputTextureLayout=o}},bt$1=class{constructor(e){this.context=e}},I$1=class{constructor(e,t){this.routineBody=e,this.dependencies=t}},Oe$1=class{constructor(e,t,r){this.name=e,r?this.dependencies=r:this.dependencies=[],t&&(this.routineBody=t)}addDependency(e){e&&this.dependencies.push(e)}},sr$1=class{static returnOrderedNodes(e){if(!e||e.length===0)return[];if(e.length===1)return e;let t=new Set,r=new Set,o=new Array;return this.createOrderedNodes(e,t,r,o),o}static createOrderedNodes(e,t,r,o){for(let s=0;s<e.length;++s)this.dfsTraverse(e[s],t,r,o)}static dfsTraverse(e,t,r,o){if(!e||r.has(e.name))return;if(t.has(e.name))throw new Error("Cyclic dependency detected. Can't topologically sort routines needed for shader.");t.add(e.name);let s=e.dependencies;if(s&&s.length>0)for(let i=0;i<s.length;++i)this.dfsTraverse(s[i],t,r,o);o.push(e),r.add(e.name),t.delete(e.name)}}});function xf(){let e="add_";return{body:`
  float ${e}(float a, float b) {
    return a + b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 + v2;
  }
  `,name:e,type:0}}function Tf(){let e="div_";return{body:`
  float ${e}(float a, float b) {
    return a / b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 / v2;
  }
  `,name:e,type:0}}function vf(){let e="mul_";return{body:`
  float ${e}(float a, float b) {
    return a * b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 * v2;
  }
  `,name:e,type:0}}function wf(){let e="sub_";return{body:`
  float ${e}(float a, float b) {
    return a - b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 - v2;
  }
  `,name:e,type:0}}function If(){let e="equal_";return{body:`
  float ${e}(float a, float b) {
    return float(a == b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4(equal(v1, v2));
  }
  `,name:e,type:0}}function _f(){let e="greater_";return{body:`
  float ${e}(float a, float b) {
    return float(a > b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4( v1.r > v2.r ,
      v1.g > v2.g,
      v1.b > v2.b,
      v1.a > v2.a );
  }
  `,name:e,type:0}}function Sf(){let e="less_";return{body:`
  float ${e}(float a, float b) {
    return float(a < b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4( v1.r < v2.r ,
                v1.g < v2.g,
                v1.b < v2.b,
                v1.a < v2.a );
  }
  `,name:e,type:0}}function Af(){let e="and_";return{body:`
  float ${e}(float a, float b) {
    return float( bool(a) && bool(b) );
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r && b2.r ,
                b1.g && b2.g,
                b1.b && b2.b,
                b1.a && b2.a );
  }
  `,name:e,type:0}}function Of(){let e="or_";return{body:`
  float ${e}(float a, float b) {
    return float( bool(a) || bool(b) );
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r || b2.r ,
                b1.g || b2.g,
                b1.b || b2.b,
                b1.a || b2.a );
  }
  `,name:e,type:0}}function Pf(){let e="xor_";return{body:`
  float ${e}(float a, float b) {
    return float( bool(a) ^^ bool(b) );
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r ^^ b2.r ,
                b1.g ^^ b2.g,
                b1.b ^^ b2.b,
                b1.a ^^ b2.a );
  }
  `,name:e,type:0}}function Ef(){return Lf("pow")}function Df(){let e="prelu_";return{body:`
  float ${e}(float a, float b) {
    return a < 0.0 ? a * b: a;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4(
      v1.r < 0.0 ? v1.r * v2.r: v1.r,
      v1.g < 0.0 ? v1.g * v2.g: v1.g,
      v1.b < 0.0 ? v1.b * v2.b: v1.b,
      v1.a < 0.0 ? v1.a * v2.a: v1.a
      );
  }
  `,name:e,type:0}}function Lf(e){let t=`${e}_`;return{body:`
  float ${t}(float a, float b) {
    return ${e}(a, b);
  }
  vec4 ${t}(vec4 v1, vec4 v2) {
    return ${e}(v1, v2);
  }
  `,name:t,type:0}}var yt$1,$f,la,fa,ca,pa,da,ha,ma,ba,ya,ga,xa,Ta,va=x$1(()=>{z$1(),Bt$1(),q(),N(),yt$1=(e,t,r,o=t[0].type,s)=>{let i=e.session.pack?2:0;return{name:r.name,inputNames:["A","B"],inputTypes:[i,i],cacheHint:s,get:()=>$f(e,t,r,o)}},$f=(e,t,r,o=t[0].type)=>{let s=e.session.pack?2:0,i=!O.areEqual(t[0].dims,t[1].dims),a=t[0].dims,d=e.session.pack;if(i){let l=it.calcShape(t[0].dims,t[1].dims,!1);if(!l)throw new Error("Can't perform binary op on the given tensors");a=l;let u=a.length,c=t[0].dims.length!==0?t[0].dims.length:1,h=t[1].dims.length!==0?t[1].dims.length:1,f=t[0].dims.length!==0?"bcastIndices_A(indices, aindices);":"aindices[0] = 0;",g=t[1].dims.length!==0?"bcastIndices_B(indices, bindices);":"bindices[0] = 0;",b=D(e.session.backend.glContext.version),E=d?`
      ${r.body}
      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();
        vec4 result = ${r.name}(a, b);
        ${b.output} = result;
      }`:`
      ${r.body}
      float process(int indices[${u}]) {
        int aindices[${c}];
        int bindices[${h}];
        ${f}
        ${g}
        return ${r.name}(_A(aindices), _B(bindices));
      }`;return{name:r.name,inputNames:["A","B"],inputTypes:[s,s],output:{dims:a,type:o,textureType:s},shaderSource:E,hasMain:d}}let p=D(e.session.backend.glContext.version),n=`
    ${r.body}
    void main() {
      vec4 v1 = ${p.texture2D}(A, TexCoords);
      vec4 v2 = ${p.texture2D}(B, TexCoords);
      vec4 result = ${r.name}(v1, v2);
      ${p.output} = result;
    }
    `;return{name:r.name,inputNames:["A","B"],inputTypes:[s,s],output:{dims:t[0].dims,type:o,textureType:s},shaderSource:n,hasMain:!0}},la=(e,t)=>[e.run(yt$1(e,t,xf()),t)],fa=(e,t)=>[e.run(yt$1(e,t,Af(),"bool"),t)],ca=(e,t)=>[e.run(yt$1(e,t,Tf()),t)],pa=(e,t)=>[e.run(yt$1(e,t,If(),"bool"),t)],da=(e,t)=>[e.run(yt$1(e,t,_f(),"bool"),t)],ha=(e,t)=>[e.run(yt$1(e,t,Sf(),"bool"),t)],ma=(e,t)=>[e.run(yt$1(e,t,vf()),t)],ba=(e,t)=>[e.run(yt$1(e,t,Of(),"bool"),t)],ya=(e,t)=>[e.run(yt$1(e,t,Ef()),t)],ga=(e,t)=>[e.run(yt$1(e,t,Df()),t)],xa=(e,t)=>[e.run(yt$1(e,t,wf()),t)],Ta=(e,t)=>[e.run(yt$1(e,t,Pf(),"bool"),t)]}),wa,Ia,Bf,_a=x$1(()=>{z$1(),wa=(e,t,r)=>(Bf(t),[e.cast(t[0],r)]),Ia=e=>rt$1.tensorDataTypeFromProto(e.attributes.getInt("to")),Bf=e=>{if(!e||e.length!==1)throw new Error("Cast requires 1 input.");if(e[0].type==="string")throw new Error("Invalid input type.")}}),Ff,Nf,Sa,ur$1,Aa=x$1(()=>{q(),N(),Pt$1(),Qt$1(),Ff=(e,t)=>({name:"Concat (packed)",inputNames:Array.from({length:e},(r,o)=>`X${o}`),inputTypes:Array(e).fill(2),cacheHint:t}),Nf=(e,t,r,o)=>{let s=r[0].dims.slice();if(o>=s.length||o<-1*s.length)throw new Error("axis specified for concat doesn't match input dimensionality");o<0&&(o=s.length+o);let i=s.slice(0);for(let K=1;K<r.length;K++){let kd=r[K].dims.slice();for(let Ii=0;Ii<s.length;Ii++)if(Ii===o)i[o]+=kd[Ii];else if(s[Ii]!==kd[Ii])throw new Error("non concat dimensions must match")}let a=i.length,d=ce$1("coords",a),p=at(a),n=Et$1(),l=r.map(K=>K.dims),u=St$1(a),c=new Array(l.length-1);c[0]=l[0][o];for(let K=1;K<c.length;K++)c[K]=c[K-1]+l[K][o];let h=u[o],f=u.slice(-2),g=u.join(),b=`if (${h} < ${c[0]}) {
        return getChannel(
            getX0(${g}), vec2(${f.join()}));
        }`;for(let K=1;K<c.length;K++){let kd=c[K-1];b+=`
            if (${h} < ${c[K]}  && ${h} >= ${c[K-1]}) {
              return getChannel(
                getX${K}(${ur$1(u,h,kd)}),
                vec2(${ur$1(f,h,kd)}));
            }`}let E=c.length,y=c[c.length-1];b+=`
            return getChannel(
              getX${E}(${ur$1(u,h,y)}),
              vec2(${ur$1(f,h,y)}));`;let F=D(e.session.backend.glContext.version),L=`
          ${n}
          float getValue(${u.map(K=>"int "+K)}) {
            ${b}
          }

          void main() {
            ${p} coords = getOutputCoords();
            int lastDim = coords.${u[a-1]};
            coords.${u[a-1]} = coords.${u[a-2]};
            coords.${u[a-2]} = lastDim;

            vec4 result = vec4(getValue(${d}), 0., 0., 0.);

            ${d[a-1]} = ${d[a-1]} + 1;
            if (${d[a-1]} < ${i[a-1]}) {
              result.g = getValue(${d});
            }

            ${d[a-2]} = ${d[a-2]} + 1;
            if (${d[a-2]} < ${i[a-2]}) {
              result.a = getValue(${d});
            }

            ${d[a-1]} = ${d[a-1]} - 1;
            if (${d[a-2]} < ${i[a-2]} &&
                ${d[a-1]} < ${i[a-1]}) {
              result.b = getValue(${d});
            }
            ${F.output} = result;
          }
        `;return{...t,output:{dims:i,type:r[0].type,textureType:2},shaderSource:L,hasMain:!0}},Sa=(e,t,r)=>{let o=Ff(t.length,r.cacheKey);return{...o,get:()=>Nf(e,o,t,r.axis)}},ur$1=(e,t,r)=>{let o=e.indexOf(t);return e.map((s,i)=>i===o?`${s} - ${r}`:s).join()}}),Oa,Cf,Gf,Rf,Pa,Vf,zf,Mf,Ea,Uf,Da=x$1(()=>{tt$1(),N(),Aa(),Oa=(e,t,r)=>(Uf(t),e.session.pack&&t[0].dims.length>1?[e.run(Sa(e,t,r),t)]:[e.run(Rf(e,t,r),t)]),Cf=(e,t)=>({name:"Concat",inputNames:Array.from({length:e},(r,o)=>`X${o}`),inputTypes:Array(e).fill(0),cacheHint:t}),Gf=(e,t,r,o)=>{let s=r[0].dims.slice();if(o>=s.length||o<-1*s.length)throw new Error("axis specified for concat doesn't match input dimensionality");o<0&&(o=s.length+o);let i=s.slice(0);for(let h=1;h<r.length;h++){let f=r[h].dims.slice();for(let g=0;g<s.length;g++)if(g===o)i[o]+=f[g];else if(s[g]!==f[g])throw new Error("non concat dimensions must match")}let a=i.length,d=new Array(r.length),p=0;for(let h=0;h<d.length;++h)p+=r[h].dims[o],d[h]=p;let n="";r.length<5?n=Pa(d):n=Vf(d);let l=zf(r.length,a),u=Mf(d),c=`
        ${l}
        ${u}
        ${n}
        float process(int indices[${a}]) {
          int textureIndex = getTextureWhereDataResides (indices[${o}]);

          if(textureIndex != 0) {
            indices[${o}] = indices[${o}] - int(getSizeInConcatAxisValueFromIndex(textureIndex-int(1)));
          }

          return fetchDataFromCorrectTexture(textureIndex, indices);
        }`;return{...t,output:{dims:i,type:r[0].type,textureType:0},shaderSource:c}},Rf=(e,t,r)=>{let o=Cf(t.length,r.cacheKey);return{...o,get:()=>Gf(e,o,t,r.axis)}},Pa=e=>`int getTextureWhereDataResides(int index) {
      ${e.map((t,r)=>`if(index<${t}) {return ${r};}
`).join("")}
    }`,Vf=e=>Pa(e),zf=(e,t)=>{let r=[`float fetchDataFromCorrectTexture(int textureIndex, int indices[${t}]) {`];for(let o=0;o<e;++o)o===0?r.push(`	if (textureIndex == ${o}) { return _X${o}(indices); }`):o===e-1?r.push(`	else { return _X${o}(indices); }`):r.push(`	else if (textureIndex == ${o}) { return _X${o}(indices); }`);return r.push("	}"),r.join(`
`)},Mf=e=>{let t=["int getSizeInConcatAxisValueFromIndex(int index) {"];for(let r=0;r<e.length;++r)r===0?t.push(`	if (index == ${r}) { return ${e[r]}; }`):r===e.length-1?t.push(`	else { return ${e[r]}; }`):t.push(`	else if (index == ${r}) { return ${e[r]}; }`);return t.push("	}"),t.join(`
`)},Ea=e=>$({axis:e.attributes.getInt("axis")}),Uf=e=>{if(!e||e.length<1)throw new Error("too few inputs");let t=e[0].type,r=e[0].dims.length;if(t==="string")throw new Error("string tensor is not supported yet");for(let o of e){if(o.type!==t)throw new Error("input tensors should be one type");if(o.dims.length!==r)throw new Error("input tensors should have the same shape")}}});function Wf(){return gt$1("abs")}function Hf(){return gt$1("acos")}function qf(){return gt$1("asin")}function jf(){return gt$1("atan")}function Kf(){return gt$1("ceil")}function Xf(){return gt$1("cos")}function Jf(e){let t="elu";return{body:`
  const float alpha = float(${e});

  float ${t}_(float a) {
    return a >= 0.0 ? a: (exp(a) - 1.0) * alpha;
  }
  vec4 ${t}_(vec4 v) {
    return vec4(${t}_(v.x), ${t}_(v.y), ${t}_(v.z), ${t}_(v.w));
  }
  `,name:t,type:0}}function Zf(){return gt$1("exp")}function Yf(){return gt$1("floor")}function pn(e,t){let r="clip";return{body:`
  const float min = float(${e});
  const float max = float(${t});

  float ${r}_(float a) {
    return clamp(a, min, max);
  }
  vec4 ${r}_(vec4 v) {
    return clamp(v, min, max);
  }
  `,name:r,type:0}}function Qf(){let e="indentity";return{body:`
  float ${e}_(float a) {
    return a;
  }
  vec4 ${e}_(vec4 v) {
    return v;
  }
  `,name:e,type:0}}function tc(e){let t="leakyRelu";return{body:`
  const float alpha = float(${e});

  float ${t}_(float a) {
    return a < 0.0 ? a * alpha : a;
  }
  vec4 ${t}_(vec4 v) {
    return vec4(${t}_(v.x), ${t}_(v.y), ${t}_(v.z), ${t}_(v.w));
  }
  `,name:t,type:0}}function ec(){return gt$1("log")}function rc(){let e="neg";return{body:`
  float ${e}_(float a) {
    return -a;
  }
  vec4 ${e}_(vec4 v) {
    return -v;
  }
  `,name:e,type:0}}function nc(){let e="not";return{body:`
  float ${e}_(float a) {
    return float( ! bool(a) );
  }
  bool ${e}_(bool a) {
    return !a;
  }
  vec4 ${e}_(vec4 v) {
    return vec4(!bool(v.x), !bool(v.y), !bool(v.z), !bool(v.w));
  }
  bvec4 ${e}_(bvec4 v) {
    return bvec4(!v.x, !v.y, !v.z, !v.w);
  }
  `,name:e,type:0}}function oc(){return gt$1("sin")}function dn(){let e="relu";return{body:`
  float ${e}_(float a) {
    return max( a, 0.0 );
  }
  vec4 ${e}_(vec4 v) {
    return max( v, 0.0 );
  }
  `,name:e,type:0}}function hn(){let e="sigmoid";return{body:`
  float ${e}_(float a) {
    return 1.0 / (1.0 + exp(-a));
  }
  vec4 ${e}_(vec4 v) {
    return 1.0 / (1.0 + exp(-v));
  }
  `,name:e,type:0}}function ic(){return gt$1("sqrt")}function ac(){return gt$1("tan")}function sc(){let e="tanh";return{body:`
  float ${e}_(float a) {
    a = clamp(a, -10., 10.);
    a = exp(2.*a);
    return (a - 1.) / (a + 1.);
  }
  vec4 ${e}_(vec4 v) {
    v = clamp(v, -10., 10.);
    v = exp(2.*v);
    return (v - 1.) / (v + 1.);
  }
  `,name:e,type:0}}function gt$1(e){return{body:`
  float ${e}_(float a) {
    return ${e}(a);
  }
  vec4 ${e}_(vec4 v) {
    return ${e}(v);
  }
  `,name:e,type:0}}var uc,J$1,La,$a,ka,Ba,mn,Fa,Na,lc,Ca,Ga,Ra,Va,za,Ma,bn,Ua,Wa,Ha,qa,ja,Ka,Xa,Ja,Za,Ya,Qa,yn=x$1(()=>{tt$1(),z$1(),Bt$1(),q(),N(),uc=(e,t,r,o)=>{let s=e.session.pack?2:0,i=D(e.session.backend.glContext.version);return{...t,output:{dims:r.dims,type:r.type,textureType:s},shaderSource:`
     ${o.body}
     void main() {
       vec4 v = ${i.texture2D}(A, TexCoords);
       v = ${o.name}_(v);
       ${i.output} = v;
     }
     `,hasMain:!0}},J$1=(e,t,r,o)=>{let s=e.session.pack?2:0,i={name:r.name,inputTypes:[s],inputNames:["A"],cacheHint:o};return{...i,get:()=>uc(e,i,t,r)}},La=(e,t)=>[e.run(J$1(e,t[0],Wf()),t)],$a=(e,t)=>[e.run(J$1(e,t[0],Hf()),t)],ka=(e,t)=>[e.run(J$1(e,t[0],qf()),t)],Ba=(e,t)=>[e.run(J$1(e,t[0],jf()),t)],mn=(e,t,r)=>[e.run(J$1(e,t[0],pn(r.min,r.max),r.cacheKey),t)],Fa=e=>$({min:e.attributes.getFloat("min",Jt$1),max:e.attributes.getFloat("max",Zt$1)}),Na=(e,t)=>{let r=lc(e,t);return mn(e,[t[0]],r)},lc=(e,t)=>{if(t.length>=3&&(!e.session.isInitializer(t[1].dataId)||!e.session.isInitializer(t[2].dataId)))throw new Error("dynamic clip attributes are not allowed");let r=t.length>=3?t[1].numberData[0]:Jt$1,o=t.length>=3?t[2].numberData[0]:Zt$1;return $({min:r,max:o})},Ca=(e,t)=>[e.run(J$1(e,t[0],Kf()),t)],Ga=(e,t)=>[e.run(J$1(e,t[0],Xf()),t)],Ra=(e,t,r)=>[e.run(J$1(e,t[0],Jf(r.alpha),r.cacheKey),t)],Va=e=>$({alpha:e.attributes.getFloat("alpha",1)}),za=(e,t)=>[e.run(J$1(e,t[0],Zf()),t)],Ma=(e,t)=>[e.run(J$1(e,t[0],Yf()),t)],bn=(e,t)=>[e.run(J$1(e,t[0],Qf()),t)],Ua=(e,t,r)=>[e.run(J$1(e,t[0],tc(r.alpha),r.cacheKey),t)],Wa=e=>$({alpha:e.attributes.getFloat("alpha",.01)}),Ha=(e,t)=>[e.run(J$1(e,t[0],ec()),t)],qa=(e,t)=>[e.run(J$1(e,t[0],rc()),t)],ja=(e,t)=>[e.run(J$1(e,t[0],nc()),t)],Ka=(e,t)=>[e.run(J$1(e,t[0],dn()),t)],Xa=(e,t)=>[e.run(J$1(e,t[0],hn()),t)],Ja=(e,t)=>[e.run(J$1(e,t[0],oc()),t)],Za=(e,t)=>[e.run(J$1(e,t[0],ic()),t)],Ya=(e,t)=>[e.run(J$1(e,t[0],ac()),t)],Qa=(e,t)=>[e.run(J$1(e,t[0],sc()),t)]});function Dt$1(e){let t;switch(e.activation){case"Relu":t=dn();break;case"Sigmoid":t=hn();break;case"Clip":t=pn(e.clipMin,e.clipMax);break;default:return{activationFunction:"",applyActivation:""}}let r=t.name,o=t.body,s=`value = ${r}_(value);`;return{activationFunction:o,applyActivation:s}}var pe,te=x$1(()=>{z$1(),yn(),pe=e=>{let t=e.getString("activation","");if(t==="Clip"){let[r,o]=e.getFloats("activation_params",[Jt$1,Zt$1]);return{activation:t,clipMax:o,clipMin:r,activationCacheKey:`${t}:${r},${o}`}}return{activation:t,activationCacheKey:t}}}),cc,pc,ts,es=x$1(()=>{pt$1(),q(),N(),lr$1(),te(),cc=(e,t)=>({name:"GroupedConv",inputNames:e?["X","W","Bias"]:["X","W"],inputTypes:e?[0,0,0]:[0,0],cacheHint:t}),pc=(e,t,r,o)=>{let s=t.length>2?"value += getBias(output_channel);":"",i=t[0].dims.slice(),a=t[1].dims.slice(),d=a[0]/o.group;M.verbose("GroupedConv",`autpPad:${o.autoPad}, dilations:${o.dilations}, group:${o.group}, kernelShape:${o.kernelShape}, pads:${o.pads}, strides:${o.strides}`);let p=de$1(i,a,o.dilations,o.pads,o.strides),n=D(e.session.backend.glContext.version),{activationFunction:l,applyActivation:u}=Dt$1(o),c=`
  const ivec2 strides = ivec2(${o.strides[0]}, ${o.strides[1]});
  const ivec2 pads = ivec2(${o.pads[0]}, ${o.pads[1]});
  ${l}
  void main() {
    ivec4 coords = getOutputCoords();
    int batch = coords.x;
    int output_channel = coords.y;
    ivec2 xRCCorner = coords.zw * strides - pads;
    int group_id = output_channel / ${d};

    float value = 0.0;
    for (int wInChannel = 0; wInChannel < ${a[1]}; wInChannel++) {
      int input_channel = group_id * ${a[1]} + wInChannel;
      for (int wHeight = 0; wHeight < ${a[2]}; wHeight++) {
        int xHeight = xRCCorner.x + wHeight * ${o.dilations[0]};

        if (xHeight < 0 || xHeight >= ${i[2]}) {
          continue;
        }

        for (int wWidth = 0; wWidth < ${a[3]}; wWidth++) {
          int xWidth = xRCCorner.y + wWidth * ${o.dilations[1]};
          if (xWidth < 0 || xWidth >= ${i[3]}) {
            continue;
          }

          float xVal = getX(batch, input_channel, xWidth, xHeight);
          float wVal = getW(output_channel, wInChannel, wWidth, wHeight);
          value += xVal*wVal;
        }
      }
    }
    ${s}
    ${u}
    ${n.output} = vec4(value, .0, .0, .0);
  }
`;return{...r,output:{dims:p,type:t[0].type,textureType:0},shaderSource:c,hasMain:!0}},ts=(e,t,r)=>{let o=cc(t.length>2,r.cacheKey);return{...o,get:()=>pc(e,t,o,r)}}}),dc,hc,rs,ns=x$1(()=>{q(),N(),Qt$1(),dc=e=>({name:"Im2Col (packed)",inputNames:["A"],inputTypes:[2],cacheHint:e}),hc=(e,t,r,o,s,i)=>{let a=r.dims,d=o.dims,p=2,n=3,l=s.length,u=[d[1]*d[2]*d[3],s[2]*s[3]],c=d[2]*d[3],h=Et$1(),f=D(e.session.backend.glContext.version),g="";for(let E=0;E<=1;E++)for(let y=0;y<=1;y++)g+=`
            blockIndex = rc.x + ${y};
            pos = rc.y + ${E};

            if(blockIndex < ${u[1]} && pos < ${u[0]}) {
              offsetY = int(blockIndex / (${s[l-1]})) * ${i.strides[0]} -
                ${i.pads[0]};
              d0 = offsetY + ${i.dilations[0]} * (imod(pos, ${c}) / ${d[2]});

              if(d0 < ${a[p]} && d0 >= 0) {
                offsetX = imod(blockIndex, ${s[l-1]}) * ${i.strides[1]} -
                  ${i.pads[1]};
                d1 = offsetX + ${i.dilations[1]} * imod(imod(pos, ${c}), ${d[2]});

                if(d1 < ${a[n]} && d1 >= 0) {

                  ch = int(float(pos)/ ${c}.);
                    innerDims = vec2(d0, d1);
                    result[${E*2+y}] = getChannel(
                      getA(0, ch, int(innerDims.x),
                      int(innerDims.y)), innerDims);
                }
              }
            }

          `;let b=`
      ${h}

      void main() {
        ivec2 rc = getOutputCoords();
          vec4 result = vec4(0.0);
          int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
          vec2 innerDims;
          ${g}
          ${f.output} = result;
      }
            `;return{...t,output:{dims:u,type:r.type,textureType:2},shaderSource:b,hasMain:!0}},rs=(e,t,r,o,s)=>{let i=dc(s.cacheKey);return{...i,get:()=>hc(e,i,t,r,o,s)}}});function bc(e,t,r){let o=t[0].dims,s=t[1].dims,i=it.calcShape(o,s,!0);if(!i)throw new Error("Can't use matmul on the given tensors");let a=at(i.length),d=St$1(),{activationFunction:p,applyActivation:n}=Dt$1(r),l=t.length>2,u=l?"value += getBiasForMatmul();":"",c=l?`${xn(a,d,t[2].dims,i,!1)}`:"",h=i.length,f=o.length,g=s.length,b=o[o.length-1],E=`
    ${p}
    ${c}
    float process(int indices[${h}]) {
        int a[${f}];
        int b[${g}];
        bcastMatmulIndices_A(indices, a);
        bcastMatmulIndices_B(indices, b);

        float value;
        for (int k=0; k<${b}; ++k) {
            a[${f-1}] = k;
            b[${g-2}] = k;
            value += _A(a) * _B(b);
        }
        ${u}
        ${n}
        return value;
    }`;return{...e,output:{dims:i,type:t[0].type,textureType:0},shaderSource:E}}function gn(e,t){let r=mc(e.length>2,t.activationCacheKey);return{...r,get:()=>bc(r,e,t)}}function xn(e,t,r,o,s){let i="",a=r.length,d=o.length,p=d-a;d<2&&a>0?i="coords":i=r.map((c,h)=>`coords.${t[h+p]}`).join(", ");let n=it.getBroadcastDims(r,o).map(c=>`coords.${t[c+p]} = 0;`).join(`
`),l=O.size(r)===1,u="vec4(outputValue.xx, outputValue.yy)";return l&&(u="vec4(outputValue.x)"),s?`
vec4 getBiasForMatmul() {
  ${e} coords = getOutputCoords();
  ${n}
  vec4 outputValue = getBias(${i});
  return ${u};
}`:`
float getBiasForMatmul() {
  ${e} coords = getOutputCoords();
  ${n}
  return getBias(coords.x);
}`}var os,is,mc,yc,fr$1=x$1(()=>{z$1(),N(),Pt$1(),te(),Tn(),os=(e,t,r)=>(yc(t),e.session.pack?[e.run(cr$1(e,t,r),t)]:[e.run(gn(t,r),t)]),is=e=>pe(e.attributes),mc=(e,t)=>({name:"MatMul",inputNames:e?["A","B","Bias"]:["A","B"],inputTypes:e?[0,0,0]:[0,0],cacheHint:t}),yc=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.");if(e[0].type!=="float32"&&e[0].type!=="float64"||e[1].type!=="float32"&&e[1].type!=="float64")throw new Error("inputs should be float type");if(e[0].type!==e[1].type)throw new Error("inputs types should match")}});function Tc(e,t,r,o){let s=[],i=[],a=r[0].dims,d=r[1].dims,p=a.length,n=d.length,l=o.length,u=l-p,c=l-n;s=a.map((y,F)=>`coords.${t[F+u]}`),s[p-1]="i*2",s.join(", "),i=d.map((y,F)=>`coords.${t[F+c]}`),i[n-2]="i*2",i.join(", ");let h=it.getBroadcastDims(a,o),f=it.getBroadcastDims(d,o),g=h.map(y=>`coords.${t[y+u]} = 0;`).join(`
`),b=f.map(y=>`coords.${t[y+c]} = 0;`).join(`
`),E=`int lastDim = coords.${t[l-1]};
  coords.${t[l-1]} = coords.${t[l-2]};
  coords.${t[l-2]} = lastDim;`;return`
vec4 getAAtOutCoordsMatmul(int i) {
  ${e} coords = getOutputCoords();
  ${E}
  ${g}
  vec4 outputValue = getA(${s});
  return outputValue;
}

vec4 getBAtOutCoordsMatmul(int i) {
  ${e} coords = getOutputCoords();
  ${E}
  ${b}
  vec4 outputValue = getB(${i});
  return outputValue;
}`}function vc(e,t){let r="";for(let o=0;o<t-2;o++)r+=`rc.${e[o]}, `;return r+=`rc.${e[t-2]}, i*2`,r}function wc(e,t){let r="";for(let o=0;o<t-2;o++)r+=`rc.${e[o]}, `;return r+=`i*2, rc.${e[t-1]}`,r}var gc,xc,cr$1,Tn=x$1(()=>{z$1(),q(),N(),Pt$1(),te(),fr$1(),gc=(e,t)=>({name:"MatMul (packed)",inputNames:e?["A","B","Bias"]:["A","B"],inputTypes:e?[2,2,2]:[2,2],cacheHint:t}),xc=(e,t,r,o)=>{let s=r.length>2,i=s?"value += getBiasForMatmul();":"",a=r[0].dims,d=r[1].dims,p=it.calcShape(a,d,!0),n=!O.areEqual(r[0].dims,r[1].dims);if(!p)throw new Error("Can't use matmul on the given tensors");let l=a[a.length-1],u=Math.ceil(l/2),c=a.length,h=d.length,f=D(e.session.backend.glContext.version),g=at(p.length),b=p.length,E=St$1(),{activationFunction:y,applyActivation:F}=Dt$1(o),L=s?`${xn(g,E,r[2].dims,p,!0)}`:"",K=n?`${Tc(g,E,r,p)}`:"",kd=n?"getAAtOutCoordsMatmul(i)":`getA(${vc(E,c)})`,Ii=n?"getBAtOutCoordsMatmul(i)":`getB(${wc(E,h)})`,Qp=n?"":`${g} rc =
          getOutputCoords(); int lastDim = rc.${E[b-1]}; rc.${E[b-1]} =
          rc.${E[b-2]}; rc.${E[b-2]} = lastDim;
      `,th=`
            ${K}
            ${L}
            ${y}
            void main() {
              ${Qp}

              vec4 value = vec4(0);
              for (int i = 0; i < ${u}; i++) {
                vec4 a = ${kd};
                vec4 b = ${Ii};

                value += (a.rrbb * b.rgrg);
                value += (a.ggaa * b.baba);
              }
              ${i}
              ${F}
              ${f.output} = value;
            }`;return{...t,output:{dims:p,type:r[0].type,textureType:2},shaderSource:th,hasMain:!0}},cr$1=(e,t,r)=>{let o=gc(t.length>2,r.activationCacheKey);return{...o,get:()=>xc(e,o,t,r)}}}),as,ss=x$1(()=>{lr$1(),ns(),Tn(),as=(e,t,r)=>{let o=t[0].dims,s=t[1].dims,i=de$1(o,s,r.dilations,r.pads,r.strides),a=e.run(rs(e,t[0],t[1],i,r),[t[0]]),d=e.reshapePacked(t[1],[s[0],s[1]*s[2]*s[3]]),p=t.length===3?[d,a,t[2]]:[d,a],n=e.run(cr$1(e,p,r),p);return e.reshapePacked(n,i)}}),Ic,_c,us,vn,wn=x$1(()=>{N(),Ic=e=>({name:"Im2Col",inputNames:["X"],inputTypes:[0],cacheHint:e}),_c=(e,t,r,o,s,i)=>{let a=r.dims,d=o.dims,p=s.length,n=vn(a,d,s,4),l=`
        const int XC = ${a[1]};
        const int XH = ${a[2]};
        const int XW = ${a[3]};
        const int KH = ${i.kernelShape[0]};
        const int KW = ${i.kernelShape[1]};
        const int dilationH = ${i.dilations[0]};
        const int dilationW = ${i.dilations[1]};
        const int strideH = ${i.strides[0]};
        const int strideW = ${i.strides[1]};
        const int padH = ${i.pads[0]};
        const int padW = ${i.pads[1]};
        const int KHKW = KH*KW;
        const int XCKHKW = XC * KHKW;
        const int outputChannels = 4;
        vec4 process(int indices[${p}]) {
          int b  = indices[0]; // batch size
          int oh = indices[1] * strideH - padH; //output height
          int ow = indices[2] * strideW - padW; //output width
          int p = indices[3] * outputChannels; //patch
          vec4 value = vec4(0.0);
          for(int i=0; i < outputChannels; ++i) {
            if(p < XCKHKW) {
              int patchC = p / KHKW;
              int patchH = (p - patchC*KHKW) / KW;
              int patchW = (p - patchC*KHKW) - patchH * KW;
              int xh2 = oh + patchH * dilationH;
              int xw2 = ow + patchW * dilationW;
              int x[${a.length}];
              x[0] = b;
              x[1] = patchC;
              x[2] = xh2;
              x[3] = xw2;
              if(xh2 >= 0 &&
                  xh2 < XH &&
                  xw2 >= 0 &&
                  xw2 < XW) {
                value[i] = _X(x);
              }
            }
            ++p;
          }
          return value;
        }
        `;return{...t,output:{dims:n,type:r.type,textureType:4},shaderSource:l}},us=(e,t,r,o,s)=>{let i=Ic(s.cacheKey);return{...i,get:()=>_c(e,i,t,r,o,s)}},vn=(e,t,r,o=4)=>[r[0],r[2],r[3],Math.ceil(e[1]*t[2]*t[3]/o)]}),Sc,Ac,ls,fs=x$1(()=>{z$1(),q(),N(),te(),wn(),Sc=(e,t)=>({name:"ConvDotProduct",inputNames:e?["Im2Col","K","B"]:["Im2Col","K"],inputTypes:e?[0,4,0]:[0,4],cacheKey:t.activationCacheKey}),Ac=(e,t,r,o,s)=>{let i=r[0].dims,a=r[1].dims,d=[a[0],Math.ceil(i[1]*a[2]*a[3]/4)],p=vn(i,a,o),[n,l]=e.calculateTextureWidthAndHeight(d,4),u=O.computeStrides(p),[c,h]=e.calculateTextureWidthAndHeight(p,4),f=o.length,g=r.length<3?"0.0":"_B(b)",b=Math.ceil(i[1]*a[2]*a[3]/4),{activationFunction:E,applyActivation:y}=Dt$1(s),F=D(e.session.backend.glContext.version),L=`
${E}
float process(int indices[${f}]) {
  int b[1];
  b[0] = indices[1];
  int im2col[4];
  im2col[0] = indices[0];
  im2col[1] = indices[2];
  im2col[2] = indices[3];
  int im2colOffset = im2col[0] * ${u[0]} + im2col[1] * ${u[1]} + im2col[2] * ${u[2]};
  int kernelOffset = indices[1] * ${d[1]};
  float value = ${g};
  for (int i = 0; i < ${b}; ++i) {
    vec2 im2colCoords = offsetToCoords(im2colOffset, ${c}, ${h});
    vec2 kernelCoords = offsetToCoords(kernelOffset, ${n}, ${l});
    value += dot(${F.texture2D}(Im2Col, im2colCoords), ${F.texture2D}(K, kernelCoords));
    ++im2colOffset;
    ++kernelOffset;
  }
  ${y}
  return value;
}`;return{...t,output:{dims:o,type:r[0].type,textureType:0},shaderSource:L}},ls=(e,t,r,o)=>{let s=Sc(t.length>2,o);return{...s,get:()=>Ac(e,s,t,r,o)}}}),de$1,In,Oc,Pc,Ec,Dc,_n,Lc,lr$1=x$1(()=>{tt$1(),z$1(),es(),ss(),fs(),te(),wn(),fr$1(),de$1=(e,t,r,o,s)=>{let i=e[0],a=e.slice(2),d=a.length,p=t[0],n=t.slice(2).map((u,c)=>u+(u-1)*(r[c]-1)),l=a.map((u,c)=>u+o[c]+o[c+d]).map((u,c)=>Math.floor((u-n[c]+s[c])/s[c]));return[i,p].concat(...l)},In=(e,t,r)=>(Lc(t,r),Oc(e,t,r)),Oc=(e,t,r)=>{let o=Dc(r,t),s=e.session.pack,i=o.kernelShape[0]===1&&o.kernelShape[1]===1;return o.group>1?[e.run(ts(e,t,o),t)]:i&&s?[Pc(e,t,o)]:s&&t[0].dims.length===4&&t[0].dims[0]===1&&!i?[as(e,t,o)]:[Ec(e,t,o)]},Pc=(e,t,r)=>{let o=t[0].dims,s=t[1].dims,i=de$1(o,s,r.dilations,r.pads,r.strides),a=e.reshapeUnpacked(t[0],[o[1],o[2]*o[3]]),d=e.reshapeUnpacked(t[1],[s[0],s[1]]),p=t.length>2?[d,a,t[2]]:[d,a],n=e.run(gn(p,r),p);return e.reshapeUnpacked(n,i)},Ec=(e,t,r)=>{let o=t[0].dims,s=t[1].dims,i=de$1(o,s,r.dilations,r.pads,r.strides),a=e.run(us(e,t[0],t[1],i,r),[t[0]]),d=t.length===3?[a,t[1],t[2]]:[a,t[1]];return e.run(ls(e,t,i,r),d)},Dc=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0)for(let i=2;i<t[1].dims.length;++i)r.push(t[1].dims[i]);let o=e.pads.slice();Xt$1.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,o,e.autoPad);let s=Object.assign({},e);return Object.assign(s,{kernelShape:r,pads:o,cacheKey:e.cacheKey}),s},_n=e=>{let t=e.attributes,r=pe(t),o=t.getString("auto_pad","NOTSET"),s=t.getInts("dilations",[1,1]),i=t.getInt("group",1),a=t.getInts("kernel_shape",[]),d=t.getInts("pads",[0,0,0,0]),p=t.getInts("strides",[1,1]);return $({autoPad:o,dilations:s,group:i,kernelShape:a,pads:d,strides:p,...r})},Lc=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4||e[1].dims.length!==4)throw new Error("currently only support 2-dimensional conv");let r=e[0].dims[1],o=e[1].dims[1]*t.group;if(r!==o)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(e[0].type!=="float32"||e[1].type!=="float32")throw new Error("Conv input(X,W) should be float tensor");if(e.length===3&&e[2].type!=="float32")throw new Error("Conv input(bias) should be float tensor")}}),$c,kc,Bc,cs,Fc,Nc,Cc,Gc,Rc,Vc,ps,zc,ds=x$1(()=>{tt$1(),q(),N(),te(),$c=(e,t,r,o,s,i)=>(e-1)*t+r+(o-1)*s+1-i,kc=(e,t,r,o,s)=>{let i=Math.floor(e/2);t==="SAME_UPPER"?(r[o]=i,r[s]=e-i):t==="SAME_LOWER"&&(r[o]=e-i,r[s]=i)},Bc=(e,t,r,o,s,i,a,d)=>{let p=e.length-2,n=d.length===0;for(let l=0;l<p;++l){let u=n?e[l+2]*i[l]:d[l],c=$c(e[l+2],i[l],s[l],t[l],r[l],u);kc(c,o,s,l,l+p),n&&d.push(i[l]*(e[l+2]-1)+a[l]+(t[l]-1)*r[l]+1-s[l]-s[l+p])}},cs=(e,t,r)=>(zc(t,r),Fc(e,t,r)),Fc=(e,t,r)=>{let o=Vc(r,t);return[Rc(e,t,o)]},Nc=(e,t)=>({name:"ConvTranspose",inputNames:e?["X","W","B"]:["X","W"],inputTypes:e?[0,0,0]:[0,0],cacheHint:t}),Cc=(e,t,r,o)=>{let s=t.length>2?"getB(output_channel)":"0.0",i=t[0].dims,a=t[1].dims,d=a[1],p=a[0]/o.group,n=[t[0].dims[0],t[1].dims[1]*o.group,...o.outputShape],l=D(e.session.backend.glContext.version),{activationFunction:u,applyActivation:c}=Dt$1(o),h=`
  const ivec2 strides = ivec2(${o.strides[0]}, ${o.strides[1]});
  const ivec2 pads = ivec2(${o.pads[0]}, ${o.pads[1]});
  ${u}
  void main() {
    ivec4 coords = getOutputCoords();
    int batch = coords.x;
    int output_channel = coords.y;

    ivec2 loc = coords.zw + pads;

    int group_id = output_channel / ${d};
    int wOutChannel = output_channel - group_id * ${d};

    float value = ${s};
    for (int inChannelOffset = 0; inChannelOffset < ${p}; inChannelOffset++) {
      int input_channel = group_id * ${p} + inChannelOffset;
      for (int wWOff = 0; wWOff < ${a[2]}; wWOff++) {
        for (int wHOff = 0; wHOff < ${a[3]}; wHOff++) {
          ivec2 wOff = ivec2(wWOff * ${o.dilations[0]}, wHOff * ${o.dilations[1]});
          ivec2 wLoc = loc - wOff;
          ivec2 wLocIn = wLoc / strides;
          if (
            wLocIn * strides == wLoc &&
            wLocIn.x >= 0 && wLocIn.x < ${i[2]} &&
            wLocIn.y >= 0 && wLocIn.y < ${i[3]}
          ) {
            float xVal = getX(batch, input_channel, wLocIn.y, wLocIn.x);
            float wVal = getW(input_channel, wOutChannel, wHOff, wWOff);
            value += xVal * wVal;
          }
        }
      }
    }
    ${c}
    ${l.output} = vec4(value, .0, .0, .0);
  }
`;return{...r,output:{dims:n,type:t[0].type,textureType:0},shaderSource:h,hasMain:!0}},Gc=(e,t,r)=>{let o=Nc(t.length>2,r.cacheKey);return{...o,get:()=>Cc(e,t,o,r)}},Rc=(e,t,r)=>e.run(Gc(e,t,r),t),Vc=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0)for(let d=2;d<t[1].dims.length;++d)r.push(t[1].dims[d]);let o=e.pads.slice(),s=e.outputShape.slice(),i=t[0].dims;Bc(i,r,e.dilations,e.autoPad,o,e.strides,e.outputPadding,s);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:o,outputShape:s,cacheKey:e.cacheKey}),a},ps=e=>{let t=e.attributes,r=pe(t),o=t.getString("auto_pad","NOTSET"),s=t.getInts("dilations",[1,1]),i=t.getInt("group",1),a=t.getInts("kernel_shape",[]),d=t.getInts("output_padding",[0,0]),p=t.getInts("output_shape",[]),n=t.getInts("pads",[0,0,0,0]),l=t.getInts("strides",[1,1]);return $({autoPad:o,dilations:s,group:i,kernelShape:a,outputPadding:d,outputShape:p,pads:n,strides:l,...r})},zc=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4||e[1].dims.length!==4)throw new Error("currently only support 2-dimensional conv");let r=e[0].dims[1],o=e[1].dims[0];if(r!==o)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let s=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==s))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.outputPadding.length!==i)throw new Error(`output_padding should be ${i}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape");if(e[0].type!=="float32"||e[1].type!=="float32")throw new Error("ConvTranspose input(X,W) should be float tensor");if(e.length===3&&e[2].type!=="float32")throw new Error("ConvTranspose input(bias) should be float tensor")}}),hs,ee$1,ms,Mc,bs,Uc,Wc,Hc,pr$1=x$1(()=>{tt$1(),z$1(),N(),hs={name:"Transpose",inputNames:["A"],inputTypes:[0]},ee$1=(e,t,r)=>(Hc(t),[e.run({...hs,cacheHint:r.cacheKey,get:()=>Mc(e,t[0],r.perm)},t)]),ms=e=>$({perm:e.attributes.getInts("perm",[])}),Mc=(e,t,r)=>{let o=t.dims;r=bs(o,r);let s=Uc(o,r),i=o.length,a=`
      ${Wc("perm",r,i)}
      float process(int indices[${i}]) {
        int a[${i}];
        perm(a, indices);
        return _A(a);
      }`;return{...hs,output:{dims:s,type:t.type,textureType:0},shaderSource:a}},bs=(e,t)=>(t&&t.length!==e.length&&(t=[...e.keys()].reverse()),t),Uc=(e,t)=>(t=bs(e,t),O.sortBasedOnPerm(e,t)),Wc=(e,t,r)=>{let o=[];o.push(`void ${e}(out int a[${r}], int src[${r}]) {`);for(let s=0;s<r;++s)o.push(`	a[${t[s]}]=src[${s}];`);return o.push("	}"),o.join(`
`)},Hc=e=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("input should be float tensor")}}),ys,gs,qc,xs=x$1(()=>{pr$1(),ys=(e,t,r)=>{qc(t);let o=r.blocksize,s=o*o,i=r.mode==="DCR"?[0,3,4,1,5,2]:[0,1,4,2,5,3],a=r.mode==="DCR"?[t[0].dims[0],o,o,t[0].dims[1]/s,t[0].dims[2],t[0].dims[3]]:[t[0].dims[0],t[0].dims[1]/s,o,o,t[0].dims[2],t[0].dims[3]],d=e.reshapeUnpacked(t[0],a),p={perm:i,cacheKey:`${i}`},[n]=ee$1(e,[d],p),l=[t[0].dims[0],t[0].dims[1]/s,t[0].dims[2]*o,t[0].dims[3]*o];return[e.reshapeUnpacked(n,l)]},gs=e=>{let t=e.attributes.getInt("blocksize");if(t<1)throw new Error(`blocksize must be >= 1, but got : ${t} for DepthToSpace`);let r=e.attributes.getString("mode","DCR");if(r!=="DCR"&&r!=="CRD")throw new Error(`unrecognized mode: ${r} for DepthToSpace`);return{mode:r,blocksize:t}},qc=e=>{if(e.length!==1)throw new Error(`DepthToSpace expect 1 inputs, but got ${e.length}`);if(e[0].type==="string"||e[0].dims.length!==4)throw new TypeError("DepthToSpace input should be a 4-D numeric tensor")}}),Ts,vs,jc,ws=x$1(()=>{z$1(),Ts=(e,t,r)=>{jc(t,r);let o=O.flattenShape(t[0].dims,r);return[e.reshapeUnpacked(t[0],o)]},vs=e=>e.attributes.getInt("axis",1),jc=(e,t)=>{if(!e||e.length!==1)throw new Error("Flatten requires 1 input.");let r=e[0].dims.length;if(r===0)throw new Error("scalar tensor is not supported.");if(t<-r||t>r)throw new Error("Invalid axis");if(e[0].type==="string")throw new Error("string tensor is not supported.")}}),Vt$1,Pe$1=x$1(()=>{Vt$1=["float32","float64","int32","int16","int8","uint16","uint32","uint8"]}),Is,_s,Kc,Xc,Jc,Zc,Ss=x$1(()=>{tt$1(),Pe$1(),z$1(),N(),Is=(e,t,r)=>(Zc(t,r.axis),[e.run(Jc(e,t,r),t)]),_s=e=>$({axis:e.attributes.getInt("axis",0)}),Kc={name:"Gather",inputNames:["A","B"],inputTypes:[0,0]},Xc=(e,t,r,o)=>{let s=r[0].dims.slice(),i=r[1].dims.slice(),a=new Array(s.length+i.length-1);o=O.normalizeAxis(o,s.length);let d=[];for(let c=0;c<a.length;c++)c<o?(a[c]=s[c],d.push(`inputIdx[${c}] = outputIdx[${c}];`)):c<o+i.length?(a[c]=i[c-o],d.push(`indexDataIdx[${c-o}] = outputIdx[${c}];`)):(a[c]=s[c-i.length+1],d.push(`inputIdx[${c-i.length+1}] = outputIdx[${c}];`));let p=a.length||1,n=s.length,l=i.length||1,u=`
      float process(int outputIdx[${p}]) {
        int inputIdx[${n}];
        int indexDataIdx[${l}];
        indexDataIdx[0] = 0;
        ${d.join(`
        `)}
        int idx = int(_B(indexDataIdx));
        inputIdx[${o}] = idx < 0 ? idx + ${s[o]} : idx;
        return _A(inputIdx);
      }`;return{...t,output:{dims:a,type:r[0].type,textureType:0},shaderSource:u}},Jc=(e,t,r)=>{let o={...Kc,cacheHint:r.cacheKey};return{...o,get:()=>Xc(e,o,t,r.axis)}},Zc=(e,t)=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.");let r=e[0].dims.length;if(r<1)throw new Error("Invalid input shape.");if(t<-r||t>r-1)throw new Error("Invalid axis.");if(Vt$1.indexOf(e[0].type)===-1)throw new Error("Invaid input type.");if(e[1].type!=="int32"&&e[1].type!=="int16")throw new Error("Invaid input type.")}}),Sn,As,Os,Ps,Yc,Qc,tp,Es=x$1(()=>{tt$1(),z$1(),N(),Sn=(e,t,r)=>(tp(t,r),[e.run(Yc(t,r),t)]),As=(e,t)=>{let r=e.attributes.getInt("transA",0)!==0,o=e.attributes.getInt("transB",0)!==0,s=e.attributes.getFloat("alpha",1),i=e.attributes.getFloat("beta",1);return $({transA:r,transB:o,alpha:s,beta:i,isOptionalC:t})},Os=e=>As(e,!1),Ps=e=>As(e,!0),Yc=(e,t)=>{let r={name:"Gemm",inputNames:e.length===3?["A","B","C"]:["A","B"],inputTypes:e.length===3?[0,0,0]:[0,0],key:t.cacheKey};return{...r,get:()=>Qc(r,e,t)}},Qc=(e,t,r)=>{let o=t[0].dims.slice(),s=t[1].dims.slice(),[i,a]=er$1.getShapeOfGemmResult(o,r.transA,s,r.transB,t.length===3?t[2].dims:void 0),d=[i,a];if(!d)throw new Error("Can't use gemm on the given tensors");let p=o[o.length-1],n="";r.transA&&(p=o[0]),r.transA&&r.transB?n="value += _A_T(a) * _B_T(b);":r.transA&&!r.transB?n="value += _A_T(a) * _B(b);":!r.transA&&r.transB?n="value += _A(a) * _B_T(b);":!r.transA&&!r.transB&&(n="value += _A(a) * _B(b);");let l=d.length,u=t.length===3?`int c[${t[2].dims.length}];`:"",c=t.length===3?"bcastIndices_C(indices, c);":"",h=t.length===3?"value += beta * _C(c);":"",f=`
      float process(int indices[${l}]) {
          int a[${l}];
          int b[${l}];
          ${u}

          copyVec(indices, a);
          copyVec(indices, b);
          ${c}

          float value = 0.0;
          for (int k=0; k<${p}; ++k) {
              a[${l-1}] = k;
              b[${l-2}] = k;
              ${n}
          }

          value = value * alpha;
          ${h}
          return value;
      }`;return{...e,output:{dims:d,type:t[0].type,textureType:0},variables:[{name:"alpha",type:"float",data:r.alpha},{name:"beta",type:"float",data:r.beta}],shaderSource:f}},tp=(e,t)=>{if(!e)throw new Error("Input is missing");if(t.isOptionalC&&(e.length<2||e.length>3))throw new Error("Invaid input shape.");if(!t.isOptionalC&&e.length!==3)throw new Error("Gemm requires 3 inputs");if(e.length===3&&e[2].dims.length!==1&&e[2].dims.length!==2)throw new Error("Invalid input shape of C");if(e[0].type!=="float32"&&e[0].type!=="float64"||e[1].type!=="float32"&&e[1].type!=="float64"||e.length===3&&e[2].type!=="float32"&&e[2].type!=="float64")throw new Error("Invalid input type.");if(e[0].type!==e[1].type||e.length===3&&e[0].type!==e[2].type)throw new Error("Input types are mismatched")}}),Ds,Ls,ep,rp,np,op,ip,$s=x$1(()=>{tt$1(),N(),Ds=(e,t,r)=>(ip(t),[e.run(np(e,t,r),t)]),Ls=e=>{let t=e.attributes.getFloat("scale"),r=e.attributes.getFloats("bias");return $({scale:t,bias:r})},ep={name:"ImageScaler",inputNames:["X"],inputTypes:[0]},rp=(e,t,r,o)=>{let s=r[0].dims.slice(),i=s.length,a=`
      ${op(o.bias.length)}
      float process(int indices[${i}]) {
        return _X(indices) * scale + getBias(bias, indices[1]);
      }`;return{...t,output:{dims:s,type:r[0].type,textureType:0},variables:[{name:"bias",type:"float",arrayLength:o.bias.length,data:o.bias},{name:"scale",type:"float",data:o.scale}],shaderSource:a}},np=(e,t,r)=>{let o={...ep,cacheHint:r.cacheKey};return{...o,get:()=>rp(e,o,t,r)}},op=e=>{let t=[`float getBias(float bias[${e}], int channel) {`];for(let r=0;r<e;++r)r===0?t.push(`	if (channel == ${r}) { return bias[${r}]; }`):r===e-1?t.push(`	else { return bias[${r}]; }`):t.push(`	else if (channel == ${r}) { return bias[${r}]; }`);return t.push("	}"),t.join(`
`)},ip=e=>{if(!e||e.length!==1)throw new Error("ImageScaler requires 1 input.");if(e[0].dims.length!==4)throw new Error("Invalid input shape.");if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("Invalid input type.")}}),Bs,Fs,ks,ap,sp,up,lp,fp,cp,Ns=x$1(()=>{q(),N(),Bs=(e,t,r)=>{cp(t);let o=e.run(sp(t[0]),t);return[e.run(fp(e,t[0],r,o.dims),[t[0],o,t[1],t[2]])]},Fs=e=>e.attributes.getFloat("epsilon",1e-5),ks={name:"InstanceNormalization_MeanAndVariance",inputNames:["X"],inputTypes:[0]},ap=(e,t)=>{let r=t.dims.slice(),o=r[1],s=r[2]*r[3],i=[r[0],o],a=`
      vec4 process(int[2] indices) {
        vec4 v = vec4(0.0);
        int a[4];
        a[0] = indices[0];
        a[1] = indices[1];
        float temp = 0.0;
        for(int a2=0; a2<${r[2]}; a2++) {
          a[2] = a2;
          for(int a3=0; a3<${r[3]}; a3++) {
            a[3] = a3;
            float x = _X(a);
            temp += x;
          }
        }
        float mean = temp / float(${s});
        temp = 0.0;
        for(int a2=0; a2<${r[2]}; a2++) {
          a[2] = a2;
          for(int a3=0; a3<${r[3]}; a3++) {
            a[3] = a3;
            float x = _X(a);
            temp += (x - mean) * (x - mean);
          }
        }
        v.r = mean;
        v.g = temp / float(${s});

        return v;
      }`;return{...e,output:{dims:i,type:t.type,textureType:4},shaderSource:a}},sp=e=>({...ks,get:()=>ap(ks,e)}),up={name:"InstanceNormalization_ComputeOutput",inputNames:["X","MeanAndVariance","Scale","B"],inputTypes:[0,4,0,0]},lp=(e,t,r,o,s)=>{let i=D(e.session.backend.glContext.version),[a,d]=e.calculateTextureWidthAndHeight(s,4),[p,n]=[a/4,d],l=`
      vec4 get_MeanAndVariance(int[2] mv) {
        int offset = indicesToOffset_MeanAndVariance(mv);
        vec2 coords = offsetToCoords(offset, ${p}, ${n});
        return ${i.texture2D}(MeanAndVariance, coords);
      }

      float process(int[4] indices) {
        int mv[2];
        mv[0] = indices[0];
        mv[1] = indices[1];
        vec4 mean_and_variance = get_MeanAndVariance(mv);
        float mean = mean_and_variance.r;
        float variance = mean_and_variance.g;

        int sb[1];
        sb[0] = indices[1];
        float scale = _Scale(sb);
        float b = _B(sb);

        return scale * (_X(indices) - mean) / sqrt(variance + epsilon) + b;
      }`;return{...t,output:{dims:r.dims,type:r.type,textureType:0},variables:[{name:"epsilon",type:"float",data:o}],shaderSource:l}},fp=(e,t,r,o)=>{let s={...up,cacheHint:`${r}`};return{...s,get:()=>lp(e,s,t,r,o)}},cp=e=>{if(!e||e.length!==3)throw new Error("InstanceNormalization requires 3 inputs.");let t=e[0],r=e[1],o=e[2];if(t.dims.length<3||r.dims.length!==1||o.dims.length!==1)throw new Error("Invalid input shape.");if(r.dims[0]!==t.dims[1]||o.dims[0]!==t.dims[1])throw new Error("Input shapes are mismatched.");if(t.type!=="float32"&&t.type!=="float64"||r.type!=="float32"&&r.type!=="float64"||o.type!=="float32"&&o.type!=="float64")throw new Error("Invalid input type.");if(e[0].dims.length!==4)throw new Error("Only support 4-D input shape.")}});function pp(e,t){let r=e[0].dims[1],o=e[0].dims.length,s=-Math.floor((t.size-1)/2),i=Math.ceil((t.size-1)/2),a=`float(${t.alpha}) / float(${t.size})`,d=`float(${t.bias})`,p=`float(${t.beta})`,n=`
    float process(int indices[${o}]) {
        int c = indices[1];
        float x = _X(indices);
        float square_sum = 0.0;

        for (int i = ${s}; i <= ${i}; i++) {
          int idx = c + i;
          if (c >= 0 && c < ${r}) {
            indices[1] = idx;
            float j = _X(indices);
            square_sum += j * j;
          }
        }
        return x / pow(${d} + ${a} * square_sum, ${p});
    }`;return{...Rs,cacheHint:t.cacheKey,output:{dims:e[0].dims,type:e[0].type,textureType:0},shaderSource:n}}function dp(e,t){return{...Rs,cacheHint:t.cacheKey,get:()=>pp(e,t)}}var Cs,Gs,Rs,hp,Vs=x$1(()=>{tt$1(),N(),Cs=(e,t,r)=>(hp(t),[e.run(dp(t,r),t)]),Gs=e=>{let t=e.attributes.getFloat("alpha",1e-4),r=e.attributes.getFloat("beta",.75),o=e.attributes.getFloat("bias",1),s=e.attributes.getInt("size");return $({alpha:t,beta:r,bias:o,size:s})},Rs={name:"LRN",inputNames:["X"],inputTypes:[0]},hp=e=>{if(!e||e.length!==1)throw new Error("LRN requires 1 input.");if(e[0].dims.length!==4)throw new Error('currently only support LRN for input with "NCHW" format');if(e[0].type!=="float32")throw new Error("input should be float type")}}),mp,An,zs,Ms,Us,bp,yp,gp,xp,Tp,vp,wp,Ip,Ws=x$1(()=>{tt$1(),z$1(),q(),N(),mp={name:"Pad",inputNames:["A"],inputTypes:[0]},An=(e,t,r)=>(gp(t),[e.run({...mp,cacheHint:r.cacheKey,get:()=>yp(e,t[0],r)},t)]),zs=e=>{let t=e.attributes.getString("mode","constant"),r=e.attributes.getFloat("value",0),o=e.attributes.getInts("pads");return $({mode:t,value:r,pads:o})},Ms=(e,t,r)=>{xp(t);let o=bp(e,t,r);return An(e,[t[0]],o)},Us=e=>e.attributes.getString("mode","constant"),bp=(e,t,r)=>{if(!e.session.isInitializer(t[1].dataId)||t.length>=3&&!e.session.isInitializer(t[2].dataId))throw new Error("dynamic pad attributes are not allowed");let o=Array.from(t[1].integerData),s=t.length>=3?t[2].floatData[0]:0;return $({mode:r,pads:o,value:s})},yp=(e,t,r)=>{let o=O.padShape(t.dims.slice(),r.pads),s=o.length,i=`
      ${Tp(e,t,r)}
      float process(int[${s}] indices) {
          return padA(indices);
      }`;return{name:"Pad",inputNames:["A"],inputTypes:[0],output:{dims:o,type:t.type,textureType:0},shaderSource:i}},gp=e=>{if(!e||e.length!==1)throw new Error("Pad requires 1 input");if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("Invalid input type.")},xp=e=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Pad requires 2 or 3 inputs");if(e[1].type!=="int32")throw new Error("Invalid input type.");if(e.length>=3&&e[2].type==="string")throw new Error("Invalid input type.")},Tp=(e,t,r)=>{let o=D(e.session.backend.glContext.version),[s,i]=e.calculateTextureWidthAndHeight(t.dims,0),a=O.computeStrides(t.dims);switch(r.mode){case"constant":return vp(o,t.dims,a,s,i,r.pads,r.value);case"reflect":return wp(o,t.dims,a,s,i,r.pads);case"edge":return Ip(o,t.dims,a,s,i,r.pads);default:throw new Error("Invalid mode")}},vp=(e,t,r,o,s,i,a)=>{let d=t.length,p="";for(let n=d-1;n>=0;--n)p+=`
        k = m[${n}] - ${i[n]};
        if (k < 0)  return constant;
        if (k >= ${t[n]}) return constant;
        offset += k * ${r[n]};
        `;return`
      float padA(int m[${d}]) {
        const float constant = float(${a});
        int offset = 0;
        int k = 0;
        ${p}
        vec2 coords = offsetToCoords(offset, ${o}, ${s});
        float value = getColorAsFloat(${e.texture2D}(A, coords));
        return value;
      }
      `},wp=(e,t,r,o,s,i)=>{let a=t.length,d="";for(let p=a-1;p>=0;--p)d+=`
        k = m[${p}] - ${i[p]};
        if (k < 0) { k = -k; }
        {
          const int _2n_1 = ${2*(t[p]-1)};
          k = int( mod( float(k), float(_2n_1) ) ) ;
          if(k >= ${t[p]}) { k = _2n_1 - k; }
        }
        offset += k * ${r[p]};
        `;return`
      float padA(int m[${a}]) {
        int offset = 0;
        int k = 0;
        ${d}
        vec2 coords = offsetToCoords(offset, ${o}, ${s});
        float value = getColorAsFloat(${e.texture2D}(A, coords));
        return value;
      }
      `},Ip=(e,t,r,o,s,i)=>{let a=t.length,d="";for(let p=a-1;p>=0;--p)d+=`
        k = m[${p}] - ${i[p]};
        if (k < 0)  k = 0;
        if (k >= ${t[p]}) k = ${t[p]-1};
        offset += k * ${r[p]};
      `;return`
      float padA(int m[${a}]) {
        int offset = 0;
        int k = 0;
        ${d}
        vec2 coords = offsetToCoords(offset, ${o}, ${s});
        float value = getColorAsFloat(${e.texture2D}(A, coords));
        return value;
      }
      `}}),qs,js,Ks,Xs,Js,Zs,Ys,Qs,tu,_p,Hs,eu,hr$1,ru,dr$1,Sp,nu=x$1(()=>{tt$1(),z$1(),N(),qs=(e,t,r)=>{hr$1(t);let o={name:"AveragePool",inputNames:["X"],inputTypes:[0],cacheHint:r.cacheKey};return[e.run({...o,get:()=>Ks(t,o,!1,r)},t)]},js=e=>{let t=e.attributes.getString("auto_pad","NOTSET"),r=e.attributes.getInt("ceil_mode",0),o=e.attributes.getInt("count_include_pad",0)!==0,s=e.attributes.getInts("kernel_shape"),i=e.attributes.getInts("strides",[]),a=e.attributes.getInts("pads",[]);if(r!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");return $({autoPad:t,ceilMode:r,countIncludePad:o,kernelShape:s,strides:i,pads:a})},Ks=(e,t,r,o)=>{let[s,i]=tu(e,o,r),a=O.size(s.kernelShape),d="value += _X(x);",p="";s.countIncludePad?p+=`value /= float(${a});`:p+=`value /= float(${a} - pad);`;let n=`
        ${ru(e[0].dims,s,d,p,"0.0")}
      `;return{...t,output:{dims:i,type:e[0].type,textureType:0},shaderSource:n}},Xs=(e,t,r)=>{hr$1(t);let o={name:"GlobalAveragePool",inputNames:["X"],inputTypes:[0],cacheHint:`${r.countIncludePad}`};return[e.run({...o,get:()=>Ks(t,o,!0,r)},t)]},Js=e=>{let t=e.attributes.getInt("count_include_pad",0)!==0;return $({autoPad:"",ceilMode:0,countIncludePad:t,kernelShape:[],strides:[],pads:[]})},Zs=(e,t,r)=>{hr$1(t);let o={name:"MaxPool",inputNames:["X"],inputTypes:[0],cacheHint:r.cacheKey};return[e.run({...o,get:()=>Qs(t,o,!1,r)},t)]},Ys=e=>{let t=e.attributes.getString("auto_pad","NOTSET"),r=e.attributes.getInt("ceil_mode",0),o=e.attributes.getInts("kernel_shape"),s=e.attributes.getInts("strides",[]),i=e.attributes.getInts("pads",[]),a=e.attributes.getInt("storage_order",0),d=e.attributes.getInts("dilations",[]);if(a!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");return $({autoPad:t,ceilMode:r,countIncludePad:!1,kernelShape:o,strides:s,pads:i,storageOrder:a,dilations:d})},Qs=(e,t,r,o)=>{let[s,i]=tu(e,o,r),a=`
      value = max(_X(x), value);
    `,d="",p=`
      ${ru(e[0].dims,s,a,d,"-1e5")}
    `;return{...t,output:{dims:i,type:e[0].type,textureType:0},shaderSource:p}},tu=(e,t,r)=>{let o=e[0].dims.slice(),s=Object.hasOwnProperty.call(t,"dilations"),i=t.kernelShape.slice(),a=t.strides.slice(),d=s?t.dilations.slice():[],p=t.pads.slice();Xt$1.adjustPoolAttributes(r,o,i,a,d,p);let n=Xt$1.computePoolOutputShape(r,o,a,d,i,p,t.autoPad),l=Object.assign({},t);return s?Object.assign(l,{kernelShape:i,strides:a,pads:p,dilations:d,cacheKey:t.cacheKey}):Object.assign(l,{kernelShape:i,strides:a,pads:p,cacheKey:t.cacheKey}),[l,n]},_p={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[],cacheKey:""},Hs={name:"GlobalMaxPool",inputNames:["X"],inputTypes:[0]},eu=(e,t)=>(hr$1(t),[e.run({...Hs,get:()=>Qs(t,Hs,!0,_p)},t)]),hr$1=e=>{if(!e||e.length!==1)throw new Error("Pool ops requires 1 input.");if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("Invalid input type.")},ru=(e,t,r,o,s)=>{let i=e.length;if(t.kernelShape.length<=2){let a=t.kernelShape[t.kernelShape.length-1],d=t.strides[t.strides.length-1],p=t.pads[t.pads.length/2-1],n=t.pads[t.pads.length-1],l=e[i-1],u="",c="",h="";if(p+n!==0?u=`
          for (int i = 0; i < ${a}; i++) {
            x[${i} - 1] = indices[${i} - 1] * ${d} - ${p} + i;
            if (x[${i} - 1] < 0 || x[${i} - 1] >= ${l}) {
              pad++;
              continue;
            }
            ${r}
          }`:u=`
          for (int i = 0; i < ${a}; i++) {
            x[${i} - 1] = indices[${i} - 1] * ${d} - ${p} + i;
            ${r}
          }`,t.kernelShape.length===2){let f=t.kernelShape[t.kernelShape.length-2],g=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],E=t.pads[t.pads.length-2],y=e[i-2];b+E!==0?c=`
            for (int j = 0; j < ${f}; j++) {
              x[${i} - 2] = indices[${i} - 2] * ${g} - ${b} + j;
              if (x[${i} - 2] < 0 || x[${i} - 2] >= ${y}) {
                pad+= ${a};
                continue;
              }
          `:c=`
            for (int j = 0; j < ${f}; j++) {
              x[${i} - 2] = indices[${i} - 2] * ${g} - ${b} + j;
            `,h=`
          }
        `}return`
        float process(int indices[${i}]) {
          int x[${i}];
          copyVec(indices, x);

          float value = ${s};
          int pad = 0;
          ${c}
          ${u}
          ${h}
          ${o}
          return value;
        }
      `}else{let a=O.size(t.kernelShape),d=O.computeStrides(t.kernelShape),p=d.length,n=t.pads.length,l=Sp(p),u=dr$1(e,"inputDims"),c=dr$1(t.pads,"pads"),h=dr$1(d,"kernelStrides"),f=dr$1(t.strides,"strides"),g=t.pads.reduce((E,y)=>E+y),b="";return g?b=`
            if (x[j] >= inputDims[j] || x[j] < 0) {
              pad++;
              isPad = true;
              break;
            }
          }
          if (!isPad) {
            ${r}
          }`:b=`
          }
          ${r}
        `,`
        ${l}
        float process(int indices[${i}]) {
          int x[${i}];
          copyVec(indices, x);
          int offset[${p}];
          int pads[${n}];
          int inputDims[${i}];
          int kernelStrides[${p}];
          int strides[${p}];
          ${c}
          ${u}
          ${f}
          ${h}

          float value = ${s};
          int pad = 0;
          bool isPad = false;
          for (int i = 0; i < ${a}; i++) {
            offsetToIndices(i, kernelStrides, offset);
            isPad = false;
            for (int j = ${i} - ${p}; j < ${i}; j++) {
              x[j] = indices[j] * strides[j - ${i} + ${p}]
                + offset[j - ${i} + ${p}] - pads[j - 2];
              ${b}
          }
          ${o}

          return value;
        }
      `}},dr$1=(e,t)=>{let r="";for(let o=0;o<e.length;o++)r+=`
      ${t}[${o}] = ${e[o]};
    `;return r},Sp=e=>`
  void offsetToIndices(int offset, int[${e}] strides, out int[${e}] indices) {
    if (${e} == 0) {
      return;
    }
    for (int i = 0; i < ${e} - 1; ++i) {
      indices[i] = offset / strides[i];
      offset -= indices[i] * strides[i];
    }
    indices[${e} - 1] = offset;
  }`}),re,zt$1,Ap,Op,ou,iu,au,su,uu,lu,fu,cu=x$1(()=>{tt$1(),Pe$1(),z$1(),N(),re=(e,t,r,o,s)=>{Op(t);let i={name:o,inputNames:["A"],inputTypes:[0]};return[e.run({...i,cacheHint:r.cacheKey,get:()=>Ap(e,t,r,o,s,i)},t)]},zt$1=e=>{let t=e.attributes.getInts("axes",[]),r=e.attributes.getInt("keepdims",1)===1;return $({axes:t,keepDims:r})},Ap=(e,t,r,o,s,i)=>{let a=[],d=t[0].dims.length||1,p=[],n=O.normalizeAxes(r.axes,t[0].dims.length),l=s(t,n),u=l[1];for(let h=0;h<t[0].dims.length;h++)n.indexOf(h)>=0||n.length===0?(r.keepDims&&a.push(1),u=`
          for(int j${h} = 0; j${h} < ${t[0].dims[h]}; j${h}++) {
            inputIdx[${h}] = j${h};
            ${u}
          }`):(p.push(`inputIdx[${h}] = outputIdx[${a.length}];`),a.push(t[0].dims[h]));let c=`
      float process(int outputIdx[${a.length||1}]) {
        float value;                 // final result
        int inputIdx[${d}];      // addressing input data
        ${p.join(`
`)}
        ${l[0]}       // init ops for reduce max/min
        ${u}
        ${l[2]}       // final computation for reduce mean
        return value;
      }`;return{...i,output:{dims:a,type:t[0].type,textureType:0},shaderSource:c}},Op=e=>{if(!e||e.length!==1)throw new Error("Reduce op requires 1 input.");if(Vt$1.indexOf(e[0].type)===-1)throw new Error("Invalid input type.")},ou=(e,t,r)=>re(e,t,r,"ReduceSum",()=>["value = 0.0;","value += _A(inputIdx);",""]),iu=(e,t,r)=>re(e,t,r,"ReduceMean",(o,s)=>{let i=1;for(let a=0;a<o[0].dims.length;a++)(s.indexOf(a)>=0||s.length===0)&&(i*=o[0].dims[a]);return["value = 0.0;","value += _A(inputIdx);",`value /= ${i}.;`]}),au=(e,t,r)=>re(e,t,r,"ReduceMax",(o,s)=>{let i=[];for(let a=0;a<o[0].dims.length;a++)(s.indexOf(a)>=0||s.length===0)&&i.push(`inputIdx[${a}] = 0;`);return[`${i.join(`
`)}
value = _A(inputIdx);`,"value = max(value, _A(inputIdx));",""]}),su=(e,t,r)=>re(e,t,r,"ReduceMin",(o,s)=>{let i=[];for(let a=0;a<o[0].dims.length;a++)(s.indexOf(a)>=0||s.length===0)&&i.push(`inputIdx[${a}] = 0;`);return[`${i.join(`
`)}
value = _A(inputIdx);`,"value = min(value, _A(inputIdx));",""]}),uu=(e,t,r)=>re(e,t,r,"ReduceProd",()=>["value = 1.0;","value *= _A(inputIdx);",""]),lu=(e,t,r)=>re(e,t,r,"ReduceLogSum",()=>["value = 0.0;","value += _A(inputIdx);","value = log(value);"]),fu=(e,t,r)=>re(e,t,r,"ReduceLogSumSquare",()=>["float t; value = 0.0;","t = _A(inputIdx); value += t * t;",""])}),pu,du=x$1(()=>{z$1(),pu=(e,t)=>{let r=O.calculateReshapedDims(t[0].dims,t[1].integerData);return e.session.pack?[e.reshapePacked(t[0],r)]:[e.reshapeUnpacked(t[0],r)]}}),hu,On,mu,bu,Ee$1,Pp,Pn,mr$1,En=x$1(()=>{tt$1(),q(),N(),hu={name:"Upsample",inputNames:["X"],inputTypes:[0]},On=(e,t,r)=>(Pn(t,r),[e.run({...hu,cacheHint:r.cacheKey,get:()=>Pp(e,t,r)},t)]),mu=e=>Ee$1(e,7),bu=e=>Ee$1(e,9),Ee$1=(e,t)=>{let r=t>=10,o=e.attributes.getString("mode","nearest");if(o!=="nearest"&&o!=="linear"&&(t<11||o!=="cubic"))throw new Error(`unrecognized mode: ${o}`);let s=[];t<9&&(s=e.attributes.getFloats("scales"),mr$1(s,o,r));let i=e.attributes.getFloat("extrapolation_value",0),a=t>10?e.attributes.getString("coordinate_transformation_mode","half_pixel"):"asymmetric";if(["asymmetric","pytorch_half_pixel","tf_half_pixel_for_nn","align_corners","tf_crop_and_resize","half_pixel"].indexOf(a)===-1)throw new Error(`coordinate_transform_mode '${a}' is not supported`);let d=a==="tf_crop_and_resize",p=d,n=o==="nearest"&&t>=11?e.attributes.getString("nearest_mode","round_prefer_floor"):"";if(["round_prefer_floor","round_prefer_ceil","floor","ceil",""].indexOf(n)===-1)throw new Error(`nearest_mode '${n}' is not supported`);let l=e.attributes.getFloat("cubic_coeff_a",-.75),u=e.attributes.getInt("exclude_outside",0)!==0;if(u&&o!=="cubic")throw new Error("exclude_outside can be set to 1 only when mode is CUBIC.");let c=t<11?!0:o==="nearest"&&a==="asymmetric"&&n==="floor",h=0,f=0,g=0;return t>10?e.inputs.length>2?(h=1,f=2,g=3):(f=1,g=2):t===9&&(f=1),$({opset:t,isResize:r,mode:o,scales:s,extrapolationValue:i,coordinateTransformMode:a,useExtrapolation:p,needRoiInput:d,nearestMode:n,cubicCoefficientA:l,excludeOutside:u,useNearest2xOptimization:c,roiInputIdx:h,scalesInputIdx:f,sizesInputIdx:g})},Pp=(e,t,r)=>{let o=D(e.session.backend.glContext.version),[s,i]=e.calculateTextureWidthAndHeight(t[0].dims,0),a=t[0].dims.map((g,b)=>Math.floor(g*r.scales[b])),[d,p]=e.calculateTextureWidthAndHeight(a,0),n=a.length,l=new Array(n),u=new Array(n),c=`
      int output_pitches[${n}];
      int input_pitches[${n}];
      `;for(let g=n-1;g>=0;g--)l[g]=g===n-1?1:l[g+1]*a[g+1],u[g]=g===n-1?1:u[g+1]*t[0].dims[g+1],c+=`
        output_pitches[${g}] = ${l[g]};
        input_pitches[${g}] = ${u[g]};
        `;let h=`
      float getInputFloat(int index) {
        vec2 coords = offsetToCoords(index, ${s}, ${i});
        float value = getColorAsFloat(${o.texture2D}(X, coords));
        return value;
      }
      `,f=r.mode==="nearest"?`
    ${h}
    float process(int indices[${n}]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${d}, ${p});

      ${c}

      int d, m;
      for (int dim = 0; dim < ${n}; ++dim) {
        d = output_index / output_pitches[dim];
        m = output_index - d * output_pitches[dim];
        output_index = m;

        if (scales[dim] != 1 && d > 0) {
          int d2 = d / scales[dim];
          m = d - d2 * scales[dim];
          d = d2;
        }
        input_index += input_pitches[dim] * d;
      }

      return getInputFloat(input_index);
    }`:n===4?`
    ${h}
    float process(int indices[4]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${d}, ${p});

      ${c}

      int m;
      int index_of_dim0, index_of_dim1, index_of_dim2, index_of_dim3;
      index_of_dim0 = output_index / output_pitches[0];
      m = output_index - index_of_dim0 * output_pitches[0];
      index_of_dim1 = m / output_pitches[1];
      m = m - index_of_dim1 * output_pitches[1];
      index_of_dim2 = m / output_pitches[2];
      m = m - index_of_dim2 * output_pitches[2];
      index_of_dim3 = m;

      int index_of_input_dim2, index_of_input_dim3, x_offset, y_offset;
      index_of_input_dim2 = index_of_dim2 / scales[2];
      y_offset = index_of_dim2 - index_of_input_dim2 * scales[2];
      index_of_input_dim3 = index_of_dim3 / scales[3];
      x_offset = index_of_dim3 - index_of_input_dim3 * scales[3];

      input_index = index_of_dim0 * input_pitches[0] +
            index_of_dim1 * input_pitches[1] +
            index_of_input_dim2 * input_pitches[2] +
            index_of_input_dim3;

      float x00 = getInputFloat(input_index);
      float x10, x01, x11;

      bool end_of_dim2 = false;
      if (index_of_input_dim2 == (${t[0].dims[2]} - 1)) {
        // It's the end in dimension 2
        x01 = x00;
        end_of_dim2 = true;
      } else {
        x01 = getInputFloat(input_index + input_pitches[2]);
      }

      if (index_of_input_dim3 == (input_pitches[2] - 1)) {
        // It's the end in dimension 3
        x10 = x00;
        x11 = x01;
      }
      else {
        x10 = getInputFloat(input_index + 1);
        x11 = end_of_dim2 ? x10 : getInputFloat(input_index + input_pitches[2] + 1);
      }

      float y0 = x00 + float(y_offset) * (x01 - x00) / float(scales[2]);
      float y1 = x10 + float(y_offset) * (x11 - x10) / float(scales[2]);
      return y0 + float(x_offset) * (y1 - y0) / float(scales[3]);
    }`:`
    ${h}
    float process(int indices[2]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${d}, ${p});

      ${c}

      int m;
      int index_of_dim0, index_of_dim1;
      index_of_dim0 = output_index / output_pitches[0];
      m = output_index - index_of_dim0 * output_pitches[0];
      index_of_dim1 = m;

      int index_of_input_dim0, index_of_input_dim1, x_offset, y_offset;
      index_of_input_dim0 = index_of_dim0 / scales[0];
      y_offset = index_of_dim0 - index_of_input_dim0 * scales[0];
      index_of_input_dim1 = index_of_dim1 / scales[1];
      x_offset = index_of_dim1 - index_of_input_dim1 * scales[1];

      input_index = index_of_input_dim0 * input_pitches[0] + index_of_input_dim1;

      float x00 = getInputFloat(input_index);
      float x10, x01, x11;

      bool end_of_dim0 = false;
      if (index_of_input_dim0 == (${t[0].dims[0]} - 1)) {
        // It's the end in dimension 0
        x01 = x00;
        end_of_dim0 = true;
      } else {
        x01 = getInputFloat(input_index + input_pitches[0]);
      }

      if (index_of_input_dim1 == (input_pitches[0] - 1)) {
        // It's the end in dimension 1
        x10 = x00;
        x11 = x01;
      }
      else {
        x10 = getInputFloat(input_index + 1);
        x11 = end_of_dim0 ? x10 : getInputFloat(input_index + input_pitches[0] + 1);
      }

      float y0 = x00 + float(y_offset) * (x01 - x00) / float(scales[0]);
      float y1 = x10 + float(y_offset) * (x11 - x10) / float(scales[0]);
      return y0 + float(x_offset) * (y1 - y0) / float(scales[1]);
    }`;return{...hu,output:{dims:a,type:t[0].type,textureType:0},shaderSource:f,variables:[{name:"scales",type:"int",arrayLength:r.scales.length,data:r.scales.map(g=>Math.ceil(g))}]}},Pn=(e,t)=>{if(!e||t.opset<9&&e.length!==1||t.opset>=9&&t.opset<11&&e.length!==2||t.opset>=11&&e.length<2)throw new Error("invalid inputs.");if(t.scales.length>0&&e[0].dims.length!==t.scales.length)throw new Error("Invalid input shape.");if(e[0].type==="string")throw new Error("Invalid input tensor types.")},mr$1=(e,t,r)=>{if(r){for(let o of e)if(o<=0)throw new Error("Scale value should be greater than 0.")}else for(let o of e)if(o<1)throw new Error("Scale value should be greater than or equal to 1.");if((t==="linear"||t==="cubic")&&e.length!==2&&(e.length!==4||e[0]!==1||e[1]!==1))throw new Error(`'Linear' mode and 'Cubic' mode only support 2-D inputs ('Bilinear', 'Bicubic')         or 4-D inputs with the corresponding outermost 2 scale values being 1         in the ${r?"Resize":"Upsample"} opeartor.`)}}),Dn,Ln,yu,gu,Ep,Dp,Lp,$p,xu=x$1(()=>{q(),N(),Pt$1(),Qt$1(),En(),Dn={name:"Resize",inputNames:["A"],inputTypes:[2]},Ln=(e,t,r)=>(Pn(t,r),[e.run({...Dn,cacheHint:r.cacheKey,get:()=>Ep(e,t,r)},t)]),yu=e=>Ee$1(e,10),gu=e=>Ee$1(e,11),Ep=(e,t,r)=>{let o=D(e.session.backend.glContext.version),[s,i]=Dp(t,r);if(s.every(y=>y===1)&&r.coordinateTransformMode!=="tf_crop_and_resize")return{...Dn,output:{dims:i,type:t[0].type,textureType:2},hasMain:!0,shaderSource:`void main() {
                    vec4 v = ${o.texture2D}(X, TexCoords);
                    ${o.output} = v;
                }`};let a=i.length;if(a<2)throw new Error(`output dimension should be at least 2, but got ${a}`);let d=i[a-2],p=i[a-1],n=t[0].dims;if(a!==n.length)throw new Error(`output dimension should match input ${n.length}, but got ${a}`);let l=n[a-2],u=n[a-1],c=s[a-2],h=s[a-1],f="";if(r.mode!=="linear")throw new Error(`resize (packed) does not support mode: '${r.mode}'`);switch(r.coordinateTransformMode){case"asymmetric":f=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        return vec4(coords) / scaleWHWH;
                    }
                `;break;case"half_pixel":f=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        return (vec4(coords) + 0.5) / scaleWHWH - 0.5;
                    }
                `;break;case"pytorch_half_pixel":f=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        vec4 fcoords = vec4(coords);
                        return vec4(
                            ${p}.0 > 1.0 ? (fcoords.x + 0.5) / scaleWHWH.x - 0.5 : 0.0,
                            ${d}.0 > 1.0 ? (fcoords.y + 0.5) / scaleWHWH.y - 0.5 : 0.0,
                            ${p}.0 > 1.0 ? (fcoords.z + 0.5) / scaleWHWH.z - 0.5 : 0.0,
                            ${d}.0 > 1.0 ? (fcoords.w + 0.5) / scaleWHWH.w - 0.5 : 0.0
                          );
                    }
                `;break;case"align_corners":f=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        vec4 resized = vec4(${p}.0 - 1.0, ${d}.0 - 1.0, ${p}.0 - 1.0,
                            ${d}.0 - 1.0);
                        vec4 original = vec4(${u}.0 - 1.0, ${l}.0 - 1.0, ${u}.0 - 1.0,
                            ${l}.0 - 1.0);
                        vec4 new_scale = original / resized;
                        return vec4(coords) * new_scale;
                    }
                `;break;default:throw new Error(`resize (packed) does not support coordinateTransformMode:                                 '${r.coordinateTransformMode}'`)}let g=at(a),b=Et$1(),E=`
            const vec2 inputWH = vec2(${l}.0, ${u}.0);
            const vec4 scaleWHWH = vec4(float(${c}), float(${h}), float(${c}), float(${h}));
            ${b}
            ${f}
            float getAValue(int x10, int r, int c, int d) {
                return getChannel(getA(x10, r, c, d), vec2(c, d));
            }
            void main() {
                ${g} rc = getOutputCoords();

                int batch = rc[0];
                int depth = rc[1];

                // retrieve the 4 coordinates that is used in the 4 packed output values.
                ivec4 coords = ivec4(rc.wz, rc.w + 1, rc.z + 1);

                // calculate the source index in fraction
                vec4 sourceFrac = getSourceFracIndex(coords);

                // get the lower and upper bound of the 4 values that will be packed into one texel.
                ivec4 x00 = ivec4(max(sourceFrac.xy, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.xy)));
                ivec4 x01 = ivec4(max(sourceFrac.xw, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.xw)));
                ivec4 x10 = ivec4(max(sourceFrac.zy, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.zy)));
                ivec4 x11 = ivec4(max(sourceFrac.zw, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.zw)));

                bool hasNextRow = rc.w < ${d-1};
                bool hasNextCol = rc.z < ${p-1};

                // pack x00, x01, x10, x11's top-left corner into one vec4 structure
                vec4 topLeft = vec4(
                    getAValue(batch, depth, x00.x, x00.y),
                    hasNextCol ? getAValue(batch, depth, x01.x, x01.y) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.x, x10.y) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.x, x11.y) : 0.0);

                // pack x00, x01, x10, x11's top-right corner into one vec4 structure
                vec4 topRight = vec4(
                    getAValue(batch, depth, x00.x, x00.w),
                    hasNextCol ? getAValue(batch, depth, x01.x, x01.w) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.x, x10.w) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.x, x11.w) : 0.0);

                // pack x00, x01, x10, x11's bottom-left corner into one vec4 structure
                vec4 bottomLeft = vec4(
                    getAValue(batch, depth, x00.z, x00.y),
                    hasNextCol ? getAValue(batch, depth, x01.z, x01.y) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.z, x10.y) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.z, x11.y) : 0.0);

                // pack x00, x01, x10, x11's bottom-right corner into one vec4 structure
                vec4 bottomRight = vec4(
                    getAValue(batch, depth, x00.z, x00.w),
                    hasNextCol ? getAValue(batch, depth, x01.z, x01.w) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.z, x10.w) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.z, x11.w) : 0.0);

                // calculate the interpolation fraction on u and v direction
                vec4 frac = vec4(sourceFrac) - floor(sourceFrac);
                vec4 clampFrac = clamp(frac, vec4(0.0), vec4(1.0));

                vec4 top = mix(topLeft, topRight, clampFrac.ywyw);
                vec4 bottom = mix(bottomLeft, bottomRight, clampFrac.ywyw);
                vec4 newValue = mix(top, bottom, clampFrac.xxzz);

                ${o.output} = vec4(newValue);
            }
        `;return{...Dn,output:{dims:i,type:t[0].type,textureType:2},hasMain:!0,shaderSource:E}},Dp=(e,t)=>{let r=e[0].dims,o=t.scales,s;if(o.length===0){let a=e[t.scalesInputIdx];if(a&&a.size!==0){if(e[t.sizesInputIdx])throw new Error("Only one of scales or sizes must be provided as input.");o=Lp(a,t.mode,t.isResize)}else{let d=e[t.sizesInputIdx];if(!d||d.size===0)throw new Error("Either scales or sizes MUST be provided as input.");s=Array.from(d.integerData),o=$p(s,r,t.mode,t.isResize)}}else if(e[t.sizesInputIdx])throw new Error("Only one of scales or sizes must be provided as input.");let i=s||r.map((a,d)=>Math.floor(a*o[d]));return[o,i]},Lp=(e,t,r)=>{let o=Array.from(e.floatData);return mr$1(o,t,r),o},$p=(e,t,r,o)=>{let s=t.length,i=new Array(s);for(let a=0,d=s;a<d;a++)if(t[a]===0){if(e[a]!==0)throw new Error("Input dim is zero but required output dim is non-zero.");i[a]=1}else i[a]=e[a]/t[a];return mr$1(i,r,o),i}}),Tu,kp,vu=x$1(()=>{Yt$1(),Tu=(e,t)=>(kp(t),[new Y$1([t[0].dims.length],"int32",void 0,void 0,new Int32Array(t[0].dims))]),kp=e=>{if(!e||e.length!==1)throw new Error("Shape requires 1 input.")}}),$n,wu,Iu,_u,Bp,Su,Fp,Np,Au=x$1(()=>{tt$1(),Pe$1(),z$1(),N(),$n={name:"Slice",inputNames:["A"],inputTypes:[0]},wu=(e,t,r)=>(Bp(t),[e.run({...$n,cacheHint:r.cacheKey,get:()=>_u(e,t[0],r)},t)]),Iu=e=>{let t=e.attributes.getInts("starts"),r=e.attributes.getInts("ends"),o=e.attributes.getInts("axes",[]);return $({starts:t,ends:r,axes:o})},_u=(e,t,r)=>{let o=r.axes.length===0?t.dims.slice(0).map((l,u)=>u):r.axes,s=O.normalizeAxes(o,t.dims.length),i=r.starts.map((l,u)=>l>t.dims[s[u]]-1?t.dims[s[u]]:O.normalizeAxis(l,t.dims[s[u]])),a=r.ends.map((l,u)=>l>t.dims[s[u]]-1?t.dims[s[u]]:O.normalizeAxis(l,t.dims[s[u]])),d=t.dims.slice(),p=[];for(let l=0;l<s.length;l++)d[s[l]]=a[l]-i[l],i[l]>0&&p.push(`outputIdx[${s[l]}] += ${i[l]};`);let n=`
      float process(int outputIdx[${d.length}]) {
        ${p.join(`
      `)}
        return _A(outputIdx);
      }`;return{...$n,output:{dims:d,type:t.type,textureType:0},shaderSource:n}},Bp=e=>{if(!e||e.length!==1)throw new Error("Slice requires 1 input.");if(Vt$1.indexOf(e[0].type)===-1)throw new Error("Invalid input type.")},Su=(e,t)=>{Np(t);let r=Fp(e,t);return[e.run({...$n,cacheHint:r.cacheKey,get:()=>_u(e,t[0],r)},[t[0]])]},Fp=(e,t)=>{if(!e.session.isInitializer(t[1].dataId)||!e.session.isInitializer(t[2].dataId)||t.length>=4&&!e.session.isInitializer(t[3].dataId)||t.length>=5&&!e.session.isInitializer(t[4].dataId))throw new Error("dynamic slice attributes are not allowed");if(t.length>=5&&t[4].integerData.some(a=>a!==1))throw new Error("currently non-1 steps is not supported for Slice");let r=Array.from(t[1].integerData),o=Array.from(t[2].integerData),s=t.length>=4?Array.from(t[3].integerData):[],i=`${s};${r};${o}`;return{starts:r,ends:o,axes:s,cacheKey:i}},Np=e=>{if(!e||e.length<3||e.length>5)throw new Error("Invalid input number.");if(e[1].type!=="int32"||e[1].dims.length!==1)throw new Error("Invalid input type.");if(e[2].type!=="int32"||e[2].dims.length!==1)throw new Error("Invalid input type.");if(e.length>=4&&(e[3].type!=="int32"||e[3].dims.length!==1))throw new Error("Invalid input type.");if(e.length>=5&&(e[4].type!=="int32"||e[4].dims.length!==1))throw new Error("Invalid input type.")}}),Ou,Pu,Eu,Du,Lu,$u,ku,Bu,Cp,Gp,Rp,Fu,Nu=x$1(()=>{tt$1(),z$1(),q(),N(),pr$1(),Ou={name:"SoftmaxComputeMax",inputNames:["A"],inputTypes:[0]},Pu={name:"SoftmaxComputeScale",inputNames:["A","Max"],inputTypes:[0,0]},Eu={name:"SoftMax",inputNames:["A","Max","Norm"],inputTypes:[0,0,0]},Du=(e,t,r)=>{Fu(t);let o=t[0].dims.slice(),s=O.normalizeAxis(r.axis,o.length),i=O.sizeToDimension(o,s),a=O.sizeFromDimension(o,s);return Bu(e,t,r,i,a)},Lu=e=>$({axis:e.attributes.getInt("axis",1)}),$u=e=>$({axis:e.attributes.getInt("axis",-1)}),ku=(e,t,r)=>{Fu(t);let o=t[0].dims.slice(),s=O.normalizeAxis(r.axis,o.length),i=o.length,a=s!==i-1,d=[],p=[],n=[],l;a&&(p=Array.from({length:i}).map((f,g)=>g),p[s]=i-1,p[i-1]=s,p.map(f=>d.push(o[f])),l=$({perm:p}),n=ee$1(e,t,l));let u=a?O.sizeToDimension(d,i-1):O.sizeToDimension(o,i-1),c=a?O.sizeFromDimension(d,i-1):O.sizeFromDimension(o,i-1),h=Bu(e,a?n:t,r,u,c);return a?ee$1(e,h,l):h},Bu=(e,t,r,o,s)=>{let i=Cp(e,t[0],o,s,[o]),a=e.run({...Ou,cacheHint:r.cacheKey,get:()=>i},t),d=Gp(e,t[0],o,s,i.output.dims,[o]),p=e.run({...Pu,cacheHint:r.cacheKey,get:()=>d},[t[0],a]),n=Rp(e,t[0],o,s,i.output.dims,d.output.dims);return[e.run({...Eu,cacheHint:r.cacheKey,get:()=>n},[t[0],a,p])]},Cp=(e,t,r,o,s)=>{let[i,a]=e.calculateTextureWidthAndHeight(t.dims,0),d=s.length;if(r<1||o<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(s.length!==1)throw new Error("Dimensionality of the output should be 1");if(s[0]!==r)throw new Error("Shape of the output should be equal to logical row count");let p=D(e.session.backend.glContext.version),n=`
      float process(int[${d}] indices) {
        int logical_row_start_offset = indices[0] * ${o};

        float max = getColorAsFloat(${p.texture2D}(A, offsetToCoords(logical_row_start_offset, ${i},
        ${a} )));
        for(int i=1; i<${o}; ++i)
        {
          float current = getColorAsFloat(${p.texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${i}, ${a})));
          if(current > max)
          max = current;
        }

        return max;
      }`;return{...Ou,output:{dims:s,type:t.type,textureType:0},shaderSource:n}},Gp=(e,t,r,o,s,i)=>{let[a,d]=e.calculateTextureWidthAndHeight(t.dims,0),p=i.length;if(r<1||o<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(i.length!==1)throw new Error("Dimensionality of the output should be 1");if(i[0]!==r)throw new Error("Shape of the output should be equal to logical row count");if(s.length!==1)throw new Error("Dimensionality of the intermediate results should be 1");if(s[0]!==r)throw new Error("Shape of the intermediate results should be equal to logical row count");let n=D(e.session.backend.glContext.version),l=`
      float process(int[${p}] indices) {
        int logical_row_start_offset = indices[0] * ${o};

        float norm_factor = 0.0;
        float max = _Max(indices);
        for(int i=0; i<${o}; ++i)
        {
          norm_factor += exp(getColorAsFloat(${n.texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${a}, ${d}))) - max);
        }

        return norm_factor;
      }`;return{...Pu,output:{dims:i,type:t.type,textureType:0},shaderSource:l}},Rp=(e,t,r,o,s,i)=>{let[a,d]=e.calculateTextureWidthAndHeight(t.dims,0),p=t.dims.length;if(r<1||o<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(s.length!==1||i.length!==1)throw new Error("Dimensionality of the intermediate results should be 1");if(s[0]!==r||i[0]!==r)throw new Error("Shape of the intermediate results should be equal to logical row count");let n=`
      float process(int[${p}] indices) {

      // get offset of current logical tensor index from the 2-D texture coordinates (TexCoords)
      int offset = coordsToOffset(TexCoords, ${a}, ${d});

      //determine the logical row for this index
      int logical_row_index[1];
      logical_row_index[0] = offset / ${o};

      float norm_factor = _Norm(logical_row_index);

      // avoid possible division by 0
      // if norm_facor is 0, all elements are zero
      // if so, return 0
      if(norm_factor == 0.0)
        return 0.0;

      return exp(_A(indices) - _Max(logical_row_index)) / norm_factor;
    }`;return{...Eu,output:{dims:t.dims,type:t.type,textureType:0},shaderSource:n}},Fu=e=>{if(!e||e.length!==1)throw new Error("Softmax requires 1 input.");if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("Invalid input type")}}),Cu,Gu,Ru,Vp,zp,Mp,Vu=x$1(()=>{tt$1(),z$1(),N(),Cu={name:"Split",inputNames:["A"],inputTypes:[0]},Gu=(e,t,r)=>{Mp(t);let o=O.normalizeAxis(r.axis,t[0].dims.length),s=Vp(e,t,o,r),i=[];for(let a=0;a<s;++a)i.push(e.run({...Cu,cacheHint:`${r.cacheKey};${a}`,get:()=>zp(e,t[0],r,o,a)},t));return i},Ru=e=>{let t=e.attributes.getInt("axis",0),r=e.attributes.getInts("split",[]),o=e.outputs.length;return $({axis:t,split:r,numOutputs:o})},Vp=(e,t,r,o)=>{let[,s]=we.splitShape(t[0].dims,r,o.split,o.numOutputs);return s.length},zp=(e,t,r,o,s)=>{let[i,a]=we.splitShape(t.dims,o,r.split,r.numOutputs),d=a[s],p=i[s],n=`
      float process(int indices[${p.length}]) {
        indices[${o}] += ${d};
        return _A(indices);
      }
    `;return{...Cu,cacheHint:`${r.cacheKey}:${s}`,output:{dims:p,type:t.type,textureType:0},shaderSource:n}},Mp=e=>{if(!e||e.length!==1)throw new Error("Split requires one input.");if(e[0].type!=="int8"&&e[0].type!=="uint8"&&e[0].type!=="int16"&&e[0].type!=="uint16"&&e[0].type!=="int32"&&e[0].type!=="uint32"&&e[0].type!=="float32"&&e[0].type!=="float64"&&e[0].type!=="bool")throw new Error("Invalid input type.")}}),kn,zu,Mu,Up,Wp,Uu=x$1(()=>{z$1(),kn=(e,t,r)=>{Up(t);let o=O.squeezeShape(t[0].dims,r);return[e.reshapeUnpacked(t[0],o)]},zu=(e,t)=>(Wp(t),kn(e,[t[0]],Array.from(t[1].integerData))),Mu=e=>e.attributes.getInts("axes"),Up=e=>{if(!e||e.length!==1)throw new Error("Squeeze requires 1 input.");if(e[0].type==="string")throw new Error("invalid input tensor types.")},Wp=e=>{if(!e||e.length!==2)throw new Error("Squeeze requires 2 inputs.");if(e[1].type!=="int32")throw new Error("Invalid input type.")}}),Wu,Hp,qp,Hu=x$1(()=>{q(),N(),Wu=(e,t)=>{qp(t);let r={name:"Sum",inputNames:t.map((o,s)=>`X${s}`),inputTypes:new Array(t.length).fill(0)};return[e.run({...r,get:()=>Hp(e,t,r)},t)]},Hp=(e,t,r)=>{let o=D(e.session.backend.glContext.version),s=t[0].dims.slice(),i=`
      void main() {
        vec4 result = ${t.map((a,d)=>`${o.texture2D}(X${d},TexCoords)`).join(" + ")};
        ${o.output} = result;
      }
    `;return{...r,output:{dims:s,type:t[0].type,textureType:0},hasMain:!0,shaderSource:i}},qp=e=>{if(!e||e.length===0)throw new Error("Sum requires inputs.");let t=e[0].dims.length;for(let r=1;r<e.length;r++){if(t!==e[r].dims.length)throw new Error("Input shapes are mismatched.");for(let o=0;o<t;o++)if(e[0].dims[o]!==e[r].dims[o])throw new Error("Input shapes are not matched.")}if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("Invalid input type.");for(let r=1;r<e.length;r++)if(e[0].type!==e[r].type)throw new Error("Input types are not matched.")}}),qu,jp,Kp,ju=x$1(()=>{Pe$1(),N(),qu=(e,t)=>{Kp(t);let r={name:"Tile",inputNames:["A"],inputTypes:[0]};return[e.run({...r,get:()=>jp(e,t,r)},t)]},jp=(e,t,r)=>{let o=t[0].dims.slice(),s=new Array(o.length),i=[];for(let p=0;p<o.length;p++)s[p]=o[p]*t[1].numberData[p],i.push(`inputIdx[${p}] = int(mod(float(outputIdx[${p}]), ${o[p]}.));`);let a=s.length,d=`
      float process(int outputIdx[${a}]) {
        int inputIdx[${a}];
        ${i.join(`
`)}
        return _A(inputIdx);
      }
    `;return{...r,output:{dims:s,type:t[0].type,textureType:0},shaderSource:d}},Kp=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 input.");if(e[1].dims.length!==1)throw new Error("The second input shape must 1 dimension.");if(e[1].dims[0]!==e[0].dims.length)throw new Error("Invalid input shape.");if(Vt$1.indexOf(e[0].type)===-1)throw new Error("Invalid input type.");if(e[1].type!=="int32"&&e[1].type!=="int16")throw new Error("Invalid repeat type.")}}),Bn,Ku,Xu,Xp,Jp,Ju=x$1(()=>{z$1(),Bn=(e,t,r)=>{Xp(t);let o=O.unsqueezeShape(t[0].dims,r);return[e.reshapeUnpacked(t[0],o)]},Ku=(e,t)=>(Jp(t),Bn(e,[t[0]],Array.from(t[1].integerData))),Xu=e=>e.attributes.getInts("axes"),Xp=e=>{if(!e||e.length!==1)throw new Error("Unsqueeze requires 1 input.");if(e[0].type==="string")throw new Error("invalid input tensor types.")},Jp=e=>{if(!e||e.length!==2)throw new Error("Unsqueeze requires 2 inputs.");if(e[1].type!=="int32")throw new Error("Invalid input type.")}}),Zu,Yu=x$1(()=>{ua(),va(),_a(),Da(),lr$1(),ds(),xs(),ws(),Ss(),Es(),$s(),Ns(),Vs(),fr$1(),Ws(),nu(),cu(),du(),xu(),vu(),Au(),Nu(),Vu(),Uu(),Hu(),ju(),pr$1(),yn(),Ju(),En(),Zu=[["Abs","","6+",La],["Acos","","7+",$a],["Add","","7+",la],["And","","7+",fa],["Asin","","7+",ka],["Atan","","7+",Ba],["AveragePool","","7+",qs,js],["BatchNormalization","","7+",aa,sa],["Cast","","6+",wa,Ia],["Ceil","","6+",Ca],["Clip","","6-10",mn,Fa],["Clip","","11+",Na],["Concat","","4+",Oa,Ea],["Conv","","1+",In,_n],["ConvTranspose","","1+",cs,ps],["Cos","","7+",Ga],["Div","","7+",ca],["Dropout","","7+",bn],["DepthToSpace","","1+",ys,gs],["Equal","","7+",pa],["Elu","","6+",Ra,Va],["Exp","","6+",za],["Flatten","","1+",Ts,vs],["Floor","","6+",Ma],["FusedConv","com.microsoft","1+",In,_n],["Gather","","1+",Is,_s],["Gemm","","7-10",Sn,Os],["Gemm","","11+",Sn,Ps],["GlobalAveragePool","","1+",Xs,Js],["GlobalMaxPool","","1+",eu],["Greater","","7+",da],["Identity","","1+",bn],["ImageScaler","","1+",Ds,Ls],["InstanceNormalization","","6+",Bs,Fs],["LeakyRelu","","6+",Ua,Wa],["Less","","7+",ha],["LRN","","1+",Cs,Gs],["Log","","6+",Ha],["MatMul","","1+",os,is],["MaxPool","","1+",Zs,Ys],["Mul","","7+",ma],["Neg","","6+",qa],["Not","","1+",ja],["Or","","7+",ba],["Pad","","2-10",An,zs],["Pad","","11+",Ms,Us],["Pow","","7+",ya],["PRelu","","7+",ga],["ReduceLogSum","","1+",lu,zt$1],["ReduceMax","","1+",au,zt$1],["ReduceMean","","1+",iu,zt$1],["ReduceMin","","1+",su,zt$1],["ReduceProd","","1+",uu,zt$1],["ReduceSum","","1-12",ou,zt$1],["ReduceSumSquare","","1+",fu,zt$1],["Relu","","6+",Ka],["Reshape","","5+",pu],["Resize","","10",Ln,yu],["Resize","","11+",Ln,gu],["Shape","","1+",Tu],["Sigmoid","","6+",Xa],["Sin","","7+",Ja],["Slice","","10+",Su],["Slice","","1-9",wu,Iu],["Softmax","","1-12",Du,Lu],["Softmax","","13+",ku,$u],["Split","","2-12",Gu,Ru],["Sqrt","","6+",Za],["Squeeze","","1-12",kn,Mu],["Squeeze","","13+",zu],["Sub","","7+",xa],["Sum","","6+",Wu],["Tan","","7+",Ya],["Tanh","","6+",Qa],["Tile","","6+",qu],["Transpose","","1+",ee$1,ms],["Upsample","","7-8",On,mu],["Upsample","","9",On,bu],["Unsqueeze","","1-12",Bn,Xu],["Unsqueeze","","13+",Ku],["Xor","","7+",Ta]]});function tl(e){let t={},r;for(;(r=Qu.exec(e))!==null;){let o=r[3].split(",").map(s=>{let i=s.trim().split(" ");return i&&i.length===2?{type:i[0],name:i[1]}:null}).filter(s=>s!==null);t[r[2]]={params:o,body:r[4]}}for(let o in t){let s=Zp.replace("__FUNC__",o),i=new RegExp(s,"gm");for(;(r=i.exec(e))!==null;){let a=r[1],d=r[2],p=r[3].split(","),n=a?`${a} ${d};`:"",l=t[o].body,u="";t[o].params.forEach((h,f)=>{h&&(u+=`${h.type} ${h.name} = ${p[f]};
`)}),l=`${u}
 ${l}`,l=l.replace("return",`${d} = `);let c=`
      ${n}
      {
        ${l}
      }
      `;e=e.replace(r[0],c)}}return e=e.replace(Qu,""),e}var Qu,Zp,el=x$1(()=>{Qu=/@inline[\s\n\r]+(\w+)[\s\n\r]+([0-9a-zA-Z_]+)\s*\(([^)]*)\)\s*{(([^}]|[\n\r])*)}/gm,Zp="(\\w+)?\\s+([_0-9a-zA-Z]+)\\s+=\\s+__FUNC__\\((.*)\\)\\s*;"});function he(e,t){let r=[],o=[];for(let s=0;s<e.length;++s)e[s]!==1&&(r.push(e[s]),o.push(s));return{newShape:r,keptDims:o}}function td(e){if(e.length===0)return 1;let t=e[0];for(let r=1;r<e.length;r++)t*=e[r];return t}function rl(e){let t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}var br,Fn=x$1(()=>{pt$1(),z$1(),br=class{constructor(e){this.maxTextureSize=e}computeTextureWH(e,t){let r=this.computeTexture(e,t);return t&&t.isPacked&&(r[0]/=2,r[1]/=2),t&&t.reverseWH?[r[1],r[0]]:r}computeTexture(e,t){let r=t&&t.isPacked;if(e.length===0)return r?[2,2]:[1,1];let o=this.maxTextureSize;if(t&&t.breakAxis!==void 0){let a=t.breakAxis>=e.length?1:e.slice(t.breakAxis).reduce((p,n)=>p*n),d=t.breakAxis<=0?1:e.slice(0,t.breakAxis).reduce((p,n)=>p*n);if(a>o||d>o)M.verbose("TextureLayout",`Given width/height preferences were unattainable: shape:${e}, breakAxis:${t.breakAxis}`);else return[a,d]}let s=e.slice(0);r&&(o=o*2,s=s.map((a,d)=>d>=s.length-2?s[d]%2===0?s[d]:s[d]+1:s[d]),s.length===1&&(s=[2,s[0]])),s.length!==2&&(s=he(s).newShape);let i=td(s);return s.length<=1&&i<=o?[1,i]:s.length===2&&s[0]<=o&&s[1]<=o?s:s.length===3&&s[0]*s[1]<=o&&s[2]<=o?[s[0]*s[1],s[2]]:s.length===3&&s[0]<=o&&s[1]*s[2]<=o?[s[0],s[1]*s[2]]:s.length===4&&s[0]*s[1]*s[2]<=o&&s[3]<=o?[s[0]*s[1]*s[2],s[3]]:s.length===4&&s[0]<=o&&s[1]*s[2]*s[3]<=o?[s[0],s[1]*s[2]*s[3]]:r?rl(i/4).map(a=>a*2):rl(i)}}}),yr$1,nl=x$1(()=>{z$1(),Bt$1(),q(),Fn(),Pt$1(),yr$1=class extends bt$1{constructor(e){super(e)}getFunctions(){return{...this.offsetToCoords(),...this.coordsToOffset(),...this.toVec(),...this.valueFrom(),...this.getCommonUtilFuncs(),...this.getInputsSamplingSnippets(),...this.getOutputSamplingSnippet()}}getCustomTypes(){return{}}offsetToCoords(){let e="offsetToCoords";return{offsetToCoords:new I$1(`
      vec2 ${e}(int offset, int width, int height) {
        int t = offset / width;
        int s = offset - t*width;
        vec2 coords = (vec2(s,t) + vec2(0.5,0.5)) / vec2(width, height);
        return coords;
      }
      `)}}coordsToOffset(){let e="coordsToOffset";return{coordsToOffset:new I$1(`
      int ${e}(vec2 coords, int width, int height) {
        float s = coords.s * float(width);
        float t = coords.t * float(height);
        int offset = int(t) * width + int(s);
        return offset;
      }
      `)}}getOutputSamplingSnippet(){let e=this.context.outputTextureLayout;return e.isPacked?this.getPackedOutputSamplingSnippet(e):this.getUnpackedOutputSamplingSnippet(e)}getPackedOutputSamplingSnippet(e){let t=e.unpackedShape,r=[e.width,e.height],o={},s="getOutputCoords";switch(t.length){case 0:o[s]=this.getOutputScalarCoords();break;case 1:o[s]=this.getOutputPacked1DCoords(t,r);break;case 2:o[s]=this.getOutputPacked2DCoords(t,r);break;case 3:o[s]=this.getOutputPacked3DCoords(t,r);break;default:o[s]=this.getOutputPackedNDCoords(t,r)}let i=`
      void setOutput(vec4 val) {
        ${D(this.context.glContext.version).output} = val;
      }
    `,a="floatTextureSetRGBA";return o[a]=new I$1(i),o}getUnpackedOutputSamplingSnippet(e){let t=e.unpackedShape,r=[e.width,e.height],o={},s="getOutputCoords";switch(t.length){case 0:o[s]=this.getOutputScalarCoords();break;case 1:o[s]=this.getOutputUnpacked1DCoords(t,r);break;case 2:o[s]=this.getOutputUnpacked2DCoords(t,r);break;case 3:o[s]=this.getOutputUnpacked3DCoords(t,r);break;case 4:o[s]=this.getOutputUnpacked4DCoords(t,r);break;case 5:o[s]=this.getOutputUnpacked5DCoords(t,r);break;case 6:o[s]=this.getOutputUnpacked6DCoords(t,r);break;default:throw new Error(`Unsupported output dimensionality: ${t.length}`)}let i=`
        void setOutput(float val) {
          ${D(this.context.glContext.version).output} = vec4(val, 0, 0, 0);
        }
    `,a="floatTextureSetR";return o[a]=new I$1(i),o}getOutputScalarCoords(){return new I$1(`
      int getOutputCoords() {
        return 0;
      }
    `)}getOutputPacked1DCoords(e,t){let r=t,o="";return r[0]===1?(o=`
          int getOutputCoords() {
            return 2 * int(TexCoords.y * ${r[1]}.0);
          }
        `,new I$1(o)):r[1]===1?(o=`
          int getOutputCoords() {
            return 2 * int(TexCoords.x * ${r[0]}.0);
          }
        `,new I$1(o)):(o=`
        int getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                 vec2(${r[0]}, ${r[1]}));
          return 2 * (resTexRC.y * ${r[0]} + resTexRC.x);
        }
      `,new I$1(o))}getOutputPacked2DCoords(e,t){let r="";if(Kt$1.arraysEqual(e,t))return r=`
        ivec2 getOutputCoords() {
          return 2 * ivec2(TexCoords.xy * vec2(${t[0]}, ${t[1]}));
        }
      `,new I$1(r);let o=t,s=Math.ceil(e[1]/2);return r=`
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${o[0]}, ${o[1]}));

          int index = resTexRC.y * ${o[0]} + resTexRC.x;

          // reverse r and c order for packed texture
          int r = imod(index, ${s}) * 2;
          int c = 2 * (index / ${s});

          return ivec2(r, c);
        }
      `,new I$1(r)}getOutputPacked3DCoords(e,t){let r=[t[0],t[1]],o=Math.ceil(e[2]/2),s=o*Math.ceil(e[1]/2),i=`
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${r[0]}, ${r[1]}));
          int index = resTexRC.y * ${r[0]} + resTexRC.x;

          int b = index / ${s};
          index -= b * ${s};

          // reverse r and c order for packed texture
          int r = imod(index, ${o}) * 2;
          int c = 2 * (index / ${o});

          return ivec3(b, r, c);
        }
      `;return new I$1(i)}getOutputPackedNDCoords(e,t){let r=[t[0],t[1]],o=Math.ceil(e[e.length-1]/2),s=o*Math.ceil(e[e.length-2]/2),i=s,a="",d="b, r, c";for(let n=2;n<e.length-1;n++)i*=e[e.length-n-1],a=`
      int b${n} = index / ${i};
      index -= b${n} * ${i};
    `+a,d=`b${n}, `+d;let p=`
      ivec${e.length} getOutputCoords() {
        ivec2 resTexRC = ivec2(TexCoords.xy *
                              vec2(${r[0]}, ${r[1]}));
        int index = resTexRC.y * ${r[0]} + resTexRC.x;

        ${a}

        int b = index / ${s};
        index -= b * ${s};

        // reverse r and c order for packed texture
        int r = imod(index, ${o}) * 2;
        int c = 2 * (index / ${o});

        return ivec${e.length}(${d});
      }
    `;return new I$1(p)}getOutputUnpacked1DCoords(e,t){let r=`
        int getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          return resTexRC.y * ${t[0]} + resTexRC.x;
        }
      `;return new I$1(r)}getOutputUnpacked2DCoords(e,t){let r=`
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          int r = index / ${e[1]};
          int c = index - r * ${e[1]};
          return ivec2(r, c);
        }
      `;return new I$1(r)}getOutputUnpacked3DCoords(e,t){let r="",o=e.length,s=null;o<2&&(s=[]),s=new Array(o-1),s[o-2]=e[o-1];for(let d=o-3;d>=0;--d)s[d]=s[d+1]*e[d+1];let i=["r","c","d"],a=s.map((d,p)=>{let n=`int ${i[p]} = index / ${d}`,l=p===s.length-1?`int ${i[p+1]} = index - ${i[p]} * ${d}`:`index -= ${i[p]} * ${d}`;return`${n}; ${l};`}).join("");return r=`
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${a}
          return ivec3(r, c, d);
        }
      `,new I$1(r)}getOutputUnpacked4DCoords(e,t){let r="",o=e.length,s=null;o<2&&(s=[]),s=new Array(o-1),s[o-2]=e[o-1];for(let d=o-3;d>=0;--d)s[d]=s[d+1]*e[d+1];let i=["r","c","d","d2"],a=s.map((d,p)=>{let n=`int ${i[p]} = index / ${d}`,l=p===s.length-1?`int ${i[p+1]} = index - ${i[p]} * ${d}`:`index -= ${i[p]} * ${d}`;return`${n}; ${l};`}).join("");return r=`
      ivec4 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${a}
          return ivec4(r, c, d, d2);
        }
      `,new I$1(r)}getOutputUnpacked5DCoords(e,t){let r="",o=e.length,s=null;o<2&&(s=[]),s=new Array(o-1),s[o-2]=e[o-1];for(let d=o-3;d>=0;--d)s[d]=s[d+1]*e[d+1];let i=["r","c","d","d2","d3"],a=s.map((d,p)=>{let n=`int ${i[p]} = index / ${d}`,l=p===s.length-1?`int ${i[p+1]} = index - ${i[p]} * ${d}`:`index -= ${i[p]} * ${d}`;return`${n}; ${l};`}).join("");return r=`
      ivec5 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${a}
          return ivec5(r, c, d, d2, d3);
        }
      `,new I$1(r)}getOutputUnpacked6DCoords(e,t){let r="",o=e.length,s=null;o<2&&(s=[]),s=new Array(o-1),s[o-2]=e[o-1];for(let d=o-3;d>=0;--d)s[d]=s[d+1]*e[d+1];let i=["r","c","d","d2","d3","d4"],a=s.map((d,p)=>{let n=`int ${i[p]} = index / ${d}`,l=p===s.length-1?`int ${i[p+1]} = index - ${i[p]} * ${d}`:`index -= ${i[p]} * ${d}`;return`${n}; ${l};`}).join("");return r=`
     ivec6 getOutputCoords() {
         ivec2 resTexRC = ivec2(TexCoords.xy *
                               vec2(${t[0]}, ${t[1]}));
         int index = resTexRC.y * ${t[0]} + resTexRC.x;
         ${a}
         return ivec6(r, c, d, d2, d3, d4);
       }
     `,new I$1(r)}getCommonUtilFuncs(){let e={},t="uvFromFlat";e[t]=new I$1(`
    vec2 uvFromFlat(int texNumR, int texNumC, int index) {
      int texC = index / texNumR;
      int texR = index - texC * texNumR;
      // TODO: swap texR, texC order in following function so row is corresponding to u and column is corresponding to
      //       v.
      return (vec2(texR, texC) + halfCR) / vec2(texNumR, texNumC);
    }
    `),t="packedUVfrom1D",e[t]=new I$1(`
      vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
        int texelIndex = index / 2;
        int texR = texelIndex / texNumC;
        int texC = texelIndex - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),t="packedUVfrom2D",e[t]=new I$1(`
      vec2 packedUVfrom2D(int texNumR, int texNumC, int texelsInLogicalRow, int row, int col) {
        int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
        int texR = texelIndex / texNumC;
        int texC = texelIndex - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),t="packedUVfrom3D",e[t]=new I$1(`
      vec2 packedUVfrom3D(int texNumR, int texNumC,
          int texelsInBatch, int texelsInLogicalRow, int b,
          int row, int col) {
        int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
        int texR = index / texNumC;
        int texC = index - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),t="sampleTexture";let r=D(this.context.glContext.version);return e[t]=new I$1(`
        float sampleTexture(sampler2D textureSampler, vec2 uv) {
            return ${r.texture2D}(textureSampler, uv).r;
        }`),e}getInputsSamplingSnippets(){let e={},t=this.context.outputTextureLayout;return this.context.programInfo.inputNames.forEach((r,o)=>{let s=this.context.inputTextureLayouts[o],i=rr$1(r);s.isPacked?e[i]=this.getPackedSamplerFromInput(i,r,s):e[i]=this.getUnpackedSamplerFromInput(i,r,s);let a=Wi(r);s.unpackedShape.length<=t.unpackedShape.length&&(s.isPacked?e[a]=this.getPackedSamplerAtOutputCoords(a,s,t,r):e[a]=this.getUnpackedSamplerAtOutputCoords(a,s,t,r))}),e}getPackedSamplerAtOutputCoords(e,t,r,o){let s=t.unpackedShape,i=r.unpackedShape,a=rr$1(o),d=s.length,p=i.length,n=it.getBroadcastDims(s,i),l=at(p),u=p-d,c,h=St$1();d===0?c="":p<2&&n.length>=1?c="coords = 0;":c=n.map(L=>`coords.${h[L+u]} = 0;`).join(`
`);let f="";p<2&&d>0?f="coords":f=s.map((L,K)=>`coords.${h[K+u]}`).join(", ");let g="return outputValue;",b=O.size(s)===1,E=O.size(i)===1;if(d===1&&!b&&!E)g=`
        return vec4(outputValue.xy, outputValue.xy);
      `;else if(b&&!E)p===1?g=`
          return vec4(outputValue.x, outputValue.x, 0., 0.);
        `:g=`
          return vec4(outputValue.x);
        `;else if(n.length){let L=d-2,K=d-1;n.indexOf(L)>-1&&n.indexOf(K)>-1?g="return vec4(outputValue.x);":n.indexOf(L)>-1?g="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":n.indexOf(K)>-1&&(g="return vec4(outputValue.xx, outputValue.zz);")}let y=`
        int lastDim = coords.${h[p-1]};
        coords.${h[p-1]} = coords.${h[p-2]};
        coords.${h[p-2]} = lastDim;
      `,F=`
      vec4 ${e}() {
        ${l} coords = getOutputCoords();
        ${y}
        ${c}
        vec4 outputValue = ${a}(${f});
        ${g}
      }
    `;return new I$1(F,["coordinates.getOutputCoords"])}getUnpackedSamplerAtOutputCoords(e,t,r,o){let s=[r.width,r.height],i=[t.width,t.height],a=t.unpackedShape.length,d=r.unpackedShape.length,p=t.unpackedShape,n=r.unpackedShape,l=rr$1(o);if(a===d&&Kt$1.arraysEqual(i,s)){let y=`
          float ${e}() {
            return sampleTexture(${o}, TexCoords);
          }
        `;return new I$1(y,["coordinates.sampleTexture"])}let u=at(d),c=it.getBroadcastDims(p,n),h=d-a,f,g=St$1();a===0?f="":d<2&&c.length>=1?f="coords = 0;":f=c.map(y=>`coords.${g[y+h]} = 0;`).join(`
`);let b="";d<2&&a>0?b="coords":b=t.unpackedShape.map((y,F)=>`coords.${g[F+h]}`).join(", ");let E=`
        float ${e}() {
          ${u} coords = getOutputCoords();
          ${f}
          return ${l}(${b});
        }
      `;return new I$1(E,["coordinates.getOutputCoords"])}getPackedSamplerFromInput(e,t,r){switch(r.unpackedShape.length){case 0:return this.getPackedSamplerScalar(e,t);case 1:return this.getPackedSampler1D(e,t,r);case 2:return this.getPackedSampler2D(e,t,r);case 3:return this.getPackedSampler3D(e,t,r);default:return this.getPackedSamplerND(e,t,r)}}getUnpackedSamplerFromInput(e,t,r){let o=r.unpackedShape;switch(o.length){case 0:return this.getUnpackedSamplerScalar(e,t,r);case 1:return this.getUnpackedSampler1D(e,t,r);case 2:return this.getUnpackedSampler2D(e,t,r);case 3:return this.getUnpackedSampler3D(e,t,r);case 4:return this.getUnpackedSampler4D(e,t,r);case 5:return this.getUnpackedSampler5D(e,t,r);case 6:return this.getUnpackedSampler6D(e,t,r);default:throw new Error(`Unsupported dimension ${o.length}-D`)}}getPackedSamplerScalar(e,t){let r=D(this.context.glContext.version),o=`
          vec4 ${e}() {
            return ${r.texture2D}(${t}, halfCR);
          }
        `;return new I$1(o)}getPackedSampler1D(e,t,r){let o=[r.width,r.height],s=[o[1],o[0]],i=D(this.context.glContext.version),a=`vec4 ${e}(int index) {
      vec2 uv = packedUVfrom1D(
      ${s[0]}, ${s[1]}, index);
      return ${i.texture2D}(${t}, uv);
    }`;return new I$1(a,["coordinates.packedUVfrom1D"])}getPackedSampler2D(e,t,r){let o=r.unpackedShape,s=[r.width,r.height],i=D(this.context.glContext.version),a=s[0],d=s[1];if(s!=null&&Kt$1.arraysEqual(o,s)){let u=`vec4 ${e}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${d}.0, ${a}.0);
        return ${i.texture2D}(${t}, uv);
      }`;return new I$1(u)}let p=s,n=Math.ceil(o[1]/2),l=`vec4 ${e}(int row, int col) {
      vec2 uv = packedUVfrom2D(${p[1]}, ${p[0]}, ${n}, row, col);
      return ${i.texture2D}(${t}, uv);
    }`;return new I$1(l,["coordinates.packedUVfrom2D"])}getPackedSampler3D(e,t,r){let o=r.unpackedShape,s=[r.width,r.height],i=[s[0],s[1]],a=D(this.context.glContext.version);if(o[0]===1){let c=o.slice(1),h=[1,2],f=le$1(o,c),g=["b","row","col"],b=JSON.parse(JSON.stringify(r));b.unpackedShape=f;let E=this.getPackedSamplerFromInput(e,t,b),y=`${E.routineBody}
      vec4 ${e}(int b, int row, int col) {
        return ${e}(${fe$1(g,h)});
      } `;return new I$1(y,E.dependencies)}let d=i[0],p=i[1],n=Math.ceil(o[2]/2),l=n*Math.ceil(o[1]/2),u=`vec4 ${e}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${p}, ${d}, ${l}, ${n}, b, row, col);
      return ${a.texture2D}(${t}, uv);}`;return new I$1(u,["coordinates.packedUVfrom3D"])}getPackedSamplerND(e,t,r){let o=r.unpackedShape,s=o.length,i=[r.width,r.height],a=D(this.context.glContext.version),d=[i[0],i[1]],p=d[1],n=d[0],l=Math.ceil(o[s-1]/2),u=l*Math.ceil(o[s-2]/2),c="int b, int row, int col",h=`b * ${u} + (row / 2) * ${l} + (col / 2)`;for(let g=2;g<s-1;g++)c=`int b${g}, `+c,u*=o[s-g-1],h=`b${g} * ${u} + `+h;let f=`vec4 ${e}(${c}) {
      int index = ${h};
      int texR = index / ${n};
      int texC = index - texR * ${n};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${n}, ${p});
      return ${a.texture2D}(${t}, uv);
    }`;return new I$1(f)}getUnpackedSamplerScalar(e,t,r){let[o,s]=[r.width,r.height];if(o===1&&s===1){let a=`
          float ${e}() {
            return sampleTexture(${t}, halfCR);
          }
        `;return new I$1(a,["coordinates.sampleTexture"])}let i=`
        float ${e}() {
          int offset_${t} = coordsToOffset(TexCoords, ${o}, ${s});
          vec2 uv = uvFromFlat(${o}, ${s}, offset_${t});
          return sampleTexture(${t}, uv);
        }
      `;return new I$1(i,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler1D(e,t,r){let o=r.width,s=r.height;if(s===1&&o===1){let a=`
        float ${e}(int index) {
          return sampleTexture(${t}, halfCR);
        }
      `;return new I$1(a,["coordinates.sampleTexture"])}if(s===1){let a=`
          float ${e}(int index) {
            vec2 uv = vec2((float(index) + 0.5) / ${o}.0, 0.5);
            return sampleTexture(${t}, uv);
          }
        `;return new I$1(a,["coordinates.sampleTexture"])}if(o===1){let a=`
          float ${e}(int index) {
            vec2 uv = vec2(0.5, (float(index) + 0.5) / ${s}.0);
            return sampleTexture(${t}, uv);
          }
        `;return new I$1(a,["coordinates.sampleTexture"])}let i=`
        float ${e}(int index) {
          vec2 uv = uvFromFlat(${o}, ${s}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new I$1(i,["coordinates.uvFromFlat","coordinates.sampleTexture"])}getUnpackedSampler2D(e,t,r){let o=r.unpackedShape,s=[r.height,r.width];if(s!=null&&Kt$1.arraysEqual(o,s)){let u=s[1],c=s[0],h=`
          float ${e}(int row, int col) {
            vec2 uv = (vec2(row, col) + halfCR) / vec2(${u}.0, ${c}.0);
            return sampleTexture(${t}, uv);
          }
        `;return new I$1(h,["coordinates.sampleTexture"])}let{newShape:i,keptDims:a}=he(o),d=i;if(d.length<o.length){let u=le$1(o,d),c=JSON.parse(JSON.stringify(r));c.unpackedShape=u;let h=["col","row"],f=`
          ${this.getUnpackedSamplerFromInput(e,t,c).routineBody}
          float ${e}(int row, int col) {
            return ${e}(${fe$1(h,a)});
          }
        `;return new I$1(f,["coordinates.sampleTexture"])}let p=s[1],n=s[0];if(n===1){let u=`
          float ${e}(int row, int col) {
            int offset_${t} = coordsToOffset(TexCoords, ${p}, ${n});
            float index = dot(vec3(row, col, offset_${t}), vec3(${o[1]}, 1, 1));
            vec2 uv = vec2(0.5, (index + 0.5) / ${p}.0);
            return sampleTexture(${t}, uv);
          }
        `;return new I$1(u,["coordinates.sampleTexture","coordinates.coordsToOffset"])}if(p===1){let u=`
          float ${e}(int row, int col) {
            int offset_${t} = coordsToOffset(TexCoords, ${p}, ${n});
            float index = dot(vec3(row, col, offset_${t}), vec3(${o[1]}, 1, 1));
            vec2 uv = vec2((index + 0.5) / ${n}.0, 0.5);
            return sampleTexture(${t}, uv);
          }
        `;return new I$1(u,["coordinates.sampleTexture","coordinates.coordsToOffset"])}let l=`
        float ${e}(int row, int col) {
          int index = col * ${o[1]} + row;
          vec2 uv = uvFromFlat(${p}, ${n}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new I$1(l,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler3D(e,t,r){let o=r.unpackedShape,s=o[1]*o[2],i=o[2],{newShape:a,keptDims:d}=he(o),p=a;if(p.length<o.length){let c=le$1(o,p),h=["batch","col","row"],f=JSON.parse(JSON.stringify(r));f.unpackedShape=c;let g=this.getUnpackedSamplerFromInput(e,t,f),b=d.reverse(),E=`
          ${g.routineBody}
          float ${e}(int batch, int row, int col) {
            return ${e}(${fe$1(h,b)});
          }
        `;return new I$1(E,g.dependencies)}let n=r.width,l=r.height,u=`
          float ${e}(int depth, int row, int col) {
            // Explicitly use integer operations as dot() only works on floats.
            int index = depth * ${s} + col * ${i} + row;
            vec2 uv = uvFromFlat(${n}, ${l}, index);
            return sampleTexture(${t}, uv);
          }
      `;return new I$1(u,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler4D(e,t,r){let o=r.unpackedShape,s=o[3],i=o[2]*s,a=o[1]*i,d=r.width,p=r.height,n=`
        float ${e}(int row, int col, int depth, int depth2) {
          int index = row * ${a} + col * ${i} +
              depth2 * ${s} + depth;
          vec2 uv = uvFromFlat(${d}, ${p}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new I$1(n,["coordinates.uvFromFlat","coordinates.sampleTexture"])}getUnpackedSampler5D(e,t,r){let o=r.unpackedShape,s=o[4],i=o[3]*s,a=o[2]*i,d=o[1]*a,{newShape:p,keptDims:n}=he(o);if(p.length<o.length){let h=le$1(o,p),f=["row","col","depth","depth2","depth3"],g=JSON.parse(JSON.stringify(r));g.unpackedShape=h;let b=`
          ${this.getUnpackedSamplerFromInput(e,t,g).routineBody}
          float ${e}(int row, int col, int depth, int depth2, int depth3) {
            return ${e}(${fe$1(f,n)});
          }
        `;return new I$1(b,["coordinates.sampleTexture","coordinates.uvFromFlat"])}let l=r.width,u=r.height,c=`
        float ${e}(int row, int col, int depth, int depth2, int depth3) {
          int index = row * ${d} + col * ${a} + depth * ${i} +
          depth3 * ${s} + depth2;
          vec2 uv = uvFromFlat(${l}, ${u}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new I$1(c,["coordinates.sampleTexture","coordinates.uvFromFlat"])}getUnpackedSampler6D(e,t,r){let o=r.unpackedShape,s=o[5],i=o[4]*s,a=o[3]*i,d=o[2]*a,p=o[1]*d,{newShape:n,keptDims:l}=he(o);if(n.length<o.length){let f=le$1(o,n),g=["row","col","depth","depth2","depth3","depth4"],b=JSON.parse(JSON.stringify(r));b.unpackedShape=f;let E=`
            ${this.getUnpackedSamplerFromInput(e,t,b).routineBody}
            float ${e}(int row, int col, int depth,
              int depth2, int depth3, int depth4) {
              return ${e}(${fe$1(g,l)});
            }
          `;return new I$1(E,["coordinates.sampleTexture","coordinates.uvFromFlat"])}let u=r.width,c=r.height,h=`
          float ${e}(int row, int col, int depth,
            int depth2, int depth3, int depth4) {
            int index = row * ${p} + col * ${d} + depth * ${a} +
            depth2 * ${i} + depth3 * ${s} + depth4;
            vec2 uv = uvFromFlat(${u}, ${c}, index);
            return sampleTexture(${t}, uv);
          }
        `;return new I$1(h,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}toVec(){let e=this.context.outputTextureLayout,t=e.shape.length,r=e.strides,o=e.width,s=e.height,i=[];for(let d=0;d<t-1;++d)i.push(`
        c[${d}] = offset / ${r[d]};`),i.push(`
        offset -= c[${d}] * ${r[d]};`);i.push(`
        c[${t-1}] = offset;`);let a=`
      void toVec(vec2 texCoords, out int c[${t}]) {
        int offset = coordsToOffset(texCoords, ${o}, ${s});
        ${i.join("")}
      }
      void toVec(int offset, out int c[${t}]) {
        ${i.join("")}
      }
    `;return{toVec:new I$1(a,["coordinates.coordsToOffset"])}}valueFrom(){let e={};return this.context.programInfo.inputNames.forEach((t,r)=>{let o=this.context.inputTextureLayouts[r],s=(o.unpackedShape.length>0?o.unpackedShape:o.shape).length,i=`_${t}`;e[i]=new I$1(this.getValueFromSingle(t,s,o.width,o.height,!1),[`shapeUtils.indicesToOffset${i}`,"coordinates.offsetToCoords","fragcolor.getColorAsFloat"]),i=i+"_T",e[i]=new I$1(this.getValueFromSingle(t,s,o.width,o.height,!0),[`shapeUtils.indicesToOffset${i}`,"coordinates.offsetToCoords","fragcolor.getColorAsFloat"])}),e}getValueFromSingle(e,t,r,o,s){let i=`_${e}`;s&&(i=i+"_T");let a=D(this.context.glContext.version);return`
        float ${i}(int m[${t}]) {
          int offset = indicesToOffset${i}(m);
          vec2 coords = offsetToCoords(offset, ${r}, ${o});
          float value = getColorAsFloat(${a.texture2D}(${e}, coords));
          return value;
        }
        `}getPackedValueFrom(e,t,r,o,s){let i=`_${e}_Pack`;s&&(i=i+"_T");let a=D(this.context.glContext.version);return`
        vec4 ${i}(int m[${t}]) {
          int offset = indicesToOffset_${e}(m);
          vec2 coords = offsetToCoords(offset, ${r}, ${o});
          return ${a.texture2D}(${e}, coords);
        }
        `}}}),gr,ol=x$1(()=>{Bt$1(),gr=class Ch extends bt$1{constructor(t){super(t)}getFunctions(){return{...this.encodeFloat32(),...this.decodeFloat32()}}getCustomTypes(){return{}}encodeFloat32(){return{encode:new I$1(`highp vec4 encode(highp float f) {
        return vec4(f, 0.0, 0.0, 0.0);
      }
        `)}}decodeFloat32(){return{decode:new I$1(`highp float decode(highp vec4 rgba) {
        return rgba.r;
      }
        `)}}encodeUint8(){let t=Ch.isLittleEndian()?"rgba.rgba=rgba.abgr;":"";return{encode:new I$1(`
      highp vec4 encode(highp float f) {
        highp float F = abs(f);
        highp float Sign = step(0.0,-f);
        highp float Exponent = floor(log2(F));
        highp float Mantissa = (exp2(- Exponent) * F);
        Exponent = floor(log2(F) + 127.0) + floor(log2(Mantissa));
        highp vec4 rgba;
        rgba[0] = 128.0 * Sign  + floor(Exponent*exp2(-1.0));
        rgba[1] = 128.0 * mod(Exponent,2.0) + mod(floor(Mantissa*128.0),128.0);
        rgba[2] = floor(mod(floor(Mantissa*exp2(23.0 -8.0)),exp2(8.0)));
        rgba[3] = floor(exp2(23.0)*mod(Mantissa,exp2(-15.0)));
        ${t}
        rgba = rgba / 255.0; // values need to be normalized to [0,1]
        return rgba;
    }
        `)}}decodeUint8(){let t=Ch.isLittleEndian()?"rgba.rgba=rgba.abgr;":"";return{decode:new I$1(`
        highp float decode(highp vec4 rgba) {
          rgba = rgba * 255.0; // values need to be de-normalized from [0,1] to [0,255]
          ${t}
          highp float Sign = 1.0 - step(128.0,rgba[0])*2.0;
          highp float Exponent = 2.0 * mod(rgba[0],128.0) + step(128.0,rgba[1]) - 127.0;
          highp float Mantissa = mod(rgba[1],128.0)*65536.0 + rgba[2]*256.0 +rgba[3] + float(0x800000);
          highp float Result =  Sign * exp2(Exponent) * (Mantissa * exp2(-23.0 ));
          return Result;
      }
        `)}}static isLittleEndian(){let t=new ArrayBuffer(4),r=new Uint32Array(t),o=new Uint8Array(t);if(r[0]=3735928559,o[0]===239)return!0;if(o[0]===222)return!1;throw new Error("unknown endianness")}}}),xr$1,il=x$1(()=>{Bt$1(),q(),xr$1=class extends bt$1{constructor(e){super(e)}getFunctions(){return{...this.setFragColor(),...this.getColorAsFloat()}}getCustomTypes(){return{}}setFragColor(){let e=D(this.context.glContext.version);return{setFragColor:new I$1(`
        void setFragColor(float value) {
            ${e.output} = encode(value);
        }
        `,["encoding.encode"])}}getColorAsFloat(){return{getColorAsFloat:new I$1(`
        float getColorAsFloat(vec4 color) {
            return decode(color);
        }
        `,["encoding.decode"])}}}}),Tr,al=x$1(()=>{Bt$1(),Tr=class Eh extends bt$1{constructor(t){super(t)}getFunctions(){return{...this.bcastIndex(),...this.bcastMatmulIndex(),...this.offsetToIndices(),...this.indicesToOffset(),...this.incrementIndices()}}getCustomTypes(){return{}}bcastIndex(){let t=this.context.outputTextureLayout.shape.length,r={};return this.context.programInfo.inputNames.forEach((o,s)=>{let i=this.context.inputTextureLayouts[s].unpackedShape;if(i.length<=t){let a=i.length,d=t-a,p=`bcastIndices_${o}`,n="";for(let u=0;u<a;++u)n+=`
          realIndices[${u}] = int( mod(float(bcastedIndices[${d+u}]), ${i[u]}.0) );
          `;let l=`
        void ${p} (int bcastedIndices[${t}], out int realIndices[${a}]) {
          ${n}
        }
        `;r[p]=new I$1(l)}}),r}bcastMatmulIndex(){let t=this.context.outputTextureLayout.shape.length,r={};return this.context.programInfo.inputNames.forEach((o,s)=>{let i=this.context.inputTextureLayouts[s].shape;if(!(i.length<2||i.length>t)){let a=i.length,d=t-a,p=`bcastMatmulIndices_${o}`,n="";for(let u=0;u<a-2;++u)n+=`
          realIndices[${u}] = int( mod(float(bcastedIndices[${d+u}]), ${i[u]}.0) );
          `;let l=`
        void ${p}(int bcastedIndices[${t}], out int realIndices[${a}]) {
          ${n}
          realIndices[${a-1}] = bcastedIndices[${t-1}];
          realIndices[${a-2}] = bcastedIndices[${t-2}];
        }
        `;r[p]=new I$1(l)}}),r}indicesToOffset(){let t={};return this.context.programInfo.inputNames.forEach((r,o)=>{let s=this.context.inputTextureLayouts[o].shape,i=this.context.inputTextureLayouts[o].strides,a=s.length,d=`indicesToOffset_${r}`;t[d]=new I$1(Eh.indexToOffsetSingle(d,a,i)),d=`indicesToOffset_${r}_T`,t[d]=new I$1(Eh.indexToOffsetSingle(d,a,i.slice().reverse()))}),t}static indexToOffsetSingle(t,r,o){let s="";for(let i=r-1;i>=0;--i)s+=`
        offset += indices[${i}] * ${o[i]};
        `;return`
      int ${t}(int indices[${r}]) {
        int offset = 0;
        ${s}
        return offset;
      }
      `}offsetToIndices(){let t={};return this.context.programInfo.inputNames.forEach((r,o)=>{let s=this.context.inputTextureLayouts[o].shape,i=this.context.inputTextureLayouts[o].strides,a=s.length,d=`offsetToIndices_${r}`;t[d]=new I$1(Eh.offsetToIndicesSingle(d,a,i)),d=`offsetToIndices_${r}_T`,t[d]=new I$1(Eh.offsetToIndicesSingle(d,a,i.slice().reverse()))}),t}static offsetToIndicesSingle(t,r,o){let s=[];for(let i=0;i<r-1;++i)s.push(`
      indices[${i}] = offset / ${o[i]};`),s.push(`
        offset -= indices[${i}] * ${o[i]};`);return s.push(`
      indices[${r-1}] = offset;`),`
      void ${t}(int offset, out int indices[${r}]) {
        ${s.join("")}
      }
      `}incrementIndices(){let t={};return this.context.programInfo.inputNames.forEach((r,o)=>{let s=this.context.inputTextureLayouts[o].shape,i=s.length,a=`incrementIndices_${r}`,d="";for(let n=0;n<i;++n)d+=`
        shape[${n}] = ${s[n]};`;let p=`
        void ${a}(int axis, out int indices[${i}]) {
          int shape[${i}];
          ${d};
          for(int i = ${i} -1 ; i >= 0; --i) {
            if(i > axis) continue;
            indices[i] += 1;
            if(indices[i] < shape[i]) {
              break;
            }
            indices[i] = 0;
          }
        }
        `;t[a]=new I$1(p)}),t}}}),vr$1,sl=x$1(()=>{Bt$1(),vr$1=class extends bt$1{constructor(e){super(e)}getCustomTypes(){return{}}getFunctions(){return{...this.binaryVecFunctions(),...this.copyVec(),...this.setVecItem(),...this.getVecItem()}}binaryVecFunctions(){let e=this.context.outputTextureLayout.shape.length,t={add:"+=",sub:"-=",mul:"*=",div:"/="},r={};for(let o in t){let s=`${o}Vec`,i="";for(let d=0;d<e;++d)i+=`
          dest[${d}] ${t[o]} src[${d}];
          `;let a=`
        void ${s}(int src[${e}], out int dest[${e}]) {
          ${i}
        }
        `;r[s]=new I$1(a)}return r}copyVec(){let e=this.context.outputTextureLayout.shape.length,t="";for(let o=0;o<e;++o)t+=`
        dest[${o}] = src[${o}];
        `;let r=`
      void copyVec(int src[${e}], out int dest[${e}]) {
        ${t}
      }
      `;return{copyVec:new I$1(r)}}setVecItem(){let e=this.context.outputTextureLayout.shape.length,t=`
        if(index < 0)
            index =${e} + index;
        if (index == 0)
            m[0] = value;
        `;for(let o=1;o<e-1;++o)t+=`
        else if (index == ${o})
            m[${o}] = value;
            `;t+=`
        else
            m[${e-1}] = value;
        `;let r=`
      void setVecItem(out int m[${e}], int index, int value) {
        ${t}
      }
        `;return{setVecItem:new I$1(r)}}getVecItem(){let e=this.context.outputTextureLayout.shape.length,t=`
        if(index < 0)
            index = ${e} + index;
        if (index == 0)
            return m[0];
      `;for(let o=1;o<e-1;++o)t+=`
        else if (index == ${o})
            return m[${o}];
      `;t+=`
        else
            return m[${e-1}];
        `;let r=`
      int getVecItem(int m[${e}], int index) {
        ${t}
      }
    `;return{getVecItem:new I$1(r)}}}}),Nn,ul=x$1(()=>{nl(),ol(),il(),al(),sl(),Nn={encoding:gr,fragcolor:xr$1,vec:vr$1,shapeUtils:Tr,coordinates:yr$1}}),wr,ll=x$1(()=>{Bt$1(),el(),ul(),q(),wr=class{constructor(e,t,r,o){this.libs={},this.glslLibRoutineDependencyGraph={},this.context=new ar$1(e,t,r,o),Object.keys(Nn).forEach(i=>{let a=new Nn[i](this.context);this.libs[i]=a});let s=this.glslLibRoutineDependencyGraph;for(let i in this.libs){let a=this.libs[i].getFunctions();for(let d in a){let p=i+"."+d,n;s[p]?(n=s[p],n.routineBody=a[d].routineBody):(n=new Oe$1(p,a[d].routineBody),s[p]=n);let l=a[d].dependencies;if(l)for(let u=0;u<l.length;++u)if(s[l[u]])n.addDependency(s[l[u]]);else{let c=new Oe$1(l[u]);s[l[u]]=c,n.addDependency(c)}}}}preprocess(){let e=this.context.programInfo,t=e.shaderSource;return this.context.programInfo.hasMain||(t=`${t}
      ${Ui(this.context.glContext.version,this.context.outputTextureLayout.shape.length)}`),t=tl(t),`${Mi(this.context.glContext.version)}
    ${this.getUniforms(e.inputNames,e.variables)}
    ${this.getImports(t)}
    ${t}`}getImports(e){let t=this.selectGlslLibRoutinesToBeIncluded(e);if(t.length===0)return"";let r="";for(let o=0;o<t.length;++o)if(t[o].routineBody)r+=t[o].routineBody+`
`;else throw new Error(`Missing body for the Glsl Library routine: ${t[o].name}`);return r}selectGlslLibRoutinesToBeIncluded(e){let t=[];return Object.keys(this.glslLibRoutineDependencyGraph).forEach(r=>{let o=r.split(".")[1];e.indexOf(o)!==-1&&t.push(this.glslLibRoutineDependencyGraph[r])}),sr$1.returnOrderedNodes(t)}getUniforms(e,t){let r=[];if(e)for(let o of e)r.push(`uniform sampler2D ${o};`);if(t)for(let o of t)r.push(`uniform ${o.type} ${o.name}${o.arrayLength?`[${o.arrayLength}]`:""};`);return r.join(`
`)}}}),Ir$1,fl=x$1(()=>{Ft$1(),pt$1(),ll(),q(),Ir$1=class{constructor(e,t,r){this.profiler=e,this.glContext=t,this.textureLayoutStrategy=r,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r){this.profiler.event("op",`ProgramManager.run ${e.programInfo.name??"unknown kernel"}`,()=>{let o=this.glContext.gl,s=e.program;o.useProgram(s);try{this.bindOutput(r),this.attributesBound||this.bindAttributes(e.attribLocations),this.bindUniforms(e.uniformLocations,e.programInfo.variables??[],t)}catch(i){throw M.error("ProgramManager",e.programInfo.shaderSource),i}this.profiler.event("backend","GlContext.draw()",()=>{this.glContext.draw()})},this.glContext)}dispose(){this.vertexShader&&this.glContext.deleteShader(this.vertexShader),this.repo.forEach(e=>this.glContext.deleteProgram(e.program))}build(e,t,r){return this.profiler.event("backend","ProgramManager.build",()=>{let o=new wr(this.glContext,e,t,r),s=o.preprocess(),i=this.compile(s);return{programInfo:e,program:i,uniformLocations:this.getUniformLocations(i,o.context.programInfo.inputNames,o.context.programInfo.variables),attribLocations:this.getAttribLocations(i)}})}compile(e){if(!this.vertexShader){M.verbose("ProrgramManager","Compiling and caching Vertex shader for the first time");let o=zi(this.glContext.version);this.vertexShader=this.glContext.compileShader(o,this.glContext.gl.VERTEX_SHADER)}j$1.debug&&M.verbose("ProrgramManager",`FragShader:
${e}
`);let t=this.glContext.compileShader(e,this.glContext.gl.FRAGMENT_SHADER),r=this.glContext.createProgram(this.vertexShader,t);return this.glContext.deleteShader(t),r}bindOutput(e){let t=e.width,r=e.height;M.verbose("ProrgramManager",`Binding output texture to Framebuffer: w/h=${t}/${r}, shape=${e.shape}, type=${e.tensor.type}`),this.glContext.attachFramebuffer(e.texture,t,r)}bindAttributes(e){let t=e.position,r=e.textureCoord;this.glContext.setVertexAttributes(t,r),this.attributesBound=!0}bindUniforms(e,t,r){let o=this.glContext.gl,s=0;for(let{name:i,type:a,location:d,arrayLength:p}of e){let n=t.find(l=>l.name===i)?.data;if(a!=="sampler2D"&&!n)throw new Error(`variable '${i}' does not have data defined in program info`);switch(a){case"sampler2D":this.bindTexture(r[s],d,s),s++;break;case"float":p?o.uniform1fv(d,n):o.uniform1f(d,n);break;case"int":p?o.uniform1iv(d,n):o.uniform1i(d,n);break;default:throw new Error(`Uniform not implemented: ${a}`)}}}bindTexture(e,t,r){this.glContext.bindTextureToUniform(e.texture,r,t)}getAttribLocations(e){return{position:this.getAttribLocation(e,"position"),textureCoord:this.getAttribLocation(e,"textureCoord")}}getUniformLocations(e,t,r){let o=[];if(t)for(let s of t)o.push({name:s,type:"sampler2D",location:this.getUniformLocation(e,s)});if(r)for(let s of r)o.push({...s,location:this.getUniformLocation(e,s.name)});return o}getUniformLocation(e,t){let r=this.glContext.gl.getUniformLocation(e,t);if(r===null)throw new Error(`Uniform ${t} not found.`);return r}getAttribLocation(e,t){return this.glContext.gl.getAttribLocation(e,t)}}}),_r$1,cl=x$1(()=>{pt$1(),Se$1(),_r$1=class{constructor(e,t,r,o){this.glContext=e,this.layoutStrategy=t,this.profiler=r,this.config=o,this.pendingRead=new Map,o.reuseTextures&&(this.inUseTextures=new Map,this.idleTextures=new Map,this.textureLookup=new Map)}createTextureFromLayout(e,t,r,o){let s=this.toEncoderType(e),i=this.glContext.getEncoder(s,t.channels||1,o);if(t.isPacked&&o===1)throw new Error("not implemented");let a=t.width,d=t.height,p,n;if(this.config.reuseTextures){p=`${a}x${d}_${i.format}_${i.internalFormat}_${i.textureType}`,n=this.inUseTextures.get(p),n||(n=[],this.inUseTextures.set(p,n));let u=this.idleTextures.get(p);if(u&&u.length>0){let c=u.pop();return n.push(c),o===1&&this.glContext.updateTexture(c,a,d,i,this.toTextureData(e,r)),c}}M.verbose("TextureManager",`Creating new texture of size ${t.width}x${t.height}`);let l=this.glContext.allocateTexture(a,d,i,this.toTextureData(e,r));return this.config.reuseTextures&&(n.push(l),this.textureLookup.set(l,p)),l}readTexture(e,t,r){return r||(r=1),this.profiler.event("backend","TextureManager.readTexture",()=>{let o=e.shape.reduce((i,a)=>i*a)*r,s=this.glContext.readTexture(e.texture,e.width,e.height,o,this.toEncoderType(t),r);return this.toTensorData(t,s)})}async readTextureAsync(e,t,r){let o=e.tensor.dataId;if(r||(r=1),this.pendingRead.has(o)){let s=this.pendingRead.get(o);return new Promise(i=>s?.push(i))}return this.profiler.event("backend","TextureManager.readTextureAsync",async()=>{this.pendingRead.set(o,[]);let s=e.shape.reduce((p,n)=>p*n)*r;await this.glContext.createAndWaitForFence();let i=this.glContext.readTexture(e.texture,e.width,e.height,s,this.toEncoderType(t),r),a=this.toTensorData(t,i),d=this.pendingRead.get(o);return this.pendingRead.delete(o),d?.forEach(p=>p(a)),a})}readUint8TextureAsFloat(e){return this.profiler.event("backend","TextureManager.readUint8TextureAsFloat",()=>{let t=e.shape.reduce((o,s)=>o*s),r=this.glContext.readTexture(e.texture,e.width,e.height,t*4,"byte",4);return new Float32Array(r.buffer,r.byteOffset,t)})}releaseTexture(e,t){let r;if(this.config.reuseTextures&&(r=this.textureLookup.get(e.texture),r)){t&&this.textureLookup.delete(r);let o=this.inUseTextures.get(r);if(o){let s=o.indexOf(e.texture);if(s!==-1){o.splice(s,1);let i=this.idleTextures.get(r);i||(i=[],this.idleTextures.set(r,i)),i.push(e.texture)}}}(!r||t)&&(M.verbose("TextureManager",`Deleting texture of size ${e.width}x${e.height}`),this.glContext.deleteTexture(e.texture))}toTensorData(e,t){switch(e){case"int16":return t instanceof Int16Array?t:Int16Array.from(t);case"int32":return t instanceof Int32Array?t:Int32Array.from(t);case"int8":return t instanceof Int8Array?t:Int8Array.from(t);case"uint16":return t instanceof Uint16Array?t:Uint16Array.from(t);case"uint32":return t instanceof Uint32Array?t:Uint32Array.from(t);case"uint8":case"bool":return t instanceof Uint8Array?t:Uint8Array.from(t);case"float32":return t instanceof Float32Array?t:Float32Array.from(t);case"float64":return t instanceof Float64Array?t:Float64Array.from(t);default:throw new Error(`TensorData type ${e} is not supported`)}}toTextureData(e,t){if(t)return t instanceof Float32Array?t:new Float32Array(t)}toEncoderType(e){return"float"}clearActiveTextures(){this.glContext.clearActiveTextures()}}}),Sr$1,pl=x$1(()=>{pt$1(),Oo(),oa(),Yu(),fl(),Fn(),cl(),Sr$1=class{constructor(e,t){this.backend=e,this.context=t,this.layoutStrategy=new br(e.glContext.maxTextureSize),this.programManager=new Ir$1(this.context.profiler,e.glContext,this.layoutStrategy),this.textureManager=new _r$1(e.glContext,this.layoutStrategy,this.context.profiler,{reuseTextures:e.textureCacheMode==="full"}),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache=new Map,this.pack=e.pack,this.pack2unpackMap=new Map,this.unpack2packMap=new Map}createInferenceHandler(){return new ir$1(this)}onGraphInitialized(e){let t=e.getValues().filter(r=>r.from===-1&&r.tensor).map(r=>r.tensor.dataId);this.initializers=new Set(t)}isInitializer(e){return this.initializers?this.initializers.has(e):!1}addInitializer(e){this.initializers.add(e)}getTextureData(e,t){return t?this.packedTextureDataCache.get(e):this.unpackedTextureDataCache.get(e)}setTextureData(e,t,r=!1){M.verbose("WebGLSessionHandler","Storing Texture data in cache"),r?this.packedTextureDataCache.set(e,t):this.unpackedTextureDataCache.set(e,t)}dispose(){this.programManager.dispose(),this.textureManager.clearActiveTextures(),this.packedTextureDataCache.forEach(e=>this.textureManager.releaseTexture(e,!0)),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache.forEach(e=>this.textureManager.releaseTexture(e,!0)),this.unpackedTextureDataCache=new Map}resolve(e,t,r){let o=Ao(e,t,Zu);return{impl:o.opImpl,context:o.opInit?o.opInit(e,r):e}}}});function ed(e){let t=0;for(;t<e.length&&e[t]();++t);return t-1}var De$1,dl=x$1(()=>{Ft$1(),Se$1(),Se$1(),Pt$1(),De$1=class{constructor(e,t){this.frameBufferBound=!1,this.itemsToPoll=[],this.gl=e,this.version=t,this.getExtensions(),this.vertexbuffer=this.createVertexbuffer(),this.framebuffer=this.createFramebuffer(),this.queryVitalParameters()}allocateTexture(e,t,r,o){let s=this.gl,i=s.createTexture();s.bindTexture(s.TEXTURE_2D,i),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE);let a=o?r.encode(o,e*t):null;return s.texImage2D(s.TEXTURE_2D,0,r.internalFormat,e,t,0,r.format,r.textureType,a),this.checkError(),i}updateTexture(e,t,r,o,s){let i=this.gl;i.bindTexture(i.TEXTURE_2D,e);let a=o.encode(s,t*r);i.texSubImage2D(i.TEXTURE_2D,0,0,0,t,r,o.format,o.textureType,a),this.checkError()}attachFramebuffer(e,t,r){let o=this.gl;o.bindTexture(o.TEXTURE_2D,e),o.bindFramebuffer(o.FRAMEBUFFER,this.framebuffer),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,e,0),this.checkError(),o.viewport(0,0,t,r),o.scissor(0,0,t,r)}readTexture(e,t,r,o,s,i){let a=this.gl;i||(i=1),this.frameBufferBound||this.attachFramebuffer(e,t,r);let d=this.getEncoder(s,i),p=d.allocate(t*r);return a.bindTexture(a.TEXTURE_2D,e),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,e,0),a.readPixels(0,0,t,r,a.RGBA,d.textureType,p),this.checkError(),d.decode(p,o)}isFramebufferReady(){return!0}getActiveTexture(){let e=this.gl;return`TEXTURE${e.getParameter(this.gl.ACTIVE_TEXTURE)-e.TEXTURE0}`}getTextureBinding(){return this.gl.getParameter(this.gl.TEXTURE_BINDING_2D)}getFramebufferBinding(){return this.gl.getParameter(this.gl.FRAMEBUFFER_BINDING)}setVertexAttributes(e,t){let r=this.gl;r.vertexAttribPointer(e,3,r.FLOAT,!1,20,0),r.enableVertexAttribArray(e),t!==-1&&(r.vertexAttribPointer(t,2,r.FLOAT,!1,20,12),r.enableVertexAttribArray(t)),this.checkError()}createProgram(e,t){let r=this.gl,o=r.createProgram();return r.attachShader(o,e),r.attachShader(o,t),r.linkProgram(o),o}compileShader(e,t){let r=this.gl,o=r.createShader(t);if(!o)throw new Error(`createShader() returned null with type ${t}`);if(r.shaderSource(o,e),r.compileShader(o),r.getShaderParameter(o,r.COMPILE_STATUS)===!1)throw new Error(`Failed to compile shader: ${r.getShaderInfoLog(o)}
Shader source:
${e}`);return o}deleteShader(e){this.gl.deleteShader(e)}bindTextureToUniform(e,t,r){let o=this.gl;o.activeTexture(o.TEXTURE0+t),this.checkError(),o.bindTexture(o.TEXTURE_2D,e),this.checkError(),o.uniform1i(r,t),this.checkError()}draw(){this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4),this.checkError()}checkError(){if(j$1.debug){let e=this.gl,t=e.getError(),r="";switch(t){case e.NO_ERROR:return;case e.INVALID_ENUM:r="INVALID_ENUM";break;case e.INVALID_VALUE:r="INVALID_VALUE";break;case e.INVALID_OPERATION:r="INVALID_OPERATION";break;case e.INVALID_FRAMEBUFFER_OPERATION:r="INVALID_FRAMEBUFFER_OPERATION";break;case e.OUT_OF_MEMORY:r="OUT_OF_MEMORY";break;case e.CONTEXT_LOST_WEBGL:r="CONTEXT_LOST_WEBGL";break;default:r=`Unknown WebGL Error: ${t.toString(16)}`}throw new Error(r)}}deleteTexture(e){this.gl.deleteTexture(e)}deleteProgram(e){this.gl.deleteProgram(e)}getEncoder(e,t,r=0){if(this.version===2)return new nr$1(this.gl,t);switch(e){case"float":return r===1||this.isRenderFloat32Supported?new _e$1(this.gl,t):new _e$1(this.gl,t,this.textureHalfFloatExtension.HALF_FLOAT_OES);case"int":throw new Error("not implemented");case"byte":return new or$1(this.gl,t);default:throw new Error(`Invalid dataType: ${e}`)}}clearActiveTextures(){let e=this.gl;for(let t=0;t<this.maxTextureImageUnits;++t)e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,null)}dispose(){if(this.disposed)return;let e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(this.framebuffer),e.bindBuffer(e.ARRAY_BUFFER,null),e.deleteBuffer(this.vertexbuffer),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.finish(),this.disposed=!0}createDefaultGeometry(){return new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0])}createVertexbuffer(){let e=this.gl,t=e.createBuffer();if(!t)throw new Error("createBuffer() returned null");let r=this.createDefaultGeometry();return e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,r,e.STATIC_DRAW),this.checkError(),t}createFramebuffer(){let e=this.gl.createFramebuffer();if(!e)throw new Error("createFramebuffer returned null");return e}queryVitalParameters(){let e=this.gl;if(this.isFloatTextureAttachableToFrameBuffer=this.checkFloatTextureAttachableToFrameBuffer(),this.isRenderFloat32Supported=this.checkRenderFloat32(),this.isFloat32DownloadSupported=this.checkFloat32Download(),this.version===1&&!this.textureHalfFloatExtension&&!this.isRenderFloat32Supported)throw new Error("both float32 and float16 TextureType are not supported");this.isBlendSupported=!this.isRenderFloat32Supported||this.checkFloat32Blend(),this.maxTextureSize=e.getParameter(e.MAX_TEXTURE_SIZE),this.maxTextureImageUnits=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),this.version}getExtensions(){this.version===2?(this.colorBufferFloatExtension=this.gl.getExtension("EXT_color_buffer_float"),this.disjointTimerQueryWebgl2Extension=this.gl.getExtension("EXT_disjoint_timer_query_webgl2")):(this.textureFloatExtension=this.gl.getExtension("OES_texture_float"),this.textureHalfFloatExtension=this.gl.getExtension("OES_texture_half_float"))}checkFloatTextureAttachableToFrameBuffer(){let e=this.gl,t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t);let r=this.version===2?e.RGBA32F:e.RGBA;e.texImage2D(e.TEXTURE_2D,0,r,1,1,0,e.RGBA,e.FLOAT,null);let o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0);let s=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(t),e.deleteFramebuffer(o),s}checkRenderFloat32(){if(this.version===2){if(!this.colorBufferFloatExtension)return!1}else if(!this.textureFloatExtension)return!1;return this.isFloatTextureAttachableToFrameBuffer}checkFloat32Download(){if(this.version===2){if(!this.colorBufferFloatExtension)return!1}else if(!this.textureFloatExtension||!this.gl.getExtension("WEBGL_color_buffer_float"))return!1;return this.isFloatTextureAttachableToFrameBuffer}checkFloat32Blend(){let e=this.gl,t,r,o,s,i;try{t=e.createTexture(),r=e.createFramebuffer(),e.bindTexture(e.TEXTURE_2D,t);let a=this.version===2?e.RGBA32F:e.RGBA;return e.texImage2D(e.TEXTURE_2D,0,a,1,1,0,e.RGBA,e.FLOAT,null),e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),e.enable(e.BLEND),o=e.createShader(e.VERTEX_SHADER),!o||(e.shaderSource(o,"void main(){}"),e.compileShader(o),s=e.createShader(e.FRAGMENT_SHADER),!s)||(e.shaderSource(s,"precision highp float;void main(){gl_FragColor=vec4(0.5);}"),e.compileShader(s),i=e.createProgram(),!i)?!1:(e.attachShader(i,o),e.attachShader(i,s),e.linkProgram(i),e.useProgram(i),e.drawArrays(e.POINTS,0,1),e.getError()===e.NO_ERROR)}finally{e.disable(e.BLEND),i&&e.deleteProgram(i),o&&e.deleteShader(o),s&&e.deleteShader(s),r&&(e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(r)),t&&(e.bindTexture(e.TEXTURE_2D,null),e.deleteTexture(t))}}beginTimer(){if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let e=this.gl,t=this.disjointTimerQueryWebgl2Extension,r=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,r),r}else throw new Error("WebGL1 profiling currently not supported.")}endTimer(){if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let e=this.gl,t=this.disjointTimerQueryWebgl2Extension;e.endQuery(t.TIME_ELAPSED_EXT);return}else throw new Error("WebGL1 profiling currently not supported")}isTimerResultAvailable(e){let t=!1,r=!1;if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let o=this.gl,s=this.disjointTimerQueryWebgl2Extension;t=o.getQueryParameter(e,o.QUERY_RESULT_AVAILABLE),r=o.getParameter(s.GPU_DISJOINT_EXT)}else throw new Error("WebGL1 profiling currently not supported");return t&&!r}getTimerResult(e){let t=0;if(this.version===2){let r=this.gl;t=r.getQueryParameter(e,r.QUERY_RESULT),r.deleteQuery(e)}else throw new Error("WebGL1 profiling currently not supported");return t/1e6}async waitForQueryAndGetTime(e){return await sn(()=>this.isTimerResultAvailable(e)),this.getTimerResult(e)}async createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,r=e,o=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);return e.flush(),o===null?t=()=>!0:t=()=>{let s=r.clientWaitSync(o,0,0);return s===r.ALREADY_SIGNALED||s===r.CONDITION_SATISFIED},{query:o,isFencePassed:t}}async pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){let e=ed(this.itemsToPoll.map(t=>t.isDoneFn));for(let t=0;t<=e;++t){let{resolveFn:r}=this.itemsToPoll[t];r()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}async addItemToPoll(e,t){this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),!(this.itemsToPoll.length>1)&&await sn(()=>(this.pollItems(),this.itemsToPoll.length===0))}}});function Cn(e){let t;if((!e||e==="webgl2")&&"webgl2"in me?t=me.webgl2:(!e||e==="webgl")&&"webgl"in me&&(t=me.webgl),!t)try{let o=nd();t=hl(o,e)}catch{let o=rd();t=hl(o,e)}e=e||t.version===1?"webgl":"webgl2";let r=t.gl;return me[e]=t,r.isContextLost()?(delete me[e],Cn(e)):(r.disable(r.DEPTH_TEST),r.disable(r.STENCIL_TEST),r.disable(r.BLEND),r.disable(r.DITHER),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SAMPLE_COVERAGE),r.enable(r.SCISSOR_TEST),r.enable(r.CULL_FACE),r.cullFace(r.BACK),t)}function hl(e,t){let r={alpha:!1,depth:!1,antialias:!1,stencil:!1,preserveDrawingBuffer:!1,premultipliedAlpha:!1,failIfMajorPerformanceCaveat:!1},o,s=r;if((!t||t==="webgl2")&&(o=e.getContext("webgl2",s),o))try{return new De$1(o,2)}catch(i){M.warning("GlContextFactory",`failed to create WebGLContext using contextId 'webgl2'. Error: ${i}`)}if((!t||t==="webgl")&&(o=e.getContext("webgl",s)||e.getContext("experimental-webgl",s),o))try{return new De$1(o,1)}catch(i){M.warning("GlContextFactory",`failed to create WebGLContext using contextId 'webgl' or 'experimental-webgl'. Error: ${i}`)}throw new Error("WebGL is not supported")}function rd(){if(typeof document>"u")throw new TypeError("failed to create canvas: document is not supported");let e=document.createElement("canvas");return e.width=1,e.height=1,e}function nd(){if(typeof OffscreenCanvas>"u")throw new TypeError("failed to create offscreen canvas: OffscreenCanvas is not supported");return new OffscreenCanvas(1,1)}var me,ml=x$1(()=>{pt$1(),dl(),me={}}),Ar$1,bl=x$1(()=>{Ft$1(),pt$1(),pl(),ml(),Ar$1=class{get contextId(){return j$1.webgl.contextId}set contextId(e){j$1.webgl.contextId=e}get matmulMaxBatchSize(){return j$1.webgl.matmulMaxBatchSize}set matmulMaxBatchSize(e){j$1.webgl.matmulMaxBatchSize=e}get textureCacheMode(){return j$1.webgl.textureCacheMode}set textureCacheMode(e){j$1.webgl.textureCacheMode=e}get pack(){return j$1.webgl.pack}set pack(e){j$1.webgl.pack=e}get async(){return j$1.webgl.async}set async(e){j$1.webgl.async=e}initialize(){try{return this.glContext=Cn(this.contextId),typeof this.matmulMaxBatchSize!="number"&&(this.matmulMaxBatchSize=16),typeof this.textureCacheMode!="string"&&(this.textureCacheMode="full"),typeof this.pack!="boolean"&&(this.pack=!1),typeof this.async!="boolean"&&(this.async=!1),M.setWithEnv(j$1),j$1.webgl.context||Object.defineProperty(j$1.webgl,"context",{value:this.glContext.gl}),M.verbose("WebGLBackend",`Created WebGLContext: ${typeof this.glContext} with matmulMaxBatchSize: ${this.matmulMaxBatchSize}; textureCacheMode: ${this.textureCacheMode}; pack: ${this.pack}; async: ${this.async}.`),!0}catch(e){return M.warning("WebGLBackend",`Unable to initialize WebGLBackend. ${e}`),!1}}createSessionHandler(e){return new Sr$1(this,e)}dispose(){this.glContext.dispose()}}});async function Gn(e){if(e){let t=typeof e=="string"?[e]:e;for(let r of t){let o=yl.get(r);if(o)return o;let s=await id(r);if(s)return s}}else return Gn(["webgl"]);throw new Error("no available backend to use")}async function id(e){let t=od;if(typeof t[e]<"u"&&ad(t[e])){let r=t[e],o=r.initialize();if(typeof o=="object"&&"then"in o&&(o=await o),o)return yl.set(e,r),r}}function ad(e){let t=e;return"initialize"in t&&typeof t.initialize=="function"&&"createSessionHandler"in t&&typeof t.createSessionHandler=="function"&&"dispose"in t&&typeof t.dispose=="function"}var yl,od,gl=x$1(()=>{bl(),yl=new Map,od={webgl:new Ar$1}}),Rn,Or$1,xl=x$1(()=>{pt$1(),Rn=class{constructor(e,t){this.op=e,this.node=t}},Or$1=class{constructor(e,t,r){this.graph=e,this.profiler=r,this.initialize(t)}initialize(e){this.profiler.event("session","ExecutionPlan.initialize",()=>{let t=this.graph.getNodes();if(t.length!==e.length)throw new Error("The size of nodes and OPs do not match.");this._ops=e.map((r,o)=>new Rn(r,t[o])),this.reset(),this._starter=[],this._ops.forEach((r,o)=>{let s=!0;for(let i of r.node.inputs)if(!this._values[i]&&this.graph.getInputIndices().indexOf(i)===-1){s=!1;break}s&&this._starter.push(o)})})}reset(){this._values=this.graph.getValues().map(e=>e.tensor)}async execute(e,t){return this.profiler.event("session","ExecutionPlan.execute",async()=>{this.reset();let r=e.createInferenceHandler(),o=this.graph.getInputIndices();if(t.length!==o.length)throw new Error(`number of input tensors don't match the number of inputs to the model: actual: ${t.length} expected: ${o.length}`);t.forEach((n,l)=>{let u=o[l];this._values[u]=n});let s=this._starter.slice(0),i=this.graph.getValues(),a=this.graph.getNodes(),d=0;for(;d<s.length;){let n=s[d++],l=this._ops[n],u=l.node.inputs.map(g=>this._values[g]);if(u.indexOf(void 0)!==-1)throw new Error(`unresolved input detected: op: ${l.node}`);let c=u;M.verbose("ExecPlan",`Running op:${l.node.name} (${c.map((g,b)=>`'${l.node.inputs[b]}': ${g.type}[${g.dims.join(",")}]`).join(", ")})`);let h=await this.profiler.event("node",l.node.name,async()=>l.op.impl(r,c,l.op.context));if(h.length!==l.node.outputs.length)throw new Error("the size of output does not match model definition.");h.forEach((g,b)=>{let E=l.node.outputs[b];if(this._values[E])throw new Error(`output [${E}] already has value: op:${l.node.name}`);this._values[E]=g});let f=new Set;h.forEach((g,b)=>{let E=l.node.outputs[b];for(let y of i[E].to){let F=a[y],L=!0;for(let K of F.inputs)if(!this._values[K]){L=!1;break}L&&f.add(y)}}),s.push(...f)}let p=[];for(let n=0;n<this.graph.getOutputIndices().length;n++){let l=this.graph.getOutputIndices()[n],u=this._values[l];if(u===void 0)throw new Error(`required output [${l}] does not have value`);l===0?await u.getData():u.data,p.push(u)}return M.verbose("ExecPlan","disposing of inferenceHandler"),r.dispose(),p})}}}),B,xt$1,Le$1,Tl=x$1(()=>{ge$1(),B=ne(se$1()),Yt$1(),z$1(),xt$1=P$1.experimental.fbs,Le$1=class Oh{constructor(t){if(this._attributes=new Map,t!=null){for(let r of t)r instanceof B.onnx.AttributeProto?this._attributes.set(r.name,[Oh.getValue(r),Oh.getType(r)]):r instanceof xt$1.Attribute&&this._attributes.set(r.name(),[Oh.getValue(r),Oh.getType(r)]);if(this._attributes.size<t.length)throw new Error("duplicated attribute names")}}set(t,r,o){this._attributes.set(t,[o,r])}delete(t){this._attributes.delete(t)}getFloat(t,r){return this.get(t,"float",r)}getInt(t,r){return this.get(t,"int",r)}getString(t,r){return this.get(t,"string",r)}getTensor(t,r){return this.get(t,"tensor",r)}getFloats(t,r){return this.get(t,"floats",r)}getInts(t,r){return this.get(t,"ints",r)}getStrings(t,r){return this.get(t,"strings",r)}getTensors(t,r){return this.get(t,"tensors",r)}get(t,r,o){let s=this._attributes.get(t);if(s===void 0){if(o!==void 0)return o;throw new Error(`required attribute not found: ${t}`)}if(s[1]!==r)throw new Error(`type mismatch: expected ${r} but got ${s[1]}`);return s[0]}static getType(t){let r=t instanceof B.onnx.AttributeProto?t.type:t.type();switch(r){case B.onnx.AttributeProto.AttributeType.FLOAT:return"float";case B.onnx.AttributeProto.AttributeType.INT:return"int";case B.onnx.AttributeProto.AttributeType.STRING:return"string";case B.onnx.AttributeProto.AttributeType.TENSOR:return"tensor";case B.onnx.AttributeProto.AttributeType.FLOATS:return"floats";case B.onnx.AttributeProto.AttributeType.INTS:return"ints";case B.onnx.AttributeProto.AttributeType.STRINGS:return"strings";case B.onnx.AttributeProto.AttributeType.TENSORS:return"tensors";default:throw new Error(`attribute type is not supported yet: ${B.onnx.AttributeProto.AttributeType[r]}`)}}static getValue(t){let r=t instanceof B.onnx.AttributeProto?t.type:t.type();if(r===B.onnx.AttributeProto.AttributeType.GRAPH||r===B.onnx.AttributeProto.AttributeType.GRAPHS)throw new Error("graph attribute is not supported yet");let o=this.getValueNoCheck(t);if(r===B.onnx.AttributeProto.AttributeType.INT&&ft$1.isLong(o))return ft$1.longToNumber(o);if(r===B.onnx.AttributeProto.AttributeType.INTS){let s=o,i=new Array(s.length);for(let a=0;a<s.length;a++){let d=s[a];i[a]=ft$1.longToNumber(d)}return i}if(r===B.onnx.AttributeProto.AttributeType.TENSOR)return t instanceof B.onnx.AttributeProto?Y$1.fromProto(o):Y$1.fromOrtTensor(o);if(r===B.onnx.AttributeProto.AttributeType.TENSORS){if(t instanceof B.onnx.AttributeProto)return o.map(s=>Y$1.fromProto(s));if(t instanceof xt$1.Attribute)return o.map(s=>Y$1.fromOrtTensor(s))}return r===B.onnx.AttributeProto.AttributeType.STRING&&t instanceof B.onnx.AttributeProto?Ie$1(o):r===B.onnx.AttributeProto.AttributeType.STRINGS&&t instanceof B.onnx.AttributeProto?o.map(Ie$1):o}static getValueNoCheck(t){return t instanceof B.onnx.AttributeProto?this.getValueNoCheckFromOnnxFormat(t):this.getValueNoCheckFromOrtFormat(t)}static getValueNoCheckFromOnnxFormat(t){switch(t.type){case B.onnx.AttributeProto.AttributeType.FLOAT:return t.f;case B.onnx.AttributeProto.AttributeType.INT:return t.i;case B.onnx.AttributeProto.AttributeType.STRING:return t.s;case B.onnx.AttributeProto.AttributeType.TENSOR:return t.t;case B.onnx.AttributeProto.AttributeType.GRAPH:return t.g;case B.onnx.AttributeProto.AttributeType.FLOATS:return t.floats;case B.onnx.AttributeProto.AttributeType.INTS:return t.ints;case B.onnx.AttributeProto.AttributeType.STRINGS:return t.strings;case B.onnx.AttributeProto.AttributeType.TENSORS:return t.tensors;case B.onnx.AttributeProto.AttributeType.GRAPHS:return t.graphs;default:throw new Error(`unsupported attribute type: ${B.onnx.AttributeProto.AttributeType[t.type]}`)}}static getValueNoCheckFromOrtFormat(t){switch(t.type()){case xt$1.AttributeType.FLOAT:return t.f();case xt$1.AttributeType.INT:return t.i();case xt$1.AttributeType.STRING:return t.s();case xt$1.AttributeType.TENSOR:return t.t();case xt$1.AttributeType.GRAPH:return t.g();case xt$1.AttributeType.FLOATS:return t.floatsArray();case xt$1.AttributeType.INTS:{let r=[];for(let o=0;o<t.intsLength();o++)r.push(t.ints(o));return r}case xt$1.AttributeType.STRINGS:{let r=[];for(let o=0;o<t.stringsLength();o++)r.push(t.strings(o));return r}case xt$1.AttributeType.TENSORS:{let r=[];for(let o=0;o<t.tensorsLength();o++)r.push(t.tensors(o));return r}default:throw new Error(`unsupported attribute type: ${xt$1.AttributeType[t.type()]}`)}}}}),zn,Pr$1,Mn,Lt$1,Er,Vn,vl=x$1(()=>{Tl(),ge$1(),zn=ne(se$1()),Yt$1(),z$1(),Pr$1=P$1.experimental.fbs,Mn={from:(e,t)=>new Vn(e,t)},Lt$1=class{constructor(e){this._from=void 0,this._to=[],this.tensor=void 0,this.type=void 0,e&&(this.type=rt$1.tensorValueTypeFromProto(e.type.tensorType))}get from(){return this._from}get to(){return this._to}},Er=class{constructor(e,t){e instanceof zn.onnx.NodeProto?(this.name=e.name,this.opType=e.opType,this.attributes=new Le$1(e.attribute)):e instanceof Pr$1.Node&&(this.name=t??e.name(),this.opType=e.opType(),this.attributes=new Le$1(rt$1.tensorAttributesFromORTFormat(e))),this.inputs=[],this.outputs=[],this.executeNode=!0}},Vn=class{constructor(e,t){if(!e)throw new TypeError("graph is empty");this.buildGraph(e),this.transformGraph(t),this.checkIsAcyclic()}getInputIndices(){return this._allInputIndices}getInputNames(){return this._allInputNames}getOutputIndices(){return this._allOutputIndices}getOutputNames(){return this._allOutputNames}getValues(){return this._allData}getNodes(){return this._nodes}buildGraph(e){if(e instanceof zn.onnx.GraphProto)this.buildGraphFromOnnxFormat(e);else if(e instanceof Pr$1.Graph)this.buildGraphFromOrtFormat(e);else throw new TypeError("Graph type is not supported.")}buildGraphFromOnnxFormat(e){let t=new Map;this._allData=[],this._allInputIndices=[],this._allInputNames=[],this._allOutputIndices=[],this._allOutputNames=[],this._nodes=[];let r=new Map;if(!e.input)throw new Error("missing information in graph: input");let o=[];for(let s of e.input){if(t.has(s.name))throw new Error(`duplicated input name: ${s.name}`);let i=this._allData.push(new Lt$1(s))-1;t.set(s.name,i),o.push(s.name)}if(!e.initializer)throw new Error("missing information in graph: initializer");for(let s of e.initializer){let i=t.get(s.name);if(i===void 0){let a=new Lt$1;a.type={shape:{dims:rt$1.tensorDimsFromProto(s.dims)},tensorType:rt$1.tensorDataTypeFromProto(s.dataType)},i=this._allData.push(a)-1,t.set(s.name,i)}this._allData[i]._from=-1,this._allData[i].tensor=Y$1.fromProto(s)}for(let s=0;s<this._allData.length;s++)this._allData[s].tensor||(this._allInputIndices.push(s),this._allInputNames.push(o[s]));if(!e.output)throw new Error("missing information in graph: output");for(let s of e.output){if(t.has(s.name))throw new Error(`duplicated output name: ${s.name}`);let i=this._allData.push(new Lt$1(s))-1;t.set(s.name,i),this._allOutputIndices.push(i),this._allOutputNames.push(s.name)}if(!e.node)throw new Error("missing information in graph: node");for(let s of e.node){if(!s.name)for(let a=0;;a++){let d=`unnamed_${s.opType}_${a}`;if(!r.has(d)){s.name=d;break}}if(r.has(s.name))throw new Error(`duplicated node name: ${s.name}`);let i=this._nodes.push(new Er(s))-1;r.set(s.name,i)}for(let s=0;s<this._nodes.length;s++){let i=this._nodes[s],a=e.node[s];if(!a.output)throw new Error(`missing output for node: ${a.name}`);for(let d of a.output){let p=t.get(d);if(typeof p>"u"&&(p=this._allData.push(new Lt$1)-1,t.set(d,p)),i.outputs.push(p),this._allData[p]._from!==void 0)throw new Error(`multiple nodes output to one data value: ${p}`);if(this._allData[p]._from=s,a.opType==="Constant"){if(!a.attribute||a.attribute.length!==1||!a.attribute[0].t)throw new Error("missing attributes or missing tensor value in attributes for this Constant operator");if(!a.output||a.output.length!==1)throw new Error("missing output or incorrect number of outputs for this Constant operator");i.outputs.pop(),i.executeNode=!1,this._allData[p]._from=-1,this._allData[p].tensor=Y$1.fromProto(a.attribute[0].t)}}}for(let s=0;s<this._nodes.length;s++){let i=this._nodes[s],a=e.node[s];if(!a.input)throw new Error(`missing input for node: ${a.name}`);for(let d of a.input){let p=t.get(d);if(typeof p>"u"){if(d===""&&(a.input.length===3||a.input.length===4)&&a.opType==="Resize")continue;throw new Error(`unrecognized input '${d}' for node: ${a.name}`)}i.inputs.push(p),this._allData[p]._to.push(s)}}return!0}buildGraphFromOrtFormat(e){let t=new Map;this._allData=[],this._allInputIndices=[],this._allInputNames=[],this._allOutputIndices=[],this._allOutputNames=[],this._nodes=[];let r=new Map,o=[];for(let s=0;s<e.inputsLength();s++){let i=e.inputs(s);if(t.has(i))throw new Error(`duplicated input name: ${i}`);for(let a=0;a<e.nodeArgsLength();a++)if(e.nodeArgs(a)?.name()===i){let d=new Lt$1;if(e.nodeArgs(a)?.type()?.valueType()!==Pr$1.TypeInfoValue.tensor_type)throw new Error("Unexpected value type for the nodeArg.");let p=e.nodeArgs(a).type().value(new Pr$1.TensorTypeAndShape),n=rt$1.tensorDataTypeFromProto(p.elemType()),l=p.shape(),u=[];for(let h=0;h<l.dimLength();h++)u.push(ft$1.longToNumber(l.dim(h).value().dimValue()));d.type={shape:{dims:u},tensorType:n};let c=this._allData.push(d)-1;t.set(i,c),o.push(i)}}for(let s=0;s<e.initializersLength();s++){let i=e.initializers(s),a=t.get(i.name());if(a===void 0){let d=new Lt$1,p=rt$1.tensorDimsFromORTFormat(i),n=rt$1.tensorDataTypeFromProto(i.dataType());d.type={shape:{dims:p},tensorType:n},a=this._allData.push(d)-1,t.set(i.name(),a)}this._allData[a]._from=-1,this._allData[a].tensor=Y$1.fromOrtTensor(i)}for(let s=0;s<this._allData.length;s++)this._allData[s].tensor||(this._allInputIndices.push(s),this._allInputNames.push(o[s]));for(let s=0;s<e.outputsLength();s++){let i=e.outputs(s);if(t.has(i))throw new Error(`duplicated output name: ${i}`);let a=this._allData.push(new Lt$1)-1;t.set(i,a),this._allOutputIndices.push(a),this._allOutputNames.push(i)}if(!e.nodes)throw new Error("missing information in graph: node");for(let s=0;s<e.nodesLength();s++){let i=e.nodes(s),a=i.name();if(!a)for(let p=0;a=`unnamed_${i.opType()}_${p}`,!!r.has(a);p++);if(r.has(a))throw new Error(`duplicated node name: ${a}`);let d=this._nodes.push(new Er(i,a))-1;r.set(a,d)}for(let s=0;s<this._nodes.length;s++){let i=this._nodes[s],a=e.nodes(s);if(a==null)throw new Error(`No node exists at index ${s}`);if(a?.outputsLength()===0)throw new Error(`missing output for node: ${a.name}`);for(let d=0;d<a?.outputsLength();d++){let p=a?.outputs(d),n=t.get(p);if(typeof n>"u"&&(n=this._allData.push(new Lt$1)-1,t.set(p,n)),i.outputs.push(n),this._allData[n]._from!==void 0)throw new Error(`multiple nodes output to one data value: ${n}`);if(this._allData[n]._from=s,a.opType()==="Constant"){if(a.attributesLength()!==1||!a.attributes(0).t())throw new Error("missing attributes or missing tensor value in attributes for this Constant operator");if(a.outputsLength()!==1)throw new Error("missing output or incorrect number of outputs for this Constant operator");i.outputs.pop(),i.executeNode=!1,this._allData[n]._from=-1,this._allData[n].tensor=Y$1.fromOrtTensor(a.attributes(0).t())}}}for(let s=0;s<this._nodes.length;s++){let i=this._nodes[s],a=e.nodes(s);if(a.inputsLength()===0)throw new Error(`missing input for node: ${a.name}`);for(let d=0;d<a.inputsLength();d++){let p=a.inputs(d),n=t.get(p);if(typeof n>"u")throw new Error(`unrecognized input '${p}' for node: ${a.name()}`);i.inputs.push(n),this._allData[n]._to.push(s)}}}checkIsAcyclic(){let e=new Set;this._allInputIndices.forEach(o=>{this._allData[o]._to.forEach(s=>{e.add(s)})});let t=Array.from(e),r=new Array(this._nodes.length).fill("white");for(;t.length>0;){let o=t.pop();r[o]==="gray"?r[o]="black":(t.push(o),r[o]="gray",this._nodes[o].outputs.forEach(s=>{let i=this._allData[s];if(typeof i.tensor<"u")throw new Error("node outputs should not be initialized");if(i._from!==o)throw new Error("from property of the Value object doesn't match index of Node being processed");i._to.forEach(a=>{if(r[a]==="gray")throw new Error("model graph is cyclic");r[a]==="white"&&t.push(a)})}))}}transformGraph(e){this.removeAllIdentityNodes(),this.removeAllDropoutNodes(),this.fuseConvActivationNodes(),e&&e.transformGraph(this),this.finalizeGraph()}finalizeGraph(){let e=0,t=new Array(this._nodes.length,0),r=0;for(let o=0;o<this._nodes.length;o++)t[o]=r,this._nodes[o].executeNode?(r!==o&&(this._nodes[r]=this._nodes[o]),r++):this._nodes[o].outputs.forEach(s=>{this._allData[s]._from=-2});this._nodes.splice(r,this._nodes.length-r);for(let o=0;o<this._allData.length;o++){let s=this._allData[o];s._from!==void 0&&s._from!==-1&&s._from!==-2&&(s._from=t[s._from]);for(let i=0;i<s._to.length;i++)if(s._to[i]>=0)s._to[i]=t[s._to[i]];else throw new Error("Trying to update a removed node")}e=0;for(let o=0;o<this._allData.length;o++){if(this._allData[o].from===-2&&this._allOutputIndices.indexOf(o+e)===-1){e++,this._allData.splice(o,1),o--;continue}if(e>0){let s=-1;this._allData[o].from!==void 0&&this._allData[o].from!==-1?(s=this._nodes[this._allData[o].from].outputs.indexOf(o+e),s!==-1&&(this._nodes[this._allData[o].from].outputs[s]=o)):(s=this._allInputIndices.indexOf(o+e),s!==-1&&(this._allInputIndices[s]=o)),this._allData[o].to.forEach(i=>{s=this._nodes[i].inputs.indexOf(o+e),s!==-1&&(this._nodes[i].inputs[s]=o)}),this._allData[o].to.length===0&&(s=this._allOutputIndices.indexOf(o+e),s!==-1&&(this._allOutputIndices[s]=o))}}}deleteNode(e){let t=this._nodes[e];if(t.outputs.length>1){for(let a=1;a<t.outputs.length;a++)if(this._allData[t.outputs[a]].to.length>0)throw new Error("Node deletion with more than one output connected to other nodes is not supported. ")}t.executeNode=!1;let r=t.inputs[0],o=t.outputs[0],s=this._allData[o].to;for(let a=0;a<t.inputs.length;a++){let d=this._allData[t.inputs[a]].to.indexOf(e);if(d===-1)throw new Error("The Value object doesn't have the current Node in it's 'to' property ");this._allData[t.inputs[a]].to.splice(d,1)}this._allData[o]._to=[];let i=this._allOutputIndices.indexOf(o);if(i!==-1&&(this._allOutputIndices[i]=r),s&&s.length>0)for(let a of s){let d=this._nodes[a].inputs.indexOf(o);if(d===-1)throw new Error("The Node object doesn't have the output Value in it's 'inputs' property ");this._nodes[a].inputs[d]=r,this._allData[r].to.push(a)}}removeAllDropoutNodes(){let e=0;for(let t of this._nodes){if(t.opType==="Dropout"){if(t.inputs.length!==1)throw new Error("Dropout nodes should only contain one input. ");if(t.outputs.length!==1&&t.outputs.length!==2)throw new Error("Dropout nodes should contain either 1 or 2 output(s)");if(t.outputs.length===2&&this._allData[t.outputs[1]]._to.length!==0)throw new Error("Dropout nodes's second output should not be referenced by other nodes");this.deleteNode(e)}e++}}removeAllIdentityNodes(){let e=0;for(let t of this._nodes)t.opType==="Identity"&&this.deleteNode(e),e++}isActivation(e){switch(e.opType){case"Relu":case"Sigmoid":case"Clip":return!0;default:return!1}}fuseConvActivationNodes(){for(let e of this._nodes)if(e.opType==="Conv"){let t=this._allData[e.outputs[0]]._to;if(t.length===1&&this.isActivation(this._nodes[t[0]])){let r=this._nodes[t[0]];if(r.opType==="Clip")if(r.inputs.length===1)try{e.attributes.set("activation_params","floats",[r.attributes.getFloat("min"),r.attributes.getFloat("max")])}catch{e.attributes.set("activation_params","floats",[Jt$1,Zt$1])}else if(r.inputs.length>=3&&this._allData[r.inputs[1]].tensor!==void 0&&this._allData[r.inputs[2]].tensor!==void 0)e.attributes.set("activation_params","floats",[this._allData[r.inputs[1]].tensor.floatData[0],this._allData[r.inputs[2]].tensor.floatData[0]]);else continue;e.attributes.set("activation","string",r.opType),this.deleteNode(t[0])}}}}}),wl,sd,Dr$1,Il=x$1(()=>{Je$1(),vl(),ge$1(),wl=ne(se$1()),z$1(),sd=P$1.experimental.fbs,Dr$1=class{constructor(){}load(e,t,r){let o;if(!r)try{this.loadFromOnnxFormat(e,t);return}catch(s){if(r!==void 0)throw s;o=s}try{this.loadFromOrtFormat(e,t)}catch(s){throw r!==void 0?s:new Error(`Failed to load model as ONNX format: ${o}
as ORT format: ${s}`)}}loadFromOnnxFormat(e,t){let r=wl.onnx.ModelProto.decode(e);if(ft$1.longToNumber(r.irVersion)<3)throw new Error("only support ONNX model with IR_VERSION>=3");this._opsets=r.opsetImport.map(o=>({domain:o.domain,version:ft$1.longToNumber(o.version)})),this._graph=Mn.from(r.graph,t)}loadFromOrtFormat(e,t){let r=new m.ByteBuffer(e),o=sd.InferenceSession.getRootAsInferenceSession(r).model();if(ft$1.longToNumber(o.irVersion())<3)throw new Error("only support ONNX model with IR_VERSION>=3");this._opsets=[];for(let s=0;s<o.opsetImportLength();s++){let i=o.opsetImport(s);this._opsets.push({domain:i?.domain(),version:ft$1.longToNumber(i.version())})}this._graph=Mn.from(o.graph(),t)}get graph(){return this._graph}get opsets(){return this._opsets}}}),Lr$1,_l=x$1(()=>{gl(),xl(),pt$1(),Il(),Lr$1=class{constructor(e={}){this._initialized=!1,this.backendHint=e.backendHint,this.profiler=Ke$1.create(e.profiler),this.context={profiler:this.profiler,graphInputTypes:[],graphInputDims:[]}}get inputNames(){return this._model.graph.getInputNames()}get outputNames(){return this._model.graph.getOutputNames()}startProfiling(){this.profiler.start()}endProfiling(){this.profiler.stop()}async loadModel(e,t,r){await this.profiler.event("session","Session.loadModel",async()=>{let o=await Gn(this.backendHint);if(this.sessionHandler=o.createSessionHandler(this.context),this._model=new Dr$1,typeof e=="string"){let s=e.endsWith(".ort");{let i=await(await fetch(e)).arrayBuffer();this.initialize(new Uint8Array(i),s)}}else if(ArrayBuffer.isView(e))this.initialize(e);else{let s=new Uint8Array(e,t||0,r||e.byteLength);this.initialize(s)}})}initialize(e,t){if(this._initialized)throw new Error("already initialized");this.profiler.event("session","Session.initialize",()=>{let r=this.sessionHandler.transformGraph?this.sessionHandler:void 0;this._model.load(e,r,t),this.sessionHandler.onGraphInitialized&&this.sessionHandler.onGraphInitialized(this._model.graph),this.initializeOps(this._model.graph),this._executionPlan=new Or$1(this._model.graph,this._ops,this.profiler)}),this._initialized=!0}async run(e){if(!this._initialized)throw new Error("session not initialized yet");return this.profiler.event("session","Session.run",async()=>{let t=this.normalizeAndValidateInputs(e),r=await this._executionPlan.execute(this.sessionHandler,t);return this.createOutput(r)})}normalizeAndValidateInputs(e){let t=this._model.graph.getInputNames();if(Array.isArray(e)){if(e.length!==t.length)throw new Error(`incorrect input array length: expected ${t.length} but got ${e.length}`)}else{if(e.size!==t.length)throw new Error(`incorrect input map size: expected ${t.length} but got ${e.size}`);let r=new Array(e.size),o=0;for(let s=0;s<t.length;++s){let i=e.get(t[s]);if(!i)throw new Error(`missing input tensor for: '${name}'`);r[o++]=i}e=r}if(!this.context.graphInputTypes||this.context.graphInputTypes.length===0||!this.context.graphInputDims||this.context.graphInputDims.length===0){let r=this._model.graph.getInputIndices(),o=this._model.graph.getValues(),s=new Array(r.length);for(let i=0;i<r.length;++i){let a=o[r[i]];s[i]=a.type.shape.dims,this.context.graphInputTypes.push(a.type.tensorType),this.context.graphInputDims.push(e[i].dims)}this.validateInputTensorDims(s,e,!0)}else this.validateInputTensorDims(this.context.graphInputDims,e,!1);return this.validateInputTensorTypes(this.context.graphInputTypes,e),e}validateInputTensorTypes(e,t){for(let r=0;r<t.length;r++){let o=e[r],s=t[r].type;if(o!==s)throw new Error(`input tensor[${r}] check failed: expected type '${o}' but got ${s}`)}}validateInputTensorDims(e,t,r){for(let o=0;o<t.length;o++){let s=e[o],i=t[o].dims;if(!this.compareTensorDims(s,i,r))throw new Error(`input tensor[${o}] check failed: expected shape '[${s.join(",")}]' but got [${i.join(",")}]`)}}compareTensorDims(e,t,r){if(e.length!==t.length)return!1;for(let o=0;o<e.length;++o)if(e[o]!==t[o]&&(!r||e[o]!==0))return!1;return!0}createOutput(e){let t=this._model.graph.getOutputNames();if(e.length!==t.length)throw new Error("expected number of outputs do not match number of generated outputs");let r=new Map;for(let o=0;o<t.length;++o)r.set(t[o],e[o]);return r}initializeOps(e){let t=e.getNodes();this._ops=new Array(t.length);for(let r=0;r<t.length;r++)this._ops[r]=this.sessionHandler.resolve(t[r],this._model.opsets,e)}}}),$r$1,Sl=x$1(()=>{Ft$1(),Yt$1(),$r$1=class{constructor(e){this.session=e,this.inputNames=this.session.inputNames,this.outputNames=this.session.outputNames}async dispose(){}async run(e,t,r){let o=new Map;for(let a in e)if(Object.hasOwnProperty.call(e,a)){let d=e[a];o.set(a,new Y$1(d.dims,d.type,void 0,void 0,d.data))}let s=await this.session.run(o),i={};return s.forEach((a,d)=>{i[d]=new ot(a.type,a.data,a.dims)}),i}startProfiling(){this.session.startProfiling()}endProfiling(){this.session.endProfiling()}}}),Al={};Wn(Al,{onnxjsBackend:()=>ud});var Un,ud,Ol=x$1(()=>{_l(),Sl(),Un=class{async init(){}async createInferenceSessionHandler(e,t){let r=new Lr$1(t);return typeof e=="string"?await r.loadModel(e):await r.loadModel(e),new $r$1(r)}},ud=new Un});Ft$1();Ft$1();Ft$1();var Io="1.20.1",Mv=Cr$1;{let e=(Ol(),kl(Al)).onnxjsBackend;Fe$1("webgl",e,-10)}Object.defineProperty(j$1.versions,"web",{value:Io,enumerable:!0});/*! Bundled license information:

long/index.js:
  (**
   * @license
   * Copyright 2009 The Closure Library Authors
   * Copyright 2020 Daniel Wirtz / The long.js Authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   *)
*/var ortWebgl=Object.freeze({__proto__:null,get InferenceSession(){return Fl},get TRACE(){return po},get TRACE_FUNC_BEGIN(){return Ve$1},get TRACE_FUNC_END(){return ze$1},get Tensor(){return ot},get TrainingSession(){return Cl},default:Mv,get env(){return j$1},get registerBackend(){return Fe$1}});/*!
 * ONNX Runtime Web v1.20.1
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Ge=Object.defineProperty,Sr=Object.getOwnPropertyDescriptor,Ar=Object.getOwnPropertyNames,Or=Object.prototype.hasOwnProperty,He=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),w=(e,t)=>()=>(e&&(t=e(e=0)),t),je=(e,t)=>{for(var r in t)Ge(e,r,{get:t[r],enumerable:!0})},vr=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Ar(t))!Or.call(e,s)&&s!==r&&Ge(e,s,{get:()=>t[s],enumerable:!(o=Sr(t,s))||o.enumerable});return e},ut=e=>vr(Ge({},"__esModule",{value:!0}),e),be,z,oe,xr,ge,Ee=w(()=>{be=new Map,z=[],oe=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let o=be.get(e);if(o===void 0)be.set(e,{backend:t,priority:r});else{if(o.priority>r)return;if(o.priority===r&&o.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let s=z.indexOf(e);s!==-1&&z.splice(s,1);for(let i=0;i<z.length;i++)if(be.get(z[i]).priority<=r){z.splice(i,0,e);return}z.push(e)}return}throw new TypeError("not a valid backend")},xr=async e=>{let t=be.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(o){return r||(t.error=`${o}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},ge=async e=>{let t=e.executionProviders||[],r=t.map(p=>typeof p=="string"?p:p.name),o=r.length===0?z:r,s,i=[],a=new Set;for(let p of o){let n=await xr(p);typeof n=="string"?i.push({name:p,err:n}):(s||(s=n),s===n&&a.add(p))}if(!s)throw new Error(`no available backend found. ERR: ${i.map(p=>`[${p.name}] ${p.err}`).join(", ")}`);for(let{name:p,err:n}of i)r.includes(p)&&console.warn(`removing requested execution provider "${p}" from session options because it is not available: ${n}`);let d=t.filter(p=>a.has(typeof p=="string"?p:p.name));return[s,new Proxy(e,{get:(p,n)=>n==="executionProviders"?d:Reflect.get(p,n)})]}}),ft=w(()=>{Ee()}),ct,lt=w(()=>{ct="1.20.1"}),dt,U,Ve=w(()=>{lt(),dt="warning",U={wasm:{},webgl:{},webgpu:{},versions:{common:ct},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);dt=e}},get logLevel(){return dt}},Object.defineProperty(U,"logLevel",{enumerable:!0})}),T,pt=w(()=>{Ve(),T=U}),mt,ht,yt=w(()=>{mt=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let o=r.getContext("2d");if(o!=null){let s,i;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],i=e.dims[3]):(s=e.dims[3],i=e.dims[2]);let a=t?.format!==void 0?t.format:"RGB",d=t?.norm,p,n;d===void 0||d.mean===void 0?p=[255,255,255,255]:typeof d.mean=="number"?p=[d.mean,d.mean,d.mean,d.mean]:(p=[d.mean[0],d.mean[1],d.mean[2],0],d.mean[3]!==void 0&&(p[3]=d.mean[3])),d===void 0||d.bias===void 0?n=[0,0,0,0]:typeof d.bias=="number"?n=[d.bias,d.bias,d.bias,d.bias]:(n=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(n[3]=d.bias[3]));let l=i*s,u=0,c=l,h=l*2,f=-1;a==="RGBA"?(u=0,c=l,h=l*2,f=l*3):a==="RGB"?(u=0,c=l,h=l*2):a==="RBG"&&(u=0,h=l,c=l*2);for(let g=0;g<i;g++)for(let b=0;b<s;b++){let E=(e.data[u++]-n[0])*p[0],y=(e.data[c++]-n[1])*p[1],F=(e.data[h++]-n[2])*p[2],L=f===-1?255:(e.data[f++]-n[3])*p[3];o.fillStyle="rgba("+E+","+y+","+F+","+L+")",o.fillRect(b,g,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},ht=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),o;if(r!=null){let s,i,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],i=e.dims[1],a=e.dims[3]):(s=e.dims[3],i=e.dims[2],a=e.dims[1]);let d=t!==void 0&&t.format!==void 0?t.format:"RGB",p=t?.norm,n,l;p===void 0||p.mean===void 0?n=[255,255,255,255]:typeof p.mean=="number"?n=[p.mean,p.mean,p.mean,p.mean]:(n=[p.mean[0],p.mean[1],p.mean[2],255],p.mean[3]!==void 0&&(n[3]=p.mean[3])),p===void 0||p.bias===void 0?l=[0,0,0,0]:typeof p.bias=="number"?l=[p.bias,p.bias,p.bias,p.bias]:(l=[p.bias[0],p.bias[1],p.bias[2],0],p.bias[3]!==void 0&&(l[3]=p.bias[3]));let u=i*s;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let c=4,h=0,f=1,g=2,b=3,E=0,y=u,F=u*2,L=-1;d==="RGBA"?(E=0,y=u,F=u*2,L=u*3):d==="RGB"?(E=0,y=u,F=u*2):d==="RBG"&&(E=0,F=u,y=u*2),o=r.createImageData(s,i);for(let K=0;K<i*s;h+=c,f+=c,g+=c,b+=c,K++)o.data[h]=(e.data[E++]-l[0])*n[0],o.data[f]=(e.data[y++]-l[1])*n[1],o.data[g]=(e.data[F++]-l[2])*n[2],o.data[b]=L===-1?255:(e.data[L++]-l[3])*n[3]}else throw new Error("Can not access image data");return o}}),Ye,wt,bt,gt,Et,Tt,St=w(()=>{Te(),Ye=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:o}=t,s=t.norm??{mean:255,bias:0},i,a;typeof s.mean=="number"?i=[s.mean,s.mean,s.mean,s.mean]:i=[s.mean[0],s.mean[1],s.mean[2],s.mean[3]??255],typeof s.bias=="number"?a=[s.bias,s.bias,s.bias,s.bias]:a=[s.bias[0],s.bias[1],s.bias[2],s.bias[3]??0];let d=t.format!==void 0?t.format:"RGBA",p=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",n=r*o,l=p==="RGBA"?new Float32Array(n*4):new Float32Array(n*3),u=4,c=0,h=1,f=2,g=3,b=0,E=n,y=n*2,F=-1;d==="RGB"&&(u=3,c=0,h=1,f=2,g=-1),p==="RGBA"?F=n*3:p==="RBG"?(b=0,y=n,E=n*2):p==="BGR"&&(y=0,E=n,b=n*2);for(let L=0;L<n;L++,c+=u,f+=u,h+=u,g+=u)l[b++]=(e[c]+a[0])/i[0],l[E++]=(e[h]+a[1])/i[1],l[y++]=(e[f]+a[2])/i[2],F!==-1&&g!==-1&&(l[F++]=(e[g]+a[3])/i[3]);return p==="RGBA"?new P("float32",l,[1,4,r,o]):new P("float32",l,[1,3,r,o])},wt=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,o=typeof ImageData<"u"&&e instanceof ImageData,s=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,i=typeof e=="string",a,d=t??{},p=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},n=l=>typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||l instanceof OffscreenCanvas?l.getContext("2d"):null;if(r){let l=p();l.width=e.width,l.height=e.height;let u=n(l);if(u!=null){let c=e.height,h=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(c=t.resizedHeight,h=t.resizedWidth),t!==void 0){if(d=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");d.tensorFormat="RGBA",d.height=c,d.width=h}else d.tensorFormat="RGBA",d.height=c,d.width=h;u.drawImage(e,0,0),a=u.getImageData(0,0,h,c).data}else throw new Error("Can not access image data")}else if(o){let l,u;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(l=t.resizedHeight,u=t.resizedWidth):(l=e.height,u=e.width),t!==void 0&&(d=t),d.format="RGBA",d.height=l,d.width=u,t!==void 0){let c=p();c.width=u,c.height=l;let h=n(c);if(h!=null)h.putImageData(e,0,0),a=h.getImageData(0,0,u,l).data;else throw new Error("Can not access image data")}else a=e.data}else if(s){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let l=p();l.width=e.width,l.height=e.height;let u=n(l);if(u!=null){let c=e.height,h=e.width;return u.drawImage(e,0,0,h,c),a=u.getImageData(0,0,h,c).data,d.height=c,d.width=h,Ye(a,d)}else throw new Error("Can not access image data")}else{if(i)return new Promise((l,u)=>{let c=p(),h=n(c);if(!e||!h)return u();let f=new Image;f.crossOrigin="Anonymous",f.src=e,f.onload=()=>{c.width=f.width,c.height=f.height,h.drawImage(f,0,0,c.width,c.height);let g=h.getImageData(0,0,c.width,c.height);d.height=c.height,d.width=c.width,l(Ye(g.data,d))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return Ye(a,d);throw new Error("Input data provided is not supported - aborted tensor creation")},bt=(e,t)=>{let{width:r,height:o,download:s,dispose:i}=t,a=[1,o,r,4];return new P({location:"texture",type:"float32",texture:e,dims:a,download:s,dispose:i})},gt=(e,t)=>{let{dataType:r,dims:o,download:s,dispose:i}=t;return new P({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:o,download:s,dispose:i})},Et=(e,t)=>{let{dataType:r,dims:o,download:s,dispose:i}=t;return new P({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:o,download:s,dispose:i})},Tt=(e,t,r)=>new P({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),G,se,At,Ot,vt=w(()=>{G=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),se=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),At=!1,Ot=()=>{if(!At){At=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=typeof Float16Array<"u"&&Float16Array.from;e&&(G.set("int64",BigInt64Array),se.set(BigInt64Array,"int64")),t&&(G.set("uint64",BigUint64Array),se.set(BigUint64Array,"uint64")),r?(G.set("float16",Float16Array),se.set(Float16Array,"float16")):G.set("float16",Uint16Array)}}}),xt,Pt,It=w(()=>{Te(),xt=e=>{let t=1;for(let r=0;r<e.length;r++){let o=e[r];if(typeof o!="number"||!Number.isSafeInteger(o))throw new TypeError(`dims[${r}] must be an integer, got: ${o}`);if(o<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${o}`);t*=o}return t},Pt=(e,t)=>{switch(e.location){case"cpu":return new P(e.type,e.data,t);case"cpu-pinned":return new P({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new P({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new P({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new P({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),P,Te=w(()=>{yt(),St(),vt(),It(),P=class{constructor(e,t,r){Ot();let o,s;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,o=e.type,s=e.dims,e.location){case"cpu-pinned":{let a=G.get(o);if(!a)throw new TypeError(`unsupported type "${o}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(o!=="float32")throw new TypeError(`unsupported type "${o}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint8"&&o!=="bool"&&o!=="uint4"&&o!=="int4")throw new TypeError(`unsupported type "${o}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint64"&&o!=="int8"&&o!=="uint8"&&o!=="bool")throw new TypeError(`unsupported type "${o}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,d;if(typeof e=="string")if(o=e,d=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let p=G.get(e);if(p===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&p===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${p.name} as data.`);e==="uint64"||e==="int64"?a=p.from(t,BigInt):a=p.from(t)}else if(t instanceof p)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${o} tensor's data must be type of ${p}`)}else if(d=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let p=typeof e[0];if(p==="string")o="string",a=e;else if(p==="boolean")o="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${p}.`)}else if(e instanceof Uint8ClampedArray)o="uint8",a=Uint8Array.from(e);else{let p=se.get(e.constructor);if(p===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);o=p,a=e}if(d===void 0)d=[a.length];else if(!Array.isArray(d))throw new TypeError("A tensor's dims must be a number array");s=d,this.cpuData=a,this.dataLocation="cpu"}let i=xt(s);if(this.cpuData&&i!==this.cpuData.length&&!((o==="uint4"||o==="int4")&&Math.ceil(i/2)===this.cpuData.length))throw new Error(`Tensor's size(${i}) does not match data length(${this.cpuData.length}).`);this.type=o,this.dims=s,this.size=i}static async fromImage(e,t){return wt(e,t)}static fromTexture(e,t){return bt(e,t)}static fromGpuBuffer(e,t){return gt(e,t)}static fromMLTensor(e,t){return Et(e,t)}static fromPinnedBuffer(e,t,r){return Tt(e,t,r)}toDataURL(e){return mt(this,e)}toImageData(e){return ht(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Pt(this,e)}}}),I,Se=w(()=>{Te(),I=P}),Lt,Bt,H,j,qe=w(()=>{Ve(),Lt=(e,t)=>{(typeof U.trace>"u"?!U.wasm.trace:!U.trace)||console.timeStamp(`${e}::ORT::${t}`)},Bt=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],o=!1;for(let s=0;s<r.length;s++){if(o&&!r[s].includes("TRACE_FUNC")){let i=`FUNC_${e}::${r[s].trim().split(" ")[1]}`;t&&(i+=`::${t}`),Lt("CPU",i);return}r[s].includes("TRACE_FUNC")&&(o=!0)}},H=e=>{(typeof U.trace>"u"?!U.wasm.trace:!U.trace)||Bt("BEGIN",e)},j=e=>{(typeof U.trace>"u"?!U.wasm.trace:!U.trace)||Bt("END",e)}}),Ae,Ct=w(()=>{Ee(),Se(),qe(),Ae=class Uh{constructor(t){this.handler=t}async run(t,r,o){H();let s={},i={};if(typeof t!="object"||t===null||t instanceof I||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof I)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let n of r){if(typeof n!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(n)===-1)throw new RangeError(`'fetches' contains invalid output name: ${n}.`);s[n]=null}if(typeof o=="object"&&o!==null)i=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else{let n=!1,l=Object.getOwnPropertyNames(r);for(let u of this.outputNames)if(l.indexOf(u)!==-1){let c=r[u];(c===null||c instanceof I)&&(n=!0,a=!1,s[u]=c)}if(n){if(typeof o=="object"&&o!==null)i=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else i=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let n of this.inputNames)if(typeof t[n]>"u")throw new Error(`input '${n}' is missing in 'feeds'.`);if(a)for(let n of this.outputNames)s[n]=null;let d=await this.handler.run(t,s,i),p={};for(let n in d)if(Object.hasOwnProperty.call(d,n)){let l=d[n];l instanceof I?p[n]=l:p[n]=new I(l.type,l.data,l.dims)}return j(),p}async release(){return this.handler.dispose()}static async create(t,r,o,s){H();let i,a={};if(typeof t=="string"){if(i=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(i=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let l=t,u=0,c=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(u=r,!Number.isSafeInteger(u))throw new RangeError("'byteOffset' must be an integer.");if(u<0||u>=l.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${l.byteLength}).`);if(c=t.byteLength-u,typeof o=="number"){if(c=o,!Number.isSafeInteger(c))throw new RangeError("'byteLength' must be an integer.");if(c<=0||u+c>l.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${l.byteLength-u}].`);if(typeof s=="object"&&s!==null)a=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else if(typeof o<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");i=new Uint8Array(l,u,c)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[d,p]=await ge(a),n=await d.createInferenceSessionHandler(i,p);return j(),new Uh(n)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),Pr,Mt=w(()=>{Ct(),Pr=Ae}),Ut=w(()=>{}),Dt=w(()=>{}),Rt=w(()=>{}),_t=w(()=>{}),Ir,Oe,kt=w(()=>{Ee(),Se(),Ir="Training backend could not be resolved. Make sure you're using the correct configuration & WebAssembly files.",Oe=class Lh{constructor(t,r,o){this.handler=t,this.hasOptimizerModel=r,this.hasEvalModel=o}get trainingInputNames(){return this.handler.inputNames}get trainingOutputNames(){return this.handler.outputNames}get evalInputNames(){if(this.hasEvalModel)return this.handler.evalInputNames;throw new Error("This training session has no evalModel loaded.")}get evalOutputNames(){if(this.hasEvalModel)return this.handler.evalOutputNames;throw new Error("This training session has no evalModel loaded.")}static async create(t,r){let o=t.evalModel||"",s=t.optimizerModel||"",i=r||{},[a,d]=await ge(i);if(a.createTrainingSessionHandler){let p=await a.createTrainingSessionHandler(t.checkpointState,t.trainModel,o,s,d);return new Lh(p,!!t.optimizerModel,!!t.evalModel)}else throw new Error(Ir)}typeNarrowingForRunStep(t,r,o,s,i){let a={},d={};if(typeof o!="object"||o===null||o instanceof I||Array.isArray(o))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let p=!0;if(typeof s=="object"){if(s===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(s instanceof I)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(s)){if(s.length===0)throw new TypeError("'fetches' cannot be an empty array.");p=!1;for(let n of s){if(typeof n!="string")throw new TypeError("'fetches' must be a string array or an object.");if(r.indexOf(n)===-1)throw new RangeError(`'fetches' contains invalid output name: ${n}.`);a[n]=null}if(typeof i=="object"&&i!==null)d=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let n=!1,l=Object.getOwnPropertyNames(s);for(let u of r)if(l.indexOf(u)!==-1){let c=s[u];(c===null||c instanceof I)&&(n=!0,p=!1,a[u]=c)}if(n){if(typeof i=="object"&&i!==null)d=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else d=s}}else if(typeof s<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let n of t)if(typeof o[n]>"u")throw new Error(`input '${n}' is missing in 'feeds'.`);if(p)for(let n of r)a[n]=null;return[a,d]}convertHandlerReturnTypeToMapOfTensors(t){let r={};for(let o in t)if(Object.hasOwnProperty.call(t,o)){let s=t[o];s instanceof I?r[o]=s:r[o]=new I(s.type,s.data,s.dims)}return r}async lazyResetGrad(){await this.handler.lazyResetGrad()}async runTrainStep(t,r,o){let[s,i]=this.typeNarrowingForRunStep(this.trainingInputNames,this.trainingOutputNames,t,r,o),a=await this.handler.runTrainStep(t,s,i);return this.convertHandlerReturnTypeToMapOfTensors(a)}async runOptimizerStep(t){if(this.hasOptimizerModel)await this.handler.runOptimizerStep(t||{});else throw new Error("This TrainingSession has no OptimizerModel loaded.")}async runEvalStep(t,r,o){if(this.hasEvalModel){let[s,i]=this.typeNarrowingForRunStep(this.evalInputNames,this.evalOutputNames,t,r,o),a=await this.handler.runEvalStep(t,s,i);return this.convertHandlerReturnTypeToMapOfTensors(a)}else throw new Error("This TrainingSession has no EvalModel loaded.")}async getParametersSize(t=!0){return this.handler.getParametersSize(t)}async loadParametersBuffer(t,r=!0){let o=await this.getParametersSize(r);if(t.length!==4*o)throw new Error("Size of the buffer passed into loadParametersBuffer must match the number of parameters in the model. Please use getParametersSize method to check.");return this.handler.loadParametersBuffer(t,r)}async getContiguousParameters(t=!0){return this.handler.getContiguousParameters(t)}async release(){return this.handler.dispose()}}}),Lr,Ft=w(()=>{kt(),Lr=Oe}),Je={};je(Je,{InferenceSession:()=>Pr,TRACE:()=>Lt,TRACE_FUNC_BEGIN:()=>H,TRACE_FUNC_END:()=>j,Tensor:()=>I,TrainingSession:()=>Lr,env:()=>T,registerBackend:()=>oe});var V=w(()=>{ft(),pt(),Mt(),Se(),Ut(),Dt(),qe(),Rt(),_t(),Ft()}),ve=w(()=>{}),zt={};je(zt,{default:()=>Br});var Wt,$t,Br,Gt=w(()=>{Xe(),Y(),ie(),Wt="ort-wasm-proxy-worker",$t=globalThis.self?.name===Wt,$t&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":xe(r.wasm).then(()=>{Pe(r).then(()=>{postMessage({type:t})},o=>{postMessage({type:t,err:o})})},o=>{postMessage({type:t,err:o})});break;case"init-ep":{let{epName:o,env:s}=r;Ie(s,o).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})});break}case"copy-from":{let{buffer:o}=r,s=ae(o);postMessage({type:t,out:s});break}case"create":{let{model:o,options:s}=r;Le(o,s).then(i=>{postMessage({type:t,out:i})},i=>{postMessage({type:t,err:i})});break}case"release":Be(r),postMessage({type:t});break;case"run":{let{sessionId:o,inputIndices:s,inputs:i,outputIndices:a,options:d}=r;Ce(o,s,i,a,new Array(a.length).fill(null),d).then(p=>{p.some(n=>n[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:p},Ue([...i,...p]))},p=>{postMessage({type:t,err:p})});break}case"end-profiling":Me(r),postMessage({type:t});break;default:}}catch(o){postMessage({type:t,err:o})}}),Br=$t?null:e=>new Worker(e??R,{type:"module",name:Wt})}),R,Cr,jt,Mr,Ur,Vt,Dr,Ht,Yt,qt,ie=w(()=>{ve(),R=import.meta.url??(typeof document<"u"?document.currentScript?.src:typeof self<"u"?self.location?.href:void 0),Cr=typeof location>"u"?void 0:location.origin,jt=(e,t)=>{try{let r=t??R;return(r?new URL(e,r):new URL(e)).origin===Cr}catch{return!1}},Mr=(e,t)=>{let r=t??R;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Ur=(e,t)=>`${t??"./"}${e}`,Vt=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Dr=async e=>(await import(e)).default,Ht=(Gt(),ut(zt)).default,Yt=async()=>{if(!R)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(jt(R))return[void 0,Ht()];let e=await Vt(R);return[e,Ht(e)]},qt=async(e,t,r)=>{{let o="ort-wasm-simd-threaded.mjs",s=e??Mr(o,t),i=r&&s&&!jt(s,t),a=i?await Vt(s):s??Ur(o,t);return[i?a:void 0,await Dr(a)]}}}),Ke,Qe,De,Jt,Rr,_r,xe,v,Y=w(()=>{ie(),Qe=!1,De=!1,Jt=!1,Rr=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},_r=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},xe=async e=>{if(Qe)return Promise.resolve();if(De)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Jt)throw new Error("previous call to 'initializeWebAssembly()' failed.");De=!0;let t=e.initTimeout,r=e.numThreads;if(!_r())throw new Error("WebAssembly SIMD is not supported in the current environment.");let o=Rr();r>1&&!o&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let s=e.wasmPaths,i=typeof s=="string"?s:void 0,a=s?.mjs,d=a?.href??a,p=s?.wasm,n=p?.href??p,l=e.wasmBinary,[u,c]=await qt(d,i,r>1),h=!1,f=[];if(t>0&&f.push(new Promise(g=>{setTimeout(()=>{h=!0,g()},t)})),f.push(new Promise((g,b)=>{let E={numThreads:r};l?E.wasmBinary=l:(n||i)&&(E.locateFile=(y,F)=>n??(i??F)+y),c(E).then(y=>{De=!1,Qe=!0,Ke=y,g(),u&&URL.revokeObjectURL(u)},y=>{De=!1,Jt=!0,b(y)})})),await Promise.race(f),h)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},v=()=>{if(Qe&&Ke)return Ke;throw new Error("WebAssembly is not initialized yet.")}}),x,ue,S,Re=w(()=>{Y(),x=(e,t)=>{let r=v(),o=r.lengthBytesUTF8(e)+1,s=r._malloc(o);return r.stringToUTF8(e,s,o),t.push(s),s},ue=(e,t,r,o)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([s,i])=>{let a=t?t+s:s;if(typeof i=="object")ue(i,a+".",r,o);else if(typeof i=="string"||typeof i=="number")o(a,i.toString());else if(typeof i=="boolean")o(a,i?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof i}`)})},S=e=>{let t=v(),r=t.stackSave();try{let o=t.stackAlloc(8);t._OrtGetLastError(o,o+4);let s=t.HEAP32[o/4],i=t.HEAPU32[o/4+1],a=i?t.UTF8ToString(i):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${a}`)}finally{t.stackRestore(r)}}}),Xt,Kt=w(()=>{Y(),Re(),Xt=e=>{let t=v(),r=0,o=[],s=e||{};try{if(e?.logSeverityLevel===void 0)s.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)s.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(s.terminate=!1);let i=0;return e?.tag!==void 0&&(i=x(e.tag,o)),r=t._OrtCreateRunOptions(s.logSeverityLevel,s.logVerbosityLevel,!!s.terminate,i),r===0&&S("Can't create run options."),e?.extra!==void 0&&ue(e.extra,"",new WeakSet,(a,d)=>{let p=x(a,o),n=x(d,o);t._OrtAddRunConfigEntry(r,p,n)!==0&&S(`Can't set a run config entry: ${a} - ${d}.`)}),[r,o]}catch(i){throw r!==0&&t._OrtReleaseRunOptions(r),o.forEach(a=>t._free(a)),i}}}),kr,Fr,Nr,Wr,Qt,Zt=w(()=>{Y(),Re(),kr=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Fr=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Nr=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Wr=(e,t,r)=>{for(let o of t){let s=typeof o=="string"?o:o.name;switch(s){case"webnn":if(s="WEBNN",typeof o!="string"){let a=o?.deviceType;if(a){let d=x("deviceType",r),p=x(a,r);v()._OrtAddSessionConfigEntry(e,d,p)!==0&&S(`Can't set a session config entry: 'deviceType' - ${a}.`)}}break;case"webgpu":if(s="JS",typeof o!="string"){let a=o;if(a?.preferredLayout){if(a.preferredLayout!=="NCHW"&&a.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${a.preferredLayout}`);let d=x("preferredLayout",r),p=x(a.preferredLayout,r);v()._OrtAddSessionConfigEntry(e,d,p)!==0&&S(`Can't set a session config entry: 'preferredLayout' - ${a.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let i=x(s,r);v()._OrtAppendExecutionProvider(e,i)!==0&&S(`Can't append execution provider: ${s}.`)}},Qt=e=>{let t=v(),r=0,o=[],s=e||{};Nr(s);try{let i=kr(s.graphOptimizationLevel??"all"),a=Fr(s.executionMode??"sequential"),d=typeof s.logId=="string"?x(s.logId,o):0,p=s.logSeverityLevel??2;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log serverity level is not valid: ${p}`);let n=s.logVerbosityLevel??0;if(!Number.isInteger(n)||n<0||n>4)throw new Error(`log verbosity level is not valid: ${n}`);let l=typeof s.optimizedModelFilePath=="string"?x(s.optimizedModelFilePath,o):0;if(r=t._OrtCreateSessionOptions(i,!!s.enableCpuMemArena,!!s.enableMemPattern,a,!!s.enableProfiling,0,d,p,n,l),r===0&&S("Can't create session options."),s.executionProviders&&Wr(r,s.executionProviders,o),s.enableGraphCapture!==void 0){if(typeof s.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${s.enableGraphCapture}`);let u=x("enableGraphCapture",o),c=x(s.enableGraphCapture.toString(),o);t._OrtAddSessionConfigEntry(r,u,c)!==0&&S(`Can't set a session config entry: 'enableGraphCapture' - ${s.enableGraphCapture}.`)}if(s.freeDimensionOverrides)for(let[u,c]of Object.entries(s.freeDimensionOverrides)){if(typeof u!="string")throw new Error(`free dimension override name must be a string: ${u}`);if(typeof c!="number"||!Number.isInteger(c)||c<0)throw new Error(`free dimension override value must be a non-negative integer: ${c}`);let h=x(u,o);t._OrtAddFreeDimensionOverride(r,h,c)!==0&&S(`Can't set a free dimension override: ${u} - ${c}.`)}return s.extra!==void 0&&ue(s.extra,"",new WeakSet,(u,c)=>{let h=x(u,o),f=x(c,o);t._OrtAddSessionConfigEntry(r,h,f)!==0&&S(`Can't set a session config entry: ${u} - ${c}.`)}),[r,o]}catch(i){throw r!==0&&t._OrtReleaseSessionOptions(r),o.forEach(a=>t._free(a)),i}}}),fe,er,ce,tr,rr,_e,ke,nr,Ze=w(()=>{fe=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},er=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},ce=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],o=typeof t=="number"?t:t.reduce((s,i)=>s*i,1);return r>0?Math.ceil(o*r):void 0},tr=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},rr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},_e=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ke=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool",nr=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),le,et=w(()=>{ve(),le=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),o=r?parseInt(r,10):0;if(o<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let s=t.body.getReader(),i;try{i=new ArrayBuffer(o)}catch(d){if(d instanceof RangeError){let p=Math.ceil(o/65536);i=new WebAssembly.Memory({initial:p,maximum:p}).buffer}else throw d}let a=0;for(;;){let{done:d,value:p}=await s.read();if(d)break;let n=p.byteLength;new Uint8Array(i,a,n).set(p),a+=n}return new Uint8Array(i,0,o)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),$r,Pe,Ie,Q,zr,ae,Le,Be,or,Ce,Me,Ue,Xe=w(()=>{Kt(),Zt(),Ze(),Y(),Re(),et(),$r=(e,t)=>{v()._OrtInit(e,t)!==0&&S("Can't initialize onnxruntime.")},Pe=async e=>{$r(e.wasm.numThreads,rr(e.logLevel))},Ie=async(e,t)=>{},Q=new Map,zr=e=>{let t=v(),r=t.stackSave();try{let o=t.stackAlloc(8);return t._OrtGetInputOutputCount(e,o,o+4)!==0&&S("Can't get session input/output count."),[t.HEAP32[o/4],t.HEAP32[o/4+1]]}finally{t.stackRestore(r)}},ae=e=>{let t=v(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Le=async(e,t)=>{let r,o,s=v();Array.isArray(e)?[r,o]=e:e.buffer===s.HEAPU8.buffer?[r,o]=[e.byteOffset,e.byteLength]:[r,o]=ae(e);let i=0,a=0,d=[],p=[],n=[];try{if([a,d]=Qt(t),t?.externalData&&s.mountExternalData){let E=[];for(let y of t.externalData){let F=typeof y=="string"?y:y.path;E.push(le(typeof y=="string"?y:y.data).then(L=>{s.mountExternalData(F,L)}))}await Promise.all(E)}for(let E of t?.executionProviders??[])if((typeof E=="string"?E:E.name)==="webnn"){if(s.shouldTransferToMLTensor=!1,s.currentContext)throw new Error("WebNN execution provider is already set.");if(typeof E!="string"){let y=E,F=y?.context,L=y?.gpuDevice,K=y?.deviceType,kd=y?.numThreads,Ii=y?.powerPreference;F?s.currentContext=F:L?s.currentContext=await navigator.ml.createContext(L):s.currentContext=await navigator.ml.createContext({deviceType:K,numThreads:kd,powerPreference:Ii})}else s.currentContext=await navigator.ml.createContext();break}i=await s._OrtCreateSession(r,o,a),i===0&&S("Can't create a session."),s.currentContext&&(s.jsepRegisterMLContext(i,s.currentContext),s.currentContext=void 0,s.shouldTransferToMLTensor=!0);let[l,u]=zr(i),c=!!t?.enableGraphCapture,h=[],f=[],g=[];for(let E=0;E<l;E++){let y=s._OrtGetInputName(i,E);y===0&&S("Can't get an input name."),p.push(y),h.push(s.UTF8ToString(y))}for(let E=0;E<u;E++){let y=s._OrtGetOutputName(i,E);y===0&&S("Can't get an output name."),n.push(y);let F=s.UTF8ToString(y);f.push(F)}return Q.set(i,[i,p,n,null,c,!1]),[i,h,f]}catch(l){throw p.forEach(u=>s._OrtFree(u)),n.forEach(u=>s._OrtFree(u)),i!==0&&s._OrtReleaseSession(i),l}finally{s._free(r),a!==0&&s._OrtReleaseSessionOptions(a),d.forEach(l=>s._free(l)),s.unmountExternalData?.()}},Be=e=>{let t=v(),r=Q.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[o,s,i,a,d]=r;a&&(d&&t._OrtClearBoundOutputs(a.handle),t._OrtReleaseBinding(a.handle)),t.jsepOnReleaseSession?.(e),s.forEach(p=>t._OrtFree(p)),i.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(o),Q.delete(e)},or=(e,t,r,o,s,i=!1)=>{if(!e){t.push(0);return}let a=v(),d=e[0],p=e[1],n=e[3],l,u;if(d==="string"&&(n==="gpu-buffer"||n==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(i&&n!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(n==="gpu-buffer"){let f=e[2].gpuBuffer;u=ce(fe(d),p);let g=a.jsepRegisterBuffer;if(!g)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');l=g(o,s,f,u)}else if(n==="ml-tensor"){let f=e[2].mlTensor;u=ce(fe(d),p);let g=a.jsepRegisterMLTensor;if(!g)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');l=g(f,fe(d),p)}else{let f=e[2];if(Array.isArray(f)){u=4*f.length,l=a._malloc(u),r.push(l);let g=l/4;for(let b=0;b<f.length;b++){if(typeof f[b]!="string")throw new TypeError(`tensor data at index ${b} is not a string`);a.HEAPU32[g++]=x(f[b],r)}}else u=f.byteLength,l=a._malloc(u),r.push(l),a.HEAPU8.set(new Uint8Array(f.buffer,f.byteOffset,u),l)}let c=a.stackSave(),h=a.stackAlloc(4*p.length);try{let f=h/4;p.forEach(b=>a.HEAP32[f++]=b);let g=a._OrtCreateTensor(fe(d),l,u,h,p.length,nr(n));g===0&&S(`Can't create tensor for input/output. session=${o}, index=${s}.`),t.push(g)}finally{a.stackRestore(c)}},Ce=async(e,t,r,o,s,i)=>{let a=v(),d=Q.get(e);if(!d)throw new Error(`cannot run inference. invalid session id: ${e}`);let p=d[0],n=d[1],l=d[2],u=d[3],c=d[4];d[5];let h=t.length,f=o.length,g=0,b=[],E=[],y=[],F=[],L=a.stackSave(),K=a.stackAlloc(h*4),kd=a.stackAlloc(h*4),Ii=a.stackAlloc(f*4),Qp=a.stackAlloc(f*4);try{a.jsepOnRunStart?.(p),[g,b]=Xt(i);for(let oh=0;oh<h;oh++)or(r[oh],E,F,e,t[oh],c);for(let oh=0;oh<f;oh++)or(s[oh],y,F,e,h+o[oh],c);let th=K/4,rh=kd/4,uh=Ii/4,ph=Qp/4;for(let oh=0;oh<h;oh++)a.HEAPU32[th++]=E[oh],a.HEAPU32[rh++]=n[t[oh]];for(let oh=0;oh<f;oh++)a.HEAPU32[uh++]=y[oh],a.HEAPU32[ph++]=l[o[oh]];let lh;lh=await a._OrtRun(p,kd,K,h,Qp,f,Ii,g),lh!==0&&S("failed to call OrtRun().");let dh=[];for(let oh=0;oh<f;oh++){let nh=a.HEAPU32[Ii/4+oh];if(nh===y[oh]){dh.push(s[oh]);continue}let hh=a.stackSave(),ch=a.stackAlloc(4*4),ih=!1,ah,Yp=0;try{a._OrtGetTensorData(nh,ch,ch+4,ch+8,ch+12)!==0&&S(`Can't access output tensor data on index ${oh}.`);let eh=ch/4,sh=a.HEAPU32[eh++];Yp=a.HEAPU32[eh++];let mh=a.HEAPU32[eh++],yh=a.HEAPU32[eh++],wh=[];for(let $h=0;$h<yh;$h++)wh.push(a.HEAPU32[mh/4+$h]);a._OrtFree(mh);let bh=wh.reduce(($h,fh)=>$h*fh,1);ah=er(sh);let vh=u?.outputPreferredLocations[o[oh]];if(ah==="string"){if(vh==="gpu-buffer"||vh==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let $h=[],fh=Yp/4;for(let gh=0;gh<bh;gh++){let xh=a.HEAPU32[fh++],Ah=gh===bh-1?void 0:a.HEAPU32[fh]-xh;$h.push(a.UTF8ToString(xh,Ah))}dh.push([ah,wh,$h,"cpu"])}else if(vh==="gpu-buffer"&&bh>0){let $h=a.jsepGetBuffer;if(!$h)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let fh=$h(Yp),gh=ce(sh,bh);if(gh===void 0||!_e(ah))throw new Error(`Unsupported data type: ${ah}`);ih=!0,dh.push([ah,wh,{gpuBuffer:fh,download:a.jsepCreateDownloader(fh,gh,ah),dispose:()=>{a._OrtReleaseTensor(nh)}},"gpu-buffer"])}else if(vh==="ml-tensor"&&bh>0){let $h=a.jsepEnsureTensor;if(!$h)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(ce(sh,bh)===void 0||!ke(ah))throw new Error(`Unsupported data type: ${ah}`);let fh=await $h(Yp,sh,wh,!1);ih=!0,dh.push([ah,wh,{mlTensor:fh,download:a.jsepCreateMLTensorDownloader(Yp,ah),dispose:()=>{a.jsepReleaseTensorId(Yp),a._OrtReleaseTensor(nh)}},"ml-tensor"])}else{let $h=tr(ah),fh=new $h(bh);new Uint8Array(fh.buffer,fh.byteOffset,fh.byteLength).set(a.HEAPU8.subarray(Yp,Yp+fh.byteLength)),dh.push([ah,wh,fh,"cpu"])}}finally{a.stackRestore(hh),ah==="string"&&Yp&&a._free(Yp),ih||a._OrtReleaseTensor(nh)}}return u&&!c&&(a._OrtClearBoundOutputs(u.handle),Q.set(e,[p,n,l,u,c,!1])),dh}finally{a.stackRestore(L),E.forEach(th=>a._OrtReleaseTensor(th)),y.forEach(th=>a._OrtReleaseTensor(th)),F.forEach(th=>a._free(th)),g!==0&&a._OrtReleaseRunOptions(g),b.forEach(th=>a._free(th))}},Me=e=>{let t=v(),r=Q.get(e);if(!r)throw new Error("invalid session id");let o=r[0],s=t._OrtEndProfiling(o);s===0&&S("Can't get an profile file name."),t._OrtFree(s)},Ue=e=>{let t=[];for(let r of e){let o=r[2];!Array.isArray(o)&&"buffer"in o&&t.push(o.buffer)}return t}}),J,_,de,Ne,We,Fe,tt,rt,Z,ee,Hr,sr,ir,ar,ur,fr,cr,lr,nt=w(()=>{V(),Xe(),Y(),ie(),J=()=>!!T.wasm.proxy&&typeof document<"u",de=!1,Ne=!1,We=!1,rt=new Map,Z=(e,t)=>{let r=rt.get(e);r?r.push(t):rt.set(e,[t])},ee=()=>{if(de||!Ne||We||!_)throw new Error("worker not ready")},Hr=e=>{switch(e.data.type){case"init-wasm":de=!1,e.data.err?(We=!0,tt[1](e.data.err)):(Ne=!0,tt[0]()),Fe&&(URL.revokeObjectURL(Fe),Fe=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=rt.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},sr=async()=>{if(!Ne){if(de)throw new Error("multiple calls to 'initWasm()' detected.");if(We)throw new Error("previous call to 'initWasm()' failed.");if(de=!0,J())return new Promise((e,t)=>{_?.terminate(),Yt().then(([r,o])=>{try{_=o,_.onerror=i=>t(i),_.onmessage=Hr,tt=[e,t];let s={type:"init-wasm",in:T};_.postMessage(s),Fe=r}catch(s){t(s)}},t)});try{await xe(T.wasm),await Pe(T),Ne=!0}catch(e){throw We=!0,e}finally{de=!1}}},ir=async e=>{if(J())return ee(),new Promise((t,r)=>{Z("init-ep",[t,r]);let o={type:"init-ep",in:{epName:e,env:T}};_.postMessage(o)});await Ie(T,e)},ar=async e=>J()?(ee(),new Promise((t,r)=>{Z("copy-from",[t,r]);let o={type:"copy-from",in:{buffer:e}};_.postMessage(o,[e.buffer])})):ae(e),ur=async(e,t)=>{if(J()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return ee(),new Promise((r,o)=>{Z("create",[r,o]);let s={type:"create",in:{model:e,options:{...t}}},i=[];e instanceof Uint8Array&&i.push(e.buffer),_.postMessage(s,i)})}else return Le(e,t)},fr=async e=>{if(J())return ee(),new Promise((t,r)=>{Z("release",[t,r]);let o={type:"release",in:e};_.postMessage(o)});Be(e)},cr=async(e,t,r,o,s,i)=>{if(J()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(s.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return ee(),new Promise((a,d)=>{Z("run",[a,d]);let p=r,n={type:"run",in:{sessionId:e,inputIndices:t,inputs:p,outputIndices:o,options:i}};_.postMessage(n,Ue(p))})}else return Ce(e,t,r,o,s,i)},lr=async e=>{if(J())return ee(),new Promise((t,r)=>{Z("end-profiling",[t,r]);let o={type:"end-profiling",in:e};_.postMessage(o)});Me(e)}}),dr,jr,$e,pr=w(()=>{V(),nt(),Ze(),ve(),et(),dr=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},jr=e=>{switch(e[3]){case"cpu":return new I(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!_e(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:o,dispose:s}=e[2];return I.fromGpuBuffer(r,{dataType:t,dims:e[1],download:o,dispose:s})}case"ml-tensor":{let t=e[0];if(!ke(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:o,dispose:s}=e[2];return I.fromMLTensor(r,{dataType:t,dims:e[1],download:o,dispose:s})}default:throw new Error(`invalid data location: ${e[3]}`)}},$e=class{async fetchModelAndCopyToWasmMemory(e){return ar(await le(e))}async loadModel(e,t){H();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await ur(r,t),j()}async dispose(){return fr(this.sessionId)}async run(e,t,r){H();let o=[],s=[];Object.entries(e).forEach(u=>{let c=u[0],h=u[1],f=this.inputNames.indexOf(c);if(f===-1)throw new Error(`invalid input '${c}'`);o.push(h),s.push(f)});let i=[],a=[];Object.entries(t).forEach(u=>{let c=u[0],h=u[1],f=this.outputNames.indexOf(c);if(f===-1)throw new Error(`invalid output '${c}'`);i.push(h),a.push(f)});let d=o.map((u,c)=>dr(u,()=>`input "${this.inputNames[s[c]]}"`)),p=i.map((u,c)=>u?dr(u,()=>`output "${this.outputNames[a[c]]}"`):null),n=await cr(this.sessionId,s,d,a,p,r),l={};for(let u=0;u<n.length;u++)l[this.outputNames[a[u]]]=i[u]??jr(n[u]);return j(),l}startProfiling(){}endProfiling(){lr(this.sessionId)}}}),hr={};je(hr,{OnnxruntimeWebAssemblyBackend:()=>ze,initializeFlags:()=>mr,wasmBackend:()=>Vr});var mr,ze,Vr,yr=w(()=>{V(),nt(),pr(),ie(),mr=()=>{if((typeof T.wasm.initTimeout!="number"||T.wasm.initTimeout<0)&&(T.wasm.initTimeout=0),T.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof T.wasm.proxy!="boolean"&&(T.wasm.proxy=!1),typeof T.wasm.trace!="boolean"&&(T.wasm.trace=!1),typeof T.wasm.numThreads!="number"||!Number.isInteger(T.wasm.numThreads)||T.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)T.wasm.numThreads=1;else{let e=typeof navigator>"u"?He("node:os").cpus().length:navigator.hardwareConcurrency;T.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}T.wasm.wasmPaths===void 0&&R&&R.indexOf("blob:")!==0&&(T.wasm.wasmPaths=R.substring(0,R.lastIndexOf("/")+1))},ze=class{async init(e){mr(),await sr(),await ir(e)}async createInferenceSessionHandler(e,t){let r=new $e;return await r.loadModel(e,t),Promise.resolve(r)}},Vr=new ze});V();V();V();var Nt="1.20.1",Do=Je;{let e=(yr(),ut(hr)).wasmBackend;oe("cpu",e,10),oe("wasm",e,10)}Object.defineProperty(T.versions,"web",{value:Nt,enumerable:!0});var ortWasm=Object.freeze({__proto__:null,get InferenceSession(){return Pr},get TRACE(){return Lt},get TRACE_FUNC_BEGIN(){return H},get TRACE_FUNC_END(){return j},get Tensor(){return I},get TrainingSession(){return Lr},default:Do,get env(){return T},get registerBackend(){return oe}});function rgbaToNchw(e,t,r=new Float32Array(3*t*t)){const o=t*t;for(let s=0,i=0;s<o;s++,i+=4)r[s]=e[i]/255,r[o+s]=e[i+1]/255,r[2*o+s]=e[i+2]/255;return r}const sigmoid=e=>1/(1+Math.exp(-e));function rowIsLogits(e,t,r,o=.05){for(let s=r*t,i=(r+1)*t;s<i;s++)if(e[s]<-o||e[s]>1+o)return!0;return!1}function iou(e,t){const r=Math.max(e.x1,t.x1),o=Math.max(e.y1,t.y1),s=Math.min(e.x2,t.x2),i=Math.min(e.y2,t.y2),a=Math.max(0,s-r)*Math.max(0,i-o),d=(e.x2-e.x1)*(e.y2-e.y1)+(t.x2-t.x1)*(t.y2-t.y1)-a;return d>0?a/d:0}function nms(e,t,r=1/0){const o=[...e].sort((i,a)=>a.score-i.score),s=[];for(const i of o){if(s.length>=r)break;s.every(a=>iou(a,i)<t)&&s.push(i)}return s}function decodeFootPose(e,t,r,{confThreshold:o,iouThreshold:s,maxDetections:i,numKeypoints:a}){const d=t[1],p=t[2],n=a??(d-5)/3,l=rowIsLogits(e,p,4),u=rowIsLogits(e,p,7),c=l?sigmoid:K=>K,h=u?sigmoid:K=>K;let f=0;const g=[];for(let K=0;K<p;K++){const kd=c(e[4*p+K]);if(kd>f&&(f=kd),kd<o)continue;const Ii=e[K],Qp=e[p+K],th=e[2*p+K],rh=e[3*p+K];g.push({i:K,score:kd,x1:Ii-th/2,y1:Qp-rh/2,x2:Ii+th/2,y2:Qp+rh/2})}const b=r.crop?.x??0,E=r.crop?.y??0,y=K=>Math.min(r.srcW,Math.max(0,b+(K-r.padX)/r.scale)),F=K=>Math.min(r.srcH,Math.max(0,E+(K-r.padY)/r.scale));return{detections:nms(g,s,i).map(K=>{const kd=[];for(let Ii=0;Ii<n;Ii++){const Qp=5+3*Ii;kd.push({x:y(e[Qp*p+K.i]),y:F(e[(Qp+1)*p+K.i]),v:h(e[(Qp+2)*p+K.i])})}return{score:K.score,box:{x1:y(K.x1),y1:F(K.y1),x2:y(K.x2),y2:F(K.y2)},kpts:kd}}),maxScore:f,sigmoid:l}}const RUNTIMES={webgpu:ortWebgpu,webgl:ortWebgl,wasm:ortWasm},sessions={},failed={};let active=null,cfg=null,models={},wasmPaths=null,expectedBytes={},gpuF16=null,lastInput=null;const progress=(e,t,r,o)=>self.postMessage({type:"progress",file:e,loaded:t,total:r,cached:o});async function cachedFetch(e,t,r,o){let s=null;try{s=await caches.open(cfg.cacheName)}catch{}if(s){const f=await s.match(r);if(f){const g=new Uint8Array(await f.arrayBuffer());return progress(e,g.byteLength,g.byteLength,!0),{buf:g,cached:!0}}}const i=await fetch(t);if(!i.ok)throw new Error(`${e}: HTTP ${i.status} ${t}`);const a=i.headers.get("content-encoding")?0:Number(i.headers.get("content-length"))||0,d=expectedBytes[e]||a,p=i.body.getReader(),n=[];let l=0,u=0;for(;;){const{done:f,value:g}=await p.read();if(f)break;n.push(g),l+=g.byteLength;const b=performance.now();b-u>80&&(progress(e,l,d,!1),u=b)}const c=new Uint8Array(l);let h=0;for(const f of n)c.set(f,h),h+=f.byteLength;if(progress(e,l,l,!1),s)try{await s.put(r,new Response(c,{headers:{"content-type":"application/octet-stream"}}));for(const f of await s.keys())f.url!==new URL(r).href&&o(f.url)&&await s.delete(f)}catch(f){console.warn("[cache] could not store",e,f)}return{buf:c,cached:!1}}const zerosFor=e=>new e.Tensor("float32",new Float32Array(3*cfg.size*cfg.size),[1,3,cfg.size,cfg.size]);let modelStats=null;async function getModel(e){const t=models[e];if(!t.buf){const r=performance.now(),{buf:o,cached:s}=await cachedFetch(t.file,t.url,t.url,t.stale);t.buf=o,modelStats??={variant:e,bytes:o.byteLength,cached:s,loadMs:performance.now()-r}}return t.buf}async function ensureRuntime(e,t,r){if(e.env.wasm.wasmBinary)return;const o=`${wasmPaths}${r}`,{buf:s}=await cachedFetch(t,o,`${o}?ort=${e.env.versions.web}`,i=>i.includes(r)&&!i.includes(`ort=${e.env.versions.web}`));e.env.wasm.wasmBinary=s}async function probeWebGpu(){if(!self.navigator?.gpu)throw new Error("not available in this browser");const e=await self.navigator.gpu.requestAdapter();if(!e)throw new Error("no GPU adapter");gpuF16=e.features.has("shader-f16")}async function createSession(e){const t=RUNTIMES[e],r=["fp32"];e==="webgpu"?(await probeWebGpu(),await ensureRuntime(t,"gpuRuntime","ort-wasm-simd-threaded.jsep.wasm"),gpuF16&&models.fp16&&r.unshift("fp16")):e==="wasm"&&await ensureRuntime(t,"runtime","ort-wasm-simd-threaded.wasm");let o;for(const s of r)try{return await createSessionWith(e,t,s)}catch(i){o=i}throw o}async function createSessionWith(e,t,r){const o=performance.now(),s=await t.InferenceSession.create(await getModel(r),{executionProviders:[e],graphOptimizationLevel:"all"}),a=(await s.run({[s.inputNames[0]]:zerosFor(t)}))[s.outputNames[0]];if(a.dims[1]!==cfg.outChannels||a.dims[2]!==cfg.anchors)throw new Error(`model output is [${a.dims}], expected [1,${cfg.outChannels},${cfg.anchors}] (wrong or stale foot_pose model?)`);if(!a.data.every(Number.isFinite))throw new Error("non-finite output");const d=performance.now()-o;let p=0;const n=Math.max(1,cfg.benchmarkRuns);for(let l=0;l<n;l++){const u=performance.now();await s.run({[s.inputNames[0]]:zerosFor(t)}),p+=performance.now()-u}return sessions[e]={rt:t,sess:s,ms:p/n,initMs:d,variant:r},sessions[e]}async function ensureSession(e){if(sessions[e])return sessions[e];if(failed[e])throw new Error(failed[e]);try{return await createSession(e)}catch(t){throw failed[e]=t?.message??String(t),t}}function report(){return{available:cfg.providers.filter(e=>sessions[e]).map(e=>({ep:e,ms:sessions[e].ms,initMs:sessions[e].initMs,variant:sessions[e].variant})),failed:{...failed},threads:T.wasm.numThreads,gpuF16}}async function init(e){cfg=e.cfg,expectedBytes=e.expectedBytes??{},wasmPaths=e.wasmPaths,models={fp32:{url:e.modelUrls.fp32,file:"model",stale:s=>/foot_pose_web-[^/]*\.onnx/.test(s)},...e.modelUrls.fp16?{fp16:{url:e.modelUrls.fp16,file:"model16",stale:s=>/foot_pose_web_fp16-[^/]*\.onnx/.test(s)}}:{}},j$1.webgl.pack=!1;const t=self.crossOriginIsolated?Math.min(4,e.cores||2):1;for(const s of[ortWasm,ortWebgpu])s.env.wasm.wasmPaths=e.wasmPaths,s.env.wasm.numThreads=t;const r=e.forced&&e.providers.includes(e.forced)?[e.forced,...e.providers.filter(s=>s!==e.forced)]:e.providers;for(const s of r)try{await ensureSession(s);break}catch{}if(!Object.keys(sessions).length)throw new Error(`No execution provider worked. ${Object.entries(failed).map(([s,i])=>`${s}: ${i}`).join(" | ")}`);const o=r.find(s=>sessions[s]);return{...report(),first:o,bytes:modelStats.bytes,modelVariant:modelStats.variant,modelCached:modelStats.cached,modelLoadMs:modelStats.loadMs,offscreen:initOffscreen()}}let prep=null;function initOffscreen(){try{const e=new OffscreenCanvas(cfg.size,cfg.size),t=e.getContext("2d",{willReadFrequently:!0});return t?(prep={canvas:e,ctx:t,input:new Float32Array(3*cfg.size*cfg.size)},!0):!1}catch{return!1}}function bitmapToInput(e,t){const{ctx:r,input:o}=prep,s=cfg.size;return r.fillStyle="rgb(114,114,114)",r.fillRect(0,0,s,s),r.drawImage(e,t.padX,t.padY,t.w,t.h),e.close(),rgbaToNchw(r.getImageData(0,0,s,s).data,s,o)}async function benchmark(e){const t={},r=lastInput??new Float32Array(3*cfg.size*cfg.size);for(const o of cfg.providers)try{const{rt:s,sess:i,variant:a,initMs:d}=await ensureSession(o),p=[];for(let n=0;n<e;n++){const l=performance.now();await i.run({[i.inputNames[0]]:new s.Tensor("float32",r.slice(),[1,3,cfg.size,cfg.size])}),p.push(performance.now()-l)}p.sort((n,l)=>n-l),t[o]={median:p[p.length>>1],min:p[0],variant:a,initMs:d}}catch(s){t[o]={error:failed[o]??s?.message??String(s)}}return{results:t,realFrame:!!lastInput,...report()}}async function use(e){return active=await ensureSession(e),{provider:e,...report()}}async function run(e){const{rt:t,sess:r}=active,o=performance.now();e.bitmap&&(e.input=bitmapToInput(e.bitmap,e.lb)),lastInput=e.bitmap?e.input:e.input.slice();const s=performance.now(),i=await r.run({[r.inputNames[0]]:new t.Tensor("float32",e.input,[1,3,cfg.size,cfg.size])}),a=performance.now()-s,d=i[r.outputNames[0]];return{...decodeFootPose(d.data,d.dims,e.lb,{...cfg,...e.overrides}),ms:a,prepMs:s-o,input:e.bitmap?null:e.input,captureT:e.captureT}}self.onmessage=async({data:e})=>{try{if(e.type==="init")self.postMessage({type:"ready",...await init(e)});else if(e.type==="use")self.postMessage({type:"using",...await use(e.provider)});else if(e.type==="run"){const t=await run(e);self.postMessage({type:"result",...t},t.input?[t.input.buffer]:[])}else e.type==="benchmark"?self.postMessage({type:"benchmark",...await benchmark(e.runs)}):e.type==="snapshot"&&self.postMessage({type:"snapshot",blob:prep?await prep.canvas.convertToBlob({type:"image/png"}):null})}catch(t){e.bitmap?.close?.();const r=e.type==="run"&&e.input?.buffer?.byteLength&&e.input!==prep?.input?e.input:null;self.postMessage({type:"error",message:t?.message??String(t),frame:e.type==="run",input:r},r?[r.buffer]:[])}};
