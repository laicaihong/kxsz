<template>
	<view>
		<view class="mycollect">
			<view class="search">
				<image class="searchicon" src="../../../static/jctbxzjx/search.png" mode=""></image>
				<input type="text" class="searchinput" value="" placeholder="搜索" placeholder-class="inputPlace" />
			</view>
			<view class="navtab">
				<view :class="data.typeId==currentId ? 'navtab_item nav-active' : 'navtab_item'" v-for="data in section" >
					<image class="navtabimg" :src="data.typeId==currentId ? data.clicknavtabimg : data.navtabimg" mode="widthFix"></image>
					<text>{{data.name}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				currentId: '1',
				section:[{
					navtabimg:'../../../static/my/collectshipin-wei.png',
					clicknavtabimg:'../../../static/my/collectshipin-yi.png',
					name:'视频',
					typeId:'1'
				},{
					navtabimg:'../../../static/my/collectyinpin-wei.png',
					clicknavtabimg:'../../../static/my/collectyinpin-yi.png',
					name:'音频',
					typeId:'2'
				},{
					navtabimg:'../../../static/my/chanpin-wei.png',
					clicknavtabimg:'../../../static/my/chanpin-yi.png',
					name:'产品',
					typeId:'3'
				}]
			}
		},
		onLoad(option) {
			this.currentId=option.currentId;
		}
	}
</script>

<style>
	@import "./mycollect.css";
</style>
