// Página que vai renderizar o componente Dashboard, Lista de transações finaneiras e outros que forem necessários
import FinancialDashboard from "../components/FinancialDashboard"
import FinancialTransactionsList from "../components/FinancialTransactionsList"

import { Link } from 'react-router-dom'

export default function DashboardPage() {
    return (
        <main className="dashboard-page">
            <FinancialDashboard />
            <div className="actions-container">
                <Link to="/transacoes-financeiras/registrar" className="btn-action positive">
                    Adicionar Nova Movimentação
                </Link>
            </div>
            <FinancialTransactionsList />
        </main>
    )
}