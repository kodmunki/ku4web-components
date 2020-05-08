var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function s(t){try{u(r.next(t))}catch(e){a(e)}}function o(t){try{u(r["throw"](t))}catch(e){a(e)}}function u(t){t.done?n(t.value):i(t.value).then(s,o)}u((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(t){return function(e){return u([t,e])}}function u(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(a=s[0]&2?i["return"]:s[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;if(i=0,a)s=[s[0]&2,a.value];switch(s[0]){case 0:case 1:a=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;i=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){n.label=s[1];break}if(s[0]===6&&n.label<a[1]){n.label=a[1];a=s;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(s);break}if(a[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(o){s=[6,o];i=0}finally{r=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var a=arguments[e],s=0,o=a.length;s<o;s++,i++)r[i]=a[s];return r};System.register(["./p-c6b303a9.system.js","./p-11edeccb.system.js","./p-e2bd0a1f.system.js"],(function(t){"use strict";var e,n,r,i,a,s,o;return{setters:[function(t){e=t.r;n=t.h;r=t.g},function(t){i=t.t;a=t.c},function(t){s=t.o;o=t.l}],execute:function(){var u=function(t,e){if(!e){t.forEach((function(t){if(!t.currentAriaHidden){t.removeAttribute("aria-hidden")}else{t.setAttribute("aria-hidden",t.currentAriaHidden)}}))}else{t.forEach((function(t){t.currentAriaHidden=t.getAttribute("aria-hidden");t.setAttribute("aria-hidden",e)}))}};var l=["A","BUTTON","INPUT","SELECT","TEXTAREA"];var c=function(t){var e=t.getAttribute("tabindex");return(l.includes(t.tagName.toUpperCase())||t.getAttribute("href"))&&(!e||isNaN(e)||parseInt(e)>-1)};var h=function(t){return[].slice.call(t.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))};var d=function(t){return[].slice.call(t.querySelectorAll(':not([tabindex="-1"])'))};var f=":host{position:static}";var p=o.tab;var v=o.tab.shift;var m=o.tab.alt;var y=o.tab.alt.shift;var b=t("ku4_focus_trap",function(){function t(t){e(this,t);this.iframes=[];this.active=false;this.include="null";this.exclude="null";this.initial="null";this.return="null";this.handleKeyDown=this.handleKeyDown.bind(this);this.handleKeyUp=this.handleKeyUp.bind(this);this.handleMouse=this.handleMouse.bind(this)}t.prototype.activeHandler=function(t){t?this.handleActivate():this.handleDeactivate()};t.prototype.activate=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.lastActiveElement=t||document.querySelector(this.return);this.active=true;return[2]}))}))};t.prototype.deactivate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.active=false;return[2]}))}))};t.prototype.handleActivate=function(){var t=this;this.lastActiveElement=this.lastActiveElement||document.activeElement;if(this.lastActiveElement&&this.lastActiveElement.blur){this.lastActiveElement.blur()}this.addEventListeners(this.elements);u(this.outerElements,true);window.requestAnimationFrame((function(){(document.querySelector(t.initial)||t.focusableElements[0]||t.trapElements[0]).focus();t.activateTraps()}))};t.prototype.handleDeactivate=function(){this.removeEventListeners(this.elements);this.deactivateTraps();u(this.outerElements);this.lastActiveElement.focus();this.lastActiveElement=null};t.prototype.handleKeyDown=function(t){if(v.didFire(t)||y.didFire(t)){try{if(this.iframes.length>0&&(this.trapElements[1]===t.target||!i.isNull(t.target.getAttribute("ku4-focus-wrap"))||this.iframes.some((function(e){return e.contains(t.target)})))){return}if(this.trapElements[0]===t.target){this.trapElements[1].focus();return s.mute(t)}var e=this.focusableElements.indexOf(t.target)-1;var n=e<0?this.focusableElements.length-1:e;this.focusableElements[n].focus();return s.mute(t)}catch(t){return s.mute(t)}}if(p.didFire(t)||m.didFire(t)){try{if(this.iframes.length>0&&(this.trapElements[0]===t.target||!i.isNull(t.target.getAttribute("ku4-focus-wrap"))||this.iframes.some((function(e){return e.contains(t.target)})))){return}if(this.trapElements[1]===t.target){this.trapElements[0].focus();return s.mute(t)}var e=this.focusableElements.indexOf(t.target)+1;var n=e>=this.focusableElements.length?0:e;this.focusableElements[n].focus();return s.mute(t)}catch(t){return s.mute(t)}}};t.prototype.handleKeyUp=function(t){var e=this.trapElements.indexOf(t.target);if(e===0&&(v.didFire(t)||y.didFire(t))){var n=this.focusableElements[this.focusableElements.length-1]||this.trapElements[1];n.focus();return s.mute(t)}if(e===1&&(p.didFire(t)||m.didFire(t))){var n=this.focusableElements[0]||this.trapElements[0];n.focus();return s.mute(t)}};t.prototype.handleMouse=function(t){if(!this.elements.some((function(e){return e===t.target}))){s.mute(t)}};t.prototype.addEventListeners=function(t){var e=this;t.forEach((function(t){return t.addEventListener("keydown",e.handleKeyDown,true)}));t.forEach((function(t){return t.addEventListener("keyup",e.handleKeyUp,true)}));window.addEventListener("click",this.handleMouse,true);window.addEventListener("mousedown",this.handleMouse,true);window.addEventListener("mouseup",this.handleMouse,true)};t.prototype.removeEventListeners=function(t){var e=this;t.forEach((function(t){return t.removeEventListener("keydown",e.handleKeyDown,true)}));t.forEach((function(t){return t.removeEventListener("keyup",e.handleKeyUp,true)}));window.removeEventListener("click",this.handleMouse,true);window.removeEventListener("mousedown",this.handleMouse,true);window.removeEventListener("mouseup",this.handleMouse,true)};t.prototype.activateTraps=function(){this.setTraps(0)};t.prototype.deactivateTraps=function(){this.setTraps(-1)};t.prototype.setTraps=function(t){[].slice.call(this.host.querySelectorAll("[ku4-focus-trap], [ku4-focus-wrap]")).forEach((function(e){return e.setAttribute("tabindex",t)}))};t.prototype.wrap=function(t){var e=document.createDocumentFragment();e.appendChild(this.createWrapTag());e.appendChild(t.cloneNode());e.appendChild(this.createWrapTag());t.parentNode.replaceChild(e,t)};t.prototype.createTrapTag=function(){return this.createTag("ku4-focus-trap")};t.prototype.createWrapTag=function(){return this.createTag("ku4-focus-wrap")};t.prototype.createTag=function(t){var e=document.createElement("button");e.setAttribute(t,"");e.setAttribute("tabindex","0");e.setAttribute("aria-hidden","true");e.style.position="static";e.style.display="inline";e.style.width="0";e.style.height="0";e.style.margin="0";e.style.padding="0";e.style.border="none";e.style.outline="none";return e};t.prototype.initialize=function(){var t=this;var e=[].slice.call(this.host.querySelectorAll("*"));var n=[].slice.call(document.querySelectorAll(this.include)||[]);var r=[].slice.call(document.querySelectorAll(this.exclude)||[]);this.iframes=[].slice.call(this.host.querySelectorAll("iframe")||[]);this.iframes.forEach((function(e){return t.wrap(e)}));this.elements=a(__spreadArrays(d(this.host),n));this.focusableElements=this.elements.reduce((function(e,n){if(c(n)&&!t.trapElements.includes(n)){e.push(n)}return e}),[]);this.outerElements=__spreadArrays(h(document.body),r).filter((function(r){return!(r===t.host||e.includes(r)||n.includes(r))}))};t.prototype.componentDidLoad=function(){var t=this.createTrapTag();var e=this.createTrapTag();this.trapElements=[t,e];this.host.insertBefore(t,this.host.firstChild);this.host.appendChild(e);this.initialize();if(this.active){this.handleActivate()}else{this.handleDeactivate()}};t.prototype.componentDidUnload=function(){if(this.active){this.handleDeactivate()}};t.prototype.render=function(){return n("slot",null)};Object.defineProperty(t.prototype,"host",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{active:["activeHandler"]}},enumerable:true,configurable:true});return t}());b.style=f}}}));