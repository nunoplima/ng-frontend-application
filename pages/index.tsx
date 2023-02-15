import Head from 'next/head'
import {
  dehydrate,
  QueryClient,
} from '@tanstack/react-query'
import {
	getQuests,
	QuestList
} from '@features/quests'
import { Quest } from '@types'

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
	return (
		<>
			<Head>
				<title>Node Guardians</title>
				<meta name='description' content='Node Guardians frontend' />
			</Head>

			<main>
				<QuestList />
			</main>
		</>
	)
}
