import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 软链接
    alias: {
      '@': join(__dirname, '/src'),
    },
  },
  // 代理配置
  server: {
    proxy: {
      // 代理所有 /api 的请求
      '/api': {
        target: 'https://api.imooc-front.lgdsunday.club',
        // 跨域
        changeOrigin: true,
      },
    },
  },
})
