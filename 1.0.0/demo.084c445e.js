import{c as n}from"./mobile.2d850a13.js";import{_ as o}from"./index.7b1cf79c.js";import{r as e,e as t,j as a,C as r,D as c,g as l,o as s}from"./vendor.da7cad2a.js";const{createDemo:d}=n("scratch-card"),u=d({props:{},setup:()=>({opencard:()=>{alert("刮开事件完成")}})}),p=n=>(r("data-v-610ca961"),n=n(),c(),n),m={class:"demo"},i=p((()=>l("h2",null,"基本用法",-1))),v=p((()=>l("h2",null,"内容异步",-1))),g=p((()=>l("h2",null,"刮开层和背景层都支持自定义颜色，奖品信息支持HTML",-1))),h=p((()=>l("h2",null,"刮开层支持图片",-1))),f=p((()=>l("h2",null,"事件回调",-1))),C=p((()=>l("h2",null,"设置刮开比列",-1))),b=p((()=>l("p",null,null,-1)));var j=o(u,[["render",function(n,o,r,c,l,d){const u=e("nutbig-scratch-card");return s(),t("div",m,[i,a(u,{content:"1000万"}),v,a(u,{content:n.text},null,8,["content"]),g,a(u,{coverColor:"#F9CC9D",backgroundColor:"#C3D08B",content:"<em>1000<em><strong>元</strong>"}),h,a(u,{content:"1000万",coverImg:n.coverImage},null,8,["coverImg"]),f,a(u,{content:"1000万",onOpen:n.opencard},null,8,["onOpen"]),C,a(u,{content:"1000万",onOpen:n.opencard,ratio:"0.2"},null,8,["onOpen"]),b])}],["__scopeId","data-v-610ca961"]]);export{j as default};
