import{r as t,h as i,H as s}from"./p-75f4c159.js";const e=class{constructor(i){t(this,i),this.size="20%"}async open(){this.visible=!0}async close(){this.visible=!1}async toggle(){this.visible=!this.visible}get positionClass(){const{bottom:t,top:i,right:s}=this;switch(!0){case t:return"bottom";case i:return"top";case s:return"right";default:return"left"}}get sizeValue(){const{bottom:t,top:i,right:s,size:e}=this;switch(!0){case t:case i:return{"max-height":e};case s:default:return{"max-width":e}}}render(){const{positionClass:t,sizeValue:e,visible:h}=this;return i(s,{class:`${t} ${h?"visible":""}`,style:e,"aria-hidden":h?"false":"true"},i("slot",null))}};e.style=":host{position:fixed;overflow:hidden;z-index:var(--ku4-drawer-z-index, 1)}:host(.bottom){left:0;bottom:0;width:100%;height:0;-webkit-transition:height 0.4s ease;transition:height 0.4s ease}:host(.bottom.visible){bottom:0;width:100%;height:100%;-webkit-transition:height 0.4s ease;transition:height 0.4s ease}:host(.left){top:0;left:0;width:0;height:100%;-webkit-transition:width 0.4s ease;transition:width 0.4s ease}:host(.left.visible){left:0;width:100%;height:100%;-webkit-transition:width 0.4s ease;transition:width 0.4s ease}:host(.right){top:0;right:0;width:0;height:100%;-webkit-transition:width 0.4s ease;transition:width 0.4s ease}:host(.right.visible){right:0;width:100%;height:100%;-webkit-transition:width 0.4s ease;transition:width 0.4s ease}:host(.top){top:0;left:0;width:100%;height:0;-webkit-transition:height 0.4s ease;transition:height 0.4s ease}:host(.top.visible){top:0;width:100%;height:100%;-webkit-transition:height 0.4s ease;transition:height 0.4s ease}";export{e as ku4_drawer}