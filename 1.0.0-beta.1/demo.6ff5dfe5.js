import{c as r}from"./mobile.910d0ebf.js";import{_ as c}from"./index.abe86391.js";import{m as s,r as d,e as p,j as i,g as m,o as u}from"./vendor.0c010953.js";const{createDemo:_}=r("shakedice"),l=_({props:{},setup(){const e=s(),o=s();return{jump:()=>{o.value=5,e.value.shake()},dice:e,id:o}}}),f={class:"demo"};function v(e,o,t,k,j,g){const a=d("nutbig-shakedice");return u(),p("div",f,[i(a,{ref:"dice",id:e.id},null,8,["id"]),m("div",{onClick:o[0]||(o[0]=(...n)=>e.jump&&e.jump(...n)),class:"demoBtn"},"\u6447\u52A8")])}var C=c(l,[["render",v],["__scopeId","data-v-0c18fd04"]]);export{C as default};
