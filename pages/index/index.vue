<template>
	<view class="body">
	<view class="outer">
	  <el-header>
	    <all-header></all-header>
	  </el-header>
	<view class="outer__inner my_inner">
		<image style="width: 100%; height: 100%; background-color: #eeeeee;" mode="widthFix" src="/static/img/content/index_bg.png" @error="imageError">
	    
		
		</image>
		
		<div class="main__head">
			<h3 class="main__title h3">数字艺术品的黄金海岸</h3>
			<div class="main__stage">在3D画廊中身临其境地观赏数字艺术品</div>
			<a class="button-stroke main__button"  href="http://124.222.242.75:88/"> 即刻探索 </a>
		</div>
		
		<image style="width: 100%; height: 100%; background-color: #eeeeee;" mode="widthFix" src="/static/img/content/index_bg_2.png" @error="imageError">
		</image>
		<a class="button-stroke my_button"  href="http://124.222.242.75:88/"> 体验画廊 </a>
		
	</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			go_search(event){
						uni.navigateTo({
							url: '../../pages/search/search'
						});
			}
		},
		mounted(){
		}
	}
</script>

<style scoped>
@import url("/common/css/app.min.css");
.main__head{
	position: absolute;
	transform: translate(170%,-320%);
	z-index: 11;
}
.my_button{

	transform: translate(600%,-300%);
	z-index: 22;
}

</style>
