import{C as se,c as ne,d as ae,r,e as G,f as T,a as O,H as m,j as e,T as o,u as oe,g as ce,h as re,i as le,b as V,s as ie,k as de,M,R as ue,l as he,m as me,n as pe,o as fe,p as xe,q,G as z}from"./index.sdk-0.0.1.js";import{S as ve,C as P,I as ge,a as be,b as Ce}from"./captcha.js";import{i as we,P as je,p as ye}from"./index5.js";import{A as _e}from"./button.js";import{u as Ne,W as R}from"./chains.js";import{T as ke}from"./captcha2.js";import{u as X}from"./useConnections.js";import"./Modal.js";import"./emotion-react.browser.esm.js";import"./popover.js";async function Ie(s,c){var p;let n;if(typeof c.connector=="function"?n=s._internal.connectors.setup(c.connector):n=c.connector,n.uid===s.state.current)throw new se;try{s.setState(f=>({...f,status:"connecting"})),n.emitter.emit("message",{type:"connecting"});const d=await n.connect({chainId:c.chainId}),v=d.accounts;return n.emitter.off("connect",s._internal.events.connect),n.emitter.on("change",s._internal.events.change),n.emitter.on("disconnect",s._internal.events.disconnect),await((p=s.storage)==null?void 0:p.setItem("recentConnectorId",n.id)),s.setState(f=>({...f,connections:new Map(f.connections).set(n.uid,{accounts:v,chainId:d.chainId,connector:n}),current:n.uid,status:"connected"})),{accounts:v,chainId:d.chainId}}catch(d){throw s.setState(v=>({...v,status:v.current?"connected":"disconnected"})),d}}function Se(s){return{mutationFn(c){return Ie(s,c)},mutationKey:["connect"]}}function Y(s={}){const{mutation:c}=s,n=ne(s),p=Se(n),{mutate:d,mutateAsync:v,...f}=ae({...c,...p});return r.useEffect(()=>n.subscribe(({status:x})=>x,(x,C)=>{C==="connected"&&x==="disconnected"&&f.reset()}),[n,f.reset]),{...f,connect:d,connectAsync:v,connectors:Ne({config:n})}}const Pe={phone:"",account:"",password:"",valiCode:"",errors:{phone:"",account:"",password:"",valiCode:""}},Re=(s,c)=>{switch(c.type){case"change":return s.errors[c.field]="",{...s,[c.field]:c.value};default:return s}};function Ve(){const[s,c]=r.useState(!0),n=X(),[p,d]=r.useState(!1),[v,f]=r.useState(!1),{web3Verify:x}=G(),{isConnected:C,isConnecting:_,address:g,connector:A}=T();T();const{connect:a,connectors:k}=Y();O();const b=R.getInstance().wallets[2],w=b.connector,j=k.find(i=>i.id==="injected"),u=async()=>{try{if(m.setWalletType(b.type),f(!0),d(!0),setTimeout(()=>{d(!1)},3e3),(w==null?void 0:w.type)==="injected"){a({connector:j});const N=(await w.getAccounts())[0];N&&x(N).then(()=>{m.navigateBack()})}else{const i=await w.connect();if(C){const N=R.getAddressOfConnector(b.connectorId,n)[0]||g;N&&x(N).then(()=>{m.navigateBack()})}}}catch(i){console.error(i)}finally{d(!1)}};return r.useEffect(()=>{if(!g||!v)return;const i=R.getAddressOfConnector(b.connectorId,n)[0]||g;C&&i&&x(i).then(()=>{m.accessToken()&&m.navigateBack()})},[C,_,n,g]),e.jsx(ve,{children:e.jsxs("div",{className:"flex flex-col rounded-t-xl grow overflow-hidden relative h-full",children:[e.jsxs("div",{className:"flex text-lg font-bold w-full bg-[var(--auth-tab-bg)] sticky rounded-t-[20px]",children:[e.jsx("div",{onClick:()=>c(!0),className:`${s?"text-black bg-[var(--auth-active-tab-bg)] rounded-t-[20px]":"text-[var(--auth-text)] "} flex flex-col items-center py-3 justify-center w-1/2 pb-[45px]`,children:e.jsx("div",{children:o.password_login()})}),e.jsx("div",{onClick:()=>{c(!1),u()},className:`${s?"text-[var(--auth-text)]":"text-black bg-[var(--auth-active-tab-bg)] rounded-t-[20px]"} flex flex-col items-center py-3 justify-center w-1/2 pb-[45px]`,children:e.jsx("div",{children:o.web3_login()})})]}),s?e.jsx(Te,{}):e.jsx(Ae,{})]})})}function Te(){O();const{i18n:{language:s}}=oe(),[c,n]=ce(re),[p,d]=r.useState(!1),[v,f]=r.useState(!1),[x,C]=r.useState(!1),[_,g]=r.useState(!1),{companyConf:A}=le(),[a,k]=r.useReducer(Re,Pe),[b,w]=r.useState(!1),j=V(ie),u=V(de),[i,N]=r.useState(!0),E=r.useRef(null),U=r.useRef(null),I=r.useMemo(()=>({account:{validator:(t,h)=>t?!0:(h.errors.account=o.account_or_email_invalid(),!1)},password:{pattern:/^.{8,20}$/,message:o.password_rule()},phone:{validator:(t,h)=>t?we(t)?!0:(h.errors.phone=o.phone_number_invalid(),!1):(h.errors.phone=o.phone_is_required(),!1)},valiCode:{validator:(t,h)=>j.vCode==1&&[P.COMPLEX,P.SIMPLE].includes(u)&&!t?(h.errors.valiCode=o.vali_code_is_required(),!1):!0}}),[s,j.vCode,u]),K=t=>{N(t),t||m.removeRemember()};r.useEffect(()=>{const t=m.getRemember();t&&(t.phone&&(a.phone=t.phone),t.password&&(a.password=t.password),t.account&&(a.account=t.account),d(!!t.phone))},[]);const J=t=>{t&&(g(!1),k({type:"change",field:"phone",value:t}))},L=t=>{const{name:h,value:l}=t.target;g(!1),k({type:"change",field:h,value:l})},B=()=>{var h;for(const l of Object.keys(I))a.errors[l]="",!(p&&l=="account"||!p&&l=="phone")&&(I[l].validator&&I[l].validator(a[l],a),I[l].pattern&&((h=I[l].pattern)!=null&&h.test(a[l])||(a.errors[l]=I[l].message??"")));const t=!Object.values(a.errors).some(l=>l!="");return w(t),t},F=async t=>{var h,l,H,W,$;try{f(!0);const S=(((h=ye(t.phone))==null?void 0:h.nationalNumber)||"").replace("+",""),y={phone:S,email:t.account,account:t.account,password:me(t.password),version:pe.version(),mode:p?1:2,valiCode:t.valiCode};p?(delete y.account,delete y.email):(delete y.phone,/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(y.account||"")?(y.mode=2,delete y.account):(y.mode=3,delete y.email)),await fe(y),i==!0&&m.setRemember({phone:S,account:t.account,password:t.password});const D=await xe();D!=null&&n(D),m.showToast(o.login_successfully()),m.navigateBack()}catch(S){console.log(S),q.emit(z.showError,((H=(l=S.response)==null?void 0:l.data)==null?void 0:H.message)??S.message),(W=E.current)==null||W.refresh(),($=U.current)==null||$.refresh()}finally{f(!1)}},Q=async()=>new Promise(t=>{var h;(h=E.current)==null||h.verify(),q.on(z.waitFor3rdCaptcha,l=>{t(l)})}),Z=async()=>{if(m.removeToken(),!B()){g(!0);return}if(j.vCode==1&&u==P.THIRD_PARTY){const t=await Q();if(!t)return;a.valiCode=t,F(a);return}F(a)},ee=()=>{N(!i)},te=()=>{var t;(t=window.open(A.olUrl,"_blank"))==null||t.focus()};return r.useEffect(()=>{B()},[a.account,a.password,a.phone,a.valiCode]),e.jsxs("div",{className:"px-5 rounded-t-[20px] bg-[var(--auth-bg)] grow absolute w-full top-12 h-full py-7 overflow-y-auto hide-scrollbar",children:[e.jsxs("div",{className:"flex items-center gap-1 justify-between",children:[e.jsx("h1",{className:"text-[var(--active)] font-bold text-shadow text-xl",children:o.login()}),e.jsxs("div",{className:"flex items-center gap-1 cursor-pointer",onClick:()=>d(!p),children:[e.jsx(M,{name:"ic_change",color:"var(--text-content-color)",className:"w-3 h-3"}),e.jsx("span",{className:"text-[var(--auth-label)] text-xs",children:p?o.account_or_email():o.phone_number()})]})]}),p?e.jsxs("div",{className:"mt-4",children:[e.jsxs("label",{htmlFor:"phone",className:"text-[var(--auth-label)] text-sm block",children:[o.phone_number()," ",e.jsx("span",{className:"text-[#df183c]",children:"*"})]}),e.jsx(je,{className:"mt-2",value:a.phone,onChange:J,placeholder:o.enter_phone(),local:s}),_&&a.errors.phone&&e.jsx("p",{className:"error",children:a.errors.phone})]}):e.jsxs("div",{className:"mt-4",children:[e.jsxs("label",{htmlFor:"account",className:"text-[var(--auth-label)] text-sm block",children:[o.email_address_or_account_name()," ",e.jsx("span",{className:"text-[#df183c]",children:"*"})]}),e.jsx("input",{type:"text",id:"account",name:"account",value:a.account,onChange:L,placeholder:o.enter_email_address_or_account_name(),autoComplete:"off",className:"auth input-all input-all__border mt-2 px-2 py-2 w-full"}),_&&a.errors.account&&e.jsx("p",{className:"error",children:a.errors.account})]}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("label",{htmlFor:"password",className:"text-[var(--auth-label)] text-sm block",children:[o.password()," ",e.jsx("span",{className:"text-[#df183c]",children:"*"})]}),e.jsxs("div",{className:"input-all input-all__border mt-2 px-2 w-full flex items-center justify-center gap-3",children:[e.jsx("input",{type:x?"text":"password",id:"password",name:"password",value:a.password,onChange:L,placeholder:o.enter_password(),className:"auth input-all py-2 grow"}),e.jsx(M,{name:x?"ic_eye_open":"ic_eye_close",onClick:()=>C(!x),color:"#444449",className:"w-4 h-4"})]}),_&&a.errors.password&&e.jsx("p",{className:"error",children:a.errors.password})]}),j.vCode==1&&[P.COMPLEX,P.SIMPLE].includes(u)&&e.jsxs("div",{className:"mt-4",children:[e.jsxs("label",{htmlFor:"valiCode",className:"text-[var(--auth-label)] text-sm block",children:[o.vali_code()," ",e.jsx("span",{className:"text-[#df183c]",children:"*"})]}),e.jsx(ge,{ref:U,className:"input-all__border input-all mt-2 px-2 w-full flex items-center justify-center gap-3 py-0.5",inputClassName:"auth input-all h-full",onChange:L,id:"valiCode",name:"valiCode",placeholder:o.enter_vali_code_hint()}),_&&a.errors.valiCode&&e.jsx("p",{className:"error",children:a.errors.valiCode})]}),e.jsxs("div",{className:"mt-2 text-sm flex items-center justify-between",children:[e.jsxs("div",{className:"flex-center",onClick:ee,children:[e.jsx(be,{checked:i,onChange:t=>K(t.target.checked),size:"small",sx:{color:"var(--active)",padding:"0px !important","&.Mui-checked":{color:"var(--active)"},"& .MuiSvgIcon-root":{fontSize:19}}}),e.jsx("span",{className:`${i?" text-[var(--active)]":"text-[var(--auth-label)]"} leading-none pl-1 pt-1`,children:o.remember()})]}),e.jsx("div",{onClick:te,className:"text-[var(--active)] pt-1",children:o.forgot_your_password()})]}),e.jsx("div",{className:"text-center mt-8 flex justify-center",children:e.jsx(_e,{title:o.login(),onClick:Z,loading:v,disable:v,useDisableStyle:!b})}),e.jsxs("div",{className:"text-center text-sm text-[var(--text-content-color)] py-3",children:[o.do_not_have_account_yet()," ",e.jsx("span",{className:"text-[var(--active)] cursor-pointer",onClick:()=>m.navigate(ue.signup,{replace:!0}),children:o.sign_up()})]}),e.jsx(Ce,{title:o.login_directly_with()}),j.vCode==1&&u==P.THIRD_PARTY&&e.jsx(ke,{ref:E})]})}function Ae(){const s=X(),c=r.useRef(!1);return e.jsxs("div",{className:"px-5 rounded-t-[20px] bg-[var(--auth-bg)] grow absolute w-full top-12 h-full py-7 overflow-y-auto hide-scrollbar ",children:[e.jsx("div",{className:"text-[var(--active)] font-bold text-shadow text-xl mb-2",children:o.web3_login()}),e.jsx("p",{className:"text-[var(--text-content-color)] text-xs mb-2",children:o.exp_winning_in_web3()}),e.jsx("div",{className:"pb-4",children:R.getInstance().wallets.map(n=>(n.connector,e.jsx(Ee,{wallet:n,con:s,isWeb3LoadingRef:c},n.type)))})]})}function Ee({wallet:s,con:c,isWeb3LoadingRef:n}){const[p,d]=r.useState(!1),[v,f]=r.useState(!1),{web3Verify:x}=G(),{isConnected:C,isConnecting:_,address:g,connector:A}=T();T();const{connect:a,connectors:k}=Y();O();const b=s.connector,w=k.find(u=>u.id==="injected"),j=async()=>{if(!n.current)try{if(m.setWalletType(s.type),f(!0),d(!0),n.current=!0,setTimeout(()=>{d(!1),n.current=!1},3e3),console.log("123",123),(b==null?void 0:b.type)==="injected"){a({connector:w});const i=(await b.getAccounts())[0];i&&x(i).then(()=>{m.navigateBack()})}else{console.log("connector",b);const u=await b.connect();if(console.log("aaa",u),C){const i=R.getAddressOfConnector(s.connectorId,c)[0]||g;i&&x(i).then(()=>{m.navigateBack()})}}}catch(u){console.error(u)}finally{d(!1)}};return r.useEffect(()=>{if(!g||!v)return;const u=R.getAddressOfConnector(s.connectorId,c)[0]||g;C&&u&&x(u).then(()=>{m.accessToken()&&m.navigateBack()})},[C,_,c,g]),e.jsxs("div",{onClick:j,className:"rounded-xl bg-[var(--auth-web3-bg)] h-[56px] px-4 flex gap-4 items-center mb-4 relative",children:[e.jsx(he,{src:s.logo,alt:"",className:"w-9"}),e.jsx("span",{className:"font-bold",children:s.name}),e.jsx("span",{className:"grow h-full",children:p&&e.jsx("div",{className:"absolute loader w-[20px] top-[18px]"})}),e.jsx(M,{name:"ic_chevon_right",color:"var(--text-content-color)",className:"h-4 w-4"})]})}export{Ve as LoginView};