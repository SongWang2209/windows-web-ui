import{d as a,r as s,a as e,b as t,w as u,e as n,h as o,t as l,A as r,o as v,_ as c}from"./index-cef210c6.js";const d={class:"shut-down"},i={key:0,class:"center"},m=c(a({__name:"shutDown",setup(a){const c=s(!0),m=s("正在关机");function onStart(){m.value="正在开机",c.value=!0,setTimeout((()=>{var a;null==(a=r.router)||a.push("/")}),5e3)}return setTimeout((()=>{c.value=!1}),5e3),(a,s)=>{const r=e("loading");return v(),t("div",d,[u(n("div",{class:o(["mask",!c.value&&"is-down"])},null,2),[[r,c.value]]),c.value?(v(),t("div",i,l(m.value),1)):(v(),t("div",{key:1,class:"start",onClick:onStart}," 开机 "))])}}}),[["__scopeId","data-v-e9c94174"]]);export{m as default};
