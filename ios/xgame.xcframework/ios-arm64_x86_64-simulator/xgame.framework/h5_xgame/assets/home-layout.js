const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./bet-table.js","./index.sdk-0.0.1.js","./index.css","./bet-history.js","./no-record.js","./mqtt-controller.js","./browser.js","./current-not-support-modal.js","./modals.js","./Modal.js","./game.dto.js","./bet-table.css","./ads-banner-popup.js","./swiper-react.js","./autoplay.js","./effect-coverflow.js","./ads-banner-popup.css","./tab-ads.css","./ads-black-banner-popup.js","./ads-black-banner-popup.css"])))=>i.map(i=>d[i]);
import{a as L,S as B,r as m,j as e,M as C,H as v,T as s,R as d,u as V,b as S,L as se,i as ne,aH as oe,z as q,aI as I,aJ as F,a2 as re,K as O,aD as ie,aK as ce,aL as le,aE as A}from"./index.sdk-0.0.1.js";import{M as de}from"./main-layout.js";import{p as me,b as pe,u as ge}from"./mqtt-controller.js";import{C as ue}from"./popover.js";import{a as h,G as f,b as he}from"./game.dto.js";import{l as G,L as E}from"./lazy-load-component.js";import"./browser.js";import"./Modal.js";function fe({showPlatformSelection:i,showFavouriteSelection:g,type:l}){const c=L(),r=new B(c.search),[n,o]=m.useState(r.findString("name",""));return m.useEffect(()=>{const t=r.findString("name","");(t==null?void 0:t.length)>0&&o(t)},[]),m.useEffect(()=>{const t=r.findString("name","");(t==null?void 0:t.length)>0?o(t):o("")},[c.pathname]),e.jsxs("div",{className:"flex items-center justify-between mb-3 gap-3 bg-[var(--filter-bg)] border-t border-t-[var(--home-divider)] h-[60px] px-3",children:[e.jsxs("div",{className:`${i?"w-[60%] gap-2":"w-full gap-3"} flex items-center justify-between rounded-md p-2 bg-[var(--filter-item-bg)]`,children:[e.jsx(C,{name:"ic_search",color:"#29282c",className:"h-5 w-5 min-w-5"}),e.jsx("input",{type:"text",value:n,onChange:t=>{o(t.target.value),r.setVal("name",t.target.value),v.navigate(`${c.pathname}${r.toSearchQuery()}`)},className:"bg-transparent grow border-none outline-none placeholder:text-[#37373b] text-sm",placeholder:s.search_your_game()})]}),i&&e.jsx(xe,{type:l}),g&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{onClick:()=>v.navigate(d.favorite),className:`flex-center flex-col gap-1  text-sm text-[#8f8e8e] h-full rounded px-2 ${r.findString("gr","")=="fav"?"bg-[#27272e]":""}`,children:[e.jsx(C,{color:"var(--active)",name:"ic_heart",className:"w-7 h-7"}),e.jsx("span",{className:"leading-none whitespace-nowrap mt-[-6px]",children:s.collect()})]}),e.jsxs("div",{onClick:()=>v.navigate(d.recentPlay),className:`flex-center flex-col gap-1 text-sm text-[#8f8e8e] h-full rounded px-2 ${r.findString("gr","")=="recent"?"bg-[#27272e]":""}`,children:[e.jsx(C,{color:"var(--active)",name:"ic_game_recent",className:"w-7 h-7"}),e.jsx("span",{className:"leading-none whitespace-nowrap mt-[-6px]",children:s.recent()})]})]})]})}function xe({type:i}){var x;const{i18n:{language:g}}=V(),l=L(),c=new B(l.search),[r,n]=m.useState(c.findString("provider","")),o=M(),t=S(me),y=o.findIndex(a=>a.path===l.pathname),p=m.useMemo(()=>{let a=[{code:"",name:s.all_platforms()}];return t[i]&&(a=[...a,...t[i].map(u=>({code:u.code,name:g=="zh"?u.gameProvider:u.enGameProvider??u.gameProvider}))]),a},[t,g,i]);return m.useEffect(()=>{const a=c.findString("provider",""),u=p.find(T=>T.code==r);(a==null?void 0:a.length)>0&&u?n(a):(n(""),c.setVal("provider",""),v.navigate(`${o[y].path}${c.toSearchQuery()}`))},[]),m.useEffect(()=>{const a=c.findString("provider",""),u=p.find(T=>T.code==r);(a==null?void 0:a.length)>0&&u?n(a):(n(""),c.setVal("provider",""),v.navigate(`${o[y].path}${c.toSearchQuery()}`))},[l.pathname]),e.jsx(ue,{actionELClassName:"grow h-9",className:"anchor-arrow-top-right",alignRight:!0,actionEL:e.jsxs("button",{className:"h-full px-3 rounded-md bg-[var(--filter-item-bg)] w-full flex items-center justify-between text-sm",children:[e.jsxs("span",{className:"text-[#4b4b52]",children:[(x=p.find(a=>a.code==r))==null?void 0:x.name," "]}),e.jsx(C,{color:"#4b4b52",name:"ic_arrow_down",className:"w-3 h-3"})]}),children:p.map(a=>e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 min-",onClick:()=>{n(a.code),c.setVal("provider",a.code),v.navigate(`${l.pathname}${c.toSearchQuery()}`)},children:[e.jsx("span",{className:`${a.code==r?"text-[var(--active)] font-semibold":""}`,children:a.name}),a.code==r&&e.jsx(C,{color:"var(--active)",name:"ic_tick",className:"w-5 h-5"})]},a.code))})}function ve({showChat:i}){return[{icon:"ic_like",name:s.referral(),verticalTitle:s.referral(),path:d.home,code:"",type:h.ALL,expandClass:""},{icon:"ic_hash",name:s.hash(),verticalTitle:s.hash(),path:d.hashGame,code:f.hash,type:h.HASH,expandClass:"grid grid-cols-3 md:grid-cols-4 pc:grid-cols-5 gap-2"},{icon:"ic_crypto",name:s.crypto(),verticalTitle:s.crypto_game(),path:d.cryptoGame,code:f.crypto,type:h.CRYPTO_GAME,expandClass:"grid grid-cols-3 md:grid-cols-4 pc:grid-cols-5 gap-2"},{icon:"ic_future",name:s.futures(),verticalTitle:s.crypto_future(),path:d.futureGame,code:f.future,type:h.FUTURE,expandClass:`grid gap-2 ${i?"grid-cols-2 md:grid-cols-3 pcM_min:grid-cols-4":"grid-cols-2 md:grid-cols-4 pc:grid-cols-4"}`},{icon:"ic_live_casino",name:s.casino(),verticalTitle:s.live_casino(),path:d.casinoGame,code:f.live,type:h.LIVE,expandClass:"grid grid-cols-1 md:grid-cols-2 pc:grid-cols-3 gap-2"},{icon:"ic_slot",name:s.slots(),verticalTitle:s.slots(),path:d.slotsGame,code:f.electronic,type:h.SLOTS,expandClass:"grid grid-cols-3 md:grid-cols-4 pc:grid-cols-5 gap-2"},{icon:"ic_football",name:s.popular_event(),verticalTitle:s.popular_event(),path:d.sportGame,code:f.sport,type:h.SPORTS,expandClass:`grid grid-cols-1 pcM_min:grid-cols-2 gap-2 ${i?"":"md:grid-cols-2 pc:grid-cols-2"}`},{icon:"ic_lottery",name:s.lottery(),verticalTitle:s.lottery(),path:d.lotteryGame,code:f.lottery,type:h.LOTTERY,expandClass:"grid grid-cols-2 md:grid-cols-3 pc:grid-cols-4 gap-2"},{icon:"ic_fish_game",name:s.fish(),verticalTitle:s.fish(),path:d.fishingGame,code:f.fish,type:h.FISHING,expandClass:"grid grid-cols-3 md:grid-cols-4 pc:grid-cols-5 gap-2"},{icon:"ic_card_game",name:s.poker(),verticalTitle:s.poker(),path:d.cardGame,code:f.card,type:h.CARD_GAME,expandClass:"grid grid-cols-3 md:grid-cols-4 pc:grid-cols-5 gap-2"}]}function M(){var r;const{i18n:{language:i}}=V(),g=((r=se.getInstance().getLang(i))==null?void 0:r.horizontalCategories)??[],l=ve({showChat:!1}),c=[l[0]];for(const n of g){const o=l.find(t=>t.type==n);o&&c.push(o)}return c}const ye=G(()=>A(()=>import("./bet-table.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url)).BetTable,_e=G(()=>A(()=>import("./ads-banner-popup.js"),__vite__mapDeps([12,1,2,13,8,9,14,15,4,16,17]),import.meta.url)).AdsHomeBannerModal,we=G(()=>A(()=>import("./ads-black-banner-popup.js"),__vite__mapDeps([18,1,2,13,4,14,9,19,17]),import.meta.url)).AdsHomeBlackBannerModal;function Ae(){const i=L(),g=new B(i.search),{isConnected:l,createConnection:c}=pe(),{setSelectedMenu:r}=ne(),n=M(),o=n.findIndex(j=>j.path===i.pathname),t=S(oe),[y,p]=m.useState(!1),[x,a]=m.useState(!1),u=q(I),T=S(I),{data:_,isShowNewAds:k=!1,isShowFirst:D}=T,Q=q(F),W=S(F),{data:w,isShowNewAdsBlack:P=!1,isShowFirstBlack:H}=W,$=v.isMobile(),{getGames:U,getProviders:K,getGameLivePair:Y}=ge();m.useEffect(()=>{U(),K(),Y(),setTimeout(()=>{p(!0)},500)},[]),m.useEffect(()=>{(w.length>0||_.length>0)&&(H?(p(!0),setTimeout(()=>{a(!0)},100)):(a(!0),setTimeout(()=>{p(!0)},100)))},[w,_]),m.useEffect(()=>{var j,z,R;if(t!=""&&!l){const ee=re(t),N=JSON.parse(ee);O.updateMqtt(((j=N.find(b=>b.field=="host"))==null?void 0:j.value)??"");const ae=(z=N.find(b=>b.field=="username"))==null?void 0:z.value,te=(R=N.find(b=>b.field=="password"))==null?void 0:R.value;try{c(O.mqttUrl,ae,te)}catch(b){console.log("mqtt connection error",b)}}},[t]);const J=j=>{v.navigate(`${n[j].path}${g.toSearchQuery()}`)};m.useEffect(()=>{r(ie.NONE)},[r]);const X=()=>{u({data:_,isShowNewAds:!1,isShowFirst:D})},Z=()=>{Q({data:w,isShowNewAdsBlack:!1,isShowFirstBlack:H})};return e.jsx(e.Fragment,{children:o==-1?e.jsx(ce,{to:d.home,replace:!0}):e.jsxs(de,{tabEl:e.jsx(be,{selectedIndex:o,onClick:J}),className:"overscroll-none",children:[e.jsxs("div",{className:"w-full pb-10",children:[e.jsx(fe,{showPlatformSelection:![d.home].includes(i.pathname),showFavouriteSelection:d.home==i.pathname,type:n[o].code}),e.jsxs("div",{className:"px-3",children:[e.jsx(le,{}),e.jsx(E,{LazyComponent:ye,fallback:e.jsx("div",{}),lazyComponentProps:{gameType:he.ALL}})]})]}),x&&P&&w&&w.length>0&&$?e.jsx(E,{LazyComponent:we,fallback:e.jsx("div",{}),lazyComponentProps:{open:P&&w&&w.length>0,onClose:Z}}):e.jsx(e.Fragment,{}),y&&k&&_&&_.length>0&&$?e.jsx(E,{LazyComponent:_e,fallback:e.jsx("div",{}),lazyComponentProps:{open:y&&k&&_&&_.length>0,onClose:X}}):e.jsx(e.Fragment,{})]})})}function be({selectedIndex:i,onClick:g}){const l=m.useRef(null),c=n=>{g(n),r(n)},r=n=>{var p;if(!l.current)return;let o=0;const t=l.current.children[n].clientWidth,y=((p=l.current.parentElement)==null?void 0:p.clientWidth)||0;for(let x=0;x<n;x++)o+=l.current.children[x].clientWidth;l.current.scrollTo({left:o-y/2+t/2})};return m.useEffect(()=>{r(i)},[]),e.jsx("div",{ref:l,className:"pc:hidden flex items-center w-full overflow-hidden overflow-x-auto hide-scrollbar p-3 pt-2 bg-[var(--game-menu-bg)]",children:M().map((n,o)=>e.jsxs("button",{className:`flex flex-col items-center justify-center px-1.5 py-1 w-[56px] min-w-max rounded-md ${i==o?"text-[var(--active)] bg-[var(--game-menu-item-bg-active)]":"text-[var(--game-menu-item-color)]"}`,onClick:()=>{c(o)},children:[e.jsx(C,{name:n.icon,color:i==o?"var(--active)":"var(--game-menu-item-color)",className:`h-[22px] ${["ic_slot"].includes(n.icon)?"w-[22px]":"w-[18px]"}`}),e.jsx("span",{className:"text-nowrap whitespace-nowrap text-sm px-2 min-w-[52px]",children:n.name})]},`menu_${o}`))})}export{Ae as HomeLayout,be as MenuList,ve as getAllGameCategories,M as useHorizontalGameMenu};
