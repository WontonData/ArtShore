<script setup>
import { ref, unref } from 'vue'
// const login = ref()
// const poplogin = ref()
</script>

<template>

  <div class="flex shadow-md">

    <!-- <div class="h-full p-10 align-middle"  id="test">
          <img class=" h-5 cover" :src="wallet_url"/>
        </div> -->
    <!-- <el-menu class="el-menu-demo" mode="horizontal"> -->
      <div class="flex-1 flex align-middle p-2 items-stretch  lg:max-w-[20rem] md:max-w-[5rem] sm:max-w-[5rem] cursor-pointer"  @click="go_index">
        <el-image class="h-12 " :src="logo" :fit="fit"> </el-image>
      </div>

    <div class="flex-1 flex align-middle p-2  items-stretch">
      <input class="w-30  self-center" type="text" placeholder="搜索不一样的NFT......" />
    </div>

    <div v-if="!is_login"  class="flex-1 flex justify-end">
      <div class="menu-item " @click="go_login">
        登录
      </div>
    </div>
    <div v-else class="flex-1 flex justify-end">  
      <div class="menu-item " @click="go_index">
        热门
      </div>
      <div class="menu-item " @click="go_upload">
        资源
      </div>
      <div class="menu-item " @click="go_search">
        搜索
      </div>
       <div class="menu-item " @click="go_upload">
        创作
      </div>
      <el-image
        class="h-8 menu-item  min-w-[3rem] sm:min-w-[2rem] lg:min-w-[4rem] max-w-[4.2rem]"
        :src="my_url"
        :fit="fit"
        ref="login"
        @click="go_profile"
      ></el-image>
      <el-image class="menu-item h-8 min-w-[3rem] sm:min-w-[2rem] lg:min-w-[4rem]  max-w-[4.2rem]" :src="wallet_url" :fit="fit"></el-image>
    </div>
		<!-- <el-popover
        ref="poplogin"
        :virtual-ref="login"
		    placement="bottom"
		    title="尚未登录,请登录"
		    width="200"
		    trigger="hover"
		    content=""
			:disabled="false">
			<el-button @click="go_login">登录</el-button>
		</el-popover> -->
  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import img_my from "../../static/img/header_my.png";
// eslint-disable-next-line camelcase
import img_wallet from "../../static/img/header_wallet.png";
// eslint-disable-next-line camelcase
import img_logo from "../../static/img/ArtShore.png";

import {getUserInfo} from "../../utils/request.js"

export default {
  name: "Header",
  data() {
    return {
      fit: "contain",
      fits: ["none"],
      my_url: img_my,
      wallet_url: img_wallet,
      logo: img_logo,
      is_login: false,
    };
  },
  methods: {
    go_upload(event) {
      uni.redirectTo({
        url: "../../pages/upload/upload",
      });
    },
    go_search(event) {
      uni.redirectTo({
        url: "../../pages/search/search",
      });
    },
    go_index(event) {
      uni.redirectTo({
        url: "../../pages/index/index",
      });
    },
    go_profile(event) {
      if (this.is_login) {
        uni.redirectTo({
          url: "../../pages/profile/profile",
        });
      }
    },
    go_login(event) {
      uni.redirectTo({
        url: "../../pages/login/login",
      });
    },
  },
  mounted() {
    var token = null;
    uni.getStorage({
      key: "token",
      success: function (res) {
        this.token = res.data;
        token = res.data;
      },
    });

    
    this.is_login = false;

      // console.log(getUserInfo)
    getUserInfo().then((res)=>{
      console.log(res)
      if (res.data.code == 200) {
        uni.setStorage({
          key: "user",
          data: res.data.data,
          success: function (res) {
            this.token = res.data;
            token = res.data;
          },
        });
        this.is_login = true;
      }
    })
    
  },
};
</script>
<style lang="scss" scoped>
// @import "tailwindcss/base";
// @import "tailwindcss/utilities";
// .test {
//   @apply flex items-center justify-center h-[100px] w-[100px] rounded-[40px] bg-[#123456] bg-opacity-[0.54] text-[#ffffff] #{!important};
// }
</style>
<style scoped>
.el-menu-demo {
  font-weight: bolder;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.container {
  position: absolute;
  top: 0px;
  left: -100px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
input {
  font-size: 1rem;
  padding: 8px 1rem;
  /* width: 30%; */
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
input:focus {
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
}
</style>