import{aJ as t,F as o,Y as m,j as a,a as f,e as d,d as c,X as g}from"./index-6bfe4b1d.js";import{M as h}from"./index-e8fe6b86.js";import{g as b}from"./service-6a791ee7.js";const y=e=>t.get("/api/user/paging",{params:e}),v=e=>t.post("/api/user",e),F=(e,r)=>t.patch(`/api/user/${e}`,r),I=e=>t.delete(`/api/user/${e}`),n=o.Item;function U({data:e,onClose:r}){const[l]=o.useForm(),{data:i}=m(b);async function u(){await l.validate();const s=l.getFieldsValue();e.id?await F(e.id,s):await v(s),g.success("提交成功 !"),r()}return a("div",{children:a(h,{title:e.id?"编辑":"新增",visible:!0,onOk:u,autoFocus:!1,focusLock:!1,onCancel:r,children:f(o,{labelCol:{span:5},wrapperCol:{span:18},form:l,initialValues:e.id?e:{enabled:!0,breadcrumb:!0},validateMessages:{required:(s,{label:p})=>`必须填写${p}`,string:{length:"字符数必须是 #{length}",match:"不匹配正则 #{pattern}"},number:{min:"最小值为 #{min}",max:"最大值为 #{max}"}},children:[a(n,{label:"姓名",field:"name",rules:[{required:!0}],children:a(d,{placeholder:"请输入用户姓名"})}),a(n,{label:"账号",field:"account",children:a(d,{placeholder:"请输入账号"})}),a(n,{label:"角色",field:"roleId",rules:[{required:!0}],children:a(c,{placeholder:"请选择角色",children:i==null?void 0:i.map(s=>a(c.Option,{value:s.id,children:s.title},s.id))})})]})})})}const M=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));export{U,I as d,M as e,y as g};
