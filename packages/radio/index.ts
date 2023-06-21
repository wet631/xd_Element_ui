import type { App } from 'vue'
import xd_radio from './xd_radio.vue'

// 使用install方法，在app.use挂载
xd_radio.install = (app: App): void => {
  app.component(xd_radio.__name as string, xd_radio)
}

export default xd_radio