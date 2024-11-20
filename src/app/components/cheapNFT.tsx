'use client'
import React, { useState } from 'react';
import Image from "next/image";

const CheapNFT = () => {
    const [liked, setLiked] = useState(false);
    const toggleLike = () => {
        setLiked(!liked);
      };
    
  return (
    <div className='flex mb-5'>
         <div className='self-center mr-2'>
            <Image
                src="/cheapNFT1.png"
                alt="logo"
                width={100}
                height={100}
                className='rounded-3xl'
            />
        </div>
        <div>
            <div className='mt-2'>
                <p className='font-semibold text-xs text-white'>Vulputate velit viverra volutpat volutpat tristique</p>
            </div>
            <div className='flex my-1 justify-between'>
                <div className='flex'> 
                    <div className='self-center'>
                        <Image
                            src="/clock.png"
                            alt="logo"
                            width={18}
                            height={18}
                            />
                    </div>
                    <p className='font-semibold text-xs text-white ml-2 self-center'>22:59</p>
                </div>
                <div className='self-center px-2 py-1 bg-indigo-950'>
                    <p className='font-semibold text-xs text-indigo-600 text-center'>3.19 ETH</p>
                </div>
            </div>
            <div className='flex pt-2 justify-between'>
                <p className='font-semibold text-xs text-neutral-300'>35 people are bidding</p>
                <div className='self-center flex' onClick={toggleLike}>
                    {liked ? 
                        <Image
                            src="/heart2.png"
                            alt="logo"
                            width={18}
                            height={18}
                        />
                            : 
                        <Image
                        src="/heart1.png"
                        alt="logo"
                        width={18}
                        height={18}
                        />
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheapNFT