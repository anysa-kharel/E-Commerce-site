import React from 'react'
import styled from "styled-components"
import dabur from "../assests/dabur.png"
import samsung from "../assests/samsung.png"
import cg from "../assests/CG.png"
import goldstar from "../assests/goldstar.png"

const Trusted = () => {
  return (
<>
<Wrapper>
       <div className="trusted">
        <div className="item-1">
          Trusted by 1000+ companies.
        </div>

        <div className="item-2">
          <img src={dabur} alt="DaburNepal" className="img-2-1"/>
          <img src={samsung} alt="Samsung" className="img-2-2"/>
          <img src={cg} alt="CG" className="img-2-3"/>
          <img src={goldstar} alt="GoldStar" className="img-2-4"/>
        </div>

       </div>


</Wrapper>

</>
  )
}

export default Trusted

const Wrapper=styled.section`
// width: 80%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background: var(--mainbg);

margin-bottom: 3rem;


.item-1{
  font-size: 3rem;
  font-family:"Poppins";
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: var(--maingray);
  display:flex;
  align-items:center;
  justify-content: center;
}

.img-2-1{
  width: 15rem;
  height: 15rem;
  background: transparent;

}
.img-2-2{
  margin-left:8rem;
  margin-bottom: 4rem;
  width: 19rem;
  height: 7rem;
  background: transparent;

}
.img-2-3{
  width: 30rem;
  height: 15rem;
  background: transparent;

}
.img-2-4{
  width: 25rem;
  height: 10rem;
  background: transparent;
  margin-bottom: 3rem;

}

`
