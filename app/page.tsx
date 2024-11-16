import Navbar from "./_comp/Navbar";
import Hero from "./_comp/Hero";
import { HoverEffect } from "./components/ui/card-hover-effect";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";
import ScrollBasedVelocityDemo from "./components/scrollToMoveTxt";
import WobbleCard  from "./components/WobbleCard";
import Skills from "./_comp/Skills";
import End from "./_comp/End";
import Footer from "./_comp/Footer";
import { Timeline } from "./components/ui/timeline";
import './assets/style.css'
import Robot from "./components/Robot";
export default function Home() {
  const content= [
    {
      title: "Silent Shout",
      description: "Receive anonymous feedback from your friends and family.",
      link: "https://silent-shout.netlify.app",
      img: '/silent.png'
    },
    {
      title: "QuillVibes",
      description: "Write or generate blogs with AI assistance and publish them.",
      link: "https://quill-vibes.vercel.app/",
      img: '/ib.jpg'
    },
        {
      title: "ToolsHub",
      description: "Get access of multiple usefull tools at one place for free.",
      link: "https://mini-tool.netlify.app/",
      img: '/toolshub.png'
    },
    {
      title: "CodeCollab",
      description: "Write code with your friends in real-time. Work on same Project Together.",
      link: "https://github.com/aakashsaini09/CodeCollab",
      img: '/codeing.png'
    },
    {
      title: "Cryoto Tracker",
      description: "Crypto tracking application that offers prices updates & one-year data trends.",
      link: "https://coinmonster.netlify.app/",
      img: '/coin.png'
    },
    {
      title: "Portfolio",
      description: "My personal portfolio website to showcase my work and skills.",
      link: "https://github.com/aakashsaini09/portfolio",
      img: '/folio.png'
    },
  ]
  
  const timelineData = [
    {
      title: "2021-2024",
      content: (
        <div>
          <h3 className="font-bold text-3xl pt-3">Completed My Bachelor's Degree (BCA)</h3>
          {/* <p className="text-slate-400 pt-1 pb-5 pr-10">I completed my Bachelor's in Computer Applications from the Department of Information and Computer Sciences in Haryana, India, and graduated in Spring 2024.</p> */}
          <p className="text-slate-400 pt-1 pb-5 pr-10 font-sans">⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, AP, AI etc.<br />
            ⚡ Apart from this, I have done courses on Full Stack Development, DevOps and Cloud Computing.
          </p>
            <img className="filter grayscale hover:grayscale-0" src="/bca.jpg" alt="Project Image" />
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h3 className="font-bold text-3xl pt-3 pb-1 text-white">Front-End Developer Intern (3 Months)</h3>
          <p className="text-slate-500 pt-1 pb-1 font-sans">Skils: React-Vite, Tailwind-CSS, JavaScript, Material-UI, Figma</p>
          <p className="pb-4 text-slate-400">
            ✅ Designed and built the company website from start. <br />
            ✅ Worked in a team of 4 developers. <br />
            ✅ Deployed and managed the website. <br />
          </p>
          <div className="w-full flex justify-center items-center">
            <img className="filter grayscale hover:grayscale-0" src="/internship.jpg" alt="Project Image" />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h3 className="font-bold text-3xl pt-3 pb-1 font-sans text-white">Contributing to Open Source and Learning New Skills</h3>
          <p className="text-slate-500 pb-3">Learning DevOps and advanced web development topics, such as system design, server and database scaling, Kubernetes. Additionally, I am exploring Web3 technologies, including Solana, Hardhat, Solidity, smart contracts, and Chainlink.</p>
          <img className="filter grayscale hover:grayscale-0" src="/last.jpg" alt="Project Image" />
        </div>
      ),
    },
    // {
    //   title: "2024 End",
    //   content: (
    //     <div>
    //       <h3 className="font-bold text-3xl py-3">This is a project that I have been working on.</h3>
    //       <img src="/ib.jpg" alt="Project Image" />
    //     </div>
    //   ),
    // },
  ];
  // https://drive.google.com/file/d/1EMl1e9Cc2498J7h4PyLkmLb5Gbrph3fP/view?usp=sharing
  return (
    <main className="h-[200vh] w-full bg-[#131425]">
      <Hero/>
      {/* ScrollMoveText */}
      <div className="w-full px-4 pt-20 md:pt-10 md:px-28 gap-6 bg-[#131425]">
      <ScrollBasedVelocityDemo/>
        <ScrollBasedVelocityDemo/>
      </div>


      {/* Resume Download button */}
      <div className="w-full min-h-20 flex justify-center items-center my-12 bg-[#131425]">
        <HoverBorderGradient url="https://drive.google.com/file/d/1VFMscGSPOi5B6ofCq1BUWmMNrKO6IHVg/view?usp=sharing" clockwise={true} duration={1} children={"Download Resume"} />
      </div>

      <div className="px-6 md:px-28 bg-[#131425] py-20 pb-56">
        <WobbleCard/>
      </div>
      {/* skill icons */}
      <Skills/>
      {/* Project Section */}
      <div id="projects" className="px-5 md:px-28 gap-1 min-h-[50vh] bg-[#131425]">
        <div className="projects min-h-24 md:min-h-36 w-full bg-gray-800 ">
          <h2 className="relative ml-6 md:ml-10 top-16 md:top-16 text-white font-bold font-mono text-6xl md:text-9xl">Projects</h2>
       </div>
        <HoverEffect items={content}/>
      </div>

<div className="py-16 bg-[#131425]">
    <Timeline data={timelineData}/>
</div>
<End/>
<div className="w-full min-h-[50vh] flex justify-center items-center py-12 bg-[#131425]">
    {/* <HoverBorderGradient url="https://www.linkedin.com/in/-aakashsaini/" className="text-base" clockwise={true} duration={0.5} children={"Let's get in touch"} /> */}
    <Robot/>
</div>

     <Footer/>
      <div className="fixed w-full m-auto bottom-0 z-50">
        <Navbar/>
      </div>
    </main>
  );
}
   
