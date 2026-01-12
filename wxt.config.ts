import path from "path"
import { defineConfig } from 'wxt';
import tailwindcss from "@tailwindcss/vite"
import tsconfigPaths from "vite-tsconfig-paths";

// See https://wxt.dev/api/config.html
export default defineConfig({
    srcDir: './src',
    modules: ['@wxt-dev/module-react'],

    vite: () => ({
        plugins: [
            tailwindcss(),
            tsconfigPaths()
        ],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
    })
});