import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), dts({
    rollupTypes: true,
    tsconfigPath: "./tsconfig.build.json",
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'dlx-components',
      formats: ['es'],
      fileName: (format) => `dlx-components.${format}.js`
    },
    rollupOptions: {
      external: [
        "react", 
        "react-dom",
        "lucide-react"
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'        
        }
      },
    },
    cssCodeSplit: false,
  }
})
