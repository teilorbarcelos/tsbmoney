import { useEffect, useState } from "react";
import { Container } from "./styles";

type TransactionProps = {
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
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data as TransactionProps[]))
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
          <tr>
            <td>Site entregue</td>
            <td className="income">R$1500</td>
            <td>Desenvolvimento</td>
            <td>23/11/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="outcome">- R$500</td>
            <td>casa</td>
            <td>03/11/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}