<template>
<view class="page" :style="'background-image: url(' + backgroundImg + ')'">
<view>
  <!-- <view class="bg">
   

  </view> -->
  <!-- <view class="text"></view>
  <view class="children"></view> -->
  <image src="/static/index/backs1.png" style="width:84rpx;height:84rpx;position:fixed;top:64rpx;left:4rpx;" @tap.stop="goBack"></image>
<view class="aud" @tap.stop="playorpause" v-if="is_p==false"></view>
  <view class="audio" @tap.stop="playorpause" v-if="is_p==true"></view>
  <audio controls loop :src="audio" id="audioID" :action="action"></audio>
  <view>

    <navigator url="poetry/poetry" style="position:relative" @tap="to">
      <image src="https://kxsx.kaifadanao.cn/assets/pig.png" class="pig"></image>
      <view class="btn btn-f" hover-class="wsui-btn__hover_btn" hover-stay-time="3000"></view>
    </navigator> 
    <navigator url="./choice/choice" @tap="to">
      <view class="btn btn-c" hover-class="wsui-btn__hover_btn1" hover-stay-time="3000"></view>
    </navigator>
    <navigator url="./fillBlanks/fillBlanks" @tap="to">
      <view class="btn btn-p" hover-class="wsui-btn__hover_btn2" hover-stay-time="3000"></view>
    </navigator>


  </view>
</view>
</view>
</template>

<script>
export default {
  data() {
    return {
      backgroundImg: 'https://kxsx.kaifadanao.cn/assets/img/gamebackground.png',
      imgList: [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 2, 2, 2,, 2, 2, 2, 3, 2, 2, 2, 2],
      action: {
        method: 'pause'
      },
      audio: '',
      is_p: false
    };
  },

};
</script>
<style>
@import "./brain.css";
</style>