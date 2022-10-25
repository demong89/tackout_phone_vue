const path = require("path");
const SpeedMeasureWebpackPlugin = require("speed-measure-webpack-plugin");
const webpack = require("webpack");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const copyWebpackPlugin = require("copy-webpack-plugin");
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");

const spm = new SpeedMeasureWebpackPlugin({
  disable: !(process.env.spm === "true"),
  outputFormat: "humanVerbose",
});

module.exports = {
  publicPath: "./",
  // parallel:true,
  configureWebpack: spm.wrap({
    cache: {
      type: "filesystem",
      cacheDirectory: path.resolve(__dirname, "./.cache"),
    },
    resolve: {
      alias: {
        src: path.resolve(__dirname, "./src"),
        assets: path.resolve(__dirname, "./src/assets"),
        components: path.resolve(__dirname, "./src/components"),
      },
    },
    plugins: [
      // new BundleAnalyzerPlugin(),
      // new webpack.DllReferencePlugin({
      //   context: __dirname,
      //   manifest: path.resolve(__dirname, "./dll/vue-manifest.json"),
      // }),
      // new AddAssetHtmlWebpackPlugin({
      //   filepath: path.resolve(__dirname, "./dll/vue.dll.js"),
      // }),
      // new copyWebpackPlugin({
      //   patterns:[{
      //     from:path.resolve(__dirname,'./dll/vue.dll.js'),
      //     to:path.resolve(__dirname,'./dist/js/vue/dll.js')
      //   }]
      // })
    ],
    module: {
      rules: [
        // {
        //   test:/\.js$/,
        //   exclude:/node_modules/,
        //   use:[{
        //     loader:'thread-loader',
        //     options:{
        //       worker:6
        //     }
        //   }]
        // }
        // {
        //   test: /\.(gif|png|jpe?g|svg)$/i,
        //   use: [
        //     "file-loader",
        //     {
        //       loader: "image-webpack-loader",
        //       options: {
        //         mozjpeg: {
        //           progressive: true,
        //         },
        //         // optipng.enabled: false will disable optipng
        //         optipng: {
        //           enabled: false,
        //         },
        //         pngquant: {
        //           quality: [0.65, 0.9],
        //           speed: 4,
        //         },
        //         gifsicle: {
        //           interlaced: false,
        //         },
        //         // the webp option will enable WEBP
        //         webp: {
        //           quality: 75,
        //         },
        //       },
        //     },
        //   ],
        // },
      ],
    },
  }),
};
