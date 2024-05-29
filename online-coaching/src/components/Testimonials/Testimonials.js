import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Card from "react-bootstrap/Card";
import mattsuyetani from "../../Assets/mattsuyetani.jpg";

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
              <Card.Text style={{ textAlign: "justify" }}>
                Hi I'm Matt and I like feet
              </Card.Text>
              <img src={mattsuyetani} alt="about" className="img-fluid" />
            </Card.Body>
          </Card>
        </Row>

        <Row className="testimonials-card">
          <Card className="testimonials-card-view">
            <Card.Body>
              <Card.Title>Matthew Vu</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                Hi I'm Matt and I like feet
              </Card.Text>
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
