/*!
 * ONNX Runtime Web v1.20.1
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Pl$1=Object.create,ke$2=Object.defineProperty,El$1=Object.getOwnPropertyDescriptor,Dl$1=Object.getOwnPropertyNames,Ll$1=Object.getPrototypeOf,$l$1=Object.prototype.hasOwnProperty,x$1=(e,t)=>()=>(e&&(t=e(e=0)),t),Z$1=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Wn$1=(e,t)=>{for(var r in t)ke$2(e,r,{get:t[r],enumerable:!0})},Hn$1=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let u of Dl$1(t))!$l$1.call(e,u)&&u!==r&&ke$2(e,u,{get:()=>t[u],enumerable:!(o=El$1(t,u))||o.enumerable});return e},ne=(e,t,r)=>(r=e!=null?Pl$1(Ll$1(e)):{},Hn$1(!e||!e.__esModule?ke$2(r,"default",{value:e,enumerable:!0}):r,e)),kl$1=e=>Hn$1(ke$2({},"__esModule",{value:!0}),e),Be$2,Ut$2,Fe$2,Bl$1,Ne$2,Ce$1=x$1(()=>{Be$2=new Map,Ut$2=[],Fe$2=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let o=Be$2.get(e);if(o===void 0)Be$2.set(e,{backend:t,priority:r});else{if(o.priority>r)return;if(o.priority===r&&o.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let u=Ut$2.indexOf(e);u!==-1&&Ut$2.splice(u,1);for(let n=0;n<Ut$2.length;n++)if(Be$2.get(Ut$2[n]).priority<=r){Ut$2.splice(n,0,e);return}Ut$2.push(e)}return}throw new TypeError("not a valid backend")},Bl$1=async e=>{let t=Be$2.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(o){return r||(t.error=`${o}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Ne$2=async e=>{let t=e.executionProviders||[],r=t.map(p=>typeof p=="string"?p:p.name),o=r.length===0?Ut$2:r,u,n=[],a=new Set;for(let p of o){let i=await Bl$1(p);typeof i=="string"?n.push({name:p,err:i}):(u||(u=i),u===i&&a.add(p))}if(!u)throw new Error(`no available backend found. ERR: ${n.map(p=>`[${p.name}] ${p.err}`).join(", ")}`);for(let{name:p,err:i}of n)r.includes(p)&&console.warn(`removing requested execution provider "${p}" from session options because it is not available: ${i}`);let d=t.filter(p=>a.has(typeof p=="string"?p:p.name));return[u,new Proxy(e,{get:(p,i)=>i==="executionProviders"?d:Reflect.get(p,i)})]}}),qn$1=x$1(()=>{Ce$1()}),jn$1,Kn$1=x$1(()=>{jn$1="1.20.1"}),Xn$1,ct$2,Br$2=x$1(()=>{Kn$1(),Xn$1="warning",ct$2={wasm:{},webgl:{},webgpu:{},versions:{common:jn$1},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Xn$1=e}},get logLevel(){return Xn$1}},Object.defineProperty(ct$2,"logLevel",{enumerable:!0})}),j$1,Jn$1=x$1(()=>{Br$2(),j$1=ct$2}),Zn$1,Yn$1,Qn$1=x$1(()=>{Zn$1=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let o=r.getContext("2d");if(o!=null){let u,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(u=e.dims[2],n=e.dims[3]):(u=e.dims[3],n=e.dims[2]);let a=t?.format!==void 0?t.format:"RGB",d=t?.norm,p,i;d===void 0||d.mean===void 0?p=[255,255,255,255]:typeof d.mean=="number"?p=[d.mean,d.mean,d.mean,d.mean]:(p=[d.mean[0],d.mean[1],d.mean[2],0],d.mean[3]!==void 0&&(p[3]=d.mean[3])),d===void 0||d.bias===void 0?i=[0,0,0,0]:typeof d.bias=="number"?i=[d.bias,d.bias,d.bias,d.bias]:(i=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(i[3]=d.bias[3]));let l=n*u,s=0,c=l,h=l*2,g=-1;a==="RGBA"?(s=0,c=l,h=l*2,g=l*3):a==="RGB"?(s=0,c=l,h=l*2):a==="RBG"&&(s=0,h=l,c=l*2);for(let y=0;y<n;y++)for(let C=0;C<u;C++){let W=(e.data[s++]-i[0])*p[0],A=(e.data[c++]-i[1])*p[1],X=(e.data[h++]-i[2])*p[2],ni=g===-1?255:(e.data[g++]-i[3])*p[3];o.fillStyle="rgba("+W+","+A+","+X+","+ni+")",o.fillRect(C,y,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Yn$1=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),o;if(r!=null){let u,n,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(u=e.dims[2],n=e.dims[1],a=e.dims[3]):(u=e.dims[3],n=e.dims[2],a=e.dims[1]);let d=t!==void 0&&t.format!==void 0?t.format:"RGB",p=t?.norm,i,l;p===void 0||p.mean===void 0?i=[255,255,255,255]:typeof p.mean=="number"?i=[p.mean,p.mean,p.mean,p.mean]:(i=[p.mean[0],p.mean[1],p.mean[2],255],p.mean[3]!==void 0&&(i[3]=p.mean[3])),p===void 0||p.bias===void 0?l=[0,0,0,0]:typeof p.bias=="number"?l=[p.bias,p.bias,p.bias,p.bias]:(l=[p.bias[0],p.bias[1],p.bias[2],0],p.bias[3]!==void 0&&(l[3]=p.bias[3]));let s=n*u;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let c=4,h=0,g=1,y=2,C=3,W=0,A=s,X=s*2,ni=-1;d==="RGBA"?(W=0,A=s,X=s*2,ni=s*3):d==="RGB"?(W=0,A=s,X=s*2):d==="RBG"&&(W=0,X=s,A=s*2),o=r.createImageData(u,n);for(let ii=0;ii<n*u;h+=c,g+=c,y+=c,C+=c,ii++)o.data[h]=(e.data[W++]-l[0])*i[0],o.data[g]=(e.data[A++]-l[1])*i[1],o.data[y]=(e.data[X++]-l[2])*i[2],o.data[C]=ni===-1?255:(e.data[ni++]-l[3])*i[3]}else throw new Error("Can not access image data");return o}}),Fr$2,to$1,eo$1,ro$1,no$1,oo$1,io$1=x$1(()=>{Ge$2(),Fr$2=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:o}=t,u=t.norm??{mean:255,bias:0},n,a;typeof u.mean=="number"?n=[u.mean,u.mean,u.mean,u.mean]:n=[u.mean[0],u.mean[1],u.mean[2],u.mean[3]??255],typeof u.bias=="number"?a=[u.bias,u.bias,u.bias,u.bias]:a=[u.bias[0],u.bias[1],u.bias[2],u.bias[3]??0];let d=t.format!==void 0?t.format:"RGBA",p=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",i=r*o,l=p==="RGBA"?new Float32Array(i*4):new Float32Array(i*3),s=4,c=0,h=1,g=2,y=3,C=0,W=i,A=i*2,X=-1;d==="RGB"&&(s=3,c=0,h=1,g=2,y=-1),p==="RGBA"?X=i*3:p==="RBG"?(C=0,A=i,W=i*2):p==="BGR"&&(A=0,W=i,C=i*2);for(let ni=0;ni<i;ni++,c+=s,g+=s,h+=s,y+=s)l[C++]=(e[c]+a[0])/n[0],l[W++]=(e[h]+a[1])/n[1],l[A++]=(e[g]+a[2])/n[2],X!==-1&&y!==-1&&(l[X++]=(e[y]+a[3])/n[3]);return p==="RGBA"?new et$1("float32",l,[1,4,r,o]):new et$1("float32",l,[1,3,r,o])},to$1=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,o=typeof ImageData<"u"&&e instanceof ImageData,u=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",a,d=t??{},p=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},i=l=>typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||l instanceof OffscreenCanvas?l.getContext("2d"):null;if(r){let l=p();l.width=e.width,l.height=e.height;let s=i(l);if(s!=null){let c=e.height,h=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(c=t.resizedHeight,h=t.resizedWidth),t!==void 0){if(d=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");d.tensorFormat="RGBA",d.height=c,d.width=h}else d.tensorFormat="RGBA",d.height=c,d.width=h;s.drawImage(e,0,0),a=s.getImageData(0,0,h,c).data}else throw new Error("Can not access image data")}else if(o){let l,s;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(l=t.resizedHeight,s=t.resizedWidth):(l=e.height,s=e.width),t!==void 0&&(d=t),d.format="RGBA",d.height=l,d.width=s,t!==void 0){let c=p();c.width=s,c.height=l;let h=i(c);if(h!=null)h.putImageData(e,0,0),a=h.getImageData(0,0,s,l).data;else throw new Error("Can not access image data")}else a=e.data}else if(u){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let l=p();l.width=e.width,l.height=e.height;let s=i(l);if(s!=null){let c=e.height,h=e.width;return s.drawImage(e,0,0,h,c),a=s.getImageData(0,0,h,c).data,d.height=c,d.width=h,Fr$2(a,d)}else throw new Error("Can not access image data")}else{if(n)return new Promise((l,s)=>{let c=p(),h=i(c);if(!e||!h)return s();let g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{c.width=g.width,c.height=g.height,h.drawImage(g,0,0,c.width,c.height);let y=h.getImageData(0,0,c.width,c.height);d.height=c.height,d.width=c.width,l(Fr$2(y.data,d))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return Fr$2(a,d);throw new Error("Input data provided is not supported - aborted tensor creation")},eo$1=(e,t)=>{let{width:r,height:o,download:u,dispose:n}=t,a=[1,o,r,4];return new et$1({location:"texture",type:"float32",texture:e,dims:a,download:u,dispose:n})},ro$1=(e,t)=>{let{dataType:r,dims:o,download:u,dispose:n}=t;return new et$1({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:o,download:u,dispose:n})},no$1=(e,t)=>{let{dataType:r,dims:o,download:u,dispose:n}=t;return new et$1({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:o,download:u,dispose:n})},oo$1=(e,t,r)=>new et$1({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Wt$2,be$1,ao$1,so$1,uo$1=x$1(()=>{Wt$2=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),be$1=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),ao$1=!1,so$1=()=>{if(!ao$1){ao$1=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=typeof Float16Array<"u"&&Float16Array.from;e&&(Wt$2.set("int64",BigInt64Array),be$1.set(BigInt64Array,"int64")),t&&(Wt$2.set("uint64",BigUint64Array),be$1.set(BigUint64Array,"uint64")),r?(Wt$2.set("float16",Float16Array),be$1.set(Float16Array,"float16")):Wt$2.set("float16",Uint16Array)}}}),lo$1,fo$1,co$1=x$1(()=>{Ge$2(),lo$1=e=>{let t=1;for(let r=0;r<e.length;r++){let o=e[r];if(typeof o!="number"||!Number.isSafeInteger(o))throw new TypeError(`dims[${r}] must be an integer, got: ${o}`);if(o<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${o}`);t*=o}return t},fo$1=(e,t)=>{switch(e.location){case"cpu":return new et$1(e.type,e.data,t);case"cpu-pinned":return new et$1({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new et$1({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new et$1({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new et$1({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),et$1,Ge$2=x$1(()=>{Qn$1(),io$1(),uo$1(),co$1(),et$1=class{constructor(e,t,r){so$1();let o,u;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,o=e.type,u=e.dims,e.location){case"cpu-pinned":{let a=Wt$2.get(o);if(!a)throw new TypeError(`unsupported type "${o}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(o!=="float32")throw new TypeError(`unsupported type "${o}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint8"&&o!=="bool"&&o!=="uint4"&&o!=="int4")throw new TypeError(`unsupported type "${o}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint64"&&o!=="int8"&&o!=="uint8"&&o!=="bool")throw new TypeError(`unsupported type "${o}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,d;if(typeof e=="string")if(o=e,d=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let p=Wt$2.get(e);if(p===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&p===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${p.name} as data.`);e==="uint64"||e==="int64"?a=p.from(t,BigInt):a=p.from(t)}else if(t instanceof p)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${o} tensor's data must be type of ${p}`)}else if(d=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let p=typeof e[0];if(p==="string")o="string",a=e;else if(p==="boolean")o="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${p}.`)}else if(e instanceof Uint8ClampedArray)o="uint8",a=Uint8Array.from(e);else{let p=be$1.get(e.constructor);if(p===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);o=p,a=e}if(d===void 0)d=[a.length];else if(!Array.isArray(d))throw new TypeError("A tensor's dims must be a number array");u=d,this.cpuData=a,this.dataLocation="cpu"}let n=lo$1(u);if(this.cpuData&&n!==this.cpuData.length&&!((o==="uint4"||o==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=o,this.dims=u,this.size=n}static async fromImage(e,t){return to$1(e,t)}static fromTexture(e,t){return eo$1(e,t)}static fromGpuBuffer(e,t){return ro$1(e,t)}static fromMLTensor(e,t){return no$1(e,t)}static fromPinnedBuffer(e,t,r){return oo$1(e,t,r)}toDataURL(e){return Zn$1(this,e)}toImageData(e){return Yn$1(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return fo$1(this,e)}}}),ot$1,Re$1=x$1(()=>{Ge$2(),ot$1=et$1}),po$1,ho$1,Ve$2,ze$1,Nr$2=x$1(()=>{Br$2(),po$1=(e,t)=>{(typeof ct$2.trace>"u"?!ct$2.wasm.trace:!ct$2.trace)||console.timeStamp(`${e}::ORT::${t}`)},ho$1=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],o=!1;for(let u=0;u<r.length;u++){if(o&&!r[u].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[u].trim().split(" ")[1]}`;t&&(n+=`::${t}`),po$1("CPU",n);return}r[u].includes("TRACE_FUNC")&&(o=!0)}},Ve$2=e=>{(typeof ct$2.trace>"u"?!ct$2.wasm.trace:!ct$2.trace)||ho$1("BEGIN",e)},ze$1=e=>{(typeof ct$2.trace>"u"?!ct$2.wasm.trace:!ct$2.trace)||ho$1("END",e)}}),Me$1,mo$1=x$1(()=>{Ce$1(),Re$1(),Nr$2(),Me$1=class O1{constructor(t){this.handler=t}async run(t,r,o){Ve$2();let u={},n={};if(typeof t!="object"||t===null||t instanceof ot$1||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof ot$1)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let i of r){if(typeof i!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(i)===-1)throw new RangeError(`'fetches' contains invalid output name: ${i}.`);u[i]=null}if(typeof o=="object"&&o!==null)n=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else{let i=!1,l=Object.getOwnPropertyNames(r);for(let s of this.outputNames)if(l.indexOf(s)!==-1){let c=r[s];(c===null||c instanceof ot$1)&&(i=!0,a=!1,u[s]=c)}if(i){if(typeof o=="object"&&o!==null)n=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let i of this.inputNames)if(typeof t[i]>"u")throw new Error(`input '${i}' is missing in 'feeds'.`);if(a)for(let i of this.outputNames)u[i]=null;let d=await this.handler.run(t,u,n),p={};for(let i in d)if(Object.hasOwnProperty.call(d,i)){let l=d[i];l instanceof ot$1?p[i]=l:p[i]=new ot$1(l.type,l.data,l.dims)}return ze$1(),p}async release(){return this.handler.dispose()}static async create(t,r,o,u){Ve$2();let n,a={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let l=t,s=0,c=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(s=r,!Number.isSafeInteger(s))throw new RangeError("'byteOffset' must be an integer.");if(s<0||s>=l.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${l.byteLength}).`);if(c=t.byteLength-s,typeof o=="number"){if(c=o,!Number.isSafeInteger(c))throw new RangeError("'byteLength' must be an integer.");if(c<=0||s+c>l.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${l.byteLength-s}].`);if(typeof u=="object"&&u!==null)a=u;else if(typeof u<"u")throw new TypeError("'options' must be an object.")}else if(typeof o<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(l,s,c)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[d,p]=await Ne$2(a),i=await d.createInferenceSessionHandler(n,p);return ze$1(),new O1(i)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),Fl$1,bo$1=x$1(()=>{mo$1(),Fl$1=Me$1}),yo$1=x$1(()=>{}),go$1=x$1(()=>{}),xo$1=x$1(()=>{}),To$1=x$1(()=>{}),Nl$1,Ue$1,vo$1=x$1(()=>{Ce$1(),Re$1(),Nl$1="Training backend could not be resolved. Make sure you're using the correct configuration & WebAssembly files.",Ue$1=class A1{constructor(t,r,o){this.handler=t,this.hasOptimizerModel=r,this.hasEvalModel=o}get trainingInputNames(){return this.handler.inputNames}get trainingOutputNames(){return this.handler.outputNames}get evalInputNames(){if(this.hasEvalModel)return this.handler.evalInputNames;throw new Error("This training session has no evalModel loaded.")}get evalOutputNames(){if(this.hasEvalModel)return this.handler.evalOutputNames;throw new Error("This training session has no evalModel loaded.")}static async create(t,r){let o=t.evalModel||"",u=t.optimizerModel||"",n=r||{},[a,d]=await Ne$2(n);if(a.createTrainingSessionHandler){let p=await a.createTrainingSessionHandler(t.checkpointState,t.trainModel,o,u,d);return new A1(p,!!t.optimizerModel,!!t.evalModel)}else throw new Error(Nl$1)}typeNarrowingForRunStep(t,r,o,u,n){let a={},d={};if(typeof o!="object"||o===null||o instanceof ot$1||Array.isArray(o))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let p=!0;if(typeof u=="object"){if(u===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(u instanceof ot$1)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(u)){if(u.length===0)throw new TypeError("'fetches' cannot be an empty array.");p=!1;for(let i of u){if(typeof i!="string")throw new TypeError("'fetches' must be a string array or an object.");if(r.indexOf(i)===-1)throw new RangeError(`'fetches' contains invalid output name: ${i}.`);a[i]=null}if(typeof n=="object"&&n!==null)d=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let i=!1,l=Object.getOwnPropertyNames(u);for(let s of r)if(l.indexOf(s)!==-1){let c=u[s];(c===null||c instanceof ot$1)&&(i=!0,p=!1,a[s]=c)}if(i){if(typeof n=="object"&&n!==null)d=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else d=u}}else if(typeof u<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let i of t)if(typeof o[i]>"u")throw new Error(`input '${i}' is missing in 'feeds'.`);if(p)for(let i of r)a[i]=null;return[a,d]}convertHandlerReturnTypeToMapOfTensors(t){let r={};for(let o in t)if(Object.hasOwnProperty.call(t,o)){let u=t[o];u instanceof ot$1?r[o]=u:r[o]=new ot$1(u.type,u.data,u.dims)}return r}async lazyResetGrad(){await this.handler.lazyResetGrad()}async runTrainStep(t,r,o){let[u,n]=this.typeNarrowingForRunStep(this.trainingInputNames,this.trainingOutputNames,t,r,o),a=await this.handler.runTrainStep(t,u,n);return this.convertHandlerReturnTypeToMapOfTensors(a)}async runOptimizerStep(t){if(this.hasOptimizerModel)await this.handler.runOptimizerStep(t||{});else throw new Error("This TrainingSession has no OptimizerModel loaded.")}async runEvalStep(t,r,o){if(this.hasEvalModel){let[u,n]=this.typeNarrowingForRunStep(this.evalInputNames,this.evalOutputNames,t,r,o),a=await this.handler.runEvalStep(t,u,n);return this.convertHandlerReturnTypeToMapOfTensors(a)}else throw new Error("This TrainingSession has no EvalModel loaded.")}async getParametersSize(t=!0){return this.handler.getParametersSize(t)}async loadParametersBuffer(t,r=!0){let o=await this.getParametersSize(r);if(t.length!==4*o)throw new Error("Size of the buffer passed into loadParametersBuffer must match the number of parameters in the model. Please use getParametersSize method to check.");return this.handler.loadParametersBuffer(t,r)}async getContiguousParameters(t=!0){return this.handler.getContiguousParameters(t)}async release(){return this.handler.dispose()}}}),Cl$1,wo$1=x$1(()=>{vo$1(),Cl$1=Ue$1}),Cr$2={};Wn$1(Cr$2,{InferenceSession:()=>Fl$1,TRACE:()=>po$1,TRACE_FUNC_BEGIN:()=>Ve$2,TRACE_FUNC_END:()=>ze$1,Tensor:()=>ot$1,TrainingSession:()=>Cl$1,env:()=>j$1,registerBackend:()=>Fe$2});var Ft$2=x$1(()=>{qn$1(),Jn$1(),bo$1(),Re$1(),yo$1(),go$1(),Nr$2(),xo$1(),To$1(),wo$1()});function Nt$2(e,t,r,o){if(t===void 0)return Rl$1(e);if(r===void 0)We$2(e,t);else if(typeof r=="number"&&o===void 0)We$2(e,t);else if(typeof r=="string"&&o===void 0)We$2(e,r,1,t);else if(typeof r=="string"&&typeof o=="number")We$2(e,r,o,t);else throw new TypeError("input is valid")}function Rl$1(e){return{verbose:Nt$2.verbose.bind(null,e),info:Nt$2.info.bind(null,e),warning:Nt$2.warning.bind(null,e),error:Nt$2.error.bind(null,e),fatal:Nt$2.fatal.bind(null,e)}}function We$2(e,t,r,o){let u=ye[o||""]||ye[""];_o$1[e]<_o$1[u.minimalSeverity]||(u.logDateTime&&(t=`${new Date().toISOString()}|${t}`),u.logSourceLocation,Gl$1[u.provider].log(e,t,o))}var Gr$1,Rr$2,_o$1,Gl$1,So$1,ye,M$1,qe$1,je$1,Ke$2,He$2,pt$1=x$1(()=>{Gr$1=class{log(e,t,r){}},Rr$2=class{log(e,t,r){console.log(`${this.color(e)} ${r?"\x1B[35m"+r+"\x1B[0m ":""}${t}`)}color(e){switch(e){case"verbose":return"\x1B[34;40mv\x1B[0m";case"info":return"\x1B[32mi\x1B[0m";case"warning":return"\x1B[30;43mw\x1B[0m";case"error":return"\x1B[31;40me\x1B[0m";case"fatal":return"\x1B[101mf\x1B[0m";default:throw new Error(`unsupported severity: ${e}`)}}},_o$1={verbose:1e3,info:2e3,warning:4e3,error:5e3,fatal:6e3},Gl$1={none:new Gr$1,console:new Rr$2},So$1={provider:"console",minimalSeverity:"warning",logDateTime:!0,logSourceLocation:!1},ye={"":So$1},(e=>{function t(i,l){e("verbose",i,l)}e.verbose=t;function r(i,l){e("info",i,l)}e.info=r;function o(i,l){e("warning",i,l)}e.warning=o;function u(i,l){e("error",i,l)}e.error=u;function n(i,l){e("fatal",i,l)}e.fatal=n;function a(i){ye={},d("",i||{})}e.reset=a;function d(i,l){if(i==="*")a(l);else{let s=ye[i]||So$1;ye[i]={provider:l.provider||s.provider,minimalSeverity:l.minimalSeverity||s.minimalSeverity,logDateTime:l.logDateTime===void 0?s.logDateTime:l.logDateTime,logSourceLocation:l.logSourceLocation===void 0?s.logSourceLocation:l.logSourceLocation}}}e.set=d;function p(i){let l={};i.logLevel&&(l.minimalSeverity=i.logLevel),d("",l)}e.setWithEnv=p})(Nt$2||={}),M$1=Nt$2,qe$1=class{constructor(e,t,r,o,u,n){this.category=e,this.name=t,this.startTime=r,this.endCallback=o,this.timer=u,this.ctx=n}async end(){return this.endCallback(this)}async checkTimer(){if(this.ctx===void 0||this.timer===void 0)throw new Error("No webgl timer found");return this.ctx.endTimer(),this.ctx.waitForQueryAndGetTime(this.timer)}},je$1=class{constructor(e,t,r,o){this.category=e,this.name=t,this.startTime=r,this.endTime=o}},Ke$2=class{constructor(e,t,r){this._started=!1,this._flushPointer=0,this._started=!1,this._maxNumberEvents=e===void 0?1e4:e,this._flushBatchSize=t===void 0?10:t,this._flushIntervalInMilliseconds=r===void 0?5e3:r}static create(e){return e===void 0?new this:new this(e.maxNumberEvents,e.flushBatchSize,e.flushIntervalInMilliseconds)}start(){this._started=!0,this._timingEvents=[],this._flushTime=He$2(),this._flushPointer=0}stop(){for(this._started=!1;this._flushPointer<this._timingEvents.length;this._flushPointer++)this.logOneEvent(this._timingEvents[this._flushPointer])}event(e,t,r,o){let u=this._started?this.begin(e,t,o):void 0,n=!1,a=r();if(a&&typeof a.then=="function")return n=!0,new Promise((d,p)=>{a.then(async i=>{u&&await u.end(),d(i)},async i=>{u&&await u.end(),p(i)})});if(!n&&u){let d=u.end();if(d&&typeof d.then=="function")return new Promise((p,i)=>{d.then(()=>{p(a)},l=>{i(l)})})}return a}begin(e,t,r){if(!this._started)throw new Error("profiler is not started yet");if(r===void 0){let o=He$2();return this.flush(o),new qe$1(e,t,o,u=>this.endSync(u))}else{let o=r.beginTimer();return new qe$1(e,t,0,async u=>this.end(u),o,r)}}async end(e){let t=await e.checkTimer();this._timingEvents.length<this._maxNumberEvents&&(this._timingEvents.push(new je$1(e.category,e.name,e.startTime,t)),this.flush(t))}endSync(e){let t=He$2();this._timingEvents.length<this._maxNumberEvents&&(this._timingEvents.push(new je$1(e.category,e.name,e.startTime,t)),this.flush(t))}logOneEvent(e){M$1.verbose(`Profiler.${e.category}`,`${(e.endTime-e.startTime).toFixed(2)}ms on event '${e.name}' at ${e.endTime.toFixed(2)}`)}flush(e){if(this._timingEvents.length-this._flushPointer>=this._flushBatchSize||e-this._flushTime>=this._flushIntervalInMilliseconds){for(let t=this._flushPointer;this._flushPointer<t+this._flushBatchSize&&this._flushPointer<this._timingEvents.length;this._flushPointer++)this.logOneEvent(this._timingEvents[this._flushPointer]);this._flushTime=He$2()}}get started(){return this._started}},He$2=typeof performance<"u"&&performance.now?()=>performance.now():Date.now});function Ao$1(e,t,r){for(let o of r){let u=o[0],n=o[1],a=o[2],d=o[3],p=o[4];if(e.opType===u){for(let i of t)if((i.domain===n||i.domain==="ai.onnx"&&n==="")&&Vl$1(i.version,a))return{opImpl:d,opInit:p}}}throw new TypeError(`cannot resolve operator '${e.opType}' with opsets: ${t.map(o=>`${o.domain||"ai.onnx"} v${o.version}`).join(", ")}`)}function Vl$1(e,t){if(t.endsWith("+")){let r=Number.parseInt(t.substring(0,t.length-1),10);return!isNaN(r)&&r<=e}else if(t.split("-").length===2){let r=t.split("-"),o=Number.parseInt(r[0],10),u=Number.parseInt(r[1],10);return!isNaN(o)&&!isNaN(u)&&o<=e&&e<=u}else return Number.parseInt(t,10)===e}var Oo=x$1(()=>{}),Po$1=Z$1(e=>{e.__esModule=!0;var t=function(){function r(o){if(!o)throw new TypeError("Invalid argument; `value` has no value.");this.value=r.EMPTY,o&&r.isGuid(o)&&(this.value=o)}return r.isGuid=function(o){var u=o.toString();return o&&(o instanceof r||r.validator.test(u))},r.create=function(){return new r([r.gen(2),r.gen(1),r.gen(1),r.gen(1),r.gen(3)].join("-"))},r.createEmpty=function(){return new r("emptyguid")},r.parse=function(o){return new r(o)},r.raw=function(){return[r.gen(2),r.gen(1),r.gen(1),r.gen(1),r.gen(3)].join("-")},r.gen=function(o){for(var u="",n=0;n<o;n++)u+=((1+Math.random())*65536|0).toString(16).substring(1);return u},r.prototype.equals=function(o){return r.isGuid(o)&&this.value===o.toString()},r.prototype.isEmpty=function(){return this.value===r.EMPTY},r.prototype.toString=function(){return this.value},r.prototype.toJSON=function(){return{value:this.value}},r.validator=new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$","i"),r.EMPTY="00000000-0000-0000-0000-000000000000",r}();e.Guid=t});function U$1(e,t,r){this.low=e|0,this.high=t|0,this.unsigned=!!r}function nt$2(e){return(e&&e.__isLong__)===!0}function Eo$1(e){var t=Math.clz32(e&-e);return e?31-t:t}function Ht$2(e,t){var r,o,u;return t?(e>>>=0,(u=0<=e&&e<256)&&(o=Lo[e],o)?o:(r=V$2(e,0,!0),u&&(Lo[e]=r),r)):(e|=0,(u=-128<=e&&e<128)&&(o=Do$1[e],o)?o:(r=V$2(e,e<0?-1:0,!1),u&&(Do$1[e]=r),r))}function ht$1(e,t){if(isNaN(e))return t?$t$1:Tt$2;if(t){if(e<0)return $t$1;if(e>=Fo)return Go}else{if(e<=-ko$1)return ut$1;if(e+1>=ko$1)return Co$1}return e<0?ht$1(-e,t).neg():V$2(e%ie$2|0,e/ie$2|0,t)}function V$2(e,t,r){return new U$1(e,t,r)}function Mr$2(e,t,r){if(e.length===0)throw Error("empty string");if(typeof t=="number"?(r=t,t=!1):t=!!t,e==="NaN"||e==="Infinity"||e==="+Infinity"||e==="-Infinity")return t?$t$1:Tt$2;if(r=r||10,r<2||36<r)throw RangeError("radix");var o;if((o=e.indexOf("-"))>0)throw Error("interior hyphen");if(o===0)return Mr$2(e.substring(1),t,r).neg();for(var u=ht$1(Xe$2(r,8)),n=Tt$2,a=0;a<e.length;a+=8){var d=Math.min(8,e.length-a),p=parseInt(e.substring(a,a+d),r);if(d<8){var i=ht$1(Xe$2(r,d));n=n.mul(i).add(ht$1(p))}else n=n.mul(u),n=n.add(ht$1(p))}return n.unsigned=t,n}function vt$1(e,t){return typeof e=="number"?ht$1(e,t):typeof e=="string"?Mr$2(e,t):V$2(e.low,e.high,typeof t=="boolean"?t:e.unsigned)}var dt$1,Do$1,Lo,Xe$2,$o$1,Ml$1,ie$2,Fo,ko$1,Bo,Tt$2,$t$1,oe$1,No,zr$2,Co$1,Go,ut$1,T$1,kt$2,Ur$2=x$1(()=>{dt$1=null;try{dt$1=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}U$1.prototype.__isLong__,Object.defineProperty(U$1.prototype,"__isLong__",{value:!0}),U$1.isLong=nt$2,Do$1={},Lo={},U$1.fromInt=Ht$2,U$1.fromNumber=ht$1,U$1.fromBits=V$2,Xe$2=Math.pow,U$1.fromString=Mr$2,U$1.fromValue=vt$1,$o$1=65536,Ml$1=1<<24,ie$2=$o$1*$o$1,Fo=ie$2*ie$2,ko$1=Fo/2,Bo=Ht$2(Ml$1),Tt$2=Ht$2(0),U$1.ZERO=Tt$2,$t$1=Ht$2(0,!0),U$1.UZERO=$t$1,oe$1=Ht$2(1),U$1.ONE=oe$1,No=Ht$2(1,!0),U$1.UONE=No,zr$2=Ht$2(-1),U$1.NEG_ONE=zr$2,Co$1=V$2(-1,2147483647,!1),U$1.MAX_VALUE=Co$1,Go=V$2(-1,-1,!0),U$1.MAX_UNSIGNED_VALUE=Go,ut$1=V$2(0,-2147483648,!1),U$1.MIN_VALUE=ut$1,T$1=U$1.prototype,T$1.toInt=function(){return this.unsigned?this.low>>>0:this.low},T$1.toNumber=function(){return this.unsigned?(this.high>>>0)*ie$2+(this.low>>>0):this.high*ie$2+(this.low>>>0)},T$1.toString=function(e){if(e=e||10,e<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(ut$1)){var t=ht$1(e),r=this.div(t),o=r.mul(t).sub(this);return r.toString(e)+o.toInt().toString(e)}else return"-"+this.neg().toString(e);for(var u=ht$1(Xe$2(e,6),this.unsigned),n=this,a="";;){var d=n.div(u),p=n.sub(d.mul(u)).toInt()>>>0,i=p.toString(e);if(n=d,n.isZero())return i+a;for(;i.length<6;)i="0"+i;a=""+i+a}},T$1.getHighBits=function(){return this.high},T$1.getHighBitsUnsigned=function(){return this.high>>>0},T$1.getLowBits=function(){return this.low},T$1.getLowBitsUnsigned=function(){return this.low>>>0},T$1.getNumBitsAbs=function(){if(this.isNegative())return this.eq(ut$1)?64:this.neg().getNumBitsAbs();for(var e=this.high!=0?this.high:this.low,t=31;t>0&&!(e&1<<t);t--);return this.high!=0?t+33:t+1},T$1.isZero=function(){return this.high===0&&this.low===0},T$1.eqz=T$1.isZero,T$1.isNegative=function(){return!this.unsigned&&this.high<0},T$1.isPositive=function(){return this.unsigned||this.high>=0},T$1.isOdd=function(){return(this.low&1)===1},T$1.isEven=function(){return(this.low&1)===0},T$1.equals=function(e){return nt$2(e)||(e=vt$1(e)),this.unsigned!==e.unsigned&&this.high>>>31===1&&e.high>>>31===1?!1:this.high===e.high&&this.low===e.low},T$1.eq=T$1.equals,T$1.notEquals=function(e){return!this.eq(e)},T$1.neq=T$1.notEquals,T$1.ne=T$1.notEquals,T$1.lessThan=function(e){return this.comp(e)<0},T$1.lt=T$1.lessThan,T$1.lessThanOrEqual=function(e){return this.comp(e)<=0},T$1.lte=T$1.lessThanOrEqual,T$1.le=T$1.lessThanOrEqual,T$1.greaterThan=function(e){return this.comp(e)>0},T$1.gt=T$1.greaterThan,T$1.greaterThanOrEqual=function(e){return this.comp(e)>=0},T$1.gte=T$1.greaterThanOrEqual,T$1.ge=T$1.greaterThanOrEqual,T$1.compare=function(e){if(nt$2(e)||(e=vt$1(e)),this.eq(e))return 0;var t=this.isNegative(),r=e.isNegative();return t&&!r?-1:!t&&r?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},T$1.comp=T$1.compare,T$1.negate=function(){return!this.unsigned&&this.eq(ut$1)?ut$1:this.not().add(oe$1)},T$1.neg=T$1.negate,T$1.add=function(e){nt$2(e)||(e=vt$1(e));var t=this.high>>>16,r=this.high&65535,o=this.low>>>16,u=this.low&65535,n=e.high>>>16,a=e.high&65535,d=e.low>>>16,p=e.low&65535,i=0,l=0,s=0,c=0;return c+=u+p,s+=c>>>16,c&=65535,s+=o+d,l+=s>>>16,s&=65535,l+=r+a,i+=l>>>16,l&=65535,i+=t+n,i&=65535,V$2(s<<16|c,i<<16|l,this.unsigned)},T$1.subtract=function(e){return nt$2(e)||(e=vt$1(e)),this.add(e.neg())},T$1.sub=T$1.subtract,T$1.multiply=function(e){if(this.isZero())return this;if(nt$2(e)||(e=vt$1(e)),dt$1){var t=dt$1.mul(this.low,this.high,e.low,e.high);return V$2(t,dt$1.get_high(),this.unsigned)}if(e.isZero())return this.unsigned?$t$1:Tt$2;if(this.eq(ut$1))return e.isOdd()?ut$1:Tt$2;if(e.eq(ut$1))return this.isOdd()?ut$1:Tt$2;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(Bo)&&e.lt(Bo))return ht$1(this.toNumber()*e.toNumber(),this.unsigned);var r=this.high>>>16,o=this.high&65535,u=this.low>>>16,n=this.low&65535,a=e.high>>>16,d=e.high&65535,p=e.low>>>16,i=e.low&65535,l=0,s=0,c=0,h=0;return h+=n*i,c+=h>>>16,h&=65535,c+=u*i,s+=c>>>16,c&=65535,c+=n*p,s+=c>>>16,c&=65535,s+=o*i,l+=s>>>16,s&=65535,s+=u*p,l+=s>>>16,s&=65535,s+=n*d,l+=s>>>16,s&=65535,l+=r*i+o*p+u*d+n*a,l&=65535,V$2(c<<16|h,l<<16|s,this.unsigned)},T$1.mul=T$1.multiply,T$1.divide=function(e){if(nt$2(e)||(e=vt$1(e)),e.isZero())throw Error("division by zero");if(dt$1){if(!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1)return this;var t=(this.unsigned?dt$1.div_u:dt$1.div_s)(this.low,this.high,e.low,e.high);return V$2(t,dt$1.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?$t$1:Tt$2;var r,o,u;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return $t$1;if(e.gt(this.shru(1)))return No;u=$t$1}else{if(this.eq(ut$1)){if(e.eq(oe$1)||e.eq(zr$2))return ut$1;if(e.eq(ut$1))return oe$1;var n=this.shr(1);return r=n.div(e).shl(1),r.eq(Tt$2)?e.isNegative()?oe$1:zr$2:(o=this.sub(e.mul(r)),u=r.add(o.div(e)),u)}else if(e.eq(ut$1))return this.unsigned?$t$1:Tt$2;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();u=Tt$2}for(o=this;o.gte(e);){r=Math.max(1,Math.floor(o.toNumber()/e.toNumber()));for(var a=Math.ceil(Math.log(r)/Math.LN2),d=a<=48?1:Xe$2(2,a-48),p=ht$1(r),i=p.mul(e);i.isNegative()||i.gt(o);)r-=d,p=ht$1(r,this.unsigned),i=p.mul(e);p.isZero()&&(p=oe$1),u=u.add(p),o=o.sub(i)}return u},T$1.div=T$1.divide,T$1.modulo=function(e){if(nt$2(e)||(e=vt$1(e)),dt$1){var t=(this.unsigned?dt$1.rem_u:dt$1.rem_s)(this.low,this.high,e.low,e.high);return V$2(t,dt$1.get_high(),this.unsigned)}return this.sub(this.div(e).mul(e))},T$1.mod=T$1.modulo,T$1.rem=T$1.modulo,T$1.not=function(){return V$2(~this.low,~this.high,this.unsigned)},T$1.countLeadingZeros=function(){return this.high?Math.clz32(this.high):Math.clz32(this.low)+32},T$1.clz=T$1.countLeadingZeros,T$1.countTrailingZeros=function(){return this.low?Eo$1(this.low):Eo$1(this.high)+32},T$1.ctz=T$1.countTrailingZeros,T$1.and=function(e){return nt$2(e)||(e=vt$1(e)),V$2(this.low&e.low,this.high&e.high,this.unsigned)},T$1.or=function(e){return nt$2(e)||(e=vt$1(e)),V$2(this.low|e.low,this.high|e.high,this.unsigned)},T$1.xor=function(e){return nt$2(e)||(e=vt$1(e)),V$2(this.low^e.low,this.high^e.high,this.unsigned)},T$1.shiftLeft=function(e){return nt$2(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?V$2(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):V$2(0,this.low<<e-32,this.unsigned)},T$1.shl=T$1.shiftLeft,T$1.shiftRight=function(e){return nt$2(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?V$2(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):V$2(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},T$1.shr=T$1.shiftRight,T$1.shiftRightUnsigned=function(e){return nt$2(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?V$2(this.low>>>e|this.high<<32-e,this.high>>>e,this.unsigned):e===32?V$2(this.high,0,this.unsigned):V$2(this.high>>>e-32,0,this.unsigned)},T$1.shru=T$1.shiftRightUnsigned,T$1.shr_u=T$1.shiftRightUnsigned,T$1.rotateLeft=function(e){var t;return nt$2(e)&&(e=e.toInt()),(e&=63)===0?this:e===32?V$2(this.high,this.low,this.unsigned):e<32?(t=32-e,V$2(this.low<<e|this.high>>>t,this.high<<e|this.low>>>t,this.unsigned)):(e-=32,t=32-e,V$2(this.high<<e|this.low>>>t,this.low<<e|this.high>>>t,this.unsigned))},T$1.rotl=T$1.rotateLeft,T$1.rotateRight=function(e){var t;return nt$2(e)&&(e=e.toInt()),(e&=63)===0?this:e===32?V$2(this.high,this.low,this.unsigned):e<32?(t=32-e,V$2(this.high<<t|this.low>>>e,this.low<<t|this.high>>>e,this.unsigned)):(e-=32,t=32-e,V$2(this.low<<t|this.high>>>e,this.high<<t|this.low>>>e,this.unsigned))},T$1.rotr=T$1.rotateRight,T$1.toSigned=function(){return this.unsigned?V$2(this.low,this.high,!1):this},T$1.toUnsigned=function(){return this.unsigned?this:V$2(this.low,this.high,!0)},T$1.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},T$1.toBytesLE=function(){var e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]},T$1.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,t>>>24,t>>>16&255,t>>>8&255,t&255]},U$1.fromBytes=function(e,t,r){return r?U$1.fromBytesLE(e,t):U$1.fromBytesBE(e,t)},U$1.fromBytesLE=function(e,t){return new U$1(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)},U$1.fromBytesBE=function(e,t){return new U$1(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)},kt$2=U$1}),m,Je$1=x$1(()=>{m={},m.Offset,m.Table,m.SIZEOF_SHORT=2,m.SIZEOF_INT=4,m.FILE_IDENTIFIER_LENGTH=4,m.SIZE_PREFIX_LENGTH=4,m.Encoding={UTF8_BYTES:1,UTF16_STRING:2},m.int32=new Int32Array(2),m.float32=new Float32Array(m.int32.buffer),m.float64=new Float64Array(m.int32.buffer),m.isLittleEndian=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1,m.Long=function(e,t){this.low=e|0,this.high=t|0},m.Long.create=function(e,t){return e==0&&t==0?m.Long.ZERO:new m.Long(e,t)},m.Long.prototype.toFloat64=function(){return(this.low>>>0)+this.high*4294967296},m.Long.prototype.equals=function(e){return this.low==e.low&&this.high==e.high},m.Long.ZERO=new m.Long(0,0),m.Builder=function(e){if(e)var t=e;else var t=1024;this.bb=m.ByteBuffer.allocate(t),this.space=t,this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1},m.Builder.prototype.clear=function(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1},m.Builder.prototype.forceDefaults=function(e){this.force_defaults=e},m.Builder.prototype.dataBuffer=function(){return this.bb},m.Builder.prototype.asUint8Array=function(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())},m.Builder.prototype.prep=function(e,t){e>this.minalign&&(this.minalign=e);for(var r=~(this.bb.capacity()-this.space+t)+1&e-1;this.space<r+e+t;){var o=this.bb.capacity();this.bb=m.Builder.growByteBuffer(this.bb),this.space+=this.bb.capacity()-o}this.pad(r)},m.Builder.prototype.pad=function(e){for(var t=0;t<e;t++)this.bb.writeInt8(--this.space,0)},m.Builder.prototype.writeInt8=function(e){this.bb.writeInt8(this.space-=1,e)},m.Builder.prototype.writeInt16=function(e){this.bb.writeInt16(this.space-=2,e)},m.Builder.prototype.writeInt32=function(e){this.bb.writeInt32(this.space-=4,e)},m.Builder.prototype.writeInt64=function(e){this.bb.writeInt64(this.space-=8,e)},m.Builder.prototype.writeFloat32=function(e){this.bb.writeFloat32(this.space-=4,e)},m.Builder.prototype.writeFloat64=function(e){this.bb.writeFloat64(this.space-=8,e)},m.Builder.prototype.addInt8=function(e){this.prep(1,0),this.writeInt8(e)},m.Builder.prototype.addInt16=function(e){this.prep(2,0),this.writeInt16(e)},m.Builder.prototype.addInt32=function(e){this.prep(4,0),this.writeInt32(e)},m.Builder.prototype.addInt64=function(e){this.prep(8,0),this.writeInt64(e)},m.Builder.prototype.addFloat32=function(e){this.prep(4,0),this.writeFloat32(e)},m.Builder.prototype.addFloat64=function(e){this.prep(8,0),this.writeFloat64(e)},m.Builder.prototype.addFieldInt8=function(e,t,r){(this.force_defaults||t!=r)&&(this.addInt8(t),this.slot(e))},m.Builder.prototype.addFieldInt16=function(e,t,r){(this.force_defaults||t!=r)&&(this.addInt16(t),this.slot(e))},m.Builder.prototype.addFieldInt32=function(e,t,r){(this.force_defaults||t!=r)&&(this.addInt32(t),this.slot(e))},m.Builder.prototype.addFieldInt64=function(e,t,r){(this.force_defaults||!t.equals(r))&&(this.addInt64(t),this.slot(e))},m.Builder.prototype.addFieldFloat32=function(e,t,r){(this.force_defaults||t!=r)&&(this.addFloat32(t),this.slot(e))},m.Builder.prototype.addFieldFloat64=function(e,t,r){(this.force_defaults||t!=r)&&(this.addFloat64(t),this.slot(e))},m.Builder.prototype.addFieldOffset=function(e,t,r){(this.force_defaults||t!=r)&&(this.addOffset(t),this.slot(e))},m.Builder.prototype.addFieldStruct=function(e,t,r){t!=r&&(this.nested(t),this.slot(e))},m.Builder.prototype.nested=function(e){if(e!=this.offset())throw new Error("FlatBuffers: struct must be serialized inline.")},m.Builder.prototype.notNested=function(){if(this.isNested)throw new Error("FlatBuffers: object serialization must not be nested.")},m.Builder.prototype.slot=function(e){this.vtable[e]=this.offset()},m.Builder.prototype.offset=function(){return this.bb.capacity()-this.space},m.Builder.growByteBuffer=function(e){var t=e.capacity();if(t&3221225472)throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");var r=t<<1,o=m.ByteBuffer.allocate(r);return o.setPosition(r-t),o.bytes().set(e.bytes(),r-t),o},m.Builder.prototype.addOffset=function(e){this.prep(m.SIZEOF_INT,0),this.writeInt32(this.offset()-e+m.SIZEOF_INT)},m.Builder.prototype.startObject=function(e){this.notNested(),this.vtable==null&&(this.vtable=[]),this.vtable_in_use=e;for(var t=0;t<e;t++)this.vtable[t]=0;this.isNested=!0,this.object_start=this.offset()},m.Builder.prototype.endObject=function(){if(this.vtable==null||!this.isNested)throw new Error("FlatBuffers: endObject called without startObject");this.addInt32(0);for(var e=this.offset(),t=this.vtable_in_use-1;t>=0&&this.vtable[t]==0;t--);for(var r=t+1;t>=0;t--)this.addInt16(this.vtable[t]!=0?e-this.vtable[t]:0);var o=2;this.addInt16(e-this.object_start);var u=(r+o)*m.SIZEOF_SHORT;this.addInt16(u);var n=0,a=this.space;e:for(t=0;t<this.vtables.length;t++){var d=this.bb.capacity()-this.vtables[t];if(u==this.bb.readInt16(d)){for(var p=m.SIZEOF_SHORT;p<u;p+=m.SIZEOF_SHORT)if(this.bb.readInt16(a+p)!=this.bb.readInt16(d+p))continue e;n=this.vtables[t];break}}return n?(this.space=this.bb.capacity()-e,this.bb.writeInt32(this.space,n-e)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-e,this.offset()-e)),this.isNested=!1,e},m.Builder.prototype.finish=function(e,t,r){var o=r?m.SIZE_PREFIX_LENGTH:0;if(t){var u=t;if(this.prep(this.minalign,m.SIZEOF_INT+m.FILE_IDENTIFIER_LENGTH+o),u.length!=m.FILE_IDENTIFIER_LENGTH)throw new Error("FlatBuffers: file identifier must be length "+m.FILE_IDENTIFIER_LENGTH);for(var n=m.FILE_IDENTIFIER_LENGTH-1;n>=0;n--)this.writeInt8(u.charCodeAt(n))}this.prep(this.minalign,m.SIZEOF_INT+o),this.addOffset(e),o&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)},m.Builder.prototype.finishSizePrefixed=function(e,t){this.finish(e,t,!0)},m.Builder.prototype.requiredField=function(e,t){var r=this.bb.capacity()-e,o=r-this.bb.readInt32(r),u=this.bb.readInt16(o+t)!=0;if(!u)throw new Error("FlatBuffers: field "+t+" must be set")},m.Builder.prototype.startVector=function(e,t,r){this.notNested(),this.vector_num_elems=t,this.prep(m.SIZEOF_INT,e*t),this.prep(r,e*t)},m.Builder.prototype.endVector=function(){return this.writeInt32(this.vector_num_elems),this.offset()},m.Builder.prototype.createString=function(e){if(e instanceof Uint8Array)var t=e;else for(var t=[],r=0;r<e.length;){var o,u=e.charCodeAt(r++);if(u<55296||u>=56320)o=u;else{var n=e.charCodeAt(r++);o=(u<<10)+n+-56613888}o<128?t.push(o):(o<2048?t.push(o>>6&31|192):(o<65536?t.push(o>>12&15|224):t.push(o>>18&7|240,o>>12&63|128),t.push(o>>6&63|128)),t.push(o&63|128))}this.addInt8(0),this.startVector(1,t.length,1),this.bb.setPosition(this.space-=t.length);for(var r=0,a=this.space,d=this.bb.bytes();r<t.length;r++)d[a++]=t[r];return this.endVector()},m.Builder.prototype.createLong=function(e,t){return m.Long.create(e,t)},m.ByteBuffer=function(e){this.bytes_=e,this.position_=0},m.ByteBuffer.allocate=function(e){return new m.ByteBuffer(new Uint8Array(e))},m.ByteBuffer.prototype.clear=function(){this.position_=0},m.ByteBuffer.prototype.bytes=function(){return this.bytes_},m.ByteBuffer.prototype.position=function(){return this.position_},m.ByteBuffer.prototype.setPosition=function(e){this.position_=e},m.ByteBuffer.prototype.capacity=function(){return this.bytes_.length},m.ByteBuffer.prototype.readInt8=function(e){return this.readUint8(e)<<24>>24},m.ByteBuffer.prototype.readUint8=function(e){return this.bytes_[e]},m.ByteBuffer.prototype.readInt16=function(e){return this.readUint16(e)<<16>>16},m.ByteBuffer.prototype.readUint16=function(e){return this.bytes_[e]|this.bytes_[e+1]<<8},m.ByteBuffer.prototype.readInt32=function(e){return this.bytes_[e]|this.bytes_[e+1]<<8|this.bytes_[e+2]<<16|this.bytes_[e+3]<<24},m.ByteBuffer.prototype.readUint32=function(e){return this.readInt32(e)>>>0},m.ByteBuffer.prototype.readInt64=function(e){return new m.Long(this.readInt32(e),this.readInt32(e+4))},m.ByteBuffer.prototype.readUint64=function(e){return new m.Long(this.readUint32(e),this.readUint32(e+4))},m.ByteBuffer.prototype.readFloat32=function(e){return m.int32[0]=this.readInt32(e),m.float32[0]},m.ByteBuffer.prototype.readFloat64=function(e){return m.int32[m.isLittleEndian?0:1]=this.readInt32(e),m.int32[m.isLittleEndian?1:0]=this.readInt32(e+4),m.float64[0]},m.ByteBuffer.prototype.writeInt8=function(e,t){this.bytes_[e]=t},m.ByteBuffer.prototype.writeUint8=function(e,t){this.bytes_[e]=t},m.ByteBuffer.prototype.writeInt16=function(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8},m.ByteBuffer.prototype.writeUint16=function(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8},m.ByteBuffer.prototype.writeInt32=function(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8,this.bytes_[e+2]=t>>16,this.bytes_[e+3]=t>>24},m.ByteBuffer.prototype.writeUint32=function(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8,this.bytes_[e+2]=t>>16,this.bytes_[e+3]=t>>24},m.ByteBuffer.prototype.writeInt64=function(e,t){this.writeInt32(e,t.low),this.writeInt32(e+4,t.high)},m.ByteBuffer.prototype.writeUint64=function(e,t){this.writeUint32(e,t.low),this.writeUint32(e+4,t.high)},m.ByteBuffer.prototype.writeFloat32=function(e,t){m.float32[0]=t,this.writeInt32(e,m.int32[0])},m.ByteBuffer.prototype.writeFloat64=function(e,t){m.float64[0]=t,this.writeInt32(e,m.int32[m.isLittleEndian?0:1]),this.writeInt32(e+4,m.int32[m.isLittleEndian?1:0])},m.ByteBuffer.prototype.getBufferIdentifier=function(){if(this.bytes_.length<this.position_+m.SIZEOF_INT+m.FILE_IDENTIFIER_LENGTH)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");for(var e="",t=0;t<m.FILE_IDENTIFIER_LENGTH;t++)e+=String.fromCharCode(this.readInt8(this.position_+m.SIZEOF_INT+t));return e},m.ByteBuffer.prototype.__offset=function(e,t){var r=e-this.readInt32(e);return t<this.readInt16(r)?this.readInt16(r+t):0},m.ByteBuffer.prototype.__union=function(e,t){return e.bb_pos=t+this.readInt32(t),e.bb=this,e},m.ByteBuffer.prototype.__string=function(e,t){e+=this.readInt32(e);var r=this.readInt32(e),o="",u=0;if(e+=m.SIZEOF_INT,t===m.Encoding.UTF8_BYTES)return this.bytes_.subarray(e,e+r);for(;u<r;){var n,a=this.readUint8(e+u++);if(a<192)n=a;else{var d=this.readUint8(e+u++);if(a<224)n=(a&31)<<6|d&63;else{var p=this.readUint8(e+u++);if(a<240)n=(a&15)<<12|(d&63)<<6|p&63;else{var i=this.readUint8(e+u++);n=(a&7)<<18|(d&63)<<12|(p&63)<<6|i&63}}}n<65536?o+=String.fromCharCode(n):(n-=65536,o+=String.fromCharCode((n>>10)+55296,(n&1023)+56320))}return o},m.ByteBuffer.prototype.__indirect=function(e){return e+this.readInt32(e)},m.ByteBuffer.prototype.__vector=function(e){return e+this.readInt32(e)+m.SIZEOF_INT},m.ByteBuffer.prototype.__vector_len=function(e){return this.readInt32(e+this.readInt32(e))},m.ByteBuffer.prototype.__has_identifier=function(e){if(e.length!=m.FILE_IDENTIFIER_LENGTH)throw new Error("FlatBuffers: file identifier must be length "+m.FILE_IDENTIFIER_LENGTH);for(var t=0;t<m.FILE_IDENTIFIER_LENGTH;t++)if(e.charCodeAt(t)!=this.readInt8(this.position_+m.SIZEOF_INT+t))return!1;return!0},m.ByteBuffer.prototype.createLong=function(e,t){return m.Long.create(e,t)}}),P$1,ge$2=x$1(()=>{Je$1(),(e=>{(t=>{(r=>{(o=>(o[o.UNDEFINED=0]="UNDEFINED",o[o.FLOAT=1]="FLOAT",o[o.INT=2]="INT",o[o.STRING=3]="STRING",o[o.TENSOR=4]="TENSOR",o[o.GRAPH=5]="GRAPH",o[o.FLOATS=6]="FLOATS",o[o.INTS=7]="INTS",o[o.STRINGS=8]="STRINGS",o[o.TENSORS=9]="TENSORS",o[o.GRAPHS=10]="GRAPHS",o[o.SPARSE_TENSOR=11]="SPARSE_TENSOR",o[o.SPARSE_TENSORS=12]="SPARSE_TENSORS"))(r.AttributeType||={})})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{(o=>(o[o.UNKNOWN=0]="UNKNOWN",o[o.VALUE=1]="VALUE",o[o.PARAM=2]="PARAM"))(r.DimensionValueType||={})})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{(o=>(o[o.UNDEFINED=0]="UNDEFINED",o[o.FLOAT=1]="FLOAT",o[o.UINT8=2]="UINT8",o[o.INT8=3]="INT8",o[o.UINT16=4]="UINT16",o[o.INT16=5]="INT16",o[o.INT32=6]="INT32",o[o.INT64=7]="INT64",o[o.STRING=8]="STRING",o[o.BOOL=9]="BOOL",o[o.FLOAT16=10]="FLOAT16",o[o.DOUBLE=11]="DOUBLE",o[o.UINT32=12]="UINT32",o[o.UINT64=13]="UINT64",o[o.COMPLEX64=14]="COMPLEX64",o[o.COMPLEX128=15]="COMPLEX128",o[o.BFLOAT16=16]="BFLOAT16",o[o.FLOAT8E4M3FN=17]="FLOAT8E4M3FN",o[o.FLOAT8E4M3FNUZ=18]="FLOAT8E4M3FNUZ",o[o.FLOAT8E5M2=19]="FLOAT8E5M2",o[o.FLOAT8E5M2FNUZ=20]="FLOAT8E5M2FNUZ"))(r.TensorDataType||={})})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{(o=>(o[o.Primitive=0]="Primitive",o[o.Fused=1]="Fused"))(r.NodeType||={})})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{(o=>(o[o.NONE=0]="NONE",o[o.tensor_type=1]="tensor_type",o[o.sequence_type=2]="sequence_type",o[o.map_type=3]="map_type"))(r.TypeInfoValue||={})})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(n,a){return this.bb_pos=n,this.bb=a,this}static getRootAsShape(n,a){return(a||new o).__init(n.readInt32(n.position())+n.position(),n)}static getSizePrefixedRootAsShape(n,a){return n.setPosition(n.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(n.readInt32(n.position())+n.position(),n)}dim(n,a){let d=this.bb.__offset(this.bb_pos,4);return d?(a||new e.experimental.fbs.Dimension).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+d)+n*4),this.bb):null}dimLength(){let n=this.bb.__offset(this.bb_pos,4);return n?this.bb.__vector_len(this.bb_pos+n):0}static startShape(n){n.startObject(1)}static addDim(n,a){n.addFieldOffset(0,a,0)}static createDimVector(n,a){n.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)n.addOffset(a[d]);return n.endVector()}static startDimVector(n,a){n.startVector(4,a,4)}static endShape(n){return n.endObject()}static createShape(n,a){return o.startShape(n),o.addDim(n,a),o.endShape(n)}}r.Shape=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(n,a){return this.bb_pos=n,this.bb=a,this}static getRootAsDimension(n,a){return(a||new o).__init(n.readInt32(n.position())+n.position(),n)}static getSizePrefixedRootAsDimension(n,a){return n.setPosition(n.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(n.readInt32(n.position())+n.position(),n)}value(n){let a=this.bb.__offset(this.bb_pos,4);return a?(n||new e.experimental.fbs.DimensionValue).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}denotation(n){let a=this.bb.__offset(this.bb_pos,6);return a?this.bb.__string(this.bb_pos+a,n):null}static startDimension(n){n.startObject(2)}static addValue(n,a){n.addFieldOffset(0,a,0)}static addDenotation(n,a){n.addFieldOffset(1,a,0)}static endDimension(n){return n.endObject()}static createDimension(n,a,d){return o.startDimension(n),o.addValue(n,a),o.addDenotation(n,d),o.endDimension(n)}}r.Dimension=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(n,a){return this.bb_pos=n,this.bb=a,this}static getRootAsDimensionValue(n,a){return(a||new o).__init(n.readInt32(n.position())+n.position(),n)}static getSizePrefixedRootAsDimensionValue(n,a){return n.setPosition(n.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(n.readInt32(n.position())+n.position(),n)}dimType(){let n=this.bb.__offset(this.bb_pos,4);return n?this.bb.readInt8(this.bb_pos+n):0}dimValue(){let n=this.bb.__offset(this.bb_pos,6);return n?this.bb.readInt64(this.bb_pos+n):this.bb.createLong(0,0)}dimParam(n){let a=this.bb.__offset(this.bb_pos,8);return a?this.bb.__string(this.bb_pos+a,n):null}static startDimensionValue(n){n.startObject(3)}static addDimType(n,a){n.addFieldInt8(0,a,0)}static addDimValue(n,a){n.addFieldInt64(1,a,n.createLong(0,0))}static addDimParam(n,a){n.addFieldOffset(2,a,0)}static endDimensionValue(n){return n.endObject()}static createDimensionValue(n,a,d,p){return o.startDimensionValue(n),o.addDimType(n,a),o.addDimValue(n,d),o.addDimParam(n,p),o.endDimensionValue(n)}}r.DimensionValue=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(n,a){return this.bb_pos=n,this.bb=a,this}static getRootAsTensorTypeAndShape(n,a){return(a||new o).__init(n.readInt32(n.position())+n.position(),n)}static getSizePrefixedRootAsTensorTypeAndShape(n,a){return n.setPosition(n.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(n.readInt32(n.position())+n.position(),n)}elemType(){let n=this.bb.__offset(this.bb_pos,4);return n?this.bb.readInt32(this.bb_pos+n):0}shape(n){let a=this.bb.__offset(this.bb_pos,6);return a?(n||new e.experimental.fbs.Shape).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}static startTensorTypeAndShape(n){n.startObject(2)}static addElemType(n,a){n.addFieldInt32(0,a,0)}static addShape(n,a){n.addFieldOffset(1,a,0)}static endTensorTypeAndShape(n){return n.endObject()}static createTensorTypeAndShape(n,a,d){return o.startTensorTypeAndShape(n),o.addElemType(n,a),o.addShape(n,d),o.endTensorTypeAndShape(n)}}r.TensorTypeAndShape=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(n,a){return this.bb_pos=n,this.bb=a,this}static getRootAsMapType(n,a){return(a||new o).__init(n.readInt32(n.position())+n.position(),n)}static getSizePrefixedRootAsMapType(n,a){return n.setPosition(n.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(n.readInt32(n.position())+n.position(),n)}keyType(){let n=this.bb.__offset(this.bb_pos,4);return n?this.bb.readInt32(this.bb_pos+n):0}valueType(n){let a=this.bb.__offset(this.bb_pos,6);return a?(n||new e.experimental.fbs.TypeInfo).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}static startMapType(n){n.startObject(2)}static addKeyType(n,a){n.addFieldInt32(0,a,0)}static addValueType(n,a){n.addFieldOffset(1,a,0)}static endMapType(n){return n.endObject()}static createMapType(n,a,d){return o.startMapType(n),o.addKeyType(n,a),o.addValueType(n,d),o.endMapType(n)}}r.MapType=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(n,a){return this.bb_pos=n,this.bb=a,this}static getRootAsSequenceType(n,a){return(a||new o).__init(n.readInt32(n.position())+n.position(),n)}static getSizePrefixedRootAsSequenceType(n,a){return n.setPosition(n.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(n.readInt32(n.position())+n.position(),n)}elemType(n){let a=this.bb.__offset(this.bb_pos,4);return a?(n||new e.experimental.fbs.TypeInfo).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}static startSequenceType(n){n.startObject(1)}static addElemType(n,a){n.addFieldOffset(0,a,0)}static endSequenceType(n){return n.endObject()}static createSequenceType(n,a){return o.startSequenceType(n),o.addElemType(n,a),o.endSequenceType(n)}}r.SequenceType=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(n,a){return this.bb_pos=n,this.bb=a,this}nodeIndex(){return this.bb.readUint32(this.bb_pos)}srcArgIndex(){return this.bb.readInt32(this.bb_pos+4)}dstArgIndex(){return this.bb.readInt32(this.bb_pos+8)}static createEdgeEnd(n,a,d,p){return n.prep(4,12),n.writeInt32(p),n.writeInt32(d),n.writeInt32(a),n.offset()}}r.EdgeEnd=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(n,a){return this.bb_pos=n,this.bb=a,this}static getRootAsNodeEdge(n,a){return(a||new o).__init(n.readInt32(n.position())+n.position(),n)}static getSizePrefixedRootAsNodeEdge(n,a){return n.setPosition(n.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(n.readInt32(n.position())+n.position(),n)}nodeIndex(){let n=this.bb.__offset(this.bb_pos,4);return n?this.bb.readUint32(this.bb_pos+n):0}inputEdges(n,a){let d=this.bb.__offset(this.bb_pos,6);return d?(a||new e.experimental.fbs.EdgeEnd).__init(this.bb.__vector(this.bb_pos+d)+n*12,this.bb):null}inputEdgesLength(){let n=this.bb.__offset(this.bb_pos,6);return n?this.bb.__vector_len(this.bb_pos+n):0}outputEdges(n,a){let d=this.bb.__offset(this.bb_pos,8);return d?(a||new e.experimental.fbs.EdgeEnd).__init(this.bb.__vector(this.bb_pos+d)+n*12,this.bb):null}outputEdgesLength(){let n=this.bb.__offset(this.bb_pos,8);return n?this.bb.__vector_len(this.bb_pos+n):0}static startNodeEdge(n){n.startObject(3)}static addNodeIndex(n,a){n.addFieldInt32(0,a,0)}static addInputEdges(n,a){n.addFieldOffset(1,a,0)}static startInputEdgesVector(n,a){n.startVector(12,a,4)}static addOutputEdges(n,a){n.addFieldOffset(2,a,0)}static startOutputEdgesVector(n,a){n.startVector(12,a,4)}static endNodeEdge(n){return n.endObject()}static createNodeEdge(n,a,d,p){return o.startNodeEdge(n),o.addNodeIndex(n,a),o.addInputEdges(n,d),o.addOutputEdges(n,p),o.endNodeEdge(n)}}r.NodeEdge=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(n,a){return this.bb_pos=n,this.bb=a,this}static getRootAsNode(n,a){return(a||new o).__init(n.readInt32(n.position())+n.position(),n)}static getSizePrefixedRootAsNode(n,a){return n.setPosition(n.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(n.readInt32(n.position())+n.position(),n)}name(n){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,n):null}docString(n){let a=this.bb.__offset(this.bb_pos,6);return a?this.bb.__string(this.bb_pos+a,n):null}domain(n){let a=this.bb.__offset(this.bb_pos,8);return a?this.bb.__string(this.bb_pos+a,n):null}sinceVersion(){let n=this.bb.__offset(this.bb_pos,10);return n?this.bb.readInt32(this.bb_pos+n):0}index(){let n=this.bb.__offset(this.bb_pos,12);return n?this.bb.readUint32(this.bb_pos+n):0}opType(n){let a=this.bb.__offset(this.bb_pos,14);return a?this.bb.__string(this.bb_pos+a,n):null}type(){let n=this.bb.__offset(this.bb_pos,16);return n?this.bb.readInt32(this.bb_pos+n):0}executionProviderType(n){let a=this.bb.__offset(this.bb_pos,18);return a?this.bb.__string(this.bb_pos+a,n):null}inputs(n,a){let d=this.bb.__offset(this.bb_pos,20);return d?this.bb.__string(this.bb.__vector(this.bb_pos+d)+n*4,a):null}inputsLength(){let n=this.bb.__offset(this.bb_pos,20);return n?this.bb.__vector_len(this.bb_pos+n):0}outputs(n,a){let d=this.bb.__offset(this.bb_pos,22);return d?this.bb.__string(this.bb.__vector(this.bb_pos+d)+n*4,a):null}outputsLength(){let n=this.bb.__offset(this.bb_pos,22);return n?this.bb.__vector_len(this.bb_pos+n):0}attributes(n,a){let d=this.bb.__offset(this.bb_pos,24);return d?(a||new e.experimental.fbs.Attribute).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+d)+n*4),this.bb):null}attributesLength(){let n=this.bb.__offset(this.bb_pos,24);return n?this.bb.__vector_len(this.bb_pos+n):0}inputArgCounts(n){let a=this.bb.__offset(this.bb_pos,26);return a?this.bb.readInt32(this.bb.__vector(this.bb_pos+a)+n*4):0}inputArgCountsLength(){let n=this.bb.__offset(this.bb_pos,26);return n?this.bb.__vector_len(this.bb_pos+n):0}inputArgCountsArray(){let n=this.bb.__offset(this.bb_pos,26);return n?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+n),this.bb.__vector_len(this.bb_pos+n)):null}implicitInputs(n,a){let d=this.bb.__offset(this.bb_pos,28);return d?this.bb.__string(this.bb.__vector(this.bb_pos+d)+n*4,a):null}implicitInputsLength(){let n=this.bb.__offset(this.bb_pos,28);return n?this.bb.__vector_len(this.bb_pos+n):0}static startNode(n){n.startObject(13)}static addName(n,a){n.addFieldOffset(0,a,0)}static addDocString(n,a){n.addFieldOffset(1,a,0)}static addDomain(n,a){n.addFieldOffset(2,a,0)}static addSinceVersion(n,a){n.addFieldInt32(3,a,0)}static addIndex(n,a){n.addFieldInt32(4,a,0)}static addOpType(n,a){n.addFieldOffset(5,a,0)}static addType(n,a){n.addFieldInt32(6,a,0)}static addExecutionProviderType(n,a){n.addFieldOffset(7,a,0)}static addInputs(n,a){n.addFieldOffset(8,a,0)}static createInputsVector(n,a){n.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)n.addOffset(a[d]);return n.endVector()}static startInputsVector(n,a){n.startVector(4,a,4)}static addOutputs(n,a){n.addFieldOffset(9,a,0)}static createOutputsVector(n,a){n.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)n.addOffset(a[d]);return n.endVector()}static startOutputsVector(n,a){n.startVector(4,a,4)}static addAttributes(n,a){n.addFieldOffset(10,a,0)}static createAttributesVector(n,a){n.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)n.addOffset(a[d]);return n.endVector()}static startAttributesVector(n,a){n.startVector(4,a,4)}static addInputArgCounts(n,a){n.addFieldOffset(11,a,0)}static createInputArgCountsVector(n,a){n.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)n.addInt32(a[d]);return n.endVector()}static startInputArgCountsVector(n,a){n.startVector(4,a,4)}static addImplicitInputs(n,a){n.addFieldOffset(12,a,0)}static createImplicitInputsVector(n,a){n.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)n.addOffset(a[d]);return n.endVector()}static startImplicitInputsVector(n,a){n.startVector(4,a,4)}static endNode(n){return n.endObject()}static createNode(n,a,d,p,i,l,s,c,h,g,y,C,W,A){return o.startNode(n),o.addName(n,a),o.addDocString(n,d),o.addDomain(n,p),o.addSinceVersion(n,i),o.addIndex(n,l),o.addOpType(n,s),o.addType(n,c),o.addExecutionProviderType(n,h),o.addInputs(n,g),o.addOutputs(n,y),o.addAttributes(n,C),o.addInputArgCounts(n,W),o.addImplicitInputs(n,A),o.endNode(n)}}r.Node=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(n,a){return this.bb_pos=n,this.bb=a,this}static getRootAsValueInfo(n,a){return(a||new o).__init(n.readInt32(n.position())+n.position(),n)}static getSizePrefixedRootAsValueInfo(n,a){return n.setPosition(n.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(n.readInt32(n.position())+n.position(),n)}name(n){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,n):null}docString(n){let a=this.bb.__offset(this.bb_pos,6);return a?this.bb.__string(this.bb_pos+a,n):null}type(n){let a=this.bb.__offset(this.bb_pos,8);return a?(n||new e.experimental.fbs.TypeInfo).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}static startValueInfo(n){n.startObject(3)}static addName(n,a){n.addFieldOffset(0,a,0)}static addDocString(n,a){n.addFieldOffset(1,a,0)}static addType(n,a){n.addFieldOffset(2,a,0)}static endValueInfo(n){return n.endObject()}static createValueInfo(n,a,d,p){return o.startValueInfo(n),o.addName(n,a),o.addDocString(n,d),o.addType(n,p),o.endValueInfo(n)}}r.ValueInfo=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(n,a){return this.bb_pos=n,this.bb=a,this}static getRootAsTypeInfo(n,a){return(a||new o).__init(n.readInt32(n.position())+n.position(),n)}static getSizePrefixedRootAsTypeInfo(n,a){return n.setPosition(n.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(n.readInt32(n.position())+n.position(),n)}denotation(n){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,n):null}valueType(){let n=this.bb.__offset(this.bb_pos,6);return n?this.bb.readUint8(this.bb_pos+n):0}value(n){let a=this.bb.__offset(this.bb_pos,8);return a?this.bb.__union(n,this.bb_pos+a):null}static startTypeInfo(n){n.startObject(3)}static addDenotation(n,a){n.addFieldOffset(0,a,0)}static addValueType(n,a){n.addFieldInt8(1,a,0)}static addValue(n,a){n.addFieldOffset(2,a,0)}static endTypeInfo(n){return n.endObject()}static createTypeInfo(n,a,d,p){return o.startTypeInfo(n),o.addDenotation(n,a),o.addValueType(n,d),o.addValue(n,p),o.endTypeInfo(n)}}r.TypeInfo=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(n,a){return this.bb_pos=n,this.bb=a,this}static getRootAsOperatorSetId(n,a){return(a||new o).__init(n.readInt32(n.position())+n.position(),n)}static getSizePrefixedRootAsOperatorSetId(n,a){return n.setPosition(n.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(n.readInt32(n.position())+n.position(),n)}domain(n){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,n):null}version(){let n=this.bb.__offset(this.bb_pos,6);return n?this.bb.readInt64(this.bb_pos+n):this.bb.createLong(0,0)}static startOperatorSetId(n){n.startObject(2)}static addDomain(n,a){n.addFieldOffset(0,a,0)}static addVersion(n,a){n.addFieldInt64(1,a,n.createLong(0,0))}static endOperatorSetId(n){return n.endObject()}static createOperatorSetId(n,a,d){return o.startOperatorSetId(n),o.addDomain(n,a),o.addVersion(n,d),o.endOperatorSetId(n)}}r.OperatorSetId=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(n,a){return this.bb_pos=n,this.bb=a,this}static getRootAsTensor(n,a){return(a||new o).__init(n.readInt32(n.position())+n.position(),n)}static getSizePrefixedRootAsTensor(n,a){return n.setPosition(n.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(n.readInt32(n.position())+n.position(),n)}name(n){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,n):null}docString(n){let a=this.bb.__offset(this.bb_pos,6);return a?this.bb.__string(this.bb_pos+a,n):null}dims(n){let a=this.bb.__offset(this.bb_pos,8);return a?this.bb.readInt64(this.bb.__vector(this.bb_pos+a)+n*8):this.bb.createLong(0,0)}dimsLength(){let n=this.bb.__offset(this.bb_pos,8);return n?this.bb.__vector_len(this.bb_pos+n):0}dataType(){let n=this.bb.__offset(this.bb_pos,10);return n?this.bb.readInt32(this.bb_pos+n):0}rawData(n){let a=this.bb.__offset(this.bb_pos,12);return a?this.bb.readUint8(this.bb.__vector(this.bb_pos+a)+n):0}rawDataLength(){let n=this.bb.__offset(this.bb_pos,12);return n?this.bb.__vector_len(this.bb_pos+n):0}rawDataArray(){let n=this.bb.__offset(this.bb_pos,12);return n?new Uint8Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+n),this.bb.__vector_len(this.bb_pos+n)):null}stringData(n,a){let d=this.bb.__offset(this.bb_pos,14);return d?this.bb.__string(this.bb.__vector(this.bb_pos+d)+n*4,a):null}stringDataLength(){let n=this.bb.__offset(this.bb_pos,14);return n?this.bb.__vector_len(this.bb_pos+n):0}static startTensor(n){n.startObject(6)}static addName(n,a){n.addFieldOffset(0,a,0)}static addDocString(n,a){n.addFieldOffset(1,a,0)}static addDims(n,a){n.addFieldOffset(2,a,0)}static createDimsVector(n,a){n.startVector(8,a.length,8);for(let d=a.length-1;d>=0;d--)n.addInt64(a[d]);return n.endVector()}static startDimsVector(n,a){n.startVector(8,a,8)}static addDataType(n,a){n.addFieldInt32(3,a,0)}static addRawData(n,a){n.addFieldOffset(4,a,0)}static createRawDataVector(n,a){n.startVector(1,a.length,1);for(let d=a.length-1;d>=0;d--)n.addInt8(a[d]);return n.endVector()}static startRawDataVector(n,a){n.startVector(1,a,1)}static addStringData(n,a){n.addFieldOffset(5,a,0)}static createStringDataVector(n,a){n.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)n.addOffset(a[d]);return n.endVector()}static startStringDataVector(n,a){n.startVector(4,a,4)}static endTensor(n){return n.endObject()}static createTensor(n,a,d,p,i,l,s){return o.startTensor(n),o.addName(n,a),o.addDocString(n,d),o.addDims(n,p),o.addDataType(n,i),o.addRawData(n,l),o.addStringData(n,s),o.endTensor(n)}}r.Tensor=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(n,a){return this.bb_pos=n,this.bb=a,this}static getRootAsSparseTensor(n,a){return(a||new o).__init(n.readInt32(n.position())+n.position(),n)}static getSizePrefixedRootAsSparseTensor(n,a){return n.setPosition(n.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(n.readInt32(n.position())+n.position(),n)}values(n){let a=this.bb.__offset(this.bb_pos,4);return a?(n||new e.experimental.fbs.Tensor).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}indices(n){let a=this.bb.__offset(this.bb_pos,6);return a?(n||new e.experimental.fbs.Tensor).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}dims(n){let a=this.bb.__offset(this.bb_pos,8);return a?this.bb.readInt64(this.bb.__vector(this.bb_pos+a)+n*8):this.bb.createLong(0,0)}dimsLength(){let n=this.bb.__offset(this.bb_pos,8);return n?this.bb.__vector_len(this.bb_pos+n):0}static startSparseTensor(n){n.startObject(3)}static addValues(n,a){n.addFieldOffset(0,a,0)}static addIndices(n,a){n.addFieldOffset(1,a,0)}static addDims(n,a){n.addFieldOffset(2,a,0)}static createDimsVector(n,a){n.startVector(8,a.length,8);for(let d=a.length-1;d>=0;d--)n.addInt64(a[d]);return n.endVector()}static startDimsVector(n,a){n.startVector(8,a,8)}static endSparseTensor(n){return n.endObject()}static createSparseTensor(n,a,d,p){return o.startSparseTensor(n),o.addValues(n,a),o.addIndices(n,d),o.addDims(n,p),o.endSparseTensor(n)}}r.SparseTensor=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(n,a){return this.bb_pos=n,this.bb=a,this}static getRootAsAttribute(n,a){return(a||new o).__init(n.readInt32(n.position())+n.position(),n)}static getSizePrefixedRootAsAttribute(n,a){return n.setPosition(n.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(n.readInt32(n.position())+n.position(),n)}name(n){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,n):null}docString(n){let a=this.bb.__offset(this.bb_pos,6);return a?this.bb.__string(this.bb_pos+a,n):null}type(){let n=this.bb.__offset(this.bb_pos,8);return n?this.bb.readInt32(this.bb_pos+n):0}f(){let n=this.bb.__offset(this.bb_pos,10);return n?this.bb.readFloat32(this.bb_pos+n):0}i(){let n=this.bb.__offset(this.bb_pos,12);return n?this.bb.readInt64(this.bb_pos+n):this.bb.createLong(0,0)}s(n){let a=this.bb.__offset(this.bb_pos,14);return a?this.bb.__string(this.bb_pos+a,n):null}t(n){let a=this.bb.__offset(this.bb_pos,16);return a?(n||new e.experimental.fbs.Tensor).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}g(n){let a=this.bb.__offset(this.bb_pos,18);return a?(n||new e.experimental.fbs.Graph).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}floats(n){let a=this.bb.__offset(this.bb_pos,20);return a?this.bb.readFloat32(this.bb.__vector(this.bb_pos+a)+n*4):0}floatsLength(){let n=this.bb.__offset(this.bb_pos,20);return n?this.bb.__vector_len(this.bb_pos+n):0}floatsArray(){let n=this.bb.__offset(this.bb_pos,20);return n?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+n),this.bb.__vector_len(this.bb_pos+n)):null}ints(n){let a=this.bb.__offset(this.bb_pos,22);return a?this.bb.readInt64(this.bb.__vector(this.bb_pos+a)+n*8):this.bb.createLong(0,0)}intsLength(){let n=this.bb.__offset(this.bb_pos,22);return n?this.bb.__vector_len(this.bb_pos+n):0}strings(n,a){let d=this.bb.__offset(this.bb_pos,24);return d?this.bb.__string(this.bb.__vector(this.bb_pos+d)+n*4,a):null}stringsLength(){let n=this.bb.__offset(this.bb_pos,24);return n?this.bb.__vector_len(this.bb_pos+n):0}tensors(n,a){let d=this.bb.__offset(this.bb_pos,26);return d?(a||new e.experimental.fbs.Tensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+d)+n*4),this.bb):null}tensorsLength(){let n=this.bb.__offset(this.bb_pos,26);return n?this.bb.__vector_len(this.bb_pos+n):0}graphs(n,a){let d=this.bb.__offset(this.bb_pos,28);return d?(a||new e.experimental.fbs.Graph).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+d)+n*4),this.bb):null}graphsLength(){let n=this.bb.__offset(this.bb_pos,28);return n?this.bb.__vector_len(this.bb_pos+n):0}static startAttribute(n){n.startObject(13)}static addName(n,a){n.addFieldOffset(0,a,0)}static addDocString(n,a){n.addFieldOffset(1,a,0)}static addType(n,a){n.addFieldInt32(2,a,0)}static addF(n,a){n.addFieldFloat32(3,a,0)}static addI(n,a){n.addFieldInt64(4,a,n.createLong(0,0))}static addS(n,a){n.addFieldOffset(5,a,0)}static addT(n,a){n.addFieldOffset(6,a,0)}static addG(n,a){n.addFieldOffset(7,a,0)}static addFloats(n,a){n.addFieldOffset(8,a,0)}static createFloatsVector(n,a){n.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)n.addFloat32(a[d]);return n.endVector()}static startFloatsVector(n,a){n.startVector(4,a,4)}static addInts(n,a){n.addFieldOffset(9,a,0)}static createIntsVector(n,a){n.startVector(8,a.length,8);for(let d=a.length-1;d>=0;d--)n.addInt64(a[d]);return n.endVector()}static startIntsVector(n,a){n.startVector(8,a,8)}static addStrings(n,a){n.addFieldOffset(10,a,0)}static createStringsVector(n,a){n.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)n.addOffset(a[d]);return n.endVector()}static startStringsVector(n,a){n.startVector(4,a,4)}static addTensors(n,a){n.addFieldOffset(11,a,0)}static createTensorsVector(n,a){n.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)n.addOffset(a[d]);return n.endVector()}static startTensorsVector(n,a){n.startVector(4,a,4)}static addGraphs(n,a){n.addFieldOffset(12,a,0)}static createGraphsVector(n,a){n.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)n.addOffset(a[d]);return n.endVector()}static startGraphsVector(n,a){n.startVector(4,a,4)}static endAttribute(n){return n.endObject()}static createAttribute(n,a,d,p,i,l,s,c,h,g,y,C,W,A){return o.startAttribute(n),o.addName(n,a),o.addDocString(n,d),o.addType(n,p),o.addF(n,i),o.addI(n,l),o.addS(n,s),o.addT(n,c),o.addG(n,h),o.addFloats(n,g),o.addInts(n,y),o.addStrings(n,C),o.addTensors(n,W),o.addGraphs(n,A),o.endAttribute(n)}}r.Attribute=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(n,a){return this.bb_pos=n,this.bb=a,this}static getRootAsGraph(n,a){return(a||new o).__init(n.readInt32(n.position())+n.position(),n)}static getSizePrefixedRootAsGraph(n,a){return n.setPosition(n.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(n.readInt32(n.position())+n.position(),n)}initializers(n,a){let d=this.bb.__offset(this.bb_pos,4);return d?(a||new e.experimental.fbs.Tensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+d)+n*4),this.bb):null}initializersLength(){let n=this.bb.__offset(this.bb_pos,4);return n?this.bb.__vector_len(this.bb_pos+n):0}nodeArgs(n,a){let d=this.bb.__offset(this.bb_pos,6);return d?(a||new e.experimental.fbs.ValueInfo).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+d)+n*4),this.bb):null}nodeArgsLength(){let n=this.bb.__offset(this.bb_pos,6);return n?this.bb.__vector_len(this.bb_pos+n):0}nodes(n,a){let d=this.bb.__offset(this.bb_pos,8);return d?(a||new e.experimental.fbs.Node).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+d)+n*4),this.bb):null}nodesLength(){let n=this.bb.__offset(this.bb_pos,8);return n?this.bb.__vector_len(this.bb_pos+n):0}maxNodeIndex(){let n=this.bb.__offset(this.bb_pos,10);return n?this.bb.readUint32(this.bb_pos+n):0}nodeEdges(n,a){let d=this.bb.__offset(this.bb_pos,12);return d?(a||new e.experimental.fbs.NodeEdge).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+d)+n*4),this.bb):null}nodeEdgesLength(){let n=this.bb.__offset(this.bb_pos,12);return n?this.bb.__vector_len(this.bb_pos+n):0}inputs(n,a){let d=this.bb.__offset(this.bb_pos,14);return d?this.bb.__string(this.bb.__vector(this.bb_pos+d)+n*4,a):null}inputsLength(){let n=this.bb.__offset(this.bb_pos,14);return n?this.bb.__vector_len(this.bb_pos+n):0}outputs(n,a){let d=this.bb.__offset(this.bb_pos,16);return d?this.bb.__string(this.bb.__vector(this.bb_pos+d)+n*4,a):null}outputsLength(){let n=this.bb.__offset(this.bb_pos,16);return n?this.bb.__vector_len(this.bb_pos+n):0}sparseInitializers(n,a){let d=this.bb.__offset(this.bb_pos,18);return d?(a||new e.experimental.fbs.SparseTensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+d)+n*4),this.bb):null}sparseInitializersLength(){let n=this.bb.__offset(this.bb_pos,18);return n?this.bb.__vector_len(this.bb_pos+n):0}static startGraph(n){n.startObject(8)}static addInitializers(n,a){n.addFieldOffset(0,a,0)}static createInitializersVector(n,a){n.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)n.addOffset(a[d]);return n.endVector()}static startInitializersVector(n,a){n.startVector(4,a,4)}static addNodeArgs(n,a){n.addFieldOffset(1,a,0)}static createNodeArgsVector(n,a){n.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)n.addOffset(a[d]);return n.endVector()}static startNodeArgsVector(n,a){n.startVector(4,a,4)}static addNodes(n,a){n.addFieldOffset(2,a,0)}static createNodesVector(n,a){n.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)n.addOffset(a[d]);return n.endVector()}static startNodesVector(n,a){n.startVector(4,a,4)}static addMaxNodeIndex(n,a){n.addFieldInt32(3,a,0)}static addNodeEdges(n,a){n.addFieldOffset(4,a,0)}static createNodeEdgesVector(n,a){n.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)n.addOffset(a[d]);return n.endVector()}static startNodeEdgesVector(n,a){n.startVector(4,a,4)}static addInputs(n,a){n.addFieldOffset(5,a,0)}static createInputsVector(n,a){n.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)n.addOffset(a[d]);return n.endVector()}static startInputsVector(n,a){n.startVector(4,a,4)}static addOutputs(n,a){n.addFieldOffset(6,a,0)}static createOutputsVector(n,a){n.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)n.addOffset(a[d]);return n.endVector()}static startOutputsVector(n,a){n.startVector(4,a,4)}static addSparseInitializers(n,a){n.addFieldOffset(7,a,0)}static createSparseInitializersVector(n,a){n.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)n.addOffset(a[d]);return n.endVector()}static startSparseInitializersVector(n,a){n.startVector(4,a,4)}static endGraph(n){return n.endObject()}static createGraph(n,a,d,p,i,l,s,c,h){return o.startGraph(n),o.addInitializers(n,a),o.addNodeArgs(n,d),o.addNodes(n,p),o.addMaxNodeIndex(n,i),o.addNodeEdges(n,l),o.addInputs(n,s),o.addOutputs(n,c),o.addSparseInitializers(n,h),o.endGraph(n)}}r.Graph=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(n,a){return this.bb_pos=n,this.bb=a,this}static getRootAsModel(n,a){return(a||new o).__init(n.readInt32(n.position())+n.position(),n)}static getSizePrefixedRootAsModel(n,a){return n.setPosition(n.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(n.readInt32(n.position())+n.position(),n)}irVersion(){let n=this.bb.__offset(this.bb_pos,4);return n?this.bb.readInt64(this.bb_pos+n):this.bb.createLong(0,0)}opsetImport(n,a){let d=this.bb.__offset(this.bb_pos,6);return d?(a||new e.experimental.fbs.OperatorSetId).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+d)+n*4),this.bb):null}opsetImportLength(){let n=this.bb.__offset(this.bb_pos,6);return n?this.bb.__vector_len(this.bb_pos+n):0}producerName(n){let a=this.bb.__offset(this.bb_pos,8);return a?this.bb.__string(this.bb_pos+a,n):null}producerVersion(n){let a=this.bb.__offset(this.bb_pos,10);return a?this.bb.__string(this.bb_pos+a,n):null}domain(n){let a=this.bb.__offset(this.bb_pos,12);return a?this.bb.__string(this.bb_pos+a,n):null}modelVersion(){let n=this.bb.__offset(this.bb_pos,14);return n?this.bb.readInt64(this.bb_pos+n):this.bb.createLong(0,0)}docString(n){let a=this.bb.__offset(this.bb_pos,16);return a?this.bb.__string(this.bb_pos+a,n):null}graph(n){let a=this.bb.__offset(this.bb_pos,18);return a?(n||new e.experimental.fbs.Graph).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}graphDocString(n){let a=this.bb.__offset(this.bb_pos,20);return a?this.bb.__string(this.bb_pos+a,n):null}static startModel(n){n.startObject(9)}static addIrVersion(n,a){n.addFieldInt64(0,a,n.createLong(0,0))}static addOpsetImport(n,a){n.addFieldOffset(1,a,0)}static createOpsetImportVector(n,a){n.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)n.addOffset(a[d]);return n.endVector()}static startOpsetImportVector(n,a){n.startVector(4,a,4)}static addProducerName(n,a){n.addFieldOffset(2,a,0)}static addProducerVersion(n,a){n.addFieldOffset(3,a,0)}static addDomain(n,a){n.addFieldOffset(4,a,0)}static addModelVersion(n,a){n.addFieldInt64(5,a,n.createLong(0,0))}static addDocString(n,a){n.addFieldOffset(6,a,0)}static addGraph(n,a){n.addFieldOffset(7,a,0)}static addGraphDocString(n,a){n.addFieldOffset(8,a,0)}static endModel(n){return n.endObject()}static createModel(n,a,d,p,i,l,s,c,h,g){return o.startModel(n),o.addIrVersion(n,a),o.addOpsetImport(n,d),o.addProducerName(n,p),o.addProducerVersion(n,i),o.addDomain(n,l),o.addModelVersion(n,s),o.addDocString(n,c),o.addGraph(n,h),o.addGraphDocString(n,g),o.endModel(n)}}r.Model=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(n,a){return this.bb_pos=n,this.bb=a,this}static getRootAsKernelCreateInfos(n,a){return(a||new o).__init(n.readInt32(n.position())+n.position(),n)}static getSizePrefixedRootAsKernelCreateInfos(n,a){return n.setPosition(n.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(n.readInt32(n.position())+n.position(),n)}nodeIndices(n){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.readUint32(this.bb.__vector(this.bb_pos+a)+n*4):0}nodeIndicesLength(){let n=this.bb.__offset(this.bb_pos,4);return n?this.bb.__vector_len(this.bb_pos+n):0}nodeIndicesArray(){let n=this.bb.__offset(this.bb_pos,4);return n?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+n),this.bb.__vector_len(this.bb_pos+n)):null}kernelDefHashes(n){let a=this.bb.__offset(this.bb_pos,6);return a?this.bb.readUint64(this.bb.__vector(this.bb_pos+a)+n*8):this.bb.createLong(0,0)}kernelDefHashesLength(){let n=this.bb.__offset(this.bb_pos,6);return n?this.bb.__vector_len(this.bb_pos+n):0}static startKernelCreateInfos(n){n.startObject(2)}static addNodeIndices(n,a){n.addFieldOffset(0,a,0)}static createNodeIndicesVector(n,a){n.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)n.addInt32(a[d]);return n.endVector()}static startNodeIndicesVector(n,a){n.startVector(4,a,4)}static addKernelDefHashes(n,a){n.addFieldOffset(1,a,0)}static createKernelDefHashesVector(n,a){n.startVector(8,a.length,8);for(let d=a.length-1;d>=0;d--)n.addInt64(a[d]);return n.endVector()}static startKernelDefHashesVector(n,a){n.startVector(8,a,8)}static endKernelCreateInfos(n){return n.endObject()}static createKernelCreateInfos(n,a,d){return o.startKernelCreateInfos(n),o.addNodeIndices(n,a),o.addKernelDefHashes(n,d),o.endKernelCreateInfos(n)}}r.KernelCreateInfos=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(n,a){return this.bb_pos=n,this.bb=a,this}static getRootAsSubGraphSessionState(n,a){return(a||new o).__init(n.readInt32(n.position())+n.position(),n)}static getSizePrefixedRootAsSubGraphSessionState(n,a){return n.setPosition(n.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(n.readInt32(n.position())+n.position(),n)}graphId(n){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,n):null}sessionState(n){let a=this.bb.__offset(this.bb_pos,6);return a?(n||new e.experimental.fbs.SessionState).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}static startSubGraphSessionState(n){n.startObject(2)}static addGraphId(n,a){n.addFieldOffset(0,a,0)}static addSessionState(n,a){n.addFieldOffset(1,a,0)}static endSubGraphSessionState(n){let a=n.endObject();return n.requiredField(a,4),a}static createSubGraphSessionState(n,a,d){return o.startSubGraphSessionState(n),o.addGraphId(n,a),o.addSessionState(n,d),o.endSubGraphSessionState(n)}}r.SubGraphSessionState=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(n,a){return this.bb_pos=n,this.bb=a,this}static getRootAsSessionState(n,a){return(a||new o).__init(n.readInt32(n.position())+n.position(),n)}static getSizePrefixedRootAsSessionState(n,a){return n.setPosition(n.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(n.readInt32(n.position())+n.position(),n)}kernels(n){let a=this.bb.__offset(this.bb_pos,4);return a?(n||new e.experimental.fbs.KernelCreateInfos).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}subGraphSessionStates(n,a){let d=this.bb.__offset(this.bb_pos,6);return d?(a||new e.experimental.fbs.SubGraphSessionState).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+d)+n*4),this.bb):null}subGraphSessionStatesLength(){let n=this.bb.__offset(this.bb_pos,6);return n?this.bb.__vector_len(this.bb_pos+n):0}static startSessionState(n){n.startObject(2)}static addKernels(n,a){n.addFieldOffset(0,a,0)}static addSubGraphSessionStates(n,a){n.addFieldOffset(1,a,0)}static createSubGraphSessionStatesVector(n,a){n.startVector(4,a.length,4);for(let d=a.length-1;d>=0;d--)n.addOffset(a[d]);return n.endVector()}static startSubGraphSessionStatesVector(n,a){n.startVector(4,a,4)}static endSessionState(n){return n.endObject()}static createSessionState(n,a,d){return o.startSessionState(n),o.addKernels(n,a),o.addSubGraphSessionStates(n,d),o.endSessionState(n)}}r.SessionState=o})(t.fbs||={})})(e.experimental||={})})(P$1||={}),(e=>{(t=>{(r=>{class o{constructor(){this.bb=null,this.bb_pos=0}__init(n,a){return this.bb_pos=n,this.bb=a,this}static getRootAsInferenceSession(n,a){return(a||new o).__init(n.readInt32(n.position())+n.position(),n)}static getSizePrefixedRootAsInferenceSession(n,a){return n.setPosition(n.position()+m.SIZE_PREFIX_LENGTH),(a||new o).__init(n.readInt32(n.position())+n.position(),n)}static bufferHasIdentifier(n){return n.__has_identifier("ORTM")}ortVersion(n){let a=this.bb.__offset(this.bb_pos,4);return a?this.bb.__string(this.bb_pos+a,n):null}model(n){let a=this.bb.__offset(this.bb_pos,6);return a?(n||new e.experimental.fbs.Model).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}sessionState(n){let a=this.bb.__offset(this.bb_pos,8);return a?(n||new e.experimental.fbs.SessionState).__init(this.bb.__indirect(this.bb_pos+a),this.bb):null}static startInferenceSession(n){n.startObject(3)}static addOrtVersion(n,a){n.addFieldOffset(0,a,0)}static addModel(n,a){n.addFieldOffset(1,a,0)}static addSessionState(n,a){n.addFieldOffset(2,a,0)}static endInferenceSession(n){return n.endObject()}static finishInferenceSessionBuffer(n,a){n.finish(a,"ORTM")}static finishSizePrefixedInferenceSessionBuffer(n,a){n.finish(a,"ORTM",!0)}static createInferenceSession(n,a,d,p){return o.startInferenceSession(n),o.addOrtVersion(n,a),o.addModel(n,d),o.addSessionState(n,p),o.endInferenceSession(n)}}r.InferenceSession=o})(t.fbs||={})})(e.experimental||={})})(P$1||={})}),Vo=Z$1((e,t)=>{t.exports=r;function r(o,u){for(var n=new Array(arguments.length-1),a=0,d=2,p=!0;d<arguments.length;)n[a++]=arguments[d++];return new Promise(function(i,l){n[a]=function(s){if(p)if(p=!1,s)l(s);else{for(var c=new Array(arguments.length-1),h=0;h<c.length;)c[h++]=arguments[h];i.apply(null,c)}};try{o.apply(u||null,n)}catch(s){p&&(p=!1,l(s))}})}}),Wo=Z$1(e=>{var t=e;t.length=function(a){var d=a.length;if(!d)return 0;for(var p=0;--d%4>1&&a.charAt(d)==="=";)++p;return Math.ceil(a.length*3)/4-p};var r=new Array(64),o=new Array(123);for(u=0;u<64;)o[r[u]=u<26?u+65:u<52?u+71:u<62?u-4:u-59|43]=u++;var u;t.encode=function(a,d,p){for(var i=null,l=[],s=0,c=0,h;d<p;){var g=a[d++];switch(c){case 0:l[s++]=r[g>>2],h=(g&3)<<4,c=1;break;case 1:l[s++]=r[h|g>>4],h=(g&15)<<2,c=2;break;case 2:l[s++]=r[h|g>>6],l[s++]=r[g&63],c=0;break}s>8191&&((i||(i=[])).push(String.fromCharCode.apply(String,l)),s=0)}return c&&(l[s++]=r[h],l[s++]=61,c===1&&(l[s++]=61)),i?(s&&i.push(String.fromCharCode.apply(String,l.slice(0,s))),i.join("")):String.fromCharCode.apply(String,l.slice(0,s))};var n="invalid encoding";t.decode=function(a,d,p){for(var i=p,l=0,s,c=0;c<a.length;){var h=a.charCodeAt(c++);if(h===61&&l>1)break;if((h=o[h])===void 0)throw Error(n);switch(l){case 0:s=h,l=1;break;case 1:d[p++]=s<<2|(h&48)>>4,s=h,l=2;break;case 2:d[p++]=(s&15)<<4|(h&60)>>2,s=h,l=3;break;case 3:d[p++]=(s&3)<<6|h,l=0;break}}if(l===1)throw Error(n);return p-i},t.test=function(a){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a)}}),qo=Z$1((e,t)=>{t.exports=r;function r(){this._listeners={}}r.prototype.on=function(o,u,n){return(this._listeners[o]||(this._listeners[o]=[])).push({fn:u,ctx:n||this}),this},r.prototype.off=function(o,u){if(o===void 0)this._listeners={};else if(u===void 0)this._listeners[o]=[];else for(var n=this._listeners[o],a=0;a<n.length;)n[a].fn===u?n.splice(a,1):++a;return this},r.prototype.emit=function(o){var u=this._listeners[o];if(u){for(var n=[],a=1;a<arguments.length;)n.push(arguments[a++]);for(a=0;a<u.length;)u[a].fn.apply(u[a++].ctx,n)}return this}}),Qo=Z$1((e,t)=>{t.exports=r(r);function r(d){return typeof Float32Array<"u"?function(){var p=new Float32Array([-0]),i=new Uint8Array(p.buffer),l=i[3]===128;function s(y,C,W){p[0]=y,C[W]=i[0],C[W+1]=i[1],C[W+2]=i[2],C[W+3]=i[3]}function c(y,C,W){p[0]=y,C[W]=i[3],C[W+1]=i[2],C[W+2]=i[1],C[W+3]=i[0]}d.writeFloatLE=l?s:c,d.writeFloatBE=l?c:s;function h(y,C){return i[0]=y[C],i[1]=y[C+1],i[2]=y[C+2],i[3]=y[C+3],p[0]}function g(y,C){return i[3]=y[C],i[2]=y[C+1],i[1]=y[C+2],i[0]=y[C+3],p[0]}d.readFloatLE=l?h:g,d.readFloatBE=l?g:h}():function(){function p(l,s,c,h){var g=s<0?1:0;if(g&&(s=-s),s===0)l(1/s>0?0:2147483648,c,h);else if(isNaN(s))l(2143289344,c,h);else if(s>34028234663852886e22)l((g<<31|2139095040)>>>0,c,h);else if(s<11754943508222875e-54)l((g<<31|Math.round(s/1401298464324817e-60))>>>0,c,h);else{var y=Math.floor(Math.log(s)/Math.LN2),C=Math.round(s*Math.pow(2,-y)*8388608)&8388607;l((g<<31|y+127<<23|C)>>>0,c,h)}}d.writeFloatLE=p.bind(null,o),d.writeFloatBE=p.bind(null,u);function i(l,s,c){var h=l(s,c),g=(h>>31)*2+1,y=h>>>23&255,C=h&8388607;return y===255?C?NaN:g*(1/0):y===0?g*1401298464324817e-60*C:g*Math.pow(2,y-150)*(C+8388608)}d.readFloatLE=i.bind(null,n),d.readFloatBE=i.bind(null,a)}(),typeof Float64Array<"u"?function(){var p=new Float64Array([-0]),i=new Uint8Array(p.buffer),l=i[7]===128;function s(y,C,W){p[0]=y,C[W]=i[0],C[W+1]=i[1],C[W+2]=i[2],C[W+3]=i[3],C[W+4]=i[4],C[W+5]=i[5],C[W+6]=i[6],C[W+7]=i[7]}function c(y,C,W){p[0]=y,C[W]=i[7],C[W+1]=i[6],C[W+2]=i[5],C[W+3]=i[4],C[W+4]=i[3],C[W+5]=i[2],C[W+6]=i[1],C[W+7]=i[0]}d.writeDoubleLE=l?s:c,d.writeDoubleBE=l?c:s;function h(y,C){return i[0]=y[C],i[1]=y[C+1],i[2]=y[C+2],i[3]=y[C+3],i[4]=y[C+4],i[5]=y[C+5],i[6]=y[C+6],i[7]=y[C+7],p[0]}function g(y,C){return i[7]=y[C],i[6]=y[C+1],i[5]=y[C+2],i[4]=y[C+3],i[3]=y[C+4],i[2]=y[C+5],i[1]=y[C+6],i[0]=y[C+7],p[0]}d.readDoubleLE=l?h:g,d.readDoubleBE=l?g:h}():function(){function p(l,s,c,h,g,y){var C=h<0?1:0;if(C&&(h=-h),h===0)l(0,g,y+s),l(1/h>0?0:2147483648,g,y+c);else if(isNaN(h))l(0,g,y+s),l(2146959360,g,y+c);else if(h>17976931348623157e292)l(0,g,y+s),l((C<<31|2146435072)>>>0,g,y+c);else{var W;if(h<22250738585072014e-324)W=h/5e-324,l(W>>>0,g,y+s),l((C<<31|W/4294967296)>>>0,g,y+c);else{var A=Math.floor(Math.log(h)/Math.LN2);A===1024&&(A=1023),W=h*Math.pow(2,-A),l(W*4503599627370496>>>0,g,y+s),l((C<<31|A+1023<<20|W*1048576&1048575)>>>0,g,y+c)}}}d.writeDoubleLE=p.bind(null,o,0,4),d.writeDoubleBE=p.bind(null,u,4,0);function i(l,s,c,h,g){var y=l(h,g+s),C=l(h,g+c),W=(C>>31)*2+1,A=C>>>20&2047,X=4294967296*(C&1048575)+y;return A===2047?X?NaN:W*(1/0):A===0?W*5e-324*X:W*Math.pow(2,A-1075)*(X+4503599627370496)}d.readDoubleLE=i.bind(null,n,0,4),d.readDoubleBE=i.bind(null,a,4,0)}(),d}function o(d,p,i){p[i]=d&255,p[i+1]=d>>>8&255,p[i+2]=d>>>16&255,p[i+3]=d>>>24}function u(d,p,i){p[i]=d>>>24,p[i+1]=d>>>16&255,p[i+2]=d>>>8&255,p[i+3]=d&255}function n(d,p){return(d[p]|d[p+1]<<8|d[p+2]<<16|d[p+3]<<24)>>>0}function a(d,p){return(d[p]<<24|d[p+1]<<16|d[p+2]<<8|d[p+3])>>>0}}),ti=Z$1((exports,module)=>{module.exports=inquire;function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(e){}return null}}),ri=Z$1(e=>{var t=e;t.length=function(r){for(var o=0,u=0,n=0;n<r.length;++n)u=r.charCodeAt(n),u<128?o+=1:u<2048?o+=2:(u&64512)===55296&&(r.charCodeAt(n+1)&64512)===56320?(++n,o+=4):o+=3;return o},t.read=function(r,o,u){var n=u-o;if(n<1)return"";for(var a=null,d=[],p=0,i;o<u;)i=r[o++],i<128?d[p++]=i:i>191&&i<224?d[p++]=(i&31)<<6|r[o++]&63:i>239&&i<365?(i=((i&7)<<18|(r[o++]&63)<<12|(r[o++]&63)<<6|r[o++]&63)-65536,d[p++]=55296+(i>>10),d[p++]=56320+(i&1023)):d[p++]=(i&15)<<12|(r[o++]&63)<<6|r[o++]&63,p>8191&&((a||(a=[])).push(String.fromCharCode.apply(String,d)),p=0);return a?(p&&a.push(String.fromCharCode.apply(String,d.slice(0,p))),a.join("")):String.fromCharCode.apply(String,d.slice(0,p))},t.write=function(r,o,u){for(var n=u,a,d,p=0;p<r.length;++p)a=r.charCodeAt(p),a<128?o[u++]=a:a<2048?(o[u++]=a>>6|192,o[u++]=a&63|128):(a&64512)===55296&&((d=r.charCodeAt(p+1))&64512)===56320?(a=65536+((a&1023)<<10)+(d&1023),++p,o[u++]=a>>18|240,o[u++]=a>>12&63|128,o[u++]=a>>6&63|128,o[u++]=a&63|128):(o[u++]=a>>12|224,o[u++]=a>>6&63|128,o[u++]=a&63|128);return u-n}}),oi=Z$1((e,t)=>{t.exports=r;function r(o,u,n){var a=n||8192,d=a>>>1,p=null,i=a;return function(l){if(l<1||l>d)return o(l);i+l>a&&(p=o(a),i=0);var s=u.call(p,i,i+=l);return i&7&&(i=(i|7)+1),s}}}),ai=Z$1((e,t)=>{t.exports=o;var r=Gt$2();function o(d,p){this.lo=d>>>0,this.hi=p>>>0}var u=o.zero=new o(0,0);u.toNumber=function(){return 0},u.zzEncode=u.zzDecode=function(){return this},u.length=function(){return 1};var n=o.zeroHash="\0\0\0\0\0\0\0\0";o.fromNumber=function(d){if(d===0)return u;var p=d<0;p&&(d=-d);var i=d>>>0,l=(d-i)/4294967296>>>0;return p&&(l=~l>>>0,i=~i>>>0,++i>4294967295&&(i=0,++l>4294967295&&(l=0))),new o(i,l)},o.from=function(d){if(typeof d=="number")return o.fromNumber(d);if(r.isString(d))if(r.Long)d=r.Long.fromString(d);else return o.fromNumber(parseInt(d,10));return d.low||d.high?new o(d.low>>>0,d.high>>>0):u},o.prototype.toNumber=function(d){if(!d&&this.hi>>>31){var p=~this.lo+1>>>0,i=~this.hi>>>0;return p||(i=i+1>>>0),-(p+i*4294967296)}return this.lo+this.hi*4294967296},o.prototype.toLong=function(d){return r.Long?new r.Long(this.lo|0,this.hi|0,!!d):{low:this.lo|0,high:this.hi|0,unsigned:!!d}};var a=String.prototype.charCodeAt;o.fromHash=function(d){return d===n?u:new o((a.call(d,0)|a.call(d,1)<<8|a.call(d,2)<<16|a.call(d,3)<<24)>>>0,(a.call(d,4)|a.call(d,5)<<8|a.call(d,6)<<16|a.call(d,7)<<24)>>>0)},o.prototype.toHash=function(){return String.fromCharCode(this.lo&255,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,this.hi&255,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},o.prototype.zzEncode=function(){var d=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^d)>>>0,this.lo=(this.lo<<1^d)>>>0,this},o.prototype.zzDecode=function(){var d=-(this.lo&1);return this.lo=((this.lo>>>1|this.hi<<31)^d)>>>0,this.hi=(this.hi>>>1^d)>>>0,this},o.prototype.length=function(){var d=this.lo,p=(this.lo>>>28|this.hi<<4)>>>0,i=this.hi>>>24;return i===0?p===0?d<16384?d<128?1:2:d<2097152?3:4:p<16384?p<128?5:6:p<2097152?7:8:i<128?9:10}}),Gt$2=Z$1(e=>{var t=e;t.asPromise=Vo(),t.base64=Wo(),t.EventEmitter=qo(),t.float=Qo(),t.inquire=ti(),t.utf8=ri(),t.pool=oi(),t.LongBits=ai(),t.isNode=!!(typeof global<"u"&&global&&global.process&&global.process.versions&&global.process.versions.node),t.global=t.isNode&&global||typeof window<"u"&&window||typeof self<"u"&&self||e,t.emptyArray=Object.freeze?Object.freeze([]):[],t.emptyObject=Object.freeze?Object.freeze({}):{},t.isInteger=Number.isInteger||function(u){return typeof u=="number"&&isFinite(u)&&Math.floor(u)===u},t.isString=function(u){return typeof u=="string"||u instanceof String},t.isObject=function(u){return u&&typeof u=="object"},t.isset=t.isSet=function(u,n){var a=u[n];return a!=null&&u.hasOwnProperty(n)?typeof a!="object"||(Array.isArray(a)?a.length:Object.keys(a).length)>0:!1},t.Buffer=function(){try{var u=t.inquire("buffer").Buffer;return u.prototype.utf8Write?u:null}catch{return null}}(),t._Buffer_from=null,t._Buffer_allocUnsafe=null,t.newBuffer=function(u){return typeof u=="number"?t.Buffer?t._Buffer_allocUnsafe(u):new t.Array(u):t.Buffer?t._Buffer_from(u):typeof Uint8Array>"u"?u:new Uint8Array(u)},t.Array=typeof Uint8Array<"u"?Uint8Array:Array,t.Long=t.global.dcodeIO&&t.global.dcodeIO.Long||t.global.Long||t.inquire("long"),t.key2Re=/^true|false|0|1$/,t.key32Re=/^-?(?:0|[1-9][0-9]*)$/,t.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,t.longToHash=function(u){return u?t.LongBits.from(u).toHash():t.LongBits.zeroHash},t.longFromHash=function(u,n){var a=t.LongBits.fromHash(u);return t.Long?t.Long.fromBits(a.lo,a.hi,n):a.toNumber(!!n)};function r(u,n,a){for(var d=Object.keys(n),p=0;p<d.length;++p)(u[d[p]]===void 0||!a)&&(u[d[p]]=n[d[p]]);return u}t.merge=r,t.lcFirst=function(u){return u.charAt(0).toLowerCase()+u.substring(1)};function o(u){function n(a,d){if(!(this instanceof n))return new n(a,d);Object.defineProperty(this,"message",{get:function(){return a}}),Error.captureStackTrace?Error.captureStackTrace(this,n):Object.defineProperty(this,"stack",{value:new Error().stack||""}),d&&r(this,d)}return n.prototype=Object.create(Error.prototype,{constructor:{value:n,writable:!0,enumerable:!1,configurable:!0},name:{get:function(){return u},set:void 0,enumerable:!1,configurable:!0},toString:{value:function(){return this.name+": "+this.message},writable:!0,enumerable:!1,configurable:!0}}),n}t.newError=o,t.ProtocolError=o("ProtocolError"),t.oneOfGetter=function(u){for(var n={},a=0;a<u.length;++a)n[u[a]]=1;return function(){for(var d=Object.keys(this),p=d.length-1;p>-1;--p)if(n[d[p]]===1&&this[d[p]]!==void 0&&this[d[p]]!==null)return d[p]}},t.oneOfSetter=function(u){return function(n){for(var a=0;a<u.length;++a)u[a]!==n&&delete this[u[a]]}},t.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},t._configure=function(){var u=t.Buffer;if(!u){t._Buffer_from=t._Buffer_allocUnsafe=null;return}t._Buffer_from=u.from!==Uint8Array.from&&u.from||function(n,a){return new u(n,a)},t._Buffer_allocUnsafe=u.allocUnsafe||function(n){return new u(n)}}}),Yr$1=Z$1((e,t)=>{t.exports=l;var r=Gt$2(),o,u=r.LongBits,n=r.base64,a=r.utf8;function d(A,X,ni){this.fn=A,this.len=X,this.next=void 0,this.val=ni}function p(){}function i(A){this.head=A.head,this.tail=A.tail,this.len=A.len,this.next=A.states}function l(){this.len=0,this.head=new d(p,0,0),this.tail=this.head,this.states=null}var s=function(){return r.Buffer?function(){return(l.create=function(){return new o})()}:function(){return new l}};l.create=s(),l.alloc=function(A){return new r.Array(A)},r.Array!==Array&&(l.alloc=r.pool(l.alloc,r.Array.prototype.subarray)),l.prototype._push=function(A,X,ni){return this.tail=this.tail.next=new d(A,X,ni),this.len+=X,this};function c(A,X,ni){X[ni]=A&255}function h(A,X,ni){for(;A>127;)X[ni++]=A&127|128,A>>>=7;X[ni]=A}function g(A,X){this.len=A,this.next=void 0,this.val=X}g.prototype=Object.create(d.prototype),g.prototype.fn=h,l.prototype.uint32=function(A){return this.len+=(this.tail=this.tail.next=new g((A=A>>>0)<128?1:A<16384?2:A<2097152?3:A<268435456?4:5,A)).len,this},l.prototype.int32=function(A){return A<0?this._push(y,10,u.fromNumber(A)):this.uint32(A)},l.prototype.sint32=function(A){return this.uint32((A<<1^A>>31)>>>0)};function y(A,X,ni){for(;A.hi;)X[ni++]=A.lo&127|128,A.lo=(A.lo>>>7|A.hi<<25)>>>0,A.hi>>>=7;for(;A.lo>127;)X[ni++]=A.lo&127|128,A.lo=A.lo>>>7;X[ni++]=A.lo}l.prototype.uint64=function(A){var X=u.from(A);return this._push(y,X.length(),X)},l.prototype.int64=l.prototype.uint64,l.prototype.sint64=function(A){var X=u.from(A).zzEncode();return this._push(y,X.length(),X)},l.prototype.bool=function(A){return this._push(c,1,A?1:0)};function C(A,X,ni){X[ni]=A&255,X[ni+1]=A>>>8&255,X[ni+2]=A>>>16&255,X[ni+3]=A>>>24}l.prototype.fixed32=function(A){return this._push(C,4,A>>>0)},l.prototype.sfixed32=l.prototype.fixed32,l.prototype.fixed64=function(A){var X=u.from(A);return this._push(C,4,X.lo)._push(C,4,X.hi)},l.prototype.sfixed64=l.prototype.fixed64,l.prototype.float=function(A){return this._push(r.float.writeFloatLE,4,A)},l.prototype.double=function(A){return this._push(r.float.writeDoubleLE,8,A)};var W=r.Array.prototype.set?function(A,X,ni){X.set(A,ni)}:function(A,X,ni){for(var ii=0;ii<A.length;++ii)X[ni+ii]=A[ii]};l.prototype.bytes=function(A){var X=A.length>>>0;if(!X)return this._push(c,1,0);if(r.isString(A)){var ni=l.alloc(X=n.length(A));n.decode(A,ni,0),A=ni}return this.uint32(X)._push(W,X,A)},l.prototype.string=function(A){var X=a.length(A);return X?this.uint32(X)._push(a.write,X,A):this._push(c,1,0)},l.prototype.fork=function(){return this.states=new i(this),this.head=this.tail=new d(p,0,0),this.len=0,this},l.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new d(p,0,0),this.len=0),this},l.prototype.ldelim=function(){var A=this.head,X=this.tail,ni=this.len;return this.reset().uint32(ni),ni&&(this.tail.next=A.next,this.tail=X,this.len+=ni),this},l.prototype.finish=function(){for(var A=this.head.next,X=this.constructor.alloc(this.len),ni=0;A;)A.fn(A.val,X,ni),ni+=A.len,A=A.next;return X},l._configure=function(A){o=A,l.create=s(),o._configure()}}),mi=Z$1((e,t)=>{t.exports=u;var r=Yr$1();(u.prototype=Object.create(r.prototype)).constructor=u;var o=Gt$2();function u(){r.call(this)}u._configure=function(){u.alloc=o._Buffer_allocUnsafe,u.writeBytesBuffer=o.Buffer&&o.Buffer.prototype instanceof Uint8Array&&o.Buffer.prototype.set.name==="set"?function(a,d,p){d.set(a,p)}:function(a,d,p){if(a.copy)a.copy(d,p,0,a.length);else for(var i=0;i<a.length;)d[p++]=a[i++]}},u.prototype.bytes=function(a){o.isString(a)&&(a=o._Buffer_from(a,"base64"));var d=a.length>>>0;return this.uint32(d),d&&this._push(u.writeBytesBuffer,d,a),this};function n(a,d,p){a.length<40?o.utf8.write(a,d,p):d.utf8Write?d.utf8Write(a,p):d.write(a,p)}u.prototype.string=function(a){var d=o.Buffer.byteLength(a);return this.uint32(d),d&&this._push(n,d,a),this},u._configure()}),en$1=Z$1((e,t)=>{t.exports=d;var r=Gt$2(),o,u=r.LongBits,n=r.utf8;function a(h,g){return RangeError("index out of range: "+h.pos+" + "+(g||1)+" > "+h.len)}function d(h){this.buf=h,this.pos=0,this.len=h.length}var p=typeof Uint8Array<"u"?function(h){if(h instanceof Uint8Array||Array.isArray(h))return new d(h);throw Error("illegal buffer")}:function(h){if(Array.isArray(h))return new d(h);throw Error("illegal buffer")},i=function(){return r.Buffer?function(h){return(d.create=function(g){return r.Buffer.isBuffer(g)?new o(g):p(g)})(h)}:p};d.create=i(),d.prototype._slice=r.Array.prototype.subarray||r.Array.prototype.slice,d.prototype.uint32=function(){var h=4294967295;return function(){if(h=(this.buf[this.pos]&127)>>>0,this.buf[this.pos++]<128||(h=(h|(this.buf[this.pos]&127)<<7)>>>0,this.buf[this.pos++]<128)||(h=(h|(this.buf[this.pos]&127)<<14)>>>0,this.buf[this.pos++]<128)||(h=(h|(this.buf[this.pos]&127)<<21)>>>0,this.buf[this.pos++]<128)||(h=(h|(this.buf[this.pos]&15)<<28)>>>0,this.buf[this.pos++]<128))return h;if((this.pos+=5)>this.len)throw this.pos=this.len,a(this,10);return h}}(),d.prototype.int32=function(){return this.uint32()|0},d.prototype.sint32=function(){var h=this.uint32();return h>>>1^-(h&1)|0};function l(){var h=new u(0,0),g=0;if(this.len-this.pos>4){for(;g<4;++g)if(h.lo=(h.lo|(this.buf[this.pos]&127)<<g*7)>>>0,this.buf[this.pos++]<128)return h;if(h.lo=(h.lo|(this.buf[this.pos]&127)<<28)>>>0,h.hi=(h.hi|(this.buf[this.pos]&127)>>4)>>>0,this.buf[this.pos++]<128)return h;g=0}else{for(;g<3;++g){if(this.pos>=this.len)throw a(this);if(h.lo=(h.lo|(this.buf[this.pos]&127)<<g*7)>>>0,this.buf[this.pos++]<128)return h}return h.lo=(h.lo|(this.buf[this.pos++]&127)<<g*7)>>>0,h}if(this.len-this.pos>4){for(;g<5;++g)if(h.hi=(h.hi|(this.buf[this.pos]&127)<<g*7+3)>>>0,this.buf[this.pos++]<128)return h}else for(;g<5;++g){if(this.pos>=this.len)throw a(this);if(h.hi=(h.hi|(this.buf[this.pos]&127)<<g*7+3)>>>0,this.buf[this.pos++]<128)return h}throw Error("invalid varint encoding")}d.prototype.bool=function(){return this.uint32()!==0};function s(h,g){return(h[g-4]|h[g-3]<<8|h[g-2]<<16|h[g-1]<<24)>>>0}d.prototype.fixed32=function(){if(this.pos+4>this.len)throw a(this,4);return s(this.buf,this.pos+=4)},d.prototype.sfixed32=function(){if(this.pos+4>this.len)throw a(this,4);return s(this.buf,this.pos+=4)|0};function c(){if(this.pos+8>this.len)throw a(this,8);return new u(s(this.buf,this.pos+=4),s(this.buf,this.pos+=4))}d.prototype.float=function(){if(this.pos+4>this.len)throw a(this,4);var h=r.float.readFloatLE(this.buf,this.pos);return this.pos+=4,h},d.prototype.double=function(){if(this.pos+8>this.len)throw a(this,4);var h=r.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,h},d.prototype.bytes=function(){var h=this.uint32(),g=this.pos,y=this.pos+h;if(y>this.len)throw a(this,h);if(this.pos+=h,Array.isArray(this.buf))return this.buf.slice(g,y);if(g===y){var C=r.Buffer;return C?C.alloc(0):new this.buf.constructor(0)}return this._slice.call(this.buf,g,y)},d.prototype.string=function(){var h=this.bytes();return n.read(h,0,h.length)},d.prototype.skip=function(h){if(typeof h=="number"){if(this.pos+h>this.len)throw a(this,h);this.pos+=h}else do if(this.pos>=this.len)throw a(this);while(this.buf[this.pos++]&128);return this},d.prototype.skipType=function(h){switch(h){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;(h=this.uint32()&7)!==4;)this.skipType(h);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+h+" at offset "+this.pos)}return this},d._configure=function(h){o=h,d.create=i(),o._configure();var g=r.Long?"toLong":"toNumber";r.merge(d.prototype,{int64:function(){return l.call(this)[g](!1)},uint64:function(){return l.call(this)[g](!0)},sint64:function(){return l.call(this).zzDecode()[g](!1)},fixed64:function(){return c.call(this)[g](!0)},sfixed64:function(){return c.call(this)[g](!1)}})}}),_i=Z$1((e,t)=>{t.exports=u;var r=en$1();(u.prototype=Object.create(r.prototype)).constructor=u;var o=Gt$2();function u(n){r.call(this,n)}u._configure=function(){o.Buffer&&(u.prototype._slice=o.Buffer.prototype.slice)},u.prototype.string=function(){var n=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+n,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+n,this.len))},u._configure()}),Ai=Z$1((e,t)=>{t.exports=o;var r=Gt$2();(o.prototype=Object.create(r.EventEmitter.prototype)).constructor=o;function o(u,n,a){if(typeof u!="function")throw TypeError("rpcImpl must be a function");r.EventEmitter.call(this),this.rpcImpl=u,this.requestDelimited=!!n,this.responseDelimited=!!a}o.prototype.rpcCall=function u(n,a,d,p,i){if(!p)throw TypeError("request must be specified");var l=this;if(!i)return r.asPromise(u,l,n,a,d,p);if(!l.rpcImpl){setTimeout(function(){i(Error("already ended"))},0);return}try{return l.rpcImpl(n,a[l.requestDelimited?"encodeDelimited":"encode"](p).finish(),function(s,c){if(s)return l.emit("error",s,n),i(s);if(c===null){l.end(!0);return}if(!(c instanceof d))try{c=d[l.responseDelimited?"decodeDelimited":"decode"](c)}catch(h){return l.emit("error",h,n),i(h)}return l.emit("data",c,n),i(null,c)})}catch(s){l.emit("error",s,n),setTimeout(function(){i(s)},0);return}},o.prototype.end=function(u){return this.rpcImpl&&(u||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this}}),Pi=Z$1(e=>{var t=e;t.Service=Ai()}),Di=Z$1((e,t)=>{t.exports={}}),ki=Z$1(e=>{var t=e;t.build="minimal",t.Writer=Yr$1(),t.BufferWriter=mi(),t.Reader=en$1(),t.BufferReader=_i(),t.util=Gt$2(),t.rpc=Pi(),t.roots=Di(),t.configure=r;function r(){t.util._configure(),t.Writer._configure(t.BufferWriter),t.Reader._configure(t.BufferReader)}r()}),Fi=Z$1((e,t)=>{t.exports=ki()}),se$1=Z$1((e,t)=>{var r=Fi(),o=r.Reader,u=r.Writer,n=r.util,a=r.roots.default||(r.roots.default={});a.onnx=function(){var d={};return d.Version=function(){var p={},i=Object.create(p);return i[p[0]="_START_VERSION"]=0,i[p[1]="IR_VERSION_2017_10_10"]=1,i[p[2]="IR_VERSION_2017_10_30"]=2,i[p[3]="IR_VERSION_2017_11_3"]=3,i[p[4]="IR_VERSION_2019_1_22"]=4,i[p[5]="IR_VERSION_2019_3_18"]=5,i[p[6]="IR_VERSION_2019_9_19"]=6,i[p[7]="IR_VERSION_2020_5_8"]=7,i[p[8]="IR_VERSION_2021_7_30"]=8,i[p[9]="IR_VERSION"]=9,i}(),d.AttributeProto=function(){function p(i){if(this.floats=[],this.ints=[],this.strings=[],this.tensors=[],this.graphs=[],this.sparseTensors=[],this.typeProtos=[],i)for(var l=Object.keys(i),s=0;s<l.length;++s)i[l[s]]!=null&&(this[l[s]]=i[l[s]])}return p.prototype.name="",p.prototype.refAttrName="",p.prototype.docString="",p.prototype.type=0,p.prototype.f=0,p.prototype.i=n.Long?n.Long.fromBits(0,0,!1):0,p.prototype.s=n.newBuffer([]),p.prototype.t=null,p.prototype.g=null,p.prototype.sparseTensor=null,p.prototype.tp=null,p.prototype.floats=n.emptyArray,p.prototype.ints=n.emptyArray,p.prototype.strings=n.emptyArray,p.prototype.tensors=n.emptyArray,p.prototype.graphs=n.emptyArray,p.prototype.sparseTensors=n.emptyArray,p.prototype.typeProtos=n.emptyArray,p.create=function(i){return new p(i)},p.encode=function(i,l){if(l||(l=u.create()),i.name!=null&&Object.hasOwnProperty.call(i,"name")&&l.uint32(10).string(i.name),i.f!=null&&Object.hasOwnProperty.call(i,"f")&&l.uint32(21).float(i.f),i.i!=null&&Object.hasOwnProperty.call(i,"i")&&l.uint32(24).int64(i.i),i.s!=null&&Object.hasOwnProperty.call(i,"s")&&l.uint32(34).bytes(i.s),i.t!=null&&Object.hasOwnProperty.call(i,"t")&&a.onnx.TensorProto.encode(i.t,l.uint32(42).fork()).ldelim(),i.g!=null&&Object.hasOwnProperty.call(i,"g")&&a.onnx.GraphProto.encode(i.g,l.uint32(50).fork()).ldelim(),i.floats!=null&&i.floats.length){l.uint32(58).fork();for(var s=0;s<i.floats.length;++s)l.float(i.floats[s]);l.ldelim()}if(i.ints!=null&&i.ints.length){l.uint32(66).fork();for(var s=0;s<i.ints.length;++s)l.int64(i.ints[s]);l.ldelim()}if(i.strings!=null&&i.strings.length)for(var s=0;s<i.strings.length;++s)l.uint32(74).bytes(i.strings[s]);if(i.tensors!=null&&i.tensors.length)for(var s=0;s<i.tensors.length;++s)a.onnx.TensorProto.encode(i.tensors[s],l.uint32(82).fork()).ldelim();if(i.graphs!=null&&i.graphs.length)for(var s=0;s<i.graphs.length;++s)a.onnx.GraphProto.encode(i.graphs[s],l.uint32(90).fork()).ldelim();if(i.docString!=null&&Object.hasOwnProperty.call(i,"docString")&&l.uint32(106).string(i.docString),i.tp!=null&&Object.hasOwnProperty.call(i,"tp")&&a.onnx.TypeProto.encode(i.tp,l.uint32(114).fork()).ldelim(),i.typeProtos!=null&&i.typeProtos.length)for(var s=0;s<i.typeProtos.length;++s)a.onnx.TypeProto.encode(i.typeProtos[s],l.uint32(122).fork()).ldelim();if(i.type!=null&&Object.hasOwnProperty.call(i,"type")&&l.uint32(160).int32(i.type),i.refAttrName!=null&&Object.hasOwnProperty.call(i,"refAttrName")&&l.uint32(170).string(i.refAttrName),i.sparseTensor!=null&&Object.hasOwnProperty.call(i,"sparseTensor")&&a.onnx.SparseTensorProto.encode(i.sparseTensor,l.uint32(178).fork()).ldelim(),i.sparseTensors!=null&&i.sparseTensors.length)for(var s=0;s<i.sparseTensors.length;++s)a.onnx.SparseTensorProto.encode(i.sparseTensors[s],l.uint32(186).fork()).ldelim();return l},p.encodeDelimited=function(i,l){return this.encode(i,l).ldelim()},p.decode=function(i,l){i instanceof o||(i=o.create(i));for(var s=l===void 0?i.len:i.pos+l,c=new a.onnx.AttributeProto;i.pos<s;){var h=i.uint32();switch(h>>>3){case 1:{c.name=i.string();break}case 21:{c.refAttrName=i.string();break}case 13:{c.docString=i.string();break}case 20:{c.type=i.int32();break}case 2:{c.f=i.float();break}case 3:{c.i=i.int64();break}case 4:{c.s=i.bytes();break}case 5:{c.t=a.onnx.TensorProto.decode(i,i.uint32());break}case 6:{c.g=a.onnx.GraphProto.decode(i,i.uint32());break}case 22:{c.sparseTensor=a.onnx.SparseTensorProto.decode(i,i.uint32());break}case 14:{c.tp=a.onnx.TypeProto.decode(i,i.uint32());break}case 7:{if(c.floats&&c.floats.length||(c.floats=[]),(h&7)===2)for(var g=i.uint32()+i.pos;i.pos<g;)c.floats.push(i.float());else c.floats.push(i.float());break}case 8:{if(c.ints&&c.ints.length||(c.ints=[]),(h&7)===2)for(var g=i.uint32()+i.pos;i.pos<g;)c.ints.push(i.int64());else c.ints.push(i.int64());break}case 9:{c.strings&&c.strings.length||(c.strings=[]),c.strings.push(i.bytes());break}case 10:{c.tensors&&c.tensors.length||(c.tensors=[]),c.tensors.push(a.onnx.TensorProto.decode(i,i.uint32()));break}case 11:{c.graphs&&c.graphs.length||(c.graphs=[]),c.graphs.push(a.onnx.GraphProto.decode(i,i.uint32()));break}case 23:{c.sparseTensors&&c.sparseTensors.length||(c.sparseTensors=[]),c.sparseTensors.push(a.onnx.SparseTensorProto.decode(i,i.uint32()));break}case 15:{c.typeProtos&&c.typeProtos.length||(c.typeProtos=[]),c.typeProtos.push(a.onnx.TypeProto.decode(i,i.uint32()));break}default:i.skipType(h&7);break}}return c},p.decodeDelimited=function(i){return i instanceof o||(i=new o(i)),this.decode(i,i.uint32())},p.verify=function(i){if(typeof i!="object"||i===null)return"object expected";if(i.name!=null&&i.hasOwnProperty("name")&&!n.isString(i.name))return"name: string expected";if(i.refAttrName!=null&&i.hasOwnProperty("refAttrName")&&!n.isString(i.refAttrName))return"refAttrName: string expected";if(i.docString!=null&&i.hasOwnProperty("docString")&&!n.isString(i.docString))return"docString: string expected";if(i.type!=null&&i.hasOwnProperty("type"))switch(i.type){default:return"type: enum value expected";case 0:case 1:case 2:case 3:case 4:case 5:case 11:case 13:case 6:case 7:case 8:case 9:case 10:case 12:case 14:break}if(i.f!=null&&i.hasOwnProperty("f")&&typeof i.f!="number")return"f: number expected";if(i.i!=null&&i.hasOwnProperty("i")&&!n.isInteger(i.i)&&!(i.i&&n.isInteger(i.i.low)&&n.isInteger(i.i.high)))return"i: integer|Long expected";if(i.s!=null&&i.hasOwnProperty("s")&&!(i.s&&typeof i.s.length=="number"||n.isString(i.s)))return"s: buffer expected";if(i.t!=null&&i.hasOwnProperty("t")){var l=a.onnx.TensorProto.verify(i.t);if(l)return"t."+l}if(i.g!=null&&i.hasOwnProperty("g")){var l=a.onnx.GraphProto.verify(i.g);if(l)return"g."+l}if(i.sparseTensor!=null&&i.hasOwnProperty("sparseTensor")){var l=a.onnx.SparseTensorProto.verify(i.sparseTensor);if(l)return"sparseTensor."+l}if(i.tp!=null&&i.hasOwnProperty("tp")){var l=a.onnx.TypeProto.verify(i.tp);if(l)return"tp."+l}if(i.floats!=null&&i.hasOwnProperty("floats")){if(!Array.isArray(i.floats))return"floats: array expected";for(var s=0;s<i.floats.length;++s)if(typeof i.floats[s]!="number")return"floats: number[] expected"}if(i.ints!=null&&i.hasOwnProperty("ints")){if(!Array.isArray(i.ints))return"ints: array expected";for(var s=0;s<i.ints.length;++s)if(!n.isInteger(i.ints[s])&&!(i.ints[s]&&n.isInteger(i.ints[s].low)&&n.isInteger(i.ints[s].high)))return"ints: integer|Long[] expected"}if(i.strings!=null&&i.hasOwnProperty("strings")){if(!Array.isArray(i.strings))return"strings: array expected";for(var s=0;s<i.strings.length;++s)if(!(i.strings[s]&&typeof i.strings[s].length=="number"||n.isString(i.strings[s])))return"strings: buffer[] expected"}if(i.tensors!=null&&i.hasOwnProperty("tensors")){if(!Array.isArray(i.tensors))return"tensors: array expected";for(var s=0;s<i.tensors.length;++s){var l=a.onnx.TensorProto.verify(i.tensors[s]);if(l)return"tensors."+l}}if(i.graphs!=null&&i.hasOwnProperty("graphs")){if(!Array.isArray(i.graphs))return"graphs: array expected";for(var s=0;s<i.graphs.length;++s){var l=a.onnx.GraphProto.verify(i.graphs[s]);if(l)return"graphs."+l}}if(i.sparseTensors!=null&&i.hasOwnProperty("sparseTensors")){if(!Array.isArray(i.sparseTensors))return"sparseTensors: array expected";for(var s=0;s<i.sparseTensors.length;++s){var l=a.onnx.SparseTensorProto.verify(i.sparseTensors[s]);if(l)return"sparseTensors."+l}}if(i.typeProtos!=null&&i.hasOwnProperty("typeProtos")){if(!Array.isArray(i.typeProtos))return"typeProtos: array expected";for(var s=0;s<i.typeProtos.length;++s){var l=a.onnx.TypeProto.verify(i.typeProtos[s]);if(l)return"typeProtos."+l}}return null},p.fromObject=function(i){if(i instanceof a.onnx.AttributeProto)return i;var l=new a.onnx.AttributeProto;switch(i.name!=null&&(l.name=String(i.name)),i.refAttrName!=null&&(l.refAttrName=String(i.refAttrName)),i.docString!=null&&(l.docString=String(i.docString)),i.type){default:if(typeof i.type=="number"){l.type=i.type;break}break;case"UNDEFINED":case 0:l.type=0;break;case"FLOAT":case 1:l.type=1;break;case"INT":case 2:l.type=2;break;case"STRING":case 3:l.type=3;break;case"TENSOR":case 4:l.type=4;break;case"GRAPH":case 5:l.type=5;break;case"SPARSE_TENSOR":case 11:l.type=11;break;case"TYPE_PROTO":case 13:l.type=13;break;case"FLOATS":case 6:l.type=6;break;case"INTS":case 7:l.type=7;break;case"STRINGS":case 8:l.type=8;break;case"TENSORS":case 9:l.type=9;break;case"GRAPHS":case 10:l.type=10;break;case"SPARSE_TENSORS":case 12:l.type=12;break;case"TYPE_PROTOS":case 14:l.type=14;break}if(i.f!=null&&(l.f=Number(i.f)),i.i!=null&&(n.Long?(l.i=n.Long.fromValue(i.i)).unsigned=!1:typeof i.i=="string"?l.i=parseInt(i.i,10):typeof i.i=="number"?l.i=i.i:typeof i.i=="object"&&(l.i=new n.LongBits(i.i.low>>>0,i.i.high>>>0).toNumber())),i.s!=null&&(typeof i.s=="string"?n.base64.decode(i.s,l.s=n.newBuffer(n.base64.length(i.s)),0):i.s.length>=0&&(l.s=i.s)),i.t!=null){if(typeof i.t!="object")throw TypeError(".onnx.AttributeProto.t: object expected");l.t=a.onnx.TensorProto.fromObject(i.t)}if(i.g!=null){if(typeof i.g!="object")throw TypeError(".onnx.AttributeProto.g: object expected");l.g=a.onnx.GraphProto.fromObject(i.g)}if(i.sparseTensor!=null){if(typeof i.sparseTensor!="object")throw TypeError(".onnx.AttributeProto.sparseTensor: object expected");l.sparseTensor=a.onnx.SparseTensorProto.fromObject(i.sparseTensor)}if(i.tp!=null){if(typeof i.tp!="object")throw TypeError(".onnx.AttributeProto.tp: object expected");l.tp=a.onnx.TypeProto.fromObject(i.tp)}if(i.floats){if(!Array.isArray(i.floats))throw TypeError(".onnx.AttributeProto.floats: array expected");l.floats=[];for(var s=0;s<i.floats.length;++s)l.floats[s]=Number(i.floats[s])}if(i.ints){if(!Array.isArray(i.ints))throw TypeError(".onnx.AttributeProto.ints: array expected");l.ints=[];for(var s=0;s<i.ints.length;++s)n.Long?(l.ints[s]=n.Long.fromValue(i.ints[s])).unsigned=!1:typeof i.ints[s]=="string"?l.ints[s]=parseInt(i.ints[s],10):typeof i.ints[s]=="number"?l.ints[s]=i.ints[s]:typeof i.ints[s]=="object"&&(l.ints[s]=new n.LongBits(i.ints[s].low>>>0,i.ints[s].high>>>0).toNumber())}if(i.strings){if(!Array.isArray(i.strings))throw TypeError(".onnx.AttributeProto.strings: array expected");l.strings=[];for(var s=0;s<i.strings.length;++s)typeof i.strings[s]=="string"?n.base64.decode(i.strings[s],l.strings[s]=n.newBuffer(n.base64.length(i.strings[s])),0):i.strings[s].length>=0&&(l.strings[s]=i.strings[s])}if(i.tensors){if(!Array.isArray(i.tensors))throw TypeError(".onnx.AttributeProto.tensors: array expected");l.tensors=[];for(var s=0;s<i.tensors.length;++s){if(typeof i.tensors[s]!="object")throw TypeError(".onnx.AttributeProto.tensors: object expected");l.tensors[s]=a.onnx.TensorProto.fromObject(i.tensors[s])}}if(i.graphs){if(!Array.isArray(i.graphs))throw TypeError(".onnx.AttributeProto.graphs: array expected");l.graphs=[];for(var s=0;s<i.graphs.length;++s){if(typeof i.graphs[s]!="object")throw TypeError(".onnx.AttributeProto.graphs: object expected");l.graphs[s]=a.onnx.GraphProto.fromObject(i.graphs[s])}}if(i.sparseTensors){if(!Array.isArray(i.sparseTensors))throw TypeError(".onnx.AttributeProto.sparseTensors: array expected");l.sparseTensors=[];for(var s=0;s<i.sparseTensors.length;++s){if(typeof i.sparseTensors[s]!="object")throw TypeError(".onnx.AttributeProto.sparseTensors: object expected");l.sparseTensors[s]=a.onnx.SparseTensorProto.fromObject(i.sparseTensors[s])}}if(i.typeProtos){if(!Array.isArray(i.typeProtos))throw TypeError(".onnx.AttributeProto.typeProtos: array expected");l.typeProtos=[];for(var s=0;s<i.typeProtos.length;++s){if(typeof i.typeProtos[s]!="object")throw TypeError(".onnx.AttributeProto.typeProtos: object expected");l.typeProtos[s]=a.onnx.TypeProto.fromObject(i.typeProtos[s])}}return l},p.toObject=function(i,l){l||(l={});var s={};if((l.arrays||l.defaults)&&(s.floats=[],s.ints=[],s.strings=[],s.tensors=[],s.graphs=[],s.typeProtos=[],s.sparseTensors=[]),l.defaults){if(s.name="",s.f=0,n.Long){var c=new n.Long(0,0,!1);s.i=l.longs===String?c.toString():l.longs===Number?c.toNumber():c}else s.i=l.longs===String?"0":0;l.bytes===String?s.s="":(s.s=[],l.bytes!==Array&&(s.s=n.newBuffer(s.s))),s.t=null,s.g=null,s.docString="",s.tp=null,s.type=l.enums===String?"UNDEFINED":0,s.refAttrName="",s.sparseTensor=null}if(i.name!=null&&i.hasOwnProperty("name")&&(s.name=i.name),i.f!=null&&i.hasOwnProperty("f")&&(s.f=l.json&&!isFinite(i.f)?String(i.f):i.f),i.i!=null&&i.hasOwnProperty("i")&&(typeof i.i=="number"?s.i=l.longs===String?String(i.i):i.i:s.i=l.longs===String?n.Long.prototype.toString.call(i.i):l.longs===Number?new n.LongBits(i.i.low>>>0,i.i.high>>>0).toNumber():i.i),i.s!=null&&i.hasOwnProperty("s")&&(s.s=l.bytes===String?n.base64.encode(i.s,0,i.s.length):l.bytes===Array?Array.prototype.slice.call(i.s):i.s),i.t!=null&&i.hasOwnProperty("t")&&(s.t=a.onnx.TensorProto.toObject(i.t,l)),i.g!=null&&i.hasOwnProperty("g")&&(s.g=a.onnx.GraphProto.toObject(i.g,l)),i.floats&&i.floats.length){s.floats=[];for(var h=0;h<i.floats.length;++h)s.floats[h]=l.json&&!isFinite(i.floats[h])?String(i.floats[h]):i.floats[h]}if(i.ints&&i.ints.length){s.ints=[];for(var h=0;h<i.ints.length;++h)typeof i.ints[h]=="number"?s.ints[h]=l.longs===String?String(i.ints[h]):i.ints[h]:s.ints[h]=l.longs===String?n.Long.prototype.toString.call(i.ints[h]):l.longs===Number?new n.LongBits(i.ints[h].low>>>0,i.ints[h].high>>>0).toNumber():i.ints[h]}if(i.strings&&i.strings.length){s.strings=[];for(var h=0;h<i.strings.length;++h)s.strings[h]=l.bytes===String?n.base64.encode(i.strings[h],0,i.strings[h].length):l.bytes===Array?Array.prototype.slice.call(i.strings[h]):i.strings[h]}if(i.tensors&&i.tensors.length){s.tensors=[];for(var h=0;h<i.tensors.length;++h)s.tensors[h]=a.onnx.TensorProto.toObject(i.tensors[h],l)}if(i.graphs&&i.graphs.length){s.graphs=[];for(var h=0;h<i.graphs.length;++h)s.graphs[h]=a.onnx.GraphProto.toObject(i.graphs[h],l)}if(i.docString!=null&&i.hasOwnProperty("docString")&&(s.docString=i.docString),i.tp!=null&&i.hasOwnProperty("tp")&&(s.tp=a.onnx.TypeProto.toObject(i.tp,l)),i.typeProtos&&i.typeProtos.length){s.typeProtos=[];for(var h=0;h<i.typeProtos.length;++h)s.typeProtos[h]=a.onnx.TypeProto.toObject(i.typeProtos[h],l)}if(i.type!=null&&i.hasOwnProperty("type")&&(s.type=l.enums===String?a.onnx.AttributeProto.AttributeType[i.type]===void 0?i.type:a.onnx.AttributeProto.AttributeType[i.type]:i.type),i.refAttrName!=null&&i.hasOwnProperty("refAttrName")&&(s.refAttrName=i.refAttrName),i.sparseTensor!=null&&i.hasOwnProperty("sparseTensor")&&(s.sparseTensor=a.onnx.SparseTensorProto.toObject(i.sparseTensor,l)),i.sparseTensors&&i.sparseTensors.length){s.sparseTensors=[];for(var h=0;h<i.sparseTensors.length;++h)s.sparseTensors[h]=a.onnx.SparseTensorProto.toObject(i.sparseTensors[h],l)}return s},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.AttributeProto"},p.AttributeType=function(){var i={},l=Object.create(i);return l[i[0]="UNDEFINED"]=0,l[i[1]="FLOAT"]=1,l[i[2]="INT"]=2,l[i[3]="STRING"]=3,l[i[4]="TENSOR"]=4,l[i[5]="GRAPH"]=5,l[i[11]="SPARSE_TENSOR"]=11,l[i[13]="TYPE_PROTO"]=13,l[i[6]="FLOATS"]=6,l[i[7]="INTS"]=7,l[i[8]="STRINGS"]=8,l[i[9]="TENSORS"]=9,l[i[10]="GRAPHS"]=10,l[i[12]="SPARSE_TENSORS"]=12,l[i[14]="TYPE_PROTOS"]=14,l}(),p}(),d.ValueInfoProto=function(){function p(i){if(i)for(var l=Object.keys(i),s=0;s<l.length;++s)i[l[s]]!=null&&(this[l[s]]=i[l[s]])}return p.prototype.name="",p.prototype.type=null,p.prototype.docString="",p.create=function(i){return new p(i)},p.encode=function(i,l){return l||(l=u.create()),i.name!=null&&Object.hasOwnProperty.call(i,"name")&&l.uint32(10).string(i.name),i.type!=null&&Object.hasOwnProperty.call(i,"type")&&a.onnx.TypeProto.encode(i.type,l.uint32(18).fork()).ldelim(),i.docString!=null&&Object.hasOwnProperty.call(i,"docString")&&l.uint32(26).string(i.docString),l},p.encodeDelimited=function(i,l){return this.encode(i,l).ldelim()},p.decode=function(i,l){i instanceof o||(i=o.create(i));for(var s=l===void 0?i.len:i.pos+l,c=new a.onnx.ValueInfoProto;i.pos<s;){var h=i.uint32();switch(h>>>3){case 1:{c.name=i.string();break}case 2:{c.type=a.onnx.TypeProto.decode(i,i.uint32());break}case 3:{c.docString=i.string();break}default:i.skipType(h&7);break}}return c},p.decodeDelimited=function(i){return i instanceof o||(i=new o(i)),this.decode(i,i.uint32())},p.verify=function(i){if(typeof i!="object"||i===null)return"object expected";if(i.name!=null&&i.hasOwnProperty("name")&&!n.isString(i.name))return"name: string expected";if(i.type!=null&&i.hasOwnProperty("type")){var l=a.onnx.TypeProto.verify(i.type);if(l)return"type."+l}return i.docString!=null&&i.hasOwnProperty("docString")&&!n.isString(i.docString)?"docString: string expected":null},p.fromObject=function(i){if(i instanceof a.onnx.ValueInfoProto)return i;var l=new a.onnx.ValueInfoProto;if(i.name!=null&&(l.name=String(i.name)),i.type!=null){if(typeof i.type!="object")throw TypeError(".onnx.ValueInfoProto.type: object expected");l.type=a.onnx.TypeProto.fromObject(i.type)}return i.docString!=null&&(l.docString=String(i.docString)),l},p.toObject=function(i,l){l||(l={});var s={};return l.defaults&&(s.name="",s.type=null,s.docString=""),i.name!=null&&i.hasOwnProperty("name")&&(s.name=i.name),i.type!=null&&i.hasOwnProperty("type")&&(s.type=a.onnx.TypeProto.toObject(i.type,l)),i.docString!=null&&i.hasOwnProperty("docString")&&(s.docString=i.docString),s},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.ValueInfoProto"},p}(),d.NodeProto=function(){function p(i){if(this.input=[],this.output=[],this.attribute=[],i)for(var l=Object.keys(i),s=0;s<l.length;++s)i[l[s]]!=null&&(this[l[s]]=i[l[s]])}return p.prototype.input=n.emptyArray,p.prototype.output=n.emptyArray,p.prototype.name="",p.prototype.opType="",p.prototype.domain="",p.prototype.attribute=n.emptyArray,p.prototype.docString="",p.create=function(i){return new p(i)},p.encode=function(i,l){if(l||(l=u.create()),i.input!=null&&i.input.length)for(var s=0;s<i.input.length;++s)l.uint32(10).string(i.input[s]);if(i.output!=null&&i.output.length)for(var s=0;s<i.output.length;++s)l.uint32(18).string(i.output[s]);if(i.name!=null&&Object.hasOwnProperty.call(i,"name")&&l.uint32(26).string(i.name),i.opType!=null&&Object.hasOwnProperty.call(i,"opType")&&l.uint32(34).string(i.opType),i.attribute!=null&&i.attribute.length)for(var s=0;s<i.attribute.length;++s)a.onnx.AttributeProto.encode(i.attribute[s],l.uint32(42).fork()).ldelim();return i.docString!=null&&Object.hasOwnProperty.call(i,"docString")&&l.uint32(50).string(i.docString),i.domain!=null&&Object.hasOwnProperty.call(i,"domain")&&l.uint32(58).string(i.domain),l},p.encodeDelimited=function(i,l){return this.encode(i,l).ldelim()},p.decode=function(i,l){i instanceof o||(i=o.create(i));for(var s=l===void 0?i.len:i.pos+l,c=new a.onnx.NodeProto;i.pos<s;){var h=i.uint32();switch(h>>>3){case 1:{c.input&&c.input.length||(c.input=[]),c.input.push(i.string());break}case 2:{c.output&&c.output.length||(c.output=[]),c.output.push(i.string());break}case 3:{c.name=i.string();break}case 4:{c.opType=i.string();break}case 7:{c.domain=i.string();break}case 5:{c.attribute&&c.attribute.length||(c.attribute=[]),c.attribute.push(a.onnx.AttributeProto.decode(i,i.uint32()));break}case 6:{c.docString=i.string();break}default:i.skipType(h&7);break}}return c},p.decodeDelimited=function(i){return i instanceof o||(i=new o(i)),this.decode(i,i.uint32())},p.verify=function(i){if(typeof i!="object"||i===null)return"object expected";if(i.input!=null&&i.hasOwnProperty("input")){if(!Array.isArray(i.input))return"input: array expected";for(var l=0;l<i.input.length;++l)if(!n.isString(i.input[l]))return"input: string[] expected"}if(i.output!=null&&i.hasOwnProperty("output")){if(!Array.isArray(i.output))return"output: array expected";for(var l=0;l<i.output.length;++l)if(!n.isString(i.output[l]))return"output: string[] expected"}if(i.name!=null&&i.hasOwnProperty("name")&&!n.isString(i.name))return"name: string expected";if(i.opType!=null&&i.hasOwnProperty("opType")&&!n.isString(i.opType))return"opType: string expected";if(i.domain!=null&&i.hasOwnProperty("domain")&&!n.isString(i.domain))return"domain: string expected";if(i.attribute!=null&&i.hasOwnProperty("attribute")){if(!Array.isArray(i.attribute))return"attribute: array expected";for(var l=0;l<i.attribute.length;++l){var s=a.onnx.AttributeProto.verify(i.attribute[l]);if(s)return"attribute."+s}}return i.docString!=null&&i.hasOwnProperty("docString")&&!n.isString(i.docString)?"docString: string expected":null},p.fromObject=function(i){if(i instanceof a.onnx.NodeProto)return i;var l=new a.onnx.NodeProto;if(i.input){if(!Array.isArray(i.input))throw TypeError(".onnx.NodeProto.input: array expected");l.input=[];for(var s=0;s<i.input.length;++s)l.input[s]=String(i.input[s])}if(i.output){if(!Array.isArray(i.output))throw TypeError(".onnx.NodeProto.output: array expected");l.output=[];for(var s=0;s<i.output.length;++s)l.output[s]=String(i.output[s])}if(i.name!=null&&(l.name=String(i.name)),i.opType!=null&&(l.opType=String(i.opType)),i.domain!=null&&(l.domain=String(i.domain)),i.attribute){if(!Array.isArray(i.attribute))throw TypeError(".onnx.NodeProto.attribute: array expected");l.attribute=[];for(var s=0;s<i.attribute.length;++s){if(typeof i.attribute[s]!="object")throw TypeError(".onnx.NodeProto.attribute: object expected");l.attribute[s]=a.onnx.AttributeProto.fromObject(i.attribute[s])}}return i.docString!=null&&(l.docString=String(i.docString)),l},p.toObject=function(i,l){l||(l={});var s={};if((l.arrays||l.defaults)&&(s.input=[],s.output=[],s.attribute=[]),l.defaults&&(s.name="",s.opType="",s.docString="",s.domain=""),i.input&&i.input.length){s.input=[];for(var c=0;c<i.input.length;++c)s.input[c]=i.input[c]}if(i.output&&i.output.length){s.output=[];for(var c=0;c<i.output.length;++c)s.output[c]=i.output[c]}if(i.name!=null&&i.hasOwnProperty("name")&&(s.name=i.name),i.opType!=null&&i.hasOwnProperty("opType")&&(s.opType=i.opType),i.attribute&&i.attribute.length){s.attribute=[];for(var c=0;c<i.attribute.length;++c)s.attribute[c]=a.onnx.AttributeProto.toObject(i.attribute[c],l)}return i.docString!=null&&i.hasOwnProperty("docString")&&(s.docString=i.docString),i.domain!=null&&i.hasOwnProperty("domain")&&(s.domain=i.domain),s},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.NodeProto"},p}(),d.TrainingInfoProto=function(){function p(i){if(this.initializationBinding=[],this.updateBinding=[],i)for(var l=Object.keys(i),s=0;s<l.length;++s)i[l[s]]!=null&&(this[l[s]]=i[l[s]])}return p.prototype.initialization=null,p.prototype.algorithm=null,p.prototype.initializationBinding=n.emptyArray,p.prototype.updateBinding=n.emptyArray,p.create=function(i){return new p(i)},p.encode=function(i,l){if(l||(l=u.create()),i.initialization!=null&&Object.hasOwnProperty.call(i,"initialization")&&a.onnx.GraphProto.encode(i.initialization,l.uint32(10).fork()).ldelim(),i.algorithm!=null&&Object.hasOwnProperty.call(i,"algorithm")&&a.onnx.GraphProto.encode(i.algorithm,l.uint32(18).fork()).ldelim(),i.initializationBinding!=null&&i.initializationBinding.length)for(var s=0;s<i.initializationBinding.length;++s)a.onnx.StringStringEntryProto.encode(i.initializationBinding[s],l.uint32(26).fork()).ldelim();if(i.updateBinding!=null&&i.updateBinding.length)for(var s=0;s<i.updateBinding.length;++s)a.onnx.StringStringEntryProto.encode(i.updateBinding[s],l.uint32(34).fork()).ldelim();return l},p.encodeDelimited=function(i,l){return this.encode(i,l).ldelim()},p.decode=function(i,l){i instanceof o||(i=o.create(i));for(var s=l===void 0?i.len:i.pos+l,c=new a.onnx.TrainingInfoProto;i.pos<s;){var h=i.uint32();switch(h>>>3){case 1:{c.initialization=a.onnx.GraphProto.decode(i,i.uint32());break}case 2:{c.algorithm=a.onnx.GraphProto.decode(i,i.uint32());break}case 3:{c.initializationBinding&&c.initializationBinding.length||(c.initializationBinding=[]),c.initializationBinding.push(a.onnx.StringStringEntryProto.decode(i,i.uint32()));break}case 4:{c.updateBinding&&c.updateBinding.length||(c.updateBinding=[]),c.updateBinding.push(a.onnx.StringStringEntryProto.decode(i,i.uint32()));break}default:i.skipType(h&7);break}}return c},p.decodeDelimited=function(i){return i instanceof o||(i=new o(i)),this.decode(i,i.uint32())},p.verify=function(i){if(typeof i!="object"||i===null)return"object expected";if(i.initialization!=null&&i.hasOwnProperty("initialization")){var l=a.onnx.GraphProto.verify(i.initialization);if(l)return"initialization."+l}if(i.algorithm!=null&&i.hasOwnProperty("algorithm")){var l=a.onnx.GraphProto.verify(i.algorithm);if(l)return"algorithm."+l}if(i.initializationBinding!=null&&i.hasOwnProperty("initializationBinding")){if(!Array.isArray(i.initializationBinding))return"initializationBinding: array expected";for(var s=0;s<i.initializationBinding.length;++s){var l=a.onnx.StringStringEntryProto.verify(i.initializationBinding[s]);if(l)return"initializationBinding."+l}}if(i.updateBinding!=null&&i.hasOwnProperty("updateBinding")){if(!Array.isArray(i.updateBinding))return"updateBinding: array expected";for(var s=0;s<i.updateBinding.length;++s){var l=a.onnx.StringStringEntryProto.verify(i.updateBinding[s]);if(l)return"updateBinding."+l}}return null},p.fromObject=function(i){if(i instanceof a.onnx.TrainingInfoProto)return i;var l=new a.onnx.TrainingInfoProto;if(i.initialization!=null){if(typeof i.initialization!="object")throw TypeError(".onnx.TrainingInfoProto.initialization: object expected");l.initialization=a.onnx.GraphProto.fromObject(i.initialization)}if(i.algorithm!=null){if(typeof i.algorithm!="object")throw TypeError(".onnx.TrainingInfoProto.algorithm: object expected");l.algorithm=a.onnx.GraphProto.fromObject(i.algorithm)}if(i.initializationBinding){if(!Array.isArray(i.initializationBinding))throw TypeError(".onnx.TrainingInfoProto.initializationBinding: array expected");l.initializationBinding=[];for(var s=0;s<i.initializationBinding.length;++s){if(typeof i.initializationBinding[s]!="object")throw TypeError(".onnx.TrainingInfoProto.initializationBinding: object expected");l.initializationBinding[s]=a.onnx.StringStringEntryProto.fromObject(i.initializationBinding[s])}}if(i.updateBinding){if(!Array.isArray(i.updateBinding))throw TypeError(".onnx.TrainingInfoProto.updateBinding: array expected");l.updateBinding=[];for(var s=0;s<i.updateBinding.length;++s){if(typeof i.updateBinding[s]!="object")throw TypeError(".onnx.TrainingInfoProto.updateBinding: object expected");l.updateBinding[s]=a.onnx.StringStringEntryProto.fromObject(i.updateBinding[s])}}return l},p.toObject=function(i,l){l||(l={});var s={};if((l.arrays||l.defaults)&&(s.initializationBinding=[],s.updateBinding=[]),l.defaults&&(s.initialization=null,s.algorithm=null),i.initialization!=null&&i.hasOwnProperty("initialization")&&(s.initialization=a.onnx.GraphProto.toObject(i.initialization,l)),i.algorithm!=null&&i.hasOwnProperty("algorithm")&&(s.algorithm=a.onnx.GraphProto.toObject(i.algorithm,l)),i.initializationBinding&&i.initializationBinding.length){s.initializationBinding=[];for(var c=0;c<i.initializationBinding.length;++c)s.initializationBinding[c]=a.onnx.StringStringEntryProto.toObject(i.initializationBinding[c],l)}if(i.updateBinding&&i.updateBinding.length){s.updateBinding=[];for(var c=0;c<i.updateBinding.length;++c)s.updateBinding[c]=a.onnx.StringStringEntryProto.toObject(i.updateBinding[c],l)}return s},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.TrainingInfoProto"},p}(),d.ModelProto=function(){function p(i){if(this.opsetImport=[],this.metadataProps=[],this.trainingInfo=[],this.functions=[],i)for(var l=Object.keys(i),s=0;s<l.length;++s)i[l[s]]!=null&&(this[l[s]]=i[l[s]])}return p.prototype.irVersion=n.Long?n.Long.fromBits(0,0,!1):0,p.prototype.opsetImport=n.emptyArray,p.prototype.producerName="",p.prototype.producerVersion="",p.prototype.domain="",p.prototype.modelVersion=n.Long?n.Long.fromBits(0,0,!1):0,p.prototype.docString="",p.prototype.graph=null,p.prototype.metadataProps=n.emptyArray,p.prototype.trainingInfo=n.emptyArray,p.prototype.functions=n.emptyArray,p.create=function(i){return new p(i)},p.encode=function(i,l){if(l||(l=u.create()),i.irVersion!=null&&Object.hasOwnProperty.call(i,"irVersion")&&l.uint32(8).int64(i.irVersion),i.producerName!=null&&Object.hasOwnProperty.call(i,"producerName")&&l.uint32(18).string(i.producerName),i.producerVersion!=null&&Object.hasOwnProperty.call(i,"producerVersion")&&l.uint32(26).string(i.producerVersion),i.domain!=null&&Object.hasOwnProperty.call(i,"domain")&&l.uint32(34).string(i.domain),i.modelVersion!=null&&Object.hasOwnProperty.call(i,"modelVersion")&&l.uint32(40).int64(i.modelVersion),i.docString!=null&&Object.hasOwnProperty.call(i,"docString")&&l.uint32(50).string(i.docString),i.graph!=null&&Object.hasOwnProperty.call(i,"graph")&&a.onnx.GraphProto.encode(i.graph,l.uint32(58).fork()).ldelim(),i.opsetImport!=null&&i.opsetImport.length)for(var s=0;s<i.opsetImport.length;++s)a.onnx.OperatorSetIdProto.encode(i.opsetImport[s],l.uint32(66).fork()).ldelim();if(i.metadataProps!=null&&i.metadataProps.length)for(var s=0;s<i.metadataProps.length;++s)a.onnx.StringStringEntryProto.encode(i.metadataProps[s],l.uint32(114).fork()).ldelim();if(i.trainingInfo!=null&&i.trainingInfo.length)for(var s=0;s<i.trainingInfo.length;++s)a.onnx.TrainingInfoProto.encode(i.trainingInfo[s],l.uint32(162).fork()).ldelim();if(i.functions!=null&&i.functions.length)for(var s=0;s<i.functions.length;++s)a.onnx.FunctionProto.encode(i.functions[s],l.uint32(202).fork()).ldelim();return l},p.encodeDelimited=function(i,l){return this.encode(i,l).ldelim()},p.decode=function(i,l){i instanceof o||(i=o.create(i));for(var s=l===void 0?i.len:i.pos+l,c=new a.onnx.ModelProto;i.pos<s;){var h=i.uint32();switch(h>>>3){case 1:{c.irVersion=i.int64();break}case 8:{c.opsetImport&&c.opsetImport.length||(c.opsetImport=[]),c.opsetImport.push(a.onnx.OperatorSetIdProto.decode(i,i.uint32()));break}case 2:{c.producerName=i.string();break}case 3:{c.producerVersion=i.string();break}case 4:{c.domain=i.string();break}case 5:{c.modelVersion=i.int64();break}case 6:{c.docString=i.string();break}case 7:{c.graph=a.onnx.GraphProto.decode(i,i.uint32());break}case 14:{c.metadataProps&&c.metadataProps.length||(c.metadataProps=[]),c.metadataProps.push(a.onnx.StringStringEntryProto.decode(i,i.uint32()));break}case 20:{c.trainingInfo&&c.trainingInfo.length||(c.trainingInfo=[]),c.trainingInfo.push(a.onnx.TrainingInfoProto.decode(i,i.uint32()));break}case 25:{c.functions&&c.functions.length||(c.functions=[]),c.functions.push(a.onnx.FunctionProto.decode(i,i.uint32()));break}default:i.skipType(h&7);break}}return c},p.decodeDelimited=function(i){return i instanceof o||(i=new o(i)),this.decode(i,i.uint32())},p.verify=function(i){if(typeof i!="object"||i===null)return"object expected";if(i.irVersion!=null&&i.hasOwnProperty("irVersion")&&!n.isInteger(i.irVersion)&&!(i.irVersion&&n.isInteger(i.irVersion.low)&&n.isInteger(i.irVersion.high)))return"irVersion: integer|Long expected";if(i.opsetImport!=null&&i.hasOwnProperty("opsetImport")){if(!Array.isArray(i.opsetImport))return"opsetImport: array expected";for(var l=0;l<i.opsetImport.length;++l){var s=a.onnx.OperatorSetIdProto.verify(i.opsetImport[l]);if(s)return"opsetImport."+s}}if(i.producerName!=null&&i.hasOwnProperty("producerName")&&!n.isString(i.producerName))return"producerName: string expected";if(i.producerVersion!=null&&i.hasOwnProperty("producerVersion")&&!n.isString(i.producerVersion))return"producerVersion: string expected";if(i.domain!=null&&i.hasOwnProperty("domain")&&!n.isString(i.domain))return"domain: string expected";if(i.modelVersion!=null&&i.hasOwnProperty("modelVersion")&&!n.isInteger(i.modelVersion)&&!(i.modelVersion&&n.isInteger(i.modelVersion.low)&&n.isInteger(i.modelVersion.high)))return"modelVersion: integer|Long expected";if(i.docString!=null&&i.hasOwnProperty("docString")&&!n.isString(i.docString))return"docString: string expected";if(i.graph!=null&&i.hasOwnProperty("graph")){var s=a.onnx.GraphProto.verify(i.graph);if(s)return"graph."+s}if(i.metadataProps!=null&&i.hasOwnProperty("metadataProps")){if(!Array.isArray(i.metadataProps))return"metadataProps: array expected";for(var l=0;l<i.metadataProps.length;++l){var s=a.onnx.StringStringEntryProto.verify(i.metadataProps[l]);if(s)return"metadataProps."+s}}if(i.trainingInfo!=null&&i.hasOwnProperty("trainingInfo")){if(!Array.isArray(i.trainingInfo))return"trainingInfo: array expected";for(var l=0;l<i.trainingInfo.length;++l){var s=a.onnx.TrainingInfoProto.verify(i.trainingInfo[l]);if(s)return"trainingInfo."+s}}if(i.functions!=null&&i.hasOwnProperty("functions")){if(!Array.isArray(i.functions))return"functions: array expected";for(var l=0;l<i.functions.length;++l){var s=a.onnx.FunctionProto.verify(i.functions[l]);if(s)return"functions."+s}}return null},p.fromObject=function(i){if(i instanceof a.onnx.ModelProto)return i;var l=new a.onnx.ModelProto;if(i.irVersion!=null&&(n.Long?(l.irVersion=n.Long.fromValue(i.irVersion)).unsigned=!1:typeof i.irVersion=="string"?l.irVersion=parseInt(i.irVersion,10):typeof i.irVersion=="number"?l.irVersion=i.irVersion:typeof i.irVersion=="object"&&(l.irVersion=new n.LongBits(i.irVersion.low>>>0,i.irVersion.high>>>0).toNumber())),i.opsetImport){if(!Array.isArray(i.opsetImport))throw TypeError(".onnx.ModelProto.opsetImport: array expected");l.opsetImport=[];for(var s=0;s<i.opsetImport.length;++s){if(typeof i.opsetImport[s]!="object")throw TypeError(".onnx.ModelProto.opsetImport: object expected");l.opsetImport[s]=a.onnx.OperatorSetIdProto.fromObject(i.opsetImport[s])}}if(i.producerName!=null&&(l.producerName=String(i.producerName)),i.producerVersion!=null&&(l.producerVersion=String(i.producerVersion)),i.domain!=null&&(l.domain=String(i.domain)),i.modelVersion!=null&&(n.Long?(l.modelVersion=n.Long.fromValue(i.modelVersion)).unsigned=!1:typeof i.modelVersion=="string"?l.modelVersion=parseInt(i.modelVersion,10):typeof i.modelVersion=="number"?l.modelVersion=i.modelVersion:typeof i.modelVersion=="object"&&(l.modelVersion=new n.LongBits(i.modelVersion.low>>>0,i.modelVersion.high>>>0).toNumber())),i.docString!=null&&(l.docString=String(i.docString)),i.graph!=null){if(typeof i.graph!="object")throw TypeError(".onnx.ModelProto.graph: object expected");l.graph=a.onnx.GraphProto.fromObject(i.graph)}if(i.metadataProps){if(!Array.isArray(i.metadataProps))throw TypeError(".onnx.ModelProto.metadataProps: array expected");l.metadataProps=[];for(var s=0;s<i.metadataProps.length;++s){if(typeof i.metadataProps[s]!="object")throw TypeError(".onnx.ModelProto.metadataProps: object expected");l.metadataProps[s]=a.onnx.StringStringEntryProto.fromObject(i.metadataProps[s])}}if(i.trainingInfo){if(!Array.isArray(i.trainingInfo))throw TypeError(".onnx.ModelProto.trainingInfo: array expected");l.trainingInfo=[];for(var s=0;s<i.trainingInfo.length;++s){if(typeof i.trainingInfo[s]!="object")throw TypeError(".onnx.ModelProto.trainingInfo: object expected");l.trainingInfo[s]=a.onnx.TrainingInfoProto.fromObject(i.trainingInfo[s])}}if(i.functions){if(!Array.isArray(i.functions))throw TypeError(".onnx.ModelProto.functions: array expected");l.functions=[];for(var s=0;s<i.functions.length;++s){if(typeof i.functions[s]!="object")throw TypeError(".onnx.ModelProto.functions: object expected");l.functions[s]=a.onnx.FunctionProto.fromObject(i.functions[s])}}return l},p.toObject=function(i,l){l||(l={});var s={};if((l.arrays||l.defaults)&&(s.opsetImport=[],s.metadataProps=[],s.trainingInfo=[],s.functions=[]),l.defaults){if(n.Long){var c=new n.Long(0,0,!1);s.irVersion=l.longs===String?c.toString():l.longs===Number?c.toNumber():c}else s.irVersion=l.longs===String?"0":0;if(s.producerName="",s.producerVersion="",s.domain="",n.Long){var c=new n.Long(0,0,!1);s.modelVersion=l.longs===String?c.toString():l.longs===Number?c.toNumber():c}else s.modelVersion=l.longs===String?"0":0;s.docString="",s.graph=null}if(i.irVersion!=null&&i.hasOwnProperty("irVersion")&&(typeof i.irVersion=="number"?s.irVersion=l.longs===String?String(i.irVersion):i.irVersion:s.irVersion=l.longs===String?n.Long.prototype.toString.call(i.irVersion):l.longs===Number?new n.LongBits(i.irVersion.low>>>0,i.irVersion.high>>>0).toNumber():i.irVersion),i.producerName!=null&&i.hasOwnProperty("producerName")&&(s.producerName=i.producerName),i.producerVersion!=null&&i.hasOwnProperty("producerVersion")&&(s.producerVersion=i.producerVersion),i.domain!=null&&i.hasOwnProperty("domain")&&(s.domain=i.domain),i.modelVersion!=null&&i.hasOwnProperty("modelVersion")&&(typeof i.modelVersion=="number"?s.modelVersion=l.longs===String?String(i.modelVersion):i.modelVersion:s.modelVersion=l.longs===String?n.Long.prototype.toString.call(i.modelVersion):l.longs===Number?new n.LongBits(i.modelVersion.low>>>0,i.modelVersion.high>>>0).toNumber():i.modelVersion),i.docString!=null&&i.hasOwnProperty("docString")&&(s.docString=i.docString),i.graph!=null&&i.hasOwnProperty("graph")&&(s.graph=a.onnx.GraphProto.toObject(i.graph,l)),i.opsetImport&&i.opsetImport.length){s.opsetImport=[];for(var h=0;h<i.opsetImport.length;++h)s.opsetImport[h]=a.onnx.OperatorSetIdProto.toObject(i.opsetImport[h],l)}if(i.metadataProps&&i.metadataProps.length){s.metadataProps=[];for(var h=0;h<i.metadataProps.length;++h)s.metadataProps[h]=a.onnx.StringStringEntryProto.toObject(i.metadataProps[h],l)}if(i.trainingInfo&&i.trainingInfo.length){s.trainingInfo=[];for(var h=0;h<i.trainingInfo.length;++h)s.trainingInfo[h]=a.onnx.TrainingInfoProto.toObject(i.trainingInfo[h],l)}if(i.functions&&i.functions.length){s.functions=[];for(var h=0;h<i.functions.length;++h)s.functions[h]=a.onnx.FunctionProto.toObject(i.functions[h],l)}return s},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.ModelProto"},p}(),d.StringStringEntryProto=function(){function p(i){if(i)for(var l=Object.keys(i),s=0;s<l.length;++s)i[l[s]]!=null&&(this[l[s]]=i[l[s]])}return p.prototype.key="",p.prototype.value="",p.create=function(i){return new p(i)},p.encode=function(i,l){return l||(l=u.create()),i.key!=null&&Object.hasOwnProperty.call(i,"key")&&l.uint32(10).string(i.key),i.value!=null&&Object.hasOwnProperty.call(i,"value")&&l.uint32(18).string(i.value),l},p.encodeDelimited=function(i,l){return this.encode(i,l).ldelim()},p.decode=function(i,l){i instanceof o||(i=o.create(i));for(var s=l===void 0?i.len:i.pos+l,c=new a.onnx.StringStringEntryProto;i.pos<s;){var h=i.uint32();switch(h>>>3){case 1:{c.key=i.string();break}case 2:{c.value=i.string();break}default:i.skipType(h&7);break}}return c},p.decodeDelimited=function(i){return i instanceof o||(i=new o(i)),this.decode(i,i.uint32())},p.verify=function(i){return typeof i!="object"||i===null?"object expected":i.key!=null&&i.hasOwnProperty("key")&&!n.isString(i.key)?"key: string expected":i.value!=null&&i.hasOwnProperty("value")&&!n.isString(i.value)?"value: string expected":null},p.fromObject=function(i){if(i instanceof a.onnx.StringStringEntryProto)return i;var l=new a.onnx.StringStringEntryProto;return i.key!=null&&(l.key=String(i.key)),i.value!=null&&(l.value=String(i.value)),l},p.toObject=function(i,l){l||(l={});var s={};return l.defaults&&(s.key="",s.value=""),i.key!=null&&i.hasOwnProperty("key")&&(s.key=i.key),i.value!=null&&i.hasOwnProperty("value")&&(s.value=i.value),s},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.StringStringEntryProto"},p}(),d.TensorAnnotation=function(){function p(i){if(this.quantParameterTensorNames=[],i)for(var l=Object.keys(i),s=0;s<l.length;++s)i[l[s]]!=null&&(this[l[s]]=i[l[s]])}return p.prototype.tensorName="",p.prototype.quantParameterTensorNames=n.emptyArray,p.create=function(i){return new p(i)},p.encode=function(i,l){if(l||(l=u.create()),i.tensorName!=null&&Object.hasOwnProperty.call(i,"tensorName")&&l.uint32(10).string(i.tensorName),i.quantParameterTensorNames!=null&&i.quantParameterTensorNames.length)for(var s=0;s<i.quantParameterTensorNames.length;++s)a.onnx.StringStringEntryProto.encode(i.quantParameterTensorNames[s],l.uint32(18).fork()).ldelim();return l},p.encodeDelimited=function(i,l){return this.encode(i,l).ldelim()},p.decode=function(i,l){i instanceof o||(i=o.create(i));for(var s=l===void 0?i.len:i.pos+l,c=new a.onnx.TensorAnnotation;i.pos<s;){var h=i.uint32();switch(h>>>3){case 1:{c.tensorName=i.string();break}case 2:{c.quantParameterTensorNames&&c.quantParameterTensorNames.length||(c.quantParameterTensorNames=[]),c.quantParameterTensorNames.push(a.onnx.StringStringEntryProto.decode(i,i.uint32()));break}default:i.skipType(h&7);break}}return c},p.decodeDelimited=function(i){return i instanceof o||(i=new o(i)),this.decode(i,i.uint32())},p.verify=function(i){if(typeof i!="object"||i===null)return"object expected";if(i.tensorName!=null&&i.hasOwnProperty("tensorName")&&!n.isString(i.tensorName))return"tensorName: string expected";if(i.quantParameterTensorNames!=null&&i.hasOwnProperty("quantParameterTensorNames")){if(!Array.isArray(i.quantParameterTensorNames))return"quantParameterTensorNames: array expected";for(var l=0;l<i.quantParameterTensorNames.length;++l){var s=a.onnx.StringStringEntryProto.verify(i.quantParameterTensorNames[l]);if(s)return"quantParameterTensorNames."+s}}return null},p.fromObject=function(i){if(i instanceof a.onnx.TensorAnnotation)return i;var l=new a.onnx.TensorAnnotation;if(i.tensorName!=null&&(l.tensorName=String(i.tensorName)),i.quantParameterTensorNames){if(!Array.isArray(i.quantParameterTensorNames))throw TypeError(".onnx.TensorAnnotation.quantParameterTensorNames: array expected");l.quantParameterTensorNames=[];for(var s=0;s<i.quantParameterTensorNames.length;++s){if(typeof i.quantParameterTensorNames[s]!="object")throw TypeError(".onnx.TensorAnnotation.quantParameterTensorNames: object expected");l.quantParameterTensorNames[s]=a.onnx.StringStringEntryProto.fromObject(i.quantParameterTensorNames[s])}}return l},p.toObject=function(i,l){l||(l={});var s={};if((l.arrays||l.defaults)&&(s.quantParameterTensorNames=[]),l.defaults&&(s.tensorName=""),i.tensorName!=null&&i.hasOwnProperty("tensorName")&&(s.tensorName=i.tensorName),i.quantParameterTensorNames&&i.quantParameterTensorNames.length){s.quantParameterTensorNames=[];for(var c=0;c<i.quantParameterTensorNames.length;++c)s.quantParameterTensorNames[c]=a.onnx.StringStringEntryProto.toObject(i.quantParameterTensorNames[c],l)}return s},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.TensorAnnotation"},p}(),d.GraphProto=function(){function p(i){if(this.node=[],this.initializer=[],this.sparseInitializer=[],this.input=[],this.output=[],this.valueInfo=[],this.quantizationAnnotation=[],i)for(var l=Object.keys(i),s=0;s<l.length;++s)i[l[s]]!=null&&(this[l[s]]=i[l[s]])}return p.prototype.node=n.emptyArray,p.prototype.name="",p.prototype.initializer=n.emptyArray,p.prototype.sparseInitializer=n.emptyArray,p.prototype.docString="",p.prototype.input=n.emptyArray,p.prototype.output=n.emptyArray,p.prototype.valueInfo=n.emptyArray,p.prototype.quantizationAnnotation=n.emptyArray,p.create=function(i){return new p(i)},p.encode=function(i,l){if(l||(l=u.create()),i.node!=null&&i.node.length)for(var s=0;s<i.node.length;++s)a.onnx.NodeProto.encode(i.node[s],l.uint32(10).fork()).ldelim();if(i.name!=null&&Object.hasOwnProperty.call(i,"name")&&l.uint32(18).string(i.name),i.initializer!=null&&i.initializer.length)for(var s=0;s<i.initializer.length;++s)a.onnx.TensorProto.encode(i.initializer[s],l.uint32(42).fork()).ldelim();if(i.docString!=null&&Object.hasOwnProperty.call(i,"docString")&&l.uint32(82).string(i.docString),i.input!=null&&i.input.length)for(var s=0;s<i.input.length;++s)a.onnx.ValueInfoProto.encode(i.input[s],l.uint32(90).fork()).ldelim();if(i.output!=null&&i.output.length)for(var s=0;s<i.output.length;++s)a.onnx.ValueInfoProto.encode(i.output[s],l.uint32(98).fork()).ldelim();if(i.valueInfo!=null&&i.valueInfo.length)for(var s=0;s<i.valueInfo.length;++s)a.onnx.ValueInfoProto.encode(i.valueInfo[s],l.uint32(106).fork()).ldelim();if(i.quantizationAnnotation!=null&&i.quantizationAnnotation.length)for(var s=0;s<i.quantizationAnnotation.length;++s)a.onnx.TensorAnnotation.encode(i.quantizationAnnotation[s],l.uint32(114).fork()).ldelim();if(i.sparseInitializer!=null&&i.sparseInitializer.length)for(var s=0;s<i.sparseInitializer.length;++s)a.onnx.SparseTensorProto.encode(i.sparseInitializer[s],l.uint32(122).fork()).ldelim();return l},p.encodeDelimited=function(i,l){return this.encode(i,l).ldelim()},p.decode=function(i,l){i instanceof o||(i=o.create(i));for(var s=l===void 0?i.len:i.pos+l,c=new a.onnx.GraphProto;i.pos<s;){var h=i.uint32();switch(h>>>3){case 1:{c.node&&c.node.length||(c.node=[]),c.node.push(a.onnx.NodeProto.decode(i,i.uint32()));break}case 2:{c.name=i.string();break}case 5:{c.initializer&&c.initializer.length||(c.initializer=[]),c.initializer.push(a.onnx.TensorProto.decode(i,i.uint32()));break}case 15:{c.sparseInitializer&&c.sparseInitializer.length||(c.sparseInitializer=[]),c.sparseInitializer.push(a.onnx.SparseTensorProto.decode(i,i.uint32()));break}case 10:{c.docString=i.string();break}case 11:{c.input&&c.input.length||(c.input=[]),c.input.push(a.onnx.ValueInfoProto.decode(i,i.uint32()));break}case 12:{c.output&&c.output.length||(c.output=[]),c.output.push(a.onnx.ValueInfoProto.decode(i,i.uint32()));break}case 13:{c.valueInfo&&c.valueInfo.length||(c.valueInfo=[]),c.valueInfo.push(a.onnx.ValueInfoProto.decode(i,i.uint32()));break}case 14:{c.quantizationAnnotation&&c.quantizationAnnotation.length||(c.quantizationAnnotation=[]),c.quantizationAnnotation.push(a.onnx.TensorAnnotation.decode(i,i.uint32()));break}default:i.skipType(h&7);break}}return c},p.decodeDelimited=function(i){return i instanceof o||(i=new o(i)),this.decode(i,i.uint32())},p.verify=function(i){if(typeof i!="object"||i===null)return"object expected";if(i.node!=null&&i.hasOwnProperty("node")){if(!Array.isArray(i.node))return"node: array expected";for(var l=0;l<i.node.length;++l){var s=a.onnx.NodeProto.verify(i.node[l]);if(s)return"node."+s}}if(i.name!=null&&i.hasOwnProperty("name")&&!n.isString(i.name))return"name: string expected";if(i.initializer!=null&&i.hasOwnProperty("initializer")){if(!Array.isArray(i.initializer))return"initializer: array expected";for(var l=0;l<i.initializer.length;++l){var s=a.onnx.TensorProto.verify(i.initializer[l]);if(s)return"initializer."+s}}if(i.sparseInitializer!=null&&i.hasOwnProperty("sparseInitializer")){if(!Array.isArray(i.sparseInitializer))return"sparseInitializer: array expected";for(var l=0;l<i.sparseInitializer.length;++l){var s=a.onnx.SparseTensorProto.verify(i.sparseInitializer[l]);if(s)return"sparseInitializer."+s}}if(i.docString!=null&&i.hasOwnProperty("docString")&&!n.isString(i.docString))return"docString: string expected";if(i.input!=null&&i.hasOwnProperty("input")){if(!Array.isArray(i.input))return"input: array expected";for(var l=0;l<i.input.length;++l){var s=a.onnx.ValueInfoProto.verify(i.input[l]);if(s)return"input."+s}}if(i.output!=null&&i.hasOwnProperty("output")){if(!Array.isArray(i.output))return"output: array expected";for(var l=0;l<i.output.length;++l){var s=a.onnx.ValueInfoProto.verify(i.output[l]);if(s)return"output."+s}}if(i.valueInfo!=null&&i.hasOwnProperty("valueInfo")){if(!Array.isArray(i.valueInfo))return"valueInfo: array expected";for(var l=0;l<i.valueInfo.length;++l){var s=a.onnx.ValueInfoProto.verify(i.valueInfo[l]);if(s)return"valueInfo."+s}}if(i.quantizationAnnotation!=null&&i.hasOwnProperty("quantizationAnnotation")){if(!Array.isArray(i.quantizationAnnotation))return"quantizationAnnotation: array expected";for(var l=0;l<i.quantizationAnnotation.length;++l){var s=a.onnx.TensorAnnotation.verify(i.quantizationAnnotation[l]);if(s)return"quantizationAnnotation."+s}}return null},p.fromObject=function(i){if(i instanceof a.onnx.GraphProto)return i;var l=new a.onnx.GraphProto;if(i.node){if(!Array.isArray(i.node))throw TypeError(".onnx.GraphProto.node: array expected");l.node=[];for(var s=0;s<i.node.length;++s){if(typeof i.node[s]!="object")throw TypeError(".onnx.GraphProto.node: object expected");l.node[s]=a.onnx.NodeProto.fromObject(i.node[s])}}if(i.name!=null&&(l.name=String(i.name)),i.initializer){if(!Array.isArray(i.initializer))throw TypeError(".onnx.GraphProto.initializer: array expected");l.initializer=[];for(var s=0;s<i.initializer.length;++s){if(typeof i.initializer[s]!="object")throw TypeError(".onnx.GraphProto.initializer: object expected");l.initializer[s]=a.onnx.TensorProto.fromObject(i.initializer[s])}}if(i.sparseInitializer){if(!Array.isArray(i.sparseInitializer))throw TypeError(".onnx.GraphProto.sparseInitializer: array expected");l.sparseInitializer=[];for(var s=0;s<i.sparseInitializer.length;++s){if(typeof i.sparseInitializer[s]!="object")throw TypeError(".onnx.GraphProto.sparseInitializer: object expected");l.sparseInitializer[s]=a.onnx.SparseTensorProto.fromObject(i.sparseInitializer[s])}}if(i.docString!=null&&(l.docString=String(i.docString)),i.input){if(!Array.isArray(i.input))throw TypeError(".onnx.GraphProto.input: array expected");l.input=[];for(var s=0;s<i.input.length;++s){if(typeof i.input[s]!="object")throw TypeError(".onnx.GraphProto.input: object expected");l.input[s]=a.onnx.ValueInfoProto.fromObject(i.input[s])}}if(i.output){if(!Array.isArray(i.output))throw TypeError(".onnx.GraphProto.output: array expected");l.output=[];for(var s=0;s<i.output.length;++s){if(typeof i.output[s]!="object")throw TypeError(".onnx.GraphProto.output: object expected");l.output[s]=a.onnx.ValueInfoProto.fromObject(i.output[s])}}if(i.valueInfo){if(!Array.isArray(i.valueInfo))throw TypeError(".onnx.GraphProto.valueInfo: array expected");l.valueInfo=[];for(var s=0;s<i.valueInfo.length;++s){if(typeof i.valueInfo[s]!="object")throw TypeError(".onnx.GraphProto.valueInfo: object expected");l.valueInfo[s]=a.onnx.ValueInfoProto.fromObject(i.valueInfo[s])}}if(i.quantizationAnnotation){if(!Array.isArray(i.quantizationAnnotation))throw TypeError(".onnx.GraphProto.quantizationAnnotation: array expected");l.quantizationAnnotation=[];for(var s=0;s<i.quantizationAnnotation.length;++s){if(typeof i.quantizationAnnotation[s]!="object")throw TypeError(".onnx.GraphProto.quantizationAnnotation: object expected");l.quantizationAnnotation[s]=a.onnx.TensorAnnotation.fromObject(i.quantizationAnnotation[s])}}return l},p.toObject=function(i,l){l||(l={});var s={};if((l.arrays||l.defaults)&&(s.node=[],s.initializer=[],s.input=[],s.output=[],s.valueInfo=[],s.quantizationAnnotation=[],s.sparseInitializer=[]),l.defaults&&(s.name="",s.docString=""),i.node&&i.node.length){s.node=[];for(var c=0;c<i.node.length;++c)s.node[c]=a.onnx.NodeProto.toObject(i.node[c],l)}if(i.name!=null&&i.hasOwnProperty("name")&&(s.name=i.name),i.initializer&&i.initializer.length){s.initializer=[];for(var c=0;c<i.initializer.length;++c)s.initializer[c]=a.onnx.TensorProto.toObject(i.initializer[c],l)}if(i.docString!=null&&i.hasOwnProperty("docString")&&(s.docString=i.docString),i.input&&i.input.length){s.input=[];for(var c=0;c<i.input.length;++c)s.input[c]=a.onnx.ValueInfoProto.toObject(i.input[c],l)}if(i.output&&i.output.length){s.output=[];for(var c=0;c<i.output.length;++c)s.output[c]=a.onnx.ValueInfoProto.toObject(i.output[c],l)}if(i.valueInfo&&i.valueInfo.length){s.valueInfo=[];for(var c=0;c<i.valueInfo.length;++c)s.valueInfo[c]=a.onnx.ValueInfoProto.toObject(i.valueInfo[c],l)}if(i.quantizationAnnotation&&i.quantizationAnnotation.length){s.quantizationAnnotation=[];for(var c=0;c<i.quantizationAnnotation.length;++c)s.quantizationAnnotation[c]=a.onnx.TensorAnnotation.toObject(i.quantizationAnnotation[c],l)}if(i.sparseInitializer&&i.sparseInitializer.length){s.sparseInitializer=[];for(var c=0;c<i.sparseInitializer.length;++c)s.sparseInitializer[c]=a.onnx.SparseTensorProto.toObject(i.sparseInitializer[c],l)}return s},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.GraphProto"},p}(),d.TensorProto=function(){function p(i){if(this.dims=[],this.floatData=[],this.int32Data=[],this.stringData=[],this.int64Data=[],this.externalData=[],this.doubleData=[],this.uint64Data=[],i)for(var l=Object.keys(i),s=0;s<l.length;++s)i[l[s]]!=null&&(this[l[s]]=i[l[s]])}return p.prototype.dims=n.emptyArray,p.prototype.dataType=0,p.prototype.segment=null,p.prototype.floatData=n.emptyArray,p.prototype.int32Data=n.emptyArray,p.prototype.stringData=n.emptyArray,p.prototype.int64Data=n.emptyArray,p.prototype.name="",p.prototype.docString="",p.prototype.rawData=n.newBuffer([]),p.prototype.externalData=n.emptyArray,p.prototype.dataLocation=0,p.prototype.doubleData=n.emptyArray,p.prototype.uint64Data=n.emptyArray,p.create=function(i){return new p(i)},p.encode=function(i,l){if(l||(l=u.create()),i.dims!=null&&i.dims.length){l.uint32(10).fork();for(var s=0;s<i.dims.length;++s)l.int64(i.dims[s]);l.ldelim()}if(i.dataType!=null&&Object.hasOwnProperty.call(i,"dataType")&&l.uint32(16).int32(i.dataType),i.segment!=null&&Object.hasOwnProperty.call(i,"segment")&&a.onnx.TensorProto.Segment.encode(i.segment,l.uint32(26).fork()).ldelim(),i.floatData!=null&&i.floatData.length){l.uint32(34).fork();for(var s=0;s<i.floatData.length;++s)l.float(i.floatData[s]);l.ldelim()}if(i.int32Data!=null&&i.int32Data.length){l.uint32(42).fork();for(var s=0;s<i.int32Data.length;++s)l.int32(i.int32Data[s]);l.ldelim()}if(i.stringData!=null&&i.stringData.length)for(var s=0;s<i.stringData.length;++s)l.uint32(50).bytes(i.stringData[s]);if(i.int64Data!=null&&i.int64Data.length){l.uint32(58).fork();for(var s=0;s<i.int64Data.length;++s)l.int64(i.int64Data[s]);l.ldelim()}if(i.name!=null&&Object.hasOwnProperty.call(i,"name")&&l.uint32(66).string(i.name),i.rawData!=null&&Object.hasOwnProperty.call(i,"rawData")&&l.uint32(74).bytes(i.rawData),i.doubleData!=null&&i.doubleData.length){l.uint32(82).fork();for(var s=0;s<i.doubleData.length;++s)l.double(i.doubleData[s]);l.ldelim()}if(i.uint64Data!=null&&i.uint64Data.length){l.uint32(90).fork();for(var s=0;s<i.uint64Data.length;++s)l.uint64(i.uint64Data[s]);l.ldelim()}if(i.docString!=null&&Object.hasOwnProperty.call(i,"docString")&&l.uint32(98).string(i.docString),i.externalData!=null&&i.externalData.length)for(var s=0;s<i.externalData.length;++s)a.onnx.StringStringEntryProto.encode(i.externalData[s],l.uint32(106).fork()).ldelim();return i.dataLocation!=null&&Object.hasOwnProperty.call(i,"dataLocation")&&l.uint32(112).int32(i.dataLocation),l},p.encodeDelimited=function(i,l){return this.encode(i,l).ldelim()},p.decode=function(i,l){i instanceof o||(i=o.create(i));for(var s=l===void 0?i.len:i.pos+l,c=new a.onnx.TensorProto;i.pos<s;){var h=i.uint32();switch(h>>>3){case 1:{if(c.dims&&c.dims.length||(c.dims=[]),(h&7)===2)for(var g=i.uint32()+i.pos;i.pos<g;)c.dims.push(i.int64());else c.dims.push(i.int64());break}case 2:{c.dataType=i.int32();break}case 3:{c.segment=a.onnx.TensorProto.Segment.decode(i,i.uint32());break}case 4:{if(c.floatData&&c.floatData.length||(c.floatData=[]),(h&7)===2)for(var g=i.uint32()+i.pos;i.pos<g;)c.floatData.push(i.float());else c.floatData.push(i.float());break}case 5:{if(c.int32Data&&c.int32Data.length||(c.int32Data=[]),(h&7)===2)for(var g=i.uint32()+i.pos;i.pos<g;)c.int32Data.push(i.int32());else c.int32Data.push(i.int32());break}case 6:{c.stringData&&c.stringData.length||(c.stringData=[]),c.stringData.push(i.bytes());break}case 7:{if(c.int64Data&&c.int64Data.length||(c.int64Data=[]),(h&7)===2)for(var g=i.uint32()+i.pos;i.pos<g;)c.int64Data.push(i.int64());else c.int64Data.push(i.int64());break}case 8:{c.name=i.string();break}case 12:{c.docString=i.string();break}case 9:{c.rawData=i.bytes();break}case 13:{c.externalData&&c.externalData.length||(c.externalData=[]),c.externalData.push(a.onnx.StringStringEntryProto.decode(i,i.uint32()));break}case 14:{c.dataLocation=i.int32();break}case 10:{if(c.doubleData&&c.doubleData.length||(c.doubleData=[]),(h&7)===2)for(var g=i.uint32()+i.pos;i.pos<g;)c.doubleData.push(i.double());else c.doubleData.push(i.double());break}case 11:{if(c.uint64Data&&c.uint64Data.length||(c.uint64Data=[]),(h&7)===2)for(var g=i.uint32()+i.pos;i.pos<g;)c.uint64Data.push(i.uint64());else c.uint64Data.push(i.uint64());break}default:i.skipType(h&7);break}}return c},p.decodeDelimited=function(i){return i instanceof o||(i=new o(i)),this.decode(i,i.uint32())},p.verify=function(i){if(typeof i!="object"||i===null)return"object expected";if(i.dims!=null&&i.hasOwnProperty("dims")){if(!Array.isArray(i.dims))return"dims: array expected";for(var l=0;l<i.dims.length;++l)if(!n.isInteger(i.dims[l])&&!(i.dims[l]&&n.isInteger(i.dims[l].low)&&n.isInteger(i.dims[l].high)))return"dims: integer|Long[] expected"}if(i.dataType!=null&&i.hasOwnProperty("dataType")&&!n.isInteger(i.dataType))return"dataType: integer expected";if(i.segment!=null&&i.hasOwnProperty("segment")){var s=a.onnx.TensorProto.Segment.verify(i.segment);if(s)return"segment."+s}if(i.floatData!=null&&i.hasOwnProperty("floatData")){if(!Array.isArray(i.floatData))return"floatData: array expected";for(var l=0;l<i.floatData.length;++l)if(typeof i.floatData[l]!="number")return"floatData: number[] expected"}if(i.int32Data!=null&&i.hasOwnProperty("int32Data")){if(!Array.isArray(i.int32Data))return"int32Data: array expected";for(var l=0;l<i.int32Data.length;++l)if(!n.isInteger(i.int32Data[l]))return"int32Data: integer[] expected"}if(i.stringData!=null&&i.hasOwnProperty("stringData")){if(!Array.isArray(i.stringData))return"stringData: array expected";for(var l=0;l<i.stringData.length;++l)if(!(i.stringData[l]&&typeof i.stringData[l].length=="number"||n.isString(i.stringData[l])))return"stringData: buffer[] expected"}if(i.int64Data!=null&&i.hasOwnProperty("int64Data")){if(!Array.isArray(i.int64Data))return"int64Data: array expected";for(var l=0;l<i.int64Data.length;++l)if(!n.isInteger(i.int64Data[l])&&!(i.int64Data[l]&&n.isInteger(i.int64Data[l].low)&&n.isInteger(i.int64Data[l].high)))return"int64Data: integer|Long[] expected"}if(i.name!=null&&i.hasOwnProperty("name")&&!n.isString(i.name))return"name: string expected";if(i.docString!=null&&i.hasOwnProperty("docString")&&!n.isString(i.docString))return"docString: string expected";if(i.rawData!=null&&i.hasOwnProperty("rawData")&&!(i.rawData&&typeof i.rawData.length=="number"||n.isString(i.rawData)))return"rawData: buffer expected";if(i.externalData!=null&&i.hasOwnProperty("externalData")){if(!Array.isArray(i.externalData))return"externalData: array expected";for(var l=0;l<i.externalData.length;++l){var s=a.onnx.StringStringEntryProto.verify(i.externalData[l]);if(s)return"externalData."+s}}if(i.dataLocation!=null&&i.hasOwnProperty("dataLocation"))switch(i.dataLocation){default:return"dataLocation: enum value expected";case 0:case 1:break}if(i.doubleData!=null&&i.hasOwnProperty("doubleData")){if(!Array.isArray(i.doubleData))return"doubleData: array expected";for(var l=0;l<i.doubleData.length;++l)if(typeof i.doubleData[l]!="number")return"doubleData: number[] expected"}if(i.uint64Data!=null&&i.hasOwnProperty("uint64Data")){if(!Array.isArray(i.uint64Data))return"uint64Data: array expected";for(var l=0;l<i.uint64Data.length;++l)if(!n.isInteger(i.uint64Data[l])&&!(i.uint64Data[l]&&n.isInteger(i.uint64Data[l].low)&&n.isInteger(i.uint64Data[l].high)))return"uint64Data: integer|Long[] expected"}return null},p.fromObject=function(i){if(i instanceof a.onnx.TensorProto)return i;var l=new a.onnx.TensorProto;if(i.dims){if(!Array.isArray(i.dims))throw TypeError(".onnx.TensorProto.dims: array expected");l.dims=[];for(var s=0;s<i.dims.length;++s)n.Long?(l.dims[s]=n.Long.fromValue(i.dims[s])).unsigned=!1:typeof i.dims[s]=="string"?l.dims[s]=parseInt(i.dims[s],10):typeof i.dims[s]=="number"?l.dims[s]=i.dims[s]:typeof i.dims[s]=="object"&&(l.dims[s]=new n.LongBits(i.dims[s].low>>>0,i.dims[s].high>>>0).toNumber())}if(i.dataType!=null&&(l.dataType=i.dataType|0),i.segment!=null){if(typeof i.segment!="object")throw TypeError(".onnx.TensorProto.segment: object expected");l.segment=a.onnx.TensorProto.Segment.fromObject(i.segment)}if(i.floatData){if(!Array.isArray(i.floatData))throw TypeError(".onnx.TensorProto.floatData: array expected");l.floatData=[];for(var s=0;s<i.floatData.length;++s)l.floatData[s]=Number(i.floatData[s])}if(i.int32Data){if(!Array.isArray(i.int32Data))throw TypeError(".onnx.TensorProto.int32Data: array expected");l.int32Data=[];for(var s=0;s<i.int32Data.length;++s)l.int32Data[s]=i.int32Data[s]|0}if(i.stringData){if(!Array.isArray(i.stringData))throw TypeError(".onnx.TensorProto.stringData: array expected");l.stringData=[];for(var s=0;s<i.stringData.length;++s)typeof i.stringData[s]=="string"?n.base64.decode(i.stringData[s],l.stringData[s]=n.newBuffer(n.base64.length(i.stringData[s])),0):i.stringData[s].length>=0&&(l.stringData[s]=i.stringData[s])}if(i.int64Data){if(!Array.isArray(i.int64Data))throw TypeError(".onnx.TensorProto.int64Data: array expected");l.int64Data=[];for(var s=0;s<i.int64Data.length;++s)n.Long?(l.int64Data[s]=n.Long.fromValue(i.int64Data[s])).unsigned=!1:typeof i.int64Data[s]=="string"?l.int64Data[s]=parseInt(i.int64Data[s],10):typeof i.int64Data[s]=="number"?l.int64Data[s]=i.int64Data[s]:typeof i.int64Data[s]=="object"&&(l.int64Data[s]=new n.LongBits(i.int64Data[s].low>>>0,i.int64Data[s].high>>>0).toNumber())}if(i.name!=null&&(l.name=String(i.name)),i.docString!=null&&(l.docString=String(i.docString)),i.rawData!=null&&(typeof i.rawData=="string"?n.base64.decode(i.rawData,l.rawData=n.newBuffer(n.base64.length(i.rawData)),0):i.rawData.length>=0&&(l.rawData=i.rawData)),i.externalData){if(!Array.isArray(i.externalData))throw TypeError(".onnx.TensorProto.externalData: array expected");l.externalData=[];for(var s=0;s<i.externalData.length;++s){if(typeof i.externalData[s]!="object")throw TypeError(".onnx.TensorProto.externalData: object expected");l.externalData[s]=a.onnx.StringStringEntryProto.fromObject(i.externalData[s])}}switch(i.dataLocation){default:if(typeof i.dataLocation=="number"){l.dataLocation=i.dataLocation;break}break;case"DEFAULT":case 0:l.dataLocation=0;break;case"EXTERNAL":case 1:l.dataLocation=1;break}if(i.doubleData){if(!Array.isArray(i.doubleData))throw TypeError(".onnx.TensorProto.doubleData: array expected");l.doubleData=[];for(var s=0;s<i.doubleData.length;++s)l.doubleData[s]=Number(i.doubleData[s])}if(i.uint64Data){if(!Array.isArray(i.uint64Data))throw TypeError(".onnx.TensorProto.uint64Data: array expected");l.uint64Data=[];for(var s=0;s<i.uint64Data.length;++s)n.Long?(l.uint64Data[s]=n.Long.fromValue(i.uint64Data[s])).unsigned=!0:typeof i.uint64Data[s]=="string"?l.uint64Data[s]=parseInt(i.uint64Data[s],10):typeof i.uint64Data[s]=="number"?l.uint64Data[s]=i.uint64Data[s]:typeof i.uint64Data[s]=="object"&&(l.uint64Data[s]=new n.LongBits(i.uint64Data[s].low>>>0,i.uint64Data[s].high>>>0).toNumber(!0))}return l},p.toObject=function(i,l){l||(l={});var s={};if((l.arrays||l.defaults)&&(s.dims=[],s.floatData=[],s.int32Data=[],s.stringData=[],s.int64Data=[],s.doubleData=[],s.uint64Data=[],s.externalData=[]),l.defaults&&(s.dataType=0,s.segment=null,s.name="",l.bytes===String?s.rawData="":(s.rawData=[],l.bytes!==Array&&(s.rawData=n.newBuffer(s.rawData))),s.docString="",s.dataLocation=l.enums===String?"DEFAULT":0),i.dims&&i.dims.length){s.dims=[];for(var c=0;c<i.dims.length;++c)typeof i.dims[c]=="number"?s.dims[c]=l.longs===String?String(i.dims[c]):i.dims[c]:s.dims[c]=l.longs===String?n.Long.prototype.toString.call(i.dims[c]):l.longs===Number?new n.LongBits(i.dims[c].low>>>0,i.dims[c].high>>>0).toNumber():i.dims[c]}if(i.dataType!=null&&i.hasOwnProperty("dataType")&&(s.dataType=i.dataType),i.segment!=null&&i.hasOwnProperty("segment")&&(s.segment=a.onnx.TensorProto.Segment.toObject(i.segment,l)),i.floatData&&i.floatData.length){s.floatData=[];for(var c=0;c<i.floatData.length;++c)s.floatData[c]=l.json&&!isFinite(i.floatData[c])?String(i.floatData[c]):i.floatData[c]}if(i.int32Data&&i.int32Data.length){s.int32Data=[];for(var c=0;c<i.int32Data.length;++c)s.int32Data[c]=i.int32Data[c]}if(i.stringData&&i.stringData.length){s.stringData=[];for(var c=0;c<i.stringData.length;++c)s.stringData[c]=l.bytes===String?n.base64.encode(i.stringData[c],0,i.stringData[c].length):l.bytes===Array?Array.prototype.slice.call(i.stringData[c]):i.stringData[c]}if(i.int64Data&&i.int64Data.length){s.int64Data=[];for(var c=0;c<i.int64Data.length;++c)typeof i.int64Data[c]=="number"?s.int64Data[c]=l.longs===String?String(i.int64Data[c]):i.int64Data[c]:s.int64Data[c]=l.longs===String?n.Long.prototype.toString.call(i.int64Data[c]):l.longs===Number?new n.LongBits(i.int64Data[c].low>>>0,i.int64Data[c].high>>>0).toNumber():i.int64Data[c]}if(i.name!=null&&i.hasOwnProperty("name")&&(s.name=i.name),i.rawData!=null&&i.hasOwnProperty("rawData")&&(s.rawData=l.bytes===String?n.base64.encode(i.rawData,0,i.rawData.length):l.bytes===Array?Array.prototype.slice.call(i.rawData):i.rawData),i.doubleData&&i.doubleData.length){s.doubleData=[];for(var c=0;c<i.doubleData.length;++c)s.doubleData[c]=l.json&&!isFinite(i.doubleData[c])?String(i.doubleData[c]):i.doubleData[c]}if(i.uint64Data&&i.uint64Data.length){s.uint64Data=[];for(var c=0;c<i.uint64Data.length;++c)typeof i.uint64Data[c]=="number"?s.uint64Data[c]=l.longs===String?String(i.uint64Data[c]):i.uint64Data[c]:s.uint64Data[c]=l.longs===String?n.Long.prototype.toString.call(i.uint64Data[c]):l.longs===Number?new n.LongBits(i.uint64Data[c].low>>>0,i.uint64Data[c].high>>>0).toNumber(!0):i.uint64Data[c]}if(i.docString!=null&&i.hasOwnProperty("docString")&&(s.docString=i.docString),i.externalData&&i.externalData.length){s.externalData=[];for(var c=0;c<i.externalData.length;++c)s.externalData[c]=a.onnx.StringStringEntryProto.toObject(i.externalData[c],l)}return i.dataLocation!=null&&i.hasOwnProperty("dataLocation")&&(s.dataLocation=l.enums===String?a.onnx.TensorProto.DataLocation[i.dataLocation]===void 0?i.dataLocation:a.onnx.TensorProto.DataLocation[i.dataLocation]:i.dataLocation),s},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.TensorProto"},p.DataType=function(){var i={},l=Object.create(i);return l[i[0]="UNDEFINED"]=0,l[i[1]="FLOAT"]=1,l[i[2]="UINT8"]=2,l[i[3]="INT8"]=3,l[i[4]="UINT16"]=4,l[i[5]="INT16"]=5,l[i[6]="INT32"]=6,l[i[7]="INT64"]=7,l[i[8]="STRING"]=8,l[i[9]="BOOL"]=9,l[i[10]="FLOAT16"]=10,l[i[11]="DOUBLE"]=11,l[i[12]="UINT32"]=12,l[i[13]="UINT64"]=13,l[i[14]="COMPLEX64"]=14,l[i[15]="COMPLEX128"]=15,l[i[16]="BFLOAT16"]=16,l[i[17]="FLOAT8E4M3FN"]=17,l[i[18]="FLOAT8E4M3FNUZ"]=18,l[i[19]="FLOAT8E5M2"]=19,l[i[20]="FLOAT8E5M2FNUZ"]=20,l}(),p.Segment=function(){function i(l){if(l)for(var s=Object.keys(l),c=0;c<s.length;++c)l[s[c]]!=null&&(this[s[c]]=l[s[c]])}return i.prototype.begin=n.Long?n.Long.fromBits(0,0,!1):0,i.prototype.end=n.Long?n.Long.fromBits(0,0,!1):0,i.create=function(l){return new i(l)},i.encode=function(l,s){return s||(s=u.create()),l.begin!=null&&Object.hasOwnProperty.call(l,"begin")&&s.uint32(8).int64(l.begin),l.end!=null&&Object.hasOwnProperty.call(l,"end")&&s.uint32(16).int64(l.end),s},i.encodeDelimited=function(l,s){return this.encode(l,s).ldelim()},i.decode=function(l,s){l instanceof o||(l=o.create(l));for(var c=s===void 0?l.len:l.pos+s,h=new a.onnx.TensorProto.Segment;l.pos<c;){var g=l.uint32();switch(g>>>3){case 1:{h.begin=l.int64();break}case 2:{h.end=l.int64();break}default:l.skipType(g&7);break}}return h},i.decodeDelimited=function(l){return l instanceof o||(l=new o(l)),this.decode(l,l.uint32())},i.verify=function(l){return typeof l!="object"||l===null?"object expected":l.begin!=null&&l.hasOwnProperty("begin")&&!n.isInteger(l.begin)&&!(l.begin&&n.isInteger(l.begin.low)&&n.isInteger(l.begin.high))?"begin: integer|Long expected":l.end!=null&&l.hasOwnProperty("end")&&!n.isInteger(l.end)&&!(l.end&&n.isInteger(l.end.low)&&n.isInteger(l.end.high))?"end: integer|Long expected":null},i.fromObject=function(l){if(l instanceof a.onnx.TensorProto.Segment)return l;var s=new a.onnx.TensorProto.Segment;return l.begin!=null&&(n.Long?(s.begin=n.Long.fromValue(l.begin)).unsigned=!1:typeof l.begin=="string"?s.begin=parseInt(l.begin,10):typeof l.begin=="number"?s.begin=l.begin:typeof l.begin=="object"&&(s.begin=new n.LongBits(l.begin.low>>>0,l.begin.high>>>0).toNumber())),l.end!=null&&(n.Long?(s.end=n.Long.fromValue(l.end)).unsigned=!1:typeof l.end=="string"?s.end=parseInt(l.end,10):typeof l.end=="number"?s.end=l.end:typeof l.end=="object"&&(s.end=new n.LongBits(l.end.low>>>0,l.end.high>>>0).toNumber())),s},i.toObject=function(l,s){s||(s={});var c={};if(s.defaults){if(n.Long){var h=new n.Long(0,0,!1);c.begin=s.longs===String?h.toString():s.longs===Number?h.toNumber():h}else c.begin=s.longs===String?"0":0;if(n.Long){var h=new n.Long(0,0,!1);c.end=s.longs===String?h.toString():s.longs===Number?h.toNumber():h}else c.end=s.longs===String?"0":0}return l.begin!=null&&l.hasOwnProperty("begin")&&(typeof l.begin=="number"?c.begin=s.longs===String?String(l.begin):l.begin:c.begin=s.longs===String?n.Long.prototype.toString.call(l.begin):s.longs===Number?new n.LongBits(l.begin.low>>>0,l.begin.high>>>0).toNumber():l.begin),l.end!=null&&l.hasOwnProperty("end")&&(typeof l.end=="number"?c.end=s.longs===String?String(l.end):l.end:c.end=s.longs===String?n.Long.prototype.toString.call(l.end):s.longs===Number?new n.LongBits(l.end.low>>>0,l.end.high>>>0).toNumber():l.end),c},i.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},i.getTypeUrl=function(l){return l===void 0&&(l="type.googleapis.com"),l+"/onnx.TensorProto.Segment"},i}(),p.DataLocation=function(){var i={},l=Object.create(i);return l[i[0]="DEFAULT"]=0,l[i[1]="EXTERNAL"]=1,l}(),p}(),d.SparseTensorProto=function(){function p(i){if(this.dims=[],i)for(var l=Object.keys(i),s=0;s<l.length;++s)i[l[s]]!=null&&(this[l[s]]=i[l[s]])}return p.prototype.values=null,p.prototype.indices=null,p.prototype.dims=n.emptyArray,p.create=function(i){return new p(i)},p.encode=function(i,l){if(l||(l=u.create()),i.values!=null&&Object.hasOwnProperty.call(i,"values")&&a.onnx.TensorProto.encode(i.values,l.uint32(10).fork()).ldelim(),i.indices!=null&&Object.hasOwnProperty.call(i,"indices")&&a.onnx.TensorProto.encode(i.indices,l.uint32(18).fork()).ldelim(),i.dims!=null&&i.dims.length){l.uint32(26).fork();for(var s=0;s<i.dims.length;++s)l.int64(i.dims[s]);l.ldelim()}return l},p.encodeDelimited=function(i,l){return this.encode(i,l).ldelim()},p.decode=function(i,l){i instanceof o||(i=o.create(i));for(var s=l===void 0?i.len:i.pos+l,c=new a.onnx.SparseTensorProto;i.pos<s;){var h=i.uint32();switch(h>>>3){case 1:{c.values=a.onnx.TensorProto.decode(i,i.uint32());break}case 2:{c.indices=a.onnx.TensorProto.decode(i,i.uint32());break}case 3:{if(c.dims&&c.dims.length||(c.dims=[]),(h&7)===2)for(var g=i.uint32()+i.pos;i.pos<g;)c.dims.push(i.int64());else c.dims.push(i.int64());break}default:i.skipType(h&7);break}}return c},p.decodeDelimited=function(i){return i instanceof o||(i=new o(i)),this.decode(i,i.uint32())},p.verify=function(i){if(typeof i!="object"||i===null)return"object expected";if(i.values!=null&&i.hasOwnProperty("values")){var l=a.onnx.TensorProto.verify(i.values);if(l)return"values."+l}if(i.indices!=null&&i.hasOwnProperty("indices")){var l=a.onnx.TensorProto.verify(i.indices);if(l)return"indices."+l}if(i.dims!=null&&i.hasOwnProperty("dims")){if(!Array.isArray(i.dims))return"dims: array expected";for(var s=0;s<i.dims.length;++s)if(!n.isInteger(i.dims[s])&&!(i.dims[s]&&n.isInteger(i.dims[s].low)&&n.isInteger(i.dims[s].high)))return"dims: integer|Long[] expected"}return null},p.fromObject=function(i){if(i instanceof a.onnx.SparseTensorProto)return i;var l=new a.onnx.SparseTensorProto;if(i.values!=null){if(typeof i.values!="object")throw TypeError(".onnx.SparseTensorProto.values: object expected");l.values=a.onnx.TensorProto.fromObject(i.values)}if(i.indices!=null){if(typeof i.indices!="object")throw TypeError(".onnx.SparseTensorProto.indices: object expected");l.indices=a.onnx.TensorProto.fromObject(i.indices)}if(i.dims){if(!Array.isArray(i.dims))throw TypeError(".onnx.SparseTensorProto.dims: array expected");l.dims=[];for(var s=0;s<i.dims.length;++s)n.Long?(l.dims[s]=n.Long.fromValue(i.dims[s])).unsigned=!1:typeof i.dims[s]=="string"?l.dims[s]=parseInt(i.dims[s],10):typeof i.dims[s]=="number"?l.dims[s]=i.dims[s]:typeof i.dims[s]=="object"&&(l.dims[s]=new n.LongBits(i.dims[s].low>>>0,i.dims[s].high>>>0).toNumber())}return l},p.toObject=function(i,l){l||(l={});var s={};if((l.arrays||l.defaults)&&(s.dims=[]),l.defaults&&(s.values=null,s.indices=null),i.values!=null&&i.hasOwnProperty("values")&&(s.values=a.onnx.TensorProto.toObject(i.values,l)),i.indices!=null&&i.hasOwnProperty("indices")&&(s.indices=a.onnx.TensorProto.toObject(i.indices,l)),i.dims&&i.dims.length){s.dims=[];for(var c=0;c<i.dims.length;++c)typeof i.dims[c]=="number"?s.dims[c]=l.longs===String?String(i.dims[c]):i.dims[c]:s.dims[c]=l.longs===String?n.Long.prototype.toString.call(i.dims[c]):l.longs===Number?new n.LongBits(i.dims[c].low>>>0,i.dims[c].high>>>0).toNumber():i.dims[c]}return s},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.SparseTensorProto"},p}(),d.TensorShapeProto=function(){function p(i){if(this.dim=[],i)for(var l=Object.keys(i),s=0;s<l.length;++s)i[l[s]]!=null&&(this[l[s]]=i[l[s]])}return p.prototype.dim=n.emptyArray,p.create=function(i){return new p(i)},p.encode=function(i,l){if(l||(l=u.create()),i.dim!=null&&i.dim.length)for(var s=0;s<i.dim.length;++s)a.onnx.TensorShapeProto.Dimension.encode(i.dim[s],l.uint32(10).fork()).ldelim();return l},p.encodeDelimited=function(i,l){return this.encode(i,l).ldelim()},p.decode=function(i,l){i instanceof o||(i=o.create(i));for(var s=l===void 0?i.len:i.pos+l,c=new a.onnx.TensorShapeProto;i.pos<s;){var h=i.uint32();switch(h>>>3){case 1:{c.dim&&c.dim.length||(c.dim=[]),c.dim.push(a.onnx.TensorShapeProto.Dimension.decode(i,i.uint32()));break}default:i.skipType(h&7);break}}return c},p.decodeDelimited=function(i){return i instanceof o||(i=new o(i)),this.decode(i,i.uint32())},p.verify=function(i){if(typeof i!="object"||i===null)return"object expected";if(i.dim!=null&&i.hasOwnProperty("dim")){if(!Array.isArray(i.dim))return"dim: array expected";for(var l=0;l<i.dim.length;++l){var s=a.onnx.TensorShapeProto.Dimension.verify(i.dim[l]);if(s)return"dim."+s}}return null},p.fromObject=function(i){if(i instanceof a.onnx.TensorShapeProto)return i;var l=new a.onnx.TensorShapeProto;if(i.dim){if(!Array.isArray(i.dim))throw TypeError(".onnx.TensorShapeProto.dim: array expected");l.dim=[];for(var s=0;s<i.dim.length;++s){if(typeof i.dim[s]!="object")throw TypeError(".onnx.TensorShapeProto.dim: object expected");l.dim[s]=a.onnx.TensorShapeProto.Dimension.fromObject(i.dim[s])}}return l},p.toObject=function(i,l){l||(l={});var s={};if((l.arrays||l.defaults)&&(s.dim=[]),i.dim&&i.dim.length){s.dim=[];for(var c=0;c<i.dim.length;++c)s.dim[c]=a.onnx.TensorShapeProto.Dimension.toObject(i.dim[c],l)}return s},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.TensorShapeProto"},p.Dimension=function(){function i(s){if(s)for(var c=Object.keys(s),h=0;h<c.length;++h)s[c[h]]!=null&&(this[c[h]]=s[c[h]])}i.prototype.dimValue=null,i.prototype.dimParam=null,i.prototype.denotation="";var l;return Object.defineProperty(i.prototype,"value",{get:n.oneOfGetter(l=["dimValue","dimParam"]),set:n.oneOfSetter(l)}),i.create=function(s){return new i(s)},i.encode=function(s,c){return c||(c=u.create()),s.dimValue!=null&&Object.hasOwnProperty.call(s,"dimValue")&&c.uint32(8).int64(s.dimValue),s.dimParam!=null&&Object.hasOwnProperty.call(s,"dimParam")&&c.uint32(18).string(s.dimParam),s.denotation!=null&&Object.hasOwnProperty.call(s,"denotation")&&c.uint32(26).string(s.denotation),c},i.encodeDelimited=function(s,c){return this.encode(s,c).ldelim()},i.decode=function(s,c){s instanceof o||(s=o.create(s));for(var h=c===void 0?s.len:s.pos+c,g=new a.onnx.TensorShapeProto.Dimension;s.pos<h;){var y=s.uint32();switch(y>>>3){case 1:{g.dimValue=s.int64();break}case 2:{g.dimParam=s.string();break}case 3:{g.denotation=s.string();break}default:s.skipType(y&7);break}}return g},i.decodeDelimited=function(s){return s instanceof o||(s=new o(s)),this.decode(s,s.uint32())},i.verify=function(s){if(typeof s!="object"||s===null)return"object expected";var c={};if(s.dimValue!=null&&s.hasOwnProperty("dimValue")&&(c.value=1,!n.isInteger(s.dimValue)&&!(s.dimValue&&n.isInteger(s.dimValue.low)&&n.isInteger(s.dimValue.high))))return"dimValue: integer|Long expected";if(s.dimParam!=null&&s.hasOwnProperty("dimParam")){if(c.value===1)return"value: multiple values";if(c.value=1,!n.isString(s.dimParam))return"dimParam: string expected"}return s.denotation!=null&&s.hasOwnProperty("denotation")&&!n.isString(s.denotation)?"denotation: string expected":null},i.fromObject=function(s){if(s instanceof a.onnx.TensorShapeProto.Dimension)return s;var c=new a.onnx.TensorShapeProto.Dimension;return s.dimValue!=null&&(n.Long?(c.dimValue=n.Long.fromValue(s.dimValue)).unsigned=!1:typeof s.dimValue=="string"?c.dimValue=parseInt(s.dimValue,10):typeof s.dimValue=="number"?c.dimValue=s.dimValue:typeof s.dimValue=="object"&&(c.dimValue=new n.LongBits(s.dimValue.low>>>0,s.dimValue.high>>>0).toNumber())),s.dimParam!=null&&(c.dimParam=String(s.dimParam)),s.denotation!=null&&(c.denotation=String(s.denotation)),c},i.toObject=function(s,c){c||(c={});var h={};return c.defaults&&(h.denotation=""),s.dimValue!=null&&s.hasOwnProperty("dimValue")&&(typeof s.dimValue=="number"?h.dimValue=c.longs===String?String(s.dimValue):s.dimValue:h.dimValue=c.longs===String?n.Long.prototype.toString.call(s.dimValue):c.longs===Number?new n.LongBits(s.dimValue.low>>>0,s.dimValue.high>>>0).toNumber():s.dimValue,c.oneofs&&(h.value="dimValue")),s.dimParam!=null&&s.hasOwnProperty("dimParam")&&(h.dimParam=s.dimParam,c.oneofs&&(h.value="dimParam")),s.denotation!=null&&s.hasOwnProperty("denotation")&&(h.denotation=s.denotation),h},i.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},i.getTypeUrl=function(s){return s===void 0&&(s="type.googleapis.com"),s+"/onnx.TensorShapeProto.Dimension"},i}(),p}(),d.TypeProto=function(){function p(l){if(l)for(var s=Object.keys(l),c=0;c<s.length;++c)l[s[c]]!=null&&(this[s[c]]=l[s[c]])}p.prototype.tensorType=null,p.prototype.sequenceType=null,p.prototype.mapType=null,p.prototype.optionalType=null,p.prototype.sparseTensorType=null,p.prototype.denotation="";var i;return Object.defineProperty(p.prototype,"value",{get:n.oneOfGetter(i=["tensorType","sequenceType","mapType","optionalType","sparseTensorType"]),set:n.oneOfSetter(i)}),p.create=function(l){return new p(l)},p.encode=function(l,s){return s||(s=u.create()),l.tensorType!=null&&Object.hasOwnProperty.call(l,"tensorType")&&a.onnx.TypeProto.Tensor.encode(l.tensorType,s.uint32(10).fork()).ldelim(),l.sequenceType!=null&&Object.hasOwnProperty.call(l,"sequenceType")&&a.onnx.TypeProto.Sequence.encode(l.sequenceType,s.uint32(34).fork()).ldelim(),l.mapType!=null&&Object.hasOwnProperty.call(l,"mapType")&&a.onnx.TypeProto.Map.encode(l.mapType,s.uint32(42).fork()).ldelim(),l.denotation!=null&&Object.hasOwnProperty.call(l,"denotation")&&s.uint32(50).string(l.denotation),l.sparseTensorType!=null&&Object.hasOwnProperty.call(l,"sparseTensorType")&&a.onnx.TypeProto.SparseTensor.encode(l.sparseTensorType,s.uint32(66).fork()).ldelim(),l.optionalType!=null&&Object.hasOwnProperty.call(l,"optionalType")&&a.onnx.TypeProto.Optional.encode(l.optionalType,s.uint32(74).fork()).ldelim(),s},p.encodeDelimited=function(l,s){return this.encode(l,s).ldelim()},p.decode=function(l,s){l instanceof o||(l=o.create(l));for(var c=s===void 0?l.len:l.pos+s,h=new a.onnx.TypeProto;l.pos<c;){var g=l.uint32();switch(g>>>3){case 1:{h.tensorType=a.onnx.TypeProto.Tensor.decode(l,l.uint32());break}case 4:{h.sequenceType=a.onnx.TypeProto.Sequence.decode(l,l.uint32());break}case 5:{h.mapType=a.onnx.TypeProto.Map.decode(l,l.uint32());break}case 9:{h.optionalType=a.onnx.TypeProto.Optional.decode(l,l.uint32());break}case 8:{h.sparseTensorType=a.onnx.TypeProto.SparseTensor.decode(l,l.uint32());break}case 6:{h.denotation=l.string();break}default:l.skipType(g&7);break}}return h},p.decodeDelimited=function(l){return l instanceof o||(l=new o(l)),this.decode(l,l.uint32())},p.verify=function(l){if(typeof l!="object"||l===null)return"object expected";var s={};if(l.tensorType!=null&&l.hasOwnProperty("tensorType")){s.value=1;{var c=a.onnx.TypeProto.Tensor.verify(l.tensorType);if(c)return"tensorType."+c}}if(l.sequenceType!=null&&l.hasOwnProperty("sequenceType")){if(s.value===1)return"value: multiple values";s.value=1;{var c=a.onnx.TypeProto.Sequence.verify(l.sequenceType);if(c)return"sequenceType."+c}}if(l.mapType!=null&&l.hasOwnProperty("mapType")){if(s.value===1)return"value: multiple values";s.value=1;{var c=a.onnx.TypeProto.Map.verify(l.mapType);if(c)return"mapType."+c}}if(l.optionalType!=null&&l.hasOwnProperty("optionalType")){if(s.value===1)return"value: multiple values";s.value=1;{var c=a.onnx.TypeProto.Optional.verify(l.optionalType);if(c)return"optionalType."+c}}if(l.sparseTensorType!=null&&l.hasOwnProperty("sparseTensorType")){if(s.value===1)return"value: multiple values";s.value=1;{var c=a.onnx.TypeProto.SparseTensor.verify(l.sparseTensorType);if(c)return"sparseTensorType."+c}}return l.denotation!=null&&l.hasOwnProperty("denotation")&&!n.isString(l.denotation)?"denotation: string expected":null},p.fromObject=function(l){if(l instanceof a.onnx.TypeProto)return l;var s=new a.onnx.TypeProto;if(l.tensorType!=null){if(typeof l.tensorType!="object")throw TypeError(".onnx.TypeProto.tensorType: object expected");s.tensorType=a.onnx.TypeProto.Tensor.fromObject(l.tensorType)}if(l.sequenceType!=null){if(typeof l.sequenceType!="object")throw TypeError(".onnx.TypeProto.sequenceType: object expected");s.sequenceType=a.onnx.TypeProto.Sequence.fromObject(l.sequenceType)}if(l.mapType!=null){if(typeof l.mapType!="object")throw TypeError(".onnx.TypeProto.mapType: object expected");s.mapType=a.onnx.TypeProto.Map.fromObject(l.mapType)}if(l.optionalType!=null){if(typeof l.optionalType!="object")throw TypeError(".onnx.TypeProto.optionalType: object expected");s.optionalType=a.onnx.TypeProto.Optional.fromObject(l.optionalType)}if(l.sparseTensorType!=null){if(typeof l.sparseTensorType!="object")throw TypeError(".onnx.TypeProto.sparseTensorType: object expected");s.sparseTensorType=a.onnx.TypeProto.SparseTensor.fromObject(l.sparseTensorType)}return l.denotation!=null&&(s.denotation=String(l.denotation)),s},p.toObject=function(l,s){s||(s={});var c={};return s.defaults&&(c.denotation=""),l.tensorType!=null&&l.hasOwnProperty("tensorType")&&(c.tensorType=a.onnx.TypeProto.Tensor.toObject(l.tensorType,s),s.oneofs&&(c.value="tensorType")),l.sequenceType!=null&&l.hasOwnProperty("sequenceType")&&(c.sequenceType=a.onnx.TypeProto.Sequence.toObject(l.sequenceType,s),s.oneofs&&(c.value="sequenceType")),l.mapType!=null&&l.hasOwnProperty("mapType")&&(c.mapType=a.onnx.TypeProto.Map.toObject(l.mapType,s),s.oneofs&&(c.value="mapType")),l.denotation!=null&&l.hasOwnProperty("denotation")&&(c.denotation=l.denotation),l.sparseTensorType!=null&&l.hasOwnProperty("sparseTensorType")&&(c.sparseTensorType=a.onnx.TypeProto.SparseTensor.toObject(l.sparseTensorType,s),s.oneofs&&(c.value="sparseTensorType")),l.optionalType!=null&&l.hasOwnProperty("optionalType")&&(c.optionalType=a.onnx.TypeProto.Optional.toObject(l.optionalType,s),s.oneofs&&(c.value="optionalType")),c},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(l){return l===void 0&&(l="type.googleapis.com"),l+"/onnx.TypeProto"},p.Tensor=function(){function l(s){if(s)for(var c=Object.keys(s),h=0;h<c.length;++h)s[c[h]]!=null&&(this[c[h]]=s[c[h]])}return l.prototype.elemType=0,l.prototype.shape=null,l.create=function(s){return new l(s)},l.encode=function(s,c){return c||(c=u.create()),s.elemType!=null&&Object.hasOwnProperty.call(s,"elemType")&&c.uint32(8).int32(s.elemType),s.shape!=null&&Object.hasOwnProperty.call(s,"shape")&&a.onnx.TensorShapeProto.encode(s.shape,c.uint32(18).fork()).ldelim(),c},l.encodeDelimited=function(s,c){return this.encode(s,c).ldelim()},l.decode=function(s,c){s instanceof o||(s=o.create(s));for(var h=c===void 0?s.len:s.pos+c,g=new a.onnx.TypeProto.Tensor;s.pos<h;){var y=s.uint32();switch(y>>>3){case 1:{g.elemType=s.int32();break}case 2:{g.shape=a.onnx.TensorShapeProto.decode(s,s.uint32());break}default:s.skipType(y&7);break}}return g},l.decodeDelimited=function(s){return s instanceof o||(s=new o(s)),this.decode(s,s.uint32())},l.verify=function(s){if(typeof s!="object"||s===null)return"object expected";if(s.elemType!=null&&s.hasOwnProperty("elemType")&&!n.isInteger(s.elemType))return"elemType: integer expected";if(s.shape!=null&&s.hasOwnProperty("shape")){var c=a.onnx.TensorShapeProto.verify(s.shape);if(c)return"shape."+c}return null},l.fromObject=function(s){if(s instanceof a.onnx.TypeProto.Tensor)return s;var c=new a.onnx.TypeProto.Tensor;if(s.elemType!=null&&(c.elemType=s.elemType|0),s.shape!=null){if(typeof s.shape!="object")throw TypeError(".onnx.TypeProto.Tensor.shape: object expected");c.shape=a.onnx.TensorShapeProto.fromObject(s.shape)}return c},l.toObject=function(s,c){c||(c={});var h={};return c.defaults&&(h.elemType=0,h.shape=null),s.elemType!=null&&s.hasOwnProperty("elemType")&&(h.elemType=s.elemType),s.shape!=null&&s.hasOwnProperty("shape")&&(h.shape=a.onnx.TensorShapeProto.toObject(s.shape,c)),h},l.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},l.getTypeUrl=function(s){return s===void 0&&(s="type.googleapis.com"),s+"/onnx.TypeProto.Tensor"},l}(),p.Sequence=function(){function l(s){if(s)for(var c=Object.keys(s),h=0;h<c.length;++h)s[c[h]]!=null&&(this[c[h]]=s[c[h]])}return l.prototype.elemType=null,l.create=function(s){return new l(s)},l.encode=function(s,c){return c||(c=u.create()),s.elemType!=null&&Object.hasOwnProperty.call(s,"elemType")&&a.onnx.TypeProto.encode(s.elemType,c.uint32(10).fork()).ldelim(),c},l.encodeDelimited=function(s,c){return this.encode(s,c).ldelim()},l.decode=function(s,c){s instanceof o||(s=o.create(s));for(var h=c===void 0?s.len:s.pos+c,g=new a.onnx.TypeProto.Sequence;s.pos<h;){var y=s.uint32();switch(y>>>3){case 1:{g.elemType=a.onnx.TypeProto.decode(s,s.uint32());break}default:s.skipType(y&7);break}}return g},l.decodeDelimited=function(s){return s instanceof o||(s=new o(s)),this.decode(s,s.uint32())},l.verify=function(s){if(typeof s!="object"||s===null)return"object expected";if(s.elemType!=null&&s.hasOwnProperty("elemType")){var c=a.onnx.TypeProto.verify(s.elemType);if(c)return"elemType."+c}return null},l.fromObject=function(s){if(s instanceof a.onnx.TypeProto.Sequence)return s;var c=new a.onnx.TypeProto.Sequence;if(s.elemType!=null){if(typeof s.elemType!="object")throw TypeError(".onnx.TypeProto.Sequence.elemType: object expected");c.elemType=a.onnx.TypeProto.fromObject(s.elemType)}return c},l.toObject=function(s,c){c||(c={});var h={};return c.defaults&&(h.elemType=null),s.elemType!=null&&s.hasOwnProperty("elemType")&&(h.elemType=a.onnx.TypeProto.toObject(s.elemType,c)),h},l.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},l.getTypeUrl=function(s){return s===void 0&&(s="type.googleapis.com"),s+"/onnx.TypeProto.Sequence"},l}(),p.Map=function(){function l(s){if(s)for(var c=Object.keys(s),h=0;h<c.length;++h)s[c[h]]!=null&&(this[c[h]]=s[c[h]])}return l.prototype.keyType=0,l.prototype.valueType=null,l.create=function(s){return new l(s)},l.encode=function(s,c){return c||(c=u.create()),s.keyType!=null&&Object.hasOwnProperty.call(s,"keyType")&&c.uint32(8).int32(s.keyType),s.valueType!=null&&Object.hasOwnProperty.call(s,"valueType")&&a.onnx.TypeProto.encode(s.valueType,c.uint32(18).fork()).ldelim(),c},l.encodeDelimited=function(s,c){return this.encode(s,c).ldelim()},l.decode=function(s,c){s instanceof o||(s=o.create(s));for(var h=c===void 0?s.len:s.pos+c,g=new a.onnx.TypeProto.Map;s.pos<h;){var y=s.uint32();switch(y>>>3){case 1:{g.keyType=s.int32();break}case 2:{g.valueType=a.onnx.TypeProto.decode(s,s.uint32());break}default:s.skipType(y&7);break}}return g},l.decodeDelimited=function(s){return s instanceof o||(s=new o(s)),this.decode(s,s.uint32())},l.verify=function(s){if(typeof s!="object"||s===null)return"object expected";if(s.keyType!=null&&s.hasOwnProperty("keyType")&&!n.isInteger(s.keyType))return"keyType: integer expected";if(s.valueType!=null&&s.hasOwnProperty("valueType")){var c=a.onnx.TypeProto.verify(s.valueType);if(c)return"valueType."+c}return null},l.fromObject=function(s){if(s instanceof a.onnx.TypeProto.Map)return s;var c=new a.onnx.TypeProto.Map;if(s.keyType!=null&&(c.keyType=s.keyType|0),s.valueType!=null){if(typeof s.valueType!="object")throw TypeError(".onnx.TypeProto.Map.valueType: object expected");c.valueType=a.onnx.TypeProto.fromObject(s.valueType)}return c},l.toObject=function(s,c){c||(c={});var h={};return c.defaults&&(h.keyType=0,h.valueType=null),s.keyType!=null&&s.hasOwnProperty("keyType")&&(h.keyType=s.keyType),s.valueType!=null&&s.hasOwnProperty("valueType")&&(h.valueType=a.onnx.TypeProto.toObject(s.valueType,c)),h},l.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},l.getTypeUrl=function(s){return s===void 0&&(s="type.googleapis.com"),s+"/onnx.TypeProto.Map"},l}(),p.Optional=function(){function l(s){if(s)for(var c=Object.keys(s),h=0;h<c.length;++h)s[c[h]]!=null&&(this[c[h]]=s[c[h]])}return l.prototype.elemType=null,l.create=function(s){return new l(s)},l.encode=function(s,c){return c||(c=u.create()),s.elemType!=null&&Object.hasOwnProperty.call(s,"elemType")&&a.onnx.TypeProto.encode(s.elemType,c.uint32(10).fork()).ldelim(),c},l.encodeDelimited=function(s,c){return this.encode(s,c).ldelim()},l.decode=function(s,c){s instanceof o||(s=o.create(s));for(var h=c===void 0?s.len:s.pos+c,g=new a.onnx.TypeProto.Optional;s.pos<h;){var y=s.uint32();switch(y>>>3){case 1:{g.elemType=a.onnx.TypeProto.decode(s,s.uint32());break}default:s.skipType(y&7);break}}return g},l.decodeDelimited=function(s){return s instanceof o||(s=new o(s)),this.decode(s,s.uint32())},l.verify=function(s){if(typeof s!="object"||s===null)return"object expected";if(s.elemType!=null&&s.hasOwnProperty("elemType")){var c=a.onnx.TypeProto.verify(s.elemType);if(c)return"elemType."+c}return null},l.fromObject=function(s){if(s instanceof a.onnx.TypeProto.Optional)return s;var c=new a.onnx.TypeProto.Optional;if(s.elemType!=null){if(typeof s.elemType!="object")throw TypeError(".onnx.TypeProto.Optional.elemType: object expected");c.elemType=a.onnx.TypeProto.fromObject(s.elemType)}return c},l.toObject=function(s,c){c||(c={});var h={};return c.defaults&&(h.elemType=null),s.elemType!=null&&s.hasOwnProperty("elemType")&&(h.elemType=a.onnx.TypeProto.toObject(s.elemType,c)),h},l.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},l.getTypeUrl=function(s){return s===void 0&&(s="type.googleapis.com"),s+"/onnx.TypeProto.Optional"},l}(),p.SparseTensor=function(){function l(s){if(s)for(var c=Object.keys(s),h=0;h<c.length;++h)s[c[h]]!=null&&(this[c[h]]=s[c[h]])}return l.prototype.elemType=0,l.prototype.shape=null,l.create=function(s){return new l(s)},l.encode=function(s,c){return c||(c=u.create()),s.elemType!=null&&Object.hasOwnProperty.call(s,"elemType")&&c.uint32(8).int32(s.elemType),s.shape!=null&&Object.hasOwnProperty.call(s,"shape")&&a.onnx.TensorShapeProto.encode(s.shape,c.uint32(18).fork()).ldelim(),c},l.encodeDelimited=function(s,c){return this.encode(s,c).ldelim()},l.decode=function(s,c){s instanceof o||(s=o.create(s));for(var h=c===void 0?s.len:s.pos+c,g=new a.onnx.TypeProto.SparseTensor;s.pos<h;){var y=s.uint32();switch(y>>>3){case 1:{g.elemType=s.int32();break}case 2:{g.shape=a.onnx.TensorShapeProto.decode(s,s.uint32());break}default:s.skipType(y&7);break}}return g},l.decodeDelimited=function(s){return s instanceof o||(s=new o(s)),this.decode(s,s.uint32())},l.verify=function(s){if(typeof s!="object"||s===null)return"object expected";if(s.elemType!=null&&s.hasOwnProperty("elemType")&&!n.isInteger(s.elemType))return"elemType: integer expected";if(s.shape!=null&&s.hasOwnProperty("shape")){var c=a.onnx.TensorShapeProto.verify(s.shape);if(c)return"shape."+c}return null},l.fromObject=function(s){if(s instanceof a.onnx.TypeProto.SparseTensor)return s;var c=new a.onnx.TypeProto.SparseTensor;if(s.elemType!=null&&(c.elemType=s.elemType|0),s.shape!=null){if(typeof s.shape!="object")throw TypeError(".onnx.TypeProto.SparseTensor.shape: object expected");c.shape=a.onnx.TensorShapeProto.fromObject(s.shape)}return c},l.toObject=function(s,c){c||(c={});var h={};return c.defaults&&(h.elemType=0,h.shape=null),s.elemType!=null&&s.hasOwnProperty("elemType")&&(h.elemType=s.elemType),s.shape!=null&&s.hasOwnProperty("shape")&&(h.shape=a.onnx.TensorShapeProto.toObject(s.shape,c)),h},l.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},l.getTypeUrl=function(s){return s===void 0&&(s="type.googleapis.com"),s+"/onnx.TypeProto.SparseTensor"},l}(),p}(),d.OperatorSetIdProto=function(){function p(i){if(i)for(var l=Object.keys(i),s=0;s<l.length;++s)i[l[s]]!=null&&(this[l[s]]=i[l[s]])}return p.prototype.domain="",p.prototype.version=n.Long?n.Long.fromBits(0,0,!1):0,p.create=function(i){return new p(i)},p.encode=function(i,l){return l||(l=u.create()),i.domain!=null&&Object.hasOwnProperty.call(i,"domain")&&l.uint32(10).string(i.domain),i.version!=null&&Object.hasOwnProperty.call(i,"version")&&l.uint32(16).int64(i.version),l},p.encodeDelimited=function(i,l){return this.encode(i,l).ldelim()},p.decode=function(i,l){i instanceof o||(i=o.create(i));for(var s=l===void 0?i.len:i.pos+l,c=new a.onnx.OperatorSetIdProto;i.pos<s;){var h=i.uint32();switch(h>>>3){case 1:{c.domain=i.string();break}case 2:{c.version=i.int64();break}default:i.skipType(h&7);break}}return c},p.decodeDelimited=function(i){return i instanceof o||(i=new o(i)),this.decode(i,i.uint32())},p.verify=function(i){return typeof i!="object"||i===null?"object expected":i.domain!=null&&i.hasOwnProperty("domain")&&!n.isString(i.domain)?"domain: string expected":i.version!=null&&i.hasOwnProperty("version")&&!n.isInteger(i.version)&&!(i.version&&n.isInteger(i.version.low)&&n.isInteger(i.version.high))?"version: integer|Long expected":null},p.fromObject=function(i){if(i instanceof a.onnx.OperatorSetIdProto)return i;var l=new a.onnx.OperatorSetIdProto;return i.domain!=null&&(l.domain=String(i.domain)),i.version!=null&&(n.Long?(l.version=n.Long.fromValue(i.version)).unsigned=!1:typeof i.version=="string"?l.version=parseInt(i.version,10):typeof i.version=="number"?l.version=i.version:typeof i.version=="object"&&(l.version=new n.LongBits(i.version.low>>>0,i.version.high>>>0).toNumber())),l},p.toObject=function(i,l){l||(l={});var s={};if(l.defaults)if(s.domain="",n.Long){var c=new n.Long(0,0,!1);s.version=l.longs===String?c.toString():l.longs===Number?c.toNumber():c}else s.version=l.longs===String?"0":0;return i.domain!=null&&i.hasOwnProperty("domain")&&(s.domain=i.domain),i.version!=null&&i.hasOwnProperty("version")&&(typeof i.version=="number"?s.version=l.longs===String?String(i.version):i.version:s.version=l.longs===String?n.Long.prototype.toString.call(i.version):l.longs===Number?new n.LongBits(i.version.low>>>0,i.version.high>>>0).toNumber():i.version),s},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.OperatorSetIdProto"},p}(),d.OperatorStatus=function(){var p={},i=Object.create(p);return i[p[0]="EXPERIMENTAL"]=0,i[p[1]="STABLE"]=1,i}(),d.FunctionProto=function(){function p(i){if(this.input=[],this.output=[],this.attribute=[],this.attributeProto=[],this.node=[],this.opsetImport=[],i)for(var l=Object.keys(i),s=0;s<l.length;++s)i[l[s]]!=null&&(this[l[s]]=i[l[s]])}return p.prototype.name="",p.prototype.input=n.emptyArray,p.prototype.output=n.emptyArray,p.prototype.attribute=n.emptyArray,p.prototype.attributeProto=n.emptyArray,p.prototype.node=n.emptyArray,p.prototype.docString="",p.prototype.opsetImport=n.emptyArray,p.prototype.domain="",p.create=function(i){return new p(i)},p.encode=function(i,l){if(l||(l=u.create()),i.name!=null&&Object.hasOwnProperty.call(i,"name")&&l.uint32(10).string(i.name),i.input!=null&&i.input.length)for(var s=0;s<i.input.length;++s)l.uint32(34).string(i.input[s]);if(i.output!=null&&i.output.length)for(var s=0;s<i.output.length;++s)l.uint32(42).string(i.output[s]);if(i.attribute!=null&&i.attribute.length)for(var s=0;s<i.attribute.length;++s)l.uint32(50).string(i.attribute[s]);if(i.node!=null&&i.node.length)for(var s=0;s<i.node.length;++s)a.onnx.NodeProto.encode(i.node[s],l.uint32(58).fork()).ldelim();if(i.docString!=null&&Object.hasOwnProperty.call(i,"docString")&&l.uint32(66).string(i.docString),i.opsetImport!=null&&i.opsetImport.length)for(var s=0;s<i.opsetImport.length;++s)a.onnx.OperatorSetIdProto.encode(i.opsetImport[s],l.uint32(74).fork()).ldelim();if(i.domain!=null&&Object.hasOwnProperty.call(i,"domain")&&l.uint32(82).string(i.domain),i.attributeProto!=null&&i.attributeProto.length)for(var s=0;s<i.attributeProto.length;++s)a.onnx.AttributeProto.encode(i.attributeProto[s],l.uint32(90).fork()).ldelim();return l},p.encodeDelimited=function(i,l){return this.encode(i,l).ldelim()},p.decode=function(i,l){i instanceof o||(i=o.create(i));for(var s=l===void 0?i.len:i.pos+l,c=new a.onnx.FunctionProto;i.pos<s;){var h=i.uint32();switch(h>>>3){case 1:{c.name=i.string();break}case 4:{c.input&&c.input.length||(c.input=[]),c.input.push(i.string());break}case 5:{c.output&&c.output.length||(c.output=[]),c.output.push(i.string());break}case 6:{c.attribute&&c.attribute.length||(c.attribute=[]),c.attribute.push(i.string());break}case 11:{c.attributeProto&&c.attributeProto.length||(c.attributeProto=[]),c.attributeProto.push(a.onnx.AttributeProto.decode(i,i.uint32()));break}case 7:{c.node&&c.node.length||(c.node=[]),c.node.push(a.onnx.NodeProto.decode(i,i.uint32()));break}case 8:{c.docString=i.string();break}case 9:{c.opsetImport&&c.opsetImport.length||(c.opsetImport=[]),c.opsetImport.push(a.onnx.OperatorSetIdProto.decode(i,i.uint32()));break}case 10:{c.domain=i.string();break}default:i.skipType(h&7);break}}return c},p.decodeDelimited=function(i){return i instanceof o||(i=new o(i)),this.decode(i,i.uint32())},p.verify=function(i){if(typeof i!="object"||i===null)return"object expected";if(i.name!=null&&i.hasOwnProperty("name")&&!n.isString(i.name))return"name: string expected";if(i.input!=null&&i.hasOwnProperty("input")){if(!Array.isArray(i.input))return"input: array expected";for(var l=0;l<i.input.length;++l)if(!n.isString(i.input[l]))return"input: string[] expected"}if(i.output!=null&&i.hasOwnProperty("output")){if(!Array.isArray(i.output))return"output: array expected";for(var l=0;l<i.output.length;++l)if(!n.isString(i.output[l]))return"output: string[] expected"}if(i.attribute!=null&&i.hasOwnProperty("attribute")){if(!Array.isArray(i.attribute))return"attribute: array expected";for(var l=0;l<i.attribute.length;++l)if(!n.isString(i.attribute[l]))return"attribute: string[] expected"}if(i.attributeProto!=null&&i.hasOwnProperty("attributeProto")){if(!Array.isArray(i.attributeProto))return"attributeProto: array expected";for(var l=0;l<i.attributeProto.length;++l){var s=a.onnx.AttributeProto.verify(i.attributeProto[l]);if(s)return"attributeProto."+s}}if(i.node!=null&&i.hasOwnProperty("node")){if(!Array.isArray(i.node))return"node: array expected";for(var l=0;l<i.node.length;++l){var s=a.onnx.NodeProto.verify(i.node[l]);if(s)return"node."+s}}if(i.docString!=null&&i.hasOwnProperty("docString")&&!n.isString(i.docString))return"docString: string expected";if(i.opsetImport!=null&&i.hasOwnProperty("opsetImport")){if(!Array.isArray(i.opsetImport))return"opsetImport: array expected";for(var l=0;l<i.opsetImport.length;++l){var s=a.onnx.OperatorSetIdProto.verify(i.opsetImport[l]);if(s)return"opsetImport."+s}}return i.domain!=null&&i.hasOwnProperty("domain")&&!n.isString(i.domain)?"domain: string expected":null},p.fromObject=function(i){if(i instanceof a.onnx.FunctionProto)return i;var l=new a.onnx.FunctionProto;if(i.name!=null&&(l.name=String(i.name)),i.input){if(!Array.isArray(i.input))throw TypeError(".onnx.FunctionProto.input: array expected");l.input=[];for(var s=0;s<i.input.length;++s)l.input[s]=String(i.input[s])}if(i.output){if(!Array.isArray(i.output))throw TypeError(".onnx.FunctionProto.output: array expected");l.output=[];for(var s=0;s<i.output.length;++s)l.output[s]=String(i.output[s])}if(i.attribute){if(!Array.isArray(i.attribute))throw TypeError(".onnx.FunctionProto.attribute: array expected");l.attribute=[];for(var s=0;s<i.attribute.length;++s)l.attribute[s]=String(i.attribute[s])}if(i.attributeProto){if(!Array.isArray(i.attributeProto))throw TypeError(".onnx.FunctionProto.attributeProto: array expected");l.attributeProto=[];for(var s=0;s<i.attributeProto.length;++s){if(typeof i.attributeProto[s]!="object")throw TypeError(".onnx.FunctionProto.attributeProto: object expected");l.attributeProto[s]=a.onnx.AttributeProto.fromObject(i.attributeProto[s])}}if(i.node){if(!Array.isArray(i.node))throw TypeError(".onnx.FunctionProto.node: array expected");l.node=[];for(var s=0;s<i.node.length;++s){if(typeof i.node[s]!="object")throw TypeError(".onnx.FunctionProto.node: object expected");l.node[s]=a.onnx.NodeProto.fromObject(i.node[s])}}if(i.docString!=null&&(l.docString=String(i.docString)),i.opsetImport){if(!Array.isArray(i.opsetImport))throw TypeError(".onnx.FunctionProto.opsetImport: array expected");l.opsetImport=[];for(var s=0;s<i.opsetImport.length;++s){if(typeof i.opsetImport[s]!="object")throw TypeError(".onnx.FunctionProto.opsetImport: object expected");l.opsetImport[s]=a.onnx.OperatorSetIdProto.fromObject(i.opsetImport[s])}}return i.domain!=null&&(l.domain=String(i.domain)),l},p.toObject=function(i,l){l||(l={});var s={};if((l.arrays||l.defaults)&&(s.input=[],s.output=[],s.attribute=[],s.node=[],s.opsetImport=[],s.attributeProto=[]),l.defaults&&(s.name="",s.docString="",s.domain=""),i.name!=null&&i.hasOwnProperty("name")&&(s.name=i.name),i.input&&i.input.length){s.input=[];for(var c=0;c<i.input.length;++c)s.input[c]=i.input[c]}if(i.output&&i.output.length){s.output=[];for(var c=0;c<i.output.length;++c)s.output[c]=i.output[c]}if(i.attribute&&i.attribute.length){s.attribute=[];for(var c=0;c<i.attribute.length;++c)s.attribute[c]=i.attribute[c]}if(i.node&&i.node.length){s.node=[];for(var c=0;c<i.node.length;++c)s.node[c]=a.onnx.NodeProto.toObject(i.node[c],l)}if(i.docString!=null&&i.hasOwnProperty("docString")&&(s.docString=i.docString),i.opsetImport&&i.opsetImport.length){s.opsetImport=[];for(var c=0;c<i.opsetImport.length;++c)s.opsetImport[c]=a.onnx.OperatorSetIdProto.toObject(i.opsetImport[c],l)}if(i.domain!=null&&i.hasOwnProperty("domain")&&(s.domain=i.domain),i.attributeProto&&i.attributeProto.length){s.attributeProto=[];for(var c=0;c<i.attributeProto.length;++c)s.attributeProto[c]=a.onnx.AttributeProto.toObject(i.attributeProto[c],l)}return s},p.prototype.toJSON=function(){return this.constructor.toObject(this,r.util.toJSONOptions)},p.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.FunctionProto"},p}(),d}(),t.exports=a});function ue$1(e,t){if(!e)throw new Error(typeof t=="string"?t:t())}function Ie$2(e){return new TextDecoder().decode(e)}var H$1,Kt$2,nn$1,it$1,er$2,rt$2,ft$1,O,we$1,Xt$2,Jt$2,Zt$2,z$1=x$1(()=>{Je$1(),Ur$2(),H$1=ne(se$1()),Yt$2(),Kt$2=class{static arraysEqual(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}},nn$1=class{static preprocessInputShapes(e,t){let r=e.length===1?[1,e[0]]:e,o=t.length===1?[t[0],1]:t;return[r,o]}static postprocessOutputShape(e,t,r){t===1&&e.splice(e.length-2,1),r===1&&e.pop()}static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},it$1=class $g{static calcShape(t,r,o=!1){let u=t.length,n=r.length;if(u===0)return r;if(n===0)return t;let a=Math.max(t.length,r.length),d=new Array(a);if(o){if(u<2||n<2)return;let p=nn$1.calcMatMulShape([t[u-2],t[u-1]],[r[n-2],r[n-1]]);if(p===void 0)return;[d[a-2],d[a-1]]=p}for(let p=o?3:1;p<=a;p++){let i=u-p<0?1:t[u-p],l=n-p<0?1:r[n-p];if(i!==l&&i>1&&l>1)return;d[a-p]=Math.max(i,l)}return d}static index(t,r){let o=new Array(r.length);return $g.fillIndex(t,r,o),o}static fillIndex(t,r,o){let u=t.length-r.length;for(let n=0;n<r.length;n++)o[n]=t[u+n]%r[n]}static calc(t,r,o,u,n){let a=$g.calcShape(t.dims,r.dims);if(a){if(u&&!O.areEqual(a,t.dims))return;let d=O.size(a),p=u?t:new Y$1(a,n||t.type);if(a.length===0)p.set([],o(t.get([]),r.get([])));else{let i=new Array(a.length),l=new Array(t.dims.length),s=new Array(r.dims.length),c=0,h=0,g=!1,y=!1;t.dims.length===0&&(c=t.get([]),g=!0),r.dims.length===0&&(h=r.get([]),y=!0);let C;for(let W=0;W<d;W++){C=W;for(let A=a.length-1;A>=0;A--)i[A]=C%a[A],C=Math.floor(C/a[A]);g||($g.fillIndex(i,t.dims,l),c=t.get(l)),y||($g.fillIndex(i,r.dims,s),h=r.get(s)),p.set(i,o(c,h))}}return p}}static isValidBroadcast(t,r){let o=t.length,u=r.length;if(o>u)return!1;for(let n=1;n<=o;n++)if(t[o-n]!==1&&t[o-n]!==r[u-n])return!1;return!0}static getBroadcastDims(t,r){let o=t.length,u=[];for(let n=0;n<o;n++){let a=o-1-n,d=t[a]||1;(r[r.length-1-n]||1)>1&&d===1&&u.unshift(a)}return u}},er$2=class{static getShapeOfGemmResult(e,t,r,o,u){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,a,d;t?(n=e[1],a=e[0]):(n=e[0],a=e[1]);let p=-1;if(o?(d=r[0],p=1):(d=r[1],p=0),r[p]!==a)throw new Error("dimension mismatch");if(n<=0||d<=0||a<=0)throw new Error("invalid shape specified");if(u&&!it$1.isValidBroadcast(u,[n,d]))throw new Error("gemm: invalid bias shape for broadcast");return[n,d,a]}},rt$2=class sy{static tensorDataTypeFromProto(t){switch(t){case H$1.onnx.TensorProto.DataType.INT8:return"int8";case H$1.onnx.TensorProto.DataType.UINT8:return"uint8";case H$1.onnx.TensorProto.DataType.BOOL:return"bool";case H$1.onnx.TensorProto.DataType.INT16:return"int16";case H$1.onnx.TensorProto.DataType.UINT16:return"uint16";case H$1.onnx.TensorProto.DataType.INT32:return"int32";case H$1.onnx.TensorProto.DataType.UINT32:return"uint32";case H$1.onnx.TensorProto.DataType.FLOAT:return"float32";case H$1.onnx.TensorProto.DataType.DOUBLE:return"float64";case H$1.onnx.TensorProto.DataType.STRING:return"string";case H$1.onnx.TensorProto.DataType.INT64:return"int32";case H$1.onnx.TensorProto.DataType.UINT64:return"uint32";default:throw new Error(`unsupported data type: ${H$1.onnx.TensorProto.DataType[t]}`)}}static tensorDataTypeStringToEnum(t){switch(t){case"int8":return H$1.onnx.TensorProto.DataType.INT8;case"uint8":return H$1.onnx.TensorProto.DataType.UINT8;case"bool":return H$1.onnx.TensorProto.DataType.BOOL;case"int16":return H$1.onnx.TensorProto.DataType.INT16;case"uint16":return H$1.onnx.TensorProto.DataType.UINT16;case"int32":return H$1.onnx.TensorProto.DataType.INT32;case"uint32":return H$1.onnx.TensorProto.DataType.UINT32;case"float32":return H$1.onnx.TensorProto.DataType.FLOAT;case"float64":return H$1.onnx.TensorProto.DataType.DOUBLE;case"string":return H$1.onnx.TensorProto.DataType.STRING;case"int64":return H$1.onnx.TensorProto.DataType.INT64;case"uint64":return H$1.onnx.TensorProto.DataType.UINT64;default:throw new Error(`unsupported data type: ${t}`)}}static tensorDimsFromProto(t){return t.map(r=>kt$2.isLong(r)?r.toNumber():r)}static tensorValueTypeFromProto(t){return{tensorType:sy.tensorDataTypeFromProto(t.elemType),shape:{dims:sy.tensorDimsFromProto(t.shape.dim.map(r=>r.dimValue))}}}static tensorDimsFromORTFormat(t){let r=[];for(let o=0;o<t.dimsLength();o++)r.push(ft$1.longToNumber(t.dims(o)));return r}static tensorAttributesFromORTFormat(t){let r=[];for(let o=0;o<t.attributesLength();o++)r.push(t.attributes(o));return r}},ft$1=class{static longToNumber(e,t){return kt$2.isLong(e)?e.toNumber():e instanceof m.Long?kt$2.fromValue({low:e.low,high:e.high,unsigned:t??!1}).toNumber():e}static isLong(e){return kt$2.isLong(e)||e instanceof m.Long}},O=class lg{static size(t){return lg.getSizeFromDimensionRange(t,0,t.length)}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return lg.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return lg.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,o){let u=1;for(let n=r;n<o;n++){if(t[n]<=0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains 0 or negative values in them.");u*=t[n]}return u}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let o=new Array(r);o[r-1]=1,o[r-2]=t[r-1];for(let u=r-3;u>=0;--u)o[u]=o[u+1]*t[u+1];return o}static transpose(t){return t.slice().reverse()}static indicesToOffset(t,r,o){o===void 0&&(o=t.length);let u=0;for(let n=0;n<o;++n)u+=r[n]*t[n];return u}static offsetToIndices(t,r){let o=r.length;if(o===0)return[];if(o===1)return[t*r[0]];let u=new Array(r.length);for(let n=0;n<u.length-1;++n)u[n]=Math.floor(t/r[n]),t-=u[n]*r[n];return u[u.length-1]=t,u}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(o=>this.normalizeAxis(o,r))}static incrementIndex(t,r,o){if(r.length===0||t.length===0)throw new Error("Index incrementing unsupported for scalar Tensor");if(o===void 0)o=r.length;else if(o<=0||o>r.length)throw new Error("Incorrect axis to increment on");for(let u=o-1;u>=0&&(t[u]++,!(t[u]<r[u]));--u)t[u]=0}static calculateReshapedDims(t,r){if(r.length===0){if(t.length===0||lg.size(t)===1)return[];throw new Error("cannot reshape to a scalar Tensor")}let o=r.length,u=new Array(o),n=-1,a=1;for(let p=0;p<o;p++){if(r[p]<-1)throw new Error("a dimension in shape hints cannot be less than -1");if(r[p]===-1){if(n!==-1)throw new Error("at most one dimension in shape hints can be -1");n=p}else{if(r[p]===0){if(p>=t.length)throw new Error("the dimension with value zero exceeds the dimension size of the input tensor");u[p]=t[p]}else u[p]=r[p];a*=u[p]}}let d=lg.size(t);if(n!==-1){if(d%a!==0)throw new Error(`the input tensor cannot be reshaped to the requested shape. Input shape: [${t}] Output shape: [${r}]`);u[n]=d/a}else if(a!==d)throw new Error("reshapedDims and originalDims don't have matching sizes");return u}static sortBasedOnPerm(t,r){return r?r.map(o=>t[o]):t.slice().reverse()}static padShape(t,r){let o=t.length;return t.map((u,n)=>u+r[n]+r[n+o])}static areEqual(t,r){return t.length!==r.length?!1:t.every((o,u)=>o===r[u])}static validateDimsAndCalcSize(t){if(t.length>6)throw new TypeError("Only rank 0 to 6 is supported for tensor shape.");let r=1;for(let o of t){if(!Number.isInteger(o))throw new TypeError(`Invalid shape: ${o} is not an integer`);if(o<0||o>2147483647)throw new TypeError(`Invalid shape: length ${o} is not allowed`);r*=o}return r}static flattenShape(t,r){r<0&&(r+=t.length);let o=t.reduce((n,a)=>n*a,1),u=t.slice(r).reduce((n,a)=>n*a,1);return[o/u,u]}static squeezeShape(t,r){let o=new Array;r=lg.normalizeAxes(r,t.length);for(let u=0;u<t.length;u++){let n=r.indexOf(u)>=0;if(n&&t[u]!==1)throw new Error("squeeze an axis of size different than 1");(r.length===0&&t[u]>1||r.length>0&&!n)&&o.push(t[u])}return o}static unsqueezeShape(t,r){let o=new Array(t.length+r.length);o.fill(0);for(let n=0;n<r.length;n++){let a=lg.normalizeAxis(r[n],o.length);if(a>=o.length)throw new Error("'axes' has an out of range axis");if(o[a]!==0)throw new Error("'axes' has a duplicate axis");o[a]=1}let u=0;for(let n=0;n<o.length;n++)o[n]===0&&(o[n]=t[u++]);if(u!==t.length)throw new Error("the unsqueezed dimension could not be established");return o}},we$1=class k1{static splitShape(t,r,o,u){if(o.length===0){if(!u)throw new Error("need to know number of outputs when the 'split' attribute is not specified");k1.determineSplit(t[r],u,o)}let n=[],a=[0];for(let d=0;d<o.length;++d){d!==0&&a.push(a[d-1]+o[d-1]);let p=t.slice();p[r]=o[d],n.push(p)}return[n,a]}static determineSplit(t,r,o){if(t%r!==0)throw new Error("cannot split tensor to equal sized parts");for(let u=0;u<r;++u)o.push(t/r)}},Xt$2=class wg{static adjustPoolAttributes(t,r,o,u,n,a){if(!t&&o.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let d=0;d<r.length-2;d++)d>=o.length?o.push(r[d+2]):o[d]=r[d+2];for(let d=0;d<o.length;d++)if(d<u.length){if(u[d]<0)throw new Error("strides should be greater than or equal to 1")}else u.push(1);for(let d=0;d<o.length;d++)if(d<n.length){if(n[d]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let d=0;d<o.length*2;d++)if(d<a.length){if(a[d]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let d=0;d<o.length;d++){if(o[d]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[d]>=o[d]||a[d+o.length]>=o[d])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,o,u,n,a){if(a){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(u.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let d=0;d<t.length-2;d++)wg.adjustPadAndReturnShape(t[d+2],r[d],o[d],u[d],n,d,d+t.length-2,a)}}static computePoolOutputShape(t,r,o,u,n,a,d){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let p=[r[0],r[1]];return wg.computeShapeHelper(t,r,p,o,u,n,a,d),p}static computeConvOutputShape(t,r,o,u,n,a,d){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let p=[t[0],r[0]];return wg.computeShapeHelper(!1,t,p,o,u,n,a,d),p}static computeShapeHelper(t,r,o,u,n,a,d,p){if(t)for(let i=0;i<r.length-2;i++)o.push(1);else for(let i=0;i<r.length-2;i++)o.push(wg.adjustPadAndReturnShape(r[i+2],u[i],n[i],a[i],d,i,i+r.length-2,p))}static adjustPadAndReturnShape(t,r,o,u,n,a,d,p){let i=o*(u-1)+1;if(p&&p!=="NOTSET")switch(p){case"VALID":return n[a]=0,n[d]=0,Math.floor((t-i)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(o!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let l=((t+r-1)/r-1)*r+u-t;return n[a]=Math.floor(p==="SAME_LOWER"?(l+1)/2:l/2),n[d]=l-n[a],Math.floor((t+l-u)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+n[a]+n[d]-i)/r+1)}},Jt$2=-34028234663852886e22,Zt$2=34028234663852886e22});function Yl$1(e){switch(e){case"bool":case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;case"float64":return 8;default:throw new Error(`cannot calculate sizeof() on type ${e}`)}}function Ci(e){switch(e){case k$1.onnx.TensorProto.DataType.UINT8:case k$1.onnx.TensorProto.DataType.INT8:case k$1.onnx.TensorProto.DataType.BOOL:return 1;case k$1.onnx.TensorProto.DataType.UINT16:case k$1.onnx.TensorProto.DataType.INT16:return 2;case k$1.onnx.TensorProto.DataType.FLOAT:case k$1.onnx.TensorProto.DataType.INT32:case k$1.onnx.TensorProto.DataType.UINT32:return 4;case k$1.onnx.TensorProto.DataType.INT64:case k$1.onnx.TensorProto.DataType.DOUBLE:case k$1.onnx.TensorProto.DataType.UINT64:return 8;default:throw new Error(`cannot calculate sizeof() on type ${k$1.onnx.TensorProto.DataType[e]}`)}}function Ql$1(e,t){return new(Vi(t))(e)}function Vi(e){switch(e){case"bool":case"uint8":return Uint8Array;case"int8":return Int8Array;case"int16":return Int16Array;case"uint16":return Uint16Array;case"int32":return Int32Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"float32":return Float32Array;case"float64":return Float64Array;default:throw new Error("unspecified error")}}function an$1(e,t){if(t===k$1.onnx.TensorProto.DataType.INT64||t===on$1.TensorDataType.INT64){if(e.greaterThanOrEqual(2147483648)||e.lessThan(-2147483648))throw new TypeError("int64 is not supported")}else if(t===k$1.onnx.TensorProto.DataType.UINT32||t===on$1.TensorDataType.UINT32||t===k$1.onnx.TensorProto.DataType.UINT64||t===on$1.TensorDataType.UINT64){if(e.greaterThanOrEqual(4294967296)||e.lessThan(0))throw new TypeError("uint64 is not supported")}else throw new TypeError(`not a LONG type: ${k$1.onnx.TensorProto.DataType[t]}`);return e.toNumber()}function Gi(e,t,r){switch(t){case k$1.onnx.TensorProto.DataType.BOOL:case k$1.onnx.TensorProto.DataType.UINT8:return e.getUint8(r);case k$1.onnx.TensorProto.DataType.INT8:return e.getInt8(r);case k$1.onnx.TensorProto.DataType.UINT16:return e.getUint16(r,!0);case k$1.onnx.TensorProto.DataType.INT16:return e.getInt16(r,!0);case k$1.onnx.TensorProto.DataType.FLOAT:return e.getFloat32(r,!0);case k$1.onnx.TensorProto.DataType.INT32:return e.getInt32(r,!0);case k$1.onnx.TensorProto.DataType.UINT32:return e.getUint32(r,!0);case k$1.onnx.TensorProto.DataType.INT64:return an$1(kt$2.fromBits(e.getUint32(r,!0),e.getUint32(r+4,!0),!1),t);case k$1.onnx.TensorProto.DataType.DOUBLE:return e.getFloat64(r,!0);case k$1.onnx.TensorProto.DataType.UINT64:return an$1(kt$2.fromBits(e.getUint32(r,!0),e.getUint32(r+4,!0),!0),t);default:throw new Error(`cannot read from DataView for type ${k$1.onnx.TensorProto.DataType[t]}`)}}var Ri,k$1,on$1,Y$1,Yt$2=x$1(()=>{Ri=ne(Po$1()),Ur$2(),ge$2(),k$1=ne(se$1()),z$1(),on$1=P$1.experimental.fbs,Y$1=class Rg{constructor(t,r,o,u,n,a=Ri.Guid.create()){this.dims=t,this.type=r,this.dataProvider=o,this.asyncDataProvider=u,this.cache=n,this.dataId=a,this.size=O.validateDimsAndCalcSize(t);let d=this.size,p=o===void 0&&u===void 0&&n===void 0;if(n!==void 0&&n.length!==d)throw new RangeError("Input dims doesn't match data length.");if(r==="string"){if(n!==void 0&&(!Array.isArray(n)||!n.every(i=>typeof i=="string")))throw new TypeError("cache should be a string array");p&&(this.cache=new Array(d))}else{if(n!==void 0){let i=Vi(r);if(!(n instanceof i))throw new TypeError(`cache should be type ${i.name}`)}if(p){let i=new ArrayBuffer(d*Yl$1(r));this.cache=Ql$1(i,r)}}}get data(){if(this.cache===void 0){let t=this.dataProvider(this.dataId);if(t.length!==this.size)throw new Error("Length of data provided by the Data Provider is inconsistent with the dims of this Tensor.");this.cache=t}return this.cache}get stringData(){if(this.type!=="string")throw new TypeError("data type is not string");return this.data}get integerData(){switch(this.type){case"uint8":case"int8":case"uint16":case"int16":case"int32":case"uint32":case"bool":return this.data;default:throw new TypeError("data type is not integer (uint8, int8, uint16, int16, int32, uint32, bool)")}}get floatData(){switch(this.type){case"float32":case"float64":return this.data;default:throw new TypeError("data type is not float (float32, float64)")}}get numberData(){if(this.type!=="string")return this.data;throw new TypeError("type cannot be non-number (string)")}get(t){return this.data[O.indicesToOffset(t,this.strides)]}set(t,r){this.data[O.indicesToOffset(t,this.strides)]=r}async getData(){return this.cache===void 0&&(this.cache=await this.asyncDataProvider(this.dataId)),this.cache}get strides(){return this._strides||(this._strides=O.computeStrides(this.dims)),this._strides}static fromProto(t){if(!t)throw new Error("cannot construct Value from an empty tensor");let r=rt$2.tensorDataTypeFromProto(t.dataType),o=rt$2.tensorDimsFromProto(t.dims),u=new Rg(o,r);if(r==="string")t.stringData.forEach((n,a)=>{u.data[a]=Ie$2(n)});else if(t.rawData&&typeof t.rawData.byteLength=="number"&&t.rawData.byteLength>0){let n=u.data,a=new DataView(t.rawData.buffer,t.rawData.byteOffset,t.rawData.byteLength),d=Ci(t.dataType),p=t.rawData.byteLength/d;if(t.rawData.byteLength%d!==0)throw new Error("invalid buffer length");if(n.length!==p)throw new Error("buffer length mismatch");for(let i=0;i<p;i++){let l=Gi(a,t.dataType,i*d);n[i]=l}}else{let n;switch(t.dataType){case k$1.onnx.TensorProto.DataType.FLOAT:n=t.floatData;break;case k$1.onnx.TensorProto.DataType.INT32:case k$1.onnx.TensorProto.DataType.INT16:case k$1.onnx.TensorProto.DataType.UINT16:case k$1.onnx.TensorProto.DataType.INT8:case k$1.onnx.TensorProto.DataType.UINT8:case k$1.onnx.TensorProto.DataType.BOOL:n=t.int32Data;break;case k$1.onnx.TensorProto.DataType.INT64:n=t.int64Data;break;case k$1.onnx.TensorProto.DataType.DOUBLE:n=t.doubleData;break;case k$1.onnx.TensorProto.DataType.UINT32:case k$1.onnx.TensorProto.DataType.UINT64:n=t.uint64Data;break;default:throw new Error("unspecific error")}if(n==null)throw new Error("failed to populate data from a tensorproto value");let a=u.data;if(a.length!==n.length)throw new Error("array length mismatch");for(let d=0;d<n.length;d++){let p=n[d];kt$2.isLong(p)?a[d]=an$1(p,t.dataType):a[d]=p}}return u}static fromData(t,r,o){return new Rg(r,o,void 0,void 0,t)}static fromOrtTensor(t){if(!t)throw new Error("cannot construct Value from an empty tensor");let r=rt$2.tensorDimsFromORTFormat(t),o=rt$2.tensorDataTypeFromProto(t.dataType()),u=new Rg(r,o);if(o==="string")for(let n=0;n<t.stringDataLength();n++)u.data[n]=t.stringData(n);else if(t.rawDataArray()&&typeof t.rawDataLength()=="number"&&t.rawDataLength()>0){let n=u.data,a=new DataView(t.rawDataArray().buffer,t.rawDataArray().byteOffset,t.rawDataLength()),d=Ci(t.dataType()),p=t.rawDataLength()/d;if(t.rawDataLength()%d!==0)throw new Error("invalid buffer length");if(n.length!==p)throw new Error("buffer length mismatch");for(let i=0;i<p;i++){let l=Gi(a,t.dataType(),i*d);n[i]=l}}return u}}});function D(e){return e===1?tf$1:ef$1}function zi(e){let t=D(e);return`${t.version}
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
  `}var tf$1,ef$1,q=x$1(()=>{tf$1={version:"",attribute:"attribute",varyingVertex:"varying",varyingFrag:"varying",texture2D:"texture2D",output:"gl_FragColor",outputDeclaration:""},ef$1={version:"#version 300 es",attribute:"in",varyingVertex:"out",varyingFrag:"in",texture2D:"texture",output:"outputColor",outputDeclaration:"out vec4 outputColor;"}}),N=x$1(()=>{});async function sn$1(e,t=o=>0,r){return new Promise((o,u)=>{let n=0,a=()=>{if(e()){o();return}n++;let d=t(n);setTimeout(a,d)};a()})}function rr$2(e){return ue$1(typeof e<"u"&&e.length!==0,()=>"empty string found for sampler name"),"get"+e.charAt(0).toUpperCase()+e.slice(1)}function Wi(e){return ue$1(typeof e<"u"&&e.length!==0,()=>"empty string found for sampler name"),"get"+e.charAt(0).toUpperCase()+e.slice(1)+"AtOutCoords"}function le$1(e,t){let r=JSON.parse(JSON.stringify(e));return r=t,r}function fe$1(e,t){return t.map(r=>e[r]).join(", ")}function at$1(e){if(e<=1)return"int";if(e===2)return"ivec2";if(e===3)return"ivec3";if(e===4)return"ivec4";if(e===5)return"ivec5";if(e===6)return"ivec6";throw Error(`GPU for rank ${e} is not yet supported`)}function St$2(e=6){return["x","y","z","w","u","v"].slice(0,e)}var Pt$2=x$1(()=>{z$1()});function rf$1(e,t){return St$2(t).map(r=>`${e}.${r}`)}function ce$1(e,t){return t===1?[e]:rf$1(e,t)}function Et$2(){return`
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
  `}var Qt$2=x$1(()=>{Pt$2()});function of$1(e,t,r){if(e===0)return"false";if(e===1)return`rc > ${t[0]}`;let o="";for(let u=e-2;u<e;u++)o+=`${r[u]} >= ${t[u-e+2]}`,u<e-1&&(o+="||");return o}function af$1(e,t){let r=e.length;if(r===0)return"getA(), 0, 0, 0";if(r===1)return`getA(rc),
            rc + 1 >= ${e[0]} ? 0. : getA(rc + 1),
            0, 0`;let o="r, c",u="r, cp1",n="rp1, c",a="rp1, cp1",d="";if(r>2)for(let p=0;p<r-2;++p)d=d+`${t[p]},`;return`getA(${d}${o}),
          rEdge ? 0. : getA(${d}${n}),
          cEdge ? 0. : getA(${d}${u}),
          rEdge || cEdge ? 0. : getA(${d}${a})`}function sf$1(e,t,r,o){return e===0||e===1?"":`
    int r = ${t[e-2]};
    int c = ${t[e-1]};
    int rp1 = ${t[e-2]} + 1;
    int cp1 = ${t[e-1]} + 1;
    bool rEdge = rp1 >= ${o};
    bool cEdge = cp1 >= ${r};
    `}var Hi,nf$1,qi,ji=x$1(()=>{q(),N(),Pt$2(),Qt$2(),Hi={name:"pack",inputNames:["A"],inputTypes:[1]},nf$1=(e,t)=>{let r=D(e.session.backend.glContext.version),o=t.dims,u=o.length,n=t.dims.length,a=at$1(n),d=ce$1("rc",n),p=sf$1(n,d,o[o.length-2],o[o.length-1]),i;u===0?i=[1,1]:u===1?i=[o[0],1]:i=[o[n-1],o[n-2]];let l=of$1(n,i,d),s=af$1(o,d),c=`
        void main() {
          ${a} rc = getOutputCoords();

          if(${l}) {
            ${r.output} = vec4(0);
          } else {
            ${p}

            ${r.output} = vec4(${s});
          }
        }
      `;return{...Hi,hasMain:!0,output:{dims:t.dims,type:t.type,textureType:2},shaderSource:c}},qi=(e,t)=>({...Hi,get:()=>nf$1(e,t)})});function un$1(e){if(e.length===0)return[1,1,1];let t=1;for(let r=0;r<e.length-2;++r)t*=e[r];return[t,e.length>1?e[e.length-2]:1,e[e.length-1]]}function Xi(e,t){let r=!1;return e.length===0||t.length===0?r=!0:e.length<2||t.length<2?r=e[e.length-1]===t[t.length-1]:r=e[e.length-1]===t[t.length-1]&&e[e.length-2]===t[t.length-2],r}function ff$1(e){let t=O.computeStrides(e),r=["b","r","c"],o="index";return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t.map((u,n)=>{let a=`int ${r[n]} = ${o} / ${u}`,d=n===t.length-1?`int ${r[n+1]} = ${o} - ${r[n]} * ${u}`:`index -= ${r[n]} * ${u}`;return`${a}; ${d};`}).join("")}
      return ivec3(b, r, c);
    }
  `}function cf$1(e){let t=O.computeStrides(e);return`
  int getFlattenedIndex(ivec3 coords) {
    // reverse y, z order
    return coords.x * ${t[0]} + coords.z * ${t[1]} + coords.y;
  }
`}var uf$1,lf$1,Ki,Ji$1=x$1(()=>{z$1(),q(),N(),Qt$2(),uf$1=e=>({name:"Reshape (packed)",inputTypes:[2],inputNames:["A"],cacheHint:`${e}`}),lf$1=(e,t,r,o)=>{let u=t.dims,n=o,a="";for(let i=0;i<4;i++){let l="";switch(i){case 0:l="outputCoords = rc;";break;case 1:l="outputCoords = ivec3(rc.x, rc.y+1, rc.z);";break;case 2:l="outputCoords = ivec3(rc.x, rc.y, rc.z+1);";break;case 3:l="outputCoords = ivec3(rc.x, rc.y+1, rc.z+1);";break;default:throw new Error}a+=`
        ${l}
        ${i>0?"if(outputCoords.y < rows && outputCoords.z < cols){":""}
          int flattenedIndex = getFlattenedIndex(outputCoords);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flattenedIndex);
          vec2 innerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${i}] = getChannel(getA(inputRC.x, inputRC.y, inputRC.z), innerDims);

        ${i>0?"}":""}
      `}let d=D(e.session.backend.glContext.version),p=`
      ${ff$1(u)}
      ${cf$1(n)}
      ${Et$2()}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.0);

        ivec3 outputCoords;
        int rows = ${n[2]};
        int cols = ${n[1]};

        ${a}
        ${d.output} = result;
      }
    `;return{...r,output:{dims:n,type:t.type,textureType:2},shaderSource:p,hasMain:!0}},Ki=(e,t,r)=>{let o=uf$1(r);return{...o,get:()=>lf$1(e,t,o,r)}}}),ln$1,Zi$1=x$1(()=>{q(),N(),ln$1=(e,t)=>{let r=t.shape,o=D(e.session.backend.glContext.version),u=`
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
    }`,n={name:"Uint8Encode",inputTypes:[0],inputNames:["X"],output:{dims:r,type:t.tensor.type,textureType:3},shaderSource:u,hasMain:!0};return e.executeProgram(n,[t.tensor])}});function df$1(e,t){if(e===1)return"rc";let r="";for(let o=0;o<e;o++)r+=t[o],o<e-1&&(r+=",");return r}var Yi,pf$1,Qi$1,ta$1=x$1(()=>{q(),N(),Pt$2(),Qt$2(),Yi={name:"unpack",inputNames:["A"],inputTypes:[2]},pf$1=(e,t)=>{let r=t.dims.length,o=ce$1("rc",r),u=o.slice(-2),n=at$1(r),a=Et$2(),d=t.dims.length===0?"":df$1(r,o),p=r<=1?"rc":`vec2(${u.join(",")})`,i=D(e.session.backend.glContext.version),l=`
    ${a}
    void main() {
      ${n} rc = getOutputCoords();

       // Sample the texture with the coords to get the rgba channel value.
       vec4 packedInput = getA(${d});

       ${i.output} = vec4(getChannel(packedInput, ${p}), 0, 0, 0);
     }
   `;return{...Yi,hasMain:!0,output:{dims:t.dims,type:t.type,textureType:0},shaderSource:l}},Qi$1=(e,t)=>({...Yi,get:()=>pf$1(e,t)})}),nr$2,_e$2,or$2,Se$1=x$1(()=>{pt$1(),nr$2=class{constructor(e,t=1){if(t===1)this.internalFormat=e.R32F,this.format=e.RED,this.textureType=e.FLOAT,this.channelSize=t;else if(t===4)this.internalFormat=e.RGBA32F,this.format=e.RGBA,this.textureType=e.FLOAT,this.channelSize=t;else throw new Error(`Invalid number of channels: ${t}`)}encode(e,t){let r,o;return e.constructor!==Float32Array&&(M$1.warning("Encoder","data was not of type Float32; creating new Float32Array"),o=new Float32Array(e)),t*this.channelSize>e.length?(M$1.warning("Encoder","Source data too small. Allocating larger array"),o=e,r=this.allocate(t*this.channelSize),o.forEach((u,n)=>r[n]=u)):(o=e,r=o),r}allocate(e){return new Float32Array(e*4)}decode(e,t){return this.channelSize===1?e.filter((r,o)=>o%4===0).subarray(0,t):e.subarray(0,t)}},_e$2=class{constructor(e,t=1,r){if(t!==1&&t!==4)throw new Error(`Invalid number of channels: ${t}`);this.internalFormat=e.RGBA,this.format=e.RGBA,this.channelSize=t,this.textureType=r||e.FLOAT}encode(e,t){let r=e;return this.channelSize===1&&(M$1.verbose("Encoder","Exploding into a larger array"),r=this.allocate(t),e.forEach((o,u)=>r[u*4]=o)),r}allocate(e){return new Float32Array(e*4)}decode(e,t){return this.channelSize===1?e.filter((r,o)=>o%4===0).subarray(0,t):e.subarray(0,t)}},or$2=class{constructor(e,t=1){if(this.channelSize=4,t===1)this.internalFormat=e.ALPHA,this.format=e.ALPHA,this.textureType=e.UNSIGNED_BYTE,this.channelSize=t;else if(t===4)this.internalFormat=e.RGBA,this.format=e.RGBA,this.textureType=e.UNSIGNED_BYTE,this.channelSize=t;else throw new Error(`Invalid number of channels: ${t}`)}encode(e,t){return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}allocate(e){return new Uint8Array(e*this.channelSize)}decode(e,t){if(e instanceof Uint8Array)return e.subarray(0,t);throw new Error(`Invalid array type: ${e.constructor}`)}}}),Ae$1,ea$1,fn$1,ra$1=x$1(()=>{z$1(),N(),Ae$1=(e,t,r)=>{let o=r===0||r===1?1:4,u=r===2,n=r===1||r===2,a=r===4?t.length-1:void 0,d=r===4?t.map((p,i)=>i===t.length-1?p*4:p):void 0;return fn$1(e,t,o,d,{isPacked:u,reverseWH:n,breakAxis:a})},ea$1=(e,t,r)=>{let o=Ae$1(e,t,r);return[o.width,o.height]},fn$1=(e,t,r=1,o,u)=>{let n=!!(u&&u.isPacked),[a,d]=e.computeTextureWH(n&&o||t,u),p=t.length,i=t.slice(0);if(p===0&&(i=[1]),r===1)o=t;else if(n){if(r!==4)throw new Error("a packed texture must be 4-channel");o=t,p>0&&(i[p-1]=Math.ceil(i[p-1]/2)),p>1&&(i[p-2]=Math.ceil(i[p-2]/2))}else if(!o)throw new Error("Unpacked shape is needed when using channels > 1");return{width:a,height:d,channels:r,isPacked:n,shape:i,strides:O.computeStrides(i),unpackedShape:o,reversedWH:u&&u.reverseWH}}}),mf$1,ir$2,oa$1=x$1(()=>{pt$1(),Yt$2(),z$1(),ji(),Ji$1(),Zi$1(),ta$1(),Se$1(),ra$1(),N(),mf$1=(e,t)=>{let r=t.map(u=>`${u.unpackedShape.join(",")};${u.width}x${u.height}`).join("_"),o=e.name;return e.cacheHint&&(o+="["+e.cacheHint+"]"),o+=":"+r,o},ir$2=class{constructor(e){this.session=e,this.packedTextureDataCache=new Map,this.unpackedTextureDataCache=new Map}calculateTextureWidthAndHeight(e,t){return ea$1(this.session.layoutStrategy,e,t)}executeProgram(e,t){if(t.length<e.inputNames.length)throw new Error(`Input size mustn't be less than ${e.inputNames.length}.`);if(e.inputNames.length!==e.inputTypes.length)throw new Error("input names size does not match input types");let r=[];for(let p=0;p<e.inputNames.length;++p)r[p]=this.getOrCreateTextureData(t[p],e.inputTypes[p]);let o=mf$1(e,r),u=this.session.programManager.getArtifact(o),n=u?u.programInfo:typeof e.get=="function"?e.get():e,a=Ae$1(this.session.layoutStrategy,n.output.dims,n.output.textureType),d=this.createTextureData(a,n.output.type);return u||(u=this.session.programManager.build(n,r,d),this.session.programManager.setArtifact(o,u)),this.runProgram(u,r,d),d}run(e,t){return this.executeProgram(e,t).tensor}runProgram(e,t,r){for(let o=0;o<t.length;++o)if(!!t[o].isPacked!=(e.programInfo.inputTypes[o]===2))throw new Error(`input[${o}] property packed inconsistent`);if(!!r.isPacked!=(e.programInfo.output.textureType===2))throw new Error("output property packed inconsistent");this.session.programManager.run(e,t,r)}getOrCreateTextureData(e,t){let r=this.getTextureData(e.dataId,t===2);if(!r&&(r=this.getTextureData(e.dataId,t!==2),r))return t===2?this.pack(r):this.unpack(r);if(!r){let o=Ae$1(this.session.layoutStrategy,e.dims,t);if(t===4){let u=e.dims;if(u.length===4){let n=[u[0],Math.ceil(u[1]*u[2]*u[3]/4)],a=Ae$1(this.session.layoutStrategy,n,t),d=e.numberData;if(u[1]*u[2]*u[3]%4!==0){let p=u[0],i=u[1]*u[2]*u[3],l=Math.ceil(i*1/4)*4,s=p*l;d=new Float32Array(s);for(let c=0;c<p;++c){let h=c*i,g=c*l+c%1*i;d.set(e.numberData.subarray(h,h+i),g)}}return this.createTextureData(a,e.type,d,e,1)}}if(t===2){let u=fn$1(this.session.layoutStrategy,e.dims,1,[],{reverseWH:!0}),n=this.createTextureData(u,e.type,e.numberData,e,1);r=this.pack(n)}else r=this.createTextureData(o,e.type,e.numberData,e,1)}return r}createTextureDataFromLayoutBindTensor(e,t,r,o){return this.createTextureData(e,t,r,o,1)}createTextureData(e,t,r,o,u){M$1.verbose("InferenceHandler",`Creating TextureData: layout:[${JSON.stringify(e)}]`);let n=this.session.textureManager.createTextureFromLayout(t,e,r,u);return this.createTextureDataFromTexture(e,t,n,o)}reshapeUnpacked(e,t){let r=this.getOrCreateTextureData(e,0),o={channels:r.channels,height:r.height,width:r.width,shape:t.length!==0?t:[1],strides:O.computeStrides(t),unpackedShape:t};return this.createTextureDataFromTexture(o,e.type,r.texture).tensor}reshapePacked(e,t){let r=this.getOrCreateTextureData(e,2);if(Xi(e.dims,t)){let d={channels:r.channels,height:r.height,width:r.width,shape:t.length!==0?t:[1],strides:O.computeStrides(t),unpackedShape:t,isPacked:!0};return this.createTextureDataFromTexture(d,e.type,r.texture).tensor}let o=un$1(e.dims),u=un$1(t),n=this.reshapePacked(e,o),a=this.run(Ki(this,n,u),[n]);return this.reshapePacked(a,t)}cast(e,t){let r=this.getOrCreateTextureData(e,0);return this.createTextureDataFromTexture(r,t,r.texture).tensor}createTextureDataFromTexture(e,t,r,o,u){let n={...e,tensor:o||new Y$1(e.unpackedShape,t,a=>this.readTexture(n),async a=>this.readTextureAsync(n),void 0,u),texture:r};return this.setTextureData(n.tensor.dataId,n,e.isPacked),n}getTextureData(e,t=!1){return this.session.isInitializer(e)?this.session.getTextureData(e,t):t?this.packedTextureDataCache.get(e):this.unpackedTextureDataCache.get(e)}setTextureData(e,t,r=!1){this.session.isInitializer(e)?this.session.setTextureData(e,t,r):(r?this.packedTextureDataCache:this.unpackedTextureDataCache).set(e,t)}isTextureLayoutCached(e,t=!1){return!!this.getTextureData(e.dataId,t)}dispose(){this.session.textureManager.clearActiveTextures(),this.packedTextureDataCache.forEach(e=>this.session.textureManager.releaseTexture(e)),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache.forEach(e=>this.session.textureManager.releaseTexture(e)),this.unpackedTextureDataCache=new Map}readTexture(e){return e.isPacked?this.readTexture(this.unpack(e)):this.session.backend.glContext.isFloat32DownloadSupported?this.session.textureManager.readTexture(e,e.tensor.type,e.channels):this.session.textureManager.readUint8TextureAsFloat(ln$1(this,e))}async readTextureAsync(e){return e.isPacked?this.readTextureAsync(this.unpack(e)):this.session.backend.glContext.isFloat32DownloadSupported?this.session.textureManager.readTextureAsync(e,e.tensor.type,e.channels):this.session.textureManager.readUint8TextureAsFloat(ln$1(this,e))}pack(e){return this.executeProgram(qi(this,e.tensor),[e.tensor])}unpack(e){return this.executeProgram(Qi$1(this,e.tensor),[e.tensor])}}}),cn$1,$,tt$1=x$1(()=>{cn$1=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},$=e=>new cn$1(e)}),ia$1,aa$1,sa$1,bf$1,yf$1,ua$1=x$1(()=>{tt$1(),q(),N(),ia$1={name:"BatchNormalization",inputNames:["A","Scale","B","Mean","Variance"],inputTypes:[0,0,0,0,0]},aa$1=(e,t,r)=>(yf$1(t),[e.run({...ia$1,cacheHint:r.cacheKey,get:()=>bf$1(e,t,r)},t)]),sa$1=e=>{let t=e.attributes.getFloat("epsilon",1e-5),r=e.attributes.getFloat("momentum",.9),o=e.attributes.getInt("spatial",1);return $({epsilon:t,momentum:r,spatial:o})},bf$1=(e,t,r)=>{let o=D(e.session.backend.glContext.version),u=t[0].dims.length,[n,a]=e.calculateTextureWidthAndHeight(t[1].dims,0),d=`
  float process(int[${u}] indices) {
    vec2 position = offsetToCoords(indices[1], ${n}, ${a});
    float scale = getColorAsFloat(${o.texture2D}(Scale, position));
    float mean = getColorAsFloat(${o.texture2D}(Mean, position));
    float variance = getColorAsFloat(${o.texture2D}(Variance, position));
    float b = getColorAsFloat(${o.texture2D}(B, position));

    return scale * ( (_A(indices) - mean) / sqrt(variance + float(${r.epsilon})) ) + b;
  }`;return{...ia$1,output:{dims:t[0].dims,type:t[0].type,textureType:0},shaderSource:d}},yf$1=e=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs.");let t=e[0],r=e[1],o=e[2],u=e[3],n=e[4];if(t.dims.length<3||r.dims.length!==1||o.dims.length!==1||u.dims.length!==1||n.dims.length!==1)throw new Error("invalid input shape.");if(r.dims[0]!==t.dims[1]||o.dims[0]!==t.dims[1]||u.dims[0]!==t.dims[1]||n.dims[0]!==t.dims[1])throw new Error("invalid input shape.");if(t.type!=="float32"&&t.type!=="float64"||r.type!=="float32"&&r.type!=="float64"||o.type!=="float32"&&o.type!=="float64"||u.type!=="float32"&&u.type!=="float64"||n.type!=="float32"&&n.type!=="float64")throw new Error("invalid input tensor types.")}}),ar$1,bt$1,I$1,Oe$2,sr$1,Bt$1=x$1(()=>{ar$1=class{constructor(e,t,r,o){this.glContext=e,this.programInfo=t,this.inputTextureLayouts=r,this.outputTextureLayout=o}},bt$1=class{constructor(e){this.context=e}},I$1=class{constructor(e,t){this.routineBody=e,this.dependencies=t}},Oe$2=class{constructor(e,t,r){this.name=e,r?this.dependencies=r:this.dependencies=[],t&&(this.routineBody=t)}addDependency(e){e&&this.dependencies.push(e)}},sr$1=class{static returnOrderedNodes(e){if(!e||e.length===0)return[];if(e.length===1)return e;let t=new Set,r=new Set,o=new Array;return this.createOrderedNodes(e,t,r,o),o}static createOrderedNodes(e,t,r,o){for(let u=0;u<e.length;++u)this.dfsTraverse(e[u],t,r,o)}static dfsTraverse(e,t,r,o){if(!e||r.has(e.name))return;if(t.has(e.name))throw new Error("Cyclic dependency detected. Can't topologically sort routines needed for shader.");t.add(e.name);let u=e.dependencies;if(u&&u.length>0)for(let n=0;n<u.length;++n)this.dfsTraverse(u[n],t,r,o);o.push(e),r.add(e.name),t.delete(e.name)}}});function xf$1(){let e="add_";return{body:`
  float ${e}(float a, float b) {
    return a + b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 + v2;
  }
  `,name:e,type:0}}function Tf$1(){let e="div_";return{body:`
  float ${e}(float a, float b) {
    return a / b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 / v2;
  }
  `,name:e,type:0}}function vf$1(){let e="mul_";return{body:`
  float ${e}(float a, float b) {
    return a * b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 * v2;
  }
  `,name:e,type:0}}function wf$1(){let e="sub_";return{body:`
  float ${e}(float a, float b) {
    return a - b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 - v2;
  }
  `,name:e,type:0}}function If$1(){let e="equal_";return{body:`
  float ${e}(float a, float b) {
    return float(a == b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4(equal(v1, v2));
  }
  `,name:e,type:0}}function _f$1(){let e="greater_";return{body:`
  float ${e}(float a, float b) {
    return float(a > b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4( v1.r > v2.r ,
      v1.g > v2.g,
      v1.b > v2.b,
      v1.a > v2.a );
  }
  `,name:e,type:0}}function Sf$1(){let e="less_";return{body:`
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
  `,name:e,type:0}}function Of$1(){let e="or_";return{body:`
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
  `,name:e,type:0}}function Pf$1(){let e="xor_";return{body:`
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
  `,name:e,type:0}}function Ef$1(){return Lf$1("pow")}function Df$1(){let e="prelu_";return{body:`
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
  `,name:e,type:0}}function Lf$1(e){let t=`${e}_`;return{body:`
  float ${t}(float a, float b) {
    return ${e}(a, b);
  }
  vec4 ${t}(vec4 v1, vec4 v2) {
    return ${e}(v1, v2);
  }
  `,name:t,type:0}}var yt$2,$f$1,la$1,fa$1,ca$1,pa$1,da$1,ha$1,ma$1,ba$1,ya$1,ga$1,xa$1,Ta$1,va$1=x$1(()=>{z$1(),Bt$1(),q(),N(),yt$2=(e,t,r,o=t[0].type,u)=>{let n=e.session.pack?2:0;return{name:r.name,inputNames:["A","B"],inputTypes:[n,n],cacheHint:u,get:()=>$f$1(e,t,r,o)}},$f$1=(e,t,r,o=t[0].type)=>{let u=e.session.pack?2:0,n=!O.areEqual(t[0].dims,t[1].dims),a=t[0].dims,d=e.session.pack;if(n){let l=it$1.calcShape(t[0].dims,t[1].dims,!1);if(!l)throw new Error("Can't perform binary op on the given tensors");a=l;let s=a.length,c=t[0].dims.length!==0?t[0].dims.length:1,h=t[1].dims.length!==0?t[1].dims.length:1,g=t[0].dims.length!==0?"bcastIndices_A(indices, aindices);":"aindices[0] = 0;",y=t[1].dims.length!==0?"bcastIndices_B(indices, bindices);":"bindices[0] = 0;",C=D(e.session.backend.glContext.version),W=d?`
      ${r.body}
      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();
        vec4 result = ${r.name}(a, b);
        ${C.output} = result;
      }`:`
      ${r.body}
      float process(int indices[${s}]) {
        int aindices[${c}];
        int bindices[${h}];
        ${g}
        ${y}
        return ${r.name}(_A(aindices), _B(bindices));
      }`;return{name:r.name,inputNames:["A","B"],inputTypes:[u,u],output:{dims:a,type:o,textureType:u},shaderSource:W,hasMain:d}}let p=D(e.session.backend.glContext.version),i=`
    ${r.body}
    void main() {
      vec4 v1 = ${p.texture2D}(A, TexCoords);
      vec4 v2 = ${p.texture2D}(B, TexCoords);
      vec4 result = ${r.name}(v1, v2);
      ${p.output} = result;
    }
    `;return{name:r.name,inputNames:["A","B"],inputTypes:[u,u],output:{dims:t[0].dims,type:o,textureType:u},shaderSource:i,hasMain:!0}},la$1=(e,t)=>[e.run(yt$2(e,t,xf$1()),t)],fa$1=(e,t)=>[e.run(yt$2(e,t,Af(),"bool"),t)],ca$1=(e,t)=>[e.run(yt$2(e,t,Tf$1()),t)],pa$1=(e,t)=>[e.run(yt$2(e,t,If$1(),"bool"),t)],da$1=(e,t)=>[e.run(yt$2(e,t,_f$1(),"bool"),t)],ha$1=(e,t)=>[e.run(yt$2(e,t,Sf$1(),"bool"),t)],ma$1=(e,t)=>[e.run(yt$2(e,t,vf$1()),t)],ba$1=(e,t)=>[e.run(yt$2(e,t,Of$1(),"bool"),t)],ya$1=(e,t)=>[e.run(yt$2(e,t,Ef$1()),t)],ga$1=(e,t)=>[e.run(yt$2(e,t,Df$1()),t)],xa$1=(e,t)=>[e.run(yt$2(e,t,wf$1()),t)],Ta$1=(e,t)=>[e.run(yt$2(e,t,Pf$1(),"bool"),t)]}),wa$1,Ia$1,Bf$1,_a$1=x$1(()=>{z$1(),wa$1=(e,t,r)=>(Bf$1(t),[e.cast(t[0],r)]),Ia$1=e=>rt$2.tensorDataTypeFromProto(e.attributes.getInt("to")),Bf$1=e=>{if(!e||e.length!==1)throw new Error("Cast requires 1 input.");if(e[0].type==="string")throw new Error("Invalid input type.")}}),Ff$1,Nf$1,Sa$1,ur$1,Aa$1=x$1(()=>{q(),N(),Pt$2(),Qt$2(),Ff$1=(e,t)=>({name:"Concat (packed)",inputNames:Array.from({length:e},(r,o)=>`X${o}`),inputTypes:Array(e).fill(2),cacheHint:t}),Nf$1=(e,t,r,o)=>{let u=r[0].dims.slice();if(o>=u.length||o<-1*u.length)throw new Error("axis specified for concat doesn't match input dimensionality");o<0&&(o=u.length+o);let n=u.slice(0);for(let ii=1;ii<r.length;ii++){let li=r[ii].dims.slice();for(let ui=0;ui<u.length;ui++)if(ui===o)n[o]+=li[ui];else if(u[ui]!==li[ui])throw new Error("non concat dimensions must match")}let a=n.length,d=ce$1("coords",a),p=at$1(a),i=Et$2(),l=r.map(ii=>ii.dims),s=St$2(a),c=new Array(l.length-1);c[0]=l[0][o];for(let ii=1;ii<c.length;ii++)c[ii]=c[ii-1]+l[ii][o];let h=s[o],g=s.slice(-2),y=s.join(),C=`if (${h} < ${c[0]}) {
        return getChannel(
            getX0(${y}), vec2(${g.join()}));
        }`;for(let ii=1;ii<c.length;ii++){let li=c[ii-1];C+=`
            if (${h} < ${c[ii]}  && ${h} >= ${c[ii-1]}) {
              return getChannel(
                getX${ii}(${ur$1(s,h,li)}),
                vec2(${ur$1(g,h,li)}));
            }`}let W=c.length,A=c[c.length-1];C+=`
            return getChannel(
              getX${W}(${ur$1(s,h,A)}),
              vec2(${ur$1(g,h,A)}));`;let X=D(e.session.backend.glContext.version),ni=`
          ${i}
          float getValue(${s.map(ii=>"int "+ii)}) {
            ${C}
          }

          void main() {
            ${p} coords = getOutputCoords();
            int lastDim = coords.${s[a-1]};
            coords.${s[a-1]} = coords.${s[a-2]};
            coords.${s[a-2]} = lastDim;

            vec4 result = vec4(getValue(${d}), 0., 0., 0.);

            ${d[a-1]} = ${d[a-1]} + 1;
            if (${d[a-1]} < ${n[a-1]}) {
              result.g = getValue(${d});
            }

            ${d[a-2]} = ${d[a-2]} + 1;
            if (${d[a-2]} < ${n[a-2]}) {
              result.a = getValue(${d});
            }

            ${d[a-1]} = ${d[a-1]} - 1;
            if (${d[a-2]} < ${n[a-2]} &&
                ${d[a-1]} < ${n[a-1]}) {
              result.b = getValue(${d});
            }
            ${X.output} = result;
          }
        `;return{...t,output:{dims:n,type:r[0].type,textureType:2},shaderSource:ni,hasMain:!0}},Sa$1=(e,t,r)=>{let o=Ff$1(t.length,r.cacheKey);return{...o,get:()=>Nf$1(e,o,t,r.axis)}},ur$1=(e,t,r)=>{let o=e.indexOf(t);return e.map((u,n)=>n===o?`${u} - ${r}`:u).join()}}),Oa$1,Cf$1,Gf$1,Rf$1,Pa$1,Vf$1,zf$1,Mf$1,Ea$1,Uf$1,Da$1=x$1(()=>{tt$1(),N(),Aa$1(),Oa$1=(e,t,r)=>(Uf$1(t),e.session.pack&&t[0].dims.length>1?[e.run(Sa$1(e,t,r),t)]:[e.run(Rf$1(e,t,r),t)]),Cf$1=(e,t)=>({name:"Concat",inputNames:Array.from({length:e},(r,o)=>`X${o}`),inputTypes:Array(e).fill(0),cacheHint:t}),Gf$1=(e,t,r,o)=>{let u=r[0].dims.slice();if(o>=u.length||o<-1*u.length)throw new Error("axis specified for concat doesn't match input dimensionality");o<0&&(o=u.length+o);let n=u.slice(0);for(let h=1;h<r.length;h++){let g=r[h].dims.slice();for(let y=0;y<u.length;y++)if(y===o)n[o]+=g[y];else if(u[y]!==g[y])throw new Error("non concat dimensions must match")}let a=n.length,d=new Array(r.length),p=0;for(let h=0;h<d.length;++h)p+=r[h].dims[o],d[h]=p;let i="";r.length<5?i=Pa$1(d):i=Vf$1(d);let l=zf$1(r.length,a),s=Mf$1(d),c=`
        ${l}
        ${s}
        ${i}
        float process(int indices[${a}]) {
          int textureIndex = getTextureWhereDataResides (indices[${o}]);

          if(textureIndex != 0) {
            indices[${o}] = indices[${o}] - int(getSizeInConcatAxisValueFromIndex(textureIndex-int(1)));
          }

          return fetchDataFromCorrectTexture(textureIndex, indices);
        }`;return{...t,output:{dims:n,type:r[0].type,textureType:0},shaderSource:c}},Rf$1=(e,t,r)=>{let o=Cf$1(t.length,r.cacheKey);return{...o,get:()=>Gf$1(e,o,t,r.axis)}},Pa$1=e=>`int getTextureWhereDataResides(int index) {
      ${e.map((t,r)=>`if(index<${t}) {return ${r};}
`).join("")}
    }`,Vf$1=e=>Pa$1(e),zf$1=(e,t)=>{let r=[`float fetchDataFromCorrectTexture(int textureIndex, int indices[${t}]) {`];for(let o=0;o<e;++o)o===0?r.push(`	if (textureIndex == ${o}) { return _X${o}(indices); }`):o===e-1?r.push(`	else { return _X${o}(indices); }`):r.push(`	else if (textureIndex == ${o}) { return _X${o}(indices); }`);return r.push("	}"),r.join(`
`)},Mf$1=e=>{let t=["int getSizeInConcatAxisValueFromIndex(int index) {"];for(let r=0;r<e.length;++r)r===0?t.push(`	if (index == ${r}) { return ${e[r]}; }`):r===e.length-1?t.push(`	else { return ${e[r]}; }`):t.push(`	else if (index == ${r}) { return ${e[r]}; }`);return t.push("	}"),t.join(`
`)},Ea$1=e=>$({axis:e.attributes.getInt("axis")}),Uf$1=e=>{if(!e||e.length<1)throw new Error("too few inputs");let t=e[0].type,r=e[0].dims.length;if(t==="string")throw new Error("string tensor is not supported yet");for(let o of e){if(o.type!==t)throw new Error("input tensors should be one type");if(o.dims.length!==r)throw new Error("input tensors should have the same shape")}}});function Wf$1(){return gt$2("abs")}function Hf$1(){return gt$2("acos")}function qf$1(){return gt$2("asin")}function jf$1(){return gt$2("atan")}function Kf$1(){return gt$2("ceil")}function Xf$1(){return gt$2("cos")}function Jf(e){let t="elu";return{body:`
  const float alpha = float(${e});

  float ${t}_(float a) {
    return a >= 0.0 ? a: (exp(a) - 1.0) * alpha;
  }
  vec4 ${t}_(vec4 v) {
    return vec4(${t}_(v.x), ${t}_(v.y), ${t}_(v.z), ${t}_(v.w));
  }
  `,name:t,type:0}}function Zf$1(){return gt$2("exp")}function Yf$1(){return gt$2("floor")}function pn$1(e,t){let r="clip";return{body:`
  const float min = float(${e});
  const float max = float(${t});

  float ${r}_(float a) {
    return clamp(a, min, max);
  }
  vec4 ${r}_(vec4 v) {
    return clamp(v, min, max);
  }
  `,name:r,type:0}}function Qf$1(){let e="indentity";return{body:`
  float ${e}_(float a) {
    return a;
  }
  vec4 ${e}_(vec4 v) {
    return v;
  }
  `,name:e,type:0}}function tc$1(e){let t="leakyRelu";return{body:`
  const float alpha = float(${e});

  float ${t}_(float a) {
    return a < 0.0 ? a * alpha : a;
  }
  vec4 ${t}_(vec4 v) {
    return vec4(${t}_(v.x), ${t}_(v.y), ${t}_(v.z), ${t}_(v.w));
  }
  `,name:t,type:0}}function ec$1(){return gt$2("log")}function rc$1(){let e="neg";return{body:`
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
  `,name:e,type:0}}function oc(){return gt$2("sin")}function dn$1(){let e="relu";return{body:`
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
  `,name:e,type:0}}function ic(){return gt$2("sqrt")}function ac(){return gt$2("tan")}function sc(){let e="tanh";return{body:`
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
  `,name:e,type:0}}function gt$2(e){return{body:`
  float ${e}_(float a) {
    return ${e}(a);
  }
  vec4 ${e}_(vec4 v) {
    return ${e}(v);
  }
  `,name:e,type:0}}var uc,J$2,La$1,$a$1,ka$1,Ba$1,mn$1,Fa$1,Na$1,lc,Ca$1,Ga$1,Ra$1,Va$1,za$1,Ma$1,bn,Ua$1,Wa$1,Ha$1,qa,ja$1,Ka$1,Xa$1,Ja$1,Za$1,Ya$1,Qa$1,yn=x$1(()=>{tt$1(),z$1(),Bt$1(),q(),N(),uc=(e,t,r,o)=>{let u=e.session.pack?2:0,n=D(e.session.backend.glContext.version);return{...t,output:{dims:r.dims,type:r.type,textureType:u},shaderSource:`
     ${o.body}
     void main() {
       vec4 v = ${n.texture2D}(A, TexCoords);
       v = ${o.name}_(v);
       ${n.output} = v;
     }
     `,hasMain:!0}},J$2=(e,t,r,o)=>{let u=e.session.pack?2:0,n={name:r.name,inputTypes:[u],inputNames:["A"],cacheHint:o};return{...n,get:()=>uc(e,n,t,r)}},La$1=(e,t)=>[e.run(J$2(e,t[0],Wf$1()),t)],$a$1=(e,t)=>[e.run(J$2(e,t[0],Hf$1()),t)],ka$1=(e,t)=>[e.run(J$2(e,t[0],qf$1()),t)],Ba$1=(e,t)=>[e.run(J$2(e,t[0],jf$1()),t)],mn$1=(e,t,r)=>[e.run(J$2(e,t[0],pn$1(r.min,r.max),r.cacheKey),t)],Fa$1=e=>$({min:e.attributes.getFloat("min",Jt$2),max:e.attributes.getFloat("max",Zt$2)}),Na$1=(e,t)=>{let r=lc(e,t);return mn$1(e,[t[0]],r)},lc=(e,t)=>{if(t.length>=3&&(!e.session.isInitializer(t[1].dataId)||!e.session.isInitializer(t[2].dataId)))throw new Error("dynamic clip attributes are not allowed");let r=t.length>=3?t[1].numberData[0]:Jt$2,o=t.length>=3?t[2].numberData[0]:Zt$2;return $({min:r,max:o})},Ca$1=(e,t)=>[e.run(J$2(e,t[0],Kf$1()),t)],Ga$1=(e,t)=>[e.run(J$2(e,t[0],Xf$1()),t)],Ra$1=(e,t,r)=>[e.run(J$2(e,t[0],Jf(r.alpha),r.cacheKey),t)],Va$1=e=>$({alpha:e.attributes.getFloat("alpha",1)}),za$1=(e,t)=>[e.run(J$2(e,t[0],Zf$1()),t)],Ma$1=(e,t)=>[e.run(J$2(e,t[0],Yf$1()),t)],bn=(e,t)=>[e.run(J$2(e,t[0],Qf$1()),t)],Ua$1=(e,t,r)=>[e.run(J$2(e,t[0],tc$1(r.alpha),r.cacheKey),t)],Wa$1=e=>$({alpha:e.attributes.getFloat("alpha",.01)}),Ha$1=(e,t)=>[e.run(J$2(e,t[0],ec$1()),t)],qa=(e,t)=>[e.run(J$2(e,t[0],rc$1()),t)],ja$1=(e,t)=>[e.run(J$2(e,t[0],nc()),t)],Ka$1=(e,t)=>[e.run(J$2(e,t[0],dn$1()),t)],Xa$1=(e,t)=>[e.run(J$2(e,t[0],hn()),t)],Ja$1=(e,t)=>[e.run(J$2(e,t[0],oc()),t)],Za$1=(e,t)=>[e.run(J$2(e,t[0],ic()),t)],Ya$1=(e,t)=>[e.run(J$2(e,t[0],ac()),t)],Qa$1=(e,t)=>[e.run(J$2(e,t[0],sc()),t)]});function Dt$1(e){let t;switch(e.activation){case"Relu":t=dn$1();break;case"Sigmoid":t=hn();break;case"Clip":t=pn$1(e.clipMin,e.clipMax);break;default:return{activationFunction:"",applyActivation:""}}let r=t.name,o=t.body,u=`value = ${r}_(value);`;return{activationFunction:o,applyActivation:u}}var pe,te=x$1(()=>{z$1(),yn(),pe=e=>{let t=e.getString("activation","");if(t==="Clip"){let[r,o]=e.getFloats("activation_params",[Jt$2,Zt$2]);return{activation:t,clipMax:o,clipMin:r,activationCacheKey:`${t}:${r},${o}`}}return{activation:t,activationCacheKey:t}}}),cc,pc,ts$1,es$1=x$1(()=>{pt$1(),q(),N(),lr$1(),te(),cc=(e,t)=>({name:"GroupedConv",inputNames:e?["X","W","Bias"]:["X","W"],inputTypes:e?[0,0,0]:[0,0],cacheHint:t}),pc=(e,t,r,o)=>{let u=t.length>2?"value += getBias(output_channel);":"",n=t[0].dims.slice(),a=t[1].dims.slice(),d=a[0]/o.group;M$1.verbose("GroupedConv",`autpPad:${o.autoPad}, dilations:${o.dilations}, group:${o.group}, kernelShape:${o.kernelShape}, pads:${o.pads}, strides:${o.strides}`);let p=de$1(n,a,o.dilations,o.pads,o.strides),i=D(e.session.backend.glContext.version),{activationFunction:l,applyActivation:s}=Dt$1(o),c=`
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

        if (xHeight < 0 || xHeight >= ${n[2]}) {
          continue;
        }

        for (int wWidth = 0; wWidth < ${a[3]}; wWidth++) {
          int xWidth = xRCCorner.y + wWidth * ${o.dilations[1]};
          if (xWidth < 0 || xWidth >= ${n[3]}) {
            continue;
          }

          float xVal = getX(batch, input_channel, xWidth, xHeight);
          float wVal = getW(output_channel, wInChannel, wWidth, wHeight);
          value += xVal*wVal;
        }
      }
    }
    ${u}
    ${s}
    ${i.output} = vec4(value, .0, .0, .0);
  }
`;return{...r,output:{dims:p,type:t[0].type,textureType:0},shaderSource:c,hasMain:!0}},ts$1=(e,t,r)=>{let o=cc(t.length>2,r.cacheKey);return{...o,get:()=>pc(e,t,o,r)}}}),dc,hc,rs$1,ns$1=x$1(()=>{q(),N(),Qt$2(),dc=e=>({name:"Im2Col (packed)",inputNames:["A"],inputTypes:[2],cacheHint:e}),hc=(e,t,r,o,u,n)=>{let a=r.dims,d=o.dims,p=2,i=3,l=u.length,s=[d[1]*d[2]*d[3],u[2]*u[3]],c=d[2]*d[3],h=Et$2(),g=D(e.session.backend.glContext.version),y="";for(let W=0;W<=1;W++)for(let A=0;A<=1;A++)y+=`
            blockIndex = rc.x + ${A};
            pos = rc.y + ${W};

            if(blockIndex < ${s[1]} && pos < ${s[0]}) {
              offsetY = int(blockIndex / (${u[l-1]})) * ${n.strides[0]} -
                ${n.pads[0]};
              d0 = offsetY + ${n.dilations[0]} * (imod(pos, ${c}) / ${d[2]});

              if(d0 < ${a[p]} && d0 >= 0) {
                offsetX = imod(blockIndex, ${u[l-1]}) * ${n.strides[1]} -
                  ${n.pads[1]};
                d1 = offsetX + ${n.dilations[1]} * imod(imod(pos, ${c}), ${d[2]});

                if(d1 < ${a[i]} && d1 >= 0) {

                  ch = int(float(pos)/ ${c}.);
                    innerDims = vec2(d0, d1);
                    result[${W*2+A}] = getChannel(
                      getA(0, ch, int(innerDims.x),
                      int(innerDims.y)), innerDims);
                }
              }
            }

          `;let C=`
      ${h}

      void main() {
        ivec2 rc = getOutputCoords();
          vec4 result = vec4(0.0);
          int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
          vec2 innerDims;
          ${y}
          ${g.output} = result;
      }
            `;return{...t,output:{dims:s,type:r.type,textureType:2},shaderSource:C,hasMain:!0}},rs$1=(e,t,r,o,u)=>{let n=dc(u.cacheKey);return{...n,get:()=>hc(e,n,t,r,o,u)}}});function bc(e,t,r){let o=t[0].dims,u=t[1].dims,n=it$1.calcShape(o,u,!0);if(!n)throw new Error("Can't use matmul on the given tensors");let a=at$1(n.length),d=St$2(),{activationFunction:p,applyActivation:i}=Dt$1(r),l=t.length>2,s=l?"value += getBiasForMatmul();":"",c=l?`${xn(a,d,t[2].dims,n,!1)}`:"",h=n.length,g=o.length,y=u.length,C=o[o.length-1],W=`
    ${p}
    ${c}
    float process(int indices[${h}]) {
        int a[${g}];
        int b[${y}];
        bcastMatmulIndices_A(indices, a);
        bcastMatmulIndices_B(indices, b);

        float value;
        for (int k=0; k<${C}; ++k) {
            a[${g-1}] = k;
            b[${y-2}] = k;
            value += _A(a) * _B(b);
        }
        ${s}
        ${i}
        return value;
    }`;return{...e,output:{dims:n,type:t[0].type,textureType:0},shaderSource:W}}function gn(e,t){let r=mc(e.length>2,t.activationCacheKey);return{...r,get:()=>bc(r,e,t)}}function xn(e,t,r,o,u){let n="",a=r.length,d=o.length,p=d-a;d<2&&a>0?n="coords":n=r.map((c,h)=>`coords.${t[h+p]}`).join(", ");let i=it$1.getBroadcastDims(r,o).map(c=>`coords.${t[c+p]} = 0;`).join(`
`),l=O.size(r)===1,s="vec4(outputValue.xx, outputValue.yy)";return l&&(s="vec4(outputValue.x)"),u?`
vec4 getBiasForMatmul() {
  ${e} coords = getOutputCoords();
  ${i}
  vec4 outputValue = getBias(${n});
  return ${s};
}`:`
float getBiasForMatmul() {
  ${e} coords = getOutputCoords();
  ${i}
  return getBias(coords.x);
}`}var os$1,is$1,mc,yc,fr$1=x$1(()=>{z$1(),N(),Pt$2(),te(),Tn(),os$1=(e,t,r)=>(yc(t),e.session.pack?[e.run(cr$1(e,t,r),t)]:[e.run(gn(t,r),t)]),is$1=e=>pe(e.attributes),mc=(e,t)=>({name:"MatMul",inputNames:e?["A","B","Bias"]:["A","B"],inputTypes:e?[0,0,0]:[0,0],cacheHint:t}),yc=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.");if(e[0].type!=="float32"&&e[0].type!=="float64"||e[1].type!=="float32"&&e[1].type!=="float64")throw new Error("inputs should be float type");if(e[0].type!==e[1].type)throw new Error("inputs types should match")}});function Tc(e,t,r,o){let u=[],n=[],a=r[0].dims,d=r[1].dims,p=a.length,i=d.length,l=o.length,s=l-p,c=l-i;u=a.map((A,X)=>`coords.${t[X+s]}`),u[p-1]="i*2",u.join(", "),n=d.map((A,X)=>`coords.${t[X+c]}`),n[i-2]="i*2",n.join(", ");let h=it$1.getBroadcastDims(a,o),g=it$1.getBroadcastDims(d,o),y=h.map(A=>`coords.${t[A+s]} = 0;`).join(`
`),C=g.map(A=>`coords.${t[A+c]} = 0;`).join(`
`),W=`int lastDim = coords.${t[l-1]};
  coords.${t[l-1]} = coords.${t[l-2]};
  coords.${t[l-2]} = lastDim;`;return`
vec4 getAAtOutCoordsMatmul(int i) {
  ${e} coords = getOutputCoords();
  ${W}
  ${y}
  vec4 outputValue = getA(${u});
  return outputValue;
}

vec4 getBAtOutCoordsMatmul(int i) {
  ${e} coords = getOutputCoords();
  ${W}
  ${C}
  vec4 outputValue = getB(${n});
  return outputValue;
}`}function vc(e,t){let r="";for(let o=0;o<t-2;o++)r+=`rc.${e[o]}, `;return r+=`rc.${e[t-2]}, i*2`,r}function wc(e,t){let r="";for(let o=0;o<t-2;o++)r+=`rc.${e[o]}, `;return r+=`i*2, rc.${e[t-1]}`,r}var gc,xc,cr$1,Tn=x$1(()=>{z$1(),q(),N(),Pt$2(),te(),fr$1(),gc=(e,t)=>({name:"MatMul (packed)",inputNames:e?["A","B","Bias"]:["A","B"],inputTypes:e?[2,2,2]:[2,2],cacheHint:t}),xc=(e,t,r,o)=>{let u=r.length>2,n=u?"value += getBiasForMatmul();":"",a=r[0].dims,d=r[1].dims,p=it$1.calcShape(a,d,!0),i=!O.areEqual(r[0].dims,r[1].dims);if(!p)throw new Error("Can't use matmul on the given tensors");let l=a[a.length-1],s=Math.ceil(l/2),c=a.length,h=d.length,g=D(e.session.backend.glContext.version),y=at$1(p.length),C=p.length,W=St$2(),{activationFunction:A,applyActivation:X}=Dt$1(o),ni=u?`${xn(y,W,r[2].dims,p,!0)}`:"",ii=i?`${Tc(y,W,r,p)}`:"",li=i?"getAAtOutCoordsMatmul(i)":`getA(${vc(W,c)})`,ui=i?"getBAtOutCoordsMatmul(i)":`getB(${wc(W,h)})`,hi=i?"":`${y} rc =
          getOutputCoords(); int lastDim = rc.${W[C-1]}; rc.${W[C-1]} =
          rc.${W[C-2]}; rc.${W[C-2]} = lastDim;
      `,yi=`
            ${ii}
            ${ni}
            ${A}
            void main() {
              ${hi}

              vec4 value = vec4(0);
              for (int i = 0; i < ${s}; i++) {
                vec4 a = ${li};
                vec4 b = ${ui};

                value += (a.rrbb * b.rgrg);
                value += (a.ggaa * b.baba);
              }
              ${n}
              ${X}
              ${g.output} = value;
            }`;return{...t,output:{dims:p,type:r[0].type,textureType:2},shaderSource:yi,hasMain:!0}},cr$1=(e,t,r)=>{let o=gc(t.length>2,r.activationCacheKey);return{...o,get:()=>xc(e,o,t,r)}}}),as$1,ss$1=x$1(()=>{lr$1(),ns$1(),Tn(),as$1=(e,t,r)=>{let o=t[0].dims,u=t[1].dims,n=de$1(o,u,r.dilations,r.pads,r.strides),a=e.run(rs$1(e,t[0],t[1],n,r),[t[0]]),d=e.reshapePacked(t[1],[u[0],u[1]*u[2]*u[3]]),p=t.length===3?[d,a,t[2]]:[d,a],i=e.run(cr$1(e,p,r),p);return e.reshapePacked(i,n)}}),Ic,_c,us$1,vn,wn=x$1(()=>{N(),Ic=e=>({name:"Im2Col",inputNames:["X"],inputTypes:[0],cacheHint:e}),_c=(e,t,r,o,u,n)=>{let a=r.dims,d=o.dims,p=u.length,i=vn(a,d,u,4),l=`
        const int XC = ${a[1]};
        const int XH = ${a[2]};
        const int XW = ${a[3]};
        const int KH = ${n.kernelShape[0]};
        const int KW = ${n.kernelShape[1]};
        const int dilationH = ${n.dilations[0]};
        const int dilationW = ${n.dilations[1]};
        const int strideH = ${n.strides[0]};
        const int strideW = ${n.strides[1]};
        const int padH = ${n.pads[0]};
        const int padW = ${n.pads[1]};
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
        `;return{...t,output:{dims:i,type:r.type,textureType:4},shaderSource:l}},us$1=(e,t,r,o,u)=>{let n=Ic(u.cacheKey);return{...n,get:()=>_c(e,n,t,r,o,u)}},vn=(e,t,r,o=4)=>[r[0],r[2],r[3],Math.ceil(e[1]*t[2]*t[3]/o)]}),Sc,Ac,ls$1,fs$1=x$1(()=>{z$1(),q(),N(),te(),wn(),Sc=(e,t)=>({name:"ConvDotProduct",inputNames:e?["Im2Col","K","B"]:["Im2Col","K"],inputTypes:e?[0,4,0]:[0,4],cacheKey:t.activationCacheKey}),Ac=(e,t,r,o,u)=>{let n=r[0].dims,a=r[1].dims,d=[a[0],Math.ceil(n[1]*a[2]*a[3]/4)],p=vn(n,a,o),[i,l]=e.calculateTextureWidthAndHeight(d,4),s=O.computeStrides(p),[c,h]=e.calculateTextureWidthAndHeight(p,4),g=o.length,y=r.length<3?"0.0":"_B(b)",C=Math.ceil(n[1]*a[2]*a[3]/4),{activationFunction:W,applyActivation:A}=Dt$1(u),X=D(e.session.backend.glContext.version),ni=`
${W}
float process(int indices[${g}]) {
  int b[1];
  b[0] = indices[1];
  int im2col[4];
  im2col[0] = indices[0];
  im2col[1] = indices[2];
  im2col[2] = indices[3];
  int im2colOffset = im2col[0] * ${s[0]} + im2col[1] * ${s[1]} + im2col[2] * ${s[2]};
  int kernelOffset = indices[1] * ${d[1]};
  float value = ${y};
  for (int i = 0; i < ${C}; ++i) {
    vec2 im2colCoords = offsetToCoords(im2colOffset, ${c}, ${h});
    vec2 kernelCoords = offsetToCoords(kernelOffset, ${i}, ${l});
    value += dot(${X.texture2D}(Im2Col, im2colCoords), ${X.texture2D}(K, kernelCoords));
    ++im2colOffset;
    ++kernelOffset;
  }
  ${A}
  return value;
}`;return{...t,output:{dims:o,type:r[0].type,textureType:0},shaderSource:ni}},ls$1=(e,t,r,o)=>{let u=Sc(t.length>2,o);return{...u,get:()=>Ac(e,u,t,r,o)}}}),de$1,In,Oc,Pc,Ec,Dc,_n,Lc,lr$1=x$1(()=>{tt$1(),z$1(),es$1(),ss$1(),fs$1(),te(),wn(),fr$1(),de$1=(e,t,r,o,u)=>{let n=e[0],a=e.slice(2),d=a.length,p=t[0],i=t.slice(2).map((s,c)=>s+(s-1)*(r[c]-1)),l=a.map((s,c)=>s+o[c]+o[c+d]).map((s,c)=>Math.floor((s-i[c]+u[c])/u[c]));return[n,p].concat(...l)},In=(e,t,r)=>(Lc(t,r),Oc(e,t,r)),Oc=(e,t,r)=>{let o=Dc(r,t),u=e.session.pack,n=o.kernelShape[0]===1&&o.kernelShape[1]===1;return o.group>1?[e.run(ts$1(e,t,o),t)]:n&&u?[Pc(e,t,o)]:u&&t[0].dims.length===4&&t[0].dims[0]===1&&!n?[as$1(e,t,o)]:[Ec(e,t,o)]},Pc=(e,t,r)=>{let o=t[0].dims,u=t[1].dims,n=de$1(o,u,r.dilations,r.pads,r.strides),a=e.reshapeUnpacked(t[0],[o[1],o[2]*o[3]]),d=e.reshapeUnpacked(t[1],[u[0],u[1]]),p=t.length>2?[d,a,t[2]]:[d,a],i=e.run(gn(p,r),p);return e.reshapeUnpacked(i,n)},Ec=(e,t,r)=>{let o=t[0].dims,u=t[1].dims,n=de$1(o,u,r.dilations,r.pads,r.strides),a=e.run(us$1(e,t[0],t[1],n,r),[t[0]]),d=t.length===3?[a,t[1],t[2]]:[a,t[1]];return e.run(ls$1(e,t,n,r),d)},Dc=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0)for(let n=2;n<t[1].dims.length;++n)r.push(t[1].dims[n]);let o=e.pads.slice();Xt$2.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,o,e.autoPad);let u=Object.assign({},e);return Object.assign(u,{kernelShape:r,pads:o,cacheKey:e.cacheKey}),u},_n=e=>{let t=e.attributes,r=pe(t),o=t.getString("auto_pad","NOTSET"),u=t.getInts("dilations",[1,1]),n=t.getInt("group",1),a=t.getInts("kernel_shape",[]),d=t.getInts("pads",[0,0,0,0]),p=t.getInts("strides",[1,1]);return $({autoPad:o,dilations:u,group:n,kernelShape:a,pads:d,strides:p,...r})},Lc=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4||e[1].dims.length!==4)throw new Error("currently only support 2-dimensional conv");let r=e[0].dims[1],o=e[1].dims[1]*t.group;if(r!==o)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let u=e[0].dims.length-2;if(t.dilations.length!==u)throw new Error(`dilations should be ${u}D`);if(t.strides.length!==u)throw new Error(`strides should be ${u}D`);if(t.pads.length!==u*2)throw new Error(`pads should be ${u*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(e[0].type!=="float32"||e[1].type!=="float32")throw new Error("Conv input(X,W) should be float tensor");if(e.length===3&&e[2].type!=="float32")throw new Error("Conv input(bias) should be float tensor")}}),$c,kc,Bc,cs$1,Fc,Nc,Cc,Gc,Rc,Vc,ps$1,zc,ds$1=x$1(()=>{tt$1(),q(),N(),te(),$c=(e,t,r,o,u,n)=>(e-1)*t+r+(o-1)*u+1-n,kc=(e,t,r,o,u)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[o]=n,r[u]=e-n):t==="SAME_LOWER"&&(r[o]=e-n,r[u]=n)},Bc=(e,t,r,o,u,n,a,d)=>{let p=e.length-2,i=d.length===0;for(let l=0;l<p;++l){let s=i?e[l+2]*n[l]:d[l],c=$c(e[l+2],n[l],u[l],t[l],r[l],s);kc(c,o,u,l,l+p),i&&d.push(n[l]*(e[l+2]-1)+a[l]+(t[l]-1)*r[l]+1-u[l]-u[l+p])}},cs$1=(e,t,r)=>(zc(t,r),Fc(e,t,r)),Fc=(e,t,r)=>{let o=Vc(r,t);return[Rc(e,t,o)]},Nc=(e,t)=>({name:"ConvTranspose",inputNames:e?["X","W","B"]:["X","W"],inputTypes:e?[0,0,0]:[0,0],cacheHint:t}),Cc=(e,t,r,o)=>{let u=t.length>2?"getB(output_channel)":"0.0",n=t[0].dims,a=t[1].dims,d=a[1],p=a[0]/o.group,i=[t[0].dims[0],t[1].dims[1]*o.group,...o.outputShape],l=D(e.session.backend.glContext.version),{activationFunction:s,applyActivation:c}=Dt$1(o),h=`
  const ivec2 strides = ivec2(${o.strides[0]}, ${o.strides[1]});
  const ivec2 pads = ivec2(${o.pads[0]}, ${o.pads[1]});
  ${s}
  void main() {
    ivec4 coords = getOutputCoords();
    int batch = coords.x;
    int output_channel = coords.y;

    ivec2 loc = coords.zw + pads;

    int group_id = output_channel / ${d};
    int wOutChannel = output_channel - group_id * ${d};

    float value = ${u};
    for (int inChannelOffset = 0; inChannelOffset < ${p}; inChannelOffset++) {
      int input_channel = group_id * ${p} + inChannelOffset;
      for (int wWOff = 0; wWOff < ${a[2]}; wWOff++) {
        for (int wHOff = 0; wHOff < ${a[3]}; wHOff++) {
          ivec2 wOff = ivec2(wWOff * ${o.dilations[0]}, wHOff * ${o.dilations[1]});
          ivec2 wLoc = loc - wOff;
          ivec2 wLocIn = wLoc / strides;
          if (
            wLocIn * strides == wLoc &&
            wLocIn.x >= 0 && wLocIn.x < ${n[2]} &&
            wLocIn.y >= 0 && wLocIn.y < ${n[3]}
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
`;return{...r,output:{dims:i,type:t[0].type,textureType:0},shaderSource:h,hasMain:!0}},Gc=(e,t,r)=>{let o=Nc(t.length>2,r.cacheKey);return{...o,get:()=>Cc(e,t,o,r)}},Rc=(e,t,r)=>e.run(Gc(e,t,r),t),Vc=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0)for(let d=2;d<t[1].dims.length;++d)r.push(t[1].dims[d]);let o=e.pads.slice(),u=e.outputShape.slice(),n=t[0].dims;Bc(n,r,e.dilations,e.autoPad,o,e.strides,e.outputPadding,u);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:o,outputShape:u,cacheKey:e.cacheKey}),a},ps$1=e=>{let t=e.attributes,r=pe(t),o=t.getString("auto_pad","NOTSET"),u=t.getInts("dilations",[1,1]),n=t.getInt("group",1),a=t.getInts("kernel_shape",[]),d=t.getInts("output_padding",[0,0]),p=t.getInts("output_shape",[]),i=t.getInts("pads",[0,0,0,0]),l=t.getInts("strides",[1,1]);return $({autoPad:o,dilations:u,group:n,kernelShape:a,outputPadding:d,outputShape:p,pads:i,strides:l,...r})},zc=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4||e[1].dims.length!==4)throw new Error("currently only support 2-dimensional conv");let r=e[0].dims[1],o=e[1].dims[0];if(r!==o)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let u=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==u))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape");if(e[0].type!=="float32"||e[1].type!=="float32")throw new Error("ConvTranspose input(X,W) should be float tensor");if(e.length===3&&e[2].type!=="float32")throw new Error("ConvTranspose input(bias) should be float tensor")}}),hs$1,ee$1,ms$1,Mc,bs$1,Uc,Wc,Hc,pr$1=x$1(()=>{tt$1(),z$1(),N(),hs$1={name:"Transpose",inputNames:["A"],inputTypes:[0]},ee$1=(e,t,r)=>(Hc(t),[e.run({...hs$1,cacheHint:r.cacheKey,get:()=>Mc(e,t[0],r.perm)},t)]),ms$1=e=>$({perm:e.attributes.getInts("perm",[])}),Mc=(e,t,r)=>{let o=t.dims;r=bs$1(o,r);let u=Uc(o,r),n=o.length,a=`
      ${Wc("perm",r,n)}
      float process(int indices[${n}]) {
        int a[${n}];
        perm(a, indices);
        return _A(a);
      }`;return{...hs$1,output:{dims:u,type:t.type,textureType:0},shaderSource:a}},bs$1=(e,t)=>(t&&t.length!==e.length&&(t=[...e.keys()].reverse()),t),Uc=(e,t)=>(t=bs$1(e,t),O.sortBasedOnPerm(e,t)),Wc=(e,t,r)=>{let o=[];o.push(`void ${e}(out int a[${r}], int src[${r}]) {`);for(let u=0;u<r;++u)o.push(`	a[${t[u]}]=src[${u}];`);return o.push("	}"),o.join(`
`)},Hc=e=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("input should be float tensor")}}),ys$1,gs$1,qc,xs$1=x$1(()=>{pr$1(),ys$1=(e,t,r)=>{qc(t);let o=r.blocksize,u=o*o,n=r.mode==="DCR"?[0,3,4,1,5,2]:[0,1,4,2,5,3],a=r.mode==="DCR"?[t[0].dims[0],o,o,t[0].dims[1]/u,t[0].dims[2],t[0].dims[3]]:[t[0].dims[0],t[0].dims[1]/u,o,o,t[0].dims[2],t[0].dims[3]],d=e.reshapeUnpacked(t[0],a),p={perm:n,cacheKey:`${n}`},[i]=ee$1(e,[d],p),l=[t[0].dims[0],t[0].dims[1]/u,t[0].dims[2]*o,t[0].dims[3]*o];return[e.reshapeUnpacked(i,l)]},gs$1=e=>{let t=e.attributes.getInt("blocksize");if(t<1)throw new Error(`blocksize must be >= 1, but got : ${t} for DepthToSpace`);let r=e.attributes.getString("mode","DCR");if(r!=="DCR"&&r!=="CRD")throw new Error(`unrecognized mode: ${r} for DepthToSpace`);return{mode:r,blocksize:t}},qc=e=>{if(e.length!==1)throw new Error(`DepthToSpace expect 1 inputs, but got ${e.length}`);if(e[0].type==="string"||e[0].dims.length!==4)throw new TypeError("DepthToSpace input should be a 4-D numeric tensor")}}),Ts$1,vs$1,jc,ws$1=x$1(()=>{z$1(),Ts$1=(e,t,r)=>{jc(t,r);let o=O.flattenShape(t[0].dims,r);return[e.reshapeUnpacked(t[0],o)]},vs$1=e=>e.attributes.getInt("axis",1),jc=(e,t)=>{if(!e||e.length!==1)throw new Error("Flatten requires 1 input.");let r=e[0].dims.length;if(r===0)throw new Error("scalar tensor is not supported.");if(t<-r||t>r)throw new Error("Invalid axis");if(e[0].type==="string")throw new Error("string tensor is not supported.")}}),Vt$1,Pe$2=x$1(()=>{Vt$1=["float32","float64","int32","int16","int8","uint16","uint32","uint8"]}),Is$1,_s$1,Kc,Xc,Jc,Zc,Ss$1=x$1(()=>{tt$1(),Pe$2(),z$1(),N(),Is$1=(e,t,r)=>(Zc(t,r.axis),[e.run(Jc(e,t,r),t)]),_s$1=e=>$({axis:e.attributes.getInt("axis",0)}),Kc={name:"Gather",inputNames:["A","B"],inputTypes:[0,0]},Xc=(e,t,r,o)=>{let u=r[0].dims.slice(),n=r[1].dims.slice(),a=new Array(u.length+n.length-1);o=O.normalizeAxis(o,u.length);let d=[];for(let c=0;c<a.length;c++)c<o?(a[c]=u[c],d.push(`inputIdx[${c}] = outputIdx[${c}];`)):c<o+n.length?(a[c]=n[c-o],d.push(`indexDataIdx[${c-o}] = outputIdx[${c}];`)):(a[c]=u[c-n.length+1],d.push(`inputIdx[${c-n.length+1}] = outputIdx[${c}];`));let p=a.length||1,i=u.length,l=n.length||1,s=`
      float process(int outputIdx[${p}]) {
        int inputIdx[${i}];
        int indexDataIdx[${l}];
        indexDataIdx[0] = 0;
        ${d.join(`
        `)}
        int idx = int(_B(indexDataIdx));
        inputIdx[${o}] = idx < 0 ? idx + ${u[o]} : idx;
        return _A(inputIdx);
      }`;return{...t,output:{dims:a,type:r[0].type,textureType:0},shaderSource:s}},Jc=(e,t,r)=>{let o={...Kc,cacheHint:r.cacheKey};return{...o,get:()=>Xc(e,o,t,r.axis)}},Zc=(e,t)=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.");let r=e[0].dims.length;if(r<1)throw new Error("Invalid input shape.");if(t<-r||t>r-1)throw new Error("Invalid axis.");if(Vt$1.indexOf(e[0].type)===-1)throw new Error("Invaid input type.");if(e[1].type!=="int32"&&e[1].type!=="int16")throw new Error("Invaid input type.")}}),Sn,As$1,Os$1,Ps$1,Yc,Qc,tp,Es$1=x$1(()=>{tt$1(),z$1(),N(),Sn=(e,t,r)=>(tp(t,r),[e.run(Yc(t,r),t)]),As$1=(e,t)=>{let r=e.attributes.getInt("transA",0)!==0,o=e.attributes.getInt("transB",0)!==0,u=e.attributes.getFloat("alpha",1),n=e.attributes.getFloat("beta",1);return $({transA:r,transB:o,alpha:u,beta:n,isOptionalC:t})},Os$1=e=>As$1(e,!1),Ps$1=e=>As$1(e,!0),Yc=(e,t)=>{let r={name:"Gemm",inputNames:e.length===3?["A","B","C"]:["A","B"],inputTypes:e.length===3?[0,0,0]:[0,0],key:t.cacheKey};return{...r,get:()=>Qc(r,e,t)}},Qc=(e,t,r)=>{let o=t[0].dims.slice(),u=t[1].dims.slice(),[n,a]=er$2.getShapeOfGemmResult(o,r.transA,u,r.transB,t.length===3?t[2].dims:void 0),d=[n,a];if(!d)throw new Error("Can't use gemm on the given tensors");let p=o[o.length-1],i="";r.transA&&(p=o[0]),r.transA&&r.transB?i="value += _A_T(a) * _B_T(b);":r.transA&&!r.transB?i="value += _A_T(a) * _B(b);":!r.transA&&r.transB?i="value += _A(a) * _B_T(b);":!r.transA&&!r.transB&&(i="value += _A(a) * _B(b);");let l=d.length,s=t.length===3?`int c[${t[2].dims.length}];`:"",c=t.length===3?"bcastIndices_C(indices, c);":"",h=t.length===3?"value += beta * _C(c);":"",g=`
      float process(int indices[${l}]) {
          int a[${l}];
          int b[${l}];
          ${s}

          copyVec(indices, a);
          copyVec(indices, b);
          ${c}

          float value = 0.0;
          for (int k=0; k<${p}; ++k) {
              a[${l-1}] = k;
              b[${l-2}] = k;
              ${i}
          }

          value = value * alpha;
          ${h}
          return value;
      }`;return{...e,output:{dims:d,type:t[0].type,textureType:0},variables:[{name:"alpha",type:"float",data:r.alpha},{name:"beta",type:"float",data:r.beta}],shaderSource:g}},tp=(e,t)=>{if(!e)throw new Error("Input is missing");if(t.isOptionalC&&(e.length<2||e.length>3))throw new Error("Invaid input shape.");if(!t.isOptionalC&&e.length!==3)throw new Error("Gemm requires 3 inputs");if(e.length===3&&e[2].dims.length!==1&&e[2].dims.length!==2)throw new Error("Invalid input shape of C");if(e[0].type!=="float32"&&e[0].type!=="float64"||e[1].type!=="float32"&&e[1].type!=="float64"||e.length===3&&e[2].type!=="float32"&&e[2].type!=="float64")throw new Error("Invalid input type.");if(e[0].type!==e[1].type||e.length===3&&e[0].type!==e[2].type)throw new Error("Input types are mismatched")}}),Ds$1,Ls$1,ep,rp,np,op,ip,$s$1=x$1(()=>{tt$1(),N(),Ds$1=(e,t,r)=>(ip(t),[e.run(np(e,t,r),t)]),Ls$1=e=>{let t=e.attributes.getFloat("scale"),r=e.attributes.getFloats("bias");return $({scale:t,bias:r})},ep={name:"ImageScaler",inputNames:["X"],inputTypes:[0]},rp=(e,t,r,o)=>{let u=r[0].dims.slice(),n=u.length,a=`
      ${op(o.bias.length)}
      float process(int indices[${n}]) {
        return _X(indices) * scale + getBias(bias, indices[1]);
      }`;return{...t,output:{dims:u,type:r[0].type,textureType:0},variables:[{name:"bias",type:"float",arrayLength:o.bias.length,data:o.bias},{name:"scale",type:"float",data:o.scale}],shaderSource:a}},np=(e,t,r)=>{let o={...ep,cacheHint:r.cacheKey};return{...o,get:()=>rp(e,o,t,r)}},op=e=>{let t=[`float getBias(float bias[${e}], int channel) {`];for(let r=0;r<e;++r)r===0?t.push(`	if (channel == ${r}) { return bias[${r}]; }`):r===e-1?t.push(`	else { return bias[${r}]; }`):t.push(`	else if (channel == ${r}) { return bias[${r}]; }`);return t.push("	}"),t.join(`
`)},ip=e=>{if(!e||e.length!==1)throw new Error("ImageScaler requires 1 input.");if(e[0].dims.length!==4)throw new Error("Invalid input shape.");if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("Invalid input type.")}}),Bs$1,Fs$1,ks$1,ap,sp,up,lp,fp,cp,Ns$1=x$1(()=>{q(),N(),Bs$1=(e,t,r)=>{cp(t);let o=e.run(sp(t[0]),t);return[e.run(fp(e,t[0],r,o.dims),[t[0],o,t[1],t[2]])]},Fs$1=e=>e.attributes.getFloat("epsilon",1e-5),ks$1={name:"InstanceNormalization_MeanAndVariance",inputNames:["X"],inputTypes:[0]},ap=(e,t)=>{let r=t.dims.slice(),o=r[1],u=r[2]*r[3],n=[r[0],o],a=`
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
        float mean = temp / float(${u});
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
        v.g = temp / float(${u});

        return v;
      }`;return{...e,output:{dims:n,type:t.type,textureType:4},shaderSource:a}},sp=e=>({...ks$1,get:()=>ap(ks$1,e)}),up={name:"InstanceNormalization_ComputeOutput",inputNames:["X","MeanAndVariance","Scale","B"],inputTypes:[0,4,0,0]},lp=(e,t,r,o,u)=>{let n=D(e.session.backend.glContext.version),[a,d]=e.calculateTextureWidthAndHeight(u,4),[p,i]=[a/4,d],l=`
      vec4 get_MeanAndVariance(int[2] mv) {
        int offset = indicesToOffset_MeanAndVariance(mv);
        vec2 coords = offsetToCoords(offset, ${p}, ${i});
        return ${n.texture2D}(MeanAndVariance, coords);
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
      }`;return{...t,output:{dims:r.dims,type:r.type,textureType:0},variables:[{name:"epsilon",type:"float",data:o}],shaderSource:l}},fp=(e,t,r,o)=>{let u={...up,cacheHint:`${r}`};return{...u,get:()=>lp(e,u,t,r,o)}},cp=e=>{if(!e||e.length!==3)throw new Error("InstanceNormalization requires 3 inputs.");let t=e[0],r=e[1],o=e[2];if(t.dims.length<3||r.dims.length!==1||o.dims.length!==1)throw new Error("Invalid input shape.");if(r.dims[0]!==t.dims[1]||o.dims[0]!==t.dims[1])throw new Error("Input shapes are mismatched.");if(t.type!=="float32"&&t.type!=="float64"||r.type!=="float32"&&r.type!=="float64"||o.type!=="float32"&&o.type!=="float64")throw new Error("Invalid input type.");if(e[0].dims.length!==4)throw new Error("Only support 4-D input shape.")}});function pp(e,t){let r=e[0].dims[1],o=e[0].dims.length,u=-Math.floor((t.size-1)/2),n=Math.ceil((t.size-1)/2),a=`float(${t.alpha}) / float(${t.size})`,d=`float(${t.bias})`,p=`float(${t.beta})`,i=`
    float process(int indices[${o}]) {
        int c = indices[1];
        float x = _X(indices);
        float square_sum = 0.0;

        for (int i = ${u}; i <= ${n}; i++) {
          int idx = c + i;
          if (c >= 0 && c < ${r}) {
            indices[1] = idx;
            float j = _X(indices);
            square_sum += j * j;
          }
        }
        return x / pow(${d} + ${a} * square_sum, ${p});
    }`;return{...Rs$1,cacheHint:t.cacheKey,output:{dims:e[0].dims,type:e[0].type,textureType:0},shaderSource:i}}function dp(e,t){return{...Rs$1,cacheHint:t.cacheKey,get:()=>pp(e,t)}}var Cs$1,Gs$1,Rs$1,hp,Vs$1=x$1(()=>{tt$1(),N(),Cs$1=(e,t,r)=>(hp(t),[e.run(dp(t,r),t)]),Gs$1=e=>{let t=e.attributes.getFloat("alpha",1e-4),r=e.attributes.getFloat("beta",.75),o=e.attributes.getFloat("bias",1),u=e.attributes.getInt("size");return $({alpha:t,beta:r,bias:o,size:u})},Rs$1={name:"LRN",inputNames:["X"],inputTypes:[0]},hp=e=>{if(!e||e.length!==1)throw new Error("LRN requires 1 input.");if(e[0].dims.length!==4)throw new Error('currently only support LRN for input with "NCHW" format');if(e[0].type!=="float32")throw new Error("input should be float type")}}),mp,An,zs$1,Ms$1,Us$1,bp,yp,gp,xp$1,Tp$1,vp$1,wp,Ip$1,Ws$1=x$1(()=>{tt$1(),z$1(),q(),N(),mp={name:"Pad",inputNames:["A"],inputTypes:[0]},An=(e,t,r)=>(gp(t),[e.run({...mp,cacheHint:r.cacheKey,get:()=>yp(e,t[0],r)},t)]),zs$1=e=>{let t=e.attributes.getString("mode","constant"),r=e.attributes.getFloat("value",0),o=e.attributes.getInts("pads");return $({mode:t,value:r,pads:o})},Ms$1=(e,t,r)=>{xp$1(t);let o=bp(e,t,r);return An(e,[t[0]],o)},Us$1=e=>e.attributes.getString("mode","constant"),bp=(e,t,r)=>{if(!e.session.isInitializer(t[1].dataId)||t.length>=3&&!e.session.isInitializer(t[2].dataId))throw new Error("dynamic pad attributes are not allowed");let o=Array.from(t[1].integerData),u=t.length>=3?t[2].floatData[0]:0;return $({mode:r,pads:o,value:u})},yp=(e,t,r)=>{let o=O.padShape(t.dims.slice(),r.pads),u=o.length,n=`
      ${Tp$1(e,t,r)}
      float process(int[${u}] indices) {
          return padA(indices);
      }`;return{name:"Pad",inputNames:["A"],inputTypes:[0],output:{dims:o,type:t.type,textureType:0},shaderSource:n}},gp=e=>{if(!e||e.length!==1)throw new Error("Pad requires 1 input");if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("Invalid input type.")},xp$1=e=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Pad requires 2 or 3 inputs");if(e[1].type!=="int32")throw new Error("Invalid input type.");if(e.length>=3&&e[2].type==="string")throw new Error("Invalid input type.")},Tp$1=(e,t,r)=>{let o=D(e.session.backend.glContext.version),[u,n]=e.calculateTextureWidthAndHeight(t.dims,0),a=O.computeStrides(t.dims);switch(r.mode){case"constant":return vp$1(o,t.dims,a,u,n,r.pads,r.value);case"reflect":return wp(o,t.dims,a,u,n,r.pads);case"edge":return Ip$1(o,t.dims,a,u,n,r.pads);default:throw new Error("Invalid mode")}},vp$1=(e,t,r,o,u,n,a)=>{let d=t.length,p="";for(let i=d-1;i>=0;--i)p+=`
        k = m[${i}] - ${n[i]};
        if (k < 0)  return constant;
        if (k >= ${t[i]}) return constant;
        offset += k * ${r[i]};
        `;return`
      float padA(int m[${d}]) {
        const float constant = float(${a});
        int offset = 0;
        int k = 0;
        ${p}
        vec2 coords = offsetToCoords(offset, ${o}, ${u});
        float value = getColorAsFloat(${e.texture2D}(A, coords));
        return value;
      }
      `},wp=(e,t,r,o,u,n)=>{let a=t.length,d="";for(let p=a-1;p>=0;--p)d+=`
        k = m[${p}] - ${n[p]};
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
        vec2 coords = offsetToCoords(offset, ${o}, ${u});
        float value = getColorAsFloat(${e.texture2D}(A, coords));
        return value;
      }
      `},Ip$1=(e,t,r,o,u,n)=>{let a=t.length,d="";for(let p=a-1;p>=0;--p)d+=`
        k = m[${p}] - ${n[p]};
        if (k < 0)  k = 0;
        if (k >= ${t[p]}) k = ${t[p]-1};
        offset += k * ${r[p]};
      `;return`
      float padA(int m[${a}]) {
        int offset = 0;
        int k = 0;
        ${d}
        vec2 coords = offsetToCoords(offset, ${o}, ${u});
        float value = getColorAsFloat(${e.texture2D}(A, coords));
        return value;
      }
      `}}),qs$1,js$1,Ks$1,Xs$1,Js$1,Zs$1,Ys$1,Qs$1,tu$1,_p,Hs$1,eu$1,hr$1,ru$1,dr$1,Sp$1,nu$1=x$1(()=>{tt$1(),z$1(),N(),qs$1=(e,t,r)=>{hr$1(t);let o={name:"AveragePool",inputNames:["X"],inputTypes:[0],cacheHint:r.cacheKey};return[e.run({...o,get:()=>Ks$1(t,o,!1,r)},t)]},js$1=e=>{let t=e.attributes.getString("auto_pad","NOTSET"),r=e.attributes.getInt("ceil_mode",0),o=e.attributes.getInt("count_include_pad",0)!==0,u=e.attributes.getInts("kernel_shape"),n=e.attributes.getInts("strides",[]),a=e.attributes.getInts("pads",[]);if(r!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");return $({autoPad:t,ceilMode:r,countIncludePad:o,kernelShape:u,strides:n,pads:a})},Ks$1=(e,t,r,o)=>{let[u,n]=tu$1(e,o,r),a=O.size(u.kernelShape),d="value += _X(x);",p="";u.countIncludePad?p+=`value /= float(${a});`:p+=`value /= float(${a} - pad);`;let i=`
        ${ru$1(e[0].dims,u,d,p,"0.0")}
      `;return{...t,output:{dims:n,type:e[0].type,textureType:0},shaderSource:i}},Xs$1=(e,t,r)=>{hr$1(t);let o={name:"GlobalAveragePool",inputNames:["X"],inputTypes:[0],cacheHint:`${r.countIncludePad}`};return[e.run({...o,get:()=>Ks$1(t,o,!0,r)},t)]},Js$1=e=>{let t=e.attributes.getInt("count_include_pad",0)!==0;return $({autoPad:"",ceilMode:0,countIncludePad:t,kernelShape:[],strides:[],pads:[]})},Zs$1=(e,t,r)=>{hr$1(t);let o={name:"MaxPool",inputNames:["X"],inputTypes:[0],cacheHint:r.cacheKey};return[e.run({...o,get:()=>Qs$1(t,o,!1,r)},t)]},Ys$1=e=>{let t=e.attributes.getString("auto_pad","NOTSET"),r=e.attributes.getInt("ceil_mode",0),o=e.attributes.getInts("kernel_shape"),u=e.attributes.getInts("strides",[]),n=e.attributes.getInts("pads",[]),a=e.attributes.getInt("storage_order",0),d=e.attributes.getInts("dilations",[]);if(a!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");return $({autoPad:t,ceilMode:r,countIncludePad:!1,kernelShape:o,strides:u,pads:n,storageOrder:a,dilations:d})},Qs$1=(e,t,r,o)=>{let[u,n]=tu$1(e,o,r),a=`
      value = max(_X(x), value);
    `,d="",p=`
      ${ru$1(e[0].dims,u,a,d,"-1e5")}
    `;return{...t,output:{dims:n,type:e[0].type,textureType:0},shaderSource:p}},tu$1=(e,t,r)=>{let o=e[0].dims.slice(),u=Object.hasOwnProperty.call(t,"dilations"),n=t.kernelShape.slice(),a=t.strides.slice(),d=u?t.dilations.slice():[],p=t.pads.slice();Xt$2.adjustPoolAttributes(r,o,n,a,d,p);let i=Xt$2.computePoolOutputShape(r,o,a,d,n,p,t.autoPad),l=Object.assign({},t);return u?Object.assign(l,{kernelShape:n,strides:a,pads:p,dilations:d,cacheKey:t.cacheKey}):Object.assign(l,{kernelShape:n,strides:a,pads:p,cacheKey:t.cacheKey}),[l,i]},_p={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[],cacheKey:""},Hs$1={name:"GlobalMaxPool",inputNames:["X"],inputTypes:[0]},eu$1=(e,t)=>(hr$1(t),[e.run({...Hs$1,get:()=>Qs$1(t,Hs$1,!0,_p)},t)]),hr$1=e=>{if(!e||e.length!==1)throw new Error("Pool ops requires 1 input.");if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("Invalid input type.")},ru$1=(e,t,r,o,u)=>{let n=e.length;if(t.kernelShape.length<=2){let a=t.kernelShape[t.kernelShape.length-1],d=t.strides[t.strides.length-1],p=t.pads[t.pads.length/2-1],i=t.pads[t.pads.length-1],l=e[n-1],s="",c="",h="";if(p+i!==0?s=`
          for (int i = 0; i < ${a}; i++) {
            x[${n} - 1] = indices[${n} - 1] * ${d} - ${p} + i;
            if (x[${n} - 1] < 0 || x[${n} - 1] >= ${l}) {
              pad++;
              continue;
            }
            ${r}
          }`:s=`
          for (int i = 0; i < ${a}; i++) {
            x[${n} - 1] = indices[${n} - 1] * ${d} - ${p} + i;
            ${r}
          }`,t.kernelShape.length===2){let g=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],C=t.pads[t.pads.length/2-2],W=t.pads[t.pads.length-2],A=e[n-2];C+W!==0?c=`
            for (int j = 0; j < ${g}; j++) {
              x[${n} - 2] = indices[${n} - 2] * ${y} - ${C} + j;
              if (x[${n} - 2] < 0 || x[${n} - 2] >= ${A}) {
                pad+= ${a};
                continue;
              }
          `:c=`
            for (int j = 0; j < ${g}; j++) {
              x[${n} - 2] = indices[${n} - 2] * ${y} - ${C} + j;
            `,h=`
          }
        `}return`
        float process(int indices[${n}]) {
          int x[${n}];
          copyVec(indices, x);

          float value = ${u};
          int pad = 0;
          ${c}
          ${s}
          ${h}
          ${o}
          return value;
        }
      `}else{let a=O.size(t.kernelShape),d=O.computeStrides(t.kernelShape),p=d.length,i=t.pads.length,l=Sp$1(p),s=dr$1(e,"inputDims"),c=dr$1(t.pads,"pads"),h=dr$1(d,"kernelStrides"),g=dr$1(t.strides,"strides"),y=t.pads.reduce((W,A)=>W+A),C="";return y?C=`
            if (x[j] >= inputDims[j] || x[j] < 0) {
              pad++;
              isPad = true;
              break;
            }
          }
          if (!isPad) {
            ${r}
          }`:C=`
          }
          ${r}
        `,`
        ${l}
        float process(int indices[${n}]) {
          int x[${n}];
          copyVec(indices, x);
          int offset[${p}];
          int pads[${i}];
          int inputDims[${n}];
          int kernelStrides[${p}];
          int strides[${p}];
          ${c}
          ${s}
          ${g}
          ${h}

          float value = ${u};
          int pad = 0;
          bool isPad = false;
          for (int i = 0; i < ${a}; i++) {
            offsetToIndices(i, kernelStrides, offset);
            isPad = false;
            for (int j = ${n} - ${p}; j < ${n}; j++) {
              x[j] = indices[j] * strides[j - ${n} + ${p}]
                + offset[j - ${n} + ${p}] - pads[j - 2];
              ${C}
          }
          ${o}

          return value;
        }
      `}},dr$1=(e,t)=>{let r="";for(let o=0;o<e.length;o++)r+=`
      ${t}[${o}] = ${e[o]};
    `;return r},Sp$1=e=>`
  void offsetToIndices(int offset, int[${e}] strides, out int[${e}] indices) {
    if (${e} == 0) {
      return;
    }
    for (int i = 0; i < ${e} - 1; ++i) {
      indices[i] = offset / strides[i];
      offset -= indices[i] * strides[i];
    }
    indices[${e} - 1] = offset;
  }`}),re,zt$1,Ap$1,Op$1,ou$1,iu$1,au$1,su$1,uu$1,lu$1,fu$1,cu$1=x$1(()=>{tt$1(),Pe$2(),z$1(),N(),re=(e,t,r,o,u)=>{Op$1(t);let n={name:o,inputNames:["A"],inputTypes:[0]};return[e.run({...n,cacheHint:r.cacheKey,get:()=>Ap$1(e,t,r,o,u,n)},t)]},zt$1=e=>{let t=e.attributes.getInts("axes",[]),r=e.attributes.getInt("keepdims",1)===1;return $({axes:t,keepDims:r})},Ap$1=(e,t,r,o,u,n)=>{let a=[],d=t[0].dims.length||1,p=[],i=O.normalizeAxes(r.axes,t[0].dims.length),l=u(t,i),s=l[1];for(let h=0;h<t[0].dims.length;h++)i.indexOf(h)>=0||i.length===0?(r.keepDims&&a.push(1),s=`
          for(int j${h} = 0; j${h} < ${t[0].dims[h]}; j${h}++) {
            inputIdx[${h}] = j${h};
            ${s}
          }`):(p.push(`inputIdx[${h}] = outputIdx[${a.length}];`),a.push(t[0].dims[h]));let c=`
      float process(int outputIdx[${a.length||1}]) {
        float value;                 // final result
        int inputIdx[${d}];      // addressing input data
        ${p.join(`
`)}
        ${l[0]}       // init ops for reduce max/min
        ${s}
        ${l[2]}       // final computation for reduce mean
        return value;
      }`;return{...n,output:{dims:a,type:t[0].type,textureType:0},shaderSource:c}},Op$1=e=>{if(!e||e.length!==1)throw new Error("Reduce op requires 1 input.");if(Vt$1.indexOf(e[0].type)===-1)throw new Error("Invalid input type.")},ou$1=(e,t,r)=>re(e,t,r,"ReduceSum",()=>["value = 0.0;","value += _A(inputIdx);",""]),iu$1=(e,t,r)=>re(e,t,r,"ReduceMean",(o,u)=>{let n=1;for(let a=0;a<o[0].dims.length;a++)(u.indexOf(a)>=0||u.length===0)&&(n*=o[0].dims[a]);return["value = 0.0;","value += _A(inputIdx);",`value /= ${n}.;`]}),au$1=(e,t,r)=>re(e,t,r,"ReduceMax",(o,u)=>{let n=[];for(let a=0;a<o[0].dims.length;a++)(u.indexOf(a)>=0||u.length===0)&&n.push(`inputIdx[${a}] = 0;`);return[`${n.join(`
`)}
value = _A(inputIdx);`,"value = max(value, _A(inputIdx));",""]}),su$1=(e,t,r)=>re(e,t,r,"ReduceMin",(o,u)=>{let n=[];for(let a=0;a<o[0].dims.length;a++)(u.indexOf(a)>=0||u.length===0)&&n.push(`inputIdx[${a}] = 0;`);return[`${n.join(`
`)}
value = _A(inputIdx);`,"value = min(value, _A(inputIdx));",""]}),uu$1=(e,t,r)=>re(e,t,r,"ReduceProd",()=>["value = 1.0;","value *= _A(inputIdx);",""]),lu$1=(e,t,r)=>re(e,t,r,"ReduceLogSum",()=>["value = 0.0;","value += _A(inputIdx);","value = log(value);"]),fu$1=(e,t,r)=>re(e,t,r,"ReduceLogSumSquare",()=>["float t; value = 0.0;","t = _A(inputIdx); value += t * t;",""])}),pu$1,du$1=x$1(()=>{z$1(),pu$1=(e,t)=>{let r=O.calculateReshapedDims(t[0].dims,t[1].integerData);return e.session.pack?[e.reshapePacked(t[0],r)]:[e.reshapeUnpacked(t[0],r)]}}),hu$1,On,mu,bu$1,Ee$2,Pp$1,Pn,mr$1,En=x$1(()=>{tt$1(),q(),N(),hu$1={name:"Upsample",inputNames:["X"],inputTypes:[0]},On=(e,t,r)=>(Pn(t,r),[e.run({...hu$1,cacheHint:r.cacheKey,get:()=>Pp$1(e,t,r)},t)]),mu=e=>Ee$2(e,7),bu$1=e=>Ee$2(e,9),Ee$2=(e,t)=>{let r=t>=10,o=e.attributes.getString("mode","nearest");if(o!=="nearest"&&o!=="linear"&&(t<11||o!=="cubic"))throw new Error(`unrecognized mode: ${o}`);let u=[];t<9&&(u=e.attributes.getFloats("scales"),mr$1(u,o,r));let n=e.attributes.getFloat("extrapolation_value",0),a=t>10?e.attributes.getString("coordinate_transformation_mode","half_pixel"):"asymmetric";if(["asymmetric","pytorch_half_pixel","tf_half_pixel_for_nn","align_corners","tf_crop_and_resize","half_pixel"].indexOf(a)===-1)throw new Error(`coordinate_transform_mode '${a}' is not supported`);let d=a==="tf_crop_and_resize",p=d,i=o==="nearest"&&t>=11?e.attributes.getString("nearest_mode","round_prefer_floor"):"";if(["round_prefer_floor","round_prefer_ceil","floor","ceil",""].indexOf(i)===-1)throw new Error(`nearest_mode '${i}' is not supported`);let l=e.attributes.getFloat("cubic_coeff_a",-.75),s=e.attributes.getInt("exclude_outside",0)!==0;if(s&&o!=="cubic")throw new Error("exclude_outside can be set to 1 only when mode is CUBIC.");let c=t<11?!0:o==="nearest"&&a==="asymmetric"&&i==="floor",h=0,g=0,y=0;return t>10?e.inputs.length>2?(h=1,g=2,y=3):(g=1,y=2):t===9&&(g=1),$({opset:t,isResize:r,mode:o,scales:u,extrapolationValue:n,coordinateTransformMode:a,useExtrapolation:p,needRoiInput:d,nearestMode:i,cubicCoefficientA:l,excludeOutside:s,useNearest2xOptimization:c,roiInputIdx:h,scalesInputIdx:g,sizesInputIdx:y})},Pp$1=(e,t,r)=>{let o=D(e.session.backend.glContext.version),[u,n]=e.calculateTextureWidthAndHeight(t[0].dims,0),a=t[0].dims.map((y,C)=>Math.floor(y*r.scales[C])),[d,p]=e.calculateTextureWidthAndHeight(a,0),i=a.length,l=new Array(i),s=new Array(i),c=`
      int output_pitches[${i}];
      int input_pitches[${i}];
      `;for(let y=i-1;y>=0;y--)l[y]=y===i-1?1:l[y+1]*a[y+1],s[y]=y===i-1?1:s[y+1]*t[0].dims[y+1],c+=`
        output_pitches[${y}] = ${l[y]};
        input_pitches[${y}] = ${s[y]};
        `;let h=`
      float getInputFloat(int index) {
        vec2 coords = offsetToCoords(index, ${u}, ${n});
        float value = getColorAsFloat(${o.texture2D}(X, coords));
        return value;
      }
      `,g=r.mode==="nearest"?`
    ${h}
    float process(int indices[${i}]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${d}, ${p});

      ${c}

      int d, m;
      for (int dim = 0; dim < ${i}; ++dim) {
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
    }`:i===4?`
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
    }`;return{...hu$1,output:{dims:a,type:t[0].type,textureType:0},shaderSource:g,variables:[{name:"scales",type:"int",arrayLength:r.scales.length,data:r.scales.map(y=>Math.ceil(y))}]}},Pn=(e,t)=>{if(!e||t.opset<9&&e.length!==1||t.opset>=9&&t.opset<11&&e.length!==2||t.opset>=11&&e.length<2)throw new Error("invalid inputs.");if(t.scales.length>0&&e[0].dims.length!==t.scales.length)throw new Error("Invalid input shape.");if(e[0].type==="string")throw new Error("Invalid input tensor types.")},mr$1=(e,t,r)=>{if(r){for(let o of e)if(o<=0)throw new Error("Scale value should be greater than 0.")}else for(let o of e)if(o<1)throw new Error("Scale value should be greater than or equal to 1.");if((t==="linear"||t==="cubic")&&e.length!==2&&(e.length!==4||e[0]!==1||e[1]!==1))throw new Error(`'Linear' mode and 'Cubic' mode only support 2-D inputs ('Bilinear', 'Bicubic')         or 4-D inputs with the corresponding outermost 2 scale values being 1         in the ${r?"Resize":"Upsample"} opeartor.`)}}),Dn,Ln$1,yu$1,gu$1,Ep$1,Dp$1,Lp$1,$p$1,xu$1=x$1(()=>{q(),N(),Pt$2(),Qt$2(),En(),Dn={name:"Resize",inputNames:["A"],inputTypes:[2]},Ln$1=(e,t,r)=>(Pn(t,r),[e.run({...Dn,cacheHint:r.cacheKey,get:()=>Ep$1(e,t,r)},t)]),yu$1=e=>Ee$2(e,10),gu$1=e=>Ee$2(e,11),Ep$1=(e,t,r)=>{let o=D(e.session.backend.glContext.version),[u,n]=Dp$1(t,r);if(u.every(A=>A===1)&&r.coordinateTransformMode!=="tf_crop_and_resize")return{...Dn,output:{dims:n,type:t[0].type,textureType:2},hasMain:!0,shaderSource:`void main() {
                    vec4 v = ${o.texture2D}(X, TexCoords);
                    ${o.output} = v;
                }`};let a=n.length;if(a<2)throw new Error(`output dimension should be at least 2, but got ${a}`);let d=n[a-2],p=n[a-1],i=t[0].dims;if(a!==i.length)throw new Error(`output dimension should match input ${i.length}, but got ${a}`);let l=i[a-2],s=i[a-1],c=u[a-2],h=u[a-1],g="";if(r.mode!=="linear")throw new Error(`resize (packed) does not support mode: '${r.mode}'`);switch(r.coordinateTransformMode){case"asymmetric":g=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        return vec4(coords) / scaleWHWH;
                    }
                `;break;case"half_pixel":g=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        return (vec4(coords) + 0.5) / scaleWHWH - 0.5;
                    }
                `;break;case"pytorch_half_pixel":g=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        vec4 fcoords = vec4(coords);
                        return vec4(
                            ${p}.0 > 1.0 ? (fcoords.x + 0.5) / scaleWHWH.x - 0.5 : 0.0,
                            ${d}.0 > 1.0 ? (fcoords.y + 0.5) / scaleWHWH.y - 0.5 : 0.0,
                            ${p}.0 > 1.0 ? (fcoords.z + 0.5) / scaleWHWH.z - 0.5 : 0.0,
                            ${d}.0 > 1.0 ? (fcoords.w + 0.5) / scaleWHWH.w - 0.5 : 0.0
                          );
                    }
                `;break;case"align_corners":g=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        vec4 resized = vec4(${p}.0 - 1.0, ${d}.0 - 1.0, ${p}.0 - 1.0,
                            ${d}.0 - 1.0);
                        vec4 original = vec4(${s}.0 - 1.0, ${l}.0 - 1.0, ${s}.0 - 1.0,
                            ${l}.0 - 1.0);
                        vec4 new_scale = original / resized;
                        return vec4(coords) * new_scale;
                    }
                `;break;default:throw new Error(`resize (packed) does not support coordinateTransformMode:                                 '${r.coordinateTransformMode}'`)}let y=at$1(a),C=Et$2(),W=`
            const vec2 inputWH = vec2(${l}.0, ${s}.0);
            const vec4 scaleWHWH = vec4(float(${c}), float(${h}), float(${c}), float(${h}));
            ${C}
            ${g}
            float getAValue(int x10, int r, int c, int d) {
                return getChannel(getA(x10, r, c, d), vec2(c, d));
            }
            void main() {
                ${y} rc = getOutputCoords();

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
        `;return{...Dn,output:{dims:n,type:t[0].type,textureType:2},hasMain:!0,shaderSource:W}},Dp$1=(e,t)=>{let r=e[0].dims,o=t.scales,u;if(o.length===0){let a=e[t.scalesInputIdx];if(a&&a.size!==0){if(e[t.sizesInputIdx])throw new Error("Only one of scales or sizes must be provided as input.");o=Lp$1(a,t.mode,t.isResize)}else{let d=e[t.sizesInputIdx];if(!d||d.size===0)throw new Error("Either scales or sizes MUST be provided as input.");u=Array.from(d.integerData),o=$p$1(u,r,t.mode,t.isResize)}}else if(e[t.sizesInputIdx])throw new Error("Only one of scales or sizes must be provided as input.");let n=u||r.map((a,d)=>Math.floor(a*o[d]));return[o,n]},Lp$1=(e,t,r)=>{let o=Array.from(e.floatData);return mr$1(o,t,r),o},$p$1=(e,t,r,o)=>{let u=t.length,n=new Array(u);for(let a=0,d=u;a<d;a++)if(t[a]===0){if(e[a]!==0)throw new Error("Input dim is zero but required output dim is non-zero.");n[a]=1}else n[a]=e[a]/t[a];return mr$1(n,r,o),n}}),Tu$1,kp$1,vu$1=x$1(()=>{Yt$2(),Tu$1=(e,t)=>(kp$1(t),[new Y$1([t[0].dims.length],"int32",void 0,void 0,new Int32Array(t[0].dims))]),kp$1=e=>{if(!e||e.length!==1)throw new Error("Shape requires 1 input.")}}),$n,wu$1,Iu$1,_u$1,Bp$1,Su$1,Fp$1,Np$1,Au$1=x$1(()=>{tt$1(),Pe$2(),z$1(),N(),$n={name:"Slice",inputNames:["A"],inputTypes:[0]},wu$1=(e,t,r)=>(Bp$1(t),[e.run({...$n,cacheHint:r.cacheKey,get:()=>_u$1(e,t[0],r)},t)]),Iu$1=e=>{let t=e.attributes.getInts("starts"),r=e.attributes.getInts("ends"),o=e.attributes.getInts("axes",[]);return $({starts:t,ends:r,axes:o})},_u$1=(e,t,r)=>{let o=r.axes.length===0?t.dims.slice(0).map((l,s)=>s):r.axes,u=O.normalizeAxes(o,t.dims.length),n=r.starts.map((l,s)=>l>t.dims[u[s]]-1?t.dims[u[s]]:O.normalizeAxis(l,t.dims[u[s]])),a=r.ends.map((l,s)=>l>t.dims[u[s]]-1?t.dims[u[s]]:O.normalizeAxis(l,t.dims[u[s]])),d=t.dims.slice(),p=[];for(let l=0;l<u.length;l++)d[u[l]]=a[l]-n[l],n[l]>0&&p.push(`outputIdx[${u[l]}] += ${n[l]};`);let i=`
      float process(int outputIdx[${d.length}]) {
        ${p.join(`
      `)}
        return _A(outputIdx);
      }`;return{...$n,output:{dims:d,type:t.type,textureType:0},shaderSource:i}},Bp$1=e=>{if(!e||e.length!==1)throw new Error("Slice requires 1 input.");if(Vt$1.indexOf(e[0].type)===-1)throw new Error("Invalid input type.")},Su$1=(e,t)=>{Np$1(t);let r=Fp$1(e,t);return[e.run({...$n,cacheHint:r.cacheKey,get:()=>_u$1(e,t[0],r)},[t[0]])]},Fp$1=(e,t)=>{if(!e.session.isInitializer(t[1].dataId)||!e.session.isInitializer(t[2].dataId)||t.length>=4&&!e.session.isInitializer(t[3].dataId)||t.length>=5&&!e.session.isInitializer(t[4].dataId))throw new Error("dynamic slice attributes are not allowed");if(t.length>=5&&t[4].integerData.some(a=>a!==1))throw new Error("currently non-1 steps is not supported for Slice");let r=Array.from(t[1].integerData),o=Array.from(t[2].integerData),u=t.length>=4?Array.from(t[3].integerData):[],n=`${u};${r};${o}`;return{starts:r,ends:o,axes:u,cacheKey:n}},Np$1=e=>{if(!e||e.length<3||e.length>5)throw new Error("Invalid input number.");if(e[1].type!=="int32"||e[1].dims.length!==1)throw new Error("Invalid input type.");if(e[2].type!=="int32"||e[2].dims.length!==1)throw new Error("Invalid input type.");if(e.length>=4&&(e[3].type!=="int32"||e[3].dims.length!==1))throw new Error("Invalid input type.");if(e.length>=5&&(e[4].type!=="int32"||e[4].dims.length!==1))throw new Error("Invalid input type.")}}),Ou$1,Pu$1,Eu$1,Du$1,Lu$1,$u$1,ku$1,Bu$1,Cp$1,Gp$1,Rp$1,Fu$1,Nu$1=x$1(()=>{tt$1(),z$1(),q(),N(),pr$1(),Ou$1={name:"SoftmaxComputeMax",inputNames:["A"],inputTypes:[0]},Pu$1={name:"SoftmaxComputeScale",inputNames:["A","Max"],inputTypes:[0,0]},Eu$1={name:"SoftMax",inputNames:["A","Max","Norm"],inputTypes:[0,0,0]},Du$1=(e,t,r)=>{Fu$1(t);let o=t[0].dims.slice(),u=O.normalizeAxis(r.axis,o.length),n=O.sizeToDimension(o,u),a=O.sizeFromDimension(o,u);return Bu$1(e,t,r,n,a)},Lu$1=e=>$({axis:e.attributes.getInt("axis",1)}),$u$1=e=>$({axis:e.attributes.getInt("axis",-1)}),ku$1=(e,t,r)=>{Fu$1(t);let o=t[0].dims.slice(),u=O.normalizeAxis(r.axis,o.length),n=o.length,a=u!==n-1,d=[],p=[],i=[],l;a&&(p=Array.from({length:n}).map((g,y)=>y),p[u]=n-1,p[n-1]=u,p.map(g=>d.push(o[g])),l=$({perm:p}),i=ee$1(e,t,l));let s=a?O.sizeToDimension(d,n-1):O.sizeToDimension(o,n-1),c=a?O.sizeFromDimension(d,n-1):O.sizeFromDimension(o,n-1),h=Bu$1(e,a?i:t,r,s,c);return a?ee$1(e,h,l):h},Bu$1=(e,t,r,o,u)=>{let n=Cp$1(e,t[0],o,u,[o]),a=e.run({...Ou$1,cacheHint:r.cacheKey,get:()=>n},t),d=Gp$1(e,t[0],o,u,n.output.dims,[o]),p=e.run({...Pu$1,cacheHint:r.cacheKey,get:()=>d},[t[0],a]),i=Rp$1(e,t[0],o,u,n.output.dims,d.output.dims);return[e.run({...Eu$1,cacheHint:r.cacheKey,get:()=>i},[t[0],a,p])]},Cp$1=(e,t,r,o,u)=>{let[n,a]=e.calculateTextureWidthAndHeight(t.dims,0),d=u.length;if(r<1||o<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(u.length!==1)throw new Error("Dimensionality of the output should be 1");if(u[0]!==r)throw new Error("Shape of the output should be equal to logical row count");let p=D(e.session.backend.glContext.version),i=`
      float process(int[${d}] indices) {
        int logical_row_start_offset = indices[0] * ${o};

        float max = getColorAsFloat(${p.texture2D}(A, offsetToCoords(logical_row_start_offset, ${n},
        ${a} )));
        for(int i=1; i<${o}; ++i)
        {
          float current = getColorAsFloat(${p.texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${n}, ${a})));
          if(current > max)
          max = current;
        }

        return max;
      }`;return{...Ou$1,output:{dims:u,type:t.type,textureType:0},shaderSource:i}},Gp$1=(e,t,r,o,u,n)=>{let[a,d]=e.calculateTextureWidthAndHeight(t.dims,0),p=n.length;if(r<1||o<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(n.length!==1)throw new Error("Dimensionality of the output should be 1");if(n[0]!==r)throw new Error("Shape of the output should be equal to logical row count");if(u.length!==1)throw new Error("Dimensionality of the intermediate results should be 1");if(u[0]!==r)throw new Error("Shape of the intermediate results should be equal to logical row count");let i=D(e.session.backend.glContext.version),l=`
      float process(int[${p}] indices) {
        int logical_row_start_offset = indices[0] * ${o};

        float norm_factor = 0.0;
        float max = _Max(indices);
        for(int i=0; i<${o}; ++i)
        {
          norm_factor += exp(getColorAsFloat(${i.texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${a}, ${d}))) - max);
        }

        return norm_factor;
      }`;return{...Pu$1,output:{dims:n,type:t.type,textureType:0},shaderSource:l}},Rp$1=(e,t,r,o,u,n)=>{let[a,d]=e.calculateTextureWidthAndHeight(t.dims,0),p=t.dims.length;if(r<1||o<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(u.length!==1||n.length!==1)throw new Error("Dimensionality of the intermediate results should be 1");if(u[0]!==r||n[0]!==r)throw new Error("Shape of the intermediate results should be equal to logical row count");let i=`
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
    }`;return{...Eu$1,output:{dims:t.dims,type:t.type,textureType:0},shaderSource:i}},Fu$1=e=>{if(!e||e.length!==1)throw new Error("Softmax requires 1 input.");if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("Invalid input type")}}),Cu$1,Gu$1,Ru$1,Vp$1,zp$1,Mp$1,Vu$1=x$1(()=>{tt$1(),z$1(),N(),Cu$1={name:"Split",inputNames:["A"],inputTypes:[0]},Gu$1=(e,t,r)=>{Mp$1(t);let o=O.normalizeAxis(r.axis,t[0].dims.length),u=Vp$1(e,t,o,r),n=[];for(let a=0;a<u;++a)n.push(e.run({...Cu$1,cacheHint:`${r.cacheKey};${a}`,get:()=>zp$1(e,t[0],r,o,a)},t));return n},Ru$1=e=>{let t=e.attributes.getInt("axis",0),r=e.attributes.getInts("split",[]),o=e.outputs.length;return $({axis:t,split:r,numOutputs:o})},Vp$1=(e,t,r,o)=>{let[,u]=we$1.splitShape(t[0].dims,r,o.split,o.numOutputs);return u.length},zp$1=(e,t,r,o,u)=>{let[n,a]=we$1.splitShape(t.dims,o,r.split,r.numOutputs),d=a[u],p=n[u],i=`
      float process(int indices[${p.length}]) {
        indices[${o}] += ${d};
        return _A(indices);
      }
    `;return{...Cu$1,cacheHint:`${r.cacheKey}:${u}`,output:{dims:p,type:t.type,textureType:0},shaderSource:i}},Mp$1=e=>{if(!e||e.length!==1)throw new Error("Split requires one input.");if(e[0].type!=="int8"&&e[0].type!=="uint8"&&e[0].type!=="int16"&&e[0].type!=="uint16"&&e[0].type!=="int32"&&e[0].type!=="uint32"&&e[0].type!=="float32"&&e[0].type!=="float64"&&e[0].type!=="bool")throw new Error("Invalid input type.")}}),kn,zu$1,Mu$1,Up$1,Wp$1,Uu$1=x$1(()=>{z$1(),kn=(e,t,r)=>{Up$1(t);let o=O.squeezeShape(t[0].dims,r);return[e.reshapeUnpacked(t[0],o)]},zu$1=(e,t)=>(Wp$1(t),kn(e,[t[0]],Array.from(t[1].integerData))),Mu$1=e=>e.attributes.getInts("axes"),Up$1=e=>{if(!e||e.length!==1)throw new Error("Squeeze requires 1 input.");if(e[0].type==="string")throw new Error("invalid input tensor types.")},Wp$1=e=>{if(!e||e.length!==2)throw new Error("Squeeze requires 2 inputs.");if(e[1].type!=="int32")throw new Error("Invalid input type.")}}),Wu$1,Hp$1,qp$1,Hu$1=x$1(()=>{q(),N(),Wu$1=(e,t)=>{qp$1(t);let r={name:"Sum",inputNames:t.map((o,u)=>`X${u}`),inputTypes:new Array(t.length).fill(0)};return[e.run({...r,get:()=>Hp$1(e,t,r)},t)]},Hp$1=(e,t,r)=>{let o=D(e.session.backend.glContext.version),u=t[0].dims.slice(),n=`
      void main() {
        vec4 result = ${t.map((a,d)=>`${o.texture2D}(X${d},TexCoords)`).join(" + ")};
        ${o.output} = result;
      }
    `;return{...r,output:{dims:u,type:t[0].type,textureType:0},hasMain:!0,shaderSource:n}},qp$1=e=>{if(!e||e.length===0)throw new Error("Sum requires inputs.");let t=e[0].dims.length;for(let r=1;r<e.length;r++){if(t!==e[r].dims.length)throw new Error("Input shapes are mismatched.");for(let o=0;o<t;o++)if(e[0].dims[o]!==e[r].dims[o])throw new Error("Input shapes are not matched.")}if(e[0].type!=="float32"&&e[0].type!=="float64")throw new Error("Invalid input type.");for(let r=1;r<e.length;r++)if(e[0].type!==e[r].type)throw new Error("Input types are not matched.")}}),qu$1,jp$1,Kp$1,ju$1=x$1(()=>{Pe$2(),N(),qu$1=(e,t)=>{Kp$1(t);let r={name:"Tile",inputNames:["A"],inputTypes:[0]};return[e.run({...r,get:()=>jp$1(e,t,r)},t)]},jp$1=(e,t,r)=>{let o=t[0].dims.slice(),u=new Array(o.length),n=[];for(let p=0;p<o.length;p++)u[p]=o[p]*t[1].numberData[p],n.push(`inputIdx[${p}] = int(mod(float(outputIdx[${p}]), ${o[p]}.));`);let a=u.length,d=`
      float process(int outputIdx[${a}]) {
        int inputIdx[${a}];
        ${n.join(`
`)}
        return _A(inputIdx);
      }
    `;return{...r,output:{dims:u,type:t[0].type,textureType:0},shaderSource:d}},Kp$1=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 input.");if(e[1].dims.length!==1)throw new Error("The second input shape must 1 dimension.");if(e[1].dims[0]!==e[0].dims.length)throw new Error("Invalid input shape.");if(Vt$1.indexOf(e[0].type)===-1)throw new Error("Invalid input type.");if(e[1].type!=="int32"&&e[1].type!=="int16")throw new Error("Invalid repeat type.")}}),Bn,Ku$1,Xu$1,Xp$1,Jp$1,Ju$1=x$1(()=>{z$1(),Bn=(e,t,r)=>{Xp$1(t);let o=O.unsqueezeShape(t[0].dims,r);return[e.reshapeUnpacked(t[0],o)]},Ku$1=(e,t)=>(Jp$1(t),Bn(e,[t[0]],Array.from(t[1].integerData))),Xu$1=e=>e.attributes.getInts("axes"),Xp$1=e=>{if(!e||e.length!==1)throw new Error("Unsqueeze requires 1 input.");if(e[0].type==="string")throw new Error("invalid input tensor types.")},Jp$1=e=>{if(!e||e.length!==2)throw new Error("Unsqueeze requires 2 inputs.");if(e[1].type!=="int32")throw new Error("Invalid input type.")}}),Zu$1,Yu$1=x$1(()=>{ua$1(),va$1(),_a$1(),Da$1(),lr$1(),ds$1(),xs$1(),ws$1(),Ss$1(),Es$1(),$s$1(),Ns$1(),Vs$1(),fr$1(),Ws$1(),nu$1(),cu$1(),du$1(),xu$1(),vu$1(),Au$1(),Nu$1(),Vu$1(),Uu$1(),Hu$1(),ju$1(),pr$1(),yn(),Ju$1(),En(),Zu$1=[["Abs","","6+",La$1],["Acos","","7+",$a$1],["Add","","7+",la$1],["And","","7+",fa$1],["Asin","","7+",ka$1],["Atan","","7+",Ba$1],["AveragePool","","7+",qs$1,js$1],["BatchNormalization","","7+",aa$1,sa$1],["Cast","","6+",wa$1,Ia$1],["Ceil","","6+",Ca$1],["Clip","","6-10",mn$1,Fa$1],["Clip","","11+",Na$1],["Concat","","4+",Oa$1,Ea$1],["Conv","","1+",In,_n],["ConvTranspose","","1+",cs$1,ps$1],["Cos","","7+",Ga$1],["Div","","7+",ca$1],["Dropout","","7+",bn],["DepthToSpace","","1+",ys$1,gs$1],["Equal","","7+",pa$1],["Elu","","6+",Ra$1,Va$1],["Exp","","6+",za$1],["Flatten","","1+",Ts$1,vs$1],["Floor","","6+",Ma$1],["FusedConv","com.microsoft","1+",In,_n],["Gather","","1+",Is$1,_s$1],["Gemm","","7-10",Sn,Os$1],["Gemm","","11+",Sn,Ps$1],["GlobalAveragePool","","1+",Xs$1,Js$1],["GlobalMaxPool","","1+",eu$1],["Greater","","7+",da$1],["Identity","","1+",bn],["ImageScaler","","1+",Ds$1,Ls$1],["InstanceNormalization","","6+",Bs$1,Fs$1],["LeakyRelu","","6+",Ua$1,Wa$1],["Less","","7+",ha$1],["LRN","","1+",Cs$1,Gs$1],["Log","","6+",Ha$1],["MatMul","","1+",os$1,is$1],["MaxPool","","1+",Zs$1,Ys$1],["Mul","","7+",ma$1],["Neg","","6+",qa],["Not","","1+",ja$1],["Or","","7+",ba$1],["Pad","","2-10",An,zs$1],["Pad","","11+",Ms$1,Us$1],["Pow","","7+",ya$1],["PRelu","","7+",ga$1],["ReduceLogSum","","1+",lu$1,zt$1],["ReduceMax","","1+",au$1,zt$1],["ReduceMean","","1+",iu$1,zt$1],["ReduceMin","","1+",su$1,zt$1],["ReduceProd","","1+",uu$1,zt$1],["ReduceSum","","1-12",ou$1,zt$1],["ReduceSumSquare","","1+",fu$1,zt$1],["Relu","","6+",Ka$1],["Reshape","","5+",pu$1],["Resize","","10",Ln$1,yu$1],["Resize","","11+",Ln$1,gu$1],["Shape","","1+",Tu$1],["Sigmoid","","6+",Xa$1],["Sin","","7+",Ja$1],["Slice","","10+",Su$1],["Slice","","1-9",wu$1,Iu$1],["Softmax","","1-12",Du$1,Lu$1],["Softmax","","13+",ku$1,$u$1],["Split","","2-12",Gu$1,Ru$1],["Sqrt","","6+",Za$1],["Squeeze","","1-12",kn,Mu$1],["Squeeze","","13+",zu$1],["Sub","","7+",xa$1],["Sum","","6+",Wu$1],["Tan","","7+",Ya$1],["Tanh","","6+",Qa$1],["Tile","","6+",qu$1],["Transpose","","1+",ee$1,ms$1],["Upsample","","7-8",On,mu],["Upsample","","9",On,bu$1],["Unsqueeze","","1-12",Bn,Xu$1],["Unsqueeze","","13+",Ku$1],["Xor","","7+",Ta$1]]});function tl$1(e){let t={},r;for(;(r=Qu$1.exec(e))!==null;){let o=r[3].split(",").map(u=>{let n=u.trim().split(" ");return n&&n.length===2?{type:n[0],name:n[1]}:null}).filter(u=>u!==null);t[r[2]]={params:o,body:r[4]}}for(let o in t){let u=Zp$1.replace("__FUNC__",o),n=new RegExp(u,"gm");for(;(r=n.exec(e))!==null;){let a=r[1],d=r[2],p=r[3].split(","),i=a?`${a} ${d};`:"",l=t[o].body,s="";t[o].params.forEach((h,g)=>{h&&(s+=`${h.type} ${h.name} = ${p[g]};
`)}),l=`${s}
 ${l}`,l=l.replace("return",`${d} = `);let c=`
      ${i}
      {
        ${l}
      }
      `;e=e.replace(r[0],c)}}return e=e.replace(Qu$1,""),e}var Qu$1,Zp$1,el$1=x$1(()=>{Qu$1=/@inline[\s\n\r]+(\w+)[\s\n\r]+([0-9a-zA-Z_]+)\s*\(([^)]*)\)\s*{(([^}]|[\n\r])*)}/gm,Zp$1="(\\w+)?\\s+([_0-9a-zA-Z]+)\\s+=\\s+__FUNC__\\((.*)\\)\\s*;"});function he$1(e,t){let r=[],o=[];for(let u=0;u<e.length;++u)e[u]!==1&&(r.push(e[u]),o.push(u));return{newShape:r,keptDims:o}}function td$1(e){if(e.length===0)return 1;let t=e[0];for(let r=1;r<e.length;r++)t*=e[r];return t}function rl$1(e){let t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}var br$1,Fn$1=x$1(()=>{pt$1(),z$1(),br$1=class{constructor(e){this.maxTextureSize=e}computeTextureWH(e,t){let r=this.computeTexture(e,t);return t&&t.isPacked&&(r[0]/=2,r[1]/=2),t&&t.reverseWH?[r[1],r[0]]:r}computeTexture(e,t){let r=t&&t.isPacked;if(e.length===0)return r?[2,2]:[1,1];let o=this.maxTextureSize;if(t&&t.breakAxis!==void 0){let a=t.breakAxis>=e.length?1:e.slice(t.breakAxis).reduce((p,i)=>p*i),d=t.breakAxis<=0?1:e.slice(0,t.breakAxis).reduce((p,i)=>p*i);if(a>o||d>o)M$1.verbose("TextureLayout",`Given width/height preferences were unattainable: shape:${e}, breakAxis:${t.breakAxis}`);else return[a,d]}let u=e.slice(0);r&&(o=o*2,u=u.map((a,d)=>d>=u.length-2?u[d]%2===0?u[d]:u[d]+1:u[d]),u.length===1&&(u=[2,u[0]])),u.length!==2&&(u=he$1(u).newShape);let n=td$1(u);return u.length<=1&&n<=o?[1,n]:u.length===2&&u[0]<=o&&u[1]<=o?u:u.length===3&&u[0]*u[1]<=o&&u[2]<=o?[u[0]*u[1],u[2]]:u.length===3&&u[0]<=o&&u[1]*u[2]<=o?[u[0],u[1]*u[2]]:u.length===4&&u[0]*u[1]*u[2]<=o&&u[3]<=o?[u[0]*u[1]*u[2],u[3]]:u.length===4&&u[0]<=o&&u[1]*u[2]*u[3]<=o?[u[0],u[1]*u[2]*u[3]]:r?rl$1(n/4).map(a=>a*2):rl$1(n)}}}),yr$1,nl$1=x$1(()=>{z$1(),Bt$1(),q(),Fn$1(),Pt$2(),yr$1=class extends bt$1{constructor(e){super(e)}getFunctions(){return{...this.offsetToCoords(),...this.coordsToOffset(),...this.toVec(),...this.valueFrom(),...this.getCommonUtilFuncs(),...this.getInputsSamplingSnippets(),...this.getOutputSamplingSnippet()}}getCustomTypes(){return{}}offsetToCoords(){let e="offsetToCoords";return{offsetToCoords:new I$1(`
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
      `)}}getOutputSamplingSnippet(){let e=this.context.outputTextureLayout;return e.isPacked?this.getPackedOutputSamplingSnippet(e):this.getUnpackedOutputSamplingSnippet(e)}getPackedOutputSamplingSnippet(e){let t=e.unpackedShape,r=[e.width,e.height],o={},u="getOutputCoords";switch(t.length){case 0:o[u]=this.getOutputScalarCoords();break;case 1:o[u]=this.getOutputPacked1DCoords(t,r);break;case 2:o[u]=this.getOutputPacked2DCoords(t,r);break;case 3:o[u]=this.getOutputPacked3DCoords(t,r);break;default:o[u]=this.getOutputPackedNDCoords(t,r)}let n=`
      void setOutput(vec4 val) {
        ${D(this.context.glContext.version).output} = val;
      }
    `,a="floatTextureSetRGBA";return o[a]=new I$1(n),o}getUnpackedOutputSamplingSnippet(e){let t=e.unpackedShape,r=[e.width,e.height],o={},u="getOutputCoords";switch(t.length){case 0:o[u]=this.getOutputScalarCoords();break;case 1:o[u]=this.getOutputUnpacked1DCoords(t,r);break;case 2:o[u]=this.getOutputUnpacked2DCoords(t,r);break;case 3:o[u]=this.getOutputUnpacked3DCoords(t,r);break;case 4:o[u]=this.getOutputUnpacked4DCoords(t,r);break;case 5:o[u]=this.getOutputUnpacked5DCoords(t,r);break;case 6:o[u]=this.getOutputUnpacked6DCoords(t,r);break;default:throw new Error(`Unsupported output dimensionality: ${t.length}`)}let n=`
        void setOutput(float val) {
          ${D(this.context.glContext.version).output} = vec4(val, 0, 0, 0);
        }
    `,a="floatTextureSetR";return o[a]=new I$1(n),o}getOutputScalarCoords(){return new I$1(`
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
      `,new I$1(o))}getOutputPacked2DCoords(e,t){let r="";if(Kt$2.arraysEqual(e,t))return r=`
        ivec2 getOutputCoords() {
          return 2 * ivec2(TexCoords.xy * vec2(${t[0]}, ${t[1]}));
        }
      `,new I$1(r);let o=t,u=Math.ceil(e[1]/2);return r=`
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${o[0]}, ${o[1]}));

          int index = resTexRC.y * ${o[0]} + resTexRC.x;

          // reverse r and c order for packed texture
          int r = imod(index, ${u}) * 2;
          int c = 2 * (index / ${u});

          return ivec2(r, c);
        }
      `,new I$1(r)}getOutputPacked3DCoords(e,t){let r=[t[0],t[1]],o=Math.ceil(e[2]/2),u=o*Math.ceil(e[1]/2),n=`
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${r[0]}, ${r[1]}));
          int index = resTexRC.y * ${r[0]} + resTexRC.x;

          int b = index / ${u};
          index -= b * ${u};

          // reverse r and c order for packed texture
          int r = imod(index, ${o}) * 2;
          int c = 2 * (index / ${o});

          return ivec3(b, r, c);
        }
      `;return new I$1(n)}getOutputPackedNDCoords(e,t){let r=[t[0],t[1]],o=Math.ceil(e[e.length-1]/2),u=o*Math.ceil(e[e.length-2]/2),n=u,a="",d="b, r, c";for(let i=2;i<e.length-1;i++)n*=e[e.length-i-1],a=`
      int b${i} = index / ${n};
      index -= b${i} * ${n};
    `+a,d=`b${i}, `+d;let p=`
      ivec${e.length} getOutputCoords() {
        ivec2 resTexRC = ivec2(TexCoords.xy *
                              vec2(${r[0]}, ${r[1]}));
        int index = resTexRC.y * ${r[0]} + resTexRC.x;

        ${a}

        int b = index / ${u};
        index -= b * ${u};

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
      `;return new I$1(r)}getOutputUnpacked3DCoords(e,t){let r="",o=e.length,u=null;o<2&&(u=[]),u=new Array(o-1),u[o-2]=e[o-1];for(let d=o-3;d>=0;--d)u[d]=u[d+1]*e[d+1];let n=["r","c","d"],a=u.map((d,p)=>{let i=`int ${n[p]} = index / ${d}`,l=p===u.length-1?`int ${n[p+1]} = index - ${n[p]} * ${d}`:`index -= ${n[p]} * ${d}`;return`${i}; ${l};`}).join("");return r=`
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${a}
          return ivec3(r, c, d);
        }
      `,new I$1(r)}getOutputUnpacked4DCoords(e,t){let r="",o=e.length,u=null;o<2&&(u=[]),u=new Array(o-1),u[o-2]=e[o-1];for(let d=o-3;d>=0;--d)u[d]=u[d+1]*e[d+1];let n=["r","c","d","d2"],a=u.map((d,p)=>{let i=`int ${n[p]} = index / ${d}`,l=p===u.length-1?`int ${n[p+1]} = index - ${n[p]} * ${d}`:`index -= ${n[p]} * ${d}`;return`${i}; ${l};`}).join("");return r=`
      ivec4 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${a}
          return ivec4(r, c, d, d2);
        }
      `,new I$1(r)}getOutputUnpacked5DCoords(e,t){let r="",o=e.length,u=null;o<2&&(u=[]),u=new Array(o-1),u[o-2]=e[o-1];for(let d=o-3;d>=0;--d)u[d]=u[d+1]*e[d+1];let n=["r","c","d","d2","d3"],a=u.map((d,p)=>{let i=`int ${n[p]} = index / ${d}`,l=p===u.length-1?`int ${n[p+1]} = index - ${n[p]} * ${d}`:`index -= ${n[p]} * ${d}`;return`${i}; ${l};`}).join("");return r=`
      ivec5 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${a}
          return ivec5(r, c, d, d2, d3);
        }
      `,new I$1(r)}getOutputUnpacked6DCoords(e,t){let r="",o=e.length,u=null;o<2&&(u=[]),u=new Array(o-1),u[o-2]=e[o-1];for(let d=o-3;d>=0;--d)u[d]=u[d+1]*e[d+1];let n=["r","c","d","d2","d3","d4"],a=u.map((d,p)=>{let i=`int ${n[p]} = index / ${d}`,l=p===u.length-1?`int ${n[p+1]} = index - ${n[p]} * ${d}`:`index -= ${n[p]} * ${d}`;return`${i}; ${l};`}).join("");return r=`
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
        }`),e}getInputsSamplingSnippets(){let e={},t=this.context.outputTextureLayout;return this.context.programInfo.inputNames.forEach((r,o)=>{let u=this.context.inputTextureLayouts[o],n=rr$2(r);u.isPacked?e[n]=this.getPackedSamplerFromInput(n,r,u):e[n]=this.getUnpackedSamplerFromInput(n,r,u);let a=Wi(r);u.unpackedShape.length<=t.unpackedShape.length&&(u.isPacked?e[a]=this.getPackedSamplerAtOutputCoords(a,u,t,r):e[a]=this.getUnpackedSamplerAtOutputCoords(a,u,t,r))}),e}getPackedSamplerAtOutputCoords(e,t,r,o){let u=t.unpackedShape,n=r.unpackedShape,a=rr$2(o),d=u.length,p=n.length,i=it$1.getBroadcastDims(u,n),l=at$1(p),s=p-d,c,h=St$2();d===0?c="":p<2&&i.length>=1?c="coords = 0;":c=i.map(ni=>`coords.${h[ni+s]} = 0;`).join(`
`);let g="";p<2&&d>0?g="coords":g=u.map((ni,ii)=>`coords.${h[ii+s]}`).join(", ");let y="return outputValue;",C=O.size(u)===1,W=O.size(n)===1;if(d===1&&!C&&!W)y=`
        return vec4(outputValue.xy, outputValue.xy);
      `;else if(C&&!W)p===1?y=`
          return vec4(outputValue.x, outputValue.x, 0., 0.);
        `:y=`
          return vec4(outputValue.x);
        `;else if(i.length){let ni=d-2,ii=d-1;i.indexOf(ni)>-1&&i.indexOf(ii)>-1?y="return vec4(outputValue.x);":i.indexOf(ni)>-1?y="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":i.indexOf(ii)>-1&&(y="return vec4(outputValue.xx, outputValue.zz);")}let A=`
        int lastDim = coords.${h[p-1]};
        coords.${h[p-1]} = coords.${h[p-2]};
        coords.${h[p-2]} = lastDim;
      `,X=`
      vec4 ${e}() {
        ${l} coords = getOutputCoords();
        ${A}
        ${c}
        vec4 outputValue = ${a}(${g});
        ${y}
      }
    `;return new I$1(X,["coordinates.getOutputCoords"])}getUnpackedSamplerAtOutputCoords(e,t,r,o){let u=[r.width,r.height],n=[t.width,t.height],a=t.unpackedShape.length,d=r.unpackedShape.length,p=t.unpackedShape,i=r.unpackedShape,l=rr$2(o);if(a===d&&Kt$2.arraysEqual(n,u)){let A=`
          float ${e}() {
            return sampleTexture(${o}, TexCoords);
          }
        `;return new I$1(A,["coordinates.sampleTexture"])}let s=at$1(d),c=it$1.getBroadcastDims(p,i),h=d-a,g,y=St$2();a===0?g="":d<2&&c.length>=1?g="coords = 0;":g=c.map(A=>`coords.${y[A+h]} = 0;`).join(`
`);let C="";d<2&&a>0?C="coords":C=t.unpackedShape.map((A,X)=>`coords.${y[X+h]}`).join(", ");let W=`
        float ${e}() {
          ${s} coords = getOutputCoords();
          ${g}
          return ${l}(${C});
        }
      `;return new I$1(W,["coordinates.getOutputCoords"])}getPackedSamplerFromInput(e,t,r){switch(r.unpackedShape.length){case 0:return this.getPackedSamplerScalar(e,t);case 1:return this.getPackedSampler1D(e,t,r);case 2:return this.getPackedSampler2D(e,t,r);case 3:return this.getPackedSampler3D(e,t,r);default:return this.getPackedSamplerND(e,t,r)}}getUnpackedSamplerFromInput(e,t,r){let o=r.unpackedShape;switch(o.length){case 0:return this.getUnpackedSamplerScalar(e,t,r);case 1:return this.getUnpackedSampler1D(e,t,r);case 2:return this.getUnpackedSampler2D(e,t,r);case 3:return this.getUnpackedSampler3D(e,t,r);case 4:return this.getUnpackedSampler4D(e,t,r);case 5:return this.getUnpackedSampler5D(e,t,r);case 6:return this.getUnpackedSampler6D(e,t,r);default:throw new Error(`Unsupported dimension ${o.length}-D`)}}getPackedSamplerScalar(e,t){let r=D(this.context.glContext.version),o=`
          vec4 ${e}() {
            return ${r.texture2D}(${t}, halfCR);
          }
        `;return new I$1(o)}getPackedSampler1D(e,t,r){let o=[r.width,r.height],u=[o[1],o[0]],n=D(this.context.glContext.version),a=`vec4 ${e}(int index) {
      vec2 uv = packedUVfrom1D(
      ${u[0]}, ${u[1]}, index);
      return ${n.texture2D}(${t}, uv);
    }`;return new I$1(a,["coordinates.packedUVfrom1D"])}getPackedSampler2D(e,t,r){let o=r.unpackedShape,u=[r.width,r.height],n=D(this.context.glContext.version),a=u[0],d=u[1];if(u!=null&&Kt$2.arraysEqual(o,u)){let s=`vec4 ${e}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${d}.0, ${a}.0);
        return ${n.texture2D}(${t}, uv);
      }`;return new I$1(s)}let p=u,i=Math.ceil(o[1]/2),l=`vec4 ${e}(int row, int col) {
      vec2 uv = packedUVfrom2D(${p[1]}, ${p[0]}, ${i}, row, col);
      return ${n.texture2D}(${t}, uv);
    }`;return new I$1(l,["coordinates.packedUVfrom2D"])}getPackedSampler3D(e,t,r){let o=r.unpackedShape,u=[r.width,r.height],n=[u[0],u[1]],a=D(this.context.glContext.version);if(o[0]===1){let c=o.slice(1),h=[1,2],g=le$1(o,c),y=["b","row","col"],C=JSON.parse(JSON.stringify(r));C.unpackedShape=g;let W=this.getPackedSamplerFromInput(e,t,C),A=`${W.routineBody}
      vec4 ${e}(int b, int row, int col) {
        return ${e}(${fe$1(y,h)});
      } `;return new I$1(A,W.dependencies)}let d=n[0],p=n[1],i=Math.ceil(o[2]/2),l=i*Math.ceil(o[1]/2),s=`vec4 ${e}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${p}, ${d}, ${l}, ${i}, b, row, col);
      return ${a.texture2D}(${t}, uv);}`;return new I$1(s,["coordinates.packedUVfrom3D"])}getPackedSamplerND(e,t,r){let o=r.unpackedShape,u=o.length,n=[r.width,r.height],a=D(this.context.glContext.version),d=[n[0],n[1]],p=d[1],i=d[0],l=Math.ceil(o[u-1]/2),s=l*Math.ceil(o[u-2]/2),c="int b, int row, int col",h=`b * ${s} + (row / 2) * ${l} + (col / 2)`;for(let y=2;y<u-1;y++)c=`int b${y}, `+c,s*=o[u-y-1],h=`b${y} * ${s} + `+h;let g=`vec4 ${e}(${c}) {
      int index = ${h};
      int texR = index / ${i};
      int texC = index - texR * ${i};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${i}, ${p});
      return ${a.texture2D}(${t}, uv);
    }`;return new I$1(g)}getUnpackedSamplerScalar(e,t,r){let[o,u]=[r.width,r.height];if(o===1&&u===1){let a=`
          float ${e}() {
            return sampleTexture(${t}, halfCR);
          }
        `;return new I$1(a,["coordinates.sampleTexture"])}let n=`
        float ${e}() {
          int offset_${t} = coordsToOffset(TexCoords, ${o}, ${u});
          vec2 uv = uvFromFlat(${o}, ${u}, offset_${t});
          return sampleTexture(${t}, uv);
        }
      `;return new I$1(n,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler1D(e,t,r){let o=r.width,u=r.height;if(u===1&&o===1){let a=`
        float ${e}(int index) {
          return sampleTexture(${t}, halfCR);
        }
      `;return new I$1(a,["coordinates.sampleTexture"])}if(u===1){let a=`
          float ${e}(int index) {
            vec2 uv = vec2((float(index) + 0.5) / ${o}.0, 0.5);
            return sampleTexture(${t}, uv);
          }
        `;return new I$1(a,["coordinates.sampleTexture"])}if(o===1){let a=`
          float ${e}(int index) {
            vec2 uv = vec2(0.5, (float(index) + 0.5) / ${u}.0);
            return sampleTexture(${t}, uv);
          }
        `;return new I$1(a,["coordinates.sampleTexture"])}let n=`
        float ${e}(int index) {
          vec2 uv = uvFromFlat(${o}, ${u}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new I$1(n,["coordinates.uvFromFlat","coordinates.sampleTexture"])}getUnpackedSampler2D(e,t,r){let o=r.unpackedShape,u=[r.height,r.width];if(u!=null&&Kt$2.arraysEqual(o,u)){let s=u[1],c=u[0],h=`
          float ${e}(int row, int col) {
            vec2 uv = (vec2(row, col) + halfCR) / vec2(${s}.0, ${c}.0);
            return sampleTexture(${t}, uv);
          }
        `;return new I$1(h,["coordinates.sampleTexture"])}let{newShape:n,keptDims:a}=he$1(o),d=n;if(d.length<o.length){let s=le$1(o,d),c=JSON.parse(JSON.stringify(r));c.unpackedShape=s;let h=["col","row"],g=`
          ${this.getUnpackedSamplerFromInput(e,t,c).routineBody}
          float ${e}(int row, int col) {
            return ${e}(${fe$1(h,a)});
          }
        `;return new I$1(g,["coordinates.sampleTexture"])}let p=u[1],i=u[0];if(i===1){let s=`
          float ${e}(int row, int col) {
            int offset_${t} = coordsToOffset(TexCoords, ${p}, ${i});
            float index = dot(vec3(row, col, offset_${t}), vec3(${o[1]}, 1, 1));
            vec2 uv = vec2(0.5, (index + 0.5) / ${p}.0);
            return sampleTexture(${t}, uv);
          }
        `;return new I$1(s,["coordinates.sampleTexture","coordinates.coordsToOffset"])}if(p===1){let s=`
          float ${e}(int row, int col) {
            int offset_${t} = coordsToOffset(TexCoords, ${p}, ${i});
            float index = dot(vec3(row, col, offset_${t}), vec3(${o[1]}, 1, 1));
            vec2 uv = vec2((index + 0.5) / ${i}.0, 0.5);
            return sampleTexture(${t}, uv);
          }
        `;return new I$1(s,["coordinates.sampleTexture","coordinates.coordsToOffset"])}let l=`
        float ${e}(int row, int col) {
          int index = col * ${o[1]} + row;
          vec2 uv = uvFromFlat(${p}, ${i}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new I$1(l,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler3D(e,t,r){let o=r.unpackedShape,u=o[1]*o[2],n=o[2],{newShape:a,keptDims:d}=he$1(o),p=a;if(p.length<o.length){let c=le$1(o,p),h=["batch","col","row"],g=JSON.parse(JSON.stringify(r));g.unpackedShape=c;let y=this.getUnpackedSamplerFromInput(e,t,g),C=d.reverse(),W=`
          ${y.routineBody}
          float ${e}(int batch, int row, int col) {
            return ${e}(${fe$1(h,C)});
          }
        `;return new I$1(W,y.dependencies)}let i=r.width,l=r.height,s=`
          float ${e}(int depth, int row, int col) {
            // Explicitly use integer operations as dot() only works on floats.
            int index = depth * ${u} + col * ${n} + row;
            vec2 uv = uvFromFlat(${i}, ${l}, index);
            return sampleTexture(${t}, uv);
          }
      `;return new I$1(s,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler4D(e,t,r){let o=r.unpackedShape,u=o[3],n=o[2]*u,a=o[1]*n,d=r.width,p=r.height,i=`
        float ${e}(int row, int col, int depth, int depth2) {
          int index = row * ${a} + col * ${n} +
              depth2 * ${u} + depth;
          vec2 uv = uvFromFlat(${d}, ${p}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new I$1(i,["coordinates.uvFromFlat","coordinates.sampleTexture"])}getUnpackedSampler5D(e,t,r){let o=r.unpackedShape,u=o[4],n=o[3]*u,a=o[2]*n,d=o[1]*a,{newShape:p,keptDims:i}=he$1(o);if(p.length<o.length){let h=le$1(o,p),g=["row","col","depth","depth2","depth3"],y=JSON.parse(JSON.stringify(r));y.unpackedShape=h;let C=`
          ${this.getUnpackedSamplerFromInput(e,t,y).routineBody}
          float ${e}(int row, int col, int depth, int depth2, int depth3) {
            return ${e}(${fe$1(g,i)});
          }
        `;return new I$1(C,["coordinates.sampleTexture","coordinates.uvFromFlat"])}let l=r.width,s=r.height,c=`
        float ${e}(int row, int col, int depth, int depth2, int depth3) {
          int index = row * ${d} + col * ${a} + depth * ${n} +
          depth3 * ${u} + depth2;
          vec2 uv = uvFromFlat(${l}, ${s}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new I$1(c,["coordinates.sampleTexture","coordinates.uvFromFlat"])}getUnpackedSampler6D(e,t,r){let o=r.unpackedShape,u=o[5],n=o[4]*u,a=o[3]*n,d=o[2]*a,p=o[1]*d,{newShape:i,keptDims:l}=he$1(o);if(i.length<o.length){let g=le$1(o,i),y=["row","col","depth","depth2","depth3","depth4"],C=JSON.parse(JSON.stringify(r));C.unpackedShape=g;let W=`
            ${this.getUnpackedSamplerFromInput(e,t,C).routineBody}
            float ${e}(int row, int col, int depth,
              int depth2, int depth3, int depth4) {
              return ${e}(${fe$1(y,l)});
            }
          `;return new I$1(W,["coordinates.sampleTexture","coordinates.uvFromFlat"])}let s=r.width,c=r.height,h=`
          float ${e}(int row, int col, int depth,
            int depth2, int depth3, int depth4) {
            int index = row * ${p} + col * ${d} + depth * ${a} +
            depth2 * ${n} + depth3 * ${u} + depth4;
            vec2 uv = uvFromFlat(${s}, ${c}, index);
            return sampleTexture(${t}, uv);
          }
        `;return new I$1(h,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}toVec(){let e=this.context.outputTextureLayout,t=e.shape.length,r=e.strides,o=e.width,u=e.height,n=[];for(let d=0;d<t-1;++d)n.push(`
        c[${d}] = offset / ${r[d]};`),n.push(`
        offset -= c[${d}] * ${r[d]};`);n.push(`
        c[${t-1}] = offset;`);let a=`
      void toVec(vec2 texCoords, out int c[${t}]) {
        int offset = coordsToOffset(texCoords, ${o}, ${u});
        ${n.join("")}
      }
      void toVec(int offset, out int c[${t}]) {
        ${n.join("")}
      }
    `;return{toVec:new I$1(a,["coordinates.coordsToOffset"])}}valueFrom(){let e={};return this.context.programInfo.inputNames.forEach((t,r)=>{let o=this.context.inputTextureLayouts[r],u=(o.unpackedShape.length>0?o.unpackedShape:o.shape).length,n=`_${t}`;e[n]=new I$1(this.getValueFromSingle(t,u,o.width,o.height,!1),[`shapeUtils.indicesToOffset${n}`,"coordinates.offsetToCoords","fragcolor.getColorAsFloat"]),n=n+"_T",e[n]=new I$1(this.getValueFromSingle(t,u,o.width,o.height,!0),[`shapeUtils.indicesToOffset${n}`,"coordinates.offsetToCoords","fragcolor.getColorAsFloat"])}),e}getValueFromSingle(e,t,r,o,u){let n=`_${e}`;u&&(n=n+"_T");let a=D(this.context.glContext.version);return`
        float ${n}(int m[${t}]) {
          int offset = indicesToOffset${n}(m);
          vec2 coords = offsetToCoords(offset, ${r}, ${o});
          float value = getColorAsFloat(${a.texture2D}(${e}, coords));
          return value;
        }
        `}getPackedValueFrom(e,t,r,o,u){let n=`_${e}_Pack`;u&&(n=n+"_T");let a=D(this.context.glContext.version);return`
        vec4 ${n}(int m[${t}]) {
          int offset = indicesToOffset_${e}(m);
          vec2 coords = offsetToCoords(offset, ${r}, ${o});
          return ${a.texture2D}(${e}, coords);
        }
        `}}}),gr,ol$1=x$1(()=>{Bt$1(),gr=class uy extends bt$1{constructor(t){super(t)}getFunctions(){return{...this.encodeFloat32(),...this.decodeFloat32()}}getCustomTypes(){return{}}encodeFloat32(){return{encode:new I$1(`highp vec4 encode(highp float f) {
        return vec4(f, 0.0, 0.0, 0.0);
      }
        `)}}decodeFloat32(){return{decode:new I$1(`highp float decode(highp vec4 rgba) {
        return rgba.r;
      }
        `)}}encodeUint8(){let t=uy.isLittleEndian()?"rgba.rgba=rgba.abgr;":"";return{encode:new I$1(`
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
        `)}}decodeUint8(){let t=uy.isLittleEndian()?"rgba.rgba=rgba.abgr;":"";return{decode:new I$1(`
        highp float decode(highp vec4 rgba) {
          rgba = rgba * 255.0; // values need to be de-normalized from [0,1] to [0,255]
          ${t}
          highp float Sign = 1.0 - step(128.0,rgba[0])*2.0;
          highp float Exponent = 2.0 * mod(rgba[0],128.0) + step(128.0,rgba[1]) - 127.0;
          highp float Mantissa = mod(rgba[1],128.0)*65536.0 + rgba[2]*256.0 +rgba[3] + float(0x800000);
          highp float Result =  Sign * exp2(Exponent) * (Mantissa * exp2(-23.0 ));
          return Result;
      }
        `)}}static isLittleEndian(){let t=new ArrayBuffer(4),r=new Uint32Array(t),o=new Uint8Array(t);if(r[0]=3735928559,o[0]===239)return!0;if(o[0]===222)return!1;throw new Error("unknown endianness")}}}),xr$2,il$1=x$1(()=>{Bt$1(),q(),xr$2=class extends bt$1{constructor(e){super(e)}getFunctions(){return{...this.setFragColor(),...this.getColorAsFloat()}}getCustomTypes(){return{}}setFragColor(){let e=D(this.context.glContext.version);return{setFragColor:new I$1(`
        void setFragColor(float value) {
            ${e.output} = encode(value);
        }
        `,["encoding.encode"])}}getColorAsFloat(){return{getColorAsFloat:new I$1(`
        float getColorAsFloat(vec4 color) {
            return decode(color);
        }
        `,["encoding.decode"])}}}}),Tr$1,al$1=x$1(()=>{Bt$1(),Tr$1=class vg extends bt$1{constructor(t){super(t)}getFunctions(){return{...this.bcastIndex(),...this.bcastMatmulIndex(),...this.offsetToIndices(),...this.indicesToOffset(),...this.incrementIndices()}}getCustomTypes(){return{}}bcastIndex(){let t=this.context.outputTextureLayout.shape.length,r={};return this.context.programInfo.inputNames.forEach((o,u)=>{let n=this.context.inputTextureLayouts[u].unpackedShape;if(n.length<=t){let a=n.length,d=t-a,p=`bcastIndices_${o}`,i="";for(let s=0;s<a;++s)i+=`
          realIndices[${s}] = int( mod(float(bcastedIndices[${d+s}]), ${n[s]}.0) );
          `;let l=`
        void ${p} (int bcastedIndices[${t}], out int realIndices[${a}]) {
          ${i}
        }
        `;r[p]=new I$1(l)}}),r}bcastMatmulIndex(){let t=this.context.outputTextureLayout.shape.length,r={};return this.context.programInfo.inputNames.forEach((o,u)=>{let n=this.context.inputTextureLayouts[u].shape;if(!(n.length<2||n.length>t)){let a=n.length,d=t-a,p=`bcastMatmulIndices_${o}`,i="";for(let s=0;s<a-2;++s)i+=`
          realIndices[${s}] = int( mod(float(bcastedIndices[${d+s}]), ${n[s]}.0) );
          `;let l=`
        void ${p}(int bcastedIndices[${t}], out int realIndices[${a}]) {
          ${i}
          realIndices[${a-1}] = bcastedIndices[${t-1}];
          realIndices[${a-2}] = bcastedIndices[${t-2}];
        }
        `;r[p]=new I$1(l)}}),r}indicesToOffset(){let t={};return this.context.programInfo.inputNames.forEach((r,o)=>{let u=this.context.inputTextureLayouts[o].shape,n=this.context.inputTextureLayouts[o].strides,a=u.length,d=`indicesToOffset_${r}`;t[d]=new I$1(vg.indexToOffsetSingle(d,a,n)),d=`indicesToOffset_${r}_T`,t[d]=new I$1(vg.indexToOffsetSingle(d,a,n.slice().reverse()))}),t}static indexToOffsetSingle(t,r,o){let u="";for(let n=r-1;n>=0;--n)u+=`
        offset += indices[${n}] * ${o[n]};
        `;return`
      int ${t}(int indices[${r}]) {
        int offset = 0;
        ${u}
        return offset;
      }
      `}offsetToIndices(){let t={};return this.context.programInfo.inputNames.forEach((r,o)=>{let u=this.context.inputTextureLayouts[o].shape,n=this.context.inputTextureLayouts[o].strides,a=u.length,d=`offsetToIndices_${r}`;t[d]=new I$1(vg.offsetToIndicesSingle(d,a,n)),d=`offsetToIndices_${r}_T`,t[d]=new I$1(vg.offsetToIndicesSingle(d,a,n.slice().reverse()))}),t}static offsetToIndicesSingle(t,r,o){let u=[];for(let n=0;n<r-1;++n)u.push(`
      indices[${n}] = offset / ${o[n]};`),u.push(`
        offset -= indices[${n}] * ${o[n]};`);return u.push(`
      indices[${r-1}] = offset;`),`
      void ${t}(int offset, out int indices[${r}]) {
        ${u.join("")}
      }
      `}incrementIndices(){let t={};return this.context.programInfo.inputNames.forEach((r,o)=>{let u=this.context.inputTextureLayouts[o].shape,n=u.length,a=`incrementIndices_${r}`,d="";for(let i=0;i<n;++i)d+=`
        shape[${i}] = ${u[i]};`;let p=`
        void ${a}(int axis, out int indices[${n}]) {
          int shape[${n}];
          ${d};
          for(int i = ${n} -1 ; i >= 0; --i) {
            if(i > axis) continue;
            indices[i] += 1;
            if(indices[i] < shape[i]) {
              break;
            }
            indices[i] = 0;
          }
        }
        `;t[a]=new I$1(p)}),t}}}),vr$2,sl$1=x$1(()=>{Bt$1(),vr$2=class extends bt$1{constructor(e){super(e)}getCustomTypes(){return{}}getFunctions(){return{...this.binaryVecFunctions(),...this.copyVec(),...this.setVecItem(),...this.getVecItem()}}binaryVecFunctions(){let e=this.context.outputTextureLayout.shape.length,t={add:"+=",sub:"-=",mul:"*=",div:"/="},r={};for(let o in t){let u=`${o}Vec`,n="";for(let d=0;d<e;++d)n+=`
          dest[${d}] ${t[o]} src[${d}];
          `;let a=`
        void ${u}(int src[${e}], out int dest[${e}]) {
          ${n}
        }
        `;r[u]=new I$1(a)}return r}copyVec(){let e=this.context.outputTextureLayout.shape.length,t="";for(let o=0;o<e;++o)t+=`
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
    `;return{getVecItem:new I$1(r)}}}}),Nn$1,ul$1=x$1(()=>{nl$1(),ol$1(),il$1(),al$1(),sl$1(),Nn$1={encoding:gr,fragcolor:xr$2,vec:vr$2,shapeUtils:Tr$1,coordinates:yr$1}}),wr$1,ll$1=x$1(()=>{Bt$1(),el$1(),ul$1(),q(),wr$1=class{constructor(e,t,r,o){this.libs={},this.glslLibRoutineDependencyGraph={},this.context=new ar$1(e,t,r,o),Object.keys(Nn$1).forEach(n=>{let a=new Nn$1[n](this.context);this.libs[n]=a});let u=this.glslLibRoutineDependencyGraph;for(let n in this.libs){let a=this.libs[n].getFunctions();for(let d in a){let p=n+"."+d,i;u[p]?(i=u[p],i.routineBody=a[d].routineBody):(i=new Oe$2(p,a[d].routineBody),u[p]=i);let l=a[d].dependencies;if(l)for(let s=0;s<l.length;++s)if(u[l[s]])i.addDependency(u[l[s]]);else{let c=new Oe$2(l[s]);u[l[s]]=c,i.addDependency(c)}}}}preprocess(){let e=this.context.programInfo,t=e.shaderSource;return this.context.programInfo.hasMain||(t=`${t}
      ${Ui(this.context.glContext.version,this.context.outputTextureLayout.shape.length)}`),t=tl$1(t),`${Mi(this.context.glContext.version)}
    ${this.getUniforms(e.inputNames,e.variables)}
    ${this.getImports(t)}
    ${t}`}getImports(e){let t=this.selectGlslLibRoutinesToBeIncluded(e);if(t.length===0)return"";let r="";for(let o=0;o<t.length;++o)if(t[o].routineBody)r+=t[o].routineBody+`
`;else throw new Error(`Missing body for the Glsl Library routine: ${t[o].name}`);return r}selectGlslLibRoutinesToBeIncluded(e){let t=[];return Object.keys(this.glslLibRoutineDependencyGraph).forEach(r=>{let o=r.split(".")[1];e.indexOf(o)!==-1&&t.push(this.glslLibRoutineDependencyGraph[r])}),sr$1.returnOrderedNodes(t)}getUniforms(e,t){let r=[];if(e)for(let o of e)r.push(`uniform sampler2D ${o};`);if(t)for(let o of t)r.push(`uniform ${o.type} ${o.name}${o.arrayLength?`[${o.arrayLength}]`:""};`);return r.join(`
`)}}}),Ir$2,fl$1=x$1(()=>{Ft$2(),pt$1(),ll$1(),q(),Ir$2=class{constructor(e,t,r){this.profiler=e,this.glContext=t,this.textureLayoutStrategy=r,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r){this.profiler.event("op",`ProgramManager.run ${e.programInfo.name??"unknown kernel"}`,()=>{let o=this.glContext.gl,u=e.program;o.useProgram(u);try{this.bindOutput(r),this.attributesBound||this.bindAttributes(e.attribLocations),this.bindUniforms(e.uniformLocations,e.programInfo.variables??[],t)}catch(n){throw M$1.error("ProgramManager",e.programInfo.shaderSource),n}this.profiler.event("backend","GlContext.draw()",()=>{this.glContext.draw()})},this.glContext)}dispose(){this.vertexShader&&this.glContext.deleteShader(this.vertexShader),this.repo.forEach(e=>this.glContext.deleteProgram(e.program))}build(e,t,r){return this.profiler.event("backend","ProgramManager.build",()=>{let o=new wr$1(this.glContext,e,t,r),u=o.preprocess(),n=this.compile(u);return{programInfo:e,program:n,uniformLocations:this.getUniformLocations(n,o.context.programInfo.inputNames,o.context.programInfo.variables),attribLocations:this.getAttribLocations(n)}})}compile(e){if(!this.vertexShader){M$1.verbose("ProrgramManager","Compiling and caching Vertex shader for the first time");let o=zi(this.glContext.version);this.vertexShader=this.glContext.compileShader(o,this.glContext.gl.VERTEX_SHADER)}j$1.debug&&M$1.verbose("ProrgramManager",`FragShader:
${e}
`);let t=this.glContext.compileShader(e,this.glContext.gl.FRAGMENT_SHADER),r=this.glContext.createProgram(this.vertexShader,t);return this.glContext.deleteShader(t),r}bindOutput(e){let t=e.width,r=e.height;M$1.verbose("ProrgramManager",`Binding output texture to Framebuffer: w/h=${t}/${r}, shape=${e.shape}, type=${e.tensor.type}`),this.glContext.attachFramebuffer(e.texture,t,r)}bindAttributes(e){let t=e.position,r=e.textureCoord;this.glContext.setVertexAttributes(t,r),this.attributesBound=!0}bindUniforms(e,t,r){let o=this.glContext.gl,u=0;for(let{name:n,type:a,location:d,arrayLength:p}of e){let i=t.find(l=>l.name===n)?.data;if(a!=="sampler2D"&&!i)throw new Error(`variable '${n}' does not have data defined in program info`);switch(a){case"sampler2D":this.bindTexture(r[u],d,u),u++;break;case"float":p?o.uniform1fv(d,i):o.uniform1f(d,i);break;case"int":p?o.uniform1iv(d,i):o.uniform1i(d,i);break;default:throw new Error(`Uniform not implemented: ${a}`)}}}bindTexture(e,t,r){this.glContext.bindTextureToUniform(e.texture,r,t)}getAttribLocations(e){return{position:this.getAttribLocation(e,"position"),textureCoord:this.getAttribLocation(e,"textureCoord")}}getUniformLocations(e,t,r){let o=[];if(t)for(let u of t)o.push({name:u,type:"sampler2D",location:this.getUniformLocation(e,u)});if(r)for(let u of r)o.push({...u,location:this.getUniformLocation(e,u.name)});return o}getUniformLocation(e,t){let r=this.glContext.gl.getUniformLocation(e,t);if(r===null)throw new Error(`Uniform ${t} not found.`);return r}getAttribLocation(e,t){return this.glContext.gl.getAttribLocation(e,t)}}}),_r$2,cl$1=x$1(()=>{pt$1(),Se$1(),_r$2=class{constructor(e,t,r,o){this.glContext=e,this.layoutStrategy=t,this.profiler=r,this.config=o,this.pendingRead=new Map,o.reuseTextures&&(this.inUseTextures=new Map,this.idleTextures=new Map,this.textureLookup=new Map)}createTextureFromLayout(e,t,r,o){let u=this.toEncoderType(e),n=this.glContext.getEncoder(u,t.channels||1,o);if(t.isPacked&&o===1)throw new Error("not implemented");let a=t.width,d=t.height,p,i;if(this.config.reuseTextures){p=`${a}x${d}_${n.format}_${n.internalFormat}_${n.textureType}`,i=this.inUseTextures.get(p),i||(i=[],this.inUseTextures.set(p,i));let s=this.idleTextures.get(p);if(s&&s.length>0){let c=s.pop();return i.push(c),o===1&&this.glContext.updateTexture(c,a,d,n,this.toTextureData(e,r)),c}}M$1.verbose("TextureManager",`Creating new texture of size ${t.width}x${t.height}`);let l=this.glContext.allocateTexture(a,d,n,this.toTextureData(e,r));return this.config.reuseTextures&&(i.push(l),this.textureLookup.set(l,p)),l}readTexture(e,t,r){return r||(r=1),this.profiler.event("backend","TextureManager.readTexture",()=>{let o=e.shape.reduce((n,a)=>n*a)*r,u=this.glContext.readTexture(e.texture,e.width,e.height,o,this.toEncoderType(t),r);return this.toTensorData(t,u)})}async readTextureAsync(e,t,r){let o=e.tensor.dataId;if(r||(r=1),this.pendingRead.has(o)){let u=this.pendingRead.get(o);return new Promise(n=>u?.push(n))}return this.profiler.event("backend","TextureManager.readTextureAsync",async()=>{this.pendingRead.set(o,[]);let u=e.shape.reduce((p,i)=>p*i)*r;await this.glContext.createAndWaitForFence();let n=this.glContext.readTexture(e.texture,e.width,e.height,u,this.toEncoderType(t),r),a=this.toTensorData(t,n),d=this.pendingRead.get(o);return this.pendingRead.delete(o),d?.forEach(p=>p(a)),a})}readUint8TextureAsFloat(e){return this.profiler.event("backend","TextureManager.readUint8TextureAsFloat",()=>{let t=e.shape.reduce((o,u)=>o*u),r=this.glContext.readTexture(e.texture,e.width,e.height,t*4,"byte",4);return new Float32Array(r.buffer,r.byteOffset,t)})}releaseTexture(e,t){let r;if(this.config.reuseTextures&&(r=this.textureLookup.get(e.texture),r)){t&&this.textureLookup.delete(r);let o=this.inUseTextures.get(r);if(o){let u=o.indexOf(e.texture);if(u!==-1){o.splice(u,1);let n=this.idleTextures.get(r);n||(n=[],this.idleTextures.set(r,n)),n.push(e.texture)}}}(!r||t)&&(M$1.verbose("TextureManager",`Deleting texture of size ${e.width}x${e.height}`),this.glContext.deleteTexture(e.texture))}toTensorData(e,t){switch(e){case"int16":return t instanceof Int16Array?t:Int16Array.from(t);case"int32":return t instanceof Int32Array?t:Int32Array.from(t);case"int8":return t instanceof Int8Array?t:Int8Array.from(t);case"uint16":return t instanceof Uint16Array?t:Uint16Array.from(t);case"uint32":return t instanceof Uint32Array?t:Uint32Array.from(t);case"uint8":case"bool":return t instanceof Uint8Array?t:Uint8Array.from(t);case"float32":return t instanceof Float32Array?t:Float32Array.from(t);case"float64":return t instanceof Float64Array?t:Float64Array.from(t);default:throw new Error(`TensorData type ${e} is not supported`)}}toTextureData(e,t){if(t)return t instanceof Float32Array?t:new Float32Array(t)}toEncoderType(e){return"float"}clearActiveTextures(){this.glContext.clearActiveTextures()}}}),Sr$2,pl$1=x$1(()=>{pt$1(),Oo(),oa$1(),Yu$1(),fl$1(),Fn$1(),cl$1(),Sr$2=class{constructor(e,t){this.backend=e,this.context=t,this.layoutStrategy=new br$1(e.glContext.maxTextureSize),this.programManager=new Ir$2(this.context.profiler,e.glContext,this.layoutStrategy),this.textureManager=new _r$2(e.glContext,this.layoutStrategy,this.context.profiler,{reuseTextures:e.textureCacheMode==="full"}),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache=new Map,this.pack=e.pack,this.pack2unpackMap=new Map,this.unpack2packMap=new Map}createInferenceHandler(){return new ir$2(this)}onGraphInitialized(e){let t=e.getValues().filter(r=>r.from===-1&&r.tensor).map(r=>r.tensor.dataId);this.initializers=new Set(t)}isInitializer(e){return this.initializers?this.initializers.has(e):!1}addInitializer(e){this.initializers.add(e)}getTextureData(e,t){return t?this.packedTextureDataCache.get(e):this.unpackedTextureDataCache.get(e)}setTextureData(e,t,r=!1){M$1.verbose("WebGLSessionHandler","Storing Texture data in cache"),r?this.packedTextureDataCache.set(e,t):this.unpackedTextureDataCache.set(e,t)}dispose(){this.programManager.dispose(),this.textureManager.clearActiveTextures(),this.packedTextureDataCache.forEach(e=>this.textureManager.releaseTexture(e,!0)),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache.forEach(e=>this.textureManager.releaseTexture(e,!0)),this.unpackedTextureDataCache=new Map}resolve(e,t,r){let o=Ao$1(e,t,Zu$1);return{impl:o.opImpl,context:o.opInit?o.opInit(e,r):e}}}});function ed$1(e){let t=0;for(;t<e.length&&e[t]();++t);return t-1}var De$2,dl$1=x$1(()=>{Ft$2(),Se$1(),Se$1(),Pt$2(),De$2=class{constructor(e,t){this.frameBufferBound=!1,this.itemsToPoll=[],this.gl=e,this.version=t,this.getExtensions(),this.vertexbuffer=this.createVertexbuffer(),this.framebuffer=this.createFramebuffer(),this.queryVitalParameters()}allocateTexture(e,t,r,o){let u=this.gl,n=u.createTexture();u.bindTexture(u.TEXTURE_2D,n),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,u.NEAREST),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,u.NEAREST),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE);let a=o?r.encode(o,e*t):null;return u.texImage2D(u.TEXTURE_2D,0,r.internalFormat,e,t,0,r.format,r.textureType,a),this.checkError(),n}updateTexture(e,t,r,o,u){let n=this.gl;n.bindTexture(n.TEXTURE_2D,e);let a=o.encode(u,t*r);n.texSubImage2D(n.TEXTURE_2D,0,0,0,t,r,o.format,o.textureType,a),this.checkError()}attachFramebuffer(e,t,r){let o=this.gl;o.bindTexture(o.TEXTURE_2D,e),o.bindFramebuffer(o.FRAMEBUFFER,this.framebuffer),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,e,0),this.checkError(),o.viewport(0,0,t,r),o.scissor(0,0,t,r)}readTexture(e,t,r,o,u,n){let a=this.gl;n||(n=1),this.frameBufferBound||this.attachFramebuffer(e,t,r);let d=this.getEncoder(u,n),p=d.allocate(t*r);return a.bindTexture(a.TEXTURE_2D,e),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,e,0),a.readPixels(0,0,t,r,a.RGBA,d.textureType,p),this.checkError(),d.decode(p,o)}isFramebufferReady(){return!0}getActiveTexture(){let e=this.gl;return`TEXTURE${e.getParameter(this.gl.ACTIVE_TEXTURE)-e.TEXTURE0}`}getTextureBinding(){return this.gl.getParameter(this.gl.TEXTURE_BINDING_2D)}getFramebufferBinding(){return this.gl.getParameter(this.gl.FRAMEBUFFER_BINDING)}setVertexAttributes(e,t){let r=this.gl;r.vertexAttribPointer(e,3,r.FLOAT,!1,20,0),r.enableVertexAttribArray(e),t!==-1&&(r.vertexAttribPointer(t,2,r.FLOAT,!1,20,12),r.enableVertexAttribArray(t)),this.checkError()}createProgram(e,t){let r=this.gl,o=r.createProgram();return r.attachShader(o,e),r.attachShader(o,t),r.linkProgram(o),o}compileShader(e,t){let r=this.gl,o=r.createShader(t);if(!o)throw new Error(`createShader() returned null with type ${t}`);if(r.shaderSource(o,e),r.compileShader(o),r.getShaderParameter(o,r.COMPILE_STATUS)===!1)throw new Error(`Failed to compile shader: ${r.getShaderInfoLog(o)}
Shader source:
${e}`);return o}deleteShader(e){this.gl.deleteShader(e)}bindTextureToUniform(e,t,r){let o=this.gl;o.activeTexture(o.TEXTURE0+t),this.checkError(),o.bindTexture(o.TEXTURE_2D,e),this.checkError(),o.uniform1i(r,t),this.checkError()}draw(){this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4),this.checkError()}checkError(){if(j$1.debug){let e=this.gl,t=e.getError(),r="";switch(t){case e.NO_ERROR:return;case e.INVALID_ENUM:r="INVALID_ENUM";break;case e.INVALID_VALUE:r="INVALID_VALUE";break;case e.INVALID_OPERATION:r="INVALID_OPERATION";break;case e.INVALID_FRAMEBUFFER_OPERATION:r="INVALID_FRAMEBUFFER_OPERATION";break;case e.OUT_OF_MEMORY:r="OUT_OF_MEMORY";break;case e.CONTEXT_LOST_WEBGL:r="CONTEXT_LOST_WEBGL";break;default:r=`Unknown WebGL Error: ${t.toString(16)}`}throw new Error(r)}}deleteTexture(e){this.gl.deleteTexture(e)}deleteProgram(e){this.gl.deleteProgram(e)}getEncoder(e,t,r=0){if(this.version===2)return new nr$2(this.gl,t);switch(e){case"float":return r===1||this.isRenderFloat32Supported?new _e$2(this.gl,t):new _e$2(this.gl,t,this.textureHalfFloatExtension.HALF_FLOAT_OES);case"int":throw new Error("not implemented");case"byte":return new or$2(this.gl,t);default:throw new Error(`Invalid dataType: ${e}`)}}clearActiveTextures(){let e=this.gl;for(let t=0;t<this.maxTextureImageUnits;++t)e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,null)}dispose(){if(this.disposed)return;let e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(this.framebuffer),e.bindBuffer(e.ARRAY_BUFFER,null),e.deleteBuffer(this.vertexbuffer),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.finish(),this.disposed=!0}createDefaultGeometry(){return new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0])}createVertexbuffer(){let e=this.gl,t=e.createBuffer();if(!t)throw new Error("createBuffer() returned null");let r=this.createDefaultGeometry();return e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,r,e.STATIC_DRAW),this.checkError(),t}createFramebuffer(){let e=this.gl.createFramebuffer();if(!e)throw new Error("createFramebuffer returned null");return e}queryVitalParameters(){let e=this.gl;if(this.isFloatTextureAttachableToFrameBuffer=this.checkFloatTextureAttachableToFrameBuffer(),this.isRenderFloat32Supported=this.checkRenderFloat32(),this.isFloat32DownloadSupported=this.checkFloat32Download(),this.version===1&&!this.textureHalfFloatExtension&&!this.isRenderFloat32Supported)throw new Error("both float32 and float16 TextureType are not supported");this.isBlendSupported=!this.isRenderFloat32Supported||this.checkFloat32Blend(),this.maxTextureSize=e.getParameter(e.MAX_TEXTURE_SIZE),this.maxTextureImageUnits=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),this.version}getExtensions(){this.version===2?(this.colorBufferFloatExtension=this.gl.getExtension("EXT_color_buffer_float"),this.disjointTimerQueryWebgl2Extension=this.gl.getExtension("EXT_disjoint_timer_query_webgl2")):(this.textureFloatExtension=this.gl.getExtension("OES_texture_float"),this.textureHalfFloatExtension=this.gl.getExtension("OES_texture_half_float"))}checkFloatTextureAttachableToFrameBuffer(){let e=this.gl,t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t);let r=this.version===2?e.RGBA32F:e.RGBA;e.texImage2D(e.TEXTURE_2D,0,r,1,1,0,e.RGBA,e.FLOAT,null);let o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0);let u=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(t),e.deleteFramebuffer(o),u}checkRenderFloat32(){if(this.version===2){if(!this.colorBufferFloatExtension)return!1}else if(!this.textureFloatExtension)return!1;return this.isFloatTextureAttachableToFrameBuffer}checkFloat32Download(){if(this.version===2){if(!this.colorBufferFloatExtension)return!1}else if(!this.textureFloatExtension||!this.gl.getExtension("WEBGL_color_buffer_float"))return!1;return this.isFloatTextureAttachableToFrameBuffer}checkFloat32Blend(){let e=this.gl,t,r,o,u,n;try{t=e.createTexture(),r=e.createFramebuffer(),e.bindTexture(e.TEXTURE_2D,t);let a=this.version===2?e.RGBA32F:e.RGBA;return e.texImage2D(e.TEXTURE_2D,0,a,1,1,0,e.RGBA,e.FLOAT,null),e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),e.enable(e.BLEND),o=e.createShader(e.VERTEX_SHADER),!o||(e.shaderSource(o,"void main(){}"),e.compileShader(o),u=e.createShader(e.FRAGMENT_SHADER),!u)||(e.shaderSource(u,"precision highp float;void main(){gl_FragColor=vec4(0.5);}"),e.compileShader(u),n=e.createProgram(),!n)?!1:(e.attachShader(n,o),e.attachShader(n,u),e.linkProgram(n),e.useProgram(n),e.drawArrays(e.POINTS,0,1),e.getError()===e.NO_ERROR)}finally{e.disable(e.BLEND),n&&e.deleteProgram(n),o&&e.deleteShader(o),u&&e.deleteShader(u),r&&(e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(r)),t&&(e.bindTexture(e.TEXTURE_2D,null),e.deleteTexture(t))}}beginTimer(){if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let e=this.gl,t=this.disjointTimerQueryWebgl2Extension,r=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,r),r}else throw new Error("WebGL1 profiling currently not supported.")}endTimer(){if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let e=this.gl,t=this.disjointTimerQueryWebgl2Extension;e.endQuery(t.TIME_ELAPSED_EXT);return}else throw new Error("WebGL1 profiling currently not supported")}isTimerResultAvailable(e){let t=!1,r=!1;if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let o=this.gl,u=this.disjointTimerQueryWebgl2Extension;t=o.getQueryParameter(e,o.QUERY_RESULT_AVAILABLE),r=o.getParameter(u.GPU_DISJOINT_EXT)}else throw new Error("WebGL1 profiling currently not supported");return t&&!r}getTimerResult(e){let t=0;if(this.version===2){let r=this.gl;t=r.getQueryParameter(e,r.QUERY_RESULT),r.deleteQuery(e)}else throw new Error("WebGL1 profiling currently not supported");return t/1e6}async waitForQueryAndGetTime(e){return await sn$1(()=>this.isTimerResultAvailable(e)),this.getTimerResult(e)}async createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,r=e,o=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);return e.flush(),o===null?t=()=>!0:t=()=>{let u=r.clientWaitSync(o,0,0);return u===r.ALREADY_SIGNALED||u===r.CONDITION_SATISFIED},{query:o,isFencePassed:t}}async pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){let e=ed$1(this.itemsToPoll.map(t=>t.isDoneFn));for(let t=0;t<=e;++t){let{resolveFn:r}=this.itemsToPoll[t];r()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}async addItemToPoll(e,t){this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),!(this.itemsToPoll.length>1)&&await sn$1(()=>(this.pollItems(),this.itemsToPoll.length===0))}}});function Cn(e){let t;if((!e||e==="webgl2")&&"webgl2"in me$1?t=me$1.webgl2:(!e||e==="webgl")&&"webgl"in me$1&&(t=me$1.webgl),!t)try{let o=nd$1();t=hl$1(o,e)}catch{let o=rd$1();t=hl$1(o,e)}e=e||t.version===1?"webgl":"webgl2";let r=t.gl;return me$1[e]=t,r.isContextLost()?(delete me$1[e],Cn(e)):(r.disable(r.DEPTH_TEST),r.disable(r.STENCIL_TEST),r.disable(r.BLEND),r.disable(r.DITHER),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SAMPLE_COVERAGE),r.enable(r.SCISSOR_TEST),r.enable(r.CULL_FACE),r.cullFace(r.BACK),t)}function hl$1(e,t){let r={alpha:!1,depth:!1,antialias:!1,stencil:!1,preserveDrawingBuffer:!1,premultipliedAlpha:!1,failIfMajorPerformanceCaveat:!1},o,u=r;if((!t||t==="webgl2")&&(o=e.getContext("webgl2",u),o))try{return new De$2(o,2)}catch(n){M$1.warning("GlContextFactory",`failed to create WebGLContext using contextId 'webgl2'. Error: ${n}`)}if((!t||t==="webgl")&&(o=e.getContext("webgl",u)||e.getContext("experimental-webgl",u),o))try{return new De$2(o,1)}catch(n){M$1.warning("GlContextFactory",`failed to create WebGLContext using contextId 'webgl' or 'experimental-webgl'. Error: ${n}`)}throw new Error("WebGL is not supported")}function rd$1(){if(typeof document>"u")throw new TypeError("failed to create canvas: document is not supported");let e=document.createElement("canvas");return e.width=1,e.height=1,e}function nd$1(){if(typeof OffscreenCanvas>"u")throw new TypeError("failed to create offscreen canvas: OffscreenCanvas is not supported");return new OffscreenCanvas(1,1)}var me$1,ml$1=x$1(()=>{pt$1(),dl$1(),me$1={}}),Ar$2,bl$1=x$1(()=>{Ft$2(),pt$1(),pl$1(),ml$1(),Ar$2=class{get contextId(){return j$1.webgl.contextId}set contextId(e){j$1.webgl.contextId=e}get matmulMaxBatchSize(){return j$1.webgl.matmulMaxBatchSize}set matmulMaxBatchSize(e){j$1.webgl.matmulMaxBatchSize=e}get textureCacheMode(){return j$1.webgl.textureCacheMode}set textureCacheMode(e){j$1.webgl.textureCacheMode=e}get pack(){return j$1.webgl.pack}set pack(e){j$1.webgl.pack=e}get async(){return j$1.webgl.async}set async(e){j$1.webgl.async=e}initialize(){try{return this.glContext=Cn(this.contextId),typeof this.matmulMaxBatchSize!="number"&&(this.matmulMaxBatchSize=16),typeof this.textureCacheMode!="string"&&(this.textureCacheMode="full"),typeof this.pack!="boolean"&&(this.pack=!1),typeof this.async!="boolean"&&(this.async=!1),M$1.setWithEnv(j$1),j$1.webgl.context||Object.defineProperty(j$1.webgl,"context",{value:this.glContext.gl}),M$1.verbose("WebGLBackend",`Created WebGLContext: ${typeof this.glContext} with matmulMaxBatchSize: ${this.matmulMaxBatchSize}; textureCacheMode: ${this.textureCacheMode}; pack: ${this.pack}; async: ${this.async}.`),!0}catch(e){return M$1.warning("WebGLBackend",`Unable to initialize WebGLBackend. ${e}`),!1}}createSessionHandler(e){return new Sr$2(this,e)}dispose(){this.glContext.dispose()}}});async function Gn$1(e){if(e){let t=typeof e=="string"?[e]:e;for(let r of t){let o=yl$1.get(r);if(o)return o;let u=await id$1(r);if(u)return u}}else return Gn$1(["webgl"]);throw new Error("no available backend to use")}async function id$1(e){let t=od$1;if(typeof t[e]<"u"&&ad$1(t[e])){let r=t[e],o=r.initialize();if(typeof o=="object"&&"then"in o&&(o=await o),o)return yl$1.set(e,r),r}}function ad$1(e){let t=e;return"initialize"in t&&typeof t.initialize=="function"&&"createSessionHandler"in t&&typeof t.createSessionHandler=="function"&&"dispose"in t&&typeof t.dispose=="function"}var yl$1,od$1,gl$1=x$1(()=>{bl$1(),yl$1=new Map,od$1={webgl:new Ar$2}}),Rn,Or$2,xl$1=x$1(()=>{pt$1(),Rn=class{constructor(e,t){this.op=e,this.node=t}},Or$2=class{constructor(e,t,r){this.graph=e,this.profiler=r,this.initialize(t)}initialize(e){this.profiler.event("session","ExecutionPlan.initialize",()=>{let t=this.graph.getNodes();if(t.length!==e.length)throw new Error("The size of nodes and OPs do not match.");this._ops=e.map((r,o)=>new Rn(r,t[o])),this.reset(),this._starter=[],this._ops.forEach((r,o)=>{let u=!0;for(let n of r.node.inputs)if(!this._values[n]&&this.graph.getInputIndices().indexOf(n)===-1){u=!1;break}u&&this._starter.push(o)})})}reset(){this._values=this.graph.getValues().map(e=>e.tensor)}async execute(e,t){return this.profiler.event("session","ExecutionPlan.execute",async()=>{this.reset();let r=e.createInferenceHandler(),o=this.graph.getInputIndices();if(t.length!==o.length)throw new Error(`number of input tensors don't match the number of inputs to the model: actual: ${t.length} expected: ${o.length}`);t.forEach((i,l)=>{let s=o[l];this._values[s]=i});let u=this._starter.slice(0),n=this.graph.getValues(),a=this.graph.getNodes(),d=0;for(;d<u.length;){let i=u[d++],l=this._ops[i],s=l.node.inputs.map(y=>this._values[y]);if(s.indexOf(void 0)!==-1)throw new Error(`unresolved input detected: op: ${l.node}`);let c=s;M$1.verbose("ExecPlan",`Running op:${l.node.name} (${c.map((y,C)=>`'${l.node.inputs[C]}': ${y.type}[${y.dims.join(",")}]`).join(", ")})`);let h=await this.profiler.event("node",l.node.name,async()=>l.op.impl(r,c,l.op.context));if(h.length!==l.node.outputs.length)throw new Error("the size of output does not match model definition.");h.forEach((y,C)=>{let W=l.node.outputs[C];if(this._values[W])throw new Error(`output [${W}] already has value: op:${l.node.name}`);this._values[W]=y});let g=new Set;h.forEach((y,C)=>{let W=l.node.outputs[C];for(let A of n[W].to){let X=a[A],ni=!0;for(let ii of X.inputs)if(!this._values[ii]){ni=!1;break}ni&&g.add(A)}}),u.push(...g)}let p=[];for(let i=0;i<this.graph.getOutputIndices().length;i++){let l=this.graph.getOutputIndices()[i],s=this._values[l];if(s===void 0)throw new Error(`required output [${l}] does not have value`);l===0?await s.getData():s.data,p.push(s)}return M$1.verbose("ExecPlan","disposing of inferenceHandler"),r.dispose(),p})}}}),B,xt$2,Le$2,Tl$1=x$1(()=>{ge$2(),B=ne(se$1()),Yt$2(),z$1(),xt$2=P$1.experimental.fbs,Le$2=class xg{constructor(t){if(this._attributes=new Map,t!=null){for(let r of t)r instanceof B.onnx.AttributeProto?this._attributes.set(r.name,[xg.getValue(r),xg.getType(r)]):r instanceof xt$2.Attribute&&this._attributes.set(r.name(),[xg.getValue(r),xg.getType(r)]);if(this._attributes.size<t.length)throw new Error("duplicated attribute names")}}set(t,r,o){this._attributes.set(t,[o,r])}delete(t){this._attributes.delete(t)}getFloat(t,r){return this.get(t,"float",r)}getInt(t,r){return this.get(t,"int",r)}getString(t,r){return this.get(t,"string",r)}getTensor(t,r){return this.get(t,"tensor",r)}getFloats(t,r){return this.get(t,"floats",r)}getInts(t,r){return this.get(t,"ints",r)}getStrings(t,r){return this.get(t,"strings",r)}getTensors(t,r){return this.get(t,"tensors",r)}get(t,r,o){let u=this._attributes.get(t);if(u===void 0){if(o!==void 0)return o;throw new Error(`required attribute not found: ${t}`)}if(u[1]!==r)throw new Error(`type mismatch: expected ${r} but got ${u[1]}`);return u[0]}static getType(t){let r=t instanceof B.onnx.AttributeProto?t.type:t.type();switch(r){case B.onnx.AttributeProto.AttributeType.FLOAT:return"float";case B.onnx.AttributeProto.AttributeType.INT:return"int";case B.onnx.AttributeProto.AttributeType.STRING:return"string";case B.onnx.AttributeProto.AttributeType.TENSOR:return"tensor";case B.onnx.AttributeProto.AttributeType.FLOATS:return"floats";case B.onnx.AttributeProto.AttributeType.INTS:return"ints";case B.onnx.AttributeProto.AttributeType.STRINGS:return"strings";case B.onnx.AttributeProto.AttributeType.TENSORS:return"tensors";default:throw new Error(`attribute type is not supported yet: ${B.onnx.AttributeProto.AttributeType[r]}`)}}static getValue(t){let r=t instanceof B.onnx.AttributeProto?t.type:t.type();if(r===B.onnx.AttributeProto.AttributeType.GRAPH||r===B.onnx.AttributeProto.AttributeType.GRAPHS)throw new Error("graph attribute is not supported yet");let o=this.getValueNoCheck(t);if(r===B.onnx.AttributeProto.AttributeType.INT&&ft$1.isLong(o))return ft$1.longToNumber(o);if(r===B.onnx.AttributeProto.AttributeType.INTS){let u=o,n=new Array(u.length);for(let a=0;a<u.length;a++){let d=u[a];n[a]=ft$1.longToNumber(d)}return n}if(r===B.onnx.AttributeProto.AttributeType.TENSOR)return t instanceof B.onnx.AttributeProto?Y$1.fromProto(o):Y$1.fromOrtTensor(o);if(r===B.onnx.AttributeProto.AttributeType.TENSORS){if(t instanceof B.onnx.AttributeProto)return o.map(u=>Y$1.fromProto(u));if(t instanceof xt$2.Attribute)return o.map(u=>Y$1.fromOrtTensor(u))}return r===B.onnx.AttributeProto.AttributeType.STRING&&t instanceof B.onnx.AttributeProto?Ie$2(o):r===B.onnx.AttributeProto.AttributeType.STRINGS&&t instanceof B.onnx.AttributeProto?o.map(Ie$2):o}static getValueNoCheck(t){return t instanceof B.onnx.AttributeProto?this.getValueNoCheckFromOnnxFormat(t):this.getValueNoCheckFromOrtFormat(t)}static getValueNoCheckFromOnnxFormat(t){switch(t.type){case B.onnx.AttributeProto.AttributeType.FLOAT:return t.f;case B.onnx.AttributeProto.AttributeType.INT:return t.i;case B.onnx.AttributeProto.AttributeType.STRING:return t.s;case B.onnx.AttributeProto.AttributeType.TENSOR:return t.t;case B.onnx.AttributeProto.AttributeType.GRAPH:return t.g;case B.onnx.AttributeProto.AttributeType.FLOATS:return t.floats;case B.onnx.AttributeProto.AttributeType.INTS:return t.ints;case B.onnx.AttributeProto.AttributeType.STRINGS:return t.strings;case B.onnx.AttributeProto.AttributeType.TENSORS:return t.tensors;case B.onnx.AttributeProto.AttributeType.GRAPHS:return t.graphs;default:throw new Error(`unsupported attribute type: ${B.onnx.AttributeProto.AttributeType[t.type]}`)}}static getValueNoCheckFromOrtFormat(t){switch(t.type()){case xt$2.AttributeType.FLOAT:return t.f();case xt$2.AttributeType.INT:return t.i();case xt$2.AttributeType.STRING:return t.s();case xt$2.AttributeType.TENSOR:return t.t();case xt$2.AttributeType.GRAPH:return t.g();case xt$2.AttributeType.FLOATS:return t.floatsArray();case xt$2.AttributeType.INTS:{let r=[];for(let o=0;o<t.intsLength();o++)r.push(t.ints(o));return r}case xt$2.AttributeType.STRINGS:{let r=[];for(let o=0;o<t.stringsLength();o++)r.push(t.strings(o));return r}case xt$2.AttributeType.TENSORS:{let r=[];for(let o=0;o<t.tensorsLength();o++)r.push(t.tensors(o));return r}default:throw new Error(`unsupported attribute type: ${xt$2.AttributeType[t.type()]}`)}}}}),zn,Pr$2,Mn,Lt$2,Er$1,Vn$1,vl$1=x$1(()=>{Tl$1(),ge$2(),zn=ne(se$1()),Yt$2(),z$1(),Pr$2=P$1.experimental.fbs,Mn={from:(e,t)=>new Vn$1(e,t)},Lt$2=class{constructor(e){this._from=void 0,this._to=[],this.tensor=void 0,this.type=void 0,e&&(this.type=rt$2.tensorValueTypeFromProto(e.type.tensorType))}get from(){return this._from}get to(){return this._to}},Er$1=class{constructor(e,t){e instanceof zn.onnx.NodeProto?(this.name=e.name,this.opType=e.opType,this.attributes=new Le$2(e.attribute)):e instanceof Pr$2.Node&&(this.name=t??e.name(),this.opType=e.opType(),this.attributes=new Le$2(rt$2.tensorAttributesFromORTFormat(e))),this.inputs=[],this.outputs=[],this.executeNode=!0}},Vn$1=class{constructor(e,t){if(!e)throw new TypeError("graph is empty");this.buildGraph(e),this.transformGraph(t),this.checkIsAcyclic()}getInputIndices(){return this._allInputIndices}getInputNames(){return this._allInputNames}getOutputIndices(){return this._allOutputIndices}getOutputNames(){return this._allOutputNames}getValues(){return this._allData}getNodes(){return this._nodes}buildGraph(e){if(e instanceof zn.onnx.GraphProto)this.buildGraphFromOnnxFormat(e);else if(e instanceof Pr$2.Graph)this.buildGraphFromOrtFormat(e);else throw new TypeError("Graph type is not supported.")}buildGraphFromOnnxFormat(e){let t=new Map;this._allData=[],this._allInputIndices=[],this._allInputNames=[],this._allOutputIndices=[],this._allOutputNames=[],this._nodes=[];let r=new Map;if(!e.input)throw new Error("missing information in graph: input");let o=[];for(let u of e.input){if(t.has(u.name))throw new Error(`duplicated input name: ${u.name}`);let n=this._allData.push(new Lt$2(u))-1;t.set(u.name,n),o.push(u.name)}if(!e.initializer)throw new Error("missing information in graph: initializer");for(let u of e.initializer){let n=t.get(u.name);if(n===void 0){let a=new Lt$2;a.type={shape:{dims:rt$2.tensorDimsFromProto(u.dims)},tensorType:rt$2.tensorDataTypeFromProto(u.dataType)},n=this._allData.push(a)-1,t.set(u.name,n)}this._allData[n]._from=-1,this._allData[n].tensor=Y$1.fromProto(u)}for(let u=0;u<this._allData.length;u++)this._allData[u].tensor||(this._allInputIndices.push(u),this._allInputNames.push(o[u]));if(!e.output)throw new Error("missing information in graph: output");for(let u of e.output){if(t.has(u.name))throw new Error(`duplicated output name: ${u.name}`);let n=this._allData.push(new Lt$2(u))-1;t.set(u.name,n),this._allOutputIndices.push(n),this._allOutputNames.push(u.name)}if(!e.node)throw new Error("missing information in graph: node");for(let u of e.node){if(!u.name)for(let a=0;;a++){let d=`unnamed_${u.opType}_${a}`;if(!r.has(d)){u.name=d;break}}if(r.has(u.name))throw new Error(`duplicated node name: ${u.name}`);let n=this._nodes.push(new Er$1(u))-1;r.set(u.name,n)}for(let u=0;u<this._nodes.length;u++){let n=this._nodes[u],a=e.node[u];if(!a.output)throw new Error(`missing output for node: ${a.name}`);for(let d of a.output){let p=t.get(d);if(typeof p>"u"&&(p=this._allData.push(new Lt$2)-1,t.set(d,p)),n.outputs.push(p),this._allData[p]._from!==void 0)throw new Error(`multiple nodes output to one data value: ${p}`);if(this._allData[p]._from=u,a.opType==="Constant"){if(!a.attribute||a.attribute.length!==1||!a.attribute[0].t)throw new Error("missing attributes or missing tensor value in attributes for this Constant operator");if(!a.output||a.output.length!==1)throw new Error("missing output or incorrect number of outputs for this Constant operator");n.outputs.pop(),n.executeNode=!1,this._allData[p]._from=-1,this._allData[p].tensor=Y$1.fromProto(a.attribute[0].t)}}}for(let u=0;u<this._nodes.length;u++){let n=this._nodes[u],a=e.node[u];if(!a.input)throw new Error(`missing input for node: ${a.name}`);for(let d of a.input){let p=t.get(d);if(typeof p>"u"){if(d===""&&(a.input.length===3||a.input.length===4)&&a.opType==="Resize")continue;throw new Error(`unrecognized input '${d}' for node: ${a.name}`)}n.inputs.push(p),this._allData[p]._to.push(u)}}return!0}buildGraphFromOrtFormat(e){let t=new Map;this._allData=[],this._allInputIndices=[],this._allInputNames=[],this._allOutputIndices=[],this._allOutputNames=[],this._nodes=[];let r=new Map,o=[];for(let u=0;u<e.inputsLength();u++){let n=e.inputs(u);if(t.has(n))throw new Error(`duplicated input name: ${n}`);for(let a=0;a<e.nodeArgsLength();a++)if(e.nodeArgs(a)?.name()===n){let d=new Lt$2;if(e.nodeArgs(a)?.type()?.valueType()!==Pr$2.TypeInfoValue.tensor_type)throw new Error("Unexpected value type for the nodeArg.");let p=e.nodeArgs(a).type().value(new Pr$2.TensorTypeAndShape),i=rt$2.tensorDataTypeFromProto(p.elemType()),l=p.shape(),s=[];for(let h=0;h<l.dimLength();h++)s.push(ft$1.longToNumber(l.dim(h).value().dimValue()));d.type={shape:{dims:s},tensorType:i};let c=this._allData.push(d)-1;t.set(n,c),o.push(n)}}for(let u=0;u<e.initializersLength();u++){let n=e.initializers(u),a=t.get(n.name());if(a===void 0){let d=new Lt$2,p=rt$2.tensorDimsFromORTFormat(n),i=rt$2.tensorDataTypeFromProto(n.dataType());d.type={shape:{dims:p},tensorType:i},a=this._allData.push(d)-1,t.set(n.name(),a)}this._allData[a]._from=-1,this._allData[a].tensor=Y$1.fromOrtTensor(n)}for(let u=0;u<this._allData.length;u++)this._allData[u].tensor||(this._allInputIndices.push(u),this._allInputNames.push(o[u]));for(let u=0;u<e.outputsLength();u++){let n=e.outputs(u);if(t.has(n))throw new Error(`duplicated output name: ${n}`);let a=this._allData.push(new Lt$2)-1;t.set(n,a),this._allOutputIndices.push(a),this._allOutputNames.push(n)}if(!e.nodes)throw new Error("missing information in graph: node");for(let u=0;u<e.nodesLength();u++){let n=e.nodes(u),a=n.name();if(!a)for(let p=0;a=`unnamed_${n.opType()}_${p}`,!!r.has(a);p++);if(r.has(a))throw new Error(`duplicated node name: ${a}`);let d=this._nodes.push(new Er$1(n,a))-1;r.set(a,d)}for(let u=0;u<this._nodes.length;u++){let n=this._nodes[u],a=e.nodes(u);if(a==null)throw new Error(`No node exists at index ${u}`);if(a?.outputsLength()===0)throw new Error(`missing output for node: ${a.name}`);for(let d=0;d<a?.outputsLength();d++){let p=a?.outputs(d),i=t.get(p);if(typeof i>"u"&&(i=this._allData.push(new Lt$2)-1,t.set(p,i)),n.outputs.push(i),this._allData[i]._from!==void 0)throw new Error(`multiple nodes output to one data value: ${i}`);if(this._allData[i]._from=u,a.opType()==="Constant"){if(a.attributesLength()!==1||!a.attributes(0).t())throw new Error("missing attributes or missing tensor value in attributes for this Constant operator");if(a.outputsLength()!==1)throw new Error("missing output or incorrect number of outputs for this Constant operator");n.outputs.pop(),n.executeNode=!1,this._allData[i]._from=-1,this._allData[i].tensor=Y$1.fromOrtTensor(a.attributes(0).t())}}}for(let u=0;u<this._nodes.length;u++){let n=this._nodes[u],a=e.nodes(u);if(a.inputsLength()===0)throw new Error(`missing input for node: ${a.name}`);for(let d=0;d<a.inputsLength();d++){let p=a.inputs(d),i=t.get(p);if(typeof i>"u")throw new Error(`unrecognized input '${p}' for node: ${a.name()}`);n.inputs.push(i),this._allData[i]._to.push(u)}}}checkIsAcyclic(){let e=new Set;this._allInputIndices.forEach(o=>{this._allData[o]._to.forEach(u=>{e.add(u)})});let t=Array.from(e),r=new Array(this._nodes.length).fill("white");for(;t.length>0;){let o=t.pop();r[o]==="gray"?r[o]="black":(t.push(o),r[o]="gray",this._nodes[o].outputs.forEach(u=>{let n=this._allData[u];if(typeof n.tensor<"u")throw new Error("node outputs should not be initialized");if(n._from!==o)throw new Error("from property of the Value object doesn't match index of Node being processed");n._to.forEach(a=>{if(r[a]==="gray")throw new Error("model graph is cyclic");r[a]==="white"&&t.push(a)})}))}}transformGraph(e){this.removeAllIdentityNodes(),this.removeAllDropoutNodes(),this.fuseConvActivationNodes(),e&&e.transformGraph(this),this.finalizeGraph()}finalizeGraph(){let e=0,t=new Array(this._nodes.length,0),r=0;for(let o=0;o<this._nodes.length;o++)t[o]=r,this._nodes[o].executeNode?(r!==o&&(this._nodes[r]=this._nodes[o]),r++):this._nodes[o].outputs.forEach(u=>{this._allData[u]._from=-2});this._nodes.splice(r,this._nodes.length-r);for(let o=0;o<this._allData.length;o++){let u=this._allData[o];u._from!==void 0&&u._from!==-1&&u._from!==-2&&(u._from=t[u._from]);for(let n=0;n<u._to.length;n++)if(u._to[n]>=0)u._to[n]=t[u._to[n]];else throw new Error("Trying to update a removed node")}e=0;for(let o=0;o<this._allData.length;o++){if(this._allData[o].from===-2&&this._allOutputIndices.indexOf(o+e)===-1){e++,this._allData.splice(o,1),o--;continue}if(e>0){let u=-1;this._allData[o].from!==void 0&&this._allData[o].from!==-1?(u=this._nodes[this._allData[o].from].outputs.indexOf(o+e),u!==-1&&(this._nodes[this._allData[o].from].outputs[u]=o)):(u=this._allInputIndices.indexOf(o+e),u!==-1&&(this._allInputIndices[u]=o)),this._allData[o].to.forEach(n=>{u=this._nodes[n].inputs.indexOf(o+e),u!==-1&&(this._nodes[n].inputs[u]=o)}),this._allData[o].to.length===0&&(u=this._allOutputIndices.indexOf(o+e),u!==-1&&(this._allOutputIndices[u]=o))}}}deleteNode(e){let t=this._nodes[e];if(t.outputs.length>1){for(let a=1;a<t.outputs.length;a++)if(this._allData[t.outputs[a]].to.length>0)throw new Error("Node deletion with more than one output connected to other nodes is not supported. ")}t.executeNode=!1;let r=t.inputs[0],o=t.outputs[0],u=this._allData[o].to;for(let a=0;a<t.inputs.length;a++){let d=this._allData[t.inputs[a]].to.indexOf(e);if(d===-1)throw new Error("The Value object doesn't have the current Node in it's 'to' property ");this._allData[t.inputs[a]].to.splice(d,1)}this._allData[o]._to=[];let n=this._allOutputIndices.indexOf(o);if(n!==-1&&(this._allOutputIndices[n]=r),u&&u.length>0)for(let a of u){let d=this._nodes[a].inputs.indexOf(o);if(d===-1)throw new Error("The Node object doesn't have the output Value in it's 'inputs' property ");this._nodes[a].inputs[d]=r,this._allData[r].to.push(a)}}removeAllDropoutNodes(){let e=0;for(let t of this._nodes){if(t.opType==="Dropout"){if(t.inputs.length!==1)throw new Error("Dropout nodes should only contain one input. ");if(t.outputs.length!==1&&t.outputs.length!==2)throw new Error("Dropout nodes should contain either 1 or 2 output(s)");if(t.outputs.length===2&&this._allData[t.outputs[1]]._to.length!==0)throw new Error("Dropout nodes's second output should not be referenced by other nodes");this.deleteNode(e)}e++}}removeAllIdentityNodes(){let e=0;for(let t of this._nodes)t.opType==="Identity"&&this.deleteNode(e),e++}isActivation(e){switch(e.opType){case"Relu":case"Sigmoid":case"Clip":return!0;default:return!1}}fuseConvActivationNodes(){for(let e of this._nodes)if(e.opType==="Conv"){let t=this._allData[e.outputs[0]]._to;if(t.length===1&&this.isActivation(this._nodes[t[0]])){let r=this._nodes[t[0]];if(r.opType==="Clip")if(r.inputs.length===1)try{e.attributes.set("activation_params","floats",[r.attributes.getFloat("min"),r.attributes.getFloat("max")])}catch{e.attributes.set("activation_params","floats",[Jt$2,Zt$2])}else if(r.inputs.length>=3&&this._allData[r.inputs[1]].tensor!==void 0&&this._allData[r.inputs[2]].tensor!==void 0)e.attributes.set("activation_params","floats",[this._allData[r.inputs[1]].tensor.floatData[0],this._allData[r.inputs[2]].tensor.floatData[0]]);else continue;e.attributes.set("activation","string",r.opType),this.deleteNode(t[0])}}}}}),wl$1,sd$1,Dr$2,Il$1=x$1(()=>{Je$1(),vl$1(),ge$2(),wl$1=ne(se$1()),z$1(),sd$1=P$1.experimental.fbs,Dr$2=class{constructor(){}load(e,t,r){let o;if(!r)try{this.loadFromOnnxFormat(e,t);return}catch(u){if(r!==void 0)throw u;o=u}try{this.loadFromOrtFormat(e,t)}catch(u){throw r!==void 0?u:new Error(`Failed to load model as ONNX format: ${o}
as ORT format: ${u}`)}}loadFromOnnxFormat(e,t){let r=wl$1.onnx.ModelProto.decode(e);if(ft$1.longToNumber(r.irVersion)<3)throw new Error("only support ONNX model with IR_VERSION>=3");this._opsets=r.opsetImport.map(o=>({domain:o.domain,version:ft$1.longToNumber(o.version)})),this._graph=Mn.from(r.graph,t)}loadFromOrtFormat(e,t){let r=new m.ByteBuffer(e),o=sd$1.InferenceSession.getRootAsInferenceSession(r).model();if(ft$1.longToNumber(o.irVersion())<3)throw new Error("only support ONNX model with IR_VERSION>=3");this._opsets=[];for(let u=0;u<o.opsetImportLength();u++){let n=o.opsetImport(u);this._opsets.push({domain:n?.domain(),version:ft$1.longToNumber(n.version())})}this._graph=Mn.from(o.graph(),t)}get graph(){return this._graph}get opsets(){return this._opsets}}}),Lr$2,_l$1=x$1(()=>{gl$1(),xl$1(),pt$1(),Il$1(),Lr$2=class{constructor(e={}){this._initialized=!1,this.backendHint=e.backendHint,this.profiler=Ke$2.create(e.profiler),this.context={profiler:this.profiler,graphInputTypes:[],graphInputDims:[]}}get inputNames(){return this._model.graph.getInputNames()}get outputNames(){return this._model.graph.getOutputNames()}startProfiling(){this.profiler.start()}endProfiling(){this.profiler.stop()}async loadModel(e,t,r){await this.profiler.event("session","Session.loadModel",async()=>{let o=await Gn$1(this.backendHint);if(this.sessionHandler=o.createSessionHandler(this.context),this._model=new Dr$2,typeof e=="string"){let u=e.endsWith(".ort");{let n=await(await fetch(e)).arrayBuffer();this.initialize(new Uint8Array(n),u)}}else if(ArrayBuffer.isView(e))this.initialize(e);else{let u=new Uint8Array(e,t||0,r||e.byteLength);this.initialize(u)}})}initialize(e,t){if(this._initialized)throw new Error("already initialized");this.profiler.event("session","Session.initialize",()=>{let r=this.sessionHandler.transformGraph?this.sessionHandler:void 0;this._model.load(e,r,t),this.sessionHandler.onGraphInitialized&&this.sessionHandler.onGraphInitialized(this._model.graph),this.initializeOps(this._model.graph),this._executionPlan=new Or$2(this._model.graph,this._ops,this.profiler)}),this._initialized=!0}async run(e){if(!this._initialized)throw new Error("session not initialized yet");return this.profiler.event("session","Session.run",async()=>{let t=this.normalizeAndValidateInputs(e),r=await this._executionPlan.execute(this.sessionHandler,t);return this.createOutput(r)})}normalizeAndValidateInputs(e){let t=this._model.graph.getInputNames();if(Array.isArray(e)){if(e.length!==t.length)throw new Error(`incorrect input array length: expected ${t.length} but got ${e.length}`)}else{if(e.size!==t.length)throw new Error(`incorrect input map size: expected ${t.length} but got ${e.size}`);let r=new Array(e.size),o=0;for(let u=0;u<t.length;++u){let n=e.get(t[u]);if(!n)throw new Error(`missing input tensor for: '${name}'`);r[o++]=n}e=r}if(!this.context.graphInputTypes||this.context.graphInputTypes.length===0||!this.context.graphInputDims||this.context.graphInputDims.length===0){let r=this._model.graph.getInputIndices(),o=this._model.graph.getValues(),u=new Array(r.length);for(let n=0;n<r.length;++n){let a=o[r[n]];u[n]=a.type.shape.dims,this.context.graphInputTypes.push(a.type.tensorType),this.context.graphInputDims.push(e[n].dims)}this.validateInputTensorDims(u,e,!0)}else this.validateInputTensorDims(this.context.graphInputDims,e,!1);return this.validateInputTensorTypes(this.context.graphInputTypes,e),e}validateInputTensorTypes(e,t){for(let r=0;r<t.length;r++){let o=e[r],u=t[r].type;if(o!==u)throw new Error(`input tensor[${r}] check failed: expected type '${o}' but got ${u}`)}}validateInputTensorDims(e,t,r){for(let o=0;o<t.length;o++){let u=e[o],n=t[o].dims;if(!this.compareTensorDims(u,n,r))throw new Error(`input tensor[${o}] check failed: expected shape '[${u.join(",")}]' but got [${n.join(",")}]`)}}compareTensorDims(e,t,r){if(e.length!==t.length)return!1;for(let o=0;o<e.length;++o)if(e[o]!==t[o]&&(!r||e[o]!==0))return!1;return!0}createOutput(e){let t=this._model.graph.getOutputNames();if(e.length!==t.length)throw new Error("expected number of outputs do not match number of generated outputs");let r=new Map;for(let o=0;o<t.length;++o)r.set(t[o],e[o]);return r}initializeOps(e){let t=e.getNodes();this._ops=new Array(t.length);for(let r=0;r<t.length;r++)this._ops[r]=this.sessionHandler.resolve(t[r],this._model.opsets,e)}}}),$r$2,Sl$1=x$1(()=>{Ft$2(),Yt$2(),$r$2=class{constructor(e){this.session=e,this.inputNames=this.session.inputNames,this.outputNames=this.session.outputNames}async dispose(){}async run(e,t,r){let o=new Map;for(let a in e)if(Object.hasOwnProperty.call(e,a)){let d=e[a];o.set(a,new Y$1(d.dims,d.type,void 0,void 0,d.data))}let u=await this.session.run(o),n={};return u.forEach((a,d)=>{n[d]=new ot$1(a.type,a.data,a.dims)}),n}startProfiling(){this.session.startProfiling()}endProfiling(){this.session.endProfiling()}}}),Al$1={};Wn$1(Al$1,{onnxjsBackend:()=>ud$1});var Un$1,ud$1,Ol$1=x$1(()=>{_l$1(),Sl$1(),Un$1=class{async init(){}async createInferenceSessionHandler(e,t){let r=new Lr$2(t);return typeof e=="string"?await r.loadModel(e):await r.loadModel(e),new $r$2(r)}},ud$1=new Un$1});Ft$2();Ft$2();Ft$2();var Io$1="1.20.1",Mv=Cr$2;{let e=(Ol$1(),kl$1(Al$1)).onnxjsBackend;Fe$2("webgl",e,-10)}Object.defineProperty(j$1.versions,"web",{value:Io$1,enumerable:!0});/*! Bundled license information:

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
*/var ortWebgl=Object.freeze({__proto__:null,get InferenceSession(){return Fl$1},get TRACE(){return po$1},get TRACE_FUNC_BEGIN(){return Ve$2},get TRACE_FUNC_END(){return ze$1},get Tensor(){return ot$1},get TrainingSession(){return Cl$1},default:Mv,get env(){return j$1},get registerBackend(){return Fe$2}});/*!
 * ONNX Runtime Web v1.20.1
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Ge$1=Object.defineProperty,Sr$1=Object.getOwnPropertyDescriptor,Ar$1=Object.getOwnPropertyNames,Or$1=Object.prototype.hasOwnProperty,He$1=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),w=(e,t)=>()=>(e&&(t=e(e=0)),t),je=(e,t)=>{for(var r in t)Ge$1(e,r,{get:t[r],enumerable:!0})},vr$1=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let u of Ar$1(t))!Or$1.call(e,u)&&u!==r&&Ge$1(e,u,{get:()=>t[u],enumerable:!(o=Sr$1(t,u))||o.enumerable});return e},ut=e=>vr$1(Ge$1({},"__esModule",{value:!0}),e),be,z,oe,xr$1,ge$1,Ee$1=w(()=>{be=new Map,z=[],oe=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let o=be.get(e);if(o===void 0)be.set(e,{backend:t,priority:r});else{if(o.priority>r)return;if(o.priority===r&&o.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let u=z.indexOf(e);u!==-1&&z.splice(u,1);for(let n=0;n<z.length;n++)if(be.get(z[n]).priority<=r){z.splice(n,0,e);return}z.push(e)}return}throw new TypeError("not a valid backend")},xr$1=async e=>{let t=be.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(o){return r||(t.error=`${o}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},ge$1=async e=>{let t=e.executionProviders||[],r=t.map(p=>typeof p=="string"?p:p.name),o=r.length===0?z:r,u,n=[],a=new Set;for(let p of o){let i=await xr$1(p);typeof i=="string"?n.push({name:p,err:i}):(u||(u=i),u===i&&a.add(p))}if(!u)throw new Error(`no available backend found. ERR: ${n.map(p=>`[${p.name}] ${p.err}`).join(", ")}`);for(let{name:p,err:i}of n)r.includes(p)&&console.warn(`removing requested execution provider "${p}" from session options because it is not available: ${i}`);let d=t.filter(p=>a.has(typeof p=="string"?p:p.name));return[u,new Proxy(e,{get:(p,i)=>i==="executionProviders"?d:Reflect.get(p,i)})]}}),ft=w(()=>{Ee$1()}),ct$1,lt$1=w(()=>{ct$1="1.20.1"}),dt,U,Ve$1=w(()=>{lt$1(),dt="warning",U={wasm:{},webgl:{},webgpu:{},versions:{common:ct$1},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);dt=e}},get logLevel(){return dt}},Object.defineProperty(U,"logLevel",{enumerable:!0})}),T,pt=w(()=>{Ve$1(),T=U}),mt,ht,yt$1=w(()=>{mt=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let o=r.getContext("2d");if(o!=null){let u,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(u=e.dims[2],n=e.dims[3]):(u=e.dims[3],n=e.dims[2]);let a=t?.format!==void 0?t.format:"RGB",d=t?.norm,p,i;d===void 0||d.mean===void 0?p=[255,255,255,255]:typeof d.mean=="number"?p=[d.mean,d.mean,d.mean,d.mean]:(p=[d.mean[0],d.mean[1],d.mean[2],0],d.mean[3]!==void 0&&(p[3]=d.mean[3])),d===void 0||d.bias===void 0?i=[0,0,0,0]:typeof d.bias=="number"?i=[d.bias,d.bias,d.bias,d.bias]:(i=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(i[3]=d.bias[3]));let l=n*u,s=0,c=l,h=l*2,g=-1;a==="RGBA"?(s=0,c=l,h=l*2,g=l*3):a==="RGB"?(s=0,c=l,h=l*2):a==="RBG"&&(s=0,h=l,c=l*2);for(let y=0;y<n;y++)for(let C=0;C<u;C++){let W=(e.data[s++]-i[0])*p[0],A=(e.data[c++]-i[1])*p[1],X=(e.data[h++]-i[2])*p[2],ni=g===-1?255:(e.data[g++]-i[3])*p[3];o.fillStyle="rgba("+W+","+A+","+X+","+ni+")",o.fillRect(C,y,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},ht=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),o;if(r!=null){let u,n,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(u=e.dims[2],n=e.dims[1],a=e.dims[3]):(u=e.dims[3],n=e.dims[2],a=e.dims[1]);let d=t!==void 0&&t.format!==void 0?t.format:"RGB",p=t?.norm,i,l;p===void 0||p.mean===void 0?i=[255,255,255,255]:typeof p.mean=="number"?i=[p.mean,p.mean,p.mean,p.mean]:(i=[p.mean[0],p.mean[1],p.mean[2],255],p.mean[3]!==void 0&&(i[3]=p.mean[3])),p===void 0||p.bias===void 0?l=[0,0,0,0]:typeof p.bias=="number"?l=[p.bias,p.bias,p.bias,p.bias]:(l=[p.bias[0],p.bias[1],p.bias[2],0],p.bias[3]!==void 0&&(l[3]=p.bias[3]));let s=n*u;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let c=4,h=0,g=1,y=2,C=3,W=0,A=s,X=s*2,ni=-1;d==="RGBA"?(W=0,A=s,X=s*2,ni=s*3):d==="RGB"?(W=0,A=s,X=s*2):d==="RBG"&&(W=0,X=s,A=s*2),o=r.createImageData(u,n);for(let ii=0;ii<n*u;h+=c,g+=c,y+=c,C+=c,ii++)o.data[h]=(e.data[W++]-l[0])*i[0],o.data[g]=(e.data[A++]-l[1])*i[1],o.data[y]=(e.data[X++]-l[2])*i[2],o.data[C]=ni===-1?255:(e.data[ni++]-l[3])*i[3]}else throw new Error("Can not access image data");return o}}),Ye$1,wt,bt,gt$1,Et$1,Tt$1,St$1=w(()=>{Te$1(),Ye$1=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:o}=t,u=t.norm??{mean:255,bias:0},n,a;typeof u.mean=="number"?n=[u.mean,u.mean,u.mean,u.mean]:n=[u.mean[0],u.mean[1],u.mean[2],u.mean[3]??255],typeof u.bias=="number"?a=[u.bias,u.bias,u.bias,u.bias]:a=[u.bias[0],u.bias[1],u.bias[2],u.bias[3]??0];let d=t.format!==void 0?t.format:"RGBA",p=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",i=r*o,l=p==="RGBA"?new Float32Array(i*4):new Float32Array(i*3),s=4,c=0,h=1,g=2,y=3,C=0,W=i,A=i*2,X=-1;d==="RGB"&&(s=3,c=0,h=1,g=2,y=-1),p==="RGBA"?X=i*3:p==="RBG"?(C=0,A=i,W=i*2):p==="BGR"&&(A=0,W=i,C=i*2);for(let ni=0;ni<i;ni++,c+=s,g+=s,h+=s,y+=s)l[C++]=(e[c]+a[0])/n[0],l[W++]=(e[h]+a[1])/n[1],l[A++]=(e[g]+a[2])/n[2],X!==-1&&y!==-1&&(l[X++]=(e[y]+a[3])/n[3]);return p==="RGBA"?new P("float32",l,[1,4,r,o]):new P("float32",l,[1,3,r,o])},wt=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,o=typeof ImageData<"u"&&e instanceof ImageData,u=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",a,d=t??{},p=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},i=l=>typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||l instanceof OffscreenCanvas?l.getContext("2d"):null;if(r){let l=p();l.width=e.width,l.height=e.height;let s=i(l);if(s!=null){let c=e.height,h=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(c=t.resizedHeight,h=t.resizedWidth),t!==void 0){if(d=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");d.tensorFormat="RGBA",d.height=c,d.width=h}else d.tensorFormat="RGBA",d.height=c,d.width=h;s.drawImage(e,0,0),a=s.getImageData(0,0,h,c).data}else throw new Error("Can not access image data")}else if(o){let l,s;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(l=t.resizedHeight,s=t.resizedWidth):(l=e.height,s=e.width),t!==void 0&&(d=t),d.format="RGBA",d.height=l,d.width=s,t!==void 0){let c=p();c.width=s,c.height=l;let h=i(c);if(h!=null)h.putImageData(e,0,0),a=h.getImageData(0,0,s,l).data;else throw new Error("Can not access image data")}else a=e.data}else if(u){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let l=p();l.width=e.width,l.height=e.height;let s=i(l);if(s!=null){let c=e.height,h=e.width;return s.drawImage(e,0,0,h,c),a=s.getImageData(0,0,h,c).data,d.height=c,d.width=h,Ye$1(a,d)}else throw new Error("Can not access image data")}else{if(n)return new Promise((l,s)=>{let c=p(),h=i(c);if(!e||!h)return s();let g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{c.width=g.width,c.height=g.height,h.drawImage(g,0,0,c.width,c.height);let y=h.getImageData(0,0,c.width,c.height);d.height=c.height,d.width=c.width,l(Ye$1(y.data,d))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return Ye$1(a,d);throw new Error("Input data provided is not supported - aborted tensor creation")},bt=(e,t)=>{let{width:r,height:o,download:u,dispose:n}=t,a=[1,o,r,4];return new P({location:"texture",type:"float32",texture:e,dims:a,download:u,dispose:n})},gt$1=(e,t)=>{let{dataType:r,dims:o,download:u,dispose:n}=t;return new P({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:o,download:u,dispose:n})},Et$1=(e,t)=>{let{dataType:r,dims:o,download:u,dispose:n}=t;return new P({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:o,download:u,dispose:n})},Tt$1=(e,t,r)=>new P({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),G,se,At$1,Ot,vt=w(()=>{G=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),se=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),At$1=!1,Ot=()=>{if(!At$1){At$1=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=typeof Float16Array<"u"&&Float16Array.from;e&&(G.set("int64",BigInt64Array),se.set(BigInt64Array,"int64")),t&&(G.set("uint64",BigUint64Array),se.set(BigUint64Array,"uint64")),r?(G.set("float16",Float16Array),se.set(Float16Array,"float16")):G.set("float16",Uint16Array)}}}),xt$1,Pt$1,It$1=w(()=>{Te$1(),xt$1=e=>{let t=1;for(let r=0;r<e.length;r++){let o=e[r];if(typeof o!="number"||!Number.isSafeInteger(o))throw new TypeError(`dims[${r}] must be an integer, got: ${o}`);if(o<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${o}`);t*=o}return t},Pt$1=(e,t)=>{switch(e.location){case"cpu":return new P(e.type,e.data,t);case"cpu-pinned":return new P({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new P({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new P({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new P({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),P,Te$1=w(()=>{yt$1(),St$1(),vt(),It$1(),P=class{constructor(e,t,r){Ot();let o,u;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,o=e.type,u=e.dims,e.location){case"cpu-pinned":{let a=G.get(o);if(!a)throw new TypeError(`unsupported type "${o}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(o!=="float32")throw new TypeError(`unsupported type "${o}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint8"&&o!=="bool"&&o!=="uint4"&&o!=="int4")throw new TypeError(`unsupported type "${o}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint64"&&o!=="int8"&&o!=="uint8"&&o!=="bool")throw new TypeError(`unsupported type "${o}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,d;if(typeof e=="string")if(o=e,d=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let p=G.get(e);if(p===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&p===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${p.name} as data.`);e==="uint64"||e==="int64"?a=p.from(t,BigInt):a=p.from(t)}else if(t instanceof p)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${o} tensor's data must be type of ${p}`)}else if(d=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let p=typeof e[0];if(p==="string")o="string",a=e;else if(p==="boolean")o="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${p}.`)}else if(e instanceof Uint8ClampedArray)o="uint8",a=Uint8Array.from(e);else{let p=se.get(e.constructor);if(p===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);o=p,a=e}if(d===void 0)d=[a.length];else if(!Array.isArray(d))throw new TypeError("A tensor's dims must be a number array");u=d,this.cpuData=a,this.dataLocation="cpu"}let n=xt$1(u);if(this.cpuData&&n!==this.cpuData.length&&!((o==="uint4"||o==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=o,this.dims=u,this.size=n}static async fromImage(e,t){return wt(e,t)}static fromTexture(e,t){return bt(e,t)}static fromGpuBuffer(e,t){return gt$1(e,t)}static fromMLTensor(e,t){return Et$1(e,t)}static fromPinnedBuffer(e,t,r){return Tt$1(e,t,r)}toDataURL(e){return mt(this,e)}toImageData(e){return ht(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Pt$1(this,e)}}}),I,Se=w(()=>{Te$1(),I=P}),Lt$1,Bt,H,j,qe=w(()=>{Ve$1(),Lt$1=(e,t)=>{(typeof U.trace>"u"?!U.wasm.trace:!U.trace)||console.timeStamp(`${e}::ORT::${t}`)},Bt=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],o=!1;for(let u=0;u<r.length;u++){if(o&&!r[u].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[u].trim().split(" ")[1]}`;t&&(n+=`::${t}`),Lt$1("CPU",n);return}r[u].includes("TRACE_FUNC")&&(o=!0)}},H=e=>{(typeof U.trace>"u"?!U.wasm.trace:!U.trace)||Bt("BEGIN",e)},j=e=>{(typeof U.trace>"u"?!U.wasm.trace:!U.trace)||Bt("END",e)}}),Ae,Ct$1=w(()=>{Ee$1(),Se(),qe(),Ae=class P1{constructor(t){this.handler=t}async run(t,r,o){H();let u={},n={};if(typeof t!="object"||t===null||t instanceof I||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof I)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let i of r){if(typeof i!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(i)===-1)throw new RangeError(`'fetches' contains invalid output name: ${i}.`);u[i]=null}if(typeof o=="object"&&o!==null)n=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else{let i=!1,l=Object.getOwnPropertyNames(r);for(let s of this.outputNames)if(l.indexOf(s)!==-1){let c=r[s];(c===null||c instanceof I)&&(i=!0,a=!1,u[s]=c)}if(i){if(typeof o=="object"&&o!==null)n=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let i of this.inputNames)if(typeof t[i]>"u")throw new Error(`input '${i}' is missing in 'feeds'.`);if(a)for(let i of this.outputNames)u[i]=null;let d=await this.handler.run(t,u,n),p={};for(let i in d)if(Object.hasOwnProperty.call(d,i)){let l=d[i];l instanceof I?p[i]=l:p[i]=new I(l.type,l.data,l.dims)}return j(),p}async release(){return this.handler.dispose()}static async create(t,r,o,u){H();let n,a={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let l=t,s=0,c=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(s=r,!Number.isSafeInteger(s))throw new RangeError("'byteOffset' must be an integer.");if(s<0||s>=l.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${l.byteLength}).`);if(c=t.byteLength-s,typeof o=="number"){if(c=o,!Number.isSafeInteger(c))throw new RangeError("'byteLength' must be an integer.");if(c<=0||s+c>l.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${l.byteLength-s}].`);if(typeof u=="object"&&u!==null)a=u;else if(typeof u<"u")throw new TypeError("'options' must be an object.")}else if(typeof o<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(l,s,c)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[d,p]=await ge$1(a),i=await d.createInferenceSessionHandler(n,p);return j(),new P1(i)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),Pr$1,Mt=w(()=>{Ct$1(),Pr$1=Ae}),Ut$1=w(()=>{}),Dt=w(()=>{}),Rt=w(()=>{}),_t=w(()=>{}),Ir$1,Oe$1,kt$1=w(()=>{Ee$1(),Se(),Ir$1="Training backend could not be resolved. Make sure you're using the correct configuration & WebAssembly files.",Oe$1=class C1{constructor(t,r,o){this.handler=t,this.hasOptimizerModel=r,this.hasEvalModel=o}get trainingInputNames(){return this.handler.inputNames}get trainingOutputNames(){return this.handler.outputNames}get evalInputNames(){if(this.hasEvalModel)return this.handler.evalInputNames;throw new Error("This training session has no evalModel loaded.")}get evalOutputNames(){if(this.hasEvalModel)return this.handler.evalOutputNames;throw new Error("This training session has no evalModel loaded.")}static async create(t,r){let o=t.evalModel||"",u=t.optimizerModel||"",n=r||{},[a,d]=await ge$1(n);if(a.createTrainingSessionHandler){let p=await a.createTrainingSessionHandler(t.checkpointState,t.trainModel,o,u,d);return new C1(p,!!t.optimizerModel,!!t.evalModel)}else throw new Error(Ir$1)}typeNarrowingForRunStep(t,r,o,u,n){let a={},d={};if(typeof o!="object"||o===null||o instanceof I||Array.isArray(o))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let p=!0;if(typeof u=="object"){if(u===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(u instanceof I)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(u)){if(u.length===0)throw new TypeError("'fetches' cannot be an empty array.");p=!1;for(let i of u){if(typeof i!="string")throw new TypeError("'fetches' must be a string array or an object.");if(r.indexOf(i)===-1)throw new RangeError(`'fetches' contains invalid output name: ${i}.`);a[i]=null}if(typeof n=="object"&&n!==null)d=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let i=!1,l=Object.getOwnPropertyNames(u);for(let s of r)if(l.indexOf(s)!==-1){let c=u[s];(c===null||c instanceof I)&&(i=!0,p=!1,a[s]=c)}if(i){if(typeof n=="object"&&n!==null)d=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else d=u}}else if(typeof u<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let i of t)if(typeof o[i]>"u")throw new Error(`input '${i}' is missing in 'feeds'.`);if(p)for(let i of r)a[i]=null;return[a,d]}convertHandlerReturnTypeToMapOfTensors(t){let r={};for(let o in t)if(Object.hasOwnProperty.call(t,o)){let u=t[o];u instanceof I?r[o]=u:r[o]=new I(u.type,u.data,u.dims)}return r}async lazyResetGrad(){await this.handler.lazyResetGrad()}async runTrainStep(t,r,o){let[u,n]=this.typeNarrowingForRunStep(this.trainingInputNames,this.trainingOutputNames,t,r,o),a=await this.handler.runTrainStep(t,u,n);return this.convertHandlerReturnTypeToMapOfTensors(a)}async runOptimizerStep(t){if(this.hasOptimizerModel)await this.handler.runOptimizerStep(t||{});else throw new Error("This TrainingSession has no OptimizerModel loaded.")}async runEvalStep(t,r,o){if(this.hasEvalModel){let[u,n]=this.typeNarrowingForRunStep(this.evalInputNames,this.evalOutputNames,t,r,o),a=await this.handler.runEvalStep(t,u,n);return this.convertHandlerReturnTypeToMapOfTensors(a)}else throw new Error("This TrainingSession has no EvalModel loaded.")}async getParametersSize(t=!0){return this.handler.getParametersSize(t)}async loadParametersBuffer(t,r=!0){let o=await this.getParametersSize(r);if(t.length!==4*o)throw new Error("Size of the buffer passed into loadParametersBuffer must match the number of parameters in the model. Please use getParametersSize method to check.");return this.handler.loadParametersBuffer(t,r)}async getContiguousParameters(t=!0){return this.handler.getContiguousParameters(t)}async release(){return this.handler.dispose()}}}),Lr$1,Ft$1=w(()=>{kt$1(),Lr$1=Oe$1}),Je={};je(Je,{InferenceSession:()=>Pr$1,TRACE:()=>Lt$1,TRACE_FUNC_BEGIN:()=>H,TRACE_FUNC_END:()=>j,Tensor:()=>I,TrainingSession:()=>Lr$1,env:()=>T,registerBackend:()=>oe});var V$1=w(()=>{ft(),pt(),Mt(),Se(),Ut$1(),Dt(),qe(),Rt(),_t(),Ft$1()}),ve$1=w(()=>{}),zt={};je(zt,{default:()=>Br$1});var Wt$1,$t,Br$1,Gt$1=w(()=>{Xe$1(),Y(),ie$1(),Wt$1="ort-wasm-proxy-worker",$t=globalThis.self?.name===Wt$1,$t&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":xe(r.wasm).then(()=>{Pe$1(r).then(()=>{postMessage({type:t})},o=>{postMessage({type:t,err:o})})},o=>{postMessage({type:t,err:o})});break;case"init-ep":{let{epName:o,env:u}=r;Ie$1(u,o).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})});break}case"copy-from":{let{buffer:o}=r,u=ae$1(o);postMessage({type:t,out:u});break}case"create":{let{model:o,options:u}=r;Le$1(o,u).then(n=>{postMessage({type:t,out:n})},n=>{postMessage({type:t,err:n})});break}case"release":Be$1(r),postMessage({type:t});break;case"run":{let{sessionId:o,inputIndices:u,inputs:n,outputIndices:a,options:d}=r;Ce(o,u,n,a,new Array(a.length).fill(null),d).then(p=>{p.some(i=>i[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:p},Ue([...n,...p]))},p=>{postMessage({type:t,err:p})});break}case"end-profiling":Me(r),postMessage({type:t});break;default:}}catch(o){postMessage({type:t,err:o})}}),Br$1=$t?null:e=>new Worker(e??R$1,{type:"module",name:Wt$1})}),R$1,Cr$1,jt$1,Mr$1,Ur$1,Vt,Dr$1,Ht$1,Yt$1,qt$1,ie$1=w(()=>{ve$1(),R$1=import.meta.url??(typeof document<"u"?document.currentScript?.src:typeof self<"u"?self.location?.href:void 0),Cr$1=typeof location>"u"?void 0:location.origin,jt$1=(e,t)=>{try{let r=t??R$1;return(r?new URL(e,r):new URL(e)).origin===Cr$1}catch{return!1}},Mr$1=(e,t)=>{let r=t??R$1;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Ur$1=(e,t)=>`${t??"./"}${e}`,Vt=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Dr$1=async e=>(await import(e)).default,Ht$1=(Gt$1(),ut(zt)).default,Yt$1=async()=>{if(!R$1)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(jt$1(R$1))return[void 0,Ht$1()];let e=await Vt(R$1);return[e,Ht$1(e)]},qt$1=async(e,t,r)=>{{let o="ort-wasm-simd-threaded.mjs",u=e??Mr$1(o,t),n=r&&u&&!jt$1(u,t),a=n?await Vt(u):u??Ur$1(o,t);return[n?a:void 0,await Dr$1(a)]}}}),Ke$1,Qe,De$1,Jt$1,Rr$1,_r$1,xe,v,Y=w(()=>{ie$1(),Qe=!1,De$1=!1,Jt$1=!1,Rr$1=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},_r$1=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},xe=async e=>{if(Qe)return Promise.resolve();if(De$1)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Jt$1)throw new Error("previous call to 'initializeWebAssembly()' failed.");De$1=!0;let t=e.initTimeout,r=e.numThreads;if(!_r$1())throw new Error("WebAssembly SIMD is not supported in the current environment.");let o=Rr$1();r>1&&!o&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let u=e.wasmPaths,n=typeof u=="string"?u:void 0,a=u?.mjs,d=a?.href??a,p=u?.wasm,i=p?.href??p,l=e.wasmBinary,[s,c]=await qt$1(d,n,r>1),h=!1,g=[];if(t>0&&g.push(new Promise(y=>{setTimeout(()=>{h=!0,y()},t)})),g.push(new Promise((y,C)=>{let W={numThreads:r};l?W.wasmBinary=l:(i||n)&&(W.locateFile=(A,X)=>i??(n??X)+A),c(W).then(A=>{De$1=!1,Qe=!0,Ke$1=A,y(),s&&URL.revokeObjectURL(s)},A=>{De$1=!1,Jt$1=!0,C(A)})})),await Promise.race(g),h)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},v=()=>{if(Qe&&Ke$1)return Ke$1;throw new Error("WebAssembly is not initialized yet.")}}),x,ue,S,Re=w(()=>{Y(),x=(e,t)=>{let r=v(),o=r.lengthBytesUTF8(e)+1,u=r._malloc(o);return r.stringToUTF8(e,u,o),t.push(u),u},ue=(e,t,r,o)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([u,n])=>{let a=t?t+u:u;if(typeof n=="object")ue(n,a+".",r,o);else if(typeof n=="string"||typeof n=="number")o(a,n.toString());else if(typeof n=="boolean")o(a,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},S=e=>{let t=v(),r=t.stackSave();try{let o=t.stackAlloc(8);t._OrtGetLastError(o,o+4);let u=t.HEAP32[o/4],n=t.HEAPU32[o/4+1],a=n?t.UTF8ToString(n):"";throw new Error(`${e} ERROR_CODE: ${u}, ERROR_MESSAGE: ${a}`)}finally{t.stackRestore(r)}}}),Xt$1,Kt$1=w(()=>{Y(),Re(),Xt$1=e=>{let t=v(),r=0,o=[],u=e||{};try{if(e?.logSeverityLevel===void 0)u.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)u.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(u.terminate=!1);let n=0;return e?.tag!==void 0&&(n=x(e.tag,o)),r=t._OrtCreateRunOptions(u.logSeverityLevel,u.logVerbosityLevel,!!u.terminate,n),r===0&&S("Can't create run options."),e?.extra!==void 0&&ue(e.extra,"",new WeakSet,(a,d)=>{let p=x(a,o),i=x(d,o);t._OrtAddRunConfigEntry(r,p,i)!==0&&S(`Can't set a run config entry: ${a} - ${d}.`)}),[r,o]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),o.forEach(a=>t._free(a)),n}}}),kr$1,Fr$1,Nr$1,Wr$1,Qt$1,Zt$1=w(()=>{Y(),Re(),kr$1=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Fr$1=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Nr$1=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Wr$1=(e,t,r)=>{for(let o of t){let u=typeof o=="string"?o:o.name;switch(u){case"webnn":if(u="WEBNN",typeof o!="string"){let a=o?.deviceType;if(a){let d=x("deviceType",r),p=x(a,r);v()._OrtAddSessionConfigEntry(e,d,p)!==0&&S(`Can't set a session config entry: 'deviceType' - ${a}.`)}}break;case"webgpu":if(u="JS",typeof o!="string"){let a=o;if(a?.preferredLayout){if(a.preferredLayout!=="NCHW"&&a.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${a.preferredLayout}`);let d=x("preferredLayout",r),p=x(a.preferredLayout,r);v()._OrtAddSessionConfigEntry(e,d,p)!==0&&S(`Can't set a session config entry: 'preferredLayout' - ${a.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${u}`)}let n=x(u,r);v()._OrtAppendExecutionProvider(e,n)!==0&&S(`Can't append execution provider: ${u}.`)}},Qt$1=e=>{let t=v(),r=0,o=[],u=e||{};Nr$1(u);try{let n=kr$1(u.graphOptimizationLevel??"all"),a=Fr$1(u.executionMode??"sequential"),d=typeof u.logId=="string"?x(u.logId,o):0,p=u.logSeverityLevel??2;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log serverity level is not valid: ${p}`);let i=u.logVerbosityLevel??0;if(!Number.isInteger(i)||i<0||i>4)throw new Error(`log verbosity level is not valid: ${i}`);let l=typeof u.optimizedModelFilePath=="string"?x(u.optimizedModelFilePath,o):0;if(r=t._OrtCreateSessionOptions(n,!!u.enableCpuMemArena,!!u.enableMemPattern,a,!!u.enableProfiling,0,d,p,i,l),r===0&&S("Can't create session options."),u.executionProviders&&Wr$1(r,u.executionProviders,o),u.enableGraphCapture!==void 0){if(typeof u.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${u.enableGraphCapture}`);let s=x("enableGraphCapture",o),c=x(u.enableGraphCapture.toString(),o);t._OrtAddSessionConfigEntry(r,s,c)!==0&&S(`Can't set a session config entry: 'enableGraphCapture' - ${u.enableGraphCapture}.`)}if(u.freeDimensionOverrides)for(let[s,c]of Object.entries(u.freeDimensionOverrides)){if(typeof s!="string")throw new Error(`free dimension override name must be a string: ${s}`);if(typeof c!="number"||!Number.isInteger(c)||c<0)throw new Error(`free dimension override value must be a non-negative integer: ${c}`);let h=x(s,o);t._OrtAddFreeDimensionOverride(r,h,c)!==0&&S(`Can't set a free dimension override: ${s} - ${c}.`)}return u.extra!==void 0&&ue(u.extra,"",new WeakSet,(s,c)=>{let h=x(s,o),g=x(c,o);t._OrtAddSessionConfigEntry(r,h,g)!==0&&S(`Can't set a session config entry: ${s} - ${c}.`)}),[r,o]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r),o.forEach(a=>t._free(a)),n}}}),fe,er$1,ce,tr$1,rr$1,_e$1,ke$1,nr$1,Ze$1=w(()=>{fe=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},er$1=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},ce=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],o=typeof t=="number"?t:t.reduce((u,n)=>u*n,1);return r>0?Math.ceil(o*r):void 0},tr$1=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},rr$1=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},_e$1=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ke$1=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool",nr$1=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),le,et=w(()=>{ve$1(),le=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),o=r?parseInt(r,10):0;if(o<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let u=t.body.getReader(),n;try{n=new ArrayBuffer(o)}catch(d){if(d instanceof RangeError){let p=Math.ceil(o/65536);n=new WebAssembly.Memory({initial:p,maximum:p}).buffer}else throw d}let a=0;for(;;){let{done:d,value:p}=await u.read();if(d)break;let i=p.byteLength;new Uint8Array(n,a,i).set(p),a+=i}return new Uint8Array(n,0,o)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),$r$1,Pe$1,Ie$1,Q$1,zr$1,ae$1,Le$1,Be$1,or$1,Ce,Me,Ue,Xe$1=w(()=>{Kt$1(),Zt$1(),Ze$1(),Y(),Re(),et(),$r$1=(e,t)=>{v()._OrtInit(e,t)!==0&&S("Can't initialize onnxruntime.")},Pe$1=async e=>{$r$1(e.wasm.numThreads,rr$1(e.logLevel))},Ie$1=async(e,t)=>{},Q$1=new Map,zr$1=e=>{let t=v(),r=t.stackSave();try{let o=t.stackAlloc(8);return t._OrtGetInputOutputCount(e,o,o+4)!==0&&S("Can't get session input/output count."),[t.HEAP32[o/4],t.HEAP32[o/4+1]]}finally{t.stackRestore(r)}},ae$1=e=>{let t=v(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Le$1=async(e,t)=>{let r,o,u=v();Array.isArray(e)?[r,o]=e:e.buffer===u.HEAPU8.buffer?[r,o]=[e.byteOffset,e.byteLength]:[r,o]=ae$1(e);let n=0,a=0,d=[],p=[],i=[];try{if([a,d]=Qt$1(t),t?.externalData&&u.mountExternalData){let W=[];for(let A of t.externalData){let X=typeof A=="string"?A:A.path;W.push(le(typeof A=="string"?A:A.data).then(ni=>{u.mountExternalData(X,ni)}))}await Promise.all(W)}for(let W of t?.executionProviders??[])if((typeof W=="string"?W:W.name)==="webnn"){if(u.shouldTransferToMLTensor=!1,u.currentContext)throw new Error("WebNN execution provider is already set.");if(typeof W!="string"){let A=W,X=A?.context,ni=A?.gpuDevice,ii=A?.deviceType,li=A?.numThreads,ui=A?.powerPreference;X?u.currentContext=X:ni?u.currentContext=await navigator.ml.createContext(ni):u.currentContext=await navigator.ml.createContext({deviceType:ii,numThreads:li,powerPreference:ui})}else u.currentContext=await navigator.ml.createContext();break}n=await u._OrtCreateSession(r,o,a),n===0&&S("Can't create a session."),u.currentContext&&(u.jsepRegisterMLContext(n,u.currentContext),u.currentContext=void 0,u.shouldTransferToMLTensor=!0);let[l,s]=zr$1(n),c=!!t?.enableGraphCapture,h=[],g=[],y=[];for(let W=0;W<l;W++){let A=u._OrtGetInputName(n,W);A===0&&S("Can't get an input name."),p.push(A),h.push(u.UTF8ToString(A))}for(let W=0;W<s;W++){let A=u._OrtGetOutputName(n,W);A===0&&S("Can't get an output name."),i.push(A);let X=u.UTF8ToString(A);g.push(X)}return Q$1.set(n,[n,p,i,null,c,!1]),[n,h,g]}catch(l){throw p.forEach(s=>u._OrtFree(s)),i.forEach(s=>u._OrtFree(s)),n!==0&&u._OrtReleaseSession(n),l}finally{u._free(r),a!==0&&u._OrtReleaseSessionOptions(a),d.forEach(l=>u._free(l)),u.unmountExternalData?.()}},Be$1=e=>{let t=v(),r=Q$1.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[o,u,n,a,d]=r;a&&(d&&t._OrtClearBoundOutputs(a.handle),t._OrtReleaseBinding(a.handle)),t.jsepOnReleaseSession?.(e),u.forEach(p=>t._OrtFree(p)),n.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(o),Q$1.delete(e)},or$1=(e,t,r,o,u,n=!1)=>{if(!e){t.push(0);return}let a=v(),d=e[0],p=e[1],i=e[3],l,s;if(d==="string"&&(i==="gpu-buffer"||i==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(n&&i!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${u} when enableGraphCapture is true.`);if(i==="gpu-buffer"){let g=e[2].gpuBuffer;s=ce(fe(d),p);let y=a.jsepRegisterBuffer;if(!y)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');l=y(o,u,g,s)}else if(i==="ml-tensor"){let g=e[2].mlTensor;s=ce(fe(d),p);let y=a.jsepRegisterMLTensor;if(!y)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');l=y(g,fe(d),p)}else{let g=e[2];if(Array.isArray(g)){s=4*g.length,l=a._malloc(s),r.push(l);let y=l/4;for(let C=0;C<g.length;C++){if(typeof g[C]!="string")throw new TypeError(`tensor data at index ${C} is not a string`);a.HEAPU32[y++]=x(g[C],r)}}else s=g.byteLength,l=a._malloc(s),r.push(l),a.HEAPU8.set(new Uint8Array(g.buffer,g.byteOffset,s),l)}let c=a.stackSave(),h=a.stackAlloc(4*p.length);try{let g=h/4;p.forEach(C=>a.HEAP32[g++]=C);let y=a._OrtCreateTensor(fe(d),l,s,h,p.length,nr$1(i));y===0&&S(`Can't create tensor for input/output. session=${o}, index=${u}.`),t.push(y)}finally{a.stackRestore(c)}},Ce=async(e,t,r,o,u,n)=>{let a=v(),d=Q$1.get(e);if(!d)throw new Error(`cannot run inference. invalid session id: ${e}`);let p=d[0],i=d[1],l=d[2],s=d[3],c=d[4];d[5];let h=t.length,g=o.length,y=0,C=[],W=[],A=[],X=[],ni=a.stackSave(),ii=a.stackAlloc(h*4),li=a.stackAlloc(h*4),ui=a.stackAlloc(g*4),hi=a.stackAlloc(g*4);try{a.jsepOnRunStart?.(p),[y,C]=Xt$1(n);for(let wi=0;wi<h;wi++)or$1(r[wi],W,X,e,t[wi],c);for(let wi=0;wi<g;wi++)or$1(u[wi],A,X,e,h+o[wi],c);let yi=ii/4,$i=li/4,Bi=ui/4,Oi=hi/4;for(let wi=0;wi<h;wi++)a.HEAPU32[yi++]=W[wi],a.HEAPU32[$i++]=i[t[wi]];for(let wi=0;wi<g;wi++)a.HEAPU32[Bi++]=A[wi],a.HEAPU32[Oi++]=l[o[wi]];let Li;Li=await a._OrtRun(p,li,ii,h,hi,g,ui,y),Li!==0&&S("failed to call OrtRun().");let Ro=[];for(let wi=0;wi<g;wi++){let xi=a.HEAPU32[ui/4+wi];if(xi===A[wi]){Ro.push(u[wi]);continue}let Mo=a.stackSave(),zo=a.stackAlloc(4*4),Ti=!1,Ei,pi=0;try{a._OrtGetTensorData(xi,zo,zo+4,zo+8,zo+12)!==0&&S(`Can't access output tensor data on index ${wi}.`);let gi=zo/4,Ni=a.HEAPU32[gi++];pi=a.HEAPU32[gi++];let Zo=a.HEAPU32[gi++],Jo=a.HEAPU32[gi++],Kh=[];for(let Ko=0;Ko<Jo;Ko++)Kh.push(a.HEAPU32[Zo/4+Ko]);a._OrtFree(Zo);let Hh=Kh.reduce((Ko,Ho)=>Ko*Ho,1);Ei=er$1(Ni);let Xh=s?.outputPreferredLocations[o[wi]];if(Ei==="string"){if(Xh==="gpu-buffer"||Xh==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Ko=[],Ho=pi/4;for(let Yo=0;Yo<Hh;Yo++){let Qh=a.HEAPU32[Ho++],kf=Yo===Hh-1?void 0:a.HEAPU32[Ho]-Qh;Ko.push(a.UTF8ToString(Qh,kf))}Ro.push([Ei,Kh,Ko,"cpu"])}else if(Xh==="gpu-buffer"&&Hh>0){let Ko=a.jsepGetBuffer;if(!Ko)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Ho=Ko(pi),Yo=ce(Ni,Hh);if(Yo===void 0||!_e$1(Ei))throw new Error(`Unsupported data type: ${Ei}`);Ti=!0,Ro.push([Ei,Kh,{gpuBuffer:Ho,download:a.jsepCreateDownloader(Ho,Yo,Ei),dispose:()=>{a._OrtReleaseTensor(xi)}},"gpu-buffer"])}else if(Xh==="ml-tensor"&&Hh>0){let Ko=a.jsepEnsureTensor;if(!Ko)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(ce(Ni,Hh)===void 0||!ke$1(Ei))throw new Error(`Unsupported data type: ${Ei}`);let Ho=await Ko(pi,Ni,Kh,!1);Ti=!0,Ro.push([Ei,Kh,{mlTensor:Ho,download:a.jsepCreateMLTensorDownloader(pi,Ei),dispose:()=>{a.jsepReleaseTensorId(pi),a._OrtReleaseTensor(xi)}},"ml-tensor"])}else{let Ko=tr$1(Ei),Ho=new Ko(Hh);new Uint8Array(Ho.buffer,Ho.byteOffset,Ho.byteLength).set(a.HEAPU8.subarray(pi,pi+Ho.byteLength)),Ro.push([Ei,Kh,Ho,"cpu"])}}finally{a.stackRestore(Mo),Ei==="string"&&pi&&a._free(pi),Ti||a._OrtReleaseTensor(xi)}}return s&&!c&&(a._OrtClearBoundOutputs(s.handle),Q$1.set(e,[p,i,l,s,c,!1])),Ro}finally{a.stackRestore(ni),W.forEach(yi=>a._OrtReleaseTensor(yi)),A.forEach(yi=>a._OrtReleaseTensor(yi)),X.forEach(yi=>a._free(yi)),y!==0&&a._OrtReleaseRunOptions(y),C.forEach(yi=>a._free(yi))}},Me=e=>{let t=v(),r=Q$1.get(e);if(!r)throw new Error("invalid session id");let o=r[0],u=t._OrtEndProfiling(o);u===0&&S("Can't get an profile file name."),t._OrtFree(u)},Ue=e=>{let t=[];for(let r of e){let o=r[2];!Array.isArray(o)&&"buffer"in o&&t.push(o.buffer)}return t}}),J$1,_,de,Ne$1,We$1,Fe$1,tt,rt$1,Z,ee,Hr$1,sr,ir$1,ar,ur,fr,cr,lr,nt$1=w(()=>{V$1(),Xe$1(),Y(),ie$1(),J$1=()=>!!T.wasm.proxy&&typeof document<"u",de=!1,Ne$1=!1,We$1=!1,rt$1=new Map,Z=(e,t)=>{let r=rt$1.get(e);r?r.push(t):rt$1.set(e,[t])},ee=()=>{if(de||!Ne$1||We$1||!_)throw new Error("worker not ready")},Hr$1=e=>{switch(e.data.type){case"init-wasm":de=!1,e.data.err?(We$1=!0,tt[1](e.data.err)):(Ne$1=!0,tt[0]()),Fe$1&&(URL.revokeObjectURL(Fe$1),Fe$1=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=rt$1.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},sr=async()=>{if(!Ne$1){if(de)throw new Error("multiple calls to 'initWasm()' detected.");if(We$1)throw new Error("previous call to 'initWasm()' failed.");if(de=!0,J$1())return new Promise((e,t)=>{_?.terminate(),Yt$1().then(([r,o])=>{try{_=o,_.onerror=n=>t(n),_.onmessage=Hr$1,tt=[e,t];let u={type:"init-wasm",in:T};_.postMessage(u),Fe$1=r}catch(u){t(u)}},t)});try{await xe(T.wasm),await Pe$1(T),Ne$1=!0}catch(e){throw We$1=!0,e}finally{de=!1}}},ir$1=async e=>{if(J$1())return ee(),new Promise((t,r)=>{Z("init-ep",[t,r]);let o={type:"init-ep",in:{epName:e,env:T}};_.postMessage(o)});await Ie$1(T,e)},ar=async e=>J$1()?(ee(),new Promise((t,r)=>{Z("copy-from",[t,r]);let o={type:"copy-from",in:{buffer:e}};_.postMessage(o,[e.buffer])})):ae$1(e),ur=async(e,t)=>{if(J$1()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return ee(),new Promise((r,o)=>{Z("create",[r,o]);let u={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),_.postMessage(u,n)})}else return Le$1(e,t)},fr=async e=>{if(J$1())return ee(),new Promise((t,r)=>{Z("release",[t,r]);let o={type:"release",in:e};_.postMessage(o)});Be$1(e)},cr=async(e,t,r,o,u,n)=>{if(J$1()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(u.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return ee(),new Promise((a,d)=>{Z("run",[a,d]);let p=r,i={type:"run",in:{sessionId:e,inputIndices:t,inputs:p,outputIndices:o,options:n}};_.postMessage(i,Ue(p))})}else return Ce(e,t,r,o,u,n)},lr=async e=>{if(J$1())return ee(),new Promise((t,r)=>{Z("end-profiling",[t,r]);let o={type:"end-profiling",in:e};_.postMessage(o)});Me(e)}}),dr,jr$1,$e,pr=w(()=>{V$1(),nt$1(),Ze$1(),ve$1(),et(),dr=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},jr$1=e=>{switch(e[3]){case"cpu":return new I(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!_e$1(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:o,dispose:u}=e[2];return I.fromGpuBuffer(r,{dataType:t,dims:e[1],download:o,dispose:u})}case"ml-tensor":{let t=e[0];if(!ke$1(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:o,dispose:u}=e[2];return I.fromMLTensor(r,{dataType:t,dims:e[1],download:o,dispose:u})}default:throw new Error(`invalid data location: ${e[3]}`)}},$e=class{async fetchModelAndCopyToWasmMemory(e){return ar(await le(e))}async loadModel(e,t){H();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await ur(r,t),j()}async dispose(){return fr(this.sessionId)}async run(e,t,r){H();let o=[],u=[];Object.entries(e).forEach(s=>{let c=s[0],h=s[1],g=this.inputNames.indexOf(c);if(g===-1)throw new Error(`invalid input '${c}'`);o.push(h),u.push(g)});let n=[],a=[];Object.entries(t).forEach(s=>{let c=s[0],h=s[1],g=this.outputNames.indexOf(c);if(g===-1)throw new Error(`invalid output '${c}'`);n.push(h),a.push(g)});let d=o.map((s,c)=>dr(s,()=>`input "${this.inputNames[u[c]]}"`)),p=n.map((s,c)=>s?dr(s,()=>`output "${this.outputNames[a[c]]}"`):null),i=await cr(this.sessionId,u,d,a,p,r),l={};for(let s=0;s<i.length;s++)l[this.outputNames[a[s]]]=n[s]??jr$1(i[s]);return j(),l}startProfiling(){}endProfiling(){lr(this.sessionId)}}}),hr={};je(hr,{OnnxruntimeWebAssemblyBackend:()=>ze,initializeFlags:()=>mr,wasmBackend:()=>Vr$1});var mr,ze,Vr$1,yr=w(()=>{V$1(),nt$1(),pr(),ie$1(),mr=()=>{if((typeof T.wasm.initTimeout!="number"||T.wasm.initTimeout<0)&&(T.wasm.initTimeout=0),T.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof T.wasm.proxy!="boolean"&&(T.wasm.proxy=!1),typeof T.wasm.trace!="boolean"&&(T.wasm.trace=!1),typeof T.wasm.numThreads!="number"||!Number.isInteger(T.wasm.numThreads)||T.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)T.wasm.numThreads=1;else{let e=typeof navigator>"u"?He$1("node:os").cpus().length:navigator.hardwareConcurrency;T.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}T.wasm.wasmPaths===void 0&&R$1&&R$1.indexOf("blob:")!==0&&(T.wasm.wasmPaths=R$1.substring(0,R$1.lastIndexOf("/")+1))},ze=class{async init(e){mr(),await sr(),await ir$1(e)}async createInferenceSessionHandler(e,t){let r=new $e;return await r.loadModel(e,t),Promise.resolve(r)}},Vr$1=new ze});V$1();V$1();V$1();var Nt$1="1.20.1",Do=Je;{let e=(yr(),ut(hr)).wasmBackend;oe("cpu",e,10),oe("wasm",e,10)}Object.defineProperty(T.versions,"web",{value:Nt$1,enumerable:!0});var ortWasm=Object.freeze({__proto__:null,get InferenceSession(){return Pr$1},get TRACE(){return Lt$1},get TRACE_FUNC_BEGIN(){return H},get TRACE_FUNC_END(){return j},get Tensor(){return I},get TrainingSession(){return Lr$1},default:Do,get env(){return T},get registerBackend(){return oe}});/*!
 * ONNX Runtime Web v1.20.1
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Un=Object.defineProperty,vp=Object.getOwnPropertyDescriptor,$p=Object.getOwnPropertyNames,xp=Object.prototype.hasOwnProperty,Vn=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),V=(e,t)=>()=>(e&&(t=e(e=0)),t),Gt=(e,t)=>{for(var r in t)Un(e,r,{get:t[r],enumerable:!0})},Sp=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let u of $p(t))!xp.call(e,u)&&u!==r&&Un(e,u,{get:()=>t[u],enumerable:!(o=vp(t,u))||o.enumerable});return e},br=e=>Sp(Un({},"__esModule",{value:!0}),e),wr,xt,St,Tp,_r,vr=V(()=>{wr=new Map,xt=[],St=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let o=wr.get(e);if(o===void 0)wr.set(e,{backend:t,priority:r});else{if(o.priority>r)return;if(o.priority===r&&o.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let u=xt.indexOf(e);u!==-1&&xt.splice(u,1);for(let n=0;n<xt.length;n++)if(wr.get(xt[n]).priority<=r){xt.splice(n,0,e);return}xt.push(e)}return}throw new TypeError("not a valid backend")},Tp=async e=>{let t=wr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(o){return r||(t.error=`${o}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},_r=async e=>{let t=e.executionProviders||[],r=t.map(p=>typeof p=="string"?p:p.name),o=r.length===0?xt:r,u,n=[],a=new Set;for(let p of o){let i=await Tp(p);typeof i=="string"?n.push({name:p,err:i}):(u||(u=i),u===i&&a.add(p))}if(!u)throw new Error(`no available backend found. ERR: ${n.map(p=>`[${p.name}] ${p.err}`).join(", ")}`);for(let{name:p,err:i}of n)r.includes(p)&&console.warn(`removing requested execution provider "${p}" from session options because it is not available: ${i}`);let d=t.filter(p=>a.has(typeof p=="string"?p:p.name));return[u,new Proxy(e,{get:(p,i)=>i==="executionProviders"?d:Reflect.get(p,i)})]}}),Zi=V(()=>{vr()}),Qi,Ji=V(()=>{Qi="1.20.1"}),ea,We,Nn=V(()=>{Ji(),ea="warning",We={wasm:{},webgl:{},webgpu:{},versions:{common:Qi},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);ea=e}},get logLevel(){return ea}},Object.defineProperty(We,"logLevel",{enumerable:!0})}),_e,ta=V(()=>{Nn(),_e=We}),ra,na,oa=V(()=>{ra=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let o=r.getContext("2d");if(o!=null){let u,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(u=e.dims[2],n=e.dims[3]):(u=e.dims[3],n=e.dims[2]);let a=t?.format!==void 0?t.format:"RGB",d=t?.norm,p,i;d===void 0||d.mean===void 0?p=[255,255,255,255]:typeof d.mean=="number"?p=[d.mean,d.mean,d.mean,d.mean]:(p=[d.mean[0],d.mean[1],d.mean[2],0],d.mean[3]!==void 0&&(p[3]=d.mean[3])),d===void 0||d.bias===void 0?i=[0,0,0,0]:typeof d.bias=="number"?i=[d.bias,d.bias,d.bias,d.bias]:(i=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(i[3]=d.bias[3]));let l=n*u,s=0,c=l,h=l*2,g=-1;a==="RGBA"?(s=0,c=l,h=l*2,g=l*3):a==="RGB"?(s=0,c=l,h=l*2):a==="RBG"&&(s=0,h=l,c=l*2);for(let y=0;y<n;y++)for(let C=0;C<u;C++){let W=(e.data[s++]-i[0])*p[0],A=(e.data[c++]-i[1])*p[1],X=(e.data[h++]-i[2])*p[2],ni=g===-1?255:(e.data[g++]-i[3])*p[3];o.fillStyle="rgba("+W+","+A+","+X+","+ni+")",o.fillRect(C,y,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},na=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),o;if(r!=null){let u,n,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(u=e.dims[2],n=e.dims[1],a=e.dims[3]):(u=e.dims[3],n=e.dims[2],a=e.dims[1]);let d=t!==void 0&&t.format!==void 0?t.format:"RGB",p=t?.norm,i,l;p===void 0||p.mean===void 0?i=[255,255,255,255]:typeof p.mean=="number"?i=[p.mean,p.mean,p.mean,p.mean]:(i=[p.mean[0],p.mean[1],p.mean[2],255],p.mean[3]!==void 0&&(i[3]=p.mean[3])),p===void 0||p.bias===void 0?l=[0,0,0,0]:typeof p.bias=="number"?l=[p.bias,p.bias,p.bias,p.bias]:(l=[p.bias[0],p.bias[1],p.bias[2],0],p.bias[3]!==void 0&&(l[3]=p.bias[3]));let s=n*u;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let c=4,h=0,g=1,y=2,C=3,W=0,A=s,X=s*2,ni=-1;d==="RGBA"?(W=0,A=s,X=s*2,ni=s*3):d==="RGB"?(W=0,A=s,X=s*2):d==="RBG"&&(W=0,X=s,A=s*2),o=r.createImageData(u,n);for(let ii=0;ii<n*u;h+=c,g+=c,y+=c,C+=c,ii++)o.data[h]=(e.data[W++]-l[0])*i[0],o.data[g]=(e.data[A++]-l[1])*i[1],o.data[y]=(e.data[X++]-l[2])*i[2],o.data[C]=ni===-1?255:(e.data[ni++]-l[3])*i[3]}else throw new Error("Can not access image data");return o}}),Wn,ia,aa,sa,ua,da,la=V(()=>{$r(),Wn=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:o}=t,u=t.norm??{mean:255,bias:0},n,a;typeof u.mean=="number"?n=[u.mean,u.mean,u.mean,u.mean]:n=[u.mean[0],u.mean[1],u.mean[2],u.mean[3]??255],typeof u.bias=="number"?a=[u.bias,u.bias,u.bias,u.bias]:a=[u.bias[0],u.bias[1],u.bias[2],u.bias[3]??0];let d=t.format!==void 0?t.format:"RGBA",p=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",i=r*o,l=p==="RGBA"?new Float32Array(i*4):new Float32Array(i*3),s=4,c=0,h=1,g=2,y=3,C=0,W=i,A=i*2,X=-1;d==="RGB"&&(s=3,c=0,h=1,g=2,y=-1),p==="RGBA"?X=i*3:p==="RBG"?(C=0,A=i,W=i*2):p==="BGR"&&(A=0,W=i,C=i*2);for(let ni=0;ni<i;ni++,c+=s,g+=s,h+=s,y+=s)l[C++]=(e[c]+a[0])/n[0],l[W++]=(e[h]+a[1])/n[1],l[A++]=(e[g]+a[2])/n[2],X!==-1&&y!==-1&&(l[X++]=(e[y]+a[3])/n[3]);return p==="RGBA"?new Be("float32",l,[1,4,r,o]):new Be("float32",l,[1,3,r,o])},ia=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,o=typeof ImageData<"u"&&e instanceof ImageData,u=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",a,d=t??{},p=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},i=l=>typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||l instanceof OffscreenCanvas?l.getContext("2d"):null;if(r){let l=p();l.width=e.width,l.height=e.height;let s=i(l);if(s!=null){let c=e.height,h=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(c=t.resizedHeight,h=t.resizedWidth),t!==void 0){if(d=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");d.tensorFormat="RGBA",d.height=c,d.width=h}else d.tensorFormat="RGBA",d.height=c,d.width=h;s.drawImage(e,0,0),a=s.getImageData(0,0,h,c).data}else throw new Error("Can not access image data")}else if(o){let l,s;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(l=t.resizedHeight,s=t.resizedWidth):(l=e.height,s=e.width),t!==void 0&&(d=t),d.format="RGBA",d.height=l,d.width=s,t!==void 0){let c=p();c.width=s,c.height=l;let h=i(c);if(h!=null)h.putImageData(e,0,0),a=h.getImageData(0,0,s,l).data;else throw new Error("Can not access image data")}else a=e.data}else if(u){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let l=p();l.width=e.width,l.height=e.height;let s=i(l);if(s!=null){let c=e.height,h=e.width;return s.drawImage(e,0,0,h,c),a=s.getImageData(0,0,h,c).data,d.height=c,d.width=h,Wn(a,d)}else throw new Error("Can not access image data")}else{if(n)return new Promise((l,s)=>{let c=p(),h=i(c);if(!e||!h)return s();let g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{c.width=g.width,c.height=g.height,h.drawImage(g,0,0,c.width,c.height);let y=h.getImageData(0,0,c.width,c.height);d.height=c.height,d.width=c.width,l(Wn(y.data,d))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return Wn(a,d);throw new Error("Input data provided is not supported - aborted tensor creation")},aa=(e,t)=>{let{width:r,height:o,download:u,dispose:n}=t,a=[1,o,r,4];return new Be({location:"texture",type:"float32",texture:e,dims:a,download:u,dispose:n})},sa=(e,t)=>{let{dataType:r,dims:o,download:u,dispose:n}=t;return new Be({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:o,download:u,dispose:n})},ua=(e,t)=>{let{dataType:r,dims:o,download:u,dispose:n}=t;return new Be({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:o,download:u,dispose:n})},da=(e,t,r)=>new Be({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Tt,Ft,ca,pa,ma=V(()=>{Tt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Ft=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),ca=!1,pa=()=>{if(!ca){ca=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=typeof Float16Array<"u"&&Float16Array.from;e&&(Tt.set("int64",BigInt64Array),Ft.set(BigInt64Array,"int64")),t&&(Tt.set("uint64",BigUint64Array),Ft.set(BigUint64Array,"uint64")),r?(Tt.set("float16",Float16Array),Ft.set(Float16Array,"float16")):Tt.set("float16",Uint16Array)}}}),fa,ha,ga=V(()=>{$r(),fa=e=>{let t=1;for(let r=0;r<e.length;r++){let o=e[r];if(typeof o!="number"||!Number.isSafeInteger(o))throw new TypeError(`dims[${r}] must be an integer, got: ${o}`);if(o<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${o}`);t*=o}return t},ha=(e,t)=>{switch(e.location){case"cpu":return new Be(e.type,e.data,t);case"cpu-pinned":return new Be({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Be({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Be({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Be({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Be,$r=V(()=>{oa(),la(),ma(),ga(),Be=class{constructor(e,t,r){pa();let o,u;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,o=e.type,u=e.dims,e.location){case"cpu-pinned":{let a=Tt.get(o);if(!a)throw new TypeError(`unsupported type "${o}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(o!=="float32")throw new TypeError(`unsupported type "${o}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint8"&&o!=="bool"&&o!=="uint4"&&o!=="int4")throw new TypeError(`unsupported type "${o}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint64"&&o!=="int8"&&o!=="uint8"&&o!=="bool")throw new TypeError(`unsupported type "${o}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,d;if(typeof e=="string")if(o=e,d=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let p=Tt.get(e);if(p===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&p===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${p.name} as data.`);e==="uint64"||e==="int64"?a=p.from(t,BigInt):a=p.from(t)}else if(t instanceof p)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${o} tensor's data must be type of ${p}`)}else if(d=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let p=typeof e[0];if(p==="string")o="string",a=e;else if(p==="boolean")o="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${p}.`)}else if(e instanceof Uint8ClampedArray)o="uint8",a=Uint8Array.from(e);else{let p=Ft.get(e.constructor);if(p===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);o=p,a=e}if(d===void 0)d=[a.length];else if(!Array.isArray(d))throw new TypeError("A tensor's dims must be a number array");u=d,this.cpuData=a,this.dataLocation="cpu"}let n=fa(u);if(this.cpuData&&n!==this.cpuData.length&&!((o==="uint4"||o==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=o,this.dims=u,this.size=n}static async fromImage(e,t){return ia(e,t)}static fromTexture(e,t){return aa(e,t)}static fromGpuBuffer(e,t){return sa(e,t)}static fromMLTensor(e,t){return ua(e,t)}static fromPinnedBuffer(e,t,r){return da(e,t,r)}toDataURL(e){return ra(this,e)}toImageData(e){return na(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return ha(this,e)}}}),De,xr=V(()=>{$r(),De=Be}),Sr,ya,Le,Ve,Ln=V(()=>{Nn(),Sr=(e,t)=>{(typeof We.trace>"u"?!We.wasm.trace:!We.trace)||console.timeStamp(`${e}::ORT::${t}`)},ya=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],o=!1;for(let u=0;u<r.length;u++){if(o&&!r[u].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[u].trim().split(" ")[1]}`;t&&(n+=`::${t}`),Sr("CPU",n);return}r[u].includes("TRACE_FUNC")&&(o=!0)}},Le=e=>{(typeof We.trace>"u"?!We.wasm.trace:!We.trace)||ya("BEGIN",e)},Ve=e=>{(typeof We.trace>"u"?!We.wasm.trace:!We.trace)||ya("END",e)}}),Tr,ba=V(()=>{vr(),xr(),Ln(),Tr=class D1{constructor(t){this.handler=t}async run(t,r,o){Le();let u={},n={};if(typeof t!="object"||t===null||t instanceof De||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof De)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let i of r){if(typeof i!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(i)===-1)throw new RangeError(`'fetches' contains invalid output name: ${i}.`);u[i]=null}if(typeof o=="object"&&o!==null)n=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else{let i=!1,l=Object.getOwnPropertyNames(r);for(let s of this.outputNames)if(l.indexOf(s)!==-1){let c=r[s];(c===null||c instanceof De)&&(i=!0,a=!1,u[s]=c)}if(i){if(typeof o=="object"&&o!==null)n=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let i of this.inputNames)if(typeof t[i]>"u")throw new Error(`input '${i}' is missing in 'feeds'.`);if(a)for(let i of this.outputNames)u[i]=null;let d=await this.handler.run(t,u,n),p={};for(let i in d)if(Object.hasOwnProperty.call(d,i)){let l=d[i];l instanceof De?p[i]=l:p[i]=new De(l.type,l.data,l.dims)}return Ve(),p}async release(){return this.handler.dispose()}static async create(t,r,o,u){Le();let n,a={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let l=t,s=0,c=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(s=r,!Number.isSafeInteger(s))throw new RangeError("'byteOffset' must be an integer.");if(s<0||s>=l.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${l.byteLength}).`);if(c=t.byteLength-s,typeof o=="number"){if(c=o,!Number.isSafeInteger(c))throw new RangeError("'byteLength' must be an integer.");if(c<=0||s+c>l.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${l.byteLength-s}].`);if(typeof u=="object"&&u!==null)a=u;else if(typeof u<"u")throw new TypeError("'options' must be an object.")}else if(typeof o<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(l,s,c)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[d,p]=await _r(a),i=await d.createInferenceSessionHandler(n,p);return Ve(),new D1(i)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),Ip,wa=V(()=>{ba(),Ip=Tr}),_a=V(()=>{}),va=V(()=>{}),$a=V(()=>{}),xa=V(()=>{}),Cp,Ir,Sa=V(()=>{vr(),xr(),Cp="Training backend could not be resolved. Make sure you're using the correct configuration & WebAssembly files.",Ir=class z1{constructor(t,r,o){this.handler=t,this.hasOptimizerModel=r,this.hasEvalModel=o}get trainingInputNames(){return this.handler.inputNames}get trainingOutputNames(){return this.handler.outputNames}get evalInputNames(){if(this.hasEvalModel)return this.handler.evalInputNames;throw new Error("This training session has no evalModel loaded.")}get evalOutputNames(){if(this.hasEvalModel)return this.handler.evalOutputNames;throw new Error("This training session has no evalModel loaded.")}static async create(t,r){let o=t.evalModel||"",u=t.optimizerModel||"",n=r||{},[a,d]=await _r(n);if(a.createTrainingSessionHandler){let p=await a.createTrainingSessionHandler(t.checkpointState,t.trainModel,o,u,d);return new z1(p,!!t.optimizerModel,!!t.evalModel)}else throw new Error(Cp)}typeNarrowingForRunStep(t,r,o,u,n){let a={},d={};if(typeof o!="object"||o===null||o instanceof De||Array.isArray(o))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let p=!0;if(typeof u=="object"){if(u===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(u instanceof De)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(u)){if(u.length===0)throw new TypeError("'fetches' cannot be an empty array.");p=!1;for(let i of u){if(typeof i!="string")throw new TypeError("'fetches' must be a string array or an object.");if(r.indexOf(i)===-1)throw new RangeError(`'fetches' contains invalid output name: ${i}.`);a[i]=null}if(typeof n=="object"&&n!==null)d=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let i=!1,l=Object.getOwnPropertyNames(u);for(let s of r)if(l.indexOf(s)!==-1){let c=u[s];(c===null||c instanceof De)&&(i=!0,p=!1,a[s]=c)}if(i){if(typeof n=="object"&&n!==null)d=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else d=u}}else if(typeof u<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let i of t)if(typeof o[i]>"u")throw new Error(`input '${i}' is missing in 'feeds'.`);if(p)for(let i of r)a[i]=null;return[a,d]}convertHandlerReturnTypeToMapOfTensors(t){let r={};for(let o in t)if(Object.hasOwnProperty.call(t,o)){let u=t[o];u instanceof De?r[o]=u:r[o]=new De(u.type,u.data,u.dims)}return r}async lazyResetGrad(){await this.handler.lazyResetGrad()}async runTrainStep(t,r,o){let[u,n]=this.typeNarrowingForRunStep(this.trainingInputNames,this.trainingOutputNames,t,r,o),a=await this.handler.runTrainStep(t,u,n);return this.convertHandlerReturnTypeToMapOfTensors(a)}async runOptimizerStep(t){if(this.hasOptimizerModel)await this.handler.runOptimizerStep(t||{});else throw new Error("This TrainingSession has no OptimizerModel loaded.")}async runEvalStep(t,r,o){if(this.hasEvalModel){let[u,n]=this.typeNarrowingForRunStep(this.evalInputNames,this.evalOutputNames,t,r,o),a=await this.handler.runEvalStep(t,u,n);return this.convertHandlerReturnTypeToMapOfTensors(a)}else throw new Error("This TrainingSession has no EvalModel loaded.")}async getParametersSize(t=!0){return this.handler.getParametersSize(t)}async loadParametersBuffer(t,r=!0){let o=await this.getParametersSize(r);if(t.length!==4*o)throw new Error("Size of the buffer passed into loadParametersBuffer must match the number of parameters in the model. Please use getParametersSize method to check.");return this.handler.loadParametersBuffer(t,r)}async getContiguousParameters(t=!0){return this.handler.getContiguousParameters(t)}async release(){return this.handler.dispose()}}}),Ap,Ta=V(()=>{Sa(),Ap=Ir}),Hn={};Gt(Hn,{InferenceSession:()=>Ip,TRACE:()=>Sr,TRACE_FUNC_BEGIN:()=>Le,TRACE_FUNC_END:()=>Ve,Tensor:()=>De,TrainingSession:()=>Ap,env:()=>_e,registerBackend:()=>St});var Ke=V(()=>{Zi(),ta(),wa(),xr(),_a(),va(),Ln(),$a(),xa(),Ta()}),Cr=V(()=>{}),ka={};Gt(ka,{default:()=>kp});var Ca,Aa,kp,Ea=V(()=>{Gn(),gt(),qt(),Ca="ort-wasm-proxy-worker",Aa=globalThis.self?.name===Ca,Aa&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":Ar(r.wasm).then(()=>{kr(r).then(()=>{postMessage({type:t})},o=>{postMessage({type:t,err:o})})},o=>{postMessage({type:t,err:o})});break;case"init-ep":{let{epName:o,env:u}=r;Er(u,o).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})});break}case"copy-from":{let{buffer:o}=r,u=jt(o);postMessage({type:t,out:u});break}case"create":{let{model:o,options:u}=r;Pr(o,u).then(n=>{postMessage({type:t,out:n})},n=>{postMessage({type:t,err:n})});break}case"release":zr(r),postMessage({type:t});break;case"run":{let{sessionId:o,inputIndices:u,inputs:n,outputIndices:a,options:d}=r;Or(o,u,n,a,new Array(a.length).fill(null),d).then(p=>{p.some(i=>i[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:p},Dr([...n,...p]))},p=>{postMessage({type:t,err:p})});break}case"end-profiling":Br(r),postMessage({type:t});break;default:}}catch(o){postMessage({type:t,err:o})}}),kp=Aa?null:e=>new Worker(e??Ut,{type:"module",name:Ca})}),za={};Gt(za,{default:()=>Ep});var Fn,Pa,Ep,Oa=V(()=>{Pa=(Fn=import.meta.url,async function(e={}){function t(){return wi.buffer!=zo.buffer&&Ko(),zo}function r(){return wi.buffer!=zo.buffer&&Ko(),Ti}function o(){return wi.buffer!=zo.buffer&&Ko(),Ei}function u(){return wi.buffer!=zo.buffer&&Ko(),pi}function n(){return wi.buffer!=zo.buffer&&Ko(),gi}function a(){return wi.buffer!=zo.buffer&&Ko(),Ni}function d(){return wi.buffer!=zo.buffer&&Ko(),Zo}function p(){return wi.buffer!=zo.buffer&&Ko(),Hh}var i,l,s=Object.assign({},e),c=new Promise((f,b)=>{i=f,l=b}),h=typeof window=="object",g=typeof importScripts=="function",y=g&&self.name=="em-pthread";s.mountExternalData=(f,b)=>{f.startsWith("./")&&(f=f.substring(2)),(s.Fb||(s.Fb=new Map)).set(f,b)},s.unmountExternalData=()=>{delete s.Fb};var C=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let W=()=>{let f=(L,K,ei)=>(...si)=>{let ci=tg,fi=K?.();si=L(...si);let bi=K?.();return fi!==bi&&(L=bi,ei(fi),K=ei=null),tg!=ci?new Promise((vi,Ii)=>{Qg={resolve:vi,reject:Ii}}):si},b=L=>async(...K)=>{try{if(s.Eb)throw Error("Session already started");let ei=s.Eb={fc:K[0],errors:[]},si=await L(...K);if(s.Eb!==ei)throw Error("Session mismatch");s.Gb?.flush();let ci=ei.errors;if(0<ci.length){let fi=await Promise.all(ci);if(fi=fi.filter(bi=>bi),0<fi.length)throw Error(fi.join(`
`))}return si}finally{s.Eb=null}};s._OrtCreateSession=f(s._OrtCreateSession,()=>s._OrtCreateSession,L=>s._OrtCreateSession=L),s._OrtRun=b(f(s._OrtRun,()=>s._OrtRun,L=>s._OrtRun=L)),s._OrtRunWithBinding=b(f(s._OrtRunWithBinding,()=>s._OrtRunWithBinding,L=>s._OrtRunWithBinding=L)),s._OrtBindInput=f(s._OrtBindInput,()=>s._OrtBindInput,L=>s._OrtBindInput=L),W=void 0};s.jsepInit=(f,b)=>{if(W?.(),f==="webgpu"){[s.Gb,s.Ub,s.Yb,s.Nb,s.Xb,s.jb,s.Zb,s.bc,s.Vb,s.Wb,s.$b]=b;let L=s.Gb;s.jsepRegisterBuffer=(K,ei,si,ci)=>L.registerBuffer(K,ei,si,ci),s.jsepGetBuffer=K=>L.getBuffer(K),s.jsepCreateDownloader=(K,ei,si)=>L.createDownloader(K,ei,si),s.jsepOnReleaseSession=K=>{L.onReleaseSession(K)},s.jsepOnRunStart=K=>L.onRunStart(K),s.cc=(K,ei)=>{L.upload(K,ei)}}else if(f==="webnn"){[s.Gb,s.ac,s.Ob,s.jsepEnsureTensor,s.dc,s.jsepDownloadTensor]=b,s.jsepReleaseTensorId=s.Ob;let L=s.Gb;s.jsepOnRunStart=K=>L.onRunStart(K),s.jsepRegisterMLContext=(K,ei)=>{L.registerMLContext(K,ei)},s.jsepOnReleaseSession=K=>{L.onReleaseSession(K)},s.jsepCreateMLTensorDownloader=(K,ei)=>L.createMLTensorDownloader(K,ei),s.jsepRegisterMLTensor=(K,ei,si)=>L.registerMLTensor(K,ei,si)}};var A,X,ni=Object.assign({},s),ii="./this.program",li=(f,b)=>{throw b},ui="";(h||g)&&(g?ui=self.location.href:typeof document<"u"&&document.currentScript&&(ui=document.currentScript.src),Fn&&(ui=Fn),ui=ui.startsWith("blob:")?"":ui.substr(0,ui.replace(/[?#].*/,"").lastIndexOf("/")+1),g&&(X=f=>{var b=new XMLHttpRequest;return b.open("GET",f,!1),b.responseType="arraybuffer",b.send(null),new Uint8Array(b.response)}),A=(f,b,L)=>{var K=new XMLHttpRequest;K.open("GET",f,!0),K.responseType="arraybuffer",K.onload=()=>{K.status==200||K.status==0&&K.response?b(K.response):L()},K.onerror=L,K.send(null)});var hi,yi=console.log.bind(console),$i=console.error.bind(console),Bi=yi,Oi=$i;if(Object.assign(s,ni),ni=null,y){let f=function(b){try{var L=b.data,K=L.cmd;if(K==="load"){let ei=[];self.onmessage=si=>ei.push(si),self.startWorker=()=>{postMessage({cmd:"loaded"});for(let si of ei)f(si);self.onmessage=f};for(let si of L.handlers)s[si]&&!s[si].proxy||(s[si]=(...ci)=>{postMessage({Mb:"callHandler",oc:si,args:ci})},si=="print"&&(Bi=s[si]),si=="printErr"&&(Oi=s[si]));wi=L.wasmMemory,Ko(),Li(L.wasmModule)}else if(K==="run"){ny(L.pthread_ptr,0,0,1,0,0),Zg(L.pthread_ptr),F1(),$y(),Ro||(g1(),Ro=!0);try{M1(L.start_routine,L.arg)}catch(ei){if(ei!="unwind")throw ei}}else K==="cancel"?yg()&&zg(-1):L.target!=="setimmediate"&&(K==="checkMailbox"?Ro&&Eg():K&&(Oi(`worker: received unknown command ${K}`),Oi(L)))}catch(ei){throw y1(),ei}};var Li,Ro=!1;Oi=function(...b){b=b.join(" "),console.error(b)},self.alert=function(...b){postMessage({Mb:"alert",text:b.join(" "),qc:yg()})},s.instantiateWasm=(b,L)=>new Promise(K=>{Li=ei=>{ei=new WebAssembly.Instance(ei,fy()),L(ei),K()}}),self.onunhandledrejection=b=>{throw b.reason||b},self.onmessage=f}s.wasmBinary&&(hi=s.wasmBinary);var wi,xi,Mo,zo,Ti,Ei,pi,gi,Ni,Zo,Jo,Kh,Hh,Xh=!1;function Ko(){var f=wi.buffer;s.HEAP8=zo=new Int8Array(f),s.HEAP16=Ei=new Int16Array(f),s.HEAPU8=Ti=new Uint8Array(f),s.HEAPU16=pi=new Uint16Array(f),s.HEAP32=gi=new Int32Array(f),s.HEAPU32=Ni=new Uint32Array(f),s.HEAPF32=Zo=new Float32Array(f),s.HEAPF64=Hh=new Float64Array(f),s.HEAP64=Jo=new BigInt64Array(f),s.HEAPU64=Kh=new BigUint64Array(f)}if(!y){if(!((wi=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0})).buffer instanceof C))throw Oi("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Error("bad memory");Ko()}var Ho=[],Yo=[],Qh=[],kf=0,dg=null;function ly(){if(--kf==0&&dg){var f=dg;dg=null,f()}}function fg(f){throw Oi(f="Aborted("+f+")"),Xh=!0,Mo=1,f=new WebAssembly.RuntimeError(f+". Build with -sASSERTIONS for more info."),l(f),f}var Fg,dy=f=>f.startsWith("data:application/octet-stream;base64,"),py=f=>f.startsWith("file://");function cy(f){if(f==Fg&&hi)return new Uint8Array(hi);if(X)return X(f);throw"both async and sync fetching of the wasm failed"}function hy(f,b,L){return function(K){if(!hi&&(h||g)){if(typeof fetch=="function"&&!py(K))return fetch(K,{credentials:"same-origin"}).then(ei=>{if(!ei.ok)throw`failed to load wasm binary file at '${K}'`;return ei.arrayBuffer()}).catch(()=>cy(K));if(A)return new Promise((ei,si)=>{A(K,ci=>ei(new Uint8Array(ci)),si)})}return Promise.resolve().then(()=>cy(K))}(f).then(K=>WebAssembly.instantiate(K,b)).then(L,K=>{Oi(`failed to asynchronously prepare wasm: ${K}`),fg(K)})}function fy(){return{a:{O:B1,Aa:R1,b:V1,aa:_y,B:Sy,qa:Iy,Y:Ay,_:ky,ra:Py,oa:Cy,ha:Dy,na:zy,L:Ny,Z:Ry,W:By,pa:Fy,X:My,wa:j1,F:U1,Q:G1,P:q1,E:K1,u:X1,q:Z1,G:J1,A:ib,R:ob,ua:ab,ka:sb,U:ub,ba:lb,H:db,ja:Zg,ta:pb,t:cb,x:mb,o:gb,l:bb,c:Kg,n:$b,j:xb,w:_b,p:Tb,g:Eb,s:Sb,m:Ib,e:Ob,k:Ab,i:kb,h:Pb,d:Cb,ea:Db,fa:zb,ga:Nb,ca:Qy,da:e1,T:Rb,f:Bb,D:Fb,I:Mb,M:Lb,y:Vb,sa:jb,V:Ub,v:r1,z:Gb,N:Hb,S:qb,za:Wb,ya:Kb,la:o1,ma:a1,$:Ug,C:s1,K:u1,ia:l1,J:d1,a:wi,xa:jg,va:h1,r:Jb}}}var Mg={868340:(f,b,L,K,ei)=>{if(s===void 0||!s.Fb)return 1;if((f=Zh(f>>>0)).startsWith("./")&&(f=f.substring(2)),!(f=s.Fb.get(f)))return 2;if(K>>>=0,(b>>>=0)+(L>>>=0)>f.byteLength)return 3;try{let si=f.subarray(b,b+L);switch(ei){case 0:r().set(si,K>>>0);break;case 1:s.cc(K,si);break;default:return 4}return 0}catch{return 4}},869023:(f,b,L)=>{s.dc(f,r().subarray(b>>>0,b+L>>>0))},869086:()=>s.ac(),869127:f=>{s.Ob(f)},869163:()=>{s.Vb()},869194:()=>{s.Wb()},869223:()=>{s.$b()},869248:f=>s.Ub(f),869281:f=>s.Yb(f),869313:(f,b,L)=>{s.Nb(f,b,L,!0)},869352:(f,b,L)=>{s.Nb(f,b,L)},869385:()=>typeof wasmOffsetConverter<"u",869442:f=>{s.jb("Abs",f,void 0)},869493:f=>{s.jb("Neg",f,void 0)},869544:f=>{s.jb("Floor",f,void 0)},869597:f=>{s.jb("Ceil",f,void 0)},869649:f=>{s.jb("Reciprocal",f,void 0)},869707:f=>{s.jb("Sqrt",f,void 0)},869759:f=>{s.jb("Exp",f,void 0)},869810:f=>{s.jb("Erf",f,void 0)},869861:f=>{s.jb("Sigmoid",f,void 0)},869916:(f,b,L)=>{s.jb("HardSigmoid",f,{alpha:b,beta:L})},869995:f=>{s.jb("Log",f,void 0)},870046:f=>{s.jb("Sin",f,void 0)},870097:f=>{s.jb("Cos",f,void 0)},870148:f=>{s.jb("Tan",f,void 0)},870199:f=>{s.jb("Asin",f,void 0)},870251:f=>{s.jb("Acos",f,void 0)},870303:f=>{s.jb("Atan",f,void 0)},870355:f=>{s.jb("Sinh",f,void 0)},870407:f=>{s.jb("Cosh",f,void 0)},870459:f=>{s.jb("Asinh",f,void 0)},870512:f=>{s.jb("Acosh",f,void 0)},870565:f=>{s.jb("Atanh",f,void 0)},870618:f=>{s.jb("Tanh",f,void 0)},870670:f=>{s.jb("Not",f,void 0)},870721:(f,b,L)=>{s.jb("Clip",f,{min:b,max:L})},870790:f=>{s.jb("Clip",f,void 0)},870842:(f,b)=>{s.jb("Elu",f,{alpha:b})},870900:f=>{s.jb("Gelu",f,void 0)},870952:f=>{s.jb("Relu",f,void 0)},871004:(f,b)=>{s.jb("LeakyRelu",f,{alpha:b})},871068:(f,b)=>{s.jb("ThresholdedRelu",f,{alpha:b})},871138:(f,b)=>{s.jb("Cast",f,{to:b})},871196:f=>{s.jb("Add",f,void 0)},871247:f=>{s.jb("Sub",f,void 0)},871298:f=>{s.jb("Mul",f,void 0)},871349:f=>{s.jb("Div",f,void 0)},871400:f=>{s.jb("Pow",f,void 0)},871451:f=>{s.jb("Equal",f,void 0)},871504:f=>{s.jb("Greater",f,void 0)},871559:f=>{s.jb("GreaterOrEqual",f,void 0)},871621:f=>{s.jb("Less",f,void 0)},871673:f=>{s.jb("LessOrEqual",f,void 0)},871732:(f,b,L,K,ei)=>{s.jb("ReduceMean",f,{keepDims:!!b,noopWithEmptyAxes:!!L,axes:K?Array.from(n().subarray(K>>>0,ei>>>0)):[]})},871891:(f,b,L,K,ei)=>{s.jb("ReduceMax",f,{keepDims:!!b,noopWithEmptyAxes:!!L,axes:K?Array.from(n().subarray(K>>>0,ei>>>0)):[]})},872049:(f,b,L,K,ei)=>{s.jb("ReduceMin",f,{keepDims:!!b,noopWithEmptyAxes:!!L,axes:K?Array.from(n().subarray(K>>>0,ei>>>0)):[]})},872207:(f,b,L,K,ei)=>{s.jb("ReduceProd",f,{keepDims:!!b,noopWithEmptyAxes:!!L,axes:K?Array.from(n().subarray(K>>>0,ei>>>0)):[]})},872366:(f,b,L,K,ei)=>{s.jb("ReduceSum",f,{keepDims:!!b,noopWithEmptyAxes:!!L,axes:K?Array.from(n().subarray(K>>>0,ei>>>0)):[]})},872524:(f,b,L,K,ei)=>{s.jb("ReduceL1",f,{keepDims:!!b,noopWithEmptyAxes:!!L,axes:K?Array.from(n().subarray(K>>>0,ei>>>0)):[]})},872681:(f,b,L,K,ei)=>{s.jb("ReduceL2",f,{keepDims:!!b,noopWithEmptyAxes:!!L,axes:K?Array.from(n().subarray(K>>>0,ei>>>0)):[]})},872838:(f,b,L,K,ei)=>{s.jb("ReduceLogSum",f,{keepDims:!!b,noopWithEmptyAxes:!!L,axes:K?Array.from(n().subarray(K>>>0,ei>>>0)):[]})},872999:(f,b,L,K,ei)=>{s.jb("ReduceSumSquare",f,{keepDims:!!b,noopWithEmptyAxes:!!L,axes:K?Array.from(n().subarray(K>>>0,ei>>>0)):[]})},873163:(f,b,L,K,ei)=>{s.jb("ReduceLogSumExp",f,{keepDims:!!b,noopWithEmptyAxes:!!L,axes:K?Array.from(n().subarray(K>>>0,ei>>>0)):[]})},873327:f=>{s.jb("Where",f,void 0)},873380:(f,b,L)=>{s.jb("Transpose",f,{perm:b?Array.from(n().subarray(b>>>0,L>>>0)):[]})},873488:(f,b,L,K)=>{s.jb("DepthToSpace",f,{blocksize:b,mode:Zh(L),format:K?"NHWC":"NCHW"})},873621:(f,b,L,K)=>{s.jb("DepthToSpace",f,{blocksize:b,mode:Zh(L),format:K?"NHWC":"NCHW"})},873754:(f,b,L,K,ei,si,ci,fi,bi,vi,Ii,Uo,Xo,di,jo)=>{s.jb("ConvTranspose",f,{format:bi?"NHWC":"NCHW",autoPad:b,dilations:[L],group:K,kernelShape:[ei],pads:[si,ci],strides:[fi],wIsConst:()=>!!t()[vi>>>0],outputPadding:Ii?Array.from(n().subarray(Ii>>>0,Uo>>>0)):[],outputShape:Xo?Array.from(n().subarray(Xo>>>0,di>>>0)):[],activation:Zh(jo)})},874155:(f,b,L,K,ei,si,ci,fi,bi,vi,Ii,Uo,Xo,di)=>{s.jb("ConvTranspose",f,{format:fi?"NHWC":"NCHW",autoPad:b,dilations:Array.from(n().subarray(L>>>0,2+(L>>>0)>>>0)),group:K,kernelShape:Array.from(n().subarray(ei>>>0,2+(ei>>>0)>>>0)),pads:Array.from(n().subarray(si>>>0,4+(si>>>0)>>>0)),strides:Array.from(n().subarray(ci>>>0,2+(ci>>>0)>>>0)),wIsConst:()=>!!t()[bi>>>0],outputPadding:vi?Array.from(n().subarray(vi>>>0,Ii>>>0)):[],outputShape:Uo?Array.from(n().subarray(Uo>>>0,Xo>>>0)):[],activation:Zh(di)})},874720:(f,b,L,K,ei,si,ci,fi,bi,vi,Ii,Uo,Xo,di,jo)=>{s.jb("ConvTranspose",f,{format:bi?"NHWC":"NCHW",autoPad:b,dilations:[L],group:K,kernelShape:[ei],pads:[si,ci],strides:[fi],wIsConst:()=>!!t()[vi>>>0],outputPadding:Ii?Array.from(n().subarray(Ii>>>0,Uo>>>0)):[],outputShape:Xo?Array.from(n().subarray(Xo>>>0,di>>>0)):[],activation:Zh(jo)})},875121:(f,b,L,K,ei,si,ci,fi,bi,vi,Ii,Uo,Xo,di)=>{s.jb("ConvTranspose",f,{format:fi?"NHWC":"NCHW",autoPad:b,dilations:Array.from(n().subarray(L>>>0,2+(L>>>0)>>>0)),group:K,kernelShape:Array.from(n().subarray(ei>>>0,2+(ei>>>0)>>>0)),pads:Array.from(n().subarray(si>>>0,4+(si>>>0)>>>0)),strides:Array.from(n().subarray(ci>>>0,2+(ci>>>0)>>>0)),wIsConst:()=>!!t()[bi>>>0],outputPadding:vi?Array.from(n().subarray(vi>>>0,Ii>>>0)):[],outputShape:Uo?Array.from(n().subarray(Uo>>>0,Xo>>>0)):[],activation:Zh(di)})},875686:(f,b)=>{s.jb("GlobalAveragePool",f,{format:b?"NHWC":"NCHW"})},875777:(f,b,L,K,ei,si,ci,fi,bi,vi,Ii,Uo,Xo,di)=>{s.jb("AveragePool",f,{format:di?"NHWC":"NCHW",auto_pad:b,ceil_mode:L,count_include_pad:K,storage_order:ei,dilations:si?Array.from(n().subarray(si>>>0,ci>>>0)):[],kernel_shape:fi?Array.from(n().subarray(fi>>>0,bi>>>0)):[],pads:vi?Array.from(n().subarray(vi>>>0,Ii>>>0)):[],strides:Uo?Array.from(n().subarray(Uo>>>0,Xo>>>0)):[]})},876192:(f,b)=>{s.jb("GlobalAveragePool",f,{format:b?"NHWC":"NCHW"})},876283:(f,b,L,K,ei,si,ci,fi,bi,vi,Ii,Uo,Xo,di)=>{s.jb("AveragePool",f,{format:di?"NHWC":"NCHW",auto_pad:b,ceil_mode:L,count_include_pad:K,storage_order:ei,dilations:si?Array.from(n().subarray(si>>>0,ci>>>0)):[],kernel_shape:fi?Array.from(n().subarray(fi>>>0,bi>>>0)):[],pads:vi?Array.from(n().subarray(vi>>>0,Ii>>>0)):[],strides:Uo?Array.from(n().subarray(Uo>>>0,Xo>>>0)):[]})},876698:(f,b)=>{s.jb("GlobalMaxPool",f,{format:b?"NHWC":"NCHW"})},876785:(f,b,L,K,ei,si,ci,fi,bi,vi,Ii,Uo,Xo,di)=>{s.jb("MaxPool",f,{format:di?"NHWC":"NCHW",auto_pad:b,ceil_mode:L,count_include_pad:K,storage_order:ei,dilations:si?Array.from(n().subarray(si>>>0,ci>>>0)):[],kernel_shape:fi?Array.from(n().subarray(fi>>>0,bi>>>0)):[],pads:vi?Array.from(n().subarray(vi>>>0,Ii>>>0)):[],strides:Uo?Array.from(n().subarray(Uo>>>0,Xo>>>0)):[]})},877196:(f,b)=>{s.jb("GlobalMaxPool",f,{format:b?"NHWC":"NCHW"})},877283:(f,b,L,K,ei,si,ci,fi,bi,vi,Ii,Uo,Xo,di)=>{s.jb("MaxPool",f,{format:di?"NHWC":"NCHW",auto_pad:b,ceil_mode:L,count_include_pad:K,storage_order:ei,dilations:si?Array.from(n().subarray(si>>>0,ci>>>0)):[],kernel_shape:fi?Array.from(n().subarray(fi>>>0,bi>>>0)):[],pads:vi?Array.from(n().subarray(vi>>>0,Ii>>>0)):[],strides:Uo?Array.from(n().subarray(Uo>>>0,Xo>>>0)):[]})},877694:(f,b,L,K,ei)=>{s.jb("Gemm",f,{alpha:b,beta:L,transA:K,transB:ei})},877798:f=>{s.jb("MatMul",f,void 0)},877852:(f,b,L,K)=>{s.jb("ArgMax",f,{keepDims:!!b,selectLastIndex:!!L,axis:K})},877960:(f,b,L,K)=>{s.jb("ArgMin",f,{keepDims:!!b,selectLastIndex:!!L,axis:K})},878068:(f,b)=>{s.jb("Softmax",f,{axis:b})},878131:(f,b)=>{s.jb("Concat",f,{axis:b})},878191:(f,b,L,K,ei)=>{s.jb("Split",f,{axis:b,numOutputs:L,splitSizes:K?Array.from(n().subarray(K>>>0,ei>>>0)):[]})},878331:f=>{s.jb("Expand",f,void 0)},878385:(f,b)=>{s.jb("Gather",f,{axis:Number(b)})},878456:(f,b)=>{s.jb("GatherElements",f,{axis:Number(b)})},878535:(f,b,L,K,ei,si,ci,fi,bi,vi,Ii)=>{s.jb("Resize",f,{antialias:b,axes:L?Array.from(n().subarray(L>>>0,K>>>0)):[],coordinateTransformMode:Zh(ei),cubicCoeffA:si,excludeOutside:ci,extrapolationValue:fi,keepAspectRatioPolicy:Zh(bi),mode:Zh(vi),nearestMode:Zh(Ii)})},878881:(f,b,L,K,ei,si,ci)=>{s.jb("Slice",f,{starts:b?Array.from(n().subarray(b>>>0,L>>>0)):[],ends:K?Array.from(n().subarray(K>>>0,ei>>>0)):[],axes:si?Array.from(n().subarray(si>>>0,ci>>>0)):[]})},879097:f=>{s.jb("Tile",f,void 0)},879149:(f,b,L)=>{s.jb("InstanceNormalization",f,{epsilon:b,format:L?"NHWC":"NCHW"})},879263:(f,b,L)=>{s.jb("InstanceNormalization",f,{epsilon:b,format:L?"NHWC":"NCHW"})},879377:f=>{s.jb("Range",f,void 0)},879430:(f,b)=>{s.jb("Einsum",f,{equation:Zh(b)})},879511:(f,b,L,K,ei)=>{s.jb("Pad",f,{mode:b,value:L,pads:K?Array.from(n().subarray(K>>>0,ei>>>0)):[]})},879638:(f,b,L,K,ei,si)=>{s.jb("BatchNormalization",f,{epsilon:b,momentum:L,spatial:!!ei,trainingMode:!!K,format:si?"NHWC":"NCHW"})},879807:(f,b,L,K,ei,si)=>{s.jb("BatchNormalization",f,{epsilon:b,momentum:L,spatial:!!ei,trainingMode:!!K,format:si?"NHWC":"NCHW"})},879976:(f,b,L)=>{s.jb("CumSum",f,{exclusive:Number(b),reverse:Number(L)})},880073:(f,b,L)=>{s.jb("DequantizeLinear",f,{axis:b,blockSize:L})},880163:(f,b,L,K,ei,si,ci,fi,bi)=>{s.jb("Attention",f,{numHeads:b,isUnidirectional:L,maskFilterValue:K,scale:ei,doRotary:si,qkvHiddenSizes:ci?Array.from(n().subarray(Number(fi)>>>0,Number(fi)+ci>>>0)):[],pastPresentShareBuffer:!!bi})},880435:f=>{s.jb("BiasAdd",f,void 0)},880490:f=>{s.jb("BiasSplitGelu",f,void 0)},880551:f=>{s.jb("FastGelu",f,void 0)},880607:(f,b,L,K,ei,si,ci,fi,bi,vi,Ii,Uo,Xo,di,jo,jh)=>{s.jb("Conv",f,{format:Uo?"NHWC":"NCHW",auto_pad:b,dilations:L?Array.from(n().subarray(L>>>0,K>>>0)):[],group:ei,kernel_shape:si?Array.from(n().subarray(si>>>0,ci>>>0)):[],pads:fi?Array.from(n().subarray(fi>>>0,bi>>>0)):[],strides:vi?Array.from(n().subarray(vi>>>0,Ii>>>0)):[],w_is_const:()=>!!t()[Xo>>>0],activation:Zh(di),activation_params:jo?Array.from(d().subarray(jo>>>0,jh>>>0)):[]})},881103:f=>{s.jb("Gelu",f,void 0)},881155:(f,b,L,K)=>{s.jb("GroupQueryAttention",f,{numHeads:b,kvNumHeads:L,scale:K})},881268:(f,b,L,K)=>{s.jb("LayerNormalization",f,{axis:b,epsilon:L,simplified:!!K})},881379:(f,b,L,K)=>{s.jb("LayerNormalization",f,{axis:b,epsilon:L,simplified:!!K})},881490:(f,b,L,K,ei,si)=>{s.jb("MatMulNBits",f,{k:b,n:L,accuracyLevel:K,bits:ei,blockSize:si})},881617:(f,b,L,K,ei,si)=>{s.jb("MultiHeadAttention",f,{numHeads:b,isUnidirectional:L,maskFilterValue:K,scale:ei,doRotary:si})},881776:(f,b)=>{s.jb("QuickGelu",f,{alpha:b})},881840:(f,b,L,K,ei)=>{s.jb("RotaryEmbedding",f,{interleaved:!!b,numHeads:L,rotaryEmbeddingDim:K,scale:ei})},881979:(f,b,L)=>{s.jb("SkipLayerNormalization",f,{epsilon:b,simplified:!!L})},882081:(f,b,L)=>{s.jb("SkipLayerNormalization",f,{epsilon:b,simplified:!!L})},882183:(f,b,L,K)=>{s.jb("GatherBlockQuantized",f,{gatherAxis:b,quantizeAxis:L,blockSize:K})},882304:f=>{s.Zb(f)},882338:(f,b)=>s.bc(f,b,s.Eb.fc,s.Eb.errors)};function R1(f,b,L){return Ky(async()=>{await s.Xb(f,b,L)})}function B1(){return typeof wasmOffsetConverter<"u"}function Lg(f){this.name="ExitStatus",this.message=`Program terminated with exit(${f})`,this.status=f}var Vg=f=>{f.terminate(),f.onmessage=()=>{}},my=f=>{og.length==0&&(vy(),wy(og[0]));var b=og.pop();if(!b)return 6;cg.push(b),Dm[f.Ab]=b,b.Ab=f.Ab;var L={cmd:"run",start_routine:f.hc,arg:f.Qb,pthread_ptr:f.Ab};return b.postMessage(L,f.mc),0},pg=0,fc=(f,b,...L)=>{for(var K=2*L.length,ei=ay(),si=oy(8*K),ci=si>>>3,fi=0;fi<L.length;fi++){var bi=L[fi];typeof bi=="bigint"?(Jo[ci+2*fi]=1n,Jo[ci+2*fi+1]=bi):(Jo[ci+2*fi]=0n,p()[ci+2*fi+1>>>0]=bi)}return f=b1(f,0,K,si,b),Ng(ei),f};function jg(f){if(y)return fc(0,1,f);if(Mo=f,!(0<pg)){for(var b of cg)Vg(b);for(b of og)Vg(b);og=[],cg=[],Dm=[],Xh=!0}li(f,new Lg(f))}function gy(f){if(y)return fc(1,0,f);Ug(f)}var Ug=f=>{if(Mo=f,y)throw gy(f),"unwind";jg(f)},og=[],cg=[],yy=[],Dm={},by=f=>{var b=f.Ab;delete Dm[b],og.push(f),cg.splice(cg.indexOf(f),1),f.Ab=0,iy(b)};function $y(){yy.forEach(f=>f())}var wy=f=>new Promise(b=>{f.onmessage=ei=>{var si=(ei=ei.data).cmd;if(ei.targetThread&&ei.targetThread!=yg()){var ci=Dm[ei.targetThread];ci?ci.postMessage(ei,ei.transferList):Oi(`Internal error! Worker sent a message "${si}" to target pthread ${ei.targetThread}, but that thread no longer exists!`)}else si==="checkMailbox"?Eg():si==="spawnThread"?my(ei):si==="cleanupThread"?by(Dm[ei.thread]):si==="killThread"?(ei=ei.thread,si=Dm[ei],delete Dm[ei],Vg(si),iy(ei),cg.splice(cg.indexOf(si),1),si.Ab=0):si==="cancelThread"?Dm[ei.thread].postMessage({cmd:"cancel"}):si==="loaded"?(f.loaded=!0,b(f)):si==="alert"?alert(`Thread ${ei.threadId}: ${ei.text}`):ei.target==="setimmediate"?f.postMessage(ei):si==="callHandler"?s[ei.handler](...ei.args):si&&Oi(`worker sent an unknown command ${si}`)},f.onerror=ei=>{throw Oi(`worker sent an error! ${ei.filename}:${ei.lineno}: ${ei.message}`),ei};var L,K=[];for(L of[])s.hasOwnProperty(L)&&K.push(L);f.postMessage({cmd:"load",handlers:K,wasmMemory:wi,wasmModule:xi})});function vy(){var f=new Worker(new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});og.push(f)}var Tg=f=>{for(;0<f.length;)f.shift()(s)},F1=()=>{var f=yg(),b=a()[f+52>>>2>>>0];f=a()[f+56>>>2>>>0],w1(b,b-f),Ng(b)},M1=(f,b)=>{pg=0,f=v1(f,b),0<pg?Mo=f:zg(f)};class L1{constructor(b){this.Jb=b-24}}function V1(f,b,L){var K=new L1(f>>>=0);throw b>>>=0,L>>>=0,a()[K.Jb+16>>>2>>>0]=0,a()[K.Jb+4>>>2>>>0]=b,a()[K.Jb+8>>>2>>>0]=L,f}function xy(f,b,L,K){return y?fc(2,1,f,b,L,K):_y(f,b,L,K)}function _y(f,b,L,K){if(f>>>=0,b>>>=0,L>>>=0,K>>>=0,C===void 0)return Oi("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var ei=[];return y&&ei.length===0?xy(f,b,L,K):(f={hc:L,Ab:f,Qb:K,mc:ei},y?(f.Mb="spawnThread",postMessage(f,ei),0):my(f))}var Ty=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,Ey=(f,b,L)=>{var K=(b>>>=0)+L;for(L=b;f[L]&&!(L>=K);)++L;if(16<L-b&&f.buffer&&Ty)return Ty.decode(f.buffer instanceof C?f.slice(b,L):f.subarray(b,L));for(K="";b<L;){var ei=f[b++];if(128&ei){var si=63&f[b++];if((224&ei)==192)K+=String.fromCharCode((31&ei)<<6|si);else{var ci=63&f[b++];65536>(ei=(240&ei)==224?(15&ei)<<12|si<<6|ci:(7&ei)<<18|si<<12|ci<<6|63&f[b++])?K+=String.fromCharCode(ei):(ei-=65536,K+=String.fromCharCode(55296|ei>>10,56320|1023&ei))}}else K+=String.fromCharCode(ei)}return K},Zh=(f,b)=>(f>>>=0)?Ey(r(),f,b):"";function Sy(f,b,L){return y?fc(3,1,f,b,L):0}function Iy(f,b){if(y)return fc(4,1,f,b)}var Gg=f=>{for(var b=0,L=0;L<f.length;++L){var K=f.charCodeAt(L);127>=K?b++:2047>=K?b+=2:55296<=K&&57343>=K?(b+=4,++L):b+=3}return b},Oy=(f,b,L,K)=>{if(!(0<K))return 0;var ei=L>>>=0;K=L+K-1;for(var si=0;si<f.length;++si){var ci=f.charCodeAt(si);if(55296<=ci&&57343>=ci&&(ci=65536+((1023&ci)<<10)|1023&f.charCodeAt(++si)),127>=ci){if(L>=K)break;b[L++>>>0]=ci}else{if(2047>=ci){if(L+1>=K)break;b[L++>>>0]=192|ci>>6}else{if(65535>=ci){if(L+2>=K)break;b[L++>>>0]=224|ci>>12}else{if(L+3>=K)break;b[L++>>>0]=240|ci>>18,b[L++>>>0]=128|ci>>12&63}b[L++>>>0]=128|ci>>6&63}b[L++>>>0]=128|63&ci}}return b[L>>>0]=0,L-ei},mg=(f,b,L)=>Oy(f,r(),b,L);function Ay(f,b){if(y)return fc(5,1,f,b)}function ky(f,b,L){if(y)return fc(6,1,f,b,L)}function Py(f,b,L){return y?fc(7,1,f,b,L):0}function Cy(f,b){if(y)return fc(8,1,f,b)}function Dy(f,b,L){if(y)return fc(9,1,f,b,L)}function zy(f,b,L,K){if(y)return fc(10,1,f,b,L,K)}function Ny(f,b,L,K){if(y)return fc(11,1,f,b,L,K)}function Ry(f,b,L,K){if(y)return fc(12,1,f,b,L,K)}function By(f){if(y)return fc(13,1,f)}function Fy(f,b){if(y)return fc(14,1,f,b)}function My(f,b,L){if(y)return fc(15,1,f,b,L)}var Ly,ag,j1=()=>{fg("")},eg=f=>{for(var b="";r()[f>>>0];)b+=Ly[r()[f++>>>0]];return b},Hg={},qg={};function ng(f,b,L={}){if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(K,ei,si={}){var ci=ei.name;if(!K)throw new ag(`type "${ci}" must have a positive integer typeid pointer`);if(qg.hasOwnProperty(K)){if(si.Sb)return;throw new ag(`Cannot register type '${ci}' twice`)}qg[K]=ei,Hg.hasOwnProperty(K)&&(ei=Hg[K],delete Hg[K],ei.forEach(fi=>fi()))}(f,b,L)}var Vy=(f,b,L)=>{switch(b){case 1:return L?K=>t()[K>>>0]:K=>r()[K>>>0];case 2:return L?K=>o()[K>>>1>>>0]:K=>u()[K>>>1>>>0];case 4:return L?K=>n()[K>>>2>>>0]:K=>a()[K>>>2>>>0];case 8:return L?K=>Jo[K>>>3]:K=>Kh[K>>>3];default:throw new TypeError(`invalid integer width (${b}): ${f}`)}};function U1(f,b,L){L>>>=0,ng(f>>>=0,{name:b=eg(b>>>0),fromWireType:K=>K,toWireType:function(K,ei){if(typeof ei!="bigint"&&typeof ei!="number")throw ei=ei===null?"null":(K=typeof ei)=="object"||K==="array"||K==="function"?ei.toString():""+ei,new TypeError(`Cannot convert "${ei}" to ${this.name}`);return typeof ei=="number"&&(ei=BigInt(ei)),ei},argPackAdvance:sg,readValueFromPointer:Vy(b,L,b.indexOf("u")==-1),Db:null})}var sg=8;function G1(f,b,L,K){ng(f>>>=0,{name:b=eg(b>>>0),fromWireType:function(ei){return!!ei},toWireType:function(ei,si){return si?L:K},argPackAdvance:sg,readValueFromPointer:function(ei){return this.fromWireType(r()[ei>>>0])},Db:null})}var Wg=[],ig=[];function Kg(f){9<(f>>>=0)&&--ig[f+1]==0&&(ig[f]=void 0,Wg.push(f))}var Jh=f=>{if(!f)throw new ag("Cannot use deleted val. handle = "+f);return ig[f]},Yh=f=>{switch(f){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let b=Wg.pop()||ig.length;return ig[b]=f,ig[b+1]=1,b}};function Xg(f){return this.fromWireType(a()[f>>>2>>>0])}var H1={name:"emscripten::val",fromWireType:f=>{var b=Jh(f);return Kg(f),b},toWireType:(f,b)=>Yh(b),argPackAdvance:sg,readValueFromPointer:Xg,Db:null};function q1(f){return ng(f>>>0,H1)}var W1=(f,b)=>{switch(b){case 4:return function(L){return this.fromWireType(d()[L>>>2>>>0])};case 8:return function(L){return this.fromWireType(p()[L>>>3>>>0])};default:throw new TypeError(`invalid float width (${b}): ${f}`)}};function K1(f,b,L){L>>>=0,ng(f>>>=0,{name:b=eg(b>>>0),fromWireType:K=>K,toWireType:(K,ei)=>ei,argPackAdvance:sg,readValueFromPointer:W1(b,L),Db:null})}function X1(f,b,L,K,ei){if(f>>>=0,L>>>=0,b=eg(b>>>0),ei===-1&&(ei=4294967295),ei=fi=>fi,K===0){var si=32-8*L;ei=fi=>fi<<si>>>si}var ci=b.includes("unsigned")?function(fi,bi){return bi>>>0}:function(fi,bi){return bi};ng(f,{name:b,fromWireType:ei,toWireType:ci,argPackAdvance:sg,readValueFromPointer:Vy(b,L,K!==0),Db:null})}function Z1(f,b,L){function K(si){var ci=a()[si>>>2>>>0];return si=a()[si+4>>>2>>>0],new ei(t().buffer,si,ci)}var ei=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][b];ng(f>>>=0,{name:L=eg(L>>>0),fromWireType:K,argPackAdvance:sg,readValueFromPointer:K},{Sb:!0})}function J1(f,b){f>>>=0;var L=(b=eg(b>>>0))==="std::string";ng(f,{name:b,fromWireType:function(K){var ei=a()[K>>>2>>>0],si=K+4;if(L)for(var ci=si,fi=0;fi<=ei;++fi){var bi=si+fi;if(fi==ei||r()[bi>>>0]==0){if(ci=Zh(ci,bi-ci),vi===void 0)var vi=ci;else vi+="\0",vi+=ci;ci=bi+1}}else{for(vi=Array(ei),fi=0;fi<ei;++fi)vi[fi]=String.fromCharCode(r()[si+fi>>>0]);vi=vi.join("")}return rg(K),vi},toWireType:function(K,ei){ei instanceof ArrayBuffer&&(ei=new Uint8Array(ei));var si=typeof ei=="string";if(!(si||ei instanceof Uint8Array||ei instanceof Uint8ClampedArray||ei instanceof Int8Array))throw new ag("Cannot pass non-string to std::string");var ci=L&&si?Gg(ei):ei.length,fi=Dg(4+ci+1),bi=fi+4;if(a()[fi>>>2>>>0]=ci,L&&si)mg(ei,bi,ci+1);else if(si)for(si=0;si<ci;++si){var vi=ei.charCodeAt(si);if(255<vi)throw rg(bi),new ag("String has UTF-16 code units that do not fit in 8 bits");r()[bi+si>>>0]=vi}else for(si=0;si<ci;++si)r()[bi+si>>>0]=ei[si];return K!==null&&K.push(rg,fi),fi},argPackAdvance:sg,readValueFromPointer:Xg,Db(K){rg(K)}})}var jy=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Y1=(f,b)=>{for(var L=f>>1,K=L+b/2;!(L>=K)&&u()[L>>>0];)++L;if(32<(L<<=1)-f&&jy)return jy.decode(r().slice(f,L));for(L="",K=0;!(K>=b/2);++K){var ei=o()[f+2*K>>>1>>>0];if(ei==0)break;L+=String.fromCharCode(ei)}return L},Q1=(f,b,L)=>{if(L??=2147483647,2>L)return 0;var K=b;L=(L-=2)<2*f.length?L/2:f.length;for(var ei=0;ei<L;++ei){var si=f.charCodeAt(ei);o()[b>>>1>>>0]=si,b+=2}return o()[b>>>1>>>0]=0,b-K},eb=f=>2*f.length,tb=(f,b)=>{for(var L=0,K="";!(L>=b/4);){var ei=n()[f+4*L>>>2>>>0];if(ei==0)break;++L,65536<=ei?(ei-=65536,K+=String.fromCharCode(55296|ei>>10,56320|1023&ei)):K+=String.fromCharCode(ei)}return K},rb=(f,b,L)=>{if(b>>>=0,L??=2147483647,4>L)return 0;var K=b;L=K+L-4;for(var ei=0;ei<f.length;++ei){var si=f.charCodeAt(ei);if(55296<=si&&57343>=si&&(si=65536+((1023&si)<<10)|1023&f.charCodeAt(++ei)),n()[b>>>2>>>0]=si,(b+=4)+4>L)break}return n()[b>>>2>>>0]=0,b-K},nb=f=>{for(var b=0,L=0;L<f.length;++L){var K=f.charCodeAt(L);55296<=K&&57343>=K&&++L,b+=4}return b};function ib(f,b,L){if(f>>>=0,b>>>=0,L=eg(L>>>=0),b===2)var K=Y1,ei=Q1,si=eb,ci=fi=>u()[fi>>>1>>>0];else b===4&&(K=tb,ei=rb,si=nb,ci=fi=>a()[fi>>>2>>>0]);ng(f,{name:L,fromWireType:fi=>{for(var bi,vi=a()[fi>>>2>>>0],Ii=fi+4,Uo=0;Uo<=vi;++Uo){var Xo=fi+4+Uo*b;Uo!=vi&&ci(Xo)!=0||(Ii=K(Ii,Xo-Ii),bi===void 0?bi=Ii:(bi+="\0",bi+=Ii),Ii=Xo+b)}return rg(fi),bi},toWireType:(fi,bi)=>{if(typeof bi!="string")throw new ag(`Cannot pass non-string to C++ string type ${L}`);var vi=si(bi),Ii=Dg(4+vi+b);return a()[Ii>>>2>>>0]=vi/b,ei(bi,Ii+4,vi+b),fi!==null&&fi.push(rg,Ii),Ii},argPackAdvance:sg,readValueFromPointer:Xg,Db(fi){rg(fi)}})}function ob(f,b){ng(f>>>=0,{Tb:!0,name:b=eg(b>>>0),argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})}var ab=()=>1;function sb(f){ny(f>>>0,!g,1,!h,131072,!1),$y()}var Uy=f=>{if(!Xh)try{if(f(),!(0<pg))try{y?zg(Mo):Ug(Mo)}catch(b){b instanceof Lg||b=="unwind"||li(1,b)}}catch(b){b instanceof Lg||b=="unwind"||li(1,b)}};function Zg(f){f>>>=0,typeof Atomics.nc=="function"&&(Atomics.nc(n(),f>>>2,f).value.then(Eg),f+=128,Atomics.store(n(),f>>>2,1))}var Eg=()=>{var f=yg();f&&(Zg(f),Uy($1))};function ub(f,b){(f>>>=0)==b>>>0?setTimeout(Eg):y?postMessage({targetThread:f,cmd:"checkMailbox"}):(f=Dm[f])&&f.postMessage({cmd:"checkMailbox"})}var Jg=[];function lb(f,b,L,K,ei){for(b>>>=0,K/=2,Jg.length=K,L=ei>>>0>>>3,ei=0;ei<K;ei++)Jg[ei]=Jo[L+2*ei]?Jo[L+2*ei+1]:p()[L+2*ei+1>>>0];return(b?Mg[b]:Yb[f])(...Jg)}function db(f){f>>>=0,y?postMessage({cmd:"cleanupThread",thread:f}):by(Dm[f])}function pb(f){}var Yg=(f,b)=>{var L=qg[f];if(L===void 0)throw f=m1(f),L=eg(f),rg(f),new ag(`${b} has unknown type ${L}`);return L},Gy=(f,b,L)=>{var K=[];return f=f.toWireType(K,L),K.length&&(a()[b>>>2>>>0]=Yh(K)),f};function cb(f,b,L){return b>>>=0,L>>>=0,f=Jh(f>>>0),b=Yg(b,"emval::as"),Gy(b,L,f)}var Sg=f=>{try{f()}catch(b){fg(b)}},ug=0,tg=null,Hy=0,Ig=[],qy={},Wy={},hb=0,Qg=null,fb=[];function Ky(f){return function(b){if(!Xh){if(ug===0){var L=!1,K=!1;b((ei=0)=>{if(!Xh&&(Hy=ei,L=!0,K)){ug=2,Sg(()=>T1(tg)),typeof Browser<"u"&&Browser.Kb.Rb&&Browser.Kb.resume(),ei=!1;try{var si=function(){var bi=n()[tg+8>>>2>>>0];return bi=Si[Wy[bi]],--pg,bi()}()}catch(bi){si=bi,ei=!0}var ci=!1;if(!tg){var fi=Qg;fi&&(Qg=null,(ei?fi.reject:fi.resolve)(si),ci=!0)}if(ei&&!ci)throw si}}),K=!0,L||(ug=1,tg=function(){var ei=Dg(65548),si=ei+12;a()[ei>>>2>>>0]=si,a()[ei+4>>>2>>>0]=si+65536,si=Ig[0];var ci=qy[si];return ci===void 0&&(ci=hb++,qy[si]=ci,Wy[ci]=si),si=ci,n()[ei+8>>>2>>>0]=si,ei}(),typeof Browser<"u"&&Browser.Kb.Rb&&Browser.Kb.pause(),Sg(()=>x1(tg)))}else ug===2?(ug=0,Sg(E1),rg(tg),tg=null,fb.forEach(Uy)):fg(`invalid state: ${ug}`);return Hy}}(b=>{f().then(b)})}function mb(f){return f>>>=0,Ky(()=>(f=Jh(f)).then(Yh))}var Og=[];function gb(f,b,L,K){return L>>>=0,K>>>=0,(f=Og[f>>>0])(null,b=Jh(b>>>0),L,K)}var yb={},Ag=f=>{var b=yb[f];return b===void 0?eg(f):b};function bb(f,b,L,K,ei){return L>>>=0,K>>>=0,ei>>>=0,(f=Og[f>>>0])(b=Jh(b>>>0),b[L=Ag(L)],K,ei)}var Xy=()=>typeof globalThis=="object"?globalThis:Function("return this")();function $b(f){return(f>>>=0)==0?Yh(Xy()):(f=Ag(f),Yh(Xy()[f]))}var wb=f=>{var b=Og.length;return Og.push(f),b},vb=(f,b)=>{for(var L=Array(f),K=0;K<f;++K)L[K]=Yg(a()[b+4*K>>>2>>>0],"parameter "+K);return L},Zy=(f,b)=>Object.defineProperty(b,"name",{value:f});function xb(f,b,L){var K=(b=vb(f,b>>>0)).shift();f--;var ei=`return function (obj, func, destructorsRef, args) {
`,si=0,ci=[];L===0&&ci.push("obj");for(var fi=["retType"],bi=[K],vi=0;vi<f;++vi)ci.push("arg"+vi),fi.push("argType"+vi),bi.push(b[vi]),ei+=`  var arg${vi} = argType${vi}.readValueFromPointer(args${si?"+"+si:""});
`,si+=b[vi].argPackAdvance;return ei+=`  var rv = ${L===1?"new func":"func.call"}(${ci.join(", ")});
`,K.Tb||(fi.push("emval_returnValue"),bi.push(Gy),ei+=`  return emval_returnValue(retType, destructorsRef, rv);
`),fi.push(ei+`};
`),f=function(Ii){var Uo=Function;if(!(Uo instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof Uo} which is not a function`);var Xo=Zy(Uo.name||"unknownFunctionName",function(){});return Xo.prototype=Uo.prototype,Xo=new Xo,(Ii=Uo.apply(Xo,Ii))instanceof Object?Ii:Xo}(fi)(...bi),L=`methodCaller<(${b.map(Ii=>Ii.name).join(", ")}) => ${K.name}>`,wb(Zy(L,f))}function _b(f){return f=Ag(f>>>0),Yh(s[f])}function Tb(f,b){return b>>>=0,f=Jh(f>>>0),b=Jh(b),Yh(f[b])}function Eb(f){9<(f>>>=0)&&(ig[f+1]+=1)}function Sb(){return Yh([])}function Ib(f){f=Jh(f>>>0);for(var b=Array(f.length),L=0;L<f.length;L++)b[L]=f[L];return Yh(b)}function Ob(f){return Yh(Ag(f>>>0))}function Ab(){return Yh({})}function kb(f){for(var b=Jh(f>>>=0);b.length;){var L=b.pop();b.pop()(L)}Kg(f)}function Pb(f,b,L){b>>>=0,L>>>=0,f=Jh(f>>>0),b=Jh(b),L=Jh(L),f[b]=L}function Cb(f,b){return b>>>=0,f=(f=Yg(f>>>0,"_emval_take_value")).readValueFromPointer(b),Yh(f)}function Db(f,b){f=-9007199254740992>f||9007199254740992<f?NaN:Number(f),b>>>=0,f=new Date(1e3*f),n()[b>>>2>>>0]=f.getUTCSeconds(),n()[b+4>>>2>>>0]=f.getUTCMinutes(),n()[b+8>>>2>>>0]=f.getUTCHours(),n()[b+12>>>2>>>0]=f.getUTCDate(),n()[b+16>>>2>>>0]=f.getUTCMonth(),n()[b+20>>>2>>>0]=f.getUTCFullYear()-1900,n()[b+24>>>2>>>0]=f.getUTCDay(),f=(f.getTime()-Date.UTC(f.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,n()[b+28>>>2>>>0]=f}var gg=f=>f%4==0&&(f%100!=0||f%400==0),Jy=[0,31,60,91,121,152,182,213,244,274,305,335],Yy=[0,31,59,90,120,151,181,212,243,273,304,334];function zb(f,b){f=-9007199254740992>f||9007199254740992<f?NaN:Number(f),b>>>=0,f=new Date(1e3*f),n()[b>>>2>>>0]=f.getSeconds(),n()[b+4>>>2>>>0]=f.getMinutes(),n()[b+8>>>2>>>0]=f.getHours(),n()[b+12>>>2>>>0]=f.getDate(),n()[b+16>>>2>>>0]=f.getMonth(),n()[b+20>>>2>>>0]=f.getFullYear()-1900,n()[b+24>>>2>>>0]=f.getDay();var L=(gg(f.getFullYear())?Jy:Yy)[f.getMonth()]+f.getDate()-1|0;n()[b+28>>>2>>>0]=L,n()[b+36>>>2>>>0]=-60*f.getTimezoneOffset(),L=new Date(f.getFullYear(),6,1).getTimezoneOffset();var K=new Date(f.getFullYear(),0,1).getTimezoneOffset();f=0|(L!=K&&f.getTimezoneOffset()==Math.min(K,L)),n()[b+32>>>2>>>0]=f}function Nb(f){f>>>=0;var b=new Date(n()[f+20>>>2>>>0]+1900,n()[f+16>>>2>>>0],n()[f+12>>>2>>>0],n()[f+8>>>2>>>0],n()[f+4>>>2>>>0],n()[f>>>2>>>0],0),L=n()[f+32>>>2>>>0],K=b.getTimezoneOffset(),ei=new Date(b.getFullYear(),6,1).getTimezoneOffset(),si=new Date(b.getFullYear(),0,1).getTimezoneOffset(),ci=Math.min(si,ei);return 0>L?n()[f+32>>>2>>>0]=+(ei!=si&&ci==K):0<L!=(ci==K)&&(ei=Math.max(si,ei),b.setTime(b.getTime()+6e4*((0<L?ci:ei)-K))),n()[f+24>>>2>>>0]=b.getDay(),L=(gg(b.getFullYear())?Jy:Yy)[b.getMonth()]+b.getDate()-1|0,n()[f+28>>>2>>>0]=L,n()[f>>>2>>>0]=b.getSeconds(),n()[f+4>>>2>>>0]=b.getMinutes(),n()[f+8>>>2>>>0]=b.getHours(),n()[f+12>>>2>>>0]=b.getDate(),n()[f+16>>>2>>>0]=b.getMonth(),n()[f+20>>>2>>>0]=b.getYear(),f=b.getTime(),BigInt(isNaN(f)?-1:f/1e3)}function Qy(f,b,L,K,ei,si,ci){return y?fc(16,1,f,b,L,K,ei,si,ci):-52}function e1(f,b,L,K,ei,si){if(y)return fc(17,1,f,b,L,K,ei,si)}function Rb(f,b,L,K){f>>>=0,b>>>=0,L>>>=0,K>>>=0;var ei=new Date().getFullYear(),si=new Date(ei,0,1),ci=new Date(ei,6,1);ei=si.getTimezoneOffset();var fi=ci.getTimezoneOffset(),bi=Math.max(ei,fi);a()[f>>>2>>>0]=60*bi,n()[b>>>2>>>0]=+(ei!=fi),si=(f=vi=>vi.toLocaleTimeString(void 0,{hour12:!1,timeZoneName:"short"}).split(" ")[1])(si),ci=f(ci),fi<ei?(mg(si,L,17),mg(ci,K,17)):(mg(si,K,17),mg(ci,L,17))}var ey=[],t1=(f,b)=>{ey.length=0;for(var L;L=r()[f++>>>0];){var K=L!=105;b+=(K&=L!=112)&&b%8?4:0,ey.push(L==112?a()[b>>>2>>>0]:L==106?Jo[b>>>3]:L==105?n()[b>>>2>>>0]:p()[b>>>3>>>0]),b+=K?8:4}return ey};function Bb(f,b,L){return f>>>=0,b=t1(b>>>0,L>>>0),Mg[f](...b)}function Fb(f,b,L){return f>>>=0,b=t1(b>>>0,L>>>0),Mg[f](...b)}var Mb=()=>{},Lb=()=>Date.now();function Vb(f,b){return Oi(Zh(f>>>0,b>>>0))}var r1,jb=()=>{throw pg+=1,"unwind"};function Ub(){return 4294901760}r1=()=>performance.timeOrigin+performance.now();var Gb=()=>navigator.hardwareConcurrency;function Hb(){return fg("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function qb(f){f>>>=0;var b=r().length;if(f<=b||4294901760<f)return!1;for(var L=1;4>=L;L*=2){var K=b*(1+.2/L);K=Math.min(K,f+100663296);var ei=Math;K=Math.max(f,K);e:{ei=(ei.min.call(ei,4294901760,K+(65536-K%65536)%65536)-wi.buffer.byteLength+65535)/65536;try{wi.grow(ei),Ko();var si=1;break e}catch{}si=void 0}if(si)return!0}return!1}var kg=()=>(fg("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),bg={},n1=f=>{f.forEach(b=>{kg()})};function Wb(){var f=Error().stack.toString().split(`
`);return f[0]=="Error"&&f.shift(),n1(f),bg.Pb=kg(),bg.ec=f,bg.Pb}function Kb(f,b,L){if(f>>>=0,b>>>=0,bg.Pb==f)var K=bg.ec;else(K=Error().stack.toString().split(`
`))[0]=="Error"&&K.shift(),n1(K);for(var ei=3;K[ei]&&kg()!=f;)++ei;for(f=0;f<L&&K[f+ei];++f)n()[b+4*f>>>2>>>0]=kg();return f}var ty,ry={},i1=()=>{if(!ty){var f,b={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ii};for(f in ry)ry[f]===void 0?delete b[f]:b[f]=ry[f];var L=[];for(f in b)L.push(`${f}=${b[f]}`);ty=L}return ty};function o1(f,b){if(y)return fc(18,1,f,b);f>>>=0,b>>>=0;var L=0;return i1().forEach((K,ei)=>{var si=b+L;for(ei=a()[f+4*ei>>>2>>>0]=si,si=0;si<K.length;++si)t()[ei++>>>0]=K.charCodeAt(si);t()[ei>>>0]=0,L+=K.length+1}),0}function a1(f,b){if(y)return fc(19,1,f,b);f>>>=0,b>>>=0;var L=i1();a()[f>>>2>>>0]=L.length;var K=0;return L.forEach(ei=>K+=ei.length+1),a()[b>>>2>>>0]=K,0}function s1(f){return y?fc(20,1,f):52}function u1(f,b,L,K){return y?fc(21,1,f,b,L,K):52}function l1(f,b,L,K){return y?fc(22,1,f,b,L,K):70}var Xb=[null,[],[]];function d1(f,b,L,K){if(y)return fc(23,1,f,b,L,K);b>>>=0,L>>>=0,K>>>=0;for(var ei=0,si=0;si<L;si++){var ci=a()[b>>>2>>>0],fi=a()[b+4>>>2>>>0];b+=8;for(var bi=0;bi<fi;bi++){var vi=r()[ci+bi>>>0],Ii=Xb[f];vi===0||vi===10?((f===1?Bi:Oi)(Ey(Ii,0)),Ii.length=0):Ii.push(vi)}ei+=fi}return a()[K>>>2>>>0]=ei,0}var p1=[31,29,31,30,31,30,31,31,30,31,30,31],c1=[31,28,31,30,31,30,31,31,30,31,30,31],Zb=(f,b)=>{t().set(f,b>>>0)};function h1(f,b,L,K){function ei(di,jo,jh){for(di=typeof di=="number"?di.toString():di||"";di.length<jo;)di=jh[0]+di;return di}function si(di,jo){return ei(di,jo,"0")}function ci(di,jo){function jh(I1){return 0>I1?-1:0<I1?1:0}var hg;return(hg=jh(di.getFullYear()-jo.getFullYear()))===0&&(hg=jh(di.getMonth()-jo.getMonth()))===0&&(hg=jh(di.getDate()-jo.getDate())),hg}function fi(di){switch(di.getDay()){case 0:return new Date(di.getFullYear()-1,11,29);case 1:return di;case 2:return new Date(di.getFullYear(),0,3);case 3:return new Date(di.getFullYear(),0,2);case 4:return new Date(di.getFullYear(),0,1);case 5:return new Date(di.getFullYear()-1,11,31);case 6:return new Date(di.getFullYear()-1,11,30)}}function bi(di){var jo=di.Bb;for(di=new Date(new Date(di.Cb+1900,0,1).getTime());0<jo;){var jh=di.getMonth(),hg=(gg(di.getFullYear())?p1:c1)[jh];if(!(jo>hg-di.getDate())){di.setDate(di.getDate()+jo);break}jo-=hg-di.getDate()+1,di.setDate(1),11>jh?di.setMonth(jh+1):(di.setMonth(0),di.setFullYear(di.getFullYear()+1))}return jh=new Date(di.getFullYear()+1,0,4),jo=fi(new Date(di.getFullYear(),0,4)),jh=fi(jh),0>=ci(jo,di)?0>=ci(jh,di)?di.getFullYear()+1:di.getFullYear():di.getFullYear()-1}f>>>=0,b>>>=0,L>>>=0,K>>>=0;var vi=a()[K+40>>>2>>>0];for(var Ii in K={kc:n()[K>>>2>>>0],jc:n()[K+4>>>2>>>0],Hb:n()[K+8>>>2>>>0],Lb:n()[K+12>>>2>>>0],Ib:n()[K+16>>>2>>>0],Cb:n()[K+20>>>2>>>0],ub:n()[K+24>>>2>>>0],Bb:n()[K+28>>>2>>>0],rc:n()[K+32>>>2>>>0],ic:n()[K+36>>>2>>>0],lc:vi?Zh(vi):""},L=Zh(L),vi={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})L=L.replace(new RegExp(Ii,"g"),vi[Ii]);var Uo="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Xo="January February March April May June July August September October November December".split(" ");for(Ii in vi={"%a":di=>Uo[di.ub].substring(0,3),"%A":di=>Uo[di.ub],"%b":di=>Xo[di.Ib].substring(0,3),"%B":di=>Xo[di.Ib],"%C":di=>si((di.Cb+1900)/100|0,2),"%d":di=>si(di.Lb,2),"%e":di=>ei(di.Lb,2," "),"%g":di=>bi(di).toString().substring(2),"%G":bi,"%H":di=>si(di.Hb,2),"%I":di=>((di=di.Hb)==0?di=12:12<di&&(di-=12),si(di,2)),"%j":di=>{for(var jo=0,jh=0;jh<=di.Ib-1;jo+=(gg(di.Cb+1900)?p1:c1)[jh++]);return si(di.Lb+jo,3)},"%m":di=>si(di.Ib+1,2),"%M":di=>si(di.jc,2),"%n":()=>`
`,"%p":di=>0<=di.Hb&&12>di.Hb?"AM":"PM","%S":di=>si(di.kc,2),"%t":()=>"	","%u":di=>di.ub||7,"%U":di=>si(Math.floor((di.Bb+7-di.ub)/7),2),"%V":di=>{var jo=Math.floor((di.Bb+7-(di.ub+6)%7)/7);if(2>=(di.ub+371-di.Bb-2)%7&&jo++,jo)jo==53&&((jh=(di.ub+371-di.Bb)%7)==4||jh==3&&gg(di.Cb)||(jo=1));else{jo=52;var jh=(di.ub+7-di.Bb-1)%7;(jh==4||jh==5&&gg(di.Cb%400-1))&&jo++}return si(jo,2)},"%w":di=>di.ub,"%W":di=>si(Math.floor((di.Bb+7-(di.ub+6)%7)/7),2),"%y":di=>(di.Cb+1900).toString().substring(2),"%Y":di=>di.Cb+1900,"%z":di=>{var jo=0<=(di=di.ic);return di=Math.abs(di)/60,(jo?"+":"-")+("0000"+(di/60*100+di%60)).slice(-4)},"%Z":di=>di.lc,"%%":()=>"%"},L=L.replace(/%%/g,"\0\0"),vi)L.includes(Ii)&&(L=L.replace(new RegExp(Ii,"g"),vi[Ii](K)));return Ii=function(di){var jo=Array(Gg(di)+1);return Oy(di,jo,0,jo.length),jo}(L=L.replace(/\0\0/g,"%")),Ii.length>b?0:(Zb(Ii,f),Ii.length-1)}function Jb(f,b,L,K){return h1(f>>>0,b>>>0,L>>>0,K>>>0)}y||function(){for(var f=s.numThreads-1;f--;)vy();Ho.unshift(()=>{kf++,function(b){y?b():Promise.all(og.map(wy)).then(b)}(()=>ly())})}();for(var f1=Array(256),Pg=0;256>Pg;++Pg)f1[Pg]=String.fromCharCode(Pg);Ly=f1,ag=s.BindingError=class extends Error{constructor(f){super(f),this.name="BindingError"}},s.InternalError=class extends Error{constructor(f){super(f),this.name="InternalError"}},ig.push(0,1,void 0,1,null,1,!0,1,!1,1),s.count_emval_handles=()=>ig.length/2-5-Wg.length;var Yb=[jg,gy,xy,Sy,Iy,Ay,ky,Py,Cy,Dy,zy,Ny,Ry,By,Fy,My,Qy,e1,o1,a1,s1,u1,l1,d1],Si=function(){function f(L,K){return Si=L.exports,Si=function(){var ei=Si,si={};for(let[ci,fi]of Object.entries(ei))si[ci]=typeof fi=="function"?(...bi)=>{Ig.push(ci);try{return fi(...bi)}finally{Xh||(Ig.pop(),tg&&ug===1&&Ig.length===0&&(ug=0,pg+=1,Sg(_1),typeof Fibers<"u"&&Fibers.sc()))}}:fi;return si}(),Si=function(){var ei=Si,si=fi=>bi=>fi(bi)>>>0,ci=fi=>()=>fi()>>>0;return(ei=Object.assign({},ei)).Ca=si(ei.Ca),ei.fb=ci(ei.fb),ei.gb=si(ei.gb),ei.emscripten_main_runtime_thread_id=ci(ei.emscripten_main_runtime_thread_id),ei.sb=si(ei.sb),ei.tb=ci(ei.tb),ei}(),yy.push(Si.ib),Yo.unshift(Si.Ba),xi=K,ly(),Si}var b=fy();if(kf++,s.instantiateWasm)try{return s.instantiateWasm(b,f)}catch(L){Oi(`Module.instantiateWasm callback failed with error: ${L}`),l(L)}return Fg||=s.locateFile?dy("ort-wasm-simd-threaded.jsep.wasm")?"ort-wasm-simd-threaded.jsep.wasm":s.locateFile?s.locateFile("ort-wasm-simd-threaded.jsep.wasm",ui):ui+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("ort-wasm-simd-threaded.jsep-Bj7LIWiD.wasm",import.meta.url).href,import.meta.url).href,function(L,K){var ei=Fg;return hi||typeof WebAssembly.instantiateStreaming!="function"||dy(ei)||py(ei)||typeof fetch!="function"?hy(ei,L,K):fetch(ei,{credentials:"same-origin"}).then(si=>WebAssembly.instantiateStreaming(si,L).then(K,function(ci){return Oi(`wasm streaming compile failed: ${ci}`),Oi("falling back to ArrayBuffer instantiation"),hy(ei,L,K)}))}(b,function(L){f(L.instance,L.module)}).catch(l),{}}(),m1=f=>(m1=Si.Ca)(f),g1=()=>(g1=Si.Da)();s._OrtInit=(f,b)=>(s._OrtInit=Si.Ea)(f,b),s._OrtGetLastError=(f,b)=>(s._OrtGetLastError=Si.Fa)(f,b),s._OrtCreateSessionOptions=(f,b,L,K,ei,si,ci,fi,bi,vi)=>(s._OrtCreateSessionOptions=Si.Ga)(f,b,L,K,ei,si,ci,fi,bi,vi),s._OrtAppendExecutionProvider=(f,b)=>(s._OrtAppendExecutionProvider=Si.Ha)(f,b),s._OrtAddFreeDimensionOverride=(f,b,L)=>(s._OrtAddFreeDimensionOverride=Si.Ia)(f,b,L),s._OrtAddSessionConfigEntry=(f,b,L)=>(s._OrtAddSessionConfigEntry=Si.Ja)(f,b,L),s._OrtReleaseSessionOptions=f=>(s._OrtReleaseSessionOptions=Si.Ka)(f),s._OrtCreateSession=(f,b,L)=>(s._OrtCreateSession=Si.La)(f,b,L),s._OrtReleaseSession=f=>(s._OrtReleaseSession=Si.Ma)(f),s._OrtGetInputOutputCount=(f,b,L)=>(s._OrtGetInputOutputCount=Si.Na)(f,b,L),s._OrtGetInputName=(f,b)=>(s._OrtGetInputName=Si.Oa)(f,b),s._OrtGetOutputName=(f,b)=>(s._OrtGetOutputName=Si.Pa)(f,b),s._OrtFree=f=>(s._OrtFree=Si.Qa)(f),s._OrtCreateTensor=(f,b,L,K,ei,si)=>(s._OrtCreateTensor=Si.Ra)(f,b,L,K,ei,si),s._OrtGetTensorData=(f,b,L,K,ei)=>(s._OrtGetTensorData=Si.Sa)(f,b,L,K,ei),s._OrtReleaseTensor=f=>(s._OrtReleaseTensor=Si.Ta)(f),s._OrtCreateRunOptions=(f,b,L,K)=>(s._OrtCreateRunOptions=Si.Ua)(f,b,L,K),s._OrtAddRunConfigEntry=(f,b,L)=>(s._OrtAddRunConfigEntry=Si.Va)(f,b,L),s._OrtReleaseRunOptions=f=>(s._OrtReleaseRunOptions=Si.Wa)(f),s._OrtCreateBinding=f=>(s._OrtCreateBinding=Si.Xa)(f),s._OrtBindInput=(f,b,L)=>(s._OrtBindInput=Si.Ya)(f,b,L),s._OrtBindOutput=(f,b,L,K)=>(s._OrtBindOutput=Si.Za)(f,b,L,K),s._OrtClearBoundOutputs=f=>(s._OrtClearBoundOutputs=Si._a)(f),s._OrtReleaseBinding=f=>(s._OrtReleaseBinding=Si.$a)(f),s._OrtRunWithBinding=(f,b,L,K,ei)=>(s._OrtRunWithBinding=Si.ab)(f,b,L,K,ei),s._OrtRun=(f,b,L,K,ei,si,ci,fi)=>(s._OrtRun=Si.bb)(f,b,L,K,ei,si,ci,fi),s._OrtEndProfiling=f=>(s._OrtEndProfiling=Si.cb)(f),s._JsepOutput=(f,b,L)=>(s._JsepOutput=Si.db)(f,b,L),s._JsepGetNodeName=f=>(s._JsepGetNodeName=Si.eb)(f);var Cg,yg=()=>(yg=Si.fb)(),Dg=s._malloc=f=>(Dg=s._malloc=Si.gb)(f),rg=s._free=f=>(rg=s._free=Si.hb)(f),ny=(f,b,L,K,ei,si)=>(ny=Si.kb)(f,b,L,K,ei,si),y1=()=>(y1=Si.lb)(),b1=(f,b,L,K,ei)=>(b1=Si.mb)(f,b,L,K,ei),iy=f=>(iy=Si.nb)(f),zg=f=>(zg=Si.ob)(f),$1=()=>($1=Si.pb)(),w1=(f,b)=>(w1=Si.qb)(f,b),Ng=f=>(Ng=Si.rb)(f),oy=f=>(oy=Si.sb)(f),ay=()=>(ay=Si.tb)(),v1=s.dynCall_ii=(f,b)=>(v1=s.dynCall_ii=Si.vb)(f,b),x1=f=>(x1=Si.wb)(f),_1=()=>(_1=Si.xb)(),T1=f=>(T1=Si.yb)(f),E1=()=>(E1=Si.zb)();function S1(){0<kf||(y?(i(s),y||Tg(Yo),startWorker(s)):(Tg(Ho),0<kf||Cg||(Cg=!0,s.calledRun=!0,Xh||(y||Tg(Yo),i(s),y||Tg(Qh)))))}return s.___start_em_js=882450,s.___stop_em_js=882672,s.stackSave=()=>ay(),s.stackRestore=f=>Ng(f),s.stackAlloc=f=>oy(f),s.UTF8ToString=Zh,s.stringToUTF8=mg,s.lengthBytesUTF8=Gg,dg=function f(){Cg||S1(),Cg||(dg=f)},S1(),c}),Ep=Pa,globalThis.self?.name==="em-pthread"&&Pa()}),Ut,Pp,zp,Op,Ba,Da,Bp,Ma,qt=V(()=>{Cr(),Ut=import.meta.url??(typeof document<"u"?document.currentScript?.src:typeof self<"u"?self.location?.href:void 0),Pp=typeof location>"u"?void 0:location.origin,zp=(e,t)=>{try{let r=t??Ut;return(r?new URL(e,r):new URL(e)).origin===Pp}catch{return!1}},Op=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Ba=(Ea(),br(ka)).default,Da=async()=>{if(!Ut)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(zp(Ut))return[void 0,Ba()];let e=await Op(Ut);return[e,Ba(e)]},Bp=(Oa(),br(za)).default,Ma=async(e,t,r)=>[void 0,Bp]}),qn,jn,Mr,Ra,Dp,Mp,Ar,Te,gt=V(()=>{qt(),jn=!1,Mr=!1,Ra=!1,Dp=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Mp=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ar=async e=>{if(jn)return Promise.resolve();if(Mr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ra)throw new Error("previous call to 'initializeWebAssembly()' failed.");Mr=!0;let t=e.initTimeout,r=e.numThreads;if(!Mp())throw new Error("WebAssembly SIMD is not supported in the current environment.");let o=Dp();r>1&&!o&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let u=e.wasmPaths,n=typeof u=="string"?u:void 0,a=u?.mjs,d=a?.href??a,p=u?.wasm,i=p?.href??p,l=e.wasmBinary,[s,c]=await Ma(d,n,r>1),h=!1,g=[];if(t>0&&g.push(new Promise(y=>{setTimeout(()=>{h=!0,y()},t)})),g.push(new Promise((y,C)=>{let W={numThreads:r};l?W.wasmBinary=l:(i||n)&&(W.locateFile=(A,X)=>i??(n??X)+A),c(W).then(A=>{Mr=!1,jn=!0,qn=A,y(),s&&URL.revokeObjectURL(s)},A=>{Mr=!1,Ra=!0,C(A)})})),await Promise.race(g),h)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Te=()=>{if(jn&&qn)return qn;throw new Error("WebAssembly is not initialized yet.")}}),ke,Kt,ve,Rr=V(()=>{gt(),ke=(e,t)=>{let r=Te(),o=r.lengthBytesUTF8(e)+1,u=r._malloc(o);return r.stringToUTF8(e,u,o),t.push(u),u},Kt=(e,t,r,o)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([u,n])=>{let a=t?t+u:u;if(typeof n=="object")Kt(n,a+".",r,o);else if(typeof n=="string"||typeof n=="number")o(a,n.toString());else if(typeof n=="boolean")o(a,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},ve=e=>{let t=Te(),r=t.stackSave();try{let o=t.stackAlloc(8);t._OrtGetLastError(o,o+4);let u=t.HEAP32[o/4],n=t.HEAPU32[o/4+1],a=n?t.UTF8ToString(n):"";throw new Error(`${e} ERROR_CODE: ${u}, ERROR_MESSAGE: ${a}`)}finally{t.stackRestore(r)}}}),Ua,Va=V(()=>{gt(),Rr(),Ua=e=>{let t=Te(),r=0,o=[],u=e||{};try{if(e?.logSeverityLevel===void 0)u.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)u.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(u.terminate=!1);let n=0;return e?.tag!==void 0&&(n=ke(e.tag,o)),r=t._OrtCreateRunOptions(u.logSeverityLevel,u.logVerbosityLevel,!!u.terminate,n),r===0&&ve("Can't create run options."),e?.extra!==void 0&&Kt(e.extra,"",new WeakSet,(a,d)=>{let p=ke(a,o),i=ke(d,o);t._OrtAddRunConfigEntry(r,p,i)!==0&&ve(`Can't set a run config entry: ${a} - ${d}.`)}),[r,o]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),o.forEach(a=>t._free(a)),n}}}),Rp,Up,Vp,Np,Na,Wa=V(()=>{gt(),Rr(),Rp=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Up=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Vp=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Np=(e,t,r)=>{for(let o of t){let u=typeof o=="string"?o:o.name;switch(u){case"webnn":if(u="WEBNN",typeof o!="string"){let a=o?.deviceType;if(a){let d=ke("deviceType",r),p=ke(a,r);Te()._OrtAddSessionConfigEntry(e,d,p)!==0&&ve(`Can't set a session config entry: 'deviceType' - ${a}.`)}}break;case"webgpu":if(u="JS",typeof o!="string"){let a=o;if(a?.preferredLayout){if(a.preferredLayout!=="NCHW"&&a.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${a.preferredLayout}`);let d=ke("preferredLayout",r),p=ke(a.preferredLayout,r);Te()._OrtAddSessionConfigEntry(e,d,p)!==0&&ve(`Can't set a session config entry: 'preferredLayout' - ${a.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${u}`)}let n=ke(u,r);Te()._OrtAppendExecutionProvider(e,n)!==0&&ve(`Can't append execution provider: ${u}.`)}},Na=e=>{let t=Te(),r=0,o=[],u=e||{};Vp(u);try{let n=Rp(u.graphOptimizationLevel??"all"),a=Up(u.executionMode??"sequential"),d=typeof u.logId=="string"?ke(u.logId,o):0,p=u.logSeverityLevel??2;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log serverity level is not valid: ${p}`);let i=u.logVerbosityLevel??0;if(!Number.isInteger(i)||i<0||i>4)throw new Error(`log verbosity level is not valid: ${i}`);let l=typeof u.optimizedModelFilePath=="string"?ke(u.optimizedModelFilePath,o):0;if(r=t._OrtCreateSessionOptions(n,!!u.enableCpuMemArena,!!u.enableMemPattern,a,!!u.enableProfiling,0,d,p,i,l),r===0&&ve("Can't create session options."),u.executionProviders&&Np(r,u.executionProviders,o),u.enableGraphCapture!==void 0){if(typeof u.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${u.enableGraphCapture}`);let s=ke("enableGraphCapture",o),c=ke(u.enableGraphCapture.toString(),o);t._OrtAddSessionConfigEntry(r,s,c)!==0&&ve(`Can't set a session config entry: 'enableGraphCapture' - ${u.enableGraphCapture}.`)}if(u.freeDimensionOverrides)for(let[s,c]of Object.entries(u.freeDimensionOverrides)){if(typeof s!="string")throw new Error(`free dimension override name must be a string: ${s}`);if(typeof c!="number"||!Number.isInteger(c)||c<0)throw new Error(`free dimension override value must be a non-negative integer: ${c}`);let h=ke(s,o);t._OrtAddFreeDimensionOverride(r,h,c)!==0&&ve(`Can't set a free dimension override: ${s} - ${c}.`)}return u.extra!==void 0&&Kt(u.extra,"",new WeakSet,(s,c)=>{let h=ke(s,o),g=ke(c,o);t._OrtAddSessionConfigEntry(r,h,g)!==0&&ve(`Can't set a session config entry: ${s} - ${c}.`)}),[r,o]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r),o.forEach(a=>t._free(a)),n}}}),Yt,yt,It,Ur,Xt,Vr,Nr,Kn,Q=V(()=>{Yt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},yt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},It=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],o=typeof t=="number"?t:t.reduce((u,n)=>u*n,1);return r>0?Math.ceil(o*r):void 0},Ur=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Xt=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Vr=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Nr=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool",Kn=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Zt,Yn=V(()=>{Cr(),Zt=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),o=r?parseInt(r,10):0;if(o<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let u=t.body.getReader(),n;try{n=new ArrayBuffer(o)}catch(d){if(d instanceof RangeError){let p=Math.ceil(o/65536);n=new WebAssembly.Memory({initial:p,maximum:p}).buffer}else throw d}let a=0;for(;;){let{done:d,value:p}=await u.read();if(d)break;let i=p.byteLength;new Uint8Array(n,a,i).set(p),a+=i}return new Uint8Array(n,0,o)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Wp,Lp,La,Ha,Wr,Hp,me,Xe=V(()=>{Q(),Wp=["V","I","W","E","F"],Lp=(e,t)=>{console.log(`[${Wp[e]},${new Date().toISOString()}]${t}`)},Wr=(e,t)=>{La=e,Ha=t},Hp=(e,t)=>{let r=Xt(e),o=Xt(La);r>=o&&Lp(r,typeof t=="function"?t():t)},me=(...e)=>{Ha&&Hp(...e)}}),Lr,Xn=V(()=>{Q(),Lr=(e,t)=>new(Ur(t))(e)}),Hr=V(()=>{}),Ga,Zn,Qn,Gp,Fp,Fa,eo,Jn,ja,Ka=V(()=>{Xe(),Hr(),Ga=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Zn=[],Qn=e=>Math.ceil(e/16)*16,Gp=e=>{for(let t=0;t<Zn.length;t++){let r=Zn[t];if(e<=r)return r}return Math.ceil(e/16)*16},Fp=1,Fa=()=>Fp++,eo=async(e,t,r,o)=>{let u=Qn(r),n=e.device.createBuffer({size:u,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,n,0,u),e.flush(),await n.mapAsync(GPUMapMode.READ);let d=n.getMappedRange();if(o){let p=o();return p.set(new Uint8Array(d,0,r)),p}else return new Uint8Array(d.slice(0,r))}finally{n.destroy()}},Jn=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersForUploadingPending=[],this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Ga)Zn.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[])}upload(e,t){let r=t.buffer,o=t.byteOffset,u=t.byteLength,n=Qn(u),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(a.originalSize!==u)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${u}`);let d=this.backend.device.createBuffer({mappedAtCreation:!0,size:n,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),p=d.getMappedRange();new Uint8Array(p).set(new Uint8Array(r,o,u)),d.unmap();let i=this.backend.getCommandEncoder();this.backend.endComputePass(),i.copyBufferToBuffer(d,0,a.gpuData.buffer,0,n),me("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`),this.buffersForUploadingPending.push(d)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let o=this.storageCache.get(t);if(!o)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==o.originalSize)throw new Error("inconsistent source and destination gpu data size");let u=Qn(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,o.gpuData.buffer,0,u)}registerExternalBuffer(e,t,r){let o;if(r){if(o=r[0],e===r[1])return me("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${o}, buffer is the same, skip.`),o;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else o=Fa();return this.storageCache.set(o,{gpuData:{id:o,type:0,buffer:e},originalSize:t}),me("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${o}, registered.`),o}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),me("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Gp(e),o,u=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(u||n){let d=(u?this.freeBuffers:this.freeUniformBuffers).get(r);d?d.length>0?o=d.pop():o=this.backend.device.createBuffer({size:r,usage:t}):o=this.backend.device.createBuffer({size:r,usage:t})}else o=this.backend.device.createBuffer({size:r,usage:t});let a={id:Fa(),type:0,buffer:o};return this.storageCache.set(a.id,{gpuData:a,originalSize:e}),me("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=this.storageCache.get(e);if(!t)throw new Error("releasing data does not exist");return me("verbose",()=>`[WebGPU] GpuDataManager.release(id=${e}), gpuDataId=${t.gpuData.id}`),this.storageCache.delete(e),this.buffersPending.push(t.gpuData.buffer),t.originalSize}async download(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("data does not exist");await eo(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){for(let e of this.buffersForUploadingPending)e.destroy();if(this.buffersForUploadingPending=[],this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Ga.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e))}},ja=(...e)=>new Jn(...e)}),to,J,Ie=V(()=>{to=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},J=e=>new to(e)}),ro,rt,k,Ct,Gr,Ya,Xa,ie=V(()=>{ro=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},rt=class{static calcShape(e,t,r=!1){let o=e.length,u=t.length;if(o===0)return t;if(u===0)return e;let n=Math.max(e.length,t.length),a=new Array(n);if(r){if(o<2||u<2)return;let d=ro.calcMatMulShape([e[o-2],e[o-1]],[t[u-2],t[u-1]]);if(d===void 0)return;[a[n-2],a[n-1]]=d}for(let d=r?3:1;d<=n;d++){let p=o-d<0?1:e[o-d],i=u-d<0?1:t[u-d];if(p!==i&&p>1&&i>1)return;let l=Math.max(p,i);if(p&&i)a[n-d]=Math.max(p,i);else{if(l>1)return;a[n-d]=0}}return a}static isValidBroadcast(e,t){let r=e.length,o=t.length;if(r>o)return!1;for(let u=1;u<=r;u++)if(e[r-u]!==1&&e[r-u]!==t[o-u])return!1;return!0}},k=class Bg{static size(t){return Bg.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let o=t.length;if(o===0)return[];let u=new Array(o),n=o-1;for(;n>=0;){if(t[n]%r===0){u[n]=t[n]/r;break}if(r%t[n]!==0)throw new Error("cannot convert shape");u[n]=1,r/=t[n],n--}for(n--;n>=0;n--)u[n]=t[n];return u}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Bg.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Bg.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,o){let u=1;for(let n=r;n<o;n++){if(t[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");u*=t[n]}return u}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let o=new Array(r);o[r-1]=1,o[r-2]=t[r-1];for(let u=r-3;u>=0;--u)o[u]=o[u+1]*t[u+1];return o}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(o=>this.normalizeAxis(o,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(o=>t[o]):t.slice().reverse()}static padShape(t,r){let o=t.length;return t.map((u,n)=>u+r[n]+r[n+o])}static areEqual(t,r){return t.length!==r.length?!1:t.every((o,u)=>o===r[u])}},Ct=class _g{static adjustPoolAttributes(t,r,o,u,n,a){if(!t&&o.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let d=0;d<r.length-2;d++)d>=o.length?o.push(r[d+2]):o[d]=r[d+2];for(let d=0;d<o.length;d++)if(d<u.length){if(u[d]<0)throw new Error("strides should be greater than or equal to 1")}else u.push(1);for(let d=0;d<o.length;d++)if(d<n.length){if(n[d]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let d=0;d<o.length*2;d++)if(d<a.length){if(a[d]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let d=0;d<o.length;d++){if(o[d]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[d]>=o[d]||a[d+o.length]>=o[d])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,o,u,n,a,d){if(d){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(u.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let p=0;p<t.length-2;p++)_g.adjustPadAndReturnShape(t[p+(a?1:2)],r[p],o[p],u[p],n,p,p+t.length-2,d)}}static computePoolOutputShape(t,r,o,u,n,a,d){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let p=[r[0],r[1]];return _g.computeShapeHelper(t,r,p,o,u,n,a,d),p}static computeConvOutputShape(t,r,o,u,n,a,d){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let p=[t[0],r[0]];return _g.computeShapeHelper(!1,t,p,o,u,n,a,d),p}static computeShapeHelper(t,r,o,u,n,a,d,p){if(t)for(let i=0;i<r.length-2;i++)o.push(1);else for(let i=0;i<r.length-2;i++)o.push(_g.adjustPadAndReturnShape(r[i+2],u[i],n[i],a[i],d,i,i+r.length-2,p))}static adjustPadAndReturnShape(t,r,o,u,n,a,d,p){let i=o*(u-1)+1;if(p&&p!=="NOTSET")switch(p){case"VALID":return n[a]=0,n[d]=0,Math.floor((t-i)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(o!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let l=((t+r-1)/r-1)*r+u-t;return n[a]=Math.floor(p==="SAME_LOWER"?(l+1)/2:l/2),n[d]=l-n[a],Math.floor((t+l-u)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+n[a]+n[d]-i)/r+1)}},Gr=class{static getShapeOfGemmResult(e,t,r,o,u){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,a,d;t?(n=e[1],a=e[0]):(n=e[0],a=e[1]);let p=-1;if(o?(d=r[0],p=1):(d=r[1],p=0),r[p]!==a)throw new Error("dimension mismatch");if(n<=0||d<=0||a<=0)throw new Error("invalid shape specified");if(u&&!rt.isValidBroadcast(u,[n,d]))throw new Error("gemm: invalid bias shape for broadcast");return[n,d,a]}},Ya=-34028234663852886e22,Xa=34028234663852886e22}),At,oo,he,Ee,R,we,io,kt,Ze,F,ao,E,M,Fr,no,Za,Nt,ae=V(()=>{Q(),ie(),At=64,oo=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(e){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},he=(e,t=1)=>{let r=oo(e,t);return typeof r=="string"?r:r[0]},Ee=(e,t=1)=>{let r=oo(e,t);return typeof r=="string"?r:r[1]},R=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:k.computeStrides(r)})}),t},we=e=>e%4===0?4:e%2===0?2:1,io=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,kt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,Ze=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,F=(e,t,r,o)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?o==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:o==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,ao=(e,t,r,o,u)=>{let n=typeof r=="number",a=n?r:r.length,d=[...new Array(a).keys()],p=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,i=oo(t,u),l=typeof i=="string"?i:i[1],s=typeof i=="string"?i:i[0],c={indices:p,value:l,storage:s,tensor:t},h=pi=>typeof pi=="string"?pi:`${pi}u`,g={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=n?"uniforms.":"",C=`${y}${e}_shape`,W=`${y}${e}_strides`,A="";for(let pi=0;pi<a-1;pi++)A+=`
    let dim${pi} = current / ${F(W,pi,a)};
    let rest${pi} = current % ${F(W,pi,a)};
    indices[${pi}] = dim${pi};
    current = rest${pi};
    `;A+=`indices[${a-1}] = current;`;let X=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${c.indices} {
    var indices: ${c.indices};
    var current = offset;
    ${A}
    return indices;
  }`,ni=pi=>(g.offsetToIndices=!0,a<2?pi:`o2i_${e}(${pi})`),ii=[];if(a>=2)for(let pi=a-1;pi>=0;pi--)ii.push(`${F(W,pi,a)} * (indices[${pi}])`);let li=a<2?"":`
  fn i2o_${e}(indices: ${c.indices}) -> u32 {
    return ${ii.join("+")};
  }`,ui=pi=>(g.indicesToOffset=!0,a<2?pi:`i2o_${e}(${pi})`),hi=(...pi)=>a===0?"0u":`${c.indices}(${pi.map(h).join(",")})`,yi=(pi,gi)=>a<2?`${pi}`:`${F(pi,gi,a)}`,$i=(pi,gi,Ni)=>a<2?`${pi}=${Ni};`:`${F(pi,gi,a)}=${Ni};`,Bi={},Oi=(pi,gi)=>{g.broadcastedIndicesToOffset=!0;let Ni=`${gi.name}broadcastedIndicesTo${e}Offset`;if(Ni in Bi)return`${Ni}(${pi})`;let Zo=[];for(let Jo=a-1;Jo>=0;Jo--){let Kh=gi.indicesGet("outputIndices",Jo+gi.rank-a);Zo.push(`${yi(W,Jo)} * (${Kh} % ${yi(C,Jo)})`)}return Bi[Ni]=`fn ${Ni}(outputIndices: ${gi.type.indices}) -> u32 {
             return ${Zo.length>0?Zo.join("+"):"0u"};
           }`,`${Ni}(${pi})`},Li=(pi,gi)=>(()=>{if(c.storage===c.value)return`${e}[${pi}]=${gi};`;if(c.storage==="vec2<u32>"&&c.value==="i32")return`${e}[${pi}]=vec2<u32>(u32(${gi}), select(0u, 0xFFFFFFFFu, ${gi} < 0));`;if(c.storage==="vec2<u32>"&&c.value==="u32")return`${e}[${pi}]=vec2<u32>(u32(${gi}), 0u);`;if(c.storage==="u32"&&c.value==="vec4<bool>")return`${e}[${pi}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${gi}));`;throw new Error(`not supported combination of storage type ${c.storage} and value type ${c.value} yet`)})(),Ro=pi=>(()=>{if(c.storage===c.value)return`${e}[${pi}]`;if(c.storage==="vec2<u32>"&&c.value==="i32")return`i32(${e}[${pi}].x)`;if(c.storage==="vec2<u32>"&&c.value==="u32")return`u32(${e}[${pi}].x)`;if(c.storage==="u32"&&c.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${pi}] & 0xFFu), bool(${e}[${pi}] & 0xFF00u), bool(${e}[${pi}] & 0xFF0000u), bool(${e}[${pi}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${c.storage} and value type ${c.value} yet`)})(),wi=a<2?"":`
  fn get_${e}ByIndices(indices: ${c.indices}) -> ${l} {
    return ${Ro(`i2o_${e}(indices)`)};
  }`,xi=a<2?"":(()=>{let pi=d.map(Ni=>`d${Ni}: u32`).join(", "),gi=d.map(Ni=>`d${Ni}`).join(", ");return`
  fn get_${e}(${pi}) -> ${l} {
    return get_${e}ByIndices(${hi(gi)});
  }`})(),Mo=(...pi)=>{if(pi.length!==a)throw new Error(`indices length must be ${a}`);let gi=pi.map(h).join(",");return a===0?Ro("0u"):a===1?Ro(gi[0]):(g.get=!0,g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}(${gi})`)},zo=pi=>a<2?Ro(pi):(g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}ByIndices(${pi})`),Ti=a<2?"":`
  fn set_${e}ByIndices(indices: ${c.indices}, value: ${l}) {
    ${Li(`i2o_${e}(indices)`,"value")}
  }`,Ei=a<2?"":(()=>{let pi=d.map(Ni=>`d${Ni}: u32`).join(", "),gi=d.map(Ni=>`d${Ni}`).join(", ");return`
  fn set_${e}(${pi}, value: ${l}) {
    set_${e}ByIndices(${hi(gi)}, value);
  }`})();return{impl:()=>{let pi=[],gi=!1;return g.offsetToIndices&&(pi.push(X),gi=!0),g.indicesToOffset&&(pi.push(li),gi=!0),g.broadcastedIndicesToOffset&&(Object.values(Bi).forEach(Ni=>pi.push(Ni)),gi=!0),g.set&&(pi.push(Ei),gi=!0),g.setByIndices&&(pi.push(Ti),gi=!0),g.get&&(pi.push(xi),gi=!0),g.getByIndices&&(pi.push(wi),gi=!0),!n&&gi&&pi.unshift(`const ${C} = ${c.indices}(${r.join(",")});`,`const ${W} = ${c.indices}(${k.computeStrides(r).join(",")});`),pi.join(`
`)},type:c,offsetToIndices:ni,indicesToOffset:ui,broadcastedIndicesToOffset:Oi,indices:hi,indicesGet:yi,indicesSet:$i,set:(...pi)=>{if(pi.length!==a+1)throw new Error(`indices length must be ${a}`);let gi=pi[a];if(typeof gi!="string")throw new Error("value must be string");let Ni=pi.slice(0,a).map(h).join(",");return a===0?Li("0u",gi):a===1?Li(Ni[0],gi):(g.set=!0,g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}(${Ni}, ${gi})`)},setByOffset:Li,setByIndices:(pi,gi)=>a<2?Li(pi,gi):(g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}ByIndices(${pi}, ${gi});`),get:Mo,getByOffset:Ro,getByIndices:zo,usage:o,name:e,strides:W,shape:C,rank:a}},E=(e,t,r,o=1)=>ao(e,t,r,"input",o),M=(e,t,r,o=1)=>ao(e,t,r,"output",o),Fr=(e,t,r,o=1)=>ao(e,t,r,"internal",o),no=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=At){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],o=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||o>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${o}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*o>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${o}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let u=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=u?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,a=u?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*o}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${o})
  fn main(${n}) {
    ${a}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",o=e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${o}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:o}of this.uniforms)if(o&&o>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(o/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(o/4)}>`);else{let u=o==null||o===1?r:`vec${o}<${r}>`;e.push(`${t}:${u}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Za=(e,t)=>new no(e,t),Nt=(e,t)=>{let r=e.length,o=[];for(let u=0;u<r;u++){let n=r-1-u,a=e[n]||1;(t[t.length-1-u]||1)>1&&a===1&&o.unshift(n)}return o}}),qp,Qa,jp,Kp,Yp,Pe,Ja,es,lt=V(()=>{Q(),ie(),Ie(),ae(),qp=e=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.")},Qa=(e,t)=>t&&t.length!==e?[...new Array(e).keys()].reverse():t,jp=(e,t)=>k.sortBasedOnPerm(e,Qa(e.length,t)),Kp=(e,t,r,o)=>{let u=`fn perm(i: ${o.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let n=0;n<t;++n)u+=r.indicesSet("a",e[n],`i[${n}]`);return u+="return a;}"},Yp=(e,t)=>{let r=[],o=[];for(let u=0;u<e.length;++u)e[u]!==1&&r.push(e[u]),e[t[u]]!==1&&o.push(t[u]);return{newShape:r,newPerm:o}},Pe=(e,t)=>{let r=e.dataType,o=e.dims.length,u=Qa(o,t),n=jp(e.dims,u),{newShape:a,newPerm:d}=Yp(e.dims,u),p=k.areEqual(d,[2,3,1]),i=k.areEqual(d,[3,1,2]),l=a.length===2&&d[0]>d[1]||p||i,s=l?a:e.dims,c=n;l&&(s=p?[a[0],a[1]*a[2]]:i?[a[0]*a[1],a[2]]:a,c=[s[1],s[0]]);let h=E("a",r,s.length),g=M("output",r,c.length),y=16,C;return l?C=W=>`
  ${W.registerUniform("output_size","u32").declareVariables(h,g)}
  var<workgroup> tile : array<array<${g.type.value}, ${y+1}>, ${y}>;
  ${W.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${h.getByIndices(`${h.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${g.setByIndices(`${g.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`:C=W=>`
  ${W.registerUniform("output_size","u32").declareVariables(h,g)}

  ${Kp(u,o,h,g)}

  ${W.mainStart()}
    ${W.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${g.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${g.setByOffset("global_idx",h.getByIndices("aIndices"))}
  }`,{name:l?"TransposeShared":"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let W=k.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:l?{x:Math.ceil(c[1]/y),y:Math.ceil(c[0]/y)}:{x:Math.ceil(W/64)},programUniforms:[{type:12,data:W},...R(s,c)]}},getShaderSource:C}},Ja=(e,t)=>{qp(e.inputs),e.compute(Pe(e.inputs[0],t.perm))},es=e=>J({perm:e.perm})}),Xp,Zp,Qp,Jp,em,tm,rm,nm,om,im,nt,ts,rs,ns,os,is,as,ss,us,ds,ls,cs=V(()=>{Q(),ie(),ae(),qr(),lt(),Xp={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Zp={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Qp={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Jp={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},em=(e,t)=>{let r=[];for(let o=t-e;o<t;++o)r.push(o);return r},tm=(e,t)=>{let r=[],o=e.length;for(let n=0;n<o;n++)t.indexOf(n)===-1&&r.push(e[n]);let u=t.map(n=>e[n]);return[r,u]},rm=(e,t)=>{let r=e.length+t.length,o=[],u=0;for(let n=0;n<r;n++)t.indexOf(n)===-1?o.push(e[u++]):o.push(1);return o},nm=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},om=(e,t)=>{let r=[];if(!nm(e,t)){for(let o=0;o<t;++o)e.indexOf(o)===-1&&r.push(o);e.forEach(o=>r.push(o))}return r},im=(e,t,r,o,u,n,a)=>{let d=r[0].dims,p=k.size(n),i=k.size(a),l=E("_A",r[0].dataType,d),s=M("output",u,n),c=32,h=`
          var<workgroup> aBestValues : array<f32, ${c}>;
       `;return{name:e,shaderCache:t,getShaderSource:g=>`
        ${g.registerUniform("reduceSize","u32").declareVariables(l,s)}
        ${h}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${g.mainStart(c)}

          let outputIndex = global_idx / ${c};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Qp[o]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${c}) {
           let candidate = f32(${l.getByOffset("offset + k")});
           bestValue = ${Xp[o]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${c}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Zp[o]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${s.setByOffset("outputIndex",`${o==="mean"?`${s.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${s.type.storage}(${Jp[o]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:n,dataType:u}],dispatchGroup:{x:p},programUniforms:[{type:12,data:i}]})}},nt=(e,t,r,o)=>{let u=e.inputs.length===1?r:so(e.inputs,r),n=u.axes;n.length===0&&!u.noopWithEmptyAxes&&(n=e.inputs[0].dims.map((h,g)=>g));let a=k.normalizeAxes(n,e.inputs[0].dims.length),d=a,p=e.inputs[0],i=om(d,e.inputs[0].dims.length);i.length>0&&(p=e.compute(Pe(e.inputs[0],i),{inputs:[0],outputs:[-1]})[0],d=em(d.length,p.dims.length));let[l,s]=tm(p.dims,d),c=l;u.keepDims&&(c=rm(l,a)),e.compute(im(t,{hint:u.cacheKey,inputDependencies:["type"]},[p],o,e.inputs[0].dataType,c,s),{inputs:[p]})},ts=(e,t)=>{nt(e,"ReduceMeanShared",t,"mean")},rs=(e,t)=>{nt(e,"ReduceL1Shared",t,"l1")},ns=(e,t)=>{nt(e,"ReduceL2Shared",t,"l2")},os=(e,t)=>{nt(e,"ReduceLogSumExpShared",t,"logSumExp")},is=(e,t)=>{nt(e,"ReduceMaxShared",t,"max")},as=(e,t)=>{nt(e,"ReduceMinShared",t,"min")},ss=(e,t)=>{nt(e,"ReduceProdShared",t,"prod")},us=(e,t)=>{nt(e,"ReduceSumShared",t,"sum")},ds=(e,t)=>{nt(e,"ReduceSumSquareShared",t,"sumSquare")},ls=(e,t)=>{nt(e,"ReduceLogSumShared",t,"logSum")}}),ot,am,jr,so,it,sm,um,dm,lm,cm,pm,mm,fm,hm,gm,at,ps,ms,fs,hs,gs,ys,bs,ws,_s,vs,qr=V(()=>{Q(),ie(),Ie(),ae(),cs(),ot=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},am=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],jr=(e,t,r,o,u,n,a=!1,d=!1)=>{let p=[],i=r[0].dims,l=i.length,s=k.normalizeAxes(u,l),c=!d&&s.length===0;i.forEach((y,C)=>{c||s.indexOf(C)>=0?a&&p.push(1):p.push(y)});let h=p.length,g=k.size(p);return{name:e,shaderCache:t,getShaderSource:y=>{let C=[],W=E("_A",r[0].dataType,l),A=M("output",n,h),X=o(W,A,s),ni=X[2];for(let ii=0,li=0;ii<l;ii++)c||s.indexOf(ii)>=0?(a&&li++,ni=`for(var j${ii}: u32 = 0; j${ii} < ${i[ii]}; j${ii}++) {
                  ${X[2].includes("last_index")?`let last_index = j${ii};`:""}
                  ${W.indicesSet("input_indices",ii,`j${ii}`)}
                  ${ni}
                }`):(C.push(`${W.indicesSet("input_indices",ii,A.indicesGet("output_indices",li))};`),li++);return`

        ${y.registerUniform("output_size","u32").declareVariables(W,A)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${W.type.indices};
          let output_indices = ${A.offsetToIndices("global_idx")};

          ${C.join(`
`)}
          ${X[0]}       // init ops for reduce max/min
          ${X[1]}
          ${ni}
          ${X[3]}
          ${X.length===4?A.setByOffset("global_idx","value"):X.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:p,dataType:n}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...R(i,p)]})}},so=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(o=>r.push(Number(o))),J({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},it=(e,t,r,o)=>{let u=e.inputs,n=u.length===1?r:so(u,r);e.compute(jr(t,{hint:n.cacheKey,inputDependencies:["rank"]},[u[0]],n.noopWithEmptyAxes&&n.axes.length===0?am:o,n.axes,u[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},sm=(e,t)=>{ot(e.inputs),it(e,"ReduceLogSum",t,(r,o)=>[`var value = ${o.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},um=(e,t)=>{ot(e.inputs),it(e,"ReduceL1",t,(r,o)=>[`var value = ${o.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},dm=(e,t)=>{ot(e.inputs),it(e,"ReduceL2",t,(r,o)=>[`var t = ${o.type.value}(0); var value = ${o.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},lm=(e,t)=>{ot(e.inputs),it(e,"ReduceLogSumExp",t,(r,o)=>[`var value = ${o.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},cm=(e,t)=>{ot(e.inputs),it(e,"ReduceMax",t,(r,o,u)=>{let n=[];for(let a=0;a<r.rank;a++)(u.indexOf(a)>=0||u.length===0)&&n.push(r.indicesSet("input_indices",a,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},pm=(e,t)=>{ot(e.inputs),it(e,"ReduceMean",t,(r,o,u)=>{let n=1;for(let a=0;a<r.rank;a++)(u.indexOf(a)>=0||u.length===0)&&(n*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${o.type.value}(sum / ${n});`]})},mm=(e,t)=>{ot(e.inputs),it(e,"ReduceMin",t,(r,o,u)=>{let n=[];for(let a=0;a<r.rank;a++)(u.indexOf(a)>=0||u.length===0)&&n.push(`input_indices[${a}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},fm=(e,t)=>{ot(e.inputs),it(e,"ReduceProd",t,(r,o)=>[`var value = ${o.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},hm=(e,t)=>{ot(e.inputs),it(e,"ReduceSum",t,(r,o)=>[`var value = ${o.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},gm=(e,t)=>{ot(e.inputs),it(e,"ReduceSumSquare",t,(r,o)=>[`var t = ${o.type.value}(0); var value = ${o.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},at=(e,t,r)=>{if(t.length===0)return r;let o=1,u=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?o*=e[n]:u*=e[n];return u<32&&o>1024},ps=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pm(e,t):ts(e,t)},ms=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?um(e,t):rs(e,t)},fs=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?dm(e,t):ns(e,t)},hs=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lm(e,t):os(e,t)},gs=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cm(e,t):is(e,t)},ys=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mm(e,t):as(e,t)},bs=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fm(e,t):ss(e,t)},ws=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hm(e,t):us(e,t)},_s=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gm(e,t):ds(e,t)},vs=(e,t)=>{at(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?sm(e,t):ls(e,t)}}),$s,xs,Ss,uo,Ts=V(()=>{Q(),Ie(),qr(),$s=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},xs=(e,t)=>{$s(e.inputs);let r=(o,u,n)=>{let a=[];for(let d=0;d<o.rank;d++)(n.indexOf(d)>=0||n.length===0)&&a.push(`input_indices[${d}] = 0;`);return[`${a.join(`
`)}`,`var value = ${o.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${o.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${o.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",u.setByOffset("global_idx","best_index")]};e.compute(jr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Ss=(e,t)=>{$s(e.inputs);let r=(o,u,n)=>{let a=[];for(let d=0;d<o.rank;d++)(n.indexOf(d)>=0||n.length===0)&&a.push(`input_indices[${d}] = 0;`);return[`${a.join(`
`)}`,`var value = ${o.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${o.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${o.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",u.setByOffset("global_idx","best_index")]};e.compute(jr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},uo=e=>J(e)}),ym,bm,wm,_m,Wt,vm,Is,Kr=V(()=>{Q(),ie(),Hr(),ae(),ym=(e,t)=>{let r=e[0],o=e[1],u=e[2],n=e[3],a=e[4],d=e[5];if(a&&d)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let p=r.dims[0],i=r.dims[1],l=r.dims[2];if(u.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(o.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(o.dims[0]!==l)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(u.dims[0]!==o.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let s=u.dims[0]/3,c=s,h=c;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let X of t.qkvHiddenSizes)if(X%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");s=t.qkvHiddenSizes[0],c=t.qkvHiddenSizes[1],h=t.qkvHiddenSizes[2]}let g=i;if(s!==c)throw new Error("qkv_hidden_sizes first element should be same as the second");if(u.dims[0]!==s+c+h)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(a){if(c!==h)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==p)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==c/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=a.dims[3])}let C=g+y,W=-1,A=0;if(n)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(d){if(d.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(d.dims[0]!==p||d.dims[1]!==t.numHeads||d.dims[2]!==i||d.dims[3]!==C)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:i,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:C,maxSequenceLength:W,inputHiddenSize:l,hiddenSize:s,vHiddenSize:h,headSize:Math.floor(s/t.numHeads),vHeadSize:Math.floor(h/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:A,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},bm=(e,t,r)=>{let o=we(r),u=64,n=r/o;n<u&&(u=32);let a=Math.ceil(r/o/u),d=[{type:1,data:1/r},{type:12,data:n},{type:12,data:a}],p=he(e.dataType,o),i=Ee(1,o),l=["type"],s=c=>{let h=M("x",e.dataType,e.dims,o),g=Ee(e.dataType),y=[{name:"d_inv",type:"f32"},{name:"d_comp",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${u}>;
  var<workgroup> thread_sum: array<f32, ${u}>;
  ${c.registerUniforms(y).declareVariables(h)}
  ${c.mainStart([u,1,1])}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${u}) * uniforms.d_comp + local_offset;

    var thread_max_vector = ${i}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      thread_max_vector = max(${i}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(o){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${o}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${u}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${i}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      sum_vector += exp(${i}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(o){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${o}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${u}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        x[offset + i] = ${h.type.value}(${g}(uniforms.d_inv));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        var f32input = ${i}(x[offset + i]);
        x[offset + i] = ${h.type.value}(exp(f32input - max_value) / sum);
      }
    }
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${u};${p};${o}`,inputDependencies:l},getShaderSource:s,getRunData:()=>({outputs:[],dispatchGroup:{x:t},programUniforms:d})}},wm=(e,t,r,o,u,n,a,d)=>{let p=d+n.kvSequenceLength,i=[n.batchSize,n.numHeads,n.sequenceLength,p],l=n.kvNumHeads===void 0&&e>1&&o,s=l?[n.batchSize,n.numHeads,p,n.headSize]:void 0,c=a.scale===0?1/Math.sqrt(n.headSize):a.scale,h=we(n.headSize),g=n.headSize/h,y=12,C={x:Math.ceil(p/y),y:Math.ceil(n.sequenceLength/y),z:n.batchSize*n.numHeads},W=[{type:12,data:n.sequenceLength},{type:12,data:g},{type:12,data:p},{type:12,data:n.numHeads},{type:1,data:c},{type:12,data:d},{type:12,data:n.kvSequenceLength}],A=l&&o&&k.size(o.dims)>0,X=["type","type"];A&&X.push("type"),u&&X.push("type");let ni=[{dims:i,dataType:t.dataType,gpuDataType:0}];l&&ni.push({dims:s,dataType:t.dataType,gpuDataType:0});let ii=li=>{let ui=E("q",t.dataType,t.dims,h),hi=E("key",r.dataType,r.dims,h),yi=[ui,hi];if(A){let Ro=E("past_key",o.dataType,o.dims,h);yi.push(Ro)}u&&yi.push(E("attention_bias",u.dataType,u.dims));let $i=M("output",t.dataType,i),Bi=[$i];l&&Bi.push(M("present_key",t.dataType,s,h));let Oi=Ee(1,h),Li=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${y}u;

  var<workgroup> tileQ: array<${ui.type.storage}, ${y*y}>;
  var<workgroup> tileK: array<${ui.type.storage}, ${y*y}>;
  ${li.registerUniforms(Li).declareVariables(...yi,...Bi)}
  ${li.mainStart([y,y,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let qOffset = uniforms.M * uniforms.K * headIdx + m * uniforms.K;
    ${A&&l?`
    let kOffset = uniforms.kv_sequence_length * uniforms.K * headIdx;
    let pastKeyOffset = uniforms.past_sequence_length * uniforms.K * headIdx;`:`
    let kOffset = uniforms.N * uniforms.K * headIdx + n * uniforms.K;`}
    ${l?"let presentKeyOffset = headIdx * uniforms.N * uniforms.K;":""}
    var value = ${Oi}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${A&&l?`
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
        value += ${Oi}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    let headOffset = headIdx * uniforms.M * uniforms.N;
    if (global_id.y < uniforms.M && global_id.x < uniforms.N) {
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(h){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${h}`)}})()};
        output[outputIdx] = ${$i.type.value} (sum * uniforms.alpha) + ${u?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${h};${u!==void 0};${o!==void 0};${e}`,inputDependencies:X},getRunData:()=>({outputs:ni,dispatchGroup:C,programUniforms:W}),getShaderSource:ii}},_m=(e,t,r,o,u,n)=>{let a=n+u.kvSequenceLength,d=u.nReps?u.nReps:1,p=u.vHiddenSize*d,i=u.kvNumHeads==null&&e>1&&o,l=i?[u.batchSize,u.numHeads,a,u.headSize]:void 0,s=[u.batchSize,u.sequenceLength,p],c=12,h={x:Math.ceil(u.vHeadSize/c),y:Math.ceil(u.sequenceLength/c),z:u.batchSize*u.numHeads},g=[{type:12,data:u.sequenceLength},{type:12,data:a},{type:12,data:u.vHeadSize},{type:12,data:u.numHeads},{type:12,data:p},{type:12,data:n},{type:12,data:u.kvSequenceLength}],y=i&&o&&k.size(o.dims)>0,C=["type","type"];y&&C.push("type");let W=[{dims:s,dataType:t.dataType,gpuDataType:0}];i&&W.push({dims:l,dataType:t.dataType,gpuDataType:0});let A=X=>{let ni=E("probs",t.dataType,t.dims),ii=E("v",r.dataType,r.dims),li=[ni,ii];y&&li.push(E("past_value",o.dataType,o.dims));let ui=[M("output",t.dataType,s)];i&&ui.push(M("present_value",t.dataType,l));let hi=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${c}u;
  var<workgroup> tileQ: array<${ni.type.value}, ${c*c}>;
  var<workgroup> tileK: array<${ni.type.value}, ${c*c}>;
  ${X.registerUniforms(hi).declareVariables(...li,...ui)}
  ${X.mainStart([c,c,1])}
   let headIdx = workgroup_id.z;
   let m = global_id.y;
   let n = global_id.x;

   let offsetA = headIdx * (uniforms.M * uniforms.K) + m * uniforms.K;
   ${y&&i?`
    let pastValueOffset = headIdx * uniforms.N * uniforms.past_sequence_length + n;
    let vOffset = headIdx * uniforms.N * uniforms.kv_sequence_length + n;
      `:`
   let offsetB = headIdx * uniforms.N * uniforms.K + n;
            `}
    ${i?"let presentValueOffset = headIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${ni.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${y&&i?`
        if (w + local_id.y < uniforms.past_sequence_length) {
          tileK[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else {
          tileK[idx] = v[vOffset + (w + local_id.y - uniforms.past_sequence_length) * uniforms.N];
        }
      `:`
        tileK[idx] = v[offsetB + (w + local_id.y) * uniforms.N];
      `}
        ${i?"present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileK[idx];":""}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${o!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:W,dispatchGroup:h,programUniforms:g}),getShaderSource:A}},Wt=(e,t,r,o,u,n,a,d,p,i,l)=>{let s=Math.min(e.outputCount,1+(a?1:0)+(d?1:0)),c=i.kvNumHeads!==void 0||s>1?i.pastSequenceLength:0,h=c+i.kvSequenceLength,g=p&&k.size(p.dims)>0?p:void 0,y=[t,r];i.kvNumHeads===void 0&&s>1&&a&&k.size(a.dims)>0&&y.push(a),g&&y.push(g);let C=e.compute(wm(s,t,r,a,g,i,l,c),{inputs:y,outputs:i.kvNumHeads===void 0&&s>1?[-1,1]:[-1]})[0];e.compute(bm(C,i.batchSize*i.numHeads*i.sequenceLength,h),{inputs:[C],outputs:[]});let W=[C,o];i.kvNumHeads===void 0&&s>1&&d&&k.size(d.dims)>0&&W.push(d),e.compute(_m(s,C,o,d,i,c),{inputs:W,outputs:i.kvNumHeads===void 0&&s>1?[0,2]:[0]})},vm=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],o=t.sequenceLength,u=t.inputHiddenSize,n=t.headSize,a=12,d={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},p=[e.inputs[0],e.inputs[1],e.inputs[2]],i=[{type:12,data:o},{type:12,data:u},{type:12,data:n},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],l=s=>{let c=M("output_q",p[0].dataType,r),h=M("output_k",p[0].dataType,r),g=M("output_v",p[0].dataType,r),y=E("input",p[0].dataType,p[0].dims),C=E("weight",p[1].dataType,p[1].dims),W=E("bias",p[2].dataType,p[2].dims),A=y.type.storage,X=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${A}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${A}, ${a*a}>;
  var<workgroup> tileWeightK: array<${A}, ${a*a}>;
  var<workgroup> tileWeightV: array<${A}, ${a*a}>;
  ${s.registerUniforms(X).declareVariables(y,C,W,c,h,g)}
  ${s.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${A}(0);
    var valueK = ${A}(0);
    var valueV = ${A}(0);
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:d,programUniforms:i}),getShaderSource:l},{inputs:p,outputs:[-1,-1,-1]})},Is=(e,t)=>{let r=ym(e.inputs,t),[o,u,n]=vm(e,r);return Wt(e,o,u,n,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r,t)}}),$m,xm,Sm,Cs,As=V(()=>{Ke(),Q(),ie(),Ie(),ae(),$m=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(o,u,n)=>{let a=u.length;if(a!==o.length)throw new Error(`${n}: num dimensions != ${a}`);u.forEach((d,p)=>{if(d!==o[p])throw new Error(`${n}: dim[${p}] do not match`)})};if(e[0].dims.length>1){let o=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,o,"Invalid input scale"),r(e[2].dims,o,"Invalid input B"),r(e[3].dims,o,"Invalid input mean"),r(e[4].dims,o,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},xm=(e,t)=>{let{epsilon:r,spatial:o,format:u}=t,n=e[0].dims,a=o?we(n[n.length-1]):1,d=u==="NHWC"&&n.length>1?a:1,p=k.size(n)/a,i=o,l=i?n.length:n,s=E("x",e[0].dataType,e[0].dims,a),c=E("scale",e[1].dataType,e[1].dims,d),h=E("bias",e[2].dataType,e[2].dims,d),g=E("inputMean",e[3].dataType,e[3].dims,d),y=E("inputVar",e[4].dataType,e[4].dims,d),C=M("y",e[0].dataType,l,a),W=()=>{let X="";if(o)X=`let cOffset = ${n.length===1?"0u":u==="NHWC"?`outputIndices[${n.length-1}] / ${a}`:"outputIndices[1]"};`;else if(u==="NCHW")X=`
            ${C.indicesSet("outputIndices","0","0")}
            let cOffset = ${C.indicesToOffset("outputIndices")};`;else{X=`var cIndices = ${c.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let ni=1;ni<c.rank;ni++)X+=`cIndices[${ni}] = outputIndices[${ni}];`;X+=`let cOffset = ${c.indicesToOffset("cIndices")};`}return X},A=X=>`
  const epsilon = ${r};
  ${X.registerUniform("outputSize","u32").declareVariables(s,c,h,g,y,C)}
  ${X.mainStart()}
  ${X.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${C.offsetToIndices(`global_idx * ${a}`)};
    ${W()}
    let scale = ${c.getByOffset("cOffset")};
    let bias = ${h.getByOffset("cOffset")};
    let inputMean = ${g.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${s.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${C.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${o}_${a}`,inputDependencies:i?["rank","type","type","type","type"]:void 0},getShaderSource:A,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:i?[{type:12,data:p},...R(n)]:[{type:12,data:p}]})}},Sm=e=>J(e),Cs=(e,t)=>{let{inputs:r,outputCount:o}=e,u=Sm({...t,outputCount:o});if(_e.webgpu.validateInputContent&&$m(r,u),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(xm(r,u))}}),Tm,Im,ks,Es=V(()=>{ie(),ae(),Tm=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Im=e=>{let t=e[0].dims,r=e[0].dims[2],o=k.size(t)/4,u=e[0].dataType,n=E("input",u,t,4),a=E("bias",u,[r],4),d=E("residual",u,t,4),p=M("output",u,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)}}),getShaderSource:i=>`
  const channels = ${r}u / 4;
  ${i.declareVariables(n,a,d,p)}

  ${i.mainStart()}
    ${i.guardAgainstOutOfBoundsWorkgroupSizes(o)}
    let value = ${n.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${d.getByOffset("global_idx")};
    ${p.setByOffset("global_idx","value")}
  }`}},ks=e=>{Tm(e.inputs),e.compute(Im(e.inputs))}}),Cm,ge,Ps,zs,Os,Bs,Ds,Ms,Rs,Us,Vs,Am,Ns,Ws,Ls,Hs,Qt,Gs,Yr,Fs,qs,js,Ks,Ys,Xs,Zs,Qs,Js,eu,tu,ru,nu,ou,iu,au,su,uu,lo,co,du,lu,cu,km,Em,pu,Xr=V(()=>{Q(),ie(),Ie(),ae(),Cm=(e,t,r,o,u,n,a)=>{let d=Math.ceil(t/4),p="";typeof u=="string"?p=`${u}(a)`:p=u("a");let i=E("inputData",r,[d],4),l=M("outputData",o,[d],4),s=[{name:"vec_size",type:"u32"}];return a&&s.push(...a),`
      ${e.registerUniforms(s).declareVariables(i,l)}

  ${n??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${i.getByOffset("global_idx")};
    ${l.setByOffset("global_idx",p)}
  }`},ge=(e,t,r,o,u,n=e.dataType,a,d)=>{let p=[{type:12,data:Math.ceil(k.size(e.dims)/4)}];return a&&p.push(...a),{name:t,shaderCache:{hint:u,inputDependencies:["type"]},getShaderSource:i=>Cm(i,k.size(e.dims),e.dataType,n,r,o,d),getRunData:i=>({outputs:[{dims:e.dims,dataType:n}],dispatchGroup:{x:Math.ceil(k.size(i[0].dims)/64/4)},programUniforms:p})}},Ps=e=>{e.compute(ge(e.inputs[0],"Abs","abs"))},zs=e=>{e.compute(ge(e.inputs[0],"Acos","acos"))},Os=e=>{e.compute(ge(e.inputs[0],"Acosh","acosh"))},Bs=e=>{e.compute(ge(e.inputs[0],"Asin","asin"))},Ds=e=>{e.compute(ge(e.inputs[0],"Asinh","asinh"))},Ms=e=>{e.compute(ge(e.inputs[0],"Atan","atan"))},Rs=e=>{e.compute(ge(e.inputs[0],"Atanh","atanh"))},Us=e=>J(e),Vs=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ge(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Am=e=>{let t,r,o=e.length>=2&&e[1].data!==0,u=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=o?e[1].getFloat32Array()[0]:-34028234663852886e22,r=u?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=o?e[1].getUint16Array()[0]:64511,r=u?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return J({min:t,max:r})},Ns=(e,t)=>{let r=t||Am(e.inputs),o=Ee(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Clip",u=>`clamp(${u}, vec4<${o}>(uniforms.min), vec4<${o}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:o},{name:"max",type:o}]),{inputs:[0]})},Ws=e=>{e.compute(ge(e.inputs[0],"Ceil","ceil"))},Ls=e=>{e.compute(ge(e.inputs[0],"Cos","cos"))},Hs=e=>{e.compute(ge(e.inputs[0],"Cosh","cosh"))},Qt=e=>J(e),Gs=(e,t)=>{let r=Ee(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Elu",o=>`elu_vf32(${o})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Yr=(e="f32")=>`
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
}`,Fs=e=>{let t=Ee(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Yr(t)))},qs=e=>{e.compute(ge(e.inputs[0],"Exp","exp"))},js=e=>{e.compute(ge(e.inputs[0],"Floor","floor"))},Ks=e=>{let t=Ee(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Yr(t)))},Ys=(e,t)=>{let r=Ee(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"LeakyRelu",o=>`select(leaky_relu_alpha_ * ${o}, ${o}, ${o} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Xs=e=>{e.compute(ge(e.inputs[0],"Not",t=>`!${t}`))},Zs=e=>{e.compute(ge(e.inputs[0],"Neg",t=>`-${t}`))},Qs=e=>{e.compute(ge(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Js=e=>{let t=Ee(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},eu=e=>{e.compute(ge(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},tu=e=>J(e),ru=(e,t)=>{let r=Ee(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"HardSigmoid",o=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${o} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},nu=e=>{e.compute(ge(e.inputs[0],"Sin","sin"))},ou=e=>{e.compute(ge(e.inputs[0],"Sinh","sinh"))},iu=e=>{e.compute(ge(e.inputs[0],"Sqrt","sqrt"))},au=e=>{e.compute(ge(e.inputs[0],"Tan","tan"))},su=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,uu=e=>{e.compute(ge(e.inputs[0],"Tanh",su))},lo=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${su("v")};
}
`,co=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,du=e=>{let t=Ee(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"FastGelu",co,lo(t),void 0,e.inputs[0].dataType))},lu=(e,t)=>{let r=Ee(e.inputs[0].dataType);return e.compute(ge(e.inputs[0],"ThresholdedRelu",o=>`select(vec4<${r}>(0.0), ${o}, ${o} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},cu=e=>{e.compute(ge(e.inputs[0],"Log","log"))},km=(e,t)=>`
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
`,Em=e=>`quick_gelu_impl(${e})`,pu=(e,t)=>{let r=Ee(e.inputs[0].dataType);e.compute(ge(e.inputs[0],"QuickGelu",Em,km(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Pm,zm,fu,hu=V(()=>{ie(),ae(),Xr(),Pm=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},zm=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=E("input",e[0].dataType,e[0].dims,4),o=E("bias",e[0].dataType,[e[0].dims[2]],4),u=M("output",e[0].dataType,t,4),n=k.size(t)/4,a=he(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:d=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${d.declareVariables(r,o,u)}

  ${Yr(a)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${u.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},fu=e=>{Pm(e.inputs),e.compute(zm(e.inputs))}}),Om,Bm,st,gu,yu,bu,wu,_u,vu,$u,xu,Su,Tu,Iu=V(()=>{Q(),ie(),ae(),Om=(e,t,r,o,u,n,a,d,p,i,l,s)=>{let c,h;typeof d=="string"?c=h=(A,X)=>`${d}((${A}),(${X}))`:typeof d=="function"?c=h=d:(c=d.scalar,h=d.vector);let g=M("outputData",l,o.length,4),y=E("aData",p,t.length,4),C=E("bData",i,r.length,4),W;if(u)if(n){let A=k.size(t)===1,X=k.size(r)===1,ni=t.length>0&&t[t.length-1]%4===0,ii=r.length>0&&r[r.length-1]%4===0;A||X?W=g.setByOffset("global_idx",h(A?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),X?`${C.type.value}(${C.getByOffset("0")}.x)`:C.getByOffset("global_idx"))):W=`
            let outputIndices = ${g.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",g)};
            let offsetB = ${C.broadcastedIndicesToOffset("outputIndices",g)};
            ${g.setByOffset("global_idx",h(a||ni?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||ii?C.getByOffset("offsetB / 4u"):`${C.type.value}(${C.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else W=g.setByOffset("global_idx",h(y.getByOffset("global_idx"),C.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let A=(X,ni,ii="")=>{let li=`aData[indexA${ni}][componentA${ni}]`,ui=`bData[indexB${ni}][componentB${ni}]`;return`
            let outputIndices${ni} = ${g.offsetToIndices(`global_idx * 4u + ${ni}u`)};
            let offsetA${ni} = ${y.broadcastedIndicesToOffset(`outputIndices${ni}`,g)};
            let offsetB${ni} = ${C.broadcastedIndicesToOffset(`outputIndices${ni}`,g)};
            let indexA${ni} = offsetA${ni} / 4u;
            let indexB${ni} = offsetB${ni} / 4u;
            let componentA${ni} = offsetA${ni} % 4u;
            let componentB${ni} = offsetB${ni} % 4u;
            ${X}[${ni}] = ${ii}(${c(li,ui)});
          `};l===9?W=`
            var data = vec4<u32>(0);
            ${A("data",0,"u32")}
            ${A("data",1,"u32")}
            ${A("data",2,"u32")}
            ${A("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:W=`
            ${A("outputData[global_idx]",0)}
            ${A("outputData[global_idx]",1)}
            ${A("outputData[global_idx]",2)}
            ${A("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(y,C,g)}

        ${s??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${W}
      }`},Bm=(e,t,r,o,u,n,a=r.dataType)=>{let d=!k.areEqual(r.dims,o.dims),p=r.dims,i=k.size(r.dims),l=!1,s=!1,c=[d];if(d){let h=rt.calcShape(r.dims,o.dims,!1);if(!h)throw new Error("Can't perform binary op on the given tensors");p=h,i=k.size(p);let g=k.size(r.dims)===1,y=k.size(o.dims)===1,C=r.dims.length>0&&r.dims[r.dims.length-1]%4===0,W=o.dims.length>0&&o.dims[o.dims.length-1]%4===0;c.push(g),c.push(y),c.push(C),c.push(W);let A=1;for(let X=1;X<p.length;X++){let ni=r.dims[r.dims.length-X]??1,ii=o.dims[o.dims.length-X]??1;if(ni===ii)A*=ni;else break}A%4===0?(s=!0,l=!0):(g||y||C||W)&&(l=!0)}else l=!0;return c.push(l),{name:e,shaderCache:{hint:t+c.map(h=>h.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:h=>Om(h,r.dims,o.dims,p,l,d,s,u,r.dataType,o.dataType,a,n),getRunData:()=>({outputs:[{dims:p,dataType:a}],dispatchGroup:{x:Math.ceil(i/64/4)},programUniforms:[{type:12,data:Math.ceil(k.size(p)/4)},...R(r.dims,o.dims,p)]})}},st=(e,t,r,o,u,n)=>{e.compute(Bm(t,u??"",e.inputs[0],e.inputs[1],r,o,n))},gu=e=>{st(e,"Add",(t,r)=>`${t}+${r}`)},yu=e=>{st(e,"Div",(t,r)=>`${t}/${r}`)},bu=e=>{st(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},wu=e=>{st(e,"Mul",(t,r)=>`${t}*${r}`)},_u=e=>{let t=E("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;st(e,"Pow",{scalar:(r,o)=>`pow_custom(${r},${o})`,vector:(r,o)=>`pow_vector_custom(${r},${o})`},`
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
      `)},vu=e=>{st(e,"Sub",(t,r)=>`${t}-${r}`)},$u=e=>{st(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},xu=e=>{st(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Su=e=>{st(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Tu=e=>{st(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Mm,Rm,Um,Vm,Cu,Au,ku=V(()=>{Q(),ie(),Ie(),ae(),Mm=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,o=e[r],u=o.dataType,n=o.dims.length;e.forEach((a,d)=>{if(d!==r){if(a.dataType!==u)throw new Error("input tensors should be one type");if(a.dims.length!==n)throw new Error("input tensors should have the same shape");a.dims.forEach((p,i)=>{if(i!==t&&p!==o.dims[i])throw new Error("non concat dimensions must match")})}})},Rm=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Um=(e,t)=>{let r=e.length,o=[];for(let u=0;u<r;++u){let n=t.setByOffset("global_idx",e[u].getByIndices("indices"));r===1?o.push(n):u===0?o.push(`if (inputIndex == ${u}u) { ${n} }`):u===r-1?o.push(`else { ${n} }`):o.push(`else if (inputIndex == ${u}) { ${n} }`)}return o.join(`
`)},Vm=(e,t,r,o)=>{let u=k.size(r),n=new Array(e.length),a=new Array(e.length),d=0,p=[],i=[],l=[{type:12,data:u}];for(let y=0;y<e.length;++y)d+=e[y].dims[t],n[y]=d,i.push(e[y].dims.length),a[y]=E(`input${y}`,o,i[y]),p.push("rank"),l.push({type:12,data:n[y]});for(let y=0;y<e.length;++y)l.push(...R(e[y].dims));l.push(...R(r));let s=M("output",o,r.length),c=s.indicesGet("indices",t),h=Array.from(Array(n.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),g=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let C=0;C<e.length;C++)y.registerUniform(`sizeInConcatAxis${C}`,"u32");return y.declareVariables(...a,s)})()}

  ${Rm(n.length,h)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${s.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${c});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${h});
      ${c} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Um(a,s)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:r,dataType:o}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:g}},Cu=(e,t)=>{let r=e.inputs,o=r[0].dims,u=k.normalizeAxis(t.axis,o.length);Mm(r,u);let n=o.slice();n[u]=r.reduce((d,p)=>d+(p.dims.length>u?p.dims[u]:0),0);let a=r.filter(d=>k.size(d.dims)>0);e.compute(Vm(a,u,n,r[0].dataType),{inputs:a})},Au=e=>J({axis:e.axis})}),He,Ge,Fe,Zr,ct=V(()=>{Q(),ie(),He=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Ge=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Fe=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Zr=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,o]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:o}}else if(t==="Clip"){let[r,o]=e?.activation_params||[Ya,Xa];return{activation:t,clipMax:o,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Oe,Qr,Jt=V(()=>{Oe=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Qr=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Jr,po=V(()=>{Jr=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Nm,Wm,er,Eu,Lm,tr,Hm,en,rr=V(()=>{Q(),ie(),ae(),ct(),Jt(),Nm=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Wm=(e,t)=>e?`
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
        }`,er=(e,t,r="f32",o,u=!1,n=32,a=!1,d=32)=>{let p=t[1]*e[1],i=t[0]*e[0],l=u?p:n,s=u?n:p,c=l/t[0],h=n/t[1];if(!((u&&c===4&&e[1]===4||!u&&(c===3||c===4))&&l%t[0]===0&&n%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${u} is true, innerElementSize ${c} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${c} must be 3 or 4.
  tileAWidth ${l} must be divisible by workgroupSize[0]${t[0]}. tileInner ${n} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${c}<${r}>, ${l/c}>, ${s}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${i/e[0]}>, ${n}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${c};
const tileInner = ${n};

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

  let num_tiles = ${a?`${Math.ceil(d/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${d}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${h};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Nm(u,o)}
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

          ${Wm(u,c)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Eu=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Lm=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",tr=(e,t,r="f32",o,u=!1,n=32,a=!1,d=32,p=!1)=>{let i=e[1]*t[1],l=e[0]*t[0],s=u?i:n,c=u?n:i;if(!(c%t[1]===0&&s%t[0]===0&&n%t[1]===0))throw new Error(`tileAHight ${c} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${s} must be divisible by workgroupSize[0]${t[0]}, tileInner ${n} must be divisible by workgroupSize[1]${t[1]}`);let h=c/t[1],g=s/t[0],y=n/t[1],C=p?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${i};
    let globalColStart = i32(workgroupId.x) * ${l};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${c}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${s}; inputCol = inputCol + ${t[0]}) {
          ${Eu(u,o)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${t[1]}) {
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
          let ACached = ${u?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
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
let globalRowStart = i32(workgroupId.y) * ${i};

let tileRowA = i32(localId.y) * ${h};
let tileColA = i32(localId.x) * ${g};
let tileRowB = i32(localId.y) * ${y};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${g}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Eu(u,o)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
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
      ${Lm(u)}
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
  var<workgroup> mm_Asub : array<array<${r}, ${s}>, ${c}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${l}>, ${n}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${o?`let batchIndices = ${o.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(d/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${d}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${C}
  }
`},Hm=(e,t,r,o,u,n=!1)=>{let[a,d,p]=u,[i,l,s,c]=o,h=Nt(a,p),g=Nt(d,p),y=he(o[0].type.tensor),C=()=>{let A=l.rank,X=i.rank,ni=`var aIndices: ${l.type.indices};`;for(let ii=A-2-1,li=X-1;ii>=0;ii--,li--)ni+=`
aIndices[${ii}] = ${X>1?`batchIndices[${li}]`:"batchIndices"};`;return h.forEach(ii=>{ni+=`
aIndices[${ii}] = 0;`}),ni+=`
aIndices[${A-2}] = u32(row);
                   aIndices[${A-1}] = u32(colIn);`,ni},W=()=>{let A=s.rank,X=i.rank,ni=`var bIndices: ${s.type.indices};`;for(let ii=A-2-1,li=X-1;ii>=0;ii--,li--)ni+=`
bIndices[${ii}] = ${X>1?`batchIndices[${li}]`:"batchIndices"};`;return g.forEach(ii=>{ni+=`
bIndices[${ii}] = 0;`}),ni+=`
bIndices[${A-2}] = u32(row);
                   bIndices[${A-1}] = u32(colIn);`,ni};return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${Oe(e,y)} {
      var value = ${Oe(e,y)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        ${C()}
        value = ${l.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${Oe(e,y)} {
      var value = ${Oe(e,y)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        ${W()}
        value = ${s.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Oe(e,y)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${Oe(e,y)}(bias[row])`};`:""}
        ${r}
        ${c.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},en=(e,t,r,o,u=!1,n)=>{let a=e[0].dims,d=e[1].dims,p=a.slice(0,-2),i=d.slice(0,-2),l=o?o.slice(0,-2):r.slice(0,-2),s=k.size(l),c=a[a.length-2],h=a[a.length-1],g=d[d.length-1],y=h%4===0&&g%4===0,C=c<=8?[4,1,1]:[4,4,1],W=[8,8,1],A=[Math.ceil(g/W[0]/C[0]),Math.ceil(c/W[1]/C[1]),Math.ceil(s/W[2]/C[2])],X=y?4:1,ni=[...p,c,h/X],ii=ni.length,li=[...i,h,g/X],ui=li.length,hi=[s,c,g/X],yi=[{type:6,data:c},{type:6,data:g},{type:6,data:h}];Ge(t,yi),yi.push(...R(l,ni,li));let $i=["rank","rank"],Bi=e.length>2;Bi&&(yi.push(...R(e[2].dims)),$i.push("rank")),yi.push(...R(hi));let Oi=Li=>{let Ro=l.length,wi=Fr("batchDims",e[0].dataType,Ro,1),xi=he(e[0].dataType),Mo=E("a",e[0].dataType,ii,X),zo=E("b",e[1].dataType,ui,X),Ti=M("result",e[0].dataType,hi.length,X),Ei=[Mo,zo];if(Bi){let Jo=u?X:1;Ei.push(E("bias",e[2].dataType,e[2].dims.length,Jo))}let pi=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Fe(t,pi);let gi=he(Ti.type.tensor),Ni=He(t,Ti.type.value,gi),Zo=Hm(X,Bi,Ni,[wi,Mo,zo,Ti],[p,i,l],u);return`
  ${Li.registerUniforms(pi).registerInternalVariables(wi).declareVariables(...Ei,Ti)}
  ${Zo}
  ${y?er(C,W,xi,wi):tr(C,W,xi,wi)}
                   `};return{name:"MatMul",shaderCache:{hint:`${C};${t.activation};${y};${u}`,inputDependencies:$i},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:A[0],y:A[1],z:A[2]},programUniforms:yi}),getShaderSource:Oi}}}),Gm,Pu,zu=V(()=>{Q(),Xe(),ae(),ct(),Jt(),po(),rr(),Gm=(e,t,r,o,u=!1,n,a=4,d=4,p=4,i="f32")=>{let l=yi=>{switch(yi){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${i}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${yi} is not supported.`)}},s=yi=>{switch(yi){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${yi} is not supported.`)}},c=e?`
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
    `,g=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",C=e?"row":"col",W=e?"col":"row",A=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${C} / outWidth;
    let outCol = ${C} % outWidth;

    let WRow = ${W} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${W} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${W} % inChannels;
    var resData = ${Oe(a,i)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${g} && xCol >= 0 && xCol < ${y}) {
      ${c}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${l(a)}
    }
    return resData;`,X=e?t&&o?`
    let col = colIn * ${a};
    ${A}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${A}
    }
    return ${Oe(a,i)}(0.0);`:o&&r?`
    let col = colIn * ${a};
    ${A}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${A}
    }
    return ${Oe(a,i)}(0.0);`,ni=`${s(d)}`,ii=Oe(p,i),li=Oe(e?a:d,i),ui=Oe(e?d:a,i),hi=He(n,ii,i);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${li} {
      ${e?X:ni}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${ui} {
      ${e?ni:X}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${ii}) {
      let col = colIn * ${p};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${h}
      ${Qr(u)}
      ${hi}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Pu=(e,t,r,o,u,n,a,d,p)=>{let i=t.format==="NHWC",l=i?e[0].dims[3]:e[0].dims[1],s=r[0],c=i?r[2]:r[3],h=i?r[1]:r[2],g=i?r[3]:r[1],y=i&&(l%4===0||l%3===0)&&g%4===0,C=i?g:c*h,W=i?c*h:g,A=[8,8,1],X=o<=8?[4,1,1]:[4,4,1],ni=[Math.ceil(C/A[0]/X[0]),Math.ceil(W/A[1]/X[1]),Math.ceil(s/A[2]/X[2])];me("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${ni}`);let ii=y?i&&l%4!==0?3:4:1,li=A[1]*X[1],ui=A[0]*X[0],hi=Math.max(A[0]*ii,A[1]),yi=o%li===0,$i=u%ui===0,Bi=n%hi===0,Oi=y?[ii,4,4]:[1,1,1],Li=[{type:6,data:o},{type:6,data:u},{type:6,data:n},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ge(t,Li),Li.push(...R(e[0].dims,e[1].dims));let Ro=["rank","rank"];a&&(Li.push(...R(e[2].dims)),Ro.push("rank")),Li.push(...R(r));let wi=xi=>{let Mo=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Fe(t,Mo);let zo=y?4:1,Ti=he(e[0].dataType),Ei=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${Ti}>`:Ti}) {
        result[flatIndex] = ${y?`vec4<${Ti}>`:Ti}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${Ti}>`:Ti}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,pi=E("x",e[0].dataType,e[0].dims.length,ii===3?1:ii),gi=E("w",e[1].dataType,e[1].dims.length,zo),Ni=[pi,gi],Zo=M("result",e[0].dataType,r.length,zo);if(a){let Jo=E("bias",e[2].dataType,e[2].dims.length,zo);Ni.push(Jo),Ei+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${Ti}>`:Ti} {
          return bias[coords.${i?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${Jr("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${xi.registerUniforms(Mo).declareVariables(...Ni,Zo)}
        ${Ei}
        ${Gm(i,yi,$i,Bi,a,t,Oi[0],Oi[1],Oi[2],Ti)}
        ${y?er(X,A,Ti,void 0,!i,hi):tr(X,A,Ti,void 0,!i,hi,!1,void 0,d)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${ii};${y};${yi};${$i};${Bi};${li};${ui};${hi}`,inputDependencies:Ro},getRunData:()=>({outputs:[{dims:p?p(r):r,dataType:e[0].dataType}],dispatchGroup:{x:ni[0],y:ni[1],z:ni[2]},programUniforms:Li}),getShaderSource:wi}}}),Fm,Ou,tn,qm,Bu,jm,Du,Mu,Ru=V(()=>{Q(),Xe(),ie(),ae(),ct(),Jt(),Fm=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Ou=e=>typeof e=="number"?[e,e,e]:e,tn=(e,t)=>t<=1?e:e+(e-1)*(t-1),qm=(e,t,r,o=1)=>{let u=tn(t,o);return Math.floor((e[0]*(r-1)-r+u)/2)},Bu=(e,t,r,o,u)=>{u==null&&(u=qm(e,t[0],o[0]));let n=[0,0,0,r];for(let a=0;a<3;a++)e[a]+2*u>=t[a]&&(n[a]=Math.trunc((e[a]-t[a]+2*u)/o[a]+1));return n},jm=(e,t,r,o,u,n,a,d,p,i)=>{let l,s,c,h;if(e==="VALID"&&(e=0),typeof e=="number"){l={top:e,bottom:e,left:e,right:e,front:e,back:e};let g=Bu([t,r,o,1],[d,p,i],1,[u,n,a],e);s=g[0],c=g[1],h=g[2]}else if(Array.isArray(e)){if(!e.every((y,C,W)=>y===W[0]))throw Error(`Unsupported padding parameter: ${e}`);l={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let g=Bu([t,r,o,1],[d,p,i],1,[u,n,a],e[0]);s=g[0],c=g[1],h=g[2]}else if(e==="SAME_UPPER"){s=Math.ceil(t/u),c=Math.ceil(r/n),h=Math.ceil(o/a);let g=(s-1)*u+d-t,y=(c-1)*n+p-r,C=(h-1)*a+i-o,W=Math.floor(g/2),A=g-W,X=Math.floor(y/2),ni=y-X,ii=Math.floor(C/2),li=C-ii;l={top:X,bottom:ni,left:ii,right:li,front:W,back:A}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:l,outDepth:s,outHeight:c,outWidth:h}},Du=(e,t,r,o,u,n=!1,a="channelsLast")=>{let d,p,i,l,s;if(a==="channelsLast")[d,p,i,l,s]=e;else if(a==="channelsFirst")[d,s,p,i,l]=e;else throw new Error(`Unknown dataFormat ${a}`);let[c,,h,g,y]=t,[C,W,A]=Ou(r),[X,ni,ii]=Ou(o),li=tn(h,X),ui=tn(g,ni),hi=tn(y,ii),{padInfo:yi,outDepth:$i,outHeight:Bi,outWidth:Oi}=jm(u,p,i,l,C,W,A,li,ui,hi),Li=n?c*s:c,Ro=[0,0,0,0,0];return a==="channelsFirst"?Ro=[d,Li,$i,Bi,Oi]:a==="channelsLast"&&(Ro=[d,$i,Bi,Oi,Li]),{batchSize:d,dataFormat:a,inDepth:p,inHeight:i,inWidth:l,inChannels:s,outDepth:$i,outHeight:Bi,outWidth:Oi,outChannels:Li,padInfo:yi,strideDepth:C,strideHeight:W,strideWidth:A,filterDepth:h,filterHeight:g,filterWidth:y,effectiveFilterDepth:li,effectiveFilterHeight:ui,effectiveFilterWidth:hi,dilationDepth:X,dilationHeight:ni,dilationWidth:ii,inShape:e,outShape:Ro,filterShape:t}},Mu=(e,t,r,o,u,n)=>{let a=n==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let d=[64,1,1],p={x:r.map((C,W)=>W)},i=[Math.ceil(Fm(p.x.map(C=>r[C]))/d[0]),1,1];me("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${i}`);let l=1,s=k.size(r),c=[{type:12,data:s},{type:12,data:o},{type:12,data:u},{type:12,data:t.strides},{type:12,data:t.dilations}];Ge(t,c),c.push(...R(e[0].dims,e[1].dims));let h=["rank","rank"],g=e.length===3;g&&(c.push(...R(e[2].dims)),h.push("rank")),c.push(...R(r));let y=C=>{let W=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:o.length},{name:"pads",type:"u32",length:u.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Fe(t,W);let A=1,X=he(e[0].dataType),ni=E("x",e[0].dataType,e[0].dims.length,l),ii=E("W",e[1].dataType,e[1].dims.length,A),li=[ni,ii],ui=M("result",e[0].dataType,r.length,A),hi="";if(g){let Bi=E("bias",e[2].dataType,e[2].dims.length,A);li.push(Bi),hi+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${X} {
          return bias[${a?F("coords",4,5):F("coords",1,5)}];
        }`}let yi=Oe(l,X),$i=He(t,yi,X);return`
            ${hi}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${ni.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${ii.getByIndices("aIndices")};
            }
          ${C.registerUniforms(W).declareVariables(...li,ui)}
          ${C.mainStart()}
          ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${ui.offsetToIndices("global_idx")};
              let batch = ${F("coords",0,ni.rank)};
              let d2 = ${a?F("coords",ni.rank-1,ni.rank):F("coords",1,ni.rank)};
              let xFRCCorner = vec3<u32>(${a?F("coords",1,ni.rank):F("coords",2,ni.rank)},
              ${a?F("coords",2,ni.rank):F("coords",3,ni.rank)},
              ${a?F("coords",3,ni.rank):F("coords",4,ni.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?F("uniforms.x_shape",1,ni.rank):F("uniforms.x_shape",2,ni.rank)};
              let xShapeZ = ${a?F("uniforms.x_shape",2,ni.rank):F("uniforms.x_shape",3,ni.rank)};
              let xShapeW = ${a?F("uniforms.x_shape",3,ni.rank):F("uniforms.x_shape",4,ni.rank)};
              let xShapeU = ${a?F("uniforms.x_shape",4,ni.rank):F("uniforms.x_shape",1,ni.rank)};
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
              ${g?"value = value + getBiasByOutputCoords(coords)":""};
              ${$i}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${l};${g}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:i[0],y:i[1],z:i[2]},programUniforms:c}),getShaderSource:y}}}),Uu,Vu,Nu=V(()=>{Q(),ie(),ae(),ct(),Uu=(e,t,r,o)=>{let u=e.length>2,n=u?"value += b[output_channel];":"",a=e[0].dims,d=e[1].dims,p=t.format==="NHWC",i=p?r[3]:r[1],l=i/t.group,s=p&&l>=4?we(i):1,c=k.size(r)/s,h=[{type:12,data:c},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:l}];Ge(t,h),h.push(...R(a,[d[0],d[1],d[2],d[3]/s]));let g=u?["rank","rank","rank"]:["rank","rank"];h.push(...R([r[0],r[1],r[2],r[3]/s]));let y=C=>{let W=M("output",e[0].dataType,r.length,s),A=he(W.type.tensor),X=He(t,W.type.value,A),ni=E("x",e[0].dataType,a.length),ii=E("w",e[1].dataType,d.length,s),li=[ni,ii];u&&li.push(E("b",e[2].dataType,e[2].dims,s));let ui=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Fe(t,ui);let hi=p?`
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
            let xVal = ${ni.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${ii.get("wHeight","wWidth","wInChannel","output_channel")};
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

            let xVal = ${ni.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${ii.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${C.registerUniforms(ui).declareVariables(...li,W)}

  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${W.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${p?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${p?1:2}], outputIndices[${p?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${s} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${p?2:1}];

    var value: ${W.type.value} = ${W.type.value}(0);
    ${hi}
    ${n}
    ${X}
    ${W.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${s}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o?o(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:h}),getShaderSource:y}},Vu=(e,t,r,o)=>{let u=e.length>2,n=we(r[3]),a=we(r[2]),d=k.size(r)/n/a,p=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],i=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],l=[r[0],r[1],r[2],r[3]/n],s=[{type:12,data:d},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ge(t,s),s.push(...R(p,i,l));let c=(a-1)*t.strides[1]+i[1],h=g=>{let y=M("output",e[0].dataType,l.length,n),C=he(y.type.tensor),W=He(t,y.type.value,C),A=E("x",e[0].dataType,p.length,n),X=E("w",e[1].dataType,i.length,n),ni=[A,X];u&&ni.push(E("b",e[2].dataType,e[2].dims,n));let ii=u?"value += b[output_channel];":"",li=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Fe(t,li),`
  ${g.registerUniforms(li).declareVariables(...ni,y)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${a}u;
    let col = (index1 % width1) * ${a}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${A.type.value}, ${c}>;
    var values: array<${y.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${i[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${c}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${A.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${A.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${i[1]}; w_width++) {
          let w_val = ${X.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${ii}
      ${W}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${a};${c};${i[0]};${i[1]}`,inputDependencies:u?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:o?o(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:s}),getShaderSource:h}}}),mo,Km,Wu,fo=V(()=>{Q(),ie(),rr(),ae(),ct(),mo=(e,t,r,o,u=!1,n)=>{let a=e[0].dims,d=e[1].dims,p=a[a.length-2],i=d[d.length-1],l=a[a.length-1],s=we(i),c=we(l),h=we(p),g=k.size(r)/s/h,y=e.length>2,C=o?o.slice(0,-2):r.slice(0,-2),W=[k.size(C),p,i],A=[{type:12,data:g},{type:12,data:p},{type:12,data:i},{type:12,data:l}];Ge(t,A),A.push(...R(C,a,d)),y&&A.push(...R(e[2].dims)),A.push(...R(W));let X=ni=>{let ii=Fr("batch_dims",e[0].dataType,C.length),li=E("a",e[0].dataType,a.length,c),ui=E("b",e[1].dataType,d.length,s),hi=M("output",e[0].dataType,W.length,s),yi=he(hi.type.tensor),$i=He(t,hi.type.value,yi),Bi=[li,ui],Oi="";if(y){let Ei=u?s:1;Bi.push(E("bias",e[2].dataType,e[2].dims.length,Ei)),Oi=`${u?`value += bias[col / ${Ei}];`:`value += ${hi.type.value}(bias[row + i]);`}`}let Li=a.slice(0,-2),Ro=d.slice(0,-2),wi=Nt(Li,C),xi=Nt(Ro,C),Mo=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Fe(t,Mo);let zo=(Ei,pi)=>{let gi=Ei.rank,Ni=Ei.name;if(gi===2)return`var ${Ni}_indices = ${Ei.type.indices}(0u, 0u);`;let Zo=ii.rank,Jo=`var ${Ni}_indices: ${Ei.type.indices};`;for(let Kh=gi-2-1,Hh=Zo-1;Kh>=0;Kh--,Hh--)Jo+=`
${Ni}_indices[${Kh}] = ${Zo>1?`batch_indices[${Hh}]`:"batch_indices"};`;return pi.forEach(Kh=>{Jo+=`
${Ni}_indices[${Kh}] = 0;`}),Jo+=`${Ni}_indices[${gi-2}] = 0u;
                     ${Ni}_indices[${gi-1}] = 0u;`,Jo},Ti=()=>{let Ei=`var a_data: ${li.type.value};`;for(let pi=0;pi<c;pi++)Ei+=`
              let b_data${pi} = b[(b_offset + (k + ${pi}) * uniforms.N + col) / ${s}];`;for(let pi=0;pi<h;pi++){Ei+=`a_data = a[(a_offset + (row + ${pi}) * uniforms.K + k) / ${c}];`;for(let gi=0;gi<c;gi++)Ei+=`
            values[${pi}] = fma(${ui.type.value}(a_data${c===1?"":`[${gi}]`}), b_data${gi}, values[${pi}]);
`}return Ei};return`
  ${ni.registerUniforms(Mo).registerInternalVariables(ii).declareVariables(...Bi,hi)}
  ${ni.mainStart()}
    ${ni.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${s})) * ${s};
    var index1 = global_idx / (uniforms.N / ${s});
    let stride1 = uniforms.M / ${h};
    let row = (index1 % stride1) * ${h};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${ii.offsetToIndices("batch")};`}
    ${zo(li,wi)}
    let a_offset = ${li.indicesToOffset("a_indices")};
    ${zo(ui,xi)}
    let b_offset = ${ui.indicesToOffset("b_indices")};
    var values: array<${hi.type.value}, ${h}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${c}) {
      ${Ti()}
    }
    for (var i = 0u; i < ${h}u; i++) {
      var value = values[i];
      ${Oi}
      ${$i}
      let cur_indices = ${hi.type.indices}(batch, row + i, col);
      let offset = ${hi.indicesToOffset("cur_indices")};
      ${hi.setByOffset(`offset / ${s}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${s};${c};${h};${u}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:A}),getShaderSource:X}},Km=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Wu=e=>{Km(e.inputs);let t=rt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],o=e.inputs[0].dims[e.inputs[0].dims.length-1];r<8&&o<8?e.compute(mo(e.inputs,{activation:""},t)):e.compute(en(e.inputs,{activation:""},t))}}),Ym,ho,Xm,go,yo,Lu,Zm,Qm,bo,Hu=V(()=>{ie(),zu(),Ru(),rr(),Nu(),ct(),fo(),lt(),Ym=(e,t,r,o,u,n)=>{let a=e[0],d=e.slice(n?1:2,n?3:4),p=d.length,i=t[0],l=t.slice(2).map((c,h)=>c+(c-1)*(r[h]-1)),s=d.map((c,h)=>c+o[h]+o[h+p]).map((c,h)=>Math.floor((c-l[h]+u[h])/u[h]));return s.splice(0,0,a),s.splice(n?3:1,0,i),s},ho=[2,3,1,0],Xm=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],o=e[1].dims[1]*t.group;if(r!==o)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let u=e[0].dims.length-2;if(t.dilations.length!==u)throw new Error(`dilations should be ${u}D`);if(t.strides.length!==u)throw new Error(`strides should be ${u}D`);if(t.pads.length!==u*2)throw new Error(`pads should be ${u*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},go=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let n=2;n<t[1].dims.length;++n)r[n-2]===0&&(r[n-2]=t[1].dims[n]);let o=e.pads.slice();Ct.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,o,e.format==="NHWC",e.autoPad);let u=Object.assign({},e);return Object.assign(u,{kernelShape:r,pads:o}),u},yo=e=>{let t=Zr(e),r=e.format,o=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],u=e.dilations,n=e.group,a=e.kernel_shape,d=e.pads,p=e.strides,i=e.w_is_const();return{autoPad:o,format:r,dilations:u,group:n,kernelShape:a,pads:d,strides:p,wIsConst:i,...t,cacheKey:`${e.format};${t.activation};`}},Lu=(e,t,r,o)=>{let u=r.format==="NHWC",n=Ym(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,u);if(r.group!==1){let li=[t[0]];if(u){let ui=e.kernelCustomData.wT??e.compute(Pe(t[1],ho),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=ui),li.push(ui)}else li.push(t[1]);t.length===3&&li.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&u&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Vu(li,r,n,o),{inputs:li}):e.compute(Uu(li,r,n,o),{inputs:li});return}let a=t.length===3,d=t[0].dims[u?1:2],p=t[0].dims[u?2:3],i=t[0].dims[u?3:1],l=t[1].dims[2],s=t[1].dims[3],c=n[u?1:2],h=n[u?2:3],g=n[u?3:1],y=u&&l===d&&s===p&&r.pads[0]===0&&r.pads[1]===0;if(y||l===1&&s===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let li=n[0],ui,hi,yi,$i=[];if(u){let Li=e.kernelCustomData.wT??e.compute(Pe(t[1],ho),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=Li),y){let Ro=d*p*i;ui=t[0].reshape([1,li,Ro]),hi=Li.reshape([1,Ro,g]),yi=[1,li,g]}else ui=t[0].reshape([li,d*p,i]),hi=Li.reshape([1,i,g]),yi=[li,c*h,g];$i.push(ui),$i.push(hi)}else ui=t[0].reshape([li,i,d*p]),hi=t[1].reshape([1,g,i]),yi=[li,g,c*h],$i.push(hi),$i.push(ui);a&&$i.push(t[2]);let Bi=yi[2],Oi=$i[0].dims[$i[0].dims.length-1];Bi<8&&Oi<8?e.compute(mo($i,r,n,yi,u,o),{inputs:$i}):e.compute(en($i,r,n,yi,u,o),{inputs:$i});return}let C=!0,W=e.kernelCustomData.wT??e.compute(Pe(t[1],ho),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=W);let A=[t[0],W];a&&A.push(t[2]);let X=u?c*h:g,ni=u?g:c*h,ii=l*s*i;e.compute(Pu(A,r,n,X,ni,ii,a,C,o),{inputs:A})},Zm=(e,t)=>{let r=t.format==="NHWC",o=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&o.push(e.inputs[2]);let u=[0,t.pads[0],0,t.pads[1]],n=[1].concat(t.strides),a=[1].concat(t.dilations),d=[1].concat(t.kernelShape),p=go({...t,pads:u,strides:n,dilations:a,kernelShape:d},o);Lu(e,o,p,i=>r?[i[0],i[2],i[3]]:[i[0],i[1],i[3]])},Qm=(e,t,r)=>{let o=r.format==="NHWC"?"channelsLast":"channelsFirst",u=go(r,t),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,a=Du(t[0].dims,t[1].dims,r.strides,r.dilations,n,!1,o);e.compute(Mu(t,u,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],o))},bo=(e,t)=>{if(Xm(e.inputs,t),e.inputs[0].dims.length===3)Zm(e,t);else if(e.inputs[0].dims.length===5)Qm(e,e.inputs,t);else{let r=go(t,e.inputs);Lu(e,e.inputs,r)}}}),Jm,Gu,Fu=V(()=>{Q(),Xe(),ae(),ct(),Jt(),po(),rr(),Jm=(e,t=!1,r,o,u=4)=>{let n=C=>{switch(C){case 1:return"return w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];";case 4:return`
            let coord1 = vec4<i32>(coordX, coordY, col + 1, rowInner);
            let coord2 = vec4<i32>(coordX, coordY, col + 2, rowInner);
            let coord3 = vec4<i32>(coordX, coordY, col + 3, rowInner);
            let v0 = w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];
            let v1 = w[getIndexFromCoords4D(coord1, vec4<i32>(uniforms.w_shape))];
            let v2 = w[getIndexFromCoords4D(coord2, vec4<i32>(uniforms.w_shape))];
            let v3 = w[getIndexFromCoords4D(coord3, vec4<i32>(uniforms.w_shape))];
            return ${o}(v0, v1, v2, v3);
            `;default:throw new Error(`innerElementSize ${C} is not supported.`)}},a=e?`
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
    `,p=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",i=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",l=e?"row":"col",s=e?"col":"row",c=`
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      let outRow = ${l} / outWidth;
      let outCol = ${l} % outWidth;

      let WRow = ${s} / (uniforms.filter_dims[1] * inChannels);
      let WCol = ${s} / inChannels % uniforms.filter_dims[1];
      let xR = f32(outRow - uniforms.pads[0] + uniforms.dilations[0] * WRow) / f32(uniforms.strides[0]);
      let xC = f32(outCol - uniforms.pads[1] + uniforms.dilations[1] * WCol) / f32(uniforms.strides[1]);
      if (xR < 0.0 || xR >= f32(${p}) || fract(xR) > 0.0) {
        return ${o}(0.0);
      }
      if (xC < 0.0 || xC >= f32(${i}) || fract(xC) > 0.0) {
        return ${o}(0.0);
      }
      let iXR = i32(xR);
      let iXC = i32(xC);
      let xCh = ${s} % inChannels;
      ${a}
      return x[getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape))/${u}];`,h=e?`
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
        ${c}
      }
      return ${o}(0.0);`:`
      let col = colIn * ${u};
      if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
        ${c}
      }
      return ${o}(0.0);`,g=`
      let col = colIn * ${u};
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let coordX = uniforms.filter_dims[0] - 1 - row / (uniforms.filter_dims[1] * inChannels);
      let coordY = uniforms.filter_dims[1] - 1 - (row / inChannels) % uniforms.filter_dims[1];
      if (${e?"row < uniforms.dim_inner && col < uniforms.dim_b_outer":"row < uniforms.dim_inner && col < uniforms.dim_a_outer"}  && coordX >= 0 && coordY >= 0) {
        let rowInner = row % inChannels;
        let coord = vec4<i32>(coordX, coordY, col, rowInner);
        ${n(u)}
      }
      return ${o}(0.0);
      `,y=He(r,o);return`
  fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${o} {
    ${e?h:g}
  }

  fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${o} {
    ${e?g:h}
  }

  fn mm_write(batch: i32, row : i32, colIn : i32, valueInput : ${o}) {
    let col = colIn * ${u};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
      var value = valueInput;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${d}
      ${Qr(t)}
      ${y}
      result[getIndexFromCoords4D(coords, vec4<i32>(uniforms.result_shape))/${u}] = value;
    }
  }`},Gu=(e,t,r,o,u,n,a,d)=>{let p=t.format==="NHWC",i=p?e[0].dims[3]:e[0].dims[1],l=r[0],s=p?r[2]:r[3],c=p?r[1]:r[2],h=p?r[3]:r[1],g=p&&i%4===0&&i%3&&h%4===0,y=p?h:s*c,C=p?s*c:h,W=[8,8,1],A=o<=8?[4,1,1]:[4,4,1],X=[Math.ceil(y/W[0]/A[0]),Math.ceil(C/W[1]/A[1]),Math.ceil(l/W[2]/A[2])];me("verbose",()=>`[conv_backprop_mm_webgpu] dispatch = ${X}`);let ni=g?4:1,ii=Math.max(W[0]*ni,W[1]),li=g?4:1,ui=[t.kernelShape[p?1:2],t.kernelShape[p?2:3]],hi=[ui[0]+(t.dilations[0]<=1?0:(ui[0]-1)*(t.dilations[0]-1)),ui[1]+(t.dilations[1]<=1?0:(ui[1]-1)*(t.dilations[1]-1))],yi=[hi[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),hi[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],$i=[{type:6,data:o},{type:6,data:u},{type:6,data:n},{type:6,data:t.strides},{type:6,data:t.dilations},{type:6,data:ui},{type:6,data:yi}];Ge(t,$i),$i.push(...R(e[0].dims,e[1].dims));let Bi=["rank","rank"];a&&($i.push(...R(e[2].dims)),Bi.push("rank")),$i.push(...R(r));let Oi=Li=>{let Ro=E("x",e[0].dataType,e[0].dims.length,li),wi=E("w",e[1].dataType,e[1].dims.length,1),xi=M("result",e[0].dataType,r.length,li),Mo=[Ro,wi],zo="";if(a){let pi=E("bias",e[2].dataType,e[2].dims.length,li);Mo.push(pi),zo+=`
          fn getBiasByOutputCoords(coords : vec4<i32>) -> ${pi.type.value} {
            return bias[coords.${p?"w":"y"}${g?"/ 4":""}];
          }`}let Ti=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"strides",type:"i32",length:2},{name:"dilations",type:"i32",length:2},{name:"filter_dims",type:"i32",length:ui.length},{name:"pads",type:"i32",length:yi.length}];Fe(t,Ti);let Ei=he(e[0].dataType,1);if(Ei!=="f16"&&Ei!=="f32")throw new Error(`elemType ${Ei} is not supported.`);return`
        ${Jr("uniforms.result_strides")}
        ${Li.registerUniforms(Ti).declareVariables(...Mo,xi)};
        ${zo}
        ${Jm(p,a,t,Ro.type.value,ni)}
        ${g?er(A,W,Ei,void 0,!p,ii):tr(A,W,Ei,void 0,!p,ii,!1,void 0,d)}`};return{name:"Conv2DTransposeMatMul",shaderCache:{hint:`${t.cacheKey};${A};${W};${g}`,inputDependencies:Bi},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:X[0],y:X[1],z:X[2]},programUniforms:$i}),getShaderSource:Oi}}}),ef,wo,qu=V(()=>{Q(),Xe(),ie(),ae(),ef=(e,t,r,o,u,n=!1,a,d,p=!1)=>{let i=p?1:2,l=p?2:3,s=p?3:1,c=n?2:1,h=`
  fn setOutputAtIndex(flatIndex : u32, value : ${n?`vec4<${a}>`:a}) {
    result[flatIndex] = ${n?`vec4<${a}>`:a}(value);
  }`;o&&(h+=`
    fn getBiasByOutputCoords(coords : vec4<u32>) -> ${n?`vec4<${a}>`:a} {
      return bias[coords.${p?"w":"y"}${n?"/ 4":""}];
    }`);let g=n?4:1,y=E("W",t[1].dataType,t[1].dims.length,g),C=E("Dy",t[0].dataType,t[0].dims.length,g),W=[C,y];o&&W.push(E("bias",t[2].dataType,[r[s]].length,g));let A=M("result",t[0].dataType,r.length,g),X=`{
        let batch: u32 = ${u?"global_id.z":"workgroup_id.z"} / uniforms.result_shape[1];
        let r = ${u?"global_id.z":"workgroup_id.z"} % uniforms.result_shape[1];
        let c = ${u?"global_id.y":"workgroup_id.y"} * ${c};
        let d1: u32 = ${u?"global_id.x":"workgroup_id.x"} * 4;

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
                let wValue0 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${C.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${a}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;

                xValue =  ${C.get("batch","idyR","idyC2","d2")};

                dotProd[1] = dotProd[1] + vec4<${a}>(dot(xValue, wValue0),
                                                    dot(xValue, wValue1),
                                                    dot(xValue, wValue2),
                                                    dot(xValue, wValue3));
              }
            } else if (bDyCVal) {
              let d2Length = uniforms.Dy_shape[${s}];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${C.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${a}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;
              }
            } else if (bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${C.get("batch","idyR","idyC2","d2")};
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
          ${A.set("batch","r","c + i","d1","value")};
        }
      }`,ni=`
          let outputIndices = ${A.offsetToIndices("global_idx")};
          let batch = ${A.indicesGet("outputIndices",0)};
          let d1 = ${A.indicesGet("outputIndices",s)};
          let r = ${A.indicesGet("outputIndices",i)};
          let c = ${A.indicesGet("outputIndices",l)};
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
            if (dyR < 0.0 || dyR >= ${a}(uniforms.Dy_shape[${i}]) || fract(dyR) > 0.0 ||
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
                let xValue = ${p?C.get("batch","idyR","idyC","inputChannel"):C.get("batch","inputChannel","idyR","idyC")};
                let wValue = ${y.get("inputChannel","wOutChannel","u32(wRPerm)","u32(wCPerm)")};
                dotProd = dotProd + xValue * wValue;
                inputChannel = inputChannel + 1;
              }
            }
          }
          let value = dotProd + ${o?"bias[d1]":`${a}(0.0)`};
          ${A.setByOffset("global_idx","value")};
        `;return`
  ${e.registerUniforms(d).declareVariables(...W,A)}
  ${h}

    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
  ${n?X:ni}}`},wo=(e,t,r)=>{let o=e.length>2,u=t.outputShape,n=k.size(u),a=[Math.ceil(n/64),1,1];me("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${a}`);let d=t.format==="NHWC",p=["rank","rank"],i=[t.strides[0],t.strides[1]],l=[t.kernelShape[d?1:2],t.kernelShape[d?2:3]],s=[t.dilations[0],t.dilations[1]],c=[l[0]+(t.dilations[0]<=1?0:(t.kernelShape[d?1:2]-1)*(t.dilations[0]-1)),l[1]+(t.dilations[1]<=1?0:(t.kernelShape[d?2:3]-1)*(t.dilations[1]-1))],h=[c[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),c[1]-1-Math.floor(t.pads[1]+t.pads[3])/2],g=!1,y=t.group,C=e[1].dims,W=C[0]/y,A=C[1],X=[{type:12,data:n},{type:12,data:i},{type:12,data:l},{type:12,data:s},{type:12,data:c},{type:6,data:h},{type:12,data:W},{type:12,data:A},...R(e[0].dims,e[1].dims)];o&&(X.push(...R(e[2].dims)),p.push("rank")),X.push(...R(u));let ni=a[1]===1&&a[2]===1,ii=li=>{let ui=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:i.length},{name:"filter_dims",type:"u32",length:l.length},{name:"dilations",type:"u32",length:l.length},{name:"effective_filter_dims",type:"u32",length:c.length},{name:"pads",type:"i32",length:h.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],hi=he(e[0].dataType);return`${ef(li,e,u,o,ni,g,hi,ui,d)}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};`,inputDependencies:p},getRunData:()=>({dispatchGroup:{x:a[0],y:a[1],z:a[2]},outputs:[{dims:r?r(u):u,dataType:e[0].dataType}],programUniforms:X}),getShaderSource:ii}}}),tf,rf,nf,ju,Ku,of,af,sf,uf,Yu,Xu=V(()=>{Fu(),qu(),ct(),lt(),tf=(e,t,r,o,u,n)=>(e-1)*t+r+(o-1)*u+1-n,rf=(e,t,r,o,u)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[o]=n,r[u]=e-n):t==="SAME_LOWER"&&(r[o]=e-n,r[u]=n)},nf=(e,t,r,o,u,n,a,d,p,i)=>{let l=e.length-2,s=i.length===0;p.length<l&&p.push(...Array(l-p.length).fill(0));let c=e[0],h=t[d?3:1]*u;for(let g=0,y=e.length-l-(d?1:0);g<l;++g,++y){let C=e[y],W=s?C*a[g]:i[g],A=tf(C,a[g],n[g],t[y],r[g],W);rf(A,o,n,g,g+l),s&&i.push(a[g]*(C-1)+p[g]+(t[y]-1)*r[g]+1-n[g]-n[g+l])}i.splice(0,0,c),i.splice(d?3:1,0,h)},ju=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((s,c)=>s*c,1)===0){r.length=0;for(let s=2;s<t[1].dims.length;++s)r.push(t[1].dims[s])}let o=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(o?3:1,0,t[1].dims[1]);let u=e.pads.slice(),n=e.outputShape.slice(),a=e.outputPadding.slice(),d=t[0].dims,p=e.dilations.slice();if(p.reduce((s,c)=>s+c,0)===0){let s=t[0].dims.length-2;p=new Array(s).fill(1)}let i=e.strides.slice();if(i.reduce((s,c)=>s+c,0)===0){let s=t[0].dims.length-2;i=new Array(s).fill(1)}nf(d,r,p,e.autoPad,e.group,u,i,o,a,n);let l=Object.assign({},e);return Object.assign(l,{kernelShape:r,pads:u,outputPadding:a,outputShape:n,dilations:p,strides:i}),l},Ku=e=>{let t=Zr(e),r=e.format,o=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],u=e.dilations,n=e.group,a=e.kernelShape,d=e.pads,p=e.strides,i=e.wIsConst(),l=e.outputPadding,s=e.outputShape;return{autoPad:o,format:r,dilations:u,group:n,kernelShape:a,outputPadding:l,outputShape:s,pads:d,strides:p,wIsConst:i,...t,cacheKey:`${e.format};${t.activation};`}},of=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],o=e[1].dims[0];if(r!==o)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let u=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==u))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.reduce((a,d)=>a+d,0)>0&&t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.reduce((a,d)=>a+d,0)>0&&t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.reduce((a,d)=>a+d,0)>0&&t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.reduce((a,d)=>a+d,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},af=[2,3,1,0],sf=(e,t,r)=>{let o=ju(r,t),u=r.format==="NHWC",n=o.outputShape,a=n[u?3:1],d=t[0].dims[u?3:1];if(o.group!==1||a===1&&d===1){e.compute(wo(t,o));return}let p=n[u?1:2],i=n[u?2:3],l=t[1].dims[2],s=t[1].dims[3],c=u?p*i:a,h=u?a:p*i,g=l*s*d,y=!0,C=e.kernelCustomData.wT??e.compute(Pe(t[1],af),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C);let W=[t[0],C],A=t.length===3;A&&(!u&&t[2].dims.length===1?W.push(t[2].reshape([t[2].dims[0],1,1])):W.push(t[2])),e.compute(Gu(W,o,n,c,h,g,A,y),{inputs:W})},uf=(e,t)=>{let r=t.format==="NHWC",o=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&o.push(e.inputs[2]);let u=t.kernelShape;(u.length===0||u[0]===0)&&(u=[e.inputs[1].dims[2]]);let n=t.dilations;(n.length===0||n[0]===0)&&(n=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let d=t.pads;d.length===0&&(d=[0,0]),d=[0,d[0],0,d[1]],a=[1].concat(a),n=[1].concat(n),u=[1].concat(u);let p=ju({...t,pads:d,strides:a,dilations:n,kernelShape:u},o);e.compute(wo(o,p,i=>r?[i[0],i[2],i[3]]:[i[0],i[1],i[3]]))},Yu=(e,t)=>{of(e.inputs,t),e.inputs[0].dims.length===3?uf(e,t):sf(e,e.inputs,t)}}),df,Zu,Qu,Ju=V(()=>{Q(),ie(),Ie(),ae(),df=(e,t,r,o)=>{let u=k.size(t),n=t.length,a=E("input",e,n),d=M("output",e,n),p=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),i=k.normalizeAxis(p,n),l=s=>{let c=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,h=F("uniforms.input_shape","uniforms.axis",n),g=o.reverse?c+(o.exclusive?" + 1":""):"0",y=o.reverse?h:c+(o.exclusive?"":" + 1");return`
                ${s.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,d)}
                ${s.mainStart()}
                  ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${d.offsetToIndices("global_idx")};
                  var sum = ${d.type.value}(0);
                  let first : i32 = ${g};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${d.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:o.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:[{type:12,data:u},{type:12,data:i},...R(t,t)]}),getShaderSource:l}},Zu=(e,t)=>{let r=e.inputs[0].dims,o=e.inputs[0].dataType,u=e.inputs[1];e.compute(df(o,r,u,t),{inputs:[0]})},Qu=e=>{let t=e.exclusive===1,r=e.reverse===1;return J({exclusive:t,reverse:r})}}),lf,cf,pf,ed,td,rd=V(()=>{Q(),ie(),Ie(),ae(),lf=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},cf=(e,t,r,o)=>{let u=[];u.push(`fn perm(i: ${o.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)u.push(r.indicesSet("a",e[n],`i[${n}]`));return u.push("return a;}"),u.join(`
`)},pf=(e,t)=>{let r,o,u,n,a,d,p=t.format==="NHWC",i=t.blocksize,l=t.mode==="DCR";p?([r,o,u,n]=e.dims,a=l?[r,o,u,i,i,n/i**2]:[r,o,u,n/i**2,i,i],d=l?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,o,u,n]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=l?[r,i,i,n/i**2,o,u]:[r,n/i**2,i,i,o,u],d=l?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let s=e.reshape(a),c=s.dims.length,h=e.dataType,g=E("a",h,c),y=M("output",h,c),C=W=>`
  ${W.registerUniform("output_size","u32").declareVariables(g,y)}

  ${cf(d,c,g,y)}

  ${W.mainStart()}
    ${W.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:W=>{let A=p?[r,o*i,u*i,n/i**2]:[r,n/i**2,o*i,u*i],X=k.size(A),ni=s.dims,ii=k.sortBasedOnPerm(ni,d);return{outputs:[{dims:A,dataType:W[0].dataType}],dispatchGroup:{x:Math.ceil(X/64)},programUniforms:[{type:12,data:X},...R(ni,ii)]}},getShaderSource:C}},ed=(e,t)=>{lf(e.inputs),e.compute(pf(e.inputs[0],t))},td=e=>J({blocksize:e.blocksize,mode:e.mode,format:e.format})}),_o,rn,nd,mf,ff,vo,$o,od,hf,id,ad,sd=V(()=>{Q(),ie(),Ie(),ae(),_o="[a-zA-Z]|\\.\\.\\.",rn="("+_o+")+",nd="^"+rn+"$",mf="("+rn+",)*"+rn,ff="^"+mf+"$",vo=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},$o=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,o]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(ff)))throw new Error("Invalid LHS term");if(r.split(",").forEach((u,n)=>{let a=e[n].dims.slice();if(!u.match(RegExp(nd)))throw new Error("Invalid LHS term");let d=this.processTerm(u,!0,a,n);this.lhs.push(d)}),o==="")o+=[...this.symbolToInfo.entries()].filter(([u,n])=>n.count===1||u==="...").map(([u])=>u).join("");else if(!o.match(RegExp(rn)))throw new Error("Invalid RHS");o.match(RegExp(_o,"g"))?.forEach(u=>{if(u==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(u);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(o,!1,this.outputDims)}addSymbol(e,t,r){let o=this.symbolToInfo.get(e);if(o!==void 0){if(o.dimValue!==t&&o.count!==1)throw new Error("Dimension mismatch");o.count++,o.inputIndices.push(r)}else o={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,o)}processTerm(e,t,r,o=-1){let u=r.length,n=!1,a=[],d=0;if(!e.match(RegExp(nd))&&!t&&e!=="")throw new Error("Invalid LHS term");let p=e.match(RegExp(_o,"g")),i=new vo(o);return p?.forEach((l,s)=>{if(l==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let c=u-p.length+1;if(c<0)throw new Error("Ellipsis out of bounds");if(a=r.slice(d,d+c),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let h=0;h<a.length;h++){let g=String.fromCharCode(48+h);i.addSymbol(g,s+h),this.addSymbol(g,r[d++],o)}}else i.addSymbol(l,s+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(l,r[d++],o)}),i}},od=e=>e+"_max",hf=(e,t,r,o)=>{let u=e.map(i=>i.length).map((i,l)=>E(`input${l}`,t,i)),n=k.size(o),a=M("output",t,o.length),d=[...r.symbolToInfo.keys()].filter(i=>!r.rhs.symbolToIndices.has(i)),p=i=>{let l=[],s="var prod = 1.0;",c="var sum = 0.0;",h="sum += prod;",g=[],y=[],C=[],W=[],A=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((ni,ii)=>{if(r.rhs.symbolToIndices.has(ii)){let li=r.rhs.symbolToIndices.get(ii)?.[0];li!==void 0&&r.lhs.forEach((ui,hi)=>{if(ni.inputIndices.includes(hi)){let yi=ui.symbolToIndices.get(ii);if(yi===void 0)throw new Error("Invalid symbol error");yi.forEach($i=>{l.push(`${u[hi].indicesSet(`input${hi}Indices`,$i,a.indicesGet("outputIndices",li))}`)})}})}else r.lhs.forEach((li,ui)=>{if(ni.inputIndices.includes(ui)){let hi=li.symbolToIndices.get(ii);if(hi===void 0)throw new Error("Invalid symbol error");hi.forEach(yi=>{g.push(`${u[ui].indicesSet(`input${ui}Indices`,yi,`${ii}`)}`)}),W.push(`prod *= ${u[ui].getByIndices(`input${ui}Indices`)};`)}}),y.push(`for(var ${ii}: u32 = 0; ${ii} < uniforms.${od(ii)}; ${ii}++) {`),C.push("}")});let X=A?[...l,`let sum = ${u.map((ni,ii)=>ni.getByIndices(`input${ii}Indices`)).join(" * ")};`]:[...l,c,...y,...g,s,...W,h,...C];return`
            ${i.registerUniforms(d.map(ni=>({name:`${od(ni)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...u,a)}

            ${i.mainStart()}
            ${i.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${u.map((ni,ii)=>`var input${ii}Indices: ${u[ii].type.indices};`).join(`
`)}
            ${X.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let i=d.filter(s=>r.symbolToInfo.has(s)).map(s=>({type:12,data:r.symbolToInfo.get(s)?.dimValue||0}));i.push({type:12,data:n});let l=e.map((s,c)=>[...R(s)]).reduce((s,c)=>s.concat(c),i);return l.push(...R(o)),{outputs:[{dims:o,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:l}},getShaderSource:p}},id=(e,t)=>{let r=new $o(e.inputs,t.equation),o=r.outputDims,u=e.inputs.map((n,a)=>n.dims);e.compute(hf(u,e.inputs[0].dataType,r,o))},ad=e=>{let t=e.equation.replace(/\s+/g,"");return J({equation:t})}}),gf,ud,yf,bf,dd,ld=V(()=>{Q(),ie(),ae(),gf=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),o=r.length<t.length?0:r.length-t.length,u=t.length<r.length?0:t.length-r.length;for(;o<r.length&&u<t.length;++o,++u)if(r[o]!==t[u]&&r[o]!==1&&t[u]!==1)throw new Error("Expand requires shape to be broadcastable to input")},ud=(e,t)=>{let r=e.length-t.length,o=[];for(let u=0;u<r;++u)o.push(e[u]);for(let u=0;u<t.length;++u)o.push(t[u]===1?e[u+r]:t[u]);return o},yf=(e,t)=>e.length>t.length?ud(e,t):ud(t,e),bf=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),o=yf(t,r),u=e[0].dataType,n=u===9?4:1,a=Math.ceil(k.size(o)/n),d=i=>{let l=E("input",u,t.length,n),s=M("output",u,o.length,n),c;if(u===9){let h=(g,y,C="")=>`
          let outputIndices${y} = ${s.offsetToIndices(`outputOffset + ${y}u`)};
          let offset${y} = ${l.broadcastedIndicesToOffset(`outputIndices${y}`,s)};
          let index${y} = offset${y} / 4u;
          let component${y} = offset${y} % 4u;
          ${g}[${y}] = ${C}(${l.getByOffset(`index${y}`)}[component${y}]);
        `;c=`
        let outputOffset = global_idx * ${n};
        var data = vec4<u32>(0);
        ${h("data",0,"u32")}
        ${h("data",1,"u32")}
        ${h("data",2,"u32")}
        ${h("data",3,"u32")}
        ${s.setByOffset("global_idx","data")}
      }`}else c=`
        let outputIndices = ${s.offsetToIndices("global_idx")};
        let inputOffset = ${l.broadcastedIndicesToOffset("outputIndices",s)};
        ${s.setByOffset("global_idx",l.getByOffset("inputOffset"))}
      }`;return`
    ${i.registerUniform("vec_size","u32").declareVariables(l,s)}
    ${i.mainStart()}
    ${i.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${c}`},p=[{type:12,data:a},...R(t,o)];return{name:"Expand",shaderCache:{hint:`${o.length}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:p})}},dd=e=>{gf(e.inputs),e.compute(bf(e.inputs),{inputs:[0]})}}),wf,cd,pd=V(()=>{Q(),ie(),ae(),Xr(),wf=e=>{let t=e[0].dataType,r=k.size(e[0].dims),o=k.size(e[1].dims),u=o%4===0,n=a=>{let d=E("x",t,[1],4),p=E("bias",t,[1],4),i=M("y",t,[1],4),l=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],s=h=>`
      let bias${h}_offset: u32 = (global_idx * 4 + ${h}) % uniforms.bias_size;
      let bias${h} = ${p.getByOffset(`bias${h}_offset / 4`)}[bias${h}_offset % 4];`,c=u?`
      let bias = ${p.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${s(0)}${s(1)}${s(2)}${s(3)}
      let bias = ${d.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(l).declareVariables(d,p,i)}

    ${lo(Ee(t))}

    ${a.mainStart(At)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${d.getByOffset("global_idx")};
      ${c}
      let x_in = x + bias;
      ${i.setByOffset("global_idx",co("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${u}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:o}],dispatchGroup:{x:Math.ceil(r/At/4)}})}},cd=e=>{e.inputs.length<2||k.size(e.inputs[1].dims)===0?du(e):e.compute(wf(e.inputs))}}),_f,vf,md,fd,hd=V(()=>{Q(),ie(),Ie(),ae(),_f=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},vf=(e,t)=>{let r=e[0].dims,o=e[1].dims,u=r.length,n=k.normalizeAxis(t.axis,u),a=r.slice(0);a.splice(n,1,...o);let d=r[n],p=e[0].dataType===9?4:1,i=Math.ceil(k.size(a)/p),l=[{type:12,data:i},{type:6,data:d},{type:12,data:n},...R(e[0].dims,e[1].dims,a)],s=c=>{let h=E("data",e[0].dataType,e[0].dims.length,p),g=E("inputIndices",e[1].dataType,e[1].dims.length),y=M("output",e[0].dataType,a.length,p),C=A=>{let X=o.length,ni=`var indicesIndices${A}  = ${g.type.indices}(0);`;for(let ii=0;ii<X;ii++)ni+=`${X>1?`indicesIndices${A}[${ii}]`:`indicesIndices${A}`} = ${a.length>1?`outputIndices${A}[uniforms.axis + ${ii}]`:`outputIndices${A}`};`;ni+=`
          var idx${A} = ${g.getByIndices(`indicesIndices${A}`)};
          if (idx${A} < 0) {
            idx${A} = idx${A} + uniforms.axisDimLimit;
          }
          var dataIndices${A} : ${h.type.indices};
        `;for(let ii=0,li=0;ii<u;ii++)ii===n?(ni+=`${u>1?`dataIndices${A}[${ii}]`:`dataIndices${A}`} = u32(idx${A});`,li+=X):(ni+=`${u>1?`dataIndices${A}[${ii}]`:`dataIndices${A}`} = ${a.length>1?`outputIndices${A}[${li}]`:`outputIndices${A}`};`,li++);return ni},W;if(e[0].dataType===9){let A=(X,ni,ii="")=>`
          let outputIndices${ni} = ${y.offsetToIndices(`outputOffset + ${ni}u`)};
          ${C(ni)};
          let offset${ni} = ${h.indicesToOffset(`dataIndices${ni}`)};
          let index${ni} = offset${ni} / 4u;
          let component${ni} = offset${ni} % 4u;
          ${X}[${ni}] = ${ii}(${h.getByOffset(`index${ni}`)}[component${ni}]);
        `;W=`
        let outputOffset = global_idx * ${p};
        var value = vec4<u32>(0);
        ${A("value",0,"u32")}
        ${A("value",1,"u32")}
        ${A("value",2,"u32")}
        ${A("value",3,"u32")}
        ${y.setByOffset("global_idx","value")}
      `}else W=`
      let outputIndices = ${y.offsetToIndices("global_idx")};
      ${C("")};
      let value = ${h.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${c.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,g,y)}
      ${c.mainStart()}
        ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${W}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:l}),getShaderSource:s}},md=e=>J({axis:e.axis}),fd=(e,t)=>{let r=e.inputs;_f(r),e.compute(vf(e.inputs,t))}}),$f,xf,gd,yd,bd=V(()=>{Q(),ie(),Ie(),ae(),$f=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=k.normalizeAxis(t.quantizeAxis,e[0].dims.length),o=t.blockSize,u=e[0],n=e[2],a=e.length===4?e[3]:void 0;if(n.dims.length!==u.dims.length||!u.dims.map((d,p)=>p===r?Math.ceil(d/o)===n.dims[p]:d===n.dims[p]).reduce((d,p)=>d&&p,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==u.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==n.dims.length||!a.dims.map((d,p)=>d===n.dims[p]).reduce((d,p)=>d&&p,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},xf=(e,t)=>{let r=e[0].dims,o=e[1].dims,u=r.length,n=k.normalizeAxis(t.gatherAxis,u),a=k.normalizeAxis(t.quantizeAxis,u),d=r.slice(0);d.splice(n,1,...o);let p=k.size(d),i=e[2].dataType,l=e[0].dataType===22,s=[{type:12,data:p},{type:12,data:a},{type:12,data:n},{type:12,data:t.blockSize},...R(...e.map((h,g)=>h.dims),d)],c=h=>{let g=E("data",e[0].dataType,e[0].dims.length),y=E("inputIndices",e[1].dataType,e[1].dims.length),C=E("scales",e[2].dataType,e[2].dims.length),W=e.length>3?E("zeroPoint",e[3].dataType,e[3].dims.length):void 0,A=M("output",i,d.length),X=[g,y,C];W&&X.push(W);let ni=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${h.registerUniforms(ni).declareVariables(...X,A)}
        ${h.mainStart()}
        let output_indices = ${A.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${o.length>1?`
          for (var i: u32 = 0; i < ${o.length}; i++) {
            let index = ${A.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${A.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${g.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${A.indicesGet("output_indices","i")};
          ${g.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[n]};
        }
        ${g.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${d.length}; i++) {
          let index = ${A.indicesGet("output_indices",`i + ${o.length} - 1`)};
          ${g.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${g.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${g.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${l?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${C.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${C.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${C.getByIndices("scale_indices")};
        ${W?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${W.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${W.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${l?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ee(i)}(quantized_data - zero_point) * scale;
        ${A.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((h,g)=>g!==1).map(h=>h.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(h,g)=>"rank")},getRunData:()=>({outputs:[{dims:d,dataType:i}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:s}),getShaderSource:c}},gd=(e,t)=>{let r=e.inputs;$f(r,t),e.compute(xf(e.inputs,t))},yd=e=>J({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Sf,Tf,wd,_d,vd=V(()=>{Q(),ie(),Ie(),ae(),Sf=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Tf=(e,t)=>{let r=e[0].dims,o=e[0].dataType,u=r.length,n=e[1].dims,a=e[1].dataType,d=k.normalizeAxis(t.axis,u),p=r[d],i=n.slice(0),l=k.size(i),s=E("input",o,u),c=E("indicesInput",a,n.length),h=M("output",o,i.length),g=[{type:12,data:l},{type:6,data:p},{type:12,data:d}];return g.push(...R(r,n,i)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(s,c,h)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${h.offsetToIndices("global_idx")};

      var idx = ${c.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${s.type.indices}(outputIndices);
      ${s.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${s.getByIndices("inputIndices")};

      ${h.setByOffset("global_idx","value")};
  }`}},wd=e=>J({axis:e.axis}),_d=(e,t)=>{let r=e.inputs;Sf(r),e.compute(Tf(e.inputs,t))}}),If,Cf,$d,xd,Sd=V(()=>{Q(),ie(),ae(),If=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Cf=(e,t)=>{let r=e[0].dims.slice(),o=e[1].dims.slice(),[u,n,a]=Gr.getShapeOfGemmResult(r,t.transA,o,t.transB,e.length===3?e[2].dims:void 0),d=[u,n];if(!d)throw new Error("Can't use gemm on the given tensors");let p=k.size(d),i=[{type:12,data:p},{type:12,data:u},{type:12,data:n},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],l=["type","type"];e.length===3&&(i.push(...R(e[2].dims)),l.push("rank")),i.push(...R(d));let s=c=>{let h="";t.transA&&t.transB?h="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?h="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?h="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(h="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let g=t.alpha===1?"":"value *= uniforms.alpha;",y=E("a",e[0].dataType,e[0].dims),C=E("b",e[1].dataType,e[1].dims),W=y.type.value,A=null,X=[y,C];e.length===3&&(A=E("c",e[2].dataType,e[2].dims.length),X.push(A));let ni=M("output",e[0].dataType,d.length);X.push(ni);let ii=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${c.registerUniforms(ii).declareVariables(...X)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${W}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${h}
    }

    ${g}
    ${A!=null?`let cOffset = ${A.broadcastedIndicesToOffset("vec2(m, n)",ni)}; value += ${W}(uniforms.beta) * ${A.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`};return{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:i}),getShaderSource:s}},$d=e=>{let t=e.transA,r=e.transB,o=e.alpha,u=e.beta;return{transA:t,transB:r,alpha:o,beta:u,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},xd=(e,t)=>{If(e.inputs),e.compute(Cf(e.inputs,t))}}),Ne,Ef,Id,Td,Pf,nr,Cd,xo=V(()=>{Q(),ie(),Ie(),Hr(),Kr(),ae(),lt(),Ne=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Ef=(e,t)=>{let r=e[0],o=Ne(e,1),u=Ne(e,2),n=Ne(e,3),a=Ne(e,4),d=Ne(e,5),p=Ne(e,6),i=Ne(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let l=r.dims[0],s=r.dims[1],c=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],h=s,g=0,y=0,C=Math.floor(c/t.numHeads);if(p&&i&&k.size(p.dims)&&k.size(i.dims)){if(p.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(p.dims[0]!==l||p.dims[1]!==t.numHeads||p.dims[3]!==C)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(i.dims[0]!==l||i.dims[1]!==t.numHeads||i.dims[3]!==C)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[2]!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(i.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=p.dims[2],y=p.dims[2]}else if(p&&k.size(p.dims)||i&&k.size(i.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let W;if(o&&k.size(o.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(o.dims.length<3||o.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==o.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(o.dims.length===3){if(o.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');W=2,h=o.dims[1]}else if(o.dims.length===5){if(o.dims[2]!==t.numHeads||o.dims[3]!==2||o.dims[4]!==C)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(u)throw new Error('Expect "value" be none when "key" has packed kv format.');W=5,h=o.dims[1]}else{if(o.dims[1]!==t.numHeads||o.dims[3]!==C)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');W=0,h=o.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');W=3}if(n&&k.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(o&&o.dims.length===5&&o.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let A=g+h,X=0;if(a&&k.size(a.dims)>0){X=8;let ui=a.dims;throw ui.length===1?ui[0]===l?X=1:ui[0]===3*l+2&&(X=3):ui.length===2&&ui[0]===l&&ui[1]===A&&(X=5),X===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let ni=!1,ii=c;if(u&&k.size(u.dims)>0){if(u.dims.length!==3&&u.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==u.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(u.dims.length===3){if(h!==u.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');ii=u.dims[2]}else{if(h!==u.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');ii=u.dims[1]*u.dims[3],ni=!0}}let li=!1;if(a&&k.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(d&&k.size(d.dims)>0){if(d.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(d.dims[0]!==l||d.dims[1]!==t.numHeads||d.dims[2]!==s||d.dims[3]!==A)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:s,pastSequenceLength:g,kvSequenceLength:h,totalSequenceLength:A,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:c,vHiddenSize:ii,headSize:C,vHeadSize:Math.floor(ii/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:X,scale:t.scale,broadcastResPosBias:li,passPastInKv:ni,qkvFormat:W}},Id=e=>J({...e}),Td=J({perm:[0,2,1,3]}),Pf=(e,t,r,o,u,n,a)=>{let d=[o,u,n],p=k.size(d),i=[{type:12,data:p},{type:12,data:a},{type:12,data:n}],l=s=>{let c=M("qkv_with_bias",t.dataType,d),h=E("qkv",t.dataType,d),g=E("bias",r.dataType,d),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${s.registerUniforms(y).declareVariables(h,g,c)}
  ${s.mainStart()}
    ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:d,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:i}),getShaderSource:l},{inputs:[t,r],outputs:[-1]})[0]},nr=(e,t,r,o,u,n,a,d)=>{let p=n;if(a&&k.size(a.dims)>0){if(o===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return p=Pf(e,n,a,t,o,r*u,d),p=p.reshape([t,o,r,u]),r===1||o===1?p:e.compute(Pe(p,Td.perm),{inputs:[p],outputs:[-1]})[0]}else return n.dims.length===3&&(p=n.reshape([t,o,r,u])),r===1||o===1?p:e.compute(Pe(p,Td.perm),{inputs:[p],outputs:[-1]})[0]},Cd=(e,t)=>{let r=Ef(e.inputs,t),o=e.inputs[0],u=Ne(e.inputs,1),n=Ne(e.inputs,2),a=Ne(e.inputs,3),d=Ne(e.inputs,4),p=Ne(e.inputs,5),i=Ne(e.inputs,6),l=Ne(e.inputs,7);if(o.dims.length===5)throw new Error("Packed QKV is not implemented");if(u?.dims.length===5)throw new Error("Packed KV is not implemented");let s=u&&n&&u.dims.length===4&&n.dims.length===4,c=nr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,o,a,0);if(s)return Wt(e,c,u,n,d,void 0,i,l,p,r,t);if(!u||!n)throw new Error("key and value must be provided");let h=nr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,u,a,r.hiddenSize),g=nr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,a,2*r.hiddenSize);Wt(e,c,h,g,d,void 0,i,l,p,r,t)}}),Ad,zf,Of,So,kd,To=V(()=>{Q(),ie(),ae(),Ad=e=>Array.from(e.getBigInt64Array(),Number),zf=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Ad(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Of=(e,t)=>{let r=[];for(let o=0;o<e.length;++o)r.push(e[o]*t[o]);return r},So=(e,t)=>{let r=e[0].dims,o=t??Ad(e[1]),u=Of(r,o),n=k.size(u),a=e[0].dataType,d=E("input",a,r.length),p=M("output",a,u.length),i=l=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${o}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...R(e[0].dims,u)]}),getShaderSource:i}},kd=e=>{zf(e.inputs),e.compute(So(e.inputs),{inputs:[0]})}}),Bf,Ed,zd,Df,Pd,Od,Bd=V(()=>{Q(),ie(),Ie(),Kr(),ae(),xo(),To(),lt(),Bf=(e,t)=>{let r=e[0],o=e[1],u=e[2],n=e[3],a=e[4];if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let d=!1,p=r.dims[0],i=r.dims[1],l=r.dims.length===3?d?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],s=i,c=0,h=0,g=Math.floor(l/t.numHeads),y=n&&n.dims.length!==0,C=a&&a.dims.length!==0,W=!0;if(y&&C){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');c=n.dims[1],h=n.dims[1]}else if(y||C)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let A;if(o){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(o.dims.length<3||o.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==o.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(o.dims.length===3){if(r.dims[2]%o.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');A=2,s=o.dims[1]}else if(o.dims.length===5){if(o.dims[2]!==t.numHeads||o.dims[3]!==2||o.dims[4]!==g)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(u)throw new Error('Expect "value" be none when "key" has packed kv format.');A=5,s=o.dims[1]}else{if(o.dims[1]!==t.numHeads||o.dims[3]!==g)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');A=0,s=o.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');A=3}let X=0,ni=!1,ii=l;if(u){if(u.dims.length!==3&&u.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==u.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(u.dims.length===3){if(s!==u.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');ii=u.dims[2]}else{if(s!==u.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');ii=u.dims[1]*u.dims[3],ni=!0}}let li=c+s;return{batchSize:p,sequenceLength:i,pastSequenceLength:c,kvSequenceLength:s,totalSequenceLength:li,maxSequenceLength:h,inputHiddenSize:0,hiddenSize:l,vHiddenSize:ii,headSize:g,vHeadSize:Math.floor(ii/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:X,scale:t.scale,broadcastResPosBias:!1,passPastInKv:ni,qkvFormat:A,isPastkvBSNH:W}},Ed=(e,t,r,o)=>{let u=[o.batchSize,o.totalSequenceLength,o.kvNumHeads,o.headSize],n=4,a=k.size(u)/n,d=o.totalSequenceLength,p=M("present_kv",r,u.length,n),i=E("new_kv",e.dataType,e.dims.length,n),l=t?E("past_kv",t.dataType,t.dims.length,n):void 0,s=Math.ceil(o.headSize/n),c={x:d,y:e.dims[0],z:1},h=t?["rank","rank"]:["rank"],g=[{type:12,data:a},{type:12,data:o.pastSequenceLength},{type:12,data:o.kvSequenceLength},{type:12,data:o.totalSequenceLength}],y=[i];l?(g.push(...R(e.dims),...R(t.dims),...R(u)),y.push(l)):g.push(...R(e.dims),...R(u));let C=[{name:"output_size",type:"u32"},{name:"past_seqlen",type:"u32"},{name:"new_seqlen",type:"u32"},{name:"present_seqlen",type:"u32"}],W=`      let past_batch_stride = uniforms.past_seqlen * num_heads * H;
        var past_head_stride = uniforms.past_seqlen * H;
        if (is_bsnh) {
          past_head_stride = H;
        }
        let in_offset = b * past_batch_stride + s * row_stride + n * past_head_stride + h;
        present_kv[out_offset] = past_kv[in_offset];`,A=`      let new_batch_stride = uniforms.new_seqlen * num_heads * H;
        let new_row_stride = num_heads * H;
        let new_head_stride = H;
        let in_offset = b * new_batch_stride + (s - past_seqlen) * new_row_stride + n * new_head_stride + h;
        present_kv[out_offset] = new_kv[in_offset];`,X=t?`if (s < past_seqlen) {
        ${W}
        } else if (s < past_seqlen + uniforms.new_seqlen) {
        ${A}
        }`:`if (s < past_seqlen + uniforms.new_seqlen) {
          ${A}
        }`,ni=ii=>`

  ${ii.registerUniforms(C).declareVariables(...y,p)}
  ${ii.mainStart([s,o.kvNumHeads,1])}
    ${ii.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    var indices = ${p.offsetToIndices("global_idx")};
    let h = local_id.x;
    let n = local_id.y;
    let s = workgroup_id.x;
    let b = workgroup_id.y;
    let num_heads = ${o.kvNumHeads}u;
    let H = ${s}u;

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
    ${X}
  }`;return{name:"ConcatPastNew",shaderCache:{hint:`${o.kvNumHeads}${s}${!!t}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:u,dataType:r}],dispatchGroup:c,programUniforms:g}),getShaderSource:ni}},zd=e=>J({...e}),Df=J({perm:[0,2,1,3]}),Pd=(e,t,r,o,u)=>{let n=t,a=o.kvNumHeads,d=o.nReps;return t.dims.length===3&&o.kvSequenceLength!==0&&(n=t.reshape([o.batchSize,o.kvSequenceLength,a,o.headSize])),r?n=e.compute(Ed(n,r,n.dataType,o),{inputs:[n,r],outputs:[o.isPastkvBSNH?u:-1]})[0]:n=e.compute(Ed(n,void 0,n.dataType,o),{inputs:[n],outputs:[o.isPastkvBSNH?u:-1]})[0],d!==1&&(n=e.compute(So([n],[1,1,1,d]),{inputs:[n],outputs:[-1]})[0],n=n.reshape([o.batchSize,o.totalSequenceLength,a*d,o.headSize])),e.compute(Pe(n,Df.perm),{inputs:[n],outputs:[-1]})[0]},Od=(e,t)=>{let r=Bf(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let o=nr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,e.inputs[0],void 0,0),u=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,n=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,a=Pd(e,e.inputs[1],u,r,1),d=Pd(e,e.inputs[2],n,r,2);Wt(e,o,a,d,void 0,void 0,void 0,void 0,void 0,r,t)}}),Dd,Mf,Rf,Md,Rd=V(()=>{Q(),ie(),lt(),ae(),Dd=(e,t,r,o,u,n,a,d)=>{let p=we(n),i=p===1?"f32":`vec${p}f`,l=p===1?"vec2f":`mat2x${p}f`,s=u*a,c=[u,a,n/p],h=[u,a,2],g=["rank","type","type"],y=[];y.push(...R(c,h));let C=W=>{let A=E("x",t.dataType,3,p),X=E("scale",r.dataType,r.dims),ni=E("bias",o.dataType,o.dims),ii=M("output",1,3,2),li=[A,X,ni,ii],ui=64;return`
  var<workgroup> workgroup_shared : array<${l}, ${ui}>;
  const workgroup_size = ${ui}u;
  ${W.declareVariables(...li)}
  ${W.mainStart(ui)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${i}(0);
    var squared_sum = ${i}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${i}(${A.get("batch","channel","h")});
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
      let sum_final = ${Ze("workgroup_shared[0][0]",p)} / f32(hight * ${p});
      let squared_sum_final = ${Ze("workgroup_shared[0][1]",p)} / f32(hight * ${p});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${d}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${p};${d}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:h,dataType:1}],dispatchGroup:{x:s},programUniforms:y}),getShaderSource:C},{inputs:[t,r,o],outputs:[-1]})[0]},Mf=(e,t,r)=>{let o=t[0].dims,u=o,n=2,a=o[0],d=o[1],p=k.sizeFromDimension(o,n),i=we(p),l=k.size(u)/i,s=Dd(e,t[0],t[1],t[2],a,p,d,r.epsilon),c=[a,d,p/i],h=[a,d],g=["type","none"],y=C=>{let W=E("x",t[0].dataType,c.length,i),A=E("scale_shift",1,h.length,2),X=M("output",t[0].dataType,c.length,i),ni=[W,A,X];return`
  ${C.registerUniform("output_size","u32").declareVariables(...ni)}
  ${C.mainStart()}
  ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${X.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${A.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${W.getByOffset("global_idx")} * ${X.type.value}(scale_shift.x) + ${X.type.value}(scale_shift.y);
      ${X.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${i}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:u,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:[{type:12,data:l},...R(c,h,c)]}),getShaderSource:y},{inputs:[t[0],s]})},Rf=(e,t,r)=>{let o=t[0].dims,u=o,n=o[0],a=o[o.length-1],d=k.sizeFromDimension(o,1)/a,p=we(a),i=k.size(u)/p,l=[{type:12,data:d},{type:12,data:Math.floor(a/p)}],s=["type","type"],c=[0,o.length-1];for(let C=0;C<o.length-2;C++)c.push(C+1);let h=e.compute(Pe(e.inputs[0],c),{inputs:[e.inputs[0]],outputs:[-1]})[0],g=Dd(e,h,t[1],t[2],n,d,a,r.epsilon),y=C=>{let W=he(t[0].dataType),A=p===1?"vec2f":`mat${p}x2f`,X=li=>{let ui=li===0?"x":"y",hi=p===1?"f32":`vec${p}f`;switch(p){case 1:return`${W}(${hi}(scale.${ui}))`;case 2:return`vec2<${W}>(${hi}(scale[0].${ui}, scale[1].${ui}))`;case 4:return`vec4<${W}>(${hi}(scale[0].${ui}, scale[1].${ui}, scale[2].${ui}, scale[3].${ui}))`;default:throw new Error(`Not supported compoents ${p}`)}},ni=E("input",t[0].dataType,t[0].dims,p),ii=M("output",t[0].dataType,u,p);return`
  @group(0) @binding(0) var<storage, read> input : array<${ni.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${A}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${ii.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${C.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${X(0)}, ${X(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${p}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:u,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:l}),getShaderSource:y},{inputs:[t[0],g]})},Md=(e,t)=>{t.format==="NHWC"?Rf(e,e.inputs,t):Mf(e,e.inputs,t)}}),Uf,Vf,Ud,Vd=V(()=>{Q(),ie(),ae(),Uf=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Vf=(e,t,r)=>{let o=t.simplified,u=e[0].dims,n=e[1],a=!o&&e[2],d=u,p=k.normalizeAxis(t.axis,u.length),i=k.sizeToDimension(u,p),l=k.sizeFromDimension(u,p),s=k.size(n.dims),c=a?k.size(a.dims):0;if(s!==l||a&&c!==l)throw new Error(`Size of X.shape()[axis:] == ${l}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${s} and bias size of ${c}`);let h=[];for(let ii=0;ii<u.length;++ii)ii<p?h.push(u[ii]):h.push(1);let g=we(l),y=["type","type"],C=[{type:12,data:i},{type:1,data:l},{type:12,data:Math.floor(l/g)},{type:1,data:t.epsilon}];a&&y.push("type");let W=r>1,A=r>2,X=ii=>{let li=he(e[0].dataType),ui=[E("x",e[0].dataType,e[0].dims,g),E("scale",n.dataType,n.dims,g)];a&&ui.push(E("bias",a.dataType,a.dims,g)),ui.push(M("output",e[0].dataType,d,g)),W&&ui.push(M("mean_data_output",1,h)),A&&ui.push(M("inv_std_output",1,h));let hi=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${ii.registerUniforms(hi).declareVariables(...ui)}
  ${ii.mainStart()}
    ${ii.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${io("f32",g)};
    var mean_square_vector = ${io("f32",g)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${kt(li,g,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Ze("mean_vector",g)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Ze("mean_square_vector",g)} / uniforms.norm_size ${o?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${kt(li,g,"x[j + offset]")};
      let f32scale = ${kt(li,g,"scale[j]")};
      output[j + offset] = ${ui[0].type.value}((f32input ${o?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${kt(li,g,"bias[j]")}`:""}
      );
    }

    ${W?"mean_data_output[global_idx] = mean":""};
    ${A?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},ni=[{dims:d,dataType:e[0].dataType}];return W&&ni.push({dims:h,dataType:1}),A&&ni.push({dims:h,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${g};${r};${o}`,inputDependencies:y},getRunData:()=>({outputs:ni,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:C}),getShaderSource:X}},Ud=(e,t)=>{Uf(e.inputs),e.compute(Vf(e.inputs,t,e.outputCount))}}),Nf,Wf,Lf,Nd,Wd,Ld=V(()=>{Q(),ie(),Ie(),ae(),Nf=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],o=r.dims.length;if(r.dims[o-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let u=Math.floor((t.k+t.blockSize-1)/t.blockSize),n=t.blockSize/8*t.bits,a=e[1];if(!k.areEqual(a.dims,[t.n,u,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let d=e[2].dims;if(k.size(d)!==t.n*u)throw new Error("scales input size error.");if(e.length===4){let p=e[3].dims,i=t.bits>4?t.n*u:t.n*Math.floor((u+1)/2);if(k.size(p)!==i)throw new Error("zeroPoints input size error.")}},Wf=(e,t)=>{let r=e[0].dims,o=r.length,u=r[o-2],n=t.k,a=t.n,d=r.slice(0,o-2),p=k.size(d),i=e[1].dims[2]/4,l=e[0].dataType,s=we(t.k),c=we(i),h=we(a),g=d.concat([u,a]),y=u>1&&a/h%2===0?2:1,C=k.size(g)/h/y,W=64,A=[],X=[p,u,n/s],ni=k.convertShape(e[1].dims).slice();ni.splice(-1,1,i/c),A.push(...R(X)),A.push(...R(ni)),A.push(...R(e[2].dims)),e.length===4&&A.push(...R(k.convertShape(e[3].dims)));let ii=[p,u,a/h];A.push(...R(ii));let li=ui=>{let hi=X.length,yi=E("a",e[0].dataType,hi,s),$i=E("b",12,ni.length,c),Bi=E("scales",e[2].dataType,e[2].dims.length),Oi=[yi,$i,Bi],Li=e.length===4?E("zero_points",12,e[3].dims.length):void 0;Li&&Oi.push(Li);let Ro=ii.length,wi=M("output",e[0].dataType,Ro,h),xi=he(e[0].dataType),Mo=(()=>{switch(s){case 1:return`array<${xi}, 8>`;case 2:return`mat4x2<${xi}>`;case 4:return`mat2x4<${xi}>`;default:throw new Error(`${s}-component is not supported.`)}})(),zo=()=>{let pi=`
          // reuse a data
            var input_offset = ${yi.indicesToOffset(`${yi.type.indices}(batch, row, word_offset)`)};
            var a_data: ${Mo};
            for (var j: u32 = 0; j < ${8/s}; j++) {
              a_data[j] = ${yi.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let gi=0;gi<h*y;gi++)pi+=`
            b_value = ${c===1?`b${gi}_data`:`b${gi}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${Mo}(${Array.from({length:4},(Ni,Zo)=>`${xi}(b_value_lower[${Zo}]), ${xi}(b_value_upper[${Zo}])`).join(", ")});
            b_dequantized_values = ${s===1?`${Mo}(${Array.from({length:8},(Ni,Zo)=>`(b_quantized_values[${Zo}] - ${Li?`zero_point${gi}`:"zero_point"}) * scale${gi}`).join(", ")});`:`(b_quantized_values - ${Mo}(${Array(8).fill(`${Li?`zero_point${gi}`:"zero_point"}`).join(",")})) * scale${gi};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(gi/h)}]${h>1?`[${gi%h}]`:""} += ${Array.from({length:8/s},(Ni,Zo)=>`${s===1?`a_data[${Zo}] * b_dequantized_values[${Zo}]`:`dot(a_data[${Zo}], b_dequantized_values[${Zo}])`}`).join(" + ")};
          `;return pi},Ti=()=>{let pi=`
            var col_index = col * ${h};
            ${Li?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${xi}(8);`}
            `;for(let gi=0;gi<h*y;gi++)pi+=`
            let scale${gi} = ${Bi.getByOffset("col_index * nBlocksPerCol + block")};
            ${Li?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${Li.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${gi} = ${xi}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return pi},Ei=()=>{let pi=`col_index = col * ${h};`;for(let gi=0;gi<h*y;gi++)pi+=`
            let b${gi}_data = ${$i.getByIndices(`${$i.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return pi+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Mo};
            var b_dequantized_values: ${Mo};`,pi};return`
        var<workgroup> workgroup_shared: array<${wi.type.value}, ${y*W}>;
        ${ui.declareVariables(...Oi,wi)}
        ${ui.mainStart([W,1,1])}
          let output_indices = ${wi.offsetToIndices(`(global_idx / ${W}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${W}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/s};
            ${Ti()}
            for (var word: u32 = 0; word < ${i}; word += ${c}) {
              ${Ei()}
              for (var i: u32 = 0; i < ${c}; i++) {
                ${zo()}
                word_offset += ${8/s};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${wi.type.value} = ${wi.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${W}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${wi.setByIndices(`${wi.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${s};${c};${h};${y};${W}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:l}],dispatchGroup:{x:C},programUniforms:A}),getShaderSource:li}},Lf=(e,t)=>{let r=e[0].dims,o=r.length,u=r[o-2],n=t.k,a=t.n,d=r.slice(0,o-2),p=k.size(d),i=e[1].dims[2]/4,l=e[0].dataType,s=we(t.k),c=we(i),h=d.concat([u,a]),g=128,y=a%8===0?8:a%4===0?4:1,C=g/y,W=C*c*8,A=W/s,X=W/t.blockSize,ni=k.size(h)/y,ii=[],li=[p,u,n/s],ui=k.convertShape(e[1].dims).slice();ui.splice(-1,1,i/c),ii.push(...R(li)),ii.push(...R(ui)),ii.push(...R(e[2].dims)),e.length===4&&ii.push(...R(k.convertShape(e[3].dims)));let hi=[p,u,a];ii.push(...R(hi));let yi=$i=>{let Bi=li.length,Oi=E("a",e[0].dataType,Bi,s),Li=E("b",12,ui.length,c),Ro=E("scales",e[2].dataType,e[2].dims.length),wi=[Oi,Li,Ro],xi=e.length===4?E("zero_points",12,e[3].dims.length):void 0;xi&&wi.push(xi);let Mo=hi.length,zo=M("output",e[0].dataType,Mo),Ti=he(e[0].dataType),Ei=()=>{switch(s){case 1:return`
          let a_data0 = vec4<${Ti}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Ti}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Ti}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Ti}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${s}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${Oi.type.value}, ${A}>;
        var<workgroup> inter_results: array<array<${zo.type.value}, ${C}>, ${y}>;
        ${$i.declareVariables(...wi,zo)}
        ${$i.mainStart([C,y,1])}
          let output_indices = ${zo.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${X} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${A};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${A}; a_offset += ${g})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${Oi.getByIndices(`${Oi.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${Oi.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${X} + local_id.x;
            ${xi?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${xi.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Ti}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${Ti}(8);`}
            let scale = ${Ro.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${Li.getByIndices(`${Li.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/s};
            for (var i: u32 = 0; i < ${c}; i++) {
              ${Ei()}
              let b_value = ${c===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${Ti}>(${Array.from({length:4},(pi,gi)=>`${Ti}(b_value_lower[${gi}]), ${Ti}(b_value_upper[${gi}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${Ti}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(pi,gi)=>`${`dot(a_data${gi}, b_dequantized_values[${gi}])`}`).join(" + ")};
              word_offset += ${8/s};
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${zo.type.value} = ${zo.type.value}(0);
            for (var b = 0u; b < ${C}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${zo.setByIndices(`${zo.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${s};${c};${C};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:h,dataType:l}],dispatchGroup:{x:ni},programUniforms:ii}),getShaderSource:yi}},Nd=(e,t)=>{Nf(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Lf(e.inputs,t)):e.compute(Wf(e.inputs,t))},Wd=e=>J(e)}),Hf,Gf,Ff,qf,jf,Kf,Yf,Xf,Hd,Gd=V(()=>{Q(),ie(),ae(),Hf=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Gf=(e,t,r)=>{let o="";for(let u=t-1;u>=0;--u)o+=`
            k = i32(${e.indicesGet("indices",u)}) - ${F("uniforms.pads",u,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${F("uniforms.x_shape",u,t)})) {
              break;
            }
            offset += k * i32(${F("uniforms.x_strides",u,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${o}
            value = x[offset];
          }
      `},Ff=(e,t,r)=>{let o="";for(let u=t-1;u>=0;--u)o+=`
                k = i32(${e.indicesGet("indices",u)}) - ${F("uniforms.pads",u,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${F("uniforms.x_shape",u,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${F("uniforms.x_shape",u,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${F("uniforms.x_strides",u,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${o}
              value = x[offset];
          `},qf=(e,t,r)=>{let o="";for(let u=t-1;u>=0;--u)o+=`
                k = i32(${e.indicesGet("indices",u)}) - ${F("uniforms.pads",u,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${F("uniforms.x_shape",u,t)})) {
                  k = i32(${F("uniforms.x_shape",u,t)}) - 1;
                }
                offset += k * i32(${F("uniforms.x_strides",u,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${o}
              value = x[offset];
          `},jf=(e,t,r)=>{let o="";for(let u=t-1;u>=0;--u)o+=`
                k = i32(${e.indicesGet("indices",u)}) - ${F("uniforms.pads",u,r)};
                if (k < 0)  {
                  k += i32(${F("uniforms.x_shape",u,t)}]);
                }
                if (k >= i32(${F("uniforms.x_shape",u,t)})) {
                  k -= i32(${F("uniforms.x_shape",u,t)});
                }
                offset += k * i32(${F("uniforms.x_strides",u,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${o}
              value = x[offset];
          `},Kf=(e,t,r)=>{switch(r.mode){case 0:return Gf(e,t,r.pads.length);case 1:return Ff(e,t,r.pads.length);case 2:return qf(e,t,r.pads.length);case 3:return jf(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Yf=(e,t)=>{let r=k.padShape(e[0].dims.slice(),t.pads),o=e[0].dims,u=k.size(r),n=[{type:12,data:u},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&n.push({type:a?e[2].dataType:1,data:t.value}),n.push(...R(e[0].dims,r));let d=["rank"],p=i=>{let l=M("output",e[0].dataType,r.length),s=E("x",e[0].dataType,o.length),c=s.type.value,h=Kf(l,o.length,t),g=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&g.push({name:"constant_value",type:a?c:"f32"}),`
            ${i.registerUniforms(g).declareVariables(s,l)}
            ${i.mainStart()}
            ${i.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${l.offsetToIndices("global_idx")};

            var value = ${c}(0);
            ${h}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(k.size(r)/64)},programUniforms:n}),getShaderSource:p}},Xf=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),o=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,u=e[0].dims.length,n=new Int32Array(2*u).fill(0);if(e.length>=4){let d=e[3].getBigInt64Array();for(let p=0;p<d.length;p++)n[Number(d[p])]=Number(r[p]),n[Number(d[p])+u]=Number(r[p+d.length])}else r.forEach((d,p)=>n[Number(p)]=Number(d));let a=[];return n.forEach(d=>a.push(d)),{mode:t.mode,value:o,pads:a}}else return t},Hd=(e,t)=>{Hf(e.inputs);let r=Xf(e.inputs,t);e.compute(Yf(e.inputs,r),{inputs:[0]})}}),nn,Fd,qd,jd,Kd,Zf,Qf,Yd,Xd,Zd,Qd,Jd,el,tl,rl,nl,ol,il,al,sl=V(()=>{Ke(),Q(),ie(),ae(),nn=e=>{if(_e.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Fd=(e,t,r)=>{let o=t.format==="NHWC",u=e.dims.slice();o&&u.splice(1,0,u.pop());let n=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),d=t.strides.slice(),p=n?t.dilations.slice():[],i=t.pads.slice();Ct.adjustPoolAttributes(r,u,a,d,p,i);let l=Ct.computePoolOutputShape(r,u,d,p,a,i,t.autoPad),s=Object.assign({},t);n?Object.assign(s,{kernelShape:a,strides:d,pads:i,dilations:p,cacheKey:t.cacheKey}):Object.assign(s,{kernelShape:a,strides:d,pads:i,cacheKey:t.cacheKey});let c=l.slice();return c.push(c.splice(1,1)[0]),[s,o?c:l]},qd=(e,t)=>{let r=t.format==="NHWC",o=k.size(e),u=k.size(t.kernelShape),n=[{type:12,data:o},{type:12,data:u}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let d=t.kernelShape[t.kernelShape.length-1],p=t.strides[t.strides.length-1],i=t.pads[t.pads.length/2-1],l=t.pads[t.pads.length-1],s=!!(i+l);n.push({type:12,data:d},{type:12,data:p},{type:12,data:i},{type:12,data:l}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let c=!1;if(t.kernelShape.length===2){let h=t.kernelShape[t.kernelShape.length-2],g=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],C=t.pads[t.pads.length-2];c=!!(y+C),n.push({type:12,data:h},{type:12,data:g},{type:12,data:y},{type:12,data:C}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,a,!0,s,c]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let d=k.computeStrides(t.kernelShape);n.push({type:12,data:d},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:d.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let p=t.pads.reduce((i,l)=>i+l);return[n,a,!!p,!1,!1]}},jd=(e,t,r,o,u,n,a,d,p,i,l,s)=>{let c=u.format==="NHWC",h=t.type.value,g=M("output",t.type.tensor,o);if(u.kernelShape.length<=2){let y="",C="",W="",A=r-(c?2:1);if(l?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${A}] = indices[${A}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${A}] < 0 || xIndices[${A}]
                      >= uniforms.x_shape[${A}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${A}] = indices[${A}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`,u.kernelShape.length===2){let X=r-(c?3:2);s?C=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${X}] = indices[${X}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${X}] < 0 || xIndices[${X}] >= uniforms.x_shape[${X}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:C=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${X}] = indices[${X}] * uniforms.sh - uniforms.phStart + j;
                `,W=`
              }
            `}return`
            ${e.registerUniforms(p).declareVariables(t,g)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${g.offsetToIndices("global_idx")};
              var xIndices = ${g.offsetToIndices("global_idx")};

              var value = ${h}(${d});
              var pad = 0;
              ${C}
              ${y}
              ${W}
              ${a}

              output[global_idx] = value;
            }`}else{if(c)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=u.kernelShape.length,C=u.pads.length,W="";return i?W=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${n}
              }`:W=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${n}
            `,`
            ${e.registerUniforms(p).declareVariables(t,g)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${g.offsetToIndices("global_idx")};
              var xIndices = ${g.offsetToIndices("global_idx")};

              var offsets: array<u32, ${y}>;

              var value = ${h}(${d});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${F("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${F("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${r-y}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${F("uniforms.strides",`j - ${r-y}u`,y)}
                    + offsets[j - ${r-y}u] - ${F("uniforms.pads","j - 2u",C)};
                  ${W}
              }
              ${a}

              output[global_idx] = value;
            }`}},Kd=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Zf=e=>`${Kd(e)};${e.countIncludePad}`,Qf=e=>`${Kd(e)};${e.storageOrder};${e.dilations}`,Yd=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Xd=(e,t,r,o)=>{let[u,n]=Fd(t,o,r),a=E("x",t.dataType,t.dims.length),d=a.type.value,p="value += x_val;",i="";u.countIncludePad?i+=`value /= ${d}(uniforms.kernelSize);`:i+=`value /= ${d}(i32(uniforms.kernelSize) - pad);`;let[l,s,c,h,g]=qd(n,u);l.push(...R(t.dims,n));let y=["rank"];return{name:e,shaderCache:{hint:`${o.cacheKey};${c};${h};${g}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(k.size(n)/64)},programUniforms:l}),getShaderSource:C=>jd(C,a,t.dims.length,n.length,u,p,i,0,s,c,h,g)}},Zd=e=>{let t=e.count_include_pad!==0,r=Yd(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let o={countIncludePad:t,...r,cacheKey:""};return{...o,cacheKey:Zf(o)}},Qd=(e,t)=>{nn(e.inputs),e.compute(Xd("AveragePool",e.inputs[0],!1,t))},Jd={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},el=e=>{let t=e.format;return{format:t,...Jd,cacheKey:t}},tl=(e,t)=>{nn(e.inputs),e.compute(Xd("GlobalAveragePool",e.inputs[0],!0,t))},rl=(e,t,r,o)=>{let[u,n]=Fd(t,o,r),a=`
      value = max(x_val, value);
    `,d="",p=E("x",t.dataType,t.dims.length),i=["rank"],[l,s,c,h,g]=qd(n,u);return l.push(...R(t.dims,n)),{name:e,shaderCache:{hint:`${o.cacheKey};${c};${h};${g}`,inputDependencies:i},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(k.size(n)/64)},programUniforms:l}),getShaderSource:y=>jd(y,p,t.dims.length,n.length,u,a,d,t.dataType===10?-65504:-1e5,s,c,h,g)}},nl=(e,t)=>{nn(e.inputs),e.compute(rl("MaxPool",e.inputs[0],!1,t))},ol=e=>{let t=e.storage_order,r=e.dilations,o=Yd(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(o.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let u={storageOrder:t,dilations:r,...o,cacheKey:""};return{...u,cacheKey:Qf(u)}},il=e=>{let t=e.format;return{format:t,...Jd,cacheKey:t}},al=(e,t)=>{nn(e.inputs),e.compute(rl("GlobalMaxPool",e.inputs[0],!0,t))}}),eh,th,ul,dl,ll=V(()=>{Q(),ie(),Ie(),ae(),eh=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,o)=>r===e[2].dims[o]).reduce((r,o)=>r&&o,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((u,n)=>n===t.axis||u===e[0].dims[n]).reduce((u,n)=>u&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],o=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/o)||t.blockSize>Math.ceil(r/(o-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},th=(e,t)=>{let r=k.normalizeAxis(t.axis,e[0].dims.length),o=e[0].dataType,u=o===3,n=e[0].dims,a=e[1].dataType,d=k.size(n),p=o===3||o===2,i=p?[Math.ceil(k.size(e[0].dims)/4)]:e[0].dims,l=e[1].dims,s=e.length>2?e[2]:void 0,c=s?p?[Math.ceil(k.size(s.dims)/4)]:s.dims:void 0,h=l.length===0||l.length===1&&l[0]===1,g=h===!1&&l.length===1,y=we(d),C=h&&(!p||y===4),W=C?y:1,A=C&&!p?y:1,X=E("input",p?12:o,i.length,A),ni=E("scale",a,l.length),ii=s?E("zero_point",p?12:o,c.length):void 0,li=M("output",a,n.length,W),ui=[X,ni];ii&&ui.push(ii);let hi=[i,l];s&&hi.push(c);let yi=[{type:12,data:d/W},{type:12,data:r},{type:12,data:t.blockSize},...R(...hi,n)],$i=Bi=>{let Oi=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Bi.registerUniforms(Oi).declareVariables(...ui,li)}
      ${Bi.mainStart()}
          ${Bi.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${li.offsetToIndices("global_idx")};

          // Set input x
          ${p?`
            let input = ${X.getByOffset("global_idx / 4")};
            let x_vec = ${u?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${W===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${X.getByOffset("global_idx")};`};

          // Set scale input
          ${h?`let scale_value= ${ni.getByOffset("0")}`:g?`
            let scale_index = ${li.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${ni.getByOffset("scale_index")};`:`
            var scale_indices: ${ni.type.indices} = output_indices;
            let index = ${ni.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${ni.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${ni.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${ii?h?p?`
                let zero_point_input = ${ii.getByOffset("0")};
                let zero_point_vec =  ${u?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${ii.getByOffset("0")}`:g?p?`
                let zero_point_index = ${li.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${ii.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${u?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${li.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${ii.getByOffset("zero_point_index")};`:p?`
                let zero_point_offset = ${ni.indicesToOffset("scale_indices")};
                let zero_point_input = ${ii.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${u?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${ii.getByIndices("scale_indices")};`:`let zero_point_value = ${p?u?"i32":"u32":X.type.value}(0);`};
      // Compute and write output
      ${li.setByOffset("global_idx",`${li.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:ii?["rank","rank","rank"]:["rank","rank"]},getShaderSource:$i,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:Math.ceil(d/W/64),y:1,z:1},programUniforms:yi})}},ul=(e,t)=>{eh(e.inputs,t),e.compute(th(e.inputs,t))},dl=e=>J({axis:e.axis,blockSize:e.blockSize})}),rh,nh,cl,pl=V(()=>{Ke(),Q(),ae(),rh=(e,t,r)=>{let o=e===t,u=e<t&&r<0,n=e>t&&r>0;if(o||u||n)throw new Error("Range these inputs' contents are invalid.")},nh=(e,t,r,o)=>{let u=Math.abs(Math.ceil((t-e)/r)),n=[u],a=u,d=[{type:12,data:a},{type:o,data:e},{type:o,data:r},...R(n)],p=i=>{let l=M("output",o,n.length),s=l.type.value,c=[{name:"outputSize",type:"u32"},{name:"start",type:s},{name:"delta",type:s}];return`
        ${i.registerUniforms(c).declareVariables(l)}
        ${i.mainStart()}
        ${i.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${s}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${o}`},getShaderSource:p,getRunData:()=>({outputs:[{dims:n,dataType:o}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d})}},cl=e=>{let t=0,r=0,o=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],o=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],o=e.inputs[2].getFloat32Array()[0]),_e.webgpu.validateInputContent&&rh(t,r,o),e.compute(nh(t,r,o,e.inputs[0].dataType),{inputs:[]})}}),oh,ih,ah,sh,uh,dh,lh,ch,ph,mh,fh,ml,hh,gh,yh,bh,wh,fl,hl,gl=V(()=>{Q(),ie(),Ie(),ae(),oh=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},ih=(e,t,r)=>{t.every(u=>u>=0&&u<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let o=new Array(r).fill(1);return t.forEach((u,n)=>o[u]=e[n]),o},ah=(e,t,r,o,u,n)=>{let[a,d,p]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],i=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(l=>n.push(l));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(d>0&&e.length>d&&e[d].dims.length===1&&e[d].dims[0]>0){if(e[d].getFloat32Array().forEach(l=>o.push(l)),o.length!==0&&o.length!==i&&r>=18&&o.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");oh(o,t),t.axes.length>0&&ih(o,t.axes,i).forEach((l,s)=>o[s]=l)}if(p>0&&e.length>p&&e[p].dims.length===1&&e[p].dims[0]>0&&(e[p].getBigInt64Array().forEach(l=>u.push(Number(l))),u.length!==0&&u.length!==i&&r>=18&&u.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(o.length!==0&&o.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(u.length!==0&&u.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof o<"u"&&typeof u<"u"&&o.length>0&&u.length>i)throw new Error("Resize requires only of scales or sizes to be specified")},sh=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",uh=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",dh=(e,t,r)=>{let o=new Array(r).fill(0).concat(new Array(r).fill(1)),u=e.length===0?o:e.slice();return t.length>0?(t.forEach((n,a)=>{o[n]=u[a],o[a+r]=u[t.length+a]}),o):u},lh=(e,t,r,o)=>{let u=[];if(r.length>0)if(o.length>0){if(e.forEach(n=>u.push(n)),Math.max(...o)>e.length)throw new Error("axes is out of bound");o.forEach((n,a)=>u[n]=r[a])}else r.forEach(n=>u.push(n));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");u=e.map((n,a)=>Math.round(n*t[a]))}return u},ch=(e,t,r)=>{let o=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>t[n]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>t[n]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let u=e.slice();return r.axes.length>0?(r.axes.forEach(n=>t[n]=o),r.axes.forEach(n=>u[n]=Math.round(e[n]*t[n]))):(t.fill(o,0,t.length),u.forEach((n,a)=>u[a]=Math.round(n*t[a]))),u},ph=(e,t,r,o,u)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${F("uniforms.scales","i",o)};
        var roi_low = ${F("uniforms.roi","i",u)};
        var roi_hi = ${F("uniforms.roi",`i + ${t.length}`,u)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${F("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${F("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,mh=(e,t,r,o,u,n,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${o.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${F("uniforms.scales","i",u)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${F("uniforms.roi","i",n)};
          var roi_hi = ${F("uniforms.roi",`i + ${r.length}`,n)};
          var input_shape_i = ${F("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${F("uniforms.output_shape","i",o.length)};
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
    }`,fh=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${F("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,ml=(e,t,r,o)=>e.rank>o?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",hh=(e,t,r,o,u)=>{let[n,a,d,p]=r.length===2?[-1,0,1,-1]:[0,2,3,1],i=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${i} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(col, ${r[d]} - 1))`)};
      ${ml(e,p,n,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${i} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${i} = originalIndices[${a}];
      var col:${i} = originalIndices[${d}];
      ${o?`if (row < 0 || row > (${r[a]} - 1) || col < 0 || col > (${r[d]} - 1)) {
        return ${u};
      }`:""};
      row = max(0, min(row, ${r[a]} - 1));
      col = max(0, min(col, ${r[d]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${n}])`:"0"};
      var x11: ${i} = getInputValue(batch, channel, row1, col1);
      var x12: ${i} = getInputValue(batch, channel, row1, col2);
      var x21: ${i} = getInputValue(batch, channel, row2, col1);
      var x22: ${i} = getInputValue(batch, channel, row2, col2);
      var dx1: ${i} = abs(row - ${i}(row1));
      var dx2: ${i} = abs(${i}(row2) - row);
      var dy1: ${i} = abs(col - ${i}(col1));
      var dy2: ${i} = abs(${i}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},gh=(e,t,r,o,u,n,a,d,p,i)=>{let l=r.length===2,[s,c]=l?[0,1]:[2,3],h=e.type.value,g=y=>{let C=y===s?"row":"col";return`
      fn ${C}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${h} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${h} = getOriginalCoordinateFromResizedCoordinate(output_index, ${u[y]},
        ${o[y]}, ${r[y]}, ${n[y]}, ${n[y]} + ${r.length});
        var fractOriginalIdx: ${h} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${d} && (originalIdx < 0 || originalIdx > (${r[y]} - 1))) {
          return ${p};
        }
        var data: array<${h}, 4> = array<${h}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${C}: ${h} = originalIdx + ${h}(i);
          if (${C} < 0 || ${C} >= ${r[y]}) {
            ${i?`coefs[i + 1] = 0.0;
                        continue;`:d?`return ${p};`:`${C} = max(0, min(${C}, ${r[y]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",y,`u32(${C})`)};
          data[i + 1] = ${y===s?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${g(s)};
    ${g(c)};
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
    `},yh=(e,t,r,o,u)=>{let[n,a,d,p,i]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(height, ${r[d]} - 1))`)};
      ${e.indicesSet("input_indices",p,`max(0, min(width, ${r[p]} - 1))`)};
      ${ml(e,i,n,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${l} = originalIndices[${a}];
      var height:${l} = originalIndices[${d}];
      var width:${l} = originalIndices[${p}];
      ${o?`if (depth < 0 || depth > (${r[a]} - 1) || height < 0 || height > (${r[d]} - 1) || width < 0 || (width > ${r[p]} - 1)) {
      return ${u};
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
      var channel: u32 = ${r.length>3?`u32(originalIndices[${i}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${n}])`:"0"};

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
    }`},bh=(e,t,r,o,u,n)=>{let a=e.dims,d=dh(n,t.axes,a.length),p=lh(a,o,u,t.axes),i=o.slice();o.length===0&&(i=a.map((A,X)=>A===0?1:p[X]/A),t.keepAspectRatioPolicy!=="stretch"&&(p=ch(a,i,t)));let l=M("output",e.dataType,p.length),s=E("input",e.dataType,a.length),c=k.size(p),h=a.length===p.length&&a.every((A,X)=>A===p[X]),g=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,C=s.type.value,W=A=>`
      ${h?"":`
      ${sh(t.coordinateTransformMode,C)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${fh(s,a)};
              ${uh(t.nearestMode,r,C)};
              ${mh(s,l,a,p,i.length,d.length,g)};
              `;case"linear":return`
              ${ph(l,a,p,i.length,d.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${hh(s,l,a,g,y)}`;if(a.length===3||a.length===5)return`${yh(s,l,a,g,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${gh(s,l,a,p,i,d,t.cubicCoeffA,g,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${A.registerUniform("output_size","u32").registerUniform("scales","f32",i.length).registerUniform("roi","f32",d.length).declareVariables(s,l)}
      ${A.mainStart()}
        ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${h?"output[global_idx] = input[global_idx];":`
        let output_indices = ${l.offsetToIndices("global_idx")};
        var input_indices: ${s.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${s.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${i.length>0?i:""}|${u.length>0?u:""}|${d.length>0?d:""}|${h}|${a}`,inputDependencies:["rank"]},getShaderSource:W,getRunData:()=>({outputs:[{dims:p,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},{type:1,data:i},{type:1,data:d},...R(a,p)]})}},wh=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},fl=(e,t)=>{let r=[],o=[],u=[],n=wh(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");ah(e.inputs,t,n,r,o,u),e.compute(bh(e.inputs[0],t,n,r,o,u),{inputs:[0]})},hl=e=>{let t=e.antialias,r=e.axes,o=e.coordinateTransformMode,u=e.cubicCoeffA,n=e.excludeOutside!==0,a=e.extrapolationValue,d=e.keepAspectRatioPolicy,p=e.mode,i=e.nearestMode===""?"simple":e.nearestMode;return J({antialias:t,axes:r,coordinateTransformMode:o,cubicCoeffA:u,excludeOutside:n,extrapolationValue:a,keepAspectRatioPolicy:d,mode:p,nearestMode:i})}}),_h,vh,yl,bl=V(()=>{Q(),ie(),Ie(),ae(),_h=(e,t)=>{let[r,o,u,n]=e,{numHeads:a,rotaryEmbeddingDim:d}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!k.areEqual(o.dims,[])&&!k.areEqual(o.dims,[1])&&o.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${o.dims.length}`);if(u.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${u.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!k.areEqual(u.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(d>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let p=r.dims[0],i=r.dims[r.dims.length-2],l=u.dims[0],s=k.sizeFromDimension(r.dims,1)/i,c=d===0?u.dims[1]*2:s/a;if(d>c)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(o.dims.length===2){if(p!==o.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${o.dims[0]}`);if(i!==o.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${o.dims[1]}`)}if(c/2!==u.dims[1]&&d/2!==u.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${u.dims[1]}`);if(i>l)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},vh=(e,t)=>{let{interleaved:r,numHeads:o,rotaryEmbeddingDim:u,scale:n}=t,a=e[0].dims[0],d=k.sizeFromDimension(e[0].dims,1),p=e[0].dims[e[0].dims.length-2],i=d/p,l=e[2].dims[1],s=u===0?l*2:i/o,c=new Array(a,p,i/s,s-l),h=k.computeStrides(c),g=[{type:1,data:n},{type:12,data:c},{type:12,data:h},...e[0].dims.length===3?new Array({type:12,data:[d,i,s,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[d,s,p*s,1]}):[],...R(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=C=>{let W=E("input",e[0].dataType,e[0].dims.length),A=E("position_ids",e[1].dataType,e[1].dims.length),X=E("cos_cache",e[2].dataType,e[2].dims.length),ni=E("sin_cache",e[3].dataType,e[3].dims.length),ii=M("output",e[0].dataType,e[0].dims.length);return C.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:c.length},{name:"global_strides",type:"u32",length:h.length},{name:"input_output_strides",type:"u32",length:h.length}]),`
        ${C.declareVariables(W,A,X,ni,ii)}

        ${C.mainStart(At)}
          let half_rotary_emb_dim = uniforms.${X.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${C.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${A.broadcastedIndicesToOffset("bsnh.xy",M("",A.type.tensor,2))};
            let position_id =
                u32(${A.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${W.getByOffset("i")} * ${X.get("position_id","bsnh[3]")} -
                ${W.getByOffset("j")} * ${ni.get("position_id","bsnh[3]")};
            ${ii.setByOffset("i","re")}
            let im = ${W.getByOffset("i")} * ${ni.get("position_id","bsnh[3]")} +
                ${W.getByOffset("j")} * ${X.get("position_id","bsnh[3]")};
            ${ii.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${ii.setByOffset("k",W.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:J({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(k.size(c)/At)},programUniforms:g})}},yl=(e,t)=>{_h(e.inputs,t),e.compute(vh(e.inputs,t))}}),$h,xh,wl,_l=V(()=>{Q(),ie(),ae(),$h=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],o=e[2];if(t.dataType!==r.dataType||t.dataType!==o.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let u=t.dims[t.dims.length-1],n=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==u)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(o.dims.length!==1)throw new Error("Gamma must be 1D");if(o.dims[o.dims.length-1]!==u)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==u)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==u)throw new Error("Bias must have the same hidden size as input")}},xh=(e,t,r,o)=>{let u=t.simplified,n=e[0].dims,a=k.size(n),d=n,p=a,i=n.slice(-1)[0],l=o?n.slice(0,-1).concat(1):[],s=!u&&e.length>3,c=e.length>4,h=o&&r>1,g=o&&r>2,y=r>3,C=64,W=we(i),A=[{type:12,data:p},{type:12,data:W},{type:12,data:i},{type:1,data:t.epsilon}],X=ii=>{let li=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],ui=[E("x",e[0].dataType,e[0].dims,W),E("skip",e[1].dataType,e[1].dims,W),E("gamma",e[2].dataType,e[2].dims,W)];s&&ui.push(E("beta",e[3].dataType,e[3].dims,W)),c&&ui.push(E("bias",e[4].dataType,e[4].dims,W)),ui.push(M("output",e[0].dataType,d,W)),h&&ui.push(M("mean_output",1,l)),g&&ui.push(M("inv_std_output",1,l)),y&&ui.push(M("input_skip_bias_sum",e[0].dataType,d,W));let hi=he(e[0].dataType),yi=he(1,W);return`

      ${ii.registerUniforms(li).declareVariables(...ui)}
      var<workgroup> sum_shared : array<${yi}, ${C}>;
      var<workgroup> sum_squared_shared : array<${yi}, ${C}>;

      ${ii.mainStart([C,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${C};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${C};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${C-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${c?"bias[offset1d + i]":hi+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${kt(hi,W,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${C};
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
        let mean = ${Ze("sum",W)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Ze("square_sum",W)} / f32(uniforms.hidden_size) ${u?"":"- mean * mean"} + uniforms.epsilon);
        ${h?"mean_output[global_idx] = mean;":""}
        ${g?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${u?"":`- ${hi}(mean)`}) *
            ${hi}(inv_std_dev) * gamma[offset1d + i]
            ${s?"+ beta[offset1d + i]":""};
        }
      }`},ni=[{dims:d,dataType:e[0].dataType}];return r>1&&ni.push({dims:l,dataType:1}),r>2&&ni.push({dims:l,dataType:1}),r>3&&ni.push({dims:n,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${W};${h};${g};${y}`,inputDependencies:e.map((ii,li)=>"type")},getShaderSource:X,getRunData:()=>({outputs:ni,dispatchGroup:{x:Math.ceil(p/i)},programUniforms:A})}},wl=(e,t)=>{$h(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(xh(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Sh,on,Th,vl,Ih,Ch,$l,xl,Sl=V(()=>{Q(),ie(),Ie(),ae(),Sh=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,o)=>{if(e[o+1].dataType!==6&&e[o+1].dataType!==7)throw new Error(`Input ${o} must be an array of int32 or int64`)})},on=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(o=>r.push(Number(o)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(o=>r.push(Number(o)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Th=(e,t)=>{if(e.length>1){let r=on(e,1),o=on(e,2),u=on(e,3);return u.length===0&&(u=[...Array(e[0].dims.length).keys()]),J({starts:r,ends:o,axes:u})}else return t},vl=(e,t,r,o,u)=>{let n=e;return e<0&&(n+=r[o[t]]),u[t]<0?Math.max(0,Math.min(n,r[o[t]]-1)):Math.max(0,Math.min(n,r[o[t]]))},Ih=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${F("uniforms.input_shape","i",r.length)};
            let steps_i = ${F("uniforms.steps","i",r.length)};
            let signs_i = ${F("uniforms.signs","i",r.length)};
            let starts_i = ${F("uniforms.starts","i",r.length)};
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
      }`,Ch=(e,t)=>{let r=e[0].dims,o=k.size(r),u=t.axes.length>0?k.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],n=on(e,4);n.forEach(W=>W!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(u.length).fill(1));let a=t.starts.map((W,A)=>vl(W,A,r,u,n)),d=t.ends.map((W,A)=>vl(W,A,r,u,n));if(u.length!==a.length||u.length!==d.length)throw new Error("start, ends and axes should have the same number of elements");if(u.length!==r.length)for(let W=0;W<r.length;++W)u.includes(W)||(a.splice(W,0,0),d.splice(W,0,r[W]),n.splice(W,0,1));let p=n.map(W=>Math.sign(W));n.forEach((W,A,X)=>{if(W<0){let ni=(d[A]-a[A])/W,ii=a[A],li=ii+ni*n[A];a[A]=li,d[A]=ii,X[A]=-W}});let i=r.slice(0);u.forEach((W,A)=>{i[W]=Math.ceil((d[W]-a[W])/n[W])});let l={dims:i,dataType:e[0].dataType},s=M("output",e[0].dataType,i.length),c=E("input",e[0].dataType,e[0].dims.length),h=k.size(i),g=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:p.length},{name:"steps",type:"u32",length:n.length}],y=[{type:12,data:h},{type:12,data:a},{type:6,data:p},{type:12,data:n},...R(e[0].dims,i)],C=W=>`
      ${W.registerUniforms(g).declareVariables(c,s)}
        ${Ih(c,s,r)}
        ${W.mainStart()}
          ${W.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${s.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${s.setByOffset("global_idx",c.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${p.length}_${a.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:C,getRunData:()=>({outputs:[l],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:y})}},$l=(e,t)=>{Sh(e.inputs,t);let r=Th(e.inputs,t);e.compute(Ch(e.inputs,r),{inputs:[0]})},xl=e=>{let t=e.starts,r=e.ends,o=e.axes;return J({starts:t,ends:r,axes:o})}}),Ah,kh,Tl,Il,Cl=V(()=>{Q(),ie(),Ie(),lt(),ae(),Ah=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},kh=(e,t)=>{let r=e.inputs[0],o=r.dims,u=k.size(o),n=64,a=o.length,d=k.normalizeAxis(t.axis,a),p=d<o.length-1,i,l=[];p?(l=Array.from({length:a},(ui,hi)=>hi),l[d]=a-1,l[a-1]=d,i=e.compute(Pe(r,l),{inputs:[r],outputs:[-1]})[0]):i=r;let s=i.dims,c=s[a-1],h=u/c,g=we(c),y=c/g,C=(ui,hi)=>hi===4?`max(max(${ui}.x, ${ui}.y), max(${ui}.z, ${ui}.w))`:hi===2?`max(${ui}.x, ${ui}.y)`:hi===3?`max(max(${ui}.x, ${ui}.y), ${ui}.z)`:ui,W=E("x",i.dataType,i.dims,g),A=M("result",i.dataType,i.dims,g),X=W.type.value,ni=he(i.dataType)==="f32"?`var threadMax = ${X}(-3.402823e+38f);`:`var threadMax = ${X}(-65504.0h);`,ii=ui=>`
      var<workgroup> rowMaxShared : ${X};
      var<workgroup> rowSumShared : ${X};
      var<workgroup> threadShared : array<${X}, ${n}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${X} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${X}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${ui.registerUniform("packedCols","i32").declareVariables(W,A)}
      ${ui.mainStart()}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${n};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${ni}
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
          rowMaxShared = ${X}(${C("threadShared[0]",g)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${X}(0.0);
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
          rowSumShared = ${X}(${Ze("threadShared[0]",g)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,li=e.compute({name:"Softmax",shaderCache:{hint:`${g}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:s,dataType:i.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:y}]}),getShaderSource:ii},{inputs:[i],outputs:[p?-1:0]})[0];p&&e.compute(Pe(li,l),{inputs:[li]})},Tl=(e,t)=>{Ah(e.inputs),kh(e,t)},Il=e=>J({axis:e.axis})}),Eh,Ph,zh,Oh,Bh,Al,kl,El=V(()=>{Q(),ie(),Ie(),ae(),Eh=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Ph=(e,t)=>{let r=[],o=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(u=>r.push(Number(u))),o=r.length),J({numOutputs:o,axis:t.axis,splitSizes:r})},zh=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${F("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Oh=e=>{let t=e.length,r=[];for(let o=0;o<t;++o){let u=e[o].setByIndices("indices","input[global_idx]");t===1?r.push(u):o===0?r.push(`if (output_number == ${o}u) { ${u} }`):o===t-1?r.push(`else { ${u} }`):r.push(`else if (output_number == ${o}) { ${u} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Bh=(e,t)=>{let r=e[0].dims,o=k.size(r),u=e[0].dataType,n=k.normalizeAxis(t.axis,r.length),a=new Array(t.numOutputs),d=E("input",u,r.length),p=new Array(t.numOutputs),i=[],l=[],s=0,c=[{type:12,data:o}];for(let g=0;g<t.numOutputs;g++){s+=t.splitSizes[g],p[g]=s;let y=r.slice();y[n]=t.splitSizes[g],l.push(y),a[g]=M(`output${g}`,u,y.length),i.push({dims:l[g],dataType:e[0].dataType})}c.push({type:12,data:p},...R(r,...l));let h=g=>`
  ${g.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",p.length).declareVariables(d,...a)}
  ${zh(p.length)}
  ${Oh(a)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${d.offsetToIndices("global_idx")};
    var index = ${d.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${F("uniforms.size_in_split_axis","output_number - 1u",p.length)};
      ${d.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:h,getRunData:()=>({outputs:i,dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c})}},Al=(e,t)=>{Eh(e.inputs);let r=e.inputs.length===1?t:Ph(e.inputs,t);e.compute(Bh(e.inputs,r),{inputs:[0]})},kl=e=>{let t=e.axis,r=e.splitSizes,o=e.numOutputs<0?r.length:e.numOutputs;if(o!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return J({axis:t,numOutputs:o,splitSizes:r})}}),Dh,Mh,Pl,zl=V(()=>{Q(),ie(),ae(),Dh=(e,t,r,o,u)=>{let n=M("output_data",u,r.length,4),a=E("a_data",t[1].dataType,t[1].dims.length,4),d=E("b_data",t[2].dataType,t[2].dims.length,4),p=E("c_data",t[0].dataType,t[0].dims.length,4),i,l=(s,c,h)=>`select(${c}, ${s}, ${h})`;if(!o)i=n.setByOffset("global_idx",l(a.getByOffset("global_idx"),d.getByOffset("global_idx"),p.getByOffset("global_idx")));else{let s=(c,h,g="")=>{let y=`a_data[index_a${h}][component_a${h}]`,C=`b_data[index_b${h}][component_b${h}]`,W=`bool(c_data[index_c${h}] & (0xffu << (component_c${h} * 8)))`;return`
            let output_indices${h} = ${n.offsetToIndices(`global_idx * 4u + ${h}u`)};
            let offset_a${h} = ${a.broadcastedIndicesToOffset(`output_indices${h}`,n)};
            let offset_b${h} = ${d.broadcastedIndicesToOffset(`output_indices${h}`,n)};
            let offset_c${h} = ${p.broadcastedIndicesToOffset(`output_indices${h}`,n)};
            let index_a${h} = offset_a${h} / 4u;
            let index_b${h} = offset_b${h} / 4u;
            let index_c${h} = offset_c${h} / 4u;
            let component_a${h} = offset_a${h} % 4u;
            let component_b${h} = offset_b${h} % 4u;
            let component_c${h} = offset_c${h} % 4u;
            ${c}[${h}] = ${g}(${l(y,C,W)});
          `};u===9?i=`
            var data = vec4<u32>(0);
            ${s("data",0,"u32")}
            ${s("data",1,"u32")}
            ${s("data",2,"u32")}
            ${s("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:i=`
            ${s("output_data[global_idx]",0)}
            ${s("output_data[global_idx]",1)}
            ${s("output_data[global_idx]",2)}
            ${s("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(p,a,d,n)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${i}
      }`},Mh=e=>{let t=e[1].dims,r=e[2].dims,o=e[0].dims,u=e[1].dataType,n=!(k.areEqual(t,r)&&k.areEqual(r,o)),a=t,d=k.size(t);if(n){let i=rt.calcShape(rt.calcShape(t,r,!1),o,!1);if(!i)throw new Error("Can't perform where op on the given tensors");a=i,d=k.size(a)}let p=Math.ceil(d/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:i=>Dh(i,e,a,n,u),getRunData:()=>({outputs:[{dims:a,dataType:u}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:p},...R(o,t,r,a)]})}},Pl=e=>{e.compute(Mh(e.inputs))}}),Ol,Bl=V(()=>{Ts(),Kr(),As(),Es(),hu(),Iu(),ku(),Hu(),Xu(),Ju(),rd(),sd(),ld(),pd(),hd(),bd(),vd(),Sd(),Bd(),Rd(),Vd(),fo(),Ld(),xo(),Gd(),sl(),ll(),pl(),qr(),gl(),bl(),_l(),Sl(),Cl(),El(),To(),lt(),Xr(),zl(),Ol=new Map([["Abs",[Ps]],["Acos",[zs]],["Acosh",[Os]],["Add",[gu]],["ArgMax",[Ss,uo]],["ArgMin",[xs,uo]],["Asin",[Bs]],["Asinh",[Ds]],["Atan",[Ms]],["Atanh",[Rs]],["Attention",[Is]],["AveragePool",[Qd,Zd]],["BatchNormalization",[Cs]],["BiasAdd",[ks]],["BiasSplitGelu",[fu]],["Cast",[Vs,Us]],["Ceil",[Ws]],["Clip",[Ns]],["Concat",[Cu,Au]],["Conv",[bo,yo]],["ConvTranspose",[Yu,Ku]],["Cos",[Ls]],["Cosh",[Hs]],["CumSum",[Zu,Qu]],["DepthToSpace",[ed,td]],["DequantizeLinear",[ul,dl]],["Div",[yu]],["Einsum",[id,ad]],["Elu",[Gs,Qt]],["Equal",[bu]],["Erf",[Fs]],["Exp",[qs]],["Expand",[dd]],["FastGelu",[cd]],["Floor",[js]],["FusedConv",[bo,yo]],["Gather",[fd,md]],["GatherElements",[_d,wd]],["GatherBlockQuantized",[gd,yd]],["Gelu",[Ks]],["Gemm",[xd,$d]],["GlobalAveragePool",[tl,el]],["GlobalMaxPool",[al,il]],["Greater",[$u]],["GreaterOrEqual",[Su]],["GroupQueryAttention",[Od,zd]],["HardSigmoid",[ru,tu]],["InstanceNormalization",[Md]],["LayerNormalization",[Ud]],["LeakyRelu",[Ys,Qt]],["Less",[xu]],["LessOrEqual",[Tu]],["Log",[cu]],["MatMul",[Wu]],["MatMulNBits",[Nd,Wd]],["MaxPool",[nl,ol]],["Mul",[wu]],["MultiHeadAttention",[Cd,Id]],["Neg",[Zs]],["Not",[Xs]],["Pad",[Hd]],["Pow",[_u]],["QuickGelu",[pu,Qt]],["Range",[cl]],["Reciprocal",[Qs]],["ReduceMin",[ys]],["ReduceMean",[ps]],["ReduceMax",[gs]],["ReduceSum",[ws]],["ReduceProd",[bs]],["ReduceL1",[ms]],["ReduceL2",[fs]],["ReduceLogSum",[vs]],["ReduceLogSumExp",[hs]],["ReduceSumSquare",[_s]],["Relu",[Js]],["Resize",[fl,hl]],["RotaryEmbedding",[yl]],["Sigmoid",[eu]],["Sin",[nu]],["Sinh",[ou]],["Slice",[$l,xl]],["SkipLayerNormalization",[wl]],["Split",[Al,kl]],["Sqrt",[iu]],["Softmax",[Tl,Il]],["Sub",[vu]],["Tan",[au]],["Tanh",[uu]],["ThresholdedRelu",[lu,Qt]],["Tile",[kd]],["Transpose",[Ja,es]],["Where",[Pl]]])}),an,Dl=V(()=>{Ke(),Xe(),ae(),an=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,o,u){Le(e.programInfo.name);let n=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let d=[];for(let i of t)d.push({binding:d.length,resource:{buffer:i.buffer}});for(let i of r)d.push({binding:d.length,resource:{buffer:i.buffer}});u&&d.push({binding:d.length,resource:u});let p=n.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:d,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let i={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:p,dispatchGroup:o};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(i)}a.setPipeline(e.computePipeline),a.setBindGroup(0,p),a.dispatchWorkgroups(...o),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ve(e.programInfo.name)}dispose(){}build(e,t){Le(e.name);let r=this.backend.device,o=[];r.features.has("shader-f16")&&o.push("enable f16;");let u=Za(t,this.backend.device.limits),n=e.getShaderSource(u),a=`${o.join(`
`)}
${u.additionalImplementations}
${n}`,d=r.createShaderModule({code:a,label:e.name});me("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let p=r.createComputePipeline({compute:{module:d,entryPoint:"main"},layout:"auto",label:e.name});return Ve(e.name),{programInfo:e,computePipeline:p,uniformVariablesInfo:u.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,o=typeof e=="number"?1:e.z||1,u=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=u&&r<=u&&o<=u)return[t,r,o];let n=t*r*o,a=Math.ceil(Math.sqrt(n));if(a>u){if(a=Math.ceil(Math.cbrt(n)),a>u)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),Rh,Uh,Io,sn,Ml=V(()=>{Ke(),Q(),Xe(),Xn(),Ka(),Bl(),Dl(),Rh=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let o=0;o<e.length;++o){let u=e[o].dataType;switch(t[o]){case"none":{r.push("");break}case"type":{r.push(`${u}`);break}case"rank":{let n=e[o].dims.length;r.push(`${u};${n}`);break}case"dims":{let n=e[o].dims.join(",");r.push(`${u};${n}`);break}default:throw new Error(`unsupported input dependency: ${t[o]}`)}}return r.join("|")},Uh=(e,t,r)=>{let o=e.name;return e.shaderCache?.hint&&(o+="["+e.shaderCache.hint+"]"),o+=":"+r+`:${Rh(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,o},Io=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},sn=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],o={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r};t.features.has("chromium-experimental-timestamp-query-inside-passes")?r.push("chromium-experimental-timestamp-query-inside-passes"):t.features.has("timestamp-query")&&r.push("timestamp-query"),t.features.has("shader-f16")&&r.push("shader-f16"),this.device=await t.requestDevice(o),this.adapterInfo=new Io(t.info||await t.requestAdapterInfo()),this.gpuDataManager=ja(this),this.programManager=new an(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Wr(e.logLevel,!!e.debug),this.device.onuncapturederror=u=>{u.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${u.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Le(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let o=0;o<t.length/2;o++){let u=r[o],n=u.kernelId,a=this.kernels.get(n),d=a.kernelType,p=a.kernelName,i=u.programName,l=u.inputTensorViews,s=u.outputTensorViews,c=t[o*2],h=t[o*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=c);let g=Number(c-this.queryTimeBase),y=Number(h-this.queryTimeBase);if(!Number.isSafeInteger(g)||!Number.isSafeInteger(y))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:l.map(C=>({dims:C.dims,dataType:yt(C.dataType)})),outputsMetadata:s.map(C=>({dims:C.dims,dataType:yt(C.dataType)})),kernelId:n,kernelType:d,kernelName:p,programName:i,startTime:g,endTime:y});else{let C="";l.forEach((A,X)=>{C+=`input[${X}]: [${A.dims}] | ${yt(A.dataType)}, `});let W="";s.forEach((A,X)=>{W+=`output[${X}]: [${A.dims}] | ${yt(A.dataType)}, `}),console.log(`[profiling] kernel "${n}|${d}|${p}|${i}" ${C}${W}execution time: ${y-g} ns`)}Sr("GPU",`${i}::${c}::${h}`)}e.unmap(),this.pendingQueries.delete(e)}),Ve()}run(e,t,r,o,u,n){Le(e.name);let a=[];for(let A=0;A<t.length;++A){let X=t[A].data;if(X===0)continue;let ni=this.gpuDataManager.get(X);if(!ni)throw new Error(`no GPU data for input: ${X}`);a.push(ni)}let{outputs:d,dispatchGroup:p,programUniforms:i}=e.getRunData(t),l=r.length===0?d.map((A,X)=>X):r;if(l.length!==d.length)throw new Error(`Output size ${l.length} must be equal to ${d.length}.`);let s=[],c=[];for(let A=0;A<d.length;++A){if(!Number.isInteger(l[A])||l[A]<-3||l[A]>=n)throw new Error(`Invalid output index: ${l[A]}`);if(l[A]===-3)continue;let X=l[A]===-1,ni=l[A]===-2,ii=X||ni?u(d[A].dataType,d[A].dims):o(l[A],d[A].dataType,d[A].dims);if(s.push(ii),ii.data===0)continue;let li=this.gpuDataManager.get(ii.data);if(!li)throw new Error(`no GPU data for output: ${ii.data}`);if(X&&this.temporaryData.push(li),ni){let ui=this.kernelPersistentData.get(this.currentKernelId);ui||(ui=[],this.kernelPersistentData.set(this.currentKernelId,ui)),ui.push(li)}c.push(li)}if(a.length!==t.length||c.length!==s.length){if(c.length===0)return Ve(e.name),s;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let h;if(i){let A=0,X=[];i.forEach(ui=>{let hi=typeof ui.data=="number"?[ui.data]:ui.data;if(hi.length===0)return;let yi=ui.type===10?2:4,$i,Bi;ui.type===10?(Bi=hi.length>4?16:hi.length>2?8:hi.length*yi,$i=hi.length>4?16:yi*hi.length):(Bi=hi.length<=2?hi.length*yi:16,$i=16),A=Math.ceil(A/Bi)*Bi,X.push(A);let Oi=ui.type===10?8:4;A+=hi.length>4?Math.ceil(hi.length/Oi)*$i:hi.length*yi});let ni=16;A=Math.ceil(A/ni)*ni;let ii=new ArrayBuffer(A);i.forEach((ui,hi)=>{let yi=X[hi],$i=typeof ui.data=="number"?[ui.data]:ui.data;if(ui.type===6)new Int32Array(ii,yi,$i.length).set($i);else if(ui.type===12)new Uint32Array(ii,yi,$i.length).set($i);else if(ui.type===10)new Uint16Array(ii,yi,$i.length).set($i);else if(ui.type===1)new Float32Array(ii,yi,$i.length).set($i);else throw new Error(`Unsupported uniform type: ${yt(ui.type)}`)});let li=this.gpuDataManager.create(A,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(li.buffer,0,ii,0,A),this.gpuDataManager.release(li.id),h={offset:0,size:A,buffer:li.buffer}}let g=this.programManager.normalizeDispatchGroupSize(p),y=g[1]===1&&g[2]===1,C=Uh(e,t,y),W=this.programManager.getArtifact(C);if(W||(W=this.programManager.build(e,g),this.programManager.setArtifact(C,W),me("info",()=>`[artifact] key: ${C}, programName: ${e.name}`)),i&&W.uniformVariablesInfo){if(i.length!==W.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${W.uniformVariablesInfo.length}, got ${i.length} in program "${W.programInfo.name}".`);for(let A=0;A<i.length;A++){let X=i[A],ni=X.type,ii=typeof X.data=="number"?1:X.data.length,[li,ui]=W.uniformVariablesInfo[A];if(ni!==li||ii!==ui)throw new Error(`Uniform variable ${A} mismatch: expect type ${li} with size ${ui}, got type ${ni} with size ${ii} in program "${W.programInfo.name}".`)}}if(me("info",()=>`[ProgramManager] run "${e.name}" (key=${C}) with ${g[0]}x${g[1]}x${g[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let A={kernelId:this.currentKernelId,programName:W.programInfo.name,inputTensorViews:t,outputTensorViews:s};this.pendingKernels.push(A),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(A)}return this.programManager.run(W,a,c,g,h),Ve(e.name),s}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,o){let u=Ol.get(e);if(!u)throw new Error(`kernel not implemented: ${e}`);let n={kernelType:e,kernelName:o,kernelEntry:u[0],attributes:[u[1],r]};this.kernels.set(t,n)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let o=this.kernels.get(e);if(!o)throw new Error(`kernel not created: ${e}`);let u=o.kernelType,n=o.kernelName,a=o.kernelEntry,d=o.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${u}] ${n}" is not allowed to be called recursively`);this.currentKernelId=e,d[0]&&(d[1]=d[0](d[1]),d[0]=void 0),me("info",()=>`[WebGPU] Start to run kernel "[${u}] ${n}"...`);let p=this.env.debug;this.temporaryData=[];try{return p&&this.device.pushErrorScope("validation"),a(t,d[1]),0}catch(i){return r.push(Promise.resolve(`[WebGPU] Kernel "[${u}] ${n}" failed. ${i}`)),1}finally{p&&r.push(this.device.popErrorScope().then(i=>i?`GPU validation error for kernel "[${u}] ${n}": ${i.message}`:null));for(let i of this.temporaryData)this.gpuDataManager.release(i.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,o){let u=this.sessionExternalDataMapping.get(e);u||(u=new Map,this.sessionExternalDataMapping.set(e,u));let n=u.get(t),a=this.gpuDataManager.registerExternalBuffer(r,o,n);return u.set(t,[a,r]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let o=await eo(this,e,t);return Lr(o.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){me("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){me("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){me("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let o=0;o<r;o++){let u=this.getComputePassEncoder(),n=e[o];this.writeTimestamp(this.pendingDispatchNumber*2),u.setPipeline(n.computePipeline),u.setBindGroup(0,n.bindGroup),u.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[o]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Vh,Rl,un,Co,Ul,Vl=V(()=>{Xe(),Vh=1,Rl=()=>Vh++,un=class{constructor(e,t){this.mlContext=e,this.tensorEntry=t,this.tensorCache=t?[t]:[]}get tensor(){return this.tensorEntry?.[0]}get context(){if(!this.mlContext)throw new Error("MLContext has not been set.");return this.mlContext}set context(e){if(this.mlContext&&this.mlContext!==e)throw new Error("MLTensor in use in a different MLContext.");this.mlContext=e}destroy(){for(let[e]of this.tensorCache)e.destroy();this.tensorCache=[],this.tensorEntry=void 0}trySelectTensor(e,t){for(let[r,o,u]of this.tensorCache)if(t===r){if(this.context!==e)throw new Error("MLTensor cannot be registered with a different MLContext.");return this.tensorEntry=[r,o,u],!0}return!1}async ensureTensor(e,t,r){if(this.tensorEntry){let[n,a,d]=this.tensorEntry;if(a===e&&d.every((p,i)=>p===t[i]))return n}for(let[n,a,d]of this.tensorCache)if(a===e&&d.every((p,i)=>p===t[i])){if(r&&this.tensorEntry){me("verbose",()=>`[WebNN] Slowdown may occur, having to copy existing tensor {dataType: ${e}, shape: ${t}}`);let p=await this.context.readTensor(this.tensorEntry[0]);this.context.writeTensor(n,p)}return this.tensorEntry=[n,a,d],n}me("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${e}, shape: ${t}}`);let o=MLTensorUsage.READ|MLTensorUsage.WRITE,u=await this.context.createTensor({dataType:e,shape:t,dimensions:t,usage:o});return this.tensorEntry=[u,e,t],this.tensorCache.push(this.tensorEntry),this.activeUpload&&(this.mlContext?.writeTensor(u,this.activeUpload),this.activeUpload=void 0),u}upload(e){if(!this.tensorEntry){this.activeUpload=new Uint8Array(e);return}this.mlContext?.writeTensor(this.tensorEntry[0],e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.tensorEntry)throw new Error("Tensor has not been created.");return e?this.context.readTensor(this.tensorEntry[0],e):this.context.readTensor(this.tensorEntry[0])}},Co=class{constructor(e){this.backend=e,this.tensorsById=new Map,this.tensorIdsByContext=new Map}reserveTensorId(){let e=Rl();return this.tensorsById.set(e,new un),e}releaseTensorId(e){let t=this.tensorsById.get(e);if(t){t.destroy(),this.tensorsById.delete(e);for(let[r,o]of this.tensorIdsByContext)if(o.has(e)){o.delete(e),o.size===0&&this.tensorIdsByContext.delete(r);break}}}async ensureTensor(e,t,r,o){me("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${e}, dataType: ${t}, shape: ${r}, copyOld: ${o}}`);let u=this.tensorsById.get(e);if(!u)throw new Error("Tensor not found.");return u.context=this.backend.currentContext,this.tensorIdsByContext.has(this.backend.currentContext)||this.tensorIdsByContext.set(this.backend.currentContext,new Set),this.tensorIdsByContext.get(this.backend.currentContext)?.add(e),u.ensureTensor(t,r,o)}upload(e,t){this.tensorsById.get(e).upload(t)}async download(e,t){return me("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`),this.tensorsById.get(e).download(t)}releaseTensorsForContext(e){let t=this.tensorIdsByContext.get(e);if(t){for(let r of t)this.tensorsById.get(r).destroy(),this.tensorsById.delete(r);this.tensorIdsByContext.delete(e)}}registerTensor(e,t,r,o){for(let[a,d]of this.tensorsById)if(d.trySelectTensor(e,t))return a;let u=Rl();this.tensorsById.set(u,new un(e,[t,r,o]));let n=this.tensorIdsByContext.get(e);return n||(n=new Set,this.tensorIdsByContext.set(e,n)),n.add(u),u}},Ul=(...e)=>new Co(...e)}),Nl,dn,Wl=V(()=>{Q(),gt(),Xn(),Vl(),Xe(),Nl=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),dn=class{constructor(e){this.tensorManager=Ul(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,Wr(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){this.activeSessionId=e}get currentContext(){let e=this.getMLContext(this.currentSessionId);if(!e)throw new Error(`No MLContext found for session ${this.currentSessionId}`);return e}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e)}onReleaseSession(e){let t=this.mlContextBySessionId.get(e);if(!t)return;this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);r.delete(e),r.size===0&&(this.sessionIdsByMLContext.delete(t),this.tensorManager.releaseTensorsForContext(t))}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){me("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,o){let u=Nl.get(t);if(!u)throw new Error(`Unsupported ONNX data type: ${t}`);return this.tensorManager.ensureTensor(e,u,r,o)}uploadTensor(e,t){if(!Te().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");me("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Lr(r,t)}}registerMLTensor(e,t,r){let o=Nl.get(t);if(!o)throw new Error(`Unsupported ONNX data type: ${t}`);let u=this.tensorManager.registerTensor(this.currentContext,e,o,r);return me("verbose",()=>`[WebNN] registerMLTensor {tensor: ${e}, dataType: ${o}, dimensions: ${r}} -> {tensorId: ${u}}`),u}flush(){}}}),Ll={};Gt(Ll,{init:()=>Nh});var or,Ao,Nh,Hl=V(()=>{Q(),Ml(),Xe(),ie(),Wl(),or=class N1{constructor(t,r,o,u){this.module=t,this.dataType=r,this.data=o,this.dims=u}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=k.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=k.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=k.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=k.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(k.size(t)!==k.size(this.dims))throw new Error("Invalid new shape");return new N1(this.module,this.dataType,this.data,t)}},Ao=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let o=e.HEAPU32,u=r>>>2;this.opKernelContext=o[u++];let n=o[u++];this.outputCount=o[u++],this.customDataOffset=o[u++],this.customDataSize=o[u++];let a=[];for(let d=0;d<n;d++){let p=o[u++],i=o[u++],l=o[u++],s=[];for(let c=0;c<l;c++)s.push(o[u++]);a.push(new or(e,p,i,s))}this.inputs=a}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}getMaxComputeWorkgroupSizes(){return[this.backend.device.limits.maxComputeWorkgroupSizeX,this.backend.device.limits.maxComputeWorkgroupSizeY,this.backend.device.limits.maxComputeWorkgroupSizeZ]}getMaxComputeWorkgroupStoragesize(){return this.backend.device.limits.maxComputeWorkgroupStorageSize}compute(e,t){let r=t?.inputs?.map(a=>typeof a=="number"?this.inputs[a]:a)??this.inputs,o=t?.outputs??[],u=(a,d,p)=>new or(this.module,d,this.output(a,p),p),n=(a,d)=>{let p=It(a,d);if(!p)throw new Error(`Unsupported data type: ${a}`);let i=p>0?this.backend.gpuDataManager.create(p).id:0;return new or(this.module,a,i,d)};return this.backend.run(e,r,o,u,n,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let o=this.module.stackAlloc((1+t.length)*4),u=o>>2;this.module.HEAPU32[u++]=t.length;for(let n=0;n<t.length;n++)this.module.HEAPU32[u++]=t[n];return this.module._JsepOutput(this.opKernelContext,e,o)}catch(o){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${o}`)}finally{this.module.stackRestore(r)}}},Nh=async(e,t,r,o)=>{let u=t.jsepInit;if(!u)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let n=new sn;await n.initialize(r,o),u("webgpu",[n,a=>n.alloc(a),a=>n.free(a),(a,d,p,i=!1)=>{if(i)me("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${a}, dst=${d}, size=${p}`),n.memcpy(a,d);else{me("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${a}, gpuDataId=${d}, size=${p}`);let l=t.HEAPU8.subarray(a>>>0,(a>>>0)+p);n.upload(d,l)}},async(a,d,p)=>{me("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${a}, dataOffset=${d}, size=${p}`),await n.download(a,()=>t.HEAPU8.subarray(d>>>0,(d>>>0)+p))},(a,d,p)=>n.createKernel(a,d,p,t.UTF8ToString(t._JsepGetNodeName(d))),a=>n.releaseKernel(a),(a,d,p,i)=>{me("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${p}, kernel=${a}, contextDataOffset=${d}`);let l=new Ao(t,n,d);return n.computeKernel(a,l,i)},()=>n.captureBegin(),()=>n.captureEnd(),()=>n.replay()])}else{let n=new dn(r);u("webnn",[n,()=>n.reserveTensorId(),a=>n.releaseTensorId(a),async(a,d,p,i)=>n.ensureTensor(a,d,p,i),(a,d)=>{n.uploadTensor(a,d)},async(a,d)=>n.downloadTensor(a,d)])}}}),Wh,kr,Er,Et,Lh,jt,Pr,zr,Gl,Or,Br,Dr,Gn=V(()=>{Va(),Wa(),Q(),gt(),Rr(),Yn(),Wh=(e,t)=>{Te()._OrtInit(e,t)!==0&&ve("Can't initialize onnxruntime.")},kr=async e=>{Wh(e.wasm.numThreads,Xt(e.logLevel))},Er=async(e,t)=>{{let r=(Hl(),br(Ll)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let o=e.webgpu.adapter;if(o){if(typeof o.limits!="object"||typeof o.features!="object"||typeof o.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let u=e.webgpu.powerPreference;if(u!==void 0&&u!=="low-power"&&u!=="high-performance")throw new Error(`Invalid powerPreference setting: "${u}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(o=await navigator.gpu.requestAdapter({powerPreference:u,forceFallbackAdapter:n}),!o)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",Te(),e,o)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",Te(),e)}}},Et=new Map,Lh=e=>{let t=Te(),r=t.stackSave();try{let o=t.stackAlloc(8);return t._OrtGetInputOutputCount(e,o,o+4)!==0&&ve("Can't get session input/output count."),[t.HEAP32[o/4],t.HEAP32[o/4+1]]}finally{t.stackRestore(r)}},jt=e=>{let t=Te(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Pr=async(e,t)=>{let r,o,u=Te();Array.isArray(e)?[r,o]=e:e.buffer===u.HEAPU8.buffer?[r,o]=[e.byteOffset,e.byteLength]:[r,o]=jt(e);let n=0,a=0,d=0,p=[],i=[],l=[];try{if([a,p]=Na(t),t?.externalData&&u.mountExternalData){let A=[];for(let X of t.externalData){let ni=typeof X=="string"?X:X.path;A.push(Zt(typeof X=="string"?X:X.data).then(ii=>{u.mountExternalData(ni,ii)}))}await Promise.all(A)}for(let A of t?.executionProviders??[])if((typeof A=="string"?A:A.name)==="webnn"){if(u.shouldTransferToMLTensor=!1,u.currentContext)throw new Error("WebNN execution provider is already set.");if(typeof A!="string"){let X=A,ni=X?.context,ii=X?.gpuDevice,li=X?.deviceType,ui=X?.numThreads,hi=X?.powerPreference;ni?u.currentContext=ni:ii?u.currentContext=await navigator.ml.createContext(ii):u.currentContext=await navigator.ml.createContext({deviceType:li,numThreads:ui,powerPreference:hi})}else u.currentContext=await navigator.ml.createContext();break}n=await u._OrtCreateSession(r,o,a),n===0&&ve("Can't create a session."),u.currentContext&&(u.jsepRegisterMLContext(n,u.currentContext),u.currentContext=void 0,u.shouldTransferToMLTensor=!0);let[s,c]=Lh(n),h=!!t?.enableGraphCapture,g=[],y=[],C=[];for(let A=0;A<s;A++){let X=u._OrtGetInputName(n,A);X===0&&ve("Can't get an input name."),i.push(X),g.push(u.UTF8ToString(X))}for(let A=0;A<c;A++){let X=u._OrtGetOutputName(n,A);X===0&&ve("Can't get an output name."),l.push(X);let ni=u.UTF8ToString(X);y.push(ni);{if(h&&t?.preferredOutputLocation===void 0){C.push("gpu-buffer");continue}let ii=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[ni]??"cpu";if(ii!=="cpu"&&ii!=="cpu-pinned"&&ii!=="gpu-buffer"&&ii!=="ml-tensor")throw new Error(`Not supported preferred output location: ${ii}.`);if(h&&ii!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${ii}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);C.push(ii)}}let W=null;return C.some(A=>A==="gpu-buffer"||A==="ml-tensor")&&(d=u._OrtCreateBinding(n),d===0&&ve("Can't create IO binding."),W={handle:d,outputPreferredLocations:C,outputPreferredLocationsEncoded:C.map(A=>Kn(A))}),Et.set(n,[n,i,l,W,h,!1]),[n,g,y]}catch(s){throw i.forEach(c=>u._OrtFree(c)),l.forEach(c=>u._OrtFree(c)),d!==0&&u._OrtReleaseBinding(d),n!==0&&u._OrtReleaseSession(n),s}finally{u._free(r),a!==0&&u._OrtReleaseSessionOptions(a),p.forEach(s=>u._free(s)),u.unmountExternalData?.()}},zr=e=>{let t=Te(),r=Et.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[o,u,n,a,d]=r;a&&(d&&t._OrtClearBoundOutputs(a.handle),t._OrtReleaseBinding(a.handle)),t.jsepOnReleaseSession?.(e),u.forEach(p=>t._OrtFree(p)),n.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(o),Et.delete(e)},Gl=(e,t,r,o,u,n=!1)=>{if(!e){t.push(0);return}let a=Te(),d=e[0],p=e[1],i=e[3],l,s;if(d==="string"&&(i==="gpu-buffer"||i==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(n&&i!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${u} when enableGraphCapture is true.`);if(i==="gpu-buffer"){let g=e[2].gpuBuffer;s=It(Yt(d),p);let y=a.jsepRegisterBuffer;if(!y)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');l=y(o,u,g,s)}else if(i==="ml-tensor"){let g=e[2].mlTensor;s=It(Yt(d),p);let y=a.jsepRegisterMLTensor;if(!y)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');l=y(g,Yt(d),p)}else{let g=e[2];if(Array.isArray(g)){s=4*g.length,l=a._malloc(s),r.push(l);let y=l/4;for(let C=0;C<g.length;C++){if(typeof g[C]!="string")throw new TypeError(`tensor data at index ${C} is not a string`);a.HEAPU32[y++]=ke(g[C],r)}}else s=g.byteLength,l=a._malloc(s),r.push(l),a.HEAPU8.set(new Uint8Array(g.buffer,g.byteOffset,s),l)}let c=a.stackSave(),h=a.stackAlloc(4*p.length);try{let g=h/4;p.forEach(C=>a.HEAP32[g++]=C);let y=a._OrtCreateTensor(Yt(d),l,s,h,p.length,Kn(i));y===0&&ve(`Can't create tensor for input/output. session=${o}, index=${u}.`),t.push(y)}finally{a.stackRestore(c)}},Or=async(e,t,r,o,u,n)=>{let a=Te(),d=Et.get(e);if(!d)throw new Error(`cannot run inference. invalid session id: ${e}`);let p=d[0],i=d[1],l=d[2],s=d[3],c=d[4],h=d[5],g=t.length,y=o.length,C=0,W=[],A=[],X=[],ni=[],ii=a.stackSave(),li=a.stackAlloc(g*4),ui=a.stackAlloc(g*4),hi=a.stackAlloc(y*4),yi=a.stackAlloc(y*4);try{a.jsepOnRunStart?.(p),[C,W]=Ua(n);for(let xi=0;xi<g;xi++)Gl(r[xi],A,ni,e,t[xi],c);for(let xi=0;xi<y;xi++)Gl(u[xi],X,ni,e,g+o[xi],c);let $i=li/4,Bi=ui/4,Oi=hi/4,Li=yi/4;for(let xi=0;xi<g;xi++)a.HEAPU32[$i++]=A[xi],a.HEAPU32[Bi++]=i[t[xi]];for(let xi=0;xi<y;xi++)a.HEAPU32[Oi++]=X[xi],a.HEAPU32[Li++]=l[o[xi]];if(s&&!h){let{handle:xi,outputPreferredLocations:Mo,outputPreferredLocationsEncoded:zo}=s;if(i.length!==g)throw new Error(`input count from feeds (${g}) is expected to be always equal to model's input count (${i.length}).`);for(let Ti=0;Ti<g;Ti++){let Ei=t[Ti];await a._OrtBindInput(xi,i[Ei],A[Ti])!==0&&ve(`Can't bind input[${Ti}] for session=${e}.`)}for(let Ti=0;Ti<y;Ti++){let Ei=o[Ti];u[Ti]?.[3]?a._OrtBindOutput(xi,l[Ei],X[Ti],0)!==0&&ve(`Can't bind pre-allocated output[${Ti}] for session=${e}.`):a._OrtBindOutput(xi,l[Ei],0,zo[Ei])!==0&&ve(`Can't bind output[${Ti}] to ${Mo[Ti]} for session=${e}.`)}Et.set(e,[p,i,l,s,c,!0])}let Ro;s?Ro=await a._OrtRunWithBinding(p,s.handle,y,hi,C):Ro=await a._OrtRun(p,ui,li,g,yi,y,hi,C),Ro!==0&&ve("failed to call OrtRun().");let wi=[];for(let xi=0;xi<y;xi++){let Mo=a.HEAPU32[hi/4+xi];if(Mo===X[xi]){wi.push(u[xi]);continue}let zo=a.stackSave(),Ti=a.stackAlloc(4*4),Ei=!1,pi,gi=0;try{a._OrtGetTensorData(Mo,Ti,Ti+4,Ti+8,Ti+12)!==0&&ve(`Can't access output tensor data on index ${xi}.`);let Ni=Ti/4,Zo=a.HEAPU32[Ni++];gi=a.HEAPU32[Ni++];let Jo=a.HEAPU32[Ni++],Kh=a.HEAPU32[Ni++],Hh=[];for(let Ho=0;Ho<Kh;Ho++)Hh.push(a.HEAPU32[Jo/4+Ho]);a._OrtFree(Jo);let Xh=Hh.reduce((Ho,Yo)=>Ho*Yo,1);pi=yt(Zo);let Ko=s?.outputPreferredLocations[o[xi]];if(pi==="string"){if(Ko==="gpu-buffer"||Ko==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Ho=[],Yo=gi/4;for(let Qh=0;Qh<Xh;Qh++){let kf=a.HEAPU32[Yo++],dg=Qh===Xh-1?void 0:a.HEAPU32[Yo]-kf;Ho.push(a.UTF8ToString(kf,dg))}wi.push([pi,Hh,Ho,"cpu"])}else if(Ko==="gpu-buffer"&&Xh>0){let Ho=a.jsepGetBuffer;if(!Ho)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Yo=Ho(gi),Qh=It(Zo,Xh);if(Qh===void 0||!Vr(pi))throw new Error(`Unsupported data type: ${pi}`);Ei=!0,wi.push([pi,Hh,{gpuBuffer:Yo,download:a.jsepCreateDownloader(Yo,Qh,pi),dispose:()=>{a._OrtReleaseTensor(Mo)}},"gpu-buffer"])}else if(Ko==="ml-tensor"&&Xh>0){let Ho=a.jsepEnsureTensor;if(!Ho)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(It(Zo,Xh)===void 0||!Nr(pi))throw new Error(`Unsupported data type: ${pi}`);let Yo=await Ho(gi,Zo,Hh,!1);Ei=!0,wi.push([pi,Hh,{mlTensor:Yo,download:a.jsepCreateMLTensorDownloader(gi,pi),dispose:()=>{a.jsepReleaseTensorId(gi),a._OrtReleaseTensor(Mo)}},"ml-tensor"])}else{let Ho=Ur(pi),Yo=new Ho(Xh);new Uint8Array(Yo.buffer,Yo.byteOffset,Yo.byteLength).set(a.HEAPU8.subarray(gi,gi+Yo.byteLength)),wi.push([pi,Hh,Yo,"cpu"])}}finally{a.stackRestore(zo),pi==="string"&&gi&&a._free(gi),Ei||a._OrtReleaseTensor(Mo)}}return s&&!c&&(a._OrtClearBoundOutputs(s.handle),Et.set(e,[p,i,l,s,c,!1])),wi}finally{a.stackRestore(ii),A.forEach($i=>a._OrtReleaseTensor($i)),X.forEach($i=>a._OrtReleaseTensor($i)),ni.forEach($i=>a._free($i)),C!==0&&a._OrtReleaseRunOptions(C),W.forEach($i=>a._free($i))}},Br=e=>{let t=Te(),r=Et.get(e);if(!r)throw new Error("invalid session id");let o=r[0],u=t._OrtEndProfiling(o);u===0&&ve("Can't get an profile file name."),t._OrtFree(u)},Dr=e=>{let t=[];for(let r of e){let o=r[2];!Array.isArray(o)&&"buffer"in o&&t.push(o.buffer)}return t}}),Pt,Ye,ir,cn,pn,ln,ko,Eo,Lt,Ht,Gh,Fl,ql,jl,Kl,Yl,Xl,Zl,Po=V(()=>{Ke(),Gn(),gt(),qt(),Pt=()=>!!_e.wasm.proxy&&typeof document<"u",ir=!1,cn=!1,pn=!1,Eo=new Map,Lt=(e,t)=>{let r=Eo.get(e);r?r.push(t):Eo.set(e,[t])},Ht=()=>{if(ir||!cn||pn||!Ye)throw new Error("worker not ready")},Gh=e=>{switch(e.data.type){case"init-wasm":ir=!1,e.data.err?(pn=!0,ko[1](e.data.err)):(cn=!0,ko[0]()),ln&&(URL.revokeObjectURL(ln),ln=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Eo.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Fl=async()=>{if(!cn){if(ir)throw new Error("multiple calls to 'initWasm()' detected.");if(pn)throw new Error("previous call to 'initWasm()' failed.");if(ir=!0,Pt())return new Promise((e,t)=>{Ye?.terminate(),Da().then(([r,o])=>{try{Ye=o,Ye.onerror=n=>t(n),Ye.onmessage=Gh,ko=[e,t];let u={type:"init-wasm",in:_e};Ye.postMessage(u),ln=r}catch(u){t(u)}},t)});try{await Ar(_e.wasm),await kr(_e),cn=!0}catch(e){throw pn=!0,e}finally{ir=!1}}},ql=async e=>{if(Pt())return Ht(),new Promise((t,r)=>{Lt("init-ep",[t,r]);let o={type:"init-ep",in:{epName:e,env:_e}};Ye.postMessage(o)});await Er(_e,e)},jl=async e=>Pt()?(Ht(),new Promise((t,r)=>{Lt("copy-from",[t,r]);let o={type:"copy-from",in:{buffer:e}};Ye.postMessage(o,[e.buffer])})):jt(e),Kl=async(e,t)=>{if(Pt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Ht(),new Promise((r,o)=>{Lt("create",[r,o]);let u={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),Ye.postMessage(u,n)})}else return Pr(e,t)},Yl=async e=>{if(Pt())return Ht(),new Promise((t,r)=>{Lt("release",[t,r]);let o={type:"release",in:e};Ye.postMessage(o)});zr(e)},Xl=async(e,t,r,o,u,n)=>{if(Pt()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(u.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Ht(),new Promise((a,d)=>{Lt("run",[a,d]);let p=r,i={type:"run",in:{sessionId:e,inputIndices:t,inputs:p,outputIndices:o,options:n}};Ye.postMessage(i,Dr(p))})}else return Or(e,t,r,o,u,n)},Zl=async e=>{if(Pt())return Ht(),new Promise((t,r)=>{Lt("end-profiling",[t,r]);let o={type:"end-profiling",in:e};Ye.postMessage(o)});Br(e)}}),Ql,Fh,mn,Jl=V(()=>{Ke(),Po(),Q(),Cr(),Yn(),Ql=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Fh=e=>{switch(e[3]){case"cpu":return new De(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Vr(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:o,dispose:u}=e[2];return De.fromGpuBuffer(r,{dataType:t,dims:e[1],download:o,dispose:u})}case"ml-tensor":{let t=e[0];if(!Nr(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:o,dispose:u}=e[2];return De.fromMLTensor(r,{dataType:t,dims:e[1],download:o,dispose:u})}default:throw new Error(`invalid data location: ${e[3]}`)}},mn=class{async fetchModelAndCopyToWasmMemory(e){return jl(await Zt(e))}async loadModel(e,t){Le();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await Kl(r,t),Ve()}async dispose(){return Yl(this.sessionId)}async run(e,t,r){Le();let o=[],u=[];Object.entries(e).forEach(s=>{let c=s[0],h=s[1],g=this.inputNames.indexOf(c);if(g===-1)throw new Error(`invalid input '${c}'`);o.push(h),u.push(g)});let n=[],a=[];Object.entries(t).forEach(s=>{let c=s[0],h=s[1],g=this.outputNames.indexOf(c);if(g===-1)throw new Error(`invalid output '${c}'`);n.push(h),a.push(g)});let d=o.map((s,c)=>Ql(s,()=>`input "${this.inputNames[u[c]]}"`)),p=n.map((s,c)=>s?Ql(s,()=>`output "${this.outputNames[a[c]]}"`):null),i=await Xl(this.sessionId,u,d,a,p,r),l={};for(let s=0;s<i.length;s++)l[this.outputNames[a[s]]]=n[s]??Fh(i[s]);return Ve(),l}startProfiling(){}endProfiling(){Zl(this.sessionId)}}}),tc={};Gt(tc,{OnnxruntimeWebAssemblyBackend:()=>fn,initializeFlags:()=>ec,wasmBackend:()=>qh});var ec,fn,qh,rc=V(()=>{Ke(),Po(),Jl(),qt(),ec=()=>{if((typeof _e.wasm.initTimeout!="number"||_e.wasm.initTimeout<0)&&(_e.wasm.initTimeout=0),_e.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof _e.wasm.proxy!="boolean"&&(_e.wasm.proxy=!1),typeof _e.wasm.trace!="boolean"&&(_e.wasm.trace=!1),typeof _e.wasm.numThreads!="number"||!Number.isInteger(_e.wasm.numThreads)||_e.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)_e.wasm.numThreads=1;else{let e=typeof navigator>"u"?Vn("node:os").cpus().length:navigator.hardwareConcurrency;_e.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},fn=class{async init(e){ec(),await Fl(),await ql(e)}async createInferenceSessionHandler(e,t){let r=new mn;return await r.loadModel(e,t),Promise.resolve(r)}},qh=new fn});Ke();Ke();Ke();var Ia="1.20.1",Hx=Hn;{let e=(rc(),br(tc)).wasmBackend;St("webgpu",e,5),St("webnn",e,5),St("cpu",e,10),St("wasm",e,10)}Object.defineProperty(_e.versions,"web",{value:Ia,enumerable:!0});/**
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
 */var ortWebgpu=Object.freeze({__proto__:null,get InferenceSession(){return Ip},get TRACE(){return Sr},get TRACE_FUNC_BEGIN(){return Le},get TRACE_FUNC_END(){return Ve},get Tensor(){return De},get TrainingSession(){return Ap},default:Hx,get env(){return _e},get registerBackend(){return St}}),jsepAsset=""+new URL("ort-wasm-simd-threaded.jsep-Bj7LIWiD.wasm",import.meta.url).href;const sigmoid=e=>1/(1+Math.exp(-e));function rowIsLogits(e,t,r,o=.05){for(let u=r*t,n=(r+1)*t;u<n;u++)if(e[u]<-o||e[u]>1+o)return!0;return!1}function iou(e,t){const r=Math.max(e.x1,t.x1),o=Math.max(e.y1,t.y1),u=Math.min(e.x2,t.x2),n=Math.min(e.y2,t.y2),a=Math.max(0,u-r)*Math.max(0,n-o),d=(e.x2-e.x1)*(e.y2-e.y1)+(t.x2-t.x1)*(t.y2-t.y1)-a;return d>0?a/d:0}function nms(e,t,r=1/0){const o=[...e].sort((n,a)=>a.score-n.score),u=[];for(const n of o){if(u.length>=r)break;u.every(a=>iou(a,n)<t)&&u.push(n)}return u}function decodeFootPose(e,t,r,{confThreshold:o,iouThreshold:u,maxDetections:n,numKeypoints:a}){const d=t[1],p=t[2],i=a&&5+3*a===d?a:(d-5)/3,l=rowIsLogits(e,p,4),s=rowIsLogits(e,p,7),c=l?sigmoid:ii=>ii,h=s?sigmoid:ii=>ii;let g=0;const y=[];for(let ii=0;ii<p;ii++){const li=c(e[4*p+ii]);if(li>g&&(g=li),li<o)continue;const ui=e[ii],hi=e[p+ii],yi=e[2*p+ii],$i=e[3*p+ii];y.push({i:ii,score:li,x1:ui-yi/2,y1:hi-$i/2,x2:ui+yi/2,y2:hi+$i/2})}const C=r.crop?.x??0,W=r.crop?.y??0,A=ii=>Math.min(r.srcW,Math.max(0,C+(ii-r.padX)/r.scale)),X=ii=>Math.min(r.srcH,Math.max(0,W+(ii-r.padY)/r.scale));return{detections:nms(y,u,n).map(ii=>{const li=[];for(let ui=0;ui<i;ui++){const hi=5+3*ui;li.push({x:A(e[hi*p+ii.i]),y:X(e[(hi+1)*p+ii.i]),v:h(e[(hi+2)*p+ii.i])})}return{score:ii.score,box:{x1:A(ii.x1),y1:X(ii.y1),x2:A(ii.x2),y2:X(ii.y2)},kpts:li}}),maxScore:g,sigmoid:l}}function readOnnxInputSize(e){try{const t=field(e,0,e.length,7);if(!t)return null;const r=field(e,t[0],t[1],11),o=r&&field(e,r[0],r[1],2),u=o&&field(e,o[0],o[1],1),n=u&&field(e,u[0],u[1],2);if(!n)return null;const a=[];for(const i of fields(e,n[0],n[1],1)){let l=null;for(let s=i[0];s<i[1];){const[c,h]=varint(e,s);if(c>>3===1&&!(c&7)){[l]=varint(e,h);break}s=skip(e,h,c&7)}a.push(l)}const d=a[a.length-1],p=a[a.length-2];return Number.isInteger(d)&&d>0&&d===p?d:null}catch{return null}}function varint(e,t){let r=0,o=1;for(;;){const u=e[t++];if(r+=(u&127)*o,u<128)return[r,t];o*=128}}function skip(e,t,r){if(r===0)return varint(e,t)[1];if(r===1)return t+8;if(r===5)return t+4;if(r===2){const[o,u]=varint(e,t);return u+o}throw new Error(`wire type ${r}`)}function fields(e,t,r,o,u=!1){const n=[];for(let a=t;a<r;){const[d,p]=varint(e,a),i=d&7;if(d>>3===o&&i===2){const[l,s]=varint(e,p);if(n.push([s,s+l]),u)return n;a=s+l}else a=skip(e,p,i)}return n}const field=(e,t,r,o)=>fields(e,t,r,o,!0)[0]??null,anchorsFor=e=>(e/8)**2+(e/16)**2+(e/32)**2,sessions={},failed={};let active=null,cfg=null,modelBuf=null,wasmUrl=null,jsepUrl=null,size=256,expectedBytes={};const progress=(e,t,r,o)=>self.postMessage({type:"progress",file:e,loaded:t,total:r,cached:o});async function cachedFetch(e,t,r,o){let u=null;try{u=await caches.open(cfg.cacheName)}catch{}if(u){const g=await u.match(r);if(g){const y=new Uint8Array(await g.arrayBuffer());return progress(e,y.byteLength,y.byteLength,!0),{buf:y,cached:!0}}}const n=await fetch(t);if(!n.ok)throw new Error(`${e}: HTTP ${n.status} ${t}`);const a=n.headers.get("content-encoding")?0:Number(n.headers.get("content-length"))||0,d=expectedBytes[e]||a,p=n.body.getReader(),i=[];let l=0,s=0;for(;;){const{done:g,value:y}=await p.read();if(g)break;i.push(y),l+=y.byteLength;const C=performance.now();C-s>80&&(progress(e,l,d,!1),s=C)}const c=new Uint8Array(l);let h=0;for(const g of i)c.set(g,h),h+=g.byteLength;if(progress(e,l,l,!1),u)try{await u.put(r,new Response(c,{headers:{"content-type":"application/octet-stream"}}));for(const g of await u.keys())g.url!==new URL(r).href&&o(g.url)&&await u.delete(g)}catch(g){console.warn("[cache] could not store",e,g)}return{buf:c,cached:!1}}const zerosFor=e=>new e.Tensor("float32",new Float32Array(3*size*size),[1,3,size,size]);async function createSession(e){const t={webgl:ortWebgl,wasm:ortWasm,webgpu:ortWebgpu}[e];if(!t)throw new Error(`unknown provider ${e}`);if(e==="webgpu"){if(!self.navigator?.gpu)throw new Error("WebGPU is not available in this browser");if(!await self.navigator.gpu.requestAdapter())throw new Error("no WebGPU adapter");if(!_e.wasm.wasmBinary){const l=jsepUrl,{buf:s}=await cachedFetch("runtime-webgpu",jsepUrl,l,c=>c.includes(".jsep.wasm"));_e.wasm.wasmBinary=s}}if(e==="wasm"&&!T.wasm.wasmBinary){const l=`${wasmUrl}?ort=${T.versions.web}`,{buf:s}=await cachedFetch("runtime",wasmUrl,l,c=>c.includes("ort-wasm-simd-threaded.wasm"));T.wasm.wasmBinary=s}const r=performance.now(),o=await t.InferenceSession.create(modelBuf,{executionProviders:[e],graphOptimizationLevel:"all"}),n=(await o.run({[o.inputNames[0]]:zerosFor(t)}))[o.outputNames[0]],a=(n.dims[1]-5)/3;if(!(cfg.acceptedKeypoints??[cfg.numKeypoints]).includes(a)||n.dims[2]!==anchorsFor(size))throw new Error(`model output is [${n.dims}], expected [1,5+3k,${anchorsFor(size)}] for a ${size}x${size} input with k in ${cfg.acceptedKeypoints} (wrong or stale foot_pose model?)`);if(!n.data.every(Number.isFinite))throw new Error("non-finite output");const d=performance.now()-r;let p=0;const i=cfg.alwaysPreferFirst?1:cfg.benchmarkRuns;for(let l=0;l<i;l++){const s=performance.now();await o.run({[o.inputNames[0]]:zerosFor(t)}),p+=performance.now()-s}return sessions[e]={rt:t,sess:o,ms:p/i,initMs:d},sessions[e]}async function ensureSession(e){if(sessions[e])return sessions[e];if(failed[e])throw new Error(failed[e]);try{return await createSession(e)}catch(t){throw failed[e]=t?.message??String(t),t}}function report(){return{size,available:cfg.providers.filter(e=>sessions[e]).map(e=>({ep:e,ms:sessions[e].ms,initMs:sessions[e].initMs})),failed:{...failed},threads:T.wasm.numThreads}}async function init(e){cfg=e.cfg,expectedBytes=e.expectedBytes??{},wasmUrl=`${e.wasmPaths}ort-wasm-simd-threaded.wasm`,jsepUrl=new URL(jsepAsset,self.location.href).href,_e.wasm.numThreads=1,_e.wasm.wasmPaths=e.wasmPaths,j$1.webgl.pack=!1,T.wasm.wasmPaths=e.wasmPaths,T.wasm.numThreads=self.crossOriginIsolated?Math.min(4,e.cores||2):1;const t=performance.now(),{buf:r,cached:o}=await cachedFetch("model",e.modelUrl,e.modelUrl,n=>/foot_pose[^/]*\.onnx/.test(n));modelBuf=r,size=readOnnxInputSize(r)??cfg.size;const u=performance.now()-t;if(cfg.alwaysPreferFirst)for(const n of e.providers)try{await ensureSession(n);break}catch{}else for(const n of e.providers)try{await ensureSession(n)}catch{}if(!Object.keys(sessions).length)throw new Error(`No execution provider worked. ${Object.entries(failed).map(([n,a])=>`${n}: ${a}`).join(" | ")}`);return{...report(),bytes:r.byteLength,modelCached:o,modelLoadMs:u}}async function use(e){return active=await ensureSession(e),{provider:e,...report()}}async function run(e){const{rt:t,sess:r}=active,o=performance.now(),u=await r.run({[r.inputNames[0]]:new t.Tensor("float32",e.input,[1,3,size,size])}),n=performance.now()-o,a=u[r.outputNames[0]];return{...decodeFootPose(a.data,a.dims,e.lb,{...cfg,...e.overrides}),ms:n,input:e.input}}self.onmessage=async({data:e})=>{try{if(e.type==="init")self.postMessage({type:"ready",...await init(e)});else if(e.type==="use")self.postMessage({type:"using",...await use(e.provider)});else if(e.type==="run"){const t=await run(e);self.postMessage({type:"result",...t},[t.input.buffer])}}catch(t){const r=e.input?.buffer?.byteLength?[e.input.buffer]:[];self.postMessage({type:"error",message:t?.message??String(t),input:e.input},r)}};
