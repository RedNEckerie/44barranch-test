// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://44barranch-test.jay-t-clark.workers.dev",
	integrations: [mdx(), sitemap()],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
		// Optimize images at build time. The pages are prerendered, so sharp never runs on the worker.
		imageService: "compile",
	}),
});
