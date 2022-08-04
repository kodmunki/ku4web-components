var __extends=this&&this.__extends||function(){var t=function(e,n){t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n))t[n]=e[n]};return t(e,n)};return function(e,n){if(typeof n!=="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function u(t){try{a(r.next(t))}catch(e){o(e)}}function s(t){try{a(r["throw"](t))}catch(e){o(e)}}function a(t){t.done?n(t.value):i(t.value).then(u,s)}a((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,u;return u={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function s(t){return function(e){return a([t,e])}}function a(u){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=u[0]&2?i["return"]:u[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;if(i=0,o)u=[u[0]&2,o.value];switch(u[0]){case 0:case 1:o=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;i=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1];o=u;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(u);break}if(o[2])n.ops.pop();n.trys.pop();continue}u=e.call(t,n)}catch(s){u=[6,s];i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register([],(function(t){"use strict";return{execute:function(){var e=this;t("h",l);var n=function(){function t(){}t.isNull=function(t){return null===t};t.isEmpty=function(e){return t.isString(e)&&""===e||t.isArray(e)&&e.length<1||t.isObjectLiteral(e)&&Object.keys(e).length<1};t.isUndefined=function(t){return void 0===t};t.isZero=function(t){return 0===t};t.exists=function(e){return!(t.isUndefined(e)||t.isNull(e))};t.isNullOrEmpty=function(e){return!t.exists(e)||t.isEmpty(e)};t.isArray=function(t){return Array.isArray(t)};t.isBool=function(t){return"boolean"==typeof t};t.isTrue=function(e){return t.isBool(e)&&!0===e};t.isFalse=function(e){return t.isBool(e)&&!1===e};t.isDate=function(t){return t instanceof Date};t.isNumber=function(t){return("number"==typeof t||t instanceof Number)&&!isNaN(t)};t.isEven=function(t){return this.isNumber(t)&&!this.isZero(t)&&t%2==0};t.isOdd=function(t){return this.isNumber(t)&&!this.isZero(t)&&!this.isEven(t)};t.isString=function(t){return"string"==typeof t||t instanceof String};t.isFunction=function(t){return t instanceof Function};t.isAsyncFunction=function(e){try{return"AsyncFunction"===Object.getPrototypeOf(e).constructor.name||t.isFunction(e)&&/^async/.test(e.toString())||t.isFunction(e().then)}catch(t){return!1}};t.isPromise=function(t){return t instanceof Promise};t.isObject=function(e){return t.exists(e)&&"object"==typeof e&&!(t.isBool(e)||t.isNumber(e)||t.isDate(e)||t.isArray(e)||t.isString(e)||t.isFunction(e))};t.isObjectLiteral=function(e){return t.isObject(e)&&e.constructor==={}.constructor};t.isTruthy=function(e){return!t.isFalsy(e)};t.isFalsy=function(e){return t.isZero(e)||t.isFalse(e)||t.isNullOrEmpty(e)||isNaN(e)};return t}();t("t",n);function r(){var t=[];for(var e=0;e<arguments.length;e++){t[e]=arguments[e]}return"".concat.apply("",t)}function i(t){var e=[];for(var n=1;n<arguments.length;n++){e[n-1]=arguments[n]}return e.reduce((function(t,e,n){return t.replace(new RegExp("\\{".concat(n,"\\}"),"g"),e&&e.toString?e.toString():e)}),t)}function o(t){return u(s(t))}function u(t){return n.exists(t)&&n.isFunction(t.replace)?t.replace(/^[\s\n]*/,""):t}function s(t){return n.exists(t)&&n.isFunction(t.replace)?t.replace(/[\s\n]*$/,""):t}var a=t("a",Object.freeze({__proto__:null,build:r,chunk:function(t,e){if(e===void 0){e=0}if(!n.isString(t)||Number.isNaN(e)||e<0)return[];if(e<t.length){var r=0;var i=e||t.length,o=[];for(;r<t.length;)o.push(t.slice(r,r+i)),r+=i;return o}return[t]},format:i,trim:o,trimStart:u,trimEnd:s,capitalize:function(t){if(t===void 0){t=""}return(t||"").charAt(0).toUpperCase()+(t||"").slice(1).toLowerCase()},mask:function(t,e,r){if(r===void 0){r="_"}return n.isFunction(e)?e(t):n.isString(e)&&t.split("").reduce((function(t,e){return t.replace(new RegExp(r),e)}),e)},unmask:function(t,e,r){if(r===void 0){r="_"}var i=new RegExp(r);return n.isFunction(e)?e(t):n.isString(e)&&t.split("").reduce((function(t,n,r){return!i.test(n)&&i.test(e.charAt(r))?t+n:t}),"")}}));var c=t("o",(function(t){return t.reduce((function(t,e){return t.includes(e)||t.push(e),t}),[])}));var f=function(){function t(t){this._list=t,this._head=0}Object.defineProperty(t.prototype,"isEmpty",{get:function(){return this.length<1},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"index",{get:function(){return this._head},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"length",{get:function(){return this._list.length},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"current",{get:function(){return this._list[this._head]},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"next",{get:function(){var t=this.length;var e=this._head;return this._head=e++<t-1?e:0,this.current},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"prev",{get:function(){var t=this.length;var e=this._head;return this._head=--e<0?t-1:e,this.current},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"peekNext",{get:function(){var t=this.length,e=this._head;return this._list[e+1<t?e+1:0]},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"peekPrev",{get:function(){var t=this.length,e=this._head;return this._list[e-1<0?t-1:e-1]},enumerable:false,configurable:true});return t}();t("c",f);function l(t,e){try{return t()}catch(n){return e}}l.async=function(t,n){return __awaiter(e,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:r.trys.push([0,2,,3]);return[4,t()];case 1:return[2,r.sent()];case 2:e=r.sent();return[2,n];case 3:return[2]}}))}))};function p(t,e){if(e===void 0){e=0}var n=Math.pow(10,-e);return Math.round(parseFloat((t*n).toFixed(Math.abs(e))))/n}function h(t,e){if(e===void 0){e=0}return p(t+5*Math.pow(10,e-1),e)}function y(t,e){if(e===void 0){e=0}if(0===t)return 0;return p(t-5*Math.pow(10,e-1),e)}function d(t,e){if(e===void 0){e=0}return t<0?h(t,e):y(t,e)}function b(t){var e=function(t,n,r){if(n===void 0){n=0}if(r===void 0){r=1}return 0<t?e(--t,r,n+r):n};return e(t)}function g(t){var e=0,n=1,r=0;for(;t>1;)r=e,e=n,n+=r,t--;return t<1?e:n}function v(t,e){if(e===void 0){e=0}var n=parseInt(t);return Number.isNaN(n)?e:n}Object.freeze({__proto__:null,random:function(t,e){if(t===void 0){t=0}if(e===void 0){e=1}return Math.random()*(e-t)+t},round:p,roundUp:h,roundDown:y,roundTowardZero:d,gcd:function t(e,n){return 0===n?Math.abs(e):t(n,e%n)},fib:b,fib2:g,fibArray:function(t){return Array(t).fill(0).map((function(){return b(--t)})).reverse()},fib2Array:function(t){return Array(t).fill(0).map((function(){return g(--t)})).reverse()},tryParseInt:v,tryParseFloat:function(t,e){if(e===void 0){e=0}var n=parseFloat(t);return Number.isNaN(n)?e:n}});var m=function(){function t(t,e){if(t===void 0){t=0}if(e===void 0){e=0}if(!n.isNumber(t)||!n.isNumber(e))throw new Error("Coord requires numeric x and y values");this._x=t,this._y=e}Object.defineProperty(t.prototype,"x",{get:function(){return this._x},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"y",{get:function(){return this._y},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"value",{get:function(){return{x:this.x,y:this.y}},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"half",{get:function(){return this.divide(new t(2,2))},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"abs",{get:function(){return new t(Math.abs(this.x),Math.abs(this.y))},enumerable:false,configurable:true});t.prototype.equals=function(t){return this.x===t.x&&this.y===t.y};t.prototype.add=function(e){return new t(this.x+e.x,this.y+e.y)};t.prototype.subtract=function(e){return new t(this.x-e.x,this.y-e.y)};t.prototype.multiply=function(e){return new t(this.x*e.x,this.y*e.y)};t.prototype.divide=function(e){return new t(this.x/e.x,this.y/e.y)};t.prototype.round=function(e){if(e===void 0){e=0}return new t(p(this.x,e),p(this.y,e))};t.prototype.toString=function(){return"(".concat(this.x,",").concat(this.y,")")};t.canParse=function(e){return n.isArray(e)?!(Number.isNaN(e[0])||Number.isNaN(e[1])):n.isObjectLiteral(e)&&"x"in e&&"y"in e?!(Number.isNaN(e.x)||Number.isNaN(e.y)):e instanceof t};t.parse=function(e){return n.exists(e)?e instanceof t?e:n.isArray(e)?new t(e[0],e[1]):n.isObjectLiteral(e)&&n.exists(e.x)&&n.exists(e.y)?new t(e.x,e.y):null:null};t.tryParse=function(e){return l((function(){return t.parse(e)}),null)};return t}();var _=function(t){__extends(e,t);function e(e,n){if(e===void 0){e=0}if(n===void 0){n=0}var r=this;r=t.call(this,e,n)||this,r._lengthSquared=Math.pow(e,2)+Math.pow(n,2),r._magnitude=Math.sqrt(r._lengthSquared),r._unitNormalX=0===e&&0===n?0:e/r._magnitude,r._unitNormalY=0===e&&0===n?0:n/r._magnitude;return r}Object.defineProperty(e.prototype,"magnitude",{get:function(){return this._magnitude},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"isZero",{get:function(){return 0===this.x&&0===this.y},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"normal",{get:function(){return new e(this._unitNormalX,this._unitNormalY)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"invert",{get:function(){return new e(-this.x,-this.y)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"norm",{get:function(){return new e(Math.abs(this.x),Math.abs(this.y))},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"perpendicular",{get:function(){return new e(-this.y,this.x)},enumerable:false,configurable:true});e.prototype.equals=function(t){return t instanceof e&&this.x===t.x&&this.y===t.y};e.prototype.add=function(t){return t instanceof e?new e(this.x+t.x,this.y+t.y):null};e.prototype.dot=function(t){return t instanceof e?this.x*t.x+this.y*t.y:null};e.prototype.perpendicularAtTo=function(t){if(!(t instanceof e))return null;var n=t.add(this.projectionOfOnto(t).invert);return new e(n.x,n.y)};e.prototype.projectionOfOnto=function(t){if(!(t instanceof e))return null;var n=t.normal.scale(this.dot(t.normal));return new e(n.x,n.y)};e.prototype.scale=function(t){return new e(this.x*t,this.y*t)};e.prototype.unitNormalDot=function(t){return t instanceof e?this.normal.x*t.normal.x+this.normal.y*t.normal.y:null};e.prototype.reflect=function(t){if(!(t instanceof e))return null;if(t.isZero)return this;var n=t.normal;return this.add(n.scale(2*n.dot(this)).invert)};e.prototype.round=function(t){if(t===void 0){t=0}return new e(p(this.x,t),p(this.y,t))};return e}(m);var x=function(t){__extends(e,t);function e(e,n){return t.call(this,e,n)||this}e.prototype.isAbove=function(t){return this.y<t.y};e.prototype.isBelow=function(t){return this.y>t.y};e.prototype.isLeftOf=function(t){return this.x<t.x};e.prototype.isRightOf=function(t){return this.x>t.x};e.prototype.distanceFrom=function(t){return new _(this.x-t.x,this.y-t.y)};e.prototype.distanceTo=function(t){return this.distanceFrom(t).invert};e.canParse=function(t){return t instanceof e||m.canParse(t)};e.parse=function(t){if(t instanceof e)return t;var n=m.parse(t);return new e(n.x,n.y)};e.tryParse=function(t){return l((function(){return e.parse(t)}),null)};return e}(m);var w=function(){function t(t,e,n,r){if(t===void 0){t=0}if(e===void 0){e=0}if(n===void 0){n=0}if(r===void 0){r=0}this.origin=new x(t,e),this.dimensions=new m(n,r),this.diagonal=x.parse(this.origin.add(this.dimensions)),this.center=this.diagonal.half}t.prototype.contains=function(t){return this.origin.isAbove(t)&&this.origin.isLeftOf(t)&&this.diagonal.isRightOf(t)&&this.diagonal.isBelow(t)};t.prototype.aspectToFit=function(e){var n=this.dimensions,r=e.dimensions,i=r.x,o=r.y;var u=n.x,s=n.y;return u>s&&0!==u?(s*=i/u,u=i,s>o&&(s=o,u*=s/n.y)):s>o&&(u*=o/s,s=o),new t(this.origin.x,this.origin.y,u,s)};return t}();t("M",w);var O=t("j",(function(t,e,n){if(n===void 0){n=!1}var r;return function(){var i=[];for(var o=0;o<arguments.length;o++){i[o]=arguments[o]}var u=n&&!r;clearTimeout(r),r=setTimeout((function(){r=null,n||t.apply(void 0,i)}),e),u&&t.apply(void 0,i)}}));var N=function(){function t(t){this._milliseconds=t}Object.defineProperty(t.prototype,"isRunning",{get:function(){return n.exists(this._intervalId)},enumerable:false,configurable:true});t.prototype.onInterval=function(t){return this.clear(),this._didInterval=t,this};t.prototype.start=function(){var t=this;return this.clear(),this._intervalId=setInterval((function(){t._didInterval()}),this._milliseconds),this};t.prototype.clear=function(){return clearInterval(this._intervalId),this._intervalId=null,this};return t}();t("L",N);var j=function(){function t(t){this._milliseconds=t}Object.defineProperty(t.prototype,"isRunning",{get:function(){return n.exists(this._timeoutId)},enumerable:false,configurable:true});t.prototype.onTimeout=function(t){return this.clear(),this._didTimeout=t,this};t.prototype.start=function(){var t=this;return this.clear(),this._timeoutId=setTimeout((function(){t._didTimeout()}),this._milliseconds),this};t.prototype.clear=function(){return clearTimeout(this._timeoutId),this._timeoutId=null,this};return t}();t("C",j);var P=t("Y",(function(t){return new Promise((function(e){return setTimeout(e,t)}))}));function A(t){var e=isNaN(parseInt(t))||t<0||t>24?24:t,n=Math.random().toString().substring(2),r=Math.random().toString().substring(2);return n.concat(r).substring(0,e)}function F(){return function t(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,t)}()}var S=t("R",Object.freeze({__proto__:null,uid:A,uuid:F,suid:function(){return Symbol(A())},suuid:function(){return Symbol(F())}}));Object.freeze({__proto__:null,pattern:function(t){return t.toString().replace(/(^\/)|(\/$)/g,"").replace(/\\/g,"\\")},escape:function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},alpha:/^[A-z]+$/,alphaNumeric:/^[A-z0-9]+$/,base64:/^[A-z0-9=]+$/,dataUrl:/^\s*data:([a-z]+\/[a-z0-9+-]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=._~:@/?%\s-]*\s*$/i,email:/^\w+([.\w-+]+)?@\w+([.\w-]+)?\.[A-Za-z0-9]{2,}$/,empty:/^$/,numeric:/^-?[0-9]+$/,script:/(<script[A-z0-9\n\s\t\r.={([\])}'",;!&|$/_:<>*?+\u0000-\u0037\u00C2\u00A0\u2122-]*?<\/script>)/,uid:/^\d{14,}$/i,url:/^(https?:\/\/)?[^{}\\:]+\.[A-z0-9]{2,12}(\/[^?\s]+)*\/?(\?([^=?_]+=[^=?_]*(&[^=?_]+=[^=?_]*)*(_.*)?)?)?$/,uuid:/^[{(]?[0-9A-F]{8}[-]?([0-9A-F]{4}[-]?){3}[0-9A-F]{12}[)}]?$/i})}}}));