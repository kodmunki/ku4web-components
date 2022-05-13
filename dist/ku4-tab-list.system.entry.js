var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function s(t){try{u(r.next(t))}catch(e){o(e)}}function a(t){try{u(r["throw"](t))}catch(e){o(e)}}function u(t){t.done?n(t.value):i(t.value).then(s,a)}u((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return u([t,e])}}function u(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=s[0]&2?i["return"]:s[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;if(i=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;i=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(a){s=[6,a];i=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./index-5c837868.system.js","./index-80d0f591.system.js","./uid-b06c3521.system.js","./index-e918faa1.system.js"],(function(t){"use strict";var e,n,r,i,o,s;return{setters:[function(t){e=t.r;n=t.h;r=t.f;i=t.g},function(t){o=t.K},function(t){s=t.u},function(){}],execute:function(){var a=":host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}";var u=t("ku4_tab_list",function(){function t(t){e(this,t)}t.prototype.handleTabClick=function(t){var e=t.target;this.tabs.includes(e)&&this.open(e)};t.prototype.handleTabKeyUp=function(t){var e=t.target,n=t.detail;if(!this.tabs.includes(e)){return}if(o.left.didFire(n)){this.open(this.previous(e))}if(o.right.didFire(n)){this.open(this.next(e))}};t.prototype.open=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,this.reset().select(t)]}))}))};t.prototype.select=function(t){t.select();return this};t.prototype.deselect=function(t){t.deselect();return this};t.prototype.reset=function(){var t=this;this.tabs.forEach((function(e){return t.deselect(e)}));return this};t.prototype.previous=function(t){var e=this,n=e.tabs,r=e.tabs.length;var i=n.indexOf(t)-1;return n[i>-1?i:r-1]};t.prototype.next=function(t){var e=this,n=e.tabs,r=e.tabs.length;var i=n.indexOf(t)+1;return n[i<r?i:0]};t.prototype.componentDidRender=function(){var t=[];var e=[];[].slice.call(this.host.children).forEach((function(n){if(n.tagName==="KU4-TAB"){t.push(n)}if(n.tagName==="KU4-TAB-PANEL"){e.push(n)}}));this.tabs=t;this.tabs.forEach((function(t,n){return t.connect(e[n])}))};t.prototype.render=function(){return n(r,{id:this.host.id||s(),role:"tablist","aria-owns":this.host.id||s()},n("slot",null))};Object.defineProperty(t.prototype,"host",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());u.style=a}}}));