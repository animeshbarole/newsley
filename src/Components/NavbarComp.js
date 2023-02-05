//import PropTypes from 'prop-types'

import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


import {
 
  Link
} from "react-router-dom";




const NavBarComp =()=> {
 
    return (
     
      <Navbar bg="dark"  className='fixed-top'  variant ={"dark"} expand="lg">
      <Container>
        <Navbar.Brand href ="#home"   >NewsLey</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            
            <Nav.Link as ={Link} to = {"/home"}>Home</Nav.Link>
            <Nav.Link as ={Link} to = {"/business"}>business</Nav.Link>  
            <Nav.Link as ={Link} to = {"/entertainment"}>entertainment</Nav.Link>
            <Nav.Link as ={Link} to = {"/health"}>health</Nav.Link> 
            <Nav.Link as ={Link} to = {"/science"}>science</Nav.Link>
            <Nav.Link as ={Link} to = {"/sports"}>sports</Nav.Link>
            <Nav.Link as ={Link} to = {"/technology"}>technology</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  
  
   
    )
  
}

export default NavBarComp

