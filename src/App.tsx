import './App.css'
import { RoutesMap } from './components/RoutesMap'
import { RoutesTable } from './components/RoutesTable'

export function App() {

    return (
        <main>
            <RoutesTable />
            <RoutesMap />
        </main>
    )
}

