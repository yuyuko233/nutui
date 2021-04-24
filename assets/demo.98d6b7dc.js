var e=Object.defineProperty,n=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,t=(n,o,l)=>o in n?e(n,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[o]=l,i=(e,i)=>{for(var s in i||(i={}))n.call(i,s)&&t(e,s,i[s]);if(o)for(var s of o(i))l.call(i,s)&&t(e,s,i[s]);return e};import{e as s,c}from"./mobile.c47dcebd.js";import{d as r,f as a,Y as u,r as d,o as f,c as m,i as p}from"./index.d870aa4d.js";const y=r(s),b={type:"base",showPopup:!1,msg:"",color:void 0,background:void 0,duration:3e3,className:"",onClosed:null,onClick:null,onOpened:null,textTimer:null,unmount:null};let g=[],h=[];const w=e=>{if(e){const n=document.getElementById(e);h=h.filter((n=>n.id!==e)),g=g.filter((n=>n!==e)),n&&document.body.removeChild(n)}else g.forEach((e=>{const n=document.getElementById(e);n&&document.body.removeChild(n)})),h=[],g=[]},k=e=>{let n;if(e.unmount=w,e.id){if(n=e.id,g.find((n=>n===e.id)))return(e=>{const n=document.getElementById(e.id);if(n){const o=h.find((n=>n.id===e.id));e=i(o?i(i({},b),o):i({},b),e);const l=a(s,e);return u(l,n),l.component.ctx}})(e)}else n=(new Date).getTime()+"";(e=i(i({},b),e)).id=n,g.push(e.id),h.push(e);const o=document.createElement("view");o.id=e.id;const l=a(y,e);return u(l,o),document.body.appendChild(o),setTimeout((()=>{l.showPopup=!0}),0),l.component.ctx},N=e=>{e||console.warn("[NutUI Notify]: msg不能为空")},C={text:(e,n={})=>(N(e),k(i(i({},n),{msg:e}))),primary:(e,n={})=>(N(e),k(i(i({},n),{msg:e,type:"primary"}))),success:(e,n={})=>(N(e),k(i(i({},n),{msg:e,type:"success"}))),danger:(e,n={})=>(N(e),k(i(i({},n),{msg:e,type:"danger"}))),warn:(e,n={})=>(N(e),k(i(i({},n),{msg:e,type:"warning"}))),hide(){w()}},{createDemo:I}=c("notify");var v=I({setup:()=>({baseNotify:e=>{C.text(e,{onClose:()=>{console.log("close")},onClick:()=>{console.log("click")}})},primaryNotify:e=>{C.primary(e)},successNotify:e=>{C.success(e)},errorNotify:e=>{C.danger(e)},warningNotify:e=>{C.warn(e)},cusBgNotify:e=>{C.text(e,{color:"#ad0000",background:"#ffe1e1"})},timeNotify:e=>{C.text(e,{duration:1e4})}})});const x={class:"demo"},L=a("h2",null,"基础用法",-1),O=a("span",null,[a("label",null,"基础用法")],-1),_=a("h2",null,"通知类型",-1),j=a("span",null,[a("label",null,"主要通知")],-1),E=a("span",null,[a("label",null,"成功通知")],-1),B=a("span",null,[a("label",null,"危险通知")],-1),P=a("span",null,[a("label",null,"警告通知")],-1),T=a("h2",null,"自定义样式",-1),D=a("span",null,[a("label",null,"自定义背景色和字体颜色")],-1),S=a("h2",null,"自定义时长",-1),U=a("span",null,[a("label",null,"自定义时长")],-1);v.render=function(e,n,o,l,t,i){const s=d("nut-cell");return f(),m("div",x,[L,a(s,{showIcon:!0,isLink:!0,onClick:n[1]||(n[1]=n=>e.baseNotify("基础用法"))},{default:p((()=>[O])),_:1}),_,a(s,{showIcon:!0,isLink:!0,onClick:n[2]||(n[2]=n=>e.primaryNotify("主要通知"))},{default:p((()=>[j])),_:1}),a(s,{showIcon:!0,isLink:!0,onClick:n[3]||(n[3]=n=>e.successNotify("成功通知"))},{default:p((()=>[E])),_:1}),a(s,{showIcon:!0,isLink:!0,onClick:n[4]||(n[4]=n=>e.errorNotify("危险通知"))},{default:p((()=>[B])),_:1}),a(s,{showIcon:!0,isLink:!0,onClick:n[5]||(n[5]=n=>e.warningNotify("警告通知"))},{default:p((()=>[P])),_:1}),T,a(s,{showIcon:!0,isLink:!0,onClick:n[6]||(n[6]=n=>e.cusBgNotify("自定义背景色和字体颜色"))},{default:p((()=>[D])),_:1}),S,a(s,{showIcon:!0,isLink:!0,onClick:n[7]||(n[7]=n=>e.timeNotify("自定义时长"))},{default:p((()=>[U])),_:1})])};export default v;
