import {
  FC,
  useMemo,
  Fragment,
} from 'react'
import { Swords } from '@features/ui'
import titleDecoration from '@icons/title-decoration.svg'
import { BodyProps as Props } from './types'
import * as S from './quest-body.styles'

export const Body: FC<Props> = ({
  title,
  skillTree,
  skill,
  type,
  difficulty,
  description,
}) => {
  const details = useMemo(() => ([
    { title: 'Skill tree', data: skillTree },
    { title: 'Difficulty', data: () => <Swords difficulty={difficulty} /> },
    { title: 'Skill', data: skill },
    { title: 'Quest type', data: type },
  ]), [
    skillTree,
    difficulty,
    skill,
    type,
  ])

  return (
    <S.Body>
      <S.Content>
        <S.TitleWrapper>
          <S.LeftTitleDecorationIcon src={titleDecoration} alt='title decoration' />
          <S.Title>{title}</S.Title>
          <S.RightTitleDecorationIcon src={titleDecoration} alt='title decoration' />
        </S.TitleWrapper>
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
          <S.Description>{description}</S.Description>
      </S.Content>
    </S.Body>
  )
}
