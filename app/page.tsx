import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi'

const Home = () => {
  return <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-7 xl:pb-9">
          <div className="text text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-accent">Aakash Saini</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">Full Stack Developer with a flair for DevOps, diving deep into the Web3 frontier to shape the future of the web.</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button className="uppercase gap-2 flex items-center" variant='outline' size='lg'>
                <a href="https://drive.google.com/file/d/1VFMscGSPOi5B6ofCq1BUWmMNrKO6IHVg/view?usp=sharing" target="_blank">Download CV</a>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
              </div>
            </div>
          </div>
          <div className="photo order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
        <Stats/>
      </div>
    </section>
  
}

export default Home
