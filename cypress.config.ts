import { defineConfig } from "cypress";

export default defineConfig({
  video: true,
  screenshotOnRunFailure: true,
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.spec.ts",
    supportFile: "cypress/support/e2e.ts",
    defaultCommandTimeout: 8000,
    retries: { runMode: 2, openMode: 0 },
  },
});
