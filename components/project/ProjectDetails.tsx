import Image from 'next/image'
import React from 'react'
import million from '../../public/image/20million.png'
import github from '../../public/image/github.png'
import jewels from '../../public/image/jewels.png'
import wedunion from '../../public/image/wedunion.png'
import guruvel from '../../public/image/gurav.png'
import {motion} from 'framer-motion'


const ProjectDetails = () => {
  return (
    <>
        <div className='max-w-[1300px] px-8 m-auto py-3 pb-12'>
            <div className='font-bold py-12 text-8xl lg:text-6xl md:text-3xl text-center'>
                InnovativeHorizon: Pioneering the Future!
            </div>
            <div className='flex flex-col gap-12 w-[100%]'>
                <motion.div
                    initial={{ opacity:0.9 , y:20}}
                    whileInView={{ opacity:1 , y:0}}
                    transition={{duration:.5 }}
                className='flex w-[100%] p-6 border-solid border-2 border-dark rounded-xl mx-auto items-center md:flex-col'>
                    <div className='w-[50%] overflow-hidden rounded-lg md:w-[100%]'>
                        <Image src={million} alt='' className='w-[100%] h-auto rounded-lg transition duration-500 hover:scale-105'/>
                    </div>
                    <div className='w-[50%] p-4 flex flex-col gap-3 md:w-[100%]'>
                        <h2 className='text-primary text-xl font-semibold xs:text-lg'>Company Projects</h2>
                        <h2 className='text-3xl font-bold xs:text-xl'>20Million</h2>
                        <h2 className='text-base font-medium xs:text-xs'>
                        Crafted with precision in React.js using the power of Next.js, adorned with stylish flair in SCSS, 
                        this project stands as a testament to innovation. Tailored specifically for a forward-thinking software agency,
                         it seamlessly blends cutting-edge technology with elegant design, embodying a harmonious fusion of form and function
                        </h2>
                        <div className='flex gap-3 items-center'>
                            <a href="https://github.com/viclito/20Million.git" target='_blank'>
                                <Image src={github} alt='' className='w-7 h-auto'/>
                            </a>
                            <a href="https://20million.in/" className='px-3 py-2 bg-dark text-light rounded-md' target='_blank'>
                                Visit Project
                            </a>
                        </div>   
                    </div>
                </motion.div>

                {/* left */}

                <motion.div
                    initial={{scale:0.97 , opacity:0.9 , y:50}}
                    whileInView={{scale:1 , opacity:1 , y:0}}
                    transition={{duration:.5 }}
                className='flex gap-5 w-[100%] mx-auto md:flex-col'>
                    <div className='w-[50%] p-6 border-solid border-2 border-dark rounded-xl flex flex-col md:w-[100%]'>
                        <div className='w-[100%] overflow-hidden rounded-lg'>
                            <Image src={wedunion} alt='' className='w-[100%] h-auto rounded-lg transition duration-500 hover:scale-105'/>
                        </div>
                        <h2 className='text-primary text-xl font-semibold pt-3 xs:text-lg'>Personal Projects</h2>
                        <h2 className='text-3xl font-bold xs:text-xl'>WedUnion</h2>
                        <div className='flex gap-3 items-center justify-between'>
                            <a href="https://github.com/viclito/weddingpage" target='_blank'>
                                <Image src={github} alt='' className='w-7 h-auto'/>
                            </a>
                            <a href="https://wedunionin.pages.dev/" className='px-3 py-2 bg-dark text-light rounded-md' target='_blank'>
                                Visit
                            </a>
                        </div>
                    </div>

                    {/* right */}

                    <div className='w-[50%] p-6 border-solid border-2 border-dark rounded-xl flex flex-col md:w-[100%]'>
                        <div className='w-[100%] overflow-hidden rounded-lg'>
                            <Image src={jewels} alt='' className='w-[100%] h-auto rounded-lg transition duration-500 hover:scale-105'/>
                        </div>
                        <h2 className='text-primary text-xl font-semibold pt-3 xs:text-lg'>Personal Projects</h2>
                        <h2 className='text-3xl font-bold xs:text-xl'>Mookuthi</h2>
                        <div className='flex gap-3 items-center justify-between'>
                            <a href="https://github.com/viclito/Jewels" target='_blank'>
                                <Image src={github} alt='' className='w-7 h-auto'/>
                            </a>
                            <a href="https://jewels-nine.vercel.app/" className='px-3 py-2 bg-dark text-light rounded-md' target='_blank'>
                                Visit
                            </a>
                        </div>
                    </div>

                </motion.div>
                

                <motion.div
                    initial={{scale:0.97 , opacity:0.9 , y:50}}
                    whileInView={{scale:1 , opacity:1 , y:0}}
                    transition={{duration:.5 }}
                className='flex w-[100%] p-6 border-solid border-2 border-dark rounded-xl mx-auto items-center md:flex-col'>
                    <div className='w-[50%] overflow-hidden rounded-lg md:w-[100%]'>
                        <Image src={guruvel} alt='' className='w-[100%] h-auto rounded-lg transition duration-500 hover:scale-105'/>
                    </div>
                    <div className='w-[50%] p-4 flex flex-col gap-3 md:w-[100%]'>
                        <h2 className='text-primary text-xl font-semibold xs:text-lg'>Client Projects</h2>
                        <h2 className='text-3xl font-bold xs:text-xl'>Guruvel Assosiate</h2>
                        <h2 className='text-base font-medium xs:text-xs'>
                        Embodied in React.js with the dynamic capabilities of Next.js and dressed in the sophisticated 
                        aesthetics of SCSS, this project is a masterpiece tailored for a client immersed in the realm of interior and exterior design.
                         A seamless union of technology and artistry, it captures the essence of their vision, transforming ideas into captivating digital landscapes.
                        </h2>
                        <div className='flex gap-3 items-center'>
                            <a href="https://github.com/viclito/Guruvel" target='_blank'>
                                <Image src={github} alt='' className='w-7 h-auto'/>
                            </a>
                            <a href="https://guruvel.vercel.app/" className='px-3 py-2 bg-dark text-light rounded-md' target='_blank'>
                                Visit Project
                            </a>
                        </div>   
                    </div>
                </motion.div>

            </div>
        </div>
    </>
  )
}

export default ProjectDetails