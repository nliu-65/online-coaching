import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywrite" style={{paddingTop: 30}}>
          Nathan Liu Training
        </Col>
        <Col md="4" className="footer-copywrite">
          <div>Email: nathanliu.training@gmail.com</div>
          <div>Phone: 408-985-2868</div>
          {/* <h3>Copyright © {year} Nathan Liu</h3> */}
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          <span>
              <a
                href="https://www.instagram.com/nate.liuser"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </span>
            {/* <span className="social-icons">
              <a
                href="https://www.linkedin.com/in/nathan-liu-655j/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </span> */}
            
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
