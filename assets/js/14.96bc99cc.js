(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{68:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),n("blockquote",[n("p",[t._v("view "),n("router-link",{attrs:{to:"./bark.html"}},[t._v("bark")])],1)]),t._m(15),n("blockquote",[n("p",[t._v("view "),n("router-link",{attrs:{to:"./list.html"}},[t._v("list")])],1)]),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),n("p",[t._v("The event handling process:")]),t._m(24),n("p",[t._v("Each handler can access event object properties:")]),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),n("p",[t._v("see "),n("router-link",{attrs:{to:"01-challenge.html"}},[t._v("Challenge")])],1),t._m(30),n("p",[t._v("see "),n("router-link",{attrs:{to:"02-challenge.html"}},[t._v("Challenge")])],1),t._m(31),n("p",[t._v("see "),n("router-link",{attrs:{to:"03-challenge.html"}},[t._v("Challenge")])],1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"lesson-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lesson-3","aria-hidden":"true"}},[this._v("#")]),this._v(" lesson 3")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"what-we-will-do"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-we-will-do","aria-hidden":"true"}},[this._v("#")]),this._v(" What we will do")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("learn DOM Events")]),s("li",[this._v("learn about eventListeners")]),s("li",[this._v("introduction to objects")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[this._v("#")]),this._v(" Events")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Note: You dont need to know all of these - but you can check them here\n"),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/EventListener",target:"_blank",rel:"noopener noreferrer"}},[this._v("MDN")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("abort, \nbeforeinput, \nblur, \n"),s("span",{attrs:{class:"highlighted-line"}},[this._v("click, ")]),this._v("compositionstart, \ncompositionupdate, \ncompositionend, \ndblclick, \nerror, \nfocus, \nfocusin, \nfocusout, \n"),s("span",{attrs:{class:"highlighted-line"}},[this._v("input, ")]),this._v("keydown, \nkeypress, \nkeyup, \nload, \nmousedown, \nmouseenter, \nmouseleave, \nmousemove, \nmouseout, \nmouseover, \nmouseup, \nresize, \nscroll, \nselect, \nunload, \nwheel\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"event-listeners"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-listeners","aria-hidden":"true"}},[this._v("#")]),this._v(" Event Listeners:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Add Event Listener")]),s("li",[this._v("Remove Event Listener")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("ele"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("evt"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" listener"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[n("code",[t._v("ele")]),t._v(" – The HTML element the event listener will be listening for."),n("br"),n("code",[t._v("evt")]),t._v(" – The targeted event."),n("br"),n("code",[t._v("listener")]),t._v(" – Typically, a JavaScript function."),n("br"),n("code",[t._v("options")]),t._v(" – (optional) An object with a set of boolean properties (listed below).")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"bark-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bark-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Bark Example")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" dog "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createElement")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'button'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndog"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'bark?'")]),t._v("\n\ndog"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'click'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("bark")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// code here")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// append dog to body")]),t._v("\ndocument"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dog"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Extra Reading")]),s("ul",[s("li",[s("a",{attrs:{href:"https://css-tricks.com/use-button-element/",target:"_blank",rel:"noopener noreferrer"}},[this._v("When to use buttons")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"onclick-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onclick-example","aria-hidden":"true"}},[this._v("#")]),this._v(" onclick Example")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" dog "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createElement")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'button'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndog"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'bark?'")]),t._v("\n\ndog"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("bark")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// code here")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"event-delegate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-delegate","aria-hidden":"true"}},[this._v("#")]),this._v(" Event Delegate")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token script language-javascript"}},[t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// Make a list")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ul "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createElement")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'ul'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  document"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ul"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" li1 "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createElement")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'li'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" li2 "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createElement")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'li'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  li1"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'first'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  li2"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'second'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  ul"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("li1"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  ul"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("li2"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("hide")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// e.target refers to the clicked <li> element")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// This is different than e.currentTarget which would refer to the parent <ul> in this context")]),t._v("\n    e"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("visibility "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'hidden'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// Attach the listener to the list")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// It will fire when each <li> is clicked")]),t._v("\n  ul"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'click'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hide"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  ")]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"event-bubbling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-bubbling","aria-hidden":"true"}},[this._v("#")]),this._v(" Event Bubbling")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("It relates to the order in which event handlers are called when one element is nested inside a second element, and both elements have registered a listener for the same event (a click, for example).")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"bubbling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bubbling","aria-hidden":"true"}},[this._v("#")]),this._v(" Bubbling")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("onclick")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("alert("),n("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("form"),n("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(")"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("FORM\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("onclick")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("alert("),n("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("div"),n("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(")"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("DIV\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("onclick")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("alert("),n("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("p"),n("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(")"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("P"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"stop-bubbling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stop-bubbling","aria-hidden":"true"}},[this._v("#")]),this._v(" Stop Bubbling")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("onclick")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("alert(`the bubbling doesn"),n("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("t reach here`)"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("onclick")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("event.stopPropagation()"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Click me"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"events-summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events-summary","aria-hidden":"true"}},[this._v("#")]),this._v(" Events Summary")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("When an event happens – the most nested element where it happens gets labeled as the “target element” (event.target).")]),s("li",[this._v("Then the event first moves from the document root down the event.target, calling handlers assigned with addEventListener(...., true) on the way.")]),s("li",[this._v("Then the event moves from event.target up to the root, calling handlers assigned using on"),s("code",[this._v("<event>")]),this._v(" and addEventListener without the 3rd argument or with the 3rd argument false.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("event.target")]),this._v(" – the deepest element that originated the event.")]),s("li",[s("code",[this._v("event.currentTarget")]),this._v(" (=this) – the current element that handles the event (the one that has the handler on it)")]),s("li",[s("code",[this._v("event.eventPhase")]),this._v(" – the current phase (capturing=1, bubbling=3).")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"dom-selection-after-load"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom-selection-after-load","aria-hidden":"true"}},[this._v("#")]),this._v(" DOM Selection (after load)")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("document"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selector"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// get an element")]),t._v("\n\ndocument"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'button'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),n("span",{attrs:{class:"token comment"}},[t._v("// find an element with tagName button")]),t._v("\ndocument"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'.className'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// find an element with class className")]),t._v("\ndocument"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'#idName'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),n("span",{attrs:{class:"token comment"}},[t._v("// find an element with id idName")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"assignments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assignments","aria-hidden":"true"}},[this._v("#")]),this._v(" Assignments")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"challenge-1-change-background-color"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#challenge-1-change-background-color","aria-hidden":"true"}},[this._v("#")]),this._v(" Challenge 1: Change Background Color")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"challenge-2-image-carousel-optional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#challenge-2-image-carousel-optional","aria-hidden":"true"}},[this._v("#")]),this._v(" Challenge 2: Image Carousel (Optional)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"challenge-3-number-pad-optional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#challenge-3-number-pad-optional","aria-hidden":"true"}},[this._v("#")]),this._v(" Challenge 3: Number Pad (Optional)")])}],!1,null,null,null);s.default=e.exports}}]);