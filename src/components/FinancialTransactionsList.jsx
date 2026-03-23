// Componente para mostrar lista de Transações Financeiras (Entradas e Saídas)

import './FinancialTransactionsList.css' // importa css com o mesmo nome do componente para estilizá-lo
import FinancialTransactionCard from './FinancialTransactionCard'

import { useFinancialTransactions } from '../contexts/FinancialTransactionsContext'


export default function FinancialTransactionsList() {
    const { transactions, removerTransacao, formattedDate } = useFinancialTransactions()

    const quantidadeDeEntradas = transactions.reduce((acumulador, currentTransaction) => {
        if (currentTransaction.typeOfTransaction === 'entrada') {
            return acumulador + 1
        }
        return acumulador
    }, 0)

    const quantidadeDeSaidas = transactions.reduce((acumulador, currentTransaction) => {
        if (currentTransaction.typeOfTransaction === 'saída') {
            return acumulador + 1
        }
        return acumulador
    }, 0)

    return (
        <section>
            {transactions.length === 0
                ? <p>Nenhum transação cadastrada ainda. Que tal começar?</p>
                : <p>Você tem {transactions.length} transaç(ão/ões) cadastrada(s). Entradas: {quantidadeDeEntradas} | Saídas: {quantidadeDeSaidas}</p>
            }
            <ul>
                {transactions.map( (transaction) => (
                    <li key={transaction.id}>
                        <FinancialTransactionCard 
                            id={transaction.id}
                            title={transaction.transactionTitle}
                            description={transaction.description}
                            type={transaction.typeOfTransaction}
                            date={formattedDate(transaction.date)}
                            value={transaction.value} 
                            onRemover={ () => removerTransacao(transaction.id)}   
                        />
                    </li>
                
                    )
                )}
            </ul>
        </section>
    )
}