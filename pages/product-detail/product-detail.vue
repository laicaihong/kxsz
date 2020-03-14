<template>
	<view>
			<view class="top_title">
				<navigator url="../index/index"><image src="../../static/onlineStore/back.png" mode="" style="width: 18rpx;height: 32rpx;"></image></navigator>
				<navigator url=""><image src="../../static/index/gwc.png" mode="" style="width: 44rpx;height: 44rpx;"></image></navigator>
			</view>
		<!-- 商品详情 -->
		<view class="product-banner">
			<swiper>
				
			</swiper>
			<image src="" style="width: 750rpx;height: 650rpx;" mode="aspectFit"></image>
			</view>
		<!-- 限时秒杀 判断商品是否为秒杀商品-->
		<view class="xsms" v-if="true">
			<view class="back-red">
				<view class="back-red-txt">
					<text style="color: #ffffff;font-size: 32rpx;">¥</text>
					<text style="color: #ffffff;font-size: 52rpx;">56</text>
					<view style="color: #E5E5E5;font-size: 24rpx;" class="origin-price">¥88.00</view>
				</view>
				<view class="cheap">已抢227件</view>
			</view>
			<view class="back-yello"> 
			<text style="color: #E44A54;font-size: 32rpx;">距结束</text>
			<uni-countdown backgroundColor="#F3F15B" color='#e44a54' splitorColor='#e44a54' :hour="1" :minute="12" :second="40" :showDay="false"></uni-countdown>
			</view>
		</view>
		<view class="product-detail">
			<view class="beij">
				<text style="color: #e33944;font-size: 24rpx;">¥</text>
				<text style="color: #e33944;">488</text>
				<view style="color: #A1A4A5;font-size: 28rpx;" class="origin-price">¥588</view>
			</view>
			<view class="beij">
				<text style="color: #A1A4A5;font-size: 28rpx;">已售277</text>
				<view style="color: #A1A4A5;font-size: 28rpx;" class="save">库存59</view>
			</view>
		</view>
		<!-- title -->
		<view class="product-title">
			<view class="productTxt">
				<text
					style="font-size: 30rpx;
	color: #333333;font-weight: bolder;"
				>
					一年级上册第一课《秋天》课文配套书法学习尺子
				</text>
			</view>

			<navigator class="btn-share">
				<image src="../../static/onlineStore/share.png" style="width:30rpx ;height: 28rpx;"></image>
				<text style="color:#b3b3b3;font-size: 28rpx;">分享</text>
			</navigator>
		</view>
		<!-- 优惠券 -->
		<navigator class="youhuiquan" url="">
			<view><text style="color: #666666;font-size:26rpx ;">优惠券</text></view>
			<navigator url="">
				<text style="color: #666666;font-size:26rpx ;">领取优惠券</text>
				<image src="../../static/onlineStore/go%20(1).png" style="width: 16rpx;height: 24rpx;"></image>
			</navigator>
		</navigator>
		<!-- 售后售前 -->
		<navigator class="pre-sale">
			<view class="pre-detail">
				<image src="../../static/onlineStore/right.png" style="width:28rpx ;height: 28rpx;"></image>
				<view class="jisu">全场包邮</view>
			</view>
			<view class="pre-detail">
				<image src="../../static/onlineStore/right.png" style="width:28rpx ;height: 28rpx;"></image>
				<view class="jisu">极速发货</view>
			</view>
			<view class="pre-detail">
				<image src="../../static/onlineStore/right.png" style="width:28rpx ;height: 28rpx;"></image>
				<view class="jisu">七天无理由退换</view>
			</view>
			<view style="margin-left:120rpx ;"><image src="../../static/onlineStore/go%20(1).png" style="width: 16rpx;height: 24rpx;"></image></view>
		</navigator>
		<!-- 地址 -->
		<navigator url="" class="address">
			<view class="txt-address">地址</view>
			<view class="choose-address">选择收货地址</view>
			<view style="margin-left: 376rpx;"><image src="../../static/onlineStore/go%20(1).png" style="width: 16rpx;height: 24rpx;"></image></view>
		</navigator>
		<navigator url="" class="address">
			<view class="txt-address">参数</view>
			<view class="choose-address">生产日期 年级 （一年级）</view>
			<view style="margin-left: 376rpx;"><image src="../../static/onlineStore/go%20(1).png" style="width: 16rpx;height: 24rpx;"></image></view>
		</navigator>
		<navigator url="" class="comment">
			<view class="choose-address">评价(999+)</view>
			<view>
				<text style="color: #A1A4A5;font-size: 28rpx;">查看全部</text>
				<image src="../../static/onlineStore/go%20(1).png" style="width: 16rpx;height: 24rpx;"></image>
			</view>
		</navigator>
		<view class="pic-txt-detail">
			<view>图文详情</view>
			<view><image src="" width="750rpx;height:1140rpx"></image></view>
		</view>
		<!-- 加入购物车  固定-->
		<view class="oprate">
			<view class="oprate-content">
				<navigator url="" class="oprate-icon">
					<image src="../../static/onlineStore/kf.png" style="width: 36rpx;height: 34rpx;"></image>
					<view class="oprate-txt">客服</view>
				</navigator>
				<navigator url="" class="oprate-icon">
					<image src="../../static/onlineStore/gwc.png" style="width: 36rpx;height: 34rpx;"></image>
					<view class="oprate-txt">购物车</view>
				</navigator>
				<navigator url="" class="oprate-icon">
					<image src="../../static/onlineStore/sc.png" style="width: 36rpx;height: 34rpx;"></image>
					<view class="oprate-txt">收藏</view>
				</navigator>
				<view>
					<button size="mini" class="bth-gwc">加入购物车</button>
					<button size="mini" class="btn-fastbuy">立即购买</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			swiperImages: true
		};
	},
	methods: {}
};
</script>

<style>
@import './product-detail.css';
</style>
