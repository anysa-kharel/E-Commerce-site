import React from 'react'
import HeroSection from './HeroSection'
import { useAppContext } from '../context/productcontext'

const About = () => {

  const {myName} = useAppContext();

  const data={
    name:"Online E-commerce"
  }
  return (
   <>
   {myName}
   <HeroSection props={data}/>
   
   </>
  )
}

export default About
