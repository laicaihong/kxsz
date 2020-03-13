<template>
	<view>
		<view class="myorder_tab">
			<view :class="data.typeId==currentId ? 'navtab_item nav-active' : 'navtab_item'" v-for="data in section" :key="data.typeId">
				<text class="text">{{data.name}}</text>
			</view>
		</view>
		<view class="lstgjl-bodys">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentId: '1',
				section: [{
						name: '书法作品',
						typeId: '1'
					}, {
						name: '绘画作品',
						typeId: '2'
					},
					{
						name: '阅读朗诵',
						typeId: '3'
					},
					{
						name: '快乐书写',
						typeId: '4'
					}
				]
			}
		},
		load() {

		}
	}
</script>

<style>
	@import "./lstgjl.css";
</style>
