// Componente para mostrar um cartão/caixa com uma Entrada ou Saída na renderização da lista

import './FinancialTransactionCard.css' // importa css com o mesmo nome do componente para estilizá-lo

import { Link } from 'react-router-dom'

export default function FinancialTransactionCard( { id, title, description, type, date, value, onRemover}) {
    return (
        <div className="transaction-card">
            <div className='transaction-card-header'>
                <h3>{title}</h3>
            </div>
            <p>Descrição: {description}</p>
            <p>Tipo: {type}</p>
            <p>Data: {date}</p>
            <p><strong>Valor: R$ {value.toFixed(2).replace('.', ',')}</strong></p>

            <div className="transaction-card-actions">
                <Link to={`/transacoes-financeiras/${id}`}>
                    Ver detalhes
                </Link>
                <br /> <br />
                {onRemover && (
                    <button onClick={onRemover} className='btn-remover'>
                        Remover
                    </button>
                )}
            </div>
        </div>
    )
}