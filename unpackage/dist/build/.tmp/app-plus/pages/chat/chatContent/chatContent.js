(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/chatContent/chatContent"],{"43ce":function(t,n,e){},"45d6":function(t,n,e){"use strict";var a,o=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return a})},"4c73":function(t,n,e){"use strict";e.r(n);var a=e("765d"),o=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);n["default"]=o.a},"765d":function(t,n,e){"use strict";(function(t,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=u(e("9e92")),c=u(e("1d78"));function u(t){return t&&t.__esModule?t:{default:t}}var r=o.default.RongIMClient,s="pwe86ga5p4d36",i=o.default.ConversationType.PRIVATE,f="ZU5g/RRMEU2RUhfRT95FS0roF+1VR/NPRNBHO7cp39u44UVUi937DYiUHhlkx7cZdusSShxRe04zVZ0awUjVo2Y1rIY6tpSV",l={data:function(){return{targetId:"",linkList:[],userMsg:{name:"",portraitUri:"https://kxsx-front-pic.oss-cn-beijing.aliyuncs.com/pic/20190815/156587576839.png"}}},onLoad:function(n){var e=this,u=n.targetId;e.targetId=u,t.setNavigationBarTitle({title:u}),r.init(s,null,{protobuf:c.default}),r.setConnectionStatusListener({onChanged:function(t){switch(t){case o.default.ConnectionStatus.CONNECTED:a("log","链接成功"," at pages\\chat\\chatContent\\chatContent.vue:50");break;case o.default.ConnectionStatus.CONNECTING:a("log","正在链接"," at pages\\chat\\chatContent\\chatContent.vue:53");break;case o.default.ConnectionStatus.DISCONNECTED:a("log","断开连接"," at pages\\chat\\chatContent\\chatContent.vue:56");break;case o.default.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:a("log","其他设备登录, 本端被踢"," at pages\\chat\\chatContent\\chatContent.vue:59");break;case o.default.ConnectionStatus.DOMAIN_INCORRECT:a("log","域名不正确, 请至开发者后台查看安全域名配置"," at pages\\chat\\chatContent\\chatContent.vue:62");break;case o.default.ConnectionStatus.NETWORK_UNAVAILABLE:a("log","网络不可用, 此时可调用 reconnect 进行重连"," at pages\\chat\\chatContent\\chatContent.vue:65");break;default:a("log","链接状态为",t," at pages\\chat\\chatContent\\chatContent.vue:68");break}}}),r.setOnReceiveMessageListener({onReceived:function(t){t.content;var n=0,c=20;o.default.RongIMClient.getInstance().getHistoryMessages(i,u,n,c,{onSuccess:function(t,n){e.userMsg.name=t[0].content.targetId;for(var o=[],c=0;c<t.length;c++)o.push(t[c].content);e.linkList=o,a("log","获取历史消息成功",t," at pages\\chat\\chatContent\\chatContent.vue:92")},onError:function(t){a("log","获取历史消息失败",t," at pages\\chat\\chatContent\\chatContent.vue:96")}})}}),r.connect(f,{onSuccess:function(t){a("log","连接成功, 用户 id 为",t," at pages\\chat\\chatContent\\chatContent.vue:104")},onTokenIncorrect:function(){a("log","连接失败, 失败原因: token 无效"," at pages\\chat\\chatContent\\chatContent.vue:108")},onError:function(t){var n="";switch(t){case o.default.ErrorCode.TIMEOUT:n="链接超时";break;case o.default.ConnectionState.UNACCEPTABLE_PAROTOCOL_VERSION:n="不可接受的协议版本";break;case o.default.ConnectionState.IDENTIFIER_REJECTED:n="appkey 不正确";break;case o.default.ConnectionState.SERVER_UNAVAILABLE:n="服务器不可用";break;default:n=t;break}a("log","连接失败, 失败原因: ",n," at pages\\chat\\chatContent\\chatContent.vue:129")}});var l=0,h=20;o.default.RongIMClient.getInstance().getHistoryMessages(i,u,l,h,{onSuccess:function(t,n){e.userMsg.name=t[0].content.targetId;for(var o=[],c=0;c<t.length;c++)o.push(t[c].content);e.linkList=o,a("log",e.linkList," at pages\\chat\\chatContent\\chatContent.vue:147")},onError:function(t){a("log","获取历史消息失败",t," at pages\\chat\\chatContent\\chatContent.vue:151")}})},onUnload:function(){},mounted:function(){},methods:{},beforeDestroy:function(){var t=this.targetId;r.getInstance().clearUnreadCount(i,t,{onSuccess:function(){a("log","清除未读消息成功"," at pages\\chat\\chatContent\\chatContent.vue:172")},onError:function(t){a("log","清除未读消息数错误码"," at pages\\chat\\chatContent\\chatContent.vue:176")}})},beforeMount:function(){a("log","挂载前"," at pages\\chat\\chatContent\\chatContent.vue:181"),r.init(s,null,{protobuf:c.default})}};n.default=l}).call(this,e("6e42")["default"],e("0de9")["default"])},"7d6f":function(t,n,e){"use strict";(function(t){e("907b"),e("921b");a(e("66fd"));var n=a(e("c40b"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"7ffc":function(t,n,e){"use strict";var a=e("43ce"),o=e.n(a);o.a},c40b:function(t,n,e){"use strict";e.r(n);var a=e("45d6"),o=e("4c73");for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);e("7ffc");var u,r=e("f0c5"),s=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=s.exports}},[["7d6f","common/runtime","common/vendor"]]]);