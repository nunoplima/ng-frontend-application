import { useRef } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import {
	Hydrate,
	QueryClient,
	QueryClientConfig,
	QueryClientProvider
} from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '@/styles/theme'
import GlobalStyle from '@/styles/GlobalStyles'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
	require('../mocks')
}

const config: QueryClientConfig = {
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5
		},
		mutations: {
			retry: 5,
			retryDelay: 500
		}
	}
}

export default function App({ Component, pageProps }: AppProps) {
	const queryClient = useRef(new QueryClient(config))

	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' href='/favicon.svg' />
				<meta name='robots' content='noindex' />
			</Head>

			<QueryClientProvider client={queryClient.current}>
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
