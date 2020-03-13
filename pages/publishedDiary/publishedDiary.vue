<template>
	<view>
		<view class="publishedDiary">
			<view class="title">
				<view>打卡主题</view>
				<input class="titletext" type="text" value="" placeholder="输入日记标题" placeholder-class="inputPlace"/>
			</view>
			<view class="article">
				<view class="writearticle">
					<textarea value="" placeholder="说说今天的感想和收获吧!" class="textareacont" placeholder-style="color:#999999;font-size:19px;"/>
				</view>
			</view>
			<view class="uploadinfo">
				<!-- 视频上传 -->
				<view class="uploadinfo_video uploadinfoblock">
					<image class="videoImg" src="../../static/publishedDiary/video.png" mode="widthFix"></image>
				</view>
				<!-- 图片上传 -->
				<view class="uploadinfo_picture uploadinfoblock">
					<image class="videoImg" src="../../static/publishedDiary/picture.png" mode="widthFix"></image>
				</view>
			</view>
			<!-- 选择是否公开 -->
			<view class="address">
				<picker mode="selector" :range="isOpen" @change="bindIsOpen">
					<image class="diqiu" src="../../static/publishedDiary/public.png" mode="widthFix"></image>
					<text class="itemtitle">{{isOpen[open]}}</text>
				</picker>
			</view>
			<!-- 发表 -->
			<view class="uploadbtn">
				<button type="submit" class="btn">发表</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				isOpen:['公开','私密'],
				open:0
			}
		},
		methods:{
			//公开点击
			bindIsOpen(e){
				this.open=e.target.value;
			}
		}
	}
</script>

<style>
	@import "./publishedDiary.css";
</style>
