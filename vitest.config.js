import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.{js,ts}"],
    exclude: ["tests/**", "node_modules/**"],
  },
});
