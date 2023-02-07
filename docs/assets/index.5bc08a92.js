import{r as d,o as b,f as g,a as l,w as e,b as n,d as t,h as p,c as f,e as L,i as w,_ as v,ae as k}from"./index.59a44df4.js";const S=w("<p>You can provide different icons for the expand button and tree items.</p><p>You can also provide icons for each item. Depending on the type of item:</p><ul><li><code>expand-icon</code>: for the expand icon.</li><li><code>expand-open-icon</code>: for the expand icon when open (if different than the <code>expand-icon</code>).</li><li><code>branch-icon</code>: if the item has children.</li><li><code>branch-open-icon</code>: if the item has children and it is open.</li><li><code>leaf-icon</code>: for items which don&#39;t contain anything.</li></ul>",3),I=w(`<p>It is possible to set a specific icon in any/each item of the tree.<br>
By default, the <strong class="code">w-tree</strong> component will look for any icon in the <code>icon</code> key,
but you can override that with the <code>item-icon-key</code> prop.</p><p>It is also possible to set a specific color for the icon of any/each item of the tree.<br>
By default, the <strong class="code">w-tree</strong> component will look for any icon color in the <code>iconColor</code> key,
but you can override that with the <code>item-icon-color-key</code> prop.</p>`,2),E={class:"w-flex wrap align-center"},B=t("div",{class:"title3"},"Normal",-1),$=t("div",{class:"title3"},"unexpandable-empty",-1),A=t("p",null,[n("When the tree is "),t("code",null,"selectable"),n(", you can use the "),t("code",null,"v-model"),n(" to get the selected item.")],-1),N=t("p",null,"Click on a tree item to select it.",-1),D={class:"w-flex mt6"},T=t("strong",{class:"mr3"},"Selection:",-1),V={class:"orange-light6--bg pa2"},R=w('<p>Multiple events are fired from the <strong class="code">w-tree</strong> component:</p><ul class="lh0"><li><code>before-open</code>: fired as soon as the user clicks a tree item that is expandable and before the subitems are revealed.</li><li class="mt1"><code>open</code>: fired after a user clicks a tree item that is expandable, and after the expand animation.</li><li class="mt1"><code>before-close</code>: fired as soon as the user clicks a tree item to close its subtree.</li><li class="mt1"><code>close</code>: fired after a user clicks a tree item to close its subtree, and after the collapse animation.</li><li class="mt1"><code>click</code>: fired when the user clicks any tree item.</li><li class="mt1"><code>select</code>: fired when the user selects any selectable tree item. The <code>selectable</code> option must be set to true.</li><li class="mt1"><code>update:model-value</code>: (or <code>input</code> in Vue 2.x) fired when the user selects any selectable tree item. The <code>selectable</code> option must be set to true.</li></ul>',2),M=["innerHTML"],P=t("strong",{class:"black"},"Note on reactivity",-1),z={class:"black mt2"},H=t("code",null,"deep-reactivity",-1),O=t("br",null,null,-1),W={href:"https://vuejs.org/guide/essentials/watchers.html#deep-watchers",target:"_blank"},q=t("p",null,[n("If you need to customize the layout of the item label, you can use the "),t("code",null,"#item-label"),n(" slot.")],-1);function K(a,o,h,_,y,m){const r=d("title-link"),s=d("w-tree"),i=d("example"),u=d("w-icon"),j=d("w-card"),x=d("w-flex"),C=d("alert");return b(),g("div",null,[l(r,{h2:""},{default:e(()=>[n("Default")]),_:1}),l(i,null,{pug:e(()=>[n('w-tree(:data="tree")')]),html:e(()=>[n('<w-tree :data="tree"></w-tree>')]),js:e(()=>[n(`data: () => ({
  tree: [
    {
      label: 'src',
      children: [
        {
          label: 'assets',
          children: [
            { label: 'wave.svg' },
          ]
        },
        { label: 'views', branch: true },
        { label: 'app.vue' },
        { label: 'router.js' },
        { label: 'main.js' },
        {
          label: 'scss',
          children: [
            { label: 'index.scss' },
            { label: '_variables.scss' },
            { label: '_base.scss' }
          ]
        },
        { label: 'store.js' },
      ]
    },
    { label: '.editorconfig' },
    { label: '.gitignore' },
    { label: 'index.html' },
    { label: 'jsconfig.json' },
    { label: 'LICENSE' },
    { label: 'package.json' },
    { label: 'pnpm-lock.yaml' },
    { label: 'postcss.config.js' },
    { label: 'README.md' },
    { label: 'vite.config.js' }
  ]
})
`)]),default:e(()=>[l(s,{data:a.tree2},null,8,["data"])]),_:1}),l(r,{h2:""},{default:e(()=>[n("Icons")]),_:1}),S,l(i,null,{pug:e(()=>[n(`w-tree.size--md(
  :data="tree"
  expand-icon="mdi mdi-plus"
  expand-open-icon="mdi mdi-minus"
  branch-icon="mdi mdi-folder-outline"
  branch-open-icon="mdi mdi-folder-open-outline"
  leaf-icon="mdi mdi-file-outline")`)]),html:e(()=>[n(`<w-tree
  :data="tree"
  expand-icon="mdi mdi-plus"
  expand-open-icon="mdi mdi-minus"
  branch-icon="mdi mdi-folder-outline"
  branch-open-icon="mdi mdi-folder-open-outline"
  leaf-icon="mdi mdi-file-outline"
  class="size--md">
</w-tree>`)]),js:e(()=>[n(`data: () => ({
  tree: [
    {
      label: 'src',
      children: [
        {
          label: 'assets',
          children: [
            { label: 'wave.svg' },
          ]
        },
        { label: 'views', branch: true },
        { label: 'app.vue' },
        { label: 'router.js' },
        { label: 'main.js' },
        {
          label: 'scss',
          children: [
            { label: 'index.scss' },
            { label: '_variables.scss' },
            { label: '_base.scss' }
          ]
        },
        { label: 'store.js' },
      ]
    },
    { label: '.editorconfig' },
    { label: '.gitignore' },
    { label: 'index.html' },
    { label: 'jsconfig.json' },
    { label: 'LICENSE' },
    { label: 'package.json' },
    { label: 'pnpm-lock.yaml' },
    { label: 'postcss.config.js' },
    { label: 'README.md' },
    { label: 'vite.config.js' }
  ]
})
`)]),default:e(()=>[l(s,{class:"size--md",data:a.tree2,"expand-icon":"mdi mdi-plus","expand-open-icon":"mdi mdi-minus","branch-icon":"mdi mdi-folder-outline","branch-open-icon":"mdi mdi-folder-open-outline","leaf-icon":"mdi mdi-file-outline"},null,8,["data"])]),_:1}),l(r,{h3:""},{default:e(()=>[n("Different icon per item")]),_:1}),I,l(i,null,{pug:e(()=>[n(`w-tree.size--md(
  :data="tree"
  expand-icon="mdi mdi-plus"
  expand-open-icon="mdi mdi-minus"
  branch-icon="mdi mdi-folder-outline"
  branch-open-icon="mdi mdi-folder-open-outline"
  leaf-icon="mdi mdi-file-outline")`)]),html:e(()=>[n(`<w-tree
  :data="tree"
  expand-icon="mdi mdi-plus"
  expand-open-icon="mdi mdi-minus"
  branch-icon="mdi mdi-folder-outline"
  branch-open-icon="mdi mdi-folder-open-outline"
  leaf-icon="mdi mdi-file-outline"
  class="size--md"></w-tree>`)]),js:e(()=>[n(`data: () => ({
  tree: [
    {
      label: 'src',
      icon: 'mdi mdi-code-not-equal-variant',
      iconColor: 'green',
      children: [
        {
          label: 'assets',
          icon: 'mdi mdi-star',
          iconColor: 'yellow-dark1',
          children: [
            { label: 'wave.svg', icon: 'mdi mdi-svg', iconColor: 'yellow-dark1' }
          ]
        },
        { label: 'views', branch: true, icon: 'mdi mdi-code-greater-than', iconColor: 'orange' },
        { label: 'app.vue', icon: 'mdi mdi-vuejs', iconColor: 'green' },
        { label: 'router.js', icon: 'mdi mdi-routes', iconColor: 'green' },
        { label: 'main.js', icon: 'mdi mdi-language-javascript', iconColor: 'yellow-dark1' },
        {
          label: 'scss',
          icon: 'mdi mdi-sass',
          iconColor: 'pink',
          children: [
            { label: 'index.scss', icon: 'mdi mdi-sass', iconColor: 'pink' },
            { label: '_variables.scss', icon: 'mdi mdi-sass', iconColor: 'pink' },
            { label: '_base.scss', icon: 'mdi mdi-sass', iconColor: 'pink' }
          ]
        },
        { label: 'store.js', icon: 'mdi mdi-language-javascript', iconColor: 'yellow-dark1' }
      ]
    },
    { label: '.editorconfig', icon: 'mdi mdi-cog', iconColor: 'grey' },
    { label: '.gitignore', icon: 'mdi mdi-git', iconColor: 'red' },
    { label: '.npmrc', icon: 'mdi mdi-npm', iconColor: 'red' },
    { label: 'index.html', icon: 'mdi mdi-language-html5', iconColor: 'red' },
    { label: 'jsconfig.json', icon: 'mdi mdi-code-json', iconColor: 'yellow-dark1' },
    { label: 'LICENSE', icon: 'mdi mdi-license', iconColor: 'red' },
    { label: 'package.json', icon: 'mdi mdi-nodejs', iconColor: 'lime-dark1' },
    { label: 'pnpm-lock.yaml', icon: 'mdi mdi-code-json', iconColor: 'yellow-dark1' },
    { label: 'postcss.config.js', icon: 'mdi mdi-cog', iconColor: 'red' },
    { label: 'README.md', icon: 'mdi mdi-information-outline', iconColor: 'blue' },
    { label: 'vite.config.js', icon: 'mdi mdi-flash', iconColor: 'amber' }
  ]
})
`)]),default:e(()=>[l(s,{class:"size--md",data:a.tree6,"icon-color":"blue-dark1"},null,8,["data"])]),_:1}),l(r,{h3:""},{default:e(()=>[n("No expand button")]),_:1}),l(i,null,{pug:e(()=>[n('w-tree(:data="tree" :expand-icon="false")')]),html:e(()=>[n('<w-tree :data="tree" :expand-icon="false"></w-tree>')]),js:e(()=>[n(`data: () => ({
  tree: [
    {
      label: 'src',
      children: [
        {
          label: 'assets',
          children: [
            { label: 'wave.svg' },
          ]
        },
        { label: 'views', branch: true },
        { label: 'app.vue' },
        { label: 'router.js' },
        { label: 'main.js' },
        {
          label: 'scss',
          children: [
            { label: 'index.scss' },
            { label: '_variables.scss' },
            { label: '_base.scss' }
          ]
        },
        { label: 'store.js' },
      ]
    },
    { label: '.editorconfig' },
    { label: '.gitignore' },
    { label: 'index.html' },
    { label: 'jsconfig.json' },
    { label: 'LICENSE' },
    { label: 'package.json' },
    { label: 'pnpm-lock.yaml' },
    { label: 'postcss.config.js' },
    { label: 'README.md' },
    { label: 'vite.config.js' }
  ]
})
`)]),default:e(()=>[l(s,{data:a.tree2,"expand-icon":!1},null,8,["data"])]),_:1}),l(r,{h2:""},{default:e(()=>[n("Selectable")]),_:1}),l(i,null,{pug:e(()=>[n('w-tree(:data="tree" selectable)')]),html:e(()=>[n('<w-tree :data="tree" selectable></w-tree>')]),js:e(()=>[n(`data: () => ({
  data: () => ({
  tree: [
    {
      label: 'Branch 1',
      children: [
        { label: 'Leaf 1' },
        { label: 'Leaf 2' },
        { label: 'Leaf 3' }
      ]
    },
    { label: 'Branch 2', branch: true },
    { label: 'Leaf 1' },
    { label: 'Leaf 2' }
  ]
})
`)]),default:e(()=>[l(s,{data:a.tree1,selectable:""},null,8,["data"])]),_:1}),l(r,{h2:""},{default:e(()=>[n("Counts")]),_:1}),l(i,null,{pug:e(()=>[n('w-tree(:data="tree" counts)')]),html:e(()=>[n('<w-tree :data="tree" counts></w-tree>')]),js:e(()=>[n(`data: () => ({
  tree: [
    {
      label: 'Branch 1',
      children: [
        { label: 'Leaf 1' },
        { label: 'Leaf 2' },
        { label: 'Leaf 3' }
      ]
    },
    { label: 'Branch 2', branch: true },
    { label: 'Leaf 1' },
    { label: 'Leaf 2' }
  ]
})
`)]),default:e(()=>[l(s,{data:a.tree1,counts:""},null,8,["data"])]),_:1}),l(r,{h2:""},{default:e(()=>[n("No transition")]),_:1}),l(i,null,{pug:e(()=>[n('w-tree(:data="tree" no-transition)')]),html:e(()=>[n('<w-tree :data="tree" no-transition></w-tree>')]),js:e(()=>[n(`data: () => ({
  data: () => ({
  tree: [
    {
      label: 'Branch 1',
      children: [
        { label: 'Leaf 1' },
        { label: 'Leaf 2' },
        { label: 'Leaf 3' }
      ]
    },
    { label: 'Branch 2', branch: true },
    { label: 'Leaf 1' },
    { label: 'Leaf 2' }
  ]
})
`)]),default:e(()=>[l(s,{data:a.tree1,"no-transition":""},null,8,["data"])]),_:1}),l(r,{h2:""},{default:e(()=>[n("Unexpandable empty branches")]),_:1}),l(i,null,{pug:e(()=>[n('w-tree(:data="tree" unexpandable-empty)')]),html:e(()=>[n('<w-tree :data="tree" unexpandable-empty></w-tree>')]),js:e(()=>[n(`data: () => ({
  tree: [
    {
      label: 'Branch 1',
      children: [
        { label: 'Leaf 1' },
        { label: 'Leaf 2' },
        { label: 'Leaf 3' }
      ]
    },
    { label: 'Branch 2', branch: true },
    { label: 'Leaf 1' },
    { label: 'Leaf 2' }
  ]
})
`)]),default:e(()=>[t("div",E,[t("div",null,[B,l(s,{data:a.tree1},null,8,["data"])]),l(u,{class:"grey-light3 mx12",rotate90a:"",xl:""},{default:e(()=>[n("wi-arrow-down")]),_:1}),t("div",null,[$,l(s,{data:a.tree1,"unexpandable-empty":""},null,8,["data"])])])]),_:1}),l(r,{h2:""},{default:e(()=>[n("V-model")]),_:1}),A,N,l(i,null,{pug:e(()=>[n('w-tree(v-model="selection" :data="tree" selectable)')]),html:e(()=>[n('<w-tree v-model="selection" :data="tree" selectable></w-tree>')]),js:e(()=>[n(`data: () => ({
  tree: [
    {
      label: 'Branch 1',
      children: [
        { label: 'Leaf 1' },
        { label: 'Leaf 2' },
        { label: 'Leaf 3' }
      ]
    },
    { label: 'Branch 2', branch: true },
    { label: 'Leaf 1' },
    { label: 'Leaf 2' }
  ]
})
`)]),default:e(()=>[l(s,{modelValue:a.selection,"onUpdate:modelValue":o[0]||(o[0]=c=>a.selection=c),data:a.tree1,selectable:""},null,8,["modelValue","data"]),t("div",D,[T,t("pre",V,p(a.selection),1)])]),_:1}),l(r,{h2:""},{default:e(()=>[n("Events")]),_:1}),R,l(i,null,{pug:e(()=>[n(`w-tree(
  :data="tree"
  @before-open="log('@before-open', $event)"
  @open="log('@open', $event)"
  @before-close="log('@before-close', $event)"
  @close="log('@close', $event)"
  @click="log('@click', $event)"
  @select="log('@select', $event)"
  selectable)`)]),html:e(()=>[n(`<w-tree
  :data="tree"
  @before-open="log('@before-open', $event)"
  @open="log('@open', $event)"
  @before-close="log('@before-close', $event)"
  @close="log('@close', $event)"
  @click="log('@click', $event
  @select="log('@select', $event)"
  selectable>
</w-tree>`)]),js:e(()=>[n(`data: () => ({
  tree: [
    {
      label: 'src',
      children: [
        {
          label: 'assets',
          children: [
            { label: 'wave.svg' },
          ]
        },
        { label: 'views', branch: true },
        { label: 'app.vue' },
        { label: 'router.js' },
        { label: 'main.js' },
        {
          label: 'scss',
          children: [
            { label: 'index.scss' },
            { label: '_variables.scss' },
            { label: '_base.scss' }
          ]
        },
        { label: 'store.js' },
      ]
    },
    { label: '.editorconfig' },
    { label: '.gitignore' },
    { label: 'index.html' },
    { label: 'jsconfig.json' },
    { label: 'LICENSE' },
    { label: 'package.json' },
    { label: 'pnpm-lock.yaml' },
    { label: 'postcss.config.js' },
    { label: 'README.md' },
    { label: 'vite.config.js' }
  ]
}),

methods: {
  log: (...args) => console.log(...args)
}
`)]),default:e(()=>[l(x,{gap:"12"},{default:e(()=>[l(s,{data:a.tree2,onBeforeOpen:o[1]||(o[1]=c=>m.log("@before-open",c)),onOpen:o[2]||(o[2]=c=>m.log("@open",c)),onBeforeClose:o[3]||(o[3]=c=>m.log("@before-close",c)),onClose:o[4]||(o[4]=c=>m.log("@close",c)),onClick:o[5]||(o[5]=c=>m.log("@click",c)),onSelect:o[6]||(o[6]=c=>m.log("@select",c)),selectable:""},null,8,["data"]),l(j,{"bg-color":"amber-light6",title:"Event log","title-class":"amber-light5--bg"},{default:e(()=>[t("pre",{innerHTML:a.logs},null,8,M)]),_:1})]),_:1})]),_:1}),l(r,{h3:""},{default:e(()=>[n("Real-case scenario: Renaming a leaf item on click")]),_:1}),l(i,null,{pug:e(()=>[n('w-tree(:data="tree3" @click="renameLeafItem" deep-reactivity)')]),html:e(()=>[n(`<w-tree
  :data="tree"
  @click="renameLeafItem"
  deep-reactivity>
</w-tree>`)]),js:e(()=>[n(`data: () => ({
  tree: [
    {
      label: 'Item 1',
      children: [
        { label: 'Sub item 1' },
        { label: 'Sub item 2' }
      ]
    },
    { label: 'Item 2' }
  ]
}),

methods: {
  renameLeafItem ({ item }) {
    if (!item.children) item.label = 'Hello!'
  },
}`)]),default:e(()=>[l(s,{data:a.tree3,onClick:m.renameLeafItem,"deep-reactivity":""},null,8,["data","onClick"])]),_:1}),l(C,{tip:""},{default:e(()=>[P,t("p",z,[n(`By default the tree items key-value pairs will not be watched as this is a more expensive
operation. This means that if you want to have reactivity when you modify a key or value,
like the label, you will need to add the `),H,n(" option."),O,t("a",W,[n("Read on deep watchers on the Vue.js official documentation"),l(u,{class:"ml1"},{default:e(()=>[n("mdi mdi-open-in-new")]),_:1})])])]),_:1}),l(r,{h2:""},{default:e(()=>[n("Custom item label")]),_:1}),q,l(i,null,{pug:e(()=>[n(`w-tree.lh5(:data="tree")
  template(#item-label="{ item, open }")
    span `+p("{{ item.label }}")+`
    w-icon.ml1(v-if="item.status === 'error'" bg-color="error" xs) mdi mdi-close
    w-icon.ml1(v-else-if="item.status === 'success'" bg-color="success" xs) mdi mdi-check
    w-icon.ml1(v-else-if="item.status === 'syncing'" bg-color="warning" xs) mdi mdi-clock-outline`,1)]),html:e(()=>[n(`<w-tree :data="tree">
  <template #item-label="{ item, open }">
      <span>`+p("{{ item.label }}")+`</span>
      <w-icon
        v-if="item.status === 'error'"
        bg-color="error"
        xs
        class="ml1">
        mdi mdi-close
      </w-icon>
      <w-icon
        v-else-if="item.status === 'success'"
        bg-color="success"
        xs
        class="ml1">
        mdi mdi-check
      </w-icon>
      <w-icon
        v-else-if="item.status === 'syncing'"
        bg-color="warning"
        xs
        class="ml1">
        mdi mdi-clock-outline
      </w-icon>
</w-tree>`,1)]),js:e(()=>[n(`data: () => ({
  tree: [
    {
      label: 'Item 1',
      children: [
        { label: 'Sub item 1', status: 'success' },
        { label: 'Sub item 2', status: 'error' }
      ]
    },
    { label: 'Item 2', status: 'syncing' }
  ]
}),

methods: {
  renameLeafItem ({ item }) {
    if (!item.children) item.label = 'Hello!'
  },
}
`)]),default:e(()=>[l(s,{class:"lh5",data:a.tree4},{"item-label":e(({item:c,open:ae})=>[t("span",null,p(c.label),1),c.status==="error"?(b(),f(u,{key:0,class:"ml1","bg-color":"error",xs:""},{default:e(()=>[n("mdi mdi-close")]),_:1})):c.status==="success"?(b(),f(u,{key:1,class:"ml1","bg-color":"success",xs:""},{default:e(()=>[n("mdi mdi-check")]),_:1})):c.status==="syncing"?(b(),f(u,{key:2,class:"ml1","bg-color":"warning",xs:""},{default:e(()=>[n("mdi mdi-clock-outline")]),_:1})):L("",!0)]),_:1},8,["data"])]),_:1}),l(r,{h2:""},{default:e(()=>[n("Expand all, by default")]),_:1}),l(i,null,{pug:e(()=>[n('w-tree(:data="tree" expand-all)')]),html:e(()=>[n('<w-tree :data="tree" expand-all></w-tree>')]),js:e(()=>[n(`data: () => ({
  tree: [
      {
        label: 'Item 1',
        children: [
          { label: 'Sub item 1' },
          {
            label: 'Sub Item 1',
            children: [
              { label: 'Sub Sub item 1' },
              { label: 'Sub Sub item 2' }
            ]
          },
          { label: 'Sub item 2' }
        ]
      },
      { label: 'Item 2' }
  ]
})`)]),default:e(()=>[l(s,{data:a.tree5,"expand-all":""},null,8,["data"])]),_:1})])}const U={data:()=>({tree1:[{label:"Branch 1",children:[{label:"Leaf 1"},{label:"Leaf 2"},{label:"Leaf 3"}]},{label:"Branch 2",branch:!0},{label:"Leaf 1"},{label:"Leaf 2"}],tree2:[{label:"src",children:[{label:"assets",children:[{label:"wave.svg"}]},{label:"views",branch:!0},{label:"app.vue"},{label:"router.js"},{label:"main.js"},{label:"scss",children:[{label:"index.scss"},{label:"_variables.scss"},{label:"_base.scss"}]},{label:"store.js"}]},{label:".editorconfig"},{label:".gitignore"},{label:".npmrc"},{label:"index.html"},{label:"jsconfig.json"},{label:"LICENSE"},{label:"package.json"},{label:"pnpm-lock.yaml"},{label:"postcss.config.js"},{label:"README.md"},{label:"vite.config.js"}],tree3:[{label:"Item 1",children:[{label:"Sub item 1"},{label:"Sub item 2"}]},{label:"Item 2"}],tree4:[{label:"Item 1",children:[{label:"Sub item 1",status:"success"},{label:"Sub item 2",status:"error"}]},{label:"Item 2",status:"syncing"}],tree5:[{label:"Item 1",children:[{label:"Sub item 1"},{label:"Sub Item 1",children:[{label:"Sub Sub item 1"},{label:"Sub Sub item 2"}]},{label:"Sub item 2"}]},{label:"Item 2"}],tree6:[{label:"src",icon:"mdi mdi-code-not-equal-variant",iconColor:"green",children:[{label:"assets",icon:"mdi mdi-star",iconColor:"yellow-dark1",children:[{label:"wave.svg",icon:"mdi mdi-svg",iconColor:"yellow-dark1"}]},{label:"views",branch:!0,icon:"mdi mdi-code-greater-than",iconColor:"orange"},{label:"app.vue",icon:"mdi mdi-vuejs",iconColor:"green"},{label:"router.js",icon:"mdi mdi-routes",iconColor:"green"},{label:"main.js",icon:"mdi mdi-language-javascript",iconColor:"yellow-dark1"},{label:"scss",icon:"mdi mdi-sass",iconColor:"pink",children:[{label:"index.scss",icon:"mdi mdi-sass",iconColor:"pink"},{label:"_variables.scss",icon:"mdi mdi-sass",iconColor:"pink"},{label:"_base.scss",icon:"mdi mdi-sass",iconColor:"pink"}]},{label:"store.js",icon:"mdi mdi-language-javascript",iconColor:"yellow-dark1"}]},{label:".editorconfig",icon:"mdi mdi-cog",iconColor:"grey"},{label:".gitignore",icon:"mdi mdi-git",iconColor:"red"},{label:".npmrc",icon:"mdi mdi-npm",iconColor:"red"},{label:"index.html",icon:"mdi mdi-language-html5",iconColor:"red"},{label:"jsconfig.json",icon:"mdi mdi-code-json",iconColor:"yellow-dark1"},{label:"LICENSE",icon:"mdi mdi-license",iconColor:"red"},{label:"package.json",icon:"mdi mdi-nodejs",iconColor:"lime-dark1"},{label:"pnpm-lock.yaml",icon:"mdi mdi-code-json",iconColor:"yellow-dark1"},{label:"postcss.config.js",icon:"mdi mdi-cog",iconColor:"red"},{label:"README.md",icon:"mdi mdi-information-outline",iconColor:"blue"},{label:"vite.config.js",icon:"mdi mdi-flash",iconColor:"amber"}],selection:null,logs:[]}),methods:{renameLeafItem({item:a}){a.children||(a.label="Hello!")},log(...a){console.log(...a);const[o,h]=a;this.logs=`<strong>${o}:</strong><br>${JSON.stringify(h,null,"  ")}`}}},Y=v(U,[["render",K]]),J=t("div",{class:"w-divider my12"},null,-1);function F(a,o,h,_,y,m){const r=d("title-link"),s=d("alert"),i=d("component-api");return b(),g("div",null,[J,l(r,{class:"title1",h2:""},{default:e(()=>[n("API")]),_:1}),l(s,{class:"mb6",info:""},{default:e(()=>[n("The missing props descriptions will be added shortly (all the props are already listed).")]),_:1}),l(i,{class:"mt0",items:m.props,descriptions:a.propsDescs,title:"Props"},null,8,["items","descriptions"]),l(i,{items:a.slots,title:"Slots"},null,8,["items"]),l(i,{items:m.events,title:"Events"},null,8,["items"])])}const G={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This value gets updated with the tree selected item when using a <code>v-model</code> and when <code>selectable</code> is set to <code>true</code>.',data:`The object or array to display in a tree view. Any item must be an object which contain at least a <code>label</code> attribute. Any children of an item must be placed in an array in the <code>children</code> attribute. E.g.<br><pre>[
  {
    label: 'Item 1',
    children: [
      { label: 'Child 1' },
      { label: 'Child 2' }
    ]
  },
  { label: 'Item 2' }
]</pre>`,depth:!1,branchClass:"Adds the specified CSS class to all the branch-type items.<br>Any item that has children is a branch, and any item marked with the <code>branch</code> boolean attribute in its object.",leafClass:"Adds the specified CSS class to all the leaf-type items.<br>Any item that that don't contain children is a leaf.",branchIcon:"Provide an icon for all the branch items.",branchOpenIcon:"Provide an icon for any branch item that is open.",leafIcon:"Provide an icon for all the leaf items.",expandIcon:"Provide a custom icon for the expand button. Set to <code>false</code> to remove the expand button (keeping the expand ability on the label itself).",expandOpenIcon:"Provide a custom icon for all the expand button when it is open - if it should be different than the <code>expandIcon</code>.",expandAll:"Expand all the expandable branches of the tree by default, including sub-items.",deepReactivity:'By default the tree items key-value pairs will not be watched as this is a more expensive operation. This means that if you want to have reactivity when you modify a key or value, like the label, you will need to add the <code>deep-reactivity</code> option.<br><a href="https://vuejs.org/guide/essentials/watchers.html#deep-watchers" target="_blank">Read on deep watchers on the Vue.js official documentation<i class="ml1 w-icon mdi mdi-open-in-new"></i></a>',unexpandableEmpty:"When set to <code>true</code>, this will remove the expand button and ability off any branch item label that is empty (has no children).",disabled:"When set to <code>true</code>, disables the tree interactivity (expand, collapse selection, click, tab).",noTransition:"When set to <code>true</code>, disables the expand/collapse transition.",selectable:"Make any item of the tree selectable, via click or via the keyboard arrow keys and <kbd>tab</kbd> key.",counts:"Display the branch children counts on each branch item.",iconColor:'Define a color for all the items icons.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',itemIconKey:"Specifies the name of the attribute in each item object where to find the item's icon.",itemIconColorKey:`Specifies the name of the attribute in each item object where to find the item's icon color.<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`},Q={"item-label":{description:"Provide a custom template for all the item labels.",params:{item:"The current tree item object.",depth:"The item depth in the tree. Starts at 0 for the root.",open:"A boolean representing the open state of the tree item."}}},X={},Z={data:()=>({propsDescs:G,slots:Q}),computed:{props(){return k.props},events(){return k.emits.reduce((a,o)=>(a[o]=X[o]||{})&&a,{})}}},ee=v(Z,[["render",F]]);function ne(a,o,h,_,y,m){const r=d("ui-component-title"),s=d("examples"),i=d("api");return b(),g("main",null,[l(r,{slug:"w-tree","in-progress":""},{default:e(()=>[n("w-tree")]),_:1}),l(s),l(i)])}const le={components:{Examples:Y,Api:ee}},oe=v(le,[["render",ne]]);export{oe as default};