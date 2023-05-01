import React from 'react'
import styled from "styled-components"

export default function Home() {
  return (
    <Wrapper>
      Hello from Home page.
    </Wrapper>
  )
}

const Wrapper = styled.section`
background-color: ${({theme})=> theme.colors.bg};
height:20rem;
width:20rem;
`