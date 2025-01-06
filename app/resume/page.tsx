"use client";
import { FaAws, FaNodeJs, FaDocker } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPrisma, SiTypescript, SiMongodb } from "react-icons/si";
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

const about = {
  title: 'About me',
  des: 'Get to know me better — Personal details, Professional Experience, and how to connect or collaborate with me.',
  info: [
  {
    fieldName: 'Name',
    fieldValue: 'Aakash Saini'
  },
  {
    fieldName: 'Experience',
    fieldValue: '2+ Years'
  },
  {
    fieldName: 'Github',
    fieldValue: 'aakashsaini09'
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
  icon: '/assets/edu.svg',
  title: 'My experience',
  des: 'A snapshot of my professional journey, highlighting impactful projects, hands-on expertise, and growth as a developer.',
  items: [
    {
      company: 'AFAME TECHNOLOGIES', 
      position: 'Full-stack Dev internship',
      duration: 'April 2024 - June 2024'
    },
    {
      company: 'Final Year Project', 
      position: 'Project team Lead (3 students)',
      duration: '2022 - 2023'
    },
    // {
    //   company: 'XYZ Tech Limited', 
    //   position: 'Full-Stack dev',
    //   duration: '2022 - 2023'
    // },
    // {
    //   company: 'ABC', 
    //   position: 'Full-Stack dev',
    //   duration: '2022 - 2023'
    // }
  ]
}



const education = {
  icon: '/assets/resume/badge.svg',
  title: 'My Education',
  des: `A glimpse into my education journey, showcasing my academic achievements and passion for continuous learning in tech.`,
  items: [
    {
      institution: '100xDev Online Course', 
      position: 'Fullstack & DevOps',
      duration: '2024 - Present'
    },
    {
      institution: 'GC Govt, Collage Jind', 
      position: 'Computer Science Student (BCA)',
      duration: '2021 - 2024'
    },
    {
      institution: 'Open Source Contribution', 
      position: 'Github Open Source',
      duration: '2023 - Present'
    },
    {
      institution: 'Coursera (Online Course)', 
      position: 'Backend Development',
      duration: '2022 - 2023'
    }
  ]
}



const skills = {
  title: '',
  des: 'Explore my technical toolkit, showcasing expertise in web development, DevOps, and a passion for mastering modern technologies.',
  skillList: [
    {
      icon: <RiTailwindCssFill/>,
      name: 'tailwind-css'
    },
    {
      icon: <SiTypescript/>,
      name: 'typescript'
    },
    {
      icon: <RiNextjsFill/>,
      name: 'next-js'
    },
    {
      icon: <FaNodeJs/>,
      name: 'node-js'
    },
    {
      icon: <SiMongodb/>,
      name: 'mongo-db'
    },
    {
      icon: <FaAws/>,
      name: 'aws'
    },
    {
      icon: <SiPrisma/>,
      name: 'prisma'
    },
    {
      icon: <FaDocker/>,
      name: 'docker'
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
          <Tabs defaultValue="education" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full">



            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.des}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
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
