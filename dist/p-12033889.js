const t="ku4web-components";let e,n,l,o=!1,s=!1,r=!1,c=!1;const i="undefined"!=typeof window?window:{},a=i.CSS,u=i.document||{head:{}},f=i.HTMLElement||class{},d={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l),ce:(t,e)=>new CustomEvent(t,e)},$=(()=>(u.head.attachShadow+"").indexOf("[native")>-1)(),h=t=>Promise.resolve(t),m=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),p=(t,e,n)=>{n&&n.map(([n,l,o])=>{const s=y(t,n),r=b(e,o),c=w(n);d.ael(s,l,r,c),(e.o=e.o||[]).push(()=>d.rel(s,l,r,c))})},b=(t,e)=>n=>{256&t.t?t.s[e](n):(t.i=t.i||[]).push([e,n])},y=(t,e)=>8&e?i:t,w=t=>0!=(2&t),g=new WeakMap,j=t=>"sc-"+t.u,k={},v=t=>"object"==(t=typeof t)||"function"===t,O=(t,e,...n)=>{let l=null,o=null,s=!1,r=!1,c=[];const i=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof t&&!v(l))&&(l+=""),s&&r?c[c.length-1].$+=l:c.push(s?S(null,l):l),r=s)};if(i(n),e){e.name&&(o=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}const a=S(t,null);return a.h=e,c.length>0&&(a.m=c),a.p=o,a},S=(t,e)=>({t:0,g:t,$:e,j:null,m:null,h:null,p:null}),C={},M=(t,e,n,l,o,s)=>{if(n!==l){let c=ht(t,e),a=e.toLowerCase();if("class"===e){const e=t.classList,o=N(n),s=N(l);e.remove(...o.filter(t=>t&&!s.includes(t))),e.add(...s.filter(t=>t&&!o.includes(t)))}else if("style"===e){for(const e in n)l&&null!=l[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in l)n&&l[e]===n[e]||(e.includes("-")?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if(c||"o"!==e[0]||"n"!==e[1]){const i=v(l);if((c||i&&null!==l)&&!o)try{if(t.tagName.includes("-"))t[e]=l;else{let o=null==l?"":l;"list"===e?c=!1:null!=n&&t[e]==o||(t[e]=o)}}catch(r){}null==l||!1===l?!1===l&&""!==t.getAttribute(e)||t.removeAttribute(e):(!c||4&s||o)&&!i&&t.setAttribute(e,l=!0===l?"":l)}else e="-"===e[2]?e.slice(3):ht(i,a)?a.slice(2):a[2]+e.slice(3),n&&d.rel(t,e,n,!1),l&&d.ael(t,e,l,!1)}},R=/\s/,N=t=>t?t.split(R):[],P=(t,e,n,l)=>{const o=11===e.j.nodeType&&e.j.host?e.j.host:e.j,s=t&&t.h||k,r=e.h||k;for(l in s)l in r||M(o,l,s[l],void 0,n,e.t);for(l in r)M(o,l,s[l],r[l],n,e.t)},T=(t,s,c,i)=>{let a,f,d,$=s.m[c],h=0;if(o||(r=!0,"slot"===$.g&&(e&&i.classList.add(e+"-s"),$.t|=$.m?2:1)),null!==$.$)a=$.j=u.createTextNode($.$);else if(1&$.t)a=$.j=u.createTextNode("");else if(a=$.j=u.createElement(2&$.t?"slot-fb":$.g),P(null,$,!1),null!=e&&a["s-si"]!==e&&a.classList.add(a["s-si"]=e),$.m)for(h=0;h<$.m.length;++h)f=T(t,$,h,a),f&&a.appendChild(f);return a["s-hn"]=l,3&$.t&&(a["s-sr"]=!0,a["s-cr"]=n,a["s-sn"]=$.p||"",d=t&&t.m&&t.m[c],d&&d.g===$.g&&t.j&&x(t.j,!1)),a},x=(t,e)=>{d.t|=1;const n=t.childNodes;for(let o=n.length-1;o>=0;o--){const t=n[o];t["s-hn"]!==l&&t["s-ol"]&&(D(t).insertBefore(t,W(t)),t["s-ol"].remove(),t["s-ol"]=void 0,r=!0),e&&x(t,e)}d.t&=-2},E=(t,e,n,o,s,r)=>{let c,i=t["s-cr"]&&t["s-cr"].parentNode||t;for(i.shadowRoot&&i.tagName===l&&(i=i.shadowRoot);s<=r;++s)o[s]&&(c=T(null,n,s,t),c&&(o[s].j=c,i.insertBefore(c,W(e))))},L=(t,e,n,l,o)=>{for(;e<=n;++e)(l=t[e])&&(s=!0,(o=l.j)["s-ol"]?o["s-ol"].remove():x(o,!0),o.remove())},A=(t,e)=>t.g===e.g&&("slot"!==t.g||t.p===e.p),W=t=>t&&t["s-ol"]||t,D=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,F=(t,e)=>{const n=e.j=t.j,l=t.m,o=e.m,s=e.$;let r;null===s?("slot"===e.g||P(t,e,!1),null!==l&&null!==o?((t,e,n,l)=>{let o,s=0,r=0,c=e.length-1,i=e[0],a=e[c],u=l.length-1,f=l[0],d=l[u];for(;s<=c&&r<=u;)null==i?i=e[++s]:null==a?a=e[--c]:null==f?f=l[++r]:null==d?d=l[--u]:A(i,f)?(F(i,f),i=e[++s],f=l[++r]):A(a,d)?(F(a,d),a=e[--c],d=l[--u]):A(i,d)?("slot"!==i.g&&"slot"!==d.g||x(i.j.parentNode,!1),F(i,d),t.insertBefore(i.j,a.j.nextSibling),i=e[++s],d=l[--u]):A(a,f)?("slot"!==i.g&&"slot"!==d.g||x(a.j.parentNode,!1),F(a,f),t.insertBefore(a.j,i.j),a=e[--c],f=l[++r]):(o=T(e&&e[r],n,r,t),f=l[++r],o&&D(i.j).insertBefore(o,W(i.j)));s>c?E(t,null==l[u+1]?null:l[u+1].j,n,l,r,u):r>u&&L(e,s,c)})(n,l,e,o):null!==o?(null!==t.$&&(n.textContent=""),E(n,null,e,o,0,o.length-1)):null!==l&&L(l,0,l.length-1)):(r=n["s-cr"])?r.parentNode.textContent=s:t.$!==s&&(n.data=s)},U=t=>{let e,n,l,o,s,r,c=t.childNodes;for(n=0,l=c.length;n<l;n++)if(e=c[n],1===e.nodeType){if(e["s-sr"])for(s=e["s-sn"],e.hidden=!1,o=0;o<l;o++)if(c[o]["s-hn"]!==e["s-hn"])if(r=c[o].nodeType,""!==s){if(1===r&&s===c[o].getAttribute("slot")){e.hidden=!0;break}}else if(1===r||3===r&&""!==c[o].textContent.trim()){e.hidden=!0;break}U(e)}},q=[],H=t=>{let e,n,l,o,r,c,i=0,a=t.childNodes,u=a.length;for(;i<u;i++){if(e=a[i],e["s-sr"]&&(n=e["s-cr"]))for(l=n.parentNode.childNodes,o=e["s-sn"],c=l.length-1;c>=0;c--)n=l[c],n["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||(V(n,o)?(r=q.find(t=>t.k===n),s=!0,n["s-sn"]=n["s-sn"]||o,r?r.v=e:q.push({v:e,k:n}),n["s-sr"]&&q.map(t=>{V(t.k,n["s-sn"])&&(r=q.find(t=>t.k===n),r&&!t.v&&(t.v=r.v))})):q.some(t=>t.k===n)||q.push({k:n}));1===e.nodeType&&H(e)}},V=(t,e)=>1===t.nodeType?null===t.getAttribute("slot")&&""===e||t.getAttribute("slot")===e:t["s-sn"]===e||""===e,_=t=>ft(t).O,z=(t,e,n)=>{const l=_(t);return{emit:t=>B(l,e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t})}},B=(t,e,n)=>{const l=d.ce(e,n);return t.dispatchEvent(l),l},G=(t,e)=>{e&&!t.S&&e["s-p"]&&e["s-p"].push(new Promise(e=>t.S=e))},I=(t,e)=>{if(t.t|=16,!(4&t.t))return G(t,t.C),St(()=>J(t,e));t.t|=512},J=(t,e)=>{const n=t.s;let l;return e&&(t.t|=256,t.i&&(t.i.map(([t,e])=>Z(n,t,e)),t.i=null),l=Z(n,"componentWillLoad")),tt(l,()=>K(t,n,e))},K=async(t,c,i)=>{const a=t.O,f=a["s-rc"];i&&(t=>{const e=t.M,n=t.O,l=e.t,o=((t,e)=>{let n=j(e),l=yt.get(n);if(t=11===t.nodeType?t:u,l)if("string"==typeof l){let e,o=g.get(t=t.head||t);o||g.set(t,o=new Set),o.has(n)||(e=u.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),o&&o.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})($&&n.shadowRoot?n.shadowRoot:n.getRootNode(),e);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(t);((t,c)=>{const i=t.O,a=t.M,f=t.R||S(null,null),h=(t=>t&&t.g===C)(c)?c:O(null,null,c);if(l=i.tagName,a.N&&(h.h=h.h||{},a.N.map(([t,e])=>h.h[e]=i[t])),h.g=null,h.t|=4,t.R=h,h.j=f.j=i.shadowRoot||i,e=i["s-sc"],n=i["s-cr"],o=$&&0!=(1&a.t),s=!1,F(f,h),d.t|=1,r){let t,e,n,l,o,s;H(h.j);let r=0;for(;r<q.length;r++)t=q[r],e=t.k,e["s-ol"]||(n=u.createTextNode(""),n["s-nr"]=e,e.parentNode.insertBefore(e["s-ol"]=n,e));for(r=0;r<q.length;r++)if(t=q[r],e=t.k,t.v){for(l=t.v.parentNode,o=t.v.nextSibling,n=e["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===e["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==e.parentNode||e.nextSibling!==o)&&e!==o&&(!e["s-hn"]&&e["s-ol"]&&(e["s-hn"]=e["s-ol"].parentNode.nodeName),l.insertBefore(e,o))}else 1===e.nodeType&&(e.hidden=!0)}s&&U(h.j),d.t&=-2,q.length=0})(t,Q(t,c)),f&&(f.map(t=>t()),a["s-rc"]=void 0);{const e=a["s-p"],n=()=>X(t);0===e.length?n():(Promise.all(e).then(n),t.t|=4,e.length=0)}},Q=(t,e)=>{try{e=e.render(),t.t&=-17,t.t|=2}catch(n){mt(n)}return e},X=t=>{const e=t.O,n=t.s,l=t.C;Z(n,"componentDidRender"),64&t.t||(t.t|=64,et(e),Z(n,"componentDidLoad"),t.P(e),l||Y()),t.T(e),t.S&&(t.S(),t.S=void 0),512&t.t&&Ot(()=>I(t,!1)),t.t&=-517},Y=()=>{et(u.documentElement),Ot(()=>B(i,"appload",{detail:{namespace:"ku4web-components"}}))},Z=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){mt(l)}},tt=(t,e)=>t&&t.then?t.then(e):e(),et=t=>t.setAttribute("hydrated",""),nt=(t,e,n)=>{if(e.L){t.watchers&&(e.A=t.watchers);const l=Object.entries(e.L),o=t.prototype;if(l.map(([t,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,t,{get(){return((t,e)=>ft(this).W.get(e))(0,t)},set(n){((t,e,n,l)=>{const o=ft(t),s=o.W.get(e),r=o.t,c=o.s;if(n=((t,e)=>null==t||v(t)?t:4&e?"false"!==t&&(""===t||!!t):2&e?parseFloat(t):1&e?t+"":t)(n,l.L[e][0]),!(8&r&&void 0!==s||n===s)&&(o.W.set(e,n),c)){if(l.A&&128&r){const t=l.A[e];t&&t.map(t=>{try{c[t](n,s,e)}catch(l){mt(l)}})}2==(18&r)&&I(o,!1)}})(this,t,n,e)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,t,{value(...e){const n=ft(this);return n.D.then(()=>n.s[t](...e))}})}),1&n){const n=new Map;o.attributeChangedCallback=function(t,e,l){d.jmp(()=>{const e=n.get(t);this[e]=(null!==l||"boolean"!=typeof this[e])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,l])=>{const o=l[1]||t;return n.set(o,t),512&l[0]&&e.N.push([t,o]),o})}}return t},lt=t=>{const e=t.cloneNode;t.cloneNode=function(t){const n=this,l=n.shadowRoot&&$,o=e.call(n,!!l&&t);if(!l&&t){let t,e=0;for(;e<n.childNodes.length;e++)t=n.childNodes[e]["s-nr"],t&&(o.__appendChild?o.__appendChild(t.cloneNode(!0)):o.appendChild(t.cloneNode(!0)))}return o}},ot=t=>{t.__appendChild=t.appendChild,t.appendChild=function(t){const e=t["s-sn"]=rt(t),n=ct(this.childNodes,e);if(n){const l=it(n,e),o=l[l.length-1];return o.parentNode.insertBefore(t,o.nextSibling)}return this.__appendChild(t)}},st=(t,e)=>{class n extends Array{item(t){return this[t]}}if(8&e.t){const e=t.__lookupGetter__("childNodes");Object.defineProperty(t,"children",{get(){return this.childNodes.map(t=>1===t.nodeType)}}),Object.defineProperty(t,"childElementCount",{get:()=>t.children.length}),Object.defineProperty(t,"childNodes",{get(){const t=e.call(this);if(0==(1&d.t)&&2&ft(this).t){const e=new n;for(let n=0;n<t.length;n++){const l=t[n]["s-nr"];l&&e.push(l)}return e}return n.from(t)}})}},rt=t=>t["s-sn"]||1===t.nodeType&&t.getAttribute("slot")||"",ct=(t,e)=>{let n,l=0;for(;l<t.length;l++){if(n=t[l],n["s-sr"]&&n["s-sn"]===e)return n;if(n=ct(n.childNodes,e),n)return n}return null},it=(t,e)=>{const n=[t];for(;(t=t.nextSibling)&&t["s-sn"]===e;)n.push(t);return n},at=(t,e={})=>{const n=[],l=e.exclude||[],o=i.customElements,s=u.head,r=s.querySelector("meta[charset]"),c=u.createElement("style"),a=[];let f,h=!0;Object.assign(d,e),d.l=new URL(e.resourcesUrl||"./",u.baseURI).href,t.map(t=>t[1].map(e=>{const s={t:e[0],u:e[1],L:e[2],F:e[3]};s.L=e[2],s.F=e[3],s.N=[],s.A={},!$&&1&s.t&&(s.t|=8);const r=s.u,c=class extends HTMLElement{constructor(t){super(t),$t(t=this,s),1&s.t&&($?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t)),st(t,s)}connectedCallback(){f&&(clearTimeout(f),f=null),h?a.push(this):d.jmp(()=>(t=>{if(0==(1&d.t)){const e=ft(t),n=e.M,l=()=>{};if(1&e.t)p(t,e,n.F);else{e.t|=1,12&n.t&&(t=>{const e=t["s-cr"]=u.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)})(t);{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){G(e,e.C=n);break}}n.L&&Object.entries(n.L).map(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),(async(t,e,n,l,o)=>{if(0==(32&e.t)){{if(e.t|=32,(o=bt(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(n.A=o.watchers,nt(o,n,2),o.isProxied=!0);const t=()=>{};e.t|=8;try{new o(e)}catch(c){mt(c)}e.t&=-9,e.t|=128,t()}if(o.style){let t=o.style;const e=j(n);if(!yt.has(e)){const l=()=>{};8&n.t&&(t=await import("./p-47565fe0.js").then(n=>n.scopeCss(t,e,!1))),((t,e,n)=>{let l=yt.get(t);m&&n?(l=l||new CSSStyleSheet,l.replace(e)):l=e,yt.set(t,l)})(e,t,!!(1&n.t)),l()}}}const s=e.C,r=()=>I(e,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,e,n)}l()}})(this))}disconnectedCallback(){d.jmp(()=>(()=>{if(0==(1&d.t)){const t=ft(this),e=t.s;t.o&&(t.o.map(t=>t()),t.o=void 0),Z(e,"disconnectedCallback")}})())}componentOnReady(){return ft(this).U}};lt(c.prototype),ot(c.prototype),s.q=t[0],l.includes(r)||o.get(r)||(n.push(r),o.define(r,nt(c,s,1)))})),c.innerHTML=n+"{visibility:hidden}[hydrated]{visibility:inherit}",c.setAttribute("data-styles",""),s.insertBefore(c,r?r.nextSibling:s.firstChild),h=!1,a.length?a.map(t=>t.connectedCallback()):d.jmp(()=>f=setTimeout(Y,30))},ut=new WeakMap,ft=t=>ut.get(t),dt=(t,e)=>ut.set(e.s=t,e),$t=(t,e)=>{const n={t:0,O:t,M:e,W:new Map};return n.D=new Promise(t=>n.T=t),n.U=new Promise(t=>n.P=t),t["s-p"]=[],t["s-rc"]=[],p(t,n,e.F),ut.set(t,n)},ht=(t,e)=>e in t,mt=t=>console.error(t),pt=new Map,bt=t=>{const e=t.u.replace(/-/g,"_"),n=t.q,l=pt.get(n);return l?l[e]:import(`./${n}.entry.js`).then(t=>(pt.set(n,t),t[e]),mt)},yt=new Map,wt=[],gt=[],jt=(t,e)=>n=>{t.push(n),c||(c=!0,e&&4&d.t?Ot(vt):d.raf(vt))},kt=t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){mt(e)}t.length=0},vt=()=>{kt(wt),kt(gt),(c=wt.length>0)&&d.raf(vt)},Ot=t=>h().then(t),St=jt(gt,!0);export{a as C,f as H,t as N,h as a,at as b,C as c,u as d,z as e,_ as g,O as h,d as p,dt as r,i as w}