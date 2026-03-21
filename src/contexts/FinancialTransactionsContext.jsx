import { createContext, useState, useEffect, useContext } from 'react';

export const FinancialTransactionsContext = createContext(null) // cria o canal de contextualização do projeto

export function FinancialTransactionsProvider( { children } ) {
    // Obtém lista de transações financeiras do armazenamento local do navegador
    const [transactions, setTransactions] = useState( () => {
        const storedFinancialTransactions = localStorage.getItem('my-financial-transactions');

        if (!storedFinancialTransactions) {
            return []   // retorna para salvar em transactions uma lista vazia, ainda sem transações
        }

        try {
            const listOfFinancialTransactionsObjects = JSON.parse(storedFinancialTransactions)
            return listOfFinancialTransactionsObjects
        } catch {
            return []
        }

    } )

    // ao alterar lista de transações finaceiras, atualiza o armazenamento local do navegador para ficar sincronizado
    useEffect( () => {
        const jsonOfFinancialTransactions = JSON.stringify(transactions)
        localStorage.setItem('my-financial-transactions', jsonOfFinancialTransactions)
    }, [transactions])

    // Funções CRUD

    // criar transações financeiras:
    const adicionarTransacao = (novaTransacao) => {
        setTransactions( (prev) => [...prev, novaTransacao])
    }

    // deletar transações financeiras:
    const removerTransacao = (id) => {
        setTransactions( (prev) => prev.filter( (transacao) => transacao.id !== id))
    }
    // alterar tipo de transação financeira (entrada ou saída):

    return (
        <FinancialTransactionsContext.Provider value={ { transactions, adicionarTransacao, removerTransacao } }>
            {children}
        </FinancialTransactionsContext.Provider>
    )
}

export function useFinancialTransactions() {
    return useContext(FinancialTransactionsContext)
}