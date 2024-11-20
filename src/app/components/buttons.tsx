import React from 'react'
import styles from './style/header.module.css'
import styles2 from './style/navbar.module.css'

export function Button1({text}) {
  return (
    <button className={`${styles2.button} ${styles2.button1}`}>
        <p className={styles2.buttonText} style={{color:"#7780A1"}}>{text}</p>
    </button>
      )
}

export function Button2({text}) {
    return (
      <button className={`${styles2.button} ${styles2.button2}`}>
          <p className={styles2.buttonText} style={{color:"#FFF"}}>{text}</p>
      </button>
    )
  }
