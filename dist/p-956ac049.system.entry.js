System.register(["./p-08eb5910.system.js","./p-11edeccb.system.js"],(function(t){"use strict";var e,i,n,s,l;return{setters:[function(t){e=t.r;i=t.h;n=t.H;s=t.g},function(t){l=t.t}],execute:function(){var a=":host{position:relative;display:-ms-inline-flexbox;display:inline-flex;font-size:9px;line-height:9px}::slotted(*){width:100%;-webkit-transition:padding 0.1s ease;transition:padding 0.1s ease}::slotted(.ku4-empty){-webkit-transition:padding 0.1s ease;transition:padding 0.1s ease}label{position:absolute;display:inline;top:var(--ku4-label-top, -6px);left:var(--ku4-label-left, 8px);padding:var(--ku4-label-padding, 0 4px);font-size:inherit;line-height:inherit;background-color:var(--ku4-label-background-color, transparent);color:inherit;z-index:1;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;white-space:nowrap}label.empty{color:#ccc;-webkit-transition:all 0.2s ease;transition:all 0.2s ease}label.placeholder{opacity:1;-webkit-transition:all 0.4s ease;transition:all 0.4s ease}label.empty.placeholder{color:#888;opacity:0;-webkit-transition:all 0.1s ease;transition:all 0.1s ease}";var o=t("ku4_label",function(){function t(t){e(this,t);this.handleInput=this.handleInput.bind(this)}t.prototype.handleInput=function(){this.empty=l.isNullOrEmpty(this.input.value);this.empty?this.input.classList.add("ku4-empty"):this.input.classList.remove("ku4-empty")};t.prototype.componentWillLoad=function(){this.input=this.host.querySelector("input, select, textarea");this.empty=l.isNullOrEmpty(this.input.value);this.placeholder=this.input.getAttribute("placeholder");this.empty&&this.input.classList.add("ku4-empty");this.input.addEventListener("input",this.handleInput)};t.prototype.componentDidUnload=function(){this.input.removeEventListener("input",this.handleInput)};t.prototype.render=function(){var t=this,e=t.empty,s=t.value,l=t.placeholder;return i(n,null,i("label",{htmlFor:this.for,class:(e?"empty":"")+" "+(l?"placeholder":"")},s||l),i("slot",null))};Object.defineProperty(t.prototype,"host",{get:function(){return s(this)},enumerable:true,configurable:true});return t}());o.style=a}}}));