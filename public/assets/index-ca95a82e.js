import{r as s,Y as S,Z as y,a as b,j as a,S as T,B as z,$ as w,T as k}from"./index-6bfe4b1d.js";import{C as x}from"./index-6b1380ec.js";import"./index-98b813fd.js";import{T as B}from"./index-d564e2b7.js";import{S as P,s as j}from"./form-422dc93a.js";import{getColumns as E}from"./constants-299a7ed2.js";import v from"./edit-0d7ee946.js";import{g as F,d as I}from"./service-d2087721.js";import"./index-8d617b7d.js";import"./index-8afff505.js";import"./index-e8fe6b86.js";const{Title:N}=k;function $(){var u;const[l,o]=s.useState(!1),[m,p]=s.useState({}),[e,n]=s.useState({pageSize:10,current:1}),{data:t,loading:g,run:i}=S(F),d=async(r,c)=>{switch(c){case"delete":await I(r.id),n({...e,current:1}),await i(e);break;case"detail":p(r),o(!0);break}},f=s.useMemo(()=>E(d),[]);y(async()=>{await i(e)},[JSON.stringify(e)]);function h({current:r,pageSize:c}){n({...e,current:r,pageSize:c})}function C(r){n({...r,pageSize:e.pageSize,current:1})}return b(x,{children:[a(N,{heading:6,children:"款式列表"}),a(P,{onSearch:C}),a("div",{className:j["button-group"],children:a(T,{children:a(z,{type:"primary",icon:a(w,{}),onClick:()=>o(!0),children:"新增"})})}),a(B,{rowKey:"id",loading:g,onChange:h,pagination:{sizeCanChange:!0,showTotal:!0,pageSizeChangeResetCurrent:!0,current:e.current,pageSize:e.pageSize,total:(u=t==null?void 0:t.pagination)==null?void 0:u.total},columns:f,data:t==null?void 0:t.data}),l&&a(v,{data:m,onClose:()=>{o(!1),i(e)}})]})}export{$ as default};