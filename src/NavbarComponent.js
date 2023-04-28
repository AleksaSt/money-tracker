import React from 'react'
//Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Images
import MoneyLogo from './imgs/logo.png';

//CSS
import styles from './css/Navbar.module.css';


const NavbarComponent = () => {
  return (
    <>
     <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img className={styles.logo} src={MoneyLogo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></>
  )
}

export default NavbarComponent