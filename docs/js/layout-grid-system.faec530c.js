(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["layout-grid-system"],{"1a17":function(i,a,s){"use strict";s.r(a);var t=function(){var i=this,a=i.$createElement,s=i._self._c||a;return s("div",[s("title-link",{staticClass:"mt4",attrs:{h1:""}},[i._v("Grid system")]),i._m(0),s("title-link",{attrs:{h2:""}},[i._v("Basic grid")]),i._m(1),s("example",{scopedSlots:i._u([{key:"html",fn:function(){return[i._v('<w-flex wrap class="text-center">\n  <div class="xs12 pa1">\n    <div class="primary-dark1--bg py3">xs12</div>\n  </div>\n\n  <div class="xs6 pa1">\n    <div class="primary--bg py3">xs6</div>\n  </div>\n  <div class="xs6 pa1">\n    <div class="primary--bg py3">xs6</div>\n  </div>\n\n  <div v-for="i in 3" :key="`a${i}`" class="xs4 pa1">\n    <div class="primary-light1--bg white py3">xs4</div>\n  </div>\n\n  <div v-for="i in 4" :key="`b${i}`" class="xs3 pa1">\n    <div class="primary-light2--bg white py3">xs3</div>\n  </div>\n\n  <div v-for="i in 6" :key="`c${i}`" class="xs2 pa1">\n    <div class="primary-light3--bg py3">xs2</div>\n  </div>\n\n  <div v-for="i in 12" :key="`d${i}`" class="xs1 pa1">\n    <div class="blue-light4--bg pa3">xs1</div>\n  </div>\n</w-flex>\n')]},proxy:!0}])},[s("w-flex",{staticClass:"text-center",attrs:{wrap:""}},[s("div",{staticClass:"xs12 pa1"},[s("div",{staticClass:"primary-dark1--bg py3"},[i._v("xs12")])]),s("div",{staticClass:"xs6 pa1"},[s("div",{staticClass:"primary--bg py3"},[i._v("xs6")])]),s("div",{staticClass:"xs6 pa1"},[s("div",{staticClass:"primary--bg py3"},[i._v("xs6")])]),i._l(3,(function(a){return s("div",{key:"a"+a,staticClass:"xs4 pa1"},[s("div",{staticClass:"primary-light1--bg white py3"},[i._v("xs4")])])})),i._l(4,(function(a){return s("div",{key:"b"+a,staticClass:"xs3 pa1"},[s("div",{staticClass:"primary-light2--bg white py3"},[i._v("xs3")])])})),i._l(6,(function(a){return s("div",{key:"c"+a,staticClass:"xs2 pa1"},[s("div",{staticClass:"primary-light3--bg py3"},[i._v("xs2")])])})),i._l(12,(function(a){return s("div",{key:"d"+a,staticClass:"xs1 pa1"},[s("div",{staticClass:"blue-light4--bg pa3"},[i._v("xs1")])])}))],2)],1),s("example",{staticClass:"mt8",scopedSlots:i._u([{key:"html",fn:function(){return[i._v('<w-flex wrap class="text-center">\n  <div class="xs1 pa1">\n    <div class="primary-dark1--bg py3">xs1</div>\n  </div>\n  <div class="xs11 pa1">\n    <div class="primary-dark1--bg py3">xs11</div>\n  </div>\n\n  <div class="xs2 pa1">\n    <div class="primary--bg py3">xs2</div>\n  </div>\n  <div class="xs10 pa1">\n    <div class="primary--bg py3">xs10</div>\n  </div>\n\n  <div class="xs3 pa1">\n    <div class="primary-light1--bg white py3">xs3</div>\n  </div>\n  <div class="xs9 pa1">\n    <div class="primary-light1--bg white py3">xs9</div>\n  </div>\n\n  <div class="xs4 pa1">\n    <div class="primary-light2--bg white py3">xs4</div>\n  </div>\n  <div class="xs8 pa1">\n    <div class="primary-light2--bg white py3">xs8</div>\n  </div>\n\n  <div class="xs5 pa1">\n    <div class="primary-light3--bg py3">xs5</div>\n  </div>\n  <div class="xs7 pa1">\n    <div class="primary-light3--bg py3">xs7</div>\n  </div>\n</w-flex>\n')]},proxy:!0}])},[s("w-flex",{staticClass:"text-center",attrs:{wrap:""}},[s("div",{staticClass:"xs1 pa1"},[s("div",{staticClass:"primary-dark1--bg py3"},[i._v("xs1")])]),s("div",{staticClass:"xs11 pa1"},[s("div",{staticClass:"primary-dark1--bg py3"},[i._v("xs11")])]),s("div",{staticClass:"xs2 pa1"},[s("div",{staticClass:"primary--bg py3"},[i._v("xs2")])]),s("div",{staticClass:"xs10 pa1"},[s("div",{staticClass:"primary--bg py3"},[i._v("xs10")])]),s("div",{staticClass:"xs3 pa1"},[s("div",{staticClass:"primary-light1--bg white py3"},[i._v("xs3")])]),s("div",{staticClass:"xs9 pa1"},[s("div",{staticClass:"primary-light1--bg white py3"},[i._v("xs9")])]),s("div",{staticClass:"xs4 pa1"},[s("div",{staticClass:"primary-light2--bg white py3"},[i._v("xs4")])]),s("div",{staticClass:"xs8 pa1"},[s("div",{staticClass:"primary-light2--bg white py3"},[i._v("xs8")])]),s("div",{staticClass:"xs5 pa1"},[s("div",{staticClass:"primary-light3--bg py3"},[i._v("xs5")])]),s("div",{staticClass:"xs7 pa1"},[s("div",{staticClass:"primary-light3--bg py3"},[i._v("xs7")])])])],1),s("title-link",{attrs:{h2:""}},[i._v("Operating with breakpoints")]),s("p",[i._v("For this example, resize your browser and observe the different layout when crossing a breakpoint.")]),s("example",{scopedSlots:i._u([{key:"html",fn:function(){return[i._v('<w-flex wrap class="text-center">\n  <div class="xs12 md6 lg4 xl2 pa1">\n    <div class="primary-light3--bg py3">\n      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>\n      <template v-else-if="$waveui.breakpoint.md">md6</template>\n      <template v-else-if="$waveui.breakpoint.lg">lg4</template>\n      <template v-else-if="$waveui.breakpoint.xl">xl2</template>\n    </div>\n  </div>\n  <div class="xs12 md6 lg4 xl2 pa1">\n    <div class="primary-light3--bg py3">\n      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>\n      <template v-else-if="$waveui.breakpoint.md">md6</template>\n      <template v-else-if="$waveui.breakpoint.lg">lg4</template>\n      <template v-else-if="$waveui.breakpoint.xl">xl2</template>\n    </div>\n  </div>\n  <div class="xs12 md6 lg4 xl2 pa1">\n    <div class="primary-light3--bg py3">\n      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>\n      <template v-else-if="$waveui.breakpoint.md">md6</template>\n      <template v-else-if="$waveui.breakpoint.lg">lg4</template>\n      <template v-else-if="$waveui.breakpoint.xl">xl2</template>\n    </div>\n  </div>\n  <div class="xs12 md6 lg4 xl2 pa1">\n    <div class="primary-light3--bg py3">\n      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>\n      <template v-else-if="$waveui.breakpoint.md">md6</template>\n      <template v-else-if="$waveui.breakpoint.lg">lg4</template>\n      <template v-else-if="$waveui.breakpoint.xl">xl2</template>\n    </div>\n  </div>\n  <div class="xs12 md6 lg4 xl2 pa1">\n    <div class="primary-light3--bg py3">\n      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>\n      <template v-else-if="$waveui.breakpoint.md">md6</template>\n      <template v-else-if="$waveui.breakpoint.lg">lg4</template>\n      <template v-else-if="$waveui.breakpoint.xl">xl2</template>\n    </div>\n  </div>\n  <div class="xs12 md6 lg4 xl2 pa1">\n    <div class="primary-light3--bg py3">\n      <template v-if="$waveui.breakpoint.xs || $waveui.breakpoint.sm">xs12</template>\n      <template v-else-if="$waveui.breakpoint.md">md6</template>\n      <template v-else-if="$waveui.breakpoint.lg">lg4</template>\n      <template v-else-if="$waveui.breakpoint.xl">xl2</template>\n    </div>\n  </div>\n</w-flex>')]},proxy:!0}])},[s("w-flex",{staticClass:"text-center",attrs:{wrap:""}},[s("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[s("div",{staticClass:"primary-light3--bg py3"},[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?[i._v("xs12")]:i.$waveui.breakpoint.md?[i._v("md6")]:i.$waveui.breakpoint.lg?[i._v("lg4")]:i.$waveui.breakpoint.xl?[i._v("xl2")]:i._e()],2)]),s("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[s("div",{staticClass:"primary-light3--bg py3"},[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?[i._v("xs12")]:i.$waveui.breakpoint.md?[i._v("md6")]:i.$waveui.breakpoint.lg?[i._v("lg4")]:i.$waveui.breakpoint.xl?[i._v("xl2")]:i._e()],2)]),s("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[s("div",{staticClass:"primary-light3--bg py3"},[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?[i._v("xs12")]:i.$waveui.breakpoint.md?[i._v("md6")]:i.$waveui.breakpoint.lg?[i._v("lg4")]:i.$waveui.breakpoint.xl?[i._v("xl2")]:i._e()],2)]),s("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[s("div",{staticClass:"primary-light3--bg py3"},[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?[i._v("xs12")]:i.$waveui.breakpoint.md?[i._v("md6")]:i.$waveui.breakpoint.lg?[i._v("lg4")]:i.$waveui.breakpoint.xl?[i._v("xl2")]:i._e()],2)]),s("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[s("div",{staticClass:"primary-light3--bg py3"},[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?[i._v("xs12")]:i.$waveui.breakpoint.md?[i._v("md6")]:i.$waveui.breakpoint.lg?[i._v("lg4")]:i.$waveui.breakpoint.xl?[i._v("xl2")]:i._e()],2)]),s("div",{staticClass:"xs12 md6 lg4 xl2 pa1"},[s("div",{staticClass:"primary-light3--bg py3"},[i.$waveui.breakpoint.xs||i.$waveui.breakpoint.sm?[i._v("xs12")]:i.$waveui.breakpoint.md?[i._v("md6")]:i.$waveui.breakpoint.lg?[i._v("lg4")]:i.$waveui.breakpoint.xl?[i._v("xl2")]:i._e()],2)])])],1)],1)},e=[function(){var i=this,a=i.$createElement,s=i._self._c||a;return s("p",[i._v("The grid system is 12-cell based. Its purpose is to divide the available width (in percentage)\nof a container in 12 cells to easily let you create the design that you want."),s("br"),i._v("\nYou can then assign this created layout to a particular breakpoint.\n")])},function(){var i=this,a=i.$createElement,s=i._self._c||a;return s("p",[i._v("Let's start with a basic example. The following splitting is applied on the "),s("span",{staticClass:"code"},[i._v("xs")]),i._v("\nbreakpoint and will thus be applied on all the breakpoints.\n")])}],l=s("2877"),v={},p=Object(l["a"])(v,t,e,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=layout-grid-system.faec530c.js.map