import React, { useEffect, useRef } from 'react'
import berglin from '../../public/image/Berglin.jpeg'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { once } from 'events';

interface AnimateNumberProps {
    value: number;
  }

const AnimateNumber: React.FC<AnimateNumberProps>=({value})=>{

    const ref = useRef(null)

    const motionValue = useMotionValue(0)
    const spring = useSpring(motionValue , {duration:3000})
    const inView = useInView(ref)

    useEffect(() => {
      if(inView){
        motionValue.set(value)
      }
    }, [motionValue, inView , value])

    useEffect(()=>{
        spring.on("change" , (latest)=>{
            if (ref.current && latest.toFixed(0) <= value) {
                (ref.current as HTMLElement).textContent = latest.toFixed(0);
            }
              
        })
    },[spring, value])
    


    return(
        <span ref={ref}></span>
    )
}

const Abouthead = () => {
  return (
    <>
        <div>
            <div >
                <div className='text-8xl font-bold text-center py-5 xl:text-6xl sm:text-3xl'>
                Enthusiasm Ignites Determination!
                </div>
                <div className='flex w-[100%] py-6 xl:flex-col'>
                    <div className='flex w-[80%] gap-10 xl:w-[100%] lg:flex-col'>
                        <div className='w-[45%] flex flex-col gap-6 py-3 lg:w-[100%]'>
                        <h4 className='font-bold text-lg'>BIOGRAPHY</h4>
                        <p className='font-medium leading-relaxed'>Hi, I am <span className='font-bold'>Berglin YSA Viclito</span>, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences.I am always looking for new and innovative ways to bring my clients visions to life.</p>
                        <p className='font-medium leading-relaxed'>I hold the conviction that design transcends mere aesthetics; it involves addressing challenges and crafting instinctive, delightful encounters for users.</p>
                        <p className='font-medium leading-relaxed'>Whether engaged in developing a website, mobile app, or any digital product, I consistently uphold a dedication to design brilliance and user-centric approach in every endeavor. I eagerly anticipate the prospect of contributing my expertise and enthusiasm to your upcoming project.</p>
                        </div>
                        <div className='w-[50%] lg:m-auto md:w-[90%]'>
                        <Image src={berglin} alt='' className='w-[90%] sm:w-[100%] h-auto m-auto  '/>
                        </div>
                    </div>
                    <div className='w-[20%] xl:w-[100%] xl:flex-row flex flex-col justify-evenly items-center xl:py-4 md:py-8'>
                        <div>
                            <h1 className='text-8xl font-bold xl:text-6xl md:text-3xl'>
                                <AnimateNumber value={10}/>+
                            </h1>
                            <h4 className='text-lg font-medium'>Projects Completed</h4>
                        </div>
                        <div>
                            <h1 className='text-8xl font-bold xl:text-6xl md:text-3xl'>
                                <AnimateNumber value={1}/>+
                            </h1>
                            <h4 className='text-lg font-medium'>Years of experience</h4>
                        </div>
                        <div>
                            <h1 className='text-8xl font-bold xl:text-6xl md:text-3xl'>
                                <AnimateNumber value={8}/>+
                            </h1>
                            <h4 className='text-lg font-medium'>Skills I Learned</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Abouthead