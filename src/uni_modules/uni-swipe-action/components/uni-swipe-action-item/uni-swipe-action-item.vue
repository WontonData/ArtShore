<template>
  <!-- 在微信小程序 app vue端 h5 使用wxs 实现-->
  <!-- #ifdef APP-VUE || MP-WEIXIN || H5 -->
  <view class="uni-swipe">
    <!--  #ifdef MP-WEIXIN || VUE3 -->
    <view
      class="uni-swipe_box"
      :change:prop="wxsswipe.showWatch"
      :prop="is_show"
      :data-threshold="threshold"
      :data-disabled="disabled"
      @touchstart="wxsswipe.touchstart"
      @touchmove="wxsswipe.touchmove"
      @touchend="wxsswipe.touchend"
    >
      <!-- #endif -->
      <!--  #ifndef MP-WEIXIN || VUE3 -->
      <view
        class="uni-swipe_box"
        :change:prop="renderswipe.showWatch"
        :prop="is_show"
        :data-threshold="threshold"
        :data-disabled="disabled + ''"
        @touchstart="renderswipe.touchstart"
        @touchmove="renderswipe.touchmove"
        @touchend="renderswipe.touchend"
      >
        <!-- #endif -->
        <!-- 在微信小程序 app vue端 h5 使用wxs 实现-->
        <view class="uni-swipe_button-group button-group--left">
          <slot name="left">
            <view
              v-for="(item, index) in leftOptions"
              :key="index"
              :style="{
                backgroundColor:
                  item.style && item.style.backgroundColor
                    ? item.style.backgroundColor
                    : '#C7C6CD',
                fontSize:
                  item.style && item.style.fontSize
                    ? item.style.fontSize
                    : '16px',
              }"
              class="uni-swipe_button button-hock"
              @touchstart="appTouchStart"
              @touchend="appTouchEnd($event, index, item, 'left')"
              @click.stop="onClickForPC(index, item, 'left')"
            >
              <text
                class="uni-swipe_button-text"
                :style="{
                  color:
                    item.style && item.style.color
                      ? item.style.color
                      : '#FFFFFF',
                }"
                >{{ item.text }}</text
              >
            </view>
          </slot>
        </view>
        <view class="uni-swipe_text--center">
          <slot></slot>
        </view>
        <view class="uni-swipe_button-group button-group--right">
          <slot name="right">
            <view
              v-for="(item, index) in rightOptions"
              :key="index"
              :style="{
                backgroundColor:
                  item.style && item.style.backgroundColor
                    ? item.style.backgroundColor
                    : '#C7C6CD',
                fontSize:
                  item.style && item.style.fontSize
                    ? item.style.fontSize
                    : '16px',
              }"
              class="uni-swipe_button button-hock"
              @touchstart="appTouchStart"
              @touchend="appTouchEnd($event, index, item, 'right')"
              @click.stop="onClickForPC(index, item, 'right')"
              ><text
                class="uni-swipe_button-text"
                :style="{
                  color:
                    item.style && item.style.color
                      ? item.style.color
                      : '#FFFFFF',
                }"
                >{{ item.text }}</text
              >
            </view>
          </slot>
        </view>
      </view>
    </view>
    <!-- #endif -->
    <!-- app nvue端 使用 bindingx -->
    <!-- #ifdef APP-NVUE -->
    <view
      ref="selector-box--hock"
      class="uni-swipe"
      @horizontalpan="touchstart"
      @touchend="touchend"
    >
      <view
        ref="selector-left-button--hock"
        class="uni-swipe_button-group button-group--left"
      >
        <slot name="left">
          <view
            v-for="(item, index) in leftOptions"
            :data-button="btn"
            :key="index"
            :style="{
              backgroundColor:
                item.style && item.style.backgroundColor
                  ? item.style.backgroundColor
                  : '#C7C6CD',
              fontSize:
                item.style && item.style.fontSize
                  ? item.style.fontSize
                  : '16px',
            }"
            class="uni-swipe_button button-hock"
            @click.stop="onClick(index, item, 'left')"
            ><text
              class="uni-swipe_button-text"
              :style="{
                color:
                  item.style && item.style.color ? item.style.color : '#FFFFFF',
              }"
              >{{ item.text }}</text
            >
          </view>
        </slot>
      </view>
      <view
        ref="selector-right-button--hock"
        class="uni-swipe_button-group button-group--right"
      >
        <slot name="right">
          <view
            v-for="(item, index) in rightOptions"
            :data-button="btn"
            :key="index"
            :style="{
              backgroundColor:
                item.style && item.style.backgroundColor
                  ? item.style.backgroundColor
                  : '#C7C6CD',
              fontSize:
                item.style && item.style.fontSize
                  ? item.style.fontSize
                  : '16px',
            }"
            class="uni-swipe_button button-hock"
            @click.stop="onClick(index, item, 'right')"
            ><text
              class="uni-swipe_button-text"
              :style="{
                color:
                  item.style && item.style.color ? item.style.color : '#FFFFFF',
              }"
              >{{ item.text }}</text
            >
          </view>
        </slot>
      </view>
      <view ref="selector-content--hock" class="uni-swipe_box">
        <slot></slot>
      </view>
    </view>
    <!-- #endif -->
    <!-- 其他平台使用 js ，长列表性能可能会有影响-->
    <!-- #ifdef MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ -->
    <view class="uni-swipe">
      <view
        class="uni-swipe_box"
        @touchstart="touchstart"
        @touchmove="touchmove"
        @touchend="touchend"
        :style="{ transform: moveLeft }"
        :class="{ ani: ani }"
      >
        <view
          class="uni-swipe_button-group button-group--left"
          :class="[elClass]"
        >
          <slot name="left">
            <view
              v-for="(item, index) in leftOptions"
              :data-button="btn"
              :key="index"
              :style="{
                backgroundColor:
                  item.style && item.style.backgroundColor
                    ? item.style.backgroundColor
                    : '#C7C6CD',
                fontSize:
                  item.style && item.style.fontSize
                    ? item.style.fontSize
                    : '16px',
              }"
              class="uni-swipe_button button-hock"
              @touchstart="appTouchStart"
              @touchend="appTouchEnd($event, index, item, 'left')"
              ><text
                class="uni-swipe_button-text"
                :style="{
                  color:
                    item.style && item.style.color
                      ? item.style.color
                      : '#FFFFFF',
                }"
                >{{ item.text }}</text
              >
            </view>
          </slot>
        </view>
        <slot></slot>
        <view
          class="uni-swipe_button-group button-group--right"
          :class="[elClass]"
        >
          <slot name="right">
            <view
              v-for="(item, index) in rightOptions"
              :data-button="btn"
              :key="index"
              :style="{
                backgroundColor:
                  item.style && item.style.backgroundColor
                    ? item.style.backgroundColor
                    : '#C7C6CD',
                fontSize:
                  item.style && item.style.fontSize
                    ? item.style.fontSize
                    : '16px',
              }"
              @touchstart="appTouchStart"
              @touchend="appTouchEnd($event, index, item, 'right')"
              class="uni-swipe_button button-hock"
              ><text
                class="uni-swipe_button-text"
                :style="{
                  color:
                    item.style && item.style.color
                      ? item.style.color
                      : '#FFFFFF',
                }"
                >{{ item.text }}</text
              >
            </view>
          </slot>
        </view>
      </view>
    </view>
    <!-- #endif -->
  </view>
</template>

<script lang="wxs" module="wxsswipe" src="./wx.wxs"></script>

<style lang="scss">
.uni-swipe {
  position: relative;
  /* #ifndef APP-NVUE */
  overflow: hidden;
  /* #endif */
}

.uni-swipe_box {
  /* #ifndef APP-NVUE */
  display: flex;
  flex-shrink: 0;
  // touch-action: none;
  /* #endif */
  position: relative;
}

.uni-swipe_content {
  // border: 1px red solid;
}

.uni-swipe_text--center {
  width: 100%;
  /* #ifndef APP-NVUE */
  cursor: grab;
  /* #endif */
}

.uni-swipe_button-group {
  /* #ifndef APP-NVUE */
  box-sizing: border-box;
  display: flex;
  /* #endif */
  flex-direction: row;
  position: absolute;
  top: 0;
  bottom: 0;
  /* #ifdef H5 */
  cursor: pointer;
  /* #endif */
}

.button-group--left {
  left: 0;
  transform: translateX(-100%);
}

.button-group--right {
  right: 0;
  transform: translateX(100%);
}

.uni-swipe_button {
  /* #ifdef APP-NVUE */
  flex: 1;
  /* #endif */
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

.uni-swipe_button-text {
  /* #ifndef APP-NVUE */
  flex-shrink: 0;
  /* #endif */
  font-size: 14px;
}

.ani {
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

/* #ifdef MP-ALIPAY */
.movable-area {
  /* width: 100%; */
  height: 45px;
}

.movable-view {
  display: flex;
  /* justify-content: center; */
  position: relative;
  flex: 1;
  height: 45px;
  z-index: 2;
}

.movable-view-button {
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  height: 100%;
  background: #c0c0c0;
}

/* .transition {
		transition: all 0.3s;
	} */

.movable-view-box {
  flex-shrink: 0;
  height: 100%;
  background-color: #fff;
}

/* #endif */
</style>
