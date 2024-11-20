import React from 'react'
import { Button1 } from './buttons'
import styles from './style/header.module.css'
import CheapNFT from './cheapNFT'

const SaleCard2 = () => {
  return (
    <div className={styles.saleCard2}>
        <p className='font-semibold text-3xl text-white px-5 pb-5'>Top NFT at a lower price</p>
        <div className='mx-5'>
            <CheapNFT/>
            <CheapNFT/>
            <CheapNFT/>
            <CheapNFT/>
        </div>
        <Button1 text = {"Show me more"}/>
    </div>
  )
}

export default SaleCard2