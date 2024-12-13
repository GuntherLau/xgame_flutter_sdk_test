import{br as x,a as b,S as C,b as u,bs as R,bt as y,r as i,H as l,K as f,j as a,M as j,bv as S}from"./index.sdk-0.0.1.js";/* empty css     */import{C as N}from"./chat-room-content.js";import"./lazy-load-component.js";import"./Modal.js";import"./index6.js";import"./emotion-react.browser.esm.js";import"./index7.js";import"./modals.js";import"./button.js";const s=x.getInstance();function A(){const d=b(),p=new C(d.search),r=u(R),m=u(y),n=i.useRef(null),[t,w]=i.useState(),g=async()=>{const e=document.querySelector('input[data-test="input-chat"]');e==null||e.blur(),l.navigate(-1)},v=async()=>{await S.getInstance().checkOrCreateUser(),await s.fetchRoomList()},c=()=>{if(!s.getRooms().length)return;const e=s.getRooms().find(o=>o.id==p.findNumber("room",-1));if(!e){l.navigate(-1);return}w(e)};i.useEffect(()=>{if(p.findNumber("room",-1)==-1){l.navigate(-1);return}!r.chatApiUrl||!r.chatSocketUrl||!m||(f.chatApiUrl||f.updateChat(r),v())},[r,m]);const h=()=>{if(n.current&&visualViewport){const e=visualViewport.height==window.__height?0:visualViewport.offsetTop,o=document.querySelector('input[data-test="input-chat"]');o&&o.scrollIntoView(),n.current.style.top=e+"px"}};return i.useEffect(()=>{var e;return(e=window.visualViewport)==null||e.addEventListener("resize",h),c(),s.onListRoomsChanged(c),()=>{var o;s.off(c),(o=window.visualViewport)==null||o.removeEventListener("resize",h)}},[]),a.jsxs("div",{className:"flex flex-col h-full",children:[a.jsxs("div",{ref:n,className:`room-type-${t==null?void 0:t.type} flex items-center justify-center fixed w-full top-0 p-3 bg-[var(--navbar-mob-bg)] top-div`,style:{height:52,minHeight:52},"data-test":"mobile-header",children:[a.jsx("button",{onClick:g,className:"absolute top-4.5 left-3 w-8 h-full",children:a.jsx(j,{color:"var(--arrow-color)",name:"ic_chevon_right",className:"w-4 h-4 rotate-180"})}),t?a.jsx("span",{className:"text-lg uppercase text-nowrap whitespace-nowrap text-[var(--page-header)]",children:t==null?void 0:t.name}):a.jsx("span",{className:"loader-dot !w-1.5"})]}),t&&a.jsx(N,{mode:"mobile",room:t})]})}export{A as ChatRoom};