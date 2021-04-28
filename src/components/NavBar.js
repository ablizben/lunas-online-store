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
              <NavLink to='/shop' onClick={dropDown} class='shop'>Shop</NavLink>
              <div id="myDropdown" class="dropdown-content">
                  <a href="#">New</a>
                  <a href="#">Clothing</a>
                  <a href="#">Accessories</a>
                  <a href="#">Shoes</a>
                  <a href="#">Sales</a>
              </div>
              <NavLink to='/blog'>Blog</NavLink>
              <NavLink to='/support'>Support</NavLink>
            </div>
            <div className="nav-right-links">
            <NavLink to='/registersignin'>Register/Sign in</NavLink>
              <NavLink to='/search'><i class="fa fa-search"></i></NavLink>
              <NavLink to='/shoppingcart'><i class="fa fa-shopping-cart"></i></NavLink>
            </div>
            </Router>
        </div>
    );
    }
    
    export default NavBar;
    
