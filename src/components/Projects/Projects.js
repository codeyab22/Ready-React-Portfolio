import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import dad from "../../Assets/Projects/Bad-to-Dad.png";
import chill from "../../Assets/Projects/calendar-planner.jpeg";
import calendar from "../../Assets/Projects/password.png";
import password from "../../Assets/Projects/eeg.gif";
import weather from "../../Assets/Projects/suicide.png";
import revitalize from "../../Assets/Projects/algo.png";
import readme from "../../Assets/Projects/plant.jpeg";

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
              imgPath={dad}
              isBlog={false}
              title="Bad to Dad Dadabasse"
              description="A joke generator app that makes your friends chuckle and b."
              link="https://github.com/codeyab22/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chill}
              isBlog={false}
              title="Quarantine and Chill"
              description="Online api generator that helps people to pick a random movie, drink and meal to have a good rest of the weekends to relax with their friends"
              link="https://github.com/codeyab/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calendar}
              isBlog={false}
              title="Calculate this Day Planner"
              description="Using 'Calendar App of saving your events for the schedule."
              link="https://github.com/codeyab22/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={password}
              isBlog={false}
              title="Pasword Generator"
              description="Generated a password that uses authentication for the user to create a random password"
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Dashboard"
              description="Use the weather api to track the forecast weather conditions."
              link="https://gist.github.com/soumyajit4419/dc94177bc4954752051798f88fbce1df"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={revitalize}
              link=""
              title="Mental Heath App for technological professionals to rest their day from stress and fatigue"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={readme}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="ReadMe Generator"
              site="medium.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
