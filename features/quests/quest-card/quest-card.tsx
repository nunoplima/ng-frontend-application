import {
  FC,
  Fragment,
  useCallback,
  useMemo,
} from 'react'
import Link from 'next/link'
import sword from '@icons/sword.svg'
import goldenSword from '@icons/sword-gold.svg'
import { QuestCardProps as Props } from './types'
import * as S from './quest-card.styles'

const MAX_DIFFICULTY = 5

export const QuestCard: FC<Props> = ({
  id,
  cover,
  difficulty,
  experience,
  gold,
  skill,
  skillTree,
  title,
  type,
}) => {
  const renderDifficulty = useCallback(() => {
    const swords = []
    for (let i = 1; i <= MAX_DIFFICULTY; i++) {
      if (i <= difficulty) {
        swords.push(<S.SwordIcon key={i} src={goldenSword} alt='sword icon' />)
      } else {
        swords.push(<S.SwordIcon key={i} src={sword} alt='sword icon' />)
      }
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
    <Link
      href={`/quests/${id}`}
      passHref
      legacyBehavior
    >
      <S.Container>
        <S.Header>
          <S.HeaderImage
            src={cover}
            alt='quest-image'
            sizes='320px'
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
    </Link>
  )
}
