import{r as t,h as i,c as s,g as e}from"./p-4b3a55b9.js";import"./p-66db1a6c.js";import{u as n}from"./p-9d6899f2.js";const a=class{constructor(i){t(this,i),this.selected=!1}async select(){this.selected=!0}async deselect(){this.selected=!1}async connect(t){t.$assignPanel(this),this.tab=t}render(){const{selected:t,tab:e}=this;return i(s,{role:"tabpanel",id:this.host.id||n(),"aria-hidden":t?"false":"true","aria-labelledby":e&&e.id,tabIndex:t?0:-1},i("slot",null))}get host(){return e(this)}};a.style=":host{-webkit-backface-visibility:hidden;display:block;width:100%;max-height:0;padding:0 20px;-webkit-transition:max-height 0.4s, padding 0.6s;transition:max-height 0.4s, padding 0.6s;overflow:hidden}:host([selected]){max-height:100vh;padding:20px;-webkit-transition:max-height 0.4s, padding 0.6s;transition:max-height 0.4s, padding 0.6s}@media only screen and (min-width: 768px){:host{display:none;max-height:initial;padding:10px 20px;border-top:1px solid #ccc;border-bottom:1px solid #ccc;-webkit-transition:none;transition:none;-ms-flex-order:2;order:2}:host([selected]){display:block;max-height:initial;-webkit-transition:none;transition:none}}";export{a as ku4_tab_panel}