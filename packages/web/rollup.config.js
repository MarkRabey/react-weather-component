import typescript from 'rollup-plugin-typescript2';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete';
import cleanup from 'rollup-plugin-cleanup';
import autoExternal from 'rollup-plugin-auto-external';
import svg from 'rollup-plugin-svg';

import pkg from './package.json';

const output = {
  file: pkg.main,
  format: 'cjs',
  exports: 'named',
  sourcemap: true,
};

export default {
  input: '../../src/index.tsx',
  output: [
    output,
    {
      ...output,
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    del({targets: 'lib/*'}),
    alias({
      entries: [{find: 'react-native', replacement: 'react-native-web'}],
    }),
    autoExternal(),
    typescript(),
    commonjs(),
    svg(),
    cleanup({extensions: ['js', 'ts', 'jsx', 'tsx', 'tag']}),
  ],
};
