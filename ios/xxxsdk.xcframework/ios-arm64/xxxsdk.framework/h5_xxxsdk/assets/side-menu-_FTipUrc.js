import{db as le,dc as ie,dd as W,aJ as de,m as me,r as V,R as $,v as O,t as ue,de as xe,b as he,$ as ve,df as pe,dg as ge,a as be,dh as je,j as e,b0 as Ne,H as h,aX as we,di as fe,f as l,T as n,C as k,aR as ye,M as a,d as A,Z as _e,g as Ce,E,s as ke,x as Le,l as Se,G as Me}from"./index-BRyeyo8a.js";import{L as De}from"./language-selector-C_ebv94x.js";async function Te(r,w={}){var _,x;let m;if(w.connector)m=w.connector;else{const{connections:t,current:b}=r.state,c=t.get(b);m=c==null?void 0:c.connector}const f=r.state.connections;m&&(await m.disconnect(),m.emitter.off("change",r._internal.events.change),m.emitter.off("disconnect",r._internal.events.disconnect),m.emitter.on("connect",r._internal.events.connect),f.delete(m.uid)),r.setState(t=>{if(f.size===0)return{...t,connections:new Map,current:null,status:"disconnected"};const b=f.values().next().value;return{...t,connections:new Map(f),current:b.connector.uid}});{const t=r.state.current;if(!t)return;const b=(_=r.state.connections.get(t))==null?void 0:_.connector;if(!b)return;await((x=r.storage)==null?void 0:x.setItem("recentConnectorId",b.id))}}function Ve(r){return{mutationFn(w){return Te(r,w)},mutationKey:["disconnect"]}}function $e(r={}){const{mutation:w}=r,m=le(r),f=Ve(m),{mutate:_,mutateAsync:x,...t}=ie({...w,...f});return{...t,connectors:W({config:m}).map(b=>b.connector),disconnect:_,disconnectAsync:x}}function Ee(){var U,G,q,K,R,X;const{i18n:{language:r}}=de(),{appSetting:w,updateSetting:m}=me(),[f,_]=V.useState(!1),{extInfo:x,userInfo:t}=$(O),b=ue(O),c=$(xe),{isLogin:v}=$(he),I=$(ve),J=s=>s.stopPropagation(),ee=pe(),F=W(),T=$e(),[B,z]=V.useState(0),P=(U=ge)==null?void 0:U.getInstance().wallets,[Z,H]=V.useState(!1),{defaultWallet:y,allWalletsHasMoney:M,balanceAllWallet:se}=be(),{signout:ne}=je(),L=()=>{h.isMobile()&&m("showSideMenu",!1)},ae=()=>{L(),_(!0)},i=(s,u,C)=>{if(C&&!v){h.navigate(l.login);return}L(),setTimeout(()=>{h.navigate(s,u)},0)},te=async()=>{F&&F.map(s=>{var u;s&&((u=s==null?void 0:s.connector)==null||u.disconnect()),T.disconnectAsync({connector:s==null?void 0:s.connector})}),P&&P.map(s=>{var u;s&&((u=s==null?void 0:s.connector)==null||u.disconnect()),T.disconnectAsync({connector:s==null?void 0:s.connector})}),await ee.map(async s=>{try{await(s==null?void 0:s.disconnect()),T.disconnectAsync({connector:s})}catch{}}),T.disconnect(),await ne(),L()},re=async(s,u)=>{if(!(s!=null&&s.status)){h.showError(n.temporarily_unavailable());return}if(s.checked){h.showInfoToast(n.off_main_wallet_hint());return}const C={currency:s.tokenSymbol||s.currency};await ke(C);const D=await Le();D!=null&&b(D)},ce=()=>{H(!0),Se.emit(Me.checkMoney),setTimeout(()=>H(!1),1e3)};return V.useEffect(()=>{var s,u,C,D,Q,Y;if(((s=c==null?void 0:c.rechargeConfigs)==null?void 0:s.length)>0||(c==null?void 0:c.rechargeLevelConfigs.length)>0)if(v){const p=(D=(C=c==null?void 0:c.rechargeConfigs)==null?void 0:C.concat((u=c==null?void 0:c.rechargeLevelConfigs)==null?void 0:u.filter(o=>o.hyLevel==(t==null?void 0:t.hyLevel))))==null?void 0:D.filter(o=>{var d;return o.rechargeDiscountMode==0&&((d=o.languages)==null?void 0:d.includes(r))});p==null||p.forEach((o,d)=>{const j={...o};(j.rechargeDiscountTrigger==0||x!=null&&x.rechCount&&j.rechargeDiscountTrigger==2)&&(j.rechargeDiscountValue=0),p[d]=j});const g=p==null?void 0:p.reduce((o,d)=>!o||d.rechargeDiscountValue>o.rechargeDiscountValue?d:o,null);if(g!=null&&g.hyLevel)z(g.rechargeDiscountValue);else{const o=p.filter(N=>N.mode==1&&N.payType==g.payType),d=(o==null?void 0:o.find(N=>N.hyLevel))||o[0]||null,j=p.filter(N=>N.mode==2&&N.payType==g.payType),S=(j==null?void 0:j.find(N=>N.hyLevel))||j[0]||null,oe=Number((S==null?void 0:S.rechargeDiscountValue)|0)>Number((d==null?void 0:d.rechargeDiscountValue)|0)?Number(S==null?void 0:S.rechargeDiscountValue):Number(d==null?void 0:d.rechargeDiscountValue);z(oe)}}else{const p=(Y=(Q=c==null?void 0:c.rechargeConfigs)==null?void 0:Q.filter(g=>{var o;return g.rechargeDiscountMode==0&&((o=g.languages)==null?void 0:o.includes(r))}))==null?void 0:Y.reduce((g,o)=>Math.max(g,o.rechargeDiscountValue),0);z(p)}},[c,v,r,t,x]),e.jsx(Ne,{variant:h.isMobile()?"temporary":"permanent",anchor:"left",open:w.showSideMenu,onClose:L,onOpen:()=>{},classes:{paper:"side-menu-container hide-scrollbar !overscroll-none pc:w-[var(--side-menu-width)]"},children:e.jsxs("div",{className:"text-[--menu-text] p-3 pt-0 bg-[var(--menu-bg)]",onClick:J,style:{width:"var(--side-menu-width)"},children:[e.jsxs("div",{className:"flex items-center sticky top-0 z-10 bg-[var(--menu-bg)] py-3",children:[e.jsx(we,{className:"w-[150px] cursor-pointer",onClick:()=>h.navigate("/")}),e.jsx("div",{className:"grow"}),h.isPC()&&e.jsx("div",{children:t?e.jsx(fe,{}):e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>h.navigate(l.login),className:"px-3 pt-0.5 bg-[var(--header-login-btn-bg)] text-[var(--header-login-btn-text)] rounded font-semibold",children:n.login()}),e.jsx("button",{onClick:()=>h.navigate(`${l.signup}`),className:"px-3 pt-0.5 bg-[var(--header-signup-btn-bg)] text-[var(--header-signup-btn-text)] rounded ml-2 font-semibold",children:n.sign_up()})]})})]}),e.jsxs("div",{className:"flex items-start justify-between",children:[v?e.jsxs("div",{className:"flex items-center",onClick:()=>i(l.personalInfo),children:[e.jsx("div",{className:"rounded-full mr-2 overflow-hidden bg-[#c8ff00] w-10 h-10 flex items-center justify-center",children:e.jsx(k,{src:((G=ye.find(s=>s.id==(t==null?void 0:t.avatarId)))==null?void 0:G.value)??"/assets/icon/ic_x.png",alt:"",className:"max-h-10 max-w-10"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"text-lg text-[var(--menu-account-text)] font-semibold flex items-center",children:[x==null?void 0:x.account,e.jsx("span",{className:"w-3 h-3 ml-3 bg-[var(--menu-chevon-color)] rounded-[50%] flex items-center justify-center",children:e.jsx(a,{color:"var(--text-content-color)",name:"ic_chevon_right",className:"h-2 w-2"})})]}),e.jsxs("div",{className:"text-sm text-[var(--menu-text)]",children:["VIP",(t==null?void 0:t.vipLevel)??1]})]}),e.jsx("div",{className:"grow"})]}):e.jsx("div",{className:"grow"}),v&&e.jsx(a,{onClick:L,color:"var(--menu-chevon-color)",name:"ic_close",className:"w-4 h-4 pc:hidden"})]}),e.jsxs("div",{className:`rounded-lg bg-[var(--menu-wallet-bg)] text-[var(--menu-wallet-text)] p-3 flex flex-col text-sm ${v?"mt-3":"mt-0"}`,children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsxs("div",{className:v?"":"invisible",children:[n.total_assets(),":"]}),!v&&e.jsx(a,{onClick:L,color:"var(--menu-chevon-color)",name:"ic_close",className:"w-4 h-4 pc:hidden"})]}),v&&e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[Z?e.jsx("span",{className:"w-[80px] ml-5 mr-1 h-[29px]",children:e.jsx("div",{className:"loader-3-dot scale-60"})}):e.jsxs("div",{className:"text-white text-2xl font-semibold pt-1 leading-none",children:["~ ",A((se||0).toFixed(2))," ",e.jsx("span",{className:"text-sm font-light",children:(q=_e.defaultCurrency)==null?void 0:q.currency})]}),e.jsx("div",{className:"rounded-md flex items-center ml-1",onClick:ce,children:e.jsx("svg",{className:`h-5 w-5 arrow  ${Z?"rotate-animation":""}`,viewBox:"0 0 15 15",color:"var(--chip-text)","data-markup":"balance_viewer_arrow",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z",fill:"currentColor"})})})]}),e.jsxs("div",{className:"flex my-3",children:[e.jsx("button",{onClick:()=>i("/wallet?type=withdraw&method=fiat",void 0,!0),className:"w-1/2 rounded-lg bg-[var(--menu-withdraw-btn-bg)] mr-2 text-white p-1.5 text-lg",children:n.withdrawal()}),e.jsxs("button",{onClick:()=>i(l.wallet+"?type=deposit&method=fiat",void 0,!0),className:"w-1/2 rounded-lg bg-[var(--menu-deposit-btn-bg)] text-black p-1.5 text-lg relative",children:[n.deposit(),B>0?e.jsxs("span",{className:"badge-u-coin -top-[10px] right-3",children:[n.get(),B,"%"]}):null]})]}),!!y&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"capitalize",children:n.current_wallet().toLocaleLowerCase()}),e.jsxs("div",{className:"flex items-center justify-between text-sm py-1 font-light mb-2",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(k,{src:h.getCurrencyIcon(y.currency),alt:"",className:"h-6 rounded-[100%]"}),e.jsxs("div",{className:"ml-3",children:[y.currency," ",y.currencyName?`(${y.currencyName})`:null,e.jsx("p",{className:"!text-xs text-red-400 capitalize",children:y!=null&&y.status?null:` ${n.temporarily_unavailable()}`})]})]}),e.jsx("div",{className:"flex items-center",children:e.jsx("div",{className:"text-base leading-none pt-1 mr-3",children:A((I||0).toFixed(6))})})]})]}),M.length>0?e.jsx("div",{className:"capitalize mb-1",children:n.other_wallets().toLocaleLowerCase()}):null,(M==null?void 0:M.length)>0&&M.map((s,u)=>e.jsxs("div",{className:"flex items-center justify-between text-sm py-1 font-light mb-1",children:[e.jsxs("div",{className:"flex items-center mr-2",children:[e.jsx(k,{src:h.getCurrencyIcon(s.currency),alt:"",className:"h-6 rounded-[100%]"}),e.jsxs("div",{className:"ml-3 uppercase max-w-[150px]",children:[s.currency," ",s.currencyName?`(${s.currencyName})`:null,e.jsx("p",{className:"!text-xs text-red-400 capitalize",children:s!=null&&s.status?null:` ${n.temporarily_unavailable()}`})]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"text-base leading-none pt-1 mr-3",children:A(((s==null?void 0:s.money)||0).toFixed(6))}),e.jsx(Ce,{checked:s==null?void 0:s.checked,onChange:C=>re(s)})]})]},u)),e.jsxs("div",{onClick:()=>i(l.walletToken,void 0,!0),className:"border-t border-t-[#2d2d30] side-menu-separate-line flex items-center pt-3 pb-1",children:[e.jsx(a,{color:"var(--menu-text)",name:"ic_wallet",className:"w-6 h-6 mr-3"}),e.jsx("div",{className:"grow text-base leading-none font-light pt-1",children:n.wallet_management()}),e.jsx(a,{color:"var(--menu-chevon-color)",name:"ic_chevon_right",className:"h-3 w-2.5"})]})]}),e.jsxs("div",{className:"flex pt-3",style:{fontWeight:300},children:[e.jsxs("div",{onClick:()=>i(l.vip,void 0,!1),className:"rounded-xl flex-center mr-2 flex-col w-1/3 bg-[#312b29] py-3 side-menu-vip-bg",children:[e.jsx(k,{src:"/assets/icon/ic_menu_vip.png",alt:"",className:"h-6 mb-2"}),e.jsx("span",{className:"leading-none text-[#beaa7f]",children:"VIP"})]}),e.jsxs("div",{onClick:()=>i(l.agent,void 0,!1),className:"rounded-xl flex-center mr-2 flex-col w-1/3 bg-[#252938] py-3 side-menu-vip-bg",children:[e.jsx(k,{src:"/assets/icon/ic_menu_acting.png",alt:"",className:"h-6 mb-2"}),e.jsx("span",{className:"leading-none text-[#8f9ed1]",children:n.menu_agent()})]}),e.jsxs("div",{onClick:()=>i(l.eventBonus,void 0,!0),className:"rounded-xl flex-center flex-col w-1/3 bg-[#223528] py-3 side-menu-vip-bg",children:[e.jsx(k,{src:"/assets/icon/bonus-green-icon.png",alt:"",className:"h-6 mb-2"}),e.jsx("span",{className:"leading-none text-[#81c292]",children:n.your_bonus()})]})]}),e.jsxs("div",{onClick:()=>i(l.betHistory),className:"hover:cursor-pointer flex items-center py-3.5 text-sm text-[var(--menu-text)] border-solid border-b border-b-[var(--menu-divider)] mt-2",children:[e.jsx(a,{color:"var(--menu-text)",name:"ic_menu_bet",className:"w-5 h-5 mr-3"}),e.jsx("span",{className:"grow pt-1 capitalize",children:n.bet_records()}),e.jsx(a,{color:"var(--menu-chevon-color)",name:"ic_chevon_right",className:"h-3 w-2.5"})]}),e.jsxs("div",{onClick:()=>i(l.fundingHistory),className:"hover:cursor-pointer  flex items-center py-3.5 text-sm text-[var(--menu-text)] border-solid border-b border-b-[var(--menu-divider)]",children:[e.jsx(a,{color:"var(--menu-text)",name:"ic_menu_detail",className:"w-5 h-5 mr-3"}),e.jsx("span",{className:"grow",children:n.fundings()}),e.jsx(a,{color:"var(--menu-chevon-color)",name:"ic_chevon_right",className:"h-3 w-2.5"})]}),e.jsxs("div",{onClick:()=>i(l.promotions),className:"hover:cursor-pointer  flex items-center py-3.5 text-sm text-[var(--menu-text)] border-solid border-b border-b-[var(--menu-divider)]",children:[e.jsx(a,{color:"var(--menu-text)",name:"ic_bonus2",className:"w-5 h-5 mr-3"}),e.jsx("span",{className:"grow",children:n.discount()}),e.jsx(a,{color:"var(--menu-chevon-color)",name:"ic_chevon_right",className:"h-3 w-2.5"})]}),e.jsxs("div",{onClick:()=>i(l.news),className:"hover:cursor-pointer flex items-center py-3.5 text-sm text-[var(--menu-text)] border-solid border-b border-b-[var(--menu-divider)]",children:[e.jsx(a,{color:"var(--menu-text)",name:"ic_menu_noti",className:"w-5 h-5 mr-3"}),e.jsx("span",{className:"grow",children:n.notification()}),e.jsx(a,{color:"var(--menu-chevon-color)",name:"ic_chevon_right",className:"h-3 w-2.5"})]}),e.jsx("div",{className:"text-base font-semibold mt-5 uppercase",children:n.dividend()}),e.jsxs("div",{onClick:()=>i(l.cashBack),className:"hover:cursor-pointer  flex items-center py-3.5 text-sm text-[var(--menu-text)] border-solid border-b border-b-[var(--menu-divider)]",children:[e.jsx(a,{color:"var(--menu-text)",name:"ic_menu_cashback",className:"w-5 h-5 mr-3"}),e.jsx("span",{className:"grow",children:n.cash_back()}),e.jsx(a,{color:"var(--menu-chevon-color)",name:"ic_chevon_right",className:"h-3 w-2.5"})]}),e.jsx("div",{className:"text-base font-semibold mt-5 uppercase",children:n.other()}),e.jsxs("div",{className:"hover:cursor-pointer  flex items-center py-3.5 text-sm text-[var(--menu-text)] border-solid border-b border-b-[var(--menu-divider)]",onClick:()=>i(l.security),children:[e.jsx(a,{color:"var(--menu-text)",name:"ic_menu_security",className:"w-5 h-5 mr-3"}),e.jsx("span",{className:"grow",children:n.security()}),e.jsx(a,{color:"var(--menu-chevon-color)",name:"ic_chevon_right",className:"h-3 w-2.5"})]}),e.jsxs("div",{onClick:()=>i(l.help),className:"hover:cursor-pointer  flex items-center py-3.5 text-sm text-[var(--menu-text)] border-solid border-b border-b-[var(--menu-divider)]",children:[e.jsx(a,{color:"var(--menu-text)",name:"ic_menu_help",className:"w-5 h-5 mr-3"}),e.jsx("span",{className:"grow",children:n.help()}),e.jsx(a,{color:"var(--menu-chevon-color)",name:"ic_chevon_right",className:"h-3 w-2.5"})]}),e.jsxs("div",{onClick:ae,className:"hover:cursor-pointer  flex items-center py-3.5 text-sm text-[var(--menu-text)] border-solid border-b border-b-[var(--menu-divider)]",children:[e.jsx(a,{color:"var(--menu-text)",name:"ic_language",className:"w-5 h-5 mr-3"}),e.jsx("span",{children:n.region_language()}),e.jsx("span",{className:"grow"}),e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(k,{src:(R=(K=E.getInstance().getLang(r))==null?void 0:K.countriesInfo.find(s=>s.countryCode==E.getCurrentCountry()))==null?void 0:R.icon,alt:"",className:"h-6 w-6 circle border"}),e.jsx("span",{className:"text-[var(--menu-chevon-color)]",children:(X=E.getInstance().getLang(r))==null?void 0:X.nativeName}),e.jsx(a,{color:"var(--menu-chevon-color)",name:"ic_chevon_right",className:"w-3 h-3"})]})]}),e.jsxs("div",{className:"hover:cursor-pointer  flex items-center py-3.5 text-sm text-[var(--menu-text)] border-solid border-b border-b-[var(--menu-divider)]",onClick:()=>i(l.setting),children:[e.jsx(a,{color:"var(--menu-text)",name:"ic_setting",className:"w-5 h-5 mr-3"}),e.jsx("span",{className:"grow",children:n.setting()}),e.jsx(a,{color:"var(--menu-chevon-color)",name:"ic_chevon_right",className:"h-3 w-2.5"})]}),e.jsxs("div",{onClick:()=>i(l.home),className:"hover:cursor-pointer  flex items-center py-3.5 text-sm text-[var(--menu-text)] border-solid border-b border-b-[var(--menu-divider)]",children:[e.jsx(a,{color:"var(--menu-text)",name:"ic_home",className:"w-5 h-5 mr-3"}),e.jsx("span",{children:n.home_page()}),e.jsx("span",{className:"grow"}),e.jsx("span",{className:"flex items-center gap-2",children:e.jsx(a,{color:"var(--menu-chevon-color)",name:"ic_chevon_right",className:"w-3 h-3"})})]}),v&&e.jsx("button",{onClick:te,className:`p-2 w-full bg-[var(--menu-box-bg)] rounded-md mt-6 uppercase ${v?"text-white":"text-[var(--menu-chevon-color)]"}`,children:n.quit()}),e.jsx(De,{open:f,onClose:()=>_(!1)})]})})}export{Ee as SideMenu};
