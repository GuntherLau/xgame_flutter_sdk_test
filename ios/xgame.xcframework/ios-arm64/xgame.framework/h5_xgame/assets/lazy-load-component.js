import{r as n,j as s}from"./index.sdk-0.0.1.js";function u(t){return new Proxy({},{get:(e,r)=>{if(typeof r=="string")return n.lazy(()=>t(r).then(a=>({default:a[r]})))}})}function i({fallback:t,LazyComponent:e,lazyComponentProps:r}){return s.jsx(n.Suspense,{fallback:t,children:s.jsx(e,{...r||{}})})}export{i as L,u as l};