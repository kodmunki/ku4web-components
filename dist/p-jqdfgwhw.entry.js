import{r as t,h as s,H as e}from"./p-8788d24d.js";import{b as a}from"./p-02741fa9.js";const l=class{constructor(s){t(this,s),this.selected=!1,this.panelId=a()}async select(){this.selected=!0}async deselect(){this.selected=!1}async connect(t){t.$assignPanel(this),this.tab=t}render(){const{panelId:t,selected:a,tab:l}=this;return s(e,{"aria-hidden":a?"false":"true"},s("section",{id:t,class:`tab-panel ${a?"selected":""}`,role:"tabpanel",tabIndex:0,"aria-labelledby":l&&l.tabId},s("slot",null)))}static get style(){return":host{display:block;width:100%}.tab-panel{display:block;max-height:0;padding:var(--ku4-tab-panel-padding);border-bottom:var(--ku4-tab-panel-border);overflow:hidden;-webkit-transition:max-height 0.3s ease, padding-top 0.3s ease, padding-bottom 0.3s ease;transition:max-height 0.3s ease, padding-top 0.3s ease, padding-bottom 0.3s ease}.tab-panel.selected{max-height:100%;padding:var(--ku4-tab-panel-selected-padding);-webkit-transition:max-height 0.3s ease, padding-top 0.3s ease, padding-bottom 0.3s ease;transition:max-height 0.3s ease, padding-top 0.3s ease, padding-bottom 0.3s ease}\@media only screen and (min-width: 768px){:host{-ms-flex-order:2;order:2}.tab-panel{display:none;padding:var(--ku4-tab-panel-padding);margin-top:-1px;border-top:var(--ku4-tab-panel-border);overflow:auto;-webkit-transition:none;transition:none}.tab-panel.selected{display:block;padding:var(--ku4-tab-panel-selected-padding);-webkit-transition:none;transition:none}}"}};export{l as ku4_tab_panel};