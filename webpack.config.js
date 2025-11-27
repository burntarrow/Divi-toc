const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    // Divi 5 extension entry (what Divi 5 loads via divi-toc-extension.php)
    index: './src/index.ts',

    // Visual Builder bundle
    'divi-toc-builder': './src/builder.tsx',

    // Front-end TOC runtime
    'divi-toc-frontend': './src/frontend.ts',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js', // -> index.js, divi-toc-builder.js, divi-toc-frontend.js
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // 🔹 IMPORTANT: one CSS file per entry to avoid filename conflicts
      filename: '../assets/css/[name].css',
      // This will generate:
      //   assets/css/index.css
      //   assets/css/divi-toc-builder.css
      //   assets/css/divi-toc-frontend.css
    }),
  ],
};
