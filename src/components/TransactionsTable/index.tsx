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
              const dateSplit = transaction.createdAt.toString().split('T')[0].split('-')
              const date = `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`
              return (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>{transaction.type === 'outcome' && '-'} R${transaction.value.toFixed(2)}</td>
                  <td>{transaction.category}</td>
                  <td>{date}</td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </Container>
  )
}