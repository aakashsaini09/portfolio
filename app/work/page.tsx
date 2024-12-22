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
import WorkSliderBtns from "@/components/WorkSliderBtns";


const projects = [
  {
    num: '01', 
    category: 'fullstack',
    title: 'Silent-Shout',
    des: 'Share your unique URL to collect anonymous feedback effortlessly. Features include login/signup, message controls, and a feedback dashboard.',
    stack: [
      {name: 'React-Vite'}, { name: 'Prisma'}, { name: 'Tailwind-CSS'}
    ],
    image: '/soon.webp',
    live: 'https://silent-shout.netlify.app/', 
    github: 'https://github.com/aakashsaini09/Silent-Shout'
  },
  {
    num: '02', 
    category: 'fullstack',
    title: 'QuillVibes',
    des: 'Users can write and publish their own blogs or generate content with AI assistance. The scalable, open- source web application includes multiple features.',
    stack: [
      {name: 'React-JS'}, { name: 'TypeScript'}, { name: 'Tailwind-CSS'}, { name: 'AWS'}
    ],
    image: '/soon.webp',
    live: 'https://quill-vibes.vercel.app/', 
    github: 'https://github.com/aakashsaini09/QuillVibes'
  },
  {
    num: '03', 
    category: 'fullstack',
    title: 'ChatNest',
    des: 'Connect and chat in real-time with this user-friendly web application. Features include login/signup, editable profiles with photos, online status updates via WebSockets, and seamless user search functionality.',
    stack: [
      {name: 'React-Vite'}, { name: 'Web-Sockets'}, { name: 'Mongo-DB'}
    ],
    image: '/soon.webp',
    live: 'https://github.com/aakashsaini09/ChatNest', 
    github: 'https://github.com/aakashsaini09/ChatNest'
  },
  {
    num: '04', 
    category: 'frontend',
    title: 'CodeCollab',
    des: 'Create or join coding rooms to collaborate in real-time. Features include live editing, user lists, and join/leave notifications.',
    stack: [
      {name: 'WebSockets'}, { name: 'React-JS'}, { name: 'Tailwind-CSS'}
    ],
    image: '/soon.webp',
    live: 'https://coding-bros.netlify.app/', 
    github: 'https://github.com/aakashsaini09/CodeCollab'
  },
]

const page = () => {
  const [project, setproject] = useState(projects[0])
  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    // update
    setproject(projects[currentIndex])
  }
  return (
    <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: {
      delay: 2.4,
      duration: 0.4,
      ease: 'easeIn'
    }}}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.des}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return <li className="text-xl text-accent" key={index}>
                    {item.name}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                })}
              </ul>
              <div className="border border-white/20"></div>


              <div className="flex items-center gap-4">
                <Link target="_blank" href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>


                <Link target="_blank" href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>


          {/* slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}>
              {projects.map((Item, index) => {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center bg-pink-50/20 items-center">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* img */}
                    <div className="">
                      <Image 
                        src={Item.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              })}
              <WorkSliderBtns btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all z-10" containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 w-full justify-between xl:w-max xl:justify-none" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default page
