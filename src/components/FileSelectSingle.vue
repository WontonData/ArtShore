<!--
 * @Author: OOO--li--OOO
 * @LastEditTime: 2022-04-11 15:05:02
-->
<script setup>
import { ref, toRef, defineEmits, reactive  } from 'vue'
const emit = defineEmits(['selected'])

// let f = ref("")

// String
let props = defineProps({
  theFile: Object
})
// let theFile = toRef(props, 'theFile')
let hasSelected = ref(false)
let loading = ref(false)

// props.files = []
// console.log(props)
// let files = reactive(new Array())

function selectFile() {
  return new Promise((resolve, reject) => {
      let input = document.createElement('input');
      input.value = '选择文件';
      input.type = 'file';
      input.onchange = event => {
        
          loading.value = true
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
  // hasSelected.value = false
  // props.theFile.fc = ""
    hasSelected.value = false
  selectFile().then((file) => {
    loading.value = false
    hasSelected.value = false
    props.theFile.fc=file.fc
    props.theFile.name = file.name
    props.theFile.type = file.type
    // console.log(hasSelected)
    hasSelected.value = true

    // console.log(props, props.theFile)
    emit("selected",props.theFile)
    // console.log(files.value)
  })
  
}
</script>

<template>
  <div class="border-4 box-border w-full rounded-md">
    <!-- <div class="container box-content bg-gray-100 min-h-[4rem] max-h-full w-6/6 flex flex-row flex-wrap "> -->
      <div class="border-dashed box-border border-4 border-gray-500 bg-gray-100 bg-opacity-50  w-full h-40 flex flex-col-reverse rounded-xl text-center"  v-loading="loading">
        <img v-if="hasSelected" :src="theFile.fc" class=" w-full h-40 object-scale-down z-0 rounded-xl"  @click="onClick"/>
        <!-- <div class="z-10">{{file.Count}}</div> -->
        
        <!-- <input type="text" class=" items-center text-center z-10  rounded-md opacity-80 bg-indigo-200 overflow-hidden font-bold p-0" v-model="file.count"> -->

      </div>
      <div class="btn w-full pl-0 pr-0" @click="onClick">
          选择
      </div>

    <!-- </div> -->
    
  </div>

  

</template>

<script>
class TheFile {
  constructor(fc,name,type, dataURL) {
    this.fc=fc,
    this.name=name,
    this.type=type,
    this.dataURL=dataURL
  }
}
export default {
  methods: {
    
  }
}

</script>

<style scoped>

</style>