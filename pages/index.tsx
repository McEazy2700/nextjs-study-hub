import type { NextPage } from 'next'
import Head from 'next/head'
import LandingPage from '@containers/landing-page'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Untoil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <LandingPage />
      </main>
    </div>
  )
}

export default Home
