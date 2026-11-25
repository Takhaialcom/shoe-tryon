(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/*!
 * ONNX Runtime Web v1.31.1
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Pc=Object.defineProperty,jS=Object.getOwnPropertyDescriptor,KS=Object.getOwnPropertyNames,YS=Object.prototype.hasOwnProperty,ZS=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')}),ce=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}},_s=(n,e)=>{for(var t in e)Pc(n,t,{get:e[t],enumerable:!0})},JS=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of KS(e))!YS.call(n,r)&&r!==t&&Pc(n,r,{get:()=>e[r],enumerable:!(i=jS(e,r))||i.enumerable});return n},ca=n=>JS(Pc({},"__esModule",{value:!0}),n),Lr,ci,gl,Qr,_l,R0,C0,Lc=ce(()=>{"use strict";Lr=new Map,ci=[],gl=new WeakMap,Qr=(n,e,t)=>{if(e&&typeof e.init=="function"&&typeof e.createInferenceSessionHandler=="function"){let i=Lr.get(n);if(i===void 0)Lr.set(n,{backend:e,priority:t});else{if(i.priority>t)return;if(i.priority===t&&i.backend!==e)throw new Error(`cannot register backend "${n}" using priority ${t}`)}if(t>=0){let r=ci.indexOf(n);r!==-1&&ci.splice(r,1);for(let s=0;s<ci.length;s++)if(Lr.get(ci[s]).priority<=t){ci.splice(s,0,n);return}ci.push(n)}return}throw new TypeError("not a valid backend")},_l=async n=>{let e=Lr.get(n);if(!e)return"backend not found.";if(e.initialized)return e.backend;if(e.aborted)return e.error;{let t=!!e.initPromise;try{if(!t){let i=e.backend,r=gl.get(i);e.initPromise=r?r.then(async()=>i.init(n),async()=>i.init(n)):i.init(n),gl.set(i,e.initPromise)}return await e.initPromise,e.initialized=!0,e.backend}catch(i){return t||(e.error=`${i}`,e.aborted=!0),e.error}finally{delete e.initPromise}}},R0=async n=>{let e=n.executionProviders||[],t=e.map(l=>typeof l=="string"?l:l.name),i=t.length===0?ci:t,r,s=[],a=new Set;for(let l of i){let u=await _l(l);typeof u=="string"?s.push({name:l,err:u}):(r||(r=u),r===u&&a.add(l))}if(!r)throw new Error(`no available backend found. ERR: ${s.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:u}of s)t.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${u}`);let o=e.filter(l=>a.has(typeof l=="string"?l:l.name));return[r,new Proxy(n,{get:(l,u)=>u==="executionProviders"?o:Reflect.get(l,u)})]},C0=async()=>{let n=[];for(let t of ci){if(typeof Lr.get(t).backend.createLoraAdapterHandler!="function")continue;let i=await _l(t);if(typeof i!="string")return i;n.push({name:t,err:i})}let e=n.length===0?"":` ERR: ${n.map(t=>`[${t.name}] ${t.err}`).join(", ")}`;throw new Error(`no available backend supports LoRA adapters.${e}`)}}),QS=ce(()=>{"use strict";Lc()}),I0,e1=ce(()=>{"use strict";I0="1.31.1"}),yl,Qt,$0=ce(()=>{"use strict";e1(),yl="warning",Qt={wasm:{},webgl:{},webgpu:{},versions:{common:I0},set logLevel(n){if(n!==void 0){if(typeof n!="string"||["verbose","info","warning","error","fatal"].indexOf(n)===-1)throw new Error(`Unsupported logging level: ${n}`);yl=n}},get logLevel(){return yl}},Object.defineProperty(Qt,"logLevel",{enumerable:!0})}),Pt,t1=ce(()=>{"use strict";$0(),Pt=Qt}),Ao,vl,$n,Mn,wr,Sr,Dc=ce(()=>{"use strict";$0(),Ao=(n,e)=>{(typeof Qt.trace>"u"?!Qt.wasm.trace:!Qt.trace)||console.timeStamp(`${n}::ORT::${e}`)},vl=(n,e)=>{let t=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let r=0;r<t.length;r++){if(i&&!t[r].includes("TRACE_FUNC")){let s=`FUNC_${n}::${t[r].trim().split(" ")[1]}`;e&&(s+=`::${e}`),Ao("CPU",s);return}t[r].includes("TRACE_FUNC")&&(i=!0)}},$n=n=>{(typeof Qt.trace>"u"?!Qt.wasm.trace:!Qt.trace)||vl("BEGIN",n)},Mn=n=>{(typeof Qt.trace>"u"?!Qt.wasm.trace:!Qt.trace)||vl("END",n)},wr=n=>{(typeof Qt.trace>"u"?!Qt.wasm.trace:!Qt.trace)||console.time(`ORT::${n}`)},Sr=n=>{(typeof Qt.trace>"u"?!Qt.wasm.trace:!Qt.trace)||console.timeEnd(`ORT::${n}`)}}),Nc,P0=ce(()=>{"use strict";Lc(),Dc(),Nc=class L0{constructor(e,t){this.backend=e,this.handler=t}static async create(e){if($n(),typeof e!="string"&&!(e instanceof Uint8Array))throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let t=await C0(),i=await t.createLoraAdapterHandler(e);return Mn(),new L0(t,i)}async release(){return this.handler.dispose()}}}),D0,N0,n1=ce(()=>{"use strict";D0=(n,e)=>{let t=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);t.width=n.dims[3],t.height=n.dims[2];let i=t.getContext("2d");if(i!=null){let r,s;e?.tensorLayout!==void 0&&e.tensorLayout==="NHWC"?(r=n.dims[2],s=n.dims[3]):(r=n.dims[3],s=n.dims[2]);let a=e?.format!==void 0?e.format:"RGB",o=e?.norm,l,u;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?u=[0,0,0,0]:typeof o.bias=="number"?u=[o.bias,o.bias,o.bias,o.bias]:(u=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(u[3]=o.bias[3]));let c=s*r,d=0,h=c,f=c*2,g=-1;a==="RGBA"?(d=0,h=c,f=c*2,g=c*3):a==="RGB"?(d=0,h=c,f=c*2):a==="RBG"&&(d=0,f=c,h=c*2);for(let y=0;y<s;y++)for(let _=0;_<r;_++){let p=(n.data[d++]-u[0])*l[0],x=(n.data[h++]-u[1])*l[1],b=(n.data[f++]-u[2])*l[2],w=g===-1?255:(n.data[g++]-u[3])*l[3];i.fillStyle="rgba("+p+","+x+","+b+","+w+")",i.fillRect(_,y,1,1)}if("toDataURL"in t)return t.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},N0=(n,e)=>{let t=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(t!=null){let r,s,a;e?.tensorLayout!==void 0&&e.tensorLayout==="NHWC"?(r=n.dims[2],s=n.dims[1],a=n.dims[3]):(r=n.dims[3],s=n.dims[2],a=n.dims[1]);let o=e!==void 0&&e.format!==void 0?e.format:"RGB",l=e?.norm,u,c;l===void 0||l.mean===void 0?u=[255,255,255,255]:typeof l.mean=="number"?u=[l.mean,l.mean,l.mean,l.mean]:(u=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(u[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let d=s*r;if(e!==void 0&&(e.format!==void 0&&a===4&&e.format!=="RGBA"||a===3&&e.format!=="RGB"&&e.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,f=0,g=1,y=2,_=3,p=0,x=d,b=d*2,w=-1;o==="RGBA"?(p=0,x=d,b=d*2,w=d*3):o==="RGB"?(p=0,x=d,b=d*2):o==="RBG"&&(p=0,b=d,x=d*2),i=t.createImageData(r,s);for(let R=0;R<s*r;f+=h,g+=h,y+=h,_+=h,R++)i.data[f]=(n.data[p++]-c[0])*u[0],i.data[g]=(n.data[x++]-c[1])*u[1],i.data[y]=(n.data[b++]-c[2])*u[2],i.data[_]=w===-1?255:(n.data[w++]-c[3])*u[3]}else throw new Error("Can not access image data");return i}}),Pa,U0,O0,k0,z0,B0,i1=ce(()=>{"use strict";Uc(),Pa=(n,e)=>{if(n===void 0)throw new Error("Image buffer must be defined");if(e.height===void 0||e.width===void 0)throw new Error("Image height and width must be defined");if(e.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:t,width:i}=e,r=e.norm??{mean:255,bias:0},s,a;typeof r.mean=="number"?s=[r.mean,r.mean,r.mean,r.mean]:s=[r.mean[0],r.mean[1],r.mean[2],r.mean[3]??255],typeof r.bias=="number"?a=[r.bias,r.bias,r.bias,r.bias]:a=[r.bias[0],r.bias[1],r.bias[2],r.bias[3]??0];let o=e.format!==void 0?e.format:"RGBA",l=e.tensorFormat!==void 0&&e.tensorFormat!==void 0?e.tensorFormat:"RGB",u=t*i,c=l==="RGBA"?new Float32Array(u*4):new Float32Array(u*3),d=4,h=0,f=1,g=2,y=3,_=0,p=u,x=u*2,b=-1;o==="RGB"&&(d=3,h=0,f=1,g=2,y=-1),l==="RGBA"?b=u*3:l==="RBG"?(_=0,x=u,p=u*2):l==="BGR"&&(x=0,p=u,_=u*2);for(let w=0;w<u;w++,h+=d,g+=d,f+=d,y+=d)c[_++]=(n[h]+a[0])/s[0],c[p++]=(n[f]+a[1])/s[1],c[x++]=(n[g]+a[2])/s[2],b!==-1&&y!==-1&&(c[b++]=(n[y]+a[3])/s[3]);return l==="RGBA"?new wn("float32",c,[1,4,t,i]):new wn("float32",c,[1,3,t,i])},U0=async(n,e)=>{let t=typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement,i=typeof ImageData<"u"&&n instanceof ImageData,r=typeof ImageBitmap<"u"&&n instanceof ImageBitmap,s=typeof n=="string",a,o=e??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},u=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(t){let c=l();c.width=n.width,c.height=n.height;let d=u(c);if(d!=null){let h=n.height,f=n.width;if(e!==void 0&&e.resizedHeight!==void 0&&e.resizedWidth!==void 0&&(h=e.resizedHeight,f=e.resizedWidth),e!==void 0){if(o=e,e.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=h,o.width=f}else o.tensorFormat="RGBA",o.height=h,o.width=f;d.drawImage(n,0,0),a=d.getImageData(0,0,f,h).data}else throw new Error("Can not access image data")}else if(i){let c,d;if(e!==void 0&&e.resizedWidth!==void 0&&e.resizedHeight!==void 0?(c=e.resizedHeight,d=e.resizedWidth):(c=n.height,d=n.width),e!==void 0&&(o=e),o.format="RGBA",o.height=c,o.width=d,e!==void 0){let h=l();h.width=d,h.height=c;let f=u(h);if(f!=null)f.putImageData(n,0,0),a=f.getImageData(0,0,d,c).data;else throw new Error("Can not access image data")}else a=n.data}else if(r){if(e===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=n.width,c.height=n.height;let d=u(c);if(d!=null){let h=n.height,f=n.width;return d.drawImage(n,0,0,f,h),a=d.getImageData(0,0,f,h).data,o.height=h,o.width=f,Pa(a,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((c,d)=>{let h=l(),f=u(h);if(!n||!f)return d();let g=new Image;g.crossOrigin="Anonymous",g.src=n,g.onload=()=>{h.width=g.width,h.height=g.height,f.drawImage(g,0,0,h.width,h.height);let y=f.getImageData(0,0,h.width,h.height);o.height=h.height,o.width=h.width,c(Pa(y.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return Pa(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},O0=(n,e)=>{let{width:t,height:i,download:r,dispose:s}=e,a=[1,i,t,4];return new wn({location:"texture",type:"float32",texture:n,dims:a,download:r,dispose:s})},k0=(n,e)=>{let{dataType:t,dims:i,download:r,dispose:s}=e;return new wn({location:"gpu-buffer",type:t??"float32",gpuBuffer:n,dims:i,download:r,dispose:s})},z0=(n,e)=>{let{dataType:t,dims:i,download:r,dispose:s}=e;return new wn({location:"ml-tensor",type:t??"float32",mlTensor:n,dims:i,download:r,dispose:s})},B0=(n,e,t)=>new wn({location:"cpu-pinned",type:n,data:e,dims:t??[e.length]})}),_r,Qs,xl,F0,r1=ce(()=>{"use strict";_r=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Qs=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),xl=!1,F0=()=>{if(!xl){xl=!0;let n=typeof BigInt64Array<"u"&&BigInt64Array.from,e=typeof BigUint64Array<"u"&&BigUint64Array.from,t=globalThis.Float16Array,i=typeof t<"u"&&t.from;n&&(_r.set("int64",BigInt64Array),Qs.set(BigInt64Array,"int64")),e&&(_r.set("uint64",BigUint64Array),Qs.set(BigUint64Array,"uint64")),i?(_r.set("float16",t),Qs.set(t,"float16")):_r.set("float16",Uint16Array)}}}),H0,V0,s1=ce(()=>{"use strict";Uc(),H0=n=>{let e=1;for(let t=0;t<n.length;t++){let i=n[t];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${t}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${t}] must be a non-negative integer, got: ${i}`);e*=i}return e},V0=(n,e)=>{switch(n.location){case"cpu":return new wn(n.type,n.data,e);case"cpu-pinned":return new wn({location:"cpu-pinned",data:n.data,type:n.type,dims:e});case"texture":return new wn({location:"texture",texture:n.texture,type:n.type,dims:e});case"gpu-buffer":return new wn({location:"gpu-buffer",gpuBuffer:n.gpuBuffer,type:n.type,dims:e});case"ml-tensor":return new wn({location:"ml-tensor",mlTensor:n.mlTensor,type:n.type,dims:e});default:throw new Error(`tensorReshape: tensor location ${n.location} is not supported`)}}}),wn,Uc=ce(()=>{"use strict";n1(),i1(),r1(),s1(),wn=class{constructor(n,e,t){F0();let i,r;if(typeof n=="object"&&"location"in n)switch(this.dataLocation=n.location,i=n.type,r=n.dims,n.location){case"cpu-pinned":{let a=_r.get(i);if(!a)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(n.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=n.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=n.texture,this.downloader=n.download,this.disposer=n.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=n.gpuBuffer,this.downloader=n.download,this.disposer=n.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=n.mlTensor,this.downloader=n.download,this.disposer=n.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof n=="string")if(i=n,o=t,n==="string"){if(!Array.isArray(e))throw new TypeError("A string tensor's data must be a string array.");a=e}else{let l=_r.get(n);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${n}.`);if(Array.isArray(e)){if(n==="float16"&&l===Uint16Array||n==="uint4"||n==="int4")throw new TypeError(`Creating a ${n} tensor from number array is not supported. Please use ${l.name} as data.`);n==="uint64"||n==="int64"?a=l.from(e,BigInt):a=l.from(e)}else if(e instanceof l)a=e;else if(e instanceof Uint8ClampedArray)if(n==="uint8")a=Uint8Array.from(e);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(n==="float16"&&e instanceof Uint16Array&&l!==Uint16Array)a=new globalThis.Float16Array(e.buffer,e.byteOffset,e.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(o=e,Array.isArray(n)){if(n.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof n[0];if(l==="string")i="string",a=n;else if(l==="boolean")i="bool",a=Uint8Array.from(n);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(n instanceof Uint8ClampedArray)i="uint8",a=Uint8Array.from(n);else{let l=Qs.get(n.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${n.constructor}.`);i=l,a=n}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");r=o,this.cpuData=a,this.dataLocation="cpu"}let s=H0(r);if(this.cpuData&&s!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=r,this.size=s}static async fromImage(n,e){return U0(n,e)}static fromTexture(n,e){return O0(n,e)}static fromGpuBuffer(n,e){return k0(n,e)}static fromMLTensor(n,e){return z0(n,e)}static fromPinnedBuffer(n,e,t){return B0(n,e,t)}toDataURL(n){return D0(this,n)}toImageData(n){return N0(this,n)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(n){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let e=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=e,n&&this.disposer&&(this.disposer(),this.disposer=void 0),e}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(n){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return V0(this,n)}}}),Hn,G0=ce(()=>{"use strict";Uc(),Hn=wn}),W0,a1=ce(()=>{"use strict";Lc(),P0(),G0(),Dc(),W0=class q0{constructor(e,t){this.handler=e,this.backend=t}async run(e,t,i){$n(),wr("InferenceSession.run");let r={},s={};if(typeof e!="object"||e===null||e instanceof Hn||Array.isArray(e))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof t=="object"){if(t===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(t instanceof Hn)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(t)){if(t.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let c of t){if(typeof c!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(c)===-1)throw new RangeError(`'fetches' contains invalid output name: ${c}.`);r[c]=null}if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let c=!1,d=Object.getOwnPropertyNames(t);for(let h of this.outputNames)if(d.indexOf(h)!==-1){let f=t[h];(f===null||f instanceof Hn)&&(c=!0,a=!1,r[h]=f)}if(c){if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else s=t}}else if(typeof t<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let c of this.inputNames)if(typeof e[c]>"u")throw new Error(`input '${c}' is missing in 'feeds'.`);if(a)for(let c of this.outputNames)r[c]=null;let o;if(s.activeLoraAdapters!==void 0){if(!Array.isArray(s.activeLoraAdapters))throw new TypeError("'activeLoraAdapters' must be an array.");o=s.activeLoraAdapters.map(c=>{if(!(c instanceof Nc))throw new TypeError("'activeLoraAdapters' must be an array of LoraAdapter objects.");if(c.backend!==this.backend)throw new Error("LoRA adapter was created by a different backend than the session.");return c.handler})}let l=await this.handler.run(e,r,s,o),u={};for(let c in l)if(Object.hasOwnProperty.call(l,c)){let d=l[c];d instanceof Hn?u[c]=d:u[c]=new Hn(d.type,d.data,d.dims)}return Sr("InferenceSession.run"),Mn(),u}async release(){return this.handler.dispose()}static async create(e,t,i,r){$n(),wr("InferenceSession.create");let s,a={};if(typeof e=="string"){if(s=e,typeof t=="object"&&t!==null)a=t;else if(typeof t<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof Uint8Array){if(s=e,typeof t=="object"&&t!==null)a=t;else if(typeof t<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer){let c=e,d=0,h=e.byteLength;if(typeof t=="object"&&t!==null)a=t;else if(typeof t=="number"){if(d=t,!Number.isSafeInteger(d))throw new RangeError("'byteOffset' must be an integer.");if(d<0||d>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(h=e.byteLength-d,typeof i=="number"){if(h=i,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||d+h>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-d}].`);if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof t<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(c,d,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await R0(a),u=await o.createInferenceSessionHandler(s,l);return Sr("InferenceSession.create"),Mn(),new q0(u,o)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Ro,o1=ce(()=>{"use strict";a1(),Ro=W0}),X0,l1=ce(()=>{"use strict";P0(),X0=Nc}),u1=ce(()=>{"use strict"}),c1=ce(()=>{"use strict"}),d1=ce(()=>{"use strict"}),h1=ce(()=>{"use strict"}),f1={};_s(f1,{InferenceSession:()=>Ro,LoraAdapter:()=>X0,TRACE:()=>Ao,TRACE_EVENT_BEGIN:()=>wr,TRACE_EVENT_END:()=>Sr,TRACE_FUNC_BEGIN:()=>$n,TRACE_FUNC_END:()=>Mn,Tensor:()=>Hn,env:()=>Pt,registerBackend:()=>Qr});var En=ce(()=>{"use strict";QS(),t1(),o1(),l1(),G0(),u1(),c1(),Dc(),d1(),h1()}),Oc=ce(()=>{"use strict"}),j0={};_s(j0,{default:()=>K0});var bl,wl,K0,p1=ce(()=>{"use strict";rb(),Cr(),kc(),bl="ort-wasm-proxy-worker",wl=globalThis.self?.name===bl,wl&&(self.onmessage=n=>{let{type:e,in:t}=n.data;try{switch(e){case"init-wasm":zc(t.wasm).then(()=>{nd(t).then(()=>{postMessage({type:e})},i=>{postMessage({type:e,err:i})})},i=>{postMessage({type:e,err:i})});break;case"init-ep":{let{epName:i,env:r}=t;id(r,i).then(()=>{postMessage({type:e})},s=>{postMessage({type:e,err:s})});break}case"copy-from":{let{buffer:i}=t,r=No(i);postMessage({type:e,out:r});break}case"create":{let{model:i,options:r}=t;rd(i,r).then(s=>{postMessage({type:e,out:s})},s=>{postMessage({type:e,err:s})});break}case"release":sd(t),postMessage({type:e});break;case"run":{let{sessionId:i,inputIndices:r,inputs:s,outputIndices:a,options:o}=t;ad(i,r,s,a,new Array(a.length).fill(null),o).then(l=>{l.some(u=>u[3]!=="cpu")?postMessage({type:e,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:e,out:l},ld([...s,...l]))},l=>{postMessage({type:e,err:l})});break}case"end-profiling":od(t),postMessage({type:e});break;default:}}catch(i){postMessage({type:e,err:i})}}),K0=wl?null:n=>new Worker(n??bn,{type:"module",name:bl})}),Y0={};_s(Y0,{default:()=>Z0});async function Gh(n={}){var e=n,t=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,r=i&&self.name?.startsWith("em-pthread");e.mountExternalData=(m,v)=>{m.startsWith("./")&&(m=m.substring(2)),(e.jd||(e.jd=new Map)).set(m,v)},e.unmountExternalData=()=>{delete e.jd,delete e.ke,delete e.je,delete e.le},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let s=m=>async(...v)=>{try{if(e.hd)throw Error("Session already started");let M=e.hd={Vd:v[0],errors:[]},S=await m(...v);if(e.hd!==M)throw Error("Session mismatch");e.pd?.flush();let $=M.errors;if(0<$.length){let N=await Promise.all($);if(N=N.filter(V=>V),0<N.length)throw Error(N.join(`
`))}return S}finally{e.hd=null}};e.jsepInit=(m,v)=>{if(m==="webgpu"){[e.pd,e.Ld,e.Pd,e.rd,e.Od,e.ic,e.Qd,e.Sd,e.Md,e.Nd,e.Rd]=v;let M=e.pd;e.jsepRegisterBuffer=(S,$,N,V)=>M.registerBuffer(S,$,N,V),e.jsepGetBuffer=S=>M.getBuffer(S),e.jsepCreateDownloader=(S,$,N)=>M.createDownloader(S,$,N),e.jsepOnCreateSession=S=>{M.onCreateSession(S)},e.jsepOnReleaseSession=S=>{M.onReleaseSession(S)},e.jsepOnRunStart=S=>M.onRunStart(S),e.Td=(S,$)=>{M.upload(S,$)}}else if(m==="webnn"){let M=v[0];[e.ce,e.Cd,e.webnnEnsureTensor,e.Dd,e.webnnDownloadTensor,e.be,e.webnnEnableTraceEvent]=v.slice(1),e.webnnReleaseTensorId=e.Cd,e.webnnUploadTensor=e.Dd,e.webnnRegisterMLContext=e.be,e.webnnOnRunStart=S=>M.onRunStart(S),e.webnnOnRunEnd=M.onRunEnd.bind(M),e.webnnOnReleaseSession=S=>{M.onReleaseSession(S)},e.webnnCreateMLTensorDownloader=(S,$)=>M.createMLTensorDownloader(S,$),e.webnnRegisterMLTensor=(S,$,N,V)=>M.registerMLTensor(S,$,N,V),e.webnnCreateMLContext=S=>M.createMLContext(S),e.webnnRegisterGraphInput=M.registerGraphInput.bind(M),e.webnnIsGraphInput=M.isGraphInput.bind(M),e.webnnRegisterGraphOutput=M.registerGraphOutput.bind(M),e.webnnIsGraphOutput=M.isGraphOutput.bind(M),e.webnnCreateTemporaryTensor=M.createTemporaryTensor.bind(M),e.webnnIsGraphInputOutputTypeSupported=M.isGraphInputOutputTypeSupported.bind(M)}};let a=()=>{let m=v=>(...M)=>{let S=Kn;return M=v(...M),Kn!=S?new Promise(($,N)=>{il={resolve:$,reject:N}}):M};(v=>{for(let M of v)e[M]=m(e[M])})("_OrtAppendExecutionProvider _OrtAppendExecutionProviderV2 _OrtCreateSession _OrtRun _OrtRunWithBinding _OrtBindInput".split(" ")),s!==void 0&&(e._OrtRun=s(e._OrtRun),e._OrtRunWithBinding=s(e._OrtRunWithBinding)),a=void 0};e.asyncInit=()=>{a?.()};var o,l,u=(m,v)=>{throw v},c=import.meta.url,d="";if(t||i){try{d=new URL(".",c).href}catch{}i&&(l=m=>{var v=new XMLHttpRequest;return v.open("GET",m,!1),v.responseType="arraybuffer",v.send(null),new Uint8Array(v.response)}),o=async m=>{if(I(m))return new Promise((M,S)=>{var $=new XMLHttpRequest;$.open("GET",m,!0),$.responseType="arraybuffer",$.onload=()=>{$.status==200||$.status==0&&$.response?M($.response):S($.status)},$.onerror=S,$.send(null)});var v=await fetch(m,{credentials:"same-origin"});if(v.ok)return v.arrayBuffer();throw Error(v.status+" : "+v.url)}}var h,f,g,y,_,p,x=console.log.bind(console),b=console.error.bind(console),w=x,R=b,E=!1,I=m=>m.startsWith("file://");function T(){ve.buffer!=A.buffer&&oe()}if(r){let m=function(v){try{var M=v.data,S=M.bd;if(S==="load"){let $=[];self.onmessage=N=>$.push(N),p=()=>{postMessage({bd:"loaded"});for(let N of $)m(N);self.onmessage=m};for(let N of M.Hd)e[N]&&!e[N].proxy||(e[N]=(...V)=>{postMessage({bd:"callHandler",Fd:N,args:V})},N=="print"&&(w=e[N]),N=="printErr"&&(R=e[N]));ve=M.Zd,oe(),f=M.$d,Te(),$a()}else if(S==="run"){(function($){var N=(T(),z)[$+52>>>2>>>0];$=(T(),z)[$+56>>>2>>>0],Jd(N,N-$),Ze(N)})(M.ad),ll(M.ad,0,0,1,0,0),fe(),el(M.ad),C||(qd(),C=!0);try{Ee(M.Xd,M.nd)}catch($){if($!="unwind")throw $}}else M.target!=="setimmediate"&&(S==="checkMailbox"?C&&Ma():S&&(R(`worker: received unknown command ${S}`),R(M)))}catch($){throw Xd(),$}};var C=!1;self.onunhandledrejection=v=>{throw v.reason||v},self.onmessage=m}var A,k,F,U,D,z,K,q,G,ie,te,Y=!1;function oe(){var m=ve.buffer;e.HEAP8=A=new Int8Array(m),F=new Int16Array(m),e.HEAPU8=k=new Uint8Array(m),U=new Uint16Array(m),e.HEAP32=D=new Int32Array(m),e.HEAPU32=z=new Uint32Array(m),K=new Float32Array(m),q=new Float64Array(m),G=new BigInt64Array(m),ie=new BigUint64Array(m)}function de(){Y=!0,r?p():ui.vb()}function B(m){throw R(m="Aborted("+m+")"),E=!0,m=new WebAssembly.RuntimeError(m+". Build with -sASSERTIONS for more info."),_?.(m),m}function ue(){return{a:{na:oS,jb:aS,g:ke,G:Fe,f:nt,o:W,h:he,$:ae,b:Se,S:Re,Ja:Ct,n:kt,aa:Ss,_a:Ms,Fa:Ts,Ha:Zi,$a:Es,Ya:Ji,Ra:As,Xa:Rs,la:ya,Ga:va,Da:xa,Za:L,Ea:X,eb:ee,ga:Xe,ya:Qe,wa:Qi,fa:li,N:ba,I:er,xa:jn,_:cw,za:dw,Ua:hw,Ba:pw,Ka:mw,ua:gw,ha:_w,Ta:el,bb:yw,Q:ww,r:Aw,c:Gt,kb:Rw,y:Cw,M:Iw,D:$w,m:Pw,s:Rd,lb:Lw,J:Dw,R:Nw,j:Uw,u:Ow,q:kw,k:zw,Oa:Bw,Pa:Fw,Qa:Hw,Ma:Pd,Na:Ld,va:Dd,gb:Gw,db:qw,v:Xw,ba:jw,ia:Kw,cb:Ww,V:Yw,ab:Zw,Ca:Jw,F:Vw,U:Qw,ma:Ca,Aa:tS,ib:eS,hb:nS,Va:kd,Wa:zd,Ia:ct,T:Bd,La:Fd,ka:Hd,Sa:Vd,ja:Gd,nb:WS,oa:BS,ob:GS,pa:zS,H:RS,e:dS,t:uS,w:lS,B:wS,pb:US,Z:NS,x:mS,qa:OS,X:FS,ca:DS,qb:LS,ea:fS,O:SS,sb:IS,ra:PS,tb:CS,L:ES,Y:kS,d:cS,A:pS,l:hS,mb:qS,p:_S,z:yS,C:gS,E:vS,K:MS,sa:AS,P:HS,da:TS,W:VS,ub:bS,ta:xS,rb:$S,i:rS,a:ve,fb:We}}}async function Te(){function m(S,$){var N=ui=S.exports;S={};for(let[V,re]of Object.entries(N))typeof re=="function"?(N=vw(re),S[V]=N):S[V]=re;return ui=S,ui=function(){var V=ui,re=Me=>Ke=>Me(Ke)>>>0,ge=Me=>()=>Me()>>>0;return(V=Object.assign({},V)).wb=re(V.wb),V.ec=ge(V.ec),V.gc=re(V.gc),V.uc=re(V.uc),V.vc=ge(V.vc),V.zc=re(V.zc),V}(),P.push(ui.hc),Wd=(S=ui).wb,qd=S.xb,e._OrtInit=S.yb,e._OrtGetLastError=S.zb,e._OrtCreateSessionOptions=S.Ab,e._OrtAppendExecutionProvider=S.Bb,e._OrtGetEpDevices=S.Cb,e._OrtEpDevice_EpName=S.Db,e._OrtAppendExecutionProviderV2=S.Eb,e._OrtAddFreeDimensionOverride=S.Fb,e._OrtAddSessionConfigEntry=S.Gb,e._OrtReleaseSessionOptions=S.Hb,e._OrtCreateSession=S.Ib,e._OrtReleaseSession=S.Jb,e._OrtGetInputOutputCount=S.Kb,e._OrtGetInputOutputMetadata=S.Lb,e._OrtFree=S.Mb,e._OrtCreateTensor=S.Nb,e._OrtGetTensorData=S.Ob,e._OrtReleaseTensor=S.Pb,e._OrtCreateLoraAdapter=S.Qb,e._OrtReleaseLoraAdapter=S.Rb,e._OrtCreateRunOptions=S.Sb,e._OrtAddRunConfigEntry=S.Tb,e._OrtRunOptionsAddActiveLoraAdapter=S.Ub,e._OrtReleaseRunOptions=S.Vb,e._OrtCreateBinding=S.Wb,e._OrtBindInput=S.Xb,e._OrtBindOutput=S.Yb,e._OrtClearBoundOutputs=S.Zb,e._OrtReleaseBinding=S._b,e._OrtRunWithBinding=S.$b,e._OrtRun=S.ac,e._OrtEndProfiling=S.bc,e._JsepOutput=S.cc,e._JsepGetNodeName=S.dc,Ia=S.ec,Yn=e._free=S.fc,$s=e._malloc=S.gc,ll=S.jc,Xd=S.kc,jd=S.lc,Kd=S.mc,ul=S.nc,Yd=S.oc,Zd=S.pc,rt=S.qc,Ps=S.rc,Jd=S.sc,Ze=S.tc,cl=S.uc,et=S.vc,Qd=S.wc,dl=S.xc,eh=S.yc,th=S.zc,nh=S.Ac,hl=S.Bc,ih=S.Cc,rh=S.Dc,sh=S.Ec,ah=S.Fc,oh=S.Gc,lh=S.Hc,uh=S.Ic,ch=S.Jc,dh=S.Kc,hh=S.Lc,fh=S.Mc,ph=S.Nc,mh=S.Oc,gh=S.Pc,_h=S.Qc,yh=S.Rc,vh=S.Sc,xh=S.Tc,bh=S.Uc,wh=S.Vc,Sh=S.Wc,Mh=S.Xc,Th=S.Yc,Eh=S._c,Ah=S.$c,Rh=S.kd,Ch=S.ld,Ih=S.qd,$h=S.vd,Ph=S.wd,Lh=S.xd,Dh=S.yd,Nh=S.zd,Uh=S.Ad,Oh=S.Bd,kh=S.Gd,zh=S.Jd,Bh=S.fe,Fh=S.ge,Hh=S.he,Vh=S.ie,f=$,ui}var v,M=ue();return e.instantiateWasm?new Promise(S=>{e.instantiateWasm(M,($,N)=>{S(m($,N))})}):r?m(new WebAssembly.Instance(f,ue()),f):(te??=e.locateFile?e.locateFile?e.locateFile("ort-wasm-simd-threaded.jsep.wasm",d):d+"ort-wasm-simd-threaded.jsep.wasm":new URL("/assets/ort-wasm-simd-threaded.jsep-Dt5UNR3U.wasm",import.meta.url).href,v=await async function(S){var $=te;if(!h&&!I($))try{var N=fetch($,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(N,S)}catch(V){R(`wasm streaming compile failed: ${V}`),R("falling back to ArrayBuffer instantiation")}return async function(V,re){try{var ge=await async function(Me){if(!h)try{var Ke=await o(Me);return new Uint8Array(Ke)}catch{}if(Me==te&&h)Me=new Uint8Array(h);else{if(!l)throw"both async and sync fetching of the wasm failed";Me=l(Me)}return Me}(V);return await WebAssembly.instantiate(ge,re)}catch(Me){R(`failed to asynchronously prepare wasm: ${Me}`),B(Me)}}($,S)}(M),m(v.instance,v.module))}class me{name="ExitStatus";constructor(v){this.message=`Program terminated with exit(${v})`,this.status=v}}var Ne=m=>{m.terminate(),m.onmessage=()=>{}},De=[],j=0,ze=null,be=m=>{St.length==0&&(Oe(),pe(St[0]));var v=St.pop();if(!v)return 6;O.push(v),ne[m.ad]=v,v.ad=m.ad;var M={bd:"run",Xd:m.Wd,nd:m.nd,ad:m.ad};return v.postMessage(M,m.ud),0},Ve=0,_e=(m,v,...M)=>{var S,$=16*M.length,N=et(),V=cl($),re=V>>>3;for(S of M)typeof S=="bigint"?((T(),G)[re++>>>0]=1n,(T(),G)[re++>>>0]=S):((T(),G)[re++>>>0]=0n,(T(),q)[re++>>>0]=S);return m=jd(m,0,$,V,v),Ze(N),m};function We(m){if(r)return _e(0,1,m);if(g=m,!(0<Ve)){for(var v of O)Ne(v);for(v of St)Ne(v);St=[],O=[],ne={},E=!0}u(0,new me(m))}function tt(m){if(r)return _e(1,0,m);ct(m)}var ct=m=>{if(g=m,r)throw tt(m),"unwind";We(m)},St=[],O=[],P=[],ne={},le=m=>{var v=m.ad;delete ne[v],St.push(m),O.splice(O.indexOf(m),1),m.ad=0,Kd(v)};function fe(){P.forEach(m=>m())}var pe=m=>new Promise(v=>{m.onmessage=$=>{var N=$.data;if($=N.bd,N.md&&N.md!=Ia()){var V=ne[N.md];V?V.postMessage(N,N.ud):R(`Internal error! Worker sent a message "${$}" to target pthread ${N.md}, but that thread no longer exists!`)}else $==="checkMailbox"?Ma():$==="spawnThread"?be(N):$==="cleanupThread"?Sa(()=>{le(ne[N.Yd])}):$==="loaded"?(m.loaded=!0,v(m)):N.target==="setimmediate"?m.postMessage(N):$==="uncaughtException"?m.onerror(N.error):$==="callHandler"?e[N.Fd](...N.args):$&&R(`worker sent an unknown command ${$}`)},m.onerror=$=>{throw R(`worker sent an error! ${$.filename}:${$.lineno}: ${$.message}`),$};var M,S=[];for(M of[])e.propertyIsEnumerable(M)&&S.push(M);m.postMessage({bd:"load",Hd:S,Zd:ve,$d:f})});function Oe(){var m=new Worker((()=>{let v=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new v("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});St.push(m)}var ve,Ee=(m,v)=>{Ve=0,m=hl(m,v),0<Ve?g=m:ul(m)},qe=[],ye=0;function ke(m){var v=new ut(m>>>=0);return(T(),A)[v.cd+12>>>0]==0&&(Ce(v,!0),ye--),Je(v,!1),qe.push(v),th(m)}var st=0,Fe=()=>{rt(0,0);var m=qe.pop();Qd(m.od),st=0};function Ce(m,v){v=v?1:0,(T(),A)[m.cd+12>>>0]=v}function Je(m,v){v=v?1:0,(T(),A)[m.cd+13>>>0]=v}class ut{constructor(v){this.od=v,this.cd=v-24}}var Ut=m=>{var v=st;if(!v)return Ps(0),0;var M=new ut(v);(T(),z)[M.cd+16>>>2>>>0]=v;var S=(T(),z)[M.cd+4>>>2>>>0];if(!S)return Ps(0),v;for(var $ of m){if($===0||$===S)break;if(eh($,S,M.cd+16))return Ps($),v}return Ps(S),v};function nt(){return Ut([])}function W(m){return Ut([m>>>0])}function he(m,v,M,S){return Ut([m>>>0,v>>>0,M>>>0,S>>>0])}var ae=()=>{var m=qe.pop();m||B("no exception to throw");var v=m.od;throw(T(),A)[m.cd+13>>>0]==0&&(qe.push(m),Je(m,!0),Ce(m,!1),ye++),dl(v),st=v};function Se(m,v,M){var S=new ut(m>>>=0);throw v>>>=0,M>>>=0,(T(),z)[S.cd+16>>>2>>>0]=0,(T(),z)[S.cd+4>>>2>>>0]=v,(T(),z)[S.cd+8>>>2>>>0]=M,dl(m),ye++,st=m}var Re=()=>ye;function mt(m,v,M,S){return r?_e(2,1,m,v,M,S):Ct(m,v,M,S)}function Ct(m,v,M,S){if(m>>>=0,v>>>=0,M>>>=0,S>>>=0,!globalThis.SharedArrayBuffer)return 6;var $=[];return r&&$.length===0?mt(m,v,M,S):(m={Wd:M,ad:m,nd:S,ud:$},r?(m.bd="spawnThread",postMessage(m,$),0):be(m))}function kt(m){throw st||=m>>>0,st}var qt=globalThis.TextDecoder&&new TextDecoder,wt=(m,v,M,S)=>{if(M=v+M,S)return M;for(;m[v]&&!(v>=M);)++v;return v},yn=(m,v=0,M,S)=>{if(16<(M=wt(m,v>>>=0,M,S))-v&&m.buffer&&qt)return qt.decode(m.buffer instanceof ArrayBuffer?m.subarray(v,M):m.slice(v,M));for(S="";v<M;){var $=m[v++];if(128&$){var N=63&m[v++];if((224&$)==192)S+=String.fromCharCode((31&$)<<6|N);else{var V=63&m[v++];65536>($=(240&$)==224?(15&$)<<12|N<<6|V:(7&$)<<18|N<<12|V<<6|63&m[v++])?S+=String.fromCharCode($):($-=65536,S+=String.fromCharCode(55296|$>>10,56320|1023&$))}}else S+=String.fromCharCode($)}return S},ht=(m,v,M)=>(m>>>=0)?yn((T(),k),m,v,M):"";function Ss(m,v,M){return r?_e(3,1,m,v,M):0}function Ms(m,v){if(r)return _e(4,1,m,v)}function Ts(m,v){if(r)return _e(5,1,m,v)}function Zi(m,v,M){if(r)return _e(6,1,m,v,M)}function Es(m,v,M){return r?_e(7,1,m,v,M):0}function Ji(m,v){if(r)return _e(8,1,m,v)}function As(m,v,M){if(r)return _e(9,1,m,v,M)}function Rs(m,v,M,S){if(r)return _e(10,1,m,v,M,S)}function ya(m,v,M,S){if(r)return _e(11,1,m,v,M,S)}function va(m,v,M,S){if(r)return _e(12,1,m,v,M,S)}function xa(m){if(r)return _e(13,1,m)}function L(m,v){if(r)return _e(14,1,m,v)}function X(m,v,M){if(r)return _e(15,1,m,v,M)}var ee=()=>B(""),Z=m=>{m>>>=0;for(var v="";;){var M=(T(),k)[m++>>>0];if(!M)return v;v+=String.fromCharCode(M)}},J={},xe={},$e=class extends Error{constructor(m){super(m),this.name="BindingError"}};function Ie(m,v,M={}){return function(S,$,N={}){var V=$.name;if(!S)throw new $e(`type "${V}" must have a positive integer typeid pointer`);if(xe.hasOwnProperty(S)){if(N.Id)return;throw new $e(`Cannot register type '${V}' twice`)}xe[S]=$,J.hasOwnProperty(S)&&($=J[S],delete J[S],$.forEach(re=>re()))}(m,v,M)}var Be=(m,v,M)=>{switch(v){case 1:return M?S=>(T(),A)[S>>>0]:S=>(T(),k)[S>>>0];case 2:return M?S=>(T(),F)[S>>>1>>>0]:S=>(T(),U)[S>>>1>>>0];case 4:return M?S=>(T(),D)[S>>>2>>>0]:S=>(T(),z)[S>>>2>>>0];case 8:return M?S=>(T(),G)[S>>>3>>>0]:S=>(T(),ie)[S>>>3>>>0];default:throw new TypeError(`invalid integer width (${v}): ${m}`)}};function Xe(m,v,M,S,$){m>>>=0,M>>>=0,v=Z(v>>>0);let N=V=>V;if(S=S===0n){let V=8*M;N=re=>BigInt.asUintN(V,re),$=N($)}Ie(m,{name:v,Zc:N,ed:(V,re)=>(typeof re=="number"&&(re=BigInt(re)),re),dd:Be(v,M,!S),gd:null})}function Qe(m,v,M,S){Ie(m>>>=0,{name:v=Z(v>>>0),Zc:function($){return!!$},ed:function($,N){return N?M:S},dd:function($){return this.Zc((T(),k)[$>>>0])},gd:null})}var it=[],It=[0,1,,1,null,1,!0,1,!1,1];function Gt(m){9<(m>>>=0)&&--It[m+1]===0&&(It[m]=void 0,it.push(m))}var Dt=m=>{if(!m)throw new $e(`Cannot use deleted val. handle = ${m}`);return It[m]},Ht=m=>{switch(m){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let v=it.pop()||It.length;return It[v]=m,It[v+1]=1,v}};function vt(m){return this.Zc((T(),z)[m>>>2>>>0])}var je={name:"emscripten::val",Zc:m=>{var v=Dt(m);return Gt(m),v},ed:(m,v)=>Ht(v),dd:vt,gd:null};function Qi(m){return Ie(m>>>0,je)}var Nt=(m,v)=>{switch(v){case 4:return function(M){return this.Zc((T(),K)[M>>>2>>>0])};case 8:return function(M){return this.Zc((T(),q)[M>>>3>>>0])};default:throw new TypeError(`invalid float width (${v}): ${m}`)}};function li(m,v,M){M>>>=0,Ie(m>>>=0,{name:v=Z(v>>>0),Zc:S=>S,ed:(S,$)=>$,dd:Nt(v,M),gd:null})}function ba(m,v,M,S,$){m>>>=0,M>>>=0,v=Z(v>>>0);let N=re=>re;if(S===0){var V=32-8*M;N=re=>re<<V>>>V,$=N($)}Ie(m,{name:v,Zc:N,ed:(re,ge)=>ge,dd:Be(v,M,S!==0),gd:null})}function er(m,v,M){function S(N){var V=(T(),z)[N>>>2>>>0];return N=(T(),z)[N+4>>>2>>>0],new $((T(),A).buffer,N,V)}var $=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][v];Ie(m>>>=0,{name:M=Z(M>>>0),Zc:S,dd:S},{Id:!0})}var An=(m,v,M)=>{var S=(T(),k);if(v>>>=0,0<M){var $=v;M=v+M-1;for(var N=0;N<m.length;++N){var V=m.codePointAt(N);if(127>=V){if(v>=M)break;S[v++>>>0]=V}else if(2047>=V){if(v+1>=M)break;S[v++>>>0]=192|V>>6,S[v++>>>0]=128|63&V}else if(65535>=V){if(v+2>=M)break;S[v++>>>0]=224|V>>12,S[v++>>>0]=128|V>>6&63,S[v++>>>0]=128|63&V}else{if(v+3>=M)break;S[v++>>>0]=240|V>>18,S[v++>>>0]=128|V>>12&63,S[v++>>>0]=128|V>>6&63,S[v++>>>0]=128|63&V,N++}}S[v>>>0]=0,m=v-$}else m=0;return m},Vt=m=>{for(var v=0,M=0;M<m.length;++M){var S=m.charCodeAt(M);127>=S?v++:2047>=S?v+=2:55296<=S&&57343>=S?(v+=4,++M):v+=3}return v};function jn(m,v){Ie(m>>>=0,{name:v=Z(v>>>0),Zc(M){var S=(T(),z)[M>>>2>>>0];return S=ht(M+4,S,!0),Yn(M),S},ed(M,S){S instanceof ArrayBuffer&&(S=new Uint8Array(S));var $=typeof S=="string";if(!($||ArrayBuffer.isView(S)&&S.BYTES_PER_ELEMENT==1))throw new $e("Cannot pass non-string to std::string");var N=$?Vt(S):S.length,V=$s(4+N+1),re=V+4;return(T(),z)[V>>>2>>>0]=N,$?An(S,re,N+1):(T(),k).set(S,re>>>0),M!==null&&M.push(Yn,V),V},dd:vt,gd(M){Yn(M)}})}var Pr=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,mn=(m,v,M)=>{if(m>>>=1,16<(v=wt((T(),U),m,v/2,M))-m&&Pr)return Pr.decode((T(),U).slice(m,v));for(M="";m<v;++m){var S=(T(),U)[m>>>0];M+=String.fromCharCode(S)}return M},Cs=(m,v,M)=>{if(M??=2147483647,2>M)return 0;var S=v;M=(M-=2)<2*m.length?M/2:m.length;for(var $=0;$<M;++$){var N=m.charCodeAt($);(T(),F)[v>>>1>>>0]=N,v+=2}return(T(),F)[v>>>1>>>0]=0,v-S},Qo=m=>2*m.length,wa=(m,v,M)=>{var S="";m>>>=2;for(var $=0;!($>=v/4);$++){var N=(T(),z)[m+$>>>0];if(!N&&!M)break;S+=String.fromCodePoint(N)}return S},lw=(m,v,M)=>{if(v>>>=0,M??=2147483647,4>M)return 0;var S=v;M=S+M-4;for(var $=0;$<m.length;++$){var N=m.codePointAt($);if(65535<N&&$++,(T(),D)[v>>>2>>>0]=N,(v+=4)+4>M)break}return(T(),D)[v>>>2>>>0]=0,v-S},uw=m=>{for(var v=0,M=0;M<m.length;++M)65535<m.codePointAt(M)&&M++,v+=4;return v};function cw(m,v,M){if(m>>>=0,v>>>=0,M=Z(M>>>=0),v===2)var S=mn,$=Cs,N=Qo;else S=wa,$=lw,N=uw;Ie(m,{name:M,Zc:V=>{var re=(T(),z)[V>>>2>>>0];return re=S(V+4,re*v,!0),Yn(V),re},ed:(V,re)=>{if(typeof re!="string")throw new $e(`Cannot pass non-string to C++ string type ${M}`);var ge=N(re),Me=$s(4+ge+v);return(T(),z)[Me>>>2>>>0]=ge/v,$(re,Me+4,ge+v),V!==null&&V.push(Yn,Me),Me},dd:vt,gd(V){Yn(V)}})}function dw(m,v){Ie(m>>>=0,{Kd:!0,name:v=Z(v>>>0),Zc:()=>{},ed:()=>{}})}function hw(m){ll(m>>>0,!i,1,!t,131072,!1),fe()}var Sa=m=>{if(!E)try{if(m(),!(0<Ve))try{r?Ia()&&ul(g):ct(g)}catch(v){v instanceof me||v=="unwind"||u(0,v)}}catch(v){v instanceof me||v=="unwind"||u(0,v)}},fw=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function el(m){m>>>=0,fw||(Atomics.waitAsync((T(),D),m>>>2,m).value.then(Ma),m+=128,Atomics.store((T(),D),m>>>2,1))}var Ma=()=>Sa(()=>{var m=Ia();m&&(el(m),Zd())});function pw(m,v){(m>>>=0)==v>>>0?setTimeout(Ma):r?postMessage({md:m,bd:"checkMailbox"}):(m=ne[m])&&m.postMessage({bd:"checkMailbox"})}var tl=[];function mw(m,v,M,S,$){for(v>>>=0,$>>>=0,tl.length=0,M=$>>>3,S=$+S>>>3;M<S;){var N;N=(T(),G)[M++>>>0]?(T(),G)[M++>>>0]:(T(),q)[M++>>>0],tl.push(N)}return(v?fl[v]:sS[m])(...tl)}var gw=()=>{Ve=0};function _w(m){m>>>=0,r?postMessage({bd:"cleanupThread",Yd:m}):le(ne[m])}function yw(m){}var Ta=m=>{try{m()}catch(v){B(v)}};function vw(m){var v=(...M)=>{Ea.push(m);try{return m(...M)}finally{E||(Ea.pop(),Kn&&Ei===1&&Ea.length===0&&(Ei=0,Ve+=1,Ta(Fh),typeof Fibers<"u"&&Fibers.ne()))}};return Ed.set(m,v),v}var Ei=0,Kn=null,Md=0,Ea=[],nl=new Map,Td=new Map,Ed=new Map,xw=0,il=null,bw=[],Ad=m=>function(v){if(!E){if(Ei===0){var M=!1,S=!1;v(($=0)=>{if(!E&&(Md=$,M=!0,S)){Ei=2,Ta(()=>Hh(Kn)),typeof MainLoop<"u"&&MainLoop.Ed&&MainLoop.resume(),$=!1;try{var N=function(){var ge=(T(),D)[Kn+8>>>2>>>0];return ge=Td.get(ge),ge=Ed.get(ge),--Ve,ge()}()}catch(ge){N=ge,$=!0}var V=!1;if(!Kn){var re=il;re&&(il=null,($?re.reject:re.resolve)(N),V=!0)}if($&&!V)throw N}}),S=!0,M||(Ei=1,Kn=function(){var $=$s(65548),N=$+12;if((T(),z)[$>>>2>>>0]=N,(T(),z)[$+4>>>2>>>0]=N+65536,N=Ea[0],!nl.has(N)){var V=xw++;nl.set(N,V),Td.set(V,N)}return N=nl.get(N),(T(),D)[$+8>>>2>>>0]=N,$}(),typeof MainLoop<"u"&&MainLoop.Ed&&MainLoop.pause(),Ta(()=>Bh(Kn)))}else Ei===2?(Ei=0,Ta(Vh),Yn(Kn),Kn=null,bw.forEach(Sa)):B(`invalid state: ${Ei}`);return Md}}(v=>{m().then(v)});function ww(m){return m>>>=0,Ad(async()=>{var v=await Dt(m);return Ht(v)})}var rl=[],Sw=m=>{var v=rl.length;return rl.push(m),v},Mw=(m,v)=>{for(var M=Array(m),S=0;S<m;++S){var $=S,N=(T(),z)[v+4*S>>>2>>>0],V=xe[N];if(V===void 0)throw m=`parameter ${S}`,N=Wd(N),v=Z(N),Yn(N),new $e(`${m} has unknown type ${v}`);M[$]=V}return M},Tw=(m,v,M)=>{var S=[];return m=m(S,M),S.length&&((T(),z)[v>>>2>>>0]=Ht(S)),m},Ew={},Aa=m=>{var v=Ew[m];return v===void 0?Z(m):v};function Aw(m,v,M){var[S,...$]=Mw(m,v>>>0);v=S.ed.bind(S);var N=$.map(ge=>ge.dd.bind(ge));m--;var V={toValue:Dt};switch(m=N.map((ge,Me)=>{var Ke=`argFromPtr${Me}`;return V[Ke]=ge,`${Ke}(args${Me?"+"+8*Me:""})`}),M){case 0:var re="toValue(handle)";break;case 2:re="new (toValue(handle))";break;case 3:re="";break;case 1:V.getStringOrSymbol=Aa,re="toValue(handle)[getStringOrSymbol(methodName)]"}return re+=`(${m})`,S.Kd||(V.toReturnWire=v,V.emval_returnValue=Tw,re=`return emval_returnValue(toReturnWire, destructorsRef, ${re})`),re=`return function (handle, methodName, destructorsRef, args) {
  ${re}
  }`,M=new Function(Object.keys(V),re)(...Object.values(V)),re=`methodCaller<(${$.map(ge=>ge.name)}) => ${S.name}>`,Sw(Object.defineProperty(M,"name",{value:re}))}function Rw(m,v){return v>>>=0,(m=Dt(m>>>0))==Dt(v)}function Cw(m){return(m>>>=0)?(m=Aa(m),Ht(globalThis[m])):Ht(globalThis)}function Iw(m){return m=Aa(m>>>0),Ht(e[m])}function $w(m,v){return v>>>=0,m=Dt(m>>>0),v=Dt(v),Ht(m[v])}function Pw(m){9<(m>>>=0)&&(It[m+1]+=1)}function Rd(m,v,M,S,$){return rl[m>>>0](v>>>0,M>>>0,S>>>0,$>>>0)}function Lw(m,v,M,S,$){return Rd(m>>>0,v>>>0,M>>>0,S>>>0,$>>>0)}function Dw(){return Ht([])}function Nw(m){m=Dt(m>>>0);for(var v=Array(m.length),M=0;M<m.length;M++)v[M]=m[M];return Ht(v)}function Uw(m){return Ht(Aa(m>>>0))}function Ow(){return Ht({})}function kw(m){for(var v=Dt(m>>>=0);v.length;){var M=v.pop();v.pop()(M)}Gt(m)}function zw(m,v,M){v>>>=0,M>>>=0,m=Dt(m>>>0),v=Dt(v),M=Dt(M),m[v]=M}function Bw(m,v){m=-9007199254740992>m||9007199254740992<m?NaN:Number(m),v>>>=0,m=new Date(1e3*m),(T(),D)[v>>>2>>>0]=m.getUTCSeconds(),(T(),D)[v+4>>>2>>>0]=m.getUTCMinutes(),(T(),D)[v+8>>>2>>>0]=m.getUTCHours(),(T(),D)[v+12>>>2>>>0]=m.getUTCDate(),(T(),D)[v+16>>>2>>>0]=m.getUTCMonth(),(T(),D)[v+20>>>2>>>0]=m.getUTCFullYear()-1900,(T(),D)[v+24>>>2>>>0]=m.getUTCDay(),m=(m.getTime()-Date.UTC(m.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(T(),D)[v+28>>>2>>>0]=m}var Cd=m=>m%4==0&&(m%100!=0||m%400==0),Id=[0,31,60,91,121,152,182,213,244,274,305,335],$d=[0,31,59,90,120,151,181,212,243,273,304,334];function Fw(m,v){m=-9007199254740992>m||9007199254740992<m?NaN:Number(m),v>>>=0,m=new Date(1e3*m),(T(),D)[v>>>2>>>0]=m.getSeconds(),(T(),D)[v+4>>>2>>>0]=m.getMinutes(),(T(),D)[v+8>>>2>>>0]=m.getHours(),(T(),D)[v+12>>>2>>>0]=m.getDate(),(T(),D)[v+16>>>2>>>0]=m.getMonth(),(T(),D)[v+20>>>2>>>0]=m.getFullYear()-1900,(T(),D)[v+24>>>2>>>0]=m.getDay();var M=(Cd(m.getFullYear())?Id:$d)[m.getMonth()]+m.getDate()-1|0;(T(),D)[v+28>>>2>>>0]=M,(T(),D)[v+36>>>2>>>0]=-60*m.getTimezoneOffset(),M=new Date(m.getFullYear(),6,1).getTimezoneOffset();var S=new Date(m.getFullYear(),0,1).getTimezoneOffset();m=0|(M!=S&&m.getTimezoneOffset()==Math.min(S,M)),(T(),D)[v+32>>>2>>>0]=m}function Hw(m){m>>>=0;var v=new Date((T(),D)[m+20>>>2>>>0]+1900,(T(),D)[m+16>>>2>>>0],(T(),D)[m+12>>>2>>>0],(T(),D)[m+8>>>2>>>0],(T(),D)[m+4>>>2>>>0],(T(),D)[m>>>2>>>0],0),M=(T(),D)[m+32>>>2>>>0],S=v.getTimezoneOffset(),$=new Date(v.getFullYear(),6,1).getTimezoneOffset(),N=new Date(v.getFullYear(),0,1).getTimezoneOffset(),V=Math.min(N,$);return 0>M?(T(),D)[m+32>>>2>>>0]=+($!=N&&V==S):0<M!=(V==S)&&($=Math.max(N,$),v.setTime(v.getTime()+6e4*((0<M?V:$)-S))),(T(),D)[m+24>>>2>>>0]=v.getDay(),M=(Cd(v.getFullYear())?Id:$d)[v.getMonth()]+v.getDate()-1|0,(T(),D)[m+28>>>2>>>0]=M,(T(),D)[m>>>2>>>0]=v.getSeconds(),(T(),D)[m+4>>>2>>>0]=v.getMinutes(),(T(),D)[m+8>>>2>>>0]=v.getHours(),(T(),D)[m+12>>>2>>>0]=v.getDate(),(T(),D)[m+16>>>2>>>0]=v.getMonth(),(T(),D)[m+20>>>2>>>0]=v.getYear(),m=v.getTime(),BigInt(isNaN(m)?-1:m/1e3)}function Pd(m,v,M,S,$,N,V){return r?_e(16,1,m,v,M,S,$,N,V):-52}function Ld(m,v,M,S,$,N){if(r)return _e(17,1,m,v,M,S,$,N)}var Is={},Vw=()=>performance.timeOrigin+performance.now();function Dd(m,v){if(r)return _e(18,1,m,v);if(Is[m]&&(clearTimeout(Is[m].id),delete Is[m]),!v)return 0;var M=setTimeout(()=>{delete Is[m],Sa(()=>Yd(m,performance.timeOrigin+performance.now()))},v);return Is[m]={id:M,me:v},0}function Gw(m,v,M,S){m>>>=0,v>>>=0,M>>>=0,S>>>=0;var $=new Date().getFullYear(),N=new Date($,0,1).getTimezoneOffset();$=new Date($,6,1).getTimezoneOffset();var V=Math.max(N,$);(T(),z)[m>>>2>>>0]=60*V,(T(),D)[v>>>2>>>0]=+(N!=$),m=(v=re=>{var ge=Math.abs(re);return`UTC${0<=re?"-":"+"}${String(Math.floor(ge/60)).padStart(2,"0")}${String(ge%60).padStart(2,"0")}`})(N),v=v($),$<N?(An(m,M,17),An(v,S,17)):(An(m,S,17),An(v,M,17))}var Ww=()=>Date.now();function qw(m,v,M){return M>>>=0,0<=m&&3>=m?(m===0?m=Date.now():m=performance.timeOrigin+performance.now(),m=Math.round(1e6*m),(T(),G)[M>>>3>>>0]=BigInt(m),0):28}var sl=[],Nd=(m,v)=>{sl.length=0;for(var M;M=(T(),k)[m++>>>0];){var S=M!=105;v+=(S&=M!=112)&&v%8?4:0,sl.push(M==112?(T(),z)[v>>>2>>>0]:M==106?(T(),G)[v>>>3>>>0]:M==105?(T(),D)[v>>>2>>>0]:(T(),q)[v>>>3>>>0]),v+=S?8:4}return sl};function Xw(m,v,M){return m>>>=0,v=Nd(v>>>0,M>>>0),fl[m](...v)}function jw(m,v,M){return m>>>=0,v=Nd(v>>>0,M>>>0),fl[m](...v)}var Kw=()=>{};function Yw(m,v){return R(ht(m>>>0,v>>>0))}var Zw=()=>{throw Ve+=1,"unwind"};function Jw(){return 4294901760}var Qw=()=>navigator.hardwareConcurrency,tr={},Ra=m=>{var v;return(v=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(m))?+v[1]:(v=/:(\d+):\d+(?:\)|$)/.exec(m))?2147483648|+v[1]:0},Ud=m=>{for(var v of m)(m=Ra(v))&&(tr[m]=v)};function eS(){var m=Error().stack.toString().split(`
`);return m[0]=="Error"&&m.shift(),Ud(m),tr.sd=Ra(m[3]),tr.Ud=m,tr.sd}function Ca(m){if(!(m=tr[m>>>0]))return 0;var v;if(v=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(m))m=v[1];else if(v=/^\s+at (.*) \(.*\)$/.exec(m))m=v[1];else{if(!(v=/^(.+?)@/.exec(m)))return 0;m=v[1]}Yn(Ca.td??0),v=Vt(m)+1;var M=$s(v);return M&&An(m,M,v),Ca.td=M,Ca.td}function tS(m){m>>>=0;var v=(T(),k).length;if(m<=v||4294901760<m)return!1;for(var M=1;4>=M;M*=2){var S=v*(1+.2/M);S=Math.min(S,m+100663296);e:{S=(Math.min(4294901760,65536*Math.ceil(Math.max(m,S)/65536))-ve.buffer.byteLength+65535)/65536|0;try{ve.grow(S),oe();var $=1;break e}catch{}$=void 0}if($)return!0}return!1}function nS(m,v,M){if(m>>>=0,v>>>=0,tr.sd==m)var S=tr.Ud;else(S=Error().stack.toString().split(`
`))[0]=="Error"&&S.shift(),Ud(S);for(var $=3;S[$]&&Ra(S[$])!=m;)++$;for(m=0;m<M&&S[m+$];++m)(T(),D)[v+4*m>>>2>>>0]=Ra(S[m+$]);return m}var al,ol={},Od=()=>{if(!al){var m,v={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(m in ol)ol[m]===void 0?delete v[m]:v[m]=ol[m];var M=[];for(m in v)M.push(`${m}=${v[m]}`);al=M}return al};function kd(m,v){if(r)return _e(19,1,m,v);m>>>=0,v>>>=0;var M,S=0,$=0;for(M of Od()){var N=v+S;(T(),z)[m+$>>>2>>>0]=N,S+=An(M,N,1/0)+1,$+=4}return 0}function zd(m,v){if(r)return _e(20,1,m,v);m>>>=0,v>>>=0;var M=Od();for(var S of((T(),z)[m>>>2>>>0]=M.length,m=0,M))m+=Vt(S)+1;return(T(),z)[v>>>2>>>0]=m,0}function Bd(m){return r?_e(21,1,m):52}function Fd(m,v,M,S,$){return r?_e(22,1,m,v,M,S,$):52}function Hd(m,v,M,S){return r?_e(23,1,m,v,M,S):52}function Vd(m,v,M,S){return r?_e(24,1,m,v,M,S):70}var iS=[null,[],[]];function Gd(m,v,M,S){if(r)return _e(25,1,m,v,M,S);v>>>=0,M>>>=0,S>>>=0;for(var $=0,N=0;N<M;N++){var V=(T(),z)[v>>>2>>>0],re=(T(),z)[v+4>>>2>>>0];v+=8;for(var ge=0;ge<re;ge++){var Me=m,Ke=(T(),k)[V+ge>>>0],gt=iS[Me];Ke===0||Ke===10?((Me===1?w:R)(yn(gt)),gt.length=0):gt.push(Ke)}$+=re}return(T(),z)[S>>>2>>>0]=$,0}function rS(m){return m>>>0}r||function(){for(var m=e.numThreads-1;m--;)Oe();De.push(async()=>{var v=async function(){if(!r)return Promise.all(St.map(pe))}();j++,await v,--j==0&&ze&&(v=ze,ze=null,v())})}(),r||(ve=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),oe()),e.wasmBinary&&(h=e.wasmBinary),e.stackSave=()=>et(),e.stackRestore=m=>Ze(m),e.stackAlloc=m=>cl(m),e.setValue=function(m,v,M="i8"){switch(M.endsWith("*")&&(M="*"),M){case"i1":case"i8":(T(),A)[m>>>0]=v;break;case"i16":(T(),F)[m>>>1>>>0]=v;break;case"i32":(T(),D)[m>>>2>>>0]=v;break;case"i64":(T(),G)[m>>>3>>>0]=BigInt(v);break;case"float":(T(),K)[m>>>2>>>0]=v;break;case"double":(T(),q)[m>>>3>>>0]=v;break;case"*":(T(),z)[m>>>2>>>0]=v;break;default:B(`invalid type for setValue: ${M}`)}},e.getValue=function(m,v="i8"){switch(v.endsWith("*")&&(v="*"),v){case"i1":case"i8":return(T(),A)[m>>>0];case"i16":return(T(),F)[m>>>1>>>0];case"i32":return(T(),D)[m>>>2>>>0];case"i64":return(T(),G)[m>>>3>>>0];case"float":return(T(),K)[m>>>2>>>0];case"double":return(T(),q)[m>>>3>>>0];case"*":return(T(),z)[m>>>2>>>0];default:B(`invalid type for getValue: ${v}`)}},e.UTF8ToString=ht,e.stringToUTF8=An,e.lengthBytesUTF8=Vt;var Wd,qd,Ia,Yn,$s,ll,Xd,jd,Kd,ul,Yd,Zd,rt,Ps,Jd,Ze,cl,et,Qd,dl,eh,th,nh,hl,ih,rh,sh,ah,oh,lh,uh,ch,dh,hh,fh,ph,mh,gh,_h,yh,vh,xh,bh,wh,Sh,Mh,Th,Eh,Ah,Rh,Ch,Ih,$h,Ph,Lh,Dh,Nh,Uh,Oh,kh,zh,Bh,Fh,Hh,Vh,ui,sS=[We,tt,mt,Ss,Ms,Ts,Zi,Es,Ji,As,Rs,ya,va,xa,L,X,Pd,Ld,Dd,kd,zd,Bd,Fd,Hd,Vd,Gd],fl={1124124:(m,v,M,S,$)=>{if(e===void 0||!e.jd)return 1;if((m=ht(Number(m>>>0))).startsWith("./")&&(m=m.substring(2)),!(m=e.jd.get(m)))return 2;if(v=Number(v>>>0),M=Number(M>>>0),S=Number(S>>>0),v+M>m.byteLength)return 3;try{let N=m.subarray(v,v+M);switch($){case 0:(T(),k).set(N,S>>>0);break;case 1:e.ae?e.ae(S,N):e.Td(S,N);break;default:return 4}return 0}catch{return 4}},1124948:()=>typeof navigator<"u"&&navigator.de?1:0,1125020:(m,v,M)=>{e.Dd(m,(T(),k).subarray(v>>>0,v+M>>>0))},1125084:()=>e.ce(),1125126:m=>{e.Cd(m)},1125163:()=>{e.Md()},1125194:()=>{e.Nd()},1125223:()=>{e.Rd()},1125248:m=>e.Ld(m),1125281:m=>e.Pd(m),1125313:(m,v,M)=>{e.rd(Number(m),Number(v),Number(M),!0)},1125376:(m,v,M)=>{e.rd(Number(m),Number(v),Number(M))},1125433:()=>typeof wasmOffsetConverter<"u",1125490:m=>{e.ic("Abs",m,void 0)},1125541:m=>{e.ic("Neg",m,void 0)},1125592:m=>{e.ic("Floor",m,void 0)},1125645:m=>{e.ic("Ceil",m,void 0)},1125697:m=>{e.ic("Reciprocal",m,void 0)},1125755:m=>{e.ic("Sqrt",m,void 0)},1125807:m=>{e.ic("Exp",m,void 0)},1125858:m=>{e.ic("Erf",m,void 0)},1125909:m=>{e.ic("Sigmoid",m,void 0)},1125964:(m,v,M)=>{e.ic("HardSigmoid",m,{alpha:v,beta:M})},1126043:m=>{e.ic("HardSwish",m,void 0)},1126100:m=>{e.ic("Log",m,void 0)},1126151:m=>{e.ic("Sin",m,void 0)},1126202:m=>{e.ic("Cos",m,void 0)},1126253:m=>{e.ic("Tan",m,void 0)},1126304:m=>{e.ic("Asin",m,void 0)},1126356:m=>{e.ic("Acos",m,void 0)},1126408:m=>{e.ic("Atan",m,void 0)},1126460:m=>{e.ic("Sinh",m,void 0)},1126512:m=>{e.ic("Cosh",m,void 0)},1126564:m=>{e.ic("Asinh",m,void 0)},1126617:m=>{e.ic("Acosh",m,void 0)},1126670:m=>{e.ic("Atanh",m,void 0)},1126723:m=>{e.ic("Tanh",m,void 0)},1126775:m=>{e.ic("Not",m,void 0)},1126826:(m,v,M)=>{e.ic("Clip",m,{min:v,max:M})},1126895:m=>{e.ic("Clip",m,void 0)},1126947:(m,v)=>{e.ic("Elu",m,{alpha:v})},1127005:m=>{e.ic("Gelu",m,void 0)},1127057:m=>{e.ic("Relu",m,void 0)},1127109:(m,v)=>{e.ic("LeakyRelu",m,{alpha:v})},1127173:(m,v)=>{e.ic("ThresholdedRelu",m,{alpha:v})},1127243:(m,v)=>{e.ic("Cast",m,{to:v})},1127301:m=>{e.ic("Add",m,void 0)},1127352:m=>{e.ic("Sub",m,void 0)},1127403:m=>{e.ic("Mul",m,void 0)},1127454:m=>{e.ic("Div",m,void 0)},1127505:m=>{e.ic("Pow",m,void 0)},1127556:m=>{e.ic("Equal",m,void 0)},1127609:m=>{e.ic("Greater",m,void 0)},1127664:m=>{e.ic("GreaterOrEqual",m,void 0)},1127726:m=>{e.ic("Less",m,void 0)},1127778:m=>{e.ic("LessOrEqual",m,void 0)},1127837:(m,v,M,S,$)=>{e.ic("ReduceMean",m,{keepDims:!!v,noopWithEmptyAxes:!!M,axes:S?Array.from((T(),D).subarray(Number(S)>>>0,Number($)>>>0)):[]})},1128012:(m,v,M,S,$)=>{e.ic("ReduceMax",m,{keepDims:!!v,noopWithEmptyAxes:!!M,axes:S?Array.from((T(),D).subarray(Number(S)>>>0,Number($)>>>0)):[]})},1128186:(m,v,M,S,$)=>{e.ic("ReduceMin",m,{keepDims:!!v,noopWithEmptyAxes:!!M,axes:S?Array.from((T(),D).subarray(Number(S)>>>0,Number($)>>>0)):[]})},1128360:(m,v,M,S,$)=>{e.ic("ReduceProd",m,{keepDims:!!v,noopWithEmptyAxes:!!M,axes:S?Array.from((T(),D).subarray(Number(S)>>>0,Number($)>>>0)):[]})},1128535:(m,v,M,S,$)=>{e.ic("ReduceSum",m,{keepDims:!!v,noopWithEmptyAxes:!!M,axes:S?Array.from((T(),D).subarray(Number(S)>>>0,Number($)>>>0)):[]})},1128709:(m,v,M,S,$)=>{e.ic("ReduceL1",m,{keepDims:!!v,noopWithEmptyAxes:!!M,axes:S?Array.from((T(),D).subarray(Number(S)>>>0,Number($)>>>0)):[]})},1128882:(m,v,M,S,$)=>{e.ic("ReduceL2",m,{keepDims:!!v,noopWithEmptyAxes:!!M,axes:S?Array.from((T(),D).subarray(Number(S)>>>0,Number($)>>>0)):[]})},1129055:(m,v,M,S,$)=>{e.ic("ReduceLogSum",m,{keepDims:!!v,noopWithEmptyAxes:!!M,axes:S?Array.from((T(),D).subarray(Number(S)>>>0,Number($)>>>0)):[]})},1129232:(m,v,M,S,$)=>{e.ic("ReduceSumSquare",m,{keepDims:!!v,noopWithEmptyAxes:!!M,axes:S?Array.from((T(),D).subarray(Number(S)>>>0,Number($)>>>0)):[]})},1129412:(m,v,M,S,$)=>{e.ic("ReduceLogSumExp",m,{keepDims:!!v,noopWithEmptyAxes:!!M,axes:S?Array.from((T(),D).subarray(Number(S)>>>0,Number($)>>>0)):[]})},1129592:m=>{e.ic("Where",m,void 0)},1129645:(m,v,M)=>{e.ic("Transpose",m,{perm:v?Array.from((T(),D).subarray(Number(v)>>>0,Number(M)>>>0)):[]})},1129769:(m,v,M,S)=>{e.ic("DepthToSpace",m,{blocksize:v,mode:ht(M),format:S?"NHWC":"NCHW"})},1129902:(m,v,M,S)=>{e.ic("DepthToSpace",m,{blocksize:v,mode:ht(M),format:S?"NHWC":"NCHW"})},1130035:(m,v,M,S)=>{e.ic("DFT",m,{axis:v,inverse:M,onesided:S})},1130127:(m,v,M,S,$,N,V,re,ge,Me,Ke,gt,Et,$t,Ai)=>{e.ic("ConvTranspose",m,{format:ge?"NHWC":"NCHW",autoPad:v,dilations:[M],group:S,kernelShape:[$],pads:[N,V],strides:[re],wIsConst:()=>!!(T(),A)[Me>>>0],outputPadding:Ke?Array.from((T(),D).subarray(Number(Ke)>>>0,Number(gt)>>>0)):[],outputShape:Et?Array.from((T(),D).subarray(Number(Et)>>>0,Number($t)>>>0)):[],activation:ht(Ai)})},1130560:(m,v,M,S,$,N,V,re,ge,Me,Ke,gt,Et,$t)=>{e.ic("ConvTranspose",m,{format:re?"NHWC":"NCHW",autoPad:v,dilations:Array.from((T(),D).subarray(Number(M)>>>0,(Number(M)>>>0)+2>>>0)),group:S,kernelShape:Array.from((T(),D).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),pads:Array.from((T(),D).subarray(Number(N)>>>0,(Number(N)>>>0)+4>>>0)),strides:Array.from((T(),D).subarray(Number(V)>>>0,(Number(V)>>>0)+2>>>0)),wIsConst:()=>!!(T(),A)[ge>>>0],outputPadding:Me?Array.from((T(),D).subarray(Number(Me)>>>0,Number(Ke)>>>0)):[],outputShape:gt?Array.from((T(),D).subarray(Number(gt)>>>0,Number(Et)>>>0)):[],activation:ht($t)})},1131221:(m,v,M,S,$,N,V,re,ge,Me,Ke,gt,Et,$t,Ai)=>{e.ic("ConvTranspose",m,{format:ge?"NHWC":"NCHW",autoPad:v,dilations:[M],group:S,kernelShape:[$],pads:[N,V],strides:[re],wIsConst:()=>!!(T(),A)[Me>>>0],outputPadding:Ke?Array.from((T(),D).subarray(Number(Ke)>>>0,Number(gt)>>>0)):[],outputShape:Et?Array.from((T(),D).subarray(Number(Et)>>>0,Number($t)>>>0)):[],activation:ht(Ai)})},1131654:(m,v,M,S,$,N,V,re,ge,Me,Ke,gt,Et,$t)=>{e.ic("ConvTranspose",m,{format:re?"NHWC":"NCHW",autoPad:v,dilations:Array.from((T(),D).subarray(Number(M)>>>0,(Number(M)>>>0)+2>>>0)),group:S,kernelShape:Array.from((T(),D).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),pads:Array.from((T(),D).subarray(Number(N)>>>0,(Number(N)>>>0)+4>>>0)),strides:Array.from((T(),D).subarray(Number(V)>>>0,(Number(V)>>>0)+2>>>0)),wIsConst:()=>!!(T(),A)[ge>>>0],outputPadding:Me?Array.from((T(),D).subarray(Number(Me)>>>0,Number(Ke)>>>0)):[],outputShape:gt?Array.from((T(),D).subarray(Number(gt)>>>0,Number(Et)>>>0)):[],activation:ht($t)})},1132315:(m,v)=>{e.ic("GlobalAveragePool",m,{format:v?"NHWC":"NCHW"})},1132406:(m,v,M,S,$,N,V,re,ge,Me,Ke,gt,Et,$t)=>{e.ic("AveragePool",m,{format:$t?"NHWC":"NCHW",auto_pad:v,ceil_mode:M,count_include_pad:S,storage_order:$,dilations:N?Array.from((T(),D).subarray(Number(N)>>>0,Number(V)>>>0)):[],kernel_shape:re?Array.from((T(),D).subarray(Number(re)>>>0,Number(ge)>>>0)):[],pads:Me?Array.from((T(),D).subarray(Number(Me)>>>0,Number(Ke)>>>0)):[],strides:gt?Array.from((T(),D).subarray(Number(gt)>>>0,Number(Et)>>>0)):[]})},1132885:(m,v)=>{e.ic("GlobalAveragePool",m,{format:v?"NHWC":"NCHW"})},1132976:(m,v,M,S,$,N,V,re,ge,Me,Ke,gt,Et,$t)=>{e.ic("AveragePool",m,{format:$t?"NHWC":"NCHW",auto_pad:v,ceil_mode:M,count_include_pad:S,storage_order:$,dilations:N?Array.from((T(),D).subarray(Number(N)>>>0,Number(V)>>>0)):[],kernel_shape:re?Array.from((T(),D).subarray(Number(re)>>>0,Number(ge)>>>0)):[],pads:Me?Array.from((T(),D).subarray(Number(Me)>>>0,Number(Ke)>>>0)):[],strides:gt?Array.from((T(),D).subarray(Number(gt)>>>0,Number(Et)>>>0)):[]})},1133455:(m,v)=>{e.ic("GlobalMaxPool",m,{format:v?"NHWC":"NCHW"})},1133542:(m,v,M,S,$,N,V,re,ge,Me,Ke,gt,Et,$t)=>{e.ic("MaxPool",m,{format:$t?"NHWC":"NCHW",auto_pad:v,ceil_mode:M,count_include_pad:S,storage_order:$,dilations:N?Array.from((T(),D).subarray(Number(N)>>>0,Number(V)>>>0)):[],kernel_shape:re?Array.from((T(),D).subarray(Number(re)>>>0,Number(ge)>>>0)):[],pads:Me?Array.from((T(),D).subarray(Number(Me)>>>0,Number(Ke)>>>0)):[],strides:gt?Array.from((T(),D).subarray(Number(gt)>>>0,Number(Et)>>>0)):[]})},1134017:(m,v)=>{e.ic("GlobalMaxPool",m,{format:v?"NHWC":"NCHW"})},1134104:(m,v,M,S,$,N,V,re,ge,Me,Ke,gt,Et,$t)=>{e.ic("MaxPool",m,{format:$t?"NHWC":"NCHW",auto_pad:v,ceil_mode:M,count_include_pad:S,storage_order:$,dilations:N?Array.from((T(),D).subarray(Number(N)>>>0,Number(V)>>>0)):[],kernel_shape:re?Array.from((T(),D).subarray(Number(re)>>>0,Number(ge)>>>0)):[],pads:Me?Array.from((T(),D).subarray(Number(Me)>>>0,Number(Ke)>>>0)):[],strides:gt?Array.from((T(),D).subarray(Number(gt)>>>0,Number(Et)>>>0)):[]})},1134579:(m,v,M,S,$)=>{e.ic("Gemm",m,{alpha:v,beta:M,transA:S,transB:$})},1134683:m=>{e.ic("MatMul",m,void 0)},1134737:(m,v,M,S)=>{e.ic("ArgMax",m,{keepDims:!!v,selectLastIndex:!!M,axis:S})},1134845:(m,v,M,S)=>{e.ic("ArgMin",m,{keepDims:!!v,selectLastIndex:!!M,axis:S})},1134953:(m,v)=>{e.ic("Softmax",m,{axis:v})},1135016:(m,v)=>{e.ic("Concat",m,{axis:v})},1135076:(m,v,M,S,$)=>{e.ic("Split",m,{axis:v,numOutputs:M,splitSizes:S?Array.from((T(),D).subarray(Number(S)>>>0,Number($)>>>0)):[]})},1135232:m=>{e.ic("Expand",m,void 0)},1135286:(m,v)=>{e.ic("Gather",m,{axis:Number(v)})},1135357:(m,v)=>{e.ic("GatherElements",m,{axis:Number(v)})},1135436:(m,v)=>{e.ic("GatherND",m,{batch_dims:Number(v)})},1135515:(m,v,M,S,$,N,V,re,ge,Me,Ke)=>{e.ic("Resize",m,{antialias:v,axes:M?Array.from((T(),D).subarray(Number(M)>>>0,Number(S)>>>0)):[],coordinateTransformMode:ht($),cubicCoeffA:N,excludeOutside:V,extrapolationValue:re,keepAspectRatioPolicy:ht(ge),mode:ht(Me),nearestMode:ht(Ke)})},1135877:(m,v,M,S,$,N,V)=>{e.ic("Slice",m,{starts:v?Array.from((T(),D).subarray(Number(v)>>>0,Number(M)>>>0)):[],ends:S?Array.from((T(),D).subarray(Number(S)>>>0,Number($)>>>0)):[],axes:N?Array.from((T(),D).subarray(Number(N)>>>0,Number(V)>>>0)):[]})},1136141:m=>{e.ic("Tile",m,void 0)},1136193:(m,v,M)=>{e.ic("InstanceNormalization",m,{epsilon:v,format:M?"NHWC":"NCHW"})},1136307:(m,v,M)=>{e.ic("InstanceNormalization",m,{epsilon:v,format:M?"NHWC":"NCHW"})},1136421:m=>{e.ic("Range",m,void 0)},1136474:(m,v)=>{e.ic("Einsum",m,{equation:ht(v)})},1136555:(m,v,M,S,$)=>{e.ic("Pad",m,{mode:v,value:M,pads:S?Array.from((T(),D).subarray(Number(S)>>>0,Number($)>>>0)):[]})},1136698:(m,v,M,S,$,N)=>{e.ic("BatchNormalization",m,{epsilon:v,momentum:M,spatial:!!$,trainingMode:!!S,format:N?"NHWC":"NCHW"})},1136867:(m,v,M,S,$,N)=>{e.ic("BatchNormalization",m,{epsilon:v,momentum:M,spatial:!!$,trainingMode:!!S,format:N?"NHWC":"NCHW"})},1137036:(m,v,M)=>{e.ic("CumSum",m,{exclusive:Number(v),reverse:Number(M)})},1137133:(m,v,M)=>{e.ic("DequantizeLinear",m,{axis:v,blockSize:M})},1137223:(m,v,M,S,$)=>{e.ic("GridSample",m,{align_corners:v,mode:ht(M),padding_mode:ht(S),format:$?"NHWC":"NCHW"})},1137393:(m,v,M,S,$)=>{e.ic("GridSample",m,{align_corners:v,mode:ht(M),padding_mode:ht(S),format:$?"NHWC":"NCHW"})},1137563:(m,v)=>{e.ic("ScatterND",m,{reduction:ht(v)})},1137648:(m,v,M,S,$,N,V,re,ge)=>{e.ic("Attention",m,{numHeads:v,isUnidirectional:M,maskFilterValue:S,scale:$,doRotary:N,qkvHiddenSizes:V?Array.from((T(),D).subarray(Number(re)>>>0,Number(re)+V>>>0)):[],pastPresentShareBuffer:!!ge})},1137920:m=>{e.ic("BiasAdd",m,void 0)},1137975:m=>{e.ic("BiasSplitGelu",m,void 0)},1138036:m=>{e.ic("FastGelu",m,void 0)},1138092:(m,v,M,S,$,N,V,re,ge,Me,Ke,gt,Et,$t,Ai,pl)=>{e.ic("Conv",m,{format:gt?"NHWC":"NCHW",auto_pad:v,dilations:M?Array.from((T(),D).subarray(Number(M)>>>0,Number(S)>>>0)):[],group:$,kernel_shape:N?Array.from((T(),D).subarray(Number(N)>>>0,Number(V)>>>0)):[],pads:re?Array.from((T(),D).subarray(Number(re)>>>0,Number(ge)>>>0)):[],strides:Me?Array.from((T(),D).subarray(Number(Me)>>>0,Number(Ke)>>>0)):[],w_is_const:()=>!!(T(),A)[Number(Et)>>>0],activation:ht($t),activation_params:Ai?Array.from((T(),K).subarray(Number(Ai)>>>0,Number(pl)>>>0)):[]})},1138676:m=>{e.ic("Gelu",m,void 0)},1138728:(m,v,M,S,$,N,V,re,ge)=>{e.ic("GroupQueryAttention",m,{numHeads:v,kvNumHeads:M,scale:S,softcap:$,doRotary:N,rotaryInterleaved:V,smoothSoftmax:re,localWindowSize:ge})},1138945:(m,v,M,S)=>{e.ic("LayerNormalization",m,{axis:v,epsilon:M,simplified:!!S})},1139056:(m,v,M,S)=>{e.ic("LayerNormalization",m,{axis:v,epsilon:M,simplified:!!S})},1139167:(m,v,M,S,$,N)=>{e.ic("MatMulNBits",m,{k:v,n:M,accuracyLevel:S,bits:$,blockSize:N})},1139294:(m,v,M,S,$,N)=>{e.ic("MultiHeadAttention",m,{numHeads:v,isUnidirectional:M,maskFilterValue:S,scale:$,doRotary:N})},1139453:(m,v)=>{e.ic("QuickGelu",m,{alpha:v})},1139517:(m,v,M,S,$)=>{e.ic("RotaryEmbedding",m,{interleaved:!!v,numHeads:M,rotaryEmbeddingDim:S,scale:$})},1139656:(m,v,M)=>{e.ic("SkipLayerNormalization",m,{epsilon:v,simplified:!!M})},1139758:(m,v,M)=>{e.ic("SkipLayerNormalization",m,{epsilon:v,simplified:!!M})},1139860:(m,v,M,S)=>{e.ic("GatherBlockQuantized",m,{gatherAxis:v,quantizeAxis:M,blockSize:S})},1139981:m=>{e.Qd(m)},1140015:(m,v)=>e.Sd(Number(m),Number(v),e.hd.Vd,e.hd.errors)};function aS(m,v,M){return Ad(async()=>{await e.Od(Number(m),Number(v),Number(M))})}function oS(){return typeof wasmOffsetConverter<"u"}function lS(m,v,M,S){var $=et();try{return dh(m,v,M,S)}catch(N){if(Ze($),N!==N+0)throw N;rt(1,0)}}function uS(m,v,M){var S=et();try{return uh(m,v,M)}catch($){if(Ze(S),$!==$+0)throw $;rt(1,0)}}function cS(m){var v=et();try{oh(m)}catch(M){if(Ze(v),M!==M+0)throw M;rt(1,0)}}function dS(m,v){var M=et();try{return hl(m,v)}catch(S){if(Ze(M),S!==S+0)throw S;rt(1,0)}}function hS(m,v,M){var S=et();try{nh(m,v,M)}catch($){if(Ze(S),$!==$+0)throw $;rt(1,0)}}function fS(m,v,M,S){var $=et();try{return gh(m,v,M,S)}catch(N){if(Ze($),N!==N+0)throw N;rt(1,0)}}function pS(m,v){var M=et();try{hh(m,v)}catch(S){if(Ze(M),S!==S+0)throw S;rt(1,0)}}function mS(m,v,M,S,$,N,V){var re=et();try{return ch(m,v,M,S,$,N,V)}catch(ge){if(Ze(re),ge!==ge+0)throw ge;rt(1,0)}}function gS(m,v,M,S,$,N){var V=et();try{ih(m,v,M,S,$,N)}catch(re){if(Ze(V),re!==re+0)throw re;rt(1,0)}}function _S(m,v,M,S){var $=et();try{sh(m,v,M,S)}catch(N){if(Ze($),N!==N+0)throw N;rt(1,0)}}function yS(m,v,M,S,$){var N=et();try{lh(m,v,M,S,$)}catch(V){if(Ze(N),V!==V+0)throw V;rt(1,0)}}function vS(m,v,M,S,$,N,V){var re=et();try{ph(m,v,M,S,$,N,V)}catch(ge){if(Ze(re),ge!==ge+0)throw ge;rt(1,0)}}function xS(m,v,M,S,$,N,V){var re=et();try{mh(m,v,M,S,$,N,V)}catch(ge){if(Ze(re),ge!==ge+0)throw ge;rt(1,0)}}function bS(m,v,M,S,$,N,V,re){var ge=et();try{xh(m,v,M,S,$,N,V,re)}catch(Me){if(Ze(ge),Me!==Me+0)throw Me;rt(1,0)}}function wS(m,v,M,S,$){var N=et();try{return fh(m,v,M,S,$)}catch(V){if(Ze(N),V!==V+0)throw V;rt(1,0)}}function SS(m,v,M){var S=et();try{return ah(m,v,M)}catch($){if(Ze(S),$!==$+0)throw $;rt(1,0)}}function MS(m,v,M,S,$,N,V,re){var ge=et();try{bh(m,v,M,S,$,N,V,re)}catch(Me){if(Ze(ge),Me!==Me+0)throw Me;rt(1,0)}}function TS(m,v,M,S,$,N,V,re,ge,Me,Ke,gt){var Et=et();try{_h(m,v,M,S,$,N,V,re,ge,Me,Ke,gt)}catch($t){if(Ze(Et),$t!==$t+0)throw $t;rt(1,0)}}function ES(m,v,M){var S=et();try{return wh(m,v,M)}catch($){if(Ze(S),$!==$+0)throw $;return rt(1,0),0n}}function AS(m,v,M,S,$,N,V,re,ge){var Me=et();try{rh(m,v,M,S,$,N,V,re,ge)}catch(Ke){if(Ze(Me),Ke!==Ke+0)throw Ke;rt(1,0)}}function RS(m){var v=et();try{return Sh(m)}catch(M){if(Ze(v),M!==M+0)throw M;rt(1,0)}}function CS(m,v){var M=et();try{return kh(m,v)}catch(S){if(Ze(M),S!==S+0)throw S;return rt(1,0),0n}}function IS(m,v,M,S){var $=et();try{return Mh(m,v,M,S)}catch(N){if(Ze($),N!==N+0)throw N;rt(1,0)}}function $S(m,v,M,S,$,N,V){var re=et();try{zh(m,v,M,S,$,N,V)}catch(ge){if(Ze(re),ge!==ge+0)throw ge;rt(1,0)}}function PS(m){var v=et();try{return Th(m)}catch(M){if(Ze(v),M!==M+0)throw M;return rt(1,0),0n}}function LS(m,v,M,S,$){var N=et();try{return $h(m,v,M,S,$)}catch(V){if(Ze(N),V!==V+0)throw V;rt(1,0)}}function DS(m,v,M,S,$,N){var V=et();try{return Ph(m,v,M,S,$,N)}catch(re){if(Ze(V),re!==re+0)throw re;rt(1,0)}}function NS(m,v,M,S,$,N){var V=et();try{return yh(m,v,M,S,$,N)}catch(re){if(Ze(V),re!==re+0)throw re;rt(1,0)}}function US(m,v,M,S,$,N){var V=et();try{return Lh(m,v,M,S,$,N)}catch(re){if(Ze(V),re!==re+0)throw re;rt(1,0)}}function OS(m,v,M,S,$,N,V,re){var ge=et();try{return vh(m,v,M,S,$,N,V,re)}catch(Me){if(Ze(ge),Me!==Me+0)throw Me;rt(1,0)}}function kS(m,v,M,S,$){var N=et();try{return Dh(m,v,M,S,$)}catch(V){if(Ze(N),V!==V+0)throw V;return rt(1,0),0n}}function zS(m,v,M,S){var $=et();try{return Nh(m,v,M,S)}catch(N){if(Ze($),N!==N+0)throw N;rt(1,0)}}function BS(m,v,M,S){var $=et();try{return Uh(m,v,M,S)}catch(N){if(Ze($),N!==N+0)throw N;rt(1,0)}}function FS(m,v,M,S,$,N,V,re,ge,Me,Ke,gt){var Et=et();try{return Oh(m,v,M,S,$,N,V,re,ge,Me,Ke,gt)}catch($t){if(Ze(Et),$t!==$t+0)throw $t;rt(1,0)}}function HS(m,v,M,S,$,N,V,re,ge,Me,Ke){var gt=et();try{Ch(m,v,M,S,$,N,V,re,ge,Me,Ke)}catch(Et){if(Ze(gt),Et!==Et+0)throw Et;rt(1,0)}}function VS(m,v,M,S,$,N,V,re,ge,Me,Ke,gt,Et,$t,Ai,pl){var XS=et();try{Ih(m,v,M,S,$,N,V,re,ge,Me,Ke,gt,Et,$t,Ai,pl)}catch(ml){if(Ze(XS),ml!==ml+0)throw ml;rt(1,0)}}function GS(m,v,M){var S=et();try{return Eh(m,v,M)}catch($){if(Ze(S),$!==$+0)throw $;rt(1,0)}}function WS(m,v,M){var S=et();try{return Ah(m,v,M)}catch($){if(Ze(S),$!==$+0)throw $;rt(1,0)}}function qS(m,v,M,S){var $=et();try{Rh(m,v,M,S)}catch(N){if(Ze($),N!==N+0)throw N;rt(1,0)}}function $a(){if(0<j)ze=$a;else if(r)y?.(e),de();else{for(var m=De;0<m.length;)m.shift()(e);0<j?ze=$a:(e.calledRun=!0,E||(de(),y?.(e)))}}return r||(ui=await Te(),$a()),e.PTR_SIZE=4,Y?e:new Promise((m,v)=>{y=m,_=v})}var Z0,Wh,m1=ce(()=>{"use strict";Z0=Gh,Wh=globalThis.self?.name?.startsWith("em-pthread"),Wh&&Gh()}),Sl,rc,qh,bn,J0,La,Xh,jh,Ml,Kh,Tl,Q0,El,ey,kc=ce(()=>{"use strict";Oc(),Sl=typeof location>"u"?void 0:location.origin,rc=import.meta.url>"file:"&&import.meta.url<"file;",qh=()=>{if(rc){let n=URL;return new URL(new n("ort.bundle.min.mjs",import.meta.url).href,Sl).href}return import.meta.url},bn=qh(),J0=()=>{if(bn&&!bn.startsWith("blob:"))return bn.substring(0,bn.lastIndexOf("/")+1)},La=(n,e)=>{try{let t=e??bn;return(t?new URL(n,t):new URL(n)).origin===Sl}catch{return!1}},Xh=(n,e)=>{let t=e??bn;try{return(t?new URL(n,t):new URL(n)).href}catch{return}},jh=(n,e)=>`${e??"./"}${n}`,Ml=async n=>{let e=await(await fetch(n,{credentials:"same-origin"})).blob();return URL.createObjectURL(e)},Kh=async n=>(await import(n)).default,Tl=(p1(),ca(j0)).default,Q0=async()=>{if(!bn)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(La(bn))return[void 0,Tl()];let n=await Ml(bn);return[n,Tl(n)]},El=(m1(),ca(Y0)).default,ey=async(n,e,t,i)=>{let r=El&&!(n||e);if(r)if(bn)r=La(bn)||i&&!t;else if(i&&!t)r=!0;else throw new Error("cannot determine the script source URL.");if(r)return[void 0,El];{let s="ort-wasm-simd-threaded.jsep.mjs",a=n??Xh(s,e),o=t&&a&&!La(a,e),l=o?await Ml(a):a??jh(s,e);return[o?l:void 0,await Kh(l)]}}}),Al,Da,Ls,Rl,Yh,Zh,Jh,zc,Mt,Cr=ce(()=>{"use strict";kc(),Da=!1,Ls=!1,Rl=!1,Yh=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Zh=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Jh=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},zc=async n=>{if(Da)return Promise.resolve();if(Ls)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Rl)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ls=!0;let e=n.initTimeout,t=n.numThreads;if(n.simd!==!1){if(n.simd==="relaxed"){if(!Jh())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Zh())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=Yh();t>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+t+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),n.numThreads=t=1);let r=n.wasmPaths,s=typeof r=="string"?r:void 0,a=r?.mjs,o=a?.href??a,l=r?.wasm,u=l?.href??l,c=n.wasmBinary,[d,h]=await ey(o,s,t>1,!!c||!!u),f=!1,g=[];if(e>0&&g.push(new Promise(y=>{setTimeout(()=>{f=!0,y()},e)})),g.push(new Promise((y,_)=>{let p={numThreads:t};if(c)p.wasmBinary=c,p.locateFile=x=>x;else if(u||s)p.locateFile=x=>u??s+x;else if(o&&o.indexOf("blob:")!==0)p.locateFile=x=>new URL(x,o).href;else if(d){let x=J0();x&&(p.locateFile=b=>x+b)}h(p).then(x=>{Ls=!1,Da=!0,Al=x,y(),d&&URL.revokeObjectURL(d)},x=>{Ls=!1,Rl=!0,_(x)})})),await Promise.race(g),f)throw new Error(`WebAssembly backend initializing failed due to timeout: ${e}ms`)},Mt=()=>{if(Da&&Al)return Al;throw new Error("WebAssembly is not initialized yet.")}}),Fn,Co,yt,Bc=ce(()=>{"use strict";Cr(),Fn=(n,e)=>{let t=Mt(),i=t.lengthBytesUTF8(n)+1,r=t._malloc(i);return t.stringToUTF8(n,r,i),e.push(r),r},Co=(n,e,t,i)=>{if(typeof n=="object"&&n!==null){if(t.has(n))throw new Error("Circular reference in options");t.add(n)}Object.entries(n).forEach(([r,s])=>{let a=e?e+r:r;if(typeof s=="object")Co(s,a+".",t,i);else if(typeof s=="string"||typeof s=="number")i(a,s.toString());else if(typeof s=="boolean")i(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},yt=n=>{let e=Mt(),t=e.stackSave();try{let i=e.PTR_SIZE,r=e.stackAlloc(2*i);e._OrtGetLastError(r,r+i);let s=Number(e.getValue(r,i===4?"i32":"i64")),a=e.getValue(r+i,"*"),o=a?e.UTF8ToString(a):"";throw new Error(`${n} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{e.stackRestore(t)}}}),ty,g1=ce(()=>{"use strict";Cr(),Bc(),ty=(n,e)=>{let t=Mt(),i=0,r=[],s=n||{};try{if(n?.logSeverityLevel===void 0)s.logSeverityLevel=2;else if(typeof n.logSeverityLevel!="number"||!Number.isInteger(n.logSeverityLevel)||n.logSeverityLevel<0||n.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${n.logSeverityLevel}`);if(n?.logVerbosityLevel===void 0)s.logVerbosityLevel=0;else if(typeof n.logVerbosityLevel!="number"||!Number.isInteger(n.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${n.logVerbosityLevel}`);n?.terminate===void 0&&(s.terminate=!1);let a=0;n?.tag!==void 0&&(a=Fn(n.tag,r)),i=t._OrtCreateRunOptions(s.logSeverityLevel,s.logVerbosityLevel,!!s.terminate,a),i===0&&yt("Can't create run options."),n?.extra!==void 0&&Co(n.extra,"",new WeakSet,(o,l)=>{let u=Fn(o,r),c=Fn(l,r);t._OrtAddRunConfigEntry(i,u,c)!==0&&yt(`Can't set a run config entry: ${o} - ${l}.`)});for(let o of e)t._OrtRunOptionsAddActiveLoraAdapter(i,o)!==0&&yt("Can't add an active LoRA adapter.");return[i,r]}catch(a){throw i!==0&&t._OrtReleaseRunOptions(i),r.forEach(o=>t._free(o)),a}}}),Qh,ef,tf,nr,nf,ny,_1=ce(()=>{"use strict";Cr(),Bc(),Qh=n=>{switch(n){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${n}`)}},ef=n=>{switch(n){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${n}`)}},tf=n=>{n.extra||(n.extra={}),n.extra.session||(n.extra.session={});let e=n.extra.session;e.use_ort_model_bytes_directly||(e.use_ort_model_bytes_directly="1"),n.executionProviders&&n.executionProviders.some(t=>(typeof t=="string"?t:t.name)==="webgpu")&&(n.enableMemPattern=!1)},nr=(n,e,t,i)=>{let r=Fn(e,i),s=Fn(t,i);Mt()._OrtAddSessionConfigEntry(n,r,s)!==0&&yt(`Can't set a session config entry: ${e} - ${t}.`)},nf=async(n,e,t)=>{let i=e.executionProviders;for(let r of i){let s=typeof r=="string"?r:r.name,a=[],o;switch(s){case"webnn":if(s="WEBNN",nr(n,"session.disable_quant_qdq","1",t),nr(n,"session.disable_qdq_constant_folding","1",t),typeof r!="string"){let h=r?.deviceType;h&&nr(n,"deviceType",h,t)}break;case"webgpu":if(s="JS",typeof r!="string"){let h=r;if(h?.preferredLayout){if(h.preferredLayout!=="NCHW"&&h.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${h.preferredLayout}`);nr(n,"preferredLayout",h.preferredLayout,t)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let l=a.length,u=0,c=0;if(l>0){u=Mt()._malloc(l*Mt().PTR_SIZE),t.push(u),c=Mt()._malloc(l*Mt().PTR_SIZE),t.push(c);for(let h=0;h<l;h++)Mt().setValue(u+h*Mt().PTR_SIZE,a[h][0],"*"),Mt().setValue(c+h*Mt().PTR_SIZE,a[h][1],"*")}let d;if(o===void 0){let h=Fn(s,t);d=await Mt()._OrtAppendExecutionProvider(n,h,u,c,l)}d!==0&&yt(`Can't append execution provider: ${s}.`)}},ny=async n=>{let e=Mt(),t=0,i=[],r=n||{};tf(r);try{let s=Qh(r.graphOptimizationLevel??"all"),a=ef(r.executionMode??"sequential"),o=typeof r.logId=="string"?Fn(r.logId,i):0,l=r.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let u=r.logVerbosityLevel??0;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log verbosity level is not valid: ${u}`);let c=typeof r.optimizedModelFilePath=="string"?Fn(r.optimizedModelFilePath,i):0;if(t=e._OrtCreateSessionOptions(s,!!r.enableCpuMemArena,!!r.enableMemPattern,a,!!r.enableProfiling,0,o,l,u,c),t===0&&yt("Can't create session options."),r.executionProviders&&await nf(t,r,i),r.enableGraphCapture!==void 0){if(typeof r.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${r.enableGraphCapture}`);nr(t,"enableGraphCapture",r.enableGraphCapture.toString(),i)}if(r.freeDimensionOverrides)for(let[d,h]of Object.entries(r.freeDimensionOverrides)){if(typeof d!="string")throw new Error(`free dimension override name must be a string: ${d}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let f=Fn(d,i);e._OrtAddFreeDimensionOverride(t,f,h)!==0&&yt(`Can't set a free dimension override: ${d} - ${h}.`)}return r.extra!==void 0&&Co(r.extra,"",new WeakSet,(d,h)=>{nr(t,d,h,i)}),[t,i]}catch(s){throw t!==0&&e._OrtReleaseSessionOptions(t)!==0&&yt("Can't release session options."),i.forEach(a=>e._free(a)),s}}}),yr,xi,vr,Go,Io,Fc,Hc,sc,Ue=ce(()=>{"use strict";yr=n=>{switch(n){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${n}`)}},xi=n=>{switch(n){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${n}`)}},vr=(n,e)=>{let t=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][n],i=typeof e=="number"?e:e.reduce((r,s)=>r*s,1);return t>0?Math.ceil(i*t):void 0},Go=n=>{switch(n){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${n}`)}},Io=n=>{switch(n){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${n}`)}},Fc=n=>n==="float32"||n==="float16"||n==="int32"||n==="int64"||n==="uint32"||n==="uint8"||n==="bool"||n==="uint4"||n==="int4",Hc=n=>n==="float32"||n==="float16"||n==="int32"||n==="int64"||n==="uint32"||n==="uint64"||n==="int8"||n==="uint8"||n==="bool"||n==="uint4"||n==="int4",sc=n=>{switch(n){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${n}`)}}}),Wo,Vc=ce(()=>{"use strict";Oc(),Wo=async n=>{if(typeof n=="string"){let e=await fetch(n);if(!e.ok)throw new Error(`failed to load external data file: ${n}`);let t=e.headers.get("Content-Length"),i=t?parseInt(t,10):0;if(i<1073741824)return new Uint8Array(await e.arrayBuffer());{if(!e.body)throw new Error(`failed to load external data file: ${n}, no response body.`);let r=e.body.getReader(),s;try{s=new ArrayBuffer(i)}catch(o){if(o instanceof RangeError){let l=Math.ceil(i/65536);s=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let a=0;for(;;){let{done:o,value:l}=await r.read();if(o)break;let u=l.byteLength;new Uint8Array(s,a,u).set(l),a+=u}return new Uint8Array(s,0,i)}}else return n instanceof Blob?new Uint8Array(await n.arrayBuffer()):n instanceof Uint8Array?n:new Uint8Array(n)}}),rf,sf,af,of,Gc,lf,pt,Si=ce(()=>{"use strict";Ue(),rf=["V","I","W","E","F"],sf=(n,e)=>{console.log(`[${rf[n]},${new Date().toISOString()}]${e}`)},Gc=(n,e)=>{af=n,of=e},lf=(n,e)=>{let t=Io(n),i=Io(af);t>=i&&sf(t,typeof e=="function"?e():e)},pt=(...n)=>{of&&lf(...n)}}),uf,as,Q,$o,iy,ry,sy,He=ce(()=>{"use strict";uf=class{static calcMatMulShape(n,e){return n[1]!==e[0]?void 0:[n[0],e[1]]}},as=class{static calcShape(n,e,t=!1){let i=n.length,r=e.length;if(i===0)return e;if(r===0)return n;let s=Math.max(n.length,e.length),a=new Array(s);if(t){if(i<2||r<2)return;let o=uf.calcMatMulShape([n[i-2],n[i-1]],[e[r-2],e[r-1]]);if(o===void 0)return;[a[s-2],a[s-1]]=o}for(let o=t?3:1;o<=s;o++){let l=i-o<0?1:n[i-o],u=r-o<0?1:e[r-o];if(l!==u&&l>1&&u>1)return;let c=Math.max(l,u);if(l&&u)a[s-o]=Math.max(l,u);else{if(c>1)return;a[s-o]=0}}return a}static isValidBroadcast(n,e){let t=n.length,i=e.length;if(t>i)return!1;for(let r=1;r<=t;r++)if(n[t-r]!==1&&n[t-r]!==e[i-r])return!1;return!0}},Q=class wo{static size(e){return wo.getSizeFromDimensionRange(e,0,e.length)}static convertShape(e,t=4){let i=e.length;if(i===0)return[];let r=new Array(i),s=i-1;for(;s>=0;){if(e[s]%t===0){r[s]=e[s]/t;break}if(t%e[s]!==0)throw new Error("cannot convert shape");r[s]=1,t/=e[s],s--}for(s--;s>=0;s--)r[s]=e[s];return r}static sizeFromDimension(e,t){if(t<0||t>e.length)throw new Error(`invalid dimension of ${t} for sizeFromDimension as Tensor has ${e.length} dimensions.`);return wo.getSizeFromDimensionRange(e,t,e.length)}static sizeToDimension(e,t){if(t<0||t>e.length)throw new Error(`invalid dimension of ${t} for sizeToDimension as Tensor has ${e.length} dimensions.`);return wo.getSizeFromDimensionRange(e,0,t)}static getSizeFromDimensionRange(e,t,i){let r=1;for(let s=t;s<i;s++){if(e[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");r*=Number(e[s])}return r}static computeStrides(e){let t=e.length;if(t===0)return[];if(t===1)return[1];let i=new Array(t);i[t-1]=1,i[t-2]=e[t-1];for(let r=t-3;r>=0;--r)i[r]=i[r+1]*e[r+1];return i}static normalizeAxis(e,t){if(e<-t&&e>=t)throw new Error("unsupported axis for this operation.");return e<0?e+t:e}static normalizeAxes(e,t){return e.map(i=>this.normalizeAxis(i,t??e.length))}static sortBasedOnPerm(e,t){return t?t.map(i=>e[i]):e.slice().reverse()}static padShape(e,t){let i=e.length;return e.map((r,s)=>r+t[s]+t[s+i])}static areEqual(e,t){return e.length!==t.length?!1:e.every((i,r)=>i===t[r])}},$o=class Oi{static adjustPoolAttributes(e,t,i,r,s,a){if(!e&&i.length!==t.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(e)for(let o=0;o<t.length-2;o++)o>=i.length?i.push(t[o+2]):i[o]=t[o+2];for(let o=0;o<i.length;o++)if(o<r.length){if(r[o]<0)throw new Error("strides should be greater than or equal to 1")}else r.push(1);for(let o=0;o<i.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<i.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<i.length;o++){if(i[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=i[o]||a[o+i.length]>=i[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(e,t,i,r,s,a,o){if(o){if(s.length!==2*(e.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(t.length!==e.length-2)throw new Error("length of strides should be the length of data dimensions");if(r.length!==e.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<e.length-2;l++)Oi.adjustPadAndReturnShape(e[l+(a?1:2)],t[l],i[l],r[l],s,l,l+e.length-2,o)}}static computePoolOutputShape(e,t,i,r,s,a,o,l=0){if(t.length<=0)throw new Error("input shape must be of size greater than 0");let u=[t[0],t[1]];return Oi.computeShapeHelper(e,t,u,i,r,s,a,o,l),u}static computeConvOutputShape(e,t,i,r,s,a,o){if(e.length<=0||t.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[e[0],t[0]];return Oi.computeShapeHelper(!1,e,l,i,r,s,a,o),l}static computeShapeHelper(e,t,i,r,s,a,o,l,u=0){if(e)for(let c=0;c<t.length-2;c++)i.push(1);else for(let c=0;c<t.length-2;c++)i.push(Oi.adjustPadAndReturnShape(t[c+2],r[c],s[c],a[c],o,c,c+t.length-2,l,u))}static computeOutputSize(e,t,i,r,s){let a=Math.floor(e/t)+1;return s===1&&(a=Math.ceil(e/t)+1,(a-1)*t>=i+r&&(a-=1)),a}static adjustPadAndReturnShape(e,t,i,r,s,a,o,l,u=0){let c=i*(r-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return s[a]=0,s[o]=0,Oi.computeOutputSize(e-c,t,e,0,u);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let d=(Math.floor((e+t-1)/t)-1)*t+r-e;return s[a]=Math.floor(l==="SAME_LOWER"?(d+1)/2:d/2),s[o]=d-s[a],Oi.computeOutputSize(e+s[a]+s[o]-c,t,e,s[a],u)}default:throw new Error("Unsupported AutoPad type")}else return Oi.computeOutputSize(e+s[a]+s[o]-c,t,e,s[a],u)}},iy=class{static getShapeOfGemmResult(n,e,t,i,r){if(n.length!==2||t.length!==2)throw new Error("shape need to be of size 2");let s,a,o;e?(s=n[1],a=n[0]):(s=n[0],a=n[1]);let l=-1;if(i?(o=t[0],l=1):(o=t[1],l=0),t[l]!==a)throw new Error("dimension mismatch");if(s<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(r&&!as.isValidBroadcast(r,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,a]}},ry=-34028234663852886e22,sy=34028234663852886e22}),Wc,ay=ce(()=>{"use strict";Ue(),Wc=(n,e)=>new(Go(e))(n)}),Cl,cf,Il,df,$l,hf,Pl,Ll,Dl,ff,oy,y1=ce(()=>{"use strict";Ue(),Si(),Cl=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),cf=(n,e)=>{if(e==="int32")return n;let t=Cl.get(e);if(!t)throw new Error(`WebNN backend does not support data type: ${e}`);let i=t/8;if(n.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let r=n.byteLength/i,s=new(Go(e))(n.buffer,n.byteOffset,r);switch(e){case"int64":case"uint64":{let a=new Int32Array(r);for(let o=0;o<r;o++){let l=s[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[o]=Number(l)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(e==="uint32"&&s.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(s,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${e} to 'int32'`)}},Il=(n,e)=>{if(e==="int32")return n;if(n.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let t=n.byteLength/4,i=new Int32Array(n.buffer,n.byteOffset,t);switch(e){case"int64":{let r=BigInt64Array.from(i,BigInt);return new Uint8Array(r.buffer)}case"uint64":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let r=BigUint64Array.from(i,BigInt);return new Uint8Array(r.buffer)}case"int8":{if(i.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let r=Int8Array.from(i,Number);return new Uint8Array(r.buffer)}case"uint8":{if(i.some(r=>r<0||r>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let r=Uint32Array.from(i,Number);return new Uint8Array(r.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${e}`)}},df=1,$l=()=>df++,hf=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Pl=(n,e)=>{let t=Cl.get(n);if(!t)throw new Error(`WebNN backend does not support data type: ${n}`);return e.length>0?Math.ceil(e.reduce((i,r)=>i*r)*t/8):0},Ll=class{constructor(n){this.isDataConverted=!1;let{sessionId:e,context:t,tensor:i,dataType:r,shape:s,fallbackDataType:a}=n;this.sessionId=e,this.mlContext=t,this.mlTensor=i,this.dataType=r,this.tensorShape=s,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Pl(this.dataType,this.tensorShape)}destroy(){pt("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(n){this.mlContext.writeTensor(this.mlTensor,n)}async read(n){if(this.fallbackDataType){let e=await this.mlContext.readTensor(this.mlTensor),t=Il(new Uint8Array(e),this.dataType);if(n){(n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength)).set(t);return}else return new Uint8Array(t).buffer}else return n?this.mlContext.readTensor(this.mlTensor,n):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(n,e,t){return this.mlContext===n&&this.dataType===e&&this.tensorShape.length===t.length&&this.tensorShape.every((i,r)=>i===t[r])}setIsDataConverted(n){this.isDataConverted=n}},Dl=class{constructor(n,e){this.tensorManager=n,this.wrapper=e}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(n,e,t,i){let r=this.tensorManager.getMLContext(n),s=this.tensorManager.getMLOpSupportLimits(n),a;if(!s?.input.dataTypes.includes(e)){if(a=hf.get(e),!a||!s?.input.dataTypes.includes(a))throw new Error(`WebNN backend does not support data type: ${e}`);pt("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${e} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(r,e,t))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Pl(e,t))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(n,e,t,o,!0,!0,a),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(n){let e=n;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")e=cf(n,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(n.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else pt("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(n){if(this.activeUpload){let e=this.wrapper?.isDataConverted?Il(this.activeUpload,this.wrapper?.type):this.activeUpload;if(n){n instanceof ArrayBuffer?new Uint8Array(n).set(e):new Uint8Array(n.buffer,n.byteOffset,n.byteLength).set(e);return}else return e.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return n?this.wrapper.read(n):this.wrapper.read()}},ff=class{constructor(n){this.backend=n,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(n){let e=this.backend.getMLContext(n);if(!e)throw new Error("MLContext not found for session.");return e}getMLOpSupportLimits(n){return this.backend.getMLOpSupportLimits(n)}reserveTensorId(){let n=$l();return this.tensorTrackersById.set(n,new Dl(this)),n}releaseTensorId(n){let e=this.tensorTrackersById.get(n);e&&(this.tensorTrackersById.delete(n),e.tensorWrapper&&this.releaseTensor(e.tensorWrapper))}async ensureTensor(n,e,t,i,r){pt("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${e}, dataType: ${t}, shape: ${i}, copyOld: ${r}}`);let s=this.tensorTrackersById.get(e);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(n,t,i,r)}upload(n,e){let t=this.tensorTrackersById.get(n);if(!t)throw new Error("Tensor not found.");t.upload(e)}async download(n,e){pt("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${n}, dstBuffer: ${e?.byteLength}}`);let t=this.tensorTrackersById.get(n);if(!t)throw new Error("Tensor not found.");return t.download(e)}releaseTensorsForSession(n){for(let e of this.freeTensors)e.sessionId===n&&e.destroy();this.freeTensors=this.freeTensors.filter(e=>e.sessionId!==n)}registerTensor(n,e,t,i){let r=this.getMLContext(n),s=$l(),a=new Ll({sessionId:n,context:r,tensor:e,dataType:t,shape:i});return this.tensorTrackersById.set(s,new Dl(this,a)),this.externalTensors.add(a),s}async getCachedTensor(n,e,t,i,r,s,a){let o=this.getMLContext(n);for(let[u,c]of this.freeTensors.entries())if(c.canReuseTensor(o,e,t)){pt("verbose",()=>`[WebNN] Reusing tensor {dataType: ${e}, ${a?`fallbackDataType: ${a},`:""} shape: ${t}`);let d=this.freeTensors.splice(u,1)[0];return d.sessionId=n,d}pt("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${e}, ${a?`fallbackDataType: ${a},`:""} shape: ${t}}`);let l=await o.createTensor({dataType:a??e,shape:t,dimensions:t,usage:i,writable:r,readable:s});return new Ll({sessionId:n,context:o,tensor:l,dataType:e,shape:t,fallbackDataType:a})}releaseTensor(n){this.externalTensors.has(n)&&this.externalTensors.delete(n),this.freeTensors.push(n)}},oy=(...n)=>new ff(...n)}),Ds,pf,ly,v1=ce(()=>{"use strict";Ue(),Cr(),ay(),y1(),Si(),Ds=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),pf=(n,e)=>{if(n===e)return!0;if(n===void 0||e===void 0)return!1;let t=Object.keys(n).sort(),i=Object.keys(e).sort();return t.length===i.length&&t.every((r,s)=>r===i[s]&&n[r]===e[r])},ly=class{constructor(n){this.tensorManager=oy(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Gc(n.logLevel,!!n.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(n){pt("verbose",()=>`[WebNN] onRunStart {sessionId: ${n}}`),this.activeSessionId=n}onRunEnd(n){pt("verbose",()=>`[WebNN] onRunEnd {sessionId: ${n}}`);let e=this.temporarySessionTensorIds.get(n);if(e){for(let t of e)pt("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${t}}`),this.tensorManager.releaseTensorId(t);this.temporarySessionTensorIds.delete(n),this.activeSessionId=void 0}}async createMLContext(n){if(n instanceof GPUDevice){let t=this.mlContextCache.findIndex(i=>i.gpuDevice===n);if(t!==-1)return this.mlContextCache[t].mlContext;{let i=await navigator.ml.createContext(n);return this.mlContextCache.push({gpuDevice:n,mlContext:i}),i}}else if(n===void 0){let t=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(t!==-1)return this.mlContextCache[t].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let e=this.mlContextCache.findIndex(t=>pf(t.options,n));if(e!==-1)return this.mlContextCache[e].mlContext;{let t=await navigator.ml.createContext(n);return this.mlContextCache.push({options:n,mlContext:t}),t}}registerMLContext(n,e){this.mlContextBySessionId.set(n,e);let t=this.sessionIdsByMLContext.get(e);t||(t=new Set,this.sessionIdsByMLContext.set(e,t)),t.add(n),this.mlOpSupportLimitsBySessionId.has(n)||this.mlOpSupportLimitsBySessionId.set(n,e.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(n,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(n,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(n){this.sessionGraphInputs.delete(n),this.sessionGraphOutputs.delete(n);let e=this.mlContextBySessionId.get(n);if(!e)return;this.tensorManager.releaseTensorsForSession(n),this.mlContextBySessionId.delete(n),this.mlOpSupportLimitsBySessionId.delete(n);let t=this.sessionIdsByMLContext.get(e);if(t.delete(n),t.size===0){this.sessionIdsByMLContext.delete(e);let i=this.mlContextCache.findIndex(r=>r.mlContext===e);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(n){return this.mlContextBySessionId.get(n)}getMLOpSupportLimits(n){return this.mlOpSupportLimitsBySessionId.get(n)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(n){pt("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n)}async ensureTensor(n,e,t,i,r){let s=Ds.get(t);if(!s)throw new Error(`Unsupported ONNX data type: ${t}`);return this.tensorManager.ensureTensor(n??this.currentSessionId,e,s,i,r)}async createTemporaryTensor(n,e,t){pt("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${e}, shape: ${t}}`);let i=Ds.get(e);if(!i)throw new Error(`Unsupported ONNX data type: ${e}`);let r=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(n,r,i,t,!1);let s=this.temporarySessionTensorIds.get(n);return s?s.push(r):this.temporarySessionTensorIds.set(n,[r]),r}uploadTensor(n,e){if(!Mt().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");pt("verbose",()=>`[WebNN] uploadTensor {tensorId: ${n}, data: ${e.byteLength}}`),this.tensorManager.upload(n,e)}async downloadTensor(n,e){return this.tensorManager.download(n,e)}createMLTensorDownloader(n,e){return async()=>{let t=await this.tensorManager.download(n);return Wc(t,e)}}registerMLTensor(n,e,t,i){let r=Ds.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let s=this.tensorManager.registerTensor(n,e,r,i);return pt("verbose",()=>`[WebNN] registerMLTensor {tensor: ${e}, dataType: ${r}, dimensions: ${i}} -> {tensorId: ${s}}`),s}registerGraphInput(n){this.temporaryGraphInputs.push(n)}registerGraphOutput(n){this.temporaryGraphOutputs.push(n)}isGraphInput(n,e){let t=this.sessionGraphInputs.get(n);return t?t.includes(e):!1}isGraphOutput(n,e){let t=this.sessionGraphOutputs.get(n);return t?t.includes(e):!1}isGraphInputOutputTypeSupported(n,e,t=!0){let i=Ds.get(yr(e)),r=this.mlOpSupportLimitsBySessionId.get(n);return typeof i>"u"?!1:t?!!r?.input.dataTypes.includes(i):!!r?.output.dataTypes.includes(i)}flush(){}}}),qc=ce(()=>{"use strict"}),Nl,Na,Ua,mf,gf,Ul,ac,_f,uy,x1=ce(()=>{"use strict";Si(),qc(),Nl=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Na=[],Ua=n=>Math.ceil(Number(n)/16)*16,mf=n=>{for(let e=0;e<Na.length;e++){let t=Na[e];if(n<=t)return t}return Math.ceil(n/16)*16},gf=1,Ul=()=>gf++,ac=async(n,e,t,i)=>{let r=Ua(t),s=n.device.createBuffer({size:r,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=n.getCommandEncoder();n.endComputePass(),a.copyBufferToBuffer(e,0,s,0,r),n.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(o,0,t)),l}else return new Uint8Array(o.slice(0,t))}finally{s.destroy()}},_f=class{constructor(n){this.backend=n,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[e]of Nl)Na.push(e),this.freeBuffers.set(e,[]),this.freeUniformBuffers.set(e,[]);this.sessionCount=0}upload(n,e){let t=e.buffer,i=e.byteOffset,r=e.byteLength,s=Ua(r),a=this.storageCache.get(n);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==r)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${r}`);if(s===r&&i%4===0)this.backend.device.queue.writeBuffer(a.gpuData.buffer,0,t,i,r);else{let o=new Uint8Array(s);o.set(e),this.backend.device.queue.writeBuffer(a.gpuData.buffer,0,o,0,s)}pt("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${n})`)}memcpy(n,e){let t=this.storageCache.get(n);if(!t)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(e);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(t.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let r=Ua(t.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(t.gpuData.buffer,0,i.gpuData.buffer,0,r)}registerExternalBuffer(n,e,t){let i;if(t){if(i=t[0],n===t[1])return pt("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${e}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Ul();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:n},originalSize:e}),pt("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${e}) => id=${i}, registered.`),i}unregisterExternalBuffer(n){n!==void 0&&(this.storageCache.delete(n),pt("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${n}`))}create(n,e=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let t=mf(n),i,r=(e&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(e&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(r||s){let o=(r?this.freeBuffers:this.freeUniformBuffers).get(t);o?o.length>0?i=o.pop():i=this.backend.device.createBuffer({size:t,usage:e}):i=this.backend.device.createBuffer({size:t,usage:e})}else i=this.backend.device.createBuffer({size:t,usage:e});let a={id:Ul(),type:0,buffer:i};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(n)}),pt("verbose",()=>`[WebGPU] GpuDataManager.create(size=${n}) => id=${a.id}`),a}get(n){return this.storageCache.get(n)?.gpuData}release(n){let e=typeof n=="bigint"?Number(n):n,t=this.storageCache.get(e);if(!t){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return pt("verbose",()=>`[WebGPU] GpuDataManager.release(id=${e}), gpuDataId=${t.gpuData.id}`),this.storageCache.delete(e),this.buffersPending.push(t.gpuData.buffer),t.originalSize}async download(n,e){let t=this.storageCache.get(Number(n));if(!t)throw new Error("data does not exist");await ac(this.backend,t.gpuData.buffer,t.originalSize,e)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let n of this.buffersPending){let e=Nl.get(n.size);if((n.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let t=this.freeBuffers.get(n.size)||[];e===void 0||t.length>=e?n.destroy():t.push(n)}else if((n.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let t=this.freeUniformBuffers.get(n.size)||[];e===void 0||t.length>=e?n.destroy():t.push(n)}else n.destroy()}this.buffersPending=[]}else{let n=this.capturedPendingBuffers.get(this.backend.currentSessionId);n||(n=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,n));for(let e of this.buffersPending)n.push(e);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(n=>{n.forEach(e=>{e.destroy()})}),this.freeUniformBuffers.forEach(n=>{n.forEach(e=>{e.destroy()})}),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(n=>{n.forEach(e=>{e.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(n){let e=this.capturedPendingBuffers.get(n);e&&(e.forEach(t=>{t.destroy()}),this.capturedPendingBuffers.delete(n)),this.sessionCount-=1,this.sessionCount===0&&(pt("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(t=>{t.gpuData.buffer.destroy()}),this.storageCache=new Map)}},uy=(...n)=>new _f(...n)}),yf,xt,Ft=ce(()=>{"use strict";yf=class{constructor(n){Object.assign(this,n)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(n=>`${this[n]}`).join(";")),this.key}},xt=n=>new yf(n)}),os,Oa,Kt,Xt,Le,zt,oc,es,Xi,Pe,Ns,se,Ae,cy,Xc,vf,dy,Ge=ce(()=>{"use strict";Ue(),He(),os=64,Oa=(n,e)=>{if(e===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(n)){case 10:return e>1?`vec${e}<f16>`:"f16";case 1:return e>1?`vec${e}<f32>`:"f32";case 6:return e>1?`vec${e}<i32>`:"i32";case 12:return e>1?`vec${e}<u32>`:"u32";case 7:if(e>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(e>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(e!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${n}`)}},Kt=(n,e=1)=>{let t=Oa(n,e);return typeof t=="string"?t:t[0]},Xt=(n,e=1)=>{let t=Oa(n,e);return typeof t=="string"?t:t[1]},Le=(...n)=>{let e=[];return n.forEach(t=>{t.length!==0&&e.push({type:12,data:t},{type:12,data:Q.computeStrides(t)})}),e},zt=n=>n%4===0?4:n%2===0?2:1,oc=(n="f32",e,t="0")=>!e||e===1?`${n}(${t})`:`vec${e}<${n}>(${t})`,es=(n,e,t)=>n==="f32"?t:e===1?`f32(${t})`:`vec${e}<f32>(${t})`,Xi=(n,e)=>e===4?`(${n}.x + ${n}.y + ${n}.z + ${n}.w)`:e===2?`(${n}.x + ${n}.y)`:e===3?`(${n}.x + ${n}.y + ${n}.z)`:n,Pe=(n,e,t,i)=>n.startsWith("uniforms.")&&t>4?typeof e=="string"?i==="f16"?`${n}[(${e}) / 8][(${e}) % 8 / 4][(${e}) % 8 % 4]`:`${n}[(${e}) / 4][(${e}) % 4]`:i==="f16"?`${n}[${Math.floor(e/8)}][${Math.floor(e%8/4)}][${e%8%4}]`:`${n}[${Math.floor(e/4)}][${e%4}]`:t>1?`${n}[${e}]`:n,Ns=(n,e,t,i,r)=>{let s=typeof t=="number",a=s?t:t.length,o=[...new Array(a).keys()],l=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,u=Oa(e,r),c=typeof u=="string"?u:u[1],d=typeof u=="string"?u:u[0],h={indices:l,value:c,storage:d,tensor:e},f=Y=>typeof Y=="string"?Y:`${Y}u`,g={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=s?"uniforms.":"",_=`${y}${n}_shape`,p=`${y}${n}_strides`,x="";for(let Y=0;Y<a-1;Y++)x+=`
    let dim${Y} = current / ${Pe(p,Y,a)};
    let rest${Y} = current % ${Pe(p,Y,a)};
    indices[${Y}] = dim${Y};
    current = rest${Y};
    `;x+=`indices[${a-1}] = current;`;let b=a<2?"":`
  fn o2i_${n}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${x}
    return indices;
  }`,w=Y=>(g.offsetToIndices=!0,a<2?Y:`o2i_${n}(${Y})`),R=[];if(a>=2)for(let Y=a-1;Y>=0;Y--)R.push(`${Pe(p,Y,a)} * (indices[${Y}])`);let E=a<2?"":`
  fn i2o_${n}(indices: ${h.indices}) -> u32 {
    return ${R.join("+")};
  }`,I=Y=>(g.indicesToOffset=!0,a<2?Y:`i2o_${n}(${Y})`),T=(...Y)=>a===0?"0u":`${h.indices}(${Y.map(f).join(",")})`,C=(Y,oe)=>a<2?`${Y}`:`${Pe(Y,oe,a)}`,A=(Y,oe,de)=>a<2?`${Y}=${de};`:`${Pe(Y,oe,a)}=${de};`,k={},F=(Y,oe)=>{g.broadcastedIndicesToOffset=!0;let de=`${oe.name}broadcastedIndicesTo${n}Offset`;if(de in k)return`${de}(${Y})`;let B=[];for(let ue=a-1;ue>=0;ue--){let Te=oe.indicesGet("outputIndices",ue+oe.rank-a);B.push(`${C(p,ue)} * (${Te} % ${C(_,ue)})`)}return k[de]=`fn ${de}(outputIndices: ${oe.type.indices}) -> u32 {
             return ${B.length>0?B.join("+"):"0u"};
           }`,`${de}(${Y})`},U=(Y,oe)=>(()=>{if(h.storage===h.value)return`${n}[${Y}]=${oe};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${n}[${Y}]=vec2<u32>(u32(${oe}), select(0u, 0xFFFFFFFFu, ${oe} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${n}[${Y}]=vec2<u32>(u32(${oe}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${n}[${Y}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${oe}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),D=Y=>(()=>{if(h.storage===h.value)return`${n}[${Y}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${n}[${Y}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${n}[${Y}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${n}[${Y}] & 0xFFu), bool(${n}[${Y}] & 0xFF00u), bool(${n}[${Y}] & 0xFF0000u), bool(${n}[${Y}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),z=a<2?"":`
  fn get_${n}ByIndices(indices: ${h.indices}) -> ${c} {
    return ${D(`i2o_${n}(indices)`)};
  }`,K=a<2?"":(()=>{let Y=o.map(de=>`d${de}: u32`).join(", "),oe=o.map(de=>`d${de}`).join(", ");return`
  fn get_${n}(${Y}) -> ${c} {
    return get_${n}ByIndices(${T(oe)});
  }`})(),q=(...Y)=>{if(Y.length!==a)throw new Error(`indices length must be ${a}`);let oe=Y.map(f).join(",");return a===0?D("0u"):a===1?D(oe[0]):(g.get=!0,g.getByIndices=!0,g.indicesToOffset=!0,`get_${n}(${oe})`)},G=Y=>a<2?D(Y):(g.getByIndices=!0,g.indicesToOffset=!0,`get_${n}ByIndices(${Y})`),ie=a<2?"":`
  fn set_${n}ByIndices(indices: ${h.indices}, value: ${c}) {
    ${U(`i2o_${n}(indices)`,"value")}
  }`,te=a<2?"":(()=>{let Y=o.map(de=>`d${de}: u32`).join(", "),oe=o.map(de=>`d${de}`).join(", ");return`
  fn set_${n}(${Y}, value: ${c}) {
    set_${n}ByIndices(${T(oe)}, value);
  }`})();return{impl:()=>{let Y=[],oe=!1;return g.offsetToIndices&&(Y.push(b),oe=!0),g.indicesToOffset&&(Y.push(E),oe=!0),g.broadcastedIndicesToOffset&&(Object.values(k).forEach(de=>Y.push(de)),oe=!0),g.set&&(Y.push(te),oe=!0),g.setByIndices&&(Y.push(ie),oe=!0),g.get&&(Y.push(K),oe=!0),g.getByIndices&&(Y.push(z),oe=!0),!s&&oe&&Y.unshift(`const ${_} = ${h.indices}(${t.join(",")});`,`const ${p} = ${h.indices}(${Q.computeStrides(t).join(",")});`),Y.join(`
`)},type:h,offsetToIndices:w,indicesToOffset:I,broadcastedIndicesToOffset:F,indices:T,indicesGet:C,indicesSet:A,set:(...Y)=>{if(Y.length!==a+1)throw new Error(`indices length must be ${a}`);let oe=Y[a];if(typeof oe!="string")throw new Error("value must be string");let de=Y.slice(0,a).map(f).join(",");return a===0?U("0u",oe):a===1?U(de[0],oe):(g.set=!0,g.setByIndices=!0,g.indicesToOffset=!0,`set_${n}(${de}, ${oe})`)},setByOffset:U,setByIndices:(Y,oe)=>a<2?U(Y,oe):(g.setByIndices=!0,g.indicesToOffset=!0,`set_${n}ByIndices(${Y}, ${oe});`),get:q,getByOffset:D,getByIndices:G,usage:i,name:n,strides:p,shape:_,rank:a}},se=(n,e,t,i=1)=>Ns(n,e,t,"input",i),Ae=(n,e,t,i=1)=>Ns(n,e,t,"output",i),cy=(n,e,t)=>Ns(n,e,t,"atomicOutput",1),Xc=(n,e,t,i=1)=>Ns(n,e,t,"internal",i),vf=class{constructor(n,e){this.normalizedDispatchGroup=n,this.limits=e,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(n){return`if (global_idx >= ${typeof n=="number"?`${n}u`:n}) { return; }`}mainStart(n=os){let e=typeof n=="number"?n:n[0],t=typeof n=="number"?1:n[1],i=typeof n=="number"?1:n[2];if(e>this.limits.maxComputeWorkgroupSizeX||t>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${e}, ${t}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(e*t*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${e}, ${t}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let r=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=r?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,a=r?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${e*t*i}u + local_idx;`;return`@compute @workgroup_size(${e}, ${t}, ${i})
  fn main(${s}) {
    ${a}
  `}appendVariableUniforms(n){n.rank!==0&&(n.shape.startsWith("uniforms.")&&this.uniforms.push({name:n.shape.replace("uniforms.",""),type:"u32",length:n.rank}),n.strides.startsWith("uniforms.")&&this.uniforms.push({name:n.strides.replace("uniforms.",""),type:"u32",length:n.rank}))}declareVariable(n,e){if(n.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(n),this.appendVariableUniforms(n);let t=n.usage==="input"?"read":"read_write",i=n.usage==="atomicOutput"?"atomic<i32>":n.type.storage;return`@group(0) @binding(${e}) var<storage, ${t}> ${n.name}: array<${i}>;`}declareVariables(...n){return n.map(e=>this.declareVariable(e,this.variableIndex++)).join(`
`)}registerInternalVariable(n){if(n.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(n),this.appendVariableUniforms(n)}registerInternalVariables(...n){return n.forEach(e=>this.registerInternalVariable(e)),this}registerUniform(n,e,t=1){return this.uniforms.push({name:n,type:e,length:t}),this}registerUniforms(n){return this.uniforms=this.uniforms.concat(n),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let n=[];for(let{name:e,type:t,length:i}of this.uniforms)if(i&&i>4)t==="f16"?n.push(`@align(16) ${e}:array<mat2x4<${t}>, ${Math.ceil(i/8)}>`):n.push(`${e}:array<vec4<${t}>, ${Math.ceil(i/4)}>`);else{let r=i==null||i===1?t:`vec${i}<${t}>`;n.push(`${e}:${r}`)}return`
      struct Uniforms { ${n.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(n=>n.impl()).join(`
`)+this.internalVariables.map(n=>n.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let n=e=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(e)];return this.uniforms.map(e=>[n(e.type),e.length??1])}},dy=(n,e)=>new vf(n,e)}),xf,Ol,bf,wf,Sf,Mf,Tn,hy,fy,Yi=ce(()=>{"use strict";Ue(),He(),Ft(),Ge(),xf=(n,e)=>{if(!n||n.length!==1)throw new Error("Transpose requires 1 input.");if(e.length!==0&&e.length!==n[0].dims.length)throw new Error(`perm size ${e.length} does not match input rank ${n[0].dims.length}`)},Ol=(n,e)=>e.length!==0?e:[...new Array(n).keys()].reverse(),bf=(n,e)=>Q.sortBasedOnPerm(n,Ol(n.length,e)),wf=(n,e,t,i)=>{let r=`fn perm(i: ${i.type.indices}) -> ${t.type.indices} {
    var a: ${t.type.indices};`;for(let s=0;s<e;++s)r+=`a[${n[s]}]=i[${s}];`;return r+="return a;}"},Sf=(n,e)=>{let t=[],i=[];for(let r=0;r<n.length;++r)n[r]!==1&&t.push(n[r]),n[e[r]]!==1&&i.push(e[r]);return{newShape:t,newPerm:i}},Mf=(n,e)=>{let t=0;for(let i=0;i<n.length;++i)if(e[n[i]]!==1){if(n[i]<t)return!1;t=n[i]}return!0},Tn=(n,e)=>{let t=n.dataType,i=n.dims.length,r=Ol(i,e),s=bf(n.dims,r),a=n.dims,o=s,l=i<2||Mf(r,n.dims),u;if(l)return u=g=>{let y=se("input",t,a,4),_=Ae("output",t,o,4);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,_)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let g=Q.size(s);return{outputs:[{dims:s,dataType:n.dataType}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(g/4)}]}},getShaderSource:u};let{newShape:c,newPerm:d}=Sf(n.dims,r),h=Q.areEqual(d,[2,3,1]),f=Q.areEqual(d,[3,1,2]);if(c.length===2||h||f){a=h?[c[0],c[1]*c[2]]:f?[c[0]*c[1],c[2]]:c,o=[a[1],a[0]];let g=16;return u=y=>{let _=se("a",t,a.length),p=Ae("output",t,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(_,p)}
  var<workgroup> tile : array<array<${p.type.value}, ${g+1}>, ${g}>;
  ${y.mainStart([g,g,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${g} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${g}u + local_id.x;
    let input_row = workgroup_id_x * ${g}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${_.getByIndices(`${_.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${g}u + local_id.x;
    let output_row = workgroup_id_y * ${g}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${p.setByIndices(`${p.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=Q.size(s);return{outputs:[{dims:s,dataType:n.dataType}],dispatchGroup:{x:Math.ceil(o[1]/g),y:Math.ceil(o[0]/g)},programUniforms:[{type:12,data:y},...Le(a,o)]}},getShaderSource:u}}return u=g=>{let y=se("a",t,a.length),_=Ae("output",t,o.length);return`
  ${g.registerUniform("output_size","u32").declareVariables(y,_)}

  ${wf(r,i,y,_)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${_.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${_.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${e}`,inputDependencies:["rank"]},getRunData:()=>{let g=Q.size(s);return{outputs:[{dims:s,dataType:n.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...Le(a,o)]}},getShaderSource:u}},hy=(n,e)=>{xf(n.inputs,e.perm),n.compute(Tn(n.inputs[0],e.perm))},fy=n=>xt({perm:n.perm})}),Tf,Ef,Af,Rf,Cf,If,$f,Pf,Lf,Df,Ln,py,my,gy,_y,yy,vy,xy,by,wy,Sy,b1=ce(()=>{"use strict";Ue(),He(),Ge(),jc(),Yi(),Tf={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Ef={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Af={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Rf={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Cf=(n,e)=>{let t=[];for(let i=e-n;i<e;++i)t.push(i);return t},If=(n,e)=>{let t=[],i=n.length;for(let s=0;s<i;s++)e.indexOf(s)===-1&&t.push(n[s]);let r=e.map(s=>n[s]);return[t,r]},$f=(n,e)=>{let t=n.length+e.length,i=[],r=0;for(let s=0;s<t;s++)e.indexOf(s)===-1?i.push(n[r++]):i.push(1);return i},Pf=(n,e)=>{for(let t=0;t<n.length;++t)if(n[n.length-t-1]!==e-1-t)return!1;return!0},Lf=(n,e)=>{let t=[];if(!Pf(n,e)){for(let i=0;i<e;++i)n.indexOf(i)===-1&&t.push(i);n.forEach(i=>t.push(i))}return t},Df=(n,e,t,i,r,s,a)=>{let o=t[0].dims,l=Q.size(s),u=Q.size(a),c=se("_A",t[0].dataType,o),d=Ae("output",r,s),h=64;l===1&&(h=256);let f=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,g=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(c,d)}
        ${f}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Af[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${Tf[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Ef[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset("outputIndex",`${i==="mean"?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${Rf[i]})`}`)};
         }
        }`;return{name:n,shaderCache:{hint:`${e};${h}`,inputDependencies:["type"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:s,dataType:r}],dispatchGroup:{x:l},programUniforms:[{type:12,data:u}]})}},Ln=(n,e,t,i)=>{let r=n.inputs.length===1?t:lc(n.inputs,t),s=r.axes;s.length===0&&!r.noopWithEmptyAxes&&(s=n.inputs[0].dims.map((f,g)=>g));let a=Q.normalizeAxes(s,n.inputs[0].dims.length),o=a,l=n.inputs[0],u=Lf(o,n.inputs[0].dims.length);u.length>0&&(l=n.compute(Tn(n.inputs[0],u),{inputs:[0],outputs:[-1]})[0],o=Cf(o.length,l.dims.length));let[c,d]=If(l.dims,o),h=c;r.keepDims&&(h=$f(c,a)),n.compute(Df(e,r.cacheKey,[l],i,n.inputs[0].dataType,h,d),{inputs:[l]})},py=(n,e)=>{Ln(n,"ReduceMeanShared",e,"mean")},my=(n,e)=>{Ln(n,"ReduceL1Shared",e,"l1")},gy=(n,e)=>{Ln(n,"ReduceL2Shared",e,"l2")},_y=(n,e)=>{Ln(n,"ReduceLogSumExpShared",e,"logSumExp")},yy=(n,e)=>{Ln(n,"ReduceMaxShared",e,"max")},vy=(n,e)=>{Ln(n,"ReduceMinShared",e,"min")},xy=(n,e)=>{Ln(n,"ReduceProdShared",e,"prod")},by=(n,e)=>{Ln(n,"ReduceSumShared",e,"sum")},wy=(n,e)=>{Ln(n,"ReduceSumSquareShared",e,"sumSquare")},Sy=(n,e)=>{Ln(n,"ReduceLogSumShared",e,"logSum")}}),Dn,Nf,Po,lc,Nn,Uf,Of,kf,zf,Bf,Ff,Hf,Vf,Gf,Wf,Un,My,Ty,Ey,Ay,Ry,Cy,Iy,$y,Py,Ly,jc=ce(()=>{"use strict";Ue(),He(),Ft(),Ge(),b1(),Dn=n=>{if(!n||n.length===0||n.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(n.length===2&&n[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Nf=n=>["","",`var value = ${n.getByIndices("input_indices")};`,""],Po=(n,e,t,i,r,s,a=!1,o=!1)=>{let l=[],u=t[0].dims,c=u.length,d=Q.normalizeAxes(r,c),h=!o&&d.length===0;u.forEach((y,_)=>{h||d.indexOf(_)>=0?a&&l.push(1):l.push(y)});let f=l.length,g=Q.size(l);return{name:n,shaderCache:e,getShaderSource:y=>{let _=[],p=se("_A",t[0].dataType,c),x=Ae("output",s,f),b=i(p,x,d),w=b[2];for(let R=0,E=0;R<c;R++)h||d.indexOf(R)>=0?(a&&E++,w=`for(var j${R}: u32 = 0; j${R} < ${u[R]}; j${R}++) {
                  ${b[2].includes("last_index")?`let last_index = j${R};`:""}
                  ${p.indicesSet("input_indices",R,`j${R}`)}
                  ${w}
                }`):(_.push(`${p.indicesSet("input_indices",R,x.indicesGet("output_indices",E))};`),E++);return`

        ${y.registerUniform("output_size","u32").declareVariables(p,x)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${p.type.indices};
          let output_indices = ${x.offsetToIndices("global_idx")};

          ${_.join(`
`)}
          ${b[0]}       // init ops for reduce max/min
          ${b[1]}
          ${w}
          ${b[3]}
          ${b.length===4?x.setByOffset("global_idx","value"):b.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...Le(u,l)]})}},lc=(n,e)=>{let t=[];return n[1].dims[0]>0&&n[1].getBigInt64Array().forEach(i=>t.push(Number(i))),xt({axes:t,keepDims:e.keepDims,noopWithEmptyAxes:e.noopWithEmptyAxes})},Nn=(n,e,t,i)=>{let r=n.inputs,s=r.length===1?t:lc(r,t);n.compute(Po(e,{hint:s.cacheKey,inputDependencies:["rank"]},[r[0]],s.noopWithEmptyAxes&&s.axes.length===0?Nf:i,s.axes,r[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},Uf=(n,e)=>{Dn(n.inputs),Nn(n,"ReduceLogSum",e,(t,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${t.getByIndices("input_indices")};`,"value = log(value);"])},Of=(n,e)=>{Dn(n.inputs),Nn(n,"ReduceL1",e,(t,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${t.getByIndices("input_indices")});`,""])},kf=(n,e)=>{Dn(n.inputs),Nn(n,"ReduceL2",e,(t,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${t.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},zf=(n,e)=>{Dn(n.inputs),Nn(n,"ReduceLogSumExp",e,(t,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${t.getByIndices("input_indices")});`,"value = log(value);"])},Bf=(n,e)=>{Dn(n.inputs),Nn(n,"ReduceMax",e,(t,i,r)=>{let s=[];for(let a=0;a<t.rank;a++)(r.indexOf(a)>=0||r.length===0)&&s.push(t.indicesSet("input_indices",a,0));return[`${s.join(`
`)}`,`var value = ${t.getByIndices("input_indices")};`,`value = max(value, ${t.getByIndices("input_indices")});`,""]})},Ff=(n,e)=>{Dn(n.inputs),Nn(n,"ReduceMean",e,(t,i,r)=>{let s=1;for(let a=0;a<t.rank;a++)(r.indexOf(a)>=0||r.length===0)&&(s*=n.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${t.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${s});`]})},Hf=(n,e)=>{Dn(n.inputs),Nn(n,"ReduceMin",e,(t,i,r)=>{let s=[];for(let a=0;a<t.rank;a++)(r.indexOf(a)>=0||r.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${t.getByIndices("input_indices")};`,`value = min(value, ${t.getByIndices("input_indices")});`,""]})},Vf=(n,e)=>{Dn(n.inputs),Nn(n,"ReduceProd",e,(t,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${t.getByIndices("input_indices")};`,""])},Gf=(n,e)=>{Dn(n.inputs),Nn(n,"ReduceSum",e,(t,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${t.getByIndices("input_indices")};`,""])},Wf=(n,e)=>{Dn(n.inputs),Nn(n,"ReduceSumSquare",e,(t,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${t.getByIndices("input_indices")}; value += t * t;`,""])},Un=(n,e,t)=>{if(e.length===0)return t;let i=1,r=1;for(let s=0;s<e.length;s++)e.indexOf(s)===-1?i*=n[s]:r*=n[s];return r<32&&i>1024},My=(n,e)=>{Un(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?Ff(n,e):py(n,e)},Ty=(n,e)=>{Un(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?Of(n,e):my(n,e)},Ey=(n,e)=>{Un(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?kf(n,e):gy(n,e)},Ay=(n,e)=>{Un(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?zf(n,e):_y(n,e)},Ry=(n,e)=>{Un(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?Bf(n,e):yy(n,e)},Cy=(n,e)=>{Un(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?Hf(n,e):vy(n,e)},Iy=(n,e)=>{Un(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?Vf(n,e):xy(n,e)},$y=(n,e)=>{Un(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?Gf(n,e):by(n,e)},Py=(n,e)=>{Un(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?Wf(n,e):wy(n,e)},Ly=(n,e)=>{Un(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?Uf(n,e):Sy(n,e)}}),kl,Dy,Ny,uc,w1=ce(()=>{"use strict";Ue(),Ft(),jc(),kl=n=>{if(!n||n.length===0||n.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(n[0].dataType!==1)throw new Error("Invalid input type.")},Dy=(n,e)=>{kl(n.inputs);let t=(i,r,s)=>{let a=[];for(let o=0;o<i.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${e.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",r.setByOffset("global_idx","best_index")]};n.compute(Po("ArgMin",{hint:e.cacheKey,inputDependencies:["rank"]},[n.inputs[0]],t,[e.axis],7,e.keepDims),{inputs:[0]})},Ny=(n,e)=>{kl(n.inputs);let t=(i,r,s)=>{let a=[];for(let o=0;o<i.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${e.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",r.setByOffset("global_idx","best_index")]};n.compute(Po("argMax",{hint:e.cacheKey,inputDependencies:["rank"]},[n.inputs[0]],t,[e.axis],7,e.keepDims),{inputs:[0]})},uc=n=>xt(n)}),qf,ka,Xf,jf,Kf,da,Yf,Uy,Kc=ce(()=>{"use strict";Ue(),He(),qc(),Ge(),qf=(n,e)=>{let t=n[0],i=n[1],r=n[2],s=n[3],a=n[4],o=n[5];if(a&&o)throw new Error("Attention cannot have both past and attention_bias");if(t.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=t.dims[0],u=t.dims[1],c=t.dims[2];if(r.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(r.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let d=r.dims[0]/3,h=d,f=h;if(e.qkvHiddenSizes.length>0){if(e.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let b of e.qkvHiddenSizes)if(b%e.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");d=e.qkvHiddenSizes[0],h=e.qkvHiddenSizes[1],f=e.qkvHiddenSizes[2]}let g=u;if(d!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(r.dims[0]!==d+h+f)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(a){if(h!==f)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==e.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==h/e.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');e.pastPresentShareBuffer||(y=a.dims[3])}let _=g+y,p=-1,x=0;if(s)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==e.numHeads||o.dims[2]!==u||o.dims[3]!==_)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:u,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:_,maxSequenceLength:p,inputHiddenSize:c,hiddenSize:d,vHiddenSize:f,headSize:Math.floor(d/e.numHeads),vHeadSize:Math.floor(f/e.numHeads),numHeads:e.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:e.maskFilterValue,maskType:x,scale:e.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},ka=(n,e,t)=>e&&n?`
      let total_sequence_length_input = u32(${e.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${n?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${t?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Xf=(n,e,t,i,r,s,a,o)=>{let l=zt(a?1:s),u=64,c=s/l;c<u&&(u=32);let d=Math.ceil(s/l/u),h=[{type:12,data:e},{type:12,data:t},{type:12,data:i},{type:12,data:r},{type:12,data:c},{type:12,data:d}],f=Kt(n.dataType,l),g=Xt(1,l),y=["type"];a&&y.push("type"),o&&y.push("type");let _=p=>{let x=Ae("x",n.dataType,n.dims,l),b=[x],w=a?se("seq_lens",a.dataType,a.dims):void 0;w&&b.push(w);let R=o?se("total_sequence_length_input",o.dataType,o.dims):void 0;R&&b.push(R);let E=Xt(n.dataType),I=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${u}>;
  var<workgroup> thread_sum: array<f32, ${u}>;
  ${p.registerUniforms(I).declareVariables(...b)}
  ${p.mainStart([u,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${ka(w,R,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${u}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${a?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${g}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${g}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${u}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${g}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${g}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${u}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${x.type.value}(${E}(1.0) / ${E}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${g}(x[offset + i]);
        x[offset + i] = ${x.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${x.type.value}(${E}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${u};${f};${l}`,inputDependencies:y},getShaderSource:_,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:r,z:e*t},programUniforms:h})}},jf=(n,e,t,i,r,s,a,o,l)=>{let u=a+s.kvSequenceLength,c=[s.batchSize,s.numHeads,s.sequenceLength,u],d=n>1&&i,h=s.kvNumHeads?s.kvNumHeads:s.numHeads,f=d?[s.batchSize,h,u,s.headSize]:void 0,g=s.nReps?s.nReps:1,y=s.scale===0?1/Math.sqrt(s.headSize):s.scale,_=zt(s.headSize),p=s.headSize/_,x=12,b={x:Math.ceil(u/x),y:Math.ceil(s.sequenceLength/x),z:s.batchSize*s.numHeads},w=[{type:12,data:s.sequenceLength},{type:12,data:p},{type:12,data:u},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:y},{type:12,data:a},{type:12,data:s.kvSequenceLength},{type:12,data:g}],R=d&&i&&Q.size(i.dims)>0,E=["type","type"];R&&E.push("type"),r&&E.push("type"),o&&E.push("type"),l&&E.push("type");let I=[{dims:c,dataType:e.dataType,gpuDataType:0}];d&&I.push({dims:f,dataType:e.dataType,gpuDataType:0});let T=C=>{let A=se("q",e.dataType,e.dims,_),k=se("key",t.dataType,t.dims,_),F=[A,k];if(R){let ie=se("past_key",i.dataType,i.dims,_);F.push(ie)}r&&F.push(se("attention_bias",r.dataType,r.dims));let U=o?se("seq_lens",o.dataType,o.dims):void 0;U&&F.push(U);let D=l?se("total_sequence_length_input",l.dataType,l.dims):void 0;D&&F.push(D);let z=Ae("output",e.dataType,c),K=[z];d&&K.push(Ae("present_key",e.dataType,f,_));let q=Xt(1,_),G=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${x}u;

  var<workgroup> tileQ: array<${A.type.storage}, ${x*x}>;
  var<workgroup> tileK: array<${A.type.storage}, ${x*x}>;
  ${C.registerUniforms(G).declareVariables(...F,...K)}
  ${C.mainStart([x,x,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${g===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${g===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${ka(U,D,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${R&&d?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${q}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${R&&d?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${d?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${q}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(_){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${_}`)}})()};
        output[outputIdx] = ${z.type.value} (sum * uniforms.alpha) + ${r?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${_};${r!==void 0};${i!==void 0};${n}`,inputDependencies:E},getRunData:()=>({outputs:I,dispatchGroup:b,programUniforms:w}),getShaderSource:T}},Kf=(n,e,t,i,r,s,a=void 0,o=void 0)=>{let l=s+r.kvSequenceLength,u=r.nReps?r.nReps:1,c=r.vHiddenSize*u,d=n>1&&i,h=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=d?[r.batchSize,h,l,r.headSize]:void 0,g=[r.batchSize,r.sequenceLength,c],y=12,_={x:Math.ceil(r.vHeadSize/y),y:Math.ceil(r.sequenceLength/y),z:r.batchSize*r.numHeads},p=[{type:12,data:r.sequenceLength},{type:12,data:l},{type:12,data:r.vHeadSize},{type:12,data:r.numHeads},{type:12,data:r.headSize},{type:12,data:c},{type:12,data:s},{type:12,data:r.kvSequenceLength},{type:12,data:u}],x=d&&i&&Q.size(i.dims)>0,b=["type","type"];x&&b.push("type"),a&&b.push("type"),o&&b.push("type");let w=[{dims:g,dataType:e.dataType,gpuDataType:0}];d&&w.push({dims:f,dataType:e.dataType,gpuDataType:0});let R=E=>{let I=se("probs",e.dataType,e.dims),T=se("v",t.dataType,t.dims),C=[I,T];x&&C.push(se("past_value",i.dataType,i.dims));let A=a?se("seq_lens",a.dataType,a.dims):void 0;a&&C.push(A);let k=o?se("total_sequence_length_input",o.dataType,o.dims):void 0;o&&C.push(k);let F=[Ae("output",e.dataType,g)];d&&F.push(Ae("present_value",e.dataType,f));let U=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${I.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${I.type.value}, ${y*y}>;
  ${E.registerUniforms(U).declareVariables(...C,...F)}
  ${E.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${u===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${u===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${ka(A,k,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${x&&d?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${d?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${I.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${x&&d?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${d?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${n}`,inputDependencies:b},getRunData:()=>({outputs:w,dispatchGroup:_,programUniforms:p}),getShaderSource:R}},da=(n,e,t,i,r,s,a,o,l,u,c=void 0,d=void 0)=>{let h=Math.min(n.outputCount,1+(a?1:0)+(o?1:0)),f=h>1?a:void 0,g=h>1?o:void 0,y=h>1?u.pastSequenceLength:0,_=y+u.kvSequenceLength,p=l&&Q.size(l.dims)>0?l:void 0,x=[e,t];f&&Q.size(f.dims)>0&&x.push(f),p&&x.push(p),c&&x.push(c),d&&x.push(d);let b=n.compute(jf(h,e,t,f,p,u,y,c,d),{inputs:x,outputs:h>1?[-1,1]:[-1]})[0];n.compute(Xf(b,u.batchSize,u.numHeads,y,u.sequenceLength,_,c,d),{inputs:c&&d?[b,c,d]:[b],outputs:[]});let w=[b,i];g&&Q.size(g.dims)>0&&w.push(g),c&&w.push(c),d&&w.push(d),n.compute(Kf(h,b,i,g,u,y,c,d),{inputs:w,outputs:h>1?[0,2]:[0]})},Yf=(n,e)=>{let t=[e.batchSize,e.numHeads,e.sequenceLength,e.headSize],i=e.sequenceLength,r=e.inputHiddenSize,s=e.headSize,a=12,o={x:Math.ceil(e.headSize/a),y:Math.ceil(e.sequenceLength/a),z:e.batchSize*e.numHeads},l=[n.inputs[0],n.inputs[1],n.inputs[2]],u=[{type:12,data:i},{type:12,data:r},{type:12,data:s},{type:12,data:e.numHeads},{type:12,data:e.headSize},{type:12,data:e.hiddenSize},{type:12,data:e.hiddenSize+e.hiddenSize+e.vHiddenSize}],c=d=>{let h=Ae("output_q",l[0].dataType,t),f=Ae("output_k",l[0].dataType,t),g=Ae("output_v",l[0].dataType,t),y=se("input",l[0].dataType,l[0].dims),_=se("weight",l[1].dataType,l[1].dims),p=se("bias",l[2].dataType,l[2].dims),x=y.type.storage,b=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${x}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${x}, ${a*a}>;
  var<workgroup> tileWeightK: array<${x}, ${a*a}>;
  var<workgroup> tileWeightV: array<${x}, ${a*a}>;
  ${d.registerUniforms(b).declareVariables(y,_,p,h,f,g)}
  ${d.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${x}(0);
    var valueK = ${x}(0);
    var valueV = ${x}(0);
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
  }`};return n.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:t,dataType:n.inputs[0].dataType,gpuDataType:0},{dims:t,dataType:n.inputs[0].dataType,gpuDataType:0},{dims:t,dataType:n.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:u}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},Uy=(n,e)=>{let t=qf(n.inputs,e),[i,r,s]=Yf(n,t);return da(n,i,r,s,n.inputs[4],void 0,void 0,void 0,n.inputs[5],t)}}),Zf,Jf,Qf,Oy,S1=ce(()=>{"use strict";En(),Ue(),He(),Ft(),Ge(),Zf=(n,e)=>{if(!n||n.length!==5)throw new Error("BatchNormalization requires 5 inputs");let t=(i,r,s)=>{let a=r.length;if(a!==i.length)throw new Error(`${s}: num dimensions != ${a}`);r.forEach((o,l)=>{if(o!==i[l])throw new Error(`${s}: dim[${l}] do not match`)})};if(n[0].dims.length>1){let i=e.format==="NHWC"?e.spatial?n[0].dims.slice(-1):n[0].dims.slice(-1).concat(n[0].dims.slice(1,n[0].dims.length-1)):n[0].dims.slice(1,e.spatial?2:void 0);t(n[1].dims,i,"Invalid input scale"),t(n[2].dims,i,"Invalid input B"),t(n[3].dims,i,"Invalid input mean"),t(n[4].dims,i,"Invalid input var")}else t(n[1].dims,[1],"Invalid input scale"),t(n[2].dims,[1],"Invalid input B"),t(n[3].dims,[1],"Invalid input mean"),t(n[4].dims,[1],"Invalid input var")},Jf=(n,e)=>{let{epsilon:t,spatial:i,format:r}=e,s=n[0].dims,a=i?zt(s[s.length-1]):1,o=r==="NHWC"&&s.length>1?a:1,l=Q.size(s)/a,u=i,c=u?s.length:s,d=se("x",n[0].dataType,n[0].dims,a),h=se("scale",n[1].dataType,n[1].dims,o),f=se("bias",n[2].dataType,n[2].dims,o),g=se("inputMean",n[3].dataType,n[3].dims,o),y=se("inputVar",n[4].dataType,n[4].dims,o),_=Ae("y",n[0].dataType,c,a),p=()=>{let b="";if(i)b=`let cOffset = ${s.length===1?"0u":r==="NHWC"?`outputIndices[${s.length-1}] / ${a}`:"outputIndices[1]"};`;else if(r==="NCHW")b=`
            ${_.indicesSet("outputIndices","0","0")}
            let cOffset = ${_.indicesToOffset("outputIndices")};`;else{b=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let w=1;w<h.rank;w++)b+=`cIndices[${w}] = outputIndices[${w}];`;b+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return b},x=b=>`
  const epsilon = ${t};
  ${b.registerUniform("outputSize","u32").declareVariables(d,h,f,g,y,_)}
  ${b.mainStart()}
  ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${_.offsetToIndices(`global_idx * ${a}`)};
    ${p()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${f.getByOffset("cOffset")};
    let inputMean = ${g.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${d.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${_.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${e.epsilon}_${e.format}_${i}_${a}`,inputDependencies:u?["rank","type","type","type","type"]:void 0},getShaderSource:x,getRunData:()=>({outputs:[{dims:n[0].dims,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u?[{type:12,data:l},...Le(s)]:[{type:12,data:l}]})}},Qf=n=>xt(n),Oy=(n,e)=>{let{inputs:t,outputCount:i}=n,r=Qf({...e,outputCount:i});if(Pt.webgpu.validateInputContent&&Zf(t,r),e.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");n.compute(Jf(t,r))}}),ep,tp,ky,M1=ce(()=>{"use strict";He(),Ge(),ep=n=>{if(n[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(n[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(n[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(n[0].dims[2]!==n[1].dims[0])throw new Error("last dimension of input and bias are not the same")},tp=n=>{let e=n[0].dims,t=n[0].dims[2],i=Q.size(e)/4,r=n[0].dataType,s=se("input",r,e,4),a=se("bias",r,[t],4),o=se("residual",r,e,4),l=Ae("output",r,e,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:e,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:u=>`
  const channels = ${t}u / 4;
  ${u.declareVariables(s,a,o,l)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${s.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},ky=n=>{ep(n.inputs),n.compute(tp(n.inputs))}}),np,_t,zy,By,Fy,Hy,Vy,Gy,Wy,qy,Xy,ip,jy,Ky,Yy,Zy,ea,Jy,So,Qy,ev,tv,nv,iv,rv,sv,av,ov,lv,uv,cv,dv,hv,fv,pv,mv,zl,gv,cc,dc,_v,yv,vv,rp,sp,xv,Yc=ce(()=>{"use strict";Ue(),He(),Ft(),Ge(),np=(n,e,t,i,r,s,a)=>{let o=Math.ceil(e/4),l="";typeof r=="string"?l=`${r}(a)`:l=r("a");let u=se("inputData",t,[o],4),c=Ae("outputData",i,[o],4),d=[{name:"vec_size",type:"u32"}];return a&&d.push(...a),`
      ${n.registerUniforms(d).declareVariables(u,c)}

  ${s??""}

  ${n.mainStart()}
    ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${u.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},_t=(n,e,t,i,r,s=n.dataType,a,o)=>{let l=[{type:12,data:Math.ceil(Q.size(n.dims)/4)}];return a&&l.push(...a),{name:e,shaderCache:{hint:r,inputDependencies:["type"]},getShaderSource:u=>np(u,Q.size(n.dims),n.dataType,s,t,i,o),getRunData:u=>({outputs:[{dims:n.dims,dataType:s}],dispatchGroup:{x:Math.ceil(Q.size(u[0].dims)/64/4)},programUniforms:l})}},zy=n=>{n.compute(_t(n.inputs[0],"Abs","abs"))},By=n=>{n.compute(_t(n.inputs[0],"Acos","acos"))},Fy=n=>{n.compute(_t(n.inputs[0],"Acosh","acosh"))},Hy=n=>{n.compute(_t(n.inputs[0],"Asin","asin"))},Vy=n=>{n.compute(_t(n.inputs[0],"Asinh","asinh"))},Gy=n=>{n.compute(_t(n.inputs[0],"Atan","atan"))},Wy=n=>{n.compute(_t(n.inputs[0],"Atanh","atanh"))},qy=n=>xt(n),Xy=(n,e)=>{let t;switch(e.to){case 10:t="vec4<f16>";break;case 1:t="vec4<f32>";break;case 12:t="vec4<u32>";break;case 6:t="vec4<i32>";break;case 9:t="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${e.to}`)}n.compute(_t(n.inputs[0],"Cast",t,void 0,e.cacheKey,e.to))},ip=n=>{let e,t,i=n.length>=2&&n[1].data!==0,r=n.length>=3&&n[2].data!==0;switch(n[0].dataType){case 1:e=i?n[1].getFloat32Array()[0]:-34028234663852886e22,t=r?n[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:e=i?n[1].getUint16Array()[0]:64511,t=r?n[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return xt({min:e,max:t})},jy=(n,e)=>{let t=e||ip(n.inputs),i=Xt(n.inputs[0].dataType);n.compute(_t(n.inputs[0],"Clip",r=>`clamp(${r}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,t.cacheKey,void 0,[{type:n.inputs[0].dataType,data:t.min},{type:n.inputs[0].dataType,data:t.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Ky=n=>{n.compute(_t(n.inputs[0],"Ceil","ceil"))},Yy=n=>{n.compute(_t(n.inputs[0],"Cos","cos"))},Zy=n=>{n.compute(_t(n.inputs[0],"Cosh","cosh"))},ea=n=>xt(n),Jy=(n,e)=>{let t=Xt(n.inputs[0].dataType);n.compute(_t(n.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${t}(${e.alpha});

  fn elu_f32(a: ${t}) -> ${t} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${t}>) -> vec4<${t}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,e.cacheKey))},So=(n="f32")=>`
const r0: ${n} = 0.3275911;
const r1: ${n} = 0.254829592;
const r2: ${n} = -0.284496736;
const r3: ${n} = 1.421413741;
const r4: ${n} = -1.453152027;
const r5: ${n} = 1.061405429;

fn erf_vf32(v: vec4<${n}>) -> vec4<${n}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Qy=n=>{let e=Xt(n.inputs[0].dataType);n.compute(_t(n.inputs[0],"Erf",t=>`erf_vf32(${t})`,So(e)))},ev=n=>{n.compute(_t(n.inputs[0],"Exp","exp"))},tv=n=>{n.compute(_t(n.inputs[0],"Floor","floor"))},nv=n=>{let e=Xt(n.inputs[0].dataType);n.compute(_t(n.inputs[0],"Gelu",t=>`0.5 * ${t} * (1.0 + erf_vf32(${t} * 0.7071067811865475))`,So(e)))},iv=(n,e)=>{let t=Xt(n.inputs[0].dataType);n.compute(_t(n.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${t}>(0.0))`,`const leaky_relu_alpha_ = ${t}(${e.alpha});`,e.cacheKey))},rv=n=>{n.compute(_t(n.inputs[0],"Not",e=>`!${e}`))},sv=n=>{n.compute(_t(n.inputs[0],"Neg",e=>`-${e}`))},av=n=>{n.compute(_t(n.inputs[0],"Reciprocal",e=>`1.0/${e}`))},ov=n=>{let e=Xt(n.inputs[0].dataType);n.compute(_t(n.inputs[0],"Relu",t=>`select(vec4<${e}>(0.0), ${t}, ${t} > vec4<${e}>(0.0))`))},lv=n=>{n.compute(_t(n.inputs[0],"Sigmoid",e=>`(1.0 / (1.0 + exp(-${e})))`))},uv=n=>xt(n),cv=(n,e)=>{let t=Xt(n.inputs[0].dataType);n.compute(_t(n.inputs[0],"HardSigmoid",i=>`max(vec4<${t}>(0.0), min(vec4<${t}>(1.0), ${e.alpha} * ${i} + vec4<${t}>(${e.beta})))`,void 0,e.cacheKey))},dv=n=>{let e=Xt(n.inputs[0].dataType);n.compute(_t(n.inputs[0],"HardSwish",t=>`${t} * max(vec4<${e}>(0.0), min(vec4<${e}>(1.0), vec4<${e}>(${e}(1.0 / 6.0)) * ${t} + vec4<${e}>(0.5)))`))},hv=n=>{n.compute(_t(n.inputs[0],"Sin","sin"))},fv=n=>{n.compute(_t(n.inputs[0],"Sinh","sinh"))},pv=n=>{n.compute(_t(n.inputs[0],"Sqrt","sqrt"))},mv=n=>{n.compute(_t(n.inputs[0],"Tan","tan"))},zl=n=>`sign(${n}) * (1 - exp(-2 * abs(${n}))) / (1 + exp(-2 * abs(${n})))`,gv=n=>{n.compute(_t(n.inputs[0],"Tanh",zl))},cc=(n="f32")=>`
const fast_gelu_a: ${n} = 0.5;
const fast_gelu_b: ${n} = 0.7978845608028654;
const fast_gelu_c: ${n} = 0.035677408136300125;

fn tanh_v(v: vec4<${n}>) -> vec4<${n}> {
  return ${zl("v")};
}
`,dc=n=>`(fast_gelu_a + fast_gelu_a * tanh_v(${n} * (fast_gelu_c * ${n} * ${n} + fast_gelu_b))) * ${n}`,_v=n=>{let e=Xt(n.inputs[0].dataType);n.compute(_t(n.inputs[0],"FastGelu",dc,cc(e),void 0,n.inputs[0].dataType))},yv=(n,e)=>{let t=Xt(n.inputs[0].dataType);return n.compute(_t(n.inputs[0],"ThresholdedRelu",i=>`select(vec4<${t}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${t}>(${e.alpha});`,e.cacheKey)),0},vv=n=>{n.compute(_t(n.inputs[0],"Log","log"))},rp=(n,e)=>`
const alpha = vec4<${n}>(${e});
const one = ${n}(1.0);
const zero = ${n}(0.0);

fn quick_gelu_impl(x: vec4<${n}>) -> vec4<${n}> {
  let v = x *alpha;
  var x1 : vec4<${n}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,sp=n=>`quick_gelu_impl(${n})`,xv=(n,e)=>{let t=Xt(n.inputs[0].dataType);n.compute(_t(n.inputs[0],"QuickGelu",sp,rp(t,e.alpha),e.cacheKey,n.inputs[0].dataType))}}),ap,op,bv,T1=ce(()=>{"use strict";He(),Ge(),Yc(),ap=n=>{if(n[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(n[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(n[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(n[0].dims[2]!==n[1].dims[0])throw new Error("last dimension of input and bias are not the same")},op=n=>{let e=n[0].dims.slice();e[2]=e[2]/2;let t=se("input",n[0].dataType,n[0].dims,4),i=se("bias",n[0].dataType,[n[0].dims[2]],4),r=Ae("output",n[0].dataType,e,4),s=Q.size(e)/4,a=Kt(n[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:e,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${n[0].dims[2]/4/2}u;

  ${o.declareVariables(t,i,r)}

  ${So(a)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${r.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},bv=n=>{ap(n.inputs),n.compute(op(n.inputs))}}),lp,up,On,wv,Sv,Mv,Tv,Ev,Av,Rv,Cv,Iv,$v,E1=ce(()=>{"use strict";Ue(),He(),Ge(),lp=(n,e,t,i,r,s,a,o,l,u,c,d)=>{let h,f;typeof o=="string"?h=f=(x,b)=>`${o}((${x}),(${b}))`:typeof o=="function"?h=f=o:(h=o.scalar,f=o.vector);let g=Ae("outputData",c,i.length,4),y=se("aData",l,e.length,4),_=se("bData",u,t.length,4),p;if(r)if(s){let x=Q.size(e)===1,b=Q.size(t)===1,w=e.length>0&&e[e.length-1]%4===0,R=t.length>0&&t[t.length-1]%4===0;x||b?p=g.setByOffset("global_idx",f(x?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),b?`${_.type.value}(${_.getByOffset("0")}.x)`:_.getByOffset("global_idx"))):p=`
            let outputIndices = ${g.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",g)};
            let offsetB = ${_.broadcastedIndicesToOffset("outputIndices",g)};
            ${g.setByOffset("global_idx",f(a||w?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||R?_.getByOffset("offsetB / 4u"):`${_.type.value}(${_.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else p=g.setByOffset("global_idx",f(y.getByOffset("global_idx"),_.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let x=(b,w,R="")=>{let E=`aData[indexA${w}][componentA${w}]`,I=`bData[indexB${w}][componentB${w}]`;return`
            let outputIndices${w} = ${g.offsetToIndices(`global_idx * 4u + ${w}u`)};
            let offsetA${w} = ${y.broadcastedIndicesToOffset(`outputIndices${w}`,g)};
            let offsetB${w} = ${_.broadcastedIndicesToOffset(`outputIndices${w}`,g)};
            let indexA${w} = offsetA${w} / 4u;
            let indexB${w} = offsetB${w} / 4u;
            let componentA${w} = offsetA${w} % 4u;
            let componentB${w} = offsetB${w} % 4u;
            ${b}[${w}] = ${R}(${h(E,I)});
          `};c===9?p=`
            var data = vec4<u32>(0);
            ${x("data",0,"u32")}
            ${x("data",1,"u32")}
            ${x("data",2,"u32")}
            ${x("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:p=`
            ${x("outputData[global_idx]",0)}
            ${x("outputData[global_idx]",1)}
            ${x("outputData[global_idx]",2)}
            ${x("outputData[global_idx]",3)}
          `}return`
        ${n.registerUniform("vec_size","u32").declareVariables(y,_,g)}

        ${d??""}

        ${n.mainStart()}
        ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${p}
      }`},up=(n,e,t,i,r,s,a=t.dataType)=>{let o=t.dims.map(Number),l=i.dims.map(Number),u=!Q.areEqual(o,l),c=o,d=Q.size(o),h=!1,f=!1,g=[u];if(u){let y=as.calcShape(o,l,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");c=y.slice(),d=Q.size(c);let _=Q.size(o)===1,p=Q.size(l)===1,x=o.length>0&&o[o.length-1]%4===0,b=l.length>0&&l[l.length-1]%4===0;g.push(_),g.push(p),g.push(x),g.push(b);let w=1;for(let R=1;R<c.length;R++){let E=o[o.length-R],I=l[l.length-R];if(E===I)w*=E;else break}w%4===0?(f=!0,h=!0):(_||p||x||b)&&(h=!0)}else h=!0;return g.push(h),{name:n,shaderCache:{hint:e+g.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>lp(y,o,l,c,h,u,f,r,t.dataType,i.dataType,a,s),getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(Q.size(c)/4)},...Le(o,l,c)]})}},On=(n,e,t,i,r,s)=>{n.compute(up(e,r??"",n.inputs[0],n.inputs[1],t,i,s))},wv=n=>{On(n,"Add",(e,t)=>`${e}+${t}`)},Sv=n=>{On(n,"Div",(e,t)=>`${e}/${t}`)},Mv=n=>{On(n,"Equal",{scalar:(e,t)=>`u32(${e}==${t})`,vector:(e,t)=>`vec4<u32>(${e}==${t})`},void 0,void 0,9)},Tv=n=>{On(n,"Mul",(e,t)=>`${e}*${t}`)},Ev=n=>{let e=se("input",n.inputs[0].dataType,n.inputs[0].dims).type.value;On(n,"Pow",{scalar:(t,i)=>`pow_custom(${t},${i})`,vector:(t,i)=>`pow_vector_custom(${t},${i})`},`
    fn pow_custom(a : ${e}, b : ${e}) -> ${e} {
      if (b == ${e}(0.0)) {
        return ${e}(1.0);
      } else if (a < ${e}(0.0) && f32(b) != floor(f32(b))) {
        return ${e}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${e}(1.0), round(f32(abs(b) % ${e}(2.0))) != 1.0) * ${e}(${e==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${e}>, b : vec4<${e}>) -> vec4<${e}> {
      // TODO: implement vectorized pow
      return vec4<${e}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Av=n=>{On(n,"Sub",(e,t)=>`${e}-${t}`)},Rv=n=>{On(n,"Greater",{scalar:(e,t)=>`u32(${e}>${t})`,vector:(e,t)=>`vec4<u32>(${e}>${t})`},void 0,void 0,9)},Cv=n=>{On(n,"Less",{scalar:(e,t)=>`u32(${e}<${t})`,vector:(e,t)=>`vec4<u32>(${e}<${t})`},void 0,void 0,9)},Iv=n=>{On(n,"GreaterOrEqual",{scalar:(e,t)=>`u32(${e}>=${t})`,vector:(e,t)=>`vec4<u32>(${e}>=${t})`},void 0,void 0,9)},$v=n=>{On(n,"LessOrEqual",{scalar:(e,t)=>`u32(${e}<=${t})`,vector:(e,t)=>`vec4<u32>(${e}<=${t})`},void 0,void 0,9)}}),cp,dp,Pv,Lv,A1=ce(()=>{"use strict";Ue(),He(),Ft(),Ge(),cp=(n,e)=>{if(!n||n.length<1)throw new Error("too few inputs");let t=0,i=n[t],r=i.dataType,s=i.dims.length;n.forEach((a,o)=>{if(o!==t){if(a.dataType!==r)throw new Error("input tensors should be one type");if(a.dims.length!==s)throw new Error("input tensors should have the same shape");a.dims.forEach((l,u)=>{if(u!==e&&l!==i.dims[u])throw new Error("non concat dimensions must match")})}})},dp=(n,e,t,i,r=0)=>{let s=n.reduce((p,x)=>p+Q.size(x.dims),0),a=new Array(n.length),o=new Array(n.length),l=new Array(n.length),u=0,c=r,d=[],h=[],f=[{type:12,data:s}];for(let p=0;p<n.length;++p)a[p]=u,o[p]=c,u+=Q.size(n[p].dims),c+=n[p].dims[e],h.push(n[p].dims.length),l[p]=se(`input${p}`,i,h[p]),d.push("rank"),f.push({type:12,data:a[p]}),f.push({type:12,data:o[p]});for(let p=0;p<n.length;++p)f.push(...Le(n[p].dims));f.push(...Le(t));let g=Ae("output",i,t.length),y=l.map((p,x)=>{let b=`
        let inputOffset = ${`global_idx - uniforms.inputOffset${x}`};
        var outputIndices = ${p.offsetToIndices("inputOffset")};
        ${g.indicesGet("outputIndices",e)} += uniforms.outputAxisOffset${x};
        ${g.setByIndices("outputIndices",p.getByOffset("inputOffset"))}`;return n.length===1?b:x===0?`if (inputIndex == 0u) {${b}}`:x===n.length-1?`else {${b}}`:`else if (inputIndex == ${x}u) {${b}}`}).join(`
`),_=p=>`

  ${(()=>{p.registerUniform("outputSize","u32");for(let x=0;x<n.length;x++)p.registerUniform(`inputOffset${x}`,"u32"),p.registerUniform(`outputAxisOffset${x}`,"u32");return p.declareVariables(...l,g)})()}

  fn calculateInputIndex(global_idx: u32) -> u32 {
    ${l.slice(1).map((x,b)=>`if (global_idx < uniforms.inputOffset${b+1}) {
      return ${b}u;
    }`).join(`
`)}
    return ${n.length-1}u;
  }

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    let inputIndex = calculateInputIndex(global_idx);
    ${y}
  }`;return{name:"Concat",shaderCache:{hint:`${e}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:t,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:f}),getShaderSource:_}},Pv=(n,e)=>{let t=n.inputs,i=t[0].dims,r=Q.normalizeAxis(e.axis,i.length);cp(t,r);let s=i.slice();s[r]=t.reduce((u,c)=>u+(c.dims.length>r?c.dims[r]:0),0);let a=t.filter(u=>Q.size(u.dims)>0);if(a.length===0){n.output(0,s);return}let o=n.deviceLimits.maxStorageBuffersPerShaderStage-1,l=0;for(let u=0;u<a.length;u+=o){let c=a.slice(u,u+o);n.compute(dp(c,r,s,t[0].dataType,l),{inputs:c,outputs:[0]}),l+=c.reduce((d,h)=>d+h.dims[r],0)}},Lv=n=>xt({axis:n.axis})}),Mr,Tr,Er,Zc,Ir=ce(()=>{"use strict";Ue(),He(),Mr=(n,e,t="f32")=>{switch(n.activation){case"Relu":return`value = max(value, ${e}(0.0));`;case"Sigmoid":return`value = (${e}(1.0) / (${e}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${e}(${t}(uniforms.clip_min)), ${e}(${t}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${e}(0.0), min(${e}(1.0), ${t}(uniforms.alpha) * value + ${t}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${t}(uniforms.alpha) * value, value, value >= ${e}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${n.activation}`)}},Tr=(n,e)=>{n.activation==="Clip"?e.push({type:1,data:n.clipMax},{type:1,data:n.clipMin}):n.activation==="HardSigmoid"?e.push({type:1,data:n.alpha},{type:1,data:n.beta}):n.activation==="LeakyRelu"&&e.push({type:1,data:n.alpha})},Er=(n,e)=>{n.activation==="Clip"?e.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):n.activation==="HardSigmoid"?e.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):n.activation==="LeakyRelu"&&e.push({name:"alpha",type:"f32"})},Zc=n=>{let e=n?.activation||"";if(e==="HardSigmoid"){let[t,i]=n?.activation_params||[.2,.5];return{activation:e,alpha:t,beta:i}}else if(e==="Clip"){let[t,i]=n?.activation_params||[ry,sy];return{activation:e,clipMax:i,clipMin:t}}else if(e==="LeakyRelu"){let[t]=n?.activation_params||[.01];return{activation:e,alpha:t}}return{activation:e}}}),en,Dv,Jc=ce(()=>{"use strict";en=(n,e)=>{switch(n){case 1:return e;case 2:return`vec2<${e}>`;case 3:return`vec3<${e}>`;case 4:return`vec4<${e}>`;default:throw new Error(`${n}-component is not supported.`)}},Dv=n=>`
      ${n?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Nv,R1=ce(()=>{"use strict";Nv=n=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${n}.x), i32(${n}.y), i32(${n}.z), 1));
}
`}),sa,Qc,ed=ce(()=>{"use strict";Ue(),He(),Ge(),Ir(),sa=(n,e,t,i,r)=>{let s=i-t;return`
      ${Array.from({length:t}).map((a,o)=>`
      if (${Pe(e.shape,o,e.rank)} != 1) {
        ${e.indicesSet(n,o,Pe(r,o+s,i))}
      } else {
        ${e.indicesSet(n,o,0)}
      }`).join("")}
`},Qc=(n,e,t,i,r=!1,s)=>{let a=n[0].dims,o=n[1].dims,l=a[a.length-2],u=o[o.length-1],c=a[a.length-1],d=zt(u),h=zt(c),f=zt(l),g=Q.size(t)/d/f,y=n.length>2,_=i?i.slice(0,-2):t.slice(0,-2),p=[Q.size(_),l,u],x=[{type:12,data:g},{type:12,data:l},{type:12,data:u},{type:12,data:c}];Tr(e,x),x.push(...Le(_,a,o)),y&&x.push(...Le(n[2].dims)),x.push(...Le(p));let b=w=>{let R=Xc("batch_dims",n[0].dataType,_.length),E=se("a",n[0].dataType,a.length,h),I=se("b",n[1].dataType,o.length,d),T=Ae("output",n[0].dataType,p.length,d),C=Kt(T.type.tensor),A=Mr(e,T.type.value,C),k=[E,I],F="";if(y){let z=r?d:1;k.push(se("bias",n[2].dataType,n[2].dims.length,z)),F=`${r?`value += bias[col / ${z}];`:`value += ${T.type.value}(bias[row + i]);`}`}let U=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Er(e,U);let D=()=>{let z=`var a_data: ${E.type.value};`;for(let K=0;K<h;K++)z+=`
              let b_data${K} = b[(b_offset + (k + ${K}) * uniforms.N + col) / ${d}];`;for(let K=0;K<f;K++){z+=`a_data = a[(a_offset + (row + ${K}) * uniforms.K + k) / ${h}];`;for(let q=0;q<h;q++)z+=`
            values[${K}] = fma(${I.type.value}(a_data${h===1?"":`[${q}]`}), b_data${q}, values[${K}]);
`}return z};return`
  ${w.registerUniforms(U).registerInternalVariables(R).declareVariables(...k,T)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${f};
    let row = (index1 % stride1) * ${f};
    let batch = index1 / stride1;

    ${t.length===2?"":`let batch_indices = ${R.offsetToIndices("batch")};`}

    var a_indices: ${E.type.indices};
    ${sa("a_indices",E,E.rank-2,R.rank,"batch_indices")}
    ${E.indicesSet("a_indices",E.rank-2,0)}
    ${E.indicesSet("a_indices",E.rank-1,0)}
    let a_offset = ${E.indicesToOffset("a_indices")};

    var b_indices: ${I.type.indices};
    ${sa("b_indices",I,I.rank-2,R.rank,"batch_indices")}
    ${I.indicesSet("b_indices",I.rank-2,0)}
    ${I.indicesSet("b_indices",I.rank-1,0)}
    let b_offset = ${I.indicesToOffset("b_indices")};
    var values: array<${T.type.value}, ${f}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${D()}
    }
    for (var i = 0u; i < ${f}u; i++) {
      var value = values[i];
      ${F}
      ${A}
      let cur_indices = ${T.type.indices}(batch, row + i, col);
      let offset = ${T.indicesToOffset("cur_indices")};
      ${T.setByOffset(`offset / ${d}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${e.activation};${d};${h};${f};${r}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(t):t,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:x}),getShaderSource:b}}}),hp,fp,hc,Bl,pp,fc,mp,Lo,td=ce(()=>{"use strict";Ue(),He(),Ge(),Ir(),ed(),Jc(),hp=(n,e)=>n?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${e?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${e?", batchIndices":""});
        `,fp=(n,e)=>n?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${e===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${e===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${e===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,hc=(n,e,t="f32",i,r=!1,s=32,a=!1,o=32)=>{let l=e[1]*n[1],u=e[0]*n[0],c=r?l:s,d=r?s:l,h=c/e[0],f=s/e[1];if(!((r&&h===4&&n[1]===4||!r&&(h===3||h===4))&&c%e[0]===0&&s%e[1]===0&&n[0]===4))throw new Error(`If transposeA ${r} is true, innerElementSize ${h} and workPerThread[1] ${n[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${e[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${e[1]}. colPerThread ${n[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${t}>, ${c/h}>, ${d}>;
var<workgroup> mm_Bsub: array<array<vec4<${t}>, ${u/n[0]}>, ${s}>;

const rowPerThread = ${n[1]};
const colPerThread = ${n[0]};
const innerElementSize = ${h};
const tileInner = ${s};

@compute @workgroup_size(${e[0]}, ${e[1]}, ${e[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${a?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${t}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${f};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${hp(r,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${h===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${fp(r,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Bl=(n,e)=>n?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${e?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${e?", batchIndices":""});
            `,pp=n=>n?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",fc=(n,e,t="f32",i,r=!1,s=32,a=!1,o=32,l=!1)=>{let u=n[1]*e[1],c=n[0]*e[0],d=r?u:s,h=r?s:u;if(!(h%e[1]===0&&d%e[0]===0&&s%e[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${e[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${e[0]}, tileInner ${s} must be divisible by workgroupSize[1]${e[1]}`);let f=h/e[1],g=d/e[0],y=s/e[1],_=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${u};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${e[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${e[0]}) {
          ${Bl(r,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${e[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${e[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${t}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${e[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${r?`mm_Asub[k][localRow + innerRow * ${e[1]}];`:`mm_Asub[localRow + innerRow * ${e[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${e[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${e[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${u};

let tileRowA = i32(localId.y) * ${f};
let tileColA = i32(localId.x) * ${g};
let tileRowB = i32(localId.y) * ${y};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${g}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Bl(r,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${t}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${pp(r)}
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
  var<workgroup> mm_Asub : array<array<${t}, ${d}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${t}, ${c}>, ${s}>;
  const rowPerThread = ${n[1]};
  const colPerThread = ${n[0]};
  const tileInner = ${s};

@compute @workgroup_size(${e[0]}, ${e[1]}, ${e[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${t}, colPerThread>, rowPerThread>;
    ${_}
  }
`},mp=(n,e,t,i,r=!1)=>{let[s,a,o,l]=i,u=Kt(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${en(n,u)} {
      var value = ${en(n,u)}(0.0);
      let col = colIn * ${n};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${sa("aIndices",a,a.rank-2,s.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${en(n,u)} {
      var value = ${en(n,u)}(0.0);
      let col = colIn * ${n};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${sa("bIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${en(n,u)}) {
      let col = colIn * ${n};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${e?`value = value + ${r?"bias[colIn]":`${en(n,u)}(bias[row])`};`:""}
        ${t}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Lo=(n,e,t,i,r=!1,s)=>{let a=n[0].dims,o=n[1].dims,l=a.slice(0,-2),u=o.slice(0,-2),c=i?i.slice(0,-2):t.slice(0,-2),d=Q.size(c),h=a[a.length-2],f=a[a.length-1],g=o[o.length-1],y=f%4===0&&g%4===0,_=h<=8?[4,1,1]:[4,4,1],p=[8,8,1],x=[Math.ceil(g/p[0]/_[0]),Math.ceil(h/p[1]/_[1]),Math.ceil(d/p[2]/_[2])],b=y?4:1,w=[...l,h,f/b],R=w.length,E=[...u,f,g/b],I=E.length,T=[d,h,g/b],C=[{type:6,data:h},{type:6,data:g},{type:6,data:f}];Tr(e,C),C.push(...Le(c,w,E));let A=["rank","rank"],k=n.length>2;k&&(C.push(...Le(n[2].dims)),A.push("rank")),C.push(...Le(T));let F=U=>{let D=c.length,z=Xc("batchDims",n[0].dataType,D,1),K=Kt(n[0].dataType),q=se("a",n[0].dataType,R,b),G=se("b",n[1].dataType,I,b),ie=Ae("result",n[0].dataType,T.length,b),te=[q,G];if(k){let ue=r?b:1;te.push(se("bias",n[2].dataType,n[2].dims.length,ue))}let Y=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Er(e,Y);let oe=Kt(ie.type.tensor),de=Mr(e,ie.type.value,oe),B=mp(b,k,de,[z,q,G,ie],r);return`
  ${U.registerUniforms(Y).registerInternalVariables(z).declareVariables(...te,ie)}
  ${B}
  ${y?hc(_,p,K,z):fc(_,p,K,z)}
                   `};return{name:"MatMul",shaderCache:{hint:`${_};${e.activation};${y};${r}`,inputDependencies:A},getRunData:()=>({outputs:[{dims:s?s(t):t,dataType:n[0].dataType}],dispatchGroup:{x:x[0],y:x[1],z:x[2]},programUniforms:C}),getShaderSource:F}}}),gp,Uv,C1=ce(()=>{"use strict";Ue(),Si(),Ge(),Ir(),Jc(),R1(),td(),gp=(n,e,t,i,r=!1,s,a=4,o=4,l=4,u="f32")=>{let c=C=>{switch(C){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${u}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${C} is not supported.`)}},d=C=>{switch(C){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${C} is not supported.`)}},h=n?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,f=n?`
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
    `,g=n?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=n?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",_=n?"row":"col",p=n?"col":"row",x=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${n?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${_} / outWidth;
    let outCol = ${_} % outWidth;

    let WRow = ${p} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${p} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${p} % inChannels;
    var resData = ${en(a,u)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${g} && xCol >= 0 && xCol < ${y}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(a)}
    }
    return resData;`,b=n?e&&i?`
    let col = colIn * ${a};
    ${x}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${x}
    }
    return ${en(a,u)}(0.0);`:i&&t?`
    let col = colIn * ${a};
    ${x}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${x}
    }
    return ${en(a,u)}(0.0);`,w=n?i&&t?d(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${d(o)}
    }
    return ${en(o,u)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${d(o)}
    }
    return ${en(o,u)}(0.0);`,R=en(l,u),E=en(n?a:o,u),I=en(n?o:a,u),T=Mr(s,R,u);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${n?b:w}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${I} {
      ${n?w:b}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${R}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${n?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${f}
      ${Dv(r)}
      ${T}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Uv=(n,e,t,i,r,s,a,o,l)=>{let u=e.format==="NHWC",c=u?n[0].dims[3]:n[0].dims[1],d=t[0],h=u?t[2]:t[3],f=u?t[1]:t[2],g=u?t[3]:t[1],y=u&&(c%4===0||c%3===0)&&g%4===0,_=u?g:h*f,p=u?h*f:g,x=[8,8,1],b=i<=8?[4,1,1]:[4,4,1],w=[Math.ceil(_/x[0]/b[0]),Math.ceil(p/x[1]/b[1]),Math.ceil(d/x[2]/b[2])];pt("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${w}`);let R=y?u&&c%4!==0?3:4:1,E=x[1]*b[1],I=x[0]*b[0],T=Math.max(x[0]*R,x[1]),C=i%E===0,A=r%I===0,k=s%T===0,F=y?[R,4,4]:[1,1,1],U=[{type:6,data:i},{type:6,data:r},{type:6,data:s},{type:6,data:[e.pads[0],e.pads[1]]},{type:6,data:e.strides},{type:6,data:e.dilations}];Tr(e,U),U.push(...Le(n[0].dims,n[1].dims));let D=["rank","rank"];a&&(U.push(...Le(n[2].dims)),D.push("rank")),U.push(...Le(t));let z=K=>{let q=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Er(e,q);let G=y?4:1,ie=Kt(n[0].dataType),te=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${ie}>`:ie}) {
        result[flatIndex] = ${y?`vec4<${ie}>`:ie}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${ie}>`:ie}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,Y=se("x",n[0].dataType,n[0].dims.length,R===3?1:R),oe=se("w",n[1].dataType,n[1].dims.length,G),de=[Y,oe],B=Ae("result",n[0].dataType,t.length,G);if(a){let ue=se("bias",n[2].dataType,n[2].dims.length,G);de.push(ue),te+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${ie}>`:ie} {
          return bias[coords.${u?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${Nv("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${K.registerUniforms(q).declareVariables(...de,B)}
        ${te}
        ${gp(u,C,A,k,a,e,F[0],F[1],F[2],ie)}
        ${y?hc(b,x,ie,void 0,!u,T):fc(b,x,ie,void 0,!u,T,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${e.cacheKey};${R};${y};${C};${A};${k};${E};${I};${T}`,inputDependencies:D},getRunData:()=>({outputs:[{dims:l?l(t):t,dataType:n[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:U}),getShaderSource:z}}}),_p,Fl,Us,yp,Hl,vp,Ov,kv,I1=ce(()=>{"use strict";Ue(),Si(),He(),Ge(),Ir(),Jc(),_p=n=>{let e=1;for(let t=0;t<n.length;t++)e*=n[t];return e},Fl=n=>typeof n=="number"?[n,n,n]:n,Us=(n,e)=>e<=1?n:n+(n-1)*(e-1),yp=(n,e,t,i=1)=>{let r=Us(e,i);return Math.floor((n[0]*(t-1)-t+r)/2)},Hl=(n,e,t,i,r)=>{r==null&&(r=yp(n,e[0],i[0]));let s=[0,0,0,t];for(let a=0;a<3;a++)n[a]+2*r>=e[a]&&(s[a]=Math.trunc((n[a]-e[a]+2*r)/i[a]+1));return s},vp=(n,e,t,i,r,s,a,o,l,u)=>{let c,d,h,f;if(n==="VALID"&&(n=0),typeof n=="number"){c={top:n,bottom:n,left:n,right:n,front:n,back:n};let g=Hl([e,t,i,1],[o,l,u],1,[r,s,a],n);d=g[0],h=g[1],f=g[2]}else if(Array.isArray(n)){if(!n.every((y,_,p)=>y===p[0]))throw Error(`Unsupported padding parameter: ${n}`);c={top:n[0],bottom:n[1],left:n[2],right:n[3],front:n[4],back:n[5]};let g=Hl([e,t,i,1],[o,l,u],1,[r,s,a],n[0]);d=g[0],h=g[1],f=g[2]}else if(n==="SAME_UPPER"){d=Math.ceil(e/r),h=Math.ceil(t/s),f=Math.ceil(i/a);let g=(d-1)*r+o-e,y=(h-1)*s+l-t,_=(f-1)*a+u-i,p=Math.floor(g/2),x=g-p,b=Math.floor(y/2),w=y-b,R=Math.floor(_/2),E=_-R;c={top:b,bottom:w,left:R,right:E,front:p,back:x}}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:c,outDepth:d,outHeight:h,outWidth:f}},Ov=(n,e,t,i,r,s=!1,a="channelsLast")=>{let o,l,u,c,d;if(a==="channelsLast")[o,l,u,c,d]=n;else if(a==="channelsFirst")[o,d,l,u,c]=n;else throw new Error(`Unknown dataFormat ${a}`);let[h,,f,g,y]=e,[_,p,x]=Fl(t),[b,w,R]=Fl(i),E=Us(f,b),I=Us(g,w),T=Us(y,R),{padInfo:C,outDepth:A,outHeight:k,outWidth:F}=vp(r,l,u,c,_,p,x,E,I,T),U=s?h*d:h,D=[0,0,0,0,0];return a==="channelsFirst"?D=[o,U,A,k,F]:a==="channelsLast"&&(D=[o,A,k,F,U]),{batchSize:o,dataFormat:a,inDepth:l,inHeight:u,inWidth:c,inChannels:d,outDepth:A,outHeight:k,outWidth:F,outChannels:U,padInfo:C,strideDepth:_,strideHeight:p,strideWidth:x,filterDepth:f,filterHeight:g,filterWidth:y,effectiveFilterDepth:E,effectiveFilterHeight:I,effectiveFilterWidth:T,dilationDepth:b,dilationHeight:w,dilationWidth:R,inShape:n,outShape:D,filterShape:e}},kv=(n,e,t,i,r,s)=>{let a=s==="channelsLast",o=a?n[0].dims[3]:n[0].dims[1],l=!1,u=[64,1,1],c={x:t.map((x,b)=>b)},d=[Math.ceil(_p(c.x.map(x=>t[x]))/u[0]),1,1];pt("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let h=l?a&&o%4!==0?3:4:1,f=Q.size(t),g=[{type:12,data:f},{type:12,data:i},{type:12,data:r},{type:12,data:e.strides},{type:12,data:e.dilations}];Tr(e,g),g.push(...Le(n[0].dims,n[1].dims));let y=["rank","rank"],_=n.length===3;_&&(g.push(...Le(n[2].dims)),y.push("rank")),g.push(...Le(t));let p=x=>{let b=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:r.length},{name:"strides",type:"u32",length:e.strides.length},{name:"dilations",type:"u32",length:e.dilations.length}];Er(e,b);let w=l?4:1,R=Kt(n[0].dataType),E=se("x",n[0].dataType,n[0].dims.length,h===3?1:h),I=se("W",n[1].dataType,n[1].dims.length,w),T=[E,I],C=Ae("result",n[0].dataType,t.length,w),A="";if(_){let U=se("bias",n[2].dataType,n[2].dims.length,w);T.push(U),A+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${l?`vec4<${R}>`:R} {
          return bias[${a?Pe("coords",4,5):Pe("coords",1,5)}${l?"/ 4":""}];
        }`}let k=en(h,R),F=Mr(e,k,R);return`
            ${A}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${R} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${R} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
          ${x.registerUniforms(b).declareVariables(...T,C)}
          ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${C.offsetToIndices("global_idx")};
              let batch = ${Pe("coords",0,E.rank)};
              let d2 = ${a?Pe("coords",E.rank-1,E.rank):Pe("coords",1,E.rank)};
              let xFRCCorner = vec3<u32>(${a?Pe("coords",1,E.rank):Pe("coords",2,E.rank)},
              ${a?Pe("coords",2,E.rank):Pe("coords",3,E.rank)},
              ${a?Pe("coords",3,E.rank):Pe("coords",4,E.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?Pe("uniforms.x_shape",1,E.rank):Pe("uniforms.x_shape",2,E.rank)};
              let xShapeZ = ${a?Pe("uniforms.x_shape",2,E.rank):Pe("uniforms.x_shape",3,E.rank)};
              let xShapeW = ${a?Pe("uniforms.x_shape",3,E.rank):Pe("uniforms.x_shape",4,E.rank)};
              let xShapeU = ${a?Pe("uniforms.x_shape",4,E.rank):Pe("uniforms.x_shape",1,E.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = ${R}(0);
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
                      ${a?`let xValues = vec4<${R}>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<${R}>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<${R}>(
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
                      ${a?`let xValues = vec2<${R}>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<${R}>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<${R}>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${a?`let xValues = vec3<${R}>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<${R}>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<${R}>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${F}
              result[global_idx] = ${R}(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${e.cacheKey};${a};${h};${_}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:t,dataType:n[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:g}),getShaderSource:p}}}),zv,Bv,$1=ce(()=>{"use strict";Ue(),He(),Ge(),Ir(),zv=(n,e,t,i)=>{let r=n.length>2,s=r?"value += b[output_channel];":"",a=n[0].dims,o=n[1].dims,l=e.format==="NHWC",u=l?t[3]:t[1],c=u/e.group,d=l&&c>=4?zt(u):1,h=Q.size(t)/d,f=[{type:12,data:h},{type:12,data:e.dilations},{type:12,data:[e.strides[0],e.strides[1]]},{type:12,data:[e.pads[0],e.pads[1]]},{type:12,data:c}];Tr(e,f),f.push(...Le(a,[o[0],o[1],o[2],o[3]/d]));let g=r?["rank","rank","rank"]:["rank","rank"];f.push(...Le([t[0],t[1],t[2],t[3]/d]));let y=_=>{let p=Ae("output",n[0].dataType,t.length,d),x=Kt(p.type.tensor),b=Mr(e,p.type.value,x),w=se("x",n[0].dataType,a.length),R=se("w",n[1].dataType,o.length,d),E=[w,R];r&&E.push(se("b",n[2].dataType,n[2].dims,d));let I=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:e.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Er(e,I);let T=l?`
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
            let xVal = ${w.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${R.get("wHeight","wWidth","wInChannel","output_channel")};
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

            let xVal = ${w.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${R.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${_.registerUniforms(I).declareVariables(...E,p)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${p.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${p.type.value} = ${p.type.value}(0);
    ${T}
    ${s}
    ${b}
    ${p.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${e.cacheKey}_${d}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i?i(t):t,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:f}),getShaderSource:y}},Bv=(n,e,t,i)=>{let r=n.length>2,s=zt(t[3]),a=zt(t[2]),o=Q.size(t)/s/a,l=[n[0].dims[0],n[0].dims[1],n[0].dims[2],n[0].dims[3]/s],u=[n[1].dims[0],n[1].dims[1],n[1].dims[2],n[1].dims[3]/s],c=[t[0],t[1],t[2],t[3]/s],d=[{type:12,data:o},{type:6,data:[e.strides[0],e.strides[1]]},{type:6,data:[e.pads[0],e.pads[1]]}];Tr(e,d),d.push(...Le(l,u,c));let h=(a-1)*e.strides[1]+u[1],f=g=>{let y=Ae("output",n[0].dataType,c.length,s),_=Kt(y.type.tensor),p=Mr(e,y.type.value,_),x=se("x",n[0].dataType,l.length,s),b=se("w",n[1].dataType,u.length,s),w=[x,b];r&&w.push(se("b",n[2].dataType,n[2].dims,s));let R=r?"value += b[output_channel];":"",E=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Er(e,E),`
  ${g.registerUniforms(E).declareVariables(...w,y)}
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

    var x_vals: array<${x.type.value}, ${h}>;
    var values: array<${y.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${u[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${x.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${x.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${u[1]}; w_width++) {
          let w_val = ${b.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${R}
      ${p}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${e.cacheKey};${s};${a};${h};${u[0]};${u[1]}`,inputDependencies:r?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(t):t,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:d}),getShaderSource:f}}}),xp,za,bp,Ba,pc,Vl,wp,Sp,mc,P1=ce(()=>{"use strict";He(),C1(),I1(),td(),$1(),Ir(),ed(),Yi(),xp=(n,e,t,i,r,s)=>{let a=n[0],o=n.slice(s?1:2,s?3:4),l=o.length,u=e[0],c=e.slice(2).map((h,f)=>h+(h-1)*(t[f]-1)),d=o.map((h,f)=>h+i[f]+i[f+l]).map((h,f)=>Math.floor((h-c[f]+r[f])/r[f]));return d.splice(0,0,a),d.splice(s?3:1,0,u),d},za=[2,3,1,0],bp=(n,e)=>{if(!n||n.length!==2&&n.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(n[0].dims.length>5)throw new Error("greater than 5D is not supported");if(n[0].dims.length!==n[1].dims.length)throw new Error("filter does not have same dimension as input");let t=n[0].dims[e.format==="NHWC"?n[0].dims.length-1:1],i=n[1].dims[1]*e.group;if(t!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(n.length===3&&(n[2].dims.length!==1||n[1].dims[0]!==n[2].dims[0]))throw new Error("invalid bias");let r=n[0].dims.length-2;if(e.dilations.length!==r)throw new Error(`dilations should be ${r}D`);if(e.strides.length!==r)throw new Error(`strides should be ${r}D`);if(e.pads.length!==r*2)throw new Error(`pads should be ${r*2}D`);if(e.kernelShape.length!==0&&e.kernelShape.length!==n[1].dims.length-2)throw new Error("invalid kernel shape")},Ba=(n,e)=>{let t=n.kernelShape.slice();t.length<e[1].dims.length-2&&t.push(...Array(e[1].dims.length-2-t.length).fill(0));for(let s=2;s<e[1].dims.length;++s)t[s-2]===0&&(t[s-2]=e[1].dims[s]);let i=n.pads.slice();$o.adjustPadsBasedOnAutoPad(e[0].dims,n.strides,n.dilations,t,i,n.format==="NHWC",n.autoPad);let r=Object.assign({},n);return Object.assign(r,{kernelShape:t,pads:i}),r},pc=n=>{let e=Zc(n),t=n.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][n.auto_pad],r=n.dilations,s=n.group,a=n.kernel_shape,o=n.pads,l=n.strides,u=n.w_is_const();return{autoPad:i,format:t,dilations:r,group:s,kernelShape:a,pads:o,strides:l,wIsConst:u,...e,cacheKey:`${n.format};${e.activation};`}},Vl=(n,e,t,i)=>{let r=t.format==="NHWC",s=xp(e[0].dims,e[1].dims,t.dilations,t.pads,t.strides,r);if(t.group!==1){let E=[e[0]];if(r){let I=n.kernelCustomData.wT??n.compute(Tn(e[1],za),{inputs:[1],outputs:[t.wIsConst?-2:-1]})[0];t.wIsConst&&!n.kernelCustomData.wT&&(n.kernelCustomData.wT=I),E.push(I)}else E.push(e[1]);e.length===3&&E.push(e[2]),!n.adapterInfo.isArchitecture("ampere")&&r&&e[1].dims[0]===t.group&&e[1].dims[1]===1&&t.dilations[0]===1&&t.dilations[1]===1?n.compute(Bv(E,t,s,i),{inputs:E}):n.compute(zv(E,t,s,i),{inputs:E});return}let a=e.length===3,o=e[0].dims[r?1:2],l=e[0].dims[r?2:3],u=e[0].dims[r?3:1],c=e[1].dims[2],d=e[1].dims[3],h=s[r?1:2],f=s[r?2:3],g=s[r?3:1],y=r&&c===o&&d===l&&t.pads[0]===0&&t.pads[1]===0;if(y||c===1&&d===1&&t.dilations[0]===1&&t.dilations[1]===1&&t.strides[0]===1&&t.strides[1]===1&&t.pads[0]===0&&t.pads[1]===0){let E=s[0],I,T,C,A=[];if(r){let U=n.kernelCustomData.wT??n.compute(Tn(e[1],za),{inputs:[1],outputs:[t.wIsConst?-2:-1]})[0];if(t.wIsConst&&!n.kernelCustomData.wT&&(n.kernelCustomData.wT=U),y){let D=o*l*u;I=e[0].reshape([1,E,D]),T=U.reshape([1,D,g]),C=[1,E,g]}else I=e[0].reshape([E,o*l,u]),T=U.reshape([1,u,g]),C=[E,h*f,g];A.push(I),A.push(T)}else I=e[0].reshape([E,u,o*l]),T=e[1].reshape([1,g,u]),C=[E,g,h*f],A.push(T),A.push(I);a&&A.push(e[2]);let k=C[2],F=A[0].dims[A[0].dims.length-1];k<8&&F<8?n.compute(Qc(A,t,s,C,r,i),{inputs:A}):n.compute(Lo(A,t,s,C,r,i),{inputs:A});return}let _=!0,p=n.kernelCustomData.wT??n.compute(Tn(e[1],za),{inputs:[1],outputs:[t.wIsConst?-2:-1]})[0];t.wIsConst&&!n.kernelCustomData.wT&&(n.kernelCustomData.wT=p);let x=[e[0],p];a&&x.push(e[2]);let b=r?h*f:g,w=r?g:h*f,R=c*d*u;n.compute(Uv(x,t,s,b,w,R,a,_,i),{inputs:x})},wp=(n,e)=>{let t=e.format==="NHWC",i=[n.inputs[0].reshape(t?[n.inputs[0].dims[0],1,n.inputs[0].dims[1],n.inputs[0].dims[2]]:[n.inputs[0].dims[0],n.inputs[0].dims[1],1,n.inputs[0].dims[2]]),n.inputs[1].reshape([n.inputs[1].dims[0],n.inputs[1].dims[1],1,n.inputs[1].dims[2]])];n.inputs.length===3&&i.push(n.inputs[2]);let r=[0,e.pads[0],0,e.pads[1]],s=[1].concat(e.strides),a=[1].concat(e.dilations),o=[1].concat(e.kernelShape),l=Ba({...e,pads:r,strides:s,dilations:a,kernelShape:o},i);Vl(n,i,l,u=>t?[u[0],u[2],u[3]]:[u[0],u[1],u[3]])},Sp=(n,e,t)=>{let i=t.format==="NHWC"?"channelsLast":"channelsFirst",r=Ba(t,e),s=t.autoPad==="NOTSET"?t.pads:t.autoPad,a=Ov(e[0].dims,e[1].dims,t.strides,t.dilations,s,!1,i);n.compute(kv(e,r,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],i))},mc=(n,e)=>{if(bp(n.inputs,e),n.inputs[0].dims.length===3)wp(n,e);else if(n.inputs[0].dims.length===5)Sp(n,n.inputs,e);else{let t=Ba(e,n.inputs);Vl(n,n.inputs,t)}}}),Fv,L1=ce(()=>{"use strict";Ue(),Si(),He(),Ge(),Fv=(n,e,t)=>{let i=n.length>2,r=e.outputShape,s=e.format==="NHWC",a=e.group,o=n[1].dims,l=o[2]/a,u=o[3],c=s?zt(l):1,d=s&&u===1&&l>=4,h=d?Math.floor(l/4)*4:Math.floor(l/c)*c,f=l-h,g=s?zt(u):1,y=s?u===1?c:g:1,_=Q.size(r)/g,p=[Math.ceil(_/64),1,1];pt("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${p}`);let x=["rank","rank"],b=[e.strides[0],e.strides[1]],w=[e.kernelShape[s?1:2],e.kernelShape[s?2:3]],R=[e.dilations[0],e.dilations[1]],E=[w[0]+(e.dilations[0]<=1?0:(e.kernelShape[s?1:2]-1)*(e.dilations[0]-1)),w[1]+(e.dilations[1]<=1?0:(e.kernelShape[s?2:3]-1)*(e.dilations[1]-1))],I=[E[0]-1-Math.floor((e.pads[0]+e.pads[2])/2),E[1]-1-Math.floor((e.pads[1]+e.pads[3])/2)],T=[{type:12,data:_},{type:12,data:b},{type:12,data:w},{type:12,data:R},{type:12,data:E},{type:6,data:I},{type:12,data:h},{type:12,data:l},{type:12,data:u},...Le(n[0].dims,n[1].dims)];i&&(T.push(...Le(n[2].dims)),x.push("rank")),T.push(...Le(r));let C=A=>{let k=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:b.length},{name:"filter_dims",type:"u32",length:w.length},{name:"dilations",type:"u32",length:w.length},{name:"effective_filter_dims",type:"u32",length:E.length},{name:"pads",type:"i32",length:I.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],F=Kt(n[0].dataType),U=s?1:2,D=s?2:3,z=s?3:1,K=se("W",n[1].dataType,n[1].dims.length,y),q=se("Dy",n[0].dataType,n[0].dims.length,c),G=[q,K];i&&G.push(se("bias",n[2].dataType,[r[z]].length,g));let ie=Ae("result",n[0].dataType,r.length,g),te=()=>{let de="";if(d)c===4?de+=`
        let xValue = ${q.getByOffset("x_offset")};
        let wValue = ${K.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?de+=`
          dotProd = dotProd + dot(vec4<${F}>(${q.getByOffset("x_offset")}, ${q.getByOffset("x_offset + 1u")}), vec4<${F}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(de+=`
          dotProd = dotProd + dot(vec4<${F}>(${q.getByOffset("x_offset")}, ${q.getByOffset("x_offset + 1u")}, ${q.getByOffset("x_offset + 2u")}, ${q.getByOffset("x_offset + 3u")}), vec4<${F}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}, ${K.getByOffset("w_offset + 2u")}, ${K.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(de+=`
                  let xValue = ${s?q.getByOffset(`${q.indicesToOffset(`${q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):q.get("batch","inputChannel","idyR","idyC")};
        `,c===1)de+=`
          let w_offset = ${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${K.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let B=0;B<c;B++)de+=`
            let wValue${B} = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${B}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${B}] * wValue${B};`;return de},Y=()=>{if(f===0)return"";if(!d)throw new Error(`packInputAs4 ${d} is not true.`);let de="";if(c===1){de+="dotProd = dotProd";for(let B=0;B<f;B++)de+=`
            + ${q.getByOffset(`x_offset + ${B}`)} * ${K.getByOffset(`w_offset + ${B}`)}`;de+=";"}else if(c===2){if(f!==2)throw new Error(`Invalid inputChannelsRemainder ${f}.`);de+=`
          let xValue = ${q.getByOffset("x_offset")};
          let wValue = ${K.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return de},oe=`
            let outputIndices = ${ie.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${ie.indicesGet("outputIndices",0)};
            let d1 = ${ie.indicesGet("outputIndices",z)};
            let r = ${ie.indicesGet("outputIndices",U)};
            let c = ${ie.indicesGet("outputIndices",D)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${ie.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${F}(dyRCorner) + ${F}(wR)) / ${F}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${F}(uniforms.Dy_shape[${U}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${F}(dyCCorner) + ${F}(wC)) / ${F}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${F}(uniforms.Dy_shape[${D}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${d?`
                var x_offset = ${q.indicesToOffset(`${q.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${K.indicesToOffset(`${K.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${d?4:c}) {
                  ${te()}
                  inputChannel = inputChannel + ${d?4:c};
                }
                ${Y()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${g}]`:""};
            ${ie.setByOffset("global_idx","value")};
          `;return`
    ${A.registerUniforms(k).declareVariables(...G,ie)}
      ${A.mainStart()}
      ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${oe}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${e.cacheKey};${c}${y}${g}${d}${f}`,inputDependencies:x},getRunData:()=>({dispatchGroup:{x:p[0],y:p[1],z:p[2]},outputs:[{dims:t?t(r):r,dataType:n[0].dataType}],programUniforms:T}),getShaderSource:C}}}),Mp,Tp,Ep,Gl,Hv,Ap,Wl,Rp,Vv,D1=ce(()=>{"use strict";L1(),Ir(),Yi(),Mp=(n,e,t,i,r,s)=>(n-1)*e+t+(i-1)*r+1-s,Tp=(n,e,t,i,r)=>{let s=Math.floor(n/2);e==="SAME_UPPER"?(t[i]=s,t[r]=n-s):e==="SAME_LOWER"&&(t[i]=n-s,t[r]=s)},Ep=(n,e,t,i,r,s,a,o,l,u)=>{let c=n.length-2,d=u.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let h=n[0],f=e[o?3:1]*r;for(let g=0,y=n.length-c-(o?1:0);g<c;++g,++y){let _=n[y],p=d?_*a[g]:u[g],x=Mp(_,a[g],s[g],e[y],t[g],p);Tp(x,i,s,g,g+c),d&&u.push(a[g]*(_-1)+l[g]+(e[y]-1)*t[g]+1-s[g]-s[g+c])}u.splice(0,0,h),u.splice(o?3:1,0,f)},Gl=(n,e)=>{let t=n.kernelShape.slice();if(n.kernelShape.length===0||n.kernelShape.reduce((d,h)=>d*h,1)===0){t.length=0;for(let d=2;d<e[1].dims.length;++d)t.push(e[1].dims[d])}let i=n.format==="NHWC";t.splice(0,0,e[1].dims[0]),t.splice(i?3:1,0,e[1].dims[1]);let r=n.pads.slice(),s=n.outputShape.slice(),a=n.outputPadding.slice(),o=e[0].dims,l=n.dilations.slice();if(l.reduce((d,h)=>d+h,0)===0){let d=e[0].dims.length-2;l=new Array(d).fill(1)}let u=n.strides.slice();if(u.reduce((d,h)=>d+h,0)===0){let d=e[0].dims.length-2;u=new Array(d).fill(1)}Ep(o,t,l,n.autoPad,n.group,r,u,i,a,s);let c=Object.assign({},n);return Object.assign(c,{kernelShape:t,pads:r,outputPadding:a,outputShape:s,dilations:l,strides:u}),c},Hv=n=>{let e=Zc(n),t=n.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof n.autoPad>"u"?0:n.autoPad],r=n.dilations,s=n.group??1,a=n.kernelShape,o=n.pads,l=n.strides,u=n.wIsConst(),c=n.outputPadding,d=n.outputShape;return{autoPad:i,format:t,dilations:r,group:s,kernelShape:a,outputPadding:c,outputShape:d,pads:o,strides:l,wIsConst:u,...e,cacheKey:`${n.format};${e.activation};`}},Ap=(n,e)=>{if(!n||n.length!==2&&n.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(n[0].dims.length!==4&&n[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(n[0].dims.length!==n[1].dims.length)throw new Error("filter does not have same dimension as input");let t=n[0].dims[e.format==="NHWC"?n[0].dims.length-1:1],i=n[1].dims[0];if(t!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let r=n[1].dims[1]*e.group;if(n.length===3&&(n[2].dims.length!==1||n[2].dims[0]!==r))throw new Error("invalid bias");let s=n[0].dims.length-2;if(e.dilations.reduce((a,o)=>a+o,0)>0&&e.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(e.strides.reduce((a,o)=>a+o,0)>0&&e.strides.length!==s)throw new Error(`strides should be ${s}D`);if(e.pads.reduce((a,o)=>a+o,0)>0&&e.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(e.outputPadding.length!==s&&e.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(e.kernelShape.reduce((a,o)=>a+o,0)>0&&e.kernelShape.length!==0&&e.kernelShape.length!==n[1].dims.length-2)throw new Error("invalid kernel shape");if(e.outputShape.length!==0&&e.outputShape.length!==n[0].dims.length-2)throw new Error("invalid output shape")},Wl=(n,e,t,i)=>{let r=n.kernelCustomData.wT??n.compute(Tn(e[1],[2,3,0,1]),{inputs:[1],outputs:[t.wIsConst?-2:-1]})[0];t.wIsConst&&!n.kernelCustomData.wT&&(n.kernelCustomData.wT=r);let s=[e[0],r];e.length===3&&s.push(e[2]),n.compute(Fv(s,t,i),{inputs:s})},Rp=(n,e)=>{let t=e.format==="NHWC",i=[n.inputs[0].reshape(t?[n.inputs[0].dims[0],1,n.inputs[0].dims[1],n.inputs[0].dims[2]]:[n.inputs[0].dims[0],n.inputs[0].dims[1],1,n.inputs[0].dims[2]]),n.inputs[1].reshape([n.inputs[1].dims[0],n.inputs[1].dims[1],1,n.inputs[1].dims[2]])];n.inputs.length===3&&i.push(n.inputs[2]);let r=e.kernelShape;(r.length===0||r[0]===0)&&(r=[n.inputs[1].dims[2]]);let s=e.dilations;(s.length===0||s[0]===0)&&(s=[1]);let a=e.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=e.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),s=[1].concat(s),r=[1].concat(r);let l=e.outputPadding;l=[0].concat(l);let u=Gl({...e,pads:o,strides:a,dilations:s,kernelShape:r,outputPadding:l},i);Wl(n,i,u,c=>t?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Vv=(n,e)=>{if(Ap(n.inputs,e),n.inputs[0].dims.length===3)Rp(n,e);else{let t=Gl(e,n.inputs);Wl(n,n.inputs,t)}}}),Cp,Gv,Wv,N1=ce(()=>{"use strict";Ue(),He(),Ft(),Ge(),Cp=(n,e,t,i)=>{let r=Q.size(e),s=e.length,a=se("input",n,s),o=Ae("output",n,s),l=t.dataType===6?t.getInt32Array()[0]:Number(t.getBigInt64Array()[0]),u=Q.normalizeAxis(l,s),c=d=>{let h=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,f=Pe("uniforms.input_shape","uniforms.axis",s),g=i.reverse?h+(i.exclusive?" + 1":""):"0",y=i.reverse?f:h+(i.exclusive?"":" + 1");return`
                ${d.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,o)}
                ${d.mainStart()}
                  ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${g};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:e,dataType:n}],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:[{type:12,data:r},{type:12,data:u},...Le(e,e)]}),getShaderSource:c}},Gv=(n,e)=>{let t=n.inputs[0].dims,i=n.inputs[0].dataType,r=n.inputs[1];n.compute(Cp(i,t,r,e),{inputs:[0]})},Wv=n=>{let e=n.exclusive===1,t=n.reverse===1;return xt({exclusive:e,reverse:t})}}),Ip,$p,Pp,qv,Xv,U1=ce(()=>{"use strict";Ue(),He(),Ft(),Ge(),Ip=n=>{if(!n||n.length!==1)throw new Error("DepthToSpace requires 1 input.");if(n[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},$p=(n,e,t,i)=>{let r=[];r.push(`fn perm(i: ${i.type.indices}) -> ${t.type.indices} {
    var a: ${t.type.indices};`);for(let s=0;s<e;++s)r.push(t.indicesSet("a",n[s],`i[${s}]`));return r.push("return a;}"),r.join(`
`)},Pp=(n,e)=>{let t,i,r,s,a,o,l=e.format==="NHWC",u=e.blocksize,c=e.mode==="DCR";l?([t,i,r,s]=n.dims,a=c?[t,i,r,u,u,s/u**2]:[t,i,r,s/u**2,u,u],o=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([t,i,r,s]=[n.dims[0],n.dims[2],n.dims[3],n.dims[1]],a=c?[t,u,u,s/u**2,i,r]:[t,s/u**2,u,u,i,r],o=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=n.reshape(a),h=d.dims.length,f=n.dataType,g=se("a",f,h),y=Ae("output",f,h),_=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(g,y)}

  ${$p(o,h,g,y)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${n.dims};${e.blocksize};${e.mode}`,inputDependencies:["rank"]},getRunData:p=>{let x=l?[t,i*u,r*u,s/u**2]:[t,s/u**2,i*u,r*u],b=Q.size(x),w=d.dims,R=Q.sortBasedOnPerm(w,o);return{outputs:[{dims:x,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...Le(w,R)]}},getShaderSource:_}},qv=(n,e)=>{Ip(n.inputs),n.compute(Pp(n.inputs[0],e))},Xv=n=>xt({blocksize:n.blocksize,mode:n.mode,format:n.format})}),di,Os,Fa,ql,Ri,Lp,Dp,Np,Xl,jl,Kl,Up,Op,Yl,kp,jv,Kv,O1=ce(()=>{"use strict";Ue(),He(),Ft(),Ge(),di=256,Os=512,Fa=2*Math.PI,ql=n=>{let e=[],t=n;for(let i of[4,2,3,5])for(;t%i===0;)e.push(i),t/=i;return t===1?e:void 0},Ri=n=>{let e=n.toPrecision(9);return/[.eE]/.test(e)?e:`${e}.0`},Lp=(n,e,t,i,r)=>{let s=t/n,a=Os-i,o=u=>`smem[${a}u + base + ${u*e}u]`,l=`  for (var t = local_idx; t < ${s}u; t += ${di}u) {
`;l+=`    let twiddleIndex = t % ${e}u;
    let angleUnit = f32(twiddleIndex);
`,l+=`    var leg: array<vec2<f32>, 5>;
`;for(let u=0;u<n;u++){let c=`${i}u + t + ${u*s}u`;if(u===0)l+=`    leg[0] = smem[${c}];
`;else{let d=r*Fa*u/(n*e);l+=`    { let a = ${Ri(d)} * angleUnit; leg[${u}] = cmul(smem[${c}], vec2<f32>(cos(a), sin(a))); }
`}}if(l+=`    let base = (t / ${e}u) * ${e*n}u + twiddleIndex;
`,n===2)l+=`    ${o(0)} = leg[0] + leg[1];
    ${o(1)} = leg[0] - leg[1];
`;else if(n===4){let u=r<0?"vec2<f32>(oddDiff.y, -oddDiff.x)":"vec2<f32>(-oddDiff.y, oddDiff.x)";l+=`    let evenSum = leg[0] + leg[2]; let evenDiff = leg[0] - leg[2];
`,l+=`    let oddSum = leg[1] + leg[3]; let oddDiff = leg[1] - leg[3];
`,l+=`    let oddRot = ${u};
`,l+=`    ${o(0)} = evenSum + oddSum;
    ${o(1)} = evenDiff + oddRot;
`,l+=`    ${o(2)} = evenSum - oddSum;
    ${o(3)} = evenDiff - oddRot;
`}else for(let u=0;u<n;u++){let c=["leg[0]"];for(let d=1;d<n;d++){let h=r*Fa*(d*u)/n,f=Ri(Math.cos(h)),g=Ri(Math.sin(h));c.push(`vec2<f32>(leg[${d}].x*${f} - leg[${d}].y*${g}, leg[${d}].x*${g} + leg[${d}].y*${f})`)}l+=`    ${o(u)} = ${c.join(" + ")};
`}return`${l}  }
  workgroupBarrier();
`},Dp=(n,e,t)=>{let i="",r=1,s=0;for(let a of n)i+=Lp(a,r,e,s,t),r*=a,s=Os-s;return{code:i,resultOffset:s}},Np=(n,e,t,i,r)=>{let s=n.dims,a=s.length,o=s[a-1],l=s[e],u=t&&i?(l-1)*2:l;r!==void 0&&(u=r);let c=t&&i?1:2,d=i&&!t?Math.floor(u/2)+1:u,h=s.slice();h[e]=d,h[a-1]=c;let f=1;for(let y=e+1;y<a-1;y++)f*=s[y];let g=Q.size(s)/o/l;return{dataType:n.dataType,outputDims:h,length:u,signalLength:l,inner:f,batch:g,inputComponents:o,outputComponents:c,outputLength:d,inverse:t,onesided:i}},Xl=(n,e)=>[e,n.length,n.inputComponents,n.outputComponents,n.inverse,n.onesided].join(";"),jl=n=>[{type:12,data:n.batch},{type:12,data:n.signalLength},{type:12,data:n.inner},{type:12,data:n.outputLength}],Kl=(n,e,t)=>n.registerUniform("batch","u32").registerUniform("signalLength","u32").registerUniform("inner","u32").registerUniform("outputLength","u32").declareVariables(e,t),Up=n=>{let{dataType:e,length:t,inputComponents:i,outputComponents:r,inverse:s,onesided:a}=n,o=Xt(e),l=s?1:-1,u=s?1/t:1,c=ql(t),d=h=>{let f=se("x",e,[1]),g=Ae("y",e,[1]),y=R=>{let E=`inBase + (${R}) * uniforms.inner * ${i}u`,I=`f32(${f.getByOffset(E)})`,T=i===2?`f32(${f.getByOffset(`${E} + 1u`)})`:"0.0";return`vec2<f32>(${I}, ${T})`},_;if(s&&a){let R=Math.floor(t/2)+1,E=t%2===0?`select(provided, provided - 1u, provided == ${R}u)`:"provided";_=`
    let provided = min(uniforms.signalLength, ${R}u);
    for (var i = local_idx; i < ${t}u; i += ${di}u) {
      if (i < provided) { smem[i] = ${y("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();
    for (var k = local_idx + 1u; k < ${E}; k += ${di}u) {
      let h = smem[k];
      smem[${t}u - k] = vec2<f32>(h.x, -h.y);
    }
    workgroupBarrier();`}else _=`
    let loadCount = min(uniforms.signalLength, ${t}u);
    for (var i = local_idx; i < ${t}u; i += ${di}u) {
      if (i < loadCount) { smem[i] = ${y("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();`;let{code:p,resultOffset:x}=Dp(c,t,l),b=u===1?`smem[${x}u + i]`:`smem[${x}u + i] * ${Ri(u)}`,w=r===2?g.setByOffset("off + 1u",`${o}(v.y)`):"";return`
  ${Kl(h,f,g)}
  var<workgroup> smem: array<vec2<f32>, ${2*Os}>;
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${h.mainStart(di)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${i}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${r}u;
    ${_}
${p}    for (var i = local_idx; i < uniforms.outputLength; i += ${di}u) {
      let v = ${b};
      let off = outBase + i * uniforms.inner * ${r}u;
      ${g.setByOffset("off",`${o}(v.x)`)}
      ${w}
    }
  }`};return{name:"DFT",shaderCache:{hint:Xl(n,"fft"),inputDependencies:["type"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:n.outputDims,dataType:e}],programUniforms:jl(n),dispatchGroup:{x:n.batch}})}},Op=n=>{let{dataType:e,length:t,inputComponents:i,outputComponents:r,inverse:s,onesided:a}=n,o=Xt(e),l=s?1:-1,u=s?1/t:1,c=d=>{let h=se("x",e,[1]),f=Ae("y",e,[1]),g=b=>{let w=`inBase + (${b}) * uniforms.inner * ${i}u`,R=`f32(${h.getByOffset(w)})`,E=i===2?`f32(${h.getByOffset(`${w} + 1u`)})`:"0.0";return`vec2<f32>(${R}, ${E})`},y=s&&a?`fn spectrum(inBase: u32, k: u32) -> vec2<f32> {
    let provided = min(uniforms.signalLength, ${Math.floor(t/2)+1}u);
    if (k < provided) { return ${g("k")}; }
    let m = ${t}u - k;
    if (m < provided) {
      let h = ${g("m")};
      return vec2<f32>(h.x, -h.y);
    }
    return vec2<f32>(0.0, 0.0);
  }`:`fn spectrum(inBase: u32, n: u32) -> vec2<f32> {
    if (n < uniforms.signalLength) { return ${g("n")}; }
    return vec2<f32>(0.0, 0.0);
  }`,_=`
      let angle = ${Ri(l*Fa)} * f32(knMod) / ${Ri(t)};
      acc += cmul(spectrum(inBase, n), vec2<f32>(cos(angle), sin(angle)));
      knMod += k;
      if (knMod >= ${t}u) { knMod -= ${t}u; }`,p=r===2?f.setByOffset("off + 1u",`${o}(v.y)`):"",x=u===1?"acc":`acc * ${Ri(u)}`;return`
  ${Kl(d,h,f)}
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${y}
  ${d.mainStart(di)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${i}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${r}u;
    for (var k = local_idx; k < uniforms.outputLength; k += ${di}u) {
      var acc = vec2<f32>(0.0, 0.0);
      var knMod = 0u;
      for (var n = 0u; n < ${t}u; n++) {${_}
      }
      let v = ${x};
      let off = outBase + k * uniforms.inner * ${r}u;
      ${f.setByOffset("off",`${o}(v.x)`)}
      ${p}
    }
  }`};return{name:"DFT",shaderCache:{hint:Xl(n,"direct"),inputDependencies:["type"]},getShaderSource:c,getRunData:()=>({outputs:[{dims:n.outputDims,dataType:e}],programUniforms:jl(n),dispatchGroup:{x:n.batch}})}},Yl=n=>{if(!n||n.dataType===0)return;if(Q.size(n.dims)!==1)throw new Error("DFT optional scalar inputs must have exactly 1 element.");if(n.dataType===6)return n.getInt32Array()[0];let e=Number(n.getBigInt64Array()[0]);if(!Number.isSafeInteger(e))throw new Error("DFT optional scalar inputs are out of JavaScript safe integer range.");return e},kp=n=>{if(!n||n.length<1)throw new Error("DFT requires at least 1 input.");let e=n[0].dims;if(e.length<2)throw new Error("DFT input must have at least 2 dimensions.");let t=e[e.length-1];if(t!==1&&t!==2)throw new Error("DFT input's innermost dimension must be 1 (real) or 2 (complex).")},jv=(n,e)=>{kp(n.inputs);let t=n.inputs[0],i=t.dims.length,r=e.inverse!==0,s=e.onesided!==0,a=Yl(n.inputs[1]);if(a!==void 0&&a<=0)throw new Error("dft_length must be greater than zero.");let o=Q.normalizeAxis(Yl(n.inputs[2])??e.axis,i);if(o===i-1)throw new Error("DFT axis must refer to a signal dimension, not the innermost (real/imaginary) dimension.");if(r&&s&&t.dims[i-1]!==2)throw new Error("Inverse one-sided DFT (IRFFT) requires complex-valued input (innermost dimension 2).");let l=Np(t,o,r,s,a);if(l.length<=0)throw new Error(`Invalid DFT length: ${l.length}`);let u=l.length<=Os&&ql(l.length)!==void 0?Up(l):Op(l);n.compute(u,{inputs:[0]})},Kv=n=>xt({axis:n.axis??1,inverse:n.inverse??0,onesided:n.onesided??0})}),Ha,ks,Zl,zp,Bp,Fp,Hp,Jl,Vp,Yv,Zv,k1=ce(()=>{"use strict";Ue(),He(),Ft(),Ge(),Ha="[a-zA-Z]|\\.\\.\\.",ks="("+Ha+")+",Zl="^"+ks+"$",zp="("+ks+",)*"+ks,Bp="^"+zp+"$",Fp=class{constructor(n=-1){this.symbolToIndices=new Map,this.inputIndex=n}addSymbol(n,e){let t=this.symbolToIndices.get(n);t===void 0?t=[e]:t.push(e),this.symbolToIndices.set(n,t)}},Hp=class{constructor(n,e){this.equation=e,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[t,i]=e.includes("->")?e.split("->",2):[e,""];if(!t.match(RegExp(Bp)))throw new Error("Invalid LHS term");if(t.split(",").forEach((r,s)=>{let a=n[s].dims.slice();if(!r.match(RegExp(Zl)))throw new Error("Invalid LHS term");let o=this.processTerm(r,!0,a,s);this.lhs.push(o)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([r,s])=>s.count===1||r==="...").map(([r])=>r).join("");else if(!i.match(RegExp(ks)))throw new Error("Invalid RHS");i.match(RegExp(Ha,"g"))?.forEach(r=>{if(r==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(r);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(n,e,t){let i=this.symbolToInfo.get(n);if(i!==void 0){if(i.dimValue!==e&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(t)}else i={count:1,dimValue:e,inputIndices:[t]};this.symbolToInfo.set(n,i)}processTerm(n,e,t,i=-1){let r=t.length,s=!1,a=[],o=0;if(!n.match(RegExp(Zl))&&!e&&n!=="")throw new Error("Invalid LHS term");let l=n.match(RegExp(Ha,"g")),u=new Fp(i);return l?.forEach((c,d)=>{if(c==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let h=r-l.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(a=t.slice(o,o+h),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(e)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let f=0;f<a.length;f++){let g=String.fromCharCode(48+f);u.addSymbol(g,d+f),this.addSymbol(g,t[o++],i)}}else u.addSymbol(c,d+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,t[o++],i)}),u}},Jl=n=>n+"_max",Vp=(n,e,t,i)=>{let r=n.map(u=>u.length).map((u,c)=>se(`input${c}`,e,u)),s=Q.size(i),a=Ae("output",e,i.length),o=[...t.symbolToInfo.keys()].filter(u=>!t.rhs.symbolToIndices.has(u)),l=u=>{let c=[],d="var prod = 1.0;",h="var sum = 0.0;",f="sum += prod;",g=[],y=[],_=[],p=[],x=t.symbolToInfo.size===t.rhs.symbolToIndices.size;t.symbolToInfo.forEach((w,R)=>{if(t.rhs.symbolToIndices.has(R)){let E=t.rhs.symbolToIndices.get(R)?.[0];E!==void 0&&t.lhs.forEach((I,T)=>{if(w.inputIndices.includes(T)){let C=I.symbolToIndices.get(R);if(C===void 0)throw new Error("Invalid symbol error");C.forEach(A=>{c.push(`${r[T].indicesSet(`input${T}Indices`,A,a.indicesGet("outputIndices",E))}`)})}})}else t.lhs.forEach((E,I)=>{if(w.inputIndices.includes(I)){let T=E.symbolToIndices.get(R);if(T===void 0)throw new Error("Invalid symbol error");T.forEach(C=>{g.push(`${r[I].indicesSet(`input${I}Indices`,C,`${R}`)}`)}),p.push(`prod *= ${r[I].getByIndices(`input${I}Indices`)};`)}}),y.push(`for(var ${R}: u32 = 0; ${R} < uniforms.${Jl(R)}; ${R}++) {`),_.push("}")});let b=x?[...c,`let sum = ${r.map((w,R)=>w.getByIndices(`input${R}Indices`)).join(" * ")};`]:[...c,h,...y,...g,d,...p,f,..._];return`
            ${u.registerUniforms(o.map(w=>({name:`${Jl(w)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...r,a)}

            ${u.mainStart()}
            ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${r.map((w,R)=>`var input${R}Indices: ${r[R].type.indices};`).join(`
`)}
            ${b.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:t.equation,inputDependencies:n.map(()=>"rank")},getRunData:()=>{let u=o.filter(d=>t.symbolToInfo.has(d)).map(d=>({type:12,data:t.symbolToInfo.get(d)?.dimValue||0}));u.push({type:12,data:s});let c=n.map((d,h)=>[...Le(d)]).reduce((d,h)=>d.concat(h),u);return c.push(...Le(i)),{outputs:[{dims:i,dataType:e}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}},getShaderSource:l}},Yv=(n,e)=>{let t=new Hp(n.inputs,e.equation),i=t.outputDims,r=n.inputs.map((s,a)=>s.dims);n.compute(Vp(r,n.inputs[0].dataType,t,i))},Zv=n=>{let e=n.equation.replace(/\s+/g,"");return xt({equation:e})}}),Gp,Ql,Wp,qp,Jv,z1=ce(()=>{"use strict";Ue(),He(),Ge(),Gp=n=>{if(!n||n.length!==2)throw new Error("Expand requires 2 input.");let e=n[0].dims,t=Array.from(n[1].getBigInt64Array(),Number),i=t.length<e.length?0:t.length-e.length,r=e.length<t.length?0:e.length-t.length;for(;i<t.length&&r<e.length;++i,++r)if(t[i]!==e[r]&&t[i]!==1&&e[r]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Ql=(n,e)=>{let t=n.length-e.length,i=[];for(let r=0;r<t;++r)i.push(n[r]);for(let r=0;r<e.length;++r)i.push(e[r]===1?n[r+t]:e[r]);return i},Wp=(n,e)=>n.length>e.length?Ql(n,e):Ql(e,n),qp=n=>{let e=n[0].dims,t=Array.from(n[1].getBigInt64Array(),Number),i=Wp(e,t),r=n[0].dataType,s=r===9||Q.size(e)===1,a=r===9||e.length>0&&e[e.length-1]%4===0?4:1,o=s||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(Q.size(i)/o),u=d=>{let h=se("input",r,e.length,a),f=Ae("output",r,i.length,o),g;if(r===9){let y=(_,p,x="")=>`
          let outputIndices${p} = ${f.offsetToIndices(`outputOffset + ${p}u`)};
          let offset${p} = ${h.broadcastedIndicesToOffset(`outputIndices${p}`,f)};
          let index${p} = offset${p} / 4u;
          let component${p} = offset${p} % 4u;
          ${_}[${p}] = ${x}(${h.getByOffset(`index${p}`)}[component${p}]);
        `;g=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${y("data",0,"u32")}
        ${y("data",1,"u32")}
        ${y("data",2,"u32")}
        ${y("data",3,"u32")}
        ${f.setByOffset("global_idx","data")}
      }`}else g=`
        let outputIndices = ${f.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",f)};
        let data = ${f.type.value}(${h.getByOffset(`inputOffset / ${a}`)});
        ${f.setByOffset("global_idx","data")}
      }`;return`
    ${d.registerUniform("vec_size","u32").declareVariables(h,f)}
    ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${g}`},c=[{type:12,data:l},...Le(e,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${a}${o}`,inputDependencies:["rank"]},getShaderSource:u,getRunData:()=>({outputs:[{dims:i,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},Jv=n=>{Gp(n.inputs),n.compute(qp(n.inputs),{inputs:[0]})}}),Xp,Qv,B1=ce(()=>{"use strict";Ue(),He(),Ge(),Yc(),Xp=n=>{let e=n[0].dataType,t=Q.size(n[0].dims),i=Q.size(n[1].dims),r=i%4===0,s=a=>{let o=se("x",e,[1],4),l=se("bias",e,[1],4),u=Ae("y",e,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],d=f=>`
      let bias${f}_offset: u32 = (global_idx * 4 + ${f}) % uniforms.bias_size;
      let bias${f} = ${l.getByOffset(`bias${f}_offset / 4`)}[bias${f}_offset % 4];`,h=r?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${d(0)}${d(1)}${d(2)}${d(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(c).declareVariables(o,l,u)}

    ${cc(Xt(e))}

    ${a.mainStart(os)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${u.setByOffset("global_idx",dc("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${r}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(t/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(t/os/4)}})}},Qv=n=>{n.inputs.length<2||Q.size(n.inputs[1].dims)===0?_v(n):n.compute(Xp(n.inputs))}}),jp,Kp,ex,tx,F1=ce(()=>{"use strict";Ue(),He(),Ft(),Ge(),jp=n=>{if(!n||n.length!==2)throw new Error("Gather requires 2 inputs.")},Kp=(n,e)=>{let t=n[0].dims,i=n[1].dims,r=t.length,s=Q.normalizeAxis(e.axis,r),a=t.slice(0);a.splice(s,1,...i);let o=t[s],l=n[0].dataType===9?4:1,u=Math.ceil(Q.size(a)/l),c=[{type:12,data:u},{type:6,data:o},{type:12,data:s},...Le(n[0].dims,n[1].dims,a)],d=h=>{let f=se("data",n[0].dataType,n[0].dims.length,l),g=se("inputIndices",n[1].dataType,n[1].dims.length),y=Ae("output",n[0].dataType,a.length,l),_=x=>{let b=i.length,w=`var indicesIndices${x}  = ${g.type.indices}(0);`;for(let R=0;R<b;R++)w+=`${b>1?`indicesIndices${x}[${R}]`:`indicesIndices${x}`} = ${a.length>1?`outputIndices${x}[uniforms.axis + ${R}]`:`outputIndices${x}`};`;w+=`
          var idx${x} = ${g.getByIndices(`indicesIndices${x}`)};
          if (idx${x} < 0) {
            idx${x} = idx${x} + uniforms.axisDimLimit;
          }
          var dataIndices${x} : ${f.type.indices};
        `;for(let R=0,E=0;R<r;R++)R===s?(w+=`${r>1?`dataIndices${x}[${R}]`:`dataIndices${x}`} = u32(idx${x});`,E+=b):(w+=`${r>1?`dataIndices${x}[${R}]`:`dataIndices${x}`} = ${a.length>1?`outputIndices${x}[${E}]`:`outputIndices${x}`};`,E++);return w},p;if(n[0].dataType===9){let x=(b,w,R="")=>`
          let outputIndices${w} = ${y.offsetToIndices(`outputOffset + ${w}u`)};
          ${_(w)};
          let offset${w} = ${f.indicesToOffset(`dataIndices${w}`)};
          let index${w} = offset${w} / 4u;
          let component${w} = offset${w} % 4u;
          ${b}[${w}] = ${R}(${f.getByOffset(`index${w}`)}[component${w}]);
        `;p=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${x("value",0,"u32")}
        ${x("value",1,"u32")}
        ${x("value",2,"u32")}
        ${x("value",3,"u32")}
        ${y.setByOffset("global_idx","value")}
      `}else p=`
      let outputIndices = ${y.offsetToIndices("global_idx")};
      ${_("")};
      let value = ${f.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,g,y)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${p}
      }`};return{name:"Gather",shaderCache:{hint:e.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:d}},ex=n=>xt({axis:n.axis}),tx=(n,e)=>{let t=n.inputs;jp(t),n.compute(Kp(n.inputs,e))}}),Yp,nx,ix,H1=ce(()=>{"use strict";Ue(),He(),Ge(),Yp=(n,e,t,i,r,s,a,o,l)=>{let u=[{type:12,data:s},{type:12,data:i},{type:12,data:r},{type:12,data:t},{type:12,data:a},{type:12,data:o},{type:12,data:l}],c=[s];u.push(...Le(e.dims,c));let d=h=>{let f=se("indices_data",e.dataType,e.dims.length),g=Ae("input_slice_offsets_data",12,1,1),y=[f,g],_=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:r.length},{name:"sizes_from_slice_dims_data",type:"u32",length:t.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${h.registerUniforms(_).declareVariables(...y)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${r.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${t.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return n.compute({name:"computeSliceOffsets",shaderCache:{hint:`${r.length}_${t.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:n.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u}),getShaderSource:d},{inputs:[e],outputs:[-1]})[0]},nx=(n,e)=>{let t=n.inputs,i=t[0].dims,r=t[0].dataType,s=t[1].dims,a=s[s.length-1],o=Q.sizeToDimension(s,s.length-1),l=Q.sizeFromDimension(i,e.batchDims+a),u=Q.sizeToDimension(i,e.batchDims),c=Q.sizeFromDimension(i,e.batchDims),d=o/u,h=new Array(a),f=l;for(let w=0;w<a;++w)h[a-1-w]=f,f*=i[e.batchDims+a-1-w];let g=Yp(n,t[1],h,e.batchDims,i,o,d,c,a),y=e.batchDims+a;if(y>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let _=s.slice(0,-1).concat(i.slice(y)),p=Q.size(_),x=[{type:12,data:p},{type:12,data:l},...Le(t[0].dims,g.dims,_)],b=w=>{let R=se("data",t[0].dataType,t[0].dims.length),E=se("slice_offsets",12,g.dims.length),I=Ae("output",t[0].dataType,_.length);return`
          ${w.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(R,E,I)}
            ${w.mainStart()}
            ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};n.compute({name:"GatherND",shaderCache:{hint:e.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:_,dataType:r}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:x}),getShaderSource:b},{inputs:[t[0],g]})},ix=n=>({batchDims:n.batch_dims,cacheKey:""})}),Zp,Jp,rx,sx,V1=ce(()=>{"use strict";Ue(),He(),Ft(),Ge(),Zp=(n,e)=>{if(n.length<3||n.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let t=Q.normalizeAxis(e.quantizeAxis,n[0].dims.length),i=e.blockSize,r=n[0],s=n[2],a=n.length===4?n[3]:void 0;if(s.dims.length!==r.dims.length||!r.dims.map((o,l)=>l===t?Math.ceil(o/i)===s.dims[l]:o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==r.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==s.dims.length||!a.dims.map((o,l)=>o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Jp=(n,e)=>{let t=n[0].dims,i=n[1].dims,r=t.length,s=Q.normalizeAxis(e.gatherAxis,r),a=Q.normalizeAxis(e.quantizeAxis,r),o=t.slice(0);o.splice(s,1,...i);let l=Q.size(o),u=n[2].dataType,c=n[0].dataType===22,d=[{type:12,data:l},{type:12,data:a},{type:12,data:s},{type:12,data:e.blockSize},...Le(...n.map((f,g)=>f.dims),o)],h=f=>{let g=se("data",n[0].dataType,n[0].dims.length),y=se("inputIndices",n[1].dataType,n[1].dims.length),_=se("scales",n[2].dataType,n[2].dims.length),p=n.length>3?se("zeroPoint",n[3].dataType,n[3].dims.length):void 0,x=Ae("output",u,o.length),b=[g,y,_];p&&b.push(p);let w=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${f.registerUniforms(w).declareVariables(...b,x)}
        ${f.mainStart()}
        let output_indices = ${x.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${x.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${x.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${g.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${x.indicesGet("output_indices","i")};
          ${g.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${t[s]};
        }
        ${g.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${x.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${g.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${g.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${g.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${_.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${_.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${_.getByIndices("scale_indices")};
        ${p?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${p.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${p.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Xt(u)}(quantized_data - zero_point) * scale;
        ${x.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${e.cacheKey};${n.filter((f,g)=>g!==1).map(f=>f.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:n.length},(f,g)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:u}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:h}},rx=(n,e)=>{let t=n.inputs;Zp(t,e),n.compute(Jp(n.inputs,e))},sx=n=>xt({blockSize:n.blockSize,gatherAxis:n.gatherAxis,quantizeAxis:n.quantizeAxis})}),Qp,em,ax,ox,G1=ce(()=>{"use strict";Ue(),He(),Ft(),Ge(),Qp=n=>{if(!n||n.length!==2)throw new Error("GatherElements requires 2 inputs.");if(n[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(n[0].dims.length!==n[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},em=(n,e)=>{let t=n[0].dims,i=n[0].dataType,r=t.length,s=n[1].dims,a=n[1].dataType,o=Q.normalizeAxis(e.axis,r),l=t[o],u=s.slice(0),c=Q.size(u),d=se("input",i,r),h=se("indicesInput",a,s.length),f=Ae("output",i,u.length),g=[{type:12,data:c},{type:6,data:l},{type:12,data:o}];return g.push(...Le(t,s,u)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:u,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:g}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(d,h,f)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${f.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${d.type.indices}(outputIndices);
      ${d.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${d.getByIndices("inputIndices")};

      ${f.setByOffset("global_idx","value")};
  }`}},ax=n=>xt({axis:n.axis}),ox=(n,e)=>{let t=n.inputs;Qp(t),n.compute(em(n.inputs,e))}}),tm,nm,lx,ux,W1=ce(()=>{"use strict";Ue(),He(),Ge(),tm=n=>{if(!n)throw new Error("Input is missing");if(n.length<2||n.length>3)throw new Error("Invaid input number.");if(n.length===3&&n[2].dims.length>2)throw new Error("Invalid input shape of C");if(n[0].dataType!==n[1].dataType||n.length===3&&n[0].dataType!==n[2].dataType)throw new Error("Input types are mismatched")},nm=(n,e)=>{let t=n[0].dims.slice(),i=n[1].dims.slice(),[r,s,a]=iy.getShapeOfGemmResult(t,e.transA,i,e.transB,n.length===3?n[2].dims:void 0),o=[r,s];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,u=Math.ceil(s/l),c=Math.ceil(r/l),d=!0,h=Q.size(o),f=[{type:12,data:d?u:h},{type:12,data:r},{type:12,data:s},{type:12,data:a},{type:1,data:e.alpha},{type:1,data:e.beta}],g=["type","type"];n.length===3&&(f.push(...Le(n[2].dims)),g.push("rank")),f.push(...Le(o));let y=p=>{let x="";e.transA&&e.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":e.transA&&!e.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!e.transA&&e.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!e.transA&&!e.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let b=e.alpha===1?"":"value *= uniforms.alpha;",w=se("a",n[0].dataType,n[0].dims),R=se("b",n[1].dataType,n[1].dims),E=w.type.value,I=null,T=[w,R];n.length===3&&(I=se("c",n[2].dataType,n[2].dims.length),T.push(I));let C=Ae("output",n[0].dataType,o.length);T.push(C);let A=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${p.registerUniforms(A).declareVariables(...T)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${E}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${b}
    ${I!=null?`let cOffset = ${I.broadcastedIndicesToOffset("vec2(m, n)",C)}; value += ${E}(uniforms.beta) * ${I.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},_=p=>{let x=se("a",n[0].dataType,n[0].dims),b=se("b",n[1].dataType,n[1].dims),w=null,R=[x,b];n.length===3&&(w=se("c",n[2].dataType,n[2].dims.length),R.push(w));let E=Ae("output",n[0].dataType,o.length);R.push(E);let I=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],T="",C="";e.transA&&e.transB?(C=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${x.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${b.type.value}(0);
      }
      `,T="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):e.transA&&!e.transB?(C=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${x.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${b.type.value}(0);
      }
      `,T="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!e.transA&&e.transB?(C=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${x.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${b.type.value}(0);
      }
      `,T="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!e.transA&&!e.transB&&(C=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${x.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${b.type.value}(0);
      }
      `,T="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let A=e.alpha===1?"":"value *= uniforms.alpha;";return`
  ${p.registerUniforms(I).declareVariables(...R)}
  var<workgroup> tile_a: array<array<${x.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${b.type.storage}, ${l}>, ${l}>;
  ${p.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${E.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${C}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${T}
      }
      workgroupBarrier();
    }

    ${A}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${w!=null?`let cOffset = ${w.broadcastedIndicesToOffset("vec2(m, n)",E)}; value += ${E.type.value}(uniforms.beta) * ${w.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return d?{name:"GemmShared",shaderCache:{hint:`${e.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:n[0].dataType}],dispatchGroup:{x:u*c},programUniforms:f}),getShaderSource:_}:{name:"Gemm",shaderCache:{hint:`${e.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:o,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:f}),getShaderSource:y}},lx=n=>{let e=n.transA,t=n.transB,i=n.alpha,r=n.beta;return{transA:e,transB:t,alpha:i,beta:r,cacheKey:`${n.transA};${n.transB};${n.alpha===1}`}},ux=(n,e)=>{tm(n.inputs),n.compute(nm(n.inputs,e))}}),Zn,hi,ir,rr,im,rm,sm,am,om,lm,um,cm,cx,dx,q1=ce(()=>{"use strict";Ue(),He(),Ft(),Ge(),[Zn,hi,ir,rr]=[0,1,2,3],im=n=>{if(n[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(n[0].dims.length!==n[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(n[0].dims.length-2!==n[1].dims[n[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${n[0].dims.length-2}`);if(n[0].dims[0]!==n[1].dims[0])throw new Error("grid batch size must match input batch size")},rm=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,sm=n=>`
  fn gs_bicubic_interpolate(p: mat4x4<${n}>, x: f32, y: f32) -> ${n} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${n}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,am=n=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${n.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,om=n=>`
  ${n.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,lm=(n,e,t)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${e} {
     var pixel = ${e}(0);
     var indices = vec4<u32>(0);
     indices[${Zn}] = batch;
     indices[${hi}] = channel;`+(()=>{switch(t.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${ir}] = u32(r);
            indices[${rr}] = u32(c);
          } else {
            return ${e}(0);
          }
        `;case"border":return`
          indices[${ir}] = u32(clamp(r, 0, H - 1));
          indices[${rr}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${ir}] = gs_reflect(r, border[1], border[3]);
          indices[${rr}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${t.paddingMode} is not supported`)}})()+`
    return ${n.getByIndices("indices")};
  }
`,um=(n,e,t)=>(()=>{switch(t.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Zn}], indices[${hi}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Zn}], indices[${hi}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Zn}], indices[${hi}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Zn}], indices[${hi}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Zn}], indices[${hi}], border);

          let dx2 = ${e}(f32(x2) - x);
          let dx1 = ${e}(x - f32(x1));
          let dy2 = ${e}(f32(y2) - y);
          let dy1 = ${e}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${e}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Zn}], indices[${hi}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${t.mode} is not supported`)}})()+`${n.setByOffset("global_idx","result")}`,cm=(n,e)=>{let t=se("x",n[0].dataType,n[0].dims.length),i=[n[1].dims[0],n[1].dims[1],n[1].dims[2]],r=se("grid",n[1].dataType,i.length,2),s=[n[0].dims[0],n[0].dims[1],n[1].dims[1],n[1].dims[2]];e.format==="NHWC"&&(s=[n[0].dims[0],n[1].dims[1],n[1].dims[2],n[0].dims[3]],[Zn,hi,ir,rr]=[0,3,1,2]);let a=Ae("output",n[0].dataType,s.length),o=t.type.value,l=Q.size(s),u=[{type:12,data:l},...Le(n[0].dims,i,s)],c=d=>`
  ${d.registerUniform("output_size","u32").declareVariables(t,r,a)}
  ${rm}
  ${sm(o)}
  ${am(e)}
  ${om(e)}
  ${lm(t,o,e)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${ir}]);
      let W_in = i32(uniforms.x_shape[${rr}]);

      ${e.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${a.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Zn}], indices[${ir}], indices[${rr}]);
      let nxy = ${r.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${um(a,o,e)}
  }`;return{name:"GridSample",shaderCache:{hint:`${e.cacheKey}`,inputDependencies:["type","type"]},getRunData:d=>{let h=Q.size(s);return{outputs:[{dims:s,dataType:d[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:u}},getShaderSource:c}},cx=(n,e)=>{im(n.inputs),n.compute(cm(n.inputs,e))},dx=n=>xt({alignCorners:n.align_corners,mode:n.mode,paddingMode:n.padding_mode,format:n.format})}),ln,dm,hx,eu,hm,ta,fx,px=ce(()=>{"use strict";Ue(),He(),Ft(),qc(),Kc(),Ge(),Yi(),ln=(n,e)=>n.length>e&&n[e].dims.length>0?n[e]:void 0,dm=(n,e)=>{let t=n[0],i=ln(n,1),r=ln(n,2),s=ln(n,3),a=ln(n,4),o=ln(n,5),l=ln(n,6),u=ln(n,7);if(t.dims.length!==3&&t.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=t.dims[0],d=t.dims[1],h=t.dims.length===3?t.dims[2]:e.numHeads*t.dims[4],f=d,g=0,y=0,_=Math.floor(h/e.numHeads);if(l&&u&&Q.size(l.dims)&&Q.size(u.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==e.numHeads||l.dims[3]!==_)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[0]!==c||u.dims[1]!==e.numHeads||u.dims[3]!==_)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==u.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(u.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=l.dims[2],y=l.dims[2]}else if(l&&Q.size(l.dims)||u&&Q.size(u.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let p;if(i&&Q.size(i.dims)>0){if(t.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(t.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==t.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');p=2,f=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==e.numHeads||i.dims[3]!==2||i.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(r)throw new Error('Expect "value" be none when "key" has packed kv format.');p=5,f=i.dims[1]}else{if(i.dims[1]!==e.numHeads||i.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=0,f=i.dims[2]}}else{if(t.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(t.dims[2]!==e.numHeads||t.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');p=3}if(s&&Q.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let x=g+f,b=0;if(a&&Q.size(a.dims)>0){b=8;let I=a.dims;throw I.length===1?I[0]===c?b=1:I[0]===3*c+2&&(b=3):I.length===2&&I[0]===c&&I[1]===x&&(b=5),b===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let w=!1,R=h;if(r&&Q.size(r.dims)>0){if(r.dims.length!==3&&r.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(t.dims[0]!==r.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(r.dims.length===3){if(f!==r.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');R=r.dims[2]}else{if(f!==r.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');R=r.dims[1]*r.dims[3],w=!0}}let E=!1;if(a&&Q.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(o&&Q.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==c||o.dims[1]!==e.numHeads||o.dims[2]!==d||o.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:d,pastSequenceLength:g,kvSequenceLength:f,totalSequenceLength:x,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:h,vHiddenSize:R,headSize:_,vHeadSize:Math.floor(R/e.numHeads),numHeads:e.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:e.maskFilterValue,maskType:b,scale:e.scale,broadcastResPosBias:E,passPastInKv:w,qkvFormat:p}},hx=n=>xt({...n}),eu=xt({perm:[0,2,1,3]}),hm=(n,e,t,i,r,s,a)=>{let o=[i,r,s],l=Q.size(o),u=[{type:12,data:l},{type:12,data:a},{type:12,data:s}],c=d=>{let h=Ae("qkv_with_bias",e.dataType,o),f=se("qkv",e.dataType,o),g=se("bias",t.dataType,o),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${d.registerUniforms(y).declareVariables(f,g,h)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return n.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:e.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:c},{inputs:[e,t],outputs:[-1]})[0]},ta=(n,e,t,i,r,s,a,o)=>{let l=s;if(a&&Q.size(a.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=hm(n,s,a,e,i,t*r,o),l=l.reshape([e,i,t,r]),t===1||i===1?l:n.compute(Tn(l,eu.perm),{inputs:[l],outputs:[-1]})[0]}else return s.dims.length===3&&(l=s.reshape([e,i,t,r])),t===1||i===1?l:n.compute(Tn(l,eu.perm),{inputs:[l],outputs:[-1]})[0]},fx=(n,e)=>{let t=dm(n.inputs,e),i=n.inputs[0],r=ln(n.inputs,1),s=ln(n.inputs,2),a=ln(n.inputs,3),o=ln(n.inputs,4),l=ln(n.inputs,5),u=ln(n.inputs,6),c=ln(n.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(r?.dims.length===5)throw new Error("Packed KV is not implemented");let d=r&&s&&r.dims.length===4&&s.dims.length===4,h=ta(n,t.batchSize,t.numHeads,t.sequenceLength,t.headSize,i,a,0);if(d)return da(n,h,r,s,o,void 0,u,c,l,t);if(!r||!s)throw new Error("key and value must be provided");let f=ta(n,t.batchSize,t.numHeads,t.kvSequenceLength,t.headSize,r,a,t.hiddenSize),g=ta(n,t.batchSize,t.numHeads,t.kvSequenceLength,t.vHeadSize,s,a,2*t.hiddenSize);da(n,h,f,g,o,void 0,u,c,l,t)}}),fm,pm,mm,gm,gc,mx,gx,_x=ce(()=>{"use strict";Ue(),He(),Ft(),Ge(),fm=n=>{if(!n||n.length<1)throw new Error("too few inputs")},pm=(n,e)=>{let t=[],i=e.numOutputs;return n[1].dims[0]>0&&(n[1].getBigInt64Array().forEach(r=>t.push(Number(r))),i=t.length),xt({numOutputs:i,axis:e.axis,splitSizes:t})},mm=n=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${n}u; i += 1u ) {
    if (index < ${Pe("uniforms.size_in_split_axis","i",n)}) {
        return i;
    }
    }
    return ${n}u;
}`,gm=n=>{let e=n.length,t=[];for(let i=0;i<e;++i){let r=n[i].setByIndices("indices","input[global_idx]");e===1?t.push(r):i===0?t.push(`if (output_number == ${i}u) { ${r} }`):i===e-1?t.push(`else { ${r} }`):t.push(`else if (output_number == ${i}) { ${r} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${n[0].type.indices}, global_idx: u32) {
        ${t.join(`
`)}
      }`},gc=(n,e)=>{let t=n[0].dims,i=Q.size(t),r=n[0].dataType,s=Q.normalizeAxis(e.axis,t.length),a=new Array(e.numOutputs),o=se("input",r,t.length),l=new Array(e.numOutputs),u=[],c=[],d=0,h=[{type:12,data:i}];for(let g=0;g<e.numOutputs;g++){d+=e.splitSizes[g],l[g]=d;let y=t.slice();y[s]=e.splitSizes[g],c.push(y),a[g]=Ae(`output${g}`,r,y.length),u.push({dims:c[g],dataType:n[0].dataType})}h.push({type:12,data:l},...Le(t,...c));let f=g=>`
  ${g.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...a)}
  ${mm(l.length)}
  ${gm(a)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Pe("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:e.cacheKey,inputDependencies:["rank"]},getShaderSource:f,getRunData:()=>({outputs:u,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h})}},mx=(n,e)=>{fm(n.inputs);let t=n.inputs.length===1?e:pm(n.inputs,e);n.compute(gc(n.inputs,t),{inputs:[0]})},gx=n=>{let e=n.axis,t=n.splitSizes,i=n.numOutputs<0?t.length:n.numOutputs;if(i!==t.length)throw new Error("numOutputs and splitSizes length must be equal");return xt({axis:e,numOutputs:i,splitSizes:t})}}),_m,Do,yx,vx=ce(()=>{"use strict";Ue(),He(),Ft(),Ge(),_m=(n,e)=>{let[t,i,r,s]=n,{numHeads:a,rotaryEmbeddingDim:o}=e;if(t.dims.length!==3&&t.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${t.dims.length}`);if(!Q.areEqual(i.dims,[])&&!Q.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(r.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${r.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!Q.areEqual(r.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=t.dims[0],u=t.dims[t.dims.length-2],c=r.dims[0],d=Q.sizeFromDimension(t.dims,1)/u,h=o===0?r.dims[1]*2:d/a;if(o>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(u!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(u>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(h/2!==r.dims[1]&&o/2!==r.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${r.dims[1]}`)},Do=(n,e)=>{let{interleaved:t,numHeads:i,rotaryEmbeddingDim:r,scale:s}=e,a=n[0].dims[0],o=Q.sizeFromDimension(n[0].dims,1),l=n[0].dims[n[0].dims.length-2],u=o/l,c=n[2].dims[1],d=r===0?c*2:u/i,h=new Array(a,l,u/d,d-c),f=Q.computeStrides(h),g=[{type:1,data:s},{type:12,data:h},{type:12,data:f},...n[0].dims.length===3?new Array({type:12,data:[o,u,d,1]}):[],...n[0].dims.length===4?new Array({type:12,data:[o,d,l*d,1]}):[],...Le(n[0].dims,n[1].dims,n[2].dims,n[3].dims,n[0].dims)],y=_=>{let p=se("input",n[0].dataType,n[0].dims.length),x=se("position_ids",n[1].dataType,n[1].dims.length),b=se("cos_cache",n[2].dataType,n[2].dims.length),w=se("sin_cache",n[3].dataType,n[3].dims.length),R=Ae("output",n[0].dataType,n[0].dims.length);return _.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:f.length},{name:"input_output_strides",type:"u32",length:f.length}]),`
        ${_.declareVariables(p,x,b,w,R)}

        ${_.mainStart(os)}
          let half_rotary_emb_dim = uniforms.${b.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${x.broadcastedIndicesToOffset("bsnh.xy",Ae("",x.type.tensor,2))};
            let position_id =
                u32(${x.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${t});
            let j = i + select(half_rotary_emb_dim, 1, ${t});
            let re = ${p.getByOffset("i")} * ${b.get("position_id","bsnh[3]")} -
                ${p.getByOffset("j")} * ${w.get("position_id","bsnh[3]")};
            ${R.setByOffset("i","re")}
            let im = ${p.getByOffset("i")} * ${w.get("position_id","bsnh[3]")} +
                ${p.getByOffset("j")} * ${b.get("position_id","bsnh[3]")};
            ${R.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${R.setByOffset("k",p.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:xt({interleaved:t}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:n[0].dims,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(Q.size(h)/os)},programUniforms:g})}},yx=(n,e)=>{_m(n.inputs,e),n.compute(Do(n.inputs,e))}}),ym,vm,tu,xm,xx,X1=ce(()=>{"use strict";Ft(),Ue(),Kc(),px(),_x(),Yi(),vx(),Ge(),ym=(n,e)=>{if(e.doRotary&&n.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let t=n[0],i=n[1],r=n[2],s=n[3],a=n[4];if(e.doRotary!==0&&n.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(e.localWindowSize!==-1)throw new Error("Local attention is not supported");if(e.softcap!==0)throw new Error("Softcap is not supported");if(e.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(e.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(t.dims.length!==3&&t.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=t.dims[0],u=t.dims[1],c=t.dims.length===3?o?t.dims[2]/3:t.dims[2]:e.numHeads*t.dims[4],d=u,h=0,f=!i||i.dims.length===0,g=Math.floor(f?c/(e.numHeads+2*e.kvNumHeads):c/e.numHeads);f&&(c=g*e.numHeads);let y=s&&s.dims.length!==0,_=a&&a.dims.length!==0;if(y&&s.dims.length===4&&s.dims[0]===l&&s.dims[1]!==e.kvNumHeads&&s.dims[2]===e.kvNumHeads&&s.dims[3]===g)throw new Error("BSNH pastKey/pastValue is not supported");if(y&&_){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=s.dims[2]}else if(y||_)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let p=1;if(i&&i.dims.length>0){if(t.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(t.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(t.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');d=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==e.numHeads||i.dims[3]!==2||i.dims[4]!==g)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(r)throw new Error('Expect "value" be none when "key" has packed kv format.');d=i.dims[1]}else{if(i.dims[1]!==e.numHeads||i.dims[3]!==g)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');d=i.dims[2]}}else{if(t.dims.length!==3&&t.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(t.dims.length===5&&(t.dims[2]!==e.numHeads||t.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');p=3}let x=0,b=!1,w=e.kvNumHeads?g*e.kvNumHeads:c;if(r&&r.dims.length>0){if(r.dims.length!==3&&r.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(t.dims[0]!==r.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(r.dims.length===3){if(d!==r.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');w=r.dims[2]}else{if(d!==r.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');w=r.dims[1]*r.dims[3],b=!0}}let R=n.length>4?n[5]:void 0;if(R){if(R.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let E=R.dims.reduce((I,T)=>I*T,1);if(E!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${E}.`);for(let I=0;I<R.dims.length;I++)if(R.dims[I]!==1&&R.dims[I]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${I}] = ${R.dims[I]}.`)}return{batchSize:l,sequenceLength:u,pastSequenceLength:h,kvSequenceLength:d,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:w,headSize:g,vHeadSize:Math.floor(w/e.kvNumHeads),numHeads:e.numHeads,kvNumHeads:e.kvNumHeads,nReps:e.numHeads/e.kvNumHeads,pastPresentShareBuffer:!1,maskType:x,scale:e.scale,broadcastResPosBias:!1,passPastInKv:b,qkvFormat:p}},vm=xt({perm:[0,2,1,3]}),tu=(n,e,t)=>{let i=e,r=t.kvNumHeads;return e.dims.length===3&&t.kvSequenceLength!==0&&(i=e.reshape([t.batchSize,t.kvSequenceLength,r,t.headSize]),i=n.compute(Tn(i,vm.perm),{inputs:[i],outputs:[-1]})[0]),i},xm=(n,e,t,i)=>{let r=7,s=["type","type"],a=[n*e],o=n*e,l=[{type:12,data:o},{type:12,data:e},{type:12,data:n}],u=c=>{let d=se("seq_lens",t.dataType,t.dims),h=se("total_seq_lens",i.dataType,i.dims),f=Ae("pos_ids",r,a),g=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(g).declareVariables(d,h,f)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${h.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${d.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${f.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${f.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${f.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${n};${e}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:u}},xx=(n,e)=>{if(n.inputs.length>14&&n.inputs[14]||n.inputs.length>15&&n.inputs[15])throw new Error("GroupQueryAttention (JSEP): q_norm_weight / k_norm_weight inputs are not supported. The per-head Q/K RMS normalization prologue is implemented only on the CUDA and native WebGPU EPs.");let t=ym(n.inputs,e);if(n.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(n.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=n.inputs[0],r=n.inputs[1]&&n.inputs[1].dims.length>0?n.inputs[1]:void 0,s=n.inputs[2]&&n.inputs[2].dims.length>0?n.inputs[2]:void 0,a=n.inputs[3]&&n.inputs[3].dims.length!==0?n.inputs[3]:void 0,o=n.inputs[4]&&n.inputs[4].dims.length!==0?n.inputs[4]:void 0,l=n.inputs.length>4?n.inputs[5]:void 0,u=n.inputs.length>5?n.inputs[6]:void 0,c=t.kvNumHeads?t.kvNumHeads:t.numHeads,d=xt({axis:2,numOutputs:3,splitSizes:[t.numHeads*t.headSize,c*t.headSize,c*t.headSize]}),[h,f,g]=!r&&!s?n.compute(gc([i],d),{inputs:[i],outputs:[-1,-1,-1]}):[i,r,s],y,_;if(e.doRotary){let w=n.compute(xm(t.batchSize,t.sequenceLength,l,u),{inputs:[l,u],outputs:[-1]})[0],R=n.inputs[7],E=n.inputs[8],I=xt({interleaved:e.rotaryInterleaved!==0,numHeads:t.numHeads,rotaryEmbeddingDim:0,scale:e.scale}),T=[h,w,R,E],C=[-1];y=n.compute(Do(T,I),{inputs:T,outputs:C})[0],T.splice(0,1,f);let A=xt({interleaved:e.rotaryInterleaved!==0,numHeads:t.kvNumHeads,rotaryEmbeddingDim:0,scale:e.scale});_=n.compute(Do(T,A),{inputs:T,outputs:C})[0]}let p=ta(n,t.batchSize,t.numHeads,t.sequenceLength,t.headSize,e.doRotary?y:h,void 0,0),x=tu(n,e.doRotary?_:f,t),b=tu(n,g,t);da(n,p,x,b,void 0,void 0,a,o,void 0,t,l,u)}}),nu,bm,wm,bx,j1=ce(()=>{"use strict";Ue(),He(),Yi(),Ge(),nu=(n,e,t,i,r,s,a,o)=>{let l=zt(s),u=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,d=r*a,h=64;d===1&&(h=256);let f=[r,a,s/l],g=[r,a,2],y=["rank","type","type"],_=[];_.push(...Le(f,g));let p=x=>{let b=se("x",e.dataType,3,l),w=se("scale",t.dataType,t.dims),R=se("bias",i.dataType,i.dims),E=Ae("output",1,3,2),I=[b,w,R,E];return`
  var<workgroup> workgroup_shared : array<${c}, ${h}>;
  const workgroup_size = ${h}u;
  ${x.declareVariables(...I)}
  ${x.mainStart(h)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${u}(0);
    var squared_sum = ${u}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${u}(${b.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Xi("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${Xi("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return n.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${h}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:g,dataType:1}],dispatchGroup:{x:d},programUniforms:_}),getShaderSource:p},{inputs:[e,t,i],outputs:[-1]})[0]},bm=(n,e,t)=>{let i=e[0].dims,r=i,s=2,a=i[0],o=i[1],l=Q.sizeFromDimension(i,s),u=zt(l),c=Q.size(r)/u,d=nu(n,e[0],e[1],e[2],a,l,o,t.epsilon),h=[a,o,l/u],f=[a,o],g=["type","none"],y=_=>{let p=se("x",e[0].dataType,h.length,u),x=se("scale_shift",1,f.length,2),b=Ae("output",e[0].dataType,h.length,u),w=[p,x,b];return`
  ${_.registerUniform("output_size","u32").declareVariables(...w)}
  ${_.mainStart()}
  ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${b.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${x.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${p.getByOffset("global_idx")} * ${b.type.value}(scale_shift.x) + ${b.type.value}(scale_shift.y);
      ${b.setByOffset("global_idx","value")};
  }`};n.compute({name:"InstanceNormalization",shaderCache:{hint:`${u}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...Le(h,f,h)]}),getShaderSource:y},{inputs:[e[0],d]})},wm=(n,e,t)=>{let i=e[0].dims,r=i,s=i[0],a=i[i.length-1],o=Q.sizeFromDimension(i,1)/a,l=zt(a),u=Q.size(r)/l,c=[{type:12,data:o},{type:12,data:Math.floor(a/l)}],d=["type","type"],h=!1,f=[0,i.length-1];for(let p=0;p<i.length-2;p++)h=h||i[p+1]!==1,f.push(p+1);h=h&&i[i.length-1]!==1;let g=h?n.compute(Tn(n.inputs[0],f),{inputs:[n.inputs[0]],outputs:[-1]})[0]:n.inputs[0].reshape(Array.from({length:i.length},(p,x)=>i[f[x]])),y=nu(n,g,e[1],e[2],s,o,a,t.epsilon),_=p=>{let x=Kt(e[0].dataType),b=l===1?"vec2f":`mat${l}x2f`,w=I=>{let T=I===0?"x":"y",C=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${x}(${C}(scale.${T}))`;case 2:return`vec2<${x}>(${C}(scale[0].${T}, scale[1].${T}))`;case 4:return`vec4<${x}>(${C}(scale[0].${T}, scale[1].${T}, scale[2].${T}, scale[3].${T}))`;default:throw new Error(`Not supported compoents ${l}`)}},R=se("input",e[0].dataType,e[0].dims,l),E=Ae("output",e[0].dataType,r,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${R.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${b}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${E.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${p.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${w(0)}, ${w(1)});
  }`};n.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:_},{inputs:[e[0],y]})},bx=(n,e)=>{e.format==="NHWC"?wm(n,n.inputs,e):bm(n,n.inputs,e)}}),Sm,Mm,wx,K1=ce(()=>{"use strict";Ue(),He(),Ge(),Sm=n=>{if(!n||n.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Mm=(n,e,t)=>{let i=e.simplified,r=n[0].dims,s=n[1],a=!i&&n[2],o=r,l=Q.normalizeAxis(e.axis,r.length),u=Q.sizeToDimension(r,l),c=Q.sizeFromDimension(r,l),d=Q.size(s.dims),h=a?Q.size(a.dims):0;if(d!==c||a&&h!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${h}`);let f=[];for(let R=0;R<r.length;++R)R<l?f.push(r[R]):f.push(1);let g=zt(c),y=["type","type"],_=[{type:12,data:u},{type:1,data:c},{type:12,data:Math.floor(c/g)},{type:1,data:e.epsilon}];a&&y.push("type");let p=t>1,x=t>2,b=R=>{let E=Kt(n[0].dataType),I=[se("x",n[0].dataType,n[0].dims,g),se("scale",s.dataType,s.dims,g)];a&&I.push(se("bias",a.dataType,a.dims,g)),I.push(Ae("output",n[0].dataType,o,g)),p&&I.push(Ae("mean_data_output",1,f)),x&&I.push(Ae("inv_std_output",1,f));let T=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${R.registerUniforms(T).declareVariables(...I)}
  ${R.mainStart()}
    ${R.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${oc("f32",g)};
    var mean_square_vector = ${oc("f32",g)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${es(E,g,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Xi("mean_vector",g)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Xi("mean_square_vector",g)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${es(E,g,"x[j + offset]")};
      let f32scale = ${es(E,g,"scale[j]")};
      output[j + offset] = ${I[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${es(E,g,"bias[j]")}`:""}
      );
    }

    ${p?"mean_data_output[global_idx] = mean":""};
    ${x?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},w=[{dims:o,dataType:n[0].dataType}];return p&&w.push({dims:f,dataType:1}),x&&w.push({dims:f,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${g};${t};${i}`,inputDependencies:y},getRunData:()=>({outputs:w,dispatchGroup:{x:Math.ceil(u/64)},programUniforms:_}),getShaderSource:b}},wx=(n,e)=>{Sm(n.inputs),n.compute(Mm(n.inputs,e,n.outputCount))}}),Tm,Sx,Y1=ce(()=>{"use strict";He(),ed(),td(),Tm=n=>{if(!n||n.length!==2)throw new Error("MatMul requires 2 inputs.");if(n[0].dims[n[0].dims.length-1]!==n[1].dims[n[1].dims.length-2])throw new Error("shared dimension does not match.")},Sx=n=>{Tm(n.inputs);let e=as.calcShape(n.inputs[0].dims,n.inputs[1].dims,!0);if(!e)throw new Error("Can't use matmul on the given tensors");let t=e[e.length-1],i=n.inputs[0].dims[n.inputs[0].dims.length-1];if(t<8&&i<8)n.compute(Qc(n.inputs,{activation:""},e));else{let r=e[e.length-2],s=Q.size(n.inputs[0].dims.slice(0,-2)),a=Q.size(n.inputs[1].dims.slice(0,-2));if(s!==1&&r===1&&a===1){let o=n.inputs[0].reshape([1,s,i]),l=n.inputs[1].reshape([1,i,t]),u=[1,s,t],c=[o,l];n.compute(Lo(c,{activation:""},e,u),{inputs:c})}else n.compute(Lo(n.inputs,{activation:""},e))}}}),Em,Am,Rm,Mx,Tx,Z1=ce(()=>{"use strict";Ue(),He(),Ft(),Ge(),Em=(n,e)=>{if(n.length<3||n.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let t=n[0],i=t.dims.length;if(t.dims[i-1]!==e.k)throw new Error("The last dim of input shape does not match the k value");let r=Math.floor((e.k+e.blockSize-1)/e.blockSize),s=e.blockSize/8*e.bits,a=n[1];if(!Q.areEqual(a.dims,[e.n,r,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=n[2].dims;if(Q.size(o)!==e.n*r)throw new Error("scales input size error.");if(n.length===4){let l=n[3].dims,u=e.n*(e.bits===8?r:Math.floor((r*e.bits+7)/8));if(Q.size(l)!==u)throw new Error("zeroPoints input size error.")}},Am=(n,e)=>{let t=n[0].dims,i=t.length,r=t[i-2],s=e.k,a=e.n,o=t.slice(0,i-2),l=Q.size(o),u=n[1].dims[2]/4,c=n[0].dataType,d=zt(e.k),h=zt(u),f=zt(a),g=o.concat([r,a]),y=r>1&&a/f%2===0?2:1,_=Q.size(g)/f/y,p=64,x=[],b=[l,r,s/d],w=Q.convertShape(n[1].dims).slice();w.splice(-1,1,u/h),x.push(...Le(b)),x.push(...Le(w)),x.push(...Le(n[2].dims)),n.length===4&&x.push(...Le(Q.convertShape(n[3].dims)));let R=[l,r,a/f];x.push(...Le(R));let E=I=>{let T=b.length,C=se("a",n[0].dataType,T,d),A=se("b",12,w.length,h),k=se("scales",n[2].dataType,n[2].dims.length),F=[C,A,k],U=n.length===4?se("zero_points",12,n[3].dims.length):void 0;U&&F.push(U);let D=R.length,z=Ae("output",n[0].dataType,D,f),K=Kt(n[0].dataType),q=(()=>{switch(d){case 1:return`array<${K}, 8>`;case 2:return`mat4x2<${K}>`;case 4:return`mat2x4<${K}>`;default:throw new Error(`${d}-component is not supported.`)}})(),G=Math.floor(32/e.bits),ie=Math.floor(G/8),te=()=>{let de="";for(let B=0;B<ie;B++){let ue=B*e.bits*4,Te=ue+e.bits;de+=`
          // reuse a data (pass ${B})
            var input_offset${B>0?B:""} = ${B===0?C.indicesToOffset(`${C.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${B>0?B:""}: ${q};
            for (var j${B>0?B:""}: u32 = 0; j${B>0?B:""} < ${8/d}; j${B>0?B:""}++) {
              a_data${B>0?B:""}[j${B>0?B:""}] = ${C.getByOffset(`input_offset${B>0?B:""}`)};
              input_offset${B>0?B:""}++;
            }
          `;for(let me=0;me<f*y;me++)de+=`
            b_value = ${h===1?`b${me}_data`:`b${me}_data[i]`};
            ${e.bits===2?`{
              let half_word = b_value >> ${B*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${ue}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Te}u) & b_mask);`}
            b_quantized_values = ${q}(${Array.from({length:4},(Ne,De)=>`${K}(b_value_lower[${De}]), ${K}(b_value_upper[${De}])`).join(", ")});
            b_dequantized_values = ${d===1?`${q}(${Array.from({length:8},(Ne,De)=>`(b_quantized_values[${De}] - ${U?`zero_point${me}`:"zero_point"}) * scale${me}`).join(", ")});`:`(b_quantized_values - ${q}(${Array(8).fill(`${U?`zero_point${me}`:"zero_point"}`).join(",")})) * scale${me};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(me/f)}]${f>1?`[${me%f}]`:""} += ${Array.from({length:8/d},(Ne,De)=>`${d===1?`a_data${B>0?B:""}[${De}] * b_dequantized_values[${De}]`:`dot(a_data${B>0?B:""}[${De}], b_dequantized_values[${De}])`}`).join(" + ")};
          `}return de},Y=()=>{let de=`
            var col_index = col * ${f};
            ${U?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/e.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,e.bits-1)} for unsigned ${e.bits}-bit quantization.
            let zero_point = ${K}(${Math.pow(2,e.bits-1).toFixed(1)});`}
            `;for(let B=0;B<f*y;B++)de+=`
            let scale${B} = ${k.getByOffset("col_index * nBlocksPerCol + block")};
            ${U?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${e.bits}u);
            zero_point_word = ${U.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${B} = ${K}((zero_point_word) & ${e.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return de},oe=()=>{let de=`col_index = col * ${f};`;for(let B=0;B<f*y;B++)de+=`
            let b${B}_data = ${A.getByIndices(`${A.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return de+=`
            var b_value: u32;
            let b_mask: u32 = ${e.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${q};
            var b_dequantized_values: ${q};`,de};return`
        var<workgroup> workgroup_shared: array<${z.type.value}, ${y*p}>;
        ${I.declareVariables(...F,z)}
        ${I.mainStart([p,1,1])}
          let output_indices = ${z.offsetToIndices(`(global_idx / ${p}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${p}) {
            //process one block
            var word_offset: u32 = block * ${e.blockSize/d};
            ${Y()}
            for (var word: u32 = 0; word < ${u}; word += ${h}) {
              ${oe()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${te()}
                word_offset += ${G/d};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${z.type.value} = ${z.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${p}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${z.setByIndices(`${z.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${e.blockSize};${e.bits};${d};${h};${f};${y};${p}`,inputDependencies:Array(n.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:c}],dispatchGroup:{x:_},programUniforms:x}),getShaderSource:E}},Rm=(n,e)=>{let t=n[0].dims,i=t.length,r=t[i-2],s=e.k,a=e.n,o=t.slice(0,i-2),l=Q.size(o),u=n[1].dims[2]/4,c=n[0].dataType,d=zt(e.k),h=zt(u),f=o.concat([r,a]),g=128,y=a%8===0?8:a%4===0?4:1,_=g/y,p=Math.floor(32/e.bits),x=_*h*p,b=x/d,w=x/e.blockSize,R=Q.size(f)/y,E=[],I=[l,r,s/d],T=Q.convertShape(n[1].dims).slice();T.splice(-1,1,u/h),E.push(...Le(I)),E.push(...Le(T)),E.push(...Le(n[2].dims)),n.length===4&&E.push(...Le(Q.convertShape(n[3].dims)));let C=[l,r,a];E.push(...Le(C));let A=k=>{let F=I.length,U=se("a",n[0].dataType,F,d),D=se("b",12,T.length,h),z=se("scales",n[2].dataType,n[2].dims.length),K=[U,D,z],q=n.length===4?se("zero_points",12,n[3].dims.length):void 0;q&&K.push(q);let G=C.length,ie=Ae("output",n[0].dataType,G),te=Kt(n[0].dataType),Y=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${te}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${te}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${te}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${te}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${U.type.value}, ${b}>;
        var<workgroup> inter_results: array<array<${ie.type.value}, ${_}>, ${y}>;
        ${k.declareVariables(...K,ie)}
        ${k.mainStart([_,y,1])}
          let output_indices = ${ie.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${w} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${b};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${b}; a_offset += ${g})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${U.getByIndices(`${U.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${U.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${w} + local_id.x;
            ${q?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/e.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${e.bits}u);
            let zero_point_word = ${q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${te}((zero_point_word) & ${e.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,e.bits-1)} for unsigned ${e.bits}-bit quantization.
            let zero_point = ${te}(${Math.pow(2,e.bits-1).toFixed(1)});`}
            let scale = ${z.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${D.getByIndices(`${D.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${e.blockSize/d};
            for (var i: u32 = 0; i < ${h}; i++) {
              let b_value = ${h===1?"b_data":"b_data[i]"};
              ${(()=>{let oe=Math.floor(p/8),de="";for(let B=0;B<oe;B++){let ue=B*e.bits*4,Te=ue+e.bits;de+=`
              ${Y()}
              {${e.bits===2?`
                let half_word = b_value >> ${B*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${ue}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Te}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${te}>(${Array.from({length:4},(me,Ne)=>`${te}(b_value_lower[${Ne}]), ${te}(b_value_upper[${Ne}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${te}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(me,Ne)=>`${`dot(a_data${Ne}, b_dequantized_values[${Ne}])`}`).join(" + ")};
              }
              word_offset += ${8/d};`}return de})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${ie.type.value} = ${ie.type.value}(0);
            for (var b = 0u; b < ${_}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${ie.setByIndices(`${ie.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${e.blockSize};${d};${h};${_};${y}`,inputDependencies:Array(n.length).fill("rank")},getRunData:()=>({outputs:[{dims:f,dataType:c}],dispatchGroup:{x:R},programUniforms:E}),getShaderSource:A}},Mx=(n,e)=>{Em(n.inputs,e),e.blockSize===32&&n.adapterInfo.isVendor("intel")&&n.adapterInfo.isArchitecture("gen-12lp")?n.compute(Rm(n.inputs,e)):n.compute(Am(n.inputs,e))},Tx=n=>xt(n)}),Cm,Im,$m,Pm,Lm,Dm,Nm,Um,Ex,J1=ce(()=>{"use strict";Ue(),He(),Ge(),Cm=n=>{if(!n||n.length<1)throw new Error("Too few inputs");if(n[0].dataType!==1&&n[0].dataType!==10)throw new Error("Input type must be float or float16.");if(n.length>=2){let e=n[0].dims.length*2===n[1].dims[0];if(n.length===4&&(e=n[3].dims[0]*2===n[1].dims[0]),!e)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Im=(n,e,t)=>{let i="";for(let r=e-1;r>=0;--r)i+=`
            k = i32(${n.indicesGet("indices",r)}) - ${Pe("uniforms.pads",r,t)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Pe("uniforms.x_shape",r,e)})) {
              break;
            }
            offset += k * i32(${Pe("uniforms.x_strides",r,e)});
        `;return`
          value = ${n.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},$m=(n,e,t)=>{let i="";for(let r=e-1;r>=0;--r)i+=`
                k = i32(${n.indicesGet("indices",r)}) - ${Pe("uniforms.pads",r,t)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Pe("uniforms.x_shape",r,e)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Pe("uniforms.x_shape",r,e)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Pe("uniforms.x_strides",r,e)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Pm=(n,e,t)=>{let i="";for(let r=e-1;r>=0;--r)i+=`
                k = i32(${n.indicesGet("indices",r)}) - ${Pe("uniforms.pads",r,t)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Pe("uniforms.x_shape",r,e)})) {
                  k = i32(${Pe("uniforms.x_shape",r,e)}) - 1;
                }
                offset += k * i32(${Pe("uniforms.x_strides",r,e)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Lm=(n,e,t)=>{let i="";for(let r=e-1;r>=0;--r)i+=`
                k = i32(${n.indicesGet("indices",r)}) - ${Pe("uniforms.pads",r,t)};
                if (k < 0)  {
                  k += i32(${Pe("uniforms.x_shape",r,e)}]);
                }
                if (k >= i32(${Pe("uniforms.x_shape",r,e)})) {
                  k -= i32(${Pe("uniforms.x_shape",r,e)});
                }
                offset += k * i32(${Pe("uniforms.x_strides",r,e)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Dm=(n,e,t)=>{switch(t.mode){case 0:return Im(n,e,t.pads.length);case 1:return $m(n,e,t.pads.length);case 2:return Pm(n,e,t.pads.length);case 3:return Lm(n,e,t.pads.length);default:throw new Error("Invalid mode")}},Nm=(n,e)=>{let t=Q.padShape(n[0].dims.slice(),e.pads),i=n[0].dims,r=Q.size(t),s=[{type:12,data:r},{type:6,data:e.pads}],a=n.length>=3&&n[2].data;e.mode===0&&s.push({type:a?n[2].dataType:1,data:e.value}),s.push(...Le(n[0].dims,t));let o=["rank"],l=u=>{let c=Ae("output",n[0].dataType,t.length),d=se("x",n[0].dataType,i.length),h=d.type.value,f=Dm(c,i.length,e),g=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:e.pads.length}];return e.mode===0&&g.push({name:"constant_value",type:a?h:"f32"}),`
            ${u.registerUniforms(g).declareVariables(d,c)}
            ${u.mainStart()}
            ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${f}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${e.mode}${a}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:t,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(Q.size(t)/64)},programUniforms:s}),getShaderSource:l}},Um=(n,e)=>{if(n.length>1){let t=n[1].getBigInt64Array(),i=n.length>=3&&n[2].data?n[2].dataType===10?n[2].getUint16Array()[0]:n[2].getFloat32Array()[0]:0,r=n[0].dims.length,s=new Int32Array(2*r).fill(0);if(n.length>=4){let o=n[3].getBigInt64Array();for(let l=0;l<o.length;l++)s[Number(o[l])]=Number(t[l]),s[Number(o[l])+r]=Number(t[l+o.length])}else t.forEach((o,l)=>s[Number(l)]=Number(o));let a=[];return s.forEach(o=>a.push(o)),{mode:e.mode,value:i,pads:a}}else return e},Ex=(n,e)=>{Cm(n.inputs);let t=Um(n.inputs,e);n.compute(Nm(n.inputs,t),{inputs:[0]})}}),zs,iu,ru,su,au,Om,km,ou,lu,Ax,Rx,uu,Cx,Ix,cu,$x,Px,Lx,Dx,Q1=ce(()=>{"use strict";En(),Ue(),He(),Ge(),zs=n=>{if(Pt.webgpu.validateInputContent&&(!n||n.length!==1))throw new Error("Pool ops requires 1 input.")},iu=(n,e,t)=>{let i=e.format==="NHWC",r=n.dims.slice();i&&r.splice(1,0,r.pop());let s=Object.hasOwnProperty.call(e,"dilations"),a=e.kernelShape.slice(),o=e.strides.slice(),l=s?e.dilations.slice():[],u=e.pads.slice();$o.adjustPoolAttributes(t,r,a,o,l,u);let c=$o.computePoolOutputShape(t,r,o,l,a,u,e.autoPad,e.ceilMode),d=Object.assign({},e);s?Object.assign(d,{kernelShape:a,strides:o,pads:u,dilations:l,cacheKey:e.cacheKey}):Object.assign(d,{kernelShape:a,strides:o,pads:u,cacheKey:e.cacheKey});let h=c.slice();return h.push(h.splice(1,1)[0]),[d,i?h:c]},ru=(n,e)=>{let t=e.format==="NHWC",i=Q.size(n),r=Q.size(e.kernelShape),s=[{type:12,data:i},{type:12,data:r}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(e.kernelShape.length<=2){let o=e.kernelShape[e.kernelShape.length-1],l=e.strides[e.strides.length-1],u=e.pads[e.pads.length/2-1],c=e.pads[e.pads.length-1],d=!!(u+c);s.push({type:12,data:o},{type:12,data:l},{type:12,data:u},{type:12,data:c}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(e.kernelShape.length===2){let f=e.kernelShape[e.kernelShape.length-2],g=e.strides[e.strides.length-2],y=e.pads[e.pads.length/2-2],_=e.pads[e.pads.length-2];h=!!(y+_),s.push({type:12,data:f},{type:12,data:g},{type:12,data:y},{type:12,data:_}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,a,!0,d,h]}else{if(t)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=Q.computeStrides(e.kernelShape);s.push({type:12,data:o},{type:12,data:e.pads},{type:12,data:e.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:e.pads.length},{name:"strides",type:"u32",length:e.strides.length});let l=e.pads.reduce((u,c)=>u+c);return[s,a,!!l,!1,!1]}},su=(n,e,t,i,r,s,a,o,l,u,c,d)=>{let h=r.format==="NHWC",f=e.type.value,g=Ae("output",e.type.tensor,i);if(r.kernelShape.length<=2){let y="",_="",p="",x=t-(h?2:1);if(c?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${x}] < 0 || xIndices[${x}]
                      >= uniforms.x_shape[${x}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${e.indicesToOffset("xIndices")}];
                  ${s}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${x}] = indices[${x}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${e.indicesToOffset("xIndices")}];
                  ${s}
                }`,r.kernelShape.length===2){let b=t-(h?3:2);d?_=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${b}] < 0 || xIndices[${b}] >= uniforms.x_shape[${b}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:_=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sh - uniforms.phStart + j;
                `,p=`
              }
            `}return`
            ${n.registerUniforms(l).declareVariables(e,g)}

            ${n.mainStart()}
              ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${g.offsetToIndices("global_idx")};
              var xIndices = ${g.offsetToIndices("global_idx")};

              var value = ${f}(${o});
              var pad = 0;
              ${_}
              ${y}
              ${p}
              ${a}

              output[global_idx] = value;
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=r.kernelShape.length,_=r.pads.length,p="";return u?p=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${e.indicesToOffset("xIndices")}];
                ${s}
              }`:p=`
              }
              let x_val = x[${e.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${n.registerUniforms(l).declareVariables(e,g)}

            ${n.mainStart()}
              ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${g.offsetToIndices("global_idx")};
              var xIndices = ${g.offsetToIndices("global_idx")};

              var offsets: array<u32, ${y}>;

              var value = ${f}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${Pe("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${Pe("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${t-y}u; j < ${t}u; j++) {
                  xIndices[j] = indices[j] * ${Pe("uniforms.strides",`j - ${t-y}u`,y)}
                    + offsets[j - ${t-y}u] - ${Pe("uniforms.pads","j - 2u",_)};
                  ${p}
              }
              ${a}

              output[global_idx] = value;
            }`}},au=n=>`${n.format};${n.ceilMode};${n.autoPad};${n.kernelShape.length}`,Om=n=>`${au(n)};${n.countIncludePad}`,km=n=>`${au(n)};${n.storageOrder};${n.dilations}`,ou=n=>({format:n.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][n.auto_pad],ceilMode:n.ceil_mode,kernelShape:n.kernel_shape,strides:n.strides,pads:n.pads}),lu=(n,e,t,i)=>{let[r,s]=iu(e,i,t),a=se("x",e.dataType,e.dims.length),o=a.type.value,l="value += x_val;",u="";r.countIncludePad?u+=`value /= ${o}(uniforms.kernelSize);`:u+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[c,d,h,f,g]=ru(s,r);c.push(...Le(e.dims,s));let y=["rank"];return{name:n,shaderCache:{hint:`${i.cacheKey};${h};${f};${g}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(Q.size(s)/64)},programUniforms:c}),getShaderSource:_=>su(_,a,e.dims.length,s.length,r,l,u,0,d,h,f,g)}},Ax=n=>{let e=n.count_include_pad!==0,t=ou(n);if(t.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding/divisor) is not yet implemented in the WebGPU AveragePool kernel");let i={countIncludePad:e,...t,cacheKey:""};return{...i,cacheKey:Om(i)}},Rx=(n,e)=>{zs(n.inputs),n.compute(lu("AveragePool",n.inputs[0],!1,e))},uu={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Cx=n=>{let e=n.format;return{format:e,...uu,cacheKey:e}},Ix=(n,e)=>{zs(n.inputs),n.compute(lu("GlobalAveragePool",n.inputs[0],!0,e))},cu=(n,e,t,i)=>{let[r,s]=iu(e,i,t),a=`
      value = max(x_val, value);
    `,o="",l=se("x",e.dataType,e.dims.length),u=["rank"],[c,d,h,f,g]=ru(s,r);return c.push(...Le(e.dims,s)),{name:n,shaderCache:{hint:`${i.cacheKey};${h};${f};${g}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(Q.size(s)/64)},programUniforms:c}),getShaderSource:y=>su(y,l,e.dims.length,s.length,r,a,o,e.dataType===10?-65504:-1e5,d,h,f,g)}},$x=(n,e)=>{zs(n.inputs),n.compute(cu("MaxPool",n.inputs[0],!1,e))},Px=n=>{let e=n.storage_order,t=n.dilations,i=ou(n);if(e!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding) is not yet implemented in the WebGPU MaxPool kernel");let r={storageOrder:e,dilations:t,...i,cacheKey:""};return{...r,cacheKey:km(r)}},Lx=n=>{let e=n.format;return{format:e,...uu,cacheKey:e}},Dx=(n,e)=>{zs(n.inputs),n.compute(cu("GlobalMaxPool",n.inputs[0],!0,e))}}),zm,Bm,Nx,Ux,eM=ce(()=>{"use strict";Ue(),He(),Ft(),Ge(),zm=(n,e)=>{if(n.length<2||n.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(n.length===3&&n[1].dims===n[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(n.length===3&&n[0].dataType!==n[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(n[1].dims.length!==0&&n[1].dims.length!==1&&n[1].dims.length!==n[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(n.length>2){if(n[0].dataType!==n[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(n[1].dims.length!==n[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!n[1].dims.map((t,i)=>t===n[2].dims[i]).reduce((t,i)=>t&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(e.blockSize>0){if(n[1].dims.length===0||n[1].dims.length===1&&n[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!n[1].dims.map((r,s)=>s===e.axis||r===n[0].dims[s]).reduce((r,s)=>r&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(n[1].dims.length!==n[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let t=n[0].dims[e.axis],i=n[1].dims[e.axis];if(e.blockSize<Math.ceil(t/i)||e.blockSize>Math.ceil(t/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Bm=(n,e)=>{let t=Q.normalizeAxis(e.axis,n[0].dims.length),i=n[0].dataType,r=i===3,s=n[0].dims,a=n[1].dataType,o=Q.size(s),l=i===3||i===2,u=l?[Math.ceil(Q.size(n[0].dims)/4)]:n[0].dims,c=n[1].dims,d=n.length>2?n[2]:void 0,h=d?l?[Math.ceil(Q.size(d.dims)/4)]:d.dims:void 0,f=c.length===0||c.length===1&&c[0]===1,g=f===!1&&c.length===1,y=zt(o),_=f&&(!l||y===4),p=_?y:1,x=_&&!l?y:1,b=se("input",l?12:i,u.length,x),w=se("scale",a,c.length),R=d?se("zero_point",l?12:i,h.length):void 0,E=Ae("output",a,s.length,p),I=[b,w];R&&I.push(R);let T=[u,c];d&&T.push(h);let C=[{type:12,data:o/p},{type:12,data:t},{type:12,data:e.blockSize},...Le(...T,s)],A=k=>{let F=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${k.registerUniforms(F).declareVariables(...I,E)}
      ${k.mainStart()}
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${E.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${b.getByOffset("global_idx / 4")};
            let x_vec = ${r?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${p===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${b.getByOffset("global_idx")};`};

          // Set scale input
          ${f?`let scale_value= ${w.getByOffset("0")}`:g?`
            let scale_index = ${E.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${w.getByOffset("scale_index")};`:`
            var scale_indices: ${w.type.indices} = output_indices;
            let index = ${w.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${w.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${w.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${R?f?l?`
                let zero_point_input = ${R.getByOffset("0")};
                let zero_point_vec =  ${r?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${R.getByOffset("0")}`:g?l?`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${R.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${r?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${R.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${w.indicesToOffset("scale_indices")};
                let zero_point_input = ${R.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${r?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${R.getByIndices("scale_indices")};`:`let zero_point_value = ${l?r?"i32":"u32":b.type.value}(0);`};
      // Compute and write output
      ${E.setByOffset("global_idx",`${E.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:e.cacheKey,inputDependencies:R?["rank","rank","rank"]:["rank","rank"]},getShaderSource:A,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/p/64),y:1,z:1},programUniforms:C})}},Nx=(n,e)=>{zm(n.inputs,e),n.compute(Bm(n.inputs,e))},Ux=n=>xt({axis:n.axis,blockSize:n.blockSize})}),Fm,Hm,Ox,tM=ce(()=>{"use strict";En(),Ue(),Ge(),Fm=(n,e,t)=>{let i=n===e,r=n<e&&t<0,s=n>e&&t>0;if(i||r||s)throw new Error("Range these inputs' contents are invalid.")},Hm=(n,e,t,i)=>{let r=Math.abs(Math.ceil((e-n)/t)),s=[r],a=r,o=[{type:12,data:a},{type:i,data:n},{type:i,data:t},...Le(s)],l=u=>{let c=Ae("output",i,s.length),d=c.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:d},{name:"delta",type:d}];return`
        ${u.registerUniforms(h).declareVariables(c)}
        ${u.mainStart()}
        ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${d}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},Ox=n=>{let e=0,t=0,i=0;n.inputs[0].dataType===6?(e=n.inputs[0].getInt32Array()[0],t=n.inputs[1].getInt32Array()[0],i=n.inputs[2].getInt32Array()[0]):n.inputs[0].dataType===1&&(e=n.inputs[0].getFloat32Array()[0],t=n.inputs[1].getFloat32Array()[0],i=n.inputs[2].getFloat32Array()[0]),Pt.webgpu.validateInputContent&&Fm(e,t,i),n.compute(Hm(e,t,i,n.inputs[0].dataType),{inputs:[]})}}),Vm,Gm,kx,zx,nM=ce(()=>{"use strict";Ue(),He(),Ft(),Ge(),Vm=(n,e,t,i)=>{if(n!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${n}.`);let r=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,s=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${e}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(n){case"none":return`${e}=${t};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${e}, bitcast<${i}>(${t}));`:`
              ${r}bitcast<${i}>(oldValue) + (${t})${s}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${e}, bitcast<${i}>(${t}));`:`
                ${r}max(bitcast<f32>(oldValue), (${t}))${s}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${e}, bitcast<${i}>(${t}));`:`${r}min(bitcast<${i}>(oldValue), (${t}))${s}`;case"mul":return`${r}(bitcast<${i}>(oldValue) * (${t}))${s}`;default:throw new Error(`Reduction ${n} is not supported.`)}},Gm=(n,e)=>{let t=n[0].dims,i=n[1].dims,r=t,s=1,a=Math.ceil(Q.sizeToDimension(i,i.length-1)/s),o=i[i.length-1],l=Q.sizeFromDimension(t,o),u=[{type:12,data:a},{type:12,data:o},{type:12,data:l},...Le(n[1].dims,n[2].dims,r)],c=d=>{let h=se("indices",n[1].dataType,n[1].dims.length),f=se("updates",n[2].dataType,n[2].dims.length,s),g=e.reduction!=="none"&&e.reduction!==""?cy("output",n[0].dataType,r.length):Ae("output",n[0].dataType,r.length,s);return`
      ${d.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(h,f,g)}
      ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${n[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Vm(e.reduction,"output[data_offset + i]","value",g.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${e.cacheKey}_${e.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:r,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:u}),getShaderSource:c}},kx=n=>xt({reduction:n.reduction}),zx=(n,e)=>{n.compute(Gm(n.inputs,e),{inputs:[n.inputs[1],n.inputs[2]],outputs:[]})}}),Wm,qm,Xm,du,jm,Km,Ym,Zm,Jm,Qm,eg,tg,hu,ng,ig,rg,sg,ag,Bx,Fx,iM=ce(()=>{"use strict";Ue(),He(),Ft(),Ge(),Wm=(n,e)=>{if(n.every(t=>t>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),n.length>0){if(e.mode==="linear"){if(!(n.length===2||n.length===3||n.length===4&&n[0]===1&&n[1]===1||n.length===4&&n[0]===1&&n[3]===1||n.length===5&&n[0]===1&&n[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(e.mode==="cubic"&&!(n.length===2||n.length===4&&n[0]===1&&n[1]===1||n.length===4&&n[0]===1&&n[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},qm=(n,e,t)=>{e.every(r=>r>=0&&r<t||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(t).fill(1);return e.forEach((r,s)=>i[r]=n[s]),i},Xm=(n,e,t,i,r,s)=>{let[a,o,l]=t>10?[1,2,3]:[-1,n.length>1?1:-1,-1],u=n[0].dims.length;if(a>0&&n.length>a&&n[a].dims.length>0)n[a].getFloat32Array().forEach(c=>s.push(c));else if(e.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&n.length>o&&n[o].dims.length===1&&n[o].dims[0]>0){if(n[o].getFloat32Array().forEach(c=>i.push(c)),i.length!==0&&i.length!==u&&t>=18&&i.length!==e.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Wm(i,e),e.axes.length>0&&qm(i,e.axes,u).forEach((c,d)=>i[d]=c)}if(l>0&&n.length>l&&n[l].dims.length===1&&n[l].dims[0]>0&&(n[l].getBigInt64Array().forEach(c=>r.push(Number(c))),r.length!==0&&r.length!==u&&t>=18&&r.length!==e.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(e.axes.length>0){if(i.length!==0&&i.length!==e.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(r.length!==0&&r.length!==e.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof r<"u"&&i.length>0&&r.length>u)throw new Error("Resize requires only of scales or sizes to be specified")},du=(n,e,t,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${n}) * (${e});
  let whole = ${i}(big / (${t}));
  let fract = ${i}(big % (${t})) / ${i}(${t});
  return whole + fract;
`,jm=(n,e)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${e} { `+(()=>{switch(n){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${e}(xResized) / ${e}(xScale);
          } else {
            ${du("xResized","lengthOriginal","lengthResized",e)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${e}(xResized) + 0.5) / ${e}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${e}(xResized) + 0.5) / ${e}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${du("xResized","lengthOriginal - 1","lengthResized - 1",e)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${e}(roiStart) * ${e}(lengthOriginal - 1) +
                        (${e}(xResized) * ${e}(roiEnd - roiStart) * ${e}(lengthOriginal - 1)) /
                        ${e}(lengthResized - 1);
                  } else {
                    return 0.5 * ${e}(roiStart + roiEnd) * ${e}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${e}xScale * ${e}(lengthResized);
                  const adjustment = ${e}(lengthResized) / outputWidth;
                  const center = ${e}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${e}(xResized) + 0.5) / ${e}(xScale)) - 0.5;`;case"half_pixel":return`return ((${e}(xResized) + 0.5) / ${e}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${n} is not supported`)}})()+"}",Km=(n,e,t)=>`fn getNearestPixelFromOriginal(xOriginal: ${t}, isDownSample: bool) -> ${t} {`+(()=>{switch(n){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(e<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${n} is not supported`)}})()+"}",Ym=(n,e,t)=>{let i=new Array(t).fill(0).concat(new Array(t).fill(1)),r=n.length===0?i:n.slice();return e.length>0?(e.forEach((s,a)=>{i[s]=r[a],i[a+t]=r[e.length+a]}),i):r},Zm=(n,e,t,i)=>{let r=[];if(t.length>0)if(i.length>0){if(n.forEach(s=>r.push(s)),Math.max(...i)>n.length)throw new Error("axes is out of bound");i.forEach((s,a)=>r[s]=t[a])}else t.forEach(s=>r.push(s));else{if(e.length===0)throw new Error("Resize requires either scales or sizes.");r=n.map((s,a)=>Math.round(s*e[a]))}return r},Jm=(n,e,t)=>{let i=(()=>{switch(t.keepAspectRatioPolicy){case"not_larger":return t.axes.length>0?Math.min(...t.axes.map(s=>e[s]),Number.MAX_VALUE):Math.min(...e,Number.MAX_VALUE);case"not_smaller":return t.axes.length>0?Math.max(...t.axes.map(s=>e[s]),Number.MIN_VALUE):Math.max(...e,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${t.keepAspectRatioPolicy} is not supported`)}})();e.fill(1,0,e.length);let r=n.slice();return t.axes.length>0?(t.axes.forEach(s=>e[s]=i),t.axes.forEach(s=>r[s]=Math.round(n[s]*e[s]))):(e.fill(i,0,e.length),r.forEach((s,a)=>r[a]=Math.round(s*e[a]))),r},Qm=(n,e,t,i,r)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${n.type.indices}) -> array<${n.type.value}, ${t.length}> {
      var original_indices: array<${n.type.value}, ${t.length}>;
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var output_index = ${n.indicesGet("output_indices","i")};
        var scale = ${Pe("uniforms.scales","i",i)};
        var roi_low = ${Pe("uniforms.roi","i",r)};
        var roi_hi = ${Pe("uniforms.roi",`i + ${e.length}`,r)};
        if (scale == 1.0) {
          original_indices[i] = ${n.type.value}(output_index);
        } else {
          var input_shape_i = ${Pe("uniforms.input_shape","i",e.length)};
          var output_shape_i = ${Pe("uniforms.output_shape","i",t.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,eg=(n,e,t,i,r,s,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> ${n.type.indices} {
      var input_indices: ${n.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Pe("uniforms.scales","i",r)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Pe("uniforms.roi","i",s)};
          var roi_hi = ${Pe("uniforms.roi",`i + ${t.length}`,s)};
          var input_shape_i = ${Pe("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${Pe("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${a} || (original_idx >= 0 && original_idx < ${e.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${e.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${n.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,tg=(n,e)=>`
    fn checkInputIndices(input_indices: ${n.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${e.length}; i++) {
        var input_index = ${n.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Pe("uniforms.input_shape","i",e.length)}) {
          return false;
        }
      }
      return true;
    }`,hu=(n,e,t,i)=>n.rank>i?`
    ${n.indicesSet("input_indices",e,"channel")};
    ${n.indicesSet("input_indices",t,"batch")};
`:"",ng=(n,e,t,i,r)=>{let[s,a,o,l]=t.length===2?[-1,0,1,-1]:[0,2,3,1],u=n.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${u} {
      var input_indices: ${n.type.indices};
      ${n.indicesSet("input_indices",a,`max(0, min(row, ${t[a]} - 1))`)};
      ${n.indicesSet("input_indices",o,`max(0, min(col, ${t[o]} - 1))`)};
      ${hu(n,l,s,2)}
      return ${n.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${e.type.indices}) -> ${u} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${u} = originalIndices[${a}];
      var col:${u} = originalIndices[${o}];
      ${i?`if (row < 0 || row > (${t[a]} - 1) || col < 0 || col > (${t[o]} - 1)) {
        return ${r};
      }`:""};
      row = max(0, min(row, ${t[a]} - 1));
      col = max(0, min(col, ${t[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${t.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${t.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${u} = getInputValue(batch, channel, row1, col1);
      var x12: ${u} = getInputValue(batch, channel, row1, col2);
      var x21: ${u} = getInputValue(batch, channel, row2, col1);
      var x22: ${u} = getInputValue(batch, channel, row2, col2);
      var dx1: ${u} = abs(row - ${u}(row1));
      var dx2: ${u} = abs(${u}(row2) - row);
      var dy1: ${u} = abs(col - ${u}(col1));
      var dy2: ${u} = abs(${u}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},ig=(n,e,t,i,r,s,a,o,l,u)=>{let c=t.length===2,d=!0,[h,f]=c?[0,1]:d?[2,3]:[1,2],g=n.type.value,y=_=>{let p=_===h?"row":"col";return`
      fn ${p}CubicInterpolation(input_indices: ${n.type.indices}, output_indices: ${e.type.indices}) -> ${g} {
        var output_index = ${e.indicesGet("output_indices",_)};
        var originalIdx: ${g} = getOriginalCoordinateFromResizedCoordinate(output_index, ${r[_]},
        ${i[_]}, ${t[_]}, ${s[_]}, ${s[_]} + ${t.length});
        var fractOriginalIdx: ${g} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${t[_]} - 1))) {
          return ${l};
        }
        var data: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${p}: ${g} = originalIdx + ${g}(i);
          if (${p} < 0 || ${p} >= ${t[_]}) {
            ${u?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${p} = max(0, min(${p}, ${t[_]} - 1));`};
          }
        var input_indices_copy: ${n.type.indices} = input_indices;
          ${n.indicesSet("input_indices_copy",_,`u32(${p})`)};
          data[i + 1] = ${_===h?n.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${y(h)};
    ${y(f)};
  fn getCubicInterpolationCoefs(s: ${g}) -> array<${g}, 4> {
    var absS = abs(s);
    var coeffs: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${g} = 1.0 - absS;
    var twoMinusAbsS: ${g} = 2.0 - absS;
    var onePlusAbsS: ${g} = 1.0 + absS;
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${g}, 4>, coefs: array<${g}, 4>) -> ${g} {
    var coefsSum: ${g} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${e.type.indices}) -> ${g} {
    var input_indices: ${n.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},rg=(n,e,t,i,r)=>{let[s,a,o,l,u]=t.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=n.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${n.type.indices};
      ${n.indicesSet("input_indices",a,`max(0, min(depth, ${t[a]} - 1))`)};
      ${n.indicesSet("input_indices",o,`max(0, min(height, ${t[o]} - 1))`)};
      ${n.indicesSet("input_indices",l,`max(0, min(width, ${t[l]} - 1))`)};
      ${hu(n,u,s,3)}
      return ${n.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${e.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${a}];
      var height:${c} = originalIndices[${o}];
      var width:${c} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${t[a]} - 1) || height < 0 || height > (${t[o]} - 1) || width < 0 || (width > ${t[l]} - 1)) {
      return ${r};
        }`:""};

    depth = max(0, min(depth, ${t[a]} - 1));
      height = max(0, min(height, ${t[o]} - 1));
      width = max(0, min(width, ${t[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${t.length>3?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${t.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
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
    }`},sg=(n,e,t,i,r,s)=>{let a=n.dims,o=Ym(s,e.axes,a.length),l=Zm(a,i,r,e.axes),u=i.slice();i.length===0&&(u=a.map((x,b)=>x===0?1:l[b]/x),e.keepAspectRatioPolicy!=="stretch"&&(l=Jm(a,u,e)));let c=Ae("output",n.dataType,l.length),d=se("input",n.dataType,a.length),h=Q.size(l),f=a.length===l.length&&a.every((x,b)=>x===l[b]),g=e.coordinateTransformMode==="tf_crop_and_resize",y=e.extrapolationValue,_=d.type.value,p=x=>`
      ${f?"":`
      ${jm(e.coordinateTransformMode,_)};
      ${(()=>{switch(e.mode){case"nearest":return`
              ${tg(d,a)};
              ${Km(e.nearestMode,t,_)};
              ${eg(d,c,a,l,u.length,o.length,g)};
              `;case"linear":return`
              ${Qm(c,a,l,u.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${ng(d,c,a,g,y)}`;if(a.length===3||a.length===5)return`${rg(d,c,a,g,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${ig(d,c,a,l,u,o,e.cubicCoeffA,g,e.extrapolationValue,e.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${x.registerUniform("output_size","u32").registerUniform("scales","f32",u.length).registerUniform("roi","f32",o.length).declareVariables(d,c)}
      ${x.mainStart()}
        ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${f?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${d.type.indices};
        ${(()=>{switch(e.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${d.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${e.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${e.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${e.cacheKey}|${t}|${u.length>0?e.mode==="cubic"?u:u.length:""}|${r.length>0?r:""}|${o.length>0?o:""}|${f}|${e.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:l,dataType:n.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:u},{type:1,data:o},...Le(a,l)]})}},ag=n=>{let e=n.customDataBuffer;return new Uint32Array(e.buffer,e.byteOffset,1)[0]},Bx=(n,e)=>{let t=[],i=[],r=[],s=ag(n);if(e.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Xm(n.inputs,e,s,t,i,r),n.compute(sg(n.inputs[0],e,s,t,i,r),{inputs:[0]})},Fx=n=>{let e=n.antialias,t=n.axes,i=n.coordinateTransformMode,r=n.cubicCoeffA,s=n.excludeOutside!==0,a=n.extrapolationValue,o=n.keepAspectRatioPolicy,l=n.mode,u=n.nearestMode===""?"simple":n.nearestMode;return xt({antialias:e,axes:t,coordinateTransformMode:i,cubicCoeffA:r,excludeOutside:s,extrapolationValue:a,keepAspectRatioPolicy:o,mode:l,nearestMode:u})}}),og,lg,Hx,rM=ce(()=>{"use strict";Ue(),He(),Ge(),og=n=>{if(!n||n.length<3)throw new Error("layerNorm requires at least 3 inputs.");let e=n[0],t=n[1],i=n[2];if(e.dataType!==t.dataType||e.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(e.dims.length!==3&&e.dims.length!==2)throw new Error("Input must be 2D or 3D");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Skip must be 2D or 3D");let r=e.dims[e.dims.length-1],s=e.dims[e.dims.length-2];if(t.dims[t.dims.length-1]!==r)throw new Error("Skip must have the same hidden size as input");if(t.dims[t.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==r)throw new Error("Gamma must have the same hidden size as input");if(n.length>3){let a=n[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==r)throw new Error("Beta must have the same hidden size as input")}if(n.length>4){let a=n[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==r)throw new Error("Bias must have the same hidden size as input")}},lg=(n,e,t,i)=>{let r=e.simplified,s=n[0].dims,a=Q.size(s),o=s,l=a,u=s.slice(-1)[0],c=i?s.slice(0,-1).concat(1):[],d=!r&&n.length>3,h=n.length>4,f=i&&t>1,g=i&&t>2,y=t>3,_=64,p=zt(u),x=[{type:12,data:l},{type:12,data:p},{type:12,data:u},{type:1,data:e.epsilon}],b=R=>{let E=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],I=[se("x",n[0].dataType,n[0].dims,p),se("skip",n[1].dataType,n[1].dims,p),se("gamma",n[2].dataType,n[2].dims,p)];d&&I.push(se("beta",n[3].dataType,n[3].dims,p)),h&&I.push(se("bias",n[4].dataType,n[4].dims,p)),I.push(Ae("output",n[0].dataType,o,p)),f&&I.push(Ae("mean_output",1,c)),g&&I.push(Ae("inv_std_output",1,c)),y&&I.push(Ae("input_skip_bias_sum",n[0].dataType,o,p));let T=Kt(n[0].dataType),C=Kt(1,p);return`

      ${R.registerUniforms(E).declareVariables(...I)}
      var<workgroup> sum_shared : array<${C}, ${_}>;
      var<workgroup> sum_squared_shared : array<${C}, ${_}>;

      ${R.mainStart([_,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${_};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${_};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${_-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${h?"bias[offset1d + i]":T+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${es(T,p,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${_};
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
        let mean = ${Xi("sum",p)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Xi("square_sum",p)} / f32(uniforms.hidden_size) ${r?"":"- mean * mean"} + uniforms.epsilon);
        ${f?"mean_output[global_idx] = mean;":""}
        ${g?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${r?"":`- ${T}(mean)`}) *
            ${T}(inv_std_dev) * gamma[offset1d + i]
            ${d?"+ beta[offset1d + i]":""};
        }
      }`},w=[{dims:o,dataType:n[0].dataType}];return t>1&&w.push({dims:c,dataType:1}),t>2&&w.push({dims:c,dataType:1}),t>3&&w.push({dims:s,dataType:n[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${p};${f};${g};${y}`,inputDependencies:n.map((R,E)=>"type")},getShaderSource:b,getRunData:()=>({outputs:w,dispatchGroup:{x:Math.ceil(l/u)},programUniforms:x})}},Hx=(n,e)=>{og(n.inputs);let t=[0];n.outputCount>1&&t.push(-3),n.outputCount>2&&t.push(-3),n.outputCount>3&&t.push(3),n.compute(lg(n.inputs,e,n.outputCount,!1),{outputs:t})}}),ug,Bs,cg,fu,dg,hg,Vx,Gx,sM=ce(()=>{"use strict";Ue(),He(),Ft(),Ge(),ug=(n,e)=>{if(!n||n.length<1)throw new Error("too few inputs");if(e.axes.length!==0){if(e.axes.length!==e.starts.length||e.axes.length!==e.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(e.starts.length!==e.ends.length)throw new Error("starts and ends must have the same length");n.slice(1).forEach((t,i)=>{if(n[i+1].dataType!==6&&n[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},Bs=(n,e)=>{let t=[];if(n.length>e)if(n[e].dataType===7)n[e].getBigInt64Array().forEach(i=>t.push(Number(i)));else if(n[e].dataType===6)n[e].getInt32Array().forEach(i=>t.push(Number(i)));else throw new Error(`Input ${e} must be an array of int32 or int64`);return t},cg=(n,e)=>{if(n.length>1){let t=Bs(n,1),i=Bs(n,2),r=Bs(n,3);return r.length===0&&(r=[...Array(n[0].dims.length).keys()]),xt({starts:t,ends:i,axes:r})}else return e},fu=(n,e,t,i,r)=>{let s=n;return n<0&&(s+=t[i[e]]),r[e]<0?Math.max(0,Math.min(s,t[i[e]]-1)):Math.max(0,Math.min(s,t[i[e]]))},dg=(n,e,t)=>`fn calculateInputIndices(output_indices: ${e.type.indices}) -> ${n.type.indices} {
          var input_indices: ${n.type.indices};
          var carry = 0u;
          for (var i = ${t.length-1}; i >= 0; i--) {
            let input_shape_i = ${Pe("uniforms.input_shape","i",t.length)};
            let steps_i = ${Pe("uniforms.steps","i",t.length)};
            let signs_i = ${Pe("uniforms.signs","i",t.length)};
            let starts_i = ${Pe("uniforms.starts","i",t.length)};
            var output_index = ${e.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${n.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,hg=(n,e)=>{let t=n[0].dims,i=Q.size(t),r=e.axes.length>0?Q.normalizeAxes(e.axes,t.length):[...Array(t.length).keys()],s=Bs(n,4);s.forEach(p=>p!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(r.length).fill(1));let a=e.starts.map((p,x)=>fu(p,x,t,r,s)),o=e.ends.map((p,x)=>fu(p,x,t,r,s));if(r.length!==a.length||r.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(r.length!==t.length)for(let p=0;p<t.length;++p)r.includes(p)||(a.splice(p,0,0),o.splice(p,0,t[p]),s.splice(p,0,1));let l=s.map(p=>Math.sign(p));s.forEach((p,x,b)=>{if(p<0){let w=(o[x]-a[x])/p,R=a[x],E=R+w*s[x];a[x]=E,o[x]=R,b[x]=-p}});let u=t.slice(0);r.forEach((p,x)=>{u[p]=Math.ceil((o[p]-a[p])/s[p])});let c={dims:u,dataType:n[0].dataType},d=Ae("output",n[0].dataType,u.length),h=se("input",n[0].dataType,n[0].dims.length),f=Q.size(u),g=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],y=[{type:12,data:f},{type:12,data:a},{type:6,data:l},{type:12,data:s},...Le(n[0].dims,u)],_=p=>`
      ${p.registerUniforms(g).declareVariables(h,d)}
        ${dg(h,d,t)}
        ${p.mainStart()}
          ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${d.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${a.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:y})}},Vx=(n,e)=>{ug(n.inputs,e);let t=cg(n.inputs,e);n.compute(hg(n.inputs,t),{inputs:[0]})},Gx=n=>{let e=n.starts,t=n.ends,i=n.axes;return xt({starts:e,ends:t,axes:i})}}),fg,pg,Wx,qx,aM=ce(()=>{"use strict";Ue(),He(),Ft(),Yi(),Ge(),fg=n=>{if(!n||n.length!==1)throw new Error("Softmax op requires 1 input.")},pg=(n,e)=>{let t=n.inputs[0],i=t.dims,r=Q.size(i),s=i.length,a=Q.normalizeAxis(e.axis,s),o=a<i.length-1,l,u=[];o?(u=Array.from({length:s},(I,T)=>T),u[a]=s-1,u[s-1]=a,l=n.compute(Tn(t,u),{inputs:[t],outputs:[-1]})[0]):l=t;let c=l.dims,d=c[s-1],h=r/d,f=zt(d),g=d/f,y=64;h===1&&(y=256);let _=(I,T)=>T===4?`max(max(${I}.x, ${I}.y), max(${I}.z, ${I}.w))`:T===2?`max(${I}.x, ${I}.y)`:T===3?`max(max(${I}.x, ${I}.y), ${I}.z)`:I,p=se("x",l.dataType,l.dims,f),x=Ae("result",l.dataType,l.dims,f),b=p.type.value,w=Kt(l.dataType)==="f32"?`var threadMax = ${b}(-3.4028234663852886e+38f);`:`var threadMax = ${b}(-65504.0h);`,R=I=>`
      var<workgroup> rowMaxShared : ${b};
      var<workgroup> rowSumShared : ${b};
      var<workgroup> threadShared : array<${b}, ${y}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${b} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${b}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${I.registerUniform("packedCols","i32").declareVariables(p,x)}
      ${I.mainStart(y)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${y};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${w}
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
          rowMaxShared = ${b}(${_("threadShared[0]",f)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${b}(0.0);
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
          rowSumShared = ${b}(${Xi("threadShared[0]",f)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${b}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,E=n.compute({name:"Softmax",shaderCache:{hint:`${f};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:g}]}),getShaderSource:R},{inputs:[l],outputs:[o?-1:0]})[0];o&&n.compute(Tn(E,u),{inputs:[E]})},Wx=(n,e)=>{fg(n.inputs),pg(n,e)},qx=n=>xt({axis:n.axis})}),pu,mg,gg,_g,Xx,oM=ce(()=>{"use strict";Ue(),He(),Ge(),pu=n=>Array.from(n.getBigInt64Array(),Number),mg=n=>{if(!n||n.length!==2)throw new Error("Tile requires 2 inputs.");if(n[0].dataType!==1&&n[0].dataType!==10&&n[0].dataType!==6&&n[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(n[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(n[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(pu(n[1]).length!==n[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},gg=(n,e)=>{let t=[];for(let i=0;i<n.length;++i)t.push(n[i]*e[i]);return t},_g=(n,e)=>{let t=n[0].dims,i=e??pu(n[1]),r=gg(t,i),s=Q.size(r),a=n[0].dataType,o=se("input",a,t.length),l=Ae("output",a,r.length),u=c=>`
      const inputShape = ${o.indices(...t)};
      ${c.registerUniform("output_size","u32").declareVariables(o,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${t.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:r,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...Le(n[0].dims,r)]}),getShaderSource:u}},Xx=n=>{mg(n.inputs),n.compute(_g(n.inputs),{inputs:[0]})}}),yg,vg,jx,lM=ce(()=>{"use strict";Ue(),He(),Ge(),yg=(n,e,t,i,r)=>{let s=Ae("output_data",r,t.length,4),a=se("a_data",e[1].dataType,e[1].dims.length,4),o=se("b_data",e[2].dataType,e[2].dims.length,4),l=se("c_data",e[0].dataType,e[0].dims.length,4),u,c=(d,h,f)=>`select(${h}, ${d}, ${f})`;if(!i)u=s.setByOffset("global_idx",c(a.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let d=(h,f,g="")=>{let y=`a_data[index_a${f}][component_a${f}]`,_=`b_data[index_b${f}][component_b${f}]`,p=`bool(c_data[index_c${f}] & (0xffu << (component_c${f} * 8)))`;return`
            let output_indices${f} = ${s.offsetToIndices(`global_idx * 4u + ${f}u`)};
            let offset_a${f} = ${a.broadcastedIndicesToOffset(`output_indices${f}`,s)};
            let offset_b${f} = ${o.broadcastedIndicesToOffset(`output_indices${f}`,s)};
            let offset_c${f} = ${l.broadcastedIndicesToOffset(`output_indices${f}`,s)};
            let index_a${f} = offset_a${f} / 4u;
            let index_b${f} = offset_b${f} / 4u;
            let index_c${f} = offset_c${f} / 4u;
            let component_a${f} = offset_a${f} % 4u;
            let component_b${f} = offset_b${f} % 4u;
            let component_c${f} = offset_c${f} % 4u;
            ${h}[${f}] = ${g}(${c(y,_,p)});
          `};r===9?u=`
            var data = vec4<u32>(0);
            ${d("data",0,"u32")}
            ${d("data",1,"u32")}
            ${d("data",2,"u32")}
            ${d("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:u=`
            ${d("output_data[global_idx]",0)}
            ${d("output_data[global_idx]",1)}
            ${d("output_data[global_idx]",2)}
            ${d("output_data[global_idx]",3)}
          `}return`
        ${n.registerUniform("vec_size","u32").declareVariables(l,a,o,s)}
        ${n.mainStart()}
        ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${u}
      }`},vg=n=>{let e=n[1].dims,t=n[2].dims,i=n[0].dims,r=n[1].dataType,s=!(Q.areEqual(e,t)&&Q.areEqual(t,i)),a=e,o=Q.size(e);if(s){let u=as.calcShape(as.calcShape(e,t,!1),i,!1);if(!u)throw new Error("Can't perform where op on the given tensors");a=u,o=Q.size(a)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:u=>yg(u,n,a,s,r),getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...Le(i,e,t,a)]})}},jx=n=>{n.compute(vg(n.inputs))}}),Kx,uM=ce(()=>{"use strict";w1(),Kc(),S1(),M1(),T1(),E1(),A1(),P1(),D1(),N1(),U1(),O1(),k1(),z1(),B1(),F1(),H1(),V1(),G1(),W1(),q1(),X1(),j1(),K1(),Y1(),Z1(),px(),J1(),Q1(),eM(),tM(),nM(),jc(),iM(),vx(),rM(),sM(),aM(),_x(),oM(),Yi(),Yc(),lM(),Kx=new Map([["Abs",[zy]],["Acos",[By]],["Acosh",[Fy]],["Add",[wv]],["ArgMax",[Ny,uc]],["ArgMin",[Dy,uc]],["Asin",[Hy]],["Asinh",[Vy]],["Atan",[Gy]],["Atanh",[Wy]],["Attention",[Uy]],["AveragePool",[Rx,Ax]],["BatchNormalization",[Oy]],["BiasAdd",[ky]],["BiasSplitGelu",[bv]],["Cast",[Xy,qy]],["Ceil",[Ky]],["Clip",[jy]],["Concat",[Pv,Lv]],["Conv",[mc,pc]],["ConvTranspose",[Vv,Hv]],["Cos",[Yy]],["Cosh",[Zy]],["CumSum",[Gv,Wv]],["DepthToSpace",[qv,Xv]],["DequantizeLinear",[Nx,Ux]],["DFT",[jv,Kv]],["Div",[Sv]],["Einsum",[Yv,Zv]],["Elu",[Jy,ea]],["Equal",[Mv]],["Erf",[Qy]],["Exp",[ev]],["Expand",[Jv]],["FastGelu",[Qv]],["Floor",[tv]],["FusedConv",[mc,pc]],["Gather",[tx,ex]],["GatherElements",[ox,ax]],["GatherBlockQuantized",[rx,sx]],["GatherND",[nx,ix]],["Gelu",[nv]],["Gemm",[ux,lx]],["GlobalAveragePool",[Ix,Cx]],["GlobalMaxPool",[Dx,Lx]],["Greater",[Rv]],["GreaterOrEqual",[Iv]],["GridSample",[cx,dx]],["GroupQueryAttention",[xx]],["HardSigmoid",[cv,uv]],["HardSwish",[dv]],["InstanceNormalization",[bx]],["LayerNormalization",[wx]],["LeakyRelu",[iv,ea]],["Less",[Cv]],["LessOrEqual",[$v]],["Log",[vv]],["MatMul",[Sx]],["MatMulNBits",[Mx,Tx]],["MaxPool",[$x,Px]],["Mul",[Tv]],["MultiHeadAttention",[fx,hx]],["Neg",[sv]],["Not",[rv]],["Pad",[Ex]],["Pow",[Ev]],["QuickGelu",[xv,ea]],["Range",[Ox]],["Reciprocal",[av]],["ReduceMin",[Cy]],["ReduceMean",[My]],["ReduceMax",[Ry]],["ReduceSum",[$y]],["ReduceProd",[Iy]],["ReduceL1",[Ty]],["ReduceL2",[Ey]],["ReduceLogSum",[Ly]],["ReduceLogSumExp",[Ay]],["ReduceSumSquare",[Py]],["Relu",[ov]],["Resize",[Bx,Fx]],["RotaryEmbedding",[yx]],["ScatterND",[zx,kx]],["Sigmoid",[lv]],["Sin",[hv]],["Sinh",[fv]],["Slice",[Vx,Gx]],["SkipLayerNormalization",[Hx]],["Split",[mx,gx]],["Sqrt",[pv]],["Softmax",[Wx,qx]],["Sub",[Av]],["Tan",[mv]],["Tanh",[gv]],["ThresholdedRelu",[yv,ea]],["Tile",[Xx]],["Transpose",[hy,fy]],["Where",[jx]]])}),Yx,cM=ce(()=>{"use strict";En(),Si(),Ge(),Yx=class{constructor(n){this.backend=n,this.repo=new Map,this.attributesBound=!1}getArtifact(n){return this.repo.get(n)}setArtifact(n,e){this.repo.set(n,e)}run(n,e,t,i,r){$n(n.programInfo.name);let s=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let u of e)o.push({binding:o.length,resource:{buffer:u.buffer}});for(let u of t)o.push({binding:o.length,resource:{buffer:u.buffer}});r&&o.push({binding:o.length,resource:r});let l=s.createBindGroup({layout:n.computePipeline.getBindGroupLayout(0),entries:o,label:n.programInfo.name});if(this.backend.sessionStatus==="capturing"){let u={kernelId:this.backend.currentKernelId,computePipeline:n.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(u)}a.setPipeline(n.computePipeline),a.setBindGroup(0,l),a.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Mn(n.programInfo.name)}dispose(){}build(n,e){$n(n.name);let t=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(u=>{t.features.has(u.feature)&&i.push(`enable ${u.extension};`)});let r=dy(e,this.backend.device.limits),s=n.getShaderSource(r),a=`${i.join(`
`)}
${r.additionalImplementations}
${s}`,o=t.createShaderModule({code:a,label:n.name});pt("verbose",()=>`[WebGPU] ${n.name} shader code: ${a}`);let l=t.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:n.name});return Mn(n.name),{programInfo:n,computePipeline:l,uniformVariablesInfo:r.variablesInfo}}normalizeDispatchGroupSize(n){let e=typeof n=="number"?n:n.x,t=typeof n=="number"?1:n.y||1,i=typeof n=="number"?1:n.z||1,r=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(e<=r&&t<=r&&i<=r)return[e,t,i];let s=e*t*i,a=Math.ceil(Math.sqrt(s));if(a>r){if(a=Math.ceil(Math.cbrt(s)),a>r)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),Zx={};_s(Zx,{WebGpuBackend:()=>Jx});var xg,bg,wg,Jx,dM=ce(()=>{"use strict";En(),Ue(),Si(),ay(),x1(),uM(),cM(),xg=(n,e)=>{if(e.length!==n.length)throw new Error(`inputDependencies length ${e.length} is not equal to inputTensors length ${n.length}.`);let t=[];for(let i=0;i<n.length;++i){let r=n[i].dataType;switch(e[i]){case"none":{t.push("");break}case"type":{t.push(`${r}`);break}case"rank":{let s=n[i].dims.length;t.push(`${r};${s}`);break}case"dims":{let s=n[i].dims.join(",");t.push(`${r};${s}`);break}default:throw new Error(`unsupported input dependency: ${e[i]}`)}}return t.join("|")},bg=(n,e,t)=>{let i=n.name;return n.shaderCache?.hint&&(i+="["+n.shaderCache.hint+"]"),i+=":"+t+`:${xg(e,n.shaderCache?.inputDependencies??new Array(e.length).fill("dims"))}`,i},wg=class{constructor(n){n&&(this.architecture=n.architecture,this.vendor=n.vendor)}isArchitecture(n){return this.architecture===n}isVendor(n){return this.vendor===n}},Jx=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let n=this.kernelCustomData.get(this.currentKernelId);return n||(n={},this.kernelCustomData.set(this.currentKernelId,n)),n}async initialize(n,e){this.env=n;let t=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:e.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:e.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:e.limits.maxStorageBufferBindingSize,maxBufferSize:e.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:e.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:e.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:e.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:e.limits.maxComputeWorkgroupSizeZ},requiredFeatures:t},r=o=>e.features.has(o)&&t.push(o)&&!0;r("chromium-experimental-timestamp-query-inside-passes")||r("timestamp-query"),r("shader-f16"),r("subgroups"),this.device=await e.requestDevice(i);let s=e,a=e.info??(typeof s.requestAdapterInfo=="function"?await s.requestAdapterInfo():void 0);this.adapterInfo=new wg(a),this.gpuDataManager=uy(this),this.programManager=new Yx(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Gc(n.logLevel,!!n.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:e,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let n=this.getCommandEncoder(),e={};this.queryType==="at-passes"&&(e.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=n.beginComputePass(e)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;$n(),this.endComputePass();let n;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),n=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(n,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,n,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&n.mapAsync(GPUMapMode.READ).then(()=>{let e=new BigUint64Array(n.getMappedRange()),t=this.pendingQueries.get(n);for(let i=0;i<e.length/2;i++){let r=t[i],s=r.kernelId,a=this.kernels.get(s),o=a.kernelType,l=a.kernelName,u=r.programName,c=r.inputTensorViews,d=r.outputTensorViews,h=e[i*2],f=e[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=h);let g=Number(h-this.queryTimeBase),y=Number(f-this.queryTimeBase);if(!Number.isSafeInteger(g)||!Number.isSafeInteger(y))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(_=>({dims:_.dims,dataType:xi(_.dataType)})),outputsMetadata:d.map(_=>({dims:_.dims,dataType:xi(_.dataType)})),kernelId:s,kernelType:o,kernelName:l,programName:u,startTime:g,endTime:y});else{let _="";c.forEach((x,b)=>{_+=`input[${b}]: [${x.dims}] | ${xi(x.dataType)}, `});let p="";d.forEach((x,b)=>{p+=`output[${b}]: [${x.dims}] | ${xi(x.dataType)}, `}),console.log(`[profiling] kernel "${s}|${o}|${l}|${u}" ${_}${p}start time: ${g} ns, execution time: ${y-g} ns`)}Ao("GPU",`${u}::${h}::${f}`)}n.unmap(),this.pendingQueries.delete(n)}),Mn()}run(n,e,t,i,r,s){$n(n.name);let a=[];for(let x=0;x<e.length;++x){let b=e[x].data;if(b===0)continue;let w=this.gpuDataManager.get(b);if(!w)throw new Error(`no GPU data for input: ${b}`);a.push(w)}let{outputs:o,dispatchGroup:l,programUniforms:u}=n.getRunData(e),c=t.length===0?o.map((x,b)=>b):t;if(c.length!==o.length)throw new Error(`Output size ${c.length} must be equal to ${o.length}.`);let d=[],h=[];for(let x=0;x<o.length;++x){if(!Number.isInteger(c[x])||c[x]<-3||c[x]>=s)throw new Error(`Invalid output index: ${c[x]}`);if(c[x]===-3)continue;let b=c[x]===-1,w=c[x]===-2,R=b||w?r(o[x].dataType,o[x].dims):i(c[x],o[x].dataType,o[x].dims);if(d.push(R),R.data===0)continue;let E=this.gpuDataManager.get(R.data);if(!E)throw new Error(`no GPU data for output: ${R.data}`);if(b&&this.temporaryData.push(E),w){let I=this.kernelPersistentData.get(this.currentKernelId);I||(I=[],this.kernelPersistentData.set(this.currentKernelId,I)),I.push(E)}h.push(E)}if(a.length!==e.length||h.length!==d.length){if(h.length===0)return Mn(n.name),d;throw new Error(`Program ${n.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let f;if(u){let x=0,b=[];u.forEach(I=>{let T=typeof I.data=="number"?[I.data]:I.data;if(T.length===0)return;let C=I.type===10?2:4,A,k;I.type===10?(k=T.length>4?16:T.length>2?8:T.length*C,A=T.length>4?16:C*T.length):(k=T.length<=2?T.length*C:16,A=16),x=Math.ceil(x/k)*k,b.push(x);let F=I.type===10?8:4;x+=T.length>4?Math.ceil(T.length/F)*A:T.length*C});let w=16;x=Math.ceil(x/w)*w;let R=new ArrayBuffer(x);u.forEach((I,T)=>{let C=b[T],A=typeof I.data=="number"?[I.data]:I.data;if(I.type===6)new Int32Array(R,C,A.length).set(A);else if(I.type===12)new Uint32Array(R,C,A.length).set(A);else if(I.type===10)new Uint16Array(R,C,A.length).set(A);else if(I.type===1)new Float32Array(R,C,A.length).set(A);else throw new Error(`Unsupported uniform type: ${xi(I.type)}`)});let E=this.gpuDataManager.create(x,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(E.buffer,0,R,0,x),this.gpuDataManager.release(E.id),f={offset:0,size:x,buffer:E.buffer}}let g=this.programManager.normalizeDispatchGroupSize(l),y=g[1]===1&&g[2]===1,_=bg(n,e,y),p=this.programManager.getArtifact(_);if(p||(p=this.programManager.build(n,g),this.programManager.setArtifact(_,p),pt("info",()=>`[artifact] key: ${_}, programName: ${n.name}`)),u&&p.uniformVariablesInfo){if(u.length!==p.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${p.uniformVariablesInfo.length}, got ${u.length} in program "${p.programInfo.name}".`);for(let x=0;x<u.length;x++){let b=u[x],w=b.type,R=typeof b.data=="number"?1:b.data.length,[E,I]=p.uniformVariablesInfo[x];if(w!==E||R!==I)throw new Error(`Uniform variable ${x} mismatch: expect type ${E} with size ${I}, got type ${w} with size ${R} in program "${p.programInfo.name}".`)}}if(pt("info",()=>`[ProgramManager] run "${n.name}" (key=${_}) with ${g[0]}x${g[1]}x${g[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let x={kernelId:this.currentKernelId,programName:p.programInfo.name,inputTensorViews:e,outputTensorViews:d};this.pendingKernels.push(x),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(x)}return this.programManager.run(p,a,h,g,f),Mn(n.name),d}upload(n,e){this.gpuDataManager.upload(n,e)}memcpy(n,e){this.gpuDataManager.memcpy(n,e)}async download(n,e){await this.gpuDataManager.download(n,e)}alloc(n){return this.gpuDataManager.create(n).id}free(n){return this.gpuDataManager.release(n)}createKernel(n,e,t,i){let r=Kx.get(n);if(!r)throw new Error(`kernel not implemented: ${n}`);let s={kernelType:n,kernelName:i,kernelEntry:r[0],attributes:[r[1],t]};this.kernels.set(e,s)}releaseKernel(n){let e=this.kernelPersistentData.get(n);if(e){for(let t of e)this.gpuDataManager.release(t.id);this.kernelPersistentData.delete(n)}this.kernelCustomData.delete(n),this.kernels.delete(n)}computeKernel(n,e,t){let i=this.kernels.get(n);if(!i)throw new Error(`kernel not created: ${n}`);let r=i.kernelType,s=i.kernelName,a=i.kernelEntry,o=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${r}] ${s}" is not allowed to be called recursively`);this.currentKernelId=n,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),pt("info",()=>`[WebGPU] Start to run kernel "[${r}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),a(e,o[1]),0}catch(u){return t.push(Promise.resolve(`[WebGPU] Kernel "[${r}] ${s}" failed. ${u}`)),1}finally{l&&t.push(this.device.popErrorScope().then(u=>u?`GPU validation error for kernel "[${r}] ${s}": ${u.message}`:null));for(let u of this.temporaryData)this.gpuDataManager.release(u.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(n,e,t,i){let r=this.sessionExternalDataMapping.get(n);r||(r=new Map,this.sessionExternalDataMapping.set(n,r));let s=r.get(e),a=this.gpuDataManager.registerExternalBuffer(t,i,s);return r.set(e,[a,t]),a}unregisterBuffers(n){let e=this.sessionExternalDataMapping.get(n);e&&(e.forEach(t=>this.gpuDataManager.unregisterExternalBuffer(t[0])),this.sessionExternalDataMapping.delete(n))}getBuffer(n){let e=this.gpuDataManager.get(n);if(!e)throw new Error(`no GPU data for buffer: ${n}`);return e.buffer}createDownloader(n,e,t){return async()=>{let i=await ac(this,n,e);return Wc(i.buffer,t)}}writeTimestamp(n){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,n)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){pt("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){pt("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){pt("info","replay"),this.sessionStatus="replaying";let n=this.capturedCommandList.get(this.currentSessionId),e=this.capturedPendingKernels.get(this.currentSessionId),t=n.length;this.pendingKernels=[];for(let i=0;i<t;i++){let r=this.getComputePassEncoder(),s=n[i];this.writeTimestamp(this.pendingDispatchNumber*2),r.setPipeline(s.computePipeline),r.setBindGroup(0,s.bindGroup),r.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(e[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(n){this.unregisterBuffers(n),this.capturedCommandList.has(n)&&this.capturedCommandList.delete(n),this.capturedPendingKernels.has(n)&&this.capturedPendingKernels.delete(n),this.gpuDataManager.onReleaseSession(n)}onRunStart(n){this.currentSessionId=n,this.setQueryType()}}}),Qx={};_s(Qx,{init:()=>eb});var Va,Sg,eb,hM=ce(()=>{"use strict";Ue(),Si(),He(),v1(),Va=class tb{constructor(e,t,i,r){this.module=e,this.dataType=t,this.data=i,this.dims=r}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let e=Q.size(this.dims);return e===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,e)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let e=Q.size(this.dims);return e===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,e)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let e=Q.size(this.dims);return e===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,e)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let e=Q.size(this.dims);return e===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,e)}reshape(e){if(Q.size(e)!==Q.size(this.dims))throw new Error("Invalid new shape");return new tb(this.module,this.dataType,this.data,e)}},Sg=class{constructor(n,e,t){this.module=n,this.backend=e,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=e.adapterInfo,this.deviceLimits=e.device.limits;let i=n.PTR_SIZE,r=t/n.PTR_SIZE,s=i===4?"i32":"i64";this.opKernelContext=Number(n.getValue(i*r++,s));let a=Number(n.getValue(i*r++,s));this.outputCount=Number(n.getValue(i*r++,s)),this.customDataOffset=Number(n.getValue(i*r++,"*")),this.customDataSize=Number(n.getValue(i*r++,s));let o=[];for(let l=0;l<a;l++){let u=Number(n.getValue(i*r++,s)),c=Number(n.getValue(i*r++,"*")),d=Number(n.getValue(i*r++,s)),h=[];for(let f=0;f<d;f++)h.push(Number(n.getValue(i*r++,s)));o.push(new Va(n,u,c,h))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(n,e){let t=e?.inputs?.map(a=>typeof a=="number"?this.inputs[a]:a)??this.inputs,i=e?.outputs??[],r=(a,o,l)=>new Va(this.module,o,this.output(a,l),l),s=(a,o)=>{let l=vr(a,o);if(!l)throw new Error(`Unsupported data type: ${a}`);let u=l>0?this.backend.gpuDataManager.create(l).id:0;return new Va(this.module,a,u,o)};return this.backend.run(n,t,i,r,s,this.outputCount)}output(n,e){let t=this.module.stackSave();try{let i=this.module.PTR_SIZE,r=i===4?"i32":"i64",s=this.module.stackAlloc((1+e.length)*i);this.module.setValue(s,e.length,r);for(let a=0;a<e.length;a++)this.module.setValue(s+i*(a+1),e[a],r);return this.module._JsepOutput(this.opKernelContext,n,s)}catch(i){throw new Error(`Failed to generate kernel's output[${n}] with dims [${e}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(t)}}},eb=async(n,e,t,i)=>{let r=e.jsepInit;if(!r)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(n==="webgpu"){let s=(dM(),ca(Zx)).WebGpuBackend,a=new s;await a.initialize(t,i),r("webgpu",[a,o=>a.alloc(Number(o)),o=>a.free(o),(o,l,u,c=!1)=>{if(c)pt("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(u)}`),a.memcpy(Number(o),Number(l));else{pt("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(u)}`);let d=e.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(u));a.upload(Number(l),d)}},async(o,l,u)=>{pt("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${u}`),await a.download(Number(o),()=>e.HEAPU8.subarray(Number(l)>>>0,Number(l+u)>>>0))},(o,l,u)=>a.createKernel(o,Number(l),u,e.UTF8ToString(e._JsepGetNodeName(Number(l)))),o=>a.releaseKernel(o),(o,l,u,c)=>{pt("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${u}, kernel=${o}, contextDataOffset=${l}`);let d=new Sg(e,a,Number(l));return a.computeKernel(Number(o),d,c)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let s=new ly(t);r("webnn",[s,()=>s.reserveTensorId(),a=>s.releaseTensorId(a),async(a,o,l,u,c)=>s.ensureTensor(a,o,l,u,c),(a,o)=>{s.uploadTensor(a,o)},async(a,o)=>s.downloadTensor(a,o),(a,o)=>s.registerMLContext(a,o),!!t.trace])}}}),Mg,nd,id,Ci,Tg,mu,No,rd,sd,Fs,Eg,sr,nb,ib,gu,ad,od,ld,rb=ce(()=>{"use strict";En(),g1(),_1(),Ue(),Cr(),Bc(),Vc(),Mg=(n,e)=>{Mt()._OrtInit(n,e)!==0&&yt("Can't initialize onnxruntime.")},nd=async n=>{Mg(n.wasm.numThreads,Io(n.logLevel))},id=async(n,e)=>{Mt().asyncInit?.();let t=n.webgpu.adapter;if(e==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(t){if(typeof t.limits!="object"||typeof t.features!="object"||typeof t.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=n.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let r=n.webgpu.forceFallbackAdapter;if(r!==void 0&&typeof r!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${r}"`);if(t=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:r}),!t)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(e==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(hM(),ca(Qx)).init;e==="webgpu"&&await i("webgpu",Mt(),n,t),e==="webnn"&&await i("webnn",Mt(),n)}},Ci=new Map,Tg=n=>{let e=Mt(),t=e.stackSave();try{let i=e.PTR_SIZE,r=e.stackAlloc(2*i);e._OrtGetInputOutputCount(n,r,r+i)!==0&&yt("Can't get session input/output count.");let s=i===4?"i32":"i64";return[Number(e.getValue(r,s)),Number(e.getValue(r+i,s))]}finally{e.stackRestore(t)}},mu=(n,e)=>{let t=Mt(),i=t.stackSave(),r=0;try{let s=t.PTR_SIZE,a=t.stackAlloc(2*s);t._OrtGetInputOutputMetadata(n,e,a,a+s)!==0&&yt("Can't get session input/output metadata.");let o=Number(t.getValue(a,"*"));r=Number(t.getValue(a+s,"*"));let l=t.HEAP32[r/4];if(l===0)return[o,0];let u=t.HEAPU32[r/4+1],c=[];for(let d=0;d<u;d++){let h=Number(t.getValue(r+8+d*s,"*"));c.push(h!==0?t.UTF8ToString(h):Number(t.getValue(r+8+(d+u)*s,"*")))}return[o,l,c]}finally{t.stackRestore(i),r!==0&&t._OrtFree(r)}},No=n=>{let e=Mt(),t=e._malloc(n.byteLength);if(t===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${n.byteLength}.`);return e.HEAPU8.set(n,t),[t,n.byteLength]},rd=async(n,e)=>{let t,i,r=Mt();Array.isArray(n)?[t,i]=n:n.buffer===r.HEAPU8.buffer?[t,i]=[n.byteOffset,n.byteLength]:[t,i]=No(n);let s=0,a=0,o=0,l=[],u=[],c=[];try{if([a,l]=await ny(e),e?.externalData&&r.mountExternalData){let w=[];for(let R of e.externalData){let E=typeof R=="string"?R:R.path,I=typeof R=="string"?R:R.data;w.push(Wo(I).then(T=>{r.mountExternalData(E,T)}))}await Promise.all(w)}for(let w of e?.executionProviders??[])if((typeof w=="string"?w:w.name)==="webnn"){if(r.shouldTransferToMLTensor=!1,typeof w!="string"){let R=w,E=R?.context,I=R?.gpuDevice,T=R?.deviceType,C=R?.powerPreference;E?r.currentContext=E:I?r.currentContext=await r.webnnCreateMLContext(I):r.currentContext=await r.webnnCreateMLContext({deviceType:T,powerPreference:C})}else r.currentContext=await r.webnnCreateMLContext();break}s=await r._OrtCreateSession(t,i,a),r.webgpuOnCreateSession?.(s),s===0&&yt("Can't create a session."),r.jsepOnCreateSession?.(),r.currentContext&&(r.webnnRegisterMLContext(s,r.currentContext),r.currentContext=void 0,r.shouldTransferToMLTensor=!0);let[d,h]=Tg(s),f=!!e?.enableGraphCapture,g=[],y=[],_=[],p=[],x=[];for(let w=0;w<d;w++){let[R,E,I]=mu(s,w);R===0&&yt("Can't get an input name."),u.push(R);let T=r.UTF8ToString(R);g.push(T),_.push(E===0?{name:T,isTensor:!1}:{name:T,isTensor:!0,type:xi(E),shape:I})}for(let w=0;w<h;w++){let[R,E,I]=mu(s,w+d);R===0&&yt("Can't get an output name."),c.push(R);let T=r.UTF8ToString(R);y.push(T),p.push(E===0?{name:T,isTensor:!1}:{name:T,isTensor:!0,type:xi(E),shape:I});{if(f&&e?.preferredOutputLocation===void 0){x.push("gpu-buffer");continue}let C=typeof e?.preferredOutputLocation=="string"?e.preferredOutputLocation:e?.preferredOutputLocation?.[T]??"cpu",A=r.webnnIsGraphOutput;if(C==="cpu"&&A&&A(s,T)){x.push("ml-tensor-cpu-output");continue}if(C!=="cpu"&&C!=="cpu-pinned"&&C!=="gpu-buffer"&&C!=="ml-tensor")throw new Error(`Not supported preferred output location: ${C}.`);if(f&&C!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${C}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);x.push(C)}}let b=null;return x.some(w=>w==="gpu-buffer"||w==="ml-tensor"||w==="ml-tensor-cpu-output")&&(o=r._OrtCreateBinding(s),o===0&&yt("Can't create IO binding."),b={handle:o,outputPreferredLocations:x,outputPreferredLocationsEncoded:x.map(w=>w==="ml-tensor-cpu-output"?"ml-tensor":w).map(w=>sc(w))}),Ci.set(s,[s,u,c,b,f,!1]),[s,g,y,_,p]}catch(d){throw u.forEach(h=>r._OrtFree(h)),c.forEach(h=>r._OrtFree(h)),o!==0&&r._OrtReleaseBinding(o)!==0&&yt("Can't release IO binding."),s!==0&&r._OrtReleaseSession(s)!==0&&yt("Can't release session."),d}finally{r._free(t),a!==0&&r._OrtReleaseSessionOptions(a)!==0&&yt("Can't release session options."),l.forEach(d=>r._free(d)),r.unmountExternalData?.()}},sd=n=>{let e=Mt(),t=Ci.get(n);if(!t)throw new Error(`cannot release session. invalid session id: ${n}`);let[i,r,s,a,o]=t;a&&(o&&e._OrtClearBoundOutputs(a.handle)!==0&&yt("Can't clear bound outputs."),e._OrtReleaseBinding(a.handle)!==0&&yt("Can't release IO binding.")),e.jsepOnReleaseSession?.(n),e.webnnOnReleaseSession?.(n),e.webgpuOnReleaseSession?.(n),r.forEach(l=>e._OrtFree(l)),s.forEach(l=>e._OrtFree(l)),e._OrtReleaseSession(i)!==0&&yt("Can't release session."),Ci.delete(n)},Fs=new Map,Eg=1,sr=new Map,nb=n=>{let e=Mt(),t=e._malloc(n.byteLength);if(t===0)throw new Error(`Can't create a LoRA adapter. failed to allocate a buffer of size ${n.byteLength}.`);try{e.HEAPU8.set(n,t);let i=e._OrtCreateLoraAdapter(t,n.byteLength);i===0&&yt("Can't create a LoRA adapter.");let r=Eg++;return Fs.set(r,i),r}finally{e._free(t)}},ib=n=>{let e=Mt(),t=Fs.get(n);if(t===void 0)throw new Error(`cannot release LoRA adapter. invalid adapter id: ${n}`);if(sr.has(n))throw new Error(`cannot release LoRA adapter. the adapter is used by a run in progress. adapter id: ${n}`);e._OrtReleaseLoraAdapter(t)!==0&&yt("Can't release LoRA adapter."),Fs.delete(n)},gu=async(n,e,t,i,r,s,a=!1)=>{if(!n){e.push(0);return}let o=Mt(),l=o.PTR_SIZE,u=n[0],c=n[1],d=n[3],h=d,f,g;if(u==="string"&&(d==="gpu-buffer"||d==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&d!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(d==="gpu-buffer"){let p=n[2].gpuBuffer;g=vr(yr(u),c);{let x=o.jsepRegisterBuffer;if(!x)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');f=x(i,s,p,g)}}else if(d==="ml-tensor"){let p=n[2].mlTensor;g=vr(yr(u),c);let x=o.webnnRegisterMLTensor;if(!x)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');f=x(i,p,yr(u),c)}else{let p=n[2];if(Array.isArray(p)){g=l*p.length,f=o._malloc(g),t.push(f);for(let x=0;x<p.length;x++){if(typeof p[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);o.setValue(f+x*l,Fn(p[x],t),"*")}}else{let x=o.webnnIsGraphInput,b=o.webnnIsGraphOutput;if(u!=="string"&&x&&b){let w=o.UTF8ToString(r);if(x(i,w)||b(i,w)){let R=yr(u);g=vr(R,c),h="ml-tensor";let E=o.webnnCreateTemporaryTensor,I=o.webnnUploadTensor;if(!E||!I)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let T=await E(i,R,c);I(T,new Uint8Array(p.buffer,p.byteOffset,p.byteLength)),f=T}else g=p.byteLength,f=o._malloc(g),t.push(f),o.HEAPU8.set(new Uint8Array(p.buffer,p.byteOffset,g),f)}else g=p.byteLength,f=o._malloc(g),t.push(f),o.HEAPU8.set(new Uint8Array(p.buffer,p.byteOffset,g),f)}}let y=o.stackSave(),_=o.stackAlloc(4*c.length);try{c.forEach((x,b)=>o.setValue(_+b*l,x,l===4?"i32":"i64"));let p=o._OrtCreateTensor(yr(u),f,g,_,c.length,sc(h));p===0&&yt(`Can't create tensor for input/output. session=${i}, index=${s}.`),e.push(p)}finally{o.stackRestore(y)}},ad=async(n,e,t,i,r,s,a=[])=>{let o=Mt(),l=o.PTR_SIZE,u=Ci.get(n);if(!u)throw new Error(`cannot run inference. invalid session id: ${n}`);let c=u[0],d=u[1],h=u[2],f=u[3],g=u[4],y=u[5],_=[];if(a.length>0){if(f)throw new Error("LoRA adapters are not supported for a session that uses IO binding, e.g. when an output is preferred to be on GPU, or when the WebNN execution provider produces an output.");for(let D of a){let z=Fs.get(D);if(z===void 0)throw new Error(`cannot run inference. invalid LoRA adapter id: ${D}`);_.push(z)}}let p=e.length,x=i.length,b=0,w=[],R=[],E=[],I=[],T=[],C=o.stackSave(),A=o.stackAlloc(p*l),k=o.stackAlloc(p*l),F=o.stackAlloc(x*l),U=o.stackAlloc(x*l);try{for(let q of a)sr.set(q,(sr.get(q)??0)+1);[b,w]=ty(s,_),wr("wasm prepareInputOutputTensor");for(let q=0;q<p;q++)await gu(t[q],R,I,n,d[e[q]],e[q],g);for(let q=0;q<x;q++)await gu(r[q],E,I,n,h[i[q]],p+i[q],g);Sr("wasm prepareInputOutputTensor");for(let q=0;q<p;q++)o.setValue(A+q*l,R[q],"*"),o.setValue(k+q*l,d[e[q]],"*");for(let q=0;q<x;q++)o.setValue(F+q*l,E[q],"*"),o.setValue(U+q*l,h[i[q]],"*");if(f&&!y){let{handle:q,outputPreferredLocations:G,outputPreferredLocationsEncoded:ie}=f;if(d.length!==p)throw new Error(`input count from feeds (${p}) is expected to be always equal to model's input count (${d.length}).`);wr("wasm bindInputsOutputs");for(let te=0;te<p;te++){let Y=e[te];await o._OrtBindInput(q,d[Y],R[te])!==0&&yt(`Can't bind input[${te}] for session=${n}.`)}for(let te=0;te<x;te++){let Y=i[te];r[te]?.[3]?(T.push(E[te]),o._OrtBindOutput(q,h[Y],E[te],0)!==0&&yt(`Can't bind pre-allocated output[${te}] for session=${n}.`)):o._OrtBindOutput(q,h[Y],0,ie[Y])!==0&&yt(`Can't bind output[${te}] to ${G[te]} for session=${n}.`)}Sr("wasm bindInputsOutputs"),Ci.set(n,[c,d,h,f,g,!0])}o.jsepOnRunStart?.(c),o.webnnOnRunStart?.(c);let D;f?D=await o._OrtRunWithBinding(c,f.handle,x,F,b):D=await o._OrtRun(c,k,A,p,U,x,F,b),D!==0&&yt("failed to call OrtRun().");let z=[],K=[];wr("wasm ProcessOutputTensor");for(let q=0;q<x;q++){let G=Number(o.getValue(F+q*l,"*"));if(G===E[q]||T.includes(E[q])){z.push(r[q]),G!==E[q]&&o._OrtReleaseTensor(G)!==0&&yt("Can't release tensor.");continue}let ie=o.stackSave(),te=o.stackAlloc(4*l),Y=!1,oe,de=0;try{o._OrtGetTensorData(G,te,te+l,te+2*l,te+3*l)!==0&&yt(`Can't access output tensor data on index ${q}.`);let B=l===4?"i32":"i64",ue=Number(o.getValue(te,B));de=o.getValue(te+l,"*");let Te=o.getValue(te+l*2,"*"),me=Number(o.getValue(te+l*3,B)),Ne=[];for(let ze=0;ze<me;ze++)Ne.push(Number(o.getValue(Te+ze*l,B)));o._OrtFree(Te)!==0&&yt("Can't free memory for tensor dims.");let De=Ne.reduce((ze,be)=>ze*be,1);oe=xi(ue);let j=f?.outputPreferredLocations[i[q]];if(oe==="string"){if(j==="gpu-buffer"||j==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ze=[];for(let be=0;be<De;be++){let Ve=o.getValue(de+be*l,"*"),_e=o.getValue(de+(be+1)*l,"*"),We=be===De-1?void 0:_e-Ve;ze.push(o.UTF8ToString(Ve,We))}z.push([oe,Ne,ze,"cpu"])}else if(j==="gpu-buffer"&&De>0){let ze=o.jsepGetBuffer;if(!ze)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let be=ze(de),Ve=vr(ue,De);if(Ve===void 0||!Fc(oe))throw new Error(`Unsupported data type: ${oe}`);Y=!0,z.push([oe,Ne,{gpuBuffer:be,download:o.jsepCreateDownloader(be,Ve,oe),dispose:()=>{o._OrtReleaseTensor(G)!==0&&yt("Can't release tensor.")}},"gpu-buffer"])}else if(j==="ml-tensor"&&De>0){let ze=o.webnnEnsureTensor,be=o.webnnIsGraphInputOutputTypeSupported;if(!ze||!be)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(vr(ue,De)===void 0||!Hc(oe))throw new Error(`Unsupported data type: ${oe}`);if(!be(n,oe,!1))throw new Error(`preferredLocation "ml-tensor" for ${oe} output is not supported by current WebNN Context.`);let Ve=await ze(n,de,ue,Ne,!1);Y=!0,z.push([oe,Ne,{mlTensor:Ve,download:o.webnnCreateMLTensorDownloader(de,oe),dispose:()=>{o.webnnReleaseTensorId(de),o._OrtReleaseTensor(G)}},"ml-tensor"])}else if(j==="ml-tensor-cpu-output"&&De>0){let ze=o.webnnCreateMLTensorDownloader(de,oe)(),be=z.length;Y=!0,K.push((async()=>{let Ve=[be,await ze];return o.webnnReleaseTensorId(de),o._OrtReleaseTensor(G),Ve})()),z.push([oe,Ne,[],"cpu"])}else{let ze=Go(oe),be=new ze(De);new Uint8Array(be.buffer,be.byteOffset,be.byteLength).set(o.HEAPU8.subarray(de,de+be.byteLength)),z.push([oe,Ne,be,"cpu"])}}finally{o.stackRestore(ie),oe==="string"&&de&&o._free(de),Y||o._OrtReleaseTensor(G)}}f&&!g&&(o._OrtClearBoundOutputs(f.handle)!==0&&yt("Can't clear bound outputs."),Ci.set(n,[c,d,h,f,g,!1]));for(let[q,G]of await Promise.all(K))z[q][2]=G;return Sr("wasm ProcessOutputTensor"),z}finally{o.webnnOnRunEnd?.(c),o.stackRestore(C),R.forEach(D=>o._OrtReleaseTensor(D)),E.forEach(D=>o._OrtReleaseTensor(D)),I.forEach(D=>o._free(D)),b!==0&&o._OrtReleaseRunOptions(b),w.forEach(D=>o._free(D));for(let D of a){let z=sr.get(D)-1;z===0?sr.delete(D):sr.set(D,z)}}},od=n=>{let e=Mt(),t=Ci.get(n);if(!t)throw new Error("invalid session id");let i=t[0],r=e._OrtEndProfiling(i);r===0&&yt("Can't get an profile file name."),e._OrtFree(r)},ld=n=>{let e=[];for(let t of n){let i=t[2];!Array.isArray(i)&&"buffer"in i&&e.push(i.buffer)}return e}}),Jn,Rn,Dr,Hs,Vs,Ga,_u,Wa,ar,or,Ag,sb,ab,ob,lb,ub,cb,db,hb,fb,ud=ce(()=>{"use strict";En(),rb(),Cr(),kc(),Vc(),Jn=()=>!!Pt.wasm.proxy&&typeof document<"u",Dr=!1,Hs=!1,Vs=!1,Wa=new Map,ar=(n,e)=>{let t=Wa.get(n);t?t.push(e):Wa.set(n,[e])},or=()=>{if(Dr||!Hs||Vs||!Rn)throw new Error("worker not ready")},Ag=n=>{switch(n.data.type){case"init-wasm":Dr=!1,n.data.err?(Vs=!0,_u[1](n.data.err)):(Hs=!0,_u[0]()),Ga&&(URL.revokeObjectURL(Ga),Ga=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let e=Wa.get(n.data.type);n.data.err?e.shift()[1](n.data.err):e.shift()[0](n.data.out);break}default:}},sb=async()=>{if(!Hs){if(Dr)throw new Error("multiple calls to 'initWasm()' detected.");if(Vs)throw new Error("previous call to 'initWasm()' failed.");if(Dr=!0,Jn())return new Promise((n,e)=>{Rn?.terminate(),Q0().then(([t,i])=>{try{Rn=i,Rn.onerror=s=>e(s),Rn.onmessage=Ag,_u=[n,e];let r={type:"init-wasm",in:Pt};!r.in.wasm.wasmPaths&&(t||rc)&&(r.in.wasm.wasmPaths={wasm:new URL("/assets/ort-wasm-simd-threaded.jsep-Dt5UNR3U.wasm",import.meta.url).href}),Rn.postMessage(r),Ga=t}catch(r){e(r)}},e)});try{await zc(Pt.wasm),await nd(Pt),Hs=!0}catch(n){throw Vs=!0,n}finally{Dr=!1}}},ab=async n=>{if(Jn())return or(),new Promise((e,t)=>{ar("init-ep",[e,t]);let i={type:"init-ep",in:{epName:n,env:Pt}};Rn.postMessage(i)});await id(Pt,n)},ob=async n=>Jn()?(or(),new Promise((e,t)=>{ar("copy-from",[e,t]);let i={type:"copy-from",in:{buffer:n}};Rn.postMessage(i,[n.buffer])})):No(n),lb=async(n,e)=>{if(Jn()){if(e?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return or(),new Promise((t,i)=>{ar("create",[t,i]);let r={type:"create",in:{model:n,options:{...e}}},s=[];n instanceof Uint8Array&&s.push(n.buffer),Rn.postMessage(r,s)})}else return rd(n,e)},ub=async n=>{if(Jn())return or(),new Promise((e,t)=>{ar("release",[e,t]);let i={type:"release",in:n};Rn.postMessage(i)});sd(n)},cb=async n=>{if(Jn())throw new Error("LoRA adapter is not supported for proxy.");let e=typeof n=="string"?await Wo(n):n;return nb(e)},db=async n=>{if(Jn())throw new Error("LoRA adapter is not supported for proxy.");ib(n)},hb=async(n,e,t,i,r,s,a)=>{if(Jn()){if(a.length>0)throw new Error("LoRA adapter is not supported for proxy.");if(t.some(o=>o[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(r.some(o=>o))throw new Error("pre-allocated output tensor is not supported for proxy.");return or(),new Promise((o,l)=>{ar("run",[o,l]);let u=t,c={type:"run",in:{sessionId:n,inputIndices:e,inputs:u,outputIndices:i,options:s}};Rn.postMessage(c,ld(u))})}else return ad(n,e,t,i,r,s,a)},fb=async n=>{if(Jn())return or(),new Promise((e,t)=>{ar("end-profiling",[e,t]);let i={type:"end-profiling",in:n};Rn.postMessage(i)});od(n)}}),cd,pb=ce(()=>{"use strict";En(),ud(),cd=class{async loadAdapter(n){$n(),this.adapterId=await cb(n),Mn()}async dispose(){return db(this.adapterId)}}}),yu,Rg,mb,fM=ce(()=>{"use strict";En(),pb(),ud(),Ue(),Oc(),Vc(),yu=(n,e)=>{switch(n.location){case"cpu":return[n.type,n.dims,n.data,"cpu"];case"gpu-buffer":return[n.type,n.dims,{gpuBuffer:n.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[n.type,n.dims,{mlTensor:n.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${n.location} for ${e()}`)}},Rg=n=>{switch(n[3]){case"cpu":return new Hn(n[0],n[2],n[1]);case"gpu-buffer":{let e=n[0];if(!Fc(e))throw new Error(`not supported data type: ${e} for deserializing GPU tensor`);let{gpuBuffer:t,download:i,dispose:r}=n[2];return Hn.fromGpuBuffer(t,{dataType:e,dims:n[1],download:i,dispose:r})}case"ml-tensor":{let e=n[0];if(!Hc(e))throw new Error(`not supported data type: ${e} for deserializing MLTensor tensor`);let{mlTensor:t,download:i,dispose:r}=n[2];return Hn.fromMLTensor(t,{dataType:e,dims:n[1],download:i,dispose:r})}default:throw new Error(`invalid data location: ${n[3]}`)}},mb=class{async fetchModelAndCopyToWasmMemory(n){return ob(await Wo(n))}async loadModel(n,e){$n();let t;typeof n=="string"?t=await this.fetchModelAndCopyToWasmMemory(n):t=n,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await lb(t,e),Mn()}async dispose(){return ub(this.sessionId)}async run(n,e,t,i=[]){$n();let r=i.map(f=>{if(!(f instanceof cd))throw new Error("LoRA adapter was not created by the WebAssembly backend.");return f.adapterId}),s=[],a=[];Object.entries(n).forEach(f=>{let g=f[0],y=f[1],_=this.inputNames.indexOf(g);if(_===-1)throw new Error(`invalid input '${g}'`);s.push(y),a.push(_)});let o=[],l=[];Object.entries(e).forEach(f=>{let g=f[0],y=f[1],_=this.outputNames.indexOf(g);if(_===-1)throw new Error(`invalid output '${g}'`);o.push(y),l.push(_)});let u=s.map((f,g)=>yu(f,()=>`input "${this.inputNames[a[g]]}"`)),c=o.map((f,g)=>f?yu(f,()=>`output "${this.outputNames[l[g]]}"`):null),d=await hb(this.sessionId,a,u,l,c,t,r),h={};for(let f=0;f<d.length;f++)h[this.outputNames[l[f]]]=o[f]??Rg(d[f]);return Mn(),h}startProfiling(){}endProfiling(){fb(this.sessionId)}}}),gb,pM=ce(()=>{"use strict";gb=n=>{if(n?.epContextDataRead)throw new Error('session option "epContextDataRead" is not supported by ONNX Runtime Web')}}),_b={};_s(_b,{OnnxruntimeWebAssemblyBackend:()=>yc,initializeFlags:()=>_c,wasmBackend:()=>yb});var _c,yc,yb,mM=ce(()=>{"use strict";En(),pb(),ud(),fM(),pM(),_c=()=>{(typeof Pt.wasm.initTimeout!="number"||Pt.wasm.initTimeout<0)&&(Pt.wasm.initTimeout=0);let n=Pt.wasm.simd;if(typeof n!="boolean"&&n!==void 0&&n!=="fixed"&&n!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${n}". Reset it to \`false\` and ignore SIMD feature checking.`),Pt.wasm.simd=!1),typeof Pt.wasm.proxy!="boolean"&&(Pt.wasm.proxy=!1),typeof Pt.wasm.trace!="boolean"&&(Pt.wasm.trace=!1),typeof Pt.wasm.numThreads!="number"||!Number.isInteger(Pt.wasm.numThreads)||Pt.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Pt.wasm.numThreads=1;else{let e=typeof navigator>"u"?ZS("node:os").cpus().length:navigator.hardwareConcurrency;Pt.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},yc=class{async init(n){_c(),await sb(),await ab(n)}async createInferenceSessionHandler(n,e){gb(e);let t=new mb;return await t.loadModel(n,e),t}async createLoraAdapterHandler(n){let e=new cd;return await e.loadAdapter(n),e}},yb=new yc});En();En();En();var gM="1.31.1";{let n=(mM(),ca(_b)).wasmBackend;Qr("webgpu",n,5),Qr("webnn",n,5),Qr("cpu",n,10),Qr("wasm",n,10)}Object.defineProperty(Pt.versions,"web",{value:gM,enumerable:!0});/**
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
 */const _M=["L_big_toe","L_leftmost","L_rightmost","L_fourth_toe","L_heel","L_little_toe","L_middle_toe","L_second_toe","R_big_toe","R_leftmost","R_rightmost","R_fourth_toe","R_heel","R_little_toe","R_middle_toe","R_second_toe"],qa=16,gn=320;class yM{constructor(){this.session=null,this.video=null,this.mockMode=!1,this.lastT=0}async init(){Pt.wasm.numThreads=1;try{this.session=await Ro.create("/models/foot_pose.onnx",{executionProviders:["webgl","wasm"],graphOptimizationLevel:"all"})}catch(e){console.warn("WebGL EP failed, falling back to WASM",e),this.session=await Ro.create("/models/foot_pose.onnx",{executionProviders:["wasm"]})}}async setupCamera(){const e=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"},width:{ideal:1280},height:{ideal:720}},audio:!1});return this.video=document.getElementById("camera"),this.video.srcObject=e,await this.video.play(),await new Promise(t=>{if(this.video.videoWidth)return t();this.video.onloadedmetadata=()=>t()}),this.video}setMockMode(e){this.mockMode=e,e?this.video?.pause():this.video?.play().catch(()=>{})}_preprocess(){const e=this.video.videoWidth,t=this.video.videoHeight,i=Math.min(gn/e,gn/t),r=Math.round(e*i),s=Math.round(t*i),a=Math.floor((gn-r)/2),o=Math.floor((gn-s)/2),l=this._canvas||(this._canvas=document.createElement("canvas"));l.width=gn,l.height=gn;const u=l.getContext("2d",{willReadFrequently:!0});u.fillStyle="#727272",u.fillRect(0,0,gn,gn),u.drawImage(this.video,a,o,r,s);const c=u.getImageData(0,0,gn,gn).data,d=gn*gn,h=new Float32Array(d*3);for(let g=0;g<d;g++){const y=c[g*4]/255,_=c[g*4+1]/255,p=c[g*4+2]/255;h[g]=y,h[d+g]=_,h[d*2+g]=p}return{tensor:new Hn("float32",h,[1,3,gn,gn]),scale:i,padX:a,padY:o,srcW:e,srcH:t}}_postprocess(e,t,i,r,s,a,o=.25,l=.45){e.dims[1];const u=e.dims[2],c=e.data,d=4,h=4+qa,f=Array.from({length:qa},()=>[]);for(let _=0;_<u;_++){let p=-1,x=0;for(let G=0;G<qa;G++){const ie=c[(d+G)*u+_];ie>x&&(x=ie,p=G)}if(x<o)continue;const b=c[0*u+_],w=c[1*u+_],R=c[2*u+_],E=c[3*u+_],I=c[(h+0)*u+_],T=c[(h+1)*u+_],C=c[(h+2)*u+_];if(C<.1)continue;const A=G=>(G-i)/t,k=G=>(G-r)/t,F=A(b-R/2),U=k(w-E/2),D=A(b+R/2),z=k(w+E/2),K=A(I),q=k(T);f[p].push({classId:p,score:x,box:[F,U,D,z],kpt:[K,q],kptConf:C})}const g=(_,p)=>{const[x,b,w,R]=_,[E,I,T,C]=p,A=Math.max(x,E),k=Math.max(b,I),F=Math.min(w,T),U=Math.min(R,C),D=Math.max(0,F-A),z=Math.max(0,U-k),K=D*z,q=(w-x)*(R-b)+(T-E)*(C-I)-K;return q<=0?0:K/q},y={};for(let _=0;_<qa;_++){const p=f[_].sort((b,w)=>w.score-b.score),x=[];for(const b of p){let w=!0;for(const R of x)if(g(b.box,R.box)>l){w=!1;break}if(w&&x.push(b),x.length>=1)break}x.length&&(y[_]=x[0])}return{left:this._buildFoot(y,0),right:this._buildFoot(y,8),raw:y,srcW:s,srcH:a}}_buildFoot(e,t){const i={};let r=0,s=0;for(let f=0;f<8;f++){const g=t+f,y=e[g];y&&(i[g]=y.kpt,r+=y.score,s++)}if(s===0)return null;const a=f=>i[t+f]||null,o=a(4),l=a(6),u=[a(0),a(7),a(6),a(3),a(5)].filter(Boolean);if(!o)return null;let c=l;if(!c&&u.length&&(c=[u.reduce((f,g)=>f+g[0],0)/u.length,u.reduce((f,g)=>f+g[1],0)/u.length]),!c)return null;const d=a(1),h=a(2);return{heel:o,toeFront:c,leftmost:d,rightmost:h,keypoints:i,confidence:r/s,visibleCount:s}}async detect(){if(this.mockMode||!this.session)return this._mockDetection();const{tensor:e,scale:t,padX:i,padY:r,srcW:s,srcH:a}=this._preprocess(),o={images:e},l=await this.session.run(o),u=l[Object.keys(l)[0]];return this._postprocess(u,t,i,r,s,a)}_mockDetection(){const e=performance.now()/1e3,t=Math.sin(e*1.5)*6,i=Math.cos(e*.9)*4,r=(s,a,o)=>{const l={},u=(c,d,h)=>{l[s+c]=[a+d+i,o+h+t]};return u(0,-20,-50),u(1,-45,10),u(2,45,10),u(3,10,-45),u(4,0,80),u(5,30,-40),u(6,0,-55),u(7,-15,-52),{heel:l[s+4],toeFront:l[s+6],leftmost:l[s+1],rightmost:l[s+2],keypoints:l,confidence:.92,visibleCount:8}};return{left:r(0,260,480),right:r(8,820,470),raw:{},srcW:1280,srcH:720}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dd="164",vM=0,Cg=1,xM=2,vb=1,bM=2,vi=3,ri=0,_n=1,Vn=2,Gi=0,ns=1,Ig=2,$g=3,Pg=4,wM=5,xr=100,SM=101,MM=102,TM=103,EM=104,AM=200,RM=201,CM=202,IM=203,vc=204,xc=205,$M=206,PM=207,LM=208,DM=209,NM=210,UM=211,OM=212,kM=213,zM=214,BM=0,FM=1,HM=2,Uo=3,VM=4,GM=5,WM=6,qM=7,xb=0,XM=1,jM=2,Wi=0,KM=1,YM=2,ZM=3,JM=4,QM=5,eT=6,tT=7,Lg="attached",nT="detached",bb=300,ls=301,us=302,bc=303,wc=304,qo=306,cs=1e3,Fi=1001,Oo=1002,hn=1003,wb=1004,na=1005,Sn=1006,Mo=1007,bi=1008,ji=1009,iT=1010,rT=1011,Sb=1012,Mb=1013,ds=1014,ti=1015,Xo=1016,Tb=1017,Eb=1018,ma=1020,sT=35902,aT=1021,oT=1022,Wn=1023,lT=1024,uT=1025,is=1026,ha=1027,Ab=1028,Rb=1029,cT=1030,Cb=1031,Ib=1033,vu=33776,xu=33777,bu=33778,wu=33779,Dg=35840,Ng=35841,Ug=35842,Og=35843,kg=36196,zg=37492,Bg=37496,Fg=37808,Hg=37809,Vg=37810,Gg=37811,Wg=37812,qg=37813,Xg=37814,jg=37815,Kg=37816,Yg=37817,Zg=37818,Jg=37819,Qg=37820,e_=37821,Su=36492,t_=36494,n_=36495,dT=36283,i_=36284,r_=36285,s_=36286,fa=2300,hs=2301,Mu=2302,a_=2400,o_=2401,l_=2402,hT=2500,fT=0,$b=1,Sc=2,pT=3200,mT=3201,Pb=0,gT=1,zi="",nn="srgb",rn="srgb-linear",hd="display-p3",jo="display-p3-linear",ko="linear",Ot="srgb",zo="rec709",Bo="p3",Nr=7680,u_=519,_T=512,yT=513,vT=514,Lb=515,xT=516,bT=517,wT=518,ST=519,Mc=35044,c_="300 es",wi=2e3,Fo=2001;class ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let d_=1234567;const aa=Math.PI/180,fs=180/Math.PI;function qn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function on(n,e,t){return Math.max(e,Math.min(t,n))}function fd(n,e){return(n%e+e)%e}function MT(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function TT(n,e,t){return n!==e?(t-n)/(e-n):0}function oa(n,e,t){return(1-t)*n+t*e}function ET(n,e,t,i){return oa(n,e,1-Math.exp(-t*i))}function AT(n,e=1){return e-Math.abs(fd(n,e*2)-e)}function RT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function CT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function IT(n,e){return n+Math.floor(Math.random()*(e-n+1))}function $T(n,e){return n+Math.random()*(e-n)}function PT(n){return n*(.5-Math.random())}function LT(n){n!==void 0&&(d_=n);let e=d_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function DT(n){return n*aa}function NT(n){return n*fs}function UT(n){return(n&n-1)===0&&n!==0}function OT(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function kT(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function zT(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),u=s((e+i)/2),c=a((e+i)/2),d=s((e-i)/2),h=a((e-i)/2),f=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*c,l*d,l*h,o*u);break;case"YZY":n.set(l*h,o*c,l*d,o*u);break;case"ZXZ":n.set(l*d,l*h,o*c,o*u);break;case"XZX":n.set(o*c,l*g,l*f,o*u);break;case"YXY":n.set(l*f,o*c,l*g,o*u);break;case"ZYZ":n.set(l*g,l*f,o*c,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ia={DEG2RAD:aa,RAD2DEG:fs,generateUUID:qn,clamp:on,euclideanModulo:fd,mapLinear:MT,inverseLerp:TT,lerp:oa,damp:ET,pingpong:AT,smoothstep:RT,smootherstep:CT,randInt:IT,randFloat:$T,randFloatSpread:PT,seededRandom:LT,degToRad:DT,radToDeg:NT,isPowerOfTwo:UT,ceilPowerOfTwo:OT,floorPowerOfTwo:kT,setQuaternionFromProperEuler:zT,normalize:At,denormalize:Gn};class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,i,r,s,a,o,l,u){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u)}set(e,t,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],f=i[5],g=i[8],y=r[0],_=r[3],p=r[6],x=r[1],b=r[4],w=r[7],R=r[2],E=r[5],I=r[8];return s[0]=a*y+o*x+l*R,s[3]=a*_+o*b+l*E,s[6]=a*p+o*w+l*I,s[1]=u*y+c*x+d*R,s[4]=u*_+c*b+d*E,s[7]=u*p+c*w+d*I,s[2]=h*y+f*x+g*R,s[5]=h*_+f*b+g*E,s[8]=h*p+f*w+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],d=c*a-o*u,h=o*l-c*s,f=u*s-a*l,g=t*d+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=d*y,e[1]=(r*u-c*i)*y,e[2]=(o*i-r*a)*y,e[3]=h*y,e[4]=(c*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=f*y,e[7]=(i*l-u*t)*y,e[8]=(a*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Tu.makeScale(e,t)),this}rotate(e){return this.premultiply(Tu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tu=new ot;function Db(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function pa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function BT(){const n=pa("canvas");return n.style.display="block",n}const h_={};function Nb(n){n in h_||(h_[n]=!0,console.warn(n))}const f_=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),p_=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xa={[rn]:{transfer:ko,primaries:zo,toReference:n=>n,fromReference:n=>n},[nn]:{transfer:Ot,primaries:zo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[jo]:{transfer:ko,primaries:Bo,toReference:n=>n.applyMatrix3(p_),fromReference:n=>n.applyMatrix3(f_)},[hd]:{transfer:Ot,primaries:Bo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(p_),fromReference:n=>n.applyMatrix3(f_).convertLinearToSRGB()}},FT=new Set([rn,jo]),Tt={enabled:!0,_workingColorSpace:rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!FT.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Xa[e].toReference,r=Xa[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Xa[n].primaries},getTransfer:function(n){return n===zi?ko:Xa[n].transfer}};function rs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Eu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ur;class HT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ur===void 0&&(Ur=pa("canvas")),Ur.width=e.width,Ur.height=e.height;const i=Ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ur}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=rs(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(rs(t[i]/255)*255):t[i]=rs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VT=0;class Ub{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Au(r[a].image)):s.push(Au(r[a]))}else s=Au(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Au(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?HT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GT=0;class tn extends ys{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,i=Fi,r=Fi,s=Sn,a=bi,o=Wn,l=ji,u=tn.DEFAULT_ANISOTROPY,c=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GT++}),this.uuid=qn(),this.name="",this.source=new Ub(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bb)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cs:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cs:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=bb;tn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],f=l[5],g=l[9],y=l[2],_=l[6],p=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-_)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+_)<.1&&Math.abs(u+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(u+1)/2,w=(f+1)/2,R=(p+1)/2,E=(c+h)/4,I=(d+y)/4,T=(g+_)/4;return b>w&&b>R?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=E/i,s=I/i):w>R?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=E/r,s=T/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=I/s,r=T/s),this.set(i,r,s,t),this}let x=Math.sqrt((_-g)*(_-g)+(d-y)*(d-y)+(h-c)*(h-c));return Math.abs(x)<.001&&(x=1),this.x=(_-g)/x,this.y=(d-y)/x,this.z=(h-c)/x,this.w=Math.acos((u+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WT extends ys{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ub(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends WT{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ob extends tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qT extends tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=s[a+0],f=s[a+1],g=s[a+2],y=s[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(d!==y||l!==h||u!==f||c!==g){let _=1-o;const p=l*h+u*f+c*g+d*y,x=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const R=Math.sqrt(b),E=Math.atan2(R,p*x);_=Math.sin(_*E)/R,o=Math.sin(o*E)/R}const w=o*x;if(l=l*_+h*w,u=u*_+f*w,c=c*_+g*w,d=d*_+y*w,_===1-o){const R=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=R,u*=R,c*=R,d*=R}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[a],h=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+c*d+l*f-u*h,e[t+1]=l*g+c*h+u*d-o*f,e[t+2]=u*g+c*f+o*h-l*d,e[t+3]=c*g-o*d-l*h-u*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),d=o(s/2),h=l(i/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*c*d+u*f*g,this._y=u*f*d-h*c*g,this._z=u*c*g+h*f*d,this._w=u*c*d-h*f*g;break;case"YXZ":this._x=h*c*d+u*f*g,this._y=u*f*d-h*c*g,this._z=u*c*g-h*f*d,this._w=u*c*d+h*f*g;break;case"ZXY":this._x=h*c*d-u*f*g,this._y=u*f*d+h*c*g,this._z=u*c*g+h*f*d,this._w=u*c*d-h*f*g;break;case"ZYX":this._x=h*c*d-u*f*g,this._y=u*f*d+h*c*g,this._z=u*c*g-h*f*d,this._w=u*c*d+h*f*g;break;case"YZX":this._x=h*c*d+u*f*g,this._y=u*f*d+h*c*g,this._z=u*c*g-h*f*d,this._w=u*c*d-h*f*g;break;case"XZY":this._x=h*c*d-u*f*g,this._y=u*f*d-h*c*g,this._z=u*c*g+h*f*d,this._w=u*c*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],d=t[10],h=i+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(c-l)*f,this._y=(s-u)*f,this._z=(a-r)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(c-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+u)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(s-u)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-r)/f,this._x=(s+u)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),d=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(m_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(m_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*u+a*d-o*c,this.y=i+l*c+o*u-s*d,this.z=r+l*d+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ru.copy(this).projectOnVector(e),this.sub(Ru)}reflect(e){return this.sub(Ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ru=new H,m_=new Mi;class Ti{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(s,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Ka.subVectors(this.max,Gs),Or.subVectors(e.a,Gs),kr.subVectors(e.b,Gs),zr.subVectors(e.c,Gs),Ii.subVectors(kr,Or),$i.subVectors(zr,kr),lr.subVectors(Or,zr);let t=[0,-Ii.z,Ii.y,0,-$i.z,$i.y,0,-lr.z,lr.y,Ii.z,0,-Ii.x,$i.z,0,-$i.x,lr.z,0,-lr.x,-Ii.y,Ii.x,0,-$i.y,$i.x,0,-lr.y,lr.x,0];return!Cu(t,Or,kr,zr,Ka)||(t=[1,0,0,0,1,0,0,0,1],!Cu(t,Or,kr,zr,Ka))?!1:(Ya.crossVectors(Ii,$i),t=[Ya.x,Ya.y,Ya.z],Cu(t,Or,kr,zr,Ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new H,new H,new H,new H,new H,new H,new H,new H],kn=new H,ja=new Ti,Or=new H,kr=new H,zr=new H,Ii=new H,$i=new H,lr=new H,Gs=new H,Ka=new H,Ya=new H,ur=new H;function Cu(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ur.fromArray(n,s);const o=r.x*Math.abs(ur.x)+r.y*Math.abs(ur.y)+r.z*Math.abs(ur.z),l=e.dot(ur),u=t.dot(ur),c=i.dot(ur);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const XT=new Ti,Ws=new H,Iu=new H;class si{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):XT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const t=Ws.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ws,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Iu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(Iu)),this.expandByPoint(Ws.copy(e.center).sub(Iu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new H,$u=new H,Za=new H,Pi=new H,Pu=new H,Ja=new H,Lu=new H;class ga{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){$u.copy(e).add(t).multiplyScalar(.5),Za.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub($u);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Za),o=Pi.dot(this.direction),l=-Pi.dot(Za),u=Pi.lengthSq(),c=Math.abs(1-a*a);let d,h,f,g;if(c>0)if(d=a*l-o,h=a*o-l,g=s*c,d>=0)if(h>=-g)if(h<=g){const y=1/c;d*=y,h*=y,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+u}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+u;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+u):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+u):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+u);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy($u).addScaledVector(Za,h),f}intersectSphere(e,t){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),r=pi.dot(pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,a=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,a=(e.min.y-h.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,i,r,s){Pu.subVectors(t,e),Ja.subVectors(i,e),Lu.crossVectors(Pu,Ja);let a=this.direction.dot(Lu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,e);const l=o*this.direction.dot(Ja.crossVectors(Pi,Ja));if(l<0)return null;const u=o*this.direction.dot(Pu.cross(Pi));if(u<0||l+u>a)return null;const c=-o*Pi.dot(Lu);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,r,s,a,o,l,u,c,d,h,f,g,y,_){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u,c,d,h,f,g,y,_)}set(e,t,i,r,s,a,o,l,u,c,d,h,f,g,y,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=u,p[6]=c,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=y,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Br.setFromMatrixColumn(e,0).length(),s=1/Br.setFromMatrixColumn(e,1).length(),a=1/Br.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*c,f=a*d,g=o*c,y=o*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=f+g*u,t[5]=h-y*u,t[9]=-o*l,t[2]=y-h*u,t[6]=g+f*u,t[10]=a*l}else if(e.order==="YXZ"){const h=l*c,f=l*d,g=u*c,y=u*d;t[0]=h+y*o,t[4]=g*o-f,t[8]=a*u,t[1]=a*d,t[5]=a*c,t[9]=-o,t[2]=f*o-g,t[6]=y+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*c,f=l*d,g=u*c,y=u*d;t[0]=h-y*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*c,t[9]=y-h*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*c,f=a*d,g=o*c,y=o*d;t[0]=l*c,t[4]=g*u-f,t[8]=h*u+y,t[1]=l*d,t[5]=y*u+h,t[9]=f*u-g,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*u,g=o*l,y=o*u;t[0]=l*c,t[4]=y-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=f*d+g,t[10]=h-y*d}else if(e.order==="XZY"){const h=a*l,f=a*u,g=o*l,y=o*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=h*d+y,t[5]=a*c,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*c,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jT,e,KT)}lookAt(e,t,i){const r=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Li.crossVectors(i,vn),Li.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Li.crossVectors(i,vn)),Li.normalize(),Qa.crossVectors(vn,Li),r[0]=Li.x,r[4]=Qa.x,r[8]=vn.x,r[1]=Li.y,r[5]=Qa.y,r[9]=vn.y,r[2]=Li.z,r[6]=Qa.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],f=i[13],g=i[2],y=i[6],_=i[10],p=i[14],x=i[3],b=i[7],w=i[11],R=i[15],E=r[0],I=r[4],T=r[8],C=r[12],A=r[1],k=r[5],F=r[9],U=r[13],D=r[2],z=r[6],K=r[10],q=r[14],G=r[3],ie=r[7],te=r[11],Y=r[15];return s[0]=a*E+o*A+l*D+u*G,s[4]=a*I+o*k+l*z+u*ie,s[8]=a*T+o*F+l*K+u*te,s[12]=a*C+o*U+l*q+u*Y,s[1]=c*E+d*A+h*D+f*G,s[5]=c*I+d*k+h*z+f*ie,s[9]=c*T+d*F+h*K+f*te,s[13]=c*C+d*U+h*q+f*Y,s[2]=g*E+y*A+_*D+p*G,s[6]=g*I+y*k+_*z+p*ie,s[10]=g*T+y*F+_*K+p*te,s[14]=g*C+y*U+_*q+p*Y,s[3]=x*E+b*A+w*D+R*G,s[7]=x*I+b*k+w*z+R*ie,s[11]=x*T+b*F+w*K+R*te,s[15]=x*C+b*U+w*q+R*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],f=e[14],g=e[3],y=e[7],_=e[11],p=e[15];return g*(+s*l*d-r*u*d-s*o*h+i*u*h+r*o*f-i*l*f)+y*(+t*l*f-t*u*h+s*a*h-r*a*f+r*u*c-s*l*c)+_*(+t*u*d-t*o*f-s*a*d+i*a*f+s*o*c-i*u*c)+p*(-r*o*c-t*l*d+t*o*h+r*a*d-i*a*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],f=e[11],g=e[12],y=e[13],_=e[14],p=e[15],x=d*_*u-y*h*u+y*l*f-o*_*f-d*l*p+o*h*p,b=g*h*u-c*_*u-g*l*f+a*_*f+c*l*p-a*h*p,w=c*y*u-g*d*u+g*o*f-a*y*f-c*o*p+a*d*p,R=g*d*l-c*y*l-g*o*h+a*y*h+c*o*_-a*d*_,E=t*x+i*b+r*w+s*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/E;return e[0]=x*I,e[1]=(y*h*s-d*_*s-y*r*f+i*_*f+d*r*p-i*h*p)*I,e[2]=(o*_*s-y*l*s+y*r*u-i*_*u-o*r*p+i*l*p)*I,e[3]=(d*l*s-o*h*s-d*r*u+i*h*u+o*r*f-i*l*f)*I,e[4]=b*I,e[5]=(c*_*s-g*h*s+g*r*f-t*_*f-c*r*p+t*h*p)*I,e[6]=(g*l*s-a*_*s-g*r*u+t*_*u+a*r*p-t*l*p)*I,e[7]=(a*h*s-c*l*s+c*r*u-t*h*u-a*r*f+t*l*f)*I,e[8]=w*I,e[9]=(g*d*s-c*y*s-g*i*f+t*y*f+c*i*p-t*d*p)*I,e[10]=(a*y*s-g*o*s+g*i*u-t*y*u-a*i*p+t*o*p)*I,e[11]=(c*o*s-a*d*s-c*i*u+t*d*u+a*i*f-t*o*f)*I,e[12]=R*I,e[13]=(c*y*r-g*d*r+g*i*h-t*y*h-c*i*_+t*d*_)*I,e[14]=(g*o*r-a*y*r-g*i*l+t*y*l+a*i*_-t*o*_)*I,e[15]=(a*d*r-c*o*r+c*i*l-t*d*l-a*i*h+t*o*h)*I,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,d=o+o,h=s*u,f=s*c,g=s*d,y=a*c,_=a*d,p=o*d,x=l*u,b=l*c,w=l*d,R=i.x,E=i.y,I=i.z;return r[0]=(1-(y+p))*R,r[1]=(f+w)*R,r[2]=(g-b)*R,r[3]=0,r[4]=(f-w)*E,r[5]=(1-(h+p))*E,r[6]=(_+x)*E,r[7]=0,r[8]=(g+b)*I,r[9]=(_-x)*I,r[10]=(1-(h+y))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Br.set(r[0],r[1],r[2]).length();const a=Br.set(r[4],r[5],r[6]).length(),o=Br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const u=1/s,c=1/a,d=1/o;return zn.elements[0]*=u,zn.elements[1]*=u,zn.elements[2]*=u,zn.elements[4]*=c,zn.elements[5]*=c,zn.elements[6]*=c,zn.elements[8]*=d,zn.elements[9]*=d,zn.elements[10]*=d,t.setFromRotationMatrix(zn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=wi){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let f,g;if(o===wi)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Fo)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=wi){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(a-s),h=(t+e)*u,f=(i+r)*c;let g,y;if(o===wi)g=(a+s)*d,y=-2*d;else if(o===Fo)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Br=new H,zn=new lt,jT=new H(0,0,0),KT=new H(1,1,1),Li=new H,Qa=new H,vn=new H,g_=new lt,__=new Mi;class Xn{constructor(e=0,t=0,i=0,r=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-on(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-on(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return g_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(g_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return __.setFromEuler(this),this.setFromQuaternion(__,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class kb{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YT=0;const y_=new H,Fr=new Mi,mi=new lt,eo=new H,qs=new H,ZT=new H,JT=new Mi,v_=new H(1,0,0),x_=new H(0,1,0),b_=new H(0,0,1),w_={type:"added"},QT={type:"removed"},Hr={type:"childadded",child:null},Du={type:"childremoved",child:null};class Bt extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YT++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new H,t=new Xn,i=new Mi,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new ot}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kb,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fr.setFromAxisAngle(e,t),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,t){return Fr.setFromAxisAngle(e,t),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(v_,e)}rotateY(e){return this.rotateOnAxis(x_,e)}rotateZ(e){return this.rotateOnAxis(b_,e)}translateOnAxis(e,t){return y_.copy(e).applyQuaternion(this.quaternion),this.position.add(y_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(v_,e)}translateY(e){return this.translateOnAxis(x_,e)}translateZ(e){return this.translateOnAxis(b_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?eo.copy(e):eo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(qs,eo,this.up):mi.lookAt(eo,qs,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),Fr.setFromRotationMatrix(mi),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(w_),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(QT),Du.child=e,this.dispatchEvent(Du),Du.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(w_),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,ZT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,JT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bt.DEFAULT_UP=new H(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new H,gi=new H,Nu=new H,_i=new H,Vr=new H,Gr=new H,S_=new H,Uu=new H,Ou=new H,ku=new H;class ei{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Bn.subVectors(e,t),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Bn.subVectors(r,t),gi.subVectors(i,t),Nu.subVectors(e,t);const a=Bn.dot(Bn),o=Bn.dot(gi),l=Bn.dot(Nu),u=gi.dot(gi),c=gi.dot(Nu),d=a*u-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(u*l-o*c)*h,g=(a*c-o*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(a,_i.y),l.addScaledVector(o,_i.z),l)}static isFrontFacing(e,t,i,r){return Bn.subVectors(i,t),gi.subVectors(e,t),Bn.cross(gi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Bn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ei.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Vr.subVectors(r,i),Gr.subVectors(s,i),Uu.subVectors(e,i);const l=Vr.dot(Uu),u=Gr.dot(Uu);if(l<=0&&u<=0)return t.copy(i);Ou.subVectors(e,r);const c=Vr.dot(Ou),d=Gr.dot(Ou);if(c>=0&&d<=c)return t.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(Vr,a);ku.subVectors(e,s);const f=Vr.dot(ku),g=Gr.dot(ku);if(g>=0&&f<=g)return t.copy(s);const y=f*u-l*g;if(y<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(i).addScaledVector(Gr,o);const _=c*g-f*d;if(_<=0&&d-c>=0&&f-g>=0)return S_.subVectors(s,r),o=(d-c)/(d-c+(f-g)),t.copy(r).addScaledVector(S_,o);const p=1/(_+y+h);return a=y*p,o=h*p,t.copy(i).addScaledVector(Vr,a).addScaledVector(Gr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},to={h:0,s:0,l:0};function zu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Tt.workingColorSpace){if(e=fd(e,1),t=on(t,0,1),i=on(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=zu(a,s,e+1/3),this.g=zu(a,s,e),this.b=zu(a,s,e-1/3)}return Tt.toWorkingColorSpace(this,r),this}setStyle(e,t=nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const i=zb[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}copyLinearToSRGB(e){return this.r=Eu(e.r),this.g=Eu(e.g),this.b=Eu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return Tt.fromWorkingColorSpace(an.copy(this),e),Math.round(on(an.r*255,0,255))*65536+Math.round(on(an.g*255,0,255))*256+Math.round(on(an.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.fromWorkingColorSpace(an.copy(this),t);const i=an.r,r=an.g,s=an.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const d=a-o;switch(u=c<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=nn){Tt.fromWorkingColorSpace(an.copy(this),e);const t=an.r,i=an.g,r=an.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(to);const i=oa(Di.h,to.h,t),r=oa(Di.s,to.s,t),s=oa(Di.l,to.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Ye;Ye.NAMES=zb;let eE=0;class ii extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=ns,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vc,this.blendDst=xc,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(i.blending=this.blending),this.side!==ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vc&&(i.blendSrc=this.blendSrc),this.blendDst!==xc&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Uo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==u_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hi extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=xb,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new H,no=new dt;class fn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Nb("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mc&&(e.usage=this.usage),e}}class Bb extends fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Fb extends fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pn extends fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let tE=0;const Cn=new lt,Bu=new Bt,Wr=new H,xn=new Ti,Xs=new Ti,Jt=new H;class Pn extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Db(e)?Fb:Bb)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ot().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,i){return Cn.makeTranslation(e,t,i),this.applyMatrix4(Cn),this}scale(e,t,i){return Cn.makeScale(e,t,i),this.applyMatrix4(Cn),this}lookAt(e){return Bu.lookAt(e),Bu.updateMatrix(),this.applyMatrix4(Bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(xn.min,Xs.min),xn.expandByPoint(Jt),Jt.addVectors(xn.max,Xs.max),xn.expandByPoint(Jt)):(xn.expandByPoint(Xs.min),xn.expandByPoint(Xs.max))}xn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Jt.fromBufferAttribute(o,u),l&&(Wr.fromBufferAttribute(e,u),Jt.add(Wr)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<i.count;T++)o[T]=new H,l[T]=new H;const u=new H,c=new H,d=new H,h=new dt,f=new dt,g=new dt,y=new H,_=new H;function p(T,C,A){u.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,A),h.fromBufferAttribute(s,T),f.fromBufferAttribute(s,C),g.fromBufferAttribute(s,A),c.sub(u),d.sub(u),f.sub(h),g.sub(h);const k=1/(f.x*g.y-g.x*f.y);isFinite(k)&&(y.copy(c).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(k),_.copy(d).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(k),o[T].add(y),o[C].add(y),o[A].add(y),l[T].add(_),l[C].add(_),l[A].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let T=0,C=x.length;T<C;++T){const A=x[T],k=A.start,F=A.count;for(let U=k,D=k+F;U<D;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const b=new H,w=new H,R=new H,E=new H;function I(T){R.fromBufferAttribute(r,T),E.copy(R);const C=o[T];b.copy(C),b.sub(R.multiplyScalar(R.dot(C))).normalize(),w.crossVectors(E,C);const k=w.dot(l[T])<0?-1:1;a.setXYZW(T,b.x,b.y,b.z,k)}for(let T=0,C=x.length;T<C;++T){const A=x[T],k=A.start,F=A.count;for(let U=k,D=k+F;U<D;U+=3)I(e.getX(U+0)),I(e.getX(U+1)),I(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,u=new H,c=new H,d=new H;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),y=e.getX(h+1),_=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,_),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,_),o.add(c),l.add(c),u.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,d=o.normalized,h=new u.constructor(l.length*c);let f=0,g=0;for(let y=0,_=l.length;y<_;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*c;for(let p=0;p<c;p++)h[g++]=u[f++]}return new fn(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,d=u.length;c<d;c++){const h=u[c],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const f=u[d];c.push(f.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,f=d.length;h<f;h++)c.push(d[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const M_=new lt,cr=new ga,io=new si,T_=new H,qr=new H,Xr=new H,jr=new H,Fu=new H,ro=new H,so=new dt,ao=new dt,oo=new dt,E_=new H,A_=new H,R_=new H,lo=new H,uo=new H;class jt extends Bt{constructor(e=new Pn,t=new Hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ro.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],d=s[l];c!==0&&(Fu.fromBufferAttribute(d,e),a?ro.addScaledVector(Fu,c):ro.addScaledVector(Fu.sub(t),c))}t.add(ro)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(io.containsPoint(cr.origin)===!1&&(cr.intersectSphere(io,T_)===null||cr.origin.distanceToSquared(T_)>(e.far-e.near)**2))&&(M_.copy(s).invert(),cr.copy(e.ray).applyMatrix4(M_),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,cr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){const _=h[g],p=a[_.materialIndex],x=Math.max(_.start,f.start),b=Math.min(o.count,Math.min(_.start+_.count,f.start+f.count));for(let w=x,R=b;w<R;w+=3){const E=o.getX(w),I=o.getX(w+1),T=o.getX(w+2);r=co(this,p,e,i,u,c,d,E,I,T),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let _=g,p=y;_<p;_+=3){const x=o.getX(_),b=o.getX(_+1),w=o.getX(_+2);r=co(this,a,e,i,u,c,d,x,b,w),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){const _=h[g],p=a[_.materialIndex],x=Math.max(_.start,f.start),b=Math.min(l.count,Math.min(_.start+_.count,f.start+f.count));for(let w=x,R=b;w<R;w+=3){const E=w,I=w+1,T=w+2;r=co(this,p,e,i,u,c,d,E,I,T),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let _=g,p=y;_<p;_+=3){const x=_,b=_+1,w=_+2;r=co(this,a,e,i,u,c,d,x,b,w),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function nE(n,e,t,i,r,s,a,o){let l;if(e.side===_n?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ri,o),l===null)return null;uo.copy(o),uo.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(uo);return u<t.near||u>t.far?null:{distance:u,point:uo.clone(),object:n}}function co(n,e,t,i,r,s,a,o,l,u){n.getVertexPosition(o,qr),n.getVertexPosition(l,Xr),n.getVertexPosition(u,jr);const c=nE(n,e,t,i,qr,Xr,jr,lo);if(c){r&&(so.fromBufferAttribute(r,o),ao.fromBufferAttribute(r,l),oo.fromBufferAttribute(r,u),c.uv=ei.getInterpolation(lo,qr,Xr,jr,so,ao,oo,new dt)),s&&(so.fromBufferAttribute(s,o),ao.fromBufferAttribute(s,l),oo.fromBufferAttribute(s,u),c.uv1=ei.getInterpolation(lo,qr,Xr,jr,so,ao,oo,new dt)),a&&(E_.fromBufferAttribute(a,o),A_.fromBufferAttribute(a,l),R_.fromBufferAttribute(a,u),c.normal=ei.getInterpolation(lo,qr,Xr,jr,E_,A_,R_,new H),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new H,materialIndex:0};ei.getNormal(qr,Xr,jr,d.normal),c.face=d}return c}class qi extends Pn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pn(u,3)),this.setAttribute("normal",new pn(c,3)),this.setAttribute("uv",new pn(d,2));function g(y,_,p,x,b,w,R,E,I,T,C){const A=w/I,k=R/T,F=w/2,U=R/2,D=E/2,z=I+1,K=T+1;let q=0,G=0;const ie=new H;for(let te=0;te<K;te++){const Y=te*k-U;for(let oe=0;oe<z;oe++){const de=oe*A-F;ie[y]=de*x,ie[_]=Y*b,ie[p]=D,u.push(ie.x,ie.y,ie.z),ie[y]=0,ie[_]=0,ie[p]=E>0?1:-1,c.push(ie.x,ie.y,ie.z),d.push(oe/I),d.push(1-te/T),q+=1}}for(let te=0;te<T;te++)for(let Y=0;Y<I;Y++){const oe=h+Y+z*te,de=h+Y+z*(te+1),B=h+(Y+1)+z*(te+1),ue=h+(Y+1)+z*te;l.push(oe,de,ue),l.push(de,B,ue),G+=6}o.addGroup(f,G,C),f+=G,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ps(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function cn(n){const e={};for(let t=0;t<n.length;t++){const i=ps(n[t]);for(const r in i)e[r]=i[r]}return e}function iE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hb(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const rE={clone:ps,merge:cn};var sE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sE,this.fragmentShader=aE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=iE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Vb extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new H,C_=new dt,I_=new dt;class dn extends Vb{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,C_,I_),t.subVectors(I_,C_)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(aa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kr=-90,Yr=1;class oE extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(Kr,Yr,e,t);r.layers=this.layers,this.add(r);const s=new dn(Kr,Yr,e,t);s.layers=this.layers,this.add(s);const a=new dn(Kr,Yr,e,t);a.layers=this.layers,this.add(a);const o=new dn(Kr,Yr,e,t);o.layers=this.layers,this.add(o);const l=new dn(Kr,Yr,e,t);l.layers=this.layers,this.add(l);const u=new dn(Kr,Yr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Gb extends tn{constructor(e,t,i,r,s,a,o,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:ls,super(e,t,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lE extends Ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Gb(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qi(5,5,5),s=new Ki({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Gi});s.uniforms.tEquirect.value=t;const a=new jt(r,s),o=t.minFilter;return t.minFilter===bi&&(t.minFilter=Sn),new oE(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Hu=new H,uE=new H,cE=new ot;class mr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Hu.subVectors(i,t).cross(uE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Hu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||cE.getNormalMatrix(e),r=this.coplanarPoint(Hu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new si,ho=new H;class pd{constructor(e=new mr,t=new mr,i=new mr,r=new mr,s=new mr,a=new mr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],f=r[8],g=r[9],y=r[10],_=r[11],p=r[12],x=r[13],b=r[14],w=r[15];if(i[0].setComponents(l-s,h-u,_-f,w-p).normalize(),i[1].setComponents(l+s,h+u,_+f,w+p).normalize(),i[2].setComponents(l+a,h+c,_+g,w+x).normalize(),i[3].setComponents(l-a,h-c,_-g,w-x).normalize(),i[4].setComponents(l-o,h-d,_-y,w-b).normalize(),t===wi)i[5].setComponents(l+o,h+d,_+y,w+b).normalize();else if(t===Fo)i[5].setComponents(o,d,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ho.x=r.normal.x>0?e.max.x:e.min.x,ho.y=r.normal.y>0?e.max.y:e.min.y,ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wb(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function dE(n){const e=new WeakMap;function t(o,l){const u=o.array,c=o.usage,d=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),o.onUploadCallback();let f;if(u instanceof Float32Array)f=n.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=n.SHORT;else if(u instanceof Uint32Array)f=n.UNSIGNED_INT;else if(u instanceof Int32Array)f=n.INT;else if(u instanceof Int8Array)f=n.BYTE;else if(u instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,u){const c=l.array,d=l._updateRange,h=l.updateRanges;if(n.bindBuffer(u,o),d.count===-1&&h.length===0&&n.bufferSubData(u,0,c),h.length!==0){for(let f=0,g=h.length;f<g;f++){const y=h[f];n.bufferSubData(u,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(u,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}class Ko extends Pn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,d=e/o,h=t/l,f=[],g=[],y=[],_=[];for(let p=0;p<c;p++){const x=p*h-a;for(let b=0;b<u;b++){const w=b*d-s;g.push(w,-x,0),y.push(0,0,1),_.push(b/o),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const b=x+u*p,w=x+u*(p+1),R=x+1+u*(p+1),E=x+1+u*p;f.push(b,w,E),f.push(w,R,E)}this.setIndex(f),this.setAttribute("position",new pn(g,3)),this.setAttribute("normal",new pn(y,3)),this.setAttribute("uv",new pn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.widthSegments,e.heightSegments)}}var hE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_E=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,wE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ME=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,TE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,EE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$E=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,NE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,UE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,OE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HE="gl_FragColor = linearToOutputTexel( gl_FragColor );",VE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,GE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,WE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,KE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,e2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,r2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,s2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,c2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,h2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,f2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,b2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,A2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,R2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,C2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,I2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,N2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,F2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,j2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,K2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Y2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Z2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Q2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_A=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,IA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$A=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,PA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,UA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,BA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,VA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:hE,alphahash_pars_fragment:fE,alphamap_fragment:pE,alphamap_pars_fragment:mE,alphatest_fragment:gE,alphatest_pars_fragment:_E,aomap_fragment:yE,aomap_pars_fragment:vE,batching_pars_vertex:xE,batching_vertex:bE,begin_vertex:wE,beginnormal_vertex:SE,bsdfs:ME,iridescence_fragment:TE,bumpmap_pars_fragment:EE,clipping_planes_fragment:AE,clipping_planes_pars_fragment:RE,clipping_planes_pars_vertex:CE,clipping_planes_vertex:IE,color_fragment:$E,color_pars_fragment:PE,color_pars_vertex:LE,color_vertex:DE,common:NE,cube_uv_reflection_fragment:UE,defaultnormal_vertex:OE,displacementmap_pars_vertex:kE,displacementmap_vertex:zE,emissivemap_fragment:BE,emissivemap_pars_fragment:FE,colorspace_fragment:HE,colorspace_pars_fragment:VE,envmap_fragment:GE,envmap_common_pars_fragment:WE,envmap_pars_fragment:qE,envmap_pars_vertex:XE,envmap_physical_pars_fragment:r2,envmap_vertex:jE,fog_vertex:KE,fog_pars_vertex:YE,fog_fragment:ZE,fog_pars_fragment:JE,gradientmap_pars_fragment:QE,lightmap_pars_fragment:e2,lights_lambert_fragment:t2,lights_lambert_pars_fragment:n2,lights_pars_begin:i2,lights_toon_fragment:s2,lights_toon_pars_fragment:a2,lights_phong_fragment:o2,lights_phong_pars_fragment:l2,lights_physical_fragment:u2,lights_physical_pars_fragment:c2,lights_fragment_begin:d2,lights_fragment_maps:h2,lights_fragment_end:f2,logdepthbuf_fragment:p2,logdepthbuf_pars_fragment:m2,logdepthbuf_pars_vertex:g2,logdepthbuf_vertex:_2,map_fragment:y2,map_pars_fragment:v2,map_particle_fragment:x2,map_particle_pars_fragment:b2,metalnessmap_fragment:w2,metalnessmap_pars_fragment:S2,morphinstance_vertex:M2,morphcolor_vertex:T2,morphnormal_vertex:E2,morphtarget_pars_vertex:A2,morphtarget_vertex:R2,normal_fragment_begin:C2,normal_fragment_maps:I2,normal_pars_fragment:$2,normal_pars_vertex:P2,normal_vertex:L2,normalmap_pars_fragment:D2,clearcoat_normal_fragment_begin:N2,clearcoat_normal_fragment_maps:U2,clearcoat_pars_fragment:O2,iridescence_pars_fragment:k2,opaque_fragment:z2,packing:B2,premultiplied_alpha_fragment:F2,project_vertex:H2,dithering_fragment:V2,dithering_pars_fragment:G2,roughnessmap_fragment:W2,roughnessmap_pars_fragment:q2,shadowmap_pars_fragment:X2,shadowmap_pars_vertex:j2,shadowmap_vertex:K2,shadowmask_pars_fragment:Y2,skinbase_vertex:Z2,skinning_pars_vertex:J2,skinning_vertex:Q2,skinnormal_vertex:eA,specularmap_fragment:tA,specularmap_pars_fragment:nA,tonemapping_fragment:iA,tonemapping_pars_fragment:rA,transmission_fragment:sA,transmission_pars_fragment:aA,uv_pars_fragment:oA,uv_pars_vertex:lA,uv_vertex:uA,worldpos_vertex:cA,background_vert:dA,background_frag:hA,backgroundCube_vert:fA,backgroundCube_frag:pA,cube_vert:mA,cube_frag:gA,depth_vert:_A,depth_frag:yA,distanceRGBA_vert:vA,distanceRGBA_frag:xA,equirect_vert:bA,equirect_frag:wA,linedashed_vert:SA,linedashed_frag:MA,meshbasic_vert:TA,meshbasic_frag:EA,meshlambert_vert:AA,meshlambert_frag:RA,meshmatcap_vert:CA,meshmatcap_frag:IA,meshnormal_vert:$A,meshnormal_frag:PA,meshphong_vert:LA,meshphong_frag:DA,meshphysical_vert:NA,meshphysical_frag:UA,meshtoon_vert:OA,meshtoon_frag:kA,points_vert:zA,points_frag:BA,shadow_vert:FA,shadow_frag:HA,sprite_vert:VA,sprite_frag:GA},we={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Qn={basic:{uniforms:cn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:cn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ye(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:cn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:cn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:cn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ye(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:cn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:cn([we.points,we.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:cn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:cn([we.common,we.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:cn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:cn([we.sprite,we.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:cn([we.common,we.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:cn([we.lights,we.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Qn.physical={uniforms:cn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const fo={r:0,b:0,g:0},hr=new Xn,WA=new lt;function qA(n,e,t,i,r,s,a){const o=new Ye(0);let l=s===!0?0:1,u,c,d=null,h=0,f=null;function g(x){let b=x.isScene===!0?x.background:null;return b&&b.isTexture&&(b=(x.backgroundBlurriness>0?t:e).get(b)),b}function y(x){let b=!1;const w=g(x);w===null?p(o,l):w&&w.isColor&&(p(w,1),b=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function _(x,b){const w=g(b);w&&(w.isCubeTexture||w.mapping===qo)?(c===void 0&&(c=new jt(new qi(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:ps(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),hr.copy(b.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(WA.makeRotationFromEuler(hr)),c.material.toneMapped=Tt.getTransfer(w.colorSpace)!==Ot,(d!==w||h!==w.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=w,h=w.version,f=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new jt(new Ko(2,2),new Ki({name:"BackgroundMaterial",uniforms:ps(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=w,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.toneMapped=Tt.getTransfer(w.colorSpace)!==Ot,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||h!==w.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=w,h=w.version,f=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function p(x,b){x.getRGB(fo,Hb(n)),i.buffers.color.setClear(fo.r,fo.g,fo.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(x,b=1){o.set(x),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:y,addToRenderList:_}}function XA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(A,k,F,U,D){let z=!1;const K=d(U,F,k);s!==K&&(s=K,u(s.object)),z=f(A,U,F,D),z&&g(A,U,F,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,w(A,k,F,U),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return n.createVertexArray()}function u(A){return n.bindVertexArray(A)}function c(A){return n.deleteVertexArray(A)}function d(A,k,F){const U=F.wireframe===!0;let D=i[A.id];D===void 0&&(D={},i[A.id]=D);let z=D[k.id];z===void 0&&(z={},D[k.id]=z);let K=z[U];return K===void 0&&(K=h(l()),z[U]=K),K}function h(A){const k=[],F=[],U=[];for(let D=0;D<t;D++)k[D]=0,F[D]=0,U[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:F,attributeDivisors:U,object:A,attributes:{},index:null}}function f(A,k,F,U){const D=s.attributes,z=k.attributes;let K=0;const q=F.getAttributes();for(const G in q)if(q[G].location>=0){const te=D[G];let Y=z[G];if(Y===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(Y=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(Y=A.instanceColor)),te===void 0||te.attribute!==Y||Y&&te.data!==Y.data)return!0;K++}return s.attributesNum!==K||s.index!==U}function g(A,k,F,U){const D={},z=k.attributes;let K=0;const q=F.getAttributes();for(const G in q)if(q[G].location>=0){let te=z[G];te===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(te=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(te=A.instanceColor));const Y={};Y.attribute=te,te&&te.data&&(Y.data=te.data),D[G]=Y,K++}s.attributes=D,s.attributesNum=K,s.index=U}function y(){const A=s.newAttributes;for(let k=0,F=A.length;k<F;k++)A[k]=0}function _(A){p(A,0)}function p(A,k){const F=s.newAttributes,U=s.enabledAttributes,D=s.attributeDivisors;F[A]=1,U[A]===0&&(n.enableVertexAttribArray(A),U[A]=1),D[A]!==k&&(n.vertexAttribDivisor(A,k),D[A]=k)}function x(){const A=s.newAttributes,k=s.enabledAttributes;for(let F=0,U=k.length;F<U;F++)k[F]!==A[F]&&(n.disableVertexAttribArray(F),k[F]=0)}function b(A,k,F,U,D,z,K){K===!0?n.vertexAttribIPointer(A,k,F,D,z):n.vertexAttribPointer(A,k,F,U,D,z)}function w(A,k,F,U){y();const D=U.attributes,z=F.getAttributes(),K=k.defaultAttributeValues;for(const q in z){const G=z[q];if(G.location>=0){let ie=D[q];if(ie===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(ie=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(ie=A.instanceColor)),ie!==void 0){const te=ie.normalized,Y=ie.itemSize,oe=e.get(ie);if(oe===void 0)continue;const de=oe.buffer,B=oe.type,ue=oe.bytesPerElement,Te=B===n.INT||B===n.UNSIGNED_INT||ie.gpuType===Mb;if(ie.isInterleavedBufferAttribute){const me=ie.data,Ne=me.stride,De=ie.offset;if(me.isInstancedInterleavedBuffer){for(let j=0;j<G.locationSize;j++)p(G.location+j,me.meshPerAttribute);A.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let j=0;j<G.locationSize;j++)_(G.location+j);n.bindBuffer(n.ARRAY_BUFFER,de);for(let j=0;j<G.locationSize;j++)b(G.location+j,Y/G.locationSize,B,te,Ne*ue,(De+Y/G.locationSize*j)*ue,Te)}else{if(ie.isInstancedBufferAttribute){for(let me=0;me<G.locationSize;me++)p(G.location+me,ie.meshPerAttribute);A.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let me=0;me<G.locationSize;me++)_(G.location+me);n.bindBuffer(n.ARRAY_BUFFER,de);for(let me=0;me<G.locationSize;me++)b(G.location+me,Y/G.locationSize,B,te,Y*ue,Y/G.locationSize*me*ue,Te)}}else if(K!==void 0){const te=K[q];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(G.location,te);break;case 3:n.vertexAttrib3fv(G.location,te);break;case 4:n.vertexAttrib4fv(G.location,te);break;default:n.vertexAttrib1fv(G.location,te)}}}}x()}function R(){T();for(const A in i){const k=i[A];for(const F in k){const U=k[F];for(const D in U)c(U[D].object),delete U[D];delete k[F]}delete i[A]}}function E(A){if(i[A.id]===void 0)return;const k=i[A.id];for(const F in k){const U=k[F];for(const D in U)c(U[D].object),delete U[D];delete k[F]}delete i[A.id]}function I(A){for(const k in i){const F=i[k];if(F[A.id]===void 0)continue;const U=F[A.id];for(const D in U)c(U[D].object),delete U[D];delete F[A.id]}}function T(){C(),a=!0,s!==r&&(s=r,u(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:_,disableUnusedAttributes:x}}function jA(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function a(u,c,d){d!==0&&(n.drawArraysInstanced(i,u,c,d),t.update(c,i,d))}function o(u,c,d){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<d;f++)this.render(u[f],c[f]);else{h.multiDrawArraysWEBGL(i,u,0,c,0,d);let f=0;for(let g=0;g<d;g++)f+=c[g];t.update(f,i,1)}}function l(u,c,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u.length;g++)a(u[g],c[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,d);let g=0;for(let y=0;y<d;y++)g+=c[y];for(let y=0;y<h.length;y++)t.update(g,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function KA(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(E){return!(E!==Wn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const I=E===Xo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==ji&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ti&&!I)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=f>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:w,maxSamples:R}}function YA(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new mr,o=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=c(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,y=d.clipIntersection,_=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!_)s?c(null):u();else{const x=s?0:i,b=x*4;let w=p.clippingState||null;l.value=w,w=c(g,h,b,f);for(let R=0;R!==b;++R)w[R]=t[R];p.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,f,g){const y=d!==null?d.length:0;let _=null;if(y!==0){if(_=l.value,g!==!0||_===null){const p=f+y*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(_===null||_.length<p)&&(_=new Float32Array(p));for(let b=0,w=f;b!==y;++b,w+=4)a.copy(d[b]).applyMatrix4(x,o),a.normal.toArray(_,w),_[w+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,_}}function ZA(n){let e=new WeakMap;function t(a,o){return o===bc?a.mapping=ls:o===wc&&(a.mapping=us),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===bc||o===wc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new lE(l.height);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class md extends Vb{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ts=4,$_=[.125,.215,.35,.446,.526,.582],br=20,Vu=new md,P_=new Ye;let Gu=null,Wu=0,qu=0,Xu=!1;const gr=(1+Math.sqrt(5))/2,Zr=1/gr,L_=[new H(-gr,Zr,0),new H(gr,Zr,0),new H(-Zr,0,gr),new H(Zr,0,gr),new H(0,gr,-Zr),new H(0,gr,Zr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class D_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Gu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),Xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=O_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=U_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gu,Wu,qu),this._renderer.xr.enabled=Xu,e.scissorTest=!1,po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),Xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Xo,format:Wn,colorSpace:rn,depthBuffer:!1},r=N_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=N_(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JA(s)),this._blurMaterial=QA(s,e,t)}return r}_compileMaterial(e){const t=new jt(this._lodPlanes[0],e);this._renderer.compile(t,Vu)}_sceneToCubeUV(e,t,i,r){const o=new dn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(P_),c.toneMapping=Wi,c.autoClear=!1;const f=new Hi({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new jt(new qi,f);let y=!1;const _=e.background;_?_.isColor&&(f.color.copy(_),e.background=null,y=!0):(f.color.copy(P_),y=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(u[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,u[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,u[p]));const b=this._cubeSize;po(r,x*b,p>2?b:0,b,b),c.setRenderTarget(r),y&&c.render(g,o),c.render(e,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ls||e.mapping===us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=O_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=U_());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new jt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;po(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Vu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=L_[(r-s-1)%L_.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new jt(this._lodPlanes[r],u),h=u.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*br-1),y=s/g,_=isFinite(s)?1+Math.floor(c*y):br;_>br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${br}`);const p=[];let x=0;for(let I=0;I<br;++I){const T=I/y,C=Math.exp(-T*T/2);p.push(C),I===0?x+=C:I<_&&(x+=2*C)}for(let I=0;I<p.length;I++)p[I]=p[I]/x;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;const w=this._sizeLods[r],R=3*w*(r>b-ts?r-b+ts:0),E=4*(this._cubeSize-w);po(t,R,E,3*w,2*w),l.setRenderTarget(t),l.render(d,Vu)}}function JA(n){const e=[],t=[],i=[];let r=n;const s=n-ts+1+$_.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-ts?l=$_[a-n+ts-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],f=6,g=6,y=3,_=2,p=1,x=new Float32Array(y*g*f),b=new Float32Array(_*g*f),w=new Float32Array(p*g*f);for(let E=0;E<f;E++){const I=E%3*2/3-1,T=E>2?0:-1,C=[I,T,0,I+2/3,T,0,I+2/3,T+1,0,I,T,0,I+2/3,T+1,0,I,T+1,0];x.set(C,y*g*E),b.set(h,_*g*E);const A=[E,E,E,E,E,E];w.set(A,p*g*E)}const R=new Pn;R.setAttribute("position",new fn(x,y)),R.setAttribute("uv",new fn(b,_)),R.setAttribute("faceIndex",new fn(w,p)),e.push(R),r>ts&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function N_(n,e,t){const i=new Ar(n,e,t);return i.texture.mapping=qo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function po(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function QA(n,e,t){const i=new Float32Array(br),r=new H(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function U_(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function O_(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function gd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eR(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===bc||l===wc,c=l===ls||l===us;if(u||c){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new D_(n)),d=u?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return u&&f&&f.height>0||c&&f&&r(f)?(t===null&&(t=new D_(n)),d=u?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function tR(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function nR(n,e,t,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const y=h.morphAttributes[g];for(let _=0,p=y.length;_<p;_++)e.remove(y[_])}h.removeEventListener("dispose",a),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const y=f[g];for(let _=0,p=y.length;_<p;_++)e.update(y[_],n.ARRAY_BUFFER)}}function u(d){const h=[],f=d.index,g=d.attributes.position;let y=0;if(f!==null){const x=f.array;y=f.version;for(let b=0,w=x.length;b<w;b+=3){const R=x[b+0],E=x[b+1],I=x[b+2];h.push(R,E,E,I,I,R)}}else if(g!==void 0){const x=g.array;y=g.version;for(let b=0,w=x.length/3-1;b<w;b+=3){const R=b+0,E=b+1,I=b+2;h.push(R,E,E,I,I,R)}}else return;const _=new(Db(h)?Fb:Bb)(h,1);_.version=y;const p=s.get(d);p&&e.remove(p),s.set(d,_)}function c(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function iR(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){n.drawElements(i,f,s,h*a),t.update(f,i,1)}function u(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,h*a,g),t.update(f,i,g))}function c(h,f,g){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<g;_++)this.render(h[_]/a,f[_]);else{y.multiDrawElementsWEBGL(i,f,0,s,h,0,g);let _=0;for(let p=0;p<g;p++)_+=f[p];t.update(_,i,1)}}function d(h,f,g,y){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<h.length;p++)u(h[p]/a,f[p],y[p]);else{_.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,y,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x];for(let x=0;x<y.length;x++)t.update(p,i,y[x])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function rR(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function sR(n,e,t){const i=new WeakMap,r=new Lt;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let C=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",C)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let w=o.attributes.position.count*b,R=1;w>e.maxTextureSize&&(R=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const E=new Float32Array(w*R*4*d),I=new Ob(E,w,R,d);I.type=ti,I.needsUpdate=!0;const T=b*4;for(let A=0;A<d;A++){const k=_[A],F=p[A],U=x[A],D=w*R*4*A;for(let z=0;z<k.count;z++){const K=z*T;f===!0&&(r.fromBufferAttribute(k,z),E[D+K+0]=r.x,E[D+K+1]=r.y,E[D+K+2]=r.z,E[D+K+3]=0),g===!0&&(r.fromBufferAttribute(F,z),E[D+K+4]=r.x,E[D+K+5]=r.y,E[D+K+6]=r.z,E[D+K+7]=0),y===!0&&(r.fromBufferAttribute(U,z),E[D+K+8]=r.x,E[D+K+9]=r.y,E[D+K+10]=r.z,E[D+K+11]=U.itemSize===4?r.w:1)}}h={count:d,texture:I,size:new dt(w,R)},i.set(o,h),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<u.length;y++)f+=u[y];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function aR(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}class qb extends tn{constructor(e,t,i,r,s,a,o,l,u,c){if(c=c!==void 0?c:is,c!==is&&c!==ha)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===is&&(i=ds),i===void 0&&c===ha&&(i=ma),super(null,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xb=new tn,jb=new qb(1,1);jb.compareFunction=Lb;const Kb=new Ob,Yb=new qT,Zb=new Gb,k_=[],z_=[],B_=new Float32Array(16),F_=new Float32Array(9),H_=new Float32Array(4);function vs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=k_[r];if(s===void 0&&(s=new Float32Array(r),k_[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Yo(n,e){let t=z_[e];t===void 0&&(t=new Int32Array(e),z_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function oR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function lR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function uR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function cR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function dR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,i))return;H_.set(i),n.uniformMatrix2fv(this.addr,!1,H_),Zt(t,i)}}function hR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,i))return;F_.set(i),n.uniformMatrix3fv(this.addr,!1,F_),Zt(t,i)}}function fR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,i))return;B_.set(i),n.uniformMatrix4fv(this.addr,!1,B_),Zt(t,i)}}function pR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function mR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function gR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function _R(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function yR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function vR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function xR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function bR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function wR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?jb:Xb;t.setTexture2D(e||s,r)}function SR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Yb,r)}function MR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Zb,r)}function TR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Kb,r)}function ER(n){switch(n){case 5126:return oR;case 35664:return lR;case 35665:return uR;case 35666:return cR;case 35674:return dR;case 35675:return hR;case 35676:return fR;case 5124:case 35670:return pR;case 35667:case 35671:return mR;case 35668:case 35672:return gR;case 35669:case 35673:return _R;case 5125:return yR;case 36294:return vR;case 36295:return xR;case 36296:return bR;case 35678:case 36198:case 36298:case 36306:case 35682:return wR;case 35679:case 36299:case 36307:return SR;case 35680:case 36300:case 36308:case 36293:return MR;case 36289:case 36303:case 36311:case 36292:return TR}}function AR(n,e){n.uniform1fv(this.addr,e)}function RR(n,e){const t=vs(e,this.size,2);n.uniform2fv(this.addr,t)}function CR(n,e){const t=vs(e,this.size,3);n.uniform3fv(this.addr,t)}function IR(n,e){const t=vs(e,this.size,4);n.uniform4fv(this.addr,t)}function $R(n,e){const t=vs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function PR(n,e){const t=vs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function LR(n,e){const t=vs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function DR(n,e){n.uniform1iv(this.addr,e)}function NR(n,e){n.uniform2iv(this.addr,e)}function UR(n,e){n.uniform3iv(this.addr,e)}function OR(n,e){n.uniform4iv(this.addr,e)}function kR(n,e){n.uniform1uiv(this.addr,e)}function zR(n,e){n.uniform2uiv(this.addr,e)}function BR(n,e){n.uniform3uiv(this.addr,e)}function FR(n,e){n.uniform4uiv(this.addr,e)}function HR(n,e,t){const i=this.cache,r=e.length,s=Yo(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),Zt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Xb,s[a])}function VR(n,e,t){const i=this.cache,r=e.length,s=Yo(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),Zt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Yb,s[a])}function GR(n,e,t){const i=this.cache,r=e.length,s=Yo(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),Zt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Zb,s[a])}function WR(n,e,t){const i=this.cache,r=e.length,s=Yo(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),Zt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Kb,s[a])}function qR(n){switch(n){case 5126:return AR;case 35664:return RR;case 35665:return CR;case 35666:return IR;case 35674:return $R;case 35675:return PR;case 35676:return LR;case 5124:case 35670:return DR;case 35667:case 35671:return NR;case 35668:case 35672:return UR;case 35669:case 35673:return OR;case 5125:return kR;case 36294:return zR;case 36295:return BR;case 36296:return FR;case 35678:case 36198:case 36298:case 36306:case 35682:return HR;case 35679:case 36299:case 36307:return VR;case 35680:case 36300:case 36308:case 36293:return GR;case 36289:case 36303:case 36311:case 36292:return WR}}class XR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ER(t.type)}}class jR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qR(t.type)}}class KR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ju=/(\w+)(\])?(\[|\.)?/g;function V_(n,e){n.seq.push(e),n.map[e.id]=e}function YR(n,e,t){const i=n.name,r=i.length;for(ju.lastIndex=0;;){const s=ju.exec(i),a=ju.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){V_(t,u===void 0?new XR(o,n,e):new jR(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new KR(o),V_(t,d)),t=d}}}class To{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);YR(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function G_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ZR=37297;let JR=0;function QR(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function eC(n){const e=Tt.getPrimaries(Tt.workingColorSpace),t=Tt.getPrimaries(n);let i;switch(e===t?i="":e===Bo&&t===zo?i="LinearDisplayP3ToLinearSRGB":e===zo&&t===Bo&&(i="LinearSRGBToLinearDisplayP3"),n){case rn:case jo:return[i,"LinearTransferOETF"];case nn:case hd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function W_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+QR(n.getShaderSource(e),a)}else return r}function tC(n,e){const t=eC(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function nC(n,e){let t;switch(e){case KM:t="Linear";break;case YM:t="Reinhard";break;case ZM:t="OptimizedCineon";break;case JM:t="ACESFilmic";break;case eT:t="AgX";break;case tT:t="Neutral";break;case QM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function iC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function rC(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sC(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ra(n){return n!==""}function q_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function X_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(n){return n.replace(aC,lC)}const oC=new Map;function lC(n,e){let t=at[e];if(t===void 0){const i=oC.get(e);if(i!==void 0)t=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Tc(t)}const uC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function j_(n){return n.replace(uC,cC)}function cC(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function K_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dC(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vb?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===bM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function hC(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ls:case us:e="ENVMAP_TYPE_CUBE";break;case qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fC(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case us:e="ENVMAP_MODE_REFRACTION";break}return e}function pC(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xb:e="ENVMAP_BLENDING_MULTIPLY";break;case XM:e="ENVMAP_BLENDING_MIX";break;case jM:e="ENVMAP_BLENDING_ADD";break}return e}function mC(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function gC(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=dC(t),u=hC(t),c=fC(t),d=pC(t),h=mC(t),f=iC(t),g=rC(s),y=r.createProgram();let _,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ra).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ra).join(`
`),p.length>0&&(p+=`
`)):(_=[K_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),p=[K_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?at.tonemapping_pars_fragment:"",t.toneMapping!==Wi?nC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,tC("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ra).join(`
`)),a=Tc(a),a=q_(a,t),a=X_(a,t),o=Tc(o),o=q_(o,t),o=X_(o,t),a=j_(a),o=j_(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===c_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===c_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=x+_+a,w=x+p+o,R=G_(r,r.VERTEX_SHADER,b),E=G_(r,r.FRAGMENT_SHADER,w);r.attachShader(y,R),r.attachShader(y,E),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function I(k){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(y).trim(),U=r.getShaderInfoLog(R).trim(),D=r.getShaderInfoLog(E).trim();let z=!0,K=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,R,E);else{const q=W_(r,R,"vertex"),G=W_(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+F+`
`+q+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||D==="")&&(K=!1);K&&(k.diagnostics={runnable:z,programLog:F,vertexShader:{log:U,prefix:_},fragmentShader:{log:D,prefix:p}})}r.deleteShader(R),r.deleteShader(E),T=new To(r,y),C=sC(r,y)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(y,ZR)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JR++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=E,this}let _C=0;class yC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new vC(e),t.set(e,i)),i}}class vC{constructor(e){this.id=_C++,this.code=e,this.usedTimes=0}}function xC(n,e,t,i,r,s,a){const o=new kb,l=new yC,u=new Set,c=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(C){return u.add(C),C===0?"uv":`uv${C}`}function _(C,A,k,F,U){const D=F.fog,z=U.geometry,K=C.isMeshStandardMaterial?F.environment:null,q=(C.isMeshStandardMaterial?t:e).get(C.envMap||K),G=q&&q.mapping===qo?q.image.height:null,ie=g[C.type];C.precision!==null&&(f=r.getMaxPrecision(C.precision),f!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",f,"instead."));const te=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Y=te!==void 0?te.length:0;let oe=0;z.morphAttributes.position!==void 0&&(oe=1),z.morphAttributes.normal!==void 0&&(oe=2),z.morphAttributes.color!==void 0&&(oe=3);let de,B,ue,Te;if(ie){const wt=Qn[ie];de=wt.vertexShader,B=wt.fragmentShader}else de=C.vertexShader,B=C.fragmentShader,l.update(C),ue=l.getVertexShaderID(C),Te=l.getFragmentShaderID(C);const me=n.getRenderTarget(),Ne=U.isInstancedMesh===!0,De=U.isBatchedMesh===!0,j=!!C.map,ze=!!C.matcap,be=!!q,Ve=!!C.aoMap,_e=!!C.lightMap,We=!!C.bumpMap,tt=!!C.normalMap,ct=!!C.displacementMap,St=!!C.emissiveMap,O=!!C.metalnessMap,P=!!C.roughnessMap,ne=C.anisotropy>0,le=C.clearcoat>0,fe=C.dispersion>0,pe=C.iridescence>0,Oe=C.sheen>0,ve=C.transmission>0,Ee=ne&&!!C.anisotropyMap,qe=le&&!!C.clearcoatMap,ye=le&&!!C.clearcoatNormalMap,ke=le&&!!C.clearcoatRoughnessMap,st=pe&&!!C.iridescenceMap,Fe=pe&&!!C.iridescenceThicknessMap,Ce=Oe&&!!C.sheenColorMap,Je=Oe&&!!C.sheenRoughnessMap,ut=!!C.specularMap,Ut=!!C.specularColorMap,nt=!!C.specularIntensityMap,W=ve&&!!C.transmissionMap,he=ve&&!!C.thicknessMap,ae=!!C.gradientMap,Se=!!C.alphaMap,Re=C.alphaTest>0,mt=!!C.alphaHash,Ct=!!C.extensions;let kt=Wi;C.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(kt=n.toneMapping);const qt={shaderID:ie,shaderType:C.type,shaderName:C.name,vertexShader:de,fragmentShader:B,defines:C.defines,customVertexShaderID:ue,customFragmentShaderID:Te,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:f,batching:De,instancing:Ne,instancingColor:Ne&&U.instanceColor!==null,instancingMorph:Ne&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:rn,alphaToCoverage:!!C.alphaToCoverage,map:j,matcap:ze,envMap:be,envMapMode:be&&q.mapping,envMapCubeUVHeight:G,aoMap:Ve,lightMap:_e,bumpMap:We,normalMap:tt,displacementMap:h&&ct,emissiveMap:St,normalMapObjectSpace:tt&&C.normalMapType===gT,normalMapTangentSpace:tt&&C.normalMapType===Pb,metalnessMap:O,roughnessMap:P,anisotropy:ne,anisotropyMap:Ee,clearcoat:le,clearcoatMap:qe,clearcoatNormalMap:ye,clearcoatRoughnessMap:ke,dispersion:fe,iridescence:pe,iridescenceMap:st,iridescenceThicknessMap:Fe,sheen:Oe,sheenColorMap:Ce,sheenRoughnessMap:Je,specularMap:ut,specularColorMap:Ut,specularIntensityMap:nt,transmission:ve,transmissionMap:W,thicknessMap:he,gradientMap:ae,opaque:C.transparent===!1&&C.blending===ns&&C.alphaToCoverage===!1,alphaMap:Se,alphaTest:Re,alphaHash:mt,combine:C.combine,mapUv:j&&y(C.map.channel),aoMapUv:Ve&&y(C.aoMap.channel),lightMapUv:_e&&y(C.lightMap.channel),bumpMapUv:We&&y(C.bumpMap.channel),normalMapUv:tt&&y(C.normalMap.channel),displacementMapUv:ct&&y(C.displacementMap.channel),emissiveMapUv:St&&y(C.emissiveMap.channel),metalnessMapUv:O&&y(C.metalnessMap.channel),roughnessMapUv:P&&y(C.roughnessMap.channel),anisotropyMapUv:Ee&&y(C.anisotropyMap.channel),clearcoatMapUv:qe&&y(C.clearcoatMap.channel),clearcoatNormalMapUv:ye&&y(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&y(C.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&y(C.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&y(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&y(C.sheenColorMap.channel),sheenRoughnessMapUv:Je&&y(C.sheenRoughnessMap.channel),specularMapUv:ut&&y(C.specularMap.channel),specularColorMapUv:Ut&&y(C.specularColorMap.channel),specularIntensityMapUv:nt&&y(C.specularIntensityMap.channel),transmissionMapUv:W&&y(C.transmissionMap.channel),thicknessMapUv:he&&y(C.thicknessMap.channel),alphaMapUv:Se&&y(C.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(tt||ne),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(j||Se),fog:!!D,useFog:C.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:oe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:kt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:j&&C.map.isVideoTexture===!0&&Tt.getTransfer(C.map.colorSpace)===Ot,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Vn,flipSided:C.side===_n,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ct&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ct&&C.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return qt.vertexUv1s=u.has(1),qt.vertexUv2s=u.has(2),qt.vertexUv3s=u.has(3),u.clear(),qt}function p(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)A.push(k),A.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(x(A,C),b(A,C),A.push(n.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function x(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function b(C,A){o.disableAll(),A.supportsVertexTextures&&o.enable(0),A.instancing&&o.enable(1),A.instancingColor&&o.enable(2),A.instancingMorph&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),A.dispersion&&o.enable(20),C.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.alphaToCoverage&&o.enable(20),C.push(o.mask)}function w(C){const A=g[C.type];let k;if(A){const F=Qn[A];k=rE.clone(F.uniforms)}else k=C.uniforms;return k}function R(C,A){let k;for(let F=0,U=c.length;F<U;F++){const D=c[F];if(D.cacheKey===A){k=D,++k.usedTimes;break}}return k===void 0&&(k=new gC(n,A,C,s),c.push(k)),k}function E(C){if(--C.usedTimes===0){const A=c.indexOf(C);c[A]=c[c.length-1],c.pop(),C.destroy()}}function I(C){l.remove(C)}function T(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:w,acquireProgram:R,releaseProgram:E,releaseShaderCache:I,programs:c,dispose:T}}function bC(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function wC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Y_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Z_(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,h,f,g,y,_){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:y,group:_},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=_),e++,p}function o(d,h,f,g,y,_){const p=a(d,h,f,g,y,_);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(d,h,f,g,y,_){const p=a(d,h,f,g,y,_);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function u(d,h){t.length>1&&t.sort(d||wC),i.length>1&&i.sort(h||Y_),r.length>1&&r.sort(h||Y_)}function c(){for(let d=e,h=n.length;d<h;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:u}}function SC(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Z_,n.set(i,[a])):r>=s.length?(a=new Z_,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function MC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ye};break;case"SpotLight":t={position:new H,direction:new H,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function TC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let EC=0;function AC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function RC(n){const e=new MC,t=TC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new H);const r=new H,s=new lt,a=new lt;function o(u,c){let d=0,h=0,f=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let g=0,y=0,_=0,p=0,x=0,b=0,w=0,R=0,E=0,I=0,T=0;u.sort(AC);const C=c===!0?Math.PI:1;for(let k=0,F=u.length;k<F;k++){const U=u[k],D=U.color,z=U.intensity,K=U.distance,q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=D.r*z*C,h+=D.g*z*C,f+=D.b*z*C;else if(U.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(U.sh.coefficients[G],z);T++}else if(U.isDirectionalLight){const G=e.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity*C),U.castShadow){const ie=U.shadow,te=t.get(U);te.shadowBias=ie.bias,te.shadowNormalBias=ie.normalBias,te.shadowRadius=ie.radius,te.shadowMapSize=ie.mapSize,i.directionalShadow[g]=te,i.directionalShadowMap[g]=q,i.directionalShadowMatrix[g]=U.shadow.matrix,b++}i.directional[g]=G,g++}else if(U.isSpotLight){const G=e.get(U);G.position.setFromMatrixPosition(U.matrixWorld),G.color.copy(D).multiplyScalar(z*C),G.distance=K,G.coneCos=Math.cos(U.angle),G.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),G.decay=U.decay,i.spot[_]=G;const ie=U.shadow;if(U.map&&(i.spotLightMap[E]=U.map,E++,ie.updateMatrices(U),U.castShadow&&I++),i.spotLightMatrix[_]=ie.matrix,U.castShadow){const te=t.get(U);te.shadowBias=ie.bias,te.shadowNormalBias=ie.normalBias,te.shadowRadius=ie.radius,te.shadowMapSize=ie.mapSize,i.spotShadow[_]=te,i.spotShadowMap[_]=q,R++}_++}else if(U.isRectAreaLight){const G=e.get(U);G.color.copy(D).multiplyScalar(z),G.halfWidth.set(U.width*.5,0,0),G.halfHeight.set(0,U.height*.5,0),i.rectArea[p]=G,p++}else if(U.isPointLight){const G=e.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity*C),G.distance=U.distance,G.decay=U.decay,U.castShadow){const ie=U.shadow,te=t.get(U);te.shadowBias=ie.bias,te.shadowNormalBias=ie.normalBias,te.shadowRadius=ie.radius,te.shadowMapSize=ie.mapSize,te.shadowCameraNear=ie.camera.near,te.shadowCameraFar=ie.camera.far,i.pointShadow[y]=te,i.pointShadowMap[y]=q,i.pointShadowMatrix[y]=U.shadow.matrix,w++}i.point[y]=G,y++}else if(U.isHemisphereLight){const G=e.get(U);G.skyColor.copy(U.color).multiplyScalar(z*C),G.groundColor.copy(U.groundColor).multiplyScalar(z*C),i.hemi[x]=G,x++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const A=i.hash;(A.directionalLength!==g||A.pointLength!==y||A.spotLength!==_||A.rectAreaLength!==p||A.hemiLength!==x||A.numDirectionalShadows!==b||A.numPointShadows!==w||A.numSpotShadows!==R||A.numSpotMaps!==E||A.numLightProbes!==T)&&(i.directional.length=g,i.spot.length=_,i.rectArea.length=p,i.point.length=y,i.hemi.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=R+E-I,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=T,A.directionalLength=g,A.pointLength=y,A.spotLength=_,A.rectAreaLength=p,A.hemiLength=x,A.numDirectionalShadows=b,A.numPointShadows=w,A.numSpotShadows=R,A.numSpotMaps=E,A.numLightProbes=T,i.version=EC++)}function l(u,c){let d=0,h=0,f=0,g=0,y=0;const _=c.matrixWorldInverse;for(let p=0,x=u.length;p<x;p++){const b=u[p];if(b.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),d++}else if(b.isSpotLight){const w=i.spot[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),f++}else if(b.isRectAreaLight){const w=i.rectArea[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(_),a.identity(),s.copy(b.matrixWorld),s.premultiply(_),a.extractRotation(s),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const w=i.point[h];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(_),h++}else if(b.isHemisphereLight){const w=i.hemi[y];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(_),y++}}}return{setup:o,setupView:l,state:i}}function J_(n){const e=new RC(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function a(c){i.push(c)}function o(c){e.setup(t,c)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function CC(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new J_(n),e.set(r,[o])):s>=a.length?(o=new J_(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class IC extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $C extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DC(n,e,t){let i=new pd;const r=new dt,s=new dt,a=new Lt,o=new IC({depthPacking:mT}),l=new $C,u={},c=t.maxTextureSize,d={[ri]:_n,[_n]:ri,[Vn]:Vn},h=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:PC,fragmentShader:LC}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Pn;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new jt(g,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vb;let p=this.type;this.render=function(E,I,T){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||E.length===0)return;const C=n.getRenderTarget(),A=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Gi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=p!==vi&&this.type===vi,D=p===vi&&this.type!==vi;for(let z=0,K=E.length;z<K;z++){const q=E[z],G=q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ie=G.getFrameExtents();if(r.multiply(ie),s.copy(G.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/ie.x),r.x=s.x*ie.x,G.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/ie.y),r.y=s.y*ie.y,G.mapSize.y=s.y)),G.map===null||U===!0||D===!0){const Y=this.type!==vi?{minFilter:hn,magFilter:hn}:{};G.map!==null&&G.map.dispose(),G.map=new Ar(r.x,r.y,Y),G.map.texture.name=q.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const te=G.getViewportCount();for(let Y=0;Y<te;Y++){const oe=G.getViewport(Y);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),F.viewport(a),G.updateMatrices(q,Y),i=G.getFrustum(),w(I,T,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===vi&&x(G,T),G.needsUpdate=!1}p=this.type,_.needsUpdate=!1,n.setRenderTarget(C,A,k)};function x(E,I){const T=e.update(y);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ar(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(I,null,T,h,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(I,null,T,f,y,null)}function b(E,I,T,C){let A=null;const k=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(k!==void 0)A=k;else if(A=T.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const F=A.uuid,U=I.uuid;let D=u[F];D===void 0&&(D={},u[F]=D);let z=D[U];z===void 0&&(z=A.clone(),D[U]=z,I.addEventListener("dispose",R)),A=z}if(A.visible=I.visible,A.wireframe=I.wireframe,C===vi?A.side=I.shadowSide!==null?I.shadowSide:I.side:A.side=I.shadowSide!==null?I.shadowSide:d[I.side],A.alphaMap=I.alphaMap,A.alphaTest=I.alphaTest,A.map=I.map,A.clipShadows=I.clipShadows,A.clippingPlanes=I.clippingPlanes,A.clipIntersection=I.clipIntersection,A.displacementMap=I.displacementMap,A.displacementScale=I.displacementScale,A.displacementBias=I.displacementBias,A.wireframeLinewidth=I.wireframeLinewidth,A.linewidth=I.linewidth,T.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const F=n.properties.get(A);F.light=T}return A}function w(E,I,T,C,A){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&A===vi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const U=e.update(E),D=E.material;if(Array.isArray(D)){const z=U.groups;for(let K=0,q=z.length;K<q;K++){const G=z[K],ie=D[G.materialIndex];if(ie&&ie.visible){const te=b(E,ie,C,A);E.onBeforeShadow(n,E,I,T,U,te,G),n.renderBufferDirect(T,null,U,te,E,G),E.onAfterShadow(n,E,I,T,U,te,G)}}}else if(D.visible){const z=b(E,D,C,A);E.onBeforeShadow(n,E,I,T,U,z,null),n.renderBufferDirect(T,null,U,z,E,null),E.onAfterShadow(n,E,I,T,U,z,null)}}const F=E.children;for(let U=0,D=F.length;U<D;U++)w(F[U],I,T,C,A)}function R(E){E.target.removeEventListener("dispose",R);for(const T in u){const C=u[T],A=E.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}function NC(n){function e(){let W=!1;const he=new Lt;let ae=null;const Se=new Lt(0,0,0,0);return{setMask:function(Re){ae!==Re&&!W&&(n.colorMask(Re,Re,Re,Re),ae=Re)},setLocked:function(Re){W=Re},setClear:function(Re,mt,Ct,kt,qt){qt===!0&&(Re*=kt,mt*=kt,Ct*=kt),he.set(Re,mt,Ct,kt),Se.equals(he)===!1&&(n.clearColor(Re,mt,Ct,kt),Se.copy(he))},reset:function(){W=!1,ae=null,Se.set(-1,0,0,0)}}}function t(){let W=!1,he=null,ae=null,Se=null;return{setTest:function(Re){Re?Te(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(Re){he!==Re&&!W&&(n.depthMask(Re),he=Re)},setFunc:function(Re){if(ae!==Re){switch(Re){case BM:n.depthFunc(n.NEVER);break;case FM:n.depthFunc(n.ALWAYS);break;case HM:n.depthFunc(n.LESS);break;case Uo:n.depthFunc(n.LEQUAL);break;case VM:n.depthFunc(n.EQUAL);break;case GM:n.depthFunc(n.GEQUAL);break;case WM:n.depthFunc(n.GREATER);break;case qM:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=Re}},setLocked:function(Re){W=Re},setClear:function(Re){Se!==Re&&(n.clearDepth(Re),Se=Re)},reset:function(){W=!1,he=null,ae=null,Se=null}}}function i(){let W=!1,he=null,ae=null,Se=null,Re=null,mt=null,Ct=null,kt=null,qt=null;return{setTest:function(wt){W||(wt?Te(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(wt){he!==wt&&!W&&(n.stencilMask(wt),he=wt)},setFunc:function(wt,yn,ht){(ae!==wt||Se!==yn||Re!==ht)&&(n.stencilFunc(wt,yn,ht),ae=wt,Se=yn,Re=ht)},setOp:function(wt,yn,ht){(mt!==wt||Ct!==yn||kt!==ht)&&(n.stencilOp(wt,yn,ht),mt=wt,Ct=yn,kt=ht)},setLocked:function(wt){W=wt},setClear:function(wt){qt!==wt&&(n.clearStencil(wt),qt=wt)},reset:function(){W=!1,he=null,ae=null,Se=null,Re=null,mt=null,Ct=null,kt=null,qt=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,l=new WeakMap;let u={},c={},d=new WeakMap,h=[],f=null,g=!1,y=null,_=null,p=null,x=null,b=null,w=null,R=null,E=new Ye(0,0,0),I=0,T=!1,C=null,A=null,k=null,F=null,U=null;const D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=K>=2);let G=null,ie={};const te=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),oe=new Lt().fromArray(te),de=new Lt().fromArray(Y);function B(W,he,ae,Se){const Re=new Uint8Array(4),mt=n.createTexture();n.bindTexture(W,mt),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ct=0;Ct<ae;Ct++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(he+Ct,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return mt}const ue={};ue[n.TEXTURE_2D]=B(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=B(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=B(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=B(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Te(n.DEPTH_TEST),s.setFunc(Uo),We(!1),tt(Cg),Te(n.CULL_FACE),Ve(Gi);function Te(W){u[W]!==!0&&(n.enable(W),u[W]=!0)}function me(W){u[W]!==!1&&(n.disable(W),u[W]=!1)}function Ne(W,he){return c[W]!==he?(n.bindFramebuffer(W,he),c[W]=he,W===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=he),W===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=he),!0):!1}function De(W,he){let ae=h,Se=!1;if(W){ae=d.get(he),ae===void 0&&(ae=[],d.set(he,ae));const Re=W.textures;if(ae.length!==Re.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let mt=0,Ct=Re.length;mt<Ct;mt++)ae[mt]=n.COLOR_ATTACHMENT0+mt;ae.length=Re.length,Se=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,Se=!0);Se&&n.drawBuffers(ae)}function j(W){return f!==W?(n.useProgram(W),f=W,!0):!1}const ze={[xr]:n.FUNC_ADD,[SM]:n.FUNC_SUBTRACT,[MM]:n.FUNC_REVERSE_SUBTRACT};ze[TM]=n.MIN,ze[EM]=n.MAX;const be={[AM]:n.ZERO,[RM]:n.ONE,[CM]:n.SRC_COLOR,[vc]:n.SRC_ALPHA,[NM]:n.SRC_ALPHA_SATURATE,[LM]:n.DST_COLOR,[$M]:n.DST_ALPHA,[IM]:n.ONE_MINUS_SRC_COLOR,[xc]:n.ONE_MINUS_SRC_ALPHA,[DM]:n.ONE_MINUS_DST_COLOR,[PM]:n.ONE_MINUS_DST_ALPHA,[UM]:n.CONSTANT_COLOR,[OM]:n.ONE_MINUS_CONSTANT_COLOR,[kM]:n.CONSTANT_ALPHA,[zM]:n.ONE_MINUS_CONSTANT_ALPHA};function Ve(W,he,ae,Se,Re,mt,Ct,kt,qt,wt){if(W===Gi){g===!0&&(me(n.BLEND),g=!1);return}if(g===!1&&(Te(n.BLEND),g=!0),W!==wM){if(W!==y||wt!==T){if((_!==xr||b!==xr)&&(n.blendEquation(n.FUNC_ADD),_=xr,b=xr),wt)switch(W){case ns:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ig:n.blendFunc(n.ONE,n.ONE);break;case $g:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pg:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ns:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ig:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case $g:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pg:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}p=null,x=null,w=null,R=null,E.set(0,0,0),I=0,y=W,T=wt}return}Re=Re||he,mt=mt||ae,Ct=Ct||Se,(he!==_||Re!==b)&&(n.blendEquationSeparate(ze[he],ze[Re]),_=he,b=Re),(ae!==p||Se!==x||mt!==w||Ct!==R)&&(n.blendFuncSeparate(be[ae],be[Se],be[mt],be[Ct]),p=ae,x=Se,w=mt,R=Ct),(kt.equals(E)===!1||qt!==I)&&(n.blendColor(kt.r,kt.g,kt.b,qt),E.copy(kt),I=qt),y=W,T=!1}function _e(W,he){W.side===Vn?me(n.CULL_FACE):Te(n.CULL_FACE);let ae=W.side===_n;he&&(ae=!ae),We(ae),W.blending===ns&&W.transparent===!1?Ve(Gi):Ve(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),s.setFunc(W.depthFunc),s.setTest(W.depthTest),s.setMask(W.depthWrite),r.setMask(W.colorWrite);const Se=W.stencilWrite;a.setTest(Se),Se&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),St(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Te(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(W){C!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),C=W)}function tt(W){W!==vM?(Te(n.CULL_FACE),W!==A&&(W===Cg?n.cullFace(n.BACK):W===xM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),A=W}function ct(W){W!==k&&(z&&n.lineWidth(W),k=W)}function St(W,he,ae){W?(Te(n.POLYGON_OFFSET_FILL),(F!==he||U!==ae)&&(n.polygonOffset(he,ae),F=he,U=ae)):me(n.POLYGON_OFFSET_FILL)}function O(W){W?Te(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function P(W){W===void 0&&(W=n.TEXTURE0+D-1),G!==W&&(n.activeTexture(W),G=W)}function ne(W,he,ae){ae===void 0&&(G===null?ae=n.TEXTURE0+D-1:ae=G);let Se=ie[ae];Se===void 0&&(Se={type:void 0,texture:void 0},ie[ae]=Se),(Se.type!==W||Se.texture!==he)&&(G!==ae&&(n.activeTexture(ae),G=ae),n.bindTexture(W,he||ue[W]),Se.type=W,Se.texture=he)}function le(){const W=ie[G];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function fe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Oe(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function st(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(W){oe.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),oe.copy(W))}function Je(W){de.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),de.copy(W))}function ut(W,he){let ae=l.get(he);ae===void 0&&(ae=new WeakMap,l.set(he,ae));let Se=ae.get(W);Se===void 0&&(Se=n.getUniformBlockIndex(he,W.name),ae.set(W,Se))}function Ut(W,he){const Se=l.get(he).get(W);o.get(he)!==Se&&(n.uniformBlockBinding(he,Se,W.__bindingPointIndex),o.set(he,Se))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},G=null,ie={},c={},d=new WeakMap,h=[],f=null,g=!1,y=null,_=null,p=null,x=null,b=null,w=null,R=null,E=new Ye(0,0,0),I=0,T=!1,C=null,A=null,k=null,F=null,U=null,oe.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:Te,disable:me,bindFramebuffer:Ne,drawBuffers:De,useProgram:j,setBlending:Ve,setMaterial:_e,setFlipSided:We,setCullFace:tt,setLineWidth:ct,setPolygonOffset:St,setScissorTest:O,activeTexture:P,bindTexture:ne,unbindTexture:le,compressedTexImage2D:fe,compressedTexImage3D:pe,texImage2D:st,texImage3D:Fe,updateUBOMapping:ut,uniformBlockBinding:Ut,texStorage2D:ye,texStorage3D:ke,texSubImage2D:Oe,texSubImage3D:ve,compressedTexSubImage2D:Ee,compressedTexSubImage3D:qe,scissor:Ce,viewport:Je,reset:nt}}function UC(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new dt,c=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(O,P){return f?new OffscreenCanvas(O,P):pa("canvas")}function y(O,P,ne){let le=1;const fe=St(O);if((fe.width>ne||fe.height>ne)&&(le=ne/Math.max(fe.width,fe.height)),le<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const pe=Math.floor(le*fe.width),Oe=Math.floor(le*fe.height);d===void 0&&(d=g(pe,Oe));const ve=P?g(pe,Oe):d;return ve.width=pe,ve.height=Oe,ve.getContext("2d").drawImage(O,0,0,pe,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+pe+"x"+Oe+")."),ve}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),O;return O}function _(O){return O.generateMipmaps&&O.minFilter!==hn&&O.minFilter!==Sn}function p(O){n.generateMipmap(O)}function x(O,P,ne,le,fe=!1){if(O!==null){if(n[O]!==void 0)return n[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let pe=P;if(P===n.RED&&(ne===n.FLOAT&&(pe=n.R32F),ne===n.HALF_FLOAT&&(pe=n.R16F),ne===n.UNSIGNED_BYTE&&(pe=n.R8)),P===n.RED_INTEGER&&(ne===n.UNSIGNED_BYTE&&(pe=n.R8UI),ne===n.UNSIGNED_SHORT&&(pe=n.R16UI),ne===n.UNSIGNED_INT&&(pe=n.R32UI),ne===n.BYTE&&(pe=n.R8I),ne===n.SHORT&&(pe=n.R16I),ne===n.INT&&(pe=n.R32I)),P===n.RG&&(ne===n.FLOAT&&(pe=n.RG32F),ne===n.HALF_FLOAT&&(pe=n.RG16F),ne===n.UNSIGNED_BYTE&&(pe=n.RG8)),P===n.RG_INTEGER&&(ne===n.UNSIGNED_BYTE&&(pe=n.RG8UI),ne===n.UNSIGNED_SHORT&&(pe=n.RG16UI),ne===n.UNSIGNED_INT&&(pe=n.RG32UI),ne===n.BYTE&&(pe=n.RG8I),ne===n.SHORT&&(pe=n.RG16I),ne===n.INT&&(pe=n.RG32I)),P===n.RGB&&ne===n.UNSIGNED_INT_5_9_9_9_REV&&(pe=n.RGB9_E5),P===n.RGBA){const Oe=fe?ko:Tt.getTransfer(le);ne===n.FLOAT&&(pe=n.RGBA32F),ne===n.HALF_FLOAT&&(pe=n.RGBA16F),ne===n.UNSIGNED_BYTE&&(pe=Oe===Ot?n.SRGB8_ALPHA8:n.RGBA8),ne===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),ne===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function b(O,P){return _(O)===!0||O.isFramebufferTexture&&O.minFilter!==hn&&O.minFilter!==Sn?Math.log2(Math.max(P.width,P.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?P.mipmaps.length:1}function w(O){const P=O.target;P.removeEventListener("dispose",w),E(P),P.isVideoTexture&&c.delete(P)}function R(O){const P=O.target;P.removeEventListener("dispose",R),T(P)}function E(O){const P=i.get(O);if(P.__webglInit===void 0)return;const ne=O.source,le=h.get(ne);if(le){const fe=le[P.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&I(O),Object.keys(le).length===0&&h.delete(ne)}i.remove(O)}function I(O){const P=i.get(O);n.deleteTexture(P.__webglTexture);const ne=O.source,le=h.get(ne);delete le[P.__cacheKey],a.memory.textures--}function T(O){const P=i.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(P.__webglFramebuffer[le]))for(let fe=0;fe<P.__webglFramebuffer[le].length;fe++)n.deleteFramebuffer(P.__webglFramebuffer[le][fe]);else n.deleteFramebuffer(P.__webglFramebuffer[le]);P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[le])}else{if(Array.isArray(P.__webglFramebuffer))for(let le=0;le<P.__webglFramebuffer.length;le++)n.deleteFramebuffer(P.__webglFramebuffer[le]);else n.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let le=0;le<P.__webglColorRenderbuffer.length;le++)P.__webglColorRenderbuffer[le]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[le]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const ne=O.textures;for(let le=0,fe=ne.length;le<fe;le++){const pe=i.get(ne[le]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),a.memory.textures--),i.remove(ne[le])}i.remove(O)}let C=0;function A(){C=0}function k(){const O=C;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),C+=1,O}function F(O){const P=[];return P.push(O.wrapS),P.push(O.wrapT),P.push(O.wrapR||0),P.push(O.magFilter),P.push(O.minFilter),P.push(O.anisotropy),P.push(O.internalFormat),P.push(O.format),P.push(O.type),P.push(O.generateMipmaps),P.push(O.premultiplyAlpha),P.push(O.flipY),P.push(O.unpackAlignment),P.push(O.colorSpace),P.join()}function U(O,P){const ne=i.get(O);if(O.isVideoTexture&&tt(O),O.isRenderTargetTexture===!1&&O.version>0&&ne.__version!==O.version){const le=O.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(ne,O,P);return}}t.bindTexture(n.TEXTURE_2D,ne.__webglTexture,n.TEXTURE0+P)}function D(O,P){const ne=i.get(O);if(O.version>0&&ne.__version!==O.version){oe(ne,O,P);return}t.bindTexture(n.TEXTURE_2D_ARRAY,ne.__webglTexture,n.TEXTURE0+P)}function z(O,P){const ne=i.get(O);if(O.version>0&&ne.__version!==O.version){oe(ne,O,P);return}t.bindTexture(n.TEXTURE_3D,ne.__webglTexture,n.TEXTURE0+P)}function K(O,P){const ne=i.get(O);if(O.version>0&&ne.__version!==O.version){de(ne,O,P);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture,n.TEXTURE0+P)}const q={[cs]:n.REPEAT,[Fi]:n.CLAMP_TO_EDGE,[Oo]:n.MIRRORED_REPEAT},G={[hn]:n.NEAREST,[wb]:n.NEAREST_MIPMAP_NEAREST,[na]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Mo]:n.LINEAR_MIPMAP_NEAREST,[bi]:n.LINEAR_MIPMAP_LINEAR},ie={[_T]:n.NEVER,[ST]:n.ALWAYS,[yT]:n.LESS,[Lb]:n.LEQUAL,[vT]:n.EQUAL,[wT]:n.GEQUAL,[xT]:n.GREATER,[bT]:n.NOTEQUAL};function te(O,P){if(P.type===ti&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===Sn||P.magFilter===Mo||P.magFilter===na||P.magFilter===bi||P.minFilter===Sn||P.minFilter===Mo||P.minFilter===na||P.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(O,n.TEXTURE_WRAP_S,q[P.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,q[P.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,q[P.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,G[P.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,G[P.minFilter]),P.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,ie[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===hn||P.minFilter!==na&&P.minFilter!==bi||P.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||i.get(P).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");n.texParameterf(O,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy}}}function Y(O,P){let ne=!1;O.__webglInit===void 0&&(O.__webglInit=!0,P.addEventListener("dispose",w));const le=P.source;let fe=h.get(le);fe===void 0&&(fe={},h.set(le,fe));const pe=F(P);if(pe!==O.__cacheKey){fe[pe]===void 0&&(fe[pe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,ne=!0),fe[pe].usedTimes++;const Oe=fe[O.__cacheKey];Oe!==void 0&&(fe[O.__cacheKey].usedTimes--,Oe.usedTimes===0&&I(P)),O.__cacheKey=pe,O.__webglTexture=fe[pe].texture}return ne}function oe(O,P,ne){let le=n.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),P.isData3DTexture&&(le=n.TEXTURE_3D);const fe=Y(O,P),pe=P.source;t.bindTexture(le,O.__webglTexture,n.TEXTURE0+ne);const Oe=i.get(pe);if(pe.version!==Oe.__version||fe===!0){t.activeTexture(n.TEXTURE0+ne);const ve=Tt.getPrimaries(Tt.workingColorSpace),Ee=P.colorSpace===zi?null:Tt.getPrimaries(P.colorSpace),qe=P.colorSpace===zi||ve===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ye=y(P.image,!1,r.maxTextureSize);ye=ct(P,ye);const ke=s.convert(P.format,P.colorSpace),st=s.convert(P.type);let Fe=x(P.internalFormat,ke,st,P.colorSpace,P.isVideoTexture);te(le,P);let Ce;const Je=P.mipmaps,ut=P.isVideoTexture!==!0,Ut=Oe.__version===void 0||fe===!0,nt=pe.dataReady,W=b(P,ye);if(P.isDepthTexture)Fe=n.DEPTH_COMPONENT16,P.type===ti?Fe=n.DEPTH_COMPONENT32F:P.type===ds?Fe=n.DEPTH_COMPONENT24:P.type===ma&&(Fe=n.DEPTH24_STENCIL8),Ut&&(ut?t.texStorage2D(n.TEXTURE_2D,1,Fe,ye.width,ye.height):t.texImage2D(n.TEXTURE_2D,0,Fe,ye.width,ye.height,0,ke,st,null));else if(P.isDataTexture)if(Je.length>0){ut&&Ut&&t.texStorage2D(n.TEXTURE_2D,W,Fe,Je[0].width,Je[0].height);for(let he=0,ae=Je.length;he<ae;he++)Ce=Je[he],ut?nt&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ce.width,Ce.height,ke,st,Ce.data):t.texImage2D(n.TEXTURE_2D,he,Fe,Ce.width,Ce.height,0,ke,st,Ce.data);P.generateMipmaps=!1}else ut?(Ut&&t.texStorage2D(n.TEXTURE_2D,W,Fe,ye.width,ye.height),nt&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye.width,ye.height,ke,st,ye.data)):t.texImage2D(n.TEXTURE_2D,0,Fe,ye.width,ye.height,0,ke,st,ye.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){ut&&Ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,W,Fe,Je[0].width,Je[0].height,ye.depth);for(let he=0,ae=Je.length;he<ae;he++)Ce=Je[he],P.format!==Wn?ke!==null?ut?nt&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Ce.width,Ce.height,ye.depth,ke,Ce.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Fe,Ce.width,Ce.height,ye.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?nt&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Ce.width,Ce.height,ye.depth,ke,st,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Fe,Ce.width,Ce.height,ye.depth,0,ke,st,Ce.data)}else{ut&&Ut&&t.texStorage2D(n.TEXTURE_2D,W,Fe,Je[0].width,Je[0].height);for(let he=0,ae=Je.length;he<ae;he++)Ce=Je[he],P.format!==Wn?ke!==null?ut?nt&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Ce.width,Ce.height,ke,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Fe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?nt&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ce.width,Ce.height,ke,st,Ce.data):t.texImage2D(n.TEXTURE_2D,he,Fe,Ce.width,Ce.height,0,ke,st,Ce.data)}else if(P.isDataArrayTexture)ut?(Ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,W,Fe,ye.width,ye.height,ye.depth),nt&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,ke,st,ye.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,ye.width,ye.height,ye.depth,0,ke,st,ye.data);else if(P.isData3DTexture)ut?(Ut&&t.texStorage3D(n.TEXTURE_3D,W,Fe,ye.width,ye.height,ye.depth),nt&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,ke,st,ye.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,ye.width,ye.height,ye.depth,0,ke,st,ye.data);else if(P.isFramebufferTexture){if(Ut)if(ut)t.texStorage2D(n.TEXTURE_2D,W,Fe,ye.width,ye.height);else{let he=ye.width,ae=ye.height;for(let Se=0;Se<W;Se++)t.texImage2D(n.TEXTURE_2D,Se,Fe,he,ae,0,ke,st,null),he>>=1,ae>>=1}}else if(Je.length>0){if(ut&&Ut){const he=St(Je[0]);t.texStorage2D(n.TEXTURE_2D,W,Fe,he.width,he.height)}for(let he=0,ae=Je.length;he<ae;he++)Ce=Je[he],ut?nt&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,ke,st,Ce):t.texImage2D(n.TEXTURE_2D,he,Fe,ke,st,Ce);P.generateMipmaps=!1}else if(ut){if(Ut){const he=St(ye);t.texStorage2D(n.TEXTURE_2D,W,Fe,he.width,he.height)}nt&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ke,st,ye)}else t.texImage2D(n.TEXTURE_2D,0,Fe,ke,st,ye);_(P)&&p(le),Oe.__version=pe.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function de(O,P,ne){if(P.image.length!==6)return;const le=Y(O,P),fe=P.source;t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+ne);const pe=i.get(fe);if(fe.version!==pe.__version||le===!0){t.activeTexture(n.TEXTURE0+ne);const Oe=Tt.getPrimaries(Tt.workingColorSpace),ve=P.colorSpace===zi?null:Tt.getPrimaries(P.colorSpace),Ee=P.colorSpace===zi||Oe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const qe=P.isCompressedTexture||P.image[0].isCompressedTexture,ye=P.image[0]&&P.image[0].isDataTexture,ke=[];for(let ae=0;ae<6;ae++)!qe&&!ye?ke[ae]=y(P.image[ae],!0,r.maxCubemapSize):ke[ae]=ye?P.image[ae].image:P.image[ae],ke[ae]=ct(P,ke[ae]);const st=ke[0],Fe=s.convert(P.format,P.colorSpace),Ce=s.convert(P.type),Je=x(P.internalFormat,Fe,Ce,P.colorSpace),ut=P.isVideoTexture!==!0,Ut=pe.__version===void 0||le===!0,nt=fe.dataReady;let W=b(P,st);te(n.TEXTURE_CUBE_MAP,P);let he;if(qe){ut&&Ut&&t.texStorage2D(n.TEXTURE_CUBE_MAP,W,Je,st.width,st.height);for(let ae=0;ae<6;ae++){he=ke[ae].mipmaps;for(let Se=0;Se<he.length;Se++){const Re=he[Se];P.format!==Wn?Fe!==null?ut?nt&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,0,0,Re.width,Re.height,Fe,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,Je,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,0,0,Re.width,Re.height,Fe,Ce,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,Je,Re.width,Re.height,0,Fe,Ce,Re.data)}}}else{if(he=P.mipmaps,ut&&Ut){he.length>0&&W++;const ae=St(ke[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,W,Je,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ye){ut?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ke[ae].width,ke[ae].height,Fe,Ce,ke[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Je,ke[ae].width,ke[ae].height,0,Fe,Ce,ke[ae].data);for(let Se=0;Se<he.length;Se++){const mt=he[Se].image[ae].image;ut?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,0,0,mt.width,mt.height,Fe,Ce,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,Je,mt.width,mt.height,0,Fe,Ce,mt.data)}}else{ut?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Fe,Ce,ke[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Je,Fe,Ce,ke[ae]);for(let Se=0;Se<he.length;Se++){const Re=he[Se];ut?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,0,0,Fe,Ce,Re.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,Je,Fe,Ce,Re.image[ae])}}}_(P)&&p(n.TEXTURE_CUBE_MAP),pe.__version=fe.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function B(O,P,ne,le,fe,pe){const Oe=s.convert(ne.format,ne.colorSpace),ve=s.convert(ne.type),Ee=x(ne.internalFormat,Oe,ve,ne.colorSpace);if(!i.get(P).__hasExternalTextures){const ye=Math.max(1,P.width>>pe),ke=Math.max(1,P.height>>pe);fe===n.TEXTURE_3D||fe===n.TEXTURE_2D_ARRAY?t.texImage3D(fe,pe,Ee,ye,ke,P.depth,0,Oe,ve,null):t.texImage2D(fe,pe,Ee,ye,ke,0,Oe,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,O),We(P)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,fe,i.get(ne).__webglTexture,0,_e(P)):(fe===n.TEXTURE_2D||fe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,fe,i.get(ne).__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(O,P,ne){if(n.bindRenderbuffer(n.RENDERBUFFER,O),P.depthBuffer&&!P.stencilBuffer){let le=n.DEPTH_COMPONENT24;if(ne||We(P)){const fe=P.depthTexture;fe&&fe.isDepthTexture&&(fe.type===ti?le=n.DEPTH_COMPONENT32F:fe.type===ds&&(le=n.DEPTH_COMPONENT24));const pe=_e(P);We(P)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,le,P.width,P.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,le,P.width,P.height)}else n.renderbufferStorage(n.RENDERBUFFER,le,P.width,P.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,O)}else if(P.depthBuffer&&P.stencilBuffer){const le=_e(P);ne&&We(P)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,P.width,P.height):We(P)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,O)}else{const le=P.textures;for(let fe=0;fe<le.length;fe++){const pe=le[fe],Oe=s.convert(pe.format,pe.colorSpace),ve=s.convert(pe.type),Ee=x(pe.internalFormat,Oe,ve,pe.colorSpace),qe=_e(P);ne&&We(P)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,Ee,P.width,P.height):We(P)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe,Ee,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,P.width,P.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(O,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,O),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),U(P.depthTexture,0);const le=i.get(P.depthTexture).__webglTexture,fe=_e(P);if(P.depthTexture.format===is)We(P)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(P.depthTexture.format===ha)We(P)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function me(O){const P=i.get(O),ne=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!P.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Te(P.__webglFramebuffer,O)}else if(ne){P.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[le]),P.__webglDepthbuffer[le]=n.createRenderbuffer(),ue(P.__webglDepthbuffer[le],O,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=n.createRenderbuffer(),ue(P.__webglDepthbuffer,O,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(O,P,ne){const le=i.get(O);P!==void 0&&B(le.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ne!==void 0&&me(O)}function De(O){const P=O.texture,ne=i.get(O),le=i.get(P);O.addEventListener("dispose",R);const fe=O.textures,pe=O.isWebGLCubeRenderTarget===!0,Oe=fe.length>1;if(Oe||(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=P.version,a.memory.textures++),pe){ne.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(P.mipmaps&&P.mipmaps.length>0){ne.__webglFramebuffer[ve]=[];for(let Ee=0;Ee<P.mipmaps.length;Ee++)ne.__webglFramebuffer[ve][Ee]=n.createFramebuffer()}else ne.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){ne.__webglFramebuffer=[];for(let ve=0;ve<P.mipmaps.length;ve++)ne.__webglFramebuffer[ve]=n.createFramebuffer()}else ne.__webglFramebuffer=n.createFramebuffer();if(Oe)for(let ve=0,Ee=fe.length;ve<Ee;ve++){const qe=i.get(fe[ve]);qe.__webglTexture===void 0&&(qe.__webglTexture=n.createTexture(),a.memory.textures++)}if(O.samples>0&&We(O)===!1){ne.__webglMultisampledFramebuffer=n.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let ve=0;ve<fe.length;ve++){const Ee=fe[ve];ne.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ne.__webglColorRenderbuffer[ve]);const qe=s.convert(Ee.format,Ee.colorSpace),ye=s.convert(Ee.type),ke=x(Ee.internalFormat,qe,ye,Ee.colorSpace,O.isXRRenderTarget===!0),st=_e(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,st,ke,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,ne.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(ne.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(ne.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),te(n.TEXTURE_CUBE_MAP,P);for(let ve=0;ve<6;ve++)if(P.mipmaps&&P.mipmaps.length>0)for(let Ee=0;Ee<P.mipmaps.length;Ee++)B(ne.__webglFramebuffer[ve][Ee],O,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ee);else B(ne.__webglFramebuffer[ve],O,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);_(P)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let ve=0,Ee=fe.length;ve<Ee;ve++){const qe=fe[ve],ye=i.get(qe);t.bindTexture(n.TEXTURE_2D,ye.__webglTexture),te(n.TEXTURE_2D,qe),B(ne.__webglFramebuffer,O,qe,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,0),_(qe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ve=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,le.__webglTexture),te(ve,P),P.mipmaps&&P.mipmaps.length>0)for(let Ee=0;Ee<P.mipmaps.length;Ee++)B(ne.__webglFramebuffer[Ee],O,P,n.COLOR_ATTACHMENT0,ve,Ee);else B(ne.__webglFramebuffer,O,P,n.COLOR_ATTACHMENT0,ve,0);_(P)&&p(ve),t.unbindTexture()}O.depthBuffer&&me(O)}function j(O){const P=O.textures;for(let ne=0,le=P.length;ne<le;ne++){const fe=P[ne];if(_(fe)){const pe=O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Oe=i.get(fe).__webglTexture;t.bindTexture(pe,Oe),p(pe),t.unbindTexture()}}}const ze=[],be=[];function Ve(O){if(O.samples>0){if(We(O)===!1){const P=O.textures,ne=O.width,le=O.height;let fe=n.COLOR_BUFFER_BIT;const pe=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Oe=i.get(O),ve=P.length>1;if(ve)for(let Ee=0;Ee<P.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ee=0;Ee<P.length;Ee++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(fe|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(fe|=n.STENCIL_BUFFER_BIT)),ve){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ee]);const qe=i.get(P[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qe,0)}n.blitFramebuffer(0,0,ne,le,0,0,ne,le,fe,n.NEAREST),l===!0&&(ze.length=0,be.length=0,ze.push(n.COLOR_ATTACHMENT0+Ee),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ze.push(pe),be.push(pe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,be)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Ee=0;Ee<P.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ee]);const qe=i.get(P[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&l){const P=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[P])}}}function _e(O){return Math.min(r.maxSamples,O.samples)}function We(O){const P=i.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function tt(O){const P=a.render.frame;c.get(O)!==P&&(c.set(O,P),O.update())}function ct(O,P){const ne=O.colorSpace,le=O.format,fe=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ne!==rn&&ne!==zi&&(Tt.getTransfer(ne)===Ot?(le!==Wn||fe!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),P}function St(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(u.width=O.naturalWidth||O.width,u.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(u.width=O.displayWidth,u.height=O.displayHeight):(u.width=O.width,u.height=O.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=A,this.setTexture2D=U,this.setTexture2DArray=D,this.setTexture3D=z,this.setTextureCube=K,this.rebindTextures=Ne,this.setupRenderTarget=De,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=B,this.useMultisampledRTT=We}function OC(n,e){function t(i,r=zi){let s;const a=Tt.getTransfer(r);if(i===ji)return n.UNSIGNED_BYTE;if(i===Tb)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Eb)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sT)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===iT)return n.BYTE;if(i===rT)return n.SHORT;if(i===Sb)return n.UNSIGNED_SHORT;if(i===Mb)return n.INT;if(i===ds)return n.UNSIGNED_INT;if(i===ti)return n.FLOAT;if(i===Xo)return n.HALF_FLOAT;if(i===aT)return n.ALPHA;if(i===oT)return n.RGB;if(i===Wn)return n.RGBA;if(i===lT)return n.LUMINANCE;if(i===uT)return n.LUMINANCE_ALPHA;if(i===is)return n.DEPTH_COMPONENT;if(i===ha)return n.DEPTH_STENCIL;if(i===Ab)return n.RED;if(i===Rb)return n.RED_INTEGER;if(i===cT)return n.RG;if(i===Cb)return n.RG_INTEGER;if(i===Ib)return n.RGBA_INTEGER;if(i===vu||i===xu||i===bu||i===wu)if(a===Ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dg||i===Ng||i===Ug||i===Og)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Dg)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ng)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ug)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Og)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kg||i===zg||i===Bg)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===kg||i===zg)return a===Ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Bg)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Fg||i===Hg||i===Vg||i===Gg||i===Wg||i===qg||i===Xg||i===jg||i===Kg||i===Yg||i===Zg||i===Jg||i===Qg||i===e_)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Fg)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hg)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vg)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gg)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wg)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qg)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xg)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jg)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kg)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yg)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zg)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jg)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qg)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===e_)return a===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Su||i===t_||i===n_)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Su)return a===Ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===t_)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===n_)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dT||i===i_||i===r_||i===s_)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Su)return s.COMPRESSED_RED_RGTC1_EXT;if(i===i_)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===r_)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===s_)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ma?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class kC extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ni extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zC={type:"move"};class Ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const _=t.getJointPose(y,i),p=this._getHandJoint(u,y);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),f=.02,g=.005;u.inputState.pinching&&h>f+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=f-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zC)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ni;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const BC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new tn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Ki({vertexShader:BC,fragmentShader:FC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new jt(new Ko(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class VC extends ys{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,d=null,h=null,f=null,g=null;const y=new HC,_=t.getContextAttributes();let p=null,x=null;const b=[],w=[],R=new dt;let E=null;const I=new dn;I.layers.enable(1),I.viewport=new Lt;const T=new dn;T.layers.enable(2),T.viewport=new Lt;const C=[I,T],A=new kC;A.layers.enable(1),A.layers.enable(2);let k=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let ue=b[B];return ue===void 0&&(ue=new Ku,b[B]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(B){let ue=b[B];return ue===void 0&&(ue=new Ku,b[B]=ue),ue.getGripSpace()},this.getHand=function(B){let ue=b[B];return ue===void 0&&(ue=new Ku,b[B]=ue),ue.getHandSpace()};function U(B){const ue=w.indexOf(B.inputSource);if(ue===-1)return;const Te=b[ue];Te!==void 0&&(Te.update(B.inputSource,B.frame,u||a),Te.dispatchEvent({type:B.type,data:B.inputSource}))}function D(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",z);for(let B=0;B<b.length;B++){const ue=w[B];ue!==null&&(w[B]=null,b[B].disconnect(ue))}k=null,F=null,y.reset(),e.setRenderTarget(p),f=null,h=null,d=null,r=null,x=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(B){u=B},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",D),r.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ue={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ar(f.framebufferWidth,f.framebufferHeight,{format:Wn,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ue=null,Te=null,me=null;_.depth&&(me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=_.stencil?ha:is,Te=_.stencil?ma:ds);const Ne={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Ne),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Ar(h.textureWidth,h.textureHeight,{format:Wn,type:ji,depthTexture:new qb(h.textureWidth,h.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z(B){for(let ue=0;ue<B.removed.length;ue++){const Te=B.removed[ue],me=w.indexOf(Te);me>=0&&(w[me]=null,b[me].disconnect(Te))}for(let ue=0;ue<B.added.length;ue++){const Te=B.added[ue];let me=w.indexOf(Te);if(me===-1){for(let De=0;De<b.length;De++)if(De>=w.length){w.push(Te),me=De;break}else if(w[De]===null){w[De]=Te,me=De;break}if(me===-1)break}const Ne=b[me];Ne&&Ne.connect(Te)}}const K=new H,q=new H;function G(B,ue,Te){K.setFromMatrixPosition(ue.matrixWorld),q.setFromMatrixPosition(Te.matrixWorld);const me=K.distanceTo(q),Ne=ue.projectionMatrix.elements,De=Te.projectionMatrix.elements,j=Ne[14]/(Ne[10]-1),ze=Ne[14]/(Ne[10]+1),be=(Ne[9]+1)/Ne[5],Ve=(Ne[9]-1)/Ne[5],_e=(Ne[8]-1)/Ne[0],We=(De[8]+1)/De[0],tt=j*_e,ct=j*We,St=me/(-_e+We),O=St*-_e;ue.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(O),B.translateZ(St),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const P=j+St,ne=ze+St,le=tt-O,fe=ct+(me-O),pe=be*ze/ne*P,Oe=Ve*ze/ne*P;B.projectionMatrix.makePerspective(le,fe,pe,Oe,P,ne),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function ie(B,ue){ue===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(ue.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;y.texture!==null&&(B.near=y.depthNear,B.far=y.depthFar),A.near=T.near=I.near=B.near,A.far=T.far=I.far=B.far,(k!==A.near||F!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,F=A.far,I.near=k,I.far=F,T.near=k,T.far=F,I.updateProjectionMatrix(),T.updateProjectionMatrix(),B.updateProjectionMatrix());const ue=B.parent,Te=A.cameras;ie(A,ue);for(let me=0;me<Te.length;me++)ie(Te[me],ue);Te.length===2?G(A,I,T):A.projectionMatrix.copy(I.projectionMatrix),te(B,A,ue)};function te(B,ue,Te){Te===null?B.matrix.copy(ue.matrixWorld):(B.matrix.copy(Te.matrixWorld),B.matrix.invert(),B.matrix.multiply(ue.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(ue.projectionMatrix),B.projectionMatrixInverse.copy(ue.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=fs*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.hasDepthSensing=function(){return y.texture!==null};let Y=null;function oe(B,ue){if(c=ue.getViewerPose(u||a),g=ue,c!==null){const Te=c.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let me=!1;Te.length!==A.cameras.length&&(A.cameras.length=0,me=!0);for(let De=0;De<Te.length;De++){const j=Te[De];let ze=null;if(f!==null)ze=f.getViewport(j);else{const Ve=d.getViewSubImage(h,j);ze=Ve.viewport,De===0&&(e.setRenderTargetTextures(x,Ve.colorTexture,h.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(x))}let be=C[De];be===void 0&&(be=new dn,be.layers.enable(De),be.viewport=new Lt,C[De]=be),be.matrix.fromArray(j.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(j.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(ze.x,ze.y,ze.width,ze.height),De===0&&(A.matrix.copy(be.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),me===!0&&A.cameras.push(be)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const De=d.getDepthInformation(Te[0]);De&&De.isValid&&De.texture&&y.init(e,De,r.renderState)}}for(let Te=0;Te<b.length;Te++){const me=w[Te],Ne=b[Te];me!==null&&Ne!==void 0&&Ne.update(me,ue,u||a)}y.render(e,A),Y&&Y(B,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),g=null}const de=new Wb;de.setAnimationLoop(oe),this.setAnimationLoop=function(B){Y=B},this.dispose=function(){}}}const fr=new Xn,GC=new lt;function WC(n,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function i(_,p){p.color.getRGB(_.fogColor.value,Hb(n)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,x,b,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(_,p):p.isMeshToonMaterial?(s(_,p),d(_,p)):p.isMeshPhongMaterial?(s(_,p),c(_,p)):p.isMeshStandardMaterial?(s(_,p),h(_,p),p.isMeshPhysicalMaterial&&f(_,p,w)):p.isMeshMatcapMaterial?(s(_,p),g(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),y(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(a(_,p),p.isLineDashedMaterial&&o(_,p)):p.isPointsMaterial?l(_,p,x,b):p.isSpriteMaterial?u(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===_n&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===_n&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const x=e.get(p),b=x.envMap,w=x.envMapRotation;if(b&&(_.envMap.value=b,fr.copy(w),fr.x*=-1,fr.y*=-1,fr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),_.envMapRotation.value.setFromMatrix4(GC.makeRotationFromEuler(fr)),_.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap){_.lightMap.value=p.lightMap;const R=n._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=p.lightMapIntensity*R,t(p.lightMap,_.lightMapTransform)}p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function a(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function o(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,x,b){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*x,_.scale.value=b*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function d(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function h(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function f(_,p,x){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=x.texture,_.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,p){p.matcap&&(_.matcap.value=p.matcap)}function y(_,p){const x=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(x.matrixWorld),_.nearDistance.value=x.shadow.camera.near,_.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qC(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){const w=b.program;i.uniformBlockBinding(x,w)}function u(x,b){let w=r[x.id];w===void 0&&(g(x),w=c(x),r[x.id]=w,x.addEventListener("dispose",_));const R=b.program;i.updateUBOMapping(x,R);const E=e.render.frame;s[x.id]!==E&&(h(x),s[x.id]=E)}function c(x){const b=d();x.__bindingPointIndex=b;const w=n.createBuffer(),R=x.__size,E=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,R,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,w),w}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const b=r[x.id],w=x.uniforms,R=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let E=0,I=w.length;E<I;E++){const T=Array.isArray(w[E])?w[E]:[w[E]];for(let C=0,A=T.length;C<A;C++){const k=T[C];if(f(k,E,C,R)===!0){const F=k.__offset,U=Array.isArray(k.value)?k.value:[k.value];let D=0;for(let z=0;z<U.length;z++){const K=U[z],q=y(K);typeof K=="number"||typeof K=="boolean"?(k.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,F+D,k.__data)):K.isMatrix3?(k.__data[0]=K.elements[0],k.__data[1]=K.elements[1],k.__data[2]=K.elements[2],k.__data[3]=0,k.__data[4]=K.elements[3],k.__data[5]=K.elements[4],k.__data[6]=K.elements[5],k.__data[7]=0,k.__data[8]=K.elements[6],k.__data[9]=K.elements[7],k.__data[10]=K.elements[8],k.__data[11]=0):(K.toArray(k.__data,D),D+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,b,w,R){const E=x.value,I=b+"_"+w;if(R[I]===void 0)return typeof E=="number"||typeof E=="boolean"?R[I]=E:R[I]=E.clone(),!0;{const T=R[I];if(typeof E=="number"||typeof E=="boolean"){if(T!==E)return R[I]=E,!0}else if(T.equals(E)===!1)return T.copy(E),!0}return!1}function g(x){const b=x.uniforms;let w=0;const R=16;for(let I=0,T=b.length;I<T;I++){const C=Array.isArray(b[I])?b[I]:[b[I]];for(let A=0,k=C.length;A<k;A++){const F=C[A],U=Array.isArray(F.value)?F.value:[F.value];for(let D=0,z=U.length;D<z;D++){const K=U[D],q=y(K),G=w%R;G!==0&&R-G<q.boundary&&(w+=R-G),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=w,w+=q.storage}}}const E=w%R;return E>0&&(w+=R-E),x.__size=w,x.__cache={},this}function y(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function _(x){const b=x.target;b.removeEventListener("dispose",_);const w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const x in r)n.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:u,dispose:p}}class XC{constructor(e={}){const{canvas:t=BT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const f=new Uint32Array(4),g=new Int32Array(4);let y=null,_=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this._useLegacyLights=!1,this.toneMapping=Wi,this.toneMappingExposure=1;const b=this;let w=!1,R=0,E=0,I=null,T=-1,C=null;const A=new Lt,k=new Lt;let F=null;const U=new Ye(0);let D=0,z=t.width,K=t.height,q=1,G=null,ie=null;const te=new Lt(0,0,z,K),Y=new Lt(0,0,z,K);let oe=!1;const de=new pd;let B=!1,ue=!1;const Te=new lt,me=new H,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return I===null?q:1}let j=i;function ze(L,X){return t.getContext(L,X)}try{const L={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dd}`),t.addEventListener("webglcontextlost",W,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ae,!1),j===null){const X="webgl2";if(j=ze(X,L),j===null)throw ze(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let be,Ve,_e,We,tt,ct,St,O,P,ne,le,fe,pe,Oe,ve,Ee,qe,ye,ke,st,Fe,Ce,Je,ut;function Ut(){be=new tR(j),be.init(),Ce=new OC(j,be),Ve=new KA(j,be,e,Ce),_e=new NC(j),We=new rR(j),tt=new bC,ct=new UC(j,be,_e,tt,Ve,Ce,We),St=new ZA(b),O=new eR(b),P=new dE(j),Je=new XA(j,P),ne=new nR(j,P,We,Je),le=new aR(j,ne,P,We),ke=new sR(j,Ve,ct),Ee=new YA(tt),fe=new xC(b,St,O,be,Ve,Je,Ee),pe=new WC(b,tt),Oe=new SC,ve=new CC(be),ye=new qA(b,St,O,_e,le,h,l),qe=new DC(b,le,Ve),ut=new qC(j,We,Ve,_e),st=new jA(j,be,We),Fe=new iR(j,be,We),We.programs=fe.programs,b.capabilities=Ve,b.extensions=be,b.properties=tt,b.renderLists=Oe,b.shadowMap=qe,b.state=_e,b.info=We}Ut();const nt=new VC(b,j);this.xr=nt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const L=be.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=be.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(L){L!==void 0&&(q=L,this.setSize(z,K,!1))},this.getSize=function(L){return L.set(z,K)},this.setSize=function(L,X,ee=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=L,K=X,t.width=Math.floor(L*q),t.height=Math.floor(X*q),ee===!0&&(t.style.width=L+"px",t.style.height=X+"px"),this.setViewport(0,0,L,X)},this.getDrawingBufferSize=function(L){return L.set(z*q,K*q).floor()},this.setDrawingBufferSize=function(L,X,ee){z=L,K=X,q=ee,t.width=Math.floor(L*ee),t.height=Math.floor(X*ee),this.setViewport(0,0,L,X)},this.getCurrentViewport=function(L){return L.copy(A)},this.getViewport=function(L){return L.copy(te)},this.setViewport=function(L,X,ee,Z){L.isVector4?te.set(L.x,L.y,L.z,L.w):te.set(L,X,ee,Z),_e.viewport(A.copy(te).multiplyScalar(q).round())},this.getScissor=function(L){return L.copy(Y)},this.setScissor=function(L,X,ee,Z){L.isVector4?Y.set(L.x,L.y,L.z,L.w):Y.set(L,X,ee,Z),_e.scissor(k.copy(Y).multiplyScalar(q).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(L){_e.setScissorTest(oe=L)},this.setOpaqueSort=function(L){G=L},this.setTransparentSort=function(L){ie=L},this.getClearColor=function(L){return L.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(L=!0,X=!0,ee=!0){let Z=0;if(L){let J=!1;if(I!==null){const xe=I.texture.format;J=xe===Ib||xe===Cb||xe===Rb}if(J){const xe=I.texture.type,$e=xe===ji||xe===ds||xe===Sb||xe===ma||xe===Tb||xe===Eb,Ie=ye.getClearColor(),Be=ye.getClearAlpha(),Xe=Ie.r,Qe=Ie.g,it=Ie.b;$e?(f[0]=Xe,f[1]=Qe,f[2]=it,f[3]=Be,j.clearBufferuiv(j.COLOR,0,f)):(g[0]=Xe,g[1]=Qe,g[2]=it,g[3]=Be,j.clearBufferiv(j.COLOR,0,g))}else Z|=j.COLOR_BUFFER_BIT}X&&(Z|=j.DEPTH_BUFFER_BIT),ee&&(Z|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",W,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Oe.dispose(),ve.dispose(),tt.dispose(),St.dispose(),O.dispose(),le.dispose(),Je.dispose(),ut.dispose(),fe.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",wt),nt.removeEventListener("sessionend",yn),ht.stop()};function W(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const L=We.autoReset,X=qe.enabled,ee=qe.autoUpdate,Z=qe.needsUpdate,J=qe.type;Ut(),We.autoReset=L,qe.enabled=X,qe.autoUpdate=ee,qe.needsUpdate=Z,qe.type=J}function ae(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Se(L){const X=L.target;X.removeEventListener("dispose",Se),Re(X)}function Re(L){mt(L),tt.remove(L)}function mt(L){const X=tt.get(L).programs;X!==void 0&&(X.forEach(function(ee){fe.releaseProgram(ee)}),L.isShaderMaterial&&fe.releaseShaderCache(L))}this.renderBufferDirect=function(L,X,ee,Z,J,xe){X===null&&(X=Ne);const $e=J.isMesh&&J.matrixWorld.determinant()<0,Ie=ya(L,X,ee,Z,J);_e.setMaterial(Z,$e);let Be=ee.index,Xe=1;if(Z.wireframe===!0){if(Be=ne.getWireframeAttribute(ee),Be===void 0)return;Xe=2}const Qe=ee.drawRange,it=ee.attributes.position;let It=Qe.start*Xe,Gt=(Qe.start+Qe.count)*Xe;xe!==null&&(It=Math.max(It,xe.start*Xe),Gt=Math.min(Gt,(xe.start+xe.count)*Xe)),Be!==null?(It=Math.max(It,0),Gt=Math.min(Gt,Be.count)):it!=null&&(It=Math.max(It,0),Gt=Math.min(Gt,it.count));const Dt=Gt-It;if(Dt<0||Dt===1/0)return;Je.setup(J,Z,Ie,ee,Be);let Ht,vt=st;if(Be!==null&&(Ht=P.get(Be),vt=Fe,vt.setIndex(Ht)),J.isMesh)Z.wireframe===!0?(_e.setLineWidth(Z.wireframeLinewidth*De()),vt.setMode(j.LINES)):vt.setMode(j.TRIANGLES);else if(J.isLine){let je=Z.linewidth;je===void 0&&(je=1),_e.setLineWidth(je*De()),J.isLineSegments?vt.setMode(j.LINES):J.isLineLoop?vt.setMode(j.LINE_LOOP):vt.setMode(j.LINE_STRIP)}else J.isPoints?vt.setMode(j.POINTS):J.isSprite&&vt.setMode(j.TRIANGLES);if(J.isBatchedMesh)J._multiDrawInstances!==null?vt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances):vt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)vt.renderInstances(It,Dt,J.count);else if(ee.isInstancedBufferGeometry){const je=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Qi=Math.min(ee.instanceCount,je);vt.renderInstances(It,Dt,Qi)}else vt.render(It,Dt)};function Ct(L,X,ee){L.transparent===!0&&L.side===Vn&&L.forceSinglePass===!1?(L.side=_n,L.needsUpdate=!0,Ji(L,X,ee),L.side=ri,L.needsUpdate=!0,Ji(L,X,ee),L.side=Vn):Ji(L,X,ee)}this.compile=function(L,X,ee=null){ee===null&&(ee=L),_=ve.get(ee),_.init(X),x.push(_),ee.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),L!==ee&&L.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),_.setupLights(b._useLegacyLights);const Z=new Set;return L.traverse(function(J){const xe=J.material;if(xe)if(Array.isArray(xe))for(let $e=0;$e<xe.length;$e++){const Ie=xe[$e];Ct(Ie,ee,J),Z.add(Ie)}else Ct(xe,ee,J),Z.add(xe)}),x.pop(),_=null,Z},this.compileAsync=function(L,X,ee=null){const Z=this.compile(L,X,ee);return new Promise(J=>{function xe(){if(Z.forEach(function($e){tt.get($e).currentProgram.isReady()&&Z.delete($e)}),Z.size===0){J(L);return}setTimeout(xe,10)}be.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let kt=null;function qt(L){kt&&kt(L)}function wt(){ht.stop()}function yn(){ht.start()}const ht=new Wb;ht.setAnimationLoop(qt),typeof self<"u"&&ht.setContext(self),this.setAnimationLoop=function(L){kt=L,nt.setAnimationLoop(L),L===null?ht.stop():ht.start()},nt.addEventListener("sessionstart",wt),nt.addEventListener("sessionend",yn),this.render=function(L,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(X),X=nt.getCamera()),L.isScene===!0&&L.onBeforeRender(b,L,X,I),_=ve.get(L,x.length),_.init(X),x.push(_),Te.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),de.setFromProjectionMatrix(Te),ue=this.localClippingEnabled,B=Ee.init(this.clippingPlanes,ue),y=Oe.get(L,p.length),y.init(),p.push(y),Ss(L,X,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(G,ie);const ee=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1;ee&&ye.addToRenderList(y,L),this.info.render.frame++,B===!0&&Ee.beginShadows();const Z=_.state.shadowsArray;qe.render(Z,L,X),B===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=y.opaque,xe=y.transmissive;if(_.setupLights(b._useLegacyLights),X.isArrayCamera){const $e=X.cameras;if(xe.length>0)for(let Ie=0,Be=$e.length;Ie<Be;Ie++){const Xe=$e[Ie];Ts(J,xe,L,Xe)}ee&&ye.render(L);for(let Ie=0,Be=$e.length;Ie<Be;Ie++){const Xe=$e[Ie];Ms(y,L,Xe,Xe.viewport)}}else xe.length>0&&Ts(J,xe,L,X),ee&&ye.render(L),Ms(y,L,X);I!==null&&(ct.updateMultisampleRenderTarget(I),ct.updateRenderTargetMipmap(I)),L.isScene===!0&&L.onAfterRender(b,L,X),Je.resetDefaultState(),T=-1,C=null,x.pop(),x.length>0?(_=x[x.length-1],B===!0&&Ee.setGlobalState(b.clippingPlanes,_.state.camera)):_=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function Ss(L,X,ee,Z){if(L.visible===!1)return;if(L.layers.test(X.layers)){if(L.isGroup)ee=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(X);else if(L.isLight)_.pushLight(L),L.castShadow&&_.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||de.intersectsSprite(L)){Z&&me.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Te);const $e=le.update(L),Ie=L.material;Ie.visible&&y.push(L,$e,Ie,ee,me.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||de.intersectsObject(L))){const $e=le.update(L),Ie=L.material;if(Z&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),me.copy(L.boundingSphere.center)):($e.boundingSphere===null&&$e.computeBoundingSphere(),me.copy($e.boundingSphere.center)),me.applyMatrix4(L.matrixWorld).applyMatrix4(Te)),Array.isArray(Ie)){const Be=$e.groups;for(let Xe=0,Qe=Be.length;Xe<Qe;Xe++){const it=Be[Xe],It=Ie[it.materialIndex];It&&It.visible&&y.push(L,$e,It,ee,me.z,it)}}else Ie.visible&&y.push(L,$e,Ie,ee,me.z,null)}}const xe=L.children;for(let $e=0,Ie=xe.length;$e<Ie;$e++)Ss(xe[$e],X,ee,Z)}function Ms(L,X,ee,Z){const J=L.opaque,xe=L.transmissive,$e=L.transparent;_.setupLightsView(ee),B===!0&&Ee.setGlobalState(b.clippingPlanes,ee),Z&&_e.viewport(A.copy(Z)),J.length>0&&Zi(J,X,ee),xe.length>0&&Zi(xe,X,ee),$e.length>0&&Zi($e,X,ee),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Ts(L,X,ee,Z){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Z.id]===void 0&&(_.state.transmissionRenderTarget[Z.id]=new Ar(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?Xo:ji,minFilter:bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const xe=_.state.transmissionRenderTarget[Z.id],$e=Z.viewport||A;xe.setSize($e.z,$e.w);const Ie=b.getRenderTarget();b.setRenderTarget(xe),b.getClearColor(U),D=b.getClearAlpha(),D<1&&b.setClearColor(16777215,.5),b.clear();const Be=b.toneMapping;b.toneMapping=Wi;const Xe=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),_.setupLightsView(Z),B===!0&&Ee.setGlobalState(b.clippingPlanes,Z),Zi(L,ee,Z),ct.updateMultisampleRenderTarget(xe),ct.updateRenderTargetMipmap(xe),be.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let it=0,It=X.length;it<It;it++){const Gt=X[it],Dt=Gt.object,Ht=Gt.geometry,vt=Gt.material,je=Gt.group;if(vt.side===Vn&&Dt.layers.test(Z.layers)){const Qi=vt.side;vt.side=_n,vt.needsUpdate=!0,Es(Dt,ee,Z,Ht,vt,je),vt.side=Qi,vt.needsUpdate=!0,Qe=!0}}Qe===!0&&(ct.updateMultisampleRenderTarget(xe),ct.updateRenderTargetMipmap(xe))}b.setRenderTarget(Ie),b.setClearColor(U,D),Xe!==void 0&&(Z.viewport=Xe),b.toneMapping=Be}function Zi(L,X,ee){const Z=X.isScene===!0?X.overrideMaterial:null;for(let J=0,xe=L.length;J<xe;J++){const $e=L[J],Ie=$e.object,Be=$e.geometry,Xe=Z===null?$e.material:Z,Qe=$e.group;Ie.layers.test(ee.layers)&&Es(Ie,X,ee,Be,Xe,Qe)}}function Es(L,X,ee,Z,J,xe){L.onBeforeRender(b,X,ee,Z,J,xe),L.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),J.onBeforeRender(b,X,ee,Z,L,xe),J.transparent===!0&&J.side===Vn&&J.forceSinglePass===!1?(J.side=_n,J.needsUpdate=!0,b.renderBufferDirect(ee,X,Z,J,L,xe),J.side=ri,J.needsUpdate=!0,b.renderBufferDirect(ee,X,Z,J,L,xe),J.side=Vn):b.renderBufferDirect(ee,X,Z,J,L,xe),L.onAfterRender(b,X,ee,Z,J,xe)}function Ji(L,X,ee){X.isScene!==!0&&(X=Ne);const Z=tt.get(L),J=_.state.lights,xe=_.state.shadowsArray,$e=J.state.version,Ie=fe.getParameters(L,J.state,xe,X,ee),Be=fe.getProgramCacheKey(Ie);let Xe=Z.programs;Z.environment=L.isMeshStandardMaterial?X.environment:null,Z.fog=X.fog,Z.envMap=(L.isMeshStandardMaterial?O:St).get(L.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&L.envMap===null?X.environmentRotation:L.envMapRotation,Xe===void 0&&(L.addEventListener("dispose",Se),Xe=new Map,Z.programs=Xe);let Qe=Xe.get(Be);if(Qe!==void 0){if(Z.currentProgram===Qe&&Z.lightsStateVersion===$e)return Rs(L,Ie),Qe}else Ie.uniforms=fe.getUniforms(L),L.onBuild(ee,Ie,b),L.onBeforeCompile(Ie,b),Qe=fe.acquireProgram(Ie,Be),Xe.set(Be,Qe),Z.uniforms=Ie.uniforms;const it=Z.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(it.clippingPlanes=Ee.uniform),Rs(L,Ie),Z.needsLights=xa(L),Z.lightsStateVersion=$e,Z.needsLights&&(it.ambientLightColor.value=J.state.ambient,it.lightProbe.value=J.state.probe,it.directionalLights.value=J.state.directional,it.directionalLightShadows.value=J.state.directionalShadow,it.spotLights.value=J.state.spot,it.spotLightShadows.value=J.state.spotShadow,it.rectAreaLights.value=J.state.rectArea,it.ltc_1.value=J.state.rectAreaLTC1,it.ltc_2.value=J.state.rectAreaLTC2,it.pointLights.value=J.state.point,it.pointLightShadows.value=J.state.pointShadow,it.hemisphereLights.value=J.state.hemi,it.directionalShadowMap.value=J.state.directionalShadowMap,it.directionalShadowMatrix.value=J.state.directionalShadowMatrix,it.spotShadowMap.value=J.state.spotShadowMap,it.spotLightMatrix.value=J.state.spotLightMatrix,it.spotLightMap.value=J.state.spotLightMap,it.pointShadowMap.value=J.state.pointShadowMap,it.pointShadowMatrix.value=J.state.pointShadowMatrix),Z.currentProgram=Qe,Z.uniformsList=null,Qe}function As(L){if(L.uniformsList===null){const X=L.currentProgram.getUniforms();L.uniformsList=To.seqWithValue(X.seq,L.uniforms)}return L.uniformsList}function Rs(L,X){const ee=tt.get(L);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function ya(L,X,ee,Z,J){X.isScene!==!0&&(X=Ne),ct.resetTextureUnits();const xe=X.fog,$e=Z.isMeshStandardMaterial?X.environment:null,Ie=I===null?b.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:rn,Be=(Z.isMeshStandardMaterial?O:St).get(Z.envMap||$e),Xe=Z.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Qe=!!ee.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),it=!!ee.morphAttributes.position,It=!!ee.morphAttributes.normal,Gt=!!ee.morphAttributes.color;let Dt=Wi;Z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Dt=b.toneMapping);const Ht=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,vt=Ht!==void 0?Ht.length:0,je=tt.get(Z),Qi=_.state.lights;if(B===!0&&(ue===!0||L!==C)){const mn=L===C&&Z.id===T;Ee.setState(Z,L,mn)}let Nt=!1;Z.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Qi.state.version||je.outputColorSpace!==Ie||J.isBatchedMesh&&je.batching===!1||!J.isBatchedMesh&&je.batching===!0||J.isInstancedMesh&&je.instancing===!1||!J.isInstancedMesh&&je.instancing===!0||J.isSkinnedMesh&&je.skinning===!1||!J.isSkinnedMesh&&je.skinning===!0||J.isInstancedMesh&&je.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&je.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&je.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&je.instancingMorph===!1&&J.morphTexture!==null||je.envMap!==Be||Z.fog===!0&&je.fog!==xe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Ee.numPlanes||je.numIntersection!==Ee.numIntersection)||je.vertexAlphas!==Xe||je.vertexTangents!==Qe||je.morphTargets!==it||je.morphNormals!==It||je.morphColors!==Gt||je.toneMapping!==Dt||je.morphTargetsCount!==vt)&&(Nt=!0):(Nt=!0,je.__version=Z.version);let li=je.currentProgram;Nt===!0&&(li=Ji(Z,X,J));let ba=!1,er=!1,An=!1;const Vt=li.getUniforms(),jn=je.uniforms;if(_e.useProgram(li.program)&&(ba=!0,er=!0,An=!0),Z.id!==T&&(T=Z.id,er=!0),ba||C!==L){Vt.setValue(j,"projectionMatrix",L.projectionMatrix),Vt.setValue(j,"viewMatrix",L.matrixWorldInverse);const mn=Vt.map.cameraPosition;mn!==void 0&&mn.setValue(j,me.setFromMatrixPosition(L.matrixWorld)),Ve.logarithmicDepthBuffer&&Vt.setValue(j,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Vt.setValue(j,"isOrthographic",L.isOrthographicCamera===!0),C!==L&&(C=L,er=!0,An=!0)}if(J.isSkinnedMesh){Vt.setOptional(j,J,"bindMatrix"),Vt.setOptional(j,J,"bindMatrixInverse");const mn=J.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Vt.setValue(j,"boneTexture",mn.boneTexture,ct))}J.isBatchedMesh&&(Vt.setOptional(j,J,"batchingTexture"),Vt.setValue(j,"batchingTexture",J._matricesTexture,ct));const Pr=ee.morphAttributes;if((Pr.position!==void 0||Pr.normal!==void 0||Pr.color!==void 0)&&ke.update(J,ee,li),(er||je.receiveShadow!==J.receiveShadow)&&(je.receiveShadow=J.receiveShadow,Vt.setValue(j,"receiveShadow",J.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(jn.envMap.value=Be,jn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&X.environment!==null&&(jn.envMapIntensity.value=X.environmentIntensity),er&&(Vt.setValue(j,"toneMappingExposure",b.toneMappingExposure),je.needsLights&&va(jn,An),xe&&Z.fog===!0&&pe.refreshFogUniforms(jn,xe),pe.refreshMaterialUniforms(jn,Z,q,K,_.state.transmissionRenderTarget[L.id]),To.upload(j,As(je),jn,ct)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(To.upload(j,As(je),jn,ct),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Vt.setValue(j,"center",J.center),Vt.setValue(j,"modelViewMatrix",J.modelViewMatrix),Vt.setValue(j,"normalMatrix",J.normalMatrix),Vt.setValue(j,"modelMatrix",J.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const mn=Z.uniformsGroups;for(let Cs=0,Qo=mn.length;Cs<Qo;Cs++){const wa=mn[Cs];ut.update(wa,li),ut.bind(wa,li)}}return li}function va(L,X){L.ambientLightColor.needsUpdate=X,L.lightProbe.needsUpdate=X,L.directionalLights.needsUpdate=X,L.directionalLightShadows.needsUpdate=X,L.pointLights.needsUpdate=X,L.pointLightShadows.needsUpdate=X,L.spotLights.needsUpdate=X,L.spotLightShadows.needsUpdate=X,L.rectAreaLights.needsUpdate=X,L.hemisphereLights.needsUpdate=X}function xa(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(L,X,ee){tt.get(L.texture).__webglTexture=X,tt.get(L.depthTexture).__webglTexture=ee;const Z=tt.get(L);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=ee===void 0,Z.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,X){const ee=tt.get(L);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(L,X=0,ee=0){I=L,R=X,E=ee;let Z=!0,J=null,xe=!1,$e=!1;if(L){const Be=tt.get(L);Be.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(j.FRAMEBUFFER,null),Z=!1):Be.__webglFramebuffer===void 0?ct.setupRenderTarget(L):Be.__hasExternalTextures&&ct.rebindTextures(L,tt.get(L.texture).__webglTexture,tt.get(L.depthTexture).__webglTexture);const Xe=L.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&($e=!0);const Qe=tt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Qe[X])?J=Qe[X][ee]:J=Qe[X],xe=!0):L.samples>0&&ct.useMultisampledRTT(L)===!1?J=tt.get(L).__webglMultisampledFramebuffer:Array.isArray(Qe)?J=Qe[ee]:J=Qe,A.copy(L.viewport),k.copy(L.scissor),F=L.scissorTest}else A.copy(te).multiplyScalar(q).floor(),k.copy(Y).multiplyScalar(q).floor(),F=oe;if(_e.bindFramebuffer(j.FRAMEBUFFER,J)&&Z&&_e.drawBuffers(L,J),_e.viewport(A),_e.scissor(k),_e.setScissorTest(F),xe){const Be=tt.get(L.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,ee)}else if($e){const Be=tt.get(L.texture),Xe=X||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Be.__webglTexture,ee||0,Xe)}T=-1},this.readRenderTargetPixels=function(L,X,ee,Z,J,xe,$e){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=tt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&$e!==void 0&&(Ie=Ie[$e]),Ie){_e.bindFramebuffer(j.FRAMEBUFFER,Ie);try{const Be=L.texture,Xe=Be.format,Qe=Be.type;if(!Ve.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=L.width-Z&&ee>=0&&ee<=L.height-J&&j.readPixels(X,ee,Z,J,Ce.convert(Xe),Ce.convert(Qe),xe)}finally{const Be=I!==null?tt.get(I).__webglFramebuffer:null;_e.bindFramebuffer(j.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(L,X,ee=0){const Z=Math.pow(2,-ee),J=Math.floor(X.image.width*Z),xe=Math.floor(X.image.height*Z);ct.setTexture2D(X,0),j.copyTexSubImage2D(j.TEXTURE_2D,ee,0,0,L.x,L.y,J,xe),_e.unbindTexture()},this.copyTextureToTexture=function(L,X,ee,Z=0){const J=X.image.width,xe=X.image.height,$e=Ce.convert(ee.format),Ie=Ce.convert(ee.type);ct.setTexture2D(ee,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,ee.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,ee.unpackAlignment),X.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Z,L.x,L.y,J,xe,$e,Ie,X.image.data):X.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Z,L.x,L.y,X.mipmaps[0].width,X.mipmaps[0].height,$e,X.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,Z,L.x,L.y,$e,Ie,X.image),Z===0&&ee.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(L,X,ee,Z,J=0){const xe=L.max.x-L.min.x,$e=L.max.y-L.min.y,Ie=L.max.z-L.min.z,Be=Ce.convert(Z.format),Xe=Ce.convert(Z.type);let Qe;if(Z.isData3DTexture)ct.setTexture3D(Z,0),Qe=j.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)ct.setTexture2DArray(Z,0),Qe=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Z.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,Z.unpackAlignment);const it=j.getParameter(j.UNPACK_ROW_LENGTH),It=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Gt=j.getParameter(j.UNPACK_SKIP_PIXELS),Dt=j.getParameter(j.UNPACK_SKIP_ROWS),Ht=j.getParameter(j.UNPACK_SKIP_IMAGES),vt=ee.isCompressedTexture?ee.mipmaps[J]:ee.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,vt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,vt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,L.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,L.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,L.min.z),ee.isDataTexture||ee.isData3DTexture?j.texSubImage3D(Qe,J,X.x,X.y,X.z,xe,$e,Ie,Be,Xe,vt.data):Z.isCompressedArrayTexture?j.compressedTexSubImage3D(Qe,J,X.x,X.y,X.z,xe,$e,Ie,Be,vt.data):j.texSubImage3D(Qe,J,X.x,X.y,X.z,xe,$e,Ie,Be,Xe,vt),j.pixelStorei(j.UNPACK_ROW_LENGTH,it),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,It),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Gt),j.pixelStorei(j.UNPACK_SKIP_ROWS,Dt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Ht),J===0&&Z.generateMipmaps&&j.generateMipmap(Qe),_e.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?ct.setTextureCube(L,0):L.isData3DTexture?ct.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ct.setTexture2DArray(L,0):ct.setTexture2D(L,0),_e.unbindTexture()},this.resetState=function(){R=0,E=0,I=null,_e.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===hd?"display-p3":"srgb",t.unpackColorSpace=Tt.workingColorSpace===jo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class jC extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class KC{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Nb("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new H;class _d{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new fn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _d(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Q_=new H,e0=new Lt,t0=new Lt,YC=new H,n0=new lt,mo=new H,Yu=new si,i0=new lt,Zu=new ga;class ZC extends jt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lg,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ti),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,mo),this.boundingBox.expandByPoint(mo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new si),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,mo),this.boundingSphere.expandByPoint(mo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yu.copy(this.boundingSphere),Yu.applyMatrix4(r),e.ray.intersectsSphere(Yu)!==!1&&(i0.copy(r).invert(),Zu.copy(e.ray).applyMatrix4(i0),!(this.boundingBox!==null&&Zu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Lt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===nT?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;e0.fromBufferAttribute(r.attributes.skinIndex,e),t0.fromBufferAttribute(r.attributes.skinWeight,e),Q_.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=t0.getComponent(s);if(a!==0){const o=e0.getComponent(s);n0.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(YC.copy(Q_).applyMatrix4(n0),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Jb extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qb extends tn{constructor(e=null,t=1,i=1,r,s,a,o,l,u=hn,c=hn,d,h){super(null,a,o,l,u,c,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const r0=new lt,JC=new lt;class yd{constructor(e=[],t=[]){this.uuid=qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new lt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:JC;r0.multiplyMatrices(o,t[s]),r0.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new yd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Qb(t,e,e,Wn,ti);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Jb),this.bones.push(a),this.boneInverses.push(new lt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class Ec extends fn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Jr=new lt,s0=new lt,go=[],a0=new Ti,QC=new lt,js=new jt,Ks=new si;class e3 extends jt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ec(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,QC)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Jr),a0.copy(e.boundingBox).applyMatrix4(Jr),this.boundingBox.union(a0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Jr),Ks.copy(e.boundingSphere).applyMatrix4(Jr),this.boundingSphere.union(Ks)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(i),e.ray.intersectsSphere(Ks)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Jr),s0.multiplyMatrices(i,Jr),js.matrixWorld=s0,js.raycast(e,go);for(let a=0,o=go.length;a<o;a++){const l=go[a];l.instanceId=s,l.object=this,t.push(l)}go.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ec(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Qb(new Float32Array(r*this.count),r,this.count,Ab,ti));const s=this.morphTexture.source.data.data;let a=0;for(let u=0;u<i.length;u++)a+=i[u];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ew extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ho=new H,Vo=new H,o0=new lt,Ys=new ga,_o=new si,Ju=new H,l0=new H;class vd extends Bt{constructor(e=new Pn,t=new ew){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ho.fromBufferAttribute(t,r-1),Vo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ho.distanceTo(Vo);e.setAttribute("lineDistance",new pn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_o.copy(i.boundingSphere),_o.applyMatrix4(r),_o.radius+=s,e.ray.intersectsSphere(_o)===!1)return;o0.copy(r).invert(),Ys.copy(e.ray).applyMatrix4(o0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let y=f,_=g-1;y<_;y+=u){const p=c.getX(y),x=c.getX(y+1),b=yo(this,e,Ys,l,p,x);b&&t.push(b)}if(this.isLineLoop){const y=c.getX(g-1),_=c.getX(f),p=yo(this,e,Ys,l,y,_);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,_=g-1;y<_;y+=u){const p=yo(this,e,Ys,l,y,y+1);p&&t.push(p)}if(this.isLineLoop){const y=yo(this,e,Ys,l,g-1,f);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function yo(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(Ho.fromBufferAttribute(a,r),Vo.fromBufferAttribute(a,s),t.distanceSqToSegment(Ho,Vo,Ju,l0)>i)return;Ju.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ju);if(!(l<e.near||l>e.far))return{distance:l,point:l0.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const u0=new H,c0=new H;class t3 extends vd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)u0.fromBufferAttribute(t,r),c0.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+u0.distanceTo(c0);e.setAttribute("lineDistance",new pn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class n3 extends vd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class tw extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const d0=new lt,Ac=new ga,vo=new si,xo=new H;class i3 extends Bt{constructor(e=new Pn,t=new tw){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(r),vo.radius+=s,e.ray.intersectsSphere(vo)===!1)return;d0.copy(r).invert(),Ac.copy(e.ray).applyMatrix4(d0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=h,y=f;g<y;g++){const _=u.getX(g);xo.fromBufferAttribute(d,_),h0(xo,_,l,r,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,y=f;g<y;g++)xo.fromBufferAttribute(d,g),h0(xo,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function h0(n,e,t,i,r,s,a){const o=Ac.distanceSqToPoint(n);if(o<t){const l=new H;Ac.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Zo extends Pn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],d=[],h=[],f=[];let g=0;const y=[],_=i/2;let p=0;x(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new pn(d,3)),this.setAttribute("normal",new pn(h,3)),this.setAttribute("uv",new pn(f,2));function x(){const w=new H,R=new H;let E=0;const I=(t-e)/i;for(let T=0;T<=s;T++){const C=[],A=T/s,k=A*(t-e)+e;for(let F=0;F<=r;F++){const U=F/r,D=U*l+o,z=Math.sin(D),K=Math.cos(D);R.x=k*z,R.y=-A*i+_,R.z=k*K,d.push(R.x,R.y,R.z),w.set(z,I,K).normalize(),h.push(w.x,w.y,w.z),f.push(U,1-A),C.push(g++)}y.push(C)}for(let T=0;T<r;T++)for(let C=0;C<s;C++){const A=y[C][T],k=y[C+1][T],F=y[C+1][T+1],U=y[C][T+1];c.push(A,k,U),c.push(k,F,U),E+=6}u.addGroup(p,E,0),p+=E}function b(w){const R=g,E=new dt,I=new H;let T=0;const C=w===!0?e:t,A=w===!0?1:-1;for(let F=1;F<=r;F++)d.push(0,_*A,0),h.push(0,A,0),f.push(.5,.5),g++;const k=g;for(let F=0;F<=r;F++){const D=F/r*l+o,z=Math.cos(D),K=Math.sin(D);I.x=C*K,I.y=_*A,I.z=C*z,d.push(I.x,I.y,I.z),h.push(0,A,0),E.x=z*.5+.5,E.y=K*.5*A+.5,f.push(E.x,E.y),g++}for(let F=0;F<r;F++){const U=R+F,D=k+F;w===!0?c.push(D,D+1,U):c.push(D+1,D,U),T+=3}u.addGroup(p,T,w===!0?1:2),p+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xd extends Pn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const c=[],d=new H,h=new H,f=[],g=[],y=[],_=[];for(let p=0;p<=i;p++){const x=[],b=p/i;let w=0;p===0&&a===0?w=.5/t:p===i&&l===Math.PI&&(w=-.5/t);for(let R=0;R<=t;R++){const E=R/t;d.x=-e*Math.cos(r+E*s)*Math.sin(a+b*o),d.y=e*Math.cos(a+b*o),d.z=e*Math.sin(r+E*s)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),_.push(E+w,1-b),x.push(u++)}c.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const b=c[p][x+1],w=c[p][x],R=c[p+1][x],E=c[p+1][x+1];(p!==0||a>0)&&f.push(b,w,E),(p!==i-1||l<Math.PI)&&f.push(w,R,E)}this.setIndex(f),this.setAttribute("position",new pn(g,3)),this.setAttribute("normal",new pn(y,3)),this.setAttribute("uv",new pn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bi extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pb,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ai extends Bi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return on(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function bo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function r3(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function s3(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function f0(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=n[o+l]}return r}function nw(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=n[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=n[r++];while(s!==void 0)}class _a{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class a3 extends _a{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:a_,endingEnd:a_}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case o_:s=e,o=2*t-i;break;case l_:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case o_:a=e,l=2*i-t;break;case l_:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}const u=(i-t)*.5,c=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(l-i),this._offsetPrev=s*c,this._offsetNext=a*c}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,c=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),y=g*g,_=y*g,p=-h*_+2*h*y-h*g,x=(1+h)*_+(-1.5-2*h)*y+(-.5+h)*g+1,b=(-1-f)*_+(1.5+f)*y+.5*g,w=f*_-f*y;for(let R=0;R!==o;++R)s[R]=p*a[c+R]+x*a[u+R]+b*a[l+R]+w*a[d+R];return s}}class o3 extends _a{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,c=(i-t)/(r-t),d=1-c;for(let h=0;h!==o;++h)s[h]=a[u+h]*d+a[l+h]*c;return s}}class l3 extends _a{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class oi{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bo(t,this.TimeBufferType),this.values=bo(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:bo(e.times,Array),values:bo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new l3(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new o3(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new a3(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fa:t=this.InterpolantFactoryMethodDiscrete;break;case hs:t=this.InterpolantFactoryMethodLinear;break;case Mu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fa;case this.InterpolantFactoryMethodLinear:return hs;case this.InterpolantFactoryMethodSmooth:return Mu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&r3(r))for(let o=0,l=r.length;o!==l;++o){const u=r[o];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Mu,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const u=e[o],c=e[o+1];if(u!==c&&(o!==1||u!==e[0]))if(r)l=!0;else{const d=o*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){const y=t[d+g];if(y!==t[h+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*i,h=a*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,u=0;u!==i;++u)t[l+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=hs;class xs extends oi{}xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=fa;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class iw extends oi{}iw.prototype.ValueTypeName="color";class ms extends oi{}ms.prototype.ValueTypeName="number";class u3 extends _a{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let u=e*o;for(let c=u+o;u!==c;u+=4)Mi.slerpFlat(s,0,a,u-o,a,u,l);return s}}class Rr extends oi{InterpolantFactoryMethodLinear(e){return new u3(this.times,this.values,this.getValueSize(),e)}}Rr.prototype.ValueTypeName="quaternion";Rr.prototype.DefaultInterpolation=hs;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;class bs extends oi{}bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=fa;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;class gs extends oi{}gs.prototype.ValueTypeName="vector";class c3{constructor(e="",t=-1,i=[],r=hT){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=qn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(h3(i[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(oi.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],u=[];l.push((o+s-1)%s,o,(o+1)%s),u.push(0,1,0);const c=s3(l);l=f0(l,1,c),u=f0(u,1,c),!r&&l[0]===0&&(l.push(s),u.push(u[0])),a.push(new ms(".morphTargetInfluences["+t[o].name+"]",l,u).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const u=e[o],c=u.name.match(s);if(c&&c.length>1){const d=c[1];let h=r[d];h||(r[d]=h=[]),h.push(u)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,h,f,g,y){if(f.length!==0){const _=[],p=[];nw(f,_,p,g),_.length!==0&&y.push(new d(h,_,p))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let d=0;d<u.length;d++){const h=u[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let y=0;y<h[g].morphTargets.length;y++)f[h[g].morphTargets[y]]=-1;for(const y in f){const _=[],p=[];for(let x=0;x!==h[g].morphTargets.length;++x){const b=h[g];_.push(b.time),p.push(b.morphTarget===y?1:0)}r.push(new ms(".morphTargetInfluence["+y+"]",_,p))}l=f.length*a}else{const f=".bones["+t[d].name+"]";i(gs,f+".position",h,"pos",r),i(Rr,f+".quaternion",h,"rot",r),i(gs,f+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function d3(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ms;case"vector":case"vector2":case"vector3":case"vector4":return gs;case"color":return iw;case"quaternion":return Rr;case"bool":case"boolean":return xs;case"string":return bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function h3(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=d3(n.type);if(n.times===void 0){const t=[],i=[];nw(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Vi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class f3{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){o++,s===!1&&r.onStart!==void 0&&r.onStart(c,a,o),s=!0},this.itemEnd=function(c){a++,r.onProgress!==void 0&&r.onProgress(c,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,h=u.length;d<h;d+=2){const f=u[d],g=u[d+1];if(f.global&&(f.lastIndex=0),f.test(c))return g}return null}}}const p3=new f3;class ws{constructor(e){this.manager=e!==void 0?e:p3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ws.DEFAULT_MATERIAL_NAME="__DEFAULT";const yi={};class m3 extends Error{constructor(e,t){super(e),this.response=t}}class rw extends ws{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Vi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(yi[e]!==void 0){yi[e].push({onLoad:t,onProgress:i,onError:r});return}yi[e]=[],yi[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=yi[e],d=u.body.getReader(),h=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0;let y=0;const _=new ReadableStream({start(p){x();function x(){d.read().then(({done:b,value:w})=>{if(b)p.close();else{y+=w.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let E=0,I=c.length;E<I;E++){const T=c[E];T.onProgress&&T.onProgress(R)}p.enqueue(w),x()}})}}});return new Response(_)}else throw new m3(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return u.json();default:if(o===void 0)return u.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return u.arrayBuffer().then(g=>f.decode(g))}}}).then(u=>{Vi.add(e,u);const c=yi[e];delete yi[e];for(let d=0,h=c.length;d<h;d++){const f=c[d];f.onLoad&&f.onLoad(u)}}).catch(u=>{const c=yi[e];if(c===void 0)throw this.manager.itemError(e),u;delete yi[e];for(let d=0,h=c.length;d<h;d++){const f=c[d];f.onError&&f.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class g3 extends ws{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Vi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=pa("img");function l(){c(),Vi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class _3 extends ws{constructor(e){super(e)}load(e,t,i,r){const s=new tn,a=new g3(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Jo extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class y3 extends Jo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Qu=new lt,p0=new H,m0=new H;class bd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pd,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;p0.setFromMatrixPosition(e.matrixWorld),t.position.copy(p0),m0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(m0),t.updateMatrixWorld(),Qu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class v3 extends bd{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=fs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class x3 extends Jo{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new v3}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const g0=new lt,Zs=new H,ec=new H;class b3 extends bd{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Zs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Zs),ec.copy(i.position),ec.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ec),i.updateMatrixWorld(),r.makeTranslation(-Zs.x,-Zs.y,-Zs.z),g0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(g0)}}class w3 extends Jo{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new b3}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class S3 extends bd{constructor(){super(new md(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rc extends Jo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new S3}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class la{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class M3 extends ws{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Vi.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(u=>{t&&t(u),s.manager.itemEnd(e)}).catch(u=>{r&&r(u)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(u){return Vi.add(e,u),t&&t(u),s.manager.itemEnd(e),u}).catch(function(u){r&&r(u),Vi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Vi.add(e,l),s.manager.itemStart(e)}}const wd="\\[\\]\\.:\\/",T3=new RegExp("["+wd+"]","g"),Sd="[^"+wd+"]",E3="[^"+wd.replace("\\.","")+"]",A3=/((?:WC+[\/:])*)/.source.replace("WC",Sd),R3=/(WCOD+)?/.source.replace("WCOD",E3),C3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sd),I3=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sd),$3=new RegExp("^"+A3+R3+C3+I3+"$"),P3=["material","materials","bones","map"];class L3{constructor(e,t,i){const r=i||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Rt{constructor(e,t,i){this.path=t,this.parsedPath=i||Rt.parseTrackName(t),this.node=Rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Rt.Composite(e,t,i):new Rt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(T3,"")}static parseTrackName(e){const t=$3.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);P3.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const a=e[r];if(a===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Rt.Composite=L3;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dd);function _0(n,e){if(e===fT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Sc||e===$b){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Sc)for(let a=1;a<=i;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class D3 extends ws{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new z3(t)}),this.register(function(t){return new B3(t)}),this.register(function(t){return new K3(t)}),this.register(function(t){return new Y3(t)}),this.register(function(t){return new Z3(t)}),this.register(function(t){return new H3(t)}),this.register(function(t){return new V3(t)}),this.register(function(t){return new G3(t)}),this.register(function(t){return new W3(t)}),this.register(function(t){return new k3(t)}),this.register(function(t){return new q3(t)}),this.register(function(t){return new F3(t)}),this.register(function(t){return new j3(t)}),this.register(function(t){return new X3(t)}),this.register(function(t){return new U3(t)}),this.register(function(t){return new J3(t)}),this.register(function(t){return new Q3(t)})}load(e,t,i,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const u=la.extractUrlBase(e);a=la.resolveURL(u,this.path)}else a=la.extractUrlBase(e);this.manager.itemStart(e);const o=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},l=new rw(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{s.parse(u,a,function(c){t(c),s.manager.itemEnd(e)},o)}catch(c){o(c)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===sw){try{a[ft.KHR_BINARY_GLTF]=new eI(e)}catch(d){r&&r(d);return}s=JSON.parse(a[ft.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new fI(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const d=this.pluginCallbacks[c](u);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const d=s.extensionsUsed[c],h=s.extensionsRequired||[];switch(d){case ft.KHR_MATERIALS_UNLIT:a[d]=new O3;break;case ft.KHR_DRACO_MESH_COMPRESSION:a[d]=new tI(s,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:a[d]=new nI;break;case ft.KHR_MESH_QUANTIZATION:a[d]=new iI;break;default:h.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}u.setExtensions(a),u.setPlugins(o),u.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function N3(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class U3{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let u;const c=new Ye(16777215);l.color!==void 0&&c.setRGB(l.color[0],l.color[1],l.color[2],rn);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new Rc(c),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new w3(c),u.distance=d;break;case"spot":u=new x3(c),u.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),u.decay=2,ki(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(u),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class O3{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return Hi}extendParams(e,t,i){const r=[];e.color=new Ye(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],rn),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,nn))}return Promise.all(r)}}class k3{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class z3{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ai}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new dt(o,o)}return Promise.all(s)}}class B3{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ai}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class F3{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ai}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class H3{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ai}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ye(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],rn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,nn)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class V3{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ai}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class G3{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ai}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ye().setRGB(o[0],o[1],o[2],rn),Promise.all(s)}}class W3{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ai}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class q3{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ai}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ye().setRGB(o[0],o[1],o[2],rn),a.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,nn)),Promise.all(s)}}class X3{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ai}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class j3{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ai}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class K3{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class Y3{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const u=i.options.manager.getHandler(o.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Z3{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const u=i.options.manager.getHandler(o.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class J3{constructor(e){this.name=ft.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=r.byteOffset||0,u=r.byteLength||0,c=r.count,d=r.byteStride,h=new Uint8Array(o,l,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(c,d,h,r.mode,r.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(c*d);return a.decodeGltfBuffer(new Uint8Array(f),c,d,h,r.mode,r.filter),f})})}else return null}}class Q3{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const u of r.primitives)if(u.mode!==In.TRIANGLES&&u.mode!==In.TRIANGLE_STRIP&&u.mode!==In.TRIANGLE_FAN&&u.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const u in a)o.push(this.parser.getDependency("accessor",a[u]).then(c=>(l[u]=c,l[u])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(u=>{const c=u.pop(),d=c.isGroup?c.children:[c],h=u[0].count,f=[];for(const g of d){const y=new lt,_=new H,p=new Mi,x=new H(1,1,1),b=new e3(g.geometry,g.material,h);for(let w=0;w<h;w++)l.TRANSLATION&&_.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,w),l.SCALE&&x.fromBufferAttribute(l.SCALE,w),b.setMatrixAt(w,y.compose(_,p,x));for(const w in l)if(w==="_COLOR_0"){const R=l[w];b.instanceColor=new Ec(R.array,R.itemSize,R.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&g.geometry.setAttribute(w,l[w]);Bt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return c.isGroup?(c.clear(),c.add(...f),c):f[0]}))}}const sw="glTF",Js=12,y0={JSON:1313821514,BIN:5130562};class eI{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Js),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sw)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Js,s=new DataView(e,Js);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===y0.JSON){const u=new Uint8Array(e,Js+a,o);this.content=i.decode(u)}else if(l===y0.BIN){const u=Js+a;this.body=e.slice(u,u+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class tI{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},u={};for(const c in a){const d=Cc[c]||c.toLowerCase();o[d]=a[c]}for(const c in e.attributes){const d=Cc[c]||c.toLowerCase();if(a[c]!==void 0){const h=i.accessors[e.attributes[c]],f=ss[h.componentType];u[d]=f.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(c){return new Promise(function(d,h){r.decodeDracoFile(c,function(f){for(const g in f.attributes){const y=f.attributes[g],_=l[g];_!==void 0&&(y.normalized=_)}d(f)},o,u,rn,h)})})}}class nI{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class iI{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}}class aw extends _a{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=i[s+a];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,u=o*3,c=r-t,d=(i-t)/c,h=d*d,f=h*d,g=e*u,y=g-u,_=-2*f+3*h,p=f-h,x=1-_,b=p-h+d;for(let w=0;w!==o;w++){const R=a[y+w+o],E=a[y+w+l]*c,I=a[g+w+o],T=a[g+w]*c;s[w]=x*R+b*E+_*I+p*T}return s}}const rI=new Mi;class sI extends aw{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return rI.fromArray(s).normalize().toArray(s),s}}const In={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ss={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},v0={9728:hn,9729:Sn,9984:wb,9985:Mo,9986:na,9987:bi},x0={33071:Fi,33648:Oo,10497:cs},tc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},aI={CUBICSPLINE:void 0,LINEAR:hs,STEP:fa},nc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function oI(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Bi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ri})),n.DefaultMaterial}function pr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ki(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function lI(n,e,t){let i=!1,r=!1,s=!1;for(let u=0,c=e.length;u<c;u++){const d=e[u];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const a=[],o=[],l=[];for(let u=0,c=e.length;u<c;u++){const d=e[u];if(i){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;a.push(h)}if(r){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;o.push(h)}if(s){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(u){const c=u[0],d=u[1],h=u[2];return i&&(n.morphAttributes.position=c),r&&(n.morphAttributes.normal=d),s&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function uI(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cI(n){let e;const t=n.extensions&&n.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ic(t.attributes):e=n.indices+":"+ic(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+ic(n.targets[i]);return e}function ic(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Ic(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dI(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const hI=new lt;class fI{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new N3,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new _3(this.options.manager):this.textureLoader=new M3(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rw(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};return pr(s,o,r),ki(o,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[u,c]of a.children.entries())s(c,o.children[u])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){i.load(la.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=tc[r.type],o=ss[r.componentType],l=r.normalized===!0,u=new o(r.count*a);return Promise.resolve(new fn(u,a,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=tc[r.type],u=ss[r.componentType],c=u.BYTES_PER_ELEMENT,d=c*l,h=r.byteOffset||0,f=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let y,_;if(f&&f!==d){const p=Math.floor(h/f),x="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let b=t.cache.get(x);b||(y=new u(o,p*f,r.count*f/c),b=new KC(y,f/c),t.cache.add(x,b)),_=new _d(b,l,h%f/c,g)}else o===null?y=new u(r.count*l):y=new u(o,h,r.count*l),_=new fn(y,l,g);if(r.sparse!==void 0){const p=tc.SCALAR,x=ss[r.sparse.indices.componentType],b=r.sparse.indices.byteOffset||0,w=r.sparse.values.byteOffset||0,R=new x(a[1],b,r.sparse.count*p),E=new u(a[2],w,r.sparse.count*l);o!==null&&(_=new fn(_.array.slice(),_.itemSize,_.normalized));for(let I=0,T=R.length;I<T;I++){const C=R[I];if(_.setX(C,E[I*l]),l>=2&&_.setY(C,E[I*l+1]),l>=3&&_.setZ(C,E[I*l+2]),l>=4&&_.setW(C,E[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return _})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,i).then(function(c){c.flipY=!1,c.name=a.name||o.name||"",c.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(c.name=o.uri);const h=(s.samplers||{})[a.sampler]||{};return c.magFilter=v0[h.magFilter]||Sn,c.minFilter=v0[h.minFilter]||bi,c.wrapS=x0[h.wrapS]||cs,c.wrapT=x0[h.wrapT]||cs,r.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",u=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(d){u=!0;const h=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(l).then(function(d){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(y){const _=new tn(y);_.needsUpdate=!0,h(_)}),t.load(la.resolveURL(d,s.path),g,void 0,f)})}).then(function(d){return u===!0&&o.revokeObjectURL(l),d.userData.mimeType=a.mimeType||dI(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=c,c}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[ft.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new tw,ii.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new ew,ii.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(r||s||a){let o="ClonedMaterial:"+i.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Bi}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let a;const o={},l=s.extensions||{},u=[];if(l[ft.KHR_MATERIALS_UNLIT]){const d=r[ft.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),u.push(d.extendParams(o,s,t))}else{const d=s.pbrMetallicRoughness||{};if(o.color=new Ye(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],rn),o.opacity=h[3]}d.baseColorTexture!==void 0&&u.push(t.assignTexture(o,"map",d.baseColorTexture,nn)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),u.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Vn);const c=s.alphaMode||nc.OPAQUE;if(c===nc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,c===nc.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Hi&&(u.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new dt(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&a!==Hi&&(u.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Hi){const d=s.emissiveFactor;o.emissive=new Ye().setRGB(d[0],d[1],d[2],rn)}return s.emissiveTexture!==void 0&&a!==Hi&&u.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,nn)),Promise.all(u).then(function(){const d=new a(o);return s.name&&(d.name=s.name),ki(d,s),t.associations.set(d,{materials:e}),s.extensions&&pr(r,d,s),d})}createUniqueName(e){const t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(o){return i[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return b0(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const u=e[o],c=cI(u),d=r[c];if(d)a.push(d.promise);else{let h;u.extensions&&u.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?h=s(u):h=b0(new Pn,u,t),r[c]={primitive:u,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,u=a.length;l<u;l++){const c=a[l].material===void 0?oI(this.cache):this.getDependency("material",a[l].material);o.push(c)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const u=l.slice(0,l.length-1),c=l[l.length-1],d=[];for(let f=0,g=c.length;f<g;f++){const y=c[f],_=a[f];let p;const x=u[f];if(_.mode===In.TRIANGLES||_.mode===In.TRIANGLE_STRIP||_.mode===In.TRIANGLE_FAN||_.mode===void 0)p=s.isSkinnedMesh===!0?new ZC(y,x):new jt(y,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),_.mode===In.TRIANGLE_STRIP?p.geometry=_0(p.geometry,$b):_.mode===In.TRIANGLE_FAN&&(p.geometry=_0(p.geometry,Sc));else if(_.mode===In.LINES)p=new t3(y,x);else if(_.mode===In.LINE_STRIP)p=new vd(y,x);else if(_.mode===In.LINE_LOOP)p=new n3(y,x);else if(_.mode===In.POINTS)p=new i3(y,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+_.mode);Object.keys(p.geometry.morphAttributes).length>0&&uI(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),ki(p,s),_.extensions&&pr(r,p,_),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&pr(r,d[0],s),d[0];const h=new ni;s.extensions&&pr(r,h,s),t.associations.set(h,{meshes:e});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new dn(ia.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new md(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ki(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),a=r,o=[],l=[];for(let u=0,c=a.length;u<c;u++){const d=a[u];if(d){o.push(d);const h=new lt;s!==null&&h.fromArray(s.array,u*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new yd(o,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],u=[],c=[];for(let d=0,h=r.channels.length;d<h;d++){const f=r.channels[d],g=r.samplers[f.sampler],y=f.target,_=y.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,x=r.parameters!==void 0?r.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",_)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),u.push(g),c.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(u),Promise.all(c)]).then(function(d){const h=d[0],f=d[1],g=d[2],y=d[3],_=d[4],p=[];for(let x=0,b=h.length;x<b;x++){const w=h[x],R=f[x],E=g[x],I=y[x],T=_[x];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const C=i._createAnimationTracks(w,R,E,I,T);if(C)for(let A=0;A<C.length;A++)p.push(C[A])}return new c3(s,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,u=r.weights.length;l<u;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),a=[],o=r.children||[];for(let u=0,c=o.length;u<c;u++)a.push(i.getDependency("node",o[u]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(u){const c=u[0],d=u[1],h=u[2];h!==null&&c.traverse(function(f){f.isSkinnedMesh&&f.bind(h,hI)});for(let f=0,g=d.length;f<g;f++)c.add(d[f]);return c})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){o.push(u)}),this.nodeCache[e]=Promise.all(o).then(function(u){let c;if(s.isBone===!0?c=new Jb:u.length>1?c=new ni:u.length===1?c=u[0]:c=new Bt,c!==u[0])for(let d=0,h=u.length;d<h;d++)c.add(u[d]);if(s.name&&(c.userData.name=s.name,c.name=a),ki(c,s),s.extensions&&pr(i,c,s),s.matrix!==void 0){const d=new lt;d.fromArray(s.matrix),c.applyMatrix4(d)}else s.translation!==void 0&&c.position.fromArray(s.translation),s.rotation!==void 0&&c.quaternion.fromArray(s.rotation),s.scale!==void 0&&c.scale.fromArray(s.scale);return r.associations.has(c)||r.associations.set(c,{}),r.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new ni;i.name&&(s.name=r.createUniqueName(i.name)),ki(s,i),i.extensions&&pr(t,s,i);const a=i.nodes||[],o=[];for(let l=0,u=a.length;l<u;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let c=0,d=l.length;c<d;c++)s.add(l[c]);const u=c=>{const d=new Map;for(const[h,f]of r.associations)(h instanceof ii||h instanceof tn)&&d.set(h,f);return c.traverse(h=>{const f=r.associations.get(h);f!=null&&d.set(h,f)}),d};return r.associations=u(s),s})}_createAnimationTracks(e,t,i,r,s){const a=[],o=e.name?e.name:e.uuid,l=[];Ui[s.path]===Ui.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(o);let u;switch(Ui[s.path]){case Ui.weights:u=ms;break;case Ui.rotation:u=Rr;break;case Ui.position:case Ui.scale:u=gs;break;default:switch(i.itemSize){case 1:u=ms;break;case 2:case 3:default:u=gs;break}break}const c=r.interpolation!==void 0?aI[r.interpolation]:hs,d=this._getArrayFromAccessor(i);for(let h=0,f=l.length;h<f;h++){const g=new u(l[h]+"."+Ui[s.path],t.array,d,c);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Ic(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Rr?sI:aw;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function pI(n,e,t){const i=e.attributes,r=new Ti;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,u=o.max;if(l!==void 0&&u!==void 0){if(r.set(new H(l[0],l[1],l[2]),new H(u[0],u[1],u[2])),o.normalized){const c=Ic(ss[o.componentType]);r.min.multiplyScalar(c),r.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new H,l=new H;for(let u=0,c=s.length;u<c;u++){const d=s[u];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){const y=Ic(ss[h.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}n.boundingBox=r;const a=new si;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=a}function b0(n,e,t){const i=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(const a in i){const o=Cc[a]||a.toLowerCase();o in n.attributes||r.push(s(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});r.push(a)}return Tt.workingColorSpace!==rn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Tt.workingColorSpace}" not supported.`),ki(n,e),pI(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?lI(n,e.targets,t):n})}class mI{constructor(){this.geometry=new Zo(.55,.7,1.4,16,1,!1),this.material=new Hi({colorWrite:!1,depthWrite:!0,depthTest:!0})}create(e,t,i){const r=new jt(this.geometry,this.material);r.renderOrder=-1,r.name="ankleOccluder";const s=new H().subVectors(t,e).normalize(),a=new H().copy(e).addScaledVector(s,i*.25);return a.y+=i*.35,r.position.copy(a),r.scale.set(i*.35,i*.9,i*.35),r.updateMatrixWorld(!0),r}dispose(){this.geometry.dispose(),this.material.dispose()}}class w0{constructor(){this.y=null,this.s=null}filter(e,t){return this.s=this.y===null?e:t*e+(1-t)*this.s,this.y=this.s,this.s}get last(){return this.y}reset(){this.y=null,this.s=null}}class Eo{constructor({minCutoff:e=1,beta:t=.007,dCutoff:i=1}={}){this.minCutoff=e,this.beta=t,this.dCutoff=i,this.xFilter=new w0,this.dxFilter=new w0,this.lastTime=null}_alpha(e,t){return 1/(1+1/(2*Math.PI*e)/t)}filter(e,t=performance.now()/1e3){let i=this.lastTime==null?.016666666666666666:t-this.lastTime;i<=0&&(i=1/60),this.lastTime=t;const r=this.xFilter.last??e,s=(e-r)/i,a=this.dxFilter.filter(s,this._alpha(this.dCutoff,i)),o=this.minCutoff+this.beta*Math.abs(a);return this.xFilter.filter(e,this._alpha(o,i))}reset(){this.xFilter.reset(),this.dxFilter.reset(),this.lastTime=null}}class S0{constructor(e){this.fx=new Eo(e),this.fy=new Eo(e),this.fz=new Eo(e)}filter(e,t,i,r){return[this.fx.filter(e,r),this.fy.filter(t,r),this.fz.filter(i,r)]}reset(){this.fx.reset(),this.fy.reset(),this.fz.reset()}}class gI{constructor(e){this.f=[0,1,2,3].map(()=>new Eo(e))}filter(e,t,i,r,s){let a=this.f[0].filter(e,s),o=this.f[1].filter(t,s),l=this.f[2].filter(i,s),u=this.f[3].filter(r,s);const c=Math.hypot(a,o,l,u)||1;return[a/c,o/c,l/c,u/c]}reset(){this.f.forEach(e=>e.reset())}}class M0{constructor(){const e={minCutoff:1.2,beta:.01,dCutoff:1};this.pos=new S0(e),this.scale=new S0(e),this.quat=new gI(e)}reset(){this.pos.reset(),this.scale.reset(),this.quat.reset()}}const _I="/shoes/shoe.glb";class yI{constructor(e){this.container=e,this.width=window.innerWidth,this.height=window.innerHeight,this.renderer=new XC({alpha:!0,antialias:!0,premultipliedAlpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.width,this.height),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=nn,this.renderer.shadowMap.enabled=!1,e.appendChild(this.renderer.domElement),this.scene=new jC,this.camera=new dn(60,this.width/this.height,.05,100),this.camera.position.set(0,1.55,.15),this.setTilt(-50);const t=new y3(16777215,3355443,1.1);t.position.set(0,5,0),this.scene.add(t);const i=new Rc(16777215,1.6);i.position.set(2.5,6,3),this.scene.add(i);const r=new Rc(11189247,.4);r.position.set(-3,2,-2),this.scene.add(r),this.rightFootAnchor=new ni,this.rightFootAnchor.name="rightFootAnchor",this.scene.add(this.rightFootAnchor),this.leftFootAnchor=new ni,this.leftFootAnchor.name="leftFootAnchor",this.scene.add(this.leftFootAnchor),this.filters={left:new M0,right:new M0},this.occluderFactory=new mI,this.rightOccluder=null,this.leftOccluder=null,this.rightShoe=null,this.leftShoe=null,this._loadShoe(),this._onResize=this._onResize.bind(this),window.addEventListener("resize",this._onResize),this._frames=0,this._lastFpsT=performance.now(),this.fps=0}setTilt(e){this.camera.rotation.set(ia.degToRad(e),0,0,"YXZ"),this._tiltDeg=e}async _loadShoe(){const e=new D3;return new Promise(t=>{e.load(_I,i=>{const r=i.scene;this._prepareShoeRoot(r);const s=r.clone(!0);this._prepareShoeRoot(s),this.rightShoe=s,this.rightFootAnchor.add(s);const a=r.clone(!0);this._prepareShoeRoot(a),a.scale.x=-1,this._fixMirroredMaterials(a),this.leftShoe=a,this.leftFootAnchor.add(a),this._buildOccluders(),t()},void 0,i=>{console.warn("shoe.glb failed to load — using procedural fallback.",i),this._buildProceduralFallback(),t()})})}_prepareShoeRoot(e){e.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0,t.material&&(t.material.side=t.material.side??ri,t.material.map&&(t.material.map.colorSpace=nn),t.material.needsUpdate=!0),t.frustumCulled=!1)})}_fixMirroredMaterials(e){e.traverse(t=>{if(!t.isMesh)return;const i=Array.isArray(t.material)?t.material:[t.material];for(const r of i)r&&(r.side=Vn,r.needsUpdate=!0);t.geometry&&t.geometry.computeVertexNormals()})}_buildProceduralFallback(){const e=()=>{const r=new ni,s=new qi(.28,.06,.72);s.translate(0,.03,.05);const a=new Bi({color:15921906,roughness:.55});r.add(new jt(s,a));const o=new qi(.26,.16,.62);o.translate(0,.14,.02);const l=new Bi({color:1710622,roughness:.7});r.add(new jt(o,l));const u=new xd(.14,16,12);u.scale(.95,.55,1.1),u.translate(0,.11,-.28);const c=new Bi({color:14540253,roughness:.5});r.add(new jt(u,c));const d=new Zo(.1,.11,.1,16);d.translate(0,.25,.28);const h=new Bi({color:2763312,roughness:.6});r.add(new jt(d,h));const f=new qi(.28,.02,.3);f.translate(0,.12,0);const g=new Bi({color:5217791,roughness:.4}),y=new jt(f,g);return y.rotation.z=.15,r.add(y),r.traverse(_=>{_.isMesh&&(_.castShadow=!0)}),r},t=e();this.rightShoe=t,this.rightFootAnchor.add(t);const i=e();i.scale.x=-1,this._fixMirroredMaterials(i),this.leftShoe=i,this.leftFootAnchor.add(i),this._buildOccluders()}_buildOccluders(){this._removeOccluders();const e=.75;this.rightOccluder=this.occluderFactory.create(new H(0,0,.35),new H(0,0,-.35),e),this.leftOccluder=this.occluderFactory.create(new H(0,0,.35),new H(0,0,-.35),e),this.rightFootAnchor.add(this.rightOccluder),this.leftFootAnchor.add(this.leftOccluder)}_removeOccluders(){this.rightOccluder&&(this.rightFootAnchor.remove(this.rightOccluder),this.rightOccluder=null),this.leftOccluder&&(this.leftFootAnchor.remove(this.leftOccluder),this.leftOccluder=null)}updateFoot(e,t,i,r,s){if(!t){e.visible=!1;return}e.visible=!0;const{srcW:a,srcH:o}=i,l=_e=>({x:_e[0]/a*2-1,y:-(_e[1]/o*2-1)}),u=l(t.heel),c=l(t.toeFront),d=-1.05,h=new ga,f=this.camera,g=new H,y=new H,_=_e=>{g.set(_e.x,_e.y,.5),g.unproject(f),y.copy(g).sub(f.position).normalize(),h.set(f.position,y);const We=(d-h.origin.y)/h.direction.y;return new H().copy(h.origin).addScaledVector(h.direction,We)},p=_(u),x=_(c),b=new H().addVectors(p,x).multiplyScalar(.5);new H().subVectors(x,p);const w=Math.hypot(t.toeFront[0]-t.heel[0],t.toeFront[1]-t.heel[1]);let R=120,E=new H(1,0,0);if(t.leftmost&&t.rightmost){const _e=t.rightmost[0]-t.leftmost[0],We=t.rightmost[1]-t.leftmost[1];R=Math.hypot(_e,We),E.set(_e,We,0).normalize()}const I=300,T=.75,C=ia.clamp(w/I*T,.25,2.2),A=ia.clamp(R/I*T,.15,2.2),k=C/T,F=A/T,U=t.toeFront[0]-t.heel[0],D=t.toeFront[1]-t.heel[1],z=U,K=-D,q=Math.atan2(z,K),G=Math.atan2(t.rightmost&&t.leftmost?t.rightmost[1]-t.leftmost[1]:0,Math.max(1,R))*.35,ie=w/Math.max(R,1),te=ia.clamp((1.4-ie)*.25,-.4,.4),Y=new Xn(te,q,G,"YXZ"),oe=new Mi().setFromEuler(Y),de=this.filters[r],[B,ue,Te]=de.pos.filter(b.x,b.y,b.z,s),[me,Ne,De]=de.scale.filter(F,1,k,s),[j,ze,be,Ve]=de.quat.filter(oe.x,oe.y,oe.z,oe.w,s);e.position.set(B,ue,Te),e.scale.set(me,Ne,De),e.quaternion.set(j,ze,be,Ve)}resetFilters(){this.filters.left.reset(),this.filters.right.reset()}update(e,t,i){e?(this.updateFoot(this.leftFootAnchor,e.left,t,"left",i),this.updateFoot(this.rightFootAnchor,e.right,t,"right",i)):(this.leftFootAnchor.visible=!1,this.rightFootAnchor.visible=!1),this.renderer.render(this.scene,this.camera),this._frames++;const r=performance.now();r-this._lastFpsT>=500&&(this.fps=Math.round(this._frames*1e3/(r-this._lastFpsT)),this._frames=0,this._lastFpsT=r)}_onResize(){this.width=window.innerWidth,this.height=window.innerHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}dispose(){window.removeEventListener("resize",this._onResize),this.renderer.dispose(),this.occluderFactory.dispose()}}const bt={detector:new yM,scene:null,running:!1,viewport:{srcW:1280,srcH:720},lastDetections:null,mockMode:!1},$r=n=>document.getElementById(n),vI=$r("dbg-fps"),T0=$r("dbg-det"),xI=$r("dbg-tilt"),E0=$r("dbg-landmarks"),bI=$r("tilt-slider"),ow=$r("btn-debug"),ua=$r("btn-mock");function wI(n){document.getElementById("debug-overlay").classList.toggle("hidden",!n),ow.classList.toggle("active",n)}ow.addEventListener("click",()=>{const n=document.getElementById("debug-overlay");wI(n.classList.contains("hidden"))});ua.addEventListener("click",()=>{bt.mockMode=!bt.mockMode,bt.detector.setMockMode(bt.mockMode),ua.textContent=`Mock: ${bt.mockMode?"ON":"OFF"}`,ua.classList.toggle("active",bt.mockMode),bt.scene.resetFilters()});bI.addEventListener("input",n=>{const e=Number(n.target.value);xI.textContent=`${e}°`,bt.scene.setTilt(e)});document.querySelectorAll(".shoe-chip").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".shoe-chip").forEach(t=>t.classList.remove("active")),n.classList.add("active");const e=bt.scene?.rightShoe?.children?.[1]?.material;if(e&&e.color){const i={default:1710622,hightop:11549230,runner:3046706}[n.dataset.shoe]??1710622;e.color.setHex(i);const r=bt.scene?.leftShoe?.children?.[1]?.material;r?.color&&r.color.setHex(i)}})});async function SI(){bt.scene=new yI(document.getElementById("three-root"));try{await bt.detector.init()}catch(n){console.error("Model init failed:",n)}try{await bt.detector.setupCamera(),bt.viewport.srcW=bt.detector.video.videoWidth||1280,bt.viewport.srcH=bt.detector.video.videoHeight||720}catch(n){console.warn("Camera unavailable, entering mock mode automatically:",n),bt.mockMode=!0,bt.detector.setMockMode(!0),ua.textContent="Mock: ON",ua.classList.add("active")}bt.running=!0,requestAnimationFrame($c)}let A0=0;const MI=1e3/30;function $c(){if(!bt.running)return;const n=performance.now(),e=n/1e3,t=()=>requestAnimationFrame($c);n-A0>=MI?(A0=n,bt.detector.detect().then(i=>{bt.lastDetections=i,i&&(bt.viewport.srcW=i.srcW,bt.viewport.srcH=i.srcH),bt.scene.update(i,bt.viewport,e),TI(i),t()}).catch(i=>{console.error("Detection error:",i),bt.scene.update(null,bt.viewport,e),t()})):(bt.scene.update(bt.lastDetections,bt.viewport,e),requestAnimationFrame($c))}function TI(n){if(document.getElementById("debug-overlay").classList.contains("hidden"))return;if(vI.textContent=bt.scene.fps,!n){T0.textContent="none",E0.textContent="";return}const e=n.left?n.left.visibleCount:0,t=n.right?n.right.visibleCount:0;T0.textContent=`L:${e}/8  R:${t}/8`;let i="";for(const r of["left","right"]){const s=n[r];if(!s){i+=`${r.toUpperCase()}: —
`;continue}const a=Object.entries(s.keypoints).map(([o,l])=>`${_M[o]}(${l[0].toFixed(0)},${l[1].toFixed(0)})`);i+=`${r.toUpperCase()} (conf ${s.confidence.toFixed(2)}):
`;for(const o of a)i+=`  ${o}
`}E0.textContent=i}SI();
