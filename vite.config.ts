import path from 'path';
import { defineConfig, normalizePath } from 'vite';
import dts from 'vite-plugin-dts';
import viteEslint from 'vite-plugin-eslint';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

const root = normalizePath(path.join('src', 'index.ts'));

export default defineConfig(({ command, mode }) => {
  return {
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src')
        }
      ]
    },
    build: {
      lib: {
        entry: root,
        fileName: 'index',
        name: 'Tnui',
        formats: ['umd']
      }
    },
    plugins: [dts(), viteEslint(), vanillaExtractPlugin()]
  };
});
