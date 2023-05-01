import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from"styled-components"
import { BsCartCheckFill } from "react-icons/bs";
import { CgMenu, CgClose } from "react-icons/cg";

const Navbar = () => {

  const [menuIcon,setMenuIcon]=useState();
  return (
    <><Nav>

    
    <div className={menuIcon? "navbar active":"navbar"}>
      <ul className="nav-list">
        <li >
          <Link to="/" className="nav-link" onClick={() => setMenuIcon(false)}>Home</Link>
        </li>

        <li >
          <Link to="/product" className="nav-link" onClick={() => setMenuIcon(false)}>Products</Link>
        </li>

        <li>
          <Link to="/about" className="nav-link" onClick={() => setMenuIcon(false)}>About</Link>
        </li>

        <li>
          <Link to="/contact" className="nav-link" onClick={() => setMenuIcon(false)}>Contact</Link>
        </li>

        <li>
          <Link to="/cart" className="nav-link cart-link" onClick={() => setMenuIcon(false)}><BsCartCheckFill className="cart"/>
          <span className="cart-item">4</span></Link>
        </li>
      </ul>

      {/* Two menu-icons  */}
        <div className="menu-btn">
       <CgMenu name="menu-ham" className="menu-icon" onClick={() => setMenuIcon(true)} />
       <CgClose name="menu-close" className="menu-icon close" onClick={() => setMenuIcon(false)} />
      </div>

    </div>
    </Nav>
    
    </>
  )
}

export default Navbar

const Nav=styled.nav`

.nav-list{
  
  display:flex;
align-items:center;
gap: 4.8rem;

.nav-link{
  
  font-size: 1.5rem;
  font-weight: 2rem;
  color: #000000;
  
}

.cart-link{
  position:relative;
}
.cart{
  font-size: 2.5rem;
  position:relative;
  
}
.cart-item{
  height:1.5rem;
  width:1.5rem;
  border-radius:50%;
  display:grid;
  place-items:center;
  position:absolute;
  background-color: var(--maingreen);
  top:-100%;
  left:50%;
  font-size: 1.2rem;
  
}
}

.menu-btn{
  display:none;
  font-size:15rem;
}

.menu-icon[name="menu-close"]{
  display:none;
}

.close{
  display:none;
}

@media (max-width: ${({theme})=> theme.media.mobile})

{
  .menu-btn{
    display:flex;
    align-items:center;

    // z-index:9999;
    // color: #000;
    // background:transparent;
  
   .menu-icon{
    display:inline-block;
    color: #000;
    font-size:5rem;
   }

   .menu-icon[name="menu-close"]{
    display:none;
  }
  
  

  }

  .nav-list{

    width:100vw;
    height:100vh;
    position:absolute;
    top:0;
    left:0;
    background-color:#fff;

    visibility: hidden;
    opacity: 0;
    transform: translateX(100%);
    /* transform-origin: top; */
    // transition: all 1s linear;

    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;

  }


  .active .menu-icon[name="menu-close"]{
    display: inline-block;
    font-size: 6rem;
    position: absolute;
    top: 5%;
    right: 10%;
    color: ${({ theme }) => theme.colors.black};
    z-index: 9999;
  }
  .active .menu-icon[name="menu-ham"]{
    display:none;
  }

  .active .nav-list{
    visibility:visible;

    font-size:3rem;
    font-weight:20%;

    opacity: 1;
    transform: translateX(0);
    z-index: 999;
    transform-origin: right;
    // transition: all 1s linear;
  }

  .active .nav-link{
    font-size:3rem;
    font-family: "Poppins";
    font-weight: 900;
  }

  .active .cart{
    font-size:5rem;

  }
  .active .cart-item{
    height:3rem;
    width:3rem;
    border-radius:50%;
    display:grid;
    place-items:center;
    position:absolute;
    background-color: var(--maingreen);
    top:-70%;
    left:50%;
    font-size: 2rem;
  }
}

`