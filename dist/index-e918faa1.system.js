var __extends=this&&this.__extends||function(){var t=function(e,r){t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r))t[r]=e[r]};return t(e,r)};return function(e,r){if(typeof r!=="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,o){function u(t){try{s(n.next(t))}catch(e){o(e)}}function a(t){try{s(n["throw"](t))}catch(e){o(e)}}function s(t){t.done?r(t.value):i(t.value).then(u,a)}s((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(t){return function(e){return s([t,e])}}function s(u){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=u[0]&2?i["return"]:u[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;if(i=0,o)u=[u[0]&2,o.value];switch(u[0]){case 0:case 1:o=u;break;case 4:r.label++;return{value:u[1],done:false};case 5:r.label++;i=u[1];u=[0];continue;case 7:u=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){r.label=u[1];break}if(u[0]===6&&r.label<o[1]){r.label=o[1];o=u;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(u);break}if(o[2])r.ops.pop();r.trys.pop();continue}u=e.call(t,r)}catch(a){u=[6,a];i=0}finally{n=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};var __classPrivateFieldSet=this&&this.__classPrivateFieldSet||function(t,e,r,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e==="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(t,r):i?i.value=r:e.set(t,r),r};var __classPrivateFieldGet=this&&this.__classPrivateFieldGet||function(t,e,r,n){if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e==="function"?t!==e||!n:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(t):n?n.value:e.get(t)};System.register([],(function(t){"use strict";return{execute:function(){var e=this;var r,n,i,o,u,a,s,c,f,l,p;var h=function(){function t(){}t.isNull=function(t){return null===t};t.isEmpty=function(e){return t.isString(e)&&""===e||t.isArray(e)&&e.length<1||t.isObjectLiteral(e)&&Object.keys(e).length<1};t.isUndefined=function(t){return void 0===t};t.isZero=function(t){return 0===t};t.exists=function(e){return!(t.isUndefined(e)||t.isNull(e))};t.isNullOrEmpty=function(e){return!t.exists(e)||t.isEmpty(e)};t.isArray=function(t){return Array.isArray(t)};t.isBool=function(t){return"boolean"==typeof t};t.isTrue=function(e){return t.isBool(e)&&!0===e};t.isFalse=function(e){return t.isBool(e)&&!1===e};t.isDate=function(t){return t instanceof Date};t.isNumber=function(t){return("number"==typeof t||t instanceof Number)&&!isNaN(t)};t.isEven=function(t){return this.isNumber(t)&&!this.isZero(t)&&t%2==0};t.isOdd=function(t){return this.isNumber(t)&&!this.isZero(t)&&!this.isEven(t)};t.isString=function(t){return"string"==typeof t||t instanceof String};t.isFunction=function(t){return t instanceof Function};t.isAsyncFunction=function(e){try{return"AsyncFunction"===Object.getPrototypeOf(e).constructor.name||t.isFunction(e)&&/^async/.test(e.toString())||t.isFunction(e().then)}catch(t){return!1}};t.isPromise=function(t){return t instanceof Promise};t.isObject=function(e){return t.exists(e)&&"object"==typeof e&&!(t.isBool(e)||t.isNumber(e)||t.isDate(e)||t.isArray(e)||t.isString(e)||t.isFunction(e))};t.isObjectLiteral=function(e){return t.isObject(e)&&e.constructor==={}.constructor};t.isTruthy=function(e){return!t.isFalsy(e)};t.isFalsy=function(e){return t.isZero(e)||t.isFalse(e)||t.isNullOrEmpty(e)||isNaN(e)};return t}();t("t",h);function y(){var t=[];for(var e=0;e<arguments.length;e++){t[e]=arguments[e]}return"".concat.apply("",t)}function d(t){var e=[];for(var r=1;r<arguments.length;r++){e[r-1]=arguments[r]}return e.reduce((function(t,e,r){return t.replace(new RegExp("\\{".concat(r,"\\}"),"g"),e&&e.toString?e.toString():e)}),t)}function v(t){return b(g(t))}function b(t){return h.exists(t)&&h.isFunction(t.replace)?t.replace(/^[\s\n]*/,""):t}function g(t){return h.exists(t)&&h.isFunction(t.replace)?t.replace(/[\s\n]*$/,""):t}var _=t("a",Object.freeze({__proto__:null,build:y,chunk:function(t,e){if(e===void 0){e=0}if(!h.isString(t)||Number.isNaN(e)||e<0)return[];if(e<t.length){var r=0;var n=e||t.length,i=[];for(;r<t.length;)i.push(t.slice(r,r+n)),r+=n;return i}return[t]},format:d,trim:v,trimStart:b,trimEnd:g,capitalize:function(t){if(t===void 0){t=""}return(t||"").charAt(0).toUpperCase()+(t||"").slice(1).toLowerCase()},mask:function(t,e,r){if(r===void 0){r="_"}return h.isFunction(e)?e(t):h.isString(e)&&t.split("").reduce((function(t,e){return t.replace(new RegExp(r),e)}),e)},unmask:function(t,e,r){if(r===void 0){r="_"}var n=new RegExp(r);return h.isFunction(e)?e(t):h.isString(e)&&t.split("").reduce((function(t,r,i){return n.test(r)||!n.test(e.charAt(i))&&e.charAt(i)===r?t:t+r}),"")}}));var m=function(){function t(t,e,o){if(t===void 0){t=""}if(e===void 0){e=""}if(o===void 0){o=""}r.set(this,void 0);n.set(this,void 0);i.set(this,void 0);__classPrivateFieldSet(this,r,t||"","f"),__classPrivateFieldSet(this,n,e||"","f"),__classPrivateFieldSet(this,i,o||"","f")}Object.defineProperty(t.prototype,"first",{get:function(){return __classPrivateFieldGet(this,r,"f")},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"middle",{get:function(){return __classPrivateFieldGet(this,n,"f")},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"last",{get:function(){return __classPrivateFieldGet(this,i,"f")},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"full",{get:function(){var t=h.isNullOrEmpty(this.middle)?"F L":"F M L";return v(this.toString(t).replace(/\s+/," "))},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"initials",{get:function(){var t=h.isNullOrEmpty(this.middle)?"f.l.":"f.m.l.";return v(this.toString(t).replace(/\s{2,}/,""))},enumerable:false,configurable:true});t.prototype.equals=function(t){return h.exists(t)&&t.first===this.first&&t.middle===this.middle&&t.last===this.last};t.prototype.toString=function(t){var e=this.first.charAt(0),r=this.middle.charAt(0),n=this.last.charAt(0);return h.isNullOrEmpty(t)?this.full:t.replace(/([FfMmLl])/g,"{$1}").replace("{F}",this.first).replace("{M}",this.middle).replace("{L}",this.last).replace("{f}",e).replace("{m}",r).replace("{l}",n)};return t}();r=new WeakMap,n=new WeakMap,i=new WeakMap;var w=t("o",(function(t){return t.reduce((function(t,e){return t.includes(e)||t.push(e),t}),[])}));var P=function(){function t(t){o.set(this,void 0);u.set(this,void 0);__classPrivateFieldSet(this,o,t,"f"),__classPrivateFieldSet(this,u,0,"f")}Object.defineProperty(t.prototype,"isEmpty",{get:function(){return this.length<1},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"index",{get:function(){return __classPrivateFieldGet(this,u,"f")},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"length",{get:function(){return __classPrivateFieldGet(this,o,"f").length},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"current",{get:function(){return __classPrivateFieldGet(this,o,"f")[__classPrivateFieldGet(this,u,"f")]},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"next",{get:function(){var t=this.length;var e=__classPrivateFieldGet(this,u,"f");return __classPrivateFieldSet(this,u,e++<t-1?e:0,"f"),this.current},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"prev",{get:function(){var t=this.length;var e=__classPrivateFieldGet(this,u,"f");return __classPrivateFieldSet(this,u,--e<0?t-1:e,"f"),this.current},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"peekNext",{get:function(){var t=this.length,e=__classPrivateFieldGet(this,u,"f");return __classPrivateFieldGet(this,o,"f")[e+1<t?e+1:0]},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"peekPrev",{get:function(){var t=this.length,e=__classPrivateFieldGet(this,u,"f");return __classPrivateFieldGet(this,o,"f")[e-1<0?t-1:e-1]},enumerable:false,configurable:true});return t}();o=new WeakMap,u=new WeakMap;t("c",P);function x(t,e){try{return t()}catch(r){return e}}var O;x.async=function(t,r){return __awaiter(e,void 0,void 0,(function(){var e;return __generator(this,(function(n){switch(n.label){case 0:n.trys.push([0,2,,3]);return[4,t()];case 1:return[2,n.sent()];case 2:e=n.sent();return[2,r];case 3:return[2]}}))}))};var F=function(){function t(t,e,r){if(e<1||e>12)throw new Error("Invalid month at Assert.DayPoint");if(r<1||r>j(e,t))throw new Error("Invalid date at DayPoint");this._value=arguments.length>=3?new Date(t,e-1,r):new Date,this._day=this._value.getDay(),this._date=r,this._month=e,this._year=t}Object.defineProperty(t.prototype,"value",{get:function(){return this._value},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"day",{get:function(){return this._day},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"date",{get:function(){return this._date},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"month",{get:function(){return this._month},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"year",{get:function(){return this._year},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"shortYear",{get:function(){var t=this._year.toString();return parseInt(t.substr(t.length-2))},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"isWeekday",{get:function(){var t=this._day;return t>0&&t<6},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"isWeekend",{get:function(){return!this.isWeekday},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"isLeapYear",{get:function(){return S(this._year)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"nextDay",{get:function(){return N(this,1,0,0)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"prevDay",{get:function(){return N(this,-1,0,0)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"nextMonth",{get:function(){return N(this,0,1,0)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"prevMonth",{get:function(){return N(this,0,-1,0)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"nextYear",{get:function(){return N(this,0,0,1)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"prevYear",{get:function(){return N(this,0,0,-1)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"firstDayOfMonth",{get:function(){return new t(this._year,this._month,1)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"lastDayOfMonth",{get:function(){return new t(this._year,this._month,j(this._month,this._year))},enumerable:false,configurable:true});t.prototype.add=function(t,e,r){function n(t,e,r){var n=t,i=e;for(;i--;)n=n[r];return n}var i=Math.abs,o=i(t),u=i(r),a=i(e),s=r<0?"prevDay":"nextDay",c=e<0?"prevMonth":"nextMonth";return n(n(n(this,o,t<0?"prevYear":"nextYear"),a,c),u,s)};t.prototype.isBefore=function(t){return!(this.isAfter(t)||this.equals(t))};t.prototype.isAfter=function(t){var e=this._year,r=t.year,n=this._month,i=t.month;return e>r||(e===r&&n>i||e===r&&n===i&&this._date>t.date)};t.prototype.equals=function(t){return this._year===t.year&&this._month===t.month&&this._date===t.date};t.prototype.toString=function(t){if(t===void 0){t="mm/dd/yyyy"}var e=/y{3,}/i.test(t)?this._year:this.shortYear,r=this._month,n=this._date,i=/m{2}/i.test(t)&&r<10?"0{1}":"{1}",o=/d{2}/i.test(t)&&n<10?"0{2}":"{2}";return d(t.replace(/y+/gi,"{0}").replace(/m+/gi,i).replace(/d+/gi,o),e,r,n)};t.prototype.toDate=function(){return this._value};t.prototype.toJson=function(){return this._value.toJSON()};t.canParse=function(e){return h.isString(e)||h.isNumber(e)||h.isDate(e)?!isNaN(new Date(e).valueOf()):e instanceof t};t.parse=function(e){if(e instanceof t)return e;var r=h.isString(e)?v(e).replace(/T\d{2}:\d{2}:\d{2}(.\d+)?Z/,""):e;if(/^\d{4}-\d{1,2}-\d{1,2}$/.test(r)){var n=r.split("-"),i=n[0];n.push(i),n.shift(),r=n.join("/")}var o=new Date(r);if(!h.exists(r)||Number.isNaN(o.valueOf()))throw new Error(d("Cannot parse value= {0}",r));return new t(o.getFullYear(),o.getMonth()+1,o.getDate())};t.tryParse=function(e){return x((function(){return t.parse(e)}),null)};t.assumeNow=function(e){O=t.parse(e)};Object.defineProperty(t,"today",{get:function(){return O||t.parse(new Date)},enumerable:false,configurable:true});return t}();function j(t,e){return 2===t?S(e)?29:28:t<8&&h.isEven(t)||t>7&&h.isOdd(t)?30:31}function S(t){var e=t.toString().split(/\B/);return parseFloat(y(e[e.length-2],e[e.length-1]))%4==0}function N(t,e,r,n){var i=t.month,o=t.year,u=t.date,a=r,s=n;var c=u+e,f=i+a,l=o+s;if(u+e>j(i,o)&&(c=1,f=i+a+1),u+e<1){var p=t.prevMonth;c=j(p.month,p.year),f=i+a-1}return f>12&&(f=1,l=o+s+1),f<1&&(f=12,l=o+s-1),new F(l,f,c)}function A(t,e){if(e===void 0){e=0}var r=Math.pow(10,-e);return Math.round(parseFloat((t*r).toFixed(Math.abs(e))))/r}function M(t,e){if(e===void 0){e=0}return A(t+5*Math.pow(10,e-1),e)}function E(t,e){if(e===void 0){e=0}if(0===t)return 0;return A(t-5*Math.pow(10,e-1),e)}function B(t,e){if(e===void 0){e=0}return t<0?M(t,e):E(t,e)}function G(t){var e=function(t,r,n){if(r===void 0){r=0}if(n===void 0){n=1}return 0<t?e(--t,n,r+n):r};return e(t)}function k(t){var e=0,r=1,n=0;for(;t>1;)n=e,e=r,r+=n,t--;return t<1?e:r}function D(t,e){if(e===void 0){e=0}var r=parseInt(t);return Number.isNaN(r)?e:r}var T=Object.freeze({__proto__:null,random:function(t,e){if(t===void 0){t=0}if(e===void 0){e=1}return Math.random()*(e-t)+t},round:A,roundUp:M,roundDown:E,roundTowardZero:B,gcd:function t(e,r){return 0===r?Math.abs(e):t(r,e%r)},fib:G,fib2:k,fibArray:function(t){return Array(t).fill(0).map((function(){return G(--t)})).reverse()},fib2Array:function(t){return Array(t).fill(0).map((function(){return k(--t)})).reverse()},tryParseInt:D,tryParseFloat:function(t,e){if(e===void 0){e=0}var r=parseFloat(t);return Number.isNaN(r)?e:r}});var $=function(){function t(t,e){if(t===void 0){t=0}if(!h.isNumber(t))throw new Error("Money requires valid numeric amount.");var r=B(t);this._cents=/\./.test(t)?parseFloat(t.toString().replace(/\d+\./,".")):0,this._dollars=r,this._currency=e||"$",this._value=t}Object.defineProperty(t.prototype,"cents",{get:function(){return this._cents},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"dollars",{get:function(){return this._dollars},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"currency",{get:function(){return this._currency},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"value",{get:function(){return this._value},enumerable:false,configurable:true});t.prototype.add=function(e){return z(this,e),new t(this.value+e.value,this.currency)};t.prototype.subtract=function(e){return z(this,e),new t(this.value-e.value,this.currency)};t.prototype.multiply=function(e){if(!h.isNumber(e))throw new Error("Invalid factor ".concat(e));return new t(this.value*e,this.currency)};t.prototype.divide=function(e){if(!h.isNumber(e))throw new Error("Invalid divisor ".concat(e));return new t(this.value/e,this.currency)};t.prototype.equals=function(t){return this.isOfCurrency(t)&&this.value===t.value};t.prototype.isGreaterThan=function(t){return z(this,t),this.value>t.value};t.prototype.isLessThan=function(t){return z(this,t),this.value<t.value};Object.defineProperty(t.prototype,"nearestWhole",{get:function(){return new t(A(this.value,0),this.currency)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"nearestDollar",{get:function(){return this.nearestWhole},enumerable:false,configurable:true});t.prototype.round=function(e){if(e===void 0){e=-2}return new t(A(this.value,e),this.currency)};t.prototype.roundDown=function(e){if(e===void 0){e=-2}return new t(E(this.value,e),this.currency)};t.prototype.roundUp=function(e){if(e===void 0){e=-2}return new t(M(this.value,e),this.currency)};t.prototype.exchange=function(e,r){return new t(this.multiply(e).value,r)};t.prototype.isOfCurrency=function(t){return this.currency===t.currency};t.prototype.toString=function(t,e){if(t===void 0){t="d.c2"}var r=/d(.)c(\d+)/.exec(t),n=r[1],i=r[2],o=e||{".":",",",":"."}[n],u=function(t,e){if(0===t)return"0";var r=t.toString().replace(/[^\d]/,"").split(/\B/);var n=0;return r.reverse().reduce((function(t,r){return n>0&&!(n%3)&&(t.push(e),n=0),t.push(r),n++,t}),[]).reverse().join("").replace(/[^\d]$/,"")}(this.dollars,o||","),a=function(t,e){var r=t.toString().replace(/[^\d]|0\./g,""),n="0".repeat(e);return"".concat(r).concat(n).slice(0,e)}(this.cents,D(i,2)),s="".concat(this.currency).concat(u).concat(n).concat(a);return this.value<0?"(".concat(s,")"):s};t.zero=function(e){return new t(0,e)};t.isMoney=function(e){return e instanceof t};t.canParse=function(e){try{return t.parse(e),!0}catch(e){return!1}};t.parse=function(e){if(h.isNumber(e))return new t(e);var r=e;if(/,\d{2}$/.test(e)){var n=e.split(","),i=n.pop();r="".concat(n.join().replace(/\./g,","),".").concat(i)}var o=/(\(.*\))|(-)/.test(r),u=o?1:0,a=r.match(/[^\d.,-]/g),s=h.isArray(a)?a[u]:null,c=parseFloat(r.replace(/[^\d.]/g,""));return new t(o?-c:c,s)};t.tryParse=function(e){return x((function(){return t.parse(e)}),null)};return t}();function z(t,e){if(!t.isOfCurrency(e))throw new Error("Invalid operation on non-conforming currencies. ".concat(t.currency," !== ").concat(e.currency))}var W=function(){function t(t,e){if(t===void 0){t=0}if(e===void 0){e=0}if(!h.isNumber(t)||!h.isNumber(e))throw new Error("Coord requires numeric x and y values");this._x=t,this._y=e}Object.defineProperty(t.prototype,"x",{get:function(){return this._x},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"y",{get:function(){return this._y},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"value",{get:function(){return{x:this.x,y:this.y}},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"half",{get:function(){return this.divide(new t(2,2))},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"abs",{get:function(){return new t(Math.abs(this.x),Math.abs(this.y))},enumerable:false,configurable:true});t.prototype.equals=function(t){return this.x===t.x&&this.y===t.y};t.prototype.add=function(e){return new t(this.x+e.x,this.y+e.y)};t.prototype.subtract=function(e){return new t(this.x-e.x,this.y-e.y)};t.prototype.multiply=function(e){return new t(this.x*e.x,this.y*e.y)};t.prototype.divide=function(e){return new t(this.x/e.x,this.y/e.y)};t.prototype.round=function(e){if(e===void 0){e=0}return new t(A(this.x,e),A(this.y,e))};t.prototype.toString=function(){return"(".concat(this.x,",").concat(this.y,")")};t.canParse=function(e){return h.isArray(e)?!(Number.isNaN(e[0])||Number.isNaN(e[1])):h.isObjectLiteral(e)&&"x"in e&&"y"in e?!(Number.isNaN(e.x)||Number.isNaN(e.y)):e instanceof t};t.parse=function(e){return h.exists(e)?e instanceof t?e:h.isArray(e)?new t(e[0],e[1]):h.isObjectLiteral(e)&&h.exists(e.x)&&h.exists(e.y)?new t(e.x,e.y):null:null};t.tryParse=function(e){return x((function(){return t.parse(e)}),null)};return t}();var C=function(t){__extends(e,t);function e(e,r){if(e===void 0){e=0}if(r===void 0){r=0}var n=this;n=t.call(this,e,r)||this,n._lengthSquared=Math.pow(e,2)+Math.pow(r,2),n._magnitude=Math.sqrt(n._lengthSquared),n._unitNormalX=0===e&&0===r?0:e/n._magnitude,n._unitNormalY=0===e&&0===r?0:r/n._magnitude;return n}Object.defineProperty(e.prototype,"magnitude",{get:function(){return this._magnitude},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"isZero",{get:function(){return 0===this.x&&0===this.y},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"normal",{get:function(){return new e(this._unitNormalX,this._unitNormalY)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"invert",{get:function(){return new e(-this.x,-this.y)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"norm",{get:function(){return new e(Math.abs(this.x),Math.abs(this.y))},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"perpendicular",{get:function(){return new e(-this.y,this.x)},enumerable:false,configurable:true});e.prototype.equals=function(t){return t instanceof e&&this.x===t.x&&this.y===t.y};e.prototype.add=function(t){return t instanceof e?new e(this.x+t.x,this.y+t.y):null};e.prototype.dot=function(t){return t instanceof e?this.x*t.x+this.y*t.y:null};e.prototype.perpendicularAtTo=function(t){if(!(t instanceof e))return null;var r=t.add(this.projectionOfOnto(t).invert);return new e(r.x,r.y)};e.prototype.projectionOfOnto=function(t){if(!(t instanceof e))return null;var r=t.normal.scale(this.dot(t.normal));return new e(r.x,r.y)};e.prototype.scale=function(t){return new e(this.x*t,this.y*t)};e.prototype.unitNormalDot=function(t){return t instanceof e?this.normal.x*t.normal.x+this.normal.y*t.normal.y:null};e.prototype.reflect=function(t){if(!(t instanceof e))return null;if(t.isZero)return this;var r=t.normal;return this.add(r.scale(2*r.dot(this)).invert)};e.prototype.round=function(t){if(t===void 0){t=0}return new e(A(this.x,t),A(this.y,t))};return e}(W);var L=function(t){__extends(e,t);function e(e,r){return t.call(this,e,r)||this}e.prototype.isAbove=function(t){return this.y<t.y};e.prototype.isBelow=function(t){return this.y>t.y};e.prototype.isLeftOf=function(t){return this.x<t.x};e.prototype.isRightOf=function(t){return this.x>t.x};e.prototype.distanceFrom=function(t){return new C(this.x-t.x,this.y-t.y)};e.prototype.distanceTo=function(t){return this.distanceFrom(t).invert};e.canParse=function(t){return t instanceof e||W.canParse(t)};e.parse=function(t){if(t instanceof e)return t;var r=W.parse(t);return new e(r.x,r.y)};e.tryParse=function(t){return x((function(){return e.parse(t)}),null)};return e}(W);var I=function(){function t(t,e,r,n){if(t===void 0){t=0}if(e===void 0){e=0}if(r===void 0){r=0}if(n===void 0){n=0}this.origin=new L(t,e),this.dimensions=new W(r,n),this.diagonal=L.parse(this.origin.add(this.dimensions)),this.center=this.diagonal.half}t.prototype.contains=function(t){return this.origin.isAbove(t)&&this.origin.isLeftOf(t)&&this.diagonal.isRightOf(t)&&this.diagonal.isBelow(t)};t.prototype.aspectToFit=function(e){var r=this.dimensions,n=e.dimensions,i=n.x,o=n.y;var u=r.x,a=r.y;return u>a&&0!==u?(a*=i/u,u=i,a>o&&(a=o,u*=a/r.y)):a>o&&(u*=o/a,a=o),new t(this.origin.x,this.origin.y,u,a)};return t}();t("M",I);var q=function(){function t(){if(this.constructor===t)throw new Error("Cannot instantiate abstract class: AbstractSpecification")}t.prototype.and=function(t){return new Y(this,t)};t.prototype.or=function(t){return new Z(this,t)};t.prototype.xor=function(t){return new R(this,t)};t.prototype.not=function(t){return new U(this,t)};t.prototype.isSatisfiedBy=function(){throw new Error("Abstract method must be implemented.")};return t}();var Y=function(t){__extends(e,t);function e(e,r){var n=this;n=t.call(this)||this,n._specificationA=e,n._specificationB=r;return n}e.prototype.isSatisfiedBy=function(t){return this._specificationA.isSatisfiedBy(t)&&this._specificationB.isSatisfiedBy(t)};return e}(q);var Z=function(t){__extends(e,t);function e(e,r){var n=this;n=t.call(this)||this,n._specificationA=e,n._specificationB=r;return n}e.prototype.isSatisfiedBy=function(t){return this._specificationA.isSatisfiedBy(t)||this._specificationB.isSatisfiedBy(t)};return e}(q);var R=function(t){__extends(e,t);function e(e,r){var n=this;n=t.call(this)||this,n._specificationA=e,n._specificationB=r;return n}e.prototype.isSatisfiedBy=function(t){return!this._specificationA.isSatisfiedBy(t)!=!this._specificationB.isSatisfiedBy(t)};return e}(q);var U=function(t){__extends(e,t);function e(e){var r=this;r=t.call(this)||this,r._specification=e;return r}e.prototype.isSatisfiedBy=function(t){return!this._specification.isSatisfiedBy(t)};return e}(q);var J=function(){function t(){if(this.constructor===t)throw new Error("Cannot instantiate abstract class.")}t.prototype.execute=function(){throw new Error("Abstract method must be implemented.")};return t}();var X=t("j",(function(t,e,r){if(r===void 0){r=!1}var n;return function(){var i=[];for(var o=0;o<arguments.length;o++){i[o]=arguments[o]}var u=r&&!n;clearTimeout(n),n=setTimeout((function(){n=null,r||t.apply(void 0,i)}),e),u&&t.apply(void 0,i)}})),H=function(t,e){return h.isPromise(t)||h.isAsyncFunction(t)?h.isFunction(t.then)?t.then((function(t){return t&&e()})):t().then((function(t){return t&&e()})):h.isFunction(t)&&t?t()&&e():h.isTrue(t)&&e()};var K=function(){function t(t){a.set(this,void 0);s.set(this,void 0);c.set(this,void 0);__classPrivateFieldSet(this,a,t,"f")}Object.defineProperty(t.prototype,"isRunning",{get:function(){return h.exists(__classPrivateFieldGet(this,s,"f"))},enumerable:false,configurable:true});t.prototype.onInterval=function(t){return this.clear(),__classPrivateFieldSet(this,c,t,"f"),this};t.prototype.start=function(){var t=this;return this.clear(),__classPrivateFieldSet(this,s,setInterval((function(){__classPrivateFieldGet(t,c,"f").call(t)}),__classPrivateFieldGet(this,a,"f")),"f"),this};t.prototype.clear=function(){return clearInterval(__classPrivateFieldGet(this,s,"f")),__classPrivateFieldSet(this,s,null,"f"),this};return t}();a=new WeakMap,s=new WeakMap,c=new WeakMap;t("L",K);var Q=function(t){return setTimeout(t,0)};var V=function(){function t(t){f.set(this,void 0);l.set(this,void 0);p.set(this,void 0);__classPrivateFieldSet(this,f,t,"f")}Object.defineProperty(t.prototype,"isRunning",{get:function(){return h.exists(__classPrivateFieldGet(this,l,"f"))},enumerable:false,configurable:true});t.prototype.onTimeout=function(t){return this.clear(),__classPrivateFieldSet(this,p,t,"f"),this};t.prototype.start=function(){var t=this;return this.clear(),__classPrivateFieldSet(this,l,setTimeout((function(){__classPrivateFieldGet(t,p,"f").call(t)}),__classPrivateFieldGet(this,f,"f")),"f"),this};t.prototype.clear=function(){return clearTimeout(__classPrivateFieldGet(this,l,"f")),__classPrivateFieldSet(this,l,null,"f"),this};return t}();f=new WeakMap,l=new WeakMap,p=new WeakMap;t("C",V);var tt=t("Y",(function(t){return new Promise((function(e){return setTimeout(e,t)}))}));function et(t){var e=isNaN(parseInt(t))||t<0||t>24?24:t,r=Math.random().toString().substring(2),n=Math.random().toString().substring(2);return r.concat(n).substring(0,e)}function rt(){return function t(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,t)}()}var nt=t("R",Object.freeze({__proto__:null,uid:et,uuid:rt,suid:function(){return Symbol(et())},suuid:function(){return Symbol(rt())}}));var it=Object.freeze({__proto__:null,pattern:function(t){return t.toString().replace(/(^\/)|(\/$)/g,"").replace(/\\/g,"\\")},escape:function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},alpha:/^[A-z]+$/,alphaNumeric:/^[A-z0-9]+$/,base64:/^[A-z0-9=]+$/,dataUrl:/^\s*data:([a-z]+\/[a-z0-9+-]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=._~:@/?%\s-]*\s*$/i,email:/^\w+([.\w-+]+)?@\w+([.\w-]+)?\.[A-Za-z0-9]{2,}$/,empty:/^$/,numeric:/^-?[0-9]+$/,script:/(<script[A-z0-9\n\s\t\r.={([\])}'",;!&|$/#:<>*?+\u0000-\u0037\u00C2\u00A0\u2122-]*?<\/script>)/,uid:/^\d{14,}$/i,url:/^(https?:\/\/)?[^{}\\:]+\.[A-z0-9]{2,12}(\/[^?\s]+)*\/?(\?([^=?#]+=[^=?#]*(&[^=?#]+=[^=?#]*)*(#.*)?)?)?$/,uuid:/^[{(]?[0-9A-F]{8}[-]?([0-9A-F]{4}[-]?){3}[0-9A-F]{12}[)}]?$/i})}}}));