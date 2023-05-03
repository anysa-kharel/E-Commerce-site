import React from 'react'
import styled from "styled-components"
import {RiSecurePaymentFill} from "react-icons/ri";
import {TbTruckDelivery} from "react-icons/tb";
import {GiReceiveMoney, GiCheckedShield} from "react-icons/gi";


const Services = () => {
  return (
    <>
    <Wrapper>
        <div className="section-1">
            <TbTruckDelivery className="icon"/>
             Super Fast and Free Delivery
        </div>      

        <div className="section-2">

        <div className="section-2-1">
            <GiCheckedShield className="icon"/>
            Non-contact Shipping
        </div>

        <div className="section-2-2">
            <GiReceiveMoney className="icon"/>
            Money Back Guaranteed
        </div>

      </div>

        <div className="section-3">
            <RiSecurePaymentFill className="icon"/>
            Super Secure Payment System
        </div>

    </Wrapper>
    
    </>
  )
}

export default Services

const Wrapper=styled.section`
// padding: 7rem 0 0 5rem;
margin-top: 3rem;
display:flex;
align-items: center;
justify-content: center;
gap: 5rem;
margin-bottom: 3rem;
margin-right: 5rem;
margin-left: 5rem;

.icon{
    font-size:3rem;
    color: var(--maingray);
}

.section-1,.section-3{
    padding: 3rem;
    height: 22rem;
    background-color: var(--mainbg);
    display:flex;
    align-items: center;
    justify-contents: center;
    gap: 0.8rem;
   
    color: var(--maingray);
    font-size: 2rem;
    font-family: "Poppins";
}

.section-2{
 
    .section-2-1{
        padding: 2rem;
        height: auto;
        background-color: var(--mainbg);
        color: var(--maingray);
        display:flex;
    align-items: center;
    justify-contents: center;
    flex-direction: column;
    margin-bottom: 2rem;
    font-size: 2rem;
    font-family: "Poppins";
    width: auto;
    }

    .section-2-2{
        padding: 2rem;
        height: auto;
        background-color: var(--mainbg);
        color: var(--maingray);
        display:flex;
    align-items: center;
    justify-contents: center;
    flex-direction: column;
    font-size: 2rem;
    font-family: "Poppins";
    width: auto;
    }

}


`
