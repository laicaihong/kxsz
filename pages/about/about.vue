<template>
	<view class="about_page">
		<view class="p">厦门市则盖帘商务有限公司旗下的电商APP，是限时秒杀类电商APP</view>
		<view class="p">醉不成欢惨将别，别时茫茫江浸月。</view>
		<view class="p">忽闻水上琵琶声，主人忘归客不发。寻声暗问弹者谁，琵琶声停欲语迟。移船相近邀相见，添酒回灯重开宴。千呼万唤始出来，犹抱琵琶半遮面。</view>

		<view class="title">品牌入驻</view>
		<view class="p">
			周先生
		</view>
		<view class="p">
			0594-14567789
		</view>
		
		<view class="title">市场合作</view>
		<view class="p">
			卢先生
		</view>
		<view class="p">
			0594-14567789
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="less">
.about_page {
	padding: 70rpx 44rpx 0;
}

.title {
	margin-top: 88rpx;
	margin-bottom: 32rpx;
	font-size: 30rpx;
	color: rgba(62, 61, 61, 1);
	line-height: 38rpx;
}

.p {
	position: relative;
	padding-left: 28rpx;
	margin-bottom: 34rpx;
	font-size: 28rpx;
	color: rgba(62, 61, 61, 1);
	line-height: 38rpx;

	&::before {
		position: absolute;
		top: 12rpx;
		left: 0;
		width: 16rpx;
		height: 16rpx;
		background-color: #585858;
		content: '';
		border-radius: 50%;
	}
}
</style>
