<template>
	<view>
		<div class="card">
		  <div class="card__preview"><!-- <img srcSet="static/img/content/card-pic-1@2x.jpg 2x" src="static/img/content/card-pic-1.jpg" alt="Card preview"/> -->
		  <img :srcSet="art_src" :src="art_src" alt="Card preview"/>
		    <div class="card__control">
		      <div class="status-green card__category">盲盒系列</div>
			  <a class="button-small card__button js-popup-open" data-effect="mfp-zoom-in" @click="go_item"><span>查看该系列</span>
			  </a>
		    </div>
		  </div>
		  <a class="card__link">
		    <div class="card__body">
		      <div class="card__line"> 
		        <div class="card__title">{{title}} # {{tokenid}}</div>
		        <div class="card__price">{{price}} CNY</div>
		      </div>
		    </div> 
		  </a>
		</div>
	</view>
</template>

<script>
	export default {
		name:"card1-1",
		props:{
			art_id:{
					default: "",
					required: true
			},
			title:{
					default: "",
					required: true
			},
			price:{
					default: "9.99",
					required: false
			},
			creater:{
					default: 'Mike',
					required: false
			},
			tokenid:{
				default: 0,
				required: true
			},address:{
				default: 0,
				required: true
			},
		},
		data() {
			return {
				art_src:"static/img/content/upload_pic3.png",
				follow_num:50,
				art_id:""
			};
		},
		methods:{
			go_item(event){
				var itemurl =  '../../pages/series_item/series_item?address='+this.address;
				uni.navigateTo({
					url: itemurl
				});
			},
		}
	}
</script>

<style scoped>
@import url("/common/css/app.min.css");
</style>
