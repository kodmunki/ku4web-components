let e,t,n,o=!1,l=!1,s=!1;const r=new WeakMap,c=e=>"sc-"+e,i={},a=e=>"object"==(e=typeof e)||"function"===e,u=(e,t,...n)=>{let o=null,l=null,s=!1,r=!1,c=[];const i=t=>{for(let n=0;n<t.length;n++)o=t[n],Array.isArray(o)?i(o):null!=o&&"boolean"!=typeof o&&((s="function"!=typeof e&&!a(o))&&(o=String(o)),s&&r?c[c.length-1].t+=o:c.push(s?f(null,o):o),r=s)};if(i(n),t){t.name&&(l=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}const u=f(e,null);return u.o=t,c.length>0&&(u.l=c),u.s=l,u},f=(e,t)=>({i:0,u:e,t,p:null,l:null,o:null,s:null}),m={},p=(e,t,n,o,l,s)=>{if(n===o)return;let r=te(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,l=$(n),s=$(o);t.remove(...l.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!l.includes(e)))}else if("style"===t){for(const t in n)o&&null!=o[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in o)n&&o[t]===n[t]||(t.includes("-")?e.style.setProperty(t,o[t]):e.style[t]=o[t])}else if("ref"===t)o&&o(e);else if(r||"o"!==t[0]||"n"!==t[1]){const c=a(o);if((r||c&&null!==o)&&!l)try{if(e.tagName.includes("-"))e[t]=o;else{let l=null==o?"":o;"list"===t?r=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(i){}null==o||!1===o?e.removeAttribute(t):(!r||4&s||l)&&!c&&e.setAttribute(t,o=!0===o?"":o)}else t="-"===t[2]?t.slice(3):te(G,c)?c.slice(2):c[2]+t.slice(3),n&&J.rel(e,t,n,!1),o&&J.ael(e,t,o,!1)},d=/\s/,$=e=>e?e.split(d):[],w=(e,t,n,o)=>{const l=11===t.p.nodeType&&t.p.host?t.p.host:t.p,s=e&&e.o||i,r=t.o||i;for(o in s)o in r||p(l,o,s[o],void 0,n,t.i);for(o in r)p(l,o,s[o],r[o],n,t.i)},b=(l,r,c,i)=>{let a,u,f,m=r.l[c],p=0;if(o||(s=!0,"slot"===m.u&&(e&&i.classList.add(e+"-s"),m.i|=m.l?2:1)),null!==m.t)a=m.p=I.createTextNode(m.t);else if(1&m.i)a=m.p=I.createTextNode("");else if(a=m.p=I.createElement(2&m.i?"slot-fb":m.u),w(null,m,!1),null!=e&&a["s-si"]!==e&&a.classList.add(a["s-si"]=e),m.l)for(p=0;p<m.l.length;++p)u=b(l,m,p,a),u&&a.appendChild(u);return a["s-hn"]=n,3&m.i&&(a["s-sr"]=!0,a["s-cr"]=t,a["s-sn"]=m.s||"",f=l&&l.l&&l.l[c],f&&f.u===m.u&&l.p&&h(l.p,!1)),a},h=(e,t)=>{J.i|=1;const o=e.childNodes;for(let l=o.length-1;l>=0;l--){const e=o[l];e["s-hn"]!==n&&e["s-ol"]&&(g(e).insertBefore(e,k(e)),e["s-ol"].remove(),e["s-ol"]=void 0,s=!0),t&&h(e,t)}J.i&=-2},y=(e,t,o,l,s,r)=>{let c,i=e["s-cr"]&&e["s-cr"].parentNode||e;for(i.shadowRoot&&i.tagName===n&&(i=i.shadowRoot);s<=r;++s)l[s]&&(c=b(null,o,s,e),c&&(l[s].p=c,i.insertBefore(c,k(t))))},_=(e,t,n,o,s)=>{for(;t<=n;++t)(o=e[t])&&(s=o.p,P(o),l=!0,s["s-ol"]?s["s-ol"].remove():h(s,!0),s.remove())},v=(e,t)=>e.u===t.u&&("slot"!==e.u||e.s===t.s),k=e=>e&&e["s-ol"]||e,g=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,j=(e,t)=>{const n=t.p=e.p,o=e.l,l=t.l,s=t.t;let r;null===s?("slot"===t.u||w(e,t,!1),null!==o&&null!==l?((e,t,n,o)=>{let l,s=0,r=0,c=t.length-1,i=t[0],a=t[c],u=o.length-1,f=o[0],m=o[u];for(;s<=c&&r<=u;)null==i?i=t[++s]:null==a?a=t[--c]:null==f?f=o[++r]:null==m?m=o[--u]:v(i,f)?(j(i,f),i=t[++s],f=o[++r]):v(a,m)?(j(a,m),a=t[--c],m=o[--u]):v(i,m)?("slot"!==i.u&&"slot"!==m.u||h(i.p.parentNode,!1),j(i,m),e.insertBefore(i.p,a.p.nextSibling),i=t[++s],m=o[--u]):v(a,f)?("slot"!==i.u&&"slot"!==m.u||h(a.p.parentNode,!1),j(a,f),e.insertBefore(a.p,i.p),a=t[--c],f=o[++r]):(l=b(t&&t[r],n,r,e),f=o[++r],l&&g(i.p).insertBefore(l,k(i.p)));s>c?y(e,null==o[u+1]?null:o[u+1].p,n,o,r,u):r>u&&_(t,s,c)})(n,o,t,l):null!==l?(null!==e.t&&(n.textContent=""),y(n,null,t,l,0,l.length-1)):null!==o&&_(o,0,o.length-1)):(r=n["s-cr"])?r.parentNode.textContent=s:e.t!==s&&(n.data=s)},R=e=>{let t,n,o,l,s,r,c=e.childNodes;for(n=0,o=c.length;n<o;n++)if(t=c[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,l=0;l<o;l++)if(c[l]["s-hn"]!==t["s-hn"])if(r=c[l].nodeType,""!==s){if(1===r&&s===c[l].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==c[l].textContent.trim()){t.hidden=!0;break}R(t)}},M=[],S=e=>{let t,n,o,s,r,c,i=0,a=e.childNodes,u=a.length;for(;i<u;i++){if(t=a[i],t["s-sr"]&&(n=t["s-cr"]))for(o=n.parentNode.childNodes,s=t["s-sn"],c=o.length-1;c>=0;c--)n=o[c],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(L(n,s)?(r=M.find(e=>e.$===n),l=!0,n["s-sn"]=n["s-sn"]||s,r?r.h=t:M.push({h:t,$:n}),n["s-sr"]&&M.forEach(e=>{L(e.$,n["s-sn"])&&(r=M.find(e=>e.$===n),r&&(e.h=r.h))})):M.some(e=>e.$===n)||M.push({$:n}));1===t.nodeType&&S(t)}},L=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,P=e=>{e.o&&e.o.ref&&e.o.ref(null),e.l&&e.l.forEach(P)},U=(e,t)=>{t&&!e._&&t["s-p"].push(new Promise(t=>e._=t))},O=(e,t)=>{if(e.i|=16,4&e.i)return void(e.i|=512);const n=e.v,o=()=>C(e,n,t);let l;return U(e,e.k),t&&(e.i|=256,e.g&&(e.g.forEach(([e,t])=>A(n,e,t)),e.g=null),l=A(n,"componentWillLoad")),D(l,()=>pe(o))},C=(i,a,p)=>{const d=i.j,$=d["s-rc"];p&&(e=>{const t=e.R,n=e.j,o=t.i,l=((e,t,n,o)=>{let l=c(t.M),s=se.get(l);if(e=11===e.nodeType?e:I,s)if("string"==typeof s){let n,c=r.get(e=e.head||e);if(c||r.set(e,c=new Set),!c.has(l)){if(J.S){n=J.S.createHostStyle(o,l,s,!!(10&t.i));const e=n["s-sc"];e&&(l=e,c=null)}else n=I.createElement("style"),n.innerHTML=s;e.insertBefore(n,e.querySelector("link")),c&&c.add(l)}}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s]);return l})(K&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t,0,n);10&o&&(n["s-sc"]=l,n.classList.add(l+"-h"))})(i);((r,c)=>{const i=r.j,a=r.R,p=r.L||f(null,null),d=($=c)&&$.u===m?c:u(null,null,c);var $;if(n=i.tagName,a.P&&(d.o=d.o||{},a.P.forEach(([e,t])=>d.o[t]=i[e])),d.u=null,d.i|=4,r.L=d,d.p=p.p=i.shadowRoot||i,e=i["s-sc"],t=i["s-cr"],o=K&&0!=(1&a.i),l=!1,j(p,d),s){let e,t,n,o,l,s;S(d.p);let r=0;for(;r<M.length;r++)e=M[r],t=e.$,t["s-ol"]||(n=I.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(J.i|=1,r=0;r<M.length;r++)if(e=M[r],t=e.$,e.h){for(o=e.h.parentNode,l=e.h.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&o===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){l=s;break}(!l&&o!==t.parentNode||t.nextSibling!==l)&&t!==l&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),o.insertBefore(t,l))}else 1===t.nodeType&&(t.hidden=!0);J.i&=-2}l&&R(d.p),M.length=0})(i,T(a)),J.S&&J.S.updateHost(d),i.i&=-17,i.i|=2,$&&($.forEach(e=>e()),d["s-rc"]=void 0);{const e=d["s-p"],t=()=>x(i);0===e.length?t():(Promise.all(e).then(t),i.i|=4,e.length=0)}},T=e=>{try{e=e.render()}catch(t){ne(t)}return e},x=e=>{const t=e.j,n=e.v,o=e.k;A(n,"componentDidRender"),64&e.i||(e.i|=64,t.classList.add("hydrated"),A(n,"componentDidLoad"),e.U(t),o||E()),e.O(t),e._&&(e._(),e._=void 0),512&e.i&&me(()=>O(e,!1)),e.i&=-517},E=()=>{I.documentElement.classList.add("hydrated"),J.i|=2},A=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(o){ne(o)}},D=(e,t)=>e&&e.then?e.then(t):t(),F=(e,t,n)=>{if(t.C){e.watchers&&(t.T=e.watchers);const o=Object.entries(t.C),l=e.prototype;if(o.forEach(([e,[o]])=>{31&o||2&n&&32&o?Object.defineProperty(l,e,{get(){return t=e,Y(this).A.get(t);var t},set(n){((e,t,n,o)=>{const l=Y(e),s=l.A.get(t),r=l.i,c=l.v;var i,u;if(u=o.C[t][0],n=null==(i=n)||a(i)?i:4&u?"false"!==i&&(""===i||!!i):2&u?parseFloat(i):1&u?String(i):i,!(8&r&&void 0!==s||n===s)&&(l.A.set(t,n),c)){if(o.T&&128&r){const e=o.T[t];e&&e.forEach(e=>{try{c[e](n,s,t)}catch(o){ne(o)}})}2==(18&r)&&O(l,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&o&&Object.defineProperty(l,e,{value(...t){const n=Y(this);return n.D.then(()=>n.v[e](...t))}})}),1&n){const n=new Map;l.attributeChangedCallback=function(e,t,o){J.jmp(()=>{const t=n.get(e);this[t]=(null!==o||"boolean"!=typeof this[t])&&o})},e.observedAttributes=o.filter(([e,t])=>15&t[0]).map(([e,o])=>{const l=o[1]||e;return n.set(l,e),512&o[0]&&t.P.push([e,l]),l})}}return e},W=e=>{if(0==(1&J.i)){const t=Y(e),n=t.R,o=()=>{};if(n.F&&(t.W=((e,t,n)=>{t.g=t.g||[];const o=n.map(([n,o,l])=>{const s=e,r=((e,t)=>n=>{256&e.i?e.v[t](n):e.g.push([t,n])})(t,l),c=(e=>0!=(2&e))(n);return J.ael(s,o,r,c),()=>J.rel(s,o,r,c)});return()=>o.forEach(e=>e())})(e,t,n.F)),!(1&t.i)){t.i|=1,12&n.i&&H(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){U(t,t.k=n);break}}n.C&&Object.entries(n.C).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),me(()=>(async(e,t,n,o,l)=>{if(0==(32&t.i)){t.i|=32;{if((l=le(n)).then){const e=()=>{};l=await l,e()}l.isProxied||(n.T=l.watchers,F(l,n,2),l.isProxied=!0);const e=()=>{};t.i|=8;try{new l(t)}catch(i){ne(i)}t.i&=-9,t.i|=128,e()}const e=c(n.M);if(!se.has(e)&&l.style){const t=()=>{};let o=l.style;8&n.i&&(o=await __sc_import_ku4web_components("./p-0727a8c2.js").then(t=>t.scopeCss(o,e,!1))),((e,t,n)=>{let o=se.get(e);Q&&n?(o=o||new CSSStyleSheet,o.replace(t)):o=t,se.set(e,o)})(e,o,!!(1&n.i)),t()}}const s=t.k,r=()=>O(t,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,t,n))}o()}},H=e=>{const t=e["s-cr"]=I.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},N=(e,t={})=>{const n=[],o=t.exclude||[],l=I.head,s=G.customElements,r=l.querySelector("meta[charset]"),c=I.createElement("style"),i=[];I.querySelectorAll("[sty-id]");let a,u=!0;Object.assign(J,t),J.H=new URL(t.resourcesUrl||"./",I.baseURI).href,t.syncQueue&&(J.i|=4),e.forEach(e=>e[1].forEach(t=>{const l={i:t[0],M:t[1],C:t[2],F:t[3]};l.C=t[2],l.F=t[3],l.P=[],l.T={},!K&&1&l.i&&(l.i|=8);const r=l.M,c=class extends HTMLElement{constructor(e){super(e),ee(e=this,l),1&l.i&&(K?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){a&&(clearTimeout(a),a=null),u?i.push(this):J.jmp(()=>W(this))}disconnectedCallback(){J.jmp(()=>(e=>{if(0==(1&J.i)){const t=Y(e),n=t.v;t.W&&(t.W(),t.W=void 0),J.S&&J.S.removeHost(e),A(n,"componentDidUnload")}})(this))}forceUpdate(){(()=>{{const e=Y(this);e.j.isConnected&&2==(18&e.i)&&O(e,!1)}})()}componentOnReady(){return Y(this).N}};l.q=e[0],o.includes(r)||s.get(r)||(n.push(r),s.define(r,F(c,l,1)))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),l.insertBefore(c,r?r.nextSibling:l.firstChild),u=!1,i.length>0?i.forEach(e=>e.connectedCallback()):J.jmp(()=>a=setTimeout(E,30,"timeout"))},q=e=>Y(e).j,B=(e,t,n)=>{const o=q(e);return{emit:e=>{const l=new CustomEvent(t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e});return o.dispatchEvent(l),l}}};let V=0,z=!1;const G="undefined"!=typeof window?window:{},I=G.document||{head:{}},J={i:0,H:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,o)=>e.addEventListener(t,n,o),rel:(e,t,n,o)=>e.removeEventListener(t,n,o)},K=(()=>(I.head.attachShadow+"").indexOf("[native")>-1)(),Q=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),X=new WeakMap,Y=e=>X.get(e),Z=(e,t)=>X.set(t.v=e,t),ee=(e,t)=>{const n={i:0,j:e,R:t,A:new Map};return n.D=new Promise(e=>n.O=e),n.N=new Promise(e=>n.U=e),e["s-p"]=[],e["s-rc"]=[],X.set(e,n)},te=(e,t)=>t in e,ne=e=>console.error(e),oe=new Map,le=e=>{const t=e.M.replace(/-/g,"_"),n=e.q,o=oe.get(n);return o?o[t]:__sc_import_ku4web_components(`./${n}.entry.js`).then(e=>(oe.set(n,e),e[t]),ne)},se=new Map,re=[],ce=[],ie=[],ae=(e,t)=>n=>{e.push(n),z||(z=!0,t&&4&J.i?me(fe):J.raf(fe))},ue=(e,t)=>{let n=0,o=0;for(;n<e.length&&(o=performance.now())<t;)try{e[n++](o)}catch(l){ne(l)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},fe=()=>{V++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){ne(t)}e.length=0})(re);const e=2==(6&J.i)?performance.now()+10*Math.ceil(V*(1/22)):1/0;ue(ce,e),ue(ie,e),ce.length>0&&(ie.push(...ce),ce.length=0),(z=re.length+ce.length+ie.length>0)?J.raf(fe):V=0},me=e=>Promise.resolve().then(e),pe=ae(ce,!0),de=()=>G.CSS&&G.CSS.supports&&G.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_ku4web_components("./p-0065b69a.js").then(()=>{if(J.S=G.__stencil_cssshim,J.S)return J.S.initShim()}),$e=()=>{J.S=G.__stencil_cssshim;const e=Array.from(I.querySelectorAll("script")).find(e=>new RegExp("/ku4web-components(\\.esm)?\\.js($|\\?|#)").test(e.src)||"ku4web-components"===e.getAttribute("data-stencil-namespace")),t=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,G.location.href)).href,we(t.resourcesUrl,e),window.customElements?Promise.resolve(t):__sc_import_ku4web_components("./p-b912b148.js").then(()=>t))},we=(e,t)=>{const n=`__sc_import_${"ku4web-components".replace(/\s|-/g,"_")}`;try{G[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(o){const l=new Map;G[n]=o=>{const s=new URL(o,e).href;let r=l.get(s);if(!r){const e=I.createElement("script");e.type="module",e.crossOrigin=t.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.${n}.m = m;`],{type:"application/javascript"})),r=new Promise(t=>{e.onload=()=>{t(G[n].m),e.remove()}}),l.set(s,r),I.head.appendChild(e)}return r}}};export{m as H,de as a,N as b,B as c,q as g,u as h,$e as p,Z as r};