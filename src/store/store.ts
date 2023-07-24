import { configureStore } from '@reduxjs/toolkit'
import { RouteReducer } from './reducers/routeSlice'
import createSagaMiddleware from 'redux-saga'
import { RouteSaga } from './sagas/routeSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    devTools: true,
    reducer: {
        route: RouteReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

// run sagas
sagaMiddleware.run(RouteSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch