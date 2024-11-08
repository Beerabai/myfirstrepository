"use client"
import React from 'react'

import { Col, Container, Row,DropdownButton,Dropdown ,Navbar,Nav} from 'react-bootstrap'

const Header = () => {
  return (
   <>
   <Container>
    <div style={{height:"70px",alignItems:'center'}}>
    <Row>
      <Col xs={2}>
      <img src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png" alt=""  className='logoImg'/>
      </Col>
      <Col>
      <input type="text" placeholder='Search For Movies,Events & Plays' /></Col>
      <Col>
      <div style={{display:'flex',float:"right", marginTop:"17px"}} >
      <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
        Location
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Mansa</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Bhudhlada</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Sardulgarh</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Bathinda</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <button className='signIn'>sign in</button>
      </div>
      </Col>
    </Row>
    </div>
  
   </Container>
   <div style={{background:"#80808029"}}>  <Navbar data-bs-theme="light" style={{width:"83%",margin:"auto"}}>
        
        <Nav className="me-auto">
          <Nav.Link className='navLink' href="#home">Movies</Nav.Link>
          <Nav.Link className='navLink' href="#features">Stream</Nav.Link>
          <Nav.Link className='navLink' href="#pricing">Events</Nav.Link>
          <Nav.Link className='navLink' href="#pricing">Plays</Nav.Link>
          <Nav.Link className='navLink' href="#pricing">Sports</Nav.Link>
          <Nav.Link className='navLink' href="#pricing">Activities</Nav.Link>
        </Nav>
        <div style={{float:"right"}}>
        <Nav className="me-auto">
          <Nav.Link className='navLink' href="#home">ListYourShow</Nav.Link>
          <Nav.Link className='navLink' href="#features">Corporates</Nav.Link>
          <Nav.Link className='navLink' href="#pricing">Offers</Nav.Link>
          <Nav.Link className='navLink' href="#pricing">Gift Cards</Nav.Link>
        </Nav>
        </div>
    </Navbar></div>
   </>
  )
}

export default Header
