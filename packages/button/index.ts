import type { App } from 'vue'
import xd_button from './xd_button.vue'

// 使用install方法，在app.use挂载
xd_button.install = (app: App) => {
  app.component(xd_button.__name as string, xd_button)
}

export default xd_button