System.register([],(function(t){"use strict";return{execute:function(){class e{static isNull(t){return null===t}static isEmpty(t){return e.isString(t)&&""===t||e.isArray(t)&&t.length<1||e.isObjectLiteral(t)&&Object.keys(t).length<1}static isUndefined(t){return void 0===t}static isZero(t){return 0===t}static exists(t){return!(e.isUndefined(t)||e.isNull(t))}static isNullOrEmpty(t){return!e.exists(t)||e.isEmpty(t)}static isArray(t){return Array.isArray(t)}static isBool(t){return"boolean"==typeof t}static isTrue(t){return e.isBool(t)&&!0===t}static isFalse(t){return e.isBool(t)&&!1===t}static isDate(t){return t instanceof Date}static isNumber(t){return("number"==typeof t||t instanceof Number)&&!isNaN(t)}static isEven(t){return this.isNumber(t)&&!this.isZero(t)&&t%2==0}static isOdd(t){return this.isNumber(t)&&!this.isZero(t)&&!this.isEven(t)}static isString(t){return"string"==typeof t||t instanceof String}static isFunction(t){return t instanceof Function}static isObject(t){return e.exists(t)&&"object"==typeof t&&!(e.isBool(t)||e.isNumber(t)||e.isDate(t)||e.isArray(t)||e.isString(t)||e.isFunction(t))}static isObjectLiteral(t){return e.isObject(t)&&t.constructor==={}.constructor}static isTruthy(t){return!e.isFalsy(t)}static isFalsy(t){return e.isZero(t)||e.isFalse(t)||e.isNullOrEmpty(t)||isNaN(t)}}function s(t,e=0){const s=Math.pow(10,-e);return Math.round(parseFloat((t*s).toFixed(Math.abs(e))))/s}class i{constructor(t=0,s=0){if(!e.isNumber(t)||!e.isNumber(s))throw new Error("Coord requires numeric x and y values");this._x=t,this._y=s}get x(){return this._x}get y(){return this._y}get value(){return{x:this.x,y:this.y}}get half(){return this.divide(new i(2,2))}get abs(){return new i(Math.abs(this.x),Math.abs(this.y))}equals(t){return this.x===t.x&&this.y===t.y}add(t){return new i(this.x+t.x,this.y+t.y)}subtract(t){return new i(this.x-t.x,this.y-t.y)}multiply(t){return new i(this.x*t.x,this.y*t.y)}divide(t){return new i(this.x/t.x,this.y/t.y)}round(t=0){return new i(s(this.x,t),s(this.y,t))}toString(){return`(${this.x},${this.y})`}static canParse(t){return e.isArray(t)?!(isNaN(t[0])||isNaN(t[1])):e.isObjectLiteral(t)&&"x"in t&&"y"in t?!(isNaN(t.x)||isNaN(t.y)):t instanceof i}static parse(t){return e.exists(t)?t instanceof i?t:e.isArray(t)?new i(t[0],t[1]):e.isObjectLiteral(t)&&e.exists(t.x)&&e.exists(t.y)?new i(t.x,t.y):null:null}static tryParse(t){return i.canParse(t)?i.parse(t):null}}class n extends i{constructor(t=0,e=0){super(t,e),this._lengthSquared=Math.pow(t,2)+Math.pow(e,2),this._magnitude=Math.sqrt(this._lengthSquared),this._unitNormalX=0===t&&0===e?0:t/this._magnitude,this._unitNormalY=0===t&&0===e?0:e/this._magnitude}get magnitude(){return this._magnitude}get isZero(){return 0===this.x&&0===this.y}get normal(){return new n(this._unitNormalX,this._unitNormalY)}get invert(){return new n(-this.x,-this.y)}get norm(){return new n(Math.abs(this.x),Math.abs(this.y))}get perpendicular(){return new n(-this.y,this.x)}equals(t){return t instanceof n&&this.x===t.x&&this.y===t.y}add(t){return t instanceof n?new n(this.x+t.x,this.y+t.y):null}dot(t){return t instanceof n?this.x*t.x+this.y*t.y:null}perpendicularAtTo(t){if(!(t instanceof n))return null;const e=t.add(this.projectionOfOnto(t).invert);return new n(e.x,e.y)}projectionOfOnto(t){if(!(t instanceof n))return null;const e=t.normal.scale(this.dot(t.normal));return new n(e.x,e.y)}scale(t){return new n(this.x*t,this.y*t)}unitNormalDot(t){return t instanceof n?this.normal.x*t.normal.x+this.normal.y*t.normal.y:null}reflect(t){if(!(t instanceof n))return null;if(t.isZero)return this;const e=t.normal;return this.add(e.scale(2*e.dot(this)).invert)}round(t=0){return new n(s(this.x,t),s(this.y,t))}}class r extends i{constructor(t,e){super(t,e)}isAbove(t){return this.y<t.y}isBelow(t){return this.y>t.y}isLeftOf(t){return this.x<t.x}isRightOf(t){return this.x>t.x}distanceFrom(t){return new n(this.x-t.x,this.y-t.y)}distanceTo(t){return this.distanceFrom(t).invert}static canParse(t){return t instanceof r||i.canParse(t)}static parse(t){if(t instanceof r)return t;const e=i.parse(t);return new r(e.x,e.y)}static tryParse(t){return r.canParse(t)?r.parse(t):null}}Object.freeze({__proto__:null,alpha:/^[A-z]+$/,alphaNumeric:/^[A-z0-9]+$/,base64:/^[A-z0-9=]+$/,dataUrl:/^\s*data:([a-z]+\/[a-z0-9+-]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=._~:@/?%\s-]*\s*$/i,email:/^\w+([.\w-]+)?@\w+([.\w-]+)?\.[A-Za-z0-9]{2,}$/,empty:/^$/,numeric:/^-?[0-9]+$/,script:/(<script[A-z0-9\n\s\t\r.={([\])}'",;!&|$/#:<>*?+\u0000-\u0037\u00C2\u00A0\u2122-]*?<\/script>)/,uid:/^\d{14,}$/i,url:/^(https?:\/\/)?[^{}\\:]+\.[A-z0-9]{2,12}(\/[^?\s]+)*\/?(\?([^=?#]+=[^=?#]*(&[^=?#]+=[^=?#]*)*(#.*)?)?)?$/,uuid:/^[{(]?[0-9A-F]{8}[-]?([0-9A-F]{4}[-]?){3}[0-9A-F]{12}[)}]?$/i});const o={};class u{static mute(t){return!!e.exists(t)&&(e.isFunction(t.preventDefault)&&t.preventDefault(),e.isFunction(t.stopPropagation)&&t.stopPropagation(),e.isFunction(t.stopImmediatePropagation)&&t.stopImmediatePropagation(),e.exists(t.cancelBubble)&&(t.cancelBubble=!0),!1)}static add(t,e,s,i){const n=Math.random().toString().substr(2);return o[n]={element:t,event:e,callback:s,options:i},t.addEventListener(e,s,i),n}static remove(t){const{element:e,event:s,callback:i,options:n}=o[t];e.removeEventListener(s,i,n)}}t("o",u);class a{static get scrollbarWidth(){return window.innerWidth-document.documentElement.clientWidth}static get isScrollPrevented(){return e.exists(a.scrollY)}static preventScroll(){a.position=document.body.style.position,a.top=document.body.style.top,a.left=document.body.style.left,a.width=document.body.style.width,a.height=document.body.style.height,a.documentWidth=document.documentElement.style.width,a.documentHeight=document.documentElement.style.height,a.overflowY=document.documentElement.style.overflowY,a.scrollX=window.scrollX||window.pageXOffset,a.scrollY=window.scrollY||window.pageYOffset;const{scrollbarWidth:t}=a;document.body.style.position="fixed",document.body.style.left=`-${a.scrollX}px`,document.body.style.top=`-${a.scrollY}px`,document.body.style.width=`calc(100vw - ${t}px - ${document.body.style.paddingLeft} - ${document.body.style.paddingRight})`,document.body.style.height="calc(100% + 1px)",document.documentElement.style.width="100wh",document.documentElement.style.height="100vh",document.documentElement.style.overflowY=t&&"scroll"}static resumeScroll(){document.body.style.position=a.position,document.body.style.top=a.top,document.body.style.left=a.left,document.body.style.width=a.width,document.body.style.height=a.height,document.documentElement.style.width=a.documentWidth,document.documentElement.style.height=a.documentHeight,document.documentElement.style.overflowY=a.overflowY,window.scrollTo(a.scrollX,a.scrollY),a.position=null,a.top=null,a.left=null,a.width=null,a.height=null,a.documentWidth=null,a.documentHeight=null,a.overflowY=null,a.scrollX=null,a.scrollY=null}static onClick(t,e){return u.add(document,"click",t,e)}static onKeyUp(t,e){return u.add(document,"keyup",t,e)}static removeEvent(t){u.remove(t)}}t("a",a);class c{constructor(t,e){this.key=t,this.msKey=e||t}equals(t){return t instanceof c&&(this.key===t.key||this.msKey===t.msKey)}didFire(t){const{code:e,key:s}=t,i="Dead"===s?e:s;return t&&(this.equals(new c(i))||"ANY"===this.key)}static get press(){return"keypress"}static get down(){return"keydown"}static get up(){return"keyup"}static get any(){return new c("ANY")}static get esc(){return new c("Escape","Esc")}static get enter(){return new c("Enter")}static get space(){return new c(" ","Spacebar")}static get tab(){return new c("Tab")}static get left(){return new c("ArrowLeft","Left")}static get right(){return new c("ArrowRight","Right")}}t("c",c);class l{constructor(t,e=0){this.didTouchStart=this.didTouchStart.bind(this),this.didTouchEnd=this.didTouchEnd.bind(this),this.didTouchMove=this.didTouchMove.bind(this),t.addEventListener("touchstart",this.didTouchStart,{capture:!1,passive:!0}),t.addEventListener("touchend",this.didTouchEnd,{capture:!1,passive:!0}),t.addEventListener("touchmove",this.didTouchMove,{capture:!1,passive:!0}),this.element=t,this.tolerance=e}onLeft(t){return this.didSwipeLeft=t,this}onRight(t){return this.didSwipeRight=t,this}onMove(t){return this.didMove=t,this}destroy(){const{element:t}=this;return t.removeEventListener("touchstart",this.didTouchStart,!1),t.removeEventListener("touchend",this.didTouchEnd,!1),t.removeEventListener("touchmove",this.didTouchMove,!1),this}didTouchStart({touches:[t]}){this.touchStartPoint=new r(t.pageX,t.pageY)}didTouchEnd(t){const[e]=t.changedTouches,{touchStartPoint:s}=this,i=new r(e.pageX,e.pageY);i.isLeftOf(s)&&Math.abs(i.distanceFrom(s).x)>this.tolerance&&this.didSwipeLeft(t),i.isRightOf(s)&&Math.abs(i.distanceFrom(s).x)>this.tolerance&&this.didSwipeRight(t)}didTouchMove(t){const[e]=t.touches,{touchStartPoint:s}=this,i=new r(e.pageX,e.pageY);this.didMove({distance:i.distanceFrom(s),up:i.isAbove(s),down:i.isBelow(s),left:i.isLeftOf(s),right:i.isRightOf(s)})}}t("l",l)}}}));