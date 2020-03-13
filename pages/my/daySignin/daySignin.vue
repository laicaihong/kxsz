<template>
	<view class="">
		<view class="daySignin_top">
			<view class="qiandaoborder" v-on:click="show">
				<image class="dateimg" src="../../../static/my/dateimg.png" mode="widthFix"></image>
				<text>{{selected[selected.length-1].date == isSign.nowTime ? "已签到":"签到"}}</text>
			</view>
			<view class="qiaodaotext">
				已连续签到 {{selected.length}} 天，继续加油！
			</view>
		</view>
		<!-- 日历插件 -->
		<uni-calendar 
		    :insert="true"
		    :lunar="true" 
		    :disable-before="true" 
		    :start-date="'2019-9-2'"
		    :end-date="'2019-5-20'"
			:selected="selected"
		     />
		<!-- 弹出层 -->
		<uni-popup ref="popup" type="center">今日已签到</uni-popup>
		<!-- 打卡 -->
		<view class="dakaciclecont_daka">
			<view class="dakaciclecont_daka_flex">
				<navigator url="/pages/publishedDiary/publishedDiary">
					<text>打卡</text>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import uniCalendar from "@/components/uni-calendar/uni-calendar"
	import uniPopup  from "@/components/uni-popup/uni-popup.vue"
	export default{
		components:{
			uniCalendar,	//日历组件
			uniPopup		//弹出层组件
		},
		data(){
			return{
				//是否签到
				isSign:{
					nowTime:""
				},
				//签到的时间
				selected:[{
					date:'2019-9-5'
				}]
			}
		},
		onLoad() {
			let date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();
			let dataTime =year+"-"+month+"-"+day;
			this.isSign.nowTime=dataTime;	//把今天的日期存入签到里，以便进行判断今日是否有签到
		},
		methods:{
			//签到点击
			show(){
				let date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				let dataTime ={date:year+"-"+month+"-"+day} ;
				let _self=this;
				//判断是否签到
				if(_self.selected[_self.selected.length-1].date!=dataTime.date){
					_self.selected.push(dataTime);
				}else{
					_self.$refs.popup.open();
					setTimeout(function(e){
						_self.$refs.popup.close();
					},1000)
				}
			}
		},
		mounted() {
			
		}
	}
</script>

<style>
	@import "./daySignin.css";
</style>
