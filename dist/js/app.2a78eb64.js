(function(t){function e(e){for(var r,n,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);v&&v(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,n=1;n<a.length;n++){var s=a[n];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var r={},n={app:0},o={app:0},i=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"27d80008"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"d482e48c"}[t]+".css",o=l.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===r||u===o)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[t],v.parentNode.removeChild(v),a(i)},v.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(v)})).then((function(){n[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,a){r=o[t]=[e,a]}));e.push(r[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(v);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}o[t]=void 0}};var v=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(a,r,function(e){return t[e]}.bind(null,r));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var v=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"21cd":function(t,e,a){"use strict";a("9d8d")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{absolute:"",color:"#6A76AB",white:"","shrink-on-scroll":"",prominent:"",src:"https://picsum.photos/1920/1080?random","fade-img-on-scroll":"","scroll-target":"#scrolling-techniques-3",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-h6"},[t._v("MENU")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{to:e.to,link:""}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{absolute:"",color:"#6A76AB",white:"","shrink-on-scroll":"",prominent:"",src:"https://picsum.photos/1920/1080?random","fade-img-on-scroll":"","scroll-target":"#scrolling-techniques-3",app:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("MENU")])],1),a("v-main",[a("router-view")],1)],1)},o=[],i={data:function(){return{drawer:null,items:[{title:"Home",icon:"mdi-home",to:"/"},{title:"Home",icon:"mdi-home",to:"/"},{title:"login",icon:"mdi-login",to:"/Login"},{title:"Register",icon:"mdi-registered-trademark",to:"/RegisterUser"},{title:"admin",icon:"mdi-laptop",to:"/about"}]}}},s=i,l=a("2877"),c=a("6544"),u=a.n(c),d=a("7496"),v=a("40dc"),f=a("5bc1"),m=a("ce7e"),p=a("132d"),g=a("8860"),b=a("da13"),h=a("5d23"),w=a("34c3"),x=a("f6c4"),E=a("f774"),V=a("2a7f"),C=Object(l["a"])(s,n,o,!1,null,null,null),k=C.exports;u()(C,{VApp:d["a"],VAppBar:v["a"],VAppBarNavIcon:f["a"],VDivider:m["a"],VIcon:p["a"],VList:g["a"],VListItem:b["a"],VListItemContent:h["a"],VListItemIcon:w["a"],VListItemTitle:h["b"],VMain:x["a"],VNavigationDrawer:E["a"],VToolbarTitle:V["a"]});a("d3b7"),a("3ca3"),a("ddb0");var R=a("8c4f"),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},j=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto my-16",attrs:{loading:t.loading,"max-width":"374"}},[a("v-card-title",[a("v-icon",{attrs:{large:"",left:""}},[t._v(" mdi-desktop-classic ")]),a("span",{staticClass:"text-h6 font-weight-light"},[t._v("Finalproject")])],1),a("v-card-text",{staticClass:"text-h5 font-weight-bold"},[a("v-img",{attrs:{src:"data:image/png;base64,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"}})],1),a("v-card-text",{staticClass:"text-h5 font-weight-bold"},[t._v(' "เว็บไซร์จัดทำเพื่อการศึกษาเท่านั้น" ')]),a("v-card-actions",[a("v-list-item",{staticClass:"grow"},[a("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[a("v-img",{staticClass:"elevation-6",attrs:{alt:"",src:"https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.6435-9/80769984_3479379522104688_3450220307745341440_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=VqForChTlcoAX9cnx7y&_nc_ht=scontent.fcnx3-1.fna&oh=00_AT9Ej4Uza5hlrkgBSY0cAaz44E_yspFyk6wlONaZTfg5Ug&oe=625B721E"}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Teerawat Boonpoom")])],1)],1)],1)],1)},A=[],M=(a("ac1f"),a("5319"),a("bb92")),O=a("ea7b"),T={data:function(){return{}},methods:{logout:function(){var t=this;Object(O["e"])(M["a"]).then((function(){console.log("logout"),t.$router.replace("/"),alert("Logout")})).catch((function(t){console.log(t)}))}}},D=T,Y=a("b0af"),P=a("99d9"),L=a("adda"),W=a("8270"),z=Object(l["a"])(D,y,A,!1,null,null,null),S=z.exports;u()(z,{VCard:Y["a"],VCardActions:P["a"],VCardText:P["b"],VCardTitle:P["c"],VIcon:p["a"],VImg:L["a"],VListItem:b["a"],VListItemAvatar:W["a"],VListItemContent:h["a"],VListItemTitle:h["b"]});var B={name:"Home",components:{HelloWorld:S}},G=B,J=Object(l["a"])(G,I,j,!1,null,null,null),N=J.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-content",[a("v-card",{staticClass:"mx-auto mt-9",attrs:{width:"500"}},[a("v-card-title",[t._v("Login")]),a("v-card-text",[a("v-text-field",{attrs:{label:"E-mail","prepend-icon":"mdi-account-circle"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{label:"Password",type:t.showPassword?"text":"password","prepend-icon":"mdi-lock"},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.logout()}}},[t._v("logout "),a("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-logout")])],1),a("v-spacer"),a("v-btn",{staticClass:"ma-2 white--text",attrs:{loading:t.loading3,disabled:t.loading3,color:"teal"},on:{click:function(e){t.login()(t.loader="loading3")}}},[t._v(" Login "),a("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-login-variant")])],1)],1)],1)],1)],1)},Q=[],U={data:function(){return{email:"",password:"",loader:null,loading3:!1}},watch:{loader:function(){var t=this,e=this.loader;this[e]=!this[e],setTimeout((function(){return t[e]=!1}),3e3),this.loader=null}},methods:{login:function(){var t=this;Object(O["d"])(M["a"],this.email,this.password).then((function(e){var a=e.user;console.log("User="+a),t.email=a.email,t.$router.push("/Home")})).catch((function(t){var e=t.code,a=t.message;console.log(e+" "+a)}))}},logout:function(){var t=this;Object(O["e"])(M["a"]).then((function(){console.log("logout"),t.$router.replace("/"),alert("Logout")})).catch((function(t){console.log(t)}))}},K=U,X=(a("d6db"),a("8336")),Z=a("a75b"),q=a("2fa4"),F=a("8654"),_=Object(l["a"])(K,H,Q,!1,null,null,null),$=_.exports;u()(_,{VBtn:X["a"],VCard:Y["a"],VCardActions:P["a"],VCardText:P["b"],VCardTitle:P["c"],VContent:Z["a"],VDivider:m["a"],VIcon:p["a"],VSpacer:q["a"],VTextField:F["a"]});var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-contannier",{attrs:{fluid:""}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"16",sm:"10",md:"8",lg:"2"}},[a("h1",[t._v("Register")])])],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"10",md:"8",lg:"6"}},[a("v-card",{ref:"form"},[a("v-card-text",[a("v-text-field",{attrs:{color:"purple darken-2",label:"First name",required:""},model:{value:t.nameC,callback:function(e){t.nameC=e},expression:"nameC"}}),a("v-text-field",{attrs:{color:"blue darken-2",label:"Last name",required:""},model:{value:t.lastnameC,callback:function(e){t.lastnameC=e},expression:"lastnameC"}}),a("v-text-field",{attrs:{counter:"10",label:"StudentID",required:""},model:{value:t.checkedNames,callback:function(e){t.checkedNames=e},expression:"checkedNames"}}),a("v-text-field",{attrs:{rules:[function(){return!!t.state||"This field is required"}],label:"E-mail",required:"",placeholder:"Email"},model:{value:t.mails,callback:function(e){t.mails=e},expression:"mails"}}),a("v-text-field",{attrs:{type:t.show1?"text":"password",name:"input-10-1",label:"password",hint:"At least 8 characters",counter:""},model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}})],1),a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-subheader",[t._v("height")])],1),a("v-col",{attrs:{cols:"8"}},[a("v-text-field",{attrs:{label:"height",value:"",prefix:""},model:{value:t.wi,callback:function(e){t.wi=e},expression:"wi"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-subheader",[t._v("weight")])],1),a("v-col",{attrs:{cols:"8"}},[a("v-text-field",{attrs:{label:"Weight",value:"",suffix:"lbs"},model:{value:t.lol,callback:function(e){t.lol=e},expression:"lol"}})],1)],1),a("v-textarea",{staticClass:"mx-2",attrs:{label:"prepend-icon",rows:"1","prepend-icon":"mdi-comment"},model:{value:t.addresss,callback:function(e){t.addresss=e},expression:"addresss"}})],1),a("v-divider",{staticClass:"mt-12"}),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:function(e){return t.addData()}}},[t._v(" Save ")]),a("v-spacer"),a("v-slide-x-reverse-transition",[t.formHasErrors?a("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"my-0",attrs:{icon:""},on:{click:t.resetForm}},"v-btn",n,!1),r),[a("v-icon",[t._v("mdi-refresh")])],1)]}}],null,!1,522373079)},[a("span",[t._v("Refresh form")])]):t._e()],1),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.loginuser()}}},[t._v(" Submit ")])],1)],1)],1)],1)],1)},et=[],at=a("1da1"),rt=(a("159b"),a("99af"),a("96cf"),a("e71f")),nt={data:function(){return{dbData:"",nameC:" ",lastnameC:"",checkedNames:"",mails:"",password2:"",table:[],wi:"",lol:"",addresss:""}},methods:{addData:function(){var t=this;return Object(at["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(rt["a"])(Object(rt["b"])(M["b"],"note"),{name:t.nameC,lastname:t.lastnameC,atk:t.checkedNames,mail:t.mails,number:t.password2,wight:t.wi,height:t.lol,adress:t.addresss});case 3:a=e.sent,console.log("Document written with ID: ",a.id),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error("Error adding document: ",e.t0);case 10:alert("Savedata");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},readData:function(){var t=this;return Object(at["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(rt["e"])(Object(rt["b"])(M["b"],"note"));case 2:a=e.sent,a.forEach((function(e){console.log("".concat(e.id," => ").concat(e.data())),t.table.push({id:e.id,data:e.data()})}));case 4:case"end":return e.stop()}}),e)})))()},loginuser:function(){var t=this;Object(O["a"])(M["a"],this.mails,this.password2).then((function(e){var a=e.user;console.log("User="+a),t.$router.replace("/Login")})).catch((function(t){var e=t.code,a=t.message;console.log(e+" "+a)}))},checklogin:function(){var t=this;Object(O["c"])(M["a"],(function(e){if(e){var a=e.uid;console.log(a),t.uid=e.uid,t.emails=e.emails}else alert("Plses Login"),t.$router.push("/login")}))}}},ot=nt,it=(a("21cd"),a("62ad")),st=a("a523"),lt=a("0fd9"),ct=a("0789"),ut=a("e0c7"),dt=a("a844"),vt=a("3a2f"),ft=Object(l["a"])(ot,tt,et,!1,null,null,null),mt=ft.exports;u()(ft,{VBtn:X["a"],VCard:Y["a"],VCardActions:P["a"],VCardText:P["b"],VCol:it["a"],VContainer:st["a"],VDivider:m["a"],VIcon:p["a"],VRow:lt["a"],VSlideXReverseTransition:ct["c"],VSpacer:q["a"],VSubheader:ut["a"],VTextField:F["a"],VTextarea:dt["a"],VTooltip:vt["a"]}),r["a"].use(R["a"]);var pt=[{path:"/",name:"Home",component:N},{path:"/RegisterUser",name:"register",component:mt},{path:"/Login",name:"login",component:$},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],gt=new R["a"]({mode:"history",base:"/",routes:pt}),bt=gt,ht=a("2f62");r["a"].use(ht["a"]);var wt=new ht["a"].Store({state:{},mutations:{},actions:{},modules:{}}),xt=a("f309");r["a"].use(xt["a"]);var Et=new xt["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:bt,store:wt,vuetify:Et,render:function(t){return t(k)}}).$mount("#app")},"9d8d":function(t,e,a){},bb92:function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return l}));var r=a("260b"),n=a("e71f"),o=a("ea7b"),i=Object(r["a"])({apiKey:"AIzaSyBMbCM0cYO6sKg1PXUPCm1bFL4BWN0oJgo",authDomain:"covid-19-765ef.firebaseapp.com",projectId:"covid-19-765ef",storageBucket:"covid-19-765ef.appspot.com",messagingSenderId:"53922289634",appId:"1:53922289634:web:eb72879e30b57ce5328bbb",measurementId:"G-8YNM4BCK04"}),s=Object(n["f"])(i),l=Object(o["b"])(i)},d6db:function(t,e,a){"use strict";a("e67a")},e67a:function(t,e,a){}});
//# sourceMappingURL=app.2a78eb64.js.map