import { LatLngTuple } from "leaflet"

export type TTableData = {
    id: number,
    routeName: string,
    routes: LatLngTuple[]
}

export type TRouteResult = {
    code: string,
    routes: { geometry: string, duration: number }[]
}