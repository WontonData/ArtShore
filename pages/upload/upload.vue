<template>
	<view class="body">
	<view class="outer">
	  <el-header>
	    <all-header></all-header>
	  </el-header>
	  <view class="outer__inner">
		  
		        <div class="section-pt80 variants">
		          <div class="variants__center center">
		            <div class="variants__top">
		              <h1 class="variants__title h2">上传NFT</h1>
		              <div class="variants__info">
						 如果你的NFT只有单张图片，请选择 <span>“创建普通NFT”</span>
						 如果你的NFT是一个系列或合集，请选择<span>“创建主题NFT”</span>
						 如果你想创建NFT盲盒，请选择<span>“创建NFT盲盒”</span></div>
		            </div>
		            <div class="variants__list">
						
		              <div class="variants__item">
		                <div class="variants__preview"><img srcSet="/static/img/content/upload-pic-1@2x.jpg 2x" src="/static/img/content/upload-pic-1.jpg" alt="Upload"></div><a class="button-stroke variants__button" href="upload-details.html">创建单个</a>
		              </div>
		              <div class="variants__item">
		                <div class="variants__preview"><img srcSet="/static/img/content/upload-pic-2@2x.jpg 2x" src="/static/img/content/upload-pic-2.jpg" alt="Upload"></div><a class="button-stroke variants__button" href="upload-details-multiple.html">创建集合</a>
		              </div>
					  
		            </div>
					<div class="variants__list list2">
						
					  <div class="variants__item item2">
					    <div class="variants__preview"><img srcSet="/static/img/content/upload_pic3_2x.png 2x" src="/static/img/content/upload_pic3.png" alt="Upload"></div><a class="button-stroke variants__button" href="upload-details.html">创建盲盒</a>
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	@import url("/common/css/app.min.css");
	.list2{
		text-align:center;
	}
	.item2{
		margin:0 auto
	}
</style>
