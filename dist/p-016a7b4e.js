const e="ku4web-components";let t,n,l,o=!1,s=!1,c=!1,i=!1;const r="undefined"!=typeof window?window:{},a=r.document||{head:{}},u={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},f=(()=>(a.head.attachShadow+"").indexOf("[native")>-1)(),d=e=>Promise.resolve(e),$=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),m=(e,t,n)=>{n&&n.map((([n,l,o])=>{const s=p(e,n),c=h(t,o),i=b(n);u.ael(s,l,c,i),(t.o=t.o||[]).push((()=>u.rel(s,l,c,i)))}))},h=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(l){re(l)}},p=(e,t)=>8&t?r:e,b=e=>0!=(2&e),y=new WeakMap,w=e=>"sc-"+e.$,k={},S=e=>"object"==(e=typeof e)||"function"===e,g=(e,t,...n)=>{let l=null,o=null,s=!1,c=!1,i=[];const r=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!S(l))&&(l+=""),s&&c?i[i.length-1].m+=l:i.push(s?j(null,l):l),c=s)};if(r(n),t){t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}const a=j(e,null);return a.h=t,i.length>0&&(a.p=i),a.k=o,a},j=(e,t)=>({t:0,S:e,m:t,g:null,p:null,h:null,k:null}),v={},C=(e,t,n,l,o,s)=>{if(n!==l){let i=ie(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,o=O(n),s=O(l);t.remove(...o.filter((e=>e&&!s.includes(e)))),t.add(...s.filter((e=>e&&!o.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if(i||"o"!==t[0]||"n"!==t[1]){const r=S(l);if((i||r&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(c){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!i||4&s||o)&&!r&&e.setAttribute(t,l=!0===l?"":l)}else t="-"===t[2]?t.slice(3):ie(r,a)?a.slice(2):a[2]+t.slice(3),n&&u.rel(e,t,n,!1),l&&u.ael(e,t,l,!1)}},M=/\s/,O=e=>e?e.split(M):[],R=(e,t,n,l)=>{const o=11===t.g.nodeType&&t.g.host?t.g.host:t.g,s=e&&e.h||k,c=t.h||k;for(l in s)l in c||C(o,l,s[l],void 0,n,t.t);for(l in c)C(o,l,s[l],c[l],n,t.t)},N=(e,s,i,r)=>{let u,f,d,$=s.p[i],m=0;if(o||(c=!0,"slot"===$.S&&(t&&r.classList.add(t+"-s"),$.t|=$.p?2:1)),null!==$.m)u=$.g=a.createTextNode($.m);else if(1&$.t)u=$.g=a.createTextNode("");else if(u=$.g=a.createElement(2&$.t?"slot-fb":$.S),R(null,$,!1),null!=t&&u["s-si"]!==t&&u.classList.add(u["s-si"]=t),$.p)for(m=0;m<$.p.length;++m)f=N(e,$,m,u),f&&u.appendChild(f);return u["s-hn"]=l,3&$.t&&(u["s-sr"]=!0,u["s-cr"]=n,u["s-sn"]=$.k||"",d=e&&e.p&&e.p[i],d&&d.S===$.S&&e.g&&P(e.g,!1)),u},P=(e,t)=>{u.t|=1;const n=e.childNodes;for(let o=n.length-1;o>=0;o--){const e=n[o];e["s-hn"]!==l&&e["s-ol"]&&(W(e).insertBefore(e,E(e)),e["s-ol"].remove(),e["s-ol"]=void 0,c=!0),t&&P(e,t)}u.t&=-2},T=(e,t,n,o,s,c)=>{let i,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(r.shadowRoot&&r.tagName===l&&(r=r.shadowRoot);s<=c;++s)o[s]&&(i=N(null,n,s,e),i&&(o[s].g=i,r.insertBefore(i,E(t))))},L=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(s=!0,(o=l.g)["s-ol"]?o["s-ol"].remove():P(o,!0),o.remove())},x=(e,t)=>e.S===t.S&&("slot"!==e.S||e.k===t.k),E=e=>e&&e["s-ol"]||e,W=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,A=(e,t)=>{const n=t.g=e.g,l=e.p,o=t.p,s=t.m;let c;null===s?("slot"===t.S||R(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s=0,c=0,i=t.length-1,r=t[0],a=t[i],u=l.length-1,f=l[0],d=l[u];for(;s<=i&&c<=u;)null==r?r=t[++s]:null==a?a=t[--i]:null==f?f=l[++c]:null==d?d=l[--u]:x(r,f)?(A(r,f),r=t[++s],f=l[++c]):x(a,d)?(A(a,d),a=t[--i],d=l[--u]):x(r,d)?("slot"!==r.S&&"slot"!==d.S||P(r.g.parentNode,!1),A(r,d),e.insertBefore(r.g,a.g.nextSibling),r=t[++s],d=l[--u]):x(a,f)?("slot"!==r.S&&"slot"!==d.S||P(a.g.parentNode,!1),A(a,f),e.insertBefore(a.g,r.g),a=t[--i],f=l[++c]):(o=N(t&&t[c],n,c,e),f=l[++c],o&&W(r.g).insertBefore(o,E(r.g)));s>i?T(e,null==l[u+1]?null:l[u+1].g,n,l,c,u):c>u&&L(t,s,i)})(n,l,t,o):null!==o?(null!==e.m&&(n.textContent=""),T(n,null,t,o,0,o.length-1)):null!==l&&L(l,0,l.length-1)):(c=n["s-cr"])?c.parentNode.textContent=s:e.m!==s&&(n.data=s)},D=e=>{let t,n,l,o,s,c,i=e.childNodes;for(n=0,l=i.length;n<l;n++)if(t=i[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(c=i[o].nodeType,i[o]["s-hn"]!==t["s-hn"]||""!==s){if(1===c&&s===i[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===c||3===c&&""!==i[o].textContent.trim()){t.hidden=!0;break}D(t)}},F=[],H=e=>{let t,n,l,o,c,i,r=0,a=e.childNodes,u=a.length;for(;r<u;r++){if(t=a[r],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(l=n.parentNode.childNodes,o=t["s-sn"],i=l.length-1;i>=0;i--)n=l[i],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(U(n,o)?(c=F.find((e=>e.j===n)),s=!0,n["s-sn"]=n["s-sn"]||o,c?c.v=t:F.push({v:t,j:n}),n["s-sr"]&&F.map((e=>{U(e.j,n["s-sn"])&&(c=F.find((e=>e.j===n)),c&&!e.v&&(e.v=c.v))}))):F.some((e=>e.j===n))||F.push({j:n}));1===t.nodeType&&H(t)}},U=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,q=e=>oe(e).C,V=(e,t,n)=>{const l=q(e);return{emit:e=>_(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},_=(e,t,n)=>{const l=u.ce(t,n);return e.dispatchEvent(l),l},z=(e,t)=>{t&&!e.M&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.M=t)))},B=(e,t)=>{if(e.t|=16,!(4&e.t))return z(e,e.O),ye((()=>G(e,t)));e.t|=512},G=(e,t)=>{const n=e.i;let l;return t&&(e.t|=256,e.u&&(e.u.map((([e,t])=>X(n,e,t))),e.u=null),l=X(n,"componentWillLoad")),Y(l,(()=>I(e,n,t)))},I=async(e,t,n)=>{const l=e.C,o=l["s-rc"];n&&(e=>{const t=e.R,n=e.C,l=t.t,o=((e,t)=>{let n=w(t),l=fe.get(n);if(e=11===e.nodeType?e:a,l)if("string"==typeof l){let t,o=y.get(e=e.head||e);o||y.set(e,o=new Set),o.has(n)||(t=a.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(f&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);J(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>K(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},J=(e,i)=>{try{i=i.render(),e.t&=-17,e.t|=2,((e,i)=>{const r=e.C,d=e.R,$=e.N||j(null,null),m=(e=>e&&e.S===v)(i)?i:g(null,null,i);if(l=r.tagName,d.P&&(m.h=m.h||{},d.P.map((([e,t])=>m.h[t]=r[e]))),m.S=null,m.t|=4,e.N=m,m.g=$.g=r.shadowRoot||r,t=r["s-sc"],n=r["s-cr"],o=f&&0!=(1&d.t),s=!1,A($,m),u.t|=1,c){let e,t,n,l,o,s;H(m.g);let c=0;for(;c<F.length;c++)e=F[c],t=e.j,t["s-ol"]||(n=a.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(c=0;c<F.length;c++)if(e=F[c],t=e.j,e.v){for(l=e.v.parentNode,o=e.v.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}s&&D(m.g),u.t&=-2,F.length=0})(e,i)}catch(r){re(r,e.C)}return null},K=e=>{const t=e.C,n=e.i,l=e.O;X(n,"componentDidRender"),64&e.t||(e.t|=64,Z(t),X(n,"componentDidLoad"),e.T(t),l||Q()),e.L(t),e.M&&(e.M(),e.M=void 0),512&e.t&&be((()=>B(e,!1))),e.t&=-517},Q=()=>{Z(a.documentElement),be((()=>_(r,"appload",{detail:{namespace:"ku4web-components"}})))},X=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){re(l)}},Y=(e,t)=>e&&e.then?e.then(t):t(),Z=e=>e.setAttribute("hydrated",""),ee=(e,t,n)=>{if(t.W){e.watchers&&(t.A=e.watchers);const l=Object.entries(t.W),o=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return((e,t)=>oe(this).D.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=oe(e),s=o.C,c=o.D.get(t),i=o.t,r=o.i;if(n=((e,t)=>null==e||S(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.W[t][0]),(!(8&i)||void 0===c)&&n!==c&&(!Number.isNaN(c)||!Number.isNaN(n))&&(o.D.set(t,n),r)){if(l.A&&128&i){const e=l.A[t];e&&e.map((e=>{try{r[e](n,c,t)}catch(l){re(l,s)}}))}2==(18&i)&&B(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=oe(this);return n.F.then((()=>n.i[e](...t)))}})})),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){u.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(o.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.P.push([e,o]),o}))}}return e},te=e=>{X(e,"connectedCallback")},ne=(e,t={})=>{const n=[],l=t.exclude||[],o=r.customElements,s=a.head,c=s.querySelector("meta[charset]"),i=a.createElement("style"),d=[];let h,p=!0;Object.assign(u,t),u.l=new URL(t.resourcesUrl||"./",a.baseURI).href,e.map((e=>{e[1].map((t=>{const s={t:t[0],$:t[1],W:t[2],H:t[3]};s.W=t[2],s.H=t[3],s.P=[],s.A={},!f&&1&s.t&&(s.t|=8);const c=s.$,i=class extends HTMLElement{constructor(e){super(e),ce(e=this,s),1&s.t&&(f?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){h&&(clearTimeout(h),h=null),p?d.push(this):u.jmp((()=>(e=>{if(0==(1&u.t)){const t=oe(e),n=t.R,l=()=>{};if(1&t.t)m(e,t,n.H),te(t.i);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=a.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){z(t,t.O=n);break}}n.W&&Object.entries(n.W).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=ue(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.A=o.watchers,ee(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(i){re(i)}t.t&=-9,t.t|=128,e(),te(t.i)}if(o.style){let e=o.style;const t=w(n);if(!fe.has(t)){const l=()=>{};8&n.t&&(e=await import("./p-d0f3bec4.js").then((n=>n.scopeCss(e,t,!1)))),((e,t,n)=>{let l=fe.get(e);$&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,fe.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.O,c=()=>B(t,!0);s&&s["s-rc"]?s["s-rc"].push(c):c()})(0,t,n)}l()}})(this)))}disconnectedCallback(){u.jmp((()=>(()=>{if(0==(1&u.t)){const e=oe(this),t=e.i;e.o&&(e.o.map((e=>e())),e.o=void 0),X(t,"disconnectedCallback")}})()))}componentOnReady(){return oe(this).U}};s.q=e[0],l.includes(c)||o.get(c)||(n.push(c),o.define(c,ee(i,s,1)))}))})),i.innerHTML=n+"{visibility:hidden}[hydrated]{visibility:inherit}",i.setAttribute("data-styles",""),s.insertBefore(i,c?c.nextSibling:s.firstChild),p=!1,d.length?d.map((e=>e.connectedCallback())):u.jmp((()=>h=setTimeout(Q,30)))},le=new WeakMap,oe=e=>le.get(e),se=(e,t)=>le.set(t.i=e,t),ce=(e,t)=>{const n={t:0,C:e,R:t,D:new Map};return n.F=new Promise((e=>n.L=e)),n.U=new Promise((e=>n.T=e)),e["s-p"]=[],e["s-rc"]=[],m(e,n,t.H),le.set(e,n)},ie=(e,t)=>t in e,re=(e,t)=>(0,console.error)(e,t),ae=new Map,ue=e=>{const t=e.$.replace(/-/g,"_"),n=e.q,l=ae.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(ae.set(n,e),e[t])),re)},fe=new Map,de=[],$e=[],me=(e,t)=>n=>{e.push(n),i||(i=!0,t&&4&u.t?be(pe):u.raf(pe))},he=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){re(t)}e.length=0},pe=()=>{he(de),he($e),(i=de.length>0)&&u.raf(pe)},be=e=>d().then(e),ye=me($e,!0);export{v as H,e as N,ne as b,V as c,a as d,q as g,g as h,d as p,se as r,r as w}