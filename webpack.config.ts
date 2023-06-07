import path from "path";
import webpack from "webpack";
import buildPlugins from "./config/build/buildPlugins";
import buildResolves from "./config/build/buildResolves";
import buildWebpackConfig from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildMode, BuildPaths } from "./config/build/types/config";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode: BuildMode = (process.env.MODE as BuildMode) ?? "development";
const port: number = process.env.PORT
  ? parseInt(process.env.PORT as string)
  : 3000;
const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths,
  port,
});
// return config;

export default config;
