import{r as t,c as o,h as a,H as e}from"./p-ab3b0ac2.js";import{$ as r}from"./p-408b44e9.js";import{D as c}from"./p-2c25e51e.js";const b=class{constructor(a){t(this,a),this.selected=!1,this.tabId=r(),this.tabClicked=o(this,"ku4-tab-click",7),this.tabKeyUp=o(this,"ku4-tab-keyup",7)}async select(){this.selected=!0,this.panel.select(),this.buttonRef.focus()}async deselect(){this.selected=!1,this.panel.deselect()}async connect(t){t.connect(this)}$assignPanel(t){this.panel=t}render(){const{tabId:t,selected:o,name:r,panel:c}=this;return a(e,{role:"tab"},a("button",{ref:t=>{this.buttonRef=t},id:t,type:"button",class:`tab ${o?"selected":""}`,onClick:t=>this.tabClicked.emit(t),onKeyUp:t=>this.tabKeyUp.emit(t),tabIndex:o?0:-1,"aria-controls":c&&c.panelId,"aria-selected":o?"true":"false"},a("span",{class:"name"},r||a("slot",null))))}};(function(t,o,a,e){var r,c=arguments.length,b=c<3?o:null===e?e=Object.getOwnPropertyDescriptor(o,a):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)b=Reflect.decorate(t,o,a,e);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(b=(c<3?r(b):c>3?r(o,a,b):r(o,a))||b);c>3&&b&&Object.defineProperty(o,a,b)})([c("Set as tag content")],b.prototype,"name",void 0),b.style="button{margin:0;padding:0;border:none;background:none;-webkit-appearance:none}:host{position:relative;display:block;width:100%}.tab{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%;background-color:var(--ku4-tab-background-color);color:var(--ku4-tab-text-color);text-align:var(--ku4-tab-text-align)}.tab .name{padding:var(--ku4-tab-padding)}.tab:focus{background-color:var(--ku4-tab-focus-background-color);color:var(--ku4-tab-focus-text-color);z-index:var(--ku4-tab-focus-z-index)}.tab:hover{background-color:var(--ku4-tab-hover-background-color);color:var(--ku4-tab-hover-text-color)}.tab:active{background-color:var(--ku4-tab-active-background-color);color:var(--ku4-tab-active-text-color)}.tab.selected{padding-bottom:var(--ku4-tab-selected-padding-bottom);border-top:var(--ku4-tab-border);border-bottom:var(--ku4-tab-border);background-color:var(--ku4-tab-selected-background-color);color:var(--ku4-tab-selected-text-color)}@media only screen and (min-width: 768px){:host{width:auto}:host(:first-of-type) .tab{border-left:var(--ku4-tab-border)}.tab{position:relative;border:var(--ku4-tab-border);border-radius:var(--ku4-tab-border-radius) var(--ku4-tab-border-radius) 0 0;border-left:none}.tab.selected{border-bottom:none}}";export{b as ku4_tab}