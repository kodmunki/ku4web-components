import{r as t,h as s,g as e}from"./p-3608152c.js";const h=class{constructor(s){t(this,s),this.xsStack=""}stack(){const t=[].slice.call(this.host.querySelectorAll("thead th")),s=[].slice.call(this.host.querySelectorAll("tbody th")),e=[].slice.call(this.host.querySelectorAll("tfoot th")),h=s.length>0;h&&this.host.querySelector("thead tr :first-child").classList.add("ku4-head-header"),t.forEach((t,s)=>{t.style.order=s+!h}),[].slice.call(this.host.querySelectorAll("tbody tr")).forEach((e,r)=>{[].slice.call(e.querySelectorAll("td")).forEach((e,a)=>{e.style.order=a+1;try{e.setAttribute("data-ku4-column-header",t[a+h].textContent),e.setAttribute("data-ku4-row-header",s[r].textContent)}catch(o){}})}),[].slice.call(this.host.querySelectorAll("tfoot tr")).forEach((s,r)=>{[].slice.call(s.querySelectorAll("td")).forEach((s,a)=>{s.style.order=a+1;try{s.setAttribute("data-ku4-column-header",t[a+h].textContent),s.setAttribute("data-ku4-row-header",e[r].textContent)}catch(o){}})})}componentDidLoad(){this.stack(),this.mutationObserver=new MutationObserver(()=>this.stack()),this.mutationObserver.observe(this.host,{childList:!0,subtree:!0})}componentDidUnload(){this.mutationObserver.disconnect()}render(){return s("slot",null)}get host(){return e(this)}static get style(){return"ku4-table{position:relative;display:block}\@media only screen and (min-width: 1px) and (max-width: 767px){\@supports (display: contents){ku4-table[xs-stack=column] table{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ku4-table[xs-stack=column] thead,ku4-table[xs-stack=column] tbody,ku4-table[xs-stack=column] tfoot,ku4-table[xs-stack=column] tr{display:contents}ku4-table[xs-stack=column] thead .ku4-head-header{display:none}ku4-table[xs-stack=column] tbody th,ku4-table[xs-stack=column] tfoot th{position:absolute;display:block;width:0;height:0;margin:0;padding:0;line-height:0;font-size:0}ku4-table[xs-stack=column] tbody td,ku4-table[xs-stack=column] tfoot td{display:-ms-flexbox;display:flex}ku4-table[xs-stack=column] tbody td:before,ku4-table[xs-stack=column] tfoot td:before{content:attr(data-ku4-row-header)}}ku4-table[xs-stack=row] table{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ku4-table[xs-stack=row] thead th,ku4-table[xs-stack=row] thead td{display:none}ku4-table[xs-stack=row] thead,ku4-table[xs-stack=row] tbody,ku4-table[xs-stack=row] tfoot,ku4-table[xs-stack=row] tr,ku4-table[xs-stack=row] th,ku4-table[xs-stack=row] td{display:block}ku4-table[xs-stack=row] tbody td:before,ku4-table[xs-stack=row] tfoot td:before{content:attr(data-ku4-column-header)}}"}};export{h as ku4_table};