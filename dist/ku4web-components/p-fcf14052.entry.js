import{r as t,h as s,c as r,g as e}from"./p-4b3a55b9.js";import"./p-66db1a6c.js";import{l as i}from"./p-5d07c084.js";import{u as a}from"./p-9d6899f2.js";const o=class{constructor(s){t(this,s)}handleHpTabClick({target:t}){this.tabs.includes(t)&&this.open(t)}handleHpTabKeyUp({target:t,detail:s}){this.tabs.includes(t)&&(i.left.didFire(s)&&this.open(this.previous(t)),i.right.didFire(s)&&this.open(this.next(t)))}async open(t){return this.reset().select(t)}select(t){return t.select(),this}deselect(t){return t.deselect(),this}reset(){return this.tabs.forEach(t=>this.deselect(t)),this}previous(t){const{tabs:s,tabs:{length:r}}=this,e=s.indexOf(t)-1;return s[e>-1?e:r-1]}next(t){const{tabs:s,tabs:{length:r}}=this,e=s.indexOf(t)+1;return s[e<r?e:0]}componentDidRender(){const t=[],s=[];[].slice.call(this.host.children).forEach(r=>{"KU4-TAB"===r.tagName&&t.push(r),"KU4-TAB-PANEL"===r.tagName&&s.push(r)}),this.tabs=t,this.tabs.forEach((t,r)=>t.connect(s[r]))}render(){return s(r,{id:this.host.id||a(),role:"tablist","aria-owns":this.host.id||a()},s("slot",null))}get host(){return e(this)}};o.style=":host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}";export{o as ku4_tab_list}