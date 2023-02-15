import { FC, Fragment } from 'react'
import { QuestCard } from '../quest-card'
import { useQuests } from '../queries'
import * as S from './quest-list.styles'

export const QuestList: FC = () => {
  const { data } = useQuests()

  return (
    <S.Root>
      {data?.map((quest) => (
        <Fragment key={quest.id}>
          <QuestCard quest={quest} />
        </Fragment>
      ))}
    </S.Root>
  )
}
