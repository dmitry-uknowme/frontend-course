import path from "path";
import { Configuration } from "webpack";
import buildDevServer from "./buildDevServer";
import buildLoaders from "./buildLoaders";
import buildPlugins from "./buildPlugins";
import buildResolves from "./buildResolves";
import { BuildOptions } from "./types/config";

const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { paths, mode } = options;
  const isDev = mode === "development";
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolves(),
    plugins: buildPlugins(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};

export default buildWebpackConfig;
