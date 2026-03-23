// Aqui será o componente para mostrar o saldo total (entradas - saídas)

import './TotalBalanceCard.css' // importa css com o mesmo nome do componente para estilizá-lo

export default function TotalBalanceCard( { saldoTotal }) {

    return (
        <div className='total-balance-card'>
            <h1>Saldo:</h1>
            <p>R$ {saldoTotal.toFixed(2).replace('.', ',')}</p>
        </div>
    )
}