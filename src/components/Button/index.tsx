import * as S from './styles'
import {Plus} from 'phosphor-react'

interface ButtonProps {
  children: string
}

const Button = (props: ButtonProps) => (
  <S.Container>
    <Plus size={20} color="#7C3AED" />
    {props.children}
  </S.Container>
)

export default Button