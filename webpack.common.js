const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/app.js",
    background: "./src/background.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/build"
  },
  devServer: {
    contentBase: "./build"
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
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new CopyPlugin(
      [
        {
          from: "src/manifest.json",
          transform: function(content, path) {
            // generates the manifest file using the package.json informations
            return Buffer.from(
              JSON.stringify({
                description: process.env.npm_package_description,
                version: process.env.npm_package_version,
                ...JSON.parse(content.toString())
              })
            );
          }
        }
      ],
      { copyUnmodified: true }
    )
  ]
};
