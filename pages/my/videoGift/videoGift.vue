<template>
	<view class="wrap">
		<navigator class="item" v-for="(item,index) in dataList" :key="index" url="/pages/my/activeCode/activeCode?cl_id=item.cl_id">{{item.title}}</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [{
					cl_id: 10,
					content: "1.同步最新部编版语文课程↵2.线上教学视频实现把老师请回家↵3.小学生的随身书法老师↵4. 视频动画生动有趣，内容丰富↵5.孩子减负，家长轻松",
					createtime: 1560233365,
					deletetime: null,
					icon: "https://pic.kaifadanao.cn/20190826/ab9de66bf5b00697d378055e52e01127.jpg",
					is_effective: 1,
					is_pay: null,
					md_id: 7,
					money: "0.00",
					sort: 0,
					title: "一年级上册",
					updatetime: 1567740541
				}, {
					cl_id: 10,
					content: "1.同步最新部编版语文课程↵2.线上教学视频实现把老师请回家↵3.小学生的随身书法老师↵4. 视频动画生动有趣，内容丰富↵5.孩子减负，家长轻松",
					createtime: 1560233365,
					deletetime: null,
					icon: "https://pic.kaifadanao.cn/20190826/ab9de66bf5b00697d378055e52e01127.jpg",
					is_effective: 1,
					is_pay: null,
					md_id: 7,
					money: "0.00",
					sort: 0,
					title: "一年级上册",
					updatetime: 1567740541
				}]
			}
		},

	}
</script>

<style>
	@import "./videoGift.css";
</style>
