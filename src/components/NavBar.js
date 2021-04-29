import React from "react";
import { NavLink, BrowserRouter as Router } from 'react-router-dom';


const NavBar = () => {
    const dropDown = () => {
        document.getElementById("myDropdown").classList.toggle("show");
}


    return (
        <div className="NavBar">
            <Router>
            <div className="nav-image">Luna's</div>
            <div className="nav-mid-links">
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/' onClick={dropDown} className='shop'>Shop</NavLink>
              <div id="myDropdown" className="dropdown-content">
                  <a href="#">New</a>
                  <a href="#">Clothing</a>
                  <a href="#">Accessories</a>
                  <a href="#">Shoes</a>
                  <a href="#" className='sales'>Sales</a>
              </div>
              <NavLink to='/blog'>Blog</NavLink>
              <NavLink to='/support'>Support</NavLink>
            </div>
            <div className="nav-right-links">
            <NavLink to='/registersignin'>Register/Sign in</NavLink>
              <NavLink to='/search'><i className="fa fa-search"></i></NavLink>
              <NavLink to='/shoppingcart'><i className="fa fa-shopping-cart"></i></NavLink>
            </div>
            </Router>
        </div>
    );
    }
    
    export default NavBar;
    
