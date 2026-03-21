// página para detalhamento individual de transação

import { useParams, useNavigate } from 'react-router-dom'
import { useFinancialTransactions } from '../contexts/FinancialTransactionsContext'

export default function TransactionDetailsPage() {
    const { id } = useParams()
    const { transactions, removerTransacao } = useFinancialTransactions()
    const navigate = useNavigate()

    const transaction = transactions.find(transaction => transaction.id === Number(id))

    if (!transaction) {
        return (
            <main className='transaction-details-page'>
                <h1>Transação Não Encontrada</h1>
                <button onClick={ () => navigate('/transacoes-financeiras')}>
                    Voltar para Dashboard de Transações
                </button>
            </main>
        )

    }

    const handleRemover = () => {
        removerTransacao(transaction.id)
        navigate('/transacoes-financeiras')
    }

    return (
        <main className='pagina-detalhes'>
            <button onClick={() => navigate(-1)} className='btn-voltar'>
                {'<-'} Voltar
            </button>

            <div className='detalhe-card'>
                <h1>{transaction.nome}</h1>
                <p>{transaction.descricao}</p>

                <ul className='detalhe-info'>
                    {/* mais detalhes da transação: data (obrigatório), hora (opcional), tipo (obrigatório) */}
                </ul>
            </div>
        </main>
    )       
}