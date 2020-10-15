var __awaiter=this&&this.__awaiter||function(t,e,o,i){function n(t){return t instanceof o?t:new o((function(e){e(t)}))}return new(o||(o=Promise))((function(o,r){function s(t){try{a(i.next(t))}catch(e){r(e)}}function h(t){try{a(i["throw"](t))}catch(e){r(e)}}function a(t){t.done?o(t.value):n(t.value).then(s,h)}a((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var o={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,n,r,s;return s={next:h(0),throw:h(1),return:h(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function h(t){return function(e){return a([t,e])}}function a(s){if(i)throw new TypeError("Generator is already executing.");while(o)try{if(i=1,n&&(r=s[0]&2?n["return"]:s[0]?n["throw"]||((r=n["return"])&&r.call(n),0):n.next)&&!(r=r.call(n,s[1])).done)return r;if(n=0,r)s=[s[0]&2,r.value];switch(s[0]){case 0:case 1:r=s;break;case 4:o.label++;return{value:s[1],done:false};case 5:o.label++;n=s[1];s=[0];continue;case 7:s=o.ops.pop();o.trys.pop();continue;default:if(!(r=o.trys,r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){o=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){o.label=s[1];break}if(s[0]===6&&o.label<r[1]){o.label=r[1];r=s;break}if(r&&o.label<r[2]){o.label=r[2];o.ops.push(s);break}if(r[2])o.ops.pop();o.trys.pop();continue}s=e.call(t,o)}catch(h){s=[6,h];n=0}finally{i=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-6ce42f56.system.js","./p-053691dc.system.js"],(function(t){"use strict";var e,o,i,n,r,s,h;return{setters:[function(t){e=t.r;o=t.h;i=t.c;n=t.g},function(t){r=t.Y;s=t.L;h=t.B}],execute:function(){var a=":host{position:fixed;display:none;opacity:0;z-index:2;background-color:#fff;border:solid 1px #ccc}:host([visible]){display:block;opacity:1;-webkit-transition:opacity 0.4s;transition:opacity 0.4s}:host .arrow{position:absolute;width:var(--ku4-tooltip-arrow-size, 14px);height:var(--ku4-tooltip-arrow-size, 14px);background-color:inherit;-webkit-transform:rotate(45deg);transform:rotate(45deg);border:inherit}:host .content{position:relative}:host([top]) .arrow{top:calc(100% - var(--ku4-tooltip-arrow-offset, 7px));left:calc(50% - var(--ku4-tooltip-arrow-offset, 7px));border-top:none !important;border-left:none !important}:host([left]) .arrow{top:calc(50% - var(--ku4-tooltip-arrow-offset, 7px));left:calc(100% - var(--ku4-tooltip-arrow-offset, 7px));border-left:none !important;border-bottom:none !important}:host([bottom]) .arrow{left:calc(50% - var(--ku4-tooltip-arrow-offset, 7px));bottom:calc(100% - var(--ku4-tooltip-arrow-offset, 7px));border-bottom:none !important;border-right:none !important}:host([right]) .arrow{top:calc(50% - var(--ku4-tooltip-arrow-offset, 7px));right:calc(100% - var(--ku4-tooltip-arrow-offset, 7px));border-top:none !important;border-right:none !important}";var l=t("ku4_tooltip",function(){function t(t){e(this,t);this.isShowing=false;this.show=this.show.bind(this);this.hide=this.hide.bind(this);this._show=this._show.bind(this);this._hide=this._hide.bind(this);this._toggle=this._toggle.bind(this);this.hideTimeout=new r(200).onTimeout(this._hide)}t.prototype.show=function(t){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(o){this.hideTimeout.clear();if(this.host.contains(t)){return[2]}else{this.isShowing=true;this.host.setAttribute("visible","true");this.calcualtePosition(t);this.scrollListener=s((function(){return e.calcualtePosition(t)}));window.addEventListener("scroll",this.scrollListener)}return[2]}))}))};t.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.hideTimeout.clear().start();return[2]}))}))};t.prototype._show=function(t){this.show(t.target)};t.prototype._hide=function(){window.removeEventListener("scroll",this.scrollListener);this.host.removeAttribute("visible");this.isShowing=false};t.prototype._toggle=function(t){this.isShowing?this._hide():this._show(t)};t.prototype.calcualtePosition=function(t){var e=t.getBoundingClientRect(),o=e.left,i=e.top,n=e.width,r=e.height;var s=this.host.getBoundingClientRect(),a=s.left,l=s.top,u=s.width,c=s.height;var p=new h(o,i,n,r);var f=new h(a,l,u,c);if(this.top){this.host.style.left=p.origin.x+p.dimensions.x/2-f.dimensions.x/2+"px";this.host.style.top=p.origin.y-f.dimensions.y-15+"px"}else if(this.left){this.host.style.left=p.origin.x-f.dimensions.x-15+"px";this.host.style.top=p.origin.y+p.dimensions.y/2-f.dimensions.y/2+"px"}else if(this.bottom){this.host.style.left=p.origin.x+p.dimensions.x/2-f.dimensions.x/2+"px";this.host.style.top=p.origin.y+p.dimensions.y+15+"px"}else if(this.right){this.host.style.left=p.origin.x+p.dimensions.x+15+"px";this.host.style.top=p.origin.y+p.dimensions.y/2-f.dimensions.y/2+"px"}else{this.host.style.left=p.origin.x+p.dimensions.x/2-f.dimensions.x/2+"px";this.host.style.top=p.origin.y+p.dimensions.y+15+"px"}};t.prototype.componentWillLoad=function(){var t=this;document.querySelectorAll(this.element).forEach((function(e){t.host.addEventListener("mouseover",t._show);t.host.addEventListener("mouseout",t.hide);e.addEventListener("mouseover",t._show);e.addEventListener("mouseout",t.hide);e.addEventListener("touchstart",t._toggle)}))};t.prototype.disconnectedCallback=function(){var t=this;this.hideTimeout.clear();document.querySelectorAll(this.element).forEach((function(e){t.host.removeEventListener("mouseover",t._show);t.host.removeEventListener("mouseout",t.hide);e.removeEventListener("mouseover",t._show);e.removeEventListener("mouseout",t.hide);e.removeEventListener("touchstart",t._toggle)}))};t.prototype.render=function(){return o(i,null,o("div",{class:"arrow"}),o("div",{class:"content"},o("slot",null)))};Object.defineProperty(t.prototype,"host",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());l.style=a}}}));