import{F as i,j as e,a as d,e as o,X as c}from"./index-6b1c5c2b.js";import{M as n}from"./index-5a79b2eb.js";import{u as f,a as m}from"./service-e28c2346.js";const t=i.Item;function b({data:l,onClose:s}){const[a]=i.useForm();async function u(){await a.validate();const r=a.getFieldsValue();l.id?await f(l.id,r):await m(r),c.success("提交成功 !"),s()}return e("div",{children:e(n,{title:l.id?"编辑":"新增",visible:!0,onOk:u,autoFocus:!1,focusLock:!1,onCancel:s,children:d(i,{labelCol:{span:4},form:a,initialValues:l,children:[e(t,{label:"名称",field:"title",rules:[{required:!0}],children:e(o,{placeholder:"请输入角色名称"})}),e(t,{label:"KEY",field:"key",rules:[{required:!0}],children:e(o,{placeholder:"请输入KEY"})})]})})})}export{b as default};
