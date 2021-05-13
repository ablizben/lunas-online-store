import React, { useState } from "react";
import ReactDOM from "react-dom";
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";
import { Modal } from '@material-ui/core';




function NavBar() {
    const [openModal, setOpenModal] = useState(false);

    const dropDown = () => {
        document.getElementById("myDropdown").classList.toggle("show");
       
}

const handleSearch = () => {
    setOpenModal(true);

}

const handleClose = () => {
    setOpenModal(false);
  };


    return (
        <div className="NavBar">
            <Router>
            <div className="logo">Luna's</div>
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
              <NavLink to='/search' onClick={handleSearch}><i className="fa fa-search" id="search-btn"></i></NavLink>
              <NavLink to='/shoppingcart'><i className="fa fa-shopping-cart"></i></NavLink>
            </div>
            </Router>

            
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>
          <div className="modal">
          <h1>What are you searching for?</h1>
          <input
          type="text"
          />
          <button id="modal-cancel" onClick={handleClose}>Cancel</button>
          </div>
        </div>
      </Modal>
   
        </div>
    );
    }
    
    export default NavBar;
    
