(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["badge-index-vue","badge-api-vue","badge-examples-vue"],{"0f68":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("title-link",{attrs:{h2:""}},[t._v("Default")]),i("p",[t._v("The default badge background color is primary.")]),i("example",{attrs:{"content-class":"mt2"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-badge>\n  <template #badge>3</template>\n  <w-button color="primary">\n    <w-icon class="mr1">mdi mdi-email</w-icon>\n    Emails\n  </w-button>\n</w-badge>\n')]},proxy:!0}])},[i("w-badge",{scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-button",{staticClass:"primary",attrs:{text:""}},[i("w-icon",{staticClass:"mr1"},[t._v("mdi mdi-email")]),t._v("Emails")],1)],1)],1),i("title-link",{attrs:{h2:""}},[t._v("V-model")]),i("p",[t._v("The badge appears if one of these conditions is fulfilled:")]),t._m(0),i("example",{attrs:{"content-class":"mt1"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-flex(align-center)\n  w-button(@click="showBadge--" icon="wi-minus" bg-color="success" sm)\n\n  w-badge.mx6(v-model="showBadge" bg-color="error" overlap)\n    w-icon(color="grey-light1" size="2.4em") mdi mdi-email\n\n  w-button(@click="showBadge++" icon="wi-plus" bg-color="success" sm)')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  showBadge: 0\n})\n")]},proxy:!0}])},[i("w-flex",{attrs:{"align-center":""}},[i("w-button",{attrs:{icon:"wi-minus","bg-color":"success",sm:""},on:{click:function(e){t.showBadge--}}}),i("w-badge",{staticClass:"mx6",attrs:{"bg-color":"error",overlap:""},model:{value:t.showBadge,callback:function(e){t.showBadge=e},expression:"showBadge"}},[i("w-icon",{attrs:{color:"grey-light1",size:"2.4em"}},[t._v("mdi mdi-email")])],1),i("w-button",{attrs:{icon:"wi-plus","bg-color":"success",sm:""},on:{click:function(e){t.showBadge++}}})],1)],1),i("title-link",{attrs:{h2:""}},[t._v("Positions")]),i("p",[t._v("The default position is top right.")]),i("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('.title4.mb2 Top\nw-badge.ml4.mr10(top left)\n  template(#badge="") 3\n  w-icon.grey-light1(size="2.5em") mdi mdi-email\nw-badge(top right)\n  template(#badge="") 3\n  w-icon.grey-light1(size="2.5em") mdi mdi-email\n\n.title4.mt6.mb2 Bottom\nw-badge.ml4.mr10(bottom left)\n  template(#badge="") 3\n  w-icon.grey-light1(size="2.5em") mdi mdi-email\nw-badge(bottom right)\n  template(#badge="") 3\n  w-icon.grey-light1(size="2.5em") mdi mdi-email\n')]},proxy:!0}])},[i("div",{staticClass:"title4 mb2"},[t._v("Top")]),i("w-badge",{staticClass:"ml4 mr10",attrs:{top:"",left:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[t._v("mdi mdi-email")])],1),i("w-badge",{attrs:{top:"",right:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[t._v("mdi mdi-email")])],1),i("div",{staticClass:"title4 mt6 mb2"},[t._v("Bottom")]),i("w-badge",{staticClass:"ml4 mr10",attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[t._v("mdi mdi-email")])],1),i("w-badge",{attrs:{bottom:"",right:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[t._v("mdi mdi-email")])],1)],1),i("title-link",{attrs:{h2:""}},[t._v("Color and background color")]),t._m(1),i("example",{attrs:{"content-class":"mt1"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-badge.mr10(bg-color="error")\n  template(#badge="") 3\n  w-icon(color="grey-light1" size="2.5em") mdi mdi-email\nw-badge.mr10(color="yellow")\n  template(#badge="") 3\n  w-icon(color="grey-light1" size="2.5em") mdi mdi-email\nw-badge(bg-color="lime-light1" color="green-dark2")\n  template(#badge="") 3\n  w-icon(color="grey-light1" size="2.5em") mdi mdi-email\n')]},proxy:!0}])},[i("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error"},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{attrs:{color:"grey-light1",size:"2.5em"}},[t._v("mdi mdi-email")])],1),i("w-badge",{staticClass:"mr10",attrs:{color:"yellow"},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{attrs:{color:"grey-light1",size:"2.5em"}},[t._v("mdi mdi-email")])],1),i("w-badge",{attrs:{"bg-color":"lime-light1",color:"green-dark2"},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{attrs:{color:"grey-light1",size:"2.5em"}},[t._v("mdi mdi-email")])],1)],1),i("title-link",{attrs:{h2:""}},[t._v("Dot")]),i("example",{attrs:{"content-class":"mt1"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-badge.mr10(dot bg-color="red")\n  w-icon(size="2.5em") mdi mdi-account\nw-badge(dot bottom bg-color="red")\n  w-icon(size="2.5em") mdi mdi-account\n')]},proxy:!0}])},[i("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red"}},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1),i("w-badge",{attrs:{dot:"",bottom:"","bg-color":"red"}},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1)],1),i("title-link",{attrs:{h2:""}},[t._v("Sizes")]),i("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('.title3.mb2 Dots\nw-flex(wrap)\n  w-badge.mr10(dot bg-color="red" xs)\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(dot bg-color="red" sm)\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(dot bg-color="red" md)\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(dot bg-color="red" lg)\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(dot bg-color="red" xl)\n    w-icon(size="2.5em") mdi mdi-account\n\n.title3.mt6.mb2 Text content\nw-flex(wrap)\n  w-badge.mr10(bg-color="error" xs)\n    template(#badge="") busy\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" sm)\n    template(#badge="") busy\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" md)\n    template(#badge="") busy\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" lg)\n    template(#badge="") busy\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" xl)\n    template(#badge="") busy\n    w-icon(size="2.5em") mdi mdi-account\n\n.title3.mt6.mb2 Numeric content\nw-flex(wrap)\n  w-badge.mr10(bg-color="error" xs)\n    template(#badge="") 3\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" sm)\n    template(#badge="") 3\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" md)\n    template(#badge="") 3\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" lg)\n    template(#badge="") 3\n    w-icon(size="2.5em") mdi mdi-account\n  w-badge.mr10(bg-color="error" xl)\n    template(#badge="") 3\n    w-icon(size="2.5em") mdi mdi-account\n')]},proxy:!0}])},[i("div",{staticClass:"title3 mb2"},[t._v("Dots")]),i("w-flex",{attrs:{wrap:""}},[i("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",xs:""}},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1),i("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",sm:""}},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1),i("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",md:""}},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1),i("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",lg:""}},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1),i("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",xl:""}},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1)],1),i("div",{staticClass:"title3 mt6 mb2"},[t._v("Text content")]),i("w-flex",{attrs:{wrap:""}},[i("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",xs:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("busy")]},proxy:!0}])},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1),i("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",sm:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("busy")]},proxy:!0}])},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1),i("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",md:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("busy")]},proxy:!0}])},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1),i("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",lg:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("busy")]},proxy:!0}])},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1),i("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",xl:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("busy")]},proxy:!0}])},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1)],1),i("div",{staticClass:"title3 mt6 mb2"},[t._v("Numeric content")]),i("w-flex",{attrs:{wrap:""}},[i("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",xs:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1),i("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",sm:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1),i("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",md:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1),i("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",lg:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1),i("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",xl:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1)],1)],1),i("title-link",{attrs:{h2:""}},[t._v("Overlap")]),i("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('.title4.mb3 Top\n.w-flex.wrap.align-center\n  w-badge.ml4.mr10(top left)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n\n  w-badge(top right)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n\n  w-icon.mx12.grey-light3(size="2.5em") mdi mdi-arrow-right\n\n  w-badge.mr10(top left overlap)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n\n  w-badge(top right overlap)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n\n.title4.mt8.mb3 Bottom\n.w-flex.wrap.align-center\n  w-badge.ml4.mr10(bottom left)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n\n  w-badge0(bottom right)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n\n  w-icon.mx12.grey-light3(size="2.5em") mdi mdi-arrow-right\n\n  w-badge.mr10(bottom left overlap)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n\n  w-badge(bottom right overlap)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n')]},proxy:!0}])},[i("div",{staticClass:"title4 mb3"},[t._v("Top")]),i("div",{staticClass:"w-flex wrap align-center"},[i("w-badge",{staticClass:"ml4 mr10",attrs:{top:"",left:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[t._v("mdi mdi-email")])],1),i("w-badge",{attrs:{top:"",right:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[t._v("mdi mdi-email")])],1),i("w-icon",{staticClass:"mx12 grey-light3",attrs:{size:"2.5em"}},[t._v("mdi mdi-arrow-right")]),i("w-badge",{staticClass:"mr10",attrs:{top:"",left:"",overlap:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[t._v("mdi mdi-email")])],1),i("w-badge",{attrs:{top:"",right:"",overlap:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[t._v("mdi mdi-email")])],1)],1),i("div",{staticClass:"title4 mt8 mb3"},[t._v("Bottom")]),i("div",{staticClass:"w-flex wrap align-center"},[i("w-badge",{staticClass:"ml4 mr10",attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[t._v("mdi mdi-email")])],1),i("w-badge",{attrs:{bottom:"",right:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[t._v("mdi mdi-email")])],1),i("w-icon",{staticClass:"mx12 grey-light3",attrs:{size:"2.5em"}},[t._v("mdi mdi-arrow-right")]),i("w-badge",{staticClass:"mr10",attrs:{bottom:"",left:"",overlap:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[t._v("mdi mdi-email")])],1),i("w-badge",{attrs:{bottom:"",right:"",overlap:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[t._v("mdi mdi-email")])],1)],1)]),i("div",{staticClass:"title3 mt8 mb3"},[t._v("Overlaps with different sizes")]),i("example",{attrs:{"content-class":"mt1"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-flex(wrap align-center)\n  w-badge.mr10(overlap xs)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n  w-badge.mr10(overlap sm)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n  w-badge.mr10(overlap md)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n  w-badge.mr10(overlap lg)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n  w-badge(overlap xl)\n    template(#badge="") 3\n    w-icon.grey-light1(size="2.5em") mdi mdi-email\n')]},proxy:!0}])},[i("w-flex",{attrs:{wrap:"","align-center":""}},[i("w-badge",{staticClass:"mr10",attrs:{overlap:"",xs:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[t._v("mdi mdi-email")])],1),i("w-badge",{staticClass:"mr10",attrs:{overlap:"",sm:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[t._v("mdi mdi-email")])],1),i("w-badge",{staticClass:"mr10",attrs:{overlap:"",md:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[t._v("mdi mdi-email")])],1),i("w-badge",{staticClass:"mr10",attrs:{overlap:"",lg:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[t._v("mdi mdi-email")])],1),i("w-badge",{attrs:{overlap:"",xl:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("3")]},proxy:!0}])},[i("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[t._v("mdi mdi-email")])],1)],1)],1),i("title-link",{attrs:{h2:""}},[t._v("Force round badge")]),t._m(2),i("example",{attrs:{"content-class":"mt1"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-badge(bg-color="error")\n  template(#badge="")\n    span.size--sm 11\n  w-icon(size="2.5em") mdi mdi-account\n\nw-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right\n\nw-badge(bg-color="error" round)\n  template(#badge="")\n    span.size--sm 11\n  w-icon(size="2.5em") mdi mdi-account\n')]},proxy:!0}])},[i("w-badge",{attrs:{"bg-color":"error"},scopedSlots:t._u([{key:"badge",fn:function(){return[i("span",{staticClass:"size--sm"},[t._v("11")])]},proxy:!0}])},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1),i("w-icon",{staticClass:"ml12 mr6 grey-light3",attrs:{size:"2.5em"}},[t._v("mdi mdi-arrow-right")]),i("w-badge",{attrs:{"bg-color":"error",round:""},scopedSlots:t._u([{key:"badge",fn:function(){return[i("span",{staticClass:"size--sm"},[t._v("11")])]},proxy:!0}])},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1)],1),i("title-link",{attrs:{h2:""}},[t._v("Icons")]),i("example",{attrs:{"content-class":"mt2"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-badge.mr10(bg-color="success" overlap round)\n  template(#badge="")\n    w-icon mdi mdi-check\n  w-icon(size="2.5em") mdi mdi-account\n\nw-badge.mr10(bg-color="error" overlap round)\n  template(#badge="")\n    w-icon mdi mdi-close\n  w-icon(size="2.5em") mdi mdi-account\n\nw-badge(bg-color="transparent" overlap round)\n  template(#badge="")\n    w-icon(color="pink-light1" md) mdi mdi-heart\n  w-icon(size="2.5em") mdi mdi-account\n')]},proxy:!0}])},[i("w-badge",{staticClass:"mr10",attrs:{"bg-color":"success",overlap:"",round:""},scopedSlots:t._u([{key:"badge",fn:function(){return[i("w-icon",[t._v("mdi mdi-check")])]},proxy:!0}])},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1),i("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",overlap:"",round:""},scopedSlots:t._u([{key:"badge",fn:function(){return[i("w-icon",[t._v("mdi mdi-close")])]},proxy:!0}])},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1),i("w-badge",{attrs:{"bg-color":"transparent",overlap:"",round:""},scopedSlots:t._u([{key:"badge",fn:function(){return[i("w-icon",{attrs:{color:"pink-light1",md:""}},[t._v("mdi mdi-heart")])]},proxy:!0}])},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1)],1),i("title-link",{attrs:{h2:""}},[t._v("Override badge padding")]),i("example",{attrs:{"content-class":"w-flex wrap align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-badge(bg-color="error" badge-class="px1")\n  template(#badge="") busy\n  w-icon(size="2.5em") mdi mdi-account\n\nw-icon.ml12.mr6.grey-light3(size="2.5em") mdi mdi-arrow-right\n\nw-badge(bg-color="error" badge-class="px4")\n  template(#badge="") busy\n  w-icon(size="2.5em") mdi mdi-account\n')]},proxy:!0}])},[i("w-badge",{attrs:{"bg-color":"error","badge-class":"px1"},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("busy")]},proxy:!0}])},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1),i("w-icon",{staticClass:"ml12 mr6 grey-light3",attrs:{size:"2.5em"}},[t._v("mdi mdi-arrow-right")]),i("w-badge",{attrs:{"bg-color":"error","badge-class":"px4"},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("busy")]},proxy:!0}])},[i("w-icon",{attrs:{size:"2.5em"}},[t._v("mdi mdi-account")])],1)],1),i("title-link",{attrs:{h2:""}},[t._v("Transitions")]),t._m(3),i("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('.w-flex.align-center.wrap\n  w-flex(column no-grow align-end)\n    span.mb2 Toggle with this transition effect:\n    w-button.code.ma1(@click="transition = \'fade\';showBadge = !showBadge" bg-color="primary" xs) fade\n    w-button.code.ma1(@click="transition = \'bounce\';showBadge = !showBadge" bg-color="primary" xs) bounce\n    w-button.code.ma1(@click="transition = \'twist\';showBadge = !showBadge" bg-color="primary" xs) twist\n    w-button.code.ma1(@click="transition = \'scale\';showBadge = !showBadge" bg-color="primary" xs) scale\n    w-button.code.ma1(@click="transition = \'scale-fade\';showBadge = !showBadge" bg-color="primary" xs) scale-fade\n    w-button.code.ma1(@click="transition = \'slide-fade-left\';showBadge = !showBadge" bg-color="primary" xs) slide-fade-left\n    w-button.code.ma1(@click="transition = \'slide-fade-right\';showBadge = !showBadge" bg-color="primary" xs) slide-fade-right\n    w-button.code.ma1(@click="transition = \'slide-fade-up\';showBadge = !showBadge" bg-color="primary" xs) slide-fade-up\n    w-button.code.ma1(@click="transition = \'slide-fade-down\';showBadge = !showBadge" bg-color="primary" xs) slide-fade-down\n\n  .w-flex.grow\n    .xs2\n    .xs10\n      w-badge.ma4(v-model="showBadge" :transition="transition" bg-color="error" overlap round)\n        template(#badge="") 5\n        w-icon(color="grey-light1" size="2.5em") mdi mdi-email')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  showBadge: false,\n  transition: 'fade'\n})")]},proxy:!0}])},[i("div",{staticClass:"w-flex align-center wrap"},[i("w-flex",{attrs:{column:"","no-grow":"","align-end":""}},[i("span",{staticClass:"mb2"},[t._v("Toggle with this transition effect:")]),i("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(e){t.transition="fade",t.showBadge2=!t.showBadge2}}},[t._v("fade")]),i("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(e){t.transition="bounce",t.showBadge2=!t.showBadge2}}},[t._v("bounce")]),i("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(e){t.transition="twist",t.showBadge2=!t.showBadge2}}},[t._v("twist")]),i("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(e){t.transition="scale",t.showBadge2=!t.showBadge2}}},[t._v("scale")]),i("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(e){t.transition="scale-fade",t.showBadge2=!t.showBadge2}}},[t._v("scale-fade")]),i("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(e){t.transition="slide-fade-left",t.showBadge2=!t.showBadge2}}},[t._v("slide-fade-left")]),i("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(e){t.transition="slide-fade-right",t.showBadge2=!t.showBadge2}}},[t._v("slide-fade-right")]),i("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(e){t.transition="slide-fade-up",t.showBadge2=!t.showBadge2}}},[t._v("slide-fade-up")]),i("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(e){t.transition="slide-fade-down",t.showBadge2=!t.showBadge2}}},[t._v("slide-fade-down")])],1),i("div",{staticClass:"w-flex grow"},[i("div",{staticClass:"xs2"}),i("div",{staticClass:"xs10"},[i("w-badge",{staticClass:"ma4",attrs:{transition:t.transition,"bg-color":"error",overlap:"",round:""},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("5")]},proxy:!0}]),model:{value:t.showBadge2,callback:function(e){t.showBadge2=e},expression:"showBadge2"}},[i("w-icon",{attrs:{color:"grey-light1",size:"2.5em"}},[t._v("mdi mdi-email")])],1)],1)])],1)])],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("No v-model or value is provided but a badge slot is.")]),i("li",[t._v("A v-model or a value is given and is not "),i("code",[t._v("null")]),t._v(", "),i("code",[t._v("false")]),t._v(" or "),i("code",[t._v("0")]),t._v("."),i("br"),t._v("\nIf you want to show one of these values, you can cast it to a string and it will show up.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("Like in most components, you can set a "),i("code",[t._v("color")]),t._v(" for the text and a "),i("code",[t._v("bg-color")]),t._v(" for the\nbackground.")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("For instance, if you increase the font size of the badge like in this example, the natural behavior\nof the badge is to increase its width to adapt to its content."),i("br"),t._v("\nWith the option "),i("code",[t._v("round")]),t._v(" you can force it to be round.")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("The default transition is "),i("code",[t._v("fade")]),t._v(".")])}],s={data:function(){return{showBadge:0,showBadge2:!1,transition:"fade"}}},r=s,n=i("2877"),c=Object(n["a"])(r,o,a,!1,null,null,null);e["default"]=c.exports},"6f23":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"w-divider my12"}),i("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),i("alert",{staticClass:"mb6",attrs:{info:""}},[t._v("The props will soon be more detailed.")]),i("api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),i("api",{attrs:{items:t.slots,title:"Slots"}}),i("api",{attrs:{items:t.events,title:"Events"}})],1)},a=[],s=(i("13d5"),i("4b3a")),r={value:"",xs:"",sm:"",md:"",lg:"",xl:"",top:"",left:"",right:"",bottom:"",overlap:"",inline:"",color:"",size:"",bgColor:"",dark:"",badgeClass:"",outline:"",shadow:"",dot:"",round:"",transition:""},n={default:{description:"The element receiving the badge. Can be any visible DOM element or mounted component."},badge:{description:"The badge content."}},c={},l={data:function(){return{propsDescs:r,slots:n}},computed:{props:function(){return s["a"].props},events:function(){return s["a"].emits.reduce((function(t,e){return(t[e]={description:c[e]||""})&&t}),{})}}},d=l,m=i("2877"),g=Object(m["a"])(d,o,a,!1,null,null,null);e["default"]=g.exports},dee5:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ui-component-title",[t._v("w-badge")]),i("examples"),i("api")],1)},a=[],s=i("0f68"),r=i("6f23"),n={components:{Examples:s["default"],Api:r["default"]}},c=n,l=i("2877"),d=Object(l["a"])(c,o,a,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=badge-index-vue.52617350.js.map