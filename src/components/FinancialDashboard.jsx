// Componente Dashboard para mostra entradas, saídas e saldo (balanço financeiro)

import './FinancialDashboard.css' // importa css com o mesmo nome do componente para estilizá-lo

import TotalBalanceCard from './TotalBalanceCard'
import TotalEntriesCard from './TotalEntriesCard'
import TotalExitsCard from './TotalExitsCard'
import { useFinancialTransactions } from '../contexts/FinancialTransactionsContext'


export default function FinancialDashboard() {
    const { transactions } = useFinancialTransactions()

    let saldo = 0
    let entradas = 0
    let saidas = 0
    transactions.forEach(transaction => {
        if (transaction.typeOfTransaction === 'entrada') {
            saldo += transaction.value
            entradas += transaction.value
        }  else {
            saldo -= transaction.value
            saidas -= transaction.value
        }
        
    });

    return (
        <div className="container-dashboard">
            <TotalBalanceCard saldoTotal={saldo}/>
            <div className="linha-dashboard">
                <TotalEntriesCard entradaTotal={entradas}/>
                <TotalExitsCard saidaTotal={saidas}/>
            </div>
        </div>
    )
}