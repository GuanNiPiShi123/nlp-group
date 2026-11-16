import { defineConfig } from "astro/config";

// GitHub Pages: set SITE_URL and BASE_PATH before building (see README).
export default defineConfig({
  output: "static",
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || "/",
  trailingSlash: "always",
  devToolbar: { enabled: false },
});
