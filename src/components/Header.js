import React from 'react'
import logo from "../assests/logo.png"
import styled from "styled-components"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <>
     <MainHeader>
        
        <div>
            <img src={logo} alt="logo"  className="logo"/>
        </div>
        <Navbar/>

     </MainHeader>
      
    </>
  )
}

const MainHeader=styled.header`
display:flex;
align-items:center;
justify-content:space-between;
background: var(--mainbg);
height:8rem;
padding-right: 8rem;


.logo{
    margin-top:2rem;
    height:15rem;
    width:15rem;
}
`

export default Header
