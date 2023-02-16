import { FC } from 'react'
import { ButtonProps as Props } from './types'
import * as S from './button.styles'

export const Button: FC<Props> = ({ href, text }) => {
  return (
    <S.Button href={href}>
      {text}
    </S.Button>
  )
}
