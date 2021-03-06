import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/adiaResume.pdf";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Data Analytics [BrainStation]"
              date="February 2021 - April 2021"
              content={[
                "Utilized significant data and use technology such Tableau to find problems in modeling and the numbers of visitors attended to musuem through surveying and research.",
                
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Girls Who Code participant [Feb 2021-Present]"
              content={[
                "Execued coding  projects and activities through communicationg resours that are useful for women and girls.",
              ]}
            />
            <Resumecontent
              title="Web Developer [ October 2020-Present Columbia Boot camp]"
              content={[
                "worked on projects with teams and groups using libraries and technlgies such as Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="College of St. Elizabeth' [Morristown, NJ] "
              date="2011 - 2015"
              content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
            />
            <Resumecontent
              title="Representative of the STAC[Morristown,NJ]"
              date="2011 - 2015"
              content={["Precentage: 88%"]}
            />
            <Resumecontent
              title="Representative of Lectures Concerts [Morristown, NJ] "
              date="2013 - 2015"
              content={["Precentage: 86%"]}
            />
            <h3 className="resume-title">Ranks and Achievements</h3>
            <Resumecontent
              title=""
              content={[
                `Current job-seeker ${spojRank}`,
                `Current student in Coding Boot Camp  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Girls Who Code",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}
 export default Resume; 
