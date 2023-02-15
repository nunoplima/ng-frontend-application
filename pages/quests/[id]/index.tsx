import Head from 'next/head'
import {
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import type {
  GetStaticProps,
  GetStaticPaths,
} from 'next'
import { Quest, getQuest } from '@features/quest'

const QuestPage = () => (
  <>
    <Head>
      <title>Node Guardians</title>
      <meta name='description' content='Node Guardians frontend' />
    </Head>

    <main>
      <Quest />
    </main>
  </>
)

export default QuestPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const queryClient = new QueryClient()

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
  return {
    paths: [],
    fallback: 'blocking'
  }
}
