const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
  },
    plugins: [
      new HTMLWebpackPlugin({
          template: path.resolve(__dirname, "public", "index.html")
      })
    ],
    module: {
      rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }
    ],
  },
}
