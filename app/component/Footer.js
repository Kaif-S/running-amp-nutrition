import Image from 'next/image'
import React from 'react'
import { karla } from '../font'

const Footer = () => {
    return (
        <div className='bg-black flex justify-center items-center text-white gap-2 py-4 flex-col'>
            <div className='flex justify-center items-center text-white gap-8 py-4'>
            <div className='flex items-center'>
                <Image src="/logo_dring.png" height={74} width={65} alt='logo image' />
                <h2 className={`${karla.className} font-bold  md:text-lg text-base`}>RunningAmpNutrition</h2>
            </div>
            |
            <p className='md:text-lg text-base'>All rights are reserved &reg;</p>
            </div>
            <div>
            <a href="https://www.vecteezy.com/free-png/">PNGs by Vecteezy</a>
            </div>
        </div>
    )
}

export default Footer
