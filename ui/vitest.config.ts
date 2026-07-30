import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

const repoRoot = path.resolve(__dirname, "..");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    // The api tests live outside this package's root, which Vite blocks by default.
    fs: { allow: [repoRoot] },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    // This is the repo's only test runner. The serverless handlers in ../api are
    // dependency-free TypeScript, so their tests run here rather than standing
    // up a second toolchain at the repo root.
    include: ["src/**/*.test.{ts,tsx}", "../api/**/*.test.ts"],
  },
});
