import{d as a,c as p,a as r,b as n,r as c,o as d}from"./index-thcuw8XV.js";const E={class:"about"},g=r("h1",null,"This is an about page",-1),u=a({__name:"AboutView",setup(_){const s=()=>{typeError.length>0&&console.log("err!")},i=()=>{throw new ReferenceError("Hello")},l=()=>{throw new SyntaxError("Hello")};return(f,e)=>{const o=c("el-divider");return d(),p("div",E,[g,r("p",{onClick:e[0]||(e[0]=t=>s())},"hjzz触发TypeError1"),n(o),r("p",{onClick:e[1]||(e[1]=t=>i())},"hjzz触发ReferenceError1"),n(o),r("p",{onClick:e[2]||(e[2]=t=>l())},"hjzz触发SyntaxError1")])}}});export{u as default};
