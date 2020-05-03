module.exports = {
  // 1
  entry: "./server/index.js",
  // 2
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
  },
  // 3
  devServer: {
    contentBase: "./dist",
  },
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty",
    dns: "empty",
  },
};
