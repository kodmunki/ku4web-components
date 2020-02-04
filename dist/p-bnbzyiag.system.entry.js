var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{c(r.next(t))}catch(e){o(e)}}function u(t){try{c(r["throw"](t))}catch(e){o(e)}}function c(t){t.done?n(t.value):i(t.value).then(a,u)}c((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return c([t,e])}}function c(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;i=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(u){a=[6,u];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-3607f0cc.system.js","./p-7dcb279b.system.js"],(function(t){"use strict";var e,n,r,i;return{setters:[function(t){e=t.r;n=t.h;r=t.H},function(t){i=t.b}],execute:function(){var o=t("ku4_tab_panel",function(){function t(t){e(this,t);this.selected=false;this.panelId=i()}t.prototype.select=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.selected=true;return[2]}))}))};t.prototype.deselect=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.selected=false;return[2]}))}))};t.prototype.connect=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){t.$assignPanel(this);this.tab=t;return[2]}))}))};t.prototype.render=function(){var t=this,e=t.panelId,i=t.selected,o=t.tab;return n(r,{"aria-hidden":i?"false":"true"},n("section",{id:e,class:"tab-panel "+(i?"selected":""),role:"tabpanel",tabindex:0,"aria-labelledby":o&&o.tabId},n("slot",null)))};Object.defineProperty(t,"style",{get:function(){return":host{display:block;width:100%}.tab-panel{display:block;max-height:0;padding:var(--ku4-tab-panel-padding);border-bottom:var(--ku4-tab-panel-border);overflow:hidden}.tab-panel,.tab-panel.selected{-webkit-transition:max-height .3s ease,padding-top .3s ease,padding-bottom .3s ease;transition:max-height .3s ease,padding-top .3s ease,padding-bottom .3s ease}.tab-panel.selected{max-height:100%;padding:var(--ku4-tab-panel-selected-padding)}\@media only screen and (min-width:768px){:host{-ms-flex-order:2;order:2}.tab-panel{display:none;padding:var(--ku4-tab-panel-padding);margin-top:-1px;border-top:var(--ku4-tab-panel-border);overflow:auto}.tab-panel,.tab-panel.selected{-webkit-transition:none;transition:none}.tab-panel.selected{display:block;padding:var(--ku4-tab-panel-selected-padding)}}"},enumerable:true,configurable:true});return t}())}}}));