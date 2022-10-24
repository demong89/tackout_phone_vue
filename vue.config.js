const path = require("path");
const SpeedMeasureWebpackPlugin = require("speed-measure-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const spm = new SpeedMeasureWebpackPlugin({
  disable: !(process.env.spm === "true"),
  outputFormat: "humanVerbose",
});

module.exports = {
  configureWebpack: spm.wrap({
    resolve: {
      alias: {
        src: path.resolve(__dirname, "./src"),
        assets: path.resolve(__dirname, "./src/assets"),
        components: path.resolve(__dirname, "./src/components"),
      },
    },
    plugins: [new BundleAnalyzerPlugin()],
  }),
};
