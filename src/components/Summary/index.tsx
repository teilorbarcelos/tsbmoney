import { Container } from "./styles"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { useContext, useEffect, useState } from "react"
import { TransactionsContext } from "../../contexts/TransactionsContext"

export function Summary() {
  const { transactions } = useContext(TransactionsContext)
  const [incomes, setIncomes] = useState(0)
  const [outcomes, setOutcomes] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setIncomes(() => {
      let total = 0
      transactions.map(transaction => {
        if (transaction.type === 'income') {
          total += transaction.value
        }
      })
      return total
    })

    setOutcomes(() => {
      let total = 0
      transactions.map(transaction => {
        if (transaction.type === 'outcome') {
          total += transaction.value
        }
      })
      return total
    })

    setTotal(() => {
      let total = 0
      transactions.map(transaction => {
        if (transaction.type === 'income') {
          total += transaction.value
        } else {
          total -= transaction.value
        }
      })
      return total
    })
  }, [transactions])

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Icone de entradas" />
        </header>
        <strong>{
          new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
          }).format(Number(incomes))
        }</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Icone de saídas" />
        </header>
        <strong>- {
          new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
          }).format(Number(outcomes))
        }</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Icone de total" />
        </header>
        <strong>{
          new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
          }).format(Number(total))
        }</strong>
      </div>
    </Container>
  )
}