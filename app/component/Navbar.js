"use client"
import React , {useState} from 'react'
import { kufam, karla } from '../font'
import Image from 'next/image'
import { Sling as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${kufam.className} bg-primary text-white xl:px-28 py-2 flex justify-between`}>
      <div className='flex items-center'>
        <Image src="/logo_dring.png" height={74} width={65} alt='logo image' />
        <h2 className={`${karla.className} font-bold lg:text-[2rem] text-xl`}>RunningAmpNutrition</h2>
      </div>
      <div className='flex justify-center'>
        <div className='md:hidden translate-y-2'>
          <Hamburger className="md:hidden" toggle={setIsOpen} toggled={isOpen}/>
        </div>
        <ul className="md:flex md:gap-10 hidden md:items-center lg:text-2xl text-xl">
          <li>Home</li>
          <li>About</li>
          <li>Catalouge</li>
        </ul>
      </div>
      {isOpen&&<>
        Hello brother how are your i am fine thank you
      </>}
    </nav>
  )
}

export default Navbar
