  // import { defineConfig } from 'vite';
  // import react from '@vitejs/plugin-react';

  // // https://vitejs.dev/config/
  // export default defineConfig({
  //   plugins: [react()],
  //   optimizeDeps: {
  //     exclude: ['lucide-react'],
  //   },
  // });
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/week-8-capstone_-Smartttechlady/',   // 👈 add this line
})

