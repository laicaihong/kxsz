<template>
	<view>
		<view class="status_bar"><!-- 这里是状态栏 --></view>
		<view class="top_title">
			<text>消息</text>
			<view>全部已读</view>
		</view>

		<view class="list">
			<navigator url="" v-for="(item, index) in list" :key="index">
				<image :src="item.img" mode=""></image>

				<view class="right_side">
					<view class="name_n_date">
						<view class="name">{{ item.name }} <text class="dot"></text></view>

						<view class="date">{{ item.date }}</view>
					</view>

					<view class="abstract">{{ item.abstract }}</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					img: '../../static/reg/log.png',
					name: '客服',
					date: '02-02 08:32:32',
					abstract: '你家宝贝好棒！我看了他的写作，书法尺的作用真你家宝贝好棒！我看了他的写作，书法尺的作用真'
				}
			]
		};
	}
};
</script>

<style lang="less" scoped>
.status_bar {
	height: var(--status-bar-height);
	width: 100%;
	background-color: #f8f8f8;
}
.top_title {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20rpx 28rpx;
	margin-bottom: 26rpx;

	text {
		font-size: 36rpx;
		font-weight: 500;
		color: rgba(50, 50, 50, 1);
		line-height: 50rpx;
	}

	view {
		font-size: 24rpx;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
		line-height: 34rpx;
	}
}

.list {
	padding: 0 30rpx;

	> navigator {
		display: flex;
		align-items: center;

		> image {
			width: 96rpx;
			height: 96rpx;
			margin-right: 20rpx;
		}

		.right_side {
			flex: 1;
			overflow: hidden;

			.name_n_date {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 8rpx;

				.name {
					display: flex;
					align-items: center;
					font-size: 28rpx;
					font-weight: 500;
					color: rgba(50, 50, 50, 1);
					line-height: 40rpx;
					
					.dot {
						width:12rpx;
						height:12rpx;
						margin-left: 6rpx;
						background:rgba(255,69,69,1);
						border-radius: 50%;
					}
				}

				.date {
					font-size: 20rpx;
					color: rgba(153, 153, 153, 1);
					line-height: 28rpx;
				}
			}

			.abstract {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				font-size: 24rpx;
				color: rgba(153, 153, 153, 1);
				line-height: 34rpx;
			}
		}
	}
}
</style>
