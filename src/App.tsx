import './App.css'
import { RoutesMap } from './components/RoutesMap'
import { RoutesTable } from './components/RoutesTable'

export function App() {

    return (
        <main>
            <div>
                <RoutesTable />
                <section >
                    <div className='info'>
                        <img src="/src/assets/redIcon.png" alt="red Icon" />
                        <h3>Начальная / Конечная точка</h3>
                    </div>
                    <div className='info'>
                        <img src="/src/assets/blackIcon.png" alt="black Icon" />
                        <h3>Промежуточная точка</h3>
                    </div>
                </section>
            </div>
            <RoutesMap />
        </main>
    )
}

