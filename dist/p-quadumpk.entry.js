import{r as t,h as s,H as l,g as e}from"./p-d5339fd8.js";import{a as r}from"./p-8be88260.js";const a=class{constructor(s){t(this,s)}handleInput(t){this.empty=r.isNullOrEmpty(t.target.value)}componentWillLoad(){const t=this.host.querySelector("input");this.empty=r.isNullOrEmpty(t.value),this.placeholder=t.getAttribute("placeholder")}render(){const{empty:t,value:e,placeholder:r}=this;return s(l,null,s("label",{htmlFor:this.for,class:`value ${t?"empty":""} ${r?"placeholder":""}`},e||r),s("slot",null))}get host(){return e(this)}static get style(){return":host{position:relative}.value{position:absolute;display:inline;top:var(--ku4-label-top,4px);left:var(--ku4-label-left,8px);font-size:inherit;color:inherit;z-index:1;white-space:nowrap}.value,.value.empty{-webkit-transition:all .2s ease;transition:all .2s ease}.value.empty{color:#ccc}.value.placeholder{opacity:1;-webkit-transition:all .4s ease;transition:all .4s ease}.value.empty.placeholder{color:#888;opacity:0;-webkit-transition:all .1s ease;transition:all .1s ease}"}};export{a as ku4_label};