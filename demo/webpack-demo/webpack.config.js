const path = require('path');

// 如果我们更改了我们的一个入口起点的名称，甚至添加了一个新的入口，会在构建时重新命名生成的 bundle，
// 但是我们的 index.html 文件仍然引用旧的名称。让我们用 HtmlWebpackPlugin 来解决这个问题。
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    // another: './src/another-module.js',
    // index: {
    //   import: './src/index.js',
    //   dependOn: 'shared',
    // },
    // another: {
    //   import: './src/another-module.js',
    //   dependOn: 'shared',
    // },
    // shared: 'lodash',
  },
  // devtool: 'inline-source-map',// 出错时，可以准确地知道错误来自于哪个源文件。此配置仅用于示例，不要用于生产环境
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-demo',
    }),
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,// 在每次构建前清理 /dist 文件夹
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',// 如果我们要在一个 HTML 页面上使用多个入口时，还需设置 optimization.runtimeChunk: 'single'
    splitChunks: {// 使用 optimization.splitChunks 配置选项之后，现在应该可以看出，index.bundle.js 和 another.bundle.js 中已经移除了重复的依赖模块。需要注意的是，插件将 lodash 分离到单独的 chunk，并且将其从 main bundle 中移除，减轻了大小。
      // chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],// style-loader在css-loader处理完css文件后，生成一个style标签插入到html的header标签中
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};