(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["button-index-vue","button-api-vue","button-examples-vue"],{"09ea":function(t,o,a){"use strict";a.r(o);var r=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",[a("div",{staticClass:"w-divider my12"}),a("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),a("alert",{staticClass:"mb6",attrs:{info:""}},[t._v("The props will soon be more detailed.")]),a("api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),a("api",{attrs:{items:t.slots,title:"Slots"}}),a("api",{attrs:{items:t.events,title:"Events"}})],1)},s=[],n=(a("13d5"),a("879b")),e={color:"",bgColor:"",dark:"",outline:"",text:"",round:"",shadow:"",tile:"",to:"",forceLink:"",type:"",disabled:"",loading:"",icon:"",absolute:"",fixed:"",top:"",bottom:"",left:"",right:"",zIndex:"",width:"",height:"",xs:"",sm:"",md:"",lg:"",xl:""},l={default:{description:"The button content."},loading:{description:"Provide a custom loading content, if the default spinner doesn't fit."}},i={},c={data:function(){return{propsDescs:e,slots:l}},computed:{props:function(){return n["a"].props},events:function(){return n["a"].emits.reduce((function(t,o){return(t[o]={description:i[o]||""})&&t}),{})}}},u=c,m=a("2877"),b=Object(m["a"])(u,r,s,!1,null,null,null);o["default"]=b.exports},"0dd4":function(t,o,a){"use strict";a.r(o);var r=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",[a("ui-component-title",[t._v("w-button")]),a("examples"),a("api")],1)},s=[],n=a("732c"),e=a("09ea"),l={components:{Examples:n["default"],Api:e["default"]}},i=l,c=a("2877"),u=Object(c["a"])(i,r,s,!1,null,null,null);o["default"]=u.exports},"732c":function(t,o,a){"use strict";a.r(o);var r=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",[t._m(0),a("title-link",{attrs:{h2:""}},[t._v("Default")]),a("p",[t._v("By default (if no color or bg-color is applied) the primary color will be applied.")]),a("w-button",{staticClass:"ma1"},[t._v("default")]),a("title-link",{attrs:{h2:""}},[t._v("Colors")]),a("p",[t._v("Here is an example of buttons using all types of colors as a background: status colors, primary color,\nsecondary color and a color palette color shade.")]),t._m(1),a("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-flex.wrap\n  w-button.ma1(bg-color="success") success\n  w-button.ma1(bg-color="error") error\n  w-button.ma1(bg-color="warning") warning\n  w-button.ma1(bg-color="info") info\n  w-button.ma1(bg-color="primary") primary\n  w-button.ma1(bg-color="secondary") secondary\n  w-button.ma1(bg-color="purple-light4") purple-light4\n')]},proxy:!0}])},[a("w-flex",{staticClass:"wrap"},[a("w-button",{staticClass:"ma1",attrs:{"bg-color":"success"}},[t._v("success")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"error"}},[t._v("error")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"warning"}},[t._v("warning")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"info"}},[t._v("info")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"primary"}},[t._v("primary")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"secondary"}},[t._v("secondary")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"purple-light4"}},[t._v("purple-light4")])],1)],1),a("h3",[t._v("Mix background and text colors")]),t._m(2),a("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-button.ma1(bg-color="success" color="yellow-light2") success\nw-button.ma1(bg-color="error" color="amber-light2") error\nw-button.ma1(bg-color="primary" color="success-light2") warning\n')]},proxy:!0}])},[a("w-button",{staticClass:"ma1",attrs:{"bg-color":"success",color:"yellow-light2"}},[t._v("success")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"error",color:"amber-light2"}},[t._v("error")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"primary",color:"success-light2"}},[t._v("warning")])],1),a("h3",[t._v("Dark")]),t._m(3),a("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-button.ma1(bg-color="primary-light3") normal\nw-icon.mx6.grey-light3(size="2.5em") mdi mdi-arrow-right\nw-button.ma1(bg-color="primary-light3" dark) dark\n')]},proxy:!0}])},[a("w-button",{staticClass:"ma1",attrs:{"bg-color":"primary-light3"}},[t._v("normal")]),a("w-icon",{staticClass:"mx6 grey-light3",attrs:{size:"2.5em"}},[t._v("mdi mdi-arrow-right")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"primary-light3",dark:""}},[t._v("dark")])],1),a("title-link",{attrs:{h2:""}},[t._v("Sizes")]),a("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-button.ma1(bg-color="secondary" xs) extra small\nw-button.ma1(bg-color="secondary" sm) small\nw-button.ma1(bg-color="secondary" md) medium\nw-button.ma1(bg-color="secondary" lg) large\nw-button.ma1(bg-color="secondary" xl) extra large\nw-button.ma1(bg-color="secondary" disabled) disabled\nbr\nbr\nw-button.ma1(bg-color="primary" color="white" xs) extra small\nw-button.ma1(bg-color="primary" color="white" sm) small\nw-button.ma1(bg-color="primary" color="white" md) medium\nw-button.ma1(bg-color="primary" color="white" lg) large\nw-button.ma1(bg-color="primary" color="white" xl) extra large\nw-button.ma1(bg-color="primary" color="white" disabled) disabled\n')]},proxy:!0}])},[a("w-button",{staticClass:"ma1",attrs:{"bg-color":"secondary",xs:""}},[t._v("extra small")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"secondary",sm:""}},[t._v("small")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"secondary",md:""}},[t._v("medium")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"secondary",lg:""}},[t._v("large")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"secondary",xl:""}},[t._v("extra large")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"secondary",disabled:""}},[t._v("disabled")]),a("br"),a("br"),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"primary",color:"white",xs:""}},[t._v("extra small")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"primary",color:"white",sm:""}},[t._v("small")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"primary",color:"white",md:""}},[t._v("medium")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"primary",color:"white",lg:""}},[t._v("large")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"primary",color:"white",xl:""}},[t._v("extra large")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"primary",color:"white",disabled:""}},[t._v("disabled")])],1),a("h3",[t._v("Stretch to the available space")]),a("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-flex\n  w-button.ma1.grow(bg-color="primary") primary\n')]},proxy:!0}])},[a("w-flex",[a("w-button",{staticClass:"ma1 grow",attrs:{"bg-color":"primary"}},[t._v("primary")])],1)],1),a("h3",[t._v("Custom width and height")]),t._m(4),a("example",{attrs:{"content-class":"pt6"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-button.ma1.grow(bg-color="info" width="10em" :height="18") info\n')]},proxy:!0}])},[a("w-button",{staticClass:"ma1",attrs:{"bg-color":"info",width:"10em",height:18}},[t._v("info")])],1),a("title-link",{attrs:{h2:""}},[t._v("Outline")]),a("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-button.ma1(color="primary" outline xs) extra small\nw-button.ma1(color="primary" outline sm) small\nw-button.ma1(color="primary" outline md) medium\nw-button.ma1(color="primary" outline lg) large\nw-button.ma1(color="primary" outline xl) extra large\nw-button.ma1(color="primary" outline disabled) disabled\n')]},proxy:!0}])},[a("w-button",{staticClass:"ma1",attrs:{color:"primary",outline:"",xs:""}},[t._v("extra small")]),a("w-button",{staticClass:"ma1",attrs:{color:"primary",outline:"",sm:""}},[t._v("small")]),a("w-button",{staticClass:"ma1",attrs:{color:"primary",outline:"",md:""}},[t._v("medium")]),a("w-button",{staticClass:"ma1",attrs:{color:"primary",outline:"",lg:""}},[t._v("large")]),a("w-button",{staticClass:"ma1",attrs:{color:"primary",outline:"",xl:""}},[t._v("extra large")]),a("w-button",{staticClass:"ma1",attrs:{color:"primary",outline:"",disabled:""}},[t._v("disabled")])],1),a("title-link",{attrs:{h2:""}},[t._v("Text")]),a("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-button.ma1(color="primary" text xs) extra small\nw-button.ma1(color="primary" text sm) small\nw-button.ma1(color="primary" text md) medium\nw-button.ma1(color="primary" text lg) large\nw-button.ma1(color="primary" text xl) extra large\nw-button.ma1(color="primary" text disabled) disabled\n')]},proxy:!0}])},[a("w-button",{staticClass:"ma1",attrs:{color:"primary",text:"",xs:""}},[t._v("extra small")]),a("w-button",{staticClass:"ma1",attrs:{color:"primary",text:"",sm:""}},[t._v("small")]),a("w-button",{staticClass:"ma1",attrs:{color:"primary",text:"",md:""}},[t._v("medium")]),a("w-button",{staticClass:"ma1",attrs:{color:"primary",text:"",lg:""}},[t._v("large")]),a("w-button",{staticClass:"ma1",attrs:{color:"primary",text:"",xl:""}},[t._v("extra large")]),a("w-button",{staticClass:"ma1",attrs:{color:"primary",text:"",disabled:""}},[t._v("disabled")])],1),a("title-link",{attrs:{h2:""}},[t._v("Round & tile")]),a("example",{attrs:{"content-class":"w-flex"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-button.ma1(bg-color="primary" round) round\nw-button.ma1.mr6(bg-color="secondary" round) round\nw-button.ma1(bg-color="primary" tile) tile\nw-button.ma1.mr6(bg-color="secondary" tile) tile\n')]},proxy:!0}])},[a("w-button",{staticClass:"ma1",attrs:{"bg-color":"primary",round:""}},[t._v("round")]),a("w-button",{staticClass:"ma1 mr6",attrs:{"bg-color":"secondary",round:""}},[t._v("round")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"primary",tile:""}},[t._v("tile")]),a("w-button",{staticClass:"ma1 mr6",attrs:{"bg-color":"secondary",tile:""}},[t._v("tile")])],1),a("title-link",{attrs:{h2:""}},[t._v("Shadow")]),a("example",{attrs:{"content-class":"w-flex"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-button.ma1(bg-color="success" shadow) success\nw-button.ma1(bg-color="error" shadow) error\nw-button.ma1(bg-color="warning" shadow) warning\nw-button.ma1(bg-color="info" shadow) info\n')]},proxy:!0}])},[a("w-button",{staticClass:"ma1",attrs:{"bg-color":"success",shadow:""}},[t._v("success")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"error",shadow:""}},[t._v("error")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"warning",shadow:""}},[t._v("warning")]),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"info",shadow:""}},[t._v("info")])],1),a("title-link",{attrs:{h2:""}},[t._v("Icons & mixed content")]),a("p",[t._v("Icon buttons are rounded by default.")]),a("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-button.ma1(bg-color="error" icon="wi-cross")\nw-button.ma1.mr6(bg-color="success" icon="wi-check")\nw-button.ma1(bg-color="error")\n  w-icon.mr1 wi-cross\n  | Cancel\nw-button.ma1(bg-color="success")\n  w-icon.mr1 wi-check\n  | Save\n')]},proxy:!0}])},[a("w-button",{staticClass:"ma1",attrs:{"bg-color":"error",icon:"wi-cross"}}),a("w-button",{staticClass:"ma1 mr6",attrs:{"bg-color":"success",icon:"wi-check"}}),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"error"}},[a("w-icon",{staticClass:"mr1"},[t._v("wi-cross")]),t._v("Cancel")],1),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"success"}},[a("w-icon",{staticClass:"mr1"},[t._v("wi-check")]),t._v("Save")],1)],1),a("title-link",{attrs:{h2:""}},[t._v("Loading spinner & custom loader")]),a("example",{attrs:{"content-class":"w-flex"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-button.ma1(bg-color="primary" :loading="button1loading" @click="buttonDoLoading(1)")\n  w-icon.mr1 wi-check\n  | Save\nw-button.ma1.px4(bg-color="primary" :loading="button2loading" @click="buttonDoLoading(2)")\n  w-icon.mr1 wi-check\n  | Save\n  template(#loading="") Loading...')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  button1loading: false,\n  button2loading: false\n}),\nmethods: {\n  buttonDoLoading (id) {\n    this[`button${id}loading`] = true\n    setTimeout(() => (this[`button${id}loading`] = false), 3000)\n  }\n}\n")]},proxy:!0}])},[a("w-button",{staticClass:"ma1",attrs:{"bg-color":"primary",loading:t.button1loading},on:{click:function(o){return t.buttonDoLoading(1)}}},[a("w-icon",{staticClass:"mr1"},[t._v("wi-check")]),t._v("Save")],1),a("w-button",{staticClass:"ma1 px4",attrs:{"bg-color":"primary",loading:t.button2loading},on:{click:function(o){return t.buttonDoLoading(2)}},scopedSlots:t._u([{key:"loading",fn:function(){return[t._v("Loading...")]},proxy:!0}])},[a("w-icon",{staticClass:"mr1"},[t._v("wi-check")]),t._v("Save")],1)],1),a("title-link",{attrs:{h2:""}},[t._v("Links")]),a("example",{attrs:{"content-class":"w-flex"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-button.ma1(bg-color="primary" to="/getting-started")\n  | Getting started\n  w-icon.ml1 wi-chevron-right\nw-button.ma1(bg-color="primary" to="https://github.com/antoniandre/wave-ui")\n  | Github\n  w-icon.ml2(sm) mdi mdi-open-in-new')]},proxy:!0}])},[a("w-button",{staticClass:"ma1",attrs:{"bg-color":"primary",to:"/getting-started"}},[t._v("Getting started"),a("w-icon",{staticClass:"ml1"},[t._v("wi-chevron-right")])],1),a("w-button",{staticClass:"ma1",attrs:{"bg-color":"primary",to:"https://github.com/antoniandre/wave-ui"}},[t._v("Github"),a("w-icon",{staticClass:"ml2",attrs:{sm:""}},[t._v("mdi mdi-open-in-new")])],1)],1)],1)},s=[function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("p",[t._v("Setting colors on buttons is quite straightforward:\na text color is set via the attribute "),a("code",[t._v("color")]),t._v(", and a background color is set via the\nattribute "),a("code",[t._v("bg-color")]),t._v("."),a("br"),t._v("\nThis allows you to easily mix a background color with a different text color of your choice.\n")])},function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("p",[a("strong",{staticClass:"mr1"},[t._v("Note:")]),t._v("The 4 status colors as well as the primary color have a white text by default.")])},function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("p",[t._v("Like in most components, you can set a "),a("code",[t._v("color")]),t._v(" for the text and a "),a("code",[t._v("bg-color")]),t._v(" for the\nbackground.")])},function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("p",[t._v("By default the "),a("span",{staticClass:"code"},[t._v("primary")]),t._v(" color is considered as dark as well as the four status colors:\n"),a("span",{staticClass:"code"},[t._v("success")]),t._v(", "),a("span",{staticClass:"code"},[t._v("error")]),t._v(", "),a("span",{staticClass:"code"},[t._v("warning")]),t._v(" & "),a("span",{staticClass:"code"},[t._v("info")]),t._v(".\nFor the rest you can use the "),a("code",[t._v("dark")]),t._v(" prop.")])},function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("p",[t._v("Even though you can easily override the dimensions via CSS, a "),a("code",[t._v("width")]),t._v(" and "),a("code",[t._v("height")]),t._v(" props\nare available on the "),a("span",{staticClass:"code"},[t._v("w-button")]),t._v(" component.")])}],n={data:function(){return{button1loading:!1,button2loading:!1}},methods:{buttonDoLoading:function(t){var o=this;this["button".concat(t,"loading")]=!0,setTimeout((function(){return o["button".concat(t,"loading")]=!1}),3e3)}}},e=n,l=a("2877"),i=Object(l["a"])(e,r,s,!1,null,null,null);o["default"]=i.exports}}]);
//# sourceMappingURL=button-index-vue.c1226dfa.js.map