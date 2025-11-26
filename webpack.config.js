// webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: {
      // Builder bundle (Divi 5 Visual Builder)
      'divi-toc-builder': './src/builder.tsx',

      // Front-end runtime bundle
      'divi-toc-frontend': './src/frontend.ts',
    },

    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
      clean: true,
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(svg|png|jpe?g|gif|woff2?|ttf|eot)$/i,
          type: 'asset/resource',
          generator: {
            filename: '../assets/[name][ext]',
          },
        },
      ],
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: '../assets/css/divi-toc.css',
      }),
    ],

    devtool: isProd ? false : 'source-map',

    mode: isProd ? 'production' : 'development',
  };
};
