var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  entry: './main.js',
  output: {
    path: "./",
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
    plugins: [
    HtmlWebpackPluginConfig
  ]
}
