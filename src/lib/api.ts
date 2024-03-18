import { contentfulClient } from "../lib/contentful"
import type { PropertyType } from "./types"

export const api = {
	getPropertyList: async () => {
		const entries = await contentfulClient.getEntries<PropertyType>({
			content_type: "property",
		})
		return entries.items.map((entry) => entry.fields)
	},
}
