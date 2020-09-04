class t{static isNull(t){return null===t}static isEmpty(e){return t.isString(e)&&""===e||t.isArray(e)&&e.length<1||t.isObjectLiteral(e)&&Object.keys(e).length<1}static isUndefined(t){return void 0===t}static isZero(t){return 0===t}static exists(e){return!(t.isUndefined(e)||t.isNull(e))}static isNullOrEmpty(e){return!t.exists(e)||t.isEmpty(e)}static isArray(t){return Array.isArray(t)}static isBool(t){return"boolean"==typeof t}static isTrue(e){return t.isBool(e)&&!0===e}static isFalse(e){return t.isBool(e)&&!1===e}static isDate(t){return t instanceof Date}static isNumber(t){return("number"==typeof t||t instanceof Number)&&!isNaN(t)}static isEven(t){return this.isNumber(t)&&!this.isZero(t)&&t%2==0}static isOdd(t){return this.isNumber(t)&&!this.isZero(t)&&!this.isEven(t)}static isString(t){return"string"==typeof t||t instanceof String}static isFunction(t){return t instanceof Function}static isObject(e){return t.exists(e)&&"object"==typeof e&&!(t.isBool(e)||t.isNumber(e)||t.isDate(e)||t.isArray(e)||t.isString(e)||t.isFunction(e))}static isObjectLiteral(e){return t.isObject(e)&&e.constructor==={}.constructor}static isTruthy(e){return!t.isFalsy(e)}static isFalsy(e){return t.isZero(e)||t.isFalse(e)||t.isNullOrEmpty(e)||isNaN(e)}}function e(t,e,s="_"){return t.split("").reduce((t,e)=>t.replace(s,e),e)}function s(t,e,s="_"){return t.split("").reduce((t,r,i)=>r!==s&&e.charAt(i)===s?t+r:t,"")}var r=t=>t.reduce((t,e)=>(t.includes(e)||t.push(e),t),[]);class i{constructor(t){this._list=t,this._head=0}get isEmpty(){return this.length<1}get index(){return this._head}get length(){return this._list.length}get current(){return this._list[this._head]}get next(){const{length:t}=this;let{_head:e}=this;return this._head=e++<t-1?e:0,this.current}get prev(){const{length:t}=this;let{_head:e}=this;return this._head=--e<0?t-1:e,this.current}get peekNext(){const{_head:t,length:e}=this;return this._list[t+1<e?t+1:0]}get peekPrev(){const{_head:t,length:e}=this;return this._list[t-1<0?e-1:t-1]}}function n(){return Math.random().toString().substr(2)}Object.freeze({__proto__:null,pattern:t=>t.toString().replace(/(^\/)|(\/$)/g,"").replace(/\\/g,"\\"),escape:t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),alpha:/^[A-z]+$/,alphaNumeric:/^[A-z0-9]+$/,base64:/^[A-z0-9=]+$/,dataUrl:/^\s*data:([a-z]+\/[a-z0-9+-]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=._~:@/?%\s-]*\s*$/i,email:/^\w+([.\w-]+)?@\w+([.\w-]+)?\.[A-Za-z0-9]{2,}$/,empty:/^$/,numeric:/^-?[0-9]+$/,script:/(<script[A-z0-9\n\s\t\r.={([\])}'",;!&|$/#:<>*?+\u0000-\u0037\u00C2\u00A0\u2122-]*?<\/script>)/,uid:/^\d{14,}$/i,url:/^(https?:\/\/)?[^{}\\:]+\.[A-z0-9]{2,12}(\/[^?\s]+)*\/?(\?([^=?#]+=[^=?#]*(&[^=?#]+=[^=?#]*)*(#.*)?)?)?$/,uuid:/^[{(]?[0-9A-F]{8}[-]?([0-9A-F]{4}[-]?){3}[0-9A-F]{12}[)}]?$/i});var a=t=>new Promise(e=>setTimeout(e,t));export{n as F,a as Z,s as c,r as h,i as l,t,e as u}