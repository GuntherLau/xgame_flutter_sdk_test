import{r as o,b2 as T,H as C,ae as F,ak as V,j as e,N as Z,T as i,b3 as q,f as J,C as O,d as P,Z as A,F as W,M as h,L as $,p as z,am as G,l as K,G as Q}from"./index-BRyeyo8a.js";import{g as X,c as Y}from"./cash-back-BYrP5q_k.js";function ne(){var y;const[a,p]=o.useState(!1),[r,S]=o.useState([]),[m,L]=o.useState(0),[I,v]=o.useState(!0),[M,j]=o.useState(!1),[g,D]=o.useState([]),x=T();C.getIsPWAEnv();const E=F(),N=o.useMemo(()=>{const n=r.map(l=>l.activityId).filter(l=>l!=null&&l!=null);let t="",d="";for(const l of g){if(t&&d)break;n.includes(l.id)&&(t=l.androidDownloadUrl,d=l.iosDownloadUrl)}return{androidUrl:t,iosUrl:d}},[g,r]),U=()=>{var t;const n=E?N.iosUrl:N.androidUrl;(t=window.open(n,"_blank"))==null||t.focus(),j(!1)};o.useEffect(()=>{w(),V().then(n=>D(n))},[]);const w=async()=>{var n,t,d,l,_,k,B;v(!0);try{const s=await X({rows:1,page:1});let f=0;if(s&&(s!=null&&s.success)&&((t=(n=s==null?void 0:s.data)==null?void 0:n.data)==null?void 0:t.length)>=0){let b=[];(x==null?void 0:x.length)>0?(d=s==null?void 0:s.data)==null||d.data.map(u=>{const c=x.find(H=>H.type==u.gameType);c&&b.push({...u,icon:c==null?void 0:c.icon,name:c==null?void 0:c.name})}):b=(l=s==null?void 0:s.data)==null?void 0:l.data,S(b),((k=(_=s==null?void 0:s.data)==null?void 0:_.data)==null?void 0:k.length)===0?f=0:(B=s==null?void 0:s.data)==null||B.data.map(u=>{f+=u.bonusAmount||0})}L(f)}catch{C.showError("error")}finally{v(!1)}},R=async()=>{(await Y({})).success&&(w(),K.emit(Q.onClaimBonus))};return e.jsx(Z,{title:i.my_betting_bonus(),className:"max-w-[800px] mx-auto ",rightEl:e.jsx(q,{className:"text-xs",to:`${J.eventBonus}?state=2&time=7&type=4`,children:i.collection_record_2()}),children:e.jsxs("div",{className:" p-3  overflow-hidden overflow-y-auto hide-scrollbar h-full pb-3",children:[e.jsxs("div",{className:"bg-[var(--box-bg)] rounded-md p-3 pb-5 flex flex-col items-center justify-center",children:[e.jsx(O,{src:"/assets/img/casino_chip.png",className:"w-[90px] mt-7"}),e.jsx("div",{className:"text-3xl font-semibold mt-3",children:m&&m>=0?P(m.toFixed(4)):"--"}),e.jsx("div",{className:"text-[#8f8f90] text-sm",children:(y=A.defaultCurrency)==null?void 0:y.currency}),e.jsx("div",{className:"text-[#a3a3a3] mt-3",children:i.rebate_amount()}),e.jsx(W,{disable:!(m>0),onClick:()=>R(),title:i.click_to_collect(),className:"uppercase mt-5 mb-2"}),e.jsxs("div",{className:"flex items-center text-[#606062] text-xs pt-5 gap-2",onClick:()=>p(!0),children:[i.cash_back_instruction(),e.jsx("span",{className:" rounded-[50%] bg-[#3d3d44]",children:e.jsx(h,{color:"#7c7d7e",name:"ic_question",className:"w-4 h-4"})})]})]}),e.jsxs("div",{className:"py-3",children:[e.jsx("div",{className:"h-[30px] flex justify-between items-center",children:e.jsxs("div",{className:"flex h-full",children:[e.jsx("span",{className:"pl-4 pr-3 h-full flex items-end font-semibold text-[var(--vip-tab-text)] bg-[var(--vip-tab-bg)] rounded-tl-2xl",children:i.betting_bonus()}),e.jsx(h,{color:"var(--vip-tab-bg)",name:"ic_tab",className:"w-[28px] h-[30px] ml-[-1px]"})]})}),I?e.jsx($,{className:"grow h-full mt-[10vh]"}):e.jsx("div",{className:"flex flex-col py-3 pt-6 gap-2 mt-[-1px] ",style:{background:"linear-gradient(to bottom, var(--vip-tab-bg), transparent 15%)"},children:r.map((n,t)=>e.jsx("div",{children:e.jsx(ee,{data:n,keyIndex:t})},t))})]}),e.jsx(z,{open:a,onClose:()=>p(!1),title:i.cash_back_instruction(),className:"!m-w-[200px] !w-[80%] text-black !top-[30%] !translate-y-0 !translate-x-[-50%] flex flex-col justify-center",children:e.jsx("div",{className:"relative px-5 pb-0 pt-3 flex flex-col items-center justify-center gap-1",children:i.cash_back_info_content()})}),e.jsx(G,{open:M,onClose:()=>j(!1),onDownload:U})]})})}function ee({data:a,keyIndex:p}){var r;return e.jsxs("div",{className:"rounded bg-[var(--box-bg)] px-4 py-4 flex items-center justify-between",children:[e.jsxs("div",{className:"flex justify-start items-center align-baseline",children:[e.jsx("div",{className:"w-10 h-10 mr-4",children:e.jsx("div",{className:"h-full flex items-center justify-center",children:e.jsx(h,{name:(a==null?void 0:a.icon)||"ic_tab",color:"var(--active)",className:"h-[70%] w-[28px]"})})}),e.jsx("span",{className:"font-bold",children:a==null?void 0:a.name})]}),e.jsxs("div",{children:[e.jsx("span",{className:"mr-1 text-lg ",children:(a==null?void 0:a.bonusAmount)||0}),e.jsx("span",{className:"text-xs",children:(r=A.defaultCurrency)==null?void 0:r.currency})]})]})}export{ne as CashBackView};
