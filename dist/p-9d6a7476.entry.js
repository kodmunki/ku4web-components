import{r as t,h as s,H as r,g as o}from"./p-6590bedc.js";import{t as i}from"./p-f053c48f.js";const n=class{constructor(s){t(this,s),this._render=()=>{},this.policy="",this.enabled=!1;const r=this.policy.trim();this.featurePolicy=i.isNullOrEmpty(r)?()=>!1:new Function(/^return/.test(r)?r:"return "+r)}componentWillLoad(){const{on:t,featurePolicy:r}=this,o=t||r.call(this.host);this.render=()=>o?s("slot",null):void 0}render(){return s(r,null,this._render())}get host(){return o(this)}};export{n as ku4_feature}