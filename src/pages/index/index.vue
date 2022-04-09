<template>
  <view class="body">
    <view class="outer">
      <!-- <el-header> -->
        <all-header></all-header>
      <!-- </el-header> -->
      <view class="outer__inner">
        <el-row class="empty-row100"> </el-row>
        <el-main>
          <div class="main__head">
            <div class="main__stage">
              Create, explore, & collect digital art NFTs.
            </div>
            <h3 class="main__title h3">数字艺术品的黄金海岸</h3>
            <a
              class="button-stroke main__button"
              href="http://124.222.242.75:88/"
            >
              即刻探索
            </a>
          </div>

          <div class="">
            <div class="">
              <div class="main__slide">
                <div class="main__row">
                  <div class="player">
                    <div class="player__preview">
                      <img
                        srcSet="/static/img/content/video-preview@2x.jpg 2x"
                        src="/static/img/content/video-preview.jpg"
                        alt="Video preview"
                      />
                    </div>
                    <div class="player__control">
                      <button class="player__button">
                        <svg class="icon icon-play">
                          <use xlink:href="#icon-play"></use>
                        </svg>
                      </button>
                      <div class="player__line">
                        <div class="player__progress" style="width: 20%"></div>
                      </div>
                      <div class="player__time">2:20</div>
                      <button class="player__button">
                        <svg class="icon icon-volume">
                          <use xlink:href="#icon-volume"></use>
                        </svg>
                      </button>
                      <button class="player__button">
                        <svg class="icon icon-full-screen">
                          <use xlink:href="#icon-full-screen"></use>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="main__details">
                    <div class="main__subtitle h1">the creator network®</div>
                    <div class="main__line">
                      <div class="main__item">
                        <div class="main__avatar">
                          <img
                            src="/static/img/content/avatar-creator.jpg"
                            alt="Avatar"
                          />
                        </div>
                        <div class="main__description">
                          <div class="main__category">Creator</div>
                          <div class="main__text">Enrico Cole</div>
                        </div>
                      </div>
                      <div class="main__item">
                        <div class="main__icon">
                          <svg class="icon icon-stop">
                            <use xlink:href="#icon-stop"></use>
                          </svg>
                        </div>
                        <div class="main__description">
                          <div class="main__category">Instant price</div>
                          <div class="main__text">3.5 ETH</div>
                        </div>
                      </div>
                    </div>
                    <div class="main__wrap">
                      <div class="main__info">Current Bid</div>
                      <div class="main__currency">1.00 ETH</div>
                      <div class="main__price">$3,618.36</div>
                      <div class="main__info">Auction ending in</div>
                      <div class="main__timer"></div>
                    </div>
                    <div class="main__btns">
                      <a
                        class="button main__button js-popup-open"
                        href="#popup-connect"
                        data-effect="mfp-zoom-in"
                        >Place a bid</a
                      ><a class="button-stroke main__button" href="item.html"
                        >View item
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-main>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    go_search(event) {
      uni.navigateTo({
        url: '../../pages/search/search',
      })
    },
  },
  mounted() {},
}
</script>

<style scoped>
@import url('../../common/css/app.min.css');

.empty-row100 {
  height: 100px;
}
</style>
