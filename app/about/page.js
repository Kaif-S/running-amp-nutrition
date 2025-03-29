import Image from 'next/image'
import React from 'react'


export default function About() {
  return (
    <div className=' min-h-dvh text-white bg-secondary py-6 flex flex-col items-center gap-8'>
        
        <h1 className='text-center font-bold text-4xl'>About us</h1>
        <div>
        <Image src="./team.png" width={720} height={480} alt='team png' />
        </div>
      <h2 className='font-bold text-3xl'>Bringing Africa’s Bold & Refreshing Flavors to the World</h2>
      <p className='text-xl w-[76vw]'>At RunningAmpNutrition, we believe that a drink is more than just a refreshment—it’s a story, a tradition, and a taste of home. Rooted in Africa’s rich and diverse cultures, our soft drinks are crafted to celebrate the bold, natural flavors that have been enjoyed for generations.</p>
    </div>
  )
}
