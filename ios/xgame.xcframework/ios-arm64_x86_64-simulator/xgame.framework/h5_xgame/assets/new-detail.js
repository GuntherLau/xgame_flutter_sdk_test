import{a as x,S as d,a2 as p,r as o,j as e,T as s,M as f,l as h,H as r}from"./index.sdk-0.0.1.js";import{N as u}from"./normal-layout.js";import{a as N,r as j}from"./news2.js";import{S as v}from"./modals.js";import"./main-layout.js";import"./popover.js";import"./Modal.js";import"./lazy-load-component.js";function I(){const l=x(),n=new d(l.search),t=JSON.parse(p(n.findString("key",""))),[c,a]=o.useState(!1),[w,i]=o.useState(!1),m=async()=>{try{await j(t.id)}catch{}finally{i(!1),a(!1),r.showToast(s.successfully_deleted()),r.navigate(-1)}};return o.useEffect(()=>{N(t.id)},[]),e.jsx(u,{title:s.news_detail(),className:"max-w-[800px] mx-auto ",rightEl:e.jsx(f,{onClick:()=>a(!0),color:"var(--arrow-color)",name:"ic_delete2",className:" w-4 h-5"}),children:e.jsxs("div",{className:" p-3 ",children:[t?e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-xl font-semibold text-[var(--text-color)]",children:t.messageTitle}),e.jsx("div",{className:"py-3 text-xs text-[var(--text-color)]",children:t.addTime}),e.jsx("p",{className:"text-[var(--text-content-color)] text-sm mt-3",children:t.messageContent}),e.jsx("div",{className:"text-end text-[var(--text-content-color)] mt-3",children:"X.GAME"})]}):e.jsxs("div",{className:"flex flex-col items-center justify-center pt-16",children:[e.jsx(h,{src:"/assets/img/no_record.png",className:"w-[100px] ml-5",alt:""}),e.jsx("div",{className:"text-[#3d3d44] text-sm py-8",children:s.no_record_found()})]}),e.jsx(v,{content:s.delete_noti(),onClose:()=>a(!1),onConfirm:m,open:c})]})})}export{I as NewDetailView};