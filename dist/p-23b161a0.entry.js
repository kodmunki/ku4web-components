import{r as t,h as i,g as s}from"./p-9c15dc03.js";import{t as h}from"./p-545305c8.js";const n=class{constructor(i){t(this,i),this.pattern=".*",this.regex=new RegExp(this.pattern),this.handleBlur=this.handleBlur.bind(this),this.handleInput=this.handleInput.bind(this)}async validate(){return this.assert()}handleInput(){return h.isFalse(this.isValid)&&this.assert()}handleBlur(){return this.assert()}assert(){const{ele:t,validOptions:i,input:s,regex:h}=this;return this.isValid=i?i.some(t=>t===s.value)&&h.test(s.value):t?t.value===s.value&&h.test(s.value):h.test(s.value),this.invalid=!this.isValid,this.isValid}componentWillLoad(){this.input=document.getElementById(this.for),this.ele=document.getElementById(this.element)||document.querySelector(this.element),this.validOptions=h.exists(this.values)?this.values.split(","):this.ele&&"DATALIST"===this.ele.nodeName&&[].slice.call(this.ele.querySelectorAll("option")).map(t=>t.value),this.input.addEventListener("blur",this.handleBlur),this.input.addEventListener("input",this.handleInput)}componentDidUnload(){this.input.removeEventListener("blur",this.handleBlur),this.input.removeEventListener("input",this.handleInput)}render(){return i("slot",null)}get host(){return s(this)}};n.style=":host{visibility:hidden !important}:host([invalid]){visibility:visible !important}";export{n as ku4_validation}