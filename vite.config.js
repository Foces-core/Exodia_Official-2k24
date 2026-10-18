import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // react-owl-carousel ships legacy IE CSS hacks that modern browsers ignore.
    lightningcss: { errorRecovery: true },
  },
})
