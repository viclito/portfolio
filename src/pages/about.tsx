import React from 'react'
import Abouthead from '../../components/about/Abouthead'
import SkillLogos from '../../components/about/skills/SkillLogos'
import Education from '../../components/about/Education'

const About = () => {
  return (
    <>
      <div className='max-w-[1300px] px-14 m-auto'>
        <Abouthead/>
        <SkillLogos/>
        <Education/>
      </div>
      
    </>
  )
}

export default About