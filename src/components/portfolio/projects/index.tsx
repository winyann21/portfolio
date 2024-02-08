import { Button, Col, Container } from "react-bootstrap";
import SaaSConsole from "../../../assets/imgs/saasconsole.png";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section pt-5 mb-5">
      <Container>
        <div className="projects-title text-center mb-5">
          <h1>Recent Projects</h1>
          <p>Projects I've worked on</p>
        </div>
        <div className="projects-content d-md-flex align-items-center">
          {/* SAASCONSOLE */}
          <Col md={7} className="mr-md-3">
            <img
              src={SaaSConsole}
              alt="saasconsole"
              className="img-saasconsole"
            />
          </Col>
          <Col md={5}>
            <div className="project-title m-0">
              <h2 className="mt-3 mb-0">SaaSConsole</h2>
              <p className="mb-3">Hooli Software</p>
            </div>
            <div className="project-content mb-3">
              <p>
                {"> "} I am one of the developers of this project that offers{" "}
                <b>fast & easy</b> SaaS management and manages groups of users.
              </p>
              <p>
                {"> "} Integrated SaaS applications such as: <b>Google Cloud</b>
                , <b>Slack</b>, <b>Asana</b>, <b>Hootsuite</b>, and{" "}
                <b>Bitbucket</b>.
              </p>
              <div className="mt-5 text-end visit-website-block">
                <a
                  className="btn-visit-website"
                  href="https://saasconsole.com"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGlobe} /> Visit Website
                </a>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
