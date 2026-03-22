// Página não encontrada
import { Link } from "react-router-dom"

export default function PageNotFound() {
    return (
        <main className="pagina-404">
            <h1>404</h1>
            <p>Esta página não existe</p>
            <Link to="/" className='btn-voltar'>Voltar para início</Link>
        </main>
    )
}