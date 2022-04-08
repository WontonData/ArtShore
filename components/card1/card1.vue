<template>
	<view>
		<div class="card">
		  <div class="card__preview"><!-- <img srcSet="static/img/content/card-pic-1@2x.jpg 2x" src="static/img/content/card-pic-1.jpg" alt="Card preview"/> -->
		  <img :srcSet="art_src" :src="art_src" alt="Card preview"/>
		    <div class="card__control">
		      <div class="status-green card__category">可购买 !</div>
		      <!-- <button class="card__favorite">
		        <svg class="icon icon-heart">
		          <use xlink:href="#icon-heart"></use>
		        </svg>
				<img class="icon icon-search" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M11 2.112a4.333 4.333 0 0 1 4.333 4.333c0 4.245-4.647 6.59-6.542 7.37-.511.21-1.071.21-1.582 0-1.896-.78-6.543-3.124-6.543-7.37a4.333 4.333 0 0 1 4.333-4.333 4.32 4.32 0 0 1 3 1.206 4.32 4.32 0 0 1 3-1.206zm0 1.333c-.807 0-1.537.317-2.077.835l-.462.443a.666.666 0 0 1-.923 0l-.462-.443a2.987 2.987 0 0 0-2.077-.835 3 3 0 0 0-3 3c0 1.588.86 2.9 2.101 3.978s2.728 1.794 3.615 2.159a.73.73 0 0 0 .567 0c.888-.365 2.373-1.08 3.615-2.159S14 8.034 14 6.445a3 3 0 0 0-3-3z'/%3E%3C/svg%3E"></img>
		      </button> -->
			  <a class="button-small card__button js-popup-open" data-effect="mfp-zoom-in" @click="go_item"><span>立即购买</span>
		        <!-- <svg class="icon icon-scatter-up">
		          <use xlink:href="#icon-scatter-up"></use>
		        </svg> -->
				<img class="icon icon-scatter-up" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M13.334 12.667a.667.667 0 1 1 0 1.334.667.667 0 0 1 0-1.334zm-5.333 0A.667.667 0 1 1 8 12.666zm-5.333 0a.667.667 0 1 1-.001 0zM13.334 10a.667.667 0 1 1 0 1.334.667.667 0 0 1 0-1.334zM8 10a.667.667 0 1 1 0 1.334A.667.667 0 0 1 8 10zM2.667 7.333a2 2 0 0 1 0 4 2 2 0 0 1-2-2 2 2 0 0 1 2-2zm0 1.333a.667.667 0 1 0 0 1.334.667.667 0 0 0 0-1.334zm10.667-1.333a.667.667 0 1 1 0 1.334.667.667 0 0 1 0-1.334zM8 4.667a2 2 0 1 1 0 4 2 2 0 1 1 0-4zM8 6a.667.667 0 1 0 0 1.334A.667.667 0 0 0 8 6zm5.333-4a2 2 0 1 1 0 4 2 2 0 1 1 0-4zm0 1.333a.667.667 0 1 0 0 1.334.667.667 0 0 0 0-1.334z'/%3E%3C/svg%3E"></img>
			  </a>
		    </div>
		  </div><a class="card__link" href="item.html">
		    <div class="card__body">
		      <div class="card__line"> 
		        <div class="card__title">{{title}} # {{tokenid}}</div>
		        <div class="card__price">{{price}} CNY</div>
		      </div>
		      <div class="card__line">
		        <div class="card__users">
		          <div class="card__avatar"><img src="static/img/content/avatar-1.jpg" alt="Avatar"/></div>
		          <div class="card__avatar"><img src="static/img/content/avatar-3.jpg" alt="Avatar"/></div>
		          <div class="card__avatar"><img src="static/img/content/avatar-4.jpg" alt="Avatar"/></div>
		        </div>
		        <div class="card__counter">当前{{follow_num}}人关注</div>
		      </div>
		    </div> 
		    <div class="card__foot">
		      <div class="card__status">
		        <svg class="icon icon-candlesticks-up">
		          <use xlink:href="#icon-candlesticks-up"></use>
		        </svg>创作者： <span>{{creater}}</span>
		      </div>
		      <div class="card__bid">状态：<span role="img" aria-label="fire">🔥</span></div>
		    </div></a>
		</div>
	</view>
</template>

<script>
	export default {
		name:"card1",
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
			go_item(event){
				var itemurl =  '../../pages/item/item?address='+this.address+"&tokenid="+this.tokenid;
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
