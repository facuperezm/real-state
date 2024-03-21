import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"
import vercel from "@astrojs/vercel/serverless"
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
	adapter: vercel(),
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
