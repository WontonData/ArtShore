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
								</div><img :srcSet="art_src_2x" :src="art_src" alt="Item">
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
							<h1 class="item__title h3">{{title}} # {{tokenid}}</h1>
							<div class="item__cost">
								<div class="status-stroke-green item__price">{{price}} CNY</div>
								<div class="status-stroke-black item__price">标签2</div>
								<div class="item__counter">10人正在关注</div>
							</div>

							<div class="item__text">{{info}}
								<a :href="myurl" target="_blank">{{myurl_text.substring(0,38)}}...</a>
							</div>

							<div class="item__tabs js-tabs">
								<div class="item__nav"><a class="item__link js-tabs-link active" href="#">信息</a><a
										class="item__link js-tabs-link" href="#">创建者</a><a
										class="item__link js-tabs-link" href="#">评论</a></div>
								<div class="item__container">
									<div class="item__box js-tabs-item" style="display: block;">
										<div class="item__users">


											<div class="item__user">
												<div class="item__avatar"><img src="/static/img/content/avatar-3.png"
														alt="Avatar">
													<div class="item__reward"><img
															src="/static/img/content/reward-1.svg" alt="Reward"></div>
												</div>
												<div class="item__description">
													<div class="item__name">Chillin</div>
													<div class="item__action">将 {<span>{{title}} # {{tokenid}}</span>}
														出售</div>
												</div>
												<div class="item__time">2022-4-8 14:54</div>
											</div>

											<div class="item__user">
												<div class="item__avatar"><img src="/static/img/content/avatar-3.png"
														alt="Avatar">
													<div class="item__reward"><img
															src="/static/img/content/reward-1.svg" alt="Reward"></div>
												</div>
												<div class="item__description">
													<div class="item__name">Chillin</div>
													<div class="item__action">创建了 {<span>{{title}} # {{tokenid}}</span>}
													</div>
												</div>
												<div class="item__time">2022-4-8 13:00</div>
											</div>


										</div>
									</div>
									<div class="item__box js-tabs-item">
										<div class="item__users">
											<div class="item__user">
												<div class="item__avatar"><img src="/static/img/content/avatar-1.jpg"
														alt="Avatar"></div>
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
												<div class="item__avatar"><img src="/static/img/content/avatar-2.jpg"
														alt="Avatar">
													<div class="item__reward"><img
															src="/static/img/content/reward-1.svg" alt="Reward"></div>
												</div>
												<div class="item__description">
													<div class="item__name">Raquel Will</div>
													<div class="item__action">Place a bid: <span
															class="item__money">1.46 ETH</span></div>
												</div>
												<div class="item__time">Jun 14 - 4:12 PM</div>
											</div>
											<div class="item__user">
												<div class="item__avatar"><img src="/static/img/content/avatar-6.jpg"
														alt="Avatar">
													<div class="item__reward"><img
															src="/static/img/content/reward-1.svg" alt="Reward"></div>
												</div>
												<div class="item__description">
													<div class="item__name">Cole Fahey</div>
													<div class="item__action">Put <span>Awesome work</span> on sale
													</div>
												</div>
												<div class="item__time">Jun 14 - 4:12 PM</div>
											</div>
											<div class="item__user">
												<div class="item__avatar"><img src="/static/img/content/avatar-7.jpg"
														alt="Avatar">
													<div class="item__reward"><img
															src="/static/img/content/reward-1.svg" alt="Reward"></div>
												</div>
												<div class="item__description">
													<div class="item__name">Adah Mitchell</div>
													<div class="item__action">Accepted <span>Raquel Will</span> ‘s bid
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
								<div class="item__btns"><a class="button item__button js-popup-open"
										data-effect="mfp-zoom-in" @click="checkout = true">立即购买</a>
									<a class="button-stroke item__button" @click="share">分享</a>
								</div>
								<div class="item__variants">创建于<span class="item__percent">2022/3/28</span>
									<span>版权所有，请勿用作商业用途</span></div>
							</div>
						</div>
					</div>
				</div>


				<el-dialog class="dialog" width="27%" v-model="checkout" center>
					<div class="popup__item" style="display: block;">
						<div class="popup__title h4">确认购买</div>
						<div class="popup__info">你确定要购买&nbsp;&nbsp;&nbsp; <strong> ZCC </strong> &nbsp;&nbsp;&nbsp;发行的
							&nbsp;&nbsp;&nbsp;<strong> {{title}} </strong>&nbsp;&nbsp;&nbsp;吗？费用如下</div>
						<div class="popup__table">
							<div class="popup__row">
								<div class="popup__col">9.98</div>
								<div class="popup__col">CNY</div>
							</div>
							<div class="popup__row">
								<div class="popup__col">你的余额</div>
								<div class="popup__col">0.0 CNY</div>
							</div>

							<div class="popup__row">
								<div class="popup__col">你将支付</div>
								<div class="popup__col">9.98 CNY</div>
							</div>
						</div>
						<div class="popup__attention">
							<div class="popup__details">
								<div class="popup__category">数字藏品仅供收藏，请勿向他人售卖</div>
								<div class="popup__text"></div>
							</div>
						</div>
						<div class="popup__btns">
							<button class="button popup__button " style="width: 88%;" @click="topay">我要购买，去付款</button>
							<button class="button-stroke popup__button js-popup-close" style="width: 88%;"
								@click="cancel1">取消</button>
						</div>
					</div>
				</el-dialog>

				<el-dialog class="dialog" width="27%" v-model="paypage" center>
					<div class="popup__item" style="display: block;">
						<div class="popup__title h4">请支付......</div>
						<div class="steps">
							<div class="steps__item">
								<div class="steps__head">
				 				<div class="steps__icon">
										<div class="loader-circle"></div>
									</div>
									<div class="steps__details">
										<div class="steps__info">正在支付</div>
										<div class="steps__text">请使用支付宝支付</div>
									</div>
								</div>
							</div>
							<div class="steps__item">
								<el-image style="width: 100%" src="/static/img/content/pay.png" :fit="fit">
								</el-image>
							</div>
						</div>
						<div class="popup__btns">
							<button class="button popup__button" style="width: 88%;" @click="payok">支付完成</button>
							<button class="button-stroke popup__button js-popup-close" style="width: 88%;"
								@click="cancelpay">放弃支付</button>
						</div>
					</div>
				</el-dialog>

				<el-dialog class="dialog" width="27%" v-model="buyok" center>
					<div class="popup__item" style="display: block;">
						<div class="success">
							<div class="success__title h2">购买成功! <span role="img" aria-label="firework">🎉</span></div>
							<div class="success__info">你已成功购买<span>{{creater}}</span>发行的数字藏品</div>
							<el-image style="width: 100%" :src="art_src" :fit="fit">
							</el-image>
							<div class="success__table">
								<div class="success__row">
									<div class="success__col">状态</div>
									<div class="success__col">已购买</div>
								</div>
								<div class="success__row">
						  	<div class="success__col">藏品唯一id</div>
									<div class="success__col">0msx836930...87r398</div>
								</div>
								<div class="success__row">
							  <div class="success__col">所属人</div>
									<div class="success__col">username</div>
								</div>
							</div>
							<div class="success__stage">向好友分享你新购买的数字藏品吧！</div>
							<button class="button popup__button" style="width: 88%;" @click="share">分享</button>
						</div>
					</div>
				</el-dialog>

				<el-dialog v-model="shareDialogVisible" width="32%" center>
					<div class="popup__item" style="display: block;">
						<div class="success">
							<el-image style="width: 100%" :src="art_src" :fit="fit">
							</el-image>
							<div class="popup__title h4">快来看我购买的数字艺术品吧</div>
							<div class="success__table">
								<div class="success__row">
									<div class="success__col">名称</div>
									<div class="success__col">{{title}}#{{tokenid}}</div>
								</div>
								<div class="success__row">
						  	<div class="success__col">藏品唯一id</div>
									<div class="success__col">0msx836930...87r398</div>
								</div>
								<div class="success__row">
							  <div class="success__col">所属人</div>
									<div class="success__col">Zhang</div>
								</div>
							</div>
							<el-row>
								<el-col :span="17"><div class="success__stage h5">--来自ArtShore--<br><h6>数字艺术品的黄金海岸</h6></div></el-col>
								<el-col :span="3"></el-col>
								<el-col :span="4"><el-image style="width: 100%;float: right;" src="/static/img/content/share_qr.png" :fit="fit">
							</el-image></el-col>
							</el-row>
						</div>
					</div>
					<!-- <el-image style="width: 100%" :src="share_url" :fit="fit">
					</el-image> -->
				</el-dialog>

			</div>


		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				address: "",
				tokenid: "",
				art_src: "https://nft-1306406918.cos.ap-shanghai.myqcloud.com/0x0730f2299d5921d93d24b7b22526de51c62ef2ac/0",
				art_src_2x: "https://nft-1306406918.cos.ap-shanghai.myqcloud.com/0x0730f2299d5921d93d24b7b22526de51c62ef2ac/0 2x",
				title: "令人惊叹的艺术品",
				price: "2.5",
				info: "链上HASH:",
				myurl_text: "0x04f9c607b2925cece9703ae991ad78aa212ddc8ba3fbc609a57d3763def59d13",
				myurl: "http://124.222.242.75:5100/#/transaction/transactionDetail?pkHash=0x00eef72bb16446a1d9f2089a8792b170324ab12a373e83d36c519afa57a126ec",
				creater: '水王',
				checkout: false,
				paypage: false,
				buyok: false,
				shareDialogVisible: false,
				share_url: "",
				fit: "contain"
			}
		},
		methods: {
			share(event) {
				this.buyok = false;
				this.shareDialogVisible = true;
				/* this.share_url = "https://tenapi.cn/poster/?qrcode=" + this.myurl +
					"&title=" + this.title +
					"&content=" + this.info +
					"&site=" + "ArtShore" +
					"&info=" + "数字艺术的黄金海岸" +
					"&author=" + this.creater +
					"&pic=https://tenapi.cn/bing/";
				console.log(this.share_url); */
				
			},
			topay(event) {
				this.checkout = false;
				this.paypage = true;
			},
			cancel1(event) {
				this.checkout = false;
			},
			payok(event) {
				var token = "";
				uni.getStorage({
					key: 'token',
					success: function(res) {
						console.log(res.data);
						token = res.data;
					}
				});
				console.log(this.address);
				console.log(this.tokenid);
				uni.request({
					url: 'http://124.222.242.75:8080/nft/buyItem', //仅为示例，并非真实接口地址。
					data: {
						nft_addr: this.address,
						token_id: this.tokenid
					},
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'token': token
					},
					success: (res) => {
						console.log(res.data);
						this.paypage = false;
						this.buyok = true;
					}
				});

			},
			cancelpay(event) {
				this.paypage = false;
			}
		},
		onLoad: function(option) {
			this.address = option.address;
			this.tokenid = option.tokenid;
		},
		mounted() {
			var token = "";
			uni.getStorage({
				key: 'token',
				success: function(res) {
					token = res.data;
				}
			});
			uni.request({
				url: 'http://124.222.242.75:8080/nft/details',
				data: {
					nft_addr: this.address,
					token_id: this.tokenid
			 },
				method: 'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded',
					'token': token
				},
				success: (res) => {
					console.log(res.data);
					this.title = res.data.data.name;
					this.art_src = res.data.data.url;
					this.art_src_2x = res.data.data.url;
				}
			});
		}
	}
</script>

<style>
	@import url("@/common/css/app.min.css");

	.popup__item {}

	.dialog {
		width: 32%;
		margin: 0 auto;
	}
</style>
