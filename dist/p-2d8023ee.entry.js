import{r as t,h as i,H as e,g as s}from"./p-63fb3094.js";import"./p-545305c8.js";import{u as n}from"./p-1540113c.js";const a=class{constructor(i){t(this,i),this.selected=!1}async select(){this.selected=!0}async deselect(){this.selected=!1}async connect(t){t.$assignPanel(this),this.tab=t}render(){const{selected:t,tab:s}=this;return i(e,{role:"tabpanel",id:this.host.id||n(),"aria-hidden":t?"false":"true","aria-labelledby":s&&s.id,tabIndex:0},i("slot",null))}get host(){return s(this)}};a.style=":host{display:block;width:100%;max-height:0;-webkit-transition:max-height 0.3s;transition:max-height 0.3s;overflow:hidden}:host([selected]){max-height:100vh;-webkit-transition:max-height 0.3s;transition:max-height 0.3s}@media only screen and (min-width: 768px){:host{display:none;max-height:initial;-webkit-transition:none;transition:none;-ms-flex-order:2;order:2}:host([selected]){display:block;max-height:initial;-webkit-transition:none;transition:none}}";export{a as ku4_tab_panel}