import{r as t,Y as y,Z as g,a as w,j as e,S as C,B as x,T as b,aK as R}from"./index-d9b286db.js";import{C as T}from"./index-1a9b1006.js";import"./index-3e8a6381.js";import{T as E}from"./index-b8adce3c.js";import K from"./form-928112a1.js";import{getColumns as j}from"./constants-c0c56a87.js";import{g as k}from"./service-076a958f.js";import{s as P}from"./index.module-c4e1ad75.js";import v from"./index-721af620.js";import{I as B}from"./index-4f89df88.js";import"./index-ec76331c.js";import"./index.browser-7e542916.js";import"./index-d96bd82f.js";const{Title:D}=b;function G(){const[c,a]=t.useState(!1),[m,r]=t.useState([]),[l,i]=t.useState([]),[s,p]=t.useState({}),{data:d,loading:u,run:n}=y(k),f=t.useMemo(()=>j(),[]);g(async()=>{await n(s)},[JSON.stringify(s)]);function h(o){p(R.cloneDeep(o))}return w(T,{children:[e(D,{heading:6,children:"开料"}),e(K,{onSearch:h}),e("div",{className:P["button-group"],children:e(C,{children:e(x,{type:"primary",icon:e(B,{}),onClick:()=>a(!0),children:"开料"})})}),e(E,{rowKey:"id",loading:u,pagination:!1,columns:f,data:d,rowSelection:{type:"checkbox",selectedRowKeys:m,onChange:(o,S)=>{r(o),i(S)}}}),c&&e(v,{data:l,onClose:()=>{a(!1),i([]),r([]),n(s)}})]})}export{G as default};