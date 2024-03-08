import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import react from "@astrojs/react"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		react({
			include: ["**/react/*"],
			experimentalReactChildren: true,
		}),
	],
	adapter: vercel({
		webAnalytics: { enabled: true },
	}),
	build: {
		inlineStylesheets: "always",
	},
	output: "hybrid",
	vite: {
		build: {
			cssMinify: "lightningcss",
		},
		ssr: {
			noExternal: ["path-to-regexp"],
		},
	},
})
