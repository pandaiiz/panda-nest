import{Y as p,aN as _,a as c,j as e,F as o,e as m,d as n,S as f,B as i,a1 as b,G as S}from"./index-d9b286db.js";import{f as g}from"./common-e743d0de.js";import{I as q}from"./index-ec76331c.js";const w="_red_1ucq8_1",y="_toolbar_1ucq8_5",C="_operations_1ucq8_10",l={red:w,toolbar:y,operations:C,"content-type":"_content-type_1ucq8_13","search-form-wrapper":"_search-form-wrapper_1ucq8_20","right-button":"_right-button_1ucq8_25","button-group":"_button-group_1ucq8_34","search-form":"_search-form_1ucq8_20","arco-table-custom-filter":"_arco-table-custom-filter_1ucq8_45"},{Row:F,Col:u}=S,{useForm:I}=o;function j(s){const[t]=I(),{data:a}=p(()=>_("CATEGORY")),d=()=>{const r=t.getFieldsValue();s.onSearch(r)},h=()=>{t.resetFields(),s.onSearch({})};return c("div",{className:l["search-form-wrapper"],children:[e(o,{form:t,className:l["search-form"],labelAlign:"left",labelCol:{span:5},wrapperCol:{span:19},children:c(F,{gutter:24,children:[e(u,{span:8,children:e(o.Item,{label:"单号",field:"orderNumber",children:e(m,{allowClear:!0,placeholder:"单号"})})}),e(u,{span:8,children:e(o.Item,{label:"品名",field:"category",children:e(n,{placeholder:"请选择品名",allowClear:!0,showSearch:!0,filterOption:g,children:a==null?void 0:a.map(r=>e(n.Option,{value:r.key,children:r.title},r.id))})})})]})}),e("div",{className:l["right-button"],children:c(f,{children:[e(i,{type:"primary",icon:e(b,{}),onClick:d,children:"搜索"}),e(i,{icon:e(q,{}),onClick:h,children:"重置"})]})})]})}const R=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));export{j as S,R as f,l as s};