import{j as e,r as u,i as q,b as G,h as J,g,V as K,a8 as o,T as t,H as h,R as v,l as Q,M as j,ai as y}from"./index.sdk-0.0.1.js";import{A as X}from"./button.js";import{N as Z}from"./normal-layout.js";import{C as ee,L as se}from"./popover.js";import{g as te}from"./common.js";import{g as f,a as ce}from"./agent2.js";import{a as re,y as ae,p as ne,b as ie}from"./controller2.js";import"./main-layout.js";import"./lazy-load-component.js";import"./Modal.js";function B({name:m,color:n,highlightColor:x,size:l}){return m=="commission_detail"?e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 47.7 55.7",style:{height:l*55.7/47.7,width:l},children:[e.jsx("rect",{fill:n,x:"9.8",y:"11.1",width:"24.7",height:"4"}),e.jsx("rect",{fill:n,x:"9.8",y:"20.5",width:"11.8",height:"4"}),e.jsx("path",{fill:x,d:`M33.7,55.7c-7.7,0-14-6.3-14-14s6.3-14,14-14s14,6.3,14,14S41.4,55.7,33.7,55.7z M33.7,31.7
	c-5.5,0-10,4.5-10,10s4.5,10,10,10s10-4.5,10-10S39.2,31.7,33.7,31.7z`}),e.jsx("path",{fill:x,d:`M36.3,41.2c-0.4-0.2-0.9-0.4-1.5-0.6v-3.9c0.1,0,0.2,0.1,0.3,0.1c0.5,0.3,1,0.7,1.3,1.2l0.3,0.4l2-1.4l-0.3-0.4
	c-0.5-0.8-1.2-1.5-2.1-2c-0.5-0.3-1-0.5-1.6-0.6v-1.6h-2.6V34c-0.5,0.1-1,0.2-1.4,0.4C30,34.8,29.4,35.4,29,36
	c-0.5,0.7-0.7,1.4-0.7,2.3c0,0.9,0.2,1.7,0.7,2.3c0.5,0.6,1,1,1.7,1.3c0.4,0.2,1,0.4,1.6,0.6v4.1c-0.2-0.1-0.5-0.2-0.7-0.3
	c-0.6-0.3-1-0.8-1.4-1.4l-0.3-0.5l-2.1,1.5l0.2,0.4c0.5,0.9,1.3,1.6,2.3,2.2c0.6,0.3,1.3,0.5,1.9,0.7v1.4h2.6v-1.4
	c0.5-0.1,0.9-0.2,1.3-0.4c0.8-0.4,1.4-0.9,1.9-1.5c0.4-0.7,0.7-1.4,0.7-2.3c0-1-0.2-1.8-0.7-2.4C37.6,41.9,37,41.5,36.3,41.2z
	 M30.9,38.2c0-0.3,0.1-0.6,0.3-0.8c0.2-0.3,0.5-0.5,0.9-0.7c0,0,0.1,0,0.1-0.1v3.2c0,0-0.1,0-0.1,0c-0.4-0.2-0.7-0.4-1-0.7
	C31,38.9,30.9,38.6,30.9,38.2z M36.1,44.9c0,0.5-0.2,0.9-0.7,1.3c-0.2,0.1-0.4,0.2-0.6,0.3v-3.2c0.4,0.2,0.7,0.4,0.9,0.6
	C36,44.2,36.1,44.5,36.1,44.9z`}),e.jsx("path",{fill:n,d:`M19.7,49.9H4V4h36.5v22.8h4V2.7c0-1.5-1.2-2.7-2.7-2.7H2.7C1.2,0,0,1.2,0,2.7v48.5c0,1.5,1.2,2.7,2.7,2.7h17
	V49.9z`})]}):m=="commission_rate"?e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 57.9 58.2",style:{height:l*58.2/57.9,width:l},children:[e.jsx("path",{fill:n,d:`M26.8,58.2C12,58.2,0,46.1,0,31.4S12,4.6,26.8,4.6h2v24.8h24.8v2C53.6,46.1,41.6,58.2,26.8,58.2z M24.8,8.7
           C13.2,9.7,4,19.5,4,31.4c0,12.6,10.2,22.8,22.8,22.8c11.9,0,21.7-9.2,22.7-20.8H24.8V8.7z`}),e.jsx("path",{fill:x,d:"M57.9,25.6H32.3V0h2c13,0,23.6,10.6,23.6,23.6V25.6z M36.3,21.6h17.5C52.9,12.4,45.5,5,36.3,4.1V21.6z"})]}):m=="custom_service"?e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 53.8 50.5",style:{height:l*50.5/53.8,width:l},children:[e.jsx("path",{fill:n,d:`M53,23.5C49.3,9.8,39,0,26.9,0C14.8,0,4.5,9.8,0.8,23.5C-0.2,27-0.3,41.7,0.5,45v0c0.2,0.7,0.4,1.4,0.6,2.1
	c0.5,1.1,1.4,2,2.2,2.6c0.8,0.6,1.8,0.9,2.9,0.9H13c2.8,0,5.1-2.3,5.1-5.1v-11c0-2.8-2.3-5.1-5.1-5.1H6.2c-0.9,0-1.8,0.3-2.6,0.7
	c0.1-0.8,0.2-1.7,0.4-2.5c0.3-1.4,0.6-2.7,1-4C8.4,12.1,16.9,4,26.9,4c10,0,18.5,8.1,22,19.5c0.4,1.3,0.7,2.6,1,4
	c0.2,0.9,0.3,1.8,0.4,2.7c-0.8-0.6-1.9-1-3-1h-6.8c-2.8,0-5.1,2.3-5.1,5.1v11c0,2.8,2.3,5.1,5.1,5.1h6.8c1.2,0,2.3-0.4,3.2-1.1
	c0.8-0.6,1.7-1.4,2.2-2.4c0,0,0,0,0,0c0.2-0.5,0.3-1,0.4-1.5C54,42.1,54,27,53,23.5z M4.1,34.4c0-1.2,0.9-2.1,2.1-2.1H13
	c1.2,0,2.1,0.9,2.1,2.1v11c0,1.2-0.9,2.1-2.1,2.1H6.2c-0.3,0-0.6-0.1-0.8-0.2c-0.8-0.3-1.3-1.1-1.3-1.9V34.4z M49.4,45.4
	c0,0.7-0.3,1.3-0.9,1.7c-0.4,0.2-0.8,0.4-1.2,0.4h-6.8c-1.2,0-2.1-0.9-2.1-2.1v-11c0-1.2,1-2.1,2.1-2.1h6.8c1.2,0,2.1,0.9,2.1,2.1
	V45.4z`}),e.jsx("path",{fill:x,d:`M42.1,27.1c0,0-0.1,0-0.1,0c-1.1-0.1-1.9-1-1.9-2.1c0.4-7.1-4-8.9-4.2-9c-1-0.4-1.6-1.5-1.2-2.6
	c0.4-1,1.5-1.6,2.5-1.2c0.3,0.1,7.5,2.7,6.9,13C44.1,26.2,43.2,27.1,42.1,27.1z`})]}):m=="invite_code"?e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 56.8 44.7",style:{height:l*44.7/56.8,width:l},children:[e.jsx("path",{fill:n,d:"M56.8,44.7H0V0h56.8V44.7z M4,40.7h48.8V4H4V40.7z"}),e.jsx("path",{fill:n,d:`M24.4,23.5c1.2-1.2,2-2.9,2-4.7c0-3.6-2.9-6.6-6.6-6.6c-3.6,0-6.6,3-6.6,6.6c0,1.9,0.8,3.6,2.1,4.8
	c-3,1.8-5.1,5.2-5.1,9.2h4c0-3.5,2.6-6.4,5.8-6.4s5.8,2.9,5.8,6.4h4C29.8,28.7,27.6,25.2,24.4,23.5z M19.9,15.2c2,0,3.6,1.6,3.6,3.6
	s-1.6,3.6-3.6,3.6s-3.6-1.6-3.6-3.6S17.9,15.2,19.9,15.2z`}),e.jsx("rect",{fill:x,x:"34.9",y:"16.3",width:"8.8",height:"4"}),e.jsx("rect",{fill:x,x:"34.9",y:"25.3",width:"12.9",height:"4"})]}):m=="invite_rule"?e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 56.2 44.6",style:{height:l*44.6/56.2,width:l},children:[e.jsx("path",{fill:n,d:`M0,0v40.2h19.7l7.9,4.2c0.5,0.3,1,0.3,1.5,0l8.1-4.2h19V0H35.7l-6.6,4.7C28.7,5,28,5,27.6,4.7L21,0H0z M4,4
	h14.2l7.9,5.3V39l-5-2.8H4V4z M52.2,36.2H35.4L30.1,39V9.3L37.9,4h14.3V36.2z`}),e.jsx("rect",{x:"8.7",y:"12.3",fill:x,width:"12.8",height:"4"}),e.jsx("rect",{x:"8.7",y:"21.5",fill:n,width:"12.8",height:"4"}),e.jsx("rect",{x:"35.1",y:"12.3",fill:n,width:"12.8",height:"4"}),e.jsx("rect",{x:"35.1",y:"21.5",fill:x,width:"12.8",height:"4"})]}):e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 46.8 54.4",style:{height:l*54.4/46.8,width:l},children:[e.jsx("rect",{x:"9.8",y:"11.1",fill:n,width:"24.7",height:"4"}),e.jsx("rect",{x:"9.8",y:"20.4",fill:n,width:"24.7",height:"4"}),e.jsx("rect",{x:"9.8",y:"29.7",fill:n,width:"11.8",height:"4"}),e.jsx("path",{fill:n,d:`M19.2,49.9H3.9V4h35.5v22.8h3.9V2.7c0-1.5-1.2-2.7-2.6-2.7H2.6C1.2,0,0,1.2,0,2.7v48.5c0,1.5,1.2,2.7,2.6,2.7
	h16.6V49.9z`}),e.jsx("path",{fill:x,d:`M39.8,43.8c2-1.6,3.2-4,3.2-6.7c0-4.7-3.8-8.6-8.6-8.6s-8.6,3.8-8.6,8.6c0,2.7,1.3,5.1,3.2,6.7
	c-4.1,1.9-7,5.9-7,10.6h4c0-4.3,3.7-7.8,8.3-7.8s8.3,3.5,8.3,7.8h4C46.8,49.7,43.9,45.7,39.8,43.8z M34.5,32.5c2.5,0,4.6,2,4.6,4.6
	s-2,4.6-4.6,4.6s-4.6-2-4.6-4.6S32,32.5,34.5,32.5z`})]})}function je(){var M,V,S,H,k,R,T,z;const m=te(),[n,x]=u.useState(1),{companyConf:l}=q(),{extInfo:a}=G(J),[r,N]=g(re),[p,D]=g(ae),[i,b]=g(ne),A=K(),[w,_]=g(ie),C=u.useRef(0),L=u.useMemo(()=>{const s=((p==null?void 0:p.busDayReportDl)??[]).map(c=>({currency:c.currency,amount:c.dlDayWage+c.dlBonuus}));return o.convertToSystemCurrency(s)},[A,p]),I=()=>{const s=((r==null?void 0:r.rwReports)??[]).map(c=>({currency:c.currency,amount:c.directRechargeSum}));return o.convertToSystemCurrency(s)},E=()=>{const s=((r==null?void 0:r.rwReports)??[]).map(c=>({currency:c.currency,amount:c.rechMoney}));return o.convertToSystemCurrency(s)},U=()=>{const s=((i==null?void 0:i.rwReports)??[]).map(c=>({currency:c.currency,amount:c.rechMoney}));return o.convertToSystemCurrency(s)},F=()=>{const s=((i==null?void 0:i.busDayReportDl)??[]).map(c=>({currency:c.currency,amount:c.liveBetReport.bettingMoney+c.ftBetReport.bettingMoney+c.cpBetReport.bettingMoney}));return o.convertToSystemCurrency(s)},P=()=>{const s=((i==null?void 0:i.busDayReportDl)??[]).map(c=>({currency:c.currency,amount:c.dlDayWage+c.dlBonuus}));return o.convertToSystemCurrency(s)},W=()=>{var s;(s=window.open(l.olUrl,"_blank"))==null||s.focus()},O=[{name:t.subordinate_data(),icon:"subordinate_data",onClick:()=>h.navigate(v.agentSubordinateData)},{name:t.commission_details(),icon:"commission_detail",onClick:()=>h.navigate(v.agentCommissionDetails)},{name:t.invitation_rules(),icon:"invite_rule",onClick:()=>h.navigate(v.agentInvitationRules)},{name:t.agent_customer_service(),icon:"custom_service",onClick:W},{name:t.commission_rate(),icon:"commission_rate",onClick:()=>h.navigate(v.agentCommissionDescription)}],Y=async()=>{f({userId:a.userId}).then(d=>N(d));const s=new Date;s.setDate(s.getDate()-1),s.setHours(23,59,59,999);const c=new Date;c.setDate(c.getDate()-1),c.setHours(0,0,0,0),f({userId:a.userId,beginDate:y(c),endDate:y(s)}).then(d=>D(d)),ce(a.userId).then(d=>_(d))},$=async()=>{const s=new Date;s.setHours(23,59,59,999);const c=new Date;c.setDate(c.getDate()-n+1),c.setHours(0,0,0,0),f({userId:a.userId,beginDate:y(c),endDate:y(s)}).then(d=>{n==1&&(C.current=(d==null?void 0:d.registCount)??0),b(d)})};return u.useEffect(()=>{if(!(a!=null&&a.userId)){b(null);return}$()},[n,a==null?void 0:a.userId]),u.useEffect(()=>{if(!(a!=null&&a.userId)){N(null),_([]);return}Y()},[a==null?void 0:a.userId]),e.jsx(Z,{onBack:()=>h.navigate(v.home),title:t.agent_center(),rightEl:e.jsxs("div",{onClick:()=>h.navigate(v.agentNewSubordinates),className:"relative w-9 h-9 circle bg-[var(--agent-new-sub-bg)] flex-center",children:[e.jsx(Q,{src:"/assets/icon/agent/ic_group_add.png",className:"w-[22px] h-[22px]",alt:""}),e.jsx("span",{className:"absolute bg-[#ff4200] circle w-5 h-5 top-[-0.4rem] right-[-0.4rem] flex-center leading-none pt-0.5 text-white",children:C.current??0})]}),className:"agent-bg",headerClasses:"agent-header",contentClassName:"!bg-transparent",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col items-center justify-center pt-3",children:[e.jsxs("div",{className:"relative text-[#e9ffa7] text-3xl font-semibold",children:[L,e.jsx("span",{className:"absolute text-base font-normal top-0 right-0 translate-x-[105%] text-[#eeeeee]",children:(M=o.defaultCurrency)==null?void 0:M.currency})]}),e.jsx("div",{className:"text-center text-[#d7e1b7]",children:t.yesterday_total_commission()}),e.jsx("div",{className:"text-center text-[#a4c442] text-sm font-light",children:t.upgrade_to_increase_commission_income()})]}),e.jsxs("div",{className:"px-3 pt-4 text-sm ",children:[e.jsxs("div",{className:"rounded-lg bg-[var(--agent-overview-bg)]  text-[#fff9]",children:[e.jsxs("div",{className:"flex py-1.5",children:[e.jsx("div",{className:"w-1/2 text-center",children:t.direct_subordinates()}),e.jsx("div",{className:" w-[1px] bg-[#00000010]"}),e.jsx("div",{className:"w-1/2 text-center",children:t.team_subordinates()})]}),e.jsxs("div",{className:"rounded-lg bg-[var(--box-bg)] text-[#8f8f96] flex py-2 items-stretch text-sm",children:[e.jsxs("div",{className:"grow w-1/2 relative px-3",children:[e.jsxs("div",{className:"pb-2",children:[e.jsx("div",{children:t.number_of_registrations()}),e.jsxs("div",{className:"text-[var(--text-color)] text-xl ",children:[(r==null?void 0:r.directRegistCount)??0," ",e.jsx("span",{className:"text-xs text-[#57585d]",children:t.people()})]})]}),e.jsx("div",{className:"h-[1px] w-full bg-[var(--box-separator)]"}),e.jsxs("div",{className:"py-2",children:[e.jsx("div",{children:t.number_of_depositors()}),e.jsxs("div",{className:"text-[var(--text-color)] text-xl ",children:[(r==null?void 0:r.directRechargeUserCount)??0," ",e.jsx("span",{className:"text-xs text-[#57585d]",children:t.people()})]})]}),e.jsx("div",{className:"h-[1px] w-full bg-[var(--box-separator)]"}),e.jsxs("div",{className:"py-2",children:[e.jsx("div",{children:t.deposit_amount()}),e.jsxs("div",{className:"text-[var(--text-color)] text-xl ",children:[I()," ",e.jsx("span",{className:"text-xs text-[#57585d]",children:(V=o.defaultCurrency)==null?void 0:V.currency})]})]}),e.jsx("div",{className:"h-[1px] w-full bg-[var(--box-separator)]"}),e.jsxs("div",{className:"pt-2",children:[e.jsx("div",{children:t.number_of_first_time_depositors()}),e.jsxs("div",{className:"text-[var(--text-color)] text-xl ",children:[(r==null?void 0:r.directFirstRechargeUserCount)??0," ",e.jsx("span",{className:"text-xs text-[#57585d]",children:t.people()})]})]}),e.jsx("div",{className:"h-full w-[1px] bg-[var(--box-separator)] absolute top-0 right-0"})]}),e.jsxs("div",{className:"grow w-1/2 px-3",children:[e.jsxs("div",{className:"pb-2",children:[e.jsx("div",{children:t.number_of_registrations()}),e.jsxs("div",{className:"text-[var(--text-color)] text-xl ",children:[(r==null?void 0:r.registCount)??0," ",e.jsx("span",{className:"text-xs text-[#57585d]",children:t.people()})]})]}),e.jsx("div",{className:"h-[1px] w-full bg-[var(--box-separator)]"}),e.jsxs("div",{className:"py-2",children:[e.jsx("div",{children:t.number_of_depositors()}),e.jsxs("div",{className:"text-[var(--text-color)] text-xl ",children:[(r==null?void 0:r.rechargeUserCount)??0," ",e.jsx("span",{className:"text-xs text-[#57585d]",children:t.people()})]})]}),e.jsx("div",{className:"h-[1px] w-full bg-[var(--box-separator)]"}),e.jsxs("div",{className:"py-2",children:[e.jsx("div",{children:t.deposit_amount()}),e.jsxs("div",{className:"text-[var(--text-color)] text-xl ",children:[E()," ",e.jsx("span",{className:"text-xs text-[#57585d]",children:(S=o.defaultCurrency)==null?void 0:S.currency})]})]}),e.jsx("div",{className:"h-[1px] w-full bg-[var(--box-separator)]"}),e.jsxs("div",{className:"pt-2",children:[e.jsx("div",{children:t.number_of_first_time_depositors()}),e.jsxs("div",{className:"text-[var(--text-color)] text-xl ",children:[(r==null?void 0:r.firstRechargeUserCount)??0," ",e.jsx("span",{className:"text-xs text-[#57585d]",children:t.people()})]})]})]})]})]}),e.jsx("div",{className:"py-4 px-5",children:e.jsx(X,{title:t.invite_link(),onClick:()=>h.navigate(v.agentInvite)})}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{onClick:()=>{var s;a!=null&&a.userId&&h.copy(((s=w[0])==null?void 0:s.code)??"")},className:"rounded-lg p-3 bg-[var(--box-bg)] var(--text-color) text-base flex items-center gap-3",children:[e.jsx(B,{size:22,color:"#C6C5C8",highlightColor:"var(--active)",name:"invite_code"}),e.jsx("span",{children:t.invitation_code()}),e.jsx("span",{className:"grow"}),e.jsx("span",{className:"text-[var(--active)] text-lg",children:(H=w[0])==null?void 0:H.code}),(a==null?void 0:a.userId)&&e.jsx(j,{color:"var(--text-color)",name:"ic_copy_plus",className:"w-4 h-4"})]}),O.map((s,c)=>e.jsxs("div",{onClick:s.onClick,className:"rounded-lg p-3 bg-[var(--box-bg)] var(--text-color) text-base flex items-center gap-3",children:[e.jsx(B,{size:22,color:"#C6C5C8",highlightColor:"var(--active)",name:s.icon}),e.jsx("span",{children:s.name}),e.jsx("span",{className:"grow"}),e.jsx(j,{color:"var(--text-color)",name:"ic_chevon_right",className:"w-3 h-3"})]},c))]}),e.jsxs("section",{className:"pt-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"uppercase font-semibold text-lg",children:t.proxy_data()}),e.jsx(ee,{actionELClassName:"flex item-center gap-2 text-xs text-[var(--text-content-color)]",className:"anchor-arrow-top-right",actionEL:e.jsx(e.Fragment,{children:e.jsxs("span",{className:"flex items-center gap-2 text-xs text-[var(--text-content-color)] px-3 bg-[var(--box-bg)] rounded-full py-1",children:[(k=m.find(s=>s.value==n))==null?void 0:k.name," ",e.jsx(j,{color:"#4b4b52",name:"ic_arrow_down",className:"w-2 h-2 "})]})}),children:m.map(s=>e.jsxs("div",{className:"flex items-center justify-between px-4 py-2",onClick:()=>x(s.value),children:[e.jsx("span",{className:`${s.value==n?"text-[var(--active)] font-semibold":"var(--text-color)"}`,children:s.name}),s.value==n&&e.jsx(j,{color:"var(--active)",name:"ic_tick",className:"w-3.5 h-4"})]},s.name))})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 py-2",children:[e.jsxs("div",{className:"rounded-md bg-[var(--box-bg)] p-3",children:[e.jsx("div",{className:"text-[var(--text-content-color)] text-sm",children:t.team_size()}),e.jsxs("div",{className:"text-xs text-[var(--text-content-color)]",children:[e.jsx("span",{className:"text-lg var(--text-color)",children:i==null?void 0:i.teamCount})," ",t.people()]})]}),e.jsxs("div",{className:"rounded-md bg-[var(--box-bg)] p-3",children:[e.jsx("div",{className:"text-[var(--text-content-color)] text-sm",children:t.team_recharge()}),e.jsxs("div",{className:"text-xs text-[var(--text-content-color)]",children:[e.jsx("span",{className:"text-lg var(--text-color)",children:U()})," ",(R=o.defaultCurrency)==null?void 0:R.currency]})]}),e.jsxs("div",{className:"rounded-md bg-[var(--box-bg)] p-3",children:[e.jsx("div",{className:"text-[var(--text-content-color)] text-sm",children:t.direct_member()}),e.jsxs("div",{className:"text-xs text-[var(--text-content-color)]",children:[e.jsx("span",{className:"text-lg var(--text-color)",children:i==null?void 0:i.directCount})," ",t.people()]})]}),e.jsxs("div",{className:"rounded-md bg-[var(--box-bg)] p-3",children:[e.jsx("div",{className:"text-[var(--text-content-color)] text-sm",children:t.team_betting()}),e.jsxs("div",{className:"text-xs text-[var(--text-content-color)]",children:[e.jsx("span",{className:"text-lg var(--text-color)",children:F()})," ",(T=o.defaultCurrency)==null?void 0:T.currency]})]}),e.jsxs("div",{className:"rounded-md bg-[var(--box-bg)] p-3 col-span-2",children:[e.jsx("div",{className:"text-[var(--text-content-color)] text-sm",children:t.commission_income()}),e.jsxs("div",{className:"text-xs text-[var(--text-content-color)]",children:[e.jsx("span",{className:"text-lg var(--text-color)",children:P()})," ",(z=o.defaultCurrency)==null?void 0:z.currency]})]})]})]}),e.jsx(se,{className:"mx-auto mb-12 mt-12 w-[150px]",index:"3"})]})]})})}export{je as AgentCenterView};