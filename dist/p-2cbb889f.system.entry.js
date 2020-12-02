var __awaiter=this&&this.__awaiter||function(t,a,n,o){function i(t){return t instanceof n?t:new n((function(a){a(t)}))}return new(n||(n=Promise))((function(n,r){function e(t){try{m(o.next(t))}catch(a){r(a)}}function s(t){try{m(o["throw"](t))}catch(a){r(a)}}function m(t){t.done?n(t.value):i(t.value).then(e,s)}m((o=o.apply(t,a||[])).next())}))};var __generator=this&&this.__generator||function(t,a){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},o,i,r,e;return e={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(e[Symbol.iterator]=function(){return this}),e;function s(t){return function(a){return m([t,a])}}function m(e){if(o)throw new TypeError("Generator is already executing.");while(n)try{if(o=1,i&&(r=e[0]&2?i["return"]:e[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,e[1])).done)return r;if(i=0,r)e=[e[0]&2,r.value];switch(e[0]){case 0:case 1:r=e;break;case 4:n.label++;return{value:e[1],done:false};case 5:n.label++;i=e[1];e=[0];continue;case 7:e=n.ops.pop();n.trys.pop();continue;default:if(!(r=n.trys,r=r.length>0&&r[r.length-1])&&(e[0]===6||e[0]===2)){n=0;continue}if(e[0]===3&&(!r||e[1]>r[0]&&e[1]<r[3])){n.label=e[1];break}if(e[0]===6&&n.label<r[1]){n.label=r[1];r=e;break}if(r&&n.label<r[2]){n.label=r[2];n.ops.push(e);break}if(r[2])n.ops.pop();n.trys.pop();continue}e=a.call(t,n)}catch(s){e=[6,s];i=0}finally{o=r=0}if(e[0]&5)throw e[1];return{value:e[0]?e[1]:void 0,done:true}}};System.register(["./p-ea4f0c53.system.js","./p-d74a6f64.system.js","./p-44397fa0.system.js"],(function(t){"use strict";var a,n,o,i,r,e,s,m;return{setters:[function(t){a=t.r,n=t.c,o=t.h,i=t.H,r=t.g},function(t){e=t.t},function(t){s=t.m,m=t.b}],execute:function(){t("ku4_modal",function(){function l(t){a(this,t),this.didDisplay=n(this,"display",7),this.didDismiss=n(this,"dismiss",7),this.visible=!1}l.prototype.handleVisibility=function(t){t?(s.preventScroll(),e.exists(this.trap)&&this.trap.activate()):(s.resumeScroll(),e.exists(this.trap)&&this.trap.deactivate())};l.prototype.handleKeyUp=function(t){this.visible&&m.esc.didFire(t)&&this.dismiss()};l.prototype.display=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.visible=!0,this.didDisplay.emit(this);return[2]}))}))};l.prototype.dismiss=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.visible=!1,this.didDismiss.emit(this);return[2]}))}))};l.prototype.componentDidLoad=function(){try{this.trap=this.host.querySelector("ku4-focus-trap")||document.querySelector(this.focusTrap),this.handleVisibility(this.visible)}catch(t){throw new Error("Cannot connect ku4-focus-trap: "+t.messsage)}};l.prototype.render=function(){var t=this;return o(i,{role:"dialog","aria-modal":"true"},o("section",{class:"ku4-modal-content"},o("slot",null)),o("section",{class:"ku4-modal-overlay",onClick:function(){return t.dismiss()},"aria-hidden":"true"}))};Object.defineProperty(l.prototype,"host",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(l,"watchers",{get:function(){return{visible:["handleVisibility"]}},enumerable:false,configurable:true});return l}()).style="@-webkit-keyframes ku4-modal-content-enter{0%{-webkit-transform:var(--ku4-modal-content-animation-start-transform, scale(0.5));transform:var(--ku4-modal-content-animation-start-transform, scale(0.5));opacity:var(--ku4-modal-content-animation-start-opacity, 0)}50%{-webkit-transform:var(--ku4-modal-content-animation-mid-transform, scale(1.2));transform:var(--ku4-modal-content-animation-mid-transform, scale(1.2));opacity:var(--ku4-modal-content-animation-mid-opacity, 0.8)}100%{-webkit-transform:var(--ku4-modal-content-animation-end-transform, scale(1));transform:var(--ku4-modal-content-animation-end-transform, scale(1));opacity:var(--ku4-modal-content-animation-end-opacity, 1)}}@keyframes ku4-modal-content-enter{0%{-webkit-transform:var(--ku4-modal-content-animation-start-transform, scale(0.5));transform:var(--ku4-modal-content-animation-start-transform, scale(0.5));opacity:var(--ku4-modal-content-animation-start-opacity, 0)}50%{-webkit-transform:var(--ku4-modal-content-animation-mid-transform, scale(1.2));transform:var(--ku4-modal-content-animation-mid-transform, scale(1.2));opacity:var(--ku4-modal-content-animation-mid-opacity, 0.8)}100%{-webkit-transform:var(--ku4-modal-content-animation-end-transform, scale(1));transform:var(--ku4-modal-content-animation-end-transform, scale(1));opacity:var(--ku4-modal-content-animation-end-opacity, 1)}}@-webkit-keyframes ku4-modal-overlay-enter{0%{-webkit-transform:var(--ku4-modal-overlay-animation-start-transform, none);transform:var(--ku4-modal-overlay-animation-start-transform, none);opacity:var(--ku4-modal-overlay-animation-start-opacity, 0)}50%{-webkit-transform:var(--ku4-modal-overlay-animation-mid-transform, none);transform:var(--ku4-modal-overlay-animation-mid-transform, none);opacity:var(--ku4-modal-overlay-animation-mid-opacity, 0.35)}100%{-webkit-transform:var(--ku4-modal-overlay-animation-end-transform, none);transform:var(--ku4-modal-overlay-animation-end-transform, none);opacity:var(--ku4-modal-overlay-animation-end-opacity, 0.4)}}@keyframes ku4-modal-overlay-enter{0%{-webkit-transform:var(--ku4-modal-overlay-animation-start-transform, none);transform:var(--ku4-modal-overlay-animation-start-transform, none);opacity:var(--ku4-modal-overlay-animation-start-opacity, 0)}50%{-webkit-transform:var(--ku4-modal-overlay-animation-mid-transform, none);transform:var(--ku4-modal-overlay-animation-mid-transform, none);opacity:var(--ku4-modal-overlay-animation-mid-opacity, 0.35)}100%{-webkit-transform:var(--ku4-modal-overlay-animation-end-transform, none);transform:var(--ku4-modal-overlay-animation-end-transform, none);opacity:var(--ku4-modal-overlay-animation-end-opacity, 0.4)}}:host{position:fixed;display:none;top:0;left:0;width:100vw;height:100vh;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background:transparent;overflow:auto;-webkit-transform-style:var(--ku4-modal-transform-style, initial);transform-style:var(--ku4-modal-transform-style, initial)}.ku4-modal-content{position:relative;top:0;left:0}.ku4-modal-overlay{position:fixed;display:-ms-flexbox;display:flex;top:0;left:0;width:100%;height:100%;opacity:0;background:var(--ku4-modal-overlay-background, #000)}:host([visible]){display:-ms-flexbox;display:flex;z-index:var(--ku4-modal-z-index, 5)}:host([visible]) .ku4-modal-content{-webkit-animation-name:ku4-modal-content-enter;animation-name:ku4-modal-content-enter;-webkit-animation-duration:var(--ku4-modal-content-animation-duration, 0.4s);animation-duration:var(--ku4-modal-content-animation-duration, 0.4s);-webkit-animation-timing-function:var(--ku4-modal-content-animation-timing-function, ease);animation-timing-function:var(--ku4-modal-content-animation-timing-function, ease);-webkit-transform:var(--ku4-modal-content-transform, none);transform:var(--ku4-modal-content-transform, none);opacity:var(--ku4-modal-content-opacity, 1);z-index:calc(var(--ku4-modal-z-index, 5) + 1)}:host([visible]) .ku4-modal-overlay{-webkit-animation-name:ku4-modal-overlay-enter;animation-name:ku4-modal-overlay-enter;-webkit-animation-duration:var(--ku4-modal-overlay-animation-duration, 0.4s);animation-duration:var(--ku4-modal-overlay-animation-duration, 0.4s);-webkit-animation-timing-function:var(--ku4-modal-overlay-animation-timing-function, ease);animation-timing-function:var(--ku4-modal-overlay-animation-timing-function, ease);-webkit-transform:var(--ku4-modal-overlay-transform, none);transform:var(--ku4-modal-overlay-transform, none);opacity:var(--ku4-modal-overlay-opacity, 0.4);z-index:calc(var(--ku4-modal-z-index, 5))}:host([visible=false]){display:none}"}}}));