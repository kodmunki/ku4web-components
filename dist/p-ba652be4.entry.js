import{r as t,h as i,g as s}from"./p-1589ba6b.js";import{t as h}from"./p-545305c8.js";const n=class{constructor(i){t(this,i),this.pattern=".*",this.flags="";const s=this.pattern.split(" "),h=this.flags.split(" ");this.regex=s.map((t,i)=>new RegExp(t,h[i])),this.handleBlur=this.handleBlur.bind(this),this.handleInput=this.handleInput.bind(this)}async validate(){return this.assert()}handleInput(){return h.isFalse(this.isValid)&&this.assert()}handleBlur(){return this.assert()}assert(){const{ele:t,validOptions:i,input:s,regex:h}=this;var n,o,r,e;return this.isValid=(n=h,o=s.value,e=t,(r=i)?r.some(t=>t===o)&&n.every(t=>t.test(o)):e?e.value===o&&n.every(t=>t.test(o)):n.every(t=>t.test(o))),this.invalid=!this.isValid,this.isValid}componentWillLoad(){this.input=document.getElementById(this.for),h.exists(this.input)?(this.ele=document.getElementById(this.element)||document.querySelector(this.element),this.validOptions=h.exists(this.values)?this.values.split(","):this.ele&&"DATALIST"===this.ele.nodeName&&[].slice.call(this.ele.querySelectorAll("option")).map(t=>t.value),this.input.addEventListener("blur",this.handleBlur),this.input.addEventListener("input",this.handleInput)):console.error("ku4-validation must have a `for` attribute pointing to a target field `id`.")}componentDidUnload(){this.input.removeEventListener("blur",this.handleBlur),this.input.removeEventListener("input",this.handleInput)}render(){return i("slot",null)}get host(){return s(this)}};n.style=":host{visibility:hidden !important}:host([invalid]){visibility:visible !important}";export{n as ku4_validation}