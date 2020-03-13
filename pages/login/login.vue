<template>
	<view>
		<view class="loginText">
			登录
		</view>
		<view class="register">
			<navigator url="" style="display: inline-block;">
				还没有账号，立即注册
			</navigator>
		</view>
		<form action="">
			<input maxlength="11" class="phoneInput loginInput" type="number" value="" placeholder="请输入手机号码" placeholder-class="pla"  v-model="phone"/>
			<input v-if="msgLogin=='isMsgLogin'" type="password" class="passwordInput loginInput" value="" placeholder="请输入密码" placeholder-class="pla" v-model="password"/>
			<view class="yzmLogin" v-else>
				<input type="text" class="yzmInput" value="" placeholder="请输入验证码" placeholder-class="pla" v-model="yzm"/>
				<text v-if="second==''" class="yzmBtn" @click="yzmBtn">获取验证码</text>
				<text v-else class="yzmTime">{{second}}s</text>
			</view>
			<button v-if="msgLogin=='isMsgLogin'" :class="phone==''||password==''?'loginBtn loginnBtNo':'loginBtn loginnBtnYes' "  :disabled="phone==''||password==''?true:false">登录</button>
			<button v-else :class="phone==''||yzm==''?'loginBtn loginnBtNo':'loginBtn loginnBtnYes' "  :disabled="phone==''||yzm==''?true:false">登录</button>
			<view class="orderLogin">
				<text v-if="msgLogin=='isMsgLogin'" @click="orderLogin(msgLogin)">短信登录</text>
				<text v-else @click="orderLogin(msgLogin)">账号密码登录</text>
			</view>
		</form>
		<view class="">
			<view class="orderLoginView">
				<text>第三方登录</text>
			</view>
			<view class="orderLoginBtn">
				<image src="../../static/login/qq.png" mode="widthFix" class="qqlogin"></image>
				<image src="../../static/login/weixin.png" mode="widthFix" class="weixinlogin"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				//登录判断，判断是否是短信登录
				msgLogin:'isMsgLogin',
				phone:'',					//电话，账号
				yzm:'',						//验证码
				password:'',				//密码
				second:''					//验证码需要的秒
			}
		},
		methods:{
			//短信登录、账号登录点击
			orderLogin(id){
				if(id=='isMsgLogin'){
					this.msgLogin='isAccountLogin'
				}else{
					this.msgLogin='isMsgLogin'
				}
			},
			//获取验证码点击
			yzmBtn(){
				console.log(1);
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
			
		},
		mounted() {
			
		}
	}
</script>

<style>
	@import "./login.css";
</style>
