(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["table-examples-vue"],{c9fb:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("title-link",{attrs:{h2:""}},[e._v("Default")]),a("div",{staticClass:"title3"},[e._v("With data")]),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){},proxy:!0}])},[a("w-table",{attrs:{items:e.table1.items,headers:e.table1.headers}})],1),a("div",{staticClass:"title3"},[e._v("Without data")]),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){},proxy:!0}])},[a("w-table",{attrs:{items:[],headers:e.table1.headers}})],1),a("title-link",{attrs:{h2:""}},[e._v("No headers")]),e._m(0),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){},proxy:!0}])},[a("w-table",{attrs:{items:e.table1.items,headers:e.table1.headers,"no-headers":""}})],1),a("title-link",{attrs:{h2:""}},[e._v("Initial Sorting")]),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){},proxy:!0}])},[a("w-table",{attrs:{items:e.table1.items,headers:e.table1.headers,sort:e.table1.sort},on:{"update:sort":function(t){return e.$set(e.table1,"sort",t)}}})],1),a("title-link",{attrs:{h2:""}},[e._v("Filters")]),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){},proxy:!0}])},[e._v("Coming soon.")])],1)},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Even with the "),a("code",[e._v("no-headers")]),e._v(" option, the "),a("code",[e._v("headers")]),e._v(" are still required for various\nreasons, like getting the number of columns and sorting/filtering keys.")])}],i={data:function(){return{table1:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:[{id:"1",firstName:"Floretta",lastName:"Sampson"},{id:"2",firstName:"Nellie",lastName:"Lynn"},{id:"3",firstName:"Rory",lastName:"Bristol"},{id:"4",firstName:"Daley",lastName:"Elliott"},{id:"5",firstName:"Virgil",lastName:"Carman"}],sort:[{firstName:"asc"}]}}}},r=i,n=a("2877"),o=Object(n["a"])(r,s,l,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=table-examples-vue.e99347f5.js.map