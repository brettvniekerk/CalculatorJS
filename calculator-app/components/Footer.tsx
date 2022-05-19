import styles from '../styles/Footer.module.scss'

const Footer = () => {

  const goToSourceCode = () => {
    window.open('https://github.com/brettvniekerk/CalculatorJS', '_blank', 'noopener') // noopener used for security
  }

  return (

    <div className={styles['footer']}>
      <p className={styles['footer-text']} onClick={goToSourceCode}>{`This is a reactive and responsive calculator built with Typescript, React, and NextJS (with a few secrets)! Feel free to look around!`}</p>
    </div>

  )
}

export default Footer