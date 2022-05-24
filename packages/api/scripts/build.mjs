import * as esbuild from "esbuild";
import { globPlugin } from "esbuild-plugin-glob";

esbuild.build({
  entryPoints: ["src/**/*.mts"],
  outdir: "dist",
  bundle: true,
  platform: "node",
  target: "node16",
  format: "esm",
  minify: true,
  plugins: [globPlugin()],
  outExtension: {
    ".js": ".mjs",
  },
});
