import{r as t,h as e,g as o}from"./p-670d415c.js";import{t as r}from"./p-c1068ffa.js";let i=class{constructor(e){t(this,e),this.carousel=document.getElementById(this.for),this.handleSlide=this.handleSlide.bind(this),this.handleChange=this.handleChange.bind(this)}get controls(){return[].slice.call(this.host.children)}handleSlide(t){this.controls.forEach((t=>{t.removeAttribute("current"),t.checked=!1}));const e=this.controls[t.detail-1];e.setAttribute("current",t.detail),e.checked=!0}handleChange(t){const{carousel:e,controls:o}=this,r=o.indexOf(t.target)+1;e.slideTo(r),t.target.setAttribute("current",r)}componentWillLoad(){const{carousel:t,controls:e}=this;try{t.addEventListener("slide",this.handleSlide),e.forEach(((t,e)=>{0===e&&t.setAttribute("current",e+1),"INPUT"===t.nodeName?t.addEventListener("change",this.handleChange):(t.addEventListener("keyup",this.handleChange),t.addEventListener("mouseup",this.handleChange))}))}catch(o){if(!r.exists(t))throw new ReferenceError("ku4-carousel-controls must connect to a ku4-carousel.")}}disconnectedCallback(){const{carousel:t,controls:e}=this;t.removeEventListener("slide",this.handleSlide),e.forEach((t=>{t.removeEventListener("change",this.handleChange),t.removeEventListener("keyup",this.handleChange),t.removeEventListener("mouseup",this.handleChange)}))}render(){return e("slot",null)}get host(){return o(this)}};i.style=':host{position:relative;display:block}input[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:relative;width:20px;height:20px;margin:0;padding:0;border:solid 1px #888;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;vertical-align:middle}input[type=radio]:checked:after{content:"";position:absolute;top:2px;left:2px;width:14px;height:14px;margin:0;padding:0;border:solid 1px #888;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;background-color:#333}';export{i as ku4_carousel_controls}