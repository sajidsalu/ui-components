import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import strip from "@rollup/plugin-strip"; // ✅ Import strip
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      // {
      //   file: packageJson.module,
      //   format: "esm",
      //   sourcemap: true,
      //   exports: "named",
      // },
      // {
      //   file: packageJson.main,
      //   format: "cjs",
      //   sourcemap: true,
      //   exports: "named",
      // },
      {
        file: "dist/index.js",
        format: "esm", // use esm only
        sourcemap: true,
      },
    ],
    plugins: [
      PeerDepsExternalPlugin(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
    external: ["react", "react-dom", "@mui/material"],
  },
  {
    input: "src/index.ts",
    output: [{ file: packageJson.types, format: "es" }],
    plugins: [dts.default()],
  },
];
