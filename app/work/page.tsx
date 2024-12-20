"use client";
import { motion } from "framer-motion";
import React, {useState} from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { BsArrowUpRight, BsGithub} from 'react-icons/bs'
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'


const projects = [
  {
    num: '01', 
    category: 'frontend',
    title: 'Chat-App',
    des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quibusdam aspernatur, officiis aliquam qui aut!',
    stack: [
      {name: 'Next-js'}, { name: 'Css 3'}, { name: 'Javascript'}
    ],
    image: '/files/grnd.png',
    live: '', 
    github: ''
  },
  {
    num: '02', 
    category: 'frontend',
    title: 'Chat-App',
    des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quibusdam aspernatur, officiis aliquam qui aut!',
    stack: [
      {name: 'Prisma'}, { name: 'Css 3'}, { name: 'Javascript'}
    ],
    image: '/files/img.jpg',
    live: '', 
    github: ''
  },
  {
    num: '03', 
    category: 'frontend',
    title: 'Chat-App',
    des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quibusdam aspernatur, officiis aliquam qui aut!',
    stack: [
      {name: 'Html 5'}, { name: 'Css 3'}, { name: 'Javascript'}
    ],
    image: '/files/grnd.png',
    live: '', 
    github: ''
  },
]

const work = () => {
  const [project, setproject] = useState(projects[0])
  return (
    <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1}}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
            </div>
          </div>
          <div className="w-full">slider</div>
        </div>
      </div>
    </motion.section>
  )
}

export default work
