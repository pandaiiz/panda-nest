import{r as o,Y as I,Z as b,a as C,j as n,S as N,B as T,T as R,a1 as j,e as q,a0 as F}from"./index-d9b286db.js";import{C as k}from"./index-1a9b1006.js";import"./index-3e8a6381.js";import{T as A}from"./index-b8adce3c.js";import{S as B,s as d}from"./form-20ef9d02.js";import{g as D}from"./service-076a958f.js";import K from"./index-cf273324.js";import{I as O}from"./index-4f89df88.js";import"./common-e743d0de.js";import"./index-ec76331c.js";import"./index.browser-7e542916.js";import"./index-d96bd82f.js";const{Title:P}=R;function Q(){const[m,s]=o.useState(!1),[u,h]=o.useState([]),[g,p]=o.useState([]),[i,f]=o.useState({}),{data:y,loading:S,run:l}=I(()=>D({status:0,...i})),c=o.useRef(null),w=[{title:"客户",dataIndex:"order.customer.name",width:100,align:"center",filterIcon:n(j,{}),filterDropdown:({filterKeys:e,setFilterKeys:t,confirm:r})=>n("div",{className:d["arco-table-custom-filter"],children:n(q.Search,{ref:c,searchButton:!0,placeholder:"Please enter name",value:e[0]||"",onChange:a=>{t(a?[a]:[])},onSearch:()=>{r()}})}),onFilter:(e,t)=>e?t.order.customer.name.indexOf(e)!==-1:!0,onFilterDropdownVisibleChange:e=>{e&&setTimeout(()=>c.current.focus(),150)},sorter:(e,t)=>{var r,a;return((r=e.order.customer.name)==null?void 0:r.length)-((a=t.order.customer.name)==null?void 0:a.length)}},{title:"单号",dataIndex:"order.orderNumber",width:100,align:"center",sorter:(e,t)=>{var r;return e.order.orderNumber.length-((r=t.order.orderNumber)==null?void 0:r.length)}},{title:"款号",dataIndex:"styleCode",width:100,align:"center",sorter:(e,t)=>{var r,a;return((r=e.styleCode)==null?void 0:r.length)-((a=t.styleCode)==null?void 0:a.length)}},{title:"品名",dataIndex:"categoryName",width:100,align:"center",sorter:(e,t)=>{var r,a;return((r=e.categoryName)==null?void 0:r.length)-((a=t.categoryName)==null?void 0:a.length)}},{title:"件重",dataIndex:"singleWeight",width:100,align:"center",sorter:(e,t)=>e.singleWeight-t.singleWeight},{title:"圈号",dataIndex:"circle",width:100,align:"center",sorter:(e,t)=>e.circle-t.circle},{title:"数量",dataIndex:"quantity",width:100,align:"center",sorter:(e,t)=>e.quantity-t.quantity}];b(async()=>{l()},[JSON.stringify(i)]);function x(e){f({...e,unixTime:F().unix()})}return C(k,{children:[n(P,{heading:6,children:"排单"}),n(B,{onSearch:x}),n("div",{className:d["button-group"],children:n(N,{children:n(T,{type:"primary",icon:n(O,{}),onClick:()=>s(!0),children:"排单"})})}),n(A,{rowKey:"id",loading:S,pagination:!1,columns:w,data:y,rowSelection:{type:"checkbox",selectedRowKeys:u,onChange:(e,t)=>{h(e),p(t)}}}),m&&n(K,{data:g,onClose:()=>{s(!1),l()}})]})}export{Q as default};