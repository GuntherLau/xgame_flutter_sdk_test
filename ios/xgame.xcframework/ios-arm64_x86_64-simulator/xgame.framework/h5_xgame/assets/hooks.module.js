import{bM as Oe,aS as Zt,aV as T,aR as e_}from"./index.sdk-0.0.1.js";const S_=Object.freeze(Object.defineProperty({__proto__:null,EventEmitter:Oe,default:Oe},Symbol.toStringTag,{value:"Module"})),Z_=Zt(S_),{Transform:x_}=e_;var $_=t=>class __ extends x_{constructor(_,n,o,i,c){super(c),this._rate=_,this._capacity=n,this._delimitedSuffix=o,this._hashBitLength=i,this._options=c,this._state=new t,this._state.initialize(_,n),this._finalized=!1}_transform(_,n,o){let i=null;try{this.update(_,n)}catch(c){i=c}o(i)}_flush(_){let n=null;try{this.push(this.digest())}catch(o){n=o}_(n)}update(_,n){if(!T.isBuffer(_)&&typeof _!="string")throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Digest already called");return T.isBuffer(_)||(_=T.from(_,n)),this._state.absorb(_),this}digest(_){if(this._finalized)throw new Error("Digest already called");this._finalized=!0,this._delimitedSuffix&&this._state.absorbLastFewBits(this._delimitedSuffix);let n=this._state.squeeze(this._hashBitLength/8);return _!==void 0&&(n=n.toString(_)),this._resetState(),n}_resetState(){return this._state.initialize(this._rate,this._capacity),this}_clone(){const _=new __(this._rate,this._capacity,this._delimitedSuffix,this._hashBitLength,this._options);return this._state.copy(_._state),_._finalized=this._finalized,_}};const{Transform:z_}=e_;var C_=t=>class n_ extends z_{constructor(_,n,o,i){super(i),this._rate=_,this._capacity=n,this._delimitedSuffix=o,this._options=i,this._state=new t,this._state.initialize(_,n),this._finalized=!1}_transform(_,n,o){let i=null;try{this.update(_,n)}catch(c){i=c}o(i)}_flush(){}_read(_){this.push(this.squeeze(_))}update(_,n){if(!T.isBuffer(_)&&typeof _!="string")throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Squeeze already called");return T.isBuffer(_)||(_=T.from(_,n)),this._state.absorb(_),this}squeeze(_,n){this._finalized||(this._finalized=!0,this._state.absorbLastFewBits(this._delimitedSuffix));let o=this._state.squeeze(_);return n!==void 0&&(o=o.toString(n)),o}_resetState(){return this._state.initialize(this._rate,this._capacity),this}_clone(){const _=new n_(this._rate,this._capacity,this._delimitedSuffix,this._options);return this._state.copy(_._state),_._finalized=this._finalized,_}};const E_=$_,P_=C_;var H_=function(t){const e=E_(t),_=P_(t);return function(n,o){switch(typeof n=="string"?n.toLowerCase():n){case"keccak224":return new e(1152,448,null,224,o);case"keccak256":return new e(1088,512,null,256,o);case"keccak384":return new e(832,768,null,384,o);case"keccak512":return new e(576,1024,null,512,o);case"sha3-224":return new e(1152,448,6,224,o);case"sha3-256":return new e(1088,512,6,256,o);case"sha3-384":return new e(832,768,6,384,o);case"sha3-512":return new e(576,1024,6,512,o);case"shake128":return new _(1344,256,31,o);case"shake256":return new _(1088,512,31,o);default:throw new Error("Invald algorithm: "+n)}}},o_={};const We=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648];o_.p1600=function(t){for(let e=0;e<24;++e){const _=t[0]^t[10]^t[20]^t[30]^t[40],n=t[1]^t[11]^t[21]^t[31]^t[41],o=t[2]^t[12]^t[22]^t[32]^t[42],i=t[3]^t[13]^t[23]^t[33]^t[43],c=t[4]^t[14]^t[24]^t[34]^t[44],l=t[5]^t[15]^t[25]^t[35]^t[45],h=t[6]^t[16]^t[26]^t[36]^t[46],u=t[7]^t[17]^t[27]^t[37]^t[47],f=t[8]^t[18]^t[28]^t[38]^t[48],r=t[9]^t[19]^t[29]^t[39]^t[49];let a=f^(o<<1|i>>>31),s=r^(i<<1|o>>>31);const b=t[0]^a,w=t[1]^s,y=t[10]^a,p=t[11]^s,g=t[20]^a,S=t[21]^s,C=t[30]^a,z=t[31]^s,F=t[40]^a,E=t[41]^s;a=_^(c<<1|l>>>31),s=n^(l<<1|c>>>31);const U=t[2]^a,k=t[3]^s,P=t[12]^a,ie=t[13]^s,re=t[22]^a,se=t[23]^s,ce=t[32]^a,le=t[33]^s,ue=t[42]^a,ae=t[43]^s;a=o^(h<<1|u>>>31),s=i^(u<<1|h>>>31);const he=t[4]^a,fe=t[5]^s,pe=t[14]^a,de=t[15]^s,ve=t[24]^a,me=t[25]^s,ye=t[34]^a,ge=t[35]^s,be=t[44]^a,ke=t[45]^s;a=c^(f<<1|r>>>31),s=l^(r<<1|f>>>31);const we=t[6]^a,Se=t[7]^s,xe=t[16]^a,$e=t[17]^s,ze=t[26]^a,Ce=t[27]^s,Ee=t[36]^a,Pe=t[37]^s,He=t[46]^a,Te=t[47]^s;a=h^(_<<1|n>>>31),s=u^(n<<1|_>>>31);const De=t[8]^a,Ne=t[9]^s,Ue=t[18]^a,qe=t[19]^s,Le=t[28]^a,Fe=t[29]^s,Be=t[38]^a,Me=t[39]^s,Ae=t[48]^a,Ve=t[49]^s,J=b,Q=w,X=p<<4|y>>>28,Y=y<<4|p>>>28,Z=g<<3|S>>>29,tt=S<<3|g>>>29,et=z<<9|C>>>23,_t=C<<9|z>>>23,nt=F<<18|E>>>14,ot=E<<18|F>>>14,it=U<<1|k>>>31,rt=k<<1|U>>>31,st=ie<<12|P>>>20,ct=P<<12|ie>>>20,lt=re<<10|se>>>22,ut=se<<10|re>>>22,at=le<<13|ce>>>19,ht=ce<<13|le>>>19,ft=ue<<2|ae>>>30,pt=ae<<2|ue>>>30,dt=fe<<30|he>>>2,vt=he<<30|fe>>>2,mt=pe<<6|de>>>26,yt=de<<6|pe>>>26,gt=me<<11|ve>>>21,bt=ve<<11|me>>>21,kt=ye<<15|ge>>>17,wt=ge<<15|ye>>>17,St=ke<<29|be>>>3,xt=be<<29|ke>>>3,$t=we<<28|Se>>>4,zt=Se<<28|we>>>4,Ct=$e<<23|xe>>>9,Et=xe<<23|$e>>>9,Pt=ze<<25|Ce>>>7,Ht=Ce<<25|ze>>>7,Tt=Ee<<21|Pe>>>11,Dt=Pe<<21|Ee>>>11,Nt=Te<<24|He>>>8,Ut=He<<24|Te>>>8,qt=De<<27|Ne>>>5,Lt=Ne<<27|De>>>5,Ft=Ue<<20|qe>>>12,Bt=qe<<20|Ue>>>12,Mt=Fe<<7|Le>>>25,At=Le<<7|Fe>>>25,Vt=Be<<8|Me>>>24,Ot=Me<<8|Be>>>24,Wt=Ae<<14|Ve>>>18,jt=Ve<<14|Ae>>>18;t[0]=J^~st&gt,t[1]=Q^~ct&bt,t[10]=$t^~Ft&Z,t[11]=zt^~Bt&tt,t[20]=it^~mt&Pt,t[21]=rt^~yt&Ht,t[30]=qt^~X&lt,t[31]=Lt^~Y&ut,t[40]=dt^~Ct&Mt,t[41]=vt^~Et&At,t[2]=st^~gt&Tt,t[3]=ct^~bt&Dt,t[12]=Ft^~Z&at,t[13]=Bt^~tt&ht,t[22]=mt^~Pt&Vt,t[23]=yt^~Ht&Ot,t[32]=X^~lt&kt,t[33]=Y^~ut&wt,t[42]=Ct^~Mt&et,t[43]=Et^~At&_t,t[4]=gt^~Tt&Wt,t[5]=bt^~Dt&jt,t[14]=Z^~at&St,t[15]=tt^~ht&xt,t[24]=Pt^~Vt&nt,t[25]=Ht^~Ot&ot,t[34]=lt^~kt&Nt,t[35]=ut^~wt&Ut,t[44]=Mt^~et&ft,t[45]=At^~_t&pt,t[6]=Tt^~Wt&J,t[7]=Dt^~jt&Q,t[16]=at^~St&$t,t[17]=ht^~xt&zt,t[26]=Vt^~nt&it,t[27]=Ot^~ot&rt,t[36]=kt^~Nt&qt,t[37]=wt^~Ut&Lt,t[46]=et^~ft&dt,t[47]=_t^~pt&vt,t[8]=Wt^~J&st,t[9]=jt^~Q&ct,t[18]=St^~$t&Ft,t[19]=xt^~zt&Bt,t[28]=nt^~it&mt,t[29]=ot^~rt&yt,t[38]=Nt^~qt&X,t[39]=Ut^~Lt&Y,t[48]=ft^~dt&Ct,t[49]=pt^~vt&Et,t[0]^=We[e*2],t[1]^=We[e*2+1]}};const R=o_;function L(){this.state=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.blockSize=null,this.count=0,this.squeezing=!1}L.prototype.initialize=function(t,e){for(let _=0;_<50;++_)this.state[_]=0;this.blockSize=t/8,this.count=0,this.squeezing=!1};L.prototype.absorb=function(t){for(let e=0;e<t.length;++e)this.state[~~(this.count/4)]^=t[e]<<8*(this.count%4),this.count+=1,this.count===this.blockSize&&(R.p1600(this.state),this.count=0)};L.prototype.absorbLastFewBits=function(t){this.state[~~(this.count/4)]^=t<<8*(this.count%4),t&128&&this.count===this.blockSize-1&&R.p1600(this.state),this.state[~~((this.blockSize-1)/4)]^=128<<8*((this.blockSize-1)%4),R.p1600(this.state),this.count=0,this.squeezing=!0};L.prototype.squeeze=function(t){this.squeezing||this.absorbLastFewBits(1);const e=T.alloc(t);for(let _=0;_<t;++_)e[_]=this.state[~~(this.count/4)]>>>8*(this.count%4)&255,this.count+=1,this.count===this.blockSize&&(R.p1600(this.state),this.count=0);return e};L.prototype.copy=function(t){for(let e=0;e<50;++e)t.state[e]=this.state[e];t.blockSize=this.blockSize,t.count=this.count,t.squeezing=this.squeezing};var T_=L,tn=H_(T_),V,v,i_,r_,H,je,s_,Rt,te,Kt,Gt,c_,A={},l_=[],D_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,G=Array.isArray;function x(t,e){for(var _ in e)t[_]=e[_];return t}function u_(t){var e=t.parentNode;e&&e.removeChild(t)}function Jt(t,e,_){var n,o,i,c={};for(i in e)i=="key"?n=e[i]:i=="ref"?o=e[i]:c[i]=e[i];if(arguments.length>2&&(c.children=arguments.length>3?V.call(arguments,2):_),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)c[i]===void 0&&(c[i]=t.defaultProps[i]);return B(t,c,n,o,null)}function B(t,e,_,n,o){var i={type:t,props:e,key:_,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++i_,__i:-1,__u:0};return o==null&&v.vnode!=null&&v.vnode(i),i}function N_(){return{current:null}}function O(t){return t.children}function M(t,e){this.props=t,this.context=e}function D(t,e){if(e==null)return t.__?D(t.__,t.__i+1):null;for(var _;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null)return _.__e;return typeof t.type=="function"?D(t):null}function a_(t){var e,_;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null){t.__e=t.__c.base=_.__e;break}return a_(t)}}function Qt(t){(!t.__d&&(t.__d=!0)&&H.push(t)&&!K.__r++||je!==v.debounceRendering)&&((je=v.debounceRendering)||s_)(K)}function K(){var t,e,_,n,o,i,c,l;for(H.sort(Rt);t=H.shift();)t.__d&&(e=H.length,n=void 0,i=(o=(_=t).__v).__e,c=[],l=[],_.__P&&((n=x({},o)).__v=o.__v+1,v.vnode&&v.vnode(n),ee(_.__P,n,o,_.__n,_.__P.namespaceURI,32&o.__u?[i]:null,c,i??D(o),!!(32&o.__u),l),n.__v=o.__v,n.__.__k[n.__i]=n,d_(c,n,l),n.__e!=i&&a_(n)),H.length>e&&H.sort(Rt));K.__r=0}function h_(t,e,_,n,o,i,c,l,h,u,f){var r,a,s,b,w,y=n&&n.__k||l_,p=e.length;for(_.__d=h,U_(_,e,y),h=_.__d,r=0;r<p;r++)(s=_.__k[r])!=null&&typeof s!="boolean"&&typeof s!="function"&&(a=s.__i===-1?A:y[s.__i]||A,s.__i=r,ee(t,s,a,o,i,c,l,h,u,f),b=s.__e,s.ref&&a.ref!=s.ref&&(a.ref&&_e(a.ref,null,s),f.push(s.ref,s.__c||b,s)),w==null&&b!=null&&(w=b),65536&s.__u||a.__k===s.__k?(h&&!h.isConnected&&(h=D(a)),h=f_(s,h,t)):typeof s.type=="function"&&s.__d!==void 0?h=s.__d:b&&(h=b.nextSibling),s.__d=void 0,s.__u&=-196609);_.__d=h,_.__e=w}function U_(t,e,_){var n,o,i,c,l,h=e.length,u=_.length,f=u,r=0;for(t.__k=[],n=0;n<h;n++)c=n+r,(o=t.__k[n]=(o=e[n])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?B(null,o,null,null,null):G(o)?B(O,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?B(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=t,o.__b=t.__b+1,l=q_(o,_,c,f),o.__i=l,i=null,l!==-1&&(f--,(i=_[l])&&(i.__u|=131072)),i==null||i.__v===null?(l==-1&&r--,typeof o.type!="function"&&(o.__u|=65536)):l!==c&&(l===c+1?r++:l>c?f>h-c?r+=l-c:r--:l<c?l==c-1&&(r=l-c):r=0,l!==n+r&&(o.__u|=65536))):(i=_[c])&&i.key==null&&i.__e&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=D(i)),Xt(i,i,!1),_[c]=null,f--);if(f)for(n=0;n<u;n++)(i=_[n])!=null&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=D(i)),Xt(i,i))}function f_(t,e,_){var n,o;if(typeof t.type=="function"){for(n=t.__k,o=0;n&&o<n.length;o++)n[o]&&(n[o].__=t,e=f_(n[o],e,_));return e}t.__e!=e&&(_.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function p_(t,e){return e=e||[],t==null||typeof t=="boolean"||(G(t)?t.some(function(_){p_(_,e)}):e.push(t)),e}function q_(t,e,_,n){var o=t.key,i=t.type,c=_-1,l=_+1,h=e[_];if(h===null||h&&o==h.key&&i===h.type&&!(131072&h.__u))return _;if(n>(h!=null&&!(131072&h.__u)?1:0))for(;c>=0||l<e.length;){if(c>=0){if((h=e[c])&&!(131072&h.__u)&&o==h.key&&i===h.type)return c;c--}if(l<e.length){if((h=e[l])&&!(131072&h.__u)&&o==h.key&&i===h.type)return l;l++}}return-1}function Ie(t,e,_){e[0]==="-"?t.setProperty(e,_??""):t[e]=_==null?"":typeof _!="number"||D_.test(e)?_:_+"px"}function W(t,e,_,n,o){var i;t:if(e==="style")if(typeof _=="string")t.style.cssText=_;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)_&&e in _||Ie(t.style,e,"");if(_)for(e in _)n&&_[e]===n[e]||Ie(t.style,e,_[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=_,_?n?_.u=n.u:(_.u=te,t.addEventListener(e,i?Gt:Kt,i)):t.removeEventListener(e,i?Gt:Kt,i);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e in t)try{t[e]=_??"";break t}catch{}typeof _=="function"||(_==null||_===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,_))}}function Re(t){return function(e){if(this.l){var _=this.l[e.type+t];if(e.t==null)e.t=te++;else if(e.t<_.u)return;return _(v.event?v.event(e):e)}}}function ee(t,e,_,n,o,i,c,l,h,u){var f,r,a,s,b,w,y,p,g,S,C,z,F,E,U,k=e.type;if(e.constructor!==void 0)return null;128&_.__u&&(h=!!(32&_.__u),i=[l=e.__e=_.__e]),(f=v.__b)&&f(e);t:if(typeof k=="function")try{if(p=e.props,g=(f=k.contextType)&&n[f.__c],S=f?g?g.props.value:f.__:n,_.__c?y=(r=e.__c=_.__c).__=r.__E:("prototype"in k&&k.prototype.render?e.__c=r=new k(p,S):(e.__c=r=new M(p,S),r.constructor=k,r.render=F_),g&&g.sub(r),r.props=p,r.state||(r.state={}),r.context=S,r.__n=n,a=r.__d=!0,r.__h=[],r._sb=[]),r.__s==null&&(r.__s=r.state),k.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=x({},r.__s)),x(r.__s,k.getDerivedStateFromProps(p,r.__s))),s=r.props,b=r.state,r.__v=e,a)k.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(k.getDerivedStateFromProps==null&&p!==s&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(p,S),!r.__e&&(r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(p,r.__s,S)===!1||e.__v===_.__v)){for(e.__v!==_.__v&&(r.props=p,r.state=r.__s,r.__d=!1),e.__e=_.__e,e.__k=_.__k,e.__k.forEach(function(P){P&&(P.__=e)}),C=0;C<r._sb.length;C++)r.__h.push(r._sb[C]);r._sb=[],r.__h.length&&c.push(r);break t}r.componentWillUpdate!=null&&r.componentWillUpdate(p,r.__s,S),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(s,b,w)})}if(r.context=S,r.props=p,r.__P=t,r.__e=!1,z=v.__r,F=0,"prototype"in k&&k.prototype.render){for(r.state=r.__s,r.__d=!1,z&&z(e),f=r.render(r.props,r.state,r.context),E=0;E<r._sb.length;E++)r.__h.push(r._sb[E]);r._sb=[]}else do r.__d=!1,z&&z(e),f=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++F<25);r.state=r.__s,r.getChildContext!=null&&(n=x(x({},n),r.getChildContext())),a||r.getSnapshotBeforeUpdate==null||(w=r.getSnapshotBeforeUpdate(s,b)),h_(t,G(U=f!=null&&f.type===O&&f.key==null?f.props.children:f)?U:[U],e,_,n,o,i,c,l,h,u),r.base=e.__e,e.__u&=-161,r.__h.length&&c.push(r),y&&(r.__E=r.__=null)}catch(P){e.__v=null,h||i!=null?(e.__e=l,e.__u|=h?160:32,i[i.indexOf(l)]=null):(e.__e=_.__e,e.__k=_.__k),v.__e(P,e,_)}else i==null&&e.__v===_.__v?(e.__k=_.__k,e.__e=_.__e):e.__e=L_(_.__e,e,_,n,o,i,c,h,u);(f=v.diffed)&&f(e)}function d_(t,e,_){e.__d=void 0;for(var n=0;n<_.length;n++)_e(_[n],_[++n],_[++n]);v.__c&&v.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(i){i.call(o)})}catch(i){v.__e(i,o.__v)}})}function L_(t,e,_,n,o,i,c,l,h){var u,f,r,a,s,b,w,y=_.props,p=e.props,g=e.type;if(g==="svg"?o="http://www.w3.org/2000/svg":g==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(u=0;u<i.length;u++)if((s=i[u])&&"setAttribute"in s==!!g&&(g?s.localName===g:s.nodeType===3)){t=s,i[u]=null;break}}if(t==null){if(g===null)return document.createTextNode(p);t=document.createElementNS(o,g,p.is&&p),i=null,l=!1}if(g===null)y===p||l&&t.data===p||(t.data=p);else{if(i=i&&V.call(t.childNodes),y=_.props||A,!l&&i!=null)for(y={},u=0;u<t.attributes.length;u++)y[(s=t.attributes[u]).name]=s.value;for(u in y)if(s=y[u],u!="children"){if(u=="dangerouslySetInnerHTML")r=s;else if(u!=="key"&&!(u in p)){if(u=="value"&&"defaultValue"in p||u=="checked"&&"defaultChecked"in p)continue;W(t,u,null,s,o)}}for(u in p)s=p[u],u=="children"?a=s:u=="dangerouslySetInnerHTML"?f=s:u=="value"?b=s:u=="checked"?w=s:u==="key"||l&&typeof s!="function"||y[u]===s||W(t,u,s,y[u],o);if(f)l||r&&(f.__html===r.__html||f.__html===t.innerHTML)||(t.innerHTML=f.__html),e.__k=[];else if(r&&(t.innerHTML=""),h_(t,G(a)?a:[a],e,_,n,g==="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,c,i?i[0]:_.__k&&D(_,0),l,h),i!=null)for(u=i.length;u--;)i[u]!=null&&u_(i[u]);l||(u="value",b!==void 0&&(b!==t[u]||g==="progress"&&!b||g==="option"&&b!==y[u])&&W(t,u,b,y[u],o),u="checked",w!==void 0&&w!==t[u]&&W(t,u,w,y[u],o))}return t}function _e(t,e,_){try{typeof t=="function"?t(e):t.current=e}catch(n){v.__e(n,_)}}function Xt(t,e,_){var n,o;if(v.unmount&&v.unmount(t),(n=t.ref)&&(n.current&&n.current!==t.__e||_e(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){v.__e(i,e)}n.base=n.__P=null}if(n=t.__k)for(o=0;o<n.length;o++)n[o]&&Xt(n[o],e,_||typeof t.type!="function");_||t.__e==null||u_(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function F_(t,e,_){return this.constructor(t,_)}function v_(t,e,_){var n,o,i,c;v.__&&v.__(t,e),o=(n=typeof _=="function")?null:_&&_.__k||e.__k,i=[],c=[],ee(e,t=(!n&&_||e).__k=Jt(O,null,[t]),o||A,A,e.namespaceURI,!n&&_?[_]:o?null:e.firstChild?V.call(e.childNodes):null,i,!n&&_?_:o?o.__e:e.firstChild,n,c),d_(i,t,c)}function m_(t,e){v_(t,e,m_)}function B_(t,e,_){var n,o,i,c,l=x({},t.props);for(i in t.type&&t.type.defaultProps&&(c=t.type.defaultProps),e)i=="key"?n=e[i]:i=="ref"?o=e[i]:l[i]=e[i]===void 0&&c!==void 0?c[i]:e[i];return arguments.length>2&&(l.children=arguments.length>3?V.call(arguments,2):_),B(t.type,l,n||t.key,o||t.ref,null)}function M_(t,e){var _={__c:e="__cC"+c_++,__:t,Consumer:function(n,o){return n.children(o)},Provider:function(n){var o,i;return this.getChildContext||(o=[],(i={})[e]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&o.some(function(l){l.__e=!0,Qt(l)})},this.sub=function(c){o.push(c);var l=c.componentWillUnmount;c.componentWillUnmount=function(){o.splice(o.indexOf(c),1),l&&l.call(c)}}),n.children}};return _.Provider.__=_.Consumer.contextType=_}V=l_.slice,v={__e:function(t,e,_,n){for(var o,i,c;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),c=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,n||{}),c=o.__d),c)return o.__E=o}catch(l){t=l}throw t}},i_=0,r_=function(t){return t!=null&&t.constructor==null},M.prototype.setState=function(t,e){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof t=="function"&&(t=t(x({},_),this.props)),t&&x(_,t),t!=null&&this.__v&&(e&&this._sb.push(e),Qt(this))},M.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Qt(this))},M.prototype.render=O,H=[],s_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Rt=function(t,e){return t.__v.__b-e.__v.__b},K.__r=0,te=0,Kt=Re(!1),Gt=Re(!0),c_=0;const A_=Object.freeze(Object.defineProperty({__proto__:null,Component:M,Fragment:O,cloneElement:B_,createContext:M_,createElement:Jt,createRef:N_,h:Jt,hydrate:m_,get isValidElement(){return r_},get options(){return v},render:v_,toChildArray:p_},Symbol.toStringTag,{value:"Module"})),en=Zt(A_);var $,d,It,Ke,q=0,y_=[],j=[],m=v,Ge=m.__b,Je=m.__r,Qe=m.diffed,Xe=m.__c,Ye=m.unmount,Ze=m.__;function N(t,e){m.__h&&m.__h(d,t,q||e),q=0;var _=d.__H||(d.__H={__:[],__h:[]});return t>=_.__.length&&_.__.push({__V:j}),_.__[t]}function g_(t){return q=1,b_(w_,t)}function b_(t,e,_){var n=N($++,2);if(n.t=t,!n.__c&&(n.__=[_?_(e):w_(void 0,e),function(l){var h=n.__N?n.__N[0]:n.__[0],u=n.t(h,l);h!==u&&(n.__N=[u,n.__[1]],n.__c.setState({}))}],n.__c=d,!d.u)){var o=function(l,h,u){if(!n.__c.__H)return!0;var f=n.__c.__H.__.filter(function(a){return!!a.__c});if(f.every(function(a){return!a.__N}))return!i||i.call(this,l,h,u);var r=!1;return f.forEach(function(a){if(a.__N){var s=a.__[0];a.__=a.__N,a.__N=void 0,s!==a.__[0]&&(r=!0)}}),!(!r&&n.__c.props===l)&&(!i||i.call(this,l,h,u))};d.u=!0;var i=d.shouldComponentUpdate,c=d.componentWillUpdate;d.componentWillUpdate=function(l,h,u){if(this.__e){var f=i;i=void 0,o(l,h,u),i=f}c&&c.call(this,l,h,u)},d.shouldComponentUpdate=o}return n.__N||n.__}function V_(t,e){var _=N($++,3);!m.__s&&oe(_.__H,e)&&(_.__=t,_.i=e,d.__H.__h.push(_))}function k_(t,e){var _=N($++,4);!m.__s&&oe(_.__H,e)&&(_.__=t,_.i=e,d.__h.push(_))}function O_(t){return q=5,ne(function(){return{current:t}},[])}function W_(t,e,_){q=6,k_(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},_==null?_:_.concat(t))}function ne(t,e){var _=N($++,7);return oe(_.__H,e)?(_.__V=t(),_.i=e,_.__h=t,_.__V):_.__}function j_(t,e){return q=8,ne(function(){return t},e)}function I_(t){var e=d.context[t.__c],_=N($++,9);return _.c=t,e?(_.__==null&&(_.__=!0,e.sub(d)),e.props.value):t.__}function R_(t,e){m.useDebugValue&&m.useDebugValue(e?e(t):t)}function K_(t){var e=N($++,10),_=g_();return e.__=t,d.componentDidCatch||(d.componentDidCatch=function(n,o){e.__&&e.__(n,o),_[1](n)}),[_[0],function(){_[1](void 0)}]}function G_(){var t=N($++,11);if(!t.__){for(var e=d.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var _=e.__m||(e.__m=[0,0]);t.__="P"+_[0]+"-"+_[1]++}return t.__}function J_(){for(var t;t=y_.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(I),t.__H.__h.forEach(Yt),t.__H.__h=[]}catch(e){t.__H.__h=[],m.__e(e,t.__v)}}m.__b=function(t){d=null,Ge&&Ge(t)},m.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Ze&&Ze(t,e)},m.__r=function(t){Je&&Je(t),$=0;var e=(d=t.__c).__H;e&&(It===d?(e.__h=[],d.__h=[],e.__.forEach(function(_){_.__N&&(_.__=_.__N),_.__V=j,_.__N=_.i=void 0})):(e.__h.forEach(I),e.__h.forEach(Yt),e.__h=[],$=0)),It=d},m.diffed=function(t){Qe&&Qe(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(y_.push(e)!==1&&Ke===m.requestAnimationFrame||((Ke=m.requestAnimationFrame)||Q_)(J_)),e.__H.__.forEach(function(_){_.i&&(_.__H=_.i),_.__V!==j&&(_.__=_.__V),_.i=void 0,_.__V=j})),It=d=null},m.__c=function(t,e){e.some(function(_){try{_.__h.forEach(I),_.__h=_.__h.filter(function(n){return!n.__||Yt(n)})}catch(n){e.some(function(o){o.__h&&(o.__h=[])}),e=[],m.__e(n,_.__v)}}),Xe&&Xe(t,e)},m.unmount=function(t){Ye&&Ye(t);var e,_=t.__c;_&&_.__H&&(_.__H.__.forEach(function(n){try{I(n)}catch(o){e=o}}),_.__H=void 0,e&&m.__e(e,_.__v))};var t_=typeof requestAnimationFrame=="function";function Q_(t){var e,_=function(){clearTimeout(n),t_&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(_,100);t_&&(e=requestAnimationFrame(_))}function I(t){var e=d,_=t.__c;typeof _=="function"&&(t.__c=void 0,_()),d=e}function Yt(t){var e=d;t.__c=t.__(),d=e}function oe(t,e){return!t||t.length!==e.length||e.some(function(_,n){return _!==t[n]})}function w_(t,e){return typeof e=="function"?e(t):e}const X_=Object.freeze(Object.defineProperty({__proto__:null,useCallback:j_,useContext:I_,useDebugValue:R_,useEffect:V_,useErrorBoundary:K_,useId:G_,useImperativeHandle:W_,useLayoutEffect:k_,useMemo:ne,useReducer:b_,useRef:O_,useState:g_},Symbol.toStringTag,{value:"Module"})),_n=Zt(X_);export{_n as a,Z_ as b,tn as j,en as r};
