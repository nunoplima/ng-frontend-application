export type Quest = {
  id: number,
  cover: string,
  difficulty: number,
  experience: number,
  gold: number,
  skill: string,
  skillTree: string,
  title: string,
  type: string,
}

export type Quests = Quest[]

export type DetailedQuest =
  & Quest
  & {
    description: string,
    rewards: {
      experience: number,
      gold: number,
    }
  }