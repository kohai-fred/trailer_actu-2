const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, "src/index.js"),
    movie_detail: path.join(__dirname, "src/app/movie_detail/index.js"),
    // topbar: path.join(__dirname, "src/app/topbar/topbar.js"),
    api_key: path.join(__dirname, "src/assets/javascripts/api_key.js"),
    // modal: path.join(__dirname, "src/assets/javascripts/modal.js"),
    // burger_menu: path.join(__dirname, "src/assets/javascripts/burger_menu.js"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "./src/assets/images/*",
          to: "./src/assets/images/[name].[ext]",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "./src/index.html"),
      chunks: ["main", "api_key"],
    }),
    new HtmlWebpackPlugin({
      filename: "movie_detail.html",
      template: path.join(
        __dirname,
        "./src/app/movie_detail/movie_detail.html"
      ),
      chunks: ["movie_detail", "api_key"],
    }),
    // new HtmlWebpackPlugin({
    //   filename: "topbar.html",
    //   template: path.join(__dirname, "./src/app/topbar/topbar.html"),
    //   chunks: ["topbar"],
    // }),
  ],
  stats: "minimal",
  devtool: "source-map",
  mode: "development",
  devServer: {
    open: false,
    contentBase: "./dist",
    inline: true,
    port: 4000,
  },
};
