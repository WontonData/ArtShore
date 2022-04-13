<!--
 * @Author: OOO--li--OOO
 * @LastEditTime: 2022-04-13 19:27:37
-->

<script setup>
import FileSelect from "@/components/FileSelect.vue";
import FileSelectSingle from "@/components/FileSelectSingle.vue";
import { reactive, ref, getCurrentInstance } from "vue";
import sha256 from "sha256";
import { Base64 } from "js-base64";
let { proxy } = getCurrentInstance();
function strToBinary(str) {
  var result = [];

  var list = str.split("");

  for (var i = 0; i < list.length; i++) {
    if (i != 0) {
      result.push(" ");
    }

    var item = list[i];
    var binaryStr = item.charCodeAt().toString(2);
    result.push(binaryStr);
  }
  return result.join("");
}
class Meta {
  constructor(address, name, url, token_id) {
    this.address = address;
    this.name = name;
    this.url = url;
    this.token_id = token_id;
  }
  copy(_Meta) {
    this.address = _Meta.address;
    this.name = _Meta.name;
    this.url = _Meta.url;
    this.token_id = _Meta.token_id;
  }
}
let MetaMap = {
  e54e2c68f62d994fefdfa4f4c15bd71efdadcf083a082489c2d9ef5428148b13: new Meta(
    "0x0af57b4cc1879b4de0bf73a90c3169d7af64424c",
    "Chess",
    "https://nft-1306406918.cos.ap-shanghai.myqcloud.com/0x1d55229981f8867346c5f13df45cb3cb869f2ad8/1",
    1
  ),
  "4c4251d49af4fef85d73e0ca3477e9f1ebab22dafb3e2b9ad61f448f07b7ff09": new Meta(
    "0xea2a839c5457a75177f1b204f2886a86977b6ace",
    "HAPPY EARTH DAY",
    "https://nft-1306406918.cos.ap-shanghai.myqcloud.com/0xea2a839c5457a75177f1b204f2886a86977b6ace/1",
    1
  ),
  "273ae9a0cc5ef0ddc0ab9de8d4d8d6163fdf709fb011d784c0af600581c936e4": new Meta(
    "0xea2a839c5457a75177f1b204f2886a86977b6ace",
    "HAPPY EARTH DAY",
    "https://nft-1306406918.cos.ap-shanghai.myqcloud.com/0xea2a839c5457a75177f1b204f2886a86977b6ace/2",
    2
  ),
  "96d5dc7116492bdcb729305b0f90caf9ff22313ee553feafa9cd2b7e7fc51bcd": new Meta(
    "0xea2a839c5457a75177f1b204f2886a86977b6ace",
    "HAPPY EARTH DAY",
    "https://nft-1306406918.cos.ap-shanghai.myqcloud.com/0xea2a839c5457a75177f1b204f2886a86977b6ace/3",
    3
  ),
  "2f6dbc5469b61be4e9bfb4a935bab638318a810a239bedcc8dcb36332d461199": new Meta(
    "0xea2a839c5457a75177f1b204f2886a86977b6ace",
    "HAPPY EARTH DAY",
    "https://nft-1306406918.cos.ap-shanghai.myqcloud.com/0xea2a839c5457a75177f1b204f2886a86977b6ace/4",
    4
  ),
  "688a022525416de07992f63d2d804028eb2493ee1998760f21c242a203a060d7": new Meta(
    "0x8335032c7ed87405a1d448a0917961cfeea71bdb",
    "HAPPY EARTH DAY",
    "https://nft-1306406918.cos.ap-shanghai.myqcloud.com/0x8335032c7ed87405a1d448a0917961cfeea71bdb/1",
    1
  ),
  "2997af34d05a3921333d9609fcd7f220a3ecf61222c6962814fa481e12d15441": new Meta(
    "0x8335032c7ed87405a1d448a0917961cfeea71bdb",
    "HAPPY EARTH DAY",
    "https://nft-1306406918.cos.ap-shanghai.myqcloud.com/0x8335032c7ed87405a1d448a0917961cfeea71bdb/2",
    2
  ),
  "b56f2dbade765e065631d0c8d38e6f16d92ec6fa658718af6c2d5ac36a511638": new Meta(
    "0x8335032c7ed87405a1d448a0917961cfeea71bdb",
    "HAPPY EARTH DAY",
    "https://nft-1306406918.cos.ap-shanghai.myqcloud.com/0x8335032c7ed87405a1d448a0917961cfeea71bdb/3",
    3
  ),
  "59c71ad78aa0d1b06b641b2c4816424791b77c8ed2532e92627d00d526b6dfe6": new Meta(
    "0x8335032c7ed87405a1d448a0917961cfeea71bdb",
    "HAPPY EARTH DAY",
    "https://nft-1306406918.cos.ap-shanghai.myqcloud.com/0x8335032c7ed87405a1d448a0917961cfeea71bdb/4",
    4
  ),
  "": new Meta("", "", ""),
};

let isSearch = ref(false)
let isFound = ref(false);
let foundMeta = reactive(new Meta());
let url = ref("");
let isLoading = ref(false);

console.log(sha256);
let theCheckFile = reactive({});
function checkFile() {
  isFound.value = false;
  isSearch.value = false;
  // proxy.$$nextTick(()=>{

  // })
  if (theCheckFile && theCheckFile.fc) {
    isLoading.value = true;
    setTimeout(() => {
      isLoading.value = false;
      isSearch.value = true;
    }, 2500);
    // setTimeout(() => {
    proxy.$nextTick(()=>{
      let fc = theCheckFile.fc;
      fc = fc.substring(fc.indexOf(",") + 1);
      let str = Base64.toUint8Array(fc);
      // console.log(fc, str, str2.buffer, str3.buffer);
      // console.log(fc, str, Base64.decode(fc));
      let fileSha256 = sha256(str);
      console.log(fileSha256);
      if (MetaMap[fileSha256]) {
        setTimeout(() => {
          isFound.value = true;
        }, 1800);
        url.value = theCheckFile.fc;
        let _foundMeta = MetaMap[fileSha256];
        foundMeta.copy(_foundMeta);
        console.log(foundMeta, foundMeta.url, isFound);
      }
    })
    // }, 200);
  } else {
    alert("选择文件");
  }
}
</script>
<template>
  <view class="bg-white">
    <view class="outer bg-opacity-0">
      <!-- <el-header> -->
      <all-header class="z-[100]"></all-header>
      <!-- </el-header> -->
      <view class="outer__inner bg-opacity-0">
        <div
          :style="{
            backgroundImage:
              'url(https://nft-1306406918.cos.ap-shanghai.myqcloud.com/ArtShore%2F8-Y.png)',
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
        <div class="relative h-[150vh] z-[1] pt-10 bg-white bg-opacity-80">
          <h2 class="font-bold text-2xl text-center z-[1] bg-opacity-0">
            <div>验证NFT</div>
          </h2>
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
            <div class="flex justify-center m-10 h-full" v-loading="isLoading">
              <div class="btn w-32 p-4" @click="checkFile">验证</div>
            </div>

            <div class="w-full h-full  grid sm:grid-cols-1 md:grid-cols-2 p-0 md:pl-5 md:pr-5">
              <div class="flex justify-center">
                <FileSelectSingle class=" w-40 sm:w-40 md:w-40 mt-1 md:mt-28" :theFile="theCheckFile" />
              </div>
              <div
                class="
                  flex
                  flex-col
                  min-h-[25rem]
                  justify-center
                  content-center
                  justify-items-center
                  items-center
                  border-2 border-solid
                  rounded-lg
                  p-1
                  md:p-10
                  bg-gray-100 bg-opacity-50
                "
                v-loading="isLoading"
              >
              <div v-show="isFound" class=" font-bold text-red-500 m-2">找到相同的NFT，您不可再次上传</div>
              <div v-show="!isFound && isSearch" class=" font-bold text-green-500">未找到相关NFT，您可上传此图片作为NFT</div>
              <div v-show="!isSearch">选择图片来进行识别</div>
                <card1
                  class="
                    card1
                    p-3
                    w-56
                    shadow-xl
                    rounded-xl
                    border-2 border-solid
                  "
                  v-if="isFound"
                  :title="foundMeta.name"
                  price="9.99"
                  creater="xxx"
                  :tokenid="foundMeta.token_id"
                  :art_id="foundMeta.token_id"
                  :address="foundMeta.address"
                  :art_src="foundMeta.url"
                ></card1>
              </div>
            </div>
          </div>
        </div>
      </view>
    </view>
  </view>
</template>



<style>
</style>