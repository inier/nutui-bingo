import{c as s}from"./mobile.d4f96f57.js";import{_ as n}from"./index.73afe794.js";import{m as r,r as e,e as t,g as a,j as o,k as u,C as i,D as d,o as m,l}from"./vendor.f3e57ccb.js";const{createDemo:c}=s("guess-gift"),f=c({props:{},setup(){const s=r(null),n=r(3),e=r(5);return{guessgiftDom:s,turnNum:e,prizeIndex:n,gameStart:()=>{s.value.start()},startTurns:()=>{console.log("开始抽奖")},endTurns:()=>{console.log("抽奖结束")}}}}),g={class:"demo"},p=(s=>(i("data-v-739347b6"),s=s(),d(),s))((()=>a("h2",null,"基础用法",-1))),b={class:"show-demo"},T=l("开始");var v=n(f,[["render",function(s,n,r,i,d,l){const c=e("nutbig-guess-gift"),f=e("nut-button");return m(),t("div",g,[p,a("div",b,[o(c,{ref:"guessgiftDom","prize-index":s.prizeIndex,"turn-number":s.turnNum,onStartTurns:s.startTurns,onEndTurns:s.endTurns},null,8,["prize-index","turn-number","onStartTurns","onEndTurns"]),o(f,{type:"primary",onClick:s.gameStart},{default:u((()=>[T])),_:1},8,["onClick"])])])}],["__scopeId","data-v-739347b6"]]);export{v as default};