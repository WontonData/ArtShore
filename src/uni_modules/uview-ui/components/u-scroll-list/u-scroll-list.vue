<template>
  <view class="u-scroll-list" ref="u-scroll-list">
    <!-- #ifdef APP-NVUE -->
    <!-- nvue使用bindingX实现，以得到更好的性能 -->
    <scroller
      class="u-scroll-list__scroll-view"
      ref="u-scroll-list__scroll-view"
      scroll-direction="horizontal"
      :show-scrollbar="false"
      :offset-accuracy="1"
      @scroll="nvueScrollHandler"
    >
      <view class="u-scroll-list__scroll-view__content">
        <slot />
      </view>
    </scroller>
    <!-- #endif -->
    <!-- #ifndef APP-NVUE -->
    <!-- #ifdef MP-WEIXIN || APP-VUE || H5 || MP-QQ -->
    <!-- 以上平台，支持wxs -->
    <scroll-view
      class="u-scroll-list__scroll-view"
      scroll-x
      @scroll="wxs.scroll"
      @scrolltoupper="wxs.scrolltoupper"
      @scrolltolower="wxs.scrolltolower"
      :data-scrollWidth="scrollWidth"
      :data-barWidth="$u.getPx(indicatorBarWidth)"
      :data-indicatorWidth="$u.getPx(indicatorWidth)"
      :show-scrollbar="false"
      :upper-threshold="0"
      :lower-threshold="0"
    >
      <!-- #endif -->
      <!-- #ifndef APP-NVUE || MP-WEIXIN || H5 || APP-VUE || MP-QQ -->
      <!-- 非以上平台，只能使用普通js实现 -->
      <scroll-view
        class="u-scroll-list__scroll-view"
        scroll-x
        @scroll="scrollHandler"
        @scrolltoupper="scrolltoupperHandler"
        @scrolltolower="scrolltolowerHandler"
        :show-scrollbar="false"
        :upper-threshold="0"
        :lower-threshold="0"
      >
        <!-- #endif -->
        <view class="u-scroll-list__scroll-view__content">
          <slot />
        </view>
      </scroll-view>
      <!-- #endif -->
      <view
        class="u-scroll-list__indicator"
        v-if="indicator"
        :style="[$u.addStyle(indicatorStyle)]"
      >
        <view class="u-scroll-list__indicator__line" :style="[lineStyle]">
          <view
            class="u-scroll-list__indicator__line__bar"
            :style="[barStyle]"
            ref="u-scroll-list__indicator__line__bar"
          ></view>
        </view>
      </view> </scroll-view
  ></view>
</template>

<script lang="wxs" module="wxs" src="./scrollWxs.wxs"></script>

<style lang="scss" scoped>
@import '../../libs/css/components.scss';

.u-scroll-list {
  padding-bottom: 10px;

  &__scroll-view {
    @include flex;

    &__content {
      @include flex;
    }
  }

  &__indicator {
    @include flex;
    justify-content: center;
    margin-top: 15px;

    &__line {
      width: 60px;
      height: 4px;
      border-radius: 100px;
      overflow: hidden;

      &__bar {
        width: 20px;
        height: 4px;
        border-radius: 100px;
      }
    }
  }
}
</style>
