import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import WindiCSS from 'vite-plugin-windicss';
import styleImport from 'vite-plugin-style-import';
import vitePages from 'vite-plugin-pages';
import vueI18n from '@intlify/vite-plugin-vue-i18n';

// https://vitejs.dev/config/
export default defineConfig(({}) => ({
  resolve: { alias: { '@/': '/src/' } },
  plugins: [
    WindiCSS(),
    vitePages({
      pagesDir: 'src/views',
      extensions: ['vue'],
      syncIndex: false,
      replaceSquareBrackets: true,
    }),
    vueI18n({
      include: path.resolve(__dirname, './path/to/src/locales/**'),
    }),
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => `ant-design-vue/es/${name}/style/index.less`,
        },
      ],
    }),
    vueJsx(),
    vue(),
  ],
  build: { target: 'es2015' },
  css: {
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
}));
