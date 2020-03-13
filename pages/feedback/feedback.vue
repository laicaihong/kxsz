<template>
	<view class="feedback_page">
		<view class="tip">您好，亲爱的用户，对于我们的商品让您不满意感到抱歉，请您留下宝贵意见，我们将尽快处理</view>

		<view class="section_title"><text>请选择您要反馈的意见类型：</text></view>

		<view class="feedback_types">
			<view :class="{item: true, active: activeIndex == index}" v-for="(item, index) in typeList" :key="index" @click="selectType(index)">{{item.name}}</view>
		</view>

		<view class="section_title">
			<text>请选择问题订单</text>
			<navigator url=""><image src="../../static/index/qj.png" mode=""></image></navigator>
		</view>

		<form>
			<textarea class="content_input" :value="content" placeholder="请填写意见描述(500字以内)" />
			<input type="text" :value="qq" class="qq_input" placeholder="请填写联系QQ" />
			<input type="text" :value="mobile" placeholder="请填写联系电话" />
		</form>
	</view>
</template>

<script>
export default {
	data() {
		return {
			typeList: [
				{
					id: 1,
					name: '产品质量'
				},
				{
					id: 2,
					name: '物流速度'
				},
				{
					id: 3,
					name: '售后服务'
				},
				{
					id: 4,
					name: '购买流程'
				},
				{
					id: 5,
					name: '优惠力度'
				},
				{
					id: 6,
					name: '其他'
				},
			],
			activeIndex: null,
			content: '',
			qq: '',
			mobile: ''
		};
	},
	
	methods: {
		selectType(i) {
			this.activeIndex = i
		}
	}
};
</script>

<style lang="less" scoped>
.feedback_page {
	padding: 0 44rpx;
}
.tip {
	padding: 0 48rpx;
	margin: 30rpx 0;
	font-size: 26rpx;
	color: rgba(161, 164, 165, 1);
	line-height: 38rpx;
	text-align: center;
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

.feedback_types {
	display: flex;
	flex-wrap: wrap;

	.item {
		width: 178rpx;
		height: 56rpx;
		margin-bottom: 26rpx;
		margin-right: 50rpx;
		font-size: 26rpx;
		color: rgba(101, 104, 105, 1);
		text-align: center;
		line-height: 56rpx;
		background-color: #fff;
		border-radius: 28rpx;
		border: 1rpx solid #999;
		
		&:nth-of-type(3n) {
			margin-right: 0;
		}
	}
	
	.active {
		color: #41AD29;
		border-color: #41AD29;
	}
}
.content_input {
	margin-top: 60rpx;
}
.qq_input {
	margin-bottom: 70rpx;
}
</style>
