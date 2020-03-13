<template>
	<view>
		<image class="bg-img" src="../../static/reg/bj.png" mode="widthFix"></image>
		<view class="bottom-box">
			<view style="text-align: center;">
				<image class="logo-img" src="../../static/reg/log.png" mode="widthFix"></image>
				<view class="title">
					新用户注册
				</view>
				<form action="">
					<view class="form">
						<view class="form-item">
							<text class="itemtitle">姓名</text>
							<input maxlength="7" type="text" value="" class="input picker" placeholder="请填写姓名"/>
						</view>
						<view class="form-item">
							<picker mode="selector" :range="gender" class="" @change="bindSchoolChange">
								<text class="itemtitle">学校</text>
								<view class="picker">
									{{gender[uploadInfo.school]}}
									<image class="xaiicon" src="../../static/my/righticon.png" mode="widthFix"></image>
								</view>
							</picker>
						</view>
						<view class="form-item">
							<picker mode="selector" :range="genClass" class="" @change="bindClassChange">
								<text class="itemtitle">年级</text>
								<view class="picker">
									{{genClass[uploadInfo.class]}}
									<image class="xaiicon" src="../../static/my/righticon.png" mode="widthFix"></image>
								</view>
							</picker>
						</view>
						<view class="form-item">
							<picker mode="selector" :range="grade" class="" @change="bindGradeChange">
								<text class="itemtitle">班级</text>
								<view class="picker">
									{{grade[uploadInfo.classClass]}}
									<image class="xaiicon" src="../../static/my/righticon.png" mode="widthFix"></image>
								</view>
							</picker>
						</view>
						<view class="form-item">
							<view class="pickerpicker" @click="toggleTab">
								<text class="itemtitle">家庭住址</text>
								<view class="picker">
									<text v-if="uploadInfo.region.length==0"></text>
									<text v-else class="pickerText">
										{{uploadInfo.region[0]}}，{{uploadInfo.region[1]}}，{{uploadInfo.region[2]}}
									</text>
									<image class="xaiicon" src="../../static/my/righticon.png" mode="widthFix"></image>
								</view>
							</view>
							</picker>
							<w-picker mode="region"  @confirm="bindCityChange" ref="region"></w-picker>
						</view>
						<view class="form-item">
							<text class="itemtitle">详细住址</text>
							<input  type="text" value="" class="input picker"/>
						</view>
						<view class="form-item">
							<text class="itemtitle">联系方式</text>
							<input maxlength="11" type="number" value="" class="input picker" />
						</view>
						<view class="form-item">
							<text class="itemtitle">验证码</text>
							<text class="get_code" @click="getcode">发送验证码</text>
						</view>
						<view class="lijishengji">
							<button @click="save" class="sengjibtn">确定</button>
						</view>
					</view>
				</form>
			</view>
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
				gender:['a学校', 'b学校', 'c学校', 'd学校', 'e学校', 'f学校'],
				genClass:['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'],
				grade:['1班', '2班', '3班', '4班', '5班', '6班'],
				uploadInfo:{
					school:'',		//学校
					class:'',		//年级
					classClass:'',	//班级
					province: '', 	//省份
					city: '', 		//城市
					area: '', 		//地区
					region: [],
				}
			}
		},
		methods:{
			//学校点击
			bindSchoolChange(e){
				this.uploadInfo.school=e.target.value;
			},
			//年级点击
			bindClassChange(e){
				this.uploadInfo.class=e.target.value;
			},
			//班级点击
			bindGradeChange(e){
				this.uploadInfo.classClass=e.target.value;
			},
			//地区点击出现选项
			toggleTab() {
				this.$refs.region.show();
			},
			//地区选择点击
			bindCityChange(e) {
				this.uploadInfo.region=e.checkArr;
			},
			//发送验证码点击
			getcode(){
				
			},
			//确定点击
			save(){
				
			}
		}
	}
</script>

<style>
	@import "./reg.css";
</style>
