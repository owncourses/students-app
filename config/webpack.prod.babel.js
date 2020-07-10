// Important modules this config uses
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const CopyPlugin = require("copy-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const WorkboxPlugin = require("workbox-webpack-plugin");
const dotenv = require("dotenv").config({
  path: path.join(process.cwd(), ".env")
});

module.exports = require("./webpack.base.babel")({
  mode: "production",
  entry: [path.join(process.cwd(), "app/app.js")],
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].chunk.js"
  },

  plugins: [
    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      templateParameters: {
        title: process.env.BRAND_HEADER_TEXT,
        favicon_url: process.env.FAVICON_URL
      },
      template: "app/index.ejs",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    new WebpackAssetsManifest({
      // Options go here
    }),
    new WebpackPwaManifest({
      name: process.env.PWA_NAME,
      short_name: process.env.PWA_SHORT_NAME,
      description: process.env.PWA_DESCRIPTION,
      start_url: "/",
      display: "standalone",
      ios: {
        "apple-mobile-web-app-title": process.env.PWA_NAME,
        "apple-mobile-web-app-status-bar-style":
          process.env.BRAND_COLORS_PRIMARY
      },
      background_color: process.env.BRAND_COLORS_PRIMARY,
      theme_color: process.env.BRAND_COLORS_PRIMARY,
      crossorigin: "use-credentials", //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.join(process.cwd(), "assets/image.png"),
          sizes: [72, 96, 128, 144, 152, 192, 384, 512], // multiple sizes
          ios: true
        }
      ]
    }),
    new WorkboxPlugin.GenerateSW({
      swDest: "service-worker.js",
      clientsClaim: true,
      skipWaiting: true
    }),
    new CopyPlugin([{ from: "app/_redirects" }])
  ],

  performance: {
    assetFilter: assetFilename =>
      !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)
  }
});
