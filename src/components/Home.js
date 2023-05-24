import React from 'react'
import HeroSection from './HeroSection'
import Services from './Services'
import Trusted from './Trusted'
import Featureproduct from './Featureproduct'

export default function Home() {
  const data={
    name:"Online Shop"
  }
  return (
   <>
   
   <HeroSection props={data}/>
   <Featureproduct/>
   <Services/>
   <Trusted/>

   </>
  )
}


