var __awaiter=this&&this.__awaiter||function(t,e,i,n){function r(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,s){function a(t){try{o(n.next(t))}catch(e){s(e)}}function u(t){try{o(n["throw"](t))}catch(e){s(e)}}function o(t){t.done?i(t.value):r(t.value).then(a,u)}o((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,r,s,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return o([t,e])}}function o(a){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(s=a[0]&2?r["return"]:a[0]?r["throw"]||((s=r["return"])&&s.call(r),0):r.next)&&!(s=s.call(r,a[1])).done)return s;if(r=0,s)a=[a[0]&2,s.value];switch(a[0]){case 0:case 1:s=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;r=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(s=i.trys,s=s.length>0&&s[s.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!s||a[1]>s[0]&&a[1]<s[3])){i.label=a[1];break}if(a[0]===6&&i.label<s[1]){i.label=s[1];s=a;break}if(s&&i.label<s[2]){i.label=s[2];i.ops.push(a);break}if(s[2])i.ops.pop();i.trys.pop();continue}a=e.call(t,i)}catch(u){a=[6,u];r=0}finally{n=s=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-55f5c91c.system.js","./p-e11b977e.system.js"],(function(t){"use strict";var e,i,n,r,s,a,u,o,l;return{setters:[function(t){e=t.r;i=t.c;n=t.h;r=t.H;s=t.g},function(t){a=t.t;u=t.h;o=t.Y;l=t.R}],execute:function(){var h=function(t,e,i,n){return i?i.some((function(t){return t===e}))&&(t||[]).every((function(t){return t.test(e)})):n?n.value===e&&(t||[]).every((function(t){return t.test(e)})):(t||[]).every((function(t){return t.test(e)}))};var c=":host{visibility:hidden !important}:host([invalid]){visibility:visible !important}:host([disabled]){visibility:hidden !important}:host([invalid][disabled]){visibility:hidden !important}:host([invalid][hidden]){visibility:hidden !important}";var d=t("ku4_validation",function(){function t(t){e(this,t);this.didValidate=i(this,"validate",7);this.pattern=".*";this.flags="";this.method="";var n=this.pattern.split(" ");var r=this.flags.split(" ");var s=a.isString(this.method)?this.method.trim():this.method;this.regex=n.map((function(t,e){return new RegExp(t,r[e])}));this.validationMethod=a.isNullOrEmpty(s)?function(){return true}:a.isString(s)?new Function("value, values",/^return/.test(s)?s:"return ".concat(s)):a.isFunction(s)?s:function(){return true};this.handleInput=this.handleInput.bind(this);this.handleChange=this.handleChange.bind(this);this.handleBlur=this.handleBlur.bind(this);this.handleReset=this.handleReset.bind(this)}t.prototype.validate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.assert()];case 1:return[2,t.sent()]}}))}))};t.prototype.handleInput=function(t){var e=t.target;return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(i){switch(i.label){case 0:t=e.type==="file"||a.isFalse(this.isValid);if(!t)return[3,2];return[4,this.assert()];case 1:t=i.sent();i.label=2;case 2:t;return[2]}}))}))};t.prototype.handleChange=function(t){var e=t.target;return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(i){switch(i.label){case 0:t=e.type==="file"||a.isFalse(this.isValid);if(!t)return[3,2];return[4,this.assert()];case 1:t=i.sent();i.label=2;case 2:t;return[2]}}))}))};t.prototype.handleBlur=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.assert()];case 1:t.sent();return[2]}}))}))};t.prototype.handleReset=function(){this.isValid=true;this.invalid=!this.isValid;this.input&&this.input.setAttribute("aria-invalid",this.invalid)};t.prototype.assert=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,i,n,r,s,o,l,c,d,f,v,p;var b=this;return __generator(this,(function(m){switch(m.label){case 0:t=this,e=t.ele,i=t.validOptions,n=t.inputs,r=t.input,s=t.regex,o=t.checked;l=this.isValid;return[4,u.async((function(){return __awaiter(b,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.ku4Form.read()];case 1:return[2,t.sent()]}}))}))}),{})];case 1:c=m.sent();if(!!this.disabled)return[3,8];d=function(t){return __awaiter(b,void 0,void 0,(function(){var n,r,u;return __generator(this,(function(l){switch(l.label){case 0:if(t.type==="file"&&a.isNullOrEmpty(t.value)){return[2,true]}if(!a.isBool(o))return[3,1];r=t.checked===o;return[3,4];case 1:u=h(s,t.value,i,e);if(!u)return[3,3];return[4,this.validationMethod(t.value,c)];case 2:u=l.sent();l.label=3;case 3:r=u;l.label=4;case 4:n=r;t.setAttribute("aria-invalid",!n);return[2,n]}}))}))};f=this;if(!n)return[3,3];return[4,Promise.all(n.map((function(t){return d(t)})))];case 2:v=!m.sent().some((function(t){return!t}));return[3,7];case 3:if(!r)return[3,5];return[4,d(r)];case 4:p=m.sent();return[3,6];case 5:p=true;m.label=6;case 6:v=p;m.label=7;case 7:f.isValid=v;return[3,9];case 8:this.isValid=true;m.label=9;case 9:if(a.isFalse(l)&&this.isValid){this.didValidate.emit(this.isValid)}this.invalid=!this.isValid;return[2,this.isValid]}}))}))};t.prototype.componentWillLoad=function(){var t=this;var e=this.for.replace(/\s/g,"").replace(/,/g,",#");this.inputs=/,/.test(this.for)&&Array.from(document.querySelectorAll("#".concat(e)));this.input=!/,/.test(this.for)&&document.getElementById(this.for);this.ele=document.getElementById(this.element)||document.querySelector(this.element);this.validOptions=a.exists(this.values)?this.values.split(","):this.ele&&this.ele.nodeName==="DATALIST"&&[].slice.call(this.ele.querySelectorAll("option")).map((function(t){return t.value}));if(a.isFunction(this.host.closest)){this.ku4Form=this.host.closest("ku4-form");this.form=this.host.closest("form");if(this.form&&this.form.addEventListener){this.form.addEventListener("reset",this.handleReset)}}if(this.inputs){o(0).then((function(){t.inputs.forEach((function(e){e.addEventListener("input",t.handleInput);e.addEventListener("change",t.handleChange);e.addEventListener("blur",t.handleBlur)}))}))}else if(this.input){var i=this.input.getAttribute("aria-describedby");var n=this.host.getAttribute("id")||l.uid();this.host.setAttribute("id",n);if(a.isNullOrEmpty(i)){this.input.setAttribute("aria-describedby",n)}o(0).then((function(){t.input.addEventListener("input",t.handleInput);t.input.addEventListener("change",t.handleChange);t.input.addEventListener("blur",t.handleBlur)}))}else{console.error("ku4-validation must have a valid `for` referencing target field `id`.")}};t.prototype.disconnectedCallback=function(){var t=this;if(this.inputs){this.inputs.forEach((function(e){if(e&&e.removeEventListener){e.removeEventListener("input",t.handleInput);e.removeEventListener("change",t.handleChange);e.removeEventListener("blur",t.handleBlur)}}))}if(this.input&&this.input.removeEventListener){this.input.removeEventListener("input",this.handleInput);this.input.removeEventListener("change",this.handleChange);this.input.removeEventListener("blur",this.handleBlur)}if(this.form&&this.form.removeEventListener){this.form.removeEventListener("reset",this.handleReset)}};t.prototype.render=function(){return n(r,{role:"alert","aria-live":"assertive"},n("slot",null))};Object.defineProperty(t.prototype,"host",{get:function(){return s(this)},enumerable:false,configurable:true});return t}());d.style=c}}}));