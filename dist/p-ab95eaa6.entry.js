import{r as o,c as t,h as a,H as r,g as e}from"./p-c4cf99d8.js";import{L as i,c as n}from"./p-c1068ffa.js";import{S as s}from"./p-08ec498e.js";let u=class{constructor(a){o(this,a),this.didSlide=t(this,"slide",7),this.swipeTolerance=44,this.auto=!1,this.noSwipe=!1,this.delay=8e3,this.interval=new i(this.delay).onInterval((()=>{this.host.isConnected?this.display("next"):this.disconnectedCallback()})),this.handleMouse=this.handleMouse.bind(this)}async next(){return this.hasSlides?(await this.pause(),this.display("next")):this}async previous(){return this.hasSlides?(await this.pause(),this.display("prev")):this}async slideTo(o){await this.pause(),o===this.currentSlideNumber||o<1||this.rolodex.length<o||this.display(o-this.currentSlideNumber<0?"prev":"next",this.rolodex.current)}async pause(){this.interval.clear()}async play(){const{auto:o,interval:t}=this;o&&t.start()}get hasSlides(){return this.rolodex&&this.rolodex.length>1}get currentSlideNumber(){const{rolodex:o}=this;return o&&(o.isEmpty?0:o.index+1)}display(o,t=null){const{previous:a,current:r}=this.slideState,e=t||this.rolodex[o];return a&&a.deactivate(),r.slideOut(o),e.slideIn(o),this.slideState={previous:r,current:e},this.didSlide.emit(this.currentSlideNumber),this}handleMouse(o){this.host.contains(o.relatedTarget)||this.play()}componentWillLoad(){let o;this.noSwipe||(this.swipe=new s(this.host,this.swipeTolerance).onLeft((()=>this.next())).onRight((()=>this.previous())));try{o=this.host.querySelectorAll(":scope > ku4-carousel-slide")}catch(t){o=[].slice.call(this.host.querySelectorAll("ku4-carousel-slide")).reduce(((o,t)=>(t.parentNode===this.host&&o.push(t),o)),[])}this.rolodex=new n(o),this.rolodex.current&&this.rolodex.current.activate&&this.rolodex.current.activate(),this.slideState={current:this.rolodex.current},this.auto&&(this.host.addEventListener("mouseout",this.handleMouse),this.play())}connectedCallback(){this.swipe&&this.swipe.destroy(),this.host.removeEventListener("mouseout",this.handleMouse),this.interval.clear()}disconnectedCallback(){this.swipe&&this.swipe.destroy(),this.host.removeEventListener("mouseout",this.handleMouse),this.interval.clear()}render(){const{hasSlides:o,currentSlideNumber:t=1}=this;return a(r,{"aria-roledescription":"carousel",current:t},o&&a("section",{class:"controls"},a("button",{type:"button",class:"prev",onClick:()=>this.previous(),"aria-label":"previous slide"}),a("button",{type:"button",class:"next",onClick:()=>this.next(),"aria-label":"next slide"})),a("section",{class:"slide-container","aria-live":"polite"},a("slot",null)),o&&a("section",{class:"pages"},a("span",{class:"pages-text"},`${t} of ${this.rolodex.length}`)))}get host(){return e(this)}};u.style="@-webkit-keyframes ku4-carousel-enter-left{0%{top:0;-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);opacity:0}100%{top:0;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1}}@keyframes ku4-carousel-enter-left{0%{top:0;-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);opacity:0}100%{top:0;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1}}@-webkit-keyframes ku4-carousel-enter-right{0%{top:0;-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0);opacity:0}100%{top:0;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1}}@keyframes ku4-carousel-enter-right{0%{top:0;-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0);opacity:0}100%{top:0;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1}}@-webkit-keyframes ku4-carousel-exit-left{0%{top:0;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1}100%{top:0;-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);opacity:0}}@keyframes ku4-carousel-exit-left{0%{top:0;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1}100%{top:0;-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);opacity:0}}@-webkit-keyframes ku4-carousel-exit-right{0%{top:0;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1}100%{top:0;-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0);opacity:0}}@keyframes ku4-carousel-exit-right{0%{top:0;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1}100%{top:0;-webkit-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0);opacity:0}}:host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;overflow:hidden;background-color:var(--ku4-carousel-background-color, #fff)}.slide-container{position:relative;width:100%;height:100%;overflow:hidden}.controls .next,.controls .prev{position:absolute;display:var(--ku4-carousel-controls-display, block);top:var(--ku4-carousel-controls-top, 0);border:var(--ku4-carousel-controls-border, none);background-color:var(--ku4-carousel-controls-background-color, #fff);font-family:var(--ku4-carousel-controls-font-family, Helvetica, Arial, sans-serif);font-weight:var(--ku4-carousel-controls-font-weight, 400);font-size:var(--ku4-carousel-controls-font-size, 8px);line-height:var(--ku4-carousel-controls-line-height, 12px);opacity:var(--ku4-carousel-controls-opacity, 0.2);z-index:var(--ku4-carousel-controls-z-index, 2)}.controls .next:focus,.controls .prev:focus{background-color:var(--ku4-carousel-controls-focus-background-color, transparent);outline:var(--ku4-carousel-controls-focus-outline, none);opacity:var(--ku4-carousel-controls-focus-opacity, 0.2)}.controls .next:hover,.controls .prev:hover{background-color:var(--ku4-carousel-controls-hover-background-color, transparent);opacity:var(--ku4-carousel-controls-hover-opacity, 1)}.controls .next{right:0;width:var(--ku4-carousel-controls-next-width, 40px);height:var(--ku4-carousel-controls-next-height, 100%);background-image:var(--ku4-carousel-controls-next-background-image);background-repeat:var(--ku4-carousel-controls-next-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-next-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-next-background-position-y, 50%);background-size:var(--ku4-carousel-controls-next-background-size, 100% 100%)}.controls .next:focus{background-image:var(--ku4-carousel-controls-next-focus-background-image);background-repeat:var(--ku4-carousel-controls-next-focus-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-next-focus-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-next-focus-background-position-y, 50%);background-size:var(--ku4-carousel-controls-next-focus-background-size, 100% 100%)}.controls .next:hover{background-image:var(--ku4-carousel-controls-next-hover-background-image);background-repeat:var(--ku4-carousel-controls-next-hover-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-next-hover-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-next-hover-background-position-y, 50%);background-size:var(--ku4-carousel-controls-next-hover-background-size, 100% 100%)}.controls .prev{left:0;width:var(--ku4-carousel-controls-next-width, 40px);height:var(--ku4-carousel-controls-next-height, 100%);background-image:var(--ku4-carousel-controls-previous-background-image);background-repeat:var(--ku4-carousel-controls-previous-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-previous-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-previous-background-position-y, 50%);background-size:var(--ku4-carousel-controls-previous-background-size, 100% 100%)}.controls .prev:focus{background-image:var(--ku4-carousel-controls-previous-focus-background-image);background-repeat:var(--ku4-carousel-controls-previous-focus-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-previous-focus-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-previous-focus-background-position-y, 50%);background-size:var(--ku4-carousel-controls-previous-focus-background-size, 100% 100%)}.controls .prev:hover{background-image:var(--ku4-carousel-controls-previous-hover-background-image);background-repeat:var(--ku4-carousel-controls-previous-hover-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-previous-hover-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-previous-hover-background-position-y, 50%);background-size:var(--ku4-carousel-controls-previous-hover-background-size, 100% 100%)}.pages{position:absolute;display:var(--ku4-carousel-pages-display, block);top:var(--ku4-carousel-pages-top, auto);bottom:var(--ku4-carousel-pages-bottom, 4px);width:var(--ku4-carousel-pages-width, auto);height:var(--ku4-carousel-pages-height, 20px);background-color:var(--ku4-carousel-pages-background-color, transparent);opacity:var(--ku4-carousel-pages-opacity, 0.5);text-align:center;z-index:3}.pages-text{display:inline-block;padding:var(--ku4-carousel-pages-text-padding, 4px);font-family:var(--ku4-carousel-pages-text-font-family, Helvetica, Arial, sans-serif);font-weight:var(--ku4-carousel-pages-text-font-weight, 600);font-size:var(--ku4-carousel-pages-text-font-size, 14px);line-height:var(--ku4-carousel-pages-text-line-height, 16px);color:var(--ku4-carousel-pages-text-color, #aaa)}::slotted(*){position:absolute;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;top:0;left:-100%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(.inactive){position:absolute;height:100%;left:0}::slotted(.inactive.prev){-webkit-animation-name:var(--ku4-carousel-animation-inactive-previous-name, ku4-carousel-exit-right);animation-name:var(--ku4-carousel-animation-inactive-previous-name, ku4-carousel-exit-right);-webkit-animation-duration:var(--ku4-carousel-animation-duration, 0.4s);animation-duration:var(--ku4-carousel-animation-duration, 0.4s);-webkit-animation-timing-function:var(--ku4-carousel-animation-timing-function);animation-timing-function:var(--ku4-carousel-animation-timing-function);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}::slotted(.inactive.next){-webkit-animation-name:var(--ku4-carousel-animation-inactive-next-name, ku4-carousel-exit-left);animation-name:var(--ku4-carousel-animation-inactive-next-name, ku4-carousel-exit-left);-webkit-animation-duration:var(--ku4-carousel-animation-duration, 0.4s);animation-duration:var(--ku4-carousel-animation-duration, 0.4s);-webkit-animation-timing-function:var(--ku4-carousel-animation-timing-function);animation-timing-function:var(--ku4-carousel-animation-timing-function);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}::slotted(.active){position:relative;top:0;left:0;width:auto;height:100%;z-index:1}::slotted(.active.prev){-webkit-animation-name:var(--ku4-carousel-animation-active-previous-name, ku4-carousel-enter-left);animation-name:var(--ku4-carousel-animation-active-previous-name, ku4-carousel-enter-left);-webkit-animation-duration:var(--ku4-carousel-animation-duration, 0.4s);animation-duration:var(--ku4-carousel-animation-duration, 0.4s);-webkit-animation-timing-function:var(--ku4-carousel-animation-timing-function, ease);animation-timing-function:var(--ku4-carousel-animation-timing-function, ease);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}::slotted(.active.next){-webkit-animation-name:var(--ku4-carousel-animation-active-next-name, ku4-carousel-enter-right);animation-name:var(--ku4-carousel-animation-active-next-name, ku4-carousel-enter-right);-webkit-animation-duration:var(--ku4-carousel-animation-duration, 0.4s);animation-duration:var(--ku4-carousel-animation-duration, 0.4s);-webkit-animation-timing-function:var(--ku4-carousel-animation-timing-function, ease);animation-timing-function:var(--ku4-carousel-animation-timing-function, ease);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (hover: hover){.controls:hover{background-color:var(--ku4-carousel-controls-focus-background-color, #fff)}}";export{u as ku4_carousel}