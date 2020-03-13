<template>
	<view>
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-active-color="#008800">
					<block v-for="(data, index) in swiperImges" :key="index">
						<swiper-item>
							<view class="swiper-item">
									<image
										:src="data.pic_url"
										class="banner"
										style="width: 718rpx;
		                 height: 332rpx;"
										mode="aspectFit"
									></image>
							</view>
						</swiper-item>
					</block>
				</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperImages:[]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
