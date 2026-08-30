import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { cpSync, existsSync } from "node:fs";
import { resolve } from "node:path";

function copyStaticAssets() {
  return {
    name: "copy-static-assets",
    closeBundle() {
      const source = resolve("assets");
      const target = resolve("dist/assets");
      if (existsSync(source)) {
        cpSync(source, target, { recursive: true, force: true });
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), copyStaticAssets()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    css: true,
  },
});
