import { useQuery } from '@tanstack/react-query'
import { getQuests } from './api'
import { Quest } from '@types'

export const useQuests = () => {
  const requestData = useQuery<Quest[]>({
    queryKey: ['quests'],
    queryFn: getQuests
  })

  return requestData
}
