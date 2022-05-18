import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import Calculator from '../components/Calculator'

const Home: NextPage = () => {



  return (

    <div className={styles.container}>

      <Head>
        <title>Calculator</title>
        <meta name="description" content="This is a calculator built with NextJS, React, and Typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles['main']}>

        <Calculator />

      </main>

    </div>

  )
}

export default Home
