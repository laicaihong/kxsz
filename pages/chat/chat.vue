<template>
	<view class="">
		<!-- <view class="">
			<text class="userMsg">用户头像：</text>
			<image :src="userMsg.portraitUri" mode="widthFix" class="userImg"></image>
		</view>
		<view class="">
			<text class="userMsg">用户昵称：{{userMsg.name}}</text>
		</view> -->
		<!-- 下面是好友发的信息列表 -->
		<view class="link">
			<view class="linkList" v-for="(data,index) in linkList" :key="index">
				<navigator :url="'/pages/chat/chatContent/chatContent?targetId='+data.targetId">
					<image src="https://kxsx-front-pic.oss-cn-beijing.aliyuncs.com/pic/20190815/156587576839.png" mode="aspectFill"
					 class="linkImage"></image>
					<text class="linkName">昵称：{{data.targetId}}</text>
					<view class="linkMsg">
						{{data.latestMessage.content.content}}
					</view>
					<text class="listTime">{{data.sentTime}}</text>
					<text class="listUn" v-if="data.unreadMessageCount!=0">{{data.unreadMessageCount>99? '99' : data.unreadMessageCount}}</text>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import RongIMLib from '../../rongyunIM/rongyun.js'
	import Protobuf from '../../rongyunIM/protobuf-2.3.5.min.js'
	var RongIMClient = RongIMLib.RongIMClient;
	var appkey = 'pwe86ga5p4d36'
	var userId = '924756420'
	
	export default {
		data() {
			return {
				userMsg: {
					name: '空白',
					userId: '924756420',
					portraitUri: 'https://kxsx-front-pic.oss-cn-beijing.aliyuncs.com/pic/20190815/156587576839.png'
				},
				linkList: []
			}
		},
		onLoad() {
			var _self = this;
			var timer = new Date()
			var token = 'ZU5g/RRMEU2RUhfRT95FS0roF+1VR/NPRNBHO7cp39u44UVUi937DYiUHhlkx7cZdusSShxRe04zVZ0awUjVo2Y1rIY6tpSV'
			//初始化
			RongIMClient.init(appkey, null, {
				protobuf: Protobuf
			});
			//状态监听器
			RongIMClient.setConnectionStatusListener({
				onChanged: function(status) {
					// status 标识当前连接状态
					switch (status) {
						case RongIMLib.ConnectionStatus.CONNECTED:
							console.log('链接成功');
							break;
						case RongIMLib.ConnectionStatus.CONNECTING:
							console.log('正在链接');
							break;
						case RongIMLib.ConnectionStatus.DISCONNECTED:
							console.log('断开连接');
							break;
						case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
							console.log('其他设备登录, 本端被踢');
							break;
						case RongIMLib.ConnectionStatus.DOMAIN_INCORRECT:
							console.log('域名不正确, 请至开发者后台查看安全域名配置');
							break;
						case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
							console.log('网络不可用, 此时可调用 reconnect 进行重连');
							break;
						default:
							console.log('链接状态为', status);
							break;
					}
				}
			});
			//消息监听器,当有新的消息在进行刷新
			RongIMClient.setOnReceiveMessageListener({
				// 接收到的消息
				onReceived: function(message) {
					var conversationTypes = [RongIMLib.ConversationType.PRIVATE];
					var count = 150;
					RongIMClient.getInstance().getConversationList({
						onSuccess: function(list) {
							//把消息的时间戳转换成时间格式
							for (let i = 0; i < list.length; i++) {
								list[i].sentTime = (_self.formatTime(list[i].sentTime))
							}
							_self.linkList = list;
						},
						onError: function(error) {
							console.log('获取会话列表失败', error);
						}
					}, conversationTypes, count);
				}
			});
			//连接，登录
			RongIMClient.connect(token, {
				onSuccess: function(userId) {
					console.log('连接成功, 用户 id 为', userId);
					// 连接已成功, 此时可通过 getConversationList 获取会话列表并展示
				},
				onTokenIncorrect: function() {
					console.log('连接失败, 失败原因: token 无效');
				},
				onError: function(errorCode) {
					var info = '';
					switch (errorCode) {
						case RongIMLib.ErrorCode.TIMEOUT:
							info = '链接超时';
							break;
						case RongIMLib.ConnectionState.UNACCEPTABLE_PAROTOCOL_VERSION:
							info = '不可接受的协议版本';
							break;
						case RongIMLib.ConnectionState.IDENTIFIER_REJECTED:
							info = 'appkey 不正确';
							break;
						case RongIMLib.ConnectionState.SERVER_UNAVAILABLE:
							info = '服务器不可用';
							break;
						default:
							info = errorCode;
							break;
					}
					console.log('连接失败, 失败原因: ', info);
				}
			});
			//获取消息列表
			var conversationTypes = [RongIMLib.ConversationType.PRIVATE];
			var count = 150;
			RongIMClient.getInstance().getConversationList({
				onSuccess: function(list) {
					console.log(list);
					//把消息的时间戳转换成时间格式
					for (let i = 0; i < list.length; i++) {
						list[i].sentTime = (_self.formatTime(list[i].sentTime))
					}
					_self.linkList = list;
				},
				onError: function(error) {
					console.log('获取会话列表失败', error);
				}
			}, conversationTypes, count);
			
		},

		methods: {
			//消息的时间戳转换成时间格式
			formatTime: function(timestamp) {
				var date = new Date(timestamp * 1); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
				var Y = date.getFullYear() + '-';
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				var D = date.getDate();
				var h = date.getHours() + ':';
				var m = date.getMinutes();
				//当最后一条消息的时间与现在的时间相差一天的话，显示月-日，否则显示时-分
				if (new Date().getTime() - timestamp > 86400000) {
					return M + D;
				} else {
					return h + m;
				}
			}
		},
		mounted() {

		},
		beforeDestroy(){
			
		}
	}
</script>

<style>
	@import "./chat.css";
</style>
