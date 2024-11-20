import React from 'react'
import Image from "next/image";
import styles from './style/header.module.css'
import { Button2 } from './buttons';

const SaleCard1 = () => {
  return (
    <div className={styles.saleCard1}>
        <Image
            src="/hand.png"
            alt="logo"
            width={448}
            height={644}
        />
        <div className={styles.bottomSale}>
            <div className='w-5/6'>
                <p className='font-semibold text-2xl text-white mb-3'>Get started creating & selling your NFTs</p>
                <p className='font-normal text-sm text-slate-300 mt-3 mb-7'>Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat. Mi est sit.</p>
            </div>
            <Button2 text = {"Get started"}/>
        </div>
    </div>
  )
}

export default SaleCard1