import{r as s,c as t,h as i,H as a,g as o}from"./p-8694d166.js";import{a as r}from"./p-8be88260.js";import{c as e}from"./p-e28903c7.js";const h=class{constructor(i){s(this,i),this.visible=!1,this.displayed=t(this,"ku4-modal-displayed",7),this.dismissed=t(this,"ku4-modal-dismissed",7)}handleVisibility(s){s?(e.preventScroll(),r.exists(this.trap)&&this.trap.activate()):(e.resumeScroll(),r.exists(this.trap)&&this.trap.deactivate())}async display(){this.visible=!0,this.displayed.emit(this)}async dismiss(){this.visible=!1,this.dismissed.emit(this)}componentDidLoad(){try{this.trap=this.host.querySelector("ku4-focus-trap")||document.querySelector(this.focusTrap)}catch(s){throw new Error(`Cannot connect focus-trap: ${s.messsage}`)}}render(){const{visible:s}=this;return i(a,{class:s?"visible":"","aria-modal":"true"},i("section",{class:"overlay",onClick:()=>this.dismiss(),"aria-hidden":"true"}),i("section",{class:"content"},i("slot",null)))}get host(){return o(this)}static get watchers(){return{visible:["handleVisibility"]}}static get style(){return"\@-webkit-keyframes ku4-modal-content-enter{0%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}30%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.8}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}\@keyframes ku4-modal-content-enter{0%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}30%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:.8}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}\@-webkit-keyframes ku4-modal-overlay-enter{0%{opacity:0}to{opacity:.4}}\@keyframes ku4-modal-overlay-enter{0%{opacity:0}to{opacity:.4}}:host{position:fixed;display:none;top:0;left:0;width:100vw;height:100vh;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background:transparent;overflow:auto}.content{position:relative;top:0;left:0}.overlay{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;background-color:var(--ku4-modal-overlay-background-color,#000)}:host(.visible){display:-ms-flexbox;display:flex;z-index:var(--ku4-modal-z-index,5)}:host(.visible) .content{-webkit-animation-name:var(--ku4-modal-content-animation,ku4-modal-content-enter);animation-name:var(--ku4-modal-content-animation,ku4-modal-content-enter);-webkit-animation-duration:var(--ku4-modal-content-animation-duration,.4s);animation-duration:var(--ku4-modal-content-animation-duration,.4s);-webkit-animation-timing-function:var(--ku4-modal-content-animation-timing-function,ease);animation-timing-function:var(--ku4-modal-content-animation-timing-function,ease)}:host(.visible) .overlay{display:-ms-flexbox;display:flex;opacity:.4;-webkit-animation-name:var(--ku4-modal-overlay-animation,ku4-modal-overlay-enter);animation-name:var(--ku4-modal-overlay-animation,ku4-modal-overlay-enter);-webkit-animation-duration:var(--ku4-modal-overlay-animation-duration,.4s);animation-duration:var(--ku4-modal-overlay-animation-duration,.4s);-webkit-animation-timing-function:var(--ku4-modal-overlay-animation-timing-function,ease);animation-timing-function:var(--ku4-modal-overlay-animation-timing-function,ease)}::slotted(*){position:relative}"}};export{h as ku4_modal};