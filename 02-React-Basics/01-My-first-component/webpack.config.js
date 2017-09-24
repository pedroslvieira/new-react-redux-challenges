const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./lib/01_article.js"),
  output: {
    filename: "dist/bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  devtool: "sourcemap"
};
