'use client'
import React from 'react'
import Link from 'next/link'
import styles from "./style/header.module.css"
import AuctionsCard from './auctionsCard'
import { useSelector } from 'react-redux';
import { RootState } from '../../lib/store';

function Auctions() {
    const data = useSelector((state:RootState) => state.nftData.value);
  return (
    <div style={{alignItems:'center'}}>
        <p className='font-semibold text-4xl text-white text-center mt-20 mb-10'>
        Latest live auctions
        </p>
        <div className={styles.actionCards}>
            {data.map((item, index) => (
                <div key ={index}>
        <AuctionsCard data = {item}/>
                </div>
            ))};
        </div>
    </div>
  )
}

export default Auctions