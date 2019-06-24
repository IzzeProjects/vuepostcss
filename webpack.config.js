const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: process.env.NODE_ENV,
  watch: false,
  stats: 'errors-only',
  output: {
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(postcss|css)$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
