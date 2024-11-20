import React from 'react'
import Image from "next/image";
import Envelope from './envelope';
import styles from "./style/header.module.css"

const Stat = () => {
  return (
    <div className='my-20'>
         <div className='flex justify-around mb-20'>
            <div className='flex flex-col align-middle'>
                <div className='self-center'>   
                <Image
                        src="/stat1.png"
                        alt="logo"
                        width={32}
                        height={32}
                        className={styles.statImage1}
                    />
                </div>
                <p className={`font-semibold ${styles.statText1} text-white`}>300k</p>
                <p className={`font-semibold text-slate-400 text-center ${styles.statText2}`}>Users Active</p>
            </div>
            <div className='flex flex-col align-middle'>
                <div className='self-center'>   
                <Image
                        src="/stat2.png"
                        alt="logo"
                        width={32}
                        height={32}
                        className={styles.statImage1}
                    />
                </div>
                <p className={`font-semibold ${styles.statText1} text-white`}>52.5k</p>
                <p className={`font-semibold text-slate-400 text-center ${styles.statText2}`}>Artworks</p>
            </div>
            <div className='flex flex-col align-middle'>
                <div className='self-center'>   
                <Image
                        src="/stat3.png"
                        alt="logo"
                        width={32}
                        height={32}
                        className={styles.statImage1}
                    />
                </div>
                <p className={`font-semibold ${styles.statText1} text-white`}>17.5k</p>
                <p className={`font-semibold text-slate-400 text-center ${styles.statText2}`}>Artists</p>
            </div>
            <div className='flex flex-col align-middle'>
                <div className='self-center'>   
                <Image
                        src="/stat4.png"
                        alt="logo"
                        width={32}
                        height={32}
                        className={styles.statImage1}
                    />
                </div>
                <p className={`font-semibold ${styles.statText1} text-white`}>35.58</p>
                <p className={`font-semibold text-slate-400 text-center ${styles.statText2}`}>Eth Spent</p>
            </div>
        </div>
        <div className='px-24'>
            <Envelope/>
        </div>
    </div>
  )
}

export default Stat