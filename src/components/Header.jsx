import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <header className='header'>
            <div className="header-logo">
                <strong>Gerenciador de Despesas Pessoais</strong>
            </div>

            <nav className="header-nav">
                <NavLink
                 to="/"
                 end
                 className={ ({isActive}) => isActive ? "nav-link ativo": "nav-link"}
                >
                    Início
                </NavLink>
                <NavLink
                 to="/transacoes-financeiras"
                >
                    Dashboard
                </NavLink>
            </nav>
        </header>
    )
}