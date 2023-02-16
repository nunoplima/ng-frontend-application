import { FC } from 'react'
import Head from 'next/head'
import { PageTopBar } from '../page-top-bar'
import { PageContainerProps as Props } from './types'
import * as S from './page-container.styles'

export const PageContainer: FC<Props> = ({
  title,
  children,
}) => (
  <S.Container>
    <Head>
      <title>{`Node Guardians - ${title}`}</title>
      <meta name='description' content='Node Guardians frontend' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <PageTopBar />

    <S.Main>
      {children}
    </S.Main>
  </S.Container>
)
