import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // This plugin runs `vue-tsc`, `eslint` and `stylelint` for `dev` and `build` modes.
    checker({
      vueTsc: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx,vue}"',
      },

      // vite-plugin-checked requires "meow": "^9.0.0" for `stylelint`,
      // but the latest `stylelint` requires "meow": "^10.0.0". Which
      // is not compatible with previous. So for now we can't use stylelint
      // for `dev` mode via `vite-plugin-checker`

      // stylelint: {
      //   lintCommand: 'stylelint "./src/**/*.{css,less,scss,styl,stylus,vue}"',
      // },
    }),
  ],
});
