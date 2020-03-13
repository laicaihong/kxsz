<template>
	<view class='section'>
	  <view class="header-box">
	    <image class="header class_first" src='avatar'></image>
	
	    <view class="body-box class_second">
	      <view class='section_cont'>
	        <view class="item1">
	           <view class='name showinfo'>{{userinfo.username}}</view>
	           <image v-if="status==1" class='icon wujieguo' src='../../../static/my/wujieguo.png'></image>
	           <view  v-if="status==1" class="tip">{{tips}}</view>
	           <view class='name showinfos' v-if="status==2"><image src="userinfo.signature" mode="widthFix"></image></view>
	           <view class='time showinfo' vif="status==2">{{userinfo.createtime}}</view>
	        </view>
	       
	        <!-- 没有个性签名是显示 -->
	        <view class='noshow' v-if="status==3">
	          <view class='text'>{{userinfo.nickname}}</view>
	           <image class='icon wujieguo' src='../../../static/jctbxzjx/wujieguo.png'></image>
	           <view class="tip">{{tips}}</view>
	        </view>
	        <navigator v-if="status==3" class='seedetail' url="/pages/Signature/Signature">申请签名</navigator>
	      </view>  
	    </view>
	  </view>
	  
	</view>
</template>

<script>
	export default{
		data(){
			return{
				 name:'梁雨淇',
				    time:'2000-01-01',
				    userinfo:'',
				    second_height: 0,
				    status:3,
				    tips:'您还没有自己的个性签名...',
				    createtime:'1235',
					avatar:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTImGnI4CvBVQ7A5qE2HaRzGnmHKQRGn29HvGNPhZNytKehEuoViaLnUmECBX4KUicWoicsibR1lwchXIQ/132'
			}
		},
		onLoad: function (options) {
		    var that = this;
		   
		    // util.ajax('/api/index/getProfile', {}, res => {
		    //   that.setData({
		    //     avatar: res.data.avatar,
		    //   })
		    // })
		    //1已申请，未设计签名,2:已申请，已设计签名，3未申请
		      // util.ajax('/api/videoPacks/getSignature','',res=>{
		      //   if (res.data.status==1){
		      //     that.setData({
		      //       userinfo: res.data.data,
		      //       status: res.data.status,
		      //       tips: '签名正在努力设计中...',
		      //       
		      //     })
		      //   } else if (res.data.status == 2){
		      //     that.setData({
		      //       userinfo: res.data.data,
		      //       status: res.data.status,
		      //       tips: res.msg
		      //     })
		      //   }else{
		      //     that.setData({
		      //       userinfo: res.data.data,
		      //       status: res.data.status,
		      //       // createtime: res.data.data.createtime
		      //     })
		      //   }
		      //   
		      // })
		  },
	}
</script>

<style>
	@import './signatrue.css'
</style>
