(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["select-index-vue","select-api-vue","select-examples-vue"],{"0a8b":function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"w-divider my12"}),l("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),l("alert",{staticClass:"mb6",attrs:{info:""}},[e._v("The props will soon be more detailed.")]),l("api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),l("api",{attrs:{items:e.slots,title:"Slots"}}),l("api",{attrs:{items:e.events,title:"Events"}})],1)},n=[],i=(l("13d5"),l("5530")),a=l("c0bc"),o=l("12fd"),m={items:"",value:"",multiple:"",placeholder:"",label:"",labelPosition:"",innerIconLeft:"",innerIconRight:"",staticLabel:"",itemLabel:"",itemValue:"",itemClass:"",menuClass:"",color:"",bgColor:"",outline:"",round:"",shadow:"",tile:"",dark:"",returnObject:"",name:"",disabled:"",readonly:"",required:"",validators:""},r={default:{description:"The label content, if the label prop is not flexible enough."}},c={input:"Emitted each time the selected item(s) changes. It updates the v-model value in Vue 2.x only.<br>The new selected value(s) is/are passed as a parameter.","update:modelValue":"Emitted each time the selected item(s) changes. It updates the v-model value in Vue 3 only.<br>The new selected value(s) is/are passed as a parameter.",focus:"Emitted on select focus. The focus DOM event is returned as a parameter.",blur:"Emitted on select blur. The blur DOM event is returned as a parameter.","click:inner-icon-left":"Emitted on click of the left inner icon, if any.","click:inner-icon-right":"Emitted on click of the right inner icon, if any."},u={data:function(){return{propsDescs:m,slots:r}},computed:{props:function(){return Object(i["a"])(Object(i["a"])({},o["a"].props),a["a"].props)},events:function(){return o["a"].emits.reduce((function(e,t){return(e[t]={description:c[t]||""})&&e}),{})}}},d=u,p=l("2877"),b=Object(p["a"])(d,s,n,!1,null,null,null);t["default"]=b.exports},fcee:function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("ui-component-title",[e._v("w-select")]),l("examples"),l("api")],1)},n=[],i=l("ffa8"),a=l("0a8b"),o={components:{Examples:i["default"],Api:a["default"]}},m=o,r=l("2877"),c=Object(r["a"])(m,s,n,!1,null,null,null);t["default"]=c.exports},ffa8:function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("alert",{attrs:{info:""}},[e._v("The "),l("span",{staticClass:"code"},[e._v("w-select")]),e._v(" component can be placed in a hidden overflow container and the dropdown\nmenu will still be fully visible when open."),l("br"),e._v("\nThis is because the select dropdown menu is placed at the "),l("span",{staticClass:"code"},[e._v(".w-app")]),e._v(" level in the DOM,\njust so you don't have to worry about this annoying case.\n")]),l("title-link",{attrs:{h2:""}},[e._v("Basic")]),e._m(0),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items1}})],1),l("title-link",{attrs:{h2:""}},[e._v("Label and / or placeholder")]),e._m(1),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items" label="Label")\nw-select.mt4(:items="items" placeholder="Placeholder")\nw-select.mt4(:items="items" label="Label" placeholder="Placeholder")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items1,label:"Label"}}),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,placeholder:"Placeholder"}}),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,label:"Label",placeholder:"Placeholder"}})],1),l("alert",{attrs:{tip:""}},[e._v("The items of the select list should have a label, which is by default expected in each item\nobject under the "),l("code",[e._v("label")]),e._v(" name."),l("br"),e._v("\nIf this is a constraint, you can use the option "),l("code",[e._v("item-label")]),e._v(" to specify the name of another\nattribute to be used instead.\n")]),l("title-link",{attrs:{h2:""}},[e._v("Outline")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items" outline) Label')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items1,outline:""}},[e._v("Label")])],1),l("title-link",{attrs:{h2:""}},[e._v("Colors")]),e._m(2),l("div",{staticClass:"title3"},[e._v("Default style (Underline)")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items" color="blue") Label\nw-select.mt4(:items="items" bg-color="blue-light5" color="blue-dark3") Label')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items1,color:"blue"}},[e._v("Label")]),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,"bg-color":"blue-light5",color:"blue-dark3"}},[e._v("Label")])],1),l("div",{staticClass:"title3"},[e._v("Outline style")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items" outline color="blue") Label\nw-select.mt4(:items="items" outline bg-color="blue-light5" color="blue-dark3") Label')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items1,outline:"",color:"blue"}},[e._v("Label")]),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,outline:"","bg-color":"blue-light5",color:"blue-dark3"}},[e._v("Label")])],1),l("title-link",{attrs:{h2:""}},[e._v("Shadow")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.title4.mb2 Default style (Underline)\nw-select(:items="items" shadow) Label\n\n.title4.mt6.mb2 Outline style\nw-select(:items="items" outline shadow) Label')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[l("div",{staticClass:"title4"},[e._v("Default style (Underline)")]),l("w-select",{attrs:{items:e.items1,shadow:""}},[e._v("Label")]),l("div",{staticClass:"title4 mt6"},[e._v("Outline style")]),l("w-select",{attrs:{items:e.items1,outline:"",shadow:""}},[e._v("Label")])],1),l("title-link",{attrs:{h2:""}},[e._v("Tile & round")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.title4 Default style (Underline)\nw-select.mt3(:items="items" bg-color="purple-light5" tile) Tile\nw-select.mt4(:items="items" bg-color="purple-light5" round) Round\n\n.title4.mt6 Outline style\nw-select.mt3(:items="items" outline tile) Tile\nw-select.mt4(:items="items" outline round) Round')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[l("div",{staticClass:"title4"},[e._v("Default style (Underline)")]),l("w-select",{attrs:{items:e.items1,"bg-color":"purple-light5",tile:""}},[e._v("Tile")]),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,"bg-color":"purple-light5",round:""}},[e._v("Round")]),l("div",{staticClass:"title4 mt6"},[e._v("Outline style")]),l("w-select",{attrs:{items:e.items1,outline:"",tile:""}},[e._v("Tile")]),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,outline:"",round:""}},[e._v("Round")])],1),l("title-link",{attrs:{h2:""}},[e._v("Multiple selection")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items" multiple)')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items1,multiple:""}})],1),l("title-link",{attrs:{h2:""}},[e._v("V-model")]),l("alert",{attrs:{tip:""}},[e._v("By default, the "),l("span",{staticClass:"code"},[e._v("w-select")]),e._v(" component expects the items to have a "),l("code",[e._v("value")]),e._v(" attribute."),l("br"),e._v("\nIf this is a constraint, you can use the option "),l("code",[e._v("item-value")]),e._v(" to specify the name of another\nattribute to be used instead (must have a unique value), like an id for instance.")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(v-model="selection" :items="items" multiple)\nw-flex.align-center.mt4\n  span v-model:\n  code.ml2 '+e._s("{{ selection }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1', value: 1 },\n    { label: 'Item 2', value: 2 },\n    { label: 'Item 3', value: 3 }\n  ],\n  selection: [1, 3]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items3,multiple:""},model:{value:e.vModelSelect1,callback:function(t){e.vModelSelect1=t},expression:"vModelSelect1"}}),l("w-flex",{staticClass:"align-center mt4"},[l("span",[e._v("v-model:")]),l("code",{staticClass:"ml2"},[e._v(e._s(e.vModelSelect1))])])],1),l("title-link",{attrs:{h3:""}},[e._v("Without values (using labels)")]),l("p",[e._v("If no values are provided in the items objects, the labels will be used to identify the selected items.")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(v-model="selection" :items="items" multiple)\nw-flex.align-center.mt4\n  span v-model:\n  code.ml2 '+e._s("{{ selection }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ],\n  selection: ['Item 1', 'Item 3']\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items1,multiple:""},model:{value:e.vModelSelect2,callback:function(t){e.vModelSelect2=t},expression:"vModelSelect2"}}),l("w-flex",{staticClass:"align-center mt4"},[l("span",[e._v("v-model:")]),l("code",{staticClass:"ml2"},[e._v(e._s(e.vModelSelect2))])])],1),l("title-link",{attrs:{h3:""}},[e._v("Using full objects in v-model")]),e._m(3),l("p"),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(v-model="selection" :items="items" multiple return-object)\nw-flex.align-center.mt4\n  span v-model:\n  code.ml2 '+e._s("{{ selection }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ],\n  selection: [{ label: 'Item 3' }]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items1,multiple:"","return-object":""},model:{value:e.vModelSelect3,callback:function(t){e.vModelSelect3=t},expression:"vModelSelect3"}}),l("w-flex",{staticClass:"align-center mt4"},[l("span",[e._v("v-model:")]),l("code",{staticClass:"ml2"},[e._v(e._s(e.vModelSelect3))])])],1),l("title-link",{attrs:{h2:""}},[e._v("Label position")]),l("p",[e._v("By default the label is positioned inside, you can also place it on the left or right outside of\nthe select list.")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items" label="Select an item")\nw-select.mt4(:items="items" label="Select an item" label-position="left")\nw-select.mt4(:items="items" label="Select an item" label-position="right")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items1,label:"Select an item"}}),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,label:"Select an item","label-position":"left"}}),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,label:"Select an item","label-position":"right"}})],1),l("title-link",{attrs:{h2:""}},[e._v("Custom label")]),e._m(4),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items" label-position="inside" outline)\n  w-icon.orange mdi mdi-arrow-right\n  span.purple.mx1 Inside\n  w-icon.orange mdi mdi-arrow-left\nw-select.mt4(:items="items" label-position="left" outline)\n  span.green.mr1 Left\n  w-icon.orange mdi mdi-arrow-right\nw-select.mt4(:items="items" label-position="right" outline)\n  w-icon.orange mdi mdi-arrow-left\n  span.red.ml1 Right')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items1,"label-position":"inside",outline:""}},[l("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-right")]),l("span",{staticClass:"purple mx1"},[e._v("Inside")]),l("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-left")])],1),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,"label-position":"left",outline:""}},[l("span",{staticClass:"green mr1"},[e._v("Left")]),l("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-right")])],1),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,"label-position":"right",outline:""}},[l("w-icon",{staticClass:"orange"},[e._v("mdi mdi-arrow-left")]),l("span",{staticClass:"red ml1"},[e._v("Right")])],1)],1),l("title-link",{attrs:{h2:""}},[e._v("Custom selection string")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items" v-model="selection" multiple)\n  template(#selection="{ items }")\n    w-tag.mr2(v-for="(item, i) in items" :key="i" bg-color="grey-light4")\n      | '+e._s("{{ item.label }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1', value: 1 },\n    { label: 'Item 2', value: 2 },\n    { label: 'Item 3', value: 3 }\n  ],\n  selection: [1, 3]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items3,multiple:""},scopedSlots:e._u([{key:"selection",fn:function(t){var s=t.items;return e._l(s,(function(t,s){return l("w-tag",{key:s,staticClass:"mr2",attrs:{"bg-color":"grey-light4"}},[e._v(e._s(t.label))])}))}}]),model:{value:e.customSelection,callback:function(t){e.customSelection=t},expression:"customSelection"}})],1),l("title-link",{attrs:{h2:""}},[e._v("Custom list items")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select(:items="items")\n  template(#item="{ item, selected }")\n    w-icon.primary.mr1(v-if="selected") wi-check\n    span '+e._s("{{ item.label }}")+'\n    w-tag.ml2(bg-color="grey-light4" xs) '+e._s("{{ item.value }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1', value: 1 },\n    { label: 'Item 2', value: 2 },\n    { label: 'Item 3', value: 3 }\n  ]\n})\n")]},proxy:!0}])},[l("w-select",{attrs:{items:e.items3},scopedSlots:e._u([{key:"item",fn:function(t){var s=t.item,n=t.selected;return[n?l("w-icon",{staticClass:"primary mr1"},[e._v("wi-check")]):e._e(),l("span",[e._v(e._s(s.label))]),l("w-tag",{staticClass:"ml2",attrs:{"bg-color":"grey-light4",xs:""}},[e._v(e._s(s.value))])]}}])})],1),l("title-link",{attrs:{h2:""}},[e._v("Inner icons")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.title4.mb2 Label outside\nw-select(:items="items" label="Left" label-position="left" outline inner-icon-left="mdi mdi-star")\nw-select.mt4(:items="items" label="Right" label-position="right" outline inner-icon-right="mdi mdi-arrow-down")\n\n.title4.mt6.mb2 Label inside\nw-select(:items="items" label="Select" label-position="inside" outline inner-icon-left="mdi mdi-star")\nw-select.mt4(:items="items" label="Select" label-position="inside" outline inner-icon-right="mdi mdi-arrow-down")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})\n")]},proxy:!0}])},[l("div",{staticClass:"title4 mb2"},[e._v("Label outside")]),l("w-select",{attrs:{items:e.items1,label:"Select","label-position":"left",outline:"","inner-icon-left":"mdi mdi-star"}}),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,label:"Select","label-position":"right",outline:"","inner-icon-right":"mdi mdi-arrow-down"}}),l("div",{staticClass:"title4 mt6 mb2"},[e._v("Label inside")]),l("w-select",{attrs:{items:e.items1,label:"Select","label-position":"inside",outline:"","inner-icon-left":"mdi mdi-star"}}),l("w-select",{staticClass:"mt4",attrs:{items:e.items1,label:"Select","label-position":"inside",outline:"","inner-icon-right":"mdi mdi-arrow-down"}})],1),l("title-link",{attrs:{h2:""}},[e._v("Disabled & readonly")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-select.mb4(\n  :items="items"\n  label="Disabled & empty"\n  outline\n  disabled)\nw-select.mb4(\n  :items="items"\n  value="Item 1"\n  label="Disabled & filled"\n  outline\n  disabled)\nw-select.mb4(\n  :items="items"\n  label="Readonly & empty"\n  outline\n  readonly)\nw-select(\n  :items="items"\n  value="Item 1"\n  label="Readonly & filled"\n  outline\n  readonly)')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' }\n  ]\n})")]},proxy:!0}])},[l("w-select",{staticClass:"mb4",attrs:{items:e.items1,label:"Disabled & empty",outline:"",disabled:""}}),l("w-select",{staticClass:"mb4",attrs:{items:e.items1,label:"Disabled & filled",value:"Item 1",outline:"",disabled:""}}),l("w-select",{staticClass:"mb4",attrs:{items:e.items1,label:"Readonly & empty",outline:"",readonly:""}}),l("w-select",{attrs:{items:e.items1,value:"Item 1",label:"Readonly & filled",outline:"",readonly:""}})],1)],1)},n=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("This is the most basic use of the "),l("span",{staticClass:"code"},[e._v("w-select")]),e._v(" component. No label, no v-model only items.")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("The select list can have a label or not and a placeholder or not."),l("br")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",{staticClass:"mb4"},[e._v("Like in most components, you can set a "),l("code",[e._v("color")]),e._v(" for the text and a "),l("code",[e._v("bg-color")]),e._v(" for the\nbackground."),l("br"),e._v('\nBy default, the text has the "'),l("span",{staticClass:"code"},[e._v("primary")]),e._v('" color.')])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("If it's more convenient for you, you can ask the "),l("span",{staticClass:"code"},[e._v("w-select")]),e._v(" component to return the\nfull items objects in the selection."),l("br"),e._v("\nYou then have the choice to provide an array of either values or full objects in the v-model,\nif you want to prefill the select list.")])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("It is convenient to have the label inside the "),l("span",{staticClass:"code"},[e._v("w-select")]),e._v(" component to let it handle\nthe field focus event on label click."),l("br"),e._v("\nThe "),l("span",{staticClass:"code"},[e._v("label")]),e._v(" prop accepts any HTML, but because passing complex html via a prop is not fun,\nthere is also a prop for setting the label wish will grant more freedom.\n")])}],i={data:function(){return{items1:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"}],items2:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"},{label:"Item 5",disabled:!0}],items3:[{label:"Item 1",value:1},{label:"Item 2",value:2},{label:"Item 3",value:3}],vModelSelect1:[1,3],customSelection:[1,3],vModelSelect2:["Item 1","Item 3"],vModelSelect3:[{label:"Item 3"}]}}},a=i,o=l("2877"),m=Object(o["a"])(a,s,n,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=select-index-vue.b7ae6d02.js.map