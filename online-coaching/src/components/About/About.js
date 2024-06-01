import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutme from "../../Assets/powerlifting.jpg";
import {
  GiStrong
} from "react-icons/gi"

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row>
          <Col className="left">
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Hello, I'm Nathan
            </h1>

            <p>Welcome to my page! I am an online fitness coach dedicated to transforming people's lives through personalized fitness plans. Here's a little bit about me:
            </p>
              
            <p>Ever since I was a kid, I always had some sort of passion for fitness and health. 
               Throughout my time in middle/high school, I was heavily involved in cardio sports like swimming, cross country, and track and field because they allowed me to push myself to my limits.
               In college, I dove into the world of weight lifting and developed a newfound love for powerlifting.
               Currently, I work out on a hybrid split, mixing in a balance of both cardio and powerlifting in my fitness lifestyle.
            </p>

            <br></br>

            <h2>
              Why did I become a trainer?
            </h2>

            <p>
               I currently work as a software engineer in the Bay Area, but I believe that part of my vocation also lies in the fitness industry. 
               Many of my friends and family have reached out to me about fitness advice, and their feelings of achievement encouraged me to pursue personal training. 
               As a result, I worked towards getting my Certification for Personal Training with NASM to understand the field on a deeper level. 
            </p>

            <p>
               Through my experiences, I quickly realized that personal training is personalized for a reason; you can't prescribe a cookie cutter plan from the internet for just anyone.
               I write my clients optimized plans completely based off of their goals and needs so that they can enjoy the little things in life, like watching TV or eating their favorite snacks.
               Working out and getting stronger doesn't always have to suck. I am a huge advocate for enjoying what you do while also reaping the full benefits of living a healthy lifestyle.
               If you want to work with me, I can help you transform your life one set a time, one rep at a time. <GiStrong/>
            </p>

            <br></br>

            <h2>Credentials</h2>
            <ul className="left">
              <li>NASM Certified Personal Trainer</li>
              <li>ASTI CPR/AED Certification</li>
              <li>NASM Weight Loss Specialist (in progress)</li>
              <li>NASM Certified Nutrition Coach (in progress)</li>
              <li>NASM Metabolic Makeover (in progress)</li>
            </ul>
            
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "10px", paddingBottom: "50px", paddingLeft: "50px" }}
            className="about-img"
          >
            <img src={aboutme} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
