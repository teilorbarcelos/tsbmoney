import { createContext, ReactElement, ReactNode, useEffect, useState } from "react";
import { api } from "../../services/api";

export type TransactionProps = {
  id: number
  title: string
  value: number
  type: 'income' | 'outcome'
  category: string
  createdAt: Date
}

export type NewTransactionProps = Omit<TransactionProps, 'id' | 'createdAt'>

type TransactionsProviderProps = {
  children: ReactNode
}

type TransactionContextProps = {
  transactions: TransactionProps[]
  newTransaction: (data: NewTransactionProps) => Promise<void>
}

export const TransactionsContext = createContext<TransactionContextProps>({} as TransactionContextProps)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  async function getTransactions() {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions as TransactionProps[]))
  }

  async function newTransaction(data: NewTransactionProps) {
    const response = await api.post<NewTransactionProps>('/newTransaction', data)

    getTransactions()
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, newTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}