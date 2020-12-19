(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["accordion-index-vue","accordion-api-vue","accordion-examples-vue"],{3702:function(e,t,i){},"4ec2":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"w-divider my12"}),i("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),i("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),i("component-api",{attrs:{items:e.slots,title:"Slots"}}),i("component-api",{attrs:{items:e.events,title:"Events"}})],1)},o=[],a=(i("13d5"),i("0489")),s={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide an array of booleans to dictate the state (expanded and collapsed) of all the accordion items. This value gets updated by the accordion when using a v-model.',color:'Applies a text color on each accordion item. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a background color on each accordion item. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',items:'Expecting an array of objects. Each object being an accordion item, it should include a <code>title</code> and <code>content</code> attributes.<br>Alternatively, you can provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> items in the accordion. You can then use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item title and content.',itemTitleKey:"Specifies the name of the attribute in each item object where to find the item's title string.",itemContentKey:"Specifies the name of the attribute in each item object where to find the item's content string.",itemColorKey:"Specifies the name of the attribute in each item object where to find the item's desired color string. This allows a different color for each accordion item.",itemClass:"Applies a custom CSS class (or space separated classes) on every item container (which includes both the title and the content of the item).",titleClass:"Applies a custom CSS class (or space separated classes) on every title container.",contentClass:"Applies a custom CSS class (or space separated classes) on every content container.",expandIcon:"Specifies the name of the icon to display in the toggle button. If set to false or empty string, the button will be removed.",expandIconRight:"When set to true, the expand button will be placed at the right end of the item's title.",expandSingle:"Specifies the accordion behavior, whether only one item can be expanded at a time or multiple. When set to true, expanding another item than the one already expanded is still possible, but it will collapse the other expanded item.",collapseIcon:"Provide a different icon than the expand icon, to show when the accordion item is expanded. By default and when empty, there is no collapse icon: the expand icon rotates to show a closing ability.",shadow:"Applies a shadow to the whole accordion container."},c={"item-title":{description:"Provide a custom title for every item. Applies to all the items, but can be overridden by the <code>item-title.x</code> slot.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}},"item-title.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom title for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}},"item-content":{description:"Provide a custom content for every item. Applies to all the items, but can be overridden by the <code>item-content.x</code> slot.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}},"item-content.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot.",expanded:"A boolean representing the expanded state of the accordion item."}}},r={input:{description:"Emitted each time the state of the accordion changes (when an item is expanded or collapsed).<br>Updates the v-model value in Vue 2.x only.",params:{"[Array]":"An array of booleans representing the expanded state of each accordion item."}},"update:modelValue":{description:"Emitted each time the state of the accordion changes (when an item is expanded or collapsed).<br>Updates the v-model value in Vue 3 only.",params:{"[Array]":"An array of booleans representing the expanded state of each accordion item."}},focus:{description:"Emitted on each accordion item title focus.",params:{"[Object]":"The focused accordion item object."}}},l={data:function(){return{propsDescs:s,slots:c}},computed:{props:function(){return a["a"].props},events:function(){return a["a"].emits.reduce((function(e,t){return(e[t]=r[t]||{})&&e}),{})}}},m=l,u=i("2877"),d=Object(u["a"])(m,n,o,!1,null,null,null);t["default"]=d.exports},d838:function(e,t,i){"use strict";i("3702")},e797:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("main",[i("ui-component-title",[e._v("w-accordion")]),i("examples"),i("api")],1)},o=[],a=i("fe24"),s=i("4ec2"),c={components:{Examples:a["default"],Api:s["default"]}},r=c,l=i("2877"),m=Object(l["a"])(r,n,o,!1,null,null,null);t["default"]=m.exports},fe24:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("title-link",{attrs:{h2:""}},[e._v("Basic")]),i("w-accordion",{staticClass:"white--bg",attrs:{items:e.items}}),i("p",{staticClass:"grey-light2 my4"},[e._v("Now that you've seen the default accordion in real context, all the examples of this page will have a\nlight blue background and accordions a white background to help visualize where they end.\n")]),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-accordion(v-model="accordion" :items="items")\ndiv.mt3\n  | v-model:\n  code.ml1 '+e._s("{{ accordion }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    {\n      title: 'Item 1',\n      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'\n    },\n    {\n      title: 'Item 2',\n      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'\n    },\n    {\n      title: 'Item 3',\n      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'\n    }\n  ],\n  accordion: []\n})\n")]},proxy:!0}])},[i("w-accordion",{staticClass:"white--bg",attrs:{items:e.items},model:{value:e.accordion1,callback:function(t){e.accordion1=t},expression:"accordion1"}}),i("div",{staticClass:"mt3"},[e._v("v-model:"),i("code",{staticClass:"ml1"},[e._v(e._s(e.accordion1))])])],1),i("title-link",{attrs:{h2:""}},[e._v("Expanded by default")]),e._m(0),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-accordion(v-model="accordion" :items="items")\ndiv.mt3\n  | v-model:\n  code.ml1 '+e._s("{{ accordion }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    {\n      title: 'Item 1',\n      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'\n    },\n    {\n      title: 'Item 2',\n      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'\n    },\n    {\n      title: 'Item 3',\n      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'\n    }\n  ],\n  accordion: [false, true, false]\n})\n")]},proxy:!0}])},[i("w-accordion",{staticClass:"white--bg",attrs:{items:e.items},model:{value:e.accordion2,callback:function(t){e.accordion2=t},expression:"accordion2"}}),i("div",{staticClass:"mt3"},[e._v("v-model:"),i("code",{staticClass:"ml1"},[e._v(e._s(e.accordion2))])])],1),i("title-link",{attrs:{h2:""}},[e._v("Disabled pane")]),e._m(1),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-accordion(v-model="accordion" :items="items")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { title: 'Item 1 - disabled collapsed', content: 'Disabled', disabled: true },\n    { title: 'Item 2 - disabled expanded', content: 'You can\\'t collapse this pane.', disabled: true },\n    { title: 'Item 3 - fully enabled', content: 'You can toggle this pane to expand and collapse.' }\n  ],\n  accordion: [false, true, true]\n})\n")]},proxy:!0}])},[i("w-accordion",{staticClass:"white--bg",attrs:{items:e.itemsDisabled},model:{value:e.accordion3,callback:function(t){e.accordion3=t},expression:"accordion3"}})],1),i("title-link",{attrs:{h2:""}},[e._v("Shadow")]),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-accordion(:items="items" shadow)')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    {\n      title: 'Item 1',\n      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'\n    },\n    {\n      title: 'Item 2',\n      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'\n    },\n    {\n      title: 'Item 3',\n      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'\n    }\n  ]\n})\n")]},proxy:!0}])},[i("w-accordion",{staticClass:"white--bg",attrs:{items:e.items,shadow:""}})],1),i("title-link",{attrs:{h2:""}},[e._v("Color & background color")]),e._m(2),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-accordion(:items="items" color="amber-dark1")\nw-accordion.mt6(:items="items" bg-color="yellow-light5")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    {\n      title: 'Item 1',\n      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'\n    },\n    {\n      title: 'Item 2',\n      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'\n    },\n    {\n      title: 'Item 3',\n      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'\n    }\n  ]\n})\n")]},proxy:!0}])},[i("w-accordion",{staticClass:"white--bg",attrs:{items:e.items,color:"amber-dark1"}}),i("w-accordion",{staticClass:"mt6",attrs:{items:e.items,"bg-color":"yellow-light5"}})],1),i("title-link",{attrs:{h3:""}},[e._v("Different color per item")]),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-accordion(:items="items")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { title: 'Item 1', content: 'Content 1', color: 'amber' },\n    { title: 'Item 2', content: 'Content 2', color: 'warning' },\n    { title: 'Item 3', content: 'Content 3', color: 'error' }\n  ]\n})\n")]},proxy:!0}])},[i("w-accordion",{staticClass:"white--bg",attrs:{items:e.items2}})],1),i("title-link",{attrs:{h2:""}},[e._v("Expand a single item at a time")]),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-accordion(v-model="accordion" :items="items" expand-single)\ndiv.mt3\n  | v-model:\n  code.ml1 '+e._s("{{ accordion }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    {\n      title: 'Item 1',\n      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'\n    },\n    {\n      title: 'Item 2',\n      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'\n    },\n    {\n      title: 'Item 3',\n      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'\n    }\n  ],\n  accordion: []\n})\n")]},proxy:!0}])},[i("w-accordion",{staticClass:"white--bg",attrs:{items:e.items,"expand-single":""},model:{value:e.accordion4,callback:function(t){e.accordion4=t},expression:"accordion4"}}),i("div",{staticClass:"mt3"},[e._v("v-model:"),i("code",{staticClass:"ml1"},[e._v(e._s(e.accordion4))])])],1),i("title-link",{attrs:{h2:""}},[e._v("External control")]),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-button.mr2(@click="accordion = Array&#40;3&#41;.fill&#40;true&#41;" bg-color="primary" sm) Expand all\nw-button(@click="accordion = Array&#40;3&#41;.fill&#40;false&#41;" bg-color="primary" sm) Collapse all\n\nw-accordion.mt4(v-model="accordion" :items="items")\ndiv.mt3\n  | v-model:\n  code.ml1 '+e._s("{{ accordion }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    {\n      title: 'Item 1',\n      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'\n    },\n    {\n      title: 'Item 2',\n      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'\n    },\n    {\n      title: 'Item 3',\n      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'\n    }\n  ],\n  accordion: []\n})\n")]},proxy:!0}])},[i("w-button",{staticClass:"mr2",attrs:{"bg-color":"primary",sm:""},on:{click:function(t){e.accordion5=Array(3).fill(!0)}}},[e._v("Expand all")]),i("w-button",{attrs:{"bg-color":"primary",sm:""},on:{click:function(t){e.accordion5=Array(3).fill(!1)}}},[e._v("Collapse all")]),i("w-accordion",{staticClass:"mt4 white--bg",attrs:{items:e.items},model:{value:e.accordion5,callback:function(t){e.accordion5=t},expression:"accordion5"}}),i("div",{staticClass:"mt3"},[e._v("v-model:"),i("code",{staticClass:"ml1"},[e._v(e._s(e.accordion5))])])],1),i("title-link",{attrs:{h2:""}},[e._v("Custom rendering")]),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-accordion(:items="items" content-class="pa0")\n  template(#item-title="{ item }")\n    w-icon(lg :color="item.itemColor") '+e._s("{{ item.icon }}")+'\n    .title3.ml2(:class="item.itemColor") '+e._s("{{ item.title }}")+'\n  template(#item-content="{ item }")\n    w-alert.my0.pb3(border-left tile :color="item.itemColor" v-html="item.content")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    {\n      title: 'Item 1',\n      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.',\n      icon: 'mdi mdi-home',\n      itemColor: 'blue'\n    },\n    {\n      title: 'Item 2',\n      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!',\n      icon: 'mdi mdi-github',\n      itemColor: 'green'\n    },\n    {\n      title: 'Item 3',\n      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.',\n      icon: 'mdi mdi-codepen',\n      itemColor: 'orange'\n    }\n  ]\n})\n")]},proxy:!0}])},[i("w-accordion",{staticClass:"white--bg",attrs:{items:e.items,"content-class":"pa0"},scopedSlots:e._u([{key:"item-title",fn:function(t){var n=t.item;return[i("w-icon",{attrs:{lg:"",color:n.itemColor}},[e._v(e._s(n.icon))]),i("div",{staticClass:"title3 my0 ml2",class:n.itemColor},[e._v(e._s(n.title))])]}},{key:"item-content",fn:function(t){var n=t.item;return[i("w-alert",{staticClass:"my0 pb3",attrs:{"border-left":"",tile:"",color:n.itemColor},domProps:{innerHTML:e._s(n.content)}})]}}])})],1),i("title-link",{attrs:{h2:""}},[e._v("Do you (really) need even more flexibility?")]),e._m(3),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-accordion(:items="3")\n  template(#item-title.1="") Item title 1\n  template(#item-content.1="") Item content 1\n\n  template(#item-title.2="") Item title 2\n  template(#item-content.2="") Item content 2\n\n  template(#item-title.3="") Item title 3\n  template(#item-content.3="") Item content 3\n')]},proxy:!0}])},[i("w-accordion",{staticClass:"white--bg",attrs:{items:3},scopedSlots:e._u([{key:"item-title.1",fn:function(){return[e._v("Item title 1")]},proxy:!0},{key:"item-content.1",fn:function(){return[e._v("Item content 1")]},proxy:!0},{key:"item-title.2",fn:function(){return[e._v("Item title 2")]},proxy:!0},{key:"item-content.2",fn:function(){return[e._v("Item content 2")]},proxy:!0},{key:"item-title.3",fn:function(){return[e._v("Item title 3")]},proxy:!0},{key:"item-content.3",fn:function(){return[e._v("Item content 3")]},proxy:!0}])})],1),e._m(4),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-accordion(:items="items")\n  template(#item-title.item1="")\n    | This is the 1st item\n    w-tag.ml2(color="red" sm outline) HOT\n  template(#item-content.item1="")\n    p This content has a checklist.\n    .title4.my3 To do\n    w-list(checklist color="primary" :items="[{ label: \'do this\' }, { label: \'do that next\' }]")\n\n  template(#item-title.item2="")\n    w-icon.mr1(md color="amber") mdi mdi-emoticon-excited-outline\n    em This is the 2nd item\n  template(#item-content.item2="{ item }")\n    p The full content here is custom and completely distinct and independent from the other items.\n    p\n      | You also have access to the item\'s data if you need:\n      code.ml1 '+e._s("{{ item }}")+'\n\n  template(#item-title.item3="")\n    strong This is the 3rd item\n    w-icon.ml1(md color="pink") mdi mdi-emoticon-kiss-outline\n  template(#item-content.item3="")\n    p Do you want to check the project on Github?\n    w-button.mt2(bg-color="primary" route="https://github.com/antoniandre/wave-ui")\n      | Github\n      w-icon.ml2(sm) mdi mdi-open-in-new')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    { id: 'item1' },\n    { id: 'item2' },\n    { id: 'item3' }\n  ]\n})\n")]},proxy:!0}])},[i("w-accordion",{staticClass:"white--bg",attrs:{items:e.itemsCustom},scopedSlots:e._u([{key:"item-title.item1",fn:function(){return[e._v("This is the 1st item"),i("w-tag",{staticClass:"ml2",attrs:{color:"red",sm:"",outline:""}},[e._v("HOT")])]},proxy:!0},{key:"item-content.item1",fn:function(){return[i("p",[e._v("This content has a checklist.")]),i("div",{staticClass:"title4"},[e._v("To do")]),i("w-list",{attrs:{checklist:"",color:"primary",items:[{label:"do this"},{label:"do that next"}]}})]},proxy:!0},{key:"item-title.item2",fn:function(){return[i("w-icon",{staticClass:"mr1",attrs:{md:"",color:"amber"}},[e._v("mdi mdi-emoticon-excited-outline")]),i("em",[e._v("This is the 2nd item")])]},proxy:!0},{key:"item-content.item2",fn:function(t){var n=t.item;return[i("p",[e._v("The full content here is custom and completely distinct and independent from the other items.")]),i("p",[e._v("You also have access to the item's data if you need:"),i("code",{staticClass:"ml1"},[e._v(e._s(n))])])]}},{key:"item-title.item3",fn:function(){return[i("strong",[e._v("This is the 3rd item")]),i("w-icon",{staticClass:"ml1",attrs:{md:"",color:"pink"}},[e._v("mdi mdi-emoticon-kiss-outline")])]},proxy:!0},{key:"item-content.item3",fn:function(){return[i("p",[e._v("Do you want to check the project on Github?")]),i("w-button",{attrs:{"bg-color":"primary",route:"https://github.com/antoniandre/wave-ui"}},[e._v("Github"),i("w-icon",{staticClass:"ml2",attrs:{sm:""}},[e._v("mdi mdi-open-in-new")])],1)]},proxy:!0}])})],1),i("title-link",{attrs:{h2:""}},[e._v("Toggle icon options")]),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('.title4.mb2 1 custom icon (only expand)\nw-accordion(:items="items" expand-icon="wi-chevron-down")\n\n.title4.mt8.mb2 2 custom icons (expand & collapse)\nw-accordion(:items="items" expand-icon="wi-plus" collapse-icon="wi-minus")\n\n.title4.mt8.mb2 No icon\nw-accordion(:items="items" :expand-icon="false" title-class="py2")\n\n.title4.mt8.mb2 Icon on the right\nw-accordion(:items="items" expand-icon-right)')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  items: [\n    {\n      title: 'Item 1',\n      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'\n    },\n    {\n      title: 'Item 2',\n      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'\n    },\n    {\n      title: 'Item 3',\n      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'\n    }\n  ]\n})")]},proxy:!0}])},[i("div",{staticClass:"title4"},[e._v("1 custom icon (only expand)")]),i("w-accordion",{staticClass:"white--bg",attrs:{items:e.items,"expand-icon":"wi-chevron-down"}}),i("div",{staticClass:"title4 mt6"},[e._v("2 custom icons (expand & collapse)")]),i("w-accordion",{staticClass:"white--bg",attrs:{items:e.items,"expand-icon":"wi-plus","collapse-icon":"wi-minus"}}),i("div",{staticClass:"title4 mt6"},[e._v("No icon")]),i("w-accordion",{staticClass:"white--bg",attrs:{items:e.items,"expand-icon":!1,"title-class":"py2"}}),i("div",{staticClass:"title4 mt6"},[e._v("Icon on the right")]),i("w-accordion",{staticClass:"white--bg",attrs:{items:e.items,"expand-icon-right":""}})],1)],1)},o=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("You can expand one or multiple panes by default by providing a v-model array of booleans:\n"),i("span",{staticClass:"code"},[e._v("true")]),e._v(" to expand, "),i("span",{staticClass:"code"},[e._v("false")]),e._v(" to collapse the item.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("Specify which pane should be disabled - expanded or collapsed - by adding the "),i("span",{staticClass:"code"},[e._v("disabled")]),e._v(" property\ndirectly in the object.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("Like in most components, you can set a "),i("code",[e._v("color")]),e._v(" for the text and a "),i("code",[e._v("bg-color")]),e._v(" for the\nbackground."),i("br"),e._v("\nNo background color is set by default and the text color is inherited.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("No problem, Wave UI's got you covered."),i("br"),e._v("\nIf you don't need data objects at all, you can simply define a number of items: "),i("code",[e._v(':items="3"')]),e._v(".\n")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("Here is an example of 3 totally diferent pane titles and contents using more lines of code."),i("br"),e._v("\nThis time, an array of object is defined to show you can also do a mix of contents coming from the\nthe component's data or directly in the template.")])}],a={data:function(){return{items:[{title:"Item 1",content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.",icon:"mdi mdi-home",itemColor:"blue"},{title:"Item 2",content:"Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!",icon:"mdi mdi-github",itemColor:"green"},{title:"Item 3",content:"Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.",icon:"mdi mdi-codepen",itemColor:"orange"}],items2:[{title:"Item 1",content:"content 1",color:"amber"},{title:"Item 2",content:"content 2",color:"warning"},{title:"Item 3",content:"content 3",color:"error"}],itemsDisabled:[{title:"Item 1 - disabled collapsed",content:"Disabled",disabled:!0},{title:"Item 2 - disabled expanded",content:"You can't collapse this pane.",disabled:!0},{title:"Item 3 - fully enabled",content:"You can toggle this pane to expand and collapse."}],itemsCustom:[{id:"item1"},{id:"item2"},{id:"item3"}],accordion1:[],accordion2:[!1,!0,!1],accordion3:[!1,!0,!0],accordion4:[],accordion5:[]}}},s=a,c=(i("d838"),i("2877")),r=Object(c["a"])(s,n,o,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=accordion-index-vue.c78a5f83.js.map