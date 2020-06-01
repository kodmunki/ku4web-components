import{r as t,h as i,g as s}from"./p-75db63c9.js";import{t as h}from"./p-545305c8.js";const n=class{constructor(i){t(this,i),this.pattern=".*",this.flags="",this.method="";const s=this.pattern.split(" "),n=this.flags.split(" "),e=this.method.trim();this.regex=s.map((t,i)=>new RegExp(t,n[i])),this.validationMethod=h.isNullOrEmpty(this.method)?()=>!0:new Function("value",/^return/.test(e)?e:"return "+e),this.handleInput=this.handleInput.bind(this),this.handleChange=this.handleChange.bind(this),this.handleBlur=this.handleBlur.bind(this)}async validate(){return this.assert()}handleInput(){return h.isFalse(this.isValid)&&this.assert()}handleChange(){return h.isFalse(this.isValid)&&this.assert()}handleBlur(){return this.assert()}assert(){const{ele:t,validOptions:i,input:s,regex:h}=this;var n,e,r,o;return this.isValid=(n=h,e=s.value,o=t,((r=i)?r.some(t=>t===e)&&n.every(t=>t.test(e)):o?o.value===e&&n.every(t=>t.test(e)):n.every(t=>t.test(e)))&&this.validationMethod(s.value)),this.invalid=!this.isValid,this.isValid}componentWillLoad(){this.input=document.getElementById(this.for),h.exists(this.input)?(this.ele=document.getElementById(this.element)||document.querySelector(this.element),this.validOptions=h.exists(this.values)?this.values.split(","):this.ele&&"DATALIST"===this.ele.nodeName&&[].slice.call(this.ele.querySelectorAll("option")).map(t=>t.value),this.input.addEventListener("input",this.handleInput),this.input.addEventListener("change",this.handleChange),this.input.addEventListener("blur",this.handleBlur)):console.error("ku4-validation must have a `for` attribute pointing to a target field `id`.")}componentDidUnload(){this.input.removeEventListener("input",this.handleInput),this.input.removeEventListener("change",this.handleChange),this.input.removeEventListener("blur",this.handleBlur)}render(){return i("slot",null)}get host(){return s(this)}};n.style=":host{visibility:hidden !important}:host([invalid]){visibility:visible !important}";export{n as ku4_validation}