import { FC } from 'react'
import { Button } from '@features/ui'
import { FooterProps as Props } from './types'
import * as S from './quest-footer.styles'

export const Footer: FC<Props> = ({ experience }) => (
  <S.Footer>
    <S.FooterInnerWrapper>
      <S.RewardsWrapper>
        <S.RewardsTitle>QUEST REWARDS</S.RewardsTitle>
        <S.ExpWrapper>
          <S.ExpIcon
            src='/icons/exp.svg'
            alt='exp-icon'
          />
          <S.Experience>{`+ ${experience}`}</S.Experience>
        </S.ExpWrapper>
      </S.RewardsWrapper>
      <Button href='/quests' text='go back' />
    </S.FooterInnerWrapper>
  </S.Footer>
)
