import{r as o,j as e,p as y,T as t,C as w,H as d,g as k,aq as C,l as B,G as L,X as K,u as Y,m as q,t as z,v as F,A as S,as as G,at as H,S as Q,a0 as r,R,ar as V,ap as X,Z,aw as J,au as ee,f as se,N as te,al as ae,h as le,F as D,x as ne}from"./index-BRyeyo8a.js";import{c as re,a as de,A as ie,b as xe}from"./add-e-wallet-modal-B04U7uEM.js";import"./ClickAwayListener-2fbp9eZL.js";import"./GlobalStyles-Dtc_kgga.js";function ce({onClose:h,open:f,account:s,onUpdate:_}){const[n,m]=o.useState(s.defaultBank==1),[b,l]=o.useState(!1),c=()=>{h()},i=async()=>{l(!0),await C(s.id),B.emit(L.refreshUserInfo),d.showToast(t.operation_successful()),l(!1),c()};return e.jsx(y,{onClose:c,open:f,title:t.add_bank_card(),className:"max-w-[90vw] rounded-xl bg-[#37383c]",children:e.jsxs("div",{className:"p-3 pb-0",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[var(--text-label)]",children:t.cardholder_name2()}),e.jsx("input",{className:"w-full input-all input-all__border px-3 h-[42px] flex items-center !text-[var(--text-content-color)]",value:s.fullName,disabled:!0})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("div",{className:"text-[var(--text-label)]",children:t.select_bank()}),e.jsxs("div",{className:"input-all input-all__border h-[42px] px-3 flex items-center gap-3",children:[e.jsx(w,{className:"h-[24px] w-[24px] circle",src:d.getRemoteImgPath(s==null?void 0:s.iconUrl)}),e.jsx("input",{className:"grow bg-transparent !text-[var(--text-content-color)]",value:s.bankName,disabled:!0})]})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("div",{className:"text-[var(--text-label)]",children:t.bank_card_number()}),e.jsx("div",{className:"input-all input-all__border h-[42px] px-3 flex items-center gap-3",children:e.jsx("input",{className:"grow bg-transparent !text-[var(--text-content-color)]",value:s.cardNo,disabled:!0})})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("div",{className:"text-[var(--text-label)]",children:t.opening_branch()}),e.jsx("input",{className:"w-full input-all input-all__border px-3 h-[42px] flex items-center !text-[var(--text-content-color)]",value:s.subAddress,disabled:!0})]}),e.jsxs("div",{className:"flex items-center justify-between py-3 text-[#959393] text-sm",children:[e.jsx("span",{children:t.set_as_default_bank_card()}),e.jsx(k,{disabled:s.defaultBank==1,checked:n,onChange:x=>m(x)})]}),e.jsxs("div",{className:"flex items-center flex-col pt-2 w-4/5 mx-auto",children:[e.jsxs("button",{onClick:i,disabled:n==(s.defaultBank==1),className:`rounded-md p-2 text-black w-full flex-center gap-2 font-semibold text-lg uppercase ${n!=(s.defaultBank==1)?"bg-[var(--active)]":"bg-[var(--disable)]"}`,children:[e.jsx("span",{children:t.save()}),b&&e.jsx("span",{className:"loader w-4 h-4 inline-block"})]}),e.jsx("p",{className:"text-xs text-[#626363] mt-4 text-center",children:t.add_bank_card_note()})]})]})})}function oe({onClose:h,open:f,account:s,onUpdate:_}){const[n,m]=o.useState(s.defaultBank==1),[b,l]=o.useState(!1),c=()=>{h()},i=async()=>{l(!0),await C(s.id),B.emit(L.refreshUserInfo),d.showToast(t.operation_successful()),l(!1),c()};return e.jsx(y,{onClose:c,open:f,title:t.add_virtual_wallet(),className:"max-w-[90vw] rounded-xl bg-[#37383c]",children:e.jsxs("div",{className:"p-3 pb-0",children:[e.jsxs("div",{className:"mt-2",children:[e.jsx("div",{className:"text-[var(--text-label)]",children:t.receiving_wallet()}),e.jsxs("div",{className:"input-all input-all__border h-[42px] px-3 flex items-center gap-3",children:[e.jsx(w,{className:"h-[24px] w-[24px] circle",src:d.getRemoteImgPath(s==null?void 0:s.iconUrl)}),e.jsx("input",{className:"grow bg-transparent !text-[var(--text-content-color)]",value:s.bankName,disabled:!0})]})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("div",{className:"text-[var(--text-label)]",children:t.wallet_address()}),e.jsx("input",{className:"w-full input-all input-all__border px-3 h-[42px] flex items-center !text-[var(--text-content-color)]",value:s.cardNo,disabled:!0})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("div",{className:"text-[var(--text-label)]",children:t.remarks()}),e.jsx("div",{className:"input-all input-all__border h-[42px] px-3 flex items-center gap-3",children:e.jsx("input",{className:"grow bg-transparent !text-[var(--text-content-color)]",value:s.subAddress,disabled:!0})})]}),e.jsxs("div",{className:"flex items-center justify-between py-3 text-[#959393] text-sm",children:[e.jsx("span",{children:t.set_as_default_bank_card()}),e.jsx(k,{disabled:s.defaultBank==1,checked:n,onChange:x=>m(x)})]}),e.jsxs("div",{className:"flex items-center flex-col pt-2 w-4/5 mx-auto",children:[e.jsxs("button",{onClick:i,disabled:n==(s.defaultBank==1),className:`rounded-md p-2 text-black w-full flex-center gap-2 font-semibold text-lg uppercase ${n!=(s.defaultBank==1)?"bg-[var(--active)]":"bg-[var(--disable)]"}`,children:[e.jsx("span",{children:t.save()}),b&&e.jsx("span",{className:"loader w-4 h-4 inline-block"})]}),e.jsx("p",{className:"text-xs text-[#626363] mt-4 text-center",children:t.add_crypto_wallet_note()})]})]})})}function me({onClose:h,open:f,account:s,onUpdate:_}){const[n,m]=o.useState(s.defaultBank==1),[b,l]=o.useState(!1),c=()=>{h()},i=async()=>{l(!0),await C(s.id),B.emit(L.refreshUserInfo),d.showToast(t.operation_successful()),l(!1),c()};return e.jsx(y,{onClose:c,open:f,title:t.add_wallet_address(),className:"max-w-[90vw] rounded-xl bg-[#37383c]",children:e.jsxs("div",{className:"p-3 pb-0",children:[e.jsxs("div",{className:"mt-2",children:[e.jsx("div",{className:"text-[var(--text-label)]",children:t.receiving_wallet()}),e.jsxs("div",{className:"input-all input-all__border h-[42px] px-3 flex items-center gap-3",children:[e.jsx(w,{className:"h-[24px] w-[24px] circle",src:d.getRemoteImgPath(s==null?void 0:s.iconUrl)}),e.jsx("input",{className:"grow bg-transparent !text-[var(--text-content-color)]",value:s.bankName,disabled:!0})]})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("div",{className:"text-[var(--text-label)]",children:t.wallet_address()}),e.jsx("input",{className:"w-full input-all input-all__border px-3 h-[42px] flex items-center !text-[var(--text-content-color)]",value:s.cardNo,disabled:!0})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("div",{className:"text-[var(--text-label)]",children:t.remarks()}),e.jsx("input",{className:"w-full input-all input-all__border px-3 h-[42px] flex items-center !text-[var(--text-content-color)]",value:s.subAddress,disabled:!0})]}),e.jsxs("div",{className:"flex items-center justify-between py-3 text-[#959393] text-sm",children:[e.jsx("span",{children:t.set_as_default_bank_card()}),e.jsx(k,{disabled:s.defaultBank==1,checked:n,onChange:x=>m(x)})]}),e.jsxs("div",{className:"flex items-center flex-col pt-2 w-4/5 mx-auto",children:[e.jsxs("button",{onClick:i,disabled:n==(s.defaultBank==1),className:`rounded-md p-2 text-black w-full flex-center gap-2 font-semibold text-lg uppercase ${n!=(s.defaultBank==1)?"bg-[var(--active)]":"bg-[var(--disable)]"}`,children:[e.jsx("span",{children:t.save()}),b&&e.jsx("span",{className:"loader w-4 h-4 inline-block"})]}),e.jsx("p",{className:"text-xs text-[#626363] mt-4 text-center",children:t.add_crypto_wallet_note()})]})]})})}function pe({onClose:h,open:f,account:s,onUpdate:_}){const{withdrawWeb3Tokens:n}=K({}),[m,b]=o.useState(s.defaultBank==1),[l,c]=o.useState(!1),i=n.find(u=>u.currency==s.currency&&u.chainId==s.chainId),x=()=>{h()},p=async()=>{c(!0),await C(s.id),B.emit(L.refreshUserInfo),d.showToast(t.operation_successful()),c(!1),x()};return e.jsx(y,{onClose:x,open:f,title:t.add_virtual_wallet(),className:"max-w-[90vw] rounded-xl bg-[#37383c]",children:e.jsxs("div",{className:"p-3 pb-0",children:[e.jsxs("div",{className:"mt-2",children:[e.jsx("div",{className:"text-[var(--text-label)]",children:t.types_of_cryptocurrencies()}),e.jsxs("div",{className:"input-all input-all__border h-[42px] px-3 flex items-center gap-3",children:[e.jsx(w,{className:"h-[24px] w-[24px] circle",src:d.getCurrencyIcon(s==null?void 0:s.currency)}),e.jsx("input",{className:"grow bg-transparent !text-[var(--text-content-color)]",value:s.bankName,disabled:!0})]})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("div",{className:"text-[var(--text-label)]",children:t.wallet_address()}),e.jsx("input",{className:"w-full input-all input-all__border px-3 h-[42px] flex items-center !text-[var(--text-content-color)]",value:s.cardNo,disabled:!0})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("div",{className:"text-[var(--text-label)]",children:t.network()}),e.jsxs("div",{className:"input-all input-all__border h-[42px] px-3 flex items-center gap-3",children:[e.jsx(w,{className:"h-[24px] w-[24px] circle",src:d.getChainIcon(s==null?void 0:s.chainId)}),e.jsx("input",{className:"grow bg-transparent !text-[var(--text-content-color)]",value:i==null?void 0:i.network,disabled:!0})]})]}),e.jsxs("div",{className:"flex items-center justify-between py-3 text-[#959393] text-sm",children:[e.jsx("span",{children:t.set_as_default_bank_card()}),e.jsx(k,{disabled:s.defaultBank==1,checked:m,onChange:u=>b(u)})]}),e.jsxs("div",{className:"flex items-center flex-col pt-2 w-4/5 mx-auto",children:[e.jsxs("button",{onClick:p,disabled:m==(s.defaultBank==1),className:`rounded-md p-2 text-black w-full flex-center gap-2 font-semibold text-lg uppercase ${m!=(s.defaultBank==1)?"bg-[var(--active)]":"bg-[var(--disable)]"}`,children:[e.jsx("span",{children:t.save()}),l&&e.jsx("span",{className:"loader w-4 h-4 inline-block"})]}),e.jsx("p",{className:"text-xs text-[#626363] mt-4 text-center",children:t.add_crypto_wallet_note()})]})]})})}function je(){var U,I;const h=Y();q();const f=z(F),[s,_]=S(G),[n,m]=S(H),b=new Q(h.search),[l,c]=o.useState(b.findNumber("type",0)),[i,x]=o.useState(!1),[p,u]=o.useState(),A=[{name:t.virtual_wallet(),value:r.CRYPTO_WALLET},{name:t.bank_cards(),value:r.BANK},{name:t.e_wallets(),value:r.E_WALLET},{name:t.web3_wallet(),value:r.WEB3}],v=A[l].value,j=R(V(((U=A[l])==null?void 0:U.value)??0)),N=R(X(((I=A[l])==null?void 0:I.value)??0)),T=()=>{if(j.length>=N){d.showInfoToast(l==1?t.max_bank_to_add_hint({_num:N}):t.max_wallet_to_add_hint({_num:N}));return}x(!0)},M=a=>{c(a)},g=()=>{d.accessToken()&&ne().then(a=>{a!=null&&f(a)})};o.useEffect(()=>{Z.fetchWithdrawalConfig(!0),Object.keys(n).length==0&&J().then(a=>m(a)),s.length==0&&ee().then(a=>_(a))},[]),o.useEffect(()=>{d.navigate(`${se.accountList}?type=${l}`,{replace:!0})},[l]);const W=()=>v==r.CRYPTO_WALLET?t.add_crypto_wallet():v==r.BANK?t.add_bank_card():v==r.E_WALLET?t.add_wallet_address():t.add_wallet_address(),P=()=>{switch(v){case r.CRYPTO_WALLET:return e.jsx(xe,{open:i,onClose:()=>{x(!1)},onAdded:g,countries:s});case r.BANK:return e.jsx(ie,{open:i,onClose:()=>{x(!1)},onAdded:g,countries:s});case r.WEB3:return e.jsx(de,{open:i,onClose:()=>{x(!1)},onAdded:g,countries:s});case r.E_WALLET:return e.jsx(re,{open:i,onClose:()=>{x(!1)},onAdded:g,countries:s});default:return null}},$=()=>{if(!p)return null;if(v==r.CRYPTO_WALLET)return e.jsx(oe,{open:p!=null,account:p,onClose:()=>{u(void 0)}});if(v==r.BANK)return e.jsx(ce,{open:p!=null,account:p,onClose:()=>{u(void 0)}});if(v==r.WEB3)return e.jsx(pe,{open:p!=null,account:p,onClose:()=>{u(void 0)}});if(v==r.E_WALLET)return e.jsx(me,{open:p!=null,account:p,onClose:()=>{u(void 0)}})},O=a=>{a.defaultBank||C(a.id).then(E=>{console.log("onChangeDefaultWallets done"),g()})};return e.jsxs("div",{className:"min-h-[100%]",children:[e.jsx(te,{contentClassName:"h-full",title:t.receipt_account_management(),className:"max-w-[800px] mx-auto !h-full",tabEl:e.jsx(ae,{onChange:M,selected:l,tabs:A,className:"px-3 pb-3"}),children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"overflow-hidden overflow-y-auto hide-scrollbar h-full px-3 flex flex-col relative pb-[85px]",children:[(j==null?void 0:j.length)>0?j.map((a,E)=>e.jsxs("div",{className:"relative flex rounded-lg p-4 items-center justify-between mb-3 bg-[var(--box-bg)]",onClick:()=>{u(a)},children:[e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx("div",{className:"bg-var(--box-bg) p-1 rounded-full flex items-center justify-center h-full",children:e.jsx("img",{className:"h-[40px] w-[40px] rounded-full",src:d.getRemoteImgPath(a==null?void 0:a.iconUrl),alt:"icon"})}),e.jsxs("div",{className:"pl-1",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("p",{className:"text-[var(--text-color)] text-sm",children:a.bankName}),a.defaultBank==1&&e.jsx("div",{className:"account-item-default-tag rounded flex items-center justify-center text-xs px-1 py-0.5 pb-0",children:e.jsx("p",{className:"text-[var(--text-color)]",children:t.default()})})]}),a.subAddress?e.jsx("div",{className:"text-xs mt-1 text-left text-[var(--text-color)]",children:a.subAddress}):e.jsx("div",{className:"text-xs mt-1 text-left text-[var(--text-color)]",children:a.fullName}),e.jsx("p",{className:"pb-0 text-base text-[var(--text-color)] font-semibold",children:a.cardNo})]})]}),e.jsx("div",{className:"flex justify-end items-center",children:e.jsx(k,{checked:a&&(a==null?void 0:a.defaultBank)==1,onChange:ue=>O(a),className:`slider_small ${(a==null?void 0:a.defaultBank)==1?"slider__lighter__checked":"slider__lighter"}`})})]},E)):e.jsx(le,{className:"grow min-h-[75vh]"}),d.isPC()?e.jsx("div",{className:"bottom-0 absolute left-1/2 translate-x-[-50%] translate-y-[-50%] z-10 py-0 flex items-center w-[90%] mx-auto",children:e.jsx(D,{onClick:T,title:W(),icon:"ic_add",className:"uppercase",useDisableStyle:j.length>=N})}):null]}),P(),$()]})}),d.isMobile()?e.jsx("div",{className:"bottom-[-1px] fixed left-1/2 translate-x-[-50%] pb-3 pt-3 bg-[var(--page-mob-bg)] z-10 py-0 flex items-center w-[100%] mx-auto",children:e.jsx(D,{onClick:T,title:W(),icon:"ic_add",className:"uppercase !w-[90%] mx-auto",useDisableStyle:j.length>=N})}):null]})}export{je as AccountListView};