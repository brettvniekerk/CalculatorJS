import styles from '../styles/Calculator.module.scss'
import React, { useState, useEffect } from 'react'

const Calculator = () => {

  const [result, setResult] = useState('') // value for result
  const [currentCalc, setCurrentCalc] = useState('') // value for current calculation

  const operators = ['+', '-', '*', '/', '.'] // operator values

  // handle button click
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    const buttonValue = (e.target as HTMLElement).innerText; // buttonValue now stores target as HTMLlement so it can use innerText without Typescript throwing an error

    if (
      operators.includes(buttonValue) && currentCalc === '' || // if the currentCalc is empty ( fresh calculation ) and the button pressed's value is an operator ( i.e. included in the operators array )
      operators.includes(buttonValue) && operators.includes(currentCalc.slice(-1)) // if the currentCalc ends with an operator and the button pressed's value is an operator
    ) {
      return; // do nothing
    }

    setCurrentCalc(currentCalc + buttonValue) // adds the button's value to current calculation expression

    if (!operators.includes(buttonValue)) { // if the last button pressed was not an operator
      setResult(eval(currentCalc + buttonValue).toString()) // evaluate the calculation -- needs to add the last button pressed as it would not update until next render
    }

  }

  // submit and evaluate calculation
  const submitCalc = () => {
    if (currentCalc == '') { return } // cannot make undefined toString so return if expression empty

    setCurrentCalc(eval(currentCalc).toString()) // just replaces calc field 
  }

  // clear calculation
  const clearCalc = () => {
    if (currentCalc == '') { return } // no need to do anything if theres nothing there

    setCurrentCalc('')
    setResult('')
  }

  return (

    <div className={styles['calculator']}>

      <div className={styles['calculator-top']} onClick={clearCalc}>
        <span className={styles['calculation-expression']}>{currentCalc || 0}</span> {/* if no current calculation show 0 */}
        <span className={styles['calculation-result']}>&emsp;{currentCalc === result ? `` : `${result || 0}`}</span> {/* only show result if the current calculation and result dont match */}
      </div>

      <div className={styles['calculator-body']}>
        <div className={styles['one']} onClick={handleClick}>{`1`}</div>
        <div className={styles['two']} onClick={handleClick}>{`2`}</div>
        <div className={styles['three']} onClick={handleClick}>{`3`}</div>
        <div className={styles['four']} onClick={handleClick}>{`4`}</div>
        <div className={styles['five']} onClick={handleClick}>{`5`}</div>
        <div className={styles['six']} onClick={handleClick}>{`6`}</div>
        <div className={styles['seven']} onClick={handleClick}>{`7`}</div>
        <div className={styles['eight']} onClick={handleClick}>{`8`}</div>
        <div className={styles['nine']} onClick={handleClick}>{`9`}</div>
        <div className={styles['zero']} onClick={handleClick}>{`0`}</div>
        <div className={styles['decimal']} onClick={handleClick}>{`.`}</div>
        <div className={styles['add']} onClick={handleClick}>{`+`}</div>
        <div className={styles['subtract']} onClick={handleClick}>{`-`}</div>
        <div className={styles['multiply']} onClick={handleClick}>{`*`}</div>
        <div className={styles['divide']} onClick={handleClick}>{`/`}</div>
        
        <div className={styles['submit']} onClick={submitCalc}>{`=`}</div>
      </div>

    </div>

  )

}

export default Calculator