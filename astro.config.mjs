// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

const site = "https://44barranch-test.jay-t-clark.workers.dev";

function outboundLinks() {
	return (tree) => {
		/** @param {any} node */
		function visit(node) {
			const href = node.properties?.href;
			if (node.tagName === 'a' && typeof href === 'string' && /^(https?:|\/\/)/i.test(href)) {
				const destination = URL.parse(href, site);
				if (destination && destination.host !== new URL(site).host) {
					node.properties.target = '_blank';
					const value = node.properties.rel;
					const rel = Array.isArray(value) ? value : String(value ?? '').split(/\s+/).filter(Boolean);
					node.properties.rel = [...new Set([...rel.filter((item) => String(item).toLowerCase() !== 'opener'), 'noopener'])];
				}
			}
			for (const child of node.children ?? []) visit(child);
		}
		visit(tree);
	};
}

// https://astro.build/config
export default defineConfig({
	site,
	markdown: { rehypePlugins: [outboundLinks] },
	redirects: {
		"/dove-camp-2026": { destination: "/about/dove-camp-2026/", status: 301 },
	},
	integrations: [mdx(), sitemap()],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
		// Optimize images at build time. The pages are prerendered, so sharp never runs on the worker.
		imageService: "compile",
	}),
});
