(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-list-list"],{"07c4":function(t,i,e){"use strict";var a=e("4ea4");e("e25e"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96dc");var n=a(e("cfdc")),s={name:"list",components:{musichead:n.default},data:function(){return{getList:[],getImage:"",yeshu:""}},onLoad:function(t){this.getList=this.$store.state.songs[parseInt(t.listId)],this.yeshu=t.listId,this.getImage=this.$store.state.index_home[this.getList.id]},mounted:function(){},methods:{handleToDetail:function(t){uni.navigateTo({url:"/pages/detail/detail?list="+this.yeshu+"&ids="+t})}}};i.default=s},"0dbd":function(t,i,e){"use strict";e.r(i);var a=e("c692"),n=e("79ca");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("c4d2");var c,o=e("f0c5"),d=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"51ecf016",null,!1,a["a"],c);i["default"]=d.exports},"1a34":function(t,i,e){t.exports=e.p+"static/img/wangyiyun.91f6a196.png"},4715:function(t,i,e){var a=e("66df");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("56b94642",a,!0,{sourceMap:!1,shadowMode:!1})},5513:function(t,i){t.exports="data:image/png;base64,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"},"66df":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".container[data-v-51ecf016]{width:100%;height:100%;overflow:hidden;margin-top:%?100?%}.list-head[data-v-51ecf016]{margin-top:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;height:%?300?%}.list-head-img[data-v-51ecf016]{margin:0 %?40?%\n\t/* flex: 2; */}.list-head-img > uni-image[data-v-51ecf016]{width:%?300?%;height:%?300?%;border-radius:%?40?%}.list-head-img > uni-text[data-v-51ecf016]{position:absolute;margin-left:%?-120?%}.list-head-text[data-v-51ecf016]{\n\t/* flex: 3; */}.list-head-text uni-view[data-v-51ecf016]:nth-child(1){color:#fff;font-size:%?34?%}.list-head-text uni-view[data-v-51ecf016]:nth-child(2){display:-webkit-box;display:-webkit-flex;display:flex;margin:%?20?% 0;font-size:%?24?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.list-head-text uni-view:nth-child(2) uni-image[data-v-51ecf016]{width:%?54?%;height:%?54?%;border-radius:50%;margin-right:%?14?%}.list-head-text uni-view[data-v-51ecf016]:nth-child(3){line-height:%?34?%;font-size:%?22?%}\n/* 分享按钮 */.list-share[data-v-51ecf016]{width:%?330?%;height:%?74?%;margin:0 auto;background:#000;border-radius:%?37?%;color:#fff;text-align:center;line-height:%?74?%;font-size:%?28?%}\n/* 歌曲目录 */.list-music[data-v-51ecf016]{background-color:#fff;border-top-left-radius:%?50?%;border-top-right-radius:%?50?%;margin-top:%?40?%;overflow:hidden}.list-music-head[data-v-51ecf016]{height:%?50?%;margin:%?30?% 0 %?70?% %?22?%}.list-music-head uni-text[data-v-51ecf016]:nth-child(1){height:%?50?%;font-size:%?50?%}.list-music-head uni-text[data-v-51ecf016]:nth-child(2){font-size:%?30?%;margin:0 %?10?% 0 %?26?%}.list-music-head uni-text[data-v-51ecf016]:nth-child(3){font-size:%?26?%;color:#b2b2b2}.list-music-item[data-v-51ecf016]{display:-webkit-box;display:-webkit-flex;display:flex;margin:0 %?32?% %?66?% %?46?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#959595}.list-music-top[data-v-51ecf016]{width:%?50?%;font-size:%?50?%;line-height:%?30?%}.list-music-song[data-v-51ecf016]{padding-left:%?20?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.list-music-song uni-view[data-v-51ecf016]:nth-child(1){font-size:%?28?%;color:#000;width:%?400?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.list-music-song uni-view[data-v-51ecf016]:nth-child(2){display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?20?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?400?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.list-music-song uni-view:nth-child(2) uni-image[data-v-51ecf016]{width:%?32?%;height:%?20?%;margin-right:%?10?%}.list-music-item uni-text[data-v-51ecf016]{font-size:%?50?%;color:#c7c7c7}",""]),t.exports=i},"79ca":function(t,i,e){"use strict";e.r(i);var a=e("07c4"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},c4d2:function(t,i,e){"use strict";var a=e("4715"),n=e.n(a);n.a},c692:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{},[a("v-uni-view",{staticClass:"fixbg",style:{backgroundImage:"url("+this.getImage.image+")"}}),a("musichead",{attrs:{title:this.getImage.image_name,icon:!0,backgroundImage:this.getImage.image}}),a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"list-head"},[a("v-uni-view",{staticClass:"list-head-img"},[a("v-uni-image",{attrs:{src:this.getImage.image,mode:"widthFix"}}),a("v-uni-text",{staticClass:"iconfont icon-yousanjiao"},[t._v("1000")])],1),a("v-uni-view",{staticClass:"list-head-text"},[a("v-uni-view",[t._v(t._s(this.getImage.image_name))]),a("v-uni-view",[a("v-uni-image",{attrs:{src:e("1a34"),mode:"widthFix"}}),t._v("网易云音乐")],1),a("v-uni-view",[t._v("你好"),a("v-uni-text",{staticClass:"iconfont icon-yousanjiao"})],1)],1)],1),a("v-uni-view",{staticClass:"list-music"},[a("v-uni-view",{staticClass:"list-music-head"},[a("v-uni-text",{staticClass:"iconfont icon-bofang1"}),a("v-uni-text",[t._v("播放全部")]),a("v-uni-text",[t._v("(共"+t._s(this.getList.children.length)+"首)")])],1),t._l(this.getList.children,(function(i,n){return a("v-uni-view",{key:n,staticClass:"list-music-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleToDetail(i.id)}}},[a("v-uni-view",{staticClass:"list-music-top"},[t._v(t._s(i.id))]),a("v-uni-view",{staticClass:"list-music-song"},[a("v-uni-view",[t._v(t._s(i.song_name))]),a("v-uni-view",[a("v-uni-image",{attrs:{src:e("317c")}}),a("v-uni-image",{attrs:{src:e("5513")}}),t._v(t._s(i.song_writer))],1)],1),a("v-uni-text",{staticClass:"iconfont icon-bofang1"})],1)}))],2)],1)],1)},s=[]}}]);