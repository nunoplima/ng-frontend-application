import { DetailedQuest } from '@types'

export type BodyProps = Pick<
  DetailedQuest,
  | 'title'
  | 'description'
  | 'skillTree'
  | 'skill'
  | 'type'
  | 'difficulty'
>