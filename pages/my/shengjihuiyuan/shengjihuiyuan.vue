<template>
	<view class="">
		<!-- 头像 -->
		<view class="top">
			<view class="touxiang">
				<image class="shengjiimg" src="../../../static/my/daifukuan.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="bj"></view>
		<view class="bottom">
			<form action="">
				<view class="form">
					<view class="form-item">
						<text class="itemtitle">昵称</text>
						<input type="text" class="input picker" placeholder="请填写昵称" placeholder-class="pla">
					</view>
					<view class="form-item">
						<picker mode="selector" :range="sex" @change="bindGradeChange">
							<text class="itemtitle">性别</text>
							<view class="picker">
								{{sex[uploadInfo.gender]}}
								<image class="xaiicon" src="../../../static/my/righticon.png" mode="widthFix"></image>
							</view>
						</picker>
					</view>
					<view class="form-item">
						<picker mode="date"  @change="bindBirthdayChange">
							<text class="itemtitle">出生日期</text>
							<view class="picker">
								{{uploadInfo.birthday}}
								<image class="xaiicon" src="../../../static/my/righticon.png" mode="widthFix"></image>
							</view>
						</picker>
					</view>
					<view class="form-item">
						<picker mode="selector" :range="genClass" class="" @change="bindClassChange">
							<text class="itemtitle">年级</text>
							<view class="picker">
								{{genClass[uploadInfo.class]}}
								<image class="xaiicon" src="../../../static/my/righticon.png" mode="widthFix"></image>
							</view>
						</picker>
					</view>
					<view class="form-item">
						<view class="pickerpicker" @click="toggleTab">
							<text class="itemtitle">地区</text>
							<view class="picker">
								<text v-if="uploadInfo.region.length==0"></text>
								<text v-else class="pickerText">
									{{uploadInfo.region[0]}}，{{uploadInfo.region[1]}}，{{uploadInfo.region[2]}}
								</text>
								<image class="xaiicon" src="../../../static/my/righticon.png" mode="widthFix"></image>
							</view>
						</view>
						</picker>
						<w-picker mode="region"  @confirm="bindCityChange" ref="region"></w-picker>
					</view>
					<view class="form-item">
						<text class="itemtitle">联系方式</text>
						<input type="number" maxlength="11" class="input picker" placeholder="请填写联系方式" placeholder-class="pla">
					</view>
					<view class="lijishengji">
						<button @click="save" class="sengjibtn">立即升级</button>
					</view>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default{
		components: {
			wPicker
		},
		data(){
			return{
				sex:['男','女'],
				genClass:['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'],
				uploadInfo:{
					gender:'',		//性别
					birthday: '', 	//生日
					class:'',		//年级
					region:[],		//地区
					province: '', 	//省份
					city: '', 		//城市
					area: '', 		//地区
				}
			}
		},
		methods:{
			//性别点击
			bindGradeChange(e){
				this.uploadInfo.gender=e.target.value;
			},
			//生日选择点击
			bindBirthdayChange(e) {
				this.uploadInfo.birthday = e.target.value;
			},
			//年级点击
			bindClassChange(e){
				this.uploadInfo.class=e.target.value;
			},
			//地区点击出现选项
			toggleTab() {
				this.$refs.region.show();
			},
			//地区选择点击
			bindCityChange(e) {
				this.uploadInfo.region=e.checkArr;
			},
			//确定点击
			save(){
				
			}
		}
	}
</script>

<style>
	@import "./shengjihuiyuan.css";
</style>
