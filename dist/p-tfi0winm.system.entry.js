var __awaiter=this&&this.__awaiter||function(e,t,r,n){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function u(e){try{f(n.next(e))}catch(t){i(t)}}function a(e){try{f(n["throw"](e))}catch(t){i(t)}}function f(e){e.done?r(e.value):o(e.value).then(u,a)}f((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(e){return function(t){return f([e,t])}}function f(u){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,o&&(i=u[0]&2?o["return"]:u[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;if(o=0,i)u=[u[0]&2,i.value];switch(u[0]){case 0:case 1:i=u;break;case 4:r.label++;return{value:u[1],done:false};case 5:r.label++;o=u[1];u=[0];continue;case 7:u=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){r.label=u[1];break}if(u[0]===6&&r.label<i[1]){r.label=i[1];i=u;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(u);break}if(i[2])r.ops.pop();r.trys.pop();continue}u=t.call(e,r)}catch(a){u=[6,a];o=0}finally{n=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),o=0,t=0;t<r;t++)for(var i=arguments[t],u=0,a=i.length;u<a;u++,o++)n[o]=i[u];return n};System.register(["./p-6f3fd1f6.system.js","./p-73c28a76.system.js"],(function(e){"use strict";var t,r,n;return{setters:[function(e){t=e.r;r=e.h;n=e.g},function(){}],execute:function(){var o=function(){return function(e,t,r){return function(e){var t;var n;return Object.assign(Object.assign({},r),(t={},t[e]=function(){var t;var o=[];for(var i=0;i<arguments.length;i++){o[i]=arguments[i]}n=n||(t=r[e]).call.apply(t,__spreadArrays([this],o));return n},t))}(r.get?"get":"value")}};var i=undefined&&undefined.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,u;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)if(u=e[a])i=(o<3?u(i):o>3?u(t,r,i):u(t,r))||i;return o>3&&i&&Object.defineProperty(t,r,i),i};var u=e("ku4_form_validation",function(){function e(e){t(this,e)}Object.defineProperty(e.prototype,"form",{get:function(){return this.host.querySelector("form")},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"fields",{get:function(){return[].slice.call(this.form.querySelectorAll("ku4-validation"))},enumerable:true,configurable:true});e.prototype.validate=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r,n;return __generator(this,(function(o){e=this,t=e.form,r=e.fields;n=r.map((function(e){return e.validate()}));Promise.all(n).then((function(e){return!e.some((function(e){return e===false}))&&t.submit()}));return[2]}))}))};e.prototype.componentDidLoad=function(){var e=this;var t=this.form;var r=t.onsubmit||function(){};t.onsubmit=function(n){e.validate();r.call(n,t);return false}};e.prototype.render=function(){return r("slot",null)};Object.defineProperty(e.prototype,"host",{get:function(){return n(this)},enumerable:true,configurable:true});return e}());i([o()],u.prototype,"form",null);i([o()],u.prototype,"fields",null)}}}));