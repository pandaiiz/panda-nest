import{b as u,r as O,I as d,j as i,_ as b}from"./index-f1de8f67.js";function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?p(Object(t),!0).forEach(function(r){b(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function h(e,n){var t=O.useContext(d),r=t.prefixCls,o=r===void 0?"arco":r,l=e.spin,s=e.className,c=f(f({"aria-hidden":!0,focusable:!1,ref:n},e),{},{className:"".concat(s?s+" ":"").concat(o,"-icon ").concat(o,"-icon-shrink")});return l&&(c.className="".concat(c.className," ").concat(o,"-icon-loading")),delete c.spin,delete c.isIcon,i("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...c,children:i("path",{d:"M20 44V29c0-.552-.444-1-.996-1H4M28 4v15c0 .552.444 1 .996 1H44"})})}var a=u.forwardRef(h);a.defaultProps={isIcon:!0};a.displayName="IconShrink";const j=a;export{j as I};