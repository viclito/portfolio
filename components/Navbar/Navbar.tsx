import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../logo/Logo'
import {TwitterIcon , GithubIcon , LinkedInIcon } from '../Icons/icons'
import { useRouter } from 'next/router'
import {motion } from 'framer-motion'
import { reverse } from 'dns'

interface CustomLinkProps {
    href: string;
    children: React.ReactNode;
  }

const Navbar = () => {

      const[open , setOpen] = useState<boolean>(false)
      const openFunc = ()=>{
        setOpen(!open)
      }

    const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => {
        const router = useRouter();
      
        return (
          <div className={`font-medium text-base relative group cursor-pointer`} onClick={() => router.push(href)}>
            <a href={href}>
              {children}
            </a>
            
            <span className={`absolute h-[1px] left-0 -bottom-0.5 bg-black inline-block group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}></span>
          </div>
        );
      };
  return (
    <div >
        <div className='flex items-center justify-between max-w-[1200px] m-auto py-8 relative'>
            <div className="flex gap-6 md:hidden">
                {/* <Link href="/" className=" font-medium text-base relative group" passHref><span className={`absolute h-[1px]  left-0 -bottom-0.5 bg-black inline-block group-hover:w-full transition-[width] ease duration-300 ${router.asPath=== href ? 'w-full':'w-0'}`}></span> Home</Link>
                <Link href="/about" className=' font-medium text-base relative group'><span className={`absolute h-[1px]  left-0 -bottom-0.5 bg-black inline-block group-hover:w-full transition-[width] ease duration-300 ${router.asPath=== href ? 'w-full':'w-0'}`}></span> About</Link>
                <Link href="/projects" className=' font-medium text-base relative group'><span className={`absolute h-[1px]  left-0 -bottom-0.5 bg-black inline-block group-hover:w-full transition-[width] ease duration-300 ${router.asPath=== href ? 'w-full':'w-0'}`}></span> Projects</Link>
                <Link href="/contact" className=' font-medium text-base relative group'><span className={`absolute h-[1px]  left-0 -bottom-0.5 bg-black inline-block group-hover:w-full transition-[width] ease duration-300 ${router.asPath=== href ? 'w-full':'w-0'}`}></span> Contact</Link> */}

                <CustomLink href='/'>Home</CustomLink>
                <CustomLink href='/about'>About</CustomLink>
                <CustomLink href='/projects'>Projects</CustomLink>
                <CustomLink href='/contact'>Contact</CustomLink>
            </div>
            <div className='flex gap-2 md:hidden'>
                <a href="https://www.instagram.com/mr_rv3_pirate" target={"_blank"} 
                
                >
                    <TwitterIcon className='hover:-translate-y-0.5 hover:scale-[.9] transition-all ease-in duration-200 p-1 bg-slate-50 rounded'/>
                </a>
                <a href="https://github.com/viclito" target={"_blank"} 
                
                >
                    <GithubIcon className='hover:-translate-y-0.5 hover:scale-[.9] transition-all ease-in duration-200 p-1 bg-slate-50 rounded'/>
                </a>
                <a href="https://www.linkedin.com/in/berglin-viclito-a890a1203" target={"_blank"} 
                
                >
                    <LinkedInIcon className='hover:-translate-y-0.5 hover:scale-[.9] transition-all ease-in duration-200 p-1 bg-slate-50 rounded'/>
                </a>
                
            </div>

              {/* for mobile screen */}

              <div className=' flex-col pl-20 justify-center items-center md:flex hidden' onClick={openFunc}>
                <span className={`h-[2px] w-6 bg-black transition-all block  rounded-lg ${!open ? 'translate-y-2.5':'rotate-45 translate-y-1'}`}></span>
                <span className={`h-[2px] w-6 bg-black transition-all block my-0.5  rounded-lg ${!open ? ' opacity-100':'opacity-0'}`}></span>
                <span className={`h-[2px] w-6 bg-black transition-all block  rounded-lg ${!open ? '-translate-y-2.5':'-rotate-45 -translate-y-1'}`}></span>
              </div>

            { open ?
            
            <motion.div 
              initial={{scale:0 , opacity:0 , x:"-50%" , y:"-50%"}}
              animate={{opacity:1 , scale:1}}
              transition={{repeatType:"reverse" , duration:.3}}
              className='fixed min-w-[70vw] flex flex-col gap-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center
              bg-dark/90 backdrop-blur-md py-32 rounded-lg'>
              <div className="flex gap-6 text-white xs:flex-col">
                  <CustomLink href='/'>Home</CustomLink>
                  <CustomLink href='/about'>About</CustomLink>
                  <CustomLink href='/projects'>Projects</CustomLink>
                  <CustomLink href='/contact'>Contact</CustomLink>
              </div>
              <div className='flex gap-3 '>
                  <a href="https://www.instagram.com/mr_rv3_pirate" target={"_blank"} 
                  
                  >
                      <TwitterIcon className='hover:-translate-y-0.5 hover:scale-[.9] transition-all ease-in duration-200 p-1 bg-slate-50 rounded'/>
                  </a>
                  <a href="https://github.com/viclito" target={"_blank"} 
                  
                  >
                      <GithubIcon className='hover:-translate-y-0.5 hover:scale-[.9] transition-all ease-in duration-200 p-1 bg-slate-50 rounded'/>
                  </a>
                  <a href="https://www.linkedin.com/in/berglin-viclito-a890a1203" target={"_blank"} 
                  
                  >
                      <LinkedInIcon className='hover:-translate-y-0.5 hover:scale-[.9] transition-all ease-in duration-200 p-1 bg-slate-50 rounded'/>
                  </a>
                  
              </div>
            </motion.div>:""}





            <div className='absolute left-[50%] -translate-x-[50%] p-[1px] bg-slate-50 rounded-full'>
                <Logo/>    
            </div>
            
        </div>
    </div>
  )
}

export default Navbar