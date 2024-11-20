import React from 'react'
import SaleCard1 from './saleCard1'
import SaleCard2 from './saleCard2'
import SaleCard from './saleCard'
import styles from "./style/header.module.css"

const Sale = () => {
  return (
    <div className={`flex justify-center px-20 ${styles.actionCards}`}>
        <SaleCard/>
        <div className='m-5'/>
        <SaleCard1/>
        <div className='m-5'/>
        <SaleCard2/>
    </div>
  )
}

export default Sale