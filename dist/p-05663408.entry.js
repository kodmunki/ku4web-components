import{r as t,h as s,g as e}from"./p-1e3ad132.js";import{t as o}from"./p-9f6d3640.js";const i=class{constructor(s){t(this,s),this.for=void 0,this.carousel=document.getElementById(this.for),this.handleSlide=this.handleSlide.bind(this),this.handleChange=this.handleChange.bind(this)}get slides(){return[].slice.call(this.carousel.children)}get controls(){return[].slice.call(this.host.children)}handleSlide(t){this.controls.forEach((t=>{t.removeAttribute("current"),t.checked=!1}));try{const s=this.controls[t.detail-1];s.setAttribute("current",t.detail),s.checked=!0}catch(t){}}async handleChange(t){const{carousel:s,slides:e,controls:o}=this,i=t.target.getAttribute("slide"),r=isNaN(i)?e.findIndex((t=>t.getAttribute("name")===i))+1:parseInt(i),n=isNaN(r)?o.indexOf(t.target)+1:r;await s.slideTo(n);try{t.target.setAttribute("current",n)}catch(t){}}componentWillLoad(){const{carousel:t,controls:s}=this;try{t.addEventListener("slide",this.handleSlide,{passive:!0}),s.forEach(((t,s)=>{0===s&&t.setAttribute("current",s+1),"INPUT"===t.nodeName?t.addEventListener("change",this.handleChange):(t.addEventListener("keydown",this.handleChange),t.addEventListener("mousedown",this.handleChange,{passive:!0}),t.addEventListener("touchstart",this.handleChange,{passive:!0}))}))}catch(e){if(!o.exists(t))throw new ReferenceError("ku4-carousel-controls must connect to a ku4-carousel.")}}disconnectedCallback(){const{carousel:t,controls:s}=this;t.removeEventListener("slide",this.handleSlide),s.forEach((t=>{t.removeEventListener("change",this.handleChange),t.removeEventListener("keydown",this.handleChange),t.removeEventListener("mousedown",this.handleChange),t.removeEventListener("touchstart",this.handleChange)}))}render(){return s("slot",null)}get host(){return e(this)}};i.style=':host{position:relative;display:block}input[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:relative;width:20px;height:20px;margin:0;padding:0;border:solid 1px #888;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;vertical-align:middle}input[type=radio]:checked:after{content:"";position:absolute;top:2px;left:2px;width:14px;height:14px;margin:0;padding:0;border:solid 1px #888;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;background-color:#333}';export{i as ku4_carousel_controls}