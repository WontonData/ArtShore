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
		        <div class="card__price" v-show="!sellout">未售出!</div>
				<div class="card__price card__price_red" v-show="sellout">已售出!</div>
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
			},
			address:{
				default: 0,
				required: true
			},
			art_src:{
				default: "",
				required: true
			},
			sellout:{
				default: false,
				required: true
			},
		},
		data() {
			return {
				follow_num:50,
				art_id:""
			};
		},
		methods:{
		},
		mounted(){
			console.log(this.sellout);
		}
	}
</script>

<style scoped>
@import url("../../common/css/app.min.css");
.card__price_red{
	color:red;
	box-shadow: inset 0 0 0 2px red;
}
</style>
