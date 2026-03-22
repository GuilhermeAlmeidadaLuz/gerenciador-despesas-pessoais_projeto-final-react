// Componente para o Cartão/Caixa que mostra entradas totais em dinheiro

import './TotalEntriesCard.css' // importa css com o mesmo nome do componente para estilizá-lo

export default function TotalEntriesCard() {
    return (
        <div className='total-entries-card'>
            <h1>Entradas</h1>
            <p>Valor: R$</p>
        </div>
    )
}