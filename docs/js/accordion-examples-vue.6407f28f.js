(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["accordion-examples-vue"],{3702:function(t,e,i){},d838:function(t,e,i){"use strict";i("3702")},fe24:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("title-link",{attrs:{h2:""}},[t._v("Basic")]),i("w-accordion",{staticClass:"white--bg",attrs:{items:t.items}}),i("p",{staticClass:"grey-light2 my4"},[t._v("Now that you've seen the default accordion in real context, all the examples of this page will have a\nlight blue background and accordions a white background to help visualize where they end.\n")]),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-accordion v-model="accordion" :items="items" />\n<div class="mt3">\n  v-model:\n  <code class="ml1">'+t._s("{{ accordion }}")+"</code>\n</div>")]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  items: [\n    {\n      title: 'Item 1',\n      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'\n    },\n    {\n      title: 'Item 2',\n      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'\n    },\n    {\n      title: 'Item 3',\n      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'\n    }\n  ],\n  accordion: []\n})\n")]},proxy:!0}])},[i("w-accordion",{staticClass:"white--bg",attrs:{items:t.items},model:{value:t.accordion1,callback:function(e){t.accordion1=e},expression:"accordion1"}}),i("div",{staticClass:"mt3"},[t._v("v-model:"),i("code",{staticClass:"ml1"},[t._v(t._s(t.accordion1))])])],1),i("title-link",{attrs:{h2:""}},[t._v("Expanded by default")]),t._m(0),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-accordion v-model="accordion" :items="items" />\n<div class="mt3">\n  v-model:\n  <code class="ml1">'+t._s("{{ accordion }}")+"</code>\n</div>")]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  items: [\n    {\n      title: 'Item 1',\n      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'\n    },\n    {\n      title: 'Item 2',\n      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'\n    },\n    {\n      title: 'Item 3',\n      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'\n    }\n  ],\n  accordion: [false, true, false]\n})\n")]},proxy:!0}])},[i("w-accordion",{staticClass:"white--bg",attrs:{items:t.items},model:{value:t.accordion2,callback:function(e){t.accordion2=e},expression:"accordion2"}}),i("div",{staticClass:"mt3"},[t._v("v-model:"),i("code",{staticClass:"ml1"},[t._v(t._s(t.accordion2))])])],1),i("title-link",{attrs:{h2:""}},[t._v("Disabled pane")]),t._m(1),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-accordion v-model="accordion" :items="items" />')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  items: [\n    { title: 'Item 1 - disabled collapsed', content: 'Disabled', disabled: true },\n    { title: 'Item 2 - disabled expanded', content: 'You can\\'t collapse this pane.', disabled: true },\n    { title: 'Item 3 - fully enabled', content: 'You can toggle this pane to expand and collapse.' }\n  ],\n  accordion: [false, true, true]\n})\n")]},proxy:!0}])},[i("w-accordion",{staticClass:"white--bg",attrs:{items:t.itemsDisabled},model:{value:t.accordion3,callback:function(e){t.accordion3=e},expression:"accordion3"}})],1),i("title-link",{attrs:{h2:""}},[t._v("Shadow")]),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-accordion :items="items" shadow />')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  items: [\n    {\n      title: 'Item 1',\n      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'\n    },\n    {\n      title: 'Item 2',\n      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'\n    },\n    {\n      title: 'Item 3',\n      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'\n    }\n  ]\n})\n")]},proxy:!0}])},[i("w-accordion",{staticClass:"white--bg",attrs:{items:t.items,shadow:""}})],1),i("title-link",{attrs:{h2:""}},[t._v("Color & background color")]),t._m(2),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-accordion :items="items" color="amber-dark1"></w-accordion>\n<w-accordion class="mt6" :items="items" bg-color="yellow-light5"></w-accordion>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  items: [\n    {\n      title: 'Item 1',\n      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'\n    },\n    {\n      title: 'Item 2',\n      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'\n    },\n    {\n      title: 'Item 3',\n      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'\n    }\n  ]\n})\n")]},proxy:!0}])},[i("w-accordion",{staticClass:"white--bg",attrs:{items:t.items,color:"amber-dark1"}}),i("w-accordion",{staticClass:"mt6",attrs:{items:t.items,"bg-color":"yellow-light5"}})],1),i("title-link",{attrs:{h3:""}},[t._v("Different color per item")]),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-accordion :items="items" />')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  items: [\n    { title: 'Item 1', content: 'Content 1', color: 'amber' },\n    { title: 'Item 2', content: 'Content 2', color: 'warning' },\n    { title: 'Item 3', content: 'Content 3', color: 'error' }\n  ]\n})\n")]},proxy:!0}])},[i("w-accordion",{staticClass:"white--bg",attrs:{items:t.items2}})],1),i("title-link",{attrs:{h2:""}},[t._v("Expand a single item at a time")]),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-accordion v-model="accordion" :items="items" expand-single />\n<div class="mt3">\n  v-model:\n  <code class="ml1">'+t._s("{{ accordion }}")+"</code>\n</div>")]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  items: [\n    {\n      title: 'Item 1',\n      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'\n    },\n    {\n      title: 'Item 2',\n      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'\n    },\n    {\n      title: 'Item 3',\n      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'\n    }\n  ],\n  accordion: []\n})\n")]},proxy:!0}])},[i("w-accordion",{staticClass:"white--bg",attrs:{items:t.items,"expand-single":""},model:{value:t.accordion4,callback:function(e){t.accordion4=e},expression:"accordion4"}}),i("div",{staticClass:"mt3"},[t._v("v-model:"),i("code",{staticClass:"ml1"},[t._v(t._s(t.accordion4))])])],1),i("title-link",{attrs:{h2:""}},[t._v("External control")]),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-button\n  class="mr2"\n  @click="accordion = Array&#40;3&#41;.fill&#40;true&#41;"\n  bg-color="primary"\n  sm>\n  Expand all\n</w-button>\n<w-button\n  @click="accordion = Array&#40;3&#41;.fill&#40;false&#41;"\n  bg-color="primary"\n  sm>\n  Collapse all\n</w-button>\n\n<w-accordion class="mt4" v-model="accordion" :items="items" />\n<div class="mt3">\n  v-model:\n  <code class="ml1">'+t._s("{{ accordion }}")+"</code>\n</div>")]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  items: [\n    {\n      title: 'Item 1',\n      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'\n    },\n    {\n      title: 'Item 2',\n      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'\n    },\n    {\n      title: 'Item 3',\n      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'\n    }\n  ],\n  accordion: []\n})\n")]},proxy:!0}])},[i("w-button",{staticClass:"mr2",attrs:{"bg-color":"primary",sm:""},on:{click:function(e){t.accordion5=Array(3).fill(!0)}}},[t._v("Expand all")]),i("w-button",{attrs:{"bg-color":"primary",sm:""},on:{click:function(e){t.accordion5=Array(3).fill(!1)}}},[t._v("Collapse all")]),i("w-accordion",{staticClass:"mt4 white--bg",attrs:{items:t.items},model:{value:t.accordion5,callback:function(e){t.accordion5=e},expression:"accordion5"}}),i("div",{staticClass:"mt3"},[t._v("v-model:"),i("code",{staticClass:"ml1"},[t._v(t._s(t.accordion5))])])],1),i("title-link",{attrs:{h2:""}},[t._v("Custom rendering")]),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-accordion :items="items" content-class="pa0">\n  <template #item-title="{ item }">\n    <w-icon lg :color="item.itemColor">\n      '+t._s("{{ item.icon }}")+'\n    </w-icon>\n    <div class="title3 ml2" :class="item.itemColor">\n      '+t._s("{{ item.title }}")+'\n    </div>\n  </template>\n  <template #item-content="{ item }") />\n    <w-alert\n      class="my0 pb3"\n      border-left\n      tile\n      :color="item.itemColor"\n      v-html="item.content" />\n  </template>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  items: [\n    {\n      title: 'Item 1',\n      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.',\n      icon: 'mdi mdi-home',\n      itemColor: 'blue'\n    },\n    {\n      title: 'Item 2',\n      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!',\n      icon: 'mdi mdi-github',\n      itemColor: 'green'\n    },\n    {\n      title: 'Item 3',\n      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.',\n      icon: 'mdi mdi-codepen',\n      itemColor: 'orange'\n    }\n  ]\n})\n")]},proxy:!0}])},[i("w-accordion",{staticClass:"white--bg",attrs:{items:t.items,"content-class":"pa0"},scopedSlots:t._u([{key:"item-title",fn:function(e){var n=e.item;return[i("w-icon",{attrs:{lg:"",color:n.itemColor}},[t._v(t._s(n.icon))]),i("div",{staticClass:"title3 my0 ml2",class:n.itemColor},[t._v(t._s(n.title))])]}},{key:"item-content",fn:function(e){var n=e.item;return[i("w-alert",{staticClass:"my0 pb3",attrs:{"border-left":"",tile:"",color:n.itemColor},domProps:{innerHTML:t._s(n.content)}})]}}])})],1),i("title-link",{attrs:{h2:""}},[t._v("Do you (really) need even more flexibility?")]),t._m(3),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-accordion :items="3">\n  <template #item-title.1>Item title 1</template>\n  <template #item-content.1>Item content 1</template>\n\n  <template #item-title.2>Item title 2</template>\n  <template #item-content.2>Item content 2</template>\n\n  <template #item-title.3>Item title 3</template>\n  <template #item-content.3>Item content 3</template>\n</w-accordion>\n')]},proxy:!0}])},[i("w-accordion",{staticClass:"white--bg",attrs:{items:3},scopedSlots:t._u([{key:"item-title.1",fn:function(){return[t._v("Item title 1")]},proxy:!0},{key:"item-content.1",fn:function(){return[t._v("Item content 1")]},proxy:!0},{key:"item-title.2",fn:function(){return[t._v("Item title 2")]},proxy:!0},{key:"item-content.2",fn:function(){return[t._v("Item content 2")]},proxy:!0},{key:"item-title.3",fn:function(){return[t._v("Item title 3")]},proxy:!0},{key:"item-content.3",fn:function(){return[t._v("Item content 3")]},proxy:!0}])})],1),t._m(4),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-accordion :items="items">\n  <template #item-title.item1>\n    This is the 1st item\n    <w-tag class="ml2" color="red" sm outline>HOT</w-tag>\n  </template>\n  <template #item-content.item1>\n    <p>This content has a checklist.</p>\n    <div class="title4 my3">To do</div>\n    <w-list\n      checklist\n      color="primary"\n      :items="[{ label: \'do this\' }, { label: \'do that next\' }]" />\n  </template>\n\n  <template #item-title.item2>\n    <w-icon class="mr1" md color="amber">\n      mdi mdi-emoticon-excited-outline\n    </w-icon>\n    <em>This is the 2nd item</em>\n  </template>\n  <template #item-content.item2="{ item }">\n    <p>\n      The full content here is custom and completely distinct and independent from the other items.\n    </p>\n    <p>\n      You also have access to the item\'s data if you need:\n      <code class="ml1">'+t._s("{{ item }}")+'</code>\n    </p>\n  </template>\n\n  <template #item-title.item3="">\n    <strong> This is the 3rd item</strong>\n    <w-icon class="ml1" md color="pink">\n      mdi mdi-emoticon-kiss-outline\n    </w-icon>\n  </template>\n  <template #item-content.item3>\n    <p>Do you want to check the project on Github?</p>\n    <w-button\n      class="mt2"\n      bg-color="primary"\n      route="https://github.com/antoniandre/wave-ui">\n      Github\n      <w-icon class="ml2" sm>mdi mdi-open-in-new</w-icon>\n    </w-button>\n  </template>\n</w-accordion>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  items: [\n    { id: 'item1' },\n    { id: 'item2' },\n    { id: 'item3' }\n  ]\n})\n")]},proxy:!0}])},[i("w-accordion",{staticClass:"white--bg",attrs:{items:t.itemsCustom},scopedSlots:t._u([{key:"item-title.item1",fn:function(){return[t._v("This is the 1st item"),i("w-tag",{staticClass:"ml2",attrs:{color:"red",sm:"",outline:""}},[t._v("HOT")])]},proxy:!0},{key:"item-content.item1",fn:function(){return[i("p",[t._v("This content has a checklist.")]),i("div",{staticClass:"title4"},[t._v("To do")]),i("w-list",{attrs:{checklist:"",color:"primary",items:[{label:"do this"},{label:"do that next"}]}})]},proxy:!0},{key:"item-title.item2",fn:function(){return[i("w-icon",{staticClass:"mr1",attrs:{md:"",color:"amber"}},[t._v("mdi mdi-emoticon-excited-outline")]),i("em",[t._v("This is the 2nd item")])]},proxy:!0},{key:"item-content.item2",fn:function(e){var n=e.item;return[i("p",[t._v("The full content here is custom and completely distinct and independent from the other items.")]),i("p",[t._v("You also have access to the item's data if you need:"),i("code",{staticClass:"ml1"},[t._v(t._s(n))])])]}},{key:"item-title.item3",fn:function(){return[i("strong",[t._v("This is the 3rd item")]),i("w-icon",{staticClass:"ml1",attrs:{md:"",color:"pink"}},[t._v("mdi mdi-emoticon-kiss-outline")])]},proxy:!0},{key:"item-content.item3",fn:function(){return[i("p",[t._v("Do you want to check the project on Github?")]),i("w-button",{attrs:{"bg-color":"primary",route:"https://github.com/antoniandre/wave-ui"}},[t._v("Github"),i("w-icon",{staticClass:"ml2",attrs:{sm:""}},[t._v("mdi mdi-open-in-new")])],1)]},proxy:!0}])})],1),i("title-link",{attrs:{h2:""}},[t._v("Toggle icon options")]),i("example",{attrs:{"content-class":"pa4 aliceblue"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<div class="title4 mb2">\n  1 custom icon (only expand)\n</div>\n<w-accordion\n  :items="items"\n  expand-icon="wi-chevron-down">\n</w-accordion>\n\n<div class="title4 mt8 mb2">\n  2 custom icons (expand & collapse)\n</div>\n<w-accordion\n  :items="items"\n  expand-icon="wi-plus"\n  collapse-icon="wi-minus">\n</w-accordion>\n\n<div class="title4 mt8 mb2">\n  No icon\n</div>\n<w-accordion\n  :items="items"\n  :expand-icon="false"\n  title-class="py2">\n</w-accordion>\n\n<div class="title4 mt8 mb2">\n  Icon on the right\n</div>\n<w-accordion\n  :items="items"\n  expand-icon-right>\n</w-accordion>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  items: [\n    {\n      title: 'Item 1',\n      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.'\n    },\n    {\n      title: 'Item 2',\n      content: 'Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!'\n    },\n    {\n      title: 'Item 3',\n      content: 'Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.'\n    }\n  ]\n})")]},proxy:!0}])},[i("div",{staticClass:"title4"},[t._v("1 custom icon (only expand)")]),i("w-accordion",{staticClass:"white--bg",attrs:{items:t.items,"expand-icon":"wi-chevron-down"}}),i("div",{staticClass:"title4 mt6"},[t._v("2 custom icons (expand & collapse)")]),i("w-accordion",{staticClass:"white--bg",attrs:{items:t.items,"expand-icon":"wi-plus","collapse-icon":"wi-minus"}}),i("div",{staticClass:"title4 mt6"},[t._v("No icon")]),i("w-accordion",{staticClass:"white--bg",attrs:{items:t.items,"expand-icon":!1,"title-class":"py2"}}),i("div",{staticClass:"title4 mt6"},[t._v("Icon on the right")]),i("w-accordion",{staticClass:"white--bg",attrs:{items:t.items,"expand-icon-right":""}})],1)],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("You can expand one or multiple panes by default by providing a v-model array of booleans:\n"),i("span",{staticClass:"code"},[t._v("true")]),t._v(" to expand, "),i("span",{staticClass:"code"},[t._v("false")]),t._v(" to collapse the item.")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("Specify which pane should be disabled - expanded or collapsed - by adding the "),i("span",{staticClass:"code"},[t._v("disabled")]),t._v(" property\ndirectly in the object.")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("Like in most components, you can set a "),i("code",[t._v("color")]),t._v(" for the text and a "),i("code",[t._v("bg-color")]),t._v(" for the\nbackground."),i("br"),t._v("\nNo background color is set by default and the text color is inherited.")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("No problem, Wave UI's got you covered."),i("br"),t._v("\nIf you don't need data objects at all, you can simply define a number of items: "),i("code",[t._v(':items="3"')]),t._v(".\n")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("Here is an example of 3 totally diferent pane titles and contents using more lines of code."),i("br"),t._v("\nThis time, an array of object is defined to show you can also do a mix of contents coming from the\nthe component's data or directly in the template.")])}],o={data:function(){return{items:[{title:"Item 1",content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ut neque enim beatae autem iure, velit labore aut ipsa voluptatem aliquam distinctio harum. Possimus aliquid voluptatum facere incidunt dolor a.",icon:"mdi mdi-home",itemColor:"blue"},{title:"Item 2",content:"Unde quo consequatur doloremque fugiat aperiam hic rerum, dolores aspernatur. Reiciendis aspernatur ab fugiat, saepe vel aut eaque molestiae eos commodi minus. Dolorum voluptatibus fugiat, incidunt magnam repudiandae fugit dolor!",icon:"mdi mdi-github",itemColor:"green"},{title:"Item 3",content:"Enim minus excepturi totam dolorem iure nisi aperiam asperiores. Saepe blanditiis, magni ab fugit exercitationem optio. Beatae totam vitae autem consectetur accusantium dolor expedita, earum quaerat? Sed at perspiciatis aliquid.",icon:"mdi mdi-codepen",itemColor:"orange"}],items2:[{title:"Item 1",content:"content 1",color:"amber"},{title:"Item 2",content:"content 2",color:"warning"},{title:"Item 3",content:"content 3",color:"error"}],itemsDisabled:[{title:"Item 1 - disabled collapsed",content:"Disabled",disabled:!0},{title:"Item 2 - disabled expanded",content:"You can't collapse this pane.",disabled:!0},{title:"Item 3 - fully enabled",content:"You can toggle this pane to expand and collapse."}],itemsCustom:[{id:"item1"},{id:"item2"},{id:"item3"}],accordion1:[],accordion2:[!1,!0,!1],accordion3:[!1,!0,!0],accordion4:[],accordion5:[]}}},s=o,c=(i("d838"),i("2877")),r=Object(c["a"])(s,n,a,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=accordion-examples-vue.6407f28f.js.map