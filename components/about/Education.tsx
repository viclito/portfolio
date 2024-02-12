import { useScroll ,motion } from 'framer-motion';
import React, { useRef } from 'react'
import LiIcon from './LiIcon';

interface DetailsProps {
    works: string;
    company: string;
    dates:string | number;
    place: string;
    workDone:string;
    links:string;
  }

const Details:React.FC<DetailsProps> = ({works , company , dates , place , workDone , links}) =>{
    
    const ref = useRef(null)

    return(
        <li ref={ref} className='flex flex-col w-[70%] sm:w-[100%] mx-auto gap-3'>
            <LiIcon reference = {ref}/>
            <h2 className='text-lg font-semibold'>{works}<a href={links} className='font-medium text-primary'>@{company}</a></h2>
            <h3 className='text-sm font-medium sm:text-xs text-slate-500'>{dates} | {place}</h3>
            <h3 className='text-base font-medium sm:text-sm'>{workDone}</h3>

        </li>
    )
}

const Education = () => {

    const ref = useRef(null)
    const{scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end", "center start"]
        }
    )
  return (
    <div>
        <div className='pb-28 sm:pb-0'> 
            <div className='w-[100%] py-20'>
                <div className=' py-14'>
                    <h1 className='w-[100%] font-bold text-center text-8xl lg:text-6xl md:text-3xl'>Experience &</h1>
                    <h3 className='text-lg font-bold text-center'>Education</h3>
                </div>
                <div 
                    ref={ref}
                    className='w-[75%] md:w-[90%] sm:w-[100%] mx-auto relative'
                    >
                    <motion.div style={{scaleY:scrollYProgress}} className='absolute w-[4px] h-full top-0 sm:hidden left-9 bg-dark origin-top'/>
                    <ul className='flex items-center content-center gap-10 w-[100%] mx-auto flex-col'>
                        <Details company="Prenetics" works="Internship For 6 Months "  dates="Aug 2023 - Jan 2024"
                                place='Ambattur , Chennai'
                                links="https://www.prenetics.com/"
                                workDone="I collaborated with a team to complete a project involving the entire UI using Next.js. During this experience, I acquired proficiency in Webflow and actively contributed to its implementation."
                                />
                        <Details company="20Million" works="As a Junior Developer "  dates="Jan2024 - Present"
                                place='Arani , Chennai'
                                links="https://20million.in/"
                                workDone="I am currently actively involved in a React.js project, where my responsibilities include leveraging the Material-UI framework for comprehensive CSS styling. Additionally, I am concurrently immersed 
                                in the learning process of a React Native project, wherein I am gaining hands-on experience and expanding my skill set within the realm of mobile application development."
                                />
                        <Details company="Scott Christian College" works="Bachelors Degree "  dates="Jun 2016 - april 2019"
                                place='Nagercoil , Kanyakumari'
                                links="https://scott.ac.in/"
                                workDone="I hold a bachelor's degree in English and actively participated in extracurricular activities, specifically engaging in elocution events during my academic tenure."
                                />
                        <Details company="Manonmaniyam Sundarnath University" works="Masters Degree "  dates="Jun 2019 - april 2021"
                                place='Nagercoil , Kanyakumari'
                                links="https://scott.ac.in/"
                                workDone="I hold a Masters's degree in English and actively participated in extracurricular activities, specifically engaging in elocution events during my academic tenure."
                                />
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education