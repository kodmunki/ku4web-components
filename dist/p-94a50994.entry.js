import{r as e,h as t,H as n}from"./p-620ad787.js";import{M as a}from"./p-545305c8.js";const i=class{constructor(t){e(this,t),this.selected=!1,this.panelId=a()}async select(){this.selected=!0}async deselect(){this.selected=!1}async connect(e){e.$assignPanel(this),this.tab=e}render(){const{panelId:e,selected:a,tab:i}=this;return t(n,{class:`${a?"selected":""}`,"aria-hidden":a?"false":"true"},t("section",{id:e,class:`tab-panel ${a?"selected":""}`,role:"tabpanel",tabIndex:0,"aria-labelledby":i&&i.tabId},t("slot",null)))}};i.style=":host{display:block;width:100%;max-height:0;-webkit-transition:max-height ease var(--ku4-tab-panel-transion-speed, 0.3s);transition:max-height ease var(--ku4-tab-panel-transion-speed, 0.3s);overflow:hidden}:host(.selected){max-height:var(--ku4-tab-panel-max-height, 100vh);-webkit-transition:max-height ease var(--ku4-tab-panel-transion-speed, 0.3s);transition:max-height ease var(--ku4-tab-panel-transion-speed, 0.3s)}@media only screen and (min-width: 768px){:host{-ms-flex-order:2;order:2;max-height:initial;-webkit-transition:none;transition:none}:host(.selected){max-height:initial;-webkit-transition:none;transition:none}.tab-panel{display:none;margin-top:-1px;overflow:auto;-webkit-transition:none;transition:none}.tab-panel.selected{display:block;-webkit-transition:none;transition:none}}";export{i as ku4_tab_panel}