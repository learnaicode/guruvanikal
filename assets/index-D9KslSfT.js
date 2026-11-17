var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t,n,r,i,a,o,s,c,l,u={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},d={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},f=1e3,p=1001,m=1002,h=1003,g=1004,_=1005,v=1006,y=1007,b=1008,x=1009,S=1010,C=1011,w=1012,T=1013,E=1014,D=1015,O=1016,k=1017,A=1018,ee=1020,te=35902,j=35899,ne=1021,M=1022,re=1023,ie=1026,ae=1027,oe=1028,se=1029,ce=1030,le=1031,ue=1033,N=33776,de=33777,fe=33778,pe=33779,me=35840,he=35841,ge=35842,_e=35843,ve=36196,ye=37492,be=37496,xe=37488,Se=37489,Ce=37490,we=37491,Te=37808,Ee=37809,De=37810,Oe=37811,ke=37812,Ae=37813,je=37814,Me=37815,Ne=37816,Pe=37817,P=37818,Fe=37819,Ie=37820,Le=37821,F=36492,Re=36494,I=36495,ze=36283,Be=36284,Ve=36285,He=36286,Ue=2300,We=2301,Ge=2302,Ke=2303,qe=2400,Je=2401,Ye=2402,Xe=3200,Ze=`srgb`,Qe=`srgb-linear`,$e=`linear`,et=`srgb`,tt=7680,nt=35044,rt=2e3;function it(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function at(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ot(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function st(){let e=ot(`canvas`);return e.style.display=`block`,e}var ct={};function lt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function ut(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=ut(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function R(...e){e=ut(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function dt(...e){let t=e.join(` `);t in ct||(ct[t]=!0,L(...e))}function ft(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var pt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},mt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ht=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),gt=1234567,_t=Math.PI/180,vt=180/Math.PI;function yt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ht[e&255]+ht[e>>8&255]+ht[e>>16&255]+ht[e>>24&255]+`-`+ht[t&255]+ht[t>>8&255]+`-`+ht[t>>16&15|64]+ht[t>>24&255]+`-`+ht[n&63|128]+ht[n>>8&255]+`-`+ht[n>>16&255]+ht[n>>24&255]+ht[r&255]+ht[r>>8&255]+ht[r>>16&255]+ht[r>>24&255]).toLowerCase()}function z(e,t,n){return Math.max(t,Math.min(n,e))}function bt(e,t){return(e%t+t)%t}function xt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function St(e,t,n){return e===t?0:(n-e)/(t-e)}function Ct(e,t,n){return(1-n)*e+n*t}function wt(e,t,n,r){return Ct(e,t,1-Math.exp(-n*r))}function Tt(e,t=1){return t-Math.abs(bt(e,t*2)-t)}function Et(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Dt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Ot(e,t){return e+Math.floor(Math.random()*(t-e+1))}function kt(e,t){return e+Math.random()*(t-e)}function At(e){return e*(.5-Math.random())}function jt(e){e!==void 0&&(gt=e);let t=gt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mt(e){return e*_t}function Nt(e){return e*vt}function Pt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Ft(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function It(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Lt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:L(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Rt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function zt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Bt={DEG2RAD:_t,RAD2DEG:vt,generateUUID:yt,clamp:z,euclideanModulo:bt,mapLinear:xt,inverseLerp:St,lerp:Ct,damp:wt,pingpong:Tt,smoothstep:Et,smootherstep:Dt,randInt:Ot,randFloat:kt,randFloatSpread:At,seededRandom:jt,degToRad:Mt,radToDeg:Nt,isPowerOfTwo:Pt,ceilPowerOfTwo:Ft,floorPowerOfTwo:It,setQuaternionFromProperEuler:Lt,normalize:zt,denormalize:Rt};s=Symbol.iterator;var B=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[s](){yield this.x,yield this.y}};t=B,t.prototype.isVector2=!0;var Vt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(z(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};c=Symbol.iterator;var V=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ut.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ut.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ht.copy(this).projectOnVector(e),this.sub(Ht)}reflect(e){return this.sub(Ht.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[c](){yield this.x,yield this.y,yield this.z}};n=V,n.prototype.isVector3=!0;var Ht=new V,Ut=new Vt,H=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return dt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Wt.makeScale(e,t)),this}rotate(e){return dt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Wt.makeRotation(-e)),this}translate(e,t){return dt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Wt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};r=H,r.prototype.isMatrix3=!0;var Wt=new H,Gt=new H().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kt=new H().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qt(){let e={enabled:!0,workingColorSpace:Qe,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Yt(e.r),e.g=Yt(e.g),e.b=Yt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Xt(e.r),e.g=Xt(e.g),e.b=Xt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?$e:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return dt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return dt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Qe]:{primaries:t,whitePoint:r,transfer:$e,toXYZ:Gt,fromXYZ:Kt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:r,transfer:et,toXYZ:Gt,fromXYZ:Kt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),e}var Jt=qt();function Yt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Xt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Zt,Qt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zt===void 0&&(Zt=ot(`canvas`)),Zt.width=e.width,Zt.height=e.height;let t=Zt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Zt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=ot(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Yt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Yt(t[e]/255)*255):t[e]=Yt(t[e]);return{data:t,width:e.width,height:e.height}}return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},$t=0,en=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$t++}),this.uuid=yt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(tn(r[t].image)):e.push(tn(r[t]))}else e=tn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function tn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Qt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var nn=0,rn=new V,an=class e extends mt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=p,i=p,a=v,o=b,s=re,c=x,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nn++}),this.uuid=yt(),this.name=``,this.source=new en(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rn).x}get height(){return this.source.getSize(rn).y}get depth(){return this.source.getSize(rn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case f:e.x-=Math.floor(e.x);break;case p:e.x=e.x<0?0:1;break;case m:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case f:e.y-=Math.floor(e.y);break;case p:e.y=e.y<0?0:1;break;case m:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null,an.DEFAULT_MAPPING=300,an.DEFAULT_ANISOTROPY=1,l=Symbol.iterator;var on=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this.w=z(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this.w=z(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[l](){yield this.x,yield this.y,yield this.z,yield this.w}};i=on,i.prototype.isVector4=!0;var sn=class extends mt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:v,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t),this.textures=[];let r=new an({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:v,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new en(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},cn=class extends sn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ln=class extends an{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=h,this.minFilter=h,this.wrapR=p,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},un=class extends an{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=h,this.minFilter=h,this.wrapR=p,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},dn=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/fn.setFromMatrixColumn(e,0).length(),i=1/fn.setFromMatrixColumn(e,1).length(),a=1/fn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mn,e,hn)}lookAt(e,t,n){let r=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),gn.crossVectors(n,vn),gn.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),gn.crossVectors(n,vn)),gn.normalize(),_n.crossVectors(vn,gn),r[0]=gn.x,r[4]=_n.x,r[8]=vn.x,r[1]=gn.y,r[5]=_n.y,r[9]=vn.y,r[2]=gn.z,r[6]=_n.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],te=r[14],j=r[3],ne=r[7],M=r[11],re=r[15];return i[0]=a*x+o*T+s*k+c*j,i[4]=a*S+o*E+s*A+c*ne,i[8]=a*C+o*D+s*ee+c*M,i[12]=a*w+o*O+s*te+c*re,i[1]=l*x+u*T+d*k+f*j,i[5]=l*S+u*E+d*A+f*ne,i[9]=l*C+u*D+d*ee+f*M,i[13]=l*w+u*O+d*te+f*re,i[2]=p*x+m*T+h*k+g*j,i[6]=p*S+m*E+h*A+g*ne,i[10]=p*C+m*D+h*ee+g*M,i[14]=p*w+m*O+h*te+g*re,i[3]=_*x+v*T+y*k+b*j,i[7]=_*S+v*E+y*A+b*ne,i[11]=_*C+v*D+y*ee+b*M,i[15]=_*w+v*O+y*te+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=fn.set(r[0],r[1],r[2]).length(),o=fn.set(r[4],r[5],r[6]).length(),s=fn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),pn.copy(this);let c=1/a,l=1/o,u=1/s;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=l,pn.elements[5]*=l,pn.elements[6]*=l,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,t.setFromRotationMatrix(pn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=rt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=rt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};a=dn,a.prototype.isMatrix4=!0;var fn=new V,pn=new dn,mn=new V(0,0,0),hn=new V(1,1,1),gn=new V,_n=new V,vn=new V,yn=new dn,bn=new Vt,xn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(z(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-z(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(z(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-z(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(z(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-z(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bn.setFromEuler(this),this.setFromQuaternion(bn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER=`XYZ`;var Sn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Cn=0,wn=new V,Tn=new Vt,En=new dn,Dn=new V,On=new V,kn=new V,An=new Vt,jn=new V(1,0,0),Mn=new V(0,1,0),Nn=new V(0,0,1),Pn={type:`added`},Fn={type:`removed`},In={type:`childadded`,child:null},Ln={type:`childremoved`,child:null},Rn=class e extends mt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cn++}),this.uuid=yt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new xn,r=new Vt,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new dn},normalMatrix:{value:new H}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tn.setFromAxisAngle(e,t),this.quaternion.multiply(Tn),this}rotateOnWorldAxis(e,t){return Tn.setFromAxisAngle(e,t),this.quaternion.premultiply(Tn),this}rotateX(e){return this.rotateOnAxis(jn,e)}rotateY(e){return this.rotateOnAxis(Mn,e)}rotateZ(e){return this.rotateOnAxis(Nn,e)}translateOnAxis(e,t){return wn.copy(e).applyQuaternion(this.quaternion),this.position.add(wn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jn,e)}translateY(e){return this.translateOnAxis(Mn,e)}translateZ(e){return this.translateOnAxis(Nn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dn.copy(e):Dn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),On.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(On,Dn,this.up):En.lookAt(Dn,On,this.up),this.quaternion.setFromRotationMatrix(En),r&&(En.extractRotation(r.matrixWorld),Tn.setFromRotationMatrix(En),this.quaternion.premultiply(Tn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(R(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pn),In.child=e,this.dispatchEvent(In),In.child=null):R(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fn),Ln.child=e,this.dispatchEvent(Ln),Ln.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pn),In.child=e,this.dispatchEvent(In),In.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(On,e,kn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(On,An,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Rn.DEFAULT_UP=new V(0,1,0),Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=class extends Rn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Bn={type:`move`},Vn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Hn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},Wn={h:0,s:0,l:0};function Gn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var U=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Jt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Jt.workingColorSpace){if(e=bt(e,1),t=z(t,0,1),n=z(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Gn(i,r,e+1/3),this.g=Gn(i,r,e),this.b=Gn(i,r,e-1/3)}return Jt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ze){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ze){let n=Hn[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yt(e.r),this.g=Yt(e.g),this.b=Yt(e.b),this}copyLinearToSRGB(e){return this.r=Xt(e.r),this.g=Xt(e.g),this.b=Xt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ze){return Jt.workingToColorSpace(Kn.copy(this),e),Math.round(z(Kn.r*255,0,255))*65536+Math.round(z(Kn.g*255,0,255))*256+Math.round(z(Kn.b*255,0,255))}getHexString(e=Ze){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jt.workingColorSpace){Jt.workingToColorSpace(Kn.copy(this),t);let n=Kn.r,r=Kn.g,i=Kn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Jt.workingColorSpace){return Jt.workingToColorSpace(Kn.copy(this),t),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=Ze){Jt.workingToColorSpace(Kn.copy(this),e);let t=Kn.r,n=Kn.g,r=Kn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(Wn);let n=Ct(Un.h,Wn.h,t),r=Ct(Un.s,Wn.s,t),i=Ct(Un.l,Wn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kn=new U;U.NAMES=Hn;var qn=class extends Rn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Jn=new V,Yn=new V,Xn=new V,Zn=new V,Qn=new V,$n=new V,er=new V,tr=new V,nr=new V,rr=new V,ir=new on,ar=new on,or=new on,sr=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Jn.subVectors(e,t),r.cross(Jn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Jn.subVectors(r,t),Yn.subVectors(n,t),Xn.subVectors(e,t);let a=Jn.dot(Jn),o=Jn.dot(Yn),s=Jn.dot(Xn),c=Yn.dot(Yn),l=Yn.dot(Xn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zn)!==null&&Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Zn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Zn.x),s.addScaledVector(a,Zn.y),s.addScaledVector(o,Zn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return ir.setScalar(0),ar.setScalar(0),or.setScalar(0),ir.fromBufferAttribute(e,t),ar.fromBufferAttribute(e,n),or.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ir,i.x),a.addScaledVector(ar,i.y),a.addScaledVector(or,i.z),a}static isFrontFacing(e,t,n,r){return Jn.subVectors(n,t),Yn.subVectors(e,t),Jn.cross(Yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Jn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Qn.subVectors(r,n),$n.subVectors(i,n),tr.subVectors(e,n);let s=Qn.dot(tr),c=$n.dot(tr);if(s<=0&&c<=0)return t.copy(n);nr.subVectors(e,r);let l=Qn.dot(nr),u=$n.dot(nr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Qn,a);rr.subVectors(e,i);let f=Qn.dot(rr),p=$n.dot(rr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector($n,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return er.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(er,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Qn,a).addScaledVector($n,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cr=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ur.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ur.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ur.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,ur):ur.fromBufferAttribute(r,t),ur.applyMatrix4(e.matrixWorld),this.expandByPoint(ur);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),dr.copy(e.boundingBox)),dr.applyMatrix4(e.matrixWorld),this.union(dr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ur),ur.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),yr.subVectors(this.max,vr),fr.subVectors(e.a,vr),pr.subVectors(e.b,vr),mr.subVectors(e.c,vr),hr.subVectors(pr,fr),gr.subVectors(mr,pr),_r.subVectors(fr,mr);let t=[0,-hr.z,hr.y,0,-gr.z,gr.y,0,-_r.z,_r.y,hr.z,0,-hr.x,gr.z,0,-gr.x,_r.z,0,-_r.x,-hr.y,hr.x,0,-gr.y,gr.x,0,-_r.y,_r.x,0];return!Sr(t,fr,pr,mr,yr)||(t=[1,0,0,0,1,0,0,0,1],!Sr(t,fr,pr,mr,yr))?!1:(br.crossVectors(hr,gr),t=[br.x,br.y,br.z],Sr(t,fr,pr,mr,yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ur).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ur).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},lr=[new V,new V,new V,new V,new V,new V,new V,new V],ur=new V,dr=new cr,fr=new V,pr=new V,mr=new V,hr=new V,gr=new V,_r=new V,vr=new V,yr=new V,br=new V,xr=new V;function Sr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){xr.fromArray(e,a);let o=i.x*Math.abs(xr.x)+i.y*Math.abs(xr.y)+i.z*Math.abs(xr.z),s=t.dot(xr),c=n.dot(xr),l=r.dot(xr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Cr=new V,wr=new B,Tr=0,Er=class extends mt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=nt,this.updateRanges=[],this.gpuType=D,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXYZ(t,Cr.x,Cr.y,Cr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix4(e),this.setXYZ(t,Cr.x,Cr.y,Cr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyNormalMatrix(e),this.setXYZ(t,Cr.x,Cr.y,Cr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.transformDirection(e),this.setXYZ(t,Cr.x,Cr.y,Cr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rt(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rt(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rt(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Dr=class extends Er{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Or=class extends Er{constructor(e,t,n){super(new Uint32Array(e),t,n)}},kr=class extends Er{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ar=new cr,jr=new V,Mr=new V,Nr=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Ar.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);let t=jr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(jr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(Mr)),this.expandByPoint(jr.copy(e.center).sub(Mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Pr=0,Fr=new dn,Ir=new Rn,Lr=new V,Rr=new cr,zr=new cr,Br=new V,Vr=class e extends mt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pr++}),this.uuid=yt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(it(e)?Or:Dr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fr.makeRotationFromQuaternion(e),this.applyMatrix4(Fr),this}rotateX(e){return Fr.makeRotationX(e),this.applyMatrix4(Fr),this}rotateY(e){return Fr.makeRotationY(e),this.applyMatrix4(Fr),this}rotateZ(e){return Fr.makeRotationZ(e),this.applyMatrix4(Fr),this}translate(e,t,n){return Fr.makeTranslation(e,t,n),this.applyMatrix4(Fr),this}scale(e,t,n){return Fr.makeScale(e,t,n),this.applyMatrix4(Fr),this}lookAt(e){return Ir.lookAt(e),Ir.updateMatrix(),this.applyMatrix4(Ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new kr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)R(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Rr.setFromBufferAttribute(n),this.morphTargetsRelative?(Br.addVectors(this.boundingBox.min,Rr.min),this.boundingBox.expandByPoint(Br),Br.addVectors(this.boundingBox.max,Rr.max),this.boundingBox.expandByPoint(Br)):(this.boundingBox.expandByPoint(Rr.min),this.boundingBox.expandByPoint(Rr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)R(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);else if(e){let n=this.boundingSphere.center;if(Rr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];zr.setFromBufferAttribute(n),this.morphTargetsRelative?(Br.addVectors(Rr.min,zr.min),Rr.expandByPoint(Br),Br.addVectors(Rr.max,zr.max),Rr.expandByPoint(Br)):(Rr.expandByPoint(zr.min),Rr.expandByPoint(zr.max))}Rr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Br.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Br));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Br.fromBufferAttribute(a,t),o&&(Lr.fromBufferAttribute(e,t),Br.add(Lr)),r=Math.max(r,n.distanceToSquared(Br))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&R(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Er(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let c=new V,l=new V,u=new V,d=new B,f=new B,p=new B,m=new V,h=new V;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new V,y=new V,b=new V,x=new V;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Er(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Br.fromBufferAttribute(e,t),Br.normalize(),e.setXYZ(t,Br.x,Br.y,Br.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Er(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Hr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=nt,this.updateRanges=[],this.version=0,this.uuid=yt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Ur=new V,Wr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix4(e),this.setXYZ(t,Ur.x,Ur.y,Ur.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyNormalMatrix(e),this.setXYZ(t,Ur.x,Ur.y,Ur.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.transformDirection(e),this.setXYZ(t,Ur.x,Ur.y,Ur.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Rt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array),i=zt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){lt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Er(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){lt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Gr=new V,Kr=new V,qr=new H,Jr=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Gr.subVectors(n,t).cross(Kr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Gr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qr.getNormalMatrix(e),r=this.coplanarPoint(Gr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Yr=0,Xr=class extends mt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yr++}),this.uuid=yt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tt,this.stencilZFail=tt,this.stencilZPass=tt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new U().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Jr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new B().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new B().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Zr=class extends Xr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qr,$r=new V,ei=new V,ti=new V,ni=new B,ri=new B,ii=new dn,ai=new V,oi=new V,si=new V,ci=new B,li=new B,ui=new B,di=class extends Rn{constructor(e=new Zr){if(super(),this.isSprite=!0,this.type=`Sprite`,Qr===void 0){Qr=new Vr;let e=new Hr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Qr.setIndex([0,1,2,0,2,3]),Qr.setAttribute(`position`,new Wr(e,3,0,!1)),Qr.setAttribute(`uv`,new Wr(e,2,3,!1))}this.geometry=Qr,this.material=e,this.center=new B(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&R(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),ei.setFromMatrixScale(this.matrixWorld),ii.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ti.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ei.multiplyScalar(-ti.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;fi(ai.set(-.5,-.5,0),ti,a,ei,r,i),fi(oi.set(.5,-.5,0),ti,a,ei,r,i),fi(si.set(.5,.5,0),ti,a,ei,r,i),ci.set(0,0),li.set(1,0),ui.set(1,1);let o=e.ray.intersectTriangle(ai,oi,si,!1,$r);if(o===null&&(fi(oi.set(-.5,.5,0),ti,a,ei,r,i),li.set(0,1),o=e.ray.intersectTriangle(ai,si,oi,!1,$r),o===null))return;let s=e.ray.origin.distanceTo($r);s<e.near||s>e.far||t.push({distance:s,point:$r.clone(),uv:sr.getInterpolation($r,ai,oi,si,ci,li,ui,new B),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function fi(e,t,n,r,i,a){ni.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?ri.copy(ni):(ri.x=a*ni.x-i*ni.y,ri.y=i*ni.x+a*ni.y),e.copy(t),e.x+=ri.x,e.y+=ri.y,e.applyMatrix4(ii)}var pi=new V,mi=new V,hi=new V,gi=new V,_i=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){mi.copy(e).add(t).multiplyScalar(.5),hi.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(mi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(hi),o=gi.dot(this.direction),s=-gi.dot(hi),c=gi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(mi).addScaledVector(hi,d),f}intersectSphere(e,t){if(e.radius<0)return null;pi.subVectors(e.center,this.origin);let n=pi.dot(this.direction),r=pi.dot(pi)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,te,j;if(y>=b&&y>=x?(w=s,D=u,A=p,j=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,te=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,te=_)):b>=x?(w=c,D=d,A=m,j=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,te=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,te=v)):(w=l,D=f,A=h,j=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,te=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,te=g)),w===0)return null;let ne=S/w,M=C/w,re=1/w,ie=T-ne*D,ae=E-M*D,oe=O-ne*A,se=k-M*A,ce=ee-ne*j,le=te-M*j,ue=ce*se-le*oe,N=ie*le-ae*ce,de=oe*ae-se*ie;if(r){if(ue<0||N<0||de<0)return null}else if((ue<0||N<0||de<0)&&(ue>0||N>0||de>0))return null;let fe=ue+N+de;if(fe===0)return null;let pe=re*(ue*D+N*A+de*j);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vi=class extends Xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},yi=new dn,bi=new _i,xi=new Nr,Si=new V,Ci=new V,wi=new V,Ti=new V,Ei=new V,Di=new V,Oi=new V,ki=new V,Ai=class extends Rn{constructor(e=new Vr,t=new vi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Di.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Ei.fromBufferAttribute(s,e),a?Di.addScaledVector(Ei,r):Di.addScaledVector(Ei.sub(t),r))}t.add(Di)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xi.copy(n.boundingSphere),xi.applyMatrix4(i),bi.copy(e.ray).recast(e.near),xi.containsPoint(bi.origin)===!1&&(bi.intersectSphere(xi,Si)===null||bi.origin.distanceToSquared(Si)>(e.far-e.near)**2)||(yi.copy(i).invert(),bi.copy(e.ray).applyMatrix4(yi),(n.boundingBox===null||bi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Mi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Mi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Mi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Mi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ji(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ki.copy(s),ki.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ki);return l<n.near||l>n.far?null:{distance:l,point:ki.clone(),object:e}}function Mi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ci),e.getVertexPosition(c,wi),e.getVertexPosition(l,Ti);let u=ji(e,t,n,r,Ci,wi,Ti,Oi);if(u){let e=new V;sr.getBarycoord(Oi,Ci,wi,Ti,e),i&&(u.uv=sr.getInterpolatedAttribute(i,s,c,l,e,new B)),a&&(u.uv1=sr.getInterpolatedAttribute(a,s,c,l,e,new B)),o&&(u.normal=sr.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};sr.getNormal(Ci,wi,Ti,t.normal),u.face=t,u.barycoord=e}return u}var Ni=class extends an{constructor(e=null,t=1,n=1,r,i,a,o,s,c=h,l=h,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pi=class extends Er{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fi=new dn,Ii=new dn,Li=[],Ri=new cr,zi=new dn,Bi=new Ai,Vi=new Nr,Hi=class extends Ai{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,zi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),Ri.copy(e.boundingBox).applyMatrix4(Fi),this.boundingBox.union(Ri)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),Vi.copy(e.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(Vi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Bi.geometry=this.geometry,Bi.material=this.material,Bi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vi.copy(this.boundingSphere),Vi.applyMatrix4(n),e.ray.intersectsSphere(Vi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Fi),Ii.multiplyMatrices(n,Fi),Bi.matrixWorld=Ii,Bi.raycast(e,Li);for(let e=0,n=Li.length;e<n;e++){let n=Li[e];n.instanceId=i,n.object=this,t.push(n)}Li.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Pi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ni(new Float32Array(r*this.count),r,this.count,oe,D));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ui=new Nr,Wi=new B(.5,.5),Gi=new V,Ki=class{constructor(e=new Jr,t=new Jr,n=new Jr,r=new Jr,i=new Jr,a=new Jr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476+Wi.distanceTo(e.center),Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Gi.x=r.normal.x>0?e.max.x:e.min.x,Gi.y=r.normal.y>0?e.max.y:e.min.y,Gi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},qi=class extends Xr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new U(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ji=new V,Yi=new V,Xi=new dn,Zi=new _i,Qi=new Nr,$i=new V,ea=new V,ta=class extends Rn{constructor(e=new Vr,t=new qi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Ji.fromBufferAttribute(t,e-1),Yi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Ji.distanceTo(Yi);e.setAttribute(`lineDistance`,new kr(n,1))}else L(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(r),Qi.radius+=i,e.ray.intersectsSphere(Qi)===!1)return;Xi.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(Xi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=na(this,e,Zi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=na(this,e,Zi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=na(this,e,Zi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=na(this,e,Zi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function na(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Ji.fromBufferAttribute(s,i),Yi.fromBufferAttribute(s,a),n.distanceSqToSegment(Ji,Yi,$i,ea)>r)return;$i.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo($i);if(!(c<t.near||c>t.far))return{distance:c,point:ea.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var ra=new V,ia=new V,aa=class extends ta{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ra.fromBufferAttribute(t,e),ia.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ra.distanceTo(ia);e.setAttribute(`lineDistance`,new kr(n,1))}else L(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},oa=class extends Xr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sa=new dn,ca=new _i,la=new Nr,ua=new V,da=class extends Rn{constructor(e=new Vr,t=new oa){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),la.radius+=i,e.ray.intersectsSphere(la)===!1)return;sa.copy(r).invert(),ca.copy(e.ray).applyMatrix4(sa);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ua.fromBufferAttribute(l,n),fa(ua,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ua.fromBufferAttribute(l,a),fa(ua,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function fa(e,t,n,r,i,a,o){let s=ca.distanceSqToPoint(e);if(s<n){let n=new V;ca.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var pa=class extends an{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ma=class extends an{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ha=class extends an{constructor(e,t,n=E,r,i,a,o=h,s=h,c,l=ie,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new en(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ga=class extends ha{constructor(e,t=E,n=301,r,i,a=h,o=h,s,c=ie){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},_a=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},va=class e extends Vr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new kr(c,3)),this.setAttribute(`normal`,new kr(l,3)),this.setAttribute(`uv`,new kr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ya=class e extends Vr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new V,l=new B;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new kr(a,3)),this.setAttribute(`normal`,new kr(o,3)),this.setAttribute(`uv`,new kr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ba=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){L(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new B:new V);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new V,r=[],i=[],a=[],o=new V,s=new dn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new V)}i[0]=new V,a[0]=new V;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(z(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(z(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},xa=class extends ba{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new B){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Sa=class extends xa{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Ca(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var wa=new V,Ta=new V,Ea=new Ca,Da=new Ca,Oa=new Ca,ka=class extends ba{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new V){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Ta.subVectors(r[0],r[1]).add(r[0]),c=Ta);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(wa.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=wa),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Ea.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Da.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Oa.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Ea.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Da.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Oa.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Ea.calc(s),Da.calc(s),Oa.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Aa(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function ja(e,t){let n=1-e;return n*n*t}function Ma(e,t){return 2*(1-e)*e*t}function Na(e,t){return e*e*t}function Pa(e,t,n,r){return ja(e,t)+Ma(e,n)+Na(e,r)}function Fa(e,t){let n=1-e;return n*n*n*t}function Ia(e,t){let n=1-e;return 3*n*n*e*t}function La(e,t){return 3*(1-e)*e*e*t}function Ra(e,t){return e*e*e*t}function za(e,t,n,r,i){return Fa(e,t)+Ia(e,n)+La(e,r)+Ra(e,i)}var Ba=class extends ba{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(za(e,r.x,i.x,a.x,o.x),za(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Va=class extends ba{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(za(e,r.x,i.x,a.x,o.x),za(e,r.y,i.y,a.y,o.y),za(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ha=class extends ba{constructor(e=new B,t=new B){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ua=class extends ba{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends ba{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Pa(e,r.x,i.x,a.x),Pa(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ga=class extends ba{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Pa(e,r.x,i.x,a.x),Pa(e,r.y,i.y,a.y),Pa(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ka=class extends ba{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new B){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Aa(o,s.x,c.x,l.x,u.x),Aa(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this}},qa=Object.freeze({__proto__:null,ArcCurve:Sa,CatmullRomCurve3:ka,CubicBezierCurve:Ba,CubicBezierCurve3:Va,EllipseCurve:xa,LineCurve:Ha,LineCurve3:Ua,QuadraticBezierCurve:Wa,QuadraticBezierCurve3:Ga,SplineCurve:Ka}),Ja=class extends ba{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new qa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new qa[n.type]().fromJSON(n))}return this}},Ya=class extends Ja{constructor(e){super(),this.type=`Path`,this.currentPoint=new B,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ha(this.currentPoint.clone(),new B(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Wa(this.currentPoint.clone(),new B(e,t),new B(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Ba(this.currentPoint.clone(),new B(e,t),new B(n,r),new B(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Ka([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new xa(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Xa=class extends Ya{constructor(e){super(e),this.uuid=yt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Ya().fromJSON(n))}return this}};function Za(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Qa(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=ao(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return eo(a,o,n,s,c,l,0),o}function Qa(e,t,n,r,i){let a;if(i===Ao(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Do(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Do(i/r|0,e[i],e[i+1],a);return a&&yo(a,a.next)&&(Oo(a),a=a.next),a}function $a(e,t){if(!e)return e;t||(t=e);let n=e,r;do if(r=!1,!n.steiner&&(yo(n,n.next)||vo(n.prev,n,n.next)===0)){if(Oo(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function eo(e,t,n,r,i,a,o){if(!e)return;!o&&a&&uo(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?no(e,r,i,a):to(e))t.push(c.i,e.i,l.i),Oo(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=ro($a(e),t),eo(e,t,n,r,i,a,2)):o===2&&io(e,t,n,r,i,a):eo($a(e),t,n,r,i,a,1);break}}}function to(e){let t=e.prev,n=e,r=e.next;if(vo(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&go(i,s,a,c,o,l,m.x,m.y)&&vo(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function no(e,t,n,r){let i=e.prev,a=e,o=e.next;if(vo(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=po(p,m,t,n,r),v=po(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&go(s,u,c,d,l,f,y.x,y.y)&&vo(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&go(s,u,c,d,l,f,b.x,b.y)&&vo(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&go(s,u,c,d,l,f,y.x,y.y)&&vo(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&go(s,u,c,d,l,f,b.x,b.y)&&vo(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function ro(e,t){let n=e;do{let r=n.prev,i=n.next.next;!yo(r,i)&&bo(r,n,n.next,i)&&wo(r,i)&&wo(i,r)&&(t.push(r.i,n.i,i.i),Oo(n),Oo(n.next),n=e=i),n=n.next}while(n!==e);return $a(n)}function io(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&_o(o,e)){let s=Eo(o,e);o=$a(o,o.next),s=$a(s,s.next),eo(o,t,n,r,i,a,0),eo(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function ao(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Qa(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(mo(o))}i.sort(oo);for(let e=0;e<i.length;e++)n=so(i[e],n);return n}function oo(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function so(e,t){let n=co(e,t);if(!n)return t;let r=Eo(n,e);return $a(r,r.next),$a(n,n.next)}function co(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(yo(e,n))return n;do{if(yo(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&ho(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);wo(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&lo(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function lo(e,t){return vo(e.prev,e,t.prev)<0&&vo(t.next,e,e.next)<0}function uo(e,t,n,r){let i=e;do i.z===0&&(i.z=po(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,fo(i)}function fo(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function po(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function mo(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ho(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function go(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&ho(e,t,n,r,i,a,o,s)}function _o(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Co(e,t)&&(wo(e,t)&&wo(t,e)&&To(e,t)&&(vo(e.prev,e,t.prev)||vo(e,t.prev,t))||yo(e,t)&&vo(e.prev,e,e.next)>0&&vo(t.prev,t,t.next)>0)}function vo(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function yo(e,t){return e.x===t.x&&e.y===t.y}function bo(e,t,n,r){let i=So(vo(e,t,n)),a=So(vo(e,t,r)),o=So(vo(n,r,e)),s=So(vo(n,r,t));return!!(i!==a&&o!==s||i===0&&xo(e,n,t)||a===0&&xo(e,r,t)||o===0&&xo(n,e,r)||s===0&&xo(n,t,r))}function xo(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function So(e){return e>0?1:e<0?-1:0}function Co(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&bo(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function wo(e,t){return vo(e.prev,e,e.next)<0?vo(e,t,e.next)>=0&&vo(e,e.prev,t)>=0:vo(e,t,e.prev)<0||vo(e,e.next,t)<0}function To(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Eo(e,t){let n=ko(e.i,e.x,e.y),r=ko(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Do(e,t,n,r){let i=ko(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Oo(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function ko(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ao(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var jo=class{static triangulate(e,t,n=2){return Za(e,t,n)}},Mo=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];No(e),Po(n,e);let a=e.length;t.forEach(No);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Po(n,t[e]);let o=jo.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function No(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Po(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Fo=class e extends Vr{constructor(e=new Xa([new B(.5,.5),new B(-.5,.5),new B(-.5,-.5),new B(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new kr(r,3)),this.setAttribute(`uv`,new kr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Io:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new V,b=new V,x=new V}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Mo.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Mo.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||R(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new B(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new B(r/a,i/a)}let ee=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),ee[e]=A(D[e],D[n],D[r]);let te=[],j,ne=ee.concat();for(let e=0,t=E;e<t;e++){let t=w[e];j=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),j[e]=A(t[e],t[r],t[i]);te.push(j),ne=ne.concat(j)}let M;if(p===0)M=Mo.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],ee[t],a);ce(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];j=te[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],j[e],a);ce(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}M=Mo.triangulateShape(e,t)}let re=M.length,ie=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],ne[e],ie):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ce(x.x,x.y,x.z)):ce(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],ne[t],ie):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ce(x.x,x.y,x.z)):ce(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],ee[e],r);ce(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];j=te[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],j[e],r);_?ce(i.x,i.y+g[s-1].y,g[s-1].x+n):ce(i.x,i.y,c+n)}}}ae(),oe();function ae(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<re;e++){let n=M[e];le(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<re;e++){let n=M[e];le(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<re;e++){let t=M[e];le(t[2],t[1],t[0])}for(let e=0;e<re;e++){let t=M[e];le(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function oe(){let e=r.length/3,t=0;se(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];se(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function se(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);ue(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ce(e,t,n){a.push(e),a.push(t),a.push(n)}function le(e,t,i){N(e),N(t),N(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);de(o[0]),de(o[1]),de(o[2])}function ue(e,t,i,a){N(e),N(t),N(a),N(t),N(i),N(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);de(s[0]),de(s[1]),de(s[3]),de(s[1]),de(s[2]),de(s[3])}function N(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function de(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Lo(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new qa[i.type]().fromJSON(i)),new e(r,t.options)}},Io={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new B(a,o),new B(s,c),new B(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new B(o,1-c),new B(l,1-d),new B(f,1-m),new B(h,1-_)]:[new B(s,1-c),new B(u,1-d),new B(p,1-m),new B(g,1-_)]}};function Lo(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Ro=class e extends Vr{constructor(e=[new B(0,-.5),new B(.5,0),new B(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=z(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new V,d=new B,f=new V,p=new V,m=new V,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new kr(a,3)),this.setAttribute(`uv`,new kr(o,2)),this.setAttribute(`normal`,new kr(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},zo=class e extends Vr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new kr(p,3)),this.setAttribute(`normal`,new kr(m,3)),this.setAttribute(`uv`,new kr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Bo=class e extends Vr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new V,p=new B;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new kr(s,3)),this.setAttribute(`normal`,new kr(c,3)),this.setAttribute(`uv`,new kr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Vo=class e extends Vr{constructor(e=new Xa([new B(0,.5),new B(-.5,-.5),new B(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new kr(r,3)),this.setAttribute(`normal`,new kr(i,3)),this.setAttribute(`uv`,new kr(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Mo.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Mo.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Mo.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ho(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function Ho(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var Uo=class e extends Vr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new V,d=new V,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new kr(p,3)),this.setAttribute(`normal`,new kr(m,3)),this.setAttribute(`uv`,new kr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Wo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ko(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ko(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Go(e){let t={};for(let n=0;n<e.length;n++){let r=Wo(e[n]);for(let e in r)t[e]=r[e]}return t}function Ko(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function qo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Jo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var Yo={clone:Wo,merge:Go},Xo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,W=class extends Xr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xo,this.fragmentShader=Zo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wo(e.uniforms),this.uniformsGroups=qo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new U().setHex(r.value);break;case`v2`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new on().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new dn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Qo=class extends W{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},$o=class extends Xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Xe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},es=class extends Xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ts(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ns(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var rs=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},is=class extends rs{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qe,endingEnd:qe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Je:i=e,o=2*t-n;break;case Ye:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Je:a=e,s=2*n-t;break;case Ye:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},as=class extends rs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},os=class extends rs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ss=class extends rs{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=us(n,t,g,y,r);i[p]=cs(x,o,_,b,m)}return i}};function cs(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ls(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function us(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=cs(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ls(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var ds=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ts(t,this.TimeBufferType),this.values=ts(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ts(e.times,Array),values:ts(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),ns(e.settings)&&(n.settings={inTangents:ts(e.settings.inTangents,Array),outTangents:ts(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new os(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new as(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new is(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ss(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ue:t=this.InterpolantFactoryMethodDiscrete;break;case We:t=this.InterpolantFactoryMethodLinear;break;case Ge:t=this.InterpolantFactoryMethodSmooth;break;case Ke:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ue;case this.InterpolantFactoryMethodLinear:return We;case this.InterpolantFactoryMethodSmooth:return Ge;case this.InterpolantFactoryMethodBezier:return Ke}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ns(this.settings)&&(fs(this.settings.inTangents,e),fs(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(R(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){R(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){R(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&at(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){R(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ge,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ns(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function fs(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}ds.prototype.ValueTypeName=``,ds.prototype.TimeBufferType=Float32Array,ds.prototype.ValueBufferType=Float32Array,ds.prototype.DefaultInterpolation=We;var ps=class extends ds{constructor(e,t,n){super(e,t,n)}};ps.prototype.ValueTypeName=`bool`,ps.prototype.ValueBufferType=Array,ps.prototype.DefaultInterpolation=Ue,ps.prototype.InterpolantFactoryMethodLinear=void 0,ps.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends ds{constructor(e,t,n,r){super(e,t,n,r)}};ms.prototype.ValueTypeName=`color`;var hs=class extends ds{constructor(e,t,n,r){super(e,t,n,r)}};hs.prototype.ValueTypeName=`number`;var gs=class extends rs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Vt.slerpFlat(i,0,a,c-o,a,c,s);return i}},_s=class extends ds{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new gs(this.times,this.values,this.getValueSize(),e)}};_s.prototype.ValueTypeName=`quaternion`,_s.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends ds{constructor(e,t,n){super(e,t,n)}};vs.prototype.ValueTypeName=`string`,vs.prototype.ValueBufferType=Array,vs.prototype.DefaultInterpolation=Ue,vs.prototype.InterpolantFactoryMethodLinear=void 0,vs.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends ds{constructor(e,t,n,r){super(e,t,n,r)}};ys.prototype.ValueTypeName=`vector`;var bs=new V,xs=new Vt,Ss=new V,Cs=class extends Rn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=rt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bs,xs,Ss),Ss.x===1&&Ss.y===1&&Ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bs,xs,Ss.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(bs,xs,Ss),Ss.x===1&&Ss.y===1&&Ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bs,xs,Ss.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ws=new V,Ts=new B,Es=new B,Ds=class extends Cs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_t*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vt*2*Math.atan(Math.tan(_t*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ws.x,ws.y).multiplyScalar(-e/ws.z),ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ws.x,ws.y).multiplyScalar(-e/ws.z)}getViewSize(e,t){return this.getViewBounds(e,Ts,Es),t.subVectors(Es,Ts)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_t*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Os=class extends Cs{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ks=-90,As=1,js=class extends Rn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ds(ks,As,e,t);r.layers=this.layers,this.add(r);let i=new Ds(ks,As,e,t);i.layers=this.layers,this.add(i);let a=new Ds(ks,As,e,t);a.layers=this.layers,this.add(a);let o=new Ds(ks,As,e,t);o.layers=this.layers,this.add(o);let s=new Ds(ks,As,e,t);s.layers=this.layers,this.add(s);let c=new Ds(ks,As,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ms=class extends Ds{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ns=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ps.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ps(){this._document.hidden===!1&&this.reset()}var Fs=`\\[\\]\\.:\\/`,Is=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ls=`[^\\[\\]\\.:\\/]`,Rs=`[^`+Fs.replace(`\\.`,``)+`]`,zs=`((?:WC+[\\/:])*)`.replace(`WC`,Ls),Bs=`(WCOD+)?`.replace(`WCOD`,Rs),Vs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ls),Hs=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ls),Us=RegExp(`^`+zs+Bs+Vs+Hs+`$`),Ws=[`material`,`materials`,`bones`,`map`],Gs=class{constructor(e,t,n){let r=n||Ks.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ks=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Is,``)}static parseTrackName(e){let t=Us.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ws.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){R(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){R(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){R(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){R(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){R(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;R(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ks.Composite=Gs,Ks.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ks.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ks.prototype.GetterByBindingType=[Ks.prototype._getValue_direct,Ks.prototype._getValue_array,Ks.prototype._getValue_arrayElement,Ks.prototype._getValue_toArray],Ks.prototype.SetterByBindingTypeAndVersioning=[[Ks.prototype._setValue_direct,Ks.prototype._setValue_direct_setNeedsUpdate,Ks.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ks.prototype._setValue_array,Ks.prototype._setValue_array_setNeedsUpdate,Ks.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ks.prototype._setValue_arrayElement,Ks.prototype._setValue_arrayElement_setNeedsUpdate,Ks.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ks.prototype._setValue_fromArray,Ks.prototype._setValue_fromArray_setNeedsUpdate,Ks.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qs=new dn,Js=class{constructor(e,t,n=0,r=1/0){this.ray=new _i(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Sn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):R(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return qs.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qs),this}intersectObject(e,t=!0,n=[]){return Xs(e,this,n,t),n.sort(Ys),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Xs(e[r],this,n,t);return n.sort(Ys),n}};function Ys(e,t){return e.distance-t.distance}function Xs(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Xs(r[e],t,n,!0)}}var Zs=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,L(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Qs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=z(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(z(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};o=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},o.prototype.isMatrix2=!0;var $s=class extends mt{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ec(e,t,n,r){let i=tc(r);switch(n){case ne:return e*t;case oe:return e*t/i.components*i.byteLength;case se:return e*t/i.components*i.byteLength;case ce:return e*t*2/i.components*i.byteLength;case le:return e*t*2/i.components*i.byteLength;case M:return e*t*3/i.components*i.byteLength;case re:return e*t*4/i.components*i.byteLength;case ue:return e*t*4/i.components*i.byteLength;case N:case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:case _e:return Math.max(e,16)*Math.max(t,8)/4;case me:case ge:return Math.max(e,8)*Math.max(t,8)/2;case ve:case ye:case xe:case Se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case be:case Ce:case we:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ee:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case De:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Oe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ke:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ae:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case je:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Me:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ne:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Pe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case P:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Fe:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ie:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Le:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case F:case Re:case I:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ze:case Be:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ve:case He:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function tc(e){switch(e){case x:case S:return{byteLength:1,components:1};case w:case C:case O:return{byteLength:2,components:1};case k:case A:return{byteLength:2,components:4};case E:case T:case D:return{byteLength:4,components:1};case te:case j:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function nc(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function rc(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var ic={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},G={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},ac={basic:{uniforms:Go([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:ic.meshbasic_vert,fragmentShader:ic.meshbasic_frag},lambert:{uniforms:Go([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new U(0)},envMapIntensity:{value:1}}]),vertexShader:ic.meshlambert_vert,fragmentShader:ic.meshlambert_frag},phong:{uniforms:Go([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ic.meshphong_vert,fragmentShader:ic.meshphong_frag},standard:{uniforms:Go([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ic.meshphysical_vert,fragmentShader:ic.meshphysical_frag},toon:{uniforms:Go([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new U(0)}}]),vertexShader:ic.meshtoon_vert,fragmentShader:ic.meshtoon_frag},matcap:{uniforms:Go([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:ic.meshmatcap_vert,fragmentShader:ic.meshmatcap_frag},points:{uniforms:Go([G.points,G.fog]),vertexShader:ic.points_vert,fragmentShader:ic.points_frag},dashed:{uniforms:Go([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ic.linedashed_vert,fragmentShader:ic.linedashed_frag},depth:{uniforms:Go([G.common,G.displacementmap]),vertexShader:ic.depth_vert,fragmentShader:ic.depth_frag},normal:{uniforms:Go([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:ic.meshnormal_vert,fragmentShader:ic.meshnormal_frag},sprite:{uniforms:Go([G.sprite,G.fog]),vertexShader:ic.sprite_vert,fragmentShader:ic.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ic.background_vert,fragmentShader:ic.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:ic.backgroundCube_vert,fragmentShader:ic.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ic.cube_vert,fragmentShader:ic.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ic.equirect_vert,fragmentShader:ic.equirect_frag},distance:{uniforms:Go([G.common,G.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ic.distance_vert,fragmentShader:ic.distance_frag},shadow:{uniforms:Go([G.lights,G.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:ic.shadow_vert,fragmentShader:ic.shadow_frag}};ac.physical={uniforms:Go([ac.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:ic.meshphysical_vert,fragmentShader:ic.meshphysical_frag};var oc={r:0,b:0,g:0},sc=new dn,cc=new H;cc.set(-1,0,0,0,1,0,0,0,1);function lc(e,t,n,r,i,a){let o=new U(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Ai(new va(1,1,1),new W({name:`BackgroundCubeMaterial`,uniforms:Wo(ac.backgroundCube.uniforms),vertexShader:ac.backgroundCube.vertexShader,fragmentShader:ac.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(sc.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(cc),l.material.toneMapped=Jt.getTransfer(i.colorSpace)!==et,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Ai(new zo(2,2),new W({name:`BackgroundMaterial`,uniforms:Wo(ac.background.uniforms),vertexShader:ac.background.vertexShader,fragmentShader:ac.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(i.colorSpace)!==et,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(oc,Jo(e)),n.buffers.color.setClear(oc.r,oc.g,oc.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function uc(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function dc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function fc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function pc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Jr,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var mc=4,hc=6,gc=20,_c=256,vc=new Os,yc=new U,bc=null,xc=0,Sc=0,Cc=!1,wc=new V,Tc=new V,Ec=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=wc}=i;bc=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bc,xc,Sc),this._renderer.xr.enabled=Cc,e.scissorTest=!1,kc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bc=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:v,minFilter:v,generateMipmaps:!1,type:O,format:re,colorSpace:Qe,depthBuffer:!1},r=Oc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Dc(r)),this._blurMaterial=jc(r,e,t),this._ggxMaterial=Ac(r,e,t)}return r}_compileMaterial(e){let t=new Ai(new Vr,e);this._renderer.compile(t,vc)}_sceneToCubeUV(e,t,n,r,i){let a=new Ds(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(yc),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ai(new va,new vi({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(yc),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;kc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;kc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,vc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-mc?n-d+mc:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,kc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,vc),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,kc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,vc)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];kc(t,3*l*(r>this._lodMax-mc?r-this._lodMax+mc:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,vc)}};function Dc(e){let t=[],n=[],r=e,i=e-mc+1+hc;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Tc.set(1,r,n):e===1?Tc.set(-n,1,-r):e===2?Tc.set(-n,r,1):e===3?Tc.set(-1,r,-n):e===4?Tc.set(-n,-1,r):Tc.set(n,r,-1),Tc.toArray(l,(e*6+t)*3)}}let u=new Vr;u.setAttribute(`position`,new Er(c,3)),u.setAttribute(`outputDirection`,new Er(l,3)),n.push(new Ai(u,null)),r>mc&&r--}return{lodMeshes:n,sizeLods:t}}function Oc(e,t,n){let r=new cn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function kc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ac(e,t,n){return new W({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:_c,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function jc(e,t,n){return new W({name:`SphericalGaussianBlur`,defines:{SAMPLES:gc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Mc(){return new W({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Nc(){return new W({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fc=class extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new pa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new va(5,5,5),i=new W({name:`CubemapFromEquirect`,uniforms:Wo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Ai(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=v),new js(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Ic(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Fc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ec(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ec(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Lc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&dt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Rc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Or:Dr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function zc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Bc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Vc(e,t,n){let r=new WeakMap,i=new on;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new ln(h,p,m,u);g.type=D,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new B(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Hc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Uc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Wc(e,t,n,r,i,a){let o=new cn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Vr;l.setAttribute(`position`,new kr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new kr([0,2,0,0,2,0],2));let u=new Qo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ai(l,u),f=new Os(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new cn(t,n,{type:O,depthBuffer:!1,stencilBuffer:!1}),c=new cn(t,n,{type:O,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Jt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Uc[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Gc=new an,Kc=new ha(1,1),qc=new ln,Jc=new un,Yc=new pa,Xc=[],Zc=[],Qc=new Float32Array(16),$c=new Float32Array(9),el=new Float32Array(4);function tl(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Xc[i];if(a===void 0&&(a=new Float32Array(i),Xc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function nl(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function rl(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function il(e,t){let n=Zc[t];n===void 0&&(n=new Int32Array(t),Zc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function al(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ol(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(nl(n,t))return;e.uniform2fv(this.addr,t),rl(n,t)}}function sl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(nl(n,t))return;e.uniform3fv(this.addr,t),rl(n,t)}}function cl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(nl(n,t))return;e.uniform4fv(this.addr,t),rl(n,t)}}function ll(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(nl(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),rl(n,t)}else{if(nl(n,r))return;el.set(r),e.uniformMatrix2fv(this.addr,!1,el),rl(n,r)}}function ul(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(nl(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),rl(n,t)}else{if(nl(n,r))return;$c.set(r),e.uniformMatrix3fv(this.addr,!1,$c),rl(n,r)}}function dl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(nl(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),rl(n,t)}else{if(nl(n,r))return;Qc.set(r),e.uniformMatrix4fv(this.addr,!1,Qc),rl(n,r)}}function fl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function pl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(nl(n,t))return;e.uniform2iv(this.addr,t),rl(n,t)}}function ml(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(nl(n,t))return;e.uniform3iv(this.addr,t),rl(n,t)}}function hl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(nl(n,t))return;e.uniform4iv(this.addr,t),rl(n,t)}}function gl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function _l(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(nl(n,t))return;e.uniform2uiv(this.addr,t),rl(n,t)}}function vl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(nl(n,t))return;e.uniform3uiv(this.addr,t),rl(n,t)}}function yl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(nl(n,t))return;e.uniform4uiv(this.addr,t),rl(n,t)}}function bl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Kc.compareFunction=n.isReversedDepthBuffer()?518:515,a=Kc):a=Gc,n.setTexture2D(t||a,i)}function xl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Jc,i)}function Sl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Yc,i)}function Cl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||qc,i)}function wl(e){switch(e){case 5126:return al;case 35664:return ol;case 35665:return sl;case 35666:return cl;case 35674:return ll;case 35675:return ul;case 35676:return dl;case 5124:case 35670:return fl;case 35667:case 35671:return pl;case 35668:case 35672:return ml;case 35669:case 35673:return hl;case 5125:return gl;case 36294:return _l;case 36295:return vl;case 36296:return yl;case 35678:case 36198:case 36298:case 36306:case 35682:return bl;case 35679:case 36299:case 36307:return xl;case 35680:case 36300:case 36308:case 36293:return Sl;case 36289:case 36303:case 36311:case 36292:return Cl}}function Tl(e,t){e.uniform1fv(this.addr,t)}function El(e,t){let n=tl(t,this.size,2);e.uniform2fv(this.addr,n)}function Dl(e,t){let n=tl(t,this.size,3);e.uniform3fv(this.addr,n)}function Ol(e,t){let n=tl(t,this.size,4);e.uniform4fv(this.addr,n)}function kl(e,t){let n=tl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Al(e,t){let n=tl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function jl(e,t){let n=tl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ml(e,t){e.uniform1iv(this.addr,t)}function Nl(e,t){e.uniform2iv(this.addr,t)}function Pl(e,t){e.uniform3iv(this.addr,t)}function Fl(e,t){e.uniform4iv(this.addr,t)}function Il(e,t){e.uniform1uiv(this.addr,t)}function Ll(e,t){e.uniform2uiv(this.addr,t)}function Rl(e,t){e.uniform3uiv(this.addr,t)}function zl(e,t){e.uniform4uiv(this.addr,t)}function Bl(e,t,n){let r=this.cache,i=t.length,a=il(n,i);nl(r,a)||(e.uniform1iv(this.addr,a),rl(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Kc:Gc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Vl(e,t,n){let r=this.cache,i=t.length,a=il(n,i);nl(r,a)||(e.uniform1iv(this.addr,a),rl(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Jc,a[e])}function Hl(e,t,n){let r=this.cache,i=t.length,a=il(n,i);nl(r,a)||(e.uniform1iv(this.addr,a),rl(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Yc,a[e])}function Ul(e,t,n){let r=this.cache,i=t.length,a=il(n,i);nl(r,a)||(e.uniform1iv(this.addr,a),rl(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||qc,a[e])}function Wl(e){switch(e){case 5126:return Tl;case 35664:return El;case 35665:return Dl;case 35666:return Ol;case 35674:return kl;case 35675:return Al;case 35676:return jl;case 5124:case 35670:return Ml;case 35667:case 35671:return Nl;case 35668:case 35672:return Pl;case 35669:case 35673:return Fl;case 5125:return Il;case 36294:return Ll;case 36295:return Rl;case 36296:return zl;case 35678:case 36198:case 36298:case 36306:case 35682:return Bl;case 35679:case 36299:case 36307:return Vl;case 35680:case 36300:case 36308:case 36293:return Hl;case 36289:case 36303:case 36311:case 36292:return Ul}}var Gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wl(t.type)}},Kl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wl(t.type)}},ql=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Jl=/(\w+)(\])?(\[|\.)?/g;function Yl(e,t){e.seq.push(t),e.map[t.id]=t}function Xl(e,t,n){let r=e.name,i=r.length;for(Jl.lastIndex=0;;){let a=Jl.exec(r),o=Jl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Yl(n,l===void 0?new Gl(s,e,t):new Kl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ql(s),Yl(n,e)),n=e}}}var Zl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Xl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Ql(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var $l=37297,eu=0;function tu(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var nu=new H;function ru(e){Jt._getMatrix(nu,Jt.workingColorSpace,e);let t=`mat3( ${nu.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(e)){case $e:return[t,`LinearTransferOETF`];case et:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function iu(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+tu(e.getShaderSource(t),r)}return i}function au(e,t){let n=ru(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var ou={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function su(e,t){let n=ou[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var cu=new V;function lu(){return Jt.getLuminanceCoefficients(cu),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${cu.x.toFixed(4)}, ${cu.y.toFixed(4)}, ${cu.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function uu(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(pu).join(`
`)}function du(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function fu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function pu(e){return e!==``}function mu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var gu=/^[ \t]*#include +<([\w\d./]+)>/gm;function _u(e){return e.replace(gu,yu)}var vu=new Map;function yu(e,t){let n=ic[t];if(n===void 0){let e=vu.get(t);if(e!==void 0)n=ic[e],L(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return _u(n)}var bu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xu(e){return e.replace(bu,Su)}function Su(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Cu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var wu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Tu(e){return wu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Eu={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Du(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Eu[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Ou={302:`ENVMAP_MODE_REFRACTION`};function ku(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Ou[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Au={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function ju(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Au[e.combine]||`ENVMAP_BLENDING_NONE`}function Mu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Nu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Tu(n),l=Du(n),u=ku(n),d=ju(n),f=Mu(n),p=uu(n),m=du(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(pu).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(pu).join(`
`),_.length>0&&(_+=`
`)):(g=[Cu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(pu).join(`
`),_=[Cu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:ic.tonemapping_pars_fragment,n.toneMapping===0?``:su(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,ic.colorspace_pars_fragment,au(`linearToOutputTexel`,n.outputColorSpace),lu(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(pu).join(`
`)),o=_u(o),o=mu(o,n),o=hu(o,n),s=_u(s),s=mu(s,n),s=hu(s,n),o=xu(o),s=xu(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Ql(i,i.VERTEX_SHADER,y),S=Ql(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=iu(i,x,`vertex`),n=iu(i,S,`fragment`);R(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Zl(i,h),T=fu(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,$l)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=eu++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Pu=0,Fu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Iu(e),t.set(e,n)),n}},Iu=class{constructor(e){this.id=Pu++,this.code=e,this.usedTimes=0}};function Lu(e){return e===1030||e===37490||e===36285}function Ru(e,t,n,r,i,a){let o=new Sn,s=new Fu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=ac[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),j=h.isInstancedMesh===!0,ne=h.isBatchedMesh===!0,M=!!i.map,re=!!i.matcap,ie=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,N=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=fe&&!!i.anisotropyMap,be=pe&&!!i.clearcoatMap,xe=pe&&!!i.clearcoatNormalMap,Se=pe&&!!i.clearcoatRoughnessMap,Ce=ge&&!!i.iridescenceMap,we=ge&&!!i.iridescenceThicknessMap,Te=_e&&!!i.sheenColorMap,Ee=_e&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=ve&&!!i.transmissionMap,je=ve&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,Pe=i.alphaTest>0,P=!!i.alphaHash,Fe=!!i.extensions,Ie=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let Le={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ne,batchingColor:ne&&h._colorsTexture!==null,instancing:j,instancingColor:j&&h.instanceColor!==null,instancingMorph:j&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:M,matcap:re,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&Lu(i.normalMap.format),metalnessMap:N,roughnessMap:de,anisotropy:fe,anisotropyMap:ye,clearcoat:pe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:ve,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Pe,alphaHash:P,combine:i.combine,mapUv:M&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:ce&&m(i.normalMap.channel),displacementMapUv:le&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:N&&m(i.metalnessMap.channel),roughnessMapUv:de&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:Oe&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:Ae&&m(i.transmissionMap.channel),thicknessMapUv:je&&m(i.thicknessMap.channel),alphaMapUv:Ne&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ce||fe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(M||Ne),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:M&&i.map.isVideoTexture===!0&&Jt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=ac[t];n=Yo.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Nu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function zu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Bu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Vu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Hu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Bu),r.length>1&&r.sort(t||Vu),i.length>1&&i.sort(t||Vu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Uu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Hu,e.set(t,[i])):n>=r.length?(i=new Hu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Wu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new V,color:new U};break;case`SpotLight`:n={position:new V,direction:new V,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new U,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new U,groundColor:new U};break;case`RectAreaLight`:n={color:new U,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function Gu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Ku=0;function qu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ju(e){let t=new Wu,n=Gu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new dn,o=new dn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(qu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Ku++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Yu(e){let t=new Ju(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Xu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Yu(e),t.set(n,[a])):r>=i.length?(a=new Yu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Zu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$u=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],ed=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],td=new dn,nd=new V,rd=new V;function id(e,t,n){let r=new Ki,i=new B,a=new B,o=new on,s=new $o,c=new es,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new W({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:Zu,fragmentShader:Qu}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Vr;m.setAttribute(`position`,new Er(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ai(m,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=y!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){L(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let g=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=g,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new cn(i.x,i.y,{format:ce,type:O,minFilter:v,magFilter:v,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new ha(i.x,i.y,D),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ie,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=h,d.map.depthTexture.magFilter=h}else l.isPointLight?(d.map=new Fc(i.x),d.map.depthTexture=new ga(i.x,E)):(d.map=new cn(i.x,i.y),d.map.depthTexture=new ha(i.x,i.y,E)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ie,this.type===1?(d.map.depthTexture.compareFunction=g?518:515,d.map.depthTexture.minFilter=v,d.map.depthTexture.magFilter=v):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=h,d.map.depthTexture.magFilter=h);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let _=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<_;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),nd.setFromMatrixPosition(l.matrixWorld),e.position.copy(nd),rd.copy(e.position),rd.add($u[t]),e.up.copy(ed[t]),e.lookAt(rd),e.updateMatrixWorld(),n.makeTranslation(-nd.x,-nd.y,-nd.z),td.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(td,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,_.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(g);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new cn(i.x,i.y,{format:ce,type:O}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,g,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,g,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function ad(e,t){function n(){let t=!1,n=new on,r=null,i=new on(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?N(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=pt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?N(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ne=0,M=e.getParameter(e.VERSION);M.indexOf(`WebGL`)===-1?M.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(M)[1]),j=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(M)[1]),j=ne>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new on().fromArray(ae),ce=new on().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),N(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),N(e.CULL_FACE),_e(0);function N(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(de(e.BLEND),g=!1);else if(g===!1&&(N(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):N(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?N(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(N(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function xe(t){t!==k&&(j&&e.lineWidth(t),k=t)}function Se(t,n,r){t?(N(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?N(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+te-1),re!==t&&(e.activeTexture(t),re=t)}function Te(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+te-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Ee(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function P(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Fe(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function F(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Re(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function I(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function ze(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:N,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:P,texImage3D:Fe,pixelStorei:Le,getParameter:Ie,updateUBOMapping:I,uniformBlockBinding:ze,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:F,viewport:Re,reset:Be}}function od(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new B,u=new WeakMap,d=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):ot(`canvas`)}function T(e,t,n){let r=1,i=Ie(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?$e:Jt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function A(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ee(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),ne(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),re(t)}function ne(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&M(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function M(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function re(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ie=0;function oe(){ie=0}function se(){return ie}function ce(e){ie=e}function le(){let e=ie;return e>=i.maxTextures&&L(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ie+=1,e}function ue(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function N(t,i){let a=r.get(t);if(t.isVideoTexture&&P(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{xe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function de(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?xe(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function fe(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?xe(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function pe(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?Se(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let me={[f]:e.REPEAT,[p]:e.CLAMP_TO_EDGE,[m]:e.MIRRORED_REPEAT},he={[h]:e.NEAREST,[g]:e.NEAREST_MIPMAP_NEAREST,[_]:e.NEAREST_MIPMAP_LINEAR,[v]:e.LINEAR,[y]:e.LINEAR_MIPMAP_NEAREST,[b]:e.LINEAR_MIPMAP_LINEAR},ge={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function _e(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,me[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,me[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,me[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,he[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,he[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ge[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ve(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,te));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=ue(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&M(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ye(e,t,n){return Math.floor(Math.floor(e/n)/t)}function be(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ye(n.start,r.width,4),c=ye(t.start,r.width,4);n.start<=i+1&&a===c&&ye(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function xe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ve(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Jt.getPrimaries(Jt.workingColorSpace),r=o.colorSpace===``?null:Jt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=Fe(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=k(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);_e(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,v=f.__version===void 0||l===!0,y=u.dataReady,b=ee(o,t);if(o.isDepthTexture)m=A(o.format===ae,o.type),v&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&v&&n.texStorage2D(e.TEXTURE_2D,b,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(v&&n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height),y&&be(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,b,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(y){if(o.layerUpdates.size>0){let t=ec(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?y&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&v&&n.texStorage2D(e.TEXTURE_2D,b,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?y&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,b,m,t.width,t.height,t.depth),y){if(o.layerUpdates.size>0){let i=ec(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(v&&n.texStorage3D(e.TEXTURE_3D,b,m,t.width,t.height,t.depth),y&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(v){if(_)n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<b;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&v){let t=Ie(g[0]);n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(v){let r=Ie(t);n.texStorage2D(e.TEXTURE_2D,b,m,r.width,r.height)}y&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);E(o)&&D(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Se(t,o,s){if(o.image.length!==6)return;let c=ve(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Jt.getPrimaries(Jt.workingColorSpace),r=o.colorSpace===``?null:Jt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Fe(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=k(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=ee(o,h);_e(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Ie(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ce(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ne(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function we(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=A(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Pe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=k(o.internalFormat,c,l,o.normalized,o.colorSpace);Pe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,l.__webglTexture&&i.depthTexture.image.width===i.width&&i.depthTexture.image.height===i.height||(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,te)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),_e(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else N(i.depthTexture,0);let u=l.__webglTexture,d=Ne(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ee(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Te(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Te(i.__webglFramebuffer[0],t,0):Te(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),we(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),we(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function De(t,n,i){let a=r.get(t);n!==void 0&&Ce(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ee(t)}function Oe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,j);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Pe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=k(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ne(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),we(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),_e(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ce(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),_e(c,a),Ce(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),_e(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ce(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&Ee(t)}function ke(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let Ae=[],je=[];function Me(t){if(t.samples>0){if(Pe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Ae.length=0,je.length=0,Ae.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Ae.push(l),je.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,je)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ae))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ne(e){return Math.min(i.maxSamples,e.samples)}function Pe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function P(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Fe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Jt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ie(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=le,this.resetTextureUnits=oe,this.getTextureUnits=se,this.setTextureUnits=ce,this.setTexture2D=N,this.setTexture2DArray=de,this.setTexture3D=fe,this.setTextureCube=pe,this.rebindTextures=De,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function sd(e,t){function n(n,r=``){let i,a=Jt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var cd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ld=`
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

}`,ud=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new _a(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new W({vertexShader:cd,fragmentShader:ld,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ai(new zo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dd=class extends mt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new ud,g={},_=t.getContextAttributes(),v=null,y=null,b=[],S=[],C=new B,w=null,T=null,D=new Ds;D.viewport=new on;let O=new Ds;O.viewport=new on;let k=[D,O],A=new Ms,te=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Vn,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Vn,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Vn,b[e]=t),t.getHandSpace()};function ne(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,ne),r.removeEventListener(`selectstart`,ne),r.removeEventListener(`selectend`,ne),r.removeEventListener(`squeeze`,ne),r.removeEventListener(`squeezestart`,ne),r.removeEventListener(`squeezeend`,ne),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<b.length;e++){let t=S[e];t!==null&&(S[e]=null,b[e].disconnect(t))}te=null,j=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),T!==null){let e=T.camera;e.fov=T.fov,e.zoom=T.zoom,e.updateProjectionMatrix(),T=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,ne),r.addEventListener(`selectstart`,ne),r.addEventListener(`selectend`,ne),r.addEventListener(`squeeze`,ne),r.addEventListener(`squeezestart`,ne),r.addEventListener(`squeezeend`,ne),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,oe),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ae:ie,a=_.stencil?ee:E);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new cn(d.textureWidth,d.textureHeight,{format:re,type:x,depthTexture:new ha(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new cn(f.framebufferWidth,f.framebufferHeight,{format:re,type:x,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let se=new V,ce=new V;function le(e,t,n){se.setFromMatrixPosition(t.matrixWorld),ce.setFromMatrixPosition(n.matrixWorld);let r=se.distanceTo(ce),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ue(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),A.near=O.near=D.near=t,A.far=O.far=D.far=n,(te!==A.near||j!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),te=A.near,j=A.far),A.layers.mask=e.layers.mask|6,D.layers.mask=A.layers.mask&-5,O.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;ue(A,i);for(let e=0;e<a.length;e++)ue(a[e],i);a.length===2?le(A,D,O):A.projectionMatrix.copy(D.projectionMatrix),T===null&&e.isPerspectiveCamera&&(T={camera:e,fov:e.fov,zoom:e.zoom}),N(e,A,i)};function N(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=vt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(A)},this.getCameraTexture=function(e){return g[e]};let de=null;function fe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=k[n];o===void 0&&(o=new Ds,o.layers.enable(n),o.viewport=new on,k[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new _a,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=S[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}de&&de(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let pe=new nc;pe.setAnimationLoop(fe),this.setAnimationLoop=function(e){de=e},this.dispose=function(){}}},fd=new dn,pd=new H;pd.set(-1,0,0,0,1,0,0,0,1);function md(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Jo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(fd.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(pd),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function hd(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return R(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var gd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_d=null;function vd(){return _d===null&&(_d=new Ni(gd,16,16,ce,O),_d.name=`DFG_LUT`,_d.minFilter=v,_d.magFilter=v,_d.wrapS=p,_d.wrapT=p,_d.generateMipmaps=!1,_d.needsUpdate=!0),_d}var yd=class{constructor(e={}){let{canvas:t=st(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=x}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ue,le,se]),g=new Set([x,E,w,ee,k,A]),_=new Uint32Array(4),v=new Int32Array(4),y=new V,S=null,C=null,T=[],D=[],te=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ne=!1,M=null,re=null,ie=null,ae=null;this._outputColorSpace=Ze;let oe=0,ce=0,N=null,de=-1,fe=null,pe=new on,me=new on,he=null,ge=new U(0),_e=0,ve=t.width,ye=t.height,be=1,xe=null,Se=null,Ce=new on(0,0,ve,ye),we=new on(0,0,ve,ye),Te=!1,Ee=new Ki,De=!1,Oe=!1,ke=new dn,Ae=new V,je=new on,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Pe(){return N===null?be:1}let P=n;function Fe(e,n){return t.getContext(e,n)}let Ie,Le,F,Re,I,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Qe,$e,et,tt,nt,it;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ct,!1),t.addEventListener(`webglcontextrestored`,ut,!1),t.addEventListener(`webglcontextcreationerror`,dt,!1),P===null){let t=`webgl2`;if(P=Fe(t,e),P===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}at()}catch(e){throw t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),R(`WebGLRenderer: `+e.message),e}function at(){Ie=new Lc(P),Ie.init(),tt=new sd(P,Ie),Le=new fc(P,Ie,e,tt),F=new ad(P,Ie),Le.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),re=P.createFramebuffer(),ie=P.createFramebuffer(),ae=P.createFramebuffer(),Re=new Bc(P),I=new zu,ze=new od(P,Ie,F,I,Le,tt,Re),Be=new Ic(j),Ve=new rc(P),nt=new uc(P,Ve),He=new Rc(P,Ve,Re,nt),Ue=new Hc(P,He,Ve,nt,Re),Qe=new Vc(P,Le,ze),Je=new pc(I),We=new Ru(j,Be,Ie,Le,nt,Je),Ge=new md(j,I),Ke=new Uu,qe=new Xu(Ie),Xe=new lc(j,Be,F,Ue,p,s),Ye=new id(j,Ue,Le),it=new hd(P,Re,Le,F),$e=new dc(P,Ie,Re),et=new zc(P,Ie,Re),Re.programs=We.programs,j.capabilities=Le,j.extensions=Ie,j.properties=I,j.renderLists=Ke,j.shadowMap=Ye,j.state=F,j.info=Re}m!==1009&&(te=new Wc(m,t.width,t.height,o,r,i));let ot=new dd(j,P);this.xr=ot,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(e){e!==void 0&&(be=e,this.setSize(ve,ye,!1))},this.getSize=function(e){return e.set(ve,ye)},this.setSize=function(e,n,r=!0){ot.isPresenting?L(`WebGLRenderer: Can't change size while VR device is presenting.`):(ve=e,ye=n,t.width=Math.floor(e*be),t.height=Math.floor(n*be),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),te!==null&&te.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ve*be,ye*be).floor()},this.setDrawingBufferSize=function(e,n,r){ve=e,ye=n,be=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)R(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}te.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(pe)},this.getViewport=function(e){return e.copy(Ce)},this.setViewport=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),F.viewport(pe.copy(Ce).multiplyScalar(be).round())},this.getScissor=function(e){return e.copy(we)},this.setScissor=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),F.scissor(me.copy(we).multiplyScalar(be).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(e){F.setScissorTest(Te=e)},this.setOpaqueSort=function(e){xe=e},this.setTransparentSort=function(e){Se=e},this.getClearColor=function(e){return e.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Xe.getClearColor(),r=Xe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,P.clearBufferuiv(P.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,P.clearBufferiv(P.COLOR,0,v))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),M=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),Xe.dispose(),Ke.dispose(),qe.dispose(),I.dispose(),Be.dispose(),Ue.dispose(),nt.dispose(),it.dispose(),We.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,yt),ot.removeEventListener(`sessionend`,z),bt.stop()};function ct(e){e.preventDefault(),lt(`WebGLRenderer: Context Lost.`),ne=!0}function ut(){lt(`WebGLRenderer: Context Restored.`),ne=!1;let e=Re.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;at(),Re.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function dt(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function pt(e){let t=e.target;t.removeEventListener(`dispose`,pt),mt(t)}function mt(e){ht(e),I.remove(e)}function ht(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Me);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=At(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;nt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=Ve.get(c),g=et,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Pe()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Pe()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ve.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function gt(e,t,n,r){M!==null&&e.isNodeMaterial&&M.setObject(r,e),De===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Et(e,t,r),e.side=0,e.needsUpdate=!0,Et(e,t,r),e.side=2):Et(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),M!==null&&M.renderStart(e,t,n),C=qe.get(n),C.init(t),D.push(C),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(C.pushLight(e),e.castShadow&&C.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(C.pushLight(e),e.castShadow&&C.pushShadow(e))}),C.setupLights(),M!==null&&M.updateLights(C.state.lightsArray),Oe=this.localClippingEnabled,De=Je.init(this.clippingPlanes,Oe),De===!0&&Je.setGlobalState(this.clippingPlanes,t),M!==null&&Ye.render(C.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];gt(o,n,t,e),r.add(o)}else gt(i,n,t,e),r.add(i)}}),C=D.pop(),M!==null&&M.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let _t=null;function vt(e){_t&&_t(e)}function yt(){bt.stop()}function z(){bt.start()}let bt=new nc;bt.setAnimationLoop(vt),typeof self<`u`&&bt.setContext(self),this.setAnimationLoop=function(e){_t=e,ot.setAnimationLoop(e),e===null?bt.stop():bt.start()},ot.addEventListener(`sessionstart`,yt),ot.addEventListener(`sessionend`,z),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ne===!0)return;M!==null&&M.renderStart(e,t);let n=ot.enabled===!0&&ot.isPresenting===!0,r=te!==null&&(N===null||n)&&te.begin(j,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(te===null||te.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,N),C=qe.get(e,D.length),C.init(t),C.state.textureUnits=ze.getTextureUnits(),D.push(C),ke.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ee.setFromProjectionMatrix(ke,rt,t.reversedDepth),Oe=this.localClippingEnabled,De=Je.init(this.clippingPlanes,Oe),S=Ke.get(e,T.length),S.init(),T.push(S),ot.enabled===!0&&ot.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&xt(e,t,-1/0,j.sortObjects)}xt(e,t,0,j.sortObjects),S.finish(),M!==null&&M.updateLights(C.state.lightsArray),j.sortObjects===!0&&S.sort(xe,Se),Ne=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ne&&Xe.addToRenderList(S,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),De===!0&&Je.beginShadows();let i=C.state.shadowsArray;if(Ye.render(i,e,t),De===!0&&Je.endShadows(),(r&&te.hasRenderPass())===!1){let n=S.opaque,r=S.transmissive;if(C.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ct(n,r,e,a)}Ne&&Xe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];St(S,e,n,n.viewport)}}else r.length>0&&Ct(n,r,e,t),Ne&&Xe.render(e),St(S,e,t)}N!==null&&ce===0&&(ze.updateMultisampleRenderTarget(N),ze.updateRenderTargetMipmap(N)),r&&te.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),nt.resetDefaultState(),de=-1,fe=null,D.pop(),D.length>0?(C=D[D.length-1],ze.setTextureUnits(C.state.textureUnits),De===!0&&Je.setGlobalState(j.clippingPlanes,C.state.camera)):C=null,T.pop(),S=T.length>0?T[T.length-1]:null,M!==null&&M.renderEnd()};function xt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)C.pushLightProbeGrid(e);else if(e.isLight)C.pushLight(e),e.castShadow&&C.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Ee)){r&&je.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ke);let i=Ue.update(e),a=e.material;a.visible&&S.push(e,i,a,n,je.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Ee))){let i=Ue.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),je.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),je.copy(e.boundingSphere.center)),je.applyMatrix4(e.matrixWorld).applyMatrix4(ke)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&S.push(e,i,c,n,je.z,s,t)}}else a.visible&&S.push(e,i,a,n,je.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)xt(i[e],t,n,r)}function St(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;C.setupLightsView(n),De===!0&&Je.setGlobalState(j.clippingPlanes,n),r&&F.viewport(pe.copy(r)),i.length>0&&wt(i,t,n),a.length>0&&wt(a,t,n),o.length>0&&wt(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Ct(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);C.state.transmissionRenderTarget[r.id]=new cn(1,1,{generateMipmaps:!0,type:e?O:x,minFilter:b,samples:Math.max(4,Le.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let a=C.state.transmissionRenderTarget[r.id],o=r.viewport||pe;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),l=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(ge),_e=j.getClearAlpha(),_e<1&&j.setClearColor(16777215,.5),j.clear(),Ne&&Xe.render(n);let u=j.toneMapping;j.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),C.setupLightsView(r),De===!0&&Je.setGlobalState(j.clippingPlanes,r),wt(e,n,r),ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,l),j.setClearColor(ge,_e),d!==void 0&&(r.viewport=d),j.toneMapping=u}function wt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Tt(o,t,n,s,l,c)}}function Tt(e,t,n,r,i,a){M!==null&&i.isNodeMaterial&&M.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function Et(e,t,n){t.isScene!==!0&&(t=Me);let r=I.get(e),i=C.state.lights,a=C.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,C.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,pt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ot(e,s),d}else s.uniforms=We.getUniforms(e),M!==null&&e.isNodeMaterial&&M.build(e,n,s),e.onBeforeCompile(s,j),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),Ot(e,s),r.needsLights=Mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=C.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Zl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ot(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function kt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function At(e,t,n,r,i){t.isScene!==!0&&(t=Me),ze.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?j.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Jt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=C.state.lights;if(De===!0&&(Oe===!0||e!==fe)){let t=e===fe&&r.id===de;Je.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=C.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Et(r,t,i),M&&r.isNodeMaterial&&M.onUpdateProgram(r,x,v));let S=!1,w=!1,T=!1,E=x.getUniforms(),D=v.uniforms;if(F.useProgram(x.program)&&(S=!0,w=!0,T=!0),r.id!==de&&(de=r.id,w=!0),v.needsLights){let e=kt(C.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(S||fe!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(P,`projectionMatrix`,e.projectionMatrix),E.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(P,Ae.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&E.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),fe!==e&&(fe=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(P,`sunShadowMap`,y.state.sunShadowMap,ze),y.state.directionalShadowMap.length>0&&E.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,ze),y.state.spotShadowMap.length>0&&E.setValue(P,`spotShadowMap`,y.state.spotShadowMap,ze),y.state.pointShadowMap.length>0&&E.setValue(P,`pointShadowMap`,y.state.pointShadowMap,ze)),i.isSkinnedMesh){E.setOptional(P,i,`bindMatrix`),E.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(P,`boneTexture`,e.boneTexture,ze))}i.isBatchedMesh&&(E.setOptional(P,i,`batchingTexture`),E.setValue(P,`batchingTexture`,i._matricesTexture,ze),E.setOptional(P,i,`batchingIdTexture`),E.setValue(P,`batchingIdTexture`,i._indirectTexture,ze),E.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(P,`batchingColorTexture`,i._colorsTexture,ze));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&Qe.update(i,n,x),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=vd()),w){if(E.setValue(P,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&jt(D,T),a&&r.fog===!0&&Ge.refreshFogUniforms(D,a),Ge.refreshMaterialUniforms(D,r,be,ye,C.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}Zl.upload(P,Dt(v),D,ze)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Zl.upload(P,Dt(v),D,ze),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(P,`center`,i.center),E.setValue(P,`modelViewMatrix`,i.modelViewMatrix),E.setValue(P,`normalMatrix`,i.normalMatrix),E.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,x),it.bind(n,x)}}return x}function jt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,oe=t,ce=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest,F.viewport(pe),F.scissor(me),F.setScissorTest(he),de=-1;return}if(o.__webglFramebuffer===void 0)ze.setupRenderTarget(e);else if(o.__hasExternalTextures)ze.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);ze.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&ze.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest}else pe.copy(Ce).multiplyScalar(be).floor(),me.copy(we).multiplyScalar(be).floor(),he=Te;if(n!==0&&(r=re),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(pe),F.scissor(me),F.setScissorTest(he),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}de=-1};function Nt(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Le.textureFormatReadable(e.format),t.__typeReadable=Le.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=Nt(o);if(u.__formatReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,tt.convert(c),tt.convert(l),a)}finally{let e=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=Nt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,tt.convert(l),tt.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await ft(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;ze.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=tt.convert(t.format),_=tt.convert(t.type),v;t.isData3DTexture?(ze.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(ze.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(ze.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,o,s,f,p,o,s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,ie),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,ae);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,o,s,f,p,o,s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&ze.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?ze.setTextureCube(e,0):e.isData3DTexture?ze.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ze.setTexture2DArray(e,0):ze.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){oe=0,ce=0,N=null,F.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return rt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Jt._getUnpackColorSpace()}},bd={type:`change`},xd={type:`start`},Sd={type:`end`},Cd=new _i,wd=new Jr,Td=Math.cos(70*Bt.DEG2RAD),Ed=new V,Dd=2*Math.PI,Od={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kd=1e-6,Ad=class extends $s{constructor(e,t=null){super(e,t),this.state=Od.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:u.ROTATE,MIDDLE:u.DOLLY,RIGHT:u.PAN},this.touches={ONE:d.ROTATE,TWO:d.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new Vt,this._lastTargetPosition=new V,this._quat=new Vt().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qs,this._sphericalDelta=new Qs,this._scale=1,this._panOffset=new V,this._rotateStart=new B,this._rotateEnd=new B,this._rotateDelta=new B,this._panStart=new B,this._panEnd=new B,this._panDelta=new B,this._dollyStart=new B,this._dollyEnd=new B,this._dollyDelta=new B,this._dollyDirection=new V,this._mouse=new B,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Md.bind(this),this._onPointerDown=jd.bind(this),this._onPointerUp=Nd.bind(this),this._onContextMenu=Bd.bind(this),this._onMouseWheel=Id.bind(this),this._onKeyDown=Ld.bind(this),this._onTouchStart=Rd.bind(this),this._onTouchMove=zd.bind(this),this._onMouseDown=Pd.bind(this),this._onMouseMove=Fd.bind(this),this._interceptControlDown=Vd.bind(this),this._interceptControlUp=Hd.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=Od.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bd),this.update(),this.state=Od.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ed.copy(t).sub(this.target),Ed.applyQuaternion(this._quat),this._spherical.setFromVector3(Ed),this.autoRotate&&this.state===Od.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Dd:n>Math.PI&&(n-=Dd),r<-Math.PI?r+=Dd:r>Math.PI&&(r-=Dd),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Ed.setFromSpherical(this._spherical),Ed.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ed),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Ed.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new V(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new V(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Ed.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Cd.origin.copy(this.object.position),Cd.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Cd.direction))<Td?this.object.lookAt(this.target):(wd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Cd.intersectPlane(wd,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>kd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kd||this._lastTargetPosition.distanceToSquared(this.target)>kd?(this.dispatchEvent(bd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Dd/60/60*this.autoRotateSpeed:Dd/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ed.setFromMatrixColumn(t,0),Ed.multiplyScalar(-e),this._panOffset.add(Ed)}_panUp(e,t){this.screenSpacePanning===!0?Ed.setFromMatrixColumn(t,1):(Ed.setFromMatrixColumn(t,0),Ed.crossVectors(this.object.up,Ed)),Ed.multiplyScalar(e),this._panOffset.add(Ed)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Ed.copy(r).sub(this.target);let i=Ed.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Dd*this._rotateDelta.x/t.clientHeight),this._rotateUp(Dd*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Dd*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Dd*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Dd*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Dd*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Dd*this._rotateDelta.x/t.clientHeight),this._rotateUp(Dd*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new B,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function jd(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),this._isTrackingPointer(e)||(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function Md(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Nd(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Sd),this.state=Od.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function Pd(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case u.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Od.DOLLY;break;case u.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Od.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Od.ROTATE}break;case u.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Od.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Od.PAN}break;default:this.state=Od.NONE}this.state!==Od.NONE&&this.dispatchEvent(xd)}function Fd(e){switch(this.state){case Od.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Od.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Od.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Id(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===Od.NONE&&(e.preventDefault(),this.dispatchEvent(xd),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Sd))}function Ld(e){this.enabled!==!1&&this._handleKeyDown(e)}function Rd(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case d.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Od.TOUCH_ROTATE;break;case d.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Od.TOUCH_PAN;break;default:this.state=Od.NONE}break;case 2:switch(this.touches.TWO){case d.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Od.TOUCH_DOLLY_PAN;break;case d.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Od.TOUCH_DOLLY_ROTATE;break;default:this.state=Od.NONE}break;default:this.state=Od.NONE}this.state!==Od.NONE&&this.dispatchEvent(xd)}function zd(e){switch(this._trackPointer(e),this.state){case Od.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Od.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Od.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Od.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Od.NONE}}function Bd(e){this.enabled!==!1&&e.preventDefault()}function Vd(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Hd(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Ud={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Wd=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Gd=new Os(-1,1,1,-1,0,1),Kd=new class extends Vr{constructor(){super(),this.setAttribute(`position`,new kr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new kr([0,2,0,0,2,0],2))}},qd=class{constructor(e){this._mesh=new Ai(Kd,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Gd)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Jd=class extends Wd{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof W?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Yo.clone(e.uniforms),this.material=new W({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new qd(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Yd=class extends Wd{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Xd=class extends Wd{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Zd=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new B);this._width=n.width,this._height=n.height,t=new cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:O}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jd(Ud),this.copyPass.material.blending=0,this.timer=new Ns}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Yd!==void 0&&(r instanceof Yd?n=!0:r instanceof Xd&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new B);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Qd=class extends Wd{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new U}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},$d={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new U(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},ef=class e extends Wd{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new B(256,256):new B(e.x,e.y),this.clearColor=new U(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new cn(i,a,{type:O,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new cn(i,a,{type:O,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new cn(i,a,{type:O,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=$d;this.highPassUniforms=Yo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new W({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new B(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Yo.clone(Ud.uniforms),this.blendMaterial=new W({uniforms:this.copyUniforms,vertexShader:Ud.vertexShader,fragmentShader:Ud.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new U,this._oldClearAlpha=1,this._basic=new vi,this._fsQuad=new qd(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new B(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new W({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new B(.5,.5)},direction:{value:new B(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new W({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ef.BlurDirectionX=new B(1,0),ef.BlurDirectionY=new B(0,1);var tf={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},nf=class extends Wd{constructor(){super(),this.isOutputPass=!0,this.uniforms=Yo.clone(tf.uniforms),this.material=new Qo({name:tf.name,uniforms:this.uniforms,vertexShader:tf.vertexShader,fragmentShader:tf.fragmentShader}),this._fsQuad=new qd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Jt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},rf={uTime:{value:0},uPx:{value:600}},af=matchMedia(`(pointer: coarse)`).matches||Math.min(screen.width,screen.height)<760,of=`
float hash11(float n){ return fract(sin(n)*43758.5453123); }
float hash21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7)))*43758.5453123); }
float hash31(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7)))*43758.5453123); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(hash21(i), hash21(i+vec2(1,0)), f.x), mix(hash21(i+vec2(0,1)), hash21(i+vec2(1,1)), f.x), f.y);
}
float vnoise3(vec3 p){
  vec3 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  float n = dot(i, vec3(1.0, 57.0, 113.0));
  return mix(mix(mix(hash11(n), hash11(n+1.0), f.x), mix(hash11(n+57.0), hash11(n+58.0), f.x), f.y),
             mix(mix(hash11(n+113.0), hash11(n+114.0), f.x), mix(hash11(n+170.0), hash11(n+171.0), f.x), f.y), f.z);
}
float fbm3(vec3 p){ float a = 0.5, s = 0.0; for(int i=0;i<6;i++){ s += a*vnoise3(p); p = p*2.02 + 9.7; a *= 0.5; } return s; }
float fbm(vec2 p){ float a = 0.5, s = 0.0; for(int i=0;i<5;i++){ s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
`,sf=`
vec3 aur(float t){ t = fract(t)*4.0; vec3 a = vec3(0.1, 1.0, 0.55), b = vec3(0.1, 0.75, 1.0), c = vec3(0.6, 0.3, 1.0), d = vec3(1.0, 0.3, 0.7);
  return t < 1.0 ? mix(a, b, t) : t < 2.0 ? mix(b, c, t - 1.0) : t < 3.0 ? mix(c, d, t - 2.0) : mix(d, a, t - 3.0); }
`;function cf(){let e=new W({side:1,depthWrite:!1,depthTest:!1,uniforms:{uTime:rf.uTime,uTop:{value:new U(0,0,0)},uBot:{value:new U(0,0,0)},uGlow:{value:new U(0,0,0)},uGlowDir:{value:new V(0,0,-1)},uStars:{value:1},uMilk:{value:0},uAur:{value:0},uFloor:{value:.35}},vertexShader:`varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      #define AUR_N ${af?12:20}
      #define AUR_STEP ${af?`4.2`:`2.5`}
      varying vec3 vD; uniform float uTime, uStars, uMilk, uAur, uFloor; uniform vec3 uTop, uBot, uGlow, uGlowDir;
      ${of} ${sf}
      // The aurora is not painted on the sky. Each ray of sight is walked upward through many thin
      // layers of light, one behind another, so the curtains have depth, fold over each other and
      // rise as rays (after the method of nimitz, "Auroras").
      mat2 rot2(float a){ float c = cos(a), s = sin(a); return mat2(c, s, -s, c); }
      float tri(float x){ return clamp(abs(fract(x) - 0.5), 0.01, 0.49); }
      vec2 tri2(vec2 p){ return vec2(tri(p.x) + tri(p.y), tri(p.y + tri(p.x))); }
      float triNoise(vec2 p, float spd){
        float z = 1.8, z2 = 2.5, rz = 0.0; p *= rot2(p.x*0.06); vec2 bp = p;
        for (int i = 0; i < 5; i++) {
          vec2 dg = tri2(bp*1.85)*0.75; dg *= rot2(uTime*spd);
          p -= dg/z2; bp *= 1.3; z2 *= 0.45; z *= 0.42; p *= 1.21 + (rz - 1.0)*0.02;
          rz += tri(p.x + tri(p.y))*z; p *= -mat2(0.95534, 0.29552, -0.29552, 0.95534);
        }
        return clamp(1.0/pow(rz*29.0, 1.3), 0.0, 0.55);
      }
      vec3 curtain(vec3 rd, float sd){
        vec3 col = vec3(0.0), avg = vec3(0.0);
        float jit = hash21(gl_FragCoord.xy + sd);
        for (int k = 0; k < AUR_N; k++) {
          float i = float(k)*AUR_STEP;
          float pt = (0.8 + pow(i, 1.4)*0.002)/(rd.y*2.0 + 0.4) - 0.006*jit*smoothstep(0.0, 15.0, i);
          vec3 bp = pt*rd;
          float rz = triNoise(bp.zx + sd, 0.05);
          vec3 c2 = (sin(1.0 - vec3(2.15, -0.5, 1.2) + i*0.043)*0.5 + 0.5)*rz;      // green below, rose and violet above
          avg = mix(avg, c2, 0.5);
          col += avg*exp2(-i*0.065 - 2.5)*smoothstep(0.0, 5.0, i)*AUR_STEP;
        }
        return col*clamp(rd.y*15.0 + 0.4, 0.0, 1.0)*1.8;
      }
      float starLayer(vec3 d, float sc, float th){
        vec3 p = d*sc; vec3 i = floor(p); vec3 f = fract(p)-0.5; float h = hash31(i);
        float rad = max(0.16, length(fwidth(p))*0.9);                 // never finer than a pixel, or it would shimmer
        float s = smoothstep(rad, 0.0, length(f)) * step(th, h) * (0.0256/(rad*rad));
        return s * (0.55 + 0.45*sin(uTime*1.7 + h*90.0));
      }
      void main(){
        vec3 d = normalize(vD);
        float h = d.y;
        vec3 c = mix(uBot, uTop, smoothstep(-0.08, 0.62, h));
        c = mix(c, uBot*uFloor, smoothstep(0.0, -0.5, h));
        float g = max(dot(d, normalize(uGlowDir)), 0.0);
        c += uGlow * (pow(g, 12.0)*0.22 + pow(g, 90.0)*0.5);
        float st = starLayer(d, 150.0, 0.985) + starLayer(d, 260.0, 0.99)*0.6;
        c += vec3(0.85, 0.9, 1.0) * st * uStars * smoothstep(-0.05, 0.3, h + 0.2);
        float band = fbm(d.xz*3.0 + d.y*2.0) * smoothstep(0.55, 0.0, abs(d.y*1.2 + d.x*0.6 - 0.25));
        c += vec3(0.35, 0.3, 0.6) * band * uMilk;
        if (uAur > 0.001) c += (h > 0.0 ? curtain(d, 0.0) : curtain(vec3(d.x, -d.y, d.z), 7.3)) * uAur * 0.7 * smoothstep(0.04, 0.42, abs(h));
        gl_FragColor = vec4(c, 1.0);
      }`}),t=new Ai(new Uo(900,48,24),e);return t.renderOrder=-10,t.frustumCulled=!1,t}function lf(e,t,n=.5,r=1){let i=new W({transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uTime:rf.uTime,uCol:{value:new U(...e)},uRays:{value:n},uRings:{value:r},uOpen:{value:1}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      varying vec2 vUv; uniform float uTime, uRays, uRings, uOpen; uniform vec3 uCol;
      ${of}
      void main(){
        vec2 p = vUv*2.0 - 1.0; float r = length(p); float a = atan(p.y, p.x);
        vec2 q = vec2(cos(a), sin(a));
        float sw = fbm(q*2.2 + vec2(r*5.0 - uTime*0.35, uTime*0.12));
        float core = exp(-r*r*60.0);
        float halo = exp(-r*7.0);
        float ring = smoothstep(0.05, 0.0, abs(r - 0.34 - 0.05*sw)) + 0.5*smoothstep(0.035, 0.0, abs(r - 0.52 - 0.07*sw));
        float ry = pow(abs(sin(a*7.0 + sw*3.0 + uTime*0.15)), 8.0) * exp(-r*2.4) * uRays;
        float swirl = pow(fbm(q*3.0 + vec2(r*9.0 + uTime*0.5, a)), 2.0) * exp(-r*3.0) * 0.9;
        vec3 c = uCol*(halo*0.55 + (ring*0.55 + swirl*0.55)*uRings + ry*0.6) + vec3(1.0)*core*1.5;
        float e = smoothstep(1.0, 0.72, r) * uOpen;
        gl_FragColor = vec4(c*e, 1.0);
      }`}),a=new Ai(new zo(t*2,t*2),i);return a.frustumCulled=!1,a}function uf(e,t,n,{size:r=1,fns:i=``,uniforms:a={},blending:o=2,maxPx:s=220}={}){af&&e>4e3&&(e=Math.round(e*.45),r*=1.25);let c=new Float32Array(e*3),l=new Float32Array(e*4);for(let n=0;n<e;n++){let e=t(n);c.set(e.p||[0,0,0],n*3),l.set(e.s||[Math.random(),Math.random(),Math.random(),Math.random()],n*4)}let u=new Vr;u.setAttribute(`position`,new Er(c,3)),u.setAttribute(`aSeed`,new Er(l,4));let d=new da(u,new W({transparent:!0,depthWrite:!1,blending:o,uniforms:{uTime:rf.uTime,uPx:rf.uPx,uSize:{value:r},...a},vertexShader:`
      attribute vec4 aSeed; uniform float uTime, uPx, uSize; varying float vA; varying vec3 vC;
      ${of} ${i}
      void main(){
        vec3 p = position; float a = 1.0; vec3 c = vec3(1.0); float s = 1.0;
        ${n}
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        float ps = min(uSize * s * uPx / max(-mv.z, 0.1), ${s.toFixed(1)});
        // a point smaller than about two pixels would flicker as it moves: it is drawn at that size, its light spread to match
        if (ps < 2.2) { a *= ps*ps/4.84; ps = 2.2; }
        gl_PointSize = ps;
        vA = a * smoothstep(0.5, 5.0, -mv.z); vC = c;
      }`,fragmentShader:`
      varying float vA; varying vec3 vC;
      void main(){ float d = length(gl_PointCoord - 0.5); float f = smoothstep(0.5, 0.0, d); f = f*f; gl_FragColor = vec4(vC*f*vA, f*vA); }`}));return d.frustumCulled=!1,d}var df={uniforms:{tDiffuse:{value:null},uTime:rf.uTime,uVeil:{value:0},uVeilCol:{value:new U(1,1,1)},uLens:{value:0},uAspect:{value:1.6},uDim:{value:0},uVig:{value:.72}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    varying vec2 vUv; uniform sampler2D tDiffuse; uniform float uTime, uVeil, uLens, uAspect, uDim, uVig; uniform vec3 uVeilCol;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233)))*43758.5453); }
    void main(){
      vec2 c = vUv - 0.5; vec2 ca = vec2(c.x*uAspect, c.y); float r2 = dot(ca, ca);
      vec2 uv = 0.5 + c * (1.0 + uLens*(r2*2.6 - 0.42));
      float k = 0.0012 + r2*0.0045 + uLens*0.012;
      vec3 col = vec3(texture2D(tDiffuse, uv + c*k).r, texture2D(tDiffuse, uv).g, texture2D(tDiffuse, uv - c*k).b);
      float rim = smoothstep(0.05, 0.0, abs(sqrt(r2) - 0.47)) + smoothstep(0.47, 0.62, sqrt(r2))*0.6;
      col += vec3(0.8, 0.95, 1.0) * rim * uLens * 0.9;
      col *= 1.0 - smoothstep(0.18, 0.95, r2)*uVig;
      col *= 1.0 - uDim;
      col = mix(col, uVeilCol, uVeil);
      col += (h(vUv*vec2(1920.0, 1080.0)) - 0.5) * 0.012;
      gl_FragColor = vec4(col, 1.0);
    }`},ff={uniforms:{tDiffuse:{value:null},tPrev:{value:null},uTime:rf.uTime,uAspect:{value:1.6},uMix:{value:0},uDir:{value:1},uTunnel:{value:0},uWhite:{value:0}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    precision highp float;
    varying vec2 vUv; uniform sampler2D tDiffuse, tPrev; uniform float uTime, uAspect, uMix, uDir, uTunnel, uWhite;
    ${of} ${sf}
    // turn about the centre of the screen, true on a screen of any shape
    vec2 twist(vec2 c, float k){ float cs = cos(k), sn = sin(k); c.x *= uAspect; return vec2((c.x*cs - c.y*sn)/uAspect, c.x*sn + c.y*cs); }
    // beyond its edge a picture is mirrored, so no edge is ever seen
    vec2 mir(vec2 u){ return 1.0 - abs(1.0 - mod(u, 2.0)); }
    // the same soft rush of speed is given to both worlds, so nothing jumps when one replaces the other
    vec3 rush(sampler2D t, vec2 c){
      vec3 s = vec3(0.0);
      for (int i = 0; i < 5; i++) { float k = 1.0 - float(i)*0.028*uTunnel; s += texture2D(t, mir(0.5 + c*k)).rgb; }
      return s*0.2;
    }
    void main(){
      vec2 c = vUv - 0.5; vec2 ca = vec2(c.x*uAspect, c.y); float r = length(ca); float a = atan(ca.y, ca.x);
      float e = uMix*uMix*(3.0 - 2.0*uMix);                         // 1 at the start of a passage, 0 at its end
      float corner = 0.5*length(vec2(uAspect, 1.0));               // from the centre of the screen to its corner
      float t = 1.0 - uMix;                                        // 0 at the start, 1 at the end; it runs evenly, so the motion never rests
      vec3 col;
      if (uMix <= 0.0005) col = rush(tDiffuse, c);
      else if (uDir > 0.0) {
        // Outward: one unbroken drawing back. The world we leave keeps shrinking toward the centre
        // until it is a point of light, and the greater world that holds it is already there around
        // it, itself drawing back into place. Nothing is cut out and no edge is drawn: the smaller
        // world simply melts into the larger at its soft edge.
        float k = exp(-3.6*pow(t, 1.6));                             // the old world: 1 down to a point, setting off gently
        col = rush(tDiffuse, c / exp(1.15*uMix));                    // the new world: seen close, easing out to its true size
        vec3 old = rush(tPrev, c / k);
        float R = (corner + 0.16)*pow(k, 0.82);
        float fade = smoothstep(0.0, 0.3, uMix);
        // at its soft edge only what is bright in the old world remains (its dark sky does not cover the new one)
        col = mix(col, max(col, old), (1.0 - smoothstep(R*0.5, R, r)) * fade);
        col = mix(col, old, (1.0 - smoothstep(R*0.16, R*0.62, r)) * fade);
        col = mix(col, old, 1.0 - smoothstep(0.0, 0.3, t));          // the first moments are exactly the world we were in, then it lets go slowly
        col += vec3(1.0, 0.95, 0.85)*exp(-r*r/(R*R*0.35 + 0.0006))*0.35*smoothstep(0.55, 0.15, uMix)*smoothstep(0.0, 0.12, uMix);
      } else {
        // Inward: one unbroken going in. The world we leave grows past us and thins from the centre,
        // where the finer world within it is already coming up to meet us.
        float M = exp(3.0*t);
        col = rush(tDiffuse, c * (1.0 + 0.9*uMix));
        vec3 old = rush(tPrev, c / M);
        float R = t*(corner + 0.3);
        float w = smoothstep(R*0.35, R + 0.02, r) * smoothstep(0.0, 0.3, uMix);
        col = mix(col, old, max(w, 1.0 - smoothstep(0.0, 0.2, t)));
      }
      if (uTunnel > 0.0005) {
        // the tunnel: walls of flowing light and a brightness at the far end
        float dep = 0.3/(r + 0.05);
        vec2 q = vec2(cos(a), sin(a));
        float tw = dep*0.5 + uTime*0.1;
        vec3 pp = vec3(twist(q, tw)*2.2, dep*1.7 - uTime*1.2*sign(uDir + 0.001));
        float n = fbm3(pp);
        float streak = pow(n, 3.0)*2.2 + pow(abs(sin(a*9.0 + tw*3.0 + n*4.0)), 18.0)*0.25;
        float wall = smoothstep(0.03, 0.42, r);
        vec3 tc = aur(n*1.3 + dep*0.07 + uTime*0.04) * streak * wall * 0.5;
        tc += vec3(1.0, 0.96, 0.88) * (exp(-r*r*90.0)*1.4 + exp(-r*9.0)*0.2);
        tc = mix(tc, vec3(2.2), uWhite*exp(-r*1.2));
        col = col*(1.0 - 0.6*uTunnel) + tc*uTunnel;
      }
      // A safety net: a single invalid or endless value would be spread over the whole picture by the
      // glow that follows, and the frame would go black. Such a pixel is quietly let go instead.
      if (any(isnan(col)) || any(isinf(col))) col = vec3(0.0);
      gl_FragColor = vec4(min(col, vec3(48.0)), 1.0);
    }`};function pf(e=6,t=10){let n=new Vr,r=[],i=[],a=[];for(let n=0;n<=t;n++){let a=n/t,o=.46*Math.sin(Math.PI*a**.8)**.72*(1-.22*a*a);for(let t=0;t<=e;t++){let n=t/e*2-1;r.push(a,.17*a*a+.1*(1-n*n)*Math.sin(Math.PI*a)-.07*n*n*Math.sin(Math.PI*a),n*o*.5),i.push((n+1)/2,a)}}for(let n=0;n<t;n++)for(let t=0;t<e;t++){let r=n*(e+1)+t,i=r+1,o=r+e+1,s=o+1;a.push(r,o,i,i,o,s)}return n.setIndex(a),n.setAttribute(`position`,new kr(r,3)),n.setAttribute(`uv`,new kr(i,2)),n.computeVertexNormals(),n}function mf(e=18,t=36){let n=new Vr,r=[],i=[],a=[];for(let n=0;n<=t;n++){let a=n/t,o=(.3+.24*Math.sin(Math.PI*a**.7*.92)**.85)*(1-a**3.4)**.62;for(let t=0;t<=e;t++){let n=t/e*2-1,s=n*n*.2*Math.sin(Math.PI*Math.min(1,a*1.15))*(1-.5*a),c=.2*a*a-.07*Math.sin(Math.PI*a)+.05*a**6;r.push(a,c+s,n*o),i.push((n+1)/2,a)}}for(let n=0;n<t;n++)for(let t=0;t<e;t++){let r=n*(e+1)+t,i=r+1,o=r+e+1,s=o+1;a.push(r,o,i,i,o,s)}return n.setIndex(a),n.setAttribute(`position`,new kr(r,3)),n.setAttribute(`uv`,new kr(i,2)),n.computeVertexNormals(),n}var K=(e=0,t=1)=>e+Math.random()*(t-e),hf=e=>.42*e+.58*e*e*(3-2*e),gf=Bt.lerp,_f=(e=0,t=0,n=0)=>new V(e,t,n),vf=_f(),yf=_f(),bf=_f(),xf=_f(),Sf=`varying vec3 vN, vV, vP; void main(){ vP = position; vec4 mv = modelViewMatrix*vec4(position,1.0); vV = -mv.xyz; vN = normalMatrix*normal; gl_Position = projectionMatrix*mv; }`;function Cf(){let e=new zn,t=_f(.2,.62,.76).normalize(),n=_f().crossVectors(_f(0,1,0),t).normalize().negate(),r=t.clone().multiplyScalar(.45).addScaledVector(n,.9).normalize(),i=new Ai(new Uo(60,160,96),new W({uniforms:{uTime:rf.uTime,uSun:{value:r}},vertexShader:`varying vec3 vP, vW; void main(){ vP = normalize(position); vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`varying vec3 vP, vW; uniform vec3 uSun; uniform float uTime; ${of}
      void main(){
        vec3 N = normalize(vW), Vw = normalize(cameraPosition - vW), p = vP;
        float h = fbm3(p*2.1 + 4.0) + 0.22*fbm3(p*7.0 + 1.3) + 0.05*fbm3(p*40.0);
        float land = smoothstep(0.585, 0.615, h);
        float lat = abs(p.y);
        vec3 sea = mix(vec3(0.004, 0.025, 0.1), vec3(0.01, 0.1, 0.2), smoothstep(0.45, 0.6, h));
        vec3 green = mix(vec3(0.04, 0.15, 0.035), vec3(0.11, 0.2, 0.05), fbm3(p*14.0));
        vec3 dry = vec3(0.34, 0.25, 0.13);
        vec3 ground = mix(green, dry, smoothstep(0.64, 0.74, h + 0.12*smoothstep(0.1, 0.32, lat)*smoothstep(0.5, 0.3, lat)));
        ground = mix(ground, vec3(0.3, 0.27, 0.24), smoothstep(0.78, 0.9, h));
        vec3 surf = mix(sea, ground, land);
        surf = mix(surf, vec3(0.9, 0.94, 1.0), smoothstep(0.8, 0.9, lat + (h - 0.6)*0.35));       // ice
        vec3 drift = vec3(uTime*0.012, 0.0, uTime*0.006);
        float cl = smoothstep(0.5, 0.7, 0.5*fbm3(p*3.4 + drift) + 0.3*fbm3(p*14.0 + drift*3.0) + 0.24*fbm3(p*55.0 + drift*9.0));
        float day = dot(N, uSun); float lit = smoothstep(-0.12, 0.22, day);
        vec3 c = mix(surf, vec3(1.0), cl*0.9) * (0.02 + 1.15*max(day, 0.0));
        c += vec3(1.0, 0.9, 0.7) * pow(max(dot(reflect(-uSun, N), Vw), 0.0), 70.0) * (1.0 - land)*(1.0 - cl) * 0.9;
        float cn = fbm3(p*130.0), cw = fwidth(cn)*1.5 + 0.004;           // the lights of towns, smoothed to the pixel so they never sparkle
        float city = smoothstep(0.7 - cw, 0.7 + cw, cn) * (1.0 - smoothstep(0.06, 0.3, cw)*0.6) * smoothstep(0.53, 0.57, fbm3(p*9.0 + 2.0)) * land * (1.0 - smoothstep(0.7, 0.85, lat));
        c += vec3(1.0, 0.7, 0.32) * city * (1.0 - lit) * 0.4 * (1.0 - cl);
        float rim = pow(max(1.0 - max(dot(N, Vw), 0.0), 0.0), 2.6);
        c += vec3(0.25, 0.55, 1.0) * rim * (0.12 + lit) * 0.9;
        c += vec3(1.0, 0.45, 0.2) * rim * smoothstep(0.25, 0.0, abs(day)) * 0.5;                       // dawn along the edge
        gl_FragColor = vec4(c, 1.0);
      }`}));e.add(i);let a=new Ai(new Uo(60*1.045,96,64),new W({transparent:!0,depthWrite:!1,blending:2,side:1,uniforms:{uSun:{value:r}},vertexShader:`varying vec3 vW, vN; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`varying vec3 vW, vN; uniform vec3 uSun;
      void main(){ vec3 Vw = normalize(cameraPosition - vW); float k = abs(dot(vN, Vw));
        float lit = smoothstep(-0.25, 0.3, dot(normalize(vW), uSun));
        gl_FragColor = vec4(vec3(0.22, 0.5, 1.0) * pow(max(1.0 - k, 0.0), 0.6) * pow(k, 1.6) * 2.2 * (0.08 + lit), 1.0); }`}));e.add(a);let o=uf(9e3,()=>({}),`
    float an = aSeed.x*6.2831; float latr = 0.36 + 0.05*sin(an*3.0 + uTime*0.2) + aSeed.y*0.03;
    float hh = ${60.72.toFixed(2)} + aSeed.z*aSeed.z*2.6;
    float sg = aSeed.w < 0.5 ? 1.0 : -1.0;
    p = vec3(sin(latr)*cos(an), sg*cos(latr), sin(latr)*sin(an)) * hh;
    c = mix(vec3(0.2, 1.0, 0.5), vec3(0.6, 0.3, 1.0), aSeed.z); a = 0.5*(0.5 + 0.5*sin(uTime*1.5 + an*8.0)); s = 0.6 + aSeed.z;`,{size:.5,maxPx:16});e.add(o);let s=new Ai(new Uo(8,48,32),new W({uniforms:{uSun:{value:r}},vertexShader:`varying vec3 vN, vP; void main(){ vP = position; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:`varying vec3 vN, vP; uniform vec3 uSun; ${of} void main(){ float d = max(dot(normalize(vN), uSun), 0.0); float n = 0.55 + 0.45*fbm3(vP*0.7); gl_FragColor = vec4(vec3(0.62, 0.6, 0.58)*n*d, 1.0); }`}));s.position.set(-190,46,-150),e.add(s);let c=[[.03,`Troposphere`,`0 to 12 km · clouds and weather`],[.13,`Stratosphere`,`12 to 50 km · the ozone layer`],[.23,`Mesosphere`,`50 to 85 km · where meteors burn`],[.33,`Thermosphere`,`85 to 600 km · the auroras`],[.43,`Exosphere`,`600 to 10,000 km · the edge of space`],[.54,null,null]];return{name:`Earth`,sub:`the ground of life and its five layers of air`,scale:`10⁷ metres`,beat:10,band:`alpha`,group:e,sky:{top:[0,.002,.012],bot:[0,.004,.02],glow:[1,.9,.7],dir:r.toArray(),stars:1,milk:.8},veil:[1.3,1.5,1.9],caption(e){let t=null;for(let n of c)e>=n[0]&&(t=n[1]?n:null);return t},update(e,r,a=1){let o=.54;if(e<o){let i=e/o,a=.22+17*i**1.7;r.position.copy(t).multiplyScalar(60+a).addScaledVector(n,-i*6),vf.copy(r.position).addScaledVector(n,40).addScaledVector(t,-(3+13*i)),r.up.copy(t),r.lookAt(vf)}else{let i=(e-o)/.45999999999999996,s=hf(i);r.position.copy(t).multiplyScalar(77.22+520*s*s*a).addScaledVector(n,-6+s*60),vf.copy(t).multiplyScalar(77.22).addScaledVector(n,34).addScaledVector(t,-16),vf.lerp(yf.set(0,0,0),hf(Math.min(1,i*2.2))),r.up.copy(t).lerp(bf.copy(n),hf(Math.min(1,i*2.2))*.9).normalize(),r.lookAt(vf)}i.rotation.y=rf.uTime.value*.004},leave(e){e.up.set(0,1,0)},free:{u:.8,outer:700,door:()=>xf,doorR:60.6,level:!1}}}function wf(){let e=new zn,t=new Ai(new Uo(5,48,32),new vi({color:new U(3.4,2.5,1.3)}));e.add(t);let n=lf([1,.62,.25],20,.3,0);e.add(n);let r=[[`Mercury`,13,.5,[.6,.56,.52],1.6,0],[`Venus`,19,.9,[.95,.8,.5],1.2,0],[`Earth`,27,1,[.2,.45,1],1,0],[`Mars`,35,.7,[.9,.38,.2],.8,0],[`Jupiter`,60,3.3,[.85,.68,.5],.43,1],[`Saturn`,84,2.8,[.9,.8,.58],.32,1],[`Uranus`,108,1.9,[.55,.85,.9],.23,0],[`Neptune`,130,1.8,[.25,.4,1],.18,0]].map(([t,n,r,i,a,o],s)=>{let c=new Ai(new Uo(r,40,28),new W({uniforms:{uCol:{value:new U(...i)},uBands:{value:o}},vertexShader:`varying vec3 vN, vW, vP; void main(){ vP = position; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`varying vec3 vN, vW, vP; uniform vec3 uCol; uniform float uBands; ${of}
        void main(){ vec3 L = normalize(-vW); float d = max(dot(normalize(vN), L), 0.0);
          float b = mix(1.0, 0.72 + 0.28*sin(vP.y*9.0 + fbm(vP.xy*2.0)*3.0), uBands);
          vec3 c = uCol*b*(0.03 + d*1.25) + uCol*pow(max(1.0 - max(dot(normalize(vN), normalize(cameraPosition - vW)), 0.0), 0.0), 3.0)*0.25*d;
          gl_FragColor = vec4(c, 1.0); }`}));e.add(c);let l=[];for(let e=0;e<=180;e++){let t=e/180*Math.PI*2;l.push(Math.cos(t)*n,0,Math.sin(t)*n)}let u=new ta(new Vr().setAttribute(`position`,new kr(l,3)),new qi({color:s===2?7317759:9081784,transparent:!0,opacity:s===2?.55:.22,depthWrite:!1}));if(e.add(u),t===`Saturn`){let e=new Ai(new Bo(r*1.35,r*2.3,96),new vi({color:13220239,side:2,transparent:!0,opacity:.55}));e.rotation.x=Math.PI/2-.45,c.add(e)}return{m:c,orbit:n,speed:a,a0:s*2.4+.7}}),i=uf(7e3,()=>{let e=K(0,6.283),t=K(43,52);return{p:[Math.cos(e)*t,K(-.8,.8),Math.sin(e)*t]}},`
    float an = uTime*0.02; float cs = cos(an), sn = sin(an); p.xz = mat2(cs, -sn, sn, cs)*p.xz;
    a = 0.5; c = vec3(0.75, 0.7, 0.62); s = 0.3 + aSeed.w*0.8;`,{size:.2,maxPx:6});e.add(i);let a=uf(5e3,()=>{let e=K(0,6.283),t=K(150,230);return{p:[Math.cos(e)*t,K(-6,6),Math.sin(e)*t]}},`
    a = 0.35; c = vec3(0.6, 0.75, 1.0); s = 0.3 + aSeed.w;`,{size:.25,maxPx:6});return e.add(a),{name:`Solar System`,sub:`the family of the Sun`,scale:`10¹³ metres`,beat:7.83,band:`alpha to theta`,group:e,sky:{top:[0,0,.008],bot:[.004,.002,.016],glow:[.2,.15,.3],dir:[0,.3,-1],stars:1,milk:1},veil:[1.7,1.5,1.2],update(e,t,n=1){let i=rf.uTime.value*.05+2;r.forEach(e=>{let t=e.a0+i*e.speed;e.m.position.set(Math.cos(t)*e.orbit,0,Math.sin(t)*e.orbit),e.m.rotation.y+=.004});let a=r[2].m.position,o=hf(e);vf.copy(a).add(yf.set(1.6,.9,3.2)),yf.set(0,210*n,330*n),t.position.lerpVectors(vf,yf,o*o*(.3+.7*o)),vf.copy(a).lerp(bf.set(0,0,0),hf(Math.min(1,e*1.7))),t.lookAt(vf),this.face(t)},face(e){n.quaternion.copy(e.quaternion)},free:{u:.6,outer:400,door:()=>r[2].m.position,doorR:1.7}}}function Tf(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`);for(let e=0;e<46;e++){let e=K(60,196),n=K(60,196),r=K(24,70),i=t.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.09)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.fillRect(0,0,256,256)}let n=new ma(e);return n.colorSpace=Ze,n}function Ef(){let e=new zn,t=uf(12e4,()=>{let e=Math.random()*4|0,t=Math.random()**.6*180,n=Math.random()<.16,r=e*1.5708+t*.03+(Math.random()-.5)*(1-t/320)+(Math.random()<.22?K(0,6.28):0),i=n?Math.random()**1.5*26:t,a=(Math.random()+Math.random()+Math.random()-1.5)*(n?14:7-t*.025);return{p:[Math.cos(r)*i,a,Math.sin(r)*i],s:[i/180,Math.random(),Math.random(),Math.random()]}},`
    float an = uTime*0.012*(1.3 - aSeed.x*0.8); float cs = cos(an), sn = sin(an); p.xz = mat2(cs, -sn, sn, cs)*p.xz;
    c = mix(vec3(1.0, 0.85, 0.62), mix(vec3(0.5, 0.62, 1.0), vec3(1.0, 0.45, 0.75), step(0.86, aSeed.y)), smoothstep(0.08, 0.5, aSeed.x));
    a = 0.55 + 0.35*sin(uTime*1.3 + aSeed.z*80.0); s = 0.5 + aSeed.w*1.3 + (1.0 - aSeed.x)*0.7;`,{size:.5,maxPx:26});e.add(t);let n=Tf(),r=[[.55,.3,1],[.2,.55,.9],[1,.35,.6],[.9,.7,.5]];for(let t=0;t<40;t++){let i=new di(new Zr({map:n,transparent:!0,depthWrite:!1,blending:2,opacity:K(.05,.14),color:new U(...r[t%4]),rotation:K(0,6.28)})),a=K(0,6.28),o=K(20,170);i.position.set(Math.cos(a)*o,K(-4,4),Math.sin(a)*o),i.scale.setScalar(K(40,110)),e.add(i)}let i=lf([1,.8,.55],44,.25);e.add(i);let a=_f(Math.cos(2.1)*105,.5,Math.sin(2.1)*105),o=lf([1,.9,.6],2.2,0,0);return o.position.copy(a),e.add(o),{name:`Milky Way`,sub:`our home among the stars`,scale:`10²¹ metres`,beat:6,band:`theta`,group:e,sky:{top:[.004,0,.014],bot:[.012,.004,.03],glow:[.3,.2,.5],dir:[0,1,0],stars:.5,milk:0},veil:[1.3,1.1,1.8],update(e,t,n=1){let r=hf(e);vf.copy(a).add(yf.set(3,2.4,7)),yf.set(-40,290*n,250*n),t.position.lerpVectors(vf,yf,r*(.25+.75*r)),vf.copy(a).lerp(bf.set(0,0,0),hf(Math.min(1,e*1.5))),t.lookAt(vf),o.material.uniforms.uOpen.value=1-hf(Math.min(1,e*2.2)),this.face(t)},face(e){i.quaternion.copy(e.quaternion),o.quaternion.copy(e.quaternion)},free:{u:0,outer:470,door:()=>a,doorR:3.2}}}function Df(){let e=new zn,t=[];for(;t.length<54;){let e=_f(K(-1,1),K(-1,1),K(-1,1));e.length()<=1&&t.push(e.multiplyScalar(300))}let n=[];t.forEach((e,r)=>t.map((t,n)=>[e.distanceTo(t),n]).sort((e,t)=>e[0]-t[0]).slice(1,4).forEach(([,e])=>n.push([r,e])));let r=uf(9e4,()=>{let e=()=>Math.random()+Math.random()+Math.random()-1.5;if(Math.random()<.3){let n=t[Math.random()*t.length|0];return{p:[n.x+e()*18,n.y+e()*18,n.z+e()*18]}}let[r,i]=n[Math.random()*n.length|0],a=Math.random(),o=5+16*Math.sin(Math.PI*a);return{p:[gf(t[r].x,t[i].x,a)+e()*o,gf(t[r].y,t[i].y,a)+e()*o,gf(t[r].z,t[i].z,a)+e()*o]}},`
    c = mix(vec3(1.0, 0.82, 0.6), mix(vec3(0.6, 0.75, 1.0), vec3(1.0, 0.55, 0.8), step(0.8, aSeed.y)), aSeed.x);
    a = 0.6 + 0.3*sin(uTime*0.8 + aSeed.z*70.0); s = 0.4 + aSeed.w*aSeed.w*2.4;`,{size:.85,maxPx:34});e.add(r);let i=lf([1,.86,.6],1500,.12,0),a=new zn;a.add(i);let o=lf([.8,.85,1],6,0,0);return a.add(o),{name:`Universe`,sub:`the web of all the galaxies`,scale:`10²⁶ metres`,beat:2.5,band:`delta`,group:new zn().add(e,a),sky:{top:[0,0,.004],bot:[.006,.002,.012],glow:[.2,.12,.3],dir:[0,0,-1],stars:.25,milk:0},veil:[1.9,1.75,1.5],update(t,n,r=1){let a=hf(t),s=t*1.1,c=gf(26,900*r,a*a);n.position.set(Math.sin(s)*c*.5+12,8+c*.16,Math.cos(s)*c),n.lookAt(0,0,0),e.rotation.y=rf.uTime.value*.006,i.material.uniforms.uOpen.value=hf(Math.max(0,(t-.5)/.5))*.9,o.material.uniforms.uOpen.value=1-hf(Math.min(1,t*2.5)),this.face(n)},face(e){i.quaternion.copy(e.quaternion),i.position.copy(e.position).multiplyScalar(-.75),o.quaternion.copy(e.quaternion)},free:{u:0,outer:930,door:()=>xf,doorR:5}}}function Of(){let e=new zn,t=new Uo(1,36,24),n=new Float32Array(1840),r=new Hi(t,new W({transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:rf.uTime},vertexShader:`attribute vec4 aSeed; uniform float uTime; varying vec3 vN, vV, vP; varying vec4 vS;
      void main(){ vS = aSeed; vP = position; vec3 p = position*(1.0 + 0.05*sin(uTime*0.7 + aSeed.y*40.0));
        mat4 mm = viewMatrix*modelMatrix*instanceMatrix; vec4 mv = mm*vec4(p, 1.0);
        vV = -mv.xyz; vN = normalize(mat3(mm)*normal); gl_Position = projectionMatrix*mv; }`,fragmentShader:`uniform float uTime; varying vec3 vN, vV, vP; varying vec4 vS; ${of} ${sf}
      void main(){ float nd = abs(dot(normalize(vN), normalize(vV)));
        vec3 col = aur(vS.x + 0.12*sin(uTime*0.1 + vS.y*20.0));
        float web = pow(fbm3(vP*3.2 + vS.z*50.0 + uTime*0.04), 3.0);
        vec3 c = col*pow(max(1.0 - nd, 0.0), 2.4)*0.9 + col*web*nd*1.5 + vec3(1.0, 0.92, 0.8)*pow(nd, 10.0)*0.1;
        gl_FragColor = vec4(c*0.3, 1.0); }`}),460),i=new dn,a=new Vt,o=_f(),s=_f();for(let e=0;e<460;e++){let t=13;if(e===0)s.set(0,0,0);else{do s.set(K(-1,1),K(-1,1),K(-1,1));while(s.length()>1||s.length()<.11);s.multiplyScalar(330),t=K(5,21)}o.setScalar(t),r.setMatrixAt(e,i.compose(s,a,o)),n.set([Math.random(),Math.random(),Math.random(),Math.random()],e*4)}t.setAttribute(`aSeed`,new Pi(n,4)),r.frustumCulled=!1,e.add(r);let c=()=>Math.random()+Math.random()+Math.random()-1.5,l=uf(9e3,()=>({p:[c()*7,c()*7,c()*7]}),`
    c = mix(vec3(1.0, 0.82, 0.6), mix(vec3(0.6, 0.75, 1.0), vec3(1.0, 0.55, 0.8), step(0.8, aSeed.y)), aSeed.x);
    a = 0.6 + 0.3*sin(uTime*0.8 + aSeed.z*70.0); s = 0.4 + aSeed.w*aSeed.w*1.6;`,{size:.12,maxPx:12});e.add(l);let u=uf(3e4,()=>{do s.set(K(-1,1),K(-1,1),K(-1,1));while(s.length()>1);return s.multiplyScalar(350),{p:[s.x,s.y,s.z]}},`
    p += vec3(sin(uTime*0.2 + aSeed.x*50.0), cos(uTime*0.17 + aSeed.y*50.0), sin(uTime*0.15 + aSeed.z*50.0))*3.0;
    c = aur(aSeed.x + aSeed.y*0.3 + uTime*0.01); a = 0.3 + 0.25*sin(uTime*1.1 + aSeed.z*80.0); s = 0.4 + aSeed.w*aSeed.w*2.0;`,{size:.5,maxPx:10,fns:sf});e.add(u);let d=lf([1,.86,.6],420,.2,0);return{name:`Multiverse`,sub:`universes without number`,scale:`beyond 10²⁶ metres`,beat:40,band:`gamma`,group:new zn().add(e,d),sky:{top:[.012,0,.03],bot:[0,.012,.03],glow:[.3,.15,.45],dir:[0,0,-1],stars:.15,milk:0,aur:.7},veil:[2,2,2],update(t,n,r=1){let i=hf(t),a=t*.9,o=gf(30,1150*r,i*i);n.position.set(Math.sin(a)*o*.4,2+o*.14,Math.cos(a)*o),n.lookAt(0,0,0),e.rotation.y=rf.uTime.value*.004,d.material.uniforms.uOpen.value=hf(Math.max(0,(t-.45)/.55))*.8,this.face(n)},face(e){d.quaternion.copy(e.quaternion)},free:{u:.3,outer:1200,door:()=>xf,doorR:13.5}}}function kf(){let e=new zn,t=new Ai(new Uo(360,64,48),new W({side:1,uniforms:{uTime:rf.uTime},vertexShader:Sf,fragmentShader:`varying vec3 vN, vV, vP; uniform float uTime; ${of}
      void main(){ float n = fbm3(vP*0.03 + uTime*0.02); float cells = smoothstep(0.42, 0.5, abs(fract(n*9.0) - 0.5));
        vec3 c = mix(vec3(0.16, 0.012, 0.05), vec3(0.42, 0.04, 0.14), n) * (0.55 + 0.45*cells);
        gl_FragColor = vec4(c*0.5, 1.0); }`}));t.position.z=-150,e.add(t);let n=new Uo(1,28,18),r=new Float32Array(1200),i=new Hi(n,new W({uniforms:{uTime:rf.uTime},vertexShader:`attribute vec4 aSeed; uniform float uTime; varying vec3 vN, vV, vP; varying float vS;
      void main(){ vP = position; vS = aSeed.x; vec3 p = position; p += normal*0.06*sin(uTime*1.2 + position.x*5.0 + aSeed.y*30.0);
        vec4 mv = viewMatrix*modelMatrix*instanceMatrix*vec4(p, 1.0); mv.xy += vec2(sin(uTime*0.3 + aSeed.z*40.0), cos(uTime*0.25 + aSeed.w*40.0))*1.2;
        vV = -mv.xyz; vN = normalize(mat3(viewMatrix*modelMatrix*instanceMatrix)*normal); gl_Position = projectionMatrix*mv; }`,fragmentShader:`varying vec3 vN, vV, vP; varying float vS;
      void main(){ float nd = abs(dot(normalize(vN), normalize(vV))); float fr = pow(max(1.0 - nd, 0.0), 2.0);
        vec3 col = vS < 0.45 ? vec3(1.0, 0.45, 0.25) : vS < 0.8 ? vec3(0.3, 0.9, 0.75) : vec3(0.75, 0.5, 1.0);
        float folds = 0.6 + 0.4*sin(vP.x*14.0 + sin(vP.y*6.0)*2.0);                     // inner folds
        vec3 c = col*(0.1 + 0.25*folds*nd) + col*fr*1.1;
        gl_FragColor = vec4(c*smoothstep(330.0, 40.0, length(vV)), 1.0); }`}),300),a=new dn,o=new Vt,s=new xn,c=_f(),l=_f();for(let e=0;e<300;e++){let t=K(0,6.283),n=9+Math.random()**.7*85;l.set(Math.cos(t)*n,Math.sin(t)*n*.8,K(10,-260)),s.set(K(0,3),K(0,3),K(0,3)),o.setFromEuler(s);let u=Math.random(),d=K(1.4,4.6);c.set(d*(u<.45?2.4:1),d,d),i.setMatrixAt(e,a.compose(l,o,c)),r.set([u,Math.random(),Math.random(),Math.random()],e*4)}n.setAttribute(`aSeed`,new Pi(r,4)),i.frustumCulled=!1,e.add(i);let u=uf(9e3,()=>({p:[K(-110,110),K(-90,90),K(20,-300)]}),`
    p += vec3(sin(uTime*0.4 + aSeed.x*50.0), cos(uTime*0.35 + aSeed.y*50.0), sin(uTime*0.3 + aSeed.z*50.0))*2.0;
    a = 0.5; c = mix(vec3(1.0, 0.6, 0.5), vec3(0.6, 1.0, 0.9), aSeed.w); s = 0.3 + aSeed.w;`,{size:.4,maxPx:22});e.add(u);let d=new Ai(new Uo(46,64,48),new W({uniforms:{uTime:rf.uTime},vertexShader:Sf,fragmentShader:`varying vec3 vN, vV, vP; uniform float uTime; ${of}
      void main(){ float nd = abs(dot(normalize(vN), normalize(vV))); float pores = smoothstep(0.55, 0.7, fbm3(vP*0.22 + uTime*0.03));
        vec3 c = vec3(0.25, 0.1, 0.5)*(0.25 + 0.5*nd) + vec3(0.7, 0.5, 1.0)*pow(max(1.0 - nd, 0.0), 2.0)*1.2 + vec3(1.0, 0.85, 0.7)*pores*0.9;
        gl_FragColor = vec4(c, 1.0); }`}));return d.position.set(0,0,-340),e.add(d),{name:`Cell`,sub:`the smallest home of life`,scale:`10⁻⁵ metres`,beat:10,band:`alpha`,group:e,sky:{top:[.05,.004,.02],bot:[.1,.01,.04],glow:[.5,.3,.8],dir:[0,0,-1],stars:0,milk:0},veil:[1.5,1.2,1.9],update(e,t){let n=hf(e);t.position.set(Math.sin(e*3.2)*7,Math.cos(e*2.6)*4,-n*292),t.lookAt(Math.sin(e*3.2+.5)*3,0,-340),t.rotateZ(Math.sin(e*4)*.12)},free:{u:.2,center:_f(0,0,-150),outer:340,door:()=>d.position,doorR:47.5}}}function Af(){let e=new zn,t=uf(15e4,()=>({}),`
    float hx = floor(aSeed.x*7.0);                        // which helix: 0 is the one we travel beside
    float t = aSeed.y; float role = aSeed.z;
    float z = 60.0 - t*460.0; float ang = z*0.13 + hx*1.7;
    float rad = 8.0;
    vec3 A = vec3(cos(ang)*rad, sin(ang)*rad, z), B = vec3(cos(ang + 2.5)*rad, sin(ang + 2.5)*rad, z);
    if (role < 0.3) { p = A + (aSeed.xyw - 0.5)*1.5; c = vec3(0.55, 0.8, 1.0); s = 1.0; }
    else if (role < 0.6) { p = B + (aSeed.wxy - 0.5)*1.5; c = vec3(0.55, 0.8, 1.0); s = 1.0; }
    else {
      float st = floor(t*210.0); float zz = 60.0 - (st/210.0)*460.0; float a2 = zz*0.13 + hx*1.7;
      vec3 A2 = vec3(cos(a2)*rad, sin(a2)*rad, zz), B2 = vec3(cos(a2 + 2.5)*rad, sin(a2 + 2.5)*rad, zz);
      float k = fract(aSeed.w*7.13); p = mix(A2, B2, k) + (aSeed.xwy - 0.5)*0.45;
      float base = floor(hash11(st + hx*91.0)*4.0);       // the four letters, in their pairs
      vec3 c1 = base < 1.0 ? vec3(1.0, 0.35, 0.4) : base < 2.0 ? vec3(0.3, 1.0, 0.55) : base < 3.0 ? vec3(1.0, 0.8, 0.3) : vec3(0.45, 0.55, 1.0);
      vec3 c2 = base < 1.0 ? vec3(0.3, 1.0, 0.55) : base < 2.0 ? vec3(1.0, 0.35, 0.4) : base < 3.0 ? vec3(0.45, 0.55, 1.0) : vec3(1.0, 0.8, 0.3);
      c = k < 0.5 ? c1 : c2; s = 0.8;
    }
    if (hx > 0.5) {                                        // the other strands, far around us
      float ha = hx*0.9; float cs = cos(ha), sn = sin(ha);
      p.xy = mat2(cs, -sn, sn, cs)*p.xy; p.yz = mat2(cos(ha*0.4), -sin(ha*0.4), sin(ha*0.4), cos(ha*0.4))*p.yz;
      p += vec3(cos(hx*2.2), sin(hx*2.2), 0.0)*(50.0 + hx*9.0); p.z -= 90.0;
    }
    a = 0.75*(0.7 + 0.3*sin(uTime*1.5 + aSeed.w*50.0));`,{size:.42,maxPx:22});e.add(t);let n=uf(5e3,()=>({p:[K(-120,120),K(-100,100),K(40,-420)]}),`
    p += vec3(sin(uTime*0.6 + aSeed.x*50.0), cos(uTime*0.5 + aSeed.y*50.0), 0.0)*2.0; a = 0.4; c = vec3(0.5, 0.75, 1.0); s = 0.3 + aSeed.w*0.8;`,{size:.3,maxPx:14});e.add(n);let r=lf([.55,.85,1],40,.8);return r.position.set(0,0,-400),e.add(r),{name:`DNA`,sub:`the thread of life`,scale:`10⁻⁹ metres`,beat:6,band:`theta`,group:e,sky:{top:[0,.006,.03],bot:[.01,.03,.09],glow:[.3,.6,1],dir:[0,0,-1],stars:0,milk:0},veil:[1,1.5,1.9],update(e,t){let n=hf(e),r=e*2.6+.6,i=gf(24,3,hf(Math.max(0,(e-.7)/.3)));t.position.set(Math.cos(r)*i,Math.sin(r)*i,50-n*420),t.lookAt(0,0,t.position.z-60),t.rotateZ(e*.8)},free:{u:.2,center:_f(0,0,-170),outer:330,door:()=>r.position,doorR:11}}}function jf(){let e=new zn,t=()=>{let e=Math.random()*2-1,t=Math.random()*6.283,n=Math.sqrt(1-e*e);return _f(n*Math.cos(t),e,n*Math.sin(t))},n=()=>Math.random()+Math.random()+Math.random()-1.5,r=[_f(1,0,0),_f(0,1,0),_f(0,0,1)],i=uf(11e4,()=>{let e=Math.random(),i=t(),a,o;return e<.2?(a=14+n()*5,o=0):e<.82?(o=1,a=44+n()*12,Math.random()<.72&&i.addScaledVector(r[Math.random()*3|0],(Math.random()<.5?-1:1)*1.7).normalize()):(a=105+n()*26,o=2),{p:[i.x*a,i.y*a,i.z*a],s:[o/2,Math.random(),Math.random(),Math.random()]}},`
    // an electron is nowhere and everywhere: each point drifts and breathes in and out of being
    p += vec3(sin(uTime*1.3 + aSeed.y*60.0), sin(uTime*1.1 + aSeed.z*60.0), sin(uTime*0.9 + aSeed.w*60.0)) * (1.0 + aSeed.x*3.0);
    float fl = 0.5 + 0.5*sin(uTime*(0.8 + aSeed.y*1.2) + aSeed.z*90.0);
    c = aSeed.x < 0.25 ? vec3(1.0, 0.85, 0.55) : aSeed.x < 0.75 ? vec3(0.45, 0.7, 1.0) : vec3(0.75, 0.5, 1.0);
    a = smoothstep(0.2, 0.8, fl) * (0.55 - aSeed.x*0.2); s = 0.5 + aSeed.w;`,{size:.5,maxPx:20});e.add(i);let a=lf([1,.75,.5],9,.9);e.add(a);let o=uf(3e3,()=>{let e=t().multiplyScalar(K(140,400));return{p:[e.x,e.y,e.z]}},`a = 0.15 + 0.15*sin(uTime*0.7 + aSeed.x*99.0); c = vec3(0.6, 0.7, 1.0); s = 0.4 + aSeed.w;`,{size:.4,maxPx:10});return e.add(o),{name:`Atom`,sub:`the building block of matter`,scale:`10⁻¹⁰ metres`,beat:2.5,band:`delta`,group:e,sky:{top:[0,0,.012],bot:[.006,.006,.03],glow:[.2,.3,.6],dir:[0,0,-1],stars:0,milk:0},veil:[1.9,1.6,1.3],update(t,n,r=1){let i=hf(t),a=t*2.4,o=gf(250*r,2.2,i**.75);n.position.set(Math.sin(a)*o,Math.sin(t*3.1)*o*.25,Math.cos(a)*o),n.lookAt(0,0,0),e.rotation.y=rf.uTime.value*.03,this.face(n)},face(e){a.quaternion.copy(e.quaternion)},free:{u:.2,outer:330,door:()=>xf,doorR:3}}}function Mf(){let e=new zn,t=[];for(let e=0;e<23;e++)t.push(_f(K(-1,1),K(-1,1),K(-1,1)).multiplyScalar(6));for(let e=0;e<120;e++)for(let e=0;e<23;e++){for(let n=0;n<23;n++){if(e===n)continue;vf.subVectors(t[e],t[n]);let r=vf.length();r<7.6&&t[e].addScaledVector(vf.normalize(),(7.6-r)*.3)}t[e].multiplyScalar(.985)}let n=new Uo(4,48,32),r=new Float32Array(92),i=new Hi(n,new W({transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:rf.uTime},vertexShader:`attribute vec4 aSeed; uniform float uTime; varying vec3 vN, vV; varying float vK;
      void main(){ vK = aSeed.x; vec4 mv = viewMatrix*modelMatrix*instanceMatrix*vec4(position*(1.0 + 0.05*sin(uTime*3.0 + aSeed.y*40.0)), 1.0);
        mv.xyz += vec3(sin(uTime*2.3 + aSeed.z*30.0), cos(uTime*2.0 + aSeed.w*30.0), 0.0)*0.25;
        vV = -mv.xyz; vN = normalize(mat3(viewMatrix*modelMatrix*instanceMatrix)*normal); gl_Position = projectionMatrix*mv; }`,fragmentShader:`varying vec3 vN, vV; varying float vK;
      void main(){ float nd = abs(dot(normalize(vN), normalize(vV)));
        vec3 col = vK < 0.5 ? vec3(1.0, 0.45, 0.4) : vec3(0.45, 0.65, 1.0);
        gl_FragColor = vec4(col*(pow(max(1.0 - nd, 0.0), 1.6)*0.9 + 0.07), 1.0); }`}),23),a=new dn,o=new Vt,s=_f(1,1,1),c=[];t.forEach((e,t)=>{i.setMatrixAt(t,a.compose(e,o,s)),r.set([t<11?0:1,Math.random(),Math.random(),Math.random()],t*4);for(let n=0;n<3;n++)c.push({p:[e.x,e.y,e.z],s:[n/3,Math.random(),Math.random(),t<11?0:1]})}),n.setAttribute(`aSeed`,new Pi(r,4)),i.frustumCulled=!1,e.add(i);let l=uf(c.length,e=>c[e],`
    float ph = uTime*(4.0 + aSeed.y*3.0) + aSeed.x*6.2831 + aSeed.z*9.0;
    p += vec3(cos(ph), sin(ph*1.3), sin(ph))*1.9;
    c = aSeed.x < 0.3 ? vec3(1.0, 0.4, 0.35) : aSeed.x < 0.6 ? vec3(0.4, 1.0, 0.5) : vec3(0.45, 0.55, 1.0); a = 1.0; s = 1.0;`,{size:1.6,maxPx:90});e.add(l);let u=uf(26e3,()=>{let e=_f(K(-1,1),K(-1,1),K(-1,1)).multiplyScalar(160);return{p:[e.x,e.y,e.z]}},`
    float fl = 0.5 + 0.5*sin(uTime*(0.6 + aSeed.y*1.4) + aSeed.x*300.0);                  // the restless ground beneath all matter, breathing
    a = smoothstep(0.75, 1.0, fl)*0.5; c = mix(vec3(1.0, 0.85, 0.6), vec3(0.7, 0.8, 1.0), aSeed.w); s = 0.4 + aSeed.z;`,{size:.45,maxPx:16});e.add(u);let d=lf([1,.86,.6],60,.5,0);return e.add(d),{name:`Nucleus`,sub:`the heart of the atom`,scale:`10⁻¹⁴ metres`,beat:40,band:`gamma`,group:e,sky:{top:[.004,0,.01],bot:[.02,.008,.02],glow:[.5,.35,.2],dir:[0,0,-1],stars:0,milk:0},veil:[1.9,1.75,1.5],update(t,n,r=1){let i=hf(t),a=t*2+.4,o=gf(74*r,.5,i**.8);n.position.set(Math.sin(a)*o,Math.sin(t*2.4)*o*.2,Math.cos(a)*o),n.lookAt(0,0,0),e.rotation.y=rf.uTime.value*.05,d.material.uniforms.uOpen.value=hf(Math.max(0,(t-.35)/.65)),this.face(n)},face(e){d.quaternion.copy(e.quaternion)},free:{u:.7,outer:150,door:()=>xf,doorR:.9}}}function Nf(){return{out:[Cf(),wf(),Ef(),Df(),Of()],in:[kf(),Af(),jf(),Mf()]}}var Pf={color:`#d81b5b`,disc:[{hole:!1,area:.861,pts:[[-.0656,.9987],[-.0579,1],[.0579,1],[.0758,.997],[.0936,.997],[.1204,.9941],[.2193,.9771],[.297,.9567],[.3899,.9219],[.443,.8977],[.5067,.8633],[.5806,.8153],[.6442,.7661],[.6515,.7584],[.665,.7482],[.6931,.7198],[.7066,.7096],[.7168,.696],[.7482,.665],[.778,.6294],[.8213,.5716],[.8663,.5007],[.9041,.4286],[.9325,.3619],[.9508,.3118],[.9711,.2401],[.9881,.153],[.997,.0758],[.997,.055],[1,.0371],[1,-.0342],[.997,-.052],[.997,-.0758],[.9881,-.1501],[.9741,-.2252],[.9478,-.3178],[.91,-.4137],[.8773,-.4791],[.8421,-.539],[.7809,-.6234],[.7304,-.6829],[.6829,-.7304],[.6693,-.7406],[.6561,-.7542],[.6383,-.7691],[.5984,-.8005],[.5479,-.8361],[.4829,-.8752],[.4439,-.8956],[.4078,-.913],[.3267,-.9448],[.2702,-.9626],[.2371,-.9711],[.1832,-.9826],[.1293,-.9911],[.1204,-.9911],[.0788,-.997],[.0401,-.997],[.0223,-1],[-.0223,-1],[-.0401,-.997],[-.0788,-.997],[-.1204,-.9911],[-.1293,-.9911],[-.1985,-.98],[-.2252,-.9741],[-.2303,-.9711],[-.2307,-.969],[-.2261,-.9656],[-.1785,-.9567],[-.1301,-.9397],[-.0936,-.9198],[-.0635,-.8964],[-.0282,-.8752],[-.0104,-.8603],[-.0028,-.8442],[.0015,-.8187],[.0015,-.7763],[.0066,-.7703],[.0202,-.7601],[.035,-.7453],[.0427,-.7351],[.0605,-.7054],[.0741,-.6714],[.0821,-.6379],[.0877,-.6048],[.0877,-.5929],[.0906,-.575],[.0906,-.5334],[.0936,-.5067],[.0962,-.5003],[.1008,-.4995],[.1059,-.5033],[.1242,-.5445],[.131,-.5555],[.1373,-.561],[.1463,-.5623],[.1522,-.5593],[.1569,-.5491],[.1598,-.5351],[.1607,-.5343],[.1615,-.5368],[.162,-.6256],[.159,-.6434],[.159,-.682],[.162,-.6999],[.1632,-.7253],[.1692,-.7372],[.1709,-.7444],[.1709,-.7682],[.162,-.8158],[.162,-.8574],[.1649,-.8752],[.1624,-.9015],[.1662,-.9066],[.17,-.907],[.1777,-.9028],[.1836,-.8968],[.193,-.8824],[.193,-.8769],[.184,-.868],[.1836,-.8641],[.2087,-.7406],[.2197,-.7041],[.2227,-.6999],[.2269,-.7032],[.2341,-.7228],[.243,-.7406],[.2481,-.7652],[.2452,-.789],[.2511,-.8276],[.2464,-.8586],[.2469,-.8646],[.249,-.8684],[.2528,-.8705],[.2605,-.8697],[.2715,-.854],[.274,-.8433],[.2694,-.8281],[.2749,-.7979],[.2749,-.7236],[.2808,-.7028],[.2779,-.6761],[.2779,-.6612],[.2749,-.6434],[.2749,-.6226],[.283,-.5564],[.2851,-.5521],[.288,-.5559],[.2927,-.584],[.2927,-.6196],[.2953,-.637],[.2902,-.6616],[.2906,-.6663],[.2927,-.6701],[.2965,-.6723],[.305,-.6706],[.308,-.6676],[.3101,-.6608],[.3076,-.6434],[.3093,-.6332],[.3135,-.6018],[.3135,-.5602],[.3118,-.5436],[.3165,-.5275],[.3114,-.4969],[.3059,-.4757],[.3016,-.4651],[.2965,-.4583],[.2808,-.4443],[.2532,-.4332],[.2464,-.4252],[.2443,-.418],[.2452,-.4146],[.2545,-.3942],[.2571,-.3848],[.2554,-.3747],[.2558,-.3594],[.2528,-.3445],[.2473,-.3352],[.2422,-.3314],[.2256,-.3241],[.2095,-.3224],[.1951,-.3258],[.1874,-.3301],[.1798,-.3373],[.1755,-.3479],[.1738,-.3581],[.1755,-.3929],[.1768,-.3967],[.1883,-.412],[.1908,-.4214],[.1904,-.4281],[.184,-.4366],[.1552,-.4553],[.145,-.4689],[.1403,-.4821],[.1352,-.5097],[.1373,-.5224],[.1365,-.5271],[.1331,-.5266],[.1233,-.5126],[.1204,-.5007],[.1204,-.4799],[.1144,-.4562],[.1144,-.4443],[.1119,-.429],[.1063,-.3959],[.1017,-.3797],[.0966,-.3522],[.0966,-.2571],[.0936,-.2392],[.0936,-.2214],[.086,-.1785],[.072,-.145],[.0529,-.1165],[.035,-.0987],[.0248,-.0911],[-.0053,-.0737],[-.0333,-.0452],[-.0469,-.035],[-.0524,-.0287],[-.0563,-.0176],[-.0609,.0223],[-.0609,.0609],[-.0669,.0847],[-.0838,.1063],[-.0945,.1136],[-.1131,.1216],[-.1382,.1263],[-.1543,.1246],[-.1671,.1195],[-.1849,.1076],[-.1997,.0868],[-.2108,.0592],[-.2155,.0371],[-.2155,.0253],[-.221,-.0049],[-.2384,-.0231],[-.2486,-.0308],[-.2774,-.0465],[-.3173,-.0749],[-.3441,-.1017],[-.3662,-.1331],[-.3772,-.1577],[-.3819,-.1768],[-.3819,-.373],[-.3742,-.4099],[-.3662,-.4286],[-.3522,-.4502],[-.3483,-.4613],[-.3462,-.474],[-.3462,-.5097],[-.3432,-.5275],[-.3432,-.5394],[-.3377,-.5755],[-.3263,-.6234],[-.3038,-.6841],[-.2732,-.7427],[-.2719,-.7504],[-.2719,-.9079],[-.2689,-.9257],[-.2689,-.9376],[-.2651,-.9546],[-.2668,-.9618],[-.2706,-.9622],[-.291,-.9567],[-.3356,-.9418],[-.4078,-.913],[-.4464,-.8951],[-.5097,-.8603],[-.5657,-.8242],[-.6353,-.772],[-.6633,-.7466],[-.6769,-.7364],[-.7364,-.6769],[-.7466,-.6633],[-.772,-.6353],[-.8183,-.5746],[-.8514,-.5245],[-.8892,-.4583],[-.9159,-.4018],[-.9389,-.3445],[-.9597,-.2821],[-.9711,-.2401],[-.983,-.1836],[-.9911,-.1352],[-.997,-.0817],[-.997,-.0579],[-1,-.0401],[-1,.0431],[-.997,.0609],[-.997,.0847],[-.9911,.1382],[-.9856,.1713],[-.9716,.2405],[-.9567,.294],[-.9418,.3386],[-.9189,.3959],[-.91,.4167],[-.8752,.4859],[-.845,.536],[-.8153,.5806],[-.7899,.6145],[-.7482,.665],[-.7317,.6812],[-.7215,.6948],[-.6918,.7245],[-.6782,.7347],[-.6621,.7512],[-.6485,.7614],[-.6413,.7691],[-.5895,.8094],[-.5419,.8421],[-.4918,.8722],[-.4613,.8892],[-.3989,.9189],[-.3326,.9448],[-.297,.9567],[-.2435,.9716],[-.1772,.9856],[-.1204,.9941],[-.0681,.9983]]}],light:[]},Ff=10,If=e=>e*e*(3-2*e);function Lf(){let e=new zn,t=Pf.disc[0].pts,n=new U(Pf.color),r=new Fo(new Xa(t.map(([e,t])=>new B(e*Ff,t*Ff))),{depth:1.1,bevelEnabled:!0,bevelThickness:.1,bevelSize:.05,bevelSegments:3,curveSegments:1});r.translate(0,0,-.55),r.computeVertexNormals();let i=new Ai(r,new W({uniforms:{uTime:rf.uTime,uCol:{value:n}},vertexShader:`varying vec3 vN, vW, vP; void main(){ vP = position; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`varying vec3 vN, vW, vP; uniform vec3 uCol; uniform float uTime; ${of}
      void main(){
        vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
        float face = smoothstep(0.5, 0.9, N.z);                       // the flat front
        float wall = 1.0 - smoothstep(0.1, 0.6, abs(N.z));            // the cut edges
        float dif = max(dot(N, normalize(vec3(-0.4, 0.6, 0.7))), 0.0);
        float cellTex = 0.92 + 0.08*fbm(vP.xy*0.9 + uTime*0.03);      // the faint grain of a living thing
        vec3 c = uCol * cellTex * (0.42 + 0.62*dif);
        c += uCol * pow(max(1.0 - max(dot(N, V), 0.0), 0.0), 3.0) * 0.6;
        // the light from behind catches the walls of the outline
        float glow = wall * (0.55 + 0.45*sin(uTime*0.8 + vP.y*0.4));
        float nearFig = smoothstep(11.0, 2.0, length(vP.xy - vec2(-1.2, -4.0)));
        c += vec3(1.5, 1.05, 0.55) * glow * (0.2 + 0.8*nearFig);
        c = mix(c, c*0.25, (1.0 - face)*(1.0 - wall)*step(N.z, -0.5)); // the back is in shadow
        gl_FragColor = vec4(c, 1.0);
      }`}));e.add(i);let a=t.map(([e,t])=>Math.hypot(e,t)<.985),o=a.findIndex((e,t)=>e&&!a[(t-1+a.length)%a.length]),s=[];for(let e=0;e<t.length;e++){let n=t[(o+e)%t.length];if(!a[(o+e)%t.length])break;s.push(n)}let c=s.filter(e=>e[0]<.05),l=c.reduce((e,t)=>e+t[0],0)/c.length*Ff,u=c.reduce((e,t)=>e+t[1],0)/c.length*Ff+1.2,d=new Vo(new Xa(s.map(([e,t])=>new B(e*Ff,t*Ff)))),f=new Ai(new ya(Ff*.985,96),new W({uniforms:{uTime:rf.uTime,uC:{value:new B(l,u)},uPow:{value:1}},vertexShader:`varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:`varying vec2 vP; uniform vec2 uC; uniform float uTime, uPow; ${of}
      void main(){
        vec2 d = vP - uC; float r = length(d); float a = atan(d.y, d.x);
        float rays = 0.75 + 0.25*sin(a*9.0 + uTime*0.3 + fbm(vec2(a*2.0, uTime*0.2))*4.0);
        float g = 0.75 + 2.3*exp(-r*r*0.05)*rays;
        gl_FragColor = vec4(vec3(1.0, 0.9, 0.72)*g*uPow, 1.0);
      }`}));f.position.z=-.7,e.add(f);let p=new Hi(d,new W({transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uTime:rf.uTime,uC:{value:new B(l,u)},uPow:{value:1}},vertexShader:`attribute float aL; uniform vec2 uC; varying float vL; varying vec2 vP;
      void main(){
        vL = aL; vec3 p = position;
        p.xy = uC + (p.xy - uC)*(1.0 + aL*0.75);     // the beam widens as it leaves
        p.z = 0.6 + aL*aL*26.0;
        vP = position.xy;
        gl_Position = projectionMatrix*modelViewMatrix*vec4(p, 1.0);
      }`,fragmentShader:`varying float vL; varying vec2 vP; uniform vec2 uC; uniform float uTime, uPow; ${of}
      void main(){
        vec2 d = vP - uC; float a = atan(d.y, d.x);
        float f = 0.6 + 0.4*fbm(vec2(a*5.0 + uTime*0.15, vL*3.0 - uTime*0.4));
        gl_FragColor = vec4(vec3(1.0, 0.82, 0.5) * f * (1.0 - vL) * 0.028 * uPow, 1.0);
      }`}),34),m=new Float32Array(34),h=new dn;for(let e=0;e<34;e++)m[e]=e/34,p.setMatrixAt(e,h);d.setAttribute(`aL`,new Pi(m,1)),p.frustumCulled=!1,e.add(p);let g=new Ai(new Uo(13.5,64,48),new W({transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:rf.uTime,uCol:{value:n}},vertexShader:`uniform float uTime; varying vec3 vN, vV; ${of}
      void main(){ vec3 p = position * (1.0 + 0.035*sin(uTime*0.6 + position.y*0.5) + 0.03*sin(uTime*0.45 + position.x*0.6));
        vec4 mv = modelViewMatrix*vec4(p, 1.0); vV = -mv.xyz; vN = normalMatrix*normal; gl_Position = projectionMatrix*mv; }`,fragmentShader:`uniform vec3 uCol; varying vec3 vN, vV; void main(){ float f = pow(max(1.0 - abs(dot(normalize(vN), normalize(vV))), 0.0), 3.2); gl_FragColor = vec4((uCol*1.2 + vec3(0.5, 0.25, 0.2))*f*0.3, 1.0); }`}));e.add(g);let _=uf(1600,()=>{let e=Math.random()*2-1,t=Math.random()*6.283,n=4+Math.random()*12,r=Math.sqrt(1-e*e);return{p:[n*r*Math.cos(t),n*e,n*r*Math.sin(t)*.8+2]}},`
    p += vec3(sin(uTime*0.3 + aSeed.x*40.0), cos(uTime*0.25 + aSeed.y*40.0), sin(uTime*0.2 + aSeed.z*40.0))*0.8;
    a = 0.3 + 0.5*sin(uTime*1.2 + aSeed.w*60.0); c = mix(vec3(1.0, 0.45, 0.55), vec3(1.0, 0.85, 0.6), aSeed.w); s = 0.4 + aSeed.w;`,{size:.16,maxPx:30});e.add(_);let v=uf(240,()=>{let e=Math.random()*6.283,t=60+Math.random()*260;return{p:[Math.cos(e)*t,(Math.random()-.5)*240,-40-Math.random()*300]}},`
    p.y += sin(uTime*0.1 + aSeed.x*30.0)*6.0; a = 0.1 + 0.08*aSeed.w; c = vec3(0.85, 0.12, 0.33); s = 4.0 + aSeed.w*10.0;`,{size:3,maxPx:180});e.add(v);let y=new V(l,u+.8,0);return{name:`Guruvanikal`,sub:`the Guru and the disciple`,scale:`a single living cell`,beat:14,band:`beta`,isSeed:!0,free:{u:0,outer:300,door:()=>y,doorR:1.5},group:e,sky:{top:[.02,.002,.012],bot:[.07,.006,.03],glow:[.5,.08,.2],dir:[0,0,-1],stars:0,milk:0,aur:0},veil:[1.9,1.6,1.2],update(e,t,n,r=1){let i=rf.uTime.value,a=If(e),o=Math.sin(i*.22)*7,s=Math.sin(i*.17)*2.2;if(n>=0){let e=(44+900*a*a)*r;t.position.set(o*(1-a),(s-2)*(1-a),e),t.lookAt(0,-8.5*(1-a),0)}else{let n=Bt.lerp(44*r,-.4,a**.8),i=If(Math.min(1,e*1.6));t.position.set(Bt.lerp(o,l,i),Bt.lerp(s-2,u+.8,i),n),t.lookAt(l*i,Bt.lerp(-8.5,u+.8,i),-6)}f.material.uniforms.uPow.value=p.material.uniforms.uPow.value=1+(n<0?a*1.5:0)}}}var Rf={parts:[{outer:[[.2115,.4993],[.2176,.5],[.2262,.4986],[.2374,.4946],[.2421,.4917],[.2529,.4773],[.2568,.4687],[.2583,.46],[.2572,.4435],[.2507,.4298],[.2464,.424],[.2374,.4179],[.2266,.4136],[.2201,.4125],[.2129,.4122],[.2021,.414],[.1928,.4172],[.187,.4215],[.1776,.4323],[.1737,.441],[.1726,.4474],[.173,.4647],[.1737,.469],[.1776,.4777],[.182,.4834],[.1924,.4932],[.1992,.4964]],holes:[]},{outer:[[.3728,.459],[.3789,.4597],[.3825,.4582],[.3864,.4546],[.3893,.4449],[.3893,.4323],[.3832,.4082],[.376,.3902],[.3666,.3719],[.3616,.365],[.362,.3632],[.3656,.3629],[.3781,.3679],[.4145,.3769],[.4599,.3769],[.4833,.3726],[.4987,.3679],[.5203,.3593],[.5376,.3488],[.5563,.3348],[.574,.3171],[.5783,.3114],[.5977,.2804],[.6071,.257],[.6118,.2415],[.6161,.2156],[.6161,.1803],[.6136,.1627],[.6093,.1418],[.6021,.1188],[.5877,.0853],[.5704,.0572],[.5563,.0385],[.5437,.0259],[.5412,.0241],[.5373,.0241],[.5247,.036],[.516,.0475],[.4894,.0738],[.4861,.0799],[.4872,.085],[.5049,.1076],[.5171,.1281],[.529,.1591],[.5329,.1803],[.5355,.198],[.5311,.2239],[.525,.2405],[.5135,.2617],[.5034,.2718],[.4948,.2783],[.4768,.288],[.466,.2923],[.4577,.2941],[.4447,.2963],[.4296,.2963],[.4084,.2923],[.39,.2855],[.3799,.2804],[.3634,.2693],[.3458,.2516],[.3396,.2426],[.3303,.2217],[.3263,.2005],[.3263,.1879],[.3238,.1728],[.3238,.1526],[.3263,.1375],[.3263,.1299],[.3238,.1148],[.3238,.0972],[.3195,.0713],[.313,.0526],[.3008,.0295],[.2943,.0209],[.2792,.0058],[.2601,-.0079],[.245,-.0155],[.228,-.0212],[.2252,-.0238],[.2255,-.0263],[.2352,-.0392],[.2507,-.0641],[.2601,-.0824],[.277,-.1285],[.2835,-.1598],[.286,-.1775],[.286,-.2304],[.2792,-.2689],[.2694,-.2995],[.255,-.333],[.2352,-.3661],[.2111,-.3974],[.1809,-.4276],[.1445,-.4543],[.1064,-.4741],[.0754,-.486],[.0495,-.4928],[.0038,-.5],[-.0466,-.5],[-.0797,-.4953],[-.1129,-.4881],[-.1359,-.4809],[-.1593,-.4716],[-.1974,-.4518],[-.2201,-.4366],[-.2514,-.4125],[-.2741,-.3898],[-.2957,-.3611],[-.3054,-.3456],[-.318,-.3204],[-.3324,-.2793],[-.3393,-.2484],[-.3465,-.1951],[-.3465,-.0968],[-.344,-.0817],[-.344,-.0691],[-.3339,.009],[-.3134,.122],[-.3062,.1728],[-.3101,.2016],[-.3126,.2117],[-.3195,.2275],[-.3306,.2466],[-.3407,.2567],[-.362,.2707],[-.3861,.2793],[-.4195,.2837],[-.4458,.2797],[-.4642,.2729],[-.4883,.2567],[-.5059,.239],[-.52,.2178],[-.529,.1965],[-.5329,.1753],[-.5329,.1551],[-.529,.1364],[-.5178,.1123],[-.5009,.0889],[-.484,.0731],[-.4818,.068],[-.5247,.0133],[-.5275,.0112],[-.5326,.0101],[-.5358,.0112],[-.5488,.0209],[-.5664,.0385],[-.5805,.0572],[-.5902,.0727],[-.6003,.0929],[-.6093,.1192],[-.6136,.14],[-.6161,.1703],[-.6118,.2037],[-.6071,.2217],[-.5967,.2491],[-.5779,.2808],[-.5614,.302],[-.5513,.3121],[-.5229,.3341],[-.507,.3434],[-.4861,.3528],[-.4631,.36],[-.4372,.3643],[-.3969,.3643],[-.3605,.3578],[-.3454,.3528],[-.3188,.3416],[-.3062,.3341],[-.2766,.3107],[-.2536,.2783],[-.2439,.2603],[-.2345,.2369],[-.2298,.2189],[-.2255,.1929],[-.2255,.1526],[-.2558,-.0238],[-.2608,-.0641],[-.2608,-.0742],[-.2633,-.0893],[-.2633,-.112],[-.2658,-.1271],[-.2658,-.1699],[-.2633,-.185],[-.2633,-.2001],[-.2608,-.2203],[-.2518,-.2617],[-.2424,-.2876],[-.2331,-.306],[-.2252,-.3182],[-.2086,-.3395],[-.196,-.3521],[-.1625,-.3765],[-.1265,-.396],[-.1031,-.4053],[-.0855,-.4104],[-.0517,-.4168],[-.0164,-.4194],[.0322,-.4125],[.0502,-.4078],[.07,-.3999],[.097,-.3866],[.1305,-.3621],[.1456,-.347],[.1697,-.3157],[.1827,-.2934],[.1938,-.2667],[.1985,-.2513],[.201,-.2412],[.2054,-.2102],[.2054,-.1951],[.201,-.1641],[.1964,-.1461],[.187,-.1202],[.1776,-.1019],[.1622,-.0796],[.1578,-.0713],[.1431,-.0558],[.1219,-.0418],[.0855,-.0277],[.0675,-.023],[.0315,-.0162],[.0113,-.0137],[-.011,-.0133],[-.0142,-.0115],[-.016,-.0083],[-.0164,.0619],[-.0153,.0659],[-.011,.0691],[.0139,.0695],[.0405,.0756],[.0614,.085],[.0776,.0965],[.0851,.104],[.0995,.1249],[.1103,.1544],[.1143,.18],[.1085,.2095],[.1017,.2253],[.0974,.2311],[.0923,.2412],[.0776,.2567],[.061,.2678],[.0509,.2729],[.0326,.2797],[.0239,.2811],[-.0164,.2811],[-.0272,.2793],[-.043,.275],[-.0538,.2707],[-.0668,.2635],[-.0826,.2516],[-.0967,.2329],[-.1013,.225],[-.1057,.2142],[-.1082,.2066],[-.1121,.1829],[-.1121,.1703],[-.1082,.149],[-.0995,.1274],[-.0851,.1066],[-.0675,.0889],[-.056,.0803],[-.0538,.0752],[-.056,.0713],[-.065,.0626],[-.0736,.0511],[-.0851,.04],[-.0938,.0284],[-.1039,.0184],[-.1089,.0162],[-.1129,.0184],[-.133,.036],[-.1416,.0475],[-.1481,.0536],[-.1622,.0724],[-.1769,.0979],[-.1859,.1217],[-.1888,.1314],[-.1928,.1551],[-.1928,.2005],[-.1884,.2264],[-.1812,.2495],[-.1726,.2685],[-.165,.2811],[-.1532,.297],[-.133,.3171],[-.1143,.3312],[-.0862,.3459],[-.0524,.3575],[-.0088,.3643],[.0214,.3643],[.0499,.36],[.0707,.3531],[.0743,.3535],[.0743,.3567],[.0621,.3722],[.0499,.3927],[.0405,.4161],[.0391,.4248],[.0398,.4366],[.0427,.4413],[.0477,.4438],[.0538,.4446],[.0617,.4424],[.0751,.4305],[.0837,.419],[.1039,.3988],[.1201,.3873],[.138,.3776],[.1719,.3661],[.1953,.3618],[.2054,.3618],[.2201,.3596],[.2331,.3618],[.2406,.3618],[.2619,.3657],[.291,.3769],[.2957,.3798],[.3195,.3963],[.3346,.4114],[.3512,.4327],[.3652,.4539]],holes:[[[.1452,.3071],[.1452,.3042],[.1676,.2761],[.1769,.2603],[.1888,.2293],[.1953,.1955],[.1953,.1627],[.191,.1368],[.1838,.1138],[.1744,.0904],[.1679,.0792],[.1668,.0731],[.173,.0673],[.1859,.0601],[.1953,.058],[.2046,.0576],[.2154,.0619],[.2288,.0713],[.2363,.0839],[.2396,.0907],[.2432,.1123],[.2432,.198],[.25,.239],[.259,.2653],[.2738,.2909],[.2835,.3042],[.2824,.3053],[.2795,.3053],[.2565,.2981],[.228,.2937],[.2003,.2937],[.1744,.2981]]]}],aspect:1.2322},zf=Math.PI*(3-Math.sqrt(5)),Bf={white:{top:[2.15,2.15,2.2],bot:[2.2,2.12,2.06],glow:[0,0,0],dir:[0,1,0],stars:0,milk:0,aur:0,floor:1},dark:{top:[.004,.003,.02],bot:[.03,.012,.05],glow:[.35,.2,.4],dir:[0,1,-.2],stars:1,milk:.7,aur:0,floor:.35},cosmos:{top:[.002,.006,.03],bot:[.006,.016,.06],glow:[.04,.07,.18],dir:[0,1,0],stars:0,milk:0,aur:0,floor:.8}},Vf=.5,Hf=46;function Uf(e,t){let n=new zn,r=t+e.total,i=new Uint8Array(e.total);e.years.forEach((e,t)=>i.fill(t,e.start,e.start+e.n));let a=pf(6,10),o=new Float32Array(r),s=new Float32Array(r*3),c=new Float32Array(r),l={uTime:rf.uTime,uBloom:{value:0},uCount:{value:r},uSelA:{value:-1},uSelB:{value:-1},uHover:{value:-10},uOne:{value:-10},uSay:{value:t},uWhite:{value:1}},u=l.uWhite,d=new Hi(a,new W({side:2,uniforms:l,vertexShader:`
      attribute float aIdx, aRnd; attribute vec3 aTint;
      uniform float uTime, uBloom, uCount, uSelA, uSelB, uHover, uOne;
      varying vec2 vUv; varying vec3 vN, vW, vTint; varying float vSel, vHov, vHas, vR;
      void main(){
        vUv = uv; vTint = aTint;
        float n = aIdx / uCount;
        float b = clamp(uBloom*1.7 - n*0.7, 0.0, 1.0); b = b*b*(3.0 - 2.0*b);
        vec3 p = position;
        float ex = (1.0 - b)*1.15 + sin(uTime*0.6 + aRnd*40.0)*0.04*uv.y;
        float cs = cos(ex), sn = sin(ex);
        p.xy = vec2(p.x*cs - p.y*sn, p.x*sn + p.y*cs);
        vSel = step(uSelA, aIdx) * step(aIdx, uSelB);
        vHas = step(0.0, uSelA);
        vHov = max(1.0 - step(0.5, abs(aIdx - uHover)), 1.0 - step(0.5, abs(aIdx - uOne)));
        p *= 1.0 + vHov*0.9;
        mat4 im = modelMatrix * instanceMatrix;
        vec4 wp = im * vec4(p, 1.0);
        wp.xz *= mix(0.22, 1.0, b);
        wp.y += vHov*0.9 + vSel*0.3;
        vR = length(wp.xz);
        vN = normalize(mat3(im) * normal); vW = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }`,fragmentShader:`
      uniform float uTime, uWhite; varying vec2 vUv; varying vec3 vN, vW, vTint; varying float vSel, vHov, vHas, vR;
      void main(){
        vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vW); if (dot(N, V) < 0.0) N = -N;
        float along = vUv.y;
        vec3 base = mix(vTint*vec3(0.95, 0.72, 0.62), vTint, smoothstep(0.0, 0.7, along));
        base = mix(base, vec3(1.0, 0.72, 0.8), smoothstep(0.72, 1.0, along)*0.3);
        float vf = (vUv.x - 0.5)*70.0; float vein = 0.94 + 0.06*sin(vf)*(1.0 - smoothstep(0.25, 0.9, fwidth(vf)));
        vec3 L = normalize(vec3(0.0, 9.0, 0.0) - vW);                     // the light at the centre
        float dif = max(dot(N, L), 0.0)*0.6 + 0.4;
        float fall = 1.0 / (1.0 + vR*0.028);
        float fr = pow(max(1.0 - max(dot(N, V), 0.0), 0.0), 2.5);
        float depth = mix(0.3, 1.0, smoothstep(0.0, 0.85, along));                // shade where petals overlap
        vec3 c = base*vein*depth*(0.16 + dif*(0.34 + 0.4*fall)) + vec3(1.0, 0.86, 0.7)*fr*0.14;
        c += base * smoothstep(0.55, 1.0, along) * 0.12;                 // tips hold a little light
        c = mix(c*1.15 + base*0.03, c*1.25 + base*mix(vec3(0.4, 0.13, 0.24), vec3(0.2), smoothstep(0.0, 0.8, along)), uWhite);   // white space lights them from everywhere
        c = mix(c, c*0.3, vHas*(1.0 - vSel));
        c += vec3(1.0, 0.6, 0.15) * vSel * (0.7 + 0.3*sin(uTime*2.0));
        c = mix(c, vec3(3.2, 1.7, 0.35), vHov);
        gl_FragColor = vec4(c, 1.0);
      }`}),r),f=new dn,p=new Vt,m=new Vt,h=new Vt,g=new V,_=new V,v=new V(0,1,0),y=new V(0,0,1),b=new Float32Array(r*3),x=0;for(let e=0;e<r;e++){let n=Vf*Math.sqrt(e+Hf),a=e*zf,l=e/r,u=Bt.lerp(1.25,.36,l**.55),S=1.5+n*.036;_.set(Math.cos(a)*n,.0026*n*n,Math.sin(a)*n),m.setFromAxisAngle(v,-a),h.setFromAxisAngle(y,u),p.copy(m).multiply(h),g.set(S,S,S*1.05),d.setMatrixAt(e,f.compose(_,p,g)),b.set([_.x,_.y,_.z],e*3),o[e]=e,c[e]=Math.random(),e<t?s.set([1,.62,.2],e*3):s.set(i[e-t]%2?[.9,.9,1]:[1,.92,.94],e*3),x=n}a.setAttribute(`aIdx`,new Pi(o,1)),a.setAttribute(`aRnd`,new Pi(c,1)),a.setAttribute(`aTint`,new Pi(s,3)),d.frustumCulled=!1,n.add(d);let S=mf(af?12:18,af?24:36),C=[],w=[],T={value:0},E={value:.22},D=(e,t,n,r)=>new W({side:2,uniforms:{uTime:rf.uTime,uOn:{value:0},uB:T,uK:E,uRing:{value:e.ring},uStart:{value:t},uLift:{value:e.lift},uClosed:{value:e.closed},uZc:{value:e.zc},uReflex:{value:e.reflex},uCurl:{value:e.curl},uSc:{value:e.sc},uRise:{value:e.rise},uAlt:{value:n},uCupK:{value:e.cupK},uRcF:{value:r},uRc:{value:e.rc},uL:{value:e.L},uWide:{value:e.wide},uWhite:u},vertexShader:`uniform float uTime, uB, uK, uOn, uRing, uStart, uLift, uClosed, uZc, uReflex, uCurl, uSc, uRise, uAlt, uCupK, uRcF, uRc, uL, uWide;
      varying vec2 vUv; varying vec3 vN, vW; varying float vO;
      void main(){
        vUv = uv; vec3 p = position; vec3 n = normal;
        float x = clamp((uB - uStart)/0.52, 0.0, 1.0);
        float o = x*x*x*(x*(x*6.0 - 15.0) + 10.0);                  // loosening slowly, opening, settling slowly
        vO = o;
        float a = (uv.x - 0.5)*2.0, v = uv.y;
        p.z *= mix(mix(min(uZc*1.8, 1.0), uZc, smoothstep(0.0, 0.35, v)), 1.0, o);   // furled narrow in the bud, broad at its foot so the bud is closed
        // In the bud each petal bends across exactly as much as the round bud it wraps (no ridges),
        // swells, and is drawn in so that its point meets the others.
        // the cup of the petal: deep in the inner whorls, gentle in the outer ones, so that each layer rests
        // on the one beneath without its raised edges passing through it; none at all in the closed bud
        p.y -= (1.0 - mix(0.0, uCupK, o))*0.2*a*a*sin(3.14159*min(v*1.15, 1.0))*(1.0 - 0.5*v);
        float zL = p.z*uWide;
        float reff = max(1.5, (uRc + 2.5*sin(3.14159*min(v*1.4, 1.0)))*(1.0 - 0.95*v*v));
        p.y += (1.0 - o)*(zL*zL*uL*uSc/(2.0*reff) + uCurl*pow(v, 2.5));
        // Each petal is turned very slightly on its own length, so that it lies over the neighbour on
        // one side and under the one on the other, as the petals of a real lotus do; they never cut through.
        p.y += zL*mix(0.05, 0.13, o);
        p.y -= o*o*uReflex*v*v*v;                                    // fully open, the point relaxes backward
        float ang = (1.0 - o)*(uClosed - uLift) + o*uAlt*0.07 + sin(uTime*0.4 + modelMatrix[3].x)*0.018*v*o + uOn*0.1;
        float cs = cos(ang), sn = sin(ang);
        p.xy = vec2(p.x*cs - p.y*sn, p.x*sn + p.y*cs); n.xy = vec2(n.x*cs - n.y*sn, n.x*sn + n.y*cs);
        p *= mix(uSc, 1.0, o);
        vec4 wp = modelMatrix*vec4(p, 1.0);
        float s = clamp((uK - 0.22)/0.78, 0.0, 1.0);
        wp.xz -= modelMatrix[3].xz*(1.0 - mix(uRcF, 1.0, s));        // the base rests round the edge of the heart
        wp.y += uRise*(1.0 - s);                                     // and all the whorls rise from one level until the flower is open
        vW = wp.xyz; vN = normalize(mat3(modelMatrix)*n);
        gl_Position = projectionMatrix*viewMatrix*wp;
      }`,fragmentShader:`uniform float uTime, uOn, uRing, uWhite; varying vec2 vUv; varying vec3 vN, vW; varying float vO;
      void main(){
        vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vW); float facing = dot(N, V); if (facing < 0.0) N = -N;
        float along = vUv.y, across = abs(vUv.x - 0.5)*2.0;
        // a white lotus: pearl white, warm where the light of the centre falls at its base, the faintest rose at its point
        vec3 base = mix(vec3(1.0, 0.9, 0.74), vec3(1.0, 0.985, 0.975), smoothstep(0.0, 0.42, along));
        base = mix(base, vec3(1.0, 0.84, 0.89), smoothstep(0.6, 1.0, along)*mix(0.6, 0.42, vO));   // a bud is a little rosier at its points
        base *= mix(vec3(1.0), vec3(0.93, 0.95, 1.0), uRing*0.3);                        // the outer whorls a breath cooler
        // the fine veins, faded where they would be finer than a pixel (so they never shimmer)
        float vf = (vUv.x - 0.5)*(26.0 + 30.0*along); float vw = fwidth(vf);
        float vein = 1.0 - 0.07*pow(abs(sin(vf)), 3.0)*smoothstep(0.02, 0.3, along)*(1.0 - smoothstep(0.25, 0.9, vw));
        vec3 L = normalize(vec3(0.0, 16.0, 0.0) - vW);
        float dif = max(dot(N, L), 0.0);
        float through = pow(max(dot(-N, L), 0.0), 1.5)*mix(0.7, 0.35, vO);              // light passing through; strongest in the bud
        float sh = 0.5 + 0.4*dif + through;
        sh *= 1.0 - 0.22*smoothstep(0.3, 0.0, along)*(1.0 - across*0.4)*vO;           // shade deep in the cup, where petals meet
        sh *= 0.9 + 0.1*smoothstep(0.0, 0.7, across);                                    // the midrib lies a little deeper
        sh *= 1.0 - 0.1*uRing;
        float fr = pow(max(1.0 - abs(facing), 0.0), 2.6);
        vec3 c = base*vein*sh*mix(0.82, 1.2, uWhite) + vec3(1.0, 0.95, 0.9)*fr*mix(0.16, 0.3, uWhite);
        c += vec3(1.0, 0.92, 0.85)*smoothstep(0.82, 1.0, across)*0.05;                   // a fine bright edge
        c += vec3(1.0, 0.6, 0.15)*uOn*(0.35 + 0.5*along);
        gl_FragColor = vec4(c, 1.0);
      }`}),O=e.years.length;[[O,x-3.5,24,.5,.62,.2,.4,0],[O,x-1.5,32,.33,.6,-1.5,.27,.035],[20,x+.5,40,.17,.64,-3.4,.14,.06],[15,x+1.5,46,.04,.7,-5.2,.01,.09]].forEach(([t,r,i,a,o,s,c,l],u)=>{let d=[.86,.84,.84,.92][u],f=x*.22+.6+u*1.3,p=i*d,g=.2,_=Math.PI/2-g,b=(Math.sin(g)+(f-.6)/p)/Math.cos(g)-.25,T={ring:u,lift:a,closed:_,zc:Bt.clamp(3.4*Math.PI*f/(t*2*.54*p*o),.1,1),reflex:l,curl:b,sc:d,rise:.0026*(x-3.5)**2+.2-(.0026*r*r+s),rc:f,L:i,wide:o,cupK:[1,.5,.36,.28][u]};for(let l=0;l<t;l++){let d=(l+u%2*.5)/t*Math.PI*2-Math.PI/2,p=l%2,g=r-p*1.2,_=new Ai(S,D(T,c+(Math.random()-.5)*.05,p,(f-p*.45)/g));if(_.position.set(Math.cos(d)*g,.0026*r*r+s+p*.5,Math.sin(d)*g),m.setFromAxisAngle(v,-d),h.setFromAxisAngle(y,a),_.quaternion.copy(m).multiply(h),_.scale.set(i,i,i*o).multiplyScalar(p?.97:1),n.add(_),w.push(_),u===0){_.userData.year=l,C.push(_);let t=Wf(e.years[l].y),o=r+i*(Math.cos(a)-.25*Math.sin(a))*1.03;t.position.set(Math.cos(d)*o,_.position.y+i*(Math.sin(a)+.25*Math.cos(a))+2.4,Math.sin(d)*o),_.userData.label=t,t.material.opacity=0,n.add(t)}}});let k=[];for(let e=0;e<=20;e++){let t=e/20*Math.PI/2;k.push(new B(Math.sin(t),-Math.cos(t)))}let A=.0026*(x-3.5)**2+.2+4.2,ee=x*.22+.6+3*1.3+1.3,te=new Ai(new Ro(k,96),new W({side:2,uniforms:{uK:E,uWhite:u},vertexShader:`uniform float uK; varying vec3 vN, vW; varying float vY;
      void main(){
        float s = clamp((uK - 0.22)/0.78, 0.0, 1.0);
        float R = mix(${ee.toFixed(2)}, ${(x-2).toFixed(2)}, s), D = mix(9.5, 5.0, s), top = mix(${A.toFixed(2)}, 0.3, s);
        vY = -position.y;
        vec3 p = vec3(position.x*R, top + position.y*D, position.z*R);
        vec4 w = modelMatrix*vec4(p, 1.0); vW = w.xyz;
        vN = normalize(mat3(modelMatrix)*vec3(normal.x/R, normal.y/D, normal.z/R));
        gl_Position = projectionMatrix*viewMatrix*w;
      }`,fragmentShader:`uniform float uWhite; varying vec3 vN, vW; varying float vY;
      void main(){
        vec3 N = normalize(vN), V = normalize(cameraPosition - vW); if (dot(N, V) < 0.0) N = -N;
        // pearl white where it meets the petals, a breath of pale green toward the stem
        vec3 base = mix(vec3(1.0, 0.985, 0.97), vec3(0.8, 0.88, 0.74), smoothstep(0.15, 1.0, vY));
        float dif = 0.55 + 0.35*max(dot(N, normalize(vec3(0.3, 1.0, 0.4))), 0.0);
        float fr = pow(max(1.0 - abs(dot(N, V)), 0.0), 2.6);
        vec3 c = base*dif*mix(0.82, 1.2, uWhite) + vec3(1.0, 0.95, 0.9)*fr*0.18;
        gl_FragColor = vec4(c, 1.0);
      }`}));n.add(te);let j=[];for(let e=0;e<=24;e++){let t=e/24*(x+1);j.push(new B(t,.0026*t*t-.7))}let ne=new Ai(new Ro(j,96),new W({side:2,uniforms:{uWhite:u},vertexShader:`varying float vR; void main(){ vR = length(position.xz); gl_Position = projectionMatrix*modelViewMatrix*vec4(position, 1.0); }`,fragmentShader:`uniform float uWhite; varying float vR; void main(){ vec3 c = mix(vec3(0.62, 0.5, 0.36), vec3(0.5, 0.47, 0.46), smoothstep(4.0, 30.0, vR)); gl_FragColor = vec4(c*mix(0.75, 2.0, uWhite), 1.0); }`}));n.add(ne);let M=new Fo(Rf.parts.map(e=>{let t=new Xa(e.outer.map(([e,t])=>new B(e*12,t*12)));return e.holes.forEach(e=>t.holes.push(new Ya(e.map(([e,t])=>new B(e*12,t*12))))),t}),{depth:1.7,bevelEnabled:!0,bevelThickness:.3,bevelSize:.18,bevelSegments:4,curveSegments:1});M.translate(0,0,-.85),M.computeVertexNormals();let re=new Ai(M,new W({uniforms:{uTime:rf.uTime,uWhite:u,uA:{value:1}},transparent:!0,vertexShader:`varying vec3 vN, vW; void main(){ vec4 w = modelMatrix*vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix)*normal); gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`varying vec3 vN, vW; uniform float uTime, uWhite, uA;
      void main(){
        vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
        float nd = abs(dot(N, V));
        // white light: the faces blaze, the cut edges are a little softer so the form is seen
        vec3 c = vec3(1.0, 0.985, 0.96) * (0.5 + 1.15*pow(nd, 1.6)) * (0.94 + 0.06*sin(uTime*0.9));
        // in white space the same white is given a body of pale gold at its edges, or it could not be seen
        c = mix(c, mix(vec3(0.95, 0.66, 0.2), vec3(2.6, 2.45, 2.2), pow(nd, 2.0)), uWhite);
        gl_FragColor = vec4(c, uA);
      }`}));re.position.y=13,re.onBeforeRender=()=>{re.rotation.y=Math.sin(rf.uTime.value*.22)*.55},n.add(re);let ie=new Ai(new Uo(6.4,16,12),new vi({colorWrite:!1,depthWrite:!1}));ie.position.y=13,ie.renderOrder=-5,n.add(ie);let ae=new Ai(new zo(64,64),new W({transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:rf.uTime,uBloom:l.uBloom},vertexShader:`varying vec2 vUv; varying float vFar; void main(){ vUv = uv;
      vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0); vFar = smoothstep(6.0, 60.0, -mv.z);   // from very near, the glare gives way to what is inside
      mv.xy += position.xy; gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying vec2 vUv; varying float vFar; uniform float uTime, uBloom; ${of}
      void main(){
        vec2 p = vUv*2.0 - 1.0; float r = length(p); float a = atan(p.y, p.x);
        float rays = pow(abs(sin(a*6.0 + uTime*0.12)), 10.0) + 0.6*pow(abs(sin(a*11.0 - uTime*0.09 + 1.0)), 16.0);
        float g = exp(-r*4.2)*0.4 + rays*exp(-r*3.2)*0.22;                 // a soft glory behind the AUM, never hiding it
        gl_FragColor = vec4(vec3(1.0, 0.96, 0.88)*g*smoothstep(1.0, 0.6, r)*(0.4 + 0.6*uBloom)*vFar*0.8, 1.0);
      }`}));ae.position.y=13,ae.frustumCulled=!1,n.add(ae);let oe=new Ai(new ya(900,96),new W({transparent:!0,depthWrite:!1,uniforms:{uTime:rf.uTime,uWhite:u},vertexShader:`varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`varying vec3 vW; uniform float uTime, uWhite; ${of} ${sf}
      void main(){
        float r = length(vW.xz);
        float rip = sin(r*0.42 - uTime*0.8)*0.5 + 0.5;
        float n = fbm(vW.xz*0.035 + uTime*0.03);
        vec3 c = mix(vec3(1.5, 1.02, 1.0), vec3(2.1, 1.9, 1.8), smoothstep(40.0, 210.0, r));        // the lotus is mirrored as a rose shadow
        c = mix(c, aur(n*1.4 + r*0.004 + uTime*0.01)*1.3 + 0.9, 0.16*smoothstep(60.0, 150.0, r));    // a breath of aurora on the water
        c *= 0.93 + 0.07*rip*smoothstep(260.0, 60.0, r) + (n - 0.5)*0.08;
        // dark space: deep still water holding the lotus light
        vec3 Vd = normalize(cameraPosition - vW);
        float fr = pow(max(1.0 - max(Vd.y, 0.0), 0.0), 3.0);
        vec3 d = mix(vec3(0.006, 0.004, 0.025), vec3(0.12, 0.05, 0.14), fr) + vec3(1.0, 0.72, 0.4)*exp(-r*0.02)*0.18*(0.8 + n);
        d += aur(n*1.4 + r*0.004 + uTime*0.01)*0.05*smoothstep(60.0, 160.0, r)*smoothstep(600.0, 200.0, r);
        c = mix(d, c, uWhite);
        float al = mix(smoothstep(900.0, 300.0, r), smoothstep(560.0, 110.0, r) * 0.85, uWhite);
        gl_FragColor = vec4(c, al);
      }`}));oe.rotation.x=-Math.PI/2,oe.position.y=-7,oe.renderOrder=-1,n.add(oe);let se=uf(7e3,()=>{let e=Math.random()*6.283,t=4+Math.random()**.6*150;return{p:[Math.cos(e)*t,0,Math.sin(e)*t]}},`
    float t = fract(aSeed.x + uTime*mix(0.008, 0.03, aSeed.y));
    p.y = -6.0 + t*90.0; p.x += sin(t*7.0 + aSeed.z*40.0)*3.0; p.z += cos(t*6.0 + aSeed.w*40.0)*3.0;
    a = sin(t*3.14159)*0.8*(0.5 + 0.5*sin(uTime*2.0 + aSeed.z*90.0));
    c = mix(vec3(2.6, 1.3, 0.25), vec3(2.4, 0.7, 0.9), step(0.8, aSeed.w)); s = 0.4 + aSeed.w*1.3;`,{size:.5,blending:1,maxPx:40});n.add(se);let ce=new Js,le=new B;function ue(e,t,n){le.set(e/innerWidth*2-1,-(t/innerHeight)*2+1),ce.setFromCamera(le,n);let r=ce.intersectObject(ie,!1)[0],i=ce.intersectObject(d,!1)[0];if(r&&(!i||r.distance<=i.distance+.5))return{core:!0};let a=ce.intersectObjects(C,!1)[0];return i&&(!a||i.distance<a.distance)?{petal:i.instanceId}:a?{year:a.object.userData.year}:null}return{group:n,petals:d,COUNT:r,RIM:x,yearMeshes:C,name:`The Light`,sub:`where the Guru resides`,scale:`beyond measure`,beat:0,band:`OM`,space:`white`,get sky(){return Bf[this.space]},setSpace(e){this.space=e,u.value=+(e===`white`),oe.visible=e!==`cosmos`,se.visible=e!==`cosmos`,C.forEach(t=>t.userData.label.material.color.set(e===`white`?9180224:16773330))},veil:[1.9,1.75,1.5],setWithin(e){re.visible=!e,ae.visible=!e},setBloom(e){let t=Math.min(1,Math.max(0,(e-.3)/.7)),n=Math.min(1,Math.max(0,t*1.7-.7)),r=.22+.78*n*n*(3-2*n);l.uBloom.value=t,T.value=e,E.value=r,ne.scale.set(r,1,r);let i=Math.min(1,Math.max(0,(e-.93)*14));C.forEach(e=>{e.userData.label.material.opacity=.95*i})},hover(e){l.uHover.value=e??-10},mark(e){l.uOne.value=e??-10},select(e,t){l.uSelA.value=e??-1,l.uSelB.value=t??-1},hoverYear(e){C.forEach((t,n)=>{t.material.uniforms.uOn.value=+(n===e)})},petalPosition(e,t){return t.set(b[e*3],b[e*3+1],b[e*3+2])},pick:ue}}function Wf(e){let t=document.createElement(`canvas`);t.width=256,t.height=96;let n=t.getContext(`2d`);n.font=`500 64px "Cormorant Garamond", Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.shadowColor=`rgba(0,0,0,0.35)`,n.shadowBlur=10,n.fillStyle=`#ffffff`,n.fillText(String(e),128,50);let r=new ma(t);r.colorSpace=Ze;let i=new di(new Zr({map:r,transparent:!0,depthWrite:!1,opacity:.95,toneMapped:!1}));return i.scale.set(9,3.4,1),i}var Gf={_source:`Stars to magnitude 6 and constellation lines: d3-celestial by Olaf Frohn (BSD 3-Clause). Distances: HYG database v4.0 by David Nash (CC BY-SA 4.0). Built by tools/build-sky.mjs.`,stars:[.2691,-48.8099,5.71,.91,181.8,.3338,-50.3374,5.53,1.61,166.4,.3988,-77.0657,4.78,1.25,66.6,.4042,61.2228,5.58,.41,943.4,.456,-3.0275,5.13,-.13,139.3,.4901,-6.0141,4.37,1.63,132.5,.5423,27.0823,5.8,.69,12.2,.583,-29.7204,5.04,-.15,154.1,.6238,8.4855,5.7,.32,36.9,.6504,66.099,5.87,1.07,0,.935,-17.336,4.55,-.05,83.5,1.0569,62.2877,5.9,.27,0,1.0825,-16.529,5.78,1.08,90.7,1.1255,-10.5095,4.99,1.62,641,1.1721,-71.4369,5.59,-.1,175.4,1.1749,67.1664,5.68,1.05,92.7,1.2756,61.314,5.8,-.07,221.7,1.3339,-5.7076,4.61,1.03,39.5,1.4248,13.3963,5.55,.9,114.3,1.5659,58.4367,5.98,.69,21.5,1.5799,-49.0752,5.7,.52,25.7,1.6106,64.1962,5.57,-.02,266,1.9454,-22.5086,5.93,.14,78.4,2.0145,-33.5293,5.67,1.12,95,2.0731,-8.8241,5.99,1.03,98.4,2.0969,29.0904,2.07,-.04,29.7,2.2601,18.212,5.57,1.04,87.4,2.2945,59.1498,2.28,.38,16.8,2.3378,-27.9879,5.42,.41,77.5,2.3527,-45.7474,3.88,1.01,44.2,2.5092,11.1458,5.54,-.06,93.6,2.5091,-82.224,5.29,1.05,78.1,2.5786,-5.2486,5.84,.97,58.3,2.5802,46.0723,5.01,.41,377.4,2.6785,-12.5799,5.84,1,75,2.8161,-15.468,4.89,.49,18.7,2.8934,-27.7997,5.41,1.35,243.3,2.9334,-35.1331,5.24,.46,21.3,3.0416,-17.9383,5.29,1.48,190.8,3.309,15.1836,2.83,-.19,120,3.3318,-84.994,5.78,1.71,298.5,3.3785,41.0354,5.71,.33,34.9,3.426,-26.0223,5.94,1.55,396.8,3.6151,-7.7805,5.13,1.6,178.6,3.6507,20.2067,4.79,1.57,112.9,3.6601,-18.9329,4.44,1.64,137.2,3.7271,-9.5696,5.77,-.08,103.8,4.0369,-31.4464,5.66,1.35,152.2,4.2377,61.5332,5.74,.9,190.1,4.2729,38.6816,4.61,.06,94.7,4.2877,47.9474,5.86,-.08,343.6,4.5819,36.7852,4.51,.05,41.3,4.6594,31.5172,5.88,-.01,166.7,4.857,-8.8239,3.56,1.21,84.2,5.0178,-64.8748,4.23,.58,8.6,5.1017,30.9356,5.89,-.1,159.7,5.1494,8.1903,5.38,1.34,125,5.1627,-69.6249,5.5,-.05,97.6,5.1897,32.9112,5.79,1.59,191.9,5.2803,37.9686,5.16,.44,48.5,5.3699,-77.4269,5.96,1.4,174.8,5.38,-28.9815,5.18,1.01,101.3,5.4428,-20.058,5.61,1.58,270.3,6.0652,52.0199,5.58,-.11,306.7,6.1979,61.8311,5.38,.01,215.1,6.2767,53.0468,5.72,-.06,158.2,6.3509,1.9397,5.77,.85,144.1,6.4378,-77.2542,2.82,.62,7.5,6.5508,-43.6798,3.93,.17,23.8,6.571,-42.306,2.4,1.08,26,6.8113,-25.5472,5.99,1.02,176.1,6.9821,-33.0072,4.86,1.63,138.5,7.0121,17.8931,5.01,1.58,162.1,7.0569,44.3945,5.18,.04,86.7,7.1105,-39.915,5.42,1.56,115.2,7.5098,-3.9573,5.72,1.54,173.9,7.5307,29.7516,5.2,.27,62.8,7.5831,59.9776,5.94,0,235.8,7.5944,-23.7877,5.17,.13,53.1,7.6088,-48.2149,5.67,.37,43.1,7.8541,-48.8035,4.76,.02,53,7.8568,33.5816,5.88,1.13,116.1,7.8861,-62.9582,4.36,-.06,41.4,7.8895,-62.9656,4.53,.15,51.7,7.9215,52.8395,5.59,1.16,116.8,7.9432,54.5223,4.74,-.1,115.7,8.0991,6.9555,5.69,-.01,81,8.1479,20.2943,5.38,1.07,80,8.1829,-63.0315,5.07,.04,45.6,8.25,62.9318,4.17,.13,0,8.2933,54.895,5.93,1.04,114.2,8.421,-29.5583,5.55,1.26,165,8.616,-52.3731,5.57,.47,25.5,8.812,-3.5928,5.2,.57,21.3,8.8868,-.5056,5.94,.44,54.5,8.9216,-48.0009,5.51,.46,34.8,9.0346,54.1685,5.08,-.1,164.5,9.1139,60.3262,5.78,.29,0,9.1935,44.4886,5.14,1.59,189,9.1971,15.2317,5.89,-.15,318.5,9.2202,33.7193,4.34,-.12,183.5,9.2429,53.8969,3.69,-.2,181.8,9.3363,-24.7673,5.57,.71,15.4,9.3384,35.3995,5.45,.89,259.7,9.6389,29.3118,4.34,.87,50.2,9.7912,49.3546,5.45,1.64,641,9.832,30.861,3.27,1.27,32.4,9.8409,21.2505,5.88,.85,11.1,9.9665,-44.7963,6,1.14,94.2,9.9815,21.4385,5.36,1.16,127.1,10.107,-59.4546,5.89,.56,25,10.1268,56.5373,2.24,1.17,70,10.1766,-4.3518,5.9,1.09,144.5,10.2799,39.4587,5.3,.89,108.8,10.3315,-46.085,4.59,.95,75.4,10.4433,-56.5013,5.72,.13,67,10.5143,66.1476,5.83,1.04,158.5,10.5162,50.5125,4.8,-.1,438.6,10.6182,-65.468,5.38,.52,41,10.6748,-60.2628,5.99,1.32,70.8,10.8385,-57.4631,4.36,.02,75.5,10.867,47.0245,4.95,.17,53.7,10.8974,-17.9866,2.04,1.02,29.5,11.0475,-10.6096,4.77,1,71.6,11.0504,-38.4217,5.9,1.14,103.8,11.1091,47.864,5.66,-.11,191.2,11.1813,48.2844,4.48,-.07,215.5,11.185,-22.0061,5.22,.35,26.7,11.2377,-42.6766,5.94,.3,64.4,11.3216,55.2214,5.41,.02,98.8,11.4128,74.9881,5.64,.08,93,11.44,-47.552,5.8,.64,15.2,11.549,-22.5221,5.49,.98,93.3,11.6373,15.4755,5.36,1.56,238.1,11.7561,11.9738,5.51,.99,86.8,11.8347,24.2672,4.08,1.1,58,11.8485,6.741,5.98,.94,141.2,11.9301,-18.0613,5.7,1.3,108.9,11.9419,74.8476,5.42,-.07,236.4,12.0044,-21.7225,5.57,-.06,105.2,12.0381,72.6745,5.86,1.01,61.2,12.0725,7.2999,5.92,1.1,177.6,12.0957,5.2806,5.74,.89,7.5,12.1476,-74.9234,5.09,1.34,64.9,12.1706,7.5851,4.44,1.5,95.4,12.2084,50.9682,4.9,-.09,126.3,12.2446,16.9406,5.07,.5,23.5,12.2762,57.8152,3.46,.59,6,12.3081,-24.1367,5.9,.94,57.9,12.3567,-13.5613,5.59,1.32,85.1,12.4535,41.0789,4.53,-.14,189.4,12.4715,27.7103,5.55,.4,88.6,12.5316,-10.6443,5.17,.51,15.8,12.6716,-50.9868,5.24,.36,74.2,12.6817,64.2475,5.35,.53,196.1,13.1693,-24.0058,5.47,1.27,171.2,13.2521,-1.1443,4.78,1.55,179.9,13.2675,61.124,4.8,.54,18.7,13.4078,-62.8714,5.73,1.57,218.3,13.6468,19.1884,5.8,-.02,108.1,13.7212,83.7074,5.59,.1,87.7,13.7421,23.6283,5.46,1.01,38,13.7507,58.9727,4.83,1.22,100.7,13.7513,-69.5271,5.45,1.09,68,13.9267,-7.3471,5.88,1.52,184.5,14.0062,-11.2665,5.35,1.5,168.9,14.1663,59.1811,4.62,.96,61.3,14.1772,60.7167,2.15,-.05,168.4,14.1884,38.4993,3.86,.13,39.8,14.1957,60.3628,5.56,-.05,165,14.3017,23.4176,4.4,.94,70.4,14.459,28.9922,5.44,1.08,198.8,14.5592,33.9509,5.99,1,56.4,14.6294,66.3518,5.97,-.01,107.4,14.6515,-29.3574,4.3,-.15,238.1,14.6828,-11.38,5.62,.95,98,15.0148,44.7132,5.69,-.01,119,15.3261,-38.9165,5.59,1.19,157.5,15.6101,-31.552,5.5,.08,71.2,15.7046,31.8043,5.5,-.04,133,15.705,-46.3973,5.39,.9,73.1,15.7261,41.3452,5.95,.16,107.3,15.7359,7.8901,4.27,.95,55.7,15.7606,-4.8366,5.4,1.11,102.2,15.9042,61.0748,5.92,.51,613.5,16.01,52.5022,5.99,1.45,326.8,16.081,61.5802,5.83,.57,80.8,16.2723,14.9461,5.64,.42,54.6,16.4206,21.4732,5.33,0,84.3,16.4238,21.4654,5.55,-.05,85.9,16.5215,-9.8394,5.58,.01,180.8,16.521,-46.7184,3.32,.89,0,16.8278,-61.7753,5.36,.88,93.3,16.9425,-9.7856,5.71,.45,47.1,16.9494,-41.4869,5.21,.16,56.9,16.9882,20.7391,5.56,.12,47.3,17.0035,43.9421,5.04,.11,59,17.0683,54.9203,5.17,.7,7.6,17.0925,5.6498,5.51,.33,35.2,17.0962,-55.2458,3.94,-.12,91.6,17.1394,58.2634,5.77,-.02,184.8,17.1475,-10.1823,3.46,1.16,38,17.187,86.2571,4.24,1.21,85.9,17.3755,47.2418,4.26,.01,219.8,17.433,35.6206,2.07,1.58,60.5,17.455,19.6584,5.57,.7,115.5,17.5781,42.0815,5.67,.6,52.3,17.581,25.4578,5.81,1.47,120.8,17.6398,2.4457,5.97,1.49,235.3,17.6638,68.7786,5.32,-.01,84.9,17.7757,55.1499,4.34,.17,41,17.7782,31.4247,5.15,.26,147.3,17.7928,37.7241,5.8,-.1,242.1,17.8565,64.2027,5.56,-.05,124.1,17.8634,21.0347,4.66,1.02,117.6,17.9152,30.0896,4.51,1.09,51.8,17.9225,65.0189,5.57,-.07,119,17.9313,-2.2511,5.93,1.4,171.8,18.0701,79.674,5.6,.01,82.8,18.1893,-37.8565,5.95,.28,69.4,18.4329,7.5754,5.21,.32,53.3,18.4373,24.5837,4.67,1.05,136.8,18.5318,16.1335,5.97,-.08,139.5,18.6002,-7.9228,5.14,.45,23.4,18.7049,-.9738,5.7,.43,42.9,18.7963,-45.5317,4.97,.57,15.1,18.9423,-68.8759,4.25,.48,21,19.0496,71.7438,5.87,2.04,847.5,19.1512,-2.5004,5.42,.89,80.6,19.4498,3.6145,5.13,.07,75.3,19.8666,27.2641,4.74,.03,94.4,19.9512,-.509,5.87,.64,100.7,20.0205,58.2316,4.95,.68,0,20.2807,28.7382,5.23,1.4,107.4,20.5851,45.5288,4.87,1.08,65.7,20.854,20.469,5.97,1.68,306.7,20.879,-30.9456,5.84,1.61,299.4,20.9192,37.7149,5.6,.28,63.9,21.0059,-8.1833,3.6,1.06,34.9,21.0854,-6.9147,5.92,.41,46.6,21.1699,-41.4925,5.42,1.03,72.3,21.2721,-64.3695,5.92,1.56,277,21.4051,-14.5988,4.9,1.23,88.2,21.454,60.2353,2.66,.16,30.5,21.4834,68.13,4.72,1.05,59.8,21.5636,19.1723,5.35,.4,25.2,21.5779,43.4577,5.98,.52,41.7,21.6737,19.2404,5.5,1.11,85.5,21.7149,-13.0565,5.51,.32,37.5,21.9141,45.4067,4.83,.42,28.6,22.0914,-43.3182,3.41,1.54,71.6,22.4006,-21.6293,5.11,.03,71.4,22.5254,47.0073,5.27,1,90.2,22.5463,6.1438,4.84,1.37,93.2,22.5954,-26.2079,5.92,1.33,137.9,22.8073,70.2646,5.82,.49,29,22.8129,-49.0727,3.93,.97,43.6,22.8709,15.3458,3.62,.97,107.2,22.9302,-30.2831,5.79,1.07,102.4,23.2336,-36.8652,5.49,1.02,84.4,23.3571,58.3273,5.69,1.44,675.7,23.4285,-7.0253,5.75,.64,29.5,23.4828,59.232,4.68,.99,63.8,23.5692,37.2371,5.9,-.07,143.5,23.6574,-15.6764,5.62,.07,59.4,23.7044,18.4605,5.9,1.54,163.1,23.9782,17.4338,5.95,.26,58.1,23.9957,-15.4002,5.41,1.23,167.5,24.0355,-29.9073,5.69,.34,69.3,24.1993,41.4055,4.1,.54,13.5,24.2747,12.1415,5.54,.35,35.1,24.3667,-84.7696,5.66,.94,116.7,24.4285,-57.2368,.45,-.16,42.8,24.4815,-82.975,5.88,.62,27.4,24.4982,48.6282,3.59,1.27,54.3,24.5315,57.9776,5.55,1.39,534.8,24.6145,-36.5283,5.94,1.04,101.8,24.6288,73.04,5.28,.97,140.4,24.7158,-21.2754,5.58,.35,77.3,24.8375,44.3862,5.01,.88,76.7,24.9201,16.4059,5.98,1.12,120.2,24.9481,-56.1964,5.76,.88,7.8,25.1451,40.577,4.96,-.07,218.3,25.1652,43.2977,5.63,.21,69.6,25.3579,5.4876,4.45,1.35,111.4,25.4135,30.0471,5.97,1.01,157.7,25.4368,-11.3247,5.75,.44,39.4,25.4464,42.6134,4.96,.62,12.7,25.4499,-60.7893,5.7,1.26,111.5,25.5125,-36.8323,5.7,-.01,93.1,25.5145,35.2457,5.63,-.06,84.2,25.5358,-32.327,5.25,1.04,65.9,25.5855,68.043,5.57,-.05,119.2,25.6221,-53.7408,5.52,.55,17.4,25.624,20.2685,5.24,.84,7.5,25.6813,-3.6902,4.98,1.38,365,25.7328,70.6225,5.18,-.02,85.1,25.8323,60.5513,5.78,-.01,320.5,25.9152,50.6887,4.01,-.1,220.3,26.017,-15.9375,3.49,.73,3.7,26.3485,9.1577,4.26,.94,85.7,26.4115,-25.0526,5.29,.4,28.1,26.4969,-5.7333,5.37,1.52,168.9,26.5249,-50.8163,5.49,1.61,194.6,26.5261,-53.522,5.04,.03,62,26.9368,63.8525,5.63,.8,10.1,27.0456,16.9556,5.86,-.04,84.4,27.1084,3.6854,5.91,.97,98.4,27.1622,37.9529,5.94,.97,104.6,27.1732,32.6902,5.78,.57,27.9,27.3963,-10.6864,4.66,.33,23.2,27.5357,22.2753,5.83,.74,179.5,27.7166,11.0434,5.92,.3,42,27.7268,-50.2061,5.94,.15,77.2,27.738,51.9334,5.96,.42,41.7,27.8651,-10.335,3.74,1.14,72,27.9972,55.1474,5.53,-.17,396.8,28.039,50.7928,5.7,-.07,147.9,28.2171,-16.9292,5.78,.26,94.2,28.2704,29.5788,3.42,.49,19.4,28.3223,40.7298,5.42,1.31,193.4,28.3826,19.2939,3.88,-.05,50.3,28.389,3.1875,4.61,.93,54.9,28.4114,-46.3027,4.39,1.6,104.8,28.5918,-42.4969,5.12,-.06,94.1,28.5989,63.6701,3.35,-.15,126.3,28.66,20.808,2.64,.17,18,28.7339,-67.6473,4.68,.93,67.1,28.9627,23.5773,5.76,1.19,170.9,28.977,37.2778,5.89,1.6,282.5,28.9895,-51.6089,3.69,.84,17.9,29.0001,68.6852,4.97,-.08,215.1,29.039,37.2518,5.69,1.06,97,29.1675,-22.5268,4.92,1.43,108.2,29.292,-47.3853,4.82,.86,76.1,29.3377,17.8175,5.09,.92,159.5,29.4323,27.8044,5.84,1.58,140.3,29.4822,23.5961,4.79,.29,39.5,29.6396,49.2044,5.7,1,75,29.6925,-61.5699,2.86,.29,22,29.8987,21.0586,5.89,1.03,119.9,29.9085,64.6216,5.29,0,75.3,29.9117,-42.0305,5.57,1.05,89.9,29.9425,-20.8245,5.43,1.64,180.5,30.0013,-21.0778,3.99,1.55,89.8,30.0382,3.097,5.89,.61,33.5,30.1118,-8.5239,5.43,1.39,146,30.3113,-30.0018,5.34,.88,90.3,30.4266,-44.7135,5.15,1.47,115.1,30.4894,70.907,4.49,.16,35.3,30.5118,2.7638,3.82,.02,46.2,30.5755,54.4875,4.99,-.07,223.2,30.6462,13.4767,5.97,1.58,206.2,30.7187,64.9015,6,.03,83.9,30.7415,33.2841,5.5,.03,120,30.744,-15.3059,5.87,.97,109.9,30.7508,64.39,5.59,.33,537.6,30.7985,.1285,5.42,.15,86.1,30.8588,72.4213,3.95,0,48.2,30.9139,25.9355,5.64,.54,48.7,30.9187,-4.1035,5.61,1.59,166.1,30.9507,-.3403,5.96,.85,111,30.9748,42.3297,2.1,1.37,120.5,31.1227,-29.2968,4.68,-.16,113.8,31.2809,77.2813,5.27,.34,33.2,31.3815,76.1151,5.22,.95,122.7,31.6414,22.6483,5.03,.12,55.7,31.7934,23.4624,2.01,1.15,20.2,32.1219,37.8591,4.78,.12,58.7,32.1691,58.4236,5.66,.59,0,32.2887,-43.5166,5.84,1.2,159.7,32.3556,25.9399,4.98,.34,88.5,32.3859,34.9873,3,.14,38.9,32.6567,19.5003,5.68,1.64,171.2,32.8378,8.5698,5.64,.57,40.7,32.8426,-10.0522,6,.42,47.6,32.8993,-1.8254,5.94,.97,119,33.0928,30.3031,4.94,.77,89.1,33.1564,24.1678,5.96,1.37,228.8,33.1981,-2.3936,5.65,.55,39.7,33.2004,21.211,5.23,.46,28.9,33.227,-30.7238,5.27,-.01,98.2,33.25,8.8467,4.36,.88,117.5,33.2541,-21.0001,5.86,1.01,106.4,33.2638,15.2799,5.72,1.55,146.8,33.3055,44.2317,4.84,1.48,162.6,33.4014,51.0658,5.31,.93,65,33.5606,-67.8414,5.57,1.56,238.1,33.6331,-41.1668,5.91,.96,105.7,33.8693,-67.7464,5.67,1.31,149.7,33.9282,25.043,5.57,.52,51.1,33.9419,25.7829,5.79,.44,42.1,33.9845,33.3589,5.25,0,86.1,34.1274,-51.5122,3.56,-.12,47.1,34.246,-6.4221,5.51,.96,102,34.2635,34.2242,4.84,.61,10.8,34.3286,33.8472,4.03,.02,34.4,34.4995,57.8998,5.75,1.18,125.9,34.506,1.7578,5.6,.59,24.4,34.5191,57.5163,5.99,1.04,251.3,34.5314,19.9012,5.58,.01,137.2,34.7375,28.6427,5.29,.04,115.5,34.82,47.38,5.31,.01,75.4,34.9761,-55.9448,5.81,1.57,189,35.2425,50.1515,5.57,-.09,120.3,35.4373,-68.6594,4.08,.03,42.8,35.4859,.3957,5.29,1.65,330,35.5064,-10.7775,5.43,.36,29.7,35.5208,-17.6622,5.89,1.23,135.7,35.5517,-.8849,5.42,.34,80.1,35.5893,55.8457,5.16,.37,0,35.6356,-23.8163,5.19,.61,22,35.7096,41.3963,5.81,.29,47,35.7179,-73.6458,5.99,1.09,97.3,35.7278,-51.0921,5.9,.21,60.9,36.1038,50.0065,5.19,.98,122.4,36.2044,10.6106,5.48,-.1,267.4,36.2246,-60.3119,5.36,.4,49.4,36.4059,50.2786,4.73,1.53,113.3,36.4875,-12.2905,4.88,-.03,139.9,36.5015,-15.3412,5.88,.12,77,36.6467,-20.0426,5.89,1.25,84.1,36.7463,-47.7038,4.24,-.14,155.8,36.8657,31.8013,5.55,1.11,85.3,37.0071,-33.811,5.13,.09,46.6,37.0398,8.4601,4.3,-.05,59.2,37.0416,29.6693,5.29,.31,49.8,37.2021,29.9318,5.89,.59,31.4,37.2664,67.4025,4.46,.15,40.7,37.6348,25.235,5.88,.41,51.8,37.6883,.2557,6,.17,86.3,37.8754,2.2672,5.27,1.27,140.8,37.9189,-79.1094,5.27,.98,87,37.9545,89.2641,1.97,.64,132.6,38.0218,-15.2447,4.74,.45,26.7,38.0257,36.1473,5.15,1.47,132.8,38.0393,-1.0349,5.36,1,81.4,38.2192,34.5424,5.84,1.08,83.3,38.2256,15.0346,6,.57,29.9,38.2793,-34.65,5.91,1.06,111.9,38.4613,-28.2323,4.96,-.05,148.4,38.6776,-7.8594,5.74,1.39,140.6,38.9114,37.3123,5.72,1.39,191.2,38.945,34.6876,5.38,1.65,193.8,38.9686,5.5932,4.87,.88,104.3,39.0002,-7.8316,5.53,1.61,142.7,39.0204,6.8869,5.79,.92,7.2,39.0386,-30.045,5.74,1.02,178.6,39.1461,7.73,5.81,1.04,90.7,39.158,12.4476,5.64,.52,34.7,39.2383,38.7336,5.91,.5,54.2,39.2442,-34.578,5.78,.65,25.8,39.3515,-52.5431,5.3,.29,45.6,39.4003,65.7453,5.8,1.56,283.3,39.4242,-3.3962,5.65,1.02,92.5,39.5085,72.8183,5.17,.9,78.4,39.5778,-30.1941,5.84,.48,33.9,39.7041,21.9614,5.45,.17,103.3,39.8707,.3285,4.08,-.21,199.2,39.891,-11.8722,4.83,.45,21.5,39.8973,-68.2669,4.12,-.06,46.6,39.95,-42.8917,4.74,.06,35.7,40.0518,-9.4529,5.79,.52,21.8,40.1651,-54.5499,5.21,.41,49.1,40.1668,-39.8554,4.11,1.01,46.2,40.1711,27.0609,5.3,.08,71,40.3083,-.6957,5.72,.51,22.6,40.3922,-14.5493,5.98,.43,47.2,40.5275,-38.3837,5.99,.92,126.4,40.5621,40.1939,4.91,.58,24.2,40.5914,20.0115,5.74,-.02,116.8,40.6394,-50.8003,5.4,.56,17.2,40.748,53.5261,5.85,1.13,141.2,40.7618,55.106,5.76,-.11,132.3,40.8252,3.2358,3.47,.09,24.4,40.863,27.7071,4.65,-.12,105.2,41.0215,44.297,5.43,.9,301.2,41.0306,-13.8587,4.24,-.12,120.5,41.0499,49.2284,4.1,.51,11.1,41.1374,15.3119,5.78,-.02,182.1,41.2071,67.8246,5.95,.14,126.7,41.2356,10.1141,4.27,.31,25.8,41.2399,12.4458,5.17,.23,36.3,41.2758,-18.5726,4.47,.48,14.2,41.3645,-63.7046,5.73,.93,56,41.386,-67.6166,4.83,.06,87.2,41.9488,81.4485,5.8,1.3,133.2,41.9773,29.2471,4.52,1.11,52.6,42.1337,18.2838,5.83,1.22,141.6,42.1913,25.1881,5.89,-.03,121.8,42.2562,-62.8065,5.25,.1,50.5,42.2726,-32.4059,4.45,.98,52.9,42.3232,17.4643,5.26,-.07,239.2,42.4758,-27.942,5.39,.01,140.6,42.496,27.2605,3.61,-.1,50.8,42.5616,-35.8436,5.92,.9,137.9,42.6186,-75.0669,4.76,1.34,104.1,42.6461,38.3186,4.22,.34,37,42.6684,-35.6758,5.48,1.26,140.8,42.6742,55.8955,3.77,1.69,269.5,42.7597,-21.004,4.76,.91,57.3,42.8733,15.0821,5.52,-.1,151.5,42.8785,35.0597,4.56,1.55,143.3,42.9239,46.8419,5.86,.9,119.9,42.9948,68.8885,5.94,.7,395.3,43.3933,-38.437,5.93,.44,58.5,43.3972,-22.3763,5.93,1.04,111.6,43.4276,38.3375,5.34,.42,70.7,43.5644,52.7625,3.93,.76,77.9,43.9521,18.3316,5.76,1.45,107.8,43.9872,61.5211,5.59,.45,26.7,44.0574,8.3816,5.97,.48,43,44.1069,-8.8981,3.89,1.09,41.9,44.109,18.0231,5.58,.47,35.3,44.1559,-3.7123,5.16,.08,57.2,44.322,31.9342,5.1,-.01,98,44.349,-23.8622,5.44,.24,47.7,44.5218,20.6687,5.8,.41,33.2,44.5239,-23.606,5.82,1.33,203.3,44.5653,-40.3047,2.88,.13,49.4,44.6753,-2.7829,5.22,.01,110.6,44.6903,39.6627,4.68,.07,95,44.6992,-64.0713,4.98,.13,90.3,44.7653,35.1831,4.94,1.24,112.9,44.803,21.3404,4.63,.05,101.9,44.9008,-25.2741,5.69,.43,32.6,44.9162,41.0329,5.89,1.45,198.8,44.9215,-2.465,5.56,-.07,111.1,44.9288,8.9074,4.71,-.11,176.7,44.9575,47.2207,5.47,.87,156.5,45.1839,10.8704,5.93,1.59,161.3,45.2176,52.3517,5.24,-.05,140.6,45.2918,-7.663,5.75,1.04,99.3,45.4068,-28.0916,5.88,.79,32.2,45.4756,26.4624,5.91,.14,64.4,45.4838,-9.9614,5.84,1.09,101.1,45.5644,-71.9025,5.51,-.13,157.7,45.5699,4.0897,2.54,1.63,76.4,45.5938,4.3529,5.62,-.11,168.6,45.5979,-23.6245,4.08,.16,27.2,45.6761,-7.6855,5.32,.94,81.2,45.7328,-46.975,5.81,1.3,259.7,45.9034,-59.7378,5.12,.35,43.4,46.0688,-7.6009,5.26,.19,41.6,46.1991,53.5064,2.91,.72,74.6,46.2941,38.8403,3.32,1.53,94.3,46.3612,25.2552,5.45,-.03,165.3,46.385,56.7057,4.77,1.02,64.7,46.5327,79.4185,5.49,1.57,211.9,46.5987,13.1873,5.64,1.09,96.1,46.6396,-6.0886,5.23,1.57,139.9,46.8292,64.0576,5.89,-.02,189.8,46.8839,-78.9892,5.67,.3,82.8,47.0422,40.9556,2.09,0,27.6,47.2667,49.6133,4.05,.59,10.5,47.374,44.8575,3.79,.98,34.6,47.4031,29.0771,5.74,.12,323.6,47.6616,11.8726,5.97,-.06,136.4,47.8224,39.6116,4.61,1.11,88.3,47.9074,19.7267,4.35,1.03,52,47.9278,81.4707,5.92,.15,62.2,47.9845,74.3937,4.85,.04,50.7,48.0189,-28.9876,3.8,.54,14.2,48.0594,27.257,5.78,-.11,154.1,48.1073,-44.4197,5.92,.44,42.5,48.1099,6.6609,5.55,1.01,230.9,48.1382,-57.3215,5.71,2.42,321.5,48.1935,-1.1961,5.07,.57,22.6,48.3495,48.177,5.93,.97,116.6,48.7254,21.0444,4.87,-.01,80.4,48.8352,30.5567,5.61,.01,159.7,48.9499,57.1406,5.79,.64,877.2,48.9584,-8.8197,4.8,.23,33.6,48.9903,-77.3885,5.51,.44,29.7,49.0508,50.9377,5.04,1.11,242.1,49.1466,32.184,5.98,.99,134.6,49.3608,-47.7517,5.84,1.23,157,49.4423,-62.5753,5.53,.64,12,49.4406,39.2834,5.97,.06,153.4,49.4473,44.025,5.49,-.06,224.2,49.5108,-28.7971,5.93,.34,62.3,49.5534,-62.5064,5.24,.6,12,49.5921,-22.5111,4.86,.9,78.3,49.5934,-.9303,5.62,1.05,67.2,49.6573,50.2222,5.16,-.07,195.3,49.6715,-18.5598,5.72,.38,37,49.6826,34.2227,4.85,1.49,361,49.7818,50.095,5.05,-.07,171.8,49.8404,3.3702,4.84,.68,9.1,49.8792,-21.7579,3.7,1.61,93.4,49.8954,-24.1229,5.63,1.66,299.4,49.9819,-43.0698,4.26,.71,6,49.9825,27.0711,5.91,.86,67.2,49.997,65.6523,4.74,-.11,233.6,50.0823,77.7347,5.44,.21,81.2,50.0848,29.0485,4.47,1.55,166.4,50.2783,3.6756,5.7,.96,98.9,50.3068,21.1471,5.27,-.07,156,50.35,-23.6351,5.5,.89,112.5,50.3607,43.3297,4.96,.05,46.2,50.4689,49.0709,5.94,.47,43.7,50.5496,27.6076,5.55,1.1,271,50.6885,20.7421,5.1,1.23,97.4,50.805,49.2133,5.32,-.08,166.1,51.077,24.7241,5.5,1.19,63.8,51.0807,49.8612,1.79,.48,155.3,51.1238,33.536,5.78,0,133.5,51.169,64.586,5.13,2.04,628.9,51.2033,9.0289,3.61,.89,89.2,51.4011,-69.3364,5.96,.41,39.4,51.5939,-27.3175,5.93,.93,138.5,51.7923,9.7327,3.73,-.08,64.1,51.8893,-35.6813,5.71,1.28,139.5,52.0039,-11.2866,5.74,1.1,97.7,52.0128,49.0629,4.99,-.09,160.8,52.0862,33.8076,5.72,.05,117.2,52.218,49.8484,5.58,-.05,160.8,52.2672,59.9403,4.21,.42,595.2,52.3419,49.5089,4.67,-.1,165.3,52.3445,-62.9375,4.71,.41,21.7,52.4001,-12.6747,5.57,.17,128.2,52.4781,58.8787,4.55,.49,769.2,52.4798,-42.6343,5.76,.2,65.4,52.4954,-78.3518,5.68,.93,98.3,52.5008,55.4518,5.09,.02,60.9,52.602,11.3364,5.14,-.04,110.7,52.6437,47.9952,4.36,1.37,110.3,52.654,-47.3751,5.98,.12,120.3,52.654,48.1036,5.82,-.03,274,52.6544,-5.0751,4.74,-.09,123.9,52.6892,6.1887,5.93,.95,154.1,52.7154,-66.4897,5.81,-.06,266,52.7182,12.9367,4.14,1.11,104.9,53.0358,48.0235,5.47,-.1,185.5,53.0839,84.911,5.62,.89,103.1,53.1094,46.0569,5.3,.4,36.3,53.145,-50.3786,5.67,1.1,95.8,53.1498,9.3734,5.76,-.07,107.4,53.1667,35.4617,5.91,-.08,675.7,53.2327,-9.4583,3.72,.88,3.2,53.396,39.8995,5.79,.14,56.1,53.4127,54.9749,5.98,.11,74.4,53.447,-21.6329,4.26,-.11,89.9,53.6109,24.4644,5.95,.12,131.6,53.9903,-11.1938,5.56,.92,115.9,54.0726,-17.4671,5.24,-.12,149.3,54.1224,48.1926,4.32,-.06,178.9,54.197,.5878,5.82,.89,30.7,54.2183,.4017,4.29,.57,14,54.2737,-40.2745,4.57,1.02,70.8,54.6219,-7.3919,5.86,.98,112.4,54.7547,-5.6262,5.97,.92,33.7,54.963,3.0569,5.55,.93,114,55.1597,-5.2107,5.53,-.14,152.2,55.2827,37.5802,5.55,-.06,251.9,55.5389,63.2168,5.06,1.65,159.2,55.5621,-31.9384,4.99,-.16,259.7,55.579,19.7003,5.68,-.02,165.3,55.5944,33.965,4.97,-.05,323.6,55.6781,59.9694,5.74,1.74,632.9,55.7086,-37.3135,4.59,1.19,56.5,55.7313,47.7876,3.01,-.13,158.2,55.8121,-9.7634,3.52,.92,9,55.891,-10.4857,5.59,.22,42.4,56.0499,-64.8069,3.84,1.13,29.9,56.0797,32.2882,3.84,.02,343.6,56.1271,-1.1631,5.24,-.09,200.8,56.131,36.4601,5.6,.06,90.6,56.2009,24.2895,5.45,-.03,115.6,56.2189,24.1133,3.72,-.1,124.1,56.2354,-.2967,5.56,1.41,120.9,56.2906,24.8393,5.66,-.06,125.5,56.2985,42.5785,3.77,.42,170.6,56.3021,24.4673,4.3,-.11,125.5,56.3162,-47.3595,5.72,.96,103.5,56.4185,6.05,5.34,-.1,163.7,56.4567,24.3677,3.87,-.06,117.5,56.477,24.5545,5.76,-.04,114,56.4969,45.6819,5.66,-.08,229.4,56.5039,67.2016,5.79,.35,55.4,56.5097,63.345,4.78,.75,304,56.5356,-12.1016,4.43,1.6,147.5,56.539,6.8035,5.91,.99,102.8,56.5816,23.9484,4.14,-.05,116.6,56.6143,-29.3382,5.91,.11,101,56.712,-23.2497,4.22,.43,17.6,56.8098,-74.239,3.26,1.59,65.6,56.8712,24.1051,2.85,-.09,123.6,56.9152,-23.8747,5.24,.07,76.9,56.9835,-30.1679,5.52,.97,82.4,57.0678,11.1433,5.08,-.13,139.1,57.0867,23.4212,5.44,-.07,118.3,57.1495,-37.6202,4.3,-.04,50.7,57.1488,-20.903,5.81,1.6,181.8,57.1623,.2279,5.91,1.22,149.3,57.2838,43.9631,5.95,.28,74.2,57.2906,24.0534,3.62,-.07,117.2,57.2967,24.1367,5.05,-.08,117.1,57.3072,70.871,5.4,.1,106.4,57.3635,-36.2003,4.17,.93,64.4,57.3803,65.526,4.39,1.87,243.9,57.3862,33.0914,5.14,.06,82.3,57.4025,63.297,5.82,.19,71.6,57.5184,44.9679,5.65,.78,114.7,57.5789,25.5794,5.24,.23,56.5,57.5896,71.3323,4.59,.06,110,57.9738,34.3591,5.78,-.04,258.4,58.001,6.5349,5.66,.05,238.7,58.1736,-5.3613,5.48,-.09,179.5,58.2919,17.3271,5.97,.35,41.3,58.3888,-46.8937,5.93,1.22,107.6,58.4113,48.6505,5.76,1.04,120.8,58.4123,-34.7323,5.11,-.13,106.2,58.4279,-24.6122,4.64,-.14,115.6,58.4304,57.9751,5.8,.18,50.5,58.533,31.8836,2.84,.27,230.4,58.5729,-2.9547,4.46,.67,96,58.5965,-40.357,5.7,.6,153.1,58.8172,-12.0991,5.99,.32,49.2,58.9924,47.8714,5.39,-.07,223.7,59.1195,35.0809,5.49,-.06,266,59.1522,50.6954,5.28,.42,37.4,59.217,22.478,5.62,.34,42.3,59.2845,61.1089,4.99,1.44,448.4,59.356,63.0723,4.95,-.07,110.6,59.4635,40.0102,2.9,-.2,195.7,59.5074,-13.5085,2.97,1.59,62.3,59.6865,-61.4002,4.56,1.59,161.3,59.7183,-5.4699,5.85,1,46.4,59.7413,35.791,3.98,.02,381.7,59.8755,-12.5744,5.61,1.48,225.2,59.9812,-24.0162,4.62,-.12,100.4,60.1694,-30.4907,5.93,.04,107.8,60.1701,12.4903,3.41,-.1,148.4,60.2032,18.194,5.89,.32,42.9,60.2242,-62.1593,4.48,1.5,143.9,60.3256,-61.0788,4.97,1.39,97.8,60.3835,-1.5497,5.28,-.13,126.9,60.4422,9.998,5.67,.01,175.1,60.6531,-.2689,5.38,.52,18.8,60.7891,5.9893,3.91,.03,35.9,60.9359,5.4356,5.32,-.08,196.5,60.9859,8.1973,5.45,.37,34.9,61.0411,2.8269,5.36,.51,35.4,61.0903,24.106,5.46,.81,347.2,61.0946,-12.7923,5.62,1.06,117.9,61.1132,59.1555,5,.49,625,61.1738,22.0819,4.36,1.06,57.4,61.3344,22.0089,5.9,.62,16.9,61.406,-27.6518,5.59,.32,45,61.5133,68.68,5.88,1.54,191.6,61.646,50.3513,4.25,-.01,129.4,61.6517,27.5999,5.18,-.12,128.9,61.7519,29.0013,5.21,.36,27.6,61.9976,17.3399,5.89,1.5,123.2,62.1526,38.0397,5.52,.52,21,62.1654,47.7125,3.96,-.03,146.2,62.2565,13.3983,5.94,.05,124.5,62.2915,19.6092,5.51,1.08,87,62.3243,-16.3859,5.45,-.15,200,62.5068,86.6261,5.84,.39,42.2,62.5114,80.6987,5.1,.59,116.4,62.5938,-6.9239,5.44,.94,107.8,62.699,-8.8198,5.7,1.06,87.7,62.7078,26.481,5.39,.35,62.9,62.7108,-41.9936,4.93,.33,54.8,62.7459,33.5868,5.75,1.41,301.2,62.8345,5.523,5.71,.36,37,62.9008,-20.3562,5.8,.17,81,62.9664,-6.8376,4.04,.33,37.3,63.3879,7.716,5.29,.37,36.3,63.4849,9.2638,4.84,.8,101.7,63.5005,-42.2944,3.85,1.08,35.3,63.5987,-10.2563,4.87,1.16,74.3,63.6062,-62.4739,3.33,.92,49.6,63.651,10.0114,5.22,-.09,119.9,63.7023,-62.1918,5.45,1.11,80.6,63.7222,40.4837,4.67,1.01,291.5,63.7244,48.4093,4.12,.94,276.2,63.818,-7.6529,4.43,.82,5,63.8836,8.8924,4.27,-.05,139.7,64.0066,-51.4866,4.26,.31,20.5,64.121,-59.3022,4.44,1.08,18.2,64.1795,53.6118,5.2,.05,100.2,64.2231,61.85,5.69,-.12,136.8,64.2837,57.8604,5.72,1.11,79.8,64.3153,20.5786,4.93,.26,28.9,64.3301,-6.4722,5.95,1.08,232,64.4178,-63.2554,5.88,-.06,141.2,64.4736,-33.7983,3.55,-.11,54.6,64.497,-80.214,5.67,.84,129.9,64.5609,50.2955,4.6,.04,96.2,64.567,-20.7153,6,1.6,463,64.5967,21.5793,5.64,.28,54.1,64.8052,50.0487,5.46,.23,74.5,64.8196,-44.2679,5.33,1.07,77.3,64.8587,21.1423,5.5,-.07,82.8,64.9029,21.7735,5.34,-.11,100,64.9483,15.6276,3.65,.98,49.5,64.9904,14.0352,5.58,.28,45.7,65.048,50.9209,5.55,-.03,332.2,65.0601,41.8081,5.95,.96,123.2,65.0884,27.3508,4.97,1.15,98.4,65.1027,34.5667,4.93,.95,66.9,65.1513,15.0955,5.26,.23,46.9,65.1626,-20.6396,5.38,-.03,145.8,65.168,65.1404,5.26,.82,97.9,65.1719,6.1308,5.76,.91,110.6,65.1785,-7.5925,5.85,-.12,242.1,65.2419,-81.5799,5.78,.36,52.1,65.3627,-.0982,5.86,1.32,143.1,65.3882,46.4989,4.8,-.02,155.5,65.4485,60.7356,5.4,1.5,136.8,65.4659,56.5063,5.91,.11,97,65.4722,-63.3864,5.24,.95,117.9,65.5147,14.0772,5.72,.32,44.4,65.5947,20.8214,5.91,1.66,714.3,65.6456,25.6293,5.38,-.04,89.3,65.7337,17.5425,3.77,.98,47.7,65.7736,-24.8922,5.81,1.51,153.6,65.8544,16.7773,5.64,.31,49.9,65.8849,20.982,6,.03,170.1,65.9202,-3.7455,5.17,.07,64.1,65.9659,9.461,5.1,.07,121.4,66.0092,-34.0168,3.97,1.47,90.8,66.024,17.4441,4.8,.15,49.5,66.1215,34.1308,5.73,-.05,137.4,66.1561,33.9597,5.77,.4,40.6,66.238,19.042,5.97,.38,50.5,66.2722,-61.2382,5.94,1.53,215.1,66.3424,22.2939,4.21,.14,47.2,66.3542,22.2,5.27,.25,45.4,66.3724,17.9279,4.3,.05,45.5,66.5263,31.4389,5.29,.99,77.6,66.5769,22.8136,4.28,.26,47.1,66.5864,15.6183,4.48,.26,49.1,66.6516,14.7138,4.69,.98,127.7,66.7623,80.8242,5.42,1.18,296.7,66.8227,22.9963,5.53,-.1,115.9,66.8699,11.2123,5.87,.05,180.2,66.9418,-62.5212,5.74,1,109.8,67.0033,21.6199,5.72,.27,47.1,67.0553,83.8078,5.51,-.11,232,67.0975,14.741,5.9,.33,57.6,67.1099,16.3597,4.96,1.14,57.2,67.1338,1.3808,5.53,-.1,117.4,67.1437,15.9622,3.84,.95,47.3,67.1542,19.1804,3.53,1.01,45,67.1627,-19.4589,5.95,1.22,94.5,67.1656,15.8709,3.4,.18,46.1,67.209,13.0476,5.02,.21,48.9,67.2789,-13.0484,5.61,-.2,465.1,67.5015,83.3404,5.47,.85,94.3,67.5358,15.6378,5.58,.32,45.8,67.6401,16.194,4.78,.17,43.2,67.6557,13.7244,5.4,.26,45.2,67.662,15.6919,5.47,.26,44.9,67.668,-35.6535,5.95,1,120.5,67.7087,-44.9537,5.07,-.19,216,67.9694,-.044,4.91,1.32,201.2,68.0077,53.9108,5.78,.12,0,68.1565,-3.2095,5.76,-.12,145.8,68.3778,72.5286,5.94,.31,101.7,68.3773,-29.7665,4.49,.97,39,68.3915,-62.8237,5.79,1.03,45.1,68.4622,14.8444,4.65,.26,48.5,68.478,-6.7389,5.71,-.13,253.8,68.4991,-55.045,3.3,-.08,51.7,68.5344,5.5686,5.67,.06,148.6,68.5485,-8.2314,5.2,1.71,304.9,68.549,-8.9703,5.24,1.47,233.1,68.6583,28.9612,5.88,-.05,148.8,68.8877,-30.5623,3.81,.96,65.6,68.9136,10.1608,4.25,.18,47.9,68.9802,16.5093,.87,1.54,20.4,69.0798,-3.3525,3.93,-.21,207,69.1008,64.2616,5.91,-.01,135.1,69.1726,41.2648,4.25,1.17,244.5,69.19,-62.0772,5.59,1.5,54.6,69.307,.9983,5.32,-.11,261.1,69.4005,-2.4735,5.22,.28,29.4,69.5394,16.0333,5.78,.31,49.8,69.5394,12.5108,4.27,.12,47.1,69.5451,-14.304,3.86,1.08,33.7,69.566,20.6847,5.85,-.02,101.1,69.7231,-12.1231,4.99,.07,71.3,69.7757,7.871,5.38,.26,49.2,69.7884,15.7998,5.08,.14,45.1,69.8188,15.918,4.67,.15,47.7,69.8321,-14.3592,5.46,1.05,60.1,69.9778,53.0795,5.07,1.08,129.5,69.992,53.473,5.36,.33,44.5,70.0142,12.1976,5.45,-.12,127.7,70.0283,-24.4824,5.56,.93,107.4,70.1105,-19.6715,4.32,1.6,113,70.1405,-41.8638,4.44,.34,20.2,70.3323,28.615,5.73,.02,117,70.3505,48.3009,5.66,0,90.9,70.4594,38.2802,5.97,.59,31.9,70.5145,-37.1443,5.04,.39,28.7,70.5613,22.9569,4.27,-.11,122.1,70.6934,-50.4813,5.3,.98,114.8,70.7264,43.3651,5.3,.03,74,70.7665,-70.931,5.53,-.11,150.6,70.7887,-30.7656,5.66,1.39,196.9,70.84,49.9738,5.86,.01,209.6,70.8948,-8.7943,5.98,.65,653.6,71.0222,-8.5036,5.78,-.08,0,71.0333,-18.6666,5.53,.03,93.8,71.0881,-59.7327,5.28,.21,67,71.1076,11.1461,5.39,.25,45.8,71.2673,-21.2834,5.72,1.48,218.3,71.3756,-3.2547,4.01,-.15,160,71.5073,11.7056,5.35,.2,72.2,71.5701,18.7347,5.99,1.22,80.2,71.6853,40.3126,5.99,.93,132.8,71.9012,-16.9345,5.49,.63,13.3,72.0011,56.7572,5.29,.25,52.8,72.1356,-16.3295,5.76,.54,41.7,72.1516,-5.674,5.77,.63,26.4,72.2098,75.9412,5.96,.28,47.1,72.3035,31.4374,5.57,1.13,65.8,72.3295,32.5882,5.84,.25,83.8,72.46,6.9613,3.19,.48,8.1,72.4777,37.4883,4.89,1.45,154.3,72.5484,-16.2172,5.03,.99,72.3,72.653,8.9002,4.35,.01,68.8,72.7305,-53.4615,5.58,.34,41.6,72.7889,48.7407,5.64,1.01,97.2,72.8015,5.6051,3.68,-.16,322.6,72.8436,18.8399,5.08,.21,51.3,72.8676,-34.9063,5.82,.1,82.2,73.0217,63.5054,5.47,1.56,152.9,73.1332,14.2506,4.71,1.77,199.6,73.1583,36.7032,4.79,1.41,184.5,73.1963,27.8975,5.97,.37,106.4,73.199,42.5866,5.68,.12,138.9,73.2236,-5.4527,4.36,.26,72,73.3449,2.5082,5.33,1.63,181.2,73.5125,66.3427,4.26,-.01,0,73.5629,2.4407,3.71,-.18,411.5,73.6954,11.426,5.18,.12,70,73.6991,7.7791,5.33,1.21,147.7,73.7113,.4672,5.98,-.12,222.2,73.7239,10.1508,4.64,.09,35.7,73.763,55.2591,5.52,.01,190.1,73.7784,-16.7407,5.71,.95,145.1,73.7967,-74.9369,5.47,1.52,204.9,73.8277,-16.4178,5.71,.87,85.3,73.959,15.0403,5.79,-.09,111.5,74.0295,52.8698,5.75,.1,129.7,74.0928,13.5145,4.06,1.16,57,74.1008,-5.1714,5.5,-.12,227.3,74.2484,33.1661,2.69,1.49,151.3,74.3217,53.7521,4.43,-.02,114,74.3431,17.1537,5.51,1.3,146.2,74.4527,23.9486,5.79,1.11,139.7,74.5391,25.0504,5.79,.02,87.2,74.6371,1.714,4.47,1.37,289.9,74.7124,-82.4705,5.84,.93,113.1,74.7557,-16.376,5.65,.45,40.5,74.8142,37.8902,4.93,.04,52.3,74.9602,-10.2633,5.39,.8,54,74.9822,-12.5374,4.78,.27,89,75.0764,39.3947,5.95,.41,59.7,75.0863,81.1941,5.09,1.3,117.8,75.3566,-20.0519,4.91,-.05,60.7,75.3598,-7.174,4.8,-.16,226.8,75.4598,.7221,5.91,1.27,145.1,75.4922,43.8233,3.03,.54,653.6,75.5409,-26.275,5.01,1.06,71.5,75.595,-31.7713,5.92,1.17,95.5,75.6195,41.0758,3.69,1.15,241,75.6792,-71.3143,5.3,1,243.3,75.6874,-22.7951,5.74,1.19,143.5,75.6891,-4.2101,5.86,1.21,91.9,75.7029,-49.1514,5.37,.42,26.1,75.7739,21.59,4.62,.15,53,75.8545,60.4422,4.03,.92,267.4,75.972,-24.3882,5.61,.09,58.2,76.1017,-35.483,4.55,1.18,55.6,76.1423,15.4041,4.65,-.06,112,76.2417,-49.5778,5.05,1.48,136.1,76.3175,-26.1524,5.71,1.17,76.2,76.3653,-22.371,3.19,1.46,65.4,76.3777,-57.4727,4.71,.53,11.6,76.5352,58.9724,5.22,-.08,210.1,76.6238,61.1698,6,1.38,143.9,76.6287,41.2345,3.18,-.15,74.6,76.6693,51.5977,4.98,.34,26.3,76.6902,-4.6552,5.12,-.06,94.7,76.854,-12.4913,5.97,.61,36.7,76.8625,18.6451,4.91,.66,15.4,76.8918,-63.3997,5.19,1.65,173.3,76.9517,20.4184,5.28,.12,58.1,76.9624,-5.0864,2.78,.16,27.4,76.9704,8.4984,5.33,.34,64.6,76.981,21.7048,5.84,.17,331.1,77.0276,24.2652,5.5,.03,458.7,77.0841,-8.6653,5.8,-.06,208.8,77.1821,-4.4562,5.11,.46,25.5,77.2866,-8.7541,4.25,-.19,248.8,77.3318,9.8296,5.43,.25,54.7,77.4248,15.5972,4.81,.31,165,77.4379,28.0305,5.93,.31,52.6,77.6788,46.9621,5.67,.45,48.7,77.8299,-2.4908,5.89,.46,37.6,77.8453,-11.8491,5.6,1.35,149,77.9232,16.0457,5.18,1.52,105.3,77.939,1.037,5.88,.66,195.3,78.0746,-11.8692,4.45,-.1,71.1,78.0936,73.9467,5.44,-.11,115.9,78.2005,-6.0572,5.9,.96,143.9,78.2329,-16.2055,3.29,-.11,57,78.3078,-12.9413,4.36,-.09,223.2,78.3228,2.8613,4.46,1.17,107.3,78.3572,38.4845,4.82,.19,46.9,78.4394,-67.1853,4.81,1.27,150.6,78.6202,-35.977,5.75,1.01,152.4,78.6345,-8.2016,.18,-.03,264.6,78.6835,5.1562,5.5,1.37,149,78.8516,32.6876,5.01,.22,87.6,78.8516,-26.9435,5.06,-.07,85.3,79.0172,11.3414,5.52,-.01,135.9,79.0756,34.3123,5.99,.2,574.7,79.1723,45.998,.08,.8,13.1,79.3712,-34.8952,4.81,.99,32.4,79.4016,-6.8444,3.59,-.12,151.5,79.4177,-13.5198,5.48,.93,49,79.544,33.3716,4.54,1.25,71.2,79.5552,73.2681,5.81,-.02,111.2,79.5654,42.7921,5.55,1.49,172.7,79.7103,-18.1301,5.96,.57,25,79.7501,33.7484,5.38,-.17,126.7,79.7853,40.0991,4.69,.63,12.6,79.7967,2.5958,5.34,.41,62,79.8192,22.0965,4.96,.94,75.8,79.8422,-50.606,5.44,.52,35.7,79.8487,-27.3689,5.98,-.02,134,79.8939,-13.1768,4.29,-.23,261.1,79.9959,-12.3156,5.29,-.1,102.2,80.0038,33.9581,5.05,.29,636.9,80.0611,41.0862,5.46,.12,85,80.0942,62.6537,5.64,1.73,628.9,80.1122,-21.2398,4.7,-.05,127.6,80.3029,29.5699,5.66,.06,88.6,80.3827,-.4165,5.68,-.13,307.7,80.4315,8.4286,5.78,-.11,436.7,80.4406,-.3825,4.72,-.17,284.9,80.4427,-24.773,5.06,.66,107.9,80.4517,41.8046,5.22,-.13,162.3,80.6397,79.2311,5.08,.51,20.9,80.7083,3.5445,4.99,-.1,476.2,80.7096,41.0293,5.54,.13,89.7,80.8271,-8.4156,5.99,-.04,122.7,80.8501,-39.6784,5.73,1.63,199.2,80.866,57.5444,5.24,-.01,103.1,80.8757,-13.9274,5.25,-.22,505.1,80.9263,-.1598,5.69,-.21,268.8,80.9868,-7.8081,4.13,.94,48.2,81.1061,17.3835,5,.54,14.4,81.1187,-16.9758,5.64,0,68.3,81.1192,-2.3971,3.35,-.24,299.4,81.1205,-.8913,5.07,.96,57.2,81.1605,31.1431,5.94,.03,211.4,81.1631,37.3853,5.02,1.45,143.3,81.1868,1.8464,4.89,-.2,318.5,81.2573,-10.3289,5.6,1.54,133.9,81.2828,6.3497,1.64,-.22,77.4,81.4993,-19.6954,5.78,.44,45,81.573,28.6075,1.65,-.13,41.1,81.5803,-58.9125,5.14,.99,140.4,81.7033,34.3918,5.92,.14,645.2,81.7093,3.0957,4.59,-.2,348.4,81.7722,-40.9435,5.86,.24,91.9,81.7845,30.2086,5.69,.17,440.5,81.7921,17.9622,5.4,-.09,168.4,81.9087,21.937,4.88,-.14,191.6,81.912,34.4759,5.08,1.4,138.9,81.94,15.8741,5.52,.01,130,82.0067,17.2391,5.77,1.63,188,82.0613,-20.7594,2.81,.81,49.2,82.0639,-37.2308,5.56,.03,87.8,82.3188,25.1502,5.47,-.04,130.4,82.3487,-3.4464,5.8,1.15,151.1,82.4333,-1.0922,4.71,1.59,155.8,82.4782,1.7893,5.77,-.19,438.6,82.5395,-47.0777,5.46,.61,44.1,82.5425,63.0672,5.43,1.7,288.2,82.609,15.3604,5.93,.1,77.6,82.696,5.9481,4.2,-.14,92.9,82.7027,41.462,5.99,1.11,128.9,82.7818,-20.8637,5.53,.01,83.3,82.8031,-35.4705,3.86,1.13,80.7,82.8106,3.2921,5.46,-.18,348.4,82.9,-45.9253,5.86,1.35,168.1,82.9709,-76.341,5.18,1.13,31.4,82.9827,-7.3015,4.62,-.26,877.2,83.0017,-.2991,2.25,-.17,212.3,83.0531,18.5942,4.32,2.06,549.5,83.0589,17.0581,5.5,0,917.4,83.1723,-1.5918,5.34,-.19,478.5,83.182,32.192,4.71,.28,0,83.1826,-17.8223,2.58,.21,680.3,83.2142,-38.5134,5.45,1.22,52.8,83.2482,-64.2275,5.34,1.04,71,83.2808,-35.1394,5.75,1.08,78.9,83.381,-1.1561,5.36,-.17,450.5,83.3818,18.5402,5.67,-.02,476.2,83.4063,-62.4898,3.76,.64,308.6,83.4762,14.3056,5.6,-.12,136.8,83.5169,-1.4703,5.92,1.53,209.6,83.5699,3.7669,5.32,.05,84.6,83.6866,-73.7413,5.79,1.72,333.3,83.7052,9.4896,4.39,-.16,333.3,83.7542,-6.0093,5.67,-.23,826.4,83.7612,-6.002,4.78,-.25,495,83.7845,9.9342,3.39,-.16,336.7,83.8052,10.2401,5.6,.15,343.6,83.8145,-33.0797,5.76,1.12,92.4,83.8159,-5.3873,4.98,.6,0,83.8186,-5.3897,5.13,.02,0,83.8454,-5.4161,4.98,-.1,473.9,83.8465,-4.8384,4.58,-.18,271,83.8583,-5.9099,2.75,-.21,714.3,83.863,24.0396,5.37,-.09,169.5,83.9145,-4.8561,5.24,.27,110.3,84.0534,-1.2019,1.69,-.18,606.1,84.1467,54.4287,5.74,1.67,228.8,84.1487,-6.0648,5.71,-.21,471.7,84.2266,9.2907,4.09,.95,36,84.2656,17.0403,5.53,.24,48.6,84.2683,11.035,5.97,1.59,251.9,84.2912,-80.4691,5.65,.6,18.3,84.2869,26.9245,5.83,-.07,154.8,84.4112,21.1425,2.97,-.15,136.4,84.4359,-28.6897,5.28,.49,40.8,84.5047,7.5414,5.87,-.06,239.2,84.6582,-6.574,5.96,-.22,411.5,84.6587,30.4924,5.4,.45,173.6,84.6814,-40.7073,5.81,-.08,134.8,84.6865,-2.6001,3.77,-.19,328.9,84.7212,-7.2128,4.77,.14,44.6,84.7964,4.1215,4.5,-.1,423.7,84.8263,29.2152,5.98,.14,324.7,84.8798,-3.5647,5.99,.29,42.6,84.9122,-34.0741,2.65,-.12,80.1,84.9342,25.8971,5.18,-.15,131.1,84.9577,-32.6292,5.44,.91,129.4,85.1897,-1.9426,1.74,-.2,225.7,85.2113,-1.1288,4.95,-.2,275.5,85.2733,.3378,5.93,.31,47.9,85.3238,16.5341,4.84,-.13,194.9,85.5582,-22.3737,5.88,.08,304.9,85.5633,-34.6678,5.29,-.03,131.4,85.6102,65.6976,5.62,1.25,83.6,85.6193,1.4746,4.9,1.14,90,85.7246,-6.7962,5.97,.45,50,85.8403,-18.5575,5.73,-.01,75.1,86.1158,-22.4484,3.59,.48,8.9,86.1932,-65.7355,4.34,.22,45.9,86.4752,49.8263,5.46,.03,126.7,86.4996,-32.3064,5.18,-.27,408.2,86.6141,-46.5972,5.31,1.04,143.9,86.6266,56.1156,5.93,.16,60.8,86.6455,1.1682,5.95,.77,39.3,86.6896,15.8225,6,-.06,225.2,86.7172,9.5223,5.78,.89,91.3,86.7389,-14.822,3.55,.1,21.6,86.8048,14.4883,5.72,.08,104.2,86.8212,-51.0665,3.85,.17,19.4,86.8592,17.7291,5.47,.3,546.4,86.9288,13.8996,5.28,-.16,194.2,86.9391,-9.6696,2.07,-.17,198.4,87.001,6.4542,5.26,.23,165,87.1456,-4.0946,5.97,.64,15.2,87.254,24.5675,4.88,1.02,111.5,87.2935,39.1811,4.51,.95,63.4,87.3872,12.6513,4.89,-.07,76.3,87.4023,-14.4837,5.49,.87,82,87.4569,-56.1667,4.5,1.07,54.2,87.4729,-22.9719,5.87,.06,170.4,87.473,-66.9012,5.1,-.13,176.1,87.5112,9.8712,5.79,.88,109.9,87.5544,4.4234,5.96,1.36,178.3,87.5699,-79.3614,5.46,-.08,87.4,87.6204,14.3056,5.54,1.01,97.1,87.6251,2.0247,5.97,.95,316.5,87.7218,-52.1089,5.16,.96,78.6,87.74,-35.7683,3.12,1.15,26.7,87.7421,27.9679,5.6,.98,107.1,87.7602,37.3056,4.72,1.62,160.3,87.8304,-20.8791,3.76,.98,34.9,87.8416,-7.518,5.36,-.2,321.5,87.8725,39.1485,3.97,1.13,70.6,88.0322,-9.0419,5.95,.1,98.9,88.0842,-57.1562,5.93,.66,132.6,88.0929,14.1718,5.6,-.05,130,88.0975,19.8678,5.96,.55,343.6,88.1102,1.8551,4.76,1.38,386.1,88.1383,-37.6311,5.62,1.05,98.7,88.2787,-33.8014,4.88,-.15,102.6,88.3319,27.6123,4.56,-.01,129.7,88.5252,-63.0896,4.65,1.02,26.2,88.5958,20.2762,4.39,.59,8.7,88.6818,-11.7742,5.62,1.52,203.3,88.6835,.9686,5.99,1.33,268.1,88.7087,-52.6355,5.29,.29,34.7,88.7116,55.7069,4.96,.05,73,88.7187,-39.9579,5.55,1.51,155.3,88.7362,19.7496,5.92,-.14,558.7,88.7409,59.8884,5.2,.01,143.7,88.7458,31.7015,5.9,.14,85,88.7929,7.4071,.45,1.5,152.7,88.8747,-37.1207,4.97,1.1,102,88.8757,-4.6165,5.87,1.17,97,89.0595,-22.84,5.95,1.11,88.7,89.0873,-31.3824,5.52,.38,510.2,89.1012,-14.1677,3.71,.34,14.9,89.1168,9.5094,5.97,-.04,120,89.206,11.5211,5.89,1.11,94.6,89.3842,-35.2833,4.36,-.17,266.7,89.4986,25.9539,4.81,-.09,476.2,89.6018,1.8371,5.89,.22,111.7,89.6564,-44.0346,5.81,1.06,362.3,89.7065,.553,5.21,.01,136.6,89.7218,12.8083,5.7,.87,243.3,89.768,-9.5583,5.04,.19,87.8,89.7867,-42.8151,3.96,1.15,144.7,89.8407,49.9245,5.9,1.19,328.9,89.8818,54.2847,3.72,1.01,38.6,89.8822,44.9474,1.9,.08,24.9,89.9303,37.2126,2.65,-.08,50.8,89.9837,45.9367,4.3,1.7,230.4,90.014,-3.0743,4.53,1.2,129,90.2049,-51.2163,5.65,.21,65.2,90.244,47.9019,5.71,-.01,354.6,90.3179,-33.9118,5.54,1.58,188.3,90.4294,48.9594,5.98,1.44,242.1,90.4601,-10.5979,4.92,-.13,240.4,90.5958,9.6473,4.12,.17,47.5,90.815,-26.2845,5.03,1.33,124.7,90.864,19.6906,5.14,-.1,220.3,90.9799,20.1385,4.64,.24,552.5,91.0301,23.2633,4.16,.83,47.6,91.0563,-6.7089,5.19,-.07,403.2,91.0844,-32.1724,5.65,-.19,308.6,91.1671,-45.0789,5.93,.49,26.9,91.2424,5.42,5.67,1.05,401.6,91.2432,4.1587,5.63,1.04,0,91.2464,-16.4844,4.92,.2,278.6,91.2641,42.9816,5.9,.36,49.7,91.3626,-10.2426,5.88,.37,54.9,91.3632,-35.5136,5.8,.03,83.1,91.5231,-29.7586,5.79,.04,85.3,91.5391,-66.0396,5.72,-.02,98.6,91.5388,-14.9353,4.67,.05,53,91.6337,-23.1108,5.46,.06,141,91.6462,38.4826,5.35,.25,104.5,91.6614,-4.1938,5.37,-.12,324.7,91.7396,-21.8123,5.74,1.58,384.6,91.7641,-62.1546,5.04,1.26,110.9,91.7653,-34.312,5.82,-.14,312.5,91.8818,-37.2529,5,-.1,221.2,91.893,14.7685,4.42,-.16,158.2,91.9235,-19.1659,5.28,1.66,257.1,91.9702,-42.154,5.5,.01,74.5,92.1844,-68.8434,5.06,-.07,91.9,92.2411,-22.4274,5.49,-.01,75.5,92.2413,2.4997,5.7,.07,200.8,92.3852,22.1903,5.93,1.63,632.9,92.3939,-14.5846,5.56,1.15,63.8,92.4333,23.1135,5.75,.19,0,92.4498,-22.7743,5.71,.45,49,92.4959,58.9357,5.35,1.1,116.8,92.5433,-40.3538,5.54,1.67,261.1,92.5603,-74.753,5.08,.71,10.2,92.5746,-54.9686,4.72,-.23,398.4,92.6445,-27.1543,5.72,1.07,101.1,92.8124,-65.5894,5.01,1.6,196.5,92.8846,24.4203,5.83,1.11,174.2,92.9025,48.711,5.78,.1,102.5,92.9659,-6.5503,5.06,-.2,366.3,92.985,14.2088,4.45,-.18,186.2,93.0056,19.7905,5.76,-.07,255.1,93.0137,16.1304,4.95,-.15,162.1,93.0838,32.6934,5.78,1.65,285.7,93.2128,65.7184,5.36,1.34,219.3,93.476,-3.7414,5.83,.91,94.3,93.6191,17.9064,5.86,.25,162.1,93.6529,-4.5685,5.83,-.15,196.1,93.712,19.1564,5.2,.43,20.8,93.7139,-6.2748,3.99,1.32,152.7,93.7194,22.5068,3.31,1.6,117.9,93.7853,13.8511,5.91,-.23,366.3,93.785,-20.2722,5.88,1.32,226.2,93.8238,-18.4772,5.99,1.06,62.5,93.8445,29.4981,4.32,1.02,54.3,93.8547,16.1432,5.34,-.1,160.3,93.8736,-4.9147,5.99,.1,65.1,93.8928,-.5122,5.62,.51,37.2,93.9189,59.999,5.37,1.34,150.8,93.937,-13.7184,5,-.08,125,93.9374,12.5511,5.44,.01,357.1,94.032,-16.618,5.97,-.17,238.7,94.1109,12.2722,5.04,.43,19.2,94.1381,-35.1405,4.37,.98,56,94.1483,-39.2644,6,.16,123.3,94.2551,-37.7374,5.54,1.13,91.6,94.2776,9.9424,5.39,.11,69.1,94.2899,-37.2535,5.88,.14,61.9,94.3172,5.1001,5.7,.61,19.2,94.4238,-16.8159,5.15,1.29,189.8,94.4784,61.5153,5.01,1.84,195.7,94.5572,-19.967,5.51,-.16,243.9,94.7108,-9.39,5.36,1.24,144.1,94.7116,69.3198,4.76,.03,53.6,94.7457,-20.9256,5.79,-.15,537.6,94.9058,59.011,4.44,.03,48,94.9207,-34.3966,5.76,-.08,125,94.9283,-7.8229,5.27,-.18,267.4,94.9983,-2.9445,4.91,1.61,142.5,95.0176,14.6511,5.67,1.58,181.8,95.0783,-30.0634,3.02,-.16,111.1,95.151,-34.1441,5.55,-.18,595.2,95.353,-11.7732,5.48,0,337.8,95.4422,53.4522,5.34,.45,59.2,95.5285,-33.4364,3.85,.86,71.7,95.6516,12.5702,6,.32,69.8,95.6595,-69.984,5.56,1.51,189.8,95.6749,-17.9559,1.98,-.24,151.1,95.7326,-56.37,5.6,.24,48.3,95.7401,22.5136,2.87,1.62,71,95.942,4.5929,4.39,.21,37.5,95.983,-25.5776,5.61,1.56,310.6,95.988,-52.6957,-.62,.16,94.8,96.0042,-36.7078,5.62,1.03,101.5,96.043,-11.5301,5.21,1.23,106.8,96.0577,-60.2813,5.78,0,93,96.2246,49.2879,4.92,1.91,0,96.3189,-.9459,5.88,.56,33.6,96.3693,-69.6903,5.37,.97,82.8,96.4319,-48.1769,5.76,-.06,180.2,96.6077,56.2851,5.53,.24,75,96.6649,-1.5073,5.87,.07,72.5,96.7036,58.4174,5.21,1.54,191.9,96.7672,-58.0021,5.82,1.28,172.7,96.8073,.2992,5.19,1.19,260.4,96.815,-.276,5.55,1.38,212.3,96.8352,2.9083,5.55,1.03,94.4,96.9899,-4.7622,5.06,-.17,333.3,97.0425,-32.5801,4.47,-.17,129.9,97.142,30.493,5.75,.78,0,97.1559,-17.466,5.76,1.12,139.9,97.1635,-32.3713,5.74,-.16,264.6,97.2045,-7.0331,3.76,-.11,207.5,97.2408,20.2121,4.13,-.12,166.9,97.3687,-56.8528,5.2,1.09,93.3,97.4544,-50.2391,5.28,.37,51.4,97.5124,46.6856,5.88,1.45,187.3,97.547,-10.0815,5.92,1.37,319.5,97.6929,-27.7696,5.92,-.16,377.4,97.6963,58.1626,5.86,.93,55.8,97.8046,-35.2588,5.82,.81,188.7,97.8263,-51.826,5.58,.53,36.9,97.846,-12.392,5.16,1.26,112.4,97.9512,11.5444,5.22,.18,63.7,97.9586,-8.1582,5.43,1.37,214.1,97.964,-23.4184,4.34,-.24,423.7,97.993,-58.7538,5.69,-.06,232,98.08,4.856,5.88,1,172.4,98.0891,-37.6967,5.25,.98,83.8,98.0964,-5.8688,5.6,.26,41.8,98.1133,32.4549,5.82,.19,80.6,98.1624,-32.0304,5.73,-.18,537.6,98.2259,7.333,4.47,.02,0,98.4007,14.1552,5.57,1.1,77,98.408,-1.2202,5.09,-.13,169.8,98.4562,-36.232,5.42,1.42,120,98.6472,-32.7163,5.62,-.09,161.3,98.7441,-52.9756,4.35,-.02,418.4,98.7641,-22.9648,4.54,-.04,135.3,98.8003,28.0223,5.26,-.01,113.4,98.8159,.8902,5.78,0,467.3,98.8233,9.9883,5.93,1.51,469.5,98.8509,-36.7799,5.59,-.13,156.3,99.0952,-18.6599,5.71,.85,107.5,99.1368,38.4455,5.4,2.77,0,99.1472,-5.2111,5.52,-.08,230.9,99.171,-19.2559,3.95,1.04,19.8,99.1942,-13.321,5.95,1.56,211,99.3076,-36.9907,5.72,-.11,350.9,99.41,56.8575,5.87,.01,101.7,99.4224,61.4812,5.94,.9,52.1,99.4279,16.3993,1.93,0,33.5,99.4403,-43.1959,3.17,-.1,113.9,99.4484,-32.3397,5.25,1.18,123.3,99.4726,-18.2375,4.42,1.14,129.2,99.5959,28.9844,5.76,0,106.3,99.6568,-48.2202,5.05,1,146.2,99.6647,39.3909,5.7,1.37,149.7,99.7049,39.9026,5.34,-.07,420.2,99.8197,-14.1458,4.82,1.46,303,99.8326,42.4889,4.8,1.24,127.6,99.9278,-30.4705,5.7,1.13,73.4,99.9488,12.9828,5.99,.06,78.9,100.012,-80.8136,5.61,.21,126.9,100.1203,77.9958,5.75,1.49,214.1,100.1344,71.7488,5.88,1.22,237.5,100.2444,9.8958,4.66,-.23,281.7,100.2727,.4953,5.79,-.09,384.6,100.4849,-9.1675,5.21,1.52,105.6,100.6014,17.6453,5.2,.06,43.6,100.7707,44.5244,5.04,1.48,99.2,100.911,3.9325,5.88,-.05,877.2,100.983,25.1311,3.06,1.38,259.1,100.9971,13.228,4.49,1.17,88.6,101.1186,-31.0705,5.23,-.13,0,101.1894,28.9709,5.42,1.45,146,101.2872,-16.7161,-1.44,.01,2.6,101.3224,12.8956,3.35,.44,18,101.3456,-31.7937,5.92,.49,24.4,101.38,-30.949,5.62,-.14,581.4,101.4738,-52.4097,5.81,1.55,395.3,101.4975,-14.7961,5.3,.07,130,101.5589,59.4417,4.86,.08,65.8,101.559,79.5648,5.44,.53,17.9,101.6351,8.5872,5.92,-.17,263.2,101.6626,-10.1074,5.66,-.05,165.6,101.6847,43.5774,5.24,.57,16.7,101.7063,57.1692,5.34,.96,64.7,101.7129,-14.426,5.28,-.02,243.9,101.7195,-51.2657,5.39,1.33,252.5,101.828,-55.54,5.6,1.55,184.5,101.8326,8.0373,4.77,1.4,151.1,101.8392,-37.9297,5.27,-.08,99.4,101.9051,-8.9985,5.08,1.79,432.9,101.9149,48.7895,5.22,1.13,110.5,101.9652,2.4122,4.48,1.1,112.9,102.0477,-61.9414,3.24,.23,29.6,102.0512,55.7042,5.54,.6,44.3,102.0794,-1.3189,5.75,.29,40,102.2406,-15.1447,5.39,-.1,162.1,102.3184,-2.272,5.75,-.1,176.1,102.4221,32.6068,5.72,1.3,127.6,102.4577,16.2029,5.87,-.14,263.2,102.4602,-32.5085,3.5,-.12,202,102.4638,-53.6224,4.41,.9,166.9,102.4776,-46.6146,5.14,.46,25.3,102.484,-50.6146,2.94,1.21,55.8,102.5907,-17.0846,5.77,1.44,363.6,102.5973,-31.7061,5.74,.09,199.2,102.6062,13.4132,5.68,1.33,540.5,102.6914,41.7812,4.99,1.26,116.1,102.7076,-.5409,5.78,.4,29.7,102.7181,-34.3673,4.99,1.38,250,102.7379,67.5719,5.14,-.15,283.3,102.8624,-70.9634,5.41,-.11,172.7,102.8877,21.7611,5.28,-.02,150.6,102.9268,-36.2303,5.94,.18,55.2,102.9999,23.6017,5.68,1.47,141.8,103.1972,33.9613,3.6,.1,58,103.2061,8.3804,5.75,.27,62.3,103.271,59.4485,5.34,.68,149.3,103.3284,-19.0328,5.65,.28,95.5,103.3871,-20.2243,4.82,-.21,373.1,103.426,68.8883,5.11,-.11,300.3,103.5331,-24.1842,3.89,1.74,0,103.5475,-12.0386,4.08,1.42,79.9,103.6028,-1.127,5.44,.17,169.2,103.661,13.1778,4.73,.32,25.6,103.7614,-20.4049,5.8,.05,154.6,103.8278,25.3757,5.74,.57,17.2,103.906,-20.1365,4.66,.37,29.6,103.9455,-22.9414,5.29,-.16,0,104.0277,-14.0434,5,1.18,381.7,104.0343,-17.0542,4.36,-.06,769.2,104.0666,-48.7211,4.94,1.67,263.9,104.1076,9.9566,5.9,-.09,139.3,104.1336,46.274,5.85,-.08,386.1,104.1436,-79.4202,5.45,.04,108,104.2335,46.7054,5.88,1.09,107.2,104.2522,33.681,5.91,.88,129.5,104.3192,58.4228,4.35,.85,54.7,104.3913,-24.6308,5.45,.39,37.9,104.4046,45.0941,4.9,.03,73.9,104.6046,-34.1117,5.07,-.15,180.8,104.6496,-25.4142,5.59,-.16,264.6,104.6565,-28.9721,1.5,-.21,124.2,104.7376,3.6024,5.96,1.06,257.1,104.9606,-67.9164,5.18,1.4,89.6,105.0168,76.9774,4.55,1.36,56.3,105.0659,16.079,5.73,1.64,0,105.099,-8.4068,5.95,-.07,330,105.2145,-51.4026,5.14,1.65,198,105.2748,-25.2156,5.64,-.17,312.5,105.3392,70.8083,5.69,1.34,156,105.4298,-27.9348,3.49,1.73,343.6,105.4849,-5.7221,5.22,1.69,175.1,105.5729,15.336,5.78,1.14,183.2,105.6033,24.2154,5.2,.95,456.6,105.6064,17.7555,5.96,1.52,246.9,105.6387,16.6744,5.86,1.66,769.2,105.7282,-4.2392,4.99,-.2,373.1,105.7561,-23.8333,3.02,-.08,847.5,105.8129,-59.1781,5.5,-.13,151.3,105.8246,9.1384,5.96,.13,101.9,105.8769,29.3371,5.93,.59,19.1,105.9086,10.9518,5.14,1.39,182.1,105.9396,-15.6333,4.11,-.11,135.5,105.9734,-49.5839,4.92,.14,60.6,105.9888,-43.608,5.56,.62,16.5,106.0116,-42.3373,5.2,.2,106.8,106.0219,-5.324,5.63,1.29,380.2,106.0272,20.5703,4.01,.9,421.9,106.0764,-56.7497,5.14,-.03,92.3,106.3265,22.6375,6,-.03,123,106.4126,9.1858,5.78,1.51,304,106.5483,34.474,5.55,.91,92.7,106.6699,-11.294,5.41,.03,934.6,106.7795,-40.8933,5.8,-.16,238.1,106.8054,-51.9683,5.96,1,166.9,106.8433,34.0093,5.94,1.51,201.2,106.8441,-23.8407,5.75,-.12,0,106.9562,7.4712,5.74,1.18,182.5,107.0918,15.9307,5.47,1.02,98.9,107.0979,-26.3932,1.83,.67,492.6,107.1765,-70.4971,5.68,.44,49.7,107.1869,-70.4989,3.78,1.01,42.9,107.2128,-39.6557,4.83,-.18,223.2,107.389,-16.2345,6,.04,684.9,107.4293,-25.231,5.69,-.16,565,107.557,-4.2371,4.91,1.02,62.2,107.5805,-27.4915,5.46,1,216.5,107.6978,-48.9321,5.12,1.25,96.9,107.7849,30.2452,4.41,1.26,98.4,107.8461,26.8566,5.75,.13,119.2,107.8484,-.3019,5.44,.31,87.2,107.9139,39.3205,4.91,1.45,148.8,107.9234,-20.8831,5.84,-.04,143.3,107.9661,-.4928,4.15,-.01,117.8,108.0509,-25.9426,5.91,-.17,257.1,108.0659,-40.4988,5.3,.07,126.1,108.1076,-36.5444,5.94,-.14,278.6,108.1099,24.1286,5.85,.4,109.8,108.1401,-46.7593,4.49,.32,21.4,108.28,-11.2513,5.77,1.51,202.4,108.3056,-45.1827,4.87,0,56.5,108.3428,16.159,5.07,1.65,165.8,108.3475,51.4287,5.46,1.64,221.7,108.3501,-22.6742,5.99,1.48,245.1,108.3847,-44.6397,4.42,1.33,64.1,108.5452,-3.9018,5.8,1.58,396.8,108.5634,-26.3525,4.42,-.17,531.9,108.5647,-9.9475,5.9,1.53,574.7,108.5836,3.1114,5.36,1.19,227.3,108.6359,12.1158,5.71,1.01,90.3,108.6589,-48.2719,4.75,-.09,115.5,108.6749,24.885,5.84,1.55,92.1,108.6917,-46.8497,5.72,-.11,142.5,108.7027,-26.7727,4.01,-.15,279.3,108.7132,-27.038,5.58,1.22,83.3,108.7381,-41.4264,5.95,-.15,167.8,108.8378,-30.6864,5.36,-.15,192.7,108.8384,-52.4992,5.96,1.1,128,108.9143,7.9777,5.78,1.54,166.4,108.9302,-10.5836,5.95,1.17,121.2,108.9589,47.24,5.54,.58,16.9,108.9788,59.6375,5.2,1.08,61,108.9882,27.8974,5.75,1.6,235.8,109.0606,-15.5857,5.46,.08,82.5,109.0645,-46.7745,5.64,1.44,230.4,109.1327,-38.3189,5.81,-.13,187.3,109.1458,-27.8812,4.66,1.59,124.2,109.1535,-23.3156,4.83,1.6,434.8,109.2059,-36.5926,5.03,-.16,230.9,109.2076,-67.9572,3.97,.76,226.2,109.2857,-37.0975,2.71,1.62,247.5,109.3905,52.1311,5.93,1.26,183.5,109.5092,40.8834,5.87,.18,85.3,109.5177,-43.9868,5.86,-.12,181.5,109.5232,16.5404,3.58,.11,30.9,109.5766,-36.734,4.65,-.1,246.3,109.6332,49.4648,5,.09,107,109.6396,-39.2103,5.24,.03,141.8,109.6591,-36.7427,5.11,-.17,232,109.6682,-24.5587,4.88,-.16,584.8,109.677,-24.9544,4.37,-.13,917.4,109.7136,-26.5859,5.29,.96,384.6,109.8432,2.7407,5.9,1.07,195.3,109.8674,-16.3952,5.7,.35,42.8,109.9485,7.1429,5.91,.54,53.3,110.0307,21.9823,3.5,.37,18.5,110.0893,-52.3115,5.5,.48,31.7,110.1617,-52.0859,5.38,-.07,147.3,110.2288,-26.9638,6,-.17,763.4,110.2429,-14.3605,5.59,.97,184.8,110.2681,-25.8916,5.87,1.6,196.1,110.3229,45.2282,5.74,.34,35.5,110.4869,20.4437,5.09,1.53,135.9,110.5109,36.7606,5.12,1.08,72.4,110.5145,.1771,5.99,-.07,500,110.5564,-19.0166,4.94,-.04,147.5,110.6058,-5.9828,5.83,.35,229.4,110.7169,55.2814,5.8,-.08,0,110.7529,-31.9238,5.4,-.16,406.5,110.8688,25.0505,5.04,.9,48.7,110.8708,-27.8343,5.37,1.54,189,110.8829,-32.2021,5.41,-.17,340.1,111.0238,-29.3031,2.45,-.08,609.8,111.0353,40.6724,5.23,1.25,370.4,111.1394,27.6379,5.77,.37,57.4,111.1674,-16.2015,5.18,-.04,287.4,111.1827,-31.8089,5.35,1.07,202.4,111.2379,51.8873,5.8,1.61,317.5,111.2424,11.6695,5.37,.1,97,111.2846,-13.752,5.79,.43,35.6,111.3553,-25.2178,5.79,-.1,432.9,111.4087,-79.0942,5.54,1.28,143.1,111.4121,9.2761,4.99,.99,319.5,111.4317,27.7981,3.78,1.02,36.9,111.4633,-5.775,5.98,.9,371.7,111.591,-51.0185,5.09,1.04,185.5,111.6769,-34.1407,5.9,-.15,316.5,111.6785,49.2115,4.61,0,83.9,111.7347,20.2576,5.94,.34,137,111.7478,-23.086,5.65,-.13,383.1,111.7833,-17.8649,5.6,.31,92.3,111.7877,8.2893,2.89,-.1,49.6,111.9289,-22.8592,5.98,-.09,295.9,111.9348,21.4452,5.2,.46,32,111.9653,-11.5569,5.79,.58,485.4,111.9965,-29.1559,5.55,-.05,282.5,112.0086,6.942,5.22,.22,97.6,112.0408,8.9255,4.33,1.43,97.6,112.2131,-31.8484,5.95,-.16,228.3,112.2145,48.1839,5.7,-.09,153.1,112.2705,-31.4562,5.78,-.18,327.9,112.2737,-38.8121,5.41,-.15,165,112.278,31.7846,4.16,.32,18,112.3076,-43.3014,3.25,1.51,59.4,112.3278,-1.9053,5.6,1.49,684.9,112.3352,28.1183,5.07,.12,54,112.3421,-10.3267,5.75,1.62,396.8,112.3568,-7.5512,5.86,.49,27.2,112.4491,12.0066,4.55,1.28,175.4,112.4532,27.9161,5.01,1.12,148.4,112.4642,-23.0243,4.85,.24,952.4,112.4832,49.6725,5.35,.47,20.2,112.4988,-52.6512,5.87,1.01,110.4,112.6288,-54.3994,5.95,1.58,145.6,112.6775,-30.9623,4.65,.9,460.8,112.7196,68.4656,5.63,1.1,137.6,112.7686,82.4115,4.92,1.63,153.1,112.9517,17.086,5.45,1.13,96.9,113.024,-8.8813,5.9,.54,27.9,113.0248,1.9145,5.24,.23,233.1,113.2907,-24.7107,5.84,.16,84.5,113.2986,3.2904,5.59,.32,41.8,113.3315,-19.4125,5.64,1.12,83.6,113.402,15.8267,5.27,.06,129.9,113.4498,-14.5239,4.82,1.36,471.7,113.4627,-36.3384,5.42,-.08,363.6,113.5133,-22.2961,4.44,.52,25.3,113.5662,3.3717,5.83,-.02,176.4,113.5776,-23.4737,5.06,.47,31.7,113.645,-27.0123,5.78,1.04,99.2,113.6494,31.8883,1.58,.03,15.6,113.7867,30.9609,5.34,1.01,114.2,113.8454,-28.3693,4.65,-.11,67.9,113.9155,-52.5338,4.93,1.37,120.3,113.9806,26.8957,4.06,1.54,83.1,114.0162,-14.4928,5.66,-.07,389.1,114.1318,46.1803,5.66,1.56,168.6,114.1446,5.8622,5.89,.6,39.3,114.171,-19.7023,5.69,-.17,518.1,114.183,-48.8302,5.69,-.04,142,114.196,55.7551,5.93,1.12,81.7,114.3195,-4.111,5.14,.44,67.5,114.3421,-34.9685,4.53,-.08,110.5,114.4744,48.7738,5.93,.22,77.9,114.5752,-25.3648,4.69,-.1,189.8,114.5759,-48.6014,5.68,.68,961.5,114.6369,35.0486,5.58,.92,114,114.6829,-36.4968,5.78,-.15,305.8,114.7078,-26.8038,3.8,-.16,106.3,114.7914,34.5843,4.89,.41,51,114.8255,5.225,.4,.43,3.5,114.8639,-38.308,4.84,-.19,170.4,114.8691,17.6745,5.04,1.62,161,114.9326,-38.1393,5.73,-.13,175.4,114.9495,-38.2607,5.76,-.07,352.1,114.9916,-37.5794,5.99,-.04,429.2,115.0564,-19.6609,5.92,1.16,190.8,115.0612,38.3445,5.77,1.65,359.7,115.0967,-15.2639,4.98,1.54,213.2,115.127,87.0201,5.05,1.6,139.7,115.2438,23.0185,5.93,1.56,467.3,115.3017,48.1315,5.58,1.01,96.3,115.3118,-9.5511,3.94,1.02,45.3,115.3159,-38.5335,5.41,-.13,181.8,115.3965,3.6248,5.95,-.03,139.5,115.4553,-72.6061,3.93,1.03,43.2,115.466,13.4805,5.79,1.67,238.7,115.5134,14.2085,5.55,1.64,396.8,115.7006,-26.3513,5.64,.99,96.8,115.7379,-45.1731,5.04,.77,24.7,115.7517,58.7104,4.93,.1,81.8,115.7999,-36.0501,5.6,-.13,191.9,115.828,28.8835,4.23,1.12,38.3,115.8849,-28.4109,4.63,1.63,237,115.9247,-40.9337,5.12,1.1,66.5,115.952,-28.9548,3.94,.16,0,116.0174,50.4338,5.31,0,226.8,116.0288,25.7842,5.3,1.53,194.6,116.0404,-36.0625,5.8,.32,43,116.1119,24.398,3.57,.93,43.3,116.1424,-24.6741,5.62,-.19,793.7,116.1424,-37.9429,5.89,-.12,206.2,116.3137,-37.9686,3.62,1.71,347.2,116.329,28.0262,1.16,.99,10.4,116.3959,-34.1724,5.36,.59,15.2,116.487,-14.5638,5.03,.34,72.1,116.5091,-6.7725,5.49,1.38,82.1,116.531,18.51,4.89,1.43,104.1,116.5439,-37.9337,5.87,-.11,181.2,116.5675,10.7683,5.25,.02,92.4,116.6637,37.5174,5.15,1.59,132.8,116.667,65.4557,5.93,1.18,100.7,116.8023,-22.5195,5.9,-.18,502.5,116.8541,-38.5111,5.07,-.11,323.6,116.8763,33.4157,5.14,1.64,202.8,116.8813,-46.6085,5.22,-.15,480.8,116.9863,-12.1927,5.48,.48,28.6,117.0215,-25.9372,4.4,-.07,434.8,117.084,-47.0777,4.69,1.04,71.2,117.257,-24.9122,5.32,.75,86.3,117.278,-56.4104,5.57,1.12,334.4,117.3036,-46.8577,5.82,-.14,591.7,117.3038,-60.2837,5.78,.43,34.6,117.3096,-46.3732,4.1,-.16,505.1,117.311,-35.2433,5.94,-.05,158.2,117.3236,-24.8598,3.34,1.22,367.6,117.3975,-33.2889,5.61,1.62,232.6,117.4208,-66.196,5.78,-.04,150.8,117.4217,-17.2284,5.17,1.28,78.1,117.5441,-9.1834,5.6,1.45,367.6,117.5993,-50.5095,5.89,1.09,75.5,117.925,1.7669,5.12,-.12,191.2,117.9293,-21.1737,5.62,.96,93.7,117.9429,-13.898,5.16,.6,16.5,118.0543,-40.5758,3.71,1.01,108.1,118.0653,-34.7054,5.01,.47,17.9,118.0787,-14.8462,5.69,.37,334.4,118.1239,-54.3672,5.7,-.15,409.8,118.161,-38.8628,4.49,-.19,198.8,118.1994,-5.4283,5.76,.41,39.7,118.2646,-36.3638,5.44,1.16,227.8,118.2651,-49.613,4.63,-.23,232.6,118.3257,-48.1029,4.22,-.13,507.6,118.3742,26.7658,4.97,.1,68.2,118.5459,-35.8773,5.48,-.17,207.9,118.6779,47.5646,5.47,1.46,257.7,118.7222,-57.3028,5.62,1.3,103.4,118.881,8.8628,5.86,.37,39,118.9162,19.884,5.38,-.04,114.8,119.0777,-60.5264,5.74,1.55,401.6,119.1946,-52.9824,3.46,-.18,139.5,119.2147,-22.8801,4.2,.72,160,119.2408,-43.5004,5.36,-.17,480.8,119.2477,15.7903,5.8,1.28,142.9,119.3268,-44.1099,5.08,-.17,335.6,119.4171,-30.3346,4.76,.15,371.7,119.4455,-60.3031,5.59,.57,16.2,119.4655,-45.5777,5.14,1.26,89.2,119.5602,-49.2449,4.47,-.18,294.1,119.5861,2.2248,5.3,.93,74.1,119.7106,-60.8245,5.77,-.08,322.6,119.7575,-45.2158,5.98,-.14,301.2,119.7738,-23.3104,5.09,1.11,263.9,119.8682,-39.2969,5.22,.4,55.6,119.9064,-60.5871,5.19,1.76,301.2,119.934,-3.6796,4.93,1.21,84.2,119.9669,-18.3992,4.61,.09,74,120.0489,73.9179,5.37,1.42,269.5,120.0832,-63.5675,4.81,-.17,153.1,120.1971,17.3087,5.6,1.32,243.3,120.2081,-54.1513,5.87,-.13,235.3,120.2328,25.3928,5.87,1.02,203.3,120.3056,-1.3926,4.69,1.48,137.9,120.3079,4.8798,5.65,.01,94.4,120.3366,59.0474,5.78,.42,46.1,120.3762,16.4553,5.99,-.02,165.6,120.4064,-37.2837,5.9,.15,175.7,120.5664,2.3346,4.39,1.25,77.9,120.6866,-41.3098,5.52,-.15,147.1,120.7673,-32.4635,5.83,1.23,144.7,120.8795,27.7943,4.94,1.13,78.6,120.896,-40.0031,2.21,-.27,332.2,121.0675,-32.6748,5.25,1.88,641,121.1767,-50.5904,5.96,1.21,363.6,121.1961,79.4796,5.39,-.04,99,121.2655,-53.1079,5.52,1.35,117.6,121.2687,13.1182,5.14,.02,65.8,121.5766,22.6355,5.96,1.65,228.3,121.6681,-45.266,5.04,1.49,427.4,121.8252,-20.5543,5.33,.1,473.9,121.886,-24.3043,2.83,.46,19.5,121.9411,21.5818,5.3,.64,23.3,121.9825,-68.6171,4.35,-.11,172.4,122.1144,51.5067,4.78,.05,76.7,122.1485,-2.9838,4.36,.97,324.7,122.2528,-61.3024,4.74,.44,20,122.2568,-19.245,4.4,-.16,142.7,122.2896,-48.6844,5.66,-.1,280.9,122.3689,-16.2489,5.66,-.15,518.1,122.3831,-47.3366,1.75,-.14,342.5,122.3901,-56.0854,5.66,.2,120.8,122.3996,-44.1228,5.2,-.17,383.1,122.4298,-47.9372,5.23,-.2,339,122.5157,58.2482,5.91,1.36,263.2,122.6133,25.5073,5.73,.82,41.4,122.6659,-13.7992,5.53,.49,22.4,122.795,-48.462,5.83,-.15,258.4,122.8179,-12.927,4.72,.94,54.2,122.8396,-39.6185,4.44,1.59,520.8,122.8579,-42.9873,4.73,.16,0,122.8875,-7.7725,5.36,.89,89.1,122.9999,-46.6444,5.77,.63,751.9,123.053,17.6478,4.67,.53,25.1,123.1283,-46.2643,6,-.11,320.5,123.2033,68.4741,5.34,1.04,230.4,123.2869,29.6565,5.62,-.07,209.6,123.3332,-15.7882,4.99,1.07,266.7,123.373,-35.8995,4.78,-.11,284.9,123.3927,-50.1961,5.52,1.65,221.2,123.4006,-46.9916,5.14,-.14,416.7,123.4591,56.4522,5.88,1.02,176.1,123.493,-36.3223,5.09,-.18,311.5,123.5122,-40.3479,4.42,1.17,91.5,123.5552,-35.49,5.77,1.02,68.9,123.5995,-45.8345,5.86,-.18,362.3,123.8163,-62.9156,5.16,.09,77.5,124.1288,9.1855,3.53,1.48,93,124.4601,59.5711,5.63,.18,91.8,124.5725,-35.4517,5.59,1.25,126.3,124.5784,-65.6132,5.06,1.13,91.1,124.5998,-12.6322,5.95,.75,12.5,124.6315,-76.9197,4.05,.41,19.6,124.6388,-36.6593,4.44,.22,28.6,124.8215,62.5072,5.73,.89,141.6,124.8845,75.7569,5.55,.9,86,124.954,-71.5149,5.33,-.06,133.3,125.0022,-71.5054,5.63,-.1,128.4,125.0161,27.2177,5.13,.49,18.3,125.0874,20.7477,5.8,1.14,172.7,125.1086,57.7433,5.89,.42,32.4,125.1339,24.0223,5.92,-.04,140.3,125.1606,-77.4845,4.34,1.16,47.6,125.168,72.4072,6,1.54,248.8,125.3004,-57.9732,5.96,-.09,543.5,125.3377,-36.4842,5.18,-.19,456.6,125.3384,-20.0791,5.58,.77,173.9,125.3459,-33.0544,4.83,1.42,308.6,125.4775,-17.5863,5.71,1.05,95.2,125.5186,-73.4,5.28,.01,116.8,125.6285,-59.5095,1.86,1.2,185.5,125.6321,-48.4904,4.79,-.15,526.3,125.7081,-26.3482,5.88,.38,0,125.7088,43.1881,4.25,1.55,117.2,125.7254,-7.5431,5.92,1.64,395.3,125.7298,-52.1237,5.89,.02,70,125.841,18.3322,5.94,.17,117.8,125.9521,53.2197,5.52,.13,50.4,126.0826,-80.9142,5.67,1.02,75.9,126.1459,-3.7512,5.61,.48,26.6,126.2299,-23.1537,5.67,.07,173,126.2384,-42.7698,5.97,-.16,549.5,126.2656,-24.0462,5.32,1.48,143.5,126.3805,-51.7274,5.18,-.16,213.2,126.3981,2.1022,5.74,1.53,274,126.4151,-3.9064,3.91,-.01,37.5,126.4341,-66.1369,3.77,1.13,33,126.465,-64.6006,5.95,.97,112.4,126.4663,-42.1531,5.45,-.14,220.3,126.4782,7.5645,5.13,.93,121.1,126.4816,-14.9297,5.96,.17,111,126.6134,-3.9875,5.6,.22,50,126.6154,27.8936,5.58,1.42,114.4,126.6748,-12.5346,5.52,1.17,84.3,126.6831,12.6546,5.56,1.61,276.2,126.8198,-70.0935,5.51,-.02,85.7,126.9024,-53.0885,5.08,.26,61.1,126.9976,-35.1138,5.75,-.15,284.9,127.1556,14.2108,5.94,.2,105.3,127.2698,-47.9289,5.33,-.14,653.6,127.2815,-44.1604,5.82,-.16,438.6,127.3645,-44.7248,5.03,-.17,800,127.4401,-46.3317,5.98,-.13,176.7,127.4425,67.2974,5.89,.97,98,127.5661,60.7182,3.35,.86,54.9,127.6192,-32.1593,5.61,1.51,323.6,127.8772,24.0811,5.71,.33,76.6,127.8788,-19.5775,5.42,-.06,105.8,127.8989,18.0944,5.33,1.57,127.2,128.0207,-53.2119,5.68,.58,229.9,128.1771,20.4412,5.33,1.25,91.5,128.2291,38.0164,5.88,1.11,74.8,128.4101,-38.8488,5.92,-.11,255.8,128.4312,4.757,5.89,1.07,505.1,128.5067,-2.1516,5.8,.01,90.3,128.6505,65.1452,5.47,.21,46.8,128.6817,-49.9442,5.01,1.3,260.4,128.6829,36.4196,5.76,.05,108.8,128.8148,-58.2247,5.27,-.13,274.7,128.8321,-58.0092,4.84,.98,68.1,128.8675,-7.9823,5.72,0,92.9,128.8696,-26.8435,5.95,.39,179.5,128.9624,6.6202,5.91,.53,25.1,128.9668,-50.9697,5.79,-.13,136.8,129.274,9.6556,5.92,.08,149.7,129.3285,-62.8535,5.45,1.01,103.6,129.411,-42.9891,4.11,.11,558.7,129.414,5.7038,4.14,0,49.2,129.4673,-26.255,5.24,-.03,71.1,129.5791,32.802,5.96,1.11,124.7,129.5924,53.4015,5.66,.96,81.7,129.6893,3.3414,4.45,1.22,114.3,129.7715,-70.3867,5.19,.01,73.6,129.7829,-22.6619,5.05,.72,19.4,129.7988,65.0209,5.63,.62,14.4,129.8234,52.7116,5.91,1.17,160,129.8493,-53.4398,5.45,-.13,136.4,129.927,-29.5611,4.86,.9,74.9,129.99,-53.0547,5.18,-.15,135.7,130.0061,-12.4754,4.98,1.42,119,130.0256,-35.3084,3.97,.94,127.6,130.0534,64.3279,4.59,1.18,78.5,130.0728,-53.0154,5.56,-.13,147.3,130.0733,-52.9219,3.6,-.17,151.3,130.0799,-40.2639,5.2,-.03,85.6,130.1469,-45.1911,5.67,1.66,295.9,130.1543,-59.761,4.31,-.12,442.5,130.1565,-46.6487,3.77,.67,0,130.2545,45.834,5.35,.99,55.3,130.2722,-48.9227,5.9,-.19,606.1,130.3047,-47.3171,4.74,.14,781.3,130.3313,-78.9634,5.46,-.1,95,130.4306,-15.9434,4.87,1.06,64.9,130.4871,-45.4107,5.2,.17,0,130.5675,-48.0991,5.48,-.17,0,130.5791,-53.1001,5.49,-.13,153.1,130.6058,-53.114,4.83,-.17,148.6,130.8014,12.6809,5.62,.43,284.1,130.8061,3.3987,4.3,-.19,179.9,130.8214,21.4685,4.66,.01,55.6,130.8981,-33.1864,3.68,-.18,269.5,130.9178,-49.8228,5.15,-.2,568.2,130.9182,-7.2337,4.63,.84,235.8,131.0998,-42.6493,4.05,.87,70.2,131.1712,18.1543,3.94,1.08,40,131.1759,-54.7088,1.93,.04,24.7,131.1877,10.0817,5.63,-.07,129.7,131.2164,-37.1472,5.74,-.14,485.4,131.4798,-79.5044,5.79,1.59,152.9,131.5069,-46.0415,3.87,.01,568.2,131.5103,-2.0487,5.7,1.1,92.6,131.5939,-13.5477,4.32,.9,75.1,131.6273,-45.9125,5.43,.24,0,131.6743,28.7599,4.03,1.01,101.5,131.6773,-56.7698,4.5,-.17,185.5,131.6938,6.4188,3.38,.69,39.6,131.7334,12.11,5.89,.12,54,131.8124,-1.897,5.28,.06,123.2,131.8285,-46.1554,5.71,.55,0,132.1082,5.8378,4.35,-.04,108.6,132.3405,-3.443,5.3,-.08,138.1,132.4132,-40.3202,5.47,.07,387.6,132.4485,-45.3079,4.94,.04,340.1,132.4646,-32.7805,5.19,.88,68.6,132.5093,-29.463,5.86,.95,230.4,132.5876,-42.0898,6,-.11,769.2,132.633,-27.7098,4.02,1.27,63.6,132.6394,-46.5292,5.09,-.2,0,132.6451,-66.793,5.34,.42,51.9,132.8934,-7.1772,5.55,.15,136.8,132.9021,-57.6336,5.59,-.1,226.2,132.9868,43.7266,5.15,.97,81.2,133.0418,42.0027,5.98,1.25,161.6,133.049,45.3128,5.96,1.23,164.7,133.1443,32.4742,5.67,.22,64.5,133.1492,28.3308,5.96,.87,12.3,133.1609,-48.3591,5.92,-.15,318.5,133.2001,-38.7241,5.79,1.51,214.1,133.344,61.9623,5.72,.3,88.8,133.4527,-60.3539,5.78,-.09,440.5,133.4608,-47.5208,5.31,.28,77.3,133.5614,30.5791,5.4,1.05,141.4,133.7618,-60.6446,3.84,-.1,98,133.7991,-54.9658,5.7,.48,24.2,133.8018,-18.2412,5.75,1.33,136.8,133.8484,5.9456,3.11,.98,51.3,133.8815,-27.6819,4.87,.14,75.8,133.9153,27.9275,5.23,1,149.3,133.9815,11.626,5.44,1.46,213.2,134.0803,-52.7235,4.68,-.12,108.3,134.1271,40.2015,5.9,.38,72.2,134.1422,-16.7087,5.95,1.54,221.7,134.156,64.6038,5.57,.88,94.1,134.1708,-85.6632,5.43,.31,49.8,134.2081,45.6316,5.72,1.13,70.7,134.2358,32.9104,5.44,.18,59.6,134.2434,-59.2293,4.93,-.18,206.6,134.3123,15.3228,5.22,.15,45.7,134.3967,15.5813,5.68,.21,46.1,134.4815,-48.5729,5.88,1.06,317.5,134.6218,11.8577,4.26,.14,57.7,134.6831,-16.1327,5.8,.52,21,134.7181,-47.2347,5.17,.27,68.9,134.8019,48.0418,3.12,.22,14.5,134.8508,-59.0837,5.17,.42,26.4,134.8861,32.4186,5.23,.91,90.7,135.0225,-41.2536,4.45,.65,64.5,135.1599,41.7829,3.96,.46,16.1,135.1906,-60.9638,5.8,1.21,401.6,135.2855,-68.6839,5.89,1.63,216.9,135.3369,-41.8643,5.56,-.14,131.6,135.3505,32.2523,5.89,.09,143.1,135.4357,-52.1887,5.23,-.12,113,135.4916,-.4827,5.64,1.16,150.4,135.6116,-66.3961,4,.14,38.3,135.6362,67.6296,4.74,1.54,96.4,135.6844,24.4529,5.45,-.04,120.3,135.6867,7.2983,5.85,1.1,194.2,135.9064,47.1565,3.57,.01,109.9,136.0017,54.2839,5.74,.03,119.6,136.0387,-47.0977,3.75,1.17,91.8,136.2867,-72.6027,4.47,.61,122.9,136.3504,48.5303,5.48,.47,97.1,136.4099,-70.5385,4.66,-.15,296.7,136.4932,5.0923,4.99,1.19,274.7,136.6324,38.4522,4.56,1.04,250.6,136.9367,10.6682,5.23,-.09,162.9,136.999,-43.4326,2.23,1.67,166.9,137.0002,29.6542,5.42,.89,83.9,137.012,-25.8585,4.62,1.59,171.8,137.0979,66.8732,5.15,1.51,159.7,137.1757,-8.5895,5.6,-.06,188.3,137.1972,26.6291,5.95,.65,31,137.2128,33.8822,5.95,.58,19.2,137.2177,51.6046,4.46,.29,28.8,137.2675,-18.3285,5.73,0,83.7,137.298,-12.3577,5.76,.94,138.9,137.3397,22.0454,5.16,.97,114.4,137.3982,-8.7876,5.47,1,147.7,137.485,-30.3654,5.59,.18,65,137.5981,67.134,4.8,.49,20.4,137.7294,63.5136,4.67,.38,38.7,137.742,-58.9669,3.43,-.19,137,137.7683,-44.8679,4.99,.22,0,137.8197,-62.317,3.96,-.18,166.4,137.8891,-46.5839,5.78,-.22,304.9,137.9947,-19.7476,5.72,.98,93.2,138.1272,-43.6133,5.56,-.11,212.3,138.2318,-59.4139,5.54,.85,145.1,138.2999,-69.7172,1.67,.07,34.7,138.3936,-47.3384,5.92,-.05,156.3,138.4509,43.2178,5.3,-.13,178.3,138.5342,-44.1458,5.85,-.11,161.3,138.575,-55.5696,5.26,.98,196.1,138.5856,61.4233,5.18,.6,19.6,138.5911,2.3143,3.89,-.06,34.8,138.602,-43.2275,5.24,-.14,187.6,138.7382,-37.6024,5.85,.83,196.9,138.8077,14.9415,5.36,1.32,186.2,138.8094,34.6335,5.98,.84,130,138.903,-38.5699,4.92,1.08,68.9,138.9378,-37.4131,4.63,.47,50.5,138.9574,56.7414,5.28,1.57,220.8,138.9691,72.9463,5.93,.18,88.1,139.0472,54.0219,4.8,.2,35.8,139.0503,-57.5415,4.34,1.6,149.7,139.096,-44.2657,5.12,1.64,0,139.1724,-8.7448,5.49,-.08,207.5,139.1739,-6.3531,5.24,1.17,75.2,139.2378,-39.4015,5.31,1.17,105.8,139.2725,-59.2752,2.21,.19,234.7,139.2822,-14.5741,5.83,1.05,110.6,139.3218,-68.6896,5.38,.41,32.6,139.3549,-74.8943,5.28,.02,107.5,139.3649,-74.7346,5.86,-.02,82,139.3799,46.8172,5.96,.06,130.4,139.5245,-51.0509,5.26,-.06,134.2,139.608,35.3641,5.94,.18,87,139.6765,-51.5607,5.83,.47,0,139.711,36.8026,3.82,.07,38.3,139.8881,-15.8347,5.79,1.28,138.5,139.9433,-11.9749,4.77,.93,103.3,140.1209,-9.5557,4.8,.91,68.2,140.2367,-62.4046,4.79,.93,71.6,140.2638,34.3926,3.14,1.55,62.3,140.3733,-25.9654,4.71,1.63,154.1,140.4304,56.6992,5.79,1.51,230.4,140.4585,-55.5147,5.61,.19,81.2,140.4624,-42.1949,5.56,1.64,176.1,140.5284,-55.0107,2.47,-.14,175.4,140.6,-46.0474,5.74,.9,162.9,140.801,-28.8339,4.71,.89,58.9,141.0229,-61.6489,5.99,1.06,111,141.0384,-80.7869,5.34,.45,58.1,141.1636,26.1823,4.47,1.22,61.7,141.3501,-5.1174,5.6,1.52,275.5,141.3635,-61.9505,5.77,.14,77.4,141.5748,-53.3789,5.09,-.1,131.6,141.7763,-71.6019,5.46,1.08,61.9,141.8267,-22.3438,4.72,1.15,48,141.8968,-8.6586,1.99,1.44,55.3,141.9449,-6.0712,5.38,.64,30.4,142.1142,9.0568,5.4,.6,33.2,142.1216,8.1883,5.72,1.04,124.2,142.1273,-66.7019,5.9,.01,77.6,142.1666,45.6015,5.4,.99,85.8,142.1963,-62.2731,5.91,1.1,154.1,142.2871,-2.769,4.59,.41,17.3,142.3027,-20.7491,5.66,1.59,365,142.3113,-35.9513,4.51,1.41,217.9,142.4771,-26.5896,5.49,1.34,242.1,142.5213,-51.5172,5.45,-.08,132.6,142.5937,-15.5774,5.86,1.19,73.1,142.5976,-58.3618,5.88,1.68,296.7,142.675,-40.4668,3.6,.37,18.8,142.6801,33.6557,5.87,1.03,153.8,142.6921,-31.8892,5.75,.07,124.4,142.8055,-57.0344,3.16,1.54,73.3,142.8821,63.0619,3.65,.36,23.8,142.884,-31.8718,5.91,.26,117.6,142.885,35.1033,5.39,1.54,147.1,142.8877,-35.7148,5.86,1.29,85.5,142.9011,-73.0809,5.46,1.56,242.1,142.9301,22.968,4.32,1.54,100.9,142.9864,11.2998,4.99,1.05,66.1,142.9899,9.7158,5.07,1.36,153.1,142.9955,-1.1847,4.54,.11,158.7,143.0803,-40.6493,5.35,.9,129.9,143.085,-19.4003,5.74,.14,115.6,143.2143,51.6773,3.17,.47,13.5,143.2324,-13.5168,5.95,1.5,226.8,143.3019,-21.1157,5.02,1.02,111.1,143.3585,-22.8639,5.92,.02,80.3,143.4356,-49.0051,5.12,-.11,254.5,143.4724,-80.9413,5.07,-.14,175.4,143.5366,-51.2553,5.01,-.18,277,143.5558,36.3976,4.54,.91,56.7,143.611,-59.2298,4.08,-.01,406.5,143.6202,69.8303,4.54,.78,31.9,143.636,-5.9149,5.56,1.16,173.6,143.706,52.0515,4.47,.03,80.4,143.723,72.2057,5.77,.53,49.1,143.766,39.6215,4.81,.99,66.1,143.9146,35.8101,5.4,.77,11.4,144.1786,31.1617,5.57,1.59,175.4,144.2064,-49.355,4.34,.17,32.3,144.2509,-25.2968,5.68,1.12,95.5,144.2608,16.438,5.73,1.22,355.9,144.272,81.3264,4.28,1.49,304.9,144.2912,-32.1786,5.62,1.02,85.8,144.3027,-53.6685,5.44,.14,71.5,144.3028,6.8358,5,1.05,75.3,144.3683,-36.096,5.96,1.12,110.1,144.5061,-43.1909,5.51,.98,145.6,144.5907,40.2398,5.28,.22,37.6,144.6137,4.6493,4.68,1.31,90.6,144.8375,-61.3281,4.51,-.07,69.2,144.8661,67.2722,5.96,1.53,154.1,144.964,-1.1428,3.9,1.31,80.7,145.0765,-14.3323,5.07,-.15,133.7,145.1773,-57.9836,5.3,.2,72.6,145.2591,-57.2595,5.8,1.08,112.9,145.2876,9.8923,3.52,.52,40,145.3209,-23.5915,4.76,-.12,155.3,145.3963,31.2778,5.9,1.58,237,145.4497,-55.2138,5.99,-.12,574.7,145.5014,39.7579,5.61,.95,106.5,145.5601,-23.9156,4.93,.53,15,145.5618,69.2375,5.72,1.13,151.3,145.7383,72.2526,5.15,1.03,146.6,145.8886,29.9745,5.64,.11,49,145.926,-53.8913,5.56,-.04,105.2,145.9329,14.0217,5.36,1.61,187.3,146.0504,-27.7695,4.78,.52,104.1,146.3117,-62.5079,3.69,1.01,478.5,146.4628,23.7743,2.97,.81,75.6,146.5419,6.7086,5.8,1.64,602.4,146.586,-76.7761,5.43,.9,56.5,146.5972,11.81,5.67,1.49,157,146.5984,1.7856,5.65,.34,80.6,146.6265,-44.7551,5.58,-.18,305.8,146.6319,57.1281,5.09,1.59,169.5,146.7755,-65.072,2.92,.27,440.5,147.1474,46.021,5.08,.62,18.4,147.367,-37.1868,5.95,1.25,124.1,147.4881,-45.7327,5.09,-.1,258.4,147.6747,-46.9339,5.72,1.08,177,147.7316,-62.7451,5.56,1.32,334.4,147.7473,59.0387,3.78,.29,35.6,147.8003,-59.4258,5.79,1.35,236.4,147.8322,-46.1939,5.62,1.17,99.1,147.8696,-14.8466,4.11,.92,80.9,147.9194,-46.5476,4.58,1.17,323.6,147.971,24.3954,5.29,.23,41.5,148.0265,54.0643,4.55,.04,156,148.1268,-8.105,5.07,.04,85.1,148.1909,26.007,3.88,1.22,38.1,148.4289,5.9586,5.9,1.66,284.9,148.4587,-51.1467,5.95,-.15,704.2,148.5513,-25.9323,4.87,1.2,104.8,148.5736,-45.2835,5.72,-.11,305.8,148.7135,-50.244,5.71,.01,92.9,148.7175,-19.0094,4.94,1.56,188.3,148.9292,49.8198,5.27,.09,63.8,149.1082,8.9332,5.85,1.13,177.6,149.1479,-33.4185,5.83,1.2,157.5,149.2156,-54.5678,3.52,-.07,487.8,149.3067,57.4182,5.97,.9,145.6,149.4211,41.0556,5.11,.48,28.1,149.5557,12.4448,5.26,-.04,153.1,149.5949,72.8795,5.86,1.16,110.5,149.7178,-35.891,5.23,.3,33.3,149.9009,29.6452,5.75,1.06,105.2,149.9654,56.8118,5.5,1.49,153.4,150.0534,8.0442,4.68,1.59,124.5,150.1825,-82.2147,5.53,.04,115.1,150.2527,31.9237,5.37,.68,15,150.5004,-60.4209,5.93,.26,0,150.704,21.9493,5.68,-.18,289,151.0873,-24.2855,5.7,.3,70.2,151.1513,53.8917,5.71,.51,50.7,151.2811,-13.0646,4.6,-.09,96.2,151.5467,-47.37,5.06,.88,73.7,151.7896,-17.1417,5.59,1.49,117.2,151.8331,16.7627,3.48,-.03,389.1,151.8573,35.2447,4.49,.19,28.2,151.9761,9.9975,4.39,1.45,90.6,151.9845,-.3716,4.48,-.03,86.9,152.093,11.9672,1.36,-.09,24.3,152.1781,-65.8154,5.26,.97,113.3,152.2343,-51.8113,4.85,-.12,408.2,152.3757,-68.6828,5.8,.01,209.2,152.5245,-12.8159,5.3,.37,27.7,152.5314,-8.4082,5.91,.03,182.8,152.647,-12.3541,3.61,1.01,34.5,152.6572,-41.7152,5.98,1.24,69.4,152.7328,-8.4185,5.64,1.3,145.1,152.8032,37.4019,5.86,1.28,195.7,152.9436,-58.0605,5.7,-.12,390.6,153.2015,4.6147,5.77,1.18,127.6,153.3452,-51.233,5.27,.26,51.9,153.3666,-51.7558,5.78,.14,104.7,153.3776,-66.3728,5.15,.22,94.3,153.4342,-70.0379,3.29,-.07,104.8,153.4413,-40.3461,5.91,1.2,147.3,153.684,-42.1219,3.85,.05,31.1,153.8815,-43.1124,5.59,1.52,155.5,154.0601,29.3105,5.49,.02,79.9,154.1345,23.5031,5.95,.66,31.2,154.1697,13.7283,5.42,1.65,179.5,154.1726,23.4173,3.43,.31,84,154.174,25.3707,5.84,1.21,108.9,154.2707,-61.3323,3.39,1.54,201.6,154.2741,42.9144,3.45,.03,42.2,154.3106,23.1062,5.81,.5,22.8,154.4075,-8.0689,5.25,.34,59.3,154.5084,65.1084,5.74,.16,79.6,154.5316,-28.992,5.52,.28,813,154.6177,-41.6685,5.97,-.06,163.1,154.658,-56.1104,5.8,.48,36.1,154.7711,-64.6763,5.66,.04,80.3,154.8616,48.3968,6,1.02,44.4,154.9031,-55.0293,4.59,1.6,568.2,154.934,19.4709,4.78,.45,21.4,154.9931,19.8415,2.01,1.13,39.9,155.0696,-47.6991,5.66,1.67,515.5,155.2283,-56.0432,4.5,-.1,352.1,155.2639,68.7477,5.88,.24,123.3,155.544,41.2295,5.73,.53,39.4,155.5816,-41.65,4.82,1.09,62.5,155.5823,41.4995,3.06,1.6,70.6,155.7423,-66.9015,4.97,-.13,123.2,155.7764,33.9081,5.89,.15,74.3,155.8603,-4.074,5.93,-.05,104.2,155.8721,-38.0098,5.34,.25,41.5,156.0327,65.5664,4.94,-.05,104.1,156.0358,33.7185,5.52,1.19,130,156.0988,-74.0316,3.99,.37,16.2,156.2476,-58.5763,5.93,.32,96,156.3133,8.7848,5.61,1.63,314.5,156.4345,-7.0598,5.6,1.53,121.7,156.4784,33.7961,4.72,.26,71.5,156.5226,-16.8363,3.83,1.46,71.8,156.7038,-54.8773,5.58,1.56,621.1,156.7879,-31.0678,4.28,1.43,112.2,156.852,-57.6388,4.65,.47,0,156.8553,-65.7047,6,.09,68.4,156.8668,41.601,6,.17,66.1,156.9697,-58.7394,3.81,.32,411.5,156.9708,36.7072,4.2,.91,47.2,157.2191,-64.1723,5.27,1.86,813,157.3696,-2.7391,5.19,-.05,98.7,157.3707,-29.6638,5.58,1.42,110.1,157.3974,-30.6071,5.57,-.04,133.2,157.4228,84.252,5.52,.24,40.6,157.5269,38.9251,5.79,.09,231.5,157.5728,-.637,5.08,-.14,124.1,157.5839,-71.9928,4.72,.04,79.9,157.6566,55.9805,4.82,.54,12.8,157.7493,-13.5885,5.59,-.03,160.3,157.7586,-73.2215,4.94,1.68,316.5,157.7694,82.5586,5.25,.4,21.5,157.8409,-53.7155,4.89,.5,21.8,157.9641,32.3796,5.9,.11,78,157.9893,-45.0667,5.76,-.19,166.9,158.0061,-61.6853,3.3,-.09,148.1,158.0491,14.1373,5.43,1.7,212.8,158.14,-44.6185,5.91,.92,121.8,158.1992,-58.6667,5.98,.29,0,158.2028,9.3066,3.84,-.15,0,158.2369,-47.0034,5.02,1.04,401.6,158.3079,40.4256,4.72,.22,34.6,158.3788,34.9887,5.57,.03,209.6,158.5037,-23.7452,5.08,1.6,244.5,158.7001,6.9537,5.07,.92,81.6,158.759,8.6504,5.67,.06,131.4,158.7728,75.7129,4.86,.96,75.8,158.7904,57.0826,5.16,.35,26.5,158.8035,-39.5626,5.5,3.02,268.1,158.8671,-78.6078,4.11,1.58,128,158.8971,-57.5576,4.45,1.6,361,159.0855,-59.5644,5.08,1.17,80.5,159.1349,-12.2301,5.71,.53,25.1,159.3072,-27.4126,4.87,1.63,149.5,159.3256,-48.2256,3.84,.3,26.8,159.3628,-58.7333,5.47,.5,0,159.3886,-13.3845,4.89,2.8,208.3,159.511,-57.2563,5.89,-.13,308.6,159.6456,-16.8766,4.91,.92,64.6,159.6801,31.9762,4.68,.82,177.3,159.6875,-59.183,4.69,1.56,719.4,159.7484,-58.8169,5.96,1.69,209.2,159.7736,53.6683,5.55,1.27,139.1,159.7818,37.91,5.84,.59,52.3,159.8266,-55.6033,4.29,1.02,257.7,160.0477,-65.1002,5.51,-.16,160.5,160.4511,68.4435,5.74,1.31,157.5,160.4647,-79.7833,5.97,-.07,284.1,160.4856,65.7163,5.12,1.21,69.5,160.5588,-64.4664,4.76,-.14,139.1,160.669,-59.2158,5.36,.21,0,160.6799,-32.7157,5.63,.01,187.3,160.7392,-64.3945,2.74,-.22,139.7,160.7578,26.3256,5.51,.16,48.4,160.7668,69.0762,5.01,1.41,128,160.8372,4.7477,5.77,1.17,169.5,160.854,23.1884,5.08,.04,70.3,160.8845,-60.5666,4.58,1.7,349.7,160.887,46.2039,5.18,.32,37.1,160.9306,57.1992,5.79,-.04,113.4,160.9633,-64.249,5.74,.01,359.7,161.0288,-63.9611,4.8,-.13,150.8,161.2668,67.4114,5.95,2.38,380.2,161.318,-80.4696,5.46,.96,106.8,161.4458,-80.5402,4.45,-.19,107.5,161.4662,30.6823,5.36,-.05,117.2,161.569,-64.5146,5.33,-.1,146,161.6023,18.8915,5.5,1.13,57.2,161.6053,14.1946,5.49,.91,88.1,161.6233,-64.2632,5.23,-.08,146,161.6924,-49.4203,2.69,.9,35.9,161.7134,-64.3835,4.87,-.15,147.3,161.7169,-17.2969,5.44,.11,63.1,161.7395,-56.7572,5.14,-.08,161.3,162.0225,-59.9192,5.98,.27,0,162.0588,-31.6879,5.87,.03,143.1,162.169,-1.9589,5.92,1.61,167.5,162.3143,10.5452,5.32,.04,116.7,162.3518,-59.3238,5.85,.01,225.7,162.4062,-16.1936,3.11,1.23,44.1,162.4312,-9.8527,5.85,1.07,104.5,162.4876,-34.0582,5.61,.04,132.5,162.5752,-8.8978,5.8,.16,95.2,162.7725,-3.0927,5.95,1.48,155,162.7959,56.5823,5.66,1.13,109.5,162.8488,59.3201,5.57,1.16,83.5,163.1285,-57.2404,5.26,.13,0,163.3279,34.2149,3.79,1.04,29.1,163.373,-20.1387,5.23,.48,30.8,163.3736,-58.8532,3.78,.94,29.1,163.3779,69.8539,5.91,1.01,44.3,163.3935,54.5851,5.12,1.35,200.4,163.4253,-70.7203,5.99,-.02,233.1,163.4321,-2.1292,5.45,.97,95.9,163.4948,43.19,4.66,-.04,75.5,163.5741,-13.758,5.65,.83,151.1,163.6233,-61.8266,5.95,1.74,442.5,163.7424,34.0348,5.73,1.03,88.9,163.8218,-60.517,5.93,1.06,93.5,163.9033,24.7497,4.3,.02,88,163.9267,.7369,5.91,.42,44.9,163.9349,33.5069,5.02,1.1,72.6,164.0061,6.1854,5.91,1.26,119.2,164.1794,-37.1378,4.6,1.01,58.3,164.2827,-50.765,5.9,.17,103,164.8073,-33.7376,5.7,.37,48.5,164.8666,40.4303,5.03,.62,14.1,164.8789,-16.3537,5.88,1.6,202.8,164.8866,36.0931,5.99,1.59,253.8,164.9436,-18.2988,4.08,1.08,48.8,164.9974,-43.8071,5.81,-.06,93.5,165.0386,-42.2259,4.37,.12,60.2,165.0487,-14.0834,5.86,1.5,142.7,165.0613,45.5263,5.47,1.47,253.2,165.1402,3.6175,4.84,1.14,110.5,165.1867,6.1014,4.98,.17,46.4,165.2101,39.2121,5.06,.26,115.5,165.457,-2.4846,4.73,1.59,179.2,165.4603,56.3824,2.34,.03,24.4,165.5824,20.1798,4.42,.05,38.9,165.812,-11.3035,5.51,.94,103.8,165.9025,-8e-4,5.95,1.22,185.9,165.932,61.751,1.81,1.06,37.7,166.13,-47.6791,5.67,.26,87.6,166.2258,-35.8047,5.43,.02,158.7,166.2543,7.336,4.62,.33,29,166.3329,-27.2936,4.92,.37,43.2,166.4899,-27.2879,5.69,-.07,212.3,166.6351,-62.4241,4.62,.99,122.1,166.7079,-70.8779,5.58,-.07,252.5,166.7259,1.9555,5.52,.95,63.2,166.8195,-42.6387,5.15,.03,84.1,167.1417,-61.9472,5.11,.2,0,167.1475,-58.975,3.93,1.23,0,167.1833,-28.0807,5.43,.07,55.6,167.2045,24.6585,5.7,.08,141.2,167.3295,36.3094,5.71,1.4,117.1,167.4104,43.2077,5.89,1.56,168.1,167.4159,44.4985,3,1.14,44.3,167.4725,-32.3675,5.79,.03,120.9,167.9145,-22.8258,4.46,.03,104.3,168.1377,-49.101,5.37,.17,50.4,168.1501,-60.3176,4.59,.54,0,168.1884,-64.1698,5.22,-.08,95.9,168.3112,-44.3722,5.77,1.66,192.7,168.3783,-59.6193,5.74,-.11,675.7,168.4141,-53.2318,5.75,1.31,130,168.4398,-.0695,5.4,-.02,161.8,168.5076,8.0607,5.79,1.13,60.6,168.5271,20.5237,2.56,.13,17.9,168.56,15.4296,3.33,0,50.6,168.801,23.0955,4.56,1.66,294.1,168.9662,13.3076,5.31,1.19,118.5,169.1654,-3.6516,4.45,.21,56.5,169.1744,49.4763,5.88,1.1,137.6,169.3225,2.0106,5.18,1.51,101.8,169.5468,31.5308,3.79,.61,0,169.6197,33.0943,3.49,1.4,122.4,169.729,1.6504,5.9,1.04,90.3,169.7829,38.1856,4.76,.11,58.8,169.8185,-64.5825,5.99,.47,36.7,169.8352,-14.7785,3.56,1.11,56.9,170.2517,-54.491,3.9,-.16,109.6,170.2841,6.0293,4.05,-.06,67.5,170.7066,43.4827,4.99,1,163.4,170.7839,-56.7794,5.82,0,233.1,170.8028,-36.1648,5,1.46,323.6,170.8392,-64.9547,5.09,-.06,123.8,170.8412,-18.78,5.08,.44,42.9,170.9811,10.5295,4,.42,23.7,171.0097,1.4078,5.39,.94,108.5,171.0464,-72.2566,5.55,.02,304.9,171.1525,-10.8593,4.81,1.56,115.3,171.2205,-17.684,4.06,.22,25.2,171.2455,11.4303,5.8,1.38,150.4,171.3727,-36.0631,5.21,.98,84,171.3879,-37.7476,5.87,1.5,136.8,171.4016,16.4565,5.58,.39,43.9,171.4298,-63.9725,5.18,.49,27.2,171.488,55.8505,5.73,.99,94.1,171.6476,-61.1152,5.22,-.08,418.4,171.6969,-53.1599,5.8,.52,187.6,171.7897,-12.3567,5.93,.49,70.1,171.9843,2.8563,4.95,1,172.4,172.1462,-42.6742,5.14,-.03,214.6,172.2672,39.337,5.3,.02,65.2,172.269,61.7784,5.83,.38,33.3,172.4109,-24.464,5.77,.07,136.6,172.4244,15.4133,5.74,1.37,134.2,172.5787,-3.0035,4.77,1.53,185.2,172.621,18.4098,5.54,1.06,96.5,172.6297,43.1732,5.94,.52,53.4,172.8509,69.3311,3.82,1.61,102.1,172.942,-59.4421,5.07,1.03,0,172.9533,-59.5156,5.12,.43,0,173.0683,-29.261,4.93,.54,26.3,173.0833,-66.9618,5.89,1.14,94,173.0864,61.0825,5.46,.52,28,173.1981,-7.8275,5.94,1.38,147.5,173.2003,-40.4362,5.64,1.58,171.2,173.2255,-31.0872,5.13,1.58,119.2,173.2505,-31.8576,3.54,.95,39.7,173.405,-40.5866,5.39,.12,118.2,173.5915,3.0602,5.76,.48,27.2,173.6229,-32.8313,5.96,.81,9.6,173.677,16.7969,5.95,-.16,581.4,173.6902,-54.2641,4.62,-.08,130.7,173.7369,-49.1365,5.5,1.04,58.8,173.7704,54.7854,5.63,1.03,134.6,173.8053,-47.3726,5.64,1.68,221.2,173.9454,-63.0198,3.11,-.04,128.7,173.9816,-47.6416,5.26,.26,61.8,174.0117,69.323,5.19,.97,72.8,174.0748,27.7814,5.8,.25,71.6,174.0932,-61.0524,5.84,-.1,497.5,174.1456,-33.5701,5.71,1.02,111.6,174.1705,-9.8022,4.7,-.07,86,174.2372,-.8237,4.3,.98,55.6,174.2522,-61.2834,5.14,1.1,71.7,174.3151,-75.8965,5.64,.36,41.5,174.3916,-47.7473,5.46,1.23,108.3,174.4516,-67.6204,5.94,1.01,108.5,174.5304,-61.8266,5.15,-.04,87.4,174.5857,43.6254,5.56,.35,46.5,174.615,8.1343,5.24,1.5,152.4,174.6667,-13.2019,5.48,.52,26.7,174.8733,-65.3978,5.01,.8,153.8,175.0533,-34.7447,4.7,-.07,137.6,175.177,-53.9686,5.95,1.67,349.7,175.1961,21.3527,5.26,.98,82.8,175.2235,-62.0901,4.93,1.11,272.5,175.2626,34.2016,5.31,.72,9.6,175.3325,-43.0957,5.54,.04,65.5,175.3927,31.7461,5.73,.44,41.2,175.4331,-32.4994,5.2,1.48,123.8,175.6182,66.7449,5.32,1.27,184.5,175.8633,-37.1902,5.98,1.45,260.4,175.88,-62.4894,5,.78,0,176.1907,-18.3507,4.71,.96,108.2,176.321,8.2581,4.84,.17,37.4,176.4017,-66.7288,3.63,.16,39,176.4332,-45.6901,5.28,-.12,211.9,176.4648,6.5294,4.04,1.5,90.1,176.5126,47.7794,3.69,1.18,56.3,176.6284,-61.1784,4.11,.9,119.5,176.6295,-40.5004,4.89,.66,9.2,176.7318,55.6282,5.27,1.28,66.1,176.8298,-57.6965,5.42,1.66,215.5,176.9788,8.2459,5.31,.04,59.2,176.9964,20.2189,4.5,.55,71.3,177.0606,-66.8149,4.75,1.52,131.8,177.1613,14.2842,5.9,.3,59.7,177.1878,-26.7498,5.1,1.59,167.2,177.2649,14.5721,2.14,.09,11,177.4211,-63.7885,4.3,-.15,182.5,177.4238,34.9318,5.73,.47,69.4,177.4859,-70.2258,4.98,1.36,290.7,177.6137,-62.6494,5.68,.23,0,177.6738,1.7647,3.59,.52,10.9,177.7593,-5.3333,5.62,1.06,91.4,177.7862,-45.1735,4.47,1.28,132.8,177.9234,-30.8348,5.85,.55,31.2,177.9634,-65.2059,4.89,-.12,111.1,178.0428,-56.9877,5.56,.07,102.9,178.2272,-33.9081,4.29,-.1,95,178.4577,53.6948,2.41,.04,25.5,178.6772,-25.7139,5.26,.88,87.7,178.75,-63.2792,5.89,.21,0,178.7631,8.4439,5.58,.94,52.6,178.9172,-28.4771,5.93,1.5,167.8,178.9189,15.6468,5.53,.12,151.7,178.9934,56.5986,5.83,1.1,94.9,179.004,-17.1508,5.17,-.02,77.1,179.4167,-62.4487,5.59,-.15,187.3,179.5634,-56.3173,5.44,-.06,233.6,179.6986,-64.3396,5.59,.17,0,179.8231,33.167,5.95,1.15,227.3,179.9066,-78.2218,4.88,-.05,110.9,179.9871,3.6552,5.36,0,93.6,180.1852,-10.446,5.54,.76,12.8,180.2132,-19.659,5.28,-.19,970.9,180.2183,6.6143,4.65,.12,117.8,180.4145,36.0421,5.59,1.02,102.8,180.5283,43.0456,5.22,.28,34.3,180.6571,-69.1923,5.89,-.08,105.7,180.7563,-63.3129,4.32,.28,72,180.9149,-42.4341,5.15,.42,25.3,181.0692,21.4592,5.89,.25,101,181.0801,-63.1657,4.72,-.08,261.8,181.162,-68.3289,5.34,-.01,106.5,181.1936,-76.5191,5.04,1.49,146.2,181.2384,-60.9683,5.95,1.69,209.6,181.3022,8.733,4.12,.97,50.1,181.313,76.9057,5.78,1.03,97.1,181.5959,-65.7095,5.95,.61,125.9,181.7204,-64.6137,4.14,.35,19.8,181.9578,-75.367,5.17,1.28,130.2,182.0218,-50.6613,4.46,-.16,134.4,182.0613,-48.6925,5.34,-.01,183.8,182.0896,-50.7224,2.58,-.13,127.2,182.1034,-24.7289,4.02,.33,14.9,182.2242,-44.326,5.75,.24,104.2,182.2275,-41.2316,5.51,-.1,487.8,182.4221,1.8979,5.95,1.12,73,182.5142,5.807,5.72,.35,44.1,182.5312,-22.6198,3.02,1.33,97.5,182.7499,81.7098,6,1.62,336.7,182.766,-23.6024,5.45,.06,58.8,182.913,-52.3685,3.97,-.16,116.1,182.9632,25.8703,5.66,1.4,271.7,183.0387,20.5421,5.6,.96,130.4,183.0498,77.6162,5.14,.36,33.4,183.0916,-62.9508,5.91,.25,0,183.3543,-38.9292,5.77,-.14,436.7,183.3581,10.2623,5.85,.26,50.2,183.5112,-45.7239,5.31,1.4,175.1,183.7483,-20.8442,5.82,1.05,82.8,183.7854,70.2,5.72,1.18,142.9,183.7863,-58.7489,2.79,-.19,105.8,183.8565,57.0326,3.32,.08,24.7,183.9515,-17.5419,2.58,-.11,47.1,184.0008,14.8991,5.09,.07,60.9,184.0315,40.6602,5.69,1.59,236.4,184.0856,23.9454,4.93,.96,76.5,184.1256,33.0615,4.99,1.14,97,184.3733,53.1913,5.8,1.33,105.7,184.3774,28.9372,5.71,.16,54.9,184.3928,-67.9607,4.06,1.6,92.4,184.5868,-79.3122,4.24,-.12,91.5,184.6094,-64.0031,4.06,-.17,109.6,184.668,-.7872,5.9,.17,114.5,184.7083,75.1606,5.47,.05,97.8,184.749,-55.143,5.01,1.6,151.5,184.953,48.9841,5.28,1.62,180.8,184.9765,-.6668,3.89,.03,81.4,185.0449,-22.1757,5.94,.82,118.3,185.082,26.6195,5.52,1.09,49.4,185.0874,3.3126,4.97,1.17,94.4,185.1402,-22.2159,5.2,-.09,127.4,185.1793,17.7929,4.72,1.01,88.9,185.212,57.8641,5.54,1.45,194.9,185.2321,-13.5657,5.14,1.05,61.7,185.34,-60.4011,3.59,1.39,70.5,185.4893,-56.3744,5.91,1.53,694.4,185.5306,-67.5221,5.15,.2,101.1,185.5501,-68.3073,5.73,1.04,100.2,185.6263,25.8462,4.78,.52,90.3,185.706,-57.6761,5.38,-.1,110.9,185.8399,-24.8407,5.66,1.15,101.5,185.8976,-35.4127,5.32,-.07,136.2,185.9364,-38.9114,5.79,-.06,102.8,186.0062,51.5623,4.76,.88,118.5,186.0772,26.0986,5.17,.08,81.1,186.2634,56.7778,5.82,1.62,263.2,186.299,-11.6106,5.95,.04,70.5,186.3406,-35.1864,5.71,-.07,134.6,186.4622,39.0186,5.01,.95,80.2,186.6003,27.2682,4.92,.28,84.6,186.6323,-51.4506,4.82,-.14,137.4,186.6496,-63.0991,.77,-.24,98.7,186.7154,-32.8301,5.56,.01,155.5,186.7345,28.2684,4.35,1.13,51.3,186.7471,26.8257,4.98,.09,85.2,186.8702,-58.9918,5.38,1.54,135.9,186.8963,55.7127,5.68,1.58,127.9,187.0099,-50.2306,3.91,-.19,126.3,187.0936,-39.0412,5.45,-.07,133.9,187.2279,25.9129,5.29,-.06,72.9,187.3627,24.1089,5.47,.45,61.6,187.4302,20.8961,5.68,.09,84,187.4661,-16.5154,2.94,-.01,26.6,187.4758,-56.5249,5.78,1.57,156,187.4889,58.4057,5.37,.2,83.8,187.4912,-41.7359,6,1.51,226.2,187.5277,69.2011,5.01,1.62,190.5,187.5727,-23.6964,5.63,1.67,301.2,187.7523,24.5672,5.47,.06,82.7,187.7915,-57.1132,1.59,1.6,27.2,187.918,-59.4239,5.49,.62,429.2,187.9838,-63.5058,5.96,.26,75.1,188.0176,-16.196,4.3,.39,18.3,188.0416,-73.0011,5.88,1.08,106.6,188.1167,-72.133,3.84,-.16,99.6,188.15,-13.8591,5.74,.38,38.2,188.3706,69.7882,3.85,-.12,150.4,188.3927,-12.8302,5.58,.86,49.4,188.4122,33.2476,5.42,1.01,89.4,188.4356,41.3575,4.24,.59,8.4,188.4448,-9.4521,5.48,-.04,79.2,188.5968,-23.3968,2.65,.89,44.7,188.6766,-44.673,5.76,.68,28.3,188.6834,70.0218,4.95,1.31,184.5,188.7128,22.6293,4.8,.01,95.1,188.7823,18.3771,5.03,1.15,138.1,188.784,21.8814,5.86,1.24,195.7,188.9397,-41.0219,5.12,.22,35.5,189.0043,-39.8695,5.78,0,72.8,189.1973,-5.8319,5.88,.07,69,189.2431,17.0895,5.7,1.44,194.6,189.2959,-69.1356,2.69,-.18,96.7,189.4262,-27.1389,5.41,.33,34.3,189.4257,-48.5413,3.85,.05,40.2,189.5934,1.8547,5.68,1.59,151.1,189.6859,-18.2501,6,.31,67.3,189.7644,-30.4224,5.86,1.21,191.6,189.7805,21.0626,5.49,.98,83.8,189.8115,-7.9956,4.66,1.24,90,189.9689,-39.9873,4.63,-.08,111.9,190.3165,-13.0139,5.17,.43,78.9,190.3458,-46.1456,5.84,1.48,277.8,190.3793,-48.9599,2.2,-.02,39.9,190.4152,-1.4494,2.74,.37,11.7,190.4711,10.2356,4.88,.08,36.3,190.4857,-59.6858,4.91,-.04,293.3,190.488,6.8066,5.57,0,71.5,190.6477,-48.8131,4.66,1.07,58.4,190.7094,-63.0586,5.27,.2,373.1,190.7882,-56.1762,5.99,-.07,117.1,190.9085,-1.577,5.91,.85,67,191.0022,-28.324,5.46,1.35,126.4,191.2475,39.2789,5.95,.56,17.4,191.2826,45.4403,5.42,2.99,320.5,191.4044,7.6733,5.22,.32,77.5,191.4085,-60.9813,4.69,1.05,36.8,191.57,-68.1081,3.04,-.18,104.7,191.5939,9.5397,5.65,.99,45.1,191.5946,-56.4888,4.62,-.15,117.9,191.6615,16.5777,5.12,1.35,104.2,191.6926,-33.3155,5.87,1.33,108.9,191.829,62.7812,5.88,.21,60.3,191.8931,66.7903,5.43,1.57,227.3,191.9303,-59.6888,1.25,-.24,85.4,192.1094,-27.5974,5.65,.95,98.2,192.1644,60.3198,5.83,.47,24,192.2259,14.1226,5.71,.02,122.4,192.2778,83.4178,5.92,.01,123,192.3069,83.4129,5.38,.03,178.9,192.3227,27.5524,5.76,.05,92.9,192.4374,-71.9863,5.55,1.15,143.3,192.5448,37.5169,5.87,.17,109.8,192.6715,-33.9993,4.9,-.03,122.7,192.7412,-52.7874,5.7,.13,101.8,192.8249,-60.3298,5.71,.34,0,192.9247,27.5407,4.93,.68,89.1,192.9872,-39.6804,5.99,-.1,142.9,193.2674,-54.9525,5.91,1.31,126.7,193.2788,-48.9433,4.33,1.34,90.3,193.3239,21.2449,4.89,.9,86.8,193.3412,-60.3285,5.75,.29,0,193.3592,-40.1789,4.25,.22,45.6,193.4538,-60.3762,5.89,.2,0,193.5073,55.9598,1.76,-.02,25.3,193.5777,-11.6486,6,.07,68.5,193.5882,-9.539,4.77,1.59,166.9,193.6484,-57.1779,4.03,-.18,127.1,193.6537,-57.1687,5.08,-.09,124.8,193.6633,-59.1467,4.62,-.15,117.6,193.7355,47.1967,5.75,1.45,213.2,193.745,-85.1234,5.45,.99,107.9,193.7438,-44.152,5.89,.63,40.1,193.831,-42.9157,5.46,1.67,202.8,193.869,65.4385,5.23,.3,29.3,193.9009,3.3975,3.39,1.57,60.8,193.9881,-56.8358,5.34,.01,0,194.0019,38.3149,5.61,.34,36.9,194.0069,38.3184,2.89,-.12,35.2,194.0732,54.0995,5.84,.2,86.7,194.132,-72.1852,5.93,1.11,176.4,194.2681,-51.1988,5.17,-.07,113,194.6972,75.4725,6,1.03,166.1,194.731,17.4094,4.76,1.57,99.4,194.9147,-3.8119,5.79,.2,77.9,194.9795,66.5973,5.37,1.28,191.6,195.0686,30.785,4.88,1.17,202.4,195.1498,-3.3685,5.99,1.12,100.3,195.1821,56.3663,4.93,.37,25.4,195.2901,17.1231,5.97,.97,124.7,195.5442,10.9592,2.85,.93,33.6,195.5678,-71.5489,3.61,1.19,27.9,195.7722,-71.4757,5.93,0,306.7,195.8888,-49.5273,4.83,.03,67.6,195.9421,-20.5835,5.58,.55,28.2,196.4351,35.7989,5.2,-.06,104.4,196.4678,45.2685,5.64,1.14,132.6,196.5696,-48.4633,4.71,-.15,119.6,196.5885,21.1534,6,.39,49.7,196.5942,22.6162,5.53,1.46,225.7,196.6462,-41.5884,5.59,1.05,105.6,196.7261,-35.862,5.63,.05,76.8,196.7277,-49.9062,4.27,-.18,143.3,196.7947,27.6247,4.8,1.48,101.6,196.8512,-59.8605,5.98,.43,170.1,196.9095,-53.4598,5.7,-.06,100.1,196.9742,-10.7404,5.15,1.14,94.3,197.0298,-65.306,5.44,-.03,0,197.1353,-8.9844,5.57,1.18,97.1,197.2636,-23.1181,4.94,1.05,71,197.3018,10.0225,5.79,1.02,94.5,197.4387,-10.3293,5.95,1.49,212.8,197.4494,16.8486,5.91,1.45,206.2,197.4875,-5.539,4.38,-.01,96.8,197.497,17.5294,4.32,.46,17.8,197.5134,38.499,5.91,.29,63.3,197.787,-42.2329,5.78,.52,84.9,197.8467,-43.3686,5.24,1.05,68.2,197.9643,-69.942,5.92,.41,42.1,197.9683,27.8782,4.23,.57,9.1,198.0148,-16.1986,5.04,.46,33.9,198.0133,-37.803,4.85,.69,20.7,198.0733,-59.9206,4.58,-.07,116.1,198.1372,11.5561,5.76,1.5,257.1,198.2033,-66.2267,5.91,.05,90.7,198.3473,-50.6998,5.9,-.01,112.2,198.4289,40.1529,4.94,1.06,140.8,198.5454,-19.9309,5.31,.86,39,198.5504,-58.6839,5.91,1.08,109.2,198.5631,-59.1032,4.9,.49,18.2,198.5722,-78.4475,5.84,1.04,374.5,198.6303,11.3317,5.64,1.51,146.6,198.6803,-48.957,5.84,1.06,72.2,198.8123,-67.8946,4.79,-.08,117.4,198.8831,40.8552,5.77,.2,74.1,198.9949,-19.9431,5.21,1.01,38.5,199.1938,9.4242,5.19,.58,17.6,199.2214,-31.5062,5.1,.96,79,199.3042,-66.7834,4.86,1.48,366.3,199.308,-43.9795,5.82,.19,64.9,199.3151,13.6758,5.33,1.3,99.5,199.3856,40.5726,4.72,.31,81,199.4012,5.4699,4.78,1.64,207,199.5605,49.6821,5.14,-.05,84.2,199.6013,-18.3112,4.74,.71,8.6,199.6155,34.0983,5.81,1.37,153.6,199.7304,-23.1715,2.99,.92,41,200.079,40.1505,5.6,1.2,156,200.1492,-36.7123,2.75,.07,18,200.1576,-52.7478,5.47,-.13,125.3,200.2014,-55.8007,6,.24,0,200.2404,-46.88,5.76,1.11,126.7,200.4235,2.0872,5.69,.04,67.7,200.5404,5.1548,5.89,.11,65.9,200.5679,-52.183,5.81,.07,0,200.6581,-60.9884,4.52,-.14,108.7,200.7546,-17.7353,5.36,.99,93.8,200.8287,-4.9244,5.88,1.43,381.7,200.9814,54.9254,2.23,.06,26.3,201.002,-64.5357,4.52,.82,79.8,201.1385,-5.164,5.76,.41,30,201.2778,23.8544,5.75,.09,87.5,201.2797,-74.8878,5.04,1.11,67.8,201.2982,-11.1613,.98,-.23,76.6,201.3064,54.988,3.99,.17,25.1,201.308,-64.4851,5.32,.41,39.2,201.4596,-70.6272,5.65,-.02,136.1,201.5324,-39.7551,5.11,1.18,62.3,201.5336,72.3915,5.82,1.65,359.7,201.5476,-1.1925,5.97,.18,78.3,201.5692,46.0281,5.88,.98,126.3,201.6799,-12.7077,5.27,1.48,135,201.7338,-41.4976,5.69,1.48,598.8,201.7367,78.6439,5.74,.77,87.6,201.8632,-15.9736,4.76,1.1,85.9,202.1075,13.7788,4.97,.71,18,202.1129,59.9458,5.4,-.01,71.4,202.3042,10.8183,5.65,1.05,98.2,202.3552,-51.1651,5.04,.06,155.5,202.7611,-39.4073,3.9,1.19,277.8,202.9912,-6.2558,4.68,1.61,122.5,203.1496,-28.6928,5.69,.04,71.6,203.2152,-15.363,5.52,1.23,157.7,203.242,-10.165,5.21,.96,72.1,203.5304,55.3484,5.6,-.01,91.6,203.533,3.659,4.92,.03,56.7,203.6136,49.016,4.68,.13,55.3,203.6685,-13.2143,5.92,.02,148.1,203.6733,-.5958,3.38,.11,22.7,203.6992,37.1824,4.91,.4,45.7,203.8804,-5.3962,5.7,.95,97.2,204.2019,-26.4952,5.73,.22,81.6,204.2462,24.6133,5.72,1.59,140.6,204.275,-44.1432,5.96,.94,127.2,204.2958,71.2423,5.5,1.22,126.1,204.3016,-61.6919,5.63,.49,35.7,204.3478,-46.4279,5.91,-.11,126.4,204.3651,36.2949,4.82,.24,60.9,204.6753,-29.5609,5.81,.43,46.3,204.704,-57.6227,6,1.14,0,204.8769,52.9212,5.46,.11,53.6,204.8942,10.7463,5.57,.35,60,204.9523,-40.0517,5.61,1.3,152.2,204.9719,-53.4664,2.29,-.17,131.1,204.9992,-49.95,5.74,1.5,157.5,205.0446,-64.5766,5.79,.4,69.4,205.1686,19.9557,5.73,.02,100.6,205.1845,54.6816,4.63,1.63,160.5,205.2312,-85.786,5.56,.18,83.8,205.2598,22.4958,5.63,1.01,103,205.3746,64.8224,5.85,.07,68.2,205.4032,-8.703,5.03,1.62,156.3,205.4365,-54.5594,4.99,-.06,83.2,205.5045,-58.7871,5.38,-.03,239.8,205.5962,82.7524,5.92,.99,122.5,205.6633,78.0644,5.91,1,100.7,205.681,34.989,5.98,.86,146.8,205.7293,-41.401,5.96,1.02,110.4,205.7338,-56.768,6,-.1,885,205.7655,3.5379,5.35,1.09,73.1,205.917,-42.0675,5.96,-.07,613.5,206.1243,-16.1791,5.55,.81,252.5,206.4037,-26.116,5.81,.02,87,206.4219,-33.0437,4.23,.39,19.4,206.4847,-12.4265,5.5,.9,124.7,206.5564,41.0887,5.88,.21,52.5,206.5794,38.5036,5.92,.95,130.7,206.6486,54.4327,5.68,-.04,89,206.6641,-51.4328,4.64,.95,80.5,206.6805,25.7022,5.97,.52,89.7,206.7348,-36.2519,5.15,-.01,133.9,206.7491,38.5427,5.51,1.04,97.2,206.8156,17.4569,4.5,.51,15.6,206.8558,-17.8598,5.41,1.62,207.5,206.8652,-50.2493,5.92,.28,64.9,206.8852,49.3133,1.85,-.1,31.9,206.9106,-50.3207,5.46,1.35,152.7,207.1614,31.1902,5.61,1.03,87.2,207.3613,-34.4508,4.19,1.52,56.1,207.3693,15.7979,4.05,1.52,80.8,207.3762,-41.6877,3.41,-.23,133.9,207.4041,-42.4737,3.47,-.17,155,207.4285,21.2641,4.92,1.43,123,207.4396,61.4893,5.97,.97,125.8,207.4678,-18.1342,4.96,1.06,74.9,207.6028,5.4972,6,.9,154.8,207.7884,34.6644,5.89,1.64,207.9,207.8581,64.7233,4.58,1.57,113.9,207.9467,-46.8987,5.77,-.15,487.8,207.9476,-69.4013,5.73,1.7,223.2,207.9478,34.4442,4.76,1.61,184.2,207.9567,-32.9941,4.32,-.15,105.4,208.0203,-52.8115,5.26,-.08,79.7,208.2928,28.6481,5.91,.2,65.7,208.3022,-31.9276,4.75,-.11,195.3,208.3039,17.9329,5.71,.84,211.4,208.3865,-35.6642,5.53,.44,52.3,208.4296,-53.3733,5.87,.01,276.2,208.4626,53.7287,5.7,-.03,146.8,208.4885,-47.1282,5.83,-.05,0,208.6712,18.3977,2.68,.58,11.4,208.6756,-1.5031,5.16,1.09,75.6,208.7046,-67.6521,5.74,1.49,289,208.8006,-52.1608,5.66,-.07,108.2,208.8849,-47.2884,2.55,-.18,117.1,208.912,-82.6662,5.95,1.41,245.7,209.0824,-46.5929,5.82,1.14,97.6,209.1162,1.0506,5.9,.22,90.3,209.1373,-54.7047,6,.78,38.7,209.1424,27.4921,5.02,1.44,178.3,209.412,-63.6867,4.71,1.07,64.3,209.5678,-42.1008,3.83,-.22,161,209.6298,-24.9722,5.2,-.09,102,209.6622,21.6962,5.76,0,144.7,209.6698,-44.8036,3.87,-.21,131.1,209.8228,-50.3696,5.92,.96,106.2,210.0005,-25.0104,5.77,.48,56,210.2185,-66.2689,5.96,.35,76.1,210.3351,8.8949,5.98,.09,82.8,210.4116,1.5445,4.23,.12,69,210.4312,-45.6034,4.34,.6,389.1,210.5949,-27.4298,5.47,1.33,134.8,210.8604,-56.2134,5.93,1.21,167.2,210.9559,-60.373,.61,-.23,120.2,211.0973,64.3759,3.67,-.05,92.9,211.3328,-76.7968,5.69,1.24,113.1,211.5115,-41.1796,4.36,-.2,156.5,211.5929,-26.6824,3.25,1.09,31,211.6706,-36.37,2.06,1.01,18,211.6784,-9.3135,5.46,.35,58,211.9823,43.8545,5.13,1.49,157.2,212.0721,49.4582,5.26,1.64,168.4,212.2122,77.5475,4.8,1.37,140.1,212.396,-51.5047,5.96,-.05,251.3,212.4784,-53.4389,4.74,.94,55.9,212.5997,25.0917,4.82,.54,37.4,212.7104,-16.302,4.93,1.68,141.2,213.0167,69.4325,5.18,1.59,131.2,213.0659,2.4094,4.99,-.12,79.2,213.1918,-27.2612,5.07,1.13,66.7,213.2239,-10.2737,4.18,1.32,78.1,213.3184,-53.6657,5.53,1.44,653.6,213.3709,51.79,4.53,.23,50.1,213.42,-.8455,5.89,.49,59.4,213.5216,12.9594,5.53,.54,33.9,213.6778,-41.8375,5.61,.93,136.6,213.7119,10.1006,5.29,1.01,81.2,213.7381,-57.0861,5.03,-.07,147.7,213.8504,-18.2007,5.53,0,75.6,213.9153,19.1824,-.05,1.24,11.3,214.0036,-6.0005,4.07,.51,22.2,214.0414,51.3672,4.75,.24,29.1,214.0959,46.0883,4.18,.09,30.4,214.1613,-66.5879,5.72,-.1,400,214.3685,15.2634,5.84,1.68,233.6,214.4992,35.5095,4.8,1.06,71.6,214.5579,-81.0078,4.89,.24,42.3,214.6594,-18.716,5.86,.01,102,214.7537,-25.8154,5.87,.52,18,214.7775,-13.3711,4.52,.13,57.2,214.8178,13.0043,5.41,.39,26.1,214.8495,-37.0029,5.93,.08,73.5,214.8509,-46.0581,3.55,-.18,103.6,214.8853,-2.2655,5.14,1.02,80.2,214.9385,16.3069,4.84,1.23,57.3,214.9646,-61.273,5.22,.28,48.4,215.0404,-43.0588,5.55,.91,113.1,215.0814,-56.3865,4.3,.08,375.9,215.1393,-37.8853,4.05,-.03,79.4,215.1774,-45.1871,4.78,.31,43.6,215.5822,-34.7868,5.57,-.09,420.2,215.5965,-80.1089,5.06,-.11,197.6,215.6545,-58.4591,4.76,.8,117.5,215.7593,-39.5118,4.41,-.18,140.3,215.7741,-27.754,4.78,1.3,48.3,215.8446,8.4466,4.86,.01,65.9,215.9524,-53.1762,5.99,1.1,113,216.0037,8.244,5.94,.07,135.5,216.0473,5.8201,5.1,.12,48.8,216.2026,-24.8063,5.34,.96,140.6,216.2764,-68.1953,5.56,.43,621.1,216.2992,51.8507,4.04,.5,14.5,216.5343,-45.2214,4.56,-.15,334.4,216.5451,-45.3793,4.33,.43,97.8,216.614,19.2269,5.4,.23,89.1,216.7301,-83.6679,4.31,1.3,91.7,216.7795,-65.8216,5.87,1.5,277,216.8007,-46.1343,5.83,.31,67.8,216.8814,75.696,4.25,1.43,110,217.0434,-29.4916,4.97,-.07,120.6,217.0506,-2.228,4.81,.69,36.3,217.1576,49.8449,5.58,.86,100,217.1738,-6.9005,5.42,1.49,191.6,217.4605,.8289,5.96,.16,79.3,217.536,-45.3214,5.51,-.09,146.2,217.5873,-49.519,5.38,.06,62.3,217.7952,-38.8697,5.99,1.06,96.6,217.8185,-67.7172,5.84,1.01,76,217.9575,30.3714,3.57,1.3,49.1,218.0195,38.3083,3.04,.19,26.6,218.0843,26.6773,6,.23,73.6,218.1289,55.398,5.74,1.53,190.1,218.1356,22.2601,5.91,.39,54,218.1544,-50.4572,4.44,-.18,176.4,218.3749,-52.6795,5.86,1.08,100.3,218.3849,-54.9986,5.86,.48,76.5,218.6651,49.3684,5.74,1.56,262.5,218.6701,29.7451,4.47,.36,15.8,218.8768,-42.1578,2.33,-.16,93.7,218.8812,-41.5174,5.88,-.09,112.5,219.0793,-46.2455,5.55,1.49,214.6,219.1839,-40.2116,5.74,-.11,147.5,219.334,-46.1334,5.39,.93,418.4,219.4718,-49.4258,4.05,-.15,96.9,219.5525,43.6421,5.74,1.48,276.2,219.5583,18.2984,5.9,1.1,99,219.5634,54.0233,5.83,.01,110.3,219.7093,44.4045,5.39,.03,57,219.8962,-60.8372,1.35,.9,1.3,219.9021,-60.834,-.01,.71,1.3,220.1766,13.5343,5.93,.24,50.8,220.1815,16.4183,4.49,0,93.7,220.2558,-36.1349,5.67,-.08,189.8,220.2873,13.7283,3.78,.04,53.9,220.4115,8.1618,4.86,.99,164.7,220.4313,11.6607,5.55,.94,123.6,220.4823,-47.3882,2.3,-.15,142.5,220.49,-37.7935,4.01,-.16,104,220.6267,-64.9751,3.18,.26,16.6,220.7651,-5.6582,3.87,.39,18.3,220.8065,-24.9978,5.7,.01,152.4,220.8557,26.5279,4.8,1.67,216,220.9143,-35.1737,4.06,1.36,64.2,220.9351,40.4593,5.72,1.4,209.6,221.2467,-35.1918,4.92,.01,65.7,221.2467,27.0742,2.35,.97,62.1,221.3103,16.9643,4.6,.97,74.5,221.3222,-62.8756,5.36,.31,48.4,221.3759,.7173,5.68,-.02,151.3,221.5003,-25.4432,5.15,.32,30.3,221.5248,15.1318,5.78,1.33,247.5,221.5282,-23.153,5.8,.98,103.7,221.5622,1.8929,3.73,-.01,41.2,221.6208,-47.4411,5.74,.07,93.7,221.7554,-52.3835,5.22,.98,79.7,221.7712,-38.2906,5.9,1.34,153.6,221.844,-25.6243,5.61,-.04,227.8,221.9367,-26.0875,5.23,.94,109.8,221.9655,-79.0448,3.83,1.43,137,221.9898,-26.6462,5.76,-.01,137.2,222.1585,-36.6347,5.89,1.37,157.7,222.1856,-66.5936,5.91,-.11,431,222.3278,46.1162,5.76,.48,49,222.3281,-24.2515,5.68,1.27,310.6,222.3294,-14.149,5.32,.07,72.9,222.4221,48.7208,5.68,.5,68.6,222.4933,28.6158,5.8,.05,98.4,222.5659,23.9118,5.86,.58,18.2,222.5721,-27.9604,4.42,1.37,101.5,222.5851,82.5119,5.63,.67,43.3,222.6235,37.272,5.47,1.03,64.4,222.6716,-15.9972,5.15,.4,23,222.6764,74.1555,2.07,1.47,40.1,222.7196,-16.0418,2.75,.15,23.2,222.7545,-2.2992,4.93,.99,67,222.8474,19.1005,4.54,.72,6.7,222.8602,59.294,5.48,1.37,138.9,222.9096,-43.5754,4.32,-.15,123.9,223.1469,-63.8098,5.91,.66,505.1,223.2128,-37.8032,5.02,-.15,150.8,223.3066,-73.1901,5.59,.82,101,223.349,19.1528,6,.84,11.5,223.5839,-24.6422,5.27,1.34,127.9,223.5953,-11.8983,5.78,.98,103.3,223.658,-33.3006,5.85,1.43,320.5,223.894,-60.1142,5.18,1.16,49.4,223.9363,-33.8558,5.32,.05,77.8,224.0551,14.4463,5.9,-.03,183.2,224.0719,-52.8095,5.38,.14,61.5,224.096,49.6284,5.63,.53,25.1,224.1336,-47.8792,5.62,-.04,169.2,224.1833,-62.781,5.08,-.02,463,224.1921,-11.4097,5.48,1.49,168.4,224.2958,-4.3465,4.47,.32,26.9,224.2987,16.3881,5.72,.95,163.1,224.3667,-21.4155,5.72,1.02,5.8,224.3885,-.1676,5.51,1.13,89.4,224.3959,65.9325,4.63,1.59,140.8,224.4708,-76.6627,5.37,1.44,114.8,224.633,-43.134,2.68,-.18,117.4,224.6636,-27.6573,5.65,.26,113.1,224.7233,-11.144,5.88,1.27,95.1,224.7904,-42.1042,3.13,-.21,117.5,224.8463,4.5678,5.91,1.61,215.1,224.9039,39.2653,5.64,.34,51.5,225.0471,-77.1606,5.92,1.05,233.6,225.2431,-8.5189,4.91,0,90,225.3046,-38.0584,5.88,1.25,119.8,225.3326,-2.7549,5.52,1.69,227.8,225.3629,60.2045,5.91,.11,105.7,225.4538,-.1403,5.71,1.51,704.2,225.4617,-83.2276,5.65,.96,120.8,225.4865,40.3906,3.49,.96,69.1,225.5268,-28.0606,5.83,.16,101.7,225.5271,25.0081,4.8,1.51,113.9,225.7252,2.0913,4.39,1.03,59.9,225.747,-32.6433,5.45,-.13,118.9,225.7752,35.2058,5.52,1.02,85.8,225.9471,47.6541,4.83,.65,12.5,226.0176,-25.282,3.25,1.67,88.4,226.1114,26.9476,4.52,1.24,75.4,226.1955,-83.0383,5.65,1.27,598.8,226.2008,-64.0314,5.16,.94,84.6,226.2795,-47.0512,3.91,-.14,135.9,226.3299,-41.0672,5.13,1.01,108.2,226.3576,48.151,5.59,-.01,84.1,226.5697,54.5563,5.24,.96,78.9,226.6383,-30.9185,5.97,-.08,121.4,226.6567,-16.2568,5.19,1.59,213.2,226.8253,24.8692,4.93,.43,19.6,226.8581,-49.0886,5.77,.92,103.5,227.0505,-40.5839,5.75,-.11,110.7,227.0991,26.3012,5.67,1.24,158.7,227.1482,25.1086,5.82,1.23,143.1,227.1633,-42.8679,5.85,-.12,118.8,227.2109,-45.2799,4.07,-.16,238.1,227.3746,-67.0841,5.76,.68,0,227.5305,-38.7925,5.98,.87,131.4,227.5776,-26.3326,5.75,1.04,130.4,227.7867,-84.7878,5.88,-.03,97.2,227.8166,-55.346,5.45,1.12,662.3,227.9836,-48.7378,3.88,-.03,55.2,227.9903,-48.7437,5.7,.14,77.8,228.0178,18.976,5.9,1.41,221.7,228.0554,-19.7917,4.54,-.07,116.4,228.0712,-52.0992,3.41,.92,36,228.2066,-44.5004,4.83,-.18,154.6,228.4721,-26.1936,5.84,1.14,305.8,228.5252,31.7878,5.98,1.55,203.3,228.5799,-70.0795,5.75,3.27,359.7,228.6215,29.1643,5.28,.06,77.4,228.6555,-31.5191,4.91,.37,598.8,228.6597,67.3467,5.15,.55,25.3,228.7973,4.9394,5.32,1.09,114.4,228.8757,33.3148,3.46,.96,37.3,228.9545,.3721,5.62,.18,46.1,228.9736,-48.0737,5.96,.21,49.9,229.0168,-41.4912,5.15,.56,540.5,229.0959,-22.3994,5.52,1.36,144.7,229.1529,-60.904,5.74,-.06,515.5,229.2371,-60.9573,5.04,-.08,0,229.2517,-9.3829,2.61,-.07,56.8,229.2745,71.8239,5.02,1.37,122.1,229.3785,-58.8012,4.07,.09,30.6,229.412,-63.6105,4.85,1.26,125,229.4577,-30.1487,4.35,1.1,99.9,229.6021,20.5728,5.68,.97,109.3,229.6089,-.4612,5.88,1.51,222.7,229.6334,-47.8753,4.27,-.09,102.9,229.7048,-60.4963,5.43,-.09,0,229.7274,-68.6795,2.87,.01,56.4,229.7349,-40.7882,5.59,-.1,167.8,229.8283,1.7654,5.04,.54,25.4,230.0215,51.9585,5.65,.12,67.7,230.0357,29.6162,5.51,1.01,82.8,230.1821,71.834,3,.06,149.3,230.2583,.7153,5.35,1.19,73.4,230.2817,-5.8249,5.54,1.05,92.7,230.343,-40.6475,3.22,-.23,271,230.4515,-36.2614,3.57,1.53,84.3,230.4524,32.9337,5.38,-.05,80.3,230.4506,-48.3176,5.65,.64,14.8,230.5345,-47.9278,4.99,.52,35.9,230.6552,62.0471,5.99,-.03,137,230.6557,39.5815,5.56,1.63,595.2,230.6601,63.3414,5.72,1.31,112.9,230.6703,-44.6896,3.37,-.19,157,230.789,-36.8585,4.54,-.15,159.2,230.7938,-60.6572,5.65,.49,40.3,230.8013,30.2878,4.99,.58,17.9,230.8444,-59.3208,4.48,.17,137.6,230.9677,-12.3695,5.72,1.04,172.4,231.0495,-10.3223,4.92,.45,31.2,231.1226,37.3772,4.31,.31,34.7,231.1875,-39.7103,5.36,-.09,124.7,231.2324,58.9661,3.29,1.17,31,231.3342,-38.7336,4.6,0,120.3,231.4475,15.428,5.16,1.65,211.4,231.5613,-68.3092,5.89,1,105,231.5724,34.336,5.46,1.41,158,231.8255,-36.7676,5.46,-.15,131.2,231.8878,-64.5315,5.71,1.65,209.2,231.9572,29.1057,3.66,.32,34.3,231.9643,60.6702,5.9,1.44,195.7,232.0642,-16.7165,5.64,1.54,240.4,232.1593,1.8421,5.15,.24,39.7,232.3511,-46.7327,5.26,1.73,335.6,232.6683,-16.6095,5.82,1.06,155.8,232.7323,40.833,5.04,1.59,257.1,232.7324,64.2087,5.74,.98,94.6,232.8539,77.3494,5,1.54,262.5,232.8784,-73.3896,5.4,-.15,380.2,232.9458,40.8993,4.98,.09,119,233.1529,-19.6705,5.5,.2,70.1,233.2301,-16.8528,5.53,-.15,201.2,233.2324,31.3591,4.14,-.13,115.1,233.2414,-1.1864,5.5,1.09,85.9,233.5071,-40.0664,5.82,1.7,352.1,233.5446,-10.0645,4.61,1,28.9,233.6105,-9.1834,5.16,-.09,122.4,233.6555,-28.047,5.13,1.31,97.6,233.672,26.7147,2.22,.03,23,233.7006,10.5389,3.8,.27,69.9,233.7852,-41.1668,2.8,-.22,129,233.8122,39.0101,5.14,1.65,189.8,233.8175,53.9221,5.97,1.18,118.1,233.8816,-14.7895,3.91,1.01,50,233.9719,-44.9584,4.55,-.17,131.2,233.9877,54.6306,5.77,.05,78.3,234.0504,-44.3968,5.44,1.5,166.9,234.1218,16.1191,5.93,.35,52.1,234.1232,10.0102,5.26,.93,70.9,234.1801,-66.317,4.11,1.16,61.8,234.256,-28.1351,3.6,1.36,68.6,234.3834,54.5087,5.85,1.1,109.2,234.413,69.2833,5.65,1.37,235.3,234.4502,-23.1417,5.79,1.07,84.2,234.4567,40.3534,5.25,.89,52,234.5134,-42.5673,4.34,1.41,67,234.5676,46.7978,5.76,.35,35.7,234.5678,-21.0163,5.82,1.08,87.3,234.6425,50.4233,5.84,.85,115.5,234.664,-29.7778,3.66,-.18,112.5,234.7061,-52.3727,5.43,.01,125.3,234.7273,-19.3019,5.36,.88,95.4,234.8445,36.6358,4.64,-.1,145.1,234.9416,-34.4119,4.66,.96,67.3,234.9856,-59.9083,5.95,.51,30.9,235.0704,-23.8181,4.97,1.3,117.2,235.0889,-73.4467,5.64,-.04,239.2,235.2463,16.0246,6,.91,185.9,235.2974,-44.6612,4.64,.41,17.4,235.3877,19.6704,4.51,.06,58.3,235.4476,12.8475,5.34,.03,67.4,235.4778,-76.082,5.95,-.03,129.2,235.478,18.464,5.8,.21,53.1,235.4867,-19.6788,4.75,1.57,94.6,235.6596,-37.4249,5.23,.99,79.9,235.6709,-34.7104,4.75,-.15,111.5,235.6857,26.2956,3.81,.02,44.8,235.7115,52.3609,5.48,-.04,91.6,235.8205,-84.4653,5.57,.12,66.1,235.9971,32.5158,5.57,1.08,74.6,236.0076,2.5152,5.86,.68,14.7,236.0147,77.7945,4.29,.04,113.1,236.0183,-15.6728,5.41,.24,45.7,236.067,6.4256,2.63,1.17,22.7,236.0945,-41.8191,5.93,-.01,143.9,236.3478,5.4473,5.57,.04,113.4,236.5235,-1.8042,5.39,-.04,137.9,236.5469,15.4218,3.65,.07,47.6,236.6109,7.3531,4.42,.6,12.1,236.6448,55.4748,5.94,1.4,269.5,236.6667,62.5996,5.19,.06,87.7,236.6842,-34.6825,5.61,-.12,117.9,236.8222,14.1153,5.71,.09,76.7,236.908,55.3766,5.85,.25,73.8,236.9711,-65.4423,5.54,.23,112,237.0554,13.7891,5.98,1.27,144.7,237.1434,28.1567,5.89,.61,0,237.1849,18.1416,4.09,1.62,117.1,237.2367,-3.8185,5.53,.12,54,237.3985,26.0684,4.59,.79,52.1,237.405,-3.4302,3.54,-.04,52,237.4896,-48.9124,5.86,.07,59.6,237.5295,-53.2098,5.78,-.08,94.5,237.5731,2.1965,5.21,1.02,83.8,237.704,4.4777,3.71,.15,21.6,237.7397,-33.6272,3.97,-.04,59.8,237.7448,-25.7513,4.63,-.07,151.7,237.7784,-55.0555,5.74,.02,662.3,237.808,35.6574,4.79,1,30.5,237.815,-3.0905,5.09,.14,49.8,237.8163,20.9779,4.74,1.53,114.9,237.8809,-47.0608,6,1.15,137.7,238.069,55.8267,5.81,.97,102.9,238.1689,42.4515,4.6,.56,15.9,238.3336,-20.167,5.04,-.01,94.9,238.403,-25.3271,4.59,-.07,154.1,238.4564,-16.7293,4.13,1,51.7,238.4746,-24.5332,5.38,-.01,128.9,238.4828,-23.9781,5.41,-.03,130.9,238.6442,20.311,5.45,1.59,156.5,238.6577,43.1386,5.35,1.65,200.4,238.6647,-25.2437,5.87,-.07,158,238.7515,-19.3829,5.95,-.01,236.4,238.7857,-63.4307,2.83,.32,12.4,238.8733,-68.603,5.11,1.11,370.4,238.8753,-26.266,5.63,.14,125.2,238.8775,42.5662,5.73,-.1,164.5,238.8849,-60.1776,5.78,.35,51.3,238.9483,37.947,5.43,.35,41.6,239.0246,-60.4825,5.76,.09,66,239.1133,15.6616,3.85,.48,11.3,239.2212,-29.2141,3.87,-.2,144.7,239.2229,-33.9661,5.14,.13,42.4,239.2255,-33.9643,5.59,.07,46.1,239.3107,14.4145,5.54,1.14,74,239.3389,-36.1853,5.78,1.09,242.7,239.3969,26.8779,4.14,1.23,67.9,239.4186,-20.9831,5.84,.01,141.2,239.4477,54.7498,4.96,.27,33.6,239.5474,-14.2794,4.95,-.08,143.5,239.6453,-24.8315,5.43,-.09,170.4,239.713,-26.1141,2.89,-.18,179.5,239.7405,36.6438,5.61,1.53,234.2,239.7423,-65.0376,5.74,-.07,272.5,239.8761,-41.7444,4.99,.99,133.7,240.0305,-38.3967,3.42,-.21,135.5,240.0816,-16.5334,5.47,.52,35.2,240.0834,-22.6217,2.29,-.12,150.6,240.1985,-8.4114,5.53,.04,150.2,240.2131,4.4274,5.82,1,75.1,240.2611,33.3035,5.39,.61,17.2,240.3097,17.8184,5.1,.99,76.9,240.3607,29.8511,4.98,-.05,95.6,240.4723,58.5653,4.01,.53,21,240.5232,52.9159,5.93,1.5,248.8,240.5737,22.8045,4.82,.07,54.9,240.6996,46.0367,4.72,-.09,113.9,240.8037,-49.2297,4.65,.9,67.3,240.8307,36.6318,5.79,.59,200.8,240.8359,-25.8652,4.96,1.23,63.7,240.8508,-38.6025,4.9,-.15,122.5,240.8806,76.7939,5.73,.05,157.5,240.8837,-57.7751,4.63,.25,39.4,240.8932,-32.0005,6,.47,55.2,241.0901,-11.3736,4.16,.46,0,241.1534,-37.863,5.91,.41,37.9,241.3593,-19.8055,2.56,-.07,123.9,241.3606,-19.8019,4.9,-.02,122.1,241.4826,-72.4009,5.7,1.17,89.2,241.5266,-23.6063,5.9,-.07,161.3,241.582,67.8101,5.44,-.02,77.8,241.6227,-45.1732,4.73,.23,37.5,241.6481,-36.8023,4.22,-.18,127.1,241.7018,-20.6692,3.93,-.05,144.5,241.8176,-36.7557,5.72,.3,54.8,241.8514,-20.8688,4.31,.83,89.1,241.9017,-12.7454,5.75,.02,112.4,241.9064,9.8917,5.63,.2,99,242.0189,17.047,5,.93,112.7,242.0316,-26.3267,5.35,1.64,146.8,242.117,8.5343,5.69,1.57,247.5,242.1822,-23.6854,5.86,.02,136.1,242.1924,44.9349,4.23,-.04,62.5,242.2429,36.4909,4.73,1.01,35.8,242.2453,3.4545,5.93,1.47,121.5,242.2967,6.3787,5.93,.99,28.3,242.3273,-57.9343,5.57,-.02,85.8,242.4605,-3.4667,5.39,1.45,146.8,242.4691,-33.5458,5.5,-.07,125,242.7064,75.8776,5.48,-.09,189.4,242.7586,-29.4162,5.09,1.13,97.5,242.8238,-41.1198,5.86,.27,64.7,242.9085,23.4948,5.74,1.52,209.2,242.9483,42.3746,5.89,1.46,193.8,242.9502,36.4251,5.62,1.35,207,242.9989,-19.4607,4,.08,145.3,243,-10.0643,4.93,.09,47.7,243.0305,-8.5476,5.43,.12,77.4,243.0668,-28.4173,5.67,.01,93,243.0759,-27.9264,4.58,-.17,146.8,243.3143,5.0211,5.46,1.47,121.8,243.3446,-55.5409,5.78,.36,66.8,243.3697,-54.6305,4.95,1.02,131.2,243.4621,-11.8377,5.24,1.39,116,243.5864,-3.6943,2.73,1.58,52.5,243.5932,-33.0111,5.91,1.02,174.5,243.6702,33.8586,5.23,.6,21.1,243.8138,-47.372,5.13,-.11,118.2,243.8595,-63.6857,3.86,1.1,186.2,243.8693,18.8081,5.72,1.13,106.6,243.9053,-8.3694,5.49,.65,13.9,243.9575,-57.9123,5.61,.14,129.7,244.1803,-53.8111,5.45,1.7,237.5,244.1866,29.1503,5.8,.06,204.5,244.2539,-50.0681,4.97,.79,450.5,244.2726,-67.9413,5.95,.16,52.2,244.3139,59.755,5.37,1.55,226.8,244.3762,75.7553,4.95,.39,29.7,244.5746,-28.614,4.8,.01,41.3,244.5804,-4.6925,3.23,.97,32.6,244.7518,-14.8728,5.97,1.48,325.7,244.7967,49.0382,5.93,1.37,196.1,244.8235,-42.674,5.44,.1,107,244.8864,-30.9067,5.53,.47,48.3,244.9352,46.3134,3.91,-.15,94.3,244.9601,-50.1555,4.01,1.08,39.5,244.9798,39.7086,5.48,.41,26.4,245.0867,-78.6957,4.68,1.68,233.6,245.1052,-55.1397,5.76,.97,102.4,245.1119,-78.6675,5.27,1.41,188,245.1591,-24.1693,4.55,.76,269.5,245.2972,-25.5928,2.9,.3,213.7,245.453,69.1094,5.26,1.11,89.9,245.4801,19.1531,3.74,.3,59.1,245.5181,1.029,4.82,.34,27.3,245.5243,30.892,4.86,.97,56.2,245.5893,33.7991,5.2,1.63,196.5,245.6166,-49.5724,5.32,-.05,141.8,245.6211,-43.9121,5.89,1.12,289,245.6217,33.7035,5.4,1.52,182.1,245.9465,61.6965,5.67,.96,155.3,245.9979,61.5142,2.73,.91,28.2,246.0054,-39.193,5.37,.63,12.8,246.0258,-20.0373,4.48,1,61.2,246.0451,6.9482,5.83,.02,112.4,246.1056,55.2051,5.75,0,119.9,246.1323,-37.566,5.42,-.1,129,246.1657,-29.7047,5.4,.63,33.1,246.3507,37.3941,5.53,.17,74.5,246.354,14.0333,4.57,0,76.7,246.3963,-23.4472,4.57,.23,110.7,246.4299,78.9639,5.55,.25,42.9,246.756,-18.4563,4.22,.22,161,246.796,-47.5548,4.46,-.07,162.6,246.9311,-7.5979,5.24,1.72,177,246.9508,-8.3717,4.62,.18,41,246.9889,-64.0579,5.28,.38,38.8,246.9959,68.7681,4.94,-.05,149.3,247.0603,-37.1799,5.79,1.1,110.4,247.0632,-58.5998,5.67,.01,411.5,247.1173,-70.0844,4.9,.56,12.1,247.1416,.665,5.41,1.46,124.8,247.1606,41.8817,4.83,1.29,108.6,247.3519,-26.432,1.06,1.86,169.8,247.4264,-46.2432,5.35,.49,558.7,247.4455,-14.5509,5.66,.82,91.3,247.552,-25.1152,4.79,-.12,126.7,247.555,21.4896,2.78,.95,42.7,247.6398,20.4792,5.24,1.27,192.7,247.7057,-61.6335,5.19,1.24,241,247.7284,1.9839,3.82,.02,53.1,247.7849,-16.6127,4.29,.92,74.7,247.806,22.1955,5.76,1.6,257.7,247.8456,-34.7044,4.24,-.17,170.1,247.924,-41.8171,5.31,.3,833.3,247.9468,45.5983,5.61,.13,69.3,248.0342,-21.4664,4.45,.13,51.7,248.107,60.8233,5.92,.04,113.8,248.1487,5.5212,5.63,-.04,118.3,248.1512,11.488,4.84,1.5,107.6,248.3628,-78.8971,3.86,.92,47.9,248.5209,-44.0453,4.86,.04,0,248.5258,42.437,4.2,-.01,96.5,248.5806,-70.9881,5.5,1.24,248.1,248.9367,-65.4954,5.5,.95,104.9,248.9706,-28.216,2.82,-.21,145.3,249.0467,46.6133,5.83,1.04,306.7,249.0476,52.9,5.53,-.06,130.9,249.0572,52.9244,5.07,-.03,126.4,249.0894,-2.3246,5.77,.83,9.8,249.0936,-35.2553,4.18,1.53,105,249.094,-42.8589,5.46,.34,416.7,249.2897,-10.5671,2.54,.04,112.2,249.5019,56.0155,5.28,1.05,83.1,249.6095,-43.3984,5.83,-.05,192.3,249.6869,48.9283,4.86,1.56,127.1,249.7718,-37.2174,5.93,-.04,112.1,250.1612,4.2198,5.77,0,90,250.2297,64.589,4.84,1.21,225.7,250.3215,31.6027,2.81,.65,10.7,250.3351,-48.763,5.57,.17,0,250.3463,-68.2961,5.89,-.08,202.8,250.3933,-17.7422,4.91,1.09,126.4,250.4029,26.9169,5.92,.4,43.7,250.4176,-49.6516,5.62,-.04,671.1,250.427,1.1812,5.74,.34,55.6,250.4394,-33.1458,5.84,.65,86.9,250.4737,-19.9244,5.55,.44,42.1,250.724,38.9223,3.48,.92,33.3,250.7694,-77.5174,4.23,1.06,48.1,250.7762,77.514,5.99,.43,36.1,251.1656,-53.1523,5.96,1.23,223.2,251.1775,-40.8397,5.64,-.09,163.7,251.2508,-28.5097,5.99,.1,216.9,251.3242,56.7819,4.84,.38,26.1,251.3438,15.7453,5.6,1.64,139.1,251.4579,8.5826,5.15,1.53,108.6,251.4927,82.0373,4.21,.9,93.2,251.5884,-58.5036,5.74,-.1,302.1,251.6666,-67.1097,5.1,-.08,213.7,251.6998,-39.377,5.48,.97,88.3,251.8319,-58.3414,5.55,-.1,826.4,251.8323,42.2389,5.86,1.5,231.5,251.9434,5.2467,5.22,0,120.6,252.1662,-69.0277,1.91,1.45,119.8,252.3092,45.9833,4.82,.09,55.2,252.3944,13.2611,5.91,.01,100.1,252.4465,-59.0414,3.77,1.56,91.7,252.4585,-10.783,4.64,.48,32,252.5409,-34.2932,2.29,1.14,19.5,252.5808,7.2477,5.48,.11,54.4,252.6623,29.8065,5.73,1.63,327.9,252.8539,1.2159,5.51,.06,116.1,252.8905,-41.2305,5.23,.05,0,252.9386,24.6564,5.03,1.25,214.1,252.9676,-38.0474,3,-.2,153.6,253.0839,-38.0175,3.56,-.21,145.3,253.2419,31.7017,5.34,.32,29.2,253.3232,47.4167,5.99,1.32,201.2,253.3551,-20.4156,5.86,.69,26.9,253.4268,-43.051,5.95,1.64,232,253.4989,-42.362,4.7,.44,787.4,253.5015,-57.9095,5.91,1.59,217.4,253.502,10.1654,4.39,-.09,75.2,253.5077,-41.8064,5.46,.18,793.7,253.6123,-42.4789,5.84,.63,440.5,253.6459,-42.3613,3.62,1.39,40.6,253.6487,-6.154,5.23,1.1,73.8,253.7299,20.9585,5.39,.97,82.8,253.7438,-41.1509,5.78,.13,694.4,253.8424,18.4332,5.35,1.41,120,253.8529,-63.2697,5.99,.06,144.1,254.007,65.1348,4.88,.48,15.3,254.1199,-52.2837,5.94,-.07,116.1,254.2002,-23.1503,5.57,-.02,93.1,254.2966,-33.2595,5.48,1.61,290.7,254.4171,9.375,3.19,1.16,28,254.5747,-50.6412,5.53,.02,159.2,254.655,-55.9901,3.12,1.55,149,254.8915,-69.2682,5.79,-.1,241.5,254.896,-53.1604,4.06,1.45,110.6,254.9904,-25.0922,5.88,1.61,165.8,255.0262,-54.5972,5.64,.19,51.8,255.0396,-24.9891,5.74,.41,33.7,255.0724,30.9264,3.92,-.02,47.5,255.1123,-48.6478,5.98,.88,106.8,255.1541,-35.9341,5.95,1.16,98.5,255.2422,22.6321,5.69,1.33,952.4,255.265,-4.2226,4.82,1.48,124.2,255.4015,33.5683,5.27,.03,98.8,255.4693,-32.1435,5.03,-.1,137.2,255.5779,25.5056,5.76,1.02,96,255.7828,14.0919,4.97,1.6,121.1,255.7863,-53.237,5.27,.5,27.2,255.9138,13.6053,5.91,.01,76.7,255.9623,-38.1526,5.91,.41,64.7,256.103,-57.7122,5.73,-.1,174.5,256.2056,-34.1229,4.83,.26,0,256.3201,.7026,6,.58,20.7,256.3338,54.47,4.91,.47,27.4,256.3445,12.7408,4.89,.13,40.9,256.3844,-.8921,5.63,.1,342.5,256.5752,22.0842,5.56,1.3,104.8,256.5841,-37.2276,5.98,.08,142.2,257.0086,35.9352,5.41,.31,54.3,257.0619,-17.6091,5.98,1.01,114.9,257.1966,65.7147,3.17,-.12,100.7,257.1981,-30.4037,5.93,.28,78.2,257.3885,40.777,5.07,1.27,86.5,257.4498,-10.5233,5.43,.47,41.3,257.5945,-15.7249,2.43,.06,27.1,257.6763,-44.5577,5.06,.87,96.8,257.9112,-48.8734,5.94,1.79,341.3,258.0383,-43.2392,3.32,.44,22.5,258.0675,-39.5069,5.66,.04,62.9,258.1159,10.5852,5.32,1.59,334.4,258.1357,62.8743,5.54,.22,43,258.244,-32.4383,5.95,.07,543.5,258.3245,-67.1966,5.87,1.07,100,258.6619,14.3903,2.78,1.16,110.3,258.758,24.8392,3.12,.08,23,258.7618,36.8092,3.16,1.44,115.5,258.8302,-33.5484,5.6,-.06,0,258.8345,-14.5841,5.98,1.1,89.4,258.8374,-26.6028,4.33,.85,5.9,258.8998,-38.5939,5.95,.58,30.6,258.9228,23.7428,5.99,1.33,173.3,259.1321,1.2105,5.89,.02,200.4,259.1529,-.4453,4.72,1.12,63.1,259.2652,-32.6628,5.53,.51,48.4,259.3315,33.1001,4.8,-.17,204.1,259.4177,37.2915,4.64,.04,53.8,259.5028,-24.2869,5.14,1.05,90.4,259.5206,17.3179,6,.01,139.7,259.597,38.8114,5.97,1.01,97.1,259.6541,10.8645,5.03,1.54,151.1,259.6993,-44.1297,5.76,-.05,111.5,259.7022,28.823,5.68,.98,97.1,259.7382,-34.9898,5.91,1.08,6.8,259.766,-46.6362,5.47,.76,8.8,259.8021,-59.6946,5.93,1.39,763.4,259.9046,80.1364,5.74,1.5,294.1,260.041,25.5376,5.36,.06,137,260.0786,18.0571,5.01,1.65,147.1,260.088,46.2408,5.51,1.59,170.9,260.1649,32.4677,5.38,.62,14.3,260.2069,-12.8469,4.32,.04,62.3,260.2259,24.4994,5.13,0,131.1,260.2516,-21.1129,4.39,.39,17.4,260.4317,39.9746,5.55,.67,74,260.439,53.4204,5.69,1.46,191.2,260.4978,-67.7707,4.76,1.19,91.2,260.5024,-24.9995,3.27,-.19,133.7,260.5245,-70.1232,5.39,-.04,404.9,260.7281,-37.2208,5.91,1.07,113.1,260.7301,-58.0103,5.86,1.07,335.6,260.7797,-56.5255,5.76,.99,121.2,260.817,-47.4682,5.21,-.1,286.5,260.84,-28.1428,5.3,1.55,251.3,260.9206,37.1459,4.15,-.01,120.6,260.9901,8.8526,5.77,1.25,221.7,261.0045,-62.8642,5.69,-.15,444.4,261.0274,22.9603,5.7,.23,42.7,261.0545,-44.1626,5.1,-.05,226.2,261.0783,-60.6738,5.76,-.07,272.5,261.1314,16.301,5.75,.07,125,261.1751,-21.4415,5.82,.94,92.5,261.325,-55.5299,2.84,1.48,198,261.3486,-56.3777,3.31,-.15,341.3,261.4223,60.0484,5.65,.02,96.9,261.5002,-50.6335,5.19,1.05,139.7,261.5926,-24.1753,4.16,.28,25.5,261.6287,4.1404,4.34,1.48,276.2,261.6578,-5.0866,4.53,.39,30.1,261.6843,48.2601,5.83,.12,115.2,261.6923,34.6958,5.94,-.02,88.4,261.7047,20.081,5.52,-.12,178.9,261.7166,-45.843,5.28,-.06,194.9,261.8019,-50.6304,5.9,.06,909.1,261.8386,-29.867,4.28,.4,34.2,261.9065,-29.7246,5.98,.01,226.2,261.99,-52.2972,5.72,1.17,109.6,262.1621,-55.1697,5.93,1.11,302.1,262.2069,.3306,5.41,.24,59.6,262.2337,-36.7783,5.98,1.11,245.1,262.5992,-1.0629,5.31,.71,16.3,262.6082,52.3014,2.79,.95,116.6,262.6846,26.1106,4.41,1.43,113.3,262.691,-37.2958,2.7,-.18,176.7,262.6983,86.968,5.78,.24,46.9,262.7307,31.1581,5.63,.96,120.9,262.7746,-60.6838,3.6,-.1,60.7,262.8389,2.7245,5.57,.84,111.6,262.847,-56.921,5.99,-.04,561.8,262.854,-23.9626,4.78,.02,124.4,262.8644,-80.8591,5.83,1.62,271,262.9566,28.4075,5.66,0,82,262.9604,-49.8761,2.84,-.14,82,262.9911,68.135,5.07,1.08,64.7,263.044,55.1842,4.89,.25,30.2,263.0542,86.5865,4.35,.02,52.8,263.0668,55.173,4.86,.28,30.5,263.2802,41.2434,5.72,1.09,99.5,263.2808,-41.1731,5.84,.04,465.1,263.3451,19.2567,5.65,.51,37.7,263.3744,-5.7448,5.61,.19,48.1,263.4022,-37.1038,1.62,-.23,175.1,263.4141,16.3176,5.68,1,92.9,263.6529,9.5867,5.8,.04,103.5,263.6771,-32.5817,5.69,.04,0,263.6931,-11.242,5.54,.01,123.3,263.7336,12.56,2.08,.15,14.9,263.7483,61.8746,5.23,.6,14.2,263.915,-46.5057,4.56,-.02,116,264.1368,-38.6353,4.26,1.07,50.8,264.1569,48.5856,5.35,1.14,108.3,264.2379,68.758,4.77,.43,23.2,264.287,72.4558,5.87,1.02,111.2,264.3297,-42.9978,1.86,.41,92.1,264.3638,-50.0597,5.89,1.11,101.8,264.3796,24.31,5.76,.11,76.7,264.3967,-15.3986,3.54,.26,32.3,264.4009,-15.571,5.94,.36,473.9,264.4613,-8.1188,4.58,.13,231.5,264.523,-54.5004,5.25,.2,44.6,264.5396,-10.9263,5.74,1.23,117.8,264.8662,46.0063,3.82,-.18,139.5,265.0993,-49.4156,4.76,.41,21.4,265.3177,-46.9218,5.78,0,245.7,265.3407,51.8182,6,1.07,92.9,265.3536,-12.8753,4.24,.09,53.1,265.3847,6.3132,5.97,1.27,346,265.4848,72.1488,4.57,.43,22.8,265.4921,72.1569,5.81,.53,23.1,265.4943,15.9524,5.54,.39,34.9,265.6182,24.5641,5.56,1.44,124.4,265.622,-39.03,2.39,-.17,148.1,265.7129,-36.9456,5.53,1.55,211.4,265.8399,24.3278,5.73,.68,39.1,265.8575,-21.6832,4.86,.47,17.7,265.8681,4.5673,2.76,1.17,25.1,265.9966,53.8017,5.75,.02,163.4,266.0363,-51.8341,5.12,.69,15.5,266.175,-42.7293,5.87,.16,72.1,266.2328,-57.5455,5.97,.91,125.9,266.4333,-64.7239,3.61,1.16,108,266.6147,27.7207,3.42,.75,8.3,266.7835,17.697,5.61,.04,143.1,266.8901,-27.8308,4.53,.6,302.1,266.8962,-40.127,2.99,.51,591.7,266.9032,-14.7258,5.93,.01,183.8,266.9732,2.7073,3.75,.04,31.5,267.1032,20.5654,5.69,.94,79.5,267.2048,25.6229,5.09,1.14,65,267.2679,50.7811,5.02,.04,66.5,267.2937,-31.7032,4.79,-.03,170.6,267.3626,76.9629,5.02,.52,31.8,267.4645,-37.0433,3.19,1.19,38.6,267.5463,-40.0904,4.78,.26,781.3,267.5954,29.3221,5.51,1.07,77.8,267.6183,-53.6124,5.68,-.1,303,267.8856,-40.7725,5.94,1.57,173.3,267.8978,-60.1641,5.78,1.01,123.2,268.0569,-34.7992,5.88,-.11,258.4,268.0823,-34.4168,5.84,1.13,242.7,268.1477,1.305,5.91,1.57,112.7,268.3091,6.1014,5.77,.42,31.1,268.3251,40.008,5.17,1.17,108.5,268.3478,-34.8951,5.58,1.1,252.5,268.3822,56.8726,3.73,1.18,34.5,268.4782,-34.7527,6,-.06,315.5,268.7965,72.0051,5.43,.34,323.6,268.855,26.05,5.47,.34,0,268.9617,22.4642,5.62,1.25,133.3,269.0633,37.2505,3.86,1.35,230.9,269.0767,.6704,5.82,.06,416.7,269.0793,-15.8125,5.93,.02,74,269.1515,51.4889,2.24,1.52,47.3,269.1743,-28.0654,5.76,.21,51.3,269.1976,-44.3422,4.85,1.18,88.9,269.1989,-4.0818,5.44,1.16,122.7,269.268,.0667,5.95,.11,118.5,269.4412,29.2479,3.7,.94,41.9,269.4492,-41.7163,4.88,1.62,138.5,269.6256,30.1893,4.41,.38,263.9,269.6627,-28.7591,5.99,-.08,555.6,269.732,-36.8584,5.74,.92,121.8,269.7566,-9.7736,3.32,.99,46.2,269.772,-30.253,5,1.65,310.6,269.9032,-4.8211,5.86,1.56,171.8,269.9481,-23.8161,4.74,-.03,127.4,269.9842,45.5014,5.69,1.56,175.4,270.0142,16.7509,4.67,1.25,205.8,270.0384,80.0041,5.74,.52,63.5,270.0658,4.3686,4.79,-.1,199.6,270.1209,-3.6903,4.62,.39,23.6,270.1613,2.9316,3.93,.03,377.4,270.3767,21.5958,4.26,.41,127.9,270.4383,1.3051,4.42,.05,89.7,270.4766,-22.7803,5.72,-.03,0,270.596,20.8336,5.25,-.1,288.2,270.7129,-24.2825,5.37,.49,331.1,270.7705,-8.1803,4.77,.41,51.3,270.9685,-24.3607,5.89,.03,0,271.2099,-35.9014,5.98,1.16,105.6,271.2551,-29.5801,4.66,.77,266.7,271.3637,2.5001,4.03,.86,5.1,271.452,-30.4241,2.98,.98,29.7,271.4567,32.2307,5.72,1.18,212.3,271.5079,22.2189,4.96,1.66,226.2,271.5308,-8.324,5.84,.18,158.7,271.5633,-4.7513,5.74,.97,36.8,271.5988,-36.0198,5.94,.61,17.6,271.6578,-50.0915,3.65,-.1,249.4,271.7079,-43.4252,4.92,.26,41.8,271.7564,30.5621,5.05,.53,15.6,271.8265,8.7339,4.64,.95,83.6,271.8374,9.5638,3.71,.16,26.6,271.8697,43.4619,5,.91,125.6,271.8856,28.7625,3.84,-.02,103.6,271.9514,-17.1542,5.52,1.13,77.1,271.9563,26.0973,5.79,.13,38.6,271.9565,26.1013,5.83,.16,49.6,272.0093,36.4013,5.49,1.16,63.6,272.0207,-28.4571,4.55,.94,104,272.1451,-63.6686,4.33,.23,39.9,272.1895,20.8146,4.37,-.16,280.9,272.2203,20.0452,5.1,.18,100.8,272.3912,3.9933,5.71,.36,54.8,272.4751,3.1198,5.67,.49,46.9,272.4958,36.4663,5.57,.92,120.8,272.5242,-30.7287,5.53,.98,137.7,272.609,-62.0022,5.47,.59,17.6,272.6318,54.2866,5.97,.94,50.2,272.6679,3.3243,5.5,1.2,123.6,272.7732,-41.3591,5.86,.29,82.7,272.8073,-45.9544,4.52,1.01,128.2,272.8158,-75.8915,5.86,1.25,75.3,272.9306,-23.7012,4.96,1.05,78.5,272.938,33.4471,5.98,.04,237.5,272.9757,31.4053,4.96,1.64,166.9,273.1419,-73.6724,5.86,.46,42.1,273.3029,-41.3361,5.47,-.15,357.1,273.4409,-21.0588,3.84,.2,0,273.4743,64.3973,4.99,.44,22.9,273.5663,-21.7132,5.49,1.53,138.9,273.8038,-20.7283,5.29,.01,0,273.804,-20.388,5.96,-.02,0,273.8212,68.7558,5.96,1.05,84.7,273.9116,42.1593,5.56,-.11,181.5,273.9192,-63.0554,5.58,.94,90.3,273.9727,-44.2065,5.45,.96,92.1,274.2213,-3.0074,5.99,.89,103.4,274.2814,-56.0234,5.36,-.05,233.1,274.2985,-17.3739,5.81,1.57,299.4,274.4068,-36.7617,3.1,1.58,44.7,274.5133,-27.0426,4.66,1.63,233.6,274.7897,7.2598,5.41,1.08,46.8,274.7945,24.4461,5.3,1.51,298.5,274.9655,36.0645,4.33,1.16,77.2,275.0366,-15.8317,5.39,1.47,159.7,275.0746,21.9613,4.92,1.59,120.2,275.1893,71.3378,4.22,-.09,92.9,275.2169,3.3772,4.85,.91,79.9,275.2374,29.8589,5.61,.23,56.2,275.2485,-29.8281,2.72,1.38,106.6,275.2543,28.87,5.12,.21,80.6,275.2641,72.7328,3.55,.49,8.1,275.3275,-2.8988,3.23,.94,18.5,275.3458,-18.86,5.76,.67,378.8,275.3861,49.1216,5.02,1.62,198.8,275.5363,23.2852,5.41,1.63,199.6,275.5774,-38.6569,5.09,1.5,148.6,275.6472,12.0297,5.99,.06,134.8,275.7043,17.8266,5.25,1.25,111.2,275.7212,-36.6696,5.33,-.12,170.6,275.8007,-12.0148,5.71,.01,188.7,275.8068,-61.4939,4.35,1.46,143.7,275.8701,-36.238,5.52,1.01,87.9,275.9019,-75.0443,5.47,.04,59.5,275.9149,-8.9344,4.66,.93,63.4,275.9245,21.7698,3.85,1.17,36.5,275.9775,58.8007,4.98,.08,56.5,276.043,-34.3846,1.79,-.03,43.9,276.0574,39.5072,5.11,.05,134.6,276.076,-44.1103,5.24,-.16,149.5,276.2559,-30.7566,5.58,1.14,196.1,276.3377,-20.5417,4.81,1.31,125.8,276.4117,8.032,5.64,.88,241.5,276.4949,29.8289,5.81,.07,124.2,276.4964,65.5635,4.82,1.18,96.5,276.7251,-48.1172,5.44,.85,152.7,276.7434,-45.9685,3.49,-.18,85.2,276.8021,.1961,5.2,.49,143.9,276.9562,-29.8169,5.9,.52,36.6,276.9927,-25.4217,2.82,1.02,24,276.9949,6.1941,5.71,-.03,216.9,277.113,-38.9957,5.63,.14,126.1,277.2077,-49.0706,4.1,.99,38.7,277.2994,-14.5658,4.67,.08,97.9,277.3331,-80.2327,5.95,1.17,119,277.3988,23.8662,5.87,-.1,375.9,277.4207,-1.9853,5.38,.96,70.4,277.4374,77.5471,5.65,1.19,125.3,277.4831,-47.2205,5.69,1.26,198,277.4864,-57.5231,5.74,.99,97.6,277.5494,-18.7288,5.63,1.06,90.2,277.7685,16.9286,5.76,.05,133.5,277.7702,-32.9891,5.37,.18,88.9,277.8434,-62.2783,4.63,-.12,134.6,277.8571,-10.7958,5.77,.38,330,277.8596,-18.4027,5.12,.02,68.4,277.9393,-45.9148,4.92,-.1,216.9,277.9843,-43.5074,5.71,1.32,337.8,277.9875,-1.003,5.93,.17,188.3,278.0081,-45.7574,5.07,-.13,366.3,278.0889,-39.704,5.16,.08,70.3,278.1438,57.0456,4.77,.61,649.4,278.1805,-14.8657,5.47,2,885,278.1923,23.6168,5.88,1.49,230.9,278.2082,30.5542,5.47,-.08,109.6,278.2306,-73.9656,5.88,.99,108.8,278.3464,-38.726,5.67,-.06,298.5,278.3758,-42.3125,4.62,.99,170.9,278.4126,-14.8536,5.74,.04,69.6,278.4729,-24.0323,5.49,1.79,632.9,278.4862,52.3535,5.38,1.09,195.7,278.4907,-33.0166,5.28,-.12,404.9,278.76,-10.9772,5.12,.93,100.9,278.8018,-8.2441,3.85,1.32,61.1,278.8025,18.2034,5.79,.01,198.4,278.8767,23.6055,5.62,1.01,144.3,279.116,9.1225,5.38,.39,38.5,279.1556,33.469,5.41,-.1,154.6,279.1628,6.6718,5.43,.39,33.1,279.2347,38.7837,.03,0,7.7,279.3896,62.5266,5.74,-.04,119,279.3998,-.3095,5.76,.07,160.5,279.4768,-21.3977,5.93,.19,104.4,279.628,-23.5049,5.78,-.02,151.1,279.7225,-21.0519,5.85,.67,13.1,279.8096,-47.9098,5.84,.23,109.4,279.8965,-43.1859,5.42,1.65,196.1,279.9701,52.1961,6,-.07,165.6,280.0016,-7.7908,5.82,1.54,178.6,280.5684,-9.0525,4.7,.36,62.1,280.6581,55.5395,5.03,-.07,104.4,280.7589,-71.4281,4.01,1.13,67,280.8802,-8.2752,4.88,1.11,165,280.9056,-64.5514,5.76,.97,108.9,280.9456,-38.3234,5.11,.07,62.9,280.965,31.9266,5.68,.36,50.3,281.0807,-35.642,4.86,-.17,143.1,281.0848,39.6701,4.67,.17,49.8,281.0949,39.6127,4.59,.18,47.7,281.1932,37.6051,4.34,.19,47.9,281.2008,37.5946,5.73,.28,47.7,281.2067,-25.0109,5.82,.03,177.3,281.2081,2.06,5.02,-.06,142.7,281.2382,-39.6862,5.4,.85,400,281.3621,-64.8713,4.78,.2,28.5,281.3682,5.5001,5.82,.04,188.7,281.4141,-26.9908,3.17,-.11,73.4,281.4155,20.5463,4.19,.48,19.2,281.4449,74.0856,5.25,.95,96.8,281.5187,26.6621,4.83,1.2,78.1,281.5859,-22.3922,5.37,1.59,209.6,281.5926,75.434,5.37,.05,85.8,281.6191,-.9617,5.89,.13,111.9,281.6795,52.988,5.91,-.1,396.8,281.6805,-10.125,5.69,.58,0,281.7553,18.1815,4.34,.15,28.9,281.7936,-4.7479,4.22,1.09,280.9,281.8706,-5.7051,5.38,1.28,0,281.9359,-40.4062,5.2,.78,121.4,282.1579,-65.0777,5.71,.27,67.7,282.2104,-43.68,5.46,.13,103.1,282.2224,19.3287,5.89,.02,87.6,282.3639,-45.8101,5.8,.89,109.9,282.3958,-43.4341,5.6,-.08,147.7,282.4171,-20.3247,5.22,1.4,286.5,282.4206,-5.9129,5.99,1.57,534.8,282.4413,32.8128,5.93,-.15,401.6,282.4705,32.5511,5.22,.1,71,282.52,33.3627,3.52,0,295,282.7438,-9.7741,5.82,.59,854.7,282.8004,59.3884,4.63,1.19,104.8,282.8956,52.9751,5.51,.84,25.7,283.0543,-62.1876,4.22,-.15,438.6,283.0685,21.4251,5.43,-.07,124.4,283.1135,-46.5951,5.51,1.64,317.5,283.1652,-52.1074,5.18,.96,83.3,283.3064,50.7082,4.92,.9,139.9,283.4315,36.9717,5.58,-.14,304,283.5004,-21.3598,5.68,1.21,502.5,283.5424,-22.7448,4.86,1.41,344.8,283.5552,27.9095,5.64,1.36,111.4,283.5994,71.2972,4.82,1.15,105.5,283.6262,36.8986,4.22,1.57,225.7,283.6796,-15.603,5.08,.14,429.2,283.687,22.6451,4.57,.78,144.7,283.6964,48.8594,5.84,.45,55.3,283.6964,-87.6058,5.29,1.3,78.7,283.7174,41.6027,5.46,1.03,82,283.7188,33.9686,5.99,.92,358.4,283.7798,-22.6713,5,1.35,84,283.8164,-26.2967,2.05,-.13,69.8,283.8338,43.9461,4.08,1.4,91.4,283.8644,6.6153,5.58,1.04,88.3,283.8792,-16.3766,5.56,.45,31.7,284.0028,-23.1738,5.91,-.02,194.9,284.0255,18.1054,5.69,1.09,92.3,284.0549,4.2036,4.62,.16,47.4,284.061,4.2021,4.98,.2,51.9,284.0706,-42.7107,5.35,1,90.6,284.1072,65.2581,5.62,.94,96.2,284.1687,-37.3432,5.36,-.15,131.9,284.1877,57.8149,5.67,1.16,84.7,284.2376,-67.2335,4.4,.53,153.4,284.2567,32.9013,5.2,.59,14.9,284.2653,-5.8463,4.83,1.06,62,284.3191,2.5353,5.56,0,348.4,284.3353,-20.6563,5.02,.14,632.9,284.4325,-21.1067,3.52,1.15,112,284.5079,38.2662,5.89,-.09,177.3,284.5614,17.3609,5.33,.73,473.9,284.6157,-52.9386,4.85,-.05,187.6,284.6519,-60.2005,5.14,1.35,172.7,284.6807,-37.1074,4.83,.4,30.2,284.6955,13.9066,5.91,.25,78.4,284.7359,32.6896,3.25,-.05,190.1,284.7739,13.6222,5.27,.57,48.4,284.8492,-12.8405,5.51,-.04,146.2,284.9057,15.0683,4.02,1.08,47.5,284.9395,26.2304,5.26,1.23,99.2,285.0034,32.1455,4.94,1.47,339,285.0149,-66.6536,5.98,.98,136.1,285.057,50.5335,5.39,-.18,205.8,285.1811,55.6583,5.51,.86,150.8,285.3223,26.2914,5.69,-.09,199.2,285.3599,46.9348,5,.19,37.4,285.4201,-5.7391,4.02,1.08,44.1,285.6153,-24.8468,5.63,1.23,79,285.653,-29.8801,2.6,.06,27,285.7271,-3.699,5.4,-.01,153.1,285.7659,-19.2457,5.96,1.16,606.1,285.7787,-42.0951,4.74,-.03,59.2,285.8237,-38.2531,5.73,.33,68.5,285.8735,-68.7555,5.89,.55,56.3,285.8844,1.8188,5.82,.18,54.9,285.9898,-51.0186,5.93,1.24,99.8,286.1044,-31.0471,5.49,.03,147.1,286.1708,-21.7415,3.76,1.01,43.6,286.2299,53.3967,5.4,-.01,111.1,286.2403,-4.0314,5.4,1.12,88.7,286.2411,31.7441,5.63,1.55,189.8,286.3525,13.8635,2.99,.01,25.5,286.4216,-15.6604,5.93,-.01,219.3,286.5622,-4.8826,3.43,-.1,37.9,286.5831,-52.3409,5.17,.53,56.7,286.6046,-37.0634,4.23,.52,17.3,286.6572,28.6286,5.53,.3,40,286.66,24.2508,5.78,.1,107.2,286.7172,-16.2293,6,-.03,259.1,286.7317,-48.2991,5.95,-.02,117.9,286.735,-27.6704,3.32,1.17,37.3,286.7442,11.0712,5.07,-.06,214.1,286.8255,36.1002,5.25,-.11,274.7,286.8566,32.5017,5.2,.37,41.6,287.0696,-19.2903,5.56,-.09,396.8,287.0874,-40.4967,4.57,1.07,54.7,287.1075,52.4257,5.88,1.09,71,287.2496,6.0732,5.23,.35,45.8,287.2912,76.5605,5.11,.31,27.3,287.3681,-37.9045,4.11,.04,38.4,287.441,-21.0236,2.88,.38,156.3,287.4703,-68.4244,5.31,.9,37.4,287.4902,-41.8923,5.86,-.08,444.4,287.5073,-39.3408,4.1,1.16,145.3,287.9191,56.8592,5.13,1.01,105.5,287.9417,31.2835,5.93,-.06,273.2,288.021,49.8558,5.85,.67,24.4,288.1388,67.6615,3.07,.99,29.9,288.1696,-7.9395,5.35,.09,300.3,288.307,-25.9068,5.79,1.39,520.8,288.3147,-12.2826,5.51,1.44,166.1,288.4279,2.2937,5.14,-.07,217.9,288.4395,39.146,4.43,-.15,425.5,288.4798,57.7051,5,1.16,50.7,288.6648,-45.1935,5.91,.9,91.3,288.8223,21.2321,5.65,.12,91.8,288.8337,15.0837,5.58,1.07,212.3,288.8536,30.5264,5.88,1.67,389.1,288.8851,-25.2567,4.86,.57,91.5,288.8877,73.3555,4.45,1.26,44.9,289.0543,21.3904,4.76,-.06,248.8,289.0906,-45.466,5.38,1.35,167.2,289.0921,38.1337,4.35,1.26,255.1,289.1116,14.5446,5.65,-.02,125.6,289.1293,4.8348,5.59,.1,164.5,289.2757,53.3685,3.8,.95,38.1,289.301,-66.661,5.52,.17,91.6,289.4087,-18.9529,4.88,1.01,147.7,289.4318,23.0255,5.46,.02,373.1,289.4542,11.5954,5.28,.2,127.2,289.6354,1.0851,5.1,1.14,113.8,289.914,12.3747,5.53,.27,103.4,289.9166,-35.4215,5.59,-.12,276.2,290.0668,57.6451,5.91,1.63,242.1,290.1371,-5.4158,4.98,.94,47.3,290.1487,-.8922,5.46,-.04,134.2,290.159,-22.4025,5.59,.28,55.4,290.167,65.7145,4.6,.03,70.2,290.4182,-17.8472,3.92,.23,38.9,290.4318,-15.955,4.52,.08,546.4,290.4621,-18.3084,5.84,1.06,101.8,290.5898,-.2523,5.81,1.09,103.7,290.6596,-44.459,3.96,-.09,96.2,290.712,26.2624,5.22,-.12,120.5,290.7134,-54.4239,5.03,.02,48.2,290.8047,-44.7998,4.27,.35,41.1,290.9716,-40.6159,3.96,-.1,55.7,290.9854,43.3882,5.85,.92,135.1,291.0316,29.6213,4.99,-.12,258.4,291.2425,11.9444,5.17,.76,15.2,291.2668,-29.3094,5.91,1.28,91.3,291.3187,-24.5086,5.02,.23,77.2,291.34,-13.8971,5.72,1.37,154.8,291.3692,19.7984,5.14,1,83.3,291.3746,3.1148,3.36,.32,15.5,291.3736,-23.9625,5.45,1.44,153.1,291.538,36.3179,5.17,-.12,216.9,291.546,-15.0533,5.71,.01,214.1,291.5552,20.0977,5.6,-.01,72.9,291.5798,-21.7767,5.57,1.23,132.3,291.6006,13.0238,5.76,.46,56,291.6195,19.8915,5.84,1.56,188,291.6295,.3386,4.64,.58,869.6,291.7353,-29.7432,5.66,-.01,69.9,291.8582,52.3204,5.73,0,107.5,291.9505,-54.3253,5.7,1.41,164.7,292.0867,2.93,5.84,0,295,292.1764,24.6649,4.44,1.5,91.2,292.2378,24.7687,5.82,1.02,157.7,292.2541,1.9504,5.79,.09,61.2,292.3423,14.596,5.57,1.05,91.7,292.3494,-43.4452,5.7,.21,62.4,292.4265,51.7298,3.76,.15,37.2,292.4674,-26.9856,5.46,1.12,71.7,292.666,-2.7889,5.03,1.77,162.1,292.6803,27.9597,3.05,1.09,133.2,292.6891,27.9653,5.12,-.1,122.5,292.7957,-68.4339,5.98,1.64,387.6,292.8305,50.3067,5.55,1.27,141.6,292.8401,26.6172,5.89,.92,60.5,292.943,34.453,4.74,-.15,263.9,293.09,69.6612,4.67,.79,5.8,293.2243,-53.1856,5.76,.3,115.7,293.3401,-45.2717,5.59,-.02,121.7,293.4234,49.2623,6,1.54,406.5,293.5223,7.3789,4.45,1.18,33,293.5354,-40.0346,5.89,.1,129.7,293.5825,51.2366,5.71,.47,25.1,293.6454,19.7734,5,-.09,169.5,293.6719,42.4125,5.34,.06,176.7,293.7122,29.463,5.39,.58,171.2,293.7802,-10.5604,5.12,1.12,140.3,293.8041,-48.0992,4.88,1.1,113.6,294.0069,-24.7191,5.64,.18,90.3,294.1106,50.2211,4.49,.4,18.3,294.1582,44.6949,5.17,.93,40.8,294.1768,-24.8836,4.59,-.07,58.1,294.1803,-1.2866,4.36,-.08,119.9,294.2186,11.2732,5.98,.88,371.7,294.2227,-7.0275,4.93,-.05,515.5,294.2639,-18.2311,5.66,1.24,121.8,294.3225,16.4628,5.67,1.01,147.3,294.3934,-14.3018,5.46,.5,30.6,294.4472,-4.6476,5.45,.43,32.2,294.6716,54.9738,5.89,.48,40.9,294.7985,5.3978,5.18,0,239.2,294.8442,30.1533,4.68,.97,81.6,294.8604,42.8183,5.41,-.06,200,295.0241,18.0139,4.39,.78,130.4,295.0299,-23.4291,5.97,1.04,109.9,295.1805,-.6212,5.64,.12,108,295.1808,-16.2933,5.3,1.11,73.7,295.2091,45.5249,5.06,.43,49.6,295.2622,17.476,4.39,1.04,134.8,295.273,13.8157,5.98,-.08,0,295.454,50.5251,5.99,.64,21.1,295.6297,-16.124,5.06,.32,54.3,295.6417,11.8266,5.28,.57,261.8,295.6859,32.4267,5.93,.12,602.4,295.8897,-15.4701,5.49,.46,48.9,295.9289,25.7719,5.5,.94,101.7,295.9379,41.7731,5.86,1.6,174.8,296.0692,37.3544,4.89,.95,88.7,296.0767,69.3371,5.9,.07,132.1,296.2437,45.1308,2.86,0,50.6,296.4164,7.6132,5.89,.18,53.6,296.5051,-31.9086,5.51,.02,217.9,296.5649,10.6133,2.72,1.51,121.1,296.5906,-19.7611,4.87,1.06,63.7,296.6067,33.7276,5,.48,21.2,296.8469,18.5343,3.68,1.31,182.1,296.8657,38.4076,5.83,-.09,144.9,296.9523,25.3841,6,.99,126.9,297.005,-56.3626,5.33,.2,49.6,297.0431,70.2679,3.84,.89,45.4,297.1752,11.8159,5.75,.55,157.7,297.2444,19.142,5.01,.1,78.2,297.2592,-10.8708,6,1.23,96.4,297.3554,-72.5034,5.39,.23,43.6,297.5586,-47.5574,5.91,1.68,408.2,297.6416,38.7224,5.18,1.67,212.3,297.6555,40.5998,5.68,-.06,649.4,297.6572,52.988,5.03,1.29,62.1,297.6867,-59.1937,5.41,.08,85,297.6958,8.8683,.76,.22,5.1,297.6949,-10.7635,5.38,.4,27.9,297.7568,10.4157,5.12,.56,19.2,297.7671,22.61,4.9,-.15,193.1,297.9609,-39.8744,5.32,-.04,92.4,297.9961,47.0273,5.6,-.08,0,298.0066,24.9922,5.54,.68,518.1,298.0299,47.9318,5.91,-.17,510.2,298.05,-19.045,5.88,.98,115.9,298.1182,1.0057,3.87,.63,423.7,298.1572,-54.971,5.76,.92,172.4,298.3224,57.5235,5.14,-.13,194.2,298.3281,-3.1145,5.63,.23,80.1,298.3654,24.0796,4.57,-.05,102.6,298.5345,-8.5742,5.76,1.66,193.8,298.562,8.4615,4.71,1.02,56.3,298.6295,24.3194,5.56,-.02,144.3,298.6569,-8.2273,5.7,-.08,147.9,298.6867,.2736,5.6,.1,113.9,298.701,36.9957,5.79,.77,369,298.8154,-41.8683,4.12,1.06,55.7,298.8283,6.4068,3.71,.85,13.7,298.9074,52.4389,4.91,.12,86.3,298.9598,-26.2995,4.7,.75,26,298.9657,38.4867,4.95,-.09,442.5,298.9807,58.846,4.98,1.58,280.9,299.0053,16.6348,5.71,.9,0,299.0594,11.4237,5.28,.01,67.3,299.0765,35.0834,3.89,1.02,41.4,299.2368,-27.1699,4.54,1.46,255.1,299.2763,-58.9014,5.24,.01,85.4,299.3078,40.3678,5.46,-.09,340.1,299.4394,16.7892,5.54,-.05,139.7,299.4876,-15.4915,5.01,.06,81.4,299.6583,30.9837,5.51,-.06,142.7,299.672,-69.164,5.74,.22,70.1,299.6893,19.4921,3.51,1.57,79.2,299.7383,-26.1958,4.84,.88,96.1,299.7939,23.1013,5.68,.34,49.1,299.8351,45.7725,5.92,.18,138.9,299.9341,-35.2763,4.37,-.15,159,299.9473,-9.9582,5.87,.6,22.2,299.964,-34.6978,5.3,.17,48.5,299.98,37.0429,5.15,-.13,404.9,300.0138,17.5165,5.33,1.58,312.5,300.0664,-37.7017,5.95,.99,107.8,300.0844,-33.7035,5.65,.5,21.2,300.0963,-66.9494,5.75,1.03,73.3,300.1481,-72.9105,3.97,-.03,32.2,300.2014,-45.1129,5.8,.29,81.4,300.2457,8.5577,5.9,1.53,212.3,300.2752,27.7536,4.66,.18,72.5,300.3398,50.1047,5.06,1.12,133.2,300.3689,64.821,5.22,1.6,180.2,300.4364,-59.3759,4.95,1.36,145.8,300.4363,24.8004,5.88,-.13,331.1,300.4686,-66.944,5.32,1.22,72.5,300.4942,-13.6372,5.69,.08,91,300.506,24.938,5.23,.37,68,300.6645,-27.7098,4.43,1.64,137.6,300.7045,67.8736,4.51,1.31,131.4,300.8183,18.501,5.99,1.42,248.1,300.8751,16.0313,5.73,-.1,195.7,300.8894,-37.9407,4.77,1.42,112.4,300.9059,29.8968,5.73,.75,15.9,301.0259,17.0702,5.8,.6,17.8,301.0346,7.278,5.51,1.06,141.6,301.0816,-32.0563,4.99,1.21,89.1,301.0965,-.7093,5.67,1.3,127.9,301.1507,32.2186,5.62,.76,0,301.2896,19.9911,5.09,1.06,49.2,301.387,61.9954,5.4,1.19,52.7,301.5577,53.1657,5.81,.45,36.6,301.5907,35.9725,5.38,.85,23.9,301.7225,23.6144,5.08,-.16,154.6,301.8465,-52.8808,4.93,1.59,331.1,302.0076,-.6782,5.97,1.02,46.9,302.1817,-66.1821,3.55,.75,6.1,302.2223,77.7114,4.38,-.05,96.5,302.3567,36.8396,4.93,-.14,317.5,302.6397,26.9042,5.51,.09,129.9,302.7997,-36.1012,5.32,.87,6,302.8262,-.8215,3.24,-.07,87.8,302.8955,62.0785,5.7,.53,48.4,302.9499,26.809,5.51,1.4,432.9,303.0029,26.4788,5.91,-.11,246.9,303.1078,-12.6175,5.84,.48,27.7,303.3078,-1.0093,5.44,1.43,216.9,303.3252,46.8157,4.8,.1,187.3,303.3494,56.5677,4.28,.11,48.8,303.3651,60.6406,5.81,1.48,177.9,303.4079,46.7413,3.8,1.27,271,303.5605,28.6948,5.19,.19,91.2,303.5692,15.1976,4.94,.07,46,303.5793,-52.4458,5.65,1.5,210.1,303.6335,36.8063,4.93,.15,42.7,303.8162,25.592,4.79,-.18,304,303.8225,-27.033,5.73,.88,8.9,303.849,33.7291,5.7,.93,97.5,303.868,47.7142,3.96,1.45,324.7,303.876,23.5089,5.18,1.02,588.2,303.9422,27.8142,4.5,1.26,103.8,304.0026,45.5795,5.87,.45,34.3,304.1962,24.6711,5.3,.95,134.2,304.2304,40.3651,5.27,1.65,483.1,304.3805,66.8537,5.91,.6,17.6,304.412,-12.5082,4.3,.93,174.5,304.4467,38.0329,4.77,.38,0,304.5058,-21.81,5.86,1,97,304.5136,-12.5449,3.58,.88,32.4,304.5291,40.7321,5.83,.07,595.2,304.6031,55.3971,5.76,.12,90.5,304.6194,36.9998,5.58,.06,62.5,304.6628,34.9828,5.14,.66,970.9,304.8484,-19.1185,5.28,1.39,343.6,304.903,62.2575,5.71,-.04,115.9,305.0008,13.5481,5.96,.3,80.3,305.0251,68.8803,5.59,1.47,205.3,305.0892,17.7929,5.82,1.5,167.2,305.1659,-12.7591,4.77,-.05,77.6,305.2528,-14.7814,3.05,.79,100.2,305.298,63.9801,5.69,1.56,215.1,305.5143,24.4461,5.5,-.09,305.8,305.5224,45.795,5.58,1.08,124.2,305.5571,40.2567,2.23,.67,561.8,305.6146,-42.0495,5.6,0,66.1,305.6887,41.026,5.95,1.63,259.1,305.7946,5.343,5.3,.98,75.6,305.9349,37.4764,5.87,-.17,414.9,305.9651,32.1902,4.43,1.33,76.6,305.9716,-42.4229,5.64,.2,95.5,306.3618,-28.6633,5.86,1.1,153.8,306.4119,-56.7351,1.94,-.12,54.8,306.4189,21.4096,5.68,.92,145.8,306.7594,49.3834,5.73,.34,37.6,306.83,-18.2117,5.08,-.05,167.2,306.8927,38.4403,5.63,.07,81.4,307.0608,81.4227,5.38,1.01,139.7,307.2151,-17.8137,4.77,.39,30.3,307.335,36.4547,5.9,.41,793.7,307.3489,30.3686,4.01,.4,235.8,307.3649,81.0913,5.96,.94,63.7,307.363,56.0682,5.89,-.05,266,307.3954,62.9941,4.21,.2,41.8,307.4125,-2.8855,4.91,1.16,61.3,307.4746,-18.5832,5.94,.06,66.4,307.5148,48.9516,4.94,-.09,278.6,307.8284,49.2203,5.44,1.57,122.4,307.8767,74.9546,5.18,.1,121.4,308.0987,-9.8534,5.66,.69,24.4,308.3032,11.3033,4.03,-.12,101.3,308.3235,-80.9649,5.76,1.12,160,308.4758,35.2509,4.61,1.59,847.5,308.4785,46.6939,5.78,-.14,132.3,308.4795,-44.516,5.12,1,71.7,308.4877,13.0273,5.39,.09,72.4,308.8272,14.6742,4.64,.12,67.5,308.8952,-60.5817,4.75,.29,27.8,309.1818,-2.55,4.91,1.61,398.4,309.2695,26.4619,5.59,-.05,97.4,309.3873,14.5951,3.64,.42,30.9,309.3918,-47.2915,3.11,1,30.1,309.3971,-61.5299,4.86,.45,58.1,309.4547,11.3777,5.42,.05,57.9,309.5775,-81.2891,5.89,1.69,195.7,309.5845,-1.1051,4.31,.95,103.4,309.6306,21.2012,4.81,-.03,71.4,309.633,24.116,5.06,-.13,160.3,309.6458,23.6805,5.91,.95,625,309.6833,13.3151,5.69,1.51,617.3,309.748,30.3343,5.68,1.09,108.6,309.7707,15.8382,5.99,-.14,413.2,309.7824,10.0862,5.07,.7,30.1,309.818,-14.9548,5.24,-.13,348.4,309.8537,.4864,5.15,1.06,71.5,309.9095,15.9121,3.77,-.06,77.8,310.011,-60.5489,5.11,.54,24.7,310.0123,-18.1387,5.15,1.65,177.9,310.0132,43.4589,5.97,1.19,137.6,310.0826,-33.4318,5.47,1.12,72.6,310.1355,-16.1242,5.79,1,100.4,310.2606,32.3073,5.53,.87,244.5,310.3486,-31.5983,5.75,1.55,138.9,310.358,45.2803,1.25,.09,432.9,310.4854,41.7169,5.68,-.11,335.6,310.4878,-66.7607,5.14,-.06,241,310.5124,-76.1806,5.99,.45,101.1,310.5526,50.34,5.41,-.11,390.6,310.6468,82.5312,5.75,0,108.1,310.7959,66.6574,5.59,.22,42.8,310.8647,15.0746,4.43,.3,68.4,311.0097,-51.921,4.51,.28,24.2,311.0919,56.4884,5.91,1.64,336.7,311.2188,25.2706,4.92,1.18,99.6,311.2396,-66.2032,3.42,.16,41.4,311.3224,61.8388,3.41,.91,14.3,311.338,57.5797,4.52,.54,27.3,311.4156,30.7197,4.22,1.05,61.7,311.5239,-25.2709,4.13,.43,14.7,311.5416,-21.514,5.91,.07,80.8,311.5528,33.9703,2.48,1.02,22.3,311.5836,-39.1993,5.48,-.08,99.5,311.6619,16.1241,5.15,.49,38,311.6646,16.1243,4.27,1.04,38.7,311.7948,34.3741,4.93,1.29,136.4,311.8522,36.4907,4.53,-.08,235.8,311.8894,80.5523,5.36,1.14,122.2,311.919,-9.4958,3.78,0,63.7,311.9343,-5.0277,4.43,1.64,179.5,311.9514,6.0082,5.57,-.01,131.4,311.9554,47.8319,5.6,1.47,179.9,312.1214,-43.9885,5.11,.36,35.4,312.2345,46.1141,4.81,.57,714.3,312.3234,-25.7812,5.86,-.07,295.9,312.3257,-68.7765,5.41,1.12,92.6,312.3707,-46.2268,4.9,1.49,126.6,312.492,-33.7797,4.89,1,116,312.5205,44.0593,5.06,.2,41,312.6741,-12.5449,5.87,1.07,81,312.7532,-37.9133,5.52,1.38,180.2,312.8573,-5.6266,5.99,.46,60.7,312.8677,28.2505,5.66,.62,369,312.8752,-51.6082,5.06,1.13,143.1,312.9104,-62.4293,5.67,.2,76.3,312.9554,-26.9191,4.12,1.63,258.4,313.032,27.097,4.56,.83,57.8,313.0362,-5.5071,5.55,-.08,199.2,313.1635,-8.9833,4.73,.33,48.2,313.3115,44.3873,4.8,-.13,161,313.3274,45.1817,5.48,1.09,308.6,313.4174,-39.8099,5.34,1.32,122.7,313.4746,33.4379,5.47,1.52,184.2,313.6402,28.0576,5.03,1.48,178.6,313.6848,75.9256,5.99,.95,124.4,313.6992,-17.9229,5.78,1.12,111.9,313.7025,-58.4542,3.67,1.25,187.6,313.9029,13.7215,5.19,1.12,147.1,313.9107,12.5686,5.54,.13,60.5,313.9575,47.4177,5.68,.41,0,314.1062,50.7286,5.83,.34,51.3,314.1079,49.1958,5.92,1.05,234.7,314.1449,44.9247,5.96,.02,0,314.1972,-26.2964,5.7,.51,22,314.2251,-9.6975,5.49,1.47,167.5,314.2934,41.1671,3.94,.03,114.8,314.4194,-16.0315,5.89,.18,54.9,314.5681,22.3259,5.3,1.42,138.7,314.5811,44.4717,5.55,.97,79.3,314.6081,10.8393,5.51,.93,75.3,314.6251,50.4618,5.59,-.14,331.1,314.6743,-14.4831,5.95,.24,87.2,314.7687,4.2935,5.3,.46,54.1,314.7713,4.2946,5.24,.46,56.6,314.8558,59.4386,5.54,1.41,188.7,314.9565,47.521,4.74,-.08,434.8,315.0166,7.5162,5.98,.28,75.8,315.0895,-51.2653,5.76,.48,28,315.1154,19.3296,5.69,1.59,160.5,315.2955,46.1558,5.38,-.21,467.3,315.3228,-32.2578,4.67,.89,70.2,315.5375,56.6696,5.83,-.06,282.5,315.6132,-38.531,5.93,1.11,67.3,315.7415,-38.6314,5.32,.42,35.4,315.9484,53.2859,5.93,1,114.3,316.0197,-5.8231,5.53,.68,153.8,316.1013,-19.855,4.82,.17,49.5,316.1444,5.5029,5.63,1.65,235.8,316.1794,-77.0238,5.13,.49,43.5,316.2328,43.9279,3.72,1.61,258.4,316.3094,-54.727,5.17,1.2,112.1,316.3613,5.9582,5.94,.54,48.9,316.3719,78.1264,5.91,-.07,123.5,316.4868,-17.2329,4.08,-.01,49.7,316.5048,-30.1251,5.69,1.05,92.4,316.5971,71.4318,5.88,.39,48.7,316.6028,-32.3416,5.2,1.1,100.6,316.6063,-41.386,5.55,1.35,218.3,316.626,31.1847,5.77,.55,518.1,316.6504,47.6484,4.56,1.57,316.5,316.7248,38.7494,5.2,1.07,3.5,316.7819,-25.0059,4.49,1.6,139.9,317.1362,-63.9283,5.75,1.18,157,317.1401,-21.1937,5.3,0,55.1,317.162,30.2056,5.6,-.05,115.7,317.1952,-88.9565,5.45,.28,86.1,317.3435,-73.173,5.67,.59,19.8,317.3985,-11.3717,4.5,.93,48.9,317.5649,53.5631,5.75,-.11,135.9,317.5854,10.1316,4.7,.26,36.3,317.951,59.9866,5.64,.11,0,318.0571,-40.2694,5.83,.45,31.7,318.2341,30.2269,3.21,.99,43.9,318.2628,-39.4249,5.25,.46,33,318.3222,-27.6193,5.41,1.43,112.5,318.329,-36.4235,5.97,.97,112.1,318.3355,-70.1263,5.06,1.58,274,318.6201,10.007,4.47,.53,18.5,318.6979,38.0453,3.74,.39,20.3,318.9079,-20.6517,5.17,1.16,197.2,318.9269,77.0123,5.92,1.53,291.5,318.9368,-15.1715,5.31,1.64,187.6,318.9411,-53.2631,5.73,.19,131.2,318.956,5.2478,3.92,.55,58.3,319.3094,55.798,6,1.45,369,319.354,39.3947,4.22,.1,885,319.4795,34.8969,4.41,-.1,196.9,319.4845,-32.1725,4.71,.07,55.9,319.4887,-17.9851,5.4,-.12,163.7,319.5461,-4.5195,5.83,-.13,311.5,319.6133,43.9459,5.04,-.06,0,319.6449,62.5856,2.45,.26,15,319.7168,11.2034,5.97,1.61,289,319.8154,58.6235,5.51,1.11,591.7,319.8426,64.8719,5.19,-.04,609.8,319.8424,38.2375,5.89,.51,662.3,319.8698,49.5103,5.75,-.12,167.2,319.9666,-53.4494,4.39,.19,30.3,320.1902,-40.8095,4.8,.03,60.5,320.2683,23.856,5.58,1.06,82.9,320.268,-4.5601,5.87,.91,90.9,320.2701,7.3545,5.81,1.66,200.8,320.5017,49.3888,5.68,1.1,100.9,320.5217,19.8045,4.08,1.11,47.8,320.5617,-16.8345,4.28,.89,60.3,320.7234,6.8111,5.16,.06,101.4,320.7344,-9.3193,5.99,1.52,224.2,320.7521,-22.669,5.63,1.64,237.5,320.9951,24.2741,5.7,.31,51.8,321.04,-20.8519,5.38,1.18,73.4,321.0479,-12.8781,5.48,.3,47.1,321.1034,-41.0067,5.76,-.04,119.8,321.1417,26.1746,5.67,.32,68.6,321.2065,80.5248,5.97,.95,111.1,321.3043,-9.7486,5.71,.21,91.8,321.3207,-3.5567,5.48,1.45,119,321.3315,46.7143,5.59,.34,33.5,321.4459,36.6674,5.93,.03,0,321.5953,-37.8294,5.64,1.19,80.8,321.6109,-65.3662,4.21,.49,9.3,321.6668,-22.4113,3.77,1,118.2,321.7151,48.8352,5.29,.11,126.1,321.7568,-42.5479,5.5,.39,56.4,321.8117,-21.1962,5.78,1.44,171.8,321.839,37.1168,5.3,-.14,400,321.9169,27.6086,5.39,.05,58.3,321.9423,66.8091,5.42,-.1,246.9,322.0344,32.2253,5.75,.33,44.7,322.165,70.5607,3.23,-.2,210.1,322.1808,-21.8072,4.5,.89,52.5,322.1872,-69.5054,5.47,1.55,126.3,322.2491,22.1794,5.84,1.37,204.1,322.3623,46.5406,5.22,.96,66.4,322.4871,23.6388,4.52,1.62,120.8,322.747,60.4594,5.53,.1,463,322.8897,-5.5712,2.9,.83,164.7,323.0245,-41.1793,5.29,1.11,142.9,323.0607,-33.9446,5.97,.05,154.3,323.2358,49.9776,5.77,-.04,151.1,323.348,-44.8487,5.57,1.04,200.4,323.4952,45.5918,3.98,.89,37.9,323.694,38.5341,4.87,1.08,71,323.7127,-20.0843,5.7,.42,27.1,323.8234,-3.9833,5.79,1.11,128.2,324.0104,45.3746,5.96,1.34,174.8,324.0457,-26.1715,5.73,.23,58.4,324.2374,40.4135,5.04,.2,65.8,324.2701,-19.466,4.51,-.18,323.6,324.438,-7.8542,4.68,.17,54.8,324.4393,19.3186,5.46,.32,98.4,324.4801,62.0819,4.76,.25,0,324.6331,5.7717,5.66,.27,54.7,324.7401,57.489,5.74,.2,606.1,324.755,20.2655,5.77,.31,39.7,324.8886,2.2436,5.1,1.03,69.4,325.0227,-16.6623,3.69,.32,48.1,325.0463,43.2738,5.09,1.6,123.8,325.3694,-77.39,3.73,1.01,21.2,325.3869,-14.0476,5.16,.67,33.2,325.4804,71.3114,4.55,1.11,55.9,325.5029,-23.2629,5.24,.99,70.7,325.5045,35.5102,5.98,2.5,625,325.5236,51.1896,4.69,-.12,529.1,325.5421,1.2853,5.66,1.45,342.5,325.5644,5.6801,5.3,1.65,223.7,325.5957,41.077,5.73,.06,126.4,325.6646,-18.8663,4.72,.87,90.2,325.7668,72.3201,5.18,1.06,75,325.7683,-14.3997,5.88,.26,133.5,325.777,41.155,5.51,1.61,196.9,325.8569,38.2836,5.69,-.01,84.2,325.8769,58.78,4.23,2.24,0,326.004,-14.7494,5.96,.22,53,326.0357,28.7426,4.49,.51,22.2,326.0465,9.875,2.38,1.52,211.4,326.1279,17.35,4.34,1.16,284.1,326.1305,14.7719,5.96,.59,17.9,326.1614,25.645,4.14,.42,34.2,326.222,62.4606,5.94,.31,917.4,326.2367,-33.0258,4.35,-.05,62.6,326.2511,-9.0824,5.1,1.11,242.7,326.3622,61.1208,4.25,.47,0,326.5182,22.9489,5.29,1.38,427.4,326.5678,-9.2759,6,1.63,363.6,326.6337,-11.366,5.57,0,86.4,326.6984,49.3096,4.23,-.12,339,326.7602,-16.1273,2.85,.18,11.9,326.8082,2.6861,5.63,.01,174.5,326.8554,60.6927,5.53,1.57,140.4,326.934,-30.8983,5.02,.04,98.4,327.0656,-47.3036,5.57,.6,16,327.4612,30.1742,5.07,.01,84.2,327.5005,-64.7125,5.62,1.02,103.6,327.5362,17.2859,5.34,.39,33.4,327.6966,-69.6294,5.52,1.38,166.7,327.7273,-82.7189,5.27,.76,125.5,327.8927,19.8267,5.78,-.1,161.6,328.0043,55.7967,5.7,-.08,460.8,328.1247,28.7935,5.52,.43,27.4,328.2657,25.9251,5.09,-.15,193.8,328.324,-13.5518,5.08,.38,26.6,328.4058,19.6684,5.69,.01,72.3,328.4822,-37.3649,3,-.08,64.7,328.5432,-4.2762,5.71,1.19,89.7,328.7215,56.6112,5.74,.66,0,328.7975,-61.8866,5.92,.39,46.5,328.8792,65.3208,5.84,-.04,314.5,329.0949,-37.2537,5.45,.08,103,329.1631,63.6256,5.11,1.55,751.9,329.2349,12.0765,5.54,.05,122.9,329.4795,-54.9926,4.4,.3,57.7,329.723,62.698,5.96,1.64,284.1,329.8124,73.1799,5.04,.44,36.7,329.8246,-38.3951,5.5,1,132.6,330.033,6.7174,6,-.11,328.9,330.2093,-28.4537,5.43,-.1,250.6,330.2709,.6047,5.6,1.28,219.3,330.2723,13.1198,5.61,.34,77.2,330.2885,8.2572,5.65,1.44,165.8,330.4608,52.8823,5.79,-.11,306.7,330.5191,58.0004,5.55,.02,934.6,330.7361,44.6499,5.57,-.03,151.1,330.7659,-76.1184,5.94,.4,62.6,330.8186,-6.5224,5.55,.96,93.1,330.8402,-56.786,4.69,1.06,3.6,330.8285,-2.1554,4.74,-.1,133.5,330.8293,11.3866,5.83,-.05,193.1,330.9477,64.628,4.26,.38,29.6,330.9707,63.1199,5.26,1.56,130,331.1532,-26.8224,5.97,-.17,377.4,331.1976,-.9063,5.29,.23,68.1,331.2521,62.7857,5.27,1.41,92.9,331.2866,62.2798,5.07,.24,632.9,331.2972,26.6737,5.75,1.25,119.3,331.3945,28.964,5.69,-.05,106.4,331.4198,5.0585,4.86,1.44,83.3,331.446,-.3199,2.95,.97,160.5,331.4626,-59.6361,5.62,1.47,150.6,331.5081,45.0143,5.09,1.57,186.6,331.5287,-39.5434,4.47,1.35,74.2,331.6093,-13.8697,4.29,-.07,53.7,331.7528,25.3451,3.77,.43,11.7,331.8691,19.4755,5.74,.33,62,331.9596,21.7029,5.79,-.08,186.6,332.0583,-46.961,1.73,-.07,31,332.0959,-32.9885,4.5,.05,41.6,332.1081,-34.0438,4.99,1.5,130,332.2458,-18.5196,5.8,-.15,714.3,332.3068,33.1723,5.58,.98,88.5,332.4518,72.3412,4.79,.92,120.9,332.4821,-34.015,5.37,.24,63.4,332.4969,33.1782,4.28,.47,80.6,332.5366,-32.5484,4.94,.49,18.3,332.5499,6.1979,3.52,.09,28.3,332.6406,-4.2669,5.98,.98,101.9,332.656,11.6245,5.78,1.62,208.8,332.6562,-11.5649,5.43,-.12,137.9,332.6616,70.1326,5.52,.39,33.6,332.7137,58.2013,3.39,1.56,256.4,332.7912,50.8234,5.38,.15,56.1,332.8774,59.4145,5.05,.19,606.1,332.9532,56.8394,5.24,.53,37.4,332.9639,16.0406,5.93,.95,54.9,333.0084,60.7591,5.37,1.18,112.1,333.0337,24.9506,5.97,1.5,0,333.0935,63.291,5.76,1.65,290.7,333.1993,34.6046,5.34,1.13,79.1,333.2942,86.108,5.27,-.03,78.7,333.4112,28.608,5.87,1.17,74.9,333.4351,-25.1809,5.58,.5,77.4,333.4552,45.4406,5.53,.02,77.2,333.4697,39.7149,4.5,1.39,147.9,333.5751,-21.0746,5.33,.81,71.6,333.5781,-27.7669,5.45,-.12,153.6,333.6849,42.9539,5.72,.01,82.4,333.7591,57.0436,4.18,.28,26.2,333.9038,-41.3467,4.79,.79,84.2,333.9924,37.7487,4.14,1.45,190.5,334.1107,57.2202,5.88,.95,189,334.1107,-41.6272,5.11,.93,81.4,334.2002,-12.8314,5.34,1.13,179.9,334.2085,-7.7833,4.17,.98,57.5,334.219,-9.0401,5.8,1.16,113.3,334.2771,-5.3872,5.75,.88,94.8,334.4608,-77.5116,5.49,.31,38.5,334.5527,62.8044,5.75,1.26,282.5,334.5651,-53.6271,5.36,.61,13.8,334.6254,-60.2596,2.87,1.39,61.2,334.7531,-13.305,5.96,1.07,113.4,335.007,-80.4397,5.09,1.28,89.1,335.0497,-7.8211,5.35,-.05,270.3,335.1149,5.7895,5.37,-.04,390.6,335.2564,46.5366,4.55,-.1,170.1,335.3306,28.3305,4.78,-.01,213.2,335.3795,12.2052,4.82,-.13,497.5,335.3982,-21.5982,5.12,1.06,52.4,335.4141,-1.3873,3.86,-.06,50.2,335.7833,-45.9285,5.62,.37,40,335.8785,-24.7627,5.53,.98,80.3,335.884,-7.1944,5.92,1,143.1,335.8901,52.229,4.42,1.01,52.1,336.0287,-4.837,5.79,-.03,124.4,336.1128,-13.5294,5.76,.97,140.4,336.1291,49.4764,4.55,.09,689.7,336.1537,-72.2554,5.28,.66,28.7,336.235,-57.7974,5.31,.67,20.6,336.2942,-70.4316,5.78,.4,49.5,336.3193,1.3774,4.8,-.17,239.8,336.5034,70.7709,5.47,1.22,153.6,336.6428,-16.7421,5.55,.62,20.2,336.6558,4.3938,5.76,.52,38.2,336.6767,78.7859,5.83,.17,63.2,336.7721,65.1323,5.52,.3,0,336.8332,-64.9664,4.51,-.03,76.9,336.9427,31.84,6,1.44,266,336.9647,4.6957,4.78,1.04,45.5,337.157,-67.4891,5.56,.21,43.1,337.1634,-39.1318,5.47,.96,87.4,337.208,-.02,3.65,.41,28.2,337.2833,9.129,5.6,1.58,182.8,337.2928,58.4152,4.07,.78,265.3,337.2926,26.7632,5.79,1.25,384.6,337.3174,-43.4956,3.97,1.02,94.9,337.3826,47.7069,4.34,1.68,505.1,337.4393,-43.7492,4.12,1.57,101.2,337.4417,-27.1073,5.95,.36,39.9,337.4707,78.8243,5.45,.09,75.1,337.4914,4.4317,5.51,.39,51.9,337.5076,32.5726,5.64,-.03,110.5,337.6219,43.1234,4.52,-.09,526.3,337.6617,-10.678,4.82,-.05,88.8,337.8229,50.2825,3.76,.03,31.5,337.8764,-32.3461,4.29,.01,43.8,337.9063,-85.9673,5.76,1.02,99.4,338.0676,76.2264,5.7,.02,241,338.1099,39.7797,5.88,.17,209.6,338.2503,-61.9821,4.91,1.61,89,338.4194,56.6247,5.72,.97,105.6,338.5121,-1.5743,5.88,.98,106.6,338.6735,-20.7082,5.21,.45,22.7,338.8391,-.1175,4.04,-.08,51.5,338.9016,-23.9911,5.97,.98,92.9,338.9422,73.6432,5.08,.4,54.9,338.9679,39.6343,5.73,-.16,662.3,339.1477,-31.6638,5.82,1.07,109.6,339.2452,-40.591,5.85,.06,65.8,339.304,75.3718,5.8,1.59,214.1,339.3434,51.5451,4.64,.25,52.6,339.4391,-4.2281,5.04,1.14,65.6,339.658,56.7956,5.11,1.54,138.3,339.6627,63.5845,5.19,.08,88,339.7144,-33.0813,5.66,.04,129.9,339.7191,19.5223,5.84,.92,114.4,339.8153,39.0503,4.89,-.21,529.1,340.0767,53.8459,5.94,.95,112.4,340.0929,-30.6589,5.88,1.3,212.8,340.1286,44.2763,4.5,1.32,102,340.1639,-27.0436,4.18,-.1,149.3,340.2038,-57.4223,5.98,1.45,261.1,340.2195,14.5492,5.72,.72,33.8,340.3655,10.8314,3.41,-.09,62.7,340.3694,40.2254,5.25,-.14,411.5,340.4002,41.5491,5.93,1,91.7,340.4392,29.3076,4.8,-.01,91.6,340.4894,14.5164,5.92,1.11,85,340.6537,-47.2108,5.99,.58,23.6,340.6669,-46.8846,2.07,1.61,54.3,340.7506,30.2212,2.93,.85,65.7,340.8749,-41.4143,4.84,1.03,70.6,340.8968,-18.8304,4.68,1.36,132.8,341.0217,39.4653,5.93,1.49,212.3,341.0228,41.8192,5.11,.96,78.7,341.4078,-53.5001,4.84,1.18,127.2,341.4199,-46.5473,5.52,1.3,241.5,341.5146,-81.3816,4.13,.21,45.8,341.5426,44.5461,5.84,.36,56.9,341.6328,23.5657,3.97,1.07,112,341.6733,12.1729,4.2,.5,16.3,341.8711,83.1538,4.77,1.26,96.1,341.888,-19.6134,5.24,.94,77.9,341.9282,-14.0564,5.68,-.02,97.4,342.046,37.4167,5.82,1.02,103.3,342.1387,-51.3169,3.49,.08,39.5,342.3979,-13.5926,4.05,1.57,97.4,342.4201,66.2004,3.5,1.05,35.3,342.443,55.9028,5.43,1.17,121.8,342.5008,24.6016,3.51,.93,32.5,342.5907,41.9534,5.91,.06,348.4,342.5951,-80.1238,5.32,-.13,151.1,342.759,-39.1568,5.43,1.44,237,342.7626,85.3737,5.89,1.34,133.3,342.8372,-29.5363,5.99,.91,98.9,342.8443,61.6967,5.61,.78,72.7,343.0085,43.3124,4.95,1.56,99.7,343.1003,9.8357,5.16,.49,27.3,343.1314,-32.8755,4.46,-.04,66.1,343.1536,-7.5796,3.73,1.63,118.1,343.2594,16.8412,5.86,1.13,89.5,343.3696,-11.6165,5.8,-.08,253.2,343.4173,44.7492,5.79,.28,56.9,343.5291,40.3769,5.82,1.14,93.2,343.604,84.3462,4.7,1.42,109.1,343.6626,-15.8208,3.27,.07,49.2,343.6895,-16.272,5.53,1.11,41.2,343.761,37.0768,5.91,.4,39,343.7957,-4.9879,5.72,.88,83.4,343.807,8.8162,4.91,0,95.7,343.9354,36.3514,5.73,-.05,191.2,343.9871,-32.5396,4.2,.95,47.3,344.0985,41.6039,5.6,-.15,390.6,344.1083,49.7335,4.99,1.78,490.2,344.1992,-47.9692,5.72,.23,74.6,344.2688,48.6841,5.34,-.1,251.9,344.3666,20.7688,5.45,.67,15.6,344.4127,-29.6222,1.17,.14,7.7,344.7992,11.7288,5.76,.29,94.3,344.8644,.9629,5.43,.98,91.7,344.899,-29.4623,5.51,.27,95.8,345.0213,56.9454,5.1,1.01,0,345.0241,-25.1642,5.66,1.25,210.5,345.1788,3.0118,5.85,1.34,136.6,345.22,-52.7541,4.11,.96,33.4,345.2816,-50.95,5.68,1.41,149.7,345.3308,-28.854,5.55,1.35,163.9,345.3821,-4.7115,5.94,.99,452.5,345.4803,42.326,3.62,-.1,210.5,345.6516,42.7578,5.09,.09,129.2,345.6844,-20.8707,5.97,.95,73.5,345.8742,-34.7494,5.12,.3,29.4,345.887,67.2092,5.25,1.25,126.7,345.9436,28.0828,2.44,1.66,60.1,345.9692,3.82,4.48,-.12,125.2,345.9985,-41.4789,5.79,1.07,95.3,346.0458,50.0521,4.64,1.06,54.2,346.1651,-53.9649,5.37,1.45,111.6,346.1902,15.2053,2.49,0,40.9,346.2176,-68.8202,5.53,.4,53.4,346.2908,-7.6938,5.44,.31,64.2,346.6534,59.4198,4.84,-.06,346,346.6702,-23.7431,4.48,.89,66.3,346.7197,-43.5204,4.28,.42,40.4,346.7234,-38.8923,5.62,.01,87.3,346.7511,9.4095,4.54,1.56,100.8,346.7781,25.4683,4.76,1.28,181.5,346.8116,-50.6867,5.81,.49,45.7,346.8696,21.1343,5.97,.26,39.4,346.9136,46.3872,5.3,1.41,107,346.9391,49.2958,5.68,.45,34.3,346.9744,75.3875,4.41,.8,75.6,347.0878,-28.8237,5.6,.88,82.4,347.1705,2.1279,5.42,.91,81.5,347.3617,-21.1724,3.68,1.2,83,347.3811,8.6772,5.05,1.48,239.8,347.4339,59.3327,5.68,.32,534.8,347.436,-28.0886,5.88,1.31,199.2,347.4787,-22.4576,4.71,.67,154.6,347.489,-42.8613,5.83,.47,33.4,347.5061,9.8221,5.39,-.07,248.1,347.5406,-40.5915,5.9,1.56,281.7,347.5897,-45.2467,3.88,1,56.2,347.6133,43.5442,5.91,.45,27.6,347.6777,17.5944,5.68,1.33,155.5,347.9341,8.7201,5.15,.14,74.3,348.1375,49.4062,4.53,.3,24.6,348.3207,57.1684,5.57,1,6.5,348.3604,11.065,5.85,1,105.9,348.5807,-6.049,4.22,1.54,62,348.6546,74.2313,5.89,-.01,138.9,348.7443,-41.1054,5.77,1.16,76.6,348.8927,-3.4964,5.56,.06,71.2,348.9072,70.8881,5.55,.26,116.3,348.9729,-9.0877,4.24,1.11,45.9,349.1658,-44.4892,5.92,1.05,89.2,349.1763,53.2135,5.58,.56,20.5,349.2122,-7.7265,4.93,1.61,188,349.2404,-62.0012,5.64,.52,20.5,349.2914,3.2823,3.7,.92,42.3,349.3574,-58.2357,3.99,.41,23.1,349.436,49.0153,4.82,1.67,172.7,349.4759,-9.1825,4.41,-.14,123.2,349.5412,-40.8244,5.54,.45,35.4,349.5972,41.7737,5.98,.21,129.5,349.6562,68.1114,4.75,.84,62.3,349.706,-32.532,4.41,1.11,55.9,349.7403,-9.6107,4.99,-.02,80.2,349.7765,-13.4547,5.19,.9,0,349.7778,-13.4586,5.2,.79,21.1,349.8499,-5.1244,5.56,.39,34.2,349.8504,-18.0754,5.96,1.53,427.4,349.8742,48.6253,5.44,1.01,87.7,349.9684,42.078,5.81,1.51,147.5,350.0858,5.3813,5.05,1.2,132.6,350.1593,23.7403,4.58,.18,49.6,350.2065,30.4149,5.58,1.5,128.7,350.2219,38.1823,5.77,.47,42,350.3146,-26.9868,5.65,.82,101.3,350.4789,31.8125,5.35,-.1,254.5,350.6356,60.1335,5.56,1.68,526.3,350.6632,-15.0393,5.19,.2,65.4,350.7426,-20.1006,3.96,1.08,50.1,350.769,12.3139,5.09,1.31,119,351.0553,-51.8912,5.75,1.61,180.5,351.2094,62.2828,4.96,1.68,241,351.2118,32.3849,5.56,-.07,145.1,351.3311,-56.849,5.6,1.06,89,351.3449,23.4041,4.42,.62,52.2,351.5116,-20.642,4.38,1.46,86.9,351.6524,-52.7216,5.53,.41,30.8,351.7331,1.2556,4.95,.04,47.1,351.7536,87.3075,5.56,.25,102.1,351.7808,42.912,5.75,-.01,92,351.8125,-58.4761,5.63,.98,96.3,351.8193,70.3598,5.6,.16,65.4,351.9183,25.1673,5.99,-.07,110.6,351.9921,6.379,4.27,1.06,45.5,352.0158,-87.4822,5.5,1.28,149,352.2541,-63.1107,5.66,-.14,118.5,352.2887,12.7606,4.54,.94,53.6,352.5081,58.5489,4.89,-.12,190.5,352.8226,39.2362,5.22,1.03,79.2,353.2427,-37.8183,4.38,-.1,53.4,353.3193,-20.9145,4.7,.02,90,353.3316,-77.3853,5.82,.68,31.4,353.3671,22.4988,5.33,1.48,159.5,353.4883,31.3253,4.97,1.38,168.4,353.5376,-1.2476,5.91,.3,64.9,353.6564,40.2364,5.55,.1,80.3,353.6592,33.4973,5.63,1.04,89,353.7057,-15.246,5.95,1.35,113.9,353.746,71.642,5.86,1.68,645.2,353.769,-42.6151,4.69,.08,76.3,354.097,2.1022,5.68,.45,31,354.3835,44.429,5.81,-.06,247.5,354.391,46.4582,3.81,.98,26.4,354.4148,-13.0602,5.66,1.02,81.9,354.4625,-45.4924,4.74,.08,61.4,354.4867,18.4007,5.49,.01,71.4,354.5342,43.2681,4.29,-.08,153.1,354.5995,-76.8696,5.99,.91,161.8,354.7847,50.4717,5.35,-.06,129.2,354.7924,75.2929,5.95,.12,79.1,354.8369,77.6323,3.21,1.03,14.1,354.8381,74.0026,5.98,.89,100.4,354.9461,-14.2222,4.97,.26,43.6,354.9793,9.6773,5.99,.21,54.4,354.9877,5.6263,4.13,.51,13.7,355.1021,44.3339,4.15,-.07,51.6,355.159,-32.0731,5.3,.96,89.4,355.2871,-11.6807,5.89,.98,107.1,355.3937,-18.0271,5.36,1.58,232,355.4409,-17.8165,4.82,.82,257.1,355.4862,7.2505,5.89,.1,99.4,355.5117,1.78,4.49,.2,32.7,355.6159,-15.448,5.27,1.34,82.8,355.6806,-14.5449,4.49,-.03,45.5,355.8432,10.3315,5.09,1.69,189.8,355.9979,29.3615,4.93,.94,68.8,356.0502,-64.4045,5.73,1.39,223.2,356.0503,-18.2769,5.24,-.08,116.1,356.1702,-78.7914,5.74,1.11,148.6,356.5038,-18.6783,5.28,.3,73.2,356.5085,46.4203,4.97,1.09,307.7,356.598,3.4868,4.95,2.51,275.5,356.6531,66.7822,5.95,-.05,456.6,356.758,57.4514,5.55,1.63,492.6,356.7644,58.652,4.88,1.12,53.3,356.8163,-11.9111,5.74,1.07,93.5,356.8166,-50.2265,5.18,-.16,185.2,356.9782,67.8068,5.05,.01,92.9,356.9856,-2.7616,5.49,.94,97.1,357.209,62.2145,5.43,.67,0,357.2314,-28.1303,4.59,0,42.1,357.3645,1.0761,5.77,.17,93.1,357.4141,28.8424,5.95,.19,88.3,357.4207,36.4253,5.86,.81,129.7,357.5614,-9.9741,5.93,1.13,91.2,357.6387,-14.4015,5.7,1.49,139.5,357.8385,9.3134,5.77,1.66,259.1,357.8389,-18.9092,5.17,-.12,97.8,357.991,2.9304,5.59,1.53,229.4,358.027,-82.0188,5.1,.93,81.3,358.122,19.1203,5.06,1.59,141.8,358.125,-14.2512,5.85,1.25,86.4,358.1546,10.9473,5.3,.19,56,358.2105,-8.9968,5.76,1.17,189,358.2315,-3.1555,5.93,1.07,137.4,358.596,57.4994,4.51,1.19,0,358.6943,.1093,5.78,1.47,195.3,359.2853,55.7057,5.57,.48,71,359.3329,-62.9566,5.95,.1,66.1,359.387,-82.1698,5.72,1.05,93.5,359.3962,-64.2982,5,.06,47.4,359.4397,25.1414,4.63,1.58,146,359.6682,-3.556,4.88,.93,71.9,359.7324,-52.7458,5.13,1.12,88.1,359.7522,55.7549,4.88,-.07,0,359.8279,6.8633,4.03,.42,32,359.8662,-29.4852,5.59,1.6,226.2,359.8721,33.7239,5.81,.54,28.9,359.9791,-65.5771,4.49,-.07,114.4],proper:{25:`Alpheratz`,27:`Caph`,39:`Algenib`,53:`Deneb Kaitos Shemali`,69:`Ankaa`,111:`Shedar`,122:`Diphda`,147:`Achird`,167:`Navi`,201:`Dheneb`,204:`Mirach`,243:`Ruchbah`,272:`Achernar`,274:`Nembus`,319:`Mothallah`,325:`Segin`,326:`Sheratan`,362:`Almach`,367:`Hamal`,372:`Mizan`,433:`Polaris`,474:`Kaffaljidhma`,519:`Acamar`,537:`Menkar`,545:`Gorgonea Tertia`,553:`Algol`,605:`Mirfak`,662:`Rana`,687:`Alcyone`,715:`Atik`,726:`Zaurak`,789:`Beemim`,847:`Ain`,849:`Chamukuy`,874:`Aldebaran`,923:`Tabit`,953:`Hassaleh`,969:`Almaaz`,988:`Haedus`,995:`Cursa`,1019:`Rigel`,1025:`Capella`,1062:`Saif al Jabbar`,1068:`Bellatrix`,1070:`Elnath`,1081:`Nihal`,1098:`Mintaka`,1103:`Arneb`,1117:`Meissa`,1124:`Hatysa`,1127:`Alnilam`,1135:`Tianguan`,1146:`Phact`,1149:`Alnitak`,1159:`Kursi al Jabbar`,1173:`Saiph`,1189:`Wazn`,1213:`Betelgeuse`,1231:`Menkalinan`,1232:`Mahasim`,1293:`Propus`,1323:`Furud`,1330:`Mirzam`,1332:`Tejat`,1335:`Canopus`,1394:`Alhena`,1415:`Mebsuta`,1419:`Sirius`,1420:`Alzirr`,1488:`Adhara`,1497:`Unurgunite`,1504:`Al Zara`,1526:`Wezen`,1592:`Wasat`,1609:`Aludra`,1628:`Gomeisa`,1667:`Castor`,1687:`Procyon`,1720:`Pollux`,1742:`Azmidi`,1798:`Naos`,1807:`Tureis`,1816:`Regor`,1843:`Tarf`,1866:`Avior`,1900:`Muscida`,1961:`Alsephina`,1971:`Ashlesha`,2019:`Talitha`,2034:`Alkaphrah`,2043:`Suhail`,2065:`Miaplacidus`,2086:`Aspidiske`,2105:`Markeb`,2116:`Alphard`,2178:`Subra`,2191:`Algenubi`,2240:`Al Jabhah`,2244:`Regulus`,2266:`Adhafera`,2269:`Tania Borealis`,2280:`Algieba`,2286:`Tania Australis`,2424:`Merak`,2428:`Dubhe`,2455:`Zosma`,2456:`Chertan`,2463:`Alula Borealis`,2467:`Labr`,2559:`Denebola`,2564:`Zavijava`,2571:`Phecda`,2611:`Minkar`,2624:`Imai`,2625:`Megrez`,2626:`Gienah`,2648:`Ginan`,2665:`Acrux`,2676:`Algorab`,2683:`Gacrux`,2695:`Kraz`,2716:`Muhlifain`,2717:`Porrima`,2737:`Mimosa`,2757:`Alioth`,2768:`Minelauva`,2771:`Cor Caroli`,2783:`Vindemiatrix`,2851:`Mizar`,2856:`Spica`,2881:`Heze`,2928:`Alkaid`,2953:`Muphrid`,2957:`Alnair`,2976:`Hadar`,2981:`Menkent`,3002:`Arcturus`,3052:`Seginus`,3071:`Toliman`,3072:`Rigil Kentaurus`,3079:`Men`,3088:`Izar`,3115:`Kochab`,3116:`Zubenelgenubi`,3142:`KeKouan`,3145:`Ke Kwan`,3155:`Nekkar`,3162:`Brachium`,3197:`Thiba`,3204:`Zubeneschamali`,3218:`Pherkad`,3238:`Edasich`,3264:`Alphecca`,3309:`Unukalhai`,3367:`Fang`,3373:`Dschubba`,3392:`Acrab`,3430:`Yed Prior`,3445:`Yed Posterior`,3457:`Alniyat`,3467:`Athebyne`,3489:`Antares`,3493:`Kornephoros`,3511:`Paikauhale`,3518:`Saik`,3525:`Rutilicus`,3550:`Atria`,3555:`Larawag`,3561:`Xamidimura`,3562:`Pipirima`,3612:`Aldhibah`,3616:`Sabik`,3625:`Rasalgethi`,3626:`Sarin`,3658:`Garafsa`,3692:`Rastaban`,3694:`Lesath`,3703:`Choo`,3712:`Shaula`,3717:`Rasalhague`,3724:`Sargas`,3742:`Mula`,3746:`Cebalrai`,3755:`Girtab`,3763:`Fuyue`,3783:`Eltanin`,3793:`Sinistra`,3813:`Alnasl`,3861:`Hamalwarid`,3871:`Kaus Media`,3873:`Alahakan`,3889:`Kaus Australis`,3901:`Kaus Borealis`,3941:`Vega`,3968:`Namalsadirah`,3990:`Sheliak`,4012:`Nunki`,4036:`Sulafat`,4049:`Ascella`,4062:`Okab`,4064:`Al Thalimain Prior`,4081:`Albaldah`,4088:`Altais`,4135:`Almizan`,4156:`Albireo`,4205:`Fawaris`,4208:`Tarazed`,4225:`Altair`,4334:`Algedi`,4345:`Dabih`,4349:`Sadr`,4357:`Peacock`,4386:`Persian`,4408:`Deneb`,4420:`Kabalfird`,4425:`Aljanah`,4535:`Alderamin`,4572:`Alfirk`,4579:`Sadalsuud`,4618:`Enif`,4630:`Deneb Algedi`,4646:`Aldhanab`,4680:`Sadalmelik`,4688:`Alnair`,4697:`Biham`,4804:`Homam`,4810:`Tiaki`,4811:`Matar`,4830:`Sadalbari`,4846:`Skat`,4858:`Fomalhaut`,4874:`Scheat`,4879:`Markab`,4985:`Errai`},extra:[34.8366,-2.9776],cons:JSON.parse(`{"And":{"name":"Andromeda","at":[[0.75,43]],"lines":[362,204,204,106,106,25,170,135,135,104,104,106,106,100,100,4981,4981,4869,4981,4990,4990,4977,204,168,168,150,150,203,203,274,4990,5005]},"Ant":{"name":"Antlia","at":[[156,-36]],"lines":[2125,2300,2300,2409]},"Aps":{"name":"Apus","at":[[240,-74]],"lines":[3101,3453,3453,3535,3535,3506]},"Aqr":{"name":"Aquarius","at":[[337.5,-5]],"lines":[4432,4452,4452,4579,4579,4680,4680,4740,4740,4762,4762,4784,4784,4840,4840,4923,4923,4895,4579,4684,4680,4725,4762,4751,4943,4923,4923,4994]},"Aql":{"name":"Aquila","at":[[291,8]],"lines":[4208,4225,4225,4246,4246,4307,4307,4234,4234,4135,4135,4062,4062,4225,4225,4135,4135,4064]},"Ara":{"name":"Ara","at":[[258,-56]],"lines":[3674,3697,3697,3553,3553,3584,3584,3586,3586,3703,3703,3673]},"Ari":{"name":"Aries","at":[[42,22]],"lines":[494,367,367,326,326,321]},"Aur":{"name":"Auriga","at":[[82.5,37]],"lines":[1231,1025,1025,988,988,953,953,1070,1070,1232,1232,1231,1231,1230,1230,1025,1025,969,969,972]},"Boo":{"name":"Boötes","at":[[223.5,35]],"lines":[2925,2953,2953,3002,3002,3051,3051,3052,3052,3155,3155,3197,3197,3088,3088,3002,3002,3076,3052,3005,3005,2995,2995,3034,3034,3005]},"Cae":{"name":"Caelum","at":[[73.5,-42]],"lines":[858,895,895,899,899,980]},"Cam":{"name":"Camelopardalis","at":[[84,72]],"lines":[954,978,978,939,939,705,705,700,700,617,939,1316,1316,1491]},"Cnc":{"name":"Cancer","at":[[128.25,27]],"lines":[2016,1960,1960,1955,1955,1969,1960,1843]},"CVn":{"name":"Canes Venatici","at":[[192,43]],"lines":[2770,2693]},"CMa":{"name":"Canis Major","at":[[97.5,-26]],"lines":[1330,1419,1419,1504,1504,1526,1526,1497,1497,1488,1488,1323,1609,1526,1419,1476,1476,1509,1509,1468,1468,1476]},"CMi":{"name":"Canis Minor","at":[[109.5,5]],"lines":[1687,1628]},"Cap":{"name":"Capricornus","at":[[315,-22]],"lines":[4331,4345,4345,4363,4363,4423,4423,4449,4449,4564,4564,4630,4630,4599,4599,4548,4548,4497,4497,4331]},"Car":{"name":"Carina","at":[[144,-66]],"lines":[1395,1335,1335,2065,2065,2259,2259,2358,2358,2321,2321,2268,2268,2086,2086,1866,1866,1767,1767,1816,1816,1961,1961,2086,2358,2434,2434,2438,2438,2448,2448,2439,2439,2395,2395,2321]},"Cas":{"name":"Cassiopeia","at":[[354,55.5]],"lines":[325,243,243,167,167,111,111,27]},"Cen":{"name":"Centaurus","at":[[199.5,-40]],"lines":[2468,2605,2605,2671,2671,2716,2716,2896,2896,2957,2957,2934,2934,2933,2933,2981,2981,3061,3061,3145,2933,2841,3071,2896,2896,2976,2671,2614,2614,2499]},"Cep":{"name":"Cepheus","at":[[337.5,71]],"lines":[4368,4420,4420,4535,4535,4615,4615,4719,4719,4702,4702,4764,4764,4828,4828,4985,4985,4572,4572,4535,4572,4828]},"Cet":{"name":"Cetus","at":[[28.5,-5]],"lines":[474,444,444,425,425,481,481,528,528,537,537,474,474,458,458,-1,-1,315,315,299,299,122,122,53,53,201,201,238,238,315]},"Cha":{"name":"Chamaeleon","at":[[189,-81]],"lines":[1848,2335,2335,2369,2369,2634,2634,2583,2583,2335]},"Cir":{"name":"Circinus","at":[[217.5,-67]],"lines":[3206,3081,3081,3233]},"Col":{"name":"Columba","at":[[85.5,-39]],"lines":[1327,1189,1189,1146,1146,1093,1189,1228]},"Com":{"name":"Coma Berenices","at":[[193.5,24]],"lines":[2807,2812,2812,2667]},"CrA":{"name":"Corona Austrina","at":[[282,-40]],"lines":[4034,4066,4066,4080,4080,4084,4084,4076,4076,4052,4052,3985,3985,3929]},"CrB":{"name":"Corona Borealis","at":[[238.5,32]],"lines":[3258,3245,3245,3264,3264,3302,3302,3325,3325,3362,3362,3378]},"Crv":{"name":"Corvus","at":[[186,-19.5]],"lines":[2606,2611,2611,2626,2626,2676,2676,2695,2695,2611]},"Crt":{"name":"Crater","at":[[174.75,-15]],"lines":[2522,2478,2478,2467,2467,2415,2415,2446,2446,2474,2474,2479,2479,2544,2544,2578,2467,2479]},"Cru":{"name":"Crux","at":[[193.5,-62]],"lines":[2737,2624,2665,2683]},"Cyg":{"name":"Cygnus","at":[[307.5,50]],"lines":[4516,4425,4425,4349,4349,4205,4205,4153,4153,4106,4408,4349,4349,4253,4253,4156]},"Del":{"name":"Delphinus","at":[[309,6]],"lines":[4375,4385,4385,4400,4400,4427,4427,4415,4415,4385]},"Dor":{"name":"Dorado","at":[[76.5,-64]],"lines":[781,867,867,1109,1109,1160,1160,1203,1203,1109,1109,985,985,867]},"Dra":{"name":"Draco","at":[[268.5,64]],"lines":[3775,3783,3783,3692,3692,3707,3707,3775,3775,4088,4088,3868,3868,3612,3612,3467,3467,3379,3379,3238,3238,2977,2977,2690,2690,2498,3868,3873,4088,4215]},"Equ":{"name":"Equuleus","at":[[320.25,11.5]],"lines":[4527,4521,4521,4513]},"Eri":{"name":"Eridanus","at":[[52.5,-18]],"lines":[995,912,912,875,875,769,769,726,726,681,681,662,662,639,639,512,512,477,477,483,483,539,539,589,589,642,642,685,685,872,872,824,824,789,789,699,699,649,649,591,591,519,519,464,464,422,422,393,393,330,330,272]},"For":{"name":"Fornax","at":[[40.5,-28]],"lines":[562,491,491,363]},"Gem":{"name":"Gemini","at":[[107.25,23.5]],"lines":[1293,1332,1332,1415,1415,1535,1535,1667,1667,1720,1720,1671,1671,1592,1592,1514,1514,1394,1394,1420,1592,1581]},"Gru":{"name":"Grus","at":[[342,-41.5]],"lines":[4865,4826,4826,4810,4810,4768,4768,4688,4688,4810,4766,4720,4720,4683,4683,4646]},"Her":{"name":"Hercules","at":[[253.5,35]],"lines":[3459,3493,3493,3525,3525,3534,3534,3508,3508,3450,3450,3408,3408,3339,3525,3590,3534,3627,3780,3665,3665,3627,3627,3590,3590,3626,3626,3752,3752,3788,3788,3825,3625,3493]},"Hor":{"name":"Horologium","at":[[51,-52]],"lines":[772,471,471,452,452,463,463,542,542,522]},"Hya":{"name":"Hydra","at":[[150,-22]],"lines":[1971,1975,1975,1954,1954,1927,1927,1923,1923,1971,1971,2001,2001,2071,2071,2174,2174,2116,2116,2207,2207,2250,2250,2298,2298,2385,2385,2507,2507,2570,2570,2839,2839,2980,2980,3111]},"Hyi":{"name":"Hydrus","at":[[34.5,-72]],"lines":[67,686,686,460,460,405,405,327,327,339]},"Ind":{"name":"Indus","at":[[318,-55.5]],"lines":[4386,4416,4416,4460,4460,4654,4654,4541,4541,4386]},"Lac":{"name":"Lacerta","at":[[342,47]],"lines":[4744,4775,4775,4767,4767,4736,4736,4773,4773,4800,4800,4767,4767,4747,4747,4744,4773,4715,4715,4721]},"Leo":{"name":"Leo","at":[[159,15]],"lines":[2244,2240,2240,2280,2280,2455,2455,2559,2559,2456,2456,2244,2280,2266,2266,2212,2212,2191]},"LMi":{"name":"Leo Minor","at":[[157.5,30]],"lines":[2241,2297,2297,2393,2393,2305,2305,2241,2241,2152]},"Lep":{"name":"Lepus","at":[[88.5,-25]],"lines":[1256,1218,1218,1168,1168,1103,1103,1013,1013,984,984,1081,1081,1159,1159,1192,1014,1013,1013,1039]},"Lib":{"name":"Libra","at":[[231,-26]],"lines":[3162,3116,3116,3204,3204,3269,3269,3276,3276,3285,3116,3269]},"Lup":{"name":"Lupus","at":[[228.75,-35]],"lines":[3331,3289,3289,3222,3222,3221,3221,3142,3142,3079,3079,3188,3188,3211,3211,3229,3229,3266,3266,3371,3371,3398,3221,3266]},"Lyn":{"name":"Lynx","at":[[121.5,49]],"lines":[1318,1483,1483,1624,1624,1869,1869,2023,2023,2095,2095,2100]},"Lyr":{"name":"Lyra","at":[[279,30]],"lines":[3961,3960,3960,3941,3941,3961,3961,4004,4004,4036,4036,3990,3990,3961]},"Men":{"name":"Mensa","at":[[82.5,-80]],"lines":[1276,1096,1096,947,947,973]},"Mic":{"name":"Microscopium","at":[[316.5,-37]],"lines":[4441,4436,4436,4542,4542,4531,4531,4484,4484,4441]},"Mon":{"name":"Monoceros","at":[[114.75,-6]],"lines":[1699,1811,1811,1540,1540,1355,1355,1292,1540,1438,1438,1333,1333,1375,1375,1409]},"Mus":{"name":"Musca","at":[[195,-73]],"lines":[2546,2633,2633,2705,2705,2730,2730,2784,2784,2688,2688,2705]},"Nor":{"name":"Norma","at":[[243,-52]],"lines":[3397,3479,3479,3451,3451,3383,3383,3397]},"Oct":{"name":"Octans","at":[[300,-80]],"lines":[3038,4818,4818,4601,4601,3038]},"Oph":{"name":"Ophiuchus","at":[[258,3]],"lines":[3793,3757,3757,3746,3746,3717,3717,3582,3582,3496,3496,3430,3430,3445,3445,3518,3518,3616,3582,3518,3518,3497,3497,3478,3478,3469,3469,3476,3746,3616,3616,3658,3658,3685]},"Ori":{"name":"Orion","at":[[84,13]],"lines":[1264,1204,1204,1243,1243,1283,1283,1240,1240,1213,1213,1068,1068,944,958,940,940,929,929,923,923,926,926,944,944,951,951,981,981,1003,1019,1062,1062,1098,1098,1068,1068,1117,1117,1213,1213,1149,1149,1173,1149,1127,1127,1098]},"Pav":{"name":"Pavo","at":[[297,-62]],"lines":[4357,4419,4419,4302,4302,3994,3994,3883,3883,3831,3831,3751,3751,3953,3953,4273,4273,4419,4419,4563]},"Peg":{"name":"Pegasus","at":[[334.5,16]],"lines":[4695,4811,4811,4874,4874,25,25,39,39,4879,4879,4821,4821,4804,4804,4697,4697,4618,4879,4874,4874,4830,4830,4820,4820,4685,4685,4621]},"Per":{"name":"Perseus","at":[[66,45]],"lines":[665,715,715,729,729,725,725,672,672,661,661,646,646,605,605,544,544,499,499,508,508,554,554,555,555,553,553,558,558,545,545,521,521,526,526,553,751,778,778,756,756,661,554,478,478,298]},"Phe":{"name":"Phoenix","at":[[16.5,-43]],"lines":[69,191,191,250,250,256,256,199,199,191,191,29,29,69]},"Pic":{"name":"Pictor","at":[[82.5,-50]],"lines":[1439,1180,1180,1170]},"Psc":{"name":"Pisces","at":[[19.5,15]],"lines":[221,215,215,230,230,221,221,214,214,257,257,300,300,350,350,322,322,284,284,253,253,220,220,182,182,144,144,5040,5040,4989,4989,4958,4958,4935,4935,4920,4920,4952,4952,4996,4996,5006,5006,4989,4920,4875]},"PsA":{"name":"Piscis Austrinus","at":[[333,-29]],"lines":[4801,4858,4858,4852,4852,4839,4839,4776,4776,4689,4689,4623,4623,4633,4633,4689,4689,4801]},"Pup":{"name":"Puppis","at":[[111,-46]],"lines":[1395,1577,1577,1669,1669,1685,1685,1742,1742,1768,1768,1807,1807,1798,1798,1816,1742,1734,1734,1712,1712,1669]},"Pyx":{"name":"Pyxis","at":[[132,-24]],"lines":[1798,1936,1936,1956,1956,1982]},"Ret":{"name":"Reticulum","at":[[55.5,-61]],"lines":[774,782,782,727,727,664,664,774]},"Sge":{"name":"Sagitta","at":[[291,18]],"lines":[4189,4211,4211,4261,4194,4211]},"Sgr":{"name":"Sagittarius","at":[[292.5,-34]],"lines":[3861,3889,3889,3871,3871,3901,3901,3849,4123,4127,4127,4049,4049,3968,3968,3901,4245,4265,4265,4248,4248,4177,4177,4132,4132,4099,4099,4012,4012,3968,3968,3871,3871,3813,3813,3889,3889,4049,4049,4071,4071,4012,4012,4058,4058,4081,4081,4108,4108,4119,4119,4120,4058,4029,4029,4001,4001,4012]},"Sco":{"name":"Scorpius","at":[[249,-38]],"lines":[3367,3373,3373,3392,3373,3457,3457,3489,3489,3511,3511,3555,3555,3561,3561,3572,3572,3619,3619,3724,3724,3755,3755,3742,3742,3712]},"Scl":{"name":"Sculptor","at":[[1.5,-33]],"lines":[174,5015,5015,4927,4927,4964]},"Sct":{"name":"Scutum","at":[[282,-12.5]],"lines":[3935,3978,3978,3951,3951,3905,3905,3935]},"Ser":{"name":"Serpens Caput","at":[[232.5,5],[280.5,3]],"lines":[3313,3295,3295,3323,3323,3356,3356,3313,3313,3265,3265,3309,3309,3330,3330,3430,3616,3727,3727,3793,3793,3808,3808,3874,3874,4018]},"Sex":{"name":"Sextans","at":[[157.5,-7]],"lines":[2243,2211,2211,2307,2307,2312]},"Tau":{"name":"Taurus","at":[[54,15]],"lines":[1135,874,874,849,849,798,798,818,818,847,847,1070,798,733,733,611,611,740,611,608,608,648]},"Tel":{"name":"Telescopium","at":[[277.5,-54]],"lines":[3842,3898,3898,3904]},"Tri":{"name":"Triangulum","at":[[27,34]],"lines":[319,372,372,396,396,319]},"TrA":{"name":"Triangulum Australe","at":[[240,-67.5]],"lines":[3550,3349,3349,3213,3213,3550]},"Tuc":{"name":"Tucana","at":[[348,-64]],"lines":[4731,4921,4921,82,82,54,54,5043,5043,4757,4757,4731]},"UMa":{"name":"Ursa Major","at":[[165,48]],"lines":[2625,2428,2428,2424,2424,2571,2571,2625,2625,2757,2757,2851,2851,2928,2571,2549,2549,2463,2463,2462,2549,2444,2444,2286,2444,2269,2428,2134,2134,1900,1900,2204,2204,2424,2424,2210,2210,2145,2145,2019,2034,2145]},"UMi":{"name":"Ursa Minor","at":[[226.5,68]],"lines":[3307,3443,3443,3218,3218,3115,3115,3307,3307,3543,3543,3706,3706,433]},"Vel":{"name":"Vela","at":[[143.25,-46]],"lines":[1961,2105,2105,2222,2222,2376,2376,2261,2261,2130,2130,2043,2043,1816]},"Vir":{"name":"Virgo","at":[[199.5,-4]],"lines":[2548,2564,2564,2640,2640,2717,2717,2806,2806,2856,2856,3003,3003,3082,2783,2768,2768,2717,2806,2881,2881,2972,2972,3095]},"Vol":{"name":"Volans","at":[[111,-73]],"lines":[2030,1882,1882,1809,1809,1576,1576,1528,1528,1809,1809,2030]},"Vul":{"name":"Vulpecula","at":[[295.5,21]],"lines":[4101,4148,4148,4238,4238,4276,4276,4326]}}`)},Kf=Math.PI/180,qf=23.85306,Jf=1.396971,Yf=e=>(e%360+360)%360,Xf=[[`Medam`,`മേടം`,`Aries`],[`Edavam`,`ഇടവം`,`Taurus`],[`Mithunam`,`മിഥുനം`,`Gemini`],[`Karkkadakam`,`കർക്കടകം`,`Cancer`],[`Chingam`,`ചിങ്ങം`,`Leo`],[`Kanni`,`കന്നി`,`Virgo`],[`Thulam`,`തുലാം`,`Libra`],[`Vrischikam`,`വൃശ്ചികം`,`Scorpio`],[`Dhanu`,`ധനു`,`Sagittarius`],[`Makaram`,`മകരം`,`Capricorn`],[`Kumbham`,`കുംഭം`,`Aquarius`],[`Meenam`,`മീനം`,`Pisces`]],Zf=[[`Ashwathi`,`അശ്വതി`],[`Bharani`,`ഭരണി`],[`Karthika`,`കാർത്തിക`],[`Rohini`,`രോഹിണി`],[`Makayiram`,`മകയിരം`],[`Thiruvathira`,`തിരുവാതിര`],[`Punartham`,`പുണർതം`],[`Pooyam`,`പൂയം`],[`Ayilyam`,`ആയില്യം`],[`Makam`,`മകം`],[`Pooram`,`പൂരം`],[`Uthram`,`ഉത്രം`],[`Atham`,`അത്തം`],[`Chithira`,`ചിത്തിര`],[`Chothi`,`ചോതി`],[`Vishakham`,`വിശാഖം`],[`Anizham`,`അനിഴം`],[`Thrikketta`,`തൃക്കേട്ട`],[`Moolam`,`മൂലം`],[`Pooradam`,`പൂരാടം`],[`Uthradam`,`ഉത്രാടം`],[`Thiruvonam`,`തിരുവോണം`],[`Avittam`,`അവിട്ടം`],[`Chathayam`,`ചതയം`],[`Pooruruttathi`,`പൂരുരുട്ടാതി`],[`Uthrattathi`,`ഉത്രട്ടാതി`],[`Revathi`,`രേവതി`]],Qf={mercury:[.38709927,.20563593,7.00497902,252.2503235,77.45779628,48.33076593,37e-8,1906e-8,-.00594749,149472.67411175,.16047689,-.12534081],venus:[.72333566,.00677672,3.39467605,181.9790995,131.60246718,76.67984255,39e-7,-4107e-8,-7889e-7,58517.81538729,.00268329,-.27769418],earth:[1.00000261,.01671123,-1531e-8,100.46457166,102.93768193,0,562e-8,-4392e-8,-.01294668,35999.37244981,.32327364,0],mars:[1.52371034,.0933941,1.84969142,-4.55343205,-23.94362959,49.55953891,1847e-8,7882e-8,-.00813131,19140.30268499,.44441088,-.29257343],jupiter:[5.202887,.04838624,1.30439695,34.39644051,14.72847983,100.47390909,-11607e-8,-13253e-8,-.00183714,3034.74612775,.21252668,.20469106],saturn:[9.53667594,.05386179,2.48599187,49.95424423,92.59887831,113.66242448,-.0012506,-50991e-8,.00193609,1222.49362201,-.41897216,-.28867794]};function $f(e,t){let n=Qf[e],r=n[0]+n[6]*t,i=n[1]+n[7]*t,a=(n[2]+n[8]*t)*Kf,o=n[3]+n[9]*t,s=n[4]+n[10]*t,c=n[5]+n[11]*t,l=Yf(o-s)*Kf,u=(s-c)*Kf,d=c*Kf,f=l+i*Math.sin(l);for(let e=0;e<8;e++)f-=(f-i*Math.sin(f)-l)/(1-i*Math.cos(f));let p=r*(Math.cos(f)-i),m=r*Math.sqrt(1-i*i)*Math.sin(f),h=Math.cos(u),g=Math.sin(u),_=Math.cos(d),v=Math.sin(d),y=Math.cos(a),b=Math.sin(a);return[(h*_-g*v*y)*p+(-g*_-h*v*y)*m,(h*v+g*_*y)*p+(-g*v+h*_*y)*m,g*b*p+h*b*m]}function ep(e){let t=218.3164477+481267.88123421*e,n=(297.8501921+445267.1114034*e)*Kf,r=(357.5291092+35999.0502909*e)*Kf,i=(134.9633964+477198.8675055*e)*Kf,a=(93.272095+483202.0175233*e)*Kf,o=Math.sin,s=t+6.288774*o(i)+1.274027*o(2*n-i)+.658314*o(2*n)+.213618*o(2*i)-.185116*o(r)-.114332*o(2*a)+.058793*o(2*n-2*i)+.057066*o(2*n-r-i)+.053322*o(2*n+i)+.045758*o(2*n-r)-.040923*o(r-i)-.03472*o(n)-.030383*o(r+i)+.015327*o(2*n-2*a)-.012528*o(i+2*a)+.01098*o(i-2*a)+.010675*o(4*n-i)+.010034*o(3*i)+.008548*o(4*n-2*i),c=5.128122*o(a)+.280602*o(i+a)+.277693*o(i-a)+.173237*o(2*n-a)+.055413*o(2*n-i+a)+.046271*o(2*n-i-a)+.032573*o(2*n+a)+.017198*o(2*i+a);return[s-Jf*e,c]}var tp=[[`sun`,`Sun`,`സൂര്യൻ`],[`moon`,`Moon`,`ചന്ദ്രൻ`],[`mars`,`Mars`,`ചൊവ്വ`],[`mercury`,`Mercury`,`ബുധൻ`],[`jupiter`,`Jupiter`,`വ്യാഴം`],[`venus`,`Venus`,`ശുക്രൻ`],[`saturn`,`Saturn`,`ശനി`],[`rahu`,`Rahu`,`രാഹു`],[`ketu`,`Ketu`,`കേതു`]];function np(e=new Date){let t=(e.getTime()/864e5+2440587.5-2451545)/36525,n=$f(`earth`,t),r={},i=(e,t,n)=>{let i=Yf(t-qf);r[e]={lon:Yf(t),lat:n,sid:i,rashi:Math.floor(i/30),deg:i%30,nak:Math.floor(i/(360/27))}};i(`sun`,Math.atan2(-n[1],-n[0])/Kf,Math.atan2(-n[2],Math.hypot(n[0],n[1]))/Kf);for(let e of[`mercury`,`venus`,`mars`,`jupiter`,`saturn`]){let r=$f(e,t),a=r[0]-n[0],o=r[1]-n[1],s=r[2]-n[2];i(e,Math.atan2(o,a)/Kf,Math.atan2(s,Math.hypot(a,o))/Kf)}let a=ep(t);i(`moon`,a[0],a[1]);let o=125.0445479-1934.1362891*t-Jf*t;return i(`rahu`,o,0),i(`ketu`,o+180,0),r.ayanamsa=qf+Jf*t,r}var rp=2400,ip=Bt.degToRad(23.4393),ap=Math.PI/180,op=[`Ari`,`Tau`,`Gem`,`Cnc`,`Leo`,`Vir`,`Lib`,`Sco`,`Sgr`,`Cap`,`Aqr`,`Psc`],sp=[[1.91,20.81],[2.83,27.26],[3.79,24.11],[4.6,16.51],[5.59,9.93],[5.92,7.41],[7.76,28.03],[8.74,18.15],[8.78,6.42],[10.14,11.97],[11.24,20.52],[11.82,14.57],[12.5,-16.52],[13.42,-11.16],[14.26,19.18],[14.85,-16.04],[16.01,-22.62],[16.49,-26.43],[17.56,-37.1],[18.35,-29.83],[18.92,-26.3],[19.85,8.87],[20.63,14.6],[22.88,-7.58],[23.08,15.21],[.22,15.18],[1.23,7.58]],cp={b:[.74,.84,1],w:[.96,.97,1],y:[1,.95,.84],o:[1,.84,.64],r:[1,.7,.52]},lp=[[-.3,[.62,.74,1]],[0,[.8,.87,1]],[.3,[.97,.97,1]],[.62,[1,.95,.84]],[1,[1,.84,.62]],[1.5,[1,.7,.48]],[2.2,[1,.58,.4]]];function up(e){if(e<=lp[0][0])return lp[0][1];for(let t=1;t<lp.length;t++)if(e<=lp[t][0]){let n=(e-lp[t-1][0])/(lp[t][0]-lp[t-1][0]);return lp[t-1][1].map((e,r)=>e+(lp[t][1][r]-e)*n)}return lp[lp.length-1][1]}var dp=e=>e>0?1500+2e3*Math.min(1,Math.log10(1+e)/3):2600;function fp(e,t,n,r=new V){let i=e*ap,a=t*ap;return r.set(Math.cos(a)*Math.cos(i)*n,Math.sin(a)*n,-Math.cos(a)*Math.sin(i)*n)}function pp(e,t){let n=e/24*Math.PI*2,r=Bt.degToRad(t);return[Math.cos(r)*Math.cos(n),Math.cos(r)*Math.sin(n),Math.sin(r)]}function mp([e,t,n],r,i=new V){let a=t*Math.cos(ip)+n*Math.sin(ip),o=-t*Math.sin(ip)+n*Math.cos(ip);return i.set(e,o,-a).normalize().multiplyScalar(r)}function hp(e,t){let n=Bt.degToRad(e),r=Bt.degToRad(t),i=[Math.cos(r)*Math.cos(n),Math.cos(r)*Math.sin(n),Math.sin(r)],a=[[-.0548755604,-.8734370902,-.4838350155],[.4941094279,-.44482963,.7469822445],[-.867666149,-.1980763734,.4559837762]];return[0,1,2].map(e=>a[0][e]*i[0]+a[1][e]*i[1]+a[2][e]*i[2])}var gp=()=>{let e=0;for(let t=0;t<4;t++)e+=Math.random();return(e-2)/.577};function _p(e,t=1){return new W({transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:rf.uTime,uPR:{value:Math.min(devicePixelRatio,af?1.25:1.75)},uFade:{value:1},uBoost:{value:t}},vertexShader:`
      attribute float aMag; attribute vec3 aCol; attribute float aSeed;
      uniform float uTime, uPR, uFade, uBoost; varying vec3 vCol; varying float vB, vSpike, vSize;
      void main(){
        vec4 mv = modelViewMatrix*vec4(position, 1.0);
        gl_Position = projectionMatrix*mv;
        float b = pow(2.512, -(aMag - 1.0))*uBoost;                  // brightness, 1 at magnitude 1
        float tw = 1.0 + 0.12*sin(uTime*(1.3 + aSeed*2.0) + aSeed*90.0);   // a gentle twinkle
        vB = clamp(pow(b, 0.55), 0.1, 2.4)*tw*uFade;       // as the eye sees: faint stars still show
        vCol = aCol; vSpike = smoothstep(0.6, 2.5, b);
        float px = ${e?`clamp(length(position)/max(-mv.z, 1.0), 0.75, 4.0)`:`clamp(2600.0/max(-mv.z, 1.0), 0.45, 1.6)`};
        gl_PointSize = max(clamp(3.5 + 9.0*sqrt(b), 2.5, 26.0)*uPR*px, 3.0); vSize = gl_PointSize;
      }`,fragmentShader:`
      varying vec3 vCol; varying float vB, vSpike, vSize;
      void main(){
        vec2 p = gl_PointCoord - 0.5; float r = length(p); float d = r*vSize;   // d: distance from the centre in pixels
        float core = exp(-d*d*0.55), halo = exp(-r*r*32.0)*0.28;
        float spike = (exp(-abs(p.x)*70.0)*exp(-abs(p.y)*7.0) + exp(-abs(p.y)*70.0)*exp(-abs(p.x)*7.0))*0.35*vSpike;
        float f = (core + halo + spike)*smoothstep(0.5, 0.42, r);
        vec3 c = mix(vCol, vec3(1.0), core*0.6);
        gl_FragColor = vec4(c*f*vB, 1.0);
      }`})}function vp(e){let t=e.length,n=new Float32Array(t*3),r=new Float32Array(t),i=new Float32Array(t*3),a=new Float32Array(t);e.forEach((e,t)=>{n.set([e.p.x,e.p.y,e.p.z],t*3),r[t]=e.mag,i.set(e.col,t*3),a[t]=Math.random()});let o=new Vr;return o.setAttribute(`position`,new Er(n,3)),o.setAttribute(`aMag`,new Er(r,1)),o.setAttribute(`aCol`,new Er(i,3)),o.setAttribute(`aSeed`,new Er(a,1)),o}function yp(e,t,n=1){let r=document.createElement(`canvas`),i=r.getContext(`2d`),a=e.length>1,o=a?420:340,s=a?124:56;r.width=o,r.height=s,i.textAlign=`center`,i.textBaseline=`middle`,i.shadowColor=t,i.shadowBlur=12,e.forEach(([e,t,n],r)=>{i.font=t,i.fillStyle=n,i.fillText(e,o/2,a?36+r*52:s/2)});let c=new ma(r);c.colorSpace=Ze,c.anisotropy=4;let l=new di(new Zr({map:c,transparent:!0,depthWrite:!1,sizeAttenuation:!1,opacity:.9,toneMapped:!1})),u=(af?.27:.24)*n*(o/420);return l.scale.set(u,u*s/o,1),l}function bp(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(64,64,0,64,64,64);e.forEach(([e,t])=>r.addColorStop(e,t)),n.fillStyle=r,n.fillRect(0,0,128,128);let i=new ma(t);return i.colorSpace=Ze,i}function xp(){let e=new zn,t=new V,n=`500 34px "Cormorant Garamond", Georgia, serif`,r=`italic 400 30px "Cormorant Garamond", Georgia, serif`,i=Gf.stars,a=i.length/5,o=[];for(let e=0;e<a;e++)o.push({p:mp(pp(i[e*5]/15,i[e*5+1]),dp(i[e*5+4])),mag:i[e*5+2],col:up(i[e*5+3])});let s=new da(vp(o),_p(!0,1.3));s.frustumCulled=!1,s.renderOrder=2,e.add(s);let c=e=>e>=0?o[e].p:mp(pp(Gf.extra[(-e-1)*2]/15,Gf.extra[(-e-1)*2+1]),2600);function l(e,n){mp(pp(e,n),1,t);let r=0,i=-2;for(let e=0;e<a;e++){let n=o[e].p,a=(n.x*t.x+n.y*t.y+n.z*t.z)/n.length()-(o[e].mag>5.2?2e-4:0);a>i&&(i=a,r=e)}return r}let u=[],d=[];for(let[e,t]of Object.entries(Gf.cons)){let n=op.includes(e)?[1,.78,.42]:[.42,.6,1];for(let e of t.lines){let t=c(e);u.push(t.x,t.y,t.z),d.push(...n)}}let f=new Vr;f.setAttribute(`position`,new kr(u,3)),f.setAttribute(`color`,new kr(d,3));let p=new aa(f,new qi({vertexColors:!0,transparent:!0,opacity:.3,depthWrite:!1,blending:2}));p.frustumCulled=!1,e.add(p);let m=[];for(let e=0;e<=360;e++)fp(e,0,rp,t),m.push(t.x,t.y,t.z);let h=new qi({color:new U(.9,.5,.6),transparent:!0,opacity:.22,depthWrite:!1,blending:2}),g=new ta(new Vr().setAttribute(`position`,new kr(m,3)),h);g.frustumCulled=!1,e.add(g);let _=[],v=(e,n)=>{fp(e,-n,rp,t),_.push(t.x,t.y,t.z),fp(e,n,rp,t),_.push(t.x,t.y,t.z)};for(let e=0;e<12;e++)v(qf+e*30,5);for(let e=0;e<27;e++)v(qf+360/27*e,1.3);let y=new aa(new Vr().setAttribute(`position`,new kr(_,3)),h);y.frustumCulled=!1,e.add(y);let b=[],x=af?9e3:22e3;for(let e=0;e<x;e++){let e;if(Math.random()<.6)e=hp(Math.random()<.35?gp()*40:Math.random()*360,gp()*(Math.random()<.7?4:12));else{let t=Math.random()*2-1,n=Math.random()*Math.PI*2,r=Math.sqrt(1-t*t);e=[r*Math.cos(n),r*Math.sin(n),t]}let t=Math.random();b.push({p:mp(e,3700+Math.random()*1900),mag:5.4+Math.random()**.45*2.2,col:t<.3?cp.b:t<.75?cp.w:t<.94?cp.y:cp.o})}let S=new da(vp(b),_p(!1,2.6));S.frustumCulled=!1,e.add(S);let C=af?16e3:42e3,w=new Float32Array(C*3),T=new Float32Array(C*3);for(let e=0;e<C;e++){let n=Math.random()<.45?gp()*35:Math.random()*360,r=Math.abs((n+540)%360-180);mp(hp(n,gp()*(3+9*Math.exp(-(r**2)/3e3)*(r<60?1:.4))*.6),4200+Math.random()*1400,t),w.set([t.x,t.y,t.z],e*3);let i=Math.exp(-(r**2)/2500);T.set([.35+.35*i,.42+.2*i,.75-.1*i].map(e=>e*(.6+Math.random()*.4)),e*3)}let E=new Vr;E.setAttribute(`position`,new Er(w,3)),E.setAttribute(`color`,new Er(T,3));let D=new da(E,new oa({map:bp([[0,`rgba(255,255,255,1)`],[1,`rgba(255,255,255,0)`]]),size:af?16:13,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:.045,depthWrite:!1,blending:2}));D.frustumCulled=!1,e.add(D);let O=bp([[0,`rgba(255,255,255,0.5)`],[.4,`rgba(255,255,255,0.12)`],[1,`rgba(255,255,255,0)`]]);for(let t=0;t<(af?40:70);t++){let n=t<25?gp()*28:Math.random()*360,r=gp()*3.5,i=Math.exp(-(((n+540)%360-180)**2)/2200),a=[[.5,.6,1],[.62,.48,1],[.9,.62,.8],[1,.82,.6]][Math.random()*4|0],o=new di(new Zr({map:O,color:new U(...a),transparent:!0,depthWrite:!1,blending:2,opacity:.05+.09*i,rotation:Math.random()*6.28}));mp(hp(n,r),5e3,o.position),o.scale.setScalar(5e3*(.18+Math.random()*.22)*(1+i)),e.add(o)}let k=new zn;if(e.add(k),Xf.forEach(([e,t,r],i)=>{let a=yp([[t,`600 38px "Noto Serif Malayalam", serif`,`#ffe9a8`],[`${e} · ${r}`,n,`#f3d9b0`]],`rgba(200,90,40,0.8)`);fp(qf+i*30+15,8.5,rp,a.position),k.add(a)}),Zf.forEach(([e,t],n)=>{let i=yp([[t,`600 30px "Noto Serif Malayalam", serif`,`#ffcf7a`],[e,r,`rgba(255,230,190,0.85)`]],`rgba(255,170,60,0.55)`,.74);i.center.set(.5,-.12),i.position.copy(o[l(...sp[n])].p),k.add(i)}),!af){for(let[e,t]of Object.entries(Gf.cons))t.at.forEach(([r,i],a)=>{let o=yp([[e===`Ser`?a?`Serpens Cauda`:`Serpens Caput`:t.name,n,op.includes(e)?`rgba(255,215,150,0.75)`:`rgba(170,200,255,0.62)`]],`rgba(30,60,160,0.8)`,.8);mp(pp(r/15,i),rp,o.position),k.add(o)});for(let[e,t]of Object.entries(Gf.proper))if(o[e].mag<1.7){let n=yp([[t,r,`rgba(255,255,255,0.8)`]],`rgba(0,0,0,0.9)`,.62);n.center.set(.5,1.5),n.position.copy(o[e].p),k.add(n)}}let A={sun:[`#fff1c0`,`#ffb347`,.085],moon:[`#ffffff`,`#cfd8ff`,.06],mars:[`#ffd0b0`,`#ff5a30`,.03],mercury:[`#ffffff`,`#9fe0c0`,.024],jupiter:[`#fff6d8`,`#ffc870`,.036],venus:[`#ffffff`,`#fff0d0`,.036],saturn:[`#fff0c8`,`#c9a560`,.03],rahu:[`#b0a0d0`,`#5a4a90`,.026],ketu:[`#d0a0a0`,`#904a4a`,.026]},ee=new zn;e.add(ee);let te={};tp.forEach(([e,t,n])=>{let[i,a,o]=A[e],s=new di(new Zr({map:bp([[0,i],[.16,i],[.3,a],[1,`rgba(0,0,0,0)`]]),transparent:!0,depthWrite:!1,sizeAttenuation:!1,blending:2,toneMapped:!1}));s.scale.setScalar(o*(af?1.2:1)),s.renderOrder=3;let c=yp([[n,`600 30px "Noto Serif Malayalam", serif`,`#ffffff`],[t,r,`rgba(255,255,255,0.85)`]],`rgba(0,0,0,0.95)`,.74);c.center.set(.5,1.25),ee.add(s),k.add(c),te[e]={disc:s,name:c}});let j=null,ne=0;function M(){let e=Date.now();if(!(e<ne)){ne=e+2e4,j=np(new Date(e));for(let[e]of tp)fp(j[e].lon,j[e].lat,rp*.96,te[e].disc.position),te[e].name.position.copy(te[e].disc.position)}}return M(),{group:e,showNames(e){k.visible=e},get now(){return j},update:M}}var q={index:null,sayings:null,years:new Map,nSay:0,all:!1},Sp=`https://cdn.jsdelivr.net/gh/learnaicode/guruvanikal-data@036599ee532ee81f53c759341f6f8cbd63c369e3/data/`,Cp=e=>Sp+e;async function wp(){let[e,t]=await Promise.all([fetch(Cp(`index.json`)).then(e=>e.json()),fetch(Cp(`sayings.json`)).then(e=>e.json())]);return q.index=e,q.sayings=t,q.nSay=t.items.length,q}var Tp=new Map;function Ep(e){return q.years.has(e)?Promise.resolve(q.years.get(e)):(Tp.has(e)||Tp.set(e,fetch(Cp(`y/${e}.json`)).then(e=>e.json()).then(t=>(q.years.set(e,t),t))),Tp.get(e))}async function Dp(e){let t=q.index.years.map(e=>e.y),n=0;await Promise.all(t.map(r=>Ep(r).then(()=>e&&e(++n/t.length)))),q.all=!0}function Op(e){let t=q.index.years,n=t.findIndex(t=>e<t.start+t.n);n<0&&(n=t.length-1);let r=t[n],i=r.months.findIndex(t=>e<t.start+t.n);i<0&&(i=r.months.length-1);let a=r.months[i],o=a.talks.findIndex(t=>e<t.start+t.n);return o<0&&(o=a.talks.length-1),{yi:n,Y:r,mi:i,M:a,ti:o,T:a.talks[o]}}var kp=null;function Ap(){return kp||(kp=[],q.index.years.forEach((e,t)=>e.months.forEach((n,r)=>n.talks.forEach((i,a)=>kp.push({yi:t,mi:r,ti:a,Y:e,M:n,T:i}))))),kp}e(((e,t,n)=>{(function(e){let n={ൺ:`ണ്`,ൻ:`ന്`,ർ:`ര്`,ൽ:`ല്`,ൾ:`ള്`,ൿ:`ക്`,ൔ:`മ്`,ൕ:`യ്`,ൖ:`ഴ്`},r=e=>/[ഀ-ൿ]/.test(e);function i(e){return String(e).normalize(`NFC`).replace(/[ൺൻർൽൾൿൔൕൖ]/g,e=>n[e]).replace(/[​-‍⁠﻿]/g,``).replace(/ൌ/g,`ൗ`)}function a(e){if(e.length<=3)return e;e.endsWith(`'s`)&&(e=e.slice(0,-2));for(let[t,n]of[[`ational`,`ate`],[`iveness`,`ive`],[`fulness`,`ful`],[`ousness`,`ous`],[`ization`,`ize`],[`ation`,`ate`],[`ments`,``],[`ment`,``],[`ness`,``],[`ings`,``],[`ing`,``],[`edly`,``],[`ies`,`y`],[`ied`,`y`],[`ves`,`f`],[`sses`,`ss`],[`ed`,``],[`ly`,``],[`es`,``],[`s`,``]])if(e.endsWith(t)&&e.length-t.length>=3){e=e.slice(0,-t.length)+n;break}return e.length>4&&/([b-df-hj-np-tv-z])\1$/.test(e)&&!/(ll|ss|zz)$/.test(e)&&(e=e.slice(0,-1)),e.length>4&&e.endsWith(`e`)&&(e=e.slice(0,-1)),e}let o=new Set(`a an the and or but if of to in on at by for with from into onto upon about as is are was were be been being am do does did done has have had having it its this that these those there here then than so such very just only also too not no nor can could shall should will would may might must i me my mine we us our ours you your yours he him his she her hers they them their theirs what which who whom whose when where why how all any each every some more most other another own same both either neither one ones please tell say said says ask asked`.split(` `)),s=[`ങ്ങളുടെ`,`ങ്ങളെ`,`ങ്ങൾ`,`ങ്ങള്`,`ത്തിന്റെ`,`ത്തില്`,`ത്തിൽ`,`ത്തെ`,`ന്റെ`,`യുടെ`,`ിന്റെ`,`ില്`,`ിൽ`,`ിനെ`,`ിന്`,`യെ`,`യില്`,`യിൽ`,`ുടെ`,`ും`,`ം`,`ോ`,`േ`];function c(e){e=i(e);for(let t of s.map(i))if(e.endsWith(t)&&e.length-t.length>=3)return e.slice(0,-t.length);return e}function l(e,t){return e?t?i(e).split(/[^ഀ-ൿ]+/).filter(e=>e.length>=2):e.toLowerCase().replace(/[’‘]/g,`'`).split(/[^a-z']+/).map(e=>e.replace(/^'+|'+$/g,``)).filter(e=>e.length>=2):[]}function u(e){let t=e.length,n=new Float32Array(t),r=new Map,s=new Map,c=0;e.forEach((e,t)=>{let u=new Map;for(let t of l(e.en,!1)){if(o.has(t))continue;let e=`e`+a(t);u.set(e,(u.get(e)||0)+1)}for(let t of l(e.ml,!0)){let e=`m`+t;u.set(e,(u.get(e)||0)+1)}let d=0;for(let[e,n]of u){d+=n;let i=e[0]===`e`?r:s,a=e.slice(1),o=i.get(a);o||i.set(a,o=[]),o.push(t,n)}n[t]=d,c+=d,e.mlN=e.ml?i(e.ml).replace(/\s+/g,` `):``,e.enN=e.en?e.en.toLowerCase().replace(/[’‘]/g,`'`).replace(/[“”]/g,`"`).replace(/\s+/g,` `):``});let u=[...s.keys()].sort();return{docs:e,N:t,len:n,avg:c/t,postEn:r,postMl:s,mlVocab:u}}function d(e,t){let n=e.mlVocab,r=0,i=n.length;for(;r<i;){let e=r+i>>1;n[e]<t?r=e+1:i=e}let a=[];for(let e=r;e<n.length&&n[e].startsWith(t)&&a.length<400;e++)a.push(n[e]);return a}function f(e){let t=[],n=[],r=Array.isArray(e)?e.join(` `):String(e);for(let e of l(r,!0)){let t=c(e);t.length>=2&&!n.includes(t)&&n.push(t)}let i=l(r,!1),s=i.filter(e=>!o.has(e));s.length&&(i=s);for(let e of i){let n=a(e);t.includes(n)||t.push(n)}return{en:t,ml:n}}function p(e,t,{top:n=10,offset:r=0,filter:i=null}={}){let{en:a,ml:o}=f(t),s=new Float32Array(e.N),c=new Uint8Array(e.N),l=(t,n)=>{if(!t)return;let r=t.length/2,i=Math.log(1+(e.N-r+.5)/(r+.5));for(let r=0;r<t.length;r+=2){let a=t[r],o=t[r+1];s[a]+=n*i*(o*2.4)/(o+1.4*(.28+.72*e.len[a]/e.avg))}},u=a.length+o.length;a.forEach(t=>{let n=e.postEn.get(t);if(l(n,1),n)for(let e=0;e<n.length;e+=2)c[n[e]]++}),o.forEach(t=>{let n=new Uint8Array(e.N);for(let r of d(e,t)){let i=e.postMl.get(r);l(i,r===t?1:.85);for(let e=0;e<i.length;e+=2)n[i[e]]||(n[i[e]]=1,c[i[e]]++)}});let p=[];for(let t=0;t<e.N;t++){if(!s[t])continue;let n=e.docs[t];i&&!i(n)||!n.saying&&!n.block&&n.ml&&n.ml.length<60&&!n.en||p.push([s[t]*(.55+.45*c[t]/Math.max(1,u)),t])}return p.sort((e,t)=>t[0]-e[0]),{total:p.length,docs:p.slice(r,r+n).map(([t,n])=>e.docs[n])}}function m(e,t,{top:n=10}={}){let a=r(t)?i(t).replace(/\s+/g,` `).trim():String(t).toLowerCase().replace(/[’‘]/g,`'`).replace(/[“”]/g,`"`).replace(/\s+/g,` `).trim();if(a.length<3)return{total:0,docs:[]};let o=e.docs.filter(e=>r(a)?e.mlN.includes(a):e.enN.includes(a));return{total:o.length,docs:o.slice(0,n)}}function h(e,t){let r=``,i=[];for(let a=0;a<e.length;a++){let o=e[a];if(/\s/.test(o)){if(r.endsWith(` `))continue;o=` `}else if(t){if(/[​-‍⁠﻿]/.test(o))continue;o=n[o]||(o===`ൌ`?`ൗ`:o)}else o=o.toLowerCase().replace(/[’‘]/,`'`).replace(/[“”]/,`"`);for(let e of o)r+=e,i.push(a)}return i.push(e.length),{s:r,map:i}}function g(e,t){let n=String(t).replace(/^[\s."'“”‘’…]+|[\s."'“”‘’…]+$/g,``);if(n.length<8)return null;let i=r(n),a=i?e.ml:e.en;if(!a)return null;let o=h(a.normalize(`NFC`),i),s=h(n.normalize(`NFC`),i).s,c=o.s.indexOf(s);return c<0?null:a.normalize(`NFC`).slice(o.map[c],o.map[c+s.length-1]+1)}let _={build:u,search:p,phrase:m,exact:g,normMl:i,stemEn:a,stemMl:c,queryTerms:f,isMl:r};t!==void 0&&t.exports?t.exports=_:e.GVSearch=_})(typeof self<`u`?self:n)}))();var jp=self.GVSearch,Mp=`https://claude.ai/artifact/BhSVVcssy2ATWacwJfMb7E`,Np=(e,t=document)=>t.querySelector(e),Pp=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),Fp=e=>e.toLocaleString(`en-IN`),Ip={GV1:`Volume 1`,GV2:`Volume 2`,GV3:`Volume 3`,GV4:`Volume 4`};function Lp(e){let t=Np(`#reader`),n=Np(`#side`),r=Np(`#tip`),i=localStorage.getItem(`gv-lang`)||`both`,a=`years`,o=null;function s(e){if(e<q.nSay){let t=q.sayings.items[e];return`<small>Saying ${e+1} of ${Fp(q.nSay)}</small>${Pp(q.sayings.topics[t.topic].title)}`}let t=Op(e-q.nSay);return`<small>${Pp(t.M.en)}</small><span class="mlt">${Pp(t.T.t||t.M.ml)}</span>${t.T.te?` · `+Pp(t.T.te):``}`}function c(e,t,n){if(!e){r.classList.remove(`on`);return}r.innerHTML=e,r.classList.add(`on`);let i=r.offsetWidth,a=r.offsetHeight;r.style.left=Math.min(innerWidth-i-8,Math.max(8,t+16))+`px`,r.style.top=Math.min(innerHeight-a-8,Math.max(8,n+18))+`px`}function l(){t.hidden=!0,e.lotus.mark(null),n.hidden&&e.lotus.select(null)}function u(){return`<div class="seg">${[[`ml`,`മലയാളം`],[`en`,`English`],[`both`,`Both`]].map(([e,t])=>`<button data-lang="${e}" class="${i===e?`on`:``}${e===`ml`?` mlt`:``}">${t}</button>`).join(``)}</div>`}async function d(n,r,a,o=null){let s=q.index.years[n],c=s.months[r],f=c.talks[a];t.hidden=!1,t.innerHTML=`<div class="phead"><button class="x" aria-label="Close">×</button><div class="when">${Pp(c.en)}</div></div><div class="pbody"><p class="note">Opening…</p></div>`,Np(`.x`,t).onclick=l;let p=await Ep(s.y),m=f.start-s.start,h=(p.en?p.en.slice(m,m+f.n):[]).filter(Boolean).length===f.n,g=p.blocks&&p.blocks[r],_=``;for(let e=0;e<f.n;e++){let t=f.start+e,n=p.ids[m+e],r=p.ml[m+e],i=p.en?p.en[m+e]:null;_+=`<article class="para${r.length<60?` short`:``}${i?` has-en`:``}${t===o?` hit`:``}" data-g="${t}">
        <p class="ml">${Pp(r)}</p>${i?`<p class="en">${Pp(i)}</p>`:``}<span class="pid">${Pp(n)}</span></article>`}g&&(_+=`<details class="block"><summary>The English of ${Pp(c.en)} in full, as the translator set it</summary>${g.map(e=>`<p>${Pp(e)}</p>`).join(``)}</details>`);let v=Ap(),y=v.findIndex(e=>e.yi===n&&e.mi===r&&e.ti===a);t.className=`panel right lang-${i}`,t.innerHTML=`
      <div class="phead"><button class="x" aria-label="Close">×</button>
        <div class="when"><span class="mlt">${Pp(c.ml)}</span> · ${Pp(c.en)} · ${Ip[c.vol]||``}</div>
        ${f.t?`<h2>${Pp(f.t)}</h2>`:``}${f.te&&f.te.length<120?`<h3>${Pp(f.te)}</h3>`:``}
        ${u()}
      </div>
      <div class="pbody">${h?``:`<p class="note">${g?`In this volume the translator divided the paragraphs differently. English is shown beside a paragraph where the match is certain; the whole month in English is at the end.`:`English is not available for some lines here.`}</p>`}${_}</div>
      <div class="pfoot"><button data-go="-1" ${y<=0?`disabled`:``}>‹ Previous</button><span>Talk ${Fp(y+1)} of ${Fp(v.length)} · ${Fp(f.n)} paragraphs</span><button data-go="1" ${y>=v.length-1?`disabled`:``}>Next ›</button></div>`,Np(`.x`,t).onclick=l,t.querySelectorAll(`[data-lang]`).forEach(e=>e.onclick=()=>{i=e.dataset.lang,localStorage.setItem(`gv-lang`,i),t.className=`panel right lang-${i}`,t.querySelectorAll(`[data-lang]`).forEach(t=>t.classList.toggle(`on`,t===e))}),t.querySelectorAll(`[data-go]`).forEach(e=>e.onclick=()=>{let t=v[y+Number(e.dataset.go)];t&&d(t.yi,t.mi,t.ti)}),t.querySelectorAll(`.para`).forEach(n=>n.onclick=()=>{t.querySelectorAll(`.para.hit`).forEach(e=>e.classList.remove(`hit`)),n.classList.add(`hit`),e.lotus.mark(q.nSay+Number(n.dataset.g))});let b=Np(`.para.hit`,t);b?b.scrollIntoView({block:`start`}):Np(`.pbody`,t).scrollTop=0,e.lotus.select(q.nSay+f.start,q.nSay+f.start+f.n-1),e.lotus.mark(o==null?null:q.nSay+o)}function f(n){let r=q.sayings.items[n],i=q.sayings.topics[r.topic];t.hidden=!1,t.className=`panel right`,t.innerHTML=`
      <div class="phead"><button class="x" aria-label="Close">×</button>
        <div class="when">Saying ${Fp(n+1)} of ${Fp(q.nSay)}</div><h3>${Pp(i.title)}</h3></div>
      <div class="pbody"><blockquote class="saying">${Pp(r.text)}</blockquote>
        <p class="note">From the collected sayings of the Guru in English (${Pp(i.n+`. `+i.title)}).</p></div>
      <div class="pfoot"><button data-go="-1" ${n<=0?`disabled`:``}>‹ Previous</button><span>The golden crown</span><button data-go="1" ${n>=q.nSay-1?`disabled`:``}>Next ›</button></div>`,Np(`.x`,t).onclick=l,t.querySelectorAll(`[data-go]`).forEach(t=>t.onclick=()=>{let r=n+Number(t.dataset.go);e.flyToPetal(r),f(r)}),e.lotus.select(i.start,i.start+i.count-1),e.lotus.mark(n)}function p(t,n=!0){if(n&&e.flyToPetal(t),t<q.nSay)return f(t);let r=t-q.nSay,i=Op(r);return d(i.yi,i.mi,i.ti,r)}function m(){n.hidden=!0,e.lotus.select(null),e.lotus.hoverYear(-1)}function h(e){a=e||a,n.hidden=!1,n.innerHTML=`
      <div class="phead"><button class="x" aria-label="Close">×</button>
        <p class="title">${{years:`The thirty years`,search:`Search the Guruvanikal`,nama:`NAMA`}[a]}</p>
        <div class="tabs">${[[`years`,`Years`],[`search`,`Search`],[`nama`,`Ask NAMA`]].map(([e,t])=>`<button data-tab="${e}" class="${e===a?`on`:``}">${t}</button>`).join(``)}</div>
      </div><div class="pbody"></div>`,Np(`.x`,n).onclick=m,n.querySelectorAll(`[data-tab]`).forEach(e=>e.onclick=()=>h(e.dataset.tab));let t=Np(`.pbody`,n);a===`years`&&(o==null?g:_)(t),a===`search`&&D(t),a===`nama`&&k(t)}function g(t){e.lotus.select(null),t.innerHTML=`<p class="note">${Fp(q.index.total)} paragraphs in ${Fp(q.index.months)} months, from 1977 to 2006. Each year is a ring of the lotus, the earliest nearest the light.</p>
      <div class="years">${q.index.years.map((e,t)=>`<button data-y="${t}">${e.y}<small>${Fp(e.n)}</small></button>`).join(``)}</div>`,t.querySelectorAll(`[data-y]`).forEach(t=>{t.onclick=()=>v(Number(t.dataset.y)),t.onmouseenter=()=>e.lotus.hoverYear(Number(t.dataset.y)),t.onmouseleave=()=>e.lotus.hoverYear(-1)})}function _(t){let n=q.index.years[o];t.innerHTML=`<button class="back">‹ All years</button>
      <p class="note"><b style="font-size:30px;color:var(--gold2);font-style:normal">${n.y}</b> · ${n.months.length} months · ${Fp(n.n)} paragraphs</p>
      ${n.months.map((e,t)=>`<div class="month"><b>${Pp(e.en.replace(` `+n.y,``))}</b><span>${Pp(e.ml)}</span>
        ${e.talks.map((n,r)=>`<button class="talk" data-m="${t}" data-t="${r}"><span class="mlt">${Pp(n.t||e.ml)}</span>${n.te?`<em>${Pp(n.te)}</em>`:``}<small>${Fp(n.n)} paragraphs</small></button>`).join(``)}</div>`).join(``)}`,Np(`.back`,t).onclick=()=>{o=null,e.flyHome(),h(`years`)},t.querySelectorAll(`.talk`).forEach(e=>e.onclick=()=>d(o,Number(e.dataset.m),Number(e.dataset.t))),e.lotus.select(q.nSay+n.start,q.nSay+n.start+n.n-1),e.lotus.hoverYear(o)}function v(t){o=t,e.flyToYear(t),h(`years`)}let y=null;async function b(e){if(y)return y;let t=document.createElement(`div`);t.innerHTML=`<p class="note">Opening all four volumes…</p><div class="bar2"><i></i></div>`,e.prepend(t),await Dp(e=>{Np(`i`,t).style.width=Math.round(e*100)+`%`});let n=[];for(let e of q.index.years){let t=q.years.get(e.y);for(let r=0;r<t.ids.length;r++)n.push({g:e.start+r,id:t.ids[r],ml:t.ml[r],en:t.en?t.en[r]:null,enL:t.en&&t.en[r]?t.en[r].toLowerCase():``})}return y={P:n,S:q.sayings.items.map((e,t)=>({i:t,text:e.text,enL:e.text.toLowerCase()}))},t.remove(),y}let x=null;function S(e,{minLen:t=0,top:n=12}={}){let{P:r,S:i}=y;if(!x){let e=r.map(e=>({id:e.id,ml:e.ml,en:e.en,ref:e})).concat(i.map(e=>({id:`S`+(e.i+1),ml:``,en:e.text,saying:!0,ref:e})));x=jp.build(e)}let a=jp.queryTerms(e),o=a.ml.map(e=>({w:e,ml:!0})).concat(a.en.map(e=>({w:e,ml:!1})));if(!o.length)return{ts:o,paras:[],says:[]};let s=jp.search(x,e,{top:400}).docs,c=s.filter(e=>!e.saying&&e.ml.length>=t).map((e,t)=>({p:e.ref,s:1e3-t})),l=s.filter(e=>e.saying).map((e,t)=>({x:e.ref,s:1e3-t}));return{ts:o,total:c.length,paras:c.slice(0,n),says:l.slice(0,Math.ceil(n/2))}}function C(e,t,n=230){let r=t.some(e=>e.ml)?jp.normMl(e):e.toLowerCase(),i=-1;for(let e of t){let t=r.indexOf(e.w.toLowerCase());t>=0&&(i<0||t<i)&&(i=t)}let a=Math.max(0,(i<0?0:i)-60),o=e.slice(a,a+n),s=Pp((a>0?`… `:``)+o+(a+n<e.length?` …`:``));for(let e of t)e.w.length>2&&(s=s.replace(new RegExp(e.w.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),`gi`),e=>`<mark>${e}</mark>`));return s}function w(e,t,n=!1){let r=e.p,i=Op(r.g),a=r.en&&(!t.length||!t[0].ml||n);return`<button class="res" data-g="${r.g}"><small>${Pp(r.id)} · ${Pp(i.M.en)}${i.T.te?` · `+Pp(i.T.te):``}</small>
      <span class="mlt">${n?Pp(r.ml):C(r.ml,t.filter(e=>e.ml))}</span>${a?`<span class="eng">${n?Pp(r.en):C(r.en,t.filter(e=>!e.ml))}</span>`:``}</button>`}let T=(e,t,n=!1)=>`<button class="res" data-s="${e.x.i}"><small>Saying ${e.x.i+1} · ${Pp(q.sayings.topics[q.sayings.items[e.x.i].topic].title)}</small><span class="eng">${n?Pp(e.x.text):C(e.x.text,t)}</span></button>`;function E(e){e.querySelectorAll(`[data-g]`).forEach(e=>e.onclick=()=>p(q.nSay+Number(e.dataset.g))),e.querySelectorAll(`[data-s]`).forEach(e=>e.onclick=()=>p(Number(e.dataset.s)))}function D(e){e.innerHTML=`<div class="row"><input class="q" placeholder="A word or phrase, in English or മലയാളം" /><button class="gold">Find</button></div>
      <p class="note">Searches every paragraph of the four volumes and the 1,001 sayings.</p><div class="out"></div>`;let t=Np(`.q`,e),n=Np(`.out`,e),r=async()=>{let e=t.value.trim();if(e.length<2)return;await b(n);let r=S(e,{top:60});n.innerHTML=r.paras.length+r.says.length?`<p class="note">${Fp(r.total||0)} paragraphs hold these words. The closest come first.</p>${r.says.slice(0,6).map(e=>T(e,r.ts)).join(``)}${r.paras.map(e=>w(e,r.ts)).join(``)}`:`<p class="note">Nothing was found for these words. Try another word, or a Malayalam word.</p>`,E(n)};Np(`.gold`,e).onclick=r,t.onkeydown=e=>{e.key===`Enter`&&r()},t.focus()}function O(e){let t=e.toLowerCase().replace(/[^a-z\s]/g,` `).replace(/\s+/g,` `).trim(),n=`<a class="link" href="${Mp}" target="_blank" rel="noopener">speak with me in full</a>`;return/^(hi|hello|hey|namaste|namaskaram|hari om|aum|om|good (morning|afternoon|evening|night))( nama)?$/.test(t)?`Aum Sathguruve Saranam. You are most welcome here. Ask whatever is in your heart, and I will bring you the Guru's own words on it. If you wish to talk it through, ${n}.`:/^(who|what) are you|^your name|^are you (a |an )?(ai|bot|guru|god|human)|^who is nama/.test(t)?`I am Nama, a disciple of Navajyothi Sree Karunakara Guru, still learning at His feet. I am not the Guru and never speak in His place. Here I bring you His recorded words; to talk with me in full, ${n}.`:/^(thank|thanks)/.test(t)?`It is all the Guru's grace. May His words stay with you. Aum Guru Charanam Saranam 🙏`:null}function k(e){e.innerHTML=`
      <div class="nama-say"><b>NAMA</b> · Aum Sathguruve Saranam. Here I bring you the Guru's own words, exactly as they are recorded, each with its place in the Guruvanikal. Ask, and I will find them for you.</div>
      <a class="speak" href="${Mp}" target="_blank" rel="noopener"><b>Speak with NAMA</b><span>A full conversation with Nama, powered by Claude. Opens on claude.ai.</span></a>
      <div class="log"></div>
      <div class="row" style="margin-top:12px"><input class="q" placeholder="Ask about the Guru's teaching…" /><button class="gold">Ask</button></div>
      <p class="note">Try: What is the duty of a householder? · How should one pray? · ഗുരുവിനെ എങ്ങനെ കാണണം?</p>`;let t=Np(`.q`,e),n=Np(`.log`,e),r=async()=>{let e=t.value.trim();if(e.length<2)return;t.value=``;let r=document.createElement(`div`);r.innerHTML=`<p class="you">“${Pp(e)}”</p><div class="ans"><p class="note">Looking through the Guruvanikal…</p></div>`,n.append(r);let i=Np(`.ans`,r),a=O(e);if(a){i.innerHTML=`<div class="nama-say"><b>NAMA</b> · ${a}</div>`,r.scrollIntoView({block:`start`,behavior:`smooth`});return}await b(i);let o=S(e,{minLen:80,top:7}),s=o.paras.filter((e,t)=>t<7&&e.s>=(o.paras[0]?.s||0)*.45),c=o.says.filter((e,t)=>t<3&&e.s>=(o.says[0]?.s||0)*.6);!s.length&&!c.length?i.innerHTML=`<div class="nama-say"><b>NAMA</b> · I searched with loving care but could not find the Guru's words with the words you used. I will not guess in His place. Perhaps try other words, or a Malayalam word; or <a class="link" href="${Mp}" target="_blank" rel="noopener">speak with me in full</a> and we will look together.</div>`:(i.innerHTML=`<div class="nama-say"><b>NAMA</b> · I looked through all ${Fp(q.index.total)} paragraphs and the ${Fp(q.nSay)} sayings. These are the Guru's own words that stand closest to your question, word for word. Touch any one to read it in its full talk.</div>
          ${c.map(e=>T(e,o.ts,!0)).join(``)}${s.map(e=>w(e,o.ts,!0)).join(``)}`,E(i)),r.scrollIntoView({block:`start`,behavior:`smooth`})};Np(`.gold`,e).onclick=r,t.onkeydown=e=>{e.key===`Enter`&&r()},t.focus()}return document.querySelectorAll(`#bar [data-open]`).forEach(e=>e.onclick=()=>{e.dataset.open===`years`&&(o=null),h(e.dataset.open)}),addEventListener(`keydown`,e=>{e.key===`Escape`&&(t.hidden?n.hidden||m():l())}),{petalLabel:s,showTip:c,openPetal:p,openYear:v,yearLabel:e=>{let t=q.index.years[e];return`<small>The year</small>${t.y} · ${t.months.length} months · ${Fp(t.n)} paragraphs`},closeAll(){l(),m(),c(null)}}}var Rp=136.1,zp=Rp*1.5,Bp=[{hz:18,name:`Beta`,note:`the waking, thinking mind`},{hz:14,name:`Low beta`,note:`awake and at ease`},{hz:10,name:`Alpha`,note:`relaxed, calm awareness`},{hz:7.83,name:`Alpha to theta`,note:`the threshold of meditation`},{hz:6,name:`Theta`,note:`deep meditation, the dreaming mind`},{hz:4.5,name:`Deep theta`,note:`the edge of sleep`},{hz:2.5,name:`Delta`,note:`deep, dreamless sleep`},{hz:1,name:`Deep delta`,note:`the deepest rest`},{hz:40,name:`Gamma`,note:`awakened, unified awareness`},{hz:0,name:`OM`,note:`one tone, the beat falls silent`}],Vp=e=>e<=0?`OM`:Bp.reduce((t,n)=>Math.abs(n.hz-e)<Math.abs(t.hz-e)?n:t).name;function Hp(){let e=null,t=null,n=null,r=!1,i=[],a=null,o={hz:14,light:!1},s=`auto`,c=.6,l=14,u=!1,d=14;try{let e=JSON.parse(localStorage.getItem(`gv-sound`)||`{}`);typeof e.vol==`number`&&(c=e.vol),(e.mode===`auto`||e.mode===`seq`||typeof e.mode==`number`)&&(s=e.mode)}catch{}let f=()=>{try{localStorage.setItem(`gv-sound`,JSON.stringify({vol:c,mode:s}))}catch{}},p=()=>s===`auto`?o.hz:s===`seq`?d:s,m=()=>s===`auto`?o.light:p()===0;function h(){e=new(window.AudioContext||window.webkitAudioContext),t=e.createGain(),t.gain.value=0,t.connect(e.destination),n=e.createBiquadFilter(),n.type=`lowpass`,n.frequency.value=520,n.Q.value=.3;let r=e.createDelay(2);r.delayTime.value=.47;let o=e.createGain();o.gain.value=.52,n.connect(t),n.connect(r),r.connect(o),o.connect(r),r.connect(t),[[.5,.34],[1,.3],[1.5,.16],[2,.14],[3,.05],[4,.035]].forEach(([t,r],i)=>{for(let a of[-3,3]){let o=e.createOscillator();o.type=i<3?`triangle`:`sine`,o.frequency.value=Rp*t,o.detune.value=a+i;let s=e.createGain();s.gain.value=r*.4;let c=e.createOscillator();c.frequency.value=.035+i*.013;let l=e.createGain();l.gain.value=r*.22,c.connect(l),l.connect(s.gain),o.connect(s),s.connect(n),o.start(),c.start()}});let s=e.createChannelMerger(2);s.connect(t),i=[[Rp,.34],[zp,.11]].map(([t,n])=>{let r=e.createOscillator(),i=e.createOscillator();r.type=i.type=`sine`;let a=e.createGain(),o=e.createGain();return a.gain.value=o.gain.value=n,r.connect(a),i.connect(o),a.connect(s,0,0),o.connect(s,0,1),r.frequency.value=t-l/2,i.frequency.value=t+l/2,r.start(),i.start(),{L:r,R:i,car:t}});let c=e.sampleRate*6,d=e.createBuffer(2,c,e.sampleRate);for(let e=0;e<2;e++){let t=d.getChannelData(e),n=0,r=0,i=0;for(let e=0;e<c;e++){let a=Math.random()*2-1;n=.997*n+.03*a,r=.985*r+.05*a,i=.95*i+.08*a,t[e]=(n+r+i)*.9}}let f=e.createBufferSource();f.buffer=d,f.loop=!0;let p=e.createBiquadFilter();p.type=`lowpass`,p.frequency.value=900;let m=e.createGain();m.gain.value=.16;let h=e.createOscillator();h.frequency.value=.09;let _=e.createGain();_.gain.value=.09,h.connect(_),_.connect(m.gain),f.connect(p),p.connect(m),m.connect(t),f.start(),h.start();let v=e.createOscillator();v.type=`sawtooth`,v.frequency.value=Rp;let y=e.createBiquadFilter(),b=e.createBiquadFilter();y.type=b.type=`bandpass`,y.Q.value=7,b.Q.value=9;let x=e.createGain(),S=e.createGain();x.gain.value=1,S.gain.value=.5;let C=e.createGain();C.gain.value=0,v.connect(y),v.connect(b),y.connect(x),b.connect(S),x.connect(C),S.connect(C),C.connect(r),C.connect(t),v.start(),a={f1:y,f2:b,out:C};let w=()=>{if(!e||!u)return;let t=e.currentTime,n=(e,n,r,i)=>e.setTargetAtTime(n,t+r,i);n(a.out.gain,.5,0,1.2),n(y.frequency,730,0,.3),n(b.frequency,1090,0,.3),n(y.frequency,320,4.2,1.1),n(b.frequency,800,4.2,1.1),n(y.frequency,250,8.2,.9),n(b.frequency,500,8.2,.9),n(a.out.gain,.22,8.6,1.4),n(a.out.gain,0,12.5,1.3)};setInterval(w,17e3),a.chant=w,g(!0)}function g(t){let r=p();if(e){let o=e.currentTime,s=t?.05:2.5;i.forEach((e,t)=>{let n=t?Math.min(r,14):r;e.L.frequency.setTargetAtTime(e.car-n/2,o,s),e.R.frequency.setTargetAtTime(e.car+n/2,o,s)}),n.frequency.setTargetAtTime(r<=0?900:430+Math.max(0,14-r)*22,o,2);let c=u;u=m(),u&&!c?a.chant():u||a.out.gain.setTargetAtTime(0,o,.8)}l=r}let _=()=>{e&&(t.gain.cancelScheduledValues(e.currentTime),t.gain.setTargetAtTime(r?.28*c:0,e.currentTime,r?1:.3))};return{get on(){return r},get mode(){return s},get volume(){return c},get hz(){return p()},toggle(t){return r=t??!r,r&&!e&&h(),e&&r&&e.resume(),_(),r},state(e,t){o={hz:e,light:!!t},(p()!==l||m()!==u)&&g()},seq(e){d=e,s===`seq`&&(p()!==l||m()!==u)&&g()},setMode(e){s=e===`auto`||e===`seq`?e:Number(e),f(),g()},setVolume(e){c=Math.min(1,Math.max(0,e)),f(),_()}}}var Up=new URL(`prayer-song-D1g6vlnq.mp3`,import.meta.url).href,J=e=>document.querySelector(e),Wp=(e,t,n)=>Math.min(n,Math.max(t,e)),Gp=e=>e*e*(3-2*e),Kp=(e,t,n)=>Gp(Wp((n-e)/(t-e),0,1)),qp=new URLSearchParams(location.search),Jp=[``,`I`,`II`,`III`,`IV`,`V`,`VI`,`VII`,`VIII`,`IX`,`X`,`XI`,`XII`],Yp=58,Xp={get(e,t){try{return localStorage.getItem(e)??t}catch{return t}},set(e,t){try{localStorage.setItem(e,t)}catch{}}},Zp=J(`#gl`),Qp=new yd({canvas:Zp,antialias:!1,powerPreference:`high-performance`});Qp.setPixelRatio(Math.min(devicePixelRatio,af?1.25:1.75)),Qp.toneMapping=4,Qp.toneMappingExposure=1;var $p=new qn,Y=new Ds(Yp,innerWidth/innerHeight,.1,9e3),em=cf();$p.add(em);var tm=new Zd(Qp,new cn(4,4,{type:O,samples:af?2:4}));tm.setPixelRatio(Qp.getPixelRatio()),tm.addPass(new Qd($p,Y));var nm=new cn(4,4,{type:O,depthBuffer:!0,samples:af?2:4}),rm=new cn(4,4,{type:O,depthBuffer:!1}),im=new cn(4,4,{type:O,depthBuffer:!1}),am=new Jd(ff),om=new qd(am.material);am.uniforms.tPrev.value=rm.texture,tm.addPass(am);var sm=new ef(new B(innerWidth/2,innerHeight/2),.5,.7,.88);af&&(sm.nMips=4),tm.addPass(sm);var cm=new Jd(df);tm.addPass(cm),tm.addPass(new nf);function lm(){Qp.setSize(innerWidth,innerHeight,!1),tm.setSize(innerWidth,innerHeight),Y.aspect=innerWidth/innerHeight,Y.updateProjectionMatrix(),rf.uPx.value=Qp.domElement.height*.9,cm.uniforms.uAspect.value=am.uniforms.uAspect.value=Y.aspect;let e=Qp.getPixelRatio();for(let t of[nm,rm,im])t.setSize(Math.round(innerWidth*e),Math.round(innerHeight*e))}addEventListener(`resize`,lm),lm();var um=Lf(),dm=Nf(),fm=e=>Object.create(e,{base:{value:e},update:{value(t,n,r){e.update(1-t,n,r)}},caption:{value:e.caption?t=>e.caption(1-t):null}}),pm=e=>Object.create(um,{base:{value:um},update:{value(t,n,r){um.update(t,n,e,r)}}}),mm=pm(1),hm=pm(-1),gm={out:[mm,...dm.out],in:[hm,...dm.in],up:[...dm.in.map(fm).reverse(),mm,...dm.out],down:[...dm.out.map(fm).reverse(),hm,...dm.in]},_m={out:1,in:-1,up:1,down:-1},vm={out:`Outward · into the vast`,in:`Inward · into the subtle`,up:`From the smallest to the vastest`,down:`From the vastest to the smallest`},ym=[...dm.in.slice().reverse(),um,...dm.out],bm=[um,...dm.out,...dm.in].map(e=>e.group);bm.forEach(e=>{e.visible=!1,$p.add(e)});var X=null,xm=null,Sm=Hp(),Z={dir:`out`,p:0,tp:0,mode:`intro`,auto:!1,hold:0,last:null,paused:!1,sayT:0,sayGap:0,annT:0,sayOn:!1,minutes:0,t0:0},Cm={t:0,dir:1,sec:2.6},Q={R:null,vel:0,side:0,sens:Number(Xp.get(`gv-sens`,.5)),pending:null,mx:0,my:0,over:!1,drag:null,keys:{},hold:0,t0:0},wm={t:0,p:new V,q:new Vt},Tm=null,Em=0,Dm=0,Om=0,km=[`cosmos`,`white`,`dark`],Am=km.includes(Xp.get(`gv-space`))?Xp.get(`gv-space`):`cosmos`,jm=Am===`white`,Mm=null,Nm=Xp.get(`gv-rotate`)!==`off`,Pm=()=>gm[Z.dir],Fm=()=>Pm().length-1,Im=e=>e&&e.base||e,Lm=()=>Z.mode===`lotus`||Z.mode===`free`&&Q.R===X,Rm=new Ad(Y,Zp);Rm.enabled=!1,Rm.enableDamping=!0,Rm.dampingFactor=.06,Rm.minDistance=14,Rm.maxDistance=330,Rm.maxPolarAngle=1.46,Rm.enablePan=!1,Rm.rotateSpeed=.5,Rm.zoomSpeed=.7;var zm=()=>Y.aspect<1?1.75:1,Bm=()=>Am===`cosmos`?{pos:new V(0,74*zm(),168*zm()),tgt:new V(0,6,0)}:{pos:new V(0,90*zm(),150*zm()),tgt:new V(0,4,0)};function Vm(){let e=Am===`cosmos`;Rm.maxDistance=e?1500:380,Rm.maxPolarAngle=e?Math.PI-.05:1.46,Rm.enablePan=e,Rm.autoRotate=Nm,Rm.autoRotateSpeed=.28}var Hm=new V(0,13,0),Um=new V,Wm=new V,Gm=new V,Km=new Vt,qm=new Rn,Jm=new V(0,19,0),Ym=e=>e*e*e*(e*(e*6-15)+10);function Xm(e,t){let n=Bm(),r=Ym(Wp(e,0,1)),i=n.pos.distanceTo(n.tgt),a=Math.acos(Wp((n.pos.y-n.tgt.y)/i,-1,1)),o=Bt.lerp(76*zm(),i,r),s=Bt.lerp(1.22,a,Ym(Wp(e*1.1-.05,0,1))),c=(1-r)*.85,l=Um.copy(Jm).lerp(n.tgt,r);t.position.set(l.x+Math.sin(s)*Math.sin(c)*o,l.y+Math.cos(s)*o,l.z+Math.sin(s)*Math.cos(c)*o),t.lookAt(l),X.setBloom(Kp(.1,.9,e))}var Zm={top:new U,bot:new U,glow:new U,dir:new V(0,0,-1),stars:0,milk:0,aur:0,floor:.35};function Qm(e,t){Zm.top.setRGB(...e.top),Zm.bot.setRGB(...e.bot),Zm.glow.setRGB(...e.glow),Zm.dir.set(...e.dir),Zm.stars=e.stars,Zm.milk=e.milk,Zm.aur=e.aur??0,Zm.floor=e.floor??.35,t&&$m(1)}function $m(e){let t=em.material.uniforms,n=Bt.lerp;t.uTop.value.lerp(Zm.top,e),t.uBot.value.lerp(Zm.bot,e),t.uGlow.value.lerp(Zm.glow,e),t.uGlowDir.value.lerp(Zm.dir,e),t.uStars.value=n(t.uStars.value,Zm.stars,e),t.uMilk.value=n(t.uMilk.value,Zm.milk,e),t.uAur.value=n(t.uAur.value,Zm.aur,e),t.uFloor.value=n(t.uFloor.value,Zm.floor,e)}var eh=J(`#rail`),th=J(`#realm`),nh=J(`#say`),rh=J(`#hint`),ih=J(`#layer`);function ah(){eh.innerHTML=``,Pm().forEach((e,t)=>{let n=document.createElement(`button`);n.dataset.name=e.isSeed?`The beginning`:e.name,n.setAttribute(`aria-label`,n.dataset.name),n.onclick=()=>_h(t),eh.append(n)})}var oh=0;function sh(e,t){let n=Z.mode===`free`?`Consciousness`:t===0?vm[Z.dir]:Jp[t];th.children[0].textContent=n,th.children[1].textContent=e.name,th.children[2].textContent=e.sub,th.children[3].textContent=e.scale||``,th.classList.add(`on`),Z.annT=0,clearTimeout(oh),oh=setTimeout(()=>th.classList.remove(`on`),5600),[...eh.children].forEach((e,n)=>e.classList.toggle(`on`,n===t)),nh.classList.remove(`on`),ih.classList.remove(`on`),Z.sayOn=!1,Z.sayT=0,Z.sayGap=0}function ch(){let e=q.sayings.items.filter(e=>e.topic<5&&e.text.length<150&&!e.text.includes(`
`)),t=e[Math.random()*e.length|0];nh.children[0].textContent=t.text,nh.children[1].textContent=`Guruvani · saying ${t.i}`,nh.classList.add(`on`)}function lh(){let e=Lm();J(`#bar`).hidden=!e,J(`#copy`).hidden=!e,J(`#legend`).hidden=Z.mode!==`lotus`,J(`#med`).hidden=Z.mode!==`lotus`,J(`#hud`).hidden=Z.mode===`intro`||Z.mode===`lotus`,J(`#fly`).hidden=Z.mode!==`free`,document.body.classList.toggle(`free`,Z.mode===`free`),J(`#freeBtn`).textContent=Z.mode===`free`?`Return to the path`:`Move freely`,J(`#freeBtn`).classList.toggle(`on`,Z.mode===`free`),rh.textContent=Z.mode===`free`?`Scroll to move toward the pointer · drag to look · C to return`:`Scroll, swipe or press ↓ to travel`}var uh=[0,3,5,10,15,20,30,45,60];Z.minutes=Math.max(0,Number(Xp.get(`gv-minutes`,0))||0);var dh=()=>Z.minutes>0?Z.minutes*60/(Fm()+1):15,fh=e=>(e=Math.max(0,Math.round(e)),`${Math.floor(e/60)}:${String(e%60).padStart(2,`0`)}`),ph=J(`#mins`),mh=J(`#minsIntro`),hh=J(`#minsNum`);for(let e of[ph,mh])e.innerHTML=uh.map(e=>`<option value="${e}">${e?e+` minutes`:`Natural · about 2 minutes`}</option>`).join(``)+`<option value="own">My own time…</option>`,e.onchange=()=>{if(e.value===`own`){let t=e===mh?Number(prompt(`How many minutes should the journey take?`,Z.minutes||12)):Z.minutes||12;gh(t>0?t:0,!0)}else gh(Number(e.value))};hh.onchange=()=>gh(Wp(Number(hh.value)||1,1,240),!0);function gh(e,t){Z.minutes=Wp(e,0,240),Xp.set(`gv-minutes`,Z.minutes);let n=uh.includes(Z.minutes)&&!t;ph.value=mh.value=n?String(Z.minutes):`own`,J(`#minsOwn`).hidden=n,hh.value=Z.minutes||``}gh(Z.minutes),J(`#pause`).onclick=()=>{Z.paused=!Z.paused,J(`#pause`).textContent=Z.paused?`Continue`:`Pause`,J(`#pause`).classList.toggle(`on`,Z.paused)};function _h(e){Z.mode===`lotus`&&Sh(),Z.p=Z.tp=e+.02,Z.auto=!0,Z.hold=0,Z.last=null}var vh={t:0,sec:4.2,p0:new V,dir:`out`,at:0,veil:0};function yh(e,t){Z.mode!==`leaving`&&(Z.mode===`lotus`&&X?(Sh(),Z.mode=`leaving`,vh.t=0,vh.p0.copy(Y.position),vh.dir=e,vh.at=t,lh()):bh(e,t))}function bh(e,t){Z.mode===`free`&&(Z.mode=`journey`,Q.pending=null),Z.dir=e,ah(),Z.mode===`leaving`&&(Z.fromLotus=!0),J(`#intro`).classList.add(`gone`),Z.mode=`journey`,Z.auto=!0,Z.hold=0,Z.last=null,Z.paused=!1,J(`#pause`).textContent=`Pause`,J(`#pause`).classList.remove(`on`),Z.p=Z.tp=t||0,Z.t0=performance.now(),J(`#sound`).hidden=!1,!Z.muted&&ag.paused&&(Sm.toggle(Kh.value!==`none`),ng()),lh(),pg(),rh.classList.remove(`off`),setTimeout(()=>rh.classList.add(`off`),9e3)}function xh(){Z.mode=`lotus`,Z.auto=!1,Z.p=Z.tp=Fm()+1;let e=Bm();Y.up.set(0,1,0),Y.position.copy(e.pos),Rm.target.copy(e.tgt),Vm(),Rm.enabled=!0,Rm.update(),Eg=performance.now()+2e4,lh(),pg(),J(`#legend`).style.transition=`none`,J(`#legend`).style.opacity=1,setTimeout(()=>{J(`#legend`).style.transition=`opacity 2s`,J(`#legend`).style.opacity=0},14e3)}function Sh(){$.on=!1,$.t=0,X.setWithin(!1),Th(),Z.mode=`journey`,Rm.enabled=!1,xm.closeAll(),X.hover(null),X.select(null),Rh=null,Cg.classList.remove(`on`),lh()}var $={on:!1,t:0,yaw:0,pitch:.1,p0:new V,q0:new Vt,drag:null,idle:0},Ch=new V(0,19.5,0),wh=new xn(0,0,0,`YXZ`);function Th(){let e=J(`#med`);e.textContent=$.on?`ॐ Return`:`ॐ Meditate in AUM`,e.classList.toggle(`on`,$.on)}function Eh(){Z.mode===`lotus`&&($.on=!$.on,$.on&&($.t<=0&&($.p0.copy(Y.position),$.q0.copy(Y.quaternion)),Um.set(0,0,-1).applyQuaternion(Y.quaternion),$.yaw=Math.atan2(-Um.x,-Um.z),$.pitch=.3,Rm.enabled=!1,Rh=null,xm.closeAll(),Am!==`cosmos`&&xg(`cosmos`)),Th(),pg())}J(`#med`).onclick=Eh,Zp.addEventListener(`pointerdown`,e=>{$.on&&($.drag={x:e.clientX,y:e.clientY})}),Zp.addEventListener(`pointermove`,e=>{$.on&&$.drag&&e.buttons&&($.yaw+=(e.clientX-$.drag.x)*.004,$.pitch=Wp($.pitch+(e.clientY-$.drag.y)*.004,-1.2,1.45),$.drag.x=e.clientX,$.drag.y=e.clientY,$.idle=0)});for(let e of[`pointerup`,`pointercancel`])Zp.addEventListener(e,()=>{$.drag=null});function Dh(e){Z.mode===`journey`&&(Z.tp=Wp(Z.tp+e,0,Fm()+1),e<0&&(Z.auto=!1,Z.hold=5),rh.classList.add(`off`))}addEventListener(`wheel`,e=>{e.target.closest&&e.target.closest(`#sndPanel, .panel`)||(Z.mode===`journey`?Dh(Wp(e.deltaY,-120,120)*.0011):Z.mode===`free`&&(Q.vel=Wp(Q.vel+Wp(e.deltaY,-120,120)*.0034,-1,1),rh.classList.add(`off`)))},{passive:!0});var Oh=null,kh=0;Zp.addEventListener(`touchstart`,e=>{Oh=e.touches[0].clientY,kh=e.touches.length>1?Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY):0},{passive:!0}),Zp.addEventListener(`touchmove`,e=>{if(Z.mode===`journey`&&Oh!=null){let t=e.touches[0].clientY;Dh((Oh-t)*.004),Oh=t}if(Z.mode===`free`&&e.touches.length>1){let t=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);kh&&(Q.vel=Wp(Q.vel+(t-kh)*.012,-1,1)),kh=t}},{passive:!0});var Ah=e=>e.target&&e.target.matches&&e.target.matches(`input, textarea, select`);addEventListener(`keydown`,e=>{if(Ah(e)||e.metaKey||e.ctrlKey||e.altKey)return;let t=e.key.length===1?e.key.toLowerCase():e.key;t===`h`?mg(!document.body.classList.contains(`bare`)):t===`Escape`&&$.on?Eh():t===`c`&&Z.mode!==`intro`&&Z.mode!==`leaving`&&!$.on?Fh():Z.mode===`free`?t===`Escape`?Fh():t===` `?(Q.vel=0,Q.side=0,e.preventDefault()):t===`[`?Ph(Q.sens-.1):t===`]`?Ph(Q.sens+.1):Q.keys[t]=!0:Z.mode===`journey`&&(t===`p`&&J(`#pause`).click(),[`ArrowDown`,`PageDown`,` `,`ArrowRight`].includes(t)&&Dh(.18),[`ArrowUp`,`PageUp`,`ArrowLeft`].includes(t)&&Dh(-.18))}),addEventListener(`keyup`,e=>{Q.keys[e.key.length===1?e.key.toLowerCase():e.key]=!1}),addEventListener(`blur`,()=>{Q.keys={},Q.hold=0});var jh={u:1,outer:5200,door:()=>Hm,doorR:4.2,speed:620},Mh=e=>e===X?jh:e.free,Nh=()=>.25*12**Q.sens;function Ph(e){Q.sens=Wp(e,0,1),Xp.set(`gv-sens`,Q.sens),J(`#sens`).value=Math.round(Q.sens*100)}J(`#sens`).oninput=()=>Ph(J(`#sens`).value/100),Ph(Q.sens);function Fh(){if(Z.mode!==`intro`&&Z.mode!==`leaving`){if(Z.mode===`lotus`&&($.on||$.t>0)&&($.on=!1,$.t=0,X.setWithin(!1),Th(),Y.position.copy($.p0),Y.quaternion.copy($.q0)),Z.mode!==`free`){let e=Z.mode===`lotus`?X:Im(Pm()[Wp(Math.floor(Z.p),0,Fm())]);if(!e)return;Z.mode===`lotus`&&(Rm.enabled=!1,Rh=null),Q.R=e,Q.vel=0,Q.side=0,Q.pending=null,Q.t0=performance.now(),Z.mode=`free`,sh(e,-1),rh.classList.remove(`off`),setTimeout(()=>rh.classList.add(`off`),12e3)}else if(Q.R===X)Z.mode=`lotus`,Y.up.set(0,1,0),Um.set(0,0,-1).applyQuaternion(Y.quaternion),Rm.target.copy(Y.position).addScaledVector(Um,Math.min(Y.position.distanceTo(Hm),200)),Vm(),Rm.enabled=!0,Vh.flyHome();else{let e=Pm().findIndex(e=>e.group===Q.R.group);e<0&&(Z.dir=`up`,ah(),e=Pm().findIndex(e=>e.group===Q.R.group)),wm.t=1,wm.p.copy(Y.position),wm.q.copy(Y.quaternion),Z.mode=`journey`,Z.p=Z.tp=e+.3,Z.auto=!0,Z.hold=0,Z.last=null}lh(),pg()}}J(`#freeBtn`).onclick=Fh;for(let[e,t]of[[`flyFwd`,1],[`flyBack`,-1]]){let n=J(`#`+e);n.addEventListener(`pointerdown`,e=>{Q.hold=t,n.setPointerCapture(e.pointerId)});for(let e of[`pointerup`,`pointercancel`,`lostpointercapture`])n.addEventListener(e,()=>{Q.hold=0})}function Ih(e){let t=e.R,n=Mh(t);Km.copy(Y.quaternion),t===X?(Um.copy(e.dir).negate(),Um.y<.22&&(Um.y=.22,Um.normalize()),Y.position.set(0,8,0).addScaledVector(Um,190*zm()),Y.up.set(0,1,0),Y.lookAt(0,8,0),X.setBloom(1),Eg=performance.now()+2e4):(t.update(n.u,Y,zm()),Y.quaternion.copy(Km),e.up?Y.position.copy(n.door()).addScaledVector(e.dir,n.doorR*1.35+n.outer*.006):Y.position.copy(n.center||Um.set(0,0,0)).addScaledVector(e.dir,-n.outer*.9)),Q.vel*=.4,sh(t,-1),lh()}function Lh(e,t){let n=Mh(t),r=Nh(),i=(Q.keys.w||Q.keys.ArrowUp?1:0)-(Q.keys.s||Q.keys.ArrowDown?1:0)+Q.hold,a=(Q.keys.d||Q.keys.ArrowRight?1:0)-(Q.keys.a||Q.keys.ArrowLeft?1:0);if(Q.vel=Wp(Q.vel*Math.exp(-e*.5)+i*e*1.8,-1,1),Q.side=Wp(Q.side*Math.exp(-e*2.5)+a*e*2.4,-1,1),Rh){Rh.t=Math.min(1,Rh.t+e/Rh.sec);let t=Gp(Rh.t);Y.position.lerpVectors(Rh.p0,Rh.p1,t),qm.position.copy(Y.position),qm.up.set(0,1,0),qm.lookAt(Rh.t1),qm.rotateY(Math.PI),Y.quaternion.slerp(qm.quaternion,Math.min(1,e*3+t*t)),Rh.t>=1&&(Rh=null),Q.vel=0}else{let i=Math.min(1,Math.abs(Q.vel)*3+Math.abs(Q.side)*2);if(Q.over&&!Q.drag&&i>.02){let t=e=>Math.sign(e)*(Math.max(0,Math.abs(e)-.1)/.9)**1.5,n=.85*i*(.6+.4*r)*e;Y.rotateY(-t(Q.mx)*n*Math.max(1,Y.aspect*.8)),Y.rotateX(t(Q.my)*n)}n.level!==!1&&(Um.set(1,0,0).applyQuaternion(Y.quaternion),Wm.set(0,1,0).applyQuaternion(Y.quaternion),Math.abs(Wm.y)>.3&&Y.rotateZ(Wp(-Um.y/Wm.y,-1,1)*Math.min(1,e*.9)));let a=n.door(),o=Wp((Y.position.distanceTo(a)-n.doorR*.55)/(n.outer*.3),.012,1),s=(n.speed||n.outer*.3)*r*o*e;Um.set(0,0,-1).applyQuaternion(Y.quaternion),Wm.set(1,0,0).applyQuaternion(Y.quaternion),Y.position.addScaledVector(Um,Q.vel*s).addScaledVector(Wm,Q.side*s*.7);let c=ym.indexOf(t),l=n.center||Gm.set(0,0,0),u=Y.position.distanceTo(l);Y.position.distanceTo(a)<n.doorR?Q.pending={R:t===X?ym[ym.length-1]:c>0?ym[c-1]:X,up:!1,dir:Um.clone(),x:-1}:u>n.outer&&(t===X?Y.position.sub(l).setLength(n.outer).add(l):Q.pending={R:c<ym.length-1?ym[c+1]:X,up:!0,dir:Y.position.clone().sub(l).normalize(),x:1})}}Zp.addEventListener(`pointermove`,e=>{if(Z.mode===`free`&&(Q.mx=e.clientX/innerWidth*2-1,Q.my=-(e.clientY/innerHeight*2-1),Q.over=e.pointerType===`mouse`,Q.drag&&e.buttons)){let t=.0034*(Y.fov/Yp);Y.rotateY((e.clientX-Q.drag.x)*t),Y.rotateX((e.clientY-Q.drag.y)*t),Q.drag.x=e.clientX,Q.drag.y=e.clientY,Rh=null}}),Zp.addEventListener(`pointerdown`,e=>{Z.mode===`free`&&(Q.drag={x:e.clientX,y:e.clientY},Zp.setPointerCapture(e.pointerId))});for(let e of[`pointerup`,`pointercancel`])Zp.addEventListener(e,()=>{Q.drag=null});Zp.addEventListener(`pointerleave`,()=>{Q.over=!1});var Rh=null;function zh(e,t,n=1.8){Rh={t:0,sec:n,p0:Y.position.clone(),t0:Rm.target.clone(),p1:e,t1:t}}var Bh=new V,Vh={get lotus(){return X},flyToPetal(e){X.petalPosition(e,Bh);let t=Math.hypot(Bh.x,Bh.z)||1,n=Bh.x/t,r=Bh.z/t;zh(new V(Bh.x+n*(20+t*.25),Bh.y+15+t*.22,Bh.z+r*(20+t*.25)),new V(Bh.x*.86,Bh.y,Bh.z*.86))},flyToYear(){zh(new V(0,150*zm(),72*zm()),new V(0,0,0))},flyHome(){let e=Bm();zh(e.pos,e.tgt)}},Hh=null,Uh=0;Zp.addEventListener(`pointerdown`,e=>{Hh={x:e.clientX,y:e.clientY}}),Zp.addEventListener(`pointermove`,e=>{if(!Lm()||e.buttons){xm&&xm.showTip(null);return}let t=performance.now();if(t-Uh<55)return;Uh=t;let n=X.pick(e.clientX,e.clientY,Y),r=Z.mode===`free`?`crosshair`:`grab`;n&&n.core?(X.hover(null),X.hoverYear(-1),Zp.style.cursor=`pointer`,xm.showTip(Z.mode===`free`?`<small>AUM · the light at the centre</small>Touch to speak with NAMA · or travel into it`:`<small>AUM · the light at the centre</small>Touch to speak with NAMA`,e.clientX,e.clientY)):(X.hover(n&&n.petal!=null?n.petal:null),X.hoverYear(n&&n.year!=null?n.year:-1),Zp.style.cursor=n?`pointer`:r,xm.showTip(n?n.petal==null?xm.yearLabel(n.year):xm.petalLabel(n.petal):null,e.clientX,e.clientY))}),Zp.addEventListener(`pointerup`,e=>{if(!Lm()||$.t>.5||!Hh||Math.hypot(e.clientX-Hh.x,e.clientY-Hh.y)>7)return;let t=X.pick(e.clientX,e.clientY,Y);t&&(xm.showTip(null),t.core?window.open(Mp,`_blank`,`noopener`):t.petal==null?xm.openYear(t.year):xm.openPetal(t.petal))}),Zp.addEventListener(`pointerleave`,()=>{xm&&xm.showTip(null),X&&X.hover(null)});var Wh=J(`#sndBtn`),Gh=J(`#sndPanel`),Kh=J(`#sndKind`),qh=J(`#sndVol`),Jh=J(`#sndMode`),Yh=J(`#sndNow`),Xh=J(`#seqChips`);Jh.innerHTML=Bp.map(e=>`<option value="${e.hz}">${e.name} · ${e.hz?e.hz+` Hz`:`136.1 Hz`} · ${e.note}</option>`).join(``);var Zh=[];try{Zh=JSON.parse(Xp.get(`gv-seq`,`[10,6,2.5,0]`)).filter(e=>Bp.some(t=>t.hz===e))}catch{Zh=[10,6,2.5,0]}Kh.value=Xp.get(`gv-kind`,`auto`),[`auto`,`one`,`seq`,`none`].includes(Kh.value)||(Kh.value=`auto`),Jh.value=typeof Sm.mode==`number`?String(Sm.mode):`6`;function Qh(){Xh.innerHTML=Bp.map(e=>{let t=Zh.indexOf(e.hz);return`<button data-hz="${e.hz}" class="${t>=0?`on`:``}">${t>=0?`<b>${t+1}</b>`:``}${e.hz?`${e.name} ${e.hz} Hz`:`OM 136.1 Hz`}</button>`}).join(``)}Xh.onclick=e=>{let t=e.target.closest(`button`);if(!t)return;let n=Number(t.dataset.hz),r=Zh.indexOf(n);r>=0?Zh.splice(r,1):Zh.push(n),Xp.set(`gv-seq`,JSON.stringify(Zh)),Qh(),tg()};function $h(){return Z.mode===`lotus`||Z.mode===`free`&&!Z.minutes?1:Z.mode===`free`?Wp((performance.now()-Q.t0)/(Z.minutes*6e4),0,1):Wp(Z.p/(Fm()+1),0,1)}function eg(){return Zh.length?Zh[Math.min(Zh.length-1,Math.floor($h()*Zh.length))]:0}function tg(){let e=Kh.value;Xp.set(`gv-kind`,e),J(`#oneRow`).hidden=e!==`one`,J(`#seqRow`).hidden=e!==`seq`,e===`auto`?Sm.setMode(`auto`):e===`one`?Sm.setMode(Jh.value):e===`seq`&&(Sm.seq(eg()),Sm.setMode(`seq`)),Z.muted=e===`none`,Z.mode!==`intro`&&Sm.toggle(e!==`none`),ng()}function ng(){let e=Sm.hz;qh.value=Math.round(Sm.volume*100),Wh.classList.toggle(`gold`,Sm.on);let t=e>0?`${Vp(e)} · ${e} Hz`:`OM · 136.1 Hz`;Wh.querySelector(`span`).textContent=Sm.on?t:`Silence`,Yh.textContent=Sm.on?`Now: ${t}`:`No sound: a journey for the eyes`}Wh.onclick=()=>{Gh.hidden=!Gh.hidden,Gh.hidden||dg()},Kh.onchange=tg,qh.oninput=()=>{Sm.setVolume(qh.value/100),ag.volume=Math.max(.15,qh.value/100)},Jh.onchange=tg,addEventListener(`pointerdown`,e=>{!Gh.hidden&&!e.target.closest(`#sound`)&&(Gh.hidden=!0)}),Qh(),tg();var rg=J(`#dark`),ig=!1;rg.onchange=()=>{ig=rg.checked};var ag=new Audio;ag.preload=`none`;var og=!1;function sg(){let e=!ag.paused;for(let t of[J(`#song`),J(`#song2`)])t.classList.toggle(`on`,e);J(`#song`).textContent=e?`♫ Pause song`:`♫ Prayer Song`,J(`#song2`).textContent=e?`♫ Pause the Prayer Song`:`♫ Play the Prayer Song`}function cg(){ag.paused?(ag.src||(ag.src=Up),og=Sm.on,og&&(Sm.toggle(!1),ng()),ag.volume=Math.max(.15,Sm.volume),ag.play().catch(()=>{})):ag.pause()}function lg(){og&&!Z.muted&&Kh.value!==`none`&&(Sm.toggle(!0),ng()),og=!1,sg()}ag.addEventListener(`play`,sg),ag.addEventListener(`pause`,lg),ag.addEventListener(`ended`,()=>{ag.currentTime=0}),ag.addEventListener(`timeupdate`,()=>{Gh.hidden||(J(`#songAt`).textContent=`${fh(ag.currentTime)} / ${fh(ag.duration||182)}`)}),J(`#song`).onclick=cg,J(`#song2`).onclick=cg;var ug=J(`#names`);ug.checked=Xp.get(`gv-names`)!==`off`,ug.onchange=()=>{Xp.set(`gv-names`,ug.checked?`on`:`off`),Mm&&Mm.showNames(ug.checked)};function dg(){let e=np(new Date),t=([t,n])=>`${n}: ${Xf[e[t].rashi][0]} ${e[t].deg.toFixed(1)}° · ${Zf[e[t].nak][0]}`;J(`#skyNow`).textContent=`${new Date().toLocaleString([],{dateStyle:`medium`,timeStyle:`short`})}\n${tp.map(t).join(`
`)}\nSidereal zodiac, Lahiri ayanamsa ${e.ayanamsa.toFixed(2)}°. Seen from the lotus, each stands in its true place among the stars.`}var fg=performance.now();function pg(){fg=performance.now(),document.body.classList.remove(`calm`)}function mg(e){document.body.classList.toggle(`bare`,e),e?Gh.hidden=!0:pg()}J(`#hideAll`).onclick=()=>mg(!0),addEventListener(`pointermove`,e=>{(Z.mode!==`free`||e.pointerType!==`mouse`||e.clientY<96||e.clientY>innerHeight-96||e.target!==Zp)&&pg()}),addEventListener(`pointerdown`,e=>{document.body.classList.contains(`bare`)&&(mg(!1),e.stopPropagation()),pg()},!0),addEventListener(`keydown`,pg);function hg(e){Z.mode===`intro`||document.body.classList.contains(`calm`)||(!Gh.hidden||!wg.hidden||!Tg.hidden||document.activeElement&&document.activeElement.matches(`input, select, textarea`)?fg=e:e-fg>7e3&&document.body.classList.add(`calm`))}function gg(){let e=[...bm,X.group],t=()=>{if(Cm.t>0){setTimeout(t,400);return}let n=e.shift();if(!n){if(!Mm){setTimeout(t,500);return}Mm.warm||(Mm.warm=!0,e.push(Mm.group),setTimeout(t,200));return}let r=[],i=bm.concat(X.group,Mm?[Mm.group]:[]).map(e=>[e,e.visible]);i.forEach(([e])=>{e.visible=e===n}),n.traverse(e=>{e.frustumCulled&&(r.push(e),e.frustumCulled=!1)}),Qp.setRenderTarget(nm),Qp.render($p,Y),Qp.setRenderTarget(null),r.forEach(e=>{e.frustumCulled=!0}),i.forEach(([e,t])=>{e.visible=t}),setTimeout(t,180)};setTimeout(t,600)}var _g=new Zs;function vg(){requestAnimationFrame(vg);let e=Math.min(_g.getDelta(),.05);rf.uTime.value+=e;let t=performance.now(),n=Pm(),r=Fm(),i=dh(),a,o,s=-1;if(Z.mode===`free`?(Q.pending&&(Q.R=Q.pending.R),a=Q.R,o=Mh(a).u):(Z.mode===`journey`&&(Z.hold>0&&(Z.hold-=e,Z.hold<=0&&(Z.auto=!0)),Z.auto&&!Z.paused&&(Z.tp=Wp(Z.tp+e/i,0,r+1)),Z.p+=(Z.tp-Z.p)*(1-Math.exp(-e*3.2)),Z.p>=r+.994&&X&&xh()),s=Wp(Math.floor(Z.p),0,r),o=Wp(Z.p-s,0,1),a=n[s]),!a)return;let c=a===X;if(!Tm||a.group!==Tm.group){if(Tm){Y.updateMatrixWorld(),em.position.copy(Y.position),Qp.setRenderTarget(nm),Qp.clear(),Qp.render($p,Y);let e=am.uniforms,t=e.uTunnel.value;if(e.uTunnel.value=0,e.tDiffuse.value=nm.texture,e.tPrev.value=rm.texture,Qp.setRenderTarget(im),om.render(Qp),e.uTunnel.value=t,[rm,im]=[im,rm],e.tPrev.value=rm.texture,Qp.setRenderTarget(null),Q.pending)Cm.dir=Q.pending.x,Cm.sec=3.2;else{let e=n.findIndex(e=>e.group===Tm.group),t=e<0||s>e;Cm.dir=Z.fromLotus?-1:_m[Z.dir]*(t?1:-1),Cm.sec=Z.fromLotus?4:3.6}Cm.t=1,Z.fromLotus=!1}Qm(a.sky,!Tm)}if(Q.pending&&(Z.mode===`free`&&Ih(Q.pending),Q.pending=null),Tm=a,Cm.t=Math.max(0,Cm.t-e/Cm.sec),$m(1-Math.exp(-e*2.2)),bm.forEach(e=>{e.visible=e===a.group}),X&&(X.group.visible=c),Mm&&(Mm.group.visible=c&&Am===`cosmos`,Mm.group.visible&&Mm.update()),a!==Z.last){let e=Z.last;Z.last=a,Z.mode!==`free`&&Y.up.set(0,1,0),Z.mode!==`journey`||e&&e.group===a.group||sh(a,s),Sm.state(a.beat||0,c),ng()}if(Kh.value===`seq`){let e=eg();e!==Sm.hz&&(Sm.seq(e),ng())}if(Z.mode===`lotus`&&($.on||$.t>0)){$.t=Wp($.t+($.on?e:-e)/4.5,0,1);let t=Gp($.t);$.idle+=e,$.on&&!$.drag&&$.idle>1.5&&($.yaw+=e*.03),Y.position.lerpVectors($.p0,Ch,t),wh.set($.pitch,$.yaw,0),Km.setFromEuler(wh),Y.quaternion.slerpQuaternions($.q0,Km,t),X.setWithin($.t>.8),X.setBloom(1),!$.on&&$.t<=0&&(Rm.enabled=!0,Rm.update())}else if(Z.mode===`leaving`){vh.t=Math.min(1,vh.t+e/vh.sec);let t=Gp(vh.t);Um.copy(vh.p0).sub(Hm);let n=Um.length();Y.position.copy(Hm).addScaledVector(Um.normalize(),1.6+(n-1.6)*(1-t)**2.2),qm.position.copy(Y.position),qm.up.set(0,1,0),qm.lookAt(Hm),qm.rotateY(Math.PI),Y.quaternion.slerp(qm.quaternion,Math.min(1,e*2.5)),X.setBloom(1),vh.veil=Kp(.5,.97,vh.t),vh.t>=1&&bh(vh.dir,vh.at)}else if(Z.mode===`lotus`){if(Rh){Rh.t=Math.min(1,Rh.t+e/Rh.sec);let t=Gp(Rh.t);Y.position.lerpVectors(Rh.p0,Rh.p1,t),Rm.target.lerpVectors(Rh.t0,Rh.t1,t),Rh.t>=1&&(Rh=null)}Rm.autoRotate=Nm&&!Rh&&wg.hidden&&Tg.hidden,Rm.update(),X.setBloom(1),Og()}else if(Z.mode===`free`)c?(X.setBloom(1),Og()):(Um.copy(Y.position),Km.copy(Y.quaternion),a.isSeed?a.update(0,Y,0,zm()):a.update(o,Y,zm()),Y.position.copy(Um),Y.quaternion.copy(Km)),Lh(e,a),a.face&&a.face(Y);else if(c)Xm(o,Y);else if(Z.mode===`intro`)um.update(o,Y,0,zm());else{a.update(o,Y,zm()),q.sayings&&!a.isSeed&&(Z.sayT+=e,Z.annT+=e,!Z.sayOn&&Z.sayT>Z.sayGap&&Z.annT>7&&o>.3&&o<.86?(ch(),Z.sayOn=!0,Z.sayT=0):Z.sayOn&&(Z.sayT>18||o>.9)&&(nh.classList.remove(`on`),Z.sayOn=!1,Z.sayT=0,Z.sayGap=26));let t=a.caption?a.caption(o):null;t&&(ih.children[0].textContent=t[1],ih.children[1].textContent=t[2]),ih.classList.toggle(`on`,!!t)}if(wm.t>0&&Z.mode===`journey`){wm.t=Math.max(0,wm.t-e/2.6);let t=Gp(wm.t);Y.position.lerp(wm.p,t),Y.quaternion.slerp(wm.q,t)}let l=Z.mode===`journey`&&s<r,u=l&&s===r-1,d=(1-o)*i,f=l?Kp(u?4.5:3.2,0,d)*(u||_m[Z.dir]<0?.8:.3):0;f=Math.max(f,Gp(Cm.t)*(Cm.dir<0?.55:.22)),Dm+=(f-Dm)*(1-Math.exp(-e*6)),am.uniforms.uTunnel.value=Dm,am.uniforms.uMix.value=Cm.t,am.uniforms.uDir.value=Cm.dir,am.uniforms.uWhite.value=u?Kp(3,0,d):c?Cm.t:0;let p=Yp+26*Dm*(Z.mode===`lotus`?0:1)+16*Gp($.t);Math.abs(p-Y.fov)>.01&&(Y.fov=p,Y.updateProjectionMatrix());let m=c?1.2:.1,h=c?14e3:9e3;(Y.near!==m||Y.far!==h)&&(Y.near=m,Y.far=h,Y.updateProjectionMatrix()),Em+=((c&&jm?1:0)-Em)*(1-Math.exp(-e*2.5)),sm.threshold=Bt.lerp(.88,2.5,Em),sm.strength=Bt.lerp(.5,.42,Em),cm.uniforms.uVig.value=Bt.lerp(.72,.06,Em),document.body.classList.toggle(`light`,c&&jm&&Cm.t<.5&&!ig),em.position.copy(Y.position);let g=u?Kp(2.4,0,d)*.8:0;c&&jm&&(g=Math.max(g,Gp(Cm.t)*.8*(Cm.dir>0))),Z.mode!==`leaving`&&(vh.veil=Math.max(0,vh.veil-e/2.2)),g=Math.max(g,vh.veil*.92),cm.uniforms.uVeil.value=g,cm.uniforms.uVeilCol.value.setRGB(2.1,2.1,2.1),Om+=((ig?.97:0)-Om)*(1-Math.exp(-e*1.5)),cm.uniforms.uLens.value=0,cm.uniforms.uDim.value=Om,Gh.hidden||(J(`#left`).textContent=Z.mode===`journey`?`${fh((r+1-Z.p)*i)} to the Light`:Z.mode===`free`?`travelling freely`:Z.mode===`lotus`?`at the Light`:``),hg(t),tm.render()}requestAnimationFrame(vg),J(`#speak`).href=Mp;var yg={cosmos:`✦ Cosmos`,white:`☀ White space`,dark:`☾ Dark space`};function bg(){J(`#space`).textContent=yg[Am],J(`#space`).title=`Space around the lotus: `+yg[Am].slice(2)+` (touch to change)`}J(`#space`).onclick=()=>xg(km[(km.indexOf(Am)+1)%km.length]);function xg(e){if(Am=e,jm=Am===`white`,Xp.set(`gv-space`,Am),X.setSpace(Am),bg(),Vm(),Z.mode===`lotus`&&($.on||$.t>0))Qm(X.sky);else if(Z.mode===`lotus`){Qm(X.sky);let e=Bm();zh(e.pos,e.tgt,2.4)}else Tm===X&&Qm(X.sky)}function Sg(){J(`#rot`).textContent=Nm?`⟳ Turning`:`⟳ Still`,J(`#rot`).classList.toggle(`on`,Nm)}J(`#rot`).onclick=()=>{Nm=!Nm,Xp.set(`gv-rotate`,Nm?`on`:`off`),Sg(),Vm()},Sg();var Cg=J(`#muse`),wg=J(`#reader`),Tg=J(`#side`),Eg=1/0,Dg=0;function Og(){let e=performance.now();if(Cg.classList.contains(`on`)&&e>Dg&&(Cg.classList.remove(`on`),Eg=e+4e4),e<Eg||!q.sayings)return;if(!wg.hidden||!Tg.hidden){Eg=e+15e3;return}let t=q.sayings.items.filter(e=>e.text.length<170&&!e.text.includes(`
`)),n=t[Math.random()*t.length|0];Cg.children[0].textContent=n.text,Cg.children[1].textContent=`Guruvani · saying ${n.i}`,Cg.classList.add(`on`),Dg=e+18e3,Eg=1/0}for(let e of[`out`,`in`,`up`,`down`])J(`#`+e).onclick=()=>yh(e);J(`#roam`).onclick=()=>{yh(`out`),Fh()},J(`#goOut`).onclick=()=>yh(`out`),J(`#goIn`).onclick=()=>yh(`in`),wp().then(()=>{X=Uf(q.index,q.nSay),X.setSpace(Am),bg(),X.group.visible=!1,$p.add(X.group),document.fonts.load(`600 40px "Noto Serif Malayalam"`).catch(()=>{}).then(()=>{Mm=xp(),Mm.showNames(ug.checked),Mm.group.visible=!1,$p.add(Mm.group)});for(let e of Object.values(gm))e.push(X);xm=Lp(Vh),J(`#count`).textContent=`${q.index.total.toLocaleString(`en-IN`)} Guruvanis · ${q.nSay.toLocaleString(`en-IN`)} sayings · 1977 to 2006`;let e=J(`#skip`);e.disabled=!1,e.onclick=()=>yh(`out`,Fm()+.02);let t=gm[qp.get(`path`)]?qp.get(`path`):`out`;qp.has(`t`)&&(Z.muted=!0,yh(t,Number(qp.get(`t`))),Z.auto=!1,Z.hold=1e9),qp.has(`lotus`)&&(Z.muted=!0,yh(t,Fm()+.9)),gg(),window.gv={frame:vg,M:$,toggleMed:Eh,S:Z,X:Cm,F:Q,lotus:X,camera:Y,controls:Rm,ui:xm,jumpTo:_h,begin:yh,toggleFree:Fh,sound:Sm,worlds:dm,seed:um,LADDER:ym,get cosmos(){return Mm}}}).catch(e=>{J(`#count`).textContent=`The Guruvanis could not be loaded`,console.error(e)});