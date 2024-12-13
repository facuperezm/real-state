import type { EntryFieldTypes } from "contentful"

/**
 * Contentful specific types
 */
export interface ContentfulAsset {
	fields: {
		file: {
			url: string
			details: {
				size: number
				image?: {
					width: number
					height: number
				}
			}
		}
		title?: string
		description?: string
	}
	sys: {
		id: string
		createdAt: string
		updatedAt: string
	}
}

export interface Photo extends ContentfulAsset {
	contentTypeId: "photo"
}

/**
 * Property related types
 */
export interface PropertyType {
	contentTypeId: "property"
	fields: {
		id: EntryFieldTypes.Number
		title: EntryFieldTypes.Text
		description: EntryFieldTypes.Text
		price: EntryFieldTypes.Number
		rooms: EntryFieldTypes.Number
		m2: EntryFieldTypes.Number
		photos: EntryFieldTypes.Array<EntryFieldTypes.EntryResourceLink<Photo>>
		localization: EntryFieldTypes.Location
		status: EntryFieldTypes.Symbol
		type: EntryFieldTypes.Symbol
		features: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
		createdAt: EntryFieldTypes.Date
		updatedAt: EntryFieldTypes.Date
	}
}

/**
 * Location related types
 */
export interface Location {
	lat: number
	lon: number
}

/**
 * API Response types
 */
export interface ApiResponse<T> {
	data: T
	status: number
	message?: string
}

export interface ApiError {
	status: number
	message: string
	code?: string
}

/**
 * Component prop types
 */
export interface PropertyCardProps {
	id: string
	title: string
	price: number
	rooms: number
	m2: number
	photos: string[]
	location?: Location
}

export interface PropertyDetailProps extends PropertyCardProps {
	description: string
	features: string[]
	status: "available" | "reserved" | "sold"
	type: "sale" | "rent"
}
