import vue from '@vitejs/plugin-vue'
const path = require('path')

/** @type {import('vite').UserConfig} */
export default {
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}
