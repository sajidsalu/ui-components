import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import strip from "@rollup/plugin-strip"; // ✅ Import strip

export default {
  input: "src/components/index.tsx",
  output: [
    {
      file: "dist/index.js",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "dist/index.cjs",
      format: "cjs",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    json(), // ✅ Allows JSON import without "assert"
    strip({
      include: ["**/*.js", "**/*.tsx", "**/*.ts"],
      functions: ["use client"], // Remove 'use client'
    }),
  ],
  external: ["react", "react-dom", "@mui/material"],
};
