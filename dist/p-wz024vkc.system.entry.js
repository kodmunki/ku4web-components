System.register(["./p-6f3fd1f6.system.js"],(function(t){"use strict";var e,r,o;return{setters:[function(t){e=t.r;r=t.h;o=t.g}],execute:function(){var n=t("ku4_table",function(){function t(t){e(this,t);this.xsStack=""}t.prototype.stack=function(){var t=[].slice.call(this.host.querySelectorAll("thead th"));var e=[].slice.call(this.host.querySelectorAll("tbody th"));var r=[].slice.call(this.host.querySelectorAll("tfoot th"));var o=e.length>0;if(o){this.host.querySelector("thead tr :first-child").classList.add("ku4-head-header")}t.forEach((function(t,e){t.style.order=e+!o}));[].slice.call(this.host.querySelectorAll("tbody tr")).forEach((function(r,n){[].slice.call(r.querySelectorAll("td")).forEach((function(r,c){r.style.order=c+1;try{r.setAttribute("data-ku4-column-header",t[c+o].textContent);r.setAttribute("data-ku4-row-header",e[n].textContent)}catch(s){}}))}));[].slice.call(this.host.querySelectorAll("tfoot tr")).forEach((function(e,n){[].slice.call(e.querySelectorAll("td")).forEach((function(e,c){e.style.order=c+1;try{e.setAttribute("data-ku4-column-header",t[c+o].textContent);e.setAttribute("data-ku4-row-header",r[n].textContent)}catch(s){}}))}))};t.prototype.componentDidLoad=function(){var t=this;this.stack();this.mutationObserver=new MutationObserver((function(){return t.stack()}));this.mutationObserver.observe(this.host,{childList:true,subtree:true})};t.prototype.componentDidUnload=function(){this.mutationObserver.disconnect()};t.prototype.render=function(){return r("slot",null)};Object.defineProperty(t.prototype,"host",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"ku4-table{position:relative;display:block}\@media only screen and (min-width: 1px) and (max-width: 767px){\@supports (display: contents){ku4-table[xs-stack=column] table{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ku4-table[xs-stack=column] thead,ku4-table[xs-stack=column] tbody,ku4-table[xs-stack=column] tfoot,ku4-table[xs-stack=column] tr{display:contents}ku4-table[xs-stack=column] thead .ku4-head-header{display:none}ku4-table[xs-stack=column] tbody th,ku4-table[xs-stack=column] tfoot th{position:absolute;display:block;width:0;height:0;margin:0;padding:0;line-height:0;font-size:0}ku4-table[xs-stack=column] tbody td,ku4-table[xs-stack=column] tfoot td{display:-ms-flexbox;display:flex}ku4-table[xs-stack=column] tbody td:before,ku4-table[xs-stack=column] tfoot td:before{content:attr(data-ku4-row-header)}}ku4-table[xs-stack=row] table{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ku4-table[xs-stack=row] thead th,ku4-table[xs-stack=row] thead td{display:none}ku4-table[xs-stack=row] thead,ku4-table[xs-stack=row] tbody,ku4-table[xs-stack=row] tfoot,ku4-table[xs-stack=row] tr,ku4-table[xs-stack=row] th,ku4-table[xs-stack=row] td{display:block}ku4-table[xs-stack=row] tbody td:before,ku4-table[xs-stack=row] tfoot td:before{content:attr(data-ku4-column-header)}}"},enumerable:true,configurable:true});return t}())}}}));