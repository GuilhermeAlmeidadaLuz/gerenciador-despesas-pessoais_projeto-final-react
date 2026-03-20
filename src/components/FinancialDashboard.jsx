// Componente Dashboard para mostra entradas, saídas e saldo (balanço financeiro)

import './FinancialDashboard.css' // importa css com o mesmo nome do componente para estilizá-lo

import TotalBalanceCard from './TotalBalanceCard'
import TotalEntriesCard from './TotalEntriesCard'
import TotalExitsCard from './TotalExitsCard'

export default function FinancialDashboard() {
    

    return (
        <div className="container-dashboard">
            <TotalBalanceCard />
            <div className="linha-dashboard">
                <TotalEntriesCard />
                <TotalExitsCard />
            </div>
        </div>
    )
}