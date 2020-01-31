System.register(["./p-785a3034.system.js"],(function(e){"use strict";var t,n,r;return{setters:[function(e){t=e.d;n=e.c;r=e.u}],execute:function(){var o=n((function(e,n){Object.defineProperty(n,"__esModule",{value:true});n["default"]=void 0;function r(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function i(e,t,n){if(t)o(e.prototype,t);if(n)o(e,n);return e}var u={};var a=function(){function e(){r(this,e)}i(e,null,[{key:"mute",value:function e(n){if(!t.Assert.exists(n)){return false}if(t.Assert.isFunction(n.preventDefault)){n.preventDefault()}if(t.Assert.isFunction(n.stopPropagation)){n.stopPropagation()}if(t.Assert.isFunction(n.stopImmediatePropagation)){n.stopImmediatePropagation()}if(t.Assert.exists(n.cancelBubble)){n.cancelBubble=true}return false}},{key:"add",value:function e(n,r,o,i){var a=(0,t.uid)();u[a]={element:n,event:r,callback:o,options:i};n.addEventListener(r,o,i);return a}},{key:"remove",value:function e(t){var n=u[t],r=n.element,o=n.event,i=n.callback,a=n.options;r.removeEventListener(o,i,a)}}]);return e}();n["default"]=a}));r(o);var i=n((function(e,n){Object.defineProperty(n,"__esModule",{value:true});n["default"]=void 0;var r=i(o);function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function l(e,t,n){if(t)a(e.prototype,t);if(n)a(e,n);return e}function c(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var d=function(){function e(){u(this,e)}l(e,null,[{key:"preventScroll",value:function t(){e.position=document.body.style.position;e.top=document.body.style.top;e.left=document.body.style.left;e.width=document.body.style.width;e.height=document.body.style.height;e.documentWidth=document.documentElement.style.width;e.documentHeight=document.documentElement.style.height;e.overflowY=document.documentElement.style.overflowY;e.scrollX=window.scrollX||window.pageXOffset;e.scrollY=window.scrollY||window.pageYOffset;var n=e.scrollbarWidth;document.body.style.position="fixed";document.body.style.left="-".concat(e.scrollX,"px");document.body.style.top="-".concat(e.scrollY,"px");document.body.style.width="calc(100vw - ".concat(n,"px)");document.body.style.height="calc(100% + 1px)";document.documentElement.style.width="100wh";document.documentElement.style.height="100vh";document.documentElement.style.overflowY=n&&"scroll"}},{key:"resumeScroll",value:function t(){document.body.style.position=e.position;document.body.style.top=e.top;document.body.style.left=e.left;document.body.style.width=e.width;document.body.style.height=e.height;document.documentElement.style.width=e.documentWidth;document.documentElement.style.height=e.documentHeight;document.documentElement.style.overflowY=e.overflowY;window.scrollTo(e.scrollX,e.scrollY);e.position=null;e.top=null;e.left=null;e.width=null;e.height=null;e.documentWidth=null;e.documentHeight=null;e.overflowY=null;e.scrollX=null;e.scrollY=null}},{key:"onClick",value:function e(t,n){return r["default"].add(document,"click",t,n)}},{key:"onKeyUp",value:function e(t,n){return r["default"].add(document,"keyup",t,n)}},{key:"removeEvent",value:function e(t){r["default"].remove(t)}},{key:"scrollbarWidth",get:function e(){return window.innerWidth-document.documentElement.clientWidth}},{key:"isScrollPrevented",get:function n(){return t.Assert.exists(e.scrollY)}}]);return e}();n["default"]=d;c(d,"position",void 0);c(d,"left",void 0);c(d,"top",void 0);c(d,"width",void 0);c(d,"height",void 0);c(d,"documentWidth",void 0);c(d,"documentHeight",void 0);c(d,"overflowY",void 0);c(d,"scrollX",void 0);c(d,"scrollY",void 0)}));r(i);var u=n((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t["default"]=void 0;var n=r(o);function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function a(e,t,n){if(t)u(e.prototype,t);if(n)u(e,n);return e}var l=function(){function e(){i(this,e)}a(e,null,[{key:"onClick",value:function e(t,r){return n["default"].add(window,"click",t,r)}},{key:"onKeyUp",value:function e(t,r){return n["default"].add(window,"keyup",t,r)}},{key:"removeEvent",value:function e(t){n["default"].remove(t)}}]);return e}();t["default"]=l}));r(u);var a=n((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t["default"]=void 0;function n(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function o(e,t,n){if(t)r(e.prototype,t);if(n)r(e,n);return e}var i=function(){function e(t,r){n(this,e);this.key=t;this.msKey=r||t}o(e,[{key:"equals",value:function t(n){return n instanceof e&&(this.key===n.key||this.msKey===n.msKey)}},{key:"didFire",value:function t(n){var r=n.code,o=n.key;var i=o==="Dead"?r:o;return n&&(this.equals(new e(i))||this.key==="ANY")}}],[{key:"press",get:function e(){return"keypress"}},{key:"down",get:function e(){return"keydown"}},{key:"up",get:function e(){return"keyup"}},{key:"any",get:function t(){return new e("ANY")}},{key:"esc",get:function t(){return new e("Escape","Esc")}},{key:"enter",get:function t(){return new e("Enter")}},{key:"space",get:function t(){return new e(" ","Spacebar")}},{key:"tab",get:function t(){return new e("Tab")}},{key:"left",get:function t(){return new e("ArrowLeft","Left")}},{key:"right",get:function t(){return new e("ArrowRight","Right")}}]);return e}();t["default"]=i}));r(a);var l=n((function(e,t){Object.defineProperty(t,"__esModule",{value:true});t["default"]=void 0;var n=r(a);function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function u(e,t,n){if(t)i(e.prototype,t);if(n)i(e,n);return e}var l=function(){function e(){o(this,e)}u(e,null,[{key:"on",value:function e(t,n,r){var o=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;var i=function e(t){return n.didFire(t)?r(t,n):null};window.addEventListener(t,i,o);return{unsubscribe:function e(){window.removeEventListener(t,i)}}}},{key:"onKeyPress",value:function t(r,o){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;return e.on(n["default"].press,r,o,i)}},{key:"onKeyDown",value:function t(r,o){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;return e.on(n["default"].down,r,o,i)}},{key:"onKeyUp",value:function t(r,o){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;return e.on(n["default"].up,r,o,i)}}]);return e}();t["default"]=l}));r(l);var c=n((function(e,n){Object.defineProperty(n,"__esModule",{value:true});n["default"]=void 0;function r(e,t){return u(e)||i(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function i(e,t){if(!(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")){return}var n=[];var r=true;var o=false;var i=undefined;try{for(var u=e[Symbol.iterator](),a;!(r=(a=u.next()).done);r=true){n.push(a.value);if(t&&n.length===t)break}}catch(l){o=true;i=l}finally{try{if(!r&&u["return"]!=null)u["return"]()}finally{if(o)throw i}}return n}function u(e){if(Array.isArray(e))return e}function a(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function c(e,t,n){if(t)l(e.prototype,t);if(n)l(e,n);return e}function d(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var f=function(){function e(t){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;a(this,e);d(this,"element",void 0);d(this,"tolerance",void 0);d(this,"touchStartPoint",void 0);d(this,"didSwipeLeft",(function(){}));d(this,"didSwipeRight",(function(){}));d(this,"didMove",(function(){}));this.didTouchStart=this.didTouchStart.bind(this);this.didTouchEnd=this.didTouchEnd.bind(this);this.didTouchMove=this.didTouchMove.bind(this);t.addEventListener("touchstart",this.didTouchStart,{capture:false,passive:true});t.addEventListener("touchend",this.didTouchEnd,{capture:false,passive:true});t.addEventListener("touchmove",this.didTouchMove,{capture:false,passive:true});this.element=t;this.tolerance=n}c(e,[{key:"onLeft",value:function e(t){this.didSwipeLeft=t;return this}},{key:"onRight",value:function e(t){this.didSwipeRight=t;return this}},{key:"onMove",value:function e(t){this.didMove=t;return this}},{key:"destroy",value:function e(){var t=this.element;t.removeEventListener("touchstart",this.didTouchStart,false);t.removeEventListener("touchend",this.didTouchEnd,false);t.removeEventListener("touchmove",this.didTouchMove,false);return this}},{key:"didTouchStart",value:function e(n){var o=r(n.touches,1),i=o[0];this.touchStartPoint=new t.Point(i.pageX,i.pageY)}},{key:"didTouchEnd",value:function e(n){var o=r(n.changedTouches,1),i=o[0];var u=this.touchStartPoint;var a=new t.Point(i.pageX,i.pageY);if(a.isLeftOf(u)&&Math.abs(a.distanceFrom(u).x)>this.tolerance){this.didSwipeLeft(n)}if(a.isRightOf(u)&&Math.abs(a.distanceFrom(u).x)>this.tolerance){this.didSwipeRight(n)}}},{key:"didTouchMove",value:function e(n){var o=r(n.touches,1),i=o[0];var u=this.touchStartPoint;var a=new t.Point(i.pageX,i.pageY);this.didMove({distance:a.distanceFrom(u),up:a.isAbove(u),down:a.isBelow(u),left:a.isLeftOf(u),right:a.isRightOf(u)})}}]);return e}();n["default"]=f}));r(c);var d=n((function(e,n){Object.defineProperty(n,"__esModule",{value:true});n.encodeBase64=r;n.decodeBase64=o;n.encodeUtf8=i;n.decodeUtf8=u;function r(e){if(!t.Assert.isString(e)){throw new Error("Cannot encode non-string values.")}return window.btoa(e)}function o(e){if(!t.Assert.isString(e)){throw new Error("Cannot encode non-string values.")}return window.atob(e)}function i(e){if(!t.Assert.isString(e)){throw new Error("Cannot encode non-string values.")}return decodeURIComponent(encodeURIComponent(e))}function u(e){if(!t.Assert.isString(e)){throw new Error("Cannot decode non-string values.")}return decodeURIComponent(encodeURIComponent(e))}}));r(d);var f=n((function(e,t){Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"Document",{enumerable:true,get:function e(){return n["default"]}});Object.defineProperty(t,"Event",{enumerable:true,get:function e(){return r["default"]}});Object.defineProperty(t,"Window",{enumerable:true,get:function e(){return f["default"]}});Object.defineProperty(t,"Key",{enumerable:true,get:function e(){return s["default"]}});Object.defineProperty(t,"Keyboard",{enumerable:true,get:function e(){return v["default"]}});Object.defineProperty(t,"Swipe",{enumerable:true,get:function e(){return h["default"]}});Object.defineProperty(t,"encodeBase64",{enumerable:true,get:function e(){return d.encodeBase64}});Object.defineProperty(t,"decodeBase64",{enumerable:true,get:function e(){return d.decodeBase64}});Object.defineProperty(t,"encodeUtf8",{enumerable:true,get:function e(){return d.encodeUtf8}});Object.defineProperty(t,"decodeUtf8",{enumerable:true,get:function e(){return d.decodeUtf8}});var n=y(i);var r=y(o);var f=y(u);var s=y(a);var v=y(l);var h=y(c);function y(e){return e&&e.__esModule?e:{default:e}}}));r(f);var s=e("c",f.Document);var v=e("b",f.Event);var h=e("a",f.Key);var y=e("d",f.Swipe)}}}));