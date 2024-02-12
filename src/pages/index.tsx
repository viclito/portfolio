import Image from "next/image";
// import profile from '../../public/image/deepberg-bgremove.png'
import profile from '../../public/image/deepbergl.png'
import { motion} from 'framer-motion'
import Link from "next/link";
import arrow from "../../public/image/box.png"
import circle from "../../public/image/circle.png"
import SkillLogos from "../../components/about/skills/SkillLogos";

export default function Home() {
  return (
    <main
      className=""
    >
      
      <div className="max-w-[1300px] min-h-screen flex justify-between m-auto items-center px-12 md:flex-col flex-row gap-10">
        <div className="md:w-[100%] w-[40%] ">
          <motion.div initial={{ top:0 , scale:.99}}
            animate={{top:0 , scale:1}} 
            transition={{repeat: Infinity ,repeatType: "reverse", duration: 2, ease: "easeInOut"}} 
            className="relative w-[70%] pt-[30px] top-[300px] m-auto"
            >
            <Image src={profile} alt="" className="w-full h-auto rounded "/>
            <p className="text-center text-sm font-bold">BERGIN YSA VICLITO</p>
          </motion.div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 md:w-[100%] w-[60%] pb-12">
          <motion.h1
            initial={{opacity:0 , translateX:20}}
            animate={{ opacity:1 , translateX:0}}
            transition={{delay:.5, ease:"easeIn" , duration:1}}
            className="md:w-[100%] w-[90%] md:text-3xl text-5xl md:font-semibold font-semibold"
          >
            Breathing life into my concepts through the language of code
          </motion.h1>
          <p className="text-sm md:w-[100%] w-[90%]">As a frontend developer, I am passionate about transforming concepts into cutting-edge web applications.
            Delve into my recent projects and articles, highlighting my proficiency in React.js and web development, 
            as I continually strive to innovate and elevate user experiences.
          </p>
          <div className="flex gap-4 self-start md:w-[100%] w-[90%] ml-8 ">
            <Link href="/BerglinViclito.pdf" target={"_blank"} download={true} 
            className="px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-transparent
             hover:text-black border-solid border-2 hover:border-black flex gap-2">
              Resume
              <Image src={arrow} alt="" className="h-6 w-auto"/>
            </Link>
            <Link href="mailto:berglin1998@gmail.com" target={"_blank"} className="px-4 py-2 rounded-lg font-medium">Mail me</Link>
          </div>
          
        </div>

        

      </div>

      <div className="fixed md:!top-2 md:!right-2 md:left-auto left-4 bottom-4 top-auto right-auto sm:hidden">
        <div className="relative overflow-hidden flex items-center justify-center">
          <Image src={circle} alt="" className="md:w-32 md:h-32  w-52 h-52 animate-spin-slow"/>
          <Link href="mailto:berglin1998@gmail.com"
            className="flex items-center text-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black
             text-light shadow-md border border-solid border-dark md:w-12 md:h-12 w-16 h-16 rounded-full font-semibold hover:bg-light hover:text-dark">
            Hire Me
          </Link>
        </div>
        
      </div>
      <div className="max-w-[1200px] mx-auto pb-14 px-4">
        <SkillLogos/>
      </div>
      
    </main>
  )
}
