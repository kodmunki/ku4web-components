var __awaiter=this&&this.__awaiter||function(t,e,r,i){function n(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,s){function o(t){try{u(i.next(t))}catch(e){s(e)}}function a(t){try{u(i["throw"](t))}catch(e){s(e)}}function u(t){t.done?r(t.value):n(t.value).then(o,a)}u((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,n,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return u([t,e])}}function u(o){if(i)throw new TypeError("Generator is already executing.");while(r)try{if(i=1,n&&(s=o[0]&2?n["return"]:o[0]?n["throw"]||((s=n["return"])&&s.call(n),0):n.next)&&!(s=s.call(n,o[1])).done)return s;if(n=0,s)o=[o[0]&2,s.value];switch(o[0]){case 0:case 1:s=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;n=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(s=r.trys,s=s.length>0&&s[s.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!s||o[1]>s[0]&&o[1]<s[3])){r.label=o[1];break}if(o[0]===6&&r.label<s[1]){r.label=s[1];s=o;break}if(s&&r.label<s[2]){r.label=s[2];r.ops.push(o);break}if(s[2])r.ops.pop();r.trys.pop();continue}o=e.call(t,r)}catch(a){o=[6,a];n=0}finally{i=s=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-ea87cb02.system.js","./p-7dcb279b.system.js","./p-d54bbafe.system.js"],(function(t){"use strict";var e,r,i,n,s,o,a;return{setters:[function(t){e=t.r;r=t.c;i=t.h;n=t.H;s=t.g},function(t){o=t.a},function(t){a=t.c}],execute:function(){var u=t("ku4_modal",function(){function t(t){e(this,t);this.visible=false;this.displayed=r(this,"ku4-modal-displayed",7);this.dismissed=r(this,"ku4-modal-dismissed",7)}t.prototype.handleVisibility=function(t){if(t){a.preventScroll();if(o.exists(this.trap)){this.trap.activate()}}else{a.resumeScroll();if(o.exists(this.trap)){this.trap.deactivate()}}};t.prototype.display=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.visible=true;this.displayed.emit(this);return[2]}))}))};t.prototype.dismiss=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.visible=false;this.dismissed.emit(this);return[2]}))}))};t.prototype.componentDidLoad=function(){try{this.trap=this.host.querySelector("ku4-focus-trap")||document.querySelector(this.focusTrap)}catch(t){throw new Error("Cannot connect focus-trap: "+t.messsage)}};t.prototype.render=function(){var t=this;var e=this.visible;return i(n,{class:e?"visible":"","aria-modal":"true"},i("section",{class:"overlay",onClick:function(){return t.dismiss()},"aria-hidden":"true"}),i("section",{class:"content"},i("slot",null)))};Object.defineProperty(t.prototype,"host",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{visible:["handleVisibility"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"\@-webkit-keyframes ku4-modal-content-enter{0%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}30%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.8}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}\@keyframes ku4-modal-content-enter{0%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}30%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.8}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}\@-webkit-keyframes ku4-modal-overlay-enter{0%{opacity:0}to{opacity:.4}}\@keyframes ku4-modal-overlay-enter{0%{opacity:0}to{opacity:.4}}:host{position:fixed;display:none;top:0;left:0;width:100vw;height:100vh;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background:transparent;overflow:auto}.content{position:relative;top:0;left:0}.overlay{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;background-color:var(--ku4-modal-overlay-background-color,#000)}:host(.visible){display:-ms-flexbox;display:flex;z-index:var(--ku4-modal-z-index,5)}:host(.visible) .content{-webkit-animation-name:var(--ku4-modal-content-animation,ku4-modal-content-enter);animation-name:var(--ku4-modal-content-animation,ku4-modal-content-enter);-webkit-animation-duration:var(--ku4-modal-content-animation-duration,.4s);animation-duration:var(--ku4-modal-content-animation-duration,.4s);-webkit-animation-timing-function:var(--ku4-modal-content-animation-timing-function,ease);animation-timing-function:var(--ku4-modal-content-animation-timing-function,ease)}:host(.visible) .overlay{display:-ms-flexbox;display:flex;opacity:.4;-webkit-animation-name:var(--ku4-modal-overlay-animation,ku4-modal-overlay-enter);animation-name:var(--ku4-modal-overlay-animation,ku4-modal-overlay-enter);-webkit-animation-duration:var(--ku4-modal-overlay-animation-duration,.4s);animation-duration:var(--ku4-modal-overlay-animation-duration,.4s);-webkit-animation-timing-function:var(--ku4-modal-overlay-animation-timing-function,ease);animation-timing-function:var(--ku4-modal-overlay-animation-timing-function,ease)}::slotted(*){position:relative}"},enumerable:true,configurable:true});return t}())}}}));