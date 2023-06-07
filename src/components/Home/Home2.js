import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/F1.png";
import Contact  from "./Contact";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Exploring the techworld with the aim to discover new technologies... trying to learn through the way 🚀
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Java and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies </b> and
                also in research in{" "}
                <b className="purple">
                  Machine Learning
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion in technologies
              with <b className="purple">networking (GNS3, Cisco & NS3)</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Contact/>
      </Container>
    </Container>
  );
}
export default Home2;
