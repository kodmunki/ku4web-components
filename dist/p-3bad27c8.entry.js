import{r as t,h as s,g as r,H as o}from"./p-558f5446.js";import{t as i}from"./p-54fb5b7d.js";const n=class{constructor(s){t(this,s),this.on=void 0,this.policy="",this.enabled=!1;const r=this.policy.trim();this.featurePolicy=i.isNullOrEmpty(r)?()=>!1:new Function(/^return/.test(r)?r:`return ${r}`)}componentWillLoad(){const{on:t,featurePolicy:r}=this;t||r.call(this.host)?this.render=()=>s("slot",null):this.host.parentNode.removeChild(this.host)}render(){return s(o,null)}get host(){return r(this)}};export{n as ku4_feature}