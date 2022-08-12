const webpack = require("webpack");
const path = require("path");

/** @type {webpack.Configuration} */
const config = {
  entry: {
    main: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  }
}
module.exports = config;
