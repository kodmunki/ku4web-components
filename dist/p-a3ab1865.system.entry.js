System.register(["./p-87cdb7a3.system.js","./p-1029b257.system.js"],(function(t){"use strict";var e,i,n,a,s;return{setters:[function(t){e=t.r;i=t.h;n=t.H;a=t.g},function(t){s=t.t}],execute:function(){var l=":host{position:relative}::slotted(*){width:100%;padding:var(--ku4-label-empty-padding, 10px 4px 2px);-webkit-transition:padding 0.1s ease;transition:padding 0.1s ease}::slotted(.ku4-empty){padding:var(--ku4-label-input-padding, 6px 4px 6px);-webkit-transition:padding 0.1s ease;transition:padding 0.1s ease}.value{position:absolute;display:inline;top:var(--ku4-label-top, 4px);left:var(--ku4-label-left, 8px);padding:var(--ku4-label-padding, 0);font-size:var(--ku4-label-font-size, inherit);line-height:var(--ku4-label-line-height, inherit);background-color:var(--ku4-label-background-color, transparent);color:inherit;z-index:1;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;white-space:nowrap}.value.empty{color:#ccc;-webkit-transition:all 0.2s ease;transition:all 0.2s ease}.value.placeholder{opacity:1;-webkit-transition:all 0.4s ease;transition:all 0.4s ease}.value.empty.placeholder{color:#888;opacity:0;-webkit-transition:all 0.1s ease;transition:all 0.1s ease}";var o=t("ku4_label",function(){function t(t){e(this,t)}t.prototype.handleInput=function(){this.empty=s.isNullOrEmpty(this.input.value);this.empty?this.input.classList.add("ku4-empty"):this.input.classList.remove("ku4-empty")};t.prototype.componentWillLoad=function(){this.handleInput=this.handleInput.bind(this);this.input=this.host.querySelector("input, select");this.empty=s.isNullOrEmpty(this.input.value);this.placeholder=this.input.getAttribute("placeholder");this.empty&&this.input.classList.add("ku4-empty");this.input.addEventListener("input",this.handleInput)};t.prototype.componentDidUnload=function(){this.input.removeEventListener("input",this.handleInput)};t.prototype.render=function(){var t=this,e=t.empty,a=t.value,s=t.placeholder;return i(n,null,i("label",{htmlFor:this.for,class:"value "+(e?"empty":"")+" "+(s?"placeholder":"")},a||s),i("slot",null))};Object.defineProperty(t.prototype,"host",{get:function(){return a(this)},enumerable:true,configurable:true});return t}());o.style=l}}}));