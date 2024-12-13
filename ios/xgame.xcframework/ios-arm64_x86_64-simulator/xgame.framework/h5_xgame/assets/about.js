import{a as j,S as p,i as g,b,be as N,r as v,j as e,T as n,l,aN as r,M as t,H as w}from"./index.sdk-0.0.1.js";import{N as u}from"./normal-layout.js";import{L as o}from"./popover.js";import"./main-layout.js";import"./lazy-load-component.js";import"./Modal.js";function E(){const d=j(),h=new p(d.search),{companyConf:s}=g(),i=b(N),x=i==null?void 0:i.noticeContent,c=(a,m)=>{a.stopPropagation(),w.copy(m)};return v.useEffect(()=>{var a;h.findString("contact","")=="true"&&((a=document.querySelector("#contact-facebook"))==null||a.scrollIntoView())},[]),e.jsx(u,{title:n.about_us(),className:"max-w-[800px] mx-auto ",hideRightEl:!0,children:e.jsxs("div",{className:" overflow-hidden overflow-y-auto hide-scrollbar h-full ",children:[e.jsxs("div",{className:"relative",children:[e.jsx(l,{src:"/assets/img/about_bg.png",alt:"",className:"w-full"}),e.jsx(o,{className:"w-[160px] absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]",index:"2"})]}),e.jsxs("div",{className:"p-3",children:[x&&e.jsx("div",{dangerouslySetInnerHTML:{__html:x??""}}),e.jsxs("div",{id:"contact-facebook",onClick:()=>r((s==null?void 0:s.facebook)??"","facebook"),className:"flex items-start gap-3 bg-[var(--box-bg)] rounded-lg pt-3 px-5 pb-4 mt-5",children:[e.jsx(l,{src:"/assets/dummy/facebook.png",alt:"",className:"w-9 h-9"}),e.jsxs("div",{className:"grow",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-[var(--text-label)]",children:"Facebook"}),e.jsx(t,{color:"var(--text-label)",name:"ic_chevon_right",className:"w-3 h-3"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{children:(s==null?void 0:s.facebook)??""}),e.jsx("span",{onClick:a=>c(a,(s==null?void 0:s.facebook)??""),children:e.jsx(t,{color:"var(--text-label)",name:"ic_copy3",className:"w-3.5 h-3.5"})})]})]})]}),e.jsxs("div",{onClick:()=>r((s==null?void 0:s.twitter)??"","twitter"),className:"flex items-start gap-3 bg-[var(--box-bg)] rounded-lg pt-3 px-5 pb-4 mt-3",children:[e.jsx(l,{src:"/assets/dummy/twitter.png",alt:"",className:"w-9 h-9"}),e.jsxs("div",{className:"grow",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-[var(--text-label)]",children:"X"}),e.jsx(t,{color:"var(--text-label)",name:"ic_chevon_right",className:"w-3 h-3"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{children:(s==null?void 0:s.twitter)??""}),e.jsx("span",{onClick:a=>c(a,(s==null?void 0:s.twitter)??""),children:e.jsx(t,{color:"#828284",name:"ic_copy3",className:"w-3.5 h-3.5"})})]})]})]}),e.jsxs("div",{onClick:()=>r((s==null?void 0:s.telegram)??"","telegram"),className:"flex items-start gap-3 bg-[var(--box-bg)] rounded-lg pt-3 px-5 pb-4 mt-3",children:[e.jsx(l,{src:"/assets/icon/telegram2.png",alt:"",className:"w-9 h-9"}),e.jsxs("div",{className:"grow",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-[var(--text-label)]",children:"Telegram"}),e.jsx(t,{color:"var(--text-label)",name:"ic_chevon_right",className:"w-3 h-3"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{children:(s==null?void 0:s.telegram)??""}),e.jsx("span",{onClick:a=>c(a,(s==null?void 0:s.telegram)??""),children:e.jsx(t,{color:"#828284",name:"ic_copy3",className:"w-3.5 h-3.5"})})]})]})]}),e.jsxs("div",{onClick:()=>r((s==null?void 0:s.whatsapp)??"","whatsapp"),className:"flex items-start gap-3 bg-[var(--box-bg)] rounded-lg pt-3 px-5 pb-4 mt-3",children:[e.jsx(l,{src:"/assets/icon/whatsapp.png",alt:"",className:"w-9 h-9"}),e.jsxs("div",{className:"grow",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-[var(--text-label)]",children:"Whatsapp"}),e.jsx(t,{color:"var(--text-label)",name:"ic_chevon_right",className:"w-3 h-3"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{children:(s==null?void 0:s.whatsapp)??""}),e.jsx("span",{onClick:a=>c(a,(s==null?void 0:s.whatsapp)??""),children:e.jsx(t,{color:"#828284",name:"ic_copy3",className:"w-3.5 h-3.5"})})]})]})]}),e.jsxs("div",{onClick:()=>r((s==null?void 0:s.phone)??"","call"),className:"flex items-start gap-3 bg-[var(--box-bg)] rounded-lg pt-3 px-5 pb-4 mt-3",children:[e.jsx(l,{src:"/assets/icon/ic_phone.png",alt:"",className:"w-9 h-9"}),e.jsxs("div",{className:"grow",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-[var(--text-label)]",children:n.mobile_phone()}),e.jsx(t,{color:"var(--text-label)",name:"ic_chevon_right",className:"w-3 h-3"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{children:(s==null?void 0:s.phone)??""}),e.jsx("span",{onClick:a=>c(a,(s==null?void 0:s.phone)??""),children:e.jsx(t,{color:"#828284",name:"ic_copy3",className:"w-3.5 h-3.5"})})]})]})]}),e.jsx(o,{className:"mx-auto mb-10 mt-12 w-[150px]",index:"3"})]})]})})}export{E as AboutUsView};