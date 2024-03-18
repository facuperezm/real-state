import type { EntryFieldTypes } from "contentful"

export interface PropertyType {
	contentTypeId: "property"
	fields: {
		id: EntryFieldTypes.Number
		localization: EntryFieldTypes.Location
		price: EntryFieldTypes.Number
		photos: EntryFieldTypes.EntryResourceLink<Photo>[]
		title: EntryFieldTypes.Text
		rooms: EntryFieldTypes.Number
		m2: EntryFieldTypes.Number
	}
}
export interface Photo {
	contentTypeId: "photo"
	fields: {
		file: {
			url: string
		}
	}
}
