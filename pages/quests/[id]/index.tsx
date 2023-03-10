import {
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import type {
  GetStaticProps,
  GetStaticPaths,
} from 'next'
import { Quest, getQuest } from '@features/quest'
import { PageContainer } from '@features/layout'
import { queryClient } from '@api/query-client'
import { getQuests } from '@api/get-quests'
import { Quests } from '@types'


const QuestPage = () => (
  <PageContainer title='quest details'>
    <Quest />
  </PageContainer>
)

export default QuestPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string

  await queryClient.prefetchQuery(['quest', id],
    () => getQuest(id)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const quests: Quests = await getQuests()

  const paths = quests.map(({ id }) => ({
    params: { id: id.toString() },
  }))

  return { paths, fallback: false }
}
