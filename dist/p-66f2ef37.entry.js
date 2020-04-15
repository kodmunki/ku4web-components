import{r as a,c as t,h as i,H as n,g as o}from"./p-e9e46805.js";import{t as e}from"./p-545305c8.js";import{r as s,a as r}from"./p-9462bf86.js";const l=class{constructor(i){a(this,i),this.visible=!1,this.displayed=t(this,"ku4-modal-displayed",7),this.dismissed=t(this,"ku4-modal-dismissed",7)}handleVisibility(a){a?(s.preventScroll(),e.exists(this.trap)&&this.trap.activate()):(s.resumeScroll(),e.exists(this.trap)&&this.trap.deactivate())}handleKeyUp(a){this.visible&&r.esc.didFire(a)&&this.dismiss()}async display(){this.visible=!0,this.displayed.emit(this)}async dismiss(){this.visible=!1,this.dismissed.emit(this)}componentDidLoad(){try{this.trap=this.host.querySelector("ku4-focus-trap")||document.querySelector(this.focusTrap)}catch(a){throw new Error("Cannot connect focus-trap: "+a.messsage)}}render(){const{visible:a}=this;return i(n,{class:a?"visible":"","aria-modal":"true"},i("section",{class:"content"},i("slot",null)),i("section",{class:"overlay",onClick:()=>this.dismiss(),"aria-hidden":"true"}))}get host(){return o(this)}static get watchers(){return{visible:["handleVisibility"]}}};l.style="@-webkit-keyframes ku4-modal-content-enter{0%{-webkit-transform:scale(0.5);transform:scale(0.5);opacity:0}30%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:0.8}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes ku4-modal-content-enter{0%{-webkit-transform:scale(0.5);transform:scale(0.5);opacity:0}30%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:0.8}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes ku4-modal-overlay-enter{0%{opacity:0}100%{opacity:0.4}}@keyframes ku4-modal-overlay-enter{0%{opacity:0}100%{opacity:0.4}}:host{position:fixed;display:none;top:0;left:0;width:100vw;height:100vh;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background:transparent;overflow:auto}.content{position:relative;top:0;left:0}.overlay{position:fixed;display:-ms-flexbox;display:flex;top:0;left:0;width:100%;height:100%;opacity:0;background-color:var(--ku4-modal-overlay-background-color, #000)}:host(.visible){display:-ms-flexbox;display:flex;z-index:var(--ku4-modal-z-index, 5)}:host(.visible) .content{-webkit-animation-name:var(--ku4-modal-content-animation, ku4-modal-content-enter);animation-name:var(--ku4-modal-content-animation, ku4-modal-content-enter);-webkit-animation-duration:var(--ku4-modal-content-animation-duration, 0.4s);animation-duration:var(--ku4-modal-content-animation-duration, 0.4s);-webkit-animation-timing-function:var(--ku4-modal-content-animation-timing-function, ease);animation-timing-function:var(--ku4-modal-content-animation-timing-function, ease);z-index:calc(var(--ku4-modal-z-index, 5) + 1)}:host(.visible) .overlay{opacity:0.4;-webkit-animation-name:var(--ku4-modal-overlay-animation, ku4-modal-overlay-enter);animation-name:var(--ku4-modal-overlay-animation, ku4-modal-overlay-enter);-webkit-animation-duration:var(--ku4-modal-overlay-animation-duration, 0.4s);animation-duration:var(--ku4-modal-overlay-animation-duration, 0.4s);-webkit-animation-timing-function:var(--ku4-modal-overlay-animation-timing-function, ease);animation-timing-function:var(--ku4-modal-overlay-animation-timing-function, ease);z-index:calc(var(--ku4-modal-z-index, 5) - 1)}";export{l as ku4_modal}