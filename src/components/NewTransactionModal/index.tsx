import ReactModal from "react-modal"
import closeImg from '../../assets/close.svg'
import { Container } from "./styles"

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