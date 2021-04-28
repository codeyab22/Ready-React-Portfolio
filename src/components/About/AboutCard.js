import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            this is my website, My name is <span className="purple">Adia Boyd </span>
            from <span className="purple"> Newark, NJ.</span>
            <br />I am a independent artist to web developer. Doing the unexpected. 
            
            <br />
            <br />
            " Activities that I am love doing!"
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Playing games 
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Art: sculpture, painting and more,
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Swimming
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "To make !"{" "}
          </p>
          <footer className="blockquote-footer">Adia</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
