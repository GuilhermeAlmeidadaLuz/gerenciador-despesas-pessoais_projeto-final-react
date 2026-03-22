// Componente para mostrar lista de Transações Financeiras (Entradas e Saídas)

import './FinancialTransactionsList.css' // importa css com o mesmo nome do componente para estilizá-lo
import FinancialTransactionCard from './FinancialTransactionCard'

export default function FinancialTransactionsList() {
    return (
        <ul>
            <li>
               <FinancialTransactionCard />
            </li>
        </ul>
    )
}