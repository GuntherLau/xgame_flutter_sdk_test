import{an as e}from"./index.sdk-0.0.1.js";async function p(a){try{return e("/app-api/api/pushMessage/queryPage",{params:a})}catch{return{data:[],totalCount:0}}}async function t(a){return e("/app-api/api/pushMessage/modifyReadStatus",{params:{id:a}})}async function n(a){return e("/app-api/api/pushMessage/remove",{params:{id:a}})}export{t as a,p as g,n as r};
