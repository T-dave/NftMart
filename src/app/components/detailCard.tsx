import React from 'react'
import Image from "next/image";
import styles from "./style/header.module.css"
import { Button2 } from './buttons';

const DetailCard = () => {
  return (
    <div className={`flex border border-slate-800 p-5 rounded-3xl ${styles.detailCard}`}>
        <div className='w-1/2 mr-10'>
            <Image
                src="/detailImg.png"
                alt="logo"
                width={584}
                height={658}
            />
        </div>
        <div className='w-1/2 flex flex-col justify-between'>
            <div>
                <p className='font-semibold text-4xl text-white'>Dui accumsan leo vestibulum ornare</p>
                <p className='font-semibold text-base text-slate-300'>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
                <div className={`flex mt-5 ${styles.row}`}>
                    <div className='flex mr-10'>
                        <Image
                            src="/detailProfile.png"
                            alt="logo"
                            width={40}
                            height={40}
                        />
                        <div>
                            <p className='font-normal text-sm text-slate-300'>Creator</p>
                            <p className='font-semibold text-sm text-white'>@brook_sim</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <Image
                            src="/timeLeft.png"
                            alt="logo"
                            width={40}
                            height={40}
                        />
                        <div>
                            <p className='font-normal text-sm text-slate-300'>Collection</p>
                            <p className='font-semibold text-sm text-white'>Afterlife</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.detailPrice}>
                <div className={`flex mb-5 ${styles.row}`}>
                    <div className='mr-5'>
                        <p className='text-sm font-normal text-slate-400'>Current price</p>
                        <div className='flex'>
                            <p className='text-2xl font-semibold text-white self-end'>5.25</p>
                            <p className='text-base font-semibold text-white self-end ml-2'>ETH</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-sm font-normal text-slate-400'>Time Left</p>
                        <p className='text-2xl font-semibold text-white self-end'>5.25</p>
                        <p className='text-sm font-normal text-slate-400'>(01.01.2022 - 01:40:47)</p>
                    </div>
                </div>
                <Button2 text = {"Place a bid"}/>
            </div>
            <div>
                <p className='font-normal text-sm text-slate-300'>History of bids (12 people are bidding)</p>
                <Image
                    src="/graph.png"
                    alt="logo"
                    width={495}
                    height={185}
                />
            </div>
        </div>
    </div>
  )
}

export default DetailCard