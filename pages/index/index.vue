<template>
	<!--页面路径 pages/index/index -->
	<view class="index_page">
		<view class="status_bar"><!-- 这里是状态栏 --></view>
		<view class="top_title">
			<text>开心书写</text>
			<navigator url=""><image src="../../static/index/gwc.png" mode=""></image></navigator>
		</view>
		<!-- 轮播 -->
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<block v-for="(data, index) in swiperImges" :key="index">
				<swiper-item>
					<view class="swiper-item">
						<navigator :url="data.to_url" open-type="navigate"><image :src="data.pic_url" class="banner"></image></navigator>
					</view>
				</swiper-item>
			</block>
		</swiper>

		<view class="menu_wrap">
			<navigator url="../my/follow/follow">
				<image src="../../static/index/daka.png" mode=""></image>
				<text>打卡</text>
			</navigator>
			<navigator url="">
				<image src="../../static/index/mfkc.png" mode=""></image>
				<text>免费课程</text>
			</navigator>
			<navigator url="">
				<image src="../../static/index/jxkc.png" mode=""></image>
				<text>精选课程</text>
			</navigator>
			<navigator url="">
				<image src="../../static/index/xxyp.png" mode=""></image>
				<text>学习用品</text>
			</navigator>
			<navigator url="../onlinestore/onlinestore">
				<image src="../../static/index/zxsc.png" mode=""></image>
				<text>在线商城</text>
			</navigator>
			<navigator url="">
				<image src="../../static/index/dnkf.png" mode=""></image>
				<text>大脑开发</text>
			</navigator>
		</view>

		<view class="section_title">
			<text class="recommend_title">推荐用品</text>
			<navigator url="">
				更多
				<image src="../../static/index/qj.png" mode=""></image>
			</navigator>
		</view>

		<view class="recommend">
			<navigator url="">
				<image src="../../static/index/zxsc.png" mode=""></image>
				<view class="info">
					<view class="title">书法尺</view>
					<view class="subtitle">练习书法常备用品</view>
				</view>
			</navigator>
			<navigator url="">
				<image src="../../static/index/zxsc.png" mode=""></image>
				<view class="info">
					<view class="title">书法尺</view>
					<view class="subtitle">练习书法常备用品</view>
				</view>
			</navigator>
			<navigator url="">
				<image src="../../static/index/zxsc.png" mode=""></image>
				<view class="info">
					<view class="title">书法尺</view>
					<view class="subtitle">练习书法常备用品</view>
				</view>
			</navigator>
		</view>

		<view class="section_title">
			<text>作品赏析</text>
			<navigator url="">
				更多
				<image src="../../static/index/qj.png" mode=""></image>
			</navigator>
		</view>

		<view class="works_list">
			<view class="work_item">
				<view class="user_info">
					<view class="left_side">
						<image src="../../static/index/dnkf.png" class="avatar"></image>
						<view class="name_n_date">
							<view class="name">asd</view>
							<view class="date">2020-02-02 08:32:23</view>
						</view>
					</view>

					<text class="view_count">浏览999次</text>
				</view>
				<view class="msg">
					打卡打卡打卡打卡打
				</view>
				
				<view class="gallery">
					<image src="../../static/index/dnkf.png" mode=""></image>
					<image src="../../static/index/dnkf.png" mode=""></image>
					<image src="../../static/index/dnkf.png" mode=""></image>
				</view>
				
				<view class="actions">
					<view class="item">
						<image src="../../static/index/zf.png" mode=""></image>
						<text>345</text>
					</view>
					<view class="item">
						<image src="../../static/index/pl.png" mode=""></image>
						<text>345</text>
					</view>
					<view class="item">
						<image src="../../static/index/sc.png" mode=""></image>
						<text>345</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 在线教程 -->
		<!-- <view class="const-list">
			<view class="const-line" v-for="(data, index) in onlineTeaching" :key="index">
				<view class="const-list-item">
					<navigator :url="data.to_url">
						<image :src="data.pic_url" mode="widthFix"></image>
						<text>{{ data.content }}</text>
					</navigator>
				</view>
			</view>
		</view> -->
		<!-- 精品推荐 -->
		<!-- <view class="recommend"><view class="recommendText">精品推荐</view></view> -->
		<!-- 精品推荐主内容 -->
		<!-- <view>
			<view class="recommend-item" v-for="data in recomItem" :key="data.id">
				<navigator url="/pages/growthDiary/growthDiary">
					<view class="item-top">
						<image
							class="touxiangicon"
							src="https://wx.qlogo.cn/mmopen/vi_32/99iaN59Fn6lNvW4gXAmaueWC2PCw3ycdjYwQ9c1TKaAz8EePsvN2bR5BDprHTJnXicgiaW88hicOHpVIo5W2PfLQRg/132"
							mode="widthFix"
						></image>
						<view class="info">
							<text class="title">{{ data.name }}</text>
							<text class="time">2019-08-29 17:03:55</text>
							<text class="time">浏览35次</text>
						</view>
					</view>
				</navigator>
				<navigator url="/pages/myPublished/myPublished">
					<view class="item-middle">
						<view class="detail"><text class="conttext">真心觉得摒弃物质诱惑，好好带孩子感受书法，让孩子爱上书法，由内而外的兴趣才是学好书法的核心动力。</text></view>
						<view class="middle-image">
							<image src="https://kxsx-front-pic.oss-cn-beijing.aliyuncs.com/pic/20190815/156587576839.png" mode=""></image>
							<image src="https://kxsx-front-pic.oss-cn-beijing.aliyuncs.com/pic/20190815/156587576839.png" mode=""></image>
							<image src="https://kxsx-front-pic.oss-cn-beijing.aliyuncs.com/pic/20190815/156587576839.png" mode=""></image>
						</view>
					</view>
				</navigator>
				<view class="smallicon">
					<view class="smallicon-flex">
						<image src="../../static/index/uncollect.png" mode="widthFix" style="width: 38rpx;height: 36rpx;"></image>
						<text>10086</text>
					</view>
					<view class="smallicon-flex">
						<image src="../../static/index/fx.png" mode="widthFix" style="width: 45rpx;height: 42rpx;"></image>
						<text>分享</text>
					</view>
					<view class="smallicon-flex">
						<image src="../../static/index/messageicon.png" mode="widthFix" style="width: 40rpx;height: 40rpx;"></image>
						<text>10086</text>
					</view>
				</view>
			</view>
		</view> -->
		<!-- 上拉加载 -->
		<view class=""><uni-load-more :status="status" /></view>
		<!-- 签到 -->
		<view class="dakaciclecont_daka">
			<view class="dakaciclecont_daka_flex">
				<navigator url="/pages/my/daySignin/daySignin"><text>签到</text></navigator>
			</view>
		</view>
	</view>
</template>

<script>
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
import '../public/rongyun.js';
export default {
	data() {
		return {
			//轮播图片
			swiperImges: [],
			//在线教学图标
			onlineTeaching: [],
			status: 'more',
			statusTypes: [
				{
					value: 'more',
					text: '加载前'
				},
				{
					value: 'loading',
					text: '加载中'
				},
				{
					value: 'noMore',
					text: '没有更多'
				}
			],
			contentText: {
				contentdown: '查看更多',
				contentrefresh: '加载中',
				contentnomore: '没有更多'
			},
			recomItem: [
				{
					name: '测试1',
					id: 1
				}
			]
		};
	},
	components: {
		uniLoadMore
	},
	onLoad() {
		// 			uni.$on('login', (usnerinfo) => {
		// 				//this.usnerinfo = usnerinfo;
		// 				console.log(usnerinfo);
		// 			});
		// 			// 登陆页面
		// 			uni.$emit('login', {
		// 				avatarUrl: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/nav_menu/10.jpg',
		// 				token: 'user123456',
		// 				userName: 'unier',
		// 				login: true
		// 			});
		// 			uni.getProvider({
		// 				service: 'push',
		// 				success: function(res) {
		// 					console.log(res.provider)
		//
		// 					// 个推的名称为 igexin
		// 					if (~res.provider.indexOf('igexin')) {
		// 						uni.subscribePush({
		// 							provider: 'igexin',
		// 							success: function(res) {
		// 								console.log('success:' + JSON.stringify(res));
		// 							}
		// 						});
		// 					}
		// 				}
		// 			});
	},
	//下拉刷新
	onPullDownRefresh() {
		console.log('下拉');
		setTimeout(function() {
			uni.stopPullDownRefresh(); //结束下拉动画
		}, 1000);
	},
	//上拉加载
	onReachBottom() {
		let _self = this;
		_self.status = 'loading'; //赋值加载中
		this.load();
	},
	methods: {
		load: function() {
			let index = this.recomItem.length;
			let id = this.recomItem[index - 1].id;
			id++;
			if (id < 5) {
				let loadData = {
					name: '测试' + id,
					id: id
				};
				this.recomItem.push(loadData);
				this.status = 'more'; //赋值查看更多
			} else {
				this.status = 'noMore'; //赋值查看更多
			}
		}
	},
	mounted() {
		//https://kxsx.kaifadanao.cn/api/cate/smodelList
		//轮播图片、在线教学请求
		uni.request({
			url: 'https://kxsx.kaifadanao.cn/api/index/index',
			method: 'POST',
			data: {},
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			success: res => {
				if (res.data.status == 1) {
					//轮播图片数据
					this.swiperImges = res.data.data.banner;
					//在线教学数据
					this.onlineTeaching = res.data.data.smodel;
				}
			},
			fail: () => {},
			complete: () => {}
		});
		//主体内容
		// uni.request({
		// 	url: 'https://kxsx.kaifadanao.cn/api/index/daily',
		// 	method: 'POST',
		// 	data: {
		// 		 page:1,
		// 		 page_size:10,
		// 		 keyword:''
		// 	},
		// 	header: {
		// 		'Content-Type': 'application/x-www-form-urlencoded'
		// 	},
		// 	success: res => {
		// 		console.log(res);
		// 		if (res.data.status == 1) {
		//
		// 		}
		//
		// 	},
		// 	fail: () => {},
		// 	complete: () => {}
		// })

		//api/shop/goods
		//api/shop/getNewUserCoupon
		// uni.request({
		// 	url:'https://kxsx.kaifadanao.cn/api/shop/newUserCouponAction',
		// 	method: 'POST',
		// 	data: {},
		// 	header:{
		// 		'Content-Type': 'application/x-www-form-urlencoded'
		// 	},
		// 	success:res=>{
		// 		console.log(res);
		// 	}
		// });
	}
};
</script>

<style lang="less">
@import './index.css';
.status_bar {  
    height: var(--status-bar-height);  
    width: 100%;  
    background-color: #F8F8F8;  
} 
.top_title {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20rpx 0;
	margin-bottom: 26rpx;

	text {
		font-size: 36rpx;
		font-weight: 500;
		color: rgba(50, 50, 50, 1);
		line-height: 50rpx;
	}

	image {
		width: 44rpx;
		height: 44rpx;
	}
}

.swiper {
	height: 248rpx;
	margin-bottom: 44rpx;

	.banner {
		width: 100%;
		height: 248rpx;
		border-radius: 8rpx;
	}
}

.menu_wrap {
	width: 100%;
	white-space: nowrap;
	overflow-x: scroll;

	navigator {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		width: 98rpx;
		margin-right: 46rpx;
		
		&:last-of-type {
			margin-right: 0;
		}
	}

	image {
		width: 72rpx;
		height: 72rpx;
		margin-bottom: 5rpx;
	}

	text {
		letter-spacing: 3rpx;
		font-size: 24rpx;
		color: rgba(102, 102, 102, 1);
		line-height: 34rpx;
	}
}

.section_title {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 44rpx 0 22rpx;

	text {
		font-size: 28rpx;
		font-weight: 500;
		color: rgba(50, 50, 50, 1);
		line-height: 40rpx;
	}

	navigator {
		display: flex;
		align-items: center;
		font-size: 20rpx;
		color: #999;

		image {
			width: 16rpx;
			height: 24rpx;
			margin-left: 10rpx;
		}
	}
}

.recommend {
	display: flex;
	justify-content: space-between;

	image {
		width: 220rpx;
		height: 220rpx;
		margin-bottom: 12rpx;
	}

	.title {
		font-size: 28rpx;
		font-weight: 500;
		color: rgba(50, 50, 50, 1);
		line-height: 40rpx;
	}

	.subtitle {
		font-size: 20rpx;
		color: rgba(102, 102, 102, 1);
		line-height: 28rpx;
	}
}

.works_list {
	.work_item {
		margin-bottom: 20rpx;

		.user_info {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.left_side {
				display: flex;
				align-items: center;

				.avatar {
					width: 60rpx;
					height: 60rpx;
					margin-right: 20rpx;
					border-radius: 50%;
				}

				.name_n_date {
					.name {
						margin-bottom: 10rpx;
						font-size: 28rpx;
						font-weight: 500;
						color: rgba(50, 50, 50, 1);
						line-height: 1;
					}

					.date {
						font-size: 20rpx;
						color: rgba(153, 153, 153, 1);
						line-height: 1;
					}
				}
			}

			.view_count {
				font-size: 20rpx;
				color: rgba(153, 153, 153, 1);
				line-height: 28rpx;
			}
		}
		
		.msg {
			margin-top: 20rpx;
			margin-bottom: 10rpx;
			font-size:24rpx;
			font-weight:500;
			color:rgba(50,50,50,1);
			line-height:34rpx;
		}
		
		.gallery {
			display: flex;
			
			image {
				width: 220rpx;
				height: 220rpx;
				margin-right: 14rpx;
				
				&:nth-of-type(3n) {
					margin-right: 0;
				}
			}
		}
		
		.actions {
			display: flex;
			justify-content: space-around;
			margin-top: 38rpx;
			
			.item {
				display: flex;
				align-items: center;
				
				image {
					width: 30rpx;
					height: 28rpx;
					margin-right: 10rpx;
				}
				
				text {
					font-size:24rpx;
					color:rgba(153,153,153,1);
					line-height:34rpx;
				}
			}
		}
	}
}
</style>
