import{s as C,b as h,q as S,r as _,C as E,u as O,j as g,t as T,a as $,P as q,o as z}from"./index-6bfe4b1d.js";function A(e){var t=e.style,s=e.width,r=s===void 0?"60%":s,n=e.rows,i=n===void 0?3:n,c=e.className,a=e.prefixCls,u=C(a+"-text",c),l=[];function f(d){if(S(r))return r[d];if(i-1===d)return r}for(var m=0;m<i;m++)l.push(h.createElement("li",{className:a+"-text-row",key:m,style:{width:f(m)}}));return h.createElement("ul",{className:u,style:t},l)}function R(e){var t,s=e.style,r=e.shape,n=r===void 0?"square":r,i=e.size,c=e.position,a=c===void 0?"left":c,u=e.className,l=e.prefixCls,f=C(l+"-image",(t={},t[l+"-image-"+a]=a,t[l+"-image-"+n]=n,t[l+"-image-"+i]=i,t),u);return h.createElement("div",{className:f,style:s})}var v=globalThis&&globalThis.__assign||function(){return v=Object.assign||function(e){for(var t,s=1,r=arguments.length;s<r;s++){t=arguments[s];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},v.apply(this,arguments)};function p(e){return z(e)?e:{}}var D={text:!0,loading:!0};function F(e,t){var s,r=_.useContext(E),n=r.getPrefixCls,i=r.componentConfig,c=r.rtl,a=O(e,D,i==null?void 0:i.Skeleton),u=a.style,l=a.className,f=a.animation,m=a.loading,d=a.image,y=a.text,P=a.children,x=p(d),k=p(y),o=n("skeleton"),w=C(o,(s={},s[o+"-animate"]=f,s[o+"-rtl"]=c,s),l);function N(){return d&&g("div",{className:o+"-header",children:g(R,{...v({prefixCls:o},x)})})}function j(){return y&&g("div",{className:o+"-content",children:g(A,{...v({prefixCls:o},k)})})}return g(T,{children:m?$("div",{...v({},q(a),{className:w,style:u,ref:t}),children:[x.position!=="right"&&N(),j(),x.position==="right"&&N()]}):P})}var b=_.forwardRef(F);b.displayName="Skeleton";const M=b;export{M as S};