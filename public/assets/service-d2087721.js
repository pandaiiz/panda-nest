import{aJ as e}from"./index-6bfe4b1d.js";const a=t=>e.get("/api/customer/paging",{params:t}),r=()=>e.get("/api/customer"),u=t=>e.post("/api/customer",t),m=(t,s)=>e.patch(`/api/customer/${t}`,s),c=t=>e.delete(`/api/customer/${t}`);export{u as a,r as b,c as d,a as g,m as u};