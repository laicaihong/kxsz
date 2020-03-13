<template>
	<view>
		<!-- 视频 -->
		<view class="banner">
			<video class="video" src="https://video.kaifadanao.cn/20190911/e0c488cd3847a8b8f54fec96ee1b66aa.mp4" autoplay="true" objectFit="fill" controls></video>
		</view>
		<!-- 一些功能 -->
		<view class="module">
			<view class="module_item">
				<navigator url="">
					<view class="itemcont">
						<image class="icon" src="../../static/freeTeaching/tongbuxuexi.png" mode="widthFix"></image>
					</view>
					<text>教材同步学习视频</text>
				</navigator>
			</view>
			<view class="module_item">
				<navigator url="/pages/hncjiaoxue_mulu/hncjiaoxue_mulu">
					<view class="itemcont">
						<image class="icon" src="../../static/freeTeaching/shiyongjiaoxue.png" mode="widthFix"></image>
					</view>
					<text>功能尺使用教学</text>
				</navigator>
			</view>
			<view class="module_item">
				<navigator url="">
					<view class="itemcont">
						<image class="icon" src="../../static/freeTeaching/bihua.png" mode="widthFix"></image>
					</view>
					<text>笔画+思政课教学</text>
				</navigator>
			</view>
			<view class="module_item">
				<navigator url="">
					<view class="itemcont">
						<image class="icon" src="../../static/freeTeaching/zuozi.png" mode="widthFix"></image>
					</view>
					<text>坐姿握笔</text>
				</navigator>
			</view>
			<view class="module_item">
				<navigator url="">
					<view class="itemcont">
						<image class="icon" src="../../static/freeTeaching/jiema.png" mode="widthFix"></image>
					</view>
					<text>文字解码</text>
				</navigator>
			</view>
			<view class="module_item">
				<navigator url="">
					<view class="itemcont">
						<image class="icon" src="../../static/freeTeaching/kuozhan.png" mode="widthFix"></image>
					</view>
					<text>扩展教学</text>
				</navigator>
			</view>
			<view class="module_item">
				<navigator url="">
					<view class="itemcont">
						<image class="icon" src="../../static/freeTeaching/goumai.png" mode="widthFix"></image>
					</view>
					<text>书法尺购买</text>
				</navigator>
			</view>
			<view class="module_item">
				<navigator url="/pages/Copyright/Copyright">
					<view class="itemcont">
						<image class="icon" src="../../static/freeTeaching/banquan.png" mode="widthFix"></image>
					</view>
					<text>版权声明</text>
				</navigator>
			</view>
			<view class="module_item">
				<navigator url="/pages/my/shengjihuiyuan/shengjihuiyuan">
					<view class="itemcont">
						<image class="icon" src="../../static/freeTeaching/huiyuan.png" mode="widthFix"></image>
					</view>
					<text>会员福利</text>
				</navigator>
			</view>
		</view>
		<!-- 联系客服按钮 -->
		<view class="rightfiex">
			<navigator url="" class="rightfiex_cont rightfiex_first">
				<image class="" src="../../static/freeTeaching/kefu.png" mode="widthFix"></image>
			</navigator>
			<navigator url="" class="rightfiex_cont rightfiex_first">
				<image class="" src="../../static/freeTeaching/addhao.png" mode="widthFix"></image>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{}
		},
		onLoad() {
			
		},
		methods:{
			
		},
		mounted() {
			// uni.request({
			// 	url: 'https://kxsx.kaifadanao.cn/api/cate/smodelList',
			// 	method: 'POST',
			// 	data: {},
			// 	success: res => {
			// 		console.log(res);
			// 	},
			// 	fail: () => {},
			// 	complete: () => {}
			// });
		}
	}
</script>

<style>
	@import "./freeTeaching.css";
</style>
