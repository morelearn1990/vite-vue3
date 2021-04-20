import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import styleImport from 'vite-plugin-style-import';
import vitePages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@/': '/src/',
        },
    },
    plugins: [
        vue(),
        vueJsx(),
        vitePages({
            pagesDir: [
                { dir: 'src/pages/admin', baseRoute: 'admin' },
                { dir: 'src/pages/portal', baseRoute: 'portal' },
            ],
            extensions: ['vue'],
            syncIndex: false,
            replaceSquareBrackets: true,
        }),
        styleImport({
            libs: [
                {
                    libraryName: 'ant-design-vue',
                    esModule: true,
                    resolveStyle: (name) => {
                        return `ant-design-vue/es/${name}/style/index.less`;
                    },
                },
            ],
        }),
    ],
    css: {
        postcss: {
            plugins: [require('postcss-import'), require('tailwindcss'), require('autoprefixer')],
        },
        preprocessorOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#1DA57A',
                    'link-color': '#1DA57A',
                    'border-radius-base': '2px',
                },
                javascriptEnabled: true,
            },
        },
    },
    server: {
        port: 9001,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
});
