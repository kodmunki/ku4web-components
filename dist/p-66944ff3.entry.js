import{r as t,h as i,H as s,g as h}from"./p-79bbd146.js";import{t as e,M as n}from"./p-545305c8.js";const r=class{constructor(i){t(this,i),this.pattern=".*",this.flags="",this.method="";const s=this.pattern.split(" "),h=this.flags.split(" "),n=this.method.trim();this.regex=s.map((t,i)=>new RegExp(t,h[i])),this.validationMethod=e.isNullOrEmpty(this.method)?()=>!0:new Function("value",/^return/.test(n)?n:"return "+n),this.handleInput=this.handleInput.bind(this),this.handleChange=this.handleChange.bind(this),this.handleBlur=this.handleBlur.bind(this)}async validate(){return this.assert()}handleInput(){return e.isFalse(this.isValid)&&this.assert()}handleChange(){return e.isFalse(this.isValid)&&this.assert()}handleBlur(){return this.assert()}assert(){const{ele:t,validOptions:i,input:s,regex:h}=this;var e,n,r,a;return this.isValid=(e=h,n=s.value,a=t,((r=i)?r.some(t=>t===n)&&e.every(t=>t.test(n)):a?a.value===n&&e.every(t=>t.test(n)):e.every(t=>t.test(n)))&&this.validationMethod(s.value)),this.invalid=!this.isValid,s.setAttribute("aria-invalid",this.invalid),this.isValid}componentWillLoad(){if(this.input=document.getElementById(this.for),e.exists(this.input)){this.ele=document.getElementById(this.element)||document.querySelector(this.element),this.validOptions=e.exists(this.values)?this.values.split(","):this.ele&&"DATALIST"===this.ele.nodeName&&[].slice.call(this.ele.querySelectorAll("option")).map(t=>t.value),this.input.addEventListener("input",this.handleInput),this.input.addEventListener("change",this.handleChange),this.input.addEventListener("blur",this.handleBlur);const t=this.input.getAttribute("aria-describedby"),i=this.host.getAttribute("id")||n();this.host.setAttribute("id",i),e.isNullOrEmpty(t)&&this.input.setAttribute("aria-describedby",i)}else console.error("ku4-validation must have a `for` attribute pointing to a target field `id`.")}componentDidUnload(){this.input.removeEventListener("input",this.handleInput),this.input.removeEventListener("change",this.handleChange),this.input.removeEventListener("blur",this.handleBlur)}render(){return i(s,{role:"alert","aria-live":"assertive"},i("slot",null))}get host(){return h(this)}};r.style=":host{visibility:hidden !important}:host([invalid]){visibility:visible !important}";export{r as ku4_validation}