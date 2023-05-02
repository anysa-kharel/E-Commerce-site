import React from 'react'
import styled from "styled-components"
import {Button} from "../styles/Button"

const Contact = () => {
  return (
    <>
    <Wrapper>
        <div >
          <h1 className="heading">Contact Us</h1>
        </div>

       
        <iFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.763138621598!2d83.46556917423588!3d27.693714726094818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996868906ac7a27%3A0x23963717025fb8c7!2sBhatbhateni%20Super%20Market!5e0!3m2!1sen!2snp!4v1683000001399!5m2!1sen!2snp"
         width="100%" 
         height="400" 
         style={{border:0}}
         allowFullScreen="" 
         loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade"></iFrame>
        

        <div className="contact-form">
          <form action="https://formspree.io/f/mlekzjao" method="POST" >
            <input type="text" placeholder="Name" name="Name" required autoComplete="off"/>
            <input type="email" placeholder="Email" name="Email" required autoComplete="off"/>
            <input type="text" placeholder="Enter your message here." name="Message" required autoComplete="off"/>
            <Button>Send</Button>
          </form>
        </div>


    </Wrapper>
    
    </>
  )
}

export default Contact

const Wrapper=styled.section`

padding: 0 0 5rem 0;
width: 100%;
.heading{
  font-size:4rem;
  font-weight:600;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top: 3rem;
  margin-bottom:3rem;
  font-family:"Poppins";
}


.contact-form{
  max-width:50rem;
  margin:auto;

}
form{
  display:flex;
  align-items: center;
  justify-contents:center;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;
  
}
input{
  width: 50rem;
  text-transform: Capitalize;
  font-family:"Poppins";
}

`
