import{aX as g,R as j,r as d,Y as C,a as l,j as e,B as r,S as p,X as _,aU as w,t as k,aV as M,aW as R,G as O}from"./index-6bfe4b1d.js";import{M as I}from"./index-e8fe6b86.js";import{C as x}from"./index-6b1380ec.js";import K from"./edit-2a16a939.js";import{c as T,T as z}from"./service-5ed2f836.js";import{g as E,d as v,u as P}from"./service-6a791ee7.js";const B=g.Item;function b(){const[a,n]=j(y),[u,o]=d.useState(!1),{data:s,refresh:i}=C(E);function f(t){I.confirm({title:"请确认是否要删除此数据！",onOk:async()=>{await v(t.id),await i(),_.success("删除成功！")}})}const h=async()=>{o(!1),await i()};return l(x,{title:"角色列表",style:{width:"100%"},extra:e(r,{type:"text",onClick:()=>{n({}),o(!0)},children:"新增"}),children:[e(g,{style:{height:"100%"},children:s==null?void 0:s.map(t=>l(B,{onClick:()=>{n(t)},style:{display:"flex",justifyContent:"space-between"},children:[e(p,{children:t.title}),l(p,{children:[e(r,{type:"primary",size:"mini",onClick:()=>{n(t),o(!0)},children:"编辑"}),e(r,{type:"primary",status:"danger",size:"mini",onClick:()=>f(t),children:"删除"})]})]},t.id))}),u&&e(K,{data:a,onClose:h})]})}const U=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"}));function S(){const a=w(y),{data:n,loading:u}=C(T),o=n==null?void 0:n.map(t=>t.id),[s,i]=d.useState([]),[f,h]=d.useState([]);return d.useEffect(()=>{var t;i(((t=a==null?void 0:a.menus)==null?void 0:t.map(c=>{if(c.menu.parentId)return c.menuId}))||[])},[a]),e(x,{title:"角色权限",style:{width:"100%"},loading:u,extra:(a==null?void 0:a.id)&&l(p,{children:[e(r,{type:"text",onClick:()=>i(s.length?[]:o),children:s.length?"取消选择":"全选"}),e(r,{type:"text",onClick:async()=>{await P(a==null?void 0:a.id,{menus:[...s,...f].filter(t=>t)}),_.success("保存成功！"),setTimeout(()=>window.location.reload(),500)},children:"保存"})]}),children:a!=null&&a.id?e(k,{children:(n==null?void 0:n.length)>0&&e(z,{checkable:!0,selectable:!1,checkedKeys:s,onCheck:(t,c)=>{h(c.halfCheckedKeys),i(t)},treeData:n,autoExpandParent:!0,fieldNames:{key:"id"}})}):e(M,{description:"请先选择左侧的角色"})})}const W=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),{Row:G,Col:m}=O,y=R({key:"selectedRoleState",default:{menus:[]}}),V=()=>e(k,{children:l(G,{gutter:20,children:[e(m,{span:6,children:e(b,{})}),e(m,{span:18,children:e(S,{})})]})}),Y=Object.freeze(Object.defineProperty({__proto__:null,default:V,selectedRoleState:y},Symbol.toStringTag,{value:"Module"}));export{Y as a,U as i,W as m};
