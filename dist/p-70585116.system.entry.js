System.register(["./p-99149b5d.system.js","./p-684b9b69.system.js"],(function(t){"use strict";var e,r,n;return{setters:[function(t){e=t.r;r=t.h;n=t.g},function(){}],execute:function(){const s=()=>(t,e,r)=>(t=>{let e;return Object.assign(Object.assign({},r),{[t](...n){e=e||r[t].call(this,...n);return e}})})(r.get?"get":"value");var o=undefined&&undefined.__decorate||function(t,e,r,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,l;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(t,e,r,n);else for(var i=t.length-1;i>=0;i--)if(l=t[i])o=(s<3?l(o):s>3?l(e,r,o):l(e,r))||o;return s>3&&o&&Object.defineProperty(e,r,o),o};const l=t("ku4_form_validation",class{constructor(t){e(this,t)}get form(){return this.host.querySelector("form")}get fields(){return[].slice.call(this.form.querySelectorAll("ku4-validation"))}async validate(){const{form:t,fields:e}=this;const r=e.map(t=>t.validate());Promise.all(r).then(e=>!e.some(t=>t===false)&&t.submit())}componentDidLoad(){const{form:t}=this;const e=t.onsubmit||(()=>{});t.onsubmit=r=>{this.validate();e.call(r,t);return false}}render(){return r("slot",null)}get host(){return n(this)}});o([s()],l.prototype,"form",null);o([s()],l.prototype,"fields",null)}}}));