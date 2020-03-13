<template>
	<view>
		<!-- 搜索框 -->
		<view class="searchcont">
			<view class="search">
				<image class="searchicon" src="../../static/jctbxzjx/search.png" mode=""></image>
				<input type="text" class="searchinput" value="" placeholder="请输入搜索的产品" placeholder-class="inputPlace" />
			</view>
		</view>
		<!-- 主内容 -->
		<view class="jctbxzjx">
			<!-- 左侧 -->
			<view class="catalogueleft" >
					<view :class="data.id == catalogue.checkId ? 'navtab_item  nav-active' : 'navtab_item'  " v-for="data in catalogue.catalogueData" :key="data.id"  :id="data.id" v-on:click="checkData">
						<text>{{data.text}}</text>
					</view>
			</view>
			<!-- 右侧 -->
			<view class="catalogueright">
				<view class="tabcont">
					<view class="tabcontitem">
						<view class="tableftimg tabfloct">
							<navigator url="">
								<image class="productimg" src="https://pic.kaifadanao.cn/20190729/0031f95703e378620256cebb5bfe8cce.jpg" mode="widthFix"></image>
							</navigator>
						</view>
						<view class="tabright tabfloct">
							<view class="title">
								识字第二课《金木水火土》
							</view>
							<view class="renqi">
								473人气
							</view>
							<view class="" v-on:click="collect">
								<image class="collectimg" :src="collectClick.img" mode="widthFix"></image>
								<text class="collecttext">{{collectClick.text}}</text>
							</view>
						</view>
					</view>

				</view>
				<view class="">
					<uni-load-more :status="status" />
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	export default {
		data() {
			return {
				status: 'more',
				statusTypes: [{
					value: 'more',
					text: '加载前'
				}, {
					value: 'loading',
					text: '加载中'
				}, {
					value: 'noMore',
					text: '没有更多'
				}],
				collectClick: {
					index:1,
					text:'未收藏',
					img:'../../static/jctbxzjx/shoucangwei.png'
				},
				catalogue:{
					checkId:0,
					catalogueData:[{
					text:'一年级上册',
					id:0
				},{
					text:'一年级下册',
					id:1
				},{
					text:'二年级上册',
					id:2
				},{
					text:'二年级下册',
					id:3
				},{
					text:'三年级上册',
					id:4
				},{
					text:'三年级下册',
					id:5
				},{
					text:'四年级上册',
					id:6
				},{
					text:'四年级下册',
					id:7
				},{
					text:'五年级上册',
					id:8
				},{
					text:'五年级下册',
					id:9
				},{
					text:'六年级上册',
					id:10
				},{
					text:'六年级下册',
					id:11
				}]}
			}
		},
		components: {
			uniLoadMore
		},
		onLoad() {

		},
		//上拉加载
		onReachBottom() {
			console.log("上拉");
			let _self = this
			_self.status = 'loading' //赋值加载中
			uni.showNavigationBarLoading()
			setTimeout(function() {
				_self.status = 'more' //赋值查看更多
				uni.hideNavigationBarLoading()
			}, 1000);
		},
		methods: {
			//上拉
			load: function() {
				console.log(1);
			},
			//收藏点击
			collect(e) {
				let _self = this
				if(_self.collectClick.index==1){
					_self.collectClick.text='已收藏';
					_self.collectClick.img='../../static/jctbxzjx/shoucangyi.png';
					_self.collectClick.index=2;
				}else{
					_self.collectClick.text='未收藏';
					_self.collectClick.img='../../static/jctbxzjx/shoucangwei.png';
					_self.collectClick.index=1;
				}
			},
			//选择点击
			checkData(e){
				let id = e.currentTarget.id;
				this.catalogue.checkId=id;
			}
		},
		mounted() {}
	}
</script>

<style>
	@import "./onlineTeach.css";
</style>
