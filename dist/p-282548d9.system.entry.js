var __awaiter=this&&this.__awaiter||function(t,e,n,o){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function s(t){try{a(o.next(t))}catch(e){r(e)}}function h(t){try{a(o["throw"](t))}catch(e){r(e)}}function a(t){t.done?n(t.value):i(t.value).then(s,h)}a((o=o.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},o,i,r,s;return s={next:h(0),throw:h(1),return:h(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function h(t){return function(e){return a([t,e])}}function a(s){if(o)throw new TypeError("Generator is already executing.");while(n)try{if(o=1,i&&(r=s[0]&2?i["return"]:s[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r;if(i=0,r)s=[s[0]&2,r.value];switch(s[0]){case 0:case 1:r=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;i=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(r=n.trys,r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){n.label=s[1];break}if(s[0]===6&&n.label<r[1]){n.label=r[1];r=s;break}if(r&&n.label<r[2]){n.label=r[2];n.ops.push(s);break}if(r[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(h){s=[6,h];i=0}finally{o=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-556e08d2.system.js"],(function(t){"use strict";var e,n,o;return{setters:[function(t){e=t.r;n=t.h;o=t.H}],execute:function(){var i=":host{position:fixed;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;z-index:1}:host([top]),:host([bottom]){width:100%;height:0;-webkit-transition:height 0.4s;transition:height 0.4s}:host([left]),:host([right]){width:0;height:100%;-webkit-transition:width 0.4s;transition:width 0.4s}:host([top][open]),:host([bottom][open]){height:100%}:host([left][open]),:host([right][open]){width:100%}:host([top][open=false]),:host([bottom][open=false]){height:0}:host([left][open=false]),:host([right][open=false]){width:0}:host([top]),:host([left]){top:0;left:0}:host([bottom]){left:0;bottom:0}:host([right]){right:0;bottom:0}";var r=t("ku4_drawer",function(){function t(t){e(this,t);this.bottom=undefined;this.left=undefined;this.right=undefined;this.top=undefined;this.size="20%";this.open=undefined}t.prototype.toggle=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.open=!this.open;return[2]}))}))};Object.defineProperty(t.prototype,"sizeValue",{get:function(){var t=this,e=t.bottom,n=t.top,o=t.right,i=t.size;switch(true){case e:return{"max-height":i};case n:return{"max-height":i};case o:return{"max-width":i};default:return{"max-width":i}}},enumerable:false,configurable:true});t.prototype.render=function(){var t=this,e=t.sizeValue,i=t.open;return n(o,{style:e,"aria-hidden":i?"false":"true"},n("slot",null))};return t}());r.style=i}}}));