var __awaiter=this&&this.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function o(e){try{c(r.next(e))}catch(t){a(t)}}function u(e){try{c(r["throw"](e))}catch(t){a(t)}}function c(e){e.done?n(e.value):i(e.value).then(o,u)}c((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(e){return function(t){return c([e,t])}}function c(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;i=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1];a=o;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(o);break}if(a[2])n.ops.pop();n.trys.pop();continue}o=t.call(e,n)}catch(u){o=[6,u];i=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-6f45a48c.system.js","./p-73c28a76.system.js"],(function(e){"use strict";var t,n,r,i;return{setters:[function(e){t=e.r;n=e.h;r=e.H},function(e){i=e.b}],execute:function(){var a=e("ku4_tab_panel",function(){function e(e){t(this,e);this.selected=false;this.panelId=i()}e.prototype.select=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.selected=true;return[2]}))}))};e.prototype.deselect=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.selected=false;return[2]}))}))};e.prototype.connect=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){e.$assignPanel(this);this.tab=e;return[2]}))}))};e.prototype.render=function(){var e=this,t=e.panelId,i=e.selected,a=e.tab;return n(r,{class:""+(i?"selected":""),"aria-hidden":i?"false":"true"},n("section",{id:t,class:"tab-panel "+(i?"selected":""),role:"tabpanel",tabIndex:0,"aria-labelledby":a&&a.tabId},n("slot",null)))};Object.defineProperty(e,"style",{get:function(){return":host{display:block;width:100%;height:0;overflow:hidden}:host(.selected){height:auto}.tab-panel{padding:var(--ku4-tab-panel-padding);border-bottom:var(--ku4-tab-panel-border)}.tab-panel.selected{padding:var(--ku4-tab-panel-selected-padding)}\@media only screen and (min-width: 768px){:host{-ms-flex-order:2;order:2}.tab-panel{display:none;padding:var(--ku4-tab-panel-padding);margin-top:-1px;border-top:var(--ku4-tab-panel-border);overflow:auto;-webkit-transition:none;transition:none}.tab-panel.selected{display:block;padding:var(--ku4-tab-panel-selected-padding);-webkit-transition:none;transition:none}}"},enumerable:true,configurable:true});return e}())}}}));