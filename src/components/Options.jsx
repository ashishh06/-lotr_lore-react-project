import React from 'react'
import styles from './options.module.css'

export default function Options(props) {

  const { selection, setSelection } = props

  const questions = [
    'character',
    'movie',
    'book'
  ]
  // console.log('selection ', selection);
  return (
    <div className='buttonContainer'>
      {questions.map((question, index) => {
        return (
          <button onClick={setSelection(question)}
            className={`${styles.button} 
            ${question === selection ? styles.selectedButton : styles.nonSelectedButton}`} 
            key={index}>{question}</button>
        )
      })}

    </div>
  )
}
