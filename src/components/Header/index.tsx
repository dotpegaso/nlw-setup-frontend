import * as S from './styles'
import logo from '../../assets/logo.svg'

import Button from '../Button'

const Header = () => (
  <S.Container>
    <img src={logo} alt="Habits" />
    <Button>
      Novo Hábito
    </Button>
  </S.Container>
)

export default Header