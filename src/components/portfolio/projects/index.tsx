import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Carousel, Col, Container } from "react-bootstrap";

import "./styles.scss";
import SaaSConsole from "./saasconsole";
import EASI from "./easi";

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section mb-5">
      <Container>
        <div className="projects-title text-center mb-5">
          <h1>Recent Projects</h1>
          <p>Projects I've worked on</p>
        </div>
        <div className="projects">
          <SaaSConsole />
          <EASI />
        </div>
        <div className="more-projects-to-come text-center mt-5">
          <p style={{ fontSize: "18px" }}>Future projects coming soon...</p>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
