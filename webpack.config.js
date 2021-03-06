const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    assetModuleFilename: "images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  // module: {
  //   rules: [
  //     // {
  //     //   test: /\.js$/,
  //     //   exclude: "node_modules/",
  //     // },
  //     // {
  //     //   test: /\.html$/,
  //     //   use: [
  //     //     {
  //     //       loader: "html-loader",
  //     //       options: { minimize: true },
  //     //     },
  //     //   ],
  //     // },
  //   ],
  // },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./src/index.html",
  //     filename: "index.html",
  //   }),
  // ],
};
