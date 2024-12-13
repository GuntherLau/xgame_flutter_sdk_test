import{r as h,y as J,a_ as K,j as D}from"./index.sdk-0.0.1.js";import{j as X,q as H,l as Q,n as Z,o as Y,g as tt,a as et,s as I,M as rt,m as U,r as nt,c as M,u as ot,b as z,d as at}from"./Modal.js";import{u as st}from"./index7.js";import{d as it,P as lt}from"./popover.js";function ct(e,t,o){const n=t.getBoundingClientRect(),a=o&&o.getBoundingClientRect(),g=H(t);let p;if(t.fakeTransform)p=t.fakeTransform;else{const s=g.getComputedStyle(t);p=s.getPropertyValue("-webkit-transform")||s.getPropertyValue("transform")}let f=0,d=0;if(p&&p!=="none"&&typeof p=="string"){const s=p.split("(")[1].split(")")[0].split(",");f=parseInt(s[4],10),d=parseInt(s[5],10)}return e==="left"?a?`translateX(${a.right+f-n.left}px)`:`translateX(${g.innerWidth+f-n.left}px)`:e==="right"?a?`translateX(-${n.right-a.left-f}px)`:`translateX(-${n.left+n.width-f}px)`:e==="up"?a?`translateY(${a.bottom+d-n.top}px)`:`translateY(${g.innerHeight+d-n.top}px)`:a?`translateY(-${n.top-a.top+n.height-d}px)`:`translateY(-${n.top+n.height-d}px)`}function pt(e){return typeof e=="function"?e():e}function B(e,t,o){const n=pt(o),a=ct(e,t,n);a&&(t.style.webkitTransform=a,t.style.transform=a)}const dt=h.forwardRef(function(t,o){const n=X(),a={enter:n.transitions.easing.easeOut,exit:n.transitions.easing.sharp},g={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:p,appear:f=!0,children:d,container:s,direction:c="down",easing:R=a,in:m,onEnter:T,onEntered:S,onEntering:$,onExit:y,onExited:P,onExiting:j,style:b,timeout:w=g,TransitionComponent:k=Q,...E}=t,l=h.useRef(null),L=J(K(d),l,o),x=r=>i=>{r&&(i===void 0?r(l.current):r(l.current,i))},v=x((r,i)=>{B(c,r,s),Z(r),T&&T(r,i)}),u=x((r,i)=>{const V=Y({timeout:w,style:b,easing:R},{mode:"enter"});r.style.webkitTransition=n.transitions.create("-webkit-transform",{...V}),r.style.transition=n.transitions.create("transform",{...V}),r.style.webkitTransform="none",r.style.transform="none",$&&$(r,i)}),C=x(S),A=x(j),O=x(r=>{const i=Y({timeout:w,style:b,easing:R},{mode:"exit"});r.style.webkitTransition=n.transitions.create("-webkit-transform",i),r.style.transition=n.transitions.create("transform",i),B(c,r,s),y&&y(r)}),_=x(r=>{r.style.webkitTransition="",r.style.transition="",P&&P(r)}),G=r=>{p&&p(l.current,r)},N=h.useCallback(()=>{l.current&&B(c,l.current,s)},[c,s]);return h.useEffect(()=>{if(m||c==="down"||c==="right")return;const r=it(()=>{l.current&&B(c,l.current,s)}),i=H(l.current);return i.addEventListener("resize",r),()=>{r.clear(),i.removeEventListener("resize",r)}},[c,m,s]),h.useEffect(()=>{m||N()},[m,N]),D.jsx(k,{nodeRef:l,onEnter:v,onEntered:C,onEntering:u,onExit:O,onExited:_,onExiting:A,addEndListener:G,appear:f,in:m,timeout:w,...E,children:(r,i)=>h.cloneElement(d,{ref:L,style:{visibility:r==="exited"&&!m?"hidden":void 0,...b,...d.props.style},...i})})});function ft(e){return tt("MuiDrawer",e)}et("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const F=(e,t)=>{const{ownerState:o}=e;return[t.root,(o.variant==="permanent"||o.variant==="persistent")&&t.docked,t.modal]},ut=e=>{const{classes:t,anchor:o,variant:n}=e,a={root:["root"],docked:[(n==="permanent"||n==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${M(o)}`,n!=="temporary"&&`paperAnchorDocked${M(o)}`]};return at(a,ft,t)},ht=I(rt,{name:"MuiDrawer",slot:"Root",overridesResolver:F})(U(({theme:e})=>({zIndex:(e.vars||e).zIndex.drawer}))),W=I("div",{shouldForwardProp:nt,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:F})({flex:"0 0 auto"}),mt=I(lt,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.paper,t[`paperAnchor${M(o.anchor)}`],o.variant!=="temporary"&&t[`paperAnchorDocked${M(o.anchor)}`]]}})(U(({theme:e})=>({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(e.vars||e).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0,variants:[{props:{anchor:"left"},style:{left:0}},{props:{anchor:"top"},style:{top:0,left:0,right:0,height:"auto",maxHeight:"100%"}},{props:{anchor:"right"},style:{right:0}},{props:{anchor:"bottom"},style:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"}},{props:({ownerState:t})=>t.anchor==="left"&&t.variant!=="temporary",style:{borderRight:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:t})=>t.anchor==="top"&&t.variant!=="temporary",style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:t})=>t.anchor==="right"&&t.variant!=="temporary",style:{borderLeft:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:t})=>t.anchor==="bottom"&&t.variant!=="temporary",style:{borderTop:`1px solid ${(e.vars||e).palette.divider}`}}]}))),q={left:"right",right:"left",top:"down",bottom:"up"};function gt(e){return["left","right"].includes(e)}function xt({direction:e},t){return e==="rtl"&&gt(t)?q[t]:t}const Et=h.forwardRef(function(t,o){const n=ot({props:t,name:"MuiDrawer"}),a=X(),g=st(),p={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{anchor:f="left",BackdropProps:d,children:s,className:c,elevation:R=16,hideBackdrop:m=!1,ModalProps:{BackdropProps:T,...S}={},onClose:$,open:y=!1,PaperProps:P={},SlideProps:j,TransitionComponent:b=dt,transitionDuration:w=p,variant:k="temporary",...E}=n,l=h.useRef(!1);h.useEffect(()=>{l.current=!0},[]);const L=xt({direction:g?"rtl":"ltr"},f),v={...n,anchor:f,elevation:R,open:y,variant:k,...E},u=ut(v),C=D.jsx(mt,{elevation:k==="temporary"?R:0,square:!0,...P,className:z(u.paper,P.className),ownerState:v,children:s});if(k==="permanent")return D.jsx(W,{className:z(u.root,u.docked,c),ownerState:v,ref:o,...E,children:C});const A=D.jsx(b,{in:y,direction:q[L],timeout:w,appear:l.current,...j,children:C});return k==="persistent"?D.jsx(W,{className:z(u.root,u.docked,c),ownerState:v,ref:o,...E,children:A}):D.jsx(ht,{BackdropProps:{...d,...T,transitionDuration:w},className:z(u.root,u.modal,c),open:y,ownerState:v,onClose:$,hideBackdrop:m,ref:o,...E,...S,children:A})});export{Et as D,xt as g,gt as i};