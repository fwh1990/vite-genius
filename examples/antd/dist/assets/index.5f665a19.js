import{r as e,B as t,S as r,T as o,a as n}from"./vendor.db819f9a.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(r){const o=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((r,a)=>{const l=new URL(e,o);if(self[t].moduleMap[l])return r(self[t].moduleMap[l]);const m=new Blob([`import * as m from '${l}';`,`${t}.moduleMap['${l}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(m),onerror(){a(new Error(`Failed to import: ${e}`)),n(c)},onload(){r(self[t].moduleMap[l]),n(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("assets/");var a="_2ptYGTTLxQ6sOMhM4vMWr1";var l=e.memo((()=>e.createElement("div",{className:a},e.createElement(t,{type:"primary",icon:e.createElement(r,null)},"Antd Button"),e.createElement("br",null),e.createElement(o,{color:"orange"},"Tags"))));n.render(e.createElement(e.StrictMode,null,e.createElement(l,null)),document.getElementById("root"));
