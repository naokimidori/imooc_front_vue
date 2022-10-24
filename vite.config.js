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
      // 代理所有 /v1 的请求
      '/v1': {
        target: 'https://api.pexels.com',
        // 跨域
        changeOrigin: true,
      },
    },
  },
})
