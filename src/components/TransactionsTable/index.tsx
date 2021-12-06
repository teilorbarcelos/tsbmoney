import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export type TransactionProps = {
  id: number
  title: string
  value: number
  type: 'income' | 'outcome'
  category: string
  createdAt: Date
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions as TransactionProps[]))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>

          {
            transactions.length > 0 &&
            transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>{
                    new Intl.NumberFormat('pt-BR', {
                      style: "currency",
                      currency: "BRL"
                    }).format(transaction.value)
                  }</td>
                  <td>{transaction.category}</td>
                  <td>{
                    new Intl.DateTimeFormat('pt-BR')
                      .format(new Date(transaction.createdAt))
                  }</td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </Container>
  )
}