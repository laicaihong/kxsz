function chatLoad(){
	var RongIMLib = require('../../rongyunIM/rongyun.js');
	var Protobuf = require('../../rongyunIM/protobuf-2.3.5.min.js');
	var RongIMClient = RongIMLib.RongIMClient;
	var timer = new Date()
	var appkey = 'pwe86ga5p4d36'
	var userId = '924756420'
	var token = 'ZU5g/RRMEU2RUhfRT95FS0roF+1VR/NPRNBHO7cp39u44UVUi937DYiUHhlkx7cZdusSShxRe04zVZ0awUjVo2Y1rIY6tpSV'
	//初始化
	RongIMClient.init(appkey, null, {
		protobuf: Protobuf
	})
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
	//消息监听器
	RongIMClient.setOnReceiveMessageListener({
		// 接收到的消息
		onReceived: function(message) {
			var messageContent = message.content;
			// 判断消息类型
			switch (message.messageType) {
				case RongIMClient.MessageType.TextMessage: // 文字消息
					console.log('文字内容', messageContent.content);
					break;
				case RongIMClient.MessageType.ImageMessage: // 图片消息
					console.log('图片缩略图 base64', messageContent.content);
					console.log('原图 url', messageContent.imageUri);
					break;
				case RongIMClient.MessageType.HQVoiceMessage: // 音频消息
					console.log('音频 type ', messageContent.type); // 编解码类型，默认为 aac 音频
					console.log('音频 url', messageContent.remoteUrl); // 播放：<audio src={remoteUrl} />
					console.log('音频 时长', messageContent.duration);
					break;
				case RongIMClient.MessageType.RichContentMessage: // 富文本(图文)消息
					console.log('文本内容', messageContent.content);
					console.log('图片 base64', messageContent.imageUri);
					console.log('原图 url', messageContent.url);
					break;
				case RongIMClient.MessageType.UnknownMessage: // 未知消息
					console.log('未知消息, 请检查消息自定义格式是否正确', message);
					break;
				default:
					console.log('收到消息', message);
					break;
			}
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
			_self.linkList=list;
		},
		onError: function(error) {
			console.log('获取会话列表失败', error);
		}
	}, conversationTypes, count);
	//获取历史消息
	var conversationType = RongIMLib.ConversationType.PRIVATE;
	var targetId = '123';
	var timestrap = null; // 默认传 null, 若从头开始获取历史消息, 请赋值为 0
	var count = 20;
	RongIMLib.RongIMClient.getInstance().getHistoryMessages(conversationType, targetId, timestrap, count, {
	  onSuccess: function(list, hasMsg) {
	    /* 
	        list: 获取的历史消息列表
	        hasMsg: 是否还有历史消息可以获取
	      */
	    console.log('获取历史消息成功', list);
	      
	  },
	  onError: function(error) {
	    // 请排查：单群聊消息云存储是否开通
	    console.log('获取历史消息失败', error);
	  }
	});
}