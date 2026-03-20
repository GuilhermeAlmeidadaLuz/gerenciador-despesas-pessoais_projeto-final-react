import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// importar roteador de navegação
import { BrowserRouter } from 'react-router-dom'
// importar contexto do APP
import { FinancialTransactionsProvider } from './contexts/FinancialTransactionsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FinancialTransactionsProvider>
        <App />
      </FinancialTransactionsProvider>
    </BrowserRouter>
  </StrictMode>,
)
