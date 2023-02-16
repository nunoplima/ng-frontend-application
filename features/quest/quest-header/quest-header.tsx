import { FC } from 'react'
import Link from 'next/link'
import x from '@icons/x.svg'
import { HeaderProps as Props } from './types'
import * as S from './quest-header.styles'

export const Header: FC<Props> = ({ cover }) => (
  <S.Header>
    <S.HeaderImage
      src={cover}
      alt='detailed-quest-image'
      sizes='743px'
      fill
      priority
    />
    <Link href='/quests'>
      <S.CloseIcon
        src={x}
        alt='close-icon'
        width={17}
        height={18}
      />
    </Link>
  </S.Header>
)
