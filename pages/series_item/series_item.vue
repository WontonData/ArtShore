<template>
	<view class="body">
	<view class="outer">
	  <el-header>
	    <all-header></all-header>
	  </el-header>

	 
	  <view class="outer__inner">
		  
		  <div class="section-pt80 catalog myout">
		  
		  
		  					  
		  <card1 class="mycard" v-for="(item,index) in list" :title="item.name" price="9.98" creater="xxx" :tokenid="item.tokenId" :art_id="item.id" :address="item.address"></card1>							
		  <card1 class="mycard" v-for="(item,index) in list" :title="item.name" price="9.98" creater="xxx" :tokenid="item.tokenId" :art_id="item.id" :address="item.address"></card1>							
		  
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
				list:[]
			}
		},
		methods: {
			
		},
		onLoad: function (option) {
				this.address = option.address;
		},
		mounted() {
			var token = "";
			uni.getStorage({
				key: 'token',
				success: function (res) {
					token = res.data;
				}
			});
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
					console.log(res.data);
					this.list = res.data.data;
			    }
			});
		}
	}
</script>

<style>
	@import url("/common/css/app.min.css");
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
