import{j as e,l as Q,H as b,bn as p,bo as $,i as G,b as j,aH as X,r as i,a7 as Z,a2 as ee,K as L,b1 as te,M as w,T as o,af as P,R as ae,a3 as se,bp as re,Y as ne}from"./index.sdk-0.0.1.js";import{N as oe}from"./normal-layout.js";import{A as le}from"./button.js";import{u as ie,b as ce,a as me,m as de}from"./mqtt-controller.js";import{C as ue,G as pe}from"./game-widget.js";import{L as xe}from"./popover.js";import{P as fe,C as he}from"./current-not-support-modal.js";import"./main-layout.js";import"./lazy-load-component.js";import"./browser.js";import"./game.dto.js";import"./Modal.js";import"./modals.js";function ge({item:a,className:n=""}){return e.jsx("div",{className:n,children:e.jsx(Q,{className:"object-cover w-full",src:b.getRemoteImgPath(a.imageUrl),alt:""})})}function ve({item:a,className:n=""}){return e.jsx("div",{className:n,children:e.jsx("div",{dangerouslySetInnerHTML:{__html:p(a.imageUrl).body.innerHTML}})})}function je({item:a,className:n=""}){return e.jsx("div",{className:n,children:e.jsx("div",{dangerouslySetInnerHTML:{__html:p(a.imageUrl).body.innerHTML}})})}function be({item:a,className:n=""}){const s=$(),{gameLivePair:u,setGameLivePair:x,getProviders:f,getGames:r,getGameLivePair:T,games:h,favs:N,setFav:C}=ie(),{companyConf:U}=G(),{isConnected:H,createConnection:k}=ce(),g=j(X),{closeModalCurrentSupport:S,handlePlay3rdGame:_,currentGame:y,supportCurrentGameListCurrency:D,currentGameRef:F,currentGameScreenLanscapeModeRef:R,thirdGameUrl:M,setThirdGameUrl:q,isShowModalCurrentSupport:Y}=me(),[I,E]=i.useState([]),{isLogin:V}=j(Z),d=j(de);i.useEffect(()=>{var t,c,l;if(g!=""&&!H){const W=ee(g),v=JSON.parse(W);L.updateMqtt(((t=v.find(m=>m.field=="host"))==null?void 0:t.value)??"");const z=(c=v.find(m=>m.field=="username"))==null?void 0:c.value,K=(l=v.find(m=>m.field=="password"))==null?void 0:l.value;try{k(L.mqttUrl,z,K)}catch(m){console.log("mqtt connection error",m)}}},[g]),i.useEffect(()=>{var t;d&&((t=d==null?void 0:d.data)==null?void 0:t.length)>0&&x(d.data)},[d]),i.useEffect(()=>{r(),f(),T()},[]),i.useEffect(()=>{if(h.length){const t=h.filter(c=>a.games?a.games.split(",").map(l=>Number(l.trim())).includes(c.gameId):!1);E(t)}},[h]);const O=()=>{s(-1)},A=()=>{var t;(t=window.open(U.olUrl,"_blank"))==null||t.focus()},B=()=>{var t;if(a.adsUrl.includes("https://xgame.cgcg.cc")){const c=a.adsUrl.replace("https://xgame.cgcg.cc","");b.navigate(c)}else(t=window.open(a.adsUrl,"_blank"))==null||t.focus()},J=t=>{if(!V){s(ae.login,{state:{previousPath:location.pathname}});return}_(t)};return e.jsxs("div",{className:n,children:[e.jsxs("div",{className:"mx-auto bg-[var(--bg-8)] pc:relative overflow-hidden overflow-y-auto hide-scrollbar h-full",children:[a.bannerUrl&&e.jsx(te,{src:b.getRemoteImgPath(a.bannerUrl),alt:`${a.bannerUrl}`,className:"w-full",aspectRatio:281/122}),e.jsxs("div",{className:"flex items-center justify-between absolute top-0 w-full p-3 bg-gradient-to-b from-black to-transparent",children:[e.jsx("div",{className:"pr-5",onClick:O,children:e.jsx(w,{color:"#bdc1c6",name:"ic_chevon_right",className:"w-4 h-4 rotate-180"})}),e.jsx("div",{className:"pl-5",children:e.jsx(w,{color:"#bdc1c6",name:"ic_support",className:"w-5 h-5",onClick:A})})]}),e.jsxs("div",{className:"mx-3 mt-4",children:[a.originName&&e.jsx("div",{className:"max-h-14 text-xl font-medium mb-1 line-clamp-2",children:a.originName}),a.startTime&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mt-2 text-sm text-[#9a9a9a]",children:[o.start_time(),P(a.startTime).format("YYYY-MM-DD HH:mm")]})}),a.endTime&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"text-sm text-[#9a9a9a]",children:[o.end_time(),P(a.endTime).format("YYYY-MM-DD HH:mm"),o.deadline()]})}),e.jsxs("div",{className:"text-sm text-[#9a9a9a]",children:[o.promotions_event_object(),": ",o.all_member()]}),e.jsx("div",{className:"flex justify-center w-full",children:e.jsx(le,{onClick:()=>{B()},title:o.join_now(),className:"text-black uppercase my-6 max-w-[375px]"})}),a.imageUrl&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pt-2 mb-1 text-base uppercase text-nowrap",children:o.promotions_event_content()}),e.jsx("div",{dangerouslySetInnerHTML:{__html:p(a.imageUrl).body.innerHTML}})]}),I.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pt-2 mb-2 text-base uppercase text-nowrap",children:o.promotions_event_related()}),e.jsx("div",{className:"flex overflow-hidden overflow-x-auto hide-scrollbar w-full mb-4",children:I.map((t,c)=>e.jsxs(e.Fragment,{children:[" ",t.category=="future"&&u.length>0&&u.filter(l=>l.pair==t.gameCode).map(l=>e.jsx(ue,{game:t,name:t.gameName,onClick:()=>J(t),loading:y==t.gameId,future:l,promotion:!0,isFav:N.includes(t.gameId),setIsFav:C},t.gameId)),["lottery","hash"].includes(t.category)&&e.jsx(pe,{classNames:"mr-1.5",name:"",onClick:()=>_(t),loading:y==t.gameId,game:t,isFav:N.includes(t.gameId),setIsFav:C},t.gameId)]}))})]}),a.content&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pt-2 mb-2 text-base uppercase text-nowrap",children:o.promotions_event_details()}),e.jsx("div",{dangerouslySetInnerHTML:{__html:p(a.content).body.innerHTML}})]}),e.jsx(xe,{className:"mx-auto mb-10 mt-12 w-[150px]",index:"3"})]})]}),e.jsx(fe,{gameId:F.current,isLandscapeMode:R.current,gameUrl:M,onClose:()=>q(""),open:!!M}),e.jsx(he,{supportCurrentGameListCurrency:D,onClose:()=>S(),open:Y})]})}function ke(){const{id:a}=se(),{companyConf:n}=G(),[s,u]=i.useState();i.useEffect(()=>{re(a).then(r=>{r!=null&&r.data&&u(r==null?void 0:r.data)})},[a]);const x=()=>{var r;(r=window.open(n.olUrl,"_blank"))==null||r.focus()},f=i.useCallback(()=>{switch(s==null?void 0:s.templateType){case 0:return e.jsx(ge,{item:s});case 1:return e.jsx(ve,{item:s});case 2:return e.jsx(je,{item:s});case 4:return e.jsx(be,{item:s});default:return e.jsx(e.Fragment,{})}},[s]);return s?e.jsx(oe,{enableMenu:!0,customPaddingTop:0,rightEl:e.jsx(w,{color:"white",name:"ic_support",className:"w-5 h-5",onClick:x}),headerClasses:"bg-transparent !bg-gradient-to-b !from-[var(--navbar-bg)] !to-transparent",children:f()}):e.jsx(ne,{})}export{ke as PromotionsDetailView};