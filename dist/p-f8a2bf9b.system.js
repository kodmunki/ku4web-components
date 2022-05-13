var __extends=this&&this.__extends||function(){var e=function(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))e[n]=t[n]};return e(t,n)};return function(t,n){if(typeof n!=="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();var __awaiter=this&&this.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function u(e){try{c(r.next(e))}catch(t){o(t)}}function a(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):i(e.value).then(u,a)}c((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(e){return function(t){return c([e,t])}}function c(u){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=u[0]&2?i["return"]:u[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;if(i=0,o)u=[u[0]&2,o.value];switch(u[0]){case 0:case 1:o=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;i=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1];o=u;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(u);break}if(o[2])n.ops.pop();n.trys.pop();continue}u=t.call(e,n)}catch(a){u=[6,a];i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++){if(o||!(r in t)){if(!o)o=Array.prototype.slice.call(t,0,r);o[r]=t[r]}}return e.concat(o||Array.prototype.slice.call(t))};System.register([],(function(e){"use strict";return{execute:function(){var t=this;var n=function(){function e(){}e.isNull=function(e){return null===e};e.isEmpty=function(t){return e.isString(t)&&""===t||e.isArray(t)&&t.length<1||e.isObjectLiteral(t)&&Object.keys(t).length<1};e.isUndefined=function(e){return void 0===e};e.isZero=function(e){return 0===e};e.exists=function(t){return!(e.isUndefined(t)||e.isNull(t))};e.isNullOrEmpty=function(t){return!e.exists(t)||e.isEmpty(t)};e.isArray=function(e){return Array.isArray(e)};e.isBool=function(e){return"boolean"==typeof e};e.isTrue=function(t){return e.isBool(t)&&!0===t};e.isFalse=function(t){return e.isBool(t)&&!1===t};e.isDate=function(e){return e instanceof Date};e.isNumber=function(e){return("number"==typeof e||e instanceof Number)&&!isNaN(e)};e.isEven=function(e){return this.isNumber(e)&&!this.isZero(e)&&e%2==0};e.isOdd=function(e){return this.isNumber(e)&&!this.isZero(e)&&!this.isEven(e)};e.isString=function(e){return"string"==typeof e||e instanceof String};e.isFunction=function(e){return e instanceof Function};e.isAsyncFunction=function(t){try{return"AsyncFunction"===Object.getPrototypeOf(t).constructor.name||e.isFunction(t)&&/^async/.test(t.toString())||e.isFunction(t().then)}catch(t){return!1}};e.isPromise=function(e){return e instanceof Promise};e.isObject=function(t){return e.exists(t)&&"object"==typeof t&&!(e.isBool(t)||e.isNumber(t)||e.isDate(t)||e.isArray(t)||e.isString(t)||e.isFunction(t))};e.isObjectLiteral=function(t){return e.isObject(t)&&t.constructor==={}.constructor};e.isTruthy=function(t){return!e.isFalsy(t)};e.isFalsy=function(t){return e.isZero(t)||e.isFalse(t)||e.isNullOrEmpty(t)||isNaN(t)};return e}();function r(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}return"".concat.apply("",e)}function i(e){var t=[];for(var n=1;n<arguments.length;n++){t[n-1]=arguments[n]}return t.reduce((function(e,t,n){return e.replace(new RegExp("\\{".concat(n,"\\}"),"g"),t&&t.toString?t.toString():t)}),e)}function o(e){return u(a(e))}function u(e){return n.exists(e)&&n.isFunction(e.replace)?e.replace(/^[\s\n]*/,""):e}function a(e){return n.exists(e)&&n.isFunction(e.replace)?e.replace(/[\s\n]*$/,""):e}Object.freeze({__proto__:null,build:r,chunk:function(e,t){if(t===void 0){t=0}if(!n.isString(e)||Number.isNaN(t)||t<0)return[];if(t<e.length){var r=0;var i=t||e.length,o=[];for(;r<e.length;)o.push(e.slice(r,r+i)),r+=i;return o}return[e]},format:i,trim:o,trimStart:u,trimEnd:a,capitalize:function(e){if(e===void 0){e=""}return(e||"").charAt(0).toUpperCase()+(e||"").slice(1).toLowerCase()},mask:function(e,t,r){if(r===void 0){r="_"}return n.isFunction(t)?t(e):n.isString(t)&&e.split("").reduce((function(e,t){return e.replace(new RegExp(r),t)}),t)},unmask:function(e,t,r){if(r===void 0){r="_"}var i=new RegExp(r);return n.isFunction(t)?t(e):n.isString(t)&&e.split("").reduce((function(e,n,r){return!i.test(n)&&i.test(t.charAt(r))?e+n:e}),"")}});function c(e,t){try{return e()}catch(n){return t}}var s;c.async=function(e,n){return __awaiter(t,void 0,void 0,(function(){var t;return __generator(this,(function(r){switch(r.label){case 0:r.trys.push([0,2,,3]);return[4,e()];case 1:return[2,r.sent()];case 2:t=r.sent();return[2,n];case 3:return[2]}}))}))};var f=function(){function e(e,t,n){if(t<1||t>12)throw new Error("Invalid month at Assert.DayPoint");if(n<1||n>l(t,e))throw new Error("Invalid date at DayPoint");this._value=arguments.length>=3?new Date(e,t-1,n):new Date,this._day=this._value.getDay(),this._date=n,this._month=t,this._year=e}Object.defineProperty(e.prototype,"value",{get:function(){return this._value},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"day",{get:function(){return this._day},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"date",{get:function(){return this._date},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"month",{get:function(){return this._month},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"year",{get:function(){return this._year},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"shortYear",{get:function(){var e=this._year.toString();return parseInt(e.substr(e.length-2))},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"isWeekday",{get:function(){var e=this._day;return e>0&&e<6},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"isWeekend",{get:function(){return!this.isWeekday},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"isLeapYear",{get:function(){return d(this._year)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"nextDay",{get:function(){return p(this,1,0,0)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"prevDay",{get:function(){return p(this,-1,0,0)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"nextMonth",{get:function(){return p(this,0,1,0)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"prevMonth",{get:function(){return p(this,0,-1,0)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"nextYear",{get:function(){return p(this,0,0,1)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"prevYear",{get:function(){return p(this,0,0,-1)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"firstDayOfMonth",{get:function(){return new e(this._year,this._month,1)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"lastDayOfMonth",{get:function(){return new e(this._year,this._month,l(this._month,this._year))},enumerable:false,configurable:true});e.prototype.add=function(e,t,n){function r(e,t,n){var r=e,i=t;for(;i--;)r=r[n];return r}var i=Math.abs,o=i(e),u=i(n),a=i(t),c=n<0?"prevDay":"nextDay",s=t<0?"prevMonth":"nextMonth";return r(r(r(this,o,e<0?"prevYear":"nextYear"),a,s),u,c)};e.prototype.isBefore=function(e){return!(this.isAfter(e)||this.equals(e))};e.prototype.isAfter=function(e){var t=this._year,n=e.year,r=this._month,i=e.month;return t>n||t===n&&r>i||t===n&&r===i&&this._date>e.date};e.prototype.equals=function(e){return this._year===e.year&&this._month===e.month&&this._date===e.date};e.prototype.toString=function(e){if(e===void 0){e="mm/dd/yyyy"}var t=/y{3,}/i.test(e)?this._year:this.shortYear,n=this._month,r=this._date,o=/m{2}/i.test(e)&&n<10?"0{1}":"{1}",u=/d{2}/i.test(e)&&r<10?"0{2}":"{2}";return i(e.replace(/y+/gi,"{0}").replace(/m+/gi,o).replace(/d+/gi,u),t,n,r)};e.prototype.toDate=function(){return this._value};e.prototype.toJson=function(){return this._value.toJSON()};e.canParse=function(t){return n.isString(t)||n.isNumber(t)||n.isDate(t)?!isNaN(new Date(t).valueOf()):t instanceof e};e.parse=function(t){if(t instanceof e)return t;var r=n.isString(t)?o(t).replace(/T\d{2}:\d{2}:\d{2}(.\d+)?Z/,""):t;if(/^\d{4}-\d{1,2}-\d{1,2}$/.test(r)){var u=r.split("-"),a=u[0];u.push(a),u.shift(),r=u.join("/")}var c=new Date(r);if(!n.exists(r)||Number.isNaN(c.valueOf()))throw new Error(i("Cannot parse value= {0}",r));return new e(c.getFullYear(),c.getMonth()+1,c.getDate())};e.tryParse=function(t){return c((function(){return e.parse(t)}),null)};e.assumeNow=function(t){s=e.parse(t)};Object.defineProperty(e,"today",{get:function(){return s||e.parse(new Date)},enumerable:false,configurable:true});return e}();function l(e,t){return 2===e?d(t)?29:28:e<8&&n.isEven(e)||e>7&&n.isOdd(e)?30:31}function d(e){var t=e.toString().split(/\B/);return parseFloat(r(t[t.length-2],t[t.length-1]))%4==0}function p(e,t,n,r){var i=e.month,o=e.year,u=e.date,a=n,c=r;var s=u+t,d=i+a,p=o+c;if(u+t>l(i,o)&&(s=1,d=i+a+1),u+t<1){var y=e.prevMonth;s=l(y.month,y.year),d=i+a-1}return d>12&&(d=1,p=o+c+1),d<1&&(d=12,p=o+c-1),new f(p,d,s)}function y(e,t){if(t===void 0){t=0}var n=Math.pow(10,-t);return Math.round(parseFloat((e*n).toFixed(Math.abs(t))))/n}function h(e,t){if(t===void 0){t=0}return y(e+5*Math.pow(10,t-1),t)}function m(e,t){if(t===void 0){t=0}return 0===e?0:y(e-5*Math.pow(10,t-1),t)}function b(e,t){if(t===void 0){t=0}return e<0?h(e,t):m(e,t)}function g(e){var t=function(e,n,r){if(n===void 0){n=0}if(r===void 0){r=1}return 0<e?t(--e,r,n+r):n};return t(e)}function v(e){var t=0,n=1,r=0;for(;e>1;)r=t,t=n,n+=r,e--;return e<1?t:n}function w(e,t){if(t===void 0){t=0}var n=parseInt(e);return Number.isNaN(n)?t:n}Object.freeze({__proto__:null,random:function(e,t){if(e===void 0){e=0}if(t===void 0){t=1}return Math.random()*(t-e)+e},round:y,roundUp:h,roundDown:m,roundTowardZero:b,gcd:function e(t,n){return 0===n?Math.abs(t):e(n,t%n)},fib:g,fib2:v,fibArray:function(e){return Array(e).fill(0).map((function(){return g(--e)})).reverse()},fib2Array:function(e){return Array(e).fill(0).map((function(){return v(--e)})).reverse()},tryParseInt:w,tryParseFloat:function(e,t){if(t===void 0){t=0}var n=parseFloat(e);return Number.isNaN(n)?t:n}});var _=function(){function e(e,t){if(e===void 0){e=0}if(t===void 0){t=0}if(!n.isNumber(e)||!n.isNumber(t))throw new Error("Coord requires numeric x and y values");this._x=e,this._y=t}Object.defineProperty(e.prototype,"x",{get:function(){return this._x},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"y",{get:function(){return this._y},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"value",{get:function(){return{x:this.x,y:this.y}},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"half",{get:function(){return this.divide(new e(2,2))},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"abs",{get:function(){return new e(Math.abs(this.x),Math.abs(this.y))},enumerable:false,configurable:true});e.prototype.equals=function(e){return this.x===e.x&&this.y===e.y};e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y)};e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y)};e.prototype.multiply=function(t){return new e(this.x*t.x,this.y*t.y)};e.prototype.divide=function(t){return new e(this.x/t.x,this.y/t.y)};e.prototype.round=function(t){if(t===void 0){t=0}return new e(y(this.x,t),y(this.y,t))};e.prototype.toString=function(){return"(".concat(this.x,",").concat(this.y,")")};e.canParse=function(t){return n.isArray(t)?!(Number.isNaN(t[0])||Number.isNaN(t[1])):n.isObjectLiteral(t)&&"x"in t&&"y"in t?!(Number.isNaN(t.x)||Number.isNaN(t.y)):t instanceof e};e.parse=function(t){return n.exists(t)?t instanceof e?t:n.isArray(t)?new e(t[0],t[1]):n.isObjectLiteral(t)&&n.exists(t.x)&&n.exists(t.y)?new e(t.x,t.y):null:null};e.tryParse=function(t){return c((function(){return e.parse(t)}),null)};return e}();var O=function(e){__extends(t,e);function t(t,n){if(t===void 0){t=0}if(n===void 0){n=0}var r=this;r=e.call(this,t,n)||this,r._lengthSquared=Math.pow(t,2)+Math.pow(n,2),r._magnitude=Math.sqrt(r._lengthSquared),r._unitNormalX=0===t&&0===n?0:t/r._magnitude,r._unitNormalY=0===t&&0===n?0:n/r._magnitude;return r}Object.defineProperty(t.prototype,"magnitude",{get:function(){return this._magnitude},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"isZero",{get:function(){return 0===this.x&&0===this.y},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"normal",{get:function(){return new t(this._unitNormalX,this._unitNormalY)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"invert",{get:function(){return new t(-this.x,-this.y)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"norm",{get:function(){return new t(Math.abs(this.x),Math.abs(this.y))},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"perpendicular",{get:function(){return new t(-this.y,this.x)},enumerable:false,configurable:true});t.prototype.equals=function(e){return e instanceof t&&this.x===e.x&&this.y===e.y};t.prototype.add=function(e){return e instanceof t?new t(this.x+e.x,this.y+e.y):null};t.prototype.dot=function(e){return e instanceof t?this.x*e.x+this.y*e.y:null};t.prototype.perpendicularAtTo=function(e){if(!(e instanceof t))return null;var n=e.add(this.projectionOfOnto(e).invert);return new t(n.x,n.y)};t.prototype.projectionOfOnto=function(e){if(!(e instanceof t))return null;var n=e.normal.scale(this.dot(e.normal));return new t(n.x,n.y)};t.prototype.scale=function(e){return new t(this.x*e,this.y*e)};t.prototype.unitNormalDot=function(e){return e instanceof t?this.normal.x*e.normal.x+this.normal.y*e.normal.y:null};t.prototype.reflect=function(e){if(!(e instanceof t))return null;if(e.isZero)return this;var n=e.normal;return this.add(n.scale(2*n.dot(this)).invert)};t.prototype.round=function(e){if(e===void 0){e=0}return new t(y(this.x,e),y(this.y,e))};return t}(_);var x=function(e){__extends(t,e);function t(t,n){return e.call(this,t,n)||this}t.prototype.isAbove=function(e){return this.y<e.y};t.prototype.isBelow=function(e){return this.y>e.y};t.prototype.isLeftOf=function(e){return this.x<e.x};t.prototype.isRightOf=function(e){return this.x>e.x};t.prototype.distanceFrom=function(e){return new O(this.x-e.x,this.y-e.y)};t.prototype.distanceTo=function(e){return this.distanceFrom(e).invert};t.canParse=function(e){return e instanceof t||_.canParse(e)};t.parse=function(e){if(e instanceof t)return e;var n=_.parse(e);return new t(n.x,n.y)};t.tryParse=function(e){return c((function(){return t.parse(e)}),null)};return t}(_);function P(e){var t=isNaN(parseInt(e))||e<0||e>24?24:e,n=Math.random().toString().substring(2),r=Math.random().toString().substring(2);return n.concat(r).substring(0,t)}function j(){return function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}()}var S=Object.freeze({__proto__:null,uid:P,uuid:j,suid:function(){return Symbol(P())},suuid:function(){return Symbol(j())}});Object.freeze({__proto__:null,pattern:function(e){return e.toString().replace(/(^\/)|(\/$)/g,"").replace(/\\/g,"\\")},escape:function(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},alpha:/^[A-z]+$/,alphaNumeric:/^[A-z0-9]+$/,base64:/^[A-z0-9=]+$/,dataUrl:/^\s*data:([a-z]+\/[a-z0-9+-]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=._~:@/?%\s-]*\s*$/i,email:/^\w+([.\w-+]+)?@\w+([.\w-]+)?\.[A-Za-z0-9]{2,}$/,empty:/^$/,numeric:/^-?[0-9]+$/,script:/(<script[A-z0-9\n\s\t\r.={([\])}'",;!&|$/#:<>*?+\u0000-\u0037\u00C2\u00A0\u2122-]*?<\/script>)/,uid:/^\d{14,}$/i,url:/^(https?:\/\/)?[^{}\\:]+\.[A-z0-9]{2,12}(\/[^?\s]+)*\/?(\?([^=?#]+=[^=?#]*(&[^=?#]+=[^=?#]*)*(#.*)?)?)?$/,uuid:/^[{(]?[0-9A-F]{8}[-]?([0-9A-F]{4}[-]?){3}[0-9A-F]{12}[)}]?$/i});({name:S.uid(),expires:f.today.nextYear.toDate(),path:"/",domain:null,secure:!1});var K=function(){function e(){}Object.defineProperty(e,"orientation",{get:function(){var t=window.screen,n=(t.orientation||{}).type||t.mozOrientation||t.msOrientation,r=window.orientation;return n===e.landscapePrimary||90===r?e.landscapePrimary:n===e.landscapeSecondary||-90===r?e.landscapeSecondary:n===e.portraitPrimary||0===r?e.portraitPrimary:n===e.portraitSecondary||180===r?e.portraitSecondary:void 0},enumerable:false,configurable:true});Object.defineProperty(e,"landscapePrimary",{get:function(){return"landscape-primary"},enumerable:false,configurable:true});Object.defineProperty(e,"landscapeSecondary",{get:function(){return"landscape-secondary"},enumerable:false,configurable:true});Object.defineProperty(e,"portraitPrimary",{get:function(){return"portrait-primary"},enumerable:false,configurable:true});Object.defineProperty(e,"portraitSecondary",{get:function(){return"portrait-secondary"},enumerable:false,configurable:true});Object.defineProperty(e,"isMobile",{get:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(window.navigator.userAgent)},enumerable:false,configurable:true});return e}();e("a",K);var N=new Set,A=new Set;var E,M,Y,F=!1,k=!1,D=!1,T=!1;var L=function(){function e(){}Object.defineProperty(e,"scrollbarWidth",{get:function(){return window.innerWidth-document.documentElement.clientWidth},enumerable:false,configurable:true});Object.defineProperty(e,"isScrollPrevented",{get:function(){return n.exists(e.scrollY)},enumerable:false,configurable:true});e.preventScroll=function(){try{N.forEach((function(e){return e()}))}catch(t){}e.position=document.body.style.position,e.offsetY=document.body.style.top,e.offsetX=document.body.style.left,e.width=document.body.style.width,e.height=document.body.style.height,e.documentWidth=document.documentElement.style.width,e.documentWidth=document.documentElement.style.width,e.documentHeight=document.documentElement.style.height,e.overflowY=document.documentElement.style.overflowY,e.scrollX=window.scrollX||window.pageXOffset,e.scrollY=window.scrollY||window.pageYOffset;var t=e.scrollbarWidth;document.body.style.position="fixed",document.body.style.left="-".concat(e.scrollX,"px"),document.body.style.top="calc(-".concat(e.scrollY,"px - ").concat(window.getComputedStyle(document.body)["padding-top"]," - ").concat(window.getComputedStyle(document.body)["margin-top"],")"),document.body.style.width="calc(100vw - ".concat(t,"px - ").concat(window.getComputedStyle(document.body)["padding-left"]," - ").concat(window.getComputedStyle(document.body)["padding-right"]," - ").concat(window.getComputedStyle(document.body)["margin-left"]," - ").concat(window.getComputedStyle(document.body)["margin-right"],")"),document.documentElement.style.width="100wh",document.documentElement.style.height="100vh",document.documentElement.style.overflowY=t&&"scroll"};e.resumeScroll=function(){try{A.forEach((function(e){return e()}))}catch(r){}document.body.style.position=e.position,document.body.style.top=e.offsetY,document.body.style.left=e.offsetX,document.body.style.width=e.width,document.body.style.height=e.height,document.documentElement.style.width=e.documentWidth,document.documentElement.style.height=e.documentHeight,document.documentElement.style.overflowY=e.overflowY,window.scrollTo(e.scrollX,e.scrollY),e.position=null,e.offsetY=null,e.offsetX=null,e.width=null,e.height=null,e.documentWidth=null,e.documentHeight=null,e.overflowY=null,e.scrollX=null,e.scrollY=null};e.onPreventScroll=function(e){N.add(e)};e.onResumeScroll=function(e){A.add(e)};Object.defineProperty(e,"scroll",{get:function(){return E||(E=new $,M=window.pageYOffset,Y=window.pageXOffset,F=!1,k=!1,D=!1,T=!1,window.addEventListener("unload",(function(){return E.unload()}))),E},enumerable:false,configurable:true});return e}();e("D",L);var X=function(){var e=window.pageYOffset,t=window.pageXOffset;F=e>M,k=e<M,T=t>Y,D=t<Y,M=e||window.pageYOffset,Y=t||window.pageXOffset};var $=function(){function e(){document.addEventListener("scroll",X,{passive:!0})}Object.defineProperty(e.prototype,"down",{get:function(){return F},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"up",{get:function(){return k},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"left",{get:function(){return D},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"right",{get:function(){return T},enumerable:false,configurable:true});e.prototype.unload=function(){document.removeEventListener("scroll",X),F=!1,k=!1,D=!1,T=!1,M=window.pageYOffset,Y=window.pageXOffset,E=null};return e}();var z=function(){function e(){}e.mute=function(e){return!!n.exists(e)&&(n.isFunction(e.preventDefault)&&e.preventDefault(),n.isFunction(e.stopPropagation)&&e.stopPropagation(),n.isFunction(e.stopImmediatePropagation)&&e.stopImmediatePropagation(),n.exists(e.cancelBubble)&&(e.cancelBubble=!0),!1)};return e}();e("E",z);var B=function(e){var t=e.getAttribute("id"),n=__spreadArray([],e.querySelectorAll("[name]"),true).map((function(e){return e.name})),r=t?__spreadArray([],document.querySelectorAll('[form="'.concat(t,'"]')),true).map((function(e){return e.name})):[];return __spreadArray(__spreadArray([],n,true),r,true)},q=function(e){return new window.FormData(e)},R=function(e){var t={};try{q(e).forEach((function(e,r){var i=t[r];n.isArray(i)?t[r].push(e):n.exists(i)?t[r]=[t[r],e]:t[r]=e}))}catch(n){__spreadArray([],e.elements,true).forEach((function(e){var n=e.name,r=e.type,i=e.value,o=e.files;if("file"===r)t[n]=o[0];else if("checkbox"===r||"radio"===r)e.checked&&(t[n]=i);else if(e.multiple){var u=[];e.querySelectorAll("option").forEach((function(e){return e.selected&&u.push(e.value)})),t[n]=u.length<2?u[0]:u}else t[n]=i}))}return t},C=function(e){return JSON.stringify(R(e))},W=function(e,t){__spreadArray([],e.elements,true).forEach((function(e){/^select$/i.test(e.nodeName)?n.isArray(t[e.name])?__spreadArray([],e.options,true).forEach((function(n){n.selected=t[e.name].indexOf(n.value)>=0})):n.exists(t[e.name])&&(e.value=t[e.name]):n.exists(t[e.name])&&("checkbox"===e.type||"radio"===e.type?e.checked=t[e.name]===e.value:e.value=t[e.name])}))};var I=e("i",{readFieldNames:B,read:R,readData:q,readJson:C,write:W});var Z=function(){function e(e,t,n){if(n===void 0){n={}}this.key=e,this.msKey=t||e,this.altKey=n.altKey||!1,this.ctrlKey=n.ctrlKey||!1,this.metaKey=n.metaKey||!1,this.shiftKey=n.shiftKey||!1}Object.defineProperty(e.prototype,"alt",{get:function(){var t=this,n=t.key,r=t.msKey,i=t.ctrlKey,o=t.metaKey,u=t.shiftKey;return new e(n,r,{altKey:!0,ctrlKey:i,metaKey:o,shiftKey:u})},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"ctrl",{get:function(){var t=this,n=t.key,r=t.msKey,i=t.altKey,o=t.metaKey,u=t.shiftKey;return new e(n,r,{altKey:i,ctrlKey:!0,metaKey:o,shiftKey:u})},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"meta",{get:function(){var t=this,n=t.key,r=t.msKey,i=t.altKey,o=t.ctrlKey,u=t.shiftKey;return new e(n,r,{altKey:i,ctrlKey:o,metaKey:!0,shiftKey:u})},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"shift",{get:function(){var t=this,n=t.key,r=t.msKey,i=t.altKey,o=t.ctrlKey,u=t.metaKey;return new e(n,r,{altKey:i,ctrlKey:o,metaKey:u,shiftKey:!0})},enumerable:false,configurable:true});e.prototype.equals=function(t){return t instanceof e&&this.altKey===t.altKey&&this.ctrlKey===t.ctrlKey&&this.metaKey===t.metaKey&&this.shiftKey===t.shiftKey&&(this.key===t.key||this.msKey===t.msKey)};e.prototype.didFire=function(t){var n=t.code,r=t.key,i=t.altKey,o=t.ctrlKey,u=t.metaKey,a=t.shiftKey,c="Dead"===r?n:r;return t&&("ANY"===this.key||this.equals(new e(c,c,{altKey:i,ctrlKey:o,metaKey:u,shiftKey:a})))};Object.defineProperty(e,"press",{get:function(){return"keypress"},enumerable:false,configurable:true});Object.defineProperty(e,"down",{get:function(){return"keydown"},enumerable:false,configurable:true});Object.defineProperty(e,"up",{get:function(){return"keyup"},enumerable:false,configurable:true});Object.defineProperty(e,"any",{get:function(){return new e("ANY")},enumerable:false,configurable:true});Object.defineProperty(e,"esc",{get:function(){return new e("Escape","Esc")},enumerable:false,configurable:true});Object.defineProperty(e,"enter",{get:function(){return new e("Enter")},enumerable:false,configurable:true});Object.defineProperty(e,"space",{get:function(){return new e(" ","Spacebar")},enumerable:false,configurable:true});Object.defineProperty(e,"tab",{get:function(){return new e("Tab")},enumerable:false,configurable:true});Object.defineProperty(e,"left",{get:function(){return new e("ArrowLeft","Left")},enumerable:false,configurable:true});Object.defineProperty(e,"right",{get:function(){return new e("ArrowRight","Right")},enumerable:false,configurable:true});return e}();e("K",Z);var U=function(){function e(e,t){if(t===void 0){t=0}this.didTouchStart=this.didTouchStart.bind(this),this.didTouchEnd=this.didTouchEnd.bind(this),this.didTouchMove=this.didTouchMove.bind(this),e.addEventListener("touchstart",this.didTouchStart,{capture:!1,passive:!0}),e.addEventListener("touchend",this.didTouchEnd,{capture:!1,passive:!0}),e.addEventListener("touchmove",this.didTouchMove,{capture:!1,passive:!0}),this.element=e,this.tolerance=t,this.didSwipeLeft=function(){},this.didSwipeRight=function(){},this.didMove=function(){}}e.prototype.onLeft=function(e){return this.didSwipeLeft=e,this};e.prototype.onRight=function(e){return this.didSwipeRight=e,this};e.prototype.onMove=function(e){return this.didMove=e,this};e.prototype.destroy=function(){var e=this.element;return e.removeEventListener("touchstart",this.didTouchStart,{capture:!1}),e.removeEventListener("touchend",this.didTouchEnd,{capture:!1}),e.removeEventListener("touchmove",this.didTouchMove,{capture:!1}),this};e.prototype.didTouchStart=function(e){var t=e.touches[0];this.touchStartPoint=new x(t.pageX,t.pageY)};e.prototype.didTouchEnd=function(e){var t=e.changedTouches[0],n=this.touchStartPoint,r=new x(t.pageX,t.pageY);r.isLeftOf(n)&&Math.abs(r.distanceFrom(n).x)>this.tolerance&&this.didSwipeLeft(e),r.isRightOf(n)&&Math.abs(r.distanceFrom(n).x)>this.tolerance&&this.didSwipeRight(e)};e.prototype.didTouchMove=function(e){var t=e.touches[0],n=this.touchStartPoint,r=new x(t.pageX,t.pageY);this.didMove({distance:r.distanceFrom(n),up:r.isAbove(n),down:r.isBelow(n),left:r.isLeftOf(n),right:r.isRightOf(n)})};return e}();e("S",U)}}}));