<template>
	<view>
		<div class="card">
		  <div class="card__preview"><!-- <img srcSet="static/img/content/card-pic-1@2x.jpg 2x" src="static/img/content/card-pic-1.jpg" alt="Card preview"/> -->
		  <img :srcSet="art_src" :src="art_src" alt="Card preview"/>
		    <div class="card__control">
		      <div class="status-green card__category">隐藏款</div>
		    </div>
		  </div>
		  <a class="card__link">
		    <div class="card__body">
		      <div class="card__line"> 
		        <div class="card__title">{{title}} # {{tokenid}}</div>
		        <div class="card__price">剩余99份</div>
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
				art_src:"https://nft-1306406918.cos.ap-shanghai.myqcloud.com/0x0730f2299d5921d93d24b7b22526de51c62ef2ac/0",
				follow_num:50,
				art_id:""
			};
		},
		methods:{
		}
	}
</script>

<style scoped>
@import url("/common/css/app.min.css");
</style>
