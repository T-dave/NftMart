'use client'
import React from 'react'
import Link from 'next/link'
import AuctionsCard2 from './auctionCard2'
import styles from "./style/header.module.css"
import {Button1} from './buttons'
import { useSelector } from 'react-redux';
import { RootState } from '../../lib/store';

function Overline3({text}:any) {
    const data = useSelector((state:RootState) => state.nftData.overline);
  return (
    <div className='py-20 mx-24 border-b border-slate-800'>
        <p className='font-semibold text-sm text-slate-300 mb-4 text-center'>Overline</p>
        <p className='font-semibold text-4xl text-white text-center m-5'>
        {text}
        </p>
        <div className='flex justify-center mb-8 flex-wrap'>
            <p className='text-base font-medium text-slate-300 border-2 p-2 border-stone-900 mr-4 rounded-lg'>Architecture</p>
            <p className='text-base font-medium text-slate-300 border-2 p-2 border-stone-700 mr-4 rounded-lg'>Photography</p>
            <p className='text-base font-medium text-slate-300 border-2 p-2 border-stone-900 mr-4 rounded-lg'>Games</p>
            <p className='text-base font-medium text-slate-300 border-2 p-2 border-stone-900 rounded-lg'>Music</p>
        </div>
        <div className={styles.actionCards}>
        {data.map((item, index) => (
                <div key ={index}>
        <AuctionsCard2 data = {item}/>
                </div>
            ))};
            
        </div>
        <div style={{alignItems:'center', justifyContent:'center'}}>
          <div className=' justify-center mt-5'><Button1 text={"Show me more"}/><div></div></div>
        </div>
        
    </div>
  )
}

export default Overline3