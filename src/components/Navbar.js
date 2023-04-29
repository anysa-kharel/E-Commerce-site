import React from 'react'
import {Link} from  'react-router-dom'
import logo from "../logo.svg"
import {BsFillCartCheckFill} from 'react-icons/bs'
import './Navbar.css'

function Navbar() {
  return (
    <>
      <div className="main-nav" >
          
         
         {/* Logo  */}
          <div className="title">
          <Link to="/">
              <img src={logo} alt="Store" />
          </Link>
          </div>

            {/* Menus  */}

            <div className="nav-itemm">

          <ul >
            <li >
            <Link to="/productlist" className="no_underline white" >Products</Link>
            </li>
            
          <li>
      <Link to="/cart" className="ml-8 no_underline" >
        <button className="Button-cart">
          My Cart <BsFillCartCheckFill/>
        </button>
      </Link>
      </li> 
          
          </ul>
          </div>

      </div>
    </>
  )
}

export default Navbar

