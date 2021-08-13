const path = require('path');

module.exports = {
  entry: {
    main: './src/main.ts'
  },
  devtool: 'inline-source-map',
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/'),
  },
};