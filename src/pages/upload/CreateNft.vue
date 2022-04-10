<!--
 * @Author: OOO--li--OOO
 * @LastEditTime: 2022-04-10 21:46:39
-->
<script setup>
import { ref, reactive, getCurrentInstance } from "vue";
import { nftCreateItem } from "../../utils/request.js";
// import axios from "../util/axios.js";
// import qs from "qs";
import FileSelect from "@/components/FileSelect.vue";
import FileSelectSingle from "@/components/FileSelectSingle.vue";

  let { proxy } = getCurrentInstance();
function Nft() {
  return {
    name: "",
    symbol: "",
    total: 0,
    description: "",
    price: "",
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
let uploading = ref(false)

function onSelected(_files) {
  // files = reactive(_files)
  // console.log("files",_files)
}
function onSelected2(_files) {
  // files = reactive(_files)
  // console.log("files",_files)
}

function uploadNft() {
  console.log(FileSelect);
  console.log(files);
  uploading.value = true
  nftCreateItem(nft, coverFile, files).then((res) => {
    if (res.data.code == 200) {
      proxy.$notify({
        title: "创建成功",
        message: "你已成功创建nft",
        type: "success",
      });
      uni.redirectTo({
        url: "../../pages/index/index",
      });
    }
  });
  // axios.post(
  //   "/nft/createItem",
  //   qs.stringify(
  //     {
  //       ...nft,
  //       nftFileList: files,
  //     },
  //     { arrayFormat: "indies", allowDots: true }
  //   )
  // );
}
</script>

<template>
  <view class="bg-white">
    <view class="outer bg-opacity-0">
      <!-- <el-header> -->
      <all-header class=" z-[100]"></all-header>
      <!-- </el-header> -->
      <view class="outer__inner bg-opacity-0"  v-loading="uploading">
        <div
          :style="{
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
          }"
          class="blur-3xl"
        ></div>
        <div class=" relative z-[1] pt-10 bg-white bg-opacity-80">
          <h2 class="font-bold text-2xl text-center z-[1] bg-opacity-0">
            上传NFT
          </h2>
          <div class="truncate overflow-ellipsis z-[1] bg-opacity-0">
            <div>
              {{ userPublicKey }}
            </div>
          </div>
          <div
            class="
              container
              mx-auto
              flex flex-col
              justify-center
              text-center
              justify-items-center
              w-4/6
            "
          >
            <div class="flex flex-col w-4/6 mt-5">
              <div class="float-left text-left title">封面 Cover</div>
              <FileSelectSingle @selected="onSelected2" :theFile="coverFile" />
            </div>

            <div class="flex flex-col w-full mt-5">
              <div class="float-left text-left title">Nft</div>
              <FileSelect @selected="onSelected" :files="files" />
            </div>

            <div class="flex flex-col w-4/6 mt-5">
              <div class="float-left text-left title">名称 Name</div>
              <div class="float-left text-left">
                <input
                  type="text"
                  class="border-gray-300 h-5 w-6/6 border-2"
                  v-model="nft.name"
                />
              </div>
            </div>
            <div class="flex flex-col w-4/6 mt-5">
              <div class="float-left text-left title">标志 Symbol</div>
              <div class="float-left text-left">
                <input
                  type="text"
                  class="border-gray-300 h-5 w-6/6 border-2"
                  v-model="nft.symbol"
                />
              </div>
            </div>
            <div class="flex flex-col w-4/6 mt-5">
              <div class="float-left text-left title">描述 Description</div>
              <div class="float-left text-left">
                <input
                  type="text"
                  class="border-gray-300 h-58 w-6/6 border-2"
                  v-model="nft.description"
                />
              </div>
            </div>
            <div class="flex flex-col w-4/6 mt-5">
              <div class="float-left text-left title">Price￥</div>
              <div class="float-left text-left">
                <input
                  type="text"
                  class="border-gray-300 h-5 w-6/6 border-2"
                  v-model="nft.price"
                />
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
