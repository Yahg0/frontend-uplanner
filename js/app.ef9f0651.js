(function(e){function t(t){for(var r,c,i=t[0],s=t[1],u=t[2],p=0,f=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/uplanner/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Clientes")],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"clientes"},[n("h1",[e._v("Listagem de clientes Uplanner")]),n("div",e._l(e.Clientes,(function(t,r){return n("md-card",{key:r,staticClass:"md-primary",attrs:{"md-theme":"purple-card","md-with-hover":""}},[n("md-ripple",[n("md-card-header",[n("div",{staticClass:"md-title"},[e._v(e._s(t.name))]),n("div",{staticClass:"md-subhead"},[e._v(e._s(t.cpf)+"d")])]),n("p",{staticClass:"card-content"},[e._v("Email: "+e._s(t.email))]),n("p",{staticClass:"card-content"},[e._v("Endereço: "+e._s(t.address.street))]),n("p",{staticClass:"card-content"},[e._v("Telefone: "+e._s(t.phoneNumber))])],1)],1)})),1)])},i=[],s=n("43f9"),u=n.n(s),l=(n("51de"),n("bc3a")),p=n.n(l);r["default"].use(u.a);var f={name:"Clientes",data:function(){return{Clientes:[]}},mounted:function(){var e=this;p.a.get("https://api-uplanner.herokuapp.com/customers").then((function(t){console.log(t.data),e.Clientes=t.data})).catch((function(e){console.log(e)}))}},d=f,v=(n("a15e"),n("2877")),h=Object(v["a"])(d,c,i,!1,null,null,null),m=h.exports,b={name:"App",components:{Clientes:m}},_=b,y=(n("034f"),Object(v["a"])(_,a,o,!1,null,null,null)),g=y.exports;r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(g)}}).$mount("#app")},"85ec":function(e,t,n){},a15e:function(e,t,n){"use strict";var r=n("ecbf"),a=n.n(r);a.a},ecbf:function(e,t,n){}});
//# sourceMappingURL=app.ef9f0651.js.map