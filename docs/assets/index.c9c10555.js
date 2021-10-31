import{n as s,t as l}from"./index.7fb433e7.js";import"./vendor.4f8da9ec.js";var u=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("title-link",{attrs:{h2:""}},[t._v("Show on click or on hover")]),n("example",{staticClass:"example1",attrs:{"content-class":"pt5"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-menu>
  <template #activator="{ on }">
    <w-button
      v-on="on"
      outline
      color="primary"
      class="mr3">
      Show menu on click
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu show-on-hover>
  <template #activator="{ on }">
    <w-button v-on="on" outline color="primary">
      Show menu on hover
    </w-button>
  </template>
  Menu content
</w-menu>
`)]},proxy:!0}])},[n("w-menu",{attrs:{"detach-to":".example1"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mb2 mr3",attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on click")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example1","show-on-hover":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mb2",attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on hover")])]}}])},[t._v("Menu content")])],1),n("title-link",{attrs:{h2:""}},[t._v("Persistent menu")]),t._m(0),n("example",{staticClass:"example1",attrs:{"content-class":"pt5"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-menu persistent>
  <template #activator="{ on }">
    <w-button
      v-on="on"
      outline
      color="primary"
      class="mr3">
      Show persistent menu
    </w-button>
  </template>
  Click on the button again to close
</w-menu>
`)]},proxy:!0}])},[n("w-menu",{attrs:{"detach-to":".example1",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mb2 mr3",attrs:{outline:"",color:"primary"}},o),[t._v("Show persistent menu")])]}}])},[t._v("Click on the button again to close")])],1),n("title-link",{attrs:{h2:""}},[t._v("Hide menu on click inside")]),t._m(1),n("example",{staticClass:"example1",attrs:{"content-class":"pt5"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-menu hide-on-menu-click>
  <template #activator="{ on }">
    <w-button
      v-on="on"
      outline
      color="primary"
      class="mr3">
      Show menu
    </w-button>
  </template>
  A click here will close the menu.
</w-menu>
`)]},proxy:!0}])},[n("w-menu",{attrs:{"detach-to":".example1","hide-on-menu-click":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mb2 mr3",attrs:{outline:"",color:"primary"}},o),[t._v("Show menu")])]}}])},[t._v("A click here will close the menu.")])],1),n("title-link",{attrs:{h2:""}},[t._v("Position")]),n("example",{staticClass:"example2",attrs:{"content-class":"py12"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-flex :gap="3" wrap>
  <w-menu left>
    <template #activator="{ on }">
      <w-button v-on="on" outline color="primary">
        Show menu on left
      </w-button>
    </template>
    Menu content
  </w-menu>

  <w-menu>
    <template #activator="{ on }">
      <w-button v-on="on" outline color="primary">
        Show menu on bottom
      </w-button>
    </template>
    Menu content
  </w-menu>

  <w-menu top>
    <template #activator="{ on }">
      <w-button v-on="on" outline color="primary">
        Show menu on top
      </w-button>
    </template>
    Menu content
  </w-menu>

  <w-menu right>
    <template #activator="{ on }">
      <w-button v-on="on" outline color="primary">
        Show menu on right
      </w-button>
    </template>
    Menu content
  </w-menu>
</w-flex>
`)]},proxy:!0}])},[n("w-flex",{attrs:{gap:3,wrap:""}},[n("w-menu",{attrs:{"detach-to":".example2",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on left")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example2"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on bottom")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example2",top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on top")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example2",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show menu on right")])]}}])},[t._v("Menu content")])],1)],1),n("title-link",{attrs:{h2:""}},[t._v("Alignments")]),n("p",[t._v("In addition to positions, you can align the menu with its activator.")]),n("example",{staticClass:"example2",scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<div class="title4 mb2">Top position</div>
<w-menu top align-left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on" outline color="primary">
      Align left
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on" outline color="primary">
      Centered
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu top align-right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on" outline color="primary">
      Align right
    </w-button>
  </template>
  Menu content
</w-menu>

<div class="title4 mt6 mb2">Bottom position</div>
<w-menu align-left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on" outline color="primary">
      Align left
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on" outline color="primary">
      Centered
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu align-right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on" outline color="primary">
      Align right
    </w-button>
  </template>
  Menu content
</w-menu>

<div class="title4 mt6 mb2">Right position</div>
<w-menu right align-top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on" outline color="primary">
      Align top
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on" outline color="primary">
      Centered
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu right align-bottom>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on" outline color="primary">Alig
      n bottom
    </w-button>
  </template>
  Menu content
</w-menu>

<div class="title4 mt6 mb2">Left position</div>
<w-menu left align-top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on" outline color="primary">A
      lign top
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on" outline color="primary">
      Centered
    </w-button>
  </template>
  Menu content
</w-menu>

<w-menu left align-bottom>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on" outline color="primary">
      Align bottom
    </w-button>
  </template>
  Menu content
</w-menu>
`)]},proxy:!0}])},[n("div",{staticClass:"title4 mb2"},[t._v("Top position")]),n("w-menu",{attrs:{"detach-to":".example2",top:"","align-left":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align left")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example2",top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Centered")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example2",top:"","align-right":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align right")])]}}])},[t._v("Menu content")]),n("div",{staticClass:"title4 mt6 mb2"},[t._v("Bottom position")]),n("w-menu",{attrs:{"detach-to":".example2","align-left":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align left")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example2"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Centered")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example2","align-right":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align right")])]}}])},[t._v("Menu content")]),n("div",{staticClass:"title4 mt6 mb2"},[t._v("Right position")]),n("w-menu",{attrs:{"detach-to":".example2",right:"","align-top":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align top")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example2",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Centered")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example2",right:"","align-bottom":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align bottom")])]}}])},[t._v("Menu content")]),n("div",{staticClass:"title4 mt6 mb2"},[t._v("Left position")]),n("w-menu",{attrs:{"detach-to":".example2",left:"","align-top":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align top")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example2",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Centered")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example2",left:"","align-bottom":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Align bottom")])]}}])},[t._v("Menu content")])],1),n("title-link",{attrs:{h2:""}},[t._v("Color & background color")]),t._m(2),n("example",{staticClass:"example3",attrs:{"content-class":"pb12"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-menu color="blue-dark2" bg-color="blue-light5">
  <template #activator="{ on }">
    <w-button v-on="on" outline color="primary">
      Show a blue menu
    </w-button>
  </template>
  Menu content
</w-menu>
`)]},proxy:!0}])},[n("w-menu",{attrs:{"detach-to":".example3",color:"blue-dark2","bg-color":"blue-light5"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"ma1",attrs:{outline:"",color:"primary"}},o),[t._v("Show a blue menu")])]}}])},[t._v("Menu content")])],1),n("title-link",{attrs:{h2:""}},[t._v("Tile, round and shadow")]),n("example",{staticClass:"example4",attrs:{"content-class":"pb12"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-flex wrap :gap="3">
  <w-menu tile>
    <template #activator="{ on }">
      <w-button v-on="on" outline color="primary">
        Show a tile menu
      </w-button>
    </template>
    Menu content
    </template>
  </w-menu>

  <w-menu round>
    <template #activator="{ on }">
      <w-button v-on="on" outline color="primary">
        Show a round menu
      </w-button>
    </template>
    Menu content
    </template>
  </w-menu>

  <w-menu shadow>
    <template #activator="{ on }">
      <w-button v-on="on" outline color="primary">
        Show a shadow menu
      </w-button>
    </template>
    Menu content
    </template>
  </w-menu>
</w-flex>
`)]},proxy:!0}])},[n("w-flex",{attrs:{wrap:"",gap:3}},[n("w-menu",{attrs:{"detach-to":".example4",tile:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mt1",attrs:{outline:"",color:"primary"}},o),[t._v("Show a tile menu")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example4",round:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mt1",attrs:{outline:"",color:"primary"}},o),[t._v("Show a round menu")])]}}])},[t._v("Menu content")]),n("w-menu",{attrs:{"detach-to":".example4",shadow:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mt1",attrs:{outline:"",color:"primary"}},o),[t._v("Show a shadow menu")])]}}])},[t._v("Menu content")])],1)],1),n("title-link",{attrs:{h2:""}},[t._v("Menu content: w-card")]),n("p",[t._v("By default the menu is a w-card, so it accepts all the props of a w-card.")]),n("example",{staticClass:"example5",attrs:{"content-class":"mb12 pb12"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-menu shadow v-model="showMenu">
  <template #activator>
    <w-button
      class="mr3"
      @click="showMenu = true"
      outline
      color="primary">
      Show a w-card menu
    </w-button>
  </template>

  <div class="title4">
    How much do you like Wave UI?
  </div>

  <p>Pick a serious answer.</p>

  <w-flex class="pl10 mt4" wrap justify-end>
    <w-button
      class="mr1"
      text
      color="green"
      @click="showMenu = false">
      Love it!
    </w-button>

    <w-button
      class="mr1"
      text
      color="green"
      @click="showMenu = false">
      Love it!
    </w-button>

    <w-button
      text
      color="green"
      @click="showMenu = false">
      Love it!
    </w-button>
  </w-flex>
</w-menu>

<w-menu shadow custom>
  <template #activator="{ on }">
    <w-button v-on="on" outline color="primary">
      Show a list menu
    </w-button>
  </template>

  <w-card content-class="pa0">
    <w-toolbar>
      <div class="title3 ma0">Menu Title</div>
      <div class="spacer"></div>
      <span class="ml1">Item 1</span>
      <span class="ml1">Item 2</span>
    </w-toolbar>

    <div class="pa3">
      This is some content in a w-card component.
    </div>
  </w-card>
</w-menu>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  showMenu: false
})
`)]},proxy:!0}])},[n("w-menu",{attrs:{"detach-to":".example5",shadow:""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("w-button",{staticClass:"mr3 mb2",attrs:{outline:"",color:"primary"},on:{click:function(e){t.showMenu=!0}}},[t._v("Show a w-card menu")])]},proxy:!0}]),model:{value:t.showMenu,callback:function(e){t.showMenu=e},expression:"showMenu"}},[n("div",{staticClass:"title4"},[t._v("How much do you like Wave UI?")]),n("p",[t._v("Pick a serious answer.")]),n("w-flex",{staticClass:"pl10 mt4",attrs:{wrap:"","justify-end":""}},[n("w-button",{staticClass:"mr1",attrs:{text:"",color:"green"},on:{click:function(e){t.showMenu=!1}}},[t._v("Love it!")]),n("w-button",{staticClass:"mr1",attrs:{text:"",color:"green"},on:{click:function(e){t.showMenu=!1}}},[t._v("Love it!")]),n("w-button",{attrs:{text:"",color:"green"},on:{click:function(e){t.showMenu=!1}}},[t._v("Love it!")])],1)],1),n("w-menu",{attrs:{"detach-to":".example5",shadow:"",custom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({staticClass:"mb2",attrs:{outline:"",color:"primary"}},o),[t._v("Show a list menu")])]}}])},[n("w-card",{staticClass:"white--bg",attrs:{"content-class":"pa0"}},[n("w-toolbar",[n("div",{staticClass:"title3 ma0"},[t._v("Menu Title")]),n("div",{staticClass:"spacer"}),n("span",{staticClass:"ml1"},[t._v("Item 1")]),n("span",{staticClass:"ml1"},[t._v("Item 2")])]),n("div",{staticClass:"pa3"},[t._v("This is some content in a w-card component.")])],1)],1)],1),n("title-link",{attrs:{h2:""}},[t._v("Custom content: List menu")]),t._m(3),n("example",{staticClass:"example6",attrs:{"content-class":"mb12 pb12"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-menu
  custom
  hide-on-menu-click
  persistent
  shadow>
  <template #activator="{ on }">
    <w-button v-on="on" outline color="primary">
      Show a list menu
    </w-button>
  </template>

  <w-list
    class="white--bg"
    v-model="listSelection"
    :items="listItems"
    item-class="px8">
  </w-list>
</w-menu>

<div class="mt4">
  <strong>Current selection:</strong>
  <code class="ml1">`+t._s("{{ listSelection || 'none' }}")+`</code>
</div>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  showMenu: false,
  listSelection: null,
  listItems: [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' }
  ]
})
`)]},proxy:!0}])},[n("w-menu",{attrs:{"detach-to":".example6",custom:"","hide-on-menu-click":"",persistent:"",shadow:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show a list menu")])]}}])},[n("w-list",{staticClass:"white--bg",attrs:{items:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"}],"item-class":"px8"},model:{value:t.list,callback:function(e){t.list=e},expression:"list"}})],1),n("div",{staticClass:"mt4"},[n("strong",[t._v("Current selection:")]),n("code",{staticClass:"ml1"},[t._v(t._s(t.list||"none"))])])],1),n("title-link",{attrs:{h2:""}},[t._v("Menu with overlay")]),n("example",{staticClass:"example7",attrs:{"content-class":"mb12 pb12"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v(`<w-menu v-model="showMenu" shadow custom overlay>
  <template #activator="{ on }">
    <w-button v-on="on" outline color="primary">
      Show a menu & overlay
    </w-button>
  </template>

  <w-list
    class="white--bg"
    nav
    :items="listItems"
    item-class="px8"
    @item-select="showMenu = false">
  </w-list>
</w-menu>`)]},proxy:!0},{key:"js",fn:function(){return[t._v(`data: () => ({
  showMenu: false,
  listItems: [
    { label: 'Item 1', route: '#item1' },
    { label: 'Item 2', route: '#item2' },
    { label: 'Item 3', route: '#item3' }
  ]
})`)]},proxy:!0}])},[n("w-menu",{attrs:{"detach-to":".example7",shadow:"",custom:"",overlay:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("w-button",t._g({attrs:{outline:"",color:"primary"}},o),[t._v("Show a menu & overlay")])]}}]),model:{value:t.showListMenu2,callback:function(e){t.showListMenu2=e},expression:"showListMenu2"}},[n("w-list",{staticClass:"white--bg",attrs:{nav:"",items:[{label:"Item 1",route:"#item1"},{label:"Item 2",route:"#item2"},{label:"Item 3",route:"#item3"}],"item-class":"px8"},on:{"item-select":function(e){t.showListMenu2=!1}}})],1)],1)],1)},m=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("p",[t._v("A persistent menu can only be closed by clicking on the activator again, or programmatically."),n("br"),t._v(`
Clicking outside the menu will not close it.`)])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("p",[t._v("A persistent menu can only be closed by clicking on the activator again, or programmatically."),n("br"),t._v(`
Clicking outside the menu will not close it.`)])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("p",[t._v("Like in most components, you can define a "),n("code",[t._v("color")]),t._v(" and a  "),n("code",[t._v("bg-color")]),t._v(".")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("p",[t._v("By default the menu is a "),n("strong",{staticClass:"code"},[t._v("w-card")]),t._v(`. But if you need more flexibility, you can set the
`),n("code",[t._v("custom")]),t._v(" prop and put whatever you want in the free-of-style menu."),n("br"),t._v(`
In this example, the menu is `),n("code",[t._v("persistent")]),t._v(` so the user is forced to select an option from
the menu when open. Then on click of an option, the menu will hide thanks to the option
`),n("code",[t._v("hide-on-menu-click")]),t._v(".")])}];const p={data:()=>({showMenu:!1,showListMenu1:!1,showListMenu2:!1,list:null})},r={};var v=s(p,u,m,!1,h,null,null,null);function h(t){for(let a in r)this[a]=r[a]}var w=function(){return v.exports}(),d=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("div",{staticClass:"w-divider my12"}),n("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),n("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),n("component-api",{attrs:{items:t.slots,title:"Slots"}}),n("component-api",{attrs:{items:t.events,title:"Events"}})],1)},_=[];const f={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the menu. Any truthy value will show the menu whereas any falsy value will hide it.',showOnHover:"Triggers the menu apparition on activator hover instead of click by default. A mouseleave on the activator will hide the menu.",hideOnMenuClick:"Hides the menu when a click is made inside the menu. For instance when selecting a list item inside a menu.",color:`Applies a color to the menu's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the menu's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:"Applies a drop shadow to the menu element.",custom:'By default, the menu layout is a <strong class="code">w-card</strong>. To have more flexibility, you can set this option to true.',tile:"Removes the default border-radius and sets sharp edges on the menu.",round:"Sets a maximum border-radius on the corners of the menu, giving it a round look.",noBorder:"Removes the default border from the menu element.",transition:'Applies a particular transition to the menu element when showing and hiding.<br>Accepts all the transitions listed in the <a href="/transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',menuClass:"Applies a custom CSS class to the menu element.",titleClass:"Applies a custom CSS class to the menu's title when using the default card layout (when not using the <code>custom</code> prop).",contentClass:"Applies a custom CSS class to the menu's content when using the default card layout (when not using the <code>custom</code> prop).",detachTo:'Moves the menu element to another DOM element.<br>Accepts a valid query selector string. If the string is invalid, or the node is not found or if <code>true</code> is provided, `<span class="code">.w-app</span>` will be the target.<br>By default a wrapper is created around the activator element and the menu is appended inside it.',fixed:"Sets the CSS position of the menu to <code>fixed</code> (absolute by default).",top:"Places the menu at the top of the screen when the <code>fixed</code> prop is set to true or at the top of its container otherwise.",bottom:"Places the menu at the bottom of the screen when the <code>fixed</code> prop is set to true or at the bottom of its container otherwise.",left:"Places the menu at the left of the screen when the <code>fixed</code> prop is set to true or at the left of its container otherwise.",right:"Places the menu at the right of the screen when the <code>fixed</code> prop is set to true or at the right of its container otherwise.",alignTop:"Aligns the top of the menu with the top of the activator.",alignBottom:"Aligns the bottom of the menu with the bottom of the activator.",alignLeft:"Aligns the left side of the menu with the left side of the activator.",alignRight:"Aligns the right side of the menu with the right side of the activator.",zIndex:"Applies a z-index (positive or negative integer) to the menu.",minWidth:"Sets a min-width on the menu.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",overlay:'Displays a full screen overlay underneath the menu (uses the <span class="code">w-overlay</span> component).',overlayClass:'Add custom CSS classes to the <span class="code">w-overlay</span> component.',overlayProps:'An object of props to pass down to the <span class="code">w-overlay</span> component for more control.',persistent:"When set to true, clicking outside of the menu will not close the menu."},b={activator:{description:'<strong>This slot is required and must have the v-on="on" directive set on it for the menu to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.'},title:{description:'By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows a custom title for the <span class="code">w-card</span>.'},default:{description:"The menu content."},actions:{description:'By default (when <code>custom</code> is set to false), the menu uses a <span class="code">w-card</span>. This slot allows setting the actions slot of the <span class="code">w-card</span>.'}},g={input:"Emitted each time the state of the component changes (when opening or closing the menu).<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted each time the state of the component changes (when opening or closing the menu).<br>Updates the v-model value in Vue 3 only.",close:"Emitted on menu close.",open:"Emitted on menu open."},y={data:()=>({propsDescs:f,slots:b}),computed:{props(){return l.props},events(){return l.emits.reduce((t,a)=>(t[a]={description:g[a]||""})&&t,{})}}},i={};var x=s(y,d,_,!1,k,null,null,null);function k(t){for(let a in i)this[a]=i[a]}var S=function(){return x.exports}(),C=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("main",[n("ui-component-title",[t._v("w-menu")]),n("examples"),n("api")],1)},M=[];const A={components:{Examples:w,Api:S}},c={};var I=s(A,C,M,!1,$,null,null,null);function $(t){for(let a in c)this[a]=c[a]}var E=function(){return I.exports}();export{E as default};