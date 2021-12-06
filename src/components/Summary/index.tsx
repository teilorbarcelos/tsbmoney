import { Container } from "./styles"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { useContext } from "react"
import { TransactionsContext } from "../../contexts/TransactionsContext"

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce((acc, transaction) => {
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
          }).format(Number(summary.incomes))
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
          }).format(Number(summary.outcomes))
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
          }).format(Number(summary.total))
        }</strong>
      </div>
    </Container>
  )
}