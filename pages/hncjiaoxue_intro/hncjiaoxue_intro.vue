<template>
	<view class="">
		<view class="banner">
			<video class="video" src="https://video.kaifadanao.cn/20190911/e0c488cd3847a8b8f54fec96ee1b66aa.mp4" autoplay="true" objectFit="fill" controls></video>
		</view>
		<view class="jianjie">
			简介
		</view>
		<view class="kong10"></view>
		<view class="jianjiecont">
			<view class="conttext">
				<view class="title">
					识字第二课《金木水火土》
				</view>
				 <template is="wxParse" />
				    </view>
				    <image :class='pictureurl' :src='image'></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				pictureurl:'',
				image:''
			}
		}
	}
</script>

<style>
	@import "./hncjiaoxue_intro.css";
</style>
