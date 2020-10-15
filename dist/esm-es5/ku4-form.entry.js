var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{s(r.next(t))}catch(e){o(e)}}function u(t){try{s(r["throw"](t))}catch(e){o(e)}}function s(t){t.done?n(t.value):i(t.value).then(a,u)}s((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return s([t,e])}}function s(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;i=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(u){a=[6,u];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};import{r as registerInstance,h,g as getElement}from"./index-dc6f4989.js";import{t}from"./index-aa88697c.js";import{u}from"./index-ffdafbbd.js";var Ku4Form=function(){function e(t){registerInstance(this,t);this.validate=this.validate.bind(this);this.handleReset=this.handleReset.bind(this)}e.prototype.validate=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,n;return __generator(this,(function(r){switch(r.label){case 0:t=this.fields;e=t.map((function(t){return t.validate()}));n=this;return[4,Promise.all(e).then((function(t){return!t.some((function(t){return t===false}))}))];case 1:n.isValid=r.sent();this.invalid=!this.isValid;return[2,this.isValid]}}))}))};e.prototype.invalidate=function(e){return __awaiter(this,void 0,void 0,(function(){var n;var r=this;return __generator(this,(function(i){if(t.isArray(e)){e.forEach((function(t){var e=r.fields.find((function(e){return e.for===t}));if(e){e.invalid=true}}))}else{n=this.fields.find((function(t){return t.for===e}));if(n){n.invalid=true}}this.invalid=true;return[2,this]}))}))};e.prototype.read=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,u.read(this.form)]}))}))};e.prototype.write=function(t){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(n){u.write(this.form,t);Object.keys(t).forEach((function(t){return e.form.querySelector('[name="'+t+'"]').dispatchEvent(new Event("change"))}));return[2,this]}))}))};Object.defineProperty(e.prototype,"form",{get:function(){return this.host.querySelector("form")},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"fields",{get:function(){return[].slice.call(this.form.querySelectorAll("ku4-validation"))},enumerable:false,configurable:true});e.prototype.handleReset=function(){this.isValid=true;this.invalid=!this.isValid};e.prototype.componentWillLoad=function(){var e=this;var n=this.form;if(t.exists(n)){var r=n.onsubmit||function(){};n.onsubmit=function(i){i.preventDefault();e.validate().then((function(t){return t&&r.call(n,i)})).then((function(e){return!t.isFalse(e)&&n.submit()}));return false};n.addEventListener("reset",this.handleReset);this.fields.forEach((function(t){return t.addEventListener("ku4ValidationValidated",e.validate)}))}};e.prototype.disconnectedCallback=function(){var e=this;var n=this.form;if(t.exists(n)){n.removeEventListener("reset",this.handleReset);this.fields.forEach((function(t){return t.removeEventListener("ku4ValidationValidated",e.validate)}))}};e.prototype.render=function(){return h("slot",null)};Object.defineProperty(e.prototype,"host",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();export{Ku4Form as ku4_form};