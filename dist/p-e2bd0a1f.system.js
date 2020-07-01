var __extends=this&&this.__extends||function(){var t=function(e,n){t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)if(e.hasOwnProperty(n))t[n]=e[n]};return t(e,n)};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();System.register([],(function(t){"use strict";return{execute:function(){var e=function(){function t(){}t.isNull=function(t){return null===t};t.isEmpty=function(e){return t.isString(e)&&""===e||t.isArray(e)&&e.length<1||t.isObjectLiteral(e)&&Object.keys(e).length<1};t.isUndefined=function(t){return void 0===t};t.isZero=function(t){return 0===t};t.exists=function(e){return!(t.isUndefined(e)||t.isNull(e))};t.isNullOrEmpty=function(e){return!t.exists(e)||t.isEmpty(e)};t.isArray=function(t){return Array.isArray(t)};t.isBool=function(t){return"boolean"==typeof t};t.isTrue=function(e){return t.isBool(e)&&!0===e};t.isFalse=function(e){return t.isBool(e)&&!1===e};t.isDate=function(t){return t instanceof Date};t.isNumber=function(t){return("number"==typeof t||t instanceof Number)&&!isNaN(t)};t.isEven=function(t){return this.isNumber(t)&&!this.isZero(t)&&t%2==0};t.isOdd=function(t){return this.isNumber(t)&&!this.isZero(t)&&!this.isEven(t)};t.isString=function(t){return"string"==typeof t||t instanceof String};t.isFunction=function(t){return t instanceof Function};t.isObject=function(e){return t.exists(e)&&"object"==typeof e&&!(t.isBool(e)||t.isNumber(e)||t.isDate(e)||t.isArray(e)||t.isString(e)||t.isFunction(e))};t.isObjectLiteral=function(e){return t.isObject(e)&&e.constructor==={}.constructor};t.isTruthy=function(e){return!t.isFalsy(e)};t.isFalsy=function(e){return t.isZero(e)||t.isFalse(e)||t.isNullOrEmpty(e)||isNaN(e)};return t}();function n(t,e){if(e===void 0){e=0}var n=Math.pow(10,-e);return Math.round(parseFloat((t*n).toFixed(Math.abs(e))))/n}var r=function(){function t(t,n){if(t===void 0){t=0}if(n===void 0){n=0}if(!e.isNumber(t)||!e.isNumber(n))throw new Error("Coord requires numeric x and y values");this._x=t,this._y=n}Object.defineProperty(t.prototype,"x",{get:function(){return this._x},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"y",{get:function(){return this._y},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"value",{get:function(){return{x:this.x,y:this.y}},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"half",{get:function(){return this.divide(new t(2,2))},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"abs",{get:function(){return new t(Math.abs(this.x),Math.abs(this.y))},enumerable:false,configurable:true});t.prototype.equals=function(t){return this.x===t.x&&this.y===t.y};t.prototype.add=function(e){return new t(this.x+e.x,this.y+e.y)};t.prototype.subtract=function(e){return new t(this.x-e.x,this.y-e.y)};t.prototype.multiply=function(e){return new t(this.x*e.x,this.y*e.y)};t.prototype.divide=function(e){return new t(this.x/e.x,this.y/e.y)};t.prototype.round=function(e){if(e===void 0){e=0}return new t(n(this.x,e),n(this.y,e))};t.prototype.toString=function(){return"("+this.x+","+this.y+")"};t.canParse=function(n){return e.isArray(n)?!(isNaN(n[0])||isNaN(n[1])):e.isObjectLiteral(n)&&"x"in n&&"y"in n?!(isNaN(n.x)||isNaN(n.y)):n instanceof t};t.parse=function(n){return e.exists(n)?n instanceof t?n:e.isArray(n)?new t(n[0],n[1]):e.isObjectLiteral(n)&&e.exists(n.x)&&e.exists(n.y)?new t(n.x,n.y):null:null};t.tryParse=function(e){return t.canParse(e)?t.parse(e):null};return t}();var i=function(t){__extends(e,t);function e(e,n){if(e===void 0){e=0}if(n===void 0){n=0}var r=this;r=t.call(this,e,n)||this,r._lengthSquared=Math.pow(e,2)+Math.pow(n,2),r._magnitude=Math.sqrt(r._lengthSquared),r._unitNormalX=0===e&&0===n?0:e/r._magnitude,r._unitNormalY=0===e&&0===n?0:n/r._magnitude;return r}Object.defineProperty(e.prototype,"magnitude",{get:function(){return this._magnitude},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"isZero",{get:function(){return 0===this.x&&0===this.y},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"normal",{get:function(){return new e(this._unitNormalX,this._unitNormalY)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"invert",{get:function(){return new e(-this.x,-this.y)},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"norm",{get:function(){return new e(Math.abs(this.x),Math.abs(this.y))},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"perpendicular",{get:function(){return new e(-this.y,this.x)},enumerable:false,configurable:true});e.prototype.equals=function(t){return t instanceof e&&this.x===t.x&&this.y===t.y};e.prototype.add=function(t){return t instanceof e?new e(this.x+t.x,this.y+t.y):null};e.prototype.dot=function(t){return t instanceof e?this.x*t.x+this.y*t.y:null};e.prototype.perpendicularAtTo=function(t){if(!(t instanceof e))return null;var n=t.add(this.projectionOfOnto(t).invert);return new e(n.x,n.y)};e.prototype.projectionOfOnto=function(t){if(!(t instanceof e))return null;var n=t.normal.scale(this.dot(t.normal));return new e(n.x,n.y)};e.prototype.scale=function(t){return new e(this.x*t,this.y*t)};e.prototype.unitNormalDot=function(t){return t instanceof e?this.normal.x*t.normal.x+this.normal.y*t.normal.y:null};e.prototype.reflect=function(t){if(!(t instanceof e))return null;if(t.isZero)return this;var n=t.normal;return this.add(n.scale(2*n.dot(this)).invert)};e.prototype.round=function(t){if(t===void 0){t=0}return new e(n(this.x,t),n(this.y,t))};return e}(r);var o=function(t){__extends(e,t);function e(e,n){return t.call(this,e,n)||this}e.prototype.isAbove=function(t){return this.y<t.y};e.prototype.isBelow=function(t){return this.y>t.y};e.prototype.isLeftOf=function(t){return this.x<t.x};e.prototype.isRightOf=function(t){return this.x>t.x};e.prototype.distanceFrom=function(t){return new i(this.x-t.x,this.y-t.y)};e.prototype.distanceTo=function(t){return this.distanceFrom(t).invert};e.canParse=function(t){return t instanceof e||r.canParse(t)};e.parse=function(t){if(t instanceof e)return t;var n=r.parse(t);return new e(n.x,n.y)};e.tryParse=function(t){return e.canParse(t)?e.parse(t):null};return e}(r);Object.freeze({__proto__:null,pattern:function(t){return t.toString().replace(/(^\/)|(\/$)/g,"").replace(/\\/g,"\\")},alpha:/^[A-z]+$/,alphaNumeric:/^[A-z0-9]+$/,base64:/^[A-z0-9=]+$/,dataUrl:/^\s*data:([a-z]+\/[a-z0-9+-]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=._~:@/?%\s-]*\s*$/i,email:/^\w+([.\w-]+)?@\w+([.\w-]+)?\.[A-Za-z0-9]{2,}$/,empty:/^$/,numeric:/^-?[0-9]+$/,script:/(<script[A-z0-9\n\s\t\r.={([\])}'",;!&|$/#:<>*?+\u0000-\u0037\u00C2\u00A0\u2122-]*?<\/script>)/,uid:/^\d{14,}$/i,url:/^(https?:\/\/)?[^{}\\:]+\.[A-z0-9]{2,12}(\/[^?\s]+)*\/?(\?([^=?#]+=[^=?#]*(&[^=?#]+=[^=?#]*)*(#.*)?)?)?$/,uuid:/^[{(]?[0-9A-F]{8}[-]?([0-9A-F]{4}[-]?){3}[0-9A-F]{12}[)}]?$/i});var u=function(){function t(){}Object.defineProperty(t,"scrollbarWidth",{get:function(){return window.innerWidth-document.documentElement.clientWidth},enumerable:false,configurable:true});Object.defineProperty(t,"isScrollPrevented",{get:function(){return e.exists(t.scrollY)},enumerable:false,configurable:true});t.preventScroll=function(){t.position=document.body.style.position,t.top=document.body.style.top,t.left=document.body.style.left,t.width=document.body.style.width,t.height=document.body.style.height,t.documentWidth=document.documentElement.style.width,t.documentHeight=document.documentElement.style.height,t.overflowY=document.documentElement.style.overflowY,t.scrollX=window.scrollX||window.pageXOffset,t.scrollY=window.scrollY||window.pageYOffset;var e=t.scrollbarWidth;document.body.style.position="fixed",document.body.style.left="-"+t.scrollX+"px",document.body.style.top="-"+t.scrollY+"px",document.body.style.width="calc(100vw - "+e+"px - "+window.getComputedStyle(document.body)["padding-left"]+" - "+window.getComputedStyle(document.body)["padding-right"]+")",document.body.style.height="calc(100% + 1px)",document.documentElement.style.width="100wh",document.documentElement.style.height="100vh",document.documentElement.style.overflowY=e&&"scroll"};t.resumeScroll=function(){document.body.style.position=t.position,document.body.style.top=t.top,document.body.style.left=t.left,document.body.style.width=t.width,document.body.style.height=t.height,document.documentElement.style.width=t.documentWidth,document.documentElement.style.height=t.documentHeight,document.documentElement.style.overflowY=t.overflowY,window.scrollTo(t.scrollX,t.scrollY),t.position=null,t.top=null,t.left=null,t.width=null,t.height=null,t.documentWidth=null,t.documentHeight=null,t.overflowY=null,t.scrollX=null,t.scrollY=null};return t}();t("r",u);var s=function(){function t(){}t.mute=function(t){return!!e.exists(t)&&(e.isFunction(t.preventDefault)&&t.preventDefault(),e.isFunction(t.stopPropagation)&&t.stopPropagation(),e.isFunction(t.stopImmediatePropagation)&&t.stopImmediatePropagation(),e.exists(t.cancelBubble)&&(t.cancelBubble=!0),!1)};return t}();t("o",s);var c=function(){function t(t,e,n){if(n===void 0){n={}}this.key=t,this.msKey=e||t,this.altKey=n.altKey||!1,this.ctrlKey=n.ctrlKey||!1,this.metaKey=n.metaKey||!1,this.shiftKey=n.shiftKey||!1}Object.defineProperty(t.prototype,"alt",{get:function(){var e=this,n=e.key,r=e.msKey,i=e.ctrlKey,o=e.metaKey,u=e.shiftKey;return new t(n,r,{altKey:!0,ctrlKey:i,metaKey:o,shiftKey:u})},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"ctrl",{get:function(){var e=this,n=e.key,r=e.msKey,i=e.altKey,o=e.metaKey,u=e.shiftKey;return new t(n,r,{altKey:i,ctrlKey:!0,metaKey:o,shiftKey:u})},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"meta",{get:function(){var e=this,n=e.key,r=e.msKey,i=e.altKey,o=e.ctrlKey,u=e.shiftKey;return new t(n,r,{altKey:i,ctrlKey:o,metaKey:!0,shiftKey:u})},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"shift",{get:function(){var e=this,n=e.key,r=e.msKey,i=e.altKey,o=e.ctrlKey,u=e.metaKey;return new t(n,r,{altKey:i,ctrlKey:o,metaKey:u,shiftKey:!0})},enumerable:false,configurable:true});t.prototype.equals=function(e){return e instanceof t&&this.altKey===e.altKey&&this.ctrlKey===e.ctrlKey&&this.metaKey===e.metaKey&&this.shiftKey===e.shiftKey&&(this.key===e.key||this.msKey===e.msKey)};t.prototype.didFire=function(e){var n=e.code,r=e.key,i=e.altKey,o=e.ctrlKey,u=e.metaKey,s=e.shiftKey,c="Dead"===r?n:r;return e&&("ANY"===this.key||this.equals(new t(c,c,{altKey:i,ctrlKey:o,metaKey:u,shiftKey:s})))};Object.defineProperty(t,"press",{get:function(){return"keypress"},enumerable:false,configurable:true});Object.defineProperty(t,"down",{get:function(){return"keydown"},enumerable:false,configurable:true});Object.defineProperty(t,"up",{get:function(){return"keyup"},enumerable:false,configurable:true});Object.defineProperty(t,"any",{get:function(){return new t("ANY")},enumerable:false,configurable:true});Object.defineProperty(t,"esc",{get:function(){return new t("Escape","Esc")},enumerable:false,configurable:true});Object.defineProperty(t,"enter",{get:function(){return new t("Enter")},enumerable:false,configurable:true});Object.defineProperty(t,"space",{get:function(){return new t(" ","Spacebar")},enumerable:false,configurable:true});Object.defineProperty(t,"tab",{get:function(){return new t("Tab")},enumerable:false,configurable:true});Object.defineProperty(t,"left",{get:function(){return new t("ArrowLeft","Left")},enumerable:false,configurable:true});Object.defineProperty(t,"right",{get:function(){return new t("ArrowRight","Right")},enumerable:false,configurable:true});return t}();t("l",c);var a=function(){function t(t,e){if(e===void 0){e=0}this.didTouchStart=this.didTouchStart.bind(this),this.didTouchEnd=this.didTouchEnd.bind(this),this.didTouchMove=this.didTouchMove.bind(this),t.addEventListener("touchstart",this.didTouchStart,{capture:!1,passive:!0}),t.addEventListener("touchend",this.didTouchEnd,{capture:!1,passive:!0}),t.addEventListener("touchmove",this.didTouchMove,{capture:!1,passive:!0}),this.element=t,this.tolerance=e,this.didSwipeLeft=function(){},this.didSwipeRight=function(){},this.didMove=function(){}}t.prototype.onLeft=function(t){return this.didSwipeLeft=t,this};t.prototype.onRight=function(t){return this.didSwipeRight=t,this};t.prototype.onMove=function(t){return this.didMove=t,this};t.prototype.destroy=function(){var t=this.element;return t.removeEventListener("touchstart",this.didTouchStart,!1),t.removeEventListener("touchend",this.didTouchEnd,!1),t.removeEventListener("touchmove",this.didTouchMove,!1),this};t.prototype.didTouchStart=function(t){var e=t.touches[0];this.touchStartPoint=new o(e.pageX,e.pageY)};t.prototype.didTouchEnd=function(t){var e=t.changedTouches[0],n=this.touchStartPoint,r=new o(e.pageX,e.pageY);r.isLeftOf(n)&&Math.abs(r.distanceFrom(n).x)>this.tolerance&&this.didSwipeLeft(t),r.isRightOf(n)&&Math.abs(r.distanceFrom(n).x)>this.tolerance&&this.didSwipeRight(t)};t.prototype.didTouchMove=function(t){var e=t.touches[0],n=this.touchStartPoint,r=new o(e.pageX,e.pageY);this.didMove({distance:r.distanceFrom(n),up:r.isAbove(n),down:r.isBelow(n),left:r.isLeftOf(n),right:r.isRightOf(n)})};return t}();t("d",a)}}}));