const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./build"
  },
  plugins: [new CopyPlugin([{ from: "public" }])]
});
