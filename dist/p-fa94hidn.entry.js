import{r as t,h as i,g as s}from"./p-d5339fd8.js";import"./p-8be88260.js";import{a as e,b as h}from"./p-e28903c7.js";const n=(t,i)=>{t.forEach(i?t=>{t.currentAriaHidden=t.getAttribute("aria-hidden"),t.setAttribute("aria-hidden",i)}:t=>{t.currentAriaHidden?t.removeAttribute("aria-hidden"):t.setAttribute("aria-hidden",t.currentAriaHidden)})},a=["A","BUTTON","INPUT","SELECT","TEXTAREA"],r=t=>[].slice.call(t.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')),o=class{constructor(i){t(this,i),this.active=!1,this.include="null",this.exclude="null",this.initial="null",this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this),this.handleMouse=this.handleMouse.bind(this)}activeHandler(t){t?this.handleActivate():this.handleDeactivate()}async activate(t){this.lastActiveElement=t,this.active=!0}async deactivate(){this.active=!1}handleActivate(){this.lastActiveElement=this.lastActiveElement||document.activeElement,this.addEventListeners(this.elements),n(this.outerElements,!0),(document.querySelector(this.initial)||this.focusableElements[0]).focus()}handleDeactivate(){this.removeEventListeners(this.elements),n(this.outerElements),this.lastActiveElement.focus(),this.lastActiveElement=null}handleKeyDown(t){if(e.tab.didFire(t)){const i=this.trapElements.indexOf(t.target);if(0===i&&t.shiftKey)return this.focusableElements[this.focusableElements.length-1].focus(),h.mute(t);if(i===this.trapElements.length-1&&!t.shiftKey)return this.focusableElements[0].focus(),h.mute(t)}}handleKeyUp(t){if(e.tab.didFire(t)){const i=this.trapElements.indexOf(t.target);if(0===i&&t.shiftKey)return this.focusableElements[this.focusableElements.length-1].focus(),h.mute(t);if(i===this.trapElements.length-1&&!t.shiftKey)return this.focusableElements[0].focus(),h.mute(t)}}handleMouse(t){this.elements.some(i=>i===t.target)||h.mute(t)}addEventListeners(t){t.forEach(t=>t.addEventListener("keydown",this.handleKeyDown,!0)),t.forEach(t=>t.addEventListener("keypress",h.mute,!0)),t.forEach(t=>t.addEventListener("keyup",this.handleKeyUp,!0)),window.addEventListener("click",this.handleMouse,!0),window.addEventListener("mousedown",this.handleMouse,!0),window.addEventListener("mouseup",this.handleMouse,!0)}removeEventListeners(t){t.forEach(t=>t.removeEventListener("keydown",this.handleKeyDown,!0)),t.forEach(t=>t.removeEventListener("keyup",h.mute,!0)),t.forEach(t=>t.removeEventListener("keypress",h.mute,!0)),window.removeEventListener("click",this.handleMouse,!0),window.removeEventListener("mouseup",this.handleMouse,!0),window.removeEventListener("mousedown",this.handleMouse,!0)}clearTimeout(){this.timeout&&this.timeout.clear()}wrap(t){const i=document.createDocumentFragment();i.appendChild(this.createWrapTag()),i.appendChild(t.cloneNode()),i.appendChild(this.createWrapTag()),t.parentNode.replaceChild(i,t)}createTrapTag(){return this.createTag("ku4-focus-trap")}createWrapTag(){return this.createTag("ku4-focus-wrap")}createTag(t){const i=document.createElement("a");return i.setAttribute(t,""),i.setAttribute("tabindex","0"),i.setAttribute("aria-hidden","true"),i.setAttribute("style","position: static; display: inline; margin: 0; outline: none"),i}initialize(){const t=[].slice.call(this.host.querySelectorAll("*")),i=[].slice.call(document.querySelectorAll(this.include)||[]),s=[].slice.call(document.querySelectorAll(this.exclude)||[]);var e;document.querySelectorAll("iframe").forEach(t=>this.wrap(t)),this.elements=[...(e=this.host,[].slice.call(e.querySelectorAll(':not([tabindex="-1"])'))),...i].reduce((t,i)=>(t.includes(i)||t.push(i),t),[]),this.focusableElements=this.elements.reduce((t,i)=>((t=>{const i=t.getAttribute("tabindex");return(a.includes(t.tagName.toUpperCase())||t.getAttribute("href"))&&(!i||isNaN(i)||parseInt(i)>-1)})(i)&&t.push(i),t),[]),this.focusableElements.shift(),this.focusableElements.pop(),this.outerElements=[...r(document.body),...s].filter(s=>!(s===this.host||t.includes(s)||i.includes(s)))}componentWillLoad(){const t=this.createTrapTag(),i=this.createTrapTag();this.trapElements=[t,i],this.host.insertBefore(t,this.host.firstChild),this.host.appendChild(i),this.initialize()}componentDidLoad(){this.active&&this.handleActivate()}componentDidUnload(){this.active&&this.handleDeactivate(),this.clearTimeout()}render(){return i("slot",null)}get host(){return s(this)}static get watchers(){return{active:["activeHandler"]}}static get style(){return":host{position:static;display:inline-block}"}};export{o as ku4_focus_trap};