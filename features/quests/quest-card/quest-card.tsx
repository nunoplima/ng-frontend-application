import {
  FC,
  Fragment,
  useCallback,
  useMemo,
} from 'react'
import Link from 'next/link'
import { Swords } from '@features/ui'
import { QuestCardProps as Props } from './types'
import * as S from './quest-card.styles'

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
  const renderColoredData = useCallback((data: string) => (
    <S.ColoredData>{data}</S.ColoredData>
  ), [])

  const details = useMemo(() => ([
    { title: 'Skill tree', data: () => renderColoredData(skillTree) },
    { title: 'Difficulty', data: () => <Swords difficulty={difficulty} /> },
    { title: 'Skill', data: skill },
    { title: 'Experience', data: experience },
    { title: 'Type', data: type },
    { title: 'Gold', data: gold },
  ]), [
    renderColoredData,
    skillTree,
    difficulty,
    skill,
    experience,
    type,
    gold,
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
          <S.Details>
            {details.map(({ title, data }, index) => (
              <Fragment key={`${title}-${index}`}>
                <S.Label>{title}</S.Label>
                {typeof data === 'function'
                  ? data()
                  : <S.Data>{data}</S.Data>
                }
              </Fragment>
            ))}
          </S.Details>
        </S.Body>
      </S.Container>
    </Link>
  )
}
