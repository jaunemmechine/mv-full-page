(function(e){function t(t){for(var i,r,o=t[0],l=t[1],c=t[2],h=0,g=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&g.push(a[r][0]),a[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(g.length)g.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},a={app:0},s=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/v-full-page/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0dce":function(e,t,n){"use strict";var i=n("a4db"),a=n.n(i);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],r=(n("5c0b"),n("2877")),o={},l=Object(r["a"])(o,a,s,!1,null,null,null),c=l.exports,u=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("mv-full-page",{attrs:{isPointer:!0,pointerPos:"right",isV:e.isV,pages:4,page:e.currentPage,bgArr:e.bgArr,isCache:!1},on:{"update:page":function(t){e.currentPage=t}},scopedSlots:e._u([{key:"page1",fn:function(){return[n("div",{staticClass:"page1"},[n("h2",[e._v("mv-full-page")]),n("h3",[e._v("一款兼容PC端移动端的Vue滑动组件")]),n("h3",[e._v("示例")]),n("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInLeft"},expression:"{\n            name: 'bounceInLeft',\n          }"}]},[e._v("页面1 第一个动画")]),n("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInLeft",delay:500},expression:"{\n            name: 'bounceInLeft',\n            delay: 500,\n          }"}]},[e._v("页面1 第二个动画")]),n("p",[e._v("移动端局部列表滚动demo")]),n("div",{staticClass:"sub_scroll-test-box",attrs:{"data-scroll":"true"}},e._l(99,(function(t){return n("p",{key:t},[e._v("滚动测试数据")])})),0),n("p",[n("button",{on:{click:function(t){e.isV=!e.isV}}},[e._v("切换滑动方向(默认垂直方向)")])]),n("p",[n("a",{staticStyle:{color:"#F36B91"},attrs:{href:"https://gitee.com/null_639_5368/v-full-page"}},[e._v("码云")])]),n("p",[n("a",{staticStyle:{color:"#6751C1"},attrs:{href:"https://www.npmjs.com/package/mv-full-page"}},[e._v("npm")])])])]},proxy:!0},{key:"page2",fn:function(){return[n("div",{staticClass:"page2"},[n("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInUp"},expression:"{\n            name: 'bounceInUp',\n          }"}],staticClass:"block",staticStyle:{"margin-top":"250px"}},[e._v("页面2 第一个动画")])])]},proxy:!0},{key:"page3",fn:function(){return[n("div",{staticClass:"page3"},[n("p",{directives:[{name:"animate",rawName:"v-animate",value:{name:"bounceInRight"},expression:"{\n            name: 'bounceInRight',\n          }"}],staticClass:"block"},[e._v("页面3 第一个动画")])])]},proxy:!0},{key:"page4",fn:function(){return[n("div",{staticClass:"page4"},[e._v("4")])]},proxy:!0}])})],1)},g=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"fullPage",staticClass:"full-page-wrapper",style:{position:e.position,height:e.height,width:e.width}},[n("div",{ref:"allPage",staticClass:"all-page"},[e._l(e.pagesArr,(function(t,i){return[n("div",{key:i,ref:"page"+t,refInFor:!0,staticClass:"page",class:{floatLeft:!e.isV},style:{height:e.fullHeight+"px",width:e.fullWidth+"px","background-color":e.bgArr[i].isBg?"":e.bgArr[i],"background-image":e.bgArr[i].isBg?"url("+e.bgArr[i].src+")":""}},[e.isCache?[t.isShow?n("div",{staticClass:"page-box"},[e._t("page"+t.page)],2):e._e()]:[e.currentPage==t.page?n("div",{staticClass:"page-box"},[e._t("page"+t.page)],2):e._e()]],2)]}))],2),e.isPointer?n("div",{staticClass:"pointer-wrapper",class:e.pointerPos},[n("ul",e._l(e.pages,(function(t){return n("li",{key:t,class:{active:e.page==t},on:{click:function(n){e.currentPage=t}}})})),0)]):e._e()])},f=[],d=(n("99af"),n("4160"),n("c975"),n("a9e3"),n("159b"),0),v=!1,m=!1;try{var b=Object.defineProperty({},"passive",{get:function(){m=!0}});window.addEventListener("test",null,b)}catch(F){}var P=function(e){var t=e.target,n=window.innerWidth/window.document.documentElement.clientWidth;if(!(e.touches.length>1||1!==n)){while(t!==document.body&&t!==document){var i=window.getComputedStyle(t);if(!i)break;if("INPUT"===t.nodeName&&"range"===t.getAttribute("type"))return;var a=i.getPropertyValue("-webkit-overflow-scrolling"),s=i.getPropertyValue("overflow-y"),r=parseInt(i.getPropertyValue("height"),10),o="touch"===a&&("auto"===s||"scroll"===s),l=t.scrollHeight>t.offsetHeight;if(o&&l){var c=e.touches?e.touches[0].screenY:e.screenY,u=d<=c&&0===t.scrollTop,h=d>=c&&t.scrollHeight-t.scrollTop===r;return void((u||h)&&e.preventDefault())}t=t.parentNode}e.preventDefault()}},w=function(e){d=e.touches?e.touches[0].screenY:e.screenY},y=function(){window.addEventListener("touchstart",w,!!m&&{passive:!1}),window.addEventListener("touchmove",P,!!m&&{passive:!1}),v=!0},_=function(){window.removeEventListener("touchstart",w,!1),window.removeEventListener("touchmove",P,!1),v=!1},x=function(){return v},E=document.createElement("div");document.documentElement.appendChild(E),E.style.WebkitOverflowScrolling="touch";var S="getComputedStyle"in window&&"touch"===window.getComputedStyle(E)["-webkit-overflow-scrolling"];document.documentElement.removeChild(E),S&&y();var C={enable:y,disable:_,isEnabled:x},L=C,$=function(e,t,n){var i;return function(){var a=this,s=arguments;if(i&&clearTimeout(i),n){var r=!i;i=setTimeout((function(){i=null}),t),r&&e.apply(a,s)}else i=setTimeout((function(){e.apply(a,s)}),t)}},k=function(){return-1!=window.navigator.userAgent.toLowerCase().indexOf("firefox")},O={name:"MvFullPage",props:{isPointer:{type:Boolean,default:!0},pointerPos:{type:String,default:"right"},position:{type:String,default:"fixed"},width:{type:String,default:"100%"},height:{type:String,default:"100%"},isV:{type:Boolean,default:!0},isCache:{type:Boolean,default:!0},pages:{type:Number,default:4},page:{type:Number,default:1},bgArr:{type:Array,default:function(){return[]}}},data:function(){return{pagesArr:[],isPc:!1,fullHeight:800,fullWidth:1920,maxY:0,maxX:0,startY:0,endY:0,startX:0,endX:0,currentPage:1,isRoll:!1,isUp:!1,subScrollEl:null}},computed:{},created:function(){this.isPc=this.isPCFn(),this.isPc||L.enable(),this.pagesArr.length=0;for(var e=0;e<this.pages;e++)this.pagesArr.push({page:e+1,isShow:0==e})},mounted:function(){this.initPageWH(),this.initPageListener()},watch:{page:{handler:function(e){var t=this;this.currentPage=e,this.$nextTick((function(){var n=-(e-1)*(t.isV?t.fullHeight:t.fullWidth);t.rollPage(n)}))},immediate:!0},currentPage:function(e){this.$emit("update:page",e)}},methods:{isIOS:function(){var e=navigator.userAgent;return e.indexOf("iPhone")>-1},isPCFn:function(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!0,i=0;i<t.length;i++)if(e.indexOf(t[i])>0){n=!1;break}return n},initPageWH:function(){this.fullHeight=this.$refs.fullPage.clientHeight,this.fullWidth=this.$refs.fullPage.clientWidth,this.maxY=this.pages*this.fullHeight,this.maxX=this.pages*this.fullWidth,this.$refs.allPage.style.height=this.fullHeight*this.pages+"px",this.$refs.allPage.style.width=this.fullWidth*this.pages+"px"},initPageListener:function(){this.isPc?(window.onmousewheel=document.onmousewheel=this.pcRoll,k()&&document.addEventListener("DOMMouseScroll",this.pcRoll,!1)):(this.$refs.allPage.addEventListener("touchstart",this.pageStart,!1),this.$refs.allPage.addEventListener("touchmove",this.pageMove,!1),this.$refs.allPage.addEventListener("touchend",this.pageEnd,!1))},removePageListener:function(){this.isPc?(window.onmousewheel=document.onmousewheel=null,k()&&document.removeEventListener("DOMMouseScroll",this.pcRoll,!1)):(L.disable(),this.$refs.allPage.removeEventListener("touchstart"),this.$refs.allPage.removeEventListener("touchmove"),this.$refs.allPage.removeEventListener("touchend"))},pcRoll:$((function(e){e.deltaY>0||e.detail>0||e.wheelDelta<0?this.switchPage(!0):this.switchPage(!1)}),100,!0),pageStart:function(e){var t=this;e.path.forEach((function(e){e.dataset&&"true"==e.dataset.scroll&&(t.subScrollEl=e)})),t.subScrollEl?L.disable():L.enable(),this.startY=e.changedTouches[0].pageY,this.startX=e.changedTouches[0].pageX},pageMove:function(e){var t=this;t.subScrollEl&&0==t.subScrollEl.scrollTop&&e.changedTouches[0].pageY-this.startY>0&&L.enable()},pageEnd:function(e){if(this.subScrollEl)return this.subScrollEl=null,void L.enable();this.isV?e.changedTouches[0].pageY-this.startY<-50?(this.startY=null,this.switchPage(!0)):e.changedTouches[0].pageY-this.startY>50&&(this.startY=null,this.switchPage(!1)):e.changedTouches[0].pageX-this.startX<-50?(this.startX=null,this.switchPage(!0)):e.changedTouches[0].pageX-this.startX>50&&(this.startX=null,this.switchPage(!1))},rollPage:function(e){var t="translate".concat(this.isV?"Y":"X","(").concat(e,"px)");this.$refs.allPage.style.transform=t},switchPage:function(){var e,t=this,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.$refs.allPage&&!this.isRoll)if(n&&this.currentPage<this.pages){this.isRoll=!0,this.pagesArr[this.currentPage+1-1].isShow=!0,e=-this.currentPage*(this.isV?this.fullHeight:this.fullWidth);var i="translate".concat(this.isV?"Y":"X","(").concat(e,"px)");this.$refs.allPage.style.transform=i;var a=this,s=function e(){setTimeout((function(){a.isRoll=!1}),100),a.currentPage++,t.$refs.allPage.removeEventListener("transitionend",e)};this.$refs.allPage.addEventListener("transitionend",s)}else if(!n&&this.currentPage>1){this.isRoll=!0,e=-(this.currentPage-1)*(this.isV?this.fullHeight:this.fullWidth)+(this.isV?this.fullHeight:this.fullWidth);var r="translate".concat(this.isV?"Y":"X","(").concat(e,"px)");this.$refs.allPage.style.transform=r;var o=this,l=function e(){setTimeout((function(){o.isRoll=!1}),100),o.currentPage--,t.$refs.allPage.removeEventListener("transitionend",e)};this.$refs.allPage.addEventListener("transitionend",l)}}},destroyed:function(){this.removePageListener()}},Y=O,T=(n("5c87"),Object(r["a"])(Y,p,f,!1,null,"ed989282",null)),A=T.exports,V={name:"home",components:{MvFullPage:A},data:function(){return{isV:!0,currentPage:1,bgArr:[{isBg:!0,src:n("57ae")},{isBg:!0,src:n("e26c")},{isBg:!0,src:n("c3be")},{isBg:!0,src:n("bacc")}]}}},j=V,W=(n("0dce"),Object(r["a"])(j,h,g,!1,null,"56941bda",null)),H=W.exports;i["a"].use(u["a"]);var X=[{path:"/",name:"home",component:H}],I=new u["a"]({routes:X}),M=I,R=n("2f62");i["a"].use(R["a"]);var B=new R["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("77ed"),n("b0c0");function N(e){e.directive("animate",{inserted:function(e,t){var n=t.value,i=" animated ".concat(n.name);e.className+=i,e.style.animationDelay=n.delay+"ms"}})}var D={install:N};i["a"].use(D),i["a"].config.productionTip=!1,new i["a"]({router:M,store:B,render:function(e){return e(c)}}).$mount("#app")},"57ae":function(e,t,n){e.exports=n.p+"img/bg_img_1.84d853fb.jpg"},"5c0b":function(e,t,n){"use strict";var i=n("9c0c"),a=n.n(i);a.a},"5c87":function(e,t,n){"use strict";var i=n("dc4c"),a=n.n(i);a.a},"9c0c":function(e,t,n){},a4db:function(e,t,n){},bacc:function(e,t,n){e.exports=n.p+"img/bg_img_4.6da52f60.jpg"},c3be:function(e,t,n){e.exports=n.p+"img/bg_img_3.6103ba84.jpg"},dc4c:function(e,t,n){},e26c:function(e,t,n){e.exports=n.p+"img/bg_img_2.dbf472ae.jpg"}});
//# sourceMappingURL=app.2160effa.js.map