System.register(["./p-64299956.system.js","./p-11edeccb.system.js"],(function(e){"use strict";var t,i,n,o,l;return{setters:[function(e){t=e.r;i=e.h;n=e.H;o=e.g},function(e){l=e.t}],execute:function(){var r=":host{position:relative;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:12px;line-height:14px}::slotted(*){padding:6px;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;font-size:18px;-webkit-appearance:none}label{position:absolute;display:inline;top:var(--ku4-label-top, -6px);left:var(--ku4-label-left, 8px);padding:var(--ku4-label-padding, 0 4px);font-size:inherit;line-height:inherit;background-color:var(--ku4-label-background-color, transparent);color:inherit;z-index:1;white-space:nowrap;-webkit-transition:all 0.2s ease;transition:all 0.2s ease}label.empty{opacity:0;-webkit-transition:all 0.1s ease;transition:all 0.1s ease}";var s=e("ku4_label",function(){function e(e){t(this,e);this.handleInput=this.handleInput.bind(this)}e.prototype.handleInput=function(){this.empty=l.isNullOrEmpty(this.field.value)};e.prototype.componentWillLoad=function(){this.field=this.host.querySelector("input, select, textarea");this.empty=l.isNullOrEmpty(this.field.value);this.placeholder=this.field.getAttribute("placeholder");this.field.addEventListener("input",this.handleInput)};e.prototype.componentDidUnload=function(){this.field.removeEventListener("input",this.handleInput)};e.prototype.render=function(){var e=this,t=e.empty,o=e.value,l=e.placeholder;return i(n,null,i("label",{htmlFor:this.for,class:""+(t?"empty":"")},o||l),i("slot",null))};Object.defineProperty(e.prototype,"host",{get:function(){return o(this)},enumerable:true,configurable:true});return e}());s.style=r}}}));