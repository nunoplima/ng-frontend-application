import {
  FC,
  Fragment,
  useCallback,
  useMemo,
} from 'react'
import sword from '@icons/sword.svg'
import swordGold from '@icons/sword-gold.svg'
import { QuestCardProps as Props } from './types'
import * as S from './quest-card.styles'

const MAX_DIFFICULTY = 5

export const QuestCard: FC<Props> = ({ quest }) => {
  const {
    cover,
    difficulty,
    experience,
    gold,
    skill,
    skillTree,
    title,
    type,
  } = quest

  const renderDifficulty = useCallback(() => {
    const swordIcon = <S.SwordIcon src={sword} alt='sword icon' />
    const swordGoldIcon = <S.SwordIcon src={swordGold} alt='sword icon' />

    const swords = []
    for (let i = 1; i <= MAX_DIFFICULTY; i++) {
      if (i <= difficulty) swords.push(swordGoldIcon)
      else swords.push(swordIcon)
    }

    return <S.Swords>{swords}</S.Swords>
  }, [difficulty])

  const renderColoredData = useCallback((data: string) => (
    <S.ColoredData>{data}</S.ColoredData>
  ), [])

  const content = useMemo(() => ([
    { title: 'Skill tree', data: () => renderColoredData(skillTree) },
    { title: 'Difficulty', data: renderDifficulty },
    { title: 'Skill', data: skill },
    { title: 'Experience', data: experience },
    { title: 'Type', data: type },
    { title: 'Gold', data: gold },
  ]), [
    renderColoredData,
    renderDifficulty,
    experience,
    gold,
    skill,
    skillTree,
    type,
  ])

  return (
    <S.Container>
      <S.Header>
        <S.HeaderImage
          src={cover}
          alt='quest-image'
          fill
          priority
        />
      </S.Header>
      <S.Body>
        <S.Title>{title}</S.Title>
        <S.Content>
          {content.map(({ title, data }, index) => (
            <Fragment key={`${title}-${index}`}>
              <S.Label>{title}</S.Label>
              {typeof data === 'function'
                ? data()
                : <S.Data>{data}</S.Data>
              }
            </Fragment>
          ))}
        </S.Content>
      </S.Body>
    </S.Container>
  )
}
