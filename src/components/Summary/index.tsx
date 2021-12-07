import { Container } from "./styles"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { useTransactions } from "../../hooks/useTransactions"
import { useEffect, useState } from "react"

export function Summary() {
  const { transactions } = useTransactions()
  const [summary, setSummary] = useState({
    incomes: 0,
    outcomes: 0,
    total: 0
  })

  function formatValue(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: "currency",
      currency: "BRL"
    }).format(value)
  }

  useEffect(() => {
    if (transactions) {
      setSummary(
        transactions.reduce((acc, transaction) => {
          if (transaction.type === 'income') {
            acc.incomes += transaction.value
            acc.total += transaction.value
          } else {
            acc.outcomes += transaction.value
            acc.total -= transaction.value
          }

          return acc
        }, {
          incomes: 0,
          outcomes: 0,
          total: 0
        })
      )
    }
  }, [transactions])

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Icone de entradas" />
        </header>
        <strong>{formatValue(summary.incomes)}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Icone de saídas" />
        </header>
        <strong>- {formatValue(summary.outcomes)}</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Icone de total" />
        </header>
        <strong>{formatValue(summary.total)}</strong>
      </div>
    </Container>
  )
}