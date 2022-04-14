<template>
	<view class="body">
		<view class="outer">
			<el-header>
				<all-header></all-header>
			</el-header>
			<view class="outer__inner my_inner">
				<div class="img1 w-full h-[100vh] cover bg-no-repeat bg-cover bg-left sm:bg-left md:bg-center md:h-[100vh] "
					mode="aspecFill" style="background-image: url(/static/img/content/index_bg.png)"
					@error="imageError">


				</div>

				<div class="main__head">
					<h3 class="main__title h3">数字艺术品的黄金海岸</h3>
					<div class="main__stage">在3D画廊中身临其境地观赏数字艺术品</div>
					<a class="button-stroke main__button" href="http://124.222.242.75:88/"> 即刻探索 </a>
				</div>

				<image style="width: 100%; height: 100vh; background-color: #eeeeee;" mode="widthFix"
					src="/static/img/content/index_bg_2.png" @error="imageError">
				</image>
				<a class="button-stroke my_button" href="http://124.222.242.75:88/"> 体验画廊 </a>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageError: false
			}
		},
		methods: {
			go_search(event) {
				uni.navigateTo({
					url: '../../pages/search/search'
				});
			}
		},
		mounted() {
			console.log("index")
		}
	}
</script>

<style scoped>
	@import url("@/common/css/app.min.css");

	@media (min-width: 340px) {
		.img1 {
			background-position: -200px 0px;
		}
	}

	@media (min-width: 540px) {
		.img1 {
			background-position: -50px 0px;
		}
	}

	@media (min-width: 640px) {
		.img1 {
			background-position: 0px 0px;
		}
	}

	@media (min-width: 768px) {
		.img1 {
			background-position: 0px 0px;
		}
	}

	.main__head {
		position: absolute;
		transform: translate(0vw, 12vh);
		width: 100%;

		top: 0;
		/* right:0rem; */
		z-index: 11;
		@apply text-gray-600 text-center sm: translate-y-[12vh] sm:right-[-5rem] sm:text-gray-600 md:translate-y-[50vh] md:translate-x-[-13vw] md:text-gray-700
	}

	.my_button {

		transform: translate(58vw, -19vh);
		z-index: 22;
	}
</style>
