import Head from 'next/head'
import type { AppProps } from 'next/app'
import {
	Hydrate,
	QueryClientProvider
} from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components'
import { queryClient } from '@api/query-client'
import { darkTheme } from '@/styles/theme'
import GlobalStyle from '@/styles/GlobalStyles'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
	require('../mocks')
}

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' href='/favicon.svg' />
				<meta name='robots' content='noindex' />
			</Head>

			<QueryClientProvider client={queryClient}>
				<Hydrate state={pageProps.dehydratedState}>
					<ThemeProvider theme={darkTheme}>
						<GlobalStyle />
						<Component {...pageProps} />
					</ThemeProvider>
				</Hydrate>
			</QueryClientProvider>
		</>
	)
}
