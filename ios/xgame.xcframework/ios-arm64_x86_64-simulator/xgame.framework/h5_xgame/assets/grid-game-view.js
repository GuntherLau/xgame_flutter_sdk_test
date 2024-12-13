import{j as e,i as I,b as j,r as L,u as F}from"./index.sdk-0.0.1.js";import{b as y,C as U,P as w,G as P}from"./game-widget.js";import{a as h,m as R}from"./mqtt-controller.js";import{P as v,C as S}from"./current-not-support-modal.js";import{getAllGameCategories as x}from"./home-layout.js";function W({games:d}){const{closeModalCurrentSupport:m,handlePlay3rdGame:c,thirdGameUrl:o,currentGameRef:i,supportCurrentGameListCurrency:t,isShowModalCurrentSupport:l,currentGame:p,favs:u,setFav:g,setThirdGameUrl:C,currentGameScreenLanscapeModeRef:G}=h();return e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 pc:grid-cols-3 gap-2",children:[d.map(r=>e.jsx(y,{name:"",onClick:()=>c(r),loading:p==r.gameId,game:r,isFav:u.includes(r.gameId),setIsFav:g},r.gameId)),e.jsx(v,{gameId:i.current,isLandscapeMode:G.current,gameUrl:o,onClose:()=>C(""),open:!!o}),e.jsx(S,{supportCurrentGameListCurrency:t,onClose:()=>m(),open:l})]})}function _({games:d}){const{appSetting:{showChat:m}}=I(),{closeModalCurrentSupport:c,handlePlay3rdGame:o,thirdGameUrl:i,currentGameRef:t,supportCurrentGameListCurrency:l,isShowModalCurrentSupport:p,currentGame:u,favs:g,setFav:C,setThirdGameUrl:G,setGameLivePair:r,gameLivePair:f,currentGameScreenLanscapeModeRef:s}=h(),a=j(R);return L.useEffect(()=>{var n;a&&((n=a==null?void 0:a.data)==null?void 0:n.length)>0&&r(a.data)},[a]),e.jsxs("div",{className:`grid gap-2 ${m?"grid-cols-2 md:grid-cols-3 pcM_min:grid-cols-4":"grid-cols-2 md:grid-cols-4 pc:grid-cols-4"}`,children:[d.flatMap(n=>f.filter(M=>M.pair==n.gameCode).map(M=>e.jsx(U,{game:n,name:n.gameName,onClick:()=>o(n),loading:u===n.gameId,future:M,isExpand:!0,isFav:g.includes(n.gameId),setIsFav:C},n.gameId))),e.jsx(v,{gameId:t.current,isLandscapeMode:s.current,gameUrl:i,onClose:()=>G(""),open:!!i}),e.jsx(S,{supportCurrentGameListCurrency:l,onClose:()=>c(),open:p})]})}function b({games:d}){const{i18n:{language:m}}=F(),{appSetting:{showChat:c}}=I(),{closeModalCurrentSupport:o,handlePlay3rdGame:i,thirdGameUrl:t,currentGameRef:l,supportCurrentGameListCurrency:p,isShowModalCurrentSupport:u,currentGame:g,favs:C,setFav:G,setThirdGameUrl:r,currentGameScreenLanscapeModeRef:f}=h();return e.jsxs("div",{className:`grid grid-cols-1 pcM_min:grid-cols-2 gap-2 ${c?"md:grid-cols-2 pc:grid-cols-2":""}`,children:[d.map(s=>e.jsx(w,{item:s,onClick:()=>i(s),loading:g==s.gameId,isExpand:!0,lang:m,isFav:C.includes(s.gameId),setIsFav:G},s.gameId)),e.jsx(v,{gameId:l.current,isLandscapeMode:f.current,gameUrl:t,onClose:()=>r(""),open:!!t}),e.jsx(S,{supportCurrentGameListCurrency:p,onClose:()=>o(),open:u})]})}function O({games:d,type:m}){const{appSetting:{showChat:c}}=I(),{closeModalCurrentSupport:o,handlePlay3rdGame:i,thirdGameUrl:t,currentGameRef:l,supportCurrentGameListCurrency:p,isShowModalCurrentSupport:u,currentGame:g,favs:C,setFav:G,setThirdGameUrl:r,currentGameScreenLanscapeModeRef:f}=h(),s=x({showChat:c}).find(a=>a.type==m);return e.jsxs("div",{className:s==null?void 0:s.expandClass,children:[d.map(a=>e.jsx(P,{name:"",onClick:()=>i(a),loading:g==a.gameId,isExpand:!0,game:a,isFav:C.includes(a.gameId),setIsFav:G},a.gameId)),e.jsx(v,{gameId:l.current,isLandscapeMode:f.current,gameUrl:t,onClose:()=>r(""),open:!!t}),e.jsx(S,{supportCurrentGameListCurrency:p,onClose:()=>o(),open:u})]})}export{W as C,_ as F,O,b as S};