import{j as v,k as h,o as y,c as b,w as t,a as o,b as e,e as n,t as c,d as g,r as s}from"./index.f427c791.js";const k={class:"test ma12 pa12 bd1 bdrs2 blue-light5--bg"},N=n("h1",{class:"mt0"},"Testing playground",-1),C=n("p",null,"content",-1),I={class:"ma4"},T={__name:"test",setup(x){const _=v("$waveui"),p=()=>{_.notify("test!")};return h(()=>{p(),console.log(_)}),(d,r)=>{const i=s("w-button"),u=s("w-tooltip"),m=s("w-menu"),w=s("w-accordion"),f=s("w-app");return y(),b(f,null,{default:t(()=>[o(i,{onClick:r[0]||(r[0]=a=>d.$waveui.notify("test too easy"))},{default:t(()=>[e("Notify too easy")]),_:1}),o(i,{onClick:p},{default:t(()=>[e("Notify. oh yeah.")]),_:1}),n("div",k,[N,o(m,{overlay:"",arrow:""},{activator:t(({on:a})=>[o(i,c(a),{default:t(()=>[e("test tooltip in menu")]),_:2},1040)]),default:t(()=>[C,o(u,null,{activator:t(({on:a})=>[n("span",c(a,!0),"I have a tooltip",16)]),default:t(()=>[e("I'm a tooltip.")]),_:1})]),_:1}),o(w,{class:"white--bg",items:3,duration:2e3},{"item-title":t(()=>[e("item title")]),"item-content":t(({item:a,index:l})=>[e("The item "+g(l),1)]),"item-content.2":t(({item:a})=>[n("div",I,[o(u,null,{activator:t(({on:l})=>[n("span",c(l,!0),"I have a tooltip",16)]),default:t(()=>[e("I'm a tooltip.")]),_:1})])]),_:1})])]),_:1})}}};export{T as default};