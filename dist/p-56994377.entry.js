import{r as t,h as e,g as r}from"./p-a13d72ed.js";import"./p-408b44e9.js";import{M as o}from"./p-2c25e51e.js";var s=function(t,e,r,o){var s,i=arguments.length,n=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var f=t.length-1;f>=0;f--)(s=t[f])&&(n=(i<3?s(n):i>3?s(e,r,n):s(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n};const i=class{constructor(e){t(this,e)}get form(){return this.host.querySelector("form")}get fields(){return[].slice.call(this.form.querySelectorAll("ku4-validation"))}async validate(){const{form:t,fields:e}=this,r=e.map(t=>t.validate());Promise.all(r).then(e=>!e.some(t=>!1===t)&&t.submit())}componentDidLoad(){const{form:t}=this,e=t.onsubmit||(()=>{});t.onsubmit=r=>(this.validate(),e.call(r,t),!1)}render(){return e("slot",null)}get host(){return r(this)}};s([o()],i.prototype,"form",null),s([o()],i.prototype,"fields",null);export{i as ku4_form_validation}