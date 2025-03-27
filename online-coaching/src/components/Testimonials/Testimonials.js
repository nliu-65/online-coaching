import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { BsQuote } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import mattsuyetani from "../../Assets/mattsuyetani.jpg";
import mattvu from "../../Assets/mattvu.jpg";
import joshlopez from "../../Assets/joshlopez.JPG";
import jaredura_before from "../../Assets/jaredura_before.jpg";
import jaredura_after from "../../Assets/jaredura_after.jpg";

function Testimonials() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="testimonials-section">
        <Row>
        <Col md="6" className="testimonials-card">
          <Card className="testimonials-card-view">
            <Card.Body>
              <Card.Title>Matthew Suyetani</Card.Title>
              <Row>
                <Col md="6">
                  <Card.Text className="review" style={{ textAlign: "justify" }}>
                    "Nate's supportive/caring personality along with his knowledge within powerlifting was an amazing combination which truly pushed me to my limits. Throughout his ten week program I was able to increase my squat by 44lbs, bench by 5 lbs, and deadlift by 31lbs. His positive attitude and ability to adapt mid program was amazing for when I hit plateaus and got discouraged. His coaching through the program and during meet day made me feel confident and ready during my first ever competition!"
                  </Card.Text>
                  <Card.Text className="review" style={{ textAlign: "justify" }}>
                    - May 27, 2024
                  </Card.Text>
                </Col>
                <Col md="6">
                  <img src={mattsuyetani} alt="about" className="img-fluid" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md="6" className="testimonials-card">
          <Card className="testimonials-card-view">
            <Card.Body>
              <Card.Title>Matthew Vu</Card.Title>
              <Row>
                <Col md="6">
                  <Card.Text className="review" style={{ textAlign: "justify" }}>
                    "I've know Nate for the past three years and I have always had a blast training with him. Just recently, he trained me for my first powerlifting meet. He helped me lose 10 pounds, but also set PRs in deadlift and squat. Nate is that dude."
                  </Card.Text>
                  <Card.Text className="review" style={{ textAlign: "justify" }}>
                    - May 27, 2024
                  </Card.Text>
                </Col>
                <Col md="6">
                  <img src={mattvu} alt="about" className="img-fluid" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        </Row>

        <Row>
        <Col md="6" className="testimonials-card">
          <Card className="testimonials-card-view">
            <Card.Body>
              <Card.Title>Houston Huynh</Card.Title>
              <Row>
                <Col md="12">
                  <Card.Text className="review"style={{ textAlign: "justify" }}>
                  "I was able to do the 12 week program with Nathan and i was able to increase my bench and squat by 30lbs. nathan is one of the easiest people to talk to. He supports you throughout the whole process, but most importantly he is not only a trainer but he is a friend. he definitely wants the best for you, everything he does has a purpose, so trust the process. I learned a lot shoutout nathan"
                  </Card.Text>
                  <Card.Text className="review" style={{ textAlign: "justify" }}>
                    - September 15, 2024
                  </Card.Text>
                </Col>
                {/* <Col md="6">
                  <img src={} alt="about" className="img-fluid" />
                </Col> */}
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md="6" className="testimonials-card">
          <Card className="testimonials-card-view">
            <Card.Body>
              <Card.Title>Joshua Lopez</Card.Title>
              <Row>
                <Col md="6">
                  <Card.Text className="review" style={{ textAlign: "justify" }}>
                    "Nathan trained me for 18 weeks. 6 of it, I was bulking, the other 12, I was cutting. He was really good with getting me through both of those phases as he helped me increase my bench by 25+ lbs and lose 15 lbs He walked me through exercising technique and individualized workout splits strategies to reach my goals. He was always responsive to my messages and very positive as a coach, and always seemed to know the best ways to assist me!"
                  </Card.Text>
                  <Card.Text className="review" style={{ textAlign: "justify" }}>
                    - September 20, 2024
                  </Card.Text>
                </Col>
                <Col md="6">
                  <img src={joshlopez} alt="about" className="img-fluid" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        </Row>

        <Row>
        <Col md="6" className="testimonials-card">
          <Card className="testimonials-card-view">
            <Card.Body>
              <Card.Title>Adit Jain</Card.Title>
              <Row>
                <Col md="12" >
                  <Card.Text className="review" style={{ textAlign: "justify" }}>
                    "I've tried some forms of personal training before but none have been more effective than my 12 weeks working with Nate. He pushed me to a point I didn't know I had in me and helped me gain confidence in my strength and abilities in the gym. I ended up increasing my bench PR by 15 pounds and squat PR by 45 pounds while feeling noticeably bigger. Nate helped me stay accountable while having more fun in the gym. Can't recommend his programs enough!"
                  </Card.Text>
                  <Card.Text className="review" style={{ textAlign: "justify" }}>
                    - September 28, 2024
                  </Card.Text>
                </Col>
                {/* <Col md="6">
                  <img src={} alt="about" className="img-fluid" />
                </Col> */}
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md="6" className="testimonials-card">
          <Card className="testimonials-card-view">
            <Card.Body>
              <Card.Title>Jared Ura</Card.Title>
              <Row>
                <Col md="6" >
                  <Card.Text className="review" style={{ textAlign: "justify" }}>
                    "Nate’s programs are effective and efficient, setting me up to improve my bench press PR by 30lbs and squat PR by 50lbs after nearly a year of stagnant progress prior. Nate is also an extremely flexible trainer, as he quickly adjusted for unforeseen setbacks (COVID, minor injuries) in a way that allowed me to keep pushing towards my goals. Importantly, Nate helped me realize my own potential at the gym, unlocking both a physical and mental strength that I didn’t know I had. As a previous client stated, Nate really is that dude."
                  </Card.Text>
                  <Card.Text className="review" style={{ textAlign: "justify" }}>
                    - January 31, 2025
                  </Card.Text>
                </Col>
                <Col md="3">
                  <img src={jaredura_before} alt="about" className="img-fluid" />
                </Col>
                <Col md="3">
                  <img src={jaredura_after} alt="about" className="img-fluid" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        
        
      </Container>
    </div>
  );
}

export default Testimonials;
