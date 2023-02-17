import { QueryClient } from '@tanstack/react-query'

const defaultQueryConfig = { staleTime: 1000 * 60 * 5 }

export const queryClient = new QueryClient({
  defaultOptions: { queries: defaultQueryConfig },
})