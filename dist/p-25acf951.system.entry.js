System.register(["./p-857284a4.system.js","./p-d74a6f64.system.js"],(function(t){"use strict";var e,n,r,i,u;return{setters:[function(t){e=t.r;n=t.h;r=t.H;i=t.g},function(t){u=t.t}],execute:function(){var o=t("ku4_feature",function(){function t(t){e(this,t);this._render=function(){return undefined};this.policy="";this.enabled=false;var n=this.policy.trim();this.featurePolicy=u.isNullOrEmpty(n)?function(){return false}:new Function(/^return/.test(n)?n:"return "+n)}t.prototype.componentWillLoad=function(){var t=this,e=t.on,r=t.featurePolicy;var i=e||r.call(this.host);this.render=function(){return i?n("slot",null):undefined}};t.prototype.render=function(){return n(r,null,this._render())};Object.defineProperty(t.prototype,"host",{get:function(){return i(this)},enumerable:false,configurable:true});return t}())}}}));