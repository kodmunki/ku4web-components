var __spreadArray=this&&this.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,a;r<i;r++){if(a||!(r in e)){if(!a)a=Array.prototype.slice.call(e,0,r);a[r]=e[r]}}return t.concat(a||Array.prototype.slice.call(e))};System.register(["./p-fd3d3f56.system.js","./p-c38c9cd1.system.js"],(function(t){"use strict";var e,n,r,i,a;return{setters:[function(t){e=t.r;n=t.h},function(t){r=t.a;i=t.Y;a=t.t}],execute:function(){var s=":host{display:none}";var u=t("ku4_mask",function(){function t(t){e(this,t);this.charIndexes=[];this.reverseCharIndexes=[];this.previousValue="";this.currentValue="";this.touchStart=false;this.template="";this.ban="";this.pattern="";this.char="_";this.hidden=false;this.handleFocus=this.handleFocus.bind(this);this.handleBlur=this.handleBlur.bind(this);this.handleKeyDown=this.handleKeyDown.bind(this);this.handleInput=this.handleInput.bind(this);this.handleTouchStart=this.handleTouchStart.bind(this);this.init()}t.prototype.init=function(){var t=this;this.chars=this.char&&new RegExp(this.char);this.banned=this.ban&&new RegExp(this.ban);var e=this.pattern.replace(/[\s\n]/gm,"");this.patterns=e.substr(1).split(e[0]).map((function(t){try{return t&&new RegExp(t)||null}catch(e){}}));this.charIndexes=this.template.split("").reduce((function(e,n,r){if(t.chars.test(n)){e.push(r)}return e}),[]);this.reverseCharIndexes=__spreadArray([],this.charIndexes,true).reverse();return this};t.prototype.templateHandler=function(t,e){var n=this,i=n.input,a=n.previousCharIndex,s=n.previousValue,u=n.currentValue,h=n.value,l=n.char;var o=r.unmask(s,e,l).length;var c=r.unmask(u,e,l).length;var d=o<c?a+1:a;this.init().value=r.mask(r.unmask(h,e,l),t,l);i.setSelectionRange(d,d)};t.prototype.charHandler=function(t,e){var n=this,i=n.value,a=n.template;this.init().value=r.mask(r.unmask(i,a,e),a,t)};Object.defineProperty(t.prototype,"previousCharIndex",{get:function(){var t=this;return this.reverseCharIndexes.find((function(e){return t.selectionStart>e}))||this.charIndexes[0]},enumerable:false,configurable:true});Object.defineProperty(t.prototype,"value",{get:function(){return this.currentValue},set:function(t){var e=this,n=e.chars,r=e.hidden,i=e.input;var a=t.search(n);this.currentValue=t;i.value=r&&a>-1?t.substring(0,a):t},enumerable:false,configurable:true});t.prototype.handleTouchStart=function(){this.touchStart=true};t.prototype.handleFocus=function(){var t=this;if(window.document.documentMode){return}var e=this,n=e.input,a=e.template,s=e.char,u=e.chars,h=e.touchStart;var l=r.unmask(n.value,a,s);var o=r.unmask(this.value,a,s);this.value=l!==o?r.mask(l,a,s):r.mask(o,a,s);i(0).then((function(){var e=n.value.search(u);var r=e<0?n.value.length:e;t.input.setSelectionRange(e<0&&!h?0:r,r);t.touchStart=false}))};t.prototype.handleBlur=function(){var t=this,e=t.template,n=t.char;if(a.isEmpty(r.unmask(this.value,e,n))){this.value=""}};t.prototype.handleKeyDown=function(t){if(window.document.documentMode){return}var e=this,n=e.banned,i=e.hidden,a=e.template,s=e.char;if(t.key&&t.key.length===1&&n&&(n.test(t.key)&&!(t.altKey||t.ctrlKey||t.metaKey))){t.preventDefault()}this.previousValue=i?r.mask(r.unmask(t.target.value,a,s),a,s):t.target.value;this.selectionStart=t.target.selectionStart;this.selectionEnd=t.target.selectionEnd};t.prototype.handleInput=function(t){var e=this;if(window.document.documentMode){return}var n=this,i=n.input,s=n.template,u=n.char,h=n.chars,l=n.previousValue,o=n.banned,c=n.selectionStart,d=n.selectionEnd,v=n.previousCharIndex,p=n.patterns,f=n.charIndexes,g=n.reverseCharIndexes;if(!h.test(this.previousValue)&&!(t.type==="input"&&!t.inputType)&&t.inputType!=="insertFromPaste"&&t.inputType!=="deleteContentBackward"&&t.inputType!=="deleteContentForward"&&t.inputType!=="deleteByCut"&&c===d){this.value=l;return}if(t.inputType==="insertFromPaste"){try{navigator.clipboard.readText().then((function(t){var n=r.unmask(t,s,u);var v=n.replace(new RegExp(o,"g"),"");if(a.isNullOrEmpty(v)){e.value=l;i.setSelectionRange(c,c);return}if(!o||!o.test(v)){var p=l;if(c<d){var m=g.find((function(t){return t<=c-1}));var y=g.find((function(t){return t<=d-1}));var k=f.findIndex((function(t){return t===m}));var b=f.findIndex((function(t){return t===y}));var x=r.unmask(l,s,u);var I=x.substring(0,k+1)+x.substring(b+1,l.length);p=r.mask(I,s,u)}var S=f.find((function(t){return t>=c}));var w=f.findIndex((function(t){return t===S}));var E=r.unmask(p,s,u);p=E.substring(0,w)+v+E.substring(w,l.length);e.value=r.mask(p,s,u);var R=f[w+v.length]||e.value.search(h)||e.value.length;i.setSelectionRange(R,R)}}));this.value=l;i.setSelectionRange(c,c);return}catch(t){this.value=l;i.setSelectionRange(c,c);return}}if(t.inputType==="deleteContentBackward"||t.inputType==="deleteByCut"){var m=g.find((function(t){return t<=c-1}));var y=g.find((function(t){return t<=d-1}));var k=f.findIndex((function(t){return t===m}));var b=f.findIndex((function(t){return t===y}));var x=r.unmask(l,s,u);if(k<b){var I=x.substring(0,k+1)+x.substring(b+1,l.length);this.value=r.mask(I,s,u);I&&k>-1?i.setSelectionRange(v+1,v+1):i.setSelectionRange(v,v)}else{var I=x.substring(0,k)+x.substring(b+1,l.length);this.value=r.mask(I,s,u);i.setSelectionRange(v,v)}return}if(t.inputType==="deleteContentForward"){var S=f.find((function(t){return t>=c}));var w=f.findIndex((function(t){return t===S}));var x=r.unmask(l,s,u);var I=x.substring(0,w)+x.substring(w+1,l.length);this.value=r.mask(I,s,u);i.setSelectionRange(c,c);return}if(t.altKey||t.ctrlKey||t.metaKey){return}if(!t.data){if(t.type==="input"&&!t.inputType){var E=t.target.value;var R=f.find((function(t){return t>=c}));var w=f.findIndex((function(t){return t===R}));var x=r.unmask(E,s,u);var T=E.replace(new RegExp(o,"g"),"");var C=x.substring(0,w)+T;var L=f.find((function(t){return t>R}));this.value=r.mask(C,s,u);var K=f.findIndex((function(t){return t>=L}));var B=K<0?f.length-1:K-1;this.validate(C,p[B])}else{this.value=l;i.setSelectionRange(c,c)}return}if(h.test(l.charAt(c))||c===s.length){var x=r.unmask(l,s,u);this.value=r.mask(x+t.data,s,u);var V=this.value.search(h);var F=V<0?s.length:V;i.setSelectionRange(F,F);var K=f.findIndex((function(t){return t>=F}));var B=K<0?f.length-1:K-1;this.validate(t.data,p[B])}else{var C=l;if(c<d){var _=g.find((function(t){return t<=c-1}));var A=g.find((function(t){return t<=d-1}));var k=f.findIndex((function(t){return t===_}));var b=f.findIndex((function(t){return t===A}));var D=r.unmask(l,s,u);var I=D.substring(0,k+1)+D.substring(b+1,l.length);C=r.mask(I,s,u)}var j=f.find((function(t){return t>=c}));var w=f.findIndex((function(t){return t===j}));var x=r.unmask(C,s,u);C=x.substring(0,w)+t.data+x.substring(w,l.length);var P=f.find((function(t){return t>j}));this.value=r.mask(C,s,u);i.setSelectionRange(P,P);var K=f.findIndex((function(t){return t>=P}));var B=K<0?f.length-1:K-1;this.validate(t.data,p[B])}};t.prototype.validate=function(t,e){var n=this,r=n.previousValue,i=n.input,s=n.value,u=n.selectionStart;if(a.exists(e)&&!(e.test(t)||/\(\?[!<=]/.test(e.toString())&&e.test(s))){this.value=r;i.setSelectionRange(u,u)}};t.prototype.componentWillLoad=function(){this.input=document.getElementById(this.for);if(a.exists(this.input)){this.input.addEventListener("focus",this.handleFocus);this.input.addEventListener("blur",this.handleBlur);this.input.addEventListener("keydown",this.handleKeyDown);this.input.addEventListener("input",this.handleInput);this.input.addEventListener("ku4-mask-input",this.handleInput);this.input.addEventListener("touchstart",this.handleTouchStart,{passive:true})}else{console.error("ku4-mask must have a valid `for` referencing target field `id`.")}};t.prototype.disconnectedCallback=function(){if(this.input&&this.input.removeEventListener){this.input.removeEventListener("focus",this.handleFocus);this.input.removeEventListener("blur",this.handleBlur);this.input.removeEventListener("keydown",this.handleKeyDown);this.input.removeEventListener("input",this.handleInput);this.input.removeEventListener("touchstart",this.handleTouchStart)}};t.prototype.render=function(){return n("slot",null)};Object.defineProperty(t,"watchers",{get:function(){return{template:["templateHandler"],char:["charHandler"]}},enumerable:false,configurable:true});return t}());u.style=s}}}));