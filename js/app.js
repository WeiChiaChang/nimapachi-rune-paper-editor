!function(t){function e(e){for(var a,o,c=e[0],s=e[1],l=e[2],h=0,d=[];h<c.length;h++)o=c[h],i[o]&&d.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);for(u&&u(e);d.length;)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={0:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;r.push([508,1]),n()}({508:function(t,e,n){"use strict";n.r(e);n(139),n(142),n(143),n(145),n(146),n(148),n(72),n(152),n(153),n(154),n(155),n(156),n(157),n(158),n(159),n(161),n(163),n(164),n(165),n(166),n(167),n(168),n(169),n(170),n(171),n(172),n(173),n(174),n(175),n(176),n(177),n(178),n(179),n(180),n(181),n(182),n(184),n(185),n(186),n(187),n(188),n(189),n(190),n(192),n(193),n(194),n(196),n(197),n(198),n(200),n(202),n(203),n(204),n(205),n(206),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(113),n(234),n(235),n(236),n(237),n(238),n(239),n(240),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(283),n(284),n(285),n(286),n(287);var a=n(2),i=n.n(a),r=n(323),o=n.n(r),c=n(10),s=(n(138),n(509),n(324));function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=function(t){function e(t){var n,a,i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a=this,(n=!(i=h(e).call(this,t))||"object"!==l(i)&&"function"!=typeof i?d(a):i).state={color:"#000",isOpen:!1,isDisabled:!1},n.handleChange=n.handleChange.bind(d(n)),n.closeMenu=n.closeMenu.bind(d(n)),n.setColor=n.setColor.bind(d(n)),n.mouseOnMenu=!1,n.menuToogle=n.menuToogle.bind(d(n)),n.menuMouseOverToogle=n.menuMouseOverToogle.bind(d(n)),n.clickTrigger=n.clickTrigger.bind(d(n)),n}var n,a,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,i.a.Component),n=e,(a=[{key:"componentDidMount",value:function(){document.addEventListener("click",this.clickTrigger)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.clickTrigger)}},{key:"setColor",value:function(t){this.setState({color:t})}},{key:"menuToogle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.setState({isOpen:t})}},{key:"menuMouseOverToogle",value:function(t){this.mouseOnMenu=t}},{key:"disable",value:function(){this.setState({isDisabled:!0,isOpen:!1})}},{key:"enable",value:function(){this.setState({isDisabled:!1})}},{key:"clickTrigger",value:function(){this.mouseOnMenu||this.menuToogle()}},{key:"closeMenu",value:function(){this.setState({isOpen:!1})}},{key:"handleChange",value:function(t,e){var n=t.hex;this.setState({color:n}),this.props.onChange(n)}},{key:"render",value:function(){var t=this,e=this.state,n=e.color,a=e.isOpen,r=e.isDisabled,o=("color:".concat(n,";"),"dropdown color-picker-dropdown".concat(a?" show":"")),c="btn btn-light".concat(a?" active":""),l="dropdown-menu".concat(a?" show":"");return i.a.createElement("div",{className:o,onMouseOver:function(e){t.menuMouseOverToogle(!0)},onMouseOut:function(e){t.menuMouseOverToogle(!1)}},i.a.createElement("button",{className:c,onClick:function(){t.menuToogle(!a)},disabled:r},i.a.createElement("div",{className:"color-block",style:{backgroundColor:n}}," ")),i.a.createElement("div",{className:l},i.a.createElement(s.BlockPicker,{color:n,onChangeComplete:this.handleChange})))}}])&&u(n.prototype,a),r&&u(n,r),e}(),p=(n(94),function(t){var e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),confirm("網址已複製")});function v(t,e,n,a,i,r,o){try{var c=t[r](o),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(a,i)}function m(t){return function(){var e=this,n=arguments;return new Promise(function(a,i){var r=t.apply(e,n);function o(t){v(r,a,i,o,c,"next",t)}function c(t){v(r,a,i,o,c,"throw",t)}o(void 0)})}}function g(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var b=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.blobToBase64=this.blobToBase64.bind(this),this.loadFont=this.loadFont.bind(this),this.embedFont=this.embedFont.bind(this)}var e,n,a;return e=t,(n=[{key:"blobToBase64",value:function(t){return new Promise(function(e,n){var a=new FileReader;a.onload=function(){var t=a.result.split(",")[1];e(t)},a.readAsDataURL(t)})}},{key:"loadFont",value:function(t,e){var n=this;return new Promise(function(){var a=m(regeneratorRuntime.mark(function a(i,r){var o,c;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(e).then(function(t){return t.blob()});case 2:return o=a.sent,a.next=5,n.blobToBase64(o);case 5:c=a.sent,i({base64:c,fontSetting:t});case 7:case"end":return a.stop()}},a)}));return function(t,e){return a.apply(this,arguments)}}())}},{key:"embedFont",value:function(){var t=m(regeneratorRuntime.mark(function t(){var e,n,a=this,i=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:[],n=i.length>1?i[1]:void 0,t.abrupt("return",new Promise(function(){var t=m(regeneratorRuntime.mark(function t(i,r){var o,c,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=[],c=n.select("defs"),t.next=4,Promise.all(e.map(function(t){return a.loadFont(t,t.url)}));case 4:t.sent.forEach(function(t){var e="data:application/font-woff;base64,".concat(t.base64),n="\n          @font-face {\n            font-family: ".concat(t.fontSetting.name,";\n            font-style: normal;\n            font-weight: 400;\n            src: url(").concat(e,");\n            unicode-range: ").concat(t.fontSetting.unicodeRange,";\n          }\n        ");o.push({fontStyle:n})}),(s=c.selectAll("style").data(o)).enter().append("style").attr("type","text/css"),s.exit().remove(),c.selectAll("style").html(function(t){return t.fontStyle}),i(n);case 11:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()));case 3:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()}])&&g(e.prototype,n),a&&g(e,a),t}();function x(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var w=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.keyEvents=[],this.canTriggerEvent=!0,this.triggerTimer;var n=function(t){e.canTriggerEvent=!1,e.triggerTimer=setTimeout(function(){e.canTriggerEvent=!0},200),t()};document.addEventListener("keydown",function(t){if(e.canTriggerEvent)for(var a=0;a<e.keyEvents.length;a+=1){var i=e.keyEvents[a],r=i.code,o=i.ctrKey,c=i.shiftKey,s=i.cb;if(r===t.keyCode&&o===t.metaKey&&c==t.shiftKey){n(s);break}}})}var e,n,a;return e=t,(n=[{key:"disable",value:function(){clearTimeout(this.triggerTimer),this.canTriggerEvent=!1}},{key:"enable",value:function(){clearTimeout(this.triggerTimer),this.canTriggerEvent=!0}},{key:"bindEvents",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"function"==typeof e&&this.keyEvents.push({code:t,cb:e,ctrKey:n,shiftKey:a})}}])&&x(e.prototype,n),a&&x(e,a),t}();function k(t,e,n,a,i,r,o){try{var c=t[r](o),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(a,i)}function S(t){return function(){var e=this,n=arguments;return new Promise(function(a,i){var r=t.apply(e,n);function o(t){k(r,a,i,o,c,"next",t)}function c(t){k(r,a,i,o,c,"throw",t)}o(void 0)})}}function T(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var E=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,a;return e=t,(n=[{key:"blobToBase64",value:function(t,e){return new Promise(function(){var n=S(regeneratorRuntime.mark(function n(a,i){var r,o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e).then(function(t){return t.blob()});case 2:r=n.sent,(o=new FileReader).readAsDataURL(r),o.onloadend=function(){a({id:t,data:o.result})};case 6:case"end":return n.stop()}},n)}));return function(t,e){return n.apply(this,arguments)}}())}},{key:"handleSVGNode",value:function(t){var e=this;return new Promise(function(){var n=S(regeneratorRuntime.mark(function n(a,i){var r,o,c,s,l,u;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.querySelectorAll(".svg-block"),o=[],c={},r.forEach(function(e){var n=e.querySelector("use");if(n){var a=n.getAttribute("href").replace("#",""),i=t.getElementById(a);i.classList.contains("image-def")&&!c[a]&&(o.push({id:a,url:i.querySelector("image").getAttribute("href")}),c[a]=i)}}),n.next=6,Promise.all(o.map(function(t){return e.blobToBase64(t.id,t.url)}));case 6:return n.sent.forEach(function(t){c[t.id].querySelector("image").setAttribute("href",t.data)}),r.forEach(function(t){t.querySelectorAll("use").forEach(function(e){var n=e.getAttribute("transform"),a=e.getAttribute("href").replace("#","");if(c[a]){var i=c[a].querySelector("image").cloneNode(!0),r=i.getAttribute("href");i.setAttribute("transform",n),i.setAttribute("xlink:href",r),i.removeAttribute("href"),t.appendChild(i),t.removeChild(e)}})}),s=t.querySelector("#mask"),l=s.querySelector("image").getAttribute("href"),n.next=13,e.blobToBase64("#mask",l);case 13:u=n.sent,s.querySelector("image").setAttribute("href",u.data),a(t);case 16:case"end":return n.stop()}},n)}));return function(t,e){return n.apply(this,arguments)}}())}},{key:"getSVGUrl",value:function(t){var e="";new XMLSerializer;t.setAttribute("xlink","http://www.w3.org/1999/xlink"),e=(e=(e=(new XMLSerializer).serializeToString(t)).replace(/(\w+)?:?xlink=/g,"xmlns:xlink=")).replace(/NS\d+:href/g,"xlink:href");var n=new Blob([e],{type:"image/svg+xml;charset=utf-8"});return URL.createObjectURL(n)}},{key:"getBase64String",value:function(t,e,n){return new Promise(function(a,i){var r=document.createElement("canvas"),o=r.getContext("2d"),c=new Image;c.onload=function(){o.canvas.width=e,o.canvas.height=n,o.drawImage(c,0,0,e,n),a(r.toDataURL())},c.src=t})}},{key:"downLoadEvent",value:function(t,e,n){var a=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0}),i=new Date,r=document.createElement("a");r.setAttribute("download","".concat(e,"-").concat(i.getTime(),".").concat(n)),r.setAttribute("href",t),r.setAttribute("target","_blank"),r.dispatchEvent(a)}},{key:"donwloadImage",value:function(){var t=S(regeneratorRuntime.mark(function t(e,n,a){var i,r,o,c,s,l,u=this,h=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=h.length>3&&void 0!==h[3]?h[3]:"jpeg",t.next=3,this.handleSVGNode(e);case 3:r=t.sent,o=this.getSVGUrl(r),"svg"===i?this.downLoadEvent(o,"image",i):(c=document.createElement("canvas"),s=c.getContext("2d"),(l=new Image).onload=function(){s.canvas.width=n,s.canvas.height=a,s.drawImage(l,0,0,n,a),c.toBlob(function(t){var e=URL.createObjectURL(t);u.downLoadEvent(e,"image",i)},"image/".concat(i),1)},l.src=o);case 6:case"end":return t.stop()}},t,this)}));return function(e,n,a){return t.apply(this,arguments)}}()}])&&T(e.prototype,n),a&&T(e,a),t}();n(17);function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function L(t){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function M(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function B(t,e){return(B=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var C=function(t){function e(t){var n,a,i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a=this,(n=!(i=L(e).call(this,t))||"object"!==O(i)&&"function"!=typeof i?M(a):i).state={isDisabled:!1,isOpen:!1,selectedLabel:n.props.options[0].label},n.mouseOnMenu=!1,n.menuToogle=n.menuToogle.bind(M(n)),n.menuMouseOverToogle=n.menuMouseOverToogle.bind(M(n)),n.clickTrigger=n.clickTrigger.bind(M(n)),n.listItem=n.listItem.bind(M(n)),n.setSelectedLabel=n.setSelectedLabel.bind(M(n)),n}var n,a,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&B(t,e)}(e,i.a.PureComponent),n=e,(a=[{key:"componentDidMount",value:function(){document.addEventListener("click",this.clickTrigger)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.clickTrigger)}},{key:"disable",value:function(){this.setState({isDisabled:!0})}},{key:"enable",value:function(){this.setState({isDisabled:!1})}},{key:"clickTrigger",value:function(){this.mouseOnMenu||this.menuToogle()}},{key:"menuToogle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.setState({isOpen:t})}},{key:"menuMouseOverToogle",value:function(t){this.mouseOnMenu=t}},{key:"setSelectedLabel",value:function(t){var e=this.props.options.filter(function(e){return e.value===t}),n=e.length>0?e[0].label:t;this.setState({selectedLabel:n})}},{key:"listItem",value:function(t){var e=this,n={};return this.props.isFont&&(n={fontFamily:t.value}),i.a.createElement("li",{key:t.value,className:"dropdown-item"},i.a.createElement("div",{onClick:function(n){n.preventDefault(),e.setSelectedLabel(t.label),e.props.onChangeFn(t.value),e.menuToogle()},style:n},t.label))}},{key:"render",value:function(){var t=this,e=this.props,n=e.options,a=(e.onChangeFn,e.iconClass),r=this.state,o=r.isOpen,c=r.isDisabled,s=r.selectedLabel,l="dropdown ".concat(o?"show":""),u="dropdown-menu ".concat(o?"show":"");return i.a.createElement("div",{className:l,onMouseOver:function(e){t.menuMouseOverToogle(!0)},onMouseOut:function(e){t.menuMouseOverToogle(!1)}},i.a.createElement("button",{type:"button",className:"btn btn-light dropdown-toggle",onClick:function(e){e.preventDefault(),t.menuToogle(!o)},disabled:c},a&&i.a.createElement("i",{className:a,"aria-hidden":"true"})," ".concat(s," ")),i.a.createElement("ul",{className:u},n.map(function(e){return t.listItem(e)})))}}])&&P(n.prototype,a),r&&P(n,r),e}();C.defaultProps={isDisabled:!1,isFont:!1},C.propTypes={};function R(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var j={fill:"#eee",flipX:1,flipY:1,fontSize:12,lineHeight:1,fontFamily:"font-hdzb",fontStyle:"normal",fontWeight:"normal",outLine:!1,text:"",textDecoration:"none",textAnchor:"start",isSelected:!1,mode:"symbol",opacity:.72,pattern:{span:.5},symbol:"",scale:1,rotate:0,x:0,y:0},A=function(){function t(e,n,a,i,r,o,s){var l,u=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.svg=e,this.container=n,this.selectCallBack=i,this.syncIndicatorCallBack=r,this.recordCallBack=o,this.textEditCallBack=s,this.style=Object.assign({},j,a),this.update=this.update.bind(this),this.type="block",this.vectorGroup=this.container.append("g"),this.rect=this.vectorGroup.append("rect"),this.textInstance=this.vectorGroup.append("g").attrs({class:"text"}),this.isMoving=!1;var h=c.a().on("drag",function(t){u.style.isSelected||u.update({},"select",!0,!0),u.isMoving||(u.isMoving=!0),clearTimeout(l),l=setTimeout(function(){clearTimeout(l),u.isMoving=!1,u.update({},"move",!0,!0)},300),u.update({x:c.b.x,y:c.b.y},"move",!0)});this.vectorGroup.attr("class","svg-block").on("click",function(){u.style.isSelected||u.update({},"select",!0,!0)}).call(h),this.update()}var e,n,a;return e=t,(n=[{key:"makePattern",value:function(){for(var t=this.style,e=(t.flipX,t.flipY,t.scale,t.rotate,t.pattern),n=(t.symbol,this.vectorGroup.select("use").node().getBoundingClientRect()),a=n.width,i=n.height,r=this.svg.datum().edit.width,o=this.svg.datum().edit.height,c=a+a*e.span,s=i+i*e.span,l=Math.round(r/c),u=Math.round(o/s),h=(r-l*c)/2,d=(o-u*s)/2,f=[],y=0;y<=u;y+=1)for(var p=0;p<=l;p+=1)f.push({x:h+c*p,y:d+s*y});return f}},{key:"remove",value:function(){this.vectorGroup.remove()}},{key:"update",value:function(t,e,n,a){var i=this;n&&!this.style.isSelected&&this.selectCallBack(this),this.style=Object.assign({},this.style,t,{isSelected:n||!1});var r=function(t){var e=t.x,n=t.y,a=i.vectorGroup.node().getBoundingClientRect(),r=a.width,o=a.height,c=.1*r>15?.4*r:.5*r-15,s=.1*o>15?.4*o:.5*o-15,l={max:parseInt(i.svg.datum().edit.width)+c,min:-c},u={max:parseInt(i.svg.datum().edit.height)+s,min:-s};return e>l.max&&(e=l.max),e<l.min&&(e=l.min),n>u.max&&(n=u.max),n<u.min&&(n=u.min),{x:e,y:n}}(this.style);this.style.x=r.x,this.style.y=r.y;var o,c,s=this.style,l=s.fill,u=s.flipX,h=s.flipY,d=s.fontSize,f=s.lineHeight,y=s.fontFamily,p=s.fontStyle,v=s.fontWeight,m=s.outLine,g=s.text,b=s.textDecoration,x=s.textAnchor,w=s.mode,k=s.opacity,S=s.rotate,T=s.scale,E=s.symbol,O=s.x,P=s.y,L=T*d*f,M=O,B=P,C=1,R=1,j=0,A=m?"none":l,I=m?l:"none",q=[],z=[];"symbol"===w&&(q=[{x:0,y:0}]),"pattern"===w&&(M=0,B=0,q=this.makePattern()),"text"===w&&(z=g.split(/[\n\r|\n|\r\n]/),C=u,R=h,j=S),(o=this.vectorGroup.selectAll("use").data(q)).exit().remove(),o.enter().append("use"),(c=this.textInstance.selectAll("text").data(z)).exit().remove(),c.enter().append("text"),this.textInstance.attrs({"dominant-baseline":"text-before-edge","text-anchor":x,"font-size":d*T,"font-family":"".concat(y),"font-style":p,"font-weight":v,"text-decoration":b}),this.vectorGroup.datum(this.style),this.vectorGroup.attrs({transform:"translate(".concat(M," ").concat(B,") scale(").concat(C," ").concat(R,") rotate(").concat(j,")"),fill:A,stroke:I,opacity:k}).selectAll("use").attrs({class:"sticker",transform:function(t){return"translate(".concat(t.x," ").concat(t.y,") scale(").concat(T*u," ").concat(T*h,") rotate(").concat(S,")")},"xlink:href":"#".concat(E,"-symbol"),href:"#".concat(E,"-symbol")});var _=z.length;z.forEach(function(t){t.length>_&&(_=t.length)}),this.textInstance.selectAll("text").attrs({x:function(t,e){return-e*L},y:0,"writing-mode":"tb",transform:function(t,e){var n=_/z.length,a=t.length?_/t.length:0;return"scale(".concat(n," ").concat(a,")")}}).text(function(t){return t});var D,G=this.textInstance.node().getBBox(),F=G.width,N=G.height;switch(x){case"start":D=F/2;break;case"middle":D=0;break;case"end":D=F/2}var U=F/16,W=F+.8*U,V=N+.8*U;this.rect.attrs({width:W,height:V,"stroke-width":U,transform:"translate(".concat(-W/2," ").concat(-V/2,")"),fill:"none",stroke:l}),this.textInstance.attrs({transform:"translate(".concat(D," ").concat(-N/2,")")}),n&&this.syncIndicatorCallBack(),a&&this.recordCallBack(e)}}])&&R(e.prototype,n),a&&R(e,a),t}();function I(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var q=function(t,e,n){return t<e?e:t>n?n:t},z=function(){function t(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e,this.update=n,this.dragBtn=document.createElement("div"),this.dragBtnIcon=document.createElement("i"),this.processBar=document.createElement("div"),this.processBG=document.createElement("div"),this.limitWidth=this.element.getBoundingClientRect().width,this.disable=!1,this.set=this.set.bind(this),this.disableToggle=this.disableToggle.bind(this),this.dragBtn.classList.add("drag-btn"),this.dragBtnIcon.classList.add("fa","fa-sort-asc"),this.processBar.classList.add("value-bar"),this.processBG.classList.add("value-bg"),this.processBG.appendChild(this.processBar),this.dragBtn.appendChild(this.dragBtnIcon),this.element.innerHTML="",this.element.appendChild(this.processBG),this.element.appendChild(this.dragBtn);var i=function(t){if(!this.disable){this.limitWidth=this.element.getBoundingClientRect().width,t.x=q(c.b.x,0,this.limitWidth);var e=t.x/this.limitWidth;this.set(e)}}.bind(this),r=function(t){if(!this.disable){this.limitWidth=this.element.getBoundingClientRect().width,t.x=q(c.b.x,0,this.limitWidth);var e=t.x/this.limitWidth;this.set(e,!0,!0)}}.bind(this),o=c.a().on("start",function(t){}).on("drag",i).on("end",r);c.c(this.dragBtn).datum({x:a*this.limitWidth,y:0}).call(o),this.set(a)}var e,n,a;return e=t,(n=[{key:"set",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.limitWidth=this.element.getBoundingClientRect().width;var a=this.limitWidth*t;c.c(this.dragBtn).datum({x:a,y:0}),this.dragBtn.setAttribute("style","transform: translate(".concat(a,"px,0px)")),this.processBar.setAttribute("style","width:".concat(100*t,"%;")),e&&this.update(t,n)}},{key:"disableToggle",value:function(t){this.disable=t,t?this.element.classList.add("is-disable"):this.element.classList.remove("is-disable")}}])&&I(e.prototype,n),a&&I(e,a),t}();function _(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var D={width:0,height:0,stroke:"#0FF",scale:1,previewScale:1,rotate:0,previewRotate:0,scaleMax:10,scaleMin:.5,opacity:1,text:"",dx:0,dy:0,x:0,y:0,isEditable:!1},G=function(){function t(e,n,a,i){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e,this.zoomCallBack=a,this.rotateCallBack=i,this.style=Object.assign({},D,n),this.instance=this.container.append("g"),this.previewPath=this.instance.append("path"),this.rectPath=this.instance.append("path");this.rotateBtn=this.instance.append("g").attr("class","rotate-btn"),this.rotateBtn.append("rect").attr("x",-6).attr("y",-6).attr("width",12).attr("height",12).attr("fill","rgba(0,0,0,0)"),this.rotateBtn.append("path").attr("d","M0,3.4c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4c0.8,0,1.5,0.3,2.1,0.8L0.5-1.2l4.5,0.7l0-4.5L3.4-3.6 C2.5-4.4,1.3-4.9,0-4.9c-2.7,0-5,2.2-5,5c0,2.7,2.2,5,5,5c2.1,0,4-1.4,4.7-3.3L3.1,1.5C2.6,2.6,1.4,3.4,0,3.4z").attr("fill","#fff");var o=c.a().on("start",function(){r.style.isEditable&&r.showPreviewPath()}).on("drag",function(t){if(r.style.isEditable){var e={x:c.b.x,y:c.b.y};r.setPreviewPath(e,t.type)}}).on("end",function(t){r.style.isEditable&&(r.hidePreviewPath(),r.zoomCallBack(r.style.previewScale,r.style.dx,r.style.dy,t.type))}),s=c.a().on("start",function(){r.style.isEditable&&r.showPreviewPath()}).on("drag",function(t){if(r.style.isEditable){var e={x:c.b.x,y:c.b.y};r.rotatePreviewPath(e)}}).on("end",function(t){if(r.style.isEditable){var e=(r.style.previewRotate+r.style.rotate)%360;r.hidePreviewPath(),r.rotateCallBack(e)}});this.circleLT=this.instance.append("circle").datum({type:"lt"}).attr("class","resize-circle circle-lt"),this.circleLB=this.instance.append("circle").datum({type:"lb"}).attr("class","resize-circle circle-lb"),this.circleRT=this.instance.append("circle").datum({type:"rt"}).attr("class","resize-circle circle-rt"),this.circleRB=this.instance.append("circle").datum({type:"rb"}).attr("class","resize-circle circle-rb"),this.setPosition=this.setPosition.bind(this),this.setSize=this.setSize.bind(this),this.setOpacity=this.setOpacity.bind(this),this.previewPath.attr("fill","none").attr("stroke","#f00"),this.rectPath.attr("fill","none").attr("stroke",this.style.stroke),this.rotateBtn.call(s.bind(this)),this.instance.selectAll("circle").attr("r",3).attr("fill","#fff").attr("stroke",this.style.stroke).call(o.bind(this)),this.setOpacity().setPosition().setSize()}var e,n,a;return e=t,(n=[{key:"setPreviewPath",value:function(t,e){var n=this.style,a=n.width,i=n.height,r=n.scale,o=n.scaleMax,c=n.scaleMin,s=[{x:-a/2-1,y:-i/2-1},{x:a/2+1,y:i/2+1}],l={x:0,y:0},u=function(t,e){var n=Math.abs(t.x-e.x)/(a/r),s=Math.abs(t.y-e.y)/(i/r),l={x:0,y:0,scale:n>s?s:n};return l.scale>o&&(l.scale=o),l.scale<c&&(l.scale=c),l.x=t.x-e.x>0?e.x+a/r*l.scale+1:e.x-a/r*l.scale-1,l.y=t.y-e.y>0?e.y+i/r*l.scale+1:e.y-i/r*l.scale-1,l};switch(e){case"lt":l=u(t,{x:s[1].x,y:s[1].y}),s[0].x=l.x-1,s[0].y=l.y-1;break;case"lb":l=u(t,{x:s[1].x,y:s[0].y}),s[0].x=l.x-1,s[1].y=l.y+1;break;case"rt":l=u(t,{x:s[0].x,y:s[1].y}),s[1].x=l.x+1,s[0].y=l.y-1;break;case"rb":l=u(t,{x:s[0].x,y:s[0].y}),s[1].x=l.x+1,s[1].y=l.y+1}this.style.previewScale=l.scale,this.style.dx=(s[0].x+s[1].x)/2,this.style.dy=(s[0].y+s[1].y)/2;var h=["M ".concat(s[0].x," ").concat(s[0].y),"L ".concat(s[1].x," ").concat(s[0].y),"L ".concat(s[1].x," ").concat(s[1].y),"L ".concat(s[0].x," ").concat(s[1].y),"L ".concat(s[0].x," ").concat(s[0].y)];this.previewPath.attr("d",h.join(" "))}},{key:"rotatePreviewPath",value:function(t){var e=Math.atan(Math.abs(t.x)/Math.abs(t.y))/Math.PI*180-45;t.x>0&&t.y>0&&(e=90-e),t.x<=0&&t.y>0&&(e=180+e),t.x<=0&&t.y<=0&&(e=270-e),this.style.previewRotate=e,this.previewPath.attr("transform","rotate(".concat(e,")"))}},{key:"showPreviewPath",value:function(){var t=this.style,e=t.width,n=t.height,a=(t.scale,[{x:-e/2-1,y:-n/2-1},{x:e/2+1,y:n/2+1}]),i=["M ".concat(a[0].x," ").concat(a[0].y),"L ".concat(a[1].x," ").concat(a[0].y),"L ".concat(a[1].x," ").concat(a[1].y),"L ".concat(a[0].x," ").concat(a[1].y),"L ".concat(a[0].x," ").concat(a[0].y)];this.previewPath.attr("d",i.join(" ")).attr("transform","rotate(0)").attr("opacity",1)}},{key:"hidePreviewPath",value:function(){this.previewPath.attr("opacity",0)}},{key:"setSize",value:function(t){var e=this.style=Object.assign({},this.style,t),n=e.width,a=e.height,i=(e.scale,e.isEditable,[{x:-n/2-1,y:-a/2-1},{x:n/2+1,y:a/2+1}]),r=["M ".concat(i[0].x," ").concat(i[0].y),"L ".concat(i[1].x," ").concat(i[0].y),"L ".concat(i[1].x," ").concat(i[1].y),"L ".concat(i[0].x," ").concat(i[1].y),"L ".concat(i[0].x," ").concat(i[0].y)];return this.rectPath.attr("d",r.join(" ")),this.circleLT.attr("cx",i[0].x).attr("cy",i[0].y),this.circleLB.attr("cx",i[0].x).attr("cy",i[1].y),this.circleRT.attr("cx",i[1].x).attr("cy",i[0].y),this.circleRB.attr("cx",i[1].x).attr("cy",i[1].y),this.rotateBtn.attr("transform","translate(".concat(i[1].x+8,", ").concat(i[0].y-8,")")),this}},{key:"setOpacity",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.style.opacity=t,this.instance.attr("opacity",this.style.opacity),this}},{key:"setPosition",value:function(t){var e=this.style=Object.assign({isEditable:!1},this.style,t),n=e.x,a=e.y,i=e.rotate,r=(e.text,e.isEditable);return this.instance.attrs({class:r&&"is-editable",transform:"translate(".concat(n," ").concat(a,") rotate(").concat(i,")")}),this}}])&&_(e.prototype,n),a&&_(e,a),t}();function F(t,e,n,a,i,r,o){try{var c=t[r](o),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(a,i)}function N(t){return function(){var e=this,n=arguments;return new Promise(function(a,i){var r=t.apply(e,n);function o(t){F(r,a,i,o,c,"next",t)}function c(t){F(r,a,i,o,c,"throw",t)}o(void 0)})}}var U,W=new w,V=document.querySelector(".text-edit-area"),K=document.querySelector(".main-content"),H=(document.querySelector(".main-content .content"),document.querySelector(".scale-controler")),X=document.querySelector(".rotate-controler"),Y=document.querySelector(".btn-send"),J=document.querySelector(".notice-error-section .btn-confirm"),Q=document.querySelector(".check-section .btn-confirm"),Z=document.querySelector(".check-section .btn-cancel"),$=document.querySelector(".check-section .btn-close"),tt=document.querySelector(".btn-download"),et=document.querySelector(".share-url-col .url"),nt=document.querySelector(".share-url-col .btn-copy"),at=document.querySelector(".img-url-col"),it=document.querySelector(".img-url-col .url"),rt=document.querySelector(".img-url-col .btn-copy"),ot=document.querySelector(".color-picker"),ct=new E,st={width:768,height:540},lt={view:{width:320,height:473},edit:{width:320,height:473},center:{x:160,y:236.5}},ut={"font-hdzb":{name:"font-hdzb",url:"font/zhuanti.woff"}},ht=["x","y","scale","rotate","fill","text"],dt=new b,ft=c.c(".svg-container svg").datum(lt);ft.append("g").attrs({class:"svg-block"}).insert("use").attrs({transform:"translate(0,0)","xlink:href":"#theme-bg",href:"#theme-bg"});var yt,pt,vt,mt=ft.append("g").attrs({class:"canvas-container",mask:"url(#mask)"}),gt=ft.append("g").attr("class","indicator-container"),bt=function(){K.classList.add("text-edit-mode")},xt=function(t,e,n){if(n){if(e>=0)return Math.abs(t);if(e<0)return-Math.abs(t)}else{if(e>=0)return-Math.abs(t);if(e<0)return Math.abs(t)}},wt=[],kt=0,St=[{action:"initial",list:[]}],Tt=function(t){var e=St.slice(0,kt+1),n={action:t,list:[]};wt.forEach(function(t){var e={style:t.style,type:t.type};n.list.push(e)}),e.push(n),St=e,kt+=1},Et=function(t){for(var e=wt.length>t.length?wt.length:t.length,n=[],a=0;a<e;a+=1){var i=wt[a],r=t[a];r?(i||(i=new A(ft,mt,r.style,Ct,Mt,Tt,bt),wt.push(i)),i.style!==r.style&&i.update(r.style,"undo",r.style.isSelected),r.style.isSelected&&Bt(i)):n.push(i)}n.forEach(function(t){!function(t,e){if(t){yt===t&&Rt();var n=wt.indexOf(t);t.remove(),wt.splice(n,1),e&&Tt("remove")}}(t)})},Ot=new G(gt,{},function(t,e,n,a){if(yt){var i,r,o=Math.pow(Math.pow(e,2)+Math.pow(n,2),.5),c=Math.atan(Math.abs(e)/Math.abs(n)),s=0,l=0,u=0;switch(u=90-yt.style.rotate,a){case"lt":u=90-yt.style.rotate;break;case"rt":u=90+yt.style.rotate;break;case"rb":u=90-yt.style.rotate;break;case"lb":u=90+yt.style.rotate}i=c+u*Math.PI/180,r=(180*c/Math.PI+u)%360,s=o*Math.cos(i)||0,l=o*Math.sin(i)||0,r>90&&r<=180?(s=xt(s,e,!0),l=xt(l,n,!0)):r>0&&r<=90?(s=xt(s,e),l=xt(l,n,!0)):r>-90&&r<=0||r>270&&r<=360?(s=xt(s,e),l=xt(l,n)):(s=xt(s,e,!0),l=xt(l,n));var h={x:yt.style.x+s,y:yt.style.y+l,scale:t};pt&&pt.set((t-.5)/9.5,!1),s&&yt.update(h,"zoom",!0,!0)}},function(t){yt&&(vt&&vt.set(t/360,!1),yt.update({rotate:t},"rotate",!0,!0))}),Pt="",Lt="",Mt=function(){if(yt){var t,e,n,a=yt.style,i=a.x,r=a.y,o=a.scale,c=a.rotate,s=(a.symbol,a.text,a.fontSize,a.mode);"text"===s&&(n=yt.textInstance.node().getBBox()),"symbol"===s&&(n=yt.vectorGroup.node().getBBox()),"pattern"===s&&(o=1,c=0,i=(n=yt.vectorGroup.node().getBBox()).x+n.width/2,r=n.y+n.height/2),t=n.width,e=n.height,Ot.setOpacity().setSize({width:t,height:e,scale:o}).setPosition({x:i,y:r,rotate:c,isEditable:"pattern"!==s})}},Bt=function(t){if(U.enable(),U.setColor(t.style.fill),"text"!==t.style.mode)document.getElementById("".concat(t.style.symbol,"-symbol"));if("text"===t.style.mode){t.style.fontSize,t.style.scale;V.value=t.style.text,V.disabled=!1,V.focus(),pt.disableToggle(!1),vt.disableToggle(!1)}!function(t){t.opacity,t.pattern;var e=t.scale,n=t.rotate;pt&&pt.set((e-1)/5,!1),vt&&vt.set(n/360,!1)}(t.style)},Ct=function(t){yt!==t&&(yt&&Rt(),yt=t,Bt(t))},Rt=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];K.classList.remove("text-edit-mode"),V.disabled=!0,pt.disableToggle(!0),vt.disableToggle(!0),U&&(U.closeMenu(),U.disable()),Ot.setOpacity(0).setSize({width:0,height:0}).setPosition({x:0,y:0}),yt&&yt.update({isSelected:!1},"unselect",!1,t),yt=null},jt=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];wt.push(t),t.update({isSelected:e},"add Block",e,n)},At=function(t){document.body.classList.add("page-loading"),document.querySelector(".loading-panel .loading-info").innerText=t},It=function(){document.body.classList.remove("page-loading"),document.querySelector(".loading-panel .loading-info").innerText=""},qt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{style:{}};return ht.map(function(e){return"".concat(e,"=").concat(encodeURIComponent(t.style[e]))}).join("&")},zt=function(){var t=N(regeneratorRuntime.mark(function t(){var e,n,a,i,r,o,s,l,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=qt(wt[0]),Pt="".concat(location.origin,"?").concat(e),et.value=Pt,n=c.c(ft.node().cloneNode(!0)),960,1419,a=[],i=[],n.attrs({viewBox:"0 0 ".concat(320," ").concat(473),width:320,height:473}),n.select(".indicator-container").remove(),At("合成圖片中 ..."),n.selectAll(".text").nodes().forEach(function(t){var e=t.getAttribute("font-family");ut[e]&&ut[e].url&&!i.includes(e)&&(a.push(ut[e]),i.push(e))}),t.next=14,dt.embedFont(a,n);case 14:return n=t.sent,t.next=17,ct.handleSVGNode(n.node());case 17:r=t.sent,o=ct.getSVGUrl(r),It(),s=document.querySelector(".check-section canvas"),l=s.getContext("2d"),u=new Image,s.setAttribute("data-url",o),document.body.classList.add("page-check"),u.onload=function(){l.canvas.width=960,l.canvas.height=1419,l.drawImage(u,0,0,960,1419)},u.src=o;case 27:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),_t=function(){var t=N(regeneratorRuntime.mark(function t(){var e,n,a,i,r,o,c,s,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return 960,1419,e=document.querySelector(".check-section canvas"),n=e.getAttribute("data-url"),t.next=6,ct.getBase64String(n,960,1419);case 6:return a=t.sent,"https://api.imgur.com/3/image",i=new Headers({Authorization:"Client-ID 41e9570f0218f10"}),(r=new FormData).append("image",a.replace("data:image/png;base64,","")),r.append("title","NiMaPaChi-rune-paper-".concat((new Date).getTime())),o={headers:i,body:r,method:"POST",mode:"cors"},At("上傳圖片中 ..."),t.prev=14,t.next=17,fetch("https://api.imgur.com/3/image",o).then(function(t){return t.json()});case 17:c=t.sent,s=c.data,c.status,c.success?(It(),l=s.link,Lt=l,it.value=Lt,at.classList.remove("d-none")):Ft(),t.next=28;break;case 24:t.prev=24,t.t0=t.catch(14),Ft(),console.log(t.t0);case 28:case"end":return t.stop()}},t,null,[[14,24]])}));return function(){return t.apply(this,arguments)}}(),Dt=function(t){return function(){if(yt){var e={x:yt.style.x+t[0],y:yt.style.y+t[1]};yt.update(e,"slight move",!0,!0)}}},Gt=function(){var t=K.offsetWidth,e=K.offsetHeight;ft.attrs({viewBox:"".concat((320-t)/2," ").concat((473-e)/2," ").concat(t," ").concat(e)})};Y.onclick=function(){zt()},Q.onclick=function(){_t()},V.onkeyup=function(){yt&&yt.update({text:V.value},"change text",!0,!0)},V.onfocus=function(){W.disable()},V.onblur=function(){W.enable()},tt.onclick=function(){var t;t="png",document.querySelector(".check-section canvas").toBlob(function(e){var n=URL.createObjectURL(e);ct.downLoadEvent(n,"NiMaPaChi-rune-paper",t)},"image/".concat(t),1)},c.c(".main-content").on("click",function(){["tspan","text"].includes(c.b.target.tagName)||c.b.target.classList.contains("text-container")||c.b.target.classList.contains("sticker")||Rt(!0)}),pt=new z(H,function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(yt){var n=1+5*t;yt.update({scale:n},"change scale",!0,e)}},.5/9.5),vt=new z(X,function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(yt){var n=360*t;yt.update({rotate:n},"change rotate",!0,e)}},0),W.bindEvents(90,function(){(kt-=1)<1&&(kt=1),Et(St[kt].list)},!0),W.bindEvents(90,function(){(kt+=1)>St.length-1&&(kt=St.length-1),Et(St[kt].list)},!0,!0);var Ft=function(){document.body.classList.remove("page-loading"),document.body.classList.add("page-error")};J.onclick=function(){document.body.classList.remove("page-error")},Z.onclick=function(){document.body.classList.remove("page-check")},$.onclick=function(){document.body.classList.remove("page-check")},nt.onclick=function(){p(Pt)},rt.onclick=function(){p(Lt)},U=o.a.render(i.a.createElement(y,{onChange:function(t){yt&&yt.update({fill:t},"change color",!1,!0)}}),ot),Rt(),Gt(),window.onload=function(){var t,e,n=!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/),a=document.documentMode||/Edge/.test(navigator.userAgent),i=/MSIE/.test(navigator.userAgent)||/Trident/.test(navigator.userAgent);if(n||a||i)document.body.classList.add("page-disable-notice");else{document.body.classList.remove("page-initial");var r=document.getElementById("theme-editor");st.width=r.getAttribute("screen-w")?parseInt(r.getAttribute("screen-w")):768,st.height=r.getAttribute("screen-h")?parseInt(r.getAttribute("screen-h")):540,window.addEventListener("resize",function(t){Gt()});var o=(t=location.href,(e=t.split("?")[1])?e.split("&").map(function(t){var e=t.split("=");return{key:e[0],val:decodeURIComponent(e[1])}}):[]),c=["x","y","scale","rotate"],s={mode:"text",fontFamily:"font-hdzb",fontSize:24,text:"泥馬霸氣\n符咒\n製成器",fill:"#c35e02",x:162,y:370};o.forEach(function(t){t.val&&ht.indexOf(t.key)>-1&&(s[t.key]=c.indexOf(t.key)>-1?parseInt(t.val):t.val)}),function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=Object.assign({},{x:lt.center.x,y:lt.center.y},t),i=new A(ft,mt,a,Ct,Mt,Tt,bt);jt(i,e,n)}(s),setTimeout(function(){Dt([-1,0])(),Dt([1,0])()},300)}}},509:function(t,e){}});