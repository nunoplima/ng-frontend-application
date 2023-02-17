import { useQuery } from '@tanstack/react-query'
import { getQuests } from '../../../api/get-quests'
import { Quests } from '@types'

export const useQuests = () => {
  const requestData = useQuery<Quests>({
    queryKey: ['quests'],
    queryFn: getQuests
  })

  return requestData
}
