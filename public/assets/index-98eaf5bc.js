import{r as s,Y as b,a as d,j as t,S as _,B as f,$ as h}from"./index-6bfe4b1d.js";import{C as w}from"./index-6b1380ec.js";import"./index-98b813fd.js";import{T as g}from"./index-d564e2b7.js";import{getColumns as y}from"./constants-25f569e9.js";import C from"./edit-de08113f.js";import{c as x,e as M}from"./service-5ed2f836.js";import"./index-8afff505.js";import"./index-e8fe6b86.js";const k="_toolbar_pbsw0_1",S="_operations_pbsw0_6",j={toolbar:k,operations:S,"content-type":"_content-type_pbsw0_9","search-form-wrapper":"_search-form-wrapper_pbsw0_16","right-button":"_right-button_pbsw0_21","button-group":"_button-group_pbsw0_30","search-form":"_search-form_pbsw0_16"};function N(){const[l,o]=s.useState(!1),{data:e,loading:i,refresh:a}=b(x),[p,r]=s.useState({}),c=async(n,m)=>{switch(m){case"delete":await M(n.id),a();break;case"detail":r(n),o(!0);break}},u=s.useMemo(()=>y(c),[]);return d(w,{children:[l&&t(C,{data:p,onClose:async()=>{o(!1),a()}}),t("div",{className:j["button-group"],children:t(_,{children:t(f,{type:"primary",icon:t(h,{}),onClick:()=>{r({}),o(!0)},children:"新建"})})}),(e==null?void 0:e.length)>0&&t(g,{rowKey:"id",pagination:!1,loading:i,columns:u,data:e,defaultExpandAllRows:!0})]})}export{N as default};