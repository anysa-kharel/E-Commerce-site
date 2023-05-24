import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Product = (curElem) => {

  const {id,name,image,category,price} = curElem;
  return (
    <>
    <Wrapper>

      <div key="curElem.id">
        <Link to={`/singleproduct/${id}`}>
        <figure>
          <img src={image} alt={name} className="img"/>
          <figcaption className="caption">
            {category}
            </figcaption>
        </figure>
        
        </Link>
        <div className="flex">
       <div> {name}</div> 
       <div>{price}</div> 
        </div>
     </div>
    
      </Wrapper>
    </>
  )
}

export default Product

const Wrapper =styled.section`
padding: 2rem 0;
.img{
  max-width: 90%;
  height: 20rem;
  transition: all 0.2s linear;
}
.flex{
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  font-family: "Poppins";
}

figure{
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.5s linear;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.2s linear;
    cursor: pointer;
  }

  // black transition in image
  &:hover::after {
    width: 100%;
  }
  &:hover img {
    transform: scale(1.2);
  }


}
.caption{
  position: absolute;
  top: 15%;
  right: 10%;
  // z-index:1;
  color: var(--mainwhite);
  height: 2rem;
  width: auto;
  background-color: var(--maingray);
  display: flex;
  align-items: center;
  justify-contents: center;
}




`