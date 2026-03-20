import './App.css'

// importar roteamento
import { Routes, Route } from 'react-router-dom'

// importar páginas
import PrincipalLayout from './layouts/PrincipalLayout'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import FormPage from './pages/FormPage'
import TransactionDetailsPage from './pages/TransactionDetailsPage'
import PageNotFound from './pages/PageNotFound'

function App() {

  return (
    <div>
      <Routes>
        <Route element={ <PrincipalLayout /> }>
          <Route path="/" element={ <HomePage /> }/>
          <Route path="/transacoes-financeiras" element={ <DashboardPage /> } />
          <Route path="/transacoes-financeiras/registrar" element={ <FormPage /> } />
          <Route path="/transacoes-financeiras/:id" element={ <TransactionDetailsPage /> } />
        </Route>
        <Route path="*" element={ <PageNotFound/> } />
      </Routes>

    </div>
  )
}

export default App
