import{j as e,B as n}from"./index-d9b286db.js";import{P as d}from"./index-63f93476.js";function r(t){return[{title:"客户名称",dataIndex:"name"},{title:"客户编号",dataIndex:"customerCode"},{title:"客户联系方式",dataIndex:"telephone"},{title:"联系人名字",dataIndex:"contactsName"},{title:"联系人电话",dataIndex:"contactsPhone"},{title:"操作",dataIndex:"operations",headerCellStyle:{paddingLeft:"15px"},render:(i,a)=>[e(n,{type:"text",size:"small",onClick:()=>t(a,"detail"),children:"编辑"},"view"),e(d,{focusLock:!0,title:"确认删除吗？",onOk:async()=>{await t(a,"delete")},children:e(n,{type:"text",size:"small",children:"删除"})},"delete")]}]}export{r as getColumns};