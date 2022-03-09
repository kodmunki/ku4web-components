import{r as t,h as o,H as i,g as s}from"./p-2aac6c90.js";import{C as r,j as e,M as h}from"./p-c1068ffa.js";const a=class{constructor(o){t(this,o),this.isShowing=!1,this.show=this.show.bind(this),this.hide=this.hide.bind(this),this._show=this._show.bind(this),this._hide=this._hide.bind(this),this._toggle=this._toggle.bind(this),this.hideTimeout=new r(200).onTimeout(this._hide)}async show(t){this.hideTimeout.clear(),this.host.contains(t)||(this.isShowing=!0,this.host.setAttribute("visible","true"),this.calcualatePosition(t),this.scrollListener=e((()=>this.calcualatePosition(t))),window.addEventListener("scroll",this.scrollListener,{passive:!0}))}async hide(){this.hideTimeout.clear().start()}_show(t){this.show(t.target)}_hide(){window.removeEventListener("scroll",this.scrollListener),this.host.removeAttribute("visible"),this.isShowing=!1}_toggle(t){this.isShowing?this._hide():this._show(t)}calcualatePosition(t){const{left:o,top:i,width:s,height:r}=t.getBoundingClientRect(),{left:e,top:a,width:n,height:p}=this.host.getBoundingClientRect(),l=new h(o,i,s,r),c=new h(e,a,n,p);this.top?(this.host.style.left=l.origin.x+l.dimensions.x/2-c.dimensions.x/2+"px",this.host.style.top=l.origin.y-c.dimensions.y-15+"px"):this.left?(this.host.style.left=l.origin.x-c.dimensions.x-15+"px",this.host.style.top=l.origin.y+l.dimensions.y/2-c.dimensions.y/2+"px"):this.bottom?(this.host.style.left=l.origin.x+l.dimensions.x/2-c.dimensions.x/2+"px",this.host.style.top=`${l.origin.y+l.dimensions.y+15}px`):this.right?(this.host.style.left=`${l.origin.x+l.dimensions.x+15}px`,this.host.style.top=l.origin.y+l.dimensions.y/2-c.dimensions.y/2+"px"):(this.host.style.left=l.origin.x+l.dimensions.x/2-c.dimensions.x/2+"px",this.host.style.top=`${l.origin.y+l.dimensions.y+15}px`)}componentWillLoad(){const{debug:t,element:o,host:i,top:s,left:r,bottom:e,right:h}=this;s||r||e||h||this.host.setAttribute("bottom",""),document.querySelectorAll(o).forEach((o=>{i.addEventListener("mouseover",this._show),o.addEventListener("mouseover",this._show),o.addEventListener("touchstart",this._toggle,{passive:!0}),t||(i.addEventListener("mouseout",this.hide),o.addEventListener("mouseout",this.hide))}))}disconnectedCallback(){const{debug:t,element:o,hideTimeout:i,host:s}=this;document.querySelectorAll(o).forEach((o=>{s.removeEventListener("mouseover",this._show),o.removeEventListener("mouseover",this._show),o.removeEventListener("touchstart",this._toggle),t||(s.removeEventListener("mouseout",this.hide),o.removeEventListener("mouseout",this.hide))})),i.clear()}render(){return o(i,{role:"tooltip"},o("div",{class:"arrow"}),o("div",{class:"content"},o("slot",null)))}get host(){return s(this)}};a.style=":host{position:fixed;display:none;opacity:0;z-index:2;background-color:#fff;border:solid 1px #ccc}:host([visible]){display:block;opacity:1;-webkit-transition:opacity 0.4s;transition:opacity 0.4s}:host .arrow{position:absolute;width:var(--ku4-tooltip-arrow-size, 14px);height:var(--ku4-tooltip-arrow-size, 14px);background-color:inherit;-webkit-transform:rotate(45deg);transform:rotate(45deg);border:inherit;-webkit-box-shadow:var(--ku4-tooltip-arrow-box-shadow, none);box-shadow:var(--ku4-tooltip-arrow-box-shadow, none)}:host .content{position:relative}:host([top]) .arrow{top:calc(100% - var(--ku4-tooltip-arrow-offset, 7px));left:calc(50% - var(--ku4-tooltip-arrow-offset, 7px));border-top:none !important;border-left:none !important}:host([left]) .arrow{top:calc(50% - var(--ku4-tooltip-arrow-offset, 7px));left:calc(100% - var(--ku4-tooltip-arrow-offset, 7px));border-left:none !important;border-bottom:none !important}:host([bottom]) .arrow{left:calc(50% - var(--ku4-tooltip-arrow-offset, 7px));bottom:calc(100% - var(--ku4-tooltip-arrow-offset, 7px));border-bottom:none !important;border-right:none !important}:host([right]) .arrow{top:calc(50% - var(--ku4-tooltip-arrow-offset, 7px));right:calc(100% - var(--ku4-tooltip-arrow-offset, 7px));border-top:none !important;border-right:none !important}";export{a as ku4_tooltip}