import { call, put, select, takeEvery } from 'redux-saga/effects'
import { GetRoute } from '../../service/osrmApi'
import { getRouteSuccess, setError } from '../reducers/routeSlice'
import { RootState } from '../store'
import { TRouteResult } from '../../types'

export function* RouteSaga() {
    yield takeEvery('route/setRoute', fetchRouteAsync)
}

function* fetchRouteAsync() {
    const { selectedRoute } = yield select((state: RootState) => state.route) // get selected route
    const locations = selectedRoute.map((subArray: number[]) => [...subArray].reverse().join(',')).join(';') // transform LatLng[] to LngLat string 
    const result: TRouteResult | string = yield call(GetRoute, locations)

    if (typeof result == 'string') {
        yield put(setError(result))
    }
    else if (result.code === "Ok") {
        const code = result.routes[0].geometry
        yield put(getRouteSuccess(code))
    }
}