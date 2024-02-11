import React from 'react'
import Abouthead from '../../components/about/Abouthead'
import SkillLogos from '../../components/about/skills/SkillLogos'

const About = () => {
  return (
    <>
      <div className='max-w-[1300px] px-14 m-auto'>
        <Abouthead/>
        <SkillLogos/>
      </div>
      
    </>
  )
}

export default About