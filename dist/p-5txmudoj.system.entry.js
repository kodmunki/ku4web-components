var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,u){function o(t){try{a(i.next(t))}catch(e){u(e)}}function s(t){try{a(i["throw"](t))}catch(e){u(e)}}function a(t){t.done?n(t.value):r(t.value).then(o,s)}a((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},i,r,u,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return a([t,e])}}function a(o){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(u=o[0]&2?r["return"]:o[0]?r["throw"]||((u=r["return"])&&u.call(r),0):r.next)&&!(u=u.call(r,o[1])).done)return u;if(r=0,u)o=[o[0]&2,u.value];switch(o[0]){case 0:case 1:u=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;r=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(u=n.trys,u=u.length>0&&u[u.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!u||o[1]>u[0]&&o[1]<u[3])){n.label=o[1];break}if(o[0]===6&&n.label<u[1]){n.label=u[1];u=o;break}if(u&&n.label<u[2]){n.label=u[2];n.ops.push(o);break}if(u[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(s){o=[6,s];r=0}finally{i=u=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-f6113f5b.system.js","./p-73c28a76.system.js"],(function(t){"use strict";var e,n,i,r;return{setters:[function(t){e=t.r;n=t.h;i=t.g},function(t){r=t.a}],execute:function(){var u=t("ku4_validation",function(){function t(t){e(this,t);this.expression=".*"}t.prototype.validate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.assert()]}))}))};t.prototype.handleInput=function(){return r.isFalse(this.isValid)&&this.assert()};t.prototype.handleBlur=function(){return this.assert()};t.prototype.assert=function(){var t=this,e=t.ele,n=t.input,i=t.regex;this.isValid=e?e.value===n.value&&i.test(n.value):i.test(n.value);this.setValidAttribute();return this.isValid};t.prototype.setValidAttribute=function(){if(this.isValid){this.host.setAttribute("valid","");this.host.removeAttribute("invalid")}else{this.host.setAttribute("invalid","");this.host.removeAttribute("valid")}};t.prototype.componentWillLoad=function(){this.handleBlur=this.handleBlur.bind(this);this.handleInput=this.handleInput.bind(this);this.input=document.getElementById(this.for);this.ele=document.querySelector(this.element);this.regex=new RegExp(this.expression);this.input.addEventListener("blur",this.handleBlur);this.input.addEventListener("input",this.handleInput)};t.prototype.componentDidUnload=function(){this.input.removeEventListener("blur",this.handleBlur);this.input.removeEventListener("input",this.handleInput)};t.prototype.render=function(){return n("slot",null)};Object.defineProperty(t.prototype,"host",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{visibility:hidden !important}:host([invalid]){visibility:visible !important}"},enumerable:true,configurable:true});return t}())}}}));