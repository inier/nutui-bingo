import{c as a}from"./mobile.cd0e4a0c.js";import{_ as t}from"./index.98a80917.js";import{m as r,r as e,e as o,j as s,q as n,o as i}from"./vendor.006b6044.js";const{createDemo:c}=a("giftrain"),l=c({props:{},setup(){const a=r(),t=r(!1);return{gameOver:()=>{t.value=!1},isStart:t,start:()=>{t.value=!0},click:()=>{console.log("点击")},onStart:()=>{a.value.startRain()},rain:a}}}),m={class:"demo"};var d=t(l,[["render",function(a,t,r,c,l,d){const v=e("nutbig-giftrain");return i(),o("div",m,[s(v,{ref:"rain",width:"100%",height:"580px",onGameOver:a.gameOver,onStart:a.start,onClick:a.click},null,8,["onGameOver","onStart","onClick"]),a.isStart?n("",!0):(i(),o("div",{key:0,class:"start",onClick:t[0]||(t[0]=(...t)=>a.onStart&&a.onStart(...t))},"开始"))])}],["__scopeId","data-v-c06d2238"]]);export{d as default};
