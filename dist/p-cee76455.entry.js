import{r as t,h as r,g as s}from"./p-75db63c9.js";import{t as o}from"./p-545305c8.js";const i=class{constructor(r){t(this,r)}async validate(){const{fields:t}=this,r=t.map(t=>t.validate());return Promise.all(r).then(t=>!t.some(t=>!1===t))}get form(){return this.host.querySelector("form")}get fields(){return[].slice.call(this.form.querySelectorAll("ku4-validation"))}componentWillLoad(){const{form:t}=this;if(o.exists(t)){const r=t.onsubmit||(()=>{});t.onsubmit=s=>(s.preventDefault(),this.validate().then(o=>o&&r.call(t,s)).then(r=>!o.isFalse(r)&&t.submit()),!1)}}render(){return r("slot",null)}get host(){return s(this)}};export{i as ku4_form}