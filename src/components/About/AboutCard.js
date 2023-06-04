import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi guys! I am <span className="purple">Shreeya Chatterji </span>
            from <span className="purple"> Gurgaon, India.</span> I am a 3rd year student pursuing an Computer Engineering at Thapar University, Patiala. Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading books.
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching and learning from movies/series.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "It ain't what you don't know that gets you into trouble. It's what you know for sure that just aiin't so."{" "}
          </p>
          <footer className="blockquote-footer">Mark Twain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
