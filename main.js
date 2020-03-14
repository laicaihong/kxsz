import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false

// 引入公有css
import './static/globle.less';

App.mpType = 'app'

const app = new Vue({
    ...App
})

Vue.prototype.ajax = function(url, params, cb) {
			  // wx.showLoading({
			  //   title: '加载中',
			  //   mask: true,    
			  // })
			  wx.request({
			    url: 'https://kxsx.kaifadanao.cn' + url,
			    method: 'post',
			    data: params,
			    header: {
			      'content-type': 'application/json',
			      'token': wx.getStorageSync("token")
			    },
			    success: function (res) {
			      wx.hideLoading();
			     
			      if (res.data.status == 0) {
			        
			        wx.hideLoading();
			        wx.showToast({
			          title: res.data.msg,
			          icon: 'none',
			          mask: true
			        })
			      } else if (res.data.status == -1) {
			      
			        //未登录，登录授权
			        wx.navigateTo({
			          url: '/pages/login/login',
			        })
			      
			      }
			     
			      else if (res.data.status == 1 || res.data.status == 2 || res.data.status == 3) {
			       
			        return typeof cb == "function" && cb(res.data)
			      }
			    },
			    fail: function () {
			     /* wx.hideLoading();
			      wx.showModal({
			        title: '网络错误',
			        content: '网络出错，请刷新重试',
			        showCancel: false,
			        mask: true
			      }) */
			      return typeof cb == "function" && cb(false)
			    }
			  })
			
		}
app.$mount()
