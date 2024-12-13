import{r,an as n,j as e,T as t,l as c,H as o,R as i}from"./index.sdk-0.0.1.js";import{L as m}from"./popover.js";import{N as d}from"./normal-layout.js";import"./Modal.js";import"./main-layout.js";import"./lazy-load-component.js";function j(){const[l,x]=r.useState([]);return r.useEffect(()=>{n(`/sys-upload/data/json/dl_rebate_config.json?t=${new Date().getTime()}`).then(a=>x(a))},[]),e.jsx(d,{title:t.invitation_rules(),className:"max-w-[800px] mx-auto",hideRightEl:!0,children:e.jsxs("div",{className:"p-3",children:[e.jsx("h1",{className:"text-xl font-semibold",children:t.agent_rule_title()}),e.jsx("div",{className:"rounded-xl  bg-[var(--box-bg)] text-[var(--text-color)] p-3 text-sm mt-2",children:t.agent_rule1()}),e.jsx("div",{className:"rounded-xl  bg-[var(--box-bg)] text-[var(--text-color)] p-3 text-sm mt-2",children:t.agent_rule2()}),e.jsx("div",{className:"rounded-xl  bg-[var(--box-bg)] text-[var(--text-color)] p-3 text-sm mt-2",children:t.agent_rule3()}),e.jsx("div",{className:"rounded-xl  bg-[var(--box-bg)] text-[var(--text-color)] p-3 text-sm mt-2",children:t.agent_rule4()}),e.jsx("div",{className:"rounded-xl  bg-[var(--box-bg)] text-[var(--text-color)] p-3 text-sm mt-2",children:t.agent_rule5()}),e.jsxs("div",{className:"rounded-xl  bg-[var(--box-bg)] text-[var(--text-color)] pb-3 text-sm mt-2",children:[e.jsxs("div",{className:"flex bg-[var(--box-bg)] text-[#616068] font-light text-xs py-3",children:[e.jsx("span",{className:"w-1/4 text-center",children:t.agent_level()}),e.jsx("span",{className:"w-1/4 text-center",children:t.team_size()}),e.jsx("span",{className:"w-1/4 text-center",children:t.team_betting()}),e.jsx("span",{className:"w-1/4 text-center",children:t.team_recharge()})]}),l.map((a,s)=>e.jsxs("div",{className:`flex text-[var(--text-color)] text-base py-2 ${s%2==0?"bg-[var(--vip-rule2-bg)]":"bg-[var(--vip-rule1-bg)]"}`,children:[e.jsx("span",{className:"w-1/4 text-center realtive pl-3 flex items-center",children:e.jsx(c,{src:`/assets/icon/agent/lv${a.rebateLevel}.webp`,className:"h-5",alt:""})}),e.jsx("span",{className:"w-1/4 text-center",children:a.teamCount}),e.jsx("span",{className:"w-1/4 text-center",children:a.betAmount}),e.jsx("span",{className:"w-1/4 text-center",children:a.rechargeAmount})]},s))]}),e.jsxs("div",{className:"rounded-xl  bg-[var(--box-bg)] text-[var(--text-color)] p-3 text-sm mt-2",onClick:()=>o.navigate(i.agentCommissionDescription),children:[t.agent_rule6(),e.jsx("div",{className:"py-3",children:e.jsx("div",{className:"rounded-full bg-[var(--disable)] pb-[3px] w-4/5 mx-auto",children:e.jsxs("div",{className:"rounded-full bg-[var(--active)] p-2 pt-3 text-black uppercase text-lg font-bold text-center leading-none",children:[t.view_rebate_ratio()," ",">>"," "]})})})]}),e.jsx("div",{className:"rounded-xl  bg-[var(--box-bg)] text-[var(--text-color)] p-3 text-sm mt-2",children:t.agent_rule7()}),e.jsx("div",{className:"rounded-xl  bg-[var(--box-bg)] text-[var(--text-color)] p-3 text-sm mt-2",children:t.agent_rule8()}),e.jsx(m,{className:"mx-auto mb-10 mt-12 w-[150px]",index:"3"})]})})}export{j as InvitationRules};
