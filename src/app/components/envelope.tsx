import React from 'react'
import Image from "next/image";
import styles from "./style/header.module.css"
import { Button1, Button2 } from './buttons';

const Envelope = () => {
  return (
    <div>
    <Image
        src="/pleat.png"
        alt="logo"
        width={370}
        height={42}
    />
    <div className={styles.envelope}>
        <div className='flex self-center w-2/3 py-16 content-center' style={{paddingLeft:"10%"}}>
            <div className='w-2/3'>
                <p className={`font-semibold text-slate-300 mb-4 ${styles.bottomScrollText} mb-0`}>Overline</p>
                <p className={`font-semibold text-white mb-4 ${styles.envelopeText1}`}>Cursus vitae sollicitudin donec nascetur. Join now</p>
                <p className={`font-semibold text-slate-300 ${styles.bottomScrollText} mb-0`}>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
                <div className='flex mt-3'>
                    <Button2 text={"Get Started"}/>
                    <div className='mx-3'/>
                    <Button1 text={"Learn More"}/>
                </div>
                {/* <div>
                    <button>
                        <p>Get Started</p>
                    </button>
                    <button>
                        <p>Learn More</p>
                    </button>
                </div> */}
            </div>
        </div>
        <div className='self-center'>
            <Image
                src="/envelope.png"
                alt="logo"
                width={900}
                height={426}
            />
        </div>
    </div>
</div>
  )
}

export default Envelope