import { contentfulClient } from "@/lib/contentful"
import type { PropertyType } from "@/lib/types"

export const api = {
	getPropertyList: async () => {
		const entries = await contentfulClient.getEntries<PropertyType>({
			content_type: "property",
		})
		return entries.items.map((entry) => entry.fields)
	},
	getProperty: async (id: string) => {
		const entries = await contentfulClient.getEntries<PropertyType>({
			content_type: "property",
		})
		return entries.items.find((entry) => entry.fields.id === Number(id))?.fields
	},
}
