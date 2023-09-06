import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [react(), tailwind({ applyBaseStyles: false }), sitemap()],
  server: { port: 1234, host: true },
});