import Head from 'next/head'
import {
	dehydrate,
  QueryClient,
} from '@tanstack/react-query'
import {
	getQuests,
	QuestList
} from '@features/quests'
import { PageContainer } from '@features/layout'
import type { GetStaticProps } from 'next'
import { Quests } from '@types'

const QuestsPage = () => (
	<PageContainer title='quests'>
		<QuestList />
	</PageContainer>
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