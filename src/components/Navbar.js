import React from 'react'
import { Link } from 'react-router-dom'
import styled from"styled-components"
import { BsCartCheckFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <><Nav>

    
    <div>
      <ul className="nav-list">
        <li >
          <Link to="/" className="nav-link">Home</Link>
        </li>

        <li >
          <Link to="/product" className="nav-link">Products</Link>
        </li>

        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>

        <li>
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>

        <li>
          <Link to="/cart" className="nav-link cart-link"><BsCartCheckFill className="cart"/>
          <span className="cart-item">4</span></Link>
        </li>
      </ul>
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

`