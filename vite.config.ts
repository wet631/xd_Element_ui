import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'images': fileURLToPath(new URL('./src/assets/images', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: { // 或者globalVars
          themeColor: '#1677FF' // #1890FF
        },
        javascriptEnabled: true
      },
    },
  },
  build: {
    lib: { // 构建为库。如果指定了 build.lib，build.cssCodeSplit 会默认为 false。
      // __dirname的值是vite.config.ts文件所在目录
      entry: resolve(__dirname, 'packages/index.ts'),  // entry是必需的，因为库不能使用HTML作为入口。
      name: 'XdElementUI', // 暴露的全局变量
      fileName: 'xd-element-ui' // 输出的包文件名，默认是package.json的name选项
    },
    rollupOptions: { // 自定义底层的Rollup打包配置
      // https://rollupjs.org/configuration-options/
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'swiper', '@vuepic/vue-datepicker', 'qrcode'],
      output: {
        // format: 'es', // 默认es，可选 'amd' 'cjs' 'es' 'iife' 'umd' 'system'
        exports: 'named', // https://rollupjs.org/configuration-options/#output-exports
      //   // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          // 'vue-router': 'VueRouter', // 引入vue-router全局变量，否则router.push将无法使用
          swiper: 'Swiper',
          '@vuepic/vue-datepicker': 'VueDatePicker',
          qrcode: 'qrcode'
        }
      }
    },
    minify: 'terser', 
    terserOptions: { // 在打包代码时移除 console、debugger 和 注释
      compress: {
        drop_console: true, // 生产环境时移除console
        drop_debugger: true
      },
      format: {
        comments: false // 删除注释comments
      }
    }
  }
})
