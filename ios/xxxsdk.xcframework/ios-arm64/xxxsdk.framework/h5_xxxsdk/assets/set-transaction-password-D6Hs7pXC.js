import{u as G,j as e,N as W,T as t,R as U,v as $,r as i,H as u,f,M as _,F as q,aA as z,aH as J,l as K,G as Q,aC as X,aD as Y,aE as N}from"./index-BRyeyo8a.js";import{S}from"./sucess-view-Cd-dyNf2.js";import{u as Z}from"./useSetupConfig-DrTvWtbQ.js";const I={newFundPwd:"",newFundPwdConfirm:"",otp:"",errors:{newFundPwd:"",newFundPwdConfirm:"",otp:""}},ee=(d,n)=>{switch(n.type){case"change":return d.errors[n.field]="",{...d,[n.field]:n.value};default:return d}};function oe(){var c;const d=G(),n=()=>{var w;(w=d.state)!=null&&w.isFromWithdrawal?u.navigate(-2):u.navigate(-1)};return e.jsx(W,{title:t.transaction_password(),className:"max-w-[800px] mx-auto ",onBack:n,children:e.jsx("div",{className:" p-5 pt overflow-hidden overflow-y-auto hide-scrollbar h-full",children:e.jsx(ne,{isFromWithdrawal:(c=d.state)==null?void 0:c.isFromWithdrawal})})})}function ne({isFromWithdrawal:d}){const{userInfo:n}=U($),[c,w]=i.useState({isPhone:!1,open:!1}),{needBind:p,formConf:a,setFormConf:E}=Z(),[T,F]=i.useState(!1),[g,j]=i.useState(!1),[s,k]=i.useReducer(ee,I),[O,R]=i.useState(!1),[M,V]=i.useState(!1),[x,C]=i.useState(0),v=i.useRef(null),[h,L]=i.useState({newFundPwdConfirm:!1,newFundPwd:!1}),y=r=>{L(Object.assign({},{newFundPwdConfirm:!1,newFundPwd:!1},{[r]:!h[r]}))},P=r=>{const{name:l,value:o}=r.target;j(!1),k({type:"change",field:l,value:o})},b=()=>{s.errors={newFundPwd:"",newFundPwdConfirm:"",otp:""},s.newFundPwd.length<6&&(s.errors.newFundPwd=t.trans_password_rule()),(s.newFundPwdConfirm.length<4||s.newFundPwdConfirm!=s.newFundPwd)&&(s.errors.newFundPwdConfirm=t.trans_password_not_match()),(a.verifyFundPassPhone||a.verifyFundPassEmail)&&!s.otp&&(s.errors.otp=t.otp_is_required());const r=!Object.values(s.errors).some(l=>l!="");return R(r),r},A=async()=>{var r,l;if(!b()){j(!0);return}F(!0);try{const o={newFundPwd:s.newFundPwd};a.verifyFundPassEmail&&!a.usePhone&&(o.email=(n==null?void 0:n.email)??"",o.otp=s.otp),a.verifyFundPassPhone&&a.usePhone&&(o.phone=(n==null?void 0:n.phone)??"",o.otp=s.otp),await J(o),V(!0),K.emit(Q.refreshUserInfo)}catch(o){const m=((l=(r=o==null?void 0:o.response)==null?void 0:r.data)==null?void 0:l.message)??"";u.showToast(m.trim())}finally{F(!1)}},H=async()=>{var r,l;if(!(x>0))try{const o=X.CHANGE_FUND_PWD;await Y({authenType:a.usePhone?N.PHONE:N.EMAIL,authenValue:a.usePhone?n==null?void 0:n.phone:n==null?void 0:n.email,otpType:o});let m=60;C(m),v.current=setInterval(()=>{C(--m),m<=0&&clearInterval(v.current)},1e3)}catch(o){const m=((l=(r=o==null?void 0:o.response)==null?void 0:r.data)==null?void 0:l.message)??"";u.showToast(m.replace((n==null?void 0:n.phone)??"","").replace((n==null?void 0:n.email)??"","").trim())}},B=()=>{u.navigate(c.isPhone?f.changePhone:f.changeEmail)},D=()=>{u.navigate(f.security),w({...c,open:!1})};return i.useEffect(()=>{b()},[s.newFundPwd,s.newFundPwdConfirm,s.otp]),i.useEffect(()=>{if(p.phoneFundPassword||p.emailFundPassword){w({open:!0,isPhone:p.phoneFundPassword});return}w({open:!1,isPhone:p.phoneFundPassword})},[p]),M?d?e.jsx(S,{msg:t.trading_password_has_been_changed(),actionTitle:t.continue_to_withdraw(),onClick:()=>u.navigate(-1)}):e.jsx(S,{msg:t.trading_password_has_been_changed(),onClick:()=>u.navigate(f.home)}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-4",children:[e.jsxs("label",{htmlFor:"password",className:"text-label ",children:[e.jsx("span",{className:"text-[#ffbc00]",children:"* "}),t.set_tran_pass_label()]}),e.jsxs("div",{className:"input-all input-all__border mt-2 px-2 w-full flex items-center justify-center gap-3 input-login-register",children:[e.jsx("input",{type:h.newFundPwd?"text":"password",id:"newFundPwd",name:"newFundPwd",inputMode:"numeric",value:s.newFundPwd,onChange:P,autoComplete:"off",maxLength:6,placeholder:t.enter_trans_pass_hint(),className:"security bg-transparent placeholder:text-[#57575c] placeholder:text-xs py-2 outline-none grow"}),e.jsx(_,{name:h.newFundPwd?"ic_eye_open":"ic_eye_close",onClick:()=>y("newFundPwd"),color:"#444449",className:"w-4 h-4"})]}),g&&s.errors.newFundPwd&&e.jsx("p",{className:"error",children:s.errors.newFundPwd})]}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("label",{htmlFor:"password",className:"text-label ",children:[e.jsx("span",{className:"text-[#ffbc00]",children:"* "}),t.confirm_password_again()]}),e.jsxs("div",{className:"input-all input-all__border mt-2 px-2 w-full flex items-center justify-center gap-3 input-login-register",children:[e.jsx("input",{type:h.newFundPwdConfirm?"text":"password",id:"newFundPwdConfirm",name:"newFundPwdConfirm",inputMode:"numeric",value:s.newFundPwdConfirm,onChange:P,autoComplete:"off",maxLength:6,placeholder:t.enter_trans_pass_hint_again(),className:"security bg-transparent placeholder:text-[#57575c] placeholder:text-xs py-2 outline-none grow"}),e.jsx(_,{name:h.newFundPwdConfirm?"ic_eye_open":"ic_eye_close",onClick:()=>y("newFundPwdConfirm"),color:"#444449",className:"w-4 h-4"})]}),g&&s.errors.newFundPwdConfirm&&e.jsx("p",{className:"error",children:s.errors.newFundPwdConfirm})]}),a.canUseFundOtp&&(a.verifyFundPassEmail||a.verifyFundPassPhone)&&e.jsxs("div",{className:"mt-5",children:[e.jsxs("label",{className:"text-label ",htmlFor:"confirmPassword",children:[e.jsx("span",{className:"text-[#ffbc00]",children:"*"})," ",a.usePhone?t.sms_verification_code():t.email_verification_code()]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-[#b1f600] pl-2",children:[" ",a.usePhone?t.sms_verification_code():t.email_verification_code()]}),a.showSwitch&&e.jsxs("span",{className:"flex items-center justify-center text-sm gap-2",onClick:()=>E({...a,usePhone:!a.usePhone}),children:[e.jsx(_,{color:"#bbbbbb",name:"ic_change",className:"w-4 h-3"}),e.jsx("span",{className:"text-label",children:a.usePhone?"E-mail":t.phone_number()})]})]}),e.jsxs("div",{className:"w-full  px-3 py-2.5 mt-1 input-all input-all__border flex items-center justify-between",children:[e.jsx("input",{type:"text",value:s.otp,name:"otp",id:"otp",autoComplete:"off",onChange:P,className:"security border-none outline-none grow bg-transparent"}),e.jsx("span",{onClick:H,className:"text-[#fdcd00] underline text-nowrap whitespace-nowrap text-sm",children:x>0?`${t.resend()}(${x})`:t.get_a_verification_code()})]})]}),e.jsx(q,{title:t.confirm(),onClick:A,className:"mt-9 uppercase",disable:T,useDisableStyle:!O}),e.jsx(z,{content:"",onClose:D,onConfirm:B,open:c.open,children:e.jsxs("div",{children:[e.jsx("p",{className:"text-center pt-3",children:c.isPhone?t.bind_phone_confirm_title():t.bind_email_confirm_title()}),e.jsx("p",{className:"text-center pt-2 text-[var(--text-content-color)] text-xs",children:c.isPhone?t.bind_phone_confirm_title_content():t.bind_email_confirm_title_content()})]})})]})}export{oe as SetTransactionPasswordView};
