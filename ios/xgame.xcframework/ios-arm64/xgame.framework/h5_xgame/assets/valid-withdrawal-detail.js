import{a as j,i as v,a2 as N,j as e,T as a,af as p,a8 as r,H as h,R as w}from"./index.sdk-0.0.1.js";import{N as b}from"./normal-layout.js";import"./main-layout.js";import"./popover.js";import"./Modal.js";import"./lazy-load-component.js";function Y(){var n,o,t,d,x,m,i;const c=j(),{appSetting:l}=v(),u=new URLSearchParams(c.search),s=JSON.parse(N(u.get("info")??"")),f=()=>{c.key&&window.history.length>2?h.navigate(-1):h.navigate(w.wallet)};return e.jsx(b,{title:a.bet_volume_review(),className:"bg-[url('/assets/img/vip_bg.png')] bg-no-repeat bg-contain",hideRightEl:!0,onBack:()=>f(),children:e.jsx("div",{className:"m-3 overflow-hidden overflow-y-auto hide-scrollbar h-full pb-3",children:e.jsx("div",{className:"p-3 mb-3 relative rounded-md bg-[var(--box-bg)]",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex flex-col pb-3 border-b border-b-[var(--bottomsheet-separator)]",children:[e.jsx("div",{className:"text-lg font-bold",children:a.time_range()}),e.jsx("div",{className:"mt-1.5",children:e.jsxs("div",{className:"text-[var(--text-content-color)]",children:[p(s==null?void 0:s.beginTime).format("YYYY-MM-DD HH:mm:ss")," ~",p(s==null?void 0:s.endTime).format("YYYY-MM-DD HH:mm:ss")," "]})}),e.jsxs("div",{className:"mt-1.5",children:[e.jsxs("div",{className:"flex grow",children:[e.jsxs("span",{className:"mr-2",children:[a.deposit_amount(),":"]}),e.jsxs("span",{children:[s==null?void 0:s.rechMoney," ",e.jsx("span",{className:"text-xs",children:(n=r.defaultCurrency)==null?void 0:n.currency})]})]}),e.jsxs("div",{className:"flex grow",children:[e.jsxs("span",{className:"mr-2",children:[a.deposit_discount(),":"]}),e.jsxs("span",{children:[s==null?void 0:s.discountMoney," ",e.jsx("span",{className:"text-xs",children:(o=r.defaultCurrency)==null?void 0:o.currency})]})]})]})]}),e.jsxs("div",{className:"flex flex-col py-3 border-b border-b-[var(--bottomsheet-separator)]",children:[e.jsxs("span",{className:"font-medium",children:[a.transaction_needs_completed(),e.jsxs("b",{className:"text-[var(--short)]",children:[" ",(s==null?void 0:s.civilMoneyFlag)==2?s==null?void 0:s.mormDml:(s==null?void 0:s.mormDml)+(s==null?void 0:s.discountDml)," "]}),e.jsx("span",{className:"text-xs",children:((t=r.defaultCurrency)==null?void 0:t.currency)+" "}),a.coded_amount(),", ",a.completed_2(),e.jsxs("b",{className:"text-[var(--short)]",children:[" ",(s==null?void 0:s.cpDml)+(s==null?void 0:s.sportsDml)+(s==null?void 0:s.videoDml)," "]}),e.jsx("span",{className:"text-xs",children:((d=r.defaultCurrency)==null?void 0:d.currency)+" "}),a.completed_2(),", ",a.to_be_completed(),e.jsxs("b",{className:"text-[var(--short)]",children:[" ",(s==null?void 0:s.civilMoneyFlag)==2?(s==null?void 0:s.mormDml)-((s==null?void 0:s.cpDml)+(s==null?void 0:s.sportsDml)+(s==null?void 0:s.videoDml)+(s==null?void 0:s.relaxQuota)):(s==null?void 0:s.mormDml)+(s==null?void 0:s.discountDml)-((s==null?void 0:s.cpDml)+(s==null?void 0:s.sportsDml)+(s==null?void 0:s.videoDml))]}),e.jsx("span",{className:"text-xs",children:(x=r.defaultCurrency)==null?void 0:x.currency}),"."]}),e.jsx("span",{className:"text-[var(--short)] mt-1.5 text-center text-sm pc:text-base",children:a.valid_note()})]}),e.jsxs("div",{className:"flex flex-col py-3 border-b border-b-[var(--bottomsheet-separator)]",children:[e.jsx("p",{className:"font-semibold",children:a.discount_flow_review()}),e.jsxs("div",{className:"flex flex-row flex-wrap mt-0.5  text-sm",children:[e.jsxs("span",{className:`flex grow  ${l.showChat?"w-[70%] pcM_min:w-1/2":"w-[70%] sm_min:w-1/2"}`,children:[e.jsxs("span",{className:"mr-2",children:[a.discount_flow_review(),": "]}),e.jsxs("span",{children:[s==null?void 0:s.discountDml," ",e.jsx("span",{className:"text-xs",children:(m=r.defaultCurrency)==null?void 0:m.currency})]})]}),e.jsxs("span",{className:`flex grow ${l.showChat?"w-[30%] pcM_min:w-1/2":"w-[30%] sm_min:w-1/2"}`,children:[e.jsxs("span",{className:"mr-2",children:[a.state(),": "]}),e.jsx("span",{className:`${s.discountAdopt>0?"text-[var(--active)]":"text-[var(--short)]"}`,children:s.discountAdopt>0?a.pass():a.fail()})]})]})]}),e.jsxs("div",{className:"flex flex-col py-3 border-b border-b-[var(--bottomsheet-separator)]",children:[e.jsx("p",{className:"font-semibold",children:a.recharge_flow_review()}),e.jsxs("div",{className:"flex flex-row flex-wrap mt-0.5 text-sm",children:[e.jsxs("span",{className:`flex grow ${l.showChat?"w-[70%] pcM_min:w-1/2":"w-[70%] sm_min:w-1/2"}`,children:[e.jsxs("span",{className:"mr-2",children:[a.deposit_code_amount(),": "]}),e.jsxs("span",{children:[s==null?void 0:s.mormDml," ",e.jsx("span",{className:"text-xs",children:(i=r.defaultCurrency)==null?void 0:i.currency})]})]}),e.jsxs("span",{className:`flex grow ${l.showChat?"w-[30%] pcM_min:w-1/2":"w-[30%] sm_min:w-1/2"}`,children:[e.jsxs("span",{className:"mr-2",children:[a.state(),": "]}),e.jsx("span",{className:`${s.mormAdopt>0?"text-[var(--active)]":"text-[var(--short)]"}`,children:s.mormAdopt>0?a.pass():a.fail()})]})]})]})]})})})})}export{Y as ValidWithdrawDetailViews};