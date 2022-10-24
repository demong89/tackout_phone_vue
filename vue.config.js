const path = require("path");
const SpeedMeasureWebpackPlugin = require("speed-measure-webpack-plugin");
const webpack  = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const copyWebpackPlugin = require('copy-webpack-plugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')

console.log('AddAssetHtmlWebpackPlugin',path.resolve(__dirname,'./dll/vue.dll.js'));

const spm = new SpeedMeasureWebpackPlugin({
  disable: !(process.env.spm === "true"),
  outputFormat: "humanVerbose",
});

module.exports = {
  publicPath:'./',
  // parallel:true,
  configureWebpack: spm.wrap({
    resolve: {
      alias: {
        src: path.resolve(__dirname, "./src"),
        assets: path.resolve(__dirname, "./src/assets"),
        components: path.resolve(__dirname, "./src/components"),
      },
    },
    plugins: [
      // new BundleAnalyzerPlugin(),
      new webpack.DllReferencePlugin({
        context:__dirname,
        manifest:path.resolve(__dirname,'./dll/vue-manifest.json')
      }),
      new AddAssetHtmlWebpackPlugin({
        filepath:path.resolve(__dirname,'./dll/vue.dll.js')
      }),
      // new copyWebpackPlugin({
      //   patterns:[{
      //     from:path.resolve(__dirname,'./dll/vue.dll.js'),
      //     to:path.resolve(__dirname,'./dist/js/vue/dll.js')
      //   }]
      // })
    ],
    module:{
      rules:[
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
      ]
    }
  }),
};
