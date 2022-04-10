<!--
 * @Author: OOO--li--OOO
 * @LastEditTime: 2022-04-10 21:48:11
-->
<script setup>
import { ref, defineEmits, reactive, watch, getCurrentInstance  } from 'vue'
import Event from "../utils/Event.js"
const emit = defineEmits(['selected'])
  let { proxy } = getCurrentInstance();
function NftFile() {
  return {
    count: 1,
    name: "",
    type: "",
    dataURL: "",
    load: false
  }
}
const props = defineProps({
  files: Array
})
// props.files = []
console.log(props)
// let files = reactive(new Array())

function selectFile() {
  let e = new Event()
  let input = document.createElement('input');
  input.value = '选择文件';
  input.type = 'file';
  // console.log(e.emit)
  input.onchange = event => {
      let file = event.target.files[0];
      let file_reader = new FileReader();

      

      file_reader.onload = () => {
          let fc = file_reader.result;
          file.fc = fc
          e.emit("readed",file)
          // file.i = i
          // resolve(file); // 返回文件文本内容到Promise
      };
      
      e.emit("selected")
      file_reader.readAsDataURL(file)
  };
  input.click();
  return e
  // return new Promise((resolve, reject) => {
  //     let input = document.createElement('input');
  //     input.value = '选择文件';
  //     input.type = 'file';
  //     input.onchange = event => {
  //         let file = event.target.files[0];
  //         let file_reader = new FileReader();

          

  //         file_reader.onload = () => {
  //             let fc = file_reader.result;
  //             file.fc = fc
  //             file.i = i
  //             resolve(file); // 返回文件文本内容到Promise
  //         };
  //         emit("selected")
  //         file_reader.readAsDataURL(file)
  //     };
  //     input.click();
  //   });
}
async function onClick(){
  
  let i = props.files.length-1
  selectFile().on("selected",()=>{
    // console.log("selected")
      let nftFile = new NftFile()
      props.files.push(nftFile);
      i = props.files.length-1
  }).on("readed",(file)=>{
    // console.log("readed",props.files[i],file)
    props.files[i].name = file.name
    props.files[i].type = file.type
    props.files[i].dataURL = file.fc
    props.files[i].load = true
  })
  // selectFile().then((file) => {
  //   // console.log(file)
  //   // let nftFile = new NftFile()
  //   // nftFile.name = file.name
  //   // nftFile.type = file.type
  //   // nftFile.dataURL = file.fc
  //   // nftFile.load = true
  //   // console
  //   // props.files.push(nftFile);
    
  //   emit("selected",props.files)
  //   // console.log(files.value)
  // })

}
function fixCount(e, i) {
  console.log("change",e,i,Number.parseInt(props.files[i].count))
  // props.files[i].count='1'
  if (Number.parseInt(props.files[i].count)>=20) {
    // return false
    // props.files[i]
    // proxy.$refs.countInput[i].modelValue='20'
    console.log(proxy.$refs.countInput[i])
    // props.files[i].count='20'
    // proxy.$refs.countInput[i].disabled=true
    setTimeout(() => {
      props.files[i].count='20'
      alert("too big!!")
    }, 1);
    console.log("--change",i, props.files[i])
  }
}
</script>

<template>
  <div class="box-content w-full rounded-md">

    <div class="rounded-xl border-dashed border-gray-500 border-4 container box-border bg-gray-100 bg-opacity-50 min-h-[4rem] max-h-full flex flex-row flex-wrap">
      <div class="border-dashed border-4 border-gray-400 w-40 h-40 bg-gray-400 bg-opacity-0 flex flex-row-reverse m-3 rounded-xl text-center" v-for="(file,index) in files" :key="index" v-loading="!file.load">
        <img v-show="file.load" :src="file.dataURL" class=" absolute w-40 h-40 object-scale-down z-0  rounded-xl"/>
        <!-- <div class="z-10">{{file.Count}}</div> -->
        
        <input type="text" class=" inline-block w-8 justify-self-end 
        hover:w-full hover:bg-opacity-80 hover:h-9 hover:text-2xl
         transition-all duration-300
         
          backdrop-filter backdrop-blur-2xl backdrop-saturate-10
         bg-white bg-opacity-40
         items-center text-center z-10 rounded-md opacity-80overflow-hidden font-bold p-0 " v-model="file.count" @input="fixCount($event,index)" ref="countInput" />
         <!-- <div 
          contenteditable="true" 
          class=" flex-grow-0 flex-shrink z-10 float-right inline-block"
          >1</div> -->
      </div>

    </div>
    <div class="btn w-full pl-0 pr-0 box-content" @click="onClick">
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