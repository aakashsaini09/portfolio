"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {
  return <div className="w-full h-full relative">
      <motion.div 
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn'}
        }}
        >
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut'}
          }} 
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] overflow-hidden rounded-full absolute mix-blend-lighten">
          <Image 
            src='/files/img.png' 
            priority 
            quality={100} 
            fill 
            alt="Img Not Found"
            draggable={false} 
            className="object-contain rounded-full filter grayscale brightness-50" 
          />
          {/* <div className="absolute bottom-0 left-0 w-14 h-full bg-gradient-to-r from-[#c5c5d4] to-transparent z-0"></div> */}
          <div className="absolute top-0 right-0 w-50 h-full bg-gradient-to-bl from-[#1c1c22] to-transparent z-0"></div>
  {/* <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tl from-[#1c1c22] to-transparent z-0"></div> */}
        </motion.div>

        {/* circle */}
        <motion.svg
          className='w-[300px] xl:w-[500px] h-[300px] xl:h-[500px]'
          fill='transparent'
          viewBox='0 0 506 506'
          xmlns='http://www.w3.org/2000/svg'
          >
          <motion.circle 
            cx='253' 
            cy='253' 
            r='253' 
            stroke='#fce703'
            strokeWidth='4'
            strokeLinecap='round'
            strokeLinejoin='round'
            initial={{strokeDasharray: '24 10 0 0'}}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 95 72', '4 250 22 22'],
              rotate: [120, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
             />
        </motion.svg> 
      </motion.div>
    </div>

}

export default Photo
