import{r as t,h as s,g as r}from"./p-80e7f1ae.js";import{t as e}from"./p-0163b029.js";import{u as i}from"./p-5d07c084.js";const n=class{constructor(s){t(this,s)}async validate(){const{fields:t}=this,s=t.map(t=>t.validate());return await Promise.all(s).then(t=>!t.some(t=>!1===t))}async invalidate(t){if(e.isArray(t))t.forEach(t=>{const s=this.fields.find(s=>s.for===t);s&&(s.invalid=!0)});else{const s=this.fields.find(s=>s.for===t);s&&(s.invalid=!0)}return this}async read(){return i.read(this.form)}async write(t){return i.write(this.form,t),Object.keys(t).forEach(t=>this.form.querySelector(`[name="${t}"]`).dispatchEvent(new Event("change"))),this}get form(){return this.host.querySelector("form")}get fields(){return[].slice.call(this.form.querySelectorAll("ku4-validation"))}componentWillLoad(){const{form:t}=this;if(e.exists(t)){const s=t.onsubmit||(()=>{});t.onsubmit=r=>(r.preventDefault(),this.validate().then(e=>e&&s.call(t,r)).then(s=>!e.isFalse(s)&&t.submit()),!1)}}render(){return s("slot",null)}get host(){return r(this)}};export{n as ku4_form}