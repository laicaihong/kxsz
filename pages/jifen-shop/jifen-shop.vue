<template>
	<view>
		<view class="banner">
			<cover-view>banner</cover-view>
			<image src="" style="width: 750rpx;height: 260rpx;" mode="aspectFit"></image>
		</view>
		<view class="jifen">
			<image src="../../static/jifenshop/jf.png" style="width: 52rpx;height: 50rpx;"></image>
			<text class="jifenTxt" style="color: #f7b500;font-size: 36rpx;font-weight: 500;">900积分</text>
		</view>
		<view>
			<view class="title">
				<image src="../../static/jifenshop/meirirexiao.png" style="width: 230rpx;height: 32rpx;"></image></view>
			<view class="product-hot">
				
				<view class="uni-product" v-for="(item, index) in productList" :key="index">
					<navigator url="">
					<view class="image-view">
						<!-- <image v-if="renderImage" class="uni-product-image" :src="item.image"></image></view> -->
						<image src="../../static/freeTeaching/bihua.png" style="width:200rpx ;height: 180rpx;" mode="aspectFit"></image>
					</view>
					<view class="goods-detail">
						<view class="uni-product-title">{{ item.title }}</view>
						<view class="uni-product-price">
							<view class="goods-price" style="font-size: 22rpx;">
								{{ item.jifen }}
								<text style="font-size:22rpx ;color: #999999;">积分</text>
							</view>
							<view style="font-size: 22rpx;color: #999999;">{{ item.num }}人兑换</view>
						</view>
					</view>
					</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			productList: [
				{ jifen: '2999', title: '小米智能', num: '190' }, 
				{ jifen: '2999', title: '小米智能', num: '190' },
				{ jifen: '2999', title: '小米智能', num: '190' },
				{ jifen: '2999', title: '小米智能', num: '190' },
				{ jifen: '2999', title: '小米智能', num: '190' },
				{ jifen: '2999', title: '小米智能', num: '190' },
				]
		};
	},
	methods: {}
};
</script>

<style>
@import './jifen-shop.css';
</style>
