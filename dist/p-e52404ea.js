let e,t,n,o=!1,l=!1,s=!1;const r=new WeakMap,c=e=>"sc-"+e,i={},a=e=>"object"==(e=typeof e)||"function"===e,u=(e,t,...n)=>{let o=null,l=null,s=!1,r=!1,c=[];const i=t=>{for(let n=0;n<t.length;n++)o=t[n],Array.isArray(o)?i(o):null!=o&&"boolean"!=typeof o&&((s="function"!=typeof e&&!a(o))&&(o=String(o)),s&&r?c[c.length-1].t+=o:c.push(s?f(null,o):o),r=s)};if(i(n),t){t.name&&(l=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}const u=f(e,null);return u.o=t,c.length>0&&(u.l=c),u.s=l,u},f=(e,t)=>({u:0,p:e,t,$:null,l:null,o:null,s:null}),p={},m=(e,t,n,o,l,s)=>{if(n!==o){let c=ne(e,t),i=t.toLowerCase();if("class"===t){const t=e.classList,l=$(n),s=$(o);t.remove(...l.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!l.includes(e)))}else if("style"===t){for(const t in n)o&&null!=o[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in o)n&&o[t]===n[t]||(t.includes("-")?e.style.setProperty(t,o[t]):e.style[t]=o[t])}else if("ref"===t)o&&o(e);else if(c||"o"!==t[0]||"n"!==t[1]){const i=a(o);if((c||i&&null!==o)&&!l)try{if(e.tagName.includes("-"))e[t]=o;else{let l=null==o?"":o;"list"===t?c=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(r){}null==o||!1===o?e.removeAttribute(t):(!c||4&s||l)&&!i&&e.setAttribute(t,o=!0===o?"":o)}else t="-"===t[2]?t.slice(3):ne(z,i)?i.slice(2):i[2]+t.slice(3),n&&J.rel(e,t,n,!1),o&&J.ael(e,t,o,!1)}},d=/\s/,$=e=>e?e.split(d):[],w=(e,t,n,o)=>{const l=11===t.$.nodeType&&t.$.host?t.$.host:t.$,s=e&&e.o||i,r=t.o||i;for(o in s)o in r||m(l,o,s[o],void 0,n,t.u);for(o in r)m(l,o,s[o],r[o],n,t.u)},b=(l,r,c,i)=>{let a,u,f,p=r.l[c],m=0;if(o||(s=!0,"slot"===p.p&&(e&&i.classList.add(e+"-s"),p.u|=p.l?2:1)),null!==p.t)a=p.$=I.createTextNode(p.t);else if(1&p.u)a=p.$=I.createTextNode("");else if(a=p.$=I.createElement(2&p.u?"slot-fb":p.p),w(null,p,!1),null!=e&&a["s-si"]!==e&&a.classList.add(a["s-si"]=e),p.l)for(m=0;m<p.l.length;++m)u=b(l,p,m,a),u&&a.appendChild(u);return a["s-hn"]=n,3&p.u&&(a["s-sr"]=!0,a["s-cr"]=t,a["s-sn"]=p.s||"",f=l&&l.l&&l.l[c],f&&f.p===p.p&&l.$&&h(l.$,!1)),a},h=(e,t)=>{J.u|=1;const o=e.childNodes;for(let l=o.length-1;l>=0;l--){const e=o[l];e["s-hn"]!==n&&e["s-ol"]&&(g(e).insertBefore(e,k(e)),e["s-ol"].remove(),e["s-ol"]=void 0,s=!0),t&&h(e,t)}J.u&=-2},y=(e,t,o,l,s,r)=>{let c,i=e["s-cr"]&&e["s-cr"].parentNode||e;for(i.shadowRoot&&i.tagName===n&&(i=i.shadowRoot);s<=r;++s)l[s]&&(c=b(null,o,s,e),c&&(l[s].$=c,i.insertBefore(c,k(t))))},_=(e,t,n,o,s)=>{for(;t<=n;++t)(o=e[t])&&(s=o.$,U(o),l=!0,s["s-ol"]?s["s-ol"].remove():h(s,!0),s.remove())},v=(e,t)=>e.p===t.p&&("slot"!==e.p||e.s===t.s),k=e=>e&&e["s-ol"]||e,g=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,j=(e,t)=>{const n=t.$=e.$,o=e.l,l=t.l,s=t.t;let r;null===s?("slot"===t.p||w(e,t,!1),null!==o&&null!==l?((e,t,n,o)=>{let l,s=0,r=0,c=t.length-1,i=t[0],a=t[c],u=o.length-1,f=o[0],p=o[u];for(;s<=c&&r<=u;)null==i?i=t[++s]:null==a?a=t[--c]:null==f?f=o[++r]:null==p?p=o[--u]:v(i,f)?(j(i,f),i=t[++s],f=o[++r]):v(a,p)?(j(a,p),a=t[--c],p=o[--u]):v(i,p)?("slot"!==i.p&&"slot"!==p.p||h(i.$.parentNode,!1),j(i,p),e.insertBefore(i.$,a.$.nextSibling),i=t[++s],p=o[--u]):v(a,f)?("slot"!==i.p&&"slot"!==p.p||h(a.$.parentNode,!1),j(a,f),e.insertBefore(a.$,i.$),a=t[--c],f=o[++r]):(l=b(t&&t[r],n,r,e),f=o[++r],l&&g(i.$).insertBefore(l,k(i.$)));s>c?y(e,null==o[u+1]?null:o[u+1].$,n,o,r,u):r>u&&_(t,s,c)})(n,o,t,l):null!==l?(null!==e.t&&(n.textContent=""),y(n,null,t,l,0,l.length-1)):null!==o&&_(o,0,o.length-1)):(r=n["s-cr"])?r.parentNode.textContent=s:e.t!==s&&(n.data=s)},R=e=>{let t,n,o,l,s,r,c=e.childNodes;for(n=0,o=c.length;n<o;n++)if(t=c[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,l=0;l<o;l++)if(c[l]["s-hn"]!==t["s-hn"])if(r=c[l].nodeType,""!==s){if(1===r&&s===c[l].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==c[l].textContent.trim()){t.hidden=!0;break}R(t)}},M=[],S=e=>{let t,n,o,s,r,c,i=0,a=e.childNodes,u=a.length;for(;i<u;i++){if(t=a[i],t["s-sr"]&&(n=t["s-cr"]))for(o=n.parentNode.childNodes,s=t["s-sn"],c=o.length-1;c>=0;c--)n=o[c],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(L(n,s)?(r=M.find(e=>e.h===n),l=!0,n["s-sn"]=n["s-sn"]||s,r?r._=t:M.push({_:t,h:n}),n["s-sr"]&&M.forEach(e=>{L(e.h,n["s-sn"])&&(r=M.find(e=>e.h===n),r&&!e._&&(e._=r._))})):M.some(e=>e.h===n)||M.push({h:n}));1===t.nodeType&&S(t)}},L=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,U=e=>{e.o&&e.o.ref&&e.o.ref(null),e.l&&e.l.forEach(U)},O=(e,t)=>{t&&!e.v&&t["s-p"].push(new Promise(t=>e.v=t))},P=(e,t)=>{if(e.u|=16,4&e.u)return void(e.u|=512);const n=e.k,o=()=>C(e,n,t);let l;return O(e,e.g),t&&(e.u|=256,e.j&&(e.j.map(([e,t])=>A(n,e,t)),e.j=null),l=A(n,"componentWillLoad")),D(l,()=>de(o))},C=(i,a,m)=>{const d=i.R,$=d["s-rc"];m&&(e=>{const t=e.M,n=e.R,o=t.u,l=((e,t)=>{let n=c(t.S),o=re.get(n);if(e=11===e.nodeType?e:I,o)if("string"==typeof o){let t,l=r.get(e=e.head||e);l||r.set(e,l=new Set),l.has(n)||(t=I.createElement("style"),t.innerHTML=o,e.insertBefore(t,e.querySelector("link")),l&&l.add(n))}else e.adoptedStyleSheets.includes(o)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]);return n})(K&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&o&&(n["s-sc"]=l,n.classList.add(l+"-h"))})(i),((r,c)=>{const i=r.R,a=r.M,m=r.L||f(null,null),d=($=c)&&$.p===p?c:u(null,null,c);var $;if(n=i.tagName,a.U&&(d.o=d.o||{},a.U.forEach(([e,t])=>d.o[t]=i[e])),d.p=null,d.u|=4,r.L=d,d.$=m.$=i.shadowRoot||i,e=i["s-sc"],t=i["s-cr"],o=K&&0!=(1&a.u),l=!1,j(m,d),s){let e,t,n,o,l,s;S(d.$);let r=0;for(;r<M.length;r++)e=M[r],t=e.h,t["s-ol"]||(n=I.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(J.u|=1,r=0;r<M.length;r++)if(e=M[r],t=e.h,e._){for(o=e._.parentNode,l=e._.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&o===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){l=s;break}(!l&&o!==t.parentNode||t.nextSibling!==l)&&t!==l&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),o.insertBefore(t,l))}else 1===t.nodeType&&(t.hidden=!0);J.u&=-2}l&&R(d.$),M.length=0})(i,T(a)),i.u&=-17,i.u|=2,$&&($.forEach(e=>e()),d["s-rc"]=void 0);{const e=d["s-p"],t=()=>x(i);0===e.length?t():(Promise.all(e).then(t),i.u|=4,e.length=0)}},T=e=>{try{e=e.render()}catch(t){oe(t)}return e},x=e=>{const t=e.R,n=e.k,o=e.g;A(n,"componentDidRender"),64&e.u||(e.u|=64,F(t),A(n,"componentDidLoad"),e.O(t),o||E()),e.P(t),e.v&&(e.v(),e.v=void 0),512&e.u&&me(()=>P(e,!1)),e.u&=-517},E=()=>{F(I.documentElement),J.u|=2},A=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(o){oe(o)}},D=(e,t)=>e&&e.then?e.then(t):t(),F=e=>e.classList.add("hydrated"),W=(e,t,n)=>{if(t.C){e.watchers&&(t.T=e.watchers);const o=Object.entries(t.C),l=e.prototype;if(o.map(([e,[o]])=>{31&o||2&n&&32&o?Object.defineProperty(l,e,{get(){return t=e,Z(this).A.get(t);var t},set(n){((e,t,n,o)=>{const l=Z(this),s=l.A.get(t),r=l.u,c=l.k;var i,u;if(u=o.C[t][0],n=null==(i=n)||a(i)?i:4&u?"false"!==i&&(""===i||!!i):2&u?parseFloat(i):1&u?String(i):i,!(8&r&&void 0!==s||n===s)&&(l.A.set(t,n),c)){if(o.T&&128&r){const e=o.T[t];e&&e.map(e=>{try{c[e](n,s,t)}catch(o){oe(o)}})}2==(18&r)&&P(l,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&o&&Object.defineProperty(l,e,{value(...t){const n=Z(this);return n.D.then(()=>n.k[e](...t))}})}),1&n){const n=new Map;l.attributeChangedCallback=function(e,t,o){J.jmp(()=>{const t=n.get(e);this[t]=(null!==o||"boolean"!=typeof this[t])&&o})},e.observedAttributes=o.filter(([e,t])=>15&t[0]).map(([e,o])=>{const l=o[1]||e;return n.set(l,e),512&o[0]&&t.U.push([e,l]),l})}}return e},H=(e,t={})=>{const n=[],o=t.exclude||[],l=z.customElements,s=I.head,r=s.querySelector("meta[charset]"),i=I.createElement("style"),a=[];let u,f=!0;Object.assign(J,t),J.F=new URL(t.resourcesUrl||"./",I.baseURI).href,t.syncQueue&&(J.u|=4),e.map(e=>e[1].map(t=>{const s={u:t[0],S:t[1],C:t[2],W:t[3]};s.C=t[2],s.W=t[3],s.U=[],s.T={},!K&&1&s.u&&(s.u|=8);const r=s.S,i=class extends HTMLElement{constructor(e){super(e),te(e=this,s),1&s.u&&(K?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){u&&(clearTimeout(u),u=null),f?a.push(this):J.jmp(()=>(e=>{if(0==(1&J.u)){const t=Z(e),n=t.M,o=()=>{};if(!(1&t.u)){t.u|=1,12&n.u&&(e=>{const t=e["s-cr"]=I.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){O(t,t.g=n);break}}n.C&&Object.entries(n.C).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),me(()=>(async(e,t,n,o,l)=>{if(0==(32&t.u)){t.u|=32;{if((l=se(n)).then){const e=()=>{};l=await l,e()}l.isProxied||(n.T=l.watchers,W(l,n,2),l.isProxied=!0);const e=()=>{};t.u|=8;try{new l(t)}catch(i){oe(i)}t.u&=-9,t.u|=128,e()}const e=c(n.S);if(!re.has(e)&&l.style){const t=()=>{};let o=l.style;8&n.u&&(o=await __sc_import_ku4web_components("./p-faf2261e.js").then(t=>t.scopeCss(o,e,!1))),((e,t,n)=>{let o=re.get(e);X&&n?(o=o||new CSSStyleSheet,o.replace(t)):o=t,re.set(e,o)})(e,o,!!(1&n.u)),t()}}const s=t.g,r=()=>P(t,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,t,n))}o()}})(this))}disconnectedCallback(){J.jmp(()=>(()=>{if(0==(1&J.u)){const e=Z(this),t=e.k;e.H&&(e.H.map(e=>e()),e.H=void 0),A(t,"componentDidUnload")}})())}forceUpdate(){(()=>{{const e=Z(this);e.R.isConnected&&2==(18&e.u)&&P(e,!1)}})()}componentOnReady(){return Z(this).N}};s.q=e[0],o.includes(r)||l.get(r)||(n.push(r),l.define(r,W(i,s,1)))})),i.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",i.setAttribute("data-styles",""),s.insertBefore(i,r?r.nextSibling:s.firstChild),f=!1,a.length?a.map(e=>e.connectedCallback()):J.jmp(()=>u=setTimeout(E,30))},N=e=>Z(e).R,q=(e,t,n)=>{const o=N(e);return{emit:e=>{const l=new CustomEvent(t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e});return o.dispatchEvent(l),l}}};let B=0,V=!1;const z="undefined"!=typeof window?window:{},G=z.CSS,I=z.document||{head:{}},J={u:0,F:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,o)=>e.addEventListener(t,n,o),rel:(e,t,n,o)=>e.removeEventListener(t,n,o)},K=(()=>(I.head.attachShadow+"").indexOf("[native")>-1)(),Q=e=>Promise.resolve(e),X=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),Y=new WeakMap,Z=e=>Y.get(e),ee=(e,t)=>Y.set(t.k=e,t),te=(e,t)=>{const n={u:0,R:e,M:t,A:new Map};return n.D=new Promise(e=>n.P=e),n.N=new Promise(e=>n.O=e),e["s-p"]=[],e["s-rc"]=[],((e,t,n)=>{n&&n.map(([n,o,l])=>{const s=e,r=((e,t)=>n=>{256&e.u?e.k[t](n):(e.j=e.j||[]).push([t,n])})(t,l),c=(e=>0!=(2&e))(n);J.ael(s,o,r,c),(t.H=t.H||[]).push(()=>J.rel(s,o,r,c))})})(e,n,t.W),Y.set(e,n)},ne=(e,t)=>t in e,oe=e=>console.error(e),le=new Map,se=e=>{const t=e.S.replace(/-/g,"_"),n=e.q,o=le.get(n);return o?o[t]:__sc_import_ku4web_components(`./${n}.entry.js`).then(e=>(le.set(n,e),e[t]),oe)},re=new Map,ce=[],ie=[],ae=[],ue=(e,t)=>n=>{e.push(n),V||(V=!0,t&&4&J.u?me(pe):J.raf(pe))},fe=(e,t)=>{let n=0,o=0;for(;n<e.length&&(o=performance.now())<t;)try{e[n++](o)}catch(l){oe(l)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},pe=()=>{B++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){oe(t)}e.length=0})(ce);const e=2==(6&J.u)?performance.now()+10*Math.ceil(B*(1/22)):1/0;fe(ie,e),fe(ae,e),ie.length>0&&(ae.push(...ie),ie.length=0),(V=ce.length+ie.length+ae.length>0)?J.raf(pe):B=0},me=e=>Q().then(e),de=ue(ie,!0),$e=()=>G&&G.supports&&G.supports("color","var(--c)")?Q():__sc_import_ku4web_components("./p-cc0e3fd7.js").then(()=>(J.B=z.__cssshim)?(!1).i():0),we=()=>{J.B=z.__cssshim;const e=Array.from(I.querySelectorAll("script")).find(e=>new RegExp("/ku4web-components(\\.esm)?\\.js($|\\?|#)").test(e.src)||"ku4web-components"===e.getAttribute("data-stencil-namespace")),t={};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,z.location.href)).href,be(t.resourcesUrl,e),z.customElements?Q(t):__sc_import_ku4web_components("./p-2ce8ba89.js").then(()=>t))},be=(e,t)=>{const n=`__sc_import_${"ku4web-components".replace(/\s|-/g,"_")}`;try{z[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(o){const l=new Map;z[n]=o=>{const s=new URL(o,e).href;let r=l.get(s);if(!r){const e=I.createElement("script");e.type="module",e.crossOrigin=t.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.${n}.m = m;`],{type:"application/javascript"})),r=new Promise(t=>{e.onload=()=>{t(z[n].m),e.remove()}}),l.set(s,r),I.head.appendChild(e)}return r}}};export{p as H,$e as a,H as b,q as c,N as g,u as h,we as p,ee as r};