import{r as t,h as s}from"./p-80e7f1ae.js";import{u as e,c as i,Z as h,t as n}from"./p-ce48150b.js";const r=class{constructor(s){t(this,s),this.charIndexes=[],this.reverseCharIndexes=[],this.previousValue="",this.currentValue="",this.ban="",this.pattern="",this.char="_",this.hidden=!1,this.handleFocus=this.handleFocus.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleInput=this.handleInput.bind(this),this.init()}init(){return this.charIndexes=this.template.split("").reduce((t,s,e)=>(s===this.char&&t.push(e),t),[]),this.reverseCharIndexes=[...this.charIndexes].reverse(),this.banned=this.ban&&new RegExp(this.ban),this.regex=this.pattern&&this.pattern.substr(1).split(this.pattern[0]).map(t=>t&&new RegExp(t)||null),this}templateHandler(t,s){const{value:h,char:n}=this;this.init().value=e(i(h,s,n),t,n)}charHandler(t,s){const{value:h,template:n}=this;this.init().value=e(i(h,n,s),n,t)}get previousCharIndex(){return this.reverseCharIndexes.find(t=>this.selectionStart>t)||this.charIndexes[0]}get value(){return this.currentValue}set value(t){const{char:s,hidden:e,input:i}=this,h=t.indexOf(s);this.currentValue=t,i.value=e&&h>-1?t.substring(0,h):t}handleFocus(){const{input:t,template:s,char:n}=this;this.value=e(i(this.value,s,n),s,this.char),h(0).then(()=>{const s=t.value.indexOf(n),e=s>-1?s:t.value.length;this.input.setSelectionRange(e,e)})}handleKeyDown(t){const{banned:s,hidden:h,template:n,char:r,charIndexes:a,selectionStart:o}=this;t.key&&1===t.key.length&&s&&s.test(t.key)&&!(t.altKey||t.ctrlKey||t.metaKey)&&t.preventDefault(),this.previousValue=h?e(i(t.target.value,n,r),n,r):t.target.value,this.selectionStart=t.target.selectionStart,this.selectionEnd=t.target.selectionEnd,this.currentCharIndex=a.findIndex(t=>t===o)}handleInput(t){const{input:s,template:h,char:r,regex:a,previousValue:o,selectionStart:c,selectionEnd:l,currentCharIndex:d,previousCharIndex:u,charIndexes:p,reverseCharIndexes:m}=this;if(!(t.altKey||t.ctrlKey||t.metaKey))if(new RegExp(this.char).test(this.previousValue)||"deleteContentBackward"===t.inputType||"deleteContentForward"===t.inputType)if("deleteContentBackward"===t.inputType){const t=m.find(t=>t<=c-1),n=m.find(t=>t<=l-1),a=p.findIndex(s=>s===t),d=p.findIndex(t=>t===n),f=i(o,h,r);if(a<d){const t=f.substring(0,a+1)+f.substring(d+1,o.length);this.value=e(t,h,r),t?s.setSelectionRange(u+1,u+1):s.setSelectionRange(u,u)}else{const t=f.substring(0,a)+f.substring(d+1,o.length);this.value=e(t,h,r),s.setSelectionRange(u,u)}}else if("deleteContentForward"===t.inputType){const t=p.find(t=>t>=c),n=p.findIndex(s=>s===t),a=i(o,h,r),l=a.substring(0,n)+a.substring(n+1,o.length);this.value=e(l,h,r),s.setSelectionRange(c,c)}else{if(n.exists(a[d])&&!a[d].test(t.data))return this.value=o,void s.setSelectionRange(c,c);if(o.charAt(c)===r||c===h.length){const n=i(o,h,r);this.value=e(n+t.data,h,r);const a=this.value.indexOf(r),c=a<0?h.length:a;s.setSelectionRange(c,c)}else{const n=c+1,a=this.charIndexes.findIndex(t=>t===c),l=i(o,h,r),d=l.substring(0,a)+t.data+l.substring(a,o.length);this.value=e(d,h,this.char),s.setSelectionRange(n,n)}}else this.value=o}componentWillLoad(){this.input=document.getElementById(this.for),this.input.addEventListener("focus",this.handleFocus),this.input.addEventListener("keydown",this.handleKeyDown),this.input.addEventListener("input",this.handleInput)}disconnectedCallback(){this.input.removeEventListener("focus",this.handleFocus),this.input.removeEventListener("keydown",this.handleKeyDown),this.input.removeEventListener("input",this.handleInput)}render(){return s("slot",null)}static get watchers(){return{template:["templateHandler"],char:["charHandler"]}}};r.style=":host{display:none}";export{r as ku4_mask}