import{a as r,j as e,F as a,e as o,S as m,B as c,a1 as p,G as u}from"./index-6bfe4b1d.js";import{s}from"./index.module-6d5fffca.js";import{I as f}from"./index-8d617b7d.js";const{Row:C,Col:t}=u,{useForm:S}=a;function w(n){const[l]=S(),i=()=>{const h=l.getFieldsValue();n.onSearch(h)},d=()=>{l.resetFields(),n.onSearch({})};return r("div",{className:s["search-form-wrapper"],children:[e(a,{form:l,className:s["search-form"],labelAlign:"left",labelCol:{span:6},wrapperCol:{span:18},children:r(C,{gutter:24,children:[e(t,{span:8,children:e(a.Item,{label:"客户名称",field:"name",children:e(o,{allowClear:!0,placeholder:"客户名称"})})}),e(t,{span:8,children:e(a.Item,{label:"客户编号",field:"customerCode",children:e(o,{allowClear:!0,placeholder:"客户编号"})})})]})}),e("div",{className:s["right-button"],children:r(m,{children:[e(c,{type:"primary",icon:e(p,{}),onClick:i,children:"搜索"}),e(c,{icon:e(f,{}),onClick:d,children:"重置"})]})})]})}export{w as default};