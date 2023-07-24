
import { MapContainer, Marker, Polyline, TileLayer } from 'react-leaflet'
import { useEffect, useState } from 'react'
import { LatLngTuple } from 'leaflet'
import polyline from '@mapbox/polyline'
import { GetRoute } from '../../service/osrmApi'
import 'leaflet/dist/leaflet.css' // for leaflet work
import './RoutesMap.css'

//* display map with routes
export function RoutesMap() {

    const mar1: LatLngTuple[] = [
        [59.84660399, 30.29496392],
        [59.82934196, 30.42423701],
        [59.83567701, 30.38064206],
    ]

    const mar2 = [
        [59.82934196, 31.42423701],
        [59.82761295, 31.41705607],
        [59.84660399, 31.29496392],
    ]

    const mar3 = [
        [59.83567701, 30.38064206],
        [59.84660399, 30.29496392],
        [59.82761295, 30.41705607],
    ]

    const [locations, setLocations] = useState<LatLngTuple[]>([])

    useEffect(() => {
        getPolyline()
    }, [])

    async function getPolyline() {
        const route = await GetRoute(mar1)

        if (route.code = "Ok") {
            const res = polyline.decode(route.routes[0].geometry)
            setLocations(res)
        }
    }



    return (
        <>
            <MapContainer center={[59.83567701, 30.38064206]} zoom={13} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locations.length !== 0
                    ?
                    <>
                        <Polyline positions={locations}
                            weight={8} color='blue' opacity={0.6} />

                        {mar1.map((location, key) =>
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
