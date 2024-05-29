import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Card from "react-bootstrap/Card";
import mattsuyetani from "../../Assets/mattsuyetani.jpg";
import mattvu from "../../Assets/mattvu.jpg";

function Testimonials() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="testimonials-section">
        <Row className="testimonials-card">
          <Card className="testimonials-card-view">
            <Card.Body>
              <Card.Title>Matthew Suyetani</Card.Title>
              <Row>
                <Col md="6">
                  <Card.Text style={{ textAlign: "justify" }}>
                    Nate's supportive/caring personality along with his knowledge within powerlifting was an amazing combination which truly pushed me to my limits. Throughout his ten week program I was able to increase my squat by 44lbs, bench by 5 lbs, and deadlift by 31lbs. His positive attitude and ability to adapt mid program was amazing for when I hit plateaus and got discouraged. His coaching through the program and during meet day made me feel confident and ready during my first ever competition!
                  </Card.Text>
                </Col>
                <Col md="6">
                  <img src={mattsuyetani} alt="about" className="img-fluid" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>

        <Row className="testimonials-card">
          <Card className="testimonials-card-view">
            <Card.Body>
              <Card.Title>Matthew Vu</Card.Title>
              <Row>
                <Col md="6">
                  <Card.Text style={{ textAlign: "justify" }}>
                    I've know Nate for the past three years and I have always had a blast training with him. Just recently, he trained me for my first powerlifting meet. He helped me lose 10 pounds, but also set PRs in deadlift and squat. Nate is that dude.
                  </Card.Text>
                </Col>
                <Col md="4">
                  <img src={mattvu} alt="about" className="img-fluid" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>

        <Row className="testimonials-card">
          <Card className="testimonials-card-view">
            <Card.Body>
              <Card.Title>Joshua Lopez</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                Hi I'm Josh and I like feet
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        
      </Container>
    </div>
  );
}

export default Testimonials;
