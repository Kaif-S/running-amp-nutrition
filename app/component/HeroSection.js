"use client"
import Image from "next/image";
import React from "react";
import { AnimatePresence , motion} from "motion/react";

const HeroSection = () => {
  return (
    <>
      <AnimatePresence>
      <div className="hero-section bg-gradient-to-b from-primary to-secondary flex lg:flex-row items-center flex-col-reverse lg:px-28 lg:pt-24 pt-8  pb-10 lg:pb-20">
        <div className="info-section flex flex-col text-white lg:gap-24 gap-12 justify-center items-center lg:items-start pt-8 lg:pt-0 text-center lg:text-left mx-8 md:mx-0">
          <motion.h2
          
          initial={{opacity:0,translateX:-30}}
          animate={{opacity:1,translateX:0}}

          transition={{
            ease:"easeInOut",
            duration:0.3,
            type:"spring",
            mass:1.5,
          }}
          
          className=" font-bold italic xl:text-5xl lg:text-4xl md:text-3xl text-2xl max-w-[45rem] ">"Vibrant, Refreshing, Uniquely African!" 🍉🥤</motion.h2>
          <motion.p 
          
          initial={{opacity:0,translateX:-30}}
          animate={{opacity:1,translateX:0}}

          transition={{
            ease:"easeInOut",
            duration:0.3,
            type:"spring",
            mass:1.5,
          }}

          className="font-bold xl:text-4xl lg:text-3xl md:text-2xl text-xl max-w-[45rem]">
            Simple, real, and refreshingly different. We bring you soft drinks made with love, inspired by Africa’s bold flavors and rich heritage
          </motion.p>
          <motion.button

            whileHover={{
              scale:1.2,
            }}
            whileTap={{
              scale:0.9
            }}
            
          className=" cursor-pointer capitalize font-bold flex lg:w-64 lg:h-14 w-48 h-10 bg-primary rounded-full justify-center items-center text-2xl lg:text-3xl">
            order now!
          </motion.button>
        </div>
        <motion.div 
        
        initial={{
          translateX:200,
          opacity:0
        }}

        animate={{
          translateX:0,
          opacity:1
        }}

        transition={{
          duration:1,
          type:"spring"
        }}
        
        className="figure">
          <Image src="/hero-section.png" height={560} width={560} alt="image of juice" />
        </motion.div>
      </div>
      </AnimatePresence>
    </>
  )
}

export default HeroSection
