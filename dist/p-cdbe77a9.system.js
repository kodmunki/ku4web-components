var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),i=0,t=0;t<r;t++)for(var o=arguments[t],u=0,a=o.length;u<a;u++,i++)n[i]=o[u];return n};System.register([],(function(exports){"use strict";return{execute:function(){var Device=function(){function e(){}Object.defineProperty(e,"orientation",{get:function(){var t=window.screen,r=(t.orientation||{}).type||t.mozOrientation||t.msOrientation,n=window.orientation;return r===e.landscapePrimary||90===n?e.landscapePrimary:r===e.landscapeSecondary||-90===n?e.landscapeSecondary:r===e.portraitPrimary||0===n?e.portraitPrimary:r===e.portraitSecondary||180===n?e.portraitSecondary:void 0},enumerable:false,configurable:true});Object.defineProperty(e,"landscapePrimary",{get:function(){return"landscape-primary"},enumerable:false,configurable:true});Object.defineProperty(e,"landscapeSecondary",{get:function(){return"landscape-secondary"},enumerable:false,configurable:true});Object.defineProperty(e,"portraitPrimary",{get:function(){return"portrait-primary"},enumerable:false,configurable:true});Object.defineProperty(e,"portraitSecondary",{get:function(){return"portrait-secondary"},enumerable:false,configurable:true});Object.defineProperty(e,"isMobile",{get:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(window.navigator.userAgent)},enumerable:false,configurable:true});return e}();exports("b",Device);var t=function(){function e(){}e.isNull=function(e){return null===e};e.isEmpty=function(t){return e.isString(t)&&""===t||e.isArray(t)&&t.length<1||e.isObjectLiteral(t)&&Object.keys(t).length<1};e.isUndefined=function(e){return void 0===e};e.isZero=function(e){return 0===e};e.exists=function(t){return!(e.isUndefined(t)||e.isNull(t))};e.isNullOrEmpty=function(t){return!e.exists(t)||e.isEmpty(t)};e.isArray=function(e){return Array.isArray(e)};e.isBool=function(e){return"boolean"==typeof e};e.isTrue=function(t){return e.isBool(t)&&!0===t};e.isFalse=function(t){return e.isBool(t)&&!1===t};e.isDate=function(e){return e instanceof Date};e.isNumber=function(e){return("number"==typeof e||e instanceof Number)&&!isNaN(e)};e.isEven=function(e){return this.isNumber(e)&&!this.isZero(e)&&e%2==0};e.isOdd=function(e){return this.isNumber(e)&&!this.isZero(e)&&!this.isEven(e)};e.isString=function(e){return"string"==typeof e||e instanceof String};e.isFunction=function(e){return e instanceof Function};e.isAsyncFunction=function(t){try{return"AsyncFunction"===Object.getPrototypeOf(t).constructor.name||e.isFunction(t)&&/^async/.test(t.toString())||e.isFunction(t().then)}catch(e){return!1}};e.isPromise=function(e){return e instanceof Promise};e.isObject=function(t){return e.exists(t)&&"object"==typeof t&&!(e.isBool(t)||e.isNumber(t)||e.isDate(t)||e.isArray(t)||e.isString(t)||e.isFunction(t))};e.isObjectLiteral=function(t){return e.isObject(t)&&t.constructor==={}.constructor};e.isTruthy=function(t){return!e.isFalsy(t)};e.isFalsy=function(t){return e.isZero(t)||e.isFalse(t)||e.isNullOrEmpty(t)||isNaN(t)};return e}();function e(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}return"".concat.apply("",e)}function r(e){var t=[];for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}return t.reduce((function(e,t,r){return e.replace(new RegExp("\\{"+r+"\\}","g"),t&&t.toString?t.toString():t)}),e)}function i(e){return s(n(e))}function s(e){return t.exists(e)&&t.isFunction(e.replace)?e.replace(/^[\s\n]*/,""):e}function n(e){return t.exists(e)&&t.isFunction(e.replace)?e.replace(/[\s\n]*$/,""):e}var a=Object.freeze({__proto__:null,build:e,format:r,trim:i,trimStart:s,trimEnd:n,capitalize:function(e){if(e===void 0){e=""}return(e||"").charAt(0).toUpperCase()+(e||"").slice(1).toLowerCase()},mask:function(e,r,n){if(n===void 0){n="_"}return t.isFunction(r)?r(e):t.isString(r)&&e.split("").reduce((function(e,t){return e.replace(new RegExp(n),t)}),r)},unmask:function(e,r,n){if(n===void 0){n="_"}var i=new RegExp(n);return t.isFunction(r)?r(e):t.isString(r)&&e.split("").reduce((function(e,t,n){return!i.test(t)&&i.test(r.charAt(n))?e+t:e}),"")}});var h;var l=function(){function e(e,t,r){if(t<1||t>12)throw new Error("Invalid month at Assert.DayPoint");if(r<1||r>d(t,e))throw new Error("Invalid date at DayPoint");this._value=arguments.length>=3?new Date(e,t-1,r):new Date,this._day=this._value.getDay(),this._date=r,this._month=t,this._year=e}Object.defineProperty(e.prototype,"value",{get:function(){return this._value},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"day",{get:function(){return this._day},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"date",{get:function(){return this._date},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"month",{get:function(){return this._month},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"year",{get:function(){return this._year},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"shortYear",{get:function(){var e=this._year.toString();return parseInt(e.substr(e.length-2))},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"isWeekday",{get:function(){var e=this._day;return e>0&&e<6},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"isWeekend",{get:function(){return!this.isWeekday},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"isLeapYear",{get:function(){return y(this._year)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"nextDay",{get:function(){return f(this,1,0,0)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"prevDay",{get:function(){return f(this,-1,0,0)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"nextMonth",{get:function(){return f(this,0,1,0)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"prevMonth",{get:function(){return f(this,0,-1,0)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"nextYear",{get:function(){return f(this,0,0,1)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"prevYear",{get:function(){return f(this,0,0,-1)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"firstDayOfMonth",{get:function(){return new e(this._year,this._month,1)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"lastDayOfMonth",{get:function(){return new e(this._year,this._month,d(this._month,this._year))},enumerable:false,configurable:true});e.prototype.add=function(e,t,r){function n(e,t,r){var n=e,i=t;for(;i--;)n=n[r];return n}var i=Math.abs,o=i(e),u=i(r),a=i(t),s=r<0?"prevDay":"nextDay",c=t<0?"prevMonth":"nextMonth";return n(n(n(this,o,e<0?"prevYear":"nextYear"),a,c),u,s)};e.prototype.isBefore=function(e){return!(this.isAfter(e)||this.equals(e))};e.prototype.isAfter=function(e){var t=this._year,r=e.year,n=this._month,i=e.month;return t>r||t===r&&n>i||t===r&&n===i&&this._date>e.date};e.prototype.equals=function(e){return this._year===e.year&&this._month===e.month&&this._date===e.date};e.prototype.toString=function(e){if(e===void 0){e="mm/dd/yyyy"}var t=/y{3,}/i.test(e)?this._year:this.shortYear,n=this._month,i=this._date,o=/m{2}/i.test(e)&&n<10?"0{1}":"{1}",u=/d{2}/i.test(e)&&i<10?"0{2}":"{2}";return r(e.replace(/y+/gi,"{0}").replace(/m+/gi,o).replace(/d+/gi,u),t,n,i)};e.prototype.toDate=function(){return this._value};e.prototype.toJson=function(){return this._value.toJSON()};e.canParse=function(r){return t.isString(r)||t.isNumber(r)||t.isDate(r)?!isNaN(new Date(r).valueOf()):r instanceof e};e.parse=function(n){if(n instanceof e)return n;var o=t.isString(n)?i(n).replace(/T\d{2}:\d{2}:\d{2}(.\d+)?Z/,""):n;if(/^\d{4}-\d{1,2}-\d{1,2}$/.test(o)){var u=o.split("-"),a=u[0];u.push(a),u.shift(),o=u.join("/")}var s=new Date(o);if(!t.exists(o)||isNaN(s.valueOf()))throw new Error(r("Cannot parse value= {0}",o));return new e(s.getFullYear(),s.getMonth()+1,s.getDate())};e.tryParse=function(t){return e.canParse(t)?e.parse(t):null};e.assumeNow=function(t){h=e.parse(t)};Object.defineProperty(e,"today",{get:function(){return h||e.parse(new Date)},enumerable:false,configurable:true});return e}();function d(e,r){return 2===e?y(r)?29:28:e<8&&t.isEven(e)||e>7&&t.isOdd(e)?30:31}function y(t){var r=t.toString().split(/\B/);return parseFloat(e(r[r.length-2],r[r.length-1]))%4==0}function f(e,t,r,n){var i=e.month,o=e.year,u=e.date,a=r,s=n;var c=u+t,f=i+a,p=o+s;if(u+t>d(i,o)&&(c=1,f=i+a+1),u+t<1){var y=e.prevMonth;c=d(y.month,y.year),f=i+a-1}return f>12&&(f=1,p=o+s+1),f<1&&(f=12,p=o+s-1),new l(p,f,c)}function p(e,t){if(t===void 0){t=0}var r=Math.pow(10,-t);return Math.round(parseFloat((e*r).toFixed(Math.abs(t))))/r}function g(e,t){if(t===void 0){t=0}return p(e+5*Math.pow(10,t-1),t)}function m(e,t){if(t===void 0){t=0}return 0===e?0:p(e-5*Math.pow(10,t-1),t)}function _(e,t){if(t===void 0){t=0}return e<0?g(e,t):m(e,t)}function w(e){var t=function(e,r,n){if(r===void 0){r=0}if(n===void 0){n=1}return 0<e?t(--e,n,r+n):r};return t(e)}function x(e){var t=0,r=1,n=0;for(;e>1;)n=t,t=r,r+=n,e--;return e<1?t:r}function v(e,t){if(t===void 0){t=0}var r=parseInt(e);return isNaN(r)?t:r}var b=Object.freeze({__proto__:null,round:p,roundUp:g,roundDown:m,roundTowardZero:_,gcd:function e(t,r){return 0===r?Math.abs(t):e(r,t%r)},fib:w,fib2:x,fibArray:function(e){return Array(e).fill(0).map((function(){return w(--e)})).reverse()},fib2Array:function(e){return Array(e).fill(0).map((function(){return x(--e)})).reverse()},tryParseInt:v,tryParseFloat:function(e,t){if(t===void 0){t=0}var r=parseFloat(e);return isNaN(r)?t:r}});var S=function(){function e(e,r){if(e===void 0){e=0}if(r===void 0){r=0}if(!t.isNumber(e)||!t.isNumber(r))throw new Error("Coord requires numeric x and y values");this._x=e,this._y=r}Object.defineProperty(e.prototype,"x",{get:function(){return this._x},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"y",{get:function(){return this._y},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"value",{get:function(){return{x:this.x,y:this.y}},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"half",{get:function(){return this.divide(new e(2,2))},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"abs",{get:function(){return new e(Math.abs(this.x),Math.abs(this.y))},enumerable:false,configurable:true});e.prototype.equals=function(e){return this.x===e.x&&this.y===e.y};e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y)};e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y)};e.prototype.multiply=function(t){return new e(this.x*t.x,this.y*t.y)};e.prototype.divide=function(t){return new e(this.x/t.x,this.y/t.y)};e.prototype.round=function(t){if(t===void 0){t=0}return new e(p(this.x,t),p(this.y,t))};e.prototype.toString=function(){return"("+this.x+","+this.y+")"};e.canParse=function(r){return t.isArray(r)?!(isNaN(r[0])||isNaN(r[1])):t.isObjectLiteral(r)&&"x"in r&&"y"in r?!(isNaN(r.x)||isNaN(r.y)):r instanceof e};e.parse=function(r){return t.exists(r)?r instanceof e?r:t.isArray(r)?new e(r[0],r[1]):t.isObjectLiteral(r)&&t.exists(r.x)&&t.exists(r.y)?new e(r.x,r.y):null:null};e.tryParse=function(t){return e.canParse(t)?e.parse(t):null};return e}();var O=function(e){__extends(t,e);function t(t,r){if(t===void 0){t=0}if(r===void 0){r=0}var n=this;n=e.call(this,t,r)||this,n._lengthSquared=Math.pow(t,2)+Math.pow(r,2),n._magnitude=Math.sqrt(n._lengthSquared),n._unitNormalX=0===t&&0===r?0:t/n._magnitude,n._unitNormalY=0===t&&0===r?0:r/n._magnitude;return n}Object.defineProperty(t.prototype,"magnitude",{get:function(){return this._magnitude},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"isZero",{get:function(){return 0===this.x&&0===this.y},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"normal",{get:function(){return new t(this._unitNormalX,this._unitNormalY)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"invert",{get:function(){return new t(-this.x,-this.y)},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"norm",{get:function(){return new t(Math.abs(this.x),Math.abs(this.y))},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"perpendicular",{get:function(){return new t(-this.y,this.x)},enumerable:false,configurable:true});t.prototype.equals=function(e){return e instanceof t&&this.x===e.x&&this.y===e.y};t.prototype.add=function(e){return e instanceof t?new t(this.x+e.x,this.y+e.y):null};t.prototype.dot=function(e){return e instanceof t?this.x*e.x+this.y*e.y:null};t.prototype.perpendicularAtTo=function(e){if(!(e instanceof t))return null;var r=e.add(this.projectionOfOnto(e).invert);return new t(r.x,r.y)};t.prototype.projectionOfOnto=function(e){if(!(e instanceof t))return null;var r=e.normal.scale(this.dot(e.normal));return new t(r.x,r.y)};t.prototype.scale=function(e){return new t(this.x*e,this.y*e)};t.prototype.unitNormalDot=function(e){return e instanceof t?this.normal.x*e.normal.x+this.normal.y*e.normal.y:null};t.prototype.reflect=function(e){if(!(e instanceof t))return null;if(e.isZero)return this;var r=e.normal;return this.add(r.scale(2*r.dot(this)).invert)};t.prototype.round=function(e){if(e===void 0){e=0}return new t(p(this.x,e),p(this.y,e))};return t}(S);var $=function(e){__extends(t,e);function t(t,r){return e.call(this,t,r)||this}t.prototype.isAbove=function(e){return this.y<e.y};t.prototype.isBelow=function(e){return this.y>e.y};t.prototype.isLeftOf=function(e){return this.x<e.x};t.prototype.isRightOf=function(e){return this.x>e.x};t.prototype.distanceFrom=function(e){return new O(this.x-e.x,this.y-e.y)};t.prototype.distanceTo=function(e){return this.distanceFrom(e).invert};t.canParse=function(e){return e instanceof t||S.canParse(e)};t.parse=function(e){if(e instanceof t)return e;var r=S.parse(e);return new t(r.x,r.y)};t.tryParse=function(e){return t.canParse(e)?t.parse(e):null};return t}(S);function M(){return Math.random().toString().substr(2)}function B(){return function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}()}var E=Object.freeze({__proto__:null,uid:M,uuid:B,suid:function(){return Symbol(M())},suuid:function(){return Symbol(B())}}),q=Object.freeze({__proto__:null,pattern:function(e){return e.toString().replace(/(^\/)|(\/$)/g,"").replace(/\\/g,"\\")},escape:function(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},alpha:/^[A-z]+$/,alphaNumeric:/^[A-z0-9]+$/,base64:/^[A-z0-9=]+$/,dataUrl:/^\s*data:([a-z]+\/[a-z0-9+-]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=._~:@/?%\s-]*\s*$/i,email:/^\w+([.\w-]+)?@\w+([.\w-]+)?\.[A-Za-z0-9]{2,}$/,empty:/^$/,numeric:/^-?[0-9]+$/,script:/(<script[A-z0-9\n\s\t\r.={([\])}'",;!&|$/#:<>*?+\u0000-\u0037\u00C2\u00A0\u2122-]*?<\/script>)/,uid:/^\d{14,}$/i,url:/^(https?:\/\/)?[^{}\\:]+\.[A-z0-9]{2,12}(\/[^?\s]+)*\/?(\?([^=?#]+=[^=?#]*(&[^=?#]+=[^=?#]*)*(#.*)?)?)?$/,uuid:/^[{(]?[0-9A-F]{8}[-]?([0-9A-F]{4}[-]?){3}[0-9A-F]{12}[)}]?$/i});var onPreventScroll=new Set,onResumeScroll=new Set;var Document=function(){function e(){}Object.defineProperty(e,"scrollbarWidth",{get:function(){return window.innerWidth-document.documentElement.clientWidth},enumerable:false,configurable:true});Object.defineProperty(e,"isScrollPrevented",{get:function(){return t.exists(e.scrollY)},enumerable:false,configurable:true});e.preventScroll=function(){try{onPreventScroll.forEach((function(e){return e()}))}catch(t){}e.position=document.body.style.position,e.top=document.body.style.top,e.left=document.body.style.left,e.width=document.body.style.width,e.height=document.body.style.height,e.documentWidth=document.documentElement.style.width,e.documentHeight=document.documentElement.style.height,e.overflowY=document.documentElement.style.overflowY,e.scrollX=window.scrollX||window.pageXOffset,e.scrollY=window.scrollY||window.pageYOffset;var t=e.scrollbarWidth;document.body.style.position="fixed",document.body.style.left="-"+e.scrollX+"px",document.body.style.top="calc(-"+e.scrollY+"px - "+window.getComputedStyle(document.body)["padding-top"]+" - "+window.getComputedStyle(document.body)["margin-top"]+")",document.body.style.width="calc(100vw - "+t+"px - "+window.getComputedStyle(document.body)["padding-left"]+" - "+window.getComputedStyle(document.body)["padding-right"]+" - "+window.getComputedStyle(document.body)["margin-left"]+" - "+window.getComputedStyle(document.body)["margin-right"]+")",document.body.style.height="calc(100% + 1px)",document.documentElement.style.width="100wh",document.documentElement.style.height="100vh",document.documentElement.style.overflowY=t&&"scroll"};e.resumeScroll=function(){try{onResumeScroll.forEach((function(e){return e()}))}catch(t){}document.body.style.position=e.position,document.body.style.top=e.top,document.body.style.left=e.left,document.body.style.width=e.width,document.body.style.height=e.height,document.documentElement.style.width=e.documentWidth,document.documentElement.style.height=e.documentHeight,document.documentElement.style.overflowY=e.overflowY,window.scrollTo(e.scrollX,e.scrollY),e.position=null,e.top=null,e.left=null,e.width=null,e.height=null,e.documentWidth=null,e.documentHeight=null,e.overflowY=null,e.scrollX=null,e.scrollY=null};e.onPreventScroll=function(e){onPreventScroll.add(e)};e.onResumeScroll=function(e){onResumeScroll.add(e)};return e}();exports("a",Document);function encodeBase64(e,r){if(r===void 0){r=!1}if(!t.isString(e))throw new Error("Cannot encode non-string values.");var n=window.btoa(e);return r?n.replace(/=/g,""):n}function decodeBase64(e){if(!t.isString(e))throw new Error("Cannot encode non-string values.");return window.atob(e)}var Json=function(){function Json(){}Json.serialize=function(e){if(t.isFunction(e))return;if(!t.exists(e))return e;if(!t.isArray(e)&&!t.isObject(e))return e.toString();var r=t.isArray(e)?"[{0}]":"{{0}}",n=[];return Object.keys(e).forEach((function(r){var i=e[r];if(t.isUndefined(i))return;var o=t.isNumber(i)?i:t.isDate(i)?'"'+l.parse(i).toJson()+'"':t.isString(i)?'"'+serializeString(i)+'"':Json.serialize(i);n[n.length]=(t.isObject(e)&&!t.isArray(e)?'"'+r+'":':"")+o})),a.format(r,n)};Json.deserialize=function(e){return/function|(=$)/i.test(e)?e:Json.deserialize_unsafe(e)};Json.deserialize_unsafe=function(value){try{var result_1=t.isString(value)?eval("("+deserializeString(value)+")"):value;return t.exists(result_1)?t.isNullOrEmpty(result_1.tagName)&&(t.isObject(result_1)||t.isArray(result_1))?(Object.keys(result_1).forEach((function(e){var r=result_1[e];(t.isObject(r)||t.isArray(r))&&(result_1[e]=Json.deserialize(r)),/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(r)&&l.canParse(r)&&(result_1[e]=l.parse(r).toDate())})),result_1):/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(result_1)?l.parse(result_1).toDate():result_1:result_1}catch(t){throw new Error(a.format("Cannot deserialize {0}",value))}};Json.encode=function(e,t){if(t===void 0){t=!1}try{return encodeBase64(Json.serialize(e),t)}catch(t){throw new Error(a.format("Cannot encode {0}",e))}};Json.decode=function(t){try{return Json.deserialize(decodeBase64(t))}catch(e){throw new Error(a.format("Cannot decode {0}",t))}};return Json}();function serializeString(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\//g,"/").replace(/\f/g,"\\f").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t")}function deserializeString(e){return e.replace(/\\\//g,"/").replace(/\\\\f/g,"\\f").replace(/\\\\n/g,"\\n").replace(/\\\\r/g,"\\r").replace(/\\\\t/g,"\\t")}var QueryString=function(){function e(){}e.serialize=function(e){try{var r="";return Object.keys(e).forEach((function(n){var i=e[n],o=t.isDate(i)?l.parse(i).toJson():i;r+=a.format("&{0}={1}",encodeURIComponent(n),encodeURIComponent(Json.serialize(o)))})),r.replace(/^&/,"")}catch(t){throw new Error(a.format("Cannot serialize {0}",e))}};e.deserialize=function(e){if(/\??\w+=\w+/.test(e)){var t=e.replace(/.*\?/,"").split("&"),r={};return t.forEach((function(e){var t=e.split("="),n=t[0],i=t[1],o=/^null$|^true$|^false$|^\d+(\.\d+?)?$|^\[.*]$|^{.*}$/.test(i)?i:'"'+i+'"';r[decodeURIComponent(n)]=Json.deserialize(decodeURIComponent(o))})),r}};return e}();var Dto=function(){function e(e,t){this.value=e||{},this.name=t}Object.defineProperty(e.prototype,"name",{get:function(){return this._name},set:function(e){this._name=e},enumerable:false,configurable:true});e.prototype.read=function(e){return this.value[e]};e.prototype.remove=function(e){return t.exists(e)&&delete this.value[e],this};e.prototype.write=function(e,t){return this.value[e]=t,this};e.prototype.save=function(){return window.localStorage.setItem(this.name,Json.encode(this.value,!0)),this};e.prototype.saveAs=function(e){return this.name=e,this.save()};e.prototype.delete=function(){return window.localStorage.removeItem(this.name),this};e.prototype.toFormData=function(){var e=this.value,t=new window.FormData;return Object.keys(e).forEach((function(r){return t.append(r,e[r])})),t};e.prototype.toJson=function(){return Json.serialize(this.value)};e.prototype.toQueryString=function(){return QueryString.serialize(this.value)};e.parseFormData=function(t){var r={};for(var n=0,i=t.entries();n<i.length;n++){var o=i[n],u=o[0],a=o[1];r[u]=a}return new e(r)};e.parseJson=function(t){return new e(Json.deserialize(t))};e.parseQueryString=function(t){return new e(QueryString.deserialize(t))};e.load=function(t){var r=Json.decode(window.localStorage.getItem(t));return new e(r,t)};return e}();exports("D",Dto);var Event=function(){function e(){}e.mute=function(e){return!!t.exists(e)&&(t.isFunction(e.preventDefault)&&e.preventDefault(),t.isFunction(e.stopPropagation)&&e.stopPropagation(),t.isFunction(e.stopImmediatePropagation)&&e.stopImmediatePropagation(),t.exists(e.cancelBubble)&&(e.cancelBubble=!0),!1)};return e}();exports("E",Event);var readData=function(e){return new window.FormData(e)},read=function(e){var r={};try{readData(e).forEach((function(e,n){var i=r[n];t.isArray(i)?r[n].push(e):t.exists(i)?r[n]=[r[n],e]:r[n]=e}))}catch(t){__spreadArrays(e.elements).forEach((function(e){var t=e.name,n=e.type,i=e.value,o=e.files;if("file"===n)r[t]=o[0];else if("checkbox"===n||"radio"===n)e.checked&&(r[t]=i);else if(e.multiple){var u=[];e.querySelectorAll("option").forEach((function(e){return e.selected&&u.push(e.value)})),r[t]=u.length<2?u[0]:u}else r[t]=i}))}return r},readJson=function(e){return JSON.stringify(read(e))},write=function(e,r){e.querySelectorAll("input, textarea").forEach((function(e){t.exists(r[e.name])&&("checkbox"===e.type||"radio"===e.type?e.checked=r[e.name]===e.value:e.value=r[e.name])})),e.querySelectorAll("select").forEach((function(e){t.isArray(r[e.name])?__spreadArrays(e.options).forEach((function(t){t.selected=r[e.name].indexOf(t.value)>=0})):t.exists(r[e.name])&&(e.value=r[e.name])}))};var index=exports("i",{read:read,readData:readData,readJson:readJson,write:write});var Key=function(){function e(e,t,r){if(r===void 0){r={}}this.key=e,this.msKey=t||e,this.altKey=r.altKey||!1,this.ctrlKey=r.ctrlKey||!1,this.metaKey=r.metaKey||!1,this.shiftKey=r.shiftKey||!1}Object.defineProperty(e.prototype,"alt",{get:function(){var t=this,r=t.key,n=t.msKey,i=t.ctrlKey,o=t.metaKey,u=t.shiftKey;return new e(r,n,{altKey:!0,ctrlKey:i,metaKey:o,shiftKey:u})},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"ctrl",{get:function(){var t=this,r=t.key,n=t.msKey,i=t.altKey,o=t.metaKey,u=t.shiftKey;return new e(r,n,{altKey:i,ctrlKey:!0,metaKey:o,shiftKey:u})},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"meta",{get:function(){var t=this,r=t.key,n=t.msKey,i=t.altKey,o=t.ctrlKey,u=t.shiftKey;return new e(r,n,{altKey:i,ctrlKey:o,metaKey:!0,shiftKey:u})},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"shift",{get:function(){var t=this,r=t.key,n=t.msKey,i=t.altKey,o=t.ctrlKey,u=t.metaKey;return new e(r,n,{altKey:i,ctrlKey:o,metaKey:u,shiftKey:!0})},enumerable:false,configurable:true});e.prototype.equals=function(t){return t instanceof e&&this.altKey===t.altKey&&this.ctrlKey===t.ctrlKey&&this.metaKey===t.metaKey&&this.shiftKey===t.shiftKey&&(this.key===t.key||this.msKey===t.msKey)};e.prototype.didFire=function(t){var r=t.code,n=t.key,i=t.altKey,o=t.ctrlKey,u=t.metaKey,a=t.shiftKey,s="Dead"===n?r:n;return t&&("ANY"===this.key||this.equals(new e(s,s,{altKey:i,ctrlKey:o,metaKey:u,shiftKey:a})))};Object.defineProperty(e,"press",{get:function(){return"keypress"},enumerable:false,configurable:true});Object.defineProperty(e,"down",{get:function(){return"keydown"},enumerable:false,configurable:true});Object.defineProperty(e,"up",{get:function(){return"keyup"},enumerable:false,configurable:true});Object.defineProperty(e,"any",{get:function(){return new e("ANY")},enumerable:false,configurable:true});Object.defineProperty(e,"esc",{get:function(){return new e("Escape","Esc")},enumerable:false,configurable:true});Object.defineProperty(e,"enter",{get:function(){return new e("Enter")},enumerable:false,configurable:true});Object.defineProperty(e,"space",{get:function(){return new e(" ","Spacebar")},enumerable:false,configurable:true});Object.defineProperty(e,"tab",{get:function(){return new e("Tab")},enumerable:false,configurable:true});Object.defineProperty(e,"left",{get:function(){return new e("ArrowLeft","Left")},enumerable:false,configurable:true});Object.defineProperty(e,"right",{get:function(){return new e("ArrowRight","Right")},enumerable:false,configurable:true});return e}();exports("K",Key);var Swipe=function(){function e(e,t){if(t===void 0){t=0}this.didTouchStart=this.didTouchStart.bind(this),this.didTouchEnd=this.didTouchEnd.bind(this),this.didTouchMove=this.didTouchMove.bind(this),e.addEventListener("touchstart",this.didTouchStart,{capture:!1,passive:!0}),e.addEventListener("touchend",this.didTouchEnd,{capture:!1,passive:!0}),e.addEventListener("touchmove",this.didTouchMove,{capture:!1,passive:!0}),this.element=e,this.tolerance=t,this.didSwipeLeft=function(){},this.didSwipeRight=function(){},this.didMove=function(){}}e.prototype.onLeft=function(e){return this.didSwipeLeft=e,this};e.prototype.onRight=function(e){return this.didSwipeRight=e,this};e.prototype.onMove=function(e){return this.didMove=e,this};e.prototype.destroy=function(){var e=this.element;return e.removeEventListener("touchstart",this.didTouchStart,!1),e.removeEventListener("touchend",this.didTouchEnd,!1),e.removeEventListener("touchmove",this.didTouchMove,!1),this};e.prototype.didTouchStart=function(e){var t=e.touches[0];this.touchStartPoint=new $(t.pageX,t.pageY)};e.prototype.didTouchEnd=function(e){var t=e.changedTouches[0],r=this.touchStartPoint,n=new $(t.pageX,t.pageY);n.isLeftOf(r)&&Math.abs(n.distanceFrom(r).x)>this.tolerance&&this.didSwipeLeft(e),n.isRightOf(r)&&Math.abs(n.distanceFrom(r).x)>this.tolerance&&this.didSwipeRight(e)};e.prototype.didTouchMove=function(e){var t=e.touches[0],r=this.touchStartPoint,n=new $(t.pageX,t.pageY);this.didMove({distance:n.distanceFrom(r),up:n.isAbove(r),down:n.isBelow(r),left:n.isLeftOf(r),right:n.isRightOf(r)})};return e}();exports("S",Swipe)}}}));