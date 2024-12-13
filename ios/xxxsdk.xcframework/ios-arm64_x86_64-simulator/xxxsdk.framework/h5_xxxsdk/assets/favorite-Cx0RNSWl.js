import{u as B,S as J,aJ as Q,r as h,b2 as Y,ag as n,T as i,b_ as K,a$ as W,E as b,j as s,N as X,al as Z,H as w,aA as ee,C as se,f as ae,M as v,c_ as T,c$ as S,d0 as G,d1 as E}from"./index-BRyeyo8a.js";function re(){const C=B(),_=new J(C.search),{i18n:{language:j}}=Q(),[I,y]=h.useState(!1),[t,F]=h.useState(_.findNumber("tab",0)),r=Y().map(o=>({value:o.type,name:o.type==n.ALL?i.all():o.name})),{getGameByCate:R,games:V,getGames:A,getProviders:O,getGameLivePair:M,favs:k,clearFav:P}=K(),U=W({showChat:!1}),l=h.useMemo(()=>{var g;const o=((g=b.getInstance().getLang(j))==null?void 0:g.verticalCategories)??[],c=[];for(const a of o){const e=U.find(u=>u.type==a);e&&c.push({...e,games:R(e.code,{favorite:!0})})}const d=[];c.map(a=>{d.push(a.code)});const p=(c||[]).slice();return d.map(a=>{var e,u;if((e=b.getInstance().getLang(j))!=null&&e[a]){const D=(u=b.getInstance().getLang(j))==null?void 0:u[a];let L=0;const m=p.find((f,x)=>f.code===a?(L=x,!0):!1);if(m){const f=(m==null?void 0:m.games.slice())||[];let x=[];D.map($=>{m==null||m.games.slice().map((N,te)=>{if(N.gameId===$){const q=f.indexOf(N);f.splice(q,1),x.push(N)}})}),x=[...x,...f],p[L].games=x}}}),c},[V,C.search,j,k]),H=()=>{var c,d,p,g,a;const o=((c=l.find(e=>e.type==r[t].value))==null?void 0:c.games)??[];return l.every(e=>e.games.length==0)||t>0&&o.length==0?s.jsxs("div",{className:"flex-center flex-col pt-32",children:[s.jsx(se,{src:"/assets/img/no_record.png",className:"w-[100px] ml-5",alt:""}),s.jsx("div",{className:"pt-6 text-[var(--text-not-found)] font-light text-sm",children:i.no_record_found()}),s.jsx("button",{onClick:()=>w.navigate(ae.home,{replace:!0}),className:"w-4/5 bg-[var(--active)] rounded-md py-2 text-black uppercase text-xl font-semibold mt-12",children:i.game_lobby()})]}):t==0?l.map((e,u)=>e.games.length==0?s.jsx(h.Fragment,{},e.type):(e.expandClass,e.code=="future"?s.jsxs("div",{className:"py-3",children:[s.jsxs("div",{className:"flex items-center gap-x-1 mb-2",children:[s.jsx(v,{name:e.icon,color:"var(--cate-icon-color)",className:"h-4 min-w-4 !max-w-6 mr-1"}),s.jsx("h2",{className:"font-bold text-[17px] text-[var(--cate-color)] uppercase",children:e.name})]}),s.jsx(T,{games:e.games})]},e.code):e.code=="live"?s.jsxs("div",{className:"py-3",children:[s.jsxs("div",{className:"flex items-center gap-x-1 mb-2",children:[s.jsx(v,{name:e.icon,color:"var(--cate-icon-color)",className:"h-4 min-w-4 !max-w-6 mr-1"}),s.jsx("h2",{className:"font-bold text-[17px] text-[var(--cate-color)] uppercase",children:e.name})]}),s.jsx(S,{games:e.games})]},e.code):e.code=="lottery"?s.jsxs("div",{className:"py-3",children:[s.jsxs("div",{className:"flex items-center gap-x-1 mb-2",children:[s.jsx(v,{name:e.icon,color:"var(--cate-icon-color)",className:"h-4 min-w-4 !max-w-6 mr-1"}),s.jsx("h2",{className:"font-bold text-[17px] text-[var(--cate-color)] uppercase",children:e.name})]}),s.jsx(G,{games:e.games,type:n.LOTTERY})]},e.code):e.code=="sport"?s.jsxs("div",{className:"py-3",children:[s.jsxs("div",{className:"flex items-center gap-x-1 mb-2",children:[s.jsx(v,{name:e.icon,color:"var(--cate-icon-color)",className:"h-4 min-w-4 !max-w-6 mr-1"}),s.jsx("h2",{className:"font-bold text-[17px] text-[var(--cate-color)] uppercase",children:e.name})]}),s.jsx(E,{games:e.games})]},e.code):s.jsxs("div",{className:"py-3",children:[s.jsxs("div",{className:"flex items-center gap-x-1 mb-2",children:[s.jsx(v,{name:e.icon,color:"var(--cate-icon-color)",className:"h-4 min-w-4 !max-w-6 mr-1"}),s.jsx("h2",{className:"font-bold text-[17px] text-[var(--cate-color)] uppercase",children:e.name})]}),s.jsx(G,{games:e.games,type:e.type})]},e.code))):r[t].value==n.FUTURE?s.jsx(T,{games:((d=l.find(e=>e.type==n.FUTURE))==null?void 0:d.games)??[]}):r[t].value==n.LIVE?s.jsx(S,{games:((p=l.find(e=>e.type==n.LIVE))==null?void 0:p.games)??[]}):r[t].value==n.SPORTS?s.jsx(E,{games:((g=l.find(e=>e.type==n.SPORTS))==null?void 0:g.games)??[]}):s.jsx(G,{games:((a=l.find(e=>e.type==r[t].value))==null?void 0:a.games)??[],type:r[t].value})},z=()=>{P(),w.showToast(i.clear_successfully()),y(!1)};return h.useEffect(()=>{A(),O(),M()},[]),s.jsx(X,{title:i.my_collection(),className:"max-w-[800px] mx-auto",tabEl:s.jsx(Z,{onChange:F,selected:t,tabs:r,className:"px-2 sticky top-0",selectedItemClassName:"text-[]"}),rightEl:s.jsx("div",{className:"text-[var(--arrow-color)] font-light text-sm",onClick:()=>y(w.getFavGame().length>0),children:i.cancel_all()}),children:s.jsxs("div",{className:"p-3 pt-2",children:[s.jsx(H,{}),s.jsx(ee,{content:i.clear_everything(),onClose:()=>y(!1),onConfirm:z,open:I})]})})}export{re as FavoriteGames};