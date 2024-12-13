import{ca as C,u as R,S,R as h,cb as L,a1 as j,r as n,H as l,c3 as f,j as s,M as N,cc as U,E as V}from"./index-BRyeyo8a.js";import{C as E}from"./chat-room-content-CYXDGznA.js";import"./GlobalStyles-Dtc_kgga.js";const a=C.getInstance();function H(){const g=R(),d=new S(g.search),r=h(L),u=h(j),i=n.useRef(null),[t,v]=n.useState(),w=async()=>{const e=document.querySelector('input[data-test="input-chat"]');e==null||e.blur(),l.navigate(-1)},y=async()=>{await U.getInstance().checkOrCreateUser(),await a.fetchRoomList(V.currentLang())},c=()=>{if(!a.getRooms().length)return;const e=a.getRooms().find(o=>o.id==d.findNumber("room",-1));if(!e){l.navigate(-1);return}v(e)};n.useEffect(()=>{if(d.findNumber("room",-1)==-1){l.navigate(-1);return}!r.chatApiUrl||!r.chatSocketUrl||!u||(f.chatApiUrl||f.updateChat(r),y())},[r,u]);const m=()=>{if(i.current&&visualViewport){const e=visualViewport.height==window.__height?0:visualViewport.offsetTop,o=document.querySelector('input[data-test="input-chat"]'),p=document.querySelector("#msgListRef");o&&o.scrollIntoView(),p&&(p.style.paddingTop=e+"px"),i.current.style.top=e+"px"}},x=()=>{document.body.classList.add("disable-page-overscroll"),document.body.querySelector("#root").classList.add("disable-page-overscroll")},b=()=>{document.body.classList.remove("disable-page-overscroll"),document.body.querySelector("#root").classList.remove("disable-page-overscroll")};return n.useEffect(()=>{var e;return x(),(e=window.visualViewport)==null||e.addEventListener("resize",m),c(),a.onListRoomsChanged(c),()=>{var o;a.off(c),(o=window.visualViewport)==null||o.removeEventListener("resize",m),b(),window.scrollTo(0,0)}},[]),s.jsxs("div",{className:"flex flex-col h-full",children:[s.jsxs("div",{ref:i,className:`room-type-${t==null?void 0:t.type} flex items-center justify-center fixed w-full top-0 p-3 bg-[var(--navbar-mob-bg)] top-div`,style:{height:48,minHeight:48},"data-test":"mobile-header",children:[s.jsx("button",{onClick:w,className:"absolute top-4.5 left-3 w-8 h-full",children:s.jsx(N,{color:"var(--arrow-color)",name:"ic_chevon_right",className:"w-4 h-4 rotate-180"})}),t?s.jsx("span",{className:"text-lg uppercase text-nowrap whitespace-nowrap text-[var(--page-header)]",children:t==null?void 0:t.name}):s.jsx("span",{className:"loader-dot !w-1.5"})]}),t&&s.jsx(E,{mode:"mobile",room:t})]})}export{H as ChatRoom};