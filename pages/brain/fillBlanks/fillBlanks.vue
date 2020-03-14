<template>
<view>
<view class="page" :style="'background-image: url(' + backgroundImg + ')'">
  <image src="/static/img/index/backs1.png" style="width:84rpx;height:84rpx;position:fixed;top:64rpx;left:0rpx;" @tap.stop="goBack"></image>
  <view class="aud" @tap.stop="playorpause" v-if="is_p==false"></view>
  <view class="audio" @tap.stop="playorpause" v-if="is_p==true"></view>
  <audio controls loop :src="audio" id="audioID" :action="action"></audio>
  <text v-if="id" class="where">第{{ids}}关</text>
  <text v-else class="where">第1关</text>
  <view class="topic">
    <image src="https://kxsx.kaifadanao.cn/assets/img/pig.png" class="pig"></image>
    <!-- <text style="position:absolute;top:-140rpx;right:46rpx;fint-size:60rpx;color:#8FD6F2;font-weight:bolder" wx:if="{{id}}">{{id}}</text>
  <text style="position:absolute;top:-120rpx;right:64rpx;fint-size:60rpx;color:#8FD6F2;font-weight:bolder" wx:else>1</text> -->
    <view class="topic-box">
      <view v-for="(item, index) in topic" :key="index">
        <view class="item item-has" v-if="item != ' '">{{item}}</view>
        <input class="item item-none" v-if="item == ' '" type="text" maxlength="1" @input="answerFun" :value="answer">{{item}}</input>
      </view>

    </view>
 <view class="ans-box">
      <view class="answer">
        <!-- <view class="grid"> -->
        <view v-for="(items, index) in answerList" :key="index" :data-index="index" @tap.stop="selected" :data-answer="items" :class="index == currentId ? 'red':''">{{items}}</view>

        <!-- </view> -->

      </view>
    </view>
  </view>
  <image src="/static/img/index/ts.png" style="width:153px;height:65px;position:absolute;top:25%;left:5%;" v-if="sequence"></image>
  <view class="btn-boxs">
    <button class="btn share" open-type="share" id="share" style="background-color:transparent;border:none;"></button>
    <view class="btn level" @tap.stop="showLevel"></view>
    <view class="btn next nexts" @tap="next" v-if="next_id!=0"></view>
  </view>

</view>
<block data-type="template" data-is="failItem" data-attr="id:id,failImg:failImg" v-if="is_wrong">
  <view class="popup">
    <view class="popupcont"></view>
    <view class="bg-img bg-fail" :style="'background-image: url(' + failImg + ')'">


      <view class="btn-box1 clear">
        <!-- <view class="exit reset-fail" data-id="{{id}}" bindtap=''></view> -->
        <button class="exit reset-fail" open-type="share" id="share"></button>
        <view class="exit reset" :data-id="id" @tap="reset"></view>
      </view>
    </view>
  </view>

</block>
<block data-type="template" data-is="succItem" data-attr="id:id,succImg:succImg" v-if="is_succ">
  <view class="popup">
    <view class="popupcont"></view>
    <view class="bg-img bg-succ" :style="'background-image: url(' + succImg + ')'">


      <view class="btn-box1 clear" style="justify-content:space-around;">
        <view class="exit reset" :data-id="id" @tap="reset"></view>
        <view class="exit next" :data-id="id" @tap="next"></view>
      </view>
    </view>
  </view>

</block>
<block data-type="template" data-is="levelItem" data-attr="levelList:levelList,counts:counts,pageId:pageId" v-if="isLevel">
  <view class="popup">
    <view class="popupcont"></view>
    <view>
      <image class="prevPage" @tap.stop="prevPage" src="/static/img/index/Arrow_inactive.png" v-if="pageId==0"></image>
      <image class="prevPage" @tap.stop="prevPage" src="/static/img/index/Arrowicon2.png" v-if="pageId!=0"></image>
      <image class="nextPage" @tap.stop="nextPage" src="/static/img/index/Arrow_inactives.png" v-if="pageId==counts.length-1"></image>
      <image class="nextPage" @tap.stop="nextPage" src="/static/img/index/Arrowicon.png" v-if="pageId!=counts.length-1"></image>
      <view class="bg-img bg-level" @touchstart="touchstart" @touchend="touchend">
        <!-- <view class="level-item {{item.pass==false?'level-false':''}}" wx:for="{{levelList}}" bindtap='{{item.pass==true&&"toDetail"}}' data-id="{{item.id}}">{{item.id}}</view> -->
        <view :class="'level-item ' + (item.pass==false?'level-false':'')" v-for="(item, index) in levelList" :key="index" @tap="toDetail" :data-id="item.id">{{item.id}}</view>
        <view class="cancle" @tap="closeLevel"></view>
      </view>
      <view style="position:absolute;bottom:25%;position:absolute;bottom:24%;left:0;right:0;display:flex;justify-content:center;">
        <view :class="'yuan ' + (pageId==index?'yuan_':'')" v-for="(item, index) in counts" :key="index" @tap="toGetLevel" :data-page="item" :data-index="index"></view>

      </view>
    </view>
  </view>

</block>
<block data-type="template" data-is="limitItem" data-attr="limitImg:limitImg" v-if="is_limit">
  <view class="popup">
    <view class="popupcont"></view>
    <view class="bg-img bg-limit" :style="'background-image: url(' + limitImg + ')'">


      <view class="btn-box1 clear">

        <view class="exit sure" :data-id="id" @tap="exit"></view>
      </view>
    </view>
  </view>

</block>
<block data-type="template" data-is="lastItem" data-attr="lastImg:lastImg" v-if="is_last">
  <view class="popup">
    <view class="popupcont"></view>
    <view class="bg-img last-limit" :style="'background-image: url(' + lastImg + ')'">


      <view class="btn-box1 clear">

        <view class="exit last" :data-id="id" @tap="goBack"></view>
      </view>
    </view>
  </view>

</block>
</view>
</template>

<script>
// pages/fillBlanks/fillBlanks.js
const app = getApp().globalData;
var util = require("../../../utils/util.js");

export default {
  data() {
    return {
      is_last: false,
      lastImg: '',
      sequence: false,
      succImg: '',
      failImg: '',
      limitImg: '',
      backGroundImg: 'https://kxsx.kaifadanao.cn/assets/img/gamebackground.png',
      toIndex: "",
      c: '',
      levelList: [],
      counts: 0,
      next_id: 0,
      topic: '',
      answer: '',
      id: '',
      ids: "",
      is_wrong: false,
      is_succ: false,
      is_limit: false,
      levelList: [],
      counts: 0,
      action: {
        method: 'pause'
      },
      audio: '',
      is_p: false,
      page: 1,
      pagesize: 12,
      pageId: 0,
      startX: 0,
      slider: false,
      animationData: {},
      cardInfoList: [{
        name: 1
      }, {
        name: 2
      }, {
        name: 3
      }, {
        name: 4
      }],
      answerList: [],
      backgroundImg: "https://kxsx.kaifadanao.cn/assets/img/gamebackground.png",
      isLevel: false,
      ans: "",
      currentId: ""
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

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
  onShareAppMessage: function () {
  },
  methods: {
    backGroundImgFun: function () {
    },

    getDataBindTap: function (e) {
    },
    topicList: function () {
    },
    answerFun: function (e) {
    },
    ansFun: function (e) {
    },
    reset: function (e) {
    },
    exit: function () {
    },
    click: function (e) {},

    getLevel() {
    },

    closeLevel() {
    },

    showLevel() {
    },

    toDetail(e) {
    },

    next() {
      
    },

    getAudio() {
    },

    playorpause: function (e) {
    },

    goBack() {

    },

    touchstart(e) {
    },

    touchend(e) {
    },

    nextPage() {
    },

    prevPage() {
    },

    failImgFun() {
    },

    succImgFun() {
    },

    limitImgFun() {
    },

    lastImgFun() {
	}
  }
};
</script>
<style>
@import "./fillBlanks.css";
</style>