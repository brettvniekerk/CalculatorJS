import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'

import Calculator from '../components/Calculator'
import Header from '../components/Header'

const Home: NextPage = () => {

  const themes = ['none', 'brown', 'yellow', 'green', 'turqoise', 'lightblue', 'darkblue', 'purple', 'pink', 'orange', 'bloodorange', 'red']

  const [newTheme, setNewTheme] = useState('none')

  const handleClick = () => {
    setNewTheme(
      themes[(themes.indexOf(newTheme)+ 1) % themes.length] // percentage operator important for not doubling the none theme twice
    )
  }

  return (

    <div className='container'>

      <Head>
        <title>Calculator</title>
        <meta name="description" content="This is a calculator built with NextJS, React, and Typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`main ${newTheme === 'none' ? '' : 'is-' + newTheme + '-theme'}`}>

        <Header handleClick={handleClick} />

        <Calculator />

      </main>

    </div>

  )
}

export default Home
