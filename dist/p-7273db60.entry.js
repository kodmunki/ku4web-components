import{r as i,h as t,H as s,g as e}from"./p-2aac6c90.js";import{Y as h,t as a,R as l}from"./p-c1068ffa.js";const o=class{constructor(t){i(this,t),this.handleFocus=this.handleFocus.bind(this),this.handleChange=this.handleChange.bind(this),this.handleInput=this.handleInput.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this),this.handleReset=this.handleReset.bind(this)}handleFocus(){h(100).then((()=>{this.empty=a.isNullOrEmpty(this.field.value)}))}handleChange(){this.empty=a.isNullOrEmpty(this.field.value)}handleInput(){this.empty=a.isNullOrEmpty(this.field.value)}handleKeyUp(){this.empty=a.isNullOrEmpty(this.field.value)}handleReset(){this.empty=!0}componentWillLoad(){this.field=this.host.querySelector("input, select, textarea"),this.empty=a.isNullOrEmpty(this.field.value),this.placeholder=this.field.getAttribute("placeholder"),this.field.addEventListener("focus",this.handleFocus),this.field.addEventListener("change",this.handleChange),this.field.addEventListener("input",this.handleInput),this.field.addEventListener("keyup",this.handleKeyUp);const i=this.field.getAttribute("aria-labelledby"),t=this.host.getAttribute("id")||l.uid();this.host.setAttribute("id",t),a.isNullOrEmpty(i)&&this.field.setAttribute("aria-labelledby",t),a.isFunction(this.host.closest)&&(this.form=this.host.closest("form"),this.form&&this.form.addEventListener&&this.form.addEventListener("reset",this.handleReset))}disconnectedCallback(){this.field&&this.field.removeEventListener&&(this.field.removeEventListener("focus",this.handleFocus),this.field.removeEventListener("change",this.handleChange),this.field.removeEventListener("input",this.handleInput),this.field.removeEventListener("keyup",this.handleKeyUp),this.form&&this.form.removeEventListener&&this.form.removeEventListener("reset",this.handleReset))}render(){const{empty:i,value:e,placeholder:h}=this;return t(s,null,t("label",{htmlFor:this.for,class:i?"empty":""},e||h),t("slot",null))}get host(){return e(this)}};o.style=":host{position:relative;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:12px;line-height:14px}::slotted(*){padding:6px;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;font-size:18px;-webkit-appearance:none}label{position:absolute;display:var(--ku4-label-display, inline);top:var(--ku4-label-top, -6px);left:var(--ku4-label-left, 8px);padding:var(--ku4-label-padding, 0 4px);font-size:inherit;line-height:inherit;background-color:var(--ku4-label-background-color, inherit);color:inherit;z-index:1;white-space:nowrap;-webkit-transition:all 0.2s ease;transition:all 0.2s ease}label.empty{opacity:0;-webkit-transition:all 0.1s ease;transition:all 0.1s ease}";export{o as ku4_label}