import { useState } from "react"
import ReactModal from "react-modal"
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeCOntainer, TypeButton } from "./styles"

ReactModal.setAppElement('#root')

type Props = {
  isNewTransactionModalOpen: boolean
  setIsNewTransactionModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function NewTransactionModal({ isNewTransactionModalOpen, setIsNewTransactionModalOpen }: Props) {
  const [transactionType, setTransactionType] = useState<'income' | 'outcome'>('income')

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
          <TypeButton
            type="button"
            isSelected={transactionType === 'income'}
            onClick={() => setTransactionType('income')}
            selectedColor="green"
          >
            <img src={incomeImg} alt="Icone de entrada" />
            <span>Entrada</span>
          </TypeButton>

          <TypeButton
            type="button"
            isSelected={transactionType === 'outcome'}
            onClick={() => setTransactionType('outcome')}
            selectedColor="red"
          >
            <img src={outcomeImg} alt="Icone de saída" />
            <span>Saída</span>
          </TypeButton>
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