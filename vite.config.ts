import { defineConfig } from 'vite'
import Sitemap from 'vite-plugin-sitemap'

import react from '@vitejs/plugin-react'
import { categoryList } from "./src/data/tempData"

const dynamicRoutes = categoryList.map(v => `/category/${v}`)

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        Sitemap({
            dynamicRoutes,
            hostname: "https://hk-good-website.vercel.app/"
        })
    ],
})
