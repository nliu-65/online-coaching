import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilepic from "../../Assets/profpic.jpg";
// import Particle from "../Particle";
// import Home2 from "./Home2";
// import Type from "./Type";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Nathan Liu
              </h1>

              <h3 className="heading-name">
                Helping people maximize their potentials and live stronger and healthier lives
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

              {/* <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div> */}
            </Col>

            <Col md={5} className="picture" style={{ paddingTop: 50, paddingLeft: 50 }}>
              <img
                src={profilepic}
                alt="profpic"
                // className="img-fluid"
                style={{ maxHeight: "500px" }}
              />
            </Col>
          </Row>
          <Row>
            <h2 className="heading"> What I offer</h2>
            <ul className="list">
              <li>Personalized training plans designed specifically for your fitness level and goals</li>
              <li>Weekly check-ins to keep yourself accountable and motivated</li>
              <li>Strength training and coaching to fix postural imbalances and hit PRs</li>
            </ul>
          </Row>
          
        </Container>
      </Container>
      
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
