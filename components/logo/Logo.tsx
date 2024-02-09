import React from 'react'
import {motion} from 'framer-motion'

const Logo = () => {
  return (
    <div>
        <motion.div 
        className='h-16 w-16 bg-black text-white flex items-center justify-center text-xl font-bold rounded-full cursor-default '
        whileHover={{backgroundColor:["#121212", "rgba(131,58,180,1)", "rgba(252,29,29,1)" , "rgba(252,176,69,1)", "rgba(131,58,180,1)","#121212"],
        transition:{duration:1 , repeat:Infinity}
        }}

        >
            BP
        </motion.div>
    </div>
  )
}

export default Logo