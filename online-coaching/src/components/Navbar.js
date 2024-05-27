import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { GiStrong } from "react-icons/gi";

import { CgPen } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container style={{maxWidth: '1200px', width: '100%'}}>
        <Navbar.Brand href="/" className="d-flex">
          Nathan Liu Fitness
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/" 
                onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> 
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> 
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/plan"
                onClick={() => updateExpanded(false)}
              >
                <GiStrong
                  style={{ marginBottom: "2px" }}
                />{" "}
                Plans
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/testimonials"
                onClick={() => updateExpanded(false)}
              >
                <CgPen style={{ marginBottom: "2px" }} /> 
                Testimonials
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                as={Link}
                to="/application"
                target="_blank"
                className="fork-btn-inner"
                onClick={() => updateExpanded(false)}
              >
                Apply Now!
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
