(function(e){function t(t){for(var a,s,o=t[0],u=t[1],c=t[2],f=0,p=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/v-full-page/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1699:function(e,t,n){"use strict";var a=n("7ad7"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],s=(n("5c0b"),n("2877")),o={},u=Object(s["a"])(o,i,r,!1,null,null,null),c=u.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("v-full-page",{attrs:{pages:4,page:e.currentPage,bgArr:e.bgArr},on:{"update:page":function(t){e.currentPage=t}},scopedSlots:e._u([{key:"page1",fn:function(){return[n("div",{staticClass:"page1"},[n("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInLeft"},expression:"{\n          name:'bounceInLeft'\n        }"}]},[e._v("页面1 第一个动画")]),n("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInLeft",delay:1},expression:"{\n          name:'bounceInLeft',\n          delay:1\n        }"}]},[e._v("页面1 第二个动画")])])]},proxy:!0},{key:"page2",fn:function(){return[n("div",{staticClass:"page2"},[n("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInUp"},expression:"{\n          name:'bounceInUp'\n        }"}],staticClass:"block"},[e._v("页面2 第一个动画")])])]},proxy:!0},{key:"page3",fn:function(){return[n("div",{staticClass:"page3"},[n("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInRight"},expression:"{\n          name:'bounceInRight'\n        }"}],staticClass:"block"},[e._v("页面3 第一个动画")])])]},proxy:!0},{key:"page4",fn:function(){return[n("div",{staticClass:"page4"},[e._v("4")])]},proxy:!0}])})],1)},p=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"fullPage",staticClass:"full-page-wrapper"},[n("div",{ref:"allPage",staticClass:"all-page"},[e._l(e.pages,(function(t,a){return[n("div",{key:t,ref:"page"+t,refInFor:!0,staticClass:"page",style:{height:e.fullHeight+"px",background:e.bgArr[a]},attrs:{id:"page-"+t,"data-index":t}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.currentPage==t,expression:"currentPage==item"}],staticClass:"page-box"},[e._t("page"+t)],2)])]}))],2)])},g=[],d=(n("c975"),n("a9e3"),n("fa78")),v=n.n(d),m=function(e,t,n){var a;return function(){var i=this,r=arguments;if(a&&clearTimeout(a),n){var s=!a;a=setTimeout((function(){a=null}),t),s&&e.apply(i,r)}else a=setTimeout((function(){e.apply(i,r)}),t)}},P={name:"VFullPage",props:{pages:{type:Number,default:4},page:{type:Number,default:1},bgArr:{type:Array,default:function(){return[]}}},data:function(){return{isPc:!1,fullHeight:800,maxY:0,startY:0,endY:0,currentPage:2,isRoll:!1,isUp:!1,isUpdate:!0}},computed:{},created:function(){this.isPc=this.isPCFn(),this.isPc||v.a.enable()},mounted:function(){this.fullHeight=this.$refs.fullPage.clientHeight,this.maxY=this.pages*this.fullHeight,this.$refs.allPage.style.height=this.fullHeight*this.pages+"px",this.initPageListener()},watch:{page:{handler:function(e){var t=this;this.currentPage=e,this.$nextTick((function(){t.rollPage(-(e-1)*t.fullHeight)}))},immediate:!0},currentPage:function(e){this.$emit("update:page",e)}},methods:{isIOS:function(){var e=navigator.userAgent;return e.indexOf("iPhone")>-1},isPCFn:function(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!0,a=0;a<t.length;a++)if(e.indexOf(t[a])>0){n=!1;break}return n},initPageListener:function(){this.isPc?window.onmousewheel=document.onmousewheel=m(this.pcRoll,500,!0):(document.addEventListener("touchstart",this.pageStart,!1),document.addEventListener("touchmove",this.pageMove,!1),document.addEventListener("touchend",this.pageEnd,!1))},pcRoll:function(e){e.deltaY>0?(console.log("滚动下"),this.switchPage(!0)):(this.switchPage(!1),console.log("滚动上"))},removePageListener:function(){document.removeEventListener("touchstart"),document.removeEventListener("touchmove"),document.removeEventListener("touchend")},pageStart:function(e){console.log("触摸开始"),this.startY=e.changedTouches[0].pageY,console.log(e.changedTouches[0].pageY)},pageMove:function(e){console.log("触摸移动中..."),e.changedTouches[0].pageY-this.startY<-50?(this.isRoll=!0,this.isUp=!0):e.changedTouches[0].pageY-this.startY>50&&(this.isRoll=!0,this.isUp=!1)},pageEnd:function(){console.log("触摸结束"),this.isRoll&&this.isUpdate&&(this.isUp?this.switchPage(!0):this.switchPage(!1),this.isRoll=!1)},rollPage:function(e){this.$refs.allPage.style.transform="translateY(".concat(e,"px)")},switchPage:function(){var e,t=this,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.$refs.allPage)if(this.isUpdate=!1,n&&this.currentPage<this.pages){e=-this.currentPage*this.fullHeight,this.$refs.allPage.style.transform="translateY(".concat(e,"px)");var a=this;setTimeout((function(){n?a.currentPage++:a.currentPage--,t.isUpdate=!0}),800)}else if(!n&&this.currentPage>1){e=-(this.currentPage-1)*this.fullHeight+this.fullHeight,this.$refs.allPage.style.transform="translateY(".concat(e,"px)");var i=this;setTimeout((function(){n?i.currentPage++:i.currentPage--,i.isUpdate=!0}),800)}}},destroyed:function(){this.isPc?window.onmousewheel=document.onmousewheel=null:(v.a.disable(),this.removePageListener())}},b=P,y=(n("e6b4"),Object(s["a"])(b,h,g,!1,null,"0dfe2f4e",null)),w=y.exports,x={name:"home",components:{VFullPage:w},data:function(){return{currentPage:1,bgArr:["cadetblue","orange","pink","green"]}}},_=x,O=(n("1699"),Object(s["a"])(_,f,p,!1,null,"08141000",null)),Y=O.exports;a["a"].use(l["a"]);var k=[{path:"/",name:"home",component:Y}],L=new l["a"]({routes:k}),C=L,T=n("2f62");a["a"].use(T["a"]);var j=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("77ed"),n("b0c0");function S(e){e.directive("animate",{inserted:function(e,t){var n=t.value,a=" animated ".concat(n.name);e.className+=a,e.style.animationDelay=n.delay+"s",console.log(t.value)}})}var $={install:S};w.install=function(e){e.use(w)};var E=w;a["a"].use($),a["a"].use(E),a["a"].config.productionTip=!1,new a["a"]({router:C,store:j,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},"7ad7":function(e,t,n){},"9c0c":function(e,t,n){},e445:function(e,t,n){},e6b4:function(e,t,n){"use strict";var a=n("e445"),i=n.n(a);i.a}});
//# sourceMappingURL=app.f541f6a1.js.map