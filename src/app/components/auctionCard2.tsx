'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

function AuctionsCard2({data}:any) {
    const [liked, setLiked] = useState(data.liked)
    const toggleLike = () => {
        setLiked(!liked)
      };
    
  return (
    <div className='mx-2 p-5 max-w-64'>
        <Link href="/details">
            <Image
                src={data.picture}
                alt="logo"
                width={212}
                height={355}
                className='rounded-xl'
                />
            <div className='mt-2'>
                <p className='font-semibold text-base text-white'>{data.name}</p>
            </div>
            <div className='flex my-4 justify-between'>
                <div className='flex'> 
                    <div className='self-center'>
                        <Image
                            src="/clock.png"
                            alt="logo"
                            width={20}
                            height={20}
                            />
                    </div>
                    <p className='font-semibold text-xs text-white ml-2 self-center'>{data.time}</p>
                </div>
                <div className='self-center px-3 py-2 bg-indigo-950'>
                    <p className='font-semibold text-xs text-indigo-600'>{data.eth} ETH</p>
                </div>
            </div>
        </Link>
        <div className='flex border-t-2 border-slate-700 pt-2 justify-between'>
            <p className='font-semibold text-xs text-neutral-300'>{data.bid} people are bidding</p>
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
                <p className='font-semibold text-xs text-neutral-300 pl-2'>{data.likes}</p>
            </div>
        </div>
    </div>
  )
}

export default AuctionsCard2
