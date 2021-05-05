import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

<<<<<<< HEAD
import dad from "../../Assets/Projects/bad-to-dad.jpg";
import chill from "../../Assets/Projects/quarantine-and-chill.jpg";
import calendar from "../../Assets/Projects/calender-planner.jpg";
import password from "../../Assets/Projects/password.jpg";
import weather from "../../Assets/Projects/weather-dashboard.jpg";
import revitalize from "../../Assets/Projects/revitalize.jpg";
import fit from "../../Assets/Projects/fab-fitness.jpg";
=======
import dad from "../../Assets/Projects/Bad-to-Dad.png";
import chill from "../../Assets/Projects/calendar-planner.jpeg";
import calendar from "../../Assets/Projects/password.png";
import password from "../../Assets/Projects/eeg.gif";
import weather from "../../Assets/Projects/suicide.png";
import revitalize from "../../Assets/Projects/algo.png";
import readme from "../../Assets/Projects/plant.jpeg";
>>>>>>> d00e5c4e2656577b27b3b1f7624efb3abdfeabef

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
              description="A joke generator app that makes your friends chuckle and have a good time."
              link="https://shielded-caverns-11387.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chill}
              isBlog={false}
              title="Quarantine and Chill"
              description="Online api generator that helps people to pick a random movie, drink and meal to have a good rest of the weekends to relax with their friends."
              link="https://github.com/ctobin25/quarantine-and-chill"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calendar}
              isBlog={false}
              title="Calculate this Day Planner"
              description="An spicy calendar app of saving your events for the schedule."
              link="https://github.com/codeyab22/Calculate-this-Day-Calendar-Planner"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={password}
              isBlog={false}
              title="Pasword Generator"
              description="Password generator app that uses authentication for the user to create a random password."
              link="https://github.com/codeyab22/Code-Convertible-Password-Generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Dashboard"
              description="Weather api app to track the forecast weather conditions."
              link="https://github.com/codeyab22/Wise-Weather-Dashboard"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Make time to make blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={revitalize}
<<<<<<< HEAD
              link="https://github.com/Latinobull/Revitalize"
              title="Mental health and wellness app for technological professionals to rest their day from stress and fatigue."
=======
              link=""
              title="Mental Heath App for technological professionals to rest their day from stress and fatigue"
>>>>>>> d00e5c4e2656577b27b3b1f7624efb3abdfeabef
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
<<<<<<< HEAD
              imgPath={fit}
              link="https://shielded-caverns-11387.herokuapp.com/login"
              title="Fab Fitness"
              site="https://fab-fitness-tracker.herokuapp.com/"
=======
              imgPath={readme}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="ReadMe Generator"
              site="medium.com"
>>>>>>> d00e5c4e2656577b27b3b1f7624efb3abdfeabef
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;