import{a_ as n,b4 as a,b5 as t,b1 as r}from"./index-BRyeyo8a.js";async function i(s){try{const e=await n("/app-api/api/user/betting-bonus",{params:s});return a(e)}catch(e){return t(e)}}async function c(s){try{const e=await r("/app-api/api/user/betting-bonus/claim",{headers:{"Content-Type":"application/json"}},s);return a(e)}catch(e){return console.error("save user wallet failed:",e),t(e)}}export{c,i as g};
