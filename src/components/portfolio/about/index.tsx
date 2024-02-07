import { Container } from "react-bootstrap";
import "./styles.scss";
import techStacks from "../../../resources/tech-stacks/tech-stacks.json";
import { ReactSVG } from "react-svg";

interface TechStackInterface {
  name: string;
  icon: string;
}

const AboutPage = () => {
  return (
    <section className="about-section mb-5 pt-3">
      <Container>
        <div className="tech-stack-title w-100 text-center mb-3">
          <h2>Tech Stack</h2>
          <p>Technologies I've used</p>
        </div>
        <div className="tech-stacks">
          {techStacks.map((techStack: TechStackInterface, idx) => {
            const techStackIcon = `/src/assets/svgs/${techStack.icon}`;

            return (
              <div key={idx}>
                <ReactSVG src={techStackIcon} />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AboutPage;
