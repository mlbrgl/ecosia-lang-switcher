const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    app: './src/app.js',
    background: './src/background.js',
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/build`,
  },
  devServer: {
    contentBase: './build',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
        // https://vue-loader.vuejs.org/guide/pre-processors.html#excluding-node-modules
        // exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
