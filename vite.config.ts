import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './src'),
      '@app': `${path.resolve(__dirname, 'src/app')}/`,
      '@pages': `${path.resolve(__dirname, 'src/pages')}/`,
      '@shared': `${path.resolve(__dirname, 'src/shared')}/`,

    }
  }
})