import{r as o,Y as y,Z as C,a as b,j as a,S as T,B as z,$ as x,T as w,a0 as j}from"./index-6bfe4b1d.js";import{C as k}from"./index-6b1380ec.js";import"./index-98b813fd.js";import{T as B}from"./index-d564e2b7.js";import P from"./form-0bcde98d.js";import{s as E}from"./index.module-6d5fffca.js";import{getColumns as O}from"./constants-9173c779.js";import v from"./index-0e3bfc4b.js";import{b as F,c as I}from"./service-5f331a07.js";import"./index-8d617b7d.js";import"./index-8afff505.js";import"./index-8a6db4c7.js";import"./index-336d54fe.js";import"./service-d2087721.js";import"./editableTable-8c3bb7ad.js";import"./common-e743d0de.js";import"./index.browser-7e542916.js";const{Title:N}=w;function _(){var p;const[u,s]=o.useState(!1),[l,m]=o.useState({}),[e,i]=o.useState({pageSize:10,current:1}),{data:t,loading:d,run:n}=y(F),g=async(r,c)=>{switch(c){case"delete":await I(r.id),i({...e,current:1}),n(e);break;case"detail":m(r),s(!0);break}},f=o.useMemo(()=>O(g),[]);C(async()=>{await n(e)},[JSON.stringify(e)]);function h({current:r,pageSize:c}){i({...e,current:r,pageSize:c})}function S(r){i({...r,pageSize:e.pageSize,current:1,unixTime:j().unix()})}return b(k,{children:[a(N,{heading:6,children:"订单列表"}),a(P,{onSearch:S}),a("div",{className:E["button-group"],children:a(T,{children:a(z,{type:"primary",icon:a(x,{}),onClick:()=>s(!0),children:"新增"})})}),a(B,{rowKey:"id",loading:d,onChange:h,pagination:{sizeCanChange:!0,showTotal:!0,pageSizeChangeResetCurrent:!0,current:e.current,pageSize:e.pageSize,total:(p=t==null?void 0:t.pagination)==null?void 0:p.total},columns:f,data:t==null?void 0:t.data}),u&&a(v,{data:l,onClose:()=>{s(!1),m({}),n(e)}})]})}export{_ as default};
