import{F as D,G as E,Y as f,aN as S,r as o,a0 as j,j as e,f as q,a as d,aL as G,d as t,e as g,S as F,B as x,X as A,aK as V}from"./index-c8148c41.js";import{D as H}from"./index-0c79071c.js";import"./index-19e59e69.js";import{g as K,u as T,a as P}from"./service-c4de76ee.js";import{b as W}from"./service-6594e958.js";import X from"./editableTable-c849372e.js";import{s as _}from"./index.module-c4e1ad75.js";import"./index-1c8757fc.js";import"./index-c467507d.js";import"./pictureUpload-c2ef51cc.js";import"./index.browser-7e542916.js";const c=D.Item,$=E.Row,h=E.Col;function se({data:r,onClose:w}){const[p]=D.useForm(),{data:b}=f(W),{data:v,loading:R}=f(()=>K(r.id)),{data:u}=f(()=>S("MARKING")),{data:y}=f(()=>S("CATEGORY")),[Y,C]=o.useState(!1),[n,m]=o.useState([]),[k,B]=o.useState([]),[l,O]=o.useState({type:"circle",number:""});o.useEffect(()=>{r.id&&p.setFieldsValue({orderDate:j().format()})},[]),o.useEffect(()=>{m(v)},[v]);async function L(){try{await p.validate();const a=p.getFieldsValue();a.charactersTitle=u.find(s=>s.id===a.charactersId).title;const i={orderData:a,orderDetailData:n};n.forEach(s=>delete s.orderId),C(!0),r.id?await T(r.id,i):await P(i),A.success("提交成功 !"),w()}catch{}finally{C(!1)}}const M=()=>{const{type:a,number:i}=l,s=V.cloneDeep(n);s.forEach(I=>{k.find(N=>N.id===I.id)&&(I[a]=i)}),m(s)};return e(q,{tip:"加载中...",loading:R,children:d(G,{height:"100%",placement:"bottom",title:r.id?"编辑":"新增",visible:!0,onOk:L,autoFocus:!1,focusLock:!1,onCancel:w,confirmLoading:Y,children:[e(D,{labelCol:{span:6},wrapperCol:{span:18},form:p,initialValues:r.id?r:{enabled:!0,breadcrumb:!0},validateMessages:{required:(a,{label:i})=>`必须填写${i}`,string:{length:"字符数必须是 #{length}",match:"不匹配正则 #{pattern}"},number:{min:"最小值为 #{min}",max:"最大值为 #{max}"}},children:d($,{className:"grid-demo",style:{marginBottom:16},children:[e(h,{span:8,children:e(c,{label:"客户名称",field:"customerId",rules:[{required:!0}],children:e(t,{placeholder:"请选择",allowClear:!0,children:b==null?void 0:b.map(a=>e(t.Option,{value:a.id,children:a.name},a.id))})})}),e(h,{span:8,children:e(c,{label:"订单号",field:"orderNumber",children:e(g,{placeholder:"请输入订单号"})})}),e(h,{span:8,children:e(c,{label:"字印",field:"charactersId",children:e(t,{placeholder:"请选择",allowClear:!0,children:u==null?void 0:u.map(a=>e(t.Option,{value:a.id,children:a.title},a.id))})})}),e(h,{span:8,children:e(c,{label:"下单日期",field:"orderDate",children:e(H,{format:"YYYY-MM-DD HH:mm:ss",placeholder:"请选择下单日期",style:{width:"100%"}})})}),e(h,{span:8,children:e(c,{label:"备注",field:"remark",children:e(g,{placeholder:"请输入备注"})})})]})}),d("div",{className:_["button-group"],children:[e(F,{children:e(x,{type:"primary",onClick:()=>m([...n,{}]),children:"新增"})}),e(F,{children:d("div",{style:{display:"flex"},children:[d(t,{value:l.type,showSearch:!0,placeholder:"请选择列",style:{marginRight:10,width:100},onChange:a=>O({type:a,number:l.number}),children:[e(t.Option,{value:"circle",children:"圈号"}),e(t.Option,{value:"singleWeight",children:"件重"}),e(t.Option,{value:"quantity",children:"数量"}),e(t.Option,{value:"categoryId",children:"品名"})]}),l.type==="categoryId"?e(t,{placeholder:"请选择品名",allowClear:!0,value:l.number,children:y==null?void 0:y.map(a=>e(t.Option,{value:a.id,children:a.title},a.id))}):e(g,{value:l.number,placeholder:"值",style:{width:100},onChange:a=>O({type:l.type,number:a})}),e(x,{type:"primary",onClick:()=>M(),children:"分配"})]})})]}),e(X,{detailData:n,setDetailData:m,setSelectedRow:B})]})})}export{se as default};
