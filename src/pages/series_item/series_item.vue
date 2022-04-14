<template>
	<view class="body">
		<view class="outer">
			<el-header>
				<all-header></all-header>
			</el-header>


			<view class="outer__inner">
		 	<div style="width: 100%;">
					<image style="width: 100%; background-color: #eeeeee;" mode="widthFix" :src="head_url"
						@error="imageError">
					</image>
				</div>
				<el-row>
					<el-col>|</el-col>
				</el-row>

				<el-row class="btn_center">
					<el-col :span="11">|</el-col>
			 	<el-col :span="3"><button class="button buy_blind_btn" @click="checkout = true">立即购买</button>
					</el-col>
				</el-row>

				<div class="catalog myout">



					<card1-1-1 class="mycard" v-for="(item,index) in list" :title="item.name" price="9.98" creater="xxx"
						:tokenid="item.tokenId" :art_id="item.id" :address="item.address" :art_src="item.url"
						:sellout="(item.creator!=item.owner)&(item.creator!=null)"></card1-1-1>
				</div>


				<el-dialog class="dialog" width="27%" v-model="checkout" center>
					<div class="popup__item" style="display: block;">
						<div class="popup__title h4">确认购买</div>
						<div class="popup__info">你确定要购买此NFT盲盒吗？</div>
						<el-image style="width: 100% ;margin:0 auto" :src="blind_default" :fit="fit">
						</el-image>
						<div class="popup__table">
							<!-- <div class="popup__row">
				       <div class="popup__col">9.98</div>
				       <div class="popup__col">CNY</div>
				     </div> -->
							<!-- <div class="popup__row">
				       <div class="popup__col">你的余额</div>
				       <div class="popup__col">0.0 CNY</div>
				     </div> -->

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
							<el-image style="width: 100%" :src="which_buy_url" :fit="fit">
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
					<el-image style="width: 100%" :src="share_url" :fit="fit">
					</el-image>
			 </el-dialog>



			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address: "",
				base_url: "",
				head_url: "/static/img/content/Blind-Box.png",
				list: [],

				creater: "XXX",
				myurl: "",
				info: "info",

				base_url: "",
				which_buy_url: "",
				blind_default: "/static/img/content/blind_default.png",

				checkout: false,
				paypage: false,
				buyok: false,
				shareDialogVisible: false,
				share_url: "",
				fit: "contain"
			}
		},
		methods: {
			go_buy_blind(event) {
				var itemurl = '../../pages/item_blind/item_blind?address=' + this.address + '&base_url=' + this.base_url;
				uni.navigateTo({
					url: itemurl
				});
			},
			share(event) {
				this.buyok = false;
				this.shareDialogVisible = true;
				this.share_url = "https://tenapi.cn/poster/?qrcode=" + this.myurl +
					"&title=我在ArtShore购买了盲盒" +
					"&content=" + this.info +
					"&site=" + "ArtShore" +
					"&info=" + "数字艺术的黄金海岸" +
				+"&author=" + this.creater +
					"&pic=" + this.which_buy_url;
				console.log(this.share_url);
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
					url: 'http://124.222.242.75:8080/nft/buyBlindBox',
					data: {
						nft_addr: this.address,
					},
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'token': token
					},
					success: (res) => {
						this.paypage = false;
						this.buyok = true;
						this.which_buy_url = this.base_url + res.data.data;
						this.art_src = this.which_buy_url;
						this.art_src_2x = this.which_buy_url;
						this.share_url = this.which_buy_url;
						console.log(this.which_buy_url);
					}
				});

			},
			cancelpay(event) {
				this.paypage = false;
			}
		},
		onLoad: function(option) {
			this.address = option.address;
			this.base_url = option.base_url;
		},
		mounted() {
			var token = "";
			uni.getStorage({
				key: 'token',
				success: function(res) {
					token = res.data;
				}
			});
			this.head_url = this.base_url + "0";
			uni.request({
				url: 'http://124.222.242.75:8080/meta/collection',
				data: {
					nft_address: this.address,
				},
				method: 'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded',
					'token': token
				},
				success: (res) => {
					this.list = res.data.data;
					console.log(res.data)
				}
			});

		}
	}
</script>

<style>
	@import url("@/common/css/app.min.css");

	.mycard {
		width: 25%;
		float: left;
	}

	.catalog__list {
		width: 100%;
		margin: 0 auto;
	}

	.myout {
		width: 85%;
		margin: 0 auto;
	}
</style>
