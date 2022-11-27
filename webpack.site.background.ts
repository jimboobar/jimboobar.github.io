import path from "path";
import { Configuration } from "webpack";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

const webpackConfig = (env: any): Configuration => ({
  entry: {
    background: "./src/site/Background/main.ts",
  },
  ...(env.production || !env.development ? {} : { devtool: "eval-source-map" }),
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
        exclude: /dist/,
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/"),
  },
});

export default webpackConfig;
