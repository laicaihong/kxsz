<template>
	<view>
		<!-- 订单导航 -->
		<view class="myorder_tab">
			<view :class=" data.typeId==currentId? 'navtab_item nav-active' : 'navtab_item'" v-for="data in section" :key="data.typeId">
				<text>{{data.name}}</text>
			</view>
		</view>
		<!-- 订单主内容 -->
		<view class="tabcont daifukuan">
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				currentId: '1',
				section:[{
					name: '全部',
					typeId: '0'
				},{
					name: '待付款',
					typeId: '1'
				},{
					name: '待发货',
					typeId: '2'
				},{
					name: '待收货',
					typeId: '3'
				},{
					name: '退货',
					typeId: '4'
				}]
			}
		},
		onLoad(option) {
			this.currentId=option.currentId;
		}
	}
</script>

<style>
	@import "./myOrder.css";
</style>
