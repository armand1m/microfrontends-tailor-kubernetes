const path = require('path');

const buildPath = path.resolve(process.cwd(), "../../build/client");

module.exports = {
  devtool: "source-map",
  entry: "./index.ts",
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  output: {
    filename: "bundle.js",
    // libraryTarget: "amd",
    path: buildPath,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
};
