import type { NextPage } from 'next'
import Head from 'next/head'

import Calculator from '../components/Calculator'

const Home: NextPage = () => {



  return (

    <div className='container'>

      <Head>
        <title>Calculator</title>
        <meta name="description" content="This is a calculator built with NextJS, React, and Typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='main'>

        <Calculator />

      </main>

    </div>

  )
}

export default Home
