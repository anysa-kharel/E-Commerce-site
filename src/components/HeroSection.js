import React from 'react'
import styled from 'styled-components';
import {Button} from "../styles/Button"
import hero from "../assests/hero.jpg"
const HeroSection = ({props}) => {
    const {name}=props;
  return (
    <>
    <Wrapper>

  
    <div className="containerr">
       <div className="gridd grid-two-columnn">
         <div className="hero-items">  
        <p className="intro-dataa">Welcome to</p>
        <h1 className="heading">{name}</h1>
        <p className="intro-dataa" >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</p>
        <Button>Shop Now</Button>
         </div>

         {/* Image  */}
         <div >
            <figure>
             
           <img src={hero} className="hero-img" alt="hero-img"/>
            
           </figure>
           </div>

       </div>
     </div>
    </Wrapper>
    </>
  )
}

export default HeroSection

const Wrapper=styled.section`
padding: 7rem 0 0 5rem;
.containerr{
    
    max-width:120rem;
    margin: 0 auto;


.gridd{
    // margin-top: 6rem;
    display:grid;
    gap: 9 rem;
    
}

.grid-two-columnn{
    grid-template-columns: repeat(2,1fr);
   
}
.hero-items{
    display:flex;
     gap: 1.5rem;
    flex-direction:column;
}

    .heading{
        font-size:3rem;
        color: var(--maingreen);
    }


    .intro-dataa{
        color: var(--maingray);
    }
.hero-img{
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left: 2rem;
    height: auto;
    width: 70%;
}

figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color:  #C3E991;
      position: absolute;
      left: 30%;
      top: -4rem;
      z-index: -1;
    }
  }
    

}

`
