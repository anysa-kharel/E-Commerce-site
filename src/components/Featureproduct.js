import React from 'react'
import { useAppContext } from '../context/productcontext'
import Product from "./Product"
import styled from 'styled-components'

const Featureproduct = () => {

    const {isLoading, featuredproducts} = useAppContext();
    
    if(isLoading)
      {
        return <div> ....Loading</div>
      }

  return (
    <>
    <Wrapper>
    <div className="container">

    <p>Check Now!</p>
    <h2>Our Feature Services</h2>
    <div className="grid grid-three-column" >
    {
      featuredproducts.map((curElem) => {
       return <Product key={curElem.id} {...curElem} /> 
      })
    }
    </div>
    
    </div>
    </Wrapper>
     </>
  )
}

export default Featureproduct

const Wrapper=styled.section`
padding: 7rem 0 0 5rem;

.container{
    max-width: 120rem;
    margin: 0 auto;
    
}

p{
    color: var(--maingreen);
    font-size: 3rem;
    font-family: "Poppins";
    font-weight: 700;
    
}

h2{
    font-size: 2rem;
    font-family: "Poppins";
    font-weight: 500;
}


`
