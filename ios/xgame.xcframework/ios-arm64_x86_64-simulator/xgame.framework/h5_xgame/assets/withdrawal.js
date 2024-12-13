import{r,a as V,b as H,as as oe,T as s,a9 as j,j as e,l as W,M as E,at as de,H as h,a6 as U,au as O,R as A,S as ee,av as me,h as X,z as ue,g as he,aw as xe,ax as fe,a8 as Z,Y as pe,ad as we,ay as be,p as je,az as ge,$ as _e,q as Ne,G as ve}from"./index.sdk-0.0.1.js";import{N as ye}from"./normal-layout.js";import{A as se}from"./button.js";import{B as ke}from"./bottom-sheet.js";import{C as Y}from"./main-layout.js";import{C as q}from"./modals.js";import{C as $}from"./popover.js";import"./SwipeableDrawer.js";import"./Drawer.js";import"./Modal.js";import"./index7.js";import"./lazy-load-component.js";function Ce({isOpen:c,onClose:b,onSelected:v,wallets:d,onHandleAdd:f,onUpdateDefaultWallet:o,type:p}){const[i,x]=r.useState(d),[n,C]=r.useState(!1);V();const a=H(oe(p));r.useEffect(()=>{n||d.length<=3?x(d):n||x(d.slice(0,3))},[n,d]);const g=l=>{l.defaultBank||de(l.id).then(w=>{o&&o(l)})};let N=s.add_wallet_address(),S=s.crypto_wallets(),m=s.max_wallet_to_add_hint({_num:a});p==j.BANK&&(N=s.add_bank_card(),S=s.debit_card_bank_card(),m=s.max_bank_to_add_hint({_num:a})),p==j.CRYPTO_WALLET&&(N=s.add_crypto_wallet(),S=s.receiving_wallet());const T=()=>{if(a<=d.length){h.showInfoToast(m);return}f&&f()};return e.jsx(ke,{open:c,onClose:b,title:S,titleClassName:"border-none mob:rounded-t-xl pc:rounded-xl",titleBackgroundColor:"var(--select-wallet-box-bg)",className:"!bg-[var(--select-wallet-bg)] !p-0",children:e.jsxs("ul",{children:[i.map((l,w)=>e.jsxs("li",{onClick:()=>{v(l),b&&b()},className:"flex items-center mx-3 mt-3 p-4 max-w-full bg-[var(--select-wallet-box-bg)] rounded-lg",children:[l.fullIconUrl&&e.jsx(W,{src:l.fullIconUrl,alt:"",className:"w-9 aspect-square"}),e.jsxs("div",{className:"px-3 grow max-w-[70vw]",children:[e.jsx("div",{className:"overflow-hidden text-wrap break-words w-full font-bold",children:l.cardNo}),e.jsxs("div",{className:"text-xs text-[#d9d9da]",children:[l.bankName," (",l.chainName||l.subAddress,")"]})]}),e.jsx("div",{className:"grow"}),e.jsx(Y,{checked:l.defaultBank==1,onChange:I=>I&&g(l)})]},w)),!n&&d.length>3&&e.jsx("div",{className:"my-4 flex items-center justify-center w-full text-[#4e4e50] text-sm",children:e.jsx("span",{onClick:()=>C(!0),children:s.show_all()})}),e.jsx("div",{className:"h-3"}),f&&e.jsxs("li",{onClick:T,className:"bg-[var(--select-wallet-box-bg)] flex items-center justify-center gap-3 py-5 text-[#78787b]",children:[e.jsx(E,{color:"#78787b",name:"ic_add",className:"w-3 h-3"}),e.jsx("span",{children:N})]})]})})}function Se({onClose:c,open:b,onAdded:v,countries:d,preferCurrency:f="",preferChainId:o=-1}){const{withdrawWeb3Tokens:p}=U({}),[i,x]=r.useState([]),[n,C]=r.useState(),[a,g]=r.useState(""),[N,S]=r.useState(!0),[m,T]=r.useState(!1),[l,w]=r.useState(),I=r.useMemo(()=>{const u=[];for(const y of p)l&&!y.countries.includes(l.countryCode)||u.find(P=>P.configKey==y.configKey)||u.push(y);return u},[d,p,l]),B=r.useMemo(()=>{const u=[];for(const y of p)l&&!y.countries.includes(l.countryCode)||u.push(y);return u},[d,p,l]),L=()=>{S(!0),g(""),c()};r.useEffect(()=>{S(!0),g("")},[]);const t=u=>{let y=u.find(P=>P.currency==f&&Number(P.chainId)==o);return y||(y=u.find(P=>P.currency==f)),y};r.useEffect(()=>{if(b&&(n&&!B.includes(n)||!n)){C(t(B)??B[0]);return}},[B]),r.useEffect(()=>{b&&C(t(p)??p[0])},[b]),r.useEffect(()=>{x(B.filter(u=>u.configKey==(n==null?void 0:n.configKey)))},[B,n]);const _=()=>{if(!n)return;if(a.trim().length==0){h.showError(s.please_enter_a_valid_wallet_address());return}const u={systemBankId:n.configId,tokenSymbol:n.configKey,cardNo:a.trim(),defaultBank:N?1:0,chainId:n.chainId,bankType:j.WEB3};T(!0),O(u).then(async y=>{var P;if(T(!1),!y.success){h.showError(((P=y.error)==null?void 0:P.message)??"");return}h.showToast(s.add_successfully()),v&&v(),L(),g("")})},M=u=>h.currentLang()=="zh"?u==null?void 0:u.chineseName:u==null?void 0:u.englishName;return e.jsx(q,{onClose:L,open:b,title:s.add_wallet_address(),className:"max-w-[90vw] modal-custom-class",children:e.jsxs("div",{className:"p-3 pb-0",children:[e.jsx("div",{className:"text-label",children:s.country()}),e.jsx($,{actionEL:e.jsxs("div",{className:"rounded-md border border-[#46464b] bg-[var(--input-bg)] flex gap-2 items-center justify-between text-[#6f6d6d] p-2 text-sm h-[42px]",children:[(l==null?void 0:l.icon)&&e.jsx(W,{src:l==null?void 0:l.icon,className:"w-6 h-6",alt:""}),e.jsx("span",{className:`grow leading-none ${l?"text-white":""}`,children:M(l)??s.country()}),l?e.jsx(E,{onClick:()=>w(void 0),color:"#6f6f6f",name:"ic_round_close",className:"w-4 h-4"}):e.jsx(E,{color:"#6f6f6f",name:"ic_chevon_right",className:"w-3 h-3"})]}),style:{minWidth:Math.min(500,.9*window.innerWidth)-24},className:"no-anchor",children:e.jsx("div",{className:"overflow-y-auto hide-scrollbar max-h-[250px] pb-3 pt-2",children:d.map((u,y)=>e.jsxs("div",{onClick:()=>w(u),className:"flex items-center px-3 py-2",children:[u.icon&&e.jsx(W,{src:u.icon,className:"w-5 aspect-square mr-1.5"}),e.jsx("label",{children:M(u)})]},`currency_${y}`))})}),e.jsxs("div",{className:"text-label mt-3",children:[e.jsx("span",{className:"text-[#ffbc00]",children:"*"})," ",s.types_of_cryptocurrencies()]}),e.jsx($,{actionEL:e.jsxs("div",{className:"rounded-md border border-[#46464b] bg-[var(--input-bg)] flex items-center p-2 mt-1 text-sm h-[42px]",children:[n&&e.jsxs(e.Fragment,{children:[e.jsx(W,{src:h.getCurrencyIcon(n.tokenSymbol),className:"w-6 h-6",alt:""}),e.jsxs("span",{className:"grow px-2",children:[n==null?void 0:n.configKey," (",n==null?void 0:n.tokenName,")"]})]}),e.jsx(E,{name:"ic_arrow_down",color:"#4b4a52",className:"w-3 h-3"})]}),style:{minWidth:Math.min(500,.9*window.innerWidth)-24},className:"no-anchor",children:e.jsx("div",{className:"overflow-y-auto hide-scrollbar max-h-[250px]",children:I.map((u,y)=>e.jsxs("div",{onClick:()=>C(u),className:"flex items-center px-3 py-2",children:[e.jsx(W,{src:h.getCurrencyIcon(u.currency),alt:"",className:"w-5 aspect-square mr-1.5"}),e.jsx("label",{children:u.configKey})]},`currency_${y}`))})}),e.jsxs("div",{className:"text-label mt-4",children:[e.jsx("span",{className:"text-[#ffbc00]",children:"*"})," ",s.wallet_address()]}),e.jsx("input",{className:"rounded-md border border-[#46464b] bg-[var(--input-bg)] focus:outline-none placeholder:text-[#6f6d6d] placeholder:text-sm p-2 mt-1 w-full",placeholder:s.please_enter_your_wallet_address(),value:a,onChange:u=>g(u.target.value)}),e.jsxs("div",{className:"text-label mt-4",children:[e.jsx("span",{className:"text-[#ffbc00]",children:"*"})," ",s.network()]}),e.jsx($,{actionEL:e.jsxs("div",{className:"rounded-md border border-[#46464b] bg-[var(--input-bg)] flex items-center p-2 mt-1 text-sm h-[42px]",children:[e.jsx(W,{src:h.getChainIcon(n==null?void 0:n.chainId),alt:"",className:"w-5 aspect-square mr-1.5"}),n&&e.jsx("span",{className:"grow px-2",children:n==null?void 0:n.network}),e.jsx(E,{name:"ic_arrow_down",color:"#4b4a52",className:"w-3 h-3"})]}),style:{minWidth:Math.min(500,.9*window.innerWidth)-24},disabled:i.length<=1,actionELClassName:i.length<=1?"text-[var(--text-content-color)]":"",className:"no-anchor",children:e.jsx("div",{className:"overflow-y-auto hide-scrollbar max-h-[250px]",children:i==null?void 0:i.map((u,y)=>e.jsxs("div",{onClick:()=>C(u),className:"flex items-center hover:bg-[var(--text-content-color)] px-3 py-2",children:[e.jsx(W,{src:h.getChainIcon(u.chainId),alt:"",className:"w-5 aspect-square mr-1.5"}),e.jsx("label",{children:u.network})]},`currency_${y}`))})}),e.jsxs("div",{className:"flex items-center justify-between py-3 text-[#959393] text-sm",children:[e.jsx("span",{children:s.set_as_default_withdrawal_wallet()}),e.jsx(Y,{checked:N,onChange:S})]}),e.jsxs("div",{className:"flex items-center flex-col pt-2 w-4/5 mx-auto",children:[e.jsxs("button",{onClick:_,className:`rounded-md p-2 text-black w-full flex items-center justify-center gap-1 font-bold text-lg uppercase ${a.length?"bg-[var(--active)]":"bg-[var(--disable)]"}`,children:[s.confirm_add(),m&&e.jsx("span",{className:"loader w-4 h-4"})]}),e.jsx("p",{className:"text-xs text-[#626363] mt-4 text-center",children:s.add_crypto_wallet_note()})]})]})})}function We({onClose:c,open:b,onAdded:v,countries:d}){const{withdrawFiats:f}=U({fiatType:j.BANK}),[o,p]=r.useState(!0),[i,x]=r.useState(""),[n,C]=r.useState(""),[a,g]=r.useState(),[N,S]=r.useState(),[m,T]=r.useState(!1),l=r.useMemo(()=>f.filter(t=>!(N&&!t.countries.includes(N.countryCode))),[d,f,N]),w=()=>{p(!0),x(""),C(""),g(void 0),c()},I=()=>!(!i||!a||!n),B=async()=>{var M;if(!I()){h.showError(s.enter_valid_bank_account());return}const t={systemBankId:a.configId,cardNo:i.trim(),defaultBank:o?1:0,bankType:j.BANK,subAddress:n,userBankId:"",fullName:"",tokenSymbol:a.configKey};T(!0);const _=await O(t);if(T(!1),!_.success){h.showError(((M=_.error)==null?void 0:M.message)??"");return}h.showToast(s.add_successfully()),v&&v(),w()},L=t=>h.currentLang()=="zh"?t==null?void 0:t.chineseName:t==null?void 0:t.englishName;return r.useEffect(()=>{a&&!l.includes(a)&&g(void 0)},[l]),e.jsx(q,{onClose:w,open:b,title:s.add_bank_card(),className:"max-w-[90vw] rounded-xl bg-[#37383c]",children:e.jsxs("div",{className:"p-3 pb-0",children:[e.jsx("div",{className:"text-label",children:s.country()}),e.jsx($,{actionEL:e.jsxs("div",{className:"rounded-md border border-[#46464b] bg-[var(--input-bg)] flex gap-2 items-center justify-between text-[#6f6d6d] p-2 text-sm h-[42px]",children:[(N==null?void 0:N.icon)&&e.jsx(W,{src:N==null?void 0:N.icon,className:"w-6 h-6",alt:""}),e.jsx("span",{className:`grow leading-none ${N?"text-white":""}`,children:L(N)??s.country()}),N?e.jsx(E,{onClick:()=>S(void 0),color:"#6f6f6f",name:"ic_round_close",className:"w-4 h-4"}):e.jsx(E,{color:"#6f6f6f",name:"ic_chevon_right",className:"w-3 h-3"})]}),style:{minWidth:Math.min(500,.9*window.innerWidth)-24},className:"no-anchor",children:e.jsx("div",{className:"overflow-y-auto hide-scrollbar max-h-[250px] pb-3 pt-2",children:d==null?void 0:d.map((t,_)=>e.jsxs("div",{onClick:()=>S(t),className:"flex items-center px-3 py-2",children:[t.icon&&e.jsx(W,{src:t.icon,className:"w-5 aspect-square mr-1.5"}),e.jsx("label",{children:L(t)})]},`currency_${_}`))})}),e.jsxs("div",{className:"text-label mt-3",children:[e.jsx("span",{className:"text-[#ffbc00]",children:"*"})," ",s.your_receiving_bank_card_information()]}),e.jsx($,{actionEL:e.jsxs("div",{className:"rounded-md border border-[#46464b] bg-[var(--input-bg)] flex gap-2 items-center justify-between text-[#6f6d6d] p-2 mt-3 text-sm h-[42px]",children:[(a==null?void 0:a.fiatIcon)&&e.jsx(W,{src:a==null?void 0:a.fiatIcon,className:"w-6 h-6",alt:""}),e.jsx("span",{className:`grow leading-none ${a?"text-white":""}`,children:(a==null?void 0:a.configKey)??s.select_bank()}),e.jsx(E,{color:"#6f6f6f",name:"ic_chevon_right",className:"w-3 h-3"})]}),style:{minWidth:Math.min(500,.9*window.innerWidth)-24},className:"no-anchor",children:e.jsx("div",{className:"overflow-y-auto hide-scrollbar max-h-[250px] pb-3 pt-2",children:l==null?void 0:l.map((t,_)=>e.jsxs("div",{onClick:()=>g(t),className:"flex items-center px-3 py-2",children:[t.fiatIcon&&e.jsx(W,{src:t.fiatIcon,className:"w-5 aspect-square mr-1.5"}),e.jsx("label",{children:t.configKey})]},`currency_${_}`))})}),e.jsx("input",{className:"input-all input-all__border p-2 mt-3 w-full",placeholder:s.bank_card_number(),value:i,onChange:t=>x(t.target.value)}),e.jsx("input",{className:"input-all input-all__border p-2 mt-3 w-full",placeholder:s.cardholder_name(),value:n,onChange:t=>C(t.target.value)}),a&&e.jsxs("div",{className:"pt-3 text-[#959393] text-xs",children:[s.supported_currencies()," ",a==null?void 0:a.currency]}),e.jsxs("div",{className:"flex items-center justify-between py-3 text-[#959393] text-sm",children:[e.jsx("span",{children:s.set_as_default_bank_card()}),e.jsx(Y,{checked:o,onChange:t=>p(t)})]}),e.jsxs("div",{className:"flex items-center flex-col pt-2 w-4/5 mx-auto",children:[e.jsxs("button",{onClick:B,className:`rounded-md p-2 text-black w-full flex-center gap-2 font-semibold text-lg uppercase ${I()?"bg-[var(--active)]":"bg-[var(--disable)]"}`,children:[e.jsx("span",{children:s.confirm_add()}),m&&e.jsx("span",{className:"loader w-4 h-4 inline-block"})]}),e.jsx("p",{className:"text-xs text-[#626363] mt-4 text-center",children:s.add_bank_card_note()})]})]})})}function Ee(c){return e.jsxs(q,{open:c.isShow,onClose:c.onCancel,showTitle:!1,title:"",className:"max-w-[330px] px-5",children:[e.jsx("div",{className:"text-center text-lg pt-3",children:c.title}),e.jsxs("div",{className:"flex gap-9 px-2 pt-7",children:[e.jsx("a",{className:"rounded-md w-1/2 p-2 border border-[var(--active)] text-center",onClick:c.onCancel,children:s.cancel()}),e.jsx("a",{target:"_blank",onClick:c.onConfirm,className:"rounded-md w-1/2 p-2 text-black bg-[var(--active)] capitalize font-bold text-center",rel:"noreferrer",children:s.confirm()})]})]})}function Ie({numberOfDigits:c=6,onChange:b}){const[v,d]=r.useState(new Array(c).fill("")),f=r.useRef([]);function o(i,x){var C,a;const n=[...v];if(i?n[x]=i[i.length-1]:n[x]=i,x<c-1)for(let g=x+1;g<c;g++)n[g]="";d(n),b(n),i&&x<c-1?(C=f.current[x+1])==null||C.focus():i&&x==c-1&&((a=f.current[x])==null||a.blur())}function p(i,x){var n,C;i.key==="Backspace"&&!i.target.value&&x>0&&((n=f.current[x-1])==null||n.focus()),i.key==="Enter"&&i.target.value&&x<c-1&&((C=f.current[x+1])==null||C.focus())}return e.jsx("div",{className:"flex items-center justify-between gap-2 px-3 py-4",children:v.map((i,x)=>e.jsx("input",{type:"password",inputMode:"numeric",autoFocus:x==0,value:i,maxLength:1,onChange:n=>o(n.target.value,x),onKeyUp:n=>p(n,x),ref:n=>f.current[x]=n,className:"border text-center text-lg w-[13%] h-auto text-[var(--text-color)] px-3 py-2 rounded-md block bg-[var(--bg)] focus:border-2 focus:outline-none appearance-none"},x))})}function Ae({isShow:c,onClose:b,onSubmit:v}){const[d,f]=r.useState(""),o=r.useRef(null);r.useEffect(()=>{c||f("")},[c]);const p=i=>{f(i.target.value)};return e.jsx(q,{onClose:b,open:c,title:s.enter_withdrawal_password(),className:"max-w-[90vw] modal-custom-class",children:e.jsxs("div",{className:"p-3 pb-0",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("input",{hidden:!0,className:"absolute",ref:o,type:"number",value:d,onChange:p})}),e.jsx(Ie,{numberOfDigits:6,onChange:i=>{f(i.join(""))}}),e.jsx(se,{className:"mt-5",title:s.withdraw(),onClick:()=>v(d),disable:d.length<6})]})})}function Le({onClose:c,open:b,onAdded:v,countries:d}){const{withdrawFiats:f}=U({fiatType:j.CRYPTO_WALLET}),[o,p]=r.useState(!0),[i,x]=r.useState(""),[n,C]=r.useState(""),[a,g]=r.useState(),[N,S]=r.useState(!1),[m,T]=r.useState(),l=r.useMemo(()=>f.filter(t=>!(m&&!t.countries.includes(m.countryCode))),[d,f,m]),w=()=>{p(!0),x(""),C(""),g(void 0),c()},I=()=>!(!i||!a),B=async()=>{var M;if(!I()){h.showError(s.please_enter_a_valid_wallet_address());return}const t={systemBankId:a.configId,cardNo:i.trim(),defaultBank:o?1:0,bankType:j.CRYPTO_WALLET,subAddress:n,userBankId:"",fullName:"",tokenSymbol:a.configKey};S(!0);const _=await O(t);if(S(!1),!_.success){h.showError(((M=_.error)==null?void 0:M.message)??"");return}h.showToast(s.add_successfully()),v&&v(),w()},L=t=>h.currentLang()=="zh"?t==null?void 0:t.chineseName:t==null?void 0:t.englishName;return r.useEffect(()=>{a&&!l.includes(a)&&g(void 0)},[l]),e.jsx(q,{onClose:w,open:b,title:s.add_crypto_wallet(),className:"max-w-[90vw] rounded-xl bg-[#37383c]",children:e.jsxs("div",{className:"p-3 pb-0",children:[e.jsx("div",{className:"text-label",children:s.country()}),e.jsx($,{actionEL:e.jsxs("div",{className:"rounded-md border border-[#46464b] bg-[var(--input-bg)] flex gap-2 items-center justify-between text-[#6f6d6d] p-2 text-sm h-[42px]",children:[(m==null?void 0:m.icon)&&e.jsx(W,{src:m==null?void 0:m.icon,className:"w-6 h-6",alt:""}),e.jsx("span",{className:`grow leading-none ${m?"text-white":""}`,children:L(m)??s.country()}),m?e.jsx(E,{onClick:()=>T(void 0),color:"#6f6f6f",name:"ic_round_close",className:"w-4 h-4"}):e.jsx(E,{color:"#6f6f6f",name:"ic_chevon_right",className:"w-3 h-3"})]}),style:{minWidth:Math.min(500,.9*window.innerWidth)-24},className:"no-anchor",children:e.jsx("div",{className:"overflow-y-auto hide-scrollbar max-h-[250px] pb-3 pt-2",children:d==null?void 0:d.map((t,_)=>e.jsxs("div",{onClick:()=>T(t),className:"flex items-center px-3 py-2",children:[t.icon&&e.jsx(W,{src:t.icon,className:"w-5 aspect-square mr-1.5"}),e.jsx("label",{children:L(t)})]},`currency_${_}`))})}),e.jsxs("div",{className:"text-label mt-3",children:[e.jsx("span",{className:"text-[#ffbc00]",children:"*"})," ",s.receiving_wallet()]}),e.jsx($,{actionEL:e.jsxs("div",{className:"input-all input-all__border flex gap-2 items-center justify-between p-2 text-sm h-[42px]",children:[(a==null?void 0:a.fiatIcon)&&e.jsx(W,{src:a==null?void 0:a.fiatIcon,className:"w-6 h-6",alt:""}),e.jsx("span",{className:`grow leading-none ${a?"text-white":""}`,children:(a==null?void 0:a.configKey)??s.please_select()}),e.jsx(E,{color:"#6f6f6f",name:"ic_chevon_right",className:"w-3 h-3"})]}),style:{minWidth:Math.min(500,.9*window.innerWidth)-24},className:"no-anchor",children:e.jsx("div",{className:"overflow-y-auto hide-scrollbar max-h-[250px] pb-3 pt-2",children:l==null?void 0:l.map((t,_)=>e.jsxs("div",{onClick:()=>g(t),className:"flex items-center px-3 py-2",children:[t.fiatIcon&&e.jsx(W,{src:t.fiatIcon,className:"w-5 aspect-square mr-1.5"}),e.jsx("label",{children:t.configKey})]},`currency_${_}`))})}),e.jsxs("div",{className:"text-label mt-4",children:[e.jsx("span",{className:"text-[#ffbc00]",children:"*"})," ",s.wallet_address()]}),e.jsx("input",{className:"input-all input-all__border p-2 w-full",placeholder:s.fill_e_wallet_number_hint(),value:i,onChange:t=>x(t.target.value)}),e.jsx("div",{className:"text-label mt-4",children:s.remarks()}),e.jsx("input",{className:"input-all input-all__border p-2 w-full",placeholder:s.enter_e_wallet_remark_hint(),value:n,onChange:t=>C(t.target.value)}),a&&e.jsxs("div",{className:"pt-3 text-[#959393] text-xs",children:[s.supported_currencies()," ",a==null?void 0:a.currency]}),e.jsxs("div",{className:"flex items-center justify-between py-3 text-[#959393] text-sm",children:[e.jsx("span",{children:s.set_as_default_payment_card()}),e.jsx(Y,{checked:o,onChange:t=>p(t)})]}),e.jsxs("div",{className:"flex items-center flex-col pt-2 w-4/5 mx-auto",children:[e.jsxs("button",{onClick:B,className:`rounded-md p-2 text-black w-full flex-center gap-2 font-semibold text-lg uppercase ${I()?"bg-[var(--active)]":"bg-[var(--disable)]"}`,children:[e.jsx("span",{children:s.confirm_add()}),N&&e.jsx("span",{className:"loader w-4 h-4 inline-block"})]}),e.jsx("p",{className:"text-xs text-[#626363] mt-4 text-center",children:s.add_crypto_wallet_note()})]})]})})}function Te({onClose:c,open:b,onAdded:v,countries:d}){const{withdrawFiats:f}=U({fiatType:j.E_WALLET}),[o,p]=r.useState(!0),[i,x]=r.useState(""),[n,C]=r.useState(""),[a,g]=r.useState(),[N,S]=r.useState(!1),[m,T]=r.useState(),l=r.useMemo(()=>f.filter(t=>!(m&&!t.countries.includes(m.countryCode))),[d,f,m]),w=()=>{p(!0),x(""),C(""),g(void 0),c()},I=()=>!(!i||!a),B=async()=>{var M;if(!I()){h.showError(s.please_enter_a_valid_wallet_address());return}const t={systemBankId:a.configId,cardNo:i.trim(),defaultBank:o?1:0,bankType:j.E_WALLET,subAddress:n,userBankId:"",fullName:"",tokenSymbol:a.configKey};S(!0);const _=await O(t);if(S(!1),!_.success){h.showError(((M=_.error)==null?void 0:M.message)??"");return}h.showToast(s.add_successfully()),v&&v(),w()},L=t=>h.currentLang()=="zh"?t==null?void 0:t.chineseName:t==null?void 0:t.englishName;return r.useEffect(()=>{a&&!l.includes(a)&&g(void 0)},[l]),e.jsx(q,{onClose:w,open:b,title:s.add_crypto_wallet(),className:"max-w-[90vw] rounded-xl bg-[#37383c]",children:e.jsxs("div",{className:"p-3 pb-0",children:[e.jsx("div",{className:"text-label",children:s.country()}),e.jsx($,{actionEL:e.jsxs("div",{className:"rounded-md border border-[#46464b] bg-[var(--input-bg)] flex gap-2 items-center justify-between text-[#6f6d6d] p-2 text-sm h-[42px]",children:[(m==null?void 0:m.icon)&&e.jsx(W,{src:m==null?void 0:m.icon,className:"w-6 h-6",alt:""}),e.jsx("span",{className:`grow leading-none ${m?"text-white":""}`,children:L(m)??s.country()}),m?e.jsx(E,{onClick:()=>T(void 0),color:"#6f6f6f",name:"ic_round_close",className:"w-4 h-4"}):e.jsx(E,{color:"#6f6f6f",name:"ic_chevon_right",className:"w-3 h-3"})]}),style:{minWidth:Math.min(500,.9*window.innerWidth)-24},className:"no-anchor",children:e.jsx("div",{className:"overflow-y-auto hide-scrollbar max-h-[250px] pb-3 pt-2",children:d==null?void 0:d.map((t,_)=>e.jsxs("div",{onClick:()=>T(t),className:"flex items-center px-3 py-2",children:[t.icon&&e.jsx(W,{src:t.icon,className:"w-5 aspect-square mr-1.5"}),e.jsx("label",{children:L(t)})]},`currency_${_}`))})}),e.jsxs("div",{className:"text-label mt-3",children:[e.jsx("span",{className:"text-[#ffbc00]",children:"*"})," ",s.receiving_wallet()]}),e.jsx($,{actionEL:e.jsxs("div",{className:"input-all input-all__border flex gap-2 items-center justify-between p-2 text-sm h-[42px]",children:[(a==null?void 0:a.fiatIcon)&&e.jsx(W,{src:a==null?void 0:a.fiatIcon,className:"w-6 h-6",alt:""}),e.jsx("span",{className:`grow leading-none ${a?"text-white":""}`,children:(a==null?void 0:a.configKey)??s.please_select()}),e.jsx(E,{color:"#6f6f6f",name:"ic_chevon_right",className:"w-3 h-3"})]}),style:{minWidth:Math.min(500,.9*window.innerWidth)-24},className:"no-anchor",children:e.jsx("div",{className:"overflow-y-auto hide-scrollbar max-h-[250px] pb-3 pt-2",children:l==null?void 0:l.map((t,_)=>e.jsxs("div",{onClick:()=>g(t),className:"flex items-center px-3 py-2",children:[t.fiatIcon&&e.jsx(W,{src:t.fiatIcon,className:"w-5 aspect-square mr-1.5"}),e.jsx("label",{children:t.configKey})]},`currency_${_}`))})}),e.jsxs("div",{className:"text-label mt-4",children:[e.jsx("span",{className:"text-[#ffbc00]",children:"*"})," ",s.wallet_address()]}),e.jsx("input",{className:"input-all input-all__border p-2 w-full",placeholder:s.fill_e_wallet_number_hint(),value:i,onChange:t=>x(t.target.value)}),e.jsx("div",{className:"text-label mt-4",children:s.remarks()}),e.jsx("input",{className:"input-all input-all__border p-2 w-full",placeholder:s.enter_e_wallet_remark_hint(),value:n,onChange:t=>C(t.target.value)}),a&&e.jsxs("div",{className:"pt-3 text-[#959393] text-xs",children:[s.supported_currencies()," ",a==null?void 0:a.currency]}),e.jsxs("div",{className:"flex items-center justify-between py-3 text-[#959393] text-sm",children:[e.jsx("span",{children:s.set_as_default_payment_card()}),e.jsx(Y,{checked:o,onChange:t=>p(t)})]}),e.jsxs("div",{className:"flex items-center flex-col pt-2 w-4/5 mx-auto",children:[e.jsxs("button",{onClick:B,className:`rounded-md p-2 text-black w-full flex-center gap-2 font-semibold text-lg uppercase ${I()?"bg-[var(--active)]":"bg-[var(--disable)]"}`,children:[e.jsx("span",{children:s.confirm_add()}),N&&e.jsx("span",{className:"loader w-4 h-4 inline-block"})]}),e.jsx("p",{className:"text-xs text-[#626363] mt-4 text-center",children:s.add_crypto_wallet_note()})]})]})})}function Ve(){const c=V(),b=()=>{const d=new ee(c.search);d.setVal("tab",2),d.del("filter"),h.navigate(A.fundingHistory+d.toSearchQuery())},v=()=>c.pathname==A.bankWithdrawal?s.bank_card_withdrawal():c.pathname==A.web3Withdrawal?s.cryptocurrency_withdrawals():c.pathname==A.eWalletWithdrawal?s.e_wallet_payment():s.crypto_wallet_withdrawal();return e.jsx(ye,{title:v(),rightEl:e.jsx("div",{onClick:()=>b(),className:"",children:e.jsx(E,{color:"var(--arrow-color)",name:"ic_find_record",className:"w-5 h-5"})}),className:"max-w-[800px] mx-auto bg-[#1e1e22]",onBack:()=>h.navigate(A.wallet+"?type=withdraw&method=crypto",{replace:!0}),children:e.jsx(Be,{})})}function Be(){var Q;const c=V(),b=new ee(c.search),{withdrawFiats:v}=U({}),d=v.filter(k=>k.configType==j.BANK),f=v.filter(k=>k.configType==j.CRYPTO_WALLET);let o=j.WEB3;c.pathname==A.bankWithdrawal&&(o=j.BANK),c.pathname==A.cryptoWithdrawal&&(o=j.CRYPTO_WALLET),c.pathname==A.eWalletWithdrawal&&(o=j.E_WALLET);const p=H(me(o)),{extInfo:i,userExtMonies:x}=H(X),n=ue(X),[C,a]=r.useState(0),[g,N]=r.useState(""),[S,m]=r.useState(!1),[T,l]=r.useState(!1),[w,I]=r.useState(),[B,L]=r.useState(!1),[t,_]=r.useState(!0),[M,u]=r.useState(!1),[y,P]=he(xe),G=r.useRef(!0),z=r.useMemo(()=>{let k=o==j.WEB3?b.findString("token",""):"";return k||(k=(w==null?void 0:w.currency)||(i==null?void 0:i.currency)||"CNY"),{...(x||[]).find(R=>R.currency==k)}},[i,w,p,x,c]);async function te(){await Promise.all([Z.fetchWithdrawalConfig(),we(),be().then(k=>{var K;a(((K=k.data)==null?void 0:K.totalBetAmountToWithDraw)??0)})]),_(!1)}const F=()=>{h.accessToken()&&je().then(k=>{k!=null&&n(k)})},ae=k=>{if(k.length!=6){h.showError(s.invalid_withdrawal_passcode());return}L(!1),_(!0),ge({cashMoney:parseFloat(g),cashPassword:k,userBankId:(w==null?void 0:w.id)??0,systemBankId:w==null?void 0:w.systemBankId},o==j.WEB3).then(K=>{var R,D,J;if(_(!1),!(K!=null&&K.success)&&((R=K.error)==null?void 0:R.code)=="WITHDRAWAL_HISTORY_IS_FALSE"){const ce=JSON.stringify((D=K.error)==null?void 0:D.message),ie=_e(ce);h.navigate(`${A.validWithdraw}?info=${ie}`);return}if(!K.success){h.showError(((J=K.error)==null?void 0:J.message)??"");return}N(""),h.showToast(s.withdraw_successful()),Ne.emit(ve.refreshUserInfo)})},ne=()=>{!w||!parseFloat(g)||L(!0)},re=()=>{m(!1),l(!1),I(void 0),L(!1),_(!1),u(!1)},le=()=>{if(re(),o==j.WEB3){if(d.length>0){h.navigate(A.bankWithdrawal+c.search,{replace:!0});return}if(f.length>0){h.navigate(A.cryptoWithdrawal+c.search,{replace:!0});return}return}if(o==j.BANK){if(f.length>0){h.navigate(A.cryptoWithdrawal+c.search,{replace:!0});return}h.navigate(A.web3Withdrawal+c.search,{replace:!0});return}if(o==j.CRYPTO_WALLET){h.navigate(A.eWalletWithdrawal+c.search,{replace:!0});return}if(o==j.E_WALLET){h.navigate(A.web3Withdrawal+c.search,{replace:!0});return}};return r.useEffect(()=>{te().then(),y.length==0&&fe().then(k=>P(k))},[]),r.useEffect(()=>{i&&u(!i.fundPwd)},[i]),r.useEffect(()=>{const k=o==j.WEB3?b.findString("token",""):"";if(k){const R=p.find(D=>D.currency==k);if(R){I(R);return}if(G.current)return}const K=p.find(R=>R.defaultBank)??p[0];p.length>0&&!w&&I(K)},[p]),e.jsxs("div",{className:"bg-[var(--page-mob-bg)] p-3 grow flex flex-col",children:[!t&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"p-4 relative rounded-md bg-[var(--box-bg)] flex items-center gap-2 pb-4",children:[e.jsx(W,{src:h.getCurrencyIcon(z.currency),alt:"",className:"w-10 xs:w-8"}),e.jsxs("div",{className:"text-[#7a7a84] text-xs gap-1 grow",children:[e.jsxs("div",{className:"",children:[e.jsxs("span",{children:[s.account_balance(),":"]}),e.jsx("span",{className:"text-xl text-white font-semibold pl-1",children:z.money}),e.jsx("span",{className:"text-sm ml-0.5",children:z.currency})]}),Number(C)>0&&e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{className:"mr-1",children:[s.need_to_bet()," ",e.jsx("span",{className:"text-sm xs:text-xs text-[#bb9c5f]",children:C}),(Q=Z.defaultCurrency)==null?void 0:Q.currency," ",s.to_withdraw_cash()]}),e.jsxs("div",{className:"text-sm xs:text-xs text-[#bb9c5f] text-nowrap whitespace-nowrap",onClick:()=>h.navigate(A.validWithdraw),children:[s.check()," ",">"]})]})]}),e.jsx("span",{className:"px-2 py-0.5 rounded-full bg-[var(--page-mob-bg)] absolute top-1 right-1.5",onClick:le,children:e.jsx(E,{color:"#7a7a84",name:"ic_switch",className:"w-3.5 h-3"})})]}),e.jsx("div",{className:"text-label mt-4",children:s.withdrawal_amount()}),e.jsx("input",{type:"number",value:g,onChange:k=>N(k.target.value),placeholder:s.please_enter_the_withdrawal_amount(),className:"w-full input-all input-all__border px-3 py-1 !text-[var(--active)] text-2xl font-bold rounded-md"}),o==j.WEB3&&w&&e.jsxs("div",{className:"pt-2 text-[var(--text-content-color)] text-sm",children:[s.network()," ",w.chainName]}),e.jsx(Me,{type:o,onClickAdd:()=>m(!0),onClickSelect:()=>l(!0),selectedAccount:w}),e.jsx("div",{className:"px-5",children:e.jsx(se,{onClick:ne,title:s.withdraw(),disable:g.trim().length==0||!w,className:"mt-9 uppercase"})}),e.jsxs("div",{className:"mt-12 text-xs text-[var(--text-content-color)]",children:[e.jsx("div",{className:"text-sm text-[#a77d4e] font-bold uppercase",children:s.remider()}),e.jsx("div",{children:"1.This is a special tip about payment "}),e.jsx("div",{children:"2.This is a special tip about payment "}),e.jsx("div",{children:"3.This is a special tip about payment "})]}),o==j.BANK&&e.jsx(We,{open:S,onClose:()=>m(!1),onAdded:F,countries:y}),o==j.WEB3&&e.jsx(Se,{open:S,onClose:()=>m(!1),onAdded:F,countries:y,preferCurrency:b.findString("token",""),preferChainId:b.findNumber("chainId",-1)}),o==j.CRYPTO_WALLET&&e.jsx(Le,{open:S,onClose:()=>m(!1),onAdded:F,countries:y}),o==j.E_WALLET&&e.jsx(Te,{open:S,onClose:()=>m(!1),onAdded:F,countries:y}),e.jsx(Ce,{type:o,isOpen:T,wallets:p,onSelected:k=>{G.current=!1,I(k)},onHandleAdd:()=>{l(!1),m(!0)},onUpdateDefaultWallet:k=>F(),onClose:()=>l(!1)}),e.jsx(Ee,{isShow:M,onCancel:()=>{u(!1),h.navigate(-1)},onConfirm:()=>{h.navigate(A.setTransPassword,{state:{isFromWithdrawal:!0}})},title:s.please_set_withdrawal_password_first()}),e.jsx(Ae,{isShow:B,onClose:()=>L(!1),onSubmit:ae})]}),t&&e.jsx(pe,{className:"grow"})]})}function Me({type:c,selectedAccount:b,onClickAdd:v,onClickSelect:d}){let f=s.add_wallet_address(),o=s.crypto_wallets();return c==j.BANK&&(f=s.add_bank_card(),o=s.debit_card_bank_card()),c==j.CRYPTO_WALLET&&(f=s.add_crypto_wallet(),o=s.receiving_wallet()),b?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center justify-between text-label mt-4",children:e.jsx("div",{children:o})}),e.jsx("div",{className:"bg-[var(--box-bg)] rounded-md mt-1 px-3 py-3",children:e.jsx("button",{onClick:d,className:"flex items-center gap-2 w-full border-none bg-transparent rounded-md p-2.5 justify-center",children:e.jsxs("div",{className:"flex items-center w-full gap-3",children:[b.fullIconUrl&&e.jsx(W,{src:b.fullIconUrl,alt:"",className:"w-10 aspect-square"}),e.jsx("span",{className:"grow overflow-hidden text-wrap break-words w-full text-left",children:b.cardNo}),e.jsx("span",{className:"w-6 h-6 min-w-6 circle flex-center bg-[var(--select-wallet-arrow-bg)]",children:e.jsx(E,{color:"var(--text-content-color)",name:"ic_chevon_right",className:"w-3.5 h-3.5"})})]})})})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center justify-between text-label mt-4",children:e.jsx("div",{children:o})}),e.jsx("div",{className:"bg-[var(--box-bg)] rounded-md mt-1 p-3",children:e.jsxs("button",{onClick:v,className:"flex items-center gap-2 w-full border bg-[var(--input-bg)] border-dashed border-[#434348] rounded-md p-2.5 justify-center",children:[e.jsx(E,{color:"var(--text-color)",name:"ic_add",className:"w-3 h-3"}),e.jsx("span",{children:f})]})})]})}export{Be as BankWithdrawalContent,Ve as BankWithdrawalView};