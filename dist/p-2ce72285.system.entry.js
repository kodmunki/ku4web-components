var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,s){function o(t){try{l(i.next(t))}catch(e){s(e)}}function u(t){try{l(i["throw"](t))}catch(e){s(e)}}function l(t){t.done?n(t.value):r(t.value).then(o,u)}l((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(t){return function(e){return l([t,e])}}function l(o){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(s=o[0]&2?r["return"]:o[0]?r["throw"]||((s=r["return"])&&s.call(r),0):r.next)&&!(s=s.call(r,o[1])).done)return s;if(r=0,s)o=[o[0]&2,s.value];switch(o[0]){case 0:case 1:s=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;r=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(s=n.trys,s=s.length>0&&s[s.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!s||o[1]>s[0]&&o[1]<s[3])){n.label=o[1];break}if(o[0]===6&&n.label<s[1]){n.label=s[1];s=o;break}if(s&&n.label<s[2]){n.label=s[2];n.ops.push(o);break}if(s[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(u){o=[6,u];r=0}finally{i=s=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-64299956.system.js","./p-11edeccb.system.js"],(function(t){"use strict";var e,n,i,r;return{setters:[function(t){e=t.r;n=t.h;i=t.g},function(t){r=t.t}],execute:function(){var s=":host{visibility:hidden !important}:host([invalid]){visibility:visible !important}";var o=t("ku4_validation",function(){function t(t){e(this,t);this.pattern=".*";this.regex=new RegExp(this.pattern);this.handleBlur=this.handleBlur.bind(this);this.handleInput=this.handleInput.bind(this)}t.prototype.validate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.assert()]}))}))};t.prototype.handleInput=function(){return r.isFalse(this.isValid)&&this.assert()};t.prototype.handleBlur=function(){return this.assert()};t.prototype.assert=function(){var t=this,e=t.ele,n=t.validOptions,i=t.input,r=t.regex;this.isValid=n?n.some((function(t){return t===i.value}))&&r.test(i.value):e?e.value===i.value&&r.test(i.value):r.test(i.value);this.invalid=!this.isValid;return this.isValid};t.prototype.componentWillLoad=function(){this.input=document.getElementById(this.for);this.ele=document.getElementById(this.element)||document.querySelector(this.element);this.validOptions=r.exists(this.values)?this.values.split(","):this.ele&&this.ele.nodeName==="DATALIST"&&[].slice.call(this.ele.querySelectorAll("option")).map((function(t){return t.value}));this.input.addEventListener("blur",this.handleBlur);this.input.addEventListener("input",this.handleInput)};t.prototype.componentDidUnload=function(){this.input.removeEventListener("blur",this.handleBlur);this.input.removeEventListener("input",this.handleInput)};t.prototype.render=function(){return n("slot",null)};Object.defineProperty(t.prototype,"host",{get:function(){return i(this)},enumerable:true,configurable:true});return t}());o.style=s}}}));