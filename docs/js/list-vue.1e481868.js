(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["list-vue"],{"426e":function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"lists-demo"},[i("title-link",{staticClass:"mt4 code",attrs:{h1:""}},[e._v("w-list")]),e._m(0),i("w-list",{attrs:{items:4,icon:"wi-check"},scopedSlots:e._u([{key:"item.1",fn:function(){return[e._v("Simple list with or without icons")]},proxy:!0},{key:"item.2",fn:function(){return[e._v("Checklists")]},proxy:!0},{key:"item.3",fn:function(){return[e._v("Navigation menus")]},proxy:!0},{key:"item.4",fn:function(){return[e._v("List of selectable items")]},proxy:!0}])}),i("title-link",{attrs:{h2:""}},[e._v("Basic lists")]),i("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-flex wrap>\n  <div class="grow">\n    <div class="title3 mb6">Most basic</div>\n    <w-list :items="items"></w-list>\n  </div>\n\n  <div class="grow">\n    <div class="title3 mb6">With icons</div>\n    <w-list :items="items" icon="wi-check"></w-list>\n  </div>\n</w-flex>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Item 1' },\n    { label: 'Item 2' },\n    { label: 'Item 3' },\n    { label: 'Item 4' },\n    { label: 'Item 5' },\n    { label: 'Item 6', disabled: true }\n  ]\n})\n")]},proxy:!0}])},[i("div",{staticClass:"w-flex wrap"},[i("div",{staticClass:"grow"},[i("div",{staticClass:"title3"},[e._v("Most basic")]),i("w-list",{attrs:{items:e.listItems1}})],1),i("div",{staticClass:"grow"},[i("div",{staticClass:"title3"},[e._v("With icons")]),i("w-list",{attrs:{items:e.listItems1,icon:"wi-check"}})],1)])]),i("title-link",{attrs:{h2:""}},[e._v("Color & hoverable")]),e._m(1),i("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-list :items="items" color="pink" hover></w-list>\n<br />\n<w-list :items="items" bg-color="blue-light5" color="primary" hover></w-list>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Star' },\n    { label: 'Check' },\n    { label: 'Cross' },\n    { label: 'Info' },\n    { label: 'Warning' },\n    { label: 'Disabled' }\n  ]\n})\n")]},proxy:!0}])},[i("w-list",{attrs:{items:e.listItems2,color:"pink",hover:""}}),i("br"),i("w-list",{attrs:{items:e.listItems2,"bg-color":"blue-light5",color:"primary",hover:""}})],1),i("title-link",{attrs:{h2:""}},[e._v("Custom rendering")]),e._m(2),i("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-list :items="5" hover>\n  <template #item="{ index }">'+e._s("{{ index + 1 }}")+"</template>\n  <template #item.3>\n    <strong>This is the great item #3</strong>\n  </template>\n</w-list>\n")]},proxy:!0}])},[i("w-list",{attrs:{items:5,hover:""},scopedSlots:e._u([{key:"item",fn:function(t){var i=t.index;return[e._v("Item "+e._s(i+1))]}},{key:"item.3",fn:function(){return[i("strong",[e._v("This is the great item #3")])]},proxy:!0}])})],1),e._m(3),i("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-list :items="items" hover>\n  <template #item="{ item }">\n    <w-flex align-center justify-space-between>\n      '+e._s("{{ item.label }}")+"\n      <w-icon md>"+e._s("{{ item.icon }}")+"</w-icon>\n    </w-flex>\n  </template>\n</w-list>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Star', icon: 'mdi mdi-star' },\n    { label: 'Check', icon: 'mdi mdi-check' },\n    { label: 'Cross', icon: 'mdi mdi-close' },\n    { label: 'Info', icon: 'mdi mdi-information' },\n    { label: 'Warning', icon: 'mdi mdi-alert' },\n    { label: 'Disabled', icon: 'mdi mdi-minus-circle' }\n  ]\n})\n")]},proxy:!0}])},[i("w-list",{attrs:{items:e.listItems2,hover:""},scopedSlots:e._u([{key:"item",fn:function(t){var l=t.item;return[i("div",{staticClass:"w-flex align-center justify-space-between"},[e._v(e._s(l.label)),i("w-icon",{attrs:{md:""}},[e._v(e._s(l.icon))])],1)]}}])})],1),i("title-link",{attrs:{h2:""}},[e._v("Default items list rendering with selection")]),i("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-radios v-model="multiple" :items="radios" inline></w-radios>\n\n<w-flex wrap align-center>\n  <w-list\n    v-model="selectedItem"\n    :items="items"\n    color="deep-purple"\n    :multiple="multiple"\n    @item-click="itemClicked = $event"\n    class="mt6 mr4 grow">\n  </w-list>\n  <div v-if="itemClicked">\n    <div class="title3">clicked item:</div>\n    <span>'+e._s("{{ itemClicked }}")+'</span>\n  </div>\n</w-flex>\n<div class="title3 mt2">\n  Selected item:\n  <code v-if="!multiple || Array.isArray(selectedItem)" class="ml2">\n    '+e._s("{{ selectedItem || 'null' }}")+'\n  </code>\n  <code v-else-if="multiple" class="ml2">\n    '+e._s("{{ selectedItem ? [selectedItem] : '[]' }}")+"\n  </code>\n</div>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  radios: [\n    { label: 'Single selection', value: false },\n    { label: 'Multiple selections', value: true }\n  ],\n  multiple: false,\n  items: [\n    { label: 'Item 1', value: 1 },\n    { label: 'Item 2', value: 2 },\n    { label: 'Item 3', value: 3 },\n    { label: 'Item 4', value: 4 },\n    { label: 'Item 5', value: 5 },\n    { label: 'Item 6', value: 6, disabled: true }\n  ],\n  selectedItem: 2,\n  itemClicked: null\n})")]},proxy:!0}])},[i("w-radios",{staticClass:"mb6",attrs:{items:e.radios,inline:""},model:{value:e.multiple,callback:function(t){e.multiple=t},expression:"multiple"}}),i("w-flex",{attrs:{wrap:"","align-center":""}},[i("w-list",{staticClass:"grow mr4",attrs:{items:e.listItems1,color:"deep-purple",multiple:e.multiple},on:{"item-click":function(t){e.itemClicked=t}},model:{value:e.selectedItem1,callback:function(t){e.selectedItem1=t},expression:"selectedItem1"}}),e.itemClicked?i("div",[i("div",{staticClass:"title3"},[e._v("clicked item ("),i("span",{staticClass:"code"},[e._v("item-click")]),e._v(" event):")]),i("br"),i("span",{staticClass:"code"},[e._v(e._s(e.itemClicked))])]):e._e()],1),i("div",{staticClass:"title3 mt2"},[e._v("Selected item:"),!e.multiple||Array.isArray(e.selectedItem1)?i("code",{staticClass:"ml2"},[e._v(e._s(e.selectedItem1||"null"))]):e.multiple?i("code",{staticClass:"ml2"},[e._v(e._s(e.selectedItem1?[e.selectedItem1]:"[]"))]):e._e()])],1),e._m(4),i("title-link",{attrs:{h2:""}},[e._v("Checklists")]),i("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-flex wrap basis-zero :gap="3">\n  <div class="grow">\n    <p class="title3 mb4">Default</p>\n    <w-list\n      v-model="selectedItem1"\n      :items="listItems1"\n      checklist\n      color="green">\n    </w-list>\n  </div>\n  <div class="grow">\n    <p class="title3 mb4">Round checkboxes</p>\n    <w-list\n      v-model="selectedItem2"\n      :items="listItems1"\n      checklist\n      round-checkboxes\n      color="green">\n    </w-list>\n  </div>\n</w-flex>\n\n<w-flex wrap basis-zero :gap="3" class="mt4">\n  <div class="grow">\n    <p class="title3 mb4">Custom rendering, default styles</p>\n    <w-list\n      :items="listItems2"\n      item-value="id"\n      checklist\n      color="primary">\n      <template #item="{ item }">\n        <span>'+e._s("{{ item.label }}")+'</span>\n        <div class="spacer"></div>\n        <w-icon md>'+e._s("{{ item.icon }}")+'</w-icon>\n      </template>\n    </w-list>\n  </div>\n  <div class="grow">\n    <p class="title3 mb4">Custom rendering & styles</p>\n    <w-list\n      :items="listItems2"\n      item-value="id"\n      checklist\n      color="primary"\n      class="custom">\n      <template #item="{ item }">\n        <span>'+e._s("{{ item.label }}")+'</span>\n        <div class="spacer"></div>\n        <w-icon md>'+e._s("{{ item.icon }}")+"</w-icon>\n      </template>\n    </w-list>\n  </div>\n</w-flex>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  listItems1: [\n    { label: 'Item 1', value: 1 },\n    { label: 'Item 2', value: 2 },\n    { label: 'Item 3', value: 3 },\n    { label: 'Item 4', value: 4 },\n    { label: 'Item 5', value: 5 },\n    { label: 'Item 6', value: 6, disabled: true }\n  ],\n  listItems2: [\n    { label: 'Star', id: 'star', icon: 'mdi mdi-star', route: '#route-to-star' },\n    { label: 'Check', id: 'check', icon: 'mdi mdi-check', route: '#route-to-check' },\n    { label: 'Cross', id: 'cross', icon: 'mdi mdi-close', route: '#route-to-cross' },\n    { label: 'Info', id: 'info', icon: 'mdi mdi-information', route: '#route-to-info' },\n    { label: 'Warning', id: 'warning', icon: 'mdi mdi-alert', route: '#route-to-warning' },\n    { label: 'Disabled', id: 'disabled', icon: 'mdi mdi-minus-circle', route: '#disabled', disabled: true }\n  ],\n  selectedItem1: [1, 3],\n  selectedItem2: 1\n})")]},proxy:!0},{key:"css",fn:function(){return[e._v(".w-list {max-width: 300px;}\n.w-list.custom .w-list__item-label:before {display: none;}\n.w-list.custom .w-list__item-label label {\n  position: relative;\n  transition: 0.3s ease-in-out;\n}\n.w-list.custom .w-list__item-label--active label {\n  opacity: 0.6;\n  color: #999;\n}\n.w-list.custom .w-list__item-label label:before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 0;\n  border-top: 1px solid #999;\n  pointer-events: none;\n  transition: 0.3s ease-in-out;\n}\n.w-list.custom .w-list__item-label--active label:before {\n  width: 100%;\n}\n")]},proxy:!0}])},[i("w-flex",{attrs:{wrap:"","basis-zero":"",gap:3}},[i("div",{staticClass:"grow"},[i("div",{staticClass:"title3 mb4"},[e._v("Default")]),i("w-list",{attrs:{items:e.listItems1,checklist:"",color:"green"},model:{value:e.selectedItem3,callback:function(t){e.selectedItem3=t},expression:"selectedItem3"}})],1),i("div",{staticClass:"grow"},[i("div",{staticClass:"title3 mb4"},[e._v("Round checkboxes")]),i("w-list",{attrs:{items:e.listItems1,checklist:"","round-checkboxes":"",color:"green"},model:{value:e.selectedItem4,callback:function(t){e.selectedItem4=t},expression:"selectedItem4"}})],1)]),i("w-flex",{staticClass:"mt4",attrs:{wrap:"","basis-zero":"",gap:3}},[i("div",{staticClass:"grow"},[i("div",{staticClass:"title3 mb4"},[e._v("Custom rendering, default styles")]),i("w-list",{attrs:{items:e.listItems2,"item-value":"id",checklist:"",color:"primary"},scopedSlots:e._u([{key:"item",fn:function(t){var l=t.item;return[i("span",[e._v(e._s(l.label))]),i("div",{staticClass:"spacer"}),i("w-icon",{attrs:{md:""}},[e._v(e._s(l.icon))])]}}])})],1),i("div",{staticClass:"grow"},[i("div",{staticClass:"title3 mb4"},[e._v("Custom rendering & styles")]),i("w-list",{staticClass:"custom",attrs:{items:e.listItems2,"item-value":"id",checklist:"",color:"primary"},scopedSlots:e._u([{key:"item",fn:function(t){var l=t.item;return[i("span",[e._v(e._s(l.label))]),i("div",{staticClass:"spacer"}),i("w-icon",{attrs:{md:""}},[e._v(e._s(l.icon))])]}}])})],1)])],1),i("title-link",{attrs:{h2:""}},[e._v("Navigation lists")]),e._m(5),e._m(6),i("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-list :items="items" nav color="primary">\n  <template #item="{ item }">\n    <span>'+e._s("{{ item.label }}")+'</span>\n    <div class="spacer"></div>\n    <w-icon md>'+e._s("{{ item.icon }}")+"</w-icon>\n  </template>\n</w-list>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { label: 'Star', id: 'star', icon: 'mdi mdi-star', route: '#route-to-star' },\n    { label: 'Check', id: 'check', icon: 'mdi mdi-check', route: '#route-to-check' },\n    { label: 'Cross', id: 'cross', icon: 'mdi mdi-close', route: '#route-to-cross' },\n    { label: 'Info', id: 'info', icon: 'mdi mdi-information', route: '#route-to-info' },\n    { label: 'Warning', id: 'warning', icon: 'mdi mdi-alert', route: '#route-to-warning' },\n    { label: 'Disabled', id: 'disabled', icon: 'mdi mdi-minus-circle', route: '#disabled', disabled: true }\n  ]\n})")]},proxy:!0},{key:"css",fn:function(){return[e._v(".w-list {max-width: 300px;}")]},proxy:!0}])},[i("w-list",{attrs:{items:e.listItems2,nav:"",color:"primary"},scopedSlots:e._u([{key:"item",fn:function(t){var l=t.item;return[i("span",[e._v(e._s(l.label))]),i("div",{staticClass:"spacer"}),i("w-icon",{attrs:{md:""}},[e._v(e._s(l.icon))])]}}])})],1)],1)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("The "),i("span",{staticClass:"code"},[e._v("w-list")]),e._v(" component has multiple uses:")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("Like in most components, you can set a "),i("code",[e._v("color")]),e._v(" for the text and a "),i("code",[e._v("bg-color")]),e._v(" for the\nbackground.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("In this example, we don't use the component's data at all."),i("br"),e._v("\nYou can easily define items directly in the template and have a different custom layout for every\nlist item just like in this example.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("It's up to you to define your your list contents in the component's data or directly in the template."),i("br"),e._v("\nIn this example each item has a different icon stored in the data object.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("Note: you can get the list selection from the v-model, or by listening to the "),i("span",{staticClass:"code"},[e._v("input")]),e._v(" event.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("The navigation list expects a "),i("code",[e._v("route")]),e._v(" attribute in the items that are links."),i("br"),e._v("\nIt will create a router link or a normal link (if not using vue-router) on those items.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("It is possible to disable a link with a "),i("code",[e._v("disabled: true")]),e._v(" attribute in the item.")])}],n={data:function(){return{radios:[{label:"Single selection",value:!1},{label:"Multiple selections",value:!0}],multiple:!1,listItems1:[{label:"Item 1",value:1},{label:"Item 2",value:2},{label:"Item 3",value:3},{label:"Item 4",value:4},{label:"Item 5",value:5},{label:"Item 6",value:6,disabled:!0}],listItems2:[{label:"Star",id:"star",icon:"mdi mdi-star",route:"#route-to-star"},{label:"Check",id:"check",icon:"mdi mdi-check",route:"#route-to-check"},{label:"Cross",id:"cross",icon:"mdi mdi-close",route:"#route-to-cross"},{label:"Info",id:"info",icon:"mdi mdi-information",route:"#route-to-info"},{label:"Warning",id:"warning",icon:"mdi mdi-alert",route:"#route-to-warning"},{label:"Disabled",id:"disabled",icon:"mdi mdi-minus-circle",route:"#disabled",disabled:!0}],listItems3:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"},{label:"Item 5"},{label:"Item 6",disabled:!0}],selectedItem1:2,selectedItem2:"check",selectedItem3:[1,3],selectedItem4:1,itemClicked:null}}},a=n,o=(i("5aaf"),i("2877")),r=Object(o["a"])(a,l,s,!1,null,null,null);t["default"]=r.exports},5804:function(e,t,i){},"5aaf":function(e,t,i){"use strict";var l=i("5804"),s=i.n(l);s.a}}]);
//# sourceMappingURL=list-vue.1e481868.js.map