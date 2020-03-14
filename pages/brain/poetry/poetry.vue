<template>
<view>
<view class="page" :style="'background-image: url(' + backgroundImg + ')'">
  <image src="/static/img/index/backs1.png" style="width:84rpx;height:84rpx;position:fixed;top:64rpx;left:6rpx;" @tap.stop="goBack"></image>
  <view class="aud" @tap.stop="playorpause" v-if="is_p==false"></view>
  <view class="audio" @tap.stop="playorpause" v-if="is_p==true"></view>
  <audio controls loop :src="audio" id="audioID" :action="action"></audio>
  <text v-if="ids" class="where">第{{ids}}关</text>
  <text v-else class="where">第1关</text>
  <view class="topic">
    <image src="https://kxsx.kaifadanao.cn/assets/img/pig.png" class="pig"></image>
    <!-- <text style="position:absolute;top:-140rpx;right:46rpx;fint-size:60rpx;color:#8FD6F2;font-weight:bolder" wx:if="{{id}}">{{id}}</text> -->
    <!-- <text style="position:absolute;top:-120rpx;right:64rpx;fint-size:60rpx;color:#8FD6F2;font-weight:bolder" wx:else>1</text> -->
    <view class="topic-box" style="float:left;width:17%">
      <view v-for="(item, index) in topicLeft" :key="index">
        <view class="item item-has" v-if="item.select == true" :data-select="item.select" @touchstart="clickLeft" :data-k="item.key" :data-index="index" :data-name="item.key">{{item.name}}</view>
        <view class="item item-none" v-if="item.select == false" @touchstart="clickLeft" :data-k="item.key" :data-index="index" :data-select="item.select" :data-name="item.key">{{item.name}}</view>
      </view>

    </view>
    <canvas style="height:100%;width:64%;background-color:transparent;z-index:1;float:left;" canvas-id="customCanvas" :class="is_canvas?'':'can'"></canvas>
    <view class="topic-box" style="float:left;width:17%">
      <view v-for="(item, index) in topicRight" :key="index">
        <view class="item item-has" v-if="item.select == true" @touchstart="clickRight" :data-index="index" :data-k="item.key" :data-select="item.select" :data-name="item.key">{{item.name}}</view>
        <view class="item item-none" v-if="item.select == false" @touchstart="clickRight" :data-k="item.key" :data-index="index" :data-select="item.select" :data-name="item.key">{{item.name}}</view>
      </view>
    </view>

  </view>
<image src="/static/img/index/ts.png" style="width:153px;height:65px;position:absolute;top:25%;left:5%;" v-if="sequence"></image>
  <view class="btn-boxs">
    <button class="btn share" open-type="share" id="share" style="background-color:transparent;border:none;"></button>
    <view class="btn level" @tap.stop="showLevel"></view>
    <view class="btn next" @tap="next" v-if="next_id!=0"></view>
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

export default {
  data() {
    return {
      lastImg: '',
      is_last: false,
      sequence: false,
      succImg: '',
      failImg: '',
      limitImg: '',
      backGroundImg: '',
      c: '',
      pageId: 0,
      levelList: [],
      counts: 0,
      is_succ: false,
      is_limit: false,
      l: '',
      r: '',
      ansList: [],
      id: '',
      next_id: '',
      curTarL: '',
      curTarR: '',
      list: '',
      objs: {},
      ctx: '',
      beginX: 0,
      beginY: 0,
      endX: 0,
      endY: 0,
      topicLeft: [],
      topicRight: [],
      audio: '',
      action: {
        method: 'pause'
      },
      is_p: false,
      canvasWidth: '',
      canvasHeight: '',
      pagesize: 12,
      page: 1,
      is_canvas: true,
      ids: '',
      nowPgae: 1,
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
      toIndex: '',
      select: false,
      backgroundImg: "https://kxsx.kaifadanao.cn/assets/img/gamebackground.png",
      is_wrong: false,
      currentId: "",
      isLevel: false,
      ans: ""
    };
  },

  components: {},
  props: {},
  onShow: function () {
  },

  onLoad(options) {
    
  },

  onShareAppMessage: function () {
   
  },
  methods: {
    beginCanvas: function () {
    },
    clickLeft(e) {
    },

    clickRight(e) {
    },

    backGroundImgFun: function () {
      
    },
    reset: function (e) {
      
    },
    exit: function () {
    },
    topicList: function () {
    },
    answer: function () {
      
    },

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

    toGetLevel(e) {
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
@import "./poetry.css";
</style>