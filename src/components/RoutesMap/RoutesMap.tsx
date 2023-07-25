
import { MapContainer, Marker, Polyline, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import { useEffect, useRef, useState } from 'react'
import { LatLngTuple, Map } from 'leaflet'
import polyline from '@mapbox/polyline'
import 'leaflet/dist/leaflet.css' // for leaflet work
import './RoutesMap.css'
import { useAppSelector } from '../../hooks/redux'
import { redIcon, blackIcon } from '../../constants/icons'

//* Display map with routes
export function RoutesMap() {
    const { selectedRoute, geometries, isLoading, error } = useAppSelector((state) => state.route)
    const [locations, setLocations] = useState<LatLngTuple[]>([]) // route locations [lat, lng]
    const mapRef = useRef<Map>(null)

    // fit the entire route on the map (center and zoom)
    useEffect(() => {
        if (locations.length > 0 && mapRef.current) {
            const bounds = L.latLngBounds(locations)
            mapRef.current.fitBounds(bounds)
        }
    }, [locations])

    useEffect(() => {
        getRouteLocations()
    }, [geometries])

    async function getRouteLocations() {
        if (selectedRoute.length !== 0) {
            // decode polyline code
            const res = polyline.decode(geometries)
            setLocations(res)
        }
    }


    return (
        <>
            <MapContainer center={[59.83567701, 30.38064206]} zoom={11} ref={mapRef}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {isLoading && <h1 className='message'>Загрузка...</h1>}
                {error && <h1 className='message'>{error}</h1>}
                {locations.length !== 0 &&
                    <>
                        <Polyline positions={locations}
                            weight={5} color='blue' opacity={0.5} />
                        {selectedRoute.map((location, key) =>
                            <Marker key={key} position={location}
                                icon={(key === 0 || key === selectedRoute.length - 1) ? redIcon : blackIcon} />
                        )}
                    </>
                }
            </MapContainer >
        </>
    )
}
