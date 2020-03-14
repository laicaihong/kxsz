<template>
<view>
<!--template/tabbar.wxml-->

<template name="tabBar">
  <view class="tab-bar" :style="'color: ' + tabBar.color + '; background: ' + tarBar.backgroundColor + '; ' + (tabBar.position=='top'? 'top: 0' : 'bottom: 0') + '; ' + (tabBar.borderStyle? (tabBar.position=='top'? 'border-bottom: solid 1px '+tabBar.borderStyle + ';' : 'border-top: solid 1px '+tabBar.borderStyle + ';') : '')">
    <block v-for="(item, pagePath) in tabBar.list" :key="pagePath">
      <navigator :url="item.pagePath" open-type="redirect" :class="item.clas" :style="item.active? 'color: '+(item.selectedColor? item.selectedColor : tabBar.selectedColor) : ''">
        <image :src="item.selectedIconPath" v-if="item.active" class="img"></image>
        <image :src="item.iconPath" v-if="!item.active" class="img"></image>
        <text>{{item.text}}</text>
      </navigator>
    </block>
    <view class="clear"></view>
  </view>
</template>
</view>
</template>

<script>

export default {
  data() {
    return {
      "color": "#999999",
      "selectedColor": "#48db8d",
      "backgroundColor": "#fff",
      "borderStyle": "#999999",
      "list": [{
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconPath": "/img/index/weiindex_icon.png",
        "selectedIconPath": "/img/index/yiindex_icon.png",
        "clas": "menu-item",
        "selectedColor": "#48db8d",
        active: true
      }, {
        "pagePath": "/pages/onlinestore/fenleilist/fenleilist",
        "text": "分类列表",
        "iconPath": "/img/onlinestore/fenleiwei.png",
        "selectedIconPath": "/img/onlinestore/fenleiyi.png",
        "selectedColor": "#48db8d",
        "clas": "menu-item",
        active: false
      }, {
        "pagePath": "pages/onlinestore/shopcart/shopcart",
        "text": "购物车",
        "iconPath": "/img/onlinestore/gouwucwei.png",
        "selectedIconPath": "/img/onlinestore/gouwucyi.png",
        "selectedColor": "#48db8d",
        "clas": "menu-item",
        active: false
      }, {
        "pagePath": "pages/my/my",
        "text": "我的",
        "iconPath": "/img/index/weimy_icon.png",
        "selectedIconPath": "/img/index/yimy_icon.png",
        "selectedColor": "#48db8d",
        "clas": "menu-item",
        active: false
      }],
      "position": "bottom"
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {}
};
</script>
<style>
@import "./tabbar.css";
</style>