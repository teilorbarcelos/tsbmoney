import ReactModal from "react-modal"
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeCOntainer } from "./styles"

ReactModal.setAppElement('#root')

type Props = {
  isNewTransactionModalOpen: boolean
  setIsNewTransactionModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function NewTransactionModal({ isNewTransactionModalOpen, setIsNewTransactionModalOpen }: Props) {

  return (
    <ReactModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={() => setIsNewTransactionModalOpen(false)}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={() => setIsNewTransactionModalOpen(false)}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Icone fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder="Título"
        />

        <input
          type="number"
          placeholder="Valor"
        />

        <TransactionTypeCOntainer>
          <button
            type="button"
          >
            <img src={incomeImg} alt="Icone de entrada" />
            <span>Entrada</span>
          </button>

          <button
            type="button"
          >
            <img src={outcomeImg} alt="Icone de saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeCOntainer>

        <input
          placeholder="Categoria"
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </ReactModal>
  )
}