import{r as t,Y as y,Z as g,a as w,j as e,S as x,B as C,T,a0 as b}from"./index-6b1c5c2b.js";import{C as R}from"./index-2e98ffa3.js";import"./index-2d01e45a.js";import{T as j}from"./index-66a212c0.js";import k from"./form-6d7ab377.js";import{getColumns as K}from"./constants-fa2af8a4.js";import{g as v}from"./service-144f7e6f.js";import{s as A}from"./index.module-c4e1ad75.js";import B from"./index-5fa4b0c2.js";import{I as E}from"./index-8a11bd40.js";import"./index-3e13fd11.js";import"./index.browser-7e542916.js";import"./index-745a7f7b.js";const{Title:F}=T;function G(){const[r,a]=t.useState(!1),[i,n]=t.useState([]),[c,m]=t.useState([]),[l,p]=t.useState({}),{data:u,loading:d,run:o}=y(()=>v({status:0})),f=t.useMemo(()=>K(),[]);g(async()=>{await o()},[JSON.stringify(l)]);function h(s){p({...s,unixTime:b().unix()})}return w(R,{children:[e(F,{heading:6,children:"排单"}),e(k,{onSearch:h}),e("div",{className:A["button-group"],children:e(x,{children:e(C,{type:"primary",icon:e(E,{}),onClick:()=>a(!0),children:"排单"})})}),e(j,{rowKey:"id",loading:d,pagination:!1,columns:f,data:u,rowSelection:{type:"checkbox",selectedRowKeys:i,onChange:(s,S)=>{n(s),m(S)}}}),r&&e(B,{data:c,onClose:()=>{a(!1),o()}})]})}export{G as default};
