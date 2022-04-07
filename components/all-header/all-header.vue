<template>
	<el-menu class="el-menu-demo" mode="horizontal" @click="go_search">
	    <el-menu-item  index="1" style="float: left;">
		  <el-image
	      style="width: 150px; height: 45px"
	      :src="logo"
	      :fit="fit">
	      </el-image>
	    </el-menu-item>
	    <div class="container">
	      <input type="text" placeholder="搜索不一样的NFT......">
	      <div class="overlay"></div>
	    </div>
	<!--    向右靠齐，顺序是倒过来的-->
	    <el-menu-item index="8" style="float: right">
	      <el-image
	        style="width: 20px; height: 20px"
	        :src="wallet_url"
	        :fit="fit"></el-image>
	    </el-menu-item>
	    <el-menu-item index="7" style="float: right" @click="go_profile">
	      <el-image
	        style="width: 20px; height: 20px"
	        :src="my_url"
	        :fit="fit"
			v-popover:popover></el-image>
	    </el-menu-item>
		 
	    <el-menu-item index="6" style="float: right" @click="go_upload">创作</el-menu-item>
		<el-menu-item index="5" style="float: right" @click="go_search">搜索</el-menu-item>
	    <el-menu-item index="4" style="float: right" >资源</el-menu-item>
	    <el-menu-item index="3" style="float: right" @click="go_index">热门</el-menu-item>
		
		
		
		<el-popover
		    ref="popover"
		    placement="bottom"
		    title="尚未登录,请登录"
		    width="200"
		    trigger="hover"
		    content=""
			:disabled="is_login">
			<el-button @click="go_login">登录</el-button>
		</el-popover>
		
	  </el-menu>
</template>

<script>
	// eslint-disable-next-line camelcase
	import img_my from '../../static/img/header_my.png'
	// eslint-disable-next-line camelcase
	import img_wallet from '../../static/img/header_wallet.png'
	// eslint-disable-next-line camelcase
	import img_logo from '../../static/img/ArtShore.png'
	
	export default {
	  name: 'Header',
	  data () {
	    return {
	      fits: ['none'],
	      my_url: img_my,
	      wallet_url: img_wallet,
	      logo: img_logo,
		  is_login:false,
	    }
	  },
	  methods: {
		  go_upload(event){
			uni.redirectTo({
				url: '../../pages/upload/upload'
			});
		  },
		  go_search(event){
			uni.redirectTo({
				url: '../../pages/search/search'
			});
		  },
		  go_index(event){
		  	uni.redirectTo({
		  		url: '../../pages/index/index'
		  	});
		  },
		  go_profile(event){
			if(this.is_login){
				uni.redirectTo({
		  		url: '../../pages/profile/profile'
		  	   });
			}
		  },
		  go_login(event){
			uni.redirectTo({
				url: '../../pages/login/login'
			});
		  }
	  },mounted(){
		  var token = null;
		  uni.getStorage({
		  	key: 'token',
		  	success: function (res) {
		  		this.token = res.data;
				token = res.data;
		  	}
		  });
		  if(token==null||token==""){
			  this.is_login = false;
			  }else
		  {
			  this.is_login = true;
		  }
	  }
	}
</script>

<style scoped>
	
.el-menu-demo{
  font-weight: bolder;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.container{
  position: absolute;
  top: 0px;
  left: -100px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
input{
  font-size: 1rem;
  padding: 8px 1rem;
  width: 30%;
  outline: none;
  border: 1px solid rgba(172, 140, 140, 0.1);
  background: rgba(151, 164, 206, 0.05);
  border-radius: 8px;
}

.overlay {
  position: absolute;
  top: 0px;
  left: -100px;
  width: 100%;
  height: 100%;
  transition: 0.3s ease-out;
  pointer-events: none;
}
input:focus{
  box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.1);
}

</style>