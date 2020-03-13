<template>
	<view class="">
		<view class="loginText">
			欢迎注册
		</view>
		<view class="register">
			<navigator url="" style="display: inline-block;">
				已有账号，立即登录
			</navigator>
		</view>
		<form action="">
			<input maxlength="11" class="phoneInput loginInput" type="number" value="" placeholder="请输入手机号码" placeholder-class="pla"  v-model="phone"/>
			<view class="yzmLogin">
				<input type="text" class="yzmInput" value="" placeholder="请输入验证码" placeholder-class="pla" v-model="yzm"/>
				<text v-if="second==''" class="yzmBtn" @click="yzmBtn">获取验证码</text>
				<text v-else class="yzmTime">{{second}}s</text>
			</view>
			<input  type="password" class="passwordInput loginInput" value="" placeholder="请输入登录密码(6-18位字符)" placeholder-class="pla" v-model="password"/>
			<input  type="password" class="passwordInput loginInput" value="" placeholder="请再次输入登录密码（6-18位字符）" placeholder-class="pla" v-model="rePassword"/>
			<button  :class="phone==''||password=='' || yzm=='' || rePassword==''?'loginBtn loginnBtNo':'loginBtn loginnBtnYes' "  :disabled="phone==''||password=='' || yzm=='' || rePassword==''?true:false">注册</button>
		</form>
		<view class="">
			<view class="orderLoginView">
				<text>第三方登录</text>
			</view>
			<view class="orderLoginBtn">
				<image src="../../../static/login/qq.png" mode="widthFix" class="qqlogin"></image>
				<image src="../../../static/login/weixin.png" mode="widthFix" class="weixinlogin"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				phone:'',		//电话
				second:'',		//秒数
				yzm:'',			//验证码
				password:'',	//密码
				rePassword:'',	//二次密码
			}
		},
		methods:{
			//获取验证码点击
			yzmBtn(){
				let _self=this
				let s=60
				let stime=setInterval(function(){
					s--;
					if(s==0){
						_self.second=''
						clearInterval(stime)
					}else{
						_self.second=s
					}
				},1000)
			}
		}
	}
</script>

<style>
	@import "./register.css";
</style>
