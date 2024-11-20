'use client'
import React from 'react'
import { Button1 } from './buttons'
import styles from './style/header.module.css'
import AuctionsCard2 from './auctionCard2'
import Image from "next/image";
import { useSelector } from 'react-redux';
import { RootState } from '../../lib/store';

const SaleCard = () => {
    const data = useSelector((state:RootState) => state.nftData.value);
  return (
    <div className={styles.saleCard2}>
        <p className='font-semibold text-3xl text-white mx-12'>Check out the hottest Sale offers</p>
        <div className='flex ml-5'>
            <AuctionsCard2 data = {data[0]}/>
            <div className='h-28'>
                <Image
                    src="/hotSale.png"
                    alt="logo"
                    width={212}
                    height={204}
                />
            </div>
        </div>
        <Button1 text = {"Show me more"}/>
    </div>
  )
}

export default SaleCard