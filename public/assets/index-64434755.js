import{r as s,Y as y,Z as C,a as b,j as a,S as T,B as z,$ as w,T as D}from"./index-6bfe4b1d.js";import{C as k}from"./index-6b1380ec.js";import"./index-98b813fd.js";import{T as x}from"./index-d564e2b7.js";import{S as B,s as P}from"./form-9da1104d.js";import{getColumns as j}from"./constants-eb1966e7.js";import E from"./edit-4e7e1dd6.js";import{g as v,d as F}from"./service-60a1efb9.js";import"./index-8d617b7d.js";import"./index-8afff505.js";import"./index-e8fe6b86.js";import"./common-e743d0de.js";const{Title:I}=D;function G(){var p;const[l,n]=s.useState(!1),[u,m]=s.useState({}),[e,o]=s.useState({pageSize:10,current:1}),{data:t,loading:g,run:i}=y(v),d=async(r,c)=>{switch(c){case"delete":await F(r.id),o({...e,current:1}),await i(e);break;case"edit":m(r),n(!0);break}},f=s.useMemo(()=>j(d),[]);C(async()=>{await i(e)},[JSON.stringify(e)]);function h({current:r,pageSize:c}){o({...e,current:r,pageSize:c})}function S(r){o({...r,pageSize:e.pageSize,current:1})}return b(k,{children:[a(I,{heading:6,children:"部门列表"}),a(B,{onSearch:S}),a("div",{className:P["button-group"],children:a(T,{children:a(z,{type:"primary",icon:a(w,{}),onClick:()=>n(!0),children:"新增"})})}),a(x,{rowKey:"id",loading:g,onChange:h,pagination:{sizeCanChange:!0,showTotal:!0,pageSizeChangeResetCurrent:!0,current:e.current,pageSize:e.pageSize,total:(p=t==null?void 0:t.pagination)==null?void 0:p.total},columns:f,data:t==null?void 0:t.data}),l&&a(E,{data:u,onClose:()=>{n(!1),m({}),i(e)}})]})}export{G as default};
