import{a0 as i,j as t,B as r}from"./index-c8148c41.js";import{P as d}from"./index-021e0ccc.js";const s=n=>[{title:"姓名",dataIndex:"name",align:"center"},{title:"账号",dataIndex:"account",align:"center"},{title:"权限",dataIndex:"role.title",align:"center"},{title:"创建日期",dataIndex:"createdAt",align:"center",render:e=>i(e).format("YYYY-MM-DD HH:mm:ss")},{title:"更新日期",dataIndex:"updatedAt",align:"center",render:e=>i(e).format("YYYY-MM-DD HH:mm:ss")},{title:"操作",dataIndex:"operations",align:"center",render:(e,a)=>[t(r,{type:"text",size:"small",onClick:()=>n(a,"edit"),children:"编辑"},"edit"),t(d,{focusLock:!0,title:"确认删除吗？",onOk:async()=>{await n(a,"delete")},children:t(r,{type:"text",size:"small",children:"删除"})},"delete")]}];export{s as getColumns};
