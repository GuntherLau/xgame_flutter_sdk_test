import{R as H,b as Ue,v as le,Y as $e,t as re,a3 as He,r as i,$ as ze,E as Ye,a4 as qe,u as Be,S as Ve,a5 as Ge,a6 as J,H as u,x as ne,j as e,N as Qe,T as o,L as ce,M as h,a7 as oe,C as m,F as Je,h as Ke,a8 as ie,I as de,a9 as Xe,aa as Ze,ab as Fe,ac as Te}from"./index-BRyeyo8a.js";/* empty css                     */function as(){const{isLogin:xe}=H(Ue),{extInfo:C}=H(le),p=H($e),K=re(le),{currencyList:z}=He(),[ue,X]=i.useState(!1),[me,I]=i.useState(!1),[fe,R]=i.useState(!1),[Z,L]=i.useState(!1),[he,F]=i.useState(!1),[je,Y]=i.useState(!0),[d,ve]=i.useState([]),[O,ye]=i.useState([]),[k,pe]=i.useState([]),[t,D]=i.useState(null),[a,b]=i.useState(null),[v,N]=i.useState(null),[j,T]=i.useState(0),[ee,be]=i.useState(0),[Ne,we]=i.useState(0),[A,ge]=i.useState(0),[w,q]=i.useState(),B=i.useRef(1),[g,V]=i.useState(!1),P=H(ze),se=Ye.currentLang(),_e=re(qe),Ee=Be(),G=new Ve(Ee.search).findString("exchangeTo",""),W={page:B.current,rows:100};function Me(s){return new Promise(n=>setTimeout(n,s))}i.useEffect(()=>{try{Ge().then(async s=>{s.success?(await Me(500),await Ce(),V(!0)):(Q(),V(!0))})}catch{Q(),V(!0);return}J(W).then(s=>{q(s.data.data),we(s.data.totalCount),Y(!1)})},[]);const Ce=async()=>{await Promise.all([Q()])},Q=async()=>{if(u.accessToken()){const s=await ne();s!=null&&K(s)}};i.useEffect(()=>{const s=[];p!=null&&p.length&&z.length&&p.map(n=>{const l=z.find(x=>{if(x&&x.currency==n.currency)return x});s.push({...n,balanceUsdt:((l==null?void 0:l.exchangeRate)||0)*(n==null?void 0:n.money),tokenSymbol:l==null?void 0:l.currency,tokenName:se==="zh"?l==null?void 0:l.name:l==null?void 0:l.chineseName,exchangeCurrency:l==null?void 0:l.exchangeCurrency,icon:l==null?void 0:l.iconUrl,language:l==null?void 0:l.language,isDefault:l==null?void 0:l.isDefault,default:l==null?void 0:l.default,sort:l==null?void 0:l.sort,exchangeInFluctuation:l==null?void 0:l.exchangeInFluctuation,exchangeOutFluctuation:l==null?void 0:l.exchangeOutFluctuation,exchangeOutLimitMax:l==null?void 0:l.exchangeOutLimitMax,exchangeOutLimitMin:l==null?void 0:l.exchangeOutLimitMin,exchangeRate:l==null?void 0:l.exchangeRate,status:l==null?void 0:l.status,allowExchangeIn:l==null?void 0:l.allowExchangeIn,allowExchangeOut:l==null?void 0:l.allowExchangeOut})}),ve(s.filter(n=>n.status==1))},[p,z,g,P]),i.useEffect(()=>{var s;if(d.length&&g){const l=(d==null?void 0:d.filter(r=>r.allowExchangeOut==!0&&r.money>0)).sort(({balanceUsdt:r=0},{balanceUsdt:c=0})=>c-r);ye(l);const x=(d==null?void 0:d.find(r=>r.tokenSymbol==(C==null?void 0:C.currency)))||l[0];if(!t)D(x),N(x.money);else{const r=(d==null?void 0:d.find(c=>c.tokenSymbol==(t==null?void 0:t.currency)&&a&&c.tokenSymbol!==(a==null?void 0:a.currency)))||l[0];D(r)}const S=d==null?void 0:d.filter(r=>r.allowExchangeIn==!0&&r!==x),y=d==null?void 0:d.filter(r=>r.allowExchangeIn==!0);let E=[];E=S.slice().sort(({sort:r=0},{sort:c=0})=>c-r);let f=[];f=y.slice().sort(({sort:r=0},{sort:c=0})=>c-r);const M=(E||[]).slice();pe(f);let U=M[0];if(G&&G.length>0){const r=G.split(",");if((r==null?void 0:r.length)>0){const c=[];r.map($=>{const ae=M.find(Se=>Se.currency===$);ae&&c.push(ae)}),(c==null?void 0:c.length)>0&&(U=c[0])}}else{const r=(s=(E||[]).slice())==null?void 0:s.filter(c=>{var $;return c.allowExchangeIn==!0&&c!==x&&(c==null?void 0:c.language)&&(($=c==null?void 0:c.language)==null?void 0:$.length)>0&&(c==null?void 0:c.language.includes(se))});r&&r.length>0&&(r!=null&&r[0])&&(U=r==null?void 0:r[0])}if(!a)b(U);else{const r=f.find(c=>c.currency===a.currency);b(r||U)}}},[d,p,C,g,P]),i.useEffect(()=>{if(T(0),Number(v)>0){const s=Number(v)*(Number(t==null?void 0:t.exchangeRate)*(1-Number(t==null?void 0:t.exchangeOutFluctuation))/(Number(a==null?void 0:a.exchangeRate)*(1+Number(a==null?void 0:a.exchangeInFluctuation))));T(s)}},[v,P,a]),i.useEffect(()=>{if(t!=null&&t.id&&(a!=null&&a.id)){const s=Number(t==null?void 0:t.exchangeOutLimitMax)*(Number(t==null?void 0:t.exchangeRate)*(1-Number(t==null?void 0:t.exchangeOutFluctuation))/(Number(a==null?void 0:a.exchangeRate)*(1+Number(a==null?void 0:a.exchangeInFluctuation))));ge(s);const n=(Number(t==null?void 0:t.exchangeRate)-Number(t==null?void 0:t.exchangeOutFluctuation)*Number(t==null?void 0:t.exchangeRate))/(Number(a==null?void 0:a.exchangeRate)*(1+Number(a==null?void 0:a.exchangeInFluctuation)));be(n)}},[t,a,g,P]);const Ie=s=>{s.currency==(t==null?void 0:t.currency)||s.currency==(a==null?void 0:a.currency)||(N(""),D(s),I(!1))},Re=s=>{s.currency==(t==null?void 0:t.currency)||s.currency==(a==null?void 0:a.currency)||(b(s),R(!1))},Le=()=>{if(a&&(a==null?void 0:a.money)>0){N("");const s=t;D(a),b(s)}else u.showToast(o.switch_currency_failed(),"ic_error")},Oe=async()=>{var x;const s=await Fe({from:t==null?void 0:t.currency,to:a==null?void 0:a.currency,money:Number(v)});if(!s.success){u.showError(((x=s.error)==null?void 0:x.message)??"");return}const n=await ne();n!=null&&K(n);const l=await Te();l&&_e(l),L(!1),F(!0)},ke=s=>{const n=s.target.value;/^\d*\.?\d*$/.test(n)&&Number(n)<=Number(t==null?void 0:t.money)&&N(n)},De=()=>{O.length>0&&I(!0)},Ae=()=>{k.length>0&&R(!0)},te=()=>{F(!1),N(""),Y(!0),J(W).then(s=>{q(s.data.data),Y(!1)})},Pe=async()=>{B.current+=1,X(!0),W.page=B.current,J(W).then(s=>{q(n=>[...n||[],...s.data.data]),X(!1)})},We=s=>{if(!s&&s!=0)return"-";const n=Math.sign(s);if(/\d+\.?\d*e[\+\-]*\d+/i.test(s)){const l="0",x=String(s).toLowerCase().split("e"),S=x.pop();let y=Math.abs(S);const E=S/y,f=x[0].split(".");if(E===-1)f[0]=Math.abs(f[0]),s=l+"."+new Array(y).join(l)+f.join("");else{const M=f[1];M&&(y=y-M.length),s=f.join("")+new Array(y+1).join(l)}}return n<0&&(s=-s),s},_=!(d!=null&&d.length)||!g||!t||!a||je;return e.jsx(Qe,{title:o.exchange_money(),rightEl:e.jsx(e.Fragment,{}),className:"max-w-[800px] mx-auto bg-[var(--bg-page2)]",children:e.jsx("div",{className:"mx-3",children:xe?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"mt-3 p-3 pb-5 rounded-xl font-semibold bg-[var(--menu-box-bg)]",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{children:o.transfer_from()}),e.jsxs("div",{className:"flex items-center rounded-2xl bg-[var(--separator2)] exchange-money-bg-input text-xs text-[#d2d2d2] px-3 py-0.5",children:[e.jsx(h,{color:"",name:"ic_wallet2",className:"w-3 h-3 mr-1 exchange-money-text-gray"}),e.jsxs("span",{className:"exchange-money-text-gray",children:[o.balance(),": ",(t==null?void 0:t.money)!==void 0&&(t==null?void 0:t.money)>=0?t==null?void 0:t.money:"---"]})]})]}),e.jsx("div",{className:"flex items-center justify-between w-full mt-3 p-3 bg-[var(--separator2)] exchange-money-bg-input rounded-xl",children:_?e.jsx(oe,{width:"100%",height:"44px",animation:"wave"}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("input",{type:"number",inputMode:"numeric",disabled:!(t!=null&&t.allowExchangeOut),placeholder:o.enter_convert_amount(),value:v!==null?v:"",className:"border-none focus:outline-none bg-[var(--separator2)] exchange-money-bg-input text-xl text-[var(--active)] rounded-lg xs:w-[150px] w-50%",onChange:s=>ke(s)}),e.jsxs("div",{className:"text-xs text-[var(--text-content-color)]",children:[o.min_amount(),"：",t?We(t.exchangeOutLimitMin):"-"]})]}),e.jsxs("div",{className:`flex ${O.length>0&&(t!=null&&t.allowExchangeOut)?"":"opacity-30"}`,onClick:()=>De(),children:[e.jsx(m,{src:u.getRemoteImgPath(t==null?void 0:t.icon),alt:"",className:"w-7 h-7 rounded-full"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"mx-3",children:t==null?void 0:t.currency}),e.jsx(h,{color:"var(--text-content-color)",name:"ic_chevon_right",className:"w-3 h-3 rotate-90"})]})]})]})})]}),e.jsxs("div",{className:"mt-2 p-3 pb-5 rounded-xl font-semibold bg-[var(--menu-box-bg)]",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{children:o.transfer_to()}),e.jsxs("div",{className:"flex items-center rounded-2xl bg-[var(--separator2)] exchange-money-bg-input text-xs text-[#d2d2d2] px-3 py-0.5",children:[e.jsx(h,{color:"",name:"ic_wallet2",className:"w-3 h-3 mr-1 exchange-money-text-gray"}),e.jsxs("span",{className:"exchange-money-text-gray",children:[o.balance(),": ",(a==null?void 0:a.money)!==void 0&&(a==null?void 0:a.money)>=0?a==null?void 0:a.money:"---"]})]})]}),e.jsx("div",{className:"flex items-center justify-between w-full mt-3 p-3 bg-[var(--separator2)] exchange-money-bg-input rounded-xl",children:_?e.jsx(oe,{width:"100%",height:"44px",animation:"wave"}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("div",{className:`text-xl ${j>0?"text-[var(--active)]":"text-[#d2d2d2]"} `,children:j>0?parseFloat(j==null?void 0:j.toFixed(8)).toString():"0.00"}),e.jsxs("div",{className:"text-xs text-[var(--text-content-color)]",children:[o.max_amount(),"：",A?parseFloat(A==null?void 0:A.toFixed(8)).toString():"loading"]})]}),e.jsxs("div",{className:`flex ${k.length>0?"":"opacity-30"}`,onClick:()=>Ae(),children:[e.jsx(m,{src:u.getRemoteImgPath(a==null?void 0:a.icon),alt:"",className:"w-7 h-7 rounded-full"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"mx-3",children:(a==null?void 0:a.currency)||"..."}),e.jsx(h,{color:"var(--text-content-color)",name:"ic_chevon_right",className:"w-3 h-3 rotate-90"})]})]})]})})]}),e.jsxs("div",{className:"flex items-center justify-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-[var(--separator2)] exchange-money-bg-input rounded-full",onClick:()=>Le(),children:[e.jsx("svg",{className:"w-3 h-6 text-[var(--active)]",fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 24 36",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 34l-8-8m8 8l8-8m-8 8V4"})}),e.jsx("svg",{className:"w-3 h-6 text-[var(--text-content-color)] -ml-1",fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 24 36",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4l8 8m-8-8l-8 8m8-8v30"})})]})]}),e.jsxs("div",{className:"py-3 text-sm text-[var(--text-content-color)]",children:[o.current_exchange_rate(),"：",_?"---":e.jsxs("span",{className:"text-[var(--active)]",children:["1 ",t==null?void 0:t.currency," ≈ ",parseFloat(ee.toFixed(8)).toString()," ",a==null?void 0:a.currency]})," "]}),Number(j)>0,e.jsx("div",{className:"px-3",children:e.jsx(Je,{title:o.confirm_exchange(),onClick:()=>{L(!0)},disable:_||j==0||O.length==0||k.length==0||!(t!=null&&t.allowExchangeOut),className:"text-black"})}),e.jsxs("div",{className:"pt-5",children:[e.jsx("span",{className:"h-full border-l-4 border-l-[var(--active)] rounded-full mr-2"}),e.jsx("span",{children:o.exchange_record()})]}),_?e.jsx(ce,{className:"grow mt-20"}):w!=null&&w.length?e.jsxs("div",{className:"my-3",children:[w.map((s,n)=>e.jsxs("div",{className:"flex items-center justify-between mt-3 p-3 rounded-xl bg-[var(--menu-box-bg)]",children:[e.jsxs("div",{className:"flex items-center flex-1",children:[(s==null?void 0:s.iconFrom)&&(s==null?void 0:s.iconTo)&&e.jsxs("div",{className:"relative w-14 h-7 mr-3",children:[e.jsx("div",{className:"absolute left-0 z-[1] border-2 border-[var(--menu-box-bg)] rounded-full",children:e.jsx(m,{src:u.getRemoteImgPath(s==null?void 0:s.iconFrom),alt:"",className:"w-7 h-7 rounded-full"})}),e.jsx("div",{className:"absolute right-0  border-2 border-[var(--menu-box-bg)] rounded-full",children:e.jsx(m,{src:u.getRemoteImgPath(s==null?void 0:s.iconTo),alt:"",className:"w-7 h-7 rounded-full"})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center grow",children:[s==null?void 0:s.exchangeFrom,e.jsx(h,{color:"var(--text-content-color)",name:"ic_arrow_dashed",className:"w-5 h-5 mx-2"}),s==null?void 0:s.exchangeTo]}),e.jsx("div",{className:"text-xs text-[var(--text-content-color)]",children:s==null?void 0:s.createdAt})]})]}),e.jsxs("div",{className:"w-[40%]",children:[e.jsxs("div",{className:"flex justify-end items-center w-full",children:[e.jsxs("span",{className:"overflow-hidden text-ellipsis whitespace-nowrap",children:["-",s==null?void 0:s.amountOut]}),e.jsx("span",{className:"ml-1",children:s==null?void 0:s.exchangeFrom})]}),e.jsx("div",{className:"text-[var(--active)] text-xs text-end",children:o.completed()})]})]},n)),w.length<Ne&&e.jsx("div",{className:"flex justify-center my-3",children:ue?e.jsx("div",{className:"loader2 self-center w-6"}):e.jsx("div",{onClick:()=>Pe(),className:"text-sm text-[#444547] text-center cursor-pointer",children:o.show_more()})})]}):e.jsx(Ke,{className:"grow mt-5"}),e.jsx(ie,{anchor:"bottom",open:me,onClose:()=>I(!1),children:e.jsxs("div",{className:"rounded-t-lg bg-[var(--bottomsheet-bg)] text-white h-[350px] overflow-y-auto hide-scrollbar",children:[e.jsxs("div",{className:"p-3 bg-[var(--bottomsheet-bg)] sticky top-0 ",children:[e.jsx("div",{className:"text-center text-lg font-semibold uppercase exchange-money-text-black",children:o.currencies_transfer_from()}),e.jsx(h,{name:"ic_close",color:"#ffffff",className:"w-4 h-4 absolute right-3 top-[50%] translate-y-[-50%] exchange-money-text-black",onClick:()=>I(!1)})]}),O.map((s,n)=>e.jsxs("div",{className:`p-3 flex items-center exchange-money-text-black justify-between border-t-[0.5px] border-t-[var(--bottomsheet-separator)] ${s.currency==(a==null?void 0:a.currency)?"opacity-30":""}`,onClick:()=>{Ie(s)},children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(m,{src:u.getRemoteImgPath(s.icon),alt:"",className:"h-9 rounded-full mr-3"}),e.jsxs("div",{children:[e.jsx("div",{className:"",children:s.tokenSymbol}),e.jsxs("div",{className:"!leading-5",children:[e.jsxs("span",{className:"mr-1 text-[12px] text-[var(--text-content-color)]",children:[o.balance(),"："]}),e.jsx("span",{className:"mr-1 text-[18px]",children:s.money}),e.jsx("span",{className:"text-[12px]",children:s.tokenSymbol})]})]})]}),e.jsx("input",{type:"radio",name:"option",className:"form-radio h-5 w-5 text-[var(--active)]",checked:s.tokenSymbol==(t==null?void 0:t.currency)})]},n))]})}),e.jsx(ie,{anchor:"bottom",open:fe,onClose:()=>R(!1),children:e.jsxs("div",{className:"rounded-t-lg bg-[var(--bottomsheet-bg)] text-white h-[350px] overflow-y-auto hide-scrollbar",children:[e.jsxs("div",{className:"p-3 sticky top-0 bg-[var(--bottomsheet-bg)] z-[200]",children:[e.jsx("div",{className:"text-center text-lg font-semibold uppercase exchange-money-text-black",children:o.currencies_transfer_to()}),e.jsx(h,{name:"ic_close",color:"#ffffff",className:"w-4 h-4 absolute right-3 top-[50%] translate-y-[-50%] exchange-money-text-black",onClick:()=>R(!1)})]}),k.map((s,n)=>e.jsxs("div",{className:`p-3 flex items-center justify-between exchange-money-text-black border-t-[0.5px] border-t-[var(--bottomsheet-separator)] ${s.currency==(t==null?void 0:t.currency)?"opacity-30":""}`,onClick:()=>Re(s),children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(m,{src:u.getRemoteImgPath(s.icon),alt:"",className:"h-9 rounded-full mr-3"}),e.jsxs("div",{children:[e.jsx("div",{className:"",children:s.tokenSymbol}),e.jsxs("div",{className:"!leading-5",children:[e.jsxs("span",{className:"mr-1 text-[12px] text-[var(--text-content-color)]",children:[o.balance(),"："]}),e.jsx("span",{className:"mr-1 text-[18px]",children:s.money}),e.jsx("span",{className:"text-[12px]",children:s.tokenSymbol})]})]})]}),e.jsx("input",{type:"radio",name:"option",className:"form-radio h-5 w-5 text-[var(--active)]",checked:s.tokenSymbol==(a==null?void 0:a.currency)})]},n))]})}),e.jsx(de,{open:Z,onClose:()=>L(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",className:"flex items-center justify-center",children:e.jsx(Xe,{in:Z,children:e.jsxs("div",{className:"rounded-xl bg-[var(--menu-box-bg)] exchange-money-confirm-container text-white w-[300px] pt-3 outline-none border-none",children:[e.jsxs("div",{className:"px-3",children:[e.jsx("div",{className:"w-full flex justify-end",children:e.jsx(h,{name:"ic_close",color:"var(--text-content-color)",className:"w-4 h-4 exchange-money-text-black",onClick:()=>L(!1)})}),e.jsxs("div",{className:"w-full flex justify-center items-center pt-5 pb-3",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(m,{src:u.getRemoteImgPath(t==null?void 0:t.icon),alt:"",className:"w-10 h-10 rounded-full"}),e.jsx("div",{className:"mt-3",children:t==null?void 0:t.currency})]}),e.jsx(m,{src:"/assets/icon/exchange_money.svg",alt:"",className:"w-10 mb-9 mx-9"}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(m,{src:u.getRemoteImgPath(a==null?void 0:a.icon),alt:"",className:"w-10 h-10 rounded-full"}),e.jsx("div",{className:"mt-3",children:a==null?void 0:a.currency})]})]})]}),e.jsxs("div",{className:"mt-3 p-3 pt-4 rounded-xl bg-[var(--separator2)] exchange-money-confirm-container-content-box ",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-xs text-[var(--text-content-color)]",children:o.amount_from()}),e.jsxs("div",{className:"exchange-money-text-black",children:[v," ",t==null?void 0:t.currency]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-2",children:[e.jsx("div",{className:"text-xs text-[var(--text-content-color)]",children:o.amount_to()}),e.jsxs("div",{className:"exchange-money-text-black",children:[parseFloat(j.toFixed(8)).toString()," ",a==null?void 0:a.currency]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-2",children:[e.jsx("div",{className:"text-xs text-[var(--text-content-color)]",children:o.current_exchange_rate2()}),e.jsxs("div",{className:"exchange-money-text-black",children:["1 ",t==null?void 0:t.currency," ≈ ",parseFloat(ee.toFixed(8)).toString()," ",a==null?void 0:a.currency]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-2",children:[e.jsx("div",{className:"text-xs text-[var(--text-content-color)]",children:o.exchange_time()}),e.jsx("div",{className:"exchange-money-text-black",children:Ze(new Date).format("YYYY/MM/DD HH:mm")})]}),e.jsx("div",{className:"flex justify-around mt-4 mb-6 px-3 ",onClick:()=>{Oe()},children:e.jsx("div",{className:"w-full rounded pb-[4px] bg-[#6e9d00] confirm-exchange-button",children:e.jsx("div",{className:"w-full rounded bg-[var(--active)] ",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("span",{className:"py-1 text-black text-center font-bold",children:o.confirm_exchange()})})})})})]})]})})}),e.jsx(de,{open:he,onClose:()=>{te()},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",className:"flex items-center justify-center",children:e.jsxs("div",{className:"rounded-xl bg-[var(--separator2)] exchange-money-success-popup text-white w-[300px] pt-3 px-3 outline-none border-none",children:[e.jsx("div",{className:"w-full flex justify-end",children:e.jsx(h,{name:"ic_close",color:"var(--text-content-color)",className:"w-4 h-4 ",onClick:()=>{te()}})}),e.jsxs("div",{className:"w-full flex flex-col justify-center items-center pt-5 pb-10",children:[e.jsx(m,{src:"/assets/icon/checked.svg",alt:"",className:"w-16"}),e.jsx("div",{className:"pt-3 exchange-money-text-black",children:o.successfully_submitted()}),e.jsx("div",{className:"pt-3 text-[var(--text-content-color)] text-sm text-center",children:o.funds_be_deposited()}),e.jsx("div",{className:"text-[var(--text-content-color)] text-sm text-center",children:o.please_go_check()})]})]})})]}):e.jsx(ce,{className:"grow h-screen"})})})}export{as as ExchangeMoneyView};