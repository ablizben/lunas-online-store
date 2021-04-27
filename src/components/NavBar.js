import React from "react";
import { NavLink, BrowserRouter as Router } from 'react-router-dom';


const NavBar = () => {

    return (
        <div className="NavBar">
            <Router>
            <div className="nav-image">Luna's</div>
            <div className="nav-mid-links">
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/shop'>Shop</NavLink>
              <NavLink to='/blog'>Blog</NavLink>
              <NavLink to='/support'>Support</NavLink>
            </div>
            <div className="nav-right-links">
            <NavLink to='/registersignin'>Register/Sign in</NavLink>
              <NavLink to='/search'>Search</NavLink>
              <NavLink to='/shoppingcart'>Shopping Cart</NavLink>
            </div>
            </Router>
        </div>
    );
    }
    
    export default NavBar;