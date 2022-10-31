import '../styles/globals.css'
import { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'
import { store } from '@features/store/config'
import client from '@gql/Setup'

export type PageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <div className="dark:text-white text-sm md:text-base font-poppins dark:bg-dark-bg">
          {getLayout(<Component {...pageProps} />)}
        </div>
      </Provider>
    </ApolloProvider>
  )
}

export default MyApp
