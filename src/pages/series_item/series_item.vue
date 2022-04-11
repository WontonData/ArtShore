<template>
	<view class="body">
	<view class="outer">
	  <el-header>
	    <all-header></all-header>
	  </el-header>

	 
	  <view class="outer__inner">
		  <div style="width: 100%;">
			  <image style="width: 100%; background-color: #eeeeee;" mode="widthFix" :src="head_url" @error="imageError">
			  </image>	
		  </div>
		  <el-row >
			  <el-col>|</el-col>
		  </el-row>
		  
		  <el-row class="btn_center">
			  <el-col :span="11">|</el-col>
			  <el-col :span="3"><button class="button buy_blind_btn" @click="go_buy_blind">立即购买</button> </el-col>
		  </el-row>
		  
		  <div class="catalog myout">
			  
		  
		  			
		  <card1-1-1 class="mycard" v-for="(item,index) in list" :title="item.name" price="9.98" creater="xxx" :tokenid="item.tokenId" :art_id="item.id" :address="item.address" :art_src="item.url"></card1-1-1>							
		  <card1-1-1 class="mycard" v-for="(item,index) in list" :title="item.name" price="9.98" creater="xxx" :tokenid="item.tokenId" :art_id="item.id" :address="item.address" :art_src="item.url"></card1-1-1>							
		  
		  </div>
		  
		  
		  
		  
	  </view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address:"",
				base_url:"",
				head_url:"/static/img/content/Blind-Box.png",
				list:[]
			}
		},
		methods: {
			go_buy_blind(event){
				var itemurl =  '../../pages/item_blind/item_blind?address='+this.address+'&base_url='+this.base_url;
				uni.navigateTo({
					url: itemurl
				});
			}
		},
		onLoad: function (option) {
				this.address = option.address;
				this.base_url = option.base_url;
		},
		mounted() {
			var token = "";
			uni.getStorage({
				key: 'token',
				success: function (res) {
					token = res.data;
				}
			});
			this.head_url = this.base_url+"0";
			uni.request({
			    url: 'http://124.222.242.75:8080/meta/collection', 
			    data: {
					nft_address:this.address,
			    },
				method: 'POST',
			    header: {
					'content-type': 'application/x-www-form-urlencoded',
					'token':token
			    },
			    success: (res) => {
					this.list = res.data.data;
			    }
			});
			
		}
	}
</script>

<style>
	@import url("@/common/css/app.min.css");
	.mycard{
	    width: 25%;
		float: left;
	}
	.catalog__list{
		width: 100%;
		margin: 0 auto;
	}
	.myout{
		width: 85%;
		margin: 0 auto;
	}
</style>
