import { FC } from 'react'
import { useRouter } from 'next/router'
import { useQuest } from './queries'
import * as S from './quest.styles'

export const Quest: FC = () => {
  const router = useRouter()
  const questId = typeof router.query?.id === 'string' ? router.query.id : ''

  const { data } = useQuest(questId)

  return (
    <S.Root>
      {data?.id}
    </S.Root>
  )
}
