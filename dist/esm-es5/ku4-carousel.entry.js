var __awaiter=this&&this.__awaiter||function(o,e,t,r){function a(o){return o instanceof t?o:new t((function(e){e(o)}))}return new(t||(t=Promise))((function(t,n){function i(o){try{s(r.next(o))}catch(e){n(e)}}function u(o){try{s(r["throw"](o))}catch(e){n(e)}}function s(o){o.done?t(o.value):a(o.value).then(i,u)}s((r=r.apply(o,e||[])).next())}))};var __generator=this&&this.__generator||function(o,e){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},r,a,n,i;return i={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function u(o){return function(e){return s([o,e])}}function s(i){if(r)throw new TypeError("Generator is already executing.");while(t)try{if(r=1,a&&(n=i[0]&2?a["return"]:i[0]?a["throw"]||((n=a["return"])&&n.call(a),0):a.next)&&!(n=n.call(a,i[1])).done)return n;if(a=0,n)i=[i[0]&2,n.value];switch(i[0]){case 0:case 1:n=i;break;case 4:t.label++;return{value:i[1],done:false};case 5:t.label++;a=i[1];i=[0];continue;case 7:i=t.ops.pop();t.trys.pop();continue;default:if(!(n=t.trys,n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){t=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){t.label=i[1];break}if(i[0]===6&&t.label<n[1]){t.label=n[1];n=i;break}if(n&&t.label<n[2]){t.label=n[2];t.ops.push(i);break}if(n[2])t.ops.pop();t.trys.pop();continue}i=e.call(o,t)}catch(u){i=[6,u];a=0}finally{r=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};import{r as registerInstance,h,c as Host,g as getElement}from"./index-dc6f4989.js";import{l}from"./index-aa88697c.js";import{d}from"./index-ffdafbbd.js";var ku4CarouselCss="@-webkit-keyframes ku4-carousel-enter-left{0%{top:0;left:-100%;opacity:0}100%{top:0;left:0;opacity:1}}@keyframes ku4-carousel-enter-left{0%{top:0;left:-100%;opacity:0}100%{top:0;left:0;opacity:1}}@-webkit-keyframes ku4-carousel-enter-right{0%{top:0;left:100%;opacity:0}100%{top:0;left:0;opacity:1}}@keyframes ku4-carousel-enter-right{0%{top:0;left:100%;opacity:0}100%{top:0;left:0;opacity:1}}@-webkit-keyframes ku4-carousel-exit-left{0%{top:0;left:0;opacity:1}100%{top:0;left:-100%;opacity:0}}@keyframes ku4-carousel-exit-left{0%{top:0;left:0;opacity:1}100%{top:0;left:-100%;opacity:0}}@-webkit-keyframes ku4-carousel-exit-right{0%{top:0;left:0;opacity:1}100%{top:0;left:100%;opacity:0}}@keyframes ku4-carousel-exit-right{0%{top:0;left:0;opacity:1}100%{top:0;left:100%;opacity:0}}:host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;overflow:hidden;background-color:var(--ku4-carousel-background-color, #fff)}.slide-container{position:relative;width:100%;height:100%;overflow:hidden}.controls .next,.controls .prev{position:absolute;top:var(--ku4-carousel-controls-top, 0);border:var(--ku4-carousel-controls-border, none);background-color:var(--ku4-carousel-controls-background-color, #fff);font-family:var(--ku4-carousel-controls-font-family, Helvetica, Arial, sans-serif);font-weight:var(--ku4-carousel-controls-font-weight, 400);font-size:var(--ku4-carousel-controls-font-size, 8px);line-height:var(--ku4-carousel-controls-line-height, 12px);opacity:var(--ku4-carousel-controls-opacity, 0.2);z-index:var(--ku4-carousel-controls-z-index, 2)}.controls .next:focus,.controls .prev:focus{background-color:var(--ku4-carousel-controls-focus-background-color, transparent);outline:var(--ku4-carousel-controls-focus-outline, none);opacity:var(--ku4-carousel-controls-focus-opacity, 0.2)}.controls .next:hover,.controls .prev:hover{background-color:var(--ku4-carousel-controls-hover-background-color, transparent);opacity:var(--ku4-carousel-controls-hover-opacity, 1)}.controls .next{right:0;width:var(--ku4-carousel-controls-next-width, 40px);height:var(--ku4-carousel-controls-next-height, 100%);background-image:var(--ku4-carousel-controls-next-background-image);background-repeat:var(--ku4-carousel-controls-next-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-next-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-next-background-position-y, 50%);background-size:var(--ku4-carousel-controls-next-background-size, 100% 100%)}.controls .next:focus{background-image:var(--ku4-carousel-controls-next-focus-background-image);background-repeat:var(--ku4-carousel-controls-next-focus-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-next-focus-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-next-focus-background-position-y, 50%);background-size:var(--ku4-carousel-controls-next-focus-background-size, 100% 100%)}.controls .next:hover{background-image:var(--ku4-carousel-controls-next-hover-background-image);background-repeat:var(--ku4-carousel-controls-next-hover-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-next-hover-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-next-hover-background-position-y, 50%);background-size:var(--ku4-carousel-controls-next-hover-background-size, 100% 100%)}.controls .prev{left:0;width:var(--ku4-carousel-controls-next-width, 40px);height:var(--ku4-carousel-controls-next-height, 100%);background-image:var(--ku4-carousel-controls-previous-background-image);background-repeat:var(--ku4-carousel-controls-previous-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-previous-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-previous-background-position-y, 50%);background-size:var(--ku4-carousel-controls-previous-background-size, 100% 100%)}.controls .prev:focus{background-image:var(--ku4-carousel-controls-previous-focus-background-image);background-repeat:var(--ku4-carousel-controls-previous-focus-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-previous-focus-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-previous-focus-background-position-y, 50%);background-size:var(--ku4-carousel-controls-previous-focus-background-size, 100% 100%)}.controls .prev:hover{background-image:var(--ku4-carousel-controls-previous-hover-background-image);background-repeat:var(--ku4-carousel-controls-previous-hover-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-previous-hover-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-previous-hover-background-position-y, 50%);background-size:var(--ku4-carousel-controls-previous-hover-background-size, 100% 100%)}.pages{position:absolute;top:var(--ku4-carousel-pages-top, auto);bottom:var(--ku4-carousel-pages-bottom, 0);width:var(--ku4-carousel-pages-width, auto);height:var(--ku4-carousel-pages-height, 20px);background-color:var(--ku4-carousel-pages-background-color, transparent);opacity:var(--ku4-carousel-pages-opacity, 0.5);text-align:center;z-index:3}.pages-text{display:inline-block;padding:var(--ku4-carousel-pages-text-padding, 4px);font-family:var(--ku4-carousel-pages-text-font-family, Helvetica, Arial, sans-serif);font-weight:var(--ku4-carousel-pages-text-font-weight, 600);font-size:var(--ku4-carousel-pages-text-font-size, 14px);line-height:var(--ku4-carousel-pages-text-line-height, 16px);color:var(--ku4-carousel-pages-text-color, #aaa)}::slotted(*){position:absolute;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;top:0;left:-100%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(.inactive){position:absolute;height:100%}::slotted(.inactive.prev){-webkit-animation-name:var(--ku4-carousel-animation-inactive-previous-name, ku4-carousel-exit-right);animation-name:var(--ku4-carousel-animation-inactive-previous-name, ku4-carousel-exit-right);-webkit-animation-duration:var(--ku4-carousel-animation-duration, 0.4);animation-duration:var(--ku4-carousel-animation-duration, 0.4);-webkit-animation-timing-function:var(--ku4-carousel-animation-timing-function);animation-timing-function:var(--ku4-carousel-animation-timing-function)}::slotted(.inactive.next){-webkit-animation-name:var(--ku4-carousel-animation-inactive-next-name, ku4-carousel-exit-left);animation-name:var(--ku4-carousel-animation-inactive-next-name, ku4-carousel-exit-left);-webkit-animation-duration:var(--ku4-carousel-animation-duration, 0.4);animation-duration:var(--ku4-carousel-animation-duration, 0.4);-webkit-animation-timing-function:var(--ku4-carousel-animation-timing-function);animation-timing-function:var(--ku4-carousel-animation-timing-function)}::slotted(.active){position:relative;top:0;left:0;width:auto;height:100%;z-index:1}::slotted(.active.prev){-webkit-animation-name:var(--ku4-carousel-animation-active-previous-name, ku4-carousel-enter-left);animation-name:var(--ku4-carousel-animation-active-previous-name, ku4-carousel-enter-left);-webkit-animation-duration:var(--ku4-carousel-animation-duration, 0.4);animation-duration:var(--ku4-carousel-animation-duration, 0.4);-webkit-animation-timing-function:var(--ku4-carousel-animation-timing-function, ease);animation-timing-function:var(--ku4-carousel-animation-timing-function, ease)}::slotted(.active.next){-webkit-animation-name:var(--ku4-carousel-animation-active-next-name, ku4-carousel-enter-right);animation-name:var(--ku4-carousel-animation-active-next-name, ku4-carousel-enter-right);-webkit-animation-duration:var(--ku4-carousel-animation-duration, 0.4);animation-duration:var(--ku4-carousel-animation-duration, 0.4);-webkit-animation-timing-function:var(--ku4-carousel-animation-timing-function, ease);animation-timing-function:var(--ku4-carousel-animation-timing-function, ease)}@media (hover: hover){.controls:hover{background-color:var(--ku4-carousel-controls-focus-background-color, #fff)}}";var Ku4Carousel=function(){function o(o){registerInstance(this,o);this.swipeTolerance=44}o.prototype.next=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(o){return[2,this.display("next")]}))}))};o.prototype.previous=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(o){return[2,this.display("prev")]}))}))};Object.defineProperty(o.prototype,"currentSlideNumber",{get:function(){var o=this.rolodex;return o&&(o.isEmpty?0:o.index+1)},enumerable:false,configurable:true});o.prototype.display=function(o){var e=this.slideState,t=e.previous,r=e.current;var a=this.rolodex[o];if(t){t.deactivate()}r.slideOut(o);a.slideIn(o);this.slideState={previous:r,current:a};return this};o.prototype.componentWillLoad=function(){var o=this;this.swipe=new d(this.host,this.swipeTolerance).onLeft((function(){return o.next()})).onRight((function(){return o.previous()}));var e;try{e=this.host.querySelectorAll(":scope > ku4-carousel-slide")}catch(t){e=[].slice.call(this.host.querySelectorAll("ku4-carousel-slide")).reduce((function(e,t){if(t.parentNode===o.host){e.push(t)}return e}),[])}this.rolodex=new l(e);this.rolodex.current&&this.rolodex.current.activate&&this.rolodex.current.activate();this.slideState={current:this.rolodex.current}};o.prototype.disconnectedCallback=function(){if(this.swipe){this.swipe.destroy()}};o.prototype.render=function(){var o=this;var e=this.currentSlideNumber,t=e===void 0?0:e;var r=this.rolodex&&this.rolodex.length>1;return h(Host,{"aria-roledescription":"carousel","current-slide":t},r&&h("section",{class:"controls"},h("button",{type:"button",class:"prev",onClick:function(){return o.previous()},"aria-label":"previous slide"}),h("button",{type:"button",class:"next",onClick:function(){return o.next()},"aria-label":"next slide"})),h("section",{class:"slide-container","aria-live":"polite"},h("slot",null)),r&&h("section",{class:"pages"},h("span",{class:"pages-text"},t+" of "+this.rolodex.length)))};Object.defineProperty(o.prototype,"host",{get:function(){return getElement(this)},enumerable:false,configurable:true});return o}();Ku4Carousel.style=ku4CarouselCss;export{Ku4Carousel as ku4_carousel};