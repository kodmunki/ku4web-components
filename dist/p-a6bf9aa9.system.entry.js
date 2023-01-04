var __awaiter=this&&this.__awaiter||function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,a){function s(e){try{u(n.next(e))}catch(t){a(t)}}function o(e){try{u(n["throw"](e))}catch(t){a(t)}}function u(e){e.done?r(e.value):i(e.value).then(s,o)}u((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return u([e,t])}}function u(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(a=s[0]&2?i["return"]:s[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;if(i=0,a)s=[s[0]&2,a.value];switch(s[0]){case 0:case 1:a=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;i=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){r.label=s[1];break}if(s[0]===6&&r.label<a[1]){r.label=a[1];a=s;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(s);break}if(a[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(o){s=[6,o];i=0}finally{n=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,a;n<i;n++){if(a||!(n in t)){if(!a)a=Array.prototype.slice.call(t,0,n);a[n]=t[n]}}return e.concat(a||Array.prototype.slice.call(t))};System.register(["./p-d808aef5.system.js","./p-5759a316.system.js","./p-d7289b1a.system.js"],(function(e){"use strict";var t,r,n,i,a,s,o;return{setters:[function(e){t=e.r;r=e.h;n=e.g},function(e){i=e.t;a=e.o},function(e){s=e.E;o=e.K}],execute:function(){var u=function(e,t){if(!t){e.forEach((function(e){if(!e.currentAriaHidden){e.removeAttribute("aria-hidden")}else{e.setAttribute("aria-hidden",e.currentAriaHidden)}}))}else{e.forEach((function(e){e.currentAriaHidden=e.getAttribute("aria-hidden");e.setAttribute("aria-hidden",t)}))}};var l=["A","BUTTON","INPUT","SELECT","TEXTAREA"];var c=function(e){var t=e.getAttribute("tabindex");return(l.includes(e.tagName.toUpperCase())||e.getAttribute("href"))&&(!t||isNaN(t)||parseInt(t)>-1)};var h=function(e){return[].slice.call(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))};var d=function(e){return[].slice.call(e.querySelectorAll(':not([tabindex="-1"])'))};var f=":host{position:static}";var p=o.tab;var v=o.tab.shift;var m=o.tab.alt;var y=o.tab.alt.shift;var E=e("ku4_focus_trap",function(){function e(e){t(this,e);this.iframes=[];this.active=false;this.include=undefined;this.exclude=undefined;this.excludeShadow=undefined;this.initial=undefined;this.return=undefined;this.handleKeyDown=this.handleKeyDown.bind(this);this.handleKeyUp=this.handleKeyUp.bind(this);this.handleMouse=this.handleMouse.bind(this)}e.prototype.activeHandler=function(e){e?this.handleActivate():this.handleDeactivate()};e.prototype.activate=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.lastActiveElement=e||document.querySelector(this.return||null);this.active=true;return[2]}))}))};e.prototype.deactivate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.active=false;return[2]}))}))};e.prototype.handleActivate=function(){var e=this;this.lastActiveElement=this.lastActiveElement||document.activeElement;if(this.lastActiveElement&&this.lastActiveElement.blur){this.lastActiveElement.blur()}this.addEventListeners(this.elements);u(this.outerElements,true);window.requestAnimationFrame((function(){var t=document.querySelector(e.initial||null)||e.focusableElements[0]||e.trapElements[0];t.blur();t.focus();e.activateTraps()}))};e.prototype.handleDeactivate=function(){this.removeEventListeners(this.elements);this.deactivateTraps();u(this.outerElements);if(this.lastActiveElement&&this.lastActiveElement.focus){this.lastActiveElement.focus()}this.lastActiveElement=null};e.prototype.handleKeyDown=function(e){if(v.didFire(e)||y.didFire(e)){try{if(this.iframes.length>0&&(this.trapElements[1]===e.target||!i.isNull(e.target.getAttribute("ku4-focus-wrap"))||this.iframes.some((function(t){return t.contains(e.target)})))){return}if(this.trapElements[0]===e.target){this.trapElements[1].focus();return s.mute(e)}var t=this.focusableElements.indexOf(e.target)-1;var r=t<0?this.focusableElements.length-1:t;this.focusableElements[r].focus();return s.mute(e)}catch(e){return s.mute(e)}}if(p.didFire(e)||m.didFire(e)){try{if(this.iframes.length>0&&(this.trapElements[0]===e.target||!i.isNull(e.target.getAttribute("ku4-focus-wrap"))||this.iframes.some((function(t){return t.contains(e.target)})))){return}if(this.trapElements[1]===e.target){this.trapElements[0].focus();return s.mute(e)}var t=this.focusableElements.indexOf(e.target)+1;var r=t>=this.focusableElements.length?0:t;this.focusableElements[r].focus();return s.mute(e)}catch(e){return s.mute(e)}}};e.prototype.handleKeyUp=function(e){var t=this.trapElements.indexOf(e.target);if(t===0&&(v.didFire(e)||y.didFire(e))){var r=this.focusableElements[this.focusableElements.length-1]||this.trapElements[1];r.focus();return s.mute(e)}if(t===1&&(p.didFire(e)||m.didFire(e))){var r=this.focusableElements[0]||this.trapElements[0];r.focus();return s.mute(e)}};e.prototype.handleMouse=function(e){if(!this.elements.some((function(t){return t===e.target}))){s.mute(e)}};e.prototype.addEventListeners=function(e){var t=this;e.forEach((function(e){return e.addEventListener("keydown",t.handleKeyDown,{passive:true})}));e.forEach((function(e){return e.addEventListener("keyup",t.handleKeyUp,{passive:true})}));window.addEventListener("click",this.handleMouse,{passive:true});window.addEventListener("mousedown",this.handleMouse,{passive:true});window.addEventListener("mouseup",this.handleMouse,{passive:true});window.addEventListener("touchstart",this.handleMouse,{passive:true})};e.prototype.removeEventListeners=function(e){var t=this;e.forEach((function(e){return e.removeEventListener("keydown",t.handleKeyDown)}));e.forEach((function(e){return e.removeEventListener("keyup",t.handleKeyUp)}));window.removeEventListener("click",this.handleMouse);window.removeEventListener("mousedown",this.handleMouse);window.removeEventListener("mouseup",this.handleMouse);window.addEventListener("touchstart",this.handleMouse,{passive:true})};e.prototype.activateTraps=function(){this.setTraps(0)};e.prototype.deactivateTraps=function(){this.setTraps(-1)};e.prototype.setTraps=function(e){[].slice.call(this.host.querySelectorAll("[ku4-focus-trap], [ku4-focus-wrap]")).forEach((function(t){return t.setAttribute("tabindex",e)}))};e.prototype.wrap=function(e){var t=document.createDocumentFragment();t.appendChild(this.createWrapTag());t.appendChild(e.cloneNode());t.appendChild(this.createWrapTag());e.parentNode.replaceChild(t,e)};e.prototype.createTrapTag=function(){return this.createTag("ku4-focus-trap")};e.prototype.createWrapTag=function(){return this.createTag("ku4-focus-wrap")};e.prototype.createTag=function(e){var t=document.createElement("button");t.setAttribute(e,"");t.setAttribute("tabindex","0");t.setAttribute("aria-hidden","true");t.style.position="static";t.style.display="block";t.style.width="0";t.style.height="0";t.style.margin="0";t.style.padding="0";t.style.border="none";t.style.outline="none";return t};e.prototype.initialize=function(){var e=this;var t=[].slice.call(this.host.querySelectorAll("*"));var r=[].slice.call(document.querySelectorAll(this.include||null)||[]);var n=[].slice.call(document.querySelectorAll(this.exclude)||[]);var s=[];(this.excludeShadow||"").split(",").forEach((function(e){if(i.isNullOrEmpty(e)){return}try{var t=e.trim().replace(/\s/,"|").split("|");var r=document.querySelector(t[0]).shadowRoot.querySelectorAll(t[1]);s=s.concat([].slice.call(r||[]))}catch(n){console.error("Invalid shadow selector",e)}}));this.iframes=[].slice.call(this.host.querySelectorAll("iframe")||[]);this.iframes.forEach((function(t){return e.wrap(t)}));this.elements=a(__spreadArray(__spreadArray([],d(this.host),true),r,true));this.focusableElements=this.elements.reduce((function(t,r){if(c(r)&&!e.trapElements.includes(r)){t.push(r)}return t}),[]);this.outerElements=__spreadArray(__spreadArray(__spreadArray([],h(document.body),true),n,true),s,true).filter((function(n){return!(n===e.host||t.includes(n)||r.includes(n))}))};e.prototype.componentDidLoad=function(){var e=this.createTrapTag();var t=this.createTrapTag();this.trapElements=[e,t];this.host.insertBefore(e,this.host.firstChild);this.host.appendChild(t);this.initialize();if(this.active){this.handleActivate()}else{this.handleDeactivate()}};e.prototype.disconnectedCallback=function(){if(this.active){this.handleDeactivate()}};e.prototype.render=function(){return r("slot",null)};Object.defineProperty(e.prototype,"host",{get:function(){return n(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{active:["activeHandler"]}},enumerable:false,configurable:true});return e}());E.style=f}}}));