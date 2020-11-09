(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["overlay-examples-vue"],{"607f":function(t,e,a){"use strict";var r=a("6e36"),o=a.n(r);o.a},"6e36":function(t,e,a){},7588:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("title-link",{attrs:{h2:""}},[t._v("Overlay with custom opacity and control on "),a("span",{staticClass:"code"},[t._v("persistent")])]),a("p",[t._v("When the overlay is persistent, it will not close on click and on escape key.")]),a("p",[t._v("When persistent is set to false and by default, the escape key will also close the overlay.")]),a("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-flex(wrap)\n  w-button(bg-color="primary" dark @click="showOverlay = true") Show overlay\n\n  w-divider.mx6(vertical color="grey-light4")\n  div\n    .title4 Options\n    w-button.mr2(\n      bg-color="primary-light1"\n      :class="persistent ? \'pr4\' : \'\'"\n      @click="persistent = !persistent"\n      sm\n      dark)\n      .code.white :persistent="'+t._s(t.persistent)+'"\n    w-button(\n      bg-color="primary-light1"\n      @click="persistentNoAnimation = !persistentNoAnimation"\n      :disabled="!persistent"\n      sm\n      dark)\n      .code.white :persistent-no-animation="'+t._s(t.persistentNoAnimation)+'"\n    w-input.mt2.d-block(\n      v-model="opacity"\n      outline\n      type="number"\n      label="Overlay opacity"\n      label-position="left"\n      step="0.1"\n      min="0"\n      max="1")\nw-overlay(\n  v-model="showOverlay"\n  :persistent="persistent"\n  :persistent-no-animation="persistentNoAnimation"\n  :opacity="opacity")\n  w-button(bg-color="primary" lg dark @click="showOverlay = false")\n    w-icon.mr2 wi-cross\n    | Hide overlay')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  showOverlay: false,\n  opacity: 0.3,\n  persistent: false,\n  persistentNoAnimation: false\n})\n")]},proxy:!0}])},[a("w-flex",{attrs:{wrap:""}},[a("w-button",{staticClass:"my2",attrs:{"bg-color":"primary",dark:""},on:{click:function(e){t.showOverlay=!0}}},[t._v("Show overlay")]),a("w-divider",{staticClass:"mx6",attrs:{vertical:"",color:"grey-light4"}}),a("div",[a("div",{staticClass:"title4"},[t._v("Options")]),a("w-button",{staticClass:"d-block mr2",class:t.persistent?"pr4":"",attrs:{"bg-color":"primary-light1",sm:"",dark:""},on:{click:function(e){t.persistent=!t.persistent}}},[a("div",{staticClass:"code white"},[t._v(':persistent="'+t._s(t.persistent)+'"')])]),a("w-button",{staticClass:"d-block mt2",attrs:{"bg-color":"primary-light1",disabled:!t.persistent,sm:"",dark:""},on:{click:function(e){t.persistentNoAnimation=!t.persistentNoAnimation}}},[a("div",{staticClass:"code white"},[t._v(':persistent-no-animation="'+t._s(t.persistentNoAnimation)+'"')])]),a("w-input",{staticClass:"mt2 d-block",attrs:{outline:"",type:"number",label:"Overlay opacity","label-position":"left",step:"0.1",min:"0",max:"1"},model:{value:t.opacity,callback:function(e){t.opacity=e},expression:"opacity"}})],1)],1),a("w-overlay",{attrs:{persistent:t.persistent,"persistent-no-animation":t.persistentNoAnimation,opacity:t.opacity},model:{value:t.showOverlay,callback:function(e){t.showOverlay=e},expression:"showOverlay"}},[a("w-button",{attrs:{"bg-color":"primary",lg:"",dark:""},on:{click:function(e){t.showOverlay=!1}}},[a("w-icon",{staticClass:"mr2"},[t._v("wi-cross")]),t._v("Hide overlay")],1)],1)],1),a("title-link",{attrs:{h2:""}},[t._v("Overlay with custom background color")]),a("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-button(bg-color="primary" dark @click="showOverlay = true") Show a blue overlay\n\nw-overlay(v-model="showOverlay" bg-color="rgba(35, 71, 129, 0.4)")\n  w-button(bg-color="primary" lg dark @click="showOverlay = false")\n    w-icon.mr2 wi-cross\n    | Hide overlay')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  showOverlay: false\n})\n")]},proxy:!0}])},[a("w-button",{attrs:{"bg-color":"primary",dark:""},on:{click:function(e){t.showBlueOverlay=!0}}},[t._v("Show a blue overlay")]),a("w-overlay",{attrs:{"bg-color":"rgba(35, 71, 129, 0.4)"},model:{value:t.showBlueOverlay,callback:function(e){t.showBlueOverlay=e},expression:"showBlueOverlay"}},[a("w-button",{attrs:{"bg-color":"primary",lg:"",dark:""},on:{click:function(e){t.showBlueOverlay=!1}}},[a("w-icon",{staticClass:"mr2"},[t._v("wi-cross")]),t._v("Hide overlay")],1)],1)],1),a("title-link",{attrs:{h2:""}},[t._v("CSS backdrop filter")]),t._m(1),a("ssh-pre",{attrs:{language:"css"}},[t._v(".w-overlay {backdrop-filter: blur(10px);}")]),a("w-button",{attrs:{"bg-color":"primary",dark:""},on:{click:function(e){t.showBlurBackdropOverlay=!0}}},[t._v("Show a blur backdrop")]),a("w-overlay",{staticClass:"blur-backdrop",model:{value:t.showBlurBackdropOverlay,callback:function(e){t.showBlurBackdropOverlay=e},expression:"showBlurBackdropOverlay"}},[a("w-button",{attrs:{"bg-color":"primary",lg:"",dark:""},on:{click:function(e){t.showBlurBackdropOverlay=!1}}},[a("w-icon",{staticClass:"mr2"},[t._v("wi-cross")]),t._v("Hide overlay")],1)],1)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("By default the overlay has a "),a("span",{staticClass:"code"},[t._v("0.3")]),t._v(" opacity with a black color and a z-index\nof "),a("span",{staticClass:"code"},[t._v("500")]),t._v("."),a("br"),t._v("\nIt is very easy to overrides these defaults via CSS, but you can also pass them as\nparameters to the "),a("span",{staticClass:"code"},[t._v("w-overlay")]),t._v(".\n")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("The backdrop filter is\n"),a("a",{attrs:{href:"https://caniuse.com/css-backdrop-filter",target:"_blank"}},[t._v("not supported on all the browsers")]),t._v("\nyet but very nice.")])}],s={data:function(){return{showOverlay:!1,showBlueOverlay:!1,showBlurBackdropOverlay:!1,opacity:.3,persistent:!1,persistentNoAnimation:!1}}},n=s,i=(a("607f"),a("2877")),l=Object(i["a"])(n,r,o,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=overlay-examples-vue.7e81d7e8.js.map