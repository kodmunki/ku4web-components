import{r as t,h as i,H as s,g as e}from"./p-80e7f1ae.js";import"./p-ce48150b.js";import{u as a}from"./p-46600b7d.js";const n=class{constructor(i){t(this,i),this.selected=!1}async select(){this.selected=!0}async deselect(){this.selected=!1}async connect(t){t.$assignPanel(this),this.tab=t}render(){const{selected:t,tab:e}=this;return i(s,{role:"tabpanel",id:this.host.id||a(),"aria-hidden":t?"false":"true","aria-labelledby":e&&e.id,tabIndex:0},i("slot",null))}get host(){return e(this)}};n.style=":host{display:block;width:100%;max-height:0;padding:0 20px;transition:max-height 0.4s, padding 0.6s;overflow:hidden}:host([selected]){max-height:100vh;padding:20px;transition:max-height 0.4s, padding 0.6s}@media only screen and (min-width: 768px){:host{display:none;max-height:initial;padding:10px 20px;border-top:1px solid #ccc;border-bottom:1px solid #ccc;transition:none;order:2}:host([selected]){display:block;max-height:initial;transition:none}}";export{n as ku4_tab_panel}