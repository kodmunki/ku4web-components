System.register(["./p-3eb40920.system.js","./p-11edeccb.system.js"],(function(t){"use strict";var e,o,a,s;return{setters:[function(t){e=t.r;o=t.h;a=t.g},function(t){s=t.t}],execute:function(){var l=function(t,e,o){return function(a,l,c){var n=l==="render"?"":"."+l;var r=["DEPRECATED: "+t+n,"\nUse identified replacement if available.",s.exists(e)?"\nReplacement: "+e:""].join("");(o||function(t){return console.warn(t)})(r)}};var c="ku4-table{position:relative;display:block}@media only screen and (min-width: 1px) and (max-width: 767px){ku4-table{}@supports (display: contents){ku4-table[stack-xs=column] table{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ku4-table[stack-xs=column] thead,ku4-table[stack-xs=column] tbody,ku4-table[stack-xs=column] tfoot,ku4-table[stack-xs=column] tr{display:contents}ku4-table[stack-xs=column] thead .ku4-head-header{display:none}ku4-table[stack-xs=column] tbody th,ku4-table[stack-xs=column] tfoot th{position:absolute;display:block;width:0;height:0;margin:0;padding:0;line-height:0;font-size:0}ku4-table[stack-xs=column] tbody td,ku4-table[stack-xs=column] tfoot td{display:-ms-flexbox;display:flex}ku4-table[stack-xs=column] tbody td:before,ku4-table[stack-xs=column] tfoot td:before{content:attr(data-ku4-row-header)}}ku4-table[stack-xs=row] table{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ku4-table[stack-xs=row] thead th,ku4-table[stack-xs=row] thead td{display:none}ku4-table[stack-xs=row] thead,ku4-table[stack-xs=row] tbody,ku4-table[stack-xs=row] tfoot,ku4-table[stack-xs=row] tr,ku4-table[stack-xs=row] th,ku4-table[stack-xs=row] td{display:block}ku4-table[stack-xs=row] tbody td:before,ku4-table[stack-xs=row] tfoot td:before{content:attr(data-ku4-column-header)}@supports (display: contents){ku4-table[xs-stack=column] table{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ku4-table[xs-stack=column] thead,ku4-table[xs-stack=column] tbody,ku4-table[xs-stack=column] tfoot,ku4-table[xs-stack=column] tr{display:contents}ku4-table[xs-stack=column] thead .ku4-head-header{display:none}ku4-table[xs-stack=column] tbody th,ku4-table[xs-stack=column] tfoot th{position:absolute;display:block;width:0;height:0;margin:0;padding:0;line-height:0;font-size:0}ku4-table[xs-stack=column] tbody td,ku4-table[xs-stack=column] tfoot td{display:-ms-flexbox;display:flex}ku4-table[xs-stack=column] tbody td:before,ku4-table[xs-stack=column] tfoot td:before{content:attr(data-ku4-row-header)}}ku4-table[xs-stack=row] table{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ku4-table[xs-stack=row] thead th,ku4-table[xs-stack=row] thead td{display:none}ku4-table[xs-stack=row] thead,ku4-table[xs-stack=row] tbody,ku4-table[xs-stack=row] tfoot,ku4-table[xs-stack=row] tr,ku4-table[xs-stack=row] th,ku4-table[xs-stack=row] td{display:block}ku4-table[xs-stack=row] tbody td:before,ku4-table[xs-stack=row] tfoot td:before{content:attr(data-ku4-column-header)}}";var n=undefined&&undefined.__decorate||function(t,e,o,a){var s=arguments.length,l=s<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,o):a,c;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")l=Reflect.decorate(t,e,o,a);else for(var n=t.length-1;n>=0;n--)if(c=t[n])l=(s<3?c(l):s>3?c(e,o,l):c(e,o))||l;return s>3&&l&&Object.defineProperty(e,o,l),l};var r=t("ku4_table",function(){function t(t){e(this,t);this.stackXs="";this.stackSm="";this.xsStack=""}t.prototype.stack=function(){var t=[].slice.call(this.host.querySelectorAll("thead th"));var e=[].slice.call(this.host.querySelectorAll("tbody th"));var o=[].slice.call(this.host.querySelectorAll("tfoot th"));var a=e.length>0;if(a){this.host.querySelector("thead tr :first-child").classList.add("ku4-head-header")}t.forEach((function(t,e){t.style.order=e+!a}));[].slice.call(this.host.querySelectorAll("tbody tr")).forEach((function(o,s){[].slice.call(o.querySelectorAll("td")).forEach((function(o,l){o.style.order=l+1;try{o.setAttribute("data-ku4-column-header",t[l+a].textContent);o.setAttribute("data-ku4-row-header",e[s].textContent)}catch(c){}}))}));[].slice.call(this.host.querySelectorAll("tfoot tr")).forEach((function(e,s){[].slice.call(e.querySelectorAll("td")).forEach((function(e,l){e.style.order=l+1;try{e.setAttribute("data-ku4-column-header",t[l+a].textContent);e.setAttribute("data-ku4-row-header",o[s].textContent)}catch(c){}}))}))};t.prototype.componentDidLoad=function(){var t=this;this.stack();this.mutationObserver=new MutationObserver((function(){return t.stack()}));this.mutationObserver.observe(this.host,{childList:true,subtree:true})};t.prototype.componentDidUnload=function(){this.mutationObserver.disconnect()};t.prototype.render=function(){return o("slot",null)};Object.defineProperty(t.prototype,"host",{get:function(){return a(this)},enumerable:true,configurable:true});return t}());n([l("ku4-table","stack-xs")],r.prototype,"xsStack",void 0);r.style=c}}}));