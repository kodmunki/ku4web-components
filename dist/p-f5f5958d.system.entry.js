System.register(["./p-3074face.system.js","./p-e9482cb1.system.js"],(function(e){"use strict";var t,i,s,n,l,r,o;return{setters:[function(e){t=e.r;i=e.h;s=e.H;n=e.g},function(e){l=e.Y;r=e.t;o=e.R}],execute:function(){var a=":host{position:relative;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:12px;line-height:14px}::slotted(*){padding:6px;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;font-size:18px;-webkit-appearance:none}label{position:absolute;display:var(--ku4-label-display, inline);top:var(--ku4-label-top, -6px);left:var(--ku4-label-left, 8px);padding:var(--ku4-label-padding, 0 4px);font-size:inherit;line-height:inherit;background-color:var(--ku4-label-background-color, inherit);-webkit-backdrop-filter:var(--ku4-label-backdrop-filter, inherit);backdrop-filter:var(--ku4-label-backdrop-filter, inherit);color:inherit;z-index:1;white-space:nowrap;-webkit-transition:all 0.2s ease;transition:all 0.2s ease}label.empty{opacity:0;-webkit-transition:all 0.1s ease;transition:all 0.1s ease}";var h=e("ku4_label",function(){function e(e){t(this,e);this.handleFocus=this.handleFocus.bind(this);this.handleChange=this.handleChange.bind(this);this.handleInput=this.handleInput.bind(this);this.handleKeyUp=this.handleKeyUp.bind(this);this.handleReset=this.handleReset.bind(this)}e.prototype.handleFocus=function(){var e=this;l(100).then((function(){e.empty=r.isNullOrEmpty(e.field.value)}))};e.prototype.handleChange=function(){this.empty=r.isNullOrEmpty(this.field.value)};e.prototype.handleInput=function(){this.empty=r.isNullOrEmpty(this.field.value)};e.prototype.handleKeyUp=function(){this.empty=r.isNullOrEmpty(this.field.value)};e.prototype.handleReset=function(){this.empty=true};e.prototype.componentWillLoad=function(){this.field=this.host.querySelector("input, select, textarea");this.empty=r.isNullOrEmpty(this.field.value);this.placeholder=this.field.getAttribute("placeholder");this.field.addEventListener("focus",this.handleFocus);this.field.addEventListener("change",this.handleChange);this.field.addEventListener("input",this.handleInput);this.field.addEventListener("keyup",this.handleKeyUp);var e=this.field.getAttribute("aria-labelledby");var t=this.host.getAttribute("id")||o.uid();this.host.setAttribute("id",t);if(r.isNullOrEmpty(e)){this.field.setAttribute("aria-labelledby",t)}if(r.isFunction(this.host.closest)){this.form=this.host.closest("form");if(this.form&&this.form.addEventListener){this.form.addEventListener("reset",this.handleReset)}}};e.prototype.disconnectedCallback=function(){if(this.field&&this.field.removeEventListener){this.field.removeEventListener("focus",this.handleFocus);this.field.removeEventListener("change",this.handleChange);this.field.removeEventListener("input",this.handleInput);this.field.removeEventListener("keyup",this.handleKeyUp);if(this.form&&this.form.removeEventListener){this.form.removeEventListener("reset",this.handleReset)}}};e.prototype.render=function(){var e=this,t=e.empty,n=e.value,l=e.placeholder;return i(s,null,i("label",{htmlFor:this.for,class:"".concat(t?"empty":"")},n||l),i("slot",null))};Object.defineProperty(e.prototype,"host",{get:function(){return n(this)},enumerable:false,configurable:true});return e}());h.style=a}}}));