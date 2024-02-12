import React from 'react'
import { motion, useScroll} from 'framer-motion'


interface LiIconProps {
    reference: React.RefObject<any>;
  }
const LiIcon:React.FC<LiIconProps> = ({reference}) => {

    const {scrollYProgress} =useScroll(
        {
            target: reference,
            offset:["start end", "center center"]
        }
    )
  return (
    <figure className='absolute left-0 stroke-dark sm:hidden'>
        <svg className='-rotate-90' height="75" width="75" viewBox='0 0 100 100'>
            <circle cx='50' cy='50' r="20" className='stroke-primary stroke-1 fill-none'/>
            <motion.circle style={{ pathLength : scrollYProgress}} cx='50' cy='50' r="20" className=' stroke-[5px] fill-light'/>
            <circle cx='50' cy='50' r="10" className=' animate-pulse stroke-1 fill-primary'/>
        </svg>
    </figure>
  )
}

export default LiIcon