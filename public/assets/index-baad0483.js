import{r as s,Y as y,Z as b,a as T,j as a,S as x,B as z,$ as w,T as j,a0 as l}from"./index-6bfe4b1d.js";import{C as k}from"./index-6b1380ec.js";import"./index-98b813fd.js";import{T as B}from"./index-d564e2b7.js";import{S as P,s as E}from"./form-a0730217.js";import{getColumns as v}from"./constants-619bd963.js";import F from"./edit-0d7ee946.js";import{g as I,d as N}from"./service-d2087721.js";import"./index-8d617b7d.js";import"./index-8afff505.js";import"./index-e8fe6b86.js";const{Title:R}=j;function G(){var m;const[p,o]=s.useState(!1),[g,u]=s.useState({}),[e,n]=s.useState({pageSize:10,current:1}),{data:t,loading:d,run:c}=y(I),f=async(r,i)=>{switch(i){case"delete":await N(r.id),n({...e,current:1,unixTime:l().unix()});break;case"detail":u(r),o(!0);break}},h=s.useMemo(()=>v(f),[]);b(async()=>{await c(e)},[JSON.stringify(e)]);function C({current:r,pageSize:i}){n({...e,current:r,pageSize:i})}function S(r){n({...r,pageSize:e.pageSize,current:1,unixTime:l().unix()})}return T(k,{children:[a(R,{heading:6,children:"客户列表"}),a(P,{onSearch:S}),a("div",{className:E["button-group"],children:a(x,{children:a(z,{type:"primary",icon:a(w,{}),onClick:()=>o(!0),children:"新增"})})}),a(B,{rowKey:"id",loading:d,onChange:C,pagination:{sizeCanChange:!0,showTotal:!0,pageSizeChangeResetCurrent:!0,current:e.current,pageSize:e.pageSize,total:(m=t==null?void 0:t.pagination)==null?void 0:m.total},columns:h,data:t==null?void 0:t.data}),p&&a(F,{data:g,onClose:()=>{o(!1),u({}),c(e)}})]})}export{G as default};