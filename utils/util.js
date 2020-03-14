const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function ajax(url, params, cb) {
  wx.showLoading({
    title: '加载中',
    mask: true,
  })
  wx.request({
    url: getApp().globalData.requestUrl + url,
    method: 'post',
    data: params,
    header: {
      'content-type': 'application/json',
      'token': wx.getStorageSync("token")
    },
    success: function(res) {
      wx.hideLoading();
      // wx.navigateTo({
      //   url: '/pages/logo/logo',
      // })

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
      //  else if (res.data.status == 7) {

      //   //未登录，登录授权
      //   wx.redirectTo({
      //     url: '/pages/reg/reg',
      //   })

      // }
      else if (res.data.status == 1 || res.data.status == 2 || res.data.status == 3) {

        return typeof cb == "function" && cb(res.data)
      }
    },
    fail: function() {
      wx.hideLoading();
      wx.showModal({
        title: '网络错误',
        content: '网络出错，请刷新重试',
        showCancel: false,
        mask: true
      })
      return typeof cb == "function" && cb(false)
    }
  })
}






// const fetch(url, data, method = 'post') {
//   if (url == this.url && (+new Date() - this.fetchTime < 300)) {
//     return
//   }
//   this.lastUrl = url;
//   this.fetchTime = +new Date();
//   wx.showLoading({
//     title: '加载中',
//     mask: true
//   })
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: `${this.serverUrl}${url}`,
//       method: method,
//       header: {
//         'content-type': 'application/json',
//         'token': this.token,
//         'role': this.isUser ? 1 : 2
//       },
//       data: data,
//       success: (res) => {
//         // wx.hideLoading();
//         if (this.disableHideLoding(url)) {
//           wx.hideLoading();
//         }
//         wx.stopPullDownRefresh();
//         if (res.data.code == 0) {
//           resolve(res.data)
//         }
//         else {
//           this.tip(res.data.msg)
//           if (res.data.msg == '登录过期' || res.data.msg == '无效token') {
//             this.token = '';
//             wx.setStorage({
//               key: "token",
//               data: ''
//             })

//             wx.navigateTo({
//               url: "/pages/logins/login"
//             });


//           }
//           reject(res.data)
//         }
//       },
//       fail: (err) => {
//         wx.hideLoading();
//         wx.stopPullDownRefresh();
//         reject(err)
//       }
//     })
//   })
// },

function throttle(fn, gapTime) {
  if (gapTime == null || gapTime == undefined) {
    gapTime = 1500
  }

  let _lastTime = null
  return function() {
    let _nowTime = +new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn()
      _lastTime = _nowTime
    }
  }
}
module.exports = {
  formatTime: formatTime,
  ajax: ajax,
  throttle: throttle

};