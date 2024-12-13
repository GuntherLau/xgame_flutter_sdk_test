import{A as W,D as X,u as Y,r as o,E as D,T as t,j as e,N as Z,L as I,F as H,H as l,R as aa,v as ea,C as q,M as L,I as na,J as ta,K as G,l as ra,G as sa}from"./index-BRyeyo8a.js";import{u as ca}from"./controller-dAH6l-TT.js";import{g as ia,m as oa,d as la}from"./deposit-DeSSEGEb.js";function ha(){const{getPayAccountsOff:S,getPayAccountsOn:A}=ca(),[a,M]=W(X),r=Y(),k=new URLSearchParams(r.search),[m,v]=o.useState([]),[g,p]=o.useState(null),[_,b]=o.useState(!0),h=a.find(x=>{var f;return x.code==((f=k.get("payType"))==null?void 0:f.toString())}),u=async x=>{var f;if(k.get("payType")){b(!x);const y=((f=k.get("payType"))==null?void 0:f.toString())||"",[d,C]=await Promise.all([S(y)||[],A(y)||[]]),P=Array.isArray(d)&&d.length>0?d.map(T=>({...T,paymentMethod:"offline"})):[],E=Array.isArray(C)&&C.length>0?C.map(T=>({...T,paymentMethod:"online"})):[];v([...P,...E])}b(!1)},j=async()=>{const x=D.currentLang(),y=(await ia()).filter(d=>d.languages&&!d.languages.includes(x)||d.bankFlag==0&&d.transferEnabled!=1?!1:d.transferEnabled==1||d.onlinePayEnabled==1);M(y)};o.useEffect(()=>{u(!1),a.length==0&&j();const x=setInterval(()=>{u(!0)},5e3);return()=>clearInterval(x)},[]),o.useEffect(()=>{m.length>0&&p(m[0])},[m]);const N=D.currentLang()=="zh"?((h==null?void 0:h.name)??"")+t.deposit():((h==null?void 0:h.name)??"")+" "+t.deposit();return e.jsx(Z,{title:N,className:"max-w-[800px] mx-auto bg-[var(--page-mob-bg)]",children:_?e.jsx(I,{className:"grow"}):m.length>0&&g&&g.id?e.jsx("div",{className:"overflow-hidden overflow-y-auto hide-scrollbar h-full pb-3",children:e.jsx(da,{payList:m,firstItem:g})}):e.jsxs("div",{className:"flex w-full h-full flex-col justify-stretch items-center px-10 mt-10",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 157.2 155.2",width:160,height:160,className:"text-[var(--text-color)]",children:e.jsxs("g",{children:[e.jsx("path",{fill:"var(--active)",d:`M151.3,28.3c-2.3,0.4-3.9,1.4-4.9,2.7c-1,1.3-1.5,3-1.7,4.7c0,0-0.1,0-0.1,0C130.4,14.2,106,0,78.3,0
			c-38.7,0-71,27.7-78,64.4C0.1,64.7,0.1,65,0,65.3c0,0.2,0,0.4,0,0.5c0,3.1,2.6,5.7,5.9,5.7c2.6,0,4.9-1.7,5.6-4c0,0,0,0,0,0
			c0.1-0.4,0.2-0.9,0.2-1.3c6.2-31.1,33.6-54.6,66.5-54.6c32.8,0,60.1,23.2,66.4,54.1v0c0,0.1,0.1,0.2,0.1,0.3c0,0,0,0,0,0.1
			c0.1,0.5,0.2,1,0.3,1.4c0,0,0,0,0,0c0.8,2.3,3,3.9,5.7,3.9c3.1,0,5.6-2.2,5.9-5.1c0,0,0,0,0,0c0-0.2,0-0.4,0-0.6c0-0.1,0-0.3,0-0.4
			v0l0.5-29.8v0C156.6,27.5,151.3,28.3,151.3,28.3z`}),e.jsx("path",{fill:"var(--active)",d:`M151.3,83.7c-2.6,0-4.9,1.7-5.6,4c0,0,0,0,0,0c-0.1,0.4-0.2,0.9-0.2,1.3c-6.2,31.1-33.6,54.6-66.5,54.6
			c-32.8,0-60.1-23.2-66.4-54.1v0c0-0.1-0.1-0.2-0.1-0.3c0,0,0,0,0-0.1c-0.1-0.5-0.2-1-0.3-1.4c0,0,0,0,0,0c-0.8-2.3-3-3.9-5.7-3.9
			c-3.1,0-5.6,2.2-5.9,5.1c0,0,0,0,0,0.1l0,1L0,119.6v0c0.6,8.1,5.9,7.3,5.9,7.3c2.3-0.4,3.9-1.4,4.9-2.7c1-1.3,1.5-3,1.7-4.7
			c0,0,0.1,0,0.1,0c14.2,21.5,38.6,35.7,66.3,35.7c38.7,0,71-27.7,78-64.4c0.1-0.3,0.1-0.6,0.2-0.9c0-0.2,0-0.4,0-0.5
			C157.2,86.3,154.6,83.7,151.3,83.7z`}),e.jsx("polygon",{fill:"var(--active)",points:"52.8,45.3 42.7,38.2 36.8,44.1 42.3,54.4 47.7,56.3 62.2,70.7 68.1,64.4 54.7,50.6 	"}),e.jsx("path",{fill:"var(--active)",d:"M92.5,86.3l-8.8,9.5l18.8,21.2c2.9,3.3,7.9,3.6,11.2,0.7c3.6-3.1,3.6-8.7,0.1-11.9L92.5,86.3z"}),e.jsx("path",{fill:"var(--active)",d:`M99.7,40.3c1.2-1.2,0.8-3.3-0.8-4c-1.9-0.8-4.7-1.3-7.8,0.3c0,0-11.5,4.2-12.5,23.2L43.4,95.8c-3.9,4-5.5,9.8-3.7,15.1
			c1.2,3.5,3.8,6.6,9.2,6.6c4.3,0.1,8.4-1.8,11.3-4.9l34-34.7c0,0,26.5,1.5,26.1-19.8c0-1.6-1.9-2.6-3.2-1.6l-5.4,3.9
			c-2.8,2-6.2,3-9.6,2.5c-3.1-0.4-6.4-2-8-6.5c-1.6-4.6-0.3-9.8,3.1-13.4L99.7,40.3z M50.7,109.4c-2.1,0-3.8-1.7-3.8-3.8
			c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C54.5,107.6,52.8,109.4,50.7,109.4z`})]})}),e.jsx("div",{className:"mt-3 text-sm text-center",children:t.recharge_method_maintaince()}),e.jsx("div",{className:"mb-10 text-sm text-center",children:t.choose_another_channel()}),e.jsx(H,{title:t.customer_service_recharge(),onClick:l.clickOnlineService,className:"cursor-pointer"}),e.jsx("div",{className:"mt-3 text-xs text-center text-[#979ca5]",children:t.note_recharge_maintaince_1()}),e.jsx("div",{className:"text-xs text-[#979ca5] text-center",children:t.note_recharge_maintaince_2()})]})})}function da({payList:S,firstItem:A}){var R,O,z,$,F,V,B,J;const[a,M]=o.useState(A),[r,k]=o.useState(null),[m,v]=o.useState(!1),{userInfo:g}=aa(ea),[p,_]=o.useState(""),[b,h]=o.useState(""),[u,j]=o.useState(),N=o.useRef(null);o.useEffect(()=>()=>{_("")},[]),o.useEffect(()=>{var n;try{if(a&&(a!=null&&a.paymentTutorial)&&((n=a==null?void 0:a.paymentTutorial)==null?void 0:n.length)>0){const c=JSON.parse(a.paymentTutorial),s=D.currentLang();let i;c.map(w=>{w.code===s&&!i&&(i=w)}),j(i||null)}else j(null)}catch{j(null)}},[a]),o.useEffect(()=>{l.setRechargeAmount(p)},[p]);const x=n=>{isNaN(Number(n))||_(n)},f=n=>{_(""),M(n)},y=n=>{const c=g==null?void 0:g.fullName,s={payAccountId:a.id,amount:p,rechargePerson:c??"",remark:b,validateCaptcha:n??""},i={payAccountId:a==null?void 0:a.id,payType:a==null?void 0:a.payType,amount:p,rechargePerson:c??"",validateCaptcha:n??"",remark:b,tpPayChannelsId:(a==null?void 0:a.merchantId)??null},w=JSON.stringify(i),U=G(w);switch(a.payType){case"bank":{l.navigate(`/deposit/bank-transfer?info=${U}`);break}default:{if(a.paymentMethod=="online"){const{...Q}=s;d({payChannelId:s.payAccountId,...Q})}a.paymentMethod=="offline"&&P(s,U);break}}},d=async n=>{var c;try{const s=await oa(n);s&&(s!=null&&s.link)&&(k(s),v(!0))}catch(s){const{response:{data:{message:i}}}=s;l.showInfoToast(i)}finally{(c=N.current)==null||c.refresh()}},C=()=>{let n={pathname:`/deposit/online-pay/${r==null?void 0:r.orderNo}`};r!=null&&r.link&&(n={...n,search:`?viewType=${a.viewType}&link=${G(r==null?void 0:r.link)}`}),a.paymentMethod=="online"&&r&&(v(!1),r&&r.orderNo&&l.navigate(n),(a==null?void 0:a.viewType)==0&&r&&r.link&&(typeof r.link=="string"||r.link instanceof String)&&setTimeout(()=>{window.open(r.link,"_blank")},100))},P=async(n,c)=>{var s;try{const i=await la(n);i!=null&&i.orderNo&&l.navigate(`/deposit/crypto-wallet/${i.orderNo}?info=${c}`)}catch(i){const{response:{data:{message:w}}}=i;l.showInfoToast(w)}finally{(s=N.current)==null||s.refresh()}},E=async()=>new Promise(n=>{var c;(c=N.current)==null||c.verify(),ra.on(sa.waitFor3rdCaptcha,s=>{n(s)})}),T=async()=>{var n;if(!a.rechargeConfig){l.showInfoToast(t.payment_method_closed());return}if(a!=null&&a.limitDepositStatus&&(Number(p)>((a==null?void 0:a.limitDepositMax)??1/0)||Number(p)<((a==null?void 0:a.limitDepositMin)??1))){l.showInfoToast(t.limit_deposit_amount({_min:a==null?void 0:a.limitDepositMin,_max:a==null?void 0:a.limitDepositMax}));return}if(((n=a.rechargeConfig)==null?void 0:n.validateCodeEnabled)==1){const c=await E();if(!c)return;y(c);return}y("")},K=n=>{try{return e.jsx(e.Fragment,{children:n&&e.jsx("div",{dangerouslySetInnerHTML:{__html:n}})})}catch{return null}};return e.jsxs("div",{className:"p-3 bg-[var(--page-mob-bg)]",children:[e.jsx("div",{className:"text-label",children:t.receiving_bank_card()}),e.jsx("div",{className:"flex gap-2 overflow-x-auto hide-scrollbar",children:S.map(n=>e.jsx("div",{onClick:()=>f(n),className:`flex flex-col items-center justify-start gap-3 rounded-md py-2 px-3 pr-5  ${a.id==n.id?"border border-[var(--active)] text-[var(--active)]":"bg-[var(--box-bg)]"}`,children:e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx("span",{className:"min-w-7 h-7 bg-white circle flex items-center justify-center",children:e.jsx(q,{src:l.getRemoteImgPath(n.payTypeEntity.icon),alt:"",className:"h-5 w-5"})}),e.jsx("span",{className:"text-nowrap whitespace-nowrap",children:n.name})]})},n.name))}),e.jsxs("div",{className:"rounded-md p-3 bg-[var(--box-bg)] mt-3",children:[e.jsx("div",{className:"text-label",children:t.receiving_bank_card_number()}),e.jsxs("div",{className:"rounded-md px-2 py-1 text-md flex items-center justify-end bg-[var(--input-color)] border border-[var(--input-border)] mt-1",children:[e.jsx("span",{className:"grow text-ellipsis text-xl",children:a==null?void 0:a.account}),e.jsx("button",{className:"w-7 h-7 bg-[var(--box-bg)] flex items-center justify-center rounded-full ml-4 self-center cursor-pointer",onClick:()=>l.copy((a==null?void 0:a.account)||""),children:e.jsx(L,{color:"var(--text-color)",name:"ic_copy",className:"w-3.5 h-3.5 inline cursor-pointer"})})]}),e.jsx("div",{className:"text-label mt-3",children:t.cardholder_name()}),e.jsxs("div",{className:"rounded-md px-2 py-1 text-md flex items-center justify-end bg-[var(--input-color)] border border-[var(--input-border)] mt-1",children:[e.jsx("span",{className:"grow text-ellipsis text-lg",children:a==null?void 0:a.owner}),e.jsx("button",{className:"w-7 h-7 bg-[var(--box-bg)] flex items-center justify-center rounded-full ml-4 self-center cursor-pointer",onClick:()=>l.copy((a==null?void 0:a.owner)||""),children:e.jsx(L,{onClick:()=>l.copy((a==null?void 0:a.owner)||""),color:"var(--text-color)",name:"ic_copy",className:"w-3.5 h-3.5 inline cursor-pointer"})})]}),(a==null?void 0:a.bankName)&&e.jsx("div",{className:"text-label mt-3",children:t.bank_name()}),(a==null?void 0:a.bankName)&&e.jsx("div",{className:"rounded-md px-2 py-1 text-md flex items-center justify-end bg-[var(--input-color)] border border-[var(--input-border)] mt-1",children:e.jsx("span",{className:"grow text-ellipsis text-lg",children:a==null?void 0:a.bankName})})]}),e.jsxs("div",{className:"text-label mt-5 mb-2 flex justify-between",children:[e.jsx("span",{children:t.recharge_amount()}),((R=a==null?void 0:a.rechargeConfig)==null?void 0:R.rechargeDiscountValue)&&e.jsxs("span",{className:"text-[#ffb400] capitalize",children:[t.bonus()," ",(O=a==null?void 0:a.rechargeConfig)==null?void 0:O.rechargeDiscountValue," ",((z=a==null?void 0:a.rechargeConfig)==null?void 0:z.rechargeDiscountMode)==0?"%":"$"]})]}),e.jsxs("div",{className:"flex items-center input-all input-all__border !text-[var(--active)] text-2xl font-bold h-[42px] rounded-md ",children:[e.jsx("div",{className:"min-w-fit px-2 text-center border-r border-r-[#333239]",children:($=a.payTypeEntity)==null?void 0:$.currency}),e.jsx("input",{type:"text",value:p,onChange:n=>x(n.target.value),placeholder:t.enter_select_amount(),className:"grow px-3 py-1 input-all h-full !text-[var(--active)]"}),e.jsx(L,{onClick:()=>x(""),color:"var(--text-color)",name:"ic_round_close",className:"w-4 h-4 mr-2"})]}),e.jsx("div",{className:"py-3 grid grid-cols-4 gap-2",children:(a==null?void 0:a.boardAmountItems)&&((F=a==null?void 0:a.boardAmountItems)==null?void 0:F.split(",").map((n,c)=>e.jsx("div",{onClick:()=>x(n),className:`cursor-pointer rounded-lg text-center p-2 font-semibold ${Number(p)==n?"bg-[#b0f700] text-[black]":"bg-[var(--box-bg)] text-[#cdcdd2s]"}`,children:n},n)))}),(a==null?void 0:a.orderRemarkStatus)==0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-label mt-3",children:t.remarks()}),e.jsx("input",{type:"text",value:b,onChange:n=>h(n.target.value),placeholder:a==null?void 0:a.orderRemark,className:"w-full rounded-md px-3 py-1 input-all input-all__border h-[42px]"})]}),e.jsx("div",{className:"mt-2 px-5",children:e.jsx(H,{title:t.deposit(),onClick:T,className:"uppercase",useDisableStyle:p.length==0})}),e.jsx("div",{className:"mt-5 text-xs text-[var(--text-content-color)]",children:e.jsx("div",{className:"overflow-hidden overflow-y-auto hide-scrollbar h-full",children:u!=null&&u.value?K(u==null?void 0:u.value):null})}),e.jsx(na,{open:m,onClose:()=>v(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",className:"flex items-center justify-center",children:e.jsxs("div",{className:"mob:rounded-xl pc:rounded-xl bg-[#2f2f31] text-white w-[300px] p-3 outline-none border-none",children:[e.jsxs("div",{className:"w-full flex justify-center items-end h-10",children:[e.jsx(q,{src:l.getRemoteImgPath((V=a==null?void 0:a.payTypeEntity)==null?void 0:V.icon),alt:"",className:"w-auto h-8 mr-1"}),e.jsx("div",{className:"text-lg font-bold pl-1",children:(B=a==null?void 0:a.payTypeEntity)==null?void 0:B.name})]}),e.jsx("div",{className:"mt-3 text-base text-center",children:t.question_pay()}),e.jsxs("div",{className:"flex justify-around mt-3",children:[e.jsx("button",{className:"rounded-md p-2 px-10 text-white border border-[var(--active)] text-center cursor-pointer",onClick:()=>{v(!1)},children:t.cancel()}),e.jsx("button",{onClick:()=>C(),className:"rounded-md p-2 px-10  text-black bg-[var(--active)] capitalize font-bold text-center cursor-pointer",rel:"noreferrer",children:t.confirm()})]})]})}),((J=a.rechargeConfig)==null?void 0:J.validateCodeEnabled)==1&&e.jsx(ta,{ref:N})]})}export{ha as BankDepositView};
