System.register(["./p-f6113f5b.system.js"],(function(t){"use strict";var e,r,o;return{setters:[function(t){e=t.r;r=t.h;o=t.g}],execute:function(){var l=t("ku4_table",function(){function t(t){e(this,t)}t.prototype.componentDidLoad=function(){var t=[].slice.call(this.host.querySelectorAll("tbody th"));var e=[].slice.call(this.host.querySelectorAll("tfoot th"));if(t.length>0){this.host.querySelector("thead tr :first-child").classList.add("ku4-head-header")}[].slice.call(this.host.querySelectorAll("thead th")).forEach((function(e,r){e.style.order=r+(t.length>0?0:1)}));[].slice.call(this.host.querySelectorAll("tbody tr")).forEach((function(e,r){[].slice.call(e.querySelectorAll("td")).forEach((function(e,o){e.style.order=o+1;try{e.setAttribute("data-ku4-row-header",t[r].textContent)}catch(l){}}))}));[].slice.call(this.host.querySelectorAll("tfoot tr")).forEach((function(t,r){[].slice.call(t.querySelectorAll("td")).forEach((function(t,o){t.style.order=o+1;try{t.setAttribute("data-ku4-row-header",e[r].textContent)}catch(l){}}))}))};t.prototype.render=function(){return r("slot",null)};Object.defineProperty(t.prototype,"host",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"ku4-table{position:relative;display:block}\@supports (display: contents){ku4-table table{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ku4-table thead,ku4-table tbody,ku4-table tfoot,ku4-table tr{display:contents}ku4-table thead .ku4-head-header{display:none}ku4-table tbody th,ku4-table tfoot th{position:absolute;display:block;width:0;height:0;margin:0;padding:0;line-height:0;font-size:0}ku4-table tbody td,ku4-table tfoot td{display:-ms-flexbox;display:flex}ku4-table tbody td:before,ku4-table tfoot td:before{content:attr(data-ku4-row-header)}}\@media only screen and (min-width: 768px){ku4-table table{position:static;display:table}ku4-table thead{position:static;display:table-header-group}ku4-table tbody{position:static;display:table-row-group}ku4-table tfoot{position:static;display:table-footer-group}ku4-table tr{position:static;display:table-row}ku4-table thead .ku4-head-header,ku4-table thead th,ku4-table thead td,ku4-table tbody th,ku4-table tbody td,ku4-table tfoot th,ku4-table tfoot td{position:static;display:table-cell;width:auto;height:auto;margin:auto;padding:initial;line-height:initial;font-size:initial}ku4-table tbody td:before,ku4-table tfoot td:before{position:static;content:none}}"},enumerable:true,configurable:true});return t}())}}}));