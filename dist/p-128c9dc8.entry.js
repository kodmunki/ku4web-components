import{r as t,h as o,g as e}from"./p-54fa01ba.js";import{t as r}from"./p-5d95ed04.js";const i=class{constructor(o){t(this,o),this.carousel=document.getElementById(this.for),this.handleSlide=this.handleSlide.bind(this),this.handleChange=this.handleChange.bind(this)}get controls(){return[].slice.call(this.host.children)}handleSlide(t){this.controls.forEach((t=>{t.removeAttribute("current"),t.checked=!1}));const o=this.controls[t.detail-1];o.setAttribute("current",t.detail),o.checked=!0}handleChange(t){const{carousel:o,controls:e}=this,r=e.indexOf(t.target)+1;o.slideTo(r),t.target.setAttribute("current",r)}componentWillLoad(){const{carousel:t,controls:o}=this;try{t.addEventListener("slide",this.handleSlide),o.forEach(((t,o)=>{0===o&&t.setAttribute("current",o+1),"INPUT"===t.nodeName?t.addEventListener("change",this.handleChange):(t.addEventListener("keyup",this.handleChange),t.addEventListener("mouseup",this.handleChange))}))}catch(e){if(!r.exists(t))throw new ReferenceError("ku4-carousel-controls must connect to a ku4-carousel.")}}disconnectedCallback(){const{carousel:t,controls:o}=this;t.removeEventListener("slide",this.handleSlide),o.forEach((t=>{t.removeEventListener("change",this.handleChange),t.removeEventListener("keyup",this.handleChange),t.removeEventListener("mouseup",this.handleChange)}))}render(){return o("slot",null)}get host(){return e(this)}};i.style=':host{position:relative;display:block}input[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:relative;width:20px;height:20px;margin:0;padding:0;border:solid 1px #888;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;vertical-align:middle}input[type=radio]:checked:after{content:"";position:absolute;top:2px;left:2px;width:14px;height:14px;margin:0;padding:0;border:solid 1px #888;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;background-color:#333}';export{i as ku4_carousel_controls}