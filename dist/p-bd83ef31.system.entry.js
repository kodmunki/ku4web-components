var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function s(t){try{l(i.next(t))}catch(e){o(e)}}function a(t){try{l(i["throw"](t))}catch(e){o(e)}}function l(t){t.done?n(t.value):r(t.value).then(s,a)}l((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return l([t,e])}}function l(s){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=s[0]&2?r["return"]:s[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;if(r=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;r=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(a){s=[6,a];r=0}finally{i=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-829fb4ce.system.js","./p-955c91e2.system.js","./p-8bf22b59.system.js"],(function(t){"use strict";var e,n,i,r,o;return{setters:[function(t){e=t.r;n=t.h;i=t.H;r=t.g},function(t){o=t.u},function(){}],execute:function(){var s=":host{-webkit-backface-visibility:hidden;display:block;width:100%;height:auto;max-height:0;-webkit-transition:max-height 0.4s, padding 0.6s;transition:max-height 0.4s, padding 0.6s;overflow:auto}@media only screen and (min-width: 768px){:host{display:none;border-top:1px solid #ccc;border-bottom:1px solid #ccc;max-height:initial !important;-webkit-transition:none;transition:none;-ms-flex-order:2;order:2}:host([selected]){display:block;max-height:initial !important;-webkit-transition:none;transition:none}}";var a=t("ku4_tab_panel",function(){function t(t){e(this,t);this.selected=false;this.maxHeight=this.selected?"none":"0px"}t.prototype.handleTransitionEnd=function(){this.maxHeight=this.selected?"none":"0px"};t.prototype.select=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(this.selected){return[2]}this.selected=true;if(this.hasTransition){this.maxHeight="".concat(this.host.scrollHeight,"px")}else{this.handleTransitionEnd()}return[2]}))}))};t.prototype.deselect=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(!this.selected){return[2]}this.selected=false;this.host.style.maxHeight="".concat(this.host.scrollHeight,"px");if(this.hasTransition){this.maxHeight="0px"}else{this.handleTransitionEnd()}return[2]}))}))};t.prototype.connect=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){t.$assignPanel(this);this.tab=t;return[2]}))}))};Object.defineProperty(t.prototype,"hasTransition",{get:function(){var t=window.getComputedStyle(this.host).getPropertyValue("transition");return!/none/.test(t)},enumerable:false,configurable:true});t.prototype.render=function(){var t=this,e=t.selected,r=t.tab,s=t.maxHeight;return n(i,{role:"tabpanel",id:this.host.id||o(),"aria-hidden":e?"false":"true","aria-labelledby":r&&r.id,tabIndex:e?0:-1,style:{maxHeight:s}},n("slot",null))};Object.defineProperty(t.prototype,"host",{get:function(){return r(this)},enumerable:false,configurable:true});return t}());a.style=s}}}));