import{r as t,h as s,g as h}from"./p-80e7f1ae.js";const a=class{constructor(s){t(this,s),this.stackXs="",this.stackSm=""}stack(){const t=[].slice.call(this.host.querySelectorAll("thead th")),s=[].slice.call(this.host.querySelectorAll("tbody th")),h=[].slice.call(this.host.querySelectorAll("tfoot th")),a=s.length>0,e=this.host.querySelector("thead tr :first-child");a&&e.classList.add("ku4-head-header"),t.forEach((t,s)=>{t.style.order=s+!a}),[].slice.call(this.host.querySelectorAll("tbody tr")).forEach((h,e)=>{[].slice.call(h.querySelectorAll("td")).forEach((h,o)=>{h.style.order=o+1;try{h.setAttribute("data-ku4-column-header",t[o+a].textContent),h.setAttribute("data-ku4-row-header",s[e].textContent)}catch(t){}})}),[].slice.call(this.host.querySelectorAll("tfoot tr")).forEach((s,e)=>{[].slice.call(s.querySelectorAll("td")).forEach((s,o)=>{s.style.order=o+1;try{s.setAttribute("data-ku4-column-header",t[o+a].textContent),s.setAttribute("data-ku4-row-header",h[e].textContent)}catch(t){}})})}componentDidLoad(){this.stack(),this.mutationObserver=new MutationObserver(()=>this.stack()),this.mutationObserver.observe(this.host,{childList:!0,subtree:!0})}disconnectedCallback(){this.mutationObserver.disconnect()}render(){return s("slot",null)}get host(){return h(this)}};a.style=":host{position:absolute;display:block}";export{a as ku4_table}