import{a_ as T,b4 as a,b5 as c}from"./index-BRyeyo8a.js";var L=(r=>(r[r.WIN=1]="WIN",r[r.LOSE=-1]="LOSE",r[r.OTHER=0]="OTHER",r))(L||{}),N=(r=>(r[r.UNSETTLE=0]="UNSETTLE",r[r.SETTLE=1]="SETTLE",r.OTHER="1,-1",r[r.CANCLLED=-1]="CANCLLED",r))(N||{}),i=(r=>(r[r.UNSETTLE=0]="UNSETTLE",r[r.WIN=1]="WIN",r[r.LOSE=2]="LOSE",r[r.DRAW=3]="DRAW",r[r.CANCLLED=4]="CANCLLED",r))(i||{});async function p(r){try{const E=await T("/app-api/api/live/brType",{params:r});for(const n of E.data){if(n.settle==-1){n.__status=i.CANCLLED;continue}if(n.settle==0){n.__status=i.UNSETTLE;continue}if(Number(n.winAmount)==0){n.__status=i.DRAW;continue}if(Number(n.winAmount)<0){n.__status=i.LOSE;continue}n.__status=i.WIN}return a(E)}catch(E){return c(E)}}async function f(r){try{const E=await T("/app-api/api/ranking/betInfo",{params:r});return a(E)}catch(E){return c(E)}}export{i as B,N as S,L as W,f as a,p as g};
