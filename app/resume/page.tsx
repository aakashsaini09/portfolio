"use client";
import Link from "next/link";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
// import {SiTaiwindcss, SiNextDotjs} from 'react-icons/si'

const about = {
  title: 'About me',
  des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quibusdam aspernatur, officiis aliquam qui aut!',
  info: [
  {
    fieldName: 'Name',
    fieldValue: 'Aakash Saini'
  },
  {
    fieldName: 'Experience',
    fieldValue: '12+ Years'
  },
  {
    fieldName: 'Skype',
    fieldValue: 'Aakash.09'
  },
  {
    fieldName: 'Nationality',
    fieldValue: 'India'
  },
  {
    fieldName: 'Freelance',
    fieldValue: 'Available '
  },
  {
    fieldName: 'Languages',
    fieldValue: 'English, Hindi'
  },
  {
    fieldName: 'Email',
    fieldValue: 'aakashsaini948585@gmail.com'
  },

]
}


const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quibusdam aspernatur, officiis aliquam qui aut!',
  items: [
    {
      company: 'First One', 
      position: 'Front-end Stack dev',
      duration: '2022 - 2023'
    },
    {
      company: 'Second One', 
      position: 'Back-end Stack dev',
      duration: '2022 - 2023'
    },
    {
      company: 'Third One', 
      position: 'Full-Stack dev',
      duration: '2022 - 2023'
    },
    {
      company: 'Third One', 
      position: 'Full-Stack dev',
      duration: '2022 - 2023'
    }
  ]
}



const education = {
  icon: '/assets/resume/badge.svg',
  title: 'My Education',
  des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quibusdam aspernatur, officiis aliquam qui aut!',
  items: [
    {
      institution: '100xDEV Online Cource', 
      position: 'Front-end Stack dev',
      duration: '2022 - 2023'
    },
    {
      institution: 'BCA (Batchlors in computer APPlication', 
      position: 'Front-end Stack dev',
      duration: '2021 - 2024'
    },
    {
      institution: 'Open Source Contribution', 
      position: 'Github Open Source',
      duration: '2023 - Present'
    },
    {
      institution: 'Courcera', 
      position: 'Backend & DevOps',
      duration: '2022 - 2023'
    }
  ]
}



const skills = {
  title: '',
  des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quibusdam aspernatur, officiis aliquam qui aut!',
  skillList: [
    {
      icon: <FaCss3/>,
      name: 'css 3'
    },
    {
      icon: <FaHtml5/>,
      name: 'html 5'
    },
    {
      icon: <FaJs/>,
      name: 'javascript'
    },
    {
      icon: <FaNodeJs/>,
      name: 'node-js'
    },
    {
      icon: <FaReact/>,
      name: 'react-js'
    },
    {
      icon: <RiNextjsFill/>,
      name: 'next-js'
    },
    {
      icon: <RiTailwindCssFill/>,
      name: 'tailwind-css'
    },
    {
      icon: <SiPrisma/>,
      name: 'prisma'
    },

  ]
}



const resume = () => {

  return <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1,
      transition: {
        delay: 2.4, 
        duration: 0.4,
        ease: 'easeIn'
      }}} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              {/* @ts-ignore */}
              <TabsTrigger value="experience">Experience</TabsTrigger>
              {/* @ts-ignore */}
              <TabsTrigger value="education">Education</TabsTrigger>
              {/* @ts-ignore */}
              <TabsTrigger value="skills">Skills</TabsTrigger>
              {/* @ts-ignore */}
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full">



              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.des}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}</ul>
                  </ScrollArea>
                </div>
              </TabsContent>




              <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.des}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.position}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}</ul>
                  </ScrollArea>
                </div>
              </TabsContent>


              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold ">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.des}</p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </TabsContent>


              <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.des}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                
              </TabsContent>
            </div>
          </Tabs>
        </div>
    </motion.div>
}

export default resume
