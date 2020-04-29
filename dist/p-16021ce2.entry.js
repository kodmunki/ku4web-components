import{r as a,c as t,h as n,H as o,g as i}from"./p-1589ba6b.js";import{t as r}from"./p-545305c8.js";import{r as e,u as m}from"./p-21fc34da.js";const s=class{constructor(n){a(this,n),this.visible=!1,this.displayed=t(this,"ku4-modal-displayed",7),this.dismissed=t(this,"ku4-modal-dismissed",7)}handleVisibility(a){a?(e.preventScroll(),r.exists(this.trap)&&this.trap.activate()):(e.resumeScroll(),r.exists(this.trap)&&this.trap.deactivate())}handleKeyUp(a){this.visible&&m.esc.didFire(a)&&this.dismiss()}async display(){this.visible=!0,this.displayed.emit(this)}async dismiss(){this.visible=!1,this.dismissed.emit(this)}componentDidLoad(){try{this.trap=this.host.querySelector("ku4-focus-trap")||document.querySelector(this.focusTrap)}catch(a){throw new Error("Cannot connect focus-trap: "+a.messsage)}}render(){return n(o,{"aria-modal":"true"},n("section",{class:"content"},n("slot",null)),n("section",{class:"overlay",onClick:()=>this.dismiss(),"aria-hidden":"true"}))}get host(){return i(this)}static get watchers(){return{visible:["handleVisibility"]}}};s.style="@-webkit-keyframes ku4-modal-content-enter{0%{-webkit-transform:var(--ku4-modal-content-animation-start-transform, scale(0.5));transform:var(--ku4-modal-content-animation-start-transform, scale(0.5));opacity:var(--ku4-modal-content-animation-start-opacity, 0)}50%{-webkit-transform:var(--ku4-modal-content-animation-mid-transform, scale(1.2));transform:var(--ku4-modal-content-animation-mid-transform, scale(1.2));opacity:var(--ku4-modal-content-animation-mid-opacity, 0.8)}100%{-webkit-transform:var(--ku4-modal-content-animation-end-transform, scale(1));transform:var(--ku4-modal-content-animation-end-transform, scale(1));opacity:var(--ku4-modal-content-animation-end-opacity, 1)}}@keyframes ku4-modal-content-enter{0%{-webkit-transform:var(--ku4-modal-content-animation-start-transform, scale(0.5));transform:var(--ku4-modal-content-animation-start-transform, scale(0.5));opacity:var(--ku4-modal-content-animation-start-opacity, 0)}50%{-webkit-transform:var(--ku4-modal-content-animation-mid-transform, scale(1.2));transform:var(--ku4-modal-content-animation-mid-transform, scale(1.2));opacity:var(--ku4-modal-content-animation-mid-opacity, 0.8)}100%{-webkit-transform:var(--ku4-modal-content-animation-end-transform, scale(1));transform:var(--ku4-modal-content-animation-end-transform, scale(1));opacity:var(--ku4-modal-content-animation-end-opacity, 1)}}@-webkit-keyframes ku4-modal-overlay-enter{0%{-webkit-transform:var(--ku4-modal-overlay-animation-start-transform, none);transform:var(--ku4-modal-overlay-animation-start-transform, none);opacity:var(--ku4-modal-overlay-animation-start-opacity, 0)}50%{-webkit-transform:var(--ku4-modal-overlay-animation-mid-transform, none);transform:var(--ku4-modal-overlay-animation-mid-transform, none);opacity:var(--ku4-modal-overlay-animation-mid-opacity, 0.35)}100%{-webkit-transform:var(--ku4-modal-overlay-animation-end-transform, none);transform:var(--ku4-modal-overlay-animation-end-transform, none);opacity:var(--ku4-modal-overlay-animation-end-opacity, 0.4)}}@keyframes ku4-modal-overlay-enter{0%{-webkit-transform:var(--ku4-modal-overlay-animation-start-transform, none);transform:var(--ku4-modal-overlay-animation-start-transform, none);opacity:var(--ku4-modal-overlay-animation-start-opacity, 0)}50%{-webkit-transform:var(--ku4-modal-overlay-animation-mid-transform, none);transform:var(--ku4-modal-overlay-animation-mid-transform, none);opacity:var(--ku4-modal-overlay-animation-mid-opacity, 0.35)}100%{-webkit-transform:var(--ku4-modal-overlay-animation-end-transform, none);transform:var(--ku4-modal-overlay-animation-end-transform, none);opacity:var(--ku4-modal-overlay-animation-end-opacity, 0.4)}}:host{position:fixed;display:none;top:0;left:0;width:100vw;height:100vh;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background:transparent;overflow:auto}.content{position:relative;top:0;left:0}.overlay{position:fixed;display:-ms-flexbox;display:flex;top:0;left:0;width:100%;height:100%;opacity:0;background:var(--ku4-modal-overlay-background, #000)}:host([visible]){display:-ms-flexbox;display:flex;z-index:var(--ku4-modal-z-index, 5)}:host([visible]) .content{-webkit-animation-name:ku4-modal-content-enter;animation-name:ku4-modal-content-enter;-webkit-animation-duration:var(--ku4-modal-content-animation-duration, 0.4s);animation-duration:var(--ku4-modal-content-animation-duration, 0.4s);-webkit-animation-timing-function:var(--ku4-modal-content-animation-timing-function, ease);animation-timing-function:var(--ku4-modal-content-animation-timing-function, ease);z-index:calc(var(--ku4-modal-z-index, 5) + 1)}:host([visible]) .overlay{-webkit-animation-name:ku4-modal-overlay-enter;animation-name:ku4-modal-overlay-enter;-webkit-animation-duration:var(--ku4-modal-overlay-animation-duration, 0.4s);animation-duration:var(--ku4-modal-overlay-animation-duration, 0.4s);-webkit-animation-timing-function:var(--ku4-modal-overlay-animation-timing-function, ease);animation-timing-function:var(--ku4-modal-overlay-animation-timing-function, ease);opacity:var(--ku4-modal-overlay-opacity, 0.4);z-index:calc(var(--ku4-modal-z-index, 5) - 1)}";export{s as ku4_modal}