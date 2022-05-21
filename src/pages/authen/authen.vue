<!--
 * @Author: OOO--li--OOO
 * @LastEditTime: 2022-04-14 20:25:46
-->
<script setup>
	import {
		ref,
		reactive,
		getCurrentInstance
	} from "vue";
	import {
		nftCreateItem,
		nftCreateBlindBox
	} from "../../utils/request.js";
	import FileSelectIdCard from "@/components/FileSelectIdCard.vue";

	let {
		proxy
	} = getCurrentInstance();

	const props = defineProps({});

	function Nft() {
		return {
			name: "",
			pillFile: "../../static/icon/globe.png"
		};
	}

	function NftFile() {
		return {
			dataURL: "",
			count: 1,
		};
	}
	let nft = reactive(new Nft());

	let userPublicKey = ref("");
	let files = reactive([]);
	class TheFile {
		constructor(fc, name, type, dataURL) {
			(this.fc = fc),
			(this.name = name),
			(this.type = type),
			(this.dataURL = dataURL);
		}
	}
	let coverFile = new TheFile();
	let pillFile = new TheFile();
	let priceType = new ref(false);
	let endTime = new ref("");
	let uploading = ref(false);

</script>

<template>
	<view class="bg-white">
		<view class="outer bg-opacity-0">
			<!-- <el-header> -->
			<all-header class="z-[100]"></all-header>
			<!-- </el-header> -->
			<view class="outer__inner bg-opacity-0" v-loading="uploading">
				<div :style="{
            backgroundImage:
              'url(https://nft-1306406918.cos.ap-shanghai.myqcloud.com/ArtShore/7-Y.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            position: 'fixed',
            width: '101%',
            height: '100%',
            top: 0,
            left: -10,
            zIndex: 0,
            objectFit: 'cover',
          }" class="blur-3xl"></div>
				<div class="relative z-[1] pt-10 bg-white bg-opacity-80">
					<h2 class="font-bold text-2xl text-center z-[1] bg-opacity-0">
						<div>人证核验</div>
					</h2>
					<div class="truncate overflow-ellipsis z-[1] bg-opacity-0">
						<div>
							{{ userPublicKey }}
						</div>
					</div>
					<div class="
              container
              mx-auto
              flex flex-col
              justify-center
              text-center
              justify-items-center
              w-4/6
            ">

						<div class="flex flex-col w-full mt-8">
							<div class="flex flex-row">
								<div class="w-5/12">
									<div class="w-60 float-right">
										<div class="text-center title">身份证人像面</div>
										<FileSelectIdCard class="w-60" :theFile="idc_head" default_pic="../static/img/content/idc_head.png"/>
									</div>
								</div>
								<div class="w-2/12"></div>
								<div class="w-5/12">
									<div class="w-60 float-left">
										<div class="text-center title">身份证国徽面</div>
										<FileSelectIdCard class="w-60" :theFile="idc_icon" default_pic="../static/img/content/idc_icon.png"/>
									</div>
								</div>
							</div>
						</div>

						<div class="flex flex-col w-full mt-8">
							<div class="flex flex-row">
								<div class="w-1/3">
									
								</div>
								<div class="w-1/3">
									<div class="w-full float-none">
										<div class="text-center title">手持身份证正面照</div>
										<FileSelectIdCard class="w-full" :theFile="idc_man" default_pic="../static/img/content/idc_man.png"/>
									</div>
								</div>
								<div class="w-1/3">
									
								</div>
							</div>
						</div>
						<button class="btn mt-8 mb-8 leading-7" @click="uploadNft">
							上传
						</button>
					</div>
				</div>
			</view>
		</view>
	</view>
</template>
<script>
	export default {};
</script>

<style scoped>
	.title {
		@apply font-bold text-lg;
	}
</style>
