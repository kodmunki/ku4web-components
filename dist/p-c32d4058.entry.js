import{r as t,h as a,g as e}from"./p-54fa01ba.js";const s=class{constructor(a){t(this,a),this.stackXs="",this.stackSm=""}stack(){const t=[].slice.call(this.host.querySelectorAll("thead th")),a=[].slice.call(this.host.querySelectorAll("tbody th")),e=[].slice.call(this.host.querySelectorAll("tfoot th")),s=a.length>0,o=this.host.querySelector("thead tr :first-child");s&&o.classList.add("ku4-head-header"),t.forEach(((t,a)=>{t.style.order=a+!s})),[].slice.call(this.host.querySelectorAll("tbody tr")).forEach(((e,o)=>{[].slice.call(e.querySelectorAll("td")).forEach(((e,l)=>{e.style.order=l+1;try{e.setAttribute("data-ku4-column-header",t[l+s].textContent),e.setAttribute("data-ku4-row-header",a[o].textContent)}catch(c){}}))})),[].slice.call(this.host.querySelectorAll("tfoot tr")).forEach(((a,o)=>{[].slice.call(a.querySelectorAll("td")).forEach(((a,l)=>{a.style.order=l+1;try{a.setAttribute("data-ku4-column-header",t[l+s].textContent),a.setAttribute("data-ku4-row-header",e[o].textContent)}catch(c){}}))}))}componentDidLoad(){this.stack(),this.mutationObserver=new MutationObserver((()=>this.stack())),this.mutationObserver.observe(this.host,{childList:!0,subtree:!0})}disconnectedCallback(){try{this.mutationObserver.disconnect()}catch(t){}}render(){return a("slot",null)}get host(){return e(this)}};s.style="ku4-table{position:relative;display:block}@media only screen and (min-width: 1px) and (max-width: 767px){@supports (display: contents){ku4-table[stack-xs=column] table{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ku4-table[stack-xs=column] thead,ku4-table[stack-xs=column] tbody,ku4-table[stack-xs=column] tfoot,ku4-table[stack-xs=column] tr{display:contents}ku4-table[stack-xs=column] thead .ku4-head-header{display:none}ku4-table[stack-xs=column] tbody th,ku4-table[stack-xs=column] tfoot th{position:absolute;display:block;width:0;height:0;margin:0;padding:0;line-height:0;font-size:0}ku4-table[stack-xs=column] tbody td,ku4-table[stack-xs=column] tfoot td{display:-ms-flexbox;display:flex}ku4-table[stack-xs=column] tbody td:before,ku4-table[stack-xs=column] tfoot td:before{content:attr(data-ku4-row-header)}}ku4-table[stack-xs=row] table{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ku4-table[stack-xs=row] thead th,ku4-table[stack-xs=row] thead td{display:none}ku4-table[stack-xs=row] thead,ku4-table[stack-xs=row] tbody,ku4-table[stack-xs=row] tfoot,ku4-table[stack-xs=row] tr,ku4-table[stack-xs=row] th,ku4-table[stack-xs=row] td{display:block}ku4-table[stack-xs=row] tbody td:before,ku4-table[stack-xs=row] tfoot td:before{content:attr(data-ku4-column-header)}}@media only screen and (min-width: 768px) and (max-width: 991px){@supports (display: contents){ku4-table[stack-sm=column] table{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ku4-table[stack-sm=column] thead,ku4-table[stack-sm=column] tbody,ku4-table[stack-sm=column] tfoot,ku4-table[stack-sm=column] tr{display:contents}ku4-table[stack-sm=column] thead .ku4-head-header{display:none}ku4-table[stack-sm=column] tbody th,ku4-table[stack-sm=column] tfoot th{position:absolute;display:block;width:0;height:0;margin:0;padding:0;line-height:0;font-size:0}ku4-table[stack-sm=column] tbody td,ku4-table[stack-sm=column] tfoot td{display:-ms-flexbox;display:flex}ku4-table[stack-sm=column] tbody td:before,ku4-table[stack-sm=column] tfoot td:before{content:attr(data-ku4-row-header)}}ku4-table[stack-sm=row] table{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ku4-table[stack-sm=row] thead th,ku4-table[stack-sm=row] thead td{display:none}ku4-table[stack-sm=row] thead,ku4-table[stack-sm=row] tbody,ku4-table[stack-sm=row] tfoot,ku4-table[stack-sm=row] tr,ku4-table[stack-sm=row] th,ku4-table[stack-sm=row] td{display:block}ku4-table[stack-sm=row] tbody td:before,ku4-table[stack-sm=row] tfoot td:before{content:attr(data-ku4-column-header)}}";export{s as ku4_table}