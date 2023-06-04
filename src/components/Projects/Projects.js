import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jpmctask from "../../Assets/Projects/jpmctask.png";
import appe from "../../Assets/Projects/appdev.png";
import flappy from "../../Assets/Projects/flappy (2).png";
import mark from "../../Assets/Projects/markdown.png";
import paint from "../../Assets/Projects/painto.png";
import gene from "../../Assets/Projects/gene.png";
import handwriting from "../../Assets/Projects/handwriting.png";
import muskan from "../../Assets/Projects/muskan.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mark}
              isBlog={false}
              title="Markdown Editor"
              description="Online code and markdown editor build with react.js. Online markdown editor for building README file with instant preview."
              ghLink="https://github.com/shreeyachatzz/Markdown-Editor"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gene}
              isBlog={false}
              title="Gene Sequencing"
              description="A model to predict the species using a given gene sequence made using Jupyter Notebook."
              ghLink="https://github.com/shreeyachatzz/DNA-Sequencing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flappy}
              isBlog={false}
              title="Flappy Bird Online Game"
              description="A flappy bird game built for my society using HTML, CSS, JS."
              ghLink="https://github.com/shreeyachatzz/Flappy-Bird-Game"
              demoLink="https://acm-thapar.github.io/Flappy-Bird-Game/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jpmctask}
              isBlog={false}
              title="JPMC TASK"
              description="Trading Dashboard with JPMC's Perspective for trader to have a complete picture of all the trading strategies abeing monitored to improve trader performance. Technologies in use: Python, Typescript, React and Git "
              ghLink="https://github.com/shreeyachatzz/jpmc-task-3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paint}
              isBlog={false}
              title="Paint-o-Web"
              description="A html, css, js website that can be used to paint on laptops."
              ghLink="https://shreeyachatzz.github.io/paint-o-web/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appe}
              isBlog={false}
              title="Roadmap to App Dev"
              description="A reactJS web application with attractive UI equipped with adequate resources that can be used as a guide for starting App Development by begginners."
              ghLink="https://github.com/shreeyachatzz/RoadmapToAppDev_ReactJS"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={handwriting}
              isBlog={false}
              title="Handwriting Recognition"
              description="A KNN based ML model to read Handwritings using NLP by learning from previously given sample dataset of handwritings."
              ghLink="https://github.com/shreeyachatzz/HandWriting_Recognition_KNN"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={muskan}
              isBlog={false}
              title="Muskan"
              description="A sample portfolio website for NGO Muskan demonstrating their features and services made using HTML, CSS and JS."
              ghLink="https://github.com/shreeyachatzz/NGO_Muskan"
              demoLink="https://shreeyachatzz.github.io/NGO_Muskan/" 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
