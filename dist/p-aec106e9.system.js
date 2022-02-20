var __extends=this&&this.__extends||function(){var e=function(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))e[n]=t[n]};return e(t,n)};return function(t,n){if(typeof n!=="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();var __awaiter=this&&this.__awaiter||function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function s(e){try{l(r.next(e))}catch(t){i(t)}}function o(e){try{l(r["throw"](e))}catch(t){i(t)}}function l(e){e.done?n(e.value):a(e.value).then(s,o)}l((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;a=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){n.label=s[1];break}if(s[0]===6&&n.label<i[1]){n.label=i[1];i=s;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(s);break}if(i[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n)}catch(o){s=[6,o];a=0}finally{r=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t){for(var n=0,r=t.length,a=e.length;n<r;n++,a++)e[a]=t[n];return e};System.register([],(function(e,t){"use strict";return{execute:function(){var n=this;var r=e("N","ku4web-components");var a;var i;var s;var o=false;var l=false;var f=false;var $=false;var u=false;var c=e("w",typeof window!=="undefined"?window:{});var v=e("d",c.document||{head:{}});var d={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}};var h=function(){return(v.head.attachShadow+"").indexOf("[native")>-1}();var p=e("p",(function(e){return Promise.resolve(e)}));var m=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replace==="function"}catch(e){}return false}();var g=function(e,t,n,r){if(n){n.map((function(n){var r=n[0],a=n[1],i=n[2];var s=b(e,r);var o=y(t,i);var l=w(r);d.ael(s,a,o,l);(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return d.rel(s,a,o,l)}))}))}};var y=function(e,t){return function(n){try{{if(e.$flags$&256){e.$lazyInstance$[t](n)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}}}catch(r){Le(r)}}};var b=function(e,t){if(t&8)return c;return e};var w=function(e){return(e&2)!==0};var R="{visibility:hidden}[hydrated]{visibility:inherit}";var N=function(e,t){if(t===void 0){t=""}{return function(){return}}};var _=function(e,t){{return function(){return}}};var S=new WeakMap;var x=function(e,t,n){var r=Ee.get(e);if(m&&n){r=r||new CSSStyleSheet;r.replace(t)}else{r=t}Ee.set(e,r)};var T=function(e,t,n,r){var a=L(t);var i=Ee.get(a);e=e.nodeType===11?e:v;if(i){if(typeof i==="string"){e=e.head||e;var s=S.get(e);var o=void 0;if(!s){S.set(e,s=new Set)}if(!s.has(a)){{{o=v.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArray(__spreadArray([],e.adoptedStyleSheets),[i])}}return a};var C=function(e){var t=e.$cmpMeta$;var n=e.$hostElement$;var r=t.$flags$;var a=N("attachStyles",t.$tagName$);var i=T(h&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);if(r&10){n["s-sc"]=i;n.classList.add(i+"-h")}a()};var L=function(e,t){return"sc-"+e.$tagName$};var P={};var k=function(e){return e!=null};var E=function(e){e=typeof e;return e==="object"||e==="function"};var j=e("h",(function(e,t){var n=[];for(var r=2;r<arguments.length;r++){n[r-2]=arguments[r]}var a=null;var i=null;var s=false;var o=false;var l=[];var f=function(t){for(var n=0;n<t.length;n++){a=t[n];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!E(a)){a=String(a)}if(s&&o){l[l.length-1].$text$+=a}else{l.push(s?A(null,a):a)}o=s}}};f(n);if(t){if(t.name){i=t.name}{var $=t.className||t.class;if($){t.class=typeof $!=="object"?$:Object.keys($).filter((function(e){return $[e]})).join(" ")}}}var u=A(e,null);u.$attrs$=t;if(l.length>0){u.$children$=l}{u.$name$=i}return u}));var A=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{n.$attrs$=null}{n.$name$=null}return n};var I=e("H",{});var M=function(e){return e&&e.$tag$===I};var O=function(e,t,n,r,a,i){if(n!==r){var s=Ce(e,t);var o=t.toLowerCase();if(t==="class"){var l=e.classList;var f=z(n);var $=z(r);l.remove.apply(l,f.filter((function(e){return e&&!$.includes(e)})));l.add.apply(l,$.filter((function(e){return e&&!f.includes(e)})))}else if(t==="style"){{for(var u in n){if(!r||r[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in r){if(!n||r[u]!==n[u]){if(u.includes("-")){e.style.setProperty(u,r[u])}else{e.style[u]=r[u]}}}}else if(!s&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(Ce(c,o)){t=o.slice(2)}else{t=o[2]+t.slice(3)}if(n){d.rel(e,t,n,false)}if(r){d.ael(e,t,r,false)}}else{var v=E(r);if((s||v&&r!==null)&&!a){try{if(!e.tagName.includes("-")){var h=r==null?"":r;if(t==="list"){s=false}else if(n==null||e[t]!=h){e[t]=h}}else{e[t]=r}}catch(p){}}if(r==null||r===false){if(r!==false||e.getAttribute(t)===""){{e.removeAttribute(t)}}}else if((!s||i&4||a)&&!v){r=r===true?"":r;{e.setAttribute(t,r)}}}}};var B=/\s/;var z=function(e){return!e?[]:e.split(B)};var q=function(e,t,n,r){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||P;var s=t.$attrs$||P;{for(r in i){if(!(r in s)){O(a,r,i[r],undefined,n,t.$flags$)}}}for(r in s){O(a,r,i[r],s[r],n,t.$flags$)}};var U=function(e,t,n,r){var l=t.$children$[n];var u=0;var c;var d;var h;if(!o){f=true;if(l.$tag$==="slot"){if(a){r.classList.add(a+"-s")}l.$flags$|=l.$children$?2:1}}if(l.$text$!==null){c=l.$elm$=v.createTextNode(l.$text$)}else if(l.$flags$&1){c=l.$elm$=v.createTextNode("")}else{c=l.$elm$=v.createElement(l.$flags$&2?"slot-fb":l.$tag$);{q(null,l,$)}if(k(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(l.$children$){for(u=0;u<l.$children$.length;++u){d=U(e,l,u,c);if(d){c.appendChild(d)}}}}{c["s-hn"]=s;if(l.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=l.$name$||"";h=e&&e.$children$&&e.$children$[n];if(h&&h.$tag$===l.$tag$&&e.$elm$){H(e.$elm$,false)}}}return c};var H=function(e,t){d.$flags$|=1;var n=e.childNodes;for(var r=n.length-1;r>=0;r--){var a=n[r];if(a["s-hn"]!==s&&a["s-ol"]){J(a).insertBefore(a,G(a));a["s-ol"].remove();a["s-ol"]=undefined;f=true}if(t){H(a,t)}}d.$flags$&=~1};var V=function(e,t,n,r,a,i){var o=e["s-cr"]&&e["s-cr"].parentNode||e;var l;if(o.shadowRoot&&o.tagName===s){o=o.shadowRoot}for(;a<=i;++a){if(r[a]){l=U(null,n,a,e);if(l){r[a].$elm$=l;o.insertBefore(l,G(t))}}}};var W=function(e,t,n,r,a){for(;t<=n;++t){if(r=e[t]){a=r.$elm$;{l=true;if(a["s-ol"]){a["s-ol"].remove()}else{H(a,true)}}a.remove()}}};var D=function(e,t,n,r){var a=0;var i=0;var s=t.length-1;var o=t[0];var l=t[s];var f=r.length-1;var $=r[0];var u=r[f];var c;while(a<=s&&i<=f){if(o==null){o=t[++a]}else if(l==null){l=t[--s]}else if($==null){$=r[++i]}else if(u==null){u=r[--f]}else if(F(o,$)){K(o,$);o=t[++a];$=r[++i]}else if(F(l,u)){K(l,u);l=t[--s];u=r[--f]}else if(F(o,u)){if(o.$tag$==="slot"||u.$tag$==="slot"){H(o.$elm$.parentNode,false)}K(o,u);e.insertBefore(o.$elm$,l.$elm$.nextSibling);o=t[++a];u=r[--f]}else if(F(l,$)){if(o.$tag$==="slot"||u.$tag$==="slot"){H(l.$elm$.parentNode,false)}K(l,$);e.insertBefore(l.$elm$,o.$elm$);l=t[--s];$=r[++i]}else{{c=U(t&&t[i],n,i,e);$=r[++i]}if(c){{J(o.$elm$).insertBefore(c,G(o.$elm$))}}}}if(a>s){V(e,r[f+1]==null?null:r[f+1].$elm$,n,r,i,f)}else if(i>f){W(t,a,s)}};var F=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}return true}return false};var G=function(e){return e&&e["s-ol"]||e};var J=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var K=function(e,t){var n=t.$elm$=e.$elm$;var r=e.$children$;var a=t.$children$;var i=t.$tag$;var s=t.$text$;var o;if(s===null){{if(i==="slot");else{q(e,t,$)}}if(r!==null&&a!==null){D(n,r,t,a)}else if(a!==null){if(e.$text$!==null){n.textContent=""}V(n,null,t,a,0,a.length-1)}else if(r!==null){W(r,0,r.length-1)}}else if(o=n["s-cr"]){o.parentNode.textContent=s}else if(e.$text$!==s){n.data=s}};var Q=function(e){var t=e.childNodes;var n;var r;var a;var i;var s;var o;for(r=0,a=t.length;r<a;r++){n=t[r];if(n.nodeType===1){if(n["s-sr"]){s=n["s-sn"];n.hidden=false;for(i=0;i<a;i++){o=t[i].nodeType;if(t[i]["s-hn"]!==n["s-hn"]||s!==""){if(o===1&&s===t[i].getAttribute("slot")){n.hidden=true;break}}else{if(o===1||o===3&&t[i].textContent.trim()!==""){n.hidden=true;break}}}}Q(n)}}};var X=[];var Y=function(e){var t;var n;var r;var a;var i;var s;var o=0;var f=e.childNodes;var $=f.length;for(;o<$;o++){t=f[o];if(t["s-sr"]&&(n=t["s-cr"])&&n.parentNode){r=n.parentNode.childNodes;a=t["s-sn"];for(s=r.length-1;s>=0;s--){n=r[s];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==t["s-hn"]){if(Z(n,a)){i=X.find((function(e){return e.$nodeToRelocate$===n}));l=true;n["s-sn"]=n["s-sn"]||a;if(i){i.$slotRefNode$=t}else{X.push({$slotRefNode$:t,$nodeToRelocate$:n})}if(n["s-sr"]){X.map((function(e){if(Z(e.$nodeToRelocate$,n["s-sn"])){i=X.find((function(e){return e.$nodeToRelocate$===n}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!X.some((function(e){return e.$nodeToRelocate$===n}))){X.push({$nodeToRelocate$:n})}}}}if(t.nodeType===1){Y(t)}}};var Z=function(e,t){if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};var ee=function(e,t){var n=e.$hostElement$;var r=e.$cmpMeta$;var $=e.$vnode$||A(null,null);var u=M(t)?t:j(null,null,t);s=n.tagName;if(r.$attrsToReflect$){u.$attrs$=u.$attrs$||{};r.$attrsToReflect$.map((function(e){var t=e[0],r=e[1];return u.$attrs$[r]=n[t]}))}u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=$.$elm$=n.shadowRoot||n;{a=n["s-sc"]}{i=n["s-cr"];o=h&&(r.$flags$&1)!==0;l=false}K($,u);{d.$flags$|=1;if(f){Y(u.$elm$);var c=void 0;var p=void 0;var m=void 0;var g=void 0;var y=void 0;var b=void 0;var w=0;for(;w<X.length;w++){c=X[w];p=c.$nodeToRelocate$;if(!p["s-ol"]){m=v.createTextNode("");m["s-nr"]=p;p.parentNode.insertBefore(p["s-ol"]=m,p)}}for(w=0;w<X.length;w++){c=X[w];p=c.$nodeToRelocate$;if(c.$slotRefNode$){g=c.$slotRefNode$.parentNode;y=c.$slotRefNode$.nextSibling;m=p["s-ol"];while(m=m.previousSibling){b=m["s-nr"];if(b&&b["s-sn"]===p["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==p.parentNode||p.nextSibling!==y){if(p!==y){if(!p["s-hn"]&&p["s-ol"]){p["s-hn"]=p["s-ol"].parentNode.nodeName}g.insertBefore(p,y)}}}else{if(p.nodeType===1){p.hidden=true}}}}if(l){Q(u.$elm$)}d.$flags$&=~1;X.length=0}};var te=e("g",(function(e){return Se(e).$hostElement$}));var ne=e("c",(function(e,t,n){var r=te(e);return{emit:function(e){return re(r,t,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:e})}}}));var re=function(e,t,n){var r=d.ce(t,n);e.dispatchEvent(r);return r};var ae=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var ie=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}ae(e,e.$ancestorComponent$);var n=function(){return se(e,t)};return ze(n)};var se=function(e,t){var n=N("scheduleUpdate",e.$cmpMeta$.$tagName$);var r=e.$lazyInstance$;var a;if(t){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var t=e[0],n=e[1];return ue(r,t,n)}));e.$queuedListeners$=null}}{a=ue(r,"componentWillLoad")}}n();return ce(a,(function(){return oe(e,r,t)}))};var oe=function(e,t,r){return __awaiter(n,void 0,void 0,(function(){var n,a,i,s,o,l;return __generator(this,(function(f){n=e.$hostElement$;a=N("update",e.$cmpMeta$.$tagName$);i=n["s-rc"];if(r){C(e)}s=N("render",e.$cmpMeta$.$tagName$);{le(e,t)}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{o=n["s-p"];l=function(){return fe(e)};if(o.length===0){l()}else{Promise.all(o).then(l);e.$flags$|=4;o.length=0}}return[2]}))}))};var le=function(e,t,n){try{t=t.render();{e.$flags$&=~16}{e.$flags$|=2}{{{ee(e,t)}}}}catch(r){Le(r,e.$hostElement$)}return null};var fe=function(e){var t=e.$cmpMeta$.$tagName$;var n=e.$hostElement$;var r=N("postUpdate",t);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;{ue(a,"componentDidRender")}if(!(e.$flags$&64)){e.$flags$|=64;{ve(n)}{ue(a,"componentDidLoad")}r();{e.$onReadyResolve$(n);if(!i){$e()}}}else{r()}{e.$onInstanceResolve$(n)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Be((function(){return ie(e,false)}))}e.$flags$&=~(4|512)}};var $e=function(e){{ve(v.documentElement)}Be((function(){return re(c,"appload",{detail:{namespace:r}})}))};var ue=function(e,t,n){if(e&&e[t]){try{return e[t](n)}catch(r){Le(r)}}return undefined};var ce=function(e,t){return e&&e.then?e.then(t):t()};var ve=function(e){return e.setAttribute("hydrated","")};var de=function(e,t){if(e!=null&&!E(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var he=function(e,t){return Se(e).$instanceValues$.get(t)};var pe=function(e,t,n,r){var a=Se(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(t);var o=a.$flags$;var l=a.$lazyInstance$;n=de(n,r.$members$[t][0]);if((!(o&8)||s===undefined)&&n!==s){a.$instanceValues$.set(t,n);if(l){if(r.$watchers$&&o&128){var f=r.$watchers$[t];if(f){f.map((function(e){try{l[e](n,s,t)}catch(r){Le(r,i)}}))}}if((o&(2|16))===2){ie(a,false)}}}};var me=function(e,t,n){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var r=Object.entries(t.$members$);var a=e.prototype;r.map((function(e){var r=e[0],i=e[1][0];if(i&31||n&2&&i&32){Object.defineProperty(a,r,{get:function(){return he(this,r)},set:function(e){pe(this,r,e,t)},configurable:true,enumerable:true})}else if(n&1&&i&64){Object.defineProperty(a,r,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var n=Se(this);return n.$onInstancePromise$.then((function(){var t;return(t=n.$lazyInstance$)[r].apply(t,e)}))}})}}));if(n&1){var i=new Map;a.attributeChangedCallback=function(e,t,n){var r=this;d.jmp((function(){var t=i.get(e);if(r.hasOwnProperty(t)){n=r[t];delete r[t]}else if(a.hasOwnProperty(t)&&typeof r[t]==="number"&&r[t]==n){return}r[t]=n===null&&typeof r[t]==="boolean"?false:n}))};e.observedAttributes=r.filter((function(e){var t=e[0],n=e[1];return n[0]&15})).map((function(e){var n=e[0],r=e[1];var a=r[1]||n;i.set(a,n);if(r[0]&512){t.$attrsToReflect$.push([n,a])}return a}))}}return e};var ge=function(e,r,a,i,s){return __awaiter(n,void 0,void 0,(function(){var e,n,i,o,l,f,$;return __generator(this,(function(u){switch(u.label){case 0:if(!((r.$flags$&32)===0))return[3,5];r.$flags$|=32;s=ke(a);if(!s.then)return[3,2];e=_();return[4,s];case 1:s=u.sent();e();u.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}me(s,a,2);s.isProxied=true}n=N("createInstance",a.$tagName$);{r.$flags$|=8}try{new s(r)}catch(c){Le(c)}{r.$flags$&=~8}{r.$flags$|=128}n();ye(r.$lazyInstance$);if(!s.style)return[3,5];i=s.style;o=L(a);if(!!Ee.has(o))return[3,5];l=N("registerStyles",a.$tagName$);if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-b0fda71d.system.js").then((function(e){return e.scopeCss(i,o,false)}))];case 3:i=u.sent();u.label=4;case 4:x(o,i,!!(a.$flags$&1));l();u.label=5;case 5:f=r.$ancestorComponent$;$=function(){return ie(r,true)};if(f&&f["s-rc"]){f["s-rc"].push($)}else{$()}return[2]}}))}))};var ye=function(e){{ue(e,"connectedCallback")}};var be=function(e){if((d.$flags$&1)===0){var t=Se(e);var n=t.$cmpMeta$;var r=N("connectedCallback",n.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{if(n.$flags$&(4|8)){we(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){ae(t,t.$ancestorComponent$=a);break}}}if(n.$members$){Object.entries(n.$members$).map((function(t){var n=t[0],r=t[1][0];if(r&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{ge(e,t,n)}}else{g(e,t,n.$listeners$);ye(t.$lazyInstance$)}r()}};var we=function(e){var t=e["s-cr"]=v.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Re=function(e){if((d.$flags$&1)===0){var t=Se(e);var n=t.$lazyInstance$;{if(t.$rmListeners$){t.$rmListeners$.map((function(e){return e()}));t.$rmListeners$=undefined}}{ue(n,"disconnectedCallback")}}};var Ne=e("b",(function(e,t){if(t===void 0){t={}}var n=N();var r=[];var a=t.exclude||[];var i=c.customElements;var s=v.head;var o=s.querySelector("meta[charset]");var l=v.createElement("style");var f=[];var $;var u=true;Object.assign(d,t);d.$resourcesUrl$=new URL(t.resourcesUrl||"./",v.baseURI).href;e.map((function(e){e[1].map((function(t){var n={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{n.$members$=t[2]}{n.$listeners$=t[3]}{n.$attrsToReflect$=[]}{n.$watchers$={}}if(!h&&n.$flags$&1){n.$flags$|=8}var s=n.$tagName$;var o=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;Te(t,n);if(n.$flags$&1){if(h){{t.attachShadow({mode:"open"})}}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(u){f.push(this)}else{d.jmp((function(){return be(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;d.jmp((function(){return Re(e)}))};t.prototype.componentOnReady=function(){return Se(this).$onReadyPromise$};return t}(HTMLElement);n.$lazyBundleId$=e[0];if(!a.includes(s)&&!i.get(s)){r.push(s);i.define(s,me(o,n,1))}}))}));{l.innerHTML=r+R;l.setAttribute("data-styles","");s.insertBefore(l,o?o.nextSibling:s.firstChild)}u=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{d.jmp((function(){return $=setTimeout($e,30)}))}}n()}));var _e=new WeakMap;var Se=function(e){return _e.get(e)};var xe=e("r",(function(e,t){return _e.set(t.$lazyInstance$=e,t)}));var Te=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e}))}{n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}g(e,n,t.$listeners$);return _e.set(e,n)};var Ce=function(e,t){return t in e};var Le=function(e,t){return(0,console.error)(e,t)};var Pe=new Map;var ke=function(e,n,r){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var s=Pe.get(i);if(s){return s[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{Pe.set(i,e)}return e[a]}),Le)};var Ee=new Map;var je=[];var Ae=[];var Ie=function(e,t){return function(n){e.push(n);if(!u){u=true;if(t&&d.$flags$&4){Be(Oe)}else{d.raf(Oe)}}}};var Me=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(n){Le(n)}}e.length=0};var Oe=function(){Me(je);{Me(Ae);if(u=je.length>0){d.raf(Oe)}}};var Be=function(e){return p().then(e)};var ze=Ie(Ae,true)}}}));