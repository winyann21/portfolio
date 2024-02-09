import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Carousel, Col, Container } from "react-bootstrap";
import SaaSConsoleActs from "../../../assets/imgs/saas-acts.png";
import SaaSConsoleDepts from "../../../assets/imgs/saas-depts.png";
import SaaSConsoleGroups from "../../../assets/imgs/saas-groups.png";
import SaaSConsoleIntegs from "../../../assets/imgs/saas-integs.png";
import SaaSConsolePeople from "../../../assets/imgs/saas-people.png";
import SaaSConsoleRBAC from "../../../assets/imgs/saas-rbac.png";
import SaaSConsole from "../../../assets/imgs/saasconsole.png";
import "./styles.scss";

const ProjectsSection = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <section id="projects" className="projects-section mb-5">
      <Container>
        <div className="projects-title text-center mb-5">
          <h1>Recent Projects</h1>
          <p>Projects I've worked on</p>
        </div>
        <div className="projects-content d-md-flex align-items-center">
          {/* SAASCONSOLE */}
          <Col md={7} className="mr-md-3">
            {/* <img
              src={SaaSConsole}
              alt="saasconsole"
              className="img-saasconsole"
            /> */}

            <Carousel
              className="carousel"
              interval={3000}
              fade
              variant="dark"
              indicators={false}
              controls={isHovered}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Carousel.Item>
                <img
                  className="img-saasconsole d-block w-100"
                  src={SaaSConsole}
                  alt="Dashboard"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-saasconsole d-block w-100"
                  src={SaaSConsolePeople}
                  alt="Peoples"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-saasconsole d-block w-100"
                  src={SaaSConsoleGroups}
                  alt="Groups"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-saasconsole d-block w-100"
                  src={SaaSConsoleDepts}
                  alt="Departments"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-saasconsole d-block w-100"
                  src={SaaSConsoleActs}
                  alt="Activities"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-saasconsole d-block w-100"
                  src={SaaSConsoleIntegs}
                  alt="Integrations"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-saasconsole d-block w-100"
                  src={SaaSConsoleRBAC}
                  alt="RBAC"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={5}>
            <div className="project-title m-0">
              <h2 className="mt-3 mb-0">SaaSConsole</h2>
              <p className="mb-3">Hooli Software Inc.</p>
            </div>
            <div className="project-content mb-3">
              <p>
                {"> "} I am one of the developers of this project that offers{" "}
                <b>fast & easy SaaS management and manages groups of users</b>.
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

        <div className="more-projects-to-come text-center mt-5">
          <p style={{ fontSize: "18px" }}>Future projects coming soon...</p>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
