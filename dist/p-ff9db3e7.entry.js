import{r as t,h as s,H as e,g as r}from"./p-016a7b4e.js";import{K as i}from"./p-16f6027a.js";import{u as a}from"./p-50ea6684.js";import"./p-cbb6fb91.js";const o=class{constructor(s){t(this,s)}handleTabClick({target:t}){this.tabs.includes(t)&&this.open(t)}handleTabKeyUp({target:t,detail:s}){this.tabs.includes(t)&&(i.left.didFire(s)&&this.open(this.previous(t)),i.right.didFire(s)&&this.open(this.next(t)))}async open(t){return this.reset().select(t)}select(t){return t.select(),this}deselect(t){return t.deselect(),this}reset(){return this.tabs.forEach((t=>this.deselect(t))),this}previous(t){const{tabs:s,tabs:{length:e}}=this,r=s.indexOf(t)-1;return s[r>-1?r:e-1]}next(t){const{tabs:s,tabs:{length:e}}=this,r=s.indexOf(t)+1;return s[r<e?r:0]}componentDidRender(){const t=[],s=[];[].slice.call(this.host.children).forEach((e=>{"KU4-TAB"===e.tagName&&t.push(e),"KU4-TAB-PANEL"===e.tagName&&s.push(e)})),this.tabs=t,this.tabs.forEach(((t,e)=>t.connect(s[e])))}render(){return s(e,{id:this.host.id||a(),role:"tablist","aria-owns":this.host.id||a()},s("slot",null))}get host(){return r(this)}};o.style=":host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}";export{o as ku4_tab_list}