const e="ku4web-components";let t,n,l,o=!1,s=!1,c=!1,r=0,i=!1;const a="undefined"!=typeof window?window:{},f=a.CSS,u=a.document||{head:{}},d={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},p=(()=>(u.head.attachShadow+"").indexOf("[native")>-1)(),$=e=>Promise.resolve(e),m=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),b=(e,t,n)=>{n&&n.map(([n,l,o])=>{const s=h(e,n),c=y(t,o),r=w(n);d.ael(s,l,c,r),(t.o=t.o||[]).push(()=>d.rel(s,l,c,r))})},y=(e,t)=>n=>{256&e.t?e.s[t](n):(e.i=e.i||[]).push([t,n])},h=(e,t)=>8&t?a:e,w=e=>0!=(2&e),g=new WeakMap,k=e=>"sc-"+e.u,_={},j=e=>"object"==(e=typeof e)||"function"===e,v="undefined"!=typeof Deno,M=!(v||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),S=(v&&Deno,M?process:v&&Deno,M?process:v&&Deno,(e,t,...n)=>{let l=null,o=null,s=!1,c=!1,r=[];const i=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!j(l))&&(l+=""),s&&c?r[r.length-1].p+=l:r.push(s?D(null,l):l),c=s)};if(i(n),t){t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}const a=D(e,null);return a.$=t,r.length>0&&(a.m=r),a.h=o,a}),D=(e,t)=>({t:0,g:e,p:t,k:null,m:null,$:null,h:null}),O={},R=(e,t,n,l,o,s)=>{if(n!==l){let r=fe(e,t),i=t.toLowerCase();if("class"===t){const t=e.classList,o=P(n),s=P(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if(r||"o"!==t[0]||"n"!==t[1]){const i=j(l);if((r||i&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(c){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!r||4&s||o)&&!i&&e.setAttribute(t,l=!0===l?"":l)}else t="-"===t[2]?t.slice(3):fe(a,i)?i.slice(2):i[2]+t.slice(3),n&&d.rel(e,t,n,!1),l&&d.ael(e,t,l,!1)}},C=/\s/,P=e=>e?e.split(C):[],T=(e,t,n,l)=>{const o=11===t.k.nodeType&&t.k.host?t.k.host:t.k,s=e&&e.$||_,c=t.$||_;for(l in s)l in c||R(o,l,s[l],void 0,n,t.t);for(l in c)R(o,l,s[l],c[l],n,t.t)},L=(e,s,r,i)=>{let a,f,d,p=s.m[r],$=0;if(o||(c=!0,"slot"===p.g&&(t&&i.classList.add(t+"-s"),p.t|=p.m?2:1)),null!==p.p)a=p.k=u.createTextNode(p.p);else if(1&p.t)a=p.k=u.createTextNode("");else if(a=p.k=u.createElement(2&p.t?"slot-fb":p.g),T(null,p,!1),null!=t&&a["s-si"]!==t&&a.classList.add(a["s-si"]=t),p.m)for($=0;$<p.m.length;++$)f=L(e,p,$,a),f&&a.appendChild(f);return a["s-hn"]=l,3&p.t&&(a["s-sr"]=!0,a["s-cr"]=n,a["s-sn"]=p.h||"",d=e&&e.m&&e.m[r],d&&d.g===p.g&&e.k&&U(e.k,!1)),a},U=(e,t)=>{d.t|=1;const n=e.childNodes;for(let o=n.length-1;o>=0;o--){const e=n[o];e["s-hn"]!==l&&e["s-ol"]&&(q(e).insertBefore(e,W(e)),e["s-ol"].remove(),e["s-ol"]=void 0,c=!0),t&&U(e,t)}d.t&=-2},x=(e,t,n,o,s,c)=>{let r,i=e["s-cr"]&&e["s-cr"].parentNode||e;for(i.shadowRoot&&i.tagName===l&&(i=i.shadowRoot);s<=c;++s)o[s]&&(r=L(null,n,s,e),r&&(o[s].k=r,i.insertBefore(r,W(t))))},E=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(s=!0,(o=l.k)["s-ol"]?o["s-ol"].remove():U(o,!0),o.remove())},N=(e,t)=>e.g===t.g&&("slot"!==e.g||e.h===t.h),W=e=>e&&e["s-ol"]||e,q=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,A=(e,t)=>{const n=t.k=e.k,l=e.m,o=t.m,s=t.p;let c;null===s?("slot"===t.g||T(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s=0,c=0,r=t.length-1,i=t[0],a=t[r],f=l.length-1,u=l[0],d=l[f];for(;s<=r&&c<=f;)null==i?i=t[++s]:null==a?a=t[--r]:null==u?u=l[++c]:null==d?d=l[--f]:N(i,u)?(A(i,u),i=t[++s],u=l[++c]):N(a,d)?(A(a,d),a=t[--r],d=l[--f]):N(i,d)?("slot"!==i.g&&"slot"!==d.g||U(i.k.parentNode,!1),A(i,d),e.insertBefore(i.k,a.k.nextSibling),i=t[++s],d=l[--f]):N(a,u)?("slot"!==i.g&&"slot"!==d.g||U(a.k.parentNode,!1),A(a,u),e.insertBefore(a.k,i.k),a=t[--r],u=l[++c]):(o=L(t&&t[c],n,c,e),u=l[++c],o&&q(i.k).insertBefore(o,W(i.k)));s>r?x(e,null==l[f+1]?null:l[f+1].k,n,l,c,f):c>f&&E(t,s,r)})(n,l,t,o):null!==o?(null!==e.p&&(n.textContent=""),x(n,null,t,o,0,o.length-1)):null!==l&&E(l,0,l.length-1)):(c=n["s-cr"])?c.parentNode.textContent=s:e.p!==s&&(n.data=s)},F=e=>{let t,n,l,o,s,c,r=e.childNodes;for(n=0,l=r.length;n<l;n++)if(t=r[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(r[o]["s-hn"]!==t["s-hn"])if(c=r[o].nodeType,""!==s){if(1===c&&s===r[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===c||3===c&&""!==r[o].textContent.trim()){t.hidden=!0;break}F(t)}},H=[],V=e=>{let t,n,l,o,c,r,i=0,a=e.childNodes,f=a.length;for(;i<f;i++){if(t=a[i],t["s-sr"]&&(n=t["s-cr"]))for(l=n.parentNode.childNodes,o=t["s-sn"],r=l.length-1;r>=0;r--)n=l[r],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(z(n,o)?(c=H.find(e=>e._===n),s=!0,n["s-sn"]=n["s-sn"]||o,c?c.j=t:H.push({j:t,_:n}),n["s-sr"]&&H.map(e=>{z(e._,n["s-sn"])&&(c=H.find(e=>e._===n),c&&!e.j&&(e.j=c.j))})):H.some(e=>e._===n)||H.push({_:n}));1===t.nodeType&&V(t)}},z=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,B=e=>re(e).v,G=(e,t,n)=>{const l=B(e);return{emit:e=>I(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},I=(e,t,n)=>{const l=d.ce(t,n);return e.dispatchEvent(l),l},J=(e,t)=>{t&&!e.M&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.M=t))},K=(e,t)=>{if(e.t|=16,!(4&e.t))return J(e,e.S),_e(()=>Q(e,t));e.t|=512},Q=(e,t)=>{const n=e.s;let l;return t&&(e.t|=256,e.i&&(e.i.map(([e,t])=>te(n,e,t)),e.i=null),l=te(n,"componentWillLoad")),ne(l,()=>X(e,n,t))},X=(e,r,i)=>{const a=e.v,f=a["s-rc"];i&&(e=>{const t=e.D,n=e.v,l=t.t,o=((e,t)=>{let n=k(t),l=$e.get(n);if(e=11===e.nodeType?e:u,l)if("string"==typeof l){let t,o=g.get(e=e.head||e);o||g.set(e,o=new Set),o.has(n)||(t=u.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(p&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);((e,r)=>{const i=e.v,a=e.D,f=e.O||D(null,null),$=(e=>e&&e.g===O)(r)?r:S(null,null,r);if(l=i.tagName,a.R&&($.$=$.$||{},a.R.map(([e,t])=>$.$[t]=i[e])),$.g=null,$.t|=4,e.O=$,$.k=f.k=i.shadowRoot||i,t=i["s-sc"],n=i["s-cr"],o=p&&0!=(1&a.t),s=!1,A(f,$),d.t|=1,c){let e,t,n,l,o,s;V($.k);let c=0;for(;c<H.length;c++)e=H[c],t=e._,t["s-ol"]||(n=u.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(c=0;c<H.length;c++)if(e=H[c],t=e._,e.j){for(l=e.j.parentNode,o=e.j.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}s&&F($.k),d.t&=-2,H.length=0})(e,Y(e,r)),f&&(f.map(e=>e()),a["s-rc"]=void 0);{const t=a["s-p"],n=()=>Z(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},Y=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(n){ue(n)}return t},Z=e=>{const t=e.v,n=e.s,l=e.S;te(n,"componentDidRender"),64&e.t||(e.t|=64,le(t),te(n,"componentDidLoad"),e.C(t),l||ee()),e.P(t),e.M&&(e.M(),e.M=void 0),512&e.t&&ke(()=>K(e,!1)),e.t&=-517},ee=()=>{le(u.documentElement),d.t|=2,ke(()=>I(a,"appload",{detail:{namespace:"ku4web-components"}}))},te=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){ue(l)}},ne=(e,t)=>e&&e.then?e.then(t):t(),le=e=>e.setAttribute("hydrated",""),oe=(e,t,n)=>{if(t.T){e.watchers&&(t.L=e.watchers);const l=Object.entries(t.T),o=e.prototype;if(l.map(([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return((e,t)=>re(this).U.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=re(e),s=o.U.get(t),c=o.t,r=o.s;if(n=((e,t)=>null==e||j(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.T[t][0]),!(8&c&&void 0!==s||n===s)&&(o.U.set(t,n),r)){if(l.L&&128&c){const e=l.L[t];e&&e.map(e=>{try{r[e](n,s,t)}catch(l){ue(l)}})}2==(18&c)&&K(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=re(this);return n.N.then(()=>n.s[e](...t))}})}),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){d.jmp(()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.R.push([e,o]),o})}}return e},se=(e,t={})=>{const n=[],l=t.exclude||[],o=a.customElements,s=u.head,c=s.querySelector("meta[charset]"),r=u.createElement("style"),i=[];let f,$=!0;Object.assign(d,t),d.l=new URL(t.resourcesUrl||"./",u.baseURI).href,t.syncQueue&&(d.t|=4),e.map(e=>e[1].map(t=>{const s={t:t[0],u:t[1],T:t[2],W:t[3]};s.T=t[2],s.W=t[3],s.R=[],s.L={},!p&&1&s.t&&(s.t|=8);const c=s.u,r=class extends HTMLElement{constructor(e){super(e),ae(e=this,s),1&s.t&&(p?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){f&&(clearTimeout(f),f=null),$?i.push(this):d.jmp(()=>(e=>{if(0==(1&d.t)){const t=re(e),n=t.D,l=()=>{};if(1&t.t)b(e,t,n.W);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=u.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){J(t,t.S=n);break}}n.T&&Object.entries(n.T).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),ke(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=pe(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.L=o.watchers,oe(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(r){ue(r)}t.t&=-9,t.t|=128,e()}if(o.style){let e=o.style;const t=k(n);if(!$e.has(t)){const l=()=>{};8&n.t&&(e=await __sc_import_ku4web_components("./p-f2ed7ced.js").then(n=>n.scopeCss(e,t,!1))),((e,t,n)=>{let l=$e.get(e);m&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,$e.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.S,c=()=>K(t,!0);s&&s["s-rc"]?s["s-rc"].push(c):c()})(0,t,n))}l()}})(this))}disconnectedCallback(){d.jmp(()=>(()=>{if(0==(1&d.t)){const e=re(this),t=e.s;e.o&&(e.o.map(e=>e()),e.o=void 0),te(t,"componentDidUnload")}})())}forceUpdate(){(()=>{{const e=re(this);e.v.isConnected&&2==(18&e.t)&&K(e,!1)}})()}componentOnReady(){return re(this).q}};s.A=e[0],l.includes(c)||o.get(c)||(n.push(c),o.define(c,oe(r,s,1)))})),r.innerHTML=n+"{visibility:hidden}[hydrated]{visibility:inherit}",r.setAttribute("data-styles",""),s.insertBefore(r,c?c.nextSibling:s.firstChild),$=!1,i.length?i.map(e=>e.connectedCallback()):d.jmp(()=>f=setTimeout(ee,30))},ce=new WeakMap,re=e=>ce.get(e),ie=(e,t)=>ce.set(t.s=e,t),ae=(e,t)=>{const n={t:0,v:e,D:t,U:new Map};return n.N=new Promise(e=>n.P=e),n.q=new Promise(e=>n.C=e),e["s-p"]=[],e["s-rc"]=[],b(e,n,t.W),ce.set(e,n)},fe=(e,t)=>t in e,ue=e=>console.error(e),de=new Map,pe=e=>{const t=e.u.replace(/-/g,"_"),n=e.A,l=de.get(n);return l?l[t]:__sc_import_ku4web_components(`./${n}.entry.js`).then(e=>(de.set(n,e),e[t]),ue)},$e=new Map,me=[],be=[],ye=[],he=(e,t)=>n=>{e.push(n),i||(i=!0,t&&4&d.t?ke(ge):d.raf(ge))},we=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(o){ue(o)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},ge=()=>{r++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){ue(t)}e.length=0})(me);{const e=2==(6&d.t)?performance.now()+14*Math.ceil(.1*r):1/0;we(be,e),we(ye,e),be.length>0&&(ye.push(...be),be.length=0),(i=me.length+be.length+ye.length>0)?d.raf(ge):r=0}},ke=e=>$().then(e),_e=he(be,!0);export{f as C,O as H,e as N,$ as a,se as b,G as c,u as d,B as g,S as h,d as p,ie as r,a as w}