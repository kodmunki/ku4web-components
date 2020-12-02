var __awaiter=this&&this.__awaiter||function(t,e,i,n){function s(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,r){function a(t){try{l(n.next(t))}catch(e){r(e)}}function o(t){try{l(n["throw"](t))}catch(e){r(e)}}function l(t){t.done?i(t.value):s(t.value).then(a,o)}l((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,s,r,a;return a={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(t){return function(e){return l([t,e])}}function l(a){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,s&&(r=a[0]&2?s["return"]:a[0]?s["throw"]||((r=s["return"])&&r.call(s),0):s.next)&&!(r=r.call(s,a[1])).done)return r;if(s=0,r)a=[a[0]&2,r.value];switch(a[0]){case 0:case 1:r=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;s=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(a[0]===6&&i.label<r[1]){i.label=r[1];r=a;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(a);break}if(r[2])i.ops.pop();i.trys.pop();continue}a=e.call(t,i)}catch(o){a=[6,o];s=0}finally{n=r=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-857284a4.system.js","./p-d74a6f64.system.js"],(function(t){"use strict";var e,i,n,s,r,a,o,l;return{setters:[function(t){e=t.r;i=t.c;n=t.h;s=t.H;r=t.g},function(t){a=t.t;o=t.E;l=t.k}],execute:function(){var u=function(t,e,i,n){return i?i.some((function(t){return t===e}))&&t.every((function(t){return t.test(e)})):n?n.value===e&&t.every((function(t){return t.test(e)})):t.every((function(t){return t.test(e)}))};var h=":host{visibility:hidden !important}:host([invalid]){visibility:visible !important}";var d=t("ku4_validation",function(){function t(t){e(this,t);this.didValidate=i(this,"validate",7);this.pattern=".*";this.flags="";this.method="";var n=this.pattern.split(" ");var s=this.flags.split(" ");var r=this.method.trim();this.regex=n.map((function(t,e){return new RegExp(t,s[e])}));this.validationMethod=a.isNullOrEmpty(r)?function(){return true}:new Function("value",/^return/.test(r)?r:"return "+r);this.handleInput=this.handleInput.bind(this);this.handleChange=this.handleChange.bind(this);this.handleBlur=this.handleBlur.bind(this);this.handleReset=this.handleReset.bind(this)}t.prototype.validate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.assert()]}))}))};t.prototype.handleInput=function(){(this.input.type==="file"||a.isFalse(this.isValid))&&this.assert()};t.prototype.handleChange=function(){(this.input.type==="file"||a.isFalse(this.isValid))&&this.assert()};t.prototype.handleBlur=function(){this.assert()};t.prototype.handleReset=function(){this.isValid=true;this.invalid=!this.isValid;this.input.setAttribute("aria-invalid",this.invalid)};t.prototype.assert=function(){var t=this,e=t.ele,i=t.validOptions,n=t.input,s=t.regex;if(n.type==="file"&&a.isNullOrEmpty(n.value)){return}var r=this.isValid;this.isValid=u(s,n.value,i,e)&&this.validationMethod(n.value);this.invalid=!this.isValid;n.setAttribute("aria-invalid",this.invalid);if(a.isFalse(r)&&this.isValid){this.didValidate.emit(this.isValid)}return this.isValid};t.prototype.componentWillLoad=function(){var t=this;this.input=document.getElementById(this.for);if(a.exists(this.input)){this.ele=document.getElementById(this.element)||document.querySelector(this.element);this.validOptions=a.exists(this.values)?this.values.split(","):this.ele&&this.ele.nodeName==="DATALIST"&&[].slice.call(this.ele.querySelectorAll("option")).map((function(t){return t.value}));var e=this.input.getAttribute("aria-describedby");var i=this.host.getAttribute("id")||o.uid();this.host.setAttribute("id",i);if(a.isNullOrEmpty(e)){this.input.setAttribute("aria-describedby",i)}l(0).then((function(){t.input.addEventListener("input",t.handleInput);t.input.addEventListener("change",t.handleChange);t.input.addEventListener("blur",t.handleBlur)}));if(a.isFunction(this.host.closest)){this.form=this.host.closest("form");if(this.form&&this.form.addEventListener){this.form.addEventListener("reset",this.handleReset)}}}else{console.error("ku4-validation must have a `for` attribute pointing to a target field `id`.")}};t.prototype.disconnectedCallback=function(){if(this.input&&this.input.removeEventListener){this.input.removeEventListener("input",this.handleInput);this.input.removeEventListener("change",this.handleChange);this.input.removeEventListener("blur",this.handleBlur)}if(this.form&&this.form.removeEventListener){this.form.removeEventListener("reset",this.handleReset)}};t.prototype.render=function(){return n(s,{role:"alert","aria-live":"assertive"},n("slot",null))};Object.defineProperty(t.prototype,"host",{get:function(){return r(this)},enumerable:false,configurable:true});return t}());d.style=h}}}));