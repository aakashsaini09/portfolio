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
    fieldName: 'Email',
    fieldValue: 'aakashsaini948585@gmail.com'
  },
  {
    fieldName: 'Freelance',
    fieldValue: 'Available '
  },
  {
    fieldName: 'Languages',
    fieldValue: 'English, Hindi'
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
          <Tabs>
            <TabsList>
              {/* @ts-ignore */}
              <TabsTrigger>Experience</TabsTrigger>
              {/* @ts-ignore */}
              <TabsTrigger>Education</TabsTrigger>
              {/* @ts-ignore */}
              <TabsTrigger>Skills</TabsTrigger>
              {/* @ts-ignore */}
              <TabsTrigger>About me</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
    </motion.div>
}

export default resume
