import{a_ as e,b1 as t}from"./index-BRyeyo8a.js";async function p(){try{return e("/app-api/api/recharge/getPayTypes")}catch{return[]}}async function c(a){try{return await e("/app-api/api/recharge/getPayAccounts",{params:a})}catch{return[]}}async function i(a){try{return await e("/app-api/api/recharge/getTpPayChannels",{params:a})}catch{return[]}}async function s(a){try{return await e("/app-api/api/recharge/gatewayThirdParty",{params:a})}catch(r){return r}}async function o(a){try{return t("/app-api/api/recharge/transfer/v3",{headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"}},a)}catch(r){return r}}async function y(a){try{return await e("/app-api/api/recharge/personalRechargeOrderDetail",{params:a})}catch{return}}export{c as a,i as b,y as c,o as d,p as g,s as m};