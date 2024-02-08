import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Container, Nav, Navbar } from "react-bootstrap";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const HeaderSection = () => {
  return (
    <header>
      <Navbar>
        <Container className="mt-3">
          <Navbar.Brand href="#home">
            <h1
              style={{
                fontFamily: "'Pixelify Sans', sans-serif",
                fontWeight: 700,
              }}
            >
              win
            </h1>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#tech-stack">TECH STACK</Nav.Link>
            <Nav.Link href="#projects">PROJECTS</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link
              href="https://linkedin.com/in/sherwin-romero"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </Nav.Link>
            <Nav.Link href="mailto:it.sherwinromero@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default HeaderSection;
