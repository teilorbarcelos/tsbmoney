import { Container } from "./styles"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { useContext } from "react"
import { TransactionsContext } from "../../contexts/TransactionsContext"

export function Summary() {
  const transactions = useContext(TransactionsContext)

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Icone de entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Icone de saídas" />
        </header>
        <strong>- R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Icone de total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}