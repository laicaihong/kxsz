<template>
	<view class="container">
		<view class="search"></view>
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

			<view class="uni-tab-bar">
				<scroll-view scroll-x class="uni-swiper-tab" style="height: 100rpx;">
					<block v-for="(tabBar, index) in tabBars" :key="index">
						<view class="swiper-tab-list" :class="{ active: tabIndex == index }" @tap="toggleTab(index)">
							{{ tabBar.name }}
							<view class="swiper-tab-line"></view>
						</view>
					</block>
				</scroll-view>
			</view>
			<!--内容区-->
			<view class="uni-tab-content">
				<swiper :current="tabIndex" @change="tabChange">
					<swiper-item v-for="(content, index) in contentList" :key="index">
						<view class="swiper-item">{{ content }}</view>
					</swiper-item>
				</swiper>
			</view>
			<!-- 轮播 -->
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-active-color="#008800">
				<block v-for="(data, index) in swiperImges" :key="index">
					<swiper-item>
						<view class="swiper-item">
							<navigator :url="data.to_url" open-type="navigate">
								<image
									:src="data.pic_url"
									class="banner"
									style="width: 718rpx;
	height: 332rpx;"
									mode="aspectFit"
								></image>
							</navigator>
						</view>
					</swiper-item>
				</block>
			</swiper>
			<!-- 新品上市 -->
			<view class="new-goods">
				<image src="../../static/onlineStore/xpss.png" style="width:182rpx;height: 78rpx;" mode="aspectFit"></image>
				<view class="recommend">推荐</view>
			</view>
			<!-- 广告链接 -->
			<navigator url="">
				<view class="adversity"><image src="../../static/onlineStore/gg@2x.png" mode="aspectFit" style="width: 722rpx;height: 196rpx;"></image></view>
			</navigator>
			<!-- 限时秒杀 -->
			<view class="limitedTime">
				<image src="../../static/onlineStore/xsms.png" style="width: 150rpx;height: 98rpx;" mode="aspectFit"></image>
				<text style="font-size: 28rpx;color: #e02020;">时间仅剩</text>
				<uni-countdown :hour="1" :minute="12" :second="40"></uni-countdown>
			</view>
		</view>
		<!-- 商品推荐 -->
		<view class="recommend-banner">
			<scroll-view scroll-x="true">
				<view class="goods-box" v-for="item in goodslist" :key="index">
					<navigator><image src="" style="width:262rpx ;height: 244rpx;" mode="aspectFit"></image></navigator>
					<view class="goods-price">¥{{ item.price }}</view>
				</view>
			</scroll-view>
		</view>
		<!-- 商品广告图 -->
		<navigator url="">
			<view class="goods-adverse">
				<!-- 请求后台数据 -->
				<cover-image src="" style="width:750rpx ;height: 220rpx;"></cover-image>
			</view>
		</navigator>
		<view class="banner-title"><text style="font-size:48rpx;color:#3FAE2A ;">将成团</text></view>
		<!-- 商品推荐 -->
		<view class="recommend-footer">
			<view class="recommend-list">
				<view class="uni-product" v-for="(item, index) in productList" :key="index">
					<view class="image-view">
						<!-- <image v-if="renderImage" class="uni-product-image" :src="item.image"></image></view> -->
						<image src="" style="width:220rpx ;height: 200rpx;" mode="aspectFit"></image>
					</view>
					<view class="goods-detail">
						<view class="uni-product-title">{{ item.title }}</view>
						<view class="uni-product-price">
							<view style="font-size:28rpx ;">
								团购价：
								<text class="goods-price" style="font-size: 32rpx;">￥{{ item.originalPrice }}</text>
							</view>
							<view style="font-size: 28rpx;">
								团购价：
								<text class="goods-price" style="font-size: 32rpx;">￥{{ item.teamPrice }}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 为您推荐 -->
			<view class="recommend-image"><image src="../../static/onlineStore/wntj.png" style="width: 224rpx;height: 30rpx;"></image></view>
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
	</view>
</template>
<script>
import uniCountdown from '@/components/uni-countdown/uni-countdown.vue';
export default {
	data() {
		return {
			tabindex: 1,
			tabIndex: 0, //选中标签栏的序列
			contentList: ['分类', '分类', '分类', '分类', '分类'],
			swiperImges: [],
			// productList: [],
			// recommendList:[],
			recommendList:[{title:'1'},{title:'2'}],
			productList: [
				{
					title: '商品标题商品标题商品标题商品标题商品标题',
					originalPrice: '320',
					teamPrice: '620'
				},
				{
					title: '商品标题商品标题商品标题商品标题商品标题',
					originalPrice: '320',
					teamPrice: '620'
				},
				{
					title: '商品标题商品标题商品标题商品标题商品标题',
					originalPrice: '320',
					teamPrice: '620'
				}
			],
			renderImage: false,
			goodslist: [
				{
					price: '250.00'
				},
				{
					price: '250.00'
				},
				{
					price: '250.00'
				}
			],
			tabBars: [
				{
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
			swiperHeight: 0
		};
	},
	components: { uniCountdown },
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
		toggleTab(index) {
			console.log(index);
			this.tabIndex = index;
		},
		tabChange(e) {
			console.log(e.detail);
			const tabIndex = e.detail.current;
			this.tabIndex = tabIndex;
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

<style>
@import './onlinestore.css';
</style>
