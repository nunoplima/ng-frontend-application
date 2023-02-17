import { FC } from 'react'
import logo from '@icons/logo.svg'
import * as S from './page-top-bar.styles'

export const PageTopBar: FC = () => (
  <S.Container>
    <S.Logo
      src={logo}
      alt='NG logo'
      width={285}
    />
  </S.Container>
)
