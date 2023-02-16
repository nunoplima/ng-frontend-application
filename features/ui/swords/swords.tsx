import {
  FC,
  useCallback,
} from 'react'
import { MAX_DIFFICULTY } from '@constants'
import sword from '@icons/sword.svg'
import goldenSword from '@icons/sword-gold.svg'
import { SwordsProps as Props } from './types'
import * as S from './swords.styles'

export const Swords: FC<Props> = ({ difficulty }) => {
  const renderSwords = useCallback(() => {
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

  return (
    <>
      {renderSwords()}
    </>
  )
}
