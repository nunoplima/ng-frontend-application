import Head from 'next/head'
import {
  dehydrate,
  QueryClient,
  useQuery
} from '@tanstack/react-query'
import axios from 'axios'
import { Quest } from '@types'

const getQuests = async () => {
	const { data } = await axios.get(`${process.env.BASE_URL || 'http://localhost:3000'}/api/quests`)

	return data
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery<Quest[]>(['quests'], getQuests)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function Home() {
  const { data, isLoading } = useQuery<Quest[]>({
		queryKey: ['quests'],
		queryFn: getQuests
	})

	console.log({ isLoading })

	return (
		<>
			<Head>
				<title>Node Guardians</title>
				<meta name='description' content='Node Guardians frontend' />
			</Head>

			<main></main>
		</>
	)
}
