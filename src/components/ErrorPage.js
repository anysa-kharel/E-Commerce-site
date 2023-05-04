import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <>
     <Wrapper>
       <h1>404</h1>
       <h3>UH OH! YOU'RE LOST.</h3>
       <p>The page you are looking for doesn't exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</p>
       <Link to="/"><Button>Go back to HomePage.</Button> </Link> 
     </Wrapper>
    </>
  )
}

export default ErrorPage

const Wrapper=styled.section`
padding: 6rem 0 6rem 0;
display:flex;
align-items: center;
justify-contents: center;
flex-direction: column;
gap: 3rem;

h1,h3,p{
  font-family: "Poppins";
  font-weight: 600;
}
`
