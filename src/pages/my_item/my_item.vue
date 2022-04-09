<template>
  <view class="body">
    <view class="outer">
      <el-header>
        <all-header></all-header>
      </el-header>

      <div class="outer__inner">
        <div class="section item">
          <div class="item__center center">
            <div class="item__bg">
              <div class="item__preview">
                <div class="item__categories">
                  <div class="status-black item__category">Art</div>
                  <div class="status-purple item__category">可购买</div>
                </div>
                <img :srcSet="art_src_2x" :src="art_src" alt="Item" />
              </div>
              <!-- 	                <div class="options">
  	                  <div class="options__list">
  	                    <button class="button-circle-stroke options__button options__button_share js-options-share">
  	                      <svg class="icon icon-share">
  	                        <use xlink:href="#icon-share"></use>
  	                      </svg>
  	                    </button>
  	                    <button class="button-circle-stroke options__button options__button_favorite active">
  	                      <svg class="icon icon-heart">
  	                        <use xlink:href="#icon-heart"></use>
  	                      </svg>
  	                    </button>
  	                    <div class="actions js-actions">
  	                      <button class="button-circle-stroke actions__button js-actions-button">
  	                        <svg class="icon icon-more">
  	                          <use xlink:href="#icon-more"></use>
  	                        </svg>
  	                      </button>
  	                    </div>
  	                  </div>
  	                </div> -->
            </div>
            <div class="item__details">
              <h1 class="item__title h3">{{ title }} # {{ tokenid }}</h1>
              <div class="item__cost">
                <div class="status-stroke-green item__price">
                  {{ price }} CNY
                </div>
                <div class="status-stroke-black item__price">标签2</div>
                <div class="item__counter">10人正在关注</div>
              </div>

              <div class="item__text">
                {{ info }}
                <a href="https://ui8.net" target="_blank">{{ url }}</a>
              </div>

              <div class="item__tabs js-tabs">
                <div class="item__nav">
                  <a class="item__link js-tabs-link active" href="#">信息</a
                  ><a class="item__link js-tabs-link" href="#">创建者</a
                  ><a class="item__link js-tabs-link" href="#">评论</a>
                </div>
                <div class="item__container">
                  <div class="item__box js-tabs-item" style="display: block">
                    <div class="item__users">
                      <div class="item__user">
                        <div class="item__avatar">
                          <img
                            src="/static/img/content/avatar-2.jpg"
                            alt="Avatar"
                          />
                          <div class="item__reward">
                            <img
                              src="/static/img/content/reward-1.svg"
                              alt="Reward"
                            />
                          </div>
                        </div>
                        <div class="item__description">
                          <div class="item__position">Owner</div>
                          <div class="item__name">Raquel Will</div>
                        </div>
                      </div>
                      <div class="item__user">
                        <div class="item__avatar">
                          <img
                            src="/static/img/content/avatar-1.jpg"
                            alt="Avatar"
                          />
                        </div>
                        <div class="item__description">
                          <div class="item__position">Creator</div>
                          <div class="item__name">Selina Mayert</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item__box js-tabs-item">
                    <div class="item__users">
                      <div class="item__user">
                        <div class="item__avatar">
                          <img
                            src="/static/img/content/avatar-1.jpg"
                            alt="Avatar"
                          />
                        </div>
                        <div class="item__description">
                          <div class="item__position">Owner</div>
                          <div class="item__name">Cole Mayert</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item__box js-tabs-item">
                    <div class="item__users">
                      <div class="item__user">
                        <div class="item__avatar">
                          <img
                            src="/static/img/content/avatar-2.jpg"
                            alt="Avatar"
                          />
                          <div class="item__reward">
                            <img
                              src="/static/img/content/reward-1.svg"
                              alt="Reward"
                            />
                          </div>
                        </div>
                        <div class="item__description">
                          <div class="item__name">Raquel Will</div>
                          <div class="item__action">
                            Place a bid:
                            <span class="item__money">1.46 ETH</span>
                          </div>
                        </div>
                        <div class="item__time">Jun 14 - 4:12 PM</div>
                      </div>
                      <div class="item__user">
                        <div class="item__avatar">
                          <img
                            src="/static/img/content/avatar-6.jpg"
                            alt="Avatar"
                          />
                          <div class="item__reward">
                            <img
                              src="/static/img/content/reward-1.svg"
                              alt="Reward"
                            />
                          </div>
                        </div>
                        <div class="item__description">
                          <div class="item__name">Cole Fahey</div>
                          <div class="item__action">
                            Put <span>Awesome work</span> on sale
                          </div>
                        </div>
                        <div class="item__time">Jun 14 - 4:12 PM</div>
                      </div>
                      <div class="item__user">
                        <div class="item__avatar">
                          <img
                            src="/static/img/content/avatar-7.jpg"
                            alt="Avatar"
                          />
                          <div class="item__reward">
                            <img
                              src="/static/img/content/reward-1.svg"
                              alt="Reward"
                            />
                          </div>
                        </div>
                        <div class="item__description">
                          <div class="item__name">Adah Mitchell</div>
                          <div class="item__action">
                            Accepted <span>Raquel Will</span> ‘s bid
                          </div>
                        </div>
                        <div class="item__time">Jun 14 - 4:12 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item__control">
                <!-- <div class="item__head">
  	                    <div class="item__avatar"><img src="/static/img/content/avatar-4.jpg" alt="Avatar"></div>
  	                    <div class="item__description">
  	                      <div class="item__info">Highest bid by <span>Kohaku Tora</span></div>
  	                      <div class="item__currency">
  	                        <div class="item__price">1.46 ETH</div>
  	                        <div class="item__price">$2,764.89</div>
  	                      </div>
  	                    </div>
  	                  </div> -->
                <div class="item__btns">
                  <a
                    class="button item__button js-popup-open"
                    data-effect="mfp-zoom-in"
                    @click="checkout = true"
                    >转赠他人</a
                  >
                  <a class="button-stroke item__button" @click="share">分享</a>
                </div>
                <div class="item__variants">
                  购买于<span class="item__percent">2022/3/28</span>
                  <span>版权所有，请勿用作商业用途</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <el-dialog :visible.sync="checkout">
          <div class="popup__item" style="display: block">
            <div class="popup__title h4">确认赠予</div>
            <div class="popup__info">
              你确定要将<strong>{ {{ title }} # {{ tokenid }} }</strong>
              赠予他人吗？
            </div>
            <div class="popup__attention">
              <div class="popup__preview">
                <svg class="icon icon-info-circle">
                  <use xlink:href="#icon-info-circle"></use>
                </svg>
              </div>
              <div class="popup__details">
                <div class="popup__category">
                  数字藏品仅供收藏，请勿向他人售卖
                </div>
                <div class="popup__text"></div>
              </div>
            </div>
            <div class="popup__btns">
              <button
                class="button popup__button"
                style="width: 93%"
                @click="topay"
              >
                我要赠送
              </button>
              <button
                class="button-stroke popup__button js-popup-close"
                style="width: 93%"
                @click="cancel1"
              >
                取消
              </button>
            </div>
          </div>
        </el-dialog>

        <el-dialog :visible.sync="paypage">
          <div class="popup__item" style="display: block">
            <div class="popup__title h4">选择受赠人</div>
            <div class="steps">
              <el-input v-model="to" placeholder="请输入受赠人id"></el-input>
            </div>
            <div class="popup__btns">
              <button
                class="button popup__button"
                style="width: 93%"
                @click="payok"
              >
                赠予
              </button>
              <button
                class="button-stroke popup__button js-popup-close"
                style="width: 93%"
                @click="cancelpay"
              >
                放弃赠予
              </button>
            </div>
          </div>
        </el-dialog>

        <el-dialog :visible.sync="buyok">
          <div class="popup__item" style="display: block">
            <div class="success">
              <div class="success__title h2">
                赠予成功! <span role="img" aria-label="firework">🎉</span>
              </div>
              <div class="success__info">
                你已成功向<span>id:{{ to }}</span
                >赠送数字藏品
              </div>
              <div class="success__table">
                <div class="success__row">
                  <div class="success__col">状态</div>
                  <div class="success__col">已赠送</div>
                </div>
                <div class="success__row">
                  <div class="success__col">藏品唯一id</div>
                  <div class="success__col">{{ address }}:{{ tokenid }}</div>
                </div>
                <div class="success__row">
                  <div class="success__col">所属人id</div>
                  <div class="success__col">{{ to }}</div>
                </div>
              </div>
              <div class="success__stage">通知好友吗？</div>
              <button
                class="button popup__button"
                style="width: 93%"
                @click="share"
              >
                通知
              </button>
            </div>
          </div>
        </el-dialog>

        <el-dialog :visible.sync="shareDialogVisible" width="32%" center>
          <el-image style="width: 100%" :src="share_url" :fit="fit"> </el-image>
        </el-dialog>
      </div>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      address: '',
      tokenid: '',
      art_src: '/static/img/content/item-pic.jpg',
      art_src_2x: '/static/img/content/item-pic@2x.jpg 2x',
      title: '令人惊叹的艺术品',
      price: '2.5',
      info: '这张NFT卡可以让你使用特殊的空投。欲了解更多有关的信息，请访问',
      myurl: 'https://go.zcc76.xyz',
      to: '',
      creater: '水王',
      checkout: false,
      paypage: false,
      buyok: false,
      shareDialogVisible: false,
      share_url: '',
      fit: 'contain',
    }
  },
  methods: {
    share(event) {
      this.buyok = false
      this.shareDialogVisible = true
      this.share_url =
        'https://tenapi.cn/poster/?qrcode=' +
        this.myurl +
        '&title=我向你赠送了' +
        this.title +
        '&content=' +
        this.info +
        '&site=' +
        'ArtShore' +
        '&info=' +
        '数字艺术的黄金海岸' +
        '&author=' +
        this.creater +
        '&pic=https://tenapi.cn/bing/'
      console.log(this.share_url)
    },
    topay(event) {
      this.checkout = false
      this.paypage = true
    },
    cancel1(event) {
      this.checkout = false
    },
    payok(event) {
      var token = ''
      uni.getStorage({
        key: 'token',
        success: function (res) {
          console.log(res.data)
          token = res.data
        },
      })
      uni.request({
        url: 'http://124.222.242.75:8080/nft/handsel', //仅为示例，并非真实接口地址。
        data: {
          to: this.to,
          token_id: this.tokenid,
          nft_addr: this.address,
        },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          token: token,
        },
        success: (res) => {
          console.log(res.data)
          this.paypage = false
          this.buyok = true
        },
      })
    },
    cancelpay(event) {
      this.paypage = false
      this.buyok = true
    },
  },
  onLoad: function (option) {
    this.address = option.address
    this.tokenid = option.tokenid
  },
  mounted() {
    var token = ''
    uni.getStorage({
      key: 'token',
      success: function (res) {
        token = res.data
      },
    })
    uni.request({
      url: 'http://124.222.242.75:8080/nft/details',
      data: {
        nft_addr: this.address,
        token_id: this.tokenid,
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        token: token,
      },
      success: (res) => {
        console.log(res.data)
        this.title = res.data.data.name
      },
    })
  },
}
</script>

<style>
@import url('/common/css/app.min.css');
</style>
