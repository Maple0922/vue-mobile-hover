(function(n){function t(t){for(var o,c,i=t[0],a=t[1],l=t[2],s=0,f=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),e()}function e(){for(var n,t=0;t<u.length;t++){for(var e=u[t],o=!0,i=1;i<e.length;i++){var a=e[i];0!==r[a]&&(o=!1)}o&&(u.splice(t--,1),n=c(c.s=e[0]))}return n}var o={},r={app:0},u=[];function c(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=n,c.c=o,c.d=function(n,t,e){c.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},c.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,t){if(1&t&&(n=c(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)c.d(e,o,function(t){return n[t]}.bind(null,o));return e},c.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return c.d(t,"a",t),t},c.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=a;u.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},"034f":function(n,t,e){"use strict";e("85ec")},"0441":function(n,t,e){},"56d7":function(n,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("Main")],1)},u=[],c=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container"},[e("h1",[n._v("Vue Mobile Hover")]),e("p",[n._v("hover")]),e("button",{staticClass:"btn",on:{click:n.countUp}},[n._v("UP")]),e("p",[n._v("pointer events")]),n.mobile?e("button",{staticClass:"btn",on:{click:n.countDown}},[n._v("DOWN")]):n._e(),e("p",[n._v("count: "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.count,expression:"count"}],attrs:{readonly:""},domProps:{value:n.count},on:{input:function(t){t.target.composing||(n.count=t.target.value)}}})])])},i=[],a=e("0347"),l={name:"Main",data:function(){return{count:0,isMobile:a["a"]}},computed:{mobile:function(){return Object(a["a"])(window.navigator).any}},methods:{countUp:function(){this.count++},countDown:function(){this.count--}}},p=l,s=(e("8c40"),e("2877")),f=Object(s["a"])(p,c,i,!1,null,"6810054e",null),d=f.exports,v={name:"App",components:{Main:d}},b=v,h=(e("034f"),Object(s["a"])(b,r,u,!1,null,null,null)),m=h.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(n){return n(m)}}).$mount("#app")},"85ec":function(n,t,e){},"8c40":function(n,t,e){"use strict";e("0441")}});
//# sourceMappingURL=app.2e050078.js.map