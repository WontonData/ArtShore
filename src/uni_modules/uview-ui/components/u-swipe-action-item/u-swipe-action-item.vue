<template>
  <view class="u-swipe-action-item" ref="u-swipe-action-item">
    <view class="u-swipe-action-item__right">
      <slot name="button">
        <view
          v-for="(item, index) in options"
          :key="index"
          class="u-swipe-action-item__right__button"
          :ref="`u-swipe-action-item__right__button-${index}`"
          :style="[
            {
              alignItems:
                item.style && item.style.borderRadius ? 'center' : 'stretch',
            },
          ]"
          @tap="buttonClickHandler(item, index)"
        >
          <view
            class="u-swipe-action-item__right__button__wrapper"
            :style="[
              {
                backgroundColor:
                  item.style && item.style.backgroundColor
                    ? item.style.backgroundColor
                    : '#C7C6CD',
                borderRadius:
                  item.style && item.style.borderRadius
                    ? item.style.borderRadius
                    : '0',
                padding: item.style && item.style.borderRadius ? '0' : '0 15px',
              },
              item.style,
            ]"
          >
            <u-icon
              v-if="item.icon"
              :name="item.icon"
              :color="
                item.style && item.style.color ? item.style.color : '#ffffff'
              "
              :size="
                item.iconSize
                  ? $u.addUnit(item.iconSize)
                  : item.style && item.style.fontSize
                  ? $u.getPx(item.style.fontSize) * 1.2
                  : 17
              "
              :customStyle="{
                marginRight: item.text ? '2px' : 0,
              }"
            ></u-icon>
            <text
              v-if="item.text"
              class="u-swipe-action-item__right__button__wrapper__text u-line-1"
              :style="[
                {
                  color:
                    item.style && item.style.color
                      ? item.style.color
                      : '#ffffff',
                  fontSize:
                    item.style && item.style.fontSize
                      ? item.style.fontSize
                      : '16px',
                  lineHeight:
                    item.style && item.style.fontSize
                      ? item.style.fontSize
                      : '16px',
                },
              ]"
              >{{ item.text }}</text
            >
          </view>
        </view>
      </slot>
    </view>
    <!-- #ifdef APP-VUE || MP-WEIXIN || H5 || MP-QQ -->
    <view
      class="u-swipe-action-item__content"
      @touchstart="wxs.touchstart"
      @touchmove="wxs.touchmove"
      @touchend="wxs.touchend"
      :status="status"
      :change:status="wxs.statusChange"
      :size="size"
      :change:size="wxs.sizeChange"
    >
      <!-- #endif -->
      <!-- #ifdef APP-NVUE -->
      <view
        class="u-swipe-action-item__content"
        ref="u-swipe-action-item__content"
        @panstart="onTouchstart"
        @tap="clickHandler"
      >
        <!-- #endif -->
        <slot />
      </view>
    </view>
  </view>
</template>

<script lang="wxs" module="wxs" src="./index.wxs"></script>

<style lang="scss" scoped>
@import '../../libs/css/components.scss';

.u-swipe-action-item {
  position: relative;
  overflow: hidden;
  /* #ifndef APP-NVUE || MP-WEIXIN */
  touch-action: none;
  /* #endif */

  &__content {
    background-color: #ffffff;
    z-index: 10;
  }

  &__right {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    @include flex;

    &__button {
      @include flex;
      justify-content: center;
      overflow: hidden;
      align-items: center;

      &__wrapper {
        @include flex;
        align-items: center;
        justify-content: center;
        padding: 0 15px;

        &__text {
          @include flex;
          align-items: center;
          color: #ffffff;
          font-size: 15px;
          text-align: center;
          justify-content: center;
        }
      }
    }
  }
}
</style>
