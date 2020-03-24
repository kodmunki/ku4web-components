import{r as t,h as e,H as i,g as a}from"./p-a13d72ed.js";import{t as s}from"./p-408b44e9.js";const l=class{constructor(e){t(this,e)}handleInput(){this.empty=s.isNullOrEmpty(this.input.value),this.empty?this.input.classList.add("ku4-empty"):this.input.classList.remove("ku4-empty")}componentWillLoad(){this.handleInput=this.handleInput.bind(this),this.input=this.host.querySelector("input, select"),this.empty=s.isNullOrEmpty(this.input.value),this.placeholder=this.input.getAttribute("placeholder"),this.empty&&this.input.classList.add("ku4-empty"),this.input.addEventListener("input",this.handleInput)}componentDidUnload(){this.input.removeEventListener("input",this.handleInput)}render(){const{empty:t,value:a,placeholder:s}=this;return e(i,null,e("label",{htmlFor:this.for,class:`value ${t?"empty":""} ${s?"placeholder":""}`},a||s),e("slot",null))}get host(){return a(this)}};l.style=":host{position:relative}::slotted(*){width:100%;padding:var(--ku4-label-empty-padding, 10px 4px 2px);-webkit-transition:padding 0.1s ease;transition:padding 0.1s ease}::slotted(.ku4-empty){padding:var(--ku4-label-input-padding, 6px 4px 6px);-webkit-transition:padding 0.1s ease;transition:padding 0.1s ease}.value{position:absolute;display:inline;top:var(--ku4-label-top, 4px);left:var(--ku4-label-left, 8px);padding:var(--ku4-label-padding, 0);font-size:inherit;background-color:var(--ku4-label-background-color, transparent);color:inherit;z-index:1;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;white-space:nowrap}.value.empty{color:#ccc;-webkit-transition:all 0.2s ease;transition:all 0.2s ease}.value.placeholder{opacity:1;-webkit-transition:all 0.4s ease;transition:all 0.4s ease}.value.empty.placeholder{color:#888;opacity:0;-webkit-transition:all 0.1s ease;transition:all 0.1s ease}";export{l as ku4_label}