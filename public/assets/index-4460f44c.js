import{r as s,aK as y,a as m,aL as B,S as L,j as n,aM as j,B as C}from"./index-f1de8f67.js";import"./index-27455959.js";import{T as a}from"./index-0a89d5bb.js";import{n as p}from"./index.browser-7e542916.js";import{l as D}from"./index-20ab7ad4.js";import{b as K}from"./service-f1e708a2.js";function N({data:d,onClose:g}){console.log(d);const x=[{title:"客户",dataIndex:"order.customer.name"},{title:"品名",dataIndex:"categoryName"},{title:"件重",dataIndex:"singleWeight"},{title:"圈号",dataIndex:"circle"},{title:"合计",dataIndex:"typeCount"},{title:"单号",dataIndex:"transferCode"}],[u,f]=s.useState([]),[S,k]=s.useState([]);s.useState([]);const[i,b]=s.useState(100);s.useEffect(()=>{const o=y.groupBy(d,e=>`${e.category}-${e.singleWeight}-${e.circle}-${e.order.customer.name}`),t=Object.keys(o).map(e=>{const l=o[e];let r=0;return l.forEach(c=>r+=c.quantity),{key:p(),...l[0],typeCount:r}});f(t)},[]);async function w(){h()}function E(o){return m(a.Summary.Row,{children:[n(a.Summary.Cell,{children:"总计"}),n(a.Summary.Cell,{}),n(a.Summary.Cell,{}),n(a.Summary.Cell,{}),n(a.Summary.Cell,{children:o.reduce((t,e)=>t+e.typeCount,0)}),n(a.Summary.Cell,{})]})}const R=s.useRef(null);D.useReactToPrint({content:()=>R.current});const T=()=>{const o=y.cloneDeep(u);o.forEach(t=>{const e=Math.floor(t.typeCount/i),l=Math.floor(t.typeCount%i),r=[];if(t.children=[],e===0)r.push({...t,key:p()});else{for(let c=0;c<e;c++)r.push({...t,typeCount:i,key:p()});l!==0&&r.push({...t,typeCount:l,key:p()})}t.children=r}),k(o.map(t=>t.key)),f(o)},h=()=>{const o=[];u.forEach(t=>t.children.forEach(e=>{delete e.id,delete e.key,delete e.order,delete e.unitPrice,delete e.totalPrice,delete e.totalWeight,delete e.typeCount,delete e.children,o.push(e)})),K(o).then(t=>console.log(t))};return m(B,{height:"100%",placement:"bottom",title:"生产单",visible:!0,onOk:w,autoFocus:!1,focusLock:!1,onCancel:g,children:[m(L,{children:[n(j,{min:0,value:i,onChange:o=>{b(o)},style:{width:160}}),n(C,{type:"primary",style:{marginBottom:10},onClick:T,children:"分单"}),n(C,{type:"primary",style:{marginBottom:10},onClick:h,children:"保存流程单"})]}),u.length>0&&n(a,{summary:E,rowKey:"key",pagination:!1,expandedRowKeys:S,columns:x,data:y.sortBy(u,["category","customerId"]),defaultExpandAllRows:!0,indentSize:60,border:!0,borderCell:!0})]})}export{N as default};
