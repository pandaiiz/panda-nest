import{r as a,g as w,a as l,j as t,T as i,O as b,U as f}from"./index-f1de8f67.js";import{R as x}from"./index-27455959.js";import{T as v}from"./index-0a89d5bb.js";import{C}from"./index-0b718c96.js";import{L as S}from"./index-14e4c17a.js";const T="_symbol_coctx_1",I={symbol:T};function _(){const[o,c]=a.useState(0),[p,d]=a.useState([]),[u,n]=a.useState(!0),[r,m]=a.useState(1),[g,y]=a.useState(0),s=a.useCallback(()=>{n(!0),w.get(`/api/workplace/popular-contents?page=${r}&pageSize=5&category=${o}`).then(e=>{d(e.data.list),y(e.data.total)}).finally(()=>{n(!1)})},[r,o]);a.useEffect(()=>{s()},[r,s]);const h=[{title:["workplace.column.rank"],dataIndex:"rank",width:65},{title:["workplace.column.title"],dataIndex:"title",render:e=>t(i.Paragraph,{style:{margin:0},ellipsis:!0,children:e})},{title:["workplace.column.pv"],dataIndex:"pv",width:100,render:e=>`${e/1e3}k`},{title:["workplace.column.increase"],dataIndex:"increase",sorter:(e,k)=>e.increase-k.increase,width:110,render:e=>l("span",{children:[`${(e*100).toFixed(2)}%`,t("span",{className:I.symbol,children:e<0?t(b,{style:{color:"rgb(var(--green-6))"}}):t(f,{style:{color:"rgb(var(--red-6))"}})})]})}];return l(C,{children:[l("div",{style:{display:"flex",justifyContent:"space-between"},children:[t(i.Title,{heading:6,children:["workplace.popularContents"]}),t(S,{children:["workplace.seeMore"]})]}),t(x.Group,{type:"button",value:o,onChange:c,options:[{label:["workplace.text"],value:0},{label:["workplace.image"],value:1},{label:["workplace.video"],value:2}],style:{marginBottom:16}}),t(v,{rowKey:"rank",columns:h,data:p,loading:u,tableLayoutFixed:!0,onChange:e=>{m(e.current)},pagination:{total:g,current:r,pageSize:5,simple:!0}})]})}export{_ as default};