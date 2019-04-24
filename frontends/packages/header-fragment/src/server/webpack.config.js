const path = require('path');
const nodeExternals = require('webpack-node-externals');

const buildPath = path.resolve(process.cwd(), "../../build/server");

module.exports = {
  entry: "./index.ts",
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: buildPath,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
};
