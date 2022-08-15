const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {merge} = require("webpack-merge");

module.exports = (env) => {
  console.log(env);

  const config = {
    entry: {
      index: "./src/index.ts",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Welcome",
        favicon: "src/assets/testy.gif",
      }),
    ],
    optimization: {
      runtimeChunk: "single",
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,

          type: "asset/resource",
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".png"],
    },
  };
  if (env.development) {
    return merge(config, {
      mode: "development",
      devtool: "inline-source-map",
      devServer: {
        static: "./dist",
      },
    });
  }
  if (env.production)
    return merge(config, {
      mode: "production",
      devtool: "source-map",
    });
};
