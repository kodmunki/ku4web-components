import{r as t,h as o,H as e}from"./p-670d415c.js";let s=class{constructor(o){t(this,o),this.size="20%"}async toggle(){this.open=!this.open}get sizeValue(){const{bottom:t,top:o,right:e,size:s}=this;switch(!0){case t:case o:return{"max-height":s};case e:default:return{"max-width":s}}}render(){const{sizeValue:t,open:s}=this;return o(e,{style:t,"aria-hidden":s?"false":"true"},o("slot",null))}};s.style=":host{position:fixed;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;z-index:1}:host([top]),:host([bottom]){width:100%;height:0;-webkit-transition:height 0.4s;transition:height 0.4s}:host([left]),:host([right]){width:0;height:100%;-webkit-transition:width 0.4s;transition:width 0.4s}:host([top][open]),:host([bottom][open]){height:100%}:host([left][open]),:host([right][open]){width:100%}:host([top][open=false]),:host([bottom][open=false]){height:0}:host([left][open=false]),:host([right][open=false]){width:0}:host([top]),:host([left]){top:0;left:0}:host([bottom]){left:0;bottom:0}:host([right]){right:0;bottom:0}";export{s as ku4_drawer}