import{r as o,h as a,H as t,g as e}from"./p-a37d2788.js";import{o as r}from"./p-545305c8.js";import{h as n}from"./p-21fc34da.js";const i=class{constructor(a){o(this,a)}async next(){return this.display("next")}async previous(){return this.display("prev")}get currentSlideNumber(){return this.rolodex&&this.rolodex.index+1}display(o){const{previous:a,current:t}=this.slideState,e=this.rolodex[o];return a&&a.deactivate(),t.slideOut(o),e.slideIn(o),this.slideState={previous:t,current:e},this}componentWillLoad(){let o;this.swipe=new n(this.host,20).onLeft(()=>this.next()).onRight(()=>this.previous());try{o=this.host.querySelectorAll(":scope > ku4-carousel-slide")}catch(a){o=[].slice.call(this.host.querySelectorAll("ku4-carousel-slide")).reduce((o,a)=>(a.parentNode===this.host&&o.push(a),o),[])}this.rolodex=new r(o),this.rolodex.current.activate(),this.slideState={current:this.rolodex.current}}componentDidUnload(){this.swipe&&this.swipe.destroy()}render(){const{currentSlideNumber:o=0}=this,e=this.rolodex&&this.rolodex.length>1;return a(t,{"aria-roledescription":"carousel","current-slide":o},e&&a("section",{class:"controls"},a("button",{type:"button",class:"prev",onClick:()=>this.previous(),"aria-label":"previous slide"}),a("button",{type:"button",class:"next",onClick:()=>this.next(),"aria-label":"next slide"})),a("section",{class:"slide-container","aria-live":"polite"},a("slot",null)),e&&a("section",{class:"pages"},a("span",{class:"pages-text"},`${o} of ${this.rolodex.length}`)))}get host(){return e(this)}};i.style="@-webkit-keyframes ku4-carousel-enter-left{0%{top:0;left:-100%;opacity:0}100%{top:0;left:0;opacity:1}}@keyframes ku4-carousel-enter-left{0%{top:0;left:-100%;opacity:0}100%{top:0;left:0;opacity:1}}@-webkit-keyframes ku4-carousel-enter-right{0%{top:0;left:100%;opacity:0}100%{top:0;left:0;opacity:1}}@keyframes ku4-carousel-enter-right{0%{top:0;left:100%;opacity:0}100%{top:0;left:0;opacity:1}}@-webkit-keyframes ku4-carousel-exit-left{0%{top:0;left:0;opacity:1}100%{top:0;left:-100%;opacity:0}}@keyframes ku4-carousel-exit-left{0%{top:0;left:0;opacity:1}100%{top:0;left:-100%;opacity:0}}@-webkit-keyframes ku4-carousel-exit-right{0%{top:0;left:0;opacity:1}100%{top:0;left:100%;opacity:0}}@keyframes ku4-carousel-exit-right{0%{top:0;left:0;opacity:1}100%{top:0;left:100%;opacity:0}}:host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;overflow:hidden;background-color:var(--ku4-carousel-background-color, #fff)}.slide-container{position:relative;width:100%;height:100%;overflow:hidden}.controls .next,.controls .prev{position:absolute;top:var(--ku4-carousel-controls-top, 0);border:var(--ku4-carousel-controls-border, none);background-color:var(--ku4-carousel-controls-background-color, #fff);font-family:var(--ku4-carousel-controls-font-family, Helvetica, Arial, sans-serif);font-weight:var(--ku4-carousel-controls-font-weight, 400);font-size:var(--ku4-carousel-controls-font-size, 8px);line-height:var(--ku4-carousel-controls-line-height, 12px);opacity:var(--ku4-carousel-controls-opacity, 0.2);z-index:4}.controls .next:focus,.controls .prev:focus{background-color:var(--ku4-carousel-controls-focus-background-color, transparent);outline:var(--ku4-carousel-controls-focus-outline, none);opacity:var(--ku4-carousel-controls-focus-opacity, 0.2)}.controls .next:hover,.controls .prev:hover{background-color:var(--ku4-carousel-controls-hover-background-color, transparent);opacity:var(--ku4-carousel-controls-hover-opacity, 1)}.controls .next{right:0;width:var(--ku4-carousel-controls-next-width, 40px);height:var(--ku4-carousel-controls-next-height, 100%);background-image:var(--ku4-carousel-controls-next-background-image);background-repeat:var(--ku4-carousel-controls-next-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-next-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-next-background-position-y, 50%);background-size:var(--ku4-carousel-controls-next-background-size, 100% 100%)}.controls .next:focus{background-image:var(--ku4-carousel-controls-next-focus-background-image);background-repeat:var(--ku4-carousel-controls-next-focus-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-next-focus-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-next-focus-background-position-y, 50%);background-size:var(--ku4-carousel-controls-next-focus-background-size, 100% 100%)}.controls .next:hover{background-image:var(--ku4-carousel-controls-next-hover-background-image);background-repeat:var(--ku4-carousel-controls-next-hover-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-next-hover-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-next-hover-background-position-y, 50%);background-size:var(--ku4-carousel-controls-next-hover-background-size, 100% 100%)}.controls .prev{left:0;width:var(--ku4-carousel-controls-next-width, 40px);height:var(--ku4-carousel-controls-next-height, 100%);background-image:var(--ku4-carousel-controls-previous-background-image);background-repeat:var(--ku4-carousel-controls-previous-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-previous-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-previous-background-position-y, 50%);background-size:var(--ku4-carousel-controls-previous-background-size, 100% 100%)}.controls .prev:focus{background-image:var(--ku4-carousel-controls-previous-focus-background-image);background-repeat:var(--ku4-carousel-controls-previous-focus-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-previous-focus-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-previous-focus-background-position-y, 50%);background-size:var(--ku4-carousel-controls-previous-focus-background-size, 100% 100%)}.controls .prev:hover{background-image:var(--ku4-carousel-controls-previous-hover-background-image);background-repeat:var(--ku4-carousel-controls-previous-hover-background-repeat, no-repeat);background-position-x:var(--ku4-carousel-controls-previous-hover-background-position-x, 0);background-position-y:var(--ku4-carousel-controls-previous-hover-background-position-y, 50%);background-size:var(--ku4-carousel-controls-previous-hover-background-size, 100% 100%)}.pages{position:absolute;top:var(--ku4-carousel-pages-top, auto);bottom:var(--ku4-carousel-pages-bottom, 0);width:var(--ku4-carousel-pages-width, auto);height:var(--ku4-carousel-pages-height, 20px);background-color:var(--ku4-carousel-pages-background-color, transparent);opacity:var(--ku4-carousel-pages-opacity, 0.5);text-align:center;z-index:3}.pages-text{display:inline-block;padding:var(--ku4-carousel-pages-text-padding, 4px);font-family:var(--ku4-carousel-pages-text-font-family, Helvetica, Arial, sans-serif);font-weight:var(--ku4-carousel-pages-text-font-weight, 600);font-size:var(--ku4-carousel-pages-text-font-size, 14px);line-height:var(--ku4-carousel-pages-text-line-height, 16px);color:var(--ku4-carousel-pages-text-color, #aaa)}::slotted(*){position:absolute;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;top:0;left:-100%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(.inactive){position:absolute;height:100%}::slotted(.inactive.prev){-webkit-animation-name:var(--ku4-carousel-animation-inactive-previous-name, ku4-carousel-exit-right);animation-name:var(--ku4-carousel-animation-inactive-previous-name, ku4-carousel-exit-right);-webkit-animation-duration:var(--ku4-carousel-animation-duration, 0.4);animation-duration:var(--ku4-carousel-animation-duration, 0.4);-webkit-animation-timing-function:var(--ku4-carousel-animation-timing-function);animation-timing-function:var(--ku4-carousel-animation-timing-function)}::slotted(.inactive.next){-webkit-animation-name:var(--ku4-carousel-animation-inactive-next-name, ku4-carousel-exit-left);animation-name:var(--ku4-carousel-animation-inactive-next-name, ku4-carousel-exit-left);-webkit-animation-duration:var(--ku4-carousel-animation-duration, 0.4);animation-duration:var(--ku4-carousel-animation-duration, 0.4);-webkit-animation-timing-function:var(--ku4-carousel-animation-timing-function);animation-timing-function:var(--ku4-carousel-animation-timing-function)}::slotted(.active){position:relative;top:0;left:0;width:auto;height:100%;z-index:1}::slotted(.active.prev){-webkit-animation-name:var(--ku4-carousel-animation-active-previous-name, ku4-carousel-enter-left);animation-name:var(--ku4-carousel-animation-active-previous-name, ku4-carousel-enter-left);-webkit-animation-duration:var(--ku4-carousel-animation-duration, 0.4);animation-duration:var(--ku4-carousel-animation-duration, 0.4);-webkit-animation-timing-function:var(--ku4-carousel-animation-timing-function, ease);animation-timing-function:var(--ku4-carousel-animation-timing-function, ease)}::slotted(.active.next){-webkit-animation-name:var(--ku4-carousel-animation-active-next-name, ku4-carousel-enter-right);animation-name:var(--ku4-carousel-animation-active-next-name, ku4-carousel-enter-right);-webkit-animation-duration:var(--ku4-carousel-animation-duration, 0.4);animation-duration:var(--ku4-carousel-animation-duration, 0.4);-webkit-animation-timing-function:var(--ku4-carousel-animation-timing-function, ease);animation-timing-function:var(--ku4-carousel-animation-timing-function, ease)}@media (hover: hover){.controls:hover{background-color:var(--ku4-carousel-controls-focus-background-color, #fff)}}";export{i as ku4_carousel}