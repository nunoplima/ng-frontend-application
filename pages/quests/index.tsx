import { dehydrate } from '@tanstack/react-query'
import { QuestList } from '@features/quests'
import { PageContainer } from '@features/layout'
import { queryClient } from '@api/query-client'
import { getQuests } from '@api/get-quests'
import type { GetStaticProps } from 'next'
import { Quests } from '@types'

const QuestsPage = () => (
	<PageContainer title='quests'>
		<QuestList />
	</PageContainer>
)

export default QuestsPage

export const getStaticProps: GetStaticProps = async () => {
  await queryClient.prefetchQuery<Quests>(['quests'], getQuests)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}