"use client";
import { BsArrowDownRight} from 'react-icons/bs'
import Link from 'next/link';
import {motion} from 'framer-motion'


const service = [
  {
    num: '01',
    title: 'Frontend Web',
    des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, animi! Illum obcaecati nemo, odio .',
    href: ''
  },
  {
    num: '02',
    title: 'Backend Web',
    des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, animi! Illum obcaecati nemo, odio .',
    href: ''
  },
  {
    num: '03',
    title: 'Full Stack',
    des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, animi! Illum obcaecati nemo, odio .',
    href: ''
  },
  {
    num: '04',
    title: 'DevOps',
    des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, animi! Illum obcaecati nemo, odio .',
    href: ''
  },
]
const services = () => {
  return <section className='py-12 xl:py-10 min-h-[80vh] flex flex-col justify-center'>
    <div className="container mx-auto">
      <motion.div
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: { 
            delay: 2.4, 
            duration: 0.4, 
            ease: 'easeIn'}}}
            className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
          {service.map((item, index) => {
            return <div key={index} className='flex flex-1 flex-col gap-6 group justify-center'>
              <div className='w-full flex justify-between items-center'>
                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                  {item.num}
                </div>
                <Link href={item.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                  <BsArrowDownRight className='text-primary text-3xl'/>
                </Link>
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
                {item.title}
              </h2>
              <p className='text-white/60 '>
                {item.des}
              </p>
              <div className='border-b border-white/20 w-full'></div>
            </div>
          })}
        </motion.div>
    </div>
  </section>
}

export default services
