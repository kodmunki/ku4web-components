import{r as t,h as s,g as i}from"./p-80e7f1ae.js";import{t as e}from"./p-466ba6c3.js";import{u as h}from"./p-5d07c084.js";const r=class{constructor(s){t(this,s),this.validate=this.validate.bind(this),this.handleReset=this.handleReset.bind(this)}async validate(){const{fields:t}=this,s=t.map(t=>t.validate());return this.isValid=await Promise.all(s).then(t=>!t.some(t=>!1===t)),this.invalid=!this.isValid,this.isValid}async invalidate(t){if(e.isArray(t))t.forEach(t=>{const s=this.fields.find(s=>s.for===t);s&&(s.invalid=!0)});else{const s=this.fields.find(s=>s.for===t);s&&(s.invalid=!0)}return this.invalid=!0,this}async read(){return h.read(this.form)}async write(t){return h.write(this.form,t),Object.keys(t).forEach(t=>this.form.querySelector(`[name="${t}"]`).dispatchEvent(new Event("change"))),this}get form(){return this.host.querySelector("form")}get fields(){return[].slice.call(this.form.querySelectorAll("ku4-validation"))}handleReset(){this.isValid=!0,this.invalid=!this.isValid}componentWillLoad(){const{form:t}=this;if(e.exists(t)){const s=t.onsubmit||(()=>{});t.onsubmit=i=>(i.preventDefault(),this.validate().then(e=>e&&s.call(t,i)).then(s=>!e.isFalse(s)&&t.submit()),!1),t.addEventListener("reset",this.handleReset),this.fields.forEach(t=>t.addEventListener("ku4ValidationValidated",this.validate))}}disconnectedCallback(){const{form:t}=this;e.exists(t)&&(t.removeEventListener("reset",this.handleReset),this.fields.forEach(t=>t.removeEventListener("ku4ValidationValidated",this.validate)))}render(){return s("slot",null)}get host(){return i(this)}};export{r as ku4_form}