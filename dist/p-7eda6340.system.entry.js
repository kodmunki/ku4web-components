var __awaiter=this&&this.__awaiter||function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function u(t){try{c(r.next(t))}catch(e){i(e)}}function a(t){try{c(r["throw"](t))}catch(e){i(e)}}function c(t){t.done?n(t.value):o(t.value).then(u,a)}c((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(t){return function(e){return c([t,e])}}function c(u){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(i=u[0]&2?o["return"]:u[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;if(o=0,i)u=[u[0]&2,i.value];switch(u[0]){case 0:case 1:i=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;o=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1];i=u;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(u);break}if(i[2])n.ops.pop();n.trys.pop();continue}u=e.call(t,n)}catch(a){u=[6,a];o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-3eb40920.system.js","./p-11edeccb.system.js"],(function(t){"use strict";var e,n,r,o;return{setters:[function(t){e=t.r;n=t.h;r=t.g},function(t){o=t.t}],execute:function(){var i=t("ku4_form",function(){function t(t){e(this,t)}t.prototype.validate=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(n){t=this.fields;e=t.map((function(t){return t.validate()}));return[2,Promise.all(e).then((function(t){return!t.some((function(t){return t===false}))}))]}))}))};Object.defineProperty(t.prototype,"form",{get:function(){return this.host.querySelector("form")},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"fields",{get:function(){return[].slice.call(this.form.querySelectorAll("ku4-validation"))},enumerable:true,configurable:true});t.prototype.componentWillLoad=function(){var t=this;var e=this.form;if(o.exists(e)){var n=e.onsubmit||function(){};e.onsubmit=function(r){r.preventDefault();t.validate().then((function(t){return t&&n.call(e,r)})).then((function(t){return!o.isFalse(t)&&e.submit()}));return false}}};t.prototype.render=function(){return n("slot",null)};Object.defineProperty(t.prototype,"host",{get:function(){return r(this)},enumerable:true,configurable:true});return t}())}}}));