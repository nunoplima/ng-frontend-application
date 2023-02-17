import { FC, Fragment } from 'react'
import { QuestCard } from '../quest-card'
import { useQuests } from '../api/use-quests'
import * as S from './quest-list.styles'

export const QuestList: FC = () => {
  const { data } = useQuests()

  return (
    <S.Container>
      <S.InnerContainer>
        {data?.map(quest => (
          <Fragment key={quest.id}>
            <QuestCard {...quest} />
          </Fragment>
        ))}
      </S.InnerContainer>
    </S.Container>
  )
}
