var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,s){function u(t){try{a(i.next(t))}catch(e){s(e)}}function o(t){try{a(i["throw"](t))}catch(e){s(e)}}function a(t){t.done?n(t.value):r(t.value).then(u,o)}a((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,u;return u={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function o(t){return function(e){return a([t,e])}}function a(u){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(s=u[0]&2?r["return"]:u[0]?r["throw"]||((s=r["return"])&&s.call(r),0):r.next)&&!(s=s.call(r,u[1])).done)return s;if(r=0,s)u=[u[0]&2,s.value];switch(u[0]){case 0:case 1:s=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;r=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(s=n.trys,s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1];s=u;break}if(s&&n.label<s[2]){n.label=s[2];n.ops.push(u);break}if(s[2])n.ops.pop();n.trys.pop();continue}u=e.call(t,n)}catch(o){u=[6,o];r=0}finally{i=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-c6b303a9.system.js","./p-11edeccb.system.js"],(function(t){"use strict";var e,n,i,r;return{setters:[function(t){e=t.r;n=t.h;i=t.g},function(t){r=t.t}],execute:function(){var s=":host{visibility:hidden !important}:host([invalid]){visibility:visible !important}";var u=t("ku4_validation",function(){function t(t){e(this,t);this.pattern=".*";this.flags="";var n=this.pattern.split(" ");var i=this.flags.split(" ");this.regex=n.map((function(t,e){return new RegExp(t,i[e])}));this.handleBlur=this.handleBlur.bind(this);this.handleInput=this.handleInput.bind(this)}t.prototype.validate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.assert()]}))}))};t.prototype.handleInput=function(){return r.isFalse(this.isValid)&&this.assert()};t.prototype.handleBlur=function(){return this.assert()};t.prototype.assert=function(){var t=this,e=t.ele,n=t.validOptions,i=t.input,r=t.regex;this.isValid=n?n.some((function(t){return t===i.value}))&&r.every((function(t){return t.test(i.value)})):e?e.value===i.value&&r.every((function(t){return t.test(i.value)})):r.every((function(t){return t.test(i.value)}));this.invalid=!this.isValid;return this.isValid};t.prototype.componentWillLoad=function(){this.input=document.getElementById(this.for);this.ele=document.getElementById(this.element)||document.querySelector(this.element);this.validOptions=r.exists(this.values)?this.values.split(","):this.ele&&this.ele.nodeName==="DATALIST"&&[].slice.call(this.ele.querySelectorAll("option")).map((function(t){return t.value}));this.input.addEventListener("blur",this.handleBlur);this.input.addEventListener("input",this.handleInput)};t.prototype.componentDidUnload=function(){this.input.removeEventListener("blur",this.handleBlur);this.input.removeEventListener("input",this.handleInput)};t.prototype.render=function(){return n("slot",null)};Object.defineProperty(t.prototype,"host",{get:function(){return i(this)},enumerable:true,configurable:true});return t}());u.style=s}}}));