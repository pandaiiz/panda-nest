import{r as x,C as W,u as X,m as M,n as E,o as Y,p as Z,q as F,s as $,a as m,j as r,t as A,T as S,S as ee,i as te}from"./index-f1de8f67.js";import{C as ae}from"./index-0b718c96.js";var p=globalThis&&globalThis.__assign||function(){return p=Object.assign||function(o){for(var n,i=1,d=arguments.length;i<d;i++){n=arguments[i];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(o[u]=n[u])}return o},p.apply(this,arguments)},ne=globalThis&&globalThis.__read||function(o,n){var i=typeof Symbol=="function"&&o[Symbol.iterator];if(!i)return o;var d=i.call(o),u,N=[],l;try{for(;(n===void 0||n-- >0)&&!(u=d.next()).done;)N.push(u.value)}catch(T){l={error:T}}finally{try{u&&!u.done&&(i=d.return)&&i.call(d)}finally{if(l)throw l.error}}return N},B=function(o){return F(o)?o.reduce(function(n,i){return n+(i.span||1)},0):0},re={layout:"horizontal",column:3,tableLayout:"auto"};function k(o){var n,i=x.useContext(W),d=i.getPrefixCls,u=i.componentConfig,N=i.rtl,l=X(o,re,u==null?void 0:u.Descriptions),T=l.style,O=l.className,y=l.column,w=l.title,C=l.data,V=l.border,P=l.labelStyle,R=l.valueStyle,z=l.colon,b=l.layout,j=l.size,q=l.tableLayout,a=d("descriptions"),I=ne(x.useState(),2),H=I[0],K=I[1],D=x.useRef(null);x.useEffect(function(){return D.current=M.subscribe(function(t){for(var s=0;s<E.length;s++){var e=E[s];if(t[e]){K(e);break}}}),function(){M.unsubscribe(D.current)}},[]);var c=3;Y(y)&&(c=y[H]||3),Z(y)&&y>0&&(c=y);var h=[];if(F(C)&&C.length>0&&c){C.forEach(function(t){var s=h[h.length-1],e=B(s);e===0?h.push([p(p({},t),{span:t.span?t.span>c?c:t.span:1})]):e===c?h.push([p(p({},t),{span:t.span?t.span>c?c:t.span:1})]):s.push(p(p({},t),{span:t.span?t.span+e>c?c-e:t.span:1}))});var g=h[h.length-1],L=B(g);L<c&&(g[g.length-1].span=g[g.length-1].span+c-L)}function Q(t,s){return m(A,{children:[r("tr",{className:a+"-row",children:t.map(function(e,f){var v=e.span>1?{colSpan:e.span}:{};return m("td",{...p({key:(e.key||f)+"_label",className:a+"-item-label"},v,{style:P}),children:[e.label,z]})})}),r("tr",{className:a+"-row",children:t.map(function(e,f){var v=e.span>1?{colSpan:e.span}:{};return r("td",{...p({key:(e.key||f)+"_value",className:a+"-item-value"},v,{style:R}),children:e.value})})})]})}function _(t,s){return r("tr",{className:a+"-row",children:t.map(function(e,f){var v=e.span>1?{colSpan:e.span*2-1}:{};return m(A,{children:[m("td",{className:a+"-item-label",style:P,children:[e.label,z]}),r("td",{...p({className:a+"-item-value"},v,{style:R}),children:e.value})]})})},s)}function G(t,s){return r("tr",{className:a+"-row",children:t.map(function(e,f){var v=e.span>1?{colSpan:e.span}:{};return m("td",{...p({key:e.key||f},v,{className:a+"-item"}),children:[m("div",{className:a+"-item-label-inline",style:P,children:[e.label,z]}),r("div",{className:a+"-item-value-inline",style:R,children:e.value})]})})},s)}function J(t,s){return b==="inline-vertical"||b==="inline-horizontal"?G(t,s):b==="vertical"?Q(t):_(t,s)}var U=$(a,(n={},n[a+"-border"]=V,n[a+"-layout-"+b]=b,n[a+"-size-"+j]=j,n[a+"-table-layout-fixed"]=q==="fixed",n[a+"-rtl"]=N,n),O);return m("div",{className:U,style:T,children:[w&&r("div",{className:a+"-title",children:w}),r("div",{className:a+"-body",children:r("table",{className:a+"-table",cellPadding:0,cellSpacing:0,children:r("tbody",{children:h.map(function(t,s){return J(t,s)})})})})]})}k.displayName="Descriptions";function ie(){const o=[{label:m("span",{children:[r(S.Text,{style:{paddingRight:8},children:["monitor.studioStatus.mainstream"]}),["monitor.studioStatus.bitRate"]]}),value:"6 Mbps"},{label:["monitor.studioStatus.frameRate"],value:"60"},{label:m("span",{children:[r(S.Text,{style:{paddingRight:8},children:["monitor.studioStatus.hotStandby"]}),["monitor.studioStatus.bitRate"]]}),value:"6 Mbps"},{label:["monitor.studioStatus.frameRate"],value:"60"},{label:m("span",{children:[r(S.Text,{style:{paddingRight:8},children:["monitor.studioStatus.coldStandby"]}),["monitor.studioStatus.bitRate"]]}),value:"6 Mbps"},{label:["monitor.studioStatus.frameRate"],value:"60"}],n=[{label:["monitor.studioStatus.line"],value:"热备"},{label:"CDN",value:"KS"},{label:["monitor.studioStatus.play"],value:"FLV"},{label:["monitor.studioStatus.pictureQuality"],value:"原画"}];return m(ae,{children:[m(ee,{align:"start",children:[r(S.Title,{style:{marginTop:0,marginBottom:16},heading:6,children:["monitor.studioStatus.title.studioStatus"]}),r(te,{color:"green",children:["monitor.studioStatus.smooth"]})]}),r(k,{colon:": ",layout:"horizontal",data:o,column:2}),r(S.Title,{style:{marginBottom:16},heading:6,children:["monitor.studioStatus.title.pictureInfo"]}),r(k,{colon:": ",layout:"horizontal",data:n,column:2})]})}export{ie as default};
