import{r as t,h as i,H as s,g as n}from"./p-558f5446.js";import{u as e}from"./p-8091c9a5.js";import"./p-54fb5b7d.js";const a=class{constructor(i){t(this,i),this.selected=!1,this.maxHeight=this.selected?"none":"0px",this.tab=void 0}handleTransitionEnd(){this.maxHeight=this.selected?"none":"0px"}async select(){this.selected||(this.selected=!0,this.hasTransition?this.maxHeight=`${this.host.scrollHeight}px`:this.handleTransitionEnd())}async deselect(){this.selected&&(this.selected=!1,this.host.style.maxHeight=`${this.host.scrollHeight}px`,this.hasTransition?this.maxHeight="0px":this.handleTransitionEnd())}async connect(t){t.$assignPanel(this),this.tab=t}get hasTransition(){const t=window.getComputedStyle(this.host).getPropertyValue("transition");return!/none/.test(t)}render(){const{selected:t,tab:n,maxHeight:a}=this;return i(s,{role:"tabpanel",id:this.host.id||e(),"aria-hidden":t?"false":"true","aria-labelledby":n&&n.id,tabIndex:t?0:-1,style:{maxHeight:a}},i("slot",null))}get host(){return n(this)}};a.style=":host{-webkit-backface-visibility:hidden;display:block;width:100%;height:auto;max-height:0;-webkit-transition:max-height 0.4s, padding 0.6s;transition:max-height 0.4s, padding 0.6s;overflow:auto}@media only screen and (min-width: 768px){:host{display:none;border-top:1px solid #ccc;border-bottom:1px solid #ccc;max-height:initial !important;-webkit-transition:none;transition:none;-ms-flex-order:2;order:2}:host([selected]){display:block;max-height:initial !important;-webkit-transition:none;transition:none}}";export{a as ku4_tab_panel}