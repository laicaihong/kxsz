<template>
	<!--pages/my/mydiscount/mydiscount.wxml-->
	
	<view class='mydiscount'>
	  <view class='mydiscount_title'>优惠券
	    <text class='discountNum'>{{total}}</text>个
	    <view class='wrap' style="float:right" v-if="way==1">
	  <view class='checkbox-con'>
	    <radio-group>
	      <label v-for="(item,index) in checkboxArr" :key="index">
	        <checkbox/>{{item.name}}
	      </label>
	    </radio-group>
	    
	  </view>
	  </view>
	
	  
	</view>
	
	  <view class="mydiscount_list"  v-for="(item,index) in mydiscount" :key="index">
	    <view class='mydiscount_item'>
	      <view class='left floatcont'>
	        {{item.prices}}
	      </view>
	
	      <view class='right floatcont'>
	        <view class='fullmoney'>满{{item.couponcondition}}元可使用</view>
	        <view class='perod'>
	          有效期:{{item.effectstart}}-{{item.effectend}}
	        </view>
	      </view>
	    </view>
	    
	  </view>
	  
	
	   <!-- <view class="mydiscount_list" v-for="(item,index) in mydiscount" :key="index">
	     <view class='mydiscount_items'>
	      <view class='left floatcont'>
	        {{item.prices}}
	      </view>
	
	      <view class='right floatcont'>
	        <view class='fullmoney'>满{{item.couponcondition}}元可使用</view>
	        <view class='perod'>
	          有效期:{{item.effectstart}}-{{item.effectend}}
	        </view>
	      </view>
	    </view> -->
	    
	  </view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				total:'0',
				    mydiscount:[],
				
				
				    page:1,
				    page_size:10,
				    count:1,
				    // if_use:false
				    prv_money:0,
				    checkboxArr: [{
				      name: '不使用优惠券',
				      checked: false
				    }],
				    checkValue:false,
				    way:'',
				    p_id:'',
				    ct_id:'',
				    ar_id:'',
				    score:'',
				    quantity:'',
				    price:''		
			}
		},
		 onLoad: function (options) {
		   var that = this
		    if(options.way ==1){
		      this.setData({
		        way: 1,
		        money: options.money,
		        prv_money:options.prv_money,
		        p_id: options.p_id,
		        ct_id: options.ct_id,
		        ar_id:options.ar_id,
		        quantity:options.quantity,
		        price: options.price,
		        score: options.score
		      })
		    }
		
		
		  
		   that.page = 1
		   that.getData()
		   
		  },
methods:{
	getData() {
	   const that = this
	   const param = {
	     page: that.page,
	     page_size: that.page_size
	   }
	   const studylis = that.studylist
	   if (that.count < that.page) {
	     wx.showToast({
	       title: '暂无更多信息',
	     })
	   } else {
	     // that.ajax('/api/shop/usercouponList', param, res => {
	       // var mydiscount = that.mydiscount
	       // that.setData({
	       //   total: res.data.total,
	       //   page: that.data.page + 1,
	       //   count: res.data.count > 1 ? res.data.count : 1,
	       //   mydiscount: mydiscount.concat(res.data.list)
	       // })
	       // wx.stopPullDownRefresh();
	     
	       if (that.way == 1) {
	         // this.setData({
	         //   money: options.money
	         // })
	         var len = that.mydiscount.length;
	         let mydiscount = that.mydiscount;
			 mydiscount = [{
			 			  cp_id:1,
			 			  name:'绝对是飞机',
			 			  checked:false,
			 			  couponcondition:50,
			 			  effectstart:'2019-05-12',
			 			  effectend:'2016-05-12',
						  prices:10
			 }]
	         for (var i = 0; i < len; i++) {
	           if (that.price > mydiscount[i].couponcondition) {             
	             mydiscount[i].if_use = true;
	           }else{
	             mydiscount[i].if_use = false;
	           }
	         }
	        
	           that.mydiscount=mydiscount
	        
	       }else{
	         var len = that.mydiscount.length;
	         let mydiscount = that.mydiscount;
			 mydiscount = [{
			 			  cp_id:1,
			 			  name:'绝对是飞机',
			 			  checked:false,
			 			  couponcondition:50,
			 			  effectstart:'2019-05-12',
			 			  effectend:'2016-05-12',
						  prices:10
			 },{
			 			  cp_id:2,
			 			  name:'绝对是飞机',
			 			  checked:false,
			 			  couponcondition:50,
			 			  effectstart:'2019-05-12',
			 			  effectend:'2016-05-12',
						  prices:10
			 }]
	         for (var i = 0; i < len; i++) {
			
	           mydiscount[i].if_use = true;
			
	         }
	        
	          that.mydiscount=mydiscount
	        
	       }
	     }
		 console.log(that.mydiscount)
	   // }
	 },
			
	
	 checkboxChange: function (e) {
	   var checkValue = !e.currentTarget.dataset.value;
	   var index = e.currentTarget.dataset.index;//获取当前点击的下标
	   var checkboxArr = this.data.checkboxArr;//选项集合
	   checkboxArr[index].checked = !checkboxArr[index].checked;//改变当前选中的checked值
	  
	   this.setData({
	     checkValue: checkValue,
	     checkboxArr: checkboxArr
	   });
			
	   if (this.data.checkValue == true) {
	    
	    
	     if (this.data.way == 1) {
			
	       var if_use = e.currentTarget.dataset.if_use;
	       var discount_id = '';
	       var moneys = 0;
	       let tols = (parseFloat(this.data.money) + parseFloat(this.data.prv_money)) - parseFloat(moneys);
	       let tol = tols.toFixed(2);
	       if (tol <= 0) {
	         tol = 0.01
	       }
	       if (if_use == false) {
	         return;
	       } else {
	         console.log('333',this.data.score)
	         var param = {
	           ct_id: this.data.ct_id,
	           p_id: this.data.p_id,
	           ar_id: this.data.ar_id,
	           score: this.data.score,
	           cp_id: 0,
	           quantity: this.data.quantity
	         }
	         util.ajax('/api/goods/OrderMoney', param, res => {
			
	           // that.setData({
	           //   integral: res.data.use_integral,
	           //   totals: parseFloat(res.data.amount)
	           // })
			
	           var pages = getCurrentPages();
	           var prevPage = pages[pages.length - 2];  //上一个页面
	           prevPage.setData(
	             {
	               discount: discount_id,
	               totals: res.data.amount.toFixed(2),
	               integral: res.data.use_integral,
	               prv_money: moneys
	             }
	           )//设置数据
	           wx.navigateBack({
	             delta: 1, // 回退前 delta(默认为1) 页面
	           })
			
	         })
	      
	         
	         // prevPage.setData(
	         //   {
	         //     discount: discount_id,
	         //     totals: tol,
	         //     prv_money: moneys
	         //   }
	         // )//设置数据
	        
	       }
	     } else {
	       return;
	     }
	   }
	 },
	 confirm: function () {// 提交
	   console.log(this.data.checkValue)//所有选中的项的value
	 },
			
	 click:function(e){
	  
	   if(this.data.way==1){
	     
	     var if_use = e.currentTarget.dataset.if_use;
	     var discount_id = e.currentTarget.dataset.discount_id;
	    
	       var moneys = e.currentTarget.dataset.money;
	     
	     var param = {
	       ct_id: this.data.ct_id,
	       p_id: this.data.p_id,
	       ar_id: this.data.ar_id,
	       score: this.data.score,
	       cp_id: discount_id,
	       quantity: this.data.quantity
	     }
	     var that = this;
	     let tols = (parseFloat(this.data.money) + parseFloat(this.data.prv_money)) -parseFloat(moneys);
	     let tol = tols.toFixed(2);
	     if(tol <= 0){
	       tol = 0.01
	     }
	     if (if_use == false) {
	       return;
	     } else {
	       util.ajax('/api/goods/OrderMoney', param, res => {
			
	         // that.setData({
	         //   integral: res.data.use_integral,
	         //   totals: parseFloat(res.data.amount)
	         // })
			
	         var pages = getCurrentPages();
	         var prevPage = pages[pages.length - 2];  //上一个页面
	         prevPage.setData(
	           {
	             discount: discount_id,
	             totals: res.data.amount.toFixed(2),
	             integral: res.data.use_integral,
	             prv_money: moneys
	           }
	         )//设置数据
	         wx.navigateBack({
	           delta: 1, // 回退前 delta(默认为1) 页面
	         })
			
	       })
			
			
			
	     
	       // var pages = getCurrentPages();
	       // var prevPage = pages[pages.length - 2];  //上一个页面
	       // prevPage.setData(
	       //   { 
	       //     discount: discount_id,
	       //     totals: tol,
	       //     prv_money: moneys
	       //   }
	       //   )//设置数据
	       // wx.navigateBack({
	       //   delta: 1, // 回退前 delta(默认为1) 页面
	       // })
	     }
	   }else{
	     return;
	   }
	  
	 }
}
		 
	}
</script>

<style>
	@import "./mydiscount.css";
</style>
