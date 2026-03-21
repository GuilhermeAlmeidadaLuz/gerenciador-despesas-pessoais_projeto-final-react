// Página Inicial - apresenta rotas para o dashboard e o formulário de transação financeira
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <main className="home-page">
            <h1>Bem-Vindo ao seu Gerenciador de Despesas Pessoal</h1>
            <p>Aqui você mantém sua vida financeira organizada</p>

            <Link to="/transacoes-financeiras" className='btn-action'>
                Ver minhas movimentações financeiras
            </Link>
        </main>
    )
}