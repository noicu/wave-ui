import{r as l,o as d,c as m,w as e,a as t,b as n,m as w,t as h,d as A,e as i,f,_ as x,g as S,U as $,h as R,T as M,n as I,i as N,F as P}from"./index.0ad1f9e2.js";const V=i("span",{class:"grey-dark1"},"Wave UI",-1),D=i("div",{class:"spacer"},null,-1),L=["innerHTML"],H=i("div",{class:"text-center"},[n("View the project"),i("br"),n("on Github")],-1);function G(o,r,b,C,O,c){const p=l("w-icon"),u=l("router-link"),_=l("w-tooltip"),y=l("w-switch"),k=l("w-button"),g=l("w-toolbar");return d(),m(g,{class:"main-toolbar",fixed:""},{default:e(()=>[t(u,{class:"w-flex no-grow fill-height align-center home-link",to:"/",onClick:r[0]||(r[0]=a=>c.scrollTop(!1))},{default:e(()=>[t(p,{class:"wave-logo mr3",size:"3em"},{default:e(()=>[n("wi-wave")]),_:1}),V]),_:1}),D,t(_,{"z-index":"20","append-to":".main-toolbar"},{activator:e(({on:a})=>[t(u,w({class:"v3-is-out w-tag w-tag--round mr4 xs-hide"},h(a),{to:"/release-notes",onClick:r[1]||(r[1]=E=>c.scrollTop(!0))}),{default:e(()=>[n("WAVE UI 3.0 IS OUT!")]),_:2},1040)]),default:e(()=>[n("Go to the release notes!")]),_:1}),t(y,{class:"mr2","model-value":o.$store.state.darkMode,"onUpdate:modelValue":r[2]||(r[2]=a=>(o.$store.commit("setDarkMode",a),o.$waveui.switchTheme(a?"dark":"light"))),"bg-color":"blue-dark5"},{thumb:e(()=>[t(p,null,{default:e(()=>[n("mdi "+A(o.$store.state.darkMode?"mdi-weather-night":"mdi-white-balance-sunny"),1)]),_:1})]),_:1},8,["model-value"]),i("strong",{class:"version size--xs",innerHTML:`v<code>${c.version}</code>`},null,8,L),t(_,{"z-index":"20","append-to":".main-toolbar"},{activator:e(({on:a})=>[i("div",w({class:"ml1"},h(a,!0)),[t(u,{to:"/release-notes",onClick:r[3]||(r[3]=E=>c.scrollTop(!0))},{default:e(()=>[t(p,{lg:""},{default:e(()=>[n("mdi mdi-update")]),_:1})]),_:1})],16)]),default:e(()=>[n("Release notes")]),_:1}),t(_,{"z-index":"20","append-to":".main-toolbar"},{activator:e(({on:a})=>[i("a",w({class:"grey-dark3 ml2"},h(a,!0),{href:"https://github.com/antoniandre/wave-ui",target:"_blank"}),[t(p,{lg:""},{default:e(()=>[n("mdi mdi-github")]),_:1})],16)]),default:e(()=>[H]),_:1}),t(_,{"z-index":"20","align-right":"","append-to":".main-toolbar"},{activator:e(({on:a})=>[i("div",w({class:"ml2 mr1"},h(a,!0)),[t(u,{class:"pink-light1",to:"/backers",onClick:r[4]||(r[4]=E=>c.scrollTop(!0))},{default:e(()=>[t(p,{lg:""},{default:e(()=>[n("mdi mdi-heart-multiple-outline")]),_:1})]),_:1})],16)]),default:e(()=>[n("Backers")]),_:1}),o.$waveui.breakpoint.xs?(d(),m(k,{key:0,class:"mr-1 hamburger-menu",onClick:r[5]||(r[5]=a=>o.$emit("update:drawerOpen",!b.drawerOpen)),lg:"",text:"",round:"",icon:b.drawerOpen?"wi-cross":"mdi mdi-menu"},null,8,["icon"])):f("",!0)]),_:1})}const z={props:{drawerOpen:{type:Boolean,default:!1}},emits:["update:drawerOpen"],computed:{version(){return"3.0.0".replace(/-(\w)(\w+)\.(\d+)/,(o,r,b,C)=>` <strong>${r.toUpperCase()}${b} ${C}</strong>`)}},methods:{async scrollTop(o=!1){await this.$nextTick(),document.documentElement.scrollTop=o?document.querySelector(".content-wrap").offsetTop-42:0}}},F=x(z,[["render",G]]),B={class:"nav-menu-wrap"},W={class:"nav-menu"},j=i("div",{class:"title2 mt0"},"Knowledge base",-1),X=i("div",{class:"title2 mt6"},"UI components",-1),K=["innerHTML"],q=i("div",{class:"title3 mt4"},"External UI components",-1),Y=i("p",null,"By the same author",-1);function J(o,r,b,C,O,c){const p=l("w-button"),u=l("w-tree"),_=l("w-tag"),y=l("w-icon"),k=l("router-link");return d(),S("div",B,[i("div",W,[o.$waveui.breakpoint.xs?(d(),m(p,{key:0,class:"close",onClick:r[0]||(r[0]=g=>o.$emit("update:drawerOpen",!1)),sm:"",outline:"",round:"",color:"primary",icon:"wi-cross"})):f("",!0),j,t(u,{class:"mt3",data:o.sections,selectable:"",onClick:c.onItemClick,"branch-icon":"wi-check","leaf-icon":"wi-check"},null,8,["data","onClick"]),X,t(u,{data:o.components,selectable:"",onClick:c.onItemClick},{item:e(({item:g})=>[i("span",{innerHTML:g.label},null,8,K),g.disabled?(d(),m(_,{key:0,class:"ml2 text-upper",round:"",xs:"",color:"red",outline:""},{default:e(()=>[n("Coming soon")]),_:1})):f("",!0),g.inProgress?(d(),m(_,{key:1,class:"ml2 text-upper",round:"",xs:"",color:"orange",outline:""},{default:e(()=>[n("In progress")]),_:1})):f("",!0)]),_:1},8,["data","onClick"]),q,Y,t(u,{data:o.externalComponents,selectable:"",onClick:c.onItemClick},null,8,["data","onClick"]),o.$waveui.breakpoint.xs?(d(),m(k,{key:1,class:"mt3 d-iblock",to:"/release-notes",onClick:c.onItemClick},{default:e(()=>[t(y,{class:"mr2"},{default:e(()=>[n("mdi mdi-update")]),_:1}),n("Release notes")]),_:1},8,["onClick"])):f("",!0)])])}const Z={props:{drawerOpen:{type:Boolean,default:!1}},emits:["update:drawerOpen"],data:()=>({sections:[{label:"Why Wave UI?",route:"/why-wave-ui",icon:"mdi mdi-help-circle-outline"},{label:"Getting started",route:"/getting-started",icon:"mdi mdi-play-circle-outline"},{label:"Browser support",route:"/browser-support",icon:"mdi mdi-check-circle-outline"},{label:"Options, presets &amp; <code>$waveui</code>",route:"/options-presets-and-waveui",icon:"mdi mdi-auto-fix"},{label:"Customization",route:"/customization",icon:"mdi mdi-tune"},{label:"Breakpoints",route:"/breakpoints",icon:"mdi mdi-format-horizontal-align-center"},{label:"Layout",route:"/layout",icon:"mdi mdi-format-list-text",open:!0,children:[{label:"Spaces",route:"/layout--spaces",icon:"mdi mdi-keyboard-space"},{label:"Grid system (flexbox)",route:"/layout--grid-system",icon:"mdi mdi-view-grid-outline"},{label:"Grid system (grid)",route:"/layout--simplified-grid-system",icon:"mdi mdi-view-grid-outline"},{label:"Flex",route:"/layout--flex",icon:"mdi mdi-star"},{label:"Other CSS classes",route:"layout--other-css-classes",icon:"mdi mdi-toolbox-outline"}]},{label:"Typography",route:"/typography",icon:"mdi mdi-format-font"},{label:"Colors",route:"/colors",icon:"mdi mdi-palette"},{label:"Themes",route:"/themes",icon:"mdi mdi-weather-night"},{label:"Shadows, borders & radii",route:"/shadows-borders-radii",icon:"mdi mdi-tools"},{label:"Transitions",route:"/transitions",icon:"mdi mdi-star-shooting-outline"}],components:[...$.filter(o=>!o.formElement).map(o=>({...o,route:`/w-${o.id}`})),{label:"Form elements",route:"/form",open:!0,children:[...$.filter(o=>o.formElement).map(o=>({...o,route:`/w-${o.id}`}))]}],externalComponents:[{label:"Calendar",route:"/calendar"},{label:"Slideshow",route:"/slideshow"},{label:"Splitter",route:"/splitter"}]}),methods:{onItemClick(){this.$emit("update:drawerOpen",!1),setTimeout(()=>{document.documentElement.scrollTop=document.querySelector(".content-wrap").offsetTop-42},200)}}},Q=x(Z,[["render",J]]),ee={xmlns:"http://www.w3.org/2000/svg",fill:"rgb(var(--w-base-bg-color-rgb))",stroke:"var(--header-waves-pattern)"},oe=R('<defs><pattern id="a" width="300" height="150" stroke-width="5" patternTransform="scale(.2)" patternUnits="userSpaceOnUse"><circle cx="150" r="147.5"></circle><circle cx="150" r="127.5"></circle><circle cx="150" r="107.5"></circle><circle cx="150" r="87.5"></circle><circle cx="150" r="67.5"></circle><circle cx="150" r="47.5"></circle><circle cx="150" r="27.5"></circle><circle cy="75" r="147.5"></circle><circle cy="75" r="127.5"></circle><circle cy="75" r="107.5"></circle><circle cy="75" r="87.5"></circle><circle cy="75" r="67.5"></circle><circle cy="75" r="47.5"></circle><circle cy="75" r="27.5"></circle><circle cx="300" cy="75" r="147.5"></circle><circle cx="300" cy="75" r="127.5"></circle><circle cx="300" cy="75" r="107.5"></circle><circle cx="300" cy="75" r="87.5"></circle><circle cx="300" cy="75" r="67.5"></circle><circle cx="300" cy="75" r="47.5"></circle><circle cx="300" cy="75" r="27.5"></circle><circle cx="150" cy="150" r="147.5"></circle><circle cx="150" cy="150" r="127.5"></circle><circle cx="150" cy="150" r="107.5"></circle><circle cx="150" cy="150" r="87.5"></circle><circle cx="150" cy="150" r="67.5"></circle><circle cx="150" cy="150" r="47.5"></circle><circle cx="150" cy="150" r="27.5"></circle><circle cy="225" r="147.5"></circle><circle cy="225" r="127.5"></circle><circle cy="225" r="107.5"></circle><circle cy="225" r="87.5"></circle><circle cy="225" r="67.5"></circle><circle cy="225" r="47.5"></circle><circle cy="225" r="27.5"></circle><circle cx="300" cy="225" r="147.5"></circle><circle cx="300" cy="225" r="127.5"></circle><circle cx="300" cy="225" r="107.5"></circle><circle cx="300" cy="225" r="87.5"></circle><circle cx="300" cy="225" r="67.5"></circle><circle cx="300" cy="225" r="47.5"></circle><circle cx="300" cy="225" r="27.5"></circle></pattern></defs><rect width="100%" height="100%" fill="url(#a)" stroke="none"></rect>',2),te=[oe];function re(o,r){return d(),S("svg",ee,te)}const ne={render:re},le={class:"no-shrink"},ie={class:"content-wrap w-flex no-shrink"},se={class:"w-flex justify-end align-center no-grow wrap"},ce={class:"grey-light3 text-upper"},ae=i("div",{class:"spacer"},null,-1),de={class:"caption"},me=i("span",{class:"text-nowrap"},"Html 5 & Pug",-1);function pe(o,r,b,C,O,c){const p=l("nav-menu"),u=l("w-drawer"),_=l("wave-pattern"),y=l("toolbar"),k=l("w-progress"),g=l("router-view"),a=l("w-button"),E=l("w-transition-bounce"),v=l("w-icon"),U=l("router-link"),T=l("w-tooltip");return d(),S(P,null,[c.isMobile?(d(),m(u,{key:0,class:"nav-drawer",modelValue:o.drawerOpen,"onUpdate:modelValue":r[1]||(r[1]=s=>o.drawerOpen=s),right:"",width:330},{default:e(()=>[t(p,{"drawer-open":o.drawerOpen,"onUpdate:drawer-open":r[0]||(r[0]=s=>o.drawerOpen=s)},null,8,["drawer-open"])]),_:1},8,["modelValue"])):f("",!0),i("header",le,[t(_,{class:"fill-width fill-height"}),t(y,{"drawer-open":o.drawerOpen,"onUpdate:drawer-open":r[2]||(r[2]=s=>o.drawerOpen=s)},null,8,["drawer-open"])]),i("div",ie,[t(M,{name:"fade"},{default:e(()=>[c.loading?(d(),m(k,{key:0,color:"primary",tile:"",absolute:""})):f("",!0)]),_:1}),c.isMobile?f("",!0):(d(),m(p,{key:0,class:"navigation no-shrink","drawer-open":o.drawerOpen,"onUpdate:drawer-open":r[3]||(r[3]=s=>o.drawerOpen=s)},null,8,["drawer-open"])),i("div",{class:I(["main-content w-flex column grow",`main-content--${o.$route.name}`])},[t(g,{class:I(["grow",`main--${o.$route.name}`])},{default:e(({Component:s})=>[t(M,{name:"fade-page",mode:"out-in"},{default:e(()=>[(d(),m(N(s)))]),_:2},1024)]),_:1},8,["class"]),o.goToTop?(d(),m(E,{key:0,appear:""},{default:e(()=>[t(a,{class:"go-top mb8 mr2",icon:"wi-chevron-up",fixed:"",bottom:"",right:"",xl:"","bg-color":o.$store.state.darkMode?"grey-dark4":"grey-light5",color:"base-color",onClick:c.scrollTop},null,8,["bg-color","onClick"])]),_:1})):f("",!0),i("footer",se,[i("small",ce,"Copyright \xA9 "+A(new Date().getFullYear())+" Antoni Andre, all rights reserved.",1),ae,t(U,{class:"pink-light1 mr4",to:"/backers",onClick:c.scrollTop},{default:e(()=>[t(v,{class:"mr1"},{default:e(()=>[n("mdi mdi-heart-multiple-outline")]),_:1}),n("Backers")]),_:1},8,["onClick"]),i("div",de,[n("Made with"),t(T,{top:""},{activator:e(({on:s})=>[t(v,w({class:"ml1"},h(s),{sm:""}),{default:e(()=>[n("mdi mdi-vuejs")]),_:2},1040)]),default:e(()=>[n("Vue.js")]),_:1}),t(T,{top:""},{activator:e(({on:s})=>[t(v,w({class:"ml1"},h(s),{sm:""}),{default:e(()=>[n("mdi mdi-language-css3")]),_:2},1040)]),default:e(()=>[n("CSS 3")]),_:1}),t(T,{top:""},{activator:e(({on:s})=>[t(v,w({class:"ml1"},h(s),{sm:""}),{default:e(()=>[n("mdi mdi-language-html5")]),_:2},1040)]),default:e(()=>[me]),_:1}),t(T,{top:""},{activator:e(({on:s})=>[t(v,w({class:"ml1"},h(s),{sm:""}),{default:e(()=>[n("mdi mdi-sass")]),_:2},1040)]),default:e(()=>[n("SASS")]),_:1}),t(T,{top:"","align-right":""},{activator:e(({on:s})=>[t(v,w({class:"ml1 heart"},h(s),{sm:""}),{default:e(()=>[n("mdi mdi-heart")]),_:2},1040)]),default:e(()=>[n("Love")]),_:1})])])],2)])],64)}const ue={components:{Toolbar:F,NavMenu:Q,WavePattern:ne},data:()=>({drawerOpen:!1,fixNavMenu:!1,navMenuTop:0,scrollingEl:null,contentWrapEl:null,goToTop:!1}),computed:{loading(){return this.$router.status.loading},isMobile(){return this.$waveui.breakpoint.xs}},methods:{onScroll(){this.fixNavMenu=this.scrollingEl.scrollTop>=this.navMenuTop,this.goToTop=this.scrollingEl.scrollTop>=this.contentWrapEl.offsetTop},onResize(){this.navMenuTop=this.contentWrapEl.offsetTop-12},async scrollTop(){await this.$nextTick(),document.documentElement.scrollTo({top:0,behavior:"smooth"})}},watch:{"$waveui.preferredTheme"(o){this.$store.commit("setDarkMode",o==="dark")}},mounted(){this.$store.commit("setDarkMode",this.$waveui.preferredTheme==="dark"),this.contentWrapEl=document.querySelector(".content-wrap"),this.navMenuTop=this.contentWrapEl.offsetTop-12,this.scrollingEl=document.documentElement;const o=window.location.hash.replace("#","");o&&setTimeout(()=>{document.getElementById(o).scrollIntoView({behavior:"smooth"})},200),window.addEventListener("scroll",this.onScroll),window.addEventListener("resize",this.onResize)},beforeUnmount(){window.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onResize)}},we=x(ue,[["render",pe]]);export{we as default};
