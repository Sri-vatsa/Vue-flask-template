(function(e){function t(t){for(var s,i,c=t[0],o=t[1],u=t[2],f=0,p=[];f<c.length;f++)i=c[f],a[i]&&p.push(a[i][0]),a[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},a={app:0},r=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var s=n("64a9"),a=n.n(s);a.a},"0ac3":function(e,t,n){},"0b21":function(e,t,n){},"4c80":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=n("5f5b");n("ab8b"),n("2dd8");s["default"].use(a["a"]);var r=n("bc3a"),i=n.n(r),c={},o=i.a.create(c);o.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),o.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)}),Plugin.install=function(e,t){e.axios=o,window.axios=o,Object.defineProperties(e.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},s["default"].use(Plugin);Plugin;var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Login"),n("b-container",[n("NavBar",{attrs:{logged_user:e.logged_user_username}}),n("b-row",{staticClass:"main-area"},[n("b-col",{staticClass:"users",attrs:{cols:"4"}},[n("Users")],1),n("b-col",{staticClass:"messages-area",attrs:{cols:"8"}},[n("div",{staticClass:"messages-main"},[e.current_chat_channel?n("Messages",{attrs:{active_chat:e.active_chat_id,messages:e.messages[e.current_chat_channel]}}):n("div",{staticClass:"select-chat text-center"},[e._v("\n            Select a user to start chatting... \n          ")])],1),n("MessageInput")],1)],1)],1)],1)},l=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message-input"},[n("b-form-input",{attrs:{type:"text",placeholder:"Enter your message"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.send_message(t)}},model:{value:e.message_input,callback:function(t){e.message_input=t},expression:"message_input"}})],1)},p=[],d={name:"MessageInput",data:function(){return{message_input:""}},methods:{send_message:function(){this.$emit("send_message",this.message_input),this.message_input=""}}},m=d,v=(n("deaf"),n("2877")),g=Object(v["a"])(m,f,p,!1,null,"685badd8",null),b=g.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.messages,function(t,s){return n("div",{key:s},[n("div",{staticClass:"chat-message col-md-5",class:[t.from_user==e.active_chat?"to-message":"from-message offset-md-7"]},[e._v("\n       "+e._s(t.message)+"\n     ")])])}),0)},h=[],y=(n("c5f6"),{name:"Messages",props:{messages:Array,active_chat:Number}}),x=y,w=(n("5932"),Object(v["a"])(x,_,h,!1,null,null,null)),C=w.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{staticClass:"nav-bar",attrs:{toggleable:"md",type:"dark",variant:"info"}},[n("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),n("b-navbar-brand",{attrs:{href:"#"}},[e._v("ChitChat")]),n("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[n("b-navbar-nav",{staticClass:"ml-auto logged_user"},[e._v("\n            Welcome back "+e._s(e.logged_user)+"\n        ")])],1)],1)},O=[],j={name:"NavBar",props:{logged_user:String}},P=j,M=(n("7724"),Object(v["a"])(P,k,O,!1,null,"9b7ead72",null)),$=M.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[e.proccessing?n("div",{staticClass:"text-center"},[e._v(" Please wait... ")]):e._e(),e.message?n("div",{staticClass:"text-center"},[e._v(" "+e._s(e.message)+" ")]):e._e(),n("b-form-input",{staticClass:"input-form",attrs:{type:"text",placeholder:"Username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("b-form-input",{staticClass:"input-form",attrs:{type:"password",placeholder:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("b-button",{staticClass:"btn-block",attrs:{variant:"primary"},on:{click:e.login}},[e._v("\n  Log me in\n ")])],1)},S=[],U={name:"Login",data:function(){return{username:"",password:"",proccessing:!1,message:""}}},N=U,L=(n("a9de"),Object(v["a"])(N,E,S,!1,null,"8e3c848a",null)),B=L.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"margin-top":"0px"}},e._l(e.users,function(t,s){return n("div",{key:s},[n("div",{class:[e.activeUser==t.id?"user active":"user"],on:{click:function(n){return e.chat(t.id)}}},[e._v("\n      "+e._s(t.userName)+"\n      "),t.has_new_message?n("span",{staticClass:"has_new_message"},[e._v("New message")]):e._e()])])}),0)},T=[],A={name:"Users",props:{users:Array},data:function(){return{activeUser:null}},methods:{chat:function(e){this.activeUser=e,this.$emit("chat",e)}}},J=A,q=(n("bc84"),Object(v["a"])(J,I,T,!1,null,"64b86e42",null)),W=q.exports,z=(n("782e"),{name:"app",components:{MessageInput:b,NavBar:$,Messages:C,Users:W,Login:B},data:function(){},methods:{}}),D=z,F=(n("034f"),Object(v["a"])(D,u,l,!1,null,null,null)),G=F.exports;s["default"].config.productionTip=!1,new s["default"]({render:function(e){return e(G)}}).$mount("#app")},5932:function(e,t,n){"use strict";var s=n("bdba"),a=n.n(s);a.a},"64a9":function(e,t,n){},7724:function(e,t,n){"use strict";var s=n("4c80"),a=n.n(s);a.a},a9de:function(e,t,n){"use strict";var s=n("0ac3"),a=n.n(s);a.a},bc84:function(e,t,n){"use strict";var s=n("0b21"),a=n.n(s);a.a},bdba:function(e,t,n){},d89e:function(e,t,n){},deaf:function(e,t,n){"use strict";var s=n("d89e"),a=n.n(s);a.a}});
//# sourceMappingURL=app.2e4ae124.js.map