import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

type Props = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function Header({ setModalOpen }: Props) {
  return (
    <Container>
      <Content>
        <img
          src={logoImg}
          alt="tsb money"
        />
        <button
          type="button"
          onClick={() => setModalOpen(true)}
        >
          Nova transação
        </button>
      </Content>
    </Container>
  )
}