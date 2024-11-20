'use client'
import React, { useState } from 'react';
import Image from "next/image";
import styles from "./header.module.css"
import Link from 'next/link';

function AuctionsCard({data}) {
    const [liked, setLiked] = useState(data.liked)
    const toggleLike = () => {
        setLiked(!liked)
      };
  return (
    <div className='border p-5 border-slate-700 rounded-xl mx-3'>  
        <Link href="/details">
            <div className='self-center'>
            <Image
                src={data.picture}
                alt="logo"
                width={400}
                height={520}
                className='rounded-xl'
                />
            </div>
            <div className='flex justify-between mt-2'>
                <p className='font-semibold text-base text-white w-2/3'>{data.name}</p>
                <div className='self-center px-3 py-2 bg-indigo-950'>
                    <p className='font-semibold text-xs text-indigo-600'>{data.eth}</p>
                </div>
            </div>
            <div className='flex my-4'>
                <div className='self-center'>
                    <Image
                        src="/clock.png"
                        alt="logo"
                        width={20}
                        height={20}
                        />
                </div>
                <p className='font-semibold text-xs text-white ml-2 self-center'>{data.time} min left</p>
            </div>
        </Link>
        <div className='flex border-t-2 pt-2 border-slate-700 justify-between'>
            <div className='flex'>
                <div className='flex mr-2 '>
                    <Image
                            src="/01.png"
                            alt="logo"
                            width={18}
                            height={18}
                    />
                    <Image
                            src="/02.png"
                            alt="logo"
                            width={18}
                            height={18}
                    />
                    <Image
                            src="/03.png"
                            alt="logo"
                            width={18}
                            height={18}
                    />
                    <Image
                            src="/04.png"
                            alt="logo"
                            width={18}
                            height={18}
                    />
                </div>
                <p className='font-semibold text-xs text-neutral-300'>35 people are bidding</p>
            </div>
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
                
                <p className='font-semibold text-xs text-neutral-300 pl-2'>570</p>
            </div>
        </div>
    </div>
  )
}

export default AuctionsCard