var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{u(i.next(t))}catch(e){o(e)}}function s(t){try{u(i["throw"](t))}catch(e){o(e)}}function u(t){t.done?n(t.value):r(t.value).then(a,s)}u((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return u([t,e])}}function u(a){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=a[0]&2?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;if(r=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;r=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(s){a=[6,s];r=0}finally{i=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-4de687d8.system.js"],(function(t){"use strict";var e,n,i,r;return{setters:[function(t){e=t.r;n=t.h;i=t.H;r=t.g}],execute:function(){var o=":host{-webkit-backface-visibility:hidden;display:block;width:100%;height:auto;max-height:0;-webkit-transition:max-height 0.4s, padding 0.6s;transition:max-height 0.4s, padding 0.6s;overflow:hidden}:host([open]){padding-top:inherit;padding-bottom:inherit}";var a=t("ku4_panel",function(){function t(t){e(this,t);this.open=false;this.maxHeight=this.open?"none":"0px"}t.prototype.openHandler=function(t){if(t){this.maxHeight=this.host.scrollHeight+"px"}else{this.host.style.maxHeight=this.host.scrollHeight+"px";this.maxHeight="0px"}};t.prototype.handleTransitionEnd=function(){this.maxHeight=this.open?"none":"0px"};t.prototype.toggle=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.open=!this.open;return[2]}))}))};t.prototype.close=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.open=false;return[2]}))}))};t.prototype.render=function(){var t=this,e=t.open,r=t.maxHeight;return n(i,{"aria-hidden":e?"false":"true",tabIndex:e?0:-1,style:{maxHeight:r}},n("slot",null))};Object.defineProperty(t.prototype,"host",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{open:["openHandler"]}},enumerable:false,configurable:true});return t}());a.style=o}}}));