var __awaiter=this&&this.__awaiter||function(t,e,o,r){function n(t){return t instanceof o?t:new o((function(e){e(t)}))}return new(o||(o=Promise))((function(o,i){function c(t){try{s(r.next(t))}catch(e){i(e)}}function a(t){try{s(r["throw"](t))}catch(e){i(e)}}function s(t){t.done?o(t.value):n(t.value).then(c,a)}s((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var o={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,n,i,c;return c={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(c[Symbol.iterator]=function(){return this}),c;function a(t){return function(e){return s([t,e])}}function s(c){if(r)throw new TypeError("Generator is already executing.");while(o)try{if(r=1,n&&(i=c[0]&2?n["return"]:c[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,c[1])).done)return i;if(n=0,i)c=[c[0]&2,i.value];switch(c[0]){case 0:case 1:i=c;break;case 4:o.label++;return{value:c[1],done:false};case 5:o.label++;n=c[1];c=[0];continue;case 7:c=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){o=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){o.label=c[1];break}if(c[0]===6&&o.label<i[1]){o.label=i[1];i=c;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(c);break}if(i[2])o.ops.pop();o.trys.pop();continue}c=e.call(t,o)}catch(a){c=[6,a];n=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:true}}};System.register(["./p-6ce42f56.system.js","./p-053691dc.system.js","./p-ea7a333b.system.js"],(function(t){"use strict";var e,o,r,n,i,c;return{setters:[function(t){e=t.r;o=t.e;r=t.h;n=t.c;i=t.g},function(){},function(t){c=t.u}],execute:function(){var a='button{margin:0;padding:0;border:none;background:transparent;-webkit-appearance:none}:host{position:relative;display:block;width:100%;padding:20px 30px;background-color:#eee;text-align:center;color:#aaa;cursor:pointer}:host(:focus){background-color:#eee;color:#666;z-index:2}:host(:hover){background-color:#eee;color:#666}:host(:active){background-color:#fff;color:#333}:host([selected]){border-top:1px solid #ccc;border-bottom:1px solid #ccc;background-color:#fff;color:#444}button{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}@media only screen and (min-width: 768px){:host{width:auto;border-top:1px solid #ccc;border-right:1px solid #ccc;border-top-left-radius:4px;border-top-right-radius:4px;background-color:#eee}:host(:first-of-type){border-left:1px solid #ccc}:host([selected]){padding-bottom:1px;border-top:1px solid #ccc;border-bottom:none}:host([selected]):after{content:" ";position:absolute;display:block;left:0;bottom:-1px;width:100%;height:1px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:inherit}}';var s=t("ku4_tab",function(){function t(t){e(this,t);this.tabClick=o(this,"ku4TabClick",7);this.tabKeyUp=o(this,"ku4TabKeyup",7);this.selected=false}t.prototype.handleClick=function(t){this.tabClick.emit(t)};t.prototype.handleKeyUp=function(t){this.tabKeyUp.emit(t)};t.prototype.select=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.selected=true;this.panel.select();this.host.focus();return[2]}))}))};t.prototype.deselect=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.selected=false;this.panel.deselect();return[2]}))}))};t.prototype.connect=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){t.connect(this);return[2]}))}))};Object.defineProperty(t.prototype,"id",{get:function(){return this.host.id||c()},enumerable:false,configurable:true});t.prototype.$assignPanel=function(t){this.panel=t};t.prototype.render=function(){var t=this,e=t.selected,o=t.panel;return r(n,{id:this.host.id||c(),role:"tab",type:"button",tabIndex:e?0:-1,"aria-controls":o&&o.id,"aria-selected":e?"true":"false"},r("slot",null))};Object.defineProperty(t.prototype,"host",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());s.style=a}}}));