import React, { useState } from "react";
import { Nav, Navbar, Container} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";
import logo from "../assets/ALTRUST-light-1536x326.png";
import "./Navigation.css"

function Navigation() {
  const location = useLocation();




  const isRegisterPath = location.pathname.startsWith("/register/");

  if (isRegisterPath) {
    return null;
  }
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#133664" }}>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} style={{ width: '100%', height: '60px' }} alt="" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {!isRegisterPath && (
                <>
                  <LinkContainer to="/">
                    <Nav.Link className="nav-center" style={{ color: "#cfcfcf" }}>Home</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
