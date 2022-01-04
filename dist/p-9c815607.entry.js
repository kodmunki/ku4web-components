import{r as t,h as s}from"./p-670d415c.js";import{a as i,Y as h,t as e}from"./p-c1068ffa.js";let n=class{constructor(s){t(this,s),this.charIndexes=[],this.reverseCharIndexes=[],this.previousValue="",this.currentValue="",this.touchStart=!1,this.template="",this.ban="",this.pattern="",this.char="_",this.hidden=!1,this.handleFocus=this.handleFocus.bind(this),this.handleBlur=this.handleBlur.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleInput=this.handleInput.bind(this),this.handleTouchStart=this.handleTouchStart.bind(this),this.init()}init(){this.chars=this.char&&new RegExp(this.char),this.banned=this.ban&&new RegExp(this.ban);const t=this.pattern.replace(/[\s\n]/gm,"");return this.patterns=t.substr(1).split(t[0]).map((t=>{try{return t&&new RegExp(t)||null}catch(s){}})),this.charIndexes=this.template.split("").reduce(((t,s,i)=>(this.chars.test(s)&&t.push(i),t)),[]),this.reverseCharIndexes=[...this.charIndexes].reverse(),this}templateHandler(t,s){const{input:h,previousCharIndex:e,previousValue:n,currentValue:r,value:a,char:o}=this,c=i.unmask(n,s,o).length<i.unmask(r,s,o).length?e+1:e;this.init().value=i.mask(i.unmask(a,s,o),t,o),h.setSelectionRange(c,c)}charHandler(t,s){const{value:h,template:e}=this;this.init().value=i.mask(i.unmask(h,e,s),e,t)}get previousCharIndex(){return this.reverseCharIndexes.find((t=>this.selectionStart>t))||this.charIndexes[0]}get value(){return this.currentValue}set value(t){const{chars:s,hidden:i,input:h}=this,e=t.search(s);this.currentValue=t,h.value=i&&e>-1?t.substring(0,e):t}handleTouchStart(){this.touchStart=!0}handleFocus(){if(window.document.documentMode)return;const{input:t,template:s,char:e,chars:n,touchStart:r}=this;this.value=i.mask(i.unmask(this.value,s,e),s,e),h(0).then((()=>{const s=t.value.search(n),i=s<0?t.value.length:s;this.input.setSelectionRange(s<0&&!r?0:i,i),this.touchStart=!1}))}handleBlur(){const{template:t,char:s}=this;e.isEmpty(i.unmask(this.value,t,s))&&(this.value="")}handleKeyDown(t){if(window.document.documentMode)return;const{banned:s,hidden:h,template:e,char:n}=this;t.key&&1===t.key.length&&s&&s.test(t.key)&&!(t.altKey||t.ctrlKey||t.metaKey)&&t.preventDefault(),this.previousValue=h?i.mask(i.unmask(t.target.value,e,n),e,n):t.target.value,this.selectionStart=t.target.selectionStart,this.selectionEnd=t.target.selectionEnd}handleInput(t){if(window.document.documentMode)return;const{input:s,template:h,char:n,chars:r,previousValue:a,banned:o,selectionStart:c,selectionEnd:l,previousCharIndex:u,patterns:d,charIndexes:p,reverseCharIndexes:f}=this;if(r.test(this.previousValue)||"insertFromPaste"===t.inputType||"deleteContentBackward"===t.inputType||"deleteContentForward"===t.inputType||c!==l){if("insertFromPaste"===t.inputType)try{return navigator.clipboard.readText().then((t=>{const u=t.replace(new RegExp(o,"g"),"");if(e.isNullOrEmpty(u))return this.value=a,void s.setSelectionRange(c,c);if(!o||!o.test(u)){let t=a;if(c<l){const s=f.find((t=>t<=c-1)),e=f.find((t=>t<=l-1)),r=p.findIndex((t=>t===s)),o=p.findIndex((t=>t===e)),u=i.unmask(a,h,n),d=u.substring(0,r+1)+u.substring(o+1,a.length);t=i.mask(d,h,n)}const e=p.find((t=>t>=c)),o=p.findIndex((t=>t===e)),d=i.unmask(t,h,n);t=d.substring(0,o)+u+d.substring(o,a.length),this.value=i.mask(t,h,n);const v=p[o+u.length]||this.value.search(r)||this.value.length;s.setSelectionRange(v,v)}})),this.value=a,void s.setSelectionRange(c,c)}catch(t){return this.value=a,void s.setSelectionRange(c,c)}if("deleteContentBackward"!==t.inputType){if("deleteContentForward"===t.inputType){const t=p.find((t=>t>=c)),e=p.findIndex((s=>s===t)),r=i.unmask(a,h,n),o=r.substring(0,e)+r.substring(e+1,a.length);return this.value=i.mask(o,h,n),void s.setSelectionRange(c,c)}if(!(t.altKey||t.ctrlKey||t.metaKey)){if(!t.data)return this.value=a,void s.setSelectionRange(c,c);if(r.test(a.charAt(c))||c===h.length){const e=i.unmask(a,h,n);this.value=i.mask(e+t.data,h,n);const o=this.value.search(r),c=o<0?h.length:o;s.setSelectionRange(c,c);const l=p.findIndex((t=>t>=c));this.validate(t.data,d[l<0?p.length-1:l-1])}else{let e=a;if(c<l){const t=f.find((t=>t<=c-1)),s=f.find((t=>t<=l-1)),r=p.findIndex((s=>s===t)),o=p.findIndex((t=>t===s)),u=i.unmask(a,h,n),d=u.substring(0,r+1)+u.substring(o+1,a.length);e=i.mask(d,h,n)}const r=p.find((t=>t>=c)),o=p.findIndex((t=>t===r)),u=i.unmask(e,h,n);e=u.substring(0,o)+t.data+u.substring(o,a.length);const v=p.find((t=>t>r));this.value=i.mask(e,h,n),s.setSelectionRange(v,v);const m=p.findIndex((t=>t>=v));this.validate(t.data,d[m<0?p.length-1:m-1])}}}else{const t=f.find((t=>t<=c-1)),e=f.find((t=>t<=l-1)),r=p.findIndex((s=>s===t)),o=p.findIndex((t=>t===e)),d=i.unmask(a,h,n);if(r<o){const t=d.substring(0,r+1)+d.substring(o+1,a.length);this.value=i.mask(t,h,n),t&&r>-1?s.setSelectionRange(u+1,u+1):s.setSelectionRange(u,u)}else{const t=d.substring(0,r)+d.substring(o+1,a.length);this.value=i.mask(t,h,n),s.setSelectionRange(u,u)}}}else this.value=a}validate(t,s){const{previousValue:i,input:h,value:n,selectionStart:r}=this;e.exists(s)&&!(s.test(t)||/\(\?[!<=]/.test(s.toString())&&s.test(n))&&(this.value=i,h.setSelectionRange(r,r))}componentWillLoad(){this.input=document.getElementById(this.for),e.exists(this.input)?(this.input.addEventListener("focus",this.handleFocus),this.input.addEventListener("blur",this.handleBlur),this.input.addEventListener("keydown",this.handleKeyDown),this.input.addEventListener("input",this.handleInput),this.input.addEventListener("touchstart",this.handleTouchStart)):console.error("ku4-mask must have a valid `for` referencing target field `id`.")}disconnectedCallback(){this.input&&this.input.removeEventListener&&(this.input.removeEventListener("focus",this.handleFocus),this.input.removeEventListener("blur",this.handleBlur),this.input.removeEventListener("keydown",this.handleKeyDown),this.input.removeEventListener("input",this.handleInput),this.input.removeEventListener("touchstart",this.handleTouchStart))}render(){return s("slot",null)}static get watchers(){return{template:["templateHandler"],char:["charHandler"]}}};n.style=":host{display:none}";export{n as ku4_mask}