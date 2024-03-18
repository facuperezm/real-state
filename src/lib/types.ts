import type { EntryFieldTypes } from "contentful"

export interface PropertyType {
	contentTypeId: "property"
	fields: {
		id: EntryFieldTypes.Number
		localization: EntryFieldTypes.Location
		precio: EntryFieldTypes.Number
		photos: EntryFieldTypes.EntryResourceLink<Photo>[]
		title: EntryFieldTypes.Text
		habitaciones: EntryFieldTypes.Number
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
