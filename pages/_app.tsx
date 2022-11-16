import React, { ReactElement, ReactNode } from 'react'
import '../styles/globals.css'
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/thumbnail/lib/styles/index.css';
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import { NextPage } from 'next'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'
import { store } from '@features/store/config'
import client from '@gql/Setup'
import { Worker } from '@react-pdf-viewer/core'

export type PageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
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
        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.0.279/pdf.worker.min.js">
          <ThemeProvider enableSystem={true} attribute="class">
            <div className="dark:text-white text-sm md:text-base font-poppins dark:bg-dark-bg">
              {getLayout(<Component {...pageProps} />)}
            </div>
          </ThemeProvider>
        </Worker>
      </Provider>
    </ApolloProvider>
  )
}

export default MyApp
