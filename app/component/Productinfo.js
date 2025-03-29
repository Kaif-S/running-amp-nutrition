import React from 'react';
import Image from 'next/image';
import { AnimatePresence , motion} from "motion/react";

export default function Productinfo() {
  return (
    <AnimatePresence>
    <div className='info-section bg-secondary text-white lg:px-28 lg:text-left text-center pb-8'>
      <h2 className='font-bold xl:text-5xl lg:text-4xl md:text-3xl text-2xl'>How our products are made</h2>
      <div className='flex justify-between flex-col md:flex-row'>
        <motion.div 
        
        initial={{
          translateX:-100,
          opacity:0
        }}
        whileInView={{
          translateX:0,
          opacity:1
        }}

        className='flex items-center justify-center md:justify-start'>
        <Image src="/fruits_falling.png" width={558} height={466} alt='fruits falling png'/>
        </motion.div>
        <motion.div 
        
          initial={{translateY:100,opacity:0}}
          whileInView={{translateY:0,opacity:1}}
          transition={{
            type:"spring",
          }}
        
          className='product-info md:text-right text-center lg:gap-20 gap-10 flex flex-col items-center mt-10 lg:mt-16'>
          <p className=' lg:text-3xl md:text-2xl text-xl font-semibold max-w-[38rem] '>At Running Amp Nutrition, every bottle tells a story of authenticity, care, and quality. Here’s how we bring Africa’s boldest and most refreshing flavors to life:</p>
          <p className=' lg:text-3xl md:text-2xl text-xl font-semibold max-w-[38rem] '>100% Authentic and natural ways are used to made these soft drinks. specially less in calories and very flavorful</p>

        </motion.div>
      </div>
    </div>
    </AnimatePresence>
  )
}
