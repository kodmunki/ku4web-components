import{r as e,h as t,H as s}from"./p-d5339fd8.js";import{e as a}from"./p-c4eeb48f.js";const l=class{constructor(t){e(this,t),this.selected=!1,this.panelId=a()}async select(){this.selected=!0}async deselect(){this.selected=!1}async connect(e){e.$assignPanel(this),this.tab=e}render(){const{panelId:e,selected:a,tab:l}=this;return t(s,{"aria-hidden":a?"false":"true"},t("section",{id:e,class:`tab-panel ${a?"selected":""}`,role:"tabpanel",tabindex:0,"aria-labelledby":l&&l.tabId},t("slot",null)))}static get style(){return":host{display:block;width:100%}.tab-panel{display:block;max-height:0;padding:var(--ku4-tab-panel-padding);border-bottom:var(--ku4-tab-panel-border);overflow:hidden}.tab-panel,.tab-panel.selected{-webkit-transition:max-height .3s ease,padding-top .3s ease,padding-bottom .3s ease;transition:max-height .3s ease,padding-top .3s ease,padding-bottom .3s ease}.tab-panel.selected{max-height:100%;padding:var(--ku4-tab-panel-selected-padding)}\@media only screen and (min-width:768px){:host{-ms-flex-order:2;order:2}.tab-panel{display:none;padding:var(--ku4-tab-panel-padding);margin-top:-1px;border-top:var(--ku4-tab-panel-border);overflow:auto}.tab-panel,.tab-panel.selected{-webkit-transition:none;transition:none}.tab-panel.selected{display:block;padding:var(--ku4-tab-panel-selected-padding)}}"}};export{l as ku4_tab_panel};