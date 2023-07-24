import axios from "axios"
import { TRouteResult } from "../types"
axios.defaults.baseURL = 'http://router.project-osrm.org/route/v1/driving'

// return the fastest route between locations
export async function GetRoute(locations: string): Promise<TRouteResult> {
    return await axios.get(`/${locations}?overview=full`)
        .then(response => response.data)
        .catch(error => error.toString())
}
