<template>
	<view>
		<view class="overlayer">
			<view class="bg"></view>

			<view class="content_wrap">
				<view class="close_wrap"><image src="../../static/my/close.png" mode=""></image></view>

				<view class="list">
					<view class="item">
						<image src="../../static/reg/log.png" class="avatar"></image>

						<view class="name">雨女无瓜雨女无瓜雨女无瓜雨女无瓜雨女无瓜</view>

						<view class="num_n_time">
							<view class="num">
								差
								<text>1</text>
								人拼成
							</view>

							<view class="time">剩余23:59:59</view>
						</view>
						<view class="cantuan">
							参团
							<image src="../../static/index/qj.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
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

<style lang="less" scoped>
.overlayer {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	.bg {
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.content_wrap {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		min-height: 600rpx;
		background-color: #fff;
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
	}

	.close_wrap {
		padding: 20rpx;
		text-align: right;

		image {
			display: inline-block;
			width: 36rpx;
			height: 36rpx;
		}
	}

	.item {
		display: flex;
		align-items: center;
		padding: 20rpx 14rpx 28rpx 32rpx;

		.avatar {
			width: 80rpx;
			height: 80rpx;
			margin-right: 34rpx;
		}

		.name {
			flex: 1;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			font-size: 28rpx;
			color: rgba(51, 51, 51, 1);
			line-height: 40rpx;
		}

		.num_n_time {
			text-align: center;
			.num {
				font-size: 28rpx;
				color: rgba(51, 51, 51, 1);
				line-height: 40rpx;
				letter-spacing: 4rpx;

				text {
					color: #e02020;
				}
			}

			.time {
				font-size: 28rpx;
				color: rgba(153, 153, 153, 1);
				line-height: 40rpx;
			}
		}
		.cantuan {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 140rpx;
			height: 70rpx;
			margin-left: 24rpx;
			font-size: 28rpx;
			color: rgba(255, 255, 255, 1);
			background: rgba(184, 224, 176, 1);
			border-radius: 35rpx;

			image {
				width: 16rpx;
				height: 24rpx;
				margin-left: 10rpx;
			}
		}
	}
}
</style>
