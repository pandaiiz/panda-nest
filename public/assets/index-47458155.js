import{R as s,c as m,j as t,a as o,S as a}from"./index-c8148c41.js";import c from"./chat-panel-06d254a8.js";import n from"./studio-cee07f8a.js";import d from"./data-statistic-06354d05.js";import l from"./studio-status-57aec717.js";import p from"./quick-operation-fbdc8e5c.js";import u from"./studio-information-f3695985.js";import{s as i}from"./index.module-d89dd54d.js";import{s as f,M as e}from"./setupMock-6cee9dd3.js";import"./index-419b81ff.js";import"./item-d035065c.js";import"./index-135037d4.js";import"./index-c467507d.js";import"./data-statistic-list-5c9504d9.js";import"./index-1c8757fc.js";f({setup:()=>{e.mock(new RegExp("/api/chatList"),()=>e.mock({"data|4-6":[{"id|+1":1,username:"用户7352772",content:"马上就开始了，好激动！",time:"13:09:12","isCollect|2":!0}]}).data)}});function _(){const[{userInfo:r}]=s(m);return t("div",{children:o("div",{className:i.layout,children:[t("div",{className:i["layout-left-side"],children:t(c,{})}),t("div",{className:i["layout-content"],children:o(a,{size:16,direction:"vertical",style:{width:"100%"},children:[t(n,{userInfo:r}),t(d,{})]})}),t("div",{className:i["layout-right-side"],children:o(a,{size:16,direction:"vertical",style:{width:"100%"},children:[t(l,{}),t(p,{}),t(u,{})]})})]})})}export{_ as default};
