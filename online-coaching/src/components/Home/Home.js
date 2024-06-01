import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilepic from "../../Assets/profpic.jpg";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Home() {
  return (
      <Container fluid className="home-section">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Nathan Liu
              </h1>

              <h3 className="heading-name">
                Helping people live stronger and healthier lives everyday
              </h3>

              <h3 className="heading-name">
                No shortcuts. No excuses. No BS.
              </h3>

              <br></br>
              
              <Button variant="primary" 
                className="buttonstyle" 
                style = {{ marginLeft: 45, textAlign: "left" }} 
                size="lg" 
                as={Link}
                to="/plan"
              >
                Get Started
              </Button>

            </Col>

            <Col md={5} className="picture" style={{ paddingTop: 50, paddingLeft: 50 }}>
              <img
                src={profilepic}
                alt="profpic"
                style={{ maxHeight: "500px" }}
              />
            </Col>
          </Row>

          <br></br>

          <Row>
            <h2 style={{ paddingLeft: 60 }}> What are you looking for?</h2>
            <ul className="list" style={{ paddingRight: 60 }}>
              <li>Personalized training programs to build muscle mass and lose fat</li>
              <li>Strength training to maximize your potential and hit new PRs</li>
              <li>Corrective exercises to fix postural imbalances and general tightness</li>
            </ul>
          </Row>
          
        </Container>
      </Container>
  );
}

export default Home;