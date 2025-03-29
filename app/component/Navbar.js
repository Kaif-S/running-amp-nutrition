"use client"
import React , {useState} from 'react'
import { kufam, karla } from '../font'
import Image from 'next/image'
import { Sling as Hamburger } from 'hamburger-react';
import { motion , AnimatePresence} from "motion/react"; 
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${kufam.className} bg-primary text-white xl:px-28 py-2 flex justify-between`}>
      <div className='flex items-center'>
        <Image src="/logo_dring.png" height={74} width={65} alt='logo image' />
        <h2 className={`${karla.className} font-bold lg:text-[2rem] md:text-xl text-lg`}>RunningAmpNutrition</h2>
      </div>
      <div className='flex justify-center'>
        <div className='md:hidden translate-y-2'>
          <Hamburger className="md:hidden" toggle={setIsOpen} toggled={isOpen}/>
        </div>
        <ul className="md:flex md:gap-10 hidden md:items-center lg:text-2xl text-xl">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/#">Catalouge</Link></li>
        </ul>
      </div>
      <AnimatePresence>
      {isOpen&&<motion.div 

      initial={{translateX:100,opacity:0}}
      animate={{translateX:0,opacity:1}}
      exit={{translateX:100,opacity:0}}
      transition={{
        type:"spring",
        bounce:0.25,
        mass:0.5
      }}
      className='absolute backdrop-blur-[30px] bg-orange-glass top-[5rem] right-0 min-h-full max-h-[9999px] w-1/2 text-center'>
          <ul>
            <li className='mx-9 my-7 text-xl'><Link href="/">Home</Link></li>
            <li className='mx-9 my-7 text-xl'><Link href="/about">About</Link></li>
            <li className='mx-9 my-7 text-xl'><Link href="/#">Catalouge</Link></li>
          </ul>
        </motion.div>
        }
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
