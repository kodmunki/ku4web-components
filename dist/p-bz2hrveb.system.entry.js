var __awaiter=this&&this.__awaiter||function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function u(e){try{a(n.next(e))}catch(t){o(t)}}function s(e){try{a(n["throw"](e))}catch(t){o(t)}}function a(e){e.done?r(e.value):i(e.value).then(u,s)}a((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,u;return u={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function s(e){return function(t){return a([e,t])}}function a(u){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=u[0]&2?i["return"]:u[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;if(i=0,o)u=[u[0]&2,o.value];switch(u[0]){case 0:case 1:o=u;break;case 4:r.label++;return{value:u[1],done:false};case 5:r.label++;i=u[1];u=[0];continue;case 7:u=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){r.label=u[1];break}if(u[0]===6&&r.label<o[1]){r.label=o[1];o=u;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(u);break}if(o[2])r.ops.pop();r.trys.pop();continue}u=t.call(e,r)}catch(s){u=[6,s];i=0}finally{n=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-d28a3177.system.js","./p-73c28a76.system.js","./p-5049d14f.system.js"],(function(e){"use strict";var t,r,n,i,o;return{setters:[function(e){t=e.r;r=e.h;n=e.H;i=e.g},function(){},function(e){o=e.d}],execute:function(){var u=function(){function e(e){this.list=[];this.head=0;this.list=e}Object.defineProperty(e.prototype,"isEmpty",{get:function(){return this.list.length<1},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"index",{get:function(){return this.head},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"length",{get:function(){return this.list.length},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"current",{get:function(){return this.list[this.head]},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"next",{get:function(){var e=this.length;var t=this.head;this.head=t++<e-1?t:0;return this.current},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"prev",{get:function(){var e=this.length;var t=this.head;this.head=--t<0?e-1:t;return this.current},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"peekNext",{get:function(){var e=this,t=e.head,r=e.length;return this.list[t+1<r-1?t+1:0]},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"peekPrev",{get:function(){var e=this,t=e.head,r=e.length;return this.list[t-1<0?r-1:t-1]},enumerable:true,configurable:true});return e}();var s=e("ku4_carousel",function(){function e(e){t(this,e)}e.prototype.next=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,this.display("next")]}))}))};e.prototype.previous=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,this.display("prev")]}))}))};Object.defineProperty(e.prototype,"currentSlideNumber",{get:function(){return this.rolodex&&this.rolodex.index+1},enumerable:true,configurable:true});e.prototype.display=function(e){var t=this.slideState,r=t.previous,n=t.current;var i=this.rolodex[e];if(r){r.deactivate()}n.slideOut(e);i.slideIn(e);this.slideState={previous:n,current:i};return this};e.prototype.componentDidLoad=function(){var e=this;this.swipe=new o(this.host,20).onLeft((function(){return e.next()})).onRight((function(){return e.previous()}));this.rolodex=new u(this.host.querySelectorAll("ku4-carousel-slide"));this.rolodex.current.activate();this.slideState={current:this.rolodex.current}};e.prototype.componentDidUnload=function(){if(this.swipe){this.swipe.destroy()}if(this.timeout){this.timeout.clear()}};e.prototype.render=function(){var e=this;var t=this.currentSlideNumber,i=t===void 0?0:t;return r(n,{class:"current-slide-"+i,"aria-roledescription":"carousel"},r("section",{class:"controls"},r("button",{type:"button",class:"prev",onClick:function(){return e.previous()},"aria-label":"previous slide"}),r("button",{type:"button",class:"next",onClick:function(){return e.next()},"aria-label":"next slide"})),r("section",{class:"slide-container","aria-live":"polite"},r("slot",null)),this.rolodex&&r("section",{class:"pages"},r("span",{class:"pages-text"},i+" of "+this.rolodex.length)))};Object.defineProperty(e.prototype,"host",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"\@-webkit-keyframes ku4-carousel-enter-left{0%{top:0;left:-100%;opacity:0}100%{top:0;left:0;opacity:1}}\@keyframes ku4-carousel-enter-left{0%{top:0;left:-100%;opacity:0}100%{top:0;left:0;opacity:1}}\@-webkit-keyframes ku4-carousel-enter-right{0%{top:0;left:100%;opacity:0}100%{top:0;left:0;opacity:1}}\@keyframes ku4-carousel-enter-right{0%{top:0;left:100%;opacity:0}100%{top:0;left:0;opacity:1}}\@-webkit-keyframes ku4-carousel-exit-left{0%{top:0;left:0;opacity:1}100%{top:0;left:-100%;opacity:0}}\@keyframes ku4-carousel-exit-left{0%{top:0;left:0;opacity:1}100%{top:0;left:-100%;opacity:0}}\@-webkit-keyframes ku4-carousel-exit-right{0%{top:0;left:0;opacity:1}100%{top:0;left:100%;opacity:0}}\@keyframes ku4-carousel-exit-right{0%{top:0;left:0;opacity:1}100%{top:0;left:100%;opacity:0}}:host{position:relative;display:block;overflow:hidden;background-color:var(--ku4-carousel-background-color)}:host(:not(.hydrated)){visibility:hidden}.slide-container{position:relative;width:100%;height:100%;overflow:hidden}.controls .next,.controls .prev{position:absolute;top:var(--ku4-carousel-controls-top);border:var(--ku4-carousel-controls-border);background-color:var(--ku4-carousel-controls-background-color);font-family:var(--ku4-carousel-controls-font-family);font-weight:var(--ku4-carousel-controls-font-weight);font-size:var(--ku4-carousel-controls-font-size);line-height:var(--ku4-carousel-controls-line-height);line-spacing:var(--ku4-carousel-controls-line-spacing);opacity:var(--ku4-carousel-controls-opacity);z-index:4}.controls .next:focus,.controls .prev:focus{background-color:var(--ku4-carousel-controls-focus-background-color);outline:var(--ku4-carousel-controls-focus-outline);opacity:var(--ku4-carousel-controls-focus-opacity)}.controls .next:hover,.controls .prev:hover{background-color:var(--ku4-carousel-controls-hover-background-color);opacity:var(--ku4-carousel-controls-hover-opacity)}.controls .next{right:0;width:var(--ku4-carousel-controls-next-width);height:var(--ku4-carousel-controls-next-height);background-image:var(--ku4-carousel-controls-next-background-image);background-repeat:var(--ku4-carousel-controls-next-background-repeat);background-position-x:var(--ku4-carousel-controls-next-background-position-x);background-position-y:var(--ku4-carousel-controls-next-background-position-y);background-size:var(--ku4-carousel-controls-next-background-size)}.controls .next:focus{background-image:var(--ku4-carousel-controls-next-focus-background-image);background-repeat:var(--ku4-carousel-controls-next-focus-background-repeat);background-position-x:var(--ku4-carousel-controls-next-focus-background-position-x);background-position-y:var(--ku4-carousel-controls-next-focus-background-position-y);background-size:var(--ku4-carousel-controls-next-focus-background-size)}.controls .next:hover{background-image:var(--ku4-carousel-controls-next-hover-background-image);background-repeat:var(--ku4-carousel-controls-next-hover-background-repeat);background-position-x:var(--ku4-carousel-controls-next-hover-background-position-x);background-position-y:var(--ku4-carousel-controls-next-hover-background-position-y);background-size:var(--ku4-carousel-controls-next-hover-background-size)}.controls .prev{left:0;width:var(--ku4-carousel-controls-next-width);height:var(--ku4-carousel-controls-next-height);background-image:var(--ku4-carousel-controls-previous-background-image);background-repeat:var(--ku4-carousel-controls-previous-background-repeat);background-position-x:var(--ku4-carousel-controls-previous-background-position-x);background-position-y:var(--ku4-carousel-controls-previous-background-position-y);background-size:var(--ku4-carousel-controls-previous-background-size)}.controls .prev:focus{background-image:var(--ku4-carousel-controls-previous-focus-background-image);background-repeat:var(--ku4-carousel-controls-previous-focus-background-repeat);background-position-x:var(--ku4-carousel-controls-previous-focus-background-position-x);background-position-y:var(--ku4-carousel-controls-previous-focus-background-position-y);background-size:var(--ku4-carousel-controls-previous-focus-background-size)}.controls .prev:hover{background-image:var(--ku4-carousel-controls-previous-hover-background-image);background-repeat:var(--ku4-carousel-controls-previous-hover-background-repeat);background-position-x:var(--ku4-carousel-controls-previous-hover-background-position-x);background-position-y:var(--ku4-carousel-controls-previous-hover-background-position-y);background-size:var(--ku4-carousel-controls-previous-hover-background-size)}.pages{position:absolute;top:var(--ku4-carousel-pages-top);bottom:var(--ku4-carousel-pages-bottom);width:100%;height:var(--ku4-carousel-pages-height);background-color:var(--ku4-carousel-pages-background-color);opacity:var(--ku4-carousel-pages-opacity);text-align:center;z-index:3}.pages-text{display:inline-block;padding:var(--ku4-carousel-pages-text-padding);font-family:var(--ku4-carousel-pages-text-font-family);font-weight:var(--ku4-carousel-pages-text-font-weight);font-size:var(--ku4-carousel-pages-text-font-size);line-height:var(--ku4-carousel-pages-text-line-height);color:var(--ku4-carousel-pages-text-color)}::slotted(*){position:absolute;display:-ms-flexbox;display:flex;-ms-flex:1 0 auto;flex:1 0 auto;-ms-flex-direction:column;flex-direction:column;top:0;left:-100%;width:100%}::slotted(.inactive){position:absolute}::slotted(.inactive.prev){-webkit-animation-name:var(--ku4-carousel-animation-inactive-prev-name, ku4-carousel-exit-right);animation-name:var(--ku4-carousel-animation-inactive-prev-name, ku4-carousel-exit-right);-webkit-animation-duration:var(--ku4-carousel-animation-duration);animation-duration:var(--ku4-carousel-animation-duration);-webkit-animation-timing-function:var(--ku4-carousel-animation-timing-function);animation-timing-function:var(--ku4-carousel-animation-timing-function)}::slotted(.inactive.next){-webkit-animation-name:var(--ku4-carousel-animation-inactive-next-name, ku4-carousel-exit-left);animation-name:var(--ku4-carousel-animation-inactive-next-name, ku4-carousel-exit-left);-webkit-animation-duration:var(--ku4-carousel-animation-duration);animation-duration:var(--ku4-carousel-animation-duration);-webkit-animation-timing-function:var(--ku4-carousel-animation-timing-function);animation-timing-function:var(--ku4-carousel-animation-timing-function)}::slotted(.active){position:relative;top:0;left:0;width:100%;height:100%;z-index:1}::slotted(.active.prev){-webkit-animation-name:var(--ku4-carousel-animation-active-prev-name, ku4-carousel-enter-left);animation-name:var(--ku4-carousel-animation-active-prev-name, ku4-carousel-enter-left);-webkit-animation-duration:var(--ku4-carousel-animation-duration);animation-duration:var(--ku4-carousel-animation-duration);-webkit-animation-timing-function:var(--ku4-carousel-animation-timing-function);animation-timing-function:var(--ku4-carousel-animation-timing-function)}::slotted(.active.next){-webkit-animation-name:var(--ku4-carousel-animation-active-next-name, ku4-carousel-enter-right);animation-name:var(--ku4-carousel-animation-active-next-name, ku4-carousel-enter-right);-webkit-animation-duration:var(--ku4-carousel-animation-duration);animation-duration:var(--ku4-carousel-animation-duration);-webkit-animation-timing-function:var(--ku4-carousel-animation-timing-function);animation-timing-function:var(--ku4-carousel-animation-timing-function)}\@media (hover: hover){.controls:hover{background-color:var(--ku4-carousel-controls-focus-background-color)}}"},enumerable:true,configurable:true});return e}())}}}));