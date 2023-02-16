import { FC } from 'react'
import { HeaderProps as Props } from './types'
import * as S from './quest-header.styles'

export const Header: FC<Props> = ({ cover }) => (
  <S.Header>
    <S.HeaderImage
      src={cover}
      alt='detailed-quest-image'
      sizes='743px'
      quality={100}
      fill
      priority
    />
  </S.Header>
)
