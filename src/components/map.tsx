import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api"

interface Location {
	lat: number
	lon: number
}

interface MapProps {
	location: Location | undefined
	zoom?: number
	height?: string
}

const DEFAULT_LOCATION = {
	lat: -25.618745,
	lng: -54.57684, // IGR location
}

const DEFAULT_CONTAINER_STYLE = {
	width: "100%",
	height: "400px",
	borderRadius: "6px",
	boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
}

export default function Map({ location, zoom = 14, height = "400px" }: MapProps) {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY,
	})

	// Handle loading state
	if (!isLoaded) {
		return <div>Loading...</div>
	}

	// Handle error state
	if (loadError) {
		return (
			<div className="flex h-[400px] items-center justify-center rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
				<p>Error al cargar el mapa. Por favor, intente nuevamente más tarde.</p>
			</div>
		)
	}

	const markerPosition =
		location?.lat && location?.lon
			? {
					lat: Number(location.lat.toFixed(6)),
					lng: Number(location.lon.toFixed(6)),
				}
			: DEFAULT_LOCATION

	const containerStyle = {
		...DEFAULT_CONTAINER_STYLE,
		height,
	}

	return (
		<div className="relative">
			<GoogleMap
				zoom={zoom}
				center={markerPosition}
				mapContainerStyle={containerStyle}
				options={{
					zoomControl: true,
					streetViewControl: false,
					mapTypeControl: false,
					fullscreenControl: false,
				}}
			>
				{location?.lat && location?.lon && (
					<Marker
						position={{
							lat: location.lat,
							lng: location.lon,
						}}
					/>
				)}
			</GoogleMap>
		</div>
	)
}
