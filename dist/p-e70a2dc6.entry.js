import{r as o,c as t,h as e,H as r,g as s}from"./p-63fb3094.js";import"./p-545305c8.js";import{u as i}from"./p-1540113c.js";const c=class{constructor(e){o(this,e),this.selected=!1,this.tabClicked=t(this,"ku4-tab-click",7),this.tabKeyUp=t(this,"ku4-tab-keyup",7)}handleClick(o){this.tabClicked.emit(o)}handleKeyUp(o){this.tabKeyUp.emit(o)}async select(){this.selected=!0,this.panel.select(),this.host.focus()}async deselect(){this.selected=!1,this.panel.deselect()}async connect(o){o.connect(this)}get id(){return this.host.id||i()}$assignPanel(o){this.panel=o}render(){const{selected:o,panel:t}=this;return e(r,{id:this.host.id||i(),role:"tab",type:"button",tabIndex:o?0:-1,"aria-controls":t&&t.id,"aria-selected":o?"true":"false"},e("slot",null))}get host(){return s(this)}};c.style='button{margin:0;padding:0;border:none;background:transparent;-webkit-appearance:none}:host{position:relative;display:block;width:100%;padding:20px 30px;background-color:#eee;text-align:center;color:#aaa;cursor:pointer}:host(:focus){background-color:#eee;color:#666;z-index:2}:host(:hover){background-color:#eee;color:#666}:host(:active){background-color:#fff;color:#333}:host([selected]){border-top:1px solid #ccc;border-bottom:1px solid #ccc;background-color:#fff;color:#444}button{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}@media only screen and (min-width: 768px){:host{width:auto;border-top:1px solid #ccc;border-right:1px solid #ccc;border-top-left-radius:4px;border-top-right-radius:4px;background-color:#eee}:host(:first-of-type){border-left:1px solid #ccc}:host([selected]){padding-bottom:1px;border-top:1px solid #ccc;border-bottom:none}:host([selected]):after{content:" ";position:absolute;display:block;left:0;bottom:-1px;width:100%;height:1px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:inherit}}';export{c as ku4_tab}