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
								<div class="item__nav"><a class="item__link js-tabs-link active">信息</a>
									<a class="item__link js-tabs-link">创建者</a>
									<a class="item__link js-tabs-link">评论</a>
								</div>
								<div class="item__container">
									<div class="item__box js-tabs-item" style="display: block;">
										<div class="item__users">

											<div class="item__user">
												<div class="item__avatar"><img src="/static/img/content/avatar-2.png"
														alt="Avatar">
												</div>
												<div class="item__description">
													<div class="item__name">Zhang</div>
													<div class="item__action">购买了 {<span>{{title}} # {{tokenid}}</span>}
													</div>
												</div>
												<div class="item__time">2022-4-9 13:24</div>
											</div>

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
										data-effect="mfp-zoom-in" @click="checkout = true">转赠他人</a>
									<a class="button-stroke item__button" @click="share">分享</a>
								</div>
								<div class="item__variants">购买于<span class="item__percent">2022/3/28</span>
									<span>版权所有，请勿用作商业用途</span>
								</div>
							</div>
						</div>
					</div>
				</div>


				<el-dialog width="27%" v-model="checkout">
					<div class="popup__item" style="display: block;">
						<div class="popup__title h4">确认赠予</div>
						<div class="popup__info">你确定要将<strong>{ {{title}} # {{tokenid}} }</strong> 赠予他人吗？</div>
						<div class="popup__attention">
							<div class="popup__details">
								<div class="popup__category">数字藏品仅供收藏，请勿向他人售卖</div>
								<div class="popup__text"></div>
							</div>
						</div>
						<div class="popup__btns">
							<button class="button popup__button " style="width: 88%;" @click="topay">我要赠送</button>
							<button class="button-stroke popup__button js-popup-close" style="width: 88%;"
								@click="cancel1">取消</button>
						</div>
					</div>
				</el-dialog>

				<el-dialog width="27%" v-model="paypage">
					<div class="popup__item" style="display: block;">
						<div class="popup__title h4">选择受赠人</div>
						<div class="steps">
							<el-input v-model="to" placeholder="请输入受赠人id"></el-input>
						</div>
						<div class="popup__btns">
							<button class="button popup__button" style="width: 88%;" @click="payok">赠予</button>
							<button class="button-stroke popup__button js-popup-close" style="width: 88%;"
								@click="cancelpay">放弃赠予</button>
						</div>
					</div>
				</el-dialog>

				<el-dialog width="27%" v-model="buyok">
					<div class="popup__item" style="display: block;">
						<div class="success">
							<div class="success__title h2">赠予成功! <span role="img" aria-label="firework">🎉</span></div>
							<div class="success__info">你已成功向<span>id:{{to}}</span>赠送数字藏品</div>
							<div class="success__table">
								<div class="success__row">
									<div class="success__col">状态</div>
									<div class="success__col">已赠送</div>
								</div>
								<div class="success__row">
									<div class="success__col">藏品唯一id</div>
									<div class="success__col">{{address}}:{{tokenid}}</div>
								</div>
								<div class="success__row">
									<div class="success__col">所属人id</div>
									<div class="success__col">{{to}}</div>
								</div>
							</div>
							<div class="success__stage">通知好友吗？</div>
							<button class="button popup__button" style="width: 88%;" @click="share">通知</button>
						</div>
					</div>
				</el-dialog>

				<el-dialog v-model="shareDialogVisible" width="32%" center>
					<div class="popup__item" style="display: block;">
						<div class="success">
							<el-image style="width: 100%" :src="art_src" :fit="fit">
							</el-image>
							<div class="popup__title h4">快来看我拥有的数字艺术品吧</div>
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
								<el-col :span="17" ><div class="success__stage h3">--来自ArtShore--<br><h6>数字艺术品的黄金海岸</h6></div></el-col>
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
				art_src: "/static/img/content/item-pic.jpg",
				art_src_2x: "/static/img/content/item-pic@2x.jpg 2x",
				title: "令人惊叹的艺术品",
				price: "2.5",
				info: "链上HASH:",
				myurl_text: "0x04f9c607b2925cece9703ae991ad78aa212ddc8ba3fbc609a57d3763def59d13",
				myurl: "http://124.222.242.75:5100/#/transaction/transactionDetail?pkHash=0x00eef72bb16446a1d9f2089a8792b170324ab12a373e83d36c519afa57a126ec",
				to: '',
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
				uni.request({
					url: 'http://124.222.242.75:8080/nft/handsel', //仅为示例，并非真实接口地址。
					data: {
						to: this.to,
						token_id: this.tokenid,
						nft_addr: this.address
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
</style>
