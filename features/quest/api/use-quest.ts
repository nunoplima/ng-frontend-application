import { useQuery } from '@tanstack/react-query'
import { getQuest } from '@api/get-quest'
import { Quest } from '@types'

export const useQuest = (id: string) => {
  const requestData = useQuery<Quest>({
    queryKey: ['quest', id],
    queryFn: () => getQuest(id)
  })

  return requestData
}
