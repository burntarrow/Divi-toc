const path = require('path');

module.exports = {
  entry: './src/index.js',
  externals: {
    underscore: '_',
    react: 'React',
    'react-dom': 'ReactDOM',
    jquery: 'jQuery',
    '@wordpress/hooks': ['wp', 'hooks'],
    '@wordpress/i18n': ['wp', 'i18n'],
    '@wordpress/element': ['wp', 'element'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: false,
                  targets: '> 0.25%, not dead',
                },
              ],
              '@babel/preset-react',
            ],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'build'),
  },
};
