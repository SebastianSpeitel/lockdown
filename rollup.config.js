import vue from "rollup-plugin-vue";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";

const production = process.env.NODE_ENV === "production";

export default {
  input: "./src/main.ts",
  output: {
    file: "./build/bundle.js",
    format: "esm",
    sourcemap: !production
  },
  plugins: [
    vue(),
    resolve(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        production ? "production" : "development"
      )
    }),
    production &&
      terser({
        ecma: 2020,
        toplevel: true,
        compress: {
          passes: 2,
          booleans_as_integers: true
        },
        keep_classnames: false,
        keep_fnames: false
      })
  ]
};
