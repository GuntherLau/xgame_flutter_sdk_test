import{H as i,j as e,l as g,T as p,M as n,b1 as x}from"./index.sdk-0.0.1.js";import{G as j}from"./game.dto.js";function _(a){return i.currentLang()=="zh"?i.getRemoteImgPath(a.imageUrl):i.getRemoteImgPath(a.enImageUrl??a.imageUrl)}function v(a){return i.currentLang()=="zh"?i.getRemoteImgPath(a.landscapeUrl??a.imageUrl):i.getRemoteImgPath(a.enLandscapeUrl??a.imageUrl)}function b({promotion:a,game:l,isExpand:t,loading:c,future:s,onClick:r,isFav:o,setIsFav:m}){var d,h;const f=N=>{N.stopPropagation(),m&&m(l.gameId)};return e.jsx(e.Fragment,{children:s&&e.jsxs("div",{className:`${t?"":"min-w-[180px]"} ${a?"mr-1.5":""} relative`,onClick:r,children:[e.jsxs("div",{className:`${a?"rounded-xl":" rounded-md"} w-full h-full p-3 rounded-md bg-[#333] bg-cover bg-[url('/assets/icon/bg_crypto.png')] relative`,children:[e.jsx(g,{src:s.change24h&&Number(s.change24h)>0?"/assets/icon/bg_crypto_green.png":"/assets/icon/bg_crypto_red.png",className:"absolute w-[calc(100%_-_1.5rem)] left-[0.75rem] top-[45%]",alt:""}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(g,{src:v(l),alt:"",className:"w-[40px]"}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xl font-bold text-white leading-none",children:l.gameName}),e.jsxs("div",{className:`text-lg leading-none ${s.change24h&&Number(s.change24h)==0?"":Number(s.change24h)>0?"text-[var(--long)]":"text-[var(--short)]"}`,children:[s.change24h&&Number(s.change24h)>0?"+":"",(d=Number(s.change24h))==null?void 0:d.toFixed(3),"%"]})]})]}),e.jsx("div",{className:`text-xl font-bold mt-2 ${s.change24h&&Number(s.change24h)==0?"":Number(s.change24h)>0?"text-[var(--long)]":"text-[var(--short)]"}`,children:(h=Number(s.price))==null?void 0:h.toFixed(2)}),e.jsxs("div",{className:"text-sm mt-2 overflow-hidden text-ellipsis whitespace-nowrap",children:[e.jsx("span",{className:"text-[#9696a0]",children:"24h Vol: "}),e.jsxs("span",{className:"text-[#e9c70e]",children:["$",s.vol24h]})]}),e.jsxs("div",{className:"text-sm overflow-hidden text-ellipsis whitespace-nowrap",children:[e.jsxs("span",{className:"text-[#9696a0]",children:[p.leverage(),": "]}),e.jsxs("span",{className:"text-[#e9c70e]",children:["x",s.maxLeverage]})]})]}),e.jsx(n,{color:"#white",name:"ic_spinner",className:`animate-spin w-10 h-10 absolute top-[calc(50%_-_1.25rem)] left-[calc(50%_-_1.25rem)] ${c?"":"hidden"}`}),e.jsx("div",{onClick:f,className:"absolute top-2 right-2 circle w-6 h-6 bg-[#ffffff40] flex-center",children:e.jsx(n,{color:"#ffffff",name:o?"ic_heart":"ic_heart_outline",className:"w-6 h-6"})})]})})}function C(a){const l=c=>{c.stopPropagation(),a.setIsFav&&a.setIsFav(a.game.gameId)};let t=.7596741344195519;return j.lottery==a.game.category&&(t=179/90),e.jsxs("div",{className:`${a.isExpand?"":"min-w-[125px]"} relative ${a.classNames??""}`,onClick:a.onClick,children:[e.jsx(x,{src:_(a.game),alt:"",className:"w-full rounded-xl",aspectRatio:t}),e.jsx(n,{color:"#white",name:"ic_spinner",className:`animate-spin w-10 h-10 absolute top-[calc(50%_-_1.25rem)] left-[calc(50%_-_1.25rem)] ${a.loading?"":"hidden"}`}),e.jsx("div",{onClick:l,className:"absolute top-2 right-2 circle w-6 h-6 bg-[#ffffff40] flex-center",children:e.jsx(n,{color:"#ffffff",name:a.isFav?"ic_heart":"ic_heart_outline",className:"w-6 h-6"})})]})}function I(a){const l=t=>{t.stopPropagation(),a.setIsFav&&a.setIsFav(a.game.gameId)};return e.jsxs("div",{className:"relative",onClick:a.onClick,children:[e.jsx(x,{aspectRatio:366/174,src:v(a.game),alt:"",className:"w-full h-full rounded-[14px] xs:rounded-md sm:rounded-[12px]"}),e.jsx(n,{color:"#white",name:"ic_spinner",className:`animate-spin w-10 h-10 absolute top-[calc(50%_-_1.25rem)] left-[calc(50%_-_1.25rem)] ${a.loading?"":"hidden"}`}),e.jsx("div",{onClick:l,className:"absolute top-2 right-2 circle w-6 h-6 bg-[#ffffff40] flex-center",children:e.jsx(n,{color:"#ffffff",name:a.isFav?"ic_heart":"ic_heart_outline",className:"w-6 h-6"})})]})}function $({loading:a,item:l,onClick:t,isExpand:c,lang:s,isFav:r,setIsFav:o}){let m=c?l.landscapeUrl:l.imageUrl;const f=c?366/174:270/179;s!="zh"&&(m=c?l.enLandscapeUrl:l.enImageUrl);const d=h=>{h.stopPropagation(),o(l.gameId)};return e.jsxs("div",{className:`${c?"":"w-[70%] max-w-[340px] xs_min:min-w-[270px] sm_min:min-w-[340px]"} relative`,onClick:t,children:[e.jsx(x,{aspectRatio:f,src:i.getRemoteImgPath(m),alt:"",className:"w-full rounded-[14px] xs:rounded-md sm:rounded-[12px]"}),e.jsx(n,{color:"#white",name:"ic_spinner",className:`animate-spin w-10 h-10 absolute top-[calc(50%_-_1.25rem)] left-[calc(50%_-_1.25rem)] ${a?"":"hidden"}`}),e.jsx("div",{onClick:d,className:"absolute top-2 right-2 circle w-6 h-6 bg-[#ffffff40] flex-center",children:e.jsx(n,{color:"#ffffff",name:r?"ic_heart":"ic_heart_outline",className:"w-6 h-6"})})]})}function k({item:a,isExpand:l,onClick:t,loading:c,collapseClasses:s=""}){return e.jsxs("div",{onClick:t,className:`${l?"":`${s||"w-[200px] min-w-[200px]"}`} pt-2 rounded-md bg-[var(--provider-bg)] flex flex-col items-center justify-center relative h-[76px]`,children:[e.jsx(g,{src:i.getRemoteImgPath(a.imageUrl),alt:"",className:"max-h-[32px]"}),e.jsxs("div",{className:"text-[var(--text-content-color)] mt-2",children:[a.gameCount," ",p.games()]}),e.jsx(n,{color:"#white",name:"ic_spinner",className:`animate-spin w-10 h-10 absolute top-[calc(50%_-_1.25rem)] left-[calc(50%_-_1.25rem)] ${c?"":"hidden"}`})]})}function P({game:a,onClick:l,isLoading:t,isFav:c,setIsFav:s}){const r=o=>{o.stopPropagation(),s(a.gameId)};return e.jsxs("div",{className:"relative min-w-56 aspect-[624/521]",onClick:()=>l(a),children:[e.jsx(x,{aspectRatio:624/521,src:_(a),alt:"",className:"rounded-lg w-full"}),e.jsx(n,{color:"#white",name:"ic_spinner",className:`animate-spin w-10 h-10 absolute top-[calc(50%_-_1.25rem)] left-[calc(50%_-_1.25rem)] ${t?"":"hidden"}`}),e.jsx("div",{onClick:r,className:"absolute top-2 right-2 circle w-6 h-6 bg-[#ffffff40] flex-center",children:e.jsx(n,{color:"#ffffff",name:c?"ic_heart":"ic_heart_outline",className:"w-6 h-6"})})]})}export{b as C,C as G,P as L,$ as P,k as a,I as b};
