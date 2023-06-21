import type { App } from 'vue'
import xd_checkbox from './xd_checkbox.vue'

// 使用install方法，在app.use挂载
xd_checkbox.install = (app: App) => {
  app.component(xd_checkbox.__name as string, xd_checkbox)
}

export default xd_checkbox