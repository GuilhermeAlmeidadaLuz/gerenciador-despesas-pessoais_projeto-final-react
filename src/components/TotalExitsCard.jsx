// Componente para o Cartão/Caixa que mostra saídas totais em dinheiro

import './TotalExitsCard.css'   // importa css com o mesmo nome do componente para estilizá-lo

export default function TotalExitsCard( {saidaTotal} ) {
    return (
        <div className="total-exits-card">
            <h1>Saídas</h1>
            <p>R$ {saidaTotal.toFixed(2).replace('.', ',')}</p>
        </div>
    )
}