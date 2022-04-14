<template>
	<view class="body">

		<view class="outer">
			<el-header>
				<all-header></all-header>
			</el-header>
			<view class="outer__inner">
				<div class="section-pt80 catalog">
					<div class="catalog__center center">
						<div class="catalog__top">
							<div class="catalog__title">在艺术海岸寻找数字艺术品吧</div>
							<form class="catalog__search">
								<input class="catalog__input ex_catalog__input" type="text" name="search"
									placeholder="搜索..." required>
								<button class="catalog__result">
									<img class="icon icon-search" src="../../static/icon/icon_ser.png" />
								</button>
							</form>
						</div>
						<div class="catalog__sorting">
							<view class="myselect"></view>
							<div class="catalog__nav">
								<a class="catalog__link" :class="{active:all}" @click="show_all">所有</a>
								<a class="catalog__link" :class="{active:simple}" @click="show_simple">藏品</a>
								<a class="catalog__link" :class="{active:blind}" @click="show_blind">盲盒</a>
							</div>
						</div>
						<div class="catalog__row">
							<div class="catalog__filters">
								<div class="range">
									<div class="range__label">价格区间</div>
									<div class="range__slider js-slider" data-min="0.01" data-max="10" data-start="5"
										data-step="0.1" data-tooltips="true" data-postfix=" ETH"></div>
									<div class="block">
							  	<el-slider v-model="range_value"></el-slider>
									</div>
									<div class="range__indicators">
										<div class="range__text">1 CNY</div>
										<div class="range__text">100 CNY</div>
									</div>
								</div>
								<div class="catalog__group">
									<div class="field">
										<div class="field__label">受欢迎</div>
										<el-select class="myselect" v-model="select_popular_val" placeholder="请选择">
											<el-option v-for="item in popular_options" :key="item.value"
							 				:label="item.label" :value="item.value">
							  		</el-option>
										</el-select>
										<!-- <select class="select">
		                        <option>Most liked</option>
		                        <option>Least liked</option>
		                      </select> -->
									</div>
									<div class="field">
										<div class="field__label">色系</div>
										<el-select class="myselect" v-model="select_color_val" placeholder="请选择">
											<el-option v-for="item in color_options" :key="item.value"
												:label="item.label" :value="item.value">
											</el-option>
										</el-select>
										<!-- <select class="select">
		                        <option>All colors</option>
		                        <option>Black</option>
		                        <option>Green</option>
		                        <option>Pink</option>
		                        <option>Purple</option>
		                      </select> -->
									</div>
									<div class="field">
										<div class="field__label">创作者</div>
										<el-select class="myselect" v-model="select_creator_val" placeholder="请选择">
											<el-option v-for="item in creator_options" :key="item.value"
												:label="item.label" :value="item.value">
							  		</el-option>
										</el-select>
										<!-- <select class="select">
		                        <option>Verified only</option>
		                        <option>All</option>
		                        <option>Most liked</option>
		                      </select> -->
									</div>
								</div><a class="catalog__reset" @click="reload()">
									重新筛选</a>
		 				</div>
							<div class="catalog__wrapper">
								<div class="catalog__list">
									<card1 class="card1" :hidden="(!all)|(item.creator!=item.owner)"
										v-for="(item,index) in list" :title="item.name" price="9.98"
										:creater="item.creator.substring(0,15)" :tokenid="item.tokenId"
										:art_id="item.id" :address="item.address" :art_src="item.url"></card1>
									<card1-1 class="card1-1" :hidden="!blind" v-for="(item,index) in list_series"
										:title="item.name" price="9.98" creater="xxx" :tokenid="item.tokenId"
										:art_id="item.id" :address="item.address" :art_src="item.coverUrl"
										:base_url="item.baseUrl"></card1-1>
								</div>
								<div class="catalog__btns">
									<button class="button-stroke catalog__button">Load more</button>
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
				list: [],
				list_series: [],
				all: true,
				simple: false,
				blind: false,

				time_options: [{
					value: '1',
					label: '最新的'
				}, {
					value: '2',
					label: '最旧的'
				}],
				select_time_val: '',
				range_value: 50,
				popular_options: [{
					value: '1',
					label: '最受喜欢'
				}, {
					value: '2',
				 label: '最少喜欢'
				}],
				select_popular_val: '',
				color_options: [{
						value: '1',
						label: '所有颜色'
					},
					{
						value: '2',
					 label: '绿色'
					},
					{
						value: '3',
						label: '红色'
					},
					{
						value: '4',
						label: '蓝色'
					},
					{
						value: '5',
						label: '黑色',
					}
				],
				select_creator_val: '',
				creator_options: [{
						value: '1',
						label: '仅订阅的'
					},
					{
						value: '2',
						label: '所有'
					},
					{
						value: '3',
						label: '最受喜爱的'
					}
				],
				select_color_val: '',

			}
		},
		methods: {
			formatTooltip(val) {
				return val / 100;
			},
			show_all(event) {
				var token = "";
				uni.getStorage({
					key: 'token',
					success: function(res) {
						console.log(res.data);
						token = res.data;

					}
				});
				uni.request({
					url: 'http://124.222.242.75:8080/allItem', //仅为示例，并非真实接口地址。
					data: {},
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'token': token
					},
					success: (res) => {
						this.list = res.data.data;
					}
				});

				this.all = true;
				this.simple = false;
				this.blind = false;

			},
			show_simple(event) {
				var token = "";
				uni.getStorage({
					key: 'token',
					success: function(res) {
						console.log(res.data);
						token = res.data;

					}
				});
				uni.request({
					url: 'http://124.222.242.75:8080/allItem', //仅为示例，并非真实接口地址。
					data: {

					},
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'token': token
					},
					success: (res) => {
						this.list = res.data.data;
					}
				});

				this.all = false;
				this.simple = true;
				this.blind = false;
			},
			show_blind(event) {
				var token = "";
				uni.getStorage({
					key: 'token',
					success: function(res) {
						console.log(res.data);
						token = res.data;

					}
				});
				uni.request({
					url: 'http://124.222.242.75:8080/allItem', //仅为示例，并非真实接口地址。
					data: {},
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'token': token
					},
					success: (res) => {
						this.list = res.data.data;
					}
				});

				this.all = false;
				this.simple = false;
				this.blind = true;
			},
			reload(event) {
				var token = "";
				uni.getStorage({
					key: 'token',
					success: function(res) {
						console.log(res.data);
						token = res.data;

					}
				});
				uni.request({
					url: 'http://124.222.242.75:8080/allItem', //仅为示例，并非真实接口地址。
					data: {},
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
						'token': token
					},
					success: (res) => {
						this.list = res.data.data;
					}
				});

				this.all = true;
				this.simple = false;
				this.blind = false;
			}
		},
		mounted() {
			var token = "";
			uni.getStorage({
				key: 'token',
				success: function(res) {
					console.log(res.data);
					token = res.data;

				}
			});
			uni.request({
				url: 'http://124.222.242.75:8080/allItem', //仅为示例，并非真实接口地址。
				data: {},
				method: 'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded',
					'token': token
				},
				success: (res) => {
					console.log(res.data)
					this.list = res.data.data;
				}
			});
			uni.request({
				url: 'http://124.222.242.75:8080/collection', //仅为示例，并非真实接口地址。
				data: {
					type: 2
				},
				method: 'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded',
					'token': token
				},
				success: (res) => {
					this.list_series = res.data.data;
					console.log("111")
					console.log(res.data);
				}
			});
		}
	}
</script>

<style>
	@import url("@/common/css/app.min.css");

	.myselect {
		float: none;
		width: 100%;
		height: 48px;
		padding: 0 48px 0 16px;
		background: #FCFCFD;
		border-radius: 12px;
		border: none;
		opacity: 1;
		font-size: 14px;
		font-weight: 500;
		line-height: 48px;
	}

	.card1 {
		width: 33%;
	}

	.card1-1 {
		width: 33%;
	}
</style>
