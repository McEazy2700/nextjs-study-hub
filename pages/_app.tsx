import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import { ApolloProvider } from '@apollo/client'
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
      <div className="dark:text-white text-sm md:text-base font-poppins dark:bg-dark-bg">
        {getLayout(<Component {...pageProps} />)}
      </div>
    </ApolloProvider>
  )
}

export default MyApp
