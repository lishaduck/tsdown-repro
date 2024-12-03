import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./index.ts"],
  dts: {
    transformer: "oxc",
    sourceMap: true,
  },
  clean: true,
});
