import { FormEvent, useState } from "react"
import ReactModal from "react-modal"
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from "../../services/api"
import { TransactionProps } from "../TransactionsTable"
import { Container, TransactionTypeContainer, TypeButton } from "./styles"

ReactModal.setAppElement('#root')

type Props = {
  isNewTransactionModalOpen: boolean
  setIsNewTransactionModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  updateList?: () => void
}

export function NewTransactionModal({
  isNewTransactionModalOpen,
  setIsNewTransactionModalOpen,
  updateList
}: Props) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  const [type, setType] = useState<'income' | 'outcome'>('income')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()
    // Envia os dados para API
    const response = await api.post<TransactionProps>('/newTransaction', {
      title,
      value,
      type,
      category
    })

    // Apaga os dados do formulário
    setTitle('')
    setValue(0)
    setCategory('')
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder="Título"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />

        <input
          type="number"
          step="0.01"
          min="0"
          placeholder="Valor"
          onChange={e => setValue(parseFloat(e.target.value))}
          value={value}
        />

        <TransactionTypeContainer>
          <TypeButton
            type="button"
            isSelected={type === 'income'}
            onClick={() => setType('income')}
            selectedColor="green"
          >
            <img src={incomeImg} alt="Icone de entrada" />
            <span>Entrada</span>
          </TypeButton>

          <TypeButton
            type="button"
            isSelected={type === 'outcome'}
            onClick={() => setType('outcome')}
            selectedColor="red"
          >
            <img src={outcomeImg} alt="Icone de saída" />
            <span>Saída</span>
          </TypeButton>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          onChange={e => setCategory(e.target.value)}
          value={category}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </ReactModal>
  )
}