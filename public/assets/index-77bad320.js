import{r as s,Y as b,a as d,j as t,S as _,B as f,$ as h}from"./index-c8148c41.js";import{C as w}from"./index-135037d4.js";import"./index-c467507d.js";import{T as g}from"./index-1c8757fc.js";import{getColumns as y}from"./constants-dd5ea9b3.js";import C from"./edit-878d3e3e.js";import{c as x,e as M}from"./service-32594290.js";import"./index-021e0ccc.js";import"./index-153ae82a.js";const k="_toolbar_pbsw0_1",S="_operations_pbsw0_6",j={toolbar:k,operations:S,"content-type":"_content-type_pbsw0_9","search-form-wrapper":"_search-form-wrapper_pbsw0_16","right-button":"_right-button_pbsw0_21","button-group":"_button-group_pbsw0_30","search-form":"_search-form_pbsw0_16"};function N(){const[l,o]=s.useState(!1),{data:e,loading:i,refresh:a}=b(x),[p,r]=s.useState({}),c=async(n,m)=>{switch(m){case"delete":await M(n.id),a();break;case"detail":r(n),o(!0);break}},u=s.useMemo(()=>y(c),[]);return d(w,{children:[l&&t(C,{data:p,onClose:async()=>{o(!1),a()}}),t("div",{className:j["button-group"],children:t(_,{children:t(f,{type:"primary",icon:t(h,{}),onClick:()=>{r({}),o(!0)},children:"新建"})})}),(e==null?void 0:e.length)>0&&t(g,{rowKey:"id",pagination:!1,loading:i,columns:u,data:e,defaultExpandAllRows:!0})]})}export{N as default};
