import React, { useState } from "react";
import ReactDOM from "react-dom";
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";
import { Modal } from '@material-ui/core';


const StyledModal = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 70%;
background-color: white;
padding: 6rem;
border-radius: 5px;
box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
z-index: 10;
max-width: 250px;
font-size: 15px;
display:flex;
flex-direction: column;
align-items: center;

`;

const ModalBtn = styled.a`
display: inline-block;
  padding: 5px;
  margin: 0.5rem 1rem;
  width: 6rem;
  background: transparent;
  color: black;
  text-align: center;
  cursor: pointer;
  background: lightgray;
  justify-content: center;
  border: none;
&:hover {
  background:darkgray;
}`



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
              <NavLink to='/search' onClick={handleSearch}><i className="fa fa-search"></i></NavLink>
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
          <StyledModal>
          <h1>What are you searching for?</h1>
          <ModalBtn onClick={handleClose}>Cancel</ModalBtn>
          </StyledModal>
        </div>
      </Modal>
   
        </div>
    );
    }
    
    export default NavBar;
    
