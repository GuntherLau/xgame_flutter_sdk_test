import{i as K,a as Q,r as c,j as e,T as t,Y as W,l as M,b as X,h as Z,H as l,M as P,$ as U,q as I,G as aa}from"./index.sdk-0.0.1.js";import{N as ea}from"./normal-layout.js";import{A as B}from"./button.js";import{u as na}from"./controller.js";import{m as ra,d as ta}from"./deposit.js";import{T as sa}from"./captcha2.js";import{M as oa}from"./Modal.js";import"./main-layout.js";import"./popover.js";import"./lazy-load-component.js";function ya(){const{getPayAccountsOff:k,getPayAccountsOn:_}=na(),{companyConf:a}=K(),C=Q(),r=new URLSearchParams(C.search),[x,T]=c.useState([]),[u,v]=c.useState(null),[p,g]=c.useState(!0),y=async d=>{var m;if(r.get("payType")){g(!d);const h=((m=r.get("payType"))==null?void 0:m.toString())||"",[f,j]=await Promise.all([k(h)||[],_(h)||[]]),w=Array.isArray(f)&&f.length>0?f.map(N=>({...N,paymentMethod:"offline"})):[],A=Array.isArray(j)&&j.length>0?j.map(N=>({...N,paymentMethod:"online"})):[];T([...w,...A])}g(!1)};c.useEffect(()=>{y(!1);const d=setInterval(()=>{y(!0)},5e3);return()=>clearInterval(d)},[]),c.useEffect(()=>{x.length>0&&v(x[0])},[x]);const S=()=>{var d;(d=window.open(a.olUrl,"_blank"))==null||d.focus()};return e.jsx(ea,{title:t.bank_card_deposit(),className:"max-w-[800px] mx-auto bg-[var(--page-mob-bg)]",children:p?e.jsx(W,{className:"grow"}):x.length>0&&u&&u.id?e.jsx("div",{className:"overflow-hidden overflow-y-auto hide-scrollbar h-full pb-3",children:e.jsx(ia,{payList:x,firstItem:u})}):e.jsxs("div",{className:"flex w-full h-full flex-col justify-stretch items-center px-10 mt-10",children:[e.jsx(M,{src:"/assets/icon/ic-maintenance.svg",alt:"",className:"w-40 mr-1 aspect-square"}),e.jsx("div",{className:"mt-3 text-sm text-center",children:t.recharge_method_maintaince()}),e.jsx("div",{className:"mb-10 text-sm text-center",children:t.choose_another_channel()}),e.jsx(B,{title:t.customer_service_recharge(),onClick:S,className:"cursor-pointer"}),e.jsx("div",{className:"mt-3 text-xs text-center text-[#979ca5]",children:t.note_recharge_maintaince_1()}),e.jsx("div",{className:"text-xs text-[#979ca5] text-center",children:t.note_recharge_maintaince_2()})]})})}function ia({payList:k,firstItem:_}){var D,E,R,O,L,$,V,q;const[a,C]=c.useState(_),[r,x]=c.useState(null),[T,u]=c.useState(!1),{userInfo:v}=X(Z),[p,g]=c.useState(""),[y,S]=c.useState(""),[d,m]=c.useState(),h=c.useRef(null);c.useEffect(()=>()=>{g("")},[]),c.useEffect(()=>{var n;try{if(a&&(a!=null&&a.paymentTutorial)&&((n=a==null?void 0:a.paymentTutorial)==null?void 0:n.length)>0){const o=JSON.parse(a.paymentTutorial),s=l.currentLang();let i;o.map(b=>{b.code===s&&!i&&(i=b)}),m(i||null)}else m(null)}catch{m(null)}},[a]),c.useEffect(()=>{l.setRechargeAmount(p)},[p]);const f=n=>{isNaN(Number(n))||g(n)},j=n=>{g(""),C(n)},w=n=>{const o=v==null?void 0:v.fullName,s={payAccountId:a.id,amount:p,rechargePerson:o??"",remark:y,validateCaptcha:n??""},i={payAccountId:a==null?void 0:a.id,payType:a==null?void 0:a.payType,amount:p,rechargePerson:o??"",validateCaptcha:n??"",remark:y,tpPayChannelsId:(a==null?void 0:a.merchantId)??null},b=JSON.stringify(i),F=U(b);switch(console.log({selectedItem:a}),a.payType){case"bank":{l.navigate(`/deposit/bank-transfer?info=${F}`);break}default:{if(a.paymentMethod=="online"){const{...Y}=s;A({payChannelId:s.payAccountId,...Y})}a.paymentMethod=="offline"&&z(s,F);break}}},A=async n=>{var o;try{const s=await ra(n);s&&(s!=null&&s.link)&&(x(s),u(!0))}catch(s){(o=h.current)==null||o.refresh();const{response:{data:{message:i}}}=s;l.showInfoToast(i)}finally{}},N=()=>{let n={pathname:`/deposit/online-pay/${r==null?void 0:r.orderNo}`};r!=null&&r.link&&(n={...n,search:`?viewType=${a.viewType}&link=${U(r==null?void 0:r.link)}`}),a.paymentMethod=="online"&&r&&(u(!1),r&&r.orderNo&&l.navigate(n),(a==null?void 0:a.viewType)==0&&r&&r.link&&(typeof r.link=="string"||r.link instanceof String)&&setTimeout(()=>{window.open(r.link,"_blank")},100))},z=async(n,o)=>{var s;try{const i=await ta(n);i!=null&&i.orderNo&&l.navigate(`/deposit/crypto-wallet/${i.orderNo}?info=${o}`)}catch(i){(s=h.current)==null||s.refresh();const{response:{data:{message:b}}}=i;l.showInfoToast(b)}finally{}},G=async()=>new Promise(n=>{var o;(o=h.current)==null||o.verify(),I.on(aa.waitFor3rdCaptcha,s=>{n(s)})}),H=async()=>{var n;if(!a.rechargeConfig){l.showInfoToast(t.payment_method_closed());return}if(a!=null&&a.limitDepositStatus&&(Number(p)>((a==null?void 0:a.limitDepositMax)??1/0)||Number(p)<((a==null?void 0:a.limitDepositMin)??1))){l.showInfoToast(t.limit_deposit_amount({_min:a==null?void 0:a.limitDepositMin,_max:a==null?void 0:a.limitDepositMax}));return}if(((n=a.rechargeConfig)==null?void 0:n.validateCodeEnabled)==1){const o=await G();if(!o)return;w(o);return}w("")},J=n=>{try{return e.jsx(e.Fragment,{children:n&&e.jsx("div",{dangerouslySetInnerHTML:{__html:n}})})}catch{return null}};return e.jsxs("div",{className:"p-3 bg-[var(--page-mob-bg)]",children:[e.jsx("div",{className:"text-label",children:t.receiving_bank_card()}),e.jsx("div",{className:"flex gap-2 overflow-x-auto hide-scrollbar",children:k.map(n=>e.jsx("div",{onClick:()=>j(n),className:`flex flex-col items-center justify-start gap-3 rounded-md py-2 px-3 pr-5  ${a.id==n.id?"border border-[var(--active)] text-[var(--active)]":"bg-[var(--box-bg)]"}`,children:e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx("span",{className:"min-w-7 h-7 bg-white circle flex items-center justify-center",children:e.jsx(M,{src:l.getRemoteImgPath(n.payTypeEntity.icon),alt:"",className:"h-5 w-5"})}),e.jsx("span",{className:"text-nowrap whitespace-nowrap",children:n.name})]})},n.name))}),e.jsxs("div",{className:"rounded-md p-3 bg-[var(--box-bg)] mt-3",children:[e.jsx("div",{className:"text-label",children:t.receiving_bank_card_number()}),e.jsxs("div",{className:"rounded-md px-2 py-1 text-md flex items-center justify-end bg-[var(--input-color)] border border-[var(--input-border)] mt-1",children:[e.jsx("span",{className:"grow text-ellipsis text-xl",children:a==null?void 0:a.account}),e.jsx("button",{className:"w-7 h-7 bg-[var(--box-bg)] flex items-center justify-center rounded-full ml-4 self-center cursor-pointer",onClick:()=>l.copy((a==null?void 0:a.account)||""),children:e.jsx(P,{color:"var(--text-color)",name:"ic_copy",className:"w-3.5 h-3.5 inline cursor-pointer"})})]}),e.jsx("div",{className:"text-label mt-3",children:t.cardholder_name()}),e.jsxs("div",{className:"rounded-md px-2 py-1 text-md flex items-center justify-end bg-[var(--input-color)] border border-[var(--input-border)] mt-1",children:[e.jsx("span",{className:"grow text-ellipsis text-lg",children:a==null?void 0:a.owner}),e.jsx("button",{className:"w-7 h-7 bg-[var(--box-bg)] flex items-center justify-center rounded-full ml-4 self-center cursor-pointer",onClick:()=>l.copy((a==null?void 0:a.owner)||""),children:e.jsx(P,{onClick:()=>l.copy((a==null?void 0:a.owner)||""),color:"var(--text-color)",name:"ic_copy",className:"w-3.5 h-3.5 inline cursor-pointer"})})]}),(a==null?void 0:a.bankName)&&e.jsx("div",{className:"text-label mt-3",children:t.bank_name()}),(a==null?void 0:a.bankName)&&e.jsx("div",{className:"rounded-md px-2 py-1 text-md flex items-center justify-end bg-[var(--input-color)] border border-[var(--input-border)] mt-1",children:e.jsx("span",{className:"grow text-ellipsis text-lg",children:a==null?void 0:a.bankName})})]}),e.jsxs("div",{className:"text-label mt-5 mb-2 flex justify-between",children:[e.jsx("span",{children:t.recharge_amount()}),((D=a==null?void 0:a.rechargeConfig)==null?void 0:D.rechargeDiscountValue)&&e.jsxs("span",{className:"text-[#ffb400] capitalize",children:[t.bonus()," ",(E=a==null?void 0:a.rechargeConfig)==null?void 0:E.rechargeDiscountValue," ",((R=a==null?void 0:a.rechargeConfig)==null?void 0:R.rechargeDiscountMode)==0?"%":"$"]})]}),e.jsxs("div",{className:"flex items-center input-all input-all__border !text-[var(--active)] text-2xl font-bold h-[42px] rounded-md ",children:[e.jsx("div",{className:"min-w-fit px-2 text-center border-r border-r-[#333239]",children:(O=a.payTypeEntity)==null?void 0:O.currency}),e.jsx("input",{type:"text",value:p,onChange:n=>f(n.target.value),placeholder:t.enter_select_amount(),className:"grow px-3 py-1 input-all h-full !text-[var(--active)]"}),e.jsx(P,{onClick:()=>f(""),color:"var(--text-color)",name:"ic_round_close",className:"w-4 h-4 mr-2"})]}),e.jsx("div",{className:"py-3 grid grid-cols-4 gap-2",children:(a==null?void 0:a.boardAmountItems)&&((L=a==null?void 0:a.boardAmountItems)==null?void 0:L.split(",").map((n,o)=>e.jsx("div",{onClick:()=>f(n),className:`cursor-pointer rounded-lg text-center p-2 font-semibold ${Number(p)==n?"bg-[#b0f700] text-[black]":"bg-[var(--box-bg)] text-[#cdcdd2s]"}`,children:n},n)))}),(a==null?void 0:a.orderRemarkStatus)==0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-label mt-3",children:t.remarks()}),e.jsx("input",{type:"text",value:y,onChange:n=>S(n.target.value),placeholder:a==null?void 0:a.orderRemark,className:"w-full rounded-md px-3 py-1 input-all input-all__border h-[42px]"})]}),e.jsx("div",{className:"mt-2 px-5",children:e.jsx(B,{title:t.deposit(),onClick:H,className:"uppercase",useDisableStyle:p.length==0})}),e.jsx("div",{className:"mt-5 text-xs text-[var(--text-content-color)]",children:e.jsx("div",{className:"overflow-hidden overflow-y-auto hide-scrollbar h-full",children:d!=null&&d.value?J(d==null?void 0:d.value):null})}),e.jsx(oa,{open:T,onClose:()=>u(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",className:"flex items-center justify-center",children:e.jsxs("div",{className:"mob:rounded-xl pc:rounded-xl bg-[#2f2f31] text-white w-[300px] p-3 outline-none border-none",children:[e.jsxs("div",{className:"w-full flex justify-center items-end h-10",children:[e.jsx(M,{src:l.getRemoteImgPath(($=a==null?void 0:a.payTypeEntity)==null?void 0:$.icon),alt:"",className:"w-auto h-8 mr-1"}),e.jsx("div",{className:"text-lg font-bold pl-1",children:(V=a==null?void 0:a.payTypeEntity)==null?void 0:V.name})]}),e.jsx("div",{className:"mt-3 text-base text-center",children:t.question_pay()}),e.jsxs("div",{className:"flex justify-around mt-3",children:[e.jsx("button",{className:"rounded-md p-2 px-10 text-white border border-[var(--active)] text-center cursor-pointer",onClick:()=>{u(!1)},children:t.cancel()}),e.jsx("button",{onClick:()=>N(),className:"rounded-md p-2 px-10  text-black bg-[var(--active)] capitalize font-bold text-center cursor-pointer",rel:"noreferrer",children:t.confirm()})]})]})}),((q=a.rechargeConfig)==null?void 0:q.validateCodeEnabled)==1&&e.jsx(sa,{ref:h})]})}export{ya as BankDepositView};
