const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./side-menu.js","./index.sdk-0.0.1.js","./index.css","./language-selector.js","./SwipeableDrawer.js","./Drawer.js","./Modal.js","./index7.js","./popover.js","./chains.js","./avatar-selector.js","./useConnections.js","./lazy-load-component.js","./chat-sidebar.js","./room-list.js","./chat-room-content.js","./index6.js","./emotion-react.browser.esm.js","./modals.js","./button.js"])))=>i.map(i=>d[i]);
import{u as S,b as _,aM as D,i as k,r as g,T as c,q as P,G as U,H as r,R as i,L as E,aD as W,j as e,l as v,M,aN as H,h as z,V as A,aa as F,ab as B,z as Z,aO as V,aj as C,a8 as O,ak as q,p as G,aE as R,a7 as J,a as K}from"./index.sdk-0.0.1.js";import{L as T,b as Q}from"./popover.js";import{l as $,L}from"./lazy-load-component.js";function X(){var j;const{i18n:{language:h}}=S(),s=_(D),{appSetting:d,updateSetting:t,selectedMenu:l,setSelectedMenu:p}=k(),[m,f]=g.useState(0),b=[{id:1,name:c.menu(),icon:"ic_menu",onClick:()=>{t("showSideMenu",!0),P.emit(U.checkMoney)}},{id:2,name:c.vip(),icon:"ic_vip",onClick:()=>{r.navigate(i.vip),p(2)}},{id:3,name:c.menu_agent(),icon:`/assets/theme/${(j=E.getInstance().getLang(h))==null?void 0:j.theme}/ic_bonus_bottom_nav.png`,onClick:()=>{r.navigate(i.agent),p(3)}},{id:4,name:c.menu_promotion(),icon:"ic_bonus",onClick:()=>{r.navigate(i.promotions),p(4)}},{id:5,name:c.chat(),icon:"ic_chat",onClick:()=>{r.navigate(i.chat),p(W.CHAT)}}];return g.useEffect(()=>{f(-.1)},[]),e.jsx("div",{className:`${d.showBottomNav?"fixed":"hidden"} pc:hidden left-0 bottom-0 z-10 w-full h-[58px]`,style:{bottom:m},children:e.jsx("div",{className:"flex max-w-mob mx-auto items-center justify-between bg-[var(--bottom-nav-bg)] text-xs h-full rounded-t-lg border-t border-t-[var(--bottom-nav-border)]",children:b.map((u,o)=>{const a=l==u.id;return o==2?e.jsxs("div",{onClick:u.onClick,className:"h-full flex flex-col gap-1 items-center justify-center text-[var(--bottom-nav-color)] float-bt-nav-item",children:[e.jsx(Y,{stroke:"var(--bottom-nav-border)",fill:"var(--bottom-nav-bg)"}),e.jsx(v,{src:u.icon,alt:"",className:"float-bt-nav-item-icon"}),e.jsx(v,{src:u.icon,alt:"",className:"h-5 invisible"}),e.jsx("span",{className:`uppercase text-nowrap whitespace-nowrap ${a?"text-[var(--active)]":""} ${u.name.length>7?"px-1":""}`,children:u.name})]},`bottom_nav_${o}`):e.jsxs("div",{onClick:u.onClick,className:"relative h-full flex gap-1 flex-col items-center justify-center text-[var(--bottom-nav-color)] grow",children:[e.jsxs("div",{className:"relative h-5 w-5",children:[e.jsx(M,{name:u.icon,color:a?"var(--bottom-nav-active)":"var(--bottom-nav-icon-color)",className:"h-5"}),o==3&&s>0&&e.jsx("span",{style:{top:"-6px",right:"-14px"},className:"absolute bg-[#ff4200] circle w-4 h-4 flex-center leading-none pt-0.5 text-white ",children:s})]}),e.jsx("span",{className:`uppercase text-nowrap whitespace-nowrap ${a?"text-[var(--bottom-nav-active)]":""} ${u.name.length>7?"px-1":""}`,children:u.name})]},`bottom_nav_${o}`)})})})}function Y({stroke:h,fill:s}){return e.jsx("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 244 50.8",className:"float-bt-nav-item-curve",children:e.jsx("path",{stroke:h,fill:s,d:`M0,50.6h21.8c12,0,23.4-5.6,30.8-15.2C68.6,14.5,93.7,1,121.9,1s53.2,13.5,69.3,34.4
		c7.4,9.6,18.8,15.2,30.8,15.2H244`})})}function ee({className:h}){const{companyConf:s}=k(),[d,t]=g.useState(""),l=(p,m)=>{t(""),setTimeout(()=>{H(p,m)})};return e.jsxs("div",{className:"p-3 text-[var(--footer-text)] bg-[var(--bg-footer)] text-sm "+(h??""),children:[e.jsxs("div",{className:"flex pt-5",children:[e.jsxs("div",{className:"w-1/2 flex flex-col gap-1",children:[e.jsx("h2",{className:"text-lg text-[1rem] text-[var(--footer-title)] uppercase",children:c.promo()}),e.jsx("span",{className:"hover:cursor-pointer ",onClick:()=>r.navigate(i.vip),children:c.vip_club()}),e.jsx("span",{className:"hover:cursor-pointer ",onClick:()=>r.navigate(i.promotions),children:c.discount()}),e.jsx("span",{className:"hover:cursor-pointer ",onClick:()=>r.navigate(i.eventBonus),children:c.task()}),e.jsx("span",{className:"hover:cursor-pointer ",children:c.big_turnable()})]}),e.jsxs("div",{className:"w-1/2 flex flex-col gap-1",children:[e.jsxs("h2",{className:"text-lg text-[1rem] text-[var(--footer-title)] uppercase",children:[c.support(),"/",c.legal()]}),e.jsx("span",{className:"hover:cursor-pointer ",onClick:()=>r.navigate(i.help),children:c.help_center()}),e.jsx("span",{className:"hover:cursor-pointer ",onClick:()=>r.navigate(i.gambleAware),children:c.gamble_aware()}),e.jsx("span",{className:"hover:cursor-pointer ",onClick:()=>r.navigate(i.privacyAgreement),children:c.privacy_agreement()}),e.jsx("span",{className:"hover:cursor-pointer ",onClick:()=>r.navigate(i.userAggrement),children:c.terms_of_service()})]})]}),e.jsxs("div",{className:"flex mt-10",children:[e.jsxs("div",{className:"w-1/2 flex flex-col gap-1",children:[e.jsx("h2",{className:"text-lg text-[1rem] text-[var(--footer-title)] uppercase",children:c.about_us()}),e.jsx("span",{className:"hover:cursor-pointer ",onClick:()=>r.navigate(i.aboutUs),children:c.company_profile()}),e.jsx("span",{className:"hover:cursor-pointer ",onClick:()=>r.navigate(i.joinUs),children:c.work_with_us()}),e.jsx("span",{className:"hover:cursor-pointer ",onClick:()=>r.navigate(`${i.aboutUs}?contact=true`),children:c.business_contact()})]}),e.jsxs("div",{className:"w-1/2  flex flex-col gap-1",children:[e.jsx("h2",{className:"text-lg text-[1rem] text-[var(--footer-title)] uppercase",children:c.community()}),e.jsxs("div",{className:"flex items-center gap-3 py-2 flex-wrap",children:[e.jsx("div",{onMouseEnter:()=>t("facebook"),onMouseLeave:()=>t(""),onMouseUp:()=>{l((s==null?void 0:s.facebook)??"","facebook")},onTouchStart:()=>t("facebook"),onTouchEnd:()=>{l((s==null?void 0:s.facebook)??"","facebook")},className:"w-8 h-8 hover:cursor-pointer",children:d=="facebook"?e.jsx(v,{src:"/assets/dummy/facebook.png",alt:"",className:"w-8"}):e.jsx("span",{className:"w-8 h-8 rounded-full bg-[#8d96a010] flex items-center justify-center",children:e.jsx("svg",{viewBox:"0 0 82 82",fill:"currentColor",width:30,height:30,children:e.jsx("path",{fill:"#8d96a070",d:"M46.6,33.5v7.5h10.3v11.6h-10.3v29c-1.8.2-3.7.3-5.6.3s-4.8-.2-7.1-.6v-28.8h-10.4v-11.6h10.4v-10.5c0-7.4,6-13.4,13.4-13.4h10.4v10h-4.8c-3.5,0-6.4,2.9-6.4,6.4Z"})})})}),e.jsx("div",{onMouseEnter:()=>t("twitter"),onMouseLeave:()=>t(""),onMouseUp:()=>{l((s==null?void 0:s.twitter)??"","twitter")},onTouchStart:()=>t("twitter"),onTouchEnd:()=>{l((s==null?void 0:s.twitter)??"","twitter")},className:"w-8 h-8 hover:cursor-pointer",children:d=="twitter"?e.jsx(v,{src:"/assets/dummy/twitter.png",alt:"",className:"w-8"}):e.jsx("span",{className:"w-8 h-8 rounded-full bg-[#8d96a010] flex items-center justify-center",children:e.jsx("svg",{viewBox:"0 0 51.2 45.9",fill:"currentColor",width:18,height:28,children:e.jsx("path",{fill:"#8d96a070",d:"M31.4,19.9L48.2,0h-7l-13.2,15.5L16.3,0H0l19.5,25.5L2.2,45.9h7.2l13.5-15.9,12.1,15.9h16.2l-19.8-26ZM26.2,26.1l-3.4-4.4L10.1,5h3.8l10.9,14.3,3.3,4.4,13.1,17.2h-3.8l-11.3-14.8Z"})})})}),e.jsx("div",{onMouseEnter:()=>t("telegram"),onMouseLeave:()=>t(""),onMouseUp:()=>{l((s==null?void 0:s.telegram)??"","telegram")},onTouchStart:()=>t("telegram"),onTouchEnd:()=>l((s==null?void 0:s.telegram)??"","telegram"),className:"w-8 h-8 hover:cursor-pointer",children:d=="telegram"?e.jsx(v,{src:"/assets/icon/telegram2.png",alt:"",className:"w-8"}):e.jsx("span",{className:"w-8 h-8 rounded-full bg-[#8d96a010] flex items-center justify-center",children:e.jsx("svg",{viewBox:"0 0 80 80",fill:"#8d96a070",width:32,height:32,children:e.jsx("path",{d:"M21.5,40.5l33.7-16.2c.9-.4,1.9.3,1.7,1.3l-4.9,32.9c-.1.9-1.1,1.3-1.9.8l-14.6-9.4c-.6-.4-.7-1.3-.3-1.8l11.7-13.6-17,11.5c-.3.2-.8.3-1.2.1l-7.4-3.3c-.9-.4-1-1.8,0-2.2Z"})})})}),e.jsx("div",{onMouseEnter:()=>t("whatsapp"),onMouseLeave:()=>t(""),onMouseUp:()=>{l((s==null?void 0:s.whatsapp)??"","whatsapp")},onTouchStart:()=>t("whatsapp"),onTouchEnd:()=>l((s==null?void 0:s.whatsapp)??"","whatsapp"),className:"w-8 h-8 hover:cursor-pointer",children:d=="whatsapp"?e.jsx(v,{src:"/assets/icon/whatsapp.png",alt:"",className:"w-8"}):e.jsxs("svg",{viewBox:"0 0 102 102",width:32,height:32,children:[e.jsx("path",{fill:"#8d96a010",d:"M102,51c0,28.2-22.8,51-51,51s-20.6-3.3-28.9-8.9l-18.3,5.1s3.4-10.8,5.6-17.6C3.5,72.2,0,62,0,51,0,22.8,22.8,0,51,0s51,22.8,51,51Z"}),e.jsx("path",{fill:"#8d96a070",d:"M35.1,26.4l5.8,12.7c.5,1.1.4,2.4-.4,3.4l-3.5,4.5c-.4.5-.4,1.1,0,1.6,1.8,3,8.5,13,18.7,17.7,1.5.7,3.3.3,4.4-1l3.5-4.3c1.2-1.4,3.2-1.8,4.8-1l10,5.3c1.6.9,2.4,2.7,1.9,4.5-1,3.4-3.5,8.5-9.9,10.2,0,0-5,2.3-18-3.6,0,0-20.6-9.7-28.8-27.9s-2.4-7.4-2.2-11.2,0-.2,0-.2c.4-6.3,5.8-11.1,12.1-10.8h1.5Z"})]})}),e.jsx("div",{onMouseEnter:()=>t("call"),onMouseLeave:()=>t(""),onMouseUp:()=>{l((s==null?void 0:s.phone)??"","call")},onTouchStart:()=>t("call"),onTouchEnd:()=>l((s==null?void 0:s.phone)??"","call"),className:"w-8 h-8 hover:cursor-pointer",children:d=="call"?e.jsx(v,{src:"/assets/icon/ic_phone.png",alt:"",className:"w-8"}):e.jsx("span",{className:"w-8 h-8 rounded-full bg-[#8d96a010] flex items-center justify-center",children:e.jsxs("svg",{viewBox:"0 0 80 80",width:28,height:28,children:[e.jsx("path",{fill:"#8d96a070",d:"M55.4,40h-3.5c0-6.6-5.3-11.9-11.9-11.9v-3.5C48.5,24.6,55.4,31.5,55.4,40z"}),e.jsx("path",{fill:"#8d96a070",d:"M64.8,40h-3.5c0-11.7-9.6-21.3-21.3-21.3v-3.5C53.7,15.2,64.8,26.3,64.8,40z"}),e.jsx("path",{fill:"#8d96a070",d:`M63,58.4L55.5,65c-1.8,1.6-4.4,2.1-6.7,1.2c-14.2-5-27.2-15.7-34.8-33.7c-1.3-3-1.7-5.8,1.3-8.9l5.9-6.9
		                      c1.2-1.5,3.5-1.3,4.5,0.4l5.8,10c0.6,0.9,0.4,2.1-0.3,3L28.5,33c-0.7,0.8-0.9,1.9-0.6,3c3.8,10.7,12.3,14.7,16.2,16
		                      c1.1,0.4,2.4,0,3.1-0.9l2-2.6c0.8-0.9,2.1-1.2,3.1-0.6l10.2,6.1C64.1,55,64.3,57.2,63,58.4z`})]})})})]})]})]}),e.jsxs("div",{className:"mt-10",children:[e.jsx(T,{className:"w-[150px]",index:"3"}),e.jsx("p",{className:"text-sm mt-3",children:c.website_info()})]}),e.jsxs("div",{className:"flex gap-6 mt-8 pb-5",children:[e.jsx(v,{src:"/assets/icon/ic_18_plus.png",alt:"",className:"h-8"}),e.jsx(v,{src:"/assets/icon/ic_gamecare.png",alt:"",className:"h-8"}),e.jsx(v,{src:"/assets/icon/ic_gamble.png",alt:"",className:"h-8"})]})]})}function se(){const{i18n:{language:h}}=S(),{extInfo:s,userExtMonies:d,userWalletDtos:t}=_(z),l=A(),{currencyList:p}=F(),m=_(B),f=g.useMemo(()=>!d||l.length==0?[]:d.map(o=>{const a=p.find(x=>x.currency==o.currency),n=l.find(x=>x&&x.tokenSymbol==o.currency),w=(a==null?void 0:a.exchangeRate)||0,N=o.currency==(s==null?void 0:s.currency);return{...o,balanceInSystemCurrency:w*(N?m:o.money),icon:(n==null?void 0:n.icon)??"",decimals:(n==null?void 0:n.decimals)??0,minDeposit:(n==null?void 0:n.minDeposit)??0,exchangeRate:w,checked:N,exchangeCurrency:a==null?void 0:a.exchangeCurrency,tokenName:(n==null?void 0:n.tokenName)??"",depositId:(n==null?void 0:n.id)??0,currencyName:h=="zh"?a==null?void 0:a.chineseName:a==null?void 0:a.name}}),[d,l,h,m]),b=g.useMemo(()=>{const o=f.find(n=>n.currency==(s==null?void 0:s.currency));if(!o)return;const a=f.find(n=>n.currency==(s==null?void 0:s.currency));return{...o,money:m,balanceInSystemCurrency:((a==null?void 0:a.exchangeRate)??1)*m}},[f,s,m]),j=g.useMemo(()=>{var N;const o=[],a=[],n=((N=E.getInstance().getLang(h))==null?void 0:N.currencies)??[];for(const x of n){const y=f.find(I=>I.currency==x);y&&o.push(y)}const w=(t==null?void 0:t.map(x=>x.tokenSymbol))??[];for(const x of f)n.includes(x.currency)||x.rechMoney==0&&x.money==0&&x.currency!=(b==null?void 0:b.currency)&&!w.includes(x.currency)||a.push(x);return a.sort((x,y)=>y.balanceInSystemCurrency-x.balanceInSystemCurrency),[...o,...a]},[h,f,t,b]),u=g.useMemo(()=>{let o=0;for(const a of j)o+=a.balanceInSystemCurrency;return o},[j,m]);return{defaultWallet:b,balanceAllWallet:u,allWalletsHasMoney:j}}function ae({checked:h,onChange:s,className:d=""}){return e.jsxs("label",{onClick:t=>t.stopPropagation(),className:"ct-switch",children:[e.jsx("input",{type:"checkbox",className:"peer",checked:h,onChange:t=>s(t.currentTarget.checked)}),e.jsx("div",{className:`slider peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white peer-checked:bg-[var(--active)] ${d}`})]})}function te(){const h=_(B),s=Z(z),d=_(V),{updateSetting:t}=k(),{defaultWallet:l,allWalletsHasMoney:p}=se(),m=g.useRef(null),f=g.useRef(null),b=a=>{if(a.stopPropagation(),r.isMobile()){r.navigate(i.wallet);return}t("showDepositModal",!0)},j=a=>{var n;(n=m.current)==null||n.closePop(a)},u=async a=>{if(O.depositWeb3Token.find(w=>w.bcToken.tokenSymbol==a.currency)){r.navigate(`${i.web3Deposit}?configId=${a.depositId}`);return}r.navigate(`${i.wallet}?type=deposit&method=fiat`)},o=async(a,n)=>{if(a.checked){r.showInfoToast(c.off_main_wallet_hint());return}const w={currency:a.tokenSymbol||a.currency};await q(w);const N=await G();N!=null&&s(N)};return e.jsx("div",{className:"flex gap-2",ref:f,children:e.jsxs("div",{className:"flex items-center justify-between gap-1 px-1.5 py-0.5 bg-[var(--balance-view-bg)] rounded",children:[e.jsx(Q,{actionELClassName:"flex item-center gap-2 text-xs text-[var(--text-content-color)]",className:"anchor-arrow-top-right-60 anchor-arrow-color !bg-white text-black px-3 !min-w-[280px] rounded-xl pb-5",actionEL:e.jsxs("div",{className:"flex items-center gap-1 cursor-pointer",children:[e.jsx(v,{src:(d==null?void 0:d.icon)??"/assets/icon/ic_btc.png",alt:"",className:"h-5 circle"}),e.jsx(M,{color:"var(--arrow-color)",name:"ic_arrow_down",className:"h-2 w-2 arrow","data-markup":"balance_viewer_arrow"})]}),disableAutoClose:!0,ref:m,children:e.jsxs(e.Fragment,{children:[l&&e.jsx("div",{className:"mt-3 capitalize text-[#000000]",children:c.current_wallet().toLocaleLowerCase()}),l&&e.jsxs("div",{className:"flex items-center justify-between gap-3 p-2 bg-[var(--balance-viewer-wallet-bg)] rounded-xl h-10",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(v,{src:r.getCurrencyIcon(l.currency),className:"w-5 h-5 circle",alt:""}),e.jsx("div",{className:"w-[0.5px] bg-[#e9e8e9] h-5 mx-2"}),e.jsxs("div",{className:"text-black text-lg text-nowrap leading-none",children:[C((h||0).toFixed(6)),e.jsx("span",{className:"pl-0.5 text-xs text-[#3c3c3c]",children:l.currency})]})]}),e.jsx("button",{onClick:()=>u(l),className:"rounded w-6 h-5 bg-[var(--active)] text-black flex items-center justify-center text-2xl leading-none",children:"+"})]}),e.jsx("div",{className:"mt-3 capitalize text-[#000000]",children:c.other_wallets().toLocaleLowerCase()}),p.map((a,n)=>e.jsxs("div",{className:"flex items-center justify-between gap-3 p-2 mt-2 bg-[var(--balance-viewer-wallet-bg)] rounded-xl h-10",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(v,{src:r.getCurrencyIcon(a==null?void 0:a.currency),className:"w-5 h-5 circle",alt:""}),e.jsx("div",{className:"w-[0.5px] bg-[#e9e8e9] h-5 mx-2"}),e.jsxs("div",{className:"text-black text-lg text-nowrap leading-none",children:[C(((a==null?void 0:a.money)||0).toFixed(6)),e.jsx("span",{className:"pl-0.5 text-xs text-[#3c3c3c]",children:a==null?void 0:a.currency})]})]}),e.jsx(ae,{checked:a.checked,onChange:w=>o(a),className:`slider_small ${a.checked?"slider__lighter__checked":"slider__lighter"}`})]},n)),e.jsx("button",{onClick:()=>{r.navigate(i.walletToken)},className:"w-full rounded-xl bg-[var(--active)] text-black p-2 mt-4 h-10",children:c.wallet_management()}),e.jsx("button",{onClick:j,className:"w-full rounded-xl bg-[#f1f0f1] text-[#888888] p-2 mt-2 h-10",children:c.close_2()})]})}),e.jsx("span",{className:"flex items-center gap-1",children:e.jsx("span",{className:"text-lg font-bold",children:C((h||0).toFixed(6))})}),e.jsx("div",{className:"bg-[var(--disable)] rounded-md h-[1.7rem]",onClick:b,children:e.jsx("button",{className:"rounded-md w-6 h-6 bg-[var(--active)] shadow-md text-black flex items-center justify-center text-2xl",children:"+"})})]})})}const ne=$(()=>R(()=>import("./side-menu.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url)).SideMenu,ce=$(()=>R(()=>import("./chat-sidebar.js"),__vite__mapDeps([13,1,2,14,15,12,6,16,17,7,18,19]),import.meta.url)).ChatSidebar;function ie({children:h,tabEl:s,footerClassName:d,...t}){const l=g.useRef(null),p=g.useRef(null),[m,f]=g.useState(0),{isLogin:b}=_(J);K();const{appSetting:j,updateSetting:u}=k();return g.useEffect(()=>{var o;window.scrollTo({top:0}),f(((o=p.current)==null?void 0:o.clientHeight)??48)},[]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{ref:l,className:"h-full w-full hide-scrollbar",children:[e.jsx("div",{ref:p,className:"fixed overscroll-none w-full top-0 z-[100] bg-[var(--navbar-bg)]",children:e.jsxs("div",{className:"flex items-center text-white px-3 pc:pl-[calc(var(--side-menu-width)_+_1rem)] h-[48px]",children:[e.jsx(T,{className:"w-[150px] cursor-pointer",onClick:()=>r.navigate("/")}),e.jsx("span",{className:"grow"}),b&&e.jsx(te,{}),!b&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>r.navigate(`${i.login}`),className:"px-3 pt-0.5 bg-[var(--header-login-btn-bg)] text-[var(--header-login-btn-text)] rounded font-semibold",children:c.login()}),e.jsx("button",{onClick:()=>r.navigate(`${i.signup}`),className:"px-3 pt-0.5 bg-[var(--header-signup-btn-bg)] text-[var(--header-signup-btn-text)] rounded ml-2 font-semibold",children:c.sign_up()})]}),e.jsx("button",{className:`${j.showChat?"hidden":"flex"} mob:hidden rounded-md px-2 py-0.5 bg-[#18171c] items-center justify-center ml-2`,onClick:()=>u("showChat",!0),children:e.jsx(M,{color:"#ffffff",name:"ic_chat",className:"w-7 h-7"})})]})}),e.jsx(L,{LazyComponent:ne,fallback:e.jsx("div",{}),lazyComponentProps:{}}),e.jsxs("div",{className:"transition-all pc:pl-[var(--side-menu-width)] pc:pr-[var(--chat-widget-max-width)]",style:{paddingTop:m,paddingBottom:"var(--bottom-nav-height)"},children:[!t.disableHeader&&t.titleEl&&e.jsx("div",{className:"text-left text-2xl pl-3 mb-1 text-[var(--page-header)]",children:t.title}),s,e.jsxs("div",{className:"max-w-[1024px] mx-auto","data-query":"main-content-view",children:[e.jsx("div",{className:"grow min-h-[calc(100vh_-_var(--top-menu-height)_-_var(--bottom-nav-height))] flex flex-col",children:h}),e.jsx(ee,{className:d})]})]}),r.isPC()&&e.jsx(L,{LazyComponent:ce,fallback:e.jsx("div",{}),lazyComponentProps:{}})]}),e.jsx(X,{})]})}export{X as B,ae as C,ie as M,se as u};
