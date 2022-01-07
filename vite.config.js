import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
    plugins: [
      react()
    ],
    resolve:{
        alias:{
        "@c": __dirname + "/src/components",
        "@a": __dirname + "/src/assets",
        "@s": __dirname + "/src/styles",
        }
    }
})