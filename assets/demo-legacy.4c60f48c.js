System.register(["./mobile-legacy.b97bbe26.js","./index-legacy.579cfc3c.js"],(function(t){"use strict";var e,s,n,i,o,c;return{setters:[function(t){e=t.c,s=t.T},function(t){n=t.r,i=t.o,o=t.c,c=t.f}],execute:function(){const{createDemo:l}=e("toast"),a=t("default",l({setup:()=>({textToast:t=>{s.text(t)},successToast:t=>{s.success(t)},errorToast:t=>{s.fail(t)},warningToast:t=>{s.warn(t)},loadingToast:t=>{s.loading(t)}})})),r={class:"demo"},u=c("h2",null,"基本用法",-1);a.render=function(t,e,s,l,a,T){const g=n("nut-cell");return i(),o("div",r,[u,c(g,{title:"Text 文字提示","is-link":"",onClick:e[1]||(e[1]=e=>t.textToast("网络失败，请稍后再试~"))}),c(g,{title:"Success 成功提示","is-link":"",onClick:e[2]||(e[2]=e=>t.successToast("成功提示"))}),c(g,{title:"Error 失败提示","is-link":"",onClick:e[3]||(e[3]=e=>t.errorToast("失败提示"))}),c(g,{title:"Warning 警告提示","is-link":"",onClick:e[4]||(e[4]=e=>t.warningToast("警告提示"))}),c(g,{title:"Loading 加载提示","is-link":"",onClick:e[5]||(e[5]=e=>t.loadingToast("加载中"))})])}}}}));
