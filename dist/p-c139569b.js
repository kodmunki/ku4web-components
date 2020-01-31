import{d as n,c as e,u as t}from"./p-c4eeb48f.js";var o=e((function(e,t){function o(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={};t.default=function(){function e(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r;return t=e,r=[{key:"mute",value:function(e){return!!n.Assert.exists(e)&&(n.Assert.isFunction(e.preventDefault)&&e.preventDefault(),n.Assert.isFunction(e.stopPropagation)&&e.stopPropagation(),n.Assert.isFunction(e.stopImmediatePropagation)&&e.stopImmediatePropagation(),n.Assert.exists(e.cancelBubble)&&(e.cancelBubble=!0),!1)}},{key:"add",value:function(e,t,o,r){var i=(0,n.uid)();return u[i]={element:e,event:t,callback:o,options:r},e.addEventListener(t,o,r),i}},{key:"remove",value:function(n){var e=u[n];e.element.removeEventListener(e.event,e.callback,e.options)}}],null&&o(t.prototype,null),r&&o(t,r),e}()}));t(o);var u=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,r=(u=o)&&u.__esModule?u:{default:u};function i(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var a=function(){function e(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,o;return t=e,o=[{key:"preventScroll",value:function(){e.position=document.body.style.position,e.top=document.body.style.top,e.left=document.body.style.left,e.width=document.body.style.width,e.height=document.body.style.height,e.documentWidth=document.documentElement.style.width,e.documentHeight=document.documentElement.style.height,e.overflowY=document.documentElement.style.overflowY,e.scrollX=window.scrollX||window.pageXOffset,e.scrollY=window.scrollY||window.pageYOffset;var n=e.scrollbarWidth;document.body.style.position="fixed",document.body.style.left="-".concat(e.scrollX,"px"),document.body.style.top="-".concat(e.scrollY,"px"),document.body.style.width="calc(100vw - ".concat(n,"px)"),document.body.style.height="calc(100% + 1px)",document.documentElement.style.width="100wh",document.documentElement.style.height="100vh",document.documentElement.style.overflowY=n&&"scroll"}},{key:"resumeScroll",value:function(){document.body.style.position=e.position,document.body.style.top=e.top,document.body.style.left=e.left,document.body.style.width=e.width,document.body.style.height=e.height,document.documentElement.style.width=e.documentWidth,document.documentElement.style.height=e.documentHeight,document.documentElement.style.overflowY=e.overflowY,window.scrollTo(e.scrollX,e.scrollY),e.position=null,e.top=null,e.left=null,e.width=null,e.height=null,e.documentWidth=null,e.documentHeight=null,e.overflowY=null,e.scrollX=null,e.scrollY=null}},{key:"onClick",value:function(n,e){return r.default.add(document,"click",n,e)}},{key:"onKeyUp",value:function(n,e){return r.default.add(document,"keyup",n,e)}},{key:"removeEvent",value:function(n){r.default.remove(n)}},{key:"scrollbarWidth",get:function(){return window.innerWidth-document.documentElement.clientWidth}},{key:"isScrollPrevented",get:function(){return n.Assert.exists(e.scrollY)}}],null&&i(t.prototype,null),o&&i(t,o),e}();t.default=a,c(a,"position",void 0),c(a,"left",void 0),c(a,"top",void 0),c(a,"width",void 0),c(a,"height",void 0),c(a,"documentWidth",void 0),c(a,"documentHeight",void 0),c(a,"overflowY",void 0),c(a,"scrollX",void 0),c(a,"scrollY",void 0)}));t(u);var r=e((function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t,u=(t=o)&&t.__esModule?t:{default:t};function r(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}e.default=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t;return e=n,t=[{key:"onClick",value:function(n,e){return u.default.add(window,"click",n,e)}},{key:"onKeyUp",value:function(n,e){return u.default.add(window,"keyup",n,e)}},{key:"removeEvent",value:function(n){u.default.remove(n)}}],null&&r(e.prototype,null),t&&r(e,t),n}()}));t(r);var i=e((function(n,e){function t(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.default=function(){function n(e,t){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.key=e,this.msKey=t||e}var e,o,u;return e=n,u=[{key:"press",get:function(){return"keypress"}},{key:"down",get:function(){return"keydown"}},{key:"up",get:function(){return"keyup"}},{key:"any",get:function(){return new n("ANY")}},{key:"esc",get:function(){return new n("Escape","Esc")}},{key:"enter",get:function(){return new n("Enter")}},{key:"space",get:function(){return new n(" ","Spacebar")}},{key:"tab",get:function(){return new n("Tab")}},{key:"left",get:function(){return new n("ArrowLeft","Left")}},{key:"right",get:function(){return new n("ArrowRight","Right")}}],(o=[{key:"equals",value:function(e){return e instanceof n&&(this.key===e.key||this.msKey===e.msKey)}},{key:"didFire",value:function(e){var t=e.key;return e&&(this.equals(new n("Dead"===t?e.code:t))||"ANY"===this.key)}}])&&t(e.prototype,o),u&&t(e,u),n}()}));t(i);var c=e((function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t,o=(t=i)&&t.__esModule?t:{default:t};function u(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}e.default=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t;return e=n,t=[{key:"on",value:function(n,e,t){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],u=function(n){return e.didFire(n)?t(n,e):null};return window.addEventListener(n,u,o),{unsubscribe:function(){window.removeEventListener(n,u)}}}},{key:"onKeyPress",value:function(e,t){var u=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n.on(o.default.press,e,t,u)}},{key:"onKeyDown",value:function(e,t){var u=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n.on(o.default.down,e,t,u)}},{key:"onKeyUp",value:function(e,t){var u=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n.on(o.default.up,e,t,u)}}],null&&u(e.prototype,null),t&&u(e,t),n}()}));t(c);var a=e((function(e,t){function o(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var t=[],o=!0,u=!1,r=void 0;try{for(var i,c=n[Symbol.iterator]();!(o=(i=c.next()).done)&&(t.push(i.value),!e||t.length!==e);o=!0);}catch(a){u=!0,r=a}finally{try{o||null==c.return||c.return()}finally{if(u)throw r}}return t}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;u(this,e),i(this,"element",void 0),i(this,"tolerance",void 0),i(this,"touchStartPoint",void 0),i(this,"didSwipeLeft",(function(){})),i(this,"didSwipeRight",(function(){})),i(this,"didMove",(function(){})),this.didTouchStart=this.didTouchStart.bind(this),this.didTouchEnd=this.didTouchEnd.bind(this),this.didTouchMove=this.didTouchMove.bind(this),n.addEventListener("touchstart",this.didTouchStart,{capture:!1,passive:!0}),n.addEventListener("touchend",this.didTouchEnd,{capture:!1,passive:!0}),n.addEventListener("touchmove",this.didTouchMove,{capture:!1,passive:!0}),this.element=n,this.tolerance=t}var t,c;return t=e,(c=[{key:"onLeft",value:function(n){return this.didSwipeLeft=n,this}},{key:"onRight",value:function(n){return this.didSwipeRight=n,this}},{key:"onMove",value:function(n){return this.didMove=n,this}},{key:"destroy",value:function(){var n=this.element;return n.removeEventListener("touchstart",this.didTouchStart,!1),n.removeEventListener("touchend",this.didTouchEnd,!1),n.removeEventListener("touchmove",this.didTouchMove,!1),this}},{key:"didTouchStart",value:function(e){var t=o(e.touches,1)[0];this.touchStartPoint=new n.Point(t.pageX,t.pageY)}},{key:"didTouchEnd",value:function(e){var t=o(e.changedTouches,1)[0],u=this.touchStartPoint,r=new n.Point(t.pageX,t.pageY);r.isLeftOf(u)&&Math.abs(r.distanceFrom(u).x)>this.tolerance&&this.didSwipeLeft(e),r.isRightOf(u)&&Math.abs(r.distanceFrom(u).x)>this.tolerance&&this.didSwipeRight(e)}},{key:"didTouchMove",value:function(e){var t=o(e.touches,1)[0],u=this.touchStartPoint,r=new n.Point(t.pageX,t.pageY);this.didMove({distance:r.distanceFrom(u),up:r.isAbove(u),down:r.isBelow(u),left:r.isLeftOf(u),right:r.isRightOf(u)})}}])&&r(t.prototype,c),e}()}));t(a);var l=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.encodeBase64=function(e){if(!n.Assert.isString(e))throw new Error("Cannot encode non-string values.");return window.btoa(e)},t.decodeBase64=function(e){if(!n.Assert.isString(e))throw new Error("Cannot encode non-string values.");return window.atob(e)},t.encodeUtf8=function(e){if(!n.Assert.isString(e))throw new Error("Cannot encode non-string values.");return decodeURIComponent(encodeURIComponent(e))},t.decodeUtf8=function(e){if(!n.Assert.isString(e))throw new Error("Cannot decode non-string values.");return decodeURIComponent(encodeURIComponent(e))}}));t(l);var f=e((function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Document",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"Event",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e,"Window",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(e,"Key",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"Keyboard",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e,"Swipe",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(e,"encodeBase64",{enumerable:!0,get:function(){return l.encodeBase64}}),Object.defineProperty(e,"decodeBase64",{enumerable:!0,get:function(){return l.decodeBase64}}),Object.defineProperty(e,"encodeUtf8",{enumerable:!0,get:function(){return l.encodeUtf8}}),Object.defineProperty(e,"decodeUtf8",{enumerable:!0,get:function(){return l.decodeUtf8}});var t=w(u),f=w(o),v=w(r),s=w(i),d=w(c),h=w(a);function w(n){return n&&n.__esModule?n:{default:n}}}));t(f);var v=f.Document,s=f.Event,d=f.Key,h=f.Swipe;export{d as a,s as b,v as c,h as d};