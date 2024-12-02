import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./index.ts"],
  dts: {
    transformer: "oxc",
  },
  clean: true,
  inputOptions: {
    watch: {
      exclude: [".jj"],
    },
  },
});
