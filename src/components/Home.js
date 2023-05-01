import React from 'react'
import HeroSection from './HeroSection'

export default function Home() {
  const data={
    name:"Online Shop"
  }
  return (
   <>
   
   <HeroSection props={data}/>

   </>
  )
}


