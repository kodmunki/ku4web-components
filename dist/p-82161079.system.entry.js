System.register(["./p-99149b5d.system.js"],(function(t){"use strict";var i,e,s;return{setters:[function(t){i=t.r;e=t.h;s=t.H}],execute:function(){const h=":host{position:fixed;overflow:hidden;z-index:var(--ku4-drawer-z-index, 1)}:host(.bottom){left:0;bottom:0;width:100%;height:0;-webkit-transition:height 0.4s ease;transition:height 0.4s ease}:host(.bottom.visible){bottom:0;width:100%;height:100%;-webkit-transition:height 0.4s ease;transition:height 0.4s ease}:host(.left){top:0;left:0;width:0;height:100%;-webkit-transition:width 0.4s ease;transition:width 0.4s ease}:host(.left.visible){left:0;width:100%;height:100%;-webkit-transition:width 0.4s ease;transition:width 0.4s ease}:host(.right){top:0;right:0;width:0;height:100%;-webkit-transition:width 0.4s ease;transition:width 0.4s ease}:host(.right.visible){right:0;width:100%;height:100%;-webkit-transition:width 0.4s ease;transition:width 0.4s ease}:host(.top){top:0;left:0;width:100%;height:0;-webkit-transition:height 0.4s ease;transition:height 0.4s ease}:host(.top.visible){top:0;width:100%;height:100%;-webkit-transition:height 0.4s ease;transition:height 0.4s ease}";const o=t("ku4_drawer",class{constructor(t){i(this,t);this.size="20%"}async open(){this.visible=true}async close(){this.visible=false}async toggle(){this.visible=!this.visible}get positionClass(){const{bottom:t,top:i,right:e}=this;switch(true){case t:return"bottom";case i:return"top";case e:return"right";default:return"left"}}get sizeValue(){const{bottom:t,top:i,right:e,size:s}=this;switch(true){case t:return{"max-height":s};case i:return{"max-height":s};case e:return{"max-width":s};default:return{"max-width":s}}}render(){const{positionClass:t,sizeValue:i,visible:h}=this;return e(s,{class:`${t} ${h?"visible":""}`,style:i,"aria-hidden":h?"false":"true"},e("slot",null))}});o.style=h}}}));