import{a as n,j as e,F as s,e as h,S as d,B as o,a1 as m,G as p}from"./index-6bfe4b1d.js";import{s as r}from"./index.module-c4e1ad75.js";import{I as u}from"./index-8d617b7d.js";const{Row:f,Col:S}=p,{useForm:C}=s;function g(l){const[a]=C(),c=()=>{const i=a.getFieldsValue();l.onSearch(i)},t=()=>{a.resetFields(),l.onSearch({})};return n("div",{className:r["search-form-wrapper"],children:[e(s,{form:a,className:r["search-form"],labelAlign:"left",labelCol:{span:5},wrapperCol:{span:19},children:e(f,{gutter:24,children:e(S,{span:8,children:e(s.Item,{label:"学生姓名",field:"name",children:e(h,{allowClear:!0,placeholder:"学生姓名"})})})})}),e("div",{className:r["right-button"],children:n(d,{children:[e(o,{type:"primary",icon:e(m,{}),onClick:c,children:"搜索"}),e(o,{icon:e(u,{}),onClick:t,children:"重置"})]})})]})}export{g as default};
