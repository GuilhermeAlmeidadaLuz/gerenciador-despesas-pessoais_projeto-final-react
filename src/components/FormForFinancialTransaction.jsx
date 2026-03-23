// Formulário para preencher transação finaceira
import './FormForFinancialTransaction.css' // importa css com o mesmo nome do componente para estilizá-lo

import { useFinancialTransactions } from '../contexts/FinancialTransactionsContext'
import {useState, useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {DatePicker, registerLocale} from 'react-datepicker'
import { ptBR } from 'date-fns/locale/pt-BR'
import "react-datepicker/dist/react-datepicker.css"

export default function FormForFinancialTransaction() {
    const {transactions, adicionarTransacao} = useFinancialTransactions()
    const navigate = useNavigate()
    
    const [form, setForm] = useState({
        newTransactionTitle: '',
        newDescription: '',
        newTypeOfTransaction: 'entrada',
        newDate: new Date(),
        newValue: ''
    })

    const transactionInputRef = useRef(null)

    registerLocale('ptBR', ptBR)

    // lida com a mudança
    const handleChange = (event) => {
        if (event instanceof Date) {
            setForm(prev => ({...prev, newDate: event}))

        } else {
            const { name, value } = event.target

            if (name === 'newTransactionTitle') {
                setForm(prev => ({...prev, [name]: value}))
            }

            if (name === 'newDescription') {
                setForm(prev => ({...prev, [name]: value}))
            }

            if (name === 'newTypeOfTransaction') {
                setForm(prev => ({...prev, [name]: value}))
                // console.log(form)
            }

            if (name === 'newValue') {
                setForm(prev => ({...prev, [name]: value}))
            }
        }

        // const {name, value}
    }

    // lida com a submissão do formulário
    const handleSubmit = (event) => {
        event.preventDefault()
        const emptyTitle = !form.newTransactionTitle.trim()
        if (emptyTitle) {
            transactionInputRef.current?.focus()
            return
        }

        const newTransaction = {
            id: ( (transactions.length !== 0) ? ( transactions.at(-1).id + 1 ) : 1 ),
            transactionTitle: form.newTransactionTitle,
            description: form.newDescription,
            typeOfTransaction: form.newTypeOfTransaction,
            date: form.newDate,
            value: formattedValue(form.newValue)
        }

        adicionarTransacao(newTransaction)
        setForm({newTransactionTitle: '',
        newDescription: '',
        newTypeOfTransaction: '',
        newDate: new Date(),
        newValue: ''
        })

        navigate('/transacoes-financeiras')
    }

    const formattedValue = (value) => {
        const commaPosition = value.indexOf(',')

        if (commaPosition === -1) {
            return parseFloat(value)
        }

        value.replace(',', '.')
        return parseFloat(value)
    }
    return (
        <section>
            <h1>Formulário</h1>
            <Link to='/transacoes-financeiras'>Voltar</Link>
            <br />
            <br />
            <form onSubmit={handleSubmit} className="transaction-form">
                <div className='form-field'>
                    <label>
                        Título da Transação: <span style={{ fontWeight: 'bold', color: 'red' }}>*</span>
                        <input 
                            type="text" 
                            name='newTransactionTitle'
                            value={form.newTransactionTitle}
                            onChange={ handleChange }
                            ref={transactionInputRef}
                            placeholder='Digite o título da transação'
                            required
                        />
                    </label>
                </div>
                <div className='form-field'>
                    <label>
                        Descrição:
                        <input 
                            type="text"
                            name='newDescription'
                            value={form.newDescription}
                            onChange={ handleChange }
                            placeholder='Descreva a movimentação financeira'
                        />
                    </label>
                </div>
                <div className='form-field'>
                    <label>
                        Tipo da Transação: <span style={{ fontWeight: 'bold', color: 'red' }}>*</span>
                        <select 
                            name='newTypeOfTransaction'
                            value={form.newTypeOfTransaction}
                            onChange={handleChange}
                            required
                        >
                            <option value="entrada" style={{color:"greenyellow"}}>Entrada</option>
                            <option value="saída" style={{color: "rgb(255, 82, 66)"}}>Saída</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Data:
                        <DatePicker selected={form.newDate} onChange={handleChange} dateFormat="dd/MM/yyyy" locale="ptBR"/>
                    </label>
                </div>
                <div>
                    <label>
                        Valor: R$
                        <input 
                            type="text" 
                            placeholder='1000,00'
                            name='newValue'
                            value={form.newValue}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className='form-buttons-container'>
                    <button type='submit'>
                        Salvar
                    </button>
                </div>

            </form>
        </section>
    )
}