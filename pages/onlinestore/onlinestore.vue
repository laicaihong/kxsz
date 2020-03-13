<!-- <template>
	<view>
	
	</view>

</template> -->
<template>
	<view class="container">
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
			<scroll-view scroll-x class="uni-swiper-tab">
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
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<block v-for="(data, index) in swiperImges" :key="index">
				<swiper-item>
					<view class="swiper-item">
						<navigator :url="data.to_url" open-type="navigate"><image :src="data.pic_url" class="banner"></image></navigator>
					</view>
				</swiper-item>
			</block>
		</swiper>
		<!-- 广告链接 -->
		<view class="adversity"><image src="../../static/onlineStore/gg@2x.png" mode="scaleToFill"></image></view>
		<!-- 限时秒杀 -->
		<view class="limitedTime">
			<text>限时秒杀</text>
			<text>时间仅剩</text>
			<uni-countdown :day="1" :hour="1" :minute="12" :second="40"></uni-countdown>
		</view>
		<!-- 商品推荐 -->
		<view class="recommend-banner">
			<scroll-view scroll-x="true">
				<view class="goods-box" v-for="item in goodslist" :key="index">
					<text>{{ item.price }}</text>
				</view>
			</scroll-view>
		</view>
		<!-- 商品广告图 -->
		<view></view>
		<view class="banner-title"><text style="font-size:48rpx;color:#3FAE2A ;">将成团</text></view>
		<!-- 商品推荐 -->
		<view class="recommend-list"></view>
	</view>
</template>
<script>
import uniCountdown from '@/components/uni-countdown/uni-countdown.vue';
export default {
	data() {
		return {
			tabindex: 1,
			tabIndex: 0, //选中标签栏的序列
			contentList: ['关注', '推荐', '热点', '体育', '财经'],
			goodslist: [
				{
					price: '250'
				},
				{
					price: '250'
				},
				{
					price: '250'
				}
			],
			tabBars: [
				{
					name: '关注',
					id: 'guanzhu'
				},
				{
					name: '推荐',
					id: 'tuijian'
				},
				{
					name: '热点',
					id: 'redian'
				},
				{
					name: '体育',
					id: 'tiyu'
				},
				{
					name: '财经',
					id: 'caijing'
				}
			],
			swiperHeight: 0
		};
	},
	components: { uniCountdown },
	// onLoad() {
	// 	uni.setTabBarItem({
	// 		index: 0,
	// 		text: '吃什么',
	// 		iconPath: '/static/index/index.png',
	// 		selectedIconPath: '/static/index/index_check.png',
	// 		pagePath: '/pages/index/index',
	// 		index: 1,
	// 		text: '喝什么',
	// 		iconPath: '/static/index/my.png',
	// 		selectedIconPath: '/static/index/my_check.png',
	// 		pagePath: '/pages/index/index'
	// 	});
	// 	// uni.hideTabBar();
	// },
	mounted() {
		// 请求商品列表,goodlist
		uni.request({});
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
		}
	}
};
</script>

<style>
@import './onlinestore.css';
</style>
