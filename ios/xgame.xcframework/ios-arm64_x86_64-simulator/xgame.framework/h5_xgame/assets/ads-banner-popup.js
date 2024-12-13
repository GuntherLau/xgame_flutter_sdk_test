import{r as w,j as e,b as U,aI as W,l as x,T as C,H as j,bn as E}from"./index.sdk-0.0.1.js";import{S as I,a as R}from"./swiper-react.js";import{C as _}from"./modals.js";import{A as T}from"./autoplay.js";import{E as $}from"./effect-coverflow.js";import{N}from"./no-record.js";/* empty css       */import"./Modal.js";function H({dataBanner:i,onChange:v,selected:l,tabs:y,className:p="",itemClassName:s="",selectedItemClassName:g=""}){const c=w.useRef(null),u=a=>{v(a),h(a)},h=a=>{var f;if(!c.current)return;let o=0;const r=c.current.children[a].clientWidth,d=((f=c.current.parentElement)==null?void 0:f.clientWidth)||0;for(let b=0;b<a;b++)o+=c.current.children[b].clientWidth;c.current.scrollTo({left:o-d/2+r/2,behavior:"smooth"})};return w.useEffect(()=>{h(l)},[l]),e.jsx("div",{ref:c,className:`flex pl-2 items-center justify-between ${p} overflow-x-auto hide-scrollbar w-full ads-container`,children:y.map((a,o)=>{var d;let r=`${l==o?"text-[var(--active)] border-b-2 border-b-[var(--active)]":"text-[#5f5f66]"} bg-transparent px-3 py-2 grow text-nowrap whitespace-nowrap capitalize`;return s&&(r=s,l==o&&(r+=` ${g}`)),e.jsx("div",{className:"pb-[3px] bg-[green] rounded-2xl mr-2",style:{backgroundImage:a!==l?"linear-gradient(to right, #6e7548, #aeb96a 70%, #7f8754 100%)":"linear-gradient(to right, #aeb96a, #aeb96a 70%, #aeb96a 100%)"},children:e.jsx("button",{onClick:()=>u(o),style:{height:"100%",padding:"2vw 3vw",width:"auto",display:"flex",justifyContent:"center",alignItems:"center",borderLeftColor:a===l?"#e3f788":"rgb(199, 207, 169)",borderRightColor:a===l?"#e3f788":"rgb(199, 207, 169)",borderTopColor:a===l?"#e3f788":"rgb(199, 207, 169)",borderBottomColor:a===l?"#e3f788":"rgb(199, 207, 169)",borderLeftWidth:"2px,",borderLeftStyle:"solid"},className:`rounded-2xl bg-gradient-to-r ${a==l?"to-[#e3f788] from-[#bbdb04]":"to-[#c7cfa9] from-[#aeb96a]"} ${r} `,children:e.jsx("span",{style:{lineHeight:"1rem"},className:`text-nowrap font-bold whitespace-nowrap text-sm ${a==l?"text-[#5d6436]":"text-[#6e7548]"}`,children:(d=i==null?void 0:i[o])==null?void 0:d.noticeTitle})})},a)})})}function G({onClose:i,open:v}){const p=.8787808011211025,{data:s,isShowNewAds:g}=U(W),c=s.length==1?0:1,[u,h]=w.useState(0),[a,o]=w.useState(),r=(s==null?void 0:s.length)===2||(s==null?void 0:s.length)===3?[...s,...s]:[...s],d=[];r.map((t,n)=>{d.push(n)});const f=t=>{t!=u&&(h(t),a==null||a.slideToLoop(t))},b=t=>{try{return e.jsx(e.Fragment,{children:t&&e.jsx("div",{dangerouslySetInnerHTML:{__html:E(t).body.innerHTML}})})}catch{return e.jsx(N,{className:"grow mt-10"})}},S=t=>{var n,m,k;if(t!=null&&t.redirectUrl)if((n=t.redirectUrl)!=null&&n.includes("https://xgame.cgcg.cc")){const A=(m=t.redirectUrl)==null?void 0:m.replace("https://xgame.cgcg.cc","");j.navigate(A),i()}else(k=window.open(t.redirectUrl,"_blank"))==null||k.focus()};return e.jsxs(_,{open:v,onClose:i,showTitle:!1,title:"",className:"relative max-w-[100vw] h-[75vh] !bg-transparent !px-0 !py-0 banner-popup",children:[s.length===1&&g?e.jsx(I,{id:"swiper-wrapper-container",initialSlide:0,centeredSlides:!0,modules:[$,T],className:"mySwiper-with-one",children:r.map((t,n)=>e.jsx(R,{id:t.id,children:e.jsxs("div",{className:"bg-transparent !z-0 rounded-3xl mx-auto bg-[#f7fae6] h-full relative w-[70vw]",style:{backgroundImage:"url(../../assets/icon/bg-top-banner.png)",backgroundRepeat:"no-repeat",backgroundPosition:"100% 20%"},children:[e.jsxs("div",{className:"relative flex flex-col items-start py-4 w-[70vw]",children:[e.jsx("div",{className:"absolute top-[-50px] right-[-35px]",children:e.jsx(x,{src:"/assets/icon/gift-banner-icon.webp",alt:"",className:"mx-auto object-contain max-w-[150px] h-[120px]"})}),e.jsxs("div",{className:"pl-3 mb-[2.5vw] flex flex-col items-start justify-start relative",children:[e.jsx(x,{src:"/assets/icon/xgame.png",alt:"",className:"object-contain !w-[60%] h-[auto]"}),e.jsx("span",{style:{lineHeight:"1rem"},className:"text-[#757d47] text-sm mt-1",children:C.global_leader()})]}),e.jsx("div",{className:"smoke-div"}),e.jsx(H,{dataBanner:r,tabs:d,selected:u,onChange:f})]}),e.jsx("div",{className:"bg-[#f7fae6] rounded-3xl w-full",children:e.jsx("div",{className:`${t.popupType==0,"!bg-[#f7fae6]"} rounded-3xl w-[70vw]`,children:t.popupType==1&&t.noticeContent?e.jsx("div",{style:{aspectRatio:p,boxShadow:"0px -5px 10px -5px rgba(0, 0, 0, 0.3)"},className:"w-full h-full min-h-[70vw] flex p-3 overflow-scroll hidden-scroll word-break: auto text-black rounded-3xl",children:t.noticeContent?b(t.noticeContent):e.jsx(N,{className:"grow"})}):e.jsx("div",{className:"w-full h-full flex overflow-hidden word-break: auto text-black rounded-3xl",style:{boxShadow:"0px -5px 10px -5px rgba(0, 0, 0, 0.3)"},onClick:()=>{S(t)},children:e.jsx(x,{src:j.getRemoteImgPath(t.noticeImgUrl)||"/assets/icon/banner-bg.png",alt:"",style:{height:"auto",aspectRatio:p},className:"mx-auto object-contain bg-[#f7fae6] rounded-3xl"})})})}),e.jsx(x,{onClick:i,src:"/assets/icon/close-banner-icon.png",alt:"",className:"w-[2rem] h-[2rem] mx-auto object-contain absolute left-1/2 translate-x-[-50%] z-[10000] mt-[10px]"})]})},`${t.id}-${n}`))}):e.jsx(e.Fragment,{}),r&&r.length>1&&g?e.jsx(I,{id:"swiper-wrapper-container",onSwiper:t=>{o(t)},onTransitionEnd:t=>{const m=t.slides[t.activeIndex].getAttribute("data-swiper-slide-index");h(Number(m))},initialSlide:c,centeredSlides:!0,slidesPerView:1.5,autoplay:{delay:3e3},spaceBetween:0,loop:!0,modules:[$,T],className:"mySwiper",children:r.map((t,n)=>e.jsx(R,{id:t.id,children:e.jsxs("div",{className:"bg-transparent !z-0 rounded-3xl mx-auto bg-[#f7fae6] h-full relative w-[70vw]",style:{backgroundImage:"url(../../assets/icon/bg-top-banner.png)",backgroundRepeat:"no-repeat",backgroundPosition:"100% 20%"},children:[e.jsxs("div",{className:"relative flex flex-col items-start py-4 w-[70vw]",children:[e.jsx("div",{className:"absolute top-[-50px] right-[-35px]",children:e.jsx(x,{src:"/assets/icon/gift-banner-icon.webp",alt:"",className:"mx-auto object-contain max-w-[150px] h-[120px]"})}),e.jsxs("div",{className:"pl-3 mb-[2.5vw] flex flex-col items-start justify-start relative",children:[e.jsx(x,{src:"/assets/icon/xgame.png",alt:"",className:"object-contain !w-[60%] h-[auto]"}),e.jsx("span",{style:{lineHeight:"1rem"},className:"text-[#757d47] text-sm mt-1",children:C.global_leader()})]}),e.jsx("div",{className:"smoke-div"}),e.jsx(H,{dataBanner:r,tabs:d,selected:u,onChange:f})]}),e.jsx("div",{className:"bg-[#f7fae6] rounded-3xl w-full",children:e.jsx("div",{className:`${t.popupType==0,"!bg-[#f7fae6]"} rounded-3xl w-[70vw]`,children:t.popupType==1&&t.noticeContent?e.jsx("div",{style:{aspectRatio:p,boxShadow:"0px -5px 10px -5px rgba(0, 0, 0, 0.3)"},className:"w-full h-full min-h-[70vw] flex p-3 overflow-scroll hidden-scroll word-break: auto text-black rounded-3xl",children:t.noticeContent?b(t.noticeContent):e.jsx(N,{className:"grow"})}):e.jsx("div",{className:"w-full h-full flex overflow-hidden word-break: auto text-black rounded-3xl",style:{boxShadow:"0px -5px 10px -5px rgba(0, 0, 0, 0.3)"},onClick:()=>{S(t)},children:e.jsx(x,{src:j.getRemoteImgPath(t.noticeImgUrl)||"/assets/icon/banner-bg.png",alt:"",style:{height:"auto",aspectRatio:p},className:"mx-auto object-contain bg-[#f7fae6] rounded-3xl"})})})}),e.jsx(x,{onClick:i,src:"/assets/icon/close-banner-icon.png",alt:"",className:"w-[2rem] h-[2rem] mx-auto object-contain absolute left-1/2 translate-x-[-50%] z-[10000] mt-[10px]"})]})},`${t.id}-${n}`))}):e.jsx(e.Fragment,{})]})}export{G as AdsHomeBannerModal};
