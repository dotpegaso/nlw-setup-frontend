import * as S from './styles'
import { Header, HabitContainer } from '../../components'

function Dashboard() {
  return (
    <S.Container>
      <S.InnerContainer>
        <Header />
        <HabitContainer />
      </S.InnerContainer>
    </S.Container>
  )
}

export default Dashboard
