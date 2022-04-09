<template>
  <view class="body">
    <view class="outer">
      <!-- <el-header> -->
        <all-header></all-header>
      <!-- </el-header> -->
      <view class="outer__inner">
        <div class="profile">
          <div
            class="profile__head js-profile-head"
            style="background-image: url('/static/img/content/bg-profile.jpg')"
          >
            <div class="profile__center center">
              <div class="profile__btns">
                <button
                  class="button-stroke button-small profile__button js-profile-load"
                >
                  <span>自定义背景图片</span>
                  <!-- <svg class="icon icon-edit">
  			                    <use xlink:href="#icon-edit"></use>
  			                  </svg> -->
                  <img
                    class="icon icon-edit"
                    src="../../static/icon/edit.png"
                  /></button
                ><a
                  class="button-stroke button-small profile__button"
                  href="profile-edit.html"
                >
                  <span>编辑个人资料</span>
                  <!-- <svg class="icon icon-image">
  			                    <use xlink:href="#icon-image"></use>
  			                  </svg> -->
                  <img
                    class="icon icon-edit"
                    src="../../static/icon/image.png"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="profile__body">
            <div class="profile__center center">
              <div class="user">
                <div class="user__avatar">
                  <img src="/static/img/content/avatar-big.jpg" alt="Avatar" />
                </div>
                <div class="user__name">{{ name }}</div>
                <br />
                <div class="user__code">
                  <div class="user__number">{{ token }}</div>
                  <!-- <button class="user__copy">
  			                    <svg class="icon icon-copy">
  			                      <use xlink:href="#icon-copy"></use>
  			                    </svg>
  			                  </button> -->
                </div>

                <div class="user__info">{{ intro }}</div>
                <a class="user__site" href="https://ui8.net" target="_blank">
                  <!-- <svg class="icon icon-globe">
  			                    <use xlink:href="#icon-globe"></use>
  			                  </svg> -->
                  <img
                    class="icon icon-globe"
                    src="../../static/icon/globe.png"
                  />
                  https://lc.net</a
                >
                <div class="user__control">
                  <div class="user__btns">
                    <button
                      class="button-stroke button-small user__button js-user-follow active"
                      @click="logout"
                    >
                      <span>Unfollow</span><span>注销</span>
                    </button>
                    <button
                      class="button-circle-stroke button-small user__button js-user-share"
                    >
                      <!-- <svg class="icon icon-share">
  			                        <use xlink:href="#icon-share"></use>
  			                      </svg> -->
                      <img
                        class="icon icon-share"
                        src="../../static/icon/share.png"
                      />
                    </button>
                    <a
                      class="button-circle-stroke button-small user__button js-popup-open"
                      href="#popup-report"
                      data-effect="mfp-zoom-in"
                    >
                      <!-- <svg class="icon icon-report">
  			                        <use xlink:href="#icon-report"></use>
  			                      </svg> -->
                      <img
                        class="icon icon-report"
                        src="../../static/icon/flag.png"
                      />
                    </a>
                  </div>
                </div>
                <div class="user__socials">
                  <a
                    class="user__social"
                    href="https://twitter.com/ui8"
                    target="_blank"
                  >
                    <!-- <svg class="icon icon-twitter">
  			                      <use xlink:href="#icon-twitter"></use>
  			                    </svg> -->
                    <img class="icon icon-qq" src="../../static/icon/QQ.png" />
                  </a>
                  <a
                    class="user__social"
                    href="https://www.instagram.com/ui8net/"
                    target="_blank"
                  >
                    <!-- <svg class="icon icon-instagram">
  			                      <use xlink:href="#icon-instagram"></use>
  			                    </svg> -->
                    <img
                      class="icon icon-wechat"
                      src="../../static/icon/wechat.png"
                    />
                  </a>
                  <a
                    class="user__social"
                    href="https://www.facebook.com/ui8.net/"
                    target="_blank"
                  >
                    <!-- <svg class="icon icon-facebook">
  			                      <use xlink:href="#icon-facebook"></use>
  			                    </svg> -->
                    <img
                      class="icon icon-tiktok"
                      src="../../static/icon/tiktok.png"
                    />
                  </a>
                </div>
                <div class="user__note">2022年2月1日 加入ArtShore</div>
              </div>
              <div class="profile__wrapper js-tabs">
                <div class="profile__nav">
                  <a
                    class="profile__link js-tabs-link"
                    :class="{ active: is_own_active }"
                    href="#"
                    >我拥有的</a
                  ><a
                    class="profile__link js-tabs-link"
                    :class="{ active: is_creat_active }"
                    >我创建的</a
                  ><a class="profile__link js-tabs-link" href="#">Created</a
                  ><a class="profile__link js-tabs-link" href="#">Likes</a
                  ><a class="profile__link js-tabs-link" href="#">Following</a
                  ><a class="profile__link js-tabs-link" href="#">Followers</a>
                </div>
                <div class="profile__container">
                  <div
                    class="profile__item js-tabs-item"
                    style="display: block"
                  >
                    <div class="profile__list">
                      <br />
                      <card2
                        v-for="(item, index) in list_have"
                        :title="item.name"
                        price="9.98"
                        creater="xxx"
                        :tokenid="item.tokenId"
                        :art_id="item.id"
                        :address="item.address"
                      ></card2>
                    </div>
                    <div class="loader"></div>
                  </div>
                  <div class="profile__item js-tabs-item">
                    <div class="profile__list">
                      <br />
                      <!-- <card1></card1> -->
                    </div>
                    <div class="loader"></div>
                  </div>
                  <div class="profile__item js-tabs-item">
                    <div class="profile__list">
                      <br />
                      <!-- <card1></card1> -->
                    </div>
                    <div class="loader"></div>
                  </div>
                  <div class="profile__item js-tabs-item">
                    <div class="profile__list">
                      <br />
                      <!-- <card1></card1> -->
                    </div>
                    <div class="loader"></div>
                  </div>
                  <div class="profile__item js-tabs-item">
                    <div class="followers">
                      <div class="followers__list">
                        <div class="followers__item">
                          <div class="followers__user">
                            <div class="followers__avatar">
                              <img
                                src="/static/img/content/avatar-5.jpg"
                                alt="Avatar"
                              />
                            </div>
                            <div class="followers__details">
                              <div class="followers__name">Sally Fadel</div>
                              <div class="followers__counter">
                                161 followers
                              </div>
                              <button
                                class="button-stroke button-small followers__button"
                              >
                                Unfollow
                              </button>
                            </div>
                          </div>
                          <div class="followers__wrap">
                            <div class="followers__gallery">
                              <div class="followers__preview">
                                <img
                                  src="/static/img/content/follower-pic-1.jpg"
                                  alt="Follower"
                                />
                              </div>
                              <div class="followers__preview">
                                <img
                                  src="/static/img/content/follower-pic-2.jpg"
                                  alt="Follower"
                                />
                              </div>
                              <div class="followers__preview">
                                <img
                                  src="/static/img/content/follower-pic-3.jpg"
                                  alt="Follower"
                                />
                              </div>
                              <div class="followers__preview">
                                <img
                                  src="/static/img/content/follower-pic-4.jpg"
                                  alt="Follower"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="loader"></div>
                    </div>
                  </div>
                  <div class="profile__item js-tabs-item">
                    <div class="followers">
                      <div class="followers__list">
                        <div class="followers__item">
                          <div class="followers__user">
                            <div class="followers__avatar">
                              <img
                                src="/static/img/content/avatar-5.jpg"
                                alt="Avatar"
                              />
                            </div>
                            <div class="followers__details">
                              <div class="followers__name">Sally Fadel</div>
                              <div class="followers__counter">
                                161 followers
                              </div>
                              <button class="button-small followers__button">
                                Follow
                              </button>
                            </div>
                          </div>
                          <div class="followers__wrap">
                            <div class="followers__gallery">
                              <div class="followers__preview">
                                <img
                                  src="/static/img/content/follower-pic-1.jpg"
                                  alt="Follower"
                                />
                              </div>
                              <div class="followers__preview">
                                <img
                                  src="/static/img/content/follower-pic-2.jpg"
                                  alt="Follower"
                                />
                              </div>
                              <div class="followers__preview">
                                <img
                                  src="/static/img/content/follower-pic-3.jpg"
                                  alt="Follower"
                                />
                              </div>
                              <div class="followers__preview">
                                <img
                                  src="/static/follower-pic-4.jpg"
                                  alt="Follower"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="loader"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list_have: '',
      list_creat: '',
      name: '鱼唇的水王',
      token: '0xc4c16a645...b21a',
      intro:
        'A wholesome farm owner in Montana. Upcoming gallery solo show in Germany',

      is_own_active: true,
      is_creat_active: false,
    }
  },
  methods: {
    logout(event) {
      uni.removeStorage({
        key: 'token',
        success: function (res) {
          console.log('success')
        },
      })
      uni.redirectTo({
        url: '../../pages/index/index',
      })
    },
  },
  mounted() {
    var token = ''
    // uni.getStorage({
    // 	key: 'token',
    // 	success: function (res) {
    // 		console.log(res.data);
    // 		token = res.data;
    // 	}
    // });
    uni.request({
      url: 'http://124.222.242.75:8080/profile/own',
      data: {},
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        token: token,
      },
      success: (res) => {
        console.log(res.data)
        this.list_have = res.data.data
      },
    })
  },
}
</script>

<style>
@import url('@/common/css/app.min.css');
</style>
