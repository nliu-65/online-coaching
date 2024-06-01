import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Plans() {
  return (
    <Container fluid className="plan-section">
      <Container>
        <Container className="left">
          <h1 className="plan-heading">
            Plans
          </h1>
          <p style={{ color: "white" }}>
            Thanks for making it this far into my website! My coaching services are 100% online, and I offer a free 30 minute consultation for prospective clients to help them decide if they want to work with me.
            If you do decide to work with me, I provide the following for all 3 plans below:
            <br></br>
            <ul>
              <li>Programming - I provide personalized training programs for all my clients based on their goals. I create these programs through a mobile app called Everfit.</li>
              <li>Accountability - I will be keeping all my clients accountable through weekly check-ins, and make adjustments/changes to workouts if needed based on client progress.</li>
              <li>Communication - I will be available for you to contact 24/7, and I can always hop on a quick call everyday.</li>
              <li>Nutrition Advice - I can provide nutritional advice and recommendations to help you achieve your goals.</li>
            </ul>
          </p>
          <Container>
            <Button
              as={Link}
              to="/application">
                Apply Now!
            </Button>
          </Container>
          
        </Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="plan-card">
          <Card className="plan-card-view">
            <Card.Body>
              <Card.Title>4 Weeks</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                Just getting started? No worries! Try out a 4 week plan to test out the waters for yourself. I offer free consultation, so doesn't hurt to try!
              </Card.Text>
              <h3>$240</h3>
              <h7>($60/week)</h7>
            </Card.Body>
          </Card>
          </Col>

          <Col md={4} className="plan-card">
          <Card className="plan-card-view">
            <Card.Body>
              <Card.Title>12 Weeks</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                A 12 week program will help you figure out how your body works and how to constantly improve it. I will implement a refined progressive overloading plan, where we will make changes and progress every week.
              </Card.Text>
              <h3>$450</h3>
              <h7>($37.50/week)</h7>
            </Card.Body>
          </Card>
          </Col>

          <Col md={4} className="plan-card">
          <Card className="plan-card-view">
            <Card.Body>
              <Card.Title>24 Weeks (Best Value!)</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                Are you looking for something long term? A 24 week program will help you fully achieve your goals, and you will learn a lot about your personal strengths. By the end of the training period, you will be able to confidently pursue your goals and hold yourself accountable.
              </Card.Text>
              <h3>$840</h3>
              <h7>($35/week)</h7>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Plans;
