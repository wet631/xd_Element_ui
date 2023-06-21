import type { App } from 'vue'
import xd_button from './button'
import xd_radio from './radio'
import xd_checkbox from './checkbox'
// 所有组件列表
const components = [
  xd_button,
  xd_radio,
  xd_checkbox
]

// 定义 install 方法
const install = (app: App): void => {
  // 遍历注册所有组件
  components.forEach(component => app.component(component.__name as string, component))
}

export {
    xd_button,
    xd_radio,
    xd_checkbox
}

const XdElementUI = {
  install
}

export default XdElementUI
