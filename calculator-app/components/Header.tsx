import styles from '../styles/Header.module.scss'

// interface for types
interface HeaderProps {
  handleClick: () => void;
}

const Header = ({ handleClick }: HeaderProps) => {
  return (

    <div className={styles['header']}>
      <h1 className={styles['title']} onClick={handleClick}>CalculatorJS</h1>
    </div>

  )
}

export default Header