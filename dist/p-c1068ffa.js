class t{static isNull(t){return null===t}static isEmpty(r){return t.isString(r)&&""===r||t.isArray(r)&&r.length<1||t.isObjectLiteral(r)&&Object.keys(r).length<1}static isUndefined(t){return void 0===t}static isZero(t){return 0===t}static exists(r){return!(t.isUndefined(r)||t.isNull(r))}static isNullOrEmpty(r){return!t.exists(r)||t.isEmpty(r)}static isArray(t){return Array.isArray(t)}static isBool(t){return"boolean"==typeof t}static isTrue(r){return t.isBool(r)&&!0===r}static isFalse(r){return t.isBool(r)&&!1===r}static isDate(t){return t instanceof Date}static isNumber(t){return("number"==typeof t||t instanceof Number)&&!isNaN(t)}static isEven(t){return this.isNumber(t)&&!this.isZero(t)&&t%2==0}static isOdd(t){return this.isNumber(t)&&!this.isZero(t)&&!this.isEven(t)}static isString(t){return"string"==typeof t||t instanceof String}static isFunction(t){return t instanceof Function}static isAsyncFunction(r){try{return"AsyncFunction"===Object.getPrototypeOf(r).constructor.name||t.isFunction(r)&&/^async/.test(r.toString())||t.isFunction(r().then)}catch(t){return!1}}static isPromise(t){return t instanceof Promise}static isObject(r){return t.exists(r)&&"object"==typeof r&&!(t.isBool(r)||t.isNumber(r)||t.isDate(r)||t.isArray(r)||t.isString(r)||t.isFunction(r))}static isObjectLiteral(r){return t.isObject(r)&&r.constructor==={}.constructor}static isTruthy(r){return!t.isFalsy(r)}static isFalsy(r){return t.isZero(r)||t.isFalse(r)||t.isNullOrEmpty(r)||isNaN(r)}}function r(r){return t.exists(r)&&t.isFunction(r.replace)?r.replace(/^[\s\n]*/,""):r}function n(r){return t.exists(r)&&t.isFunction(r.replace)?r.replace(/[\s\n]*$/,""):r}var e=Object.freeze({__proto__:null,build:function(...t){return"".concat(...t)},chunk:function(r,n=0){if(!t.isString(r)||Number.isNaN(n)||n<0)return[];if(n<r.length){let t=0;const e=n||r.length,i=[];for(;t<r.length;)i.push(r.slice(t,t+e)),t+=e;return i}return[r]},format:function(t,...r){return r.reduce(((t,r,n)=>t.replace(new RegExp(`\\{${n}\\}`,"g"),r&&r.toString?r.toString():r)),t)},trim:function(t){return r(n(t))},trimStart:r,trimEnd:n,capitalize:function(t=""){return(t||"").charAt(0).toUpperCase()+(t||"").slice(1).toLowerCase()},mask:function(r,n,e="_"){return t.isFunction(n)?n(r):t.isString(n)&&r.split("").reduce(((t,r)=>t.replace(new RegExp(e),r)),n)},unmask:function(r,n,e="_"){const i=new RegExp(e);return t.isFunction(n)?n(r):t.isString(n)&&r.split("").reduce(((t,r,e)=>!i.test(r)&&i.test(n.charAt(e))?t+r:t),"")}}),i=t=>t.reduce(((t,r)=>(t.includes(r)||t.push(r),t)),[]);class s{constructor(t){this._list=t,this._head=0}get isEmpty(){return this.length<1}get index(){return this._head}get length(){return this._list.length}get current(){return this._list[this._head]}get next(){const{length:t}=this;let{_head:r}=this;return this._head=r++<t-1?r:0,this.current}get prev(){const{length:t}=this;let{_head:r}=this;return this._head=--r<0?t-1:r,this.current}get peekNext(){const{_head:t,length:r}=this;return this._list[t+1<r?t+1:0]}get peekPrev(){const{_head:t,length:r}=this;return this._list[t-1<0?r-1:t-1]}}function u(t,r){try{return t()}catch{return r}}function a(t,r=0){const n=Math.pow(10,-r);return Math.round(parseFloat((t*n).toFixed(Math.abs(r))))/n}function h(t,r=0){return a(t+5*Math.pow(10,r-1),r)}function c(t,r=0){return 0===t?0:a(t-5*Math.pow(10,r-1),r)}function o(t){const r=(t,n=0,e=1)=>0<t?r(--t,e,n+e):n;return r(t)}function l(t){let r=0,n=1,e=0;for(;t>1;)e=r,r=n,n+=e,t--;return t<1?r:n}u.async=async(t,r)=>{try{return await t()}catch{return r}},Object.freeze({__proto__:null,random:function(t=0,r=1){return Math.random()*(r-t)+t},round:a,roundUp:h,roundDown:c,roundTowardZero:function(t,r=0){return t<0?h(t,r):c(t,r)},gcd:function t(r,n){return 0===n?Math.abs(r):t(n,r%n)},fib:o,fib2:l,fibArray:function(t){return Array(t).fill(0).map((()=>o(--t))).reverse()},fib2Array:function(t){return Array(t).fill(0).map((()=>l(--t))).reverse()},tryParseInt:function(t,r=0){const n=parseInt(t);return Number.isNaN(n)?r:n},tryParseFloat:function(t,r=0){const n=parseFloat(t);return Number.isNaN(n)?r:n}});class f{constructor(r=0,n=0){if(!t.isNumber(r)||!t.isNumber(n))throw new Error("Coord requires numeric x and y values");this._x=r,this._y=n}get x(){return this._x}get y(){return this._y}get value(){return{x:this.x,y:this.y}}get half(){return this.divide(new f(2,2))}get abs(){return new f(Math.abs(this.x),Math.abs(this.y))}equals(t){return this.x===t.x&&this.y===t.y}add(t){return new f(this.x+t.x,this.y+t.y)}subtract(t){return new f(this.x-t.x,this.y-t.y)}multiply(t){return new f(this.x*t.x,this.y*t.y)}divide(t){return new f(this.x/t.x,this.y/t.y)}round(t=0){return new f(a(this.x,t),a(this.y,t))}toString(){return`(${this.x},${this.y})`}static canParse(r){return t.isArray(r)?!(Number.isNaN(r[0])||Number.isNaN(r[1])):t.isObjectLiteral(r)&&"x"in r&&"y"in r?!(Number.isNaN(r.x)||Number.isNaN(r.y)):r instanceof f}static parse(r){return t.exists(r)?r instanceof f?r:t.isArray(r)?new f(r[0],r[1]):t.isObjectLiteral(r)&&t.exists(r.x)&&t.exists(r.y)?new f(r.x,r.y):null:null}static tryParse(t){return u((()=>f.parse(t)),null)}}class d extends f{constructor(t=0,r=0){super(t,r),this._lengthSquared=Math.pow(t,2)+Math.pow(r,2),this._magnitude=Math.sqrt(this._lengthSquared),this._unitNormalX=0===t&&0===r?0:t/this._magnitude,this._unitNormalY=0===t&&0===r?0:r/this._magnitude}get magnitude(){return this._magnitude}get isZero(){return 0===this.x&&0===this.y}get normal(){return new d(this._unitNormalX,this._unitNormalY)}get invert(){return new d(-this.x,-this.y)}get norm(){return new d(Math.abs(this.x),Math.abs(this.y))}get perpendicular(){return new d(-this.y,this.x)}equals(t){return t instanceof d&&this.x===t.x&&this.y===t.y}add(t){return t instanceof d?new d(this.x+t.x,this.y+t.y):null}dot(t){return t instanceof d?this.x*t.x+this.y*t.y:null}perpendicularAtTo(t){if(!(t instanceof d))return null;const r=t.add(this.projectionOfOnto(t).invert);return new d(r.x,r.y)}projectionOfOnto(t){if(!(t instanceof d))return null;const r=t.normal.scale(this.dot(t.normal));return new d(r.x,r.y)}scale(t){return new d(this.x*t,this.y*t)}unitNormalDot(t){return t instanceof d?this.normal.x*t.normal.x+this.normal.y*t.normal.y:null}reflect(t){if(!(t instanceof d))return null;if(t.isZero)return this;const r=t.normal;return this.add(r.scale(2*r.dot(this)).invert)}round(t=0){return new d(a(this.x,t),a(this.y,t))}}class g extends f{constructor(t,r){super(t,r)}isAbove(t){return this.y<t.y}isBelow(t){return this.y>t.y}isLeftOf(t){return this.x<t.x}isRightOf(t){return this.x>t.x}distanceFrom(t){return new d(this.x-t.x,this.y-t.y)}distanceTo(t){return this.distanceFrom(t).invert}static canParse(t){return t instanceof g||f.canParse(t)}static parse(t){if(t instanceof g)return t;const r=f.parse(t);return new g(r.x,r.y)}static tryParse(t){return u((()=>g.parse(t)),null)}}class p{constructor(t=0,r=0,n=0,e=0){this.origin=new g(t,r),this.dimensions=new f(n,e),this.diagonal=g.parse(this.origin.add(this.dimensions)),this.center=this.diagonal.half}contains(t){return this.origin.isAbove(t)&&this.origin.isLeftOf(t)&&this.diagonal.isRightOf(t)&&this.diagonal.isBelow(t)}aspectToFit(t){const r=this.dimensions,n=t.dimensions,e=n.x,i=n.y;let s=r.x,u=r.y;return s>u&&0!==s?(u*=e/s,s=e,u>i&&(u=i,s*=u/r.y)):u>i&&(s*=i/u,u=i),new p(this.origin.x,this.origin.y,s,u)}}var m=(t,r,n=!1)=>{let e;return(...i)=>{const s=n&&!e;clearTimeout(e),e=setTimeout((()=>{e=null,n||t(...i)}),r),s&&t(...i)}};class w{constructor(t){this._milliseconds=t}get isRunning(){return t.exists(this._intervalId)}onInterval(t){return this.clear(),this._didInterval=t,this}start(){return this.clear(),this._intervalId=setInterval((()=>{this._didInterval()}),this._milliseconds),this}clear(){return clearInterval(this._intervalId),this._intervalId=null,this}}class y{constructor(t){this._milliseconds=t}get isRunning(){return t.exists(this._timeoutId)}onTimeout(t){return this.clear(),this._didTimeout=t,this}start(){return this.clear(),this._timeoutId=setTimeout((()=>{this._didTimeout()}),this._milliseconds),this}clear(){return clearTimeout(this._timeoutId),this._timeoutId=null,this}}var b=t=>new Promise((r=>setTimeout(r,t)));function _(){return Math.random().toString().substr(2)}function A(){return function t(r){return r?(r^16*Math.random()>>r/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,t)}()}var $=Object.freeze({__proto__:null,uid:_,uuid:A,suid:function(){return Symbol(_())},suuid:function(){return Symbol(A())}});Object.freeze({__proto__:null,pattern:t=>t.toString().replace(/(^\/)|(\/$)/g,"").replace(/\\/g,"\\"),escape:t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),alpha:/^[A-z]+$/,alphaNumeric:/^[A-z0-9]+$/,base64:/^[A-z0-9=]+$/,dataUrl:/^\s*data:([a-z]+\/[a-z0-9+-]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=._~:@/?%\s-]*\s*$/i,email:/^\w+([.\w-]+)?@\w+([.\w-]+)?\.[A-Za-z0-9]{2,}$/,empty:/^$/,numeric:/^-?[0-9]+$/,script:/(<script[A-z0-9\n\s\t\r.={([\])}'",;!&|$/#:<>*?+\u0000-\u0037\u00C2\u00A0\u2122-]*?<\/script>)/,uid:/^\d{14,}$/i,url:/^(https?:\/\/)?[^{}\\:]+\.[A-z0-9]{2,12}(\/[^?\s]+)*\/?(\?([^=?#]+=[^=?#]*(&[^=?#]+=[^=?#]*)*(#.*)?)?)?$/,uuid:/^[{(]?[0-9A-F]{8}[-]?([0-9A-F]{4}[-]?){3}[0-9A-F]{12}[)}]?$/i});export{y as C,w as L,p as M,$ as R,b as Y,e as a,s as c,m as j,i as o,t}