import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LatLngTuple } from "leaflet"

export interface routeState {
    selectedRoute: LatLngTuple[]; // route points array [lat,lng]
    geometries: string, // polyline code
    isLoading: boolean;
    error: string;
}

const initialState: routeState = {
    selectedRoute: [],
    geometries: '',
    isLoading: false,
    error: ""
}

export const routeSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {
        setRoute(state, action: PayloadAction<LatLngTuple[]>) {
            state.selectedRoute = action.payload
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.isLoading = false
        },
        getRouteSuccess(state, action: PayloadAction<string>) {
            state.geometries = action.payload
            state.isLoading = false
        }
    }
})

export const { setRoute, getRouteSuccess, setError } = routeSlice.actions
export const RouteReducer = routeSlice.reducer