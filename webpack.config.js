const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyPlugin = require("copy-webpack-plugin");

const buildPath = path.resolve(__dirname, "build");

module.exports = {
  mode: "none",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: buildPath
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js?$/,
        loader: "babel-loader",
        options: {
          presets: ["env"]
        },
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file)
      }
    ]
  },
  plugins: [new VueLoaderPlugin(), new CopyPlugin([{ from: "public", to: buildPath }])]
};
