const CopyPlugin = require("copy-webpack-plugin");

const plugins = [
  new CopyPlugin({
    patterns: ["manifest.json"],
  }),
];

module.exports = {
  publicPath: "./",
  devServer: {
    https: true,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "src/assets/scss/main.scss";`,
      },
    },
    extract: true,
  },
  configureWebpack: {
    plugins: plugins,
  },
};
