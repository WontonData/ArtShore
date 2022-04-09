<!--
 * @Author: OOO--li--OOO
 * @LastEditTime: 2022-04-09 22:43:50
-->
<script setup>
import { ref, reactive } from "vue";
import {nftCreateItem} from "../../utils/request.js"
// import axios from "../util/axios.js";
// import qs from "qs";
import FileSelect from "@/components/FileSelect.vue";
import FileSelectSingle from "@/components/FileSelectSingle.vue"

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
  constructor(fc,name,type, dataURL) {
    this.fc=fc,
    this.name=name,
    this.type=type,
    this.dataURL=dataURL
  }
}
let coverFile = new TheFile()
// console.log("type",typeof coverFile)
// axios
//   .get("userInfo", {})
//   .then((res) => {
//     console.log(res);
//     userPublicKey.value = res.data.data.publicKey;
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// console.log(userPublicKey)
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
  nftCreateItem(nft, coverFile, files).then((res)=>{
    if (res.data.code == 200) {
      this.$notify({
        title: "创建成功",
        message: "你已成功创建nft",
        type: "success",
      });
      uni.redirectTo({
        url: "../../pages/index/index",
      });
    }
  })
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
  <view class="body">
    <view class="outer">
      <!-- <el-header> -->
      <all-header></all-header>
      <!-- </el-header> -->
      <view class="outer__inner">
        <h2 class="text-gray-600 font-bold text-2xl text-center m-10">上传NFT</h2>
        <div class="truncate overflow-ellipsis">
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
            <div class="float-left text-left title">封面</div>
            <FileSelectSingle @selected="onSelected2" :theFile="coverFile" />
          </div>
        
          <div class="flex flex-col w-full mt-5">
            <div class="float-left text-left title">Nft</div>
            <FileSelect @selected="onSelected" :files="files" />
          </div>

          <div class="flex flex-col w-4/6 mt-5">
            <div class="float-left text-left title">名称</div>
            <div class="float-left text-left">
              <input type="text" class="border-gray-300 h-5 w-6/6 border-2" v-model="nft.name" />
            </div>
          </div>
          <div class="flex flex-col w-4/6 mt-5">
            <div class="float-left text-left title">标志</div>
            <div class="float-left text-left">
              <input
                type="text"
                class="border-gray-300 h-5 w-6/6 border-2"
                v-model="nft.symbol"
              />
            </div>
          </div>
          <div class="flex flex-col w-4/6 mt-5">
            <div class="float-left text-left title">描述</div>
            <div class="float-left text-left">
              <input
                type="text"
                class="border-gray-300 h-58 w-6/6 border-2"
                v-model="nft.description"
              />
            </div>
          </div>
          <div class="flex flex-col w-4/6 mt-5">
            <div class="float-left text-left title">Price</div>
            <div class="float-left text-left">
              <input
                type="text"
                class="border-gray-300 h-5 w-6/6 border-2"
                v-model="nft.price"
              />
            </div>
          </div>

          <button class="btn mt-8 mb-8 leading-7" @click="uploadNft">上传</button>
        </div>
      </view>
    </view>
  </view>
</template>
<script>
export default {};
</script>

<style scoped>
.title{
  @apply font-bold text-lg
}
</style>
