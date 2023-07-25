import './App.css'
import { RoutesMap } from './components/RoutesMap'
import { RoutesTable } from './components/RoutesTable'
import red from './assets/blackIcon.png'
import black from './assets/redIcon.png'

export function App() {

    return (
        <main>
            <div>
                <RoutesTable />
                <section >
                    <div className='info'>
                        <img src={red} alt="red Icon" />
                        <h3>Начальная / Конечная точка</h3>
                    </div>
                    <div className='info'>
                        <img src={black} alt="black Icon" />
                        <h3>Промежуточная точка</h3>
                    </div>
                </section>
            </div>
            <RoutesMap />
        </main>
    )
}

