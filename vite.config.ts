/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    include: ["./src/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "c8",
      reporter: ["lcov", "text"],
      all: true,
      src: ["src"],
      exclude: [
        "**/*.test.{ts,tsx}",
        "**/types.ts",
        "**/*.d.ts",
        "src/main.tsx",
        "src/styles/GlobalStyle/GlobalStyle.ts",
        "src/routers/appRouter/appRouter.tsx",
        "src/store/index.ts",
        "src/routers/lazyComponents/lazyComponents.ts",
        "src/components/App/App.tsx",
      ],
    },
  },
});
