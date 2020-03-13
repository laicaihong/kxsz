<template>
	<view class="wrap">
	  <view class="title">点击下方激活码即可复制，发送给好友，共享视频吧</view>
	  <view class="item-box">
	    <text class="item item.status==0?'':'dis'" v-for="(item,index) in dataList" :key="index" selectable="true">{{item.code}}</text>
	    
	  </view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				count:1,
				    contents:'',
				    page:1,
				    page_size:10,
				    cl_id:'',
				    dataList: [
						{status:0,code:'ftewretywrwe'}
						]
			}
		},
		onLoad:function(options){
			// this.getData()
		},
		methods:{
			 getData() {
			    var that = this;
			    const dataList = that.dataList
			    if (that.count < that.page) {
			      wx.showToast({
			        title: '暂无更多信息',
			        icon:'none'
			      })
			    } else {
			      util.ajax('/api/videopacks/codelist', { cl_id: that.cl_id }, res => {
			        var dataList = that.dataList
			        let list = res.list;
			      
			
			        // that.setData({
			        //   page: that.data.page + 1,
			        //   page: that.data.page + 1,
			        //   count: res.data.count > 1 ? res.data.count : 1,
			        //   dataList: dataList.concat(list)
			        // })
			        // wx.stopPullDownRefresh();
			       
			      })
			     
			    }
			    
			    
			  },
		}
	}
</script>

<style>
	.item-box {
	  display: flex;
	  flex-wrap: wrap;
	  padding-left: 0;
	  justify-content:space-around;
	}
	
	.item {
	  flex:0 0 30%;
	background-color:#080;
	font-size:26rpx;
	color:white;
	height:100rpx;
	line-height:100rpx;
	text-align:center;
	margin-bottom:30rpx;
	justify-content:space-around;
	border-radius:10rpx;
	}
	
	.title {
	  height: 90rpx;
	  line-height: 90rpx;
	  font-size: 30rpx;
	  text-align: center;
	  color: #999;
	  margin-bottom: 20rpx;
	}
	.dis{
	  background-color: #f5f5f5;
	  color:#999;
	  border:1rpx solid #ccc;
	}
</style>
