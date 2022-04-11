import { createSSRApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './index.css'
import App from './App.vue'
import CreateNft from "@/pages/upload/CreateNft.vue";
export function createApp() {
  const app = createSSRApp(App)
  app.use(ElementPlus)
  app.component("CreateNft",CreateNft)
  return {
    app,
  }
}
