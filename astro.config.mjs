import { defineConfig } from "astro/config";

const site = process.env.PUBLIC_DEMO_SITE_URL ?? "https://simay-sarikaya-demo.pages.dev";

export default defineConfig({
  output: "static",
  site,
  trailingSlash: "always"
});
