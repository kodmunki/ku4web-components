System.register(["./p-99149b5d.system.js","./p-fc2cd283.system.js"],(function(e){"use strict";var t,s,i,n,a;return{setters:[function(e){t=e.r;s=e.h;i=e.g},function(e){n=e.K;a=e.E}],execute:function(){const r=(e,t)=>{if(!t){e.forEach(e=>{if(!e.currentAriaHidden){e.removeAttribute("aria-hidden")}else{e.setAttribute("aria-hidden",e.currentAriaHidden)}})}else{e.forEach(e=>{e.currentAriaHidden=e.getAttribute("aria-hidden");e.setAttribute("aria-hidden",t)})}};const l=e=>e.reduce((e,t)=>{if(!e.includes(t)){e.push(t)}return e},[]);const h=["A","BUTTON","INPUT","SELECT","TEXTAREA"];const c=e=>{const t=e.getAttribute("tabindex");return(h.includes(e.tagName.toUpperCase())||e.getAttribute("href"))&&(!t||isNaN(t)||parseInt(t)>-1)};const o=e=>[].slice.call(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));const u=e=>[].slice.call(e.querySelectorAll(':not([tabindex="-1"])'));const d=":host{position:static}";const m=e("ku4_focus_trap",class{constructor(e){t(this,e);this.active=false;this.include="null";this.exclude="null";this.initial="null";this.return="null";this.handleKeyDown=this.handleKeyDown.bind(this);this.handleKeyUp=this.handleKeyUp.bind(this);this.handleMouse=this.handleMouse.bind(this)}activeHandler(e){e?this.handleActivate():this.handleDeactivate()}async activate(e){this.lastActiveElement=e||document.querySelector(this.return);this.active=true}async deactivate(){this.active=false}handleActivate(){this.lastActiveElement=this.lastActiveElement||document.activeElement;this.addEventListeners(this.elements);this.activateTraps();r(this.outerElements,true);window.requestAnimationFrame(()=>(document.querySelector(this.initial)||this.focusableElements[0]).focus())}handleDeactivate(){this.removeEventListeners(this.elements);this.deactivateTraps();r(this.outerElements);this.lastActiveElement.focus();this.lastActiveElement=null}handleKeyDown(e){if(n.tab.didFire(e)){const t=this.trapElements.indexOf(e.target);if(t===0&&e.shiftKey){this.focusableElements[this.focusableElements.length-1].focus();return a.mute(e)}if(t===this.trapElements.length-1&&!e.shiftKey){this.focusableElements[0].focus();return a.mute(e)}}}handleKeyUp(e){if(n.tab.didFire(e)){const t=this.trapElements.indexOf(e.target);if(t===0&&e.shiftKey){this.focusableElements[this.focusableElements.length-1].focus();return a.mute(e)}if(t===this.trapElements.length-1&&!e.shiftKey){this.focusableElements[0].focus();return a.mute(e)}}}handleMouse(e){if(!this.elements.some(t=>t===e.target)){a.mute(e)}}addEventListeners(e){e.forEach(e=>e.addEventListener("keydown",this.handleKeyDown,true));e.forEach(e=>e.addEventListener("keypress",a.mute,true));e.forEach(e=>e.addEventListener("keyup",this.handleKeyUp,true));window.addEventListener("click",this.handleMouse,true);window.addEventListener("mousedown",this.handleMouse,true);window.addEventListener("mouseup",this.handleMouse,true)}removeEventListeners(e){e.forEach(e=>e.removeEventListener("keydown",this.handleKeyDown,true));e.forEach(e=>e.removeEventListener("keypress",a.mute,true));e.forEach(e=>e.removeEventListener("keyup",this.handleKeyUp,true));window.removeEventListener("click",this.handleMouse,true);window.removeEventListener("mousedown",this.handleMouse,true);window.removeEventListener("mouseup",this.handleMouse,true)}activateTraps(){this.setTraps(0)}deactivateTraps(){this.setTraps(-1)}setTraps(e){[].slice.call(this.host.querySelectorAll("[ku4-focus-trap], [ku4-focus-wrap]")).forEach(t=>t.setAttribute("tabindex",e))}wrap(e){const t=document.createDocumentFragment();t.appendChild(this.createWrapTag());t.appendChild(e.cloneNode());t.appendChild(this.createWrapTag());e.parentNode.replaceChild(t,e)}createTrapTag(){return this.createTag("ku4-focus-trap")}createWrapTag(){return this.createTag("ku4-focus-wrap")}createTag(e){const t=document.createElement("a");t.setAttribute(e,"");t.setAttribute("tabindex","0");t.setAttribute("aria-hidden","true");t.style.position="static";t.style.display="inline";t.style.margin="0";t.style.outline="none";return t}initialize(){const e=[].slice.call(this.host.querySelectorAll("*"));const t=[].slice.call(document.querySelectorAll(this.include)||[]);const s=[].slice.call(document.querySelectorAll(this.exclude)||[]);this.host.querySelectorAll("iframe").forEach(e=>this.wrap(e));this.elements=l([...u(this.host),...t]);this.focusableElements=this.elements.reduce((e,t)=>{if(c(t)){e.push(t)}return e},[]);this.focusableElements.shift();this.focusableElements.pop();this.outerElements=[...o(document.body),...s].filter(s=>!(s===this.host||e.includes(s)||t.includes(s)))}componentWillLoad(){const e=this.createTrapTag();const t=this.createTrapTag();this.trapElements=[e,t];this.host.insertBefore(e,this.host.firstChild);this.host.appendChild(t)}componentDidLoad(){this.initialize();if(this.active){this.handleActivate()}}componentDidUnload(){if(this.active){this.handleDeactivate()}}render(){return s("slot",null)}get host(){return i(this)}static get watchers(){return{active:["activeHandler"]}}});m.style=d}}}));