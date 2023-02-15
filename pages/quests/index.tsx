import Head from 'next/head'
import {
	dehydrate,
  QueryClient,
} from '@tanstack/react-query'
import {
	getQuests,
	QuestList
} from '@features/quests'
import type { GetStaticProps } from 'next'
import { Quests } from '@types'

const QuestsPage = () => (
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

export default QuestsPage

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery<Quests>(['quests'], getQuests)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}