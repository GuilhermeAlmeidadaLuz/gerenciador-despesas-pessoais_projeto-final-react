// Componente para o Cartão/Caixa que mostra entradas totais em dinheiro

import './TotalEntriesCard.css' // importa css com o mesmo nome do componente para estilizá-lo
import { useFinancialTransactions } from '../contexts/FinancialTransactionsContext'

export default function TotalEntriesCard( {entradaTotal} ) {
    
    return (
        <div className='total-entries-card'>
            <h1>Entradas</h1>
            <p>R$ +{entradaTotal.toFixed(2).replace('.', ',')}</p>
        </div>
    )
}