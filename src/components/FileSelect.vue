<!--
 * @Author: OOO--li--OOO
 * @LastEditTime: 2022-04-09 21:59:20
-->
<!--
 * @Author: OOO--li--OOO
 * @LastEditTime: 2022-04-07 21:15:58
-->
<script setup>
import { ref, defineEmits, reactive  } from 'vue'
const emit = defineEmits(['selected'])

function NftFile() {
  return {
    count: 1,
    name: "",
    type: "",
    dataURL: "",
  }
}
const props = defineProps({
  files: Array
})
// props.files = []
console.log(props)
// let files = reactive(new Array())

function selectFile() {
  return new Promise((resolve, reject) => {
      let input = document.createElement('input');
      input.value = '选择文件';
      input.type = 'file';
      input.onchange = event => {
          let file = event.target.files[0];
          let file_reader = new FileReader();
          file_reader.onload = () => {
              let fc = file_reader.result;
              file.fc = fc
              resolve(file); // 返回文件文本内容到Promise
          };
          file_reader.readAsDataURL(file)
      };
      input.click();
    });
}
async function onClick(){
  selectFile().then((file) => {
    // console.log(file)
    let nftFile = new NftFile()
    nftFile.name = file.name
    nftFile.type = file.type
    nftFile.dataURL = file.fc
    // console
    props.files.push(nftFile);
    
    emit("selected",props.files)
    // console.log(files.value)
  })
  
}
</script>

<template>
  <div class="border-dashed border-4 box-content w-full rounded-md">
    <div class="container box-content bg-gray-100 min-h-[4rem] max-h-full w-6/6 flex flex-row flex-wrap ">
      <div class="border-dashed border-4 border-gray-300 w-40 h-40 bg-gray-400 bg-opacity-0 flex flex-col-reverse m-3 rounded-xl text-center" v-for="(file,index) in files" :key="index">
        <img :src="file.dataURL" class=" absolute w-40 h-40 object-scale-down z-0  rounded-xl"/>
        <!-- <div class="z-10">{{file.Count}}</div> -->
        
        <input type="text" class=" items-center text-center z-10  rounded-md opacity-80 bg-indigo-200 overflow-hidden font-bold p-0" v-model="file.count">
      </div>

    </div>
    <div class="btn" @click="onClick">
      添加
    </div>
  </div>

  

</template>

<script>
export default {
  methods: {
    
  }
}

</script>

<style scoped>

</style>