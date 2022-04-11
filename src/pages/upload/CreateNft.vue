<!--
 * @Author: OOO--li--OOO
 * @LastEditTime: 2022-04-11 15:44:27
-->
<script setup>
import { ref, reactive, getCurrentInstance } from "vue";
import { nftCreateItem, nftCreateBlindBox } from "../../utils/request.js";
// import axios from "../util/axios.js";
// import qs from "qs";
import FileSelect from "@/components/FileSelect.vue";
import FileSelectSingle from "@/components/FileSelectSingle.vue";

let { proxy } = getCurrentInstance();
const props = defineProps({
  isBlindBox: {
    type: Boolean,
    default: false,
    require: false,
  },
});
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
let pillFile = new TheFile();
let priceType = new ref(false);
let endTime = new ref('')
let uploading = ref(false);

function onSelected(_files) {
  // files = reactive(_files)
  // console.log("files",_files)
}
function onSelected2(_files) {
  // files = reactive(_files)
  // console.log("files",_files)
}

function uploadNft() {
  uploading.value = true;
  // console.log(FileSelect);
  // console.log(files);
  if (props.isBlindBox) {
    setTimeout(() => {
      nftCreateBlindBox(nft, coverFile, pillFile, files).then((res) => {
        if (res.data.code == 200) {
          proxy.$notify({
            title: "创建成功",
            message: "你已成功创建盲盒",
            type: "success",
          });
          uni.redirectTo({
            url: "../../pages/index/index",
          });
        } else {
          proxy.$notify({
            title: "创建失败",
            message: res.data.message,
            type: "error",
          });
          uni.redirectTo({
            url: "../../pages/index/index",
          });
        }
      });
    }, 100);
  } else {
    setTimeout(() => {
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
        } else {
          proxy.$notify({
            title: "创建失败",
            message: res.data.message,
            type: "error",
          });
          uni.redirectTo({
            url: "../../pages/index/index",
          });
        }
      });
    }, 100);
  }
}
</script>

<template>
  <view class="bg-white">
    <view class="outer bg-opacity-0">
      <!-- <el-header> -->
      <all-header class="z-[100]"></all-header>
      <!-- </el-header> -->
      <view class="outer__inner bg-opacity-0" v-loading="uploading">
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
        <div class="relative z-[1] pt-10 bg-white bg-opacity-80">
          <h2 class="font-bold text-2xl text-center z-[1] bg-opacity-0">
            <div v-if="isBlindBox">上传盲盒</div>
            <div v-else>上传NFT</div>
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
              <FileSelectSingle
                class="w-40"
                @selected="onSelected2"
                :theFile="coverFile"
              />
            </div>

            <div class="flex flex-col w-4/6 mt-5" v-show="isBlindBox">
              <div class="float-left text-left title">头图 pill</div>
              <FileSelectSingle class="w-96" :theFile="pillFile" />
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
              <div v-if="priceType" class="float-left text-left title">
                起拍价 Starting price ￥
              </div>

              <div v-else class="float-left text-left title">价格 Price￥</div>
              <div class="float-left text-left">
                <input
                  type="text"
                  class="border-gray-300 h-5 w-6/6 border-2"
                  v-model="nft.price"
                />
                <el-date-picker
                  v-if="priceType"
                  v-model="endTime"
                  type="datetime"
                  placeholder="选择拍卖截止时间"
                  :default-time="defaultTime"
                  size="large"
                  class="mt-1 mb-1"
                />
              </div>
              <el-switch
                v-model="priceType"
                class="mb-2 w-1/4"
                active-text="拍卖"
                inactive-text=""
                size="large"
                
              />
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
