System.register(["./p-ea4f0c53.system.js","./p-d74a6f64.system.js"],(function(t){"use strict";var e,n,r,i,o;return{setters:[function(t){e=t.r,n=t.h,r=t.g,i=t.H},function(t){o=t.t}],execute:function(){t("ku4_feature",function(){function t(t){e(this,t),this.policy="",this.enabled=!1;var n=this.policy.trim();this.featurePolicy=o.isNullOrEmpty(n)?function(){return!1}:new Function(/^return/.test(n)?n:"return "+n)}t.prototype.componentWillLoad=function(){var t=this,e=t.on,r=t.featurePolicy;e||r.call(this.host)?this.render=function(){return n("slot",null)}:this.host.parentNode.removeChild(this.host)};t.prototype.render=function(){return n(i,null)};Object.defineProperty(t.prototype,"host",{get:function(){return r(this)},enumerable:false,configurable:true});return t}())}}}));