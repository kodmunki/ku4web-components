import{r as t,h as i,g as s}from"./p-75db63c9.js";import{t as h,c as e}from"./p-545305c8.js";import{o as n,l as a}from"./p-deb70f68.js";const r=(t,i)=>{t.forEach(i?t=>{t.currentAriaHidden=t.getAttribute("aria-hidden"),t.setAttribute("aria-hidden",i)}:t=>{t.currentAriaHidden?t.setAttribute("aria-hidden",t.currentAriaHidden):t.removeAttribute("aria-hidden")})},o=["A","BUTTON","INPUT","SELECT","TEXTAREA"],c=t=>[].slice.call(t.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')),{tab:u}=a,d=a.tab.shift,p=a.tab.alt,l=a.tab.alt.shift,w=class{constructor(i){t(this,i),this.iframes=[],this.active=!1,this.include="null",this.exclude="null",this.initial="null",this.return="null",this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this),this.handleMouse=this.handleMouse.bind(this)}activeHandler(t){t?this.handleActivate():this.handleDeactivate()}async activate(t){this.lastActiveElement=t||document.querySelector(this.return),this.active=!0}async deactivate(){this.active=!1}handleActivate(){this.lastActiveElement=this.lastActiveElement||document.activeElement,this.lastActiveElement&&this.lastActiveElement.blur&&this.lastActiveElement.blur(),this.addEventListeners(this.elements),r(this.outerElements,!0),this.host.setAttribute("aria-modal","true"),window.requestAnimationFrame(()=>{const t=document.querySelector(this.initial)||this.focusableElements[0]||this.trapElements[0];t.blur(),t.focus(),this.activateTraps()})}handleDeactivate(){this.removeEventListeners(this.elements),this.deactivateTraps(),r(this.outerElements),this.host.removeAttribute("aria-modal"),this.lastActiveElement&&this.lastActiveElement.focus&&this.lastActiveElement.focus(),this.lastActiveElement=null}handleKeyDown(t){if(d.didFire(t)||l.didFire(t))try{if(this.iframes.length>0&&(this.trapElements[1]===t.target||!h.isNull(t.target.getAttribute("ku4-focus-wrap"))||this.iframes.some(i=>i.contains(t.target))))return;if(this.trapElements[0]===t.target)return this.trapElements[1].focus(),n.mute(t);const i=this.focusableElements.indexOf(t.target)-1;return this.focusableElements[i<0?this.focusableElements.length-1:i].focus(),n.mute(t)}catch(t){return n.mute(t)}if(u.didFire(t)||p.didFire(t))try{if(this.iframes.length>0&&(this.trapElements[0]===t.target||!h.isNull(t.target.getAttribute("ku4-focus-wrap"))||this.iframes.some(i=>i.contains(t.target))))return;if(this.trapElements[1]===t.target)return this.trapElements[0].focus(),n.mute(t);const i=this.focusableElements.indexOf(t.target)+1;return this.focusableElements[i>=this.focusableElements.length?0:i].focus(),n.mute(t)}catch(t){return n.mute(t)}}handleKeyUp(t){const i=this.trapElements.indexOf(t.target);return 0===i&&(d.didFire(t)||l.didFire(t))?((this.focusableElements[this.focusableElements.length-1]||this.trapElements[1]).focus(),n.mute(t)):1===i&&(u.didFire(t)||p.didFire(t))?((this.focusableElements[0]||this.trapElements[0]).focus(),n.mute(t)):void 0}handleMouse(t){this.elements.some(i=>i===t.target)||n.mute(t)}addEventListeners(t){t.forEach(t=>t.addEventListener("keydown",this.handleKeyDown,!0)),t.forEach(t=>t.addEventListener("keyup",this.handleKeyUp,!0)),window.addEventListener("click",this.handleMouse,!0),window.addEventListener("mousedown",this.handleMouse,!0),window.addEventListener("mouseup",this.handleMouse,!0)}removeEventListeners(t){t.forEach(t=>t.removeEventListener("keydown",this.handleKeyDown,!0)),t.forEach(t=>t.removeEventListener("keyup",this.handleKeyUp,!0)),window.removeEventListener("click",this.handleMouse,!0),window.removeEventListener("mousedown",this.handleMouse,!0),window.removeEventListener("mouseup",this.handleMouse,!0)}activateTraps(){this.setTraps(0)}deactivateTraps(){this.setTraps(-1)}setTraps(t){[].slice.call(this.host.querySelectorAll("[ku4-focus-trap], [ku4-focus-wrap]")).forEach(i=>i.setAttribute("tabindex",t))}wrap(t){const i=document.createDocumentFragment();i.appendChild(this.createWrapTag()),i.appendChild(t.cloneNode()),i.appendChild(this.createWrapTag()),t.parentNode.replaceChild(i,t)}createTrapTag(){return this.createTag("ku4-focus-trap")}createWrapTag(){return this.createTag("ku4-focus-wrap")}createTag(t){const i=document.createElement("button");return i.setAttribute(t,""),i.setAttribute("tabindex","0"),i.setAttribute("aria-hidden","true"),i.style.position="static",i.style.display="inline",i.style.width="0",i.style.height="0",i.style.margin="0",i.style.padding="0",i.style.border="none",i.style.outline="none",i}initialize(){const t=[].slice.call(this.host.querySelectorAll("*")),i=[].slice.call(document.querySelectorAll(this.include)||[]),s=[].slice.call(document.querySelectorAll(this.exclude)||[]);var h;this.iframes=[].slice.call(this.host.querySelectorAll("iframe")||[]),this.iframes.forEach(t=>this.wrap(t)),this.elements=e([...(h=this.host,[].slice.call(h.querySelectorAll(':not([tabindex="-1"])'))),...i]),this.focusableElements=this.elements.reduce((t,i)=>((t=>{const i=t.getAttribute("tabindex");return(o.includes(t.tagName.toUpperCase())||t.getAttribute("href"))&&(!i||isNaN(i)||parseInt(i)>-1)})(i)&&!this.trapElements.includes(i)&&t.push(i),t),[]),this.outerElements=[...c(document.body),...s].filter(s=>!(s===this.host||t.includes(s)||i.includes(s)))}componentDidLoad(){const t=this.createTrapTag(),i=this.createTrapTag();this.trapElements=[t,i],this.host.insertBefore(t,this.host.firstChild),this.host.appendChild(i),this.initialize(),this.active?this.handleActivate():this.handleDeactivate()}componentDidUnload(){this.active&&this.handleDeactivate()}render(){return i("slot",null)}get host(){return s(this)}static get watchers(){return{active:["activeHandler"]}}};w.style=":host{position:static}";export{w as ku4_focus_trap}