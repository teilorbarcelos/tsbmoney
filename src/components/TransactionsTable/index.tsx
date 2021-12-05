import { Container } from "./styles";

export function TransactionsTable() {
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