<template>
	<view class="container">
		<view class="top_title">
			<navigator open-type="navigateBack"><image src="/static/onlineStore/back@2x.png" mode="" class="icon1"></image></navigator>
			<view class="input-wrap flex">
				<image class="search" src="/static/onlineStore/ss@2x.png" />
				<input placeholder="一年级上册…" placeholder-class="placeholder-class" class="input" />
			</view>
			<navigator url=""><image src="/static/index/gwc.png" mode="" class="icon2"></image></navigator>
		</view>
		<view class="recommend-header">
			<view class="index-header">
				<text class="address" v-if="leftWords">{{ leftWords }}</text>
				<view class="input-wrap" v-if="input">
					<input type="text" placeholder="请输入搜索" v-model="value" @change="inputChange" />
					<text class="iconfont iconfangdajing"></text>
				</view>
				<view class="map-wrap" v-if="rightWords || rightIcon" @click="rightClick">
					<text class="iconfont" :class="rightIcon"></text>
					<text>{{ rightWords }}</text>
				</view>
			</view>
			<!--tab-->
			<view class="flex flex-space">
				<scroll-view scroll-x class="tabBars-content">
					<view class="tabBars">
						<view class="tabBars-item" v-for="(tabBar, index) in tabBars" :key="index" :class="{ active: tabIndex == index }" @tap="toggleTab(index)">
							{{ tabBar.name }}
							<view class="swiper-tab-line"></view>
						</view>
					</view>
				</scroll-view>
				<image class="more" src="/static/onlineStore/more@2x.png" />
			</view>
		</view>
		<!-- 根据tab不同加载不同内容 -->
		<!--内容区-->
		<swiper :current="tabIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item class="tab-content" v-for="(item,index) in productList" :key="index">
				<scroll-view
						class="list-scroll-content"
						scroll-y
				>
					<view class="uni-tab-content">
						<swiper :current="tabIndex" circular="true" @change="tabChange">
							<swiper-item v-for="(content, index) in contentList" :key="index">
								<view class="swiper-item">
									<!-- 轮播 -->
									<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
											indicator-active-color="#008800">
										<block v-for="(data, index) in swiperImges" :key="index">
											<swiper-item>
												<view class="swiper-item">
													<navigator :url="data.to_url" open-type="navigate">
														<image :src="data.pic_url" class="banner" style="width: 100%;height: 332rpx;" mode="aspectFit"></image>
													</navigator>
												</view>
											</swiper-item>
										</block>
									</swiper>

								</view>
							</swiper-item>
						</swiper>
					</view>
					<!-- 新品上市 -->
					<view class="new-goods" v-if="index==0">
						<image src="../../static/onlineStore/xpss.png" style="width:182rpx;height: 78rpx;" mode="aspectFit"></image>
						<view class="recommend">推荐</view>
						<view class="recommend-product">
							<screenTextScroll :list="item.title" />
<!--							<navigator url="">-->
<!--								<view class="ellipsis" style="font-size: 28rpx;">{{item.title}}</view>-->
<!--							</navigator>-->
						</view>
					</view>
					<!-- 广告链接 -->
					<view class="adver" :style="{display:isClose==true?'none':'block'}">
						<image class="ggxbq" src="/static/onlineStore/ggxbq@2x.png" />
						<image class="close" @tap="close" src="/static/onlineStore/close-circle@2x.png" />
						<view class="adversity">
							<image src="/static/onlineStore/gg@2x.png" mode="aspectFit" style="width: 100%;height: 196rpx;"></image>
						</view>
					</view>
					<!-- 限时秒杀 -->
					<view class="limitedTime">
						<image src="../../static/onlineStore/xsms.png" style="width: 150rpx;height: 98rpx;" mode="aspectFit"></image>
						<view class="flex">
							<text class="red">时间仅剩</text>
							<uni-countdown backgroundColor="#545458" color="#ffffff" :hour="1" :minute="12" :second="40" :showDay="false"></uni-countdown>
						</view>
					</view>
					<!-- 商品推荐 -->
					<view class="recommend-banner">
<!--						<scroll-view scroll-x="true" show-scrollbar="true">-->
<!--							<view class="goods-box">-->
<!--								<navigator>-->
<!--									<image src="" style="width:262rpx ;height: 244rpx;" mode="aspectFit"></image>-->
<!--								</navigator>-->
<!--								<view class="goods-price">¥{{ item.originalPrice }}</view>-->
<!--							</view>-->
<!--						</scroll-view>-->
						<swiper previous-margin="96rpx" circular="true" next-margin="96rpx">
							<swiper-item class="flex" v-for="(item,index) in bannerList" :key="index">
								<view class="banner-item" v-for="(titem,tindex) in item.item">
									<image class="banner-icon" src="" />
									<view class="goods-price">¥{{ titem.title }}</view>
								</view>
							</swiper-item>
						</swiper>
					</view>
					<!-- 商品广告图 -->
<!--					<navigator url="">-->
<!--						<view class="goods-adverse">-->
<!--							&lt;!&ndash; 请求后台数据 &ndash;&gt;-->
<!--							<cover-image src="" style="width:750rpx ;height: 220rpx;"></cover-image>-->
<!--						</view>-->
<!--					</navigator>-->
					<swiper class="goods-adverse" :autoplay="true" :interval="3000" :duration="1000">
						<block v-for="(data, index) in swiperImges" :key="index">
							<swiper-item>
								<view class="swiper-item">
									<navigator :url="data.to_url" open-type="navigate">
										<image :src="data.pic_url" class="banner" style="width: 100%;height: 220rpx;" mode="aspectFill"></image>
									</navigator>
								</view>
							</swiper-item>
						</block>
					</swiper>

					<view class="banner-title"><text style="font-size:48rpx;color:#3FAE2A ;">——将成团——</text></view>
					<!-- 商品推荐 -->
					<view class="recommend-footer">
						<view class="recommend-list">

							<view>
								<navigator url="">
									<view class="uni-product">
										<view class="image-view">
											<!-- <image v-if="renderImage" class="uni-product-image" :src="item.image"></image></view> -->
											<image src="" style="width:220rpx ;height: 200rpx;" mode="aspectFit"></image>
										</view>
										<view class="goods-detail">
											<view class="uni-product-title">{{ item.title }}</view>
											<view class="uni-product-price">
												<view style="font-size:28rpx ;">
													团购价:
													<text class="goods-price" style="font-size: 32rpx;">￥{{ item.originalPrice }}</text>
												</view>
												<view style="font-size: 28rpx;">
													团购价:
													<text class="goods-price" style="font-size: 32rpx;">￥{{ item.teamPrice }}</text>
												</view>
											</view>
										</view>
									</view>
								</navigator>
							</view>
						</view>
						<!-- 为您推荐 -->
						<view class="recommend-image">
							<image src="../../static/onlineStore/wntj.png" style="width: 224rpx;height: 30rpx;"></image>
						</view>
						<view class="recommend-ruler">
							<view class="uni-ruler" v-for="(item, index) in productList" :key="index">
								<navigator url="">
									<view class="image-ruler">
										<!-- <image v-if="renderImage" class="uni-product-image" :src="item.image"></image></view> -->
										<image src="" style="width:330rpx ;height: 350rpx;" mode="aspectFit"></image>
									</view>
									<view class="goods-detail">
										<view class="uni-product-title">书法尺</view>
										<view class="uni-product-price"><text style="font-size:28rpx ;color:#666666 ;">练习书法常备用品</text></view>
									</view>
								</navigator>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import screenTextScroll from '@/components/p-screenTextScroll/screenTextScroll.vue';
	import uniCountdown from '@/components/uni-countdown/uni-countdown.vue';
	export default {
		data() {
			return {
				input:'',
				leftWords:'',
				rightWords:'',
				rightIcon:'',
				tabindex: 1,
				tabIndex: 0, //选中标签栏的序列
				contentList: ['分类', '分类', '分类', '分类', '分类'],
				swiperImges: [],
				// productList: [],
				// recommendList:[],
				recommendList: [{
					title: '1'
				}, {
					title: '2'
				}],
				productList: [{
						title: ['商品标题商品标题商品标题商品标题商品标题'],
						originalPrice: '320',
						teamPrice: '620',
						name: '书法尺',
						describtion: '练习书法常备用品'
					},
					{
						title: ['商品标题商品标题商品标题商品标题商品标题'],
						originalPrice: '320',
						teamPrice: '620',
						name: '书法尺',
						describtion: '练习书法常备用品'
					},
					{
						title: ['商品标题商品标题商品标题商品标题商品标题'],
						originalPrice: '320',
						teamPrice: '620',
						name: '书法尺',
						describtion: '练习书法常备用品'
					},
				],
				renderImage: false,
				tabBars: [{
						name: '分类',
						id: 'guanzhu'
					},
					{
						name: '分类',
						id: 'tuijian'
					},
					{
						name: '分类',
						id: 'redian'
					},
					{
						name: '分类',
						id: 'tiyu'
					},
					{
						name: '分类',
						id: 'caijing'
					}
				],
				swiperHeight: 0,
				// 两张图片的轮播图
				bannerList:[
					{
						item:[
							{
								title:'200.00'
							},
							{
								title:'200.00'
							},
						]
					},
					{
						item:[
							{
								title:'200.00'
							},
							{
								title:'200.00'
							},
						]
					},
					{
						item:[
							{
								title:'200.00'
							},
							{
								title:'200.00'
							},
						]
					},
				],
				// 广告隐藏
				isClose:false,
			};
		},
		components: {
			uniCountdown,screenTextScroll,
		},
		mounted() {
			// 换地址
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
				fail: () => {}
			});
			//请求
			// uni.request({
			//                     url: 'http://localhost:3000/goods',
			//                     success: (res) => {
			//                         console.log(res.data);
			//                         this.productList = res.data.goodslist;
			//                     }
			//                 });
		},
		methods: {
			// 关闭广告
			close(){
				this.isClose=true;
			},
			toggleTab(index) {
				console.log(index);
				this.tabIndex = index;
			},
			tabChange(e) {
				console.log(e.detail);
				const tabIndex = e.detail.current;
				this.tabIndex = tabIndex;
			},
			changeTab(e){
				console.log(e);
				this.tabIndex=e.detail.current;
			},
			getList() {
				uni.request({
					url: 'http://localhost:3000/goods',
					success: res => {
						console.log(res.data);
						this.productList = res.data.goodslist;
					}
				});
			},
			onLoad() {
				this.getList();
				this.renderImage = true;
			}
		}
	};
</script>

<style lang="less" scoped>
	@import './onlinestore.css';
	page, .container{
		min-height: 100%;
		height: 100%;
		background-color: rgba(239,239,239,.3);
	}
	.list-scroll-content{
		height: 100%;
	}
	.red{
		font-size: 28rpx;
		margin-right: 18rpx;
		color: #e02020;
	}
	/*商品推荐*/
	.recommend-banner{
		.banner-icon{
			width:100%;
			height:244rpx;
			border:2rpx solid rgba(63,174,42,1);
		}
		.banner-item{
			padding-top: 4rpx;
			width: 262rpx;
			height: auto;
			margin-right: 36rpx;
		}
	}
	/*時間僅剩*/
	/deep/.uni-countdown__number{
		width:48rpx;
		height:48rpx;
		border-radius:4rpx;
	}
	/*将成团*/
	.uni-product{
		.goods-detail{
			margin-top: 0;
			margin-left: 12rpx;
		}
	}
	/*爲你推薦*/
	.recommend-ruler{
		.uni-product-title{
			font-family:PingFangSC-Medium,PingFang SC;
			font-weight:500;
		}
	}
	/*頭部搜索*/
	.top_title{
		.input-wrap{
			height:60rpx;
			background:rgba(239,239,239,1);
			border-radius:34rpx;
			width: 70%;
			.search{
				width: 32rpx;
				height: 34rpx;
				margin-left: 50rpx;
				margin-right: 22rpx;
			}
			.input{
				font-size:28rpx;
				font-family:PingFangSC-Regular,PingFang SC;
				font-weight:400;
				color:#333;
				line-height:60rpx;
			}
		}
		.icon1{
			width: 18rpx;
			height: 32rpx;
		}
		.icon2{
			height: 44rpx;
			width: 44rpx;
		}
	}
	/*tab*/
	.tabBars-content{
		width: 92%;
		.tabBars{
			display: flex;
			flex-wrap: nowrap;
			align-items: center;
			.tabBars-item{
				width: 20%;
				text-align: center;
				font-size:32rpx;
				font-family:PingFangSC-Light,PingFang SC;
				font-weight:300;
				color:rgba(51,51,51,1);
				&.active{
		 			font-size:40rpx;
		 			font-family:PingFangSC-Medium,PingFang SC;
		 			font-weight:500;
		 			color:rgba(51,51,51,1);
	 			}
			}
		}
	}
	.more{
		width:32rpx;
		height:26rpx;
	}
	/*根据tab加载不同内容*/
	/*輪播圖*/
	/deep/uni-swiper .uni-swiper-dot{
		width:12rpx;
		height:12rpx;
	}
	/deep/uni-swiper .uni-swiper-dot-active{
		background:rgba(63,174,42,1);
	}
	.uni-tab-content{
		margin-top: 26rpx;
	}
	.swiper-box{
		height: 100%;
		overflow-y: scroll;
		box-sizing: border-box;
		background-color: rgba(239,239,239,.3);
		/*广告*/
		.adver{
			position: relative;
			width: 100%;
			.ggxbq{
				width:80rpx;
				height:40rpx;
			}
			.close{
				position: absolute;
				top:0;
				right: 16rpx;
				width: 36rpx;
				height: 36rpx;
			}
		}
	}
</style>
