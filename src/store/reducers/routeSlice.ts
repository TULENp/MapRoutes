import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LatLngTuple } from "leaflet"

export interface routeState {
    selectedRoute: LatLngTuple[];
    geometries: string,
    isLoading: boolean;
    error: string;
}

const initialState: routeState = {
    selectedRoute: [],
    geometries: '',
    isLoading: true,
    error: ""
}

export const routeSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {
        setRoute(state, action: PayloadAction<LatLngTuple[]>) {
            state.selectedRoute = action.payload
        },
        getRouteSuccess(state, action: PayloadAction<string>) {
            state.geometries = action.payload
            state.isLoading = false
        }
    }
})

export const { setRoute, getRouteSuccess } = routeSlice.actions
export const RouteReducer = routeSlice.reducer