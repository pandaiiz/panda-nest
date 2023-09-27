import{F as I,G as B,Y as w,aN as R,r as f,a0 as x,a as o,S as j,j as a,B as C,d as r,e as S,f as G,aL as M,X as P,aK as Y}from"./index-d9b286db.js";import{U as K}from"./pictureUpload-8a2d544a.js";import{D as W}from"./index-be7cf5a1.js";import"./index-1b302d05.js";import{g as X,u as _,a as z}from"./service-0a2c8592.js";import{b as H}from"./service-858c771f.js";import J from"./editableTable-edc6afc3.js";import{f as F,v as Q}from"./common-e743d0de.js";import{n as k}from"./index.browser-7e542916.js";import"./index-e84d0038.js";import"./index-b8adce3c.js";import"./index-3e8a6381.js";const m=I.Item,Z=B.Row,g=B.Col;function he({data:i,onClose:D}){const[d]=I.useForm(),{data:b}=w(H),{data:c,loading:T}=w(()=>i.id&&X(i.id)),{data:h}=w(()=>R("FONT_PRINT")),{data:v}=w(()=>R("CATEGORY")),[V,E]=f.useState(!1),[p,y]=f.useState([]),[L,N]=f.useState([]),[s,O]=f.useState({type:"circle",value:""});f.useEffect(()=>{i.id&&d.setFieldsValue({orderDate:x().format()})},[]),f.useEffect(()=>{c==null||c.forEach(e=>e.nanoid=k()),c&&y(c)},[c]);async function U(){try{await d.validate();const e=d.getFieldsValue();e.charactersId&&(e.charactersTitle=h==null?void 0:h.find(l=>l.id===e.charactersId).title);const t={orderData:e,orderDetailData:p};p.forEach(l=>{l.orderId=i.id,delete l.nanoid}),E(!0),i.id?await _(i.id,t):await z(t),P.success("提交成功 !"),D()}catch{}finally{E(!1)}}const q=()=>{const{type:e,value:t}=s,l=Y.cloneDeep(p);l.forEach(n=>{L.find(u=>u.nanoid===n.nanoid)&&(n[e]=t,e==="category"&&(n.categoryName=v.find(u=>u.key===t).title))}),y(l)},A=o("div",{style:{display:"flex",justifyContent:"space-between"},children:[o(j,{children:[a(C,{type:"primary",onClick:()=>y([...p,{nanoid:k()}]),children:"新增"}),a(K,{multiple:!0,action:"/api/picture/upload",showUploadList:!1,onChange:e=>{if(e.filter(n=>n.status==="done").length!==e.length)return;const l=e.map(n=>{var u;return{imgSrc:(u=n==null?void 0:n.response)==null?void 0:u.src,nanoid:k(),category:"DEFAULT"}});N(l),y([...p,...l])}}),o("div",{style:{display:"flex"},children:[o(r,{value:s.type,showSearch:!0,placeholder:"请选择列",style:{marginRight:10,width:100},onChange:e=>O({type:e,value:""}),children:[a(r.Option,{value:"circle",children:"圈号"}),a(r.Option,{value:"singleWeight",children:"件重"}),a(r.Option,{value:"quantity",children:"数量"}),a(r.Option,{value:"category",children:"品名"})]}),s.type==="category"?a(r,{placeholder:"请选择品名",style:{width:160},value:s.value,showSearch:!0,filterOption:F,onChange:e=>O({type:s.type,value:e}),children:v==null?void 0:v.map(e=>a(r.Option,{value:e.key,children:e.title},e.id))}):a(S,{value:s.value,placeholder:"值",style:{width:160},onChange:e=>O({type:s.type,value:e})}),a(C,{type:"primary",onClick:()=>q(),children:"分配"})]})]}),o(j,{children:[a(C,{onClick:D,children:"取消"}),a(C,{type:"primary",onClick:U,children:"确定"})]})]});return a(G,{tip:"加载中...",loading:T,children:o(M,{height:"100%",placement:"bottom",title:i.id?"编辑":"新增",visible:!0,footer:A,autoFocus:!1,focusLock:!1,onCancel:D,confirmLoading:V,children:[a(I,{labelCol:{span:6},wrapperCol:{span:18},form:d,initialValues:i.id&&i||{orderDate:x().toISOString()},validateMessages:Q,children:o(Z,{className:"grid-demo",style:{marginBottom:16},children:[a(g,{span:8,children:a(m,{label:"客户名称",field:"customerId",rules:[{required:!0}],children:a(r,{placeholder:"请选择",allowClear:!0,showSearch:!0,filterOption:F,children:b==null?void 0:b.map(e=>a(r.Option,{value:e.id,children:e.name},e.id))})})}),a(g,{span:8,children:a(m,{label:"订单号",field:"orderNumber",children:a(S,{placeholder:"请输入订单号"})})}),o(g,{span:8,children:[a(m,{label:"字印",field:"fontPrint",children:a(r,{placeholder:"请选择",allowClear:!0,showSearch:!0,filterOption:F,onChange:(e,t)=>{d.setFieldValue("fontPrintName","children"in t?t==null?void 0:t.children:"")},children:h==null?void 0:h.map(e=>a(r.Option,{value:e.key,children:e.title},e.id))})}),a(m,{hidden:!0,label:"字印",field:"fontPrintName",children:a(S,{placeholder:"请输入字印",disabled:!0})})]}),a(g,{span:8,children:a(m,{label:"下单日期",field:"orderDate",children:a(W,{onChange:(e,t)=>d.setFieldValue("orderDate",t.toISOString()),placeholder:"请选择下单日期",style:{width:"100%"}})})}),a(g,{span:8,children:a(m,{label:"备注",field:"remark",children:a(S,{placeholder:"请输入备注"})})})]})}),a(J,{detailData:p,selectedRow:L,setDetailData:y,setSelectedRow:N})]})})}export{he as default};