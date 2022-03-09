import{r as i,c as t,h as s,H as h,g as e}from"./p-2aac6c90.js";import{t as a,R as n,Y as r}from"./p-c1068ffa.js";const d=class{constructor(s){i(this,s),this.didValidate=t(this,"validate",7),this.pattern=".*",this.flags="",this.method="";const h=this.pattern.split(" "),e=this.flags.split(" "),n=this.method.trim();this.regex=h.map(((i,t)=>new RegExp(i,e[t]))),this.validationMethod=a.isNullOrEmpty(n)?()=>!0:new Function("value",/^return/.test(n)?n:`return ${n}`),this.handleInput=this.handleInput.bind(this),this.handleChange=this.handleChange.bind(this),this.handleBlur=this.handleBlur.bind(this),this.handleReset=this.handleReset.bind(this)}async validate(){return this.assert()}handleInput(){("file"===this.input.type||a.isFalse(this.isValid))&&this.assert()}handleChange(){("file"===this.input.type||a.isFalse(this.isValid))&&this.assert()}handleBlur(){this.assert()}handleReset(){this.isValid=!0,this.invalid=!this.isValid,this.input.setAttribute("aria-invalid",this.invalid)}assert(){const{ele:i,validOptions:t,input:s,regex:h,checked:e}=this;if("file"===s.type&&a.isNullOrEmpty(s.value))return;const n=this.isValid;var r,d,l,o;return this.isValid=!!this.disabled||(a.isBool(e)?s.checked===e:(r=h,d=s.value,o=i,((l=t)?l.some((i=>i===d))&&r.every((i=>i.test(d))):o?o.value===d&&r.every((i=>i.test(d))):r.every((i=>i.test(d))))&&this.validationMethod(s.value))),this.invalid=!this.isValid,s.setAttribute("aria-invalid",this.invalid),a.isFalse(n)&&this.isValid&&this.didValidate.emit(this.isValid),this.isValid}componentWillLoad(){if(this.input=document.getElementById(this.for),a.exists(this.input)){this.ele=document.getElementById(this.element)||document.querySelector(this.element),this.validOptions=a.exists(this.values)?this.values.split(","):this.ele&&"DATALIST"===this.ele.nodeName&&[].slice.call(this.ele.querySelectorAll("option")).map((i=>i.value));const i=this.input.getAttribute("aria-describedby"),t=this.host.getAttribute("id")||n.uid();this.host.setAttribute("id",t),a.isNullOrEmpty(i)&&this.input.setAttribute("aria-describedby",t),r(0).then((()=>{this.input.addEventListener("input",this.handleInput),this.input.addEventListener("change",this.handleChange),this.input.addEventListener("blur",this.handleBlur)})),a.isFunction(this.host.closest)&&(this.form=this.host.closest("form"),this.form&&this.form.addEventListener&&this.form.addEventListener("reset",this.handleReset))}else console.error("ku4-validation must have a valid `for` referencing target field `id`.")}disconnectedCallback(){this.input&&this.input.removeEventListener&&(this.input.removeEventListener("input",this.handleInput),this.input.removeEventListener("change",this.handleChange),this.input.removeEventListener("blur",this.handleBlur)),this.form&&this.form.removeEventListener&&this.form.removeEventListener("reset",this.handleReset)}render(){return s(h,{role:"alert","aria-live":"assertive"},s("slot",null))}get host(){return e(this)}};d.style=":host{visibility:hidden !important}:host([invalid]){visibility:visible !important}:host([disabled]){visibility:hidden !important}:host([invalid][disabled]){visibility:hidden !important}:host([invalid][hidden]){visibility:hidden !important}";export{d as ku4_validation}