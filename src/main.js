import { createSSRApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './index.css'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(ElementPlus)
  return {
    app,
  }
}
