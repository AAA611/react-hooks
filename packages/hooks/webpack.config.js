const merge = require("webpack-merge").default;
const common = require("../../webpack.common.js");
const path = require("path");

const commonConfig = merge(common, {
  entry: "./src/index",
  output: {
    filename: "react-hooks.js",
    library: {
      type: "module",
    },
    path: path.resolve(__dirname, "./dist"),
  },
  devtool:false,
  resolve: {
    extensions: [".ts", ".js"],
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
});

module.exports = () => {
  const buildEnv = process.env.BUILD_ENV;

  const isESM = buildEnv === "esm";

  console.log(isESM);

  const dynamicConfig = {
    mode:'development',
    output: {
      filename: `react-hooks.${buildEnv}.js`,
      path: path.resolve(__dirname, "./dist"),
      library: {
        type: isESM ? "module" : "commonjs2",
      },
    },
    experiments: {
      outputModule: isESM,
    },
  };

  return {
    ...commonConfig,
    ...dynamicConfig,
  };
};
