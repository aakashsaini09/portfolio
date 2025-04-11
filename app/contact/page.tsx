"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BiCheckDouble } from "react-icons/bi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from "framer-motion";
import { useState } from "react";
const info = [
  {
    icon: <FaPhoneAlt/>,
    title: 'Phone',
    des: '(+91) 9485858534',
  },
  {
    icon: <FaEnvelope/>,
    title: 'Email',
    des: 'aakashsaini948585@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt/>,
    title: 'Address',
    des: 'Jind, Haryana, India',
  },
]
const contact = () => {
  const [result, setResult] = useState("");
  const [data, setdata] = useState({
    name: '',
    email:'',
    message: ''
  })
  const isDisabled = data.name.length < 3 || data.email.length < 3 || data.message.length < 3;
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setResult("Sending....");
    const formData = new FormData(e.target as HTMLFormElement);

    formData.append("access_key", "3360b72c-c594-410b-9b48-4c4389c18f49");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setTimeout(() => {
        setResult("")
      }, 5000);
      (e.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {
              delay: 2.4,
              duration: 0.4,
              ease: 'easeIn'
            }}}
            className="py-6">
      <div className="container mx-auto">
              
                  {
                    result.length >= 5 ? (<div id="static-modal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className="overflow-y-auto text-green-600 overflow-x-hidden fixed bottom-0 right-0 z-50 flex justify-between text-right items-center w-full h-[10vh] " >
                      <span></span>
                      <div className="flex bg-[#27272c] bg-opacity-50 backdrop-blur-sm py-2 px-3 pr-6 mr-3" style={{ borderRadius: '4px'}}>
                      <span className="text-3xl font-bold px-1"><BiCheckDouble/></span> 
                      <span className="font-medium">{result}</span>
                      </div>
                  </div>
                    ): (<></>)
                  }
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={onSubmit}>
              <h3 className="text-4xl text-accent font-bold">Let&apos;s work together</h3>
{/*            <p className="text-white/60">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem nulla voluptatibus eligendi est tempora vero omnis ex, consequuntur inventore aut.</p> */}
               <p className="text-white/60">Whether you're looking for a developer, have an idea you'd like to build, or just want to talk tech — feel free to reach out. I'm just a message away.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" type="firstname" placeholder="Firstname" onChange={(e) => setdata(pre => ({...pre, name: e.target.value}))} />
                <Input name="lastname" type="lastname" placeholder="Lastname" />
                <Input name="email" type="email" placeholder="Email address" onChange={(e) => setdata(pre => ({...pre, email: e.target.value}))} />
                <Input name="phone" type="phone" placeholder="Phone number (optional)" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                   <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">DevOps</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea 
                name="message"
                className="h-[200px]" 
                placeholder="Type your message here."
                onChange={(e) => setdata(pre => ({...pre, message: e.target.value}))}
              />
              <Button size='md' className={`max-w-40 ${isDisabled ? 'cursor-not-allowed' : 'bg-accent'}`} type="submit" disabled={isDisabled} >Send message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return <li className="flex items-center gap-6" key={index}>
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.des}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
}

export default contact
