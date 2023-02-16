import { FC } from 'react'
import { useRouter } from 'next/router'
import { Header } from './quest-header'
import { Body } from './quest-body'
import { Footer } from './quest-footer'
import { useQuest } from './queries'
import { DetailedQuest} from '@types'
import * as S from './quest.styles'

export const Quest: FC = () => {
  const router = useRouter()
  const questId = typeof router.query?.id === 'string' ? router.query.id : ''

  const { data } = useQuest(questId)
  const {
    cover,
    title,
    skillTree,
    skill,
    type,
    difficulty,
    description,
    rewards: { experience }
  } = data as DetailedQuest

  return (
    <S.Container>
      <Header cover={cover} />
      <Body
        title={title}
        description={description}
        skillTree={skillTree}
        skill={skill}
        type={type}
        difficulty={difficulty}
      />
      <Footer experience={experience} />
    </S.Container>
  )
}
