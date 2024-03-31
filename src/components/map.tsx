import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api"

export default function Map({ location }: { location: { lat: number; lon: number } | undefined }) {
	const igr = { lat: -25.618745, lng: -54.57684 }

	const { isLoaded } = useLoadScript({
		googleMapsApiKey: import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY,
	})

	const containerStyle = {
		width: "100%",
		height: "400px",
		borderRadius: "6px",
	}

	const marker =
		location?.lat && location?.lon
			? { lat: Number(location.lat.toFixed(6)), lng: Number(location.lon.toFixed(6)) }
			: igr

	if (!isLoaded) return <div>Loading...</div>

	return (
		<>
			<GoogleMap zoom={14} center={marker} mapContainerStyle={containerStyle}>
				{location?.lat && location?.lon && (
					<Marker
						position={{
							lat: location.lat,
							lng: location.lon,
						}}
					/>
				)}
			</GoogleMap>
		</>
	)
}
