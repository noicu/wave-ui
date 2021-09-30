import{n as t}from"./index.86295991.js";import"./vendor.852d958a.js";const e={};var s=t({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("title-link",{staticClass:"mt4",attrs:{h1:""}},[t._v("Breakpoints")]),s("title-link",{attrs:{h2:""}},[t._v("What is this for?")]),t._m(0),s("ul",[s("li",[t._v("Access the current breakpoint in JavaScript")]),s("li",[t._v("Use responsive grids with breakpoint-specific classes. Read more in"),s("router-link",{staticClass:"ml1",attrs:{to:"/layout--grid-system"}},[t._v("Layout > Grid system")]),t._v(".")],1),s("li",[t._v("Use breakpoint-specific layout classes like "),s("code",[t._v("sm-hide")]),t._v(" or "),s("code",[t._v("lgu-text-center")]),t._v(" and many other."),s("br"),t._v("\nAll the layout classes presented in: "),s("router-link",{staticClass:"ml1",attrs:{to:"/layout--flex"}},[t._v("Layout > Flex")])],1)]),s("title-link",{attrs:{h2:""}},[t._v("Default breakpoints")]),s("p",{staticClass:"mt6"},[t._v("By default, 5 breakpoints are set:")]),t._m(1),s("title-link",{attrs:{h2:"",slug:"the-wave-ui-breakpoint-object"}},[t._v("The "),s("code",[t._v("$waveui.breakpoint")]),t._v(" object")]),t._m(2),t._m(3),s("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-card class="blue-light5--bg">\n  <div class="title2 mt0">\n    Current breakpoint:\n    <code>'+t._s("{{ $waveui.breakpoint.name }}")+'</code>\n  </div>\n  <em class="grey mt1">\n    Resizing your browser will update the current breakpoint.\n  </em>\n</w-card>\n')]},proxy:!0}])},[s("w-card",{staticClass:"blue-light5--bg"},[s("div",{staticClass:"title2 mt0"},[t._v("Current breakpoint: "),s("code",[t._v(t._s(t.$waveui.breakpoint.name))])]),s("em",{staticClass:"grey mt1"},[t._v("Resizing your browser will update the current breakpoint.")])])],1),s("title-link",{attrs:{h2:""}},[t._v("breakpoint-specific layout classes")]),s("p",[t._v("All the following CSS classes can be used complementarily on the same DOM node for different breakpoints.")]),s("ssh-pre",{attrs:{language:"css"}},[t._v(".show {display: block;}\n.hide {display: none;}\n\n.d-flex {display: flex;}\n.d-iflex {display: inline-flex;}\n.d-block {display: block;}\n.d-iblock {display: inline-block;}\n\n.text-left {text-align: left;}\n.text-center {text-align: center;}\n.text-right {text-align: right;}\n\n.row {flex-direction: row;}\n.column {flex-direction: column;}\n.grow {flex-grow: 1;flex-basis: auto;}\n.no-grow {flex-grow: 0;}\n.shrink {flex-shrink: 1;margin-left: auto;margin-right: auto;}\n.no-shrink {flex-shrink: 0;}\n.fill-width {width: 100%;}\n.fill-height {height: 100%;}\n.basis-zero {flex-basis: 0;}\n\n.align-start {align-items: flex-start;}\n.align-center {align-items: center;}\n.align-end {align-items: flex-end;}\n.align-self-start {align-self: flex-start;}\n.align-self-center {align-self: center;}\n.align-self-end {align-self: flex-end;}\n.align-self-stretch {align-self: stretch;}\n.justify-start {justify-content: flex-start;}\n.justify-center {justify-content: center;}\n.justify-end {justify-content: flex-end;}\n.justify-space-between {justify-content: space-between;}\n.justify-space-around {justify-content: space-around;}\n.justify-space-evenly {justify-content: space-evenly;}\n")]),t._m(4),t._m(5),s("alert",{attrs:{info:""}},[t._v("Note that "),s("code",[t._v(".xsd-[class]")]),t._v(" and "),s("code",[t._v(".xlu-[class]")]),t._v(" don't exist since they are the same as "),s("code",[t._v(".xs-[class]")]),t._v(" and "),s("code",[t._v(".xl-[class]")]),t._v(".")]),t._m(6),s("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<div class="text-left smd-text-center">Some text on the left.</div>\n<div class="text-center smd-hide">Some text in the center.</div>\n<div class="text-right smd-text-center">Some text on the right.</div>')]},proxy:!0}])},[s("div",{staticClass:"text-left smd-text-center"},[t._v("Some text on the left.")]),s("div",{staticClass:"text-center smd-hide"},[t._v("Some text in the center.")]),s("div",{staticClass:"text-right smd-text-center"},[t._v("Some text on the right.")])]),s("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<div class="w-flex justify-space-between smd-column">\n  <span>Some text on the left.</span>\n  <span>Some text in the center.</span>\n  <span>Some text on the right.</span>\n</div>\n')]},proxy:!0}])},[s("div",{staticClass:"w-flex justify-space-between smd-column"},[s("span",[t._v("Some text on the left.")]),s("span",[t._v("Some text in the center.")]),s("span",[t._v("Some text on the right.")])])]),s("alert",{attrs:{tip:""}},[t._v("If you'd rather not have these CSS layout classes, you can disable them via the\n"),s("code",[t._v("breakpointLayoutClasses")]),t._v(" config."),s("ssh-pre",{staticClass:"mb0",attrs:{language:"js"}},[t._v("const waveui = new WaveUI({\n  css: {\n    breakpointLayoutClasses: false\n  }\n})\n")])],1),s("title-link",{attrs:{h2:""}},[t._v("Setting custom breakpoints")]),s("p",{staticClass:"mt4"},[t._v("You can override the default breakpoints values with:")]),s("ssh-pre",{attrs:{language:"js"}},[t._v("const waveui = new WaveUI({\n  breakpoints: {\n    xs: 600,\n    sm: 900,\n    md: 1200,\n    lg: 1700\n    // Xl doesn't need to be overridden:\n    // it always starts from lg & goes to infinity.\n  }\n})")])],1)}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("If you are not familiar with breakpoints, you should first read about it."),s("br"),t._v("\nThe breakpoints are usaully useful when you want to change the layout for a particular viewport width."),s("br"),t._v("\nIn Wave UI, you can use them in different ways:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",{staticClass:"mb1"},[s("code",{staticClass:"mr2"},[t._v("xs")]),s("span",[t._v("from 0 to 600px")])]),s("li",{staticClass:"mb1"},[s("code",{staticClass:"mr2"},[t._v("sm")]),s("span",[t._v("from 601px to 900px")])]),s("li",{staticClass:"mb1"},[s("code",{staticClass:"mr2"},[t._v("md")]),s("span",[t._v("from 901px to 1200px")])]),s("li",{staticClass:"mb1"},[s("code",{staticClass:"mr2"},[t._v("lg")]),s("span",[t._v("from 1201px to 1700px")])]),s("li",{staticClass:"mb1"},[s("code",{staticClass:"mr2"},[t._v("xl")]),s("span",[t._v("from 1701px and more")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"mt4"},[t._v("You can access the current breakpoint from anywhere using\n"),s("code",[t._v("this.$waveui.breakpoint.name")]),t._v(", or one of these quick booleans from\nthe same "),s("code",[t._v("this.$waveui.breakpoint")]),t._v(" object:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",{staticClass:"mb1"},[s("code",[t._v("xs")])]),s("li",{staticClass:"mb1"},[s("code",[t._v("sm")])]),s("li",{staticClass:"mb1"},[s("code",[t._v("md")])]),s("li",{staticClass:"mb1"},[s("code",[t._v("lg")])]),s("li",{staticClass:"mb1"},[s("code",[t._v("xl")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"mt6"},[t._v("To use them on a particular breakpoint, the syntax is: "),s("code",[t._v(".[breakpoint][extend]-[class]")]),t._v(", with:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("strong",{staticClass:"code"},[t._v("[breakpoint]")]),t._v(" one of: "),s("code",[t._v("xs")]),t._v(", "),s("code",[t._v("sm")]),t._v(", "),s("code",[t._v("md")]),t._v(", "),s("code",[t._v("lg")]),t._v(", "),s("code",[t._v("xl")]),t._v(".")]),s("li",[s("strong",{staticClass:"code"},[t._v("[extend]")]),t._v(" one of "),s("code",[t._v("u")]),t._v(" (and up), "),s("code",[t._v("d")]),t._v(" (and down) and\n"),s("strong",[t._v("no character")]),t._v(" to target only this breakpoint.")]),s("li",[s("strong",{staticClass:"code"},[t._v("[class]")]),t._v(" one of the above CSS class name.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"mt6"},[t._v("In these two examples, resize your browser to less than 900px (default "),s("code",[t._v("md")]),t._v(") to see see the\nlayout changed.")])}],!1,n,null,null,null);function n(t){for(let s in e)this[s]=e[s]}var a=function(){return s.exports}();export default a;