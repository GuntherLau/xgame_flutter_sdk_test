import{r as n,H as L,j as e,T as a,l as T,a8 as W,a5 as fe,al as he,q as be,G as je,am as ge,an as ce,a as ve,S as Ne,R as ye,M as B,Y as we,aj as Ce,ao as _e,ai as ae,ap as Le,aq as Se,ar as Te}from"./index.sdk-0.0.1.js";import{N as Ie}from"./normal-layout.js";import{C as ke}from"./currency-selector.js";import{S as Ae}from"./tabs.js";import{C as ne}from"./popover.js";import{a as Me}from"./common.js";import{N as De}from"./no-record.js";import{B as d}from"./vip.dto.js";import{getAllGameCategories as Be}from"./home-layout.js";import{C as le}from"./modals.js";import"./main-layout.js";import"./lazy-load-component.js";import"./SwipeableDrawer.js";import"./Drawer.js";import"./Modal.js";import"./index7.js";import"./mqtt-controller.js";import"./browser.js";import"./game.dto.js";var N=(s=>(s[s.ALL=-1]="ALL",s[s.VIP=3]="VIP",s[s.BONUS=4]="BONUS",s))(N||{});const Ee=()=>{const s=/Mac|iPhone|iPod|iPad/i,x=/Safari/i,c=navigator.userAgent;return s.test(c)||x.test(c)};function Ue({item:s,handleOpenDownloadPopup:x,getEventBonusAPIList:c,handleOpenSuccessPopup:j,nameMap:u,tab:y}){var w,v;const[o,f]=n.useState(!1),[p,I]=n.useState(!!(s!=null&&s.expiredTime&&(s!=null&&s.serverTime)&&+(s==null?void 0:s.expiredTime)<=+(s==null?void 0:s.serverTime))),[h,k]=n.useState(null),[b,E]=n.useState(!1),R=253402271999e3,H=L.getIsMobileAppEnv(),F=L.getIsPWAEnv(),J=Ee(),G=s.androidDownloadUrl||s.iosDownloadUrl,A=y!=2&&!H&&!F&&G;n.useEffect(()=>{if(s!=null&&s.expiredTime&&s.status==d.UNCLAIM&&(s==null?void 0:s.expiredTime)===R)E(!0);else if(s!=null&&s.expiredTime&&s.status==d.UNCLAIM&&(s!=null&&s.expiredTime)&&(s!=null&&s.serverTime)&&+(s==null?void 0:s.expiredTime)>+(s==null?void 0:s.serverTime)){const r=P();if(k(r),I(!1),s!=null&&s.expiredTime&&h>=0&&s.status==d.UNCLAIM){const i=setInterval(()=>{k(l=>l>1e3?l-1e3:0)},1e3);return()=>clearInterval(i)}}},[]),n.useEffect(()=>{h&&h<=0&&(s!=null&&s.expiredTime)&&s.status==d.UNCLAIM&&I(!0)},[h]);const U=async()=>{A?x(async()=>{var i;const r=J?s.iosDownloadUrl:s.androidDownloadUrl;(i=window.open(r,"_blank"))==null||i.focus()},s):g()};async function g(){var r,i;try{f(!0);const l=await he(s.bonusId);(l==null?void 0:l.statusCode)===200&&((r=l==null?void 0:l.data)!=null&&r.bonusId)?(j(s),be.emit(je.onClaimBonus)):((i=l==null?void 0:l.message)==null?void 0:i.length)>0?L.showError(l==null?void 0:l.message):L.showError(a.no_data_at_the_moment()),c(),f(!1)}catch{f(!1)}}const P=()=>{const r=s.expiredTime||0,i=s.serverTime;let l=0;return r&&r>0&&i?l=r-i:l=0,l},M=r=>{const i=String(Math.floor(r%864e5/36e5)).padStart(2,"0"),l=String(Math.floor(r%(1e3*60*60)/(1e3*60))).padStart(2,"0"),$=String(Math.floor(r%(1e3*60)/1e3)).padStart(2,"0");return`${i}:${l}:${$}`};return e.jsxs("div",{className:"relative w-full mt-2 flex flex-col justify-between bg-[#242427] px-3 py-4 rounded-md bg-[var(--box-bg)] p-3",children:[A&&!p&&e.jsxs("div",{className:"absolute flex justify-center items-center top-0 right-[-1px] bg-[#fcd072] px-5",style:{borderTopRightRadius:7,clipPath:"polygon(0 0, 50% 1000%, 120% 0%, 0% 0%, 0% 0)"},children:[e.jsx("span",{className:"text-sm text-black mr-2 ml-2",children:a.only_app_member()}),e.jsx(T,{src:"/assets/icon/download-app-icon.png",alt:"",className:"w-3 h-3 "})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"text-[#a3a3a7] flex items-baseline",children:[e.jsxs("span",{className:"text-2xl font-semibold text-[#c3fb04]",children:["+",(s==null?void 0:s.amount)||0]}),e.jsx("span",{className:"ml-2 text-base font-light text-[#b1b1b4]",children:`(${(w=W.defaultCurrency)==null?void 0:w.currency})`})]}),e.jsx("div",{className:"text-sm text-[#959599] font-light uppercase mt-1",children:e.jsx("span",{className:"text-white text-base capitalize",children:((v=u[s.name])==null?void 0:v[L.currentLang()])??s.name})})]}),e.jsx(Pe,{item:s,isExpired:p,isPermanent:b,onHandleOpenNewLinkOrGetBonus:U,isLoading:o,isOnlyAppmember:A})]}),e.jsx("div",{className:"h-[1px] my-2 bg-[#343438]"}),e.jsxs("div",{className:"flex items-center justify-between text-[#b1b1b4] text-sm",children:[e.jsx("span",{className:"",children:fe(new Date(s.createTime),"YYYY/MM/DD HH:mm:ss")}),(s==null?void 0:s.expiredTime)&&!b&&!p&&s.status!==d.CLAIMED&&e.jsxs("div",{className:"flex justify-end items-center",children:[e.jsx(T,{src:"/assets/icon/oclock-icon.png",alt:"",className:"w-3 mr-1 "}),e.jsx("span",{className:"text-sm",children:a.countdown_receive()}),e.jsx("span",{className:"ml-1 text-sm",children:h!==null?M(h):"--"})]}),b&&s.status!==d.CLAIMED&&e.jsxs("div",{className:"flex justify-end items-center",children:[e.jsx(T,{src:"/assets/icon/oclock-icon.png",alt:"",className:"w-3 mr-1 "}),e.jsx("span",{className:"text-sm",children:a.permanent()})]}),(s==null?void 0:s.expiredTime)==null&&s.status!==d.CLAIMED&&e.jsx("span",{className:"text-sm",children:a.permanent()}),s.status==d.CLAIMED&&!p&&e.jsx("span",{children:a.bonus_has_been_sent()})]})]},s.bonusId)}function Pe({item:s,isExpired:x,isPermanent:c,onHandleOpenNewLinkOrGetBonus:j,isLoading:u,isOnlyAppmember:y}){return e.jsx(e.Fragment,{children:s.status==d.CLAIMED?e.jsx("div",{className:"text-end flex items-center justify-end",children:e.jsx("div",{className:"bg-[#595e49] px-3 py-1 rounded-md text-sm text-[#dfefac]",children:a.received()})}):x&&!c?e.jsx("div",{className:"text-end flex items-center justify-end",children:e.jsx("div",{className:"bg-[#595e49] px-3 py-1 rounded-md text-sm text-[#dfefac]",children:a.expired()})}):s.status==d.UNCLAIM&&!x?e.jsx("div",{className:"text-end flex items-center justify-end",onClick:j,children:u?e.jsxs("div",{className:"bg-[#ffebd3] px-3 py-1 rounded-md text-sm text-black",children:[a.loading(),"..."]}):e.jsx("div",{className:"bg-[#b3fc00] px-3 py-1 rounded-md text-sm text-black",children:y?a.download_receive():a.receive_3()})}):null})}function $e({item:s,onClaim:x}){var o,f;const[c,j]=n.useState(!1),u=async()=>{j(!0),await ge({gameType:s.gameType}),j(!1),x()},y=((o=Be({showChat:!1}).find(p=>p.type==s.gameType))==null?void 0:o.name)??s.gameTypeName;return e.jsx("div",{className:"relative w-full mt-2 flex flex-col justify-between bg-[#242427] px-3 py-4 rounded-md bg-[var(--box-bg)] p-3",children:e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"text-[#a3a3a7] flex items-baseline",children:[e.jsxs("span",{className:"text-2xl font-semibold text-[#c3fb04]",children:["+",s.bonusAmount]}),e.jsx("span",{className:"ml-2 text-base font-light text-[#b1b1b4]",children:`(${(f=W.defaultCurrency)==null?void 0:f.currency})`})]}),e.jsx("div",{className:"text-sm text-[#959599] font-light uppercase mt-1",children:e.jsx("span",{className:"text-white text-base capitalize",children:`${y} ${a.cash_back()}`})})]}),e.jsx("div",{className:"text-end flex items-center justify-end",children:e.jsx("div",{className:"text-end flex items-center justify-end",onClick:u,children:c?e.jsxs("div",{className:"bg-[#ffebd3] px-3 py-1 rounded-md text-sm text-black",children:[a.loading(),"..."]}):e.jsx("div",{className:"bg-[#b3fc00] px-3 py-1 rounded-md text-sm text-black",children:a.receive_3()})})})]})},s.gameType)}async function Oe(){try{return ce("/sys-upload/data/json/activity_record.json",{params:{_t:new Date().getTime()}})}catch{return[]}}async function Re(){try{return ce("/sys-upload/data/json/lang/common.json")}catch{return{}}}function cs(){var X,ee,se;const s=ve(),x=new Ne(s.search),[c,j]=n.useState(x.findNumber("state",0)),[u,y]=n.useState(x.findNumber("time",7)),[o,f]=n.useState(x.findNumber("type",-1)),[p,I]=n.useState(!1),[h,k]=n.useState(!1),[b,E]=n.useState([]),[R,H]=n.useState(0),[F,J]=n.useState(0),[G,A]=n.useState(!1),U=n.useRef(1),[g,P]=n.useState(),[M,w]=n.useState(),v=n.useRef(null),[r,i]=n.useState({}),[l,$]=n.useState([]),re=[a.all(),a.not_collected(),a.received(),a.expired()],Q=Me(),oe=n.useRef(null),Z=n.useMemo(()=>{const t=[{type:-1,name:a.all()},{type:N.VIP,name:a.vip()}];return c!=3&&t.push({type:N.BONUS,name:a.cash_back()}),t},[c]),ie=t=>{j(t),o==N.BONUS&&t>1&&f(N.ALL)},K=async()=>{const m=(await _e({})).data.data.filter(D=>D.bonusAmount>0);$(m)},V=async(t=!1)=>{var te;if(h)return;t?(k(!0),U.current+=1):(U.current=1,I(!0));const m=new Date;m.setHours(23,59,59,999);const D=new Date(m);D.setDate(m.getDate()-u+1),D.setHours(0,0,0,0);const C={endDate:ae(m),startDate:ae(D),bonusClassify:o!=N.ALL?o:void 0};switch(c){case 0:break;case 1:C.status=d.UNCLAIM,C.isActive=!0;break;case 2:C.status=d.CLAIMED;break;case 3:C.status=d.UNCLAIM,C.isActive=!1;break}let _;if(c==2?_=await Le(C):_=await Se(C),((te=_==null?void 0:_.data)==null?void 0:te.length)>0&&_.statusCode===200){const O=[],Y=await Oe();_.data.map(z=>{const q=Y==null?void 0:Y.find(pe=>pe.id==z.activityId);q?O.push({...z,androidDownloadUrl:q.androidDownloadUrl,iosDownloadUrl:q.iosDownloadUrl}):O.push(z)}),E(t?[...b,...O]:O)}else E([]);const S=await Te({status:2});(S==null?void 0:S.amount)>=0&&H(S==null?void 0:S.amount),k(!1),I(!1)},de=()=>{[0,1].includes(c)&&[N.ALL,N.BONUS].includes(o)?K():$([]),V()};n.useEffect(()=>{de(),L.navigate(`${ye.eventBonus}?state=${c}&time=${u}&type=${o}`,{replace:!0})},[u,o,c]);const xe=(t,m)=>{w({...m}),v.current=t},ue=t=>{P(t)},me=()=>{if(v.current){const t=v.current;t(),v.current=null,w(null)}};return n.useEffect(()=>{Re().then(t=>i(t))},[]),e.jsxs(e.Fragment,{children:[e.jsx(Ie,{title:a.event_bonus(),className:"max-w-[800px] mx-auto",onBack:()=>L.navigate(-1),enableMenu:!1,hideRightEl:!0,tabEl:e.jsxs("div",{children:[e.jsx(Ae,{onChange:ie,selected:c,tabs:re,className:"px-2 sticky top-0"}),e.jsxs("div",{className:"p-3 flex gap-3",children:[e.jsx(ne,{actionELClassName:"w-1/2",className:"anchor-arrow-top-right",actionEL:e.jsxs("button",{className:"rounded-full px-3 py-1 border border-[var(--box-separator)] w-full flex items-center justify-between",style:{backgroundImage:"var(--selector-bg)"},children:[e.jsx("span",{className:"text-[var(--text-content-color)] capitalize",children:(X=Z.find(t=>t.type==o))==null?void 0:X.name}),e.jsx(B,{color:"var(--text-content-color)",name:"ic_arrow_down",className:"w-3 h-3"})]}),children:Z.map(t=>e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 min-",onClick:()=>{f(t.type)},children:[e.jsx("span",{className:`${t.type==o?"text-[var(--active)] font-semibold":""} capitalize`,children:t.name}),t.type==o&&e.jsx(B,{color:"var(--active)",name:"ic_tick",className:"w-5 h-5"})]},t.name))}),e.jsx(ne,{actionELClassName:"w-1/2",className:"anchor-arrow-top-right",actionEL:e.jsxs("button",{className:"rounded-full px-3 py-1 border border-[var(--box-separator)] w-full flex items-center justify-between",style:{backgroundImage:"var(--selector-bg)"},children:[e.jsx("span",{className:"text-[var(--text-content-color)]",children:(ee=Q.find(t=>t.value==u))==null?void 0:ee.name}),e.jsx(B,{color:"var(--text-content-color)",name:"ic_arrow_down",className:"w-3 h-3"})]}),children:Q.map(t=>e.jsxs("div",{onClick:()=>{y(t.value)},className:"flex items-center justify-between px-4 py-2",children:[e.jsx("span",{className:`${t.value==u?"text-[var(--active)] font-semibold":""}`,children:t.name}),t.value==u&&e.jsx(B,{color:"var(--active)",name:"ic_tick",className:"w-5 h-5"})]},t.name))})]})]}),children:e.jsxs(e.Fragment,{children:[p&&e.jsx(we,{className:"grow"}),!p&&e.jsxs("div",{ref:oe,className:"flex flex-col overflow-hidden overflow-y-auto hide-scrollbar h-full grow",children:[b.length==0&&l.length==0&&e.jsx(De,{className:"grow"}),[...b,...l].length>0&&e.jsxs("div",{className:"p-3 pb-0 pt-2 mt-0 flex flex-col gap-2 mb-20",children:[[0,1].includes(c)&&l.map((t,m)=>e.jsx($e,{item:t,onClaim:K},m)),b.map((t,m)=>e.jsx(Ue,{getEventBonusAPIList:V,handleOpenSuccessPopup:ue,handleOpenDownloadPopup:xe,item:t,nameMap:r,tab:c},"bonus_item_"+m.toString())),b.length<F&&e.jsx("div",{className:"flex justify-center mt-3",children:h?e.jsx("div",{className:"loader2 self-center w-6"}):e.jsx("div",{onClick:()=>V(!0),className:"text-sm text-[#444547] text-center",children:a.show_more()})})]}),e.jsx(ke,{onChange:()=>{},onClose:()=>A(!1),open:G})]})]})}),e.jsx(le,{open:!!(g!=null&&g.bonusId),onClose:()=>P(null),showTitle:!1,title:"no",className:"!m-w-[200px] !w-[80%] bg-white text-black !top-[30%] !translate-y-0 !translate-x-[-50%] flex justify-center",children:e.jsxs(e.Fragment,{children:[e.jsx(T,{src:"/assets/icon/check-big-icon.png",alt:"",className:"w-[5.2rem] h-[5.2rem] mx-auto object-contain absolute top-[-2.5rem] left-[calc(51%-2.6rem)]"}),e.jsxs("div",{className:"relative p-5 pb-2 pt-10 flex flex-col items-center justify-center gap-1",children:[e.jsxs("span",{className:"text-3xl text-[#c3fb04] font-bold",children:["+",g==null?void 0:g.amount]}),e.jsx("p",{className:"text-white text-base text-center",children:a.successfully_received()}),e.jsx("p",{className:"text-[#8e8e8e] text-center",children:a.verify_bonus_claim()}),e.jsx("p",{className:"text-[#8e8e8e] text-center",children:a.please_go_check()})]})]})}),e.jsx(le,{open:!!(M!=null&&M.bonusId),onClose:()=>w(null),showTitle:!1,title:"no",className:"!w-[300px] bg-white text-black !top-[30%] !translate-y-0 !translate-x-[-50%] flex justify-center !pb-3",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full flex justify-end mt-3 pr-5",children:e.jsx(B,{name:"ic_close",color:"var(--text-content-color)",className:"w-4 h-4 ",onClick:()=>{w(null)}})}),e.jsx(T,{src:"/assets/icon/download-big-icon.png",alt:"",className:"w-[6.2rem] h-[6.2rem] mx-auto object-contain absolute top-[-2.5rem] left-[calc(51%-2.6rem)]"}),e.jsxs("div",{className:"relative p-5 pb-2 pt-6 flex flex-col items-center justify-center",children:[e.jsx("p",{className:"text-white text-xl text-center",children:a.the_bonus()}),e.jsx("p",{className:"text-white text-xl text-center",children:a.only_app_members()}),e.jsx("p",{className:"text-[var(--active)] text-center px-6",children:a.download_app_receive_benefi_bonus()}),e.jsx("div",{className:"flex justify-around mt-4 px-3 w-full",onClick:v?()=>me():()=>{},children:e.jsx("div",{className:"w-full rounded-lg pb-[4px] bg-[#6e9d00]",children:e.jsx("div",{className:"w-full rounded-lg bg-[var(--active)] ",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("span",{className:"py-2 text-black text-center font-bold",children:a.download_app_to_receive()})})})})})]})]})}),e.jsxs("div",{className:"fixed bottom-3 mx-auto bg-red w-[90%] flex justify-center flex-wrap items-center bg-[#3e3e44] p-3 px-5 rounded-full left-[5%]",children:[e.jsx("div",{className:"h-full flex justify-center items-center mr-2 mb-1",children:e.jsx(T,{src:"/assets/icon/money-bag-icon.png",alt:"",className:"w-4 h-5"})}),e.jsxs("span",{className:"text-sm text-[#aeaeb2] mr-2",children:[a.total_bonus_received(),":"]}),e.jsxs("div",{className:"flex items-baseline",children:[e.jsx("span",{className:"text-base font-semibold text-white mr-2",style:{lineHeight:"1.55rem"},children:p?"--":Ce(R)}),e.jsx("span",{className:"text-sm text-[#aeaeb2]",children:(se=W.defaultCurrency)==null?void 0:se.currency})]})]})]})}export{cs as EventBonusContainer};