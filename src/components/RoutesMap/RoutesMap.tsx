
import { MapContainer, Marker, Polyline, TileLayer } from 'react-leaflet'
import { useEffect, useState } from 'react'
import { LatLngTuple } from 'leaflet'
import polyline from '@mapbox/polyline'
import 'leaflet/dist/leaflet.css' // for leaflet work
import './RoutesMap.css'
import { useAppSelector } from '../../hooks/redux'

//* display map with routes
export function RoutesMap() {
    const { selectedRoute, geometries } = useAppSelector((state) => state.route)
    const [locations, setLocations] = useState<LatLngTuple[]>([])

    useEffect(() => {
        if (selectedRoute.length !== 0) {
            getPolyline()
        }
    }, [geometries])

    async function getPolyline() {
        const res = polyline.decode(geometries)
        setLocations(res)
    }


    return (
        <>
            {/* TODO fix zoom and center on select */}
            <MapContainer center={[59.83567701, 30.38064206]} zoom={13} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locations.length !== 0
                    ?
                    <>
                        <Polyline positions={locations}
                            weight={5} color='blue' opacity={0.5} />
                        {/* TODO add numbers or icons to identify points order */}
                        {selectedRoute.map((location, key) =>
                            <Marker key={key} position={location}>
                            </Marker>
                        )}
                    </>
                    :
                    <h1>Error</h1>
                }
            </MapContainer>
        </>
    )
}
