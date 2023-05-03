import React from 'react'
import styled from 'styled-components'
import {Button} from "../styles/Button"
import { Link } from 'react-router-dom'
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
   <>
     <Wrapper>
       <div className="foot-1">
        <div className="item-1">
            <div>
            <h3> Ready to get Started?</h3>
        <h3>Talk to us today</h3>
            </div>
        <div>
        <Button><Link to="/contact" className="link">Get Started</Link> </Button>
        </div>
        
        </div>
        
       </div>

       {/* Main footer  */}
       <div className="main-footer">
        <div className=" gridd gridd-four-column">
            <div>
                <p>Online Shop</p>
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

            </div>

            <div>
                <p>Subscribe to get important updates.</p>
                <form action="">
                    <input type="email" className="email" placeholder="Your-email"/>
                    <Button>Subscribe</Button>
                </form>
            </div>

            <div>
                <p>Follow Us:</p>
        
                <FaDiscord className="icon"/>
                <FaYoutube className="icon"/>
                <FaInstagram className="icon"/>
              
               
            </div>

            <div>
                <p>Call Us</p>
                <a href="tel:071123456" className="tel"> <p> 071-123456 </p> </a>
            </div>
        </div>
        <hr/>
        <div className="gridd gridd-two-column">
            <p>@{new Date().getFullYear()} Online Shop. All Rights Reserved</p>
            <div>
            <h3>PRIVACY POLICY</h3>
            <h3>TERMS & CONDITIONS</h3>
                </div>
        </div>
       </div>
     </Wrapper>

   </>
  )
}

export default Footer

const Wrapper=styled.section`

.icon{
    font-size: 3rem;
    margin-right: 0.5rem;
}
.gridd-two-column{
    
    grid-template-columns: repeat(2, 1fr);
}
.gridd-four-column{
    grid-template-columns: repeat(4, 1fr);

  
}

.foot-1{
    padding: 2rem 4rem 2rem 4rem;
    background-color: var(--mainbg);
    font-family:"Poppins";
    max-width: 60vw;
    margin: 0 auto;
    border-radius: 1rem;
    z-index: 999;
    transform: translateY(50%);
    


.item-1{
  
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}
}

h3{
    font-family: "Poppins";
    font-weight: 500;
}
.link{
    
    font-family: "Poppins";
    color: #fff;
    &:hover{
        color:#000;
    }
}

.main-footer{
    
    background-color: #000;
    padding: 14rem 0 9rem 0;
    z-index: -1;
}

.gridd{
    max-width: 120rem;
    margin: 0 auto;
    padding: 2rem;
    display:grid;
    gap:9rem;
    color:#fff;
}
p{
    font-family: "Poppins";
    font-size: 2rem;
}

.tel{
    color: #fff;
}
.email{
    margin-bottom: 2rem;
    margin-top: 2rem;
}

hr{
    margin-top:3rem;
    margin-bottom: 3rem;
}


`