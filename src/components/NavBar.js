import React, { useState } from "react";
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";
import { Modal } from '@material-ui/core';




function NavBar() {
    const [openSearchModal, setOpenSearchModal] = useState(false);
    const [openCartModal, setOpenCartModal] = useState(false);

    const dropDown = () => {
        document.getElementById("myDropdown").classList.toggle("show");
       
}

const handleSearch = () => {
    setOpenSearchModal(true);

}

const handleSearchClose = () => {
    setOpenSearchModal(false);
  };


const handleCart = () => {
  setOpenCartModal(true);
}

const handleCartClose = () => {
  setOpenCartModal(false);
}


    return (
        <div className="NavBar">
            <Router>
            <div className="logo">Luna's</div>
            <div className="nav-mid-links">
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/' onClick={dropDown} className='shop'>Shop</NavLink>
              <div id="myDropdown" className="dropdown-content">
                  <a href="/New">New</a>
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
              <NavLink to='/search' onClick={handleSearch}><i className="fa fa-search" id="search-btn"></i></NavLink>
              <NavLink to='/shoppingcart' onClick={handleCart}><i className="fa fa-shopping-cart" id="cart-btn"></i></NavLink>
            </div>
            </Router>
        

            
      <Modal
        open={openSearchModal}
        onClose={handleSearchClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>
          <div className="modal">
          <h1>What are you searching for?</h1>
          <input
          type="text"
          id="search-bar"
          placeholder="I'm looking for..."
          />
          <button type="submit" id="modal-submit">Go!</button>
          <button id="modal-cancel" onClick={handleSearchClose}>Cancel</button>
          </div>
        </div>
      </Modal>

      <Modal
        open={openCartModal}
        onClose={handleCartClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>
          <div className="modal">
          <h1>Your Shopping Cart</h1>
          <p>You currently have 0 items in your cart.</p>
          <button id="modal-shop">Shop</button>
          <button id="modal-cancel" onClick={handleCartClose}>Cancel</button>
          </div>
        </div>
      </Modal>

      
   
        </div>
    );
    }
    
    export default NavBar;
    
