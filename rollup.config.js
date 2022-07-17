import path from "path";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import poscssurl from "postcss-url";
import glob from "glob";

const rootDir = "packages";

const packageFolders = glob
  .sync(`${rootDir}/package.json`, {
    ignore: `node_modules/**/*.json`,
  })
  .map((folder) => folder.replace("/package.json", ""));

const config = packageFolders.map((pkgRoot) => {
  /* eslint-disable */
  const pkg = require([".", pkgRoot, "package.json"].join("/"));
  /* eslint-enable */

  const external = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ];

  return {
    input: path.join(pkgRoot, "index.ts"),
    output: {
      dir: path.join(pkgRoot, "dist"),
      format: "cjs",
      sourcemap: true,
    },
    external,
    plugins: [
      postcss({
        plugins: [autoprefixer(), poscssurl({ url: "inline" })],
        modules: true,
        extract: true,
      }),
      typescript({
        sourceRoot: pkgRoot,
        include: ["./*.ts", `${pkgRoot}/**/*.ts+(|x)`, `${pkgRoot}/*.ts+(|x)`],
        declaration: true,
        outDir: path.join(pkgRoot, "dist"),
      }),
      json(),
    ],
  };
});

export default config;
