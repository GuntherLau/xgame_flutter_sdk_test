import{r as n,R as r,v as y,aI as v}from"./index-BRyeyo8a.js";function o(){const[a,t]=n.useState({verifyOldPwChangePw:1,verifyOtpPhoneChangePw:0,verifyOtpEmailChangePw:0,verifyOldFundPwChangeFundPw:1,verifyOtpPhoneChangeFundPw:0,verifyOtpEmailChangeFundPw:0}),[f,h]=n.useState({phonePassword:!1,emailPassword:!1,phoneFundPassword:!1,emailFundPassword:!1}),[l,s]=n.useState({showSwitch:!1,verifyPassPhone:!1,verifyPassEmail:!1,verifyFundPassPhone:!1,verifyFundPassEmail:!1,usePhone:!1,verifyOldPass:!1,verifyOldFunPass:!1,canUseFundOtp:!1,canUsePassOtp:!1}),{userInfo:e}=r(y),d=async()=>{if(!(e!=null&&e.account))return;const i={phonePassword:!1,emailPassword:!1,phoneFundPassword:!1,emailFundPassword:!1};a.verifyOtpPhoneChangePw==1&&(e==null?void 0:e.verifyPhone)!=1&&(i.phonePassword=!0),a.verifyOtpEmailChangePw==1&&(e==null?void 0:e.verifyEmail)!=1&&(i.emailPassword=!0),a.verifyOtpEmailChangePw==1&&a.verifyOtpPhoneChangePw==1&&((e==null?void 0:e.verifyPhone)==1||(e==null?void 0:e.verifyEmail)==1)&&(i.phonePassword=!1,i.emailPassword=!1),a.verifyOtpPhoneChangeFundPw==1&&(e==null?void 0:e.verifyPhone)!=1&&(i.phoneFundPassword=!0),a.verifyOtpEmailChangeFundPw==1&&(e==null?void 0:e.verifyEmail)!=1&&(i.emailFundPassword=!0),a.verifyOtpPhoneChangeFundPw==1&&a.verifyOtpEmailChangeFundPw==1&&((e==null?void 0:e.verifyPhone)==1||(e==null?void 0:e.verifyEmail)==1)&&(i.phoneFundPassword=!1,i.emailFundPassword=!1),h(i);const P={showSwitch:!1,verifyPassPhone:a.verifyOtpPhoneChangePw==1,verifyPassEmail:a.verifyOtpEmailChangePw==1,verifyFundPassPhone:a.verifyOtpPhoneChangeFundPw==1,verifyFundPassEmail:a.verifyOtpEmailChangeFundPw==1,usePhone:(e==null?void 0:e.verifyPhone)==1,verifyOldPass:a.verifyOldPwChangePw==1,verifyOldFunPass:a.verifyOldFundPwChangeFundPw==1,canUseFundOtp:a.verifyOtpPhoneChangeFundPw==1&&(e==null?void 0:e.verifyPhone)==1||e.verifyEmail==1&&a.verifyOtpEmailChangeFundPw==1,canUsePassOtp:a.verifyOtpPhoneChangePw==1&&(e==null?void 0:e.verifyPhone)==1||e.verifyEmail==1&&a.verifyOtpEmailChangePw==1};(!(e!=null&&e.verifyEmail)||!(e!=null&&e.verifyPhone)||!(e!=null&&e.email)||!e.phone)&&(P.showSwitch=!1),s(P)};return n.useEffect(()=>{v().then(i=>{t(i)})},[]),n.useEffect(()=>{d()},[e,a]),{needBind:f,formConf:l,setFormConf:s}}export{o as u};
