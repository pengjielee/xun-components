import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import svg from 'rollup-plugin-svg';
import path from 'path';
import fs from 'fs-extra';

const componentsPath = path.join(__dirname, 'src');
const distPath = path.join(__dirname, 'dist');
const esPath = path.join(__dirname, 'es');
const umdPath = path.join(__dirname, 'umd');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const plugins = [
  babel({
    exclude: 'node_modules/**',
    extensions,
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
  }),
  nodeResolve({
    browser: true,
    extensions,
  }),
  commonjs(),
  postcss({
    extract: true,
    minimize: true,
  }),
  svg(),
  terser(),
];

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  classnames: 'classNames',
};

const external = (id) => /^react|react-dom|classnames/.test(id);

const cjsOutput = {
  format: 'cjs',
  exports: 'named',
  entryFileNames: '[name]/index.js',
  dir: 'dist',
  globals,
};

const esOutput = {
  format: 'es',
  exports: 'named',
  entryFileNames: '[name]/index.js',
  dir: 'es',
  globals,
};

const umdOutput = {
  format: 'umd',
  name: 'XunComponents',
  globals,
  assetFileNames: '[name].[ext]',
};

export default (async () => {
  await fs.remove(distPath);
  await fs.remove(esPath);
  await fs.remove(umdPath);
  const files = await fs.readdir(componentsPath);

  const components = await Promise.all(
    files.map(async (name) => {
      const comPath = path.join(componentsPath, name);
      const entry = path.join(comPath, 'index.tsx');

      const stat = await fs.stat(comPath);
      if (!stat.isDirectory()) return null;

      const hasFile = await fs.pathExists(entry);
      if (!hasFile) return null;

      return { name, url: entry };
    }),
  );

  return [
    ...components
      .filter((r) => r)
      .map(({ name, url }) => ({
        input: { [name]: url },
        output: [cjsOutput, esOutput],
        external,
        plugins,
      })),
    {
      input: { index: path.join(componentsPath, 'index.tsx') },
      output: [
        {
          ...cjsOutput,
          entryFileNames: 'index.js',
        },
        {
          ...esOutput,
          entryFileNames: 'index.js',
        },
        {
          ...umdOutput,
          dir: 'umd',
          entryFileNames: 'xunui.js',
        },
      ],
      external,
      plugins,
    },
  ];
})();
