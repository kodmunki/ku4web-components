import{r as e}from"./p-579b17e9.js";import{t}from"./p-545305c8.js";const r=(e,r,c)=>(l,a)=>{const n=[`DEPRECATED: ${e}${"render"===a?"":"."+a}`,"\nUse identified replacement if available.",t.exists(r)?"\nReplacement: "+r:""].join("");(c||(e=>console.warn(e)))(n)};var c=function(e,t,r,c){var l,a=arguments.length,n=a<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,r):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,c);else for(var p=e.length-1;p>=0;p--)(l=e[p])&&(n=(a<3?l(n):a>3?l(t,r,n):l(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n};const l=[],a=e=>{l.push(e)},n=class{constructor(t){e(this,t)}get deprecatedGetter(){return this.getterValue}async deprecatedMethod(){return this.methodValue}render(){return{}}};c([r("label","replacementValue",a)],n.prototype,"deprecatedProp",void 0),c([r("label","replacementGetter",a)],n.prototype,"deprecatedGetter",null),c([r("label","replacementMethod",a)],n.prototype,"deprecatedMethod",null),c([r("label","ReplacementClass",a)],n.prototype,"render",null),describe("Deprecated tests",()=>{it("should console warn deprecated members",()=>{const e=(e,t)=>`DEPRECATED: label${e}\nUse identified replacement if available.\nReplacement: ${t}`;new n;const[t,r,c,a]=l;expect(t).toEqual(e(".deprecatedProp","replacementValue")),expect(r).toEqual(e(".deprecatedGetter","replacementGetter")),expect(c).toEqual(e(".deprecatedMethod","replacementMethod")),expect(a).toEqual(e("","ReplacementClass"))})});export{n as ku4_test_class}