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
									<div class="status-black item__category">限量</div>
									<div class="status-purple item__category">拍卖中</div>
								</div><img :srcSet="art_src_2x" :src="art_src" alt="Item">
							</div>

						</div>
						<div class="item__details">
							<h1 class="item__title h3">{{title}} # {{tokenid}}</h1>
							<div class="item__cost">
								<div class="status-stroke-green item__price">最高价{{highest_price}} CNY</div>
								<div class="status-stroke-black item__price">正在拍卖</div>
								<div class="item__counter">10人正在竞价</div>
							</div>

							<div class="item__text">{{info}}
								<a href="https://ui8.net" target="_blank">{{url}}</a>
							</div>

							<div class="item__tabs">
								<div class="item__nav"><a class="item__link js-tabs-link active">最新竞价</a><a
										class="item__link js-tabs-link">创建者</a><a class="item__link js-tabs-link">评论</a>
								</div>
								<div class="item__container">
									<div class="item__box js-tabs-item" style="display: block;">
										<div class="item__users">

											<div class="item__user" v-for="(item,index) in bid_info"
												v-show="index>bid_info.length-4">
												<div class="item__avatar"><img :src="item.url" alt="Avatar">
													<div class="item__reward"><img
															src="/static/img/content/reward-1.svg" alt="Reward"></div>
												</div>
												<div class="item__description">
													<div class="item__name">{{item.name}}</div>
													<div class="item__action">出价: <span
															class="item__money">{{item.money}} CNY</span></div>
												</div>
												<div class="item__time">{{item.time}}</div>
											</div>

										</div>
									</div>


								</div>
							</div>

							<div class="item__control">
								<div class="item__head">
									<div class="item__avatar"><img :src="highest_url" alt="Avatar"></div>
									<div class="item__description">
										<div class="item__info">目前最高出价者 <span>{{highest_name}}</span></div>
										<div class="item__currency">
											<div class="item__price">{{highest_price}} CNY</div>
										</div>
									</div>
								</div>
								<div class="item__btns"><a class="button item__button js-popup-open"
										data-effect="mfp-zoom-in" @click="show_place_bid = true">参与竞价</a>
									<a class="button-stroke item__button" @click="share">分享</a>
								</div>
								<div class="item__variants">创建于<span class="item__percent">2022/3/28</span>
									<span>版权所有，请勿用作商业用途</span>
								</div>
							</div>
						</div>
					</div>
				</div>


				<el-dialog width="27%" v-model="show_place_bid" class="absolute">
					<uni-load-more v-show="show_load" status="loading"></uni-load-more>
					<div class="popup__item" style="display: block;">
						<div class="popup__title h4">输入竞拍价，不低于最高价</div>
						<div class="steps">
							<el-input v-model="place_price" placeholder=""></el-input>
						</div>
						<div class="popup__btns">
							<button class="button popup__button" style="width: 88%;" @click="place_a_bid">竞价</button>
							<button class="button-stroke popup__button" style="width: 88%;"
								@click="cancel_place">放弃竞价</button>
						</div>
					</div>
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
				tokenid: "1",
				art_src: "../../static/img/content/item_auction_test.png",
				art_src_2x: "../../static/img/content/item_auction_test.png",
				title: "艺术品",
				price: "9.98",
				info: "这张NFT是XXX创作的XXX，正在进行拍卖，欢迎竞价。",
				myurl: "https://go.zcc76.xyz",
				creater: '水王',
				checkout: false,
				paypage: false,
				buyok: false,
				shareDialogVisible: false,
				share_url: "",
				fit: "contain",
				highest_price: 11.66,
				highest_name: "Binbin Xu",
				highest_url: "../../static/img/content/avatar-3.png",
				place_price: 0.00,
				bid_info: [{
					name: 'Binbin Xu',
					money: 11.66,
					time: 'Jun 14 - 4:15 PM',
					url: '../../static/img/content/avatar-3.png'
				}, ],
				show_place_bid: false,
				show_load: false,
			}
		},
		methods: {
			place_a_bid(event) {
				this.show_load = true;
				setTimeout(() => {
					this.show_load = false;
					this.show_place_bid = false;
					this.highest_price = this.place_price;
					this.highest_name = "CCZ";
					this.highest_url = "../../static/img/content/avatar-2.png";
					this.bid_info.push({
						name: "CC Z",
						money: this.place_price,
						time: "Jun 14 - 4:15 PM",
						url: "../../static/img/content/avatar-2.png"
					});
				}, "1000");

			},
			cancel_place(event) {
				this.show_place_bid = false;
			}
		},
		computed: {
			reverseBidInfo() {
				return this.bid_info.reverse();
			}
		},
		onLoad: function(option) {

		},
		mounted() {

		}
	}
</script>

<style>
	@import url("@/common/css/app.min.css");

	.popup__item {}

	.dialog {
		width: 70%;
		margin: 0 auto;
	}
</style>
