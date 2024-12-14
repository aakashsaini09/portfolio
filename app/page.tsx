import { Button } from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi'
const Home = () => {
  return <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text text-center xl:text-left ">
            <span>Software Developer</span>
            <h1 className="">Hello I'm <br /> <span>Aakash Saini</span></h1>
          </div>
          <div className="photo">photo</div>
        </div>
      </div>
    </section>
  
}

export default Home
