import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import LandingPage from '@containers/landing-page'


const Home: NextPage = (_props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Untoil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full overflow-x-hidden flex-1 flex-col items-center justify-center text-center">
        <LandingPage />
      </main>
    </div>
  )
}

export default Home

export async function getStaticProps(){
  return {
    props: {}
  }
}
