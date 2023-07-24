import axios from "axios"
import { LatLngTuple } from "leaflet";
axios.defaults.baseURL = 'http://router.project-osrm.org/route/v1/driving'

// return the fastest route between locations
export async function GetRoute(locations: LatLngTuple[]) {

    //TODO move up
    const coordinates = locations.map(subArray => subArray.reverse().join(',')).join(';');

    return await axios.get(`/${coordinates}?overview=full`)
        .then(response => response.data)
        .catch(error => error.toString())
}
