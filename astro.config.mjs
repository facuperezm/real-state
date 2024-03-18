import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"
import { defineConfig } from "astro/config"

import node from "@astrojs/node"

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		react({
			include: ["**/react/*"],
			experimentalReactChildren: true,
		}),
	],
	adapter: node({
		mode: "standalone",
	}),
	build: {
		inlineStylesheets: "always",
	},
	output: "server",
	vite: {
		build: {
			cssMinify: "lightningcss",
		},
		ssr: {
			noExternal: ["path-to-regexp"],
		},
	},
})
