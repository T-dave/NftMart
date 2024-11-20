import React from 'react'
import Image from "next/image";
import styles from "./style/header.module.css"

const BottomScrollCard = ({src}:any) => {
  return (
    <div className='px-3 '>
        <Image
            src={src}
            alt="logo"
            width={89}
            height={89}
            className={styles.bottomScrollImage}
        />
        <p className={`font-normal ${styles.bottomScrollText} text-slate-300 text-center`}>1.51 ETH</p>
    </div>
  )
}

export default BottomScrollCard