var __extends=this&&this.__extends||function(){var e=function(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))e[n]=t[n]};return e(t,n)};return function(t,n){e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();var __awaiter=this&&this.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function u(e){try{s(r.next(e))}catch(t){o(t)}}function a(e){try{s(r["throw"](e))}catch(t){o(t)}}function s(e){e.done?n(e.value):i(e.value).then(u,a)}s((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(e){return function(t){return s([e,t])}}function s(u){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=u[0]&2?i["return"]:u[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;if(i=0,o)u=[u[0]&2,o.value];switch(u[0]){case 0:case 1:o=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;i=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1];o=u;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(u);break}if(o[2])n.ops.pop();n.trys.pop();continue}u=t.call(e,n)}catch(a){u=[6,a];i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var o=arguments[t],u=0,a=o.length;u<a;u++,i++)r[i]=o[u];return r};System.register([],(function(e){"use strict";return{execute:function(){var t=this;var n=function(){function e(){}e.isNull=function(e){return null===e};e.isEmpty=function(t){return e.isString(t)&&""===t||e.isArray(t)&&t.length<1||e.isObjectLiteral(t)&&Object.keys(t).length<1};e.isUndefined=function(e){return void 0===e};e.isZero=function(e){return 0===e};e.exists=function(t){return!(e.isUndefined(t)||e.isNull(t))};e.isNullOrEmpty=function(t){return!e.exists(t)||e.isEmpty(t)};e.isArray=function(e){return Array.isArray(e)};e.isBool=function(e){return"boolean"==typeof e};e.isTrue=function(t){return e.isBool(t)&&!0===t};e.isFalse=function(t){return e.isBool(t)&&!1===t};e.isDate=function(e){return e instanceof Date};e.isNumber=function(e){return("number"==typeof e||e instanceof Number)&&!isNaN(e)};e.isEven=function(e){return this.isNumber(e)&&!this.isZero(e)&&e%2==0};e.isOdd=function(e){return this.isNumber(e)&&!this.isZero(e)&&!this.isEven(e)};e.isString=function(e){return"string"==typeof e||e instanceof String};e.isFunction=function(e){return e instanceof Function};e.isAsyncFunction=function(t){try{return"AsyncFunction"===Object.getPrototypeOf(t).constructor.name||e.isFunction(t)&&/^async/.test(t.toString())||e.isFunction(t().then)}catch(t){return!1}};e.isPromise=function(e){return e instanceof Promise};e.isObject=function(t){return e.exists(t)&&"object"==typeof t&&!(e.isBool(t)||e.isNumber(t)||e.isDate(t)||e.isArray(t)||e.isString(t)||e.isFunction(t))};e.isObjectLiteral=function(t){return e.isObject(t)&&t.constructor==={}.constructor};e.isTruthy=function(t){return!e.isFalsy(t)};e.isFalsy=function(t){return e.isZero(t)||e.isFalse(t)||e.isNullOrEmpty(t)||isNaN(t)};return e}();function r(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}return"".concat.apply("",e)}function i(e){var t=[];for(var n=1;n<arguments.length;n++){t[n-1]=arguments[n]}return t.reduce((function(e,t,n){return e.replace(new RegExp("\\{"+n+"\\}","g"),t&&t.toString?t.toString():t)}),e)}function o(e){return u(a(e))}function u(e){return n.exists(e)&&n.isFunction(e.replace)?e.replace(/^[\s\n]*/,""):e}function a(e){return n.exists(e)&&n.isFunction(e.replace)?e.replace(/[\s\n]*$/,""):e}var s=Object.freeze({__proto__:null,build:r,chunk:function(e,t){if(t===void 0){t=0}if(!n.isString(e)||Number.isNaN(t)||t<0)return[];if(t<e.length){var r=0;var i=t||e.length,o=[];for(;r<e.length;)o.push(e.slice(r,r+i)),r+=i;return o}return[e]},format:i,trim:o,trimStart:u,trimEnd:a,capitalize:function(e){if(e===void 0){e=""}return(e||"").charAt(0).toUpperCase()+(e||"").slice(1).toLowerCase()},mask:function(e,t,r){if(r===void 0){r="_"}return n.isFunction(t)?t(e):n.isString(t)&&e.split("").reduce((function(e,t){return e.replace(new RegExp(r),t)}),t)},unmask:function(e,t,r){if(r===void 0){r="_"}var i=new RegExp(r);return n.isFunction(t)?t(e):n.isString(t)&&e.split("").reduce((function(e,n,r){return!i.test(n)&&i.test(t.charAt(r))?e+n:e}),"")}});function c(e,t){try{return e()}catch(n){return t}}var f;c.async=function(e,n){return __awaiter(t,void 0,void 0,(function(){var t;return __generator(this,(function(r){switch(r.label){case 0:r.trys.push([0,2,,3]);return[4,e()];case 1:return[2,r.sent()];case 2:t=r.sent();return[2,n];case 3:return[2]}}))}))};var l=function(){function e(e,t,n){if(t<1||t>12)throw new Error("Invalid month at Assert.DayPoint");if(n<1||n>d(t,e))throw new Error("Invalid date at DayPoint");this._value=arguments.length>=3?new Date(e,t-1,n):new Date,this._day=this._value.getDay(),this._date=n,this._month=t,this._year=e}Object.defineProperty(e.prototype,"value",{get:function(){return this._value},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"day",{get:function(){return this._day},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"date",{get:function(){return this._date},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"month",{get:function(){return this._month},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"year",{get:function(){return this._year},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"shortYear",{get:function(){var e=this._year.toString();return parseInt(e.substr(e.length-2))},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"isWeekday",{get:function(){var e=this._day;return e>0&&e<6},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"isWeekend",{get:function(){return!this.isWeekday},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"isLeapYear",{get:function(){return y(this._year)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"nextDay",{get:function(){return p(this,1,0,0)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"prevDay",{get:function(){return p(this,-1,0,0)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"nextMonth",{get:function(){return p(this,0,1,0)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"prevMonth",{get:function(){return p(this,0,-1,0)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"nextYear",{get:function(){return p(this,0,0,1)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"prevYear",{get:function(){return p(this,0,0,-1)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"firstDayOfMonth",{get:function(){return new e(this._year,this._month,1)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"lastDayOfMonth",{get:function(){return new e(this._year,this._month,d(this._month,this._year))},enumerable:false,configurable:true});e.prototype.add=function(e,t,n){function r(e,t,n){var r=e,i=t;for(;i--;)r=r[n];return r}var i=Math.abs,o=i(e),u=i(n),a=i(t),s=n<0?"prevDay":"nextDay",c=t<0?"prevMonth":"nextMonth";return r(r(r(this,o,e<0?"prevYear":"nextYear"),a,c),u,s)};e.prototype.isBefore=function(e){return!(this.isAfter(e)||this.equals(e))};e.prototype.isAfter=function(e){var t=this._year,n=e.year,r=this._month,i=e.month;return t>n||t===n&&r>i||t===n&&r===i&&this._date>e.date};e.prototype.equals=function(e){return this._year===e.year&&this._month===e.month&&this._date===e.date};e.prototype.toString=function(e){if(e===void 0){e="mm/dd/yyyy"}var t=/y{3,}/i.test(e)?this._year:this.shortYear,n=this._month,r=this._date,o=/m{2}/i.test(e)&&n<10?"0{1}":"{1}",u=/d{2}/i.test(e)&&r<10?"0{2}":"{2}";return i(e.replace(/y+/gi,"{0}").replace(/m+/gi,o).replace(/d+/gi,u),t,n,r)};e.prototype.toDate=function(){return this._value};e.prototype.toJson=function(){return this._value.toJSON()};e.canParse=function(t){return n.isString(t)||n.isNumber(t)||n.isDate(t)?!isNaN(new Date(t).valueOf()):t instanceof e};e.parse=function(t){if(t instanceof e)return t;var r=n.isString(t)?o(t).replace(/T\d{2}:\d{2}:\d{2}(.\d+)?Z/,""):t;if(/^\d{4}-\d{1,2}-\d{1,2}$/.test(r)){var u=r.split("-"),a=u[0];u.push(a),u.shift(),r=u.join("/")}var s=new Date(r);if(!n.exists(r)||Number.isNaN(s.valueOf()))throw new Error(i("Cannot parse value= {0}",r));return new e(s.getFullYear(),s.getMonth()+1,s.getDate())};e.tryParse=function(t){return c((function(){return e.parse(t)}),null)};e.assumeNow=function(t){f=e.parse(t)};Object.defineProperty(e,"today",{get:function(){return f||e.parse(new Date)},enumerable:false,configurable:true});return e}();function d(e,t){return 2===e?y(t)?29:28:e<8&&n.isEven(e)||e>7&&n.isOdd(e)?30:31}function y(e){var t=e.toString().split(/\B/);return parseFloat(r(t[t.length-2],t[t.length-1]))%4==0}function p(e,t,n,r){var i=e.month,o=e.year,u=e.date,a=n,s=r;var c=u+t,f=i+a,y=o+s;if(u+t>d(i,o)&&(c=1,f=i+a+1),u+t<1){var p=e.prevMonth;c=d(p.month,p.year),f=i+a-1}return f>12&&(f=1,y=o+s+1),f<1&&(f=12,y=o+s-1),new l(y,f,c)}function h(e,t){if(t===void 0){t=0}var n=Math.pow(10,-t);return Math.round(parseFloat((e*n).toFixed(Math.abs(t))))/n}function b(e,t){if(t===void 0){t=0}return h(e+5*Math.pow(10,t-1),t)}function m(e,t){if(t===void 0){t=0}return 0===e?0:h(e-5*Math.pow(10,t-1),t)}function g(e,t){if(t===void 0){t=0}return e<0?b(e,t):m(e,t)}function v(e){var t=function(e,n,r){if(n===void 0){n=0}if(r===void 0){r=1}return 0<e?t(--e,r,n+r):n};return t(e)}function w(e){var t=0,n=1,r=0;for(;e>1;)r=t,t=n,n+=r,e--;return e<1?t:n}function O(e,t){if(t===void 0){t=0}var n=parseInt(e);return Number.isNaN(n)?t:n}Object.freeze({__proto__:null,random:function(e,t){if(e===void 0){e=0}if(t===void 0){t=1}return Math.random()*(t-e)+e},round:h,roundUp:b,roundDown:m,roundTowardZero:g,gcd:function e(t,n){return 0===n?Math.abs(t):e(n,t%n)},fib:v,fib2:w,fibArray:function(e){return Array(e).fill(0).map((function(){return v(--e)})).reverse()},fib2Array:function(e){return Array(e).fill(0).map((function(){return w(--e)})).reverse()},tryParseInt:O,tryParseFloat:function(e,t){if(t===void 0){t=0}var n=parseFloat(e);return Number.isNaN(n)?t:n}});var _=function(){function e(e,t){if(e===void 0){e=0}if(t===void 0){t=0}if(!n.isNumber(e)||!n.isNumber(t))throw new Error("Coord requires numeric x and y values");this._x=e,this._y=t}Object.defineProperty(e.prototype,"x",{get:function(){return this._x},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"y",{get:function(){return this._y},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"value",{get:function(){return{x:this.x,y:this.y}},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"half",{get:function(){return this.divide(new e(2,2))},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"abs",{get:function(){return new e(Math.abs(this.x),Math.abs(this.y))},enumerable:false,configurable:true});e.prototype.equals=function(e){return this.x===e.x&&this.y===e.y};e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y)};e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y)};e.prototype.multiply=function(t){return new e(this.x*t.x,this.y*t.y)};e.prototype.divide=function(t){return new e(this.x/t.x,this.y/t.y)};e.prototype.round=function(t){if(t===void 0){t=0}return new e(h(this.x,t),h(this.y,t))};e.prototype.toString=function(){return"("+this.x+","+this.y+")"};e.canParse=function(t){return n.isArray(t)?!(Number.isNaN(t[0])||Number.isNaN(t[1])):n.isObjectLiteral(t)&&"x"in t&&"y"in t?!(Number.isNaN(t.x)||Number.isNaN(t.y)):t instanceof e};e.parse=function(t){return n.exists(t)?t instanceof e?t:n.isArray(t)?new e(t[0],t[1]):n.isObjectLiteral(t)&&n.exists(t.x)&&n.exists(t.y)?new e(t.x,t.y):null:null};e.tryParse=function(t){return c((function(){return e.parse(t)}),null)};return e}();var x=function(e){__extends(t,e);function t(t,n){if(t===void 0){t=0}if(n===void 0){n=0}var r=this;r=e.call(this,t,n)||this,r._lengthSquared=Math.pow(t,2)+Math.pow(n,2),r._magnitude=Math.sqrt(r._lengthSquared),r._unitNormalX=0===t&&0===n?0:t/r._magnitude,r._unitNormalY=0===t&&0===n?0:n/r._magnitude;return r}Object.defineProperty(t.prototype,"magnitude",{get:function(){return this._magnitude},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"isZero",{get:function(){return 0===this.x&&0===this.y},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"normal",{get:function(){return new t(this._unitNormalX,this._unitNormalY)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"invert",{get:function(){return new t(-this.x,-this.y)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"norm",{get:function(){return new t(Math.abs(this.x),Math.abs(this.y))},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"perpendicular",{get:function(){return new t(-this.y,this.x)},enumerable:false,configurable:true});t.prototype.equals=function(e){return e instanceof t&&this.x===e.x&&this.y===e.y};t.prototype.add=function(e){return e instanceof t?new t(this.x+e.x,this.y+e.y):null};t.prototype.dot=function(e){return e instanceof t?this.x*e.x+this.y*e.y:null};t.prototype.perpendicularAtTo=function(e){if(!(e instanceof t))return null;var n=e.add(this.projectionOfOnto(e).invert);return new t(n.x,n.y)};t.prototype.projectionOfOnto=function(e){if(!(e instanceof t))return null;var n=e.normal.scale(this.dot(e.normal));return new t(n.x,n.y)};t.prototype.scale=function(e){return new t(this.x*e,this.y*e)};t.prototype.unitNormalDot=function(e){return e instanceof t?this.normal.x*e.normal.x+this.normal.y*e.normal.y:null};t.prototype.reflect=function(e){if(!(e instanceof t))return null;if(e.isZero)return this;var n=e.normal;return this.add(n.scale(2*n.dot(this)).invert)};t.prototype.round=function(e){if(e===void 0){e=0}return new t(h(this.x,e),h(this.y,e))};return t}(_);var P=function(e){__extends(t,e);function t(t,n){return e.call(this,t,n)||this}t.prototype.isAbove=function(e){return this.y<e.y};t.prototype.isBelow=function(e){return this.y>e.y};t.prototype.isLeftOf=function(e){return this.x<e.x};t.prototype.isRightOf=function(e){return this.x>e.x};t.prototype.distanceFrom=function(e){return new x(this.x-e.x,this.y-e.y)};t.prototype.distanceTo=function(e){return this.distanceFrom(e).invert};t.canParse=function(e){return e instanceof t||_.canParse(e)};t.parse=function(e){if(e instanceof t)return e;var n=_.parse(e);return new t(n.x,n.y)};t.tryParse=function(e){return c((function(){return t.parse(e)}),null)};return t}(_);function j(){return Math.random().toString().substr(2)}function S(){return function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}()}var K=Object.freeze({__proto__:null,uid:j,uuid:S,suid:function(){return Symbol(j())},suuid:function(){return Symbol(S())}});Object.freeze({__proto__:null,pattern:function(e){return e.toString().replace(/(^\/)|(\/$)/g,"").replace(/\\/g,"\\")},escape:function(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},alpha:/^[A-z]+$/,alphaNumeric:/^[A-z0-9]+$/,base64:/^[A-z0-9=]+$/,dataUrl:/^\s*data:([a-z]+\/[a-z0-9+-]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=._~:@/?%\s-]*\s*$/i,email:/^\w+([.\w-]+)?@\w+([.\w-]+)?\.[A-Za-z0-9]{2,}$/,empty:/^$/,numeric:/^-?[0-9]+$/,script:/(<script[A-z0-9\n\s\t\r.={([\])}'",;!&|$/#:<>*?+\u0000-\u0037\u00C2\u00A0\u2122-]*?<\/script>)/,uid:/^\d{14,}$/i,url:/^(https?:\/\/)?[^{}\\:]+\.[A-z0-9]{2,12}(\/[^?\s]+)*\/?(\?([^=?#]+=[^=?#]*(&[^=?#]+=[^=?#]*)*(#.*)?)?)?$/,uuid:/^[{(]?[0-9A-F]{8}[-]?([0-9A-F]{4}[-]?){3}[0-9A-F]{12}[)}]?$/i});var E={name:K.uid(),expires:l.today.nextYear.toDate(),path:"/",domain:null,secure:!1};var N=function(){function e(){}Object.defineProperty(e,"orientation",{get:function(){var t=window.screen,n=(t.orientation||{}).type||t.mozOrientation||t.msOrientation,r=window.orientation;return n===e.landscapePrimary||90===r?e.landscapePrimary:n===e.landscapeSecondary||-90===r?e.landscapeSecondary:n===e.portraitPrimary||0===r?e.portraitPrimary:n===e.portraitSecondary||180===r?e.portraitSecondary:void 0},enumerable:false,configurable:true});Object.defineProperty(e,"landscapePrimary",{get:function(){return"landscape-primary"},enumerable:false,configurable:true});Object.defineProperty(e,"landscapeSecondary",{get:function(){return"landscape-secondary"},enumerable:false,configurable:true});Object.defineProperty(e,"portraitPrimary",{get:function(){return"portrait-primary"},enumerable:false,configurable:true});Object.defineProperty(e,"portraitSecondary",{get:function(){return"portrait-secondary"},enumerable:false,configurable:true});Object.defineProperty(e,"isMobile",{get:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(window.navigator.userAgent)},enumerable:false,configurable:true});return e}();e("a",N);var A=new Set,M=new Set;var Y,F,k,D=!1,T=!1,L=!1,X=!1;var z=function(){function e(){}Object.defineProperty(e,"scrollbarWidth",{get:function(){return window.innerWidth-document.documentElement.clientWidth},enumerable:false,configurable:true});Object.defineProperty(e,"isScrollPrevented",{get:function(){return n.exists(e.scrollY)},enumerable:false,configurable:true});e.preventScroll=function(){try{A.forEach((function(e){return e()}))}catch(t){}e.position=document.body.style.position,e.offsetY=document.body.style.top,e.offsetX=document.body.style.left,e.width=document.body.style.width,e.height=document.body.style.height,e.documentWidth=document.documentElement.style.width,e.documentWidth=document.documentElement.style.width,e.documentHeight=document.documentElement.style.height,e.overflowY=document.documentElement.style.overflowY,e.scrollX=window.scrollX||window.pageXOffset,e.scrollY=window.scrollY||window.pageYOffset;var t=e.scrollbarWidth;document.body.style.position="fixed",document.body.style.left="-"+e.scrollX+"px",document.body.style.top="calc(-"+e.scrollY+"px - "+window.getComputedStyle(document.body)["padding-top"]+" - "+window.getComputedStyle(document.body)["margin-top"]+")",document.body.style.width="calc(100vw - "+t+"px - "+window.getComputedStyle(document.body)["padding-left"]+" - "+window.getComputedStyle(document.body)["padding-right"]+" - "+window.getComputedStyle(document.body)["margin-left"]+" - "+window.getComputedStyle(document.body)["margin-right"]+")",document.documentElement.style.width="100wh",document.documentElement.style.height="100vh",document.documentElement.style.overflowY=t&&"scroll"};e.resumeScroll=function(){try{M.forEach((function(e){return e()}))}catch(r){}document.body.style.position=e.position,document.body.style.top=e.offsetY,document.body.style.left=e.offsetX,document.body.style.width=e.width,document.body.style.height=e.height,document.documentElement.style.width=e.documentWidth,document.documentElement.style.height=e.documentHeight,document.documentElement.style.overflowY=e.overflowY,window.scrollTo(e.scrollX,e.scrollY),e.position=null,e.offsetY=null,e.offsetX=null,e.width=null,e.height=null,e.documentWidth=null,e.documentHeight=null,e.overflowY=null,e.scrollX=null,e.scrollY=null};e.onPreventScroll=function(e){A.add(e)};e.onResumeScroll=function(e){M.add(e)};Object.defineProperty(e,"scroll",{get:function(){return Y||(Y=new B,F=window.pageYOffset,k=window.pageXOffset,D=!1,T=!1,L=!1,X=!1,window.addEventListener("unload",(function(){return Y.unload()}))),Y},enumerable:false,configurable:true});return e}();e("D",z);var $=function(){var e=window.pageYOffset,t=window.pageXOffset;D=e>F,T=e<F,X=t>k,L=t<k,F=e||window.pageYOffset,k=t||window.pageXOffset};var B=function(){function e(){document.addEventListener("scroll",$,{passive:!0})}Object.defineProperty(e.prototype,"down",{get:function(){return D},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"up",{get:function(){return T},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"left",{get:function(){return L},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"right",{get:function(){return X},enumerable:false,configurable:true});e.prototype.unload=function(){document.removeEventListener("scroll",$),D=!1,T=!1,L=!1,X=!1,F=window.pageYOffset,k=window.pageXOffset,Y=null};return e}();var q=function(){function e(){}e.mute=function(e){return!!n.exists(e)&&(n.isFunction(e.preventDefault)&&e.preventDefault(),n.isFunction(e.stopPropagation)&&e.stopPropagation(),n.isFunction(e.stopImmediatePropagation)&&e.stopImmediatePropagation(),n.exists(e.cancelBubble)&&(e.cancelBubble=!0),!1)};return e}();e("E",q);var R=function(e){return new window.FormData(e)},W=function(e){var t={};try{R(e).forEach((function(e,r){var i=t[r];n.isArray(i)?t[r].push(e):n.exists(i)?t[r]=[t[r],e]:t[r]=e}))}catch(n){__spreadArrays(e.elements).forEach((function(e){var n=e.name,r=e.type,i=e.value,o=e.files;if("file"===r)t[n]=o[0];else if("checkbox"===r||"radio"===r)e.checked&&(t[n]=i);else if(e.multiple){var u=[];e.querySelectorAll("option").forEach((function(e){return e.selected&&u.push(e.value)})),t[n]=u.length<2?u[0]:u}else t[n]=i}))}return t},C=function(e){return JSON.stringify(W(e))},Z=function(e,t){e.querySelectorAll("input, textarea").forEach((function(e){n.exists(t[e.name])&&("checkbox"===e.type||"radio"===e.type?e.checked=t[e.name]===e.value:e.value=t[e.name])})),e.querySelectorAll("select").forEach((function(e){n.isArray(t[e.name])?__spreadArrays(e.options).forEach((function(n){n.selected=t[e.name].indexOf(n.value)>=0})):n.exists(t[e.name])&&(e.value=t[e.name])}))};var I=e("i",{read:W,readData:R,readJson:C,write:Z});var U=function(){function e(e,t,n){if(n===void 0){n={}}this.key=e,this.msKey=t||e,this.altKey=n.altKey||!1,this.ctrlKey=n.ctrlKey||!1,this.metaKey=n.metaKey||!1,this.shiftKey=n.shiftKey||!1}Object.defineProperty(e.prototype,"alt",{get:function(){var t=this,n=t.key,r=t.msKey,i=t.ctrlKey,o=t.metaKey,u=t.shiftKey;return new e(n,r,{altKey:!0,ctrlKey:i,metaKey:o,shiftKey:u})},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"ctrl",{get:function(){var t=this,n=t.key,r=t.msKey,i=t.altKey,o=t.metaKey,u=t.shiftKey;return new e(n,r,{altKey:i,ctrlKey:!0,metaKey:o,shiftKey:u})},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"meta",{get:function(){var t=this,n=t.key,r=t.msKey,i=t.altKey,o=t.ctrlKey,u=t.shiftKey;return new e(n,r,{altKey:i,ctrlKey:o,metaKey:!0,shiftKey:u})},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"shift",{get:function(){var t=this,n=t.key,r=t.msKey,i=t.altKey,o=t.ctrlKey,u=t.metaKey;return new e(n,r,{altKey:i,ctrlKey:o,metaKey:u,shiftKey:!0})},enumerable:false,configurable:true});e.prototype.equals=function(t){return t instanceof e&&this.altKey===t.altKey&&this.ctrlKey===t.ctrlKey&&this.metaKey===t.metaKey&&this.shiftKey===t.shiftKey&&(this.key===t.key||this.msKey===t.msKey)};e.prototype.didFire=function(t){var n=t.code,r=t.key,i=t.altKey,o=t.ctrlKey,u=t.metaKey,a=t.shiftKey,s="Dead"===r?n:r;return t&&("ANY"===this.key||this.equals(new e(s,s,{altKey:i,ctrlKey:o,metaKey:u,shiftKey:a})))};Object.defineProperty(e,"press",{get:function(){return"keypress"},enumerable:false,configurable:true});Object.defineProperty(e,"down",{get:function(){return"keydown"},enumerable:false,configurable:true});Object.defineProperty(e,"up",{get:function(){return"keyup"},enumerable:false,configurable:true});Object.defineProperty(e,"any",{get:function(){return new e("ANY")},enumerable:false,configurable:true});Object.defineProperty(e,"esc",{get:function(){return new e("Escape","Esc")},enumerable:false,configurable:true});Object.defineProperty(e,"enter",{get:function(){return new e("Enter")},enumerable:false,configurable:true});Object.defineProperty(e,"space",{get:function(){return new e(" ","Spacebar")},enumerable:false,configurable:true});Object.defineProperty(e,"tab",{get:function(){return new e("Tab")},enumerable:false,configurable:true});Object.defineProperty(e,"left",{get:function(){return new e("ArrowLeft","Left")},enumerable:false,configurable:true});Object.defineProperty(e,"right",{get:function(){return new e("ArrowRight","Right")},enumerable:false,configurable:true});return e}();e("K",U);var J=function(){function e(e,t){if(t===void 0){t=0}this.didTouchStart=this.didTouchStart.bind(this),this.didTouchEnd=this.didTouchEnd.bind(this),this.didTouchMove=this.didTouchMove.bind(this),e.addEventListener("touchstart",this.didTouchStart,{capture:!1,passive:!0}),e.addEventListener("touchend",this.didTouchEnd,{capture:!1,passive:!0}),e.addEventListener("touchmove",this.didTouchMove,{capture:!1,passive:!0}),this.element=e,this.tolerance=t,this.didSwipeLeft=function(){},this.didSwipeRight=function(){},this.didMove=function(){}}e.prototype.onLeft=function(e){return this.didSwipeLeft=e,this};e.prototype.onRight=function(e){return this.didSwipeRight=e,this};e.prototype.onMove=function(e){return this.didMove=e,this};e.prototype.destroy=function(){var e=this.element;return e.removeEventListener("touchstart",this.didTouchStart,!1),e.removeEventListener("touchend",this.didTouchEnd,!1),e.removeEventListener("touchmove",this.didTouchMove,!1),this};e.prototype.didTouchStart=function(e){var t=e.touches[0];this.touchStartPoint=new P(t.pageX,t.pageY)};e.prototype.didTouchEnd=function(e){var t=e.changedTouches[0],n=this.touchStartPoint,r=new P(t.pageX,t.pageY);r.isLeftOf(n)&&Math.abs(r.distanceFrom(n).x)>this.tolerance&&this.didSwipeLeft(e),r.isRightOf(n)&&Math.abs(r.distanceFrom(n).x)>this.tolerance&&this.didSwipeRight(e)};e.prototype.didTouchMove=function(e){var t=e.touches[0],n=this.touchStartPoint,r=new P(t.pageX,t.pageY);this.didMove({distance:r.distanceFrom(n),up:r.isAbove(n),down:r.isBelow(n),left:r.isLeftOf(n),right:r.isRightOf(n)})};return e}();e("S",J)}}}));